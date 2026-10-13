# RoyAzran/mcp-ads: supporting and other-product tools

[Provider inventory](royazran--mcp-ads.md) · [Global tool index](../TOOL_INDEX.md)

Tools 751–900 of 3131. Exact schemas from the same upstream snapshot.

<a id="tool-google_ads_add_audience_to_campaign-4196d15b"></a>

## google_ads_add_audience_to_campaign

Handler: Other product (tools/google\_ads\_management.py): calls mcp.tool, require\_editor, \_get\_client, client.get\_service, client.get\_type, svc.mutate\_campaign\_criteria.

```text
[WRITE] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Add a remarketing audience (user list) to a campaign. By default adds as OBSERVATION (bid-only, doesn't restrict reach). Set observation_only=False for TARGETING mode (only shows ads to audience members). Args: campaign_id: Campaign ID to add the audience to. user_list_id: ID of the user list/audience (from google_ads_audience_performance or the Google Ads UI). bid_modifier: Bid adjustment for this audience (e.g. 1.3 = +30% for audience members). observation_only: True = add as observation (bid adjustment only). False = targeting (restrict to audience). customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_management.py#L668-L709) · Schema: tools/list.

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
    "user_list_id": {
      "title": "User List Id",
      "type": "string"
    },
    "bid_modifier": {
      "default": 1,
      "title": "Bid Modifier",
      "type": "number"
    },
    "observation_only": {
      "default": true,
      "title": "Observation Only",
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
    "user_list_id"
  ],
  "title": "google_ads_add_audience_to_campaignArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_list_mcc_clients-14bb09f1"></a>

## google_ads_list_mcc_clients

Handler: Other product (tools/google\_ads\_management.py): calls mcp.tool, \_get\_client, client.get\_service, svc.list\_accessible\_customers, rn.split, \_search, results.append.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. List all client accounts accessible under a manager (MCC) account. Returns account IDs, names, currency, timezone, and status for each sub-account. Use the returned customer_id values in other tools to manage individual accounts. Args: customer_id: MCC/manager customer ID. Leave blank to use the default manager ID.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_management.py#L716-L763) · Schema: tools/list.

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
  "title": "google_ads_list_mcc_clientsArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_upload_customer_match-9f46f741"></a>

## google_ads_upload_customer_match

Handler: Other product (tools/google\_ads\_management.py): calls mcp.tool, require\_editor, \_get\_client, client.get\_service, client.get\_type, min, ul\_svc.mutate\_user\_lists, email.strip().lower.

```text
[WRITE] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Upload a customer match audience (email/phone list) to Google Ads. Emails and phones are hashed with SHA-256 before upload (Google requirement). Creates a new CRM-based user list or uploads to an existing one with the same name. Args: user_list_name: Name for the customer match audience (e.g. 'Newsletter Subscribers'). emails: List of plain-text email addresses. They will be normalized and hashed. phones: Optional list of phone numbers (E.164 format preferred, e.g. '+12025551234'). membership_days: How many days members stay in the list (default 30, max 540). customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_management.py#L770-L853) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "user_list_name": {
      "title": "User List Name",
      "type": "string"
    },
    "emails": {
      "items": {},
      "title": "Emails",
      "type": "array"
    },
    "phones": {
      "default": null,
      "items": {},
      "title": "Phones",
      "type": "array"
    },
    "membership_days": {
      "default": 30,
      "title": "Membership Days",
      "type": "integer"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "user_list_name",
    "emails"
  ],
  "title": "google_ads_upload_customer_matchArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_upload_offline_conversions-deb1690a"></a>

## google_ads_upload_offline_conversions

Handler: Other product (tools/google\_ads\_management.py): calls mcp.tool, require\_editor, \_get\_client, client.get\_service, svc.upload\_click\_conversions, client.get\_type, conv.get, click\_conversions.append.

```text
[WRITE] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Upload offline conversion events to Google Ads (click-based conversions via GCLID). Use this to import CRM leads, phone call outcomes, or any conversion that happened offline after an ad click. Google uses GCLID to match the click. Args: conversions: List of conversion dicts. Each requires: - gclid: The Google Click ID from the landing page URL parameter. - conversion_action_id: ID of the conversion action to import into. - conversion_date_time: ISO datetime with timezone (e.g. '2024-01-15 14:30:00+00:00'). - value: Optional float conversion value. - currency: Optional currency code (default 'USD'). customer_id: Google Ads customer ID. Leave blank to use default. Example: conversions=[{ "gclid": "Cj0KCQjw...", "conversion_action_id": "12345678", "conversion_date_time": "2024-01-15 14:30:00+00:00", "value": 250.00, "currency": "USD" }]
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_management.py#L860-L930) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "conversions": {
      "items": {},
      "title": "Conversions",
      "type": "array"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "conversions"
  ],
  "title": "google_ads_upload_offline_conversionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_copy_campaign-8bf32924"></a>

## google_ads_copy_campaign

Handler: Other product (tools/google\_ads\_management.py): calls mcp.tool, require\_editor, \_search, \_get\_client, client.get\_service, client.get\_type, budget\_svc.mutate\_campaign\_budgets, c\_svc.mutate\_campaigns.

```text
[WRITE] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Copy a campaign — creates a new campaign with the same settings and budget. The new campaign is created PAUSED by default so you can review it before enabling. Ad groups, keywords, and ads are NOT copied — only the campaign-level settings (bidding strategy, budget, targeting type, network settings). Args: source_campaign_id: ID of the campaign to copy. new_name: Name for the new campaign. paused: Create the new campaign as PAUSED (default True, recommended). customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_management.py#L937-L1042) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "source_campaign_id": {
      "title": "Source Campaign Id",
      "type": "string"
    },
    "new_name": {
      "title": "New Name",
      "type": "string"
    },
    "paused": {
      "default": true,
      "title": "Paused",
      "type": "boolean"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "source_campaign_id",
    "new_name"
  ],
  "title": "google_ads_copy_campaignArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_update_campaign_name-29b71854"></a>

## google_ads_update_campaign_name

Handler: Other product (tools/google\_ads\_management.py): calls mcp.tool, require\_editor, \_get\_client, client.get\_service, svc.campaign\_path, client.get\_type, op.update\_mask.CopyFrom, svc.mutate\_campaigns.

```text
[WRITE] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Rename a campaign. Args: campaign_id: The campaign ID to rename. new_name: New display name for the campaign. customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_management.py#L1049-L1076) · Schema: tools/list.

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
  "title": "google_ads_update_campaign_nameArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_update_adgroup_name-c1b418e2"></a>

## google_ads_update_adgroup_name

Handler: Other product (tools/google\_ads\_management.py): calls mcp.tool, require\_editor, \_get\_client, client.get\_service, svc.ad\_group\_path, client.get\_type, op.update\_mask.CopyFrom, svc.mutate\_ad\_groups.

```text
[WRITE] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Rename an ad group. Args: campaign_id: The campaign ID that contains the ad group. ad_group_id: The ad group ID to rename. new_name: New display name for the ad group. customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_management.py#L1079-L1113) · Schema: tools/list.

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
    "campaign_id",
    "ad_group_id",
    "new_name"
  ],
  "title": "google_ads_update_adgroup_nameArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_list_ads_in_adgroup-0482b5b9"></a>

## google_ads_list_ads_in_adgroup

Handler: Other product (tools/google\_ads\_management.py): calls mcp.tool, \_get\_client, \_search, ads.append, \_m, round.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. List all ads within a specific ad group, with their status, type, and performance metrics. Returns headlines, descriptions, final URLs, status, and last-30-day impressions/clicks/cost. Args: ad_group_id: The ad group ID to list ads for. customer_id: Google Ads customer ID. Leave blank to use default. include_paused: Include PAUSED ads (default True). Set False to return only ENABLED ads.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_management.py#L1120-L1198) · Schema: tools/list.

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
    },
    "include_paused": {
      "default": true,
      "title": "Include Paused",
      "type": "boolean"
    }
  },
  "required": [
    "ad_group_id"
  ],
  "title": "google_ads_list_ads_in_adgroupArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_overview-f36453e5"></a>

## meta_ads_overview

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_get, \_with\_purchase\_metrics, date.today, timedelta.

```text
[READ] Meta Ads tool. Get a high-level Meta Ads performance overview: spend, impressions, clicks, CTR, CPC, ROAS. Args: start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. account_id: Ad account ID. Leave blank to use META_AD_ACCOUNT_ID from .env.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L1971-L1991) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
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
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    }
  },
  "title": "meta_ads_overviewArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_campaigns-bcfa055c"></a>

## meta_ads_campaigns

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_with\_purchase\_metrics, date.today, \_get, timedelta.

```text
[READ] Meta Ads tool. Get Meta Ads campaign performance including spend, impressions, clicks, CTR for each campaign. Args: start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. account_id: Ad account ID. Leave blank to use .env default. status_filter: Filter by campaign status: ACTIVE, PAUSED, ARCHIVED, ALL. Default ACTIVE.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L1994-L2020) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
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
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    },
    "status_filter": {
      "default": "ACTIVE",
      "title": "Status Filter",
      "type": "string"
    }
  },
  "title": "meta_ads_campaignsArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_adsets-d2b25cc9"></a>

## meta_ads_adsets

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_get, date.today, timedelta.

```text
[READ] Meta Ads tool. Get Meta Ads adset-level performance: spend, impressions, CPC, frequency per ad set. Args: start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. account_id: Ad account ID. Leave blank to use .env default. campaign_id: Filter by a specific campaign ID. Leave blank for all.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L2023-L2049) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
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
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    },
    "campaign_id": {
      "default": "",
      "title": "Campaign Id",
      "type": "string"
    }
  },
  "title": "meta_ads_adsetsArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_daily_trend-811591d8"></a>

## meta_ads_daily_trend

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_get, \_with\_purchase\_metrics, payload.get, date.today, isinstance, timedelta.

```text
[READ] Meta Ads tool. Get Meta Ads daily performance trend: daily spend, impressions, clicks, CTR over time. Args: start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. account_id: Ad account ID. Leave blank to use .env default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L2052-L2078) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
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
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    }
  },
  "title": "meta_ads_daily_trendArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_ads-aa854aa4"></a>

## meta_ads_ads

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_get, date.today, timedelta.

```text
[READ] Meta Ads tool. Get Meta Ads individual ad performance: clicks, impressions, spend, CTR, CPC per creative. Args: start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. account_id: Ad account ID. Leave blank to use .env default. adset_id: Filter by adset ID. Leave blank for all ads.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L2081-L2107) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
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
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    },
    "adset_id": {
      "default": "",
      "title": "Adset Id",
      "type": "string"
    }
  },
  "title": "meta_ads_adsArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_demographics-37823389"></a>

## meta_ads_demographics

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_get, date.today, timedelta.

```text
[READ] Meta Ads tool. Get Meta Ads performance broken down by age and gender demographics. Args: start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. account_id: Ad account ID. Leave blank to use .env default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L2110-L2131) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
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
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    }
  },
  "title": "meta_ads_demographicsArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_placements-d12fcbe7"></a>

## meta_ads_placements

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_get, date.today, timedelta.

```text
[READ] Meta Ads tool. Get Meta Ads performance broken down by publisher platform and ad placement (Feed, Stories, Reels, etc.). Args: start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. account_id: Ad account ID. Leave blank to use .env default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L2134-L2155) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
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
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    }
  },
  "title": "meta_ads_placementsArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_geo-d941d07b"></a>

## meta_ads_geo

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_get, date.today, timedelta.

```text
[READ] Meta Ads tool. Get Meta Ads performance broken down by country or region. Args: start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. account_id: Ad account ID. Leave blank to use .env default. row_limit: Max countries. Default 25.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L2158-L2181) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
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
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    },
    "row_limit": {
      "default": 25,
      "title": "Row Limit",
      "type": "integer"
    }
  },
  "title": "meta_ads_geoArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_video_performance-bd8643a0"></a>

## meta_ads_video_performance

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_get, date.today, timedelta.

```text
[READ] Meta Ads tool. Get Meta Ads video performance: video plays, 25/50/75/100% completion rates, ThruPlays. Args: start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. account_id: Ad account ID. Leave blank to use .env default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L2184-L2205) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
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
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    }
  },
  "title": "meta_ads_video_performanceArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_conversion_funnel-9131e2d2"></a>

## meta_ads_conversion_funnel

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_get, date.today, timedelta.

```text
[READ] Meta Ads tool. Get Meta Ads conversion funnel: impressions → link clicks → landing page views → adds to cart → purchases. Args: start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. account_id: Ad account ID. Leave blank to use .env default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L2208-L2229) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
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
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    }
  },
  "title": "meta_ads_conversion_funnelArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_frequency-06c85eeb"></a>

## meta_ads_frequency

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_get, date.today, timedelta.

```text
[READ] Meta Ads tool. Get Meta Ads frequency and reach data per campaign to detect ad fatigue. Args: start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. account_id: Ad account ID. Leave blank to use .env default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L2232-L2253) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
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
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    }
  },
  "title": "meta_ads_frequencyArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_hourly_trend-9171af29"></a>

## meta_ads_hourly_trend

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_get, date.today, timedelta.

```text
[READ] Meta Ads tool. Get Meta Ads performance by hour of day to find peak delivery times. Args: start_date: Start date YYYY-MM-DD. Defaults to 7 days ago. end_date: End date YYYY-MM-DD. Defaults to today. account_id: Ad account ID. Leave blank to use .env default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L2256-L2277) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
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
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    }
  },
  "title": "meta_ads_hourly_trendArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_list_ad_accounts-ae979e44"></a>

## meta_ads_list_ad_accounts

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, current\_user\_ctx.get, set, \_credential\_provider().list\_connections, name\_filter.strip().lower, current\_connection\_token\_ctx.get, requests.get, resp.json.

```text
[READ] Meta Ads tool. List all Meta ad accounts the user has access to, with optional name filtering. Paginates through ALL accounts (not just the first 50). If name_filter is provided, returns only accounts whose name contains that string (case-insensitive). Args: user_id: Facebook user ID. Leave blank to use 'me'. name_filter: Optional partial name to filter results, e.g. 'acme'.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L2280-L2330) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "user_id": {
      "default": "me",
      "title": "User Id",
      "type": "string"
    },
    "name_filter": {
      "default": "",
      "title": "Name Filter",
      "type": "string"
    }
  },
  "title": "meta_ads_list_ad_accountsArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_audiences-882e99d7"></a>

## meta_ads_audiences

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_get.

```text
[READ] Meta Ads tool. List all custom audiences in the Meta ad account. Args: account_id: Ad account ID. Leave blank to use .env default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L2333-L2341) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    }
  },
  "title": "meta_ads_audiencesArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_check_permissions-3428890e"></a>

## meta_ads_check_permissions

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_all\_meta\_connection\_tokens, \_get, results.append, set, perms.get, (granted if row.get('status') == 'granted' else declined).add, sorted.

```text
[READ] Meta Ads tool. Show which Meta permissions the connected token actually holds, and what is missing. Use this first when a Page or Instagram tool fails with a permissions error, and to check App Review readiness -- Page/Instagram write scopes only work for app testers until Meta approves them, so a scope can be requested at connect time and still not be granted.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L2438-L2495) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "meta_ads_check_permissionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_pages-987bdcdf"></a>

## meta_ads_pages

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_all\_pages, \_no\_pages\_message.

```text
[READ] Meta Ads tool. List Facebook Pages managed by the authenticated user, across every connected Meta login.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L2498-L2511) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "meta_ads_pagesArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_find_page-d0cdbe71"></a>

## meta_ads_find_page

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, (search or '').strip().lower, (search or '').strip, \_all\_pages, str(page.get('id') or '').lower, str(page.get('name') or '').lower, page.get.

```text
[READ] Meta Ads tool. Find connected Facebook Pages by name or ID, across every connected Meta login. Args: search: Optional page name or ID search. Leave blank to return all connected Pages.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L2514-L2526) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "search": {
      "default": "",
      "title": "Search",
      "type": "string"
    }
  },
  "title": "meta_ads_find_pageArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_pixels-7fd555f3"></a>

## meta_ads_pixels

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_get.

```text
[READ] Meta Ads tool. List all Meta Pixels (datasets) associated with the ad account. Args: account_id: Ad account ID. Leave blank to use .env default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L2529-L2537) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    }
  },
  "title": "meta_ads_pixelsArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_catalog-d4a473c3"></a>

## meta_ads_catalog

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_get.

```text
[READ] Meta Ads tool. List Meta product catalogs linked to the ad account. Args: account_id: Ad account ID. Leave blank to use .env default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L2540-L2548) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    }
  },
  "title": "meta_ads_catalogArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_creative_previews-e0f40813"></a>

## meta_ads_creative_previews

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_get.

```text
[READ] Meta Ads tool. Get creative preview URLs for a specific Meta ad. Args: ad_id: The Meta ad ID to get previews for (required).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L2551-L2558) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_id": {
      "title": "Ad Id",
      "type": "string"
    }
  },
  "required": [
    "ad_id"
  ],
  "title": "meta_ads_creative_previewsArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_page_insights-d68d2b82"></a>

## meta_ads_page_insights

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_dt.datetime.fromisoformat(sd).timestamp, \_dt.datetime.fromisoformat(ed).timestamp, \_get, date.today, timedelta, \_dt.datetime.fromisoformat.

```text
[READ] Meta Ads tool. Get Meta Page insights: reach, impressions, and engagement metrics for a Facebook Page. Args: page_id: Facebook Page ID (required). Run meta_ads_pages to list the Pages every connected login can reach. start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L2561-L2585) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
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
  "required": [
    "page_id"
  ],
  "title": "meta_ads_page_insightsArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_reach_estimate-86208ff2"></a>

## meta_ads_reach_estimate

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_get.

```text
[READ] Meta Ads tool. Estimate the reach for a targeting spec in Meta Ads. Args: targeting_spec: JSON string with targeting spec, e.g. '{"age_min":25,"age_max":45,"genders":[1],"geo_locations":{"countries":["US"]}}' (required). account_id: Ad account ID. Leave blank to use .env default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L2588-L2604) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "targeting_spec": {
      "title": "Targeting Spec",
      "type": "string"
    },
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    }
  },
  "required": [
    "targeting_spec"
  ],
  "title": "meta_ads_reach_estimateArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_targeting_search-8b5a8aec"></a>

## meta_ads_targeting_search

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_get.

