# RoyAzran/mcp-ads: supporting and other-product tools

[Provider inventory](royazran--mcp-ads.md) · [Global tool index](../TOOL_INDEX.md)

Tools 301–450 of 3131. Exact schemas from the same upstream snapshot.

<a id="tool-gads_update_video_ad-89bc4dc0"></a>

## gads_update_video_ad

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Update a Video ad (TrueView). Can change final_urls, display_url, tracking template. Video asset itself cannot be swapped — must create a new ad.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L5396-L5411) · Schema: tools/list.

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
    "final_urls": {
      "default": null,
      "items": {},
      "title": "Final Urls",
      "type": "array"
    },
    "display_url": {
      "default": null,
      "title": "Display Url",
      "type": "string"
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
  "title": "gads_update_video_adArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_update_demand_gen_ad-9c9340ad"></a>

## gads_update_demand_gen_ad

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Update a Demand Gen multi-asset ad. Can replace headlines, descriptions, image assets, logo assets, business_name, call_to_action, final_urls.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L5413-L5432) · Schema: tools/list.

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
    "marketing_image_asset_ids": {
      "default": null,
      "items": {},
      "title": "Marketing Image Asset Ids",
      "type": "array"
    },
    "logo_asset_ids": {
      "default": null,
      "items": {},
      "title": "Logo Asset Ids",
      "type": "array"
    },
    "business_name": {
      "default": null,
      "title": "Business Name",
      "type": "string"
    },
    "call_to_action_text": {
      "default": null,
      "title": "Call To Action Text",
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
    "ad_id",
    "ad_group_id"
  ],
  "title": "gads_update_demand_gen_adArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_update_smart_campaign_ad-7ea4f0db"></a>

## gads_update_smart_campaign_ad

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Update a Smart Campaign ad — replace headlines and descriptions.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L5434-L5448) · Schema: tools/list.

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
  "title": "gads_update_smart_campaign_adArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_bulk_pause_ads-28277a38"></a>

## gads_bulk_pause_ads

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Pause multiple ads at once. Provide an array of {ad_id, ad_group_id} pairs. Returns success/failure per ad.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L5450-L5460) · Schema: tools/list.

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
  "title": "gads_bulk_pause_adsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_bulk_enable_ads-1b4b1c30"></a>

## gads_bulk_enable_ads

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Enable multiple ads at once. Provide an array of {ad_id, ad_group_id} pairs. Returns success/failure per ad.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L5462-L5472) · Schema: tools/list.

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
  "title": "gads_bulk_enable_adsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_shopping_product_ad-4098838b"></a>

## gads_create_shopping_product_ad

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a product shopping ad in a Shopping campaign ad group. Shopping ads auto-pull content from Merchant Center; this just creates the ad slot.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L5474-L5485) · Schema: tools/list.

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
  "title": "gads_create_shopping_product_adArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_image_ad-be5f564e"></a>

## gads_create_image_ad

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a legacy image ad from an uploaded image asset (use for display/remarketing where raw image ads are still allowed).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L5487-L5502) · Schema: tools/list.

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
    "image_asset_id": {
      "title": "Image Asset Id",
      "type": "string"
    },
    "final_urls": {
      "items": {},
      "title": "Final Urls",
      "type": "array"
    },
    "name": {
      "default": null,
      "title": "Name",
      "type": "string"
    },
    "display_url": {
      "default": null,
      "title": "Display Url",
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
    "image_asset_id",
    "final_urls"
  ],
  "title": "gads_create_image_adArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_local_ad-6e9fe7eb"></a>

## gads_create_local_ad

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a Local ad in a Local campaign. Requires 1-5 headlines, 1-5 descriptions, optional marketing images/logos/videos.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L5504-L5521) · Schema: tools/list.

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
    "marketing_image_asset_ids": {
      "default": null,
      "items": {},
      "title": "Marketing Image Asset Ids",
      "type": "array"
    },
    "logo_asset_ids": {
      "default": null,
      "items": {},
      "title": "Logo Asset Ids",
      "type": "array"
    },
    "video_asset_ids": {
      "default": null,
      "items": {},
      "title": "Video Asset Ids",
      "type": "array"
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
    "headlines",
    "descriptions"
  ],
  "title": "gads_create_local_adArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_html5_ad-49be345d"></a>

## gads_create_html5_ad

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create an HTML5 upload ad (display creative bundle) from an uploaded media bundle asset.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L5523-L5537) · Schema: tools/list.

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
    "media_bundle_asset_id": {
      "title": "Media Bundle Asset Id",
      "type": "string"
    },
    "final_urls": {
      "items": {},
      "title": "Final Urls",
      "type": "array"
    },
    "name": {
      "default": null,
      "title": "Name",
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
    "media_bundle_asset_id",
    "final_urls"
  ],
  "title": "gads_create_html5_adArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_expanded_text_ad-8c5749e0"></a>

## gads_create_expanded_text_ad

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a legacy Expanded Text Ad (ETA). ETAs are deprecated for new creation in most accounts but may be supported in specific verticals or for historical work.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L5539-L5558) · Schema: tools/list.

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
    "headline_part1": {
      "title": "Headline Part1",
      "type": "string"
    },
    "headline_part2": {
      "title": "Headline Part2",
      "type": "string"
    },
    "description": {
      "title": "Description",
      "type": "string"
    },
    "final_urls": {
      "items": {},
      "title": "Final Urls",
      "type": "array"
    },
    "headline_part3": {
      "default": null,
      "title": "Headline Part3",
      "type": "string"
    },
    "description2": {
      "default": null,
      "title": "Description2",
      "type": "string"
    },
    "path1": {
      "default": null,
      "title": "Path1",
      "type": "string"
    },
    "path2": {
      "default": null,
      "title": "Path2",
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
    "headline_part1",
    "headline_part2",
    "description",
    "final_urls"
  ],
  "title": "gads_create_expanded_text_adArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_dynamic_search_ad-2cf97e7f"></a>

## gads_create_dynamic_search_ad

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a Dynamic Search Ad (DSA). Headlines and URLs are auto-generated based on your site; you only provide description(s).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L5560-L5573) · Schema: tools/list.

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
    "description1": {
      "title": "Description1",
      "type": "string"
    },
    "description2": {
      "default": null,
      "title": "Description2",
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
    "description1"
  ],
  "title": "gads_create_dynamic_search_adArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_gmail_ad-b5a25db5"></a>

## gads_create_gmail_ad

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a Gmail ad. Gmail ads are a legacy Discovery format — most new accounts should use Demand Gen ads instead. Retained for accounts still using Gmail inventory.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L5575-L5593) · Schema: tools/list.

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
    "teaser_headline": {
      "title": "Teaser Headline",
      "type": "string"
    },
    "teaser_description": {
      "title": "Teaser Description",
      "type": "string"
    },
    "teaser_business_name": {
      "title": "Teaser Business Name",
      "type": "string"
    },
    "final_urls": {
      "items": {},
      "title": "Final Urls",
      "type": "array"
    },
    "teaser_logo_asset_id": {
      "default": null,
      "title": "Teaser Logo Asset Id",
      "type": "string"
    },
    "marketing_image_asset_id": {
      "default": null,
      "title": "Marketing Image Asset Id",
      "type": "string"
    },
    "header_image_asset_id": {
      "default": null,
      "title": "Header Image Asset Id",
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
    "teaser_headline",
    "teaser_description",
    "teaser_business_name",
    "final_urls"
  ],
  "title": "gads_create_gmail_adArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_showcase_shopping_ad-438aa76a"></a>

## gads_create_showcase_shopping_ad

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a Showcase Shopping ad (legacy). Mostly replaced by Performance Max; kept for accounts with legacy shopping campaigns that still support it.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L5595-L5609) · Schema: tools/list.

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
    "headline": {
      "title": "Headline",
      "type": "string"
    },
    "logo_asset_id": {
      "title": "Logo Asset Id",
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
    "ad_group_id",
    "headline",
    "logo_asset_id"
  ],
  "title": "gads_create_showcase_shopping_adArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_in_feed_video_ad-97e8cd70"></a>

