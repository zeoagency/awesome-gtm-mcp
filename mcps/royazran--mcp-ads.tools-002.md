# RoyAzran/mcp-ads: supporting and other-product tools

[Provider inventory](royazran--mcp-ads.md) · [Global tool index](../TOOL_INDEX.md)

Tools 151–300 of 3131. Exact schemas from the same upstream snapshot.

<a id="tool-gads_get_account_status-9a36f00d"></a>

## gads_get_account_status

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get account status summary: account info, active/paused/removed campaign counts, and last change event in the past 30 days.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L3193-L3204) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_get_account_statusArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_budget_change_log-1627aab2"></a>

## gads_get_budget_change_log

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, date.today, \_row\_to\_dict, timedelta.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get a log of all budget changes (CAMPAIGN_BUDGET resource type) in a date range. Shows old → new budget amounts with percentage change and who made the change.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L3206-L3228) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "start_date": {
      "title": "Start Date",
      "type": "string"
    },
    "end_date": {
      "title": "End Date",
      "type": "string"
    },
    "limit": {
      "default": null,
      "title": "Limit",
      "type": "integer"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "start_date",
    "end_date"
  ],
  "title": "gads_get_budget_change_logArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_change_history-ad001b54"></a>

## gads_get_change_history

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, date.today, \_row\_to\_dict, timedelta.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get account change history showing all modifications with who made them. Automatically splits long date ranges into 30-day windows (Google Ads API limitation). Returns Hebrew client_type labels.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L3230-L3254) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "start_date": {
      "title": "Start Date",
      "type": "string"
    },
    "end_date": {
      "title": "End Date",
      "type": "string"
    },
    "resource_type": {
      "default": null,
      "title": "Resource Type",
      "type": "string"
    },
    "limit": {
      "default": null,
      "title": "Limit",
      "type": "integer"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "start_date",
    "end_date"
  ],
  "title": "gads_get_change_historyArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_inactivity_alerts-29f4de2f"></a>

## gads_get_inactivity_alerts

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Check all MCC sub-accounts for inactivity. Returns accounts with no changes in the past N days (default 14). Useful for detecting neglected client accounts.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L3256-L3268) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "threshold_days": {
      "default": 14,
      "title": "Threshold Days",
      "type": "number"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_get_inactivity_alertsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_user_activity_summary-8d53c268"></a>

## gads_get_user_activity_summary

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Summarize change history by user: total changes per user per day, first/last change time, and estimated session duration. Useful for agency oversight.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L3270-L3288) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "start_date": {
      "title": "Start Date",
      "type": "string"
    },
    "end_date": {
      "title": "End Date",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "start_date",
    "end_date"
  ],
  "title": "gads_get_user_activity_summaryArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_invite_user-c240931b"></a>

## gads_invite_user

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Send an invitation to a user to join this Google Ads account.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L3290-L3301) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "email_address": {
      "title": "Email Address",
      "type": "string"
    },
    "access_role": {
      "title": "Access Role",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "email_address",
    "access_role"
  ],
  "title": "gads_invite_userArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_link_product_account-df962fce"></a>

## gads_link_product_account

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Link another Google product account (YouTube, partner, etc.) to this Google Ads account.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L3303-L3314) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "product_link_type": {
      "title": "Product Link Type",
      "type": "string"
    },
    "linked_account_id": {
      "title": "Linked Account Id",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "product_link_type",
    "linked_account_id"
  ],
  "title": "gads_link_product_accountArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_accessible_accounts-3acdfb6f"></a>

## gads_list_accessible_accounts

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List all accounts accessible under this MCC/manager account.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L3316-L3328) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_list_accessible_accountsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_billing_setups-22679f2c"></a>

## gads_list_billing_setups

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List billing setups configured for this Google Ads account.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L3330-L3341) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_list_billing_setupsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_customer_user_access-b5da2cde"></a>

## gads_list_customer_user_access

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List all users with access to this Google Ads account.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L3343-L3353) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_list_customer_user_accessArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_linked_accounts-1c316d3b"></a>

## gads_list_linked_accounts

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List all product accounts linked to this Google Ads account.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L3355-L3366) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_list_linked_accountsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_manager_accounts-de313d41"></a>

## gads_list_manager_accounts

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List all manager (MCC) accounts in the hierarchy.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L3368-L3379) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_list_manager_accountsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_remove_customer_user_access-04274ff2"></a>

## gads_remove_customer_user_access

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Remove a user/
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L3381-L3391) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "user_id": {
      "title": "User Id",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "user_id"
  ],
  "title": "gads_remove_customer_user_accessArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_update_account-d0577f43"></a>

## gads_update_account

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Update account settings like name, tracking template, or auto-tagging.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L3393-L3405) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "descriptive_name": {
      "default": null,
      "title": "Descriptive Name",
      "type": "string"
    },
    "tracking_url_template": {
      "default": null,
      "title": "Tracking Url Template",
      "type": "string"
    },
    "auto_tagging_enabled": {
      "default": null,
      "title": "Auto Tagging Enabled",
      "type": "boolean"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_update_accountArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_update_customer_user_access-269b1c56"></a>

## gads_update_customer_user_access

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Update the access role for an existing user on this account.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L3407-L3418) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "user_id": {
      "title": "User Id",
      "type": "string"
    },
    "access_role": {
      "title": "Access Role",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "user_id",
    "access_role"
  ],
  "title": "gads_update_customer_user_accessArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_ad_group-3368918f"></a>

## gads_create_ad_group

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a new ad group inside a campaign. type values: SEARCH_STANDARD, DISPLAY_STANDARD, SHOPPING_PRODUCT_ADS, VIDEO_BUMPER, VIDEO_TRUE_VIEW_IN_STREAM, VIDEO_TRUE_VIEW_IN_DISPLAY, SEARCH_DYNAMIC_ADS, etc. Defaults SEARCH_STANDARD.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L3420-L3444) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

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
      "title": "Name",
      "type": "string"
    },
    "cpc_bid_micros": {
      "default": null,
      "title": "Cpc Bid Micros",
      "type": "number"
    },
    "cpm_bid_micros": {
      "default": null,
      "title": "Cpm Bid Micros",
      "type": "number"
    },
    "cpv_bid_micros": {
      "default": null,
      "title": "Cpv Bid Micros",
      "type": "number"
    },
    "target_cpa_micros": {
      "default": null,
      "title": "Target Cpa Micros",
      "type": "number"
    },
    "target_roas": {
      "default": null,
      "title": "Target Roas",
      "type": "number"
    },
    "type_val": {
      "default": null,
      "title": "Type Val",
      "type": "string"
    },
    "status": {
      "default": null,
      "title": "Status",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id",
    "name"
  ],
  "title": "gads_create_ad_groupArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_pause_ad_group-23a49349"></a>

