import { readFileSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const file = resolve(process.argv[2] ?? 'README.md');
const source = readFileSync(file, 'utf8');
const errors = [];
const headings = [...source.matchAll(/^#{1,6} (.+)$/gm)];
const slug = (title) => title.toLowerCase().replace(/[^\p{L}\p{N}\s_-]/gu, '').replace(/ /g, '-');
const anchors = new Set();
const occurrences = new Map();
for (const [, title] of headings) {
  const base = slug(title);
  const count = occurrences.get(base) ?? 0;
  anchors.add(count ? `${base}-${count}` : base);
  occurrences.set(base, count + 1);
}

const urls = new Set();
let total = 0;
let sections = 0;
for (const match of source.matchAll(/^## (.+) \((\d+)\)$/gm)) {
  sections++;
  const [heading, title, expectedText] = match;
  const expected = Number(expectedText);
  const start = match.index + heading.length;
  const next = source.slice(start).search(/^## /m);
  const body = source.slice(start, next < 0 ? undefined : start + next);
  const rows = [...body.matchAll(/^\| \[\*\*(.+?)\*\*\]\((https:\/\/[^\s)]+)\) \| (.+) \|$/gm)];
  const summary = body.match(/^\*(\d+) projects?\. .+\*$/m);
  if (rows.length !== expected) errors.push(`${title}: heading says ${expected}, found ${rows.length} projects`);
  if (!summary || Number(summary[1]) !== expected) errors.push(`${title}: missing or inconsistent summary count`);
  const toc = `- [${title} (${expected})](#${slug(`${title} (${expected})`)})`;
  if (!source.includes(toc)) errors.push(`${title}: missing or inconsistent contents entry`);
  const labels = rows.map((row) => row[1].toLowerCase());
  if (JSON.stringify(labels) !== JSON.stringify([...labels].sort())) errors.push(`${title}: entries must be alphabetically sorted`);
  for (const [, label, url, description] of rows) {
    const normalized = url.toLowerCase().replace(/\/$/, '');
    if (urls.has(normalized)) errors.push(`Duplicate project URL: ${url}`);
    urls.add(normalized);
    if (description.split(/\s+/).length > 60) errors.push(`${label}: description exceeds 60 words`);
  }
  const rawRows = body.split('\n').filter((line) => line.startsWith('|') && !/^\|\s*(Project\s*\||[-: ]+\|)/.test(line));
  if (rawRows.length !== rows.length) errors.push(`${title}: malformed project table row`);
  total += rows.length;
}
if (sections !== 4) errors.push(`Expected four catalog sections, found ${sections}`);
const declaredTotal = source.match(/\*\*(\d+) projects\*\*/);
if (!declaredTotal || Number(declaredTotal[1]) !== total) errors.push(`Overall total must be ${total} projects`);

for (const match of source.matchAll(/(?<!!)\[[^\]\n]*\]\(([^\s)]+)\)/g)) {
  const target = match[1];
  if (/^[a-z]+:/i.test(target)) continue;
  const [path, anchor] = target.split('#');
  if (path && !existsSync(resolve(dirname(file), path))) errors.push(`Missing local file: ${target}`);
  if (!path && anchor && !anchors.has(anchor)) errors.push(`Missing anchor: ${target}`);
}

if (errors.length) {
  errors.forEach((error) => console.error(error));
  process.exitCode = 1;
} else {
  console.log(`Validated ${total} projects in ${sections} sections; counts, order, URLs, and local links pass.`);
}
