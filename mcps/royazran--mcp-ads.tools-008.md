# RoyAzran/mcp-ads: supporting and other-product tools

[Provider inventory](royazran--mcp-ads.md) · [Global tool index](../TOOL_INDEX.md)

Tools 1051–1200 of 3131. Exact schemas from the same upstream snapshot.

<a id="tool-tiktok_ads_update_ad-17fe88fa"></a>

## tiktok_ads_update_ad

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, require\_editor, \_parse\_json\_arg, body.setdefault, \_tiktok\_post, isinstance, \_json.

```text
[WRITE] TikTok Ads tool backed by Pipedream managed auth. Update a TikTok ad.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L724-L738) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "advertiser_id": {
      "title": "Advertiser Id",
      "type": "string"
    },
    "ad_id": {
      "title": "Ad Id",
      "type": "string"
    },
    "updates_json": {
      "title": "Updates Json",
      "type": "string"
    },
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    }
  },
  "required": [
    "advertiser_id",
    "ad_id",
    "updates_json"
  ],
  "title": "tiktok_ads_update_adArguments",
  "type": "object"
}
```

</details>

<a id="tool-tiktok_ads_adgroup_report-491dd93a"></a>

## tiktok_ads_adgroup_report

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, \_tiktok\_get, \_json, date.today, timedelta, \_parse\_json\_arg.

```text
[READ] TikTok Ads tool backed by Pipedream managed auth. Get TikTok ad-group-level report.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L741-L769) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "advertiser_id": {
      "title": "Advertiser Id",
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
    "dimensions_json": {
      "default": "[\"adgroup_id\"]",
      "title": "Dimensions Json",
      "type": "string"
    },
    "metrics_json": {
      "default": "[\"spend\",\"impressions\",\"clicks\",\"ctr\",\"cpc\",\"cpm\",\"conversion\",\"cost_per_conversion\"]",
      "title": "Metrics Json",
      "type": "string"
    },
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    }
  },
  "required": [
    "advertiser_id"
  ],
  "title": "tiktok_ads_adgroup_reportArguments",
  "type": "object"
}
```

</details>

<a id="tool-tiktok_ads_ad_report-9394504a"></a>

## tiktok_ads_ad_report

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, \_tiktok\_get, \_json, date.today, timedelta, \_parse\_json\_arg.

```text
[READ] TikTok Ads tool backed by Pipedream managed auth. Get TikTok ad-level report.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L772-L800) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "advertiser_id": {
      "title": "Advertiser Id",
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
    "dimensions_json": {
      "default": "[\"ad_id\"]",
      "title": "Dimensions Json",
      "type": "string"
    },
    "metrics_json": {
      "default": "[\"spend\",\"impressions\",\"clicks\",\"ctr\",\"cpc\",\"cpm\",\"conversion\",\"cost_per_conversion\"]",
      "title": "Metrics Json",
      "type": "string"
    },
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    }
  },
  "required": [
    "advertiser_id"
  ],
  "title": "tiktok_ads_ad_reportArguments",
  "type": "object"
}
```

</details>

<a id="tool-tiktok_ads_custom_report-23aea8f4"></a>

## tiktok_ads_custom_report

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, \_parse\_json\_arg, params.setdefault, \_tiktok\_get, isinstance, \_json.

```text
[READ] TikTok Ads tool backed by Pipedream managed auth. Run a custom TikTok integrated report. Pass any TikTok report params as JSON.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L803-L813) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "advertiser_id": {
      "title": "Advertiser Id",
      "type": "string"
    },
    "report_json": {
      "title": "Report Json",
      "type": "string"
    },
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    }
  },
  "required": [
    "advertiser_id",
    "report_json"
  ],
  "title": "tiktok_ads_custom_reportArguments",
  "type": "object"
}
```

</details>

<a id="tool-tiktok_ads_list_pixels-71ae01d1"></a>

## tiktok_ads_list_pixels

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, \_tiktok\_get, \_json.

```text
[READ] TikTok Ads tool backed by Pipedream managed auth. List TikTok pixels for an advertiser.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L816-L822) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "advertiser_id": {
      "title": "Advertiser Id",
      "type": "string"
    },
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    }
  },
  "required": [
    "advertiser_id"
  ],
  "title": "tiktok_ads_list_pixelsArguments",
  "type": "object"
}
```

</details>

<a id="tool-tiktok_ads_create_pixel-8754af7f"></a>

## tiktok_ads_create_pixel

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, require\_editor, \_parse\_json\_arg, body.setdefault, \_tiktok\_post, isinstance, \_json.

```text
[WRITE] TikTok Ads tool backed by Pipedream managed auth. Create a TikTok pixel. Pass pixel fields as JSON; advertiser_id is added if omitted.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L825-L838) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "advertiser_id": {
      "title": "Advertiser Id",
      "type": "string"
    },
    "pixel_json": {
      "title": "Pixel Json",
      "type": "string"
    },
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    }
  },
  "required": [
    "advertiser_id",
    "pixel_json"
  ],
  "title": "tiktok_ads_create_pixelArguments",
  "type": "object"
}
```

</details>

<a id="tool-tiktok_ads_update_pixel-dfaf7d63"></a>

## tiktok_ads_update_pixel

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, require\_editor, \_parse\_json\_arg, body.setdefault, \_tiktok\_post, isinstance, \_json.

```text
[WRITE] TikTok Ads tool backed by Pipedream managed auth. Update a TikTok pixel.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L841-L855) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "advertiser_id": {
      "title": "Advertiser Id",
      "type": "string"
    },
    "pixel_id": {
      "title": "Pixel Id",
      "type": "string"
    },
    "updates_json": {
      "title": "Updates Json",
      "type": "string"
    },
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    }
  },
  "required": [
    "advertiser_id",
    "pixel_id",
    "updates_json"
  ],
  "title": "tiktok_ads_update_pixelArguments",
  "type": "object"
}
```

</details>

<a id="tool-tiktok_ads_list_custom_audiences-e7e33e95"></a>

## tiktok_ads_list_custom_audiences

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, \_tiktok\_get, \_json, max, min.

```text
[READ] TikTok Ads tool backed by Pipedream managed auth. List TikTok custom audiences.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L858-L868) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "advertiser_id": {
      "title": "Advertiser Id",
      "type": "string"
    },
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    },
    "page_size": {
      "default": 100,
      "title": "Page Size",
      "type": "integer"
    }
  },
  "required": [
    "advertiser_id"
  ],
  "title": "tiktok_ads_list_custom_audiencesArguments",
  "type": "object"
}
```

</details>

<a id="tool-tiktok_ads_create_custom_audience-87d58e8a"></a>

## tiktok_ads_create_custom_audience

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, require\_editor, \_parse\_json\_arg, body.setdefault, \_tiktok\_post, isinstance, \_json.

```text
[WRITE] TikTok Ads tool backed by Pipedream managed auth. Create a TikTok custom audience. Pass TikTok audience fields as JSON; advertiser_id is added if omitted.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L871-L884) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "advertiser_id": {
      "title": "Advertiser Id",
      "type": "string"
    },
    "audience_json": {
      "title": "Audience Json",
      "type": "string"
    },
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    }
  },
  "required": [
    "advertiser_id",
    "audience_json"
  ],
  "title": "tiktok_ads_create_custom_audienceArguments",
  "type": "object"
}
```

</details>

<a id="tool-tiktok_ads_update_custom_audience-a5328c44"></a>

## tiktok_ads_update_custom_audience

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, require\_editor, \_parse\_json\_arg, body.setdefault, \_tiktok\_post, isinstance, \_json.

```text
[WRITE] TikTok Ads tool backed by Pipedream managed auth. Update a TikTok custom audience.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L887-L901) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "advertiser_id": {
      "title": "Advertiser Id",
      "type": "string"
    },
    "custom_audience_id": {
      "title": "Custom Audience Id",
      "type": "string"
    },
    "updates_json": {
      "title": "Updates Json",
      "type": "string"
    },
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    }
  },
  "required": [
    "advertiser_id",
    "custom_audience_id",
    "updates_json"
  ],
  "title": "tiktok_ads_update_custom_audienceArguments",
  "type": "object"
}
```

</details>

<a id="tool-tiktok_ads_delete_custom_audience-775fe4a9"></a>

## tiktok_ads_delete_custom_audience

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, require\_editor, \_tiktok\_post, \_json.

```text
[WRITE] TikTok Ads tool backed by Pipedream managed auth. Delete a TikTok custom audience.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L904-L917) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "advertiser_id": {
      "title": "Advertiser Id",
      "type": "string"
    },
    "custom_audience_id": {
      "title": "Custom Audience Id",
      "type": "string"
    },
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    }
  },
  "required": [
    "advertiser_id",
    "custom_audience_id"
  ],
  "title": "tiktok_ads_delete_custom_audienceArguments",
  "type": "object"
}
```

</details>

<a id="tool-tiktok_ads_create_lookalike_audience-d7cc4bbb"></a>

## tiktok_ads_create_lookalike_audience

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, require\_editor, \_parse\_json\_arg, body.setdefault, \_tiktok\_post, isinstance, \_json.

```text
[WRITE] TikTok Ads tool backed by Pipedream managed auth. Create a TikTok lookalike audience. Pass TikTok lookalike fields as JSON; advertiser_id is added if omitted.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L920-L933) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "advertiser_id": {
      "title": "Advertiser Id",
      "type": "string"
    },
    "audience_json": {
      "title": "Audience Json",
      "type": "string"
    },
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    }
  },
  "required": [
    "advertiser_id",
    "audience_json"
  ],
  "title": "tiktok_ads_create_lookalike_audienceArguments",
  "type": "object"
}
```

</details>

<a id="tool-tiktok_ads_list_images-5a818812"></a>

## tiktok_ads_list_images

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, \_tiktok\_get, \_json, max, min.

```text
[READ] TikTok Ads tool backed by Pipedream managed auth. List TikTok image assets.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L936-L942) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "advertiser_id": {
      "title": "Advertiser Id",
      "type": "string"
    },
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    },
    "page_size": {
      "default": 100,
      "title": "Page Size",
      "type": "integer"
    }
  },
  "required": [
    "advertiser_id"
  ],
  "title": "tiktok_ads_list_imagesArguments",
  "type": "object"
}
```

</details>

<a id="tool-tiktok_ads_upload_image-250cf73b"></a>

## tiktok_ads_upload_image

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, require\_editor, \_parse\_json\_arg, body.setdefault, \_tiktok\_post, isinstance, \_json.

```text
[WRITE] TikTok Ads tool backed by Pipedream managed auth. Upload or register a TikTok ad image. Pass TikTok image upload fields as JSON; advertiser_id is added if omitted.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L945-L958) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "advertiser_id": {
      "title": "Advertiser Id",
      "type": "string"
    },
    "image_json": {
      "title": "Image Json",
      "type": "string"
    },
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    }
  },
  "required": [
    "advertiser_id",
    "image_json"
  ],
  "title": "tiktok_ads_upload_imageArguments",
  "type": "object"
}
```

</details>

<a id="tool-tiktok_ads_list_videos-8dd7b9f1"></a>

## tiktok_ads_list_videos

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, \_tiktok\_get, \_json, max, min.

```text
[READ] TikTok Ads tool backed by Pipedream managed auth. List TikTok video assets.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L961-L967) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "advertiser_id": {
      "title": "Advertiser Id",
      "type": "string"
    },
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    },
    "page_size": {
      "default": 100,
      "title": "Page Size",
      "type": "integer"
    }
  },
  "required": [
    "advertiser_id"
  ],
  "title": "tiktok_ads_list_videosArguments",
  "type": "object"
}
```

</details>

<a id="tool-tiktok_ads_upload_video-319de6f1"></a>

## tiktok_ads_upload_video

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, require\_editor, \_parse\_json\_arg, body.setdefault, \_tiktok\_post, isinstance, \_json.

```text
[WRITE] TikTok Ads tool backed by Pipedream managed auth. Upload or register a TikTok ad video. Pass TikTok video upload fields as JSON; advertiser_id is added if omitted.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L970-L983) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "advertiser_id": {
      "title": "Advertiser Id",
      "type": "string"
    },
    "video_json": {
      "title": "Video Json",
      "type": "string"
    },
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    }
  },
  "required": [
    "advertiser_id",
    "video_json"
  ],
  "title": "tiktok_ads_upload_videoArguments",
  "type": "object"
}
```

</details>

<a id="tool-tiktok_ads_targeting_options-e013604a"></a>

## tiktok_ads_targeting_options

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, \_parse\_json\_arg, params.setdefault, \_tiktok\_get, isinstance, \_json.

