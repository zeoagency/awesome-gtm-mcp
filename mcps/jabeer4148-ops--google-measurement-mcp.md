# jabeer4148-ops/google-measurement-mcp

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/jabeer4148-ops/google-measurement-mcp) · [Machine-readable inventory](../data/mcps/jabeer4148-ops--google-measurement-mcp.json)

**28 extracted tools.** Inspects workspace state, previews entity writes, and reviews drafts before version creation and publication.

Snapshot: 2026-10-13 · [9feb8a8e5052](https://github.com/jabeer4148-ops/google-measurement-mcp/tree/9feb8a8e505289c86448dd8adc7207cf4421507b) · Method: source.

Exposure: All 28 tools captured: 20 default read tools and 8 opt-in write tools. Write mode via --enable-write or GMCP_ENABLE_WRITE=1/true/yes/on. No publishing, deletes, approval/review tokens or per-call confirm gate. Version preview is read-only snapshot. Default row cap is 25, configurable by GMCP_DEFAULT_ROW_LIMIT; hard cap 100000, GSC search cap 25000.

## Limits

- Offline registry construction from compiled source, matching the tools/list projection; no protocol request or Google tool handler was executed. Google endpoint behavior and credential scopes were not remotely verified.
- gtm_list_workspaces sends input.pageToken directly to Google instead of upstreamPageToken, while pageRows returns gmcp-prefixed cursors.
- Schemas preserved exactly as registered; runtime validations and defaults can exceed schema constraints (path normalization, date/filter checks, row caps and server configuration).

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`ga4_get_metadata`](#tool-ga4_get_metadata-723ca4d3) | Other product | Google Analytics 4: reads dimensions and metrics metadata and truncates each collection. |
| [`ga4_run_report`](#tool-ga4_run_report-a0a35566) | Other product | Google Analytics 4: runs a standard report, validates dates/filters/order, flattens rows and supports offset continuation. |
| [`ga4_run_realtime_report`](#tool-ga4_run_realtime_report-8f675773) | Other product | Google Analytics 4: runs a realtime report and flattens capped rows. |
| [`ga4_list_account_summaries`](#tool-ga4_list_account_summaries-d44f3140) | Other product | Google Analytics 4: lists account summaries and property IDs with cursor pagination. |
| [`ga4_list_custom_dimensions`](#tool-ga4_list_custom_dimensions-75905509) | Other product | Google Analytics 4: lists property custom dimensions with cursor pagination. |
| [`ga4_list_key_events`](#tool-ga4_list_key_events-ac1a65f2) | Other product | Google Analytics 4: lists property key events with cursor pagination. |
| [`gsc_list_sites`](#tool-gsc_list_sites-69b36040) | Other product | Search Console: lists accessible properties and permission levels with capped results. |
| [`gsc_search_analytics_query`](#tool-gsc_search_analytics_query-cd31e1b0) | Other product | Search Console: queries performance data, flattens dimension keys and supports startRow continuation. |
| [`gsc_list_sitemaps`](#tool-gsc_list_sitemaps-e4a908e7) | Other product | Search Console: lists sitemap submission status and counts with capped results. |
| [`gsc_inspect_url`](#tool-gsc_inspect_url-2d598234) | Other product | Search Console: reads URL inspection index status, mobile usability and rich results. |
| [`gtm_list_accounts`](#tool-gtm_list_accounts-c5d9b27f) | GTM | Lists accessible Google Tag Manager accounts with paged, capped results. |
| [`gtm_list_containers`](#tool-gtm_list_containers-e45afd2b) | GTM | Lists containers for a GTM account, including numeric container IDs and public IDs. |
| [`gtm_list_workspaces`](#tool-gtm_list_workspaces-248ce86f) | GTM | Lists workspaces for a container; its handler incorrectly forwards the public continuation cursor directly to the Google pageToken parameter. |
| [`gtm_list_tags`](#tool-gtm_list_tags-b585bc12) | GTM | Lists workspace tags, condensing parameters to key/value pairs. |
| [`gtm_list_triggers`](#tool-gtm_list_triggers-16b41a3c) | GTM | Lists workspace triggers and summarized conditions. |
| [`gtm_list_variables`](#tool-gtm_list_variables-81705a80) | GTM | Lists user-defined workspace variables and summarized parameters. |
| [`gtm_get_live_version`](#tool-gtm_get_live_version-986da5ee) | GTM | Reads the full published container version through the GTM v2 live endpoint. |
| [`gtm_preview_version`](#tool-gtm_preview_version-939d33bd) | GTM | Reads candidate and live versions and computes a configuration delta without publication or an approval token. |
| [`gsc_compare_periods`](#tool-gsc_compare_periods-2b628d41) | Other product | Search Console: compares totals from two queries for equal-length non-overlapping periods. |
| [`gmcp_diagnostics`](#tool-gmcp_diagnostics-78bd8242) | Supporting | Checks credential availability and operating mode without returning tokens; does not establish product resource access. |
| [`ga4_create_custom_dimension`](#tool-ga4_create_custom_dimension-2ce8700e) | Other product | Google Analytics 4: creates a custom dimension after local field checks; archiving is not exposed. |
| [`ga4_create_key_event`](#tool-ga4_create_key_event-503e5cec) | Other product | Google Analytics 4: creates a key event; deletion is not exposed. |
| [`ga4_update_key_event`](#tool-ga4_update_key_event-9fe62a80) | Other product | Google Analytics 4: patches a key event counting method. |
| [`gsc_submit_sitemap`](#tool-gsc_submit_sitemap-6d135a26) | Other product | Search Console: submits a sitemap URL after origin validation; deletion is not exposed. |
| [`gtm_create_tag`](#tool-gtm_create_tag-c682840c) | GTM | Creates a workspace tag; does not publish and has no per-call confirmation gate. |
| [`gtm_update_tag`](#tool-gtm_update_tag-23807743) | GTM | Reads and merges a workspace tag, preserves omitted fields, merges parameters by key, and updates with the current fingerprint. |
| [`gtm_create_trigger`](#tool-gtm_create_trigger-99da4322) | GTM | Creates a workspace trigger; does not publish and has no per-call confirmation gate. |
| [`gtm_create_version`](#tool-gtm_create_version-50a805d7) | GTM | Creates a container version from a workspace, rejecting compiler/sync failures in its result; publication remains manual. |

<a id="tool-ga4_get_metadata-723ca4d3"></a>

## ga4_get_metadata

Handler: Google Analytics 4: reads dimensions and metrics metadata and truncates each collection.

```text
Discover valid GA4 field names, descriptions and custom definitions for a property before reporting. Does not guarantee every combination is compatible.
```

[Source](https://github.com/jabeer4148-ops/google-measurement-mcp/blob/9feb8a8e505289c86448dd8adc7207cf4421507b/src/tools/ga4-data.ts#L72-L207) · Schema: literal-source.

Exposure: Always registered, including default read-only mode.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "propertyId": {
      "type": "string"
    },
    "limit": {
      "type": "integer",
      "minimum": 1
    }
  },
  "required": [
    "propertyId"
  ],
  "additionalProperties": false
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "title": "Discover GA4 dimensions and metrics",
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-ga4_run_report-a0a35566"></a>

## ga4_run_report

Handler: Google Analytics 4: runs a standard report, validates dates/filters/order, flattens rows and supports offset continuation.

```text
Runs a Google Analytics 4 report and returns rows as flat objects. Requires the NUMERIC GA4 propertyId (e.g. 123456789), not the G-XXXXXXX measurement ID. If the user does not know it, it appears in any GA4 URL as the digits after 'p' (analytics.google.com/analytics/web/#/a<account>p<property>/...), or under GA4 Admin -> Property details -> PROPERTY ID. Returns at most 25 rows unless `limit` is raised; prefer narrowing the date range or dimensions over raising it. Read-only.
```

[Source](https://github.com/jabeer4148-ops/google-measurement-mcp/blob/9feb8a8e505289c86448dd8adc7207cf4421507b/src/tools/ga4-data.ts#L89-L207) · Schema: literal-source.

Exposure: Always registered, including default read-only mode.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "propertyId": {
      "type": "string",
      "description": "GA4 numeric property ID, with or without the 'properties/' prefix. Call ga4_list_account_summaries to discover it. This is NOT the G-XXXXXXX measurement ID."
    },
    "startDate": {
      "type": "string",
      "description": "Start of the range. Accepts YYYY-MM-DD, 'today', 'yesterday', or 'NdaysAgo' (e.g. '28daysAgo')."
    },
    "endDate": {
      "type": "string",
      "description": "End of the range, inclusive. Same formats as startDate."
    },
    "dimensions": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "GA4 dimension API names, e.g. ['date','sessionSource','country']. Omit for totals only."
    },
    "metrics": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "minItems": 1,
      "description": "GA4 metric API names, e.g. ['activeUsers','sessions','conversions']. At least one is required."
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "description": "Maximum rows to return. Defaults to 25 to protect the context window. Prefer narrowing the query over raising this."
    },
    "offset": {
      "type": "integer",
      "minimum": 0,
      "description": "Zero-based row offset, for paging through a large report."
    },
    "dimensionFilter": {
      "type": "object",
      "description": "Google Data API FilterExpression for dimensions."
    },
    "metricFilter": {
      "type": "object",
      "description": "Google Data API FilterExpression for metrics."
    },
    "orderBys": {
      "type": "array",
      "items": {
        "type": "object"
      },
      "description": "Google Data API OrderBy objects (metric or dimension)."
    },
    "keepEmptyRows": {
      "type": "boolean",
      "description": "When true, returns rows whose metrics are all zero. Defaults to false."
    }
  },
  "required": [
    "propertyId",
    "startDate",
    "endDate",
    "metrics"
  ],
  "additionalProperties": false
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "title": "Run a GA4 report",
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-ga4_run_realtime_report-8f675773"></a>

## ga4_run_realtime_report

Handler: Google Analytics 4: runs a realtime report and flattens capped rows.

```text
Returns activity from roughly the last 30 minutes. Requires the NUMERIC GA4 propertyId (call ga4_list_account_summaries to find it). IMPORTANT: the realtime schema is a SUBSET of the standard reporting schema — 'date', 'sessionSource' and most session-scoped fields are unavailable and will error. Common realtime dimensions: country, city, deviceCategory, unifiedScreenName, eventName. Common realtime metrics: activeUsers, screenPageViews, eventCount. For anything older than 30 minutes use ga4_run_report instead. Read-only.
```

[Source](https://github.com/jabeer4148-ops/google-measurement-mcp/blob/9feb8a8e505289c86448dd8adc7207cf4421507b/src/tools/ga4-data.ts#L152-L207) · Schema: literal-source.

Exposure: Always registered, including default read-only mode.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "propertyId": {
      "type": "string",
      "description": "Numeric GA4 property ID, with or without the 'properties/' prefix. Not the G-XXXXXXX measurement ID."
    },
    "dimensions": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Realtime dimension API names, e.g. ['country','unifiedScreenName','deviceCategory']. Note the realtime schema is a SUBSET of the standard reporting schema — 'date' and most session-scoped dimensions are unavailable."
    },
    "metrics": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "minItems": 1,
      "description": "Realtime metric API names, e.g. ['activeUsers','screenPageViews']."
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "description": "Maximum rows to return. Defaults to 25 to protect the context window. Prefer narrowing the query over raising this."
    }
  },
  "required": [
    "propertyId",
    "metrics"
  ],
  "additionalProperties": false
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "title": "Run a GA4 realtime report",
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-ga4_list_account_summaries-d44f3140"></a>

## ga4_list_account_summaries

Handler: Google Analytics 4: lists account summaries and property IDs with cursor pagination.

```text
Lists every Google Analytics account the authenticated user can see, with the properties under each. Use this FIRST to discover the numeric propertyId that other GA4 tools require. Returns account name, display name, and for each property its ID and display name. Read-only.
```

[Source](https://github.com/jabeer4148-ops/google-measurement-mcp/blob/9feb8a8e505289c86448dd8adc7207cf4421507b/src/tools/ga4-admin.ts#L34-L169) · Schema: literal-source.

Exposure: Always registered, including default read-only mode.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "limit": {
      "type": "integer",
      "minimum": 1,
      "description": "Maximum rows to return. Defaults to 25 to protect the context window. Prefer narrowing the query over raising this."
    },
    "pageToken": {
      "type": "string",
      "description": "Opaque token from a previous response's `nextPageToken`, to fetch the following page. Paging is manual so the caller controls cost."
    }
  },
  "required": [],
  "additionalProperties": false
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "title": "List GA4 accounts and properties",
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-ga4_list_custom_dimensions-75905509"></a>

## ga4_list_custom_dimensions

Handler: Google Analytics 4: lists property custom dimensions with cursor pagination.

```text
Lists custom dimensions configured on a GA4 property, with parameter name, display name, and scope (EVENT/USER/ITEM). Useful for discovering which custom dimensions exist before referencing them in ga4_run_report. Read-only.
```

[Source](https://github.com/jabeer4148-ops/google-measurement-mcp/blob/9feb8a8e505289c86448dd8adc7207cf4421507b/src/tools/ga4-admin.ts#L80-L169) · Schema: literal-source.

Exposure: Always registered, including default read-only mode.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "propertyId": {
      "type": "string",
      "description": "Numeric GA4 property ID, with or without the 'properties/' prefix. Call ga4_list_account_summaries to discover it."
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "description": "Maximum rows to return. Defaults to 25 to protect the context window. Prefer narrowing the query over raising this."
    },
    "pageToken": {
      "type": "string",
      "description": "Opaque token from a previous response's `nextPageToken`, to fetch the following page. Paging is manual so the caller controls cost."
    }
  },
  "required": [
    "propertyId"
  ],
  "additionalProperties": false
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "title": "List GA4 custom dimensions",
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-ga4_list_key_events-ac1a65f2"></a>

## ga4_list_key_events

Handler: Google Analytics 4: lists property key events with cursor pagination.

```text
Lists key events (formerly 'conversions') on a GA4 property, with counting method and whether each is deletable. Read-only.
```

[Source](https://github.com/jabeer4148-ops/google-measurement-mcp/blob/9feb8a8e505289c86448dd8adc7207cf4421507b/src/tools/ga4-admin.ts#L125-L169) · Schema: literal-source.

Exposure: Always registered, including default read-only mode.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "propertyId": {
      "type": "string",
      "description": "Numeric GA4 property ID, with or without the 'properties/' prefix. Call ga4_list_account_summaries to discover it."
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "description": "Maximum rows to return. Defaults to 25 to protect the context window. Prefer narrowing the query over raising this."
    },
    "pageToken": {
      "type": "string",
      "description": "Opaque token from a previous response's `nextPageToken`, to fetch the following page. Paging is manual so the caller controls cost."
    }
  },
  "required": [
    "propertyId"
  ],
  "additionalProperties": false
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "title": "List GA4 key events",
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gsc_list_sites-69b36040"></a>

## gsc_list_sites

Handler: Search Console: lists accessible properties and permission levels with capped results.

```text
Lists every Search Console property the authenticated user can access, with their permission level. Use this FIRST to get the exact siteUrl string other Search Console tools need — the format is significant ('https://example.com/' for URL-prefix properties, 'sc-domain:example.com' for Domain properties). Read-only.
```

[Source](https://github.com/jabeer4148-ops/google-measurement-mcp/blob/9feb8a8e505289c86448dd8adc7207cf4421507b/src/tools/gsc.ts#L50-L276) · Schema: literal-source.

Exposure: Always registered, including default read-only mode.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "limit": {
      "type": "integer",
      "minimum": 1,
      "description": "Maximum rows to return. Defaults to 25 to protect the context window. Prefer narrowing the query over raising this."
    }
  },
  "required": [],
  "additionalProperties": false
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "title": "List Search Console properties",
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gsc_search_analytics_query-cd31e1b0"></a>

## gsc_search_analytics_query

Handler: Search Console: queries performance data, flattens dimension keys and supports startRow continuation.

```text
Returns clicks, impressions, CTR and average position from Search Console, grouped by the dimensions you choose. This is the primary SEO analysis tool. siteUrl must be the exact string from gsc_list_sites. Dates are YYYY-MM-DD only — relative forms like '28daysAgo' are NOT supported here (unlike the GA4 tools). Data lags roughly 2-3 days; use dataState='all' to include fresh partial data. Returns at most 25 rows by default while the API itself allows up to 25,000, so do not assume you are seeing everything — raise `limit` deliberately or narrow with filters. Page with `startRow`. Read-only.
```

[Source](https://github.com/jabeer4148-ops/google-measurement-mcp/blob/9feb8a8e505289c86448dd8adc7207cf4421507b/src/tools/gsc.ts#L79-L276) · Schema: literal-source.

Exposure: Always registered, including default read-only mode.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "siteUrl": {
      "type": "string",
      "description": "Exact property string from Search Console: 'https://example.com/' (URL-prefix) or 'sc-domain:example.com' (Domain). Call gsc_list_sites for valid values."
    },
    "startDate": {
      "type": "string",
      "description": "YYYY-MM-DD. Relative dates are NOT supported."
    },
    "endDate": {
      "type": "string",
      "description": "YYYY-MM-DD, inclusive."
    },
    "dimensions": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "query",
          "page",
          "country",
          "device",
          "searchAppearance",
          "date",
          "hour"
        ]
      },
      "description": "Group by these. 'hour' requires dataState='hourly_all'. Results are keyed in the order supplied."
    },
    "type": {
      "type": "string",
      "enum": [
        "web",
        "image",
        "video",
        "news",
        "googleNews",
        "discover"
      ],
      "description": "Search surface. Defaults to 'web'. Replaces the deprecated `searchType`."
    },
    "dimensionFilterGroups": {
      "type": "array",
      "items": {
        "type": "object"
      },
      "description": "Filter groups: [{ groupType: 'and', filters: [{ dimension, operator, expression }] }]. Operators: contains, equals, notContains, notEquals, includingRegex, excludingRegex (RE2 syntax). You may filter on a dimension without grouping by it."
    },
    "aggregationType": {
      "type": "string",
      "enum": [
        "auto",
        "byPage",
        "byProperty",
        "byNewsShowcasePanel"
      ],
      "description": "Defaults to 'auto'. Cannot be 'byProperty' when grouping or filtering by page."
    },
    "dataState": {
      "type": "string",
      "enum": [
        "final",
        "all",
        "hourly_all"
      ],
      "description": "'final' (default) excludes incomplete data. 'all' includes fresh partial data. 'hourly_all' enables the 'hour' dimension."
    },
    "startRow": {
      "type": "integer",
      "minimum": 0,
      "description": "Zero-based offset for paging. Search Console uses an offset, not a page token."
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "description": "Maximum rows to return. Defaults to 25 to protect the context window. Prefer narrowing the query over raising this."
    }
  },
  "required": [
    "siteUrl",
    "startDate",
    "endDate"
  ],
  "additionalProperties": false
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "title": "Query Search Console performance data",
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gsc_list_sitemaps-e4a908e7"></a>

## gsc_list_sitemaps

Handler: Search Console: lists sitemap submission status and counts with capped results.

```text
Lists sitemaps submitted for a Search Console property, with last-downloaded time, warning and error counts, and per-type indexed counts. Useful for diagnosing indexing problems. Read-only.
```

[Source](https://github.com/jabeer4148-ops/google-measurement-mcp/blob/9feb8a8e505289c86448dd8adc7207cf4421507b/src/tools/gsc.ts#L156-L276) · Schema: literal-source.

Exposure: Always registered, including default read-only mode.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "siteUrl": {
      "type": "string",
      "description": "Exact property string from Search Console. Call gsc_list_sites for valid values."
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "description": "Maximum rows to return. Defaults to 25 to protect the context window. Prefer narrowing the query over raising this."
    }
  },
  "required": [
    "siteUrl"
  ],
  "additionalProperties": false
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "title": "List submitted sitemaps",
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gsc_inspect_url-2d598234"></a>

## gsc_inspect_url

Handler: Search Console: reads URL inspection index status, mobile usability and rich results.

```text
Returns Google's index status for a single URL: coverage verdict, last crawl time, Google-selected vs user-declared canonical, mobile usability, and rich-results verdict. QUOTA: 2,000 queries per day and 600 per minute PER PROPERTY. Do not loop this over a list of URLs without checking the quota budget first — inspect specific URLs the user asked about, and prefer gsc_search_analytics_query for anything aggregate. Read-only.
```

[Source](https://github.com/jabeer4148-ops/google-measurement-mcp/blob/9feb8a8e505289c86448dd8adc7207cf4421507b/src/tools/gsc.ts#L199-L276) · Schema: literal-source.

Exposure: Always registered, including default read-only mode.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "siteUrl": {
      "type": "string",
      "description": "The Search Console property that owns the URL being inspected."
    },
    "inspectionUrl": {
      "type": "string",
      "description": "Fully-qualified URL to inspect. Must belong to the siteUrl property."
    },
    "languageCode": {
      "type": "string",
      "description": "BCP-47 code for localized result text, e.g. 'en-US'. Optional."
    }
  },
  "required": [
    "siteUrl",
    "inspectionUrl"
  ],
  "additionalProperties": false
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "title": "Inspect a URL's index status",
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_list_accounts-c5d9b27f"></a>

## gtm_list_accounts

Handler: Lists accessible Google Tag Manager accounts with paged, capped results.

```text
Lists every Google Tag Manager account the authenticated user can access. Use this FIRST to discover accountId, then gtm_list_containers, then gtm_list_workspaces. Read-only.
```

[Source](https://github.com/jabeer4148-ops/google-measurement-mcp/blob/9feb8a8e505289c86448dd8adc7207cf4421507b/src/tools/gtm.ts#L93-L288) · Schema: literal-source.

Exposure: Always registered, including default read-only mode.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "limit": {
      "type": "integer",
      "minimum": 1,
      "description": "Maximum rows to return. Defaults to 25 to protect the context window. Prefer narrowing the query over raising this."
    },
    "pageToken": {
      "type": "string",
      "description": "Opaque token from a previous response's `nextPageToken`, to fetch the following page. Paging is manual so the caller controls cost."
    }
  },
  "required": [],
  "additionalProperties": false
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "title": "List Tag Manager accounts",
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_list_containers-e45afd2b"></a>

## gtm_list_containers

Handler: Lists containers for a GTM account, including numeric container IDs and public IDs.

```text
Lists containers in a Tag Manager account. Call gtm_list_accounts first to get the accountId. NOTE the response has two different IDs: `containerId` is the numeric internal ID that every other GTM tool needs, while `publicId` is the GTM-XXXXXXX string shown in the UI. Pass the numeric one. Read-only.
```

[Source](https://github.com/jabeer4148-ops/google-measurement-mcp/blob/9feb8a8e505289c86448dd8adc7207cf4421507b/src/tools/gtm.ts#L125-L288) · Schema: literal-source.

Exposure: Always registered, including default read-only mode.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "GTM account ID, with or without the 'accounts/' prefix. Call gtm_list_accounts to discover it."
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "description": "Maximum rows to return. Defaults to 25 to protect the context window. Prefer narrowing the query over raising this."
    },
    "pageToken": {
      "type": "string",
      "description": "Opaque token from a previous response's `nextPageToken`, to fetch the following page. Paging is manual so the caller controls cost."
    }
  },
  "required": [
    "accountId"
  ],
  "additionalProperties": false
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "title": "List Tag Manager containers",
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_list_workspaces-248ce86f"></a>

## gtm_list_workspaces

Handler: Lists workspaces for a container; its handler incorrectly forwards the public continuation cursor directly to the Google pageToken parameter.

```text
Lists workspaces in a container. Workspaces are the safe editing surface — all writes in this server operate on a workspace, never the live container. Accepts either a full container `path` or accountId + containerId (numeric internal ID). Read-only.
```

[Source](https://github.com/jabeer4148-ops/google-measurement-mcp/blob/9feb8a8e505289c86448dd8adc7207cf4421507b/src/tools/gtm.ts#L168-L288) · Schema: literal-source.

Exposure: Always registered, including default read-only mode.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "path": {
      "type": "string",
      "description": "Full container path 'accounts/{a}/containers/{c}'. Alternative to supplying accountId and containerId separately."
    },
    "accountId": {
      "type": "string",
      "description": "GTM account ID. Ignored if `path` is supplied."
    },
    "containerId": {
      "type": "string",
      "description": "GTM container ID — the NUMERIC internal ID from gtm_list_containers, not the GTM-XXXXXXX public ID."
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "description": "Maximum rows to return. Defaults to 25 to protect the context window. Prefer narrowing the query over raising this."
    },
    "pageToken": {
      "type": "string",
      "description": "Opaque token from a previous response's `nextPageToken`, to fetch the following page. Paging is manual so the caller controls cost."
    }
  },
  "required": [],
  "additionalProperties": false
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "title": "List Tag Manager workspaces",
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_list_tags-b585bc12"></a>

## gtm_list_tags

Handler: Lists workspace tags, condensing parameters to key/value pairs.

```text
Lists tags in a Tag Manager workspace with their type, firing triggers and parameters. Accepts a full workspace `path` or accountId + containerId + workspaceId. Parameters are condensed to key/value pairs for readability. Read-only.
```

[Source](https://github.com/jabeer4148-ops/google-measurement-mcp/blob/9feb8a8e505289c86448dd8adc7207cf4421507b/src/tools/gtm.ts#L211-L288) · Schema: literal-source.

Exposure: Always registered, including default read-only mode.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "path": {
      "type": "string",
      "description": "Full workspace path 'accounts/{a}/containers/{c}/workspaces/{w}'. Alternative to the three IDs."
    },
    "accountId": {
      "type": "string",
      "description": "GTM account ID. Ignored if `path` is supplied."
    },
    "containerId": {
      "type": "string",
      "description": "Numeric internal container ID, not GTM-XXXXXXX."
    },
    "workspaceId": {
      "type": "string",
      "description": "Workspace ID from gtm_list_workspaces."
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "description": "Maximum rows to return. Defaults to 25 to protect the context window. Prefer narrowing the query over raising this."
    },
    "pageToken": {
      "type": "string",
      "description": "Opaque token from a previous response's `nextPageToken`, to fetch the following page. Paging is manual so the caller controls cost."
    }
  },
  "required": [],
  "additionalProperties": false
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "title": "List tags in a workspace",
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_list_triggers-16b41a3c"></a>

## gtm_list_triggers

Handler: Lists workspace triggers and summarized conditions.

```text
Lists triggers in a Tag Manager workspace with their type and firing conditions. Accepts a full workspace `path` or accountId + containerId + workspaceId. Read-only.
```

[Source](https://github.com/jabeer4148-ops/google-measurement-mcp/blob/9feb8a8e505289c86448dd8adc7207cf4421507b/src/tools/gtm.ts#L236-L288) · Schema: literal-source.

Exposure: Always registered, including default read-only mode.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "path": {
      "type": "string",
      "description": "Full workspace path 'accounts/{a}/containers/{c}/workspaces/{w}'. Alternative to the three IDs."
    },
    "accountId": {
      "type": "string",
      "description": "GTM account ID. Ignored if `path` is supplied."
    },
    "containerId": {
      "type": "string",
      "description": "Numeric internal container ID, not GTM-XXXXXXX."
    },
    "workspaceId": {
      "type": "string",
      "description": "Workspace ID from gtm_list_workspaces."
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "description": "Maximum rows to return. Defaults to 25 to protect the context window. Prefer narrowing the query over raising this."
    },
    "pageToken": {
      "type": "string",
      "description": "Opaque token from a previous response's `nextPageToken`, to fetch the following page. Paging is manual so the caller controls cost."
    }
  },
  "required": [],
  "additionalProperties": false
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "title": "List triggers in a workspace",
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_list_variables-81705a80"></a>

## gtm_list_variables

Handler: Lists user-defined workspace variables and summarized parameters.

```text
Lists user-defined variables in a Tag Manager workspace with their type and parameters. Note this returns user-defined variables only — built-in variables are a separate collection. Accepts a full workspace `path` or accountId + containerId + workspaceId. Read-only.
```

[Source](https://github.com/jabeer4148-ops/google-measurement-mcp/blob/9feb8a8e505289c86448dd8adc7207cf4421507b/src/tools/gtm.ts#L264-L288) · Schema: literal-source.

Exposure: Always registered, including default read-only mode.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "path": {
      "type": "string",
      "description": "Full workspace path 'accounts/{a}/containers/{c}/workspaces/{w}'. Alternative to the three IDs."
    },
    "accountId": {
      "type": "string",
      "description": "GTM account ID. Ignored if `path` is supplied."
    },
    "containerId": {
      "type": "string",
      "description": "Numeric internal container ID, not GTM-XXXXXXX."
    },
    "workspaceId": {
      "type": "string",
      "description": "Workspace ID from gtm_list_workspaces."
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "description": "Maximum rows to return. Defaults to 25 to protect the context window. Prefer narrowing the query over raising this."
    },
    "pageToken": {
      "type": "string",
      "description": "Opaque token from a previous response's `nextPageToken`, to fetch the following page. Paging is manual so the caller controls cost."
    }
  },
  "required": [],
  "additionalProperties": false
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "title": "List variables in a workspace",
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_get_live_version-986da5ee"></a>

## gtm_get_live_version

Handler: Reads the full published container version through the GTM v2 live endpoint.

```text
Read the full currently published GTM version. Configuration is not proof a tag fired in a browser. May return a large container; choose a specific container.
```

[Source](https://github.com/jabeer4148-ops/google-measurement-mcp/blob/9feb8a8e505289c86448dd8adc7207cf4421507b/src/tools/gtm-review.ts#L13-L50) · Schema: literal-source.

Exposure: Always registered, including default read-only mode.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "path": {
      "type": "string",
      "description": "accounts/{account}/containers/{container}"
    }
  },
  "required": [
    "path"
  ],
  "additionalProperties": false
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "title": "Inspect the live GTM configuration",
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_preview_version-939d33bd"></a>

## gtm_preview_version

Handler: Reads candidate and live versions and computes a configuration delta without publication or an approval token.

```text
READ ONLY. Compare a candidate version to the live version by stable entity IDs and configuration, including modified fields. This server cannot publish. Review full changes in Google Tag Manager before publishing there.
```

[Source](https://github.com/jabeer4148-ops/google-measurement-mcp/blob/9feb8a8e505289c86448dd8adc7207cf4421507b/src/tools/gtm-review.ts#L26-L50) · Schema: literal-source.

Exposure: Always registered, including default read-only mode.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "versionPath": {
      "type": "string",
      "description": "accounts/{account}/containers/{container}/versions/{numericVersion}"
    }
  },
  "required": [
    "versionPath"
  ],
  "additionalProperties": false
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "title": "Review a GTM version before manual publishing",
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gsc_compare_periods-2b628d41"></a>

## gsc_compare_periods

Handler: Search Console: compares totals from two queries for equal-length non-overlapping periods.

```text
Compare web-search totals for two equal-length, non-overlapping date ranges using final data. Returns click/impression changes and CTR percentage-point change; zero baselines yield null percentage change. Uses two read requests.
```

[Source](https://github.com/jabeer4148-ops/google-measurement-mcp/blob/9feb8a8e505289c86448dd8adc7207cf4421507b/src/tools/gsc-compare.ts#L16-L34) · Schema: literal-source.

Exposure: Always registered, including default read-only mode.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "siteUrl": {
      "type": "string",
      "description": "Exact Search Console property."
    },
    "startDate": {
      "type": "string",
      "description": "Current period start, YYYY-MM-DD."
    },
    "endDate": {
      "type": "string",
      "description": "Current period end, inclusive."
    },
    "previousStartDate": {
      "type": "string",
      "description": "Previous period start."
    },
    "previousEndDate": {
      "type": "string",
      "description": "Previous period end, inclusive."
    }
  },
  "required": [
    "siteUrl",
    "startDate",
    "endDate",
    "previousStartDate",
    "previousEndDate"
  ],
  "additionalProperties": false
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "title": "Compare Search Console performance between periods",
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gmcp_diagnostics-78bd8242"></a>

## gmcp_diagnostics

Handler: Checks credential availability and operating mode without returning tokens; does not establish product resource access.

```text
Check credential availability and read/write mode without exposing tokens or client secrets. Does not guarantee access to any particular property. Never starts browser sign-in.
```

[Source](https://github.com/jabeer4148-ops/google-measurement-mcp/blob/9feb8a8e505289c86448dd8adc7207cf4421507b/src/tools/diagnostics.ts#L11-L27) · Schema: literal-source.

Exposure: Always registered, including default read-only mode.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {},
  "required": [],
  "additionalProperties": false
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "title": "Check connection and operating mode",
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-ga4_create_custom_dimension-2ce8700e"></a>

## ga4_create_custom_dimension

Handler: Google Analytics 4: creates a custom dimension after local field checks; archiving is not exposed.

```text
CHANGES CONFIGURATION. Creates a custom dimension on a GA4 property. NOT REVERSIBLE: GA4 custom dimensions can only be ARCHIVED, never deleted, and this server does not implement archiving. Slots are limited (typically 50 event-scoped and 25 user-scoped per property) and archiving can free quota but cannot be undone. Do NOT create dimensions speculatively — confirm with the user that the parameter is actually being collected and that they want it registered. Note that creating a dimension does not start data collection; your tagging must already send the parameter, and data only appears going forward, never retroactively.
```

[Source](https://github.com/jabeer4148-ops/google-measurement-mcp/blob/9feb8a8e505289c86448dd8adc7207cf4421507b/src/tools/ga4-admin-write.ts#L33-L203) · Schema: literal-source.

Exposure: Conditional: --enable-write or truthy GMCP_ENABLE_WRITE; no review token or confirm parameter.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "propertyId": {
      "type": "string",
      "description": "Numeric GA4 property ID. Call ga4_list_account_summaries to discover it."
    },
    "parameterName": {
      "type": "string",
      "description": "The event parameter or user property name to register, e.g. 'article_author'. Must already be being sent by your tagging; creating the dimension does not start collection."
    },
    "displayName": {
      "type": "string",
      "description": "Human-readable name shown in GA4 reports. Max 82 characters."
    },
    "scope": {
      "type": "string",
      "enum": [
        "EVENT",
        "USER",
        "ITEM"
      ],
      "description": "EVENT for event parameters, USER for user properties, ITEM for ecommerce item parameters. Cannot be changed after creation."
    },
    "description": {
      "type": "string",
      "description": "Optional description. Max 150 characters."
    },
    "disallowAdsPersonalization": {
      "type": "boolean",
      "description": "USER-scoped only. Marks the dimension as NPA (no ads personalization)."
    }
  },
  "required": [
    "propertyId",
    "parameterName",
    "displayName",
    "scope"
  ],
  "additionalProperties": false
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "title": "Create a GA4 custom dimension",
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-ga4_create_key_event-503e5cec"></a>

## ga4_create_key_event

Handler: Google Analytics 4: creates a key event; deletion is not exposed.

```text
CHANGES CONFIGURATION. Marks an event as a key event (formerly 'conversion') on a GA4 property. REVERSIBLE, but not by this server: key events can be deleted, however deletion is deliberately not implemented here — remove it from the GA4 UI if unwanted. Marking a key event affects reporting and any Google Ads bidding that consumes it, so confirm intent with the user before calling.
```

[Source](https://github.com/jabeer4148-ops/google-measurement-mcp/blob/9feb8a8e505289c86448dd8adc7207cf4421507b/src/tools/ga4-admin-write.ts#L109-L203) · Schema: literal-source.

Exposure: Conditional: --enable-write or truthy GMCP_ENABLE_WRITE; no review token or confirm parameter.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "propertyId": {
      "type": "string",
      "description": "Numeric GA4 property ID."
    },
    "eventName": {
      "type": "string",
      "description": "The event name to mark as a key event, e.g. 'purchase' or 'generate_lead'. The event must already exist or be collected in future."
    },
    "countingMethod": {
      "type": "string",
      "enum": [
        "ONCE_PER_EVENT",
        "ONCE_PER_SESSION"
      ],
      "description": "ONCE_PER_EVENT counts every occurrence. ONCE_PER_SESSION counts at most one per session."
    }
  },
  "required": [
    "propertyId",
    "eventName",
    "countingMethod"
  ],
  "additionalProperties": false
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "title": "Create a GA4 key event",
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-ga4_update_key_event-9fe62a80"></a>

## ga4_update_key_event

Handler: Google Analytics 4: patches a key event counting method.

```text
CHANGES CONFIGURATION. Updates the counting method of an existing key event. REVERSIBLE: call again with the previous value to restore it. Requires the full resource name from ga4_list_key_events, not just the event name.
```

[Source](https://github.com/jabeer4148-ops/google-measurement-mcp/blob/9feb8a8e505289c86448dd8adc7207cf4421507b/src/tools/ga4-admin-write.ts#L158-L203) · Schema: literal-source.

Exposure: Conditional: --enable-write or truthy GMCP_ENABLE_WRITE; no review token or confirm parameter.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Full resource name of the key event, e.g. 'properties/123/keyEvents/456'. Get it from ga4_list_key_events."
    },
    "countingMethod": {
      "type": "string",
      "enum": [
        "ONCE_PER_EVENT",
        "ONCE_PER_SESSION"
      ],
      "description": "New counting method."
    }
  },
  "required": [
    "name",
    "countingMethod"
  ],
  "additionalProperties": false
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "title": "Update a GA4 key event",
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gsc_submit_sitemap-6d135a26"></a>

## gsc_submit_sitemap

Handler: Search Console: submits a sitemap URL after origin validation; deletion is not exposed.

```text
CHANGES CONFIGURATION. Submits a sitemap URL to Search Console for a property. REVERSIBLE, but not by this server: a submitted sitemap can be removed from the Search Console UI; deletion is deliberately not implemented here. Submitting does not force indexing and does not affect rankings — it tells Google where to find your URL list. Re-submitting an already-submitted sitemap is harmless and simply refreshes it.
```

[Source](https://github.com/jabeer4148-ops/google-measurement-mcp/blob/9feb8a8e505289c86448dd8adc7207cf4421507b/src/tools/gsc-write.ts#L27-L85) · Schema: literal-source.

Exposure: Conditional: --enable-write or truthy GMCP_ENABLE_WRITE; no review token or confirm parameter.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "siteUrl": {
      "type": "string",
      "description": "Exact Search Console property string. Call gsc_list_sites for valid values."
    },
    "feedpath": {
      "type": "string",
      "description": "Fully-qualified sitemap URL, e.g. 'https://example.com/sitemap.xml'. Must be within the property."
    }
  },
  "required": [
    "siteUrl",
    "feedpath"
  ],
  "additionalProperties": false
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "title": "Submit a sitemap to Search Console",
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_create_tag-c682840c"></a>

## gtm_create_tag

Handler: Creates a workspace tag; does not publish and has no per-call confirmation gate.

```text
CHANGES A WORKSPACE. Creates a tag in a Tag Manager workspace. REVERSIBLE: the tag exists only in the workspace and affects no live site until a version is created and explicitly published. Delete it from the GTM UI, or discard the workspace changes. Consider passing paused: true when creating a tag unattended. Requires a workspace path (or accountId + numeric containerId + workspaceId) and the GTM type code — call gtm_list_tags on an existing container to see the codes GTM uses.
```

[Source](https://github.com/jabeer4148-ops/google-measurement-mcp/blob/9feb8a8e505289c86448dd8adc7207cf4421507b/src/tools/gtm-write.ts#L31-L329) · Schema: literal-source.

Exposure: Conditional: --enable-write or truthy GMCP_ENABLE_WRITE; no review token or confirm parameter.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "path": {
      "type": "string",
      "description": "Full workspace path 'accounts/{a}/containers/{c}/workspaces/{w}'."
    },
    "accountId": {
      "type": "string",
      "description": "GTM account ID. Ignored if `path` is supplied."
    },
    "containerId": {
      "type": "string",
      "description": "Numeric internal container ID, not GTM-XXXXXXX."
    },
    "workspaceId": {
      "type": "string",
      "description": "Workspace ID from gtm_list_workspaces."
    },
    "name": {
      "type": "string",
      "description": "Tag name, unique within the workspace."
    },
    "type": {
      "type": "string",
      "description": "GTM tag type code, e.g. 'html' (Custom HTML), 'gaawe' (GA4 Event), 'gaawc' (GA4 Config). Call gtm_list_tags on an existing container to see the codes GTM uses."
    },
    "parameter": {
      "type": "array",
      "items": {
        "type": "object"
      },
      "description": "GTM parameter array: [{ type: 'template'|'boolean'|'integer'|'list'|'map', key: string, value: string }]. For a Custom HTML tag use [{ type: 'template', key: 'html', value: '<script>...</script>' }]."
    },
    "firingTriggerId": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Trigger IDs that fire this tag. Get them from gtm_list_triggers."
    },
    "blockingTriggerId": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Trigger IDs that block this tag."
    },
    "paused": {
      "type": "boolean",
      "description": "Create the tag paused. Recommended when an agent creates a tag unattended."
    },
    "notes": {
      "type": "string",
      "description": "Free-text notes stored on the tag."
    }
  },
  "required": [
    "name",
    "type"
  ],
  "additionalProperties": false
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "title": "Create a tag in a workspace",
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_update_tag-23807743"></a>

## gtm_update_tag

Handler: Reads and merges a workspace tag, preserves omitted fields, merges parameters by key, and updates with the current fingerprint.

```text
CHANGES A WORKSPACE. Updates a tag, MERGING your changes over its current configuration. REVERSIBLE: workspace-only until published, and GTM keeps version history. Fields you omit are PRESERVED — this server fetches the current tag and merges, because the raw GTM API replaces instead, which silently clears omitted fields. (Verified: omitting firingTriggerId on the raw API empties it, leaving a tag that looks normal in the GTM UI but never fires.) To deliberately CLEAR a field, pass it explicitly as an empty array — e.g. firingTriggerId: [] unwires the tag from all triggers. Omission preserves; explicit empty clears. `parameter` is merged by key, so you can change one parameter without resending the rest. Requires the full tag path from gtm_list_tags.
```

[Source](https://github.com/jabeer4148-ops/google-measurement-mcp/blob/9feb8a8e505289c86448dd8adc7207cf4421507b/src/tools/gtm-write.ts#L95-L329) · Schema: literal-source.

Exposure: Conditional: --enable-write or truthy GMCP_ENABLE_WRITE; no review token or confirm parameter.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "tagPath": {
      "type": "string",
      "description": "Full tag path 'accounts/{a}/containers/{c}/workspaces/{w}/tags/{id}'. Get it from gtm_list_tags."
    },
    "name": {
      "type": "string",
      "description": "New tag name."
    },
    "type": {
      "type": "string",
      "description": "GTM tag type code. Required by the API on update."
    },
    "parameter": {
      "type": "array",
      "items": {
        "type": "object"
      },
      "description": "GTM parameter array: [{ type: 'template'|'boolean'|'integer'|'list'|'map', key: string, value: string }]. For a Custom HTML tag use [{ type: 'template', key: 'html', value: '<script>...</script>' }]."
    },
    "firingTriggerId": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Replacement firing triggers."
    },
    "blockingTriggerId": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Replacement blocking triggers."
    },
    "paused": {
      "type": "boolean",
      "description": "Pause or unpause the tag."
    },
    "notes": {
      "type": "string",
      "description": "Free-text notes."
    }
  },
  "required": [
    "tagPath",
    "name",
    "type"
  ],
  "additionalProperties": false
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "title": "Update a tag in a workspace",
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_create_trigger-99da4322"></a>

## gtm_create_trigger

Handler: Creates a workspace trigger; does not publish and has no per-call confirmation gate.

```text
CHANGES A WORKSPACE. Creates a trigger in a Tag Manager workspace. REVERSIBLE: workspace-only until published. A trigger on its own fires nothing — it must be referenced by a tag's firingTriggerId.
```

[Source](https://github.com/jabeer4148-ops/google-measurement-mcp/blob/9feb8a8e505289c86448dd8adc7207cf4421507b/src/tools/gtm-write.ts#L205-L329) · Schema: literal-source.

Exposure: Conditional: --enable-write or truthy GMCP_ENABLE_WRITE; no review token or confirm parameter.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "path": {
      "type": "string",
      "description": "Full workspace path 'accounts/{a}/containers/{c}/workspaces/{w}'."
    },
    "accountId": {
      "type": "string",
      "description": "GTM account ID. Ignored if `path` is supplied."
    },
    "containerId": {
      "type": "string",
      "description": "Numeric internal container ID, not GTM-XXXXXXX."
    },
    "workspaceId": {
      "type": "string",
      "description": "Workspace ID from gtm_list_workspaces."
    },
    "name": {
      "type": "string",
      "description": "Trigger name, unique within the workspace."
    },
    "type": {
      "type": "string",
      "description": "GTM trigger type code, e.g. 'pageview', 'domReady', 'windowLoaded', 'click', 'linkClick', 'customEvent', 'formSubmission'."
    },
    "filter": {
      "type": "array",
      "items": {
        "type": "object"
      },
      "description": "Conditions: [{ type: 'equals'|'contains'|'startsWith'|..., parameter: [{type:'template',key:'arg0',value:'{{Page Path}}'},{type:'template',key:'arg1',value:'/checkout'}] }]."
    },
    "customEventFilter": {
      "type": "array",
      "items": {
        "type": "object"
      },
      "description": "For customEvent triggers: the event-name matching conditions."
    },
    "notes": {
      "type": "string",
      "description": "Free-text notes."
    }
  },
  "required": [
    "name",
    "type"
  ],
  "additionalProperties": false
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "title": "Create a trigger in a workspace",
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_create_version-50a805d7"></a>

## gtm_create_version

Handler: Creates a container version from a workspace, rejecting compiler/sync failures in its result; publication remains manual.

```text
CHANGES CONFIGURATION. Freezes the current workspace state into an immutable container version. SAFE: creating a version does NOT publish it and does NOT affect any live site. It is the staging step before gtm_preview_version. Returns the version ID needed to publish. Always supply `notes` — this is the audit trail for the change.
```

[Source](https://github.com/jabeer4148-ops/google-measurement-mcp/blob/9feb8a8e505289c86448dd8adc7207cf4421507b/src/tools/gtm-write.ts#L260-L329) · Schema: literal-source.

Exposure: Conditional: --enable-write or truthy GMCP_ENABLE_WRITE; no review token or confirm parameter.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "path": {
      "type": "string",
      "description": "Full workspace path 'accounts/{a}/containers/{c}/workspaces/{w}'."
    },
    "accountId": {
      "type": "string",
      "description": "GTM account ID. Ignored if `path` is supplied."
    },
    "containerId": {
      "type": "string",
      "description": "Numeric internal container ID, not GTM-XXXXXXX."
    },
    "workspaceId": {
      "type": "string",
      "description": "Workspace ID from gtm_list_workspaces."
    },
    "name": {
      "type": "string",
      "description": "Version name. Defaults to a timestamped name."
    },
    "notes": {
      "type": "string",
      "description": "Version notes. Strongly recommended — this is the audit trail for the change."
    }
  },
  "required": [],
  "additionalProperties": false
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "title": "Snapshot a workspace into a container version",
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>
