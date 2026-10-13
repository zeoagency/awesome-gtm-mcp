import { createHash } from 'node:crypto';
import { readFileSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';

export const root = resolve(import.meta.dirname, '..');
export const slug = (repo) => repo.toLowerCase().replaceAll('/', '--');
export const anchor = (name) => `tool-${name.toLowerCase().replace(/[^a-z0-9_-]+/g, '-')}-${createHash('sha256').update(name).digest('hex').slice(0, 8)}`;
export const page = (record) => `mcps/${slug(record.repo)}.md`;
export function toolPage(record, name) {
  if (record.tools.length <= 500) return page(record);
  const other = record.tools.filter((tool) => tool.scope !== 'gtm');
  const index = other.findIndex((tool) => tool.name === name);
  return index < 0 ? page(record) : `mcps/${slug(record.repo)}.tools-${String(Math.floor(index / 150) + 1).padStart(3, '0')}.md`;
}
export const compare = (a, b) => a.toLowerCase() < b.toLowerCase() ? -1 : a.toLowerCase() > b.toLowerCase() ? 1 : a < b ? -1 : a > b ? 1 : 0;
export const escapeCell = (value) => value.replaceAll('|', '\\|').replaceAll('\n', ' ');
const prose = (value) => value.split(/(<https:\/\/[^>]+>|https:\/\/[^\s<>]+)/g).map((part, index) => {
  if (index % 2 === 0) return part.replace(/([_*\[\]])/g, '\\$1');
  if (part.startsWith('<')) return part;
  const clean = part.replace(/[.,;)]*$/, '');
  return `<${clean}>${part.slice(clean.length)}`;
}).join('');
export function loadRecords() {
  return readdirSync(resolve(root, 'data/mcps')).filter((name) => name.endsWith('.json'))
    .map((name) => JSON.parse(readFileSync(resolve(root, 'data/mcps', name), 'utf8')))
    .sort((a, b) => compare(a.repo, b.repo));
}

export const groups = [
  { id: 'audit', title: 'Audit containers and tracking', purpose: 'Find unused entities, inspect consent configuration, map tracking setups, and produce audit reports.' },
  { id: 'test', title: 'Inspect websites and dataLayer', purpose: 'Find installed containers, examine page tracking, and validate dataLayer payloads.' },
  { id: 'offline', title: 'Edit exported containers offline', purpose: 'Inspect and change exported container files without calling the live Tag Manager API.' },
  { id: 'hosting', title: 'Operate server-side GTM hosting', purpose: 'Manage server-side hosting instances, domains, and service logs.' },
  { id: 'server-side', title: 'Manage server-side clients and transformations', purpose: 'Configure server-container clients, transformations, templates, and event routing settings.' },
  { id: 'changes', title: 'Stage compare and release changes', purpose: 'Plan changes, compare versions, synchronize workspaces, and review or publish releases.' },
  { id: 'manage', title: 'Manage containers tags triggers and variables', purpose: 'Create and edit container resources through dedicated Tag Manager API tools.' },
  { id: 'inspect', title: 'Inspect containers without edit tools', purpose: 'Browse accounts, containers, workspaces, entities, and published versions through read tools.' },
  { id: 'generic', title: 'Call GTM through generic and discovery tools', purpose: 'Use generic request tools or discovery-generated interfaces to reach Tag Manager endpoints.' },
];

export const included = (record) => record.decision === 'keep' && record.review?.status === 'reviewed';