```text
[READ] TikTok Ads tool backed by Pipedream managed auth. Query TikTok targeting/tool endpoints, e.g. /tool/region/ or /tool/interest_keyword/recommend/.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L986-L996) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "advertiser_id": {
      "title": "Advertiser Id",
      "type": "string"
    },
    "option_path": {
      "title": "Option Path",
      "type": "string"
    },
    "params_json": {
      "default": "{}",
      "title": "Params Json",
      "type": "string"
    },
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    }
  },
  "required": [
    "advertiser_id",
    "option_path"
  ],
  "title": "tiktok_ads_targeting_optionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-linkedin_organic_accounts-6931a8ab"></a>

## linkedin_organic_accounts

Handler: Other product (tools/organic\_social.py): calls mcp.tool, \_list\_pipedream\_accounts, \_json.

```text
[READ] LinkedIn (organic) tool. List connected Pipedream accounts usable for organic LinkedIn posting.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/organic_social.py#L42-L49) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "linkedin_organic_accountsArguments",
  "type": "object"
}
```

</details>

<a id="tool-linkedin_organic_list_organizations-c35240a1"></a>

## linkedin_organic_list_organizations

Handler: Other product (tools/organic\_social.py): calls mcp.tool, \_json, \_proxy\_request, \_platform\_base, \_linkedin\_headers.

```text
[READ] LinkedIn (organic) tool. List LinkedIn organizations (company pages) the connected user can post as.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/organic_social.py#L52-L64) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    }
  },
  "title": "linkedin_organic_list_organizationsArguments",
  "type": "object"
}
```

</details>

<a id="tool-linkedin_organic_create_post-13420ddc"></a>

## linkedin_organic_create_post

Handler: Other product (tools/organic\_social.py): calls mcp.tool, require\_editor, \_json, \_author\_urn, \_proxy\_request, \_platform\_base, \_linkedin\_headers.

```text
[WRITE] LinkedIn (organic) tool. Publish an organic post to a LinkedIn feed or company page. Args: author_id: Organization or person id (bare id or full urn:li:... value). text: Post body. author_type: organization or person. Default organization. visibility: PUBLIC or CONNECTIONS. Default PUBLIC. article_url: Optional link to attach to the post. article_title: Optional title for the attached link. pipedream_account_id: Which connected LinkedIn account to post from.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/organic_social.py#L67-L106) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "author_id": {
      "title": "Author Id",
      "type": "string"
    },
    "text": {
      "title": "Text",
      "type": "string"
    },
    "author_type": {
      "default": "organization",
      "title": "Author Type",
      "type": "string"
    },
    "visibility": {
      "default": "PUBLIC",
      "title": "Visibility",
      "type": "string"
    },
    "article_url": {
      "default": "",
      "title": "Article Url",
      "type": "string"
    },
    "article_title": {
      "default": "",
      "title": "Article Title",
      "type": "string"
    },
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    }
  },
  "required": [
    "author_id",
    "text"
  ],
  "title": "linkedin_organic_create_postArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_pages_accounts-bd0792b0"></a>

## meta_pages_accounts

Handler: Other product (tools/organic\_social.py): calls mcp.tool, \_list\_pipedream\_accounts, \_json.

```text
[READ] Facebook & Instagram pages tool. List connected Pipedream accounts usable for Facebook/Instagram posting.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/organic_social.py#L183-L190) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "meta_pages_accountsArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_pages_list-4fbc6bd9"></a>

## meta_pages_list

Handler: Other product (tools/organic\_social.py): calls mcp.tool, \_proxy\_request, \_json, \_pages\_base, isinstance, payload.get, connect\_hint.

```text
[READ] Facebook & Instagram pages tool. List the Facebook Pages this connection administers, with their linked Instagram Business accounts. Args: pipedream_account_id: Which connected Facebook account to read.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/organic_social.py#L193-L231) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    }
  },
  "title": "meta_pages_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_pages_create_post-d55434a9"></a>

## meta_pages_create_post

Handler: Other product (tools/organic\_social.py): calls mcp.tool, require\_editor, \_page\_token, \_json, \_proxy\_request, \_pages\_base.

