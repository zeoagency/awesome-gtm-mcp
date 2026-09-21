# AGENTS.md

Working rules and language guidelines for anyone — human or agent — editing this repository. It is a curated, plain-English index of the **Google Tag Manager (GTM) Model Context Protocol (MCP)** ecosystem. Keep it lean, minimalist, and immediately useful.

> [!IMPORTANT]
> **Scope Invariant:** In this repository, **`GTM` strictly means Google Tag Manager**, never "go-to-market" (B2B sales/CRM). All tooling, schemas, categories, and criteria are grounded strictly in Google Tag Manager (Web Containers, Server-Side Containers, Tag Assistant Preview, and the Tag Manager REST API v2).

---

## 1. Project Philosophy & Minimalist Structure

- **No Onboarding Tutorials:** Do not add introductory installation essays, "how to choose your layer" tables, or getting-started walkthroughs to the catalog root. Keep the README strictly minimalist: title, official links, Developer Comparison Matrix, Table of Contents with counts, and direct jump links into the tables.
- **Fast Jump Navigation:** Readers should jump straight to the relevant problem domain from the Table of Contents or Developer Comparison Matrix in 1 click.

---

## 2. Project Language & Voice Values

The language of this catalog must be simple, direct, and developer-friendly:

### 2.1. Plain-English, Verb-First Prose

- Lead with active verbs (*Provides*, *Automates*, *Validates*, *Parses*, *Traps*, *Syncs*, *Deploys*, *Inspects*, *Intercepts*, *Lints*, *Isolates*).
- Avoid passive constructions, convoluted em-dash chains, and marketing buzzwords (*"ultimate"*, *"blazing fast"*, *"revolutionary"*, *"next-gen"*, *"enterprise-grade"*).
- State clearly what an analytics engineer or coding agent can *do* with the tool, not a laundry list of generic marketing claims.

### 2.2. The 1–2 Sentence Rule

Every project entry must be strictly 1 or 2 concise sentences (mean ~17 words, maximum 60 words):

- **Sentence 1:** What the tool specifically does for a GTM user or coding agent.
- **Sentence 2 (optional):** Key distinguishing capabilities (e.g. rate limit pacing, compiler error trapping, Playwright dataLayer testing, or sGTM transformation support).

### 2.3. Subcategory Header & Table Standards

Every subcategory begins with a count and a 1-sentence job summary, followed by a clean 2-column markdown table:

```markdown
### Automated Rate Limiting and Quota Pacing

*2 projects. Pacing queues and backoff handlers preventing 0.25 QPS project exhaustion.*

| Project | What it does |
|---|---|
| [**owner/repo**](https://github.com/owner/repo) | Plain-English explanation of what the tool does and who it is for. |
```

---

## 3. Strict Exclusion Criteria (What NEVER Belongs Here)

To maintain a high-signal catalog, the following must **never** be added:

1. **NO B2B Go-To-Market Sales Tools:** Generic Apollo, Clay, HubSpot, Salesforce, smartlead, or cold-outreach scrapers matching the "GTM" acronym.
2. **NO F5 BIG-IP Global Traffic Managers:** Network load balancers matching the "GTM" acronym.
3. **NO Empty Scaffolds or Incomplete Stubs:** Repositories without working tool implementations, design-only documents without prototypes, or broken builds.
4. **NO Trivial Copy-Paste Wrappers:** Near-duplicate forks or minimal shims without substantive standalone utility.
5. **NO Marketing Hype or AI Filler:** Descriptions must remain factual, concise, and neutral.

---

## 4. Count Reconciliation Mathematics

Counts appear at multiple levels and must remain 100% mathematically synchronized:

$$\text{Category Count } C_i = \sum_{j=1}^{M_i} S_{i,j}$$
$$\text{Subcategory Count } S_{i,j} = \text{Table Rows } R_{i,j}$$

Run `python3 scratch/verify_awesome_counts.py README.md` before committing. It must pass with 0 errors.

---

## 5. Before Committing

1. Run `npx markdownlint-cli2 "**/*.md"` — it must exit clean with **0 issues** (same check CI runs).
2. Run `python3 scratch/verify_awesome_counts.py README.md` — must exit with **0 count errors**.
3. Ensure every internal anchor link resolves correctly.
4. Commit with conventional commit format: `docs(awesome-list): <summary>`.
