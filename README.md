# Awesome Google Tag Manager (GTM) MCP [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of Model Context Protocol (MCP) servers, agent tools, and client infrastructure for Google Tag Manager (GTM).

Google Tag Manager (GTM) Model Context Protocol (MCP) servers bridge AI coding assistants and autonomous agents to Google's container management APIs. This index organizes verified open-source GTM MCP servers, developer tools, auditing linters, and headless QA agents.

Official resources: [Google Tag Manager API](https://developers.google.com/tag-platform/tag-manager/api/v2) | [Model Context Protocol Specification](https://modelcontextprotocol.io)

---

## Contents

1. [Client-side web container operations (27)](#1-client-side-web-container-operations)
   - [Canonical and comprehensive GTM API v2 servers (7)](#canonical-and-comprehensive-gtm-api-v2-servers)
   - [Lightweight local stdio container inspection (8)](#lightweight-local-stdio-container-inspection)
   - [Workspace branching, synchronization, and change staging (1)](#workspace-branching-synchronization-and-change-staging)
   - [Custom JavaScript variable generation and ES5 AST validation (1)](#custom-javascript-variable-generation-and-es5-ast-validation)
   - [Declarative Infrastructure-as-Code container provisioning (2)](#declarative-infrastructure-as-code-container-provisioning)
   - [Container snippet injection and website installation (2)](#container-snippet-injection-and-website-installation)
   - [Multi-account hierarchy browsing and container discovery (6)](#multi-account-hierarchy-browsing-and-container-discovery)
2. [Server-side GTM and edge infrastructure (9)](#2-server-side-gtm-and-edge-infrastructure)
   - [Hosted edge proxy and managed Cloudflare Worker endpoints (3)](#hosted-edge-proxy-and-managed-cloudflare-worker-endpoints)
   - [Self-hosted containerized Docker and Cloud Run infrastructure (2)](#self-hosted-containerized-docker-and-cloud-run-infrastructure)
   - [Server-side HTTP client routing and request transformations (2)](#server-side-http-client-routing-and-request-transformations)
   - [Server-side attribution event forwarding and ClickHouse warehousing (1)](#server-side-attribution-event-forwarding-and-clickhouse-warehousing)
   - [Server-side operational rule enforcement and Stape pitfall auditing (1)](#server-side-operational-rule-enforcement-and-stape-pitfall-auditing)
3. [Operational safety, mutation gates, and quota control (7)](#3-operational-safety-mutation-gates-and-quota-control)
   - [Proactive request rate-pacing and 0.25 QPS quota protection (1)](#proactive-request-rate-pacing-and-025-qps-quota-protection)
   - [Multi-tiered permission gates and cryptographic MRTR verification (1)](#multi-tiered-permission-gates-and-cryptographic-mrtr-verification)
   - [Enterprise IAM service-account isolation and write-gated authentication (2)](#enterprise-iam-service-account-isolation-and-write-gated-authentication)
   - [Container rollback, tag state toggling, and version freezing (2)](#container-rollback-tag-state-toggling-and-version-freezing)
   - [Localized read-only guardrails and human-in-the-loop audit gates (1)](#localized-read-only-guardrails-and-human-in-the-loop-audit-gates)
4. [Testing, QA, dataLayer assertions, and CDN lag bypass (5)](#4-testing-qa-datalayer-assertions-and-cdn-lag-bypass)
   - [Tag Assistant Preview automation and WebSocket debugging (1)](#tag-assistant-preview-automation-and-websocket-debugging)
   - [Synthetic browser journey execution and dataLayer event assertion (2)](#synthetic-browser-journey-execution-and-datalayer-event-assertion)
   - [Automated tag firing acceptance testing and defect remediation (2)](#automated-tag-firing-acceptance-testing-and-defect-remediation)
5. [Governance, compliance, auditing, and linting (6)](#5-governance-compliance-auditing-and-linting)
   - [Consent Mode v2 policy enforcement and privacy gate auditing (1)](#consent-mode-v2-policy-enforcement-and-privacy-gate-auditing)
   - [Container inventory export and Google Sheets automated diffing (2)](#container-inventory-export-and-google-sheets-automated-diffing)
   - [Static container dependency analysis and orphan variable linting (1)](#static-container-dependency-analysis-and-orphan-variable-linting)
   - [Web performance profiling and tracking hygiene monitoring (1)](#web-performance-profiling-and-tracking-hygiene-monitoring)
   - [Autonomous container health auditing and multi-rule diagnostics (1)](#autonomous-container-health-auditing-and-multi-rule-diagnostics)
6. [Hybrid analytics and cross-platform tag synchronization (25)](#6-hybrid-analytics-and-cross-platform-tag-synchronization)
   - [Dual-platform GTM and GA4 configuration and event parameter validation (5)](#dual-platform-gtm-and-ga4-configuration-and-event-parameter-validation)
   - [Google Ads conversion tracking and enhanced conversion setup (2)](#google-ads-conversion-tracking-and-enhanced-conversion-setup)
   - [Full Google marketing stack unified orchestration (14)](#full-google-marketing-stack-unified-orchestration)
   - [Multi-engine search and performance marketing synchronization (1)](#multi-engine-search-and-performance-marketing-synchronization)
   - [Analytics data warehouse staging, dbt modeling, and BI dashboarding (1)](#analytics-data-warehouse-staging-dbt-modeling-and-bi-dashboarding)
   - [Agency call-tracking and third-party attribution integration (2)](#agency-call-tracking-and-third-party-attribution-integration)
7. [Developer tools, embedded UIs, and caching (4)](#7-developer-tools-embedded-uis-and-caching)
   - [High-throughput multi-tenant daemon architectures and SSE streaming (1)](#high-throughput-multi-tenant-daemon-architectures-and-sse-streaming)
   - [Curated agent plugin bundles and cross-service automation packs (2)](#curated-agent-plugin-bundles-and-cross-service-automation-packs)
   - [Self-hosted agency deployment wrappers and environment presets (1)](#self-hosted-agency-deployment-wrappers-and-environment-presets)
8. [Experimental and concept scaffolds (12)](#8-experimental-and-concept-scaffolds)
   - [Early-stage experimental container prototypes and unverified servers (11)](#early-stage-experimental-container-prototypes-and-unverified-servers)
   - [Framework-scaffolded and auto-generated MCP wrappers (1)](#framework-scaffolded-and-auto-generated-mcp-wrappers)
9. [Resources](#resources)
10. [Reference](#reference)

---

## Quick comparison

Comparison of leading Google Tag Manager MCP servers across transport, runtime, and operational capabilities.

| Project | Runtime | Transport | Tools | Safety Mode | Post-Deploy QA |
|---|---|---|---|---|---|
| [**rgellis/google-tag-manager-mcp**](https://github.com/rgellis/google-tag-manager-mcp) | Python | Stdio | 106 | Read-Only Flag | Unit Tests (383) |
| [**paolobietolini/gtm-mcp-server**](https://github.com/paolobietolini/gtm-mcp-server) | Go / Python | Stdio / HTTP | 94 | Workspace Gates | Agent Examples |
| [**stape-io/google-tag-manager-mcp-server**](https://github.com/stape-io/google-tag-manager-mcp-server) | TypeScript | Cloudflare / Stdio | 42 | User OAuth | sGTM Edge Proxy |
| [**A1-x-Tech/mcp-google-tagmanager**](https://github.com/A1-x-Tech/mcp-google-tagmanager) | TypeScript | Stdio | 18 | 0.25 QPS Serializer | Error Trapping |
| [**kb223/gtm-ga4-mcp**](https://github.com/kb223/gtm-ga4-mcp) | TypeScript | Stdio | 32 | Two-Phase Review (MRTR) | Schema Sync |
| [**KUHL-HQ/gtm-mcp**](https://github.com/KUHL-HQ/gtm-mcp) | Node.js | Stdio | 20 | Service Account IAM | Air-gapped |
| [**haiqigeng/6-gtm-client-recette**](https://github.com/haiqigeng/6-gtm-client-recette) | Playwright | Stdio | 8 | WebSocket Tunnel | Tag Assistant Live |
| [**digitalXperiments/fluxito**](https://github.com/digitalXperiments/fluxito) | Node.js | Stdio | 14 | Read-Only | dataLayer Assertions |
| [**acamolese/gtm-audit-mcp**](https://github.com/acamolese/gtm-audit-mcp) | Python | Stdio | 12 | Read-Only | Static AST Linting |
| [**burhan29ee/google-analytics-gtm-mcp**](https://github.com/burhan29ee/google-analytics-gtm-mcp) | TypeScript | Stdio | 28 | Workspace Drafts | GA4 Measurement |

---

## 1. Client-side web container operations

*27 projects. MCP servers and agent skills executing client-side Google Tag Manager web container operations, entity CRUD, and workspace synchronization.*

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

### Lightweight local stdio container inspection

*8 projects. Inspect container configurations locally via stdio transports in Claude Desktop, Cursor, and Windsurf without cloud proxies.*

| Project | What it does |
|---|---|
| [**VasthavM/google-tag-manager-mcp**](https://github.com/VasthavM/google-tag-manager-mcp) | Provides clean multi-workspace branching, snapshot comparisons, and change staging for collaborative GTM development. |
| [**jinchliu/google-tag-manager-mcp**](https://github.com/jinchliu/google-tag-manager-mcp) | Enables local container inspection over stdio with Google Cloud Application Default Credentials authentication. |
| [**jinchliu/tagmanager-mcp**](https://github.com/jinchliu/tagmanager-mcp) | Resolves Windows stdio pipe deadlocks and provides local Application Default Credentials authentication for container inspection. |
| [**brynj-digital/gtm-mcp-server**](https://github.com/brynj-digital/gtm-mcp-server) | Implements self-hosted GTM container inspection tools tailored for agency analytics workflows. |
| [**laiskickow/gtm-mcp-server**](https://github.com/laiskickow/gtm-mcp-server) | Provides local stdio tools for inspecting and auditing web container triggers and variables. |
| [**techdeveloper-org/mcp-gtm**](https://github.com/techdeveloper-org/mcp-gtm) | Enables natural language querying of GTM container assets and tag firing rules. |
| [**Gangas-Digital/mcp-google-tag-manager**](https://github.com/Gangas-Digital/mcp-google-tag-manager) | Provides agency container management tools for exploring multi-client tracking setups. |
| [**K9Cloud/gtm-mcp**](https://github.com/K9Cloud/gtm-mcp) | Inspects container configurations and tag parameters across client accounts over local stdio. |

### Workspace branching, synchronization, and change staging

*1 project. Create, diff, synchronize, and resolve merge conflicts across multi-user workspaces before container publication.*

| Project | What it does |
|---|---|
| [**pouyanafisi/gtm-mcp**](https://github.com/pouyanafisi/gtm-mcp) | Provides an early 104-tool stdio server covering client-side workspace, tag, trigger, and variable management. |

### Custom JavaScript variable generation and ES5 AST validation

*1 project. Generate and lint ES5-compliant JavaScript functions to prevent GTM sandbox syntax execution crashes.*

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
| [**desdobroprod-eng/install-tags-10dobro**](https://github.com/desdobroprod-eng/install-tags-10dobro) | Automates tracking tag and container snippet installation across web applications with Claude Code skills. |

### Multi-account hierarchy browsing and container discovery

*6 projects. Navigate complex enterprise account hierarchies and discover active web containers across multiple Google organizations.*

| Project | What it does |
|---|---|
| [**CarC96/google-tag-manager-mcp**](https://github.com/CarC96/google-tag-manager-mcp) | Navigates enterprise account hierarchies and discovers active web containers across multiple Google organizations. |
| [**dhawalshah/google-tag-manager-mcp**](https://github.com/dhawalshah/google-tag-manager-mcp) | Connects Claude and LLM assistants to GTM API v2 across local stdio and remote HTTP endpoints. |
| [**noviq-ai/google-tagmanager-mcp**](https://github.com/noviq-ai/google-tagmanager-mcp) | Provides a Python FastMCP interface for navigating GTM accounts, container permissions, and folder hierarchies. |
| [**beuch26/webguru-gtm-mcp**](https://github.com/beuch26/webguru-gtm-mcp) | Delivers a French-localized MCP server for Google Tag Manager container browsing in Claude Desktop and Claude Code. |
| [**Dayuse-Labs/gtm-mcp**](https://github.com/Dayuse-Labs/gtm-mcp) | Provides a remote TypeScript MCP server enabling AI agents to read and modify enterprise GTM web containers. |
| [**sidiio/mcp-gtm**](https://github.com/sidiio/mcp-gtm) | Connects Claude.ai and Cursor to Google Tag Manager containers via OAuth2 authentication. |

## 2. Server-side GTM and edge infrastructure

*9 projects. MCP servers and edge tools configuring server-side GTM containers, Cloudflare Workers, Cloud Run, and event transformations.*

### Hosted edge proxy and managed Cloudflare Worker endpoints

*3 projects. Route server-side GTM HTTP traffic via managed Cloudflare Workers with hosted OAuth proxies to eliminate GCP setup.*

| Project | What it does |
|---|---|
| [**stape-io/google-tag-manager-mcp-server**](https://github.com/stape-io/google-tag-manager-mcp-server) | Deploys a Cloudflare Worker edge proxy providing native Server-Side GTM client, transformation, and container management. |
| [**stape-io/stape-mcp-server**](https://github.com/stape-io/stape-mcp-server) | Integrates Stape Cloud hosting with GTM container management, provisioning sGTM custom domains and monitoring edge instances. |
| [**tijevlam/unboundai-google-tag-manager-mcp-server**](https://github.com/tijevlam/unboundai-google-tag-manager-mcp-server) | Deploys a TypeScript MCP server proxy connecting UnboundAI agents to GTM server-side containers. |

### Self-hosted containerized Docker and Cloud Run infrastructure

*2 projects. Deploy and monitor server-side GTM container images directly on private GCP Cloud Run clusters or Docker engines.*

| Project | What it does |
|---|---|
| [**metkamedia/gtm-mcp-server**](https://github.com/metkamedia/gtm-mcp-server) | Packages GTM MCP in Docker containers for deploying dedicated agent bridge services on private cloud infrastructure. |
| [**flockstore/platofrm-gtm-mcp**](https://github.com/flockstore/platofrm-gtm-mcp) | Serves as a stateless Go sidecar verifying Server-Side GTM hits and event routing without browser cookies. |

### Server-side HTTP client routing and request transformations

*2 projects. Parse incoming webhook payloads, map custom client claims, and strip query parameters inside server containers.*

| Project | What it does |
|---|---|
| [**samarthanalytics-sj/samarth-analytics-mcp**](https://github.com/samarthanalytics-sj/samarth-analytics-mcp) | Audits European Economic Area Consent Mode v2 parameters and validates tag trigger reachability queues. |
| [**bintangazhari/gtm-mcp-server**](https://github.com/bintangazhari/gtm-mcp-server) | Implements a self-hosted JavaScript MCP server for routing server-side container events and webhook endpoints. |

### Server-side attribution event forwarding and ClickHouse warehousing

*1 project. Extract server-side event payloads and stream them into high-performance analytical ClickHouse databases.*

| Project | What it does |
|---|---|
| [**adpage-dev/google-tag-manager-mcp-server**](https://github.com/adpage-dev/google-tag-manager-mcp-server) | Bridges server-side container configurations to AdPage attribution services and conversion APIs. |

### Server-side operational rule enforcement and Stape pitfall auditing

*1 project. Audit server-side container setups against Stape operational best practices, cookie lifetimes, and edge pitfalls.*

| Project | What it does |
|---|---|
| [**tmnh83/gtm-tracking-skill**](https://github.com/tmnh83/gtm-tracking-skill) | Provides a Claude skill cataloging best practices and architectural pitfalls for server-side GTM and Meta CAPI setups. |

## 3. Operational safety, mutation gates, and quota control

*7 projects. Safety middleware and verification gates preventing quota exhaustion, trapping silent compiler errors, and securing production mutations.*

### Proactive request rate-pacing and 0.25 QPS quota protection

*1 project. Enforce request serialization queues with 4.2-second pauses to guarantee agent operations never trigger Google 429 quota exhaustion.*

| Project | What it does |
|---|---|
| [**A1-x-Tech/mcp-google-tagmanager**](https://github.com/A1-x-Tech/mcp-google-tagmanager) | Implements a singleton serialized Promise queue with 4.2-second pacing to prevent 0.25 QPS quota crashes during container operations. |

### Multi-tiered permission gates and cryptographic MRTR verification

*1 project. Enforce read/write/destructive privilege tiers and require single-use cryptographic tokens before executing destructive mutations.*

| Project | What it does |
|---|---|
| [**kb223/gtm-ga4-mcp**](https://github.com/kb223/gtm-ga4-mcp) | Enforces Model-Requested Two-Phase Review (MRTR) using cryptographic SHA-256 tokens to prevent unverified container releases. |

### Enterprise IAM service-account isolation and write-gated authentication

*2 projects. Connect via air-gapped Google Cloud Service Account JSON credentials with write operations disabled by default.*

| Project | What it does |
|---|---|
| [**KUHL-HQ/gtm-mcp**](https://github.com/KUHL-HQ/gtm-mcp) | Provides an air-gapped local Node.js stdio server using direct Google Cloud Service Account JSON keys without cloud telemetry. |
| [**thesyedyahya/gtm-mcp**](https://github.com/thesyedyahya/gtm-mcp) | Exposes 26 GTM API v2 tools over Python FastMCP authenticated via Google Cloud Service Account credentials. |

### Container rollback, tag state toggling, and version freezing

*2 projects. Revert breaking container releases, pause and resume individual tags, and freeze workspace versions.*

| Project | What it does |
|---|---|
| [**gustavomkt/mcp-tagmanager**](https://github.com/gustavomkt/mcp-tagmanager) | Provides Spanish-language container tools for auditing and pausing risky web container tags safely. |
| [**Insightful-Pipe/google-tag-manager-mcp-server**](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server) | Enables granular single-entity rollbacks to restore individual tags or variables without resetting entire workspaces. |

### Localized read-only guardrails and human-in-the-loop audit gates

*1 project. Enforce read-only container inspection modes by default with mandatory human confirmation for regional production changes.*

| Project | What it does |
|---|---|
| [**lucasbueno-live/gtm-mcp-liveseo**](https://github.com/lucasbueno-live/gtm-mcp-liveseo) | Delivers a localized, read-only GTM container exploration tool for Claude to prevent accidental production mutations. |

## 4. Testing, QA, dataLayer assertions, and CDN lag bypass

*5 projects. Validation frameworks, WebSocket preview interceptors, and headless browser journeys testing tag firing and bypassing CDN cache lag.*

### Tag Assistant Preview automation and WebSocket debugging

*1 project. Connect directly to Google Tag Assistant Preview sessions via WebSockets to test draft container configurations without waiting for CDN propagation.*

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
| [**haiqigeng/1-web-analyst-mcp-setup**](https://github.com/haiqigeng/1-web-analyst-mcp-setup) | Provides PowerShell and shell setup skills for safely connecting and testing web analytics MCP servers across Codex and Claude. |

## 5. Governance, compliance, auditing, and linting

*6 projects. Auditing engines, Consent Mode v2 validators, dependency graph traversals, and container health linters.*

### Consent Mode v2 policy enforcement and privacy gate auditing

*1 project. Scan container tags for required consent states, verify Default Consent signals, and detect unconsented tracking tags.*

| Project | What it does |
|---|---|
| [**acamolese/gtm-audit-mcp**](https://github.com/acamolese/gtm-audit-mcp) | Conducts static AST linting to detect orphan variables, unused triggers, and deprecated Universal Analytics tags. |

### Container inventory export and Google Sheets automated diffing

*2 projects. Extract complete container entity inventories, diff versions against production, and sync findings into Google Sheets with AI summaries.*

| Project | What it does |
|---|---|
| [**ajaxbarcelonacruyff/gtm-auditor**](https://github.com/ajaxbarcelonacruyff/gtm-auditor) | Applies static heuristic audit rules to detect container bloat, unattached triggers, and redundant tags. |
| [**creativedesignseo/google-tag-manager-mcp**](https://github.com/creativedesignseo/google-tag-manager-mcp) | Audits web container health and exports tag catalogs for compliance verification. |

### Static container dependency analysis and orphan variable linting

*1 project. Traverse the entity graph in read-only mode to find unreferenced variables, unreachable trigger groups, and circular references.*

| Project | What it does |
|---|---|
| [**tyssejc/gallium**](https://github.com/tyssejc/gallium) | Provides a read-only container analysis CLI and Claude skill for mapping tag dependencies and container complexity. |

### Web performance profiling and tracking hygiene monitoring

*1 project. Evaluate tag execution overhead, measure impact on Core Web Vitals, and identify bloated third-party scripts.*

| Project | What it does |
|---|---|
| [**lpecom/webaudit-mcp**](https://github.com/lpecom/webaudit-mcp) | Audits live web pages for tracking hygiene, duplicate pixels, and GTM container loading performance. |

### Autonomous container health auditing and multi-rule diagnostics

*1 project. Execute autonomous multi-check diagnostic routines to evaluate container cleanliness, naming conventions, and structural hygiene.*

| Project | What it does |
|---|---|
| [**wonyoungseong/gtmAgent**](https://github.com/wonyoungseong/gtmAgent) | Operates an autonomous Claude Code agent skill that inspects, cleans, and heals container configuration drift. |

## 6. Hybrid analytics and cross-platform tag synchronization

*25 projects. Cross-platform orchestrators unifying GTM with GA4 event validation, Google Ads conversion tracking, and marketing data stacks.*

### Dual-platform GTM and GA4 configuration and event parameter validation

*5 projects. Synchronize GTM tag parameters with GA4 event definitions, verify custom dimensions, and automate tracking setups across both platforms.*

| Project | What it does |
|---|---|
| [**burhan29ee/google-analytics-gtm-mcp**](https://github.com/burhan29ee/google-analytics-gtm-mcp) | Synchronizes GTM container event tags with downstream GA4 Measurement Protocol custom dimensions and conversion events. |
| [**mharnett/mcp-gtm-ga4**](https://github.com/mharnett/mcp-gtm-ga4) | Manages Google Tag Manager web and server container configurations. |
| [**CreativeMetrics/gtm-ga4-mcp**](https://github.com/CreativeMetrics/gtm-ga4-mcp) | Coordinates tag creation in GTM with corresponding event parameter registration in Google Analytics 4 properties. |
| [**Juce-me/ga4-gtm-config-mcp**](https://github.com/Juce-me/ga4-gtm-config-mcp) | Automates end-to-end event tracking pipelines by creating GTM web tags and verifying GA4 property schemas simultaneously. |
| [**tiojimbo/agent-gtm-ga4**](https://github.com/tiojimbo/agent-gtm-ga4) | Orchestrates synchronized configuration workflows across GTM containers and Google Analytics 4 properties. |

### Google Ads conversion tracking and enhanced conversion setup

*2 projects. Automate Google Ads conversion linker tags, map enhanced conversion user data variables, and verify conversion triggers.*

| Project | What it does |
|---|---|
| [**bryangoncalvespro-hub/google-tag-manager-mcp-server**](https://github.com/bryangoncalvespro-hub/google-tag-manager-mcp-server) | Exposes 15 GTM API v2 tools tailored for Google Ads conversion tracking and tag deployment. |
| [**Organized-AI/openclaw-tracking-setup**](https://github.com/Organized-AI/openclaw-tracking-setup) | Deploys autonomous builder plugins for end-to-end tracking infrastructure, conversion tags, and Ads verification. |

### Full Google marketing stack unified orchestration

*14 projects. Unify GTM container automation with Google Analytics 4, Google Search Console, Google Ads, and Merchant Center in a single multi-tool MCP environment.*

| Project | What it does |
|---|---|
| [**generalist-club/google-marketing-stack-mcp**](https://github.com/generalist-club/google-marketing-stack-mcp) | Combines GTM container management with GA4, Search Console, and Google Sheets in a unified JavaScript MCP server. |
| [**fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM**](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM) | Orchestrates full-funnel tag management across Google Ads, GA4, Search Console, and GTM from a single MCP interface. |
| [**marwa-mrwan/google-clarity-mcp-codex**](https://github.com/marwa-mrwan/google-clarity-mcp-codex) | Exposes 213 tools connecting GTM, GA4, Google Ads, Search Console, and Microsoft Clarity for end-to-end marketing ops. |
| [**andylackie/google-marketing-mcp-servers**](https://github.com/andylackie/google-marketing-mcp-servers) | Provides modular TypeScript MCP servers unifying GTM container deployment with GA4 and Search Console reporting. |
| [**archievi/climbpast-mcp**](https://github.com/archievi/climbpast-mcp) | Connects Claude and ChatGPT to GTM, GA4, and Search Console with opt-in write gates for container publication. |
| [**skiddgoddamn/google-seo-mcp**](https://github.com/skiddgoddamn/google-seo-mcp) | Integrates GTM container tagging with Google Search Console indexing and GA4 measurement tools. |
| [**jabeer4148-ops/google-measurement-mcp**](https://github.com/jabeer4148-ops/google-measurement-mcp) | Exposes an integrated Google measurement stack allowing AI agents to manage GTM tags and query GA4 analytics. |
| [**bypixels/SEO-MCP-PRO**](https://github.com/bypixels/SEO-MCP-PRO) | Delivers a TypeScript MCP server coordinating GTM tag auditing, Search Console analytics, and indexing status. |
| [**advisorppc-org/advisorppc-plugin**](https://github.com/advisorppc-org/advisorppc-plugin) | Audits and manages Google Ads conversion actions, GA4 properties, and GTM container tags via browser OAuth. |
| [**dgtlsunrise/dgtl-connector**](https://github.com/dgtlsunrise/dgtl-connector) | Enables local Cursor and Claude workflows across GTM containers, Search Console properties, and GA4 datasets. |
| [**BenJohnston429/gmcp**](https://github.com/BenJohnston429/gmcp) | Provides a self-hosted marketing MCP server bridging GTM container updates with Google Ads and analytics reporting. |
| [**AINative-Studio/ainative-gtm-mcp**](https://github.com/AINative-Studio/ainative-gtm-mcp) | Unifies Google Ads, Analytics, and GTM into a cohesive MCP interface for autonomous marketing agents. |
| [**oqva-digital/oqva-marketing-mcp**](https://github.com/oqva-digital/oqva-marketing-mcp) | Connects Claude to GTM container assets, Google Ads performance metrics, and Meta marketing campaigns. |
| [**RoyAzran/mcp-ads**](https://github.com/RoyAzran/mcp-ads) | Integrates GTM container tag triggers with Google Ads and Meta Ads conversion tracking in a Python MCP runtime. |

### Multi-engine search and performance marketing synchronization

*1 project. Connect GTM container event pipelines with Yandex Direct, Yandex Metrika, and international webmaster tools.*

| Project | What it does |
|---|---|
| [**VKirill/ohmy-seo**](https://github.com/VKirill/ohmy-seo) | Coordinates GTM container tagging with Russian and international ad platforms, including Yandex Direct and Google Ads. |

### Analytics data warehouse staging, dbt modeling, and BI dashboarding

*1 project. Stream GTM events into analytical warehouses, orchestrate dbt staging models, and build Looker Studio dashboards.*

| Project | What it does |
|---|---|
| [**hatlem/admirate-skills**](https://github.com/hatlem/admirate-skills) | Provides Claude Code skills for automating GTM container edits, GA4 setup, and Looker Studio dashboards. |

### Agency call-tracking and third-party attribution integration

*2 projects. Configure multi-platform agency tracking stacks combining WhatConverts, GA4 Admin, and GTM web containers.*

| Project | What it does |
|---|---|
| [**jayweezy247/tracking-stack-mcp**](https://github.com/jayweezy247/tracking-stack-mcp) | Configures agency tracking stacks across WhatConverts, GA4 Admin, and GTM under a create-only dry-run safety contract. |
| [**webanalyticsprobd-maker/tracking-mcp-server**](https://github.com/webanalyticsprobd-maker/tracking-mcp-server) | Validates GTM dataLayer schemas and transmits server-side events via GA4 Measurement Protocol and Meta CAPI. |

## 7. Developer tools, embedded UIs, and caching

*4 projects. Daemons, multi-service plugin bundles, ecosystem registries, and developer tooling streamlining GTM engineering workflows.*

### High-throughput multi-tenant daemon architectures and SSE streaming

*1 project. Run scalable Starlette and SSE HTTP daemons for cloud-hosted GTM container operations with concurrent client sessions.*

| Project | What it does |
|---|---|
| [**magdamarketinghackers/MCP-GTM**](https://github.com/magdamarketinghackers/MCP-GTM) | Runs a 38-tool Starlette and FastMCP server with custom caching for high-throughput container querying. |

### Curated agent plugin bundles and cross-service automation packs

*2 projects. Deploy opinionated Claude Code plugin packs that bundle GTM automation skills with Google Cloud and browser tooling.*

| Project | What it does |
|---|---|
| [**henkisdabro/wookstar-claude-plugins**](https://github.com/henkisdabro/wookstar-claude-plugins) | Packages 33 opinionated Claude Code plugins including specialized skills for GTM container inspection and GA4 workflows. |
| [**N-O-P-E/nope-marketplace**](https://github.com/N-O-P-E/nope-marketplace) | Automates Google Cloud infrastructure setup and GTM workflows via headless Chrome browser automation. |

### Self-hosted agency deployment wrappers and environment presets

*1 project. Provide pre-configured, shareable GTM MCP server wrappers tailored for agency multi-client deployments.*

| Project | What it does |
|---|---|
| [**was-member-keramat/was-gtm-mcp**](https://github.com/was-member-keramat/was-gtm-mcp) | Provides a shareable 19-tool JavaScript GTM MCP server pre-configured for agency client deployments. |

## 8. Experimental and concept scaffolds

*12 projects. Quarantine domain isolating early-stage prototypes, unverified forks, alternative tag engines, and non-analytics acronym collisions.*

### Early-stage experimental container prototypes and unverified servers

*11 projects. Explore early-stage, pre-alpha MCP servers with minimal commit history or unverified tool schemas.*

| Project | What it does |
|---|---|
| [**shakibmolla/gtm-mcp**](https://github.com/shakibmolla/gtm-mcp) | Implements a lightweight local Python MCP server for exploring GTM web container tags. |
| [**ambit1977/GTM-MCP**](https://github.com/ambit1977/GTM-MCP) | Provides an early JavaScript prototype connecting AI clients to Google Tag Manager container endpoints. |
| [**adtechnacity/gtm-mcp**](https://github.com/adtechnacity/gtm-mcp) | Explores Python-based GTM container querying and tag automation for analytics developers. |
| [**Synter-Media-AI/google-tag-manager-agent**](https://github.com/Synter-Media-AI/google-tag-manager-agent) | Explores managing GTM containers and tags through natural language across Claude Desktop, Cursor, and Amp. |
| [**neep305/mcp-for-gtm**](https://github.com/neep305/mcp-for-gtm) | Connects Claude to Google Tag Manager API v2 for natural language workspace inspection. |
| [**yonegobv/gtm-mcp**](https://github.com/yonegobv/gtm-mcp) | Provides a TypeScript MCP interface for exploring container entities and testing agent interactions. |
| [**baptlagae-hue/gtm-mcp**](https://github.com/baptlagae-hue/gtm-mcp) | Implements a French-documented local Python MCP server for testing conversational GTM management. |
| [**connorstearns/mcp-gtm**](https://github.com/connorstearns/mcp-gtm) | Packages a standalone 44KB Python application providing full-featured GTM container inspection and tag creation. |
| [**zaaaato/gtm-mcp**](https://github.com/zaaaato/gtm-mcp) | Provides a TypeScript MCP server prototype allowing LLM clients to read and modify GTM container tags. |
| [**b-buller/gtm-mcp**](https://github.com/b-buller/gtm-mcp) | Enables LLMs to query and navigate Google Tag Manager workspaces through the Model Context Protocol. |
| [**ErikTMA/gtm-mcp**](https://github.com/ErikTMA/gtm-mcp) | Provides an early Python MCP implementation enabling Claude to interact with GTM container endpoints. |

### Framework-scaffolded and auto-generated MCP wrappers

*1 project. Study auto-generated MCP server wrappers synthesized by MCP generation platforms without manual domain tuning.*

| Project | What it does |
|---|---|
| [**ag2-mcp-servers/tag-manager-api**](https://github.com/ag2-mcp-servers/tag-manager-api) | Packages an auto-generated Python MCP wrapper for Google Tag Manager API endpoints via mcp.ag2.ai. |

## Resources

Authoritative external documentation, specifications, and community resources for Google Tag Manager and the Model Context Protocol.

- [Google Tag Manager API v2 Official Reference](https://developers.google.com/tag-platform/tag-manager/api/v2) - Upstream Google REST API documentation for accounts, containers, workspaces, tags, triggers, and variables.
- [Model Context Protocol Specification](https://modelcontextprotocol.io) - Official open standard specification for client-server LLM tool interoperability.
- [GTM Server-Side Edge Architecture Guide](https://developers.google.com/tag-platform/tag-manager/server-side) - Cloud Run and Cloudflare Worker provisioning guidelines for sGTM edge deployments.
- [Tag Assistant Preview Protocol Guide](https://support.google.com/tagmanager/answer/6107056) - Technical details on GTM's live WebSocket debugging channel.
- [EEA Consent Mode v2 Guidelines](https://developers.google.com/tag-platform/security/guides/consent) - Mandatory consent parameter contracts (`ad_storage`, `analytics_storage`, `ad_user_data`, `ad_personalization`).

---

## Reference

Technical glossary and architectural primitives defining GTM API limitations, quotas, and protocol contracts.

- **0.25 QPS Rate Limit:** Google Tag Manager API enforces strict rate pacing limits on container mutations (~1 request every 4 seconds) to protect container compiler pipelines. Servers without request serialization risk HTTP 429 quota exhaustion.
- **CDN Propagation Lag:** Publishing a GTM container invalidates Google edge caches globally, taking between 30 and 180 seconds to reflect on `googletagmanager.com/gtm.js`. Automated QA tools must account for cache propagation delays.
- **Model-Requested Two-Phase Review (MRTR):** High-security operational protocol where mutating or publishing operations generate cryptographic tokens and diff summaries, requiring human confirmation before execution.
- **Server-Side Transformations:** Specialized sGTM sandboxed JavaScript modules executing on edge instances to scrub PII, hash user identifiers, and route event payloads to downstream platforms.
- **ES5 Sandboxed Execution:** GTM web container tags execute within a restricted ECMAScript 5 sandbox. Modern ES6+ syntax causes silent container execution crashes.