```text
[WRITE] Facebook & Instagram pages tool. Publish a post to a Facebook Page through Pipedream managed auth. Args: page_id: Facebook Page ID (required). See meta_pages_list. message: Post text. link: Optional URL to share as a link post. image_url: Optional public image URL; posts as a photo when given. pipedream_account_id: Which connected Facebook account to post from.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/organic_social.py#L234-L276) · Schema: tools/list.

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
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "meta_pages_create_postArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_pages_create_instagram_post-83bf32d8"></a>

## meta_pages_create_instagram_post

Handler: Other product (tools/organic\_social.py): calls mcp.tool, require\_editor, \_page\_token, \_proxy\_request, (container or {}).get, \_json, \_pages\_base, (listing or {}).get.

```text
[WRITE] Facebook & Instagram pages tool. Publish an image post to an Instagram Business account. Instagram publishing is two calls: create a media container, then publish it. Both are authorized by the token of the Page the Instagram account is linked to, which is why page_id matters here. Args: instagram_account_id: Instagram Business account ID. See meta_pages_list. image_url: Public image URL (JPEG/PNG). Required by Instagram -- it fetches the image itself, so the URL must be reachable. caption: Caption text, including hashtags. page_id: The Facebook Page the Instagram account is linked to. Leave blank to use the first Page that has this Instagram account. pipedream_account_id: Which connected Facebook account to post from.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/organic_social.py#L279-L339) · Schema: tools/list.

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
    "page_id": {
      "default": "",
      "title": "Page Id",
      "type": "string"
    },
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    }
  },
  "required": [
    "instagram_account_id",
    "image_url"
  ],
  "title": "meta_pages_create_instagram_postArguments",
  "type": "object"
}
```

</details>

<a id="tool-tiktok_organic_accounts-4422a589"></a>

## tiktok_organic_accounts

Handler: Other product (tools/organic\_social.py): calls mcp.tool, current\_user\_ctx.get, \_json, conn.get, provider().list\_connections, provider, connect\_hint.

```text
[READ] TikTok (organic) tool. List the TikTok accounts connected for organic posting.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/organic_social.py#L346-L373) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "tiktok_organic_accountsArguments",
  "type": "object"
}
```

</details>

<a id="tool-tiktok_organic_creator_info-9776b48c"></a>

## tiktok_organic_creator_info

Handler: Other product (tools/organic\_social.py): calls mcp.tool, \_json, tiktok\_request.

```text
[READ] TikTok (organic) tool. Get the connected TikTok creator's posting limits and privacy options. TikTok requires querying this before publishing: it returns the privacy levels the account is allowed to use and its remaining daily post quota. Args: connection_id: Which connected TikTok account. Blank uses the first.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/organic_social.py#L376-L393) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "connection_id": {
      "default": "",
      "title": "Connection Id",
      "type": "string"
    }
  },
  "title": "tiktok_organic_creator_infoArguments",
  "type": "object"
}
```

</details>

<a id="tool-tiktok_organic_publish_video-7faae361"></a>

## tiktok_organic_publish_video

Handler: Other product (tools/organic\_social.py): calls mcp.tool, require\_editor, \_json, bool, str(source or '').strip().lower, fetch\_video\_bytes, publish\_video\_by\_file, tiktok\_request.

```text
[WRITE] TikTok (organic) tool. Publish a video to the connected TikTok account. Defaults to file_upload, which downloads the video here and pushes the bytes to TikTok. That is the mode that works out of the box: pull_from_url makes TikTok fetch the URL itself, and TikTok only fetches from a domain you have verified in the developer portal, so it fails on an unverified host with an error that does not mention domains at all. Args: video_url: Reachable video URL. With file_upload it only has to be reachable from this server; with pull_from_url its domain must be verified with TikTok. caption: Post caption, including any hashtags. privacy_level: SELF_ONLY, MUTUAL_FOLLOW_FRIENDS, FOLLOWER_OF_CREATOR, or PUBLIC_TO_EVERYONE. Defaults to SELF_ONLY, which is the safe choice for an unaudited app -- confirm with creator_info first. An unaudited app has its posts forced private whatever is asked for. disable_comment: Turn comments off. disable_duet: Turn duets off. disable_stitch: Turn stitches off. connection_id: Which connected TikTok account. Blank uses the first. source: file_upload (default, no domain verification needed) or pull_from_url (requires a verified domain).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/organic_social.py#L396-L472) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "video_url": {
      "title": "Video Url",
      "type": "string"
    },
    "caption": {
      "default": "",
      "title": "Caption",
      "type": "string"
    },
    "privacy_level": {
      "default": "SELF_ONLY",
      "title": "Privacy Level",
      "type": "string"
    },
    "disable_comment": {
      "default": false,
      "title": "Disable Comment",
      "type": "boolean"
    },
    "disable_duet": {
      "default": false,
      "title": "Disable Duet",
      "type": "boolean"
    },
    "disable_stitch": {
      "default": false,
      "title": "Disable Stitch",
      "type": "boolean"
    },
    "connection_id": {
      "default": "",
      "title": "Connection Id",
      "type": "string"
    },
    "source": {
      "default": "file_upload",
      "title": "Source",
      "type": "string"
    }
  },
  "required": [
    "video_url"
  ],
  "title": "tiktok_organic_publish_videoArguments",
  "type": "object"
}
```

</details>

<a id="tool-tiktok_organic_upload_draft-48b389e0"></a>

## tiktok_organic_upload_draft

Handler: Other product (tools/organic\_social.py): calls mcp.tool, require\_editor, fetch\_video\_bytes, upload\_draft\_by\_file, \_json.

```text
[WRITE] TikTok (organic) tool. Send a video to the TikTok account's drafts for the creator to finish. Use this when a direct post is refused. An app that has not passed TikTok's Content Posting audit cannot post directly to a public account at all -- TikTok answers "unaudited_client_can_only_post_to_private_accounts" no matter which privacy level is asked for. Drafts work regardless, so this is the reliable path until the audit clears. The video lands in the creator's TikTok inbox; they open the app, review it and publish. Tell the user that is where to find it. Args: video_url: Reachable video URL. Downloaded here and pushed to TikTok, so its domain does not need to be verified. connection_id: Which connected TikTok account. Blank uses the first.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/organic_social.py#L475-L509) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "video_url": {
      "title": "Video Url",
      "type": "string"
    },
    "connection_id": {
      "default": "",
      "title": "Connection Id",
      "type": "string"
    }
  },
  "required": [
    "video_url"
  ],
  "title": "tiktok_organic_upload_draftArguments",
  "type": "object"
}
```

</details>

<a id="tool-tiktok_organic_status-fb0cf863"></a>

## tiktok_organic_status

Handler: Other product (tools/organic\_social.py): calls mcp.tool, \_json, tiktok\_request.

```text
[READ] TikTok (organic) tool. Check whether a TikTok publish job finished, is still processing, or failed. Named without the "publish" verb on purpose: this only reads job state, and the write-tool heuristic classifies on the first word after the prefix. Args: publish_id: The publish_id returned by tiktok_organic_publish_video. connection_id: Which connected TikTok account. Blank uses the first.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/organic_social.py#L512-L531) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "publish_id": {
      "title": "Publish Id",
      "type": "string"
    },
    "connection_id": {
      "default": "",
      "title": "Connection Id",
      "type": "string"
    }
  },
  "required": [
    "publish_id"
  ],
  "title": "tiktok_organic_statusArguments",
  "type": "object"
}
```

</details>

<a id="tool-snapchat_ads_pipedream_accounts-50abd030"></a>

## snapchat_ads_pipedream_accounts

Handler: Other product (tools/snapchat\_ads.py): calls mcp.tool, \_list\_pipedream\_accounts, \_json.

```text
[READ] Snapchat Ads tool backed by Pipedream managed auth. List connected Pipedream accounts that can be used for Snapchat Ads proxy calls.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/snapchat_ads.py#L74-L81) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "snapchat_ads_pipedream_accountsArguments",
  "type": "object"
}
```

</details>

<a id="tool-snapchat_ads_list_organizations-966aa211"></a>

## snapchat_ads_list_organizations

Handler: Other product (tools/snapchat\_ads.py): calls mcp.tool, \_proxy\_request, \_json, \_snap\_base, \_unwrap.

```text
[READ] Snapchat Ads tool backed by Pipedream managed auth. List Snapchat organizations for the connected user. Start here — ad accounts live under an organization.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/snapchat_ads.py#L84-L91) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    }
  },
  "title": "snapchat_ads_list_organizationsArguments",
  "type": "object"
}
```

</details>

<a id="tool-snapchat_ads_list_accounts-f4b471a5"></a>

## snapchat_ads_list_accounts

Handler: Other product (tools/snapchat\_ads.py): calls mcp.tool, \_proxy\_request, \_json, \_snap\_base, \_unwrap.

```text
[READ] Snapchat Ads tool backed by Pipedream managed auth. List Snapchat ad accounts under an organization. Get organization_id from snapchat_ads_list_organizations.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/snapchat_ads.py#L94-L103) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "organization_id": {
      "title": "Organization Id",
      "type": "string"
    },
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    }
  },
  "required": [
    "organization_id"
  ],
  "title": "snapchat_ads_list_accountsArguments",
  "type": "object"
}
```

</details>

<a id="tool-snapchat_ads_list_campaigns-5e6238d4"></a>

## snapchat_ads_list_campaigns

Handler: Other product (tools/snapchat\_ads.py): calls mcp.tool, \_proxy\_request, \_json, \_snap\_base, \_unwrap.

```text
[READ] Snapchat Ads tool backed by Pipedream managed auth. List Snapchat Ads campaigns in an ad account.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/snapchat_ads.py#L106-L115) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_account_id": {
      "title": "Ad Account Id",
      "type": "string"
    },
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    }
  },
  "required": [
    "ad_account_id"
  ],
  "title": "snapchat_ads_list_campaignsArguments",
  "type": "object"
}
```

</details>

<a id="tool-snapchat_ads_get_campaign-ee073172"></a>

## snapchat_ads_get_campaign

Handler: Other product (tools/snapchat\_ads.py): calls mcp.tool, \_proxy\_request, \_json, \_snap\_base, \_unwrap.

```text
[READ] Snapchat Ads tool backed by Pipedream managed auth. Get one Snapchat Ads campaign by campaign id.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/snapchat_ads.py#L118-L125) · Schema: tools/list.

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
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id"
  ],
  "title": "snapchat_ads_get_campaignArguments",
  "type": "object"
}
```

</details>

<a id="tool-snapchat_ads_list_adsquads-a9662af6"></a>

## snapchat_ads_list_adsquads

Handler: Other product (tools/snapchat\_ads.py): calls mcp.tool, \_proxy\_request, \_json, \_snap\_base, \_unwrap.

```text
[READ] Snapchat Ads tool backed by Pipedream managed auth. List Snapchat ad squads (ad sets) in an ad account.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/snapchat_ads.py#L128-L137) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_account_id": {
      "title": "Ad Account Id",
      "type": "string"
    },
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    }
  },
  "required": [
    "ad_account_id"
  ],
  "title": "snapchat_ads_list_adsquadsArguments",
  "type": "object"
}
```

</details>

<a id="tool-snapchat_ads_list_ads-cd844b56"></a>

## snapchat_ads_list_ads

Handler: Other product (tools/snapchat\_ads.py): calls mcp.tool, \_proxy\_request, \_json, \_snap\_base, \_unwrap.

```text
[READ] Snapchat Ads tool backed by Pipedream managed auth. List Snapchat ads in an ad account.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/snapchat_ads.py#L140-L149) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_account_id": {
      "title": "Ad Account Id",
      "type": "string"
    },
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    }
  },
  "required": [
    "ad_account_id"
  ],
  "title": "snapchat_ads_list_adsArguments",
  "type": "object"
}
```

</details>

<a id="tool-snapchat_ads_campaign_report-a359cbb5"></a>

## snapchat_ads_campaign_report

Handler: Other product (tools/snapchat\_ads.py): calls mcp.tool, (granularity or 'DAY').strip().upper, \_proxy\_request, \_json, \_snap\_time, \_snap\_base, (granularity or 'DAY').strip.

```text
[READ] Snapchat Ads tool backed by Pipedream managed auth. Get Snapchat Ads performance stats for one campaign. Args: campaign_id: Snapchat campaign id. start_date: YYYY-MM-DD. Defaults to 28 days ago. Ignored when granularity=TOTAL. end_date: YYYY-MM-DD. Defaults to today. granularity: TOTAL, DAY, or HOUR. DAY and HOUR require a date range. fields: Comma-separated Snapchat metric names.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/snapchat_ads.py#L152-L181) · Schema: tools/list.

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
    "granularity": {
      "default": "DAY",
      "title": "Granularity",
      "type": "string"
    },
    "fields": {
      "default": "impressions,swipes,spend,conversion_purchases,video_views",
      "title": "Fields",
      "type": "string"
    },
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id"
  ],
  "title": "snapchat_ads_campaign_reportArguments",
  "type": "object"
}
```

</details>

<a id="tool-snapchat_ads_account_report-eac9666c"></a>

## snapchat_ads_account_report

Handler: Other product (tools/snapchat\_ads.py): calls mcp.tool, (granularity or 'DAY').strip().upper, \_proxy\_request, \_json, \_snap\_time, \_snap\_base, (granularity or 'DAY').strip.

```text
[READ] Snapchat Ads tool backed by Pipedream managed auth. Get Snapchat Ads performance stats for a whole ad account over a date range.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/snapchat_ads.py#L184-L205) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_account_id": {
      "title": "Ad Account Id",
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
    "granularity": {
      "default": "DAY",
      "title": "Granularity",
      "type": "string"
    },
    "fields": {
      "default": "impressions,swipes,spend,conversion_purchases",
      "title": "Fields",
      "type": "string"
    },
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    }
  },
  "required": [
    "ad_account_id"
  ],
  "title": "snapchat_ads_account_reportArguments",
  "type": "object"
}
```

</details>

<a id="tool-snapchat_ads_create_campaign-7d0ca19d"></a>

## snapchat_ads_create_campaign

Handler: Other product (tools/snapchat\_ads.py): calls mcp.tool, require\_editor, \_parse\_json\_arg, body.setdefault, \_proxy\_request, \_json, isinstance, \_snap\_base.

```text
[WRITE] Snapchat Ads tool backed by Pipedream managed auth. Create a Snapchat Ads campaign. Pass the campaign body as JSON. Created PAUSED unless the JSON explicitly sets status ACTIVE. Snapchat expects the campaign wrapped in a "campaigns" array; that wrapping is added here if omitted.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/snapchat_ads.py#L208-L233) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_account_id": {
      "title": "Ad Account Id",
      "type": "string"
    },
    "campaign_json": {
      "title": "Campaign Json",
      "type": "string"
    },
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    }
  },
  "required": [
    "ad_account_id",
    "campaign_json"
  ],
  "title": "snapchat_ads_create_campaignArguments",
  "type": "object"
}
```

</details>

<a id="tool-snapchat_ads_update_campaign_status-9e82c6da"></a>

## snapchat_ads_update_campaign_status

Handler: Other product (tools/snapchat\_ads.py): calls mcp.tool, require\_editor, (status or '').strip().upper, \_proxy\_request, \_unwrap, campaign.setdefault, \_json, \_snap\_base.

```text
[WRITE] Snapchat Ads tool backed by Pipedream managed auth. Pause or activate a Snapchat Ads campaign. status must be PAUSED or ACTIVE. Snapchat's update is a full PUT, so this reads the current campaign first and writes it back with only the status changed — sending a partial object would blank fields.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/snapchat_ads.py#L236-L273) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_account_id": {
      "title": "Ad Account Id",
      "type": "string"
    },
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "status": {
      "title": "Status",
      "type": "string"
    },
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    }
  },
  "required": [
    "ad_account_id",
    "campaign_id",
    "status"
  ],
  "title": "snapchat_ads_update_campaign_statusArguments",
  "type": "object"
}
```

</details>

<a id="tool-snapchat_ads_raw_request-4f3f504f"></a>

## snapchat_ads_raw_request

Handler: Other product (tools/snapchat\_ads.py): calls mcp.tool, require\_editor, \_parse\_json\_arg, \_json, \_proxy\_request, \_snap\_base.

```text
[WRITE] Snapchat Ads tool backed by Pipedream managed auth. Call any Snapchat Marketing API endpoint through the Pipedream proxy. Escape hatch for endpoints without a dedicated tool. url may be a path (e.g. /adaccounts/{id}/media) or a full https://adsapi.snapchat.com URL.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/snapchat_ads.py#L276-L295) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "method": {
      "title": "Method",
      "type": "string"
    },
    "url": {
      "title": "Url",
      "type": "string"
    },
    "params_json": {
      "default": "{}",
      "title": "Params Json",
      "type": "string"
    },
    "body_json": {
      "default": "{}",
      "title": "Body Json",
      "type": "string"
    },
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    }
  },
  "required": [
    "method",
    "url"
  ],
  "title": "snapchat_ads_raw_requestArguments",
  "type": "object"
}
```

</details>

<a id="tool-microsoft_ads_pipedream_accounts-e277c7ae"></a>

## microsoft_ads_pipedream_accounts

Handler: Other product (tools/microsoft\_ads.py): calls mcp.tool, \_list\_pipedream\_accounts, bool, \_json, os.environ.get('MICROSOFT\_ADS\_DEVELOPER\_TOKEN', '').strip, os.environ.get.

```text
[READ] Microsoft Advertising (Bing Ads) tool backed by Pipedream managed auth; also needs a server developer token. List connected Pipedream accounts that can be used for Microsoft Advertising proxy calls.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/microsoft_ads.py#L70-L83) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "microsoft_ads_pipedream_accountsArguments",
  "type": "object"
}
```

</details>

<a id="tool-microsoft_ads_list_accounts-496574db"></a>

## microsoft_ads_list_accounts

Handler: Other product (tools/microsoft\_ads.py): calls mcp.tool, \_json, bool, \_proxy\_request, \_ms\_headers.

```text
[READ] Microsoft Advertising (Bing Ads) tool backed by Pipedream managed auth; also needs a server developer token. List Microsoft Advertising ad accounts the connected user can access. Start here — other actions need the account id (CustomerAccountId) this returns. customer_id is the manager account id; leave blank to infer it from the credentials.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/microsoft_ads.py#L86-L102) · Schema: tools/list.

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
    },
    "only_parent_accounts": {
      "default": false,
      "title": "Only Parent Accounts",
      "type": "boolean"
    },
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    }
  },
  "title": "microsoft_ads_list_accountsArguments",
  "type": "object"
}
```

</details>

<a id="tool-microsoft_ads_list_campaigns-de18c7a6"></a>

## microsoft_ads_list_campaigns

Handler: Other product (tools/microsoft\_ads.py): calls mcp.tool, \_json, \_proxy\_request, \_ms\_headers.

```text
[READ] Microsoft Advertising (Bing Ads) tool backed by Pipedream managed auth; also needs a server developer token. List Microsoft Advertising campaigns in an account. campaign_type: Search, Shopping, DynamicSearchAds, Audience, PerformanceMax. Space-delimit to combine (e.g. "Search Shopping"). Defaults to Search, which is Microsoft's own default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/microsoft_ads.py#L105-L123) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    },
    "campaign_type": {
      "default": "Search",
      "title": "Campaign Type",
      "type": "string"
    },
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    }
  },
  "required": [
    "account_id"
  ],
  "title": "microsoft_ads_list_campaignsArguments",
  "type": "object"
}
```

</details>

<a id="tool-microsoft_ads_list_adgroups-5f83de46"></a>

## microsoft_ads_list_adgroups

Handler: Other product (tools/microsoft\_ads.py): calls mcp.tool, \_json, \_proxy\_request, \_ms\_headers.

```text
[READ] Microsoft Advertising (Bing Ads) tool backed by Pipedream managed auth; also needs a server developer token. List Microsoft Advertising ad groups in a campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/microsoft_ads.py#L126-L138) · Schema: tools/list.

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
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    },
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id",
    "account_id"
  ],
  "title": "microsoft_ads_list_adgroupsArguments",
  "type": "object"
}
```

</details>

<a id="tool-microsoft_ads_list_keywords-ed515eed"></a>

## microsoft_ads_list_keywords

Handler: Other product (tools/microsoft\_ads.py): calls mcp.tool, \_json, \_proxy\_request, \_ms\_headers.

```text
[READ] Microsoft Advertising (Bing Ads) tool backed by Pipedream managed auth; also needs a server developer token. List Microsoft Advertising keywords in an ad group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/microsoft_ads.py#L141-L153) · Schema: tools/list.

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
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    },
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "account_id"
  ],
  "title": "microsoft_ads_list_keywordsArguments",
  "type": "object"
}
```

</details>

<a id="tool-microsoft_ads_update_campaign_status-c45da2f7"></a>

## microsoft_ads_update_campaign_status

Handler: Other product (tools/microsoft\_ads.py): calls mcp.tool, require\_editor, (status or '').strip().capitalize, \_json, \_proxy\_request, (status or '').strip, \_ms\_headers.

```text
[WRITE] Microsoft Advertising (Bing Ads) tool backed by Pipedream managed auth; also needs a server developer token. Pause or enable a Microsoft Advertising campaign. status must be Paused or Active. Microsoft's update is a partial merge — only Id and Status are sent, so other campaign settings are left untouched.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/microsoft_ads.py#L156-L178) · Schema: tools/list.

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
    "account_id": {
      "title": "Account Id",
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
    },
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id",
    "account_id",
    "status"
  ],
  "title": "microsoft_ads_update_campaign_statusArguments",
  "type": "object"
}
```

</details>

<a id="tool-microsoft_ads_update_campaign_budget-8e444f6b"></a>

## microsoft_ads_update_campaign_budget

Handler: Other product (tools/microsoft\_ads.py): calls mcp.tool, require\_editor, float, \_json, \_proxy\_request, \_ms\_headers.

```text
[WRITE] Microsoft Advertising (Bing Ads) tool backed by Pipedream managed auth; also needs a server developer token. Set the daily budget on a Microsoft Advertising campaign, in account currency.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/microsoft_ads.py#L181-L199) · Schema: tools/list.

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
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "daily_budget": {
      "title": "Daily Budget",
      "type": "number"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    },
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_id",
    "account_id",
    "daily_budget"
  ],
  "title": "microsoft_ads_update_campaign_budgetArguments",
  "type": "object"
}
```

</details>

<a id="tool-microsoft_ads_submit_report-b3830ad8"></a>

## microsoft_ads_submit_report

Handler: Other product (tools/microsoft\_ads.py): calls mcp.tool, \_json, \_parse\_json\_arg, \_proxy\_request, \_ms\_date, \_ms\_headers.

```text
[READ] Microsoft Advertising (Bing Ads) tool backed by Pipedream managed auth; also needs a server developer token. Submit a Microsoft Advertising report request. Returns a ReportRequestId to poll. Prefer microsoft_ads_campaign_performance for the common case — it submits, polls and parses in one call. Use this directly only for report types it does not cover. Args: report_type: e.g. CampaignPerformanceReport, AdGroupPerformanceReport, KeywordPerformanceReport. columns_json: JSON array of column names. Defaults to a sensible campaign set. start_date / end_date: YYYY-MM-DD. Default last 28 days. aggregation: Daily, Weekly, Monthly, or Summary.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/microsoft_ads.py#L202-L248) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "report_type": {
      "default": "CampaignPerformanceReport",
      "title": "Report Type",
      "type": "string"
    },
    "columns_json": {
      "default": "",
      "title": "Columns Json",
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
    "aggregation": {
      "default": "Daily",
      "title": "Aggregation",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    },
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    }
  },
  "required": [
    "account_id"
  ],
  "title": "microsoft_ads_submit_reportArguments",
  "type": "object"
}
```

</details>

<a id="tool-microsoft_ads_poll_report-08e22343"></a>

## microsoft_ads_poll_report

Handler: Other product (tools/microsoft\_ads.py): calls mcp.tool, \_json, \_proxy\_request, \_ms\_headers.

```text
[READ] Microsoft Advertising (Bing Ads) tool backed by Pipedream managed auth; also needs a server developer token. Check a submitted Microsoft Advertising report. Returns status and, when ready, a download URL.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/microsoft_ads.py#L251-L263) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "report_request_id": {
      "title": "Report Request Id",
      "type": "string"
    },
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    },
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    }
  },
  "required": [
    "report_request_id",
    "account_id"
  ],
  "title": "microsoft_ads_poll_reportArguments",
  "type": "object"
}
```

</details>

<a id="tool-microsoft_ads_campaign_performance-3ce11a75"></a>

## microsoft_ads_campaign_performance

Handler: Other product (tools/microsoft\_ads.py): calls mcp.tool, \_proxy\_request, (submitted or {}).get, \_ms\_headers, range, \_json, isinstance, submitted.get.

```text
[READ] Microsoft Advertising (Bing Ads) tool backed by Pipedream managed auth; also needs a server developer token. Get Microsoft Advertising campaign performance for a date range. Submits the report, polls until it is ready, then downloads and parses the CSV — the model sees one call. Defaults to the last 28 days. Polling is bounded; if the report is not ready in time the ReportRequestId is returned so it can be polled separately.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/microsoft_ads.py#L306-L381) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
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
    "aggregation": {
      "default": "Daily",
      "title": "Aggregation",
      "type": "string"
    },
    "row_limit": {
      "default": 200,
      "title": "Row Limit",
      "type": "integer"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    },
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    }
  },
  "required": [
    "account_id"
  ],
  "title": "microsoft_ads_campaign_performanceArguments",
  "type": "object"
}
```

</details>

<a id="tool-microsoft_ads_raw_request-a8160da8"></a>

## microsoft_ads_raw_request

Handler: Other product (tools/microsoft\_ads.py): calls mcp.tool, require\_editor, \_parse\_json\_arg, \_json, \_proxy\_request, \_ms\_headers.

```text
[WRITE] Microsoft Advertising (Bing Ads) tool backed by Pipedream managed auth; also needs a server developer token. Call any Microsoft Advertising v13 REST endpoint through the Pipedream proxy. Escape hatch for operations without a dedicated tool. url must be absolute, e.g. https://campaign.api.bingads.microsoft.com/CampaignManagement/v13/Ads/QueryByAdGroupId Remember most read operations are POST with a JSON body, and updates are PUT.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/microsoft_ads.py#L384-L409) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "method": {
      "title": "Method",
      "type": "string"
    },
    "url": {
      "title": "Url",
      "type": "string"
    },
    "body_json": {
      "default": "{}",
      "title": "Body Json",
      "type": "string"
    },
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    },
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    }
  },
  "required": [
    "method",
    "url"
  ],
  "title": "microsoft_ads_raw_requestArguments",
  "type": "object"
}
```

</details>

<a id="tool-openai_ads_get_account-3b21108a"></a>

## openai_ads_get_account

Handler: Other product (tools/openai\_ads.py): calls mcp.tool, \_ok, \_request.

```text
[READ] OpenAI Ads tool — manages ads shown inside ChatGPT via the OpenAI Ads API. Get the connected OpenAI Ads account. Call this first to confirm the API key works and to see account-level settings. GET /ad_account.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/openai_ads.py#L82-L89) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "openai_ads_get_accountArguments",
  "type": "object"
}
```

</details>

<a id="tool-openai_ads_list_campaigns-200d6a65"></a>

## openai_ads_list_campaigns

Handler: Other product (tools/openai\_ads.py): calls mcp.tool, \_ok, \_request.

```text
[READ] OpenAI Ads tool — manages ads shown inside ChatGPT via the OpenAI Ads API. List OpenAI Ads campaigns. Args: limit: 1-500 (default 20). after / before: pagination cursors returned by a previous call. order: 'asc' or 'desc' (default desc).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/openai_ads.py#L96-L108) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "limit": {
      "default": 20,
      "title": "Limit",
      "type": "integer"
    },
    "after": {
      "default": "",
      "title": "After",
      "type": "string"
    },
    "before": {
      "default": "",
      "title": "Before",
      "type": "string"
    },
    "order": {
      "default": "desc",
      "title": "Order",
      "type": "string"
    }
  },
  "title": "openai_ads_list_campaignsArguments",
  "type": "object"
}
```

</details>

<a id="tool-openai_ads_get_campaign-85451a8a"></a>

## openai_ads_get_campaign

Handler: Other product (tools/openai\_ads.py): calls mcp.tool, \_ok, \_request.

```text
[READ] OpenAI Ads tool — manages ads shown inside ChatGPT via the OpenAI Ads API. Retrieve a single OpenAI Ads campaign by ID. GET /campaigns/{id}.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/openai_ads.py#L111-L117) · Schema: tools/list.

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
  "title": "openai_ads_get_campaignArguments",
  "type": "object"
}
```

</details>

<a id="tool-openai_ads_create_campaign-179da8f7"></a>

## openai_ads_create_campaign

Handler: Other product (tools/openai\_ads.py): calls mcp.tool, require\_editor, \_ok, \_request, max, \_usd\_to\_micros.

```text
[WRITE] OpenAI Ads tool — manages ads shown inside ChatGPT via the OpenAI Ads API. Create an OpenAI Ads campaign. Defaults to PAUSED — pass status='active' only if the user explicitly wants it live. Args: name: Campaign name (3-1000 chars). lifetime_budget_usd: Lifetime spend limit in dollars (min $1). status: 'paused' (default) or 'active'. description: Optional description.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/openai_ads.py#L120-L149) · Schema: tools/list.

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
    "lifetime_budget_usd": {
      "title": "Lifetime Budget Usd",
      "type": "number"
    },
    "status": {
      "default": "paused",
      "title": "Status",
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
    "lifetime_budget_usd"
  ],
  "title": "openai_ads_create_campaignArguments",
  "type": "object"
}
```

</details>

<a id="tool-openai_ads_update_campaign-9d68a721"></a>

## openai_ads_update_campaign

Handler: Other product (tools/openai\_ads.py): calls mcp.tool, require\_editor, \_ok, \_request, max, \_usd\_to\_micros.

```text
[WRITE] OpenAI Ads tool — manages ads shown inside ChatGPT via the OpenAI Ads API. Update a campaign's name, budget, or description. Only non-empty fields are sent. POST /campaigns/{id}.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/openai_ads.py#L152-L176) · Schema: tools/list.

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
    "lifetime_budget_usd": {
      "default": 0,
      "title": "Lifetime Budget Usd",
      "type": "number"
    },
    "description": {
      "default": "",
      "title": "Description",
      "type": "string"
    }
  },
  "required": [
    "campaign_id"
  ],
  "title": "openai_ads_update_campaignArguments",
  "type": "object"
}
```

</details>

<a id="tool-openai_ads_set_campaign_status-2f91bcb1"></a>

## openai_ads_set_campaign_status

Handler: Other product (tools/openai\_ads.py): calls mcp.tool, require\_editor, \_ok, \_request.

```text
[WRITE] OpenAI Ads tool — manages ads shown inside ChatGPT via the OpenAI Ads API. Activate, pause, or archive a campaign. Args: campaign_id: The campaign to change. action: 'activate', 'pause', or 'archive'.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/openai_ads.py#L179-L195) · Schema: tools/list.

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
    "action": {
      "title": "Action",
      "type": "string"
    }
  },
  "required": [
    "campaign_id",
    "action"
  ],
  "title": "openai_ads_set_campaign_statusArguments",
  "type": "object"
}
```

</details>

<a id="tool-openai_ads_list_ad_groups-a7aad12e"></a>

## openai_ads_list_ad_groups

Handler: Other product (tools/openai\_ads.py): calls mcp.tool, \_ok, \_request.

```text
[READ] OpenAI Ads tool — manages ads shown inside ChatGPT via the OpenAI Ads API. List ad groups, optionally filtered to a campaign. GET /ad_groups.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/openai_ads.py#L202-L208) · Schema: tools/list.

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
    "limit": {
      "default": 20,
      "title": "Limit",
      "type": "integer"
    },
    "after": {
      "default": "",
      "title": "After",
      "type": "string"
    },
    "order": {
      "default": "desc",
      "title": "Order",
      "type": "string"
    }
  },
  "title": "openai_ads_list_ad_groupsArguments",
  "type": "object"
}
```

</details>

<a id="tool-openai_ads_get_ad_group-7e80eba4"></a>

## openai_ads_get_ad_group

Handler: Other product (tools/openai\_ads.py): calls mcp.tool, \_ok, \_request.

```text
[READ] OpenAI Ads tool — manages ads shown inside ChatGPT via the OpenAI Ads API. Retrieve a single ad group by ID. GET /ad_groups/{id}.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/openai_ads.py#L211-L217) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_group_id": {
      "title": "Ad Group Id",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id"
  ],
  "title": "openai_ads_get_ad_groupArguments",
  "type": "object"
}
```

</details>

<a id="tool-openai_ads_create_ad_group-8ac3b22d"></a>

## openai_ads_create_ad_group

Handler: Other product (tools/openai\_ads.py): calls mcp.tool, require\_editor, \_ok, \_request, \_usd\_to\_micros.

```text
[WRITE] OpenAI Ads tool — manages ads shown inside ChatGPT via the OpenAI Ads API. Create an ad group under a campaign. Defaults to PAUSED. Args: campaign_id: Parent campaign ID. name: Ad group name. max_bid_usd: Max bid per impression in dollars (billing_event_type=impression). status: 'paused' (default) or 'active'. description: Optional.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/openai_ads.py#L220-L251) · Schema: tools/list.

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
      "title": "Name",
      "type": "string"
    },
    "max_bid_usd": {
      "title": "Max Bid Usd",
      "type": "number"
    },
    "status": {
      "default": "paused",
      "title": "Status",
      "type": "string"
    },
    "description": {
      "default": "",
      "title": "Description",
      "type": "string"
    }
  },
  "required": [
    "campaign_id",
    "name",
    "max_bid_usd"
  ],
  "title": "openai_ads_create_ad_groupArguments",
  "type": "object"
}
```

</details>

<a id="tool-openai_ads_set_ad_group_status-cb8fbc9d"></a>

## openai_ads_set_ad_group_status

Handler: Other product (tools/openai\_ads.py): calls mcp.tool, require\_editor, \_ok, \_request.

```text
[WRITE] OpenAI Ads tool — manages ads shown inside ChatGPT via the OpenAI Ads API. Activate, pause, or archive an ad group. action: 'activate' | 'pause' | 'archive'.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/openai_ads.py#L254-L265) · Schema: tools/list.

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
    "action": {
      "title": "Action",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "action"
  ],
  "title": "openai_ads_set_ad_group_statusArguments",
  "type": "object"
}
```

</details>

<a id="tool-openai_ads_list_ads-82b17781"></a>

## openai_ads_list_ads

Handler: Other product (tools/openai\_ads.py): calls mcp.tool, \_ok, \_request.

```text
[READ] OpenAI Ads tool — manages ads shown inside ChatGPT via the OpenAI Ads API. List ads, optionally filtered to an ad group. GET /ads.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/openai_ads.py#L272-L278) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_group_id": {
      "default": "",
      "title": "Ad Group Id",
      "type": "string"
    },
    "limit": {
      "default": 20,
      "title": "Limit",
      "type": "integer"
    },
    "after": {
      "default": "",
      "title": "After",
      "type": "string"
    },
    "order": {
      "default": "desc",
      "title": "Order",
      "type": "string"
    }
  },
  "title": "openai_ads_list_adsArguments",
  "type": "object"
}
```

</details>

<a id="tool-openai_ads_get_ad-8d2c9112"></a>

## openai_ads_get_ad

Handler: Other product (tools/openai\_ads.py): calls mcp.tool, \_ok, \_request.

```text
[READ] OpenAI Ads tool — manages ads shown inside ChatGPT via the OpenAI Ads API. Retrieve a single ad by ID, including creative and review_status. GET /ads/{id}.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/openai_ads.py#L281-L287) · Schema: tools/list.

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
  "title": "openai_ads_get_adArguments",
  "type": "object"
}
```

</details>

<a id="tool-openai_ads_create_chat_card_ad-3c502acc"></a>

## openai_ads_create_chat_card_ad

Handler: Other product (tools/openai\_ads.py): calls mcp.tool, require\_editor, \_ok, \_request.

```text
[WRITE] OpenAI Ads tool — manages ads shown inside ChatGPT via the OpenAI Ads API. Create a 'chat_card' ad under an ad group. Defaults to PAUSED. Args: ad_group_id: Parent ad group ID. name: Ad name (3-1000 chars). title: Creative title (3-50 chars). body: Creative body (max 100 chars). target_url: Landing URL the ad links to (required for chat_card). file_id: ID of an uploaded image file (required for chat_card). status: 'paused' (default) or 'active'.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/openai_ads.py#L290-L329) · Schema: tools/list.

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
    "name": {
      "title": "Name",
      "type": "string"
    },
    "title": {
      "title": "Title",
      "type": "string"
    },
    "body": {
      "title": "Body",
      "type": "string"
    },
    "target_url": {
      "title": "Target Url",
      "type": "string"
    },
    "file_id": {
      "title": "File Id",
      "type": "string"
    },
    "status": {
      "default": "paused",
      "title": "Status",
      "type": "string"
    }
  },
  "required": [
    "ad_group_id",
    "name",
    "title",
    "body",
    "target_url",
    "file_id"
  ],
  "title": "openai_ads_create_chat_card_adArguments",
  "type": "object"
}
```

</details>

<a id="tool-openai_ads_set_ad_status-0646f852"></a>

## openai_ads_set_ad_status

Handler: Other product (tools/openai\_ads.py): calls mcp.tool, require\_editor, \_ok, \_request.

```text
[WRITE] OpenAI Ads tool — manages ads shown inside ChatGPT via the OpenAI Ads API. Activate, pause, or archive an ad. action: 'activate' | 'pause' | 'archive'.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/openai_ads.py#L332-L343) · Schema: tools/list.

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
    "action": {
      "title": "Action",
      "type": "string"
    }
  },
  "required": [
    "ad_id",
    "action"
  ],
  "title": "openai_ads_set_ad_statusArguments",
  "type": "object"
}
```

</details>

<a id="tool-openai_ads_ad_insights-076bec44"></a>

## openai_ads_ad_insights

Handler: Other product (tools/openai\_ads.py): calls mcp.tool, \_ok, \_request.

```text
[READ] OpenAI Ads tool — manages ads shown inside ChatGPT via the OpenAI Ads API. Get performance insights for an ad (impressions, clicks, spend over time). Args: ad_id: The ad to report on. time_granularity: 'daily' (default) or other granularity the API supports. limit: Number of time buckets to return (default 7).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/openai_ads.py#L346-L358) · Schema: tools/list.

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
    "time_granularity": {
      "default": "daily",
      "title": "Time Granularity",
      "type": "string"
    },
    "limit": {
      "default": 7,
      "title": "Limit",
      "type": "integer"
    }
  },
  "required": [
    "ad_id"
  ],
  "title": "openai_ads_ad_insightsArguments",
  "type": "object"
}
```

</details>

<a id="tool-ga4_list_properties-44fea7fa"></a>

## ga4_list_properties

Handler: Other product (tools/ga4.py): calls mcp.tool, \_admin\_svc, admin.accounts().list().execute().get, admin.properties().list(filter=f"parent:{acct\['name'\]}").execute().get, admin.accounts().list().execute, properties.append, admin.properties().list(filter=f"parent:{acct\['name'\]}").execute, admin.accounts().list.

```text
[READ] List every GA4 property the authenticated user can access. Use this to discover valid property_id values before calling report tools.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4.py#L163-L180) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "ga4_list_propertiesArguments",
  "type": "object"
}
```

</details>

<a id="tool-ga4_list_all_properties-6133d4fc"></a>

## ga4_list_all_properties

Handler: Other product (tools/ga4.py): calls mcp.tool, ga4\_list\_properties.

```text
[READ][ALIAS] Legacy alias for ga4_list_properties. Same behavior. Prefer ga4_list_properties because it is the primary discovery tool for property_id values.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4.py#L183-L186) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "ga4_list_all_propertiesArguments",
  "type": "object"
}
```

</details>

<a id="tool-ga4_run_custom_report-d22a67ff"></a>

## ga4_run_custom_report

Handler: Other product (tools/ga4.py): calls mcp.tool, \_run\_report, \_result, date.today, d.strip, dimensions.split, m.strip, metrics.split.

```text
[READ] Run a fully custom GA4 report with your own dimensions and metrics. Use this only when preset GA4 tools do not fit the request. For common asks like overview, traffic sources, top pages, or conversions, prefer the dedicated GA4 tools.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4.py#L189-L224) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "dimensions": {
      "title": "Dimensions",
      "type": "string"
    },
    "metrics": {
      "title": "Metrics",
      "type": "string"
    },
    "property_id": {
      "default": "",
      "title": "Property Id",
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
    },
    "order_by_metric": {
      "default": "",
      "title": "Order By Metric",
      "type": "string"
    }
  },
  "required": [
    "dimensions",
    "metrics"
  ],
  "title": "ga4_run_custom_reportArguments",
  "type": "object"
}
```

</details>

<a id="tool-ga4_overview-6fefcb00"></a>

## ga4_overview

Handler: Other product (tools/ga4.py): calls mcp.tool, \_run\_report, response.get, \_result, enumerate, date.today, timedelta.

```text
[READ] GA4 analytics tool. Get a high-level traffic overview from GA4: sessions, users, pageviews, bounce rate, average session duration. Args: property_id: GA4 property ID. Leave blank to use the default property. start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4.py#L227-L253) · Schema: tools/list.

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
  "title": "ga4_overviewArguments",
  "type": "object"
}
```

</details>

<a id="tool-ga4_traffic_sources-3ba83706"></a>

## ga4_traffic_sources

Handler: Other product (tools/ga4.py): calls mcp.tool, \_run\_report, \_result, date.today, \_parse\_report, timedelta.

```text
[READ] GA4 analytics tool. Get GA4 traffic broken down by default channel group. Args: property_id: GA4 property ID. Leave blank to use the default property. start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. row_limit: Max channels. Default 15.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4.py#L256-L279) · Schema: tools/list.

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
      "default": 15,
      "title": "Row Limit",
      "type": "integer"
    }
  },
  "title": "ga4_traffic_sourcesArguments",
  "type": "object"
}
```

</details>

<a id="tool-ga4_top_pages-43e80c8f"></a>

## ga4_top_pages

Handler: Other product (tools/ga4.py): calls mcp.tool, \_run\_report, \_result, date.today, \_parse\_report, timedelta.

```text
[READ] GA4 analytics tool. Get the most visited pages in GA4 by page views. Args: property_id: GA4 property ID. Leave blank to use the default property. start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. row_limit: Max rows. Default 20.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4.py#L282-L305) · Schema: tools/list.

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
  "title": "ga4_top_pagesArguments",
  "type": "object"
}
```

</details>

<a id="tool-ga4_device_breakdown-e7f0b972"></a>

## ga4_device_breakdown

Handler: Other product (tools/ga4.py): calls mcp.tool, \_run\_report, \_result, date.today, \_parse\_report, timedelta.

```text
[READ] GA4 analytics tool. Get GA4 sessions and conversions broken down by device category: desktop, mobile, tablet. Args: property_id: GA4 property ID. Leave blank to use the default property. start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4.py#L308-L329) · Schema: tools/list.

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
  "title": "ga4_device_breakdownArguments",
  "type": "object"
}
```

</details>

<a id="tool-ga4_conversions-86bd53fd"></a>

## ga4_conversions

Handler: Other product (tools/ga4.py): calls mcp.tool, \_run\_report, \_result, date.today, \_parse\_report, timedelta.

```text
[READ] GA4 analytics tool. Get GA4 conversion events with their counts and conversion rates. Args: property_id: GA4 property ID. Leave blank to use the default property. start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. row_limit: Max conversion events. Default 20.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4.py#L332-L355) · Schema: tools/list.

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
  "title": "ga4_conversionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-ga4_ecommerce-f470a95a"></a>