## gads_create_in_feed_video_ad

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create an in-feed (discovery) video ad showing on YouTube home/search/related. Requires a YouTube video asset plus headline/descriptions.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L5611-L5627) · Schema: tools/list.

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
      "title": "Headline",
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
    "thumbnail": {
      "default": null,
      "title": "Thumbnail",
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
    "youtube_video_asset_id",
    "headline"
  ],
  "title": "gads_create_in_feed_video_adArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_bumper_ad-64baa897"></a>

## gads_create_bumper_ad

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a Bumper video ad (non-skippable ≤6 seconds). Requires an uploaded YouTube video asset ≤6s.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L5629-L5643) · Schema: tools/list.

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
    "display_url": {
      "default": null,
      "title": "Display Url",
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
  "title": "gads_create_bumper_adArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_non_skippable_in_stream_ad-1011fb98"></a>

## gads_create_non_skippable_in_stream_ad

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a non-skippable in-stream video ad (15-30s). Plays before, during, or after another video on YouTube.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L5645-L5660) · Schema: tools/list.

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
  "title": "gads_create_non_skippable_in_stream_adArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_outstream_video_ad-7448e2d2"></a>

## gads_create_outstream_video_ad

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create an outstream video ad (plays on Google video partner sites outside YouTube).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L5662-L5677) · Schema: tools/list.

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
      "title": "Headline",
      "type": "string"
    },
    "description": {
      "title": "Description",
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
    "youtube_video_asset_id",
    "headline",
    "description"
  ],
  "title": "gads_create_outstream_video_adArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_app_ad-2e6da0b1"></a>

## gads_create_app_ad

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create an App Ad in an ad group
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L5679-L5695) · Schema: tools/list.

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
    "images": {
      "default": null,
      "items": {},
      "title": "Images",
      "type": "array"
    },
    "youtube_videos": {
      "default": null,
      "items": {},
      "title": "Youtube Videos",
      "type": "array"
    },
    "html5_media_bundles": {
      "default": null,
      "items": {},
      "title": "Html5 Media Bundles",
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
    "headlines",
    "descriptions"
  ],
  "title": "gads_create_app_adArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_call_ad-e647c910"></a>

## gads_create_call_ad

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a Call Ad in an ad group
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L5697-L5715) · Schema: tools/list.

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
    "phone_number": {
      "title": "Phone Number",
      "type": "string"
    },
    "country_code": {
      "title": "Country Code",
      "type": "string"
    },
    "description_1": {
      "title": "Description 1",
      "type": "string"
    },
    "headline_1": {
      "title": "Headline 1",
      "type": "string"
    },
    "description_2": {
      "default": null,
      "title": "Description 2",
      "type": "string"
    },
    "headline_2": {
      "default": null,
      "title": "Headline 2",
      "type": "string"
    },
    "business_name": {
      "default": null,
      "title": "Business Name",
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
    "phone_number",
    "country_code",
    "description_1",
    "headline_1"
  ],
  "title": "gads_create_call_adArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_demand_gen_ad-4a8c8df8"></a>

## gads_create_demand_gen_ad

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a Demand Gen multi-asset ad in an ad group
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L5717-L5734) · Schema: tools/list.

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
    "final_urls": {
      "items": {},
      "title": "Final Urls",
      "type": "array"
    },
    "image_asset_ids": {
      "default": null,
      "items": {},
      "title": "Image Asset Ids",
      "type": "array"
    },
    "logo_asset_ids": {
      "default": null,
      "items": {},
      "title": "Logo Asset Ids",
      "type": "array"
    },
    "business_name": {
      "default": null,
      "title": "Business Name",
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
    "headlines",
    "descriptions",
    "final_urls"
  ],
  "title": "gads_create_demand_gen_adArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_hotel_ad-9f28aa4f"></a>

## gads_create_hotel_ad

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a Hotel Ad in an ad group (auto-generated from hotel feed)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L5736-L5747) · Schema: tools/list.

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
  "title": "gads_create_hotel_adArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_smart_campaign_ad-1609927d"></a>

## gads_create_smart_campaign_ad

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a Smart Campaign Ad with exactly 3 headlines and 2 descriptions
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L5749-L5762) · Schema: tools/list.

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
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "headlines",
    "descriptions"
  ],
  "title": "gads_create_smart_campaign_adArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_duplicate_ad-be13b1db"></a>

## gads_duplicate_ad

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Duplicate an ad from one ad group to another ad group
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L5764-L5802) · Schema: tools/list.

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
    "source_ad_id": {
      "title": "Source Ad Id",
      "type": "string"
    },
    "target_ad_group_id": {
      "title": "Target Ad Group Id",
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
    "source_ad_id",
    "target_ad_group_id"
  ],
  "title": "gads_duplicate_adArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_enable_ad-bf6453b1"></a>

## gads_enable_ad

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Enable a specific ad
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L5804-L5816) · Schema: tools/list.

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
  "title": "gads_enable_adArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_ad_details-e726251a"></a>

## gads_get_ad_details

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get full details of a specific ad including all ad type fields and policy status
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L5818-L5865) · Schema: tools/list.

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
  "title": "gads_get_ad_detailsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_ad_strength-0d04d75a"></a>

## gads_get_ad_strength

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get ad strength scores (EXCELLENT, GOOD, AVERAGE, POOR) for ads in an ad group or campaign
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L5867-L5893) · Schema: tools/list.

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
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_get_ad_strengthArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_shareable_preview-34fc2da7"></a>

## gads_get_shareable_preview

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get ad details and a shareable preview URL for a specific ad.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L5895-L5916) · Schema: tools/list.

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
  "title": "gads_get_shareable_previewArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_ads-7209b50d"></a>

## gads_list_ads

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List ads, optionally filtered by ad group, campaign, and status
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L5918-L5952) · Schema: tools/list.

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
  "title": "gads_list_adsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_pause_ad-24c05134"></a>

## gads_pause_ad

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Pause a specific ad
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L5954-L5966) · Schema: tools/list.

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
  "title": "gads_pause_adArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_add_rda_headline-9cddb838"></a>

## gads_add_rda_headline

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Append a headline to a Responsive Display Ad (max 5).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L5968-L5998) · Schema: tools/list.

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
    "text": {
      "title": "Text",
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
    "text"
  ],
  "title": "gads_add_rda_headlineArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_add_rda_description-1a57495c"></a>

## gads_add_rda_description

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Append a description to a Responsive Display Ad (max 5).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L6000-L6030) · Schema: tools/list.

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
    "text": {
      "title": "Text",
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
    "text"
  ],
  "title": "gads_add_rda_descriptionArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_add_rda_marketing_image-e437314b"></a>

## gads_add_rda_marketing_image

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Append a marketing (landscape) image asset to a Responsive Display Ad. Max 15.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L6032-L6063) · Schema: tools/list.

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
    "image_asset_id": {
      "title": "Image Asset Id",
      "type": "string"
    },
    "square": {
      "default": null,
      "title": "Square",
      "type": "boolean"
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
    "image_asset_id"
  ],
  "title": "gads_add_rda_marketing_imageArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_add_rda_logo-7e91db04"></a>

## gads_add_rda_logo

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Append a logo image asset to a Responsive Display Ad.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L6065-L6096) · Schema: tools/list.

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
    "image_asset_id": {
      "title": "Image Asset Id",
      "type": "string"
    },
    "square": {
      "default": null,
      "title": "Square",
      "type": "boolean"
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
    "image_asset_id"
  ],
  "title": "gads_add_rda_logoArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_add_rda_youtube_video-c3cff825"></a>

## gads_add_rda_youtube_video

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Append a YouTube video asset to a Responsive Display Ad (max 5).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L6098-L6128) · Schema: tools/list.

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
    "youtube_video_asset_id": {
      "title": "Youtube Video Asset Id",
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
    "youtube_video_asset_id"
  ],
  "title": "gads_add_rda_youtube_videoArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_rda_call_to_action-1c05eb6f"></a>

## gads_set_rda_call_to_action

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set the call-to-action text on a Responsive Display Ad (e.g.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L6130-L6160) · Schema: tools/list.

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
    "call_to_action_text": {
      "title": "Call To Action Text",
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
    "call_to_action_text"
  ],
  "title": "gads_set_rda_call_to_actionArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_rda_price_prefix-18fd4d48"></a>