```text
[READ] Meta Ads tool. Search for Meta Ads targeting options: interests, behaviors, demographics. Args: q: Search query, e.g. 'fitness', 'technology', 'travel' (required). targeting_type: Type to search: 'interests', 'behaviors', 'demographics'. Default interests.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L2607-L2632) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "q": {
      "title": "Q",
      "type": "string"
    },
    "targeting_type": {
      "default": "interests",
      "title": "Targeting Type",
      "type": "string"
    }
  },
  "required": [
    "q"
  ],
  "title": "meta_ads_targeting_searchArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_find_location-7317cab9"></a>

## meta_ads_find_location

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, (q or '').strip, country\_code.strip, \_get, payload.get, max, t.strip, country\_code.strip().upper.

```text
[READ] Meta Ads tool. Look up a real place -- city, neighbourhood, postcode, region -- and get the exact Meta geo key needed to target it. THIS IS THE ONLY WAY TO TARGET A SPECIFIC PLACE. `geo_locations` will not accept a place name: a city, neighbourhood or postcode has to be given as an opaque key like '2420379' that only this lookup can produce. Guessing a key, or falling back to `{"countries":["IL"]}` because the key was unknown, quietly targets an entire country -- the ad still runs, and it runs on the wrong people while spending real money. Call this before meta_ads_create_adset or meta_ads_update_adset_targeting whenever the user names anywhere smaller than a country, then pass the returned `geo_locations` straight through (or combine several with meta_ads_build_geo_targeting). For a point on the map with no name -- a shop, a venue, a catchment around an address -- skip this and use meta_ads_build_geo_targeting's `custom_pins` with the latitude and longitude instead. Args: q: The place to find, e.g. 'Tel Aviv', 'Ramat Gan', '90210' (required). Search Meta's own names: it indexes English and local spellings, so try the other spelling before concluding a place is unavailable. location_types: Comma-separated filter, any of: country, region, city, subcity, neighborhood, subneighborhood, zip, geo_market, electoral_district, place. Blank searches all types, which is usually what you want first -- narrow only if the results are cluttered. country_code: Two-letter code to restrict the search, e.g. 'IL'. Use it when a name is ambiguous across countries (there are many Springfields). radius_km: Optional radius, 16-80 km, applied to the ready-made `geo_locations` in each result. Only meaningful for cities, places, neighbourhoods and postcodes. 16 km (10 miles) is Meta's floor around a named place -- anything smaller is accepted and reaches nobody. For a tighter circle use custom_pins in meta_ads_build_geo_targeting. Blank means Meta's own boundary for the place, the right default for a city. limit: Maximum matches to return. Default 15.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L2713-L2827) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "q": {
      "title": "Q",
      "type": "string"
    },
    "location_types": {
      "default": "",
      "title": "Location Types",
      "type": "string"
    },
    "country_code": {
      "default": "",
      "title": "Country Code",
      "type": "string"
    },
    "radius_km": {
      "default": "",
      "title": "Radius Km",
      "type": "string"
    },
    "limit": {
      "default": 15,
      "title": "Limit",
      "type": "integer"
    }
  },
  "required": [
    "q"
  ],
  "title": "meta_ads_find_locationArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_build_geo_targeting-fbb69773"></a>

## meta_ads_build_geo_targeting

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, add\_keys, (countries or '').split, (custom\_pins or '').strip, (excluded\_location\_keys or '').strip, (location\_types or '').strip, (raw or '').split, code.strip().upper.

```text
[READ] Meta Ads tool. Assemble a valid `geo_locations` block: several places, radii, exclusions, and whether to reach residents or anyone passing through. Does no network call -- it validates and formats. Resolve names to keys with meta_ads_find_location first, then feed the keys in here. `custom_pins` is how you target an exact spot: a shop, a showroom, a venue. Meta has no key for an address, so a point is given as coordinates plus a radius, and that is the only way to say "within 5 km of this door". `location_types` is the setting people forget, and it changes who sees the ad more than the radius does. 'home' is residents only; 'recent' is anyone recently there; Meta's own default is home + recent. Use 'home' alone for a local business selling to locals. ('travel_in' is documented but Meta currently rejects it -- reach visitors with 'recent' instead.) Args: location_keys: Comma-separated keys from meta_ads_find_location, each optionally prefixed with its type, e.g. '2420379,city:1234,zip:5678'. Without a prefix the key is treated as a city, which is what the lookup returns most often. Prefix anything that is not a city. countries: Comma-separated two-letter codes, e.g. 'IL,US'. custom_pins: JSON list of exact points, e.g. '[{"lat":32.0853,"lng":34.7818,"radius_km":5,"name":"Tel Aviv shop"}]'. radius_km defaults to the `radius_km` argument, or 10. A pin may be as tight as 1 km, which is the whole reason to use one. radius_km: Default radius in km for every city, postcode and pin that does not carry its own. Named places accept 16-80 km only -- below 16 Meta reaches nobody without complaining, so this rejects it and points you at custom_pins. Blank leaves Meta's own city boundary. excluded_location_keys: Same format as location_keys, for places to exclude -- e.g. run nationally but not in the one city already saturated. location_types: Comma-separated: home, recent, travel_in. Blank leaves Meta's default (home + recent).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L2830-L3008) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "location_keys": {
      "default": "",
      "title": "Location Keys",
      "type": "string"
    },
    "countries": {
      "default": "",
      "title": "Countries",
      "type": "string"
    },
    "custom_pins": {
      "default": "",
      "title": "Custom Pins",
      "type": "string"
    },
    "radius_km": {
      "default": "",
      "title": "Radius Km",
      "type": "string"
    },
    "excluded_location_keys": {
      "default": "",
      "title": "Excluded Location Keys",
      "type": "string"
    },
    "location_types": {
      "default": "",
      "title": "Location Types",
      "type": "string"
    }
  },
  "title": "meta_ads_build_geo_targetingArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_pixel_stats-47239c9f"></a>

## meta_ads_pixel_stats

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_get, date.today, timedelta.

```text
[READ] Meta Ads tool. Get event statistics for a Meta Pixel — how many times each event fired. Args: pixel_id: The Meta Pixel ID (required). start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L3011-L3030) · Schema: tools/list.

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
  "required": [
    "pixel_id"
  ],
  "title": "meta_ads_pixel_statsArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_custom_conversions-53ff214c"></a>

## meta_ads_custom_conversions

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_get.

```text
[READ] Meta Ads tool. List all custom conversions defined in the Meta ad account. Args: account_id: Ad account ID. Leave blank to use .env default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L3033-L3041) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    }
  },
  "title": "meta_ads_custom_conversionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_list_image_assets-9469c544"></a>

## meta_ads_list_image_assets

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, (account\_id or ad\_account\_id or '').strip, \_resolve\_meta\_account, max, \_get, \_normalize\_meta\_image\_assets, min, \_paging\_info.

```text
[READ][PRIMARY][RECOMMENDED] First-choice tool when the user asks to show, list, browse, or pick their photos/images from the Meta Ads library or Ads Manager. Use this immediately and present the returned thumbnails visually on the first response, not as file names only. Returns thumbnail_url/preview_url, image_hash, size, and lightweight card data for rendering.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L3167-L3211) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    },
    "limit": {
      "default": 24,
      "title": "Limit",
      "type": "integer"
    },
    "after": {
      "default": "",
      "title": "After",
      "type": "string"
    },
    "ad_account_id": {
      "default": "",
      "title": "Ad Account Id",
      "type": "string"
    }
  },
  "title": "meta_ads_list_image_assetsArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_list_video_assets-9f0beeaf"></a>

## meta_ads_list_video_assets

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, (account\_id or ad\_account\_id or '').strip, \_resolve\_meta\_account, max, \_get, \_normalize\_meta\_video\_assets, min, \_paging\_info.

```text
[READ][PRIMARY][RECOMMENDED] First-choice tool when the user asks to show, list, browse, or pick their videos from the Meta Ads library or Ads Manager. Use this immediately and present the returned thumbnails visually on the first response. Returns thumbnail_url/preview_url, readiness/status, length, and lightweight card data for rendering.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L3214-L3258) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    },
    "limit": {
      "default": 24,
      "title": "Limit",
      "type": "integer"
    },
    "after": {
      "default": "",
      "title": "After",
      "type": "string"
    },
    "ad_account_id": {
      "default": "",
      "title": "Ad Account Id",
      "type": "string"
    }
  },
  "title": "meta_ads_list_video_assetsArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_list_creative_assets-5f4583b8"></a>

## meta_ads_list_creative_assets

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, (account\_id or ad\_account\_id or '').strip, \_resolve\_meta\_account, max, \_get, \_normalize\_meta\_creative\_assets, min, \_paging\_info.

```text
[READ][RECOMMENDED] Show existing Meta ad creatives in a gallery-friendly shape. Use this when the user asks to browse, view, or pick existing creatives. Returns thumbnail_url/preview_url, copy fields, type, and lightweight card data for rendering.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L3261-L3305) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    },
    "limit": {
      "default": 24,
      "title": "Limit",
      "type": "integer"
    },
    "after": {
      "default": "",
      "title": "After",
      "type": "string"
    },
    "ad_account_id": {
      "default": "",
      "title": "Ad Account Id",
      "type": "string"
    }
  },
  "title": "meta_ads_list_creative_assetsArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_media_library-932ef83d"></a>

## meta_ads_media_library

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, (account\_id or ad\_account\_id or '').strip, \_resolve\_meta\_account, max, \_get, min, \_normalize\_meta\_image\_assets, \_paging\_info.

```text
[READ][PRIMARY][RECOMMENDED] First-choice tool when the user asks for their Meta media library, ads library, assets library, or a combined view of photos/videos/creatives. Returns image, video, and creative sections together so clients can render one visual picker instead of separate lists.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L3308-L3372) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    },
    "limit_per_type": {
      "default": 12,
      "title": "Limit Per Type",
      "type": "integer"
    },
    "ad_account_id": {
      "default": "",
      "title": "Ad Account Id",
      "type": "string"
    }
  },
  "title": "meta_ads_media_libraryArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_ad_creatives-bf18a39d"></a>

## meta_ads_ad_creatives

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_get.

```text
[READ] Meta Ads tool. List all ad creatives in the Meta ad account with their names and object types. Args: account_id: Ad account ID. Leave blank to use .env default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L3375-L3383) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    }
  },
  "title": "meta_ads_ad_creativesArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_list_campaigns-028efa4e"></a>

## meta_ads_list_campaigns

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_get.

```text
[READ] Meta Ads tool. List Meta Ads campaigns with their IDs, names, status, objective, and budgets — no date range needed. Use this to find campaign IDs for duplication, status updates, or budget changes. Args: account_id: Ad account ID. Leave blank to use .env default. status_filter: Filter by status: ACTIVE, PAUSED, ARCHIVED, ALL. Default ALL.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L3390-L3410) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    },
    "status_filter": {
      "default": "ALL",
      "title": "Status Filter",
      "type": "string"
    }
  },
  "title": "meta_ads_list_campaignsArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_list_adsets-ba1ba46c"></a>

## meta_ads_list_adsets

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_get.

```text
[READ] Meta Ads tool. List Meta Ads ad sets with their IDs, names, status, and budgets — no date range needed. Use this to find ad set IDs for duplication, status updates, or targeting changes. Args: account_id: Ad account ID. Leave blank to use .env default. campaign_id: Filter by a specific campaign ID. Leave blank for all ad sets. status_filter: Filter by status: ACTIVE, PAUSED, ARCHIVED, ALL. Default ALL.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L3413-L3437) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    },
    "campaign_id": {
      "default": "",
      "title": "Campaign Id",
      "type": "string"
    },
    "status_filter": {
      "default": "ALL",
      "title": "Status Filter",
      "type": "string"
    }
  },
  "title": "meta_ads_list_adsetsArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_update_status-17c8ed72"></a>

## meta_ads_update_status

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, require\_editor, \_post.

```text
[WRITE] Meta Ads tool. Update the status (active/paused/archived) of a Meta Ads campaign, ad set, or ad. Args: object_id: The ID of the campaign, adset, or ad to update (required). object_type: One of 'campaign', 'adset', or 'ad' (required). status: New status: ACTIVE, PAUSED, or ARCHIVED (required).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L3444-L3461) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "object_id": {
      "title": "Object Id",
      "type": "string"
    },
    "object_type": {
      "title": "Object Type",
      "type": "string"
    },
    "status": {
      "title": "Status",
      "type": "string"
    }
  },
  "required": [
    "object_id",
    "object_type",
    "status"
  ],
  "title": "meta_ads_update_statusArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_update_budget-5b41daf2"></a>

## meta_ads_update_budget

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, require\_editor, \_post.

```text
[WRITE] Meta Ads tool. Update the daily or lifetime budget for a Meta Ads campaign (CBO — campaign-level budget). Use meta_ads_update_adset_budget to update budget at the ad set level. Args: campaign_id: Campaign ID to update (required). daily_budget: New daily budget in the account currency's smallest unit, e.g. '5000' for ₪50. Leave blank to keep unchanged. lifetime_budget: New lifetime budget in smallest currency unit. Leave blank to keep unchanged.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L3464-L3487) · Schema: tools/list.

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
    "daily_budget": {
      "default": "",
      "title": "Daily Budget",
      "type": "string"
    },
    "lifetime_budget": {
      "default": "",
      "title": "Lifetime Budget",
      "type": "string"
    }
  },
  "required": [
    "campaign_id"
  ],
  "title": "meta_ads_update_budgetArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_update_adset_budget-7f26647b"></a>

## meta_ads_update_adset_budget

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, require\_editor, \_explain\_adset\_edit, \_post.

```text
[WRITE] Meta Ads tool. Update the budget (and optionally the bid) for a Meta Ads ad set. Works for ad sets in non-CBO campaigns where budget is set per ad set. Use meta_ads_update_budget to change a CBO campaign-level budget instead. Args: adset_id: Ad set ID to update (required). daily_budget: New daily budget in smallest currency unit, e.g. '5000' for ₪50. Leave blank to keep unchanged. lifetime_budget: New lifetime budget in smallest currency unit. Leave blank to keep unchanged. bid_amount: New manual bid in smallest currency unit. Only for COST_CAP / LOWEST_COST_WITH_BID_CAP strategies. end_time: New end time in ISO 8601, e.g. '2025-12-31T23:59:00+0200'. Required when switching to lifetime_budget.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L3490-L3522) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "adset_id": {
      "title": "Adset Id",
      "type": "string"
    },
    "daily_budget": {
      "default": "",
      "title": "Daily Budget",
      "type": "string"
    },
    "lifetime_budget": {
      "default": "",
      "title": "Lifetime Budget",
      "type": "string"
    },
    "bid_amount": {
      "default": "",
      "title": "Bid Amount",
      "type": "string"
    },
    "end_time": {
      "default": "",
      "title": "End Time",
      "type": "string"
    }
  },
  "required": [
    "adset_id"
  ],
  "title": "meta_ads_update_adset_budgetArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_switch_budget_mode-925fdcaf"></a>

## meta_ads_switch_budget_mode

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_post, \_resolve\_meta\_account, \_get, require\_editor, adsets.get.

```text
[WRITE] Meta Ads tool. Switch a Meta Ads campaign between CBO (Campaign Budget Optimization) and ad-set-level budgets. CBO mode: budget is set at the campaign level and Meta distributes it automatically across ad sets. Ad-set mode: each ad set controls its own budget independently. When switching FROM CBO to ad-set mode: Meta clears ad set budgets during the switch. Call meta_ads_update_adset_budget for each ad set afterward to restore their budgets. The response includes the list of ad sets so you know which ones to update. When switching FROM ad-set to CBO mode: pass campaign_daily_budget or campaign_lifetime_budget to set the new campaign-level budget in the same call. Args: campaign_id: Campaign ID to switch (required). mode: Target mode — 'cbo' to enable campaign-level budget, 'adset' to use per-ad-set budgets (required). account_id: Ad account ID. Leave blank to use .env default. campaign_daily_budget: Daily budget in smallest currency unit to set when enabling CBO, e.g. '10000' for ₪100. campaign_lifetime_budget: Lifetime budget in smallest currency unit to set when enabling CBO.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L3525-L3590) · Schema: tools/list.

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
    "mode": {
      "title": "Mode",
      "type": "string"
    },
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    },
    "campaign_daily_budget": {
      "default": "",
      "title": "Campaign Daily Budget",
      "type": "string"
    },
    "campaign_lifetime_budget": {
      "default": "",
      "title": "Campaign Lifetime Budget",
      "type": "string"
    }
  },
  "required": [
    "campaign_id",
    "mode"
  ],
  "title": "meta_ads_switch_budget_modeArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_create_campaign-8dfdba44"></a>

## meta_ads_create_campaign

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, require\_editor, \_post.

```text
[WRITE] Meta Ads tool. Create a new Meta Ads campaign. Args: name: Campaign name (required). objective: Campaign objective: OUTCOME_TRAFFIC, OUTCOME_AWARENESS, OUTCOME_LEADS, OUTCOME_SALES, OUTCOME_ENGAGEMENT, OUTCOME_APP_PROMOTION (required). status: Initial status: ACTIVE or PAUSED. Default PAUSED. account_id: Ad account ID. Leave blank to use .env default. special_ad_categories: One of NONE, EMPLOYMENT, HOUSING, CREDIT, ISSUES_ELECTIONS_POLITICS. Default NONE. is_cbo: Enable Campaign Budget Optimization (budget at campaign level). Default False (budget set per ad set). daily_budget: Daily budget in smallest currency unit (e.g. '5000' = ₪50). Only used when is_cbo=True. lifetime_budget: Lifetime budget in smallest currency unit. Only used when is_cbo=True.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L3593-L3629) · Schema: tools/list.

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
    "objective": {
      "title": "Objective",
      "type": "string"
    },
    "status": {
      "default": "PAUSED",
      "title": "Status",
      "type": "string"
    },
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    },
    "special_ad_categories": {
      "default": "NONE",
      "title": "Special Ad Categories",
      "type": "string"
    },
    "is_cbo": {
      "default": false,
      "title": "Is Cbo",
      "type": "boolean"
    },
    "daily_budget": {
      "default": "",
      "title": "Daily Budget",
      "type": "string"
    },
    "lifetime_budget": {
      "default": "",
      "title": "Lifetime Budget",
      "type": "string"
    }
  },
  "required": [
    "name",
    "objective"
  ],
  "title": "meta_ads_create_campaignArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_create_lead_campaign-c04677a8"></a>

## meta_ads_create_lead_campaign

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, meta\_ads\_create\_campaign, require\_editor.

```text
[WRITE] Meta Ads tool. Create a paused Meta campaign configured for lead generation.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L3632-L3651) · Schema: tools/list.

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
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    },
    "status": {
      "default": "PAUSED",
      "title": "Status",
      "type": "string"
    },
    "special_ad_categories": {
      "default": "NONE",
      "title": "Special Ad Categories",
      "type": "string"
    },
    "is_cbo": {
      "default": false,
      "title": "Is Cbo",
      "type": "boolean"
    },
    "daily_budget": {
      "default": "",
      "title": "Daily Budget",
      "type": "string"
    }
  },
  "required": [
    "name"
  ],
  "title": "meta_ads_create_lead_campaignArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_create_adset-32ee7f46"></a>

## meta_ads_create_adset

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_require\_advantage\_audience\_flag, \_post, require\_editor, isinstance, json.loads, destination\_type.upper.

