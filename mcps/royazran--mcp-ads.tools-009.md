# RoyAzran/mcp-ads: supporting and other-product tools

[Provider inventory](royazran--mcp-ads.md) · [Global tool index](../TOOL_INDEX.md)

Tools 1201–1350 of 3131. Exact schemas from the same upstream snapshot.

<a id="tool-ga4_diagnose_missing_conversions-968782b3"></a>

## ga4_diagnose_missing_conversions

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, date.today, \_resolve\_property, \_admin\_svc().properties().keyEvents().list(parent=prop).execute().get, \_simple\_report, k.get, r.get, timedelta.

```text
[READ] GA4 analytics tool. Diagnose why conversions may be missing — compares key events marked vs events actually firing.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L744-L766) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "property_id": {
      "default": "",
      "title": "Property Id",
      "type": "string"
    },
    "days": {
      "default": 7,
      "title": "Days",
      "type": "integer"
    }
  },
  "title": "ga4_diagnose_missing_conversionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-ga4_check_google_ads_integration-1dea5590"></a>

## ga4_check_google_ads_integration

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, \_resolve\_property, \_admin\_svc().properties().googleAdsLinks().list(parent=prop).execute().get, \_admin\_svc().properties().googleAdsLinks().list(parent=prop).execute, \_admin\_svc().properties().googleAdsLinks().list, \_admin\_svc().properties().googleAdsLinks, \_admin\_svc().properties, \_admin\_svc.

```text
[READ] GA4 analytics tool. Check if Google Ads is linked to this GA4 property (required for imported conversions).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L769-L782) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "property_id": {
      "default": "",
      "title": "Property Id",
      "type": "string"
    }
  },
  "title": "ga4_check_google_ads_integrationArguments",
  "type": "object"
}
```

</details>

<a id="tool-ga4_export_property_config-712b4b65"></a>

## ga4_export_property_config

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, \_resolve\_property, \_admin\_svc, admin.properties().get(name=prop).execute, admin.properties().dataStreams().list(parent=prop).execute().get, admin.properties().keyEvents().list(parent=prop).execute().get, admin.properties().customDimensions().list(parent=prop).execute().get, admin.properties().customMetrics().list(parent=prop).execute().get.

```text
[READ] GA4 analytics tool. Export full property configuration as JSON — useful for backups and onboarding new clients.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L785-L801) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "property_id": {
      "default": "",
      "title": "Property Id",
      "type": "string"
    }
  },
  "title": "ga4_export_property_configArguments",
  "type": "object"
}
```

</details>

<a id="tool-ga4_create_custom_dimension-2ce8700e"></a>

## ga4_create_custom_dimension

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, require\_editor, \_resolve\_property, \_admin\_svc().properties().customDimensions().create(parent=prop, body=body).execute, \_admin\_svc().properties().customDimensions().create, \_admin\_svc().properties().customDimensions, \_admin\_svc().properties, \_admin\_svc.

```text
[WRITE] GA4 analytics tool. Create a new custom dimension in GA4. Args: parameter_name: The event parameter name to track (e.g. 'product_category'). display_name: Human-readable name shown in the GA4 UI. scope: EVENT | USER | ITEM. Default EVENT. description: Optional description. property_id: GA4 property ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L808-L834) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "parameter_name": {
      "title": "Parameter Name",
      "type": "string"
    },
    "display_name": {
      "title": "Display Name",
      "type": "string"
    },
    "scope": {
      "default": "EVENT",
      "title": "Scope",
      "type": "string"
    },
    "description": {
      "default": "",
      "title": "Description",
      "type": "string"
    },
    "property_id": {
      "default": "",
      "title": "Property Id",
      "type": "string"
    }
  },
  "required": [
    "parameter_name",
    "display_name"
  ],
  "title": "ga4_create_custom_dimensionArguments",
  "type": "object"
}
```

</details>

<a id="tool-ga4_bulk_create_key_events-fd150797"></a>

## ga4_bulk_create_key_events

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, require\_editor, \_resolve\_property, \_admin\_svc, e.strip, event\_names\_csv.split, admin.properties().keyEvents().create(parent=prop, body={'eventName': ev, 'countingMethod': counting\_method}).execute, results.append.

```text
[WRITE] GA4 analytics tool. Create multiple GA4 key events (conversions) in one call. Args: event_names_csv: Comma-separated event names to mark as key events (e.g. 'generate_lead,form_submit,phone_click'). counting_method: ONCE_PER_EVENT | ONCE_PER_SESSION. Default ONCE_PER_EVENT. property_id: GA4 property ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L837-L869) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "event_names_csv": {
      "title": "Event Names Csv",
      "type": "string"
    },
    "counting_method": {
      "default": "ONCE_PER_EVENT",
      "title": "Counting Method",
      "type": "string"
    },
    "property_id": {
      "default": "",
      "title": "Property Id",
      "type": "string"
    }
  },
  "required": [
    "event_names_csv"
  ],
  "title": "ga4_bulk_create_key_eventsArguments",
  "type": "object"
}
```

</details>

<a id="tool-ga4_setup_lead_gen_property-f6cc341e"></a>

## ga4_setup_lead_gen_property

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, require\_editor, \_resolve\_property, \_admin\_svc, \_admin\_alpha\_svc().properties().audiences().create(parent=prop, body=audience\_body).execute, admin.properties().keyEvents().create(parent=prop, body={'eventName': ev, 'countingMethod': 'ONCE\_PER\_EVENT'}).execute, events\_results.append, audience\_resp.get.

```text
[READ] GA4 analytics tool. One-shot lead gen property setup — creates standard key events and a lead audience. Sets up: generate_lead, form_submit, phone_click, email_click, sign_up as key events. Creates a 'Lead Submitters' audience with 30-day membership. Args: property_id: GA4 property ID. Leave blank to use default. google_ads_customer_id: Optional. If provided, creates a Google Ads link.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L872-L919) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "property_id": {
      "default": "",
      "title": "Property Id",
      "type": "string"
    },
    "google_ads_customer_id": {
      "default": "",
      "title": "Google Ads Customer Id",
      "type": "string"
    }
  },
  "title": "ga4_setup_lead_gen_propertyArguments",
  "type": "object"
}
```

</details>

<a id="tool-ga4_setup_ecommerce_property-c3ea4d96"></a>

## ga4_setup_ecommerce_property

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, require\_editor, \_resolve\_property, \_admin\_svc, admin.properties().keyEvents().create(parent=prop, body={'eventName': ev, 'countingMethod': 'ONCE\_PER\_EVENT'}).execute, results.append, admin.properties().keyEvents().create, admin.properties().keyEvents.

```text
[READ] GA4 analytics tool. One-shot ecommerce property setup — creates standard ecommerce key events. Sets up: purchase, add_to_cart, begin_checkout, view_item as key events. Args: property_id: GA4 property ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L922-L947) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "property_id": {
      "default": "",
      "title": "Property Id",
      "type": "string"
    }
  },
  "title": "ga4_setup_ecommerce_propertyArguments",
  "type": "object"
}
```

</details>

<a id="tool-ga4_link_google_ads-a8484ba1"></a>

## ga4_link_google_ads

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, require\_editor, \_resolve\_property, google\_ads\_customer\_id.replace('-', '').strip, \_admin\_svc().properties().googleAdsLinks().create(parent=prop, body=body).execute, google\_ads\_customer\_id.replace, \_admin\_svc().properties().googleAdsLinks().create, \_admin\_svc().properties().googleAdsLinks.

```text
[WRITE] GA4 analytics tool. Link a Google Ads account to a GA4 property for conversion imports and attribution. Args: google_ads_customer_id: Google Ads customer ID (numbers only, e.g. '1234567890'). property_id: GA4 property ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L950-L969) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "google_ads_customer_id": {
      "title": "Google Ads Customer Id",
      "type": "string"
    },
    "property_id": {
      "default": "",
      "title": "Property Id",
      "type": "string"
    }
  },
  "required": [
    "google_ads_customer_id"
  ],
  "title": "ga4_link_google_adsArguments",
  "type": "object"
}
```

</details>

<a id="tool-ga4_compare_two_dates-299d93d0"></a>

## ga4_compare_two_dates

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, date.today, \_compare\_two, timedelta.

```text
[READ] GA4 analytics tool. Compare two custom date ranges side by side for any dimensions and metrics. Args: property_id: GA4 property ID. Leave blank to use default. dimensions: List of GA4 dimension names (e.g. ['sessionDefaultChannelGroup']). metrics: List of GA4 metric names (e.g. ['sessions', 'conversions']). period1_start: Period 1 start date YYYY-MM-DD. period1_end: Period 1 end date YYYY-MM-DD. period2_start: Period 2 start date YYYY-MM-DD. period2_end: Period 2 end date YYYY-MM-DD. sort_metric: Metric to sort by (descending). row_limit: Max rows (default 20).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L976-L1013) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "property_id": {
      "default": "",
      "title": "Property Id",
      "type": "string"
    },
    "dimensions": {
      "default": null,
      "items": {},
      "title": "Dimensions",
      "type": "array"
    },
    "metrics": {
      "default": null,
      "items": {},
      "title": "Metrics",
      "type": "array"
    },
    "period1_start": {
      "default": "",
      "title": "Period1 Start",
      "type": "string"
    },
    "period1_end": {
      "default": "",
      "title": "Period1 End",
      "type": "string"
    },
    "period2_start": {
      "default": "",
      "title": "Period2 Start",
      "type": "string"
    },
    "period2_end": {
      "default": "",
      "title": "Period2 End",
      "type": "string"
    },
    "sort_metric": {
      "default": "",
      "title": "Sort Metric",
      "type": "string"
    },
    "row_limit": {
      "default": 20,
      "title": "Row Limit",
      "type": "integer"
    }
  },
  "title": "ga4_compare_two_datesArguments",
  "type": "object"
}
```

</details>

<a id="tool-ga4_quick_metric-f3ce97a7"></a>

## ga4_quick_metric

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, date.today, \_simple\_report, rows\[0\].get, timedelta.

```text
[READ] GA4 analytics tool. Get a single metric value quickly — e.g. 'sessions', 'conversions', 'totalRevenue'. Args: metric: GA4 metric name (e.g. 'sessions', 'activeUsers', 'conversions', 'totalRevenue'). property_id: GA4 property ID. Leave blank to use default. days: Number of days to look back (default 30).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L1016-L1036) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "metric": {
      "title": "Metric",
      "type": "string"
    },
    "property_id": {
      "default": "",
      "title": "Property Id",
      "type": "string"
    },
    "days": {
      "default": 30,
      "title": "Days",
      "type": "integer"
    }
  },
  "required": [
    "metric"
  ],
  "title": "ga4_quick_metricArguments",
  "type": "object"
}
```

</details>

<a id="tool-ga4_top_n-293e96cd"></a>

## ga4_top_n

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, date.today, \_gen\_report, timedelta.

```text
[READ] GA4 analytics tool. Get the top N rows for any dimension ranked by a metric. Args: dimension: GA4 dimension to group by (e.g. 'pagePath', 'country', 'sessionCampaignName'). metric: Metric to rank by (default 'sessions'). n: Number of rows to return (default 10). property_id: GA4 property ID. Leave blank to use default. days: Number of days to look back (default 30).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L1039-L1062) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "dimension": {
      "title": "Dimension",
      "type": "string"
    },
    "metric": {
      "default": "sessions",
      "title": "Metric",
      "type": "string"
    },
    "n": {
      "default": 10,
      "title": "N",
      "type": "integer"
    },
    "property_id": {
      "default": "",
      "title": "Property Id",
      "type": "string"
    },
    "days": {
      "default": 30,
      "title": "Days",
      "type": "integer"
    }
  },
  "required": [
    "dimension"
  ],
  "title": "ga4_top_nArguments",
  "type": "object"
}
```

</details>

<a id="tool-ga4_metric_trend-f7181db3"></a>

## ga4_metric_trend

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, date.today, \_gen\_report, rows.sort, timedelta, r.get.

```text
[READ] GA4 analytics tool. Get daily trend data for a metric — useful for spotting anomalies or growth trends. Args: metric: GA4 metric name (e.g. 'sessions', 'conversions', 'totalRevenue'). property_id: GA4 property ID. Leave blank to use default. days: Number of days of daily data to return (default 30).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L1065-L1085) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "metric": {
      "default": "sessions",
      "title": "Metric",
      "type": "string"
    },
    "property_id": {
      "default": "",
      "title": "Property Id",
      "type": "string"
    },
    "days": {
      "default": 30,
      "title": "Days",
      "type": "integer"
    }
  },
  "title": "ga4_metric_trendArguments",
  "type": "object"
}
```

</details>

<a id="tool-gsc_list_sites-69b36040"></a>

## gsc_list_sites

Handler: Other product (tools/gsc.py): calls mcp.tool, \_svc, svc.sites().list().execute, svc.sites().list, svc.sites, sites.get.

```text
[READ] Search Console tool. List all websites the user has access to in Google Search Console.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gsc.py#L76-L84) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "gsc_list_sitesArguments",
  "type": "object"
}
```

</details>

<a id="tool-gsc_search_analytics-dbefc78e"></a>

## gsc_search_analytics

Handler: Other product (tools/gsc.py): calls mcp.tool, \_svc, \_resolve\_site, svc.searchanalytics().query(siteUrl=site, body=body).execute().get, d.strip, r.update, results.append, date.today.

```text
[READ] Search Console tool. Get search performance data (clicks, impressions, CTR, position) from Google Search Console. Args: site_url: Site URL to query. Leave blank to use the default site. start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. dimensions: Comma-separated dimensions, e.g. 'query', 'page', 'country', 'query,page'. row_limit: Max rows to return. Default 20. sort_by: Sort metric: clicks, impressions, ctr, position. Default clicks.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gsc.py#L87-L124) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "site_url": {
      "default": "",
      "title": "Site Url",
      "type": "string"
    },
    "start_date": {
      "default": "",
      "title": "Start Date",
      "type": "string"
    },
    "end_date": {
      "default": "",
      "title": "End Date",
      "type": "string"
    },
    "dimensions": {
      "default": "query",
      "title": "Dimensions",
      "type": "string"
    },
    "row_limit": {
      "default": 20,
      "title": "Row Limit",
      "type": "integer"
    },
    "sort_by": {
      "default": "clicks",
      "title": "Sort By",
      "type": "string"
    }
  },
  "title": "gsc_search_analyticsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gsc_top_pages-f18fb1c2"></a>

## gsc_top_pages

Handler: Other product (tools/gsc.py): calls mcp.tool, \_svc, \_resolve\_site, svc.searchanalytics().query(siteUrl=site, body=body).execute().get, date.today, svc.searchanalytics().query(siteUrl=site, body=body).execute, row.get, round.

