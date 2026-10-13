import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, relative, resolve } from 'node:path';
import { groups, included, loadRecords, page, renderCatalog, root, slug } from './catalog-lib.mjs';

const errors = [];
const records = loadRecords();
const scope = JSON.parse(readFileSync(resolve(root, 'data/review-scope.json'), 'utf8'));
const expected = new Set(scope.mcps);
const observed = new Set(records.map((record) => record.repo));
if (expected.size !== scope.mcps.length) errors.push('Review scope has duplicate repositories');
for (const name of expected) if (!observed.has(name)) errors.push(`Missing MCP inventory: ${name}`);
for (const name of observed) if (!expected.has(name)) errors.push(`MCP is outside the declared review scope: ${name}`);
if (observed.size !== records.length) errors.push('Duplicate MCP inventories');

const validTags = new Set(['inspect', 'edit', 'workspace', 'release', 'audit', 'test', 'offline', 'server-side', 'hosting', 'access', 'generic-api']);
const groupIds = new Set(groups.map((group) => group.id));
const origins = new Set(['tools/list', 'literal-source', 'reconstructed', 'official-docs']);
function evidence(value, label) {
  try {
    if (new URL(value).protocol !== 'https:') throw new Error();
  } catch { errors.push(`${label}: evidence must be an HTTPS URL`); }
}
function schemaCheck(schema, label, document = schema) {
  if (typeof schema === 'boolean') return;
  if (!schema || typeof schema !== 'object' || Array.isArray(schema)) {
    errors.push(`${label}: invalid JSON Schema object`);
    return;
  }
  if (schema.$ref) {
    if (typeof schema.$ref !== 'string' || !schema.$ref.startsWith('#/')) errors.push(`${label}: external or invalid schema reference must be resolved in the snapshot`);
    else {
      let target = document;
      for (const segment of schema.$ref.slice(2).split('/')) target = target?.[segment.replaceAll('~1', '/').replaceAll('~0', '~')];
      if (target === undefined) errors.push(`${label}: unresolved ${schema.$ref}`);
    }
  }
  if (schema.required && (!Array.isArray(schema.required) || schema.required.some((key) => typeof key !== 'string') || new Set(schema.required).size !== schema.required.length)) errors.push(`${label}: invalid required list`);
  if (schema.required && schema.properties && !schema.allOf && schema.required.some((key) => !(key in schema.properties))) errors.push(`${label}: required field missing from properties`);
  for (const keyword of ['properties', 'patternProperties', '$defs', 'definitions', 'dependentSchemas']) {
    if (schema[keyword]) for (const [name, child] of Object.entries(schema[keyword])) schemaCheck(child, `${label}.${name}`, document);
  }
  for (const keyword of ['additionalProperties', 'additionalItems', 'contains', 'propertyNames', 'not', 'if', 'then', 'else', 'unevaluatedProperties', 'unevaluatedItems']) {
    if (schema[keyword] !== undefined) schemaCheck(schema[keyword], `${label}.${keyword}`, document);
  }
  for (const keyword of ['anyOf', 'oneOf', 'allOf', 'prefixItems']) {
    if (schema[keyword]) for (const child of schema[keyword]) schemaCheck(child, `${label}.${keyword}`, document);
  }
  if (schema.items !== undefined) {
    if (Array.isArray(schema.items)) for (const child of schema.items) schemaCheck(child, `${label}.items`, document);
    else schemaCheck(schema.items, `${label}.items`, document);
  }
}