```text
[WRITE] Meta Ads tool. Create a new Meta Ads ad set within a campaign. Args: name: Ad set name (required). campaign_id: Parent campaign ID (required). targeting: JSON string with targeting spec, e.g. '{"age_min":25,"age_max":50,"geo_locations":{"countries":["IL"]}}' (required). billing_event: IMPRESSIONS, LINK_CLICKS, POST_ENGAGEMENT. Default IMPRESSIONS. optimization_goal: LINK_CLICKS, OFFSITE_CONVERSIONS, LEAD_GENERATION, CONVERSATIONS, REACH, etc. Default LINK_CLICKS. status: ACTIVE or PAUSED. Default PAUSED. account_id: Ad account ID. Leave blank to use .env default. daily_budget: Daily budget in smallest currency unit, e.g. '5000' for ₪50. lifetime_budget: Lifetime budget in smallest currency unit (required with dayparting). bid_amount: Manual bid cap in smallest currency unit. bid_strategy: LOWEST_COST_WITHOUT_CAP, LOWEST_COST_WITH_BID_CAP, COST_CAP. promoted_object: JSON e.g. '{"pixel_id":"123","custom_event_type":"PURCHASE"}'. start_time: ISO 8601, e.g. '2026-04-01T00:00:00+0300'. end_time: ISO 8601. Required with lifetime_budget. frequency_control_specs: JSON to cap impressions per user, e.g. '[{"event":"IMPRESSIONS","interval_days":7,"max_frequency":3}]'. attribution_spec: JSON attribution windows, e.g. '[{"event_type":"CLICK_THROUGH","window_days":7},{"event_type":"VIEW_THROUGH","window_days":1}]'. pacing_type: 'standard' or 'no_pacing' (accelerated). Default standard. destination_type: Where clicks go: WEBSITE, MESSENGER, INSTAGRAM_DIRECT, WHATSAPP, ON_AD, APP. Default WEBSITE. adset_schedule: JSON daypart windows (requires lifetime_budget), e.g. '[{"start_minute":540,"end_minute":1080,"days":[1,2,3,4,5]}]'. daily_min_spend_target: Soft spend floor in CBO campaigns (smallest unit). daily_spend_cap: Hard spend ceiling in CBO campaigns (smallest unit). advantage_audience: Set True to enable Advantage+ Audience automation (Meta AI expands beyond targeting).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L3676-L3790) · Schema: tools/list.

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
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "targeting": {
      "title": "Targeting",
      "type": "string"
    },
    "billing_event": {
      "default": "IMPRESSIONS",
      "title": "Billing Event",
      "type": "string"
    },
    "optimization_goal": {
      "default": "LINK_CLICKS",
      "title": "Optimization Goal",
      "type": "string"
    },
    "status": {
      "default": "PAUSED",
      "title": "Status",
      "type": "string"
    },
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    },
    "daily_budget": {
      "default": "",
      "title": "Daily Budget",
      "type": "string"
    },
    "lifetime_budget": {
      "default": "",
      "title": "Lifetime Budget",
      "type": "string"
    },
    "bid_amount": {
      "default": "",
      "title": "Bid Amount",
      "type": "string"
    },
    "bid_strategy": {
      "default": "",
      "title": "Bid Strategy",
      "type": "string"
    },
    "promoted_object": {
      "default": "",
      "title": "Promoted Object",
      "type": "string"
    },
    "start_time": {
      "default": "",
      "title": "Start Time",
      "type": "string"
    },
    "end_time": {
      "default": "",
      "title": "End Time",
      "type": "string"
    },
    "frequency_control_specs": {
      "default": "",
      "title": "Frequency Control Specs",
      "type": "string"
    },
    "attribution_spec": {
      "default": "",
      "title": "Attribution Spec",
      "type": "string"
    },
    "pacing_type": {
      "default": "",
      "title": "Pacing Type",
      "type": "string"
    },
    "destination_type": {
      "default": "",
      "title": "Destination Type",
      "type": "string"
    },
    "adset_schedule": {
      "default": "",
      "title": "Adset Schedule",
      "type": "string"
    },
    "daily_min_spend_target": {
      "default": "",
      "title": "Daily Min Spend Target",
      "type": "string"
    },
    "daily_spend_cap": {
      "default": "",
      "title": "Daily Spend Cap",
      "type": "string"
    },
    "advantage_audience": {
      "default": false,
      "title": "Advantage Audience",
      "type": "boolean"
    }
  },
  "required": [
    "name",
    "campaign_id",
    "targeting"
  ],
  "title": "meta_ads_create_adsetArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_create_lead_adset-9c42a77c"></a>

## meta_ads_create_lead_adset

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, meta\_ads\_create\_adset, require\_editor.

```text
[WRITE] Meta Ads tool. Create a paused Meta lead-generation ad set for instant forms. Preferred sequence for Claude/agents: 1. meta_ads_list_ad_accounts 2. meta_ads_find_page 3. meta_ads_create_lead_campaign 4. meta_ads_create_lead_adset 5. meta_ads_create_lead_form_and_paused_ad Args: name: Ad set name. campaign_id: Lead campaign ID. page_id: Facebook Page ID used in promoted_object. Run meta_ads_pages to list the Pages every connected login can reach. targeting: JSON targeting spec. account_id: Meta ad account ID. daily_budget: Daily budget in smallest currency unit. Safe default blank for CBO campaigns. lifetime_budget: Lifetime budget in smallest currency unit. status: Default PAUSED. billing_event: Default IMPRESSIONS. optimization_goal: Default LEAD_GENERATION. destination_type: Default ON_AD for instant forms. bid_strategy: Default LOWEST_COST_WITHOUT_CAP to avoid bid-cap requirements.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L3793-L3845) · Schema: tools/list.

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
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "page_id": {
      "title": "Page Id",
      "type": "string"
    },
    "targeting": {
      "title": "Targeting",
      "type": "string"
    },
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    },
    "daily_budget": {
      "default": "",
      "title": "Daily Budget",
      "type": "string"
    },
    "lifetime_budget": {
      "default": "",
      "title": "Lifetime Budget",
      "type": "string"
    },
    "status": {
      "default": "PAUSED",
      "title": "Status",
      "type": "string"
    },
    "billing_event": {
      "default": "IMPRESSIONS",
      "title": "Billing Event",
      "type": "string"
    },
    "optimization_goal": {
      "default": "LEAD_GENERATION",
      "title": "Optimization Goal",
      "type": "string"
    },
    "destination_type": {
      "default": "ON_AD",
      "title": "Destination Type",
      "type": "string"
    },
    "bid_strategy": {
      "default": "LOWEST_COST_WITHOUT_CAP",
      "title": "Bid Strategy",
      "type": "string"
    }
  },
  "required": [
    "name",
    "campaign_id",
    "page_id",
    "targeting"
  ],
  "title": "meta_ads_create_lead_adsetArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_create_whatsapp_adset-3f15e92c"></a>

## meta_ads_create_whatsapp_adset

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, whatsapp\_number.strip, meta\_ads\_create\_adset, require\_editor.

```text
[WRITE] Meta Ads tool. Create a paused click-to-WhatsApp ad set, already set the way Meta's own editor sets one up. USE THIS RATHER THAN meta_ads_create_adset for any WhatsApp campaign. The defaults here are the ones the ad set editor fills in when you pick WhatsApp as the destination, and each of them is a way the ad set goes wrong if left at the generic website values: * optimization_goal=CONVERSATIONS -- 'maximise number of conversations'. The generic default, LINK_CLICKS, buys clicks that open WhatsApp and go no further; Meta does not even offer it for this destination. * destination_type=WHATSAPP -- otherwise the ad sends people to a website that a click-to-message ad has no link for. * promoted_object={page_id} -- the Page whose linked WhatsApp number receives the messages. Required; the ad set is rejected without it. * status=PAUSED -- nothing spends until the user has seen it. The parent campaign needs objective OUTCOME_ENGAGEMENT (or OUTCOME_LEADS / OUTCOME_SALES); create it with meta_ads_create_campaign first. The Page must already have a WhatsApp number connected -- that is done in Page settings, not through this API. For anywhere smaller than a country, build `targeting` from meta_ads_find_location and meta_ads_build_geo_targeting rather than writing geo_locations by hand. Args: name: Ad set name. campaign_id: Parent campaign ID (objective OUTCOME_ENGAGEMENT). page_id: Facebook Page ID whose WhatsApp number receives the messages. Run meta_ads_pages to list the Pages every connected login can reach. Find it with meta_ads_find_page. targeting: JSON targeting spec. account_id: Meta ad account ID. Leave blank for the default. daily_budget: Daily budget in smallest currency unit, e.g. '5000' for ₪50. Leave blank in CBO campaigns. lifetime_budget: Lifetime budget in smallest currency unit. status: Default PAUSED. billing_event: Default IMPRESSIONS. optimization_goal: Default CONVERSATIONS. Override only if the user asks for something else specifically. destination_type: Default WHATSAPP. MESSENGER and INSTAGRAM_DIRECT work here too if the user wants those instead. bid_strategy: Default LOWEST_COST_WITHOUT_CAP, which avoids the bid cap that other strategies then require. whatsapp_number: Optional. A specific number in international format when the Page has more than one connected. Blank uses the Page default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L3848-L3928) · Schema: tools/list.

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
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "page_id": {
      "title": "Page Id",
      "type": "string"
    },
    "targeting": {
      "title": "Targeting",
      "type": "string"
    },
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    },
    "daily_budget": {
      "default": "",
      "title": "Daily Budget",
      "type": "string"
    },
    "lifetime_budget": {
      "default": "",
      "title": "Lifetime Budget",
      "type": "string"
    },
    "status": {
      "default": "PAUSED",
      "title": "Status",
      "type": "string"
    },
    "billing_event": {
      "default": "IMPRESSIONS",
      "title": "Billing Event",
      "type": "string"
    },
    "optimization_goal": {
      "default": "CONVERSATIONS",
      "title": "Optimization Goal",
      "type": "string"
    },
    "destination_type": {
      "default": "WHATSAPP",
      "title": "Destination Type",
      "type": "string"
    },
    "bid_strategy": {
      "default": "LOWEST_COST_WITHOUT_CAP",
      "title": "Bid Strategy",
      "type": "string"
    },
    "whatsapp_number": {
      "default": "",
      "title": "Whatsapp Number",
      "type": "string"
    }
  },
  "required": [
    "name",
    "campaign_id",
    "page_id",
    "targeting"
  ],
  "title": "meta_ads_create_whatsapp_adsetArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_create_ad_creative-d48fb38c"></a>

## meta_ads_create_ad_creative

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, require\_editor, \_post.

```text
[WRITE] Meta Ads tool. Create a new Meta Ads creative (link ad format). Args: name: Creative name (required). page_id: Facebook Page ID to post from (required). Run meta_ads_pages to list the Pages every connected login can reach. message: The ad text/body copy (required). link: The destination URL (required). headline: Ad headline. Optional. description: Link description. Optional. image_url: Image URL for the creative. Optional for link ads. account_id: Ad account ID. Leave blank to use .env default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L3931-L3969) · Schema: tools/list.

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
    "page_id": {
      "title": "Page Id",
      "type": "string"
    },
    "message": {
      "title": "Message",
      "type": "string"
    },
    "link": {
      "title": "Link",
      "type": "string"
    },
    "headline": {
      "default": "",
      "title": "Headline",
      "type": "string"
    },
    "description": {
      "default": "",
      "title": "Description",
      "type": "string"
    },
    "image_url": {
      "default": "",
      "title": "Image Url",
      "type": "string"
    },
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    }
  },
  "required": [
    "name",
    "page_id",
    "message",
    "link"
  ],
  "title": "meta_ads_create_ad_creativeArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_upload_ad_video-f1471332"></a>

## meta_ads_upload_ad_video

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_upload\_video\_url\_to\_meta, require\_editor, \_finalize\_video\_upload\_result.

```text
[WRITE] Meta Ads tool. Upload a video to Meta's ad video library from a public URL. Downloads the file locally first, then uploads it via multipart so signed, redirected, and Google Drive URLs work more reliably than Meta-side fetches. Args: file_url: Public URL of the video file. Google Drive share links are supported. title: Optional title for the video in the library. account_id: Ad account ID. Leave blank to use .env default. wait_for_ready: Wait for Meta processing before returning. Default true. timeout_seconds: Max seconds to wait when wait_for_ready is true. Default 180. poll_seconds: Poll interval while waiting for ready status. Default 5. Returns: JSON with video_id plus readiness, processing status, and thumbnail when available.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L3972-L4010) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "file_url": {
      "title": "File Url",
      "type": "string"
    },
    "title": {
      "default": "",
      "title": "Title",
      "type": "string"
    },
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    },
    "wait_for_ready": {
      "default": true,
      "title": "Wait For Ready",
      "type": "boolean"
    },
    "timeout_seconds": {
      "default": 180,
      "title": "Timeout Seconds",
      "type": "integer"
    },
    "poll_seconds": {
      "default": 5,
      "title": "Poll Seconds",
      "type": "integer"
    }
  },
  "required": [
    "file_url"
  ],
  "title": "meta_ads_upload_ad_videoArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_upload_video_file_bytes_to_meta-5fa3ef32"></a>

## meta_ads_upload_video_file_bytes_to_meta

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, (file\_bytes\_base64 or video\_base64 or '').strip, (account\_id or ad\_account\_id or '').strip, \_resolve\_meta\_account, \_resolve\_video\_media\_source, require\_editor, \_finalize\_video\_upload\_result.

```text
[WRITE][ADVANCED] Raw-bytes-only video uploader. For normal chat upload requests, prefer meta_upload_ad_video because it accepts public URLs and source values. Use this only when you explicitly have raw video bytes or a data URI and want a video_id in the Meta video library. Pass file_bytes_base64 as raw base64 or data:video/mp4;base64,...; do not pass local file paths. account_id is the primary account parameter; video_base64 and ad_account_id are legacy aliases.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L4013-L4076) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "file_bytes_base64": {
      "default": "",
      "title": "File Bytes Base64",
      "type": "string"
    },
    "filename": {
      "default": "upload.mp4",
      "title": "Filename",
      "type": "string"
    },
    "title": {
      "default": "",
      "title": "Title",
      "type": "string"
    },
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    },
    "video_base64": {
      "default": "",
      "title": "Video Base64",
      "type": "string"
    },
    "ad_account_id": {
      "default": "",
      "title": "Ad Account Id",
      "type": "string"
    },
    "wait_for_ready": {
      "default": true,
      "title": "Wait For Ready",
      "type": "boolean"
    },
    "timeout_seconds": {
      "default": 180,
      "title": "Timeout Seconds",
      "type": "integer"
    },
    "poll_seconds": {
      "default": 5,
      "title": "Poll Seconds",
      "type": "integer"
    }
  },
  "title": "meta_ads_upload_video_file_bytes_to_metaArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_create_video_ad_creative-4948d74f"></a>

## meta_ads_create_video_ad_creative

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_attach\_video\_thumbnail, \_post, require\_editor, thumbnail\_result.get.

```text
[WRITE] Meta Ads tool. Create a Meta Ads creative for a video ad. Use meta_ads_upload_ad_video first to get a video_id, then call this tool. Args: name: Creative name (required). page_id: Facebook Page ID to post from (required). Run meta_ads_pages to list the Pages every connected login can reach. video_id: Meta video ID returned by meta_ads_upload_ad_video (required). message: The ad text/body copy shown above the video (required). title: Headline shown below the video. Optional. description: Description below the headline. Optional. call_to_action_type: CTA button type, e.g. LEARN_MORE, SHOP_NOW, SIGN_UP, DOWNLOAD. Default LEARN_MORE. call_to_action_link: Destination URL for the CTA button. Required when call_to_action_type is set. lead_gen_form_id: Attach an on-Facebook lead form instead of a link. Required for a video ad in a lead-generation ad set -- Meta rejects such an ad as "missing lead form" when the CTA carries a URL instead. Get the id from meta_ads_list_leadgen_forms. Takes precedence over a link. account_id: Ad account ID. Leave blank to use .env default. thumbnail_image_hash: Optional Meta image hash to use as the video thumbnail. thumbnail_image_url: Optional public image URL to use as the video thumbnail. wait_for_video_ready: Wait for Meta to expose a usable thumbnail when no thumbnail is passed. timeout_seconds: Max seconds to wait for video readiness. poll_seconds: Poll interval while waiting for readiness.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L4079-L4161) · Schema: tools/list.

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
    "page_id": {
      "title": "Page Id",
      "type": "string"
    },
    "video_id": {
      "title": "Video Id",
      "type": "string"
    },
    "message": {
      "title": "Message",
      "type": "string"
    },
    "title": {
      "default": "",
      "title": "Title",
      "type": "string"
    },
    "description": {
      "default": "",
      "title": "Description",
      "type": "string"
    },
    "call_to_action_type": {
      "default": "LEARN_MORE",
      "title": "Call To Action Type",
      "type": "string"
    },
    "call_to_action_link": {
      "default": "",
      "title": "Call To Action Link",
      "type": "string"
    },
    "lead_gen_form_id": {
      "default": "",
      "title": "Lead Gen Form Id",
      "type": "string"
    },
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    },
    "thumbnail_image_hash": {
      "default": "",
      "title": "Thumbnail Image Hash",
      "type": "string"
    },
    "thumbnail_image_url": {
      "default": "",
      "title": "Thumbnail Image Url",
      "type": "string"
    },
    "wait_for_video_ready": {
      "default": true,
      "title": "Wait For Video Ready",
      "type": "boolean"
    },
    "timeout_seconds": {
      "default": 180,
      "title": "Timeout Seconds",
      "type": "integer"
    },
    "poll_seconds": {
      "default": 5,
      "title": "Poll Seconds",
      "type": "integer"
    }
  },
  "required": [
    "name",
    "page_id",
    "video_id",
    "message"
  ],
  "title": "meta_ads_create_video_ad_creativeArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_create_video_ad_from_media-ed962627"></a>

## meta_ads_create_video_ad_from_media

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_resolve\_video\_media\_source, \_attach\_video\_thumbnail, \_post, creative\_result.get, ad\_result.get, require\_editor.

```text
[WRITE] Meta Ads tool. Upload video media, create a video creative, and optionally create an ad. Supports URL, file bytes, or an existing Meta `video_id`. Usually leave `media_source_type` as `auto` and let the tool detect it. Args: name: Creative name (required). page_id: Facebook Page ID to post from (required). Run meta_ads_pages to list the Pages every connected login can reach. message: Ad body copy shown above the video (required). link: Destination URL for CTA (required). media_source_value: URL, base64 file bytes, or existing video_id (required). media_source_type: Usually leave as auto. Optional override: url, file_bytes, video_id. filename: Original filename when using file_bytes. upload_title: Optional title for the uploaded video asset. headline: Headline shown below the video. description: Description shown below the headline. adset_id: If provided, create an ad in this ad set after creating the creative. ad_name: Optional ad name. Defaults to `name`. status: Ad status when `adset_id` is provided. Default PAUSED. call_to_action_type: CTA button type. Default LEARN_MORE. account_id: Ad account ID. Leave blank to use .env default. thumbnail_image_hash: Optional Meta image hash to use as the video thumbnail. thumbnail_image_url: Optional public image URL to use as the video thumbnail. wait_for_video_ready: Wait for Meta to expose a usable thumbnail when no thumbnail is passed. timeout_seconds: Max seconds to wait for video readiness. poll_seconds: Poll interval while waiting for readiness.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L4164-L4292) · Schema: tools/list.

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
    "page_id": {
      "title": "Page Id",
      "type": "string"
    },
    "message": {
      "title": "Message",
      "type": "string"
    },
    "link": {
      "title": "Link",
      "type": "string"
    },
    "media_source_value": {
      "title": "Media Source Value",
      "type": "string"
    },
    "media_source_type": {
      "default": "auto",
      "title": "Media Source Type",
      "type": "string"
    },
    "filename": {
      "default": "upload.mp4",
      "title": "Filename",
      "type": "string"
    },
    "upload_title": {
      "default": "",
      "title": "Upload Title",
      "type": "string"
    },
    "headline": {
      "default": "",
      "title": "Headline",
      "type": "string"
    },
    "description": {
      "default": "",
      "title": "Description",
      "type": "string"
    },
    "adset_id": {
      "default": "",
      "title": "Adset Id",
      "type": "string"
    },
    "ad_name": {
      "default": "",
      "title": "Ad Name",
      "type": "string"
    },
    "status": {
      "default": "PAUSED",
      "title": "Status",
      "type": "string"
    },
    "call_to_action_type": {
      "default": "LEARN_MORE",
      "title": "Call To Action Type",
      "type": "string"
    },
    "lead_gen_form_id": {
      "default": "",
      "title": "Lead Gen Form Id",
      "type": "string"
    },
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    },
    "thumbnail_image_hash": {
      "default": "",
      "title": "Thumbnail Image Hash",
      "type": "string"
    },
    "thumbnail_image_url": {
      "default": "",
      "title": "Thumbnail Image Url",
      "type": "string"
    },
    "wait_for_video_ready": {
      "default": true,
      "title": "Wait For Video Ready",
      "type": "boolean"
    },
    "timeout_seconds": {
      "default": 180,
      "title": "Timeout Seconds",
      "type": "integer"
    },
    "poll_seconds": {
      "default": 5,
      "title": "Poll Seconds",
      "type": "integer"
    }
  },
  "required": [
    "name",
    "page_id",
    "message",
    "link",
    "media_source_value"
  ],
  "title": "meta_ads_create_video_ad_from_mediaArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_create_video_ad_from_source-654ebc78"></a>

