# Insightful-Pipe/google-tag-manager-mcp-server

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server) · [Machine-readable inventory](../data/mcps/insightful-pipe--google-tag-manager-mcp-server.json)

**0 extracted tools · 61 schema gaps.** Excluded: Private hosted documentation lists actions but does not verify registered MCP names or provide full input schemas.

Snapshot: 2026-10-13 · [a4dd29340348](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/tree/a4dd293403487ea280eebc7e6839c58a7caa82f7) · Method: official-docs.

Exposure: Official docs: 61 possible actions (38 read, 23 write), individually configured per connected account; Read Only permits read actions only; destructive actions are off by default; User role receives enabled reads on granted accounts. Single-item lookups are omitted from the action list shown to agents but documented as callable by name.

## Limits

- No MCP registration, schemas, handlers or executable server code in supplied public checkout (README, LICENSE and images only).
- Unauthenticated POST tools/list returned HTTP 401 invalid_token; saved response is not a tool catalog. No credentials used and no GTM operations invoked.
- Official full action list provides descriptions/examples but no complete JSON input schemas; none of the 61 actions can be included as a verified-schema tool. Exact runtime descriptions, auxiliary tools, output schemas and annotations cannot be verified.
- Official docs say delete_workspace is expected to be refused because the connector does not request the required Google permission. No handler inspection possible.
- Public OpenAPI is for website discovery/content/contact routes, not hosted MCP tool schemas.
- README revision is frozen by commit; hosted service version is unknown.

## Unavailable schemas

<a id="tool-get_account-896a62e4"></a>

- **get_account** — Fetch a single GTM account by id Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L76-L76).

<a id="tool-get_accounts-501e6b81"></a>

- **get_accounts** — List all GTM accounts the authenticated user can access Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L77-L77).

<a id="tool-get_built_in_variables-f187496a"></a>

- **get_built_in_variables** — List built-in variables enabled in the workspace Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L78-L78).

<a id="tool-get_client-2d47e9a6"></a>

- **get_client** — Fetch a single server-side client Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L79-L79).

<a id="tool-get_clients-d5b08256"></a>

- **get_clients** — List server-side clients in a workspace Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L80-L80).

<a id="tool-get_container-9a0808eb"></a>

- **get_container** — Fetch a single container by id Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L81-L81).

<a id="tool-get_container_snippet-abfe46b2"></a>

- **get_container_snippet** — Get the install <script> snippet for a container Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L82-L82).

<a id="tool-get_containers-107321e9"></a>

- **get_containers** — List containers in a GTM account Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L83-L83).

<a id="tool-get_destination-524a1285"></a>

- **get_destination** — Fetch a single destination Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L84-L84).

<a id="tool-get_destinations-33e3df95"></a>

- **get_destinations** — List destinations linked to a container Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L85-L85).

<a id="tool-get_environment-6589f882"></a>

- **get_environment** — Fetch a single environment Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L86-L86).

<a id="tool-get_environments-bdcfc65a"></a>

- **get_environments** — List environments configured for a container Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L87-L87).

<a id="tool-get_folder-e6226f1e"></a>

- **get_folder** — Fetch a single folder Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L88-L88).

<a id="tool-get_folder_entities-af7babd3"></a>

- **get_folder_entities** — Return tags / triggers / variables that live inside a folder Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L89-L89).

<a id="tool-get_folders-d7b70526"></a>

- **get_folders** — List folders in a workspace Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L90-L90).

<a id="tool-get_gtag_config-9b30a656"></a>

- **get_gtag_config** — Fetch a single Google Tag config Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L91-L91).

<a id="tool-get_gtag_configs-cebc7f17"></a>

- **get_gtag_configs** — List Google Tag (gtag.js) configurations in a workspace Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L92-L92).

<a id="tool-get_latest_version_header-e7218219"></a>

- **get_latest_version_header** — Fetch the most recent version header Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L93-L93).

<a id="tool-get_live_version-ffef26dc"></a>

- **get_live_version** — Fetch the version currently published to live Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L94-L94).

<a id="tool-get_tag-749bab4b"></a>

- **get_tag** — Fetch a single tag Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L95-L95).

<a id="tool-get_tags-6ad52409"></a>

- **get_tags** — List all tags in a workspace Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L96-L96).

<a id="tool-get_template-99eb59af"></a>

- **get_template** — Fetch a single custom template Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L97-L97).

<a id="tool-get_templates-1d946c1e"></a>

- **get_templates** — List custom templates in a workspace Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L98-L98).

<a id="tool-get_transformation-13553d72"></a>

- **get_transformation** — Fetch a single transformation Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L99-L99).

<a id="tool-get_transformations-f65744bc"></a>

- **get_transformations** — List server-side transformations in a workspace Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L100-L100).

<a id="tool-get_trigger-e2f13ee6"></a>

- **get_trigger** — Fetch a single trigger Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L101-L101).

<a id="tool-get_triggers-b671aaf1"></a>

- **get_triggers** — List all triggers in a workspace Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L102-L102).

<a id="tool-get_variable-ba0cd778"></a>