## gads_pause_ad_group

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Pause an ad group by ID.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L3446-L3461) · Schema: tools/list.

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
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id"
  ],
  "title": "gads_pause_ad_groupArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_enable_ad_group-bff8574b"></a>

## gads_enable_ad_group

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Enable a paused ad group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L3463-L3478) · Schema: tools/list.

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
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id"
  ],
  "title": "gads_enable_ad_groupArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_remove_ad_group-fa847ece"></a>

## gads_remove_ad_group

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Permanently remove an ad group (cannot be undone — all its ads go to REMOVED status).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L3480-L3495) · Schema: tools/list.

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
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id"
  ],
  "title": "gads_remove_ad_groupArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_bulk_create_ad_groups-a73f0398"></a>

## gads_bulk_create_ad_groups

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create multiple ad groups in one call. Each item: { campaign_id, name, cpc_bid_micros? }.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L3497-L3511) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_groups": {
      "default": null,
      "items": {},
      "title": "Ad Groups",
      "type": "array"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_bulk_create_ad_groupsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_bulk_pause_ad_groups-a784e52e"></a>

## gads_bulk_pause_ad_groups

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Pause multiple ad groups in one call.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L3513-L3527) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_group_ids": {
      "items": {},
      "title": "Ad Group Ids",
      "type": "array"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_ids"
  ],
  "title": "gads_bulk_pause_ad_groupsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_bulk_enable_ad_groups-08b696e0"></a>

## gads_bulk_enable_ad_groups

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Enable multiple ad groups in one call.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L3529-L3543) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_group_ids": {
      "items": {},
      "title": "Ad Group Ids",
      "type": "array"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_ids"
  ],
  "title": "gads_bulk_enable_ad_groupsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_bulk_remove_ad_groups-6c118913"></a>

## gads_bulk_remove_ad_groups

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Permanently remove multiple ad groups in one call.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L3545-L3559) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_group_ids": {
      "items": {},
      "title": "Ad Group Ids",
      "type": "array"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_ids"
  ],
  "title": "gads_bulk_remove_ad_groupsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_bulk_update_ad_group_cpc-578b57e7"></a>

## gads_bulk_update_ad_group_cpc

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Update CPC bid on multiple ad groups. items: [{ad_group_id, cpc_bid_micros}].
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L3561-L3575) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "updates": {
      "default": null,
      "items": {},
      "title": "Updates",
      "type": "array"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_bulk_update_ad_group_cpcArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_ad_group_cpm-2f2b133c"></a>

## gads_set_ad_group_cpm

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set CPM (cost-per-thousand-impressions) bid on an ad group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L3577-L3593) · Schema: tools/list.

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
    "cpm_bid_micros": {
      "title": "Cpm Bid Micros",
      "type": "number"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "cpm_bid_micros"
  ],
  "title": "gads_set_ad_group_cpmArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_ad_group_cpv-b165e3ed"></a>

## gads_set_ad_group_cpv

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set CPV (cost-per-view) bid on a video ad group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L3595-L3611) · Schema: tools/list.

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
    "cpv_bid_micros": {
      "title": "Cpv Bid Micros",
      "type": "number"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "cpv_bid_micros"
  ],
  "title": "gads_set_ad_group_cpvArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_ad_group_url_template-40feac53"></a>

## gads_set_ad_group_url_template

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set tracking URL template on an ad group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L3613-L3629) · Schema: tools/list.

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
    "tracking_url_template": {
      "title": "Tracking Url Template",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "tracking_url_template"
  ],
  "title": "gads_set_ad_group_url_templateArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_ad_group_url_suffix-2b719ce0"></a>

## gads_set_ad_group_url_suffix

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set final URL suffix on an ad group (parallel tracking suffix).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L3631-L3647) · Schema: tools/list.

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
    "final_url_suffix": {
      "title": "Final Url Suffix",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "final_url_suffix"
  ],
  "title": "gads_set_ad_group_url_suffixArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_ad_groups_by_status-e432a7fb"></a>

## gads_list_ad_groups_by_status

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List ad groups filtered by status (ENABLED/PAUSED/REMOVED). Optional campaign_id filter.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L3649-L3667) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "status": {
      "title": "Status",
      "type": "string"
    },
    "campaign_id": {
      "default": null,
      "title": "Campaign Id",
      "type": "string"
    },
    "limit": {
      "default": null,
      "title": "Limit",
      "type": "integer"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "status"
  ],
  "title": "gads_list_ad_groups_by_statusArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_ad_groups_by_label-942301d6"></a>

## gads_list_ad_groups_by_label

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List ad groups that have a specific label attached.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L3669-L3684) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "label_id": {
      "title": "Label Id",
      "type": "string"
    },
    "limit": {
      "default": null,
      "title": "Limit",
      "type": "integer"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "label_id"
  ],
  "title": "gads_list_ad_groups_by_labelArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_ad_group_ads_summary-548a9e50"></a>

## gads_get_ad_group_ads_summary

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get count of ads by type and status inside an ad group. Fast overview without listing every ad.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L3686-L3701) · Schema: tools/list.

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
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id"
  ],
  "title": "gads_get_ad_group_ads_summaryArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_duplicate_ad_group-f2033cca"></a>

## gads_duplicate_ad_group

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, RN.adGroup, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Duplicate an ad group into a target campaign, copying ads and keywords
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L3703-L3726) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "source_ad_group_id": {
      "title": "Source Ad Group Id",
      "type": "string"
    },
    "target_campaign_id": {
      "title": "Target Campaign Id",
      "type": "string"
    },
    "new_name": {
      "title": "New Name",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "source_ad_group_id",
    "target_campaign_id",
    "new_name"
  ],
  "title": "gads_duplicate_ad_groupArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_ad_group_details-ad3f66c5"></a>

## gads_get_ad_group_details

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, RN.adGroup, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get full details of a specific ad group including targeting settings and bids
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L3728-L3755) · Schema: tools/list.

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
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id"
  ],
  "title": "gads_get_ad_group_detailsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_ad_group_simulation-5ad858a5"></a>

## gads_get_ad_group_simulation

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get bid simulation data for an ad group showing performance estimates at different bid levels
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L3757-L3780) · Schema: tools/list.

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
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id"
  ],
  "title": "gads_get_ad_group_simulationArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_ad_groups-8dc0e8fa"></a>