```text
[READ] Search Console tool. Get the top performing pages by clicks from Google Search Console. Args: site_url: Site URL. Leave blank to use the default site. start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. row_limit: Max rows. Default 20.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gsc.py#L127-L155) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "site_url": {
      "default": "",
      "title": "Site Url",
      "type": "string"
    },
    "start_date": {
      "default": "",
      "title": "Start Date",
      "type": "string"
    },
    "end_date": {
      "default": "",
      "title": "End Date",
      "type": "string"
    },
    "row_limit": {
      "default": 20,
      "title": "Row Limit",
      "type": "integer"
    }
  },
  "title": "gsc_top_pagesArguments",
  "type": "object"
}
```

</details>

<a id="tool-gsc_top_keywords-b999b872"></a>

## gsc_top_keywords

Handler: Other product (tools/gsc.py): calls mcp.tool, \_svc, \_resolve\_site, svc.searchanalytics().query(siteUrl=site, body=body).execute().get, date.today, svc.searchanalytics().query(siteUrl=site, body=body).execute, row.get, round.

```text
[READ] Search Console tool. Get top keywords driving traffic from Google Search, with clicks, impressions, CTR and average position. Args: site_url: Site URL. Leave blank to use the default site. start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. row_limit: Max keywords. Default 25. sort_by: clicks, impressions, ctr, or position. Default clicks.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gsc.py#L158-L188) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "site_url": {
      "default": "",
      "title": "Site Url",
      "type": "string"
    },
    "start_date": {
      "default": "",
      "title": "Start Date",
      "type": "string"
    },
    "end_date": {
      "default": "",
      "title": "End Date",
      "type": "string"
    },
    "row_limit": {
      "default": 25,
      "title": "Row Limit",
      "type": "integer"
    },
    "sort_by": {
      "default": "clicks",
      "title": "Sort By",
      "type": "string"
    }
  },
  "title": "gsc_top_keywordsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gsc_country_breakdown-83ceafaf"></a>

## gsc_country_breakdown

Handler: Other product (tools/gsc.py): calls mcp.tool, \_svc, \_resolve\_site, svc.searchanalytics().query(siteUrl=site, body=body).execute().get, date.today, svc.searchanalytics().query(siteUrl=site, body=body).execute, row.get, round.

```text
[READ] Search Console tool. Get Google Search Console performance broken down by country. Args: site_url: Site URL. Leave blank to use the default site. start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. row_limit: Max countries. Default 20.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gsc.py#L191-L219) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "site_url": {
      "default": "",
      "title": "Site Url",
      "type": "string"
    },
    "start_date": {
      "default": "",
      "title": "Start Date",
      "type": "string"
    },
    "end_date": {
      "default": "",
      "title": "End Date",
      "type": "string"
    },
    "row_limit": {
      "default": 20,
      "title": "Row Limit",
      "type": "integer"
    }
  },
  "title": "gsc_country_breakdownArguments",
  "type": "object"
}
```

</details>

<a id="tool-gsc_device_breakdown-b812a644"></a>

## gsc_device_breakdown

Handler: Other product (tools/gsc.py): calls mcp.tool, \_svc, \_resolve\_site, svc.searchanalytics().query(siteUrl=site, body=body).execute().get, date.today, svc.searchanalytics().query(siteUrl=site, body=body).execute, row.get, round.

```text
[READ] Search Console tool. Get Google Search Console performance broken down by device type: desktop, mobile, tablet. Args: site_url: Site URL. Leave blank to use the default site. start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gsc.py#L222-L248) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "site_url": {
      "default": "",
      "title": "Site Url",
      "type": "string"
    },
    "start_date": {
      "default": "",
      "title": "Start Date",
      "type": "string"
    },
    "end_date": {
      "default": "",
      "title": "End Date",
      "type": "string"
    }
  },
  "title": "gsc_device_breakdownArguments",
  "type": "object"
}
```

</details>

<a id="tool-gsc_page_keywords-3077b6a7"></a>

## gsc_page_keywords

Handler: Other product (tools/gsc.py): calls mcp.tool, \_svc, \_resolve\_site, svc.searchanalytics().query(siteUrl=site, body=body).execute().get, date.today, svc.searchanalytics().query(siteUrl=site, body=body).execute, row.get, round.

```text
[READ] Search Console tool. Get the top keywords/queries driving clicks to a specific page URL in Google Search Console. Args: page_url: The full URL of the page to analyse (required). site_url: GSC property URL. Leave blank to use the default site. start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. row_limit: Max rows. Default 20.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gsc.py#L251-L282) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_url": {
      "title": "Page Url",
      "type": "string"
    },
    "site_url": {
      "default": "",
      "title": "Site Url",
      "type": "string"
    },
    "start_date": {
      "default": "",
      "title": "Start Date",
      "type": "string"
    },
    "end_date": {
      "default": "",
      "title": "End Date",
      "type": "string"
    },
    "row_limit": {
      "default": 20,
      "title": "Row Limit",
      "type": "integer"
    }
  },
  "required": [
    "page_url"
  ],
  "title": "gsc_page_keywordsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gsc_inspect_url-2d598234"></a>

## gsc_inspect_url

Handler: Other product (tools/gsc.py): calls mcp.tool, \_creds, \_svc, \_resolve\_site, httpx.post, resp.json.

```text
[READ] Search Console tool. Inspect a specific URL in Google Search Console to check its indexing status and crawl info. Args: url: The full URL to inspect, e.g. https://example.com/page (required). site_url: GSC property URL. Leave blank to use the default site.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gsc.py#L285-L307) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "url": {
      "title": "Url",
      "type": "string"
    },
    "site_url": {
      "default": "",
      "title": "Site Url",
      "type": "string"
    }
  },
  "required": [
    "url"
  ],
  "title": "gsc_inspect_urlArguments",
  "type": "object"
}
```

</details>

<a id="tool-gsc_sitemaps-624aa861"></a>

## gsc_sitemaps

Handler: Other product (tools/gsc.py): calls mcp.tool, \_svc, \_resolve\_site, svc.sitemaps().list(siteUrl=site).execute, svc.sitemaps().list, svc.sitemaps.

```text
[READ] Search Console tool. List all sitemaps submitted to Google Search Console for this site. Args: site_url: The site URL. Leave blank to use the default site.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gsc.py#L310-L323) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "site_url": {
      "default": "",
      "title": "Site Url",
      "type": "string"
    }
  },
  "title": "gsc_sitemapsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gsc_crawl_errors-f9d1b46a"></a>

## gsc_crawl_errors

Handler: Other product (tools/gsc.py): calls mcp.tool, \_svc, \_resolve\_site, date.today, svc.searchanalytics().query(siteUrl=site, body={'startDate': str(start\_dt), 'endDate': str(end\_dt), 'dimensions': \['page'\], 'rowLimit': 25, 'dataState': 'all'}).execute, timedelta, svc.searchanalytics().query, svc.searchanalytics.

```text
[READ] Search Console tool. Get URL coverage and a sample of indexed pages from Google Search Console. Args: site_url: The site URL. Leave blank to use the default site.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gsc.py#L326-L349) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "site_url": {
      "default": "",
      "title": "Site Url",
      "type": "string"
    }
  },
  "title": "gsc_crawl_errorsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gsc_submit_sitemap-6d135a26"></a>

## gsc_submit_sitemap

Handler: Other product (tools/gsc.py): calls mcp.tool, require\_editor, \_svc, \_resolve\_site, svc.sitemaps().submit(siteUrl=site, feedpath=sitemap\_url).execute, svc.sitemaps().submit, svc.sitemaps.

```text
[WRITE] Search Console tool. Submit a sitemap URL to Google Search Console. Args: sitemap_url: Full sitemap URL, e.g. 'https://example.com/sitemap.xml' (required). site_url: GSC property URL. Leave blank to use the default site.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gsc.py#L352-L368) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "sitemap_url": {
      "title": "Sitemap Url",
      "type": "string"
    },
    "site_url": {
      "default": "",
      "title": "Site Url",
      "type": "string"
    }
  },
  "required": [
    "sitemap_url"
  ],
  "title": "gsc_submit_sitemapArguments",
  "type": "object"
}
```

</details>

<a id="tool-gsc_delete_sitemap-adedc75d"></a>

## gsc_delete_sitemap

Handler: Other product (tools/gsc.py): calls mcp.tool, require\_editor, \_svc, \_resolve\_site, svc.sitemaps().delete(siteUrl=site, feedpath=sitemap\_url).execute, svc.sitemaps().delete, svc.sitemaps.

```text
[WRITE] Search Console tool. Delete/remove a sitemap from Google Search Console. Args: sitemap_url: Full sitemap URL to delete (required). site_url: GSC property URL. Leave blank to use the default site.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gsc.py#L371-L387) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "sitemap_url": {
      "title": "Sitemap Url",
      "type": "string"
    },
    "site_url": {
      "default": "",
      "title": "Site Url",
      "type": "string"
    }
  },
  "required": [
    "sitemap_url"
  ],
  "title": "gsc_delete_sitemapArguments",
  "type": "object"
}
```

</details>

<a id="tool-gsc_date_trend-7dc7e0c0"></a>

## gsc_date_trend

Handler: Other product (tools/gsc.py): calls mcp.tool, \_svc, \_resolve\_site, svc.searchanalytics().query(siteUrl=site, body={'startDate': sd, 'endDate': ed, 'dimensions': \['date'\], 'rowLimit': 500, 'orderBy': \[{'fieldName': 'date', 'sortOrder': 'ASCENDING'}\]}).execute().get, date.today, svc.searchanalytics().query(siteUrl=site, body={'startDate': sd, 'endDate': ed, 'dimensions': \['date'\], 'rowLimit': 500, 'orderBy': \[{'fieldName': 'date', 'sortOrder': 'ASCENDING'}\]}).execute, row.get, round.

```text
[READ] Search Console tool. Get day-by-day clicks and impressions trend data from Google Search Console. Args: site_url: Site URL. Leave blank to use the default site. start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gsc.py#L390-L411) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "site_url": {
      "default": "",
      "title": "Site Url",
      "type": "string"
    },
    "start_date": {
      "default": "",
      "title": "Start Date",
      "type": "string"
    },
    "end_date": {
      "default": "",
      "title": "End Date",
      "type": "string"
    }
  },
  "title": "gsc_date_trendArguments",
  "type": "object"
}
```

</details>

<a id="tool-gsc_search_appearance-25a9d962"></a>

## gsc_search_appearance

Handler: Other product (tools/gsc.py): calls mcp.tool, \_svc, \_resolve\_site, svc.searchanalytics().query(siteUrl=site, body={'startDate': sd, 'endDate': ed, 'dimensions': \['searchAppearance'\], 'rowLimit': 25, 'orderBy': \[{'fieldName': 'clicks', 'sortOrder': 'DESCENDING'}\]}).execute().get, date.today, svc.searchanalytics().query(siteUrl=site, body={'startDate': sd, 'endDate': ed, 'dimensions': \['searchAppearance'\], 'rowLimit': 25, 'orderBy': \[{'fieldName': 'clicks', 'sortOrder': 'DESCENDING'}\]}).execute, row.get, round.

```text
[READ] Search Console tool. Get GSC performance broken down by search appearance type: Web, AMP, Rich Results, Video, etc. Args: site_url: Site URL. Leave blank to use the default site. start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gsc.py#L414-L435) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "site_url": {
      "default": "",
      "title": "Site Url",
      "type": "string"
    },
    "start_date": {
      "default": "",
      "title": "Start Date",
      "type": "string"
    },
    "end_date": {
      "default": "",
      "title": "End Date",
      "type": "string"
    }
  },
  "title": "gsc_search_appearanceArguments",
  "type": "object"
}
```

</details>

<a id="tool-gsc_compare_periods-2b628d41"></a>

## gsc_compare_periods

Handler: Other product (tools/gsc.py): calls mcp.tool, \_svc, \_resolve\_site, \_parse\_rows, \_total, d.strip, svc.searchanalytics().query(siteUrl=site, body=body).execute().get, \_gsc\_period.

```text
[READ] Search Console tool. Compare Google Search Console performance between two date ranges side by side. Args: period1_start: Start of first period YYYY-MM-DD (required). period1_end: End of first period YYYY-MM-DD (required). period2_start: Start of second period YYYY-MM-DD (required). period2_end: End of second period YYYY-MM-DD (required). site_url: Site URL. Leave blank to use the default site. dimensions: Comma-separated dimensions, e.g. 'query' or 'page'. Leave blank for totals only. row_limit: Max rows per period. Default 10.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gsc.py#L438-L498) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "period1_start": {
      "title": "Period1 Start",
      "type": "string"
    },
    "period1_end": {
      "title": "Period1 End",
      "type": "string"
    },
    "period2_start": {
      "title": "Period2 Start",
      "type": "string"
    },
    "period2_end": {
      "title": "Period2 End",
      "type": "string"
    },
    "site_url": {
      "default": "",
      "title": "Site Url",
      "type": "string"
    },
    "dimensions": {
      "default": "",
      "title": "Dimensions",
      "type": "string"
    },
    "row_limit": {
      "default": 10,
      "title": "Row Limit",
      "type": "integer"
    }
  },
  "required": [
    "period1_start",
    "period1_end",
    "period2_start",
    "period2_end"
  ],
  "title": "gsc_compare_periodsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gsc_index_coverage-ffde893c"></a>

## gsc_index_coverage

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/gsc\_advanced.py): calls mcp.tool, \_svc, \_resolve\_site, svc.sitemaps().list(siteUrl=site).execute, sitemaps.get, coverage\_summary.append, svc.sitemaps().list, sm.get.

```text
[READ] Search Console tool. Return the index coverage summary for a site: valid, warning, excluded, and error page counts. Uses the Search Console URL Inspection / Coverage API. Args: site_url: The property URL (e.g. 'https://example.com'). Defaults to first verified site. limit: Max rows per category (default: 500)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gsc_advanced.py#L20-L53) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "site_url": {
      "default": "",
      "title": "Site Url",
      "type": "string"
    },
    "limit": {
      "default": 500,
      "title": "Limit",
      "type": "integer"
    }
  },
  "title": "gsc_index_coverageArguments",
  "type": "object"
}
```

</details>

<a id="tool-gsc_core_web_vitals-c7423e93"></a>

## gsc_core_web_vitals

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/gsc\_advanced.py): calls mcp.tool, \_svc, \_resolve\_site, date.today, svc.searchanalytics().query(siteUrl=site, body=body).execute, (today - timedelta(days=28)).strftime, (today - timedelta(days=1)).strftime, row.get.

```text
[READ] Search Console tool. Return Core Web Vitals (CWV) data from Search Console. Reports LCP, FID/INP, CLS status across desktop and mobile. Uses the Chrome UX Report endpoint exposed via GSC. Args: site_url: Property URL (default: first verified site) start_date: YYYY-MM-DD (default: 28 days ago) end_date: YYYY-MM-DD (default: yesterday)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gsc_advanced.py#L60-L111) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "site_url": {
      "default": "",
      "title": "Site Url",
      "type": "string"
    },
    "start_date": {
      "default": null,
      "title": "Start Date",
      "type": "string"
    },
    "end_date": {
      "default": null,
      "title": "End Date",
      "type": "string"
    }
  },
  "title": "gsc_core_web_vitalsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gsc_rich_results-ac7b532e"></a>

