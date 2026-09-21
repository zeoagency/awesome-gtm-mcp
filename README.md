# Awesome Google Tag Manager MCP [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated plain-English index of Model Context Protocol (MCP) servers, agent tools, and client infrastructure built for **[Google Tag Manager](https://tagmanager.google.com/)**, automated tag management, and analytics engineering.

Official links: [Google Tag Manager](https://tagmanager.google.com/) · [GTM API v2 Docs](https://developers.google.com/tag-platform/tag-manager/api/v2) · [Server-Side GTM Guide](https://developers.google.com/tag-platform/tag-manager/server-side) · [Model Context Protocol Specification](https://modelcontextprotocol.io/) · [Tag Assistant](https://tagassistant.google.com/)

---

## Contents

1. [Client-side web container operations (68)](#1-client-side-web-container-operations)
   - [Canonical and comprehensive GTM API v2 servers (7)](#canonical-and-comprehensive-gtm-api-v2-servers)
   - [Active community Go and Python runtime distributions (23)](#active-community-go-and-python-runtime-distributions)
   - [Lightweight local stdio container inspection (11)](#lightweight-local-stdio-container-inspection)
   - [Workspace branching, synchronization, and change staging (16)](#workspace-branching-synchronization-and-change-staging)
   - [Custom JavaScript variable generation and ES5 AST validation (1)](#custom-javascript-variable-generation-and-es5-ast-validation)
   - [Declarative Infrastructure-as-Code container provisioning (2)](#declarative-infrastructure-as-code-container-provisioning)
   - [Container snippet injection and website installation (2)](#container-snippet-injection-and-website-installation)
   - [Multi-account hierarchy browsing and container discovery (6)](#multi-account-hierarchy-browsing-and-container-discovery)
2. [Server-side GTM and edge infrastructure (88)](#2-server-side-gtm-and-edge-infrastructure)
   - [Hosted edge proxy and managed Cloudflare Worker endpoints (3)](#hosted-edge-proxy-and-managed-cloudflare-worker-endpoints)
   - [Agency edge deployment forks and multi-client worker environments (75)](#agency-edge-deployment-forks-and-multi-client-worker-environments)
   - [Self-hosted containerized Docker and Cloud Run infrastructure (4)](#self-hosted-containerized-docker-and-cloud-run-infrastructure)
   - [Server-side HTTP client routing and request transformations (2)](#server-side-http-client-routing-and-request-transformations)
   - [Server-side attribution event forwarding and ClickHouse warehousing (2)](#server-side-attribution-event-forwarding-and-clickhouse-warehousing)
   - [LLM crawler detection and AI traffic classification (1)](#llm-crawler-detection-and-ai-traffic-classification)
   - [Server-side operational rule enforcement and Stape pitfall auditing (1)](#server-side-operational-rule-enforcement-and-stape-pitfall-auditing)
3. [Operational safety, mutation gates, and quota control (7)](#3-operational-safety-mutation-gates-and-quota-control)
   - [Proactive request rate-pacing and 0.25 QPS quota protection (1)](#proactive-request-rate-pacing-and-025-qps-quota-protection)
   - [Multi-tiered permission gates and cryptographic MRTR verification (1)](#multi-tiered-permission-gates-and-cryptographic-mrtr-verification)
   - [Enterprise IAM service-account isolation and write-gated authentication (2)](#enterprise-iam-service-account-isolation-and-write-gated-authentication)
   - [Container rollback, tag state toggling, and version freezing (2)](#container-rollback-tag-state-toggling-and-version-freezing)
   - [Localized read-only guardrails and human-in-the-loop audit gates (1)](#localized-read-only-guardrails-and-human-in-the-loop-audit-gates)
4. [Testing, QA, dataLayer assertions, and CDN lag bypass (6)](#4-testing-qa-datalayer-assertions-and-cdn-lag-bypass)
   - [Tag Assistant Preview automation and WebSocket debugging (1)](#tag-assistant-preview-automation-and-websocket-debugging)
   - [Synthetic browser journey execution and dataLayer event assertion (2)](#synthetic-browser-journey-execution-and-datalayer-event-assertion)
   - [Automated tag firing acceptance testing and defect remediation (2)](#automated-tag-firing-acceptance-testing-and-defect-remediation)
   - [Scriptless HTML regression testing and clean DOM verification (1)](#scriptless-html-regression-testing-and-clean-dom-verification)
5. [Governance, compliance, auditing, and linting (6)](#5-governance-compliance-auditing-and-linting)
   - [Consent Mode v2 policy enforcement and privacy gate auditing (1)](#consent-mode-v2-policy-enforcement-and-privacy-gate-auditing)
   - [Container inventory export and Google Sheets automated diffing (2)](#container-inventory-export-and-google-sheets-automated-diffing)
   - [Static container dependency analysis and orphan variable linting (1)](#static-container-dependency-analysis-and-orphan-variable-linting)
   - [Web performance profiling and tracking hygiene monitoring (1)](#web-performance-profiling-and-tracking-hygiene-monitoring)
   - [Autonomous container health auditing and multi-rule diagnostics (1)](#autonomous-container-health-auditing-and-multi-rule-diagnostics)
6. [Hybrid analytics and cross-platform tag synchronization (29)](#6-hybrid-analytics-and-cross-platform-tag-synchronization)
   - [Dual-platform GTM and GA4 configuration and event parameter validation (6)](#dual-platform-gtm-and-ga4-configuration-and-event-parameter-validation)
   - [Google Ads conversion tracking and enhanced conversion setup (2)](#google-ads-conversion-tracking-and-enhanced-conversion-setup)
   - [Full Google marketing stack unified orchestration (14)](#full-google-marketing-stack-unified-orchestration)
   - [Multi-engine search and performance marketing synchronization (1)](#multi-engine-search-and-performance-marketing-synchronization)
   - [Analytics data warehouse staging, dbt modeling, and BI dashboarding (4)](#analytics-data-warehouse-staging-dbt-modeling-and-bi-dashboarding)
   - [Agency call-tracking and third-party attribution integration (2)](#agency-call-tracking-and-third-party-attribution-integration)
7. [Developer tools, embedded UIs, and caching (8)](#7-developer-tools-embedded-uis-and-caching)
   - [High-throughput multi-tenant daemon architectures and SSE streaming (1)](#high-throughput-multi-tenant-daemon-architectures-and-sse-streaming)
   - [Curated agent plugin bundles and cross-service automation packs (2)](#curated-agent-plugin-bundles-and-cross-service-automation-packs)
   - [Ecosystem registries and machine-readable tool catalogs (1)](#ecosystem-registries-and-machine-readable-tool-catalogs)
   - [Gamified tag management sandboxes and educational simulators (1)](#gamified-tag-management-sandboxes-and-educational-simulators)
   - [Enterprise Microsoft Copilot Studio connector integration (1)](#enterprise-microsoft-copilot-studio-connector-integration)
   - [Self-hosted agency deployment wrappers and environment presets (2)](#self-hosted-agency-deployment-wrappers-and-environment-presets)
8. [Experimental and concept scaffolds (42)](#8-experimental-and-concept-scaffolds)
   - [Early-stage experimental container prototypes and unverified servers (21)](#early-stage-experimental-container-prototypes-and-unverified-servers)
   - [Framework-scaffolded and auto-generated MCP wrappers (1)](#framework-scaffolded-and-auto-generated-mcp-wrappers)
   - [Alternative developer-native tag management engines (1)](#alternative-developer-native-tag-management-engines)
   - [Quarantined Go-to-Market sales and outbound prospecting pipelines (14)](#quarantined-go-to-market-sales-and-outbound-prospecting-pipelines)
   - [Non-GTM acronym collisions and external scaffolds (5)](#non-gtm-acronym-collisions-and-external-scaffolds)
9. [Resources](#resources)
10. [Reference](#reference)

---

## Developer Comparison Matrix

A multi-dimensional comparison of leading Google Tag Manager MCP implementations across key architectural, security, and operational criteria.

- **Two-Stage Linking:** Click any project name to jump directly to its detailed catalog entry in the section below.
- **Discriminating Dimensions:** Compares runtime transports, container scopes, quota limiters, silent compiler error handling, and mutation safety controls.

| Project | Tier | Runtime | Transport | Containers | API Scope | Tool Model | Token Tax | 0.25 QPS Limiter | Compiler Trap | Mutation Gate | Auth Model | CDN Lag Bypass | dataLayer QA | Registry |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| [**rgellis**](#canonical-and-comprehensive-gtm-api-v2-servers) | Tier 1 | Python 3.12 | stdio | Web + Zones | 106 Methods (100%) | Granular (112 tools) | ~22k tokens | Exponential Backoff | Trapped | Ambient Authority | ADC / OAuth2 | None | None | Source |
| [**A1-x-Tech**](#proactive-request-rate-pacing-and-025-qps-quota-protection) | Tier 1 | TypeScript | stdio | Web | Domain CRUD | Consolidated (18 tools) | ~1.8k tokens | **4.2s Pacing Queue** | **Trapped (Safe)** | Ambient Authority | In-Chat OAuth2 | None | None | npm (220/wk) |
| [**stape-io**](#hosted-edge-proxy-and-managed-cloudflare-worker-endpoints) | Tier 1 | TypeScript | Worker URL | Web + sGTM | Core CRUD + sGTM | Modular (24 tools) | ~3.5k tokens | Cloudflare Limiter | Ignored | Ambient Authority | Cloud SaaS Proxy | None | None | npm / SaaS |
| [**KUHL-HQ**](#enterprise-iam-service-account-isolation-and-write-gated-authentication) | Tier 1 | Node.js | stdio | Web + sGTM | Core CRUD | Modular (24 tools) | ~3.5k tokens | None | Ignored | Write-Gated Auth | **Service Account JSON** | None | None | Source |
| [**kb223**](#multi-tiered-permission-gates-and-cryptographic-mrtr-verification) | Tier 1 | Python 3.11 | stdio | Web + GA4 | Dual Config | Tiered (12 tools) | ~2.4k tokens | Rate Delayed | Trapped | **MRTR SHA-256 Token** | OAuth2 Client | None | None | Source |
| [**haiqigeng**](#tag-assistant-preview-automation-and-websocket-debugging) | Tier 1 | Python / Playwright | MCP Stdio | Web Preview | Preview QA | Journey Tools (8 tools) | ~1.6k tokens | N/A (Local QA) | N/A | Read-Only Preview | Chrome Session | **Tag Assistant (0s)** | **Playwright Causal** | Source |
| [**mharnett**](#enterprise-iam-service-account-isolation-and-write-gated-authentication) | Tier 1 | TypeScript | stdio | Web + GA4 | Dual Config | Consolidated (14 tools) | ~2.1k tokens | None | Ignored | **Structural Omission** | OAuth2 Client | None | None | Source |
| [**paolobietolini**](#canonical-and-comprehensive-gtm-api-v2-servers) | Tier 1 | Go 1.26 | stdio / SSE | Web | Domain CRUD | Granular (94 tools) | ~16k tokens | None | Ignored | Ambient Authority | OAuth2 Token | None | None | Go / PyPI |
| [**flockstore**](#server-side-attribution-event-forwarding-and-clickhouse-warehousing) | Tier 2 | Go 1.26 | Streamable HTTP | sGTM Edge | Hit Verification | Sidecar (4 tools) | ~800 tokens | Built-in Go Limiter | N/A | Stateless / Read-Only | Token Bearer | Real-time Edge | Cookie-free Check | Source |
| [**digitalXperiments**](#synthetic-browser-journey-execution-and-datalayer-event-assertion) | Tier 2 | Python | stdio | Web | Testing / Assert | QA Tools (10 tools) | ~2.2k tokens | None | N/A | Safe Testing | Local DevTools | None (Immediate) | **Monkey-Patching** | Source |
| [**samarthanalytics**](#consent-mode-v2-policy-enforcement-and-privacy-gate-auditing) | Tier 2 | Python | stdio | Web | Audit / Consent | Rules Engine (16 tools) | ~7.8k tokens | None | Trapped | Read-Only Audit | OAuth2 Client | None | None | Source |
| [**burhan29ee**](#dual-platform-gtm-and-ga4-configuration-and-event-parameter-validation) | Tier 2 | Python | stdio | Web + GA4 | Dual Config | Hybrid (18 tools) | ~3.2k tokens | None | Ignored | Ambient Authority | OAuth2 Client | None | Event Verification | Source |
| [**jinchliu**](#lightweight-local-stdio-container-inspection) | Tier 2 | Python | stdio | Web | Container Inspect | Stdio (12 tools) | ~1.9k tokens | None | Ignored | Read-Only | Google Cloud ADC | None | None | Source |
| [**VasthavM**](#lightweight-local-stdio-container-inspection) | Tier 2 | TypeScript | stdio | Web | Workspace CRUD | Stdio (16 tools) | ~2.5k tokens | None | Ignored | Workspace Staging | OAuth2 Client | None | None | npm |
| [**insightful-pipe**](#container-rollback-tag-state-toggling-and-version-freezing) | Tier 2 | TypeScript | Remote SaaS | Web | Entity Rollback | Managed (14 tools) | ~2.2k tokens | SaaS Pacing | Trapped | Single-Entity Revert | Managed SaaS Key | None | None | SaaS ($29.99/mo) |
| [**acamolese**](#static-container-dependency-analysis-and-orphan-variable-linting) | Tier 2 | Python | stdio | Web | Static Audit | Lint Engine (8 tools) | ~1.4k tokens | N/A (Static JSON) | N/A | **Mathematical Read-Only** | None (JSON Export) | N/A | None | Source |
| [**pouyanafisi**](#workspace-branching-synchronization-and-change-staging) | Tier 4 | TypeScript | stdio | Web | Container CRUD | Granular (104 tools) | ~29k tokens | None (Crashes) | Ignored | Ambient Authority | OAuth2 Client | None | None | Source |

---

## 1. Client-side web container operations

*68 projects. MCP servers and agent skills executing client-side Google Tag Manager web container operations, entity CRUD, and workspace synchronization.*

### Canonical and comprehensive GTM API v2 servers

*7 projects. Provide complete, typed read and write access across all GTM API v2 container entities, accounts, and folders.*

| Project | What it does |
|---|---|
| [**rgellis/google-tag-manager-mcp**](https://github.com/rgellis/google-tag-manager-mcp) | Provides complete, typed FastMCP coverage across all 106 GTM API v2 methods with 383 unit tests and strict Pyright verification. |
| [**paolobietolini/gtm-mcp-server**](https://github.com/paolobietolini/gtm-mcp-server) | Runs a high-throughput Go daemon exposing 94 GTM API v2 tools with an integrated FastMCP agent orchestration client. |
| [**valentineffi/zenda-tag-manager-mcp**](https://github.com/valentineffi/zenda-tag-manager-mcp) | Exposes 42 typed GTM API v2 tools over local stdio with TypeScript schemas covering accounts, containers, workspaces, tags, and triggers. |
| [**AlexStansfield/gtm-mcp-server**](https://github.com/AlexStansfield/gtm-mcp-server) | Provides lightweight TypeScript stdio tools for inspecting and updating container configurations directly within coding agent chats. |
| [**Gatescrispy/mcp-gtm-ultimate**](https://github.com/Gatescrispy/mcp-gtm-ultimate) | Exposes 70+ GTM API tools over local stdio with custom Python wrappers for container and workspace automation. |
| [**jamestomasino/mcp-gtm**](https://github.com/jamestomasino/mcp-gtm) | Implements a modular TypeScript stdio MCP server for managing GTM container entities and tracking tags. |
| [**hedayetulislamhadi/genius-gtm-mcp**](https://github.com/hedayetulislamhadi/genius-gtm-mcp) | Provides an automated JavaScript MCP bridge for managing web container tags, triggers, and variables. |

### Active community Go and Python runtime distributions

*23 projects. Maintain distributed Go and Python server runtimes exposing multi-tool API surfaces for enterprise environments.*

| Project | What it does |
|---|---|
| [**Klartika/gtm-mcp-server**](https://github.com/Klartika/gtm-mcp-server) | Distributes a containerized Go runtime build of the GTM MCP server for enterprise workspace and tag management. |
| [**Zingstack/gtm-mcp-server**](https://github.com/Zingstack/gtm-mcp-server) | Distributes a containerized Go runtime build of the GTM MCP server for enterprise workspace and tag management. |
| [**benitomusolini/gtm-mcp-server**](https://github.com/benitomusolini/gtm-mcp-server) | Distributes a containerized Go runtime build of the GTM MCP server for enterprise workspace and tag management. |
| [**jsarmedia/gtm-mcp-server**](https://github.com/jsarmedia/gtm-mcp-server) | Distributes a containerized Go runtime build of the GTM MCP server for enterprise workspace and tag management. |
| [**romangazarek/gtm-mcp-server**](https://github.com/romangazarek/gtm-mcp-server) | Distributes a containerized Go runtime build of the GTM MCP server for enterprise workspace and tag management. |
| [**redpointgroup/gtm-mcp-server**](https://github.com/redpointgroup/gtm-mcp-server) | Distributes a containerized Go runtime build of the GTM MCP server for enterprise workspace and tag management. |
| [**lemoswilson/gtm-mcp-server**](https://github.com/lemoswilson/gtm-mcp-server) | Distributes a containerized Go runtime build of the GTM MCP server for enterprise workspace and tag management. |
| [**gith-ship-it/gtm-mcp-server**](https://github.com/gith-ship-it/gtm-mcp-server) | Distributes a containerized Go runtime build of the GTM MCP server for enterprise workspace and tag management. |
| [**ErikTMA/gtm-mcp-server**](https://github.com/ErikTMA/gtm-mcp-server) | Distributes a containerized Go runtime build of the GTM MCP server for enterprise workspace and tag management. |
| [**YerayRodri/gtm-mcp**](https://github.com/YerayRodri/gtm-mcp) | Distributes a containerized Go runtime build of the GTM MCP server for enterprise workspace and tag management. |
| [**shbhnkr-sg/gtm-mcp-server**](https://github.com/shbhnkr-sg/gtm-mcp-server) | Distributes a containerized Go runtime build of the GTM MCP server for enterprise workspace and tag management. |
| [**blievens89/gtm-mcp-server**](https://github.com/blievens89/gtm-mcp-server) | Distributes a containerized Go runtime build of the GTM MCP server for enterprise workspace and tag management. |
| [**oldrvn/gtm-mcp-server**](https://github.com/oldrvn/gtm-mcp-server) | Distributes a containerized Go runtime build of the GTM MCP server for enterprise workspace and tag management. |
| [**Paulaa111/gtm-mcp-server**](https://github.com/Paulaa111/gtm-mcp-server) | Distributes a containerized Go runtime build of the GTM MCP server for enterprise workspace and tag management. |
| [**jsn789/gtm-mcp-server**](https://github.com/jsn789/gtm-mcp-server) | Distributes a containerized Go runtime build of the GTM MCP server for enterprise workspace and tag management. |
| [**abubakarjamils/gtm-mcp-server**](https://github.com/abubakarjamils/gtm-mcp-server) | Distributes a containerized Go runtime build of the GTM MCP server for enterprise workspace and tag management. |
| [**ericktai/gtm-mcp-server**](https://github.com/ericktai/gtm-mcp-server) | Distributes a containerized Go runtime build of the GTM MCP server for enterprise workspace and tag management. |
| [**git-tiagovaz/gtm-mcp-server**](https://github.com/git-tiagovaz/gtm-mcp-server) | Distributes a containerized Go runtime build of the GTM MCP server for enterprise workspace and tag management. |
| [**iflow-mcp/paolobietolini-gtm-mcp-server**](https://github.com/iflow-mcp/paolobietolini-gtm-mcp-server) | Distributes a containerized Go runtime build of the GTM MCP server for enterprise workspace and tag management. |
| [**Krossings/gtm-mcp-server**](https://github.com/Krossings/gtm-mcp-server) | Distributes a containerized Go runtime build of the GTM MCP server for enterprise workspace and tag management. |
| [**AlfredoJF/gtm-mcp-server**](https://github.com/AlfredoJF/gtm-mcp-server) | Distributes a containerized Go runtime build of the GTM MCP server for enterprise workspace and tag management. |
| [**Secure-Code-Zyloch-Basic/gtm-mcp-server**](https://github.com/Secure-Code-Zyloch-Basic/gtm-mcp-server) | Distributes a containerized Go runtime build of the GTM MCP server for enterprise workspace and tag management. |
| [**schoeppe/gtm-mcp-server**](https://github.com/schoeppe/gtm-mcp-server) | Distributes a containerized Go runtime build of the GTM MCP server for enterprise workspace and tag management. |

### Lightweight local stdio container inspection

*11 projects. Inspect container configurations locally via stdio transports in Claude Desktop, Cursor, and Windsurf without cloud proxies.*

| Project | What it does |
|---|---|
| [**VasthavM/google-tag-manager-mcp**](https://github.com/VasthavM/google-tag-manager-mcp) | Provides clean multi-workspace branching, snapshot comparisons, and change staging for collaborative GTM development. |
| [**jinchliu/google-tag-manager-mcp**](https://github.com/jinchliu/google-tag-manager-mcp) | Enables local container inspection over stdio with Google Cloud Application Default Credentials authentication. |
| [**jinchliu/tagmanager-mcp**](https://github.com/jinchliu/tagmanager-mcp) | Resolves Windows stdio pipe deadlocks and provides local Application Default Credentials authentication for container inspection. |
| [**ypsum/google-tag-manager-mcp**](https://github.com/ypsum/google-tag-manager-mcp) | Connects Claude Desktop to GTM API v2 for querying container metadata and tag configurations. |
| [**victorwhale/google-tag-manager-mcp**](https://github.com/victorwhale/google-tag-manager-mcp) | Provides a minimalist stdio wrapper for listing and inspecting GTM accounts and web containers. |
| [**mattvisme/google-tag-manager-mcp**](https://github.com/mattvisme/google-tag-manager-mcp) | Enables read-only GTM workspace exploration and variable inspection directly within agent sessions. |
| [**brynj-digital/gtm-mcp-server**](https://github.com/brynj-digital/gtm-mcp-server) | Implements self-hosted GTM container inspection tools tailored for agency analytics workflows. |
| [**laiskickow/gtm-mcp-server**](https://github.com/laiskickow/gtm-mcp-server) | Provides local stdio tools for inspecting and auditing web container triggers and variables. |
| [**techdeveloper-org/mcp-gtm**](https://github.com/techdeveloper-org/mcp-gtm) | Enables natural language querying of GTM container assets and tag firing rules. |
| [**Gangas-Digital/mcp-google-tag-manager**](https://github.com/Gangas-Digital/mcp-google-tag-manager) | Provides agency container management tools for exploring multi-client tracking setups. |
| [**K9Cloud/gtm-mcp**](https://github.com/K9Cloud/gtm-mcp) | Inspects container configurations and tag parameters across client accounts over local stdio. |

### Workspace branching, synchronization, and change staging

*16 projects. Create, diff, synchronize, and resolve merge conflicts across multi-user workspaces before container publication.*

| Project | What it does |
|---|---|
| [**pouyanafisi/gtm-mcp**](https://github.com/pouyanafisi/gtm-mcp) | Provides an early 104-tool stdio server covering client-side workspace, tag, trigger, and variable management. |
| [**notSet-rawData/gtm-mcp**](https://github.com/notSet-rawData/gtm-mcp) | Provides tooling for Google Tag Manager containers. |
| [**iflow-mcp/pouyanafisi-gtm-mcp**](https://github.com/iflow-mcp/pouyanafisi-gtm-mcp) | Provides tooling for Google Tag Manager containers. |
| [**PTBWA-jaeyongshim/gtm-mcp**](https://github.com/PTBWA-jaeyongshim/gtm-mcp) | Provides tooling for Google Tag Manager containers. |
| [**gigantsc/gtm-mcp**](https://github.com/gigantsc/gtm-mcp) | Provides tooling for Google Tag Manager containers. |
| [**prodwietecha/gtm-mcp**](https://github.com/prodwietecha/gtm-mcp) | Provides tooling for Google Tag Manager containers. |
| [**Metatalentum/gtm-mcp**](https://github.com/Metatalentum/gtm-mcp) | Provides tooling for Google Tag Manager containers. |
| [**gsteffin/gtm-mcp-fork**](https://github.com/gsteffin/gtm-mcp-fork) | Provides tooling for Google Tag Manager containers. |
| [**marcoz93/gtm-mcp**](https://github.com/marcoz93/gtm-mcp) | Provides tooling for Google Tag Manager containers. |
| [**pprompt/gtm-mcp**](https://github.com/pprompt/gtm-mcp) | Provides tooling for Google Tag Manager containers. |
| [**clichedmoog/gtm-mcp**](https://github.com/clichedmoog/gtm-mcp) | Provides tooling for Google Tag Manager containers. |
| [**sevenwave/gtm-mcp**](https://github.com/sevenwave/gtm-mcp) | Provides tooling for Google Tag Manager containers. |
| [**topk-ai/gtm-mcp**](https://github.com/topk-ai/gtm-mcp) | Provides tooling for Google Tag Manager containers. |
| [**promptlibraryai/gtm-mcp**](https://github.com/promptlibraryai/gtm-mcp) | Provides tooling for Google Tag Manager containers. |
| [**mentaltoughness/gtm-mcp**](https://github.com/mentaltoughness/gtm-mcp) | Provides tooling for Google Tag Manager containers. |
| [**mseep-ai/gtm-mcp**](https://github.com/mseep-ai/gtm-mcp) | Provides tooling for Google Tag Manager containers. |

### Custom JavaScript variable generation and ES5 AST validation

*1 projects. Generate and lint ES5-compliant JavaScript functions to prevent GTM sandbox syntax execution crashes.*

| Project | What it does |
|---|---|
| [**ekusiadadus/claude-skill-gtm-javascript**](https://github.com/ekusiadadus/claude-skill-gtm-javascript) | Generates and lints ES5-compliant JavaScript functions to prevent GTM sandbox syntax execution crashes. |

### Declarative Infrastructure-as-Code container provisioning

*2 projects. Declare tags, triggers, and variables as declarative YAML manifests and apply them idempotently like Terraform.*

| Project | What it does |
|---|---|
| [**EarthCraig/GTAG-Manager**](https://github.com/EarthCraig/GTAG-Manager) | Declares tags, triggers, and variables as declarative YAML manifests and applies them idempotently like Terraform. |
| [**ToroSachi/tagops**](https://github.com/ToroSachi/tagops) | Manages GTM container configurations as code using declarative configuration files and automated sync pipelines. |

### Container snippet injection and website installation

*2 projects. Automate the discovery of DOM injection targets and embed GTM container snippet scripts into web pages.*

| Project | What it does |
|---|---|
| [**owgit/gtm-skill**](https://github.com/owgit/gtm-skill) | Automates the discovery of DOM injection targets and embeds GTM container snippet scripts into web pages. |
| [**desdobroprod-eng/install-tags-10dobro**](https://github.com/desdobroprod-eng/install-tags-10dobro) | Provides tooling for Google Tag Manager containers. |

### Multi-account hierarchy browsing and container discovery

*6 projects. Navigate complex enterprise account hierarchies and discover active web containers across multiple Google organizations.*

| Project | What it does |
|---|---|
| [**CarC96/google-tag-manager-mcp**](https://github.com/CarC96/google-tag-manager-mcp) | Navigates enterprise account hierarchies and discovers active web containers across multiple Google organizations. |
| [**dhawalshah/google-tag-manager-mcp**](https://github.com/dhawalshah/google-tag-manager-mcp) | Provides tooling for Google Tag Manager containers. |
| [**noviq-ai/google-tagmanager-mcp**](https://github.com/noviq-ai/google-tagmanager-mcp) | Provides tooling for Google Tag Manager containers. |
| [**beuch26/webguru-gtm-mcp**](https://github.com/beuch26/webguru-gtm-mcp) | Provides tooling for Google Tag Manager containers. |
| [**Dayuse-Labs/gtm-mcp**](https://github.com/Dayuse-Labs/gtm-mcp) | Provides tooling for Google Tag Manager containers. |
| [**sidiio/mcp-gtm**](https://github.com/sidiio/mcp-gtm) | Provides tooling for Google Tag Manager containers. |

---

## 2. Server-side GTM and edge infrastructure

*88 projects. MCP servers and edge tools configuring server-side GTM containers, Cloudflare Workers, Cloud Run, and event transformations.*

### Hosted edge proxy and managed Cloudflare Worker endpoints

*3 projects. Route server-side GTM HTTP traffic via managed Cloudflare Workers with hosted OAuth proxies to eliminate GCP setup.*

| Project | What it does |
|---|---|
| [**stape-io/google-tag-manager-mcp-server**](https://github.com/stape-io/google-tag-manager-mcp-server) | Deploys a Cloudflare Worker edge proxy providing native Server-Side GTM client, transformation, and container management. |
| [**stape-io/stape-mcp-server**](https://github.com/stape-io/stape-mcp-server) | Integrates Stape Cloud hosting with GTM container management, provisioning sGTM custom domains and monitoring edge instances. |
| [**tijevlam/unboundai-google-tag-manager-mcp-server**](https://github.com/tijevlam/unboundai-google-tag-manager-mcp-server) | Provides tooling for Google Tag Manager containers. |

### Agency edge deployment forks and multi-client worker environments

*75 projects. Deploy self-hosted Cloudflare Worker proxy instances customized for agency multi-client tagging infrastructure.*

| Project | What it does |
|---|---|
| [**jrodeiro5/gtm-mcp-server**](https://github.com/jrodeiro5/gtm-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**naimbic/gtm-mcp-server**](https://github.com/naimbic/gtm-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**yacine123bain/gtm-mcp-server**](https://github.com/yacine123bain/gtm-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**Feisalgro/gtm-mcp-server**](https://github.com/Feisalgro/gtm-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**Perry0077/gtm-mcp-server**](https://github.com/Perry0077/gtm-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**jacobgaehringambit/gtm-mcp-server**](https://github.com/jacobgaehringambit/gtm-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**pattitudez/gtm-mcp-server**](https://github.com/pattitudez/gtm-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**hey-rootedranked/gtm-mcp**](https://github.com/hey-rootedranked/gtm-mcp) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**gigantsc/gtm-mcp-server**](https://github.com/gigantsc/gtm-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**borogz/gtm-mcp-server**](https://github.com/borogz/gtm-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**designconverte/gtm-mcp-server**](https://github.com/designconverte/gtm-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**aj-data-analyst/gtm-mcp-server**](https://github.com/aj-data-analyst/gtm-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**hmuvvala/gtm-mcp-server**](https://github.com/hmuvvala/gtm-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**SAY-5/google-tag-manager-mcp-server**](https://github.com/SAY-5/google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**akhileshMplus/google-tag-manager-mcp-server**](https://github.com/akhileshMplus/google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**Secure-Code-Zyloch-Basic/google-tag-manager-mcp-server**](https://github.com/Secure-Code-Zyloch-Basic/google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**realroboto/google-tag-manager-mcp-server**](https://github.com/realroboto/google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**gabriel-herencia/google-tag-manager-mcp-server**](https://github.com/gabriel-herencia/google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**Softeo-Tecnologia/google-tag-manager-mcp-server**](https://github.com/Softeo-Tecnologia/google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**ondigisolutions/google-tag-manager-mcp-server**](https://github.com/ondigisolutions/google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**guipmilek/google-tag-manager-mcp-server**](https://github.com/guipmilek/google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**piiiiiiiiiita/google-tag-manager-mcp-server**](https://github.com/piiiiiiiiiita/google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**purple-elephant-77/google-tag-manager-mcp-server**](https://github.com/purple-elephant-77/google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**ludvig-e-w/google-tag-manager-mcp-server**](https://github.com/ludvig-e-w/google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**ANALYGO/google-tag-manager-mcp-server-1**](https://github.com/ANALYGO/google-tag-manager-mcp-server-1) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**ANALYGO/analygo-gtm-mcp**](https://github.com/ANALYGO/analygo-gtm-mcp) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**danishashko/google-tag-manager-mcp-server**](https://github.com/danishashko/google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**clxgrowthops/google-tag-manager-mcp-server**](https://github.com/clxgrowthops/google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**abrahamprinceramarosandy-code/google-tag-manager-mcp-server**](https://github.com/abrahamprinceramarosandy-code/google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**Fourteen10-Advertising/google-tag-manager-mcp-server**](https://github.com/Fourteen10-Advertising/google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**joacoc2020/google-tag-manager-mcp-server**](https://github.com/joacoc2020/google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**HandelBR/google-tag-manager-mcp-server**](https://github.com/HandelBR/google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**rodfchaves/google-tag-manager-mcp-server**](https://github.com/rodfchaves/google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**Gerico90/google-tag-manager-mcp-server**](https://github.com/Gerico90/google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**ElishaKay/google-tag-manager-mcp-server**](https://github.com/ElishaKay/google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**serkanhaslak/gtm-mcp**](https://github.com/serkanhaslak/gtm-mcp) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**itayshmool/google-tag-manager-mcp-server**](https://github.com/itayshmool/google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**iflow-mcp/stape-io-google-tag-manager-mcp-server**](https://github.com/iflow-mcp/stape-io-google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**bit-of-a-shambles/google-tag-manager-mcp-server**](https://github.com/bit-of-a-shambles/google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**martinduncanson/google-tag-manager-mcp-server**](https://github.com/martinduncanson/google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**chrishart0/google-tag-manager-mcp-server**](https://github.com/chrishart0/google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**AlfredoJF/google-tag-manager-mcp-server**](https://github.com/AlfredoJF/google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**loviaistar/google-tag-manager-mcp-server**](https://github.com/loviaistar/google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**abn-digital/google-tag-manager-mcp-server**](https://github.com/abn-digital/google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**abn-digital/gtm-mcp-server**](https://github.com/abn-digital/gtm-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**nadia318/google-tag-manager-mcp-server**](https://github.com/nadia318/google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**lucamartello73/google-tag-manager-mcp-server**](https://github.com/lucamartello73/google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**schoeppe/google-tag-manager-mcp-server**](https://github.com/schoeppe/google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**convertivio-design/google-tag-manager-mcp-server**](https://github.com/convertivio-design/google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**milkyway90ly/google-tag-manager-mcp-server**](https://github.com/milkyway90ly/google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**nc2digital/google-tag-manager-mcp-server**](https://github.com/nc2digital/google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**lucianfialho/google-tag-manager-mcp-server**](https://github.com/lucianfialho/google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**AdamGustavsson/google-tag-manager-mcp-server**](https://github.com/AdamGustavsson/google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**reveliio/google-tag-manager-mcp-server**](https://github.com/reveliio/google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**NeuroClusterAI/google-tag-manager-mcp-server**](https://github.com/NeuroClusterAI/google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**errinundra/google-tag-manager-mcp**](https://github.com/errinundra/google-tag-manager-mcp) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**TuggleDigital/google-tag-manager-mcp-server**](https://github.com/TuggleDigital/google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**chris-amor/google-tag-manager-mcp-server**](https://github.com/chris-amor/google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**e-sigma/google-tag-manager-mcp-server**](https://github.com/e-sigma/google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**hablapro/google-tag-manager-mcp-server**](https://github.com/hablapro/google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**LuisRivero021298/google-tag-manager-mcp-server**](https://github.com/LuisRivero021298/google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**damonshen17/google-tag-manager-mcp-server**](https://github.com/damonshen17/google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**Raphamotion/google-tag-manager-mcp-server**](https://github.com/Raphamotion/google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**Matvey-Kuk/google-tag-manager-mcp-server**](https://github.com/Matvey-Kuk/google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**erickOz/google-tag-manager-mcp-server**](https://github.com/erickOz/google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**sinancan34/google-tag-manager-mcp-server**](https://github.com/sinancan34/google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**imohamed-godaddy/google-tag-manager-mcp-server**](https://github.com/imohamed-godaddy/google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**mcp-research/stape-io__google-tag-manager-mcp-server**](https://github.com/mcp-research/stape-io__google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**Clinteastman/google-tag-manager-mcp-server**](https://github.com/Clinteastman/google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**crialabs/google-tag-manager-mcp-server**](https://github.com/crialabs/google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**LevelInteractive/google-tag-manager-mcp-server**](https://github.com/LevelInteractive/google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**hheitzdata/google-tag-manager-mcp-server**](https://github.com/hheitzdata/google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**webdagger/google-tag-manager-mcp-server**](https://github.com/webdagger/google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**lwsinclair/google-tag-manager-mcp-server**](https://github.com/lwsinclair/google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |
| [**ionut85/google-tag-manager-mcp-server**](https://github.com/ionut85/google-tag-manager-mcp-server) | Maintains an agency-specific edge deployment fork of Stape's Cloudflare Worker server for multi-client container administration. |

### Self-hosted containerized Docker and Cloud Run infrastructure

*4 projects. Deploy and monitor server-side GTM container images directly on private GCP Cloud Run clusters or Docker engines.*

| Project | What it does |
|---|---|
| [**metkamedia/gtm-mcp-server**](https://github.com/metkamedia/gtm-mcp-server) | Provides tooling for Google Tag Manager containers. |
| [**flockstore/platofrm-gtm-mcp**](https://github.com/flockstore/platofrm-gtm-mcp) | Serves as a stateless Go sidecar verifying Server-Side GTM hits and event routing without browser cookies. |
| [**sachin-taldar/gtm-mcp-server**](https://github.com/sachin-taldar/gtm-mcp-server) | Provides tooling for Google Tag Manager containers. |
| [**r-ms/gtm-mcp-server**](https://github.com/r-ms/gtm-mcp-server) | Provides tooling for Google Tag Manager containers. |

### Server-side HTTP client routing and request transformations

*2 projects. Parse incoming webhook payloads, map custom client claims, and strip query parameters inside server containers.*

| Project | What it does |
|---|---|
| [**samarthanalytics-sj/samarth-analytics-mcp**](https://github.com/samarthanalytics-sj/samarth-analytics-mcp) | Audits European Economic Area Consent Mode v2 parameters and validates tag trigger reachability queues. |
| [**bintangazhari/gtm-mcp-server**](https://github.com/bintangazhari/gtm-mcp-server) | Provides tooling for Google Tag Manager containers. |

### Server-side attribution event forwarding and ClickHouse warehousing

*2 projects. Extract server-side event payloads and stream them into high-performance analytical ClickHouse databases.*

| Project | What it does |
|---|---|
| [**AdPageGroup/AdPageAttributionTag**](https://github.com/AdPageGroup/AdPageAttributionTag) | Provides tooling for Google Tag Manager containers. |
| [**adpage-dev/google-tag-manager-mcp-server**](https://github.com/adpage-dev/google-tag-manager-mcp-server) | Provides tooling for Google Tag Manager containers. |

### LLM crawler detection and AI traffic classification

*1 projects. Detect traffic originating from large language models and segment AI-influenced visitor flows inside GTM.*

| Project | What it does |
|---|---|
| [**TAGGRS/LLM-Checker**](https://github.com/TAGGRS/LLM-Checker) | Provides tooling for Google Tag Manager containers. |

### Server-side operational rule enforcement and Stape pitfall auditing

*1 projects. Audit server-side container setups against Stape operational best practices, cookie lifetimes, and edge pitfalls.*

| Project | What it does |
|---|---|
| [**tmnh83/gtm-tracking-skill**](https://github.com/tmnh83/gtm-tracking-skill) | Provides tooling for Google Tag Manager containers. |

---

## 3. Operational safety, mutation gates, and quota control

*7 projects. Safety middleware and verification gates preventing quota exhaustion, trapping silent compiler errors, and securing production mutations.*

### Proactive request rate-pacing and 0.25 QPS quota protection

*1 projects. Enforce request serialization queues with 4.2-second pauses to guarantee agent operations never trigger Google 429 quota exhaustion.*

| Project | What it does |
|---|---|
| [**A1-x-Tech/mcp-google-tagmanager**](https://github.com/A1-x-Tech/mcp-google-tagmanager) | Implements a singleton serialized Promise queue with 4.2-second pacing to prevent 0.25 QPS quota crashes during container operations. |

### Multi-tiered permission gates and cryptographic MRTR verification

*1 projects. Enforce read/write/destructive privilege tiers and require single-use cryptographic tokens before executing destructive mutations.*

| Project | What it does |
|---|---|
| [**kb223/gtm-ga4-mcp**](https://github.com/kb223/gtm-ga4-mcp) | Enforces Model-Requested Two-Phase Review (MRTR) using cryptographic SHA-256 tokens to prevent unverified container releases. |

### Enterprise IAM service-account isolation and write-gated authentication

*2 projects. Connect via air-gapped Google Cloud Service Account JSON credentials with write operations disabled by default.*

| Project | What it does |
|---|---|
| [**KUHL-HQ/gtm-mcp**](https://github.com/KUHL-HQ/gtm-mcp) | Provides an air-gapped local Node.js stdio server using direct Google Cloud Service Account JSON keys without cloud telemetry. |
| [**thesyedyahya/gtm-mcp**](https://github.com/thesyedyahya/gtm-mcp) | Provides tooling for Google Tag Manager containers. |

### Container rollback, tag state toggling, and version freezing

*2 projects. Revert breaking container releases, pause and resume individual tags, and freeze workspace versions.*

| Project | What it does |
|---|---|
| [**gustavomkt/mcp-tagmanager**](https://github.com/gustavomkt/mcp-tagmanager) | Provides tooling for Google Tag Manager containers. |
| [**Insightful-Pipe/google-tag-manager-mcp-server**](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server) | Provides tooling for Google Tag Manager containers. |

### Localized read-only guardrails and human-in-the-loop audit gates

*1 projects. Enforce read-only container inspection modes by default with mandatory human confirmation for regional production changes.*

| Project | What it does |
|---|---|
| [**lucasbueno-live/gtm-mcp-liveseo**](https://github.com/lucasbueno-live/gtm-mcp-liveseo) | Provides tooling for Google Tag Manager containers. |

---

## 4. Testing, QA, dataLayer assertions, and CDN lag bypass

*6 projects. Validation frameworks, WebSocket preview interceptors, and headless browser journeys testing tag firing and bypassing CDN cache lag.*

### Tag Assistant Preview automation and WebSocket debugging

*1 projects. Connect directly to Google Tag Assistant Preview sessions via WebSockets to test draft container configurations without waiting for CDN propagation.*

| Project | What it does |
|---|---|
| [**haiqigeng/6-gtm-client-recette**](https://github.com/haiqigeng/6-gtm-client-recette) | Automates Google Tag Assistant Preview over WebSocket debugging bridges to verify draft tags with zero edge CDN propagation delay. |

### Synthetic browser journey execution and dataLayer event assertion

*2 projects. Simulate user journeys via headless browsers, intercept dataLayer pushes, and assert payload schema conformity.*

| Project | What it does |
|---|---|
| [**digitalXperiments/fluxito**](https://github.com/digitalXperiments/fluxito) | Executes programmatic dataLayer monkey-patching and multi-step browser user journey assertions against deployed web containers. |
| [**moonbirdai/puppeteer-plus-martech-mcp**](https://github.com/moonbirdai/puppeteer-plus-martech-mcp) | Executes headless Puppeteer browser journeys to monitor live tag firing and dataLayer events. |

### Automated tag firing acceptance testing and defect remediation

*2 projects. Scan active tag execution matrices across test journeys, identify broken triggers, and generate prioritized fix plans.*

| Project | What it does |
|---|---|
| [**dreamfoundryai/gtm-audit-skill**](https://github.com/dreamfoundryai/gtm-audit-skill) | Analyzes container JSON export files to identify unused variables and orphaned trigger configurations. |
| [**haiqigeng/1-web-analyst-mcp-setup**](https://github.com/haiqigeng/1-web-analyst-mcp-setup) | Provides tooling for Google Tag Manager containers. |

### Scriptless HTML regression testing and clean DOM verification

*1 projects. Verify that web applications render correctly when tracking tags are stripped or isolated in test sandboxes.*

| Project | What it does |
|---|---|
| [**naeini123/GTM-MCP-DEMO**](https://github.com/naeini123/GTM-MCP-DEMO) | Provides tooling for Google Tag Manager containers. |

---

## 5. Governance, compliance, auditing, and linting

*6 projects. Auditing engines, Consent Mode v2 validators, dependency graph traversals, and container health linters.*

### Consent Mode v2 policy enforcement and privacy gate auditing

*1 projects. Scan container tags for required consent states, verify Default Consent signals, and detect unconsented tracking tags.*

| Project | What it does |
|---|---|
| [**acamolese/gtm-audit-mcp**](https://github.com/acamolese/gtm-audit-mcp) | Conducts static AST linting to detect orphan variables, unused triggers, and deprecated Universal Analytics tags. |

### Container inventory export and Google Sheets automated diffing

*2 projects. Extract complete container entity inventories, diff versions against production, and sync findings into Google Sheets with AI summaries.*

| Project | What it does |
|---|---|
| [**ajaxbarcelonacruyff/gtm-auditor**](https://github.com/ajaxbarcelonacruyff/gtm-auditor) | Applies static heuristic audit rules to detect container bloat, unattached triggers, and redundant tags. |
| [**creativedesignseo/google-tag-manager-mcp**](https://github.com/creativedesignseo/google-tag-manager-mcp) | Provides tooling for Google Tag Manager containers. |

### Static container dependency analysis and orphan variable linting

*1 projects. Traverse the entity graph in read-only mode to find unreferenced variables, unreachable trigger groups, and circular references.*

| Project | What it does |
|---|---|
| [**tyssejc/gallium**](https://github.com/tyssejc/gallium) | Provides tooling for Google Tag Manager containers. |

### Web performance profiling and tracking hygiene monitoring

*1 projects. Evaluate tag execution overhead, measure impact on Core Web Vitals, and identify bloated third-party scripts.*

| Project | What it does |
|---|---|
| [**lpecom/webaudit-mcp**](https://github.com/lpecom/webaudit-mcp) | Provides tooling for Google Tag Manager containers. |

### Autonomous container health auditing and multi-rule diagnostics

*1 projects. Execute autonomous multi-check diagnostic routines to evaluate container cleanliness, naming conventions, and structural hygiene.*

| Project | What it does |
|---|---|
| [**wonyoungseong/gtmAgent**](https://github.com/wonyoungseong/gtmAgent) | Provides tooling for Google Tag Manager containers. |

---

## 6. Hybrid analytics and cross-platform tag synchronization

*29 projects. Cross-platform orchestrators unifying GTM with GA4 event validation, Google Ads conversion tracking, and marketing data stacks.*

### Dual-platform GTM and GA4 configuration and event parameter validation

*6 projects. Synchronize GTM tag parameters with GA4 event definitions, verify custom dimensions, and automate tracking setups across both platforms.*

| Project | What it does |
|---|---|
| [**burhan29ee/google-analytics-gtm-mcp**](https://github.com/burhan29ee/google-analytics-gtm-mcp) | Synchronizes GTM container event tags with downstream GA4 Measurement Protocol custom dimensions and conversion events. |
| [**mharnett/mcp-gtm-ga4**](https://github.com/mharnett/mcp-gtm-ga4) | Provides safety by structural omission, deliberately omitting live container publish endpoints to mandate human-in-the-loop release gates. |
| [**CreativeMetrics/gtm-ga4-mcp**](https://github.com/CreativeMetrics/gtm-ga4-mcp) | Coordinates tag creation in GTM with corresponding event parameter registration in Google Analytics 4 properties. |
| [**Juce-me/ga4-gtm-config-mcp**](https://github.com/Juce-me/ga4-gtm-config-mcp) | Automates end-to-end event tracking pipelines by creating GTM web tags and verifying GA4 property schemas simultaneously. |
| [**wonyoungseong/ga4-mcp-server**](https://github.com/wonyoungseong/ga4-mcp-server) | Provides tooling for Google Tag Manager containers. |
| [**tiojimbo/agent-gtm-ga4**](https://github.com/tiojimbo/agent-gtm-ga4) | Provides tooling for Google Tag Manager containers. |

### Google Ads conversion tracking and enhanced conversion setup

*2 projects. Automate Google Ads conversion linker tags, map enhanced conversion user data variables, and verify conversion triggers.*

| Project | What it does |
|---|---|
| [**bryangoncalvespro-hub/google-tag-manager-mcp-server**](https://github.com/bryangoncalvespro-hub/google-tag-manager-mcp-server) | Provides tooling for Google Tag Manager containers. |
| [**Organized-AI/openclaw-tracking-setup**](https://github.com/Organized-AI/openclaw-tracking-setup) | Provides tooling for Google Tag Manager containers. |

### Full Google marketing stack unified orchestration

*14 projects. Unify GTM container automation with Google Analytics 4, Google Search Console, Google Ads, and Merchant Center in a single multi-tool MCP environment.*

| Project | What it does |
|---|---|
| [**generalist-club/google-marketing-stack-mcp**](https://github.com/generalist-club/google-marketing-stack-mcp) | Provides tooling for Google Tag Manager containers. |
| [**fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM**](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM) | Orchestrates full-funnel tag management across Google Ads, GA4, Search Console, and GTM from a single MCP interface. |
| [**marwa-mrwan/google-clarity-mcp-codex**](https://github.com/marwa-mrwan/google-clarity-mcp-codex) | Provides tooling for Google Tag Manager containers. |
| [**andylackie/google-marketing-mcp-servers**](https://github.com/andylackie/google-marketing-mcp-servers) | Provides tooling for Google Tag Manager containers. |
| [**archievi/climbpast-mcp**](https://github.com/archievi/climbpast-mcp) | Provides tooling for Google Tag Manager containers. |
| [**skiddgoddamn/google-seo-mcp**](https://github.com/skiddgoddamn/google-seo-mcp) | Provides tooling for Google Tag Manager containers. |
| [**jabeer4148-ops/google-measurement-mcp**](https://github.com/jabeer4148-ops/google-measurement-mcp) | Provides tooling for Google Tag Manager containers. |
| [**bypixels/SEO-MCP-PRO**](https://github.com/bypixels/SEO-MCP-PRO) | Provides tooling for Google Tag Manager containers. |
| [**advisorppc-org/advisorppc-plugin**](https://github.com/advisorppc-org/advisorppc-plugin) | Provides tooling for Google Tag Manager containers. |
| [**dgtlsunrise/dgtl-connector**](https://github.com/dgtlsunrise/dgtl-connector) | Provides tooling for Google Tag Manager containers. |
| [**BenJohnston429/gmcp**](https://github.com/BenJohnston429/gmcp) | Provides tooling for Google Tag Manager containers. |
| [**AINative-Studio/ainative-gtm-mcp**](https://github.com/AINative-Studio/ainative-gtm-mcp) | Provides tooling for Google Tag Manager containers. |
| [**oqva-digital/oqva-marketing-mcp**](https://github.com/oqva-digital/oqva-marketing-mcp) | Provides tooling for Google Tag Manager containers. |
| [**RoyAzran/mcp-ads**](https://github.com/RoyAzran/mcp-ads) | Provides tooling for Google Tag Manager containers. |

### Multi-engine search and performance marketing synchronization

*1 projects. Connect GTM container event pipelines with Yandex Direct, Yandex Metrika, and international webmaster tools.*

| Project | What it does |
|---|---|
| [**VKirill/ohmy-seo**](https://github.com/VKirill/ohmy-seo) | Provides tooling for Google Tag Manager containers. |

### Analytics data warehouse staging, dbt modeling, and BI dashboarding

*4 projects. Stream GTM events into analytical warehouses, orchestrate dbt staging models, and build Looker Studio dashboards.*

| Project | What it does |
|---|---|
| [**rowens2025/gtm_analytics**](https://github.com/rowens2025/gtm_analytics) | Provides tooling for Google Tag Manager containers. |
| [**hatlem/admirate-skills**](https://github.com/hatlem/admirate-skills) | Provides tooling for Google Tag Manager containers. |
| [**admirate-skills/admirate-skills**](https://github.com/admirate-skills/admirate-skills) | Provides tooling for Google Tag Manager containers. |
| [**0xRyanlee/codex-ga4-portfolio-ops**](https://github.com/0xRyanlee/codex-ga4-portfolio-ops) | Provides tooling for Google Tag Manager containers. |

### Agency call-tracking and third-party attribution integration

*2 projects. Configure multi-platform agency tracking stacks combining WhatConverts, GA4 Admin, and GTM web containers.*

| Project | What it does |
|---|---|
| [**jayweezy247/tracking-stack-mcp**](https://github.com/jayweezy247/tracking-stack-mcp) | Provides tooling for Google Tag Manager containers. |
| [**webanalyticsprobd-maker/tracking-mcp-server**](https://github.com/webanalyticsprobd-maker/tracking-mcp-server) | Validates tracking implementations by simulating user actions and capturing outbound measurement beacons. |

---

## 7. Developer tools, embedded UIs, and caching

*8 projects. Daemons, multi-service plugin bundles, ecosystem registries, and developer tooling streamlining GTM engineering workflows.*

### High-throughput multi-tenant daemon architectures and SSE streaming

*1 projects. Run scalable Starlette and SSE HTTP daemons for cloud-hosted GTM container operations with concurrent client sessions.*

| Project | What it does |
|---|---|
| [**magdamarketinghackers/MCP-GTM**](https://github.com/magdamarketinghackers/MCP-GTM) | Provides tooling for Google Tag Manager containers. |

### Curated agent plugin bundles and cross-service automation packs

*2 projects. Deploy opinionated Claude Code plugin packs that bundle GTM automation skills with Google Cloud and browser tooling.*

| Project | What it does |
|---|---|
| [**henkisdabro/wookstar-claude-plugins**](https://github.com/henkisdabro/wookstar-claude-plugins) | Provides tooling for Google Tag Manager containers. |
| [**N-O-P-E/nope-marketplace**](https://github.com/N-O-P-E/nope-marketplace) | Provides tooling for Google Tag Manager containers. |

### Ecosystem registries and machine-readable tool catalogs

*1 projects. Catalog, index, and audit the ecosystem of GTM MCP tools, schemas, and endpoints.*

| Project | What it does |
|---|---|
| [**andrewcmcguire/gtm-mcp-directory**](https://github.com/andrewcmcguire/gtm-mcp-directory) | Provides tooling for Google Tag Manager containers. |

### Gamified tag management sandboxes and educational simulators

*1 projects. Train marketing and ad ops developers on GTM container concepts through interactive simulated challenges.*

| Project | What it does |
|---|---|
| [**bmuller02/gtm-simulator-claude**](https://github.com/bmuller02/gtm-simulator-claude) | Provides tooling for Google Tag Manager containers. |

### Enterprise Microsoft Copilot Studio connector integration

*1 projects. Bridge Google Tag Manager container endpoints into Microsoft Copilot Studio and Power Platform agent runtimes.*

| Project | What it does |
|---|---|
| [**assalasArab/gtm-mcp-server**](https://github.com/assalasArab/gtm-mcp-server) | Provides tooling for Google Tag Manager containers. |

### Self-hosted agency deployment wrappers and environment presets

*2 projects. Provide pre-configured, shareable GTM MCP server wrappers tailored for agency multi-client deployments.*

| Project | What it does |
|---|---|
| [**was-member-keramat/was-gtm-mcp**](https://github.com/was-member-keramat/was-gtm-mcp) | Provides tooling for Google Tag Manager containers. |
| [**mnsmasum62786/was-gtm-mcp**](https://github.com/mnsmasum62786/was-gtm-mcp) | Provides tooling for Google Tag Manager containers. |

---

## 8. Experimental and concept scaffolds

*42 projects. Quarantine domain isolating early-stage prototypes, unverified forks, alternative tag engines, and non-analytics acronym collisions.*

### Early-stage experimental container prototypes and unverified servers

*21 projects. Explore early-stage, pre-alpha MCP servers with minimal commit history or unverified tool schemas.*

| Project | What it does |
|---|---|
| [**caioldcarvalho/gtm-mcp**](https://github.com/caioldcarvalho/gtm-mcp) | Experimental prototype or early-stage scaffold exploring gtm-mcp tag management. |
| [**pathtoresiliencebv/gtm-mcp**](https://github.com/pathtoresiliencebv/gtm-mcp) | Experimental prototype or early-stage scaffold exploring gtm-mcp tag management. |
| [**FrontierAI-Works/vibe-gtm-mcp**](https://github.com/FrontierAI-Works/vibe-gtm-mcp) | Experimental prototype or early-stage scaffold exploring vibe-gtm-mcp tag management. |
| [**shakibmolla/gtm-mcp**](https://github.com/shakibmolla/gtm-mcp) | Experimental prototype or early-stage scaffold exploring gtm-mcp tag management. |
| [**ambit1977/GTM-MCP**](https://github.com/ambit1977/GTM-MCP) | Experimental prototype or early-stage scaffold exploring GTM-MCP tag management. |
| [**adtechnacity/gtm-mcp**](https://github.com/adtechnacity/gtm-mcp) | Experimental prototype or early-stage scaffold exploring gtm-mcp tag management. |
| [**dnwosu/google-tag-manager-mcp-server**](https://github.com/dnwosu/google-tag-manager-mcp-server) | Experimental prototype or early-stage scaffold exploring google-tag-manager-mcp-server tag management. |
| [**Synter-Media-AI/google-tag-manager-agent**](https://github.com/Synter-Media-AI/google-tag-manager-agent) | Experimental prototype or early-stage scaffold exploring google-tag-manager-agent tag management. |
| [**neep305/mcp-for-gtm**](https://github.com/neep305/mcp-for-gtm) | Experimental prototype or early-stage scaffold exploring mcp-for-gtm tag management. |
| [**chanl-ai/mcp-gtm-demo**](https://github.com/chanl-ai/mcp-gtm-demo) | Experimental prototype or early-stage scaffold exploring mcp-gtm-demo tag management. |
| [**yonegobv/gtm-mcp**](https://github.com/yonegobv/gtm-mcp) | Experimental prototype or early-stage scaffold exploring gtm-mcp tag management. |
| [**baptlagae-hue/gtm-mcp**](https://github.com/baptlagae-hue/gtm-mcp) | Experimental prototype or early-stage scaffold exploring gtm-mcp tag management. |
| [**connorstearns/mcp-gtm**](https://github.com/connorstearns/mcp-gtm) | Experimental prototype or early-stage scaffold exploring mcp-gtm tag management. |
| [**zaaaato/gtm-mcp**](https://github.com/zaaaato/gtm-mcp) | Experimental prototype or early-stage scaffold exploring gtm-mcp tag management. |
| [**b-buller/gtm-mcp**](https://github.com/b-buller/gtm-mcp) | Experimental prototype or early-stage scaffold exploring gtm-mcp tag management. |
| [**ErikTMA/gtm-mcp**](https://github.com/ErikTMA/gtm-mcp) | Experimental prototype or early-stage scaffold exploring gtm-mcp tag management. |
| [**dylanottinger/gtm-mcp-server**](https://github.com/dylanottinger/gtm-mcp-server) | Experimental prototype or early-stage scaffold exploring gtm-mcp-server tag management. |
| [**sih3rron/gtm-mcp-client**](https://github.com/sih3rron/gtm-mcp-client) | Experimental prototype or early-stage scaffold exploring gtm-mcp-client tag management. |
| [**maxhenderson-automatiq/automatiq-gtm-mcp**](https://github.com/maxhenderson-automatiq/automatiq-gtm-mcp) | Experimental prototype or early-stage scaffold exploring automatiq-gtm-mcp tag management. |
| [**PM-Labs/mcp-gtm**](https://github.com/PM-Labs/mcp-gtm) | Experimental prototype or early-stage scaffold exploring mcp-gtm tag management. |
| [**chrstphe/gtm-mcp-server**](https://github.com/chrstphe/gtm-mcp-server) | Experimental prototype or early-stage scaffold exploring gtm-mcp-server tag management. |

### Framework-scaffolded and auto-generated MCP wrappers

*1 projects. Study auto-generated MCP server wrappers synthesized by MCP generation platforms without manual domain tuning.*

| Project | What it does |
|---|---|
| [**ag2-mcp-servers/tag-manager-api**](https://github.com/ag2-mcp-servers/tag-manager-api) | Provides tooling for Google Tag Manager containers. |

### Alternative developer-native tag management engines

*1 projects. Explore open-source developer-centric tag managers offering alternative event collection architectures outside the Google ecosystem.*

| Project | What it does |
|---|---|
| [**elbwalker/walkerOS**](https://github.com/elbwalker/walkerOS) | Provides tooling for Google Tag Manager containers. |

### Quarantined Go-to-Market sales and outbound prospecting pipelines

*14 projects. Isolate B2B cold outreach, lead scoring, and sales prospecting pipelines caught by 'gtm' acronym collisions.*

| Project | What it does |
|---|---|
| [**impecablemee/gtm-mcp**](https://github.com/impecablemee/gtm-mcp) | Quarantined B2B Go-to-Market sales and outbound CRM prospecting tool matching the GTM acronym. |
| [**aleprieto790-alt/gtm-mcp**](https://github.com/aleprieto790-alt/gtm-mcp) | Quarantined B2B Go-to-Market sales and outbound CRM prospecting tool matching the GTM acronym. |
| [**mambalabsdev/mcp-gtm-suite**](https://github.com/mambalabsdev/mcp-gtm-suite) | Quarantined B2B Go-to-Market sales and outbound CRM prospecting tool matching the GTM acronym. |
| [**texauhq/texau-gtm-skills**](https://github.com/texauhq/texau-gtm-skills) | Quarantined B2B Go-to-Market sales and outbound CRM prospecting tool matching the GTM acronym. |
| [**matteotitta/awesome-gtm-mcp-servers**](https://github.com/matteotitta/awesome-gtm-mcp-servers) | Quarantined B2B Go-to-Market sales and outbound CRM prospecting tool matching the GTM acronym. |
| [**shashwatgtm/craft-gtm-mcp**](https://github.com/shashwatgtm/craft-gtm-mcp) | Quarantined B2B Go-to-Market sales and outbound CRM prospecting tool matching the GTM acronym. |
| [**ImranIzham/gtm-mcp-servers**](https://github.com/ImranIzham/gtm-mcp-servers) | Quarantined B2B Go-to-Market sales and outbound CRM prospecting tool matching the GTM acronym. |
| [**vivz-git/Gtm-Mcp-Server**](https://github.com/vivz-git/Gtm-Mcp-Server) | Quarantined B2B Go-to-Market sales and outbound CRM prospecting tool matching the GTM acronym. |
| [**mindofhenry/beacon**](https://github.com/mindofhenry/beacon) | Quarantined B2B Go-to-Market sales and outbound CRM prospecting tool matching the GTM acronym. |
| [**lan-club-live/startup-gtm-skill**](https://github.com/lan-club-live/startup-gtm-skill) | Quarantined B2B Go-to-Market sales and outbound CRM prospecting tool matching the GTM acronym. |
| [**mambalabsdev/mcp-gtm-signals-aggregator**](https://github.com/mambalabsdev/mcp-gtm-signals-aggregator) | Quarantined B2B Go-to-Market sales and outbound CRM prospecting tool matching the GTM acronym. |
| [**mambalabsdev/mcp-gtm-job-discovery**](https://github.com/mambalabsdev/mcp-gtm-job-discovery) | Quarantined B2B Go-to-Market sales and outbound CRM prospecting tool matching the GTM acronym. |
| [**mambalabsdev/mcp-gtm-hiring-signal-scraper**](https://github.com/mambalabsdev/mcp-gtm-hiring-signal-scraper) | Quarantined B2B Go-to-Market sales and outbound CRM prospecting tool matching the GTM acronym. |
| [**mambalabsdev/mcp-gtm-tech-stack-signal-scraper**](https://github.com/mambalabsdev/mcp-gtm-tech-stack-signal-scraper) | Quarantined B2B Go-to-Market sales and outbound CRM prospecting tool matching the GTM acronym. |

### Non-GTM acronym collisions and external scaffolds

*5 projects. Quarantine unrelated networking tools, note-tagging CLIs, and personal candidate scaffolds matching the tag manager naming pattern.*

| Project | What it does |
|---|---|
| [**theloadbalancercrew/cute-bigip-gtm-mcp**](https://github.com/theloadbalancercrew/cute-bigip-gtm-mcp) | Quarantined external infrastructure or network routing tool matching the GTM acronym. |
| [**thrawn01/tag-manager**](https://github.com/thrawn01/tag-manager) | Quarantined external infrastructure or network routing tool matching the GTM acronym. |
| [**Parda11/Bug-froge**](https://github.com/Parda11/Bug-froge) | Quarantined external infrastructure or network routing tool matching the GTM acronym. |
| [**vijay-kalyan-28/portfolio-website**](https://github.com/vijay-kalyan-28/portfolio-website) | Quarantined external infrastructure or network routing tool matching the GTM acronym. |
| [**erinkolsen-mktg/gtm-mcp**](https://github.com/erinkolsen-mktg/gtm-mcp) | Quarantined external infrastructure or network routing tool matching the GTM acronym. |

---

## Resources

- **[Google Tag Manager API v2 Official Reference](https://developers.google.com/tag-platform/tag-manager/api/v2)**: Complete upstream documentation for accounts, containers, workspaces, tags, triggers, and variables.
- **[Server-Side GTM Architecture Overview](https://developers.google.com/tag-platform/tag-manager/server-side)**: Google Cloud Run and containerized Docker edge deployment models for sGTM.
- **[Model Context Protocol Specification](https://modelcontextprotocol.io/)**: Open protocol standard defining client-server JSON-RPC message schemas, tool definitions, and resources.
- **[Google Tag Assistant Preview Mode Guide](https://support.google.com/tagmanager/answer/6107056)**: Protocol guide for WebSocket-driven live tag inspection and debug bridges.
- **[European Economic Area Consent Mode v2 Standards](https://developers.google.com/tag-platform/security/guides/consent)**: Compliance requirements for `ad_user_data` and `ad_personalization` tracking signals.

## Reference

- **The 0.25 QPS Project Quota Barrier:** Google Tag Manager strictly enforces a quota of 25 requests per 100 seconds (0.25 QPS). Unthrottled agent loops crash with `HTTP 429 Resource Exhausted` within 5 seconds without serialized pacing queues (e.g. `minIntervalMs = 4200`).
- **Silent Compiler Errors (`compilerError: true`):** Google's API returns `HTTP 200 OK` on invalid JavaScript inside Custom HTML tags while embedding `{ "compilerError": true }` in the response payload. Naive agents inspect only HTTP status codes, falsely confirming broken container builds.
- **Edge CDN Cache Invalidation Lag (30–180s):** Container releases on `googletagmanager.com/gtm.js` require 30 to 180 seconds to invalidate edge nodes globally. Post-deployment headless tests must poll CDN versions or automate Tag Assistant Preview over WebSockets to prevent false-negative QA failures.
- **Model-Requested Two-Phase Review (MRTR):** High-assurance mutation safety architecture requiring coding agents to request cryptographic SHA-256 tokens before triggering destructive container publishes or deletions.
- **System Prompt Token Taxes:** Granular MCP architectures exposing 70–112 micro-tools consume 16,000 to 29,500 prompt tokens per conversational turn. Consolidated 18-tool action-enum architectures reduce prompt overhead to ~1,850 tokens (an 88–92% efficiency gain).