## ga4_ecommerce

Handler: Other product (tools/ga4.py): calls mcp.tool, \_result, \_run\_report, response.get, date.today, enumerate, timedelta.

```text
[READ] GA4 analytics tool. Get GA4 ecommerce overview: revenue, transactions, average order value, purchase rate. Args: property_id: GA4 property ID. Leave blank to use the default property. start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4.py#L358-L391) · Schema: tools/list.

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
  "title": "ga4_ecommerceArguments",
  "type": "object"
}
```

</details>

<a id="tool-ga4_realtime-4ff73072"></a>

## ga4_realtime

Handler: Other product (tools/ga4.py): calls mcp.tool, \_resolve\_property, \_data\_svc, svc.properties().runRealtimeReport(property=prop, body={'metrics': \[{'name': 'activeUsers'}\]}).execute, svc.properties().runRealtimeReport(property=prop, body={'dimensions': \[{'name': 'unifiedScreenName'}\], 'metrics': \[{'name': 'activeUsers'}\], 'limit': 10}).execute, svc.properties().runRealtimeReport(property=prop, body={'dimensions': \[{'name': 'country'}\], 'metrics': \[{'name': 'activeUsers'}\], 'limit': 10}).execute, users\_resp.get, users\_resp.get('rows', \[{}\])\[0\].get('metricValues', \[{}\])\[0\].get.

