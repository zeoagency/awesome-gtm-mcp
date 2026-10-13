# RoyAzran/mcp-ads: supporting and other-product tools

[Provider inventory](royazran--mcp-ads.md) · [Global tool index](../TOOL_INDEX.md)

Tools 601–750 of 3131. Exact schemas from the same upstream snapshot.

<a id="tool-gads_get_pmax_performance-6fad6e12"></a>

## gads_get_pmax_performance

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, results.append.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get Performance Max campaign performance report. Args: date_range: e.g. LAST_30_DAYS. customer_id: optional.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L12757-L12789) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "date_range": {
      "default": "LAST_30_DAYS",
      "title": "Date Range",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_get_pmax_performanceArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_search_terms_report-e4fe93f4"></a>

## gads_get_search_terms_report

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_date\_range, ' AND '.join, \_search, conditions.append, \_m, round, \_pct.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get actual search queries (search terms report) that triggered ads. Args: campaign_id: Filter by campaign ID (optional). ad_group_id: Filter by ad group ID (optional). start_date: YYYY-MM-DD (default last 30 days). end_date: YYYY-MM-DD. min_clicks: Minimum clicks threshold to filter results. customer_id: Google Ads customer ID.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L12796-L12859) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "default": "",
      "title": "Campaign Id",
      "type": "string"
    },
    "ad_group_id": {
      "default": "",
      "title": "Ad Group Id",
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
    "min_clicks": {
      "default": 0,
      "title": "Min Clicks",
      "type": "integer"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_get_search_terms_reportArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_sitelink_details-0ed60642"></a>

## gads_get_sitelink_details

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get full details of a sitelink asset.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L12870-L12896) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "asset_resource_name": {
      "title": "Asset Resource Name",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "asset_resource_name"
  ],
  "title": "gads_get_sitelink_detailsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_smart_campaign_status-56b24fa5"></a>

## gads_get_smart_campaign_status

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_get\_client.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get smart campaign status and eligibility details.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L12905-L12928) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id"
  ],
  "title": "gads_get_smart_campaign_statusArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_account_budgets-66c43b00"></a>

## gads_list_account_budgets

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List all account-level budgets.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L12937-L12965) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_list_account_budgetsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_accounts-7d171754"></a>

## gads_list_accounts

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List all sub-accounts (clients) under the MCC with name, ID, and status. Args: customer_id: MCC (manager) customer ID. Leave blank for default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L12972-L13013) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_list_accountsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_ad_group_audience_criteria-5c307ddc"></a>

## gads_list_ad_group_audience_criteria

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, \_search.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List all audience criteria for an ad group (positive and negative).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L13020-L13053) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_group_id": {
      "title": "Ad Group Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id"
  ],
  "title": "gads_list_ad_group_audience_criteriaArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_ad_group_extensions-ebbc85e1"></a>

## gads_list_ad_group_extensions

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, \_search.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List all asset extensions attached to an ad group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L13060-L13081) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_group_id": {
      "title": "Ad Group Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id"
  ],
  "title": "gads_list_ad_group_extensionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_ad_group_location_targets-2307d6eb"></a>

## gads_list_ad_group_location_targets

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, \_search.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List all location targeting criteria for an ad group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L13090-L13113) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_group_id": {
      "title": "Ad Group Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id"
  ],
  "title": "gads_list_ad_group_location_targetsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_asset_automation_settings-c165e5d4"></a>

## gads_list_asset_automation_settings

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, settings.append.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List asset automation settings for a campaign (PMax auto-created assets).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L13120-L13141) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id"
  ],
  "title": "gads_list_asset_automation_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_asset_group_audience_signals-ae795509"></a>

## gads_list_asset_group_audience_signals

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, \_search.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List audience signals for a PMax asset group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L13150-L13170) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "asset_group_id": {
      "title": "Asset Group Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "asset_group_id"
  ],
  "title": "gads_list_asset_group_audience_signalsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_bidding_data_exclusions-c8493418"></a>

## gads_list_bidding_data_exclusions

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List all bidding data exclusions.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L13179-L13204) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_list_bidding_data_exclusionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_bidding_seasonality_adjustments-d6a982ec"></a>

## gads_list_bidding_seasonality_adjustments

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List all bidding seasonality adjustments.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L13211-L13238) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_list_bidding_seasonality_adjustmentsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_call_assets-11373891"></a>

## gads_list_call_assets

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List all call assets.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L13245-L13268) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_list_call_assetsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_campaign_audience_views-623e6668"></a>

## gads_list_campaign_audience_views

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, \_search, rows.append.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List audience performance for a campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L13275-L13303) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id"
  ],
  "title": "gads_list_campaign_audience_viewsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_campaign_audiences-bc332c2a"></a>

## gads_list_campaign_audiences

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, \_search.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List all audience criteria attached to a campaign (positive and negative).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L13310-L13340) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id"
  ],
  "title": "gads_list_campaign_audiencesArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_campaign_drafts-71254a39"></a>

## gads_list_campaign_drafts

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_get\_client.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List campaign drafts, optionally filtered by base campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L13347-L13372) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "default": "",
      "title": "Campaign Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_list_campaign_draftsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_campaign_ip_exclusions-2811b902"></a>

## gads_list_campaign_ip_exclusions

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, \_search, exclusions.append.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List IP address exclusions for a campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L13379-L13399) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id"
  ],
  "title": "gads_list_campaign_ip_exclusionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_campaign_language_targets-21caa816"></a>

## gads_list_campaign_language_targets

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, \_search.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List all language targeting criteria for a campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L13406-L13427) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id"
  ],
  "title": "gads_list_campaign_language_targetsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_campaign_location_targets-382fe773"></a>

## gads_list_campaign_location_targets

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, \_search.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List all location targeting criteria for a campaign (positive and negative).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L13436-L13460) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id"
  ],
  "title": "gads_list_campaign_location_targetsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_campaign_negative_placements-b8db1f00"></a>

## gads_list_campaign_negative_placements

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, \_search, placements.append.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List negative placement exclusions for a campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L13467-L13489) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id"
  ],
  "title": "gads_list_campaign_negative_placementsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_campaigns_by_type-bca88922"></a>

## gads_list_campaigns_by_type

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List campaigns filtered by advertising channel type. Types: SEARCH, DISPLAY, SHOPPING, VIDEO, MULTI_CHANNEL, LOCAL, SMART, PERFORMANCE_MAX, DISCOVERY, LOCAL_SERVICES, DEMAND_GEN.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L13496-L13525) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "advertising_channel_type": {
      "title": "Advertising Channel Type",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "advertising_channel_type"
  ],
  "title": "gads_list_campaigns_by_typeArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_conversion_categories-6fb138ca"></a>

## gads_list_conversion_categories

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, defaultdict, by\_category\[str(ca.category)\].append, sum, by\_category.values.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List all conversion actions grouped by category.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L13532-L13562) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_list_conversion_categoriesArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_conversion_value_rule_sets-06f4b68c"></a>

## gads_list_conversion_value_rule_sets

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List all conversion value rule sets.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L13571-L13596) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_list_conversion_value_rule_setsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_feeds-45ea1aeb"></a>

## gads_list_feeds

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List all feeds in the account (legacy feed management).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L13603-L13625) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_list_feedsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_keywords_with_quality_score-06ec3949"></a>

## gads_list_keywords_with_quality_score

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List keywords with their quality scores. Filter by score range.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L13634-L13678) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "default": "",
      "title": "Campaign Id",
      "type": "string"
    },
    "min_quality_score": {
      "default": 1,
      "title": "Min Quality Score",
      "type": "integer"
    },
    "max_quality_score": {
      "default": 10,
      "title": "Max Quality Score",
      "type": "integer"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_list_keywords_with_quality_scoreArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_pmax_brand_exclusions-dba9d96c"></a>

## gads_list_pmax_brand_exclusions

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, \_search.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List brand exclusions for a Performance Max campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L13687-L13711) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id"
  ],
  "title": "gads_list_pmax_brand_exclusionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_price_assets-8d0540b5"></a>

## gads_list_price_assets

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List all price assets.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L13718-L13741) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_list_price_assetsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_promotion_assets-18db3c3c"></a>

## gads_list_promotion_assets

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List all promotion assets.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L13748-L13774) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_list_promotion_assetsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_rsa_performance-7040a81d"></a>

## gads_list_rsa_performance

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List RSA ads with asset performance metrics (headline/description serving stats).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L13781-L13818) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "default": "",
      "title": "Campaign Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_list_rsa_performanceArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_shared_budgets-3b33eb56"></a>

## gads_list_shared_budgets

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List all shared budgets in the account.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L13827-L13854) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_list_shared_budgetsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_sitelinks-14d1e09e"></a>

## gads_list_sitelinks

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List all sitelink assets on a campaign (or account-wide if no campaign given). Args: campaign_id: Campaign numeric ID (optional; omit for account-level sitelinks). customer_id: Google Ads customer ID.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L13863-L13931) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "default": "",
      "title": "Campaign Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_list_sitelinksArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_pause_keyword-4d164862"></a>

## gads_pause_keyword

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, op.update\_mask.CopyFrom, service.mutate\_ad\_group\_criteria, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Pause a specific keyword. Args: ad_group_id: Ad group ID containing the keyword. criterion_id: Keyword criterion ID. customer_id: Google Ads customer ID.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L13938-L13962) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_group_id": {
      "title": "Ad Group Id",
      "type": "string"
    },
    "criterion_id": {
      "title": "Criterion Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "criterion_id"
  ],
  "title": "gads_pause_keywordArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_remove_ad_group_age_range-bab9aacb"></a>

## gads_remove_ad_group_age_range

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, service.mutate\_ad\_group\_criteria.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Remove an age range criterion from an ad group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L13969-L13980) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_group_id": {
      "title": "Ad Group Id",
      "type": "string"
    },
    "criterion_id": {
      "title": "Criterion Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "criterion_id"
  ],
  "title": "gads_remove_ad_group_age_rangeArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_remove_ad_group_gender-3ef2471e"></a>

## gads_remove_ad_group_gender

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, service.mutate\_ad\_group\_criteria.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Remove a gender criterion from an ad group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L13987-L13998) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_group_id": {
      "title": "Ad Group Id",
      "type": "string"
    },
    "criterion_id": {
      "title": "Criterion Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "criterion_id"
  ],
  "title": "gads_remove_ad_group_genderArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_remove_ad_group_income_range-91060294"></a>

## gads_remove_ad_group_income_range

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, service.mutate\_ad\_group\_criteria.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Remove an income range criterion from an ad group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L14005-L14016) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_group_id": {
      "title": "Ad Group Id",
      "type": "string"
    },
    "criterion_id": {
      "title": "Criterion Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "criterion_id"
  ],
  "title": "gads_remove_ad_group_income_rangeArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_remove_ad_group_mobile_device-64fa171f"></a>