## gsc_rich_results

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/gsc\_advanced.py): calls mcp.tool, \_svc, \_resolve\_site, date.today, svc.searchanalytics().query(siteUrl=site, body=body).execute, (today - timedelta(days=28)).strftime, (today - timedelta(days=1)).strftime, row.get.

```text
[READ] Search Console tool. Return search performance data filtered to pages that appear as rich results (schema-enhanced). Filters searchType to show feature snippets and structured data performance. Args: site_url: Property URL start_date: YYYY-MM-DD (default: 28 days ago) end_date: YYYY-MM-DD (default: yesterday) limit: Max rows
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gsc_advanced.py#L118-L164) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "site_url": {
      "default": "",
      "title": "Site Url",
      "type": "string"
    },
    "start_date": {
      "default": null,
      "title": "Start Date",
      "type": "string"
    },
    "end_date": {
      "default": null,
      "title": "End Date",
      "type": "string"
    },
    "limit": {
      "default": 100,
      "title": "Limit",
      "type": "integer"
    }
  },
  "title": "gsc_rich_resultsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gsc_mobile_usability-8a55831f"></a>

## gsc_mobile_usability

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/gsc\_advanced.py): calls mcp.tool, \_svc, \_resolve\_site, date.today, svc.searchanalytics().query(siteUrl=site, body=body).execute, (today - timedelta(days=28)).strftime, (today - timedelta(days=1)).strftime, row.get.

```text
[READ] Search Console tool. Return mobile vs desktop performance comparison from Search Console. Shows CTR, position, clicks, and impressions split by device type. Args: site_url: Property URL start_date: YYYY-MM-DD (default: 28 days ago) end_date: YYYY-MM-DD (default: yesterday) limit: Max rows
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gsc_advanced.py#L171-L211) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "site_url": {
      "default": "",
      "title": "Site Url",
      "type": "string"
    },
    "start_date": {
      "default": null,
      "title": "Start Date",
      "type": "string"
    },
    "end_date": {
      "default": null,
      "title": "End Date",
      "type": "string"
    },
    "limit": {
      "default": 100,
      "title": "Limit",
      "type": "integer"
    }
  },
  "title": "gsc_mobile_usabilityArguments",
  "type": "object"
}
```

</details>

<a id="tool-gsc_links-f3c38148"></a>

## gsc_links

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/gsc\_advanced.py): calls mcp.tool, \_svc, \_resolve\_site, svc.searchanalytics().query(siteUrl=site, body={'startDate': '2020-01-01', 'endDate': date.today().strftime('%Y-%m-%d'), 'dimensions': \['page'\], 'rowLimit': limit}).execute, svc.searchanalytics().query(siteUrl=site, body=body).execute, row.get, rows.append, (date.today() - timedelta(days=90)).strftime.

```text
[READ] Search Console tool. Return top linking pages report from Search Console (external and internal links). Args: site_url: Property URL link_type: 'external' (backlinks) or 'internal' (internal links) limit: Max rows (default: 100)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gsc_advanced.py#L218-L259) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "site_url": {
      "default": "",
      "title": "Site Url",
      "type": "string"
    },
    "link_type": {
      "default": "external",
      "title": "Link Type",
      "type": "string"
    },
    "limit": {
      "default": 100,
      "title": "Limit",
      "type": "integer"
    }
  },
  "title": "gsc_linksArguments",
  "type": "object"
}
```

</details>

<a id="tool-gsc_discover_performance-e791a1c4"></a>

## gsc_discover_performance

Handler: Other product (tools/gsc\_advanced.py): calls mcp.tool, \_svc, \_resolve\_site, date.today, (today - timedelta(days=28)).strftime, (today - timedelta(days=1)).strftime, svc.searchanalytics().query(siteUrl=site, body=body).execute, row.get.

```text
[READ] Search Console tool. Return content performance on Google Discover feed. Discover traffic typically comes from mobile users browsing their personalised feed. Args: site_url: Property URL start_date: YYYY-MM-DD (default: 28 days ago) end_date: YYYY-MM-DD (default: yesterday) limit: Max rows
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gsc_advanced.py#L266-L309) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "site_url": {
      "default": "",
      "title": "Site Url",
      "type": "string"
    },
    "start_date": {
      "default": null,
      "title": "Start Date",
      "type": "string"
    },
    "end_date": {
      "default": null,
      "title": "End Date",
      "type": "string"
    },
    "limit": {
      "default": 50,
      "title": "Limit",
      "type": "integer"
    }
  },
  "title": "gsc_discover_performanceArguments",
  "type": "object"
}
```

</details>

<a id="tool-gsc_video_indexing-9abe2ba8"></a>

## gsc_video_indexing

Handler: Other product (tools/gsc\_advanced.py): calls mcp.tool, \_svc, \_resolve\_site, date.today, (today - timedelta(days=28)).strftime, (today - timedelta(days=1)).strftime, svc.searchanalytics().query(siteUrl=site, body=body).execute, row.get.

```text
[READ] Search Console tool. Return video search performance data from Google Search Console. Shows how video pages are performing in Google Video search results. Args: site_url: Property URL start_date: YYYY-MM-DD (default: 28 days ago) end_date: YYYY-MM-DD (default: yesterday) limit: Max rows
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gsc_advanced.py#L316-L360) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "site_url": {
      "default": "",
      "title": "Site Url",
      "type": "string"
    },
    "start_date": {
      "default": null,
      "title": "Start Date",
      "type": "string"
    },
    "end_date": {
      "default": null,
      "title": "End Date",
      "type": "string"
    },
    "limit": {
      "default": 50,
      "title": "Limit",
      "type": "integer"
    }
  },
  "title": "gsc_video_indexingArguments",
  "type": "object"
}
```

</details>

<a id="tool-agency_list_platform_accounts-e049ea57"></a>

## agency_list_platform_accounts

Handler: Other product (tools/agency.py): calls mcp.tool, \_decode\_tool\_json, results.get('google\_ads', {}).get, results.get('meta\_ads', {}).get, results.get('ga4', {}).get, results.get('gsc', {}).get, google\_ads\_list\_customers, results\['errors'\].append.

```text
[READ] Agency or multi-platform tool. List the currently accessible accounts/properties/sites across all connected platforms. Returns a single normalized payload for: - Google Ads customer accounts - Meta ad accounts - GA4 properties - Search Console sites
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/agency.py#L92-L204) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "agency_list_platform_accountsArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_mcc_list_accounts-6c5b498e"></a>

## google_ads_mcc_list_accounts

Handler: Other product (tools/agency.py): calls mcp.tool, \_google\_ads\_client, client.get\_service, ga\_service.search, mcc\_customer\_id.replace, accounts.append.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. List all child accounts under a Google Ads Manager Account (MCC). Shows account name, ID, currency, timezone, and status. Args: mcc_customer_id: The Manager Account customer ID (e.g. '123-456-7890').
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/agency.py#L206-L246) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "mcc_customer_id": {
      "title": "Mcc Customer Id",
      "type": "string"
    }
  },
  "required": [
    "mcc_customer_id"
  ],
  "title": "google_ads_mcc_list_accountsArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_mcc_performance-5614628b"></a>

## google_ads_mcc_performance

Handler: Other product (tools/agency.py): calls mcp.tool, \_google\_ads\_client, client.get\_service, ga\_service.search, results.sort, mcc\_customer\_id.replace, results.append, round.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Get performance metrics across ALL child accounts in an MCC. Returns spend, impressions, clicks, conversions, ROAS per account. Args: mcc_customer_id: Manager Account customer ID. date_range: LAST_7_DAYS | LAST_30_DAYS | THIS_MONTH | LAST_MONTH.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/agency.py#L249-L313) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "mcc_customer_id": {
      "title": "Mcc Customer Id",
      "type": "string"
    },
    "date_range": {
      "default": "LAST_30_DAYS",
      "title": "Date Range",
      "type": "string"
    }
  },
  "required": [
    "mcc_customer_id"
  ],
  "title": "google_ads_mcc_performanceArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_mcc_budget_pacing-8e2ec98d"></a>

## google_ads_mcc_budget_pacing

Handler: Other product (tools/agency.py): calls mcp.tool, map, datetime.now, \_google\_ads\_client, client.get\_service, ga\_service.search, accounts.values, today.strftime.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Show budget pacing status across all child accounts in an MCC. Flags accounts that are over or under pacing. Args: mcc_customer_id: Manager Account customer ID. month: Month to check in YYYY-MM format. Defaults to current month.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/agency.py#L316-L385) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "mcc_customer_id": {
      "title": "Mcc Customer Id",
      "type": "string"
    },
    "month": {
      "default": "",
      "title": "Month",
      "type": "string"
    }
  },
  "required": [
    "mcc_customer_id"
  ],
  "title": "google_ads_mcc_budget_pacingArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_shared_negative_lists-cad11a6a"></a>

## google_ads_shared_negative_lists

Handler: Other product (tools/agency.py): calls mcp.tool, \_google\_ads\_client, client.get\_service, ga\_service.search, customer\_id.replace, lists.append.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. List all shared negative keyword lists in a Google Ads account. Args: customer_id: Google Ads customer ID.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/agency.py#L388-L424) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "customer_id": {
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "customer_id"
  ],
  "title": "google_ads_shared_negative_listsArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_portfolio_bid_strategies-ce4b6c88"></a>

## google_ads_portfolio_bid_strategies

Handler: Other product (tools/agency.py): calls mcp.tool, \_google\_ads\_client, client.get\_service, ga\_service.search, customer\_id.replace, strategies.append.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. List all portfolio bid strategies in a Google Ads account. Portfolio strategies are shared across multiple campaigns. Args: customer_id: Google Ads customer ID.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/agency.py#L528-L563) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "customer_id": {
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "customer_id"
  ],
  "title": "google_ads_portfolio_bid_strategiesArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_shared_budgets-6e5c3e5c"></a>

## google_ads_shared_budgets

Handler: Other product (tools/agency.py): calls mcp.tool, \_google\_ads\_client, client.get\_service, ga\_service.search, customer\_id.replace, budgets.append, round.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. List all shared budgets in a Google Ads account. Shared budgets allow multiple campaigns to draw from one pool. Args: customer_id: Google Ads customer ID.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/agency.py#L702-L739) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "customer_id": {
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "customer_id"
  ],
  "title": "google_ads_shared_budgetsArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_business_overview-50e21112"></a>

## meta_business_overview

Handler: Other product (tools/agency.py): calls mcp.tool, \_meta\_get, ad\_accounts.get, pages.get, pixels.get, users.get.

```text
[READ] Tool tool. Get an overview of a Meta Business Manager account: all connected ad accounts, pages, pixels, and users. Args: business_id: Meta Business Manager ID.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/agency.py#L834-L872) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "business_id": {
      "title": "Business Id",
      "type": "string"
    }
  },
  "required": [
    "business_id"
  ],
  "title": "meta_business_overviewArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_business_cross_account_spend-1b07efac"></a>

## meta_business_cross_account_spend

Handler: Other product (tools/agency.py): calls mcp.tool, \_meta\_get, accounts\_resp.get, results.sort, float, data.get, results.append, round.

```text
[READ] Tool tool. Get total ad spend and ROAS across all ad accounts in a Meta Business Manager. Args: business_id: Meta Business Manager ID. date_preset: last_7d | last_30d | last_month | this_month.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/agency.py#L875-L939) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "business_id": {
      "title": "Business Id",
      "type": "string"
    },
    "date_preset": {
      "default": "last_30d",
      "title": "Date Preset",
      "type": "string"
    }
  },
  "required": [
    "business_id"
  ],
  "title": "meta_business_cross_account_spendArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_business_list_pixels-cb254a3c"></a>

## meta_business_list_pixels

Handler: Other product (tools/agency.py): calls mcp.tool, \_meta\_get, resp.get.

```text
[READ] Tool tool. List all Meta Pixels owned by a Business Manager, with last-fired info. Args: business_id: Meta Business Manager ID.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/agency.py#L942-L957) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "business_id": {
      "title": "Business Id",
      "type": "string"
    }
  },
  "required": [
    "business_id"
  ],
  "title": "meta_business_list_pixelsArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_business_assign_pixel-93a3d324"></a>

## meta_business_assign_pixel

Handler: Other product (tools/agency.py): calls mcp.tool, \_meta\_post, bool, ad\_account\_id.replace.

```text
[WRITE] Tool tool. Assign a Meta Pixel to an ad account within the same Business Manager. Args: pixel_id: The Meta Pixel ID. ad_account_id: The ad account ID to assign the pixel to (format: act_XXXXXX).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/agency.py#L960-L976) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "pixel_id": {
      "title": "Pixel Id",
      "type": "string"
    },
    "ad_account_id": {
      "title": "Ad Account Id",
      "type": "string"
    }
  },
  "required": [
    "pixel_id",
    "ad_account_id"
  ],
  "title": "meta_business_assign_pixelArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_business_shared_audiences-724856cc"></a>

## meta_business_shared_audiences

Handler: Other product (tools/agency.py): calls mcp.tool, \_meta\_get, resp.get.

```text
[READ] Tool tool. List custom audiences that are shared across ad accounts in a Business Manager. Args: business_id: Meta Business Manager ID.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/agency.py#L979-L994) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "business_id": {
      "title": "Business Id",
      "type": "string"
    }
  },
  "required": [
    "business_id"
  ],
  "title": "meta_business_shared_audiencesArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_business_share_audience-270bc7ce"></a>

## meta_business_share_audience

Handler: Other product (tools/agency.py): calls mcp.tool, \_meta\_post, results.append, acc\_id.replace.

```text
[WRITE] Tool tool. Share an existing custom audience to one or more other ad accounts. Args: audience_id: The custom audience ID to share. destination_account_ids: List of ad account IDs to share the audience with.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/agency.py#L997-L1022) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "audience_id": {
      "title": "Audience Id",
      "type": "string"
    },
    "destination_account_ids": {
      "items": {
        "type": "string"
      },
      "title": "Destination Account Ids",
      "type": "array"
    }
  },
  "required": [
    "audience_id",
    "destination_account_ids"
  ],
  "title": "meta_business_share_audienceArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_business_add_user-b7f4da79"></a>

## meta_business_add_user

Handler: Other product (tools/agency.py): calls mcp.tool, \_meta\_post.