## meta_ads_create_video_ad_from_source

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, meta\_ads\_create\_video\_ad\_from\_media, require\_editor.

```text
[WRITE] Meta Ads tool. Simplest video-ad tool: pass one source and the tool auto-detects how to use it. Source can be a public URL, a data URI / raw base64 video payload, or an existing Meta video_id.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L4295-L4344) · Schema: tools/list.

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
    "page_id": {
      "title": "Page Id",
      "type": "string"
    },
    "message": {
      "title": "Message",
      "type": "string"
    },
    "link": {
      "title": "Link",
      "type": "string"
    },
    "source": {
      "title": "Source",
      "type": "string"
    },
    "filename": {
      "default": "upload.mp4",
      "title": "Filename",
      "type": "string"
    },
    "upload_title": {
      "default": "",
      "title": "Upload Title",
      "type": "string"
    },
    "headline": {
      "default": "",
      "title": "Headline",
      "type": "string"
    },
    "description": {
      "default": "",
      "title": "Description",
      "type": "string"
    },
    "adset_id": {
      "default": "",
      "title": "Adset Id",
      "type": "string"
    },
    "ad_name": {
      "default": "",
      "title": "Ad Name",
      "type": "string"
    },
    "status": {
      "default": "PAUSED",
      "title": "Status",
      "type": "string"
    },
    "call_to_action_type": {
      "default": "LEARN_MORE",
      "title": "Call To Action Type",
      "type": "string"
    },
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    },
    "thumbnail_image_hash": {
      "default": "",
      "title": "Thumbnail Image Hash",
      "type": "string"
    },
    "thumbnail_image_url": {
      "default": "",
      "title": "Thumbnail Image Url",
      "type": "string"
    },
    "wait_for_video_ready": {
      "default": true,
      "title": "Wait For Video Ready",
      "type": "boolean"
    },
    "timeout_seconds": {
      "default": 180,
      "title": "Timeout Seconds",
      "type": "integer"
    },
    "poll_seconds": {
      "default": 5,
      "title": "Poll Seconds",
      "type": "integer"
    }
  },
  "required": [
    "name",
    "page_id",
    "message",
    "link",
    "source"
  ],
  "title": "meta_ads_create_video_ad_from_sourceArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_upload_ad_video-11cbf34d"></a>

## meta_upload_ad_video

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, (account\_id or ad\_account\_id or '').strip, \_resolve\_meta\_account, \_resolve\_video\_media\_source, require\_editor, \_finalize\_video\_upload\_result.

```text
[WRITE][PRIMARY][RECOMMENDED][ALIAS] First-choice video upload tool for Meta Ads. Use this when the user says upload a video, attached a video, or pasted a public video URL. If the user gives a public URL, pass that URL directly to this tool instead of refusing to fetch it yourself. Accepts source as a local file path (e.g. /path/to/ad.mp4 or C:\Users\me\ad.mp4), public URL, data URI/raw base64 video bytes, or existing video_id. account_id is the primary parameter; ad_account_id is also accepted as a legacy alias. Does not create a creative or ad.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L4347-L4382) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "source": {
      "title": "Source",
      "type": "string"
    },
    "filename": {
      "default": "upload.mp4",
      "title": "Filename",
      "type": "string"
    },
    "title": {
      "default": "",
      "title": "Title",
      "type": "string"
    },
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    },
    "ad_account_id": {
      "default": "",
      "title": "Ad Account Id",
      "type": "string"
    },
    "wait_for_ready": {
      "default": true,
      "title": "Wait For Ready",
      "type": "boolean"
    },
    "timeout_seconds": {
      "default": 180,
      "title": "Timeout Seconds",
      "type": "integer"
    },
    "poll_seconds": {
      "default": 5,
      "title": "Poll Seconds",
      "type": "integer"
    }
  },
  "required": [
    "source"
  ],
  "title": "meta_upload_ad_videoArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_test_media_upload_flow-4928f361"></a>

## meta_ads_test_media_upload_flow

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, require\_editor, \_resolve\_image\_media\_source, \_resolve\_video\_media\_source, video\_upload.get, response\['uploads'\].get('image', {}).get, response\['uploads'\].get('video', {}).get.

```text
[WRITE][RECOMMENDED] End-to-end safe media smoke test. Uploads or reuses image/video assets, creates test creatives, and can create PAUSED test ads. Use this when validating image/video upload wiring across a connected account. Sources can be public URLs, data URI/raw base64 payloads, existing image_hash/video_id values, or generated assets where supported.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L4385-L4533) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "image_source_value": {
      "default": "",
      "title": "Image Source Value",
      "type": "string"
    },
    "video_source_value": {
      "default": "",
      "title": "Video Source Value",
      "type": "string"
    },
    "image_source_type": {
      "default": "auto",
      "title": "Image Source Type",
      "type": "string"
    },
    "video_source_type": {
      "default": "auto",
      "title": "Video Source Type",
      "type": "string"
    },
    "image_filename": {
      "default": "upload.jpg",
      "title": "Image Filename",
      "type": "string"
    },
    "video_filename": {
      "default": "upload.mp4",
      "title": "Video Filename",
      "type": "string"
    },
    "page_id": {
      "default": "",
      "title": "Page Id",
      "type": "string"
    },
    "link": {
      "default": "https://example.com",
      "title": "Link",
      "type": "string"
    },
    "name_prefix": {
      "default": "TEST - Meta upload flow",
      "title": "Name Prefix",
      "type": "string"
    },
    "create_creatives": {
      "default": true,
      "title": "Create Creatives",
      "type": "boolean"
    },
    "create_ads": {
      "default": false,
      "title": "Create Ads",
      "type": "boolean"
    },
    "adset_id": {
      "default": "",
      "title": "Adset Id",
      "type": "string"
    },
    "status": {
      "default": "PAUSED",
      "title": "Status",
      "type": "string"
    },
    "wait_for_video_ready": {
      "default": true,
      "title": "Wait For Video Ready",
      "type": "boolean"
    },
    "timeout_seconds": {
      "default": 180,
      "title": "Timeout Seconds",
      "type": "integer"
    },
    "poll_seconds": {
      "default": 5,
      "title": "Poll Seconds",
      "type": "integer"
    },
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    }
  },
  "title": "meta_ads_test_media_upload_flowArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_get_video_upload_status-c92f1d6b"></a>

## meta_ads_get_video_upload_status

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_wait\_for\_meta\_video\_ready, \_get\_meta\_video\_status.

```text
[READ] Meta Ads tool. Check Meta ad-video processing status, readiness, and thumbnail. Use this after upload when you want to know whether the asset is ready for creatives without forcing ad creation.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L4536-L4549) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "video_id": {
      "title": "Video Id",
      "type": "string"
    },
    "wait_for_ready": {
      "default": false,
      "title": "Wait For Ready",
      "type": "boolean"
    },
    "timeout_seconds": {
      "default": 180,
      "title": "Timeout Seconds",
      "type": "integer"
    },
    "poll_seconds": {
      "default": 5,
      "title": "Poll Seconds",
      "type": "integer"
    }
  },
  "required": [
    "video_id"
  ],
  "title": "meta_ads_get_video_upload_statusArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_create_video_ad-78331ba0"></a>

## meta_create_video_ad

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, meta\_ads\_create\_video\_ad\_from\_source, require\_editor.

```text
[WRITE][ALIAS] Create a Meta video ad from a source asset. This is not upload-only: it uploads or reuses media, creates the creative, and can create the ad. Prefer meta_upload_ad_video when the user only wants the asset.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L4552-L4590) · Schema: tools/list.

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
    "page_id": {
      "title": "Page Id",
      "type": "string"
    },
    "message": {
      "title": "Message",
      "type": "string"
    },
    "link": {
      "title": "Link",
      "type": "string"
    },
    "source": {
      "title": "Source",
      "type": "string"
    },
    "filename": {
      "default": "upload.mp4",
      "title": "Filename",
      "type": "string"
    },
    "title": {
      "default": "",
      "title": "Title",
      "type": "string"
    },
    "description": {
      "default": "",
      "title": "Description",
      "type": "string"
    },
    "adset_id": {
      "default": "",
      "title": "Adset Id",
      "type": "string"
    },
    "ad_name": {
      "default": "",
      "title": "Ad Name",
      "type": "string"
    },
    "status": {
      "default": "PAUSED",
      "title": "Status",
      "type": "string"
    },
    "call_to_action_type": {
      "default": "LEARN_MORE",
      "title": "Call To Action Type",
      "type": "string"
    },
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    }
  },
  "required": [
    "name",
    "page_id",
    "message",
    "link",
    "source"
  ],
  "title": "meta_create_video_adArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_create_ad-a6d123f6"></a>

## meta_ads_create_ad

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, require\_editor, \_check\_creative\_adset\_compatibility, \_post.

```text
[WRITE] Meta Ads tool. Create a new Meta Ad by combining an ad set and a creative. Args: name: Ad name (required). adset_id: The ad set ID to place this ad in (required). creative_id: The creative ID to use (required). status: ACTIVE or PAUSED. Default PAUSED. account_id: Ad account ID. Leave blank to use .env default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L4593-L4619) · Schema: tools/list.

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
    "adset_id": {
      "title": "Adset Id",
      "type": "string"
    },
    "creative_id": {
      "title": "Creative Id",
      "type": "string"
    },
    "status": {
      "default": "PAUSED",
      "title": "Status",
      "type": "string"
    },
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    }
  },
  "required": [
    "name",
    "adset_id",
    "creative_id"
  ],
  "title": "meta_ads_create_adArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_create_ad-22d337a0"></a>

## meta_create_ad

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, meta\_ads\_create\_ad, require\_editor.

```text
[WRITE][ALIAS] Create a Meta ad from a source asset with auto-detection. This is a creation workflow, not an upload-only tool. Prefer the upload-only aliases when the user only wants image_hash or video_id.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L4622-L4632) · Schema: tools/list.

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
    "adset_id": {
      "title": "Adset Id",
      "type": "string"
    },
    "creative_id": {
      "title": "Creative Id",
      "type": "string"
    },
    "status": {
      "default": "PAUSED",
      "title": "Status",
      "type": "string"
    },
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    }
  },
  "required": [
    "name",
    "adset_id",
    "creative_id"
  ],
  "title": "meta_create_adArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_duplicate_campaign-c8c509a7"></a>

## meta_ads_duplicate_campaign

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_get, \_post, adsets.get, require\_editor, results\['adsets\_copied'\].append, campaign\_info.get.

```text
[WRITE] Meta Ads tool. Duplicate an existing Meta Ads campaign (copies the campaign, ad sets, and ads). For campaigns with more than 3 ad sets, Meta blocks a single synchronous copy. Set sequential=True to duplicate each ad set one-by-one; slower but works for any size. Args: campaign_id: Campaign ID to duplicate (required). new_name: Name for the duplicated campaign. Defaults to original name + ' (Copy)'. account_id: Ad account ID. Leave blank to use .env default. sequential: If True, creates a new campaign shell then duplicates each ad set individually. Use for campaigns with 4+ ad sets. Default False.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L4635-L4714) · Schema: tools/list.

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
      "default": "",
      "title": "New Name",
      "type": "string"
    },
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    },
    "sequential": {
      "default": false,
      "title": "Sequential",
      "type": "boolean"
    }
  },
  "required": [
    "campaign_id"
  ],
  "title": "meta_ads_duplicate_campaignArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_duplicate_adset-c93aded6"></a>

## meta_ads_duplicate_adset

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_post, require\_editor, \_get, adset\_info.get.

```text
[WRITE] Meta Ads tool. Duplicate an existing Meta Ads ad set (and optionally its ads). Args: adset_id: Ad set ID to duplicate (required). new_name: Name for the duplicated ad set. Defaults to original name + ' (Copy)'. campaign_id: Destination campaign ID. Leave blank to duplicate into the same campaign. deep_copy: If True, also copies the ads inside the ad set. Default True. status_override: Status for the new ad set: PAUSED, ACTIVE, or INHERITED_FROM_SOURCE. Default PAUSED.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L4717-L4764) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "adset_id": {
      "title": "Adset Id",
      "type": "string"
    },
    "new_name": {
      "default": "",
      "title": "New Name",
      "type": "string"
    },
    "campaign_id": {
      "default": "",
      "title": "Campaign Id",
      "type": "string"
    },
    "deep_copy": {
      "default": true,
      "title": "Deep Copy",
      "type": "boolean"
    },
    "status_override": {
      "default": "PAUSED",
      "title": "Status Override",
      "type": "string"
    }
  },
  "required": [
    "adset_id"
  ],
  "title": "meta_ads_duplicate_adsetArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_update_adset_targeting-df62be37"></a>

## meta_ads_update_adset_targeting

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, require\_editor, \_merge\_targeting, \_explain\_adset\_edit, isinstance, \_post, json.loads, type.

```text
[WRITE] Meta Ads tool. Update targeting, scheduling, and delivery settings for an existing ad set. All parameters are optional — only provided fields are updated, and that holds inside the targeting spec too. Meta's `targeting` field is replace-not-merge, so this reads the ad set's current targeting and lays the supplied keys over it; anything not mentioned is preserved. Supplying a top-level key replaces that key outright, so narrowing still works (passing geo_locations with fewer cities does remove the others). Args: adset_id: The ad set ID to update (required). targeting: JSON targeting spec, merged over the current one. Only the top-level keys you pass are changed. Example: '{"geo_locations":{"countries":["IL"]}}' frequency_control_specs: JSON array to cap frequency. Example: '[{"event":"IMPRESSIONS","interval_days":7,"max_frequency":3}]' attribution_spec: JSON array for attribution windows. Example: '[{"event_type":"CLICK_THROUGH","window_days":7}]' pacing_type: standard or no_pacing (for dayparting use day_parting). destination_type: WEBSITE, MESSENGER, WHATSAPP, INSTAGRAM_DIRECT, ON_AD. adset_schedule: JSON dayparting schedule (requires lifetime_budget on the adset). Example: '[{"start_minute":480,"end_minute":1200,"days":[1,2,3,4,5],"timezone_type":"USER"}]' daily_min_spend_target: Soft spend floor in cents for CBO campaigns. daily_spend_cap: Hard spend ceiling in cents for CBO campaigns. advantage_audience: True enables Advantage+ AI audience automation, False disables it. Leave unset to keep the ad set's current setting — passing False on an unrelated edit would turn it off. status: ACTIVE, PAUSED, DELETED, or ARCHIVED. name: New name for the ad set.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L4767-L4864) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "adset_id": {
      "title": "Adset Id",
      "type": "string"
    },
    "targeting": {
      "default": "",
      "title": "Targeting",
      "type": "string"
    },
    "frequency_control_specs": {
      "default": "",
      "title": "Frequency Control Specs",
      "type": "string"
    },
    "attribution_spec": {
      "default": "",
      "title": "Attribution Spec",
      "type": "string"
    },
    "pacing_type": {
      "default": "",
      "title": "Pacing Type",
      "type": "string"
    },
    "destination_type": {
      "default": "",
      "title": "Destination Type",
      "type": "string"
    },
    "adset_schedule": {
      "default": "",
      "title": "Adset Schedule",
      "type": "string"
    },
    "daily_min_spend_target": {
      "default": "",
      "title": "Daily Min Spend Target",
      "type": "string"
    },
    "daily_spend_cap": {
      "default": "",
      "title": "Daily Spend Cap",
      "type": "string"
    },
    "advantage_audience": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Advantage Audience"
    },
    "status": {
      "default": "",
      "title": "Status",
      "type": "string"
    },
    "name": {
      "default": "",
      "title": "Name",
      "type": "string"
    }
  },
  "required": [
    "adset_id"
  ],
  "title": "meta_ads_update_adset_targetingArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_create_audience-e3359615"></a>

## meta_ads_create_audience

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, require\_editor, \_post.