## gads_remove_ad_group_mobile_device

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, service.mutate\_ad\_group\_criteria.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Remove mobile device targeting criterion from an ad group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L14023-L14034) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_group_id": {
      "title": "Ad Group Id",
      "type": "string"
    },
    "criterion_id": {
      "title": "Criterion Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "criterion_id"
  ],
  "title": "gads_remove_ad_group_mobile_deviceArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_remove_ad_group_negative_placement-fb6eb0fe"></a>

## gads_remove_ad_group_negative_placement

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, service.mutate\_ad\_group\_criteria.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Remove a negative placement criterion from an ad group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L14041-L14052) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_group_id": {
      "title": "Ad Group Id",
      "type": "string"
    },
    "criterion_id": {
      "title": "Criterion Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "criterion_id"
  ],
  "title": "gads_remove_ad_group_negative_placementArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_remove_ad_group_negative_topic-0033af77"></a>

## gads_remove_ad_group_negative_topic

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, service.mutate\_ad\_group\_criteria.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Remove a negative topic criterion from an ad group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L14059-L14070) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_group_id": {
      "title": "Ad Group Id",
      "type": "string"
    },
    "criterion_id": {
      "title": "Criterion Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "criterion_id"
  ],
  "title": "gads_remove_ad_group_negative_topicArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_remove_ad_group_operating_system-3b36ffcf"></a>

## gads_remove_ad_group_operating_system

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, service.mutate\_ad\_group\_criteria.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Remove operating system targeting criterion from an ad group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L14077-L14088) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_group_id": {
      "title": "Ad Group Id",
      "type": "string"
    },
    "criterion_id": {
      "title": "Criterion Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "criterion_id"
  ],
  "title": "gads_remove_ad_group_operating_systemArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_remove_ad_group_parental_status-cbe39617"></a>

## gads_remove_ad_group_parental_status

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, service.mutate\_ad\_group\_criteria.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Remove a parental status criterion from an ad group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L14097-L14108) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_group_id": {
      "title": "Ad Group Id",
      "type": "string"
    },
    "criterion_id": {
      "title": "Criterion Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "criterion_id"
  ],
  "title": "gads_remove_ad_group_parental_statusArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_remove_ad_group_placement-b04e1d18"></a>

## gads_remove_ad_group_placement

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, service.mutate\_ad\_group\_criteria.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Remove a placement criterion from an ad group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L14115-L14126) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_group_id": {
      "title": "Ad Group Id",
      "type": "string"
    },
    "criterion_id": {
      "title": "Criterion Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "criterion_id"
  ],
  "title": "gads_remove_ad_group_placementArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_remove_ad_group_proximity-930a0346"></a>

## gads_remove_ad_group_proximity

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, service.mutate\_ad\_group\_criteria.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Remove a proximity criterion from an ad group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L14133-L14144) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_group_id": {
      "title": "Ad Group Id",
      "type": "string"
    },
    "criterion_id": {
      "title": "Criterion Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "criterion_id"
  ],
  "title": "gads_remove_ad_group_proximityArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_remove_ad_group_topic-528e6e24"></a>

## gads_remove_ad_group_topic

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, service.mutate\_ad\_group\_criteria.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Remove a topic criterion from an ad group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L14153-L14164) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_group_id": {
      "title": "Ad Group Id",
      "type": "string"
    },
    "criterion_id": {
      "title": "Criterion Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "criterion_id"
  ],
  "title": "gads_remove_ad_group_topicArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_remove_asset-134646ee"></a>

## gads_remove_asset

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, \_search, client.get\_service, client.get\_type, ca\_service.mutate\_campaign\_assets, field\_type.upper.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Remove an asset from a campaign (detach it, not delete permanently). Args: asset_resource_name: Full resource name of the asset, e.g. 'customers/123/assets/456'. campaign_id: Campaign to remove asset from. field_type: Asset field type: SITELINK|CALLOUT|CALL|STRUCTURED_SNIPPET|etc. customer_id: Google Ads customer ID.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L14171-L14211) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "asset_resource_name": {
      "title": "Asset Resource Name",
      "type": "string"
    },
    "campaign_id": {
      "default": "",
      "title": "Campaign Id",
      "type": "string"
    },
    "field_type": {
      "default": "SITELINK",
      "title": "Field Type",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "asset_resource_name"
  ],
  "title": "gads_remove_assetArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_remove_audience_from_ad_group-109d3f11"></a>

## gads_remove_audience_from_ad_group

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, service.mutate\_ad\_group\_criteria.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Remove an audience criterion (positive or negative) from an ad group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L14222-L14233) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_group_id": {
      "title": "Ad Group Id",
      "type": "string"
    },
    "criterion_id": {
      "title": "Criterion Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "criterion_id"
  ],
  "title": "gads_remove_audience_from_ad_groupArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_remove_audience_from_campaign-24eacbb0"></a>

## gads_remove_audience_from_campaign

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, service.mutate\_campaign\_criteria.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Remove an audience criterion (positive or negative) from a campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L14242-L14253) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "criterion_id": {
      "title": "Criterion Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id",
    "criterion_id"
  ],
  "title": "gads_remove_audience_from_campaignArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_remove_bidding_data_exclusion-b4869854"></a>

## gads_remove_bidding_data_exclusion

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, service.mutate\_bidding\_data\_exclusions.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Remove a bidding data exclusion by resource name.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L14260-L14271) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "data_exclusion_resource_name": {
      "title": "Data Exclusion Resource Name",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "data_exclusion_resource_name"
  ],
  "title": "gads_remove_bidding_data_exclusionArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_remove_bidding_seasonality_adjustment-9e6fae05"></a>

## gads_remove_bidding_seasonality_adjustment

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, service.mutate\_bidding\_seasonality\_adjustments.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Remove a bidding seasonality adjustment by resource name.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L14280-L14291) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "seasonality_adjustment_resource_name": {
      "title": "Seasonality Adjustment Resource Name",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "seasonality_adjustment_resource_name"
  ],
  "title": "gads_remove_bidding_seasonality_adjustmentArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_remove_campaign_carrier-a6d1877e"></a>

## gads_remove_campaign_carrier

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, service.mutate\_campaign\_criteria.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Remove carrier targeting criterion from a campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L14298-L14309) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "criterion_id": {
      "title": "Criterion Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id",
    "criterion_id"
  ],
  "title": "gads_remove_campaign_carrierArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_remove_campaign_draft-1e55aaf2"></a>

## gads_remove_campaign_draft

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, service.mutate\_campaign\_drafts.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Remove (delete) a campaign draft.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L14316-L14327) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "base_campaign_id": {
      "title": "Base Campaign Id",
      "type": "string"
    },
    "draft_id": {
      "title": "Draft Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "base_campaign_id",
    "draft_id"
  ],
  "title": "gads_remove_campaign_draftArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_remove_campaign_geo_target-2f15c4fb"></a>

## gads_remove_campaign_geo_target

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, service.mutate\_campaign\_criteria.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Remove a geo target (location) criterion from a campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L14336-L14347) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "criterion_id": {
      "title": "Criterion Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id",
    "criterion_id"
  ],
  "title": "gads_remove_campaign_geo_targetArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_remove_campaign_ip_exclusion-bcbfc885"></a>

## gads_remove_campaign_ip_exclusion

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, service.mutate\_campaign\_criteria.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Remove an IP address exclusion from a campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L14354-L14365) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "criterion_id": {
      "title": "Criterion Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id",
    "criterion_id"
  ],
  "title": "gads_remove_campaign_ip_exclusionArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_remove_campaign_language-3eb0d2ad"></a>

## gads_remove_campaign_language

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, service.mutate\_campaign\_criteria.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Remove a language criterion from a campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L14372-L14383) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "criterion_id": {
      "title": "Criterion Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id",
    "criterion_id"
  ],
  "title": "gads_remove_campaign_languageArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_remove_campaign_mobile_device-b14575d2"></a>

## gads_remove_campaign_mobile_device

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, service.mutate\_campaign\_criteria.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Remove mobile device targeting criterion from a campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L14390-L14401) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "criterion_id": {
      "title": "Criterion Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id",
    "criterion_id"
  ],
  "title": "gads_remove_campaign_mobile_deviceArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_remove_campaign_negative_topic-6d037465"></a>

## gads_remove_campaign_negative_topic

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, service.mutate\_campaign\_criteria.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Remove a negative topic criterion from a campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L14410-L14421) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "criterion_id": {
      "title": "Criterion Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id",
    "criterion_id"
  ],
  "title": "gads_remove_campaign_negative_topicArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_remove_campaign_operating_system-a86b26d0"></a>

## gads_remove_campaign_operating_system

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, service.mutate\_campaign\_criteria.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Remove an operating system criterion from a campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L14428-L14439) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "criterion_id": {
      "title": "Criterion Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id",
    "criterion_id"
  ],
  "title": "gads_remove_campaign_operating_systemArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_remove_campaign_placement-3ad827f4"></a>

## gads_remove_campaign_placement

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, service.mutate\_campaign\_criteria.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Remove a placement criterion from a campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L14448-L14459) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "criterion_id": {
      "title": "Criterion Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id",
    "criterion_id"
  ],
  "title": "gads_remove_campaign_placementArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_remove_campaign_topic-0fdbdd50"></a>

## gads_remove_campaign_topic

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, service.mutate\_campaign\_criteria.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Remove a topic criterion from a campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L14466-L14477) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "criterion_id": {
      "title": "Criterion Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id",
    "criterion_id"
  ],
  "title": "gads_remove_campaign_topicArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_remove_keywords_from_shared_list-aa1cfb04"></a>

## gads_remove_keywords_from_shared_list

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, service.mutate\_shared\_criteria, client.get\_type, ops.append.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Remove keywords from a shared negative keyword list. criterion_ids: list of criterion ID strings.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L14484-L14499) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "shared_set_id": {
      "title": "Shared Set Id",
      "type": "string"
    },
    "criterion_ids": {
      "items": {},
      "title": "Criterion Ids",
      "type": "array"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "shared_set_id",
    "criterion_ids"
  ],
  "title": "gads_remove_keywords_from_shared_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_remove_label_from_keyword-47905155"></a>

## gads_remove_label_from_keyword

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, service.mutate\_ad\_group\_criterion\_labels.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Remove a label from a keyword (ad group criterion).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L14506-L14518) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_group_id": {
      "title": "Ad Group Id",
      "type": "string"
    },
    "criterion_id": {
      "title": "Criterion Id",
      "type": "string"
    },
    "label_id": {
      "title": "Label Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "criterion_id",
    "label_id"
  ],
  "title": "gads_remove_label_from_keywordArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_remove_pmax_brand_exclusion-19a6ae14"></a>

