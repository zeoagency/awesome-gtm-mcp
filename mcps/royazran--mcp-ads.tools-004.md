# RoyAzran/mcp-ads: supporting and other-product tools

[Provider inventory](royazran--mcp-ads.md) · [Global tool index](../TOOL_INDEX.md)

Tools 451–600 of 3131. Exact schemas from the same upstream snapshot.

<a id="tool-gads_set_campaign_conversion_goals-46b8b885"></a>

## gads_set_campaign_conversion_goals

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set which conversion actions are biddable goals for a campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L8685-L8698) · Schema: tools/list.

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
    "conversion_action_ids": {
      "items": {},
      "title": "Conversion Action Ids",
      "type": "array"
    },
    "biddable": {
      "default": null,
      "title": "Biddable",
      "type": "boolean"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id",
    "conversion_action_ids"
  ],
  "title": "gads_set_campaign_conversion_goalsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_customer_conversion_goals-d48990af"></a>

## gads_set_customer_conversion_goals

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set which conversion actions are biddable goals at the account level.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L8700-L8711) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "conversion_action_ids": {
      "items": {},
      "title": "Conversion Action Ids",
      "type": "array"
    },
    "biddable": {
      "default": null,
      "title": "Biddable",
      "type": "boolean"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "conversion_action_ids"
  ],
  "title": "gads_set_customer_conversion_goalsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_update_conversion_value_rule-6d35396a"></a>

## gads_update_conversion_value_rule

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Update an existing conversion value rule (value or status).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L8713-L8725) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "rule_id": {
      "title": "Rule Id",
      "type": "string"
    },
    "value": {
      "default": null,
      "title": "Value",
      "type": "number"
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
    "rule_id"
  ],
  "title": "gads_update_conversion_value_ruleArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_upload_offline_conversions-92aecef1"></a>

## gads_upload_offline_conversions

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Upload offline click conversions to Google Ads using GCLIDs.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L8727-L8738) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "conversions": {
      "default": null,
      "items": {},
      "title": "Conversions",
      "type": "array"
    },
    "partial_failure": {
      "default": true,
      "title": "Partial Failure",
      "type": "boolean"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_upload_offline_conversionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_upload_store_conversions-94d5cfef"></a>

## gads_upload_store_conversions

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Upload store conversion data to Google Ads.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L8740-L8750) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "conversions": {
      "default": null,
      "items": {},
      "title": "Conversions",
      "type": "array"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_upload_store_conversionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_customizer_attribute-6f16924d"></a>

## gads_create_customizer_attribute

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a customizer attribute for use in ad copy customization.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L8752-L8763) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "name": {
      "title": "Name",
      "type": "string"
    },
    "type_val": {
      "title": "Type Val",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "name",
    "type_val"
  ],
  "title": "gads_create_customizer_attributeArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_ad_group_criterion_customizer-e5649d0c"></a>

## gads_set_ad_group_criterion_customizer

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set a customizer attribute value for a specific keyword/criterion within an ad group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L8765-L8779) · Schema: tools/list.

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
    "criterion_id": {
      "title": "Criterion Id",
      "type": "string"
    },
    "customizer_attribute_id": {
      "title": "Customizer Attribute Id",
      "type": "string"
    },
    "value": {
      "title": "Value",
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
    "criterion_id",
    "customizer_attribute_id",
    "value"
  ],
  "title": "gads_set_ad_group_criterion_customizerArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_ad_group_customizer-4e1378d2"></a>

## gads_set_ad_group_customizer

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set a customizer attribute value for an ad group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L8781-L8794) · Schema: tools/list.

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
    "customizer_attribute_id": {
      "title": "Customizer Attribute Id",
      "type": "string"
    },
    "value": {
      "title": "Value",
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
    "customizer_attribute_id",
    "value"
  ],
  "title": "gads_set_ad_group_customizerArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_campaign_customizer-624201ab"></a>

## gads_set_campaign_customizer

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set a customizer attribute value for a campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L8796-L8809) · Schema: tools/list.

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
    "customizer_attribute_id": {
      "title": "Customizer Attribute Id",
      "type": "string"
    },
    "value": {
      "title": "Value",
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
    "customizer_attribute_id",
    "value"
  ],
  "title": "gads_set_campaign_customizerArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_customer_customizer-a8f45f90"></a>

## gads_set_customer_customizer

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set a customizer attribute value at the account level.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L8811-L8822) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "customizer_attribute_id": {
      "title": "Customizer Attribute Id",
      "type": "string"
    },
    "value": {
      "title": "Value",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "customizer_attribute_id",
    "value"
  ],
  "title": "gads_set_customer_customizerArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_add_experiment_arm-b254ce4e"></a>

## gads_add_experiment_arm

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Add a new arm to an existing campaign experiment.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L8824-L8838) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "experiment_id": {
      "title": "Experiment Id",
      "type": "string"
    },
    "name": {
      "title": "Name",
      "type": "string"
    },
    "traffic_split": {
      "title": "Traffic Split",
      "type": "number"
    },
    "is_control": {
      "default": null,
      "title": "Is Control",
      "type": "boolean"
    },
    "campaign_ids": {
      "default": null,
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
    "experiment_id",
    "name",
    "traffic_split"
  ],
  "title": "gads_add_experiment_armArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_experiment-540c1755"></a>

## gads_create_experiment

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a campaign experiment (A/B test) with a control and experiment arm.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L8840-L8859) · Schema: tools/list.

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
    "start_date": {
      "title": "Start Date",
      "type": "string"
    },
    "traffic_split_percent": {
      "title": "Traffic Split Percent",
      "type": "number"
    },
    "description": {
      "default": null,
      "title": "Description",
      "type": "string"
    },
    "end_date": {
      "default": null,
      "title": "End Date",
      "type": "string"
    },
    "type_val": {
      "default": null,
      "title": "Type Val",
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
    "name",
    "start_date",
    "traffic_split_percent"
  ],
  "title": "gads_create_experimentArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_end_experiment-4e7157e8"></a>

## gads_end_experiment

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. End a running campaign experiment immediately.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L8861-L8871) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "experiment_id": {
      "title": "Experiment Id",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "experiment_id"
  ],
  "title": "gads_end_experimentArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_experiment_results-52154f4c"></a>

## gads_get_experiment_results

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get performance results for a campaign experiment, comparing control vs experiment arms.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L8873-L8890) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "experiment_id": {
      "title": "Experiment Id",
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
    "experiment_id",
    "start_date",
    "end_date"
  ],
  "title": "gads_get_experiment_resultsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_experiments-59f76bd4"></a>

## gads_list_experiments

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, max, \_search, min, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List campaign experiments with their status and date range. Args: limit: Maximum rows to return. Default 200; raise it if the answer is being cut off.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L8892-L8917) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "limit": {
      "default": 200,
      "title": "Limit",
      "type": "integer"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_list_experimentsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_promote_experiment-f1d63c10"></a>

## gads_promote_experiment

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Promote a campaign experiment — apply its changes to the base campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L8919-L8930) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "experiment_id": {
      "title": "Experiment Id",
      "type": "string"
    },
    "validate_only": {
      "default": null,
      "title": "Validate Only",
      "type": "boolean"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "experiment_id"
  ],
  "title": "gads_promote_experimentArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_schedule_experiment-2f0bc479"></a>

## gads_schedule_experiment

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Schedule a campaign experiment to start on a specific date.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L8932-L8943) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "experiment_id": {
      "title": "Experiment Id",
      "type": "string"
    },
    "start_date": {
      "title": "Start Date",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "experiment_id",
    "start_date"
  ],
  "title": "gads_schedule_experimentArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_add_campaign_negative_keyword-ef665981"></a>

## gads_add_campaign_negative_keyword

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Add a negative keyword at the campaign level
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L8945-L8958) · Schema: tools/list.

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
    "campaign_id",
    "text",
    "match_type"
  ],
  "title": "gads_add_campaign_negative_keywordArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_add_keywords_to_shared_list-ec78a72e"></a>

## gads_add_keywords_to_shared_list

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Add negative keywords to a shared negative keyword list
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L8960-L8971) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "shared_set_id": {
      "default": null,
      "title": "Shared Set Id",
      "type": "string"
    },
    "keywords": {
      "default": null,
      "items": {},
      "title": "Keywords",
      "type": "array"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_add_keywords_to_shared_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_attach_shared_list_to_campaign-1c02dd3d"></a>

## gads_attach_shared_list_to_campaign

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Attach a shared negative keyword list to a campaign
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L8973-L8985) · Schema: tools/list.

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
    "shared_set_id": {
      "title": "Shared Set Id",
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
    "shared_set_id"
  ],
  "title": "gads_attach_shared_list_to_campaignArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_shared_negative_list-d51fee64"></a>