for (const record of records) {
  const label = record.repo;
  evidence(record.url, label);
  if (record.commit !== null && !/^[0-9a-f]{40}$/.test(record.commit)) errors.push(`${label}: invalid upstream commit`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(record.checkedAt)) errors.push(`${label}: missing snapshot date`);
  if (!['keep', 'remove'].includes(record.decision) || record.review?.status !== 'reviewed') errors.push(`${label}: parent review is incomplete`);
  if (!record.sources?.length) errors.push(`${label}: missing source evidence`);
  for (const source of record.sources ?? []) evidence(source, label);
  if (included(record)) {
    if (!groupIds.has(record.review.classification)) errors.push(`${label}: missing capability group`);
    if (!record.tools.some((tool) => tool.scope === 'gtm')) errors.push(`${label}: included server has no GTM tools`);
    if (record.gaps.length) errors.push(`${label}: included server has unresolved schema gaps`);
    if (!record.review.summary) errors.push(`${label}: missing tool-derived summary`);
  }
  const names = new Set();
  for (const tool of record.tools) {
    const toolLabel = `${label}/${tool.name}`;
    if (!tool.name || typeof tool.name !== 'string' || names.has(tool.name)) errors.push(`${toolLabel}: missing or duplicate tool name`);
    names.add(tool.name);
    if (typeof tool.description !== 'string' || !tool.behavior) errors.push(`${toolLabel}: missing description or inspected behavior`);
    if (!['gtm', 'auxiliary', 'other'].includes(tool.scope)) errors.push(`${toolLabel}: invalid scope`);
    if (!origins.has(tool.schemaOrigin)) errors.push(`${toolLabel}: missing schema provenance`);
    if (!Array.isArray(tool.tags) || tool.tags.some((tag) => !validTags.has(tag))) errors.push(`${toolLabel}: invalid capability tag`);
    evidence(tool.source, toolLabel);
    if (tool.inputSchema?.type !== 'object') errors.push(`${toolLabel}: missing complete object input schema`);
    schemaCheck(tool.inputSchema, toolLabel);
    if (tool.validationInputSchema) schemaCheck(tool.validationInputSchema, `${toolLabel}.validation`);
    if (tool.outputSchema) schemaCheck(tool.outputSchema, `${toolLabel}.output`);
    for (const variant of tool.exposureVariants ?? []) {
      if (variant.name !== tool.name || !variant.exposure || typeof variant.description !== 'string') errors.push(`${toolLabel}: invalid alternate registration`);
      schemaCheck(variant.inputSchema, `${toolLabel}.alternate`);
      if (variant.outputSchema) schemaCheck(variant.outputSchema, `${toolLabel}.alternate.output`);
    }
  }
  for (const gap of record.gaps) {
    if (!gap.name || names.has(gap.name) || !gap.reason) errors.push(`${label}: duplicate or unexplained schema gap`);
    names.add(gap.name);
    evidence(gap.source, `${label}/${gap.name}`);
  }
  if (record.review?.examples) for (const name of record.review.examples) {
    if (!record.tools.some((tool) => tool.name === name && tool.scope === 'gtm')) errors.push(`${label}: example is not an extracted GTM tool: ${name}`);
  }
  if (!existsSync(resolve(root, 'data/mcps', `${slug(record.repo)}.json`))) errors.push(`${label}: incorrect inventory filename`);
}

for (const [name, content] of renderCatalog(records)) {
  const path = resolve(root, name);
  if (!existsSync(path) || readFileSync(path, 'utf8') !== content) errors.push(`Generated content is stale: ${name}`);
}
const expectedPages = new Set([...renderCatalog(records).keys()].filter((name) => name.startsWith('mcps/')));
for (const name of readdirSync(resolve(root, 'mcps'))) if (name.endsWith('.md') && !expectedPages.has(`mcps/${name}`)) errors.push(`Orphan MCP detail page: ${name}`);

const documents = ['README.md', 'TOOL_INDEX.md', 'REVIEW.md', 'SUPPORTING_TOOLS.md', 'AGENTS.md', 'CONTRIBUTING.md', ...expectedPages];
const texts = new Map();
const anchorSets = new Map();
function headingSlug(title) {
  return title.toLowerCase().replace(/[^\p{L}\p{N}\s_-]/gu, '').replaceAll(' ', '-');
}
for (const name of documents) {
  const path = resolve(root, name);
  if (!existsSync(path)) { errors.push(`Missing document: ${name}`); continue; }
  const source = readFileSync(path, 'utf8').replace(/^(`{3,}|~{3,})[^\n]*\n[\s\S]*?^\1\s*$/gm, '');
  texts.set(name, source);
  const anchors = new Set([...source.matchAll(/<a id="([^"]+)"><\/a>/g)].map((match) => match[1]));
  const seen = new Map();
  for (const [, title] of source.matchAll(/^#{1,6} (.+)$/gm)) {
    const base = headingSlug(title); const n = seen.get(base) ?? 0;
    anchors.add(n ? `${base}-${n}` : base); seen.set(base, n + 1);
  }
  anchorSets.set(name, anchors);
}
for (const [name, source] of texts) {
  for (const [, target] of source.matchAll(/(?<!!)\[[^\]\n]*\]\(([^\s)]+)\)/g)) {
    if (/^[a-z]+:/i.test(target)) continue;
    const [local, anchor] = target.split('#');
    const path = local ? resolve(dirname(resolve(root, name)), decodeURIComponent(local)) : resolve(root, name);
    if (!existsSync(path)) errors.push(`${name}: missing local link ${target}`);
    else if (anchor && path.endsWith('.md') && !anchorSets.get(relative(root, path))?.has(anchor)) errors.push(`${name}: missing anchor ${target}`);
  }
}
if (errors.length) {
  errors.forEach((error) => console.error(error));
  process.exitCode = 1;
} else {
  const kept = records.filter(included);
  console.log(`Validated ${records.length} complete reviews, ${kept.length} included MCPs, all schemas, generated tool names, counts, and local links.`);
}