## gads_remove_pmax_brand_exclusion

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, service.mutate\_campaign\_criteria.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Remove a brand exclusion from a Performance Max campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L14527-L14538) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "criterion_id": {
      "title": "Criterion Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id",
    "criterion_id"
  ],
  "title": "gads_remove_pmax_brand_exclusionArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_remove_users_from_customer_match_list-fc9b0105"></a>

## gads_remove_users_from_customer_match_list

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, offline\_service.create\_offline\_user\_data\_job, offline\_service.add\_offline\_user\_data\_job\_operations, offline\_service.run\_offline\_user\_data\_job, hashlib.sha256(email.strip().lower().encode()).hexdigest.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Remove users from a Customer Match user list. emails: list of email addresses (will be SHA-256 hashed). phone_numbers: list of phone numbers in E.164 format.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L14547-L14603) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "user_list_id": {
      "title": "User List Id",
      "type": "string"
    },
    "emails": {
      "default": null,
      "items": {},
      "title": "Emails",
      "type": "array"
    },
    "phone_numbers": {
      "default": null,
      "items": {},
      "title": "Phone Numbers",
      "type": "array"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "user_list_id"
  ],
  "title": "gads_remove_users_from_customer_match_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_rename_ad_group-83635cbd"></a>

## gads_rename_ad_group

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, op.update\_mask.CopyFrom, service.mutate\_ad\_groups, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Rename an ad group. Args: ad_group_id: Ad group numeric ID (required). new_name: New ad group name (required). customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L14612-L14636) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_group_id": {
      "title": "Ad Group Id",
      "type": "string"
    },
    "new_name": {
      "title": "New Name",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "new_name"
  ],
  "title": "gads_rename_ad_groupArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_rename_ad_with_label-51c22319"></a>

## gads_rename_ad_with_label

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, label\_service.mutate\_labels, al\_service.mutate\_ad\_group\_ad\_labels.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Apply a label to an ad as a naming/tagging mechanism (since ads have no name field). Args: ad_group_id: Ad group ID (required). ad_id: Ad ID (required). label_name: Label name to create and apply as the ad's identifier (required). customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L14643-L14675) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_group_id": {
      "title": "Ad Group Id",
      "type": "string"
    },
    "ad_id": {
      "title": "Ad Id",
      "type": "string"
    },
    "label_name": {
      "title": "Label Name",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "ad_id",
    "label_name"
  ],
  "title": "gads_rename_ad_with_labelArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_rename_asset_group-a994ffd0"></a>

## gads_rename_asset_group

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, op.update\_mask.CopyFrom, service.mutate\_asset\_groups, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Rename a Performance Max asset group. Args: asset_group_id: Asset group numeric ID (required). new_name: New asset group name (required). customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L14686-L14710) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "asset_group_id": {
      "title": "Asset Group Id",
      "type": "string"
    },
    "new_name": {
      "title": "New Name",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "asset_group_id",
    "new_name"
  ],
  "title": "gads_rename_asset_groupArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_rename_campaign-a5765d8c"></a>

## gads_rename_campaign

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, op.update\_mask.CopyFrom, service.mutate\_campaigns, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Rename a campaign. Args: campaign_id: Campaign numeric ID (required). new_name: New campaign name (required). customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L14717-L14741) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "new_name": {
      "title": "New Name",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id",
    "new_name"
  ],
  "title": "gads_rename_campaignArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_request_review-f135715c"></a>

## gads_request_review

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, op.update\_mask.CopyFrom, service.mutate\_ad\_group\_ads, field\_mask\_pb2.FieldMask.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Request a review for a disapproved or limited ad.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L14748-L14768) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_group_id": {
      "title": "Ad Group Id",
      "type": "string"
    },
    "ad_id": {
      "title": "Ad Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "ad_id"
  ],
  "title": "gads_request_reviewArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_run_offline_user_data_job-1ea3d093"></a>

## gads_run_offline_user_data_job

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, service.run\_offline\_user\_data\_job.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Run (execute) an offline user data job after adding operations to it.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L14777-L14788) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "job_resource_name": {
      "title": "Job Resource Name",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "job_resource_name"
  ],
  "title": "gads_run_offline_user_data_jobArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_ad_group_ad_rotation-ce1951a5"></a>

## gads_set_ad_group_ad_rotation

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, op.update\_mask.CopyFrom, service.mutate\_ad\_groups, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set ad rotation mode for an ad group. rotation_mode: OPTIMIZE or ROTATE_FOREVER.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L14797-L14811) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_group_id": {
      "title": "Ad Group Id",
      "type": "string"
    },
    "rotation_mode": {
      "title": "Rotation Mode",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "rotation_mode"
  ],
  "title": "gads_set_ad_group_ad_rotationArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_ad_group_content_bid_criterion-449d3e4c"></a>

## gads_set_ad_group_content_bid_criterion

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, op.update\_mask.CopyFrom, service.mutate\_ad\_group\_criteria, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set CPC bid on a content (placement/topic/keyword) criterion in an ad group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L14820-L14835) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_group_id": {
      "title": "Ad Group Id",
      "type": "string"
    },
    "criterion_resource_name": {
      "title": "Criterion Resource Name",
      "type": "string"
    },
    "cpc_bid_micros": {
      "title": "Cpc Bid Micros",
      "type": "integer"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "criterion_resource_name",
    "cpc_bid_micros"
  ],
  "title": "gads_set_ad_group_content_bid_criterionArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_ad_group_cpc_bid-4da18302"></a>

## gads_set_ad_group_cpc_bid

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, op.update\_mask.CopyFrom, service.mutate\_ad\_groups, field\_mask\_pb2.FieldMask, \_m.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set the max CPC bid on an ad group. Args: ad_group_id: Ad group numeric ID. cpc_bid_micros: New CPC bid in micros, e.g. 2000000 for $2.00. customer_id: Google Ads customer ID.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L14854-L14883) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_group_id": {
      "title": "Ad Group Id",
      "type": "string"
    },
    "cpc_bid_micros": {
      "title": "Cpc Bid Micros",
      "type": "integer"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "cpc_bid_micros"
  ],
  "title": "gads_set_ad_group_cpc_bidArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_ad_group_criterion_bid_modifier-1dd2f43d"></a>

## gads_set_ad_group_criterion_bid_modifier

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, op.update\_mask.CopyFrom, service.mutate\_ad\_group\_criteria, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set bid modifier on an ad group criterion (audience, placement, topic, demographic).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L14890-L14905) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_group_id": {
      "title": "Ad Group Id",
      "type": "string"
    },
    "criterion_id": {
      "title": "Criterion Id",
      "type": "string"
    },
    "bid_modifier": {
      "title": "Bid Modifier",
      "type": "number"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "criterion_id",
    "bid_modifier"
  ],
  "title": "gads_set_ad_group_criterion_bid_modifierArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_ad_group_custom_parameters-ce1986fd"></a>

## gads_set_ad_group_custom_parameters

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, op.update\_mask.CopyFrom, service.mutate\_ad\_groups, CustomParameter, ag.url\_custom\_parameters.append.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set custom URL parameters on an ad group. parameters: list of {key, value} dicts.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L14914-L14934) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_group_id": {
      "title": "Ad Group Id",
      "type": "string"
    },
    "parameters": {
      "items": {},
      "title": "Parameters",
      "type": "array"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "parameters"
  ],
  "title": "gads_set_ad_group_custom_parametersArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_ad_group_device_bid_modifier-73231ecf"></a>

## gads_set_ad_group_device_bid_modifier

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, gads\_set\_ad\_group\_bid\_modifiers.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set device bid modifier for an ad group (alias for gads_set_ad_group_bid_modifiers). Args: ad_group_id: Ad group ID. device: DESKTOP, MOBILE, TABLET. bid_modifier: Multiplier. customer_id: optional.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L14941-L14945) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_group_id": {
      "title": "Ad Group Id",
      "type": "string"
    },
    "device": {
      "title": "Device",
      "type": "string"
    },
    "bid_modifier": {
      "title": "Bid Modifier",
      "type": "number"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "device",
    "bid_modifier"
  ],
  "title": "gads_set_ad_group_device_bid_modifierArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_ad_group_final_url_suffix-61466a4c"></a>

## gads_set_ad_group_final_url_suffix

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, op.update\_mask.CopyFrom, service.mutate\_ad\_groups, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set final URL suffix at ad group level.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L14952-L14966) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_group_id": {
      "title": "Ad Group Id",
      "type": "string"
    },
    "final_url_suffix": {
      "title": "Final Url Suffix",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "final_url_suffix"
  ],
  "title": "gads_set_ad_group_final_url_suffixArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_ad_group_target_cpa-506c42ea"></a>

## gads_set_ad_group_target_cpa

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, op.update\_mask.CopyFrom, service.mutate\_ad\_groups, field\_mask\_pb2.FieldMask, \_m.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set target CPA at the ad group level. Args: ad_group_id: Ad group numeric ID. target_cpa_micros: Target CPA in micros, e.g. 50000000 for $50. customer_id: Google Ads customer ID.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L14973-L15002) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_group_id": {
      "title": "Ad Group Id",
      "type": "string"
    },
    "target_cpa_micros": {
      "title": "Target Cpa Micros",
      "type": "integer"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "target_cpa_micros"
  ],
  "title": "gads_set_ad_group_target_cpaArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_ad_group_target_roas-8f2b1447"></a>

## gads_set_ad_group_target_roas

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, op.update\_mask.CopyFrom, service.mutate\_ad\_groups, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set target ROAS for an ad group (overrides campaign-level ROAS).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L15013-L15027) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_group_id": {
      "title": "Ad Group Id",
      "type": "string"
    },
    "target_roas": {
      "title": "Target Roas",
      "type": "number"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "target_roas"
  ],
  "title": "gads_set_ad_group_target_roasArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_ad_schedule_bid_modifier-78281b4b"></a>

## gads_set_ad_schedule_bid_modifier

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, op.update\_mask.CopyFrom, service.mutate\_campaign\_criteria, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Update bid modifier for a specific ad schedule in a campaign. Args: campaign_id: Campaign ID. criterion_id: Criterion ID. bid_modifier: New multiplier. customer_id: optional.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L15036-L15051) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "criterion_id": {
      "title": "Criterion Id",
      "type": "string"
    },
    "bid_modifier": {
      "title": "Bid Modifier",
      "type": "number"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id",
    "criterion_id",
    "bid_modifier"
  ],
  "title": "gads_set_ad_schedule_bid_modifierArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_ad_url_suffix-21e6e901"></a>