## gads_create_shared_negative_list

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a shared negative keyword list that can be attached to multiple campaigns
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L8987-L8998) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "name": {
      "title": "Name",
      "type": "string"
    },
    "type_val": {
      "default": null,
      "title": "Type Val",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "name"
  ],
  "title": "gads_create_shared_negative_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_forecast_keywords-51eb1eba"></a>

## gads_forecast_keywords

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Forecast clicks, impressions, and cost for a list of keywords using Google Keyword Planner
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L9000-L9014) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "keywords": {
      "default": null,
      "items": {},
      "title": "Keywords",
      "type": "array"
    },
    "daily_budget": {
      "default": null,
      "title": "Daily Budget",
      "type": "number"
    },
    "max_cpc": {
      "default": null,
      "title": "Max Cpc",
      "type": "number"
    },
    "language_id": {
      "default": 1037,
      "title": "Language Id",
      "type": "string"
    },
    "geo_target_ids": {
      "default": null,
      "items": {},
      "title": "Geo Target Ids",
      "type": "array"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_forecast_keywordsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_keyword_details-493ace94"></a>

## gads_get_keyword_details

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get full details and performance metrics for a specific keyword
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L9016-L9048) · Schema: tools/list.

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
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "criterion_id"
  ],
  "title": "gads_get_keyword_detailsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_keyword_ideas-4aee9027"></a>

## gads_get_keyword_ideas

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Generate keyword ideas from seed keywords or URLs using Google Keyword Planner
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L9050-L9064) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "seed_keywords": {
      "default": null,
      "items": {},
      "title": "Seed Keywords",
      "type": "array"
    },
    "seed_urls": {
      "default": null,
      "items": {},
      "title": "Seed Urls",
      "type": "array"
    },
    "language_id": {
      "default": 1037,
      "title": "Language Id",
      "type": "string"
    },
    "geo_target_ids": {
      "default": null,
      "items": {},
      "title": "Geo Target Ids",
      "type": "array"
    },
    "include_adult_keywords": {
      "default": false,
      "title": "Include Adult Keywords",
      "type": "boolean"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_get_keyword_ideasArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_keywords-418b7edb"></a>

## gads_list_keywords

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List keywords across ad groups and campaigns with optional filters
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L9066-L9098) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_group_id": {
      "default": null,
      "title": "Ad Group Id",
      "type": "string"
    },
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
    "include_negatives": {
      "default": false,
      "title": "Include Negatives",
      "type": "boolean"
    },
    "limit": {
      "default": 200,
      "title": "Limit",
      "type": "integer"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_list_keywordsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_negative_keywords-57cf6121"></a>

## gads_list_negative_keywords

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List negative keywords at campaign and/or ad group level
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L9100-L9114) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

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
    "ad_group_id": {
      "default": null,
      "title": "Ad Group Id",
      "type": "string"
    },
    "limit": {
      "default": 100,
      "title": "Limit",
      "type": "integer"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_list_negative_keywordsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_shared_lists-85802026"></a>

## gads_list_shared_lists

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List shared negative keyword lists in the account
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L9116-L9137) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "type_val": {
      "default": null,
      "title": "Type Val",
      "type": "string"
    },
    "limit": {
      "default": 50,
      "title": "Limit",
      "type": "integer"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_list_shared_listsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_remove_campaign_negative_keyword-7ff6d483"></a>

## gads_remove_campaign_negative_keyword

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Remove a negative keyword from a campaign
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L9139-L9151) · Schema: tools/list.

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
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id",
    "criterion_id"
  ],
  "title": "gads_remove_campaign_negative_keywordArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_remove_keyword-7d000a9b"></a>

## gads_remove_keyword

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Remove (delete) a keyword from an ad group
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L9153-L9165) · Schema: tools/list.

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
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "criterion_id"
  ],
  "title": "gads_remove_keywordArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_update_keyword-33f6048f"></a>

## gads_update_keyword

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Update a keyword status, CPC bid, or final URLs
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L9167-L9182) · Schema: tools/list.

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
    "criterion_id": {
      "title": "Criterion Id",
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
    "criterion_id"
  ],
  "title": "gads_update_keywordArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_add_conversion_call_adjustments-1f883e4a"></a>

## gads_add_conversion_call_adjustments

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Upload call conversion adjustments (retract, restate, or enhance call conversions).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L9184-L9195) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "adjustments": {
      "default": null,
      "items": {},
      "title": "Adjustments",
      "type": "array"
    },
    "partial_failure": {
      "default": null,
      "title": "Partial Failure",
      "type": "boolean"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_add_conversion_call_adjustmentsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_offline_user_data_job-fd998ec8"></a>

## gads_create_offline_user_data_job

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create an offline user data job for Customer Match uploads.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L9197-L9209) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "job_type": {
      "title": "Job Type",
      "type": "string"
    },
    "user_list_id": {
      "default": null,
      "title": "User List Id",
      "type": "string"
    },
    "external_id": {
      "default": null,
      "title": "External Id",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "job_type"
  ],
  "title": "gads_create_offline_user_data_jobArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_upload_enhanced_conversions-9fa2aa57"></a>

## gads_upload_enhanced_conversions

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Upload enhanced conversions with hashed user PII (email, phone, address) for improved measurement accuracy.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L9211-L9223) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "conversions": {
      "default": null,
      "items": {},
      "title": "Conversions",
      "type": "array"
    },
    "partial_failure": {
      "default": null,
      "title": "Partial Failure",
      "type": "boolean"
    },
    "validate_only": {
      "default": null,
      "title": "Validate Only",
      "type": "boolean"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_upload_enhanced_conversionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_forecast_reach-5b8c55b8"></a>

## gads_forecast_reach

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Forecast reach and impressions for a video/display campaign with given budget and targeting.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L9225-L9240) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "budget_micros": {
      "title": "Budget Micros",
      "type": "number"
    },
    "start_date": {
      "title": "Start Date",
      "type": "string"
    },
    "end_date": {
      "title": "End Date",
      "type": "string"
    },
    "targeting": {
      "additionalProperties": true,
      "default": null,
      "title": "Targeting",
      "type": "object"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "budget_micros",
    "start_date",
    "end_date"
  ],
  "title": "gads_forecast_reachArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_generate_audience_insights-8f09bb95"></a>

## gads_generate_audience_insights

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, params.user\_list\_ids.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get audience composition insights for specified user lists.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L9242-L9257) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "user_list_ids": {
      "default": null,
      "items": {},
      "title": "User List Ids",
      "type": "array"
    },
    "user_interest_ids": {
      "default": null,
      "items": {},
      "title": "User Interest Ids",
      "type": "array"
    },
    "dimensions": {
      "default": null,
      "items": {},
      "title": "Dimensions",
      "type": "array"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_generate_audience_insightsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_generate_keyword_ideas-cb421543"></a>

## gads_generate_keyword_ideas

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Generate keyword ideas with monthly search volume and bid estimates from seed keywords or URLs.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L9259-L9273) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "seed_keywords": {
      "default": null,
      "items": {},
      "title": "Seed Keywords",
      "type": "array"
    },
    "seed_urls": {
      "default": null,
      "items": {},
      "title": "Seed Urls",
      "type": "array"
    },
    "language_id": {
      "default": null,
      "title": "Language Id",
      "type": "string"
    },
    "geo_target_ids": {
      "default": null,
      "items": {},
      "title": "Geo Target Ids",
      "type": "array"
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
  "title": "gads_generate_keyword_ideasArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_ad_strength_forecast-fadd7781"></a>

## gads_get_ad_strength_forecast

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Analyze ad copy and forecast Responsive Search Ad strength (POOR/AVERAGE/GOOD/EXCELLENT) with improvement suggestions.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L9275-L9287) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "headlines": {
      "items": {},
      "title": "Headlines",
      "type": "array"
    },
    "descriptions": {
      "items": {},
      "title": "Descriptions",
      "type": "array"
    },
    "final_url": {
      "title": "Final Url",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "headlines",
    "descriptions",
    "final_url"
  ],
  "title": "gads_get_ad_strength_forecastArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_plan_keyword_campaign-b171ee6e"></a>

## gads_plan_keyword_campaign

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a keyword plan and get click/impression/cost forecasts for a set of keywords.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L9289-L9302) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "keywords": {
      "items": {},
      "title": "Keywords",
      "type": "array"
    },
    "daily_budget": {
      "title": "Daily Budget",
      "type": "number"
    },
    "language_id": {
      "default": null,
      "title": "Language Id",
      "type": "string"
    },
    "geo_target_ids": {
      "default": null,
      "items": {},
      "title": "Geo Target Ids",
      "type": "array"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "keywords",
    "daily_budget"
  ],
  "title": "gads_plan_keyword_campaignArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_generate_recommendations-18c5b6f0"></a>