```text
[READ] GA4 analytics tool. Get real-time active users currently on the site (last 30 minutes), broken down by page and country. Args: property_id: GA4 property ID. Leave blank to use the default property.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4.py#L394-L424) · Schema: tools/list.

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
  "title": "ga4_realtimeArguments",
  "type": "object"
}
```

</details>

<a id="tool-ga4_landing_pages-324d1e1f"></a>

## ga4_landing_pages

Handler: Other product (tools/ga4.py): calls mcp.tool, \_run\_report, \_result, date.today, \_parse\_report, timedelta.

```text
[READ] GA4 analytics tool. Get GA4 landing page performance: sessions, bounce rate, conversions, engagement rate. Args: property_id: GA4 property ID. Leave blank to use the default property. start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. row_limit: Max rows. Default 20.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4.py#L427-L450) · Schema: tools/list.

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
  "title": "ga4_landing_pagesArguments",
  "type": "object"
}
```

</details>

<a id="tool-ga4_user_retention-a786083e"></a>

## ga4_user_retention

Handler: Other product (tools/ga4.py): calls mcp.tool, \_run\_report, \_result, date.today, \_parse\_report, timedelta.

```text
[READ] GA4 analytics tool. Get GA4 user retention metrics: new vs returning users, engagement rate, sessions per user. Args: property_id: GA4 property ID. Leave blank to use the default property. start_date: Start date YYYY-MM-DD. Defaults to 90 days ago. end_date: End date YYYY-MM-DD. Defaults to today.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4.py#L453-L474) · Schema: tools/list.

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
  "title": "ga4_user_retentionArguments",
  "type": "object"
}
```

</details>

<a id="tool-ga4_geographic_breakdown-c47e90d1"></a>

## ga4_geographic_breakdown

Handler: Other product (tools/ga4.py): calls mcp.tool, \_run\_report, \_result, date.today, \_parse\_report, timedelta.