## gads_set_ad_url_suffix

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, op.update\_mask.CopyFrom, service.mutate\_ad\_group\_ads, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set final URL suffix on a specific ad.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L15058-L15072) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_group_id": {
      "title": "Ad Group Id",
      "type": "string"
    },
    "ad_id": {
      "title": "Ad Id",
      "type": "string"
    },
    "final_url_suffix": {
      "title": "Final Url Suffix",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "ad_id",
    "final_url_suffix"
  ],
  "title": "gads_set_ad_url_suffixArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_app_campaign_settings-a3cfdfb7"></a>

## gads_set_app_campaign_settings

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, paths.append, op.update\_mask.CopyFrom, service.mutate\_campaigns, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set app campaign specific settings. app_store: APPLE_APP_STORE or GOOGLE_APP_STORE. bidding_strategy_goal_type: OPTIMIZE_INSTALLS_TARGET_INSTALL_COST, OPTIMIZE_IN_APP_CONVERSIONS_TARGET_INSTALL_COST, etc.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L15079-L15107) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "app_id": {
      "default": "",
      "title": "App Id",
      "type": "string"
    },
    "app_store": {
      "default": "",
      "title": "App Store",
      "type": "string"
    },
    "bidding_strategy_goal_type": {
      "default": "",
      "title": "Bidding Strategy Goal Type",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id"
  ],
  "title": "gads_set_app_campaign_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_asset_group_status-227fdf3a"></a>

## gads_set_asset_group_status

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, op.update\_mask.CopyFrom, service.mutate\_asset\_groups, status.upper, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set status (ENABLED/PAUSED/REMOVED) on an asset group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L15116-L15138) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "asset_group_id": {
      "title": "Asset Group Id",
      "type": "string"
    },
    "status": {
      "title": "Status",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "asset_group_id",
    "status"
  ],
  "title": "gads_set_asset_group_statusArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_campaign_ad_rotation-816b28c1"></a>

## gads_set_campaign_ad_rotation

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, op.update\_mask.CopyFrom, service.mutate\_campaigns, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set ad rotation mode for a campaign. ad_rotation_mode: 'OPTIMIZE' or 'ROTATE_FOREVER'.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L15145-L15166) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "ad_rotation_mode": {
      "title": "Ad Rotation Mode",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id",
    "ad_rotation_mode"
  ],
  "title": "gads_set_campaign_ad_rotationArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_campaign_ai_max-58c6b46d"></a>

## gads_set_campaign_ai_max

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, AssetAutomationSetting, campaign.asset\_automation\_settings.append, paths.append, op.update\_mask.CopyFrom.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Enable or disable AI Max for a single Search campaign, including sub-settings. When enabling AI Max, also controls: - Text asset automation (התאמה אישית של טקסט): Google auto-generates ad text - Final URL expansion (הרחבה של כתובת URL סופית): Google expands to relevant landing pages Args: campaign_id: Campaign ID to update. enable: True to enable AI Max, False to disable. text_asset_automation: Enable text asset automation (default True when enabling AI Max). final_url_expansion: Enable final URL expansion (default True when enabling AI Max). customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L15173-L15231) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "enable": {
      "title": "Enable",
      "type": "boolean"
    },
    "text_asset_automation": {
      "default": true,
      "title": "Text Asset Automation",
      "type": "boolean"
    },
    "final_url_expansion": {
      "default": true,
      "title": "Final Url Expansion",
      "type": "boolean"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id",
    "enable"
  ],
  "title": "gads_set_campaign_ai_maxArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_campaign_audience_setting-bfde9ecc"></a>

## gads_set_campaign_audience_setting

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, op.update\_mask.CopyFrom, service.mutate\_campaigns, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set audience targeting setting for a campaign. True = use audience groups (observation), False = individual segments.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L15238-L15252) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "use_audience_grouped": {
      "title": "Use Audience Grouped",
      "type": "boolean"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id",
    "use_audience_grouped"
  ],
  "title": "gads_set_campaign_audience_settingArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_campaign_broad_match_settings-6061cbfc"></a>

## gads_set_campaign_broad_match_settings

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, op.update\_mask.CopyFrom, service.mutate\_campaigns, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Enable/disable broad match for all keywords in a campaign (Smart Bidding broad match).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L15259-L15274) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "use_broad_match_keywords": {
      "title": "Use Broad Match Keywords",
      "type": "boolean"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id",
    "use_broad_match_keywords"
  ],
  "title": "gads_set_campaign_broad_match_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_campaign_budget_delivery-512c031d"></a>

## gads_set_campaign_budget_delivery

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, \_search, client.get\_service, client.get\_type, budget\_op.update\_mask.CopyFrom, budget\_service.mutate\_campaign\_budgets, delivery\_method.upper.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set budget delivery method for a campaign. delivery_method: 'STANDARD' or 'ACCELERATED'.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L15281-L15320) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "delivery_method": {
      "title": "Delivery Method",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id",
    "delivery_method"
  ],
  "title": "gads_set_campaign_budget_deliveryArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_campaign_custom_parameters-1de9ef03"></a>

## gads_set_campaign_custom_parameters

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, op.update\_mask.CopyFrom, service.mutate\_campaigns, CustomParameter, campaign.url\_custom\_parameters.append.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set custom URL parameters at campaign level. parameters is a list of dicts with 'key' and 'value'.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L15327-L15347) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "parameters": {
      "items": {},
      "title": "Parameters",
      "type": "array"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id",
    "parameters"
  ],
  "title": "gads_set_campaign_custom_parametersArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_campaign_customer_acquisition-6db5bce8"></a>

## gads_set_campaign_customer_acquisition

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, op.update\_mask.CopyFrom, service.mutate\_campaigns, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set customer acquisition settings for a campaign (PMax, Search). Allows bidding higher for new customers vs existing ones. Args: campaign_id: Campaign ID. optimize_for_new_customers: Enable new customer optimization. new_customer_bid_only: Only bid for new customers (exclude existing). new_customer_acquisition_goal_value_micros: Value lift for new customers. customer_id: optional.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L15354-L15376) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "optimize_for_new_customers": {
      "default": true,
      "title": "Optimize For New Customers",
      "type": "boolean"
    },
    "new_customer_bid_only": {
      "default": false,
      "title": "New Customer Bid Only",
      "type": "boolean"
    },
    "new_customer_acquisition_goal_value_micros": {
      "default": 0,
      "title": "New Customer Acquisition Goal Value Micros",
      "type": "integer"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id"
  ],
  "title": "gads_set_campaign_customer_acquisitionArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_campaign_customer_retention-3283c247"></a>

## gads_set_campaign_customer_retention

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, op.update\_mask.CopyFrom, service.mutate\_campaigns, c.selective\_optimization.conversion\_actions.append, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set customer retention optimization for a campaign. Args: campaign_id: Campaign ID. enable_retention: Enable customer retention optimization. customer_id: optional.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L15383-L15401) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "enable_retention": {
      "default": true,
      "title": "Enable Retention",
      "type": "boolean"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id"
  ],
  "title": "gads_set_campaign_customer_retentionArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_campaign_final_url_suffix-909203fd"></a>

## gads_set_campaign_final_url_suffix

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, op.update\_mask.CopyFrom, service.mutate\_campaigns, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set final URL suffix at campaign level.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L15408-L15422) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "final_url_suffix": {
      "title": "Final Url Suffix",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id",
    "final_url_suffix"
  ],
  "title": "gads_set_campaign_final_url_suffixArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_campaign_geo_target_type-d8df60ac"></a>

## gads_set_campaign_geo_target_type

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, op.update\_mask.CopyFrom, service.mutate\_campaigns, paths.append, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set how geo targeting is applied. positive_geo_target_type: PRESENCE, PRESENCE_OR_INTEREST, INTEREST. negative_geo_target_type: PRESENCE, PRESENCE_OR_INTEREST.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L15429-L15477) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "positive_geo_target_type": {
      "default": "",
      "title": "Positive Geo Target Type",
      "type": "string"
    },
    "negative_geo_target_type": {
      "default": "",
      "title": "Negative Geo Target Type",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id"
  ],
  "title": "gads_set_campaign_geo_target_typeArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_campaign_networks-7b055b67"></a>

## gads_set_campaign_networks

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, op.update\_mask.CopyFrom, service.mutate\_campaigns, paths.append, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set network targeting for a campaign (Google Search, Search Partners, Display, Partner Search). Args: campaign_id: Campaign ID. target_google_search: Show on Google Search. target_search_partners: Show on search partner sites. target_display_network: Show on Display Network. target_partner_search_network: Show on partner search network. customer_id: optional.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L15484-L15513) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "target_google_search": {
      "default": null,
      "title": "Target Google Search",
      "type": "boolean"
    },
    "target_search_partners": {
      "default": null,
      "title": "Target Search Partners",
      "type": "boolean"
    },
    "target_display_network": {
      "default": null,
      "title": "Target Display Network",
      "type": "boolean"
    },
    "target_partner_search_network": {
      "default": null,
      "title": "Target Partner Search Network",
      "type": "boolean"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id"
  ],
  "title": "gads_set_campaign_networksArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_campaign_real_time_bidding-9aa0799b"></a>

## gads_set_campaign_real_time_bidding

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, op.update\_mask.CopyFrom, service.mutate\_campaigns, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Enable or disable real-time bidding (RTB) for a Display campaign. Args: campaign_id: Campaign ID. opt_in: True to enable RTB, False to disable. customer_id: optional.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L15520-L15536) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "opt_in": {
      "title": "Opt In",
      "type": "boolean"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id",
    "opt_in"
  ],
  "title": "gads_set_campaign_real_time_biddingArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_campaign_target_spend-0b582784"></a>

## gads_set_campaign_target_spend

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, paths.append, op.update\_mask.CopyFrom, service.mutate\_campaigns, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set target spend for maximize clicks bidding on a campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L15543-L15567) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "target_spend_micros": {
      "title": "Target Spend Micros",
      "type": "integer"
    },
    "cpc_bid_ceiling_micros": {
      "default": 0,
      "title": "Cpc Bid Ceiling Micros",
      "type": "integer"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id",
    "target_spend_micros"
  ],
  "title": "gads_set_campaign_target_spendArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_campaign_targeting_expansion-e477916d"></a>