## gads_generate_recommendations

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Generate and list recommendations for specified recommendation types.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L9304-L9318) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "recommendation_types": {
      "items": {},
      "title": "Recommendation Types",
      "type": "array"
    },
    "advertising_channel_type": {
      "default": null,
      "title": "Advertising Channel Type",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "recommendation_types"
  ],
  "title": "gads_generate_recommendationsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_recommendations-f34e71b6"></a>

## gads_list_recommendations

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, max, \_search, min, ', '.join, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List Google Ads recommendations currently offered for the account. Args: types: Optional list of recommendation types to restrict to, e.g. ["CAMPAIGN_BUDGET", "KEYWORD", "TARGET_CPA_OPT_IN"]. limit: Maximum rows to return. Default 200; raise it if the answer is being cut off.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L9320-L9349) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "types": {
      "default": null,
      "items": {},
      "title": "Types",
      "type": "array"
    },
    "limit": {
      "default": 200,
      "title": "Limit",
      "type": "integer"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_list_recommendationsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_subscribe_to_recommendation_type-63c3a41e"></a>

## gads_subscribe_to_recommendation_type

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Subscribe to auto-apply a specific recommendation type.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L9351-L9361) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "recommendation_type": {
      "title": "Recommendation Type",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "recommendation_type"
  ],
  "title": "gads_subscribe_to_recommendation_typeArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_unsubscribe_from_recommendation_type-dba48002"></a>

## gads_unsubscribe_from_recommendation_type

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Unsubscribe from auto-applying a specific recommendation type.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L9363-L9373) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "recommendation_type": {
      "title": "Recommendation Type",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "recommendation_type"
  ],
  "title": "gads_unsubscribe_from_recommendation_typeArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_age_range_report-9ac01e97"></a>

## gads_get_age_range_report

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get performance breakdown by age range demographic.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L9375-L9397) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

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
    "start_date",
    "end_date"
  ],
  "title": "gads_get_age_range_reportArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_auction_insights-a3cc15b7"></a>

## gads_get_auction_insights

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get auction insights showing how you compete against other advertisers in the same auctions.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L9399-L9425) · Schema: tools/list.

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
  "title": "gads_get_auction_insightsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_campaign_search_term_insights-2fef3b33"></a>

## gads_get_campaign_search_term_insights

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict, str(campaign\_id).strip.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get search term insights (search categories) for a campaign — works for Performance Max. Uses campaign_search_term_insight, which is the only resource that reports search data for Performance Max; search_term_view returns zero rows for PMax. Note Google exposes a search *category* here rather than the raw query, and provides no cost or CPC (not selectable on this resource). For exact queries with spend on Search/Shopping campaigns, use google_ads_search_terms instead.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L9427-L9457) · Schema: tools/list.

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
    "campaign_id",
    "start_date",
    "end_date"
  ],
  "title": "gads_get_campaign_search_term_insightsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_change_event_log-e9045b01"></a>

## gads_get_change_event_log

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get change event log showing what was changed, by whom, and when.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L9459-L9479) · Schema: tools/list.

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
  "title": "gads_get_change_event_logArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_change_status_report-2761244e"></a>

## gads_get_change_status_report

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get change status report showing last modification time for account resources.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L9481-L9501) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

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
  "title": "gads_get_change_status_reportArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_click_view_report-a2da9765"></a>

## gads_get_click_view_report

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get individual click-level data including GCLIDs for a specific date.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L9503-L9521) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "date": {
      "title": "Date",
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
    "date"
  ],
  "title": "gads_get_click_view_reportArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_content_suitability_report-fbf28a7c"></a>

## gads_get_content_suitability_report

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get content suitability and topic targeting performance report.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L9523-L9541) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

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
  "title": "gads_get_content_suitability_reportArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_distance_report-a9989a0b"></a>

## gads_get_distance_report

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get performance breakdown by distance from business location (distance_view).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L9543-L9565) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

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
    "start_date",
    "end_date"
  ],
  "title": "gads_get_distance_reportArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_dynamic_search_ads_report-8a460f56"></a>

## gads_get_dynamic_search_ads_report

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get Dynamic Search Ads performance report with auto-generated headlines and landing pages.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L9567-L9591) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

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
    "start_date",
    "end_date"
  ],
  "title": "gads_get_dynamic_search_ads_reportArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_gender_report-1daeacce"></a>

## gads_get_gender_report

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get performance breakdown by gender demographic.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L9593-L9614) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

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
    "start_date",
    "end_date"
  ],
  "title": "gads_get_gender_reportArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_hotel_performance_report-0f8c9193"></a>

## gads_get_hotel_performance_report

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get hotel campaign performance report.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L9616-L9636) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

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
  "title": "gads_get_hotel_performance_reportArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_income_range_report-0cace19b"></a>

## gads_get_income_range_report

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get performance breakdown by household income range.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L9638-L9658) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

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
    "start_date",
    "end_date"
  ],
  "title": "gads_get_income_range_reportArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_paid_organic_report-9ed8dd4a"></a>

## gads_get_paid_organic_report

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get paid vs organic search comparison report.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L9660-L9681) · Schema: tools/list.

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
  "title": "gads_get_paid_organic_reportArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_parental_status_report-710f23a3"></a>

## gads_get_parental_status_report

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get performance breakdown by parental status demographic.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L9683-L9703) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

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
    "start_date",
    "end_date"
  ],
  "title": "gads_get_parental_status_reportArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_per_store_view-42256a7c"></a>

## gads_get_per_store_view

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get store visit metrics per physical store location.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L9705-L9723) · Schema: tools/list.

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
  "title": "gads_get_per_store_viewArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_placement_report-94765ef0"></a>

## gads_get_placement_report

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get display/video placement performance report showing where ads appeared.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L9725-L9747) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

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
    "start_date",
    "end_date"
  ],
  "title": "gads_get_placement_reportArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_search_term_insights-4ac847af"></a>

## gads_get_search_term_insights

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get search term performance report with clicks, impressions, cost, and conversions.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L9749-L9773) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

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
    "start_date",
    "end_date"
  ],
  "title": "gads_get_search_term_insightsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_run_custom_report-7e95762c"></a>

## gads_run_custom_report

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, (gaql\_query or '').strip, \_search, query.upper().startswith, \_row\_to\_dict, query.upper.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Run an arbitrary GAQL query and return its rows. The escape hatch for anything the named tools do not cover. GAQL is a read-only language -- no GAQL statement changes an account -- so this cannot mutate anything regardless of what is passed. Args: gaql_query: A full GAQL query, e.g. "SELECT campaign.name, metrics.clicks FROM campaign WHERE segments.date DURING LAST_7_DAYS".
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L9775-L9805) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "gaql_query": {
      "title": "Gaql Query",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "gaql_query"
  ],
  "title": "gads_run_custom_reportArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_product_listing_group-63af494c"></a>

## gads_create_product_listing_group

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a product listing group criterion for a shopping ad group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L9807-L9822) · Schema: tools/list.

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
    "listing_group_type": {
      "title": "Listing Group Type",
      "type": "string"
    },
    "parent_criterion_id": {
      "default": null,
      "title": "Parent Criterion Id",
      "type": "string"
    },
    "case_value": {
      "additionalProperties": true,
      "default": null,
      "title": "Case Value",
      "type": "object"
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
    "listing_group_type"
  ],
  "title": "gads_create_product_listing_groupArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_shopping_campaign-645e84ad"></a>

## gads_create_shopping_campaign

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a Google Shopping campaign linked to a Merchant Center account.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L9824-L9839) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "name": {
      "title": "Name",
      "type": "string"
    },
    "budget_amount": {
      "title": "Budget Amount",
      "type": "number"
    },
    "merchant_id": {
      "title": "Merchant Id",
      "type": "string"
    },
    "country_code": {
      "title": "Country Code",
      "type": "string"
    },
    "language_code": {
      "default": null,
      "title": "Language Code",
      "type": "string"
    },
    "priority": {
      "default": null,
      "title": "Priority",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "name",
    "budget_amount",
    "merchant_id",
    "country_code"
  ],
  "title": "gads_create_shopping_campaignArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_shopping_performance-0301d827"></a>

## gads_get_shopping_performance

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get Shopping campaign performance overview.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L9841-L9863) · Schema: tools/list.

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
    "start_date",
    "end_date"
  ],
  "title": "gads_get_shopping_performanceArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_shopping_product_report-2d5ce7a7"></a>

## gads_get_shopping_product_report

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get shopping product performance report with metrics by product item.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L9865-L9895) · Schema: tools/list.

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
    "start_date",
    "end_date"
  ],
  "title": "gads_get_shopping_product_reportArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_link_merchant_center-5c61c5fd"></a>

