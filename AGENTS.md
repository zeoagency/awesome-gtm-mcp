# Editing this catalog

This repository lists Google Tag Manager MCP servers, CLIs, and SDKs in plain English. `GTM` means Google Tag Manager.

## Curation

Apply the inclusion and evidence requirements in [CONTRIBUTING.md](CONTRIBUTING.md) to every added or changed entry. Inspect public implementation code as well as documentation; use the hosted-service evidence alternative for proprietary services. Describe only supported GTM capabilities; distinguish hosting an MCP server from managing server-side GTM.

Keep one entry per project. Prefer the upstream project over a copy unless the fork provides a documented, implemented distinction. List multi-product tools only when their GTM functionality is implemented, and describe that functionality.

## Format

Keep the README to a short introduction, navigation comparison, contents, and project tables. Use separate sections for MCP servers, CLIs, Tag Manager API SDKs, and website integration SDKs.

Use two-column tables (`Project`, `What it does`) with entries sorted alphabetically by label. Write one or two factual, verb-first sentences per entry, with at most 60 words. Link directly to the project or relevant SDK module. Keep counts in headings, contents, section summaries, and the total synchronized. Avoid volatile tool counts, unverified safety claims, and generic protocol or analytics explanations.

## Verification

Before committing, run:

```sh
npx --yes markdownlint-cli2@0.23.3 "**/*.md"
node scripts/validate-catalog.mjs
git diff --check
```

The catalog validator checks project counts, local links, duplicate project URLs, and alphabetical order. Independently verify external links and GTM evidence; the validator does not establish that an external project works.

Use the commit format `docs(awesome-list): <summary>`.