## gads_list_ad_groups

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List ad groups, optionally filtered by campaign and status
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L3782-L3808) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "default": null,
      "title": "Campaign Id",
      "type": "string"
    },
    "status": {
      "default": null,
      "title": "Status",
      "type": "string"
    },
    "limit": {
      "default": null,
      "title": "Limit",
      "type": "integer"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_list_ad_groupsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_ad_group_audience_targeting-3d105b6c"></a>

## gads_set_ad_group_audience_targeting

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Add or remove user list (audience) criteria on an ad group
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L3810-L3829) · Schema: tools/list.

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
    "add_user_list_ids": {
      "default": null,
      "items": {},
      "title": "Add User List Ids",
      "type": "array"
    },
    "remove_user_list_ids": {
      "default": null,
      "items": {},
      "title": "Remove User List Ids",
      "type": "array"
    },
    "targeting_setting": {
      "default": null,
      "title": "Targeting Setting",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id"
  ],
  "title": "gads_set_ad_group_audience_targetingArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_ad_group_bid_modifiers-55a6c795"></a>

## gads_set_ad_group_bid_modifiers

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set device bid modifiers on an ad group (desktop, mobile, tablet)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L3831-L3851) · Schema: tools/list.

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
    "device_bid_modifiers": {
      "additionalProperties": true,
      "default": null,
      "title": "Device Bid Modifiers",
      "type": "object"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id"
  ],
  "title": "gads_set_ad_group_bid_modifiersArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_ad_group_demographic_bids-133a2c52"></a>

## gads_set_ad_group_demographic_bids

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set age range and gender bid modifiers on an ad group
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L3853-L3875) · Schema: tools/list.

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
    "age_range_bid_modifiers": {
      "additionalProperties": true,
      "default": null,
      "title": "Age Range Bid Modifiers",
      "type": "object"
    },
    "gender_bid_modifiers": {
      "additionalProperties": true,
      "default": null,
      "title": "Gender Bid Modifiers",
      "type": "object"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id"
  ],
  "title": "gads_set_ad_group_demographic_bidsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_ad_group_targeting-06d07b99"></a>

## gads_set_ad_group_targeting

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Add or remove keyword criteria on an ad group
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L3877-L3898) · Schema: tools/list.

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
    "add_keyword_ids": {
      "default": null,
      "items": {},
      "title": "Add Keyword Ids",
      "type": "array"
    },
    "remove_keyword_ids": {
      "default": null,
      "items": {},
      "title": "Remove Keyword Ids",
      "type": "array"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id"
  ],
  "title": "gads_set_ad_group_targetingArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_update_ad_group-d4899e23"></a>

## gads_update_ad_group

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Update an ad group name, status, or bid settings
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L3900-L3916) · Schema: tools/list.

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
    "name": {
      "default": null,
      "title": "Name",
      "type": "string"
    },
    "status": {
      "default": null,
      "title": "Status",
      "type": "string"
    },
    "cpc_bid_micros": {
      "default": null,
      "title": "Cpc Bid Micros",
      "type": "number"
    },
    "target_cpa_micros": {
      "default": null,
      "title": "Target Cpa Micros",
      "type": "number"
    },
    "target_roas": {
      "default": null,
      "title": "Target Roas",
      "type": "number"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id"
  ],
  "title": "gads_update_ad_groupArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_bulk_apply_label_to_ads-f63cf4c9"></a>

## gads_bulk_apply_label_to_ads

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Apply a label to many ads at once (pairs of ad_group_id+ad_id+label_id).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L3918-L3925) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "gads_bulk_apply_label_to_adsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_bulk_remove_label_from_ads-a1d01e53"></a>

## gads_bulk_remove_label_from_ads

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Remove a label from many ads.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L3927-L3934) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "gads_bulk_remove_label_from_adsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_bulk_apply_label_to_ad_groups-9026389a"></a>

## gads_bulk_apply_label_to_ad_groups

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Apply label to many ad groups.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L3936-L3943) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "gads_bulk_apply_label_to_ad_groupsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_bulk_remove_label_from_ad_groups-dad1d12e"></a>

## gads_bulk_remove_label_from_ad_groups

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Remove label from many ad groups.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L3945-L3952) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "gads_bulk_remove_label_from_ad_groupsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_bulk_apply_label_to_campaigns-43141d00"></a>

## gads_bulk_apply_label_to_campaigns

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Apply label to many campaigns.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L3954-L3961) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "gads_bulk_apply_label_to_campaignsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_bulk_remove_label_from_campaigns-d0570f65"></a>

## gads_bulk_remove_label_from_campaigns

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Remove label from many campaigns.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L3963-L3970) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "gads_bulk_remove_label_from_campaignsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_ads_by_campaign-e7b676de"></a>

## gads_list_ads_by_campaign

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List all ads within a campaign (joins ad_group_ad + ad_group + campaign).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L3972-L3979) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "gads_list_ads_by_campaignArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_ads_by_final_url-f72dc072"></a>

## gads_list_ads_by_final_url

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Find ads whose final_urls contain given substring.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L3981-L3988) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "gads_list_ads_by_final_urlArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_ads_by_date_range-569cfadf"></a>

## gads_list_ads_by_date_range

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List ads with impressions in given date range.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L3990-L3997) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "gads_list_ads_by_date_rangeArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_search_ads_by_headline-edf468c8"></a>

## gads_search_ads_by_headline

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Search RSA ads by headline text substring (client-side filter).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L3999-L4006) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "gads_search_ads_by_headlineArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_count_rsa_assets-e394281a"></a>

## gads_count_rsa_assets

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Count headlines/descriptions on an RSA.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4008-L4015) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "gads_count_rsa_assetsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_remove_rda_marketing_image-f2fc7796"></a>

## gads_remove_rda_marketing_image

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Remove a marketing image asset from an RDA by asset_id.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4017-L4024) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "gads_remove_rda_marketing_imageArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_remove_rda_logo-c809fade"></a>

## gads_remove_rda_logo

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Remove a logo asset from an RDA.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4026-L4033) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "gads_remove_rda_logoArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_remove_rda_youtube_video-1e0a52de"></a>

## gads_remove_rda_youtube_video

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Remove a YouTube video asset from an RDA.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4035-L4042) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "gads_remove_rda_youtube_videoArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_clear_rda_marketing_images-3e3f7c28"></a>

## gads_clear_rda_marketing_images

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Clear all marketing images from an RDA.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4044-L4051) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "gads_clear_rda_marketing_imagesArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_clear_rda_logos-dd16df55"></a>

## gads_clear_rda_logos

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Clear all logos from an RDA.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4053-L4060) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "gads_clear_rda_logosArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_ad_group_negative_keywords-0f19b467"></a>

## gads_list_ad_group_negative_keywords

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List negative keywords on an ad group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4062-L4069) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "gads_list_ad_group_negative_keywordsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_ad_group_placements-e2cc08b5"></a>

## gads_list_ad_group_placements

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List placement criteria on ad group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4071-L4078) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "gads_list_ad_group_placementsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_ad_group_topics-a8038137"></a>

## gads_list_ad_group_topics

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List topic criteria on ad group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4080-L4087) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "gads_list_ad_group_topicsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_ad_group_audiences-c6ba71d8"></a>