## gads_set_rda_price_prefix

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set the price prefix on a Responsive Display Ad (e.g.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L6162-L6192) · Schema: tools/list.

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
    "price_prefix": {
      "title": "Price Prefix",
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
    "price_prefix"
  ],
  "title": "gads_set_rda_price_prefixArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_rda_promo_text-9ec467c2"></a>

## gads_set_rda_promo_text

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set promotional text on a Responsive Display Ad (e.g.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L6194-L6224) · Schema: tools/list.

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
    "promo_text": {
      "title": "Promo Text",
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
    "promo_text"
  ],
  "title": "gads_set_rda_promo_textArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_remove_ad-309fa544"></a>

## gads_remove_ad

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Permanently remove an ad from an ad group
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L6226-L6238) · Schema: tools/list.

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
  "title": "gads_remove_adArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_update_rsa_headline-3263b9b4"></a>

## gads_update_rsa_headline

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Update a single headline of an RSA by 0-based index, preserving all other headlines and pins.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L6240-L6264) · Schema: tools/list.

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
    "index": {
      "title": "Index",
      "type": "number"
    },
    "new_text": {
      "title": "New Text",
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
    "index",
    "new_text"
  ],
  "title": "gads_update_rsa_headlineArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_update_rsa_description-617306d3"></a>

## gads_update_rsa_description

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Update a single description of an RSA by 0-based index, preserving all other descriptions and pins.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L6266-L6290) · Schema: tools/list.

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
    "index": {
      "title": "Index",
      "type": "number"
    },
    "new_text": {
      "title": "New Text",
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
    "index",
    "new_text"
  ],
  "title": "gads_update_rsa_descriptionArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_pin_rsa_headline-ce399269"></a>

## gads_pin_rsa_headline

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Pin an RSA headline to position 1, 2, or 3. Pass position=0 to unpin.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L6292-L6316) · Schema: tools/list.

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
    "index": {
      "title": "Index",
      "type": "number"
    },
    "position": {
      "title": "Position",
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
    "ad_group_id",
    "index",
    "position"
  ],
  "title": "gads_pin_rsa_headlineArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_pin_rsa_description-d8d6759d"></a>

## gads_pin_rsa_description

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Pin an RSA description to position 1 or 2. Pass position=0 to unpin.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L6318-L6342) · Schema: tools/list.

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
    "index": {
      "title": "Index",
      "type": "number"
    },
    "position": {
      "title": "Position",
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
    "ad_group_id",
    "index",
    "position"
  ],
  "title": "gads_pin_rsa_descriptionArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_remove_rsa_headline-1ea3fa44"></a>

## gads_remove_rsa_headline

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Remove a specific headline from an RSA by 0-based index. Minimum 3 headlines enforced.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L6344-L6367) · Schema: tools/list.

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
    "index": {
      "title": "Index",
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
    "ad_group_id",
    "index"
  ],
  "title": "gads_remove_rsa_headlineArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_remove_rsa_description-7fe141ad"></a>

## gads_remove_rsa_description

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Remove a specific description from an RSA by 0-based index. Minimum 2 descriptions enforced.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L6369-L6392) · Schema: tools/list.

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
    "index": {
      "title": "Index",
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
    "ad_group_id",
    "index"
  ],
  "title": "gads_remove_rsa_descriptionArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_update_rsa_paths-740b14fa"></a>

## gads_update_rsa_paths

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Update the display path1 and/or path2 of an RSA (shown in the URL, max 15 chars each).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L6394-L6418) · Schema: tools/list.

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
    "path1": {
      "default": null,
      "title": "Path1",
      "type": "string"
    },
    "path2": {
      "default": null,
      "title": "Path2",
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
  "title": "gads_update_rsa_pathsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_add_rsa_headline-2393fe31"></a>

## gads_add_rsa_headline

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Append a new headline to an RSA (does not replace existing). Max 15 total.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L6420-L6444) · Schema: tools/list.

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
    "text": {
      "title": "Text",
      "type": "string"
    },
    "pin_position": {
      "default": null,
      "title": "Pin Position",
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
    "ad_group_id",
    "text"
  ],
  "title": "gads_add_rsa_headlineArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_add_rsa_description-9b40e801"></a>

## gads_add_rsa_description

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Append a new description to an RSA (does not replace existing). Max 4 total.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L6446-L6470) · Schema: tools/list.

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
    "text": {
      "title": "Text",
      "type": "string"
    },
    "pin_position": {
      "default": null,
      "title": "Pin Position",
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
    "ad_group_id",
    "text"
  ],
  "title": "gads_add_rsa_descriptionArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_unpin_rsa_headline-ea837291"></a>

## gads_unpin_rsa_headline

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Remove pinning from a headline by 0-based index. Headline text stays; just becomes unpinned.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L6472-L6495) · Schema: tools/list.

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
    "index": {
      "title": "Index",
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
    "ad_group_id",
    "index"
  ],
  "title": "gads_unpin_rsa_headlineArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_unpin_rsa_description-7a8851a8"></a>

## gads_unpin_rsa_description

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Remove pinning from a description by 0-based index.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L6497-L6520) · Schema: tools/list.

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
    "index": {
      "title": "Index",
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
    "ad_group_id",
    "index"
  ],
  "title": "gads_unpin_rsa_descriptionArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_ad_final_urls-b246d7e9"></a>

## gads_set_ad_final_urls

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set the final_urls on any ad (RSA, RDA, etc). Replaces existing URLs.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L6522-L6546) · Schema: tools/list.

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
    "final_urls": {
      "items": {},
      "title": "Final Urls",
      "type": "array"
    },
    "final_mobile_urls": {
      "default": null,
      "items": {},
      "title": "Final Mobile Urls",
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
    "ad_group_id",
    "final_urls"
  ],
  "title": "gads_set_ad_final_urlsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_ad_tracking_template-82939c30"></a>

## gads_set_ad_tracking_template

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set the tracking URL template on an ad. Pass empty string to clear.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L6548-L6571) · Schema: tools/list.

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
    "ad_id",
    "ad_group_id",
    "tracking_url_template"
  ],
  "title": "gads_set_ad_tracking_templateArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_ad_url_custom_parameters-b1880fc2"></a>

## gads_set_ad_url_custom_parameters

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set custom parameters on an ad for ValueTrack {_param} substitutions in tracking template or final URL.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L6573-L6596) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_id": {
      "default": null,
      "title": "Ad Id",
      "type": "string"
    },
    "ad_group_id": {
      "default": null,
      "title": "Ad Group Id",
      "type": "string"
    },
    "parameters": {
      "default": null,
      "items": {},
      "title": "Parameters",
      "type": "array"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_set_ad_url_custom_parametersArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_ad_final_mobile_urls-9fb0d896"></a>

## gads_set_ad_final_mobile_urls

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set final_mobile_urls on an ad (landing pages for mobile devices).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L6598-L6621) · Schema: tools/list.

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
    "final_mobile_urls": {
      "items": {},
      "title": "Final Mobile Urls",
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
    "ad_group_id",
    "final_mobile_urls"
  ],
  "title": "gads_set_ad_final_mobile_urlsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_rename_ad-c247f6f0"></a>

## gads_rename_ad

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Change the display name of an ad.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L6623-L6646) · Schema: tools/list.

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
    "name": {
      "title": "Name",
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
    "name"
  ],
  "title": "gads_rename_adArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_ad_policy_status-86681986"></a>

## gads_get_ad_policy_status

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get policy approval status and disapproval reasons for an ad.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L6648-L6670) · Schema: tools/list.

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
  "title": "gads_get_ad_policy_statusArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_rsa_asset_performance-8d54ba9f"></a>

## gads_get_rsa_asset_performance

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get per-asset (headline/description) performance ratings for a Responsive Search Ad. Returns each asset text with its performance label (BEST, GOOD, LOW, LEARNING, PENDING, UNSPECIFIED).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L6672-L6695) · Schema: tools/list.

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
  "title": "gads_get_rsa_asset_performanceArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_ad_performance_by_date-3af7c544"></a>