## gads_link_merchant_center

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Check existing Merchant Center links and get instructions for linking a new Merchant Center account.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L9897-L9907) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "merchant_id": {
      "title": "Merchant Id",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "merchant_id"
  ],
  "title": "gads_link_merchant_centerArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_linked_merchant_centers-4a0e153b"></a>

## gads_list_linked_merchant_centers

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List all Merchant Center accounts linked to this Google Ads account.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L9909-L9918) · Schema: tools/list.

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
  "title": "gads_list_linked_merchant_centersArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_product_groups-9ff0bd5c"></a>

## gads_list_product_groups

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List product listing groups (product groups) for shopping campaigns.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L9920-L9946) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

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
  "title": "gads_list_product_groupsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_update_product_group-185bc0de"></a>

## gads_update_product_group

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Update a product group (listing group) bid or status.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L9948-L9962) · Schema: tools/list.

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
    "criterion_id": {
      "title": "Criterion Id",
      "type": "string"
    },
    "cpc_bid_micros": {
      "default": null,
      "title": "Cpc Bid Micros",
      "type": "number"
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
    "ad_group_id",
    "criterion_id"
  ],
  "title": "gads_update_product_groupArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_smart_campaign-12c56ef8"></a>

## gads_create_smart_campaign

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a Google Smart campaign with ad copy, keyword themes, and geo targeting.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L9964-L9986) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "name": {
      "title": "Name",
      "type": "string"
    },
    "daily_budget": {
      "title": "Daily Budget",
      "type": "number"
    },
    "business_name": {
      "title": "Business Name",
      "type": "string"
    },
    "final_url": {
      "title": "Final Url",
      "type": "string"
    },
    "headline_1": {
      "title": "Headline 1",
      "type": "string"
    },
    "headline_2": {
      "title": "Headline 2",
      "type": "string"
    },
    "headline_3": {
      "title": "Headline 3",
      "type": "string"
    },
    "description_1": {
      "title": "Description 1",
      "type": "string"
    },
    "description_2": {
      "title": "Description 2",
      "type": "string"
    },
    "phone_number": {
      "default": null,
      "title": "Phone Number",
      "type": "string"
    },
    "country_code": {
      "default": null,
      "title": "Country Code",
      "type": "string"
    },
    "geo_target_ids": {
      "default": null,
      "items": {},
      "title": "Geo Target Ids",
      "type": "array"
    },
    "keyword_themes": {
      "default": null,
      "items": {},
      "title": "Keyword Themes",
      "type": "array"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "name",
    "daily_budget",
    "business_name",
    "final_url",
    "headline_1",
    "headline_2",
    "headline_3",
    "description_1",
    "description_2"
  ],
  "title": "gads_create_smart_campaignArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_suggest_smart_campaign_budget-23059537"></a>

## gads_suggest_smart_campaign_budget

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get Smart campaign budget suggestions (low/recommended/high) based on keyword themes and targeting.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L9988-L10002) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "keyword_themes": {
      "items": {},
      "title": "Keyword Themes",
      "type": "array"
    },
    "final_url": {
      "title": "Final Url",
      "type": "string"
    },
    "business_name": {
      "default": null,
      "title": "Business Name",
      "type": "string"
    },
    "geo_target_ids": {
      "default": null,
      "items": {},
      "title": "Geo Target Ids",
      "type": "array"
    },
    "language_code": {
      "default": null,
      "title": "Language Code",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "keyword_themes",
    "final_url"
  ],
  "title": "gads_suggest_smart_campaign_budgetArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_suggest_smart_campaign_keyword_themes-17e75186"></a>

## gads_suggest_smart_campaign_keyword_themes

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Suggest keyword themes for a Smart campaign based on URL, business name, or seed themes.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L10004-L10018) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "final_url": {
      "default": null,
      "title": "Final Url",
      "type": "string"
    },
    "business_name": {
      "default": null,
      "title": "Business Name",
      "type": "string"
    },
    "keyword_themes": {
      "default": null,
      "items": {},
      "title": "Keyword Themes",
      "type": "array"
    },
    "geo_target_ids": {
      "default": null,
      "items": {},
      "title": "Geo Target Ids",
      "type": "array"
    },
    "language_code": {
      "default": null,
      "title": "Language Code",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_suggest_smart_campaign_keyword_themesArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_update_smart_campaign_settings-b868c57f"></a>

## gads_update_smart_campaign_settings

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Update Smart campaign settings including URL, business name, phone, language, and keyword themes.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L10020-L10037) · Schema: tools/list.

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
    "final_url": {
      "default": null,
      "title": "Final Url",
      "type": "string"
    },
    "business_name": {
      "default": null,
      "title": "Business Name",
      "type": "string"
    },
    "phone_number": {
      "default": null,
      "title": "Phone Number",
      "type": "string"
    },
    "country_code": {
      "default": null,
      "title": "Country Code",
      "type": "string"
    },
    "advertising_language_code": {
      "default": null,
      "title": "Advertising Language Code",
      "type": "string"
    },
    "keyword_themes": {
      "default": null,
      "items": {},
      "title": "Keyword Themes",
      "type": "array"
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
  "title": "gads_update_smart_campaign_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_custom_segment-2e73b149"></a>

## gads_create_custom_segment

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a custom audience segment based on keywords, URLs, or apps.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L10039-L10053) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "name": {
      "title": "Name",
      "type": "string"
    },
    "type_val": {
      "title": "Type Val",
      "type": "string"
    },
    "keywords": {
      "default": null,
      "items": {},
      "title": "Keywords",
      "type": "array"
    },
    "urls": {
      "default": null,
      "items": {},
      "title": "Urls",
      "type": "array"
    },
    "apps": {
      "default": null,
      "items": {},
      "title": "Apps",
      "type": "array"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "name",
    "type_val"
  ],
  "title": "gads_create_custom_segmentArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_carrier_constants-d5f81525"></a>

## gads_get_carrier_constants

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, max, \_search, min, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List mobile carriers available for targeting, optionally in one country. Args: country_code: Optional two-letter country code, e.g. "IL", "US". limit: Maximum rows to return. Default 200; raise it if the answer is being cut off.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L10055-L10080) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "country_code": {
      "default": null,
      "title": "Country Code",
      "type": "string"
    },
    "limit": {
      "default": 200,
      "title": "Limit",
      "type": "integer"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_get_carrier_constantsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_detailed_demographics-85699105"></a>

## gads_get_detailed_demographics

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get detailed demographic targeting categories (education, marital status, etc.).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L10082-L10092) · Schema: tools/list.

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
  "title": "gads_get_detailed_demographicsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_life_events-a5484ccd"></a>

## gads_get_life_events

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get life event targeting categories (recently married, new home, etc.).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L10094-L10103) · Schema: tools/list.

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
  "title": "gads_get_life_eventsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_mobile_device_constants-9824fa8c"></a>

## gads_get_mobile_device_constants

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get mobile device constants for device-specific targeting.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L10105-L10117) · Schema: tools/list.

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
  "title": "gads_get_mobile_device_constantsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_operating_system_constants-54a5b582"></a>

## gads_get_operating_system_constants

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get operating system version constants for device targeting.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L10119-L10132) · Schema: tools/list.

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
  "title": "gads_get_operating_system_constantsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_user_interests-205267bd"></a>

## gads_get_user_interests

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get user interest categories (affinity, in-market) for audience targeting.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L10134-L10145) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "taxonomy_type": {
      "default": null,
      "title": "Taxonomy Type",
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
  "title": "gads_get_user_interestsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_language_constants-e329e4ae"></a>

## gads_list_language_constants

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List all targetable language constants with their IDs.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L10147-L10158) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
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
  "title": "gads_list_language_constantsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_topic_constants-10309750"></a>

## gads_list_topic_constants

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, max, \_search, min, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List content topics available for Display targeting. Args: parent_id: Optional parent topic ID, to list only that topic's children. limit: Maximum rows to return. Default 200; raise it if the answer is being cut off.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L10160-L10185) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "parent_id": {
      "default": null,
      "title": "Parent Id",
      "type": "string"
    },
    "limit": {
      "default": 200,
      "title": "Limit",
      "type": "integer"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_list_topic_constantsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_search_geo_targets-ba856b49"></a>

## gads_search_geo_targets

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, (query or '').strip, \_load\_user\_client, client.get\_service, client.get\_type, request.location\_names.names.append, service.suggest\_geo\_target\_constants, data.append.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Search geo target locations by name to get the IDs campaign targeting takes. Geo targets are global constants, not account data, so this needs no account. That matters: the previous version demanded a customer_id and refused the call without one, which is the error this tool was reported failing with. customer_id is still accepted, and ignored, so callers that pass it to everything keep working. Args: query: Location name to look up, e.g. "Tel Aviv", "Greater London". locale: Language for the returned names. Defaults to "en". country_code: Optional two-letter country code to restrict results, e.g. "IL".
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L10187-L10236) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "query": {
      "title": "Query",
      "type": "string"
    },
    "locale": {
      "default": null,
      "title": "Locale",
      "type": "string"
    },
    "country_code": {
      "default": null,
      "title": "Country Code",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "query"
  ],
  "title": "gads_search_geo_targetsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_content_exclusions-99e19875"></a>