## gads_set_campaign_targeting_expansion

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, campaign.targeting\_setting.target\_restrictions\_for\_operation.clear, campaign.targeting\_setting.targeting\_dimension\_for\_location.CopyFrom, op\_final.update\_mask.CopyFrom, service.mutate\_campaigns.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set targeting expansion (optimized targeting) for a display/video campaign. opt_out_targeting_expansion=True disables optimized targeting.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L15574-L15606) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "opt_out_targeting_expansion": {
      "title": "Opt Out Targeting Expansion",
      "type": "boolean"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id",
    "opt_out_targeting_expansion"
  ],
  "title": "gads_set_campaign_targeting_expansionArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_campaign_tracking_template-42639f50"></a>

## gads_set_campaign_tracking_template

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, op.update\_mask.CopyFrom, service.mutate\_campaigns, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set tracking template at campaign level.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L15615-L15629) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "tracking_template": {
      "title": "Tracking Template",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id",
    "tracking_template"
  ],
  "title": "gads_set_campaign_tracking_templateArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_campaign_vanity_pharma-5bc9591a"></a>

## gads_set_campaign_vanity_pharma

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, op.update\_mask.CopyFrom, service.mutate\_campaigns, paths.append, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set vanity pharma settings for a campaign (pharmaceutical industry). display_url_mode: MANUFACTURER_WEBSITE_URL or WEBSITE_DESCRIPTION. text: the description text if mode is WEBSITE_DESCRIPTION.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L15636-L15659) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "display_url_mode": {
      "title": "Display Url Mode",
      "type": "string"
    },
    "text": {
      "default": "",
      "title": "Text",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id",
    "display_url_mode"
  ],
  "title": "gads_set_campaign_vanity_pharmaArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_customer_final_url_suffix-2925980d"></a>

## gads_set_customer_final_url_suffix

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, op.update\_mask.CopyFrom, service.mutate\_customer, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set final URL suffix at the customer/account level.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L15666-L15680) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "final_url_suffix": {
      "title": "Final Url Suffix",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "final_url_suffix"
  ],
  "title": "gads_set_customer_final_url_suffixArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_customer_tracking_template-e9601b96"></a>

## gads_set_customer_tracking_template

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, op.update\_mask.CopyFrom, service.mutate\_customer, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set tracking template at the customer/account level.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L15689-L15703) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "tracking_template": {
      "title": "Tracking Template",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "tracking_template"
  ],
  "title": "gads_set_customer_tracking_templateArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_device_bid_modifier-ea3c88e6"></a>

## gads_set_device_bid_modifier

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, device.upper, \_search, client.get\_type, cc\_service.mutate\_campaign\_criteria, op.update\_mask.CopyFrom.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set bid modifier for DESKTOP, MOBILE, or TABLET on a campaign. Args: campaign_id: Campaign numeric ID. device: DESKTOP | MOBILE | TABLET bid_modifier: Multiplier, e.g. 1.2 = +20%, 0.5 = -50%, 0.0 = disable device customer_id: Google Ads customer ID.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L15710-L15768) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "device": {
      "title": "Device",
      "type": "string"
    },
    "bid_modifier": {
      "title": "Bid Modifier",
      "type": "number"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id",
    "device",
    "bid_modifier"
  ],
  "title": "gads_set_device_bid_modifierArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_keyword_custom_parameters-b0579141"></a>

## gads_set_keyword_custom_parameters

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, op.update\_mask.CopyFrom, service.mutate\_ad\_group\_criteria, CustomParameter, criterion.url\_custom\_parameters.append.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set custom URL parameters on a keyword. parameters: list of {key, value} dicts.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L15783-L15803) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_group_id": {
      "title": "Ad Group Id",
      "type": "string"
    },
    "criterion_id": {
      "title": "Criterion Id",
      "type": "string"
    },
    "parameters": {
      "items": {},
      "title": "Parameters",
      "type": "array"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "criterion_id",
    "parameters"
  ],
  "title": "gads_set_keyword_custom_parametersArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_keyword_final_url_suffix-d2f86ff6"></a>

## gads_set_keyword_final_url_suffix

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, op.update\_mask.CopyFrom, service.mutate\_ad\_group\_criteria, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set final URL suffix at keyword level.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L15812-L15831) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_group_id": {
      "title": "Ad Group Id",
      "type": "string"
    },
    "criterion_id": {
      "title": "Criterion Id",
      "type": "string"
    },
    "final_url_suffix": {
      "title": "Final Url Suffix",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "criterion_id",
    "final_url_suffix"
  ],
  "title": "gads_set_keyword_final_url_suffixArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_keyword_final_urls-7c343472"></a>

## gads_set_keyword_final_urls

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, criterion.final\_urls.extend, op.update\_mask.CopyFrom, service.mutate\_ad\_group\_criteria, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set final URLs on a keyword.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L15838-L15853) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_group_id": {
      "title": "Ad Group Id",
      "type": "string"
    },
    "criterion_id": {
      "title": "Criterion Id",
      "type": "string"
    },
    "final_urls": {
      "items": {},
      "title": "Final Urls",
      "type": "array"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "criterion_id",
    "final_urls"
  ],
  "title": "gads_set_keyword_final_urlsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_keyword_tracking_template-12e7302f"></a>

## gads_set_keyword_tracking_template

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, op.update\_mask.CopyFrom, service.mutate\_ad\_group\_criteria, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set tracking template at keyword level.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L15860-L15879) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_group_id": {
      "title": "Ad Group Id",
      "type": "string"
    },
    "criterion_id": {
      "title": "Criterion Id",
      "type": "string"
    },
    "tracking_template": {
      "title": "Tracking Template",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "criterion_id",
    "tracking_template"
  ],
  "title": "gads_set_keyword_tracking_templateArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_manual_cpc-32719dc0"></a>

## gads_set_manual_cpc

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, op.update\_mask.CopyFrom, service.mutate\_campaigns, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set Manual CPC bidding for a campaign. Args: campaign_id: Campaign ID. enhanced_cpc: Enable Enhanced CPC. customer_id: optional.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L15886-L15901) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "enhanced_cpc": {
      "default": false,
      "title": "Enhanced Cpc",
      "type": "boolean"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id"
  ],
  "title": "gads_set_manual_cpcArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_manual_cpm-2e3d5860"></a>

## gads_set_manual_cpm

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, op.update\_mask.CopyFrom, service.mutate\_campaigns, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set Manual CPM bidding for a display campaign. Args: campaign_id: Campaign ID. customer_id: optional.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L15908-L15923) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id"
  ],
  "title": "gads_set_manual_cpmArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_manual_cpv-8ec5b5e4"></a>

## gads_set_manual_cpv

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, op.update\_mask.CopyFrom, service.mutate\_campaigns, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set Manual CPV bidding for a video campaign. Args: campaign_id: Campaign ID. customer_id: optional.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L15930-L15945) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id"
  ],
  "title": "gads_set_manual_cpvArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_maximize_clicks-46be26fd"></a>

## gads_set_maximize_clicks

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, op.update\_mask.CopyFrom, service.mutate\_campaigns, paths.append, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set Maximize Clicks bidding strategy for a campaign with optional max CPC cap. Args: campaign_id: Campaign ID. max_cpc_bid_ceiling_micros: Optional max CPC ceiling in micros (0 = no cap). customer_id: optional.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L15952-L15972) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "max_cpc_bid_ceiling_micros": {
      "default": 0,
      "title": "Max Cpc Bid Ceiling Micros",
      "type": "integer"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id"
  ],
  "title": "gads_set_maximize_clicksArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_pmax_auto_created_assets-adfa1a02"></a>

## gads_set_pmax_auto_created_assets

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, AssetAutomationSetting, op.update\_mask.CopyFrom, service.mutate\_campaigns, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Control automatically created assets for Performance Max campaigns. opt_out=True disables auto-created assets.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L15979-L16005) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "opt_out": {
      "title": "Opt Out",
      "type": "boolean"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id",
    "opt_out"
  ],
  "title": "gads_set_pmax_auto_created_assetsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_pmax_url_expansion-76b1b3a0"></a>

## gads_set_pmax_url_expansion

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, op.update\_mask.CopyFrom, service.mutate\_campaigns, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set URL expansion for Performance Max campaigns. True = opt out (disabled), False = enabled (default).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L16012-L16026) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "opt_out_url_expansion": {
      "title": "Opt Out Url Expansion",
      "type": "boolean"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id",
    "opt_out_url_expansion"
  ],
  "title": "gads_set_pmax_url_expansionArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_schedule_all_campaigns-8c8b4496"></a>

## gads_set_schedule_all_campaigns

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, \_search, client.get\_service, range, client.get\_type, ops.append, service.mutate\_campaign\_criteria.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set an ad schedule on all active campaigns. Args: day_of_week: MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY. start_hour: 0-23. end_hour: 1-24. bid_modifier: Bid adjustment. customer_id: optional.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L16033-L16063) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "day_of_week": {
      "title": "Day Of Week",
      "type": "string"
    },
    "start_hour": {
      "title": "Start Hour",
      "type": "integer"
    },
    "end_hour": {
      "title": "End Hour",
      "type": "integer"
    },
    "bid_modifier": {
      "default": 1,
      "title": "Bid Modifier",
      "type": "number"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "day_of_week",
    "start_hour",
    "end_hour"
  ],
  "title": "gads_set_schedule_all_campaignsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_shopping_campaign_settings-39f4074a"></a>

## gads_set_shopping_campaign_settings

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, op.update\_mask.CopyFrom, service.mutate\_campaigns, paths.append, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Update shopping campaign settings. Only provided fields are updated.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L16070-L16112) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "merchant_id": {
      "default": 0,
      "title": "Merchant Id",
      "type": "integer"
    },
    "sales_country": {
      "default": "",
      "title": "Sales Country",
      "type": "string"
    },
    "feed_label": {
      "default": "",
      "title": "Feed Label",
      "type": "string"
    },
    "enable_local": {
      "default": null,
      "title": "Enable Local",
      "type": "boolean"
    },
    "campaign_priority": {
      "default": -1,
      "title": "Campaign Priority",
      "type": "integer"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id"
  ],
  "title": "gads_set_shopping_campaign_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_update_app_campaign-201438cf"></a>

## gads_update_app_campaign

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, paths.append, op.update\_mask.CopyFrom, service.mutate\_campaigns, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Update app campaign settings. goal_type: OPTIMIZE_INSTALLS_TARGET_INSTALL_COST, OPTIMIZE_IN_APP_CONVERSIONS_TARGET_INSTALL_COST, OPTIMIZE_IN_APP_CONVERSIONS_TARGET_CONVERSION_COST, OPTIMIZE_RETURN_ON_ADVERTISING_SPEND, OPTIMIZE_INSTALLS_WITHOUT_TARGET_INSTALL_COST.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L16119-L16150) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "name": {
      "default": "",
      "title": "Name",
      "type": "string"
    },
    "status": {
      "default": "",
      "title": "Status",
      "type": "string"
    },
    "app_campaign_setting_bidding_strategy_goal_type": {
      "default": "",
      "title": "App Campaign Setting Bidding Strategy Goal Type",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id"
  ],
  "title": "gads_update_app_campaignArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_update_asset_group_name-d71d9012"></a>