## gads_get_ad_performance_by_date

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get impressions, clicks, cost, CTR, CPC, and conversions for ads within a date range. Optionally filter by campaign or ad group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L6697-L6727) · Schema: tools/list.

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
    "ad_id": {
      "default": null,
      "title": "Ad Id",
      "type": "string"
    },
    "segment_by_date": {
      "default": null,
      "title": "Segment By Date",
      "type": "boolean"
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
  "title": "gads_get_ad_performance_by_dateArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_update_ad-f34850c8"></a>

## gads_update_ad

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Update an ad status or final URLs
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L6729-L6744) · Schema: tools/list.

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
      "type": "string"
    },
    "final_urls": {
      "default": null,
      "items": {},
      "title": "Final Urls",
      "type": "array"
    },
    "final_mobile_urls": {
      "default": null,
      "items": {},
      "title": "Final Mobile Urls",
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
  "title": "gads_update_adArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_update_responsive_display_ad-25a5ab96"></a>

## gads_update_responsive_display_ad

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Update an existing Responsive Display Ad. You can update any subset of: headlines (array of strings, max 5), descriptions (array, max 5), long_headline, business_name, marketing_image_asset_ids (array), logo_asset_ids (array).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L6746-L6764) · Schema: tools/list.

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
    "long_headline": {
      "default": null,
      "title": "Long Headline",
      "type": "string"
    },
    "business_name": {
      "default": null,
      "title": "Business Name",
      "type": "string"
    },
    "marketing_image_asset_ids": {
      "default": null,
      "items": {},
      "title": "Marketing Image Asset Ids",
      "type": "array"
    },
    "logo_asset_ids": {
      "default": null,
      "items": {},
      "title": "Logo Asset Ids",
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
  "title": "gads_update_responsive_display_adArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_asset_groups-18bf8118"></a>

## gads_list_asset_groups

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List all PMax asset groups. Optionally filter by campaign_id and/or status.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L6766-L6786) · Schema: tools/list.

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
  "title": "gads_list_asset_groupsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_remove_asset_group-7c457cbf"></a>

## gads_remove_asset_group

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Permanently remove a PMax asset group. Cannot be undone.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L6788-L6804) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

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
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "asset_group_id"
  ],
  "title": "gads_remove_asset_groupArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_pause_asset_group-1bda1b19"></a>

## gads_pause_asset_group

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Pause a PMax asset group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L6806-L6822) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

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
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "asset_group_id"
  ],
  "title": "gads_pause_asset_groupArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_enable_asset_group-115ea0bb"></a>

## gads_enable_asset_group

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Enable a PMax asset group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L6824-L6840) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

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
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "asset_group_id"
  ],
  "title": "gads_enable_asset_groupArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_bulk_pause_asset_groups-017a739e"></a>

## gads_bulk_pause_asset_groups

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Pause multiple PMax asset groups in one call.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L6842-L6858) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "asset_group_ids": {
      "items": {},
      "title": "Asset Group Ids",
      "type": "array"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "asset_group_ids"
  ],
  "title": "gads_bulk_pause_asset_groupsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_bulk_enable_asset_groups-520130d6"></a>

## gads_bulk_enable_asset_groups

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Enable multiple PMax asset groups in one call.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L6860-L6876) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "asset_group_ids": {
      "items": {},
      "title": "Asset Group Ids",
      "type": "array"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "asset_group_ids"
  ],
  "title": "gads_bulk_enable_asset_groupsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_bulk_remove_asset_groups-c9253004"></a>

## gads_bulk_remove_asset_groups

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Permanently remove multiple PMax asset groups.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L6878-L6894) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "asset_group_ids": {
      "items": {},
      "title": "Asset Group Ids",
      "type": "array"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "asset_group_ids"
  ],
  "title": "gads_bulk_remove_asset_groupsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_asset_group_final_urls-74675054"></a>

## gads_set_asset_group_final_urls

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Replace the final_urls on a PMax asset group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L6896-L6913) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "asset_group_id": {
      "title": "Asset Group Id",
      "type": "string"
    },
    "final_urls": {
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
    "asset_group_id",
    "final_urls"
  ],
  "title": "gads_set_asset_group_final_urlsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_asset_group_ad_strength-399b1141"></a>

## gads_get_asset_group_ad_strength

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get ad strength rating (POOR / AVERAGE / GOOD / EXCELLENT) of a PMax asset group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L6915-L6931) · Schema: tools/list.

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
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "asset_group_id"
  ],
  "title": "gads_get_asset_group_ad_strengthArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_remove_asset_group_signal-7d6b8969"></a>

## gads_remove_asset_group_signal

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Remove an audience signal from a PMax asset group by signal resource name.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L6933-L6949) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "signal_resource_name": {
      "title": "Signal Resource Name",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "signal_resource_name"
  ],
  "title": "gads_remove_asset_group_signalArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_duplicate_asset_group-a354516b"></a>

## gads_duplicate_asset_group

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Duplicate a PMax asset group into the same or a different PMax campaign. Copies name, final_urls, and all linked assets/signals (best-effort).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L6951-L6969) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "source_asset_group_id": {
      "title": "Source Asset Group Id",
      "type": "string"
    },
    "destination_campaign_id": {
      "title": "Destination Campaign Id",
      "type": "string"
    },
    "new_name": {
      "default": null,
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
    "source_asset_group_id",
    "destination_campaign_id"
  ],
  "title": "gads_duplicate_asset_groupArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_asset_group_listing_filters-bc7ed5f6"></a>

## gads_list_asset_group_listing_filters

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List product listing group filters on a PMax asset group (shopping-inventory partitioning).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L6971-L6987) · Schema: tools/list.

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
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "asset_group_id"
  ],
  "title": "gads_list_asset_group_listing_filtersArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_asset_group_listing_filter-59ca45d2"></a>

## gads_create_asset_group_listing_filter

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a listing group filter (product partition) on a PMax asset group. type: UNIT_INCLUDED (leaf, include), UNIT_EXCLUDED (leaf, exclude), SUBDIVISION (branch).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L6989-L7009) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "asset_group_id": {
      "title": "Asset Group Id",
      "type": "string"
    },
    "type_val": {
      "title": "Type Val",
      "type": "string"
    },
    "parent_filter_id": {
      "default": null,
      "title": "Parent Filter Id",
      "type": "string"
    },
    "dimension": {
      "default": null,
      "title": "Dimension",
      "type": "string"
    },
    "value": {
      "default": null,
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
    "asset_group_id",
    "type_val"
  ],
  "title": "gads_create_asset_group_listing_filterArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_remove_asset_group_listing_filter-dfe272a8"></a>

## gads_remove_asset_group_listing_filter

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Remove a product listing group filter from an asset group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L7011-L7027) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "filter_resource_name": {
      "title": "Filter Resource Name",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "filter_resource_name"
  ],
  "title": "gads_remove_asset_group_listing_filterArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_asset_group_assets-0fcce545"></a>

## gads_list_asset_group_assets

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List all assets linked to a PMax asset group, including text, image, and video assets with their field types.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L7029-L7052) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

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
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "asset_group_id"
  ],
  "title": "gads_list_asset_group_assetsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_add_asset_to_asset_group-d0c2881a"></a>

## gads_add_asset_to_asset_group

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Link an existing asset (by asset_id) to a PMax asset group with a specified field type. Field types: HEADLINE, LONG_HEADLINE, DESCRIPTION, BUSINESS_NAME, MARKETING_IMAGE, SQUARE_MARKETING_IMAGE, LOGO, YOUTUBE_VIDEO.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L7054-L7079) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "asset_group_id": {
      "title": "Asset Group Id",
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
    "asset_group_id",
    "asset_id",
    "field_type"
  ],
  "title": "gads_add_asset_to_asset_groupArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_remove_asset_from_asset_group-25e02863"></a>

## gads_remove_asset_from_asset_group

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Remove (unlink) an asset from a PMax asset group. The asset itself is NOT deleted.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L7081-L7106) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "asset_group_id": {
      "title": "Asset Group Id",
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
    "asset_group_id",
    "asset_id",
    "field_type"
  ],
  "title": "gads_remove_asset_from_asset_groupArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_update_asset_group-9a25bdba"></a>

## gads_update_asset_group

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Update a PMax asset group. Supports changing name, final_urls, status (ENABLED=2/PAUSED=3).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L7108-L7135) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

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
      "default": null,
      "title": "Name",
      "type": "string"
    },
    "final_urls": {
      "default": null,
      "items": {},
      "title": "Final Urls",
      "type": "array"
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
    "asset_group_id"
  ],
  "title": "gads_update_asset_groupArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_asset_group_signals-67f48cea"></a>

