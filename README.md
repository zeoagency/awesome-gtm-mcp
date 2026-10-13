# Awesome Google Tag Manager (GTM) MCP [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of Google Tag Manager MCP servers, CLIs, and SDKs.

**87 projects** for managing, auditing, testing, or integrating Google Tag Manager. Multi-product projects are listed for their GTM features.

## Quick comparison

| Tool type | GTM use |
|---|---|
| [MCP servers](#mcp-servers-65) | Connect AI assistants to GTM management, auditing, and testing tools. |
| [CLIs](#clis-11) | Manage, export, compare, or generate GTM configurations from the terminal. |
| [Tag Manager API SDKs](#tag-manager-api-sdks-7) | Build applications that manage GTM resources through the Google API. |
| [Website integration SDKs](#website-integration-sdks-4) | Load GTM containers and send dataLayer events from websites. |

## Contents

- [MCP servers (65)](#mcp-servers-65)
- [CLIs (11)](#clis-11)
- [Tag Manager API SDKs (7)](#tag-manager-api-sdks-7)
- [Website integration SDKs (4)](#website-integration-sdks-4)

## MCP servers (65)

*65 projects. MCP implementations and hosted services with GTM management, auditing, or testing tools.*

| Project | What it does |
|---|---|
| [**A1-x-Tech/mcp-google-tagmanager**](https://github.com/A1-x-Tech/mcp-google-tagmanager) | Manages GTM accounts and container entities through TypeScript MCP tools with serialized API calls and configurable retry handling. |
| [**acamolese/gtm-audit-mcp**](https://github.com/acamolese/gtm-audit-mcp) | Audits GTM workspace snapshots for unused entities and tracking issues. |
| [**adtechnacity/gtm-mcp**](https://github.com/adtechnacity/gtm-mcp) | Manages GTM entities with batch tag edits and firing-option tools. |
| [**ag2-mcp-servers/tag-manager-api**](https://github.com/ag2-mcp-servers/tag-manager-api) | Exposes generated Google Tag Manager API endpoints through an MCP proxy. |
| [**AINative-Studio/ainative-gtm-mcp**](https://github.com/AINative-Studio/ainative-gtm-mcp) | Reads and edits GTM accounts and workspace entities through MCP tools. |
| [**AlexStansfield/gtm-mcp-server**](https://github.com/AlexStansfield/gtm-mcp-server) | Reads and updates GTM tags, triggers, variables, workspaces, and versions through a TypeScript MCP server. |
| [**ambit1977/GTM-MCP**](https://github.com/ambit1977/GTM-MCP) | Lists and edits GTM tags, triggers, variables, and container versions. |
| [**andylackie/google-marketing-mcp-servers**](https://github.com/andylackie/google-marketing-mcp-servers) | Provides a dedicated TypeScript GTM MCP server for managing container configurations. |
| [**archievi/climbpast-mcp**](https://github.com/archievi/climbpast-mcp) | Provides a hosted MCP server for inspecting and editing GTM workspaces, tags, triggers, and container releases. |
| [**b-buller/gtm-mcp**](https://github.com/b-buller/gtm-mcp) | Builds grouped GTM MCP tools from Google's live API discovery document. |
| [**baptlagae-hue/gtm-mcp**](https://github.com/baptlagae-hue/gtm-mcp) | Reads and edits GTM workspaces while enforcing a workspace naming prefix. |
| [**beuch26/webguru-gtm-mcp**](https://github.com/beuch26/webguru-gtm-mcp) | Reads GTM workspace entities and creates Ads conversion tags using project credentials stored in Supabase. |
| [**bintangazhari/gtm-mcp-server**](https://github.com/bintangazhari/gtm-mcp-server) | Lists and edits GTM tags, triggers, and variables and creates or publishes container versions through a JavaScript MCP server. |
| [**bryangoncalvespro-hub/google-tag-manager-mcp-server**](https://github.com/bryangoncalvespro-hub/google-tag-manager-mcp-server) | Lists and edits GTM tags and triggers and publishes container versions. |
| [**brynj-digital/gtm-mcp-server**](https://github.com/brynj-digital/gtm-mcp-server) | Inspects GTM accounts, containers, workspaces, tags, and versions through a read-only Python MCP server. |
| [**burhan29ee/google-analytics-gtm-mcp**](https://github.com/burhan29ee/google-analytics-gtm-mcp) | Manages GTM accounts, containers, workspaces, tags, triggers, and variables through Python MCP tools. |
| [**bypixels/SEO-MCP-PRO**](https://github.com/bypixels/SEO-MCP-PRO) | Manages GTM accounts, tags, triggers, variables, and versions through MCP tools. |
| [**CarC96/google-tag-manager-mcp**](https://github.com/CarC96/google-tag-manager-mcp) | Reads GTM account and container details and edits workspace tags, triggers, and variables through Python MCP tools. |
| [**connorstearns/mcp-gtm**](https://github.com/connorstearns/mcp-gtm) | Inspects and edits GTM entities with write gates and bulk import helpers. |
| [**creativedesignseo/google-tag-manager-mcp**](https://github.com/creativedesignseo/google-tag-manager-mcp) | Lists and manages GTM container entities through a JavaScript MCP server. |
| [**CreativeMetrics/gtm-ga4-mcp**](https://github.com/CreativeMetrics/gtm-ga4-mcp) | Manages GTM entities and builds tags from detected tracking integrations. |
| [**Dayuse-Labs/gtm-mcp**](https://github.com/Dayuse-Labs/gtm-mcp) | Stages and applies reviewable GTM changesets across web and server containers, with drift checks and rollback data. |
| [**dgtlsunrise/dgtl-connector**](https://github.com/dgtlsunrise/dgtl-connector) | Reads GTM configurations and previews confirmed changes through MCP and HTTP interfaces. |
| [**dhawalshah/google-tag-manager-mcp**](https://github.com/dhawalshah/google-tag-manager-mcp) | Manages GTM API resources through Python MCP tools with local or remote authentication and destructive-action confirmation. |
| [**ErikTMA/gtm-mcp**](https://github.com/ErikTMA/gtm-mcp) | Manages GTM entities with account restrictions and parameter validation. |
| [**fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM**](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM) | Provides a Python GTM MCP server for managing accounts, containers, workspace entities, and versions. |
| [**generalist-club/google-marketing-stack-mcp**](https://github.com/generalist-club/google-marketing-stack-mcp) | Reads GTM accounts, containers, workspaces, tags, triggers, and variables through MCP tools. |
| [**gustavomkt/mcp-tagmanager**](https://github.com/gustavomkt/mcp-tagmanager) | Inspects and edits GTM entities, pauses tags, and publishes versions through Python MCP tools with explicit write confirmation. |
| [**hedayetulislamhadi/genius-gtm-mcp**](https://github.com/hedayetulislamhadi/genius-gtm-mcp) | Manages GTM containers, tags, triggers, variables, and versions through JavaScript MCP tools. |
| [**Insightful-Pipe/google-tag-manager-mcp-server**](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server) | Provides hosted MCP tools to read and update GTM accounts, workspace entities, and container versions. |
| [**jabeer4148-ops/google-measurement-mcp**](https://github.com/jabeer4148-ops/google-measurement-mcp) | Reads and edits GTM workspaces with preview and review tools. |
| [**jamestomasino/mcp-gtm**](https://github.com/jamestomasino/mcp-gtm) | Inspects, edits, audits, and exports GTM container JSON files offline through MCP, including server-container entities. |
| [**jayweezy247/tracking-stack-mcp**](https://github.com/jayweezy247/tracking-stack-mcp) | Creates GTM tracking entities through MCP tools with dry-run and create-only checks. |
| [**jinchliu/google-tag-manager-mcp**](https://github.com/jinchliu/google-tag-manager-mcp) | Manages GTM resources using discovery-driven MCP tools, with schema inspection, workspace synchronization, and confirmation gates. |
| [**jinchliu/tagmanager-mcp**](https://github.com/jinchliu/tagmanager-mcp) | Reads and edits GTM tags, triggers, variables, and versions through Python MCP tools with ADC authentication and quota throttling. |
| [**Juce-me/ga4-gtm-config-mcp**](https://github.com/Juce-me/ga4-gtm-config-mcp) | Plans and applies GTM workspace changes, including entity upserts and container publication. |
| [**K9Cloud/gtm-mcp**](https://github.com/K9Cloud/gtm-mcp) | Manages GTM containers by domain or public ID, with entity edits, version publishing, and local backup operations. |
| [**kb223/gtm-ga4-mcp**](https://github.com/kb223/gtm-ga4-mcp) | Reads and edits GTM resources through Python MCP tools with privilege tiers and one-use deletion or publication confirmations. |
| [**laiskickow/gtm-mcp-server**](https://github.com/laiskickow/gtm-mcp-server) | Manages GTM web and server-container entities through TypeScript MCP tools, including templates, clients, transformations, and conventions. |
| [**lpecom/webaudit-mcp**](https://github.com/lpecom/webaudit-mcp) | Detects duplicate GTM installations in page HTML through MCP tools. |
| [**lucasbueno-live/gtm-mcp-liveseo**](https://github.com/lucasbueno-live/gtm-mcp-liveseo) | Manages and audits GTM containers through a local Node.js MCP server with browser OAuth and read-only defaults. |
| [**magdamarketinghackers/MCP-GTM**](https://github.com/magdamarketinghackers/MCP-GTM) | Reads and edits GTM entities through a multi-user HTTP MCP server. |
| [**marwa-mrwan/google-clarity-mcp-codex**](https://github.com/marwa-mrwan/google-clarity-mcp-codex) | Reads and edits GTM configurations through MCP tools backed by the Tag Manager API v2. |
| [**mharnett/mcp-gtm-ga4**](https://github.com/mharnett/mcp-gtm-ga4) | Inspects and edits GTM configurations through MCP tools with optional write gates. |
| [**moonbirdai/puppeteer-plus-martech-mcp**](https://github.com/moonbirdai/puppeteer-plus-martech-mcp) | Inspects live GTM scripts and dataLayer values through a Puppeteer MCP server. |
| [**neep305/mcp-for-gtm**](https://github.com/neep305/mcp-for-gtm) | Manages GTM entities through Python MCP tools and reusable component templates. |
| [**noviq-ai/google-tagmanager-mcp**](https://github.com/noviq-ai/google-tagmanager-mcp) | Lists GTM accounts, containers, workspaces, tags, triggers, variables, and the live container version using Python MCP. |
| [**oqva-digital/oqva-marketing-mcp**](https://github.com/oqva-digital/oqva-marketing-mcp) | Calls GTM API v2 endpoints alongside other marketing services. |
| [**paolobietolini/gtm-mcp-server**](https://github.com/paolobietolini/gtm-mcp-server) | Manages GTM accounts, containers, workspaces, and server-container entities through a Go Streamable HTTP MCP server. |
| [**pouyanafisi/gtm-mcp**](https://github.com/pouyanafisi/gtm-mcp) | Manages GTM accounts, workspaces, tags, templates, server clients, and versions through a TypeScript MCP server. |
| [**rgellis/google-tag-manager-mcp**](https://github.com/rgellis/google-tag-manager-mcp) | Manages GTM API resources through Python FastMCP, with selectable tool groups and an optional read-only mode. |
| [**RoyAzran/mcp-ads**](https://github.com/RoyAzran/mcp-ads) | Manages GTM accounts, containers, workspace entities, and versions through Python MCP tools. |
| [**samarthanalytics-sj/samarth-analytics-mcp**](https://github.com/samarthanalytics-sj/samarth-analytics-mcp) | Manages and audits GTM web and server containers, with gated writes and website tracking checks. |
| [**skiddgoddamn/google-seo-mcp**](https://github.com/skiddgoddamn/google-seo-mcp) | Lists and creates GTM workspace tags through MCP tools. |
| [**stape-io/google-tag-manager-mcp-server**](https://github.com/stape-io/google-tag-manager-mcp-server) | Manages GTM web and server-container resources through hosted or local MCP servers and a reusable TypeScript core package. |
| [**stape-io/stape-mcp-server**](https://github.com/stape-io/stape-mcp-server) | Provides a hosted MCP service for server-side GTM hosting on Stape, including container lifecycle, domains, monitoring, and logs. |
| [**techdeveloper-org/mcp-gtm**](https://github.com/techdeveloper-org/mcp-gtm) | Reads and edits GTM container entities and versions through Python MCP tools with retry handling and rate limiting. |
| [**thesyedyahya/gtm-mcp**](https://github.com/thesyedyahya/gtm-mcp) | Inspects and manages GTM resources through Python FastMCP with service-account authentication and writes disabled by default. |
| [**tiojimbo/agent-gtm-ga4**](https://github.com/tiojimbo/agent-gtm-ga4) | Reads and edits GTM tags, triggers, variables, workspaces, and versions through MCP tools. |
| [**valentineffi/zenda-tag-manager-mcp**](https://github.com/valentineffi/zenda-tag-manager-mcp) | Manages GTM accounts, containers, workspace entities, and versions through a TypeScript stdio MCP server. |
| [**VasthavM/google-tag-manager-mcp**](https://github.com/VasthavM/google-tag-manager-mcp) | Manages GTM entities through a local Go stdio server with browser OAuth and confirmation for destructive operations. |
| [**VKirill/ohmy-seo**](https://github.com/VKirill/ohmy-seo) | Manages GTM configurations with concurrency checks and confirmation gates. |
| [**webanalyticsprobd-maker/tracking-mcp-server**](https://github.com/webanalyticsprobd-maker/tracking-mcp-server) | Validates dataLayer event payloads and generates GTM tracking snippets through MCP. |
| [**wonyoungseong/gtmAgent**](https://github.com/wonyoungseong/gtmAgent) | Manages GTM entities and exports configurations through a bundled MCP server. |
| [**zaaaato/gtm-mcp**](https://github.com/zaaaato/gtm-mcp) | Calls GTM API v2 through a generic authenticated MCP request tool. |

## CLIs (11)

*11 projects. Commands that manage, inspect, export, generate, or install GTM configurations.*

| Project | What it does |
|---|---|
| [**ajaxbarcelonacruyff/gtm-auditor**](https://github.com/ajaxbarcelonacruyff/gtm-auditor) | Exports GTM inventories and version differences to Google Sheets. |
| [**desdobroprod-eng/install-tags-10dobro — installer CLI**](https://github.com/desdobroprod-eng/install-tags-10dobro/blob/b166f68234f78b31efb2c1334179bf946e5d2bb1/scripts/install_tags.py) | Installs a shared GTM loader and noscript snippet into local HTML files, with backups and dry-run support. |
| [**dreamfoundryai/gtm-audit-skill — export CLI**](https://github.com/dreamfoundryai/gtm-audit-skill/blob/067aba018a37cea57c47057fad85f79dc4deb4d7/scripts/fetch_gtm.py) | Exports GTM tags, triggers, variables, and folders with a Python CLI. |
| [**EarthCraig/GTAG-Manager**](https://github.com/EarthCraig/GTAG-Manager) | Plans, applies, and publishes GTM tags, triggers, and variables from YAML specifications through a Python CLI. |
| [**eugene-bear/google-site-setup**](https://github.com/eugene-bear/google-site-setup) | Provides commands to provision and publish web GTM containers and create GA4 event tags and triggers. |
| [**lucianfialho/gmp-cli — GTM commands**](https://github.com/lucianfialho/gmp-cli/blob/main/src/commands/gtm.ts) | Provides read-only GTM inspection commands with JSON, table and CSV output. |
| [**owgit/gtm-skill — generator CLI**](https://github.com/owgit/gtm-skill/blob/2d7759195812654fe3b7215db50d7dc3a51b019d/scripts/generate-gtm-import.js) | Generates GTM container import JSON with GA4 tags, click triggers, and variables using a standalone Node.js command. |
| [**owntag/gtm-cli**](https://github.com/owntag/gtm-cli) | Provides terminal commands to manage GTM resources with OAuth or service-account authentication and JSON output. |
| [**ToroSachi/tagops**](https://github.com/ToroSachi/tagops) | Audits, snapshots, diffs, deploys, and restores GTM container configurations through a TypeScript CLI and MCP tools. |
| [**tyssejc/gallium**](https://github.com/tyssejc/gallium) | Inspects GTM container versions and dependencies with a read-only CLI. |
| [**vaidik/gtm-tools**](https://github.com/vaidik/gtm-tools) | Provides commands to list, compare, copy and reset GTM workspace tags, triggers and variables. |

## Tag Manager API SDKs (7)

*7 projects. Official Google clients with dedicated Tag Manager v2 interfaces.*

| Project | What it does |
|---|---|
| [**Google API Go Client — Tag Manager v2**](https://pkg.go.dev/google.golang.org/api/tagmanager/v2) | Provides an official Go Tag Manager v2 client for managing GTM resources. |
| [**Google API Java Client — Tag Manager v2**](https://github.com/googleapis/google-api-java-client-services/tree/main/clients/google-api-services-tagmanager/v2) | Provides an official Java Tag Manager v2 client for managing GTM resources. |
| [**Google API Node.js Client — Tag Manager v2**](https://github.com/googleapis/google-api-nodejs-client/tree/main/src/apis/tagmanager) | Provides an official Node.js and TypeScript Tag Manager v2 client for managing GTM resources. |
| [**Google API PHP Client Services — TagManager**](https://github.com/googleapis/google-api-php-client-services/blob/main/src/TagManager.php) | Provides official PHP Tag Manager v2 service and resource classes for managing GTM resources. |
| [**Google API Python Client — Tag Manager v2**](https://googleapis.github.io/google-api-python-client/docs/dyn/tagmanager_v2.html) | Provides an official Python Tag Manager v2 client for managing GTM resources. |
| [**google-apis-tagmanager_v2**](https://github.com/googleapis/google-api-ruby-client/tree/main/generated/google-apis-tagmanager_v2) | Provides an official Ruby Tag Manager v2 client for managing GTM resources. |
| [**Google.Apis.TagManager.v2**](https://github.com/googleapis/google-api-dotnet-client/tree/main/Src/Generated/Google.Apis.TagManager.v2) | Provides an official .NET Tag Manager v2 client for managing GTM resources. |

## Website integration SDKs (4)

*4 projects. Libraries that load GTM and send dataLayer events; these do not manage accounts or containers through the API.*

| Project | What it does |
|---|---|
| [**@gtm-support/core**](https://github.com/gtm-support/core) | Loads GTM containers and sends data-layer events from framework-independent TypeScript applications. |
| [**@gtm-support/vue-gtm**](https://github.com/gtm-support/vue-gtm) | Loads GTM containers and sends events and Vue Router navigation updates from Vue 3 applications. |
| [**@next/third-parties — Google Tag Manager**](https://nextjs.org/docs/app/guides/third-party-libraries#google-tag-manager) | Loads GTM containers and sends data-layer events through Next.js components and helpers. |
| [**angular-google-tag-manager**](https://github.com/mzuccaroli/angular-google-tag-manager) | Loads GTM containers and pushes data-layer events from Angular applications. |