```text
[READ] GA4 analytics tool. Get GA4 sessions and users broken down by geographic location. Args: property_id: GA4 property ID. Leave blank to use the default property. start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. row_limit: Max rows. Default 20. breakdown: 'country', 'region', or 'city'. Default country.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4.py#L477-L501) · Schema: tools/list.

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
    },
    "breakdown": {
      "default": "country",
      "title": "Breakdown",
      "type": "string"
    }
  },
  "title": "ga4_geographic_breakdownArguments",
  "type": "object"
}
```

</details>

<a id="tool-ga4_user_journey-89b65522"></a>

## ga4_user_journey

Handler: Other product (tools/ga4.py): calls mcp.tool, \_run\_report, \_result, date.today, \_parse\_report, timedelta.

```text
[READ] GA4 analytics tool. Get GA4 user journey data — how users navigate through the site using page path combined with channel. Args: property_id: GA4 property ID. Leave blank to use the default property. start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. row_limit: Max rows. Default 20.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4.py#L504-L527) · Schema: tools/list.

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
  "title": "ga4_user_journeyArguments",
  "type": "object"
}
```

</details>

<a id="tool-ga4_events-3abbb027"></a>

## ga4_events

Handler: Other product (tools/ga4.py): calls mcp.tool, \_run\_report, \_result, date.today, \_parse\_report, timedelta.

```text
[READ] GA4 analytics tool. Get all GA4 events with their counts and unique user counts. Args: property_id: GA4 property ID. Leave blank to use the default property. start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. row_limit: Max events. Default 25.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4.py#L530-L553) · Schema: tools/list.

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
    }
  },
  "title": "ga4_eventsArguments",
  "type": "object"
}
```

</details>

<a id="tool-ga4_funnel_analysis-9f7a3d61"></a>

## ga4_funnel_analysis

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/ga4.py): calls mcp.tool, range, \_result, \_run\_report, resp.get, results.append, round, date.today.

```text
[READ] GA4 analytics tool. Simulate a conversion funnel by showing user drop-off across a series of pages. Args: steps: List of page path strings, e.g. ['/pricing', '/checkout', '/thank-you'] (required). property_id: GA4 property ID. Leave blank to use the default property. start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4.py#L556-L597) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "steps": {
      "items": {
        "type": "string"
      },
      "title": "Steps",
      "type": "array"
    },
    "property_id": {
      "default": "",
      "title": "Property Id",
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
    "steps"
  ],
  "title": "ga4_funnel_analysisArguments",
  "type": "object"
}
```

</details>

<a id="tool-ga4_audiences-baa51236"></a>

## ga4_audiences

Handler: Other product (tools/ga4.py): calls mcp.tool, \_resolve\_property, \_admin\_alpha\_svc().properties().audiences().list(parent=prop).execute().get, \_admin\_alpha\_svc().properties().audiences().list(parent=prop).execute, a.get, \_admin\_alpha\_svc().properties().audiences().list, \_admin\_alpha\_svc().properties().audiences, \_admin\_alpha\_svc().properties.

```text
[READ] GA4 analytics tool. List GA4 audiences defined in the property. Args: property_id: GA4 property ID. Leave blank to use the default property.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4.py#L600-L615) · Schema: tools/list.

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
  "title": "ga4_audiencesArguments",
  "type": "object"
}
```

</details>

<a id="tool-ga4_segment_analysis-7181dbb5"></a>

## ga4_segment_analysis

Handler: Other product (tools/ga4.py): calls mcp.tool, \_run\_report, \_result, date.today, \_parse\_report, timedelta.

```text
[READ] GA4 analytics tool. Get GA4 performance segmented by session default channel. Args: property_id: GA4 property ID. Leave blank to use the default property. start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. segment_filter: Channel to filter on, e.g. 'Organic Search'. Leave blank for all.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4.py#L618-L646) · Schema: tools/list.

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
    "segment_filter": {
      "default": "",
      "title": "Segment Filter",
      "type": "string"
    }
  },
  "title": "ga4_segment_analysisArguments",
  "type": "object"
}
```

</details>

<a id="tool-ga4_acquisition_channels-6a86d440"></a>

## ga4_acquisition_channels

Handler: Other product (tools/ga4.py): calls mcp.tool, \_run\_report, \_result, date.today, \_parse\_report, timedelta.

```text
[READ] GA4 analytics tool. Get GA4 user acquisition broken down by source / medium / campaign. Args: property_id: GA4 property ID. Leave blank to use the default property. start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. row_limit: Max rows. Default 20.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4.py#L649-L672) · Schema: tools/list.

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
  "title": "ga4_acquisition_channelsArguments",
  "type": "object"
}
```

</details>

<a id="tool-ga4_ecommerce_items-3acc879d"></a>

## ga4_ecommerce_items

Handler: Other product (tools/ga4.py): calls mcp.tool, \_run\_report, \_result, date.today, \_parse\_report, timedelta.

```text
[READ] GA4 analytics tool. Get GA4 ecommerce item performance: items viewed, added to cart, purchased, and revenue per item. Args: property_id: GA4 property ID. Leave blank to use the default property. start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. row_limit: Max items. Default 20.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4.py#L675-L698) · Schema: tools/list.

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
  "title": "ga4_ecommerce_itemsArguments",
  "type": "object"
}
```

</details>

<a id="tool-ga4_available_metrics-a8c3e47b"></a>

## ga4_available_metrics

Handler: Other product (tools/ga4.py): calls mcp.tool, \_resolve\_property, \_data\_svc, svc.properties().getMetadata(name=f'{prop}/metadata').execute, search.strip().casefold, svc.properties().getMetadata, item.get, search.strip.

```text
[READ] GA4 analytics tool. List the dimensions and metrics a GA4 property accepts, optionally filtered. Args: property_id: GA4 property ID. Leave blank to use the default property. search: Filter to names containing this text, e.g. 'revenue', 'session'. Matching entries come back with their descriptions; without a filter the full catalogue is names only, because all 514 descriptions do not fit in one response.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4.py#L701-L758) · Schema: tools/list.

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
    "search": {
      "default": "",
      "title": "Search",
      "type": "string"
    }
  },
  "title": "ga4_available_metricsArguments",
  "type": "object"
}
```

</details>

<a id="tool-ga4_cohort_analysis-74372f5f"></a>

## ga4_cohort_analysis

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/ga4\_advanced.py): calls mcp.tool, \_ga4\_data\_client, date.today, client.run\_cohort\_report, (today - timedelta(weeks=weeks)).strftime, (today - timedelta(weeks=weeks - 1)).strftime, rows.append, min.

```text
[READ] GA4 analytics tool. Run a cohort retention analysis in GA4. Returns weekly retention rates for users who first visited in a given date range. Args: property_id: GA4 property ID (numeric, e.g. "123456789") cohort_date_start: Start of acquisition cohort window YYYY-MM-DD (default: 8 weeks ago) cohort_date_end: End of acquisition cohort window YYYY-MM-DD (default: 7 weeks ago) weeks: Number of retention weeks to show (1-12)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_advanced.py#L20-L65) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "property_id": {
      "title": "Property Id",
      "type": "string"
    },
    "cohort_date_start": {
      "default": null,
      "title": "Cohort Date Start",
      "type": "string"
    },
    "cohort_date_end": {
      "default": null,
      "title": "Cohort Date End",
      "type": "string"
    },
    "weeks": {
      "default": 8,
      "title": "Weeks",
      "type": "integer"
    }
  },
  "required": [
    "property_id"
  ],
  "title": "ga4_cohort_analysisArguments",
  "type": "object"
}
```

</details>

<a id="tool-ga4_attribution_paths-e9ab942f"></a>

## ga4_attribution_paths

Handler: Other product (tools/ga4\_advanced.py): calls mcp.tool, \_ga4\_data\_client, date.today, types.RunReportRequest, client.run\_report, (today - timedelta(days=30)).strftime, today.strftime, rows.append.

```text
[READ] GA4 analytics tool. Return the top conversion paths showing which channel sequences lead to conversions. Args: property_id: GA4 property ID start_date: YYYY-MM-DD (default: 30 days ago) end_date: YYYY-MM-DD (default: today) conversion_event: Name of the GA4 conversion event (default: 'purchase') limit: Max rows to return (default: 20)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_advanced.py#L72-L122) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "property_id": {
      "title": "Property Id",
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
    "conversion_event": {
      "default": "purchase",
      "title": "Conversion Event",
      "type": "string"
    },
    "limit": {
      "default": 20,
      "title": "Limit",
      "type": "integer"
    }
  },
  "required": [
    "property_id"
  ],
  "title": "ga4_attribution_pathsArguments",
  "type": "object"
}
```

</details>

<a id="tool-ga4_predictive_metrics-ac0aba52"></a>

## ga4_predictive_metrics

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/ga4\_advanced.py): calls mcp.tool, \_ga4\_data\_client, date.today, types.RunReportRequest, client.run\_report, (today - timedelta(days=28)).strftime, today.strftime, rows.append.

```text
[READ] GA4 analytics tool. Return GA4 predictive metrics: purchase probability, churn probability, predicted revenue. Only available for properties with sufficient event data (GA4 ML features). Args: property_id: GA4 property ID start_date: YYYY-MM-DD (default: 28 days ago) end_date: YYYY-MM-DD (default: today) limit: Max user rows to return
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_advanced.py#L129-L178) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "property_id": {
      "title": "Property Id",
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
  "required": [
    "property_id"
  ],
  "title": "ga4_predictive_metricsArguments",
  "type": "object"
}
```

</details>

<a id="tool-ga4_core_web_vitals-f3efff04"></a>

## ga4_core_web_vitals

Handler: Other product (tools/ga4\_advanced.py): calls mcp.tool, \_ga4\_data\_client, date.today, types.RunReportRequest, client.run\_report, (today - timedelta(days=28)).strftime, today.strftime, rows.append.

```text
[READ] GA4 analytics tool. Return Core Web Vitals data from GA4 (LCP, FID/INP, CLS) broken down by page path. Args: property_id: GA4 property ID start_date: YYYY-MM-DD (default: 28 days ago) end_date: YYYY-MM-DD (default: today) limit: Max page rows to return (default: 25)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_advanced.py#L185-L232) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "property_id": {
      "title": "Property Id",
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
      "default": 25,
      "title": "Limit",
      "type": "integer"
    }
  },
  "required": [
    "property_id"
  ],
  "title": "ga4_core_web_vitalsArguments",
  "type": "object"
}
```

</details>

<a id="tool-ga4_path_exploration-7b2705bb"></a>

## ga4_path_exploration

Handler: Other product (tools/ga4\_advanced.py): calls mcp.tool, \_ga4\_data\_client, date.today, types.RunReportRequest, client.run\_report, (today - timedelta(days=30)).strftime, today.strftime, types.Dimension.

```text
[READ] GA4 analytics tool. Explore user journeys — what pages/events users visit after a starting point. Args: property_id: GA4 property ID start_date: YYYY-MM-DD (default: 30 days ago) end_date: YYYY-MM-DD (default: today) starting_page: Optional page path to filter starting point (e.g. '/home') limit: Max rows (default: 30)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_advanced.py#L239-L296) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "property_id": {
      "title": "Property Id",
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
    "starting_page": {
      "default": null,
      "title": "Starting Page",
      "type": "string"
    },
    "limit": {
      "default": 30,
      "title": "Limit",
      "type": "integer"
    }
  },
  "required": [
    "property_id"
  ],
  "title": "ga4_path_explorationArguments",
  "type": "object"
}
```

</details>

<a id="tool-ga4_create_audience-406760e3"></a>

## ga4_create_audience

Handler: Other product (tools/ga4\_advanced.py): calls mcp.tool, \_ga4\_admin\_client, admin\_types.Audience, admin.create\_audience, min, max, admin\_types.AudienceFilterClause, admin\_types.AudienceSimpleFilter.

```text
[WRITE] GA4 analytics tool. Create a new GA4 audience based on an event trigger. Args: property_id: GA4 property ID display_name: Human-readable audience name description: Optional description membership_duration_days: How long users stay in the audience (1-540 days) event_name: GA4 event that qualifies users for this audience (e.g. 'purchase', 'sign_up')
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_advanced.py#L303-L354) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "property_id": {
      "title": "Property Id",
      "type": "string"
    },
    "display_name": {
      "title": "Display Name",
      "type": "string"
    },
    "description": {
      "default": "",
      "title": "Description",
      "type": "string"
    },
    "membership_duration_days": {
      "default": 30,
      "title": "Membership Duration Days",
      "type": "integer"
    },
    "event_name": {
      "default": "purchase",
      "title": "Event Name",
      "type": "string"
    }
  },
  "required": [
    "property_id",
    "display_name"
  ],
  "title": "ga4_create_audienceArguments",
  "type": "object"
}
```

</details>

<a id="tool-ga4_list_custom_dimensions-75905509"></a>