## gads_update_asset_group_name

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, op.update\_mask.CopyFrom, service.mutate\_asset\_groups, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Update asset group name.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L16157-L16171) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "asset_group_id": {
      "title": "Asset Group Id",
      "type": "string"
    },
    "name": {
      "title": "Name",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "asset_group_id",
    "name"
  ],
  "title": "gads_update_asset_group_nameArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_update_call_asset-ba5e063b"></a>

## gads_update_call_asset

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, paths.append, op.update\_mask.CopyFrom, service.mutate\_assets, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Update a call asset's phone number and/or country code.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L16178-L16201) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "asset_resource_name": {
      "title": "Asset Resource Name",
      "type": "string"
    },
    "phone_number": {
      "default": "",
      "title": "Phone Number",
      "type": "string"
    },
    "country_code": {
      "default": "",
      "title": "Country Code",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "asset_resource_name"
  ],
  "title": "gads_update_call_assetArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_update_callout_asset-ea8b661a"></a>

## gads_update_callout_asset

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, op.update\_mask.CopyFrom, service.mutate\_assets, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Update a callout asset's text.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L16210-L16225) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "asset_resource_name": {
      "title": "Asset Resource Name",
      "type": "string"
    },
    "callout_text": {
      "title": "Callout Text",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "asset_resource_name",
    "callout_text"
  ],
  "title": "gads_update_callout_assetArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_update_dynamic_search_ad-bc902864"></a>

## gads_update_dynamic_search_ad

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, paths.append, op.update\_mask.CopyFrom, service.mutate\_ad\_group\_ads, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Update a Dynamic Search Ad's description lines and/or tracking template.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L16232-L16259) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_group_id": {
      "title": "Ad Group Id",
      "type": "string"
    },
    "ad_id": {
      "title": "Ad Id",
      "type": "string"
    },
    "description1": {
      "default": "",
      "title": "Description1",
      "type": "string"
    },
    "description2": {
      "default": "",
      "title": "Description2",
      "type": "string"
    },
    "tracking_url_template": {
      "default": "",
      "title": "Tracking Url Template",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "ad_id"
  ],
  "title": "gads_update_dynamic_search_adArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_update_expanded_text_ad-e1b4a83f"></a>

## gads_update_expanded_text_ad

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Update an Expanded Text Ad (deprecated format, read-only after June 2022, but existing ads can be paused/enabled/removed).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L16268-L16275) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_group_id": {
      "title": "Ad Group Id",
      "type": "string"
    },
    "ad_id": {
      "title": "Ad Id",
      "type": "string"
    },
    "headline_part1": {
      "default": "",
      "title": "Headline Part1",
      "type": "string"
    },
    "headline_part2": {
      "default": "",
      "title": "Headline Part2",
      "type": "string"
    },
    "headline_part3": {
      "default": "",
      "title": "Headline Part3",
      "type": "string"
    },
    "description": {
      "default": "",
      "title": "Description",
      "type": "string"
    },
    "description2": {
      "default": "",
      "title": "Description2",
      "type": "string"
    },
    "path1": {
      "default": "",
      "title": "Path1",
      "type": "string"
    },
    "path2": {
      "default": "",
      "title": "Path2",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "ad_id"
  ],
  "title": "gads_update_expanded_text_adArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_update_keyword_match_type-3cfa8eb1"></a>

## gads_update_keyword_match_type

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, \_search, client.get\_service, client.get\_type, ops.append, service.mutate\_ad\_group\_criteria.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Update keyword match type. Note: Google Ads API requires remove + re-create for match type changes. new_match_type: BROAD, PHRASE, EXACT.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L16282-L16330) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_group_id": {
      "title": "Ad Group Id",
      "type": "string"
    },
    "criterion_id": {
      "title": "Criterion Id",
      "type": "string"
    },
    "new_match_type": {
      "title": "New Match Type",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "criterion_id",
    "new_match_type"
  ],
  "title": "gads_update_keyword_match_typeArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_update_product_partition-c73b1c3d"></a>

## gads_update_product_partition

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, paths.append, op.update\_mask.CopyFrom, service.mutate\_ad\_group\_criteria, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Update a product partition (shopping product group) bid or status.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L16337-L16361) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_group_id": {
      "title": "Ad Group Id",
      "type": "string"
    },
    "criterion_id": {
      "title": "Criterion Id",
      "type": "string"
    },
    "cpc_bid_micros": {
      "default": 0,
      "title": "Cpc Bid Micros",
      "type": "integer"
    },
    "status": {
      "default": "",
      "title": "Status",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "criterion_id"
  ],
  "title": "gads_update_product_partitionArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_update_sitelink_asset-b71becf7"></a>

## gads_update_sitelink_asset

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, paths.append, asset.final\_urls.extend, op.update\_mask.CopyFrom, service.mutate\_assets.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Update a sitelink asset's text, descriptions, or URLs.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L16370-L16404) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "asset_resource_name": {
      "title": "Asset Resource Name",
      "type": "string"
    },
    "link_text": {
      "default": "",
      "title": "Link Text",
      "type": "string"
    },
    "description1": {
      "default": "",
      "title": "Description1",
      "type": "string"
    },
    "description2": {
      "default": "",
      "title": "Description2",
      "type": "string"
    },
    "final_urls": {
      "default": null,
      "items": {},
      "title": "Final Urls",
      "type": "array"
    },
    "tracking_url_template": {
      "default": "",
      "title": "Tracking Url Template",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "asset_resource_name"
  ],
  "title": "gads_update_sitelink_assetArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_update_smart_campaign_keyword_themes-5e84c19b"></a>

## gads_update_smart_campaign_keyword_themes

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, op.update\_mask.CopyFrom, service.mutate\_smart\_campaign\_settings, KeywordTheme, setting.keyword\_themes.append.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Update keyword themes for a Smart Campaign. keyword_themes: list of {keyword_theme_constant: str} or {free_form_keyword_theme: str} dicts.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L16411-L16434) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "keyword_themes": {
      "items": {},
      "title": "Keyword Themes",
      "type": "array"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id",
    "keyword_themes"
  ],
  "title": "gads_update_smart_campaign_keyword_themesArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_upload_conversion_adjustments-387b9889"></a>

## gads_upload_conversion_adjustments

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_service('ConversionActionService').conversion\_action\_path, client.get\_type, service.upload\_conversion\_adjustments, ConversionAdjustment, adj\_data.get('adjustment\_type', 'RESTATEMENT').upper.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Upload conversion adjustments (restatements or retractions). adjustments: list of dicts with keys: - order_id (str) OR gclid (str) + conversion_date_time (str, 'yyyy-mm-dd hh:mm:ss+TZ') - adjustment_type: 'RESTATEMENT' or 'RETRACTION' - adjustment_date_time: 'yyyy-mm-dd hh:mm:ss+TZ' - restatement_value (float, only for RESTATEMENT) - restatement_currency_code (str, only for RESTATEMENT)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L16445-L16501) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "conversion_action_id": {
      "title": "Conversion Action Id",
      "type": "string"
    },
    "adjustments": {
      "items": {},
      "title": "Adjustments",
      "type": "array"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "conversion_action_id",
    "adjustments"
  ],
  "title": "gads_upload_conversion_adjustmentsArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_list_negative_keywords-47b9d5cb"></a>

## google_ads_list_negative_keywords

Handler: Other product (tools/google\_ads\_negatives.py): calls mcp.tool, \_search, results.append.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. List all negative keywords at the campaign level. Args: customer_id: Google Ads customer ID. campaign_id: Filter to a specific campaign ID. Leave blank for all campaigns. row_limit: Max rows to return (default: 200).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_negatives.py#L25-L67) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "customer_id": {
      "title": "Customer Id",
      "type": "string"
    },
    "campaign_id": {
      "default": "",
      "title": "Campaign Id",
      "type": "string"
    },
    "row_limit": {
      "default": 200,
      "title": "Row Limit",
      "type": "integer"
    }
  },
  "required": [
    "customer_id"
  ],
  "title": "google_ads_list_negative_keywordsArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_list_adgroup_negative_keywords-9b603321"></a>

## google_ads_list_adgroup_negative_keywords

Handler: Other product (tools/google\_ads\_negatives.py): calls mcp.tool, ' AND '.join, \_search, where\_parts.append, results.append.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. List all negative keywords at the ad group level. Args: customer_id: Google Ads customer ID. adgroup_id: Filter to a specific ad group ID. Leave blank for all. campaign_id: Filter to a specific campaign ID. Leave blank for all. row_limit: Max rows to return (default: 200).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_negatives.py#L74-L124) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "customer_id": {
      "title": "Customer Id",
      "type": "string"
    },
    "adgroup_id": {
      "default": "",
      "title": "Adgroup Id",
      "type": "string"
    },
    "campaign_id": {
      "default": "",
      "title": "Campaign Id",
      "type": "string"
    },
    "row_limit": {
      "default": 200,
      "title": "Row Limit",
      "type": "integer"
    }
  },
  "required": [
    "customer_id"
  ],
  "title": "google_ads_list_adgroup_negative_keywordsArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_add_adgroup_negative_keywords-12e166d5"></a>

## google_ads_add_adgroup_negative_keywords

Handler: Other product (tools/google\_ads\_negatives.py): calls mcp.tool, require\_editor, json.loads, \_get\_client, client.get\_service, svc.mutate\_ad\_group\_criteria, client.get\_type, ops.append.