## gads_set_content_exclusions

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Add or remove content label exclusions (brand safety settings) for a campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L10238-L10253) · Schema: tools/list.

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
    "add_exclusions": {
      "default": null,
      "items": {},
      "title": "Add Exclusions",
      "type": "array"
    },
    "remove_exclusions": {
      "default": null,
      "items": {},
      "title": "Remove Exclusions",
      "type": "array"
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
  "title": "gads_set_content_exclusionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_placement_exclusions-2b60059c"></a>

## gads_set_placement_exclusions

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Add or remove placement exclusions (blocked URLs) for a campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L10255-L10268) · Schema: tools/list.

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
    "add_placements": {
      "default": null,
      "items": {},
      "title": "Add Placements",
      "type": "array"
    },
    "remove_placement_criterion_ids": {
      "default": null,
      "items": {},
      "title": "Remove Placement Criterion Ids",
      "type": "array"
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
  "title": "gads_set_placement_exclusionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_add_ad_group_carrier-1a15a15c"></a>

## gads_add_ad_group_carrier

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, service.mutate\_ad\_group\_criteria.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Add carrier targeting to an ad group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L10274-L10289) · Schema: tools/list.

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
    "carrier_constant": {
      "title": "Carrier Constant",
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
    "carrier_constant"
  ],
  "title": "gads_add_ad_group_carrierArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_add_ad_group_mobile_device-bb04dcac"></a>

## gads_add_ad_group_mobile_device

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, service.mutate\_ad\_group\_criteria.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Add mobile device targeting to an ad group. mobile_device_constant e.g. 'mobileDeviceConstants/700001'.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L10296-L10311) · Schema: tools/list.

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
    "mobile_device_constant": {
      "title": "Mobile Device Constant",
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
    "mobile_device_constant"
  ],
  "title": "gads_add_ad_group_mobile_deviceArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_add_ad_group_operating_system-416fb6c5"></a>

## gads_add_ad_group_operating_system

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, service.mutate\_ad\_group\_criteria.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Add operating system targeting to an ad group. operating_system_version_constant e.g. 'operatingSystemVersionConstants/630000'.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L10318-L10333) · Schema: tools/list.

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
    "operating_system_version_constant": {
      "title": "Operating System Version Constant",
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
    "operating_system_version_constant"
  ],
  "title": "gads_add_ad_group_operating_systemArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_add_call_extension-d7fcfeed"></a>

## gads_add_call_extension

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, asset\_service.mutate\_assets, ca\_service.mutate\_campaign\_assets.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Add a phone call extension to a campaign or account. Args: phone_number: Phone number string, e.g. '1-800-555-0100'. country_code: Two-letter country code, e.g. 'US', 'IL'. campaign_id: Campaign ID to attach to (optional; omit for account-level). customer_id: Google Ads customer ID.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L10340-L10381) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "phone_number": {
      "title": "Phone Number",
      "type": "string"
    },
    "country_code": {
      "title": "Country Code",
      "type": "string"
    },
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
  "required": [
    "phone_number",
    "country_code"
  ],
  "title": "gads_add_call_extensionArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_add_campaign_carrier-19dcd543"></a>

## gads_add_campaign_carrier

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, service.mutate\_campaign\_criteria.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Add carrier targeting to a campaign. carrier_constant is resource name like 'carrierConstants/70502'.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L10388-L10403) · Schema: tools/list.

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
    "carrier_constant": {
      "title": "Carrier Constant",
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
    "carrier_constant"
  ],
  "title": "gads_add_campaign_carrierArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_add_campaign_ip_exclusion-b108c3d3"></a>

## gads_add_campaign_ip_exclusion

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, service.mutate\_campaign\_criteria.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Add IP address exclusion to a campaign. ip_address can be like '1.2.3.4' or '1.2.3.0/24'.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L10410-L10424) · Schema: tools/list.

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
    "ip_address": {
      "title": "Ip Address",
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
    "ip_address"
  ],
  "title": "gads_add_campaign_ip_exclusionArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_add_campaign_location_group-e3698da8"></a>

## gads_add_campaign_location_group

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, service.mutate\_campaign\_criteria, criterion.location\_group.feed\_item\_sets.append, criterion.location\_group.geo\_targets.geo\_target\_constants.append.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Add a location group criterion to a campaign. Can use feed_resource_names (business locations feed) or geo_target_constants + radius.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L10431-L10458) · Schema: tools/list.

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
    "feed_resource_names": {
      "default": null,
      "items": {},
      "title": "Feed Resource Names",
      "type": "array"
    },
    "geo_target_constants": {
      "default": null,
      "items": {},
      "title": "Geo Target Constants",
      "type": "array"
    },
    "radius": {
      "default": 0,
      "title": "Radius",
      "type": "number"
    },
    "radius_units": {
      "default": "MILES",
      "title": "Radius Units",
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
  "title": "gads_add_campaign_location_groupArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_add_campaign_mobile_device-16d870f5"></a>

## gads_add_campaign_mobile_device

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, service.mutate\_campaign\_criteria.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Add mobile device targeting to a campaign. mobile_device_constant e.g. 'mobileDeviceConstants/700001'.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L10467-L10482) · Schema: tools/list.

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
    "mobile_device_constant": {
      "title": "Mobile Device Constant",
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
    "mobile_device_constant"
  ],
  "title": "gads_add_campaign_mobile_deviceArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_add_campaign_operating_system-a789dad7"></a>

## gads_add_campaign_operating_system

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, service.mutate\_campaign\_criteria.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Add operating system targeting to a campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L10489-L10504) · Schema: tools/list.

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
    "operating_system_version_constant": {
      "title": "Operating System Version Constant",
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
    "operating_system_version_constant"
  ],
  "title": "gads_add_campaign_operating_systemArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_add_customer_negative_keyword-b7cf4e00"></a>

## gads_add_customer_negative_keyword

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Add a customer-level negative keyword (applies account-wide via a shared list approach). Note: Google Ads API does not support account-level negative keywords directly. This creates a shared negative list and attaches it. Use gads_create_shared_negative_list + gads_add_keywords_to_shared_list + gads_attach_shared_list_to_campaign for per-campaign control.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L10511-L10525) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "keyword_text": {
      "title": "Keyword Text",
      "type": "string"
    },
    "match_type": {
      "default": "BROAD",
      "title": "Match Type",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "keyword_text"
  ],
  "title": "gads_add_customer_negative_keywordArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_add_negative_audience_to_ad_group-0c49f319"></a>

## gads_add_negative_audience_to_ad_group

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, service.mutate\_ad\_group\_criteria.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Add a negative audience (user list exclusion) to an ad group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L10534-L10550) · Schema: tools/list.

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
    "user_list_resource_name": {
      "title": "User List Resource Name",
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
    "user_list_resource_name"
  ],
  "title": "gads_add_negative_audience_to_ad_groupArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_add_negative_audience_to_campaign-f1944824"></a>

## gads_add_negative_audience_to_campaign

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, service.mutate\_campaign\_criteria.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Add a negative audience (user list exclusion) to a campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L10559-L10575) · Schema: tools/list.

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
    "user_list_resource_name": {
      "title": "User List Resource Name",
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
    "user_list_resource_name"
  ],
  "title": "gads_add_negative_audience_to_campaignArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_add_pmax_brand_exclusion-2fcf4247"></a>

## gads_add_pmax_brand_exclusion

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, service.mutate\_campaign\_criteria.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Add brand exclusion to a Performance Max campaign. Provide brand_name or brand_id.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L10582-L10601) · Schema: tools/list.

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
    "brand_name": {
      "default": "",
      "title": "Brand Name",
      "type": "string"
    },
    "brand_id": {
      "default": 0,
      "title": "Brand Id",
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
  "title": "gads_add_pmax_brand_exclusionArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_add_structured_snippet-f9aeb08f"></a>

## gads_add_structured_snippet

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, asset\_service.mutate\_assets, isinstance, json.loads, a.structured\_snippet\_asset.values.append.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Add a structured snippet extension to a campaign or account. Args: header: Snippet header, e.g. 'Services', 'Brands', 'Courses'. values: JSON array of snippet values, e.g. ["Value1","Value2","Value3"]. campaign_id: Campaign ID to attach to (optional; omit for account-level). customer_id: Google Ads customer ID.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L10608-L10650) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "header": {
      "title": "Header",
      "type": "string"
    },
    "values": {
      "title": "Values",
      "type": "string"
    },
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
  "required": [
    "header",
    "values"
  ],
  "title": "gads_add_structured_snippetArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_apply_label_to_keyword-088b666a"></a>