## ga4_list_custom_dimensions

Handler: Other product (tools/ga4\_advanced.py): calls mcp.tool, \_ga4\_admin\_client, admin.list\_custom\_dimensions, dims.append.

```text
[READ] GA4 analytics tool. List all custom dimensions configured on a GA4 property. Args: property_id: GA4 property ID
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_advanced.py#L361-L380) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "property_id": {
      "title": "Property Id",
      "type": "string"
    }
  },
  "required": [
    "property_id"
  ],
  "title": "ga4_list_custom_dimensionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-ga4_compare_date_ranges-5fe68a1b"></a>

## ga4_compare_date_ranges

Handler: Other product (tools/ga4\_advanced.py): calls mcp.tool, \_ga4\_data\_client, date.today, (today - timedelta(days=30)).strftime, (today - timedelta(days=1)).strftime, (today - timedelta(days=60)).strftime, (today - timedelta(days=31)).strftime, m.strip.

```text
[READ] GA4 analytics tool. Compare key metrics between two date ranges side-by-side. Args: property_id: GA4 property ID period1_start: More recent period start YYYY-MM-DD (default: last 30 days) period1_end: More recent period end YYYY-MM-DD (default: yesterday) period2_start: Comparison period start (default: 31-60 days ago) period2_end: Comparison period end (default: 31 days ago) metrics: Comma-separated GA4 metric names (default: sessions,newUsers,conversions,purchaseRevenue)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_advanced.py#L387-L446) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "property_id": {
      "title": "Property Id",
      "type": "string"
    },
    "period1_start": {
      "default": null,
      "title": "Period1 Start",
      "type": "string"
    },
    "period1_end": {
      "default": null,
      "title": "Period1 End",
      "type": "string"
    },
    "period2_start": {
      "default": null,
      "title": "Period2 Start",
      "type": "string"
    },
    "period2_end": {
      "default": null,
      "title": "Period2 End",
      "type": "string"
    },
    "metrics": {
      "default": "sessions,newUsers,conversions,purchaseRevenue",
      "title": "Metrics",
      "type": "string"
    }
  },
  "required": [
    "property_id"
  ],
  "title": "ga4_compare_date_rangesArguments",
  "type": "object"
}
```

</details>

<a id="tool-ga4_channel_performance-e5da1ca4"></a>

## ga4_channel_performance

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/ga4\_advanced.py): calls mcp.tool, \_ga4\_data\_client, date.today, (today - timedelta(days=30)).strftime, (today - timedelta(days=1)).strftime, types.DateRange, date\_ranges.append, types.RunReportRequest.

```text
[READ] GA4 analytics tool. Return performance breakdown by default channel grouping (Organic Search, Paid Search, Direct, etc.). Args: property_id: GA4 property ID start_date: YYYY-MM-DD (default: 30 days ago) end_date: YYYY-MM-DD (default: yesterday) compare_to_previous: Also fetch previous 30-day period for comparison (default: True)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_advanced.py#L453-L518) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "property_id": {
      "title": "Property Id",
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
    "compare_to_previous": {
      "default": true,
      "title": "Compare To Previous",
      "type": "boolean"
    }
  },
  "required": [
    "property_id"
  ],
  "title": "ga4_channel_performanceArguments",
  "type": "object"
}
```

</details>

<a id="tool-ga4_site_search_terms-abea024d"></a>

## ga4_site_search_terms

Handler: Other product (tools/ga4\_advanced.py): calls mcp.tool, \_ga4\_data\_client, date.today, types.RunReportRequest, client.run\_report, (today - timedelta(days=30)).strftime, today.strftime, rows.append.

```text
[READ] GA4 analytics tool. Return internal site search terms that users searched within your website. Requires GA4 enhanced measurement > site search to be enabled. Args: property_id: GA4 property ID start_date: YYYY-MM-DD (default: 30 days ago) end_date: YYYY-MM-DD (default: today) limit: Max rows (default: 50)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_advanced.py#L525-L572) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "property_id": {
      "title": "Property Id",
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
  "required": [
    "property_id"
  ],
  "title": "ga4_site_search_termsArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_ga_traffic_today-6ea8c9e5"></a>

## get_ga_traffic_today

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, \_preset\_dates, \_gen\_report.

```text
[READ][PRESET] Fixed-date GA4 preset for traffic over today. Use this when the user explicitly asks for that exact time window. For flexible date ranges or custom fields, prefer the main ga4_* tools or ga4_run_custom_report().
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L150-L154) · Schema: tools/list.

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
  "title": "get_ga_traffic_todayArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_ga_traffic_yesterday-d947cd13"></a>

## get_ga_traffic_yesterday

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, \_preset\_dates, \_gen\_report.

```text
[READ][PRESET] Fixed-date GA4 preset for traffic over yesterday. Use this when the user explicitly asks for that exact time window. For flexible date ranges or custom fields, prefer the main ga4_* tools or ga4_run_custom_report().
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L157-L161) · Schema: tools/list.

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
  "title": "get_ga_traffic_yesterdayArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_ga_traffic_7d-bf06bbac"></a>

## get_ga_traffic_7d

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, \_preset\_dates, \_gen\_report.

```text
[READ][PRESET] Fixed-date GA4 preset for traffic over the last 7 days. Use this when the user explicitly asks for that exact time window. For flexible date ranges or custom fields, prefer the main ga4_* tools or ga4_run_custom_report().
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L164-L168) · Schema: tools/list.

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
  "title": "get_ga_traffic_7dArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_ga_traffic_30d-0e0c1ccc"></a>

## get_ga_traffic_30d

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, \_preset\_dates, \_gen\_report.

```text
[READ][PRESET] Fixed-date GA4 preset for traffic over the last 30 days. Use this when the user explicitly asks for that exact time window. For flexible date ranges or custom fields, prefer the main ga4_* tools or ga4_run_custom_report().
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L171-L175) · Schema: tools/list.

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
  "title": "get_ga_traffic_30dArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_ga_traffic_90d-498ae640"></a>

## get_ga_traffic_90d

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, \_preset\_dates, \_gen\_report.

```text
[READ][PRESET] Fixed-date GA4 preset for traffic over the last 90 days. Use this when the user explicitly asks for that exact time window. For flexible date ranges or custom fields, prefer the main ga4_* tools or ga4_run_custom_report().
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L178-L182) · Schema: tools/list.

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
  "title": "get_ga_traffic_90dArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_ga_traffic_this_month-a840244b"></a>

## get_ga_traffic_this_month

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, \_preset\_dates, \_gen\_report.

```text
[READ][PRESET] Fixed-date GA4 preset for traffic over this month to date. Use this when the user explicitly asks for that exact time window. For flexible date ranges or custom fields, prefer the main ga4_* tools or ga4_run_custom_report().
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L185-L189) · Schema: tools/list.

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
  "title": "get_ga_traffic_this_monthArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_ga_traffic_last_month-4f1a2ec4"></a>

## get_ga_traffic_last_month

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, \_preset\_dates, \_gen\_report.

```text
[READ][PRESET] Fixed-date GA4 preset for traffic over the last full month. Use this when the user explicitly asks for that exact time window. For flexible date ranges or custom fields, prefer the main ga4_* tools or ga4_run_custom_report().
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L192-L196) · Schema: tools/list.

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
  "title": "get_ga_traffic_last_monthArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_ga_traffic_ytd-de6b4ca3"></a>

## get_ga_traffic_ytd

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, \_preset\_dates, \_gen\_report.

```text
[READ][PRESET] Fixed-date GA4 preset for traffic over year to date. Use this when the user explicitly asks for that exact time window. For flexible date ranges or custom fields, prefer the main ga4_* tools or ga4_run_custom_report().
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L199-L203) · Schema: tools/list.

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
  "title": "get_ga_traffic_ytdArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_ga_top_pages_today-20513310"></a>

## get_ga_top_pages_today

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, \_preset\_dates, \_gen\_report.

```text
[READ][PRESET] Fixed-date GA4 preset for top pages over today. Use this when the user explicitly asks for that exact time window. For flexible date ranges or custom fields, prefer the main ga4_* tools or ga4_run_custom_report().
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L210-L214) · Schema: tools/list.

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
    "row_limit": {
      "default": 20,
      "title": "Row Limit",
      "type": "integer"
    }
  },
  "title": "get_ga_top_pages_todayArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_ga_top_pages_yesterday-848cd445"></a>

## get_ga_top_pages_yesterday

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, \_preset\_dates, \_gen\_report.

```text
[READ][PRESET] Fixed-date GA4 preset for top pages over yesterday. Use this when the user explicitly asks for that exact time window. For flexible date ranges or custom fields, prefer the main ga4_* tools or ga4_run_custom_report().
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L217-L221) · Schema: tools/list.

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
    "row_limit": {
      "default": 20,
      "title": "Row Limit",
      "type": "integer"
    }
  },
  "title": "get_ga_top_pages_yesterdayArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_ga_top_pages_7d-f659d4c1"></a>

## get_ga_top_pages_7d

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, \_preset\_dates, \_gen\_report.

```text
[READ][PRESET] Fixed-date GA4 preset for top pages over the last 7 days. Use this when the user explicitly asks for that exact time window. For flexible date ranges or custom fields, prefer the main ga4_* tools or ga4_run_custom_report().
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L224-L228) · Schema: tools/list.

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
    "row_limit": {
      "default": 25,
      "title": "Row Limit",
      "type": "integer"
    }
  },
  "title": "get_ga_top_pages_7dArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_ga_top_pages_30d-e5a75d3d"></a>

## get_ga_top_pages_30d

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, \_preset\_dates, \_gen\_report.

```text
[READ][PRESET] Fixed-date GA4 preset for top pages over the last 30 days. Use this when the user explicitly asks for that exact time window. For flexible date ranges or custom fields, prefer the main ga4_* tools or ga4_run_custom_report().
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L231-L235) · Schema: tools/list.

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
    "row_limit": {
      "default": 25,
      "title": "Row Limit",
      "type": "integer"
    }
  },
  "title": "get_ga_top_pages_30dArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_ga_top_pages_90d-28813353"></a>

## get_ga_top_pages_90d

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, \_preset\_dates, \_gen\_report.

```text
[READ][PRESET] Fixed-date GA4 preset for top pages over the last 90 days. Use this when the user explicitly asks for that exact time window. For flexible date ranges or custom fields, prefer the main ga4_* tools or ga4_run_custom_report().
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L238-L242) · Schema: tools/list.

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
    "row_limit": {
      "default": 25,
      "title": "Row Limit",
      "type": "integer"
    }
  },
  "title": "get_ga_top_pages_90dArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_ga_conversions_today-66d313ab"></a>

## get_ga_conversions_today

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, \_preset\_dates, \_gen\_report.

```text
[READ][PRESET] Fixed-date GA4 preset for conversions over today. Use this when the user explicitly asks for that exact time window. For flexible date ranges or custom fields, prefer the main ga4_* tools or ga4_run_custom_report().
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L249-L253) · Schema: tools/list.

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
  "title": "get_ga_conversions_todayArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_ga_conversions_yesterday-b4bd3c64"></a>

## get_ga_conversions_yesterday

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, \_preset\_dates, \_gen\_report.

```text
[READ][PRESET] Fixed-date GA4 preset for conversions over yesterday. Use this when the user explicitly asks for that exact time window. For flexible date ranges or custom fields, prefer the main ga4_* tools or ga4_run_custom_report().
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L256-L260) · Schema: tools/list.

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
  "title": "get_ga_conversions_yesterdayArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_ga_conversions_7d-0a96402d"></a>

## get_ga_conversions_7d

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, \_preset\_dates, \_gen\_report.

```text
[READ][PRESET] Fixed-date GA4 preset for conversions over the last 7 days. Use this when the user explicitly asks for that exact time window. For flexible date ranges or custom fields, prefer the main ga4_* tools or ga4_run_custom_report().
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L263-L267) · Schema: tools/list.

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
  "title": "get_ga_conversions_7dArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_ga_conversions_30d-96d53a3f"></a>

## get_ga_conversions_30d

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, \_preset\_dates, \_gen\_report.

```text
[READ][PRESET] Fixed-date GA4 preset for conversions over the last 30 days. Use this when the user explicitly asks for that exact time window. For flexible date ranges or custom fields, prefer the main ga4_* tools or ga4_run_custom_report().
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L270-L274) · Schema: tools/list.

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
  "title": "get_ga_conversions_30dArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_ga_conversions_this_month-7446b980"></a>

## get_ga_conversions_this_month

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, \_preset\_dates, \_gen\_report.

```text
[READ][PRESET] Fixed-date GA4 preset for conversions over this month to date. Use this when the user explicitly asks for that exact time window. For flexible date ranges or custom fields, prefer the main ga4_* tools or ga4_run_custom_report().
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L277-L281) · Schema: tools/list.

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
  "title": "get_ga_conversions_this_monthArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_ga_ecommerce_today-55ee50ac"></a>