## gads_list_ad_group_audiences

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List audience criteria on ad group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4089-L4096) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "gads_list_ad_group_audiencesArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_ad_group_demographic_bids-4ad3d3d9"></a>

## gads_list_ad_group_demographic_bids

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List age/gender/parental/income demographic criteria with bid modifiers.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4098-L4105) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "gads_list_ad_group_demographic_bidsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_add_ad_group_negative_placement-d87e66f7"></a>

## gads_add_ad_group_negative_placement

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Add negative placement (URL) to ad group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4107-L4114) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "gads_add_ad_group_negative_placementArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_add_ad_group_negative_topic-1f2daf79"></a>

## gads_add_ad_group_negative_topic

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Add negative topic to ad group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4116-L4123) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "gads_add_ad_group_negative_topicArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_add_ad_group_income_range-ffdd2c4b"></a>

## gads_add_ad_group_income_range

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Add income_range criterion. type enum e.g. INCOME_RANGE_0_50, INCOME_RANGE_50_60, INCOME_RANGE_60_70, INCOME_RANGE_70_80, INCOME_RANGE_80_90, INCOME_RANGE_90_UP, INCOME_RANGE_UNDETERMINED.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4125-L4132) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "gads_add_ad_group_income_rangeArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_add_ad_group_parental_status-921d1214"></a>

## gads_add_ad_group_parental_status

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Add parental_status criterion: PARENT, NOT_A_PARENT, UNDETERMINED.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4134-L4141) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "gads_add_ad_group_parental_statusArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_add_ad_group_proximity-0205c501"></a>

## gads_add_ad_group_proximity

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Add proximity (lat/lng + radius) targeting to ad group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4143-L4150) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "gads_add_ad_group_proximityArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_ad_group_rotation-2e02ca36"></a>

## gads_set_ad_group_rotation

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set ad rotation mode: OPTIMIZE or ROTATE_FOREVER.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4152-L4159) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "gads_set_ad_group_rotationArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_ad_group_tracking_template-4f89dc97"></a>

## gads_set_ad_group_tracking_template

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set ad group tracking_url_template.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4161-L4168) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "gads_set_ad_group_tracking_templateArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_add_campaign_placement-6ac6beb2"></a>

## gads_add_campaign_placement

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Add placement (URL) targeting to campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4170-L4177) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "gads_add_campaign_placementArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_add_campaign_negative_placement-66aa86a6"></a>

## gads_add_campaign_negative_placement

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Add negative placement to campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4179-L4186) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "gads_add_campaign_negative_placementArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_add_campaign_topic-ad428000"></a>

## gads_add_campaign_topic

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Add topic targeting to campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4188-L4195) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "gads_add_campaign_topicArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_campaign_criteria-462c7e71"></a>

## gads_list_campaign_criteria

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List all criteria on a campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4197-L4204) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "gads_list_campaign_criteriaArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_campaign_negative_keywords-60fedf1b"></a>

## gads_list_campaign_negative_keywords

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List negative keywords on a campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4206-L4213) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "gads_list_campaign_negative_keywordsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_remove_campaign_criterion-87d556d8"></a>

## gads_remove_campaign_criterion

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Remove a campaign criterion by its criterion_id.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4215-L4222) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "gads_remove_campaign_criterionArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_asset_group_path1-f826b788"></a>

## gads_set_asset_group_path1

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set path1 (display URL first path segment) on asset group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4224-L4231) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "gads_set_asset_group_path1Arguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_asset_group_path2-eaf5dcff"></a>

## gads_set_asset_group_path2

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set path2 on asset group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4233-L4240) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "gads_set_asset_group_path2Arguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_asset_groups_by_status-03122e23"></a>

## gads_list_asset_groups_by_status

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List asset groups filtered by status (ENABLED/PAUSED/REMOVED).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4242-L4249) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "gads_list_asset_groups_by_statusArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_asset_group_metrics-78f3fc7c"></a>

## gads_get_asset_group_metrics

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get performance metrics for an asset group in given date range.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4251-L4258) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "gads_get_asset_group_metricsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_assets_by_type-f63f1add"></a>

## gads_list_assets_by_type

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List assets filtered by type (IMAGE, TEXT, YOUTUBE_VIDEO, MEDIA_BUNDLE, etc.).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4260-L4267) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "gads_list_assets_by_typeArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_unused_assets-40d5fe3d"></a>

## gads_list_unused_assets

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List assets not linked to any campaign, ad group, customer, or asset group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4269-L4276) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "gads_list_unused_assetsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_bulk_update_ad_status-7a7b5442"></a>

## gads_bulk_update_ad_status

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Bulk set status (ENABLED/PAUSED/REMOVED) on many ads.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4278-L4285) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "gads_bulk_update_ad_statusArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_bulk_rename_ads-19672dd3"></a>

## gads_bulk_rename_ads

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Bulk set ad.name for many ads.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4287-L4294) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "gads_bulk_rename_adsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_bulk_update_ad_group_status-f5eff15b"></a>

## gads_bulk_update_ad_group_status

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Bulk set ad group status.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4296-L4303) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "gads_bulk_update_ad_group_statusArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_bulk_update_campaign_status-c3da85f0"></a>

## gads_bulk_update_campaign_status

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Bulk set campaign status.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4305-L4312) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "gads_bulk_update_campaign_statusArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_move_rsa_headline-4f3c0812"></a>

## gads_move_rsa_headline

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Reorder an RSA headline (swap asset at from_index with to_index).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4314-L4321) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "gads_move_rsa_headlineArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_ad_conversion_breakdown-21ffa363"></a>

## gads_get_ad_conversion_breakdown

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Per-conversion-action breakdown for an ad in a date range.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4323-L4330) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "gads_get_ad_conversion_breakdownArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_ad_device_preference-998211ee"></a>

## gads_set_ad_device_preference

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set ad.device_preference to MOBILE or UNSPECIFIED (clear).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4332-L4339) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "gads_set_ad_device_preferenceArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_bulk_remove_ads-10f4be57"></a>

## gads_bulk_remove_ads

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Permanently remove multiple ads in one call. Provide array of {ad_id, ad_group_id}.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4341-L4355) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ads": {
      "default": null,
      "items": {},
      "title": "Ads",
      "type": "array"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_bulk_remove_adsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_ads_by_status-3003720c"></a>

## gads_list_ads_by_status

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List ads filtered by status (ENABLED/PAUSED/REMOVED). Optional campaign_id / ad_group_id filter.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4357-L4377) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "status": {
      "title": "Status",
      "type": "string"
    },
    "campaign_id": {
      "default": null,
      "title": "Campaign Id",
      "type": "string"
    },
    "ad_group_id": {
      "default": null,
      "title": "Ad Group Id",
      "type": "string"
    },
    "limit": {
      "default": null,
      "title": "Limit",
      "type": "integer"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "status"
  ],
  "title": "gads_list_ads_by_statusArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_ads_by_policy_status-334cd478"></a>