## gads_apply_label_to_keyword

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, service.mutate\_ad\_group\_criterion\_labels.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Apply a label to a keyword (ad group criterion).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L10657-L10671) · Schema: tools/list.

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
  "title": "gads_apply_label_to_keywordArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_assign_budget_to_campaign-e8f4b955"></a>

## gads_assign_budget_to_campaign

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, op.update\_mask.CopyFrom, service.mutate\_campaigns, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Assign an existing budget to a campaign. Args: campaign_id: Campaign numeric ID. budget_id: Budget ID to assign. customer_id: Google Ads customer ID.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L10678-L10702) · Schema: tools/list.

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
    "budget_id": {
      "title": "Budget Id",
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
    "budget_id"
  ],
  "title": "gads_assign_budget_to_campaignArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_assign_portfolio_strategy_to_campaign-a9c58a59"></a>

## gads_assign_portfolio_strategy_to_campaign

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, op.update\_mask.CopyFrom, service.mutate\_campaigns, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Assign a portfolio bidding strategy to a campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L10717-L10732) · Schema: tools/list.

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
    "bidding_strategy_id": {
      "title": "Bidding Strategy Id",
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
    "bidding_strategy_id"
  ],
  "title": "gads_assign_portfolio_strategy_to_campaignArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_bulk_rename_ad_groups-9bd5bdf2"></a>

## gads_bulk_rename_ad_groups

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, service.mutate\_ad\_groups, client.get\_type, op.update\_mask.CopyFrom, ops.append, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Bulk rename multiple ad groups. updates: list of {ad_group_id, name} dicts.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L10741-L10759) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "updates": {
      "items": {},
      "title": "Updates",
      "type": "array"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "updates"
  ],
  "title": "gads_bulk_rename_ad_groupsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_bulk_rename_campaigns-635d021c"></a>

## gads_bulk_rename_campaigns

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, service.mutate\_campaigns, client.get\_type, op.update\_mask.CopyFrom, ops.append, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Bulk rename multiple campaigns. updates: list of {campaign_id, name} dicts.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L10768-L10786) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "updates": {
      "items": {},
      "title": "Updates",
      "type": "array"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "updates"
  ],
  "title": "gads_bulk_rename_campaignsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_bulk_set_ai_max_search_campaigns-d32d70a2"></a>

## gads_bulk_set_ai_max_search_campaigns

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, \_search, client.get\_service, skipped.append, client.get\_type, AssetAutomationSetting, c.asset\_automation\_settings.append.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Enable or disable AI Max for ALL active Search campaigns in the account. Also sets sub-settings: text asset automation and final URL expansion. Args: enable: True to enable AI Max on all Search campaigns, False to disable. text_asset_automation: Enable text asset automation sub-setting (default True). final_url_expansion: Enable final URL expansion sub-setting (default True). customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L10793-L10869) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
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
    "enable"
  ],
  "title": "gads_bulk_set_ai_max_search_campaignsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_bulk_set_device_bid_modifiers-9f679895"></a>

## gads_bulk_set_device_bid_modifiers

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, service.mutate\_campaign\_criteria, x.strip, \_search, ops.append, campaign\_ids.split.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set device bid modifier across multiple campaigns. Args: campaign_ids: Comma-separated campaign IDs. device: DESKTOP, MOBILE, or TABLET. bid_modifier: Multiplier. customer_id: optional.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L10876-L10911) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_ids": {
      "title": "Campaign Ids",
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
    "campaign_ids",
    "device",
    "bid_modifier"
  ],
  "title": "gads_bulk_set_device_bid_modifiersArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_bulk_update_ad_group_names-78da6659"></a>

## gads_bulk_update_ad_group_names

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, service.mutate\_ad\_groups, client.get\_type, op.update\_mask.CopyFrom, ops.append, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Bulk rename ad groups. updates is a list of dicts with 'ad_group_id' and 'name'.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L10918-L10939) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "updates": {
      "items": {},
      "title": "Updates",
      "type": "array"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "updates"
  ],
  "title": "gads_bulk_update_ad_group_namesArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_bulk_update_campaign_names-efc0111c"></a>

## gads_bulk_update_campaign_names

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, service.mutate\_campaigns, client.get\_type, op.update\_mask.CopyFrom, ops.append, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Bulk rename campaigns. updates is a list of dicts with 'campaign_id' and 'name'.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L10946-L10967) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "updates": {
      "items": {},
      "title": "Updates",
      "type": "array"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "updates"
  ],
  "title": "gads_bulk_update_campaign_namesArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_check_accounts_inactivity-0e95c19a"></a>

## gads_check_accounts_inactivity

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, date.today, timedelta, sum, inactive.append, active.append, \_m.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Flag sub-accounts with zero spend or zero clicks in the last N days. Args: days: Look-back window in days. Default 7. mcc_customer_id: MCC account ID. Defaults to GOOGLE_ADS_CUSTOMER_ID env var.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L10974-L11023) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "days": {
      "default": 7,
      "title": "Days",
      "type": "integer"
    },
    "mcc_customer_id": {
      "default": "",
      "title": "Mcc Customer Id",
      "type": "string"
    }
  },
  "title": "gads_check_accounts_inactivityArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_clear_campaign_schedule-91d78d73"></a>

## gads_clear_campaign_schedule

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, \_search, client.get\_type, ops.append, cc\_service.mutate\_campaign\_criteria.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Remove ALL ad schedule criteria from a campaign (clears dayparting entirely). Args: campaign_id: Campaign numeric ID. customer_id: Google Ads customer ID.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L11040-L11068) · Schema: tools/list.

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
  "title": "gads_clear_campaign_scheduleArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_copy_schedule_to_campaigns-39e1fe30"></a>

## gads_copy_schedule_to_campaigns

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, \_search, client.get\_service, service.mutate\_campaign\_criteria, x.strip, target\_campaign\_ids.split, client.get\_type.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Copy ad schedule from one campaign to multiple campaigns. Args: source_campaign_id: Source campaign ID. target_campaign_ids: Comma-separated target campaign IDs. customer_id: optional.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L11079-L11120) · Schema: tools/list.

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
    "target_campaign_ids": {
      "title": "Target Campaign Ids",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "source_campaign_id",
    "target_campaign_ids"
  ],
  "title": "gads_copy_schedule_to_campaignsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_conversion_value_rule_set-a15b8159"></a>

## gads_create_conversion_value_rule_set

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, service.mutate\_conversion\_value\_rule\_sets, rs.dimensions.append, rs.conversion\_value\_rules.append.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a conversion value rule set for a campaign. dimensions: list of 'GEO_LOCATION', 'DEVICE', 'AUDIENCE', 'ITINERARY', 'NO_CONDITION' rule_resource_names: list of conversion value rule resource names to include.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L11127-L11148) · Schema: tools/list.

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
    "dimensions": {
      "items": {},
      "title": "Dimensions",
      "type": "array"
    },
    "rule_resource_names": {
      "items": {},
      "title": "Rule Resource Names",
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
    "dimensions",
    "rule_resource_names"
  ],
  "title": "gads_create_conversion_value_rule_setArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_customer-4fc4bb59"></a>

## gads_create_customer

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, service.create\_customer\_client.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a new Google Ads customer (sub-account) under a manager account. manager_customer_id: the MCC account ID. customer_id is used as the login customer.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L11157-L11181) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "descriptive_name": {
      "title": "Descriptive Name",
      "type": "string"
    },
    "currency_code": {
      "default": "USD",
      "title": "Currency Code",
      "type": "string"
    },
    "time_zone": {
      "default": "America/New_York",
      "title": "Time Zone",
      "type": "string"
    },
    "manager_customer_id": {
      "default": "",
      "title": "Manager Customer Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "descriptive_name"
  ],
  "title": "gads_create_customerArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_demand_gen_campaign-4bcd95b3"></a>

## gads_create_demand_gen_campaign

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, budget\_service.mutate\_campaign\_budgets, campaign\_service.mutate\_campaigns.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a Demand Gen campaign with a new shared budget.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L11190-L11224) · Schema: tools/list.

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
    "budget_micros": {
      "title": "Budget Micros",
      "type": "integer"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "name",
    "budget_micros"
  ],
  "title": "gads_create_demand_gen_campaignArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_discovery_campaign-34d8719b"></a>