```text
[WRITE] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Add negative keywords at the ad group level. Args: customer_id: Google Ads customer ID. adgroup_id: Ad group ID to add negatives to. keywords_json: JSON array of objects with 'text' and 'match_type'. Example: '[{"text": "free", "match_type": "BROAD"}, {"text": "cheap shoes", "match_type": "EXACT"}]'
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_negatives.py#L131-L164) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "customer_id": {
      "title": "Customer Id",
      "type": "string"
    },
    "adgroup_id": {
      "title": "Adgroup Id",
      "type": "string"
    },
    "keywords_json": {
      "title": "Keywords Json",
      "type": "string"
    }
  },
  "required": [
    "customer_id",
    "adgroup_id",
    "keywords_json"
  ],
  "title": "google_ads_add_adgroup_negative_keywordsArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_remove_campaign_negative_keyword-73b0f6fe"></a>

## google_ads_remove_campaign_negative_keyword

Handler: Other product (tools/google\_ads\_negatives.py): calls mcp.tool, require\_editor, \_get\_client, client.get\_service, client.get\_type, svc.mutate\_campaign\_criteria.

```text
[WRITE] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Remove a negative keyword from a campaign by its criterion ID. Use google_ads_list_negative_keywords first to get criterion_id values. Args: customer_id: Google Ads customer ID. campaign_id: Campaign ID the negative keyword belongs to. criterion_id: The criterion_id of the negative keyword to remove.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_negatives.py#L171-L195) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "customer_id": {
      "title": "Customer Id",
      "type": "string"
    },
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "criterion_id": {
      "title": "Criterion Id",
      "type": "string"
    }
  },
  "required": [
    "customer_id",
    "campaign_id",
    "criterion_id"
  ],
  "title": "google_ads_remove_campaign_negative_keywordArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_remove_adgroup_negative_keyword-c950e8c3"></a>

## google_ads_remove_adgroup_negative_keyword

Handler: Other product (tools/google\_ads\_negatives.py): calls mcp.tool, require\_editor, \_get\_client, client.get\_service, client.get\_type, svc.mutate\_ad\_group\_criteria.

```text
[WRITE] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Remove a negative keyword from an ad group by its criterion ID. Use google_ads_list_adgroup_negative_keywords first to get criterion_id values. Args: customer_id: Google Ads customer ID. adgroup_id: Ad group ID the negative keyword belongs to. criterion_id: The criterion_id of the negative keyword to remove.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_negatives.py#L202-L226) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "customer_id": {
      "title": "Customer Id",
      "type": "string"
    },
    "adgroup_id": {
      "title": "Adgroup Id",
      "type": "string"
    },
    "criterion_id": {
      "title": "Criterion Id",
      "type": "string"
    }
  },
  "required": [
    "customer_id",
    "adgroup_id",
    "criterion_id"
  ],
  "title": "google_ads_remove_adgroup_negative_keywordArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_list_shared_negative_keywords-cc467e97"></a>

## google_ads_list_shared_negative_keywords

Handler: Other product (tools/google\_ads\_negatives.py): calls mcp.tool, \_search, keywords.append.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. List all keywords inside a shared negative keyword list. Use google_ads_shared_negative_lists (in agency.py) to get shared_set_id values. Args: customer_id: Google Ads customer ID. shared_set_id: ID of the shared negative keyword list. row_limit: Max rows (default: 500).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_negatives.py#L233-L275) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "customer_id": {
      "title": "Customer Id",
      "type": "string"
    },
    "shared_set_id": {
      "title": "Shared Set Id",
      "type": "string"
    },
    "row_limit": {
      "default": 500,
      "title": "Row Limit",
      "type": "integer"
    }
  },
  "required": [
    "customer_id",
    "shared_set_id"
  ],
  "title": "google_ads_list_shared_negative_keywordsArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_add_to_shared_negative_list-216cbfd6"></a>

## google_ads_add_to_shared_negative_list

Handler: Other product (tools/google\_ads\_negatives.py): calls mcp.tool, require\_editor, json.loads, \_get\_client, client.get\_service, svc.mutate\_shared\_criteria, client.get\_type, ops.append.

```text
[WRITE] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Add keywords to an existing shared negative keyword list. Args: customer_id: Google Ads customer ID. shared_set_id: ID of the shared negative keyword list. keywords_json: JSON array of objects with 'text' and 'match_type'. Example: '[{"text": "free", "match_type": "EXACT"}, {"text": "cheap", "match_type": "BROAD"}]'
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_negatives.py#L282-L318) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "customer_id": {
      "title": "Customer Id",
      "type": "string"
    },
    "shared_set_id": {
      "title": "Shared Set Id",
      "type": "string"
    },
    "keywords_json": {
      "title": "Keywords Json",
      "type": "string"
    }
  },
  "required": [
    "customer_id",
    "shared_set_id",
    "keywords_json"
  ],
  "title": "google_ads_add_to_shared_negative_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_remove_from_shared_negative_list-6254e6f2"></a>

## google_ads_remove_from_shared_negative_list

Handler: Other product (tools/google\_ads\_negatives.py): calls mcp.tool, require\_editor, \_get\_client, client.get\_service, client.get\_type, svc.mutate\_shared\_criteria.

```text
[WRITE] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Remove a keyword from a shared negative keyword list. Use google_ads_list_shared_negative_keywords first to get criterion_id values. Args: customer_id: Google Ads customer ID. shared_set_id: ID of the shared negative keyword list. criterion_id: criterion_id of the keyword to remove.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_negatives.py#L325-L353) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "customer_id": {
      "title": "Customer Id",
      "type": "string"
    },
    "shared_set_id": {
      "title": "Shared Set Id",
      "type": "string"
    },
    "criterion_id": {
      "title": "Criterion Id",
      "type": "string"
    }
  },
  "required": [
    "customer_id",
    "shared_set_id",
    "criterion_id"
  ],
  "title": "google_ads_remove_from_shared_negative_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_remove_shared_negative_list_from_campaign-5c3f32c2"></a>

## google_ads_remove_shared_negative_list_from_campaign

Handler: Other product (tools/google\_ads\_negatives.py): calls mcp.tool, require\_editor, \_get\_client, client.get\_service, client.get\_type, svc.mutate\_campaign\_shared\_sets.

```text
[WRITE] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Detach a shared negative keyword list from a campaign. The shared list itself is not deleted — just unlinked from this campaign. Args: customer_id: Google Ads customer ID. campaign_id: Campaign ID to remove the list from. shared_set_id: Shared negative keyword list ID to detach.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_negatives.py#L360-L389) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "customer_id": {
      "title": "Customer Id",
      "type": "string"
    },
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "shared_set_id": {
      "title": "Shared Set Id",
      "type": "string"
    }
  },
  "required": [
    "customer_id",
    "campaign_id",
    "shared_set_id"
  ],
  "title": "google_ads_remove_shared_negative_list_from_campaignArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_shared_list_campaign_assignments-e4ddb341"></a>

## google_ads_shared_list_campaign_assignments

Handler: Other product (tools/google\_ads\_negatives.py): calls mcp.tool, \_search, results.append.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Show which campaigns each shared negative list is applied to. Args: customer_id: Google Ads customer ID. shared_set_id: Filter to a specific shared list ID. Leave blank for all.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_negatives.py#L396-L431) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "customer_id": {
      "title": "Customer Id",
      "type": "string"
    },
    "shared_set_id": {
      "default": "",
      "title": "Shared Set Id",
      "type": "string"
    }
  },
  "required": [
    "customer_id"
  ],
  "title": "google_ads_shared_list_campaign_assignmentsArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_add_search_term_as_negative-854b5c94"></a>

## google_ads_add_search_term_as_negative

Handler: Other product (tools/google\_ads\_negatives.py): calls mcp.tool, require\_editor, any, google\_ads\_add\_to\_shared\_negative\_list, google\_ads\_add\_adgroup\_negative\_keywords, \_get\_client, client.get\_service, client.get\_type.

```text
[WRITE] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Add a search term directly as a negative keyword — one-click workflow from the search terms report. Must specify at least one target: campaign_id, adgroup_id, or shared_set_id. Args: customer_id: Google Ads customer ID. search_term: The search term text to add as a negative (e.g. 'free shipping'). match_type: Match type for the negative: BROAD, PHRASE, or EXACT. campaign_id: Add as campaign-level negative to this campaign. adgroup_id: Add as ad-group-level negative to this ad group (requires campaign_id too). shared_set_id: Add to this shared negative keyword list instead.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_negatives.py#L438-L509) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "customer_id": {
      "title": "Customer Id",
      "type": "string"
    },
    "search_term": {
      "title": "Search Term",
      "type": "string"
    },
    "match_type": {
      "title": "Match Type",
      "type": "string"
    },
    "campaign_id": {
      "default": "",
      "title": "Campaign Id",
      "type": "string"
    },
    "adgroup_id": {
      "default": "",
      "title": "Adgroup Id",
      "type": "string"
    },
    "shared_set_id": {
      "default": "",
      "title": "Shared Set Id",
      "type": "string"
    }
  },
  "required": [
    "customer_id",
    "search_term",
    "match_type"
  ],
  "title": "google_ads_add_search_term_as_negativeArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_bulk_add_search_terms_as_negatives-c00b3c4f"></a>

## google_ads_bulk_add_search_terms_as_negatives

Handler: Other product (tools/google\_ads\_negatives.py): calls mcp.tool, require\_editor, any, json.loads, google\_ads\_add\_to\_shared\_negative\_list, google\_ads\_add\_adgroup\_negative\_keywords, \_get\_client, client.get\_service.

```text
[WRITE] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Bulk-add multiple search terms as negative keywords in one call. Use after reviewing the search terms report to block wasteful queries. Args: customer_id: Google Ads customer ID. search_terms_json: JSON array of objects with 'text' and 'match_type'. Example: '[{"text": "free", "match_type": "BROAD"}, {"text": "diy shoes", "match_type": "EXACT"}]' campaign_id: Add as campaign-level negatives to this campaign. adgroup_id: Add as ad-group-level negatives to this ad group. shared_set_id: Add to this shared negative keyword list.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_negatives.py#L516-L584) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "customer_id": {
      "title": "Customer Id",
      "type": "string"
    },
    "search_terms_json": {
      "title": "Search Terms Json",
      "type": "string"
    },
    "campaign_id": {
      "default": "",
      "title": "Campaign Id",
      "type": "string"
    },
    "adgroup_id": {
      "default": "",
      "title": "Adgroup Id",
      "type": "string"
    },
    "shared_set_id": {
      "default": "",
      "title": "Shared Set Id",
      "type": "string"
    }
  },
  "required": [
    "customer_id",
    "search_terms_json"
  ],
  "title": "google_ads_bulk_add_search_terms_as_negativesArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_create_shared_negative_list-bd539b0b"></a>

## google_ads_create_shared_negative_list

Handler: Other product (tools/google\_ads\_management.py): calls mcp.tool, require\_editor, \_get\_client, client.get\_service, client.get\_type, svc.mutate\_shared\_sets, rn.split.

