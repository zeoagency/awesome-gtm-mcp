# skiddgoddamn/google-seo-mcp

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/skiddgoddamn/google-seo-mcp) · [Machine-readable inventory](../data/mcps/skiddgoddamn--google-seo-mcp.json)

**33 extracted tools.** Browse GTM accounts and workspaces, create containers, and create tags from raw resource objects.

Snapshot: 2026-10-13 · [fd3eb641535b](https://github.com/skiddgoddamn/google-seo-mcp/tree/fd3eb641535b7e3d40ac25f4bc56a423669630f8) · Method: source.

Exposure: All 33 tools are registered unconditionally. G_READONLY=true blocks mutating calls but does not hide tools. G_CONFIRM=true augments mutating tool schemas with optional confirm:boolean (description: Must be true to execute this mutating call (G_CONFIRM is enabled).); dispatch requires truthy confirmation. Auth tools are exempt; psi_run requires no OAuth. Default schemas below have G_CONFIRM unset.

## Limits

- Static literal registration extraction; no tools/list runtime or live Google API calls were executed.
- GTM list handlers return a single page; tag object is intentionally unrestricted by upstream schema.
- Schema defaults described in prose are preserved as descriptions, not invented JSON Schema defaults; handler defaults are recorded in behavior.
- README claims broader functionality than GTM handlers: no GTM update/delete, trigger/variable, version/publish or workspace creation tools are registered.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`g_auth_status`](#tool-g_auth_status-8f4278a3) | Supporting | Reports credential presence and attempts token refresh if a refresh token exists. |
| [`g_set_credentials`](#tool-g_set_credentials-933d12b2) | Supporting | Validates nonempty OAuth credentials and saves them to local configuration. |
| [`g_authorize`](#tool-g_authorize-f986520b) | Supporting | Opens a browser and loopback callback server, exchanges the consent code and stores the refresh token; timeout defaults to 180 seconds with a 30-second minimum. |
| [`g_set_code`](#tool-g_set_code-e38ec410) | Supporting | Exchanges a supplied authorization code and redirect URI and saves the refresh token. |
| [`gsc_sites_get`](#tool-gsc_sites_get-c8b5a8df) | Other product | GETs Search Console properties accessible to the OAuth user. |
| [`gsc_site_get`](#tool-gsc_site_get-13913694) | Other product | GETs one Search Console property and permission information with encoded site URL. |
| [`gsc_site_add`](#tool-gsc_site_add-4fbaf53b) | Other product | PUTs a Search Console property URL to add it to the account; performs no ownership verification flow. |
| [`gsc_site_delete`](#tool-gsc_site_delete-9b33f724) | Other product | DELETEs a Search Console property from the account. |
| [`gsc_sitemaps_get`](#tool-gsc_sitemaps_get-33507221) | Other product | GETs submitted sitemaps for an encoded Search Console site URL. |
| [`gsc_sitemap_get`](#tool-gsc_sitemap_get-ce397872) | Other product | GETs sitemap status using encoded site URL and sitemap URL. |
| [`gsc_sitemap_submit`](#tool-gsc_sitemap_submit-b6084186) | Other product | PUTs a sitemap URL to Search Console. |
| [`gsc_sitemap_delete`](#tool-gsc_sitemap_delete-409834e0) | Other product | DELETEs a sitemap submission from Search Console. |
| [`gsc_search_analytics`](#tool-gsc_search_analytics-dbefc78e) | Other product | POSTs Search Console date range and supplied dimensions, row limit, search type and start row; omitted row\_limit is not explicitly defaulted by handler. |
| [`gsc_url_inspect`](#tool-gsc_url_inspect-e28acd4a) | Other product | POSTs URL inspection request with site URL and optional language code. |
| [`idx_url_submit`](#tool-idx_url_submit-df5554a0) | Other product | POSTs a URL\_UPDATED notification to Google Indexing API. |
| [`idx_url_delete`](#tool-idx_url_delete-26c8920f) | Other product | POSTs a URL\_DELETED notification to Google Indexing API. |
| [`idx_metadata`](#tool-idx_metadata-f30cdd96) | Other product | GETs latest Indexing API notification metadata for a URL. |
| [`ga4_accounts_get`](#tool-ga4_accounts_get-351a5dca) | Other product | Lists GA4 Analytics Admin accounts through GET /v1beta/accounts; returns a single page. |
| [`ga4_properties_get`](#tool-ga4_properties_get-35501ba2) | Other product | Lists GA4 properties with parent account filter; accepts numeric account ID or accounts/ prefix. |
| [`ga4_property_get`](#tool-ga4_property_get-e7b614db) | Other product | GETs a GA4 property after stripping an optional properties/ prefix. |
| [`ga4_property_create`](#tool-ga4_property_create-3ca2e654) | Other product | Creates a GA4 property under an account with timezone and currency defaulting to USD. |
| [`ga4_datastreams_get`](#tool-ga4_datastreams_get-3270ff35) | Other product | Lists GA4 data streams for a property; returns a single page. |
| [`ga4_datastream_create`](#tool-ga4_datastream_create-5f58ad62) | Other product | Creates a GA4 WEB\_DATA\_STREAM with display name and default URI; creation does not install site code. |
| [`ga4_datastream_get`](#tool-ga4_datastream_get-840eb0fb) | Other product | GETs a GA4 data stream using property and stream IDs. |
| [`ga4_run_report`](#tool-ga4_run_report-a0a35566) | Other product | POSTs a GA4 Data runReport with date range, metrics, optional dimensions and limit. |
| [`ga4_realtime`](#tool-ga4_realtime-4ff73072) | Other product | POSTs a GA4 Data runRealtimeReport with metrics and optional dimensions. |
| [`gtm_accounts_get`](#tool-gtm_accounts_get-ce4cf109) | GTM | GETs Tag Manager v2 accounts; does not paginate. |
| [`gtm_containers_get`](#tool-gtm_containers_get-e11f6aea) | GTM | GETs containers under the supplied GTM account; does not paginate. |
| [`gtm_container_create`](#tool-gtm_container_create-94f11969) | GTM | POSTs name and usageContext to GTM containers, defaulting usageContext to \[web\]. |
| [`gtm_workspaces_get`](#tool-gtm_workspaces_get-b95eaadb) | GTM | GETs workspaces under the supplied GTM container; does not paginate. |
| [`gtm_tags_get`](#tool-gtm_tags_get-bc22fac9) | GTM | GETs tags under the supplied GTM workspace; does not paginate. |
| [`gtm_tag_create`](#tool-gtm_tag_create-e30716c1) | GTM | POSTs the unrestricted raw tag object to the supplied GTM workspace tags endpoint. |
| [`psi_run`](#tool-psi_run-711e4f2b) | Other product | Calls PageSpeed Insights with strategy defaulting to mobile, optional categories/locale and environment API key; OAuth is disabled. |

<a id="tool-g_auth_status-8f4278a3"></a>

## g_auth_status

Handler: Reports credential presence and attempts token refresh if a refresh token exists.

```text
Show Google auth status: client_id/secret set, refresh token present and valid.
```

[Source](https://github.com/skiddgoddamn/google-seo-mcp/blob/fd3eb641535b7e3d40ac25f4bc56a423669630f8/src/auth.ts#L133-L201) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<a id="tool-g_set_credentials-933d12b2"></a>

## g_set_credentials

Handler: Validates nonempty OAuth credentials and saves them to local configuration.

```text
Save the Google OAuth app client_id and client_secret. Create a 'Desktop app' OAuth client at https://console.cloud.google.com/apis/credentials and enable the Search Console, Indexing, Analytics Admin/Data, Tag Manager APIs.
```

[Source](https://github.com/skiddgoddamn/google-seo-mcp/blob/fd3eb641535b7e3d40ac25f4bc56a423669630f8/src/auth.ts#L133-L201) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "client_id": {
      "type": "string"
    },
    "client_secret": {
      "type": "string"
    }
  },
  "required": [
    "client_id",
    "client_secret"
  ]
}
```

</details>

<a id="tool-g_authorize-f986520b"></a>

## g_authorize

Handler: Opens a browser and loopback callback server, exchanges the consent code and stores the refresh token; timeout defaults to 180 seconds with a 30-second minimum.

```text
Open Google's consent screen and capture the authorization code via a local loopback server, then store the refresh token. Use on a machine with a browser. Returns the authorize_url to open if the browser does not open automatically.
```

[Source](https://github.com/skiddgoddamn/google-seo-mcp/blob/fd3eb641535b7e3d40ac25f4bc56a423669630f8/src/auth.ts#L133-L201) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "timeout_seconds": {
      "type": "integer",
      "description": "How long to wait for consent (default 180)"
    }
  }
}
```

</details>

<a id="tool-g_set_code-e38ec410"></a>

## g_set_code

Handler: Exchanges a supplied authorization code and redirect URI and saves the refresh token.

```text
Manual fallback: paste an authorization code obtained by opening the authorize_url with a known redirect_uri (for headless machines).
```

[Source](https://github.com/skiddgoddamn/google-seo-mcp/blob/fd3eb641535b7e3d40ac25f4bc56a423669630f8/src/auth.ts#L133-L201) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "code": {
      "type": "string"
    },
    "redirect_uri": {
      "type": "string",
      "description": "The exact redirect_uri used to get the code, e.g. http://127.0.0.1:5000"
    }
  },
  "required": [
    "code",
    "redirect_uri"
  ]
}
```

</details>

<a id="tool-gsc_sites_get-c8b5a8df"></a>

## gsc_sites_get

Handler: GETs Search Console properties accessible to the OAuth user.

```text
Search Console: list all properties for the user.
```

[Source](https://github.com/skiddgoddamn/google-seo-mcp/blob/fd3eb641535b7e3d40ac25f4bc56a423669630f8/src/tools/searchconsole.ts#L10-L61) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<a id="tool-gsc_site_get-13913694"></a>

## gsc_site_get

Handler: GETs one Search Console property and permission information with encoded site URL.

```text
Search Console: get one property and the user's permission level.
```

[Source](https://github.com/skiddgoddamn/google-seo-mcp/blob/fd3eb641535b7e3d40ac25f4bc56a423669630f8/src/tools/searchconsole.ts#L10-L61) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "site_url": {
      "type": "string",
      "description": "Property URL exactly as in Search Console, e.g. https://example.com/ or sc-domain:example.com"
    }
  },
  "required": [
    "site_url"
  ]
}
```

</details>

<a id="tool-gsc_site_add-4fbaf53b"></a>

## gsc_site_add

Handler: PUTs a Search Console property URL to add it to the account; performs no ownership verification flow.

```text
Search Console: add (claim) a property.
```

[Source](https://github.com/skiddgoddamn/google-seo-mcp/blob/fd3eb641535b7e3d40ac25f4bc56a423669630f8/src/tools/searchconsole.ts#L10-L61) · Schema: literal-source.

Exposure: G_READONLY=true denies execution; G_CONFIRM=true adds properties.confirm={type:"boolean",description:"Must be true to execute this mutating call (G_CONFIRM is enabled)."} with no required entry.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "site_url": {
      "type": "string",
      "description": "Property URL exactly as in Search Console, e.g. https://example.com/ or sc-domain:example.com"
    }
  },
  "required": [
    "site_url"
  ]
}
```

</details>

<a id="tool-gsc_site_delete-9b33f724"></a>

## gsc_site_delete

Handler: DELETEs a Search Console property from the account.

```text
Search Console: remove a property from the account.
```

[Source](https://github.com/skiddgoddamn/google-seo-mcp/blob/fd3eb641535b7e3d40ac25f4bc56a423669630f8/src/tools/searchconsole.ts#L10-L61) · Schema: literal-source.

Exposure: G_READONLY=true denies execution; G_CONFIRM=true adds properties.confirm={type:"boolean",description:"Must be true to execute this mutating call (G_CONFIRM is enabled)."} with no required entry.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "site_url": {
      "type": "string",
      "description": "Property URL exactly as in Search Console, e.g. https://example.com/ or sc-domain:example.com"
    }
  },
  "required": [
    "site_url"
  ]
}
```

</details>

<a id="tool-gsc_sitemaps_get-33507221"></a>

## gsc_sitemaps_get

Handler: GETs submitted sitemaps for an encoded Search Console site URL.

```text
Search Console: list submitted sitemaps for a property.
```

[Source](https://github.com/skiddgoddamn/google-seo-mcp/blob/fd3eb641535b7e3d40ac25f4bc56a423669630f8/src/tools/searchconsole.ts#L10-L61) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "site_url": {
      "type": "string",
      "description": "Property URL exactly as in Search Console, e.g. https://example.com/ or sc-domain:example.com"
    }
  },
  "required": [
    "site_url"
  ]
}
```

</details>

<a id="tool-gsc_sitemap_get-ce397872"></a>

## gsc_sitemap_get

Handler: GETs sitemap status using encoded site URL and sitemap URL.

```text
Search Console: get status of one sitemap.
```

[Source](https://github.com/skiddgoddamn/google-seo-mcp/blob/fd3eb641535b7e3d40ac25f4bc56a423669630f8/src/tools/searchconsole.ts#L10-L61) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "site_url": {
      "type": "string",
      "description": "Property URL exactly as in Search Console, e.g. https://example.com/ or sc-domain:example.com"
    },
    "feedpath": {
      "type": "string",
      "description": "Full sitemap URL"
    }
  },
  "required": [
    "site_url",
    "feedpath"
  ]
}
```

</details>

<a id="tool-gsc_sitemap_submit-b6084186"></a>

## gsc_sitemap_submit

Handler: PUTs a sitemap URL to Search Console.

```text
Search Console: submit a sitemap.
```

[Source](https://github.com/skiddgoddamn/google-seo-mcp/blob/fd3eb641535b7e3d40ac25f4bc56a423669630f8/src/tools/searchconsole.ts#L10-L61) · Schema: literal-source.

Exposure: G_READONLY=true denies execution; G_CONFIRM=true adds properties.confirm={type:"boolean",description:"Must be true to execute this mutating call (G_CONFIRM is enabled)."} with no required entry.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "site_url": {
      "type": "string",
      "description": "Property URL exactly as in Search Console, e.g. https://example.com/ or sc-domain:example.com"
    },
    "feedpath": {
      "type": "string",
      "description": "Full sitemap URL"
    }
  },
  "required": [
    "site_url",
    "feedpath"
  ]
}
```

</details>

<a id="tool-gsc_sitemap_delete-409834e0"></a>

## gsc_sitemap_delete

Handler: DELETEs a sitemap submission from Search Console.

```text
Search Console: delete a sitemap.
```

[Source](https://github.com/skiddgoddamn/google-seo-mcp/blob/fd3eb641535b7e3d40ac25f4bc56a423669630f8/src/tools/searchconsole.ts#L10-L61) · Schema: literal-source.

Exposure: G_READONLY=true denies execution; G_CONFIRM=true adds properties.confirm={type:"boolean",description:"Must be true to execute this mutating call (G_CONFIRM is enabled)."} with no required entry.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "site_url": {
      "type": "string",
      "description": "Property URL exactly as in Search Console, e.g. https://example.com/ or sc-domain:example.com"
    },
    "feedpath": {
      "type": "string"
    }
  },
  "required": [
    "site_url",
    "feedpath"
  ]
}
```

</details>

<a id="tool-gsc_search_analytics-dbefc78e"></a>

## gsc_search_analytics

Handler: POSTs Search Console date range and supplied dimensions, row limit, search type and start row; omitted row\_limit is not explicitly defaulted by handler.

```text
Search Console: query search performance (clicks, impressions, CTR, position) by dimensions over a date range.
```

[Source](https://github.com/skiddgoddamn/google-seo-mcp/blob/fd3eb641535b7e3d40ac25f4bc56a423669630f8/src/tools/searchconsole.ts#L10-L61) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "site_url": {
      "type": "string",
      "description": "Property URL exactly as in Search Console, e.g. https://example.com/ or sc-domain:example.com"
    },
    "start_date": {
      "type": "string",
      "description": "YYYY-MM-DD"
    },
    "end_date": {
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
          "searchAppearance",
          "date"
        ]
      }
    },
    "row_limit": {
      "type": "integer",
      "description": "Max rows, default 1000"
    },
    "search_type": {
      "type": "string",
      "enum": [
        "web",
        "image",
        "video",
        "news",
        "discover",
        "googleNews"
      ]
    },
    "start_row": {
      "type": "integer"
    }
  },
  "required": [
    "site_url",
    "start_date",
    "end_date"
  ]
}
```

</details>

<a id="tool-gsc_url_inspect-e28acd4a"></a>

## gsc_url_inspect

Handler: POSTs URL inspection request with site URL and optional language code.

```text
Search Console: inspect a URL's index status, coverage, mobile usability, and rich results.
```

[Source](https://github.com/skiddgoddamn/google-seo-mcp/blob/fd3eb641535b7e3d40ac25f4bc56a423669630f8/src/tools/searchconsole.ts#L10-L61) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "site_url": {
      "type": "string",
      "description": "Property URL exactly as in Search Console, e.g. https://example.com/ or sc-domain:example.com"
    },
    "inspection_url": {
      "type": "string",
      "description": "The fully-qualified URL to inspect"
    },
    "language_code": {
      "type": "string",
      "description": "BCP-47, e.g. en-US"
    }
  },
  "required": [
    "site_url",
    "inspection_url"
  ]
}
```

</details>

<a id="tool-idx_url_submit-df5554a0"></a>

## idx_url_submit

Handler: POSTs a URL\_UPDATED notification to Google Indexing API.

```text
Indexing API: notify Google that a URL was added/updated (URL_UPDATED).
```

[Source](https://github.com/skiddgoddamn/google-seo-mcp/blob/fd3eb641535b7e3d40ac25f4bc56a423669630f8/src/tools/indexing.ts#L8-L18) · Schema: literal-source.

Exposure: G_READONLY=true denies execution; G_CONFIRM=true adds properties.confirm={type:"boolean",description:"Must be true to execute this mutating call (G_CONFIRM is enabled)."} with no required entry.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "description": "URL to index"
    }
  },
  "required": [
    "url"
  ]
}
```

</details>

<a id="tool-idx_url_delete-26c8920f"></a>

## idx_url_delete

Handler: POSTs a URL\_DELETED notification to Google Indexing API.

```text
Indexing API: notify Google that a URL was removed (URL_DELETED).
```

[Source](https://github.com/skiddgoddamn/google-seo-mcp/blob/fd3eb641535b7e3d40ac25f4bc56a423669630f8/src/tools/indexing.ts#L8-L18) · Schema: literal-source.

Exposure: G_READONLY=true denies execution; G_CONFIRM=true adds properties.confirm={type:"boolean",description:"Must be true to execute this mutating call (G_CONFIRM is enabled)."} with no required entry.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string"
    }
  },
  "required": [
    "url"
  ]
}
```

</details>

<a id="tool-idx_metadata-f30cdd96"></a>

## idx_metadata

Handler: GETs latest Indexing API notification metadata for a URL.

```text
Indexing API: get the latest notification metadata for a URL.
```

[Source](https://github.com/skiddgoddamn/google-seo-mcp/blob/fd3eb641535b7e3d40ac25f4bc56a423669630f8/src/tools/indexing.ts#L8-L18) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string"
    }
  },
  "required": [
    "url"
  ]
}
```

</details>

<a id="tool-ga4_accounts_get-351a5dca"></a>

## ga4_accounts_get

Handler: Lists GA4 Analytics Admin accounts through GET /v1beta/accounts; returns a single page.

```text
GA4 Admin: list Analytics accounts the user can access.
```

[Source](https://github.com/skiddgoddamn/google-seo-mcp/blob/fd3eb641535b7e3d40ac25f4bc56a423669630f8/src/tools/analytics.ts#L9-L72) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<a id="tool-ga4_properties_get-35501ba2"></a>

## ga4_properties_get

Handler: Lists GA4 properties with parent account filter; accepts numeric account ID or accounts/ prefix.

```text
GA4 Admin: list properties under an account.
```

[Source](https://github.com/skiddgoddamn/google-seo-mcp/blob/fd3eb641535b7e3d40ac25f4bc56a423669630f8/src/tools/analytics.ts#L9-L72) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric account ID or 'accounts/123'"
    }
  },
  "required": [
    "account_id"
  ]
}
```

</details>

<a id="tool-ga4_property_get-e7b614db"></a>

## ga4_property_get

Handler: GETs a GA4 property after stripping an optional properties/ prefix.

```text
GA4 Admin: get a property.
```

[Source](https://github.com/skiddgoddamn/google-seo-mcp/blob/fd3eb641535b7e3d40ac25f4bc56a423669630f8/src/tools/analytics.ts#L9-L72) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string",
      "description": "Numeric property ID"
    }
  },
  "required": [
    "property_id"
  ]
}
```

</details>

<a id="tool-ga4_property_create-3ca2e654"></a>

## ga4_property_create

Handler: Creates a GA4 property under an account with timezone and currency defaulting to USD.

```text
GA4 Admin: create a new GA4 property under an account.
```

[Source](https://github.com/skiddgoddamn/google-seo-mcp/blob/fd3eb641535b7e3d40ac25f4bc56a423669630f8/src/tools/analytics.ts#L9-L72) · Schema: literal-source.

Exposure: G_READONLY=true denies execution; G_CONFIRM=true adds properties.confirm={type:"boolean",description:"Must be true to execute this mutating call (G_CONFIRM is enabled)."} with no required entry.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric account ID or 'accounts/123'"
    },
    "display_name": {
      "type": "string"
    },
    "time_zone": {
      "type": "string",
      "description": "IANA tz, e.g. Europe/Moscow"
    },
    "currency_code": {
      "type": "string",
      "description": "e.g. RUB, USD (default USD)"
    }
  },
  "required": [
    "account_id",
    "display_name",
    "time_zone"
  ]
}
```

</details>

<a id="tool-ga4_datastreams_get-3270ff35"></a>

## ga4_datastreams_get

Handler: Lists GA4 data streams for a property; returns a single page.

```text
GA4 Admin: list data streams of a property.
```

[Source](https://github.com/skiddgoddamn/google-seo-mcp/blob/fd3eb641535b7e3d40ac25f4bc56a423669630f8/src/tools/analytics.ts#L9-L72) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string"
    }
  },
  "required": [
    "property_id"
  ]
}
```

</details>

<a id="tool-ga4_datastream_create-5f58ad62"></a>

## ga4_datastream_create

Handler: Creates a GA4 WEB\_DATA\_STREAM with display name and default URI; creation does not install site code.

```text
GA4 Admin: create a WEB data stream (returns the Measurement ID / tag — i.e. installs the GA4 counter).
```

[Source](https://github.com/skiddgoddamn/google-seo-mcp/blob/fd3eb641535b7e3d40ac25f4bc56a423669630f8/src/tools/analytics.ts#L9-L72) · Schema: literal-source.

Exposure: G_READONLY=true denies execution; G_CONFIRM=true adds properties.confirm={type:"boolean",description:"Must be true to execute this mutating call (G_CONFIRM is enabled)."} with no required entry.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string"
    },
    "display_name": {
      "type": "string"
    },
    "default_uri": {
      "type": "string",
      "description": "Site URL, e.g. https://example.com"
    }
  },
  "required": [
    "property_id",
    "display_name",
    "default_uri"
  ]
}
```

</details>

<a id="tool-ga4_datastream_get-840eb0fb"></a>

## ga4_datastream_get

Handler: GETs a GA4 data stream using property and stream IDs.

```text
GA4 Admin: get a data stream (includes measurement ID).
```

[Source](https://github.com/skiddgoddamn/google-seo-mcp/blob/fd3eb641535b7e3d40ac25f4bc56a423669630f8/src/tools/analytics.ts#L9-L72) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string"
    },
    "stream_id": {
      "type": "string"
    }
  },
  "required": [
    "property_id",
    "stream_id"
  ]
}
```

</details>

<a id="tool-ga4_run_report-a0a35566"></a>

## ga4_run_report

Handler: POSTs a GA4 Data runReport with date range, metrics, optional dimensions and limit.

```text
GA4 Data: run a report (metrics + dimensions over a date range).
```

[Source](https://github.com/skiddgoddamn/google-seo-mcp/blob/fd3eb641535b7e3d40ac25f4bc56a423669630f8/src/tools/analytics.ts#L9-L72) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string"
    },
    "start_date": {
      "type": "string",
      "description": "YYYY-MM-DD or e.g. 28daysAgo"
    },
    "end_date": {
      "type": "string",
      "description": "YYYY-MM-DD or 'today'"
    },
    "metrics": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "e.g. ['activeUsers','sessions']"
    },
    "dimensions": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "e.g. ['country','date']"
    },
    "limit": {
      "type": "integer"
    }
  },
  "required": [
    "property_id",
    "start_date",
    "end_date",
    "metrics"
  ]
}
```

</details>

<a id="tool-ga4_realtime-4ff73072"></a>

## ga4_realtime

Handler: POSTs a GA4 Data runRealtimeReport with metrics and optional dimensions.

```text
GA4 Data: run a realtime report.
```

[Source](https://github.com/skiddgoddamn/google-seo-mcp/blob/fd3eb641535b7e3d40ac25f4bc56a423669630f8/src/tools/analytics.ts#L9-L72) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string"
    },
    "metrics": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "dimensions": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  },
  "required": [
    "property_id",
    "metrics"
  ]
}
```

</details>

<a id="tool-gtm_accounts_get-ce4cf109"></a>

## gtm_accounts_get

Handler: GETs Tag Manager v2 accounts; does not paginate.

```text
Tag Manager: list GTM accounts.
```

[Source](https://github.com/skiddgoddamn/google-seo-mcp/blob/fd3eb641535b7e3d40ac25f4bc56a423669630f8/src/tools/tagmanager.ts#L7-L27) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<a id="tool-gtm_containers_get-e11f6aea"></a>

## gtm_containers_get

Handler: GETs containers under the supplied GTM account; does not paginate.

```text
Tag Manager: list containers under an account.
```

[Source](https://github.com/skiddgoddamn/google-seo-mcp/blob/fd3eb641535b7e3d40ac25f4bc56a423669630f8/src/tools/tagmanager.ts#L7-L27) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    }
  },
  "required": [
    "account_id"
  ]
}
```

</details>

<a id="tool-gtm_container_create-94f11969"></a>

## gtm_container_create

Handler: POSTs name and usageContext to GTM containers, defaulting usageContext to \[web\].

```text
Tag Manager: create a container (returns its GTM-ID).
```

[Source](https://github.com/skiddgoddamn/google-seo-mcp/blob/fd3eb641535b7e3d40ac25f4bc56a423669630f8/src/tools/tagmanager.ts#L7-L27) · Schema: literal-source.

Exposure: G_READONLY=true denies execution; G_CONFIRM=true adds properties.confirm={type:"boolean",description:"Must be true to execute this mutating call (G_CONFIRM is enabled)."} with no required entry.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "usage_context": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "web",
          "android",
          "ios",
          "amp",
          "server"
        ]
      },
      "description": "Default ['web']"
    }
  },
  "required": [
    "account_id",
    "name"
  ]
}
```

</details>

<a id="tool-gtm_workspaces_get-b95eaadb"></a>

## gtm_workspaces_get

Handler: GETs workspaces under the supplied GTM container; does not paginate.

```text
Tag Manager: list workspaces of a container.
```

[Source](https://github.com/skiddgoddamn/google-seo-mcp/blob/fd3eb641535b7e3d40ac25f4bc56a423669630f8/src/tools/tagmanager.ts#L7-L27) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "container_id": {
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ]
}
```

</details>

<a id="tool-gtm_tags_get-bc22fac9"></a>

## gtm_tags_get

Handler: GETs tags under the supplied GTM workspace; does not paginate.

```text
Tag Manager: list tags in a workspace.
```

[Source](https://github.com/skiddgoddamn/google-seo-mcp/blob/fd3eb641535b7e3d40ac25f4bc56a423669630f8/src/tools/tagmanager.ts#L7-L27) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "container_id": {
      "type": "string"
    },
    "workspace_id": {
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ]
}
```

</details>

<a id="tool-gtm_tag_create-e30716c1"></a>

## gtm_tag_create

Handler: POSTs the unrestricted raw tag object to the supplied GTM workspace tags endpoint.

```text
Tag Manager: create a tag in a workspace. Pass the raw GTM tag object (type + parameters).
```

[Source](https://github.com/skiddgoddamn/google-seo-mcp/blob/fd3eb641535b7e3d40ac25f4bc56a423669630f8/src/tools/tagmanager.ts#L7-L27) · Schema: literal-source.

Exposure: G_READONLY=true denies execution; G_CONFIRM=true adds properties.confirm={type:"boolean",description:"Must be true to execute this mutating call (G_CONFIRM is enabled)."} with no required entry.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "container_id": {
      "type": "string"
    },
    "workspace_id": {
      "type": "string"
    },
    "tag": {
      "type": "object",
      "description": "GTM Tag resource, e.g. {\"name\":\"GA4 Config\",\"type\":\"googtag\",\"parameter\":[{\"type\":\"template\",\"key\":\"tagId\",\"value\":\"G-XXXX\"}]}"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "tag"
  ]
}
```

</details>

<a id="tool-psi_run-711e4f2b"></a>

## psi_run

Handler: Calls PageSpeed Insights with strategy defaulting to mobile, optional categories/locale and environment API key; OAuth is disabled.

```text
PageSpeed Insights: analyze a URL (Core Web Vitals + Lighthouse). No OAuth needed; uses GOOGLE_PSI_API_KEY if set.
```

[Source](https://github.com/skiddgoddamn/google-seo-mcp/blob/fd3eb641535b7e3d40ac25f4bc56a423669630f8/src/tools/pagespeed.ts#L7-L29) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "description": "URL to analyze"
    },
    "strategy": {
      "type": "string",
      "enum": [
        "mobile",
        "desktop"
      ],
      "description": "Default mobile"
    },
    "category": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "performance",
          "accessibility",
          "best-practices",
          "seo",
          "pwa"
        ]
      },
      "description": "Lighthouse categories"
    },
    "locale": {
      "type": "string",
      "description": "e.g. ru, en"
    }
  },
  "required": [
    "url"
  ]
}
```

</details>