## gads_create_discovery_campaign

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, budget\_service.mutate\_campaign\_budgets, service.mutate\_campaigns.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a Discovery campaign (legacy; new campaigns use Demand Gen).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L11231-L11265) · Schema: tools/list.

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
    "budget_micros": {
      "title": "Budget Micros",
      "type": "integer"
    },
    "target_cpa_micros": {
      "default": 0,
      "title": "Target Cpa Micros",
      "type": "integer"
    },
    "target_roas": {
      "default": 0,
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
    "name",
    "budget_micros"
  ],
  "title": "gads_create_discovery_campaignArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_display_campaign-6b8668b8"></a>

## gads_create_display_campaign

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, budget\_service.mutate\_campaign\_budgets, bidding\_strategy.upper, campaign\_service.mutate\_campaigns.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a Display campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L11274-L11325) · Schema: tools/list.

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
    "budget_micros": {
      "title": "Budget Micros",
      "type": "integer"
    },
    "bidding_strategy": {
      "default": "MAXIMIZE_CONVERSIONS",
      "title": "Bidding Strategy",
      "type": "string"
    },
    "target_cpa_micros": {
      "default": 0,
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
    "name",
    "budget_micros"
  ],
  "title": "gads_create_display_campaignArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_keyword-15b5d44f"></a>

## gads_create_keyword

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, service.mutate\_ad\_group\_criteria, rn.split.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a single keyword in an ad group. match_type: BROAD, PHRASE, EXACT.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L11332-L11353) · Schema: tools/list.

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
    "keyword_text": {
      "title": "Keyword Text",
      "type": "string"
    },
    "match_type": {
      "default": "BROAD",
      "title": "Match Type",
      "type": "string"
    },
    "cpc_bid_micros": {
      "default": 0,
      "title": "Cpc Bid Micros",
      "type": "integer"
    },
    "status": {
      "default": "ENABLED",
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
    "keyword_text"
  ],
  "title": "gads_create_keywordArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_local_campaign-a1048698"></a>

## gads_create_local_campaign

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, budget\_service.mutate\_campaign\_budgets, campaign.maximize\_conversion\_value.CopyFrom, service.mutate\_campaigns.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a Local campaign. location_source_type: GOOGLE_MY_BUSINESS or AFFILIATE.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L11360-L11393) · Schema: tools/list.

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
    "budget_micros": {
      "title": "Budget Micros",
      "type": "integer"
    },
    "location_source_type": {
      "default": "GOOGLE_MY_BUSINESS",
      "title": "Location Source Type",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "name",
    "budget_micros"
  ],
  "title": "gads_create_local_campaignArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_pmax_campaign-2b2f44e3"></a>

## gads_create_pmax_campaign

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, budget\_service.mutate\_campaign\_budgets, campaign\_service.mutate\_campaigns.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a Performance Max campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L11400-L11447) · Schema: tools/list.

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
    "budget_micros": {
      "title": "Budget Micros",
      "type": "integer"
    },
    "target_roas": {
      "default": 0,
      "title": "Target Roas",
      "type": "number"
    },
    "target_cpa_micros": {
      "default": 0,
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
    "name",
    "budget_micros"
  ],
  "title": "gads_create_pmax_campaignArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_rsa-1f441574"></a>

## gads_create_rsa

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, aga.ad.final\_urls.append, service.mutate\_ad\_group\_ads, isinstance, json.loads.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a Responsive Search Ad (RSA). Headlines and descriptions as JSON arrays. Args: ad_group_id: Ad group ID to add the ad to. final_url: Destination URL. headlines: JSON array of 3-15 headline strings (max 30 chars each). e.g. ["Headline 1", "Headline 2", "Headline 3"] descriptions: JSON array of 2-4 description strings (max 90 chars each). path1: First URL display path (max 15 chars). path2: Second URL display path (max 15 chars). status: ENABLED | PAUSED. Default PAUSED. customer_id: Google Ads customer ID.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L11454-L11504) · Schema: tools/list.

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
    "final_url": {
      "title": "Final Url",
      "type": "string"
    },
    "headlines": {
      "title": "Headlines",
      "type": "string"
    },
    "descriptions": {
      "title": "Descriptions",
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
    "status": {
      "default": "PAUSED",
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
    "final_url",
    "headlines",
    "descriptions"
  ],
  "title": "gads_create_rsaArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_search_campaign-4a535e54"></a>

## gads_create_search_campaign

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, budget\_service.mutate\_campaign\_budgets, bidding\_strategy.upper, campaign\_service.mutate\_campaigns, criterion\_service.mutate\_campaign\_criteria.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a Search campaign with common settings.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L11515-L11607) · Schema: tools/list.

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
    "budget_micros": {
      "title": "Budget Micros",
      "type": "integer"
    },
    "bidding_strategy": {
      "default": "MAXIMIZE_CONVERSIONS",
      "title": "Bidding Strategy",
      "type": "string"
    },
    "target_cpa_micros": {
      "default": 0,
      "title": "Target Cpa Micros",
      "type": "integer"
    },
    "networks_search": {
      "default": true,
      "title": "Networks Search",
      "type": "boolean"
    },
    "networks_search_partners": {
      "default": false,
      "title": "Networks Search Partners",
      "type": "boolean"
    },
    "geo_targets": {
      "default": null,
      "items": {},
      "title": "Geo Targets",
      "type": "array"
    },
    "languages": {
      "default": null,
      "items": {},
      "title": "Languages",
      "type": "array"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "name",
    "budget_micros"
  ],
  "title": "gads_create_search_campaignArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_video_campaign-79009397"></a>

## gads_create_video_campaign

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, budget\_service.mutate\_campaign\_budgets, bidding\_strategy.upper, campaign\_service.mutate\_campaigns.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a Video campaign. subtype: VIDEO_ACTION, VIDEO_VIEW, VIDEO_REACH_TARGET_FREQUENCY, etc.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L11614-L11673) · Schema: tools/list.

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
    "budget_micros": {
      "title": "Budget Micros",
      "type": "integer"
    },
    "subtype": {
      "default": "VIDEO_VIEW",
      "title": "Subtype",
      "type": "string"
    },
    "bidding_strategy": {
      "default": "TARGET_CPV",
      "title": "Bidding Strategy",
      "type": "string"
    },
    "target_cpv_micros": {
      "default": 0,
      "title": "Target Cpv Micros",
      "type": "integer"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "name",
    "budget_micros"
  ],
  "title": "gads_create_video_campaignArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_video_responsive_ad-1c254b0d"></a>

## gads_create_video_responsive_ad

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, service.mutate\_ad\_group\_ads, AdTextAsset, vra.headlines.append, vra.descriptions.append.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a Video Responsive ad (for YouTube). headlines: list of strings (max 5). descriptions: list of strings (max 5). videos: list of YouTube video asset resource names (max 5). thumbnails: list of image asset resource names (optional).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L11680-L11726) · Schema: tools/list.

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
    "headlines": {
      "items": {},
      "title": "Headlines",
      "type": "array"
    },
    "descriptions": {
      "items": {},
      "title": "Descriptions",
      "type": "array"
    },
    "videos": {
      "items": {},
      "title": "Videos",
      "type": "array"
    },
    "thumbnails": {
      "default": null,
      "items": {},
      "title": "Thumbnails",
      "type": "array"
    },
    "final_urls": {
      "default": null,
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
    "headlines",
    "descriptions",
    "videos"
  ],
  "title": "gads_create_video_responsive_adArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_detach_shared_list_from_campaign-cc631ae3"></a>

## gads_detach_shared_list_from_campaign

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, service.mutate\_campaign\_shared\_sets.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Detach a shared negative keyword list from a campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L11735-L11747) · Schema: tools/list.

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
  "title": "gads_detach_shared_list_from_campaignArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_enable_keyword-7949fd61"></a>

## gads_enable_keyword

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, op.update\_mask.CopyFrom, service.mutate\_ad\_group\_criteria, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Enable (unpause) a keyword.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L11756-L11770) · Schema: tools/list.

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
  "title": "gads_enable_keywordArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_ad_group_cpa_simulation-847a1ff2"></a>

## gads_get_ad_group_cpa_simulation

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, points.append.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get target CPA bid simulation data for an ad group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L11777-L11813) · Schema: tools/list.

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
  "title": "gads_get_ad_group_cpa_simulationArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_ad_group_cpc_estimates-0030ee00"></a>

## gads_get_ad_group_cpc_estimates

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, gads\_get\_ad\_group\_simulation.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get CPC bid estimates for an ad group. Args: ad_group_id: Ad group ID. customer_id: optional.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L11822-L11826) · Schema: tools/list.

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
  "title": "gads_get_ad_group_cpc_estimatesArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_ad_group_keyword_suggestions-b8acde3e"></a>