## gads_list_asset_group_signals

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List audience signals attached to a PMax asset group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L7137-L7160) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

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
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "asset_group_id"
  ],
  "title": "gads_list_asset_group_signalsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_add_audience_signal_to_asset_group-0dc23152"></a>

## gads_add_audience_signal_to_asset_group

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Add an audience signal to a PMax asset group. Provide either audience_id (for a user list / custom audience resource) or search_theme_text (for a search-theme signal).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L7162-L7187) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "asset_group_id": {
      "title": "Asset Group Id",
      "type": "string"
    },
    "audience_id": {
      "default": null,
      "title": "Audience Id",
      "type": "string"
    },
    "search_theme_text": {
      "default": null,
      "title": "Search Theme Text",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "asset_group_id"
  ],
  "title": "gads_add_audience_signal_to_asset_groupArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_attach_asset_to_campaign-500bcb85"></a>

## gads_attach_asset_to_campaign

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Attach an existing asset to a Google Ads campaign with a specified field type.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L7189-L7202) · Schema: tools/list.

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
    "campaign_id",
    "asset_id",
    "field_type"
  ],
  "title": "gads_attach_asset_to_campaignArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_app_asset-4c14ee87"></a>

## gads_create_app_asset

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create an app asset in Google Ads linking to an iOS or Android application.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L7204-L7216) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "app_id": {
      "title": "App Id",
      "type": "string"
    },
    "app_store": {
      "title": "App Store",
      "type": "string"
    },
    "link_text": {
      "title": "Link Text",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "app_id",
    "app_store",
    "link_text"
  ],
  "title": "gads_create_app_assetArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_call_asset-fee54048"></a>

## gads_create_call_asset

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a call asset in Google Ads with a phone number.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L7218-L7230) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

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
    "call_conversion_action": {
      "default": null,
      "title": "Call Conversion Action",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "phone_number",
    "country_code"
  ],
  "title": "gads_create_call_assetArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_image_asset-42d6fd57"></a>

## gads_create_image_asset

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create an image asset in Google Ads by fetching an image from a URL and uploading it.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L7232-L7243) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "image_url": {
      "title": "Image Url",
      "type": "string"
    },
    "name": {
      "default": null,
      "title": "Name",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "image_url"
  ],
  "title": "gads_create_image_assetArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_lead_form_asset-856e0400"></a>

## gads_create_lead_form_asset

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a lead form asset in Google Ads to collect user information directly from ads.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L7245-L7261) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "business_name": {
      "default": null,
      "title": "Business Name",
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
    "fields": {
      "default": null,
      "items": {},
      "title": "Fields",
      "type": "array"
    },
    "post_submit_headline": {
      "default": null,
      "title": "Post Submit Headline",
      "type": "string"
    },
    "post_submit_description": {
      "default": null,
      "title": "Post Submit Description",
      "type": "string"
    },
    "call_to_action_type": {
      "default": null,
      "title": "Call To Action Type",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_create_lead_form_assetArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_location_asset-c5dd9d34"></a>

## gads_create_location_asset

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a location asset in Google Ads linked to a Business Profile location.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L7263-L7274) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "business_profile_location": {
      "default": null,
      "title": "Business Profile Location",
      "type": "string"
    },
    "location_ownership_type": {
      "default": null,
      "title": "Location Ownership Type",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_create_location_assetArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_price_asset-03dc89fc"></a>

## gads_create_price_asset

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a price asset in Google Ads to showcase products/services with prices.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L7276-L7289) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

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
    "price_qualifier": {
      "default": null,
      "title": "Price Qualifier",
      "type": "string"
    },
    "language_code": {
      "default": null,
      "title": "Language Code",
      "type": "string"
    },
    "items": {
      "default": null,
      "items": {},
      "title": "Items",
      "type": "array"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_create_price_assetArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_promotion_asset-eb142e34"></a>

## gads_create_promotion_asset

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a promotion asset in Google Ads to highlight sales and special offers.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L7291-L7313) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "promotion_target": {
      "title": "Promotion Target",
      "type": "string"
    },
    "language_code": {
      "title": "Language Code",
      "type": "string"
    },
    "currency_code": {
      "title": "Currency Code",
      "type": "string"
    },
    "discount_modifier": {
      "default": null,
      "title": "Discount Modifier",
      "type": "string"
    },
    "percent_off": {
      "default": null,
      "title": "Percent Off",
      "type": "number"
    },
    "money_amount_off": {
      "default": null,
      "title": "Money Amount Off",
      "type": "number"
    },
    "promotion_code": {
      "default": null,
      "title": "Promotion Code",
      "type": "string"
    },
    "orders_over_amount": {
      "default": null,
      "title": "Orders Over Amount",
      "type": "number"
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
    "occasion": {
      "default": null,
      "title": "Occasion",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "promotion_target",
    "language_code",
    "currency_code"
  ],
  "title": "gads_create_promotion_assetArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_structured_snippet_asset-d5f2b00b"></a>

## gads_create_structured_snippet_asset

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a structured snippet asset in Google Ads with a header and list of values.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L7315-L7326) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

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
      "items": {},
      "title": "Values",
      "type": "array"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "header",
    "values"
  ],
  "title": "gads_create_structured_snippet_assetArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_detach_asset_from_campaign-1ad6bc2d"></a>

## gads_detach_asset_from_campaign

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Detach (remove) an asset from a Google Ads campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L7328-L7341) · Schema: tools/list.

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
    "campaign_id",
    "asset_id",
    "field_type"
  ],
  "title": "gads_detach_asset_from_campaignArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_asset_details-7663dd67"></a>

## gads_get_asset_details

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get detailed information about a specific Google Ads asset by ID.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L7343-L7366) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "asset_id": {
      "title": "Asset Id",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "asset_id"
  ],
  "title": "gads_get_asset_detailsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_asset_performance-9da92019"></a>

## gads_get_asset_performance

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, max, \_search, min, \_row\_to\_dict, data.append, row.get, isinstance.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Performance of assets as they served inside ads, over the last 30 days. Args: asset_id: Optional asset ID, to look at a single asset. limit: Maximum rows to return. Default 200; raise it if the answer is being cut off.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L7368-L7406) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "asset_id": {
      "default": null,
      "title": "Asset Id",
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
  "title": "gads_get_asset_performanceArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_ad_group_assets-a6cf9d18"></a>

## gads_list_ad_group_assets

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List all assets attached to a specific Google Ads ad group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L7408-L7425) · Schema: tools/list.

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
  "title": "gads_list_ad_group_assetsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_assets-9ef9b9fb"></a>

## gads_list_assets

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, max, \_search, min, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List assets in the account library. Args: type_val: Optional asset type filter, e.g. IMAGE, TEXT, YOUTUBE_VIDEO, SITELINK, CALL. limit: Maximum rows to return. Default 200; raise it if the answer is being cut off.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L7427-L7453) · Schema: tools/list.

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
  "title": "gads_list_assetsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_campaign_assets-9c8fee25"></a>

## gads_list_campaign_assets

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List all assets attached to a specific Google Ads campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L7455-L7467) · Schema: tools/list.

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
    "field_type": {
      "default": null,
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
    "campaign_id"
  ],
  "title": "gads_list_campaign_assetsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_update_asset-32fac76e"></a>

## gads_update_asset

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Update an existing Google Ads asset (e.g., rename it).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L7469-L7480) · Schema: tools/list.

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
    "name": {
      "default": null,
      "title": "Name",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "asset_id"
  ],
  "title": "gads_update_assetArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_upload_image_asset_base64-96f8e501"></a>

## gads_upload_image_asset_base64

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Upload an image asset to Google Ads from a base64-encoded string. Useful when the image is not available at a public URL. Returns the new asset ID and resource name.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L7482-L7493) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "image_data": {
      "title": "Image Data",
      "type": "string"
    },
    "name": {
      "default": null,
      "title": "Name",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "image_data"
  ],
  "title": "gads_upload_image_asset_base64Arguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_upload_text_asset-bd4b7275"></a>