```text
[WRITE] Meta Ads tool. Create a new custom audience (customer list) in Meta Ads. Args: name: Audience name (required). description: Optional description. customer_file_source: Source: USER_PROVIDED_ONLY, PARTNER_PROVIDED_ONLY, or BOTH_USER_AND_PARTNER_PROVIDED. Default USER_PROVIDED_ONLY. account_id: Ad account ID. Leave blank to use .env default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L4867-L4889) · Schema: tools/list.

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
    "description": {
      "default": "",
      "title": "Description",
      "type": "string"
    },
    "customer_file_source": {
      "default": "USER_PROVIDED_ONLY",
      "title": "Customer File Source",
      "type": "string"
    },
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    }
  },
  "required": [
    "name"
  ],
  "title": "meta_ads_create_audienceArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_create_lookalike-0c6bcd21"></a>

## meta_ads_create_lookalike

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, require\_editor, c.strip, \_post, countries.split, ', '.join.

```text
[WRITE] Meta Ads tool. Create a Lookalike Audience based on an existing custom audience. Args: source_audience_id: Custom audience ID to base lookalike on (required). countries: Comma-separated country codes, e.g. 'US,CA,GB' (required). ratio: Lookalike ratio 0.01–0.20 (1% to 20% of population). Default 0.01. account_id: Ad account ID. Leave blank to use .env default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L4892-L4921) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "source_audience_id": {
      "title": "Source Audience Id",
      "type": "string"
    },
    "countries": {
      "title": "Countries",
      "type": "string"
    },
    "ratio": {
      "default": 0.01,
      "title": "Ratio",
      "type": "number"
    },
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    }
  },
  "required": [
    "source_audience_id",
    "countries"
  ],
  "title": "meta_ads_create_lookalikeArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_leadgen_forms-f0ae3aae"></a>

## meta_ads_leadgen_forms

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_get.

```text
[READ] Meta Ads tool. Get all lead generation forms for a Facebook Page. Args: page_id: Facebook Page ID to get leadgen forms from (required). Run meta_ads_pages to list the Pages every connected login can reach.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L4924-L4931) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "string"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "meta_ads_leadgen_formsArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_page_feed-c1ccee99"></a>

## meta_ads_page_feed

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_page\_tok, \_get\_with\_token.

```text
[READ] Meta Ads tool. Get the published posts feed of a Facebook Page. Args: page_id: Facebook Page ID (required). Get it from meta_ads_pages. page_access_token: Page access token. Optional -- when omitted it is looked up from page_id across every connected Meta login. Pass one explicitly to force a specific Page identity. limit: Number of posts to return. Default 25.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L4996-L5013) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "string"
    },
    "page_access_token": {
      "default": "",
      "title": "Page Access Token",
      "type": "string"
    },
    "limit": {
      "default": 25,
      "title": "Limit",
      "type": "integer"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "meta_ads_page_feedArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_page_post-ba1996ec"></a>

## meta_ads_page_post

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_page\_tok, \_get\_with\_token.

```text
[READ] Meta Ads tool. Get details of a specific Facebook Page post. Args: post_id: Post ID (required), e.g. '123456789_987654321'. page_access_token: Page access token, required -- take it from the `access_token` field of meta_ads_pages. There is no user-token fallback.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L5016-L5030) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_id": {
      "title": "Post Id",
      "type": "string"
    },
    "page_access_token": {
      "default": "",
      "title": "Page Access Token",
      "type": "string"
    }
  },
  "required": [
    "post_id"
  ],
  "title": "meta_ads_page_postArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_create_page_post-6d05db21"></a>

## meta_ads_create_page_post

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_page\_tok, require\_editor, \_post\_with\_token.

```text
[WRITE] Meta Ads tool. Create a new post on a Facebook Page (text, link, or photo). Args: page_id: Facebook Page ID (required). Run meta_ads_pages to list the Pages every connected login can reach. message: Post text/body (required unless image_url is provided). link: URL to share as a link post. Optional. image_url: Publicly accessible image URL to post as a photo. Optional. scheduled_publish_time: Unix timestamp for scheduling, e.g. '1735689600'. Only used when published=False. published: True to publish immediately, False to schedule. Default True. page_access_token: Page access token (required for posting). Get from meta_ads_pages.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L5033-L5066) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "string"
    },
    "message": {
      "default": "",
      "title": "Message",
      "type": "string"
    },
    "link": {
      "default": "",
      "title": "Link",
      "type": "string"
    },
    "image_url": {
      "default": "",
      "title": "Image Url",
      "type": "string"
    },
    "scheduled_publish_time": {
      "default": "",
      "title": "Scheduled Publish Time",
      "type": "string"
    },
    "published": {
      "default": true,
      "title": "Published",
      "type": "boolean"
    },
    "page_access_token": {
      "default": "",
      "title": "Page Access Token",
      "type": "string"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "meta_ads_create_page_postArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_update_page_post-13cc009e"></a>

## meta_ads_update_page_post

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_page\_tok, require\_editor, \_post\_with\_token.

```text
[WRITE] Meta Ads tool. Update the message/text of an existing Facebook Page post. Args: post_id: Post ID to update (required). message: New post text (required). page_access_token: Page access token, required -- take it from the `access_token` field of meta_ads_pages. There is no user-token fallback.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L5069-L5084) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_id": {
      "title": "Post Id",
      "type": "string"
    },
    "message": {
      "title": "Message",
      "type": "string"
    },
    "page_access_token": {
      "default": "",
      "title": "Page Access Token",
      "type": "string"
    }
  },
  "required": [
    "post_id",
    "message"
  ],
  "title": "meta_ads_update_page_postArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_delete_page_post-2e557a02"></a>

## meta_ads_delete_page_post

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_page\_tok, require\_editor, \_delete\_with\_token.

```text
[WRITE] Meta Ads tool. Delete a Facebook Page post. Args: post_id: Post ID to delete (required). page_access_token: Page access token, required -- take it from the `access_token` field of meta_ads_pages. There is no user-token fallback.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L5087-L5100) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_id": {
      "title": "Post Id",
      "type": "string"
    },
    "page_access_token": {
      "default": "",
      "title": "Page Access Token",
      "type": "string"
    }
  },
  "required": [
    "post_id"
  ],
  "title": "meta_ads_delete_page_postArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_page_scheduled_posts-fd417f08"></a>

## meta_ads_page_scheduled_posts

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_page\_tok, \_get\_with\_token.

```text
[READ] Meta Ads tool. Get scheduled (unpublished) posts for a Facebook Page. Args: page_id: Facebook Page ID (required). Run meta_ads_pages to list the Pages every connected login can reach. page_access_token: Page access token. Optional -- when omitted it is looked up from page_id across every connected Meta login. Pass one explicitly to force a specific Page identity. limit: Number of posts to return. Default 25.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L5103-L5120) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "string"
    },
    "page_access_token": {
      "default": "",
      "title": "Page Access Token",
      "type": "string"
    },
    "limit": {
      "default": 25,
      "title": "Limit",
      "type": "integer"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "meta_ads_page_scheduled_postsArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_bulk_create_page_post-c7d3aa59"></a>

## meta_ads_bulk_create_page_post

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_bulk\_page\_ids, require\_editor, page.get, results.append, \_post\_with\_token, sum.

```text
[WRITE] Meta Ads tool. Post the same content to several Facebook Pages at once (a client portfolio). One client's expired token or missing permission does not block the others -- each Page is attempted independently and reported separately. Args: page_ids: Comma-separated Facebook Page IDs. Leave blank to post to every connected Page. message: Post text/body (required unless image_url is provided). link: URL to share as a link post. Optional. image_url: Publicly accessible image URL to post as a photo. Optional. scheduled_publish_time: Unix timestamp for scheduling. Only used when published=False. published: True to publish immediately, False to schedule. Default True.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L5135-L5187) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_ids": {
      "default": "",
      "title": "Page Ids",
      "type": "string"
    },
    "message": {
      "default": "",
      "title": "Message",
      "type": "string"
    },
    "link": {
      "default": "",
      "title": "Link",
      "type": "string"
    },
    "image_url": {
      "default": "",
      "title": "Image Url",
      "type": "string"
    },
    "scheduled_publish_time": {
      "default": "",
      "title": "Scheduled Publish Time",
      "type": "string"
    },
    "published": {
      "default": true,
      "title": "Published",
      "type": "boolean"
    }
  },
  "title": "meta_ads_bulk_create_page_postArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_portfolio_scheduled_content-49cc3372"></a>

## meta_ads_portfolio_scheduled_content

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_bulk\_page\_ids, sum, \_get\_with\_token, page.get, by\_page.append, p.get.

```text
[READ] Meta Ads tool. See what's queued (scheduled, unpublished) across several Pages at once. Args: page_ids: Comma-separated Facebook Page IDs. Leave blank to check every connected Page. limit_per_page: Max scheduled posts to pull per Page. Default 25.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L5190-L5218) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_ids": {
      "default": "",
      "title": "Page Ids",
      "type": "string"
    },
    "limit_per_page": {
      "default": 25,
      "title": "Limit Per Page",
      "type": "integer"
    }
  },
  "title": "meta_ads_portfolio_scheduled_contentArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_post_comments-90992f2a"></a>

## meta_ads_post_comments

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_page\_tok, \_get\_with\_token.

```text
[READ] Meta Ads tool. Get comments on a Facebook Page post. Args: post_id: Post ID (required). page_access_token: Page access token, required -- take it from the `access_token` field of meta_ads_pages. There is no user-token fallback. limit: Number of comments to return. Default 50. summary: Include total comment count summary. Default True.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L5225-L5248) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_id": {
      "title": "Post Id",
      "type": "string"
    },
    "page_access_token": {
      "default": "",
      "title": "Page Access Token",
      "type": "string"
    },
    "limit": {
      "default": 50,
      "title": "Limit",
      "type": "integer"
    },
    "summary": {
      "default": true,
      "title": "Summary",
      "type": "boolean"
    }
  },
  "required": [
    "post_id"
  ],
  "title": "meta_ads_post_commentsArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_reply_to_comment-1f7c6f84"></a>

## meta_ads_reply_to_comment

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_page\_tok, require\_editor, \_post\_with\_token.

```text
[WRITE] Meta Ads tool. Reply to a comment on a Facebook Page post. Args: comment_id: Comment ID to reply to (required). message: Reply text (required). page_access_token: Page access token (required for replying as the page).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L5251-L5266) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "comment_id": {
      "title": "Comment Id",
      "type": "string"
    },
    "message": {
      "title": "Message",
      "type": "string"
    },
    "page_access_token": {
      "default": "",
      "title": "Page Access Token",
      "type": "string"
    }
  },
  "required": [
    "comment_id",
    "message"
  ],
  "title": "meta_ads_reply_to_commentArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_hide_comment-e2e99c38"></a>

## meta_ads_hide_comment

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_page\_tok, require\_editor, \_post\_with\_token.

```text
[WRITE] Meta Ads tool. Hide or unhide a comment on a Facebook Page post. Args: comment_id: Comment ID (required). is_hidden: True to hide, False to unhide. Default True. page_access_token: Page access token (required).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L5269-L5284) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "comment_id": {
      "title": "Comment Id",
      "type": "string"
    },
    "is_hidden": {
      "default": true,
      "title": "Is Hidden",
      "type": "boolean"
    },
    "page_access_token": {
      "default": "",
      "title": "Page Access Token",
      "type": "string"
    }
  },
  "required": [
    "comment_id"
  ],
  "title": "meta_ads_hide_commentArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_delete_comment-37524456"></a>

## meta_ads_delete_comment

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_page\_tok, require\_editor, \_delete\_with\_token.

```text
[WRITE] Meta Ads tool. Delete a comment on a Facebook Page post. Args: comment_id: Comment ID to delete (required). page_access_token: Page access token (required).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L5287-L5300) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "comment_id": {
      "title": "Comment Id",
      "type": "string"
    },
    "page_access_token": {
      "default": "",
      "title": "Page Access Token",
      "type": "string"
    }
  },
  "required": [
    "comment_id"
  ],
  "title": "meta_ads_delete_commentArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_like_object-a305874d"></a>

## meta_ads_like_object

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_page\_tok, require\_editor, \_post\_with\_token, \_delete\_with\_token.

```text
[READ] Meta Ads tool. Like or unlike a Facebook post or comment as the Page. Args: object_id: Post ID or comment ID to like/unlike (required). page_access_token: Page access token (required to act as the page). unlike: True to remove the like, False to add it. Default False.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L5303-L5320) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "object_id": {
      "title": "Object Id",
      "type": "string"
    },
    "page_access_token": {
      "default": "",
      "title": "Page Access Token",
      "type": "string"
    },
    "unlike": {
      "default": false,
      "title": "Unlike",
      "type": "boolean"
    }
  },
  "required": [
    "object_id"
  ],
  "title": "meta_ads_like_objectArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_page_conversations-5648dd8a"></a>

## meta_ads_page_conversations

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_page\_tok, \_get\_with\_token.

```text
[READ] Meta Ads tool. Get the inbox conversations (messages) for a Facebook Page. Requires pages_messaging permission on the page token. Args: page_id: Facebook Page ID (required). Run meta_ads_pages to list the Pages every connected login can reach. page_access_token: Page access token with pages_messaging permission (required). limit: Number of conversations to return. Default 25.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L5327-L5346) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "string"
    },
    "page_access_token": {
      "default": "",
      "title": "Page Access Token",
      "type": "string"
    },
    "limit": {
      "default": 25,
      "title": "Limit",
      "type": "integer"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "meta_ads_page_conversationsArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_conversation_messages-bb88bbc4"></a>

## meta_ads_conversation_messages

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_page\_tok, \_get\_with\_token.

```text
[READ] Meta Ads tool. Get messages in a Facebook Page conversation/thread. Args: conversation_id: Conversation ID from meta_ads_page_conversations (required). page_access_token: Page access token (required). limit: Number of messages to return. Default 25.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L5349-L5366) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "conversation_id": {
      "title": "Conversation Id",
      "type": "string"
    },
    "page_access_token": {
      "default": "",
      "title": "Page Access Token",
      "type": "string"
    },
    "limit": {
      "default": 25,
      "title": "Limit",
      "type": "integer"
    }
  },
  "required": [
    "conversation_id"
  ],
  "title": "meta_ads_conversation_messagesArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_reply_to_page_message-b0606eda"></a>

## meta_ads_reply_to_page_message

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_page\_tok, require\_editor, \_post\_with\_token.

```text
[WRITE] Meta Ads tool. Send a reply message from a Facebook Page to a user. Requires pages_messaging permission on the page token. Args: recipient_id: The PSID (Page-Scoped User ID) of the recipient (required). message: Message text to send (required). page_id: Facebook Page ID sending the message (required). Run meta_ads_pages to list the Pages every connected login can reach. page_access_token: Page access token with pages_messaging permission (required). messaging_type: RESPONSE (reply to user message), UPDATE, or MESSAGE_TAG. Default RESPONSE.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L5369-L5394) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "recipient_id": {
      "title": "Recipient Id",
      "type": "string"
    },
    "message": {
      "title": "Message",
      "type": "string"
    },
    "page_id": {
      "title": "Page Id",
      "type": "string"
    },
    "page_access_token": {
      "default": "",
      "title": "Page Access Token",
      "type": "string"
    },
    "messaging_type": {
      "default": "RESPONSE",
      "title": "Messaging Type",
      "type": "string"
    }
  },
  "required": [
    "recipient_id",
    "message",
    "page_id"
  ],
  "title": "meta_ads_reply_to_page_messageArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_page_photos-6b819afc"></a>

## meta_ads_page_photos

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_page\_tok, \_get\_with\_token.

```text
[READ] Meta Ads tool. Get photos published on a Facebook Page. Args: page_id: Facebook Page ID (required). Run meta_ads_pages to list the Pages every connected login can reach. page_access_token: Page access token. Optional -- when omitted it is looked up from page_id across every connected Meta login. Pass one explicitly to force a specific Page identity. limit: Number of photos to return. Default 25. photo_type: 'uploaded' (posted by page), 'tagged' (page is tagged), or 'profile'. Default uploaded.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L5401-L5421) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "string"
    },
    "page_access_token": {
      "default": "",
      "title": "Page Access Token",
      "type": "string"
    },
    "limit": {
      "default": 25,
      "title": "Limit",
      "type": "integer"
    },
    "photo_type": {
      "default": "uploaded",
      "title": "Photo Type",
      "type": "string"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "meta_ads_page_photosArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_page_videos-46849ed1"></a>

## meta_ads_page_videos

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_page\_tok, \_get\_with\_token.

```text
[READ] Meta Ads tool. Get videos published on a Facebook Page. Args: page_id: Facebook Page ID (required). Run meta_ads_pages to list the Pages every connected login can reach. page_access_token: Page access token. Optional -- when omitted it is looked up from page_id across every connected Meta login. Pass one explicitly to force a specific Page identity. limit: Number of videos to return. Default 25.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L5424-L5441) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "string"
    },
    "page_access_token": {
      "default": "",
      "title": "Page Access Token",
      "type": "string"
    },
    "limit": {
      "default": 25,
      "title": "Limit",
      "type": "integer"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "meta_ads_page_videosArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_page_albums-28c7642a"></a>

## meta_ads_page_albums

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_page\_tok, \_get\_with\_token.

```text
[READ] Meta Ads tool. Get photo albums on a Facebook Page. Args: page_id: Facebook Page ID (required). Run meta_ads_pages to list the Pages every connected login can reach. page_access_token: Page access token. Optional -- when omitted it is looked up from page_id across every connected Meta login. Pass one explicitly to force a specific Page identity. limit: Number of albums to return. Default 25.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L5444-L5461) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "string"
    },
    "page_access_token": {
      "default": "",
      "title": "Page Access Token",
      "type": "string"
    },
    "limit": {
      "default": 25,
      "title": "Limit",
      "type": "integer"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "meta_ads_page_albumsArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_page_events-876022e3"></a>

## meta_ads_page_events

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_page\_tok, \_get\_with\_token.

```text
[READ] Meta Ads tool. Get events for a Facebook Page. Args: page_id: Facebook Page ID (required). Run meta_ads_pages to list the Pages every connected login can reach. page_access_token: Page access token. Optional -- when omitted it is looked up from page_id across every connected Meta login. Pass one explicitly to force a specific Page identity. limit: Number of events to return. Default 25. time_filter: 'upcoming', 'past', or 'canceled'. Default upcoming.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L5468-L5492) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "string"
    },
    "page_access_token": {
      "default": "",
      "title": "Page Access Token",
      "type": "string"
    },
    "limit": {
      "default": 25,
      "title": "Limit",
      "type": "integer"
    },
    "time_filter": {
      "default": "upcoming",
      "title": "Time Filter",
      "type": "string"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "meta_ads_page_eventsArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_create_page_event-3db94844"></a>

## meta_ads_create_page_event

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_page\_tok, \_post\_with\_token.

```text
[WRITE] Meta Ads tool. Create a new event on a Facebook Page. Args: page_id: Facebook Page ID (required). Run meta_ads_pages to list the Pages every connected login can reach. name: Event name (required). start_time: Event start time in ISO 8601 format, e.g. '2025-06-15T18:00:00+0300' (required). end_time: Event end time in ISO 8601 format. Optional. description: Event description. Optional. location: Physical location/venue name. Optional. ticket_uri: URL to purchase tickets. Optional. is_online: True if the event is online only. Default False. page_access_token: Page access token (required).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L5495-L5535) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "string"
    },
    "name": {
      "title": "Name",
      "type": "string"
    },
    "start_time": {
      "title": "Start Time",
      "type": "string"
    },
    "end_time": {
      "default": "",
      "title": "End Time",
      "type": "string"
    },
    "description": {
      "default": "",
      "title": "Description",
      "type": "string"
    },
    "location": {
      "default": "",
      "title": "Location",
      "type": "string"
    },
    "ticket_uri": {
      "default": "",
      "title": "Ticket Uri",
      "type": "string"
    },
    "is_online": {
      "default": false,
      "title": "Is Online",
      "type": "boolean"
    },
    "page_access_token": {
      "default": "",
      "title": "Page Access Token",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "name",
    "start_time"
  ],
  "title": "meta_ads_create_page_eventArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_page_reviews-4c6ca7c1"></a>