## gads_list_ads_by_policy_status

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List ads filtered by policy approval status (APPROVED / DISAPPROVED / APPROVED_LIMITED / AREA_OF_INTEREST_ONLY / SITE_SUSPENDED).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4379-L4396) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "approval_status": {
      "title": "Approval Status",
      "type": "string"
    },
    "campaign_id": {
      "default": null,
      "title": "Campaign Id",
      "type": "string"
    },
    "limit": {
      "default": null,
      "title": "Limit",
      "type": "integer"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "approval_status"
  ],
  "title": "gads_list_ads_by_policy_statusArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_ads_by_ad_strength-c942fe1d"></a>

## gads_list_ads_by_ad_strength

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List ads filtered by ad strength (POOR / AVERAGE / GOOD / EXCELLENT / PENDING / NO_ADS). Useful to find weak RSAs to improve.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4398-L4415) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_strength": {
      "title": "Ad Strength",
      "type": "string"
    },
    "campaign_id": {
      "default": null,
      "title": "Campaign Id",
      "type": "string"
    },
    "limit": {
      "default": null,
      "title": "Limit",
      "type": "integer"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_strength"
  ],
  "title": "gads_list_ads_by_ad_strengthArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_ads_by_label-64a054c4"></a>

## gads_list_ads_by_label

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List ads that have a specific label attached.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4417-L4432) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "label_id": {
      "title": "Label Id",
      "type": "string"
    },
    "limit": {
      "default": null,
      "title": "Limit",
      "type": "integer"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "label_id"
  ],
  "title": "gads_list_ads_by_labelArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_search_ads_by_text-2e93dff8"></a>

## gads_search_ads_by_text

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Search ads containing specific text in any RSA headline or description. Matches case-insensitively using CONTAINS.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4434-L4451) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "search_text": {
      "title": "Search Text",
      "type": "string"
    },
    "campaign_id": {
      "default": null,
      "title": "Campaign Id",
      "type": "string"
    },
    "limit": {
      "default": null,
      "title": "Limit",
      "type": "integer"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "search_text"
  ],
  "title": "gads_search_ads_by_textArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_ad_change_history-de1b0539"></a>

## gads_get_ad_change_history

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get change events (creates, updates, status changes) for an ad within a date range (up to 14 days back).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4453-L4473) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_id": {
      "title": "Ad Id",
      "type": "string"
    },
    "ad_group_id": {
      "title": "Ad Group Id",
      "type": "string"
    },
    "start_date": {
      "title": "Start Date",
      "type": "string"
    },
    "end_date": {
      "title": "End Date",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_id",
    "ad_group_id",
    "start_date",
    "end_date"
  ],
  "title": "gads_get_ad_change_historyArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_copy_ad_to_ad_groups-ba50deca"></a>

## gads_copy_ad_to_ad_groups

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Copy an existing ad to multiple destination ad groups. Works for RSA and RDA. Returns new ad resource names.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4475-L4491) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "source_ad_id": {
      "title": "Source Ad Id",
      "type": "string"
    },
    "source_ad_group_id": {
      "title": "Source Ad Group Id",
      "type": "string"
    },
    "destination_ad_group_ids": {
      "items": {},
      "title": "Destination Ad Group Ids",
      "type": "array"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "source_ad_id",
    "source_ad_group_id",
    "destination_ad_group_ids"
  ],
  "title": "gads_copy_ad_to_ad_groupsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_apply_label_to_ad-436e6873"></a>

## gads_apply_label_to_ad

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Attach a label to a specific ad.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4493-L4508) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_id": {
      "title": "Ad Id",
      "type": "string"
    },
    "ad_group_id": {
      "title": "Ad Group Id",
      "type": "string"
    },
    "label_id": {
      "title": "Label Id",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_id",
    "ad_group_id",
    "label_id"
  ],
  "title": "gads_apply_label_to_adArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_remove_label_from_ad-65442ec8"></a>

## gads_remove_label_from_ad

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Detach a label from an ad.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4510-L4525) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_id": {
      "title": "Ad Id",
      "type": "string"
    },
    "ad_group_id": {
      "title": "Ad Group Id",
      "type": "string"
    },
    "label_id": {
      "title": "Label Id",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_id",
    "ad_group_id",
    "label_id"
  ],
  "title": "gads_remove_label_from_adArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_apply_label_to_ad_group-bfd3e162"></a>

## gads_apply_label_to_ad_group

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Attach a label to an ad group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4527-L4541) · Schema: tools/list.

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
    "label_id": {
      "title": "Label Id",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "label_id"
  ],
  "title": "gads_apply_label_to_ad_groupArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_remove_label_from_ad_group-e4468b46"></a>

## gads_remove_label_from_ad_group

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Detach a label from an ad group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4543-L4557) · Schema: tools/list.

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
    "label_id": {
      "title": "Label Id",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "label_id"
  ],
  "title": "gads_remove_label_from_ad_groupArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_apply_label_to_campaign-4057c808"></a>

## gads_apply_label_to_campaign

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Attach a label to a campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4559-L4573) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "label_id": {
      "title": "Label Id",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id",
    "label_id"
  ],
  "title": "gads_apply_label_to_campaignArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_remove_label_from_campaign-116c624a"></a>

## gads_remove_label_from_campaign

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Detach a label from a campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4575-L4589) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "label_id": {
      "title": "Label Id",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id",
    "label_id"
  ],
  "title": "gads_remove_label_from_campaignArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_update_label-7a3611e8"></a>

## gads_update_label

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, svc.label\_path, op.update\_mask.CopyFrom, svc.mutate\_labels, paths.append.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Update a label (name, background_color, description).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4591-L4622) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "label_id": {
      "title": "Label Id",
      "type": "string"
    },
    "name": {
      "default": null,
      "title": "Name",
      "type": "string"
    },
    "background_color": {
      "default": null,
      "title": "Background Color",
      "type": "string"
    },
    "description": {
      "default": null,
      "title": "Description",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "label_id"
  ],
  "title": "gads_update_labelArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_remove_label-d56d8b20"></a>

## gads_remove_label

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, svc.label\_path, svc.mutate\_labels.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Permanently remove a label (detaches from all entities).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4624-L4638) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "label_id": {
      "title": "Label Id",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "label_id"
  ],
  "title": "gads_remove_labelArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_attach_asset_to_ad_group-a51361c2"></a>

## gads_attach_asset_to_ad_group

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Attach an existing asset to an ad group with a specific field type (SITELINK, CALLOUT, STRUCTURED_SNIPPET, CALL, PROMOTION, PRICE, HOTEL_CALLOUT, LEAD_FORM, LOGO).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4640-L4655) · Schema: tools/list.

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
    "asset_id": {
      "title": "Asset Id",
      "type": "string"
    },
    "field_type": {
      "title": "Field Type",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "asset_id",
    "field_type"
  ],
  "title": "gads_attach_asset_to_ad_groupArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_detach_asset_from_ad_group-7a5dc8bc"></a>