## gads_upload_text_asset

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a text asset in Google Ads.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L7495-L7506) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "text": {
      "title": "Text",
      "type": "string"
    },
    "name": {
      "default": null,
      "title": "Name",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "text"
  ],
  "title": "gads_upload_text_assetArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_upload_video_asset-0083c6ac"></a>

## gads_upload_video_asset

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a YouTube video asset in Google Ads using a YouTube video ID.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L7508-L7519) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "youtube_video_id": {
      "title": "Youtube Video Id",
      "type": "string"
    },
    "name": {
      "default": null,
      "title": "Name",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "youtube_video_id"
  ],
  "title": "gads_upload_video_assetArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_add_users_to_customer_match_list-a8e8aaac"></a>

## gads_add_users_to_customer_match_list

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, require\_editor, \_get\_client, client.get\_service, client.get\_type, service.mutate\_offline\_user\_data\_jobs.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Upload hashed user data (email, phone, address) to a Google Ads Customer Match list via an offline user data job.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L7521-L7538) · Schema: tools/list.

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
    "users": {
      "items": {},
      "title": "Users",
      "type": "array"
    },
    "remove_all_existing": {
      "default": null,
      "title": "Remove All Existing",
      "type": "boolean"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "user_list_id",
    "users"
  ],
  "title": "gads_add_users_to_customer_match_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_attach_audience_to_ad_group-ad3fce89"></a>

## gads_attach_audience_to_ad_group

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Attach a user list audience to a Google Ads ad group as an ad group criterion with an optional bid modifier.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L7540-L7554) · Schema: tools/list.

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
    "user_list_id": {
      "title": "User List Id",
      "type": "string"
    },
    "bid_modifier": {
      "default": null,
      "title": "Bid Modifier",
      "type": "number"
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
    "ad_group_id",
    "user_list_id"
  ],
  "title": "gads_attach_audience_to_ad_groupArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_attach_audience_to_campaign-5b42989c"></a>

## gads_attach_audience_to_campaign

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Attach a user list audience to a Google Ads campaign as a campaign criterion with an optional bid modifier.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L7556-L7570) · Schema: tools/list.

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
    "user_list_id": {
      "title": "User List Id",
      "type": "string"
    },
    "bid_modifier": {
      "default": null,
      "title": "Bid Modifier",
      "type": "number"
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
    "campaign_id",
    "user_list_id"
  ],
  "title": "gads_attach_audience_to_campaignArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_combined_audience-e4b3491e"></a>

## gads_create_combined_audience

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Attempt to create a combined audience. Note: Combined audiences are read-only in the Google Ads API; this tool returns existing combined audiences and an explanation.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L7572-L7582) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "name": {
      "default": null,
      "title": "Name",
      "type": "string"
    },
    "description": {
      "default": null,
      "title": "Description",
      "type": "string"
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
  "title": "gads_create_combined_audienceArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_custom_audience-0fdd8ab1"></a>

## gads_create_custom_audience

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a custom audience in Google Ads based on keywords, URLs, apps, or place categories.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L7584-L7597) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "type_val": {
      "title": "Type Val",
      "type": "string"
    },
    "name": {
      "default": null,
      "title": "Name",
      "type": "string"
    },
    "description": {
      "default": null,
      "title": "Description",
      "type": "string"
    },
    "members": {
      "default": null,
      "items": {},
      "title": "Members",
      "type": "array"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "type_val"
  ],
  "title": "gads_create_custom_audienceArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_customer_match_list-c2920770"></a>

## gads_create_customer_match_list

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a CRM-based Customer Match user list in Google Ads for uploading first-party customer data.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L7599-L7611) · Schema: tools/list.

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
    "description": {
      "default": null,
      "title": "Description",
      "type": "string"
    },
    "membership_lifespan_days": {
      "default": null,
      "title": "Membership Lifespan Days",
      "type": "number"
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
  "title": "gads_create_customer_match_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_remarketing_list-ce294344"></a>

## gads_create_remarketing_list

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a rule-based remarketing user list in Google Ads, optionally filtered by URL.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L7613-L7627) · Schema: tools/list.

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
    "description": {
      "default": null,
      "title": "Description",
      "type": "string"
    },
    "membership_lifespan_days": {
      "default": null,
      "title": "Membership Lifespan Days",
      "type": "number"
    },
    "rule_type": {
      "default": null,
      "title": "Rule Type",
      "type": "string"
    },
    "url_filter": {
      "default": null,
      "title": "Url Filter",
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
  "title": "gads_create_remarketing_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_similar_audience-f839a226"></a>

## gads_create_similar_audience

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Look up similar audiences generated by Google for a given seed user list. Note: Similar audiences cannot be manually created via API — Google generates them automatically.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L7629-L7638) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "seed_user_list_id": {
      "title": "Seed User List Id",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "seed_user_list_id"
  ],
  "title": "gads_create_similar_audienceArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_audience_composition-e25f5d56"></a>

## gads_get_audience_composition

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get composition details and demographic breakdown signals for a Google Ads user list.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L7640-L7649) · Schema: tools/list.

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
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "user_list_id"
  ],
  "title": "gads_get_audience_compositionArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_audience_insights-e8ad5b74"></a>

## gads_get_audience_insights

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get size, eligibility, and configuration insights for a specific Google Ads user list.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L7651-L7660) · Schema: tools/list.

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
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "user_list_id"
  ],
  "title": "gads_get_audience_insightsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_audiences-af737afe"></a>

## gads_list_audiences

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, max, \_search, min, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List audiences defined on the account. Args: type_val: Ignored -- the audience resource has no type field. Kept so callers that pass it everywhere do not break. For remarketing and customer-match lists, which do have types, use gads_list_user_lists. limit: Maximum rows to return. Default 200; raise it if the answer is being cut off.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L7662-L7688) · Schema: tools/list.

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
  "title": "gads_list_audiencesArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_user_lists-6daa8605"></a>

## gads_list_user_lists

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, max, \_search, min, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List remarketing and customer-match user lists with their sizes. Args: type_val: Optional type filter, e.g. REMARKETING, CRM_BASED, RULE_BASED. limit: Maximum rows to return. Default 200; raise it if the answer is being cut off.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L7690-L7720) · Schema: tools/list.

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
  "title": "gads_list_user_listsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_update_user_list-c3cd917c"></a>

## gads_update_user_list

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Update a Google Ads user list — rename, change description, membership lifespan, or open/close status.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L7722-L7736) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "user_list_id": {
      "title": "User List Id",
      "type": "string"
    },
    "name": {
      "default": null,
      "title": "Name",
      "type": "string"
    },
    "description": {
      "default": null,
      "title": "Description",
      "type": "string"
    },
    "membership_lifespan_days": {
      "default": null,
      "title": "Membership Lifespan Days",
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
    "user_list_id"
  ],
  "title": "gads_update_user_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_bidding_data_exclusion-c535c903"></a>

## gads_create_bidding_data_exclusion

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a bidding data exclusion to exclude a time period from smart bidding models.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L7738-L7751) · Schema: tools/list.

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
    "start_date_time": {
      "title": "Start Date Time",
      "type": "string"
    },
    "end_date_time": {
      "title": "End Date Time",
      "type": "string"
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
    "name",
    "start_date_time",
    "end_date_time"
  ],
  "title": "gads_create_bidding_data_exclusionArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_bidding_seasonality_adjustment-1497e8a4"></a>

## gads_create_bidding_seasonality_adjustment

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a bidding seasonality adjustment to inform smart bidding of expected conversion rate changes.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L7753-L7767) · Schema: tools/list.

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
    "start_date_time": {
      "title": "Start Date Time",
      "type": "string"
    },
    "end_date_time": {
      "title": "End Date Time",
      "type": "string"
    },
    "conversion_rate_modifier": {
      "title": "Conversion Rate Modifier",
      "type": "number"
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
    "name",
    "start_date_time",
    "end_date_time",
    "conversion_rate_modifier"
  ],
  "title": "gads_create_bidding_seasonality_adjustmentArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_bidding_strategy-120beef8"></a>