```text
[WRITE] Tool tool. Add a user to a Meta Business Manager. Args: business_id: Meta Business Manager ID. email: Email address of the user to invite. role: ADMIN | EMPLOYEE | FINANCE_ANALYST | BUSINESS_ANALYST.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/agency.py#L1025-L1043) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "business_id": {
      "title": "Business Id",
      "type": "string"
    },
    "email": {
      "title": "Email",
      "type": "string"
    },
    "role": {
      "default": "EMPLOYEE",
      "title": "Role",
      "type": "string"
    }
  },
  "required": [
    "business_id",
    "email"
  ],
  "title": "meta_business_add_userArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_business_grant_account_access-45f324e1"></a>

## meta_business_grant_account_access

Handler: Other product (tools/agency.py): calls mcp.tool, \_meta\_post, bool, resp.get.

```text
[WRITE] Tool tool. Grant a Business Manager user access to a specific ad account. Args: business_id: Meta Business Manager ID. ad_account_id: Ad account ID (format: act_XXXXXX). user_id: The Meta user ID to grant access to. tasks: List of permissions: MANAGE | ADVERTISE | ANALYZE | DRAFT.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/agency.py#L1046-L1069) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "business_id": {
      "title": "Business Id",
      "type": "string"
    },
    "ad_account_id": {
      "title": "Ad Account Id",
      "type": "string"
    },
    "user_id": {
      "title": "User Id",
      "type": "string"
    },
    "tasks": {
      "items": {
        "type": "string"
      },
      "title": "Tasks",
      "type": "array"
    }
  },
  "required": [
    "business_id",
    "ad_account_id",
    "user_id",
    "tasks"
  ],
  "title": "meta_business_grant_account_accessArguments",
  "type": "object"
}
```

</details>

<a id="tool-agency_cross_platform_overview-661052ec"></a>

## agency_cross_platform_overview

Handler: Other product (tools/agency.py): calls mcp.tool, ga4\_data.get, \_google\_ads\_client, client.get\_service, {'last\_7d': 'LAST\_7\_DAYS', 'last\_30d': 'LAST\_30\_DAYS', 'last\_month': 'LAST\_MONTH', 'this\_month': 'THIS\_MONTH'}.get, ga\_service.search, \_meta\_get, float.

```text
[READ] Agency or multi-platform tool. Pull a unified performance overview across Google Ads, Meta Ads, and GA4. Deduplicates conversions using GA4 as the source of truth. Args: google_ads_customer_id: Google Ads customer ID. meta_ad_account_id: Meta ad account ID (format: act_XXXXXX). ga4_property_id: GA4 property ID (numeric, e.g. '123456789'). date_range: last_7d | last_30d | last_month | this_month.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/agency.py#L1076-L1203) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "google_ads_customer_id": {
      "title": "Google Ads Customer Id",
      "type": "string"
    },
    "meta_ad_account_id": {
      "title": "Meta Ad Account Id",
      "type": "string"
    },
    "ga4_property_id": {
      "title": "Ga4 Property Id",
      "type": "string"
    },
    "date_range": {
      "default": "last_30d",
      "title": "Date Range",
      "type": "string"
    }
  },
  "required": [
    "google_ads_customer_id",
    "meta_ad_account_id",
    "ga4_property_id"
  ],
  "title": "agency_cross_platform_overviewArguments",
  "type": "object"
}
```

</details>

<a id="tool-agency_account_health_audit-a9f65dc6"></a>

## agency_account_health_audit

Handler: Other product (tools/agency.py): calls mcp.tool, audit\['scores'\].values, round, \_google\_ads\_client, client.get\_service, ga\_service.search, min, max.

```text
[READ] Agency or multi-platform tool. Run a comprehensive health audit on Google Ads and/or Meta Ads accounts. Scores each area 0-100 and highlights the top issues to fix. Args: google_ads_customer_id: Google Ads customer ID (optional). meta_ad_account_id: Meta ad account ID (optional, format: act_XXXXXX).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/agency.py#L1206-L1319) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "google_ads_customer_id": {
      "default": "",
      "title": "Google Ads Customer Id",
      "type": "string"
    },
    "meta_ad_account_id": {
      "default": "",
      "title": "Meta Ad Account Id",
      "type": "string"
    }
  },
  "title": "agency_account_health_auditArguments",
  "type": "object"
}
```

</details>

<a id="tool-agency_budget_pacing_all_channels-528b301a"></a>

## agency_budget_pacing_all_channels

Handler: Other product (tools/agency.py): calls mcp.tool, datetime.now, today.strftime, \_google\_ads\_client, client.get\_service, ga\_service.search, round, \_meta\_get.

```text
[READ] Agency or multi-platform tool. Show budget pacing status across all connected ad platforms for the current month. Flags channels that are over or under their expected monthly spend. Args: google_ads_customer_id: Google Ads customer ID (optional). meta_ad_account_id: Meta ad account ID (optional).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/agency.py#L1322-L1386) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "google_ads_customer_id": {
      "default": "",
      "title": "Google Ads Customer Id",
      "type": "string"
    },
    "meta_ad_account_id": {
      "default": "",
      "title": "Meta Ad Account Id",
      "type": "string"
    }
  },
  "title": "agency_budget_pacing_all_channelsArguments",
  "type": "object"
}
```

</details>

<a id="tool-agency_weekly_report-93e63b31"></a>

## agency_weekly_report

Handler: Other product (tools/agency.py): calls mcp.tool, datetime.now(timezone.utc).strftime, \_google\_ads\_client, client.get\_service, \_fetch\_gads\_week, date.today, \_fetch\_meta, round.

```text
[READ] Agency or multi-platform tool. Generate a formatted weekly performance report across all connected platforms. Compares this week vs last week and highlights the biggest changes. Args: google_ads_customer_id: Google Ads customer ID (optional). meta_ad_account_id: Meta ad account ID (optional). ga4_property_id: GA4 property ID (optional).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/agency.py#L1389-L1518) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "google_ads_customer_id": {
      "default": "",
      "title": "Google Ads Customer Id",
      "type": "string"
    },
    "meta_ad_account_id": {
      "default": "",
      "title": "Meta Ad Account Id",
      "type": "string"
    },
    "ga4_property_id": {
      "default": "",
      "title": "Ga4 Property Id",
      "type": "string"
    }
  },
  "title": "agency_weekly_reportArguments",
  "type": "object"
}
```

</details>

<a id="tool-agency_wasted_spend_report-a9a47092"></a>

## agency_wasted_spend_report

Handler: Other product (tools/agency.py): calls mcp.tool, round, \_google\_ads\_client, client.get\_service, sum, \_meta\_get, small\_resp.get, google\_ads\_customer\_id.replace.

```text
[READ] Agency or multi-platform tool. Find wasted ad spend across Google Ads and Meta Ads. Returns actionable items: zero-conversion search terms, high-frequency ad sets, paused/disapproved ads still consuming budget, and more. Args: google_ads_customer_id: Google Ads customer ID (optional). meta_ad_account_id: Meta ad account ID (optional). days: Lookback window in days (default 30).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/agency.py#L1521-L1620) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "google_ads_customer_id": {
      "default": "",
      "title": "Google Ads Customer Id",
      "type": "string"
    },
    "meta_ad_account_id": {
      "default": "",
      "title": "Meta Ad Account Id",
      "type": "string"
    },
    "days": {
      "default": 30,
      "title": "Days",
      "type": "integer"
    }
  },
  "title": "agency_wasted_spend_reportArguments",
  "type": "object"
}
```

</details>

<a id="tool-report_monthly_executive-d0280813"></a>

## report_monthly_executive

Handler: Other product (tools/reports.py): calls mcp.tool, map, \_month\_range, out.get('platforms', {}).get('google\_ads', {}).get('this\_month', {}).get, out.get('platforms', {}).get('meta\_ads', {}).get('this\_month', {}).get, date.today, date, last\_month.strftime.

```text
[READ] Composite multi-platform report tool. Full executive monthly report across all connected platforms. Compares selected month vs previous month for GA4, Google Ads, Meta Ads, and GSC. Pass any combination of platform IDs — platforms without an ID are skipped. Args: ga4_property_id: GA4 property ID (e.g. '123456789'). google_ads_customer_id: Google Ads customer ID (e.g. '123-456-7890'). meta_ad_account_id: Meta ad account ID (e.g. 'act_123456789'). gsc_site_url: Search Console site URL (e.g. 'https://example.com/'). month: Month to report in YYYY-MM format. Defaults to last full month.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/reports.py#L178-L390) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ga4_property_id": {
      "default": "",
      "title": "Ga4 Property Id",
      "type": "string"
    },
    "google_ads_customer_id": {
      "default": "",
      "title": "Google Ads Customer Id",
      "type": "string"
    },
    "meta_ad_account_id": {
      "default": "",
      "title": "Meta Ad Account Id",
      "type": "string"
    },
    "gsc_site_url": {
      "default": "",
      "title": "Gsc Site Url",
      "type": "string"
    },
    "month": {
      "default": "",
      "title": "Month",
      "type": "string"
    }
  },
  "title": "report_monthly_executiveArguments",
  "type": "object"
}
```

</details>

<a id="tool-report_seo_full-54d89f1c"></a>

## report_seo_full

Handler: Other product (tools/reports.py): calls mcp.tool, \_date\_window, build, svc.searchanalytics().query(siteUrl=gsc\_site\_url, body={\*\*base, 'dimensions': \[\], 'rowLimit': 1}).execute, svc.searchanalytics().query(siteUrl=gsc\_site\_url, body={\*\*base, 'dimensions': \['query'\], 'orderBy': order}).execute, svc.searchanalytics().query(siteUrl=gsc\_site\_url, body={\*\*base, 'dimensions': \['page'\], 'orderBy': order}).execute, \_ga4\_report, ov.get.

```text
[READ] Composite multi-platform report tool. Full SEO report combining Google Search Console and GA4 organic traffic data. Returns top queries, top pages, organic traffic metrics, landing pages, and conversions — one call. Args: gsc_site_url: Search Console site URL (e.g. 'https://example.com/'). ga4_property_id: GA4 property ID. Optional — adds organic traffic and conversion detail. days: Number of days to look back. Default 30.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/reports.py#L397-L525) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "gsc_site_url": {
      "default": "",
      "title": "Gsc Site Url",
      "type": "string"
    },
    "ga4_property_id": {
      "default": "",
      "title": "Ga4 Property Id",
      "type": "string"
    },
    "days": {
      "default": 30,
      "title": "Days",
      "type": "integer"
    }
  },
  "title": "report_seo_fullArguments",
  "type": "object"
}
```

</details>

<a id="tool-report_paid_search_full-545000b2"></a>

## report_paid_search_full

Handler: Other product (tools/reports.py): calls mcp.tool, \_date\_window, google\_ads\_customer\_id.replace, \_gads\_client, client.get\_service, \_q, \_ga4\_report, resp.get.

```text
[READ] Composite multi-platform report tool. Full paid search report: Google Ads account totals, top campaigns, top keywords, top search terms, and GA4 paid search channel attribution — all in one call. Args: google_ads_customer_id: Google Ads customer ID. ga4_property_id: GA4 property ID. Optional — adds paid channel session and conversion data. days: Number of days to report on. Default 30.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/reports.py#L532-L688) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "google_ads_customer_id": {
      "default": "",
      "title": "Google Ads Customer Id",
      "type": "string"
    },
    "ga4_property_id": {
      "default": "",
      "title": "Ga4 Property Id",
      "type": "string"
    },
    "days": {
      "default": 30,
      "title": "Days",
      "type": "integer"
    }
  },
  "title": "report_paid_search_fullArguments",
  "type": "object"
}
```

</details>

<a id="tool-report_paid_social_full-11f1fad3"></a>

## report_paid_social_full

Handler: Other product (tools/reports.py): calls mcp.tool, \_date\_window, \_unwrap, float, d.get, sum, \_ga4\_report, resp.get.

```text
[READ] Composite multi-platform report tool. Full paid social report: Meta Ads account overview, top campaigns, demographic breakdown, and GA4 paid social channel attribution — all in one call. Args: meta_ad_account_id: Meta ad account ID (e.g. 'act_123456789'). ga4_property_id: GA4 property ID. Optional — adds paid social session and conversion data. days: Number of days to report on. Default 30.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/reports.py#L695-L831) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "meta_ad_account_id": {
      "default": "",
      "title": "Meta Ad Account Id",
      "type": "string"
    },
    "ga4_property_id": {
      "default": "",
      "title": "Ga4 Property Id",
      "type": "string"
    },
    "days": {
      "default": 30,
      "title": "Days",
      "type": "integer"
    }
  },
  "title": "report_paid_social_fullArguments",
  "type": "object"
}
```

</details>

<a id="tool-report_ecommerce_full-5e56dbb0"></a>

## report_ecommerce_full

Handler: Other product (tools/reports.py): calls mcp.tool, \_date\_window, out.get('ga4', {}).get('overview', {}).get, out.get('google\_ads', {}).get, out.get('meta\_ads', {}).get, round, \_ga4\_report, ov.get.

```text
[READ] Composite multi-platform report tool. Full ecommerce revenue report across all connected platforms. Combines GA4 revenue/products/channels, Google Ads ROAS, and Meta purchase ROAS in one call. Args: ga4_property_id: GA4 property ID. google_ads_customer_id: Google Ads customer ID. Optional. meta_ad_account_id: Meta ad account ID. Optional. days: Number of days to report on. Default 30.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/reports.py#L838-L1007) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ga4_property_id": {
      "default": "",
      "title": "Ga4 Property Id",
      "type": "string"
    },
    "google_ads_customer_id": {
      "default": "",
      "title": "Google Ads Customer Id",
      "type": "string"
    },
    "meta_ad_account_id": {
      "default": "",
      "title": "Meta Ad Account Id",
      "type": "string"
    },
    "days": {
      "default": 30,
      "title": "Days",
      "type": "integer"
    }
  },
  "title": "report_ecommerce_fullArguments",
  "type": "object"
}
```

</details>

<a id="tool-report_new_client_audit-b48b43c0"></a>

## report_new_client_audit

Handler: Other product (tools/reports.py): calls mcp.tool, date.today().isoformat, round, build, google\_ads\_customer\_id.replace, \_gads\_client, client.get\_service, \_meta\_req.

```text
[READ] Composite multi-platform report tool. Audit a new client's marketing setup — checks what's connected, what's missing, and what needs fixing. Run this first when onboarding a new account to get a prioritized checklist of issues. Args: ga4_property_id: GA4 property ID to audit. google_ads_customer_id: Google Ads customer ID to audit. meta_ad_account_id: Meta ad account ID to audit. gsc_site_url: Search Console site URL to audit.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/reports.py#L1014-L1209) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ga4_property_id": {
      "default": "",
      "title": "Ga4 Property Id",
      "type": "string"
    },
    "google_ads_customer_id": {
      "default": "",
      "title": "Google Ads Customer Id",
      "type": "string"
    },
    "meta_ad_account_id": {
      "default": "",
      "title": "Meta Ad Account Id",
      "type": "string"
    },
    "gsc_site_url": {
      "default": "",
      "title": "Gsc Site Url",
      "type": "string"
    }
  },
  "title": "report_new_client_auditArguments",
  "type": "object"
}
```

</details>

<a id="tool-report_landing_page_quality-91a2a95a"></a>

## report_landing_page_quality

Handler: Other product (tools/reports.py): calls mcp.tool, \_date\_window, out\['poor\_performers'\].sort, \_ga4\_report, resp.get, google\_ads\_customer\_id.replace, \_gads\_client, client.get\_service.

```text
[READ] Composite multi-platform report tool. Landing page quality report combining GA4 engagement metrics and Google Ads keyword quality scores. Identifies your worst-performing landing pages so you know where to focus CRO efforts. Args: ga4_property_id: GA4 property ID. google_ads_customer_id: Google Ads customer ID. Optional — adds keyword quality scores. days: Number of days to report on. Default 30.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/reports.py#L1216-L1335) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ga4_property_id": {
      "default": "",
      "title": "Ga4 Property Id",
      "type": "string"
    },
    "google_ads_customer_id": {
      "default": "",
      "title": "Google Ads Customer Id",
      "type": "string"
    },
    "days": {
      "default": 30,
      "title": "Days",
      "type": "integer"
    }
  },
  "title": "report_landing_page_qualityArguments",
  "type": "object"
}
```

</details>

<a id="tool-report_campaign_health_check-b85ef759"></a>

## report_campaign_health_check

Handler: Other product (tools/reports.py): calls mcp.tool, \_date\_window, sum, out\['google\_ads\_issues'\].sort, out\['meta\_issues'\].sort, google\_ads\_customer\_id.replace, \_gads\_client, client.get\_service.

```text
[READ] Composite multi-platform report tool. Campaign health check — flags underperforming and problematic campaigns across Google Ads and Meta. Checks for: zero conversions with high spend, below-average CTR, high CPA, audience fatigue, low ROAS. Args: google_ads_customer_id: Google Ads customer ID. Optional. meta_ad_account_id: Meta ad account ID. Optional. days: Number of days to evaluate. Default 14.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/reports.py#L1342-L1480) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "google_ads_customer_id": {
      "default": "",
      "title": "Google Ads Customer Id",
      "type": "string"
    },
    "meta_ad_account_id": {
      "default": "",
      "title": "Meta Ad Account Id",
      "type": "string"
    },
    "days": {
      "default": 14,
      "title": "Days",
      "type": "integer"
    }
  },
  "title": "report_campaign_health_checkArguments",
  "type": "object"
}
```

</details>

<a id="tool-creative_generate_image-6bf4ca8a"></a>

## creative_generate_image

Handler: Other product (tools/creative.py): calls mcp.tool, \_require\_authenticated\_user, \_image\_result, \_generate\_images\_payload, CallToolResult, float, TextContent.

```text
[WRITE][RECOMMENDED] Step 1 of the normal image-ad flow. Generate an image, show the preview in chat, then pass generated_asset_id to meta_create_image_ad or meta_ads_create_image_ad_from_media. For long runs, tell the user you are generating the image before calling the tool. Never use shell commands to base64 local files from this result.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/creative.py#L511-L564) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "prompt": {
      "title": "Prompt",
      "type": "string"
    },
    "n": {
      "default": 1,
      "title": "N",
      "type": "integer"
    },
    "size": {
      "default": "auto",
      "title": "Size",
      "type": "string"
    },
    "quality": {
      "default": "low",
      "title": "Quality",
      "type": "string"
    },
    "model": {
      "default": "",
      "title": "Model",
      "type": "string"
    },
    "include_upload_bytes": {
      "default": false,
      "title": "Include Upload Bytes",
      "type": "boolean"
    }
  },
  "required": [
    "prompt"
  ],
  "title": "creative_generate_imageArguments",
  "type": "object"
}
```

</details>

<a id="tool-creative_start_image_generation-f7274324"></a>

## creative_start_image_generation

Handler: Other product (tools/creative.py): calls mcp.tool, \_require\_authenticated\_user, current\_user\_ctx.get, \_now\_iso, asyncio.create\_task, CallToolResult, RuntimeError, \_run\_image\_generation\_job.

```text
[WRITE] Queue image generation and return immediately with a job_id. Use this when you want Claude to keep working, then poll creative_check_image_generation_status until the image is ready.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/creative.py#L567-L636) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "prompt": {
      "title": "Prompt",
      "type": "string"
    },
    "n": {
      "default": 1,
      "title": "N",
      "type": "integer"
    },
    "size": {
      "default": "auto",
      "title": "Size",
      "type": "string"
    },
    "quality": {
      "default": "low",
      "title": "Quality",
      "type": "string"
    },
    "model": {
      "default": "",
      "title": "Model",
      "type": "string"
    }
  },
  "required": [
    "prompt"
  ],
  "title": "creative_start_image_generationArguments",
  "type": "object"
}
```

</details>

<a id="tool-creative_check_image_generation_status-27f64483"></a>

## creative_check_image_generation_status

Handler: Other product (tools/creative.py): calls mcp.tool, f"Job {job\['job\_id'\]} is {job\['status'\]}. {job.get('progress\_message') or ''}".strip, CallToolResult, \_get\_image\_job, job.get, isinstance, TextContent.

```text
[READ] Check whether a background image generation job is queued, running, completed, or failed. Use this after creative_start_image_generation.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/creative.py#L639-L678) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "job_id": {
      "title": "Job Id",
      "type": "string"
    }
  },
  "required": [
    "job_id"
  ],
  "title": "creative_check_image_generation_statusArguments",
  "type": "object"
}
```

</details>

<a id="tool-creative_get_image_generation_result-af0e5e9a"></a>

## creative_get_image_generation_result

Handler: Other product (tools/creative.py): calls mcp.tool, \_image\_result, \_get\_image\_job, CallToolResult, job.get, float, TextContent.

```text
[READ] Fetch the completed result for a background image generation job. Returns previews plus generated_asset_id values when the job is done.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/creative.py#L681-L725) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "job_id": {
      "title": "Job Id",
      "type": "string"
    },
    "include_upload_bytes": {
      "default": false,
      "title": "Include Upload Bytes",
      "type": "boolean"
    }
  },
  "required": [
    "job_id"
  ],
  "title": "creative_get_image_generation_resultArguments",
  "type": "object"
}
```

</details>

<a id="tool-generate_image-3fc7c9bc"></a>

## generate_image

Handler: Other product (tools/creative.py): calls mcp.tool, creative\_generate\_image.

```text
[WRITE][ALIAS] Legacy short alias for creative_generate_image. Same behavior, same output. Prefer creative_generate_image because its name is clearer for general prompt-to-image generation.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/creative.py#L728-L755) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "prompt": {
      "title": "Prompt",
      "type": "string"
    },
    "n": {
      "default": 1,
      "title": "N",
      "type": "integer"
    },
    "size": {
      "default": "auto",
      "title": "Size",
      "type": "string"
    },
    "quality": {
      "default": "low",
      "title": "Quality",
      "type": "string"
    },
    "model": {
      "default": "",
      "title": "Model",
      "type": "string"
    },
    "include_upload_bytes": {
      "default": false,
      "title": "Include Upload Bytes",
      "type": "boolean"
    }
  },
  "required": [
    "prompt"
  ],
  "title": "generate_imageArguments",
  "type": "object"
}
```

</details>

<a id="tool-creative_generate_ad_images-561b7f12"></a>

## creative_generate_ad_images

Handler: Other product (tools/creative.py): calls mcp.tool, audience.strip, offer.strip, required\_text.strip, brief\_parts.append, creative\_generate\_image, '\n'.join.

```text
[WRITE][RECOMMENDED] Step 1 of the normal image-ad flow when the user gives structured ad inputs. Generate one or more ad images, show previews in chat, then pass generated_asset_id from the chosen image into the Meta image-ad tools. For long runs, tell the user which step is running before calling the tool.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/creative.py#L758-L818) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "product_or_service": {
      "title": "Product Or Service",
      "type": "string"
    },
    "audience": {
      "default": "",
      "title": "Audience",
      "type": "string"
    },
    "platform": {
      "default": "Facebook Ads",
      "title": "Platform",
      "type": "string"
    },
    "language": {
      "default": "Hebrew",
      "title": "Language",
      "type": "string"
    },
    "offer": {
      "default": "",
      "title": "Offer",
      "type": "string"
    },
    "style": {
      "default": "modern high-converting paid social creative",
      "title": "Style",
      "type": "string"
    },
    "required_text": {
      "default": "",
      "title": "Required Text",
      "type": "string"
    },
    "n": {
      "default": 3,
      "title": "N",
      "type": "integer"
    },
    "size": {
      "default": "auto",
      "title": "Size",
      "type": "string"
    },
    "quality": {
      "default": "low",
      "title": "Quality",
      "type": "string"
    },
    "include_upload_bytes": {
      "default": false,
      "title": "Include Upload Bytes",
      "type": "boolean"
    }
  },
  "required": [
    "product_or_service"
  ],
  "title": "creative_generate_ad_imagesArguments",
  "type": "object"
}
```

</details>

<a id="tool-generate_ad_creative-1f0d7826"></a>

## generate_ad_creative

Handler: Other product (tools/creative.py): calls mcp.tool, creative\_generate\_ad\_images.

```text
[WRITE][ALIAS] Legacy short alias for creative_generate_ad_images. Same behavior. Prefer creative_generate_ad_images because it clearly signals structured ad-brief inputs and multi-variant output.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/creative.py#L821-L858) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "product_or_service": {
      "title": "Product Or Service",
      "type": "string"
    },
    "audience": {
      "default": "",
      "title": "Audience",
      "type": "string"
    },
    "platform": {
      "default": "Facebook Ads",
      "title": "Platform",
      "type": "string"
    },
    "language": {
      "default": "Hebrew",
      "title": "Language",
      "type": "string"
    },
    "offer": {
      "default": "",
      "title": "Offer",
      "type": "string"
    },
    "style": {
      "default": "modern high-converting paid social creative",
      "title": "Style",
      "type": "string"
    },
    "required_text": {
      "default": "",
      "title": "Required Text",
      "type": "string"
    },
    "n": {
      "default": 3,
      "title": "N",
      "type": "integer"
    },
    "size": {
      "default": "auto",
      "title": "Size",
      "type": "string"
    },
    "quality": {
      "default": "low",
      "title": "Quality",
      "type": "string"
    },
    "include_upload_bytes": {
      "default": false,
      "title": "Include Upload Bytes",
      "type": "boolean"
    }
  },
  "required": [
    "product_or_service"
  ],
  "title": "generate_ad_creativeArguments",
  "type": "object"
}
```

</details>

<a id="tool-media_upload_result-2b64050b"></a>

## media_upload_result

Handler: Other product (tools/media.py): calls mcp.tool, upload\_result\_payload.

```text
[READ] Tool tool. Check whether the user has finished uploading, and get the public URL. Call after media_upload_start. If status is "waiting" the user has not dropped the file in yet -- tell them so and check again rather than polling in a tight loop. Args: upload_id: The upload_id returned by media_upload_start.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/media.py#L23-L34) · Schema: tools/list.

