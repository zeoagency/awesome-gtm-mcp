# Contributing to Awesome GTM MCP

## Inclusion criteria

Include MCP servers, command-line tools, and SDKs that implement Google Tag Manager functionality:

- Manage GTM accounts, containers, workspaces, tags, triggers, variables, or versions.
- Test or audit GTM containers, snippets, or dataLayer events.
- Embed GTM in websites through a reusable integration library.
- Provide a client for the Google Tag Manager API, including a dedicated module within a broader Google SDK.

Multi-product tools qualify when they contain an implemented GTM feature. Describe only their GTM functionality. Separate API management SDKs from website integration libraries.

Exclude skill-only repositories, prompts, guides, plugin catalogs, generic marketing tools, empty scaffolds, and planned integrations without code. Other meanings of GTM, such as go-to-market or Global Traffic Manager, are outside this catalog. Prefer upstream projects over trivial copies; a fork needs a substantive implemented difference to earn a separate entry.

## Evidence required

For projects with public source, link to the documentation and the source file or SDK module that implements the GTM feature in your pull request. For a CLI, identify its executable entry point; for an MCP server, identify its registered GTM tools; for an SDK, identify its public GTM interface. Check that the linked repository or package exists and that documented installation refers to the implemented tool.

For a proprietary hosted MCP service, provide vendor documentation identifying concrete GTM tools and a reachable service endpoint instead of source code. Describe it as hosted. An authentication response establishes endpoint availability, not successful GTM operations; record the verification limits in the pull request.

Treat README claims as leads to verify, not proof. Omit unsupported claims about API coverage, safety, quotas, performance, and testing. Hosting an MCP server on Cloudflare or Docker does not by itself establish server-side GTM functionality. Label unofficial projects accurately.

## Entry format

Add each project once, in alphabetical order within the appropriate section:

```markdown
| [**owner/repo**](https://github.com/owner/repo) | Manages GTM tags, triggers, and variables through MCP tools. |
```

Use one or two concise, factual sentences, starting with an active verb, and no more than 60 words. Link to the relevant module when the project covers several products. Update the section count in its heading, summary, and contents, plus the overall project total.

## Validation

Run these checks before submitting:

```sh
npx --yes markdownlint-cli2@0.23.3 "**/*.md"
node scripts/validate-catalog.mjs
git diff --check
```

Check external links and source evidence separately. Automated structure checks do not verify an external project's behavior.
