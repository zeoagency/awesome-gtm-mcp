# Editing this catalog

This repository documents Google Tag Manager MCP servers, CLIs, and SDKs in plain English. Apply [CONTRIBUTING.md](CONTRIBUTING.md) when changing an entry or its tool inventory.

## Source of truth

Edit reviewed MCP records in `data/mcps/`, then run `node scripts/build-catalog.mjs`. The README, MCP detail pages, tool index, and review decisions are generated together. Edit CLI and SDK entries in `SUPPORTING_TOOLS.md`. Record the complete set of inspected projects in `data/review-scope.json`, including exclusions.

## Review

Inspect actual tool registration, input validation, and handlers. Preserve exact names, descriptions, and complete schemas; keep advertised schemas separate from source validation when they differ. Record immutable source links and concrete limitations. Classify each MCP and choose examples from implemented GTM handlers. A shared server's complete inventory belongs on its detail page, with other products labeled; its homepage entry describes GTM capabilities only.

If extraction is delegated, assign one MCP per agent and independently review its results before setting `review.status` to `reviewed`. Set an explicit keep/remove decision for every inspected project. Unavailable schemas remain evidence gaps, and those providers stay outside the main catalog.

## Completion

Run these checks before committing:

```sh
node scripts/build-catalog.mjs --check
node scripts/validate-catalog.mjs
npx --yes markdownlint-cli2@0.23.3 "**/*.md"
git diff --check
```

These checks cover inventory completeness, schema references, generated documents, and local links. Check external source evidence separately; structural validation does not establish live GTM behavior.

Use the commit format `docs(awesome-list): <summary>`.