export function renderCatalog(records) {
  const output = new Map();
  const kept = records.filter(included);
  const removed = records.filter((record) => !included(record));
  const tools = kept.flatMap((record) => record.tools.filter((tool) => tool.scope === 'gtm').map((tool) => ({ record, tool })));
  const names = new Map();
  for (const entry of tools) {
    if (!names.has(entry.tool.name)) names.set(entry.tool.name, []);
    names.get(entry.tool.name).push(entry);
  }
  const allNames = new Map();
  for (const record of records) {
    for (const tool of record.tools) {
      if (!allNames.has(tool.name)) allNames.set(tool.name, []);
      allNames.get(tool.name).push({ record, tool, gap: false });
    }
    for (const tool of record.gaps) {
      if (!allNames.has(tool.name)) allNames.set(tool.name, []);
      allNames.get(tool.name).push({ record, tool, gap: true });
    }
  }
  const liveGroups = groups.map((group) => ({ ...group, records: kept.filter((r) => r.review.classification === group.id) })).filter((g) => g.records.length);
  const home = [
    '# Awesome Google Tag Manager (GTM) MCP [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)', '',
    '> Discover what Google Tag Manager MCP tools actually do.', '',
    `**${kept.length} MCP servers · ${tools.length} GTM tool definitions · ${names.size} distinct GTM tool names.**`, '',
    '[Find a tool by name](TOOL_INDEX.md) · [CLIs and SDKs](SUPPORTING_TOOLS.md) · [Review decisions](REVIEW.md)', '',
    'Grouped by inspected GTM handlers. Detail pages preserve complete server inventories, including supporting and other-product tools.', '',
    '## Contents', '',
  ];
  for (const group of liveGroups) home.push(`- [${group.title} (${group.records.length})](#${group.id})`);
  for (const group of liveGroups) {
    home.push('', `<a id="${group.id}"></a>`, '', `## ${group.title}`, '', `*${group.records.length} MCP servers. ${group.purpose}*`, '', '| MCP | What its tools do | Tool list |', '|---|---|---|');
    for (const record of group.records) {
      const gtm = record.tools.filter((tool) => tool.scope === 'gtm');
      const examples = (record.review.examples ?? gtm.slice(0, 3).map((t) => t.name)).map((name) => `[\`${escapeCell(name)}\`](${toolPage(record, name)}#${anchor(name)})`).join(', ');
      const count = gtm.length === record.tools.length ? `${record.tools.length} tools` : `${gtm.length} GTM / ${record.tools.length} total`;
      home.push(`| [**${escapeCell(record.repo)}**](${record.url}) | ${escapeCell(record.review.summary)}${examples ? ` ${examples}.` : ''} | [${count}](${page(record)}) |`);
    }
  }
  output.set('README.md', home.join('\n') + '\n');

  const index = ['# Tool index', '', '[Back to the catalog](README.md). Search this page for an exact tool name or use GitHub repository search.', '',
    `**${allNames.size} distinct names across ${records.length} inspected MCPs.** Each link opens the provider’s inventory. Supporting tools, other products, excluded providers, and unavailable parameters are labeled.`, '',
    '| Tool name | MCP providers |', '|---|---|'];
  for (const [name, entries] of [...allNames].sort((a, b) => compare(a[0], b[0]))) {
    index.push(`| \`${escapeCell(name)}\` | ${entries.map(({ record, tool, gap }) => {
      const labels = [];
      if (!included(record)) labels.push('excluded');
      if (gap) labels.push(tool.kind === 'documented-action' ? 'documented action; MCP name and parameters unverified' : 'parameters unavailable');
      else if (tool.scope !== 'gtm') labels.push(tool.scope === 'other' ? 'other product' : 'supporting');
      return `[${escapeCell(record.repo)}](${toolPage(record, name)}#${anchor(name)})${labels.length ? ` (${labels.join(', ')})` : ''}`;
    }).join(' · ')} |`);
  }
  output.set('TOOL_INDEX.md', index.join('\n') + '\n');

  const review = ['# Review decisions', '', '[Back to the catalog](README.md).', '',
    'Tool inventories were extracted one MCP at a time and reviewed against registration, schemas, and handlers. Authentication-only responses do not establish tool parameters. No live GTM read or write operations were run.', '',
    `**${records.length} MCP-capable projects inspected; ${kept.length} included and ${removed.length} excluded.** The review also covers the MCP interface in tagops, previously listed under CLIs.`, '',
    '## Excluded entries', '', '| MCP | Reason | Evidence |', '|---|---|---|'];
  for (const record of removed) review.push(`| [${escapeCell(record.repo)}](${page(record)}) | ${escapeCell(record.review?.reason ?? record.reason)} | [Source](${record.sources[0]}) |`);
  if (!removed.length) review.push('| — | No exclusions in this snapshot. | — |');
  review.push('', '## Verification', '',
    'Each detail page identifies its upstream snapshot, extraction method, tool exposure, and specific limits. Source-derived or reconstructed schemas are labeled; documented tools with unavailable parameters remain explicit gaps rather than guessed schemas.', '',
    'Descriptions are preserved as upstream exposes them. A separate behavior sentence records what the handler does when that differs from the description. Runtime defaults and restrictions absent from the input schema are not invented as schema fields.');
  output.set('REVIEW.md', review.join('\n') + '\n');

  for (const record of records) {
      const lines = [`# ${record.repo}`, '', '[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](' + record.url + ') · [Machine-readable inventory](../data/mcps/' + slug(record.repo) + '.json)', '',
      `**${record.tools.length} extracted tools${record.gaps.length ? ` · ${record.gaps.length} schema gaps` : ''}.** ${included(record) ? record.review.summary : `Excluded: ${record.review?.reason ?? record.reason}`}`, '',
      `Snapshot: ${record.checkedAt} · ${record.commit ? `[${record.commit.slice(0, 12)}](${record.url}/tree/${record.commit})` : 'hosted service documentation'} · Method: ${record.method}.`, '',
      `Exposure: ${record.exposure}`];
    if (record.limitations.length) {
      lines.push('', '## Limits', '');
      for (const note of record.limitations) lines.push(`- ${note}`);
    }
    if (record.tools.length) {
      lines.push('', '## Tools', '', record.tools.length > 500 ? '| Tool | Scope |' : '| Tool | Scope | What the handler does |', record.tools.length > 500 ? '|---|---|' : '|---|---|---|');
      for (const tool of record.tools) {
        const target = toolPage(record, tool.name);
        const link = target === page(record) ? `#${anchor(tool.name)}` : `${target.slice(5)}#${anchor(tool.name)}`;
        lines.push(`| [\`${escapeCell(tool.name)}\`](${link}) | ${tool.scope === 'other' ? 'Other product' : tool.scope === 'auxiliary' ? 'Supporting' : 'GTM'} |${record.tools.length <= 500 ? ` ${escapeCell(prose(tool.behavior))} |` : ''}`);
      }
      if (record.tools.length > 500) {
        const other = record.tools.filter((tool) => tool.scope !== 'gtm');
        lines.push('', '## Supporting and other-product parameters', '', 'The complete shared-server inventory is preserved in linked parts. GTM parameters follow on this page.', '');
        for (let start = 0; start < other.length; start += 150) {
          const chunk = other.slice(start, start + 150);
          const target = toolPage(record, chunk[0].name);
          const part = [`# ${record.repo}: supporting and other-product tools`, '', `[Provider inventory](${slug(record.repo)}.md) · [Global tool index](../TOOL_INDEX.md)`, '', `Tools ${start + 1}–${start + chunk.length} of ${other.length}. Exact schemas from the same upstream snapshot.`, ...chunk.flatMap(renderTool)];
          output.set(target, part.join('\n') + '\n');
          lines.push(`- [${chunk[0].name} → ${chunk.at(-1).name}](${target.slice(5)}) (${chunk.length} tools)`);
        }
      }
      for (const tool of record.tools.filter((tool) => record.tools.length <= 500 || tool.scope === 'gtm')) lines.push(...renderTool(tool));
    }
    if (record.gaps.length) {
      lines.push('', '## Unavailable schemas', '');
      for (const gap of record.gaps) lines.push(`<a id="${anchor(gap.name)}"></a>`, '', `- **${gap.name}** — ${gap.description} ${gap.reason} [Source](${gap.source}).`, '');
    }
    output.set(page(record), lines.join('\n').trimEnd() + '\n');
  }
  return output;
}