## gads_get_ad_group_keyword_suggestions

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, service.suggest\_smart\_campaign\_keyword\_themes, themes.append.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get keyword theme suggestions for an ad group (Smart Campaign keyword themes).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L11836-L11854) · Schema: tools/list.

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
  "title": "gads_get_ad_group_keyword_suggestionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_ad_group_url_options-dd5d1344"></a>

## gads_get_ad_group_url_options

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, \_search.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get URL options (tracking template, final URL suffix, custom params) for an ad group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L11863-L11888) · Schema: tools/list.

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
  "title": "gads_get_ad_group_url_optionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_ad_preview-46cc3975"></a>

## gads_get_ad_preview

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, \_search, ads.append.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get ad preview for a keyword. Uses AdGroupAdService simulation. geo_criterion_id: e.g. '2840' for United States. language_criterion_id: e.g. '1000' for English. device: DESKTOP, MOBILE, TABLET.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L11895-L11939) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "keyword": {
      "title": "Keyword",
      "type": "string"
    },
    "geo_criterion_id": {
      "default": "2840",
      "title": "Geo Criterion Id",
      "type": "string"
    },
    "language_criterion_id": {
      "default": "1000",
      "title": "Language Criterion Id",
      "type": "string"
    },
    "device": {
      "default": "DESKTOP",
      "title": "Device",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "keyword"
  ],
  "title": "gads_get_ad_previewArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_ad_schedule_bid_modifiers-b611ce68"></a>

## gads_get_ad_schedule_bid_modifiers

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, \_search, results.append.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get ad schedule bid modifiers for a campaign. Args: campaign_id: Campaign ID. customer_id: optional.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L11948-L11976) · Schema: tools/list.

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
  "title": "gads_get_ad_schedule_bid_modifiersArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_asset_group_details-27ef1313"></a>

## gads_get_asset_group_details

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, \_search, assets.append.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get full details of an asset group including all assets.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L11983-L12029) · Schema: tools/list.

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
  "title": "gads_get_asset_group_detailsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_billing_setup-1d56ace9"></a>

## gads_get_billing_setup

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get billing setup details for the account.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L12036-L12060) · Schema: tools/list.

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
  "title": "gads_get_billing_setupArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_campaign_ai_max_status-9dd87da2"></a>

## gads_get_campaign_ai_max_status

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, sum, campaigns.append.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get AI Max status for all Search campaigns in the account. Returns list of campaigns with their current AI Max enabled/disabled status. Args: customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L12067-L12102) · Schema: tools/list.

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
  "title": "gads_get_campaign_ai_max_statusArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_campaign_bidding_details-0bcbaf79"></a>

## gads_get_campaign_bidding_details

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get detailed bidding strategy settings for a campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L12109-L12153) · Schema: tools/list.

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
  "title": "gads_get_campaign_bidding_detailsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_campaign_experiment-f4bfa9a4"></a>

## gads_get_campaign_experiment

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, arms.append, \_get\_client.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get details of a campaign experiment by the experiment campaign ID.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L12160-L12207) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "experiment_campaign_id": {
      "title": "Experiment Campaign Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "experiment_campaign_id"
  ],
  "title": "gads_get_campaign_experimentArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_campaign_frequency_cap-169ea413"></a>

## gads_get_campaign_frequency_cap

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, caps.append, hasattr.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get frequency cap settings for a campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L12216-L12240) · Schema: tools/list.

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
  "title": "gads_get_campaign_frequency_capArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_campaign_schedule-47d11bc3"></a>

## gads_get_campaign_schedule

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, gads\_get\_ad\_schedule\_bid\_modifiers.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get the full ad schedule for a campaign. Args: campaign_id: Campaign ID. customer_id: optional.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L12249-L12253) · Schema: tools/list.

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
  "title": "gads_get_campaign_scheduleArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_campaign_targeting-0d58d58c"></a>

## gads_get_campaign_targeting

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, \_search.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get all targeting settings for a campaign (networks, geo, language, devices, schedule). Args: campaign_id: Campaign ID. customer_id: optional.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L12260-L12308) · Schema: tools/list.

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
  "title": "gads_get_campaign_targetingArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_campaign_url_options-a2b02f2b"></a>

## gads_get_campaign_url_options

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, \_search.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get URL options (tracking template, final URL suffix, custom params) for a campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L12315-L12340) · Schema: tools/list.

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
  "title": "gads_get_campaign_url_optionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_campaigns_without_spend-915ddc68"></a>

## gads_get_campaigns_without_spend

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, set, seen.add.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get campaigns with zero spend in the last N days.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L12359-L12389) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "days": {
      "default": 30,
      "title": "Days",
      "type": "integer"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_get_campaigns_without_spendArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_dayofweek_performance-cbb301dc"></a>

## gads_get_dayofweek_performance

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get performance metrics by day of week. Args: date_range: e.g. LAST_30_DAYS. campaign_id: optional filter. customer_id: optional.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L12398-L12425) · Schema: tools/list.

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
  "title": "gads_get_dayofweek_performanceArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_device_bid_modifiers-7f84167c"></a>

## gads_get_device_bid_modifiers

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, \_search, results.append.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get device bid modifiers for a campaign. Args: campaign_id: Campaign ID. customer_id: optional.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L12432-L12452) · Schema: tools/list.

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
  "title": "gads_get_device_bid_modifiersArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_hotel_campaign_settings-fce8cf2d"></a>

## gads_get_hotel_campaign_settings

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get hotel-specific campaign settings.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L12459-L12479) · Schema: tools/list.

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
  "title": "gads_get_hotel_campaign_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_keyword_bid_estimates-c9ca50b2"></a>

## gads_get_keyword_bid_estimates

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, json.loads, gads\_generate\_keyword\_ideas, ','.join.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get bid estimates for keywords using the KeywordPlanIdeaService. Args: keywords_json: JSON array of keyword strings. campaign_id: Optional campaign context. ad_group_id: Optional ad group context. customer_id: optional.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L12488-L12497) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "keywords_json": {
      "title": "Keywords Json",
      "type": "string"
    },
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
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "keywords_json"
  ],
  "title": "gads_get_keyword_bid_estimatesArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_keyword_forecast-12648dc1"></a>

## gads_get_keyword_forecast

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, start.isoformat, (start + timedelta(days=30)).isoformat, campaign.ad\_groups.append, service.generate\_keyword\_forecast\_metrics.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get traffic forecast for keywords. keywords: list of {text, match_type} dicts. geo_target_ids: list of NUMERIC geo target constant IDs, e.g. ['2840'] for the United States, ['2376'] for Israel. language_id: '1000' = English. Forecasts a 30-day window starting tomorrow; Keyword Planner cannot forecast the past.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L12504-L12559) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "keywords": {
      "items": {},
      "title": "Keywords",
      "type": "array"
    },
    "geo_target_ids": {
      "default": null,
      "items": {},
      "title": "Geo Target Ids",
      "type": "array"
    },
    "language_id": {
      "default": "1000",
      "title": "Language Id",
      "type": "string"
    },
    "daily_budget_micros": {
      "default": 1000000,
      "title": "Daily Budget Micros",
      "type": "integer"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "keywords"
  ],
  "title": "gads_get_keyword_forecastArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_keyword_quality_score-be55f49e"></a>

## gads_get_keyword_quality_score

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, \_search, results.append.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get quality scores for all keywords in an ad group. Args: ad_group_id: Ad group ID. customer_id: optional.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L12568-L12601) · Schema: tools/list.

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
  "title": "gads_get_keyword_quality_scoreArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_keyword_simulation-411cb7d8"></a>

## gads_get_keyword_simulation

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, points.append.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get bid simulation data for a keyword.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L12608-L12647) · Schema: tools/list.

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
  "title": "gads_get_keyword_simulationArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_mcc_performance-f812f59b"></a>

## gads_get_mcc_performance

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, results.append.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get performance for all accounts under an MCC. Args: date_range: e.g. LAST_30_DAYS. customer_id: MCC account ID.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L12656-L12683) · Schema: tools/list.

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
  "title": "gads_get_mcc_performanceArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_payments_account-b98182a2"></a>

## gads_get_payments_account

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get payments account details linked to the Google Ads account.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L12690-L12711) · Schema: tools/list.

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
  "title": "gads_get_payments_accountArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_pmax_campaign_settings-e824b018"></a>

## gads_get_pmax_campaign_settings

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, \_search, automation\_settings.append.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get Performance Max specific settings for a campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L12720-L12750) · Schema: tools/list.

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
  "title": "gads_get_pmax_campaign_settingsArguments",
  "type": "object"
}
```

</details>