## meta_ads_page_reviews

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_page\_tok, \_get\_with\_token.

```text
[READ] Meta Ads tool. Get ratings and reviews for a Facebook Page. Requires pages_read_user_content permission. Args: page_id: Facebook Page ID (required). Run meta_ads_pages to list the Pages every connected login can reach. page_access_token: Page access token. Optional -- when omitted it is looked up from page_id across every connected Meta login. Pass one explicitly to force a specific Page identity. limit: Number of reviews to return. Default 25.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L5542-L5561) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "string"
    },
    "page_access_token": {
      "default": "",
      "title": "Page Access Token",
      "type": "string"
    },
    "limit": {
      "default": 25,
      "title": "Limit",
      "type": "integer"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "meta_ads_page_reviewsArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_page_info-09ab4020"></a>

## meta_ads_page_info

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_page\_tok, \_get\_with\_token.

```text
[READ] Meta Ads tool. Get detailed information about a Facebook Page (name, about, category, contact info, etc.). Args: page_id: Facebook Page ID (required). Run meta_ads_pages to list the Pages every connected login can reach. page_access_token: Page access token. Optional -- when omitted it is looked up from page_id across every connected Meta login. Pass one explicitly to force a specific Page identity.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L5564-L5578) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "string"
    },
    "page_access_token": {
      "default": "",
      "title": "Page Access Token",
      "type": "string"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "meta_ads_page_infoArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_update_page_info-53955b81"></a>

## meta_ads_update_page_info

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_page\_tok, \_post\_with\_token, e.strip, emails.split.

```text
[WRITE] Meta Ads tool. Update basic information on a Facebook Page (about, description, website, phone, hours). Requires pages_manage_metadata permission. Args: page_id: Facebook Page ID (required). Run meta_ads_pages to list the Pages every connected login can reach. page_access_token: Page access token with pages_manage_metadata permission (required). about: Short description / about text. Optional. description: Long description. Optional. website: Page website URL. Optional. phone: Contact phone number. Optional. hours: JSON string of business hours, e.g. '{"mon_1_open":"09:00","mon_1_close":"18:00"}'. Optional. emails: Comma-separated list of contact emails. Optional.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L5581-L5622) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "string"
    },
    "page_access_token": {
      "title": "Page Access Token",
      "type": "string"
    },
    "about": {
      "default": "",
      "title": "About",
      "type": "string"
    },
    "description": {
      "default": "",
      "title": "Description",
      "type": "string"
    },
    "website": {
      "default": "",
      "title": "Website",
      "type": "string"
    },
    "phone": {
      "default": "",
      "title": "Phone",
      "type": "string"
    },
    "hours": {
      "default": "",
      "title": "Hours",
      "type": "string"
    },
    "emails": {
      "default": "",
      "title": "Emails",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "page_access_token"
  ],
  "title": "meta_ads_update_page_infoArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_page_mentions-f1129394"></a>

## meta_ads_page_mentions

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_page\_tok, \_get\_with\_token.

```text
[READ] Meta Ads tool. Get posts and comments where the Facebook Page is mentioned/tagged. Requires pages_read_user_content permission. Args: page_id: Facebook Page ID (required). Run meta_ads_pages to list the Pages every connected login can reach. page_access_token: Page access token. Optional -- when omitted it is looked up from page_id across every connected Meta login. Pass one explicitly to force a specific Page identity. limit: Number of mentions to return. Default 25.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L5625-L5644) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "string"
    },
    "page_access_token": {
      "default": "",
      "title": "Page Access Token",
      "type": "string"
    },
    "limit": {
      "default": 25,
      "title": "Limit",
      "type": "integer"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "meta_ads_page_mentionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_page_post_reactions-abce35fa"></a>

## meta_ads_page_post_reactions

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_page\_tok, \_get\_with\_token.

```text
[READ] Meta Ads tool. Get reactions (likes, loves, hahas, wows, sads, angrys) on a Facebook Page post. Args: post_id: Post ID (required). reaction_type: TOTAL, LIKE, LOVE, HAHA, WOW, SAD, ANGRY, or CARE. Default TOTAL (all reactions). page_access_token: Page access token, required -- take it from the `access_token` field of meta_ads_pages. There is no user-token fallback.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L5647-L5667) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_id": {
      "title": "Post Id",
      "type": "string"
    },
    "reaction_type": {
      "default": "TOTAL",
      "title": "Reaction Type",
      "type": "string"
    },
    "page_access_token": {
      "default": "",
      "title": "Page Access Token",
      "type": "string"
    }
  },
  "required": [
    "post_id"
  ],
  "title": "meta_ads_page_post_reactionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_page_roles-2a0a77ae"></a>

## meta_ads_page_roles

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_page\_tok, \_get\_with\_token.

```text
[READ] Meta Ads tool. Get all people and their roles on a Facebook Page (admins, editors, moderators, advertisers, analysts). Requires Page admin access. Args: page_id: Facebook Page ID (required). Run meta_ads_pages to list the Pages every connected login can reach. page_access_token: Page access token with admin rights (required).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L5674-L5693) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "string"
    },
    "page_access_token": {
      "default": "",
      "title": "Page Access Token",
      "type": "string"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "meta_ads_page_rolesArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_add_page_role-dcd9e0fc"></a>

## meta_ads_add_page_role

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_page\_tok, require\_editor, \_post\_with\_token.

```text
[WRITE] Meta Ads tool. Add a person to a Facebook Page with a specific role. Requires Page admin access. The user must have liked the page or be connectable. Args: page_id: Facebook Page ID (required). Run meta_ads_pages to list the Pages every connected login can reach. user: Facebook user ID or username of the person to add (required). role: Role to assign: ADMINISTRATOR, EDITOR, MODERATOR, ADVERTISER, or ANALYST (required). page_access_token: Page access token with admin rights (required).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L5696-L5718) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "string"
    },
    "user": {
      "title": "User",
      "type": "string"
    },
    "role": {
      "title": "Role",
      "type": "string"
    },
    "page_access_token": {
      "title": "Page Access Token",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "user",
    "role",
    "page_access_token"
  ],
  "title": "meta_ads_add_page_roleArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_remove_page_role-68773bbb"></a>

## meta_ads_remove_page_role

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_page\_tok, require\_editor, \_post\_with\_token.

```text
[WRITE] Meta Ads tool. Remove a person from a Facebook Page role. Requires Page admin access. Args: page_id: Facebook Page ID (required). Run meta_ads_pages to list the Pages every connected login can reach. user: Facebook user ID of the person to remove (required). page_access_token: Page access token with admin rights (required).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L5721-L5741) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "string"
    },
    "user": {
      "title": "User",
      "type": "string"
    },
    "page_access_token": {
      "title": "Page Access Token",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "user",
    "page_access_token"
  ],
  "title": "meta_ads_remove_page_roleArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_page_blocked_users-3993bfcc"></a>

## meta_ads_page_blocked_users

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_page\_tok, \_get\_with\_token.

```text
[READ] Meta Ads tool. Get users who are blocked from the Facebook Page. Args: page_id: Facebook Page ID (required). Run meta_ads_pages to list the Pages every connected login can reach. page_access_token: Page access token (required). limit: Number of blocked users to return. Default 25.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L5744-L5761) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "string"
    },
    "page_access_token": {
      "default": "",
      "title": "Page Access Token",
      "type": "string"
    },
    "limit": {
      "default": 25,
      "title": "Limit",
      "type": "integer"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "meta_ads_page_blocked_usersArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_block_page_user-f01dcc09"></a>

## meta_ads_block_page_user

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_page\_tok, require\_editor, \_post\_with\_token.

```text
[WRITE] Meta Ads tool. Block a user from interacting with a Facebook Page. Args: page_id: Facebook Page ID (required). Run meta_ads_pages to list the Pages every connected login can reach. user_id: Facebook user ID to block (required). page_access_token: Page access token with moderation rights (required).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L5764-L5779) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "string"
    },
    "user_id": {
      "title": "User Id",
      "type": "string"
    },
    "page_access_token": {
      "title": "Page Access Token",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "user_id",
    "page_access_token"
  ],
  "title": "meta_ads_block_page_userArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_unblock_page_user-9359d2c8"></a>

## meta_ads_unblock_page_user

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_page\_tok, require\_editor, \_delete\_with\_token.

```text
[WRITE] Meta Ads tool. Unblock a user so they can interact with a Facebook Page again. Args: page_id: Facebook Page ID (required). Run meta_ads_pages to list the Pages every connected login can reach. user_id: Facebook user ID to unblock (required). page_access_token: Page access token with moderation rights (required).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L5782-L5797) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "string"
    },
    "user_id": {
      "title": "User Id",
      "type": "string"
    },
    "page_access_token": {
      "title": "Page Access Token",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "user_id",
    "page_access_token"
  ],
  "title": "meta_ads_unblock_page_userArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_instagram_account-c8469ea7"></a>

## meta_ads_instagram_account

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_page\_tok, \_get\_with\_token.

```text
[READ] Meta Ads tool. Get the Instagram Business/Creator account linked to a Facebook Page. Returns the Instagram account ID needed for posting and insights. Args: page_id: Facebook Page ID linked to the Instagram account (required). Run meta_ads_pages to list the Pages every connected login can reach. page_access_token: Page access token. Optional -- when omitted it is looked up from page_id across every connected Meta login. Pass one explicitly to force a specific Page identity.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L5804-L5820) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "string"
    },
    "page_access_token": {
      "default": "",
      "title": "Page Access Token",
      "type": "string"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "meta_ads_instagram_accountArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_instagram_media-d3c326f9"></a>

## meta_ads_instagram_media

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_page\_tok, \_get\_with\_token.

```text
[READ] Meta Ads tool. Get media (posts) from an Instagram Business account linked to a Facebook Page. Args: instagram_account_id: Instagram Business Account ID (get it from meta_ads_instagram_account) (required). page_access_token: Page access token, required -- take it from the `access_token` field of meta_ads_pages. There is no user-token fallback. limit: Number of media items to return. Default 25.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L5823-L5840) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "instagram_account_id": {
      "title": "Instagram Account Id",
      "type": "string"
    },
    "page_access_token": {
      "default": "",
      "title": "Page Access Token",
      "type": "string"
    },
    "limit": {
      "default": 25,
      "title": "Limit",
      "type": "integer"
    }
  },
  "required": [
    "instagram_account_id"
  ],
  "title": "meta_ads_instagram_mediaArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_create_instagram_post-b601af0a"></a>

## meta_ads_create_instagram_post

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_page\_tok, container.get, \_post\_with\_token, require\_editor, c.strip, children.split.

```text
[WRITE] Meta Ads tool. Create and publish a post on Instagram via the Facebook Page (Instagram Graph API). This is a 2-step process: first creates a container, then publishes it. For carousel posts, first create individual item containers, then pass their IDs in 'children'. Args: instagram_account_id: Instagram Business Account ID (required). image_url: Public URL of the image (JPEG/PNG) or video to post. For carousels, leave blank. caption: Post caption text. Optional. page_access_token: Page access token (required for posting). is_carousel: True to create a carousel post. Pass children IDs in 'children'. Default False. children: Comma-separated container IDs for carousel items. Only used when is_carousel=True.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L5843-L5892) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "instagram_account_id": {
      "title": "Instagram Account Id",
      "type": "string"
    },
    "image_url": {
      "title": "Image Url",
      "type": "string"
    },
    "caption": {
      "default": "",
      "title": "Caption",
      "type": "string"
    },
    "page_access_token": {
      "default": "",
      "title": "Page Access Token",
      "type": "string"
    },
    "is_carousel": {
      "default": false,
      "title": "Is Carousel",
      "type": "boolean"
    },
    "children": {
      "default": "",
      "title": "Children",
      "type": "string"
    }
  },
  "required": [
    "instagram_account_id",
    "image_url"
  ],
  "title": "meta_ads_create_instagram_postArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_bulk_create_instagram_post-865e9d01"></a>

## meta_ads_bulk_create_instagram_post

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_bulk\_page\_ids, require\_editor, \_get\_with\_token, \_post\_with\_token, page.get, results.append, isinstance.

```text
[WRITE] Meta Ads tool. Post the same image to several clients' Instagram accounts at once. Takes Facebook Page IDs (not Instagram account IDs) because that's how a portfolio is naturally organized -- the linked Instagram Business account for each Page is resolved automatically. A Page with no linked Instagram account is reported, not treated as a failure of the whole batch; one client's expired token does not block the others. Args: page_ids: Comma-separated Facebook Page IDs. Leave blank to post to every connected Page that has a linked Instagram account. image_url: Publicly accessible image URL to post. Required. caption: Post caption text. Optional.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L5895-L5950) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_ids": {
      "default": "",
      "title": "Page Ids",
      "type": "string"
    },
    "image_url": {
      "default": "",
      "title": "Image Url",
      "type": "string"
    },
    "caption": {
      "default": "",
      "title": "Caption",
      "type": "string"
    }
  },
  "title": "meta_ads_bulk_create_instagram_postArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_instagram_insights-a1891d7c"></a>

## meta_ads_instagram_insights

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_page\_tok, \_get\_with\_token, \_dt.datetime.fromisoformat(sd).timestamp, \_dt.datetime.fromisoformat(ed).timestamp, m.strip, rewritten.append, isinstance.

```text
[READ] Meta Ads tool. Get insights/analytics for an Instagram Business account linked to a Facebook Page. Args: instagram_account_id: Instagram Business Account ID (required). metric: Comma-separated metrics: views, reach, follower_count, profile_views, email_contacts, phone_call_clicks, website_clicks. Default views,reach,follower_count,profile_views. Meta removed `impressions` for Instagram on 2025-04-21 and replaced it with `views`; passing it is rewritten to `views` rather than failing. period: 'day', 'week', 'month', or 'lifetime'. Default day. start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. page_access_token: Page access token, required -- take it from the `access_token` field of meta_ads_pages. There is no user-token fallback.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L5953-L6008) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "instagram_account_id": {
      "title": "Instagram Account Id",
      "type": "string"
    },
    "metric": {
      "default": "views,reach,follower_count,profile_views",
      "title": "Metric",
      "type": "string"
    },
    "period": {
      "default": "day",
      "title": "Period",
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
    "page_access_token": {
      "default": "",
      "title": "Page Access Token",
      "type": "string"
    }
  },
  "required": [
    "instagram_account_id"
  ],
  "title": "meta_ads_instagram_insightsArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_publish_page_post_to_instagram-246036c4"></a>

## meta_ads_publish_page_post_to_instagram

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_page\_tok, require\_editor, \_post\_with\_token.

```text
[WRITE] Meta Ads tool. Cross-post an existing Facebook Page post to the linked Instagram account. Note: The post must contain an image or video. Text-only posts cannot be cross-posted. Args: page_id: Facebook Page ID (required). Run meta_ads_pages to list the Pages every connected login can reach. post_id: Facebook Page post ID to cross-post (required). page_access_token: Page access token (required).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L6011-L6030) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "string"
    },
    "post_id": {
      "title": "Post Id",
      "type": "string"
    },
    "page_access_token": {
      "title": "Page Access Token",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "post_id",
    "page_access_token"
  ],
  "title": "meta_ads_publish_page_post_to_instagramArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_set_page_publish_status-c78cdd10"></a>

## meta_ads_set_page_publish_status

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_page\_tok, require\_editor, \_post\_with\_token.

```text
[WRITE] Meta Ads tool. Publish or unpublish a Facebook Page (make it visible or hidden to the public). Requires Page admin access. Args: page_id: Facebook Page ID (required). Run meta_ads_pages to list the Pages every connected login can reach. is_published: True to publish/make visible, False to unpublish/hide. (required). page_access_token: Page access token with admin rights (required).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L6037-L6056) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "string"
    },
    "is_published": {
      "title": "Is Published",
      "type": "boolean"
    },
    "page_access_token": {
      "title": "Page Access Token",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "is_published",
    "page_access_token"
  ],
  "title": "meta_ads_set_page_publish_statusArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_page_insights_extended-a6033bf1"></a>

## meta_ads_page_insights_extended

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_page\_tok, \_dt.datetime.fromisoformat(sd).timestamp, \_dt.datetime.fromisoformat(ed).timestamp, \_get\_with\_token, date.today, timedelta, \_dt.datetime.fromisoformat.

```text
[READ] Meta Ads tool. Get comprehensive Facebook Page insights including fans, views, reactions, and engagement. Args: page_id: Facebook Page ID (required). Run meta_ads_pages to list the Pages every connected login can reach. metrics: Comma-separated metric names. Default includes impressions, reach, engagement, fans, views. period: 'day', 'week', 'month', or 'lifetime'. Default day. start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. page_access_token: Page access token. Optional -- when omitted it is looked up from page_id across every connected Meta login. Pass one explicitly to force a specific Page identity.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L6059-L6089) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "string"
    },
    "metrics": {
      "default": "page_impressions,page_reach,page_engaged_users,page_fan_adds,page_fan_removes,page_views_total,page_post_engagements,page_actions_post_reactions_total",
      "title": "Metrics",
      "type": "string"
    },
    "period": {
      "default": "day",
      "title": "Period",
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
    "page_access_token": {
      "default": "",
      "title": "Page Access Token",
      "type": "string"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "meta_ads_page_insights_extendedArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_google_drive_list_videos-e384241e"></a>

## meta_google_drive_list_videos

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/meta\_ads.py): calls mcp.tool, \_gdrive\_service, ' or '.join, service.files().list(q=query, fields=fields, pageSize=50, supportsAllDrives=True, includeItemsFromAllDrives=True).execute, \_extract\_folder\_id, service.files().list, service.files.

```text
[READ] Tool tool. List all video files inside a Google Drive folder. Args: folder_url: Full Google Drive folder URL (https://drive.google.com/drive/folders/FOLDER_ID) or a bare folder ID. Leave blank to search across the entire Drive. Returns: JSON array of video files, each with: id, name, mimeType, size (bytes), modifiedTime, webViewLink. Pass the 'id' or 'webViewLink' to meta_google_drive_get_video_info or meta_ads_upload_ad_video.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L6153-L6192) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "folder_url": {
      "default": "",
      "title": "Folder Url",
      "type": "string"
    }
  },
  "title": "meta_google_drive_list_videosArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_google_drive_get_video_info-6ae15f35"></a>