function fencedText(value) {
  const longest = Math.max(0, ...[...value.matchAll(/`+/g)].map((match) => match[0].length));
  const fence = '`'.repeat(Math.max(3, longest + 1));
  return `${fence}text\n${value.replace(/[ \t]+$/gm, '')}\n${fence}`;
}

function renderTool(tool) {
  const lines = [];
        lines.push('', `<a id="${anchor(tool.name)}"></a>`, '', `## ${tool.name}`, '',
          `Handler: ${prose(tool.behavior)}`, '',
          ...(tool.description ? [fencedText(tool.description)] : ['*Upstream exposes no tool description.*']), '',
          `[Source](${tool.source})${tool.handlerSource || tool.implementationSource ? ` · [Handler](${tool.handlerSource ?? tool.implementationSource})` : ''} · Schema: ${tool.schemaOrigin}.`);
        if (tool.exposure) lines.push('', `Exposure: ${tool.exposure}`);
        if (tool.schemaExposureIssue) lines.push('', tool.schemaExposureIssue);
        lines.push('', '<details>', `<summary>${tool.validationInputSchema ? 'Advertised input schema' : 'Full input parameters'}</summary>`, '', '```json', JSON.stringify(tool.inputSchema, null, 2), '```', '', '</details>');
        if (tool.annotations) lines.push('', '<details>', '<summary>Tool annotations</summary>', '', '```json', JSON.stringify(tool.annotations, null, 2), '```', '', '</details>');
        for (const variant of tool.exposureVariants ?? []) lines.push('', '<details>', `<summary>Alternate registration: ${variant.exposure}</summary>`, '', '```json', JSON.stringify(variant, null, 2), '```', '', '</details>');
        if (tool.validationInputSchema) {
          lines.push('', '<details>', '<summary>Accepted input parameters (source)</summary>', '', 'These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.', '', '```json', JSON.stringify(tool.validationInputSchema, null, 2), '```');
          if (tool.validationSchemaSource) lines.push('', `[Validation source](${tool.validationSchemaSource}).`);
          if (tool.validationRefinements?.length) lines.push('', 'Additional validation functions:', '', '```json', JSON.stringify(tool.validationRefinements, null, 2), '```');
          lines.push('', '</details>');
        }
  return lines;
}