Exposure: Full and slim surfaces; alternate slim registration preserved below.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "upload_id": {
      "title": "Upload Id",
      "type": "string"
    }
  },
  "required": [
    "upload_id"
  ],
  "title": "media_upload_resultArguments",
  "type": "object"
}
```

</details>

<details>
<summary>Alternate registration: Default slim surface</summary>

```json
{
  "exposure": "Default slim surface",
  "name": "media_upload_result",
  "title": "Check A Media Upload",
  "description": "Get the public URL of a file the user uploaded via media_upload_start. Returns status 'waiting' until they drop the file in -- tell them, do not poll in a tight loop. Pass the returned url straight to the platform media tool.",
  "inputSchema": {
    "properties": {
      "upload_id": {
        "title": "Upload Id",
        "type": "string"
      }
    },
    "required": [
      "upload_id"
    ],
    "title": "slim_media_upload_resultArguments",
    "type": "object"
  },
  "outputSchema": {
    "properties": {
      "result": {
        "title": "Result",
        "type": "string"
      }
    },
    "required": [
      "result"
    ],
    "title": "slim_media_upload_resultOutput",
    "type": "object"
  },
  "annotations": {
    "readOnlyHint": true,
    "destructiveHint": false,
    "idempotentHint": true,
    "openWorldHint": false
  }
}
```

</details>

<a id="tool-analytics_detect_plugin-9f2243a7"></a>

## analytics_detect_plugin

Handler: Other product (tools/wordpress/analytics.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Detect which analytics plugin is active: MonsterInsights, Site Kit, Analytify, ExactMetrics, or none
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/analytics.py#L27-L31) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "analytics_detect_pluginArguments",
  "type": "object"
}
```

</details>

<a id="tool-analytics_gtm_install-183843be"></a>

## analytics_gtm_install

Handler: Other product (tools/wordpress/analytics.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Install Google Tag Manager container code via companion plugin settings or custom code injection
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/analytics.py#L33-L40) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "method": {
      "default": "plugin_settings",
      "title": "Method",
      "type": "string"
    }
  },
  "required": [
    "container_id"
  ],
  "title": "analytics_gtm_installArguments",
  "type": "object"
}
```

</details>

<a id="tool-analytics_gtm_get_container_id-30c4fdf1"></a>

## analytics_gtm_get_container_id

Handler: Other product (tools/wordpress/analytics.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Get the currently configured GTM container ID from plugin settings or site options
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/analytics.py#L42-L46) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "analytics_gtm_get_container_idArguments",
  "type": "object"
}
```

</details>

<a id="tool-analytics_ga4_configure-9fefe0ad"></a>

## analytics_ga4_configure

Handler: Other product (tools/wordpress/analytics.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Set GA4 measurement ID via MonsterInsights, Site Kit, ExactMetrics, or companion settings
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/analytics.py#L48-L55) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "measurement_id": {
      "title": "Measurement Id",
      "type": "string"
    },
    "plugin": {
      "default": "auto",
      "title": "Plugin",
      "type": "string"
    }
  },
  "required": [
    "measurement_id"
  ],
  "title": "analytics_ga4_configureArguments",
  "type": "object"
}
```

</details>

<a id="tool-analytics_ga4_test_event-b799665f"></a>

## analytics_ga4_test_event

Handler: Other product (tools/wordpress/analytics.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Send a test event to GA4 via Measurement Protocol. Returns the payload and endpoint to use for server-side tracking
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/analytics.py#L57-L66) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "measurement_id": {
      "title": "Measurement Id",
      "type": "string"
    },
    "api_secret": {
      "title": "Api Secret",
      "type": "string"
    },
    "event_name": {
      "default": "test_event",
      "title": "Event Name",
      "type": "string"
    },
    "params": {
      "additionalProperties": true,
      "default": null,
      "title": "Params",
      "type": "object"
    }
  },
  "required": [
    "measurement_id",
    "api_secret"
  ],
  "title": "analytics_ga4_test_eventArguments",
  "type": "object"
}
```

</details>

<a id="tool-analytics_meta_pixel_install-d9055d2f"></a>

## analytics_meta_pixel_install