## gads_detach_asset_from_ad_group

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Detach an asset from an ad group by resource name.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4657-L4670) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_group_asset_resource_name": {
      "title": "Ad Group Asset Resource Name",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_asset_resource_name"
  ],
  "title": "gads_detach_asset_from_ad_groupArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_attach_asset_to_customer-05166bef"></a>

## gads_attach_asset_to_customer

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Attach an asset at the customer (account) level. Used mostly for account-wide sitelinks, callouts.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4672-L4686) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "asset_id": {
      "title": "Asset Id",
      "type": "string"
    },
    "field_type": {
      "title": "Field Type",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "asset_id",
    "field_type"
  ],
  "title": "gads_attach_asset_to_customerArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_detach_asset_from_customer-d3b2b29b"></a>

## gads_detach_asset_from_customer

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Detach an account-level asset by resource name.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4688-L4701) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "customer_asset_resource_name": {
      "title": "Customer Asset Resource Name",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "customer_asset_resource_name"
  ],
  "title": "gads_detach_asset_from_customerArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_customer_assets-4cf0d7d2"></a>

## gads_list_customer_assets

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List assets attached at the customer (account) level.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4703-L4715) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_list_customer_assetsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_pause_ad_group_asset-16573aa6"></a>

## gads_pause_ad_group_asset

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Pause an ad-group-level asset link by its resource name.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4717-L4730) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_group_asset_resource_name": {
      "title": "Ad Group Asset Resource Name",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_asset_resource_name"
  ],
  "title": "gads_pause_ad_group_assetArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_enable_ad_group_asset-f4eab7e9"></a>

## gads_enable_ad_group_asset

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Enable an ad-group-level asset link.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4732-L4745) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_group_asset_resource_name": {
      "title": "Ad Group Asset Resource Name",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_asset_resource_name"
  ],
  "title": "gads_enable_ad_group_assetArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_pause_campaign_asset-9449c826"></a>

## gads_pause_campaign_asset

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Pause a campaign-level asset link.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4747-L4760) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_asset_resource_name": {
      "title": "Campaign Asset Resource Name",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_asset_resource_name"
  ],
  "title": "gads_pause_campaign_assetArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_enable_campaign_asset-7a74c3d1"></a>

## gads_enable_campaign_asset

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Enable a campaign-level asset link.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4762-L4775) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_asset_resource_name": {
      "title": "Campaign Asset Resource Name",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_asset_resource_name"
  ],
  "title": "gads_enable_campaign_assetArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_skippable_in_stream_ad-ad0a4457"></a>

## gads_create_skippable_in_stream_ad

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a skippable in-stream TrueView video ad. Has action call-out overlay.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4777-L4795) · Schema: tools/list.

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
    "youtube_video_asset_id": {
      "title": "Youtube Video Asset Id",
      "type": "string"
    },
    "action_headline": {
      "default": null,
      "title": "Action Headline",
      "type": "string"
    },
    "action_button_label": {
      "default": null,
      "title": "Action Button Label",
      "type": "string"
    },
    "final_urls": {
      "default": null,
      "items": {},
      "title": "Final Urls",
      "type": "array"
    },
    "companion_banner_image_asset_id": {
      "default": null,
      "title": "Companion Banner Image Asset Id",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "youtube_video_asset_id"
  ],
  "title": "gads_create_skippable_in_stream_adArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_masthead_ad-d3b92622"></a>

## gads_create_masthead_ad

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a YouTube Masthead ad (premium homepage placement; usually reserved via sales).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4797-L4815) · Schema: tools/list.

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
    "youtube_video_asset_id": {
      "title": "Youtube Video Asset Id",
      "type": "string"
    },
    "headline": {
      "default": null,
      "title": "Headline",
      "type": "string"
    },
    "description": {
      "default": null,
      "title": "Description",
      "type": "string"
    },
    "call_to_action_button_label": {
      "default": null,
      "title": "Call To Action Button Label",
      "type": "string"
    },
    "final_urls": {
      "default": null,
      "items": {},
      "title": "Final Urls",
      "type": "array"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "youtube_video_asset_id"
  ],
  "title": "gads_create_masthead_adArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_responsive_video_ad-b406c17f"></a>

## gads_create_responsive_video_ad

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a Video Responsive Ad — multi-headline, multi-description, multi-CTA format that Google auto-assembles into in-stream, shorts, in-feed placements.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4817-L4839) · Schema: tools/list.

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
    "youtube_video_asset_ids": {
      "items": {},
      "title": "Youtube Video Asset Ids",
      "type": "array"
    },
    "headlines": {
      "default": null,
      "items": {},
      "title": "Headlines",
      "type": "array"
    },
    "long_headlines": {
      "default": null,
      "items": {},
      "title": "Long Headlines",
      "type": "array"
    },
    "descriptions": {
      "default": null,
      "items": {},
      "title": "Descriptions",
      "type": "array"
    },
    "call_to_actions": {
      "default": null,
      "items": {},
      "title": "Call To Actions",
      "type": "array"
    },
    "companion_banner_image_asset_ids": {
      "default": null,
      "items": {},
      "title": "Companion Banner Image Asset Ids",
      "type": "array"
    },
    "final_urls": {
      "default": null,
      "items": {},
      "title": "Final Urls",
      "type": "array"
    },
    "breadcrumb1": {
      "default": null,
      "title": "Breadcrumb1",
      "type": "string"
    },
    "breadcrumb2": {
      "default": null,
      "title": "Breadcrumb2",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "youtube_video_asset_ids"
  ],
  "title": "gads_create_responsive_video_adArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_in_stream_shopping_ad-2115486d"></a>

## gads_create_in_stream_shopping_ad

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create an in-stream video ad with product listing overlay (shopping + video).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4841-L4856) · Schema: tools/list.

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
    "youtube_video_asset_id": {
      "title": "Youtube Video Asset Id",
      "type": "string"
    },
    "final_urls": {
      "default": null,
      "items": {},
      "title": "Final Urls",
      "type": "array"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "youtube_video_asset_id"
  ],
  "title": "gads_create_in_stream_shopping_adArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_disapproved_ads-d9eef6de"></a>

## gads_list_disapproved_ads

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List all disapproved ads in the account with their policy-topic reasons.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4858-L4871) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "default": null,
      "title": "Campaign Id",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_list_disapproved_adsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_limited_approval_ads-18c74b22"></a>

## gads_list_limited_approval_ads

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List ads with APPROVED_LIMITED policy status (serving but with restrictions).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4873-L4885) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_list_limited_approval_adsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_ad_groups_without_rsa-12e010f9"></a>