## get_ga_ecommerce_today

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, \_preset\_dates, \_gen\_report.

```text
[READ][PRESET] Fixed-date GA4 preset for ecommerce over today. Use this when the user explicitly asks for that exact time window. For flexible date ranges or custom fields, prefer the main ga4_* tools or ga4_run_custom_report().
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L288-L292) · Schema: tools/list.

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
  "title": "get_ga_ecommerce_todayArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_ga_ecommerce_7d-705ab94f"></a>

## get_ga_ecommerce_7d

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, \_preset\_dates, \_gen\_report.

```text
[READ][PRESET] Fixed-date GA4 preset for ecommerce over the last 7 days. Use this when the user explicitly asks for that exact time window. For flexible date ranges or custom fields, prefer the main ga4_* tools or ga4_run_custom_report().
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L295-L299) · Schema: tools/list.

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
  "title": "get_ga_ecommerce_7dArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_ga_ecommerce_30d-18a1d94f"></a>

## get_ga_ecommerce_30d

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, \_preset\_dates, \_gen\_report.

```text
[READ][PRESET] Fixed-date GA4 preset for ecommerce over the last 30 days. Use this when the user explicitly asks for that exact time window. For flexible date ranges or custom fields, prefer the main ga4_* tools or ga4_run_custom_report().
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L302-L306) · Schema: tools/list.

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
  "title": "get_ga_ecommerce_30dArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_ga_ecommerce_this_month-0c3b2c15"></a>

## get_ga_ecommerce_this_month

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, \_preset\_dates, \_gen\_report.

```text
[READ][PRESET] Fixed-date GA4 preset for ecommerce over this month to date. Use this when the user explicitly asks for that exact time window. For flexible date ranges or custom fields, prefer the main ga4_* tools or ga4_run_custom_report().
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L309-L313) · Schema: tools/list.

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
  "title": "get_ga_ecommerce_this_monthArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_ga_compare_wow-d12511f7"></a>

## get_ga_compare_wow

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, date.today, timedelta, \_compare\_two.

```text
[READ] GA4 Preset tool. Week-over-week comparison — this week vs previous 7 days.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L320-L329) · Schema: tools/list.

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
  "title": "get_ga_compare_wowArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_ga_compare_mom-bf4e4079"></a>

## get_ga_compare_mom

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, date.today, timedelta, \_compare\_two.

```text
[READ] GA4 Preset tool. Month-over-month comparison — last 30 days vs prior 30 days.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L332-L341) · Schema: tools/list.

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
  "title": "get_ga_compare_momArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_ga_compare_yoy-dca8f136"></a>

## get_ga_compare_yoy

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, date.today, timedelta, \_compare\_two.

```text
[READ] GA4 Preset tool. Year-over-year comparison — last 30 days vs same 30 days one year ago.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L344-L354) · Schema: tools/list.

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
  "title": "get_ga_compare_yoyArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_ga_compare_qoq-6a67b8da"></a>

## get_ga_compare_qoq

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, date.today, timedelta, \_compare\_two.

```text
[READ] GA4 Preset tool. Quarter-over-quarter comparison — last 90 days vs prior 90 days.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L357-L366) · Schema: tools/list.

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
  "title": "get_ga_compare_qoqArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_ga_organic_search-e90fa5c7"></a>

## get_ga_organic_search

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, \_dates, \_str\_filt, \_simple\_report.

```text
[READ] GA4 Preset tool. GA4 organic search traffic — sources, keywords, landing pages.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L373-L381) · Schema: tools/list.

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
  "title": "get_ga_organic_searchArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_ga_paid_search-8b50b37d"></a>

## get_ga_paid_search

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, \_dates, \_simple\_report, \_str\_filt.

```text
[READ] GA4 Preset tool. GA4 paid search traffic (cpc/ppc) — campaigns, sources, landing pages.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L384-L392) · Schema: tools/list.

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
  "title": "get_ga_paid_searchArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_ga_organic_social-6cab6031"></a>

## get_ga_organic_social

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, \_dates, \_str\_filt, \_simple\_report.

```text
[READ] GA4 Preset tool. GA4 organic social traffic.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L395-L403) · Schema: tools/list.

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
  "title": "get_ga_organic_socialArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_ga_paid_social-828a0fe6"></a>

## get_ga_paid_social

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, \_dates, \_str\_filt, \_simple\_report.

```text
[READ] GA4 Preset tool. GA4 paid social traffic.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L406-L414) · Schema: tools/list.

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
  "title": "get_ga_paid_socialArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_ga_email_channel-440fe36a"></a>

## get_ga_email_channel

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, \_dates, \_str\_filt, \_simple\_report.

```text
[READ] GA4 Preset tool. GA4 email channel traffic.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L417-L425) · Schema: tools/list.

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
  "title": "get_ga_email_channelArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_ga_direct_channel-bdaa1c97"></a>

## get_ga_direct_channel

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, \_dates, \_str\_filt, \_simple\_report.

```text
[READ] GA4 Preset tool. GA4 direct traffic.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L428-L436) · Schema: tools/list.

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
  "title": "get_ga_direct_channelArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_ga_referral_channel-cbba2012"></a>

## get_ga_referral_channel

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, \_dates, \_str\_filt, \_simple\_report.

```text
[READ] GA4 Preset tool. GA4 referral traffic — top referring sites.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L439-L447) · Schema: tools/list.

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
    }
  },
  "title": "get_ga_referral_channelArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_ga_google_traffic-782d0b07"></a>

## get_ga_google_traffic

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, \_dates, \_str\_filt, \_simple\_report.

```text
[READ] GA4 Preset tool. GA4 traffic from Google (all channels).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L454-L462) · Schema: tools/list.

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
  "title": "get_ga_google_trafficArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_ga_facebook_traffic-51313cf5"></a>

## get_ga_facebook_traffic

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, \_dates, \_simple\_report, \_str\_filt.

```text
[READ] GA4 Preset tool. GA4 traffic from Facebook / Meta.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L465-L473) · Schema: tools/list.

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
  "title": "get_ga_facebook_trafficArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_ga_tiktok_traffic-92944cc8"></a>

## get_ga_tiktok_traffic

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, \_dates, \_str\_filt, \_simple\_report.

```text
[READ] GA4 Preset tool. GA4 traffic from TikTok.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L476-L484) · Schema: tools/list.

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
  "title": "get_ga_tiktok_trafficArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_ga_hour_of_day-43f4363f"></a>

## get_ga_hour_of_day

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, \_preset\_dates, \_gen\_report.

```text
[READ] GA4 Preset tool. GA4 traffic by hour of day — useful for scheduling ads and content.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L491-L499) · Schema: tools/list.

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
  "title": "get_ga_hour_of_dayArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_ga_day_of_week-16264de3"></a>

## get_ga_day_of_week

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, \_preset\_dates, \_gen\_report.

```text
[READ] GA4 Preset tool. GA4 traffic by day of week — useful for scheduling posts and campaigns.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L502-L510) · Schema: tools/list.

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
  "title": "get_ga_day_of_weekArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_ga_day_hour_heatmap-7cca59eb"></a>

## get_ga_day_hour_heatmap

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, \_preset\_dates, \_gen\_report.

```text
[READ] GA4 Preset tool. GA4 day × hour heatmap — when are users most active? Grid data for all 7 days × 24 hours.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L513-L521) · Schema: tools/list.

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
  "title": "get_ga_day_hour_heatmapArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_ga_new_vs_returning-31a584cd"></a>

## get_ga_new_vs_returning

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, \_dates, \_simple\_report.

```text
[READ] GA4 Preset tool. GA4 new vs returning users — sessions, conversions, and revenue split.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L528-L535) · Schema: tools/list.

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
  "title": "get_ga_new_vs_returningArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_ga_user_lifetime_value-17e87c3d"></a>

## get_ga_user_lifetime_value

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, \_dates, \_simple\_report.

```text
[READ] GA4 Preset tool. GA4 user lifetime value summary — average revenue per user.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L538-L545) · Schema: tools/list.

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
  "title": "get_ga_user_lifetime_valueArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_ga_audience_engagement-cb6b0989"></a>

## get_ga_audience_engagement

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, \_dates, \_simple\_report.

```text
[READ] GA4 Preset tool. GA4 engagement metrics by audience segment.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L548-L555) · Schema: tools/list.

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
  "title": "get_ga_audience_engagementArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_ga_executive_dashboard-d13fdceb"></a>

## get_ga_executive_dashboard

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, date.today, timedelta, \_simple\_report, \_gen\_report.

```text
[READ] GA4 Preset tool. Executive summary dashboard — sessions, conversions, revenue, top channels, and daily trend.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L562-L575) · Schema: tools/list.

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
      "default": 30,
      "title": "Days",
      "type": "integer"
    }
  },
  "title": "get_ga_executive_dashboardArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_ga_marketing_kpi_dashboard-f563eb39"></a>

## get_ga_marketing_kpi_dashboard

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, \_preset\_dates, \_gen\_report.

```text
[READ] GA4 Preset tool. Full marketing KPI dashboard — acquisition, engagement, monetization, retention.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L578-L591) · Schema: tools/list.

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
  "title": "get_ga_marketing_kpi_dashboardArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_ga_lead_gen_dashboard-7e2cc2ee"></a>

## get_ga_lead_gen_dashboard

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, \_preset\_dates, \_gen\_report.

```text
[READ] GA4 Preset tool. Lead generation dashboard — lead events, sources, and top converting pages.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L594-L607) · Schema: tools/list.

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
  "title": "get_ga_lead_gen_dashboardArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_ga_ecommerce_dashboard-5e471844"></a>

## get_ga_ecommerce_dashboard

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, \_preset\_dates, \_gen\_report.

```text
[READ] GA4 Preset tool. Ecommerce dashboard — revenue by channel, top products, top categories, top countries.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L610-L623) · Schema: tools/list.

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
  "title": "get_ga_ecommerce_dashboardArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_ga_ppc_dashboard-02c9b0e2"></a>

## get_ga_ppc_dashboard

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, \_preset\_dates, \_str\_filt, \_gen\_report.

```text
[READ] GA4 Preset tool. PPC performance dashboard — paid search campaigns, keywords, and landing pages.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L626-L639) · Schema: tools/list.

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
  "title": "get_ga_ppc_dashboardArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_ga_seo_dashboard-7d8e7daa"></a>

## get_ga_seo_dashboard

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, \_preset\_dates, \_str\_filt, \_gen\_report.

```text
[READ] GA4 Preset tool. SEO dashboard — organic search traffic, landing pages, and engagement.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L642-L655) · Schema: tools/list.

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
  "title": "get_ga_seo_dashboardArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_ga_social_dashboard-b2ddb14d"></a>

## get_ga_social_dashboard

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, \_preset\_dates, \_gen\_report, \_str\_filt.

```text
[READ] GA4 Preset tool. Social media dashboard — organic and paid social traffic.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L658-L670) · Schema: tools/list.

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
  "title": "get_ga_social_dashboardArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_ga_full_360_report-80176497"></a>

## get_ga_full_360_report

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, date.today, timedelta, \_simple\_report.

```text
[READ] GA4 Preset tool. Comprehensive 360 site report — all major dimensions in one call.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L673-L688) · Schema: tools/list.

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
      "default": 30,
      "title": "Days",
      "type": "integer"
    }
  },
  "title": "get_ga_full_360_reportArguments",
  "type": "object"
}
```

</details>

<a id="tool-ga4_check_data_quality-812f5ff9"></a>

## ga4_check_data_quality

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, date.today, \_simple\_report, r.get, issues.append, any, timedelta, sessions\[0\].get.

```text
[READ] GA4 analytics tool. Check for common GA4 data quality issues — missing events, no conversions, no sessions.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L695-L721) · Schema: tools/list.

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
  "title": "ga4_check_data_qualityArguments",
  "type": "object"
}
```

</details>

<a id="tool-ga4_audit_property_settings-dcbfedcf"></a>

## ga4_audit_property_settings

Handler: Other product (tools/ga4\_agency.py): calls mcp.tool, \_resolve\_property, \_admin\_svc, admin.properties().dataStreams().list(parent=prop).execute().get, admin.properties().keyEvents().list(parent=prop).execute().get, admin.properties().googleAdsLinks().list(parent=prop).execute().get, admin.properties().customDimensions().list(parent=prop).execute().get, admin.properties().customMetrics().list(parent=prop).execute().get.

```text
[READ] GA4 analytics tool. Audit property setup — streams, key events, Google Ads links, retention, custom dims.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/ga4_agency.py#L724-L741) · Schema: tools/list.

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
  "title": "ga4_audit_property_settingsArguments",
  "type": "object"
}
```

</details>
