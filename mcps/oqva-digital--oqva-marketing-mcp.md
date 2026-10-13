# oqva-digital/oqva-marketing-mcp

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/oqva-digital/oqva-marketing-mcp) · [Machine-readable inventory](../data/mcps/oqva-digital--oqva-marketing-mcp.json)

**49 extracted tools.** Send GTM API requests with a chosen HTTP method, relative path, optional query, and raw JSON request body.

Snapshot: 2026-10-13 · [e9da7a025d1a](https://github.com/oqva-digital/oqva-marketing-mcp/tree/e9da7a025d1afa44f7e2d9510bd9c59bc836d9d0) · Method: tools/list.

Exposure: All 49 tools registered unconditionally and always listed; individual calls require their respective Google OAuth, Meta token, Places API key or DataForSEO credentials. Google autocomplete needs no credentials.

## Limits

- Catalog obtained offline from an isolated unmodified source copy using Node 24 TypeScript stripping, empty environment and isolated HOME; network fetch was blocked and only tools/list was invoked. Remote API functionality was not executed.
- Schemas are preserved verbatim: descriptive defaults and limits are not JSON Schema constraints; gbp_update_attributes intentionally has an unrestricted array without items, and gbp_update_location has an unrestricted object. Server does not perform JSON Schema validation before dispatch.
- GTM is a generic path proxy rather than enumerated resource-specific tools; body is a raw JSON string and its shape is intentionally unconstrained. Availability of arbitrary paths depends on Google API support and granted OAuth scopes.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`config_status`](#tool-config_status-baf5af47) | Other product | Reports configuration presence and configured resource IDs for the shared marketing server without revealing credentials. |
| [`gsc_list_sites`](#tool-gsc_list_sites-69b36040) | Other product | Google Search Console: lists accessible properties via sites GET using user OAuth, despite the service-account wording. |
| [`gsc_query`](#tool-gsc_query-ef764d01) | Other product | Google Search Console: posts date, dimensions, row limit and optional single dimension filter to searchAnalytics/query. |
| [`gsc_list_sitemaps`](#tool-gsc_list_sitemaps-e4a908e7) | Other product | Google Search Console: lists submitted sitemaps for a configured or supplied property. |
| [`gsc_inspect_url`](#tool-gsc_inspect_url-2d598234) | Other product | Google Search Console: posts an inspection URL and property to the URL Inspection API. |
| [`ga4_run_report`](#tool-ga4_run_report-a0a35566) | Other product | Google Analytics 4: posts metrics, dimensions, date ranges and optional exact dimension filter to runReport. |
| [`ga4_realtime`](#tool-ga4_realtime-4ff73072) | Other product | Google Analytics 4: posts metrics and dimensions to runRealtimeReport. |
| [`gbp_list_accounts`](#tool-gbp_list_accounts-d0179a8b) | Other product | Google Business Profile: lists accounts through Account Management API. |
| [`gbp_list_locations`](#tool-gbp_list_locations-e79f9888) | Other product | Google Business Profile: lists account locations using a fixed read mask. |
| [`gbp_get_location`](#tool-gbp_get_location-710e9df3) | Other product | Google Business Profile: gets one location with a supplied or comprehensive default read mask. |
| [`gbp_search_categories`](#tool-gbp_search_categories-8d1ec76b) | Other product | Google Business Profile: searches category display names with region and language filters. |
| [`gbp_search_places`](#tool-gbp_search_places-395a58db) | Other product | Google Places: posts text search with API key and returns place IDs, names and addresses for Business Profile service areas. |
| [`gbp_update_location`](#tool-gbp_update_location-01c5c418) | Other product | Google Business Profile: patches an arbitrary partial Location object with updateMask and optional validateOnly. |
| [`gbp_list_available_attributes`](#tool-gbp_list_available_attributes-ea809a5e) | Other product | Google Business Profile: lists accepted attribute metadata for a location. |
| [`gbp_get_attributes`](#tool-gbp_get_attributes-aad8c650) | Other product | Google Business Profile: gets attributes set on a location. |
| [`gbp_update_attributes`](#tool-gbp_update_attributes-98990e3a) | Other product | Google Business Profile: patches the supplied unrestricted attributes array with attributeMask. |
| [`gbp_list_posts`](#tool-gbp_list_posts-ed8a75f2) | Other product | Google Business Profile: lists localPosts using legacy v4 API. |
| [`gbp_create_post`](#tool-gbp_create_post-3a103ac0) | Other product | Google Business Profile: publishes a STANDARD localPost with summary and optional call to action and photo. |
| [`gbp_delete_post`](#tool-gbp_delete_post-ce4a5bc4) | Other product | Google Business Profile: deletes a localPost by full resource name. |
| [`gbp_performance`](#tool-gbp_performance-7c929fb7) | Other product | Google Business Profile: reads daily metric time series with decomposed start and end dates. |
| [`gbp_list_reviews`](#tool-gbp_list_reviews-0595b368) | Other product | Google Business Profile: lists reviews using legacy v4 API. |
| [`gbp_reply_review`](#tool-gbp_reply_review-849066cf) | Other product | Google Business Profile: replaces the public reply on a review using PUT. |
| [`meta_graph`](#tool-meta_graph-0a5972d3) | Other product | Meta Graph / Marketing API: forwards supplied GET, POST or DELETE path and string parameters. |
| [`meta_page_insights`](#tool-meta_page_insights-98ed8e15) | Other product | Meta Facebook: reads configured or supplied Page insights metrics over an optional date range. |
| [`meta_ad_insights`](#tool-meta_ad_insights-6c329c3d) | Other product | Meta Marketing API: reads ad account insights with fields, date preset and aggregation level. |
| [`meta_list_ad_accounts`](#tool-meta_list_ad_accounts-2d800f0a) | Other product | Meta Marketing API: lists accessible ad accounts with status, spend and business fields. |
| [`meta_list_businesses`](#tool-meta_list_businesses-d8bf4808) | Other product | Meta Business Manager: lists accessible businesses. |
| [`meta_list_pages`](#tool-meta_list_pages-b61d2ea3) | Other product | Meta Facebook: lists managed Pages with category, fan count and tasks. |
| [`meta_list_campaigns`](#tool-meta_list_campaigns-3c69813f) | Other product | Meta Marketing API: lists campaigns with status, budget, objective and timestamps. |
| [`meta_update_campaign`](#tool-meta_update_campaign-0d5ed993) | Other product | Meta Marketing API: posts a campaign status change. |
| [`meta_list_custom_audiences`](#tool-meta_list_custom_audiences-f587da4a) | Other product | Meta Marketing API: lists custom audiences including subtype, size bounds and operation status. |
| [`meta_delete_custom_audience`](#tool-meta_delete_custom_audience-2a3d1bd6) | Other product | Meta Marketing API: deletes a custom audience. |
| [`meta_list_pixels`](#tool-meta_list_pixels-0351ba0f) | Other product | Meta Marketing API: lists ad pixels with last fired time and availability. |
| [`ga4_account_summaries`](#tool-ga4_account_summaries-9d113831) | Other product | Google Analytics 4 Admin: lists accessible account summaries and property IDs. |
| [`ga4_list_key_events`](#tool-ga4_list_key_events-ac1a65f2) | Other product | Google Analytics 4 Admin: lists property key events. |
| [`ga4_create_key_event`](#tool-ga4_create_key_event-503e5cec) | Other product | Google Analytics 4 Admin: creates a key event with eventName and countingMethod. |
| [`ga4_list_custom_dimensions`](#tool-ga4_list_custom_dimensions-75905509) | Other product | Google Analytics 4 Admin: lists property custom dimensions. |
| [`ga4_create_custom_dimension`](#tool-ga4_create_custom_dimension-2ce8700e) | Other product | Google Analytics 4 Admin: creates a custom dimension with parameterName, displayName and scope. |
| [`ga4_list_data_streams`](#tool-ga4_list_data_streams-e2cea14d) | Other product | Google Analytics 4 Admin: lists property data streams. |
| [`ga4_admin`](#tool-ga4_admin-e28e677c) | Other product | Google Analytics 4 Admin: forwards arbitrary v1beta method/path, optional query string and body. |
| [`gsc_submit_sitemap`](#tool-gsc_submit_sitemap-6d135a26) | Other product | Google Search Console: submits a sitemap with PUT. |
| [`gsc_delete_sitemap`](#tool-gsc_delete_sitemap-adedc75d) | Other product | Google Search Console: deletes a sitemap with DELETE. |
| [`gsc_add_site`](#tool-gsc_add_site-a50624c4) | Other product | Google Search Console: adds a property with PUT; does not verify ownership. |
| [`gsc_request_indexing`](#tool-gsc_request_indexing-7c0632fb) | Other product | Google Indexing API: posts a URL\_UPDATED or URL\_DELETED notification; unrelated to GTM. |
| [`gtm`](#tool-gtm-9e005213) | GTM | Forwards GET, POST, PUT or DELETE to Google Tag Manager API v2 with the supplied relative path, raw JSON body and optional query string using OAuth. |
| [`kw_volume`](#tool-kw_volume-e610713b) | Other product | DataForSEO: deduplicates and batches keywords in groups of 500 for Google Ads search volume and returns volume, CPC, competition and monthly trends. |
| [`kw_serp`](#tool-kw_serp-c466d592) | Other product | DataForSEO: requests live Google SERP depth 20 and returns the first 10 organic results plus paid-result presence. |
| [`kw_suggest`](#tool-kw_suggest-989332e8) | Other product | Google autocomplete: mines the seed and alphabet expansions, recursively probes fresh suggestions up to clamped depth 3 and returns sorted unique results. |
| [`kw_radar`](#tool-kw_radar-523f8958) | Other product | DataForSEO and Google autocomplete: reads a local keyword cluster file, sweeps volume/SERP/suggestions, writes a dated snapshot and returns changes since the previous snapshot. |

<a id="tool-config_status-baf5af47"></a>

## config_status

Handler: Reports configuration presence and configured resource IDs for the shared marketing server without revealing credentials.

```text
Report which marketing data sources are configured (no secrets revealed). Call first if a tool says 'not configured'.
```

[Source](https://github.com/oqva-digital/oqva-marketing-mcp/blob/e9da7a025d1afa44f7e2d9510bd9c59bc836d9d0/src/index.ts#L256-L262) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {},
  "required": []
}
```

</details>

<a id="tool-gsc_list_sites-69b36040"></a>

## gsc_list_sites

Handler: Google Search Console: lists accessible properties via sites GET using user OAuth, despite the service-account wording.

```text
List Search Console properties the service account can access (confirm the SA is granted + the exact siteUrl).
```

[Source](https://github.com/oqva-digital/oqva-marketing-mcp/blob/e9da7a025d1afa44f7e2d9510bd9c59bc836d9d0/src/index.ts#L263-L265) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {},
  "required": []
}
```

</details>

<a id="tool-gsc_query-ef764d01"></a>

## gsc_query

Handler: Google Search Console: posts date, dimensions, row limit and optional single dimension filter to searchAnalytics/query.

```text
Search Console Search Analytics — clicks / impressions / CTR / position grouped by dimension(s). The core SEO tool (same data as the GSC Performance export, but live + filterable).
```

[Source](https://github.com/oqva-digital/oqva-marketing-mcp/blob/e9da7a025d1afa44f7e2d9510bd9c59bc836d9d0/src/index.ts#L267-L304) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "startDate": {
      "type": "string",
      "description": "YYYY-MM-DD"
    },
    "endDate": {
      "type": "string",
      "description": "YYYY-MM-DD"
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
          "date",
          "searchAppearance"
        ]
      },
      "description": "Group by these; omit for site totals."
    },
    "siteUrl": {
      "type": "string",
      "description": "Defaults to GSC_SITE_URL. URL-prefix (trailing slash) or sc-domain: form."
    },
    "rowLimit": {
      "type": "integer",
      "description": "Default 1000 (max 25000)."
    },
    "searchType": {
      "type": "string",
      "enum": [
        "web",
        "image",
        "video",
        "news",
        "discover",
        "googleNews"
      ],
      "description": "Result type to report. Default web."
    },
    "filterDimension": {
      "type": "string",
      "enum": [
        "query",
        "page",
        "country",
        "device"
      ],
      "description": "Optional single filter."
    },
    "filterOperator": {
      "type": "string",
      "enum": [
        "equals",
        "contains",
        "notContains",
        "includingRegex",
        "excludingRegex"
      ],
      "description": "How filterExpression is matched against filterDimension. Default equals."
    },
    "filterExpression": {
      "type": "string",
      "description": "The value filterDimension is matched against. The filter applies when filterDimension and filterExpression are both set."
    }
  },
  "required": [
    "startDate",
    "endDate"
  ]
}
```

</details>

<a id="tool-gsc_list_sitemaps-e4a908e7"></a>

## gsc_list_sitemaps

Handler: Google Search Console: lists submitted sitemaps for a configured or supplied property.

```text
List submitted sitemaps + processing status for a property.
```

[Source](https://github.com/oqva-digital/oqva-marketing-mcp/blob/e9da7a025d1afa44f7e2d9510bd9c59bc836d9d0/src/index.ts#L306-L310) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "siteUrl": {
      "type": "string",
      "description": "Search Console property: URL-prefix form with its trailing slash, or sc-domain:<domain>. Defaults to GSC_SITE_URL."
    }
  },
  "required": []
}
```

</details>

<a id="tool-gsc_inspect_url-2d598234"></a>

## gsc_inspect_url

Handler: Google Search Console: posts an inspection URL and property to the URL Inspection API.

```text
URL Inspection — index/coverage status, last crawl, canonical, mobile usability for one URL.
```

[Source](https://github.com/oqva-digital/oqva-marketing-mcp/blob/e9da7a025d1afa44f7e2d9510bd9c59bc836d9d0/src/index.ts#L312-L324) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "inspectionUrl": {
      "type": "string",
      "description": "Full URL to inspect."
    },
    "siteUrl": {
      "type": "string",
      "description": "Search Console property: URL-prefix form with its trailing slash, or sc-domain:<domain>. Defaults to GSC_SITE_URL."
    }
  },
  "required": [
    "inspectionUrl"
  ]
}
```

</details>

<a id="tool-ga4_run_report-a0a35566"></a>

## ga4_run_report

Handler: Google Analytics 4: posts metrics, dimensions, date ranges and optional exact dimension filter to runReport.

```text
GA4 Data API runReport — sessions, users, conversions, events, channels. Flexible dimensions + metrics over a date range.
```

[Source](https://github.com/oqva-digital/oqva-marketing-mcp/blob/e9da7a025d1afa44f7e2d9510bd9c59bc836d9d0/src/index.ts#L327-L357) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "startDate": {
      "type": "string",
      "description": "YYYY-MM-DD, or 'NdaysAgo' / 'today' / 'yesterday'."
    },
    "endDate": {
      "type": "string",
      "description": "YYYY-MM-DD, or 'NdaysAgo' / 'today' / 'yesterday'."
    },
    "metrics": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "e.g. ['sessions','activeUsers','conversions','eventCount']."
    },
    "dimensions": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "e.g. ['date','sessionDefaultChannelGroup','deviceCategory','eventName']."
    },
    "propertyId": {
      "type": "string",
      "description": "Numeric GA4 property id; defaults to GA4_PROPERTY_ID (NOT the G-XXXX measurement id)."
    },
    "limit": {
      "type": "integer",
      "description": "Maximum rows returned. Defaults to the API's 10,000."
    },
    "dimensionFilter": {
      "type": "string",
      "description": "Dimension name to filter on (exact match)."
    },
    "dimensionFilterValue": {
      "type": "string",
      "description": "The exact value dimensionFilter must equal. The filter applies when dimensionFilter and dimensionFilterValue are both set."
    }
  },
  "required": [
    "startDate",
    "endDate",
    "metrics"
  ]
}
```

</details>

<a id="tool-ga4_realtime-4ff73072"></a>

## ga4_realtime

Handler: Google Analytics 4: posts metrics and dimensions to runRealtimeReport.

```text
GA4 realtime report (active users in the last 30 min).
```

[Source](https://github.com/oqva-digital/oqva-marketing-mcp/blob/e9da7a025d1afa44f7e2d9510bd9c59bc836d9d0/src/index.ts#L359-L372) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "propertyId": {
      "type": "string",
      "description": "Numeric GA4 property id (the property id, distinct from the G- measurement id). Defaults to GA4_PROPERTY_ID."
    },
    "metrics": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Default ['activeUsers']."
    },
    "dimensions": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Realtime dimension names to group by; omit for totals."
    }
  },
  "required": []
}
```

</details>

<a id="tool-gbp_list_accounts-d0179a8b"></a>

## gbp_list_accounts

Handler: Google Business Profile: lists accounts through Account Management API.

```text
[GBP] List Business Profile accounts. NOTE: the Business Profile APIs require Google to approve API access (allowlist) first.
```

[Source](https://github.com/oqva-digital/oqva-marketing-mcp/blob/e9da7a025d1afa44f7e2d9510bd9c59bc836d9d0/src/index.ts#L375-L377) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {},
  "required": []
}
```

</details>

<a id="tool-gbp_list_locations-e79f9888"></a>

## gbp_list_locations

Handler: Google Business Profile: lists account locations using a fixed read mask.

```text
[GBP] List locations for an account (name, title, address, website, categories).
```

[Source](https://github.com/oqva-digital/oqva-marketing-mcp/blob/e9da7a025d1afa44f7e2d9510bd9c59bc836d9d0/src/index.ts#L379-L383) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account": {
      "type": "string",
      "description": "accounts/123; defaults to GBP_ACCOUNT_ID."
    }
  },
  "required": []
}
```

</details>

<a id="tool-gbp_get_location-710e9df3"></a>

## gbp_get_location

Handler: Google Business Profile: gets one location with a supplied or comprehensive default read mask.

```text
[GBP] Read ONE location in full — description, hours, service area, service items and everything gbp_list_locations omits. Call this before any gbp_update_location so you know the current value of what you are about to overwrite.
```

[Source](https://github.com/oqva-digital/oqva-marketing-mcp/blob/e9da7a025d1afa44f7e2d9510bd9c59bc836d9d0/src/index.ts#L393-L398) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "location": {
      "type": "string",
      "description": "locations/123"
    },
    "readMask": {
      "type": "string",
      "description": "Comma-separated field paths. Defaults to every readable field."
    }
  },
  "required": [
    "location"
  ]
}
```

</details>

<a id="tool-gbp_search_categories-8d1ec76b"></a>

## gbp_search_categories

Handler: Google Business Profile: searches category display names with region and language filters.

```text
[GBP] Resolve a category display name to the resource name gbp_update_location needs — e.g. 'Cleaners' becomes 'categories/gcid:cleaners'. Categories are referenced by id, never by display text.
```

[Source](https://github.com/oqva-digital/oqva-marketing-mcp/blob/e9da7a025d1afa44f7e2d9510bd9c59bc836d9d0/src/index.ts#L400-L414) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "query": {
      "type": "string",
      "description": "Display name to search, e.g. 'Cleaners'."
    },
    "regionCode": {
      "type": "string",
      "description": "ISO 3166-1 alpha-2. Default GB."
    },
    "languageCode": {
      "type": "string",
      "description": "BCP 47. Default en."
    }
  },
  "required": [
    "query"
  ]
}
```

</details>

<a id="tool-gbp_search_places-395a58db"></a>

## gbp_search_places

Handler: Google Places: posts text search with API key and returns place IDs, names and addresses for Business Profile service areas.

```text
[GBP] Find Google Place IDs by place name, through the Places API (New) with GOOGLE_MAPS_API_KEY. Returns each match's id, display name and formatted address, up to maxResults. These ids are the placeId values that gbp_update_location's serviceArea entries carry.
```

[Source](https://github.com/oqva-digital/oqva-marketing-mcp/blob/e9da7a025d1afa44f7e2d9510bd9c59bc836d9d0/src/index.ts#L416-L445) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "query": {
      "type": "string",
      "description": "Place to find, e.g. 'Kidlington, Oxfordshire, UK'."
    },
    "regionCode": {
      "type": "string",
      "description": "ISO 3166-1 alpha-2 bias. Default GB."
    },
    "maxResults": {
      "type": "integer",
      "description": "Default 5."
    }
  },
  "required": [
    "query"
  ]
}
```

</details>

<a id="tool-gbp_update_location-01c5c418"></a>

## gbp_update_location

Handler: Google Business Profile: patches an arbitrary partial Location object with updateMask and optional validateOnly.

```text
[GBP][WRITE] Update a location's public business information — categories, phoneNumbers, websiteUri, profile (description), regularHours, serviceArea, serviceItems, title, storefrontAddress. updateMask REPLACES each masked field wholesale, so send the complete value: masking 'categories' while sending only additionalCategories WIPES the primary category. Read the current value with gbp_get_location first and merge. serviceArea places each need a placeId from gbp_search_places: the API accepts an entry that lacks a valid placeId, reports success, and leaves that locality off the profile, so read serviceArea back with gbp_get_location after the write. This edits a public, client-visible profile — run with validateOnly=true first and confirm with the owner before the real write.
```

[Source](https://github.com/oqva-digital/oqva-marketing-mcp/blob/e9da7a025d1afa44f7e2d9510bd9c59bc836d9d0/src/index.ts#L447-L474) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "location": {
      "type": "string",
      "description": "locations/123"
    },
    "updateMask": {
      "type": "string",
      "description": "Comma-separated field paths to replace, e.g. 'categories' or 'phoneNumbers,websiteUri'. Mask the PARENT field — 'categories', not 'categories.additionalCategories'."
    },
    "update": {
      "type": "object",
      "description": "Partial Location body carrying the new values, e.g. {\"categories\":{\"primaryCategory\":{\"name\":\"categories/gcid:house_cleaning_service\"},\"additionalCategories\":[{\"name\":\"categories/gcid:cleaners\"}]}}"
    },
    "validateOnly": {
      "type": "boolean",
      "description": "Dry run — Google validates and returns the would-be result WITHOUT saving. Default false."
    }
  },
  "required": [
    "location",
    "updateMask",
    "update"
  ]
}
```

</details>

<a id="tool-gbp_list_available_attributes-ea809a5e"></a>

## gbp_list_available_attributes

Handler: Google Business Profile: lists accepted attribute metadata for a location.

```text
[GBP] The attributes Google will accept for a location's category — id, valueType (BOOL/ENUM/URL/REPEATED_ENUM), display name and any enum options. Attributes not in this list are rejected; the list depends on the location's primary category, so re-check after any category change.
```

[Source](https://github.com/oqva-digital/oqva-marketing-mcp/blob/e9da7a025d1afa44f7e2d9510bd9c59bc836d9d0/src/index.ts#L476-L481) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "location": {
      "type": "string",
      "description": "locations/123"
    }
  },
  "required": [
    "location"
  ]
}
```

</details>

<a id="tool-gbp_get_attributes-aad8c650"></a>

## gbp_get_attributes

Handler: Google Business Profile: gets attributes set on a location.

```text
[GBP] The attributes currently SET on a location. An empty result means none are set — not an error. Read this before gbp_update_attributes so you know what a masked write will replace.
```

[Source](https://github.com/oqva-digital/oqva-marketing-mcp/blob/e9da7a025d1afa44f7e2d9510bd9c59bc836d9d0/src/index.ts#L483-L488) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "location": {
      "type": "string",
      "description": "locations/123"
    }
  },
  "required": [
    "location"
  ]
}
```

</details>

<a id="tool-gbp_update_attributes-98990e3a"></a>

## gbp_update_attributes

Handler: Google Business Profile: patches the supplied unrestricted attributes array with attributeMask.

```text
[GBP][WRITE] Set or clear attributes on a location. attributeMask lists the attribute ids being changed (e.g. 'attributes/url_appointment,attributes/offers_online_estimates'); a masked id with no matching entry in the body is CLEARED. Value shape depends on valueType — BOOL/ENUM: {name, values:[...]}; URL: {name, uriValues:[{uri}]}. Only ids from gbp_list_available_attributes save; anything else 400s. This edits a public, client-visible profile — confirm with the owner before writing, and read back with gbp_get_attributes after.
```

[Source](https://github.com/oqva-digital/oqva-marketing-mcp/blob/e9da7a025d1afa44f7e2d9510bd9c59bc836d9d0/src/index.ts#L490-L510) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "location": {
      "type": "string",
      "description": "locations/123"
    },
    "attributeMask": {
      "type": "string",
      "description": "Comma-separated attribute ids being set or cleared."
    },
    "attributes": {
      "type": "array",
      "description": "Attribute entries, e.g. [{\"name\":\"attributes/offers_online_estimates\",\"values\":[true]},{\"name\":\"attributes/url_appointment\",\"uriValues\":[{\"uri\":\"https://…\"}]}]"
    }
  },
  "required": [
    "location",
    "attributeMask",
    "attributes"
  ]
}
```

</details>

<a id="tool-gbp_list_posts-ed8a75f2"></a>

## gbp_list_posts

Handler: Google Business Profile: lists localPosts using legacy v4 API.

```text
[GBP] Google Posts on a location (v4 localPosts — the same mybusiness.googleapis.com service as reviews). An empty result means no posts, not an error.
```

[Source](https://github.com/oqva-digital/oqva-marketing-mcp/blob/e9da7a025d1afa44f7e2d9510bd9c59bc836d9d0/src/index.ts#L519-L524) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "location": {
      "type": "string",
      "description": "Full path, e.g. accounts/123/locations/456."
    }
  },
  "required": [
    "location"
  ]
}
```

</details>

<a id="tool-gbp_create_post-3a103ac0"></a>

## gbp_create_post

Handler: Google Business Profile: publishes a STANDARD localPost with summary and optional call to action and photo.

```text
[GBP][WRITE] Publish a Google Post (v4 localPost, topicType STANDARD). summary is the visible body (≤1500 chars, ~250 shown before truncation); ctaUrl+ctaType add the button; photoUrl must be a PUBLIC https image ≥250×250 or the whole post is rejected. Posts expire from the profile surface after ~7 days — that is Google's design, not data loss. Public and client-visible: confirm the exact text with the owner before writing.
```

[Source](https://github.com/oqva-digital/oqva-marketing-mcp/blob/e9da7a025d1afa44f7e2d9510bd9c59bc836d9d0/src/index.ts#L526-L546) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "location": {
      "type": "string",
      "description": "Full path, e.g. accounts/123/locations/456."
    },
    "summary": {
      "type": "string",
      "description": "The post body."
    },
    "ctaType": {
      "type": "string",
      "enum": [
        "LEARN_MORE",
        "BOOK",
        "ORDER",
        "SHOP",
        "SIGN_UP",
        "CALL"
      ],
      "description": "Button type. Omit for no button."
    },
    "ctaUrl": {
      "type": "string",
      "description": "Button target URL (not used for CALL)."
    },
    "photoUrl": {
      "type": "string",
      "description": "Public https image URL, ≥250×250. Omit for text-only."
    }
  },
  "required": [
    "location",
    "summary"
  ]
}
```

</details>

<a id="tool-gbp_delete_post-ce4a5bc4"></a>

## gbp_delete_post

Handler: Google Business Profile: deletes a localPost by full resource name.

```text
[GBP][WRITE] Delete a Google Post — the undo for gbp_create_post.
```

[Source](https://github.com/oqva-digital/oqva-marketing-mcp/blob/e9da7a025d1afa44f7e2d9510bd9c59bc836d9d0/src/index.ts#L548-L553) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "post": {
      "type": "string",
      "description": "Full post name from gbp_list_posts, e.g. accounts/123/locations/456/localPosts/789."
    }
  },
  "required": [
    "post"
  ]
}
```

</details>

<a id="tool-gbp_performance-7c929fb7"></a>

## gbp_performance

Handler: Google Business Profile: reads daily metric time series with decomposed start and end dates.

```text
[GBP] Daily performance time series for a location: impressions (maps/search × desktop/mobile), call clicks, website clicks, direction requests, conversations, bookings.
```

[Source](https://github.com/oqva-digital/oqva-marketing-mcp/blob/e9da7a025d1afa44f7e2d9510bd9c59bc836d9d0/src/index.ts#L555-L591) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "location": {
      "type": "string",
      "description": "locations/123"
    },
    "metric": {
      "type": "string",
      "enum": [
        "BUSINESS_IMPRESSIONS_DESKTOP_MAPS",
        "BUSINESS_IMPRESSIONS_DESKTOP_SEARCH",
        "BUSINESS_IMPRESSIONS_MOBILE_MAPS",
        "BUSINESS_IMPRESSIONS_MOBILE_SEARCH",
        "CALL_CLICKS",
        "WEBSITE_CLICKS",
        "BUSINESS_DIRECTION_REQUESTS",
        "BUSINESS_CONVERSATIONS",
        "BUSINESS_BOOKINGS"
      ]
    },
    "startDate": {
      "type": "string",
      "description": "YYYY-MM-DD"
    },
    "endDate": {
      "type": "string",
      "description": "YYYY-MM-DD"
    }
  },
  "required": [
    "location",
    "metric",
    "startDate",
    "endDate"
  ]
}
```

</details>

<a id="tool-gbp_list_reviews-0595b368"></a>

## gbp_list_reviews

Handler: Google Business Profile: lists reviews using legacy v4 API.

```text
[GBP] List reviews for a location (rating, comment, reviewer, time, any reply).
```

[Source](https://github.com/oqva-digital/oqva-marketing-mcp/blob/e9da7a025d1afa44f7e2d9510bd9c59bc836d9d0/src/index.ts#L593-L595) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "location": {
      "type": "string",
      "description": "Full path, e.g. accounts/123/locations/456 (v4 reviews API)."
    }
  },
  "required": [
    "location"
  ]
}
```

</details>

<a id="tool-gbp_reply_review-849066cf"></a>

## gbp_reply_review

Handler: Google Business Profile: replaces the public reply on a review using PUT.

```text
[GBP][WRITE] Post the business's reply to a review, replacing any reply already there (one reply per review). The reply appears publicly on the profile under the review: confirm the exact text with the owner before writing, and read it back with gbp_list_reviews after.
```

[Source](https://github.com/oqva-digital/oqva-marketing-mcp/blob/e9da7a025d1afa44f7e2d9510bd9c59bc836d9d0/src/index.ts#L597-L603) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "location": {
      "type": "string",
      "description": "accounts/123/locations/456"
    },
    "reviewId": {
      "type": "string",
      "description": "The reviewId field of a review from gbp_list_reviews: the bare id that follows reviews/ in the review's name."
    },
    "comment": {
      "type": "string",
      "description": "The reply text, exactly as it will appear publicly."
    }
  },
  "required": [
    "location",
    "reviewId",
    "comment"
  ]
}
```

</details>

<a id="tool-meta_graph-0a5972d3"></a>

## meta_graph

Handler: Meta Graph / Marketing API: forwards supplied GET, POST or DELETE path and string parameters.

```text
Meta Graph / Marketing API call — flexible escape hatch, READ and WRITE. method defaults GET; POST to create/update (e.g. path='<campaignId>', params={status:'PAUSED'}), DELETE to remove. Does anything the token's scopes allow.
```

[Source](https://github.com/oqva-digital/oqva-marketing-mcp/blob/e9da7a025d1afa44f7e2d9510bd9c59bc836d9d0/src/index.ts#L606-L611) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "path": {
      "type": "string",
      "description": "Graph path, e.g. 'me/adaccounts' or '<campaignId>'."
    },
    "method": {
      "type": "string",
      "enum": [
        "GET",
        "POST",
        "DELETE"
      ],
      "description": "HTTP method. Default GET; POST creates or updates, DELETE removes."
    },
    "params": {
      "type": "object",
      "additionalProperties": {
        "type": "string"
      },
      "description": "Fields/params for reads; values for writes."
    }
  },
  "required": [
    "path"
  ]
}
```

</details>

<a id="tool-meta_page_insights-98ed8e15"></a>

## meta_page_insights

Handler: Meta Facebook: reads configured or supplied Page insights metrics over an optional date range.

```text
[Meta] Facebook Page insights (impressions, engagement, fans, etc.).
```

[Source](https://github.com/oqva-digital/oqva-marketing-mcp/blob/e9da7a025d1afa44f7e2d9510bd9c59bc836d9d0/src/index.ts#L613-L631) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "metric": {
      "type": "string",
      "description": "Comma-separated, e.g. 'page_impressions,page_post_engagements,page_fan_adds'."
    },
    "pageId": {
      "type": "string",
      "description": "Defaults to META_PAGE_ID."
    },
    "period": {
      "type": "string",
      "enum": [
        "day",
        "week",
        "days_28"
      ],
      "description": "Aggregation period. Default day."
    },
    "since": {
      "type": "string",
      "description": "YYYY-MM-DD"
    },
    "until": {
      "type": "string",
      "description": "YYYY-MM-DD"
    }
  },
  "required": [
    "metric"
  ]
}
```

</details>

<a id="tool-meta_ad_insights-6c329c3d"></a>

## meta_ad_insights

Handler: Meta Marketing API: reads ad account insights with fields, date preset and aggregation level.

```text
[Meta] Ad account insights (impressions, clicks, spend, actions, CPC, CTR). Only returns data if you actually run Meta ads.
```

[Source](https://github.com/oqva-digital/oqva-marketing-mcp/blob/e9da7a025d1afa44f7e2d9510bd9c59bc836d9d0/src/index.ts#L633-L651) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "adAccountId": {
      "type": "string",
      "description": "act_<id>; defaults to META_AD_ACCOUNT_ID."
    },
    "fields": {
      "type": "string",
      "description": "Default 'impressions,clicks,spend,actions,cpc,ctr'."
    },
    "datePreset": {
      "type": "string",
      "description": "e.g. 'last_30d','last_7d','this_month'. Default last_30d."
    },
    "level": {
      "type": "string",
      "enum": [
        "account",
        "campaign",
        "adset",
        "ad"
      ],
      "description": "Aggregation level. Default account."
    }
  },
  "required": []
}
```

</details>

<a id="tool-meta_list_ad_accounts-2d800f0a"></a>

## meta_list_ad_accounts

Handler: Meta Marketing API: lists accessible ad accounts with status, spend and business fields.

```text
[Meta] List ad accounts the token can access (id, name, status, spend, currency, business). NOTE: amount_spent is in the currency's MINOR unit (cents/pence) — divide by 100 for the real figure. (A SYSTEM-USER token returns [] here — use meta_graph on '<businessId>/owned_ad_accounts' instead.) Start of an ads audit.
```

[Source](https://github.com/oqva-digital/oqva-marketing-mcp/blob/e9da7a025d1afa44f7e2d9510bd9c59bc836d9d0/src/index.ts#L654-L656) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {},
  "required": []
}
```

</details>

<a id="tool-meta_list_businesses-d8bf4808"></a>

## meta_list_businesses

Handler: Meta Business Manager: lists accessible businesses.

```text
[Meta] List Business Manager businesses the token can access.
```

[Source](https://github.com/oqva-digital/oqva-marketing-mcp/blob/e9da7a025d1afa44f7e2d9510bd9c59bc836d9d0/src/index.ts#L657-L659) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {},
  "required": []
}
```

</details>

<a id="tool-meta_list_pages-b61d2ea3"></a>

## meta_list_pages

Handler: Meta Facebook: lists managed Pages with category, fan count and tasks.

```text
[Meta] List Facebook Pages the token manages (id, name, category, fans).
```

[Source](https://github.com/oqva-digital/oqva-marketing-mcp/blob/e9da7a025d1afa44f7e2d9510bd9c59bc836d9d0/src/index.ts#L660-L662) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {},
  "required": []
}
```

</details>

<a id="tool-meta_list_campaigns-3c69813f"></a>

## meta_list_campaigns

Handler: Meta Marketing API: lists campaigns with status, budget, objective and timestamps.

```text
[Meta] List campaigns on an ad account (id, name, status, effective_status, objective, budget, dates). NOTE: daily_budget/lifetime_budget are in the currency's MINOR unit (cents/pence — ÷100). The core tool for finding dead/clutter campaigns.
```

[Source](https://github.com/oqva-digital/oqva-marketing-mcp/blob/e9da7a025d1afa44f7e2d9510bd9c59bc836d9d0/src/index.ts#L663-L672) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "adAccountId": {
      "type": "string",
      "description": "act_<id>; defaults to META_AD_ACCOUNT_ID."
    },
    "limit": {
      "type": "integer",
      "description": "Default 200."
    }
  },
  "required": []
}
```

</details>

<a id="tool-meta_update_campaign-0d5ed993"></a>

## meta_update_campaign

Handler: Meta Marketing API: posts a campaign status change.

```text
[Meta][WRITE] Change a campaign's status — ACTIVE / PAUSED / ARCHIVED / DELETED. The tidy verb for dead campaigns (prefer ARCHIVED over DELETED — reversible).
```

[Source](https://github.com/oqva-digital/oqva-marketing-mcp/blob/e9da7a025d1afa44f7e2d9510bd9c59bc836d9d0/src/index.ts#L673-L678) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "campaignId": {
      "type": "string",
      "description": "Campaign id from meta_list_campaigns."
    },
    "status": {
      "type": "string",
      "enum": [
        "ACTIVE",
        "PAUSED",
        "ARCHIVED",
        "DELETED"
      ]
    }
  },
  "required": [
    "campaignId",
    "status"
  ]
}
```

</details>

<a id="tool-meta_list_custom_audiences-f587da4a"></a>

## meta_list_custom_audiences

Handler: Meta Marketing API: lists custom audiences including subtype, size bounds and operation status.

```text
[Meta] List custom audiences on an ad account (id, name, size, subtype, status, dates).
```

[Source](https://github.com/oqva-digital/oqva-marketing-mcp/blob/e9da7a025d1afa44f7e2d9510bd9c59bc836d9d0/src/index.ts#L679-L688) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "adAccountId": {
      "type": "string",
      "description": "act_<id>; defaults to META_AD_ACCOUNT_ID."
    }
  },
  "required": []
}
```

</details>

<a id="tool-meta_delete_custom_audience-2a3d1bd6"></a>

## meta_delete_custom_audience

Handler: Meta Marketing API: deletes a custom audience.

```text
[Meta][WRITE] Delete a custom audience (destructive — removed, not archived).
```

[Source](https://github.com/oqva-digital/oqva-marketing-mcp/blob/e9da7a025d1afa44f7e2d9510bd9c59bc836d9d0/src/index.ts#L689-L694) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "audienceId": {
      "type": "string",
      "description": "Custom audience id from meta_list_custom_audiences."
    }
  },
  "required": [
    "audienceId"
  ]
}
```

</details>

<a id="tool-meta_list_pixels-0351ba0f"></a>

## meta_list_pixels

Handler: Meta Marketing API: lists ad pixels with last fired time and availability.

```text
[Meta] List ad pixels / datasets on an ad account (id, name, last_fired_time) — spot stale/duplicate pixels.
```

[Source](https://github.com/oqva-digital/oqva-marketing-mcp/blob/e9da7a025d1afa44f7e2d9510bd9c59bc836d9d0/src/index.ts#L695-L704) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "adAccountId": {
      "type": "string",
      "description": "act_<id>; defaults to META_AD_ACCOUNT_ID."
    }
  },
  "required": []
}
```

</details>

<a id="tool-ga4_account_summaries-9d113831"></a>

## ga4_account_summaries

Handler: Google Analytics 4 Admin: lists accessible account summaries and property IDs.

```text
GA4 Admin: list the accounts + properties you can access, including each property's NUMERIC id — use this to discover GA4_PROPERTY_ID.
```

[Source](https://github.com/oqva-digital/oqva-marketing-mcp/blob/e9da7a025d1afa44f7e2d9510bd9c59bc836d9d0/src/index.ts#L707-L712) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {},
  "required": []
}
```

</details>

<a id="tool-ga4_list_key_events-ac1a65f2"></a>

## ga4_list_key_events

Handler: Google Analytics 4 Admin: lists property key events.

```text
GA4 Admin: list key events (conversions) on a property.
```

[Source](https://github.com/oqva-digital/oqva-marketing-mcp/blob/e9da7a025d1afa44f7e2d9510bd9c59bc836d9d0/src/index.ts#L713-L722) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "propertyId": {
      "type": "string",
      "description": "numeric; defaults to GA4_PROPERTY_ID"
    }
  },
  "required": []
}
```

</details>

<a id="tool-ga4_create_key_event-503e5cec"></a>

## ga4_create_key_event

Handler: Google Analytics 4 Admin: creates a key event with eventName and countingMethod.

```text
GA4 Admin [WRITE]: mark an event name as a Key event (conversion). e.g. eventName='generate_lead'.
```

[Source](https://github.com/oqva-digital/oqva-marketing-mcp/blob/e9da7a025d1afa44f7e2d9510bd9c59bc836d9d0/src/index.ts#L723-L738) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "eventName": {
      "type": "string",
      "description": "the GA4 event name"
    },
    "propertyId": {
      "type": "string",
      "description": "Numeric GA4 property id (the property id, distinct from the G- measurement id). Defaults to GA4_PROPERTY_ID."
    },
    "countingMethod": {
      "type": "string",
      "enum": [
        "ONCE_PER_EVENT",
        "ONCE_PER_SESSION"
      ],
      "description": "Default ONCE_PER_EVENT."
    }
  },
  "required": [
    "eventName"
  ]
}
```

</details>

<a id="tool-ga4_list_custom_dimensions-75905509"></a>

## ga4_list_custom_dimensions

Handler: Google Analytics 4 Admin: lists property custom dimensions.

```text
GA4 Admin: list custom dimensions on a property.
```

[Source](https://github.com/oqva-digital/oqva-marketing-mcp/blob/e9da7a025d1afa44f7e2d9510bd9c59bc836d9d0/src/index.ts#L739-L748) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "propertyId": {
      "type": "string",
      "description": "Numeric GA4 property id (the property id, distinct from the G- measurement id). Defaults to GA4_PROPERTY_ID."
    }
  },
  "required": []
}
```

</details>

<a id="tool-ga4_create_custom_dimension-2ce8700e"></a>

## ga4_create_custom_dimension

Handler: Google Analytics 4 Admin: creates a custom dimension with parameterName, displayName and scope.

```text
GA4 Admin [WRITE]: register an event parameter as a custom dimension (e.g. surface a 'step' param as 'Booking Step').
```

[Source](https://github.com/oqva-digital/oqva-marketing-mcp/blob/e9da7a025d1afa44f7e2d9510bd9c59bc836d9d0/src/index.ts#L749-L764) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "parameterName": {
      "type": "string",
      "description": "the event parameter name"
    },
    "displayName": {
      "type": "string",
      "description": "UI display name"
    },
    "scope": {
      "type": "string",
      "enum": [
        "EVENT",
        "USER",
        "ITEM"
      ],
      "description": "Default EVENT."
    },
    "propertyId": {
      "type": "string",
      "description": "Numeric GA4 property id (the property id, distinct from the G- measurement id). Defaults to GA4_PROPERTY_ID."
    }
  },
  "required": [
    "parameterName",
    "displayName"
  ]
}
```

</details>

<a id="tool-ga4_list_data_streams-e2cea14d"></a>

## ga4_list_data_streams

Handler: Google Analytics 4 Admin: lists property data streams.

```text
GA4 Admin: list data streams (web/app) on a property — incl. the measurement id.
```

[Source](https://github.com/oqva-digital/oqva-marketing-mcp/blob/e9da7a025d1afa44f7e2d9510bd9c59bc836d9d0/src/index.ts#L765-L774) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "propertyId": {
      "type": "string",
      "description": "Numeric GA4 property id (the property id, distinct from the G- measurement id). Defaults to GA4_PROPERTY_ID."
    }
  },
  "required": []
}
```

</details>

<a id="tool-ga4_admin-e28e677c"></a>

## ga4_admin

Handler: Google Analytics 4 Admin: forwards arbitrary v1beta method/path, optional query string and body.

```text
GA4 Admin API escape hatch — any method/path under analyticsadmin v1beta (audiences, property/stream updates, etc.). WRITES are real; PATCH usually needs a updateMask query.
```

[Source](https://github.com/oqva-digital/oqva-marketing-mcp/blob/e9da7a025d1afa44f7e2d9510bd9c59bc836d9d0/src/index.ts#L775-L787) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "method": {
      "type": "string",
      "enum": [
        "GET",
        "POST",
        "PATCH",
        "DELETE"
      ]
    },
    "path": {
      "type": "string",
      "description": "relative to .../v1beta/ — e.g. properties/123/audiences"
    },
    "body": {
      "type": "string",
      "description": "JSON string for POST/PATCH"
    },
    "query": {
      "type": "string",
      "description": "e.g. updateMask=displayName"
    }
  },
  "required": [
    "method",
    "path"
  ]
}
```

</details>

<a id="tool-gsc_submit_sitemap-6d135a26"></a>

## gsc_submit_sitemap

Handler: Google Search Console: submits a sitemap with PUT.

```text
GSC [WRITE]: submit / resubmit a sitemap.
```

[Source](https://github.com/oqva-digital/oqva-marketing-mcp/blob/e9da7a025d1afa44f7e2d9510bd9c59bc836d9d0/src/index.ts#L790-L802) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "feedpath": {
      "type": "string",
      "description": "full sitemap URL, e.g. https://example.com/sitemap.xml"
    },
    "siteUrl": {
      "type": "string",
      "description": "Search Console property: URL-prefix form with its trailing slash, or sc-domain:<domain>. Defaults to GSC_SITE_URL."
    }
  },
  "required": [
    "feedpath"
  ]
}
```

</details>

<a id="tool-gsc_delete_sitemap-adedc75d"></a>

## gsc_delete_sitemap

Handler: Google Search Console: deletes a sitemap with DELETE.

```text
GSC [WRITE]: remove a sitemap (re-submittable).
```

[Source](https://github.com/oqva-digital/oqva-marketing-mcp/blob/e9da7a025d1afa44f7e2d9510bd9c59bc836d9d0/src/index.ts#L803-L815) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "feedpath": {
      "type": "string",
      "description": "full sitemap URL"
    },
    "siteUrl": {
      "type": "string",
      "description": "Search Console property: URL-prefix form with its trailing slash, or sc-domain:<domain>. Defaults to GSC_SITE_URL."
    }
  },
  "required": [
    "feedpath"
  ]
}
```

</details>

<a id="tool-gsc_add_site-a50624c4"></a>

## gsc_add_site

Handler: Google Search Console: adds a property with PUT; does not verify ownership.

```text
GSC [WRITE]: add a property to Search Console (ownership still has to be verified separately).
```

[Source](https://github.com/oqva-digital/oqva-marketing-mcp/blob/e9da7a025d1afa44f7e2d9510bd9c59bc836d9d0/src/index.ts#L816-L822) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "siteUrl": {
      "type": "string",
      "description": "URL-prefix or sc-domain: form"
    }
  },
  "required": [
    "siteUrl"
  ]
}
```

</details>

<a id="tool-gsc_request_indexing-7c0632fb"></a>

## gsc_request_indexing

Handler: Google Indexing API: posts a URL\_UPDATED or URL\_DELETED notification; unrelated to GTM.

```text
Indexing API [WRITE]: ask Google to (re)crawl a URL. NOTE: officially for JobPosting/BroadcastEvent pages; pinging general URLs works but is unofficial.
```

[Source](https://github.com/oqva-digital/oqva-marketing-mcp/blob/e9da7a025d1afa44f7e2d9510bd9c59bc836d9d0/src/index.ts#L823-L832) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "description": "the page URL"
    },
    "type": {
      "type": "string",
      "enum": [
        "URL_UPDATED",
        "URL_DELETED"
      ],
      "description": "Default URL_UPDATED; URL_DELETED reports the page as removed."
    }
  },
  "required": [
    "url"
  ]
}
```

</details>

<a id="tool-gtm-9e005213"></a>

## gtm

Handler: Forwards GET, POST, PUT or DELETE to Google Tag Manager API v2 with the supplied relative path, raw JSON body and optional query string using OAuth.

```text
Google Tag Manager API v2 escape hatch — any method/path under tagmanager/v2. Discover: GET 'accounts', then '<acct>/containers', then '<container>/workspaces'. Manage: GET/POST '<workspace>/tags' | '/triggers' | '/variables'; create a version (POST '<workspace>:create_version'); publish (POST '<containerVersion>:publish'). WRITES + PUBLISH are real and affect the live site — build in a workspace, publish deliberately.
```

[Source](https://github.com/oqva-digital/oqva-marketing-mcp/blob/e9da7a025d1afa44f7e2d9510bd9c59bc836d9d0/src/index.ts#L835-L847) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "method": {
      "type": "string",
      "enum": [
        "GET",
        "POST",
        "PUT",
        "DELETE"
      ]
    },
    "path": {
      "type": "string",
      "description": "relative to https://www.googleapis.com/tagmanager/v2/ — e.g. accounts/123/containers/456/workspaces/7/tags"
    },
    "body": {
      "type": "string",
      "description": "JSON string for POST/PUT"
    },
    "query": {
      "type": "string",
      "description": "optional query string, e.g. fingerprint=..."
    }
  },
  "required": [
    "method",
    "path"
  ]
}
```

</details>

<a id="tool-kw_volume-e610713b"></a>

## kw_volume

Handler: DataForSEO: deduplicates and batches keywords in groups of 500 for Google Ads search volume and returns volume, CPC, competition and monthly trends.

```text
Keyword → monthly search volume / CPC / competition, batched (DataForSEO, Google Ads data). Send hundreds at once — deduped and chunked 500 per API call (≈ $0.05–0.075 per 1k keywords). Includes the 12-month monthly_searches trend.
```

[Source](https://github.com/oqva-digital/oqva-marketing-mcp/blob/e9da7a025d1afa44f7e2d9510bd9c59bc836d9d0/src/index.ts#L939-L961) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "keywords": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Keywords to look up."
    },
    "location": {
      "type": "integer",
      "description": "DataForSEO location code. Default 2840 (US); 2826 is the UK."
    },
    "language": {
      "type": "string",
      "description": "Language code. Default en."
    }
  },
  "required": [
    "keywords"
  ]
}
```

</details>

<a id="tool-kw_serp-c466d592"></a>

## kw_serp

Handler: DataForSEO: requests live Google SERP depth 20 and returns the first 10 organic results plus paid-result presence.

```text
Live top-10 Google organic results for one keyword (DataForSEO) — position, domain, title, url — plus ads:true when paid results share the SERP (the commercial-intent signal). A fraction of a cent per query.
```

[Source](https://github.com/oqva-digital/oqva-marketing-mcp/blob/e9da7a025d1afa44f7e2d9510bd9c59bc836d9d0/src/index.ts#L963-L975) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "keyword": {
      "type": "string",
      "description": "The search query."
    },
    "location": {
      "type": "integer",
      "description": "DataForSEO location code. Default 2840 (US); 2826 is the UK."
    },
    "language": {
      "type": "string",
      "description": "Language code. Default en."
    }
  },
  "required": [
    "keyword"
  ]
}
```

</details>

<a id="tool-kw_suggest-989332e8"></a>

## kw_suggest

Handler: Google autocomplete: mines the seed and alphabet expansions, recursively probes fresh suggestions up to clamped depth 3 and returns sorted unique results.

```text
Mine Google autocomplete for a topic — FREE, no credentials. Expands the seed a–z, recurses on new finds, and returns the deduped sorted list: the visible query surface of a topic, i.e. what people actually type. depth 2 takes ~a minute; depth 3 can take several.
```

[Source](https://github.com/oqva-digital/oqva-marketing-mcp/blob/e9da7a025d1afa44f7e2d9510bd9c59bc836d9d0/src/index.ts#L977-L1018) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "seed": {
      "type": "string",
      "description": "Topic to mine, e.g. 'crm software'."
    },
    "gl": {
      "type": "string",
      "description": "Country for suggestions (ISO alpha-2). Default us."
    },
    "hl": {
      "type": "string",
      "description": "Language. Default en."
    },
    "depth": {
      "type": "integer",
      "description": "Recursion depth 1–3. Default 2."
    }
  },
  "required": [
    "seed"
  ]
}
```

</details>

<a id="tool-kw_radar-523f8958"></a>

## kw_radar

Handler: DataForSEO and Google autocomplete: reads a local keyword cluster file, sweeps volume/SERP/suggestions, writes a dated snapshot and returns changes since the previous snapshot.

```text
The demand-radar sweep. Reads the cluster file ~/.oqva-marketing-mcp/radar/<slug>.json ({clusters:{group:[terms]}, watchlist:[terms], locations:[codes]}), sweeps volume + top-10 SERP + suggest presence for every term × location, snapshots to radar/<slug>/<date>.json, and returns ONLY what changed since the previous snapshot: watchlist crossings (first suggest appearance / first nonzero volume — the headline), suggest appearances/disappearances on tracked terms, volume shifts >20%, and SERP top-10 entrants/dropouts/movers of ≥3 positions. First ever run returns {baseline:true}. Run weekly.
```

[Source](https://github.com/oqva-digital/oqva-marketing-mcp/blob/e9da7a025d1afa44f7e2d9510bd9c59bc836d9d0/src/index.ts#L1020-L1144) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "slug": {
      "type": "string",
      "description": "Names the cluster file: radar/<slug>.json."
    },
    "location": {
      "type": "integer",
      "description": "Sweep one DataForSEO location code only. Default: every code in the file's locations."
    }
  },
  "required": [
    "slug"
  ]
}
```

</details>