Handler: Other product (tools/wordpress/analytics.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Install Meta/Facebook pixel tracking code on the site via plugin settings or code injection
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/analytics.py#L68-L75) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "pixel_id": {
      "title": "Pixel Id",
      "type": "string"
    },
    "method": {
      "default": "plugin_settings",
      "title": "Method",
      "type": "string"
    }
  },
  "required": [
    "pixel_id"
  ],
  "title": "analytics_meta_pixel_installArguments",
  "type": "object"
}
```

</details>

<a id="tool-analytics_meta_pixel_configure-bfc3f38b"></a>

## analytics_meta_pixel_configure

Handler: Other product (tools/wordpress/analytics.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Configure Meta Pixel settings (events, advanced matching, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/analytics.py#L77-L88) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "pixel_id": {
      "title": "Pixel Id",
      "type": "string"
    },
    "advanced_matching": {
      "default": null,
      "title": "Advanced Matching",
      "type": "boolean"
    },
    "track_pageview": {
      "default": true,
      "title": "Track Pageview",
      "type": "boolean"
    },
    "track_viewcontent": {
      "default": null,
      "title": "Track Viewcontent",
      "type": "boolean"
    },
    "track_addtocart": {
      "default": null,
      "title": "Track Addtocart",
      "type": "boolean"
    },
    "track_purchase": {
      "default": null,
      "title": "Track Purchase",
      "type": "boolean"
    }
  },
  "required": [
    "pixel_id"
  ],
  "title": "analytics_meta_pixel_configureArguments",
  "type": "object"
}
```

</details>

<a id="tool-analytics_meta_capi_send-af8443f2"></a>

## analytics_meta_capi_send

Handler: Other product (tools/wordpress/analytics.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Send a server-side event via Meta Conversions API. Returns the payload and endpoint format for server-side event tracking
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/analytics.py#L90-L100) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "pixel_id": {
      "title": "Pixel Id",
      "type": "string"
    },
    "access_token": {
      "title": "Access Token",
      "type": "string"
    },
    "event_name": {
      "title": "Event Name",
      "type": "string"
    },
    "event_data": {
      "additionalProperties": true,
      "default": null,
      "title": "Event Data",
      "type": "object"
    },
    "user_data": {
      "additionalProperties": true,
      "default": null,
      "title": "User Data",
      "type": "object"
    }
  },
  "required": [
    "pixel_id",
    "access_token",
    "event_name"
  ],
  "title": "analytics_meta_capi_sendArguments",
  "type": "object"
}
```

</details>

<a id="tool-analytics_tiktok_pixel_install-b9fe7834"></a>

## analytics_tiktok_pixel_install

Handler: Other product (tools/wordpress/analytics.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Install TikTok pixel tracking code on the site
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/analytics.py#L102-L108) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "pixel_id": {
      "title": "Pixel Id",
      "type": "string"
    }
  },
  "required": [
    "pixel_id"
  ],
  "title": "analytics_tiktok_pixel_installArguments",
  "type": "object"
}
```

</details>

<a id="tool-analytics_linkedin_insight_install-3332b136"></a>

## analytics_linkedin_insight_install

Handler: Other product (tools/wordpress/analytics.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Install LinkedIn Insight Tag on the site for conversion tracking and audience building
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/analytics.py#L110-L116) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "partner_id": {
      "title": "Partner Id",
      "type": "string"
    }
  },
  "required": [
    "partner_id"
  ],
  "title": "analytics_linkedin_insight_installArguments",
  "type": "object"
}
```

</details>

<a id="tool-analytics_twitter_pixel_install-4834ea2c"></a>

## analytics_twitter_pixel_install

Handler: Other product (tools/wordpress/analytics.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Install Twitter/X pixel for conversion tracking
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/analytics.py#L118-L124) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "pixel_id": {
      "title": "Pixel Id",
      "type": "string"
    }
  },
  "required": [
    "pixel_id"
  ],
  "title": "analytics_twitter_pixel_installArguments",
  "type": "object"
}
```

</details>

<a id="tool-analytics_pinterest_tag_install-f8e05647"></a>

## analytics_pinterest_tag_install

Handler: Other product (tools/wordpress/analytics.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Install Pinterest Tag for conversion tracking
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/analytics.py#L126-L132) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "tag_id": {
      "title": "Tag Id",
      "type": "string"
    }
  },
  "required": [
    "tag_id"
  ],
  "title": "analytics_pinterest_tag_installArguments",
  "type": "object"
}
```

</details>

<a id="tool-analytics_clarity_install-17d52c15"></a>

## analytics_clarity_install

Handler: Other product (tools/wordpress/analytics.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Install Microsoft Clarity session recording and heatmap tracking code
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/analytics.py#L134-L140) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "project_id": {
      "title": "Project Id",
      "type": "string"
    }
  },
  "required": [
    "project_id"
  ],
  "title": "analytics_clarity_installArguments",
  "type": "object"
}
```

</details>

<a id="tool-analytics_hotjar_install-d46929cc"></a>

## analytics_hotjar_install

Handler: Other product (tools/wordpress/analytics.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Install Hotjar heatmap and session recording tracking code
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/analytics.py#L142-L148) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "site_id": {
      "title": "Site Id",
      "type": "string"
    }
  },
  "required": [
    "site_id"
  ],
  "title": "analytics_hotjar_installArguments",
  "type": "object"
}
```

</details>

<a id="tool-analytics_utm_builder-8b30e1fc"></a>

## analytics_utm_builder

Handler: Other product (tools/wordpress/analytics.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Generate a URL with UTM tracking parameters for campaign tracking
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/analytics.py#L150-L161) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "url": {
      "title": "Url",
      "type": "string"
    },
    "utm_source": {
      "title": "Utm Source",
      "type": "string"
    },
    "utm_medium": {
      "title": "Utm Medium",
      "type": "string"
    },
    "utm_campaign": {
      "title": "Utm Campaign",
      "type": "string"
    },
    "utm_term": {
      "default": null,
      "title": "Utm Term",
      "type": "string"
    },
    "utm_content": {
      "default": null,
      "title": "Utm Content",
      "type": "string"
    }
  },
  "required": [
    "url",
    "utm_source",
    "utm_medium",
    "utm_campaign"
  ],
  "title": "analytics_utm_builderArguments",
  "type": "object"
}
```

</details>

<a id="tool-analytics_wc_enhanced_ecommerce-9f31a114"></a>

## analytics_wc_enhanced_ecommerce

Handler: Other product (tools/wordpress/analytics.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Configure WooCommerce Enhanced Ecommerce tracking for GA4 (product impressions, add to cart, checkout, purchase events)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/analytics.py#L163-L174) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "measurement_id": {
      "title": "Measurement Id",
      "type": "string"
    },
    "plugin": {
      "default": "auto",
      "title": "Plugin",
      "type": "string"
    },
    "track_product_views": {
      "default": true,
      "title": "Track Product Views",
      "type": "boolean"
    },
    "track_add_to_cart": {
      "default": true,
      "title": "Track Add To Cart",
      "type": "boolean"
    },
    "track_checkout": {
      "default": true,
      "title": "Track Checkout",
      "type": "boolean"
    },
    "track_purchases": {
      "default": true,
      "title": "Track Purchases",
      "type": "boolean"
    }
  },
  "required": [
    "measurement_id"
  ],
  "title": "analytics_wc_enhanced_ecommerceArguments",
  "type": "object"
}
```

</details>

<a id="tool-analytics_custom_event_inject-3505e668"></a>

## analytics_custom_event_inject

Handler: Other product (tools/wordpress/analytics.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Inject custom JavaScript event tracking code into wp_head or wp_footer via companion plugin or custom code option
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/analytics.py#L176-L184) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "code": {
      "title": "Code",
      "type": "string"
    },
    "location": {
      "default": "footer",
      "title": "Location",
      "type": "string"
    },
    "label": {
      "default": null,
      "title": "Label",
      "type": "string"
    }
  },
  "required": [
    "code"
  ],
  "title": "analytics_custom_event_injectArguments",
  "type": "object"
}
```

</details>

<a id="tool-analytics_consent_banner_detect-807402d3"></a>

## analytics_consent_banner_detect

Handler: Other product (tools/wordpress/analytics.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Detect which cookie consent plugin is active (CookieYes, Complianz, CookieBot, GDPR Cookie Consent, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/analytics.py#L186-L190) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "analytics_consent_banner_detectArguments",
  "type": "object"
}
```

</details>

<a id="tool-analytics_consent_configure-b7c9ac55"></a>

## analytics_consent_configure

Handler: Other product (tools/wordpress/analytics.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Configure consent categories and cookie classification for the active consent plugin
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/analytics.py#L192-L202) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "plugin": {
      "default": "auto",
      "title": "Plugin",
      "type": "string"
    },
    "analytics_category": {
      "default": null,
      "title": "Analytics Category",
      "type": "string"
    },
    "marketing_category": {
      "default": null,
      "title": "Marketing Category",
      "type": "string"
    },
    "functional_category": {
      "default": null,
      "title": "Functional Category",
      "type": "string"
    },
    "banner_position": {
      "default": null,
      "title": "Banner Position",
      "type": "string"
    }
  },
  "title": "analytics_consent_configureArguments",
  "type": "object"
}
```

</details>

<a id="tool-analytics_google_ads_conversion-38b39938"></a>

## analytics_google_ads_conversion

Handler: Other product (tools/wordpress/analytics.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Set up Google Ads conversion tracking via gtag.js or GTM
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/analytics.py#L204-L214) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "conversion_id": {
      "title": "Conversion Id",
      "type": "string"
    },
    "conversion_label": {
      "title": "Conversion Label",
      "type": "string"
    },
    "method": {
      "default": "gtag",
      "title": "Method",
      "type": "string"
    },
    "value": {
      "default": null,
      "title": "Value",
      "type": "integer"
    },
    "currency": {
      "default": "USD",
      "title": "Currency",
      "type": "string"
    }
  },
  "required": [
    "conversion_id",
    "conversion_label"
  ],
  "title": "analytics_google_ads_conversionArguments",
  "type": "object"
}
```

</details>

<a id="tool-analytics_get_tracking_codes-31b6853f"></a>

## analytics_get_tracking_codes

Handler: Other product (tools/wordpress/analytics.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List all tracking codes/pixels currently installed on the site (checks plugin settings, wp_head, wp_footer, options)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/analytics.py#L216-L220) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "analytics_get_tracking_codesArguments",
  "type": "object"
}
```

</details>

<a id="tool-analytics_remove_tracking_code-ebf5d0a3"></a>

## analytics_remove_tracking_code

Handler: Other product (tools/wordpress/analytics.py): calls mcp.tool, \_wp().post, \_wp.

```text
[WRITE] Tool tool. Remove a specific tracking code or pixel from the site. Requires wp-mcp companion plugin.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/analytics.py#L222-L228) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "type": {
      "title": "Type",
      "type": "string"
    },
    "label": {
      "default": null,
      "title": "Label",
      "type": "string"
    }
  },
  "required": [
    "type"
  ],
  "title": "analytics_remove_tracking_codeArguments",
  "type": "object"
}
```

</details>

<a id="tool-analytics_verify_tracking_chain-56ef5c91"></a>

## analytics_verify_tracking_chain

Handler: Other product (tools/wordpress/analytics.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Verify the full tracking chain is set up correctly on this WordPress site. Checks: GTM installed, GA4 configured, Google Ads base tag present, conversion snippets active. Returns status for each layer and what's missing.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/analytics.py#L230-L234) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "analytics_verify_tracking_chainArguments",
  "type": "object"
}
```

</details>

<a id="tool-analytics_install_gtag_base-d384749f"></a>

## analytics_install_gtag_base

Handler: Other product (tools/wordpress/analytics.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Install the base gtag.js snippet for a Google Ads account (AW-XXXXXXXXX). Only the config snippet — no conversion event fired. Call this once per site before adding form or page conversions.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/analytics.py#L236-L242) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "conversion_id": {
      "title": "Conversion Id",
      "type": "string"
    }
  },
  "required": [
    "conversion_id"
  ],
  "title": "analytics_install_gtag_baseArguments",
  "type": "object"
}
```

</details>

<a id="tool-analytics_detect_forms-28444b9c"></a>

## analytics_detect_forms

Handler: Other product (tools/wordpress/analytics.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Scan a WordPress page's HTML content for all <form> elements and return their CSS selectors (id, class, action). Use this to find the right selector before setting up form conversion tracking.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/analytics.py#L244-L251) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "default": null,
      "title": "Page Id",
      "type": "integer"
    },
    "page_slug": {
      "default": null,
      "title": "Page Slug",
      "type": "string"
    }
  },
  "title": "analytics_detect_formsArguments",
  "type": "object"
}
```

</details>

<a id="tool-analytics_google_ads_form_conversion-0b2c17b7"></a>

## analytics_google_ads_form_conversion

Handler: Other product (tools/wordpress/analytics.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Inject JavaScript that fires a Google Ads conversion event ONLY when a specific form is submitted (by CSS selector). Use analytics_detect_forms first to find the correct selector.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/analytics.py#L253-L264) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "conversion_id": {
      "title": "Conversion Id",
      "type": "string"
    },
    "send_to": {
      "title": "Send To",
      "type": "string"
    },
    "form_selector": {
      "title": "Form Selector",
      "type": "string"
    },
    "value": {
      "default": null,
      "title": "Value",
      "type": "integer"
    },
    "currency": {
      "default": "ILS",
      "title": "Currency",
      "type": "string"
    },
    "label": {
      "default": null,
      "title": "Label",
      "type": "string"
    }
  },
  "required": [
    "conversion_id",
    "send_to",
    "form_selector"
  ],
  "title": "analytics_google_ads_form_conversionArguments",
  "type": "object"
}
```

</details>

<a id="tool-analytics_woo_google_ads_purchase-406887de"></a>

## analytics_woo_google_ads_purchase

Handler: Other product (tools/wordpress/analytics.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Inject Google Ads purchase conversion tracking for WooCommerce. Fires on the order-received (thank-you) page with the REAL order total read from the page DOM. Supports dynamic transaction_id from URL.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/analytics.py#L266-L274) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "conversion_id": {
      "title": "Conversion Id",
      "type": "string"
    },
    "send_to": {
      "title": "Send To",
      "type": "string"
    },
    "currency": {
      "default": "ILS",
      "title": "Currency",
      "type": "string"
    }
  },
  "required": [
    "conversion_id",
    "send_to"
  ],
  "title": "analytics_woo_google_ads_purchaseArguments",
  "type": "object"
}
```

</details>

<a id="tool-analytics_woo_google_ads_add_to_cart-d6a9fb37"></a>

## analytics_woo_google_ads_add_to_cart

Handler: Other product (tools/wordpress/analytics.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Inject Google Ads add-to-cart conversion tracking for WooCommerce. Fires via the WooCommerce 'added_to_cart' jQuery event (works for both AJAX and standard add-to-cart).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/analytics.py#L276-L285) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "conversion_id": {
      "title": "Conversion Id",
      "type": "string"
    },
    "send_to": {
      "title": "Send To",
      "type": "string"
    },
    "currency": {
      "default": "ILS",
      "title": "Currency",
      "type": "string"
    },
    "include_value": {
      "default": true,
      "title": "Include Value",
      "type": "boolean"
    }
  },
  "required": [
    "conversion_id",
    "send_to"
  ],
  "title": "analytics_woo_google_ads_add_to_cartArguments",
  "type": "object"
}
```

</details>

<a id="tool-analytics_woo_google_ads_checkout-ce77a154"></a>

## analytics_woo_google_ads_checkout