```text
[WRITE] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Create a new shared negative keyword list (SharedSet of type NEGATIVE_KEYWORDS). After creating, use google_ads_add_to_shared_negative_list to populate it, then google_ads_apply_shared_negative_list to attach it to campaigns. Args: name: Display name for the shared negative list. customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_management.py#L27-L59) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "name": {
      "title": "Name",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "name"
  ],
  "title": "google_ads_create_shared_negative_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_apply_shared_negative_list-259e0bdf"></a>

## google_ads_apply_shared_negative_list

Handler: Other product (tools/google\_ads\_management.py): calls mcp.tool, require\_editor, \_get\_client, client.get\_service, client.get\_type, svc.mutate\_campaign\_shared\_sets.

```text
[WRITE] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Attach a shared negative keyword list to a campaign (CampaignSharedSet). Args: campaign_id: Campaign to attach the list to. shared_set_id: ID of the shared negative list (from google_ads_list_shared_negative_keywords). customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_management.py#L62-L92) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "shared_set_id": {
      "title": "Shared Set Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id",
    "shared_set_id"
  ],
  "title": "google_ads_apply_shared_negative_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_list_adgroup_keywords-509af304"></a>

## google_ads_list_adgroup_keywords

Handler: Other product (tools/google\_ads\_management.py): calls mcp.tool, \_search, keywords.append, \_m.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. List all keywords in an ad group regardless of spend — useful for auditing. Unlike keyword_performance reports, this returns all keywords including those with zero impressions. Args: ad_group_id: Ad group ID to list keywords from. include_paused: Include paused keywords (default True). customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_management.py#L99-L155) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_group_id": {
      "title": "Ad Group Id",
      "type": "string"
    },
    "include_paused": {
      "default": true,
      "title": "Include Paused",
      "type": "boolean"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id"
  ],
  "title": "google_ads_list_adgroup_keywordsArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_remove_keyword-f6ce3a85"></a>

## google_ads_remove_keyword

Handler: Other product (tools/google\_ads\_management.py): calls mcp.tool, require\_editor, \_get\_client, client.get\_service, client.get\_type, svc.mutate\_ad\_group\_criteria.

```text
[WRITE] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Permanently remove (delete) a keyword from an ad group. This is a hard delete — the keyword cannot be re-enabled. To temporarily stop a keyword, use google_ads_update_keyword_status to PAUSE instead. Args: ad_group_id: Ad group ID containing the keyword. criterion_id: The criterion_id of the keyword (from google_ads_list_adgroup_keywords). customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_management.py#L158-L186) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_group_id": {
      "title": "Ad Group Id",
      "type": "string"
    },
    "criterion_id": {
      "title": "Criterion Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "criterion_id"
  ],
  "title": "google_ads_remove_keywordArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_update_keyword_match_type-4bef236d"></a>

## google_ads_update_keyword_match_type

Handler: Other product (tools/google\_ads\_management.py): calls mcp.tool, require\_editor, new\_match\_type.upper, \_search, \_get\_client, client.get\_service, client.get\_type, svc.mutate\_ad\_group\_criteria.

```text
[WRITE] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Change a keyword's match type by removing the old entry and adding a new one. Google Ads does not allow in-place match type edits — this tool removes the keyword and re-creates it with the new match type, preserving the bid. Args: ad_group_id: Ad group ID containing the keyword. criterion_id: The criterion_id of the keyword to change. new_match_type: EXACT | PHRASE | BROAD customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_management.py#L189-L263) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_group_id": {
      "title": "Ad Group Id",
      "type": "string"
    },
    "criterion_id": {
      "title": "Criterion Id",
      "type": "string"
    },
    "new_match_type": {
      "title": "New Match Type",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "criterion_id",
    "new_match_type"
  ],
  "title": "google_ads_update_keyword_match_typeArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_update_ad_status-1dd39c76"></a>

## google_ads_update_ad_status

Handler: Other product (tools/google\_ads\_management.py): calls mcp.tool, require\_editor, status.upper, \_get\_client, client.get\_service, client.get\_type, op.update\_mask.CopyFrom, svc.mutate\_ad\_group\_ads.

```text
[WRITE] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Update the status of an individual ad (enable, pause, or remove). Args: ad_group_id: Ad group ID containing the ad. ad_id: Ad ID to update. status: ENABLED | PAUSED | REMOVED customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_management.py#L270-L305) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_group_id": {
      "title": "Ad Group Id",
      "type": "string"
    },
    "ad_id": {
      "title": "Ad Id",
      "type": "string"
    },
    "status": {
      "title": "Status",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "ad_id",
    "status"
  ],
  "title": "google_ads_update_ad_statusArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_list_location_targets-ae34fc44"></a>

## google_ads_list_location_targets

Handler: Other product (tools/google\_ads\_management.py): calls mcp.tool, \_search, targets.append, geo\_rn.split, round.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. List all geographic location targets for a campaign. Returns location IDs (from Google's geo target constants), names, and whether they are targeted (+) or excluded (-). Args: campaign_id: Campaign ID to inspect. customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_management.py#L312-L361) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id"
  ],
  "title": "google_ads_list_location_targetsArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_add_location_target-a723463b"></a>

## google_ads_add_location_target

Handler: Other product (tools/google\_ads\_management.py): calls mcp.tool, require\_editor, \_get\_client, client.get\_service, client.get\_type, svc.mutate\_campaign\_criteria, rn.split.

```text
[WRITE] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Add a geographic location target (or exclusion) to a campaign. Find location IDs at: https://developers.google.com/google-ads/api/data/geotargets Common IDs: US=2840, UK=2826, Canada=2124, Australia=2036. Args: campaign_id: Campaign ID to add the location to. location_id: Google geo target constant ID (e.g. '2840' for United States). negative: True to EXCLUDE this location. Default False (target). bid_modifier: Bid adjustment multiplier (e.g. 1.2 = +20%). Only for targeted, not excluded. customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_management.py#L364-L407) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "location_id": {
      "title": "Location Id",
      "type": "string"
    },
    "negative": {
      "default": false,
      "title": "Negative",
      "type": "boolean"
    },
    "bid_modifier": {
      "default": 1,
      "title": "Bid Modifier",
      "type": "number"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id",
    "location_id"
  ],
  "title": "google_ads_add_location_targetArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_remove_location_target-216f76c5"></a>

## google_ads_remove_location_target

Handler: Other product (tools/google\_ads\_management.py): calls mcp.tool, require\_editor, \_get\_client, client.get\_service, client.get\_type, svc.mutate\_campaign\_criteria.

```text
[WRITE] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Remove a geographic location target or exclusion from a campaign. Get criterion_id from google_ads_list_location_targets. Args: campaign_id: Campaign ID. criterion_id: Criterion ID of the location target to remove. customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_management.py#L410-L437) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "criterion_id": {
      "title": "Criterion Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id",
    "criterion_id"
  ],
  "title": "google_ads_remove_location_targetArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_get_ad_schedule-9f044181"></a>

## google_ads_get_ad_schedule

Handler: Other product (tools/google\_ads\_management.py): calls mcp.tool, \_search, schedule.append, round.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Get the current ad schedule (day-parting) for a campaign. Returns the hours and days the campaign is allowed to serve ads. Empty result means the campaign runs 24/7. Args: campaign_id: Campaign ID to inspect. customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_management.py#L444-L489) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id"
  ],
  "title": "google_ads_get_ad_scheduleArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_set_ad_schedule-45197357"></a>

## google_ads_set_ad_schedule

Handler: Other product (tools/google\_ads\_management.py): calls mcp.tool, require\_editor, \_get\_client, client.get\_service, svc.mutate\_campaign\_criteria, entry.get('day', '').upper, float, client.get\_type.

```text
[WRITE] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Add day-parting schedule entries to a campaign. Each schedule entry restricts when ads can show and optionally adjusts bids. To replace the full schedule, first use google_ads_clear_ad_schedule. Args: campaign_id: Campaign ID. schedules: List of schedule dicts. Each must have: - day: MONDAY|TUESDAY|WEDNESDAY|THURSDAY|FRIDAY|SATURDAY|SUNDAY - start_hour: int 0-23 - end_hour: int 1-24 - bid_modifier: float (optional, default 1.0; 0.5 = -50%, 1.5 = +50%) customer_id: Google Ads customer ID. Leave blank to use default. Example: schedules=[ {"day": "MONDAY", "start_hour": 8, "end_hour": 18}, {"day": "TUESDAY", "start_hour": 8, "end_hour": 18, "bid_modifier": 1.2} ]
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_management.py#L492-L550) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "schedules": {
      "items": {},
      "title": "Schedules",
      "type": "array"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id",
    "schedules"
  ],
  "title": "google_ads_set_ad_scheduleArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_clear_ad_schedule-e3276222"></a>

## google_ads_clear_ad_schedule

Handler: Other product (tools/google\_ads\_management.py): calls mcp.tool, require\_editor, \_search, \_get\_client, client.get\_service, svc.mutate\_campaign\_criteria, client.get\_type, ops.append.

```text
[WRITE] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Remove all ad schedule entries from a campaign (revert to 24/7 serving). Args: campaign_id: Campaign ID. customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_management.py#L553-L586) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id"
  ],
  "title": "google_ads_clear_ad_scheduleArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_update_target_cpa-5a45af8a"></a>

## google_ads_update_target_cpa

Handler: Other product (tools/google\_ads\_management.py): calls mcp.tool, require\_editor, \_get\_client, client.get\_service, client.get\_type, op.update\_mask.CopyFrom, svc.mutate\_campaigns, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Update the Target CPA bid for a campaign using Smart Bidding. The campaign must already use Target CPA bidding strategy. To check current strategy: use google_ads_campaign_performance. Args: campaign_id: Campaign ID to update. target_cpa: Target cost per acquisition in account currency (e.g. 25.00 for $25). customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_management.py#L593-L625) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "target_cpa": {
      "title": "Target Cpa",
      "type": "number"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id",
    "target_cpa"
  ],
  "title": "google_ads_update_target_cpaArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_update_target_roas-c8dd931e"></a>

## google_ads_update_target_roas

Handler: Other product (tools/google\_ads\_management.py): calls mcp.tool, require\_editor, \_get\_client, client.get\_service, client.get\_type, op.update\_mask.CopyFrom, svc.mutate\_campaigns, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Update the Target ROAS bid for a campaign using Smart Bidding. The campaign must already use Target ROAS bidding strategy. ROAS is expressed as a decimal multiplier: 4.0 means 400% ROAS ($4 revenue per $1 spend). Args: campaign_id: Campaign ID to update. target_roas: Target ROAS as a multiplier (e.g. 3.5 = 350% ROAS). customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_management.py#L628-L661) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "target_roas": {
      "title": "Target Roas",
      "type": "number"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id",
    "target_roas"
  ],
  "title": "google_ads_update_target_roasArguments",
  "type": "object"
}
```

</details>