## gads_create_bidding_strategy

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a portfolio bidding strategy in Google Ads (TARGET_CPA, TARGET_ROAS, MAXIMIZE_CONVERSIONS, MAXIMIZE_CONVERSION_VALUE, TARGET_IMPRESSION_SHARE).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L7769-L7785) · Schema: tools/list.

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
    "target_cpa": {
      "default": null,
      "title": "Target Cpa",
      "type": "number"
    },
    "target_roas": {
      "default": null,
      "title": "Target Roas",
      "type": "number"
    },
    "target_impression_share_location": {
      "default": null,
      "title": "Target Impression Share Location",
      "type": "string"
    },
    "impression_share_fraction": {
      "default": null,
      "title": "Impression Share Fraction",
      "type": "number"
    },
    "max_cpc_bid_ceiling_micros": {
      "default": null,
      "title": "Max Cpc Bid Ceiling Micros",
      "type": "number"
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
  "title": "gads_create_bidding_strategyArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_bidding_strategy_simulation-2e2aa778"></a>

## gads_get_bidding_strategy_simulation

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get simulation data points for a portfolio bidding strategy.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L7787-L7801) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "bidding_strategy_id": {
      "title": "Bidding Strategy Id",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "bidding_strategy_id"
  ],
  "title": "gads_get_bidding_strategy_simulationArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_bidding_strategies-5248cd92"></a>

## gads_list_bidding_strategies

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, max, \_search, min, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List portfolio bidding strategies and how many campaigns use each. Args: type_val: Optional type filter, e.g. TARGET_CPA, TARGET_ROAS, MAXIMIZE_CONVERSIONS. limit: Maximum rows to return. Default 200; raise it if the answer is being cut off.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L7803-L7830) · Schema: tools/list.

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
  "title": "gads_list_bidding_strategiesArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_enhanced_cpc-d7ff70fe"></a>

## gads_set_enhanced_cpc

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Enable Enhanced CPC bidding on a campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L7832-L7843) · Schema: tools/list.

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
  "title": "gads_set_enhanced_cpcArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_maximize_conversion_value-595f5c87"></a>

## gads_set_maximize_conversion_value

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set Maximize Conversion Value bidding strategy on a campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L7845-L7857) · Schema: tools/list.

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
    "campaign_id"
  ],
  "title": "gads_set_maximize_conversion_valueArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_maximize_conversions-fa501387"></a>

## gads_set_maximize_conversions

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set Maximize Conversions bidding strategy on a campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L7859-L7871) · Schema: tools/list.

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
    "target_cpa": {
      "default": null,
      "title": "Target Cpa",
      "type": "number"
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
  "title": "gads_set_maximize_conversionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_target_cpa-1898d9c4"></a>

## gads_set_target_cpa

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set Target CPA bidding strategy on a campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L7873-L7885) · Schema: tools/list.

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
    "target_cpa": {
      "title": "Target Cpa",
      "type": "number"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id",
    "target_cpa"
  ],
  "title": "gads_set_target_cpaArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_target_impression_share-e3881b7a"></a>

## gads_set_target_impression_share

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set Target Impression Share bidding on a campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L7887-L7901) · Schema: tools/list.

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
    "location": {
      "title": "Location",
      "type": "string"
    },
    "fraction": {
      "title": "Fraction",
      "type": "number"
    },
    "max_cpc_bid_ceiling_micros": {
      "default": null,
      "title": "Max Cpc Bid Ceiling Micros",
      "type": "number"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id",
    "location",
    "fraction"
  ],
  "title": "gads_set_target_impression_shareArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_target_roas-10584d5b"></a>

## gads_set_target_roas

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set Target ROAS bidding strategy on a campaign (e.g. 4.0 = 400% return).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L7903-L7915) · Schema: tools/list.

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
    "target_roas": {
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
    "campaign_id",
    "target_roas"
  ],
  "title": "gads_set_target_roasArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_update_bidding_strategy-fcb83e1c"></a>

## gads_update_bidding_strategy

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Update an existing Google Ads portfolio bidding strategy — change name, target CPA, target ROAS, impression share, or bid ceiling.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L7917-L7932) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "bidding_strategy_id": {
      "title": "Bidding Strategy Id",
      "type": "string"
    },
    "name": {
      "default": null,
      "title": "Name",
      "type": "string"
    },
    "target_cpa": {
      "default": null,
      "title": "Target Cpa",
      "type": "number"
    },
    "target_roas": {
      "default": null,
      "title": "Target Roas",
      "type": "number"
    },
    "impression_share_fraction": {
      "default": null,
      "title": "Impression Share Fraction",
      "type": "number"
    },
    "max_cpc_bid_ceiling_micros": {
      "default": null,
      "title": "Max Cpc Bid Ceiling Micros",
      "type": "number"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "bidding_strategy_id"
  ],
  "title": "gads_update_bidding_strategyArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_shared_budget-11a6904d"></a>

## gads_create_shared_budget

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a new shared campaign budget in Google Ads.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L7934-L7946) · Schema: tools/list.

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
    "amount": {
      "title": "Amount",
      "type": "number"
    },
    "delivery_method": {
      "default": null,
      "title": "Delivery Method",
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
    "amount"
  ],
  "title": "gads_create_shared_budgetArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_budget_details-72bd8733"></a>

## gads_get_budget_details

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get full details for a specific campaign budget by its ID.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L7948-L7957) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "budget_id": {
      "title": "Budget Id",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "budget_id"
  ],
  "title": "gads_get_budget_detailsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_budget_pacing-7927c62d"></a>

## gads_get_budget_pacing

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, data.sort, conditions.append, \_row\_to\_dict, by\_budget.setdefault, \_m, round.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Compare each budget's daily amount against what its campaigns spent this month. Args: budget_id: Optional budget ID, to look at a single budget.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L7959-L8020) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "budget_id": {
      "default": null,
      "title": "Budget Id",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_get_budget_pacingArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_budgets-e29eb165"></a>

## gads_list_budgets

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, max, \_search, min, \_row\_to\_dict, data.append, row.get, isinstance.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List campaign budgets with their amounts, delivery method, and how many campaigns share each. Args: limit: Maximum rows to return. Default 200; raise it if the answer is being cut off.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L8022-L8054) · Schema: tools/list.

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
  "title": "gads_list_budgetsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_update_budget-1a948c09"></a>

## gads_update_budget

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Update a campaign budget amount or name in Google Ads.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L8056-L8068) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "budget_id": {
      "title": "Budget Id",
      "type": "string"
    },
    "amount": {
      "default": null,
      "title": "Amount",
      "type": "number"
    },
    "name": {
      "default": null,
      "title": "Name",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "budget_id"
  ],
  "title": "gads_update_budgetArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_campaign_draft-3e151b1c"></a>

## gads_create_campaign_draft

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a campaign draft from an existing Google Ads campaign for testing changes.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L8070-L8085) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "base_campaign_id": {
      "title": "Base Campaign Id",
      "type": "string"
    },
    "name": {
      "title": "Name",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "base_campaign_id",
    "name"
  ],
  "title": "gads_create_campaign_draftArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_campaign_experiment-808a2f8e"></a>

## gads_create_campaign_experiment

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a campaign experiment (A/B test) by creating a draft of the base campaign with a traffic split.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L8087-L8104) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "base_campaign_id": {
      "title": "Base Campaign Id",
      "type": "string"
    },
    "name": {
      "title": "Name",
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
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "base_campaign_id",
    "name",
    "traffic_split_percent"
  ],
  "title": "gads_create_campaign_experimentArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_duplicate_campaign-fcefbdd1"></a>

## gads_duplicate_campaign

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, \_search, client.get\_service, client.get\_type, budget\_service.mutate\_campaign\_budgets, campaign\_service.mutate\_campaigns, new\_campaign\_rn.split.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Duplicate a campaign including its budget, bidding strategy, ad groups, keywords, and responsive search ads. Args: source_campaign_id: ID of the campaign to copy. new_name: Name for the new campaign. pause_new_campaign: If True or unset (default), the new campaign is created PAUSED for safety. Pass False to create it ENABLED immediately. customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L8106-L8279) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

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
    "pause_new_campaign": {
      "default": null,
      "title": "Pause New Campaign",
      "type": "boolean"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "source_campaign_id",
    "new_name"
  ],
  "title": "gads_duplicate_campaignArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_campaign_details-71bd024a"></a>

## gads_get_campaign_details

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get full details of a Google Ads campaign including network settings, targeting, budget, and bid strategy.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L8281-L8326) · Schema: tools/list.

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
  "title": "gads_get_campaign_detailsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_campaign_draft-30113a3d"></a>