## gads_list_ad_groups_without_rsa

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Find ad groups that have no active RSA ad (gaps to fill).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4887-L4900) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "default": null,
      "title": "Campaign Id",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_list_ad_groups_without_rsaArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_compare_ad_performance-40b04da6"></a>

## gads_compare_ad_performance

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Compare performance metrics side-by-side for multiple ads over a date range. Returns conversion rate, CTR, CPA per ad.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4902-L4917) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_ids": {
      "items": {},
      "title": "Ad Ids",
      "type": "array"
    },
    "start_date": {
      "title": "Start Date",
      "type": "string"
    },
    "end_date": {
      "title": "End Date",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_ids",
    "start_date",
    "end_date"
  ],
  "title": "gads_compare_ad_performanceArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_ad_asset_field_performance-af4c102d"></a>

## gads_get_ad_asset_field_performance

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get performance per field type (HEADLINE_1, HEADLINE_2, DESCRIPTION_1, etc) for an RSA or RDA. Uses ad_group_ad_asset_view.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4919-L4935) · Schema: tools/list.

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
    "ad_group_id": {
      "title": "Ad Group Id",
      "type": "string"
    },
    "start_date": {
      "title": "Start Date",
      "type": "string"
    },
    "end_date": {
      "title": "End Date",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_id",
    "ad_group_id",
    "start_date",
    "end_date"
  ],
  "title": "gads_get_ad_asset_field_performanceArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_rsa_without_pins-6452ef6d"></a>

## gads_list_rsa_without_pins

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Find RSAs in the account that have no pinned headlines or descriptions (fully flexible rotation).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4937-L4950) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "default": null,
      "title": "Campaign Id",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_list_rsa_without_pinsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_bulk_create_rsa-9383b8f8"></a>

## gads_bulk_create_rsa

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create multiple RSAs in one call. Items: {ad_group_id, headlines: [{text,pin?}], descriptions: [...], final_urls, path1?, path2?}.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4952-L4965) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ads": {
      "default": null,
      "items": {},
      "title": "Ads",
      "type": "array"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_bulk_create_rsaArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_bulk_set_ad_final_urls-312f3f58"></a>

## gads_bulk_set_ad_final_urls

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Replace final_urls across multiple ads. Items: [{ad_id, ad_group_id, final_urls}].
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4967-L4980) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "updates": {
      "default": null,
      "items": {},
      "title": "Updates",
      "type": "array"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_bulk_set_ad_final_urlsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_remove_ad_group_criterion-512c10c6"></a>

## gads_remove_ad_group_criterion

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Remove a single ad group criterion by resource name (keyword, topic, placement, gender, age, etc).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4982-L4995) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "criterion_resource_name": {
      "title": "Criterion Resource Name",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "criterion_resource_name"
  ],
  "title": "gads_remove_ad_group_criterionArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_add_ad_group_placement-fcaa8581"></a>

## gads_add_ad_group_placement

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Add a placement criterion (specific URL) to a Display ad group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L4997-L5012) · Schema: tools/list.

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
    "url": {
      "title": "Url",
      "type": "string"
    },
    "cpc_bid_micros": {
      "default": null,
      "title": "Cpc Bid Micros",
      "type": "number"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "url"
  ],
  "title": "gads_add_ad_group_placementArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_add_ad_group_topic-64cc2e42"></a>

## gads_add_ad_group_topic

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Add a topic criterion to a Display ad group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L5014-L5029) · Schema: tools/list.

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
    "topic_constant_id": {
      "title": "Topic Constant Id",
      "type": "string"
    },
    "cpc_bid_micros": {
      "default": null,
      "title": "Cpc Bid Micros",
      "type": "number"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "topic_constant_id"
  ],
  "title": "gads_add_ad_group_topicArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_add_ad_group_gender-b7d72854"></a>

## gads_add_ad_group_gender

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Add a gender targeting criterion (MALE=10, FEMALE=11, UNDETERMINED=20) to an ad group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L5031-L5045) · Schema: tools/list.

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
    "gender": {
      "title": "Gender",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "gender"
  ],
  "title": "gads_add_ad_group_genderArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_add_ad_group_age_range-8a7cf851"></a>

## gads_add_ad_group_age_range

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Add an age range targeting criterion to an ad group. Ranges: AGE_RANGE_18_24, AGE_RANGE_25_34, AGE_RANGE_35_44, AGE_RANGE_45_54, AGE_RANGE_55_64, AGE_RANGE_65_UP, AGE_RANGE_UNDETERMINED.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L5047-L5061) · Schema: tools/list.

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
    "age_range": {
      "title": "Age Range",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "age_range"
  ],
  "title": "gads_add_ad_group_age_rangeArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_add_ad_group_keyword-15bde41a"></a>

## gads_add_ad_group_keyword

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Add a single keyword as a positive targeting criterion to an ad group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L5063-L5079) · Schema: tools/list.

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
    "text": {
      "title": "Text",
      "type": "string"
    },
    "match_type": {
      "title": "Match Type",
      "type": "string"
    },
    "cpc_bid_micros": {
      "default": null,
      "title": "Cpc Bid Micros",
      "type": "number"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "text",
    "match_type"
  ],
  "title": "gads_add_ad_group_keywordArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_add_ad_group_negative_keyword-5d45ce9a"></a>

## gads_add_ad_group_negative_keyword

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Add a negative keyword to an ad group (excludes matching queries).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L5081-L5096) · Schema: tools/list.

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
    "text": {
      "title": "Text",
      "type": "string"
    },
    "match_type": {
      "title": "Match Type",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "text",
    "match_type"
  ],
  "title": "gads_add_ad_group_negative_keywordArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_pause_asset_group_asset-721a4171"></a>

## gads_pause_asset_group_asset

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Pause the link between an asset and an asset group (status only; asset stays in library).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L5098-L5111) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "asset_group_asset_resource_name": {
      "title": "Asset Group Asset Resource Name",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "asset_group_asset_resource_name"
  ],
  "title": "gads_pause_asset_group_assetArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_enable_asset_group_asset-024c3b19"></a>

## gads_enable_asset_group_asset

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Enable the link between an asset and an asset group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L5113-L5126) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "asset_group_asset_resource_name": {
      "title": "Asset Group Asset Resource Name",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "asset_group_asset_resource_name"
  ],
  "title": "gads_enable_asset_group_assetArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_pause_campaign-b62baece"></a>

## gads_pause_campaign

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Pause a campaign by ID.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L5128-L5141) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

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
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id"
  ],
  "title": "gads_pause_campaignArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_remove_campaign-8ea98b47"></a>

## gads_remove_campaign

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Permanently remove a campaign (cannot be undone).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L5143-L5156) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

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
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id"
  ],
  "title": "gads_remove_campaignArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_bulk_pause_campaigns-362acf70"></a>