Handler: Other product (tools/wordpress/analytics.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Inject Google Ads begin-checkout conversion tracking for WooCommerce. Fires when the visitor lands on the /checkout/ page (not the order-received page). Reads cart total from DOM.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/analytics.py#L287-L296) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "conversion_id": {
      "title": "Conversion Id",
      "type": "string"
    },
    "send_to": {
      "title": "Send To",
      "type": "string"
    },
    "currency": {
      "default": "ILS",
      "title": "Currency",
      "type": "string"
    },
    "include_value": {
      "default": true,
      "title": "Include Value",
      "type": "boolean"
    }
  },
  "required": [
    "conversion_id",
    "send_to"
  ],
  "title": "analytics_woo_google_ads_checkoutArguments",
  "type": "object"
}
```

</details>

<a id="tool-analytics_woo_google_ads_setup_full-20c46951"></a>

## analytics_woo_google_ads_setup_full

Handler: Other product (tools/wordpress/analytics.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. One-shot: Install ALL three WooCommerce Google Ads conversion snippets (purchase with dynamic value, add to cart, begin checkout) in a single call.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/analytics.py#L298-L308) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "conversion_id": {
      "title": "Conversion Id",
      "type": "string"
    },
    "purchase_send_to": {
      "title": "Purchase Send To",
      "type": "string"
    },
    "add_to_cart_send_to": {
      "title": "Add To Cart Send To",
      "type": "string"
    },
    "checkout_send_to": {
      "title": "Checkout Send To",
      "type": "string"
    },
    "currency": {
      "default": "ILS",
      "title": "Currency",
      "type": "string"
    }
  },
  "required": [
    "conversion_id",
    "purchase_send_to",
    "add_to_cart_send_to",
    "checkout_send_to"
  ],
  "title": "analytics_woo_google_ads_setup_fullArguments",
  "type": "object"
}
```

</details>

<a id="tool-analytics_google_ads_page_conversion-3374ea28"></a>

## analytics_google_ads_page_conversion

Handler: Other product (tools/wordpress/analytics.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Inject JavaScript that fires a Google Ads conversion event when the visitor lands on a specific URL pattern (e.g. a thank-you page). Fires once per page load when URL matches.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/analytics.py#L310-L321) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "conversion_id": {
      "title": "Conversion Id",
      "type": "string"
    },
    "send_to": {
      "title": "Send To",
      "type": "string"
    },
    "url_pattern": {
      "title": "Url Pattern",
      "type": "string"
    },
    "value": {
      "default": null,
      "title": "Value",
      "type": "integer"
    },
    "currency": {
      "default": "ILS",
      "title": "Currency",
      "type": "string"
    },
    "label": {
      "default": null,
      "title": "Label",
      "type": "string"
    }
  },
  "required": [
    "conversion_id",
    "send_to",
    "url_pattern"
  ],
  "title": "analytics_google_ads_page_conversionArguments",
  "type": "object"
}
```

</details>

<a id="tool-portal_get_dashboard_config-d3058b7a"></a>

## portal_get_dashboard_config

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Get the current My Account dashboard layout configuration
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L27-L33) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "integer"
    }
  },
  "title": "portal_get_dashboard_configArguments",
  "type": "object"
}
```

</details>

<a id="tool-portal_customize_dashboard-0cf17742"></a>

## portal_customize_dashboard

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Add, remove, or reorder dashboard widgets on the My Account page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L35-L41) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "widgets": {
      "items": {},
      "title": "Widgets",
      "type": "array"
    }
  },
  "required": [
    "widgets"
  ],
  "title": "portal_customize_dashboardArguments",
  "type": "object"
}
```

</details>

<a id="tool-portal_add_dashboard_widget-32e5e9c1"></a>

## portal_add_dashboard_widget

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Add a custom widget to the My Account dashboard (orders summary, downloads, wishlist, loyalty points, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L43-L53) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "widget_id": {
      "title": "Widget Id",
      "type": "string"
    },
    "title": {
      "title": "Title",
      "type": "string"
    },
    "type": {
      "title": "Type",
      "type": "string"
    },
    "content": {
      "default": null,
      "title": "Content",
      "type": "string"
    },
    "position": {
      "default": null,
      "title": "Position",
      "type": "integer"
    }
  },
  "required": [
    "widget_id",
    "title",
    "type"
  ],
  "title": "portal_add_dashboard_widgetArguments",
  "type": "object"
}
```

</details>

<a id="tool-portal_get_customer_orders-93497a67"></a>

## portal_get_customer_orders

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Get all orders for a specific customer
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L55-L66) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "customer_id": {
      "title": "Customer Id",
      "type": "integer"
    },
    "per_page": {
      "default": 20,
      "title": "Per Page",
      "type": "integer"
    },
    "page": {
      "default": 1,
      "title": "Page",
      "type": "integer"
    },
    "status": {
      "default": null,
      "title": "Status",
      "type": "string"
    },
    "after": {
      "default": null,
      "title": "After",
      "type": "string"
    },
    "before": {
      "default": null,
      "title": "Before",
      "type": "string"
    }
  },
  "required": [
    "customer_id"
  ],
  "title": "portal_get_customer_ordersArguments",
  "type": "object"
}
```

</details>

<a id="tool-portal_get_customer_downloads-9649bb1a"></a>

## portal_get_customer_downloads

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Get available downloads for a customer
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L68-L74) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "customer_id": {
      "title": "Customer Id",
      "type": "integer"
    }
  },
  "required": [
    "customer_id"
  ],
  "title": "portal_get_customer_downloadsArguments",
  "type": "object"
}
```

</details>

<a id="tool-portal_get_customer_subscriptions-eba3ee08"></a>

## portal_get_customer_subscriptions

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Get active subscriptions for a customer (requires WC Subscriptions)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L76-L83) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "customer_id": {
      "title": "Customer Id",
      "type": "integer"
    },
    "status": {
      "default": null,
      "title": "Status",
      "type": "string"
    }
  },
  "required": [
    "customer_id"
  ],
  "title": "portal_get_customer_subscriptionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-portal_get_customer_wishlist-161c4a4c"></a>

## portal_get_customer_wishlist

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Get a customer's wishlist items (YITH or WC Wishlist plugin)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L85-L91) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "customer_id": {
      "title": "Customer Id",
      "type": "integer"
    }
  },
  "required": [
    "customer_id"
  ],
  "title": "portal_get_customer_wishlistArguments",
  "type": "object"
}
```

</details>

<a id="tool-portal_get_customer_points-b4499624"></a>

## portal_get_customer_points

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Get a customer's loyalty/reward points balance and history
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L93-L99) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "customer_id": {
      "title": "Customer Id",
      "type": "integer"
    }
  },
  "required": [
    "customer_id"
  ],
  "title": "portal_get_customer_pointsArguments",
  "type": "object"
}
```

</details>

<a id="tool-portal_update_customer_profile-a13d9912"></a>

## portal_update_customer_profile

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Update a customer's profile: billing/shipping address, phone, meta fields
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L101-L113) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "customer_id": {
      "title": "Customer Id",
      "type": "integer"
    },
    "first_name": {
      "default": null,
      "title": "First Name",
      "type": "string"
    },
    "last_name": {
      "default": null,
      "title": "Last Name",
      "type": "string"
    },
    "email": {
      "default": null,
      "title": "Email",
      "type": "string"
    },
    "billing": {
      "additionalProperties": true,
      "default": null,
      "title": "Billing",
      "type": "object"
    },
    "shipping": {
      "additionalProperties": true,
      "default": null,
      "title": "Shipping",
      "type": "object"
    },
    "meta_data": {
      "default": null,
      "items": {},
      "title": "Meta Data",
      "type": "array"
    }
  },
  "required": [
    "customer_id"
  ],
  "title": "portal_update_customer_profileArguments",
  "type": "object"
}
```

</details>

<a id="tool-portal_get_customer_stats-af7d54e9"></a>

## portal_get_customer_stats

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Get customer statistics: total spent, order count, average order value, member since
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L115-L121) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "customer_id": {
      "title": "Customer Id",
      "type": "integer"
    }
  },
  "required": [
    "customer_id"
  ],
  "title": "portal_get_customer_statsArguments",
  "type": "object"
}
```

</details>

<a id="tool-portal_create_custom_endpoint-57300d43"></a>

## portal_create_custom_endpoint

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Register a new My Account endpoint/tab (returns PHP code for functions.php)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L123-L133) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "slug": {
      "title": "Slug",
      "type": "string"
    },
    "title": {
      "title": "Title",
      "type": "string"
    },
    "content": {
      "default": null,
      "title": "Content",
      "type": "string"
    },
    "menu_position": {
      "default": null,
      "title": "Menu Position",
      "type": "integer"
    },
    "icon": {
      "default": null,
      "title": "Icon",
      "type": "string"
    }
  },
  "required": [
    "slug",
    "title"
  ],
  "title": "portal_create_custom_endpointArguments",
  "type": "object"
}
```

</details>

<a id="tool-portal_customize_menu-2a250fc4"></a>

## portal_customize_menu

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Customize My Account navigation menu items (add, remove, reorder)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L135-L141) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "items": {
      "items": {},
      "title": "Items",
      "type": "array"
    }
  },
  "required": [
    "items"
  ],
  "title": "portal_customize_menuArguments",
  "type": "object"
}
```

</details>

<a id="tool-portal_set_welcome_message-6db21030"></a>

## portal_set_welcome_message

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Set a personalized welcome/dashboard message for the My Account page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L143-L150) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "message": {
      "title": "Message",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "integer"
    }
  },
  "required": [
    "message"
  ],
  "title": "portal_set_welcome_messageArguments",
  "type": "object"
}
```

</details>

<a id="tool-portal_get_recent_activity-57e82ea6"></a>

## portal_get_recent_activity

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Get a customer's recent activity: orders, product views, reviews, etc.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L152-L160) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "customer_id": {
      "title": "Customer Id",
      "type": "integer"
    },
    "limit": {
      "default": 10,
      "title": "Limit",
      "type": "integer"
    },
    "types": {
      "default": null,
      "items": {},
      "title": "Types",
      "type": "array"
    }
  },
  "required": [
    "customer_id"
  ],
  "title": "portal_get_recent_activityArguments",
  "type": "object"
}
```

</details>

<a id="tool-portal_create_support_ticket-5fd563a8"></a>

## portal_create_support_ticket

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a support ticket for a customer (requires a support/ticket plugin)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L162-L173) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "customer_id": {
      "title": "Customer Id",
      "type": "integer"
    },
    "subject": {
      "title": "Subject",
      "type": "string"
    },
    "message": {
      "title": "Message",
      "type": "string"
    },
    "priority": {
      "default": "medium",
      "title": "Priority",
      "type": "string"
    },
    "order_id": {
      "default": null,
      "title": "Order Id",
      "type": "integer"
    },
    "category": {
      "default": null,
      "title": "Category",
      "type": "string"
    }
  },
  "required": [
    "customer_id",
    "subject",
    "message"
  ],
  "title": "portal_create_support_ticketArguments",
  "type": "object"
}
```

</details>

<a id="tool-portal_get_saved_addresses-5a5cebc7"></a>

## portal_get_saved_addresses

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Get a customer's saved billing and shipping addresses
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L175-L181) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "customer_id": {
      "title": "Customer Id",
      "type": "integer"
    }
  },
  "required": [
    "customer_id"
  ],
  "title": "portal_get_saved_addressesArguments",
  "type": "object"
}
```

</details>

<a id="tool-portal_manage_payment_methods-6048b04b"></a>

## portal_manage_payment_methods

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List or manage a customer's saved payment methods (tokens)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L183-L191) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "customer_id": {
      "title": "Customer Id",
      "type": "integer"
    },
    "action": {
      "default": "list",
      "title": "Action",
      "type": "string"
    },
    "token_id": {
      "default": null,
      "title": "Token Id",
      "type": "integer"
    }
  },
  "required": [
    "customer_id"
  ],
  "title": "portal_manage_payment_methodsArguments",
  "type": "object"
}
```

</details>

<a id="tool-portal_get_notifications-730a1c54"></a>

## portal_get_notifications

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Get pending notifications/alerts for a customer
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L193-L200) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "customer_id": {
      "title": "Customer Id",
      "type": "integer"
    },
    "unread_only": {
      "default": true,
      "title": "Unread Only",
      "type": "boolean"
    }
  },
  "required": [
    "customer_id"
  ],
  "title": "portal_get_notificationsArguments",
  "type": "object"
}
```

</details>

<a id="tool-design_color_palette_extract-0b21b3ae"></a>

## design_color_palette_extract

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Extract a color palette from a URL or image. Returns hex codes for the dominant colors found.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L202-L210) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "url": {
      "default": null,
      "title": "Url",
      "type": "string"
    },
    "count": {
      "default": 5,
      "title": "Count",
      "type": "integer"
    },
    "attachment_id": {
      "default": null,
      "title": "Attachment Id",
      "type": "integer"
    }
  },
  "title": "design_color_palette_extractArguments",
  "type": "object"
}
```

</details>

<a id="tool-design_color_palette_generate-87537ceb"></a>

## design_color_palette_generate

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Generate a harmonious color palette from a base color. Returns primary, secondary, accent, background, and text colors.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L212-L221) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "base_color": {
      "title": "Base Color",
      "type": "string"
    },
    "scheme": {
      "default": "complementary",
      "title": "Scheme",
      "type": "string"
    },
    "dark_mode": {
      "default": false,
      "title": "Dark Mode",
      "type": "boolean"
    },
    "industry": {
      "default": null,
      "title": "Industry",
      "type": "string"
    }
  },
  "required": [
    "base_color"
  ],
  "title": "design_color_palette_generateArguments",
  "type": "object"
}
```

</details>

<a id="tool-design_font_pair_suggest-9a0873f1"></a>

## design_font_pair_suggest

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Suggest Google Font pairings for heading and body text based on style preferences
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L223-L232) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "style": {
      "default": "modern",
      "title": "Style",
      "type": "string"
    },
    "industry": {
      "default": null,
      "title": "Industry",
      "type": "string"
    },
    "language": {
      "default": "latin",
      "title": "Language",
      "type": "string"
    },
    "count": {
      "default": 3,
      "title": "Count",
      "type": "integer"
    }
  },
  "title": "design_font_pair_suggestArguments",
  "type": "object"
}
```

</details>

<a id="tool-design_spacing_system_generate-062cd509"></a>

## design_spacing_system_generate

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Generate a consistent spacing scale (margin/padding) based on a base unit
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L234-L242) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "base_unit": {
      "default": 8,
      "title": "Base Unit",
      "type": "integer"
    },
    "scale": {
      "default": "linear",
      "title": "Scale",
      "type": "string"
    },
    "steps": {
      "default": 8,
      "title": "Steps",
      "type": "integer"
    }
  },
  "title": "design_spacing_system_generateArguments",
  "type": "object"
}
```

</details>

<a id="tool-design_apply_global_colors-5f2f1cde"></a>