- **get_variable** — Fetch a single variable Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L103-L103).

<a id="tool-get_variables-063d799c"></a>

- **get_variables** — List user-defined variables in a workspace Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L104-L104).

<a id="tool-get_version-e67e6685"></a>

- **get_version** — Fetch a single container version including all entities at that point in time Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L105-L105).

<a id="tool-get_version_headers-b34b24c4"></a>

- **get_version_headers** — List lightweight version headers (id, name, entity counts) without full entity payloads Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L106-L106).

<a id="tool-get_workspace-80ffee6a"></a>

- **get_workspace** — Fetch a single workspace Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L107-L107).

<a id="tool-get_workspace_status-23f21bb9"></a>

- **get_workspace_status** — Show pending changes in a workspace and any merge conflicts vs the latest container version Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L108-L108).

<a id="tool-get_workspaces-c6e42e7d"></a>

- **get_workspaces** — List workspaces (staging areas) in a container Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L109-L109).

<a id="tool-get_zone-81cb3a97"></a>

- **get_zone** — Fetch a single zone Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L110-L110).

<a id="tool-get_zones-781a24ef"></a>

- **get_zones** — List zones in a workspace Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L111-L111).

<a id="tool-lookup_container-bdbb7fe1"></a>

- **lookup_container** — Look up a container by its public id (e.g. GTM-XXXXXX) Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L112-L112).

<a id="tool-quick_preview_workspace-2e1cb327"></a>

- **quick_preview_workspace** — Generate a debug-mode preview of a workspace without saving it as a version Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L113-L113).

<a id="tool-create_folder-5b53fba3"></a>

- **create_folder** — Create a folder for organizing workspace entities Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L121-L121).

<a id="tool-create_tag-e71dcc44"></a>

- **create_tag** — Create a tag in a workspace Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L122-L122).

<a id="tool-create_trigger-71660c93"></a>

- **create_trigger** — Create a trigger in a workspace Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L123-L123).

<a id="tool-create_variable-2f5e4ddb"></a>

- **create_variable** — Create a variable Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L124-L124).

<a id="tool-create_workspace-a1af8425"></a>

- **create_workspace** — Create a new workspace (staging area) Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L125-L125).

<a id="tool-delete_folder-934d582b"></a>

- **delete_folder** — Delete a folder from a workspace Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L126-L126).

<a id="tool-delete_tag-1345d160"></a>

- **delete_tag** — Delete a tag from a workspace Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L127-L127).

<a id="tool-delete_trigger-ec67de91"></a>

- **delete_trigger** — Delete a trigger from a workspace Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L128-L128).

<a id="tool-delete_variable-3ead6fdb"></a>

- **delete_variable** — Delete a user-defined variable from a workspace Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L129-L129).

<a id="tool-delete_workspace-50bbbf2e"></a>

- **delete_workspace** — Delete a workspace Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L130-L130).

<a id="tool-disable_built_in_variable-a42a7b0d"></a>

- **disable_built_in_variable** — Disable one or more built-in variables in a workspace Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L131-L131).

<a id="tool-enable_built_in_variable-0049036f"></a>

- **enable_built_in_variable** — Enable one or more built-in variables in the workspace by passing their type names as a comma-separated query value or repeated 'type' params Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L132-L132).

<a id="tool-move_entities_to_folder-abdb631f"></a>

- **move_entities_to_folder** — Move tags / triggers / variables into a folder Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L133-L133).

<a id="tool-resolve_conflict-c0beded2"></a>

- **resolve_conflict** — Resolve a merge conflict surfaced by sync_workspace by picking which side wins for a given entity Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L134-L134).

<a id="tool-revert_folder-a2d986fe"></a>

- **revert_folder** — Discard a folder's uncommitted workspace changes Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L135-L135).

<a id="tool-revert_tag-4c84be02"></a>

- **revert_tag** — Discard a tag's uncommitted workspace changes, reverting it to the live container state Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L136-L136).

<a id="tool-revert_trigger-8e193d59"></a>

- **revert_trigger** — Discard a trigger's uncommitted workspace changes Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L137-L137).

<a id="tool-revert_variable-7fb63cb4"></a>

- **revert_variable** — Discard a variable's uncommitted workspace changes Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L138-L138).

<a id="tool-sync_workspace-4b02a6d9"></a>

- **sync_workspace** — Pull the latest container changes into a workspace, surfacing conflicts that need manual resolution Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L139-L139).

<a id="tool-update_folder-eb714a16"></a>

- **update_folder** — Update a folder Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L140-L140).

<a id="tool-update_tag-ff9e7962"></a>

- **update_tag** — Update a tag Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L141-L141).

<a id="tool-update_trigger-60ddeb77"></a>

- **update_trigger** — Update a trigger Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L142-L142).

<a id="tool-update_variable-63c48ad7"></a>

- **update_variable** — Update a variable Documented action only: private hosted implementation and full MCP inputSchema are not published in this repository or the reviewed official connector/action docs; unauthenticated tools/list returned HTTP 401. Actual registered name/description/schema and handler behavior could not be verified. [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md#L143-L143).
