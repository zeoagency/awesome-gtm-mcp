# Contributing to Awesome GTM MCP

## Scope

Include executable MCP servers, CLIs, and SDKs with implemented Google Tag Manager features: container management, tracking audits, website/dataLayer inspection, server-side GTM hosting, API clients, or reusable website integration libraries. Multi-product tools qualify through verified GTM functionality. Prefer upstream projects; a fork needs a substantive implemented difference.

Guides, prompts, skill-only repositories, empty scaffolds, and planned integrations are outside the catalog. GTM means Google Tag Manager here.

## MCP records

Add or update a JSON record in `data/mcps/` using an existing reviewed record as a format example. Add its repository to `data/review-scope.json`. Capture every registered tool in the selected server, including supporting and other-product tools in shared servers. Separate servers in a monorepo do not contribute unrelated tool lists.

For every tool, preserve its exact public name, full description, complete input JSON Schema, schema origin, immutable source link, scope (`gtm`, `auxiliary`, or `other`), and a factual handler behavior sentence. Include nested properties, required fields, enums, defaults, arrays, and referenced definitions. Keep unrestricted objects unrestricted. If advertised schemas omit source validation, preserve both through `inputSchema` and `validationInputSchema`; record additional validation functions when JSON Schema cannot express them.

Identify the upstream commit, extraction date and method, permission-dependent exposure, and concrete limitations. Offline registration and source inspection are sufficient for a documented inventory; state whether live operations were tested. Hosted services need complete vendor schemas or an authenticated tool inventory: a reachable authentication endpoint alone does not establish parameters. Store unavailable information in `gaps` instead of inventing schemas.

When alternate server surfaces register the same name differently, preserve the additional registrations in `exposureVariants`. Large shared inventories automatically keep GTM parameters on the provider page and link other-product parameters in parts; the global index links directly to each tool.

Independently review registration, schemas, and handlers before marking a record reviewed. Set an explicit keep/remove decision and reason for exclusions. Choose `review.classification`, the homepage summary, and up to three example tool names from actual GTM handlers. Marketing descriptions do not decide the grouping. Providers with unverified tool parameters or unusable implementations remain in review documents rather than the main catalog.

## CLIs and SDKs

Edit `SUPPORTING_TOOLS.md`. Keep one concise factual entry per project, sorted alphabetically within its category. Link to an executable CLI entry point or public SDK module and verify its GTM implementation. Separate API clients from website integration packages.

## Build and check

Generate the linked documents and verify them:

```sh
node scripts/build-catalog.mjs
node scripts/validate-catalog.mjs
npx --yes markdownlint-cli2@0.23.3 "**/*.md"
git diff --check
```

Check external sources separately. Include extraction and review evidence in the change description; automated checks verify structure and completeness, not authenticated GTM functionality.
