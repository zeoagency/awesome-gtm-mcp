import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { loadRecords, renderCatalog, root } from './catalog-lib.mjs';

const check = process.argv.includes('--check');
const records = loadRecords();
if (!records.length) throw new Error('No MCP inventories found in data/mcps');
let stale = 0;
const documents = renderCatalog(records);
for (const [name, content] of documents) {
  const path = resolve(root, name);
  if (check) {
    if (!existsSync(path) || readFileSync(path, 'utf8') !== content) {
      console.error(`Regenerate ${name}`);
      stale++;
    }
  } else {
    mkdirSync(dirname(path), { recursive: true });
    writeFileSync(path, content);
  }
}
if (stale) process.exitCode = 1;
else console.log(`${check ? 'Checked' : 'Generated'} ${records.length} MCP inventories and ${documents.size} linked documents.`);