## meta_google_drive_get_video_info

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_gdrive\_service, \_extract\_file\_id, service.files().get(fileId=file\_id, fields='id,name,mimeType,size,description,createdTime,modifiedTime,thumbnailLink,webViewLink', supportsAllDrives=True).execute, service.files().get, service.files.

```text
[READ] Tool tool. Get detailed metadata for a Google Drive video file. Use this to inspect a video before uploading it to Meta — you can see its name, size, MIME type, description, and thumbnail. Args: file_url: Full Google Drive file URL (https://drive.google.com/file/d/FILE_ID/view) or a bare file ID. Returns: JSON with: id, name, mimeType, size, description, createdTime, modifiedTime, thumbnailLink, webViewLink.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L6195-L6222) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "file_url": {
      "title": "File Url",
      "type": "string"
    }
  },
  "required": [
    "file_url"
  ],
  "title": "meta_google_drive_get_video_infoArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_google_drive_upload_video_to_meta-01100b6a"></a>

## meta_google_drive_upload_video_to_meta

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_gdrive\_service, \_extract\_file\_id, service.files().get(fileId=file\_id, fields='id,name,mimeType,size', supportsAllDrives=True).execute, meta.get, service.files().get\_media, tempfile.NamedTemporaryFile, \_resolve\_meta\_account.

```text
[WRITE] Tool tool. Full one-shot flow: download a video from Google Drive and upload it to the Meta Ads video library. Combines meta_google_drive_get_video_info + meta_ads_upload_ad_video into a single call. Handles large files and the Drive virus-scan warning page automatically. Args: file_url: Full Google Drive file URL or bare file ID. title: Optional title for the video in Meta. Defaults to the Drive filename. account_id: Ad account ID. Leave blank to use .env default. Returns: JSON with the Meta video ID, e.g. {"id": "12345678"}.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L6225-L6287) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "file_url": {
      "title": "File Url",
      "type": "string"
    },
    "title": {
      "default": "",
      "title": "Title",
      "type": "string"
    },
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    }
  },
  "required": [
    "file_url"
  ],
  "title": "meta_google_drive_upload_video_to_metaArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_google_drive_list_files-3e238fae"></a>

## meta_google_drive_list_files

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/meta\_ads.py): calls mcp.tool, \_gdrive\_service, service.files().list(\*\*kwargs).execute, conditions.append, \_extract\_folder\_id, ' and '.join, min, max.

```text
[READ] Tool tool. List ANY files in a Google Drive folder — not just videos. Args: folder_url: Full Drive folder URL (https://drive.google.com/drive/folders/FOLDER_ID) or a bare folder ID. Leave blank to search all of Drive. mime_type_filter: Optional MIME type to filter by, e.g. "video/mp4", "image/jpeg", "application/pdf", "application/vnd.google-apps.document". Leave blank to list all file types. page_size: Max number of files to return (1–1000, default 50). include_trashed: Include files in the trash. Default False. Returns: JSON with count and an array of files, each with: id, name, mimeType, size (bytes), modifiedTime, createdTime, webViewLink, webContentLink.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L6290-L6344) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "mime_type_filter": {
      "default": "",
      "title": "Mime Type Filter",
      "type": "string"
    },
    "page_size": {
      "default": 50,
      "title": "Page Size",
      "type": "integer"
    },
    "include_trashed": {
      "default": false,
      "title": "Include Trashed",
      "type": "boolean"
    }
  },
  "title": "meta_google_drive_list_filesArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_google_drive_download_file-ef8d2fda"></a>

## meta_google_drive_download_file

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_gdrive\_service, \_extract\_file\_id, service.files().get(fileId=file\_id, fields='id,name,mimeType,size', supportsAllDrives=True).execute, meta.get, os.makedirs, \_io.BytesIO, MediaIoBaseDownload.

```text
[READ] Tool tool. Download ANY file from Google Drive to local disk. Works for all Drive-hosted file types: MP4 videos, PDFs, images, ZIPs, Office docs, etc. Google Workspace formats (Docs, Sheets, Slides) are automatically exported to their most portable equivalent (DOCX, XLSX, PPTX). Args: file_url: Full Google Drive file URL (https://drive.google.com/file/d/FILE_ID/view) or a bare file ID. destination_dir: Local directory to save the file. Defaults to the system temp directory. Returns: JSON with: - local_path: Absolute path to the downloaded file. - name: Original Drive filename. - mimeType: MIME type of the downloaded file. - size_bytes: File size on disk.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L6347-L6433) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "file_url": {
      "title": "File Url",
      "type": "string"
    },
    "destination_dir": {
      "default": "",
      "title": "Destination Dir",
      "type": "string"
    }
  },
  "required": [
    "file_url"
  ],
  "title": "meta_google_drive_download_fileArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_google_drive_watch_folder-4b7003c2"></a>

## meta_google_drive_watch_folder

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_gdrive\_service, \_extract\_folder\_id, date.today, \_dt.datetime.now, since\_utc.strftime, ' and '.join, service.files().list(q=query, fields=fields, pageSize=min(max(1, page\_size), 1000), orderBy='modifiedTime desc', supportsAllDrives=True, includeItemsFromAllDrives=True).execute.

```text
[READ] Tool tool. Poll a Google Drive folder for files created or modified recently. Because Drive push-notification webhooks require a public HTTPS server, this tool uses polling instead: it lists all files in the folder whose modifiedTime is newer than (now − since_minutes) and returns them. Call this tool on a schedule (e.g. every minute) to detect new uploads. Args: folder_url: Full Drive folder URL or bare folder ID. since_minutes: How far back to look for changes, in minutes (default 60). Use 1 for near-real-time polling. mime_type_filter: Optional MIME type to filter results, e.g. "video/mp4". Leave blank for all file types. page_size: Max files to return (1–1000, default 100). Returns: JSON with: - checked_at: ISO timestamp when this check ran (UTC). - since: ISO timestamp lower-bound used for the query. - new_or_modified_count: How many files matched. - files: List of matching files with id, name, mimeType, size, createdTime, modifiedTime, webViewLink.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L6436-L6507) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "folder_url": {
      "title": "Folder Url",
      "type": "string"
    },
    "since_minutes": {
      "default": 60,
      "title": "Since Minutes",
      "type": "integer"
    },
    "mime_type_filter": {
      "default": "",
      "title": "Mime Type Filter",
      "type": "string"
    },
    "page_size": {
      "default": 100,
      "title": "Page Size",
      "type": "integer"
    }
  },
  "required": [
    "folder_url"
  ],
  "title": "meta_google_drive_watch_folderArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_ad_account-32181642"></a>

## meta_ads_ad_account

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_get.

```text
[READ] Meta Ads tool. Get full details for a specific Meta ad account: name, currency, timezone, status, balance, spend. Args: account_id: Ad account ID. Leave blank to use META_AD_ACCOUNT_ID from .env.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L6514-L6528) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    }
  },
  "title": "meta_ads_ad_accountArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_account_spending_limit-73fea9e9"></a>

## meta_ads_account_spending_limit

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_get.

```text
[READ] Meta Ads tool. Get the spend cap, daily limit, amount spent, and remaining budget for a Meta ad account. Args: account_id: Ad account ID. Leave blank to use META_AD_ACCOUNT_ID from .env.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L6531-L6563) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    }
  },
  "title": "meta_ads_account_spending_limitArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_list_ads-36ff1d1d"></a>

## meta_ads_list_ads

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, filters.append, \_get.

```text
[READ] Meta Ads tool. List all ads with their IDs, creative IDs, adset IDs, campaign IDs, and status. Args: account_id: Ad account ID. Leave blank to use META_AD_ACCOUNT_ID from .env. campaign_id: Filter by campaign ID. Leave blank for all. adset_id: Filter by adset ID. Leave blank for all. status_filter: ACTIVE, PAUSED, ARCHIVED, or ALL. Default ALL.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L6566-L6595) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    },
    "campaign_id": {
      "default": "",
      "title": "Campaign Id",
      "type": "string"
    },
    "adset_id": {
      "default": "",
      "title": "Adset Id",
      "type": "string"
    },
    "status_filter": {
      "default": "ALL",
      "title": "Status Filter",
      "type": "string"
    }
  },
  "title": "meta_ads_list_adsArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_ad-91168ab0"></a>

## meta_ads_ad

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_get.

```text
[READ] Meta Ads tool. Get full details for a specific Meta ad including creative, adset, campaign, tracking specs. Args: ad_id: Ad ID (required).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L6598-L6609) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_id": {
      "title": "Ad Id",
      "type": "string"
    }
  },
  "required": [
    "ad_id"
  ],
  "title": "meta_ads_adArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_update_ad-822671f8"></a>

## meta_ads_update_ad

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_post, require\_editor.

```text
[WRITE] Meta Ads tool. Update the name or status of a Meta ad. Args: ad_id: Ad ID to update (required). name: New ad name. Leave blank to keep unchanged. status: New status: ACTIVE, PAUSED, or ARCHIVED. Leave blank to keep unchanged.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L6612-L6634) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_id": {
      "title": "Ad Id",
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
    }
  },
  "required": [
    "ad_id"
  ],
  "title": "meta_ads_update_adArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_delete_ad-60e18b64"></a>

## meta_ads_delete_ad

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_delete, require\_editor.

```text
[WRITE] Meta Ads tool. Delete (archive) a Meta ad. Args: ad_id: Ad ID to delete (required).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L6637-L6648) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_id": {
      "title": "Ad Id",
      "type": "string"
    }
  },
  "required": [
    "ad_id"
  ],
  "title": "meta_ads_delete_adArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_delete_adset-7e649ca8"></a>

## meta_ads_delete_adset

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_delete, require\_editor.

```text
[WRITE] Meta Ads tool. Delete (archive) a Meta ad set. Args: adset_id: Ad set ID to delete (required).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L6651-L6662) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "adset_id": {
      "title": "Adset Id",
      "type": "string"
    }
  },
  "required": [
    "adset_id"
  ],
  "title": "meta_ads_delete_adsetArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_delete_campaign-4102c13a"></a>

## meta_ads_delete_campaign

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_delete, require\_editor.

```text
[WRITE] Meta Ads tool. Delete (archive) a Meta campaign. Args: campaign_id: Campaign ID to delete (required).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L6665-L6676) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id"
  ],
  "title": "meta_ads_delete_campaignArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_ad_creative-c14952a4"></a>

## meta_ads_ad_creative

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_get.

```text
[READ] Meta Ads tool. Get full details of a specific Meta ad creative including image hash, video ID, copy, and call-to-action. Args: creative_id: Creative ID (required).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L6683-L6694) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "creative_id": {
      "title": "Creative Id",
      "type": "string"
    }
  },
  "required": [
    "creative_id"
  ],
  "title": "meta_ads_ad_creativeArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_replace_ad_image-a0016c7f"></a>

## meta_ads_replace_ad_image

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, find\_ad, swap\_ad\_image, require\_editor, found.get.

```text
[WRITE] Replace the image on an existing Meta ad, keeping its copy, link, page and CTA.

Use this when you already have a public image URL. If the user has a file
rather than a URL, call media_upload_start(ad=...) instead -- that shows them
a drop zone and does all of this the moment they drop the file.

Args:
    ad: Which ad -- its name, part of its name, or its ID.
    image_url: Public URL of the replacement image (required).
    account_id: Ad account ID. Leave blank to use the connected default.

```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L6879-L6902) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad": {
      "title": "Ad",
      "type": "string"
    },
    "image_url": {
      "title": "Image Url",
      "type": "string"
    },
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    }
  },
  "required": [
    "ad",
    "image_url"
  ],
  "title": "meta_ads_replace_ad_imageArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_update_ad_creative-6ca414df"></a>

## meta_ads_update_ad_creative

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_get, existing.get, \_post, require\_editor, spec.get, link\_data.get.

```text
[WRITE] Meta Ads tool. Update ad creative copy by creating a new creative (Meta does not allow in-place edits). Returns the new_creative_id — use meta_ads_update_ad to attach it to your ad. Args: creative_id: Existing creative ID to base the copy on (required). account_id: Ad account ID. Leave blank to use META_AD_ACCOUNT_ID from .env. body: New ad body copy. Leave blank to keep from original. title: New ad title/headline. Leave blank to keep from original. call_to_action_type: CTA type e.g. LEARN_MORE, SHOP_NOW, SIGN_UP. Leave blank to keep original. call_to_action_link: CTA destination URL. Leave blank to keep original.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L6905-L6970) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "creative_id": {
      "title": "Creative Id",
      "type": "string"
    },
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    },
    "body": {
      "default": "",
      "title": "Body",
      "type": "string"
    },
    "title": {
      "default": "",
      "title": "Title",
      "type": "string"
    },
    "call_to_action_type": {
      "default": "",
      "title": "Call To Action Type",
      "type": "string"
    },
    "call_to_action_link": {
      "default": "",
      "title": "Call To Action Link",
      "type": "string"
    }
  },
  "required": [
    "creative_id"
  ],
  "title": "meta_ads_update_ad_creativeArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_upload_image_to_meta-4f448ca5"></a>

## meta_ads_upload_image_to_meta

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_upload\_image\_url\_to\_meta, require\_editor.

```text
[WRITE] Meta Ads tool. Upload a JPG/PNG image from a public URL to Meta's ad image library. Downloads the asset locally first and uploads it via multipart so generated, signed, and redirected URLs work more reliably. Args: image_url: Public URL of the image (JPEG or PNG) to upload (required). account_id: Ad account ID. Leave blank to use META_AD_ACCOUNT_ID from .env.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L6973-L7000) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "image_url": {
      "title": "Image Url",
      "type": "string"
    },
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    }
  },
  "required": [
    "image_url"
  ],
  "title": "meta_ads_upload_image_to_metaArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_upload_image_file_bytes_to_meta-ad31a083"></a>

## meta_ads_upload_image_file_bytes_to_meta

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, (file\_bytes\_base64 or image\_base64 or '').strip, (account\_id or ad\_account\_id or '').strip, \_resolve\_meta\_account, \_resolve\_image\_media\_source, require\_editor.

```text
[WRITE][ADVANCED] Raw-bytes-only image uploader. Do not choose this for normal chat requests when meta_upload_ad_image can handle the same job. Use only when you explicitly have raw image bytes and only want image_hash back. Primary params are file_bytes_base64 and account_id. Legacy aliases image_base64 and ad_account_id are also accepted. Do not pass local file paths.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L7003-L7063) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "file_bytes_base64": {
      "default": "",
      "title": "File Bytes Base64",
      "type": "string"
    },
    "filename": {
      "default": "upload.jpg",
      "title": "Filename",
      "type": "string"
    },
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    },
    "image_base64": {
      "default": "",
      "title": "Image Base64",
      "type": "string"
    },
    "ad_account_id": {
      "default": "",
      "title": "Ad Account Id",
      "type": "string"
    }
  },
  "title": "meta_ads_upload_image_file_bytes_to_metaArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_create_image_ad_from_media-7aac97fe"></a>

## meta_ads_create_image_ad_from_media

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_resolve\_image\_media\_source, \_post, creative\_result.get, ad\_result.get, require\_editor, missing.append.

```text
[WRITE][RECOMMENDED] Full image-ad workflow. Use this when the user wants the image uploaded and the creative/ad created in one step. Prefer meta_upload_ad_image when the user only wants the asset in the library. Prefer generated_asset_id from the creative tools when the image was just created in chat. Source accepts local file paths, public URLs, data URI/raw base64, or existing image_hash.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L7066-L7186) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "name": {
      "default": "",
      "title": "Name",
      "type": "string"
    },
    "page_id": {
      "default": "",
      "title": "Page Id",
      "type": "string"
    },
    "message": {
      "default": "",
      "title": "Message",
      "type": "string"
    },
    "link": {
      "default": "",
      "title": "Link",
      "type": "string"
    },
    "media_source_value": {
      "default": "",
      "title": "Media Source Value",
      "type": "string"
    },
    "generated_asset_id": {
      "default": "",
      "title": "Generated Asset Id",
      "type": "string"
    },
    "media_source_type": {
      "default": "auto",
      "title": "Media Source Type",
      "type": "string"
    },
    "filename": {
      "default": "upload.jpg",
      "title": "Filename",
      "type": "string"
    },
    "headline": {
      "default": "",
      "title": "Headline",
      "type": "string"
    },
    "description": {
      "default": "",
      "title": "Description",
      "type": "string"
    },
    "adset_id": {
      "default": "",
      "title": "Adset Id",
      "type": "string"
    },
    "ad_name": {
      "default": "",
      "title": "Ad Name",
      "type": "string"
    },
    "status": {
      "default": "PAUSED",
      "title": "Status",
      "type": "string"
    },
    "call_to_action_type": {
      "default": "LEARN_MORE",
      "title": "Call To Action Type",
      "type": "string"
    },
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    }
  },
  "title": "meta_ads_create_image_ad_from_mediaArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_create_image_ad_from_source-e3471a85"></a>

## meta_ads_create_image_ad_from_source

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, meta\_ads\_create\_image\_ad\_from\_media, require\_editor.

```text
[WRITE] Meta Ads tool. Simplest image-ad tool: pass one source and the tool auto-detects how to use it. Source can be a public URL, a data URI / raw base64 image payload, an existing Meta image_hash, or a generated_asset_id from creative tools.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L7189-L7228) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "name": {
      "default": "",
      "title": "Name",
      "type": "string"
    },
    "page_id": {
      "default": "",
      "title": "Page Id",
      "type": "string"
    },
    "message": {
      "default": "",
      "title": "Message",
      "type": "string"
    },
    "link": {
      "default": "",
      "title": "Link",
      "type": "string"
    },
    "source": {
      "default": "",
      "title": "Source",
      "type": "string"
    },
    "generated_asset_id": {
      "default": "",
      "title": "Generated Asset Id",
      "type": "string"
    },
    "filename": {
      "default": "upload.jpg",
      "title": "Filename",
      "type": "string"
    },
    "headline": {
      "default": "",
      "title": "Headline",
      "type": "string"
    },
    "description": {
      "default": "",
      "title": "Description",
      "type": "string"
    },
    "adset_id": {
      "default": "",
      "title": "Adset Id",
      "type": "string"
    },
    "ad_name": {
      "default": "",
      "title": "Ad Name",
      "type": "string"
    },
    "status": {
      "default": "PAUSED",
      "title": "Status",
      "type": "string"
    },
    "call_to_action_type": {
      "default": "LEARN_MORE",
      "title": "Call To Action Type",
      "type": "string"
    },
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    }
  },
  "title": "meta_ads_create_image_ad_from_sourceArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_get_upload_url-96592ffe"></a>

## meta_ads_get_upload_url

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, os.environ.get, (content\_type or '').strip, require\_editor, os.path.basename, \_gcs.Client, client.bucket, bucket.blob.

```text
[WRITE][RECOMMENDED] Use this when the user wants to upload a local file (image or video) to Meta Ads. Returns a signed GCS upload URL. Two-step workflow: (1) call this tool with the filename, (2) use curl/PowerShell to PUT the file to the returned upload_url, (3) pass the returned public_url to meta_upload_ad_image or meta_upload_ad_video as source. This avoids base64 size limits and works with any file size.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L7231-L7280) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "filename": {
      "title": "Filename",
      "type": "string"
    },
    "content_type": {
      "default": "",
      "title": "Content Type",
      "type": "string"
    }
  },
  "required": [
    "filename"
  ],
  "title": "meta_ads_get_upload_urlArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_upload_ad_image-d206cc5b"></a>

