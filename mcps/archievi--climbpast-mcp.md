# archievi/climbpast-mcp

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/archievi/climbpast-mcp) · [Machine-readable inventory](../data/mcps/archievi--climbpast-mcp.json)

**0 extracted tools · 29 schema gaps.** Excluded: Hosted documentation lists tool names but supplies no complete input schemas; tools/list requires credentials.

Snapshot: 2026-10-13 · [512f1aed6fba](https://github.com/archievi/climbpast-mcp/tree/512f1aed6fbaa95faba92ac59d2292feb2f6a0e6) · Method: official-docs.

Exposure: Hosted service requires a cp_ Bearer key. README says read-only by default and write access requires opt-in Google consent. Official docs mark all 11 GTM tools write, including list operations; actual conditional registration versus permission enforcement cannot be verified.

## Limits

- All 29 documented public names captured in gaps; zero complete input schemas extracted. Official docs list parameter names for get_ga4_report and create_custom_dimension but do not specify complete types or requiredness.
- POST tools/list without credentials returned HTTP 401; this is not a tool catalog. No credentials used and no tool operations invoked.
- Repository contains only README.md, server.json and banner; hosted server implementation is not open source, so handlers and actual GTM functionality cannot be inspected.
- Official docs simultaneously say all tools are read-only and describe write tools with separate consent; README says read-only by default. Runtime exposure and permission behavior remain unverified.

## Unavailable schemas

<a id="tool-whoami-f2529785"></a>

- **whoami** — Returns the connected workspace, Google account, linked properties, and which write capabilities are granted. Official tool reference provides no complete JSON input schema (types, required fields, constraints and defaults unavailable). Unauthenticated tools/list returns HTTP 401: Invalid or revoked API key. Hosted implementation is not public. [Source](https://climbpast.com/docs/mcp).

<a id="tool-list_properties-e8b19dcf"></a>

- **list_properties** — Lists all connected GA4 properties and Search Console sites. Official tool reference provides no complete JSON input schema (types, required fields, constraints and defaults unavailable). Unauthenticated tools/list returns HTTP 401: Invalid or revoked API key. Hosted implementation is not public. [Source](https://climbpast.com/docs/mcp).

<a id="tool-get_ga4_report-d3904c70"></a>

- **get_ga4_report** — Runs a GA4 report. Use a preset or pass your own dimensions and metrics. Official tool reference provides no complete JSON input schema (types, required fields, constraints and defaults unavailable). Unauthenticated tools/list returns HTTP 401: Invalid or revoked API key. Hosted implementation is not public. [Source](https://climbpast.com/docs/mcp).

<a id="tool-get_ga4_realtime-d133794d"></a>

- **get_ga4_realtime** — Returns active users and top events from the GA4 Realtime API. Official tool reference provides no complete JSON input schema (types, required fields, constraints and defaults unavailable). Unauthenticated tools/list returns HTTP 401: Invalid or revoked API key. Hosted implementation is not public. [Source](https://climbpast.com/docs/mcp).

<a id="tool-get_gsc_performance-a53a4b63"></a>

- **get_gsc_performance** — Clicks, impressions, CTR, and average position from Search Console, grouped by query, page, or date. Official tool reference provides no complete JSON input schema (types, required fields, constraints and defaults unavailable). Unauthenticated tools/list returns HTTP 401: Invalid or revoked API key. Hosted implementation is not public. [Source](https://climbpast.com/docs/mcp).

<a id="tool-inspect_url-a2c17400"></a>

- **inspect_url** — Runs the Search Console URL Inspection API on a single URL to check whether Google has indexed it. Official tool reference provides no complete JSON input schema (types, required fields, constraints and defaults unavailable). Unauthenticated tools/list returns HTTP 401: Invalid or revoked API key. Hosted implementation is not public. [Source](https://climbpast.com/docs/mcp).

<a id="tool-get_weekly_report-60519008"></a>

- **get_weekly_report** — The most recent cached weekly performance snapshot for the workspace. Official tool reference provides no complete JSON input schema (types, required fields, constraints and defaults unavailable). Unauthenticated tools/list returns HTTP 401: Invalid or revoked API key. Hosted implementation is not public. [Source](https://climbpast.com/docs/mcp).

<a id="tool-get_insights-f12290f9"></a>

- **get_insights** — AI-generated insights from the latest dashboard snapshot. Official tool reference provides no complete JSON input schema (types, required fields, constraints and defaults unavailable). Unauthenticated tools/list returns HTTP 401: Invalid or revoked API key. Hosted implementation is not public. [Source](https://climbpast.com/docs/mcp).

<a id="tool-get_ai_traffic-673be1ca"></a>

- **get_ai_traffic** — Traffic attributed to AI assistants (ChatGPT, Perplexity, Claude, Gemini) over a date range. Official tool reference provides no complete JSON input schema (types, required fields, constraints and defaults unavailable). Unauthenticated tools/list returns HTTP 401: Invalid or revoked API key. Hosted implementation is not public. [Source](https://climbpast.com/docs/mcp).

<a id="tool-list_custom_dimensions-616826eb"></a>

- **list_custom_dimensions** — Lists custom dimensions registered on a GA4 property. Official tool reference provides no complete JSON input schema (types, required fields, constraints and defaults unavailable). Unauthenticated tools/list returns HTTP 401: Invalid or revoked API key. Hosted implementation is not public. [Source](https://climbpast.com/docs/mcp).

<a id="tool-create_custom_dimension-4a75216f"></a>

- **create_custom_dimension** — Registers an event parameter as a custom dimension so it becomes reportable. GA4 does not backfill. Official tool reference provides no complete JSON input schema (types, required fields, constraints and defaults unavailable). Unauthenticated tools/list returns HTTP 401: Invalid or revoked API key. Hosted implementation is not public. [Source](https://climbpast.com/docs/mcp).

<a id="tool-update_custom_dimension-161402dd"></a>

- **update_custom_dimension** — Updates a custom dimension’s display name or description. parameterName and scope are immutable in GA4. Official tool reference provides no complete JSON input schema (types, required fields, constraints and defaults unavailable). Unauthenticated tools/list returns HTTP 401: Invalid or revoked API key. Hosted implementation is not public. [Source](https://climbpast.com/docs/mcp).

<a id="tool-list_key_events-b7d774fc"></a>

- **list_key_events** — Lists key events (conversions) marked on a GA4 property. Official tool reference provides no complete JSON input schema (types, required fields, constraints and defaults unavailable). Unauthenticated tools/list returns HTTP 401: Invalid or revoked API key. Hosted implementation is not public. [Source](https://climbpast.com/docs/mcp).

<a id="tool-create_key_event-3eea6082"></a>

- **create_key_event** — Marks an existing GA4 event as a key event. The event must already be collected. Official tool reference provides no complete JSON input schema (types, required fields, constraints and defaults unavailable). Unauthenticated tools/list returns HTTP 401: Invalid or revoked API key. Hosted implementation is not public. [Source](https://climbpast.com/docs/mcp).

<a id="tool-update_key_event-e6b4f63a"></a>

- **update_key_event** — Changes how a key event is counted. The event name itself cannot be changed. Official tool reference provides no complete JSON input schema (types, required fields, constraints and defaults unavailable). Unauthenticated tools/list returns HTTP 401: Invalid or revoked API key. Hosted implementation is not public. [Source](https://climbpast.com/docs/mcp).

<a id="tool-list_sitemaps-3490510a"></a>

- **list_sitemaps** — Lists submitted sitemaps with download status, warnings, errors, and indexed counts. Official tool reference provides no complete JSON input schema (types, required fields, constraints and defaults unavailable). Unauthenticated tools/list returns HTTP 401: Invalid or revoked API key. Hosted implementation is not public. [Source](https://climbpast.com/docs/mcp).

<a id="tool-submit_sitemap-4deb7dbe"></a>

- **submit_sitemap** — Submits or re-submits a sitemap. Re-submitting with fresh lastmod dates is the only automatable recrawl signal Google offers. Official tool reference provides no complete JSON input schema (types, required fields, constraints and defaults unavailable). Unauthenticated tools/list returns HTTP 401: Invalid or revoked API key. Hosted implementation is not public. [Source](https://climbpast.com/docs/mcp).

<a id="tool-delete_sitemap-03fcd15c"></a>

- **delete_sitemap** — Removes a sitemap from Search Console. Does not deindex any pages. Official tool reference provides no complete JSON input schema (types, required fields, constraints and defaults unavailable). Unauthenticated tools/list returns HTTP 401: Invalid or revoked API key. Hosted implementation is not public. [Source](https://climbpast.com/docs/mcp).

<a id="tool-gtm_list_containers-e45afd2b"></a>

- **gtm_list_containers** — Lists every Tag Manager account and container the connected account can reach. Start here. Official tool reference provides no complete JSON input schema (types, required fields, constraints and defaults unavailable). Unauthenticated tools/list returns HTTP 401: Invalid or revoked API key. Hosted implementation is not public. [Source](https://climbpast.com/docs/mcp).

<a id="tool-gtm_list_workspaces-248ce86f"></a>

- **gtm_list_workspaces** — Lists draft workspaces in a container. Official tool reference provides no complete JSON input schema (types, required fields, constraints and defaults unavailable). Unauthenticated tools/list returns HTTP 401: Invalid or revoked API key. Hosted implementation is not public. [Source](https://climbpast.com/docs/mcp).

<a id="tool-gtm_list_tags-b585bc12"></a>

- **gtm_list_tags** — Lists all tags in a workspace with their type, triggers, and parameters. Official tool reference provides no complete JSON input schema (types, required fields, constraints and defaults unavailable). Unauthenticated tools/list returns HTTP 401: Invalid or revoked API key. Hosted implementation is not public. [Source](https://climbpast.com/docs/mcp).

<a id="tool-gtm_list_triggers-16b41a3c"></a>

- **gtm_list_triggers** — Lists all triggers in a workspace. Official tool reference provides no complete JSON input schema (types, required fields, constraints and defaults unavailable). Unauthenticated tools/list returns HTTP 401: Invalid or revoked API key. Hosted implementation is not public. [Source](https://climbpast.com/docs/mcp).

<a id="tool-gtm_list_variables-81705a80"></a>

- **gtm_list_variables** — Lists user-defined variables in a workspace. Official tool reference provides no complete JSON input schema (types, required fields, constraints and defaults unavailable). Unauthenticated tools/list returns HTTP 401: Invalid or revoked API key. Hosted implementation is not public. [Source](https://climbpast.com/docs/mcp).

<a id="tool-gtm_create_workspace-6324597f"></a>

- **gtm_create_workspace** — Creates a draft workspace so changes stay isolated until published. Official tool reference provides no complete JSON input schema (types, required fields, constraints and defaults unavailable). Unauthenticated tools/list returns HTTP 401: Invalid or revoked API key. Hosted implementation is not public. [Source](https://climbpast.com/docs/mcp).

<a id="tool-gtm_create_tag-c682840c"></a>

- **gtm_create_tag** — Creates a tag. Takes the raw GTM tag body, so any tag type is supported. Official tool reference provides no complete JSON input schema (types, required fields, constraints and defaults unavailable). Unauthenticated tools/list returns HTTP 401: Invalid or revoked API key. Hosted implementation is not public. [Source](https://climbpast.com/docs/mcp).

<a id="tool-gtm_update_tag-23807743"></a>

- **gtm_update_tag** — Replaces an existing tag. GTM does a full replace, not a merge. Official tool reference provides no complete JSON input schema (types, required fields, constraints and defaults unavailable). Unauthenticated tools/list returns HTTP 401: Invalid or revoked API key. Hosted implementation is not public. [Source](https://climbpast.com/docs/mcp).

<a id="tool-gtm_delete_tag-42a56cac"></a>

- **gtm_delete_tag** — Deletes a tag from a workspace. Draft until published, and revertible from GTM version history. Official tool reference provides no complete JSON input schema (types, required fields, constraints and defaults unavailable). Unauthenticated tools/list returns HTTP 401: Invalid or revoked API key. Hosted implementation is not public. [Source](https://climbpast.com/docs/mcp).

<a id="tool-gtm_create_trigger-99da4322"></a>

- **gtm_create_trigger** — Creates a trigger. Takes the raw GTM trigger body. Official tool reference provides no complete JSON input schema (types, required fields, constraints and defaults unavailable). Unauthenticated tools/list returns HTTP 401: Invalid or revoked API key. Hosted implementation is not public. [Source](https://climbpast.com/docs/mcp).

<a id="tool-gtm_publish_container-513cc8f7"></a>

- **gtm_publish_container** — Creates a container version from the draft and publishes it. This changes your live site. Official tool reference provides no complete JSON input schema (types, required fields, constraints and defaults unavailable). Unauthenticated tools/list returns HTTP 401: Invalid or revoked API key. Hosted implementation is not public. [Source](https://climbpast.com/docs/mcp).
