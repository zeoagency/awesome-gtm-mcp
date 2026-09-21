# Contributing to Awesome GTM MCP

Thank you for helping maintain this curated index of Google Tag Manager Model Context Protocol (MCP) tooling.

## Submission Guidelines

Before opening a pull request, ensure your entry adheres to the following criteria:

1. **Google Tag Manager Focus:** The tool must directly manage, test, audit, or bridge Google Tag Manager containers (Web, Server-Side, or GTM 360). B2B Go-To-Market (sales/CRM) tools will be closed immediately.
2. **Model Context Protocol Integration:** The tool must implement an MCP server, client, or programmatic agent automation bridge.
3. **Working Implementation:** The repository must contain functional code or installable packages, not empty stubs or unverified concept docs.
4. **Description Standards:**
   - Maximum 1–2 sentences.
   - Lead with an active verb (*Provides*, *Automates*, *Validates*, *Traps*, *Syncs*).
   - State concrete capabilities and distinctiveness, not marketing buzzwords.
5. **Exact Table Format:** Add your entry in alphabetical order using the format:

   ```markdown
   | [**owner/repo**](https://github.com/owner/repo) | Concise factual description. |
   ```

6. **Count Synchronization:** When adding a project to a subcategory, update the subcategory count `(N)` in the table header, the subcategory count in `## Contents`, and the top-level category count in both `## Contents` and the category header.
7. **Validation:** Run `npx markdownlint-cli2 "**/*.md"` and `python3 scratch/verify_awesome_counts.py README.md` locally before submitting.