## gads_bulk_pause_campaigns

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Pause multiple campaigns in one call.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L5158-L5171) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_ids": {
      "items": {},
      "title": "Campaign Ids",
      "type": "array"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_ids"
  ],
  "title": "gads_bulk_pause_campaignsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_bulk_enable_campaigns-f444136e"></a>

## gads_bulk_enable_campaigns

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Enable multiple campaigns in one call.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L5173-L5186) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_ids": {
      "items": {},
      "title": "Campaign Ids",
      "type": "array"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_ids"
  ],
  "title": "gads_bulk_enable_campaignsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_bulk_remove_campaigns-4f61213a"></a>

## gads_bulk_remove_campaigns

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Remove multiple campaigns permanently.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L5188-L5201) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_ids": {
      "items": {},
      "title": "Campaign Ids",
      "type": "array"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_ids"
  ],
  "title": "gads_bulk_remove_campaignsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_bulk_pause_keywords-21d010e1"></a>

## gads_bulk_pause_keywords

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Pause multiple keywords. Items: [{criterion_resource_name}] — use list_keywords to get RNs.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L5203-L5216) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "criterion_resource_names": {
      "items": {},
      "title": "Criterion Resource Names",
      "type": "array"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "criterion_resource_names"
  ],
  "title": "gads_bulk_pause_keywordsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_bulk_enable_keywords-5b3b1ff2"></a>

## gads_bulk_enable_keywords

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Enable multiple keywords in one call.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L5218-L5231) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "criterion_resource_names": {
      "items": {},
      "title": "Criterion Resource Names",
      "type": "array"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "criterion_resource_names"
  ],
  "title": "gads_bulk_enable_keywordsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_bulk_remove_keywords-7a0567fa"></a>

## gads_bulk_remove_keywords

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Permanently remove multiple keywords.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L5233-L5246) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "criterion_resource_names": {
      "items": {},
      "title": "Criterion Resource Names",
      "type": "array"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "criterion_resource_names"
  ],
  "title": "gads_bulk_remove_keywordsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_bulk_update_keyword_bids-eacd8b8a"></a>

## gads_bulk_update_keyword_bids

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Bulk update CPC bids on keywords. Items: [{criterion_resource_name, cpc_bid_micros}].
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L5248-L5261) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "updates": {
      "default": null,
      "items": {},
      "title": "Updates",
      "type": "array"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_bulk_update_keyword_bidsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_ad_group_primary_status-303cedf1"></a>

## gads_get_ad_group_primary_status

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get primary status and reasons (e.g. CAMPAIGN_PAUSED, BUDGET_DEPLETED) for an ad group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L5263-L5276) · Schema: tools/list.

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
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id"
  ],
  "title": "gads_get_ad_group_primary_statusArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_campaign_primary_status-a59d390d"></a>

## gads_get_campaign_primary_status

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get primary serving status and reasons for a campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L5278-L5291) · Schema: tools/list.

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
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id"
  ],
  "title": "gads_get_campaign_primary_statusArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_ad_primary_status-1cf0d5e2"></a>

## gads_get_ad_primary_status

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get primary serving status and reasons for an ad (why it is/is not serving).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L5293-L5307) · Schema: tools/list.

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
    "ad_group_id": {
      "title": "Ad Group Id",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_id",
    "ad_group_id"
  ],
  "title": "gads_get_ad_primary_statusArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_ad_group_criteria-e42d51d2"></a>

## gads_list_ad_group_criteria

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List all criteria on an ad group (keywords, gender, age, placement, topic, userlist, etc) — one call fetches everything.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L5309-L5322) · Schema: tools/list.

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
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id"
  ],
  "title": "gads_list_ad_group_criteriaArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_count_ads_in_campaign-92c2fad7"></a>

## gads_count_ads_in_campaign

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Count ads in a campaign grouped by type and status (fast rollup).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L5324-L5337) · Schema: tools/list.

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
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id"
  ],
  "title": "gads_count_ads_in_campaignArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_update_call_ad-a229cc06"></a>

## gads_update_call_ad

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Update a call ad. Any subset of: business_name, country_code, phone_number, headline1, headline2, description1, description2, final_urls, tracking_template.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L5339-L5360) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_id": {
      "title": "Ad Id",
      "type": "string"
    },
    "ad_group_id": {
      "title": "Ad Group Id",
      "type": "string"
    },
    "business_name": {
      "default": null,
      "title": "Business Name",
      "type": "string"
    },
    "country_code": {
      "default": null,
      "title": "Country Code",
      "type": "string"
    },
    "phone_number": {
      "default": null,
      "title": "Phone Number",
      "type": "string"
    },
    "headline1": {
      "default": null,
      "title": "Headline1",
      "type": "string"
    },
    "headline2": {
      "default": null,
      "title": "Headline2",
      "type": "string"
    },
    "description1": {
      "default": null,
      "title": "Description1",
      "type": "string"
    },
    "description2": {
      "default": null,
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
      "default": null,
      "title": "Tracking Url Template",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_id",
    "ad_group_id"
  ],
  "title": "gads_update_call_adArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_update_app_ad-31417964"></a>

## gads_update_app_ad

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Update an App ad. Supports replacing headlines, descriptions, images, videos, html5 bundles.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L5362-L5379) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_id": {
      "title": "Ad Id",
      "type": "string"
    },
    "ad_group_id": {
      "title": "Ad Group Id",
      "type": "string"
    },
    "headlines": {
      "default": null,
      "items": {},
      "title": "Headlines",
      "type": "array"
    },
    "descriptions": {
      "default": null,
      "items": {},
      "title": "Descriptions",
      "type": "array"
    },
    "image_asset_ids": {
      "default": null,
      "items": {},
      "title": "Image Asset Ids",
      "type": "array"
    },
    "youtube_video_asset_ids": {
      "default": null,
      "items": {},
      "title": "Youtube Video Asset Ids",
      "type": "array"
    },
    "html5_media_bundle_asset_ids": {
      "default": null,
      "items": {},
      "title": "Html5 Media Bundle Asset Ids",
      "type": "array"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_id",
    "ad_group_id"
  ],
  "title": "gads_update_app_adArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_update_hotel_ad-e9e1e18e"></a>

## gads_update_hotel_ad

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Update a Hotel ad. Hotel ads have no editable user fields in most cases; this tool toggles status only.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L5381-L5394) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_id": {
      "title": "Ad Id",
      "type": "string"
    },
    "ad_group_id": {
      "title": "Ad Group Id",
      "type": "string"
    },
    "status": {
      "default": null,
      "title": "Status",
      "type": "number"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_id",
    "ad_group_id"
  ],
  "title": "gads_update_hotel_adArguments",
  "type": "object"
}
```

</details>