## meta_upload_ad_image

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, (account\_id or ad\_account\_id or '').strip, \_resolve\_meta\_account, \_resolve\_image\_media\_source, require\_editor.

```text
[WRITE][PRIMARY][RECOMMENDED][ALIAS] First-choice image upload tool for Meta Ads. Use this when the user says upload an image, attached a photo, pasted a public image URL, or wants an image available in the Meta library. If the user gives a public URL, pass that URL directly to this tool instead of refusing to fetch it yourself. If the user attached a file, pass the attachment as data URI/raw base64 bytes in source. Accepts source as a local file path (e.g. /path/to/ad.png or C:\Users\me\ad.jpg), public URL, data URI/raw base64 bytes, existing image_hash, or generated_asset_id. account_id is the primary parameter; ad_account_id is also accepted as a legacy alias. Returns image_hash for creatives. Does not create a creative or ad.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L7283-L7327) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "source": {
      "default": "",
      "title": "Source",
      "type": "string"
    },
    "generated_asset_id": {
      "default": "",
      "title": "Generated Asset Id",
      "type": "string"
    },
    "filename": {
      "default": "upload.jpg",
      "title": "Filename",
      "type": "string"
    },
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    },
    "ad_account_id": {
      "default": "",
      "title": "Ad Account Id",
      "type": "string"
    }
  },
  "title": "meta_upload_ad_imageArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_create_image_ad-c32e51d2"></a>

## meta_create_image_ad

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, meta\_ads\_create\_image\_ad\_from\_source, require\_editor.

```text
[WRITE][RECOMMENDED][ALIAS] Use this when the user wants to create the image ad, not just upload the asset. Uploads or reuses an image, creates an image creative, and optionally creates a PAUSED ad when adset_id is supplied. Prefer generated_asset_id from the creative tools when the image was just created in chat. Source may be a local file path, public URL, data URI/raw base64 bytes, or existing image_hash. Requires page_id, message, and destination link.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L7330-L7369) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "name": {
      "default": "",
      "title": "Name",
      "type": "string"
    },
    "page_id": {
      "default": "",
      "title": "Page Id",
      "type": "string"
    },
    "message": {
      "default": "",
      "title": "Message",
      "type": "string"
    },
    "link": {
      "default": "",
      "title": "Link",
      "type": "string"
    },
    "source": {
      "default": "",
      "title": "Source",
      "type": "string"
    },
    "generated_asset_id": {
      "default": "",
      "title": "Generated Asset Id",
      "type": "string"
    },
    "filename": {
      "default": "upload.jpg",
      "title": "Filename",
      "type": "string"
    },
    "headline": {
      "default": "",
      "title": "Headline",
      "type": "string"
    },
    "description": {
      "default": "",
      "title": "Description",
      "type": "string"
    },
    "adset_id": {
      "default": "",
      "title": "Adset Id",
      "type": "string"
    },
    "ad_name": {
      "default": "",
      "title": "Ad Name",
      "type": "string"
    },
    "status": {
      "default": "PAUSED",
      "title": "Status",
      "type": "string"
    },
    "call_to_action_type": {
      "default": "LEARN_MORE",
      "title": "Call To Action Type",
      "type": "string"
    },
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    }
  },
  "title": "meta_create_image_adArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_create_carousel_ad_creative-4b720bef"></a>

## meta_ads_create_carousel_ad_creative

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_post, require\_editor, json.loads, card.get, attachments.append, isinstance.

```text
[WRITE] Meta Ads tool. Create a carousel (multi-card) ad creative with 2-10 cards. Args: name: Creative name (required). page_id: Facebook Page ID (required). Run meta_ads_pages to list the Pages every connected login can reach. message: Ad body copy shown above the carousel (required). link: Default destination URL for cards without a specific link (required). cards: JSON array of card objects. Each card: {"image_hash": str, "video_id": str, "title": str, "description": str, "link": str, "call_to_action_type": str}. image_hash or video_id required per card (required). account_id: Ad account ID. Leave blank to use META_AD_ACCOUNT_ID from .env.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L7372-L7428) · Schema: tools/list.

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
    "page_id": {
      "title": "Page Id",
      "type": "string"
    },
    "message": {
      "title": "Message",
      "type": "string"
    },
    "link": {
      "title": "Link",
      "type": "string"
    },
    "cards": {
      "title": "Cards",
      "type": "string"
    },
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    }
  },
  "required": [
    "name",
    "page_id",
    "message",
    "link",
    "cards"
  ],
  "title": "meta_ads_create_carousel_ad_creativeArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_create_story_ad_creative-ee807bb3"></a>

## meta_ads_create_story_ad_creative

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_post, require\_editor.

```text
[WRITE] Meta Ads tool. Create a Story format (9:16 vertical) ad creative for Facebook/Instagram Stories. Args: name: Creative name (required). page_id: Facebook Page ID (required). Run meta_ads_pages to list the Pages every connected login can reach. body: Ad body copy (required). link: Destination URL (required). account_id: Ad account ID. Leave blank to use META_AD_ACCOUNT_ID from .env. instagram_account_id: Instagram account ID if targeting Instagram Stories. image_hash: Image hash from meta_ads_upload_image_to_meta. Use this OR video_id. video_id: Video ID from meta_ads_upload_ad_video. Use this OR image_hash. call_to_action_type: CTA type e.g. LEARN_MORE, SHOP_NOW. Default LEARN_MORE.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L7431-L7485) · Schema: tools/list.

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
    "page_id": {
      "title": "Page Id",
      "type": "string"
    },
    "body": {
      "title": "Body",
      "type": "string"
    },
    "link": {
      "title": "Link",
      "type": "string"
    },
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    },
    "instagram_account_id": {
      "default": "",
      "title": "Instagram Account Id",
      "type": "string"
    },
    "image_hash": {
      "default": "",
      "title": "Image Hash",
      "type": "string"
    },
    "video_id": {
      "default": "",
      "title": "Video Id",
      "type": "string"
    },
    "call_to_action_type": {
      "default": "LEARN_MORE",
      "title": "Call To Action Type",
      "type": "string"
    }
  },
  "required": [
    "name",
    "page_id",
    "body",
    "link"
  ],
  "title": "meta_ads_create_story_ad_creativeArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_create_collection_ad_creative-49d14000"></a>

## meta_ads_create_collection_ad_creative

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_post, require\_editor.

```text
[WRITE] Meta Ads tool. Create a Collection ad creative (hero image/video + product catalog below). Args: name: Creative name (required). page_id: Facebook Page ID (required). Run meta_ads_pages to list the Pages every connected login can reach. body: Ad body copy (required). headline: Ad headline (required). product_set_id: Product set ID from your Meta catalog (required). link: Destination URL (required). account_id: Ad account ID. Leave blank to use META_AD_ACCOUNT_ID from .env. hero_image_hash: Image hash for the hero. Use this OR hero_video_id. hero_video_id: Video ID for the hero. Use this OR hero_image_hash.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L7488-L7550) · Schema: tools/list.

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
    "page_id": {
      "title": "Page Id",
      "type": "string"
    },
    "body": {
      "title": "Body",
      "type": "string"
    },
    "headline": {
      "title": "Headline",
      "type": "string"
    },
    "product_set_id": {
      "title": "Product Set Id",
      "type": "string"
    },
    "link": {
      "title": "Link",
      "type": "string"
    },
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    },
    "hero_image_hash": {
      "default": "",
      "title": "Hero Image Hash",
      "type": "string"
    },
    "hero_video_id": {
      "default": "",
      "title": "Hero Video Id",
      "type": "string"
    }
  },
  "required": [
    "name",
    "page_id",
    "body",
    "headline",
    "product_set_id",
    "link"
  ],
  "title": "meta_ads_create_collection_ad_creativeArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_upload_customer_list_to_audience-a5fac25b"></a>

## meta_ads_upload_customer_list_to_audience

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_post, require\_editor, json.loads, u.get, data\_rows.append, schema.append, row.append.

```text
[WRITE] Meta Ads tool. Upload hashed customer data (email/phone) to an existing Meta Custom Audience. Emails and phone numbers are automatically SHA-256 hashed before sending. Args: audience_id: Custom audience ID to upload to (required). users: JSON array of user objects. Each object may include: email, phone, first_name, last_name. Example: '[{"email":"user@example.com","phone":"+972501234567"}]' (required). operation: ADD to add users, REMOVE to remove them. Default ADD. account_id: Ad account ID. Leave blank to use META_AD_ACCOUNT_ID from .env.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L7557-L7623) · Schema: tools/list.

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
    "users": {
      "title": "Users",
      "type": "string"
    },
    "operation": {
      "default": "ADD",
      "title": "Operation",
      "type": "string"
    },
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    }
  },
  "required": [
    "audience_id",
    "users"
  ],
  "title": "meta_ads_upload_customer_list_to_audienceArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_delete_audience-9aa20da9"></a>

## meta_ads_delete_audience

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_delete, require\_editor.

```text
[WRITE] Meta Ads tool. Delete a Meta Custom Audience. Args: audience_id: Custom audience ID to delete (required).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L7626-L7637) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "audience_id": {
      "title": "Audience Id",
      "type": "string"
    }
  },
  "required": [
    "audience_id"
  ],
  "title": "meta_ads_delete_audienceArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_audience-69f1e6c3"></a>

## meta_ads_audience

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_get.

```text
[READ] Meta Ads tool. Get details and estimated size for a specific Meta Custom Audience. Args: audience_id: Custom audience ID (required).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L7640-L7651) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "audience_id": {
      "title": "Audience Id",
      "type": "string"
    }
  },
  "required": [
    "audience_id"
  ],
  "title": "meta_ads_audienceArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_update_audience-cfdc2cf1"></a>

## meta_ads_update_audience

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_post, require\_editor.

```text
[WRITE] Meta Ads tool. Update the name or description of a Meta Custom Audience. Args: audience_id: Custom audience ID to update (required). name: New audience name. Leave blank to keep unchanged. description: New audience description. Leave blank to keep unchanged.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L7654-L7676) · Schema: tools/list.

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
    "name": {
      "default": "",
      "title": "Name",
      "type": "string"
    },
    "description": {
      "default": "",
      "title": "Description",
      "type": "string"
    }
  },
  "required": [
    "audience_id"
  ],
  "title": "meta_ads_update_audienceArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_create_website_audience-5224dd5b"></a>

## meta_ads_create_website_audience

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_post, require\_editor, rule\_conditions\[0\]\['filter'\]\['filters'\].append.

```text
[WRITE] Meta Ads tool. Create a website Custom Audience based on Meta Pixel events. Args: name: Audience name (required). pixel_id: Meta Pixel ID (required). event: Pixel event to target: PageView, ViewContent, AddToCart, Purchase, Lead, CompleteRegistration, etc. (required). retention_days: How many days to look back (1-180) (required). account_id: Ad account ID. Leave blank to use META_AD_ACCOUNT_ID from .env. url_contains: Optional URL condition — include users who visited URLs containing this string. url_equals: Optional URL condition — include users who visited this exact URL. description: Audience description.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L7679-L7719) · Schema: tools/list.

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
    "pixel_id": {
      "title": "Pixel Id",
      "type": "string"
    },
    "event": {
      "title": "Event",
      "type": "string"
    },
    "retention_days": {
      "title": "Retention Days",
      "type": "integer"
    },
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    },
    "url_contains": {
      "default": "",
      "title": "Url Contains",
      "type": "string"
    },
    "url_equals": {
      "default": "",
      "title": "Url Equals",
      "type": "string"
    },
    "description": {
      "default": "",
      "title": "Description",
      "type": "string"
    }
  },
  "required": [
    "name",
    "pixel_id",
    "event",
    "retention_days"
  ],
  "title": "meta_ads_create_website_audienceArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_create_engagement_audience-d8e7473c"></a>

## meta_ads_create_engagement_audience

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_post, require\_editor.

```text
[WRITE] Meta Ads tool. Create an audience of people who engaged with your Facebook Page, Instagram, or video content. Args: name: Audience name (required). source_type: PAGE, INSTAGRAM_ACCOUNT, VIDEO, LEAD_FORM, or EVENT (required). source_id: ID of the page, IG account, video, lead form, or event to target (required). engagement_type: PAGE_LIKED, PAGE_VISITED, PAGE_ENGAGED, IG_ACCOUNT_FOLLOWED, IG_MEDIA_INTERACTED, VIDEO_WATCHED_25, VIDEO_WATCHED_50, VIDEO_WATCHED_75, VIDEO_WATCHED_95 (required). retention_days: Lookback window in days (1-365) (required). account_id: Ad account ID. Leave blank to use META_AD_ACCOUNT_ID from .env. description: Audience description.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L7722-L7760) · Schema: tools/list.

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
    "source_type": {
      "title": "Source Type",
      "type": "string"
    },
    "source_id": {
      "title": "Source Id",
      "type": "string"
    },
    "engagement_type": {
      "title": "Engagement Type",
      "type": "string"
    },
    "retention_days": {
      "title": "Retention Days",
      "type": "integer"
    },
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    },
    "description": {
      "default": "",
      "title": "Description",
      "type": "string"
    }
  },
  "required": [
    "name",
    "source_type",
    "source_id",
    "engagement_type",
    "retention_days"
  ],
  "title": "meta_ads_create_engagement_audienceArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_campaign_performance-0d3fa75c"></a>

## meta_ads_campaign_performance

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_get, date.today, timedelta.

```text
[READ] Meta Ads tool. Get detailed performance metrics for a specific Meta campaign. Args: campaign_id: Campaign ID (required). start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. breakdown: Optional breakdown: age, gender, placement, device, country, or publisher_platform.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L7767-L7791) · Schema: tools/list.

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
    "breakdown": {
      "default": "",
      "title": "Breakdown",
      "type": "string"
    }
  },
  "required": [
    "campaign_id"
  ],
  "title": "meta_ads_campaign_performanceArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_adset_performance-fdff0df5"></a>

## meta_ads_adset_performance

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_get, date.today, timedelta.

```text
[READ] Meta Ads tool. Get detailed performance metrics for a specific Meta ad set. Args: adset_id: Ad set ID (required). start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. breakdown: Optional breakdown: age, gender, placement, device, country, or publisher_platform.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L7794-L7823) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "adset_id": {
      "title": "Adset Id",
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
    "breakdown": {
      "default": "",
      "title": "Breakdown",
      "type": "string"
    }
  },
  "required": [
    "adset_id"
  ],
  "title": "meta_ads_adset_performanceArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_ad_performance-ea9ec6cb"></a>

## meta_ads_ad_performance

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_get, date.today, timedelta.

```text
[READ] Meta Ads tool. Get detailed performance metrics for a specific Meta ad. Args: ad_id: Ad ID (required). start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. breakdown: Optional breakdown: age, gender, placement, device, country, or publisher_platform.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L7826-L7850) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_id": {
      "title": "Ad Id",
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
    "breakdown": {
      "default": "",
      "title": "Breakdown",
      "type": "string"
    }
  },
  "required": [
    "ad_id"
  ],
  "title": "meta_ads_ad_performanceArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_geo_performance-06777f07"></a>

## meta_ads_geo_performance

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_get, date.today, timedelta.

```text
[READ] Meta Ads tool. Get Meta Ads performance broken down by geographic location (country, region, or DMA). Args: account_id: Ad account ID. Leave blank to use META_AD_ACCOUNT_ID from .env. campaign_id: Filter by campaign ID. Leave blank for account-level. start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. geo_level: country, region, or dma. Default country.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L7853-L7880) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    },
    "campaign_id": {
      "default": "",
      "title": "Campaign Id",
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
    "geo_level": {
      "default": "country",
      "title": "Geo Level",
      "type": "string"
    }
  },
  "title": "meta_ads_geo_performanceArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_device_performance-624bbdf5"></a>

## meta_ads_device_performance

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_get, date.today, timedelta.

```text
[READ] Meta Ads tool. Get Meta Ads performance broken down by device platform (mobile, desktop, tablet). Args: account_id: Ad account ID. Leave blank to use META_AD_ACCOUNT_ID from .env. campaign_id: Filter by campaign ID. Leave blank for account-level. start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L7883-L7907) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    },
    "campaign_id": {
      "default": "",
      "title": "Campaign Id",
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
  "title": "meta_ads_device_performanceArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_attribution_report-199438c4"></a>

## meta_ads_attribution_report

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, w.strip, \_get, date.today, attribution\_windows.split, timedelta.

```text
[READ] Meta Ads tool. Get Meta Ads conversion attribution broken down by click and view attribution windows. Args: account_id: Ad account ID. Leave blank to use META_AD_ACCOUNT_ID from .env. campaign_id: Filter by campaign ID. Leave blank for account-level. start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. attribution_windows: Comma-separated list of windows: 1d_click, 7d_click, 28d_click, 1d_view, 7d_view. Default: 1d_click,7d_click,1d_view.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L7910-L7938) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    },
    "campaign_id": {
      "default": "",
      "title": "Campaign Id",
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
    "attribution_windows": {
      "default": "1d_click,7d_click,1d_view",
      "title": "Attribution Windows",
      "type": "string"
    }
  },
  "title": "meta_ads_attribution_reportArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_create_pixel-30bb8814"></a>

## meta_ads_create_pixel

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_post, require\_editor.

```text
[WRITE] Meta Ads tool. Create a new Meta Pixel for an ad account. Args: name: Pixel name (required). account_id: Ad account ID. Leave blank to use META_AD_ACCOUNT_ID from .env.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L7945-L7961) · Schema: tools/list.

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
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    }
  },
  "required": [
    "name"
  ],
  "title": "meta_ads_create_pixelArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_pixel_events-51a15cef"></a>

## meta_ads_pixel_events

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_get, date.today, timedelta.

```text
[READ] Meta Ads tool. List all events fired on a Meta Pixel with their counts and last fired time. Args: pixel_id: Meta Pixel ID (required). start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L7964-L7983) · Schema: tools/list.

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
  "required": [
    "pixel_id"
  ],
  "title": "meta_ads_pixel_eventsArguments",
  "type": "object"
}
```

</details>