## gads_get_campaign_draft

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get details of a Google Ads campaign draft by draft ID.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L8328-L8349) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "draft_id": {
      "title": "Draft Id",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "draft_id"
  ],
  "title": "gads_get_campaign_draftArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_campaign_simulation-b9a38fb6"></a>

## gads_get_campaign_simulation

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get bid simulation data for a Google Ads campaign (TARGET_CPA, TARGET_ROAS, TARGET_IMPRESSION_SHARE).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L8351-L8374) · Schema: tools/list.

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
  "title": "gads_get_campaign_simulationArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_campaigns-60db3673"></a>

## gads_list_campaigns

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List Google Ads campaigns with optional status filter.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L8376-L8399) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
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
  "title": "gads_list_campaignsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_promote_campaign_draft-31903366"></a>

## gads_promote_campaign_draft

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Promote a Google Ads campaign draft, applying its changes to the base campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L8401-L8411) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "draft_id": {
      "title": "Draft Id",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "draft_id"
  ],
  "title": "gads_promote_campaign_draftArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_campaign_bid_strategy-53eb0eb2"></a>

## gads_set_campaign_bid_strategy

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set the bidding strategy for a Google Ads campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L8413-L8430) · Schema: tools/list.

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
    "strategy_type": {
      "title": "Strategy Type",
      "type": "string"
    },
    "target_cpa": {
      "default": null,
      "title": "Target Cpa",
      "type": "number"
    },
    "target_roas": {
      "default": null,
      "title": "Target Roas",
      "type": "number"
    },
    "target_impression_share_location": {
      "default": null,
      "title": "Target Impression Share Location",
      "type": "string"
    },
    "target_impression_share_fraction": {
      "default": null,
      "title": "Target Impression Share Fraction",
      "type": "number"
    },
    "max_cpc_bid_ceiling_micros": {
      "default": null,
      "title": "Max Cpc Bid Ceiling Micros",
      "type": "number"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id",
    "strategy_type"
  ],
  "title": "gads_set_campaign_bid_strategyArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_campaign_device_bids-8f5ab102"></a>

## gads_set_campaign_device_bids

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set device bid modifiers for a Google Ads campaign (desktop, mobile, tablet).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L8432-L8454) · Schema: tools/list.

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
    "desktop_bid_modifier": {
      "default": null,
      "title": "Desktop Bid Modifier",
      "type": "number"
    },
    "mobile_bid_modifier": {
      "default": null,
      "title": "Mobile Bid Modifier",
      "type": "number"
    },
    "tablet_bid_modifier": {
      "default": null,
      "title": "Tablet Bid Modifier",
      "type": "number"
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
  "title": "gads_set_campaign_device_bidsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_campaign_dsa_settings-b7d40a05"></a>

## gads_set_campaign_dsa_settings

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set Dynamic Search Ads (DSA) settings for a Google Ads campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L8456-L8471) · Schema: tools/list.

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
    "website_url": {
      "title": "Website Url",
      "type": "string"
    },
    "language_code": {
      "title": "Language Code",
      "type": "string"
    },
    "page_feed_ids": {
      "default": null,
      "items": {},
      "title": "Page Feed Ids",
      "type": "array"
    },
    "use_supplied_urls_only": {
      "default": null,
      "title": "Use Supplied Urls Only",
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
    "website_url",
    "language_code"
  ],
  "title": "gads_set_campaign_dsa_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_campaign_frequency_cap-c8cb7844"></a>

## gads_set_campaign_frequency_cap

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set frequency capping rules for a Google Ads campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L8473-L8485) · Schema: tools/list.

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
    "frequency_caps": {
      "default": null,
      "items": {},
      "title": "Frequency Caps",
      "type": "array"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_set_campaign_frequency_capArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_campaign_geo_targets-000da61d"></a>

## gads_set_campaign_geo_targets

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, svc.mutate\_campaign\_criteria, \_search, client.get\_type, ops.append, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Add or remove geo location targeting criteria for a Google Ads campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L8487-L8532) · Schema: tools/list.

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
    "add_location_ids": {
      "default": null,
      "items": {},
      "title": "Add Location Ids",
      "type": "array"
    },
    "remove_location_ids": {
      "default": null,
      "items": {},
      "title": "Remove Location Ids",
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
  "title": "gads_set_campaign_geo_targetsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_campaign_languages-90fc424f"></a>

## gads_set_campaign_languages

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set language targeting criteria for a Google Ads campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L8534-L8547) · Schema: tools/list.

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
    "language_ids": {
      "items": {},
      "title": "Language Ids",
      "type": "array"
    },
    "replace_existing": {
      "default": null,
      "title": "Replace Existing",
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
    "language_ids"
  ],
  "title": "gads_set_campaign_languagesArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_campaign_schedule-7abb9ee5"></a>

## gads_set_campaign_schedule

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set ad schedule (dayparting) for a Google Ads campaign, replacing any existing schedule.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L8549-L8561) · Schema: tools/list.

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
    "ad_schedule": {
      "default": null,
      "items": {},
      "title": "Ad Schedule",
      "type": "array"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_set_campaign_scheduleArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_set_campaign_targeting-9e9af55a"></a>

## gads_set_campaign_targeting

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Set language and geo targeting criteria for a Google Ads campaign (replaces existing criteria of each type).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L8563-L8576) · Schema: tools/list.

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
    "language_ids": {
      "default": null,
      "items": {},
      "title": "Language Ids",
      "type": "array"
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
    "campaign_id"
  ],
  "title": "gads_set_campaign_targetingArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_update_campaign-7b76d2e6"></a>

## gads_update_campaign

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, conditions.append, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Update an existing Google Ads campaign (name, status, budget, dates, network settings).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L8578-L8597) · Schema: tools/list.

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
      "default": null,
      "title": "Name",
      "type": "string"
    },
    "status": {
      "default": null,
      "title": "Status",
      "type": "string"
    },
    "daily_budget_micros": {
      "default": null,
      "title": "Daily Budget Micros",
      "type": "number"
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
    "network_settings": {
      "additionalProperties": true,
      "default": null,
      "title": "Network Settings",
      "type": "object"
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
  "title": "gads_update_campaignArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_conversion_custom_variable-0e096092"></a>

## gads_create_conversion_custom_variable

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a custom variable for conversion tracking in Google Ads.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L8599-L8611) · Schema: tools/list.

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
    "tag": {
      "title": "Tag",
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
    "name",
    "tag"
  ],
  "title": "gads_create_conversion_custom_variableArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_conversion_value_rule-7fa37aac"></a>

## gads_create_conversion_value_rule

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a conversion value rule to adjust conversion values based on audience, device, location, or query term conditions.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L8613-L8627) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "action": {
      "title": "Action",
      "type": "string"
    },
    "value": {
      "title": "Value",
      "type": "number"
    },
    "condition_type": {
      "default": null,
      "title": "Condition Type",
      "type": "string"
    },
    "audience_user_list_ids": {
      "default": null,
      "items": {},
      "title": "Audience User List Ids",
      "type": "array"
    },
    "device_types": {
      "default": null,
      "items": {},
      "title": "Device Types",
      "type": "array"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "action",
    "value"
  ],
  "title": "gads_create_conversion_value_ruleArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_conversion_upload_summary-ec236292"></a>

## gads_get_conversion_upload_summary

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get a summary of offline conversion upload jobs and their status.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L8629-L8643) · Schema: tools/list.

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
  "title": "gads_get_conversion_upload_summaryArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_conversion_actions-34f3f826"></a>

## gads_list_conversion_actions

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, max, \_search, min, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List conversion actions, optionally filtered by type. Args: type_val: Optional type filter, e.g. WEBPAGE, UPLOAD_CLICKS, PHONE_CALL_FROM_ADS. limit: Maximum rows to return. Default 200; raise it if the answer is being cut off.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L8645-L8673) · Schema: tools/list.

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
  "title": "gads_list_conversion_actionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_conversion_value_rules-fbb97550"></a>

## gads_list_conversion_value_rules

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List conversion value rules in a Google Ads account.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L8675-L8683) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
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
  "title": "gads_list_conversion_value_rulesArguments",
  "type": "object"
}
```

</details>