## design_apply_global_colors

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Apply a color palette to the Elementor Global Kit (primary, secondary, text, accent colors)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L244-L257) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "primary": {
      "title": "Primary",
      "type": "string"
    },
    "secondary": {
      "default": null,
      "title": "Secondary",
      "type": "string"
    },
    "text": {
      "default": null,
      "title": "Text",
      "type": "string"
    },
    "accent": {
      "default": null,
      "title": "Accent",
      "type": "string"
    },
    "background": {
      "default": null,
      "title": "Background",
      "type": "string"
    },
    "heading_color": {
      "default": null,
      "title": "Heading Color",
      "type": "string"
    },
    "link_color": {
      "default": null,
      "title": "Link Color",
      "type": "string"
    },
    "link_hover_color": {
      "default": null,
      "title": "Link Hover Color",
      "type": "string"
    }
  },
  "required": [
    "primary"
  ],
  "title": "design_apply_global_colorsArguments",
  "type": "object"
}
```

</details>

<a id="tool-design_apply_global_fonts-eda7f94c"></a>

## design_apply_global_fonts

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Apply a font pairing to the Elementor Global Kit (heading and body fonts)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L259-L272) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "heading_font": {
      "title": "Heading Font",
      "type": "string"
    },
    "body_font": {
      "title": "Body Font",
      "type": "string"
    },
    "heading_weight": {
      "default": "700",
      "title": "Heading Weight",
      "type": "string"
    },
    "body_weight": {
      "default": "400",
      "title": "Body Weight",
      "type": "string"
    },
    "heading_size_desktop": {
      "default": null,
      "title": "Heading Size Desktop",
      "type": "integer"
    },
    "body_size": {
      "default": 16,
      "title": "Body Size",
      "type": "integer"
    },
    "line_height": {
      "default": 1.6,
      "title": "Line Height",
      "type": "integer"
    },
    "heading_line_height": {
      "default": 1.2,
      "title": "Heading Line Height",
      "type": "integer"
    }
  },
  "required": [
    "heading_font",
    "body_font"
  ],
  "title": "design_apply_global_fontsArguments",
  "type": "object"
}
```

</details>

<a id="tool-design_screenshot_page-77ad8a3f"></a>

## design_screenshot_page

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Get instructions for taking a page screenshot to analyze design. Returns URL and methods.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L274-L281) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "default": null,
      "title": "Page Id",
      "type": "integer"
    },
    "url": {
      "default": null,
      "title": "Url",
      "type": "string"
    }
  },
  "title": "design_screenshot_pageArguments",
  "type": "object"
}
```

</details>

<a id="tool-design_responsive_check-3618f69a"></a>

## design_responsive_check

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Check a page's responsive meta and provide viewport-specific recommendations
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L283-L290) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "breakpoints": {
      "default": null,
      "items": {},
      "title": "Breakpoints",
      "type": "array"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "design_responsive_checkArguments",
  "type": "object"
}
```

</details>

<a id="tool-design_css_custom_inject-bf217d48"></a>

## design_css_custom_inject

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Add custom CSS to the WordPress site (Additional CSS in Customizer)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L292-L301) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "css": {
      "title": "Css",
      "type": "string"
    },
    "mode": {
      "default": "append",
      "title": "Mode",
      "type": "string"
    },
    "scope": {
      "default": "global",
      "title": "Scope",
      "type": "string"
    },
    "page_id": {
      "default": null,
      "title": "Page Id",
      "type": "integer"
    }
  },
  "required": [
    "css"
  ],
  "title": "design_css_custom_injectArguments",
  "type": "object"
}
```

</details>

<a id="tool-design_css_get_custom-e1c6ea97"></a>

## design_css_get_custom

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Get the current custom CSS from the WordPress Customizer
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L303-L307) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "design_css_get_customArguments",
  "type": "object"
}
```

</details>

<a id="tool-design_google_fonts_list-e4fa35c0"></a>

## design_google_fonts_list

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List popular Google Fonts with metadata (category, variants, subsets)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L309-L318) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "category": {
      "default": null,
      "title": "Category",
      "type": "string"
    },
    "subset": {
      "default": null,
      "title": "Subset",
      "type": "string"
    },
    "limit": {
      "default": 20,
      "title": "Limit",
      "type": "integer"
    },
    "sort": {
      "default": "popularity",
      "title": "Sort",
      "type": "string"
    }
  },
  "title": "design_google_fonts_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-design_google_fonts_enqueue-461c77f9"></a>

## design_google_fonts_enqueue

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Add a Google Font to the WordPress site by injecting the stylesheet link
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L320-L328) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "families": {
      "items": {},
      "title": "Families",
      "type": "array"
    },
    "weights": {
      "default": null,
      "items": {},
      "title": "Weights",
      "type": "array"
    },
    "display": {
      "default": "swap",
      "title": "Display",
      "type": "string"
    }
  },
  "required": [
    "families"
  ],
  "title": "design_google_fonts_enqueueArguments",
  "type": "object"
}
```

</details>

<a id="tool-design_icon_libraries_list-f6a43ece"></a>

## design_icon_libraries_list

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List available icon libraries and their usage (Font Awesome, Elementor Icons, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L330-L334) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "design_icon_libraries_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-design_gradient_generate-641d9750"></a>

## design_gradient_generate

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Generate CSS gradient code from colors and direction
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L336-L345) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "colors": {
      "items": {},
      "title": "Colors",
      "type": "array"
    },
    "direction": {
      "default": "to bottom",
      "title": "Direction",
      "type": "string"
    },
    "type": {
      "default": "linear",
      "title": "Type",
      "type": "string"
    },
    "stops": {
      "default": null,
      "items": {},
      "title": "Stops",
      "type": "array"
    }
  },
  "required": [
    "colors"
  ],
  "title": "design_gradient_generateArguments",
  "type": "object"
}
```

</details>

<a id="tool-design_box_shadow_generate-a456d481"></a>

## design_box_shadow_generate

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Generate CSS box-shadow values for elevation/depth effects
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L347-L357) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "elevation": {
      "default": 2,
      "title": "Elevation",
      "type": "integer"
    },
    "color": {
      "default": "#000000",
      "title": "Color",
      "type": "string"
    },
    "opacity": {
      "default": 0.15,
      "title": "Opacity",
      "type": "integer"
    },
    "inset": {
      "default": false,
      "title": "Inset",
      "type": "boolean"
    },
    "custom": {
      "additionalProperties": true,
      "default": null,
      "title": "Custom",
      "type": "object"
    }
  },
  "title": "design_box_shadow_generateArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_theme_builder_list-80ebe128"></a>

## elementor_theme_builder_list

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, elementor\_list\_templates.

```text
[READ] Elementor tool. List Elementor theme builder templates with type filter (header, footer, single, archive, 404, loop-item)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L359-L366) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "type": {
      "default": null,
      "title": "Type",
      "type": "string"
    },
    "per_page": {
      "default": 50,
      "title": "Per Page",
      "type": "integer"
    },
    "search": {
      "default": null,
      "title": "Search",
      "type": "string"
    }
  },
  "title": "elementor_theme_builder_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_theme_builder_create-8d6b77c2"></a>

## elementor_theme_builder_create

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_create\_library\_template.

```text
[READ] Elementor tool. Create a new Elementor theme builder template (header, footer, single, archive, 404, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L368-L379) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "title": {
      "title": "Title",
      "type": "string"
    },
    "type": {
      "title": "Type",
      "type": "string"
    },
    "content": {
      "default": null,
      "title": "Content",
      "type": "string"
    },
    "status": {
      "default": "publish",
      "title": "Status",
      "type": "string"
    }
  },
  "required": [
    "title",
    "type"
  ],
  "title": "elementor_theme_builder_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_theme_builder_set_conditions-d768f588"></a>

## elementor_theme_builder_set_conditions

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_schema\_required.

```text
[READ] Elementor tool. Set display conditions for an Elementor theme builder template (where it should appear)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L381-L393) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "title": "Id",
      "type": "integer"
    },
    "conditions": {
      "items": {},
      "title": "Conditions",
      "type": "array"
    }
  },
  "required": [
    "id",
    "conditions"
  ],
  "title": "elementor_theme_builder_set_conditionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_theme_builder_preview-afc8cf13"></a>

## elementor_theme_builder_preview

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, elementor\_get\_template, \_elementor\_schema\_required.

```text
[READ] Elementor tool. Get the preview settings and conditions for a theme builder template
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L395-L406) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "title": "Id",
      "type": "integer"
    }
  },
  "required": [
    "id"
  ],
  "title": "elementor_theme_builder_previewArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_popup_create-a58bf454"></a>

## elementor_popup_create

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_create\_library\_template, {'width': width, 'height': height, 'position': position}.items.

```text
[READ] Elementor tool. Create a new Elementor popup template
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L408-L423) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "title": {
      "title": "Title",
      "type": "string"
    },
    "content": {
      "default": null,
      "title": "Content",
      "type": "string"
    },
    "status": {
      "default": "publish",
      "title": "Status",
      "type": "string"
    },
    "width": {
      "default": null,
      "title": "Width",
      "type": "string"
    },
    "height": {
      "default": null,
      "title": "Height",
      "type": "string"
    },
    "position": {
      "default": "center center",
      "title": "Position",
      "type": "string"
    }
  },
  "required": [
    "title"
  ],
  "title": "elementor_popup_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_popup_set_triggers-96e25abc"></a>

## elementor_popup_set_triggers

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_schema\_required.

```text
[READ] Elementor tool. Set trigger rules for an Elementor popup (when to show it)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L425-L436) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "title": "Id",
      "type": "integer"
    },
    "triggers": {
      "additionalProperties": true,
      "title": "Triggers",
      "type": "object"
    }
  },
  "required": [
    "id",
    "triggers"
  ],
  "title": "elementor_popup_set_triggersArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_popup_set_rules-fedca65a"></a>

## elementor_popup_set_rules

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_schema\_required.

```text
[READ] Elementor tool. Set advanced display rules for a popup (show after X visits, referrer URL, devices, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L438-L449) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "title": "Id",
      "type": "integer"
    },
    "rules": {
      "additionalProperties": true,
      "title": "Rules",
      "type": "object"
    }
  },
  "required": [
    "id",
    "rules"
  ],
  "title": "elementor_popup_set_rulesArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_popup_set_conditions-3cddf7a6"></a>

## elementor_popup_set_conditions

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_schema\_required.

```text
[READ] Elementor tool. Set display conditions for a popup (which pages to show it on)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L451-L462) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "title": "Id",
      "type": "integer"
    },
    "conditions": {
      "items": {},
      "title": "Conditions",
      "type": "array"
    }
  },
  "required": [
    "id",
    "conditions"
  ],
  "title": "elementor_popup_set_conditionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_form_get_submissions-fcf95d4d"></a>

## elementor_form_get_submissions

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_schema\_required, locals().items, locals.

```text
[READ] Elementor tool. Get Elementor form submissions (requires Form Submissions experiment enabled)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L464-L478) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "form_name": {
      "default": null,
      "title": "Form Name",
      "type": "string"
    },
    "per_page": {
      "default": 50,
      "title": "Per Page",
      "type": "integer"
    },
    "page": {
      "default": 1,
      "title": "Page",
      "type": "integer"
    },
    "status": {
      "default": null,
      "title": "Status",
      "type": "string"
    },
    "after": {
      "default": null,
      "title": "After",
      "type": "string"
    },
    "before": {
      "default": null,
      "title": "Before",
      "type": "string"
    }
  },
  "title": "elementor_form_get_submissionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_form_export_submissions-b10f82b4"></a>

## elementor_form_export_submissions

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_schema\_required, locals().items, locals.

```text
[READ] Elementor tool. Export Elementor form submissions as structured data
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L480-L492) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "form_name": {
      "default": null,
      "title": "Form Name",
      "type": "string"
    },
    "format": {
      "default": "json",
      "title": "Format",
      "type": "string"
    },
    "after": {
      "default": null,
      "title": "After",
      "type": "string"
    },
    "before": {
      "default": null,
      "title": "Before",
      "type": "string"
    }
  },
  "title": "elementor_form_export_submissionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_loop_create_template-0304438d"></a>

## elementor_loop_create_template

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_create\_library\_template.

```text
[READ] Elementor tool. Create a loop item template for use with Loop Grid / Loop Carousel widgets
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L494-L501) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "title": {
      "title": "Title",
      "type": "string"
    },
    "content": {
      "default": null,
      "title": "Content",
      "type": "string"
    },
    "status": {
      "default": "publish",
      "title": "Status",
      "type": "string"
    }
  },
  "required": [
    "title"
  ],
  "title": "elementor_loop_create_templateArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_loop_configure_query-cc8b6539"></a>

## elementor_loop_configure_query

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, elementor\_update\_widget\_settings.

```text
[READ] Elementor tool. Configure the query settings for a Loop Grid/Carousel widget on a page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L503-L510) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "widget_id": {
      "title": "Widget Id",
      "type": "string"
    },
    "query": {
      "additionalProperties": true,
      "title": "Query",
      "type": "object"
    }
  },
  "required": [
    "page_id",
    "widget_id",
    "query"
  ],
  "title": "elementor_loop_configure_queryArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_loop_set_layout-2e9ea81f"></a>

## elementor_loop_set_layout

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, elementor\_update\_widget\_settings.

```text
[READ] Elementor tool. Set the layout options for a Loop Grid/Carousel widget
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L512-L519) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "widget_id": {
      "title": "Widget Id",
      "type": "string"
    },
    "layout": {
      "additionalProperties": true,
      "title": "Layout",
      "type": "object"
    }
  },
  "required": [
    "page_id",
    "widget_id",
    "layout"
  ],
  "title": "elementor_loop_set_layoutArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_dynamic_tags_list-5678b2ab"></a>

## elementor_dynamic_tags_list

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_schema\_required.

```text
[READ] Elementor tool. List available Elementor dynamic tags and their groups
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L521-L527) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "elementor_dynamic_tags_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_dynamic_tags_apply-e0248199"></a>

## elementor_dynamic_tags_apply

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_schema\_required, locals().items, locals.

```text
[READ] Elementor tool. Wire a widget setting to a dynamic data source (ACF field, post title, featured image, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L529-L542) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "widget_id": {
      "title": "Widget Id",
      "type": "string"
    },
    "setting_name": {
      "title": "Setting Name",
      "type": "string"
    },
    "tag_name": {
      "title": "Tag Name",
      "type": "string"
    },
    "tag_settings": {
      "additionalProperties": true,
      "default": null,
      "title": "Tag Settings",
      "type": "object"
    }
  },
  "required": [
    "page_id",
    "widget_id",
    "setting_name",
    "tag_name"
  ],
  "title": "elementor_dynamic_tags_applyArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_custom_code_list-92606745"></a>

## elementor_custom_code_list

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_schema\_required.

```text
[READ] Elementor tool. List all Elementor custom code snippets (header/body scripts)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L544-L553) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "per_page": {
      "default": 50,
      "title": "Per Page",
      "type": "integer"
    }
  },
  "title": "elementor_custom_code_listArguments",
  "type": "object"
}
```

</details>
