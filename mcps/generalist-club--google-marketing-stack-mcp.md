# generalist-club/google-marketing-stack-mcp

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/generalist-club/google-marketing-stack-mcp) · [Machine-readable inventory](../data/mcps/generalist-club--google-marketing-stack-mcp.json)

**44 extracted tools.** Flags unbound triggers, duplicate tag names, and variables absent from tag and trigger references.

Snapshot: 2026-10-13 · [91195f329182](https://github.com/generalist-club/google-marketing-stack-mcp/tree/91195f32918244d0c646313124804c95c6bd1d2f) · Method: mixed.

Exposure: All 44 tools registered unconditionally after successful Google authentication; GTM_ACCOUNT_ID/GTM_CONTAINER_ID are needed by container operations. workspaceId overrides GTM_WORKSPACE_ID, otherwise first workspace is selected.

## Limits

- Offline tools/list used original registration functions with inert auth object and SDK in-memory transport; no handlers or Google operations were executed. Utility registration was extracted verbatim from index.js to avoid startup authentication.
- Upstream package-lock.json is inconsistent with package.json (dotenv missing and Zod major mismatch); isolated npm install resolved package.json ranges. Resulting lockfile is saved in work directory, so schemas describe that resolved SDK/Zod implementation.
- GTM list handlers do not paginate; audits may be incomplete for paginated results and treat variables referenced only by other variables as unused. Live credentialed functionality was not verified.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`ga4_run_report`](#tool-ga4_run_report-a0a35566) | Other product | Google Analytics 4: calls properties.runReport and returns formatted API data or a caught API error. |
| [`ga4_realtime`](#tool-ga4_realtime-4ff73072) | Other product | Google Analytics 4: calls properties.runRealtimeReport and returns formatted API data or a caught API error. |
| [`ga4_traffic_overview`](#tool-ga4_traffic_overview-1bdf55e1) | Other product | Google Analytics 4: calls properties.runReport and returns formatted API data or a caught API error. |
| [`ga4_traffic_sources`](#tool-ga4_traffic_sources-3ba83706) | Other product | Google Analytics 4: calls properties.runReport and returns formatted API data or a caught API error. |
| [`ga4_channel_breakdown`](#tool-ga4_channel_breakdown-9e2e04e2) | Other product | Google Analytics 4: calls properties.runReport and returns formatted API data or a caught API error. |
| [`ga4_campaign_performance`](#tool-ga4_campaign_performance-90fcc943) | Other product | Google Analytics 4: calls properties.runReport and returns formatted API data or a caught API error. |
| [`ga4_page_performance`](#tool-ga4_page_performance-75dfb6ec) | Other product | Google Analytics 4: calls properties.runReport and returns formatted API data or a caught API error. |
| [`ga4_landing_pages`](#tool-ga4_landing_pages-324d1e1f) | Other product | Google Analytics 4: calls properties.runReport and returns formatted API data or a caught API error. |
| [`ga4_geo_breakdown`](#tool-ga4_geo_breakdown-53ba8a8d) | Other product | Google Analytics 4: calls properties.runReport and returns formatted API data or a caught API error. |
| [`ga4_device_breakdown`](#tool-ga4_device_breakdown-e7f0b972) | Other product | Google Analytics 4: calls properties.runReport and returns formatted API data or a caught API error. |
| [`ga4_events`](#tool-ga4_events-3abbb027) | Other product | Google Analytics 4: calls properties.runReport and returns formatted API data or a caught API error. |
| [`ga4_conversions`](#tool-ga4_conversions-86bd53fd) | Other product | Google Analytics 4: calls properties.runReport and returns formatted API data or a caught API error. |
| [`ga4_user_acquisition`](#tool-ga4_user_acquisition-dbf4b286) | Other product | Google Analytics 4: calls properties.runReport and returns formatted API data or a caught API error. |
| [`ga4_session_acquisition`](#tool-ga4_session_acquisition-a7531145) | Other product | Google Analytics 4: calls properties.runReport and returns formatted API data or a caught API error. |
| [`ga4_get_audiences`](#tool-ga4_get_audiences-b7a2bbc8) | Other product | Google Analytics 4: calls properties.audiences.list and returns formatted API data or a caught API error. |
| [`gsc_search_analytics`](#tool-gsc_search_analytics-dbefc78e) | Other product | Google Search Console: calls searchanalytics.query and returns formatted API data or a caught API error. |
| [`gsc_all_rows`](#tool-gsc_all_rows-2d373d0c) | Other product | Google Search Console: calls searchanalytics.query and returns formatted API data or a caught API error. |
| [`gsc_top_queries`](#tool-gsc_top_queries-f3356404) | Other product | Google Search Console: calls searchanalytics.query and returns formatted API data or a caught API error. |
| [`gsc_top_pages`](#tool-gsc_top_pages-f18fb1c2) | Other product | Google Search Console: calls searchanalytics.query and returns formatted API data or a caught API error. |
| [`gsc_by_country`](#tool-gsc_by_country-3debc428) | Other product | Google Search Console: calls searchanalytics.query and returns formatted API data or a caught API error. |
| [`gsc_by_device`](#tool-gsc_by_device-0a1c78c6) | Other product | Google Search Console: calls searchanalytics.query and returns formatted API data or a caught API error. |
| [`gsc_daily_performance`](#tool-gsc_daily_performance-38377b6c) | Other product | Google Search Console: calls searchanalytics.query and returns formatted API data or a caught API error. |
| [`gsc_query_page_combos`](#tool-gsc_query_page_combos-2cc53b6b) | Other product | Google Search Console: calls searchanalytics.query and returns formatted API data or a caught API error. |
| [`gsc_sitemaps`](#tool-gsc_sitemaps-624aa861) | Other product | Google Search Console: calls sitemaps.list and returns formatted API data or a caught API error. |
| [`sheets_read`](#tool-sheets_read-9133ad4c) | Other product | Google Sheets: calls spreadsheets.values.get and returns formatted API data or a caught API error. |
| [`sheets_write`](#tool-sheets_write-95c042c1) | Other product | Google Sheets: calls spreadsheets.values.update and returns formatted API data or a caught API error. |
| [`sheets_append`](#tool-sheets_append-7e848a14) | Other product | Google Sheets: calls spreadsheets.values.append and returns formatted API data or a caught API error. |
| [`sheets_info`](#tool-sheets_info-bb47a9ef) | Other product | Google Sheets: calls spreadsheets.get, map and returns formatted API data or a caught API error. |
| [`sheets_clear`](#tool-sheets_clear-511eb5c2) | Other product | Google Sheets: calls spreadsheets.values.clear and returns formatted API data or a caught API error. |
| [`gtm_list_accounts`](#tool-gtm_list_accounts-c5d9b27f) | GTM | Calls Tag Manager v2 accounts.list and returns accessible account IDs, names and paths. |
| [`gtm_list_containers`](#tool-gtm_list_containers-e45afd2b) | GTM | Calls Tag Manager v2 containers.list for GTM\_ACCOUNT\_ID and returns IDs, names and usage contexts. |
| [`gtm_list_workspaces`](#tool-gtm_list_workspaces-248ce86f) | GTM | Calls Tag Manager v2 workspaces.list for the configured account and container. |
| [`gtm_list_tags`](#tool-gtm_list_tags-b585bc12) | GTM | Lists workspace tags and returns their IDs, types, paused states and firing/blocking trigger IDs. |
| [`gtm_list_triggers`](#tool-gtm_list_triggers-16b41a3c) | GTM | Lists workspace triggers and returns their IDs, names and types. |
| [`gtm_list_variables`](#tool-gtm_list_variables-81705a80) | GTM | Lists workspace user-defined variables and returns IDs, names and types. |
| [`gtm_get_tag`](#tool-gtm_get_tag-3d242291) | GTM | Gets one workspace tag and returns parameters, trigger bindings, notes and monitoring metadata. |
| [`gtm_audit`](#tool-gtm_audit-b95baa17) | GTM | Lists tags, triggers and variables, then flags unbound triggers, duplicate tag names and variables absent from serialized tag/trigger references; variable-to-variable references are not checked. |
| [`psi_analyze`](#tool-psi_analyze-e565247e) | Other product | Calls PageSpeed Insights v5 and returns Lighthouse scores, lab metrics and available CrUX field metrics. |
| [`psi_core_web_vitals`](#tool-psi_core_web_vitals-ad30578e) | Other product | Calls PageSpeed Insights v5 and returns lab/field metrics and a performance score; lab metrics are display strings, without computed pass/fail thresholds. |
| [`psi_lighthouse`](#tool-psi_lighthouse-32eccb9e) | Other product | Calls PageSpeed Insights v5 and returns four category scores scaled to 0–100. |
| [`psi_compare`](#tool-psi_compare-8197f764) | Other product | Runs mobile and desktop PageSpeed Insights analyses concurrently and returns their scores and metrics. |
| [`psi_bulk`](#tool-psi_bulk-3c3fd463) | Other product | Calls PageSpeed Insights sequentially for each URL, collecting per-URL errors and delaying between requests. |
| [`get_status`](#tool-get_status-72cdbfdd) | Supporting | Calls Google OAuth2 v2 userinfo.get to report the connected email and available product groups. |
| [`reauthenticate`](#tool-reauthenticate-18df39fb) | Supporting | Deletes the saved OAuth token through clearToken; a server restart is required to begin login again. |

<a id="tool-ga4_run_report-a0a35566"></a>

## ga4_run_report

Handler: Google Analytics 4: calls properties.runReport and returns formatted API data or a caught API error.

```text
Run a fully custom GA4 report with any dimensions and metrics you choose. Use this when none of the specific report tools cover your exact needs. Dimensions and metrics must use GA4 API field names (e.g. "pagePath", "sessions").
```

[Source](https://github.com/generalist-club/google-marketing-stack-mcp/blob/91195f32918244d0c646313124804c95c6bd1d2f/src/tools/ga4.js#L61-L95) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "dimensions": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "GA4 dimension names, e.g. [\"pagePath\",\"sessionSource\"]"
    },
    "metrics": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "GA4 metric names, e.g. [\"sessions\",\"totalUsers\"]"
    },
    "startDate": {
      "type": "string",
      "description": "Start date — \"2024-01-01\" or \"28daysAgo\" (default)"
    },
    "endDate": {
      "type": "string",
      "description": "End date — \"2024-01-31\" or \"today\" (default)"
    },
    "limit": {
      "type": "number",
      "description": "Max rows to return (default: 20)"
    }
  },
  "required": [
    "dimensions",
    "metrics"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_realtime-4ff73072"></a>

## ga4_realtime

Handler: Google Analytics 4: calls properties.runRealtimeReport and returns formatted API data or a caught API error.

```text
Get live GA4 data for the last 30 minutes — active users, current pages, and real-time event counts. Use for dashboards and live monitoring.
```

[Source](https://github.com/generalist-club/google-marketing-stack-mcp/blob/91195f32918244d0c646313124804c95c6bd1d2f/src/tools/ga4.js#L95-L123) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "metrics": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Metric names, e.g. [\"activeUsers\",\"screenPageViews\"]"
    },
    "dimensions": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Optional dimensions, e.g. [\"pagePath\",\"country\"]"
    }
  },
  "required": [
    "metrics"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_traffic_overview-1bdf55e1"></a>

## ga4_traffic_overview

Handler: Google Analytics 4: calls properties.runReport and returns formatted API data or a caught API error.

```text
Get a high-level traffic summary: sessions, users, new users, pageviews, bounce rate, and average session duration. Use as a first step when assessing overall site performance for a date range.
```

[Source](https://github.com/generalist-club/google-marketing-stack-mcp/blob/91195f32918244d0c646313124804c95c6bd1d2f/src/tools/ga4.js#L123-L159) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "startDate": {
      "type": "string",
      "description": "Start date (default: 28daysAgo)"
    },
    "endDate": {
      "type": "string",
      "description": "End date (default: today)"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_traffic_sources-3ba83706"></a>

## ga4_traffic_sources

Handler: Google Analytics 4: calls properties.runReport and returns formatted API data or a caught API error.

```text
Break down traffic by source and medium (e.g. google/organic, direct/none). Use to understand where your sessions are coming from.
```

[Source](https://github.com/generalist-club/google-marketing-stack-mcp/blob/91195f32918244d0c646313124804c95c6bd1d2f/src/tools/ga4.js#L159-L191) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "startDate": {
      "type": "string",
      "description": "Start date (default: 28daysAgo)"
    },
    "endDate": {
      "type": "string",
      "description": "End date (default: today)"
    },
    "limit": {
      "type": "number",
      "description": "Max rows (default: 20)"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_channel_breakdown-9e2e04e2"></a>

## ga4_channel_breakdown

Handler: Google Analytics 4: calls properties.runReport and returns formatted API data or a caught API error.

```text
Show traffic split by GA4 default channel groupings: Organic Search, Direct, Paid Search, Email, Referral, Social, and others.
```

[Source](https://github.com/generalist-club/google-marketing-stack-mcp/blob/91195f32918244d0c646313124804c95c6bd1d2f/src/tools/ga4.js#L191-L226) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "startDate": {
      "type": "string",
      "description": "Start date (default: 28daysAgo)"
    },
    "endDate": {
      "type": "string",
      "description": "End date (default: today)"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_campaign_performance-90fcc943"></a>

## ga4_campaign_performance

Handler: Google Analytics 4: calls properties.runReport and returns formatted API data or a caught API error.

```text
Show performance by UTM campaign, source, and medium. Use to evaluate paid and organic campaign effectiveness.
```

[Source](https://github.com/generalist-club/google-marketing-stack-mcp/blob/91195f32918244d0c646313124804c95c6bd1d2f/src/tools/ga4.js#L226-L267) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "startDate": {
      "type": "string",
      "description": "Start date (default: 28daysAgo)"
    },
    "endDate": {
      "type": "string",
      "description": "End date (default: today)"
    },
    "limit": {
      "type": "number",
      "description": "Max rows (default: 20)"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_page_performance-75dfb6ec"></a>

## ga4_page_performance

Handler: Google Analytics 4: calls properties.runReport and returns formatted API data or a caught API error.

```text
Show pageviews, users, and engagement metrics per page path. Use to find your most visited content and identify underperforming pages.
```

[Source](https://github.com/generalist-club/google-marketing-stack-mcp/blob/91195f32918244d0c646313124804c95c6bd1d2f/src/tools/ga4.js#L267-L304) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "startDate": {
      "type": "string",
      "description": "Start date (default: 28daysAgo)"
    },
    "endDate": {
      "type": "string",
      "description": "End date (default: today)"
    },
    "limit": {
      "type": "number",
      "description": "Max rows (default: 20)"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_landing_pages-324d1e1f"></a>

## ga4_landing_pages

Handler: Google Analytics 4: calls properties.runReport and returns formatted API data or a caught API error.

```text
Show performance for landing pages — the first page seen per session. Includes sessions, users, bounce rate, and conversions per landing URL.
```

[Source](https://github.com/generalist-club/google-marketing-stack-mcp/blob/91195f32918244d0c646313124804c95c6bd1d2f/src/tools/ga4.js#L304-L341) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "startDate": {
      "type": "string",
      "description": "Start date (default: 28daysAgo)"
    },
    "endDate": {
      "type": "string",
      "description": "End date (default: today)"
    },
    "limit": {
      "type": "number",
      "description": "Max rows (default: 20)"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_geo_breakdown-53ba8a8d"></a>

## ga4_geo_breakdown

Handler: Google Analytics 4: calls properties.runReport and returns formatted API data or a caught API error.

```text
Break down traffic by country and city. Use to understand the geographic distribution of your audience.
```

[Source](https://github.com/generalist-club/google-marketing-stack-mcp/blob/91195f32918244d0c646313124804c95c6bd1d2f/src/tools/ga4.js#L341-L373) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "startDate": {
      "type": "string",
      "description": "Start date (default: 28daysAgo)"
    },
    "endDate": {
      "type": "string",
      "description": "End date (default: today)"
    },
    "limit": {
      "type": "number",
      "description": "Max rows (default: 20)"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_device_breakdown-e7f0b972"></a>

## ga4_device_breakdown

Handler: Google Analytics 4: calls properties.runReport and returns formatted API data or a caught API error.

```text
Show traffic split by device category: mobile, desktop, and tablet. Includes sessions, users, pageviews, and bounce rate per device type.
```

[Source](https://github.com/generalist-club/google-marketing-stack-mcp/blob/91195f32918244d0c646313124804c95c6bd1d2f/src/tools/ga4.js#L373-L408) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "startDate": {
      "type": "string",
      "description": "Start date (default: 28daysAgo)"
    },
    "endDate": {
      "type": "string",
      "description": "End date (default: today)"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_events-3abbb027"></a>

## ga4_events

Handler: Google Analytics 4: calls properties.runReport and returns formatted API data or a caught API error.

```text
List all GA4 events and their counts for a date range. Use to audit event tracking or understand which user interactions are most common.
```

[Source](https://github.com/generalist-club/google-marketing-stack-mcp/blob/91195f32918244d0c646313124804c95c6bd1d2f/src/tools/ga4.js#L408-L440) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "startDate": {
      "type": "string",
      "description": "Start date (default: 28daysAgo)"
    },
    "endDate": {
      "type": "string",
      "description": "End date (default: today)"
    },
    "limit": {
      "type": "number",
      "description": "Max rows (default: 20)"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_conversions-86bd53fd"></a>

## ga4_conversions

Handler: Google Analytics 4: calls properties.runReport and returns formatted API data or a caught API error.

```text
Show conversion counts by event name. Only events marked as key events (conversions) in GA4 will appear. Use to measure goal completions.
```

[Source](https://github.com/generalist-club/google-marketing-stack-mcp/blob/91195f32918244d0c646313124804c95c6bd1d2f/src/tools/ga4.js#L440-L473) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "startDate": {
      "type": "string",
      "description": "Start date (default: 28daysAgo)"
    },
    "endDate": {
      "type": "string",
      "description": "End date (default: today)"
    },
    "limit": {
      "type": "number",
      "description": "Max rows (default: 20)"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_user_acquisition-dbf4b286"></a>

## ga4_user_acquisition

Handler: Google Analytics 4: calls properties.runReport and returns formatted API data or a caught API error.

```text
Show where new users came from — first user source, medium, and campaign. Use to evaluate top-of-funnel acquisition channels.
```

[Source](https://github.com/generalist-club/google-marketing-stack-mcp/blob/91195f32918244d0c646313124804c95c6bd1d2f/src/tools/ga4.js#L473-L509) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "startDate": {
      "type": "string",
      "description": "Start date (default: 28daysAgo)"
    },
    "endDate": {
      "type": "string",
      "description": "End date (default: today)"
    },
    "limit": {
      "type": "number",
      "description": "Max rows (default: 20)"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_session_acquisition-a7531145"></a>

## ga4_session_acquisition

Handler: Google Analytics 4: calls properties.runReport and returns formatted API data or a caught API error.

```text
Show where sessions came from — session source, medium, and campaign. Use to evaluate which channels are driving the most traffic volume.
```

[Source](https://github.com/generalist-club/google-marketing-stack-mcp/blob/91195f32918244d0c646313124804c95c6bd1d2f/src/tools/ga4.js#L509-L546) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "startDate": {
      "type": "string",
      "description": "Start date (default: 28daysAgo)"
    },
    "endDate": {
      "type": "string",
      "description": "End date (default: today)"
    },
    "limit": {
      "type": "number",
      "description": "Max rows (default: 20)"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_get_audiences-b7a2bbc8"></a>

## ga4_get_audiences

Handler: Google Analytics 4: calls properties.audiences.list and returns formatted API data or a caught API error.

```text
List all audiences configured in this GA4 property — names, descriptions, and membership duration. Use to audit your audience setup.
```

[Source](https://github.com/generalist-club/google-marketing-stack-mcp/blob/91195f32918244d0c646313124804c95c6bd1d2f/src/tools/ga4.js#L546-L571) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {},
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gsc_search_analytics-dbefc78e"></a>

## gsc_search_analytics

Handler: Google Search Console: calls searchanalytics.query and returns formatted API data or a caught API error.

```text
Run a fully custom Search Console query with any combination of dimensions, date range, row limit, and optional dimension filters. Use when the specific GSC tools do not cover your exact breakdown.
```

[Source](https://github.com/generalist-club/google-marketing-stack-mcp/blob/91195f32918244d0c646313124804c95c6bd1d2f/src/tools/gsc.js#L71-L109) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "dimensions": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Dimensions to group by, e.g. [\"query\",\"page\",\"device\",\"country\",\"date\"]"
    },
    "startDate": {
      "type": "string",
      "description": "Start date YYYY-MM-DD (default: 28 days ago)"
    },
    "endDate": {
      "type": "string",
      "description": "End date YYYY-MM-DD (default: 3 days ago — GSC has a 3-day delay)"
    },
    "rowLimit": {
      "type": "number",
      "description": "Max rows to return (default: 20, max: 25000)"
    },
    "dimensionFilterGroups": {
      "type": "array",
      "description": "GSC filter groups, e.g. [{\"filters\":[{\"dimension\":\"query\",\"operator\":\"contains\",\"expression\":\"keyword\"}]}]"
    }
  },
  "required": [
    "dimensions"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gsc_all_rows-2d373d0c"></a>

## gsc_all_rows

Handler: Google Search Console: calls searchanalytics.query and returns formatted API data or a caught API error.

```text
Fetch the complete GSC dataset for a date range and dimension set, automatically paginating through all results. Capped at 25,000 rows. Use when you need the full dataset rather than a top-N slice.
```

[Source](https://github.com/generalist-club/google-marketing-stack-mcp/blob/91195f32918244d0c646313124804c95c6bd1d2f/src/tools/gsc.js#L109-L154) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "dimensions": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Dimensions to group by, e.g. [\"query\",\"page\"]"
    },
    "startDate": {
      "type": "string",
      "description": "Start date YYYY-MM-DD (default: 28 days ago)"
    },
    "endDate": {
      "type": "string",
      "description": "End date YYYY-MM-DD (default: 3 days ago)"
    }
  },
  "required": [
    "dimensions"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gsc_top_queries-f3356404"></a>

## gsc_top_queries

Handler: Google Search Console: calls searchanalytics.query and returns formatted API data or a caught API error.

```text
Show the top search queries driving clicks to your site, with impressions, CTR, and average position. Use to understand which keywords are performing best.
```

[Source](https://github.com/generalist-club/google-marketing-stack-mcp/blob/91195f32918244d0c646313124804c95c6bd1d2f/src/tools/gsc.js#L154-L186) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "startDate": {
      "type": "string",
      "description": "Start date YYYY-MM-DD (default: 28 days ago)"
    },
    "endDate": {
      "type": "string",
      "description": "End date YYYY-MM-DD (default: 3 days ago)"
    },
    "limit": {
      "type": "number",
      "description": "Max rows (default: 20)"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gsc_top_pages-f18fb1c2"></a>

## gsc_top_pages

Handler: Google Search Console: calls searchanalytics.query and returns formatted API data or a caught API error.

```text
Show the top pages on your site by organic search clicks, with impressions, CTR, and average position. Use to identify your best-performing content in search.
```

[Source](https://github.com/generalist-club/google-marketing-stack-mcp/blob/91195f32918244d0c646313124804c95c6bd1d2f/src/tools/gsc.js#L186-L218) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "startDate": {
      "type": "string",
      "description": "Start date YYYY-MM-DD (default: 28 days ago)"
    },
    "endDate": {
      "type": "string",
      "description": "End date YYYY-MM-DD (default: 3 days ago)"
    },
    "limit": {
      "type": "number",
      "description": "Max rows (default: 20)"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gsc_by_country-3debc428"></a>

## gsc_by_country

Handler: Google Search Console: calls searchanalytics.query and returns formatted API data or a caught API error.

```text
Break down search performance by country — clicks, impressions, CTR, and average position per country. Use to understand geographic search distribution.
```

[Source](https://github.com/generalist-club/google-marketing-stack-mcp/blob/91195f32918244d0c646313124804c95c6bd1d2f/src/tools/gsc.js#L218-L250) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "startDate": {
      "type": "string",
      "description": "Start date YYYY-MM-DD (default: 28 days ago)"
    },
    "endDate": {
      "type": "string",
      "description": "End date YYYY-MM-DD (default: 3 days ago)"
    },
    "limit": {
      "type": "number",
      "description": "Max rows (default: 20)"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gsc_by_device-0a1c78c6"></a>

## gsc_by_device

Handler: Google Search Console: calls searchanalytics.query and returns formatted API data or a caught API error.

```text
Show search performance split by device type: mobile, desktop, and tablet. Use to compare organic search behaviour across devices.
```

[Source](https://github.com/generalist-club/google-marketing-stack-mcp/blob/91195f32918244d0c646313124804c95c6bd1d2f/src/tools/gsc.js#L250-L281) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "startDate": {
      "type": "string",
      "description": "Start date YYYY-MM-DD (default: 28 days ago)"
    },
    "endDate": {
      "type": "string",
      "description": "End date YYYY-MM-DD (default: 3 days ago)"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gsc_daily_performance-38377b6c"></a>

## gsc_daily_performance

Handler: Google Search Console: calls searchanalytics.query and returns formatted API data or a caught API error.

```text
Show day-by-day search performance trend: clicks, impressions, CTR, and position for each date in the range. Use to spot traffic drops, spikes, or seasonal patterns.
```

[Source](https://github.com/generalist-club/google-marketing-stack-mcp/blob/91195f32918244d0c646313124804c95c6bd1d2f/src/tools/gsc.js#L281-L312) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "startDate": {
      "type": "string",
      "description": "Start date YYYY-MM-DD (default: 28 days ago)"
    },
    "endDate": {
      "type": "string",
      "description": "End date YYYY-MM-DD (default: 3 days ago)"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gsc_query_page_combos-2cc53b6b"></a>

## gsc_query_page_combos

Handler: Google Search Console: calls searchanalytics.query and returns formatted API data or a caught API error.

```text
Show which queries are driving traffic to which specific pages. Use to understand keyword-to-page mapping and find optimisation opportunities.
```

[Source](https://github.com/generalist-club/google-marketing-stack-mcp/blob/91195f32918244d0c646313124804c95c6bd1d2f/src/tools/gsc.js#L312-L344) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "startDate": {
      "type": "string",
      "description": "Start date YYYY-MM-DD (default: 28 days ago)"
    },
    "endDate": {
      "type": "string",
      "description": "End date YYYY-MM-DD (default: 3 days ago)"
    },
    "limit": {
      "type": "number",
      "description": "Max rows (default: 20)"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gsc_sitemaps-624aa861"></a>

## gsc_sitemaps

Handler: Google Search Console: calls sitemaps.list and returns formatted API data or a caught API error.

```text
List all sitemaps submitted to Search Console for this property, including submission date, last crawl, warning and error counts, and indexed page counts. Use to audit sitemap health.
```

[Source](https://github.com/generalist-club/google-marketing-stack-mcp/blob/91195f32918244d0c646313124804c95c6bd1d2f/src/tools/gsc.js#L344-L375) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {},
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-sheets_read-9133ad4c"></a>

## sheets_read

Handler: Google Sheets: calls spreadsheets.values.get and returns formatted API data or a caught API error.

```text
Read data from a Google Sheet. Accepts a full Sheets URL or a bare spreadsheet ID. Returns a 2D array of cell values. Defaults to the full sheet if no range is given.
```

[Source](https://github.com/generalist-club/google-marketing-stack-mcp/blob/91195f32918244d0c646313124804c95c6bd1d2f/src/tools/sheets.js#L44-L69) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "url_or_id": {
      "type": "string",
      "description": "Google Sheets URL or spreadsheet ID"
    },
    "range": {
      "type": "string",
      "description": "A1 notation range, e.g. \"Sheet1!A1:D50\". Defaults to all data."
    }
  },
  "required": [
    "url_or_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-sheets_write-95c042c1"></a>

## sheets_write

Handler: Google Sheets: calls spreadsheets.values.update and returns formatted API data or a caught API error.

```text
Write or overwrite data in a Google Sheet at a specific range. Accepts a full Sheets URL or spreadsheet ID. Values are interpreted as if typed by a user (formulas, dates, and numbers are parsed automatically).
```

[Source](https://github.com/generalist-club/google-marketing-stack-mcp/blob/91195f32918244d0c646313124804c95c6bd1d2f/src/tools/sheets.js#L69-L98) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "url_or_id": {
      "type": "string",
      "description": "Google Sheets URL or spreadsheet ID"
    },
    "range": {
      "type": "string",
      "description": "A1 notation range to write to, e.g. \"Sheet1!A1\""
    },
    "values": {
      "type": "array",
      "items": {
        "type": "array"
      },
      "description": "2D array of values to write, e.g. [[\"Name\",\"Score\"],[\"Alice\",95]]"
    }
  },
  "required": [
    "url_or_id",
    "range",
    "values"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-sheets_append-7e848a14"></a>

## sheets_append

Handler: Google Sheets: calls spreadsheets.values.append and returns formatted API data or a caught API error.

```text
Append new rows to the end of existing data in a Google Sheet. Rows are added after the last row with content — existing data is never overwritten.
```

[Source](https://github.com/generalist-club/google-marketing-stack-mcp/blob/91195f32918244d0c646313124804c95c6bd1d2f/src/tools/sheets.js#L98-L126) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "url_or_id": {
      "type": "string",
      "description": "Google Sheets URL or spreadsheet ID"
    },
    "range": {
      "type": "string",
      "description": "Sheet name or range indicating where to append, e.g. \"Sheet1\""
    },
    "values": {
      "type": "array",
      "items": {
        "type": "array"
      },
      "description": "2D array of rows to append, e.g. [[\"Bob\",88],[\"Carol\",91]]"
    }
  },
  "required": [
    "url_or_id",
    "range",
    "values"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-sheets_info-bb47a9ef"></a>

## sheets_info

Handler: Google Sheets: calls spreadsheets.get, map and returns formatted API data or a caught API error.

```text
Get metadata about a spreadsheet — its title, and for each sheet tab: the name, row count, and column count. Use before reading to confirm sheet names and size.
```

[Source](https://github.com/generalist-club/google-marketing-stack-mcp/blob/91195f32918244d0c646313124804c95c6bd1d2f/src/tools/sheets.js#L126-L157) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "url_or_id": {
      "type": "string",
      "description": "Google Sheets URL or spreadsheet ID"
    }
  },
  "required": [
    "url_or_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-sheets_clear-511eb5c2"></a>

## sheets_clear

Handler: Google Sheets: calls spreadsheets.values.clear and returns formatted API data or a caught API error.

```text
Clear all values in a range of cells in a Google Sheet. Cell formatting is preserved — only the content is removed.
```

[Source](https://github.com/generalist-club/google-marketing-stack-mcp/blob/91195f32918244d0c646313124804c95c6bd1d2f/src/tools/sheets.js#L157-L177) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "url_or_id": {
      "type": "string",
      "description": "Google Sheets URL or spreadsheet ID"
    },
    "range": {
      "type": "string",
      "description": "A1 notation range to clear, e.g. \"Sheet1!A2:D100\""
    }
  },
  "required": [
    "url_or_id",
    "range"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_list_accounts-c5d9b27f"></a>

## gtm_list_accounts

Handler: Calls Tag Manager v2 accounts.list and returns accessible account IDs, names and paths.

```text
List all GTM accounts accessible with the connected Google account. Use to find your GTM_ACCOUNT_ID if you do not know it.
```

[Source](https://github.com/generalist-club/google-marketing-stack-mcp/blob/91195f32918244d0c646313124804c95c6bd1d2f/src/tools/gtm.js#L81-L102) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {},
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_list_containers-e45afd2b"></a>

## gtm_list_containers

Handler: Calls Tag Manager v2 containers.list for GTM\_ACCOUNT\_ID and returns IDs, names and usage contexts.

```text
List all GTM containers in the configured account. Use to find your GTM_CONTAINER_ID and the public GTM-XXXXXX ID.
```

[Source](https://github.com/generalist-club/google-marketing-stack-mcp/blob/91195f32918244d0c646313124804c95c6bd1d2f/src/tools/gtm.js#L102-L127) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {},
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_list_workspaces-248ce86f"></a>

## gtm_list_workspaces

Handler: Calls Tag Manager v2 workspaces.list for the configured account and container.

```text
List all workspaces in the configured GTM container. Returns workspace IDs and names. Use to find the workspaceId for other GTM tools.
```

[Source](https://github.com/generalist-club/google-marketing-stack-mcp/blob/91195f32918244d0c646313124804c95c6bd1d2f/src/tools/gtm.js#L127-L151) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {},
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_list_tags-b585bc12"></a>

## gtm_list_tags

Handler: Lists workspace tags and returns their IDs, types, paused states and firing/blocking trigger IDs.

```text
List all tags in a GTM workspace — name, type, firing triggers, and paused state. Defaults to the first workspace if workspaceId is not provided.
```

[Source](https://github.com/generalist-club/google-marketing-stack-mcp/blob/91195f32918244d0c646313124804c95c6bd1d2f/src/tools/gtm.js#L151-L180) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "workspaceId": {
      "type": "string",
      "description": "Workspace ID (default: first workspace in the container)"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_list_triggers-16b41a3c"></a>

## gtm_list_triggers

Handler: Lists workspace triggers and returns their IDs, names and types.

```text
List all triggers in a GTM workspace — name, type, and trigger ID. Defaults to the first workspace if workspaceId is not provided.
```

[Source](https://github.com/generalist-club/google-marketing-stack-mcp/blob/91195f32918244d0c646313124804c95c6bd1d2f/src/tools/gtm.js#L180-L206) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "workspaceId": {
      "type": "string",
      "description": "Workspace ID (default: first workspace in the container)"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_list_variables-81705a80"></a>

## gtm_list_variables

Handler: Lists workspace user-defined variables and returns IDs, names and types.

```text
List all variables in a GTM workspace — name and type. Defaults to the first workspace if workspaceId is not provided.
```

[Source](https://github.com/generalist-club/google-marketing-stack-mcp/blob/91195f32918244d0c646313124804c95c6bd1d2f/src/tools/gtm.js#L206-L232) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "workspaceId": {
      "type": "string",
      "description": "Workspace ID (default: first workspace in the container)"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_get_tag-3d242291"></a>

## gtm_get_tag

Handler: Gets one workspace tag and returns parameters, trigger bindings, notes and monitoring metadata.

```text
Get full details for a single GTM tag by ID, including all parameters and trigger bindings. Use after gtm_list_tags to inspect a specific tag in depth.
```

[Source](https://github.com/generalist-club/google-marketing-stack-mcp/blob/91195f32918244d0c646313124804c95c6bd1d2f/src/tools/gtm.js#L232-L268) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "tagId": {
      "type": "string",
      "description": "Tag ID from gtm_list_tags"
    },
    "workspaceId": {
      "type": "string",
      "description": "Workspace ID (default: first workspace in the container)"
    }
  },
  "required": [
    "tagId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_audit-b95baa17"></a>

## gtm_audit

Handler: Lists tags, triggers and variables, then flags unbound triggers, duplicate tag names and variables absent from serialized tag/trigger references; variable-to-variable references are not checked.

```text
Audit a GTM workspace and return a structured report of issues: orphaned triggers (not used by any tag), duplicate tag names, and unused variables (not referenced by any tag or trigger). Defaults to the first workspace if workspaceId is not provided.
```

[Source](https://github.com/generalist-club/google-marketing-stack-mcp/blob/91195f32918244d0c646313124804c95c6bd1d2f/src/tools/gtm.js#L268-L337) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "workspaceId": {
      "type": "string",
      "description": "Workspace ID (default: first workspace in the container)"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-psi_analyze-e565247e"></a>

## psi_analyze

Handler: Calls PageSpeed Insights v5 and returns Lighthouse scores, lab metrics and available CrUX field metrics.

```text
Run a full PageSpeed Insights analysis on a URL. Returns Lighthouse category scores (performance, accessibility, best practices, SEO), lab Core Web Vitals (LCP, TBT, CLS, FCP, Speed Index, TTI), and real-world field data from CrUX if available. Defaults to mobile strategy.
```

[Source](https://github.com/generalist-club/google-marketing-stack-mcp/blob/91195f32918244d0c646313124804c95c6bd1d2f/src/tools/pagespeed.js#L102-L123) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "description": "URL to analyse, e.g. \"https://example.com/page\""
    },
    "strategy": {
      "type": "string",
      "enum": [
        "mobile",
        "desktop"
      ],
      "description": "Device strategy (default: mobile)"
    }
  },
  "required": [
    "url"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-psi_core_web_vitals-ad30578e"></a>

## psi_core_web_vitals

Handler: Calls PageSpeed Insights v5 and returns lab/field metrics and a performance score; lab metrics are display strings, without computed pass/fail thresholds.

```text
Return Core Web Vitals for a URL — both lab measurements (from Lighthouse) and real-world field data (from CrUX, p75). Includes pass/fail category for each metric. Use to diagnose CWV issues or check if a page passes the CWV thresholds.
```

[Source](https://github.com/generalist-club/google-marketing-stack-mcp/blob/91195f32918244d0c646313124804c95c6bd1d2f/src/tools/pagespeed.js#L123-L149) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "description": "URL to analyse"
    },
    "strategy": {
      "type": "string",
      "enum": [
        "mobile",
        "desktop"
      ],
      "description": "Device strategy (default: mobile)"
    }
  },
  "required": [
    "url"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-psi_lighthouse-32eccb9e"></a>

## psi_lighthouse

Handler: Calls PageSpeed Insights v5 and returns four category scores scaled to 0–100.

```text
Return the four Lighthouse category scores for a URL: performance, accessibility, best practices, and SEO. Scores are 0–100. Use for a quick quality check or to compare pages without needing the full Core Web Vitals breakdown.
```

[Source](https://github.com/generalist-club/google-marketing-stack-mcp/blob/91195f32918244d0c646313124804c95c6bd1d2f/src/tools/pagespeed.js#L149-L169) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "description": "URL to analyse"
    },
    "strategy": {
      "type": "string",
      "enum": [
        "mobile",
        "desktop"
      ],
      "description": "Device strategy (default: mobile)"
    }
  },
  "required": [
    "url"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-psi_compare-8197f764"></a>

## psi_compare

Handler: Runs mobile and desktop PageSpeed Insights analyses concurrently and returns their scores and metrics.

```text
Analyse the same URL on both mobile and desktop simultaneously and return scores and Core Web Vitals side by side. Use to understand the performance gap between mobile and desktop experiences.
```

[Source](https://github.com/generalist-club/google-marketing-stack-mcp/blob/91195f32918244d0c646313124804c95c6bd1d2f/src/tools/pagespeed.js#L169-L195) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "description": "URL to analyse on both strategies"
    }
  },
  "required": [
    "url"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-psi_bulk-3c3fd463"></a>

## psi_bulk

Handler: Calls PageSpeed Insights sequentially for each URL, collecting per-URL errors and delaying between requests.

```text
Analyse multiple URLs sequentially and return scores and Core Web Vitals for each. Requests are spaced 2 seconds apart to avoid rate limiting. Set PSI_API_KEY in your environment for higher rate limits — without a key, bulk analysis of more than a few URLs may be throttled.
```

[Source](https://github.com/generalist-club/google-marketing-stack-mcp/blob/91195f32918244d0c646313124804c95c6bd1d2f/src/tools/pagespeed.js#L195-L225) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "urls": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "List of URLs to analyse"
    },
    "strategy": {
      "type": "string",
      "enum": [
        "mobile",
        "desktop"
      ],
      "description": "Device strategy (default: mobile)"
    }
  },
  "required": [
    "urls"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-get_status-72cdbfdd"></a>

## get_status

Handler: Calls Google OAuth2 v2 userinfo.get to report the connected email and available product groups.

```text
Check authentication status and confirm which Google account is connected. Run this first to verify the MCP server is working correctly.
```

[Source](https://github.com/generalist-club/google-marketing-stack-mcp/blob/91195f32918244d0c646313124804c95c6bd1d2f/src/index.js#L44-L79) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {},
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-reauthenticate-18df39fb"></a>

## reauthenticate

Handler: Deletes the saved OAuth token through clearToken; a server restart is required to begin login again.

```text
Clear the stored Google token and restart the login flow. Use this if you need to switch accounts or if authentication has stopped working.
```

[Source](https://github.com/generalist-club/google-marketing-stack-mcp/blob/91195f32918244d0c646313124804c95c6bd1d2f/src/index.js#L79-L100) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {},
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>
