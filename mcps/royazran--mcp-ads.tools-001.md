# RoyAzran/mcp-ads: supporting and other-product tools

[Provider inventory](royazran--mcp-ads.md) · [Global tool index](../TOOL_INDEX.md)

Tools 1–150 of 3131. Exact schemas from the same upstream snapshot.

<a id="tool-media_upload_start-62e7ec95"></a>

## media_upload_start

Handler: Other product (media\_app.py): calls apps.tool, upload\_start\_payload.

```text
[RECOMMENDED] Show the user a drop zone to hand over pictures or videos.

CALL THIS WITHOUT BEING ASKED whenever media enters the conversation:

  * the user attaches or pastes a picture or video
  * they say they want to upload, send or add one
  * they ask for anything that needs a creative -- a new image ad,
    changing an ad's picture, refreshing a tired creative, a carousel,
    a Page or Instagram post

Say what it is for in the same turn, e.g. "drop your images or videos in
the box above and I will publish them to your ad", so the box does not
appear unexplained. Do not ask them to find a public URL first, and do
not wait for a second request.

You cannot read an attachment -- you are shown the picture, never handed
the bytes -- so this is the only way media reaches an ad. Never base64 a
file into a tool parameter: large parameters are truncated in transit and
the file arrives corrupt (loudly for PNG, silently for JPEG -- Meta
returns a valid-looking image_hash for a damaged creative).

In a host that renders inline UI this puts a drop zone in the
conversation. Everywhere else -- ChatGPT, API clients -- there is no box
and the same payload carries a plain upload link in
`say_to_user_no_widget`. Hand that over rather than telling the user you
cannot accept files; asking them for a public URL instead is a dead end,
because this tool is what produces one.

SEVERAL FILES AT ONCE ARE FINE, and so is video (MP4/MOV alongside
JPG/PNG/GIF/WebP). One drop zone takes a whole carousel, a set of
variants to choose between, or an image and a video of the same
creative. media_upload_result then returns `files`, `image_urls` and
`video_urls` rather than a single url -- do not assume the first one is
the one they meant; ask if it is ambiguous.

PASS `ad` WHENEVER THE USER MEANS A PARTICULAR AD, e.g. "put this picture
on the retargeting ad". The image then goes straight onto that ad the
moment they drop it, keeping its existing copy, link, page and CTA, and
you need no follow-up call at all. Use whatever the conversation has been
calling the ad -- its name, part of its name, or its ID. If several ads
match, this returns them so you can ask which one; do not guess, since the
wrong choice edits the wrong live ad.

Without `ad`, the file is just stored: call media_upload_result with the
returned upload_id to get its public URL.

Args:
    purpose: Optional note shown to the user, e.g. "creative for the
        retargeting ad". Helps them pick the right file.
    ad: Optional. The ad this picture should land on -- name, partial
        name, or ID.

```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/media_app.py#L257-L320) · Schema: tools/list.

Exposure: Full and slim surfaces; alternate slim registration preserved below.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "purpose": {
      "default": "",
      "title": "Purpose",
      "type": "string"
    },
    "ad": {
      "default": "",
      "title": "Ad",
      "type": "string"
    }
  },
  "title": "media_upload_startArguments",
  "type": "object"
}
```

</details>

<details>
<summary>Alternate registration: Default slim surface</summary>

```json
{
  "exposure": "Default slim surface",
  "name": "media_upload_start",
  "title": "Upload A Picture Or Video",
  "description": "[RECOMMENDED] Show the user a drop zone to hand over pictures or videos.\n\nCALL THIS WITHOUT BEING ASKED whenever media enters the conversation:\n\n  * the user attaches or pastes a picture or video\n  * they say they want to upload, send or add one\n  * they ask for anything that needs a creative -- a new image ad,\n    changing an ad's picture, refreshing a tired creative, a carousel,\n    a Page or Instagram post\n\nSay what it is for in the same turn, e.g. \"drop your images or videos in\nthe box above and I will publish them to your ad\", so the box does not\nappear unexplained. Do not ask them to find a public URL first, and do\nnot wait for a second request.\n\nYou cannot read an attachment -- you are shown the picture, never handed\nthe bytes -- so this is the only way media reaches an ad. Never base64 a\nfile into a tool parameter: large parameters are truncated in transit and\nthe file arrives corrupt (loudly for PNG, silently for JPEG -- Meta\nreturns a valid-looking image_hash for a damaged creative).\n\nIn a host that renders inline UI this puts a drop zone in the\nconversation. Everywhere else -- ChatGPT, API clients -- there is no box\nand the same payload carries a plain upload link in\n`say_to_user_no_widget`. Hand that over rather than telling the user you\ncannot accept files; asking them for a public URL instead is a dead end,\nbecause this tool is what produces one.\n\nSEVERAL FILES AT ONCE ARE FINE, and so is video (MP4/MOV alongside\nJPG/PNG/GIF/WebP). One drop zone takes a whole carousel, a set of\nvariants to choose between, or an image and a video of the same\ncreative. media_upload_result then returns `files`, `image_urls` and\n`video_urls` rather than a single url -- do not assume the first one is\nthe one they meant; ask if it is ambiguous.\n\nPASS `ad` WHENEVER THE USER MEANS A PARTICULAR AD, e.g. \"put this picture\non the retargeting ad\". The image then goes straight onto that ad the\nmoment they drop it, keeping its existing copy, link, page and CTA, and\nyou need no follow-up call at all. Use whatever the conversation has been\ncalling the ad -- its name, part of its name, or its ID. If several ads\nmatch, this returns them so you can ask which one; do not guess, since the\nwrong choice edits the wrong live ad.\n\nWithout `ad`, the file is just stored: call media_upload_result with the\nreturned upload_id to get its public URL.\n\nArgs:\n    purpose: Optional note shown to the user, e.g. \"creative for the\n        retargeting ad\". Helps them pick the right file.\n    ad: Optional. The ad this picture should land on -- name, partial\n        name, or ID.\n",
  "inputSchema": {
    "properties": {
      "purpose": {
        "default": "",
        "title": "Purpose",
        "type": "string"
      },
      "ad": {
        "default": "",
        "title": "Ad",
        "type": "string"
      }
    },
    "title": "media_upload_startArguments",
    "type": "object"
  },
  "outputSchema": {
    "additionalProperties": true,
    "title": "media_upload_startDictOutput",
    "type": "object"
  },
  "_meta": {
    "ui": {
      "resourceUri": "ui://mcp-ads/media-upload"
    }
  }
}
```

</details>

<a id="tool-creative_show_images-9fba4390"></a>

## creative_show_images

Handler: Other product (creative\_app.py): calls apps.tool, gallery\_payload.

```text
[RECOMMENDED] Show the user the images that were just generated.

CALL THIS RIGHT AFTER GENERATING CREATIVES, without being asked. Someone
asked for a picture; showing it is the point. The generation tools return
a generated_asset_id, which is for feeding Meta, not for looking at -- on
its own it leaves the user unable to see what was made.

In a host that renders inline UI this puts the images in the conversation
side by side, which is what makes them comparable. Everywhere else the
same payload carries the links in `say_to_user_no_widget`; pass those on.
Never tell the user their creatives cannot be shown.

Args:
    asset_ids: Optional. Specific generated_asset_id values, space or
        comma separated. Leave blank for the most recent images.
    limit: How many to show. Default 12.

```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/creative_app.py#L169-L192) · Schema: tools/list.

Exposure: Full and slim surfaces; alternate slim registration preserved below.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "asset_ids": {
      "default": "",
      "title": "Asset Ids",
      "type": "string"
    },
    "limit": {
      "default": 12,
      "title": "Limit",
      "type": "integer"
    }
  },
  "title": "creative_show_imagesArguments",
  "type": "object"
}
```

</details>

<details>
<summary>Alternate registration: Default slim surface</summary>

```json
{
  "exposure": "Default slim surface",
  "name": "creative_show_images",
  "title": "Show The Generated Images",
  "description": "[RECOMMENDED] Show the user the images that were just generated.\n\nCALL THIS RIGHT AFTER GENERATING CREATIVES, without being asked. Someone\nasked for a picture; showing it is the point. The generation tools return\na generated_asset_id, which is for feeding Meta, not for looking at -- on\nits own it leaves the user unable to see what was made.\n\nIn a host that renders inline UI this puts the images in the conversation\nside by side, which is what makes them comparable. Everywhere else the\nsame payload carries the links in `say_to_user_no_widget`; pass those on.\nNever tell the user their creatives cannot be shown.\n\nArgs:\n    asset_ids: Optional. Specific generated_asset_id values, space or\n        comma separated. Leave blank for the most recent images.\n    limit: How many to show. Default 12.\n",
  "inputSchema": {
    "properties": {
      "asset_ids": {
        "default": "",
        "title": "Asset Ids",
        "type": "string"
      },
      "limit": {
        "default": 12,
        "title": "Limit",
        "type": "integer"
      }
    },
    "title": "creative_show_imagesArguments",
    "type": "object"
  },
  "outputSchema": {
    "additionalProperties": true,
    "title": "creative_show_imagesDictOutput",
    "type": "object"
  },
  "_meta": {
    "ui": {
      "resourceUri": "ui://creative/gallery"
    }
  }
}
```

</details>

<a id="tool-competitor_ads_gallery-5f2f3af4"></a>

## competitor_ads_gallery

Handler: Other product (competitor\_ads\_app.py): calls apps.tool, competitor\_gallery\_payload.

```text
[RECOMMENDED] Show the user the ads a competitor is running.

CALL THIS WHEN SOMEONE ASKS WHAT A COMPETITOR IS ADVERTISING. Seeing the
creatives side by side is the answer; a list of archive links is not.
Looks up public ad archives only -- no account, connection or token of
the user's is involved, so this works even when they have connected
nothing at all.

In a host that renders inline UI the ads appear in the conversation as a
grid. Everywhere else the same payload carries the same ads and links in
`say_to_user_no_widget`; pass those on. Never tell the user their
competitor's ads cannot be shown.

Note on coverage: Google covers 180+ countries. Meta's API only returns
ordinary commercial ads for the EU and UK, so for a US or Israeli brand
the Meta half will be empty and the `notes` will say why -- pass that on
rather than implying the brand does not advertise on Facebook.

Args:
    brand: The competitor to look up, e.g. 'wix.com' or 'Booking.com'.
    platform: 'both' (default), 'google', or 'meta'.
    countries: Two-letter country codes, comma separated. Default 'US'.
        Use an EU country or 'GB' to get commercial ads from Meta.
    limit: How many ads to show. Default 12.

```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/competitor_ads_app.py#L260-L292) · Schema: tools/list.

Exposure: Full and slim surfaces; alternate slim registration preserved below.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "brand": {
      "default": "",
      "title": "Brand",
      "type": "string"
    },
    "platform": {
      "default": "both",
      "title": "Platform",
      "type": "string"
    },
    "countries": {
      "default": "US",
      "title": "Countries",
      "type": "string"
    },
    "limit": {
      "default": 12,
      "title": "Limit",
      "type": "integer"
    }
  },
  "title": "competitor_ads_galleryArguments",
  "type": "object"
}
```

</details>

<details>
<summary>Alternate registration: Default slim surface</summary>

```json
{
  "exposure": "Default slim surface",
  "name": "competitor_ads_gallery",
  "title": "Show Competitor Ads",
  "description": "[RECOMMENDED] Show the user the ads a competitor is running.\n\nCALL THIS WHEN SOMEONE ASKS WHAT A COMPETITOR IS ADVERTISING. Seeing the\ncreatives side by side is the answer; a list of archive links is not.\nLooks up public ad archives only -- no account, connection or token of\nthe user's is involved, so this works even when they have connected\nnothing at all.\n\nIn a host that renders inline UI the ads appear in the conversation as a\ngrid. Everywhere else the same payload carries the same ads and links in\n`say_to_user_no_widget`; pass those on. Never tell the user their\ncompetitor's ads cannot be shown.\n\nNote on coverage: Google covers 180+ countries. Meta's API only returns\nordinary commercial ads for the EU and UK, so for a US or Israeli brand\nthe Meta half will be empty and the `notes` will say why -- pass that on\nrather than implying the brand does not advertise on Facebook.\n\nArgs:\n    brand: The competitor to look up, e.g. 'wix.com' or 'Booking.com'.\n    platform: 'both' (default), 'google', or 'meta'.\n    countries: Two-letter country codes, comma separated. Default 'US'.\n        Use an EU country or 'GB' to get commercial ads from Meta.\n    limit: How many ads to show. Default 12.\n",
  "inputSchema": {
    "properties": {
      "brand": {
        "default": "",
        "title": "Brand",
        "type": "string"
      },
      "platform": {
        "default": "both",
        "title": "Platform",
        "type": "string"
      },
      "countries": {
        "default": "US",
        "title": "Countries",
        "type": "string"
      },
      "limit": {
        "default": 12,
        "title": "Limit",
        "type": "integer"
      }
    },
    "title": "competitor_ads_galleryArguments",
    "type": "object"
  },
  "outputSchema": {
    "additionalProperties": true,
    "title": "competitor_ads_galleryDictOutput",
    "type": "object"
  },
  "_meta": {
    "ui": {
      "resourceUri": "ui://competitor/ads"
    }
  }
}
```

</details>

<a id="tool-google_ads_list_customers-a146ddc9"></a>

## google_ads_list_customers

Handler: Other product (tools/google\_ads.py): calls mcp.tool, current\_user\_ctx.get, set, enumerate, current\_connection\_token\_ctx.get, GoogleAdsClient.load\_from\_dict, client.get\_service, customer\_service.list\_accessible\_customers.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. List every Google Ads account accessible to the authenticated user, expanding any accessible MCC (manager) account into its client accounts.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads.py#L177-L256) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "google_ads_list_customersArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_find_account-d7e73ae8"></a>

## google_ads_find_account

Handler: Other product (tools/google\_ads.py): calls mcp.tool, \_normalize\_customer\_id, GoogleAdsClient.load\_from\_dict, base\_client.get\_service, customer\_service.list\_accessible\_customers, managers\_to\_check.extend, \_client\_config, managers\_to\_check.append.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Find a Google Ads account across directly accessible accounts and MCC children. Use this first when a client account is missing or an error says CUSTOMER_NOT_FOUND. Args: target_customer_id: Optional client account ID to find, with or without dashes. manager_customer_id: Optional MCC/manager ID to search first, with or without dashes.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads.py#L259-L340) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "target_customer_id": {
      "default": "",
      "title": "Target Customer Id",
      "type": "string"
    },
    "manager_customer_id": {
      "default": "",
      "title": "Manager Customer Id",
      "type": "string"
    }
  },
  "title": "google_ads_find_accountArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_get_account_info-981b92fc"></a>

## google_ads_get_account_info

Handler: Other product (tools/google\_ads.py): calls mcp.tool, \_search.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Get basic information about a Google Ads account: name, currency, timezone, status. Args: customer_id: Google Ads customer ID (10 digits). Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads.py#L343-L364) · Schema: tools/list.

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
  "title": "google_ads_get_account_infoArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_account_overview-4fdde7e6"></a>

## google_ads_account_overview

Handler: Other product (tools/google\_ads.py): calls mcp.tool, \_date\_range, \_search, \_m, \_pct, float, round, max.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Get high-level account metrics: total spend, impressions, clicks, conversions, CTR, avg CPC, ROAS. Args: start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads.py#L367-L398) · Schema: tools/list.

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
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "google_ads_account_overviewArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_daily_trend-b0a66a29"></a>

## google_ads_daily_trend

Handler: Other product (tools/google\_ads.py): calls mcp.tool, \_date\_range, \_search, \_m, float.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Get day-by-day account performance: spend, impressions, clicks, conversions per day. Args: start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads.py#L401-L429) · Schema: tools/list.

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
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "google_ads_daily_trendArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_campaign_performance-3210fdfc"></a>

## google_ads_campaign_performance

Handler: Other product (tools/google\_ads.py): calls mcp.tool, \_date\_range, \_search, results.append, \_m, \_pct, float.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Get Google Ads campaign-level performance: spend, impressions, clicks, conversions, CTR per campaign. Args: start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. customer_id: Google Ads customer ID. Leave blank to use default. status_filter: ENABLED, PAUSED, REMOVED, or ALL. Default ENABLED. row_limit: Max campaigns. Default 25.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads.py#L432-L467) · Schema: tools/list.

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
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    },
    "status_filter": {
      "default": "ENABLED",
      "title": "Status Filter",
      "type": "string"
    },
    "row_limit": {
      "default": 25,
      "title": "Row Limit",
      "type": "integer"
    }
  },
  "title": "google_ads_campaign_performanceArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_adgroup_performance-34a6c0a3"></a>

## google_ads_adgroup_performance

Handler: Other product (tools/google\_ads.py): calls mcp.tool, \_date\_range, \_search, results.append, \_m, \_pct, float.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Get Google Ads ad group performance: spend, clicks, conversions for each ad group. Args: start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. customer_id: Google Ads customer ID. Leave blank to use default. campaign_id: Filter by campaign ID. Leave blank for all. row_limit: Max ad groups. Default 25.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads.py#L470-L504) · Schema: tools/list.

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
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    },
    "campaign_id": {
      "default": "",
      "title": "Campaign Id",
      "type": "string"
    },
    "row_limit": {
      "default": 25,
      "title": "Row Limit",
      "type": "integer"
    }
  },
  "title": "google_ads_adgroup_performanceArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_keyword_performance-ec64d05d"></a>

## google_ads_keyword_performance

Handler: Other product (tools/google\_ads.py): calls mcp.tool, \_date\_range, {'cost': 'metrics.cost\_micros', 'clicks': 'metrics.clicks', 'conversions': 'metrics.conversions'}.get, \_search, results.append, \_m, \_pct, float.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Get Google Ads keyword-level performance: clicks, impressions, spend, quality score, match type. Args: start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. customer_id: Google Ads customer ID. Leave blank to use default. campaign_id: Filter by campaign ID. Leave blank for all. row_limit: Max keywords. Default 50. sort_by: Sort by cost, clicks, or conversions. Default cost.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads.py#L507-L548) · Schema: tools/list.

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
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    },
    "campaign_id": {
      "default": "",
      "title": "Campaign Id",
      "type": "string"
    },
    "row_limit": {
      "default": 50,
      "title": "Row Limit",
      "type": "integer"
    },
    "sort_by": {
      "default": "cost",
      "title": "Sort By",
      "type": "string"
    }
  },
  "title": "google_ads_keyword_performanceArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_search_terms-2a11cf7a"></a>

## google_ads_search_terms

Handler: Other product (tools/google\_ads.py): calls mcp.tool, \_date\_range, \_search, results.append, \_pmax\_search\_term\_insights, \_m, \_pct, float.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Get Google Ads search terms — the actual queries that triggered ads. Covers Search/Shopping campaigns (exact queries, with spend) AND Performance Max campaigns (search *categories*, no spend — a Google API limitation). Args: start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. customer_id: Google Ads customer ID. Leave blank to use default. campaign_id: Filter by campaign ID. Leave blank for all. row_limit: Max terms. Default 50.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads.py#L607-L670) · Schema: tools/list.

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
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    },
    "campaign_id": {
      "default": "",
      "title": "Campaign Id",
      "type": "string"
    },
    "row_limit": {
      "default": 50,
      "title": "Row Limit",
      "type": "integer"
    }
  },
  "title": "google_ads_search_termsArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_ad_performance-04dc6c9f"></a>

## google_ads_ad_performance

Handler: Other product (tools/google\_ads.py): calls mcp.tool, \_date\_range, \_search, results.append, \_m, \_pct, float.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Get Google Ads individual ad performance: clicks, impressions, CTR, conversions per ad. Args: start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. customer_id: Google Ads customer ID. Leave blank to use default. campaign_id: Filter by campaign ID. Leave blank for all. row_limit: Max ads. Default 25.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads.py#L673-L709) · Schema: tools/list.

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
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    },
    "campaign_id": {
      "default": "",
      "title": "Campaign Id",
      "type": "string"
    },
    "row_limit": {
      "default": 25,
      "title": "Row Limit",
      "type": "integer"
    }
  },
  "title": "google_ads_ad_performanceArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_demographic_breakdown-72ed7e51"></a>

## google_ads_demographic_breakdown

Handler: Other product (tools/google\_ads.py): calls mcp.tool, \_date\_range, \_search, \_m, float, age\_agg.items, gender\_agg.items.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Get Google Ads performance broken down by age range and gender demographics. Args: start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. customer_id: Google Ads customer ID. Leave blank to use default. campaign_id: Filter by campaign ID. Leave blank for all.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads.py#L712-L765) · Schema: tools/list.

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
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    },
    "campaign_id": {
      "default": "",
      "title": "Campaign Id",
      "type": "string"
    }
  },
  "title": "google_ads_demographic_breakdownArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_geo_performance-f77dd8a6"></a>

## google_ads_geo_performance

Handler: Other product (tools/google\_ads.py): calls mcp.tool, \_date\_range, \_search, results.append, \_m, float, hasattr.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Get Google Ads performance broken down by geographic location. Args: start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. customer_id: Google Ads customer ID. Leave blank to use default. row_limit: Max locations. Default 25.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads.py#L768-L799) · Schema: tools/list.

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
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    },
    "row_limit": {
      "default": 25,
      "title": "Row Limit",
      "type": "integer"
    }
  },
  "title": "google_ads_geo_performanceArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_hourly_breakdown-05877d10"></a>

## google_ads_hourly_breakdown

Handler: Other product (tools/google\_ads.py): calls mcp.tool, \_date\_range, \_search, \_m, float, sorted, hourly.values.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Get Google Ads performance by hour of day to identify peak performing times. Args: start_date: Start date YYYY-MM-DD. Defaults to 7 days ago. end_date: End date YYYY-MM-DD. Defaults to today. customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads.py#L802-L832) · Schema: tools/list.

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
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "google_ads_hourly_breakdownArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_device_breakdown-82300c2e"></a>

## google_ads_device_breakdown

Handler: Other product (tools/google\_ads.py): calls mcp.tool, \_date\_range, \_search, \_m, float, devices.values.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Get Google Ads performance broken down by device type: desktop, mobile, tablet. Args: start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads.py#L835-L864) · Schema: tools/list.

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
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "google_ads_device_breakdownArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_shopping_performance-e6eb46ca"></a>

## google_ads_shopping_performance

Handler: Other product (tools/google\_ads.py): calls mcp.tool, \_date\_range, \_search, \_m, float, results.append, round, max.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Get Google Shopping campaign performance by product. Args: start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. customer_id: Google Ads customer ID. Leave blank to use default. row_limit: Max products. Default 25.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads.py#L867-L901) · Schema: tools/list.

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
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    },
    "row_limit": {
      "default": 25,
      "title": "Row Limit",
      "type": "integer"
    }
  },
  "title": "google_ads_shopping_performanceArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_display_performance-be0c3953"></a>

## google_ads_display_performance

Handler: Other product (tools/google\_ads.py): calls mcp.tool, \_date\_range, \_search, results.append, \_m, \_pct, float.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Get Google Display Network campaign performance. Args: start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. customer_id: Google Ads customer ID. Leave blank to use default. row_limit: Max campaigns. Default 25.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads.py#L904-L936) · Schema: tools/list.

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
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    },
    "row_limit": {
      "default": 25,
      "title": "Row Limit",
      "type": "integer"
    }
  },
  "title": "google_ads_display_performanceArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_video_performance-3e0ccb4d"></a>

## google_ads_video_performance

Handler: Other product (tools/google\_ads.py): calls mcp.tool, \_date\_range, \_search, results.append, \_m, \_pct, round, float.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Get Google Video (YouTube) campaign performance: views, view rate, CPV, conversions. Args: start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. customer_id: Google Ads customer ID. Leave blank to use default. row_limit: Max campaigns. Default 25.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads.py#L939-L970) · Schema: tools/list.

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
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    },
    "row_limit": {
      "default": 25,
      "title": "Row Limit",
      "type": "integer"
    }
  },
  "title": "google_ads_video_performanceArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_landing_page_performance-ffcb1599"></a>

## google_ads_landing_page_performance

Handler: Other product (tools/google\_ads.py): calls mcp.tool, \_date\_range, \_search, results.append, \_m, float, \_pct.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Get Google Ads landing page performance: clicks, conversions, mobile-friendliness, speed score. Args: start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. customer_id: Google Ads customer ID. Leave blank to use default. row_limit: Max landing pages. Default 25.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads.py#L973-L1005) · Schema: tools/list.

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
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    },
    "row_limit": {
      "default": 25,
      "title": "Row Limit",
      "type": "integer"
    }
  },
  "title": "google_ads_landing_page_performanceArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_audience_performance-df53f6c2"></a>

## google_ads_audience_performance

Handler: Other product (tools/google\_ads.py): calls mcp.tool, \_date\_range, \_search, results.append, \_m, float.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Get Google Ads performance for each audience segment or user list. Args: start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. customer_id: Google Ads customer ID. Leave blank to use default. row_limit: Max audiences. Default 25.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads.py#L1008-L1037) · Schema: tools/list.

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
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    },
    "row_limit": {
      "default": 25,
      "title": "Row Limit",
      "type": "integer"
    }
  },
  "title": "google_ads_audience_performanceArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_conversion_actions-a9051c9b"></a>

## google_ads_conversion_actions

Handler: Other product (tools/google\_ads.py): calls mcp.tool, \_search, results.append.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. List all conversion actions configured in the Google Ads account. Args: customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads.py#L1040-L1063) · Schema: tools/list.

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
  "title": "google_ads_conversion_actionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_budget_pacing-1615d162"></a>

## google_ads_budget_pacing

Handler: Other product (tools/google\_ads.py): calls mcp.tool, \_search, date.today, \_m, round, results.append, max.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Get budget pacing for all active campaigns — daily budget, amount spent, and percentage used. Args: customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads.py#L1066-L1089) · Schema: tools/list.

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
  "title": "google_ads_budget_pacingArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_auction_insights-df1aa6f8"></a>

## google_ads_auction_insights

Handler: Other product (tools/google\_ads.py): calls mcp.tool, \_date\_range, \_search, results.append, \_google\_ads\_hint, \_pct, \_m.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Get competitive pressure per campaign: impression share, and share lost to budget vs rank. Note: Google does not expose the Auction Insights report (competitor domains, overlap rate, outranking share) through the Ads API -- that data is available only in the Google Ads UI. This returns the impression-share metrics the API does provide, which answer the same underlying question: how much of the available auction you are winning, and whether you lose it to budget or rank. Args: start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. customer_id: Google Ads customer ID. Leave blank to use default. campaign_id: Filter by campaign ID. Leave blank for all.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads.py#L1092-L1155) · Schema: tools/list.

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
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    },
    "campaign_id": {
      "default": "",
      "title": "Campaign Id",
      "type": "string"
    }
  },
  "title": "google_ads_auction_insightsArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_change_history-292931e3"></a>

## google_ads_change_history

Handler: Other product (tools/google\_ads.py): calls mcp.tool, \_date\_range, \_search, results.append.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Get recent change history in the Google Ads account: what was changed, when, and by whom. Args: start_date: Start date YYYY-MM-DD. Defaults to 7 days ago. end_date: End date YYYY-MM-DD. Defaults to today. customer_id: Google Ads customer ID. Leave blank to use default. row_limit: Max changes. Default 25.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads.py#L1158-L1192) · Schema: tools/list.

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
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    },
    "row_limit": {
      "default": 25,
      "title": "Row Limit",
      "type": "integer"
    }
  },
  "title": "google_ads_change_historyArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_quality_score-61754eb8"></a>

## google_ads_quality_score

Handler: Other product (tools/google\_ads.py): calls mcp.tool, \_search, results.append.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Get quality scores for all keywords: overall score, landing page experience, expected CTR, ad relevance. Args: customer_id: Google Ads customer ID. Leave blank to use default. campaign_id: Filter by campaign ID. Leave blank for all. row_limit: Max keywords. Default 50.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads.py#L1195-L1230) · Schema: tools/list.

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
    "campaign_id": {
      "default": "",
      "title": "Campaign Id",
      "type": "string"
    },
    "row_limit": {
      "default": 50,
      "title": "Row Limit",
      "type": "integer"
    }
  },
  "title": "google_ads_quality_scoreArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_call_metrics-118f2b27"></a>

## google_ads_call_metrics

Handler: Other product (tools/google\_ads.py): calls mcp.tool, \_date\_range, \_search, results.append, \_pct.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Get Google Ads call extension metrics: calls, call conversions, average call duration. Args: start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads.py#L1233-L1262) · Schema: tools/list.

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
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "google_ads_call_metricsArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_extension_performance-8d0eeb1d"></a>

## google_ads_extension_performance

Handler: Other product (tools/google\_ads.py): calls mcp.tool, \_date\_range, \_search, results.append, \_m.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Get Google Ads ad extension performance: sitelinks, callouts, structured snippets. Args: start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads.py#L1265-L1292) · Schema: tools/list.

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
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "google_ads_extension_performanceArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_recommendations-93d67100"></a>

## google_ads_recommendations

Handler: Other product (tools/google\_ads.py): calls mcp.tool, \_search, results.append.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Get Google Ads optimization recommendations for the account. Args: customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads.py#L1295-L1316) · Schema: tools/list.

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
  "title": "google_ads_recommendationsArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_asset_report-eb599cdd"></a>

## google_ads_asset_report

Handler: Other product (tools/google\_ads.py): calls mcp.tool, \_date\_range, \_search, results.append.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Get Google Ads asset performance: clicks, impressions, performance rating for headlines/descriptions. Args: start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. customer_id: Google Ads customer ID. Leave blank to use default. row_limit: Max assets. Default 25.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads.py#L1319-L1350) · Schema: tools/list.

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
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    },
    "row_limit": {
      "default": 25,
      "title": "Row Limit",
      "type": "integer"
    }
  },
  "title": "google_ads_asset_reportArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_list_labels-dde01661"></a>

## google_ads_list_labels

Handler: Other product (tools/google\_ads.py): calls mcp.tool, \_search, results.append.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. List all labels defined in the Google Ads account. Args: customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads.py#L1353-L1374) · Schema: tools/list.

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
  "title": "google_ads_list_labelsArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_get_asset_group_performance-8a576754"></a>

## google_ads_get_asset_group_performance

Handler: Other product (tools/google\_ads.py): calls mcp.tool, \_date\_range, \_search, results.append, \_m, float.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Get performance for Performance Max asset groups. Args: start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. customer_id: Google Ads customer ID. Leave blank to use default. campaign_id: Filter by campaign ID. Leave blank for all.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads.py#L1377-L1407) · Schema: tools/list.

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
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    },
    "campaign_id": {
      "default": "",
      "title": "Campaign Id",
      "type": "string"
    }
  },
  "title": "google_ads_get_asset_group_performanceArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_create_budget-ea780806"></a>

## google_ads_create_budget

Handler: Other product (tools/google\_ads.py): calls mcp.tool, require\_editor, \_get\_client, client.get\_service, client.get\_type, service.mutate\_campaign\_budgets.

```text
[WRITE] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Create a new shared campaign budget in Google Ads. Args: name: Budget name (required). amount_per_day: Daily budget amount in the account's currency, e.g. 50.00 (required). delivery_method: STANDARD or ACCELERATED. Default STANDARD. customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads.py#L1414-L1437) · Schema: tools/list.

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
    "amount_per_day": {
      "title": "Amount Per Day",
      "type": "number"
    },
    "delivery_method": {
      "default": "STANDARD",
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
    "name",
    "amount_per_day"
  ],
  "title": "google_ads_create_budgetArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_create_campaign-60574a77"></a>

## google_ads_create_campaign

Handler: Other product (tools/google\_ads.py): calls mcp.tool, require\_editor, \_get\_client, client.get\_service, client.get\_type, service.mutate\_campaigns, budget\_id.startswith.

```text
[WRITE] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Create a new Google Ads campaign. Args: name: Campaign name (required). budget_id: Campaign budget resource name or ID (required). advertising_channel_type: SEARCH, DISPLAY, VIDEO, SHOPPING, or PERFORMANCE_MAX. Default SEARCH. status: ENABLED or PAUSED. Default PAUSED. bidding_strategy: MANUAL_CPC, TARGET_CPA, TARGET_ROAS, or MAXIMIZE_CONVERSIONS. Default MANUAL_CPC. target_cpa_micros: Required if bidding_strategy is TARGET_CPA (target cost-per-acquisition, in micros). target_roas: Required if bidding_strategy is TARGET_ROAS (target return-on-ad-spend, e.g. 3.5 = 350%). customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads.py#L1440-L1482) · Schema: tools/list.

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
    "budget_id": {
      "title": "Budget Id",
      "type": "string"
    },
    "advertising_channel_type": {
      "default": "SEARCH",
      "title": "Advertising Channel Type",
      "type": "string"
    },
    "status": {
      "default": "PAUSED",
      "title": "Status",
      "type": "string"
    },
    "bidding_strategy": {
      "default": "MANUAL_CPC",
      "title": "Bidding Strategy",
      "type": "string"
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
    "budget_id"
  ],
  "title": "google_ads_create_campaignArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_create_adgroup-1600da10"></a>

## google_ads_create_adgroup

Handler: Other product (tools/google\_ads.py): calls mcp.tool, require\_editor, \_get\_client, client.get\_service, client.get\_type, service.mutate\_ad\_groups.

```text
[WRITE] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Create a new ad group within a Google Ads campaign. Args: name: Ad group name (required). campaign_id: Parent campaign ID (required). cpc_bid_micros: Default CPC bid in micros, e.g. 1000000 for $1.00. Default 1000000. status: ENABLED or PAUSED. Default PAUSED. customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads.py#L1485-L1511) · Schema: tools/list.

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
    "cpc_bid_micros": {
      "default": 1000000,
      "title": "Cpc Bid Micros",
      "type": "integer"
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
    "name",
    "campaign_id"
  ],
  "title": "google_ads_create_adgroupArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_add_keywords-f92138d6"></a>

## google_ads_add_keywords

Handler: Other product (tools/google\_ads.py): calls mcp.tool, require\_editor, \_get\_client, json.loads, client.get\_service, service.mutate\_ad\_group\_criteria, client.get\_type, kw.get.

```text
[WRITE] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Add keywords to a Google Ads ad group. Args: adgroup_id: Ad group ID to add keywords to (required). keywords_json: JSON array of keyword objects, e.g. '[{"text": "running shoes", "match_type": "BROAD", "cpc_bid_micros": 800000}]' (required). campaign_id: Parent campaign ID (required). customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads.py#L1514-L1545) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "adgroup_id": {
      "title": "Adgroup Id",
      "type": "string"
    },
    "keywords_json": {
      "title": "Keywords Json",
      "type": "string"
    },
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
    "adgroup_id",
    "keywords_json",
    "campaign_id"
  ],
  "title": "google_ads_add_keywordsArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_add_negative_keywords-b45ea0a3"></a>

## google_ads_add_negative_keywords

Handler: Other product (tools/google\_ads.py): calls mcp.tool, require\_editor, \_get\_client, json.loads, client.get\_service, service.mutate\_campaign\_criteria, client.get\_type, operations.append.

```text
[WRITE] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Add negative keywords at the campaign level. Args: campaign_id: Campaign ID to add negative keywords to (required). keywords_json: JSON array, e.g. '[{"text": "free", "match_type": "BROAD"}]' (required). customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads.py#L1548-L1576) · Schema: tools/list.

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
    "keywords_json": {
      "title": "Keywords Json",
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
    "keywords_json"
  ],
  "title": "google_ads_add_negative_keywordsArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_update_campaign_status-8e856283"></a>

## google_ads_update_campaign_status

Handler: Other product (tools/google\_ads.py): calls mcp.tool, require\_editor, \_get\_client, client.get\_service, client.get\_type, operation.update\_mask.CopyFrom, service.mutate\_campaigns, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Update the status of a Google Ads campaign: enable, pause, or remove it. Args: campaign_id: Campaign ID to update (required). status: New status: ENABLED, PAUSED, or REMOVED (required). customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads.py#L1579-L1602) · Schema: tools/list.

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
    "campaign_id",
    "status"
  ],
  "title": "google_ads_update_campaign_statusArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_update_adgroup_status-c9941933"></a>

## google_ads_update_adgroup_status

Handler: Other product (tools/google\_ads.py): calls mcp.tool, require\_editor, \_get\_client, client.get\_service, client.get\_type, operation.update\_mask.CopyFrom, service.mutate\_ad\_groups, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Update the status of a Google Ads ad group. Args: adgroup_id: Ad group ID to update (required). campaign_id: Parent campaign ID (required). status: New status: ENABLED, PAUSED, or REMOVED (required). customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads.py#L1605-L1629) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "adgroup_id": {
      "title": "Adgroup Id",
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
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "adgroup_id",
    "campaign_id",
    "status"
  ],
  "title": "google_ads_update_adgroup_statusArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_update_keyword_status-0944abef"></a>

## google_ads_update_keyword_status

Handler: Other product (tools/google\_ads.py): calls mcp.tool, require\_editor, \_get\_client, client.get\_service, client.get\_type, operation.update\_mask.CopyFrom, service.mutate\_ad\_group\_criteria, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Update the status of a keyword in a Google Ads ad group. Args: adgroup_id: Ad group ID containing the keyword (required). criterion_id: Keyword criterion ID to update (required). status: New status: ENABLED, PAUSED, or REMOVED (required). customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads.py#L1632-L1656) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "adgroup_id": {
      "title": "Adgroup Id",
      "type": "string"
    },
    "criterion_id": {
      "title": "Criterion Id",
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
    "adgroup_id",
    "criterion_id",
    "status"
  ],
  "title": "google_ads_update_keyword_statusArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_update_keyword_bid-d1fdc374"></a>

## google_ads_update_keyword_bid

Handler: Other product (tools/google\_ads.py): calls mcp.tool, require\_editor, \_get\_client, client.get\_service, client.get\_type, operation.update\_mask.CopyFrom, service.mutate\_ad\_group\_criteria, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Update the CPC bid for a specific keyword in Google Ads. Args: adgroup_id: Ad group ID containing the keyword (required). criterion_id: Keyword criterion ID to update (required). cpc_bid_micros: New CPC bid in micros, e.g. 2000000 for $2.00 (required). customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads.py#L1659-L1683) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "adgroup_id": {
      "title": "Adgroup Id",
      "type": "string"
    },
    "criterion_id": {
      "title": "Criterion Id",
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
    "adgroup_id",
    "criterion_id",
    "cpc_bid_micros"
  ],
  "title": "google_ads_update_keyword_bidArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_update_campaign_budget-40a7bbf8"></a>

## google_ads_update_campaign_budget

Handler: Other product (tools/google\_ads.py): calls mcp.tool, require\_editor, \_get\_client, client.get\_service, client.get\_type, operation.update\_mask.CopyFrom, service.mutate\_campaign\_budgets, budget\_id.startswith.

```text
[WRITE] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Update the daily budget amount for a Google Ads campaign budget. Args: budget_id: Campaign budget ID to update (required). amount_per_day: New daily budget in the account's currency, e.g. 100.00 for $100 (required). customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads.py#L1686-L1709) · Schema: tools/list.

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
    "amount_per_day": {
      "title": "Amount Per Day",
      "type": "number"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "budget_id",
    "amount_per_day"
  ],
  "title": "google_ads_update_campaign_budgetArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_create_responsive_search_ad-1475ccb3"></a>

## google_ads_create_responsive_search_ad

Handler: Other product (tools/google\_ads.py): calls mcp.tool, require\_editor, \_get\_client, client.get\_service, client.get\_type, ad\_group\_ad.ad.final\_urls.append, service.mutate\_ad\_group\_ads, rsa.headlines.append.

```text
[WRITE] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Create a Responsive Search Ad (RSA) in a Google Ads ad group. Args: adgroup_id: Ad group ID to add the ad to (required). campaign_id: Parent campaign ID (required). final_url: The destination URL for the ad (required). headlines: List of 3–15 headline strings, max 30 characters each (required). descriptions: List of 2–4 description strings, max 90 characters each (required). path1: First URL display path, max 15 chars. Optional. path2: Second URL display path, max 15 chars. Optional. status: ENABLED or PAUSED. Default PAUSED. customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads.py#L1712-L1754) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "adgroup_id": {
      "title": "Adgroup Id",
      "type": "string"
    },
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "final_url": {
      "title": "Final Url",
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
    "adgroup_id",
    "campaign_id",
    "final_url",
    "headlines",
    "descriptions"
  ],
  "title": "google_ads_create_responsive_search_adArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_pause_all_campaigns-e58d3ac4"></a>

## google_ads_pause_all_campaigns

Handler: Other product (tools/google\_ads.py): calls mcp.tool, require\_editor, \_search, \_get\_client, client.get\_service, service.mutate\_campaigns, client.get\_type, op.update\_mask.CopyFrom.

```text
[WRITE] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Pause ALL active campaigns in the Google Ads account. Use with caution. Args: customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads.py#L1757-L1785) · Schema: tools/list.

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
  "title": "google_ads_pause_all_campaignsArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_enable_campaign-46c2cada"></a>

## google_ads_enable_campaign

Handler: Other product (tools/google\_ads.py): calls mcp.tool, require\_editor, \_get\_client, client.get\_service, client.get\_type, operation.update\_mask.CopyFrom, service.mutate\_campaigns, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Enable (un-pause) a specific Google Ads campaign. Args: campaign_id: Campaign ID to enable (required). customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads.py#L1788-L1810) · Schema: tools/list.

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
  "title": "google_ads_enable_campaignArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_apply_recommendation-ec746e00"></a>

## google_ads_apply_recommendation

Handler: Other product (tools/google\_ads.py): calls mcp.tool, require\_editor, \_get\_client, client.get\_service, client.get\_type, service.apply\_recommendation.

```text
[WRITE] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Apply a Google Ads optimization recommendation. Args: recommendation_resource_name: Full resource name of the recommendation (required). customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads.py#L1813-L1831) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "recommendation_resource_name": {
      "title": "Recommendation Resource Name",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "recommendation_resource_name"
  ],
  "title": "google_ads_apply_recommendationArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_dismiss_recommendation-44070a3a"></a>

## google_ads_dismiss_recommendation

Handler: Other product (tools/google\_ads.py): calls mcp.tool, require\_editor, \_get\_client, client.get\_service, service.dismiss\_recommendation.

```text
[WRITE] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Dismiss a Google Ads optimization recommendation. Args: recommendation_resource_name: Full resource name of the recommendation (required). customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads.py#L1834-L1853) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "recommendation_resource_name": {
      "title": "Recommendation Resource Name",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "recommendation_resource_name"
  ],
  "title": "google_ads_dismiss_recommendationArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_upload_image_asset-aa13125e"></a>

## google_ads_upload_image_asset

Handler: Other product (tools/google\_ads.py): calls mcp.tool, require\_editor, \_urllib\_request.Request, \_get\_client, client.get\_service, client.get\_type, asset\_svc.mutate\_assets, \_urllib\_request.urlopen.

```text
[WRITE][RECOMMENDED] Upload a public HTTPS image URL into Google Ads as an image asset. Use this before display/PMax/image-ad creation when the ad tool needs an asset_id or asset resource name. Do not pass local file paths; host the image publicly or use a supported generated/upload workflow first.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads.py#L1856-L1881) · Schema: tools/list.

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
    "asset_name": {
      "title": "Asset Name",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "image_url",
    "asset_name"
  ],
  "title": "google_ads_upload_image_assetArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_create_conversion_action-a13c8135"></a>

## google_ads_create_conversion_action

Handler: Other product (tools/google\_ads.py): calls mcp.tool, require\_editor, \_get\_client, client.get\_service, client.get\_type, svc.mutate\_conversion\_actions.

```text
[WRITE] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Create a new conversion action in Google Ads. Args: name: Conversion action name (required). type: Type such as WEBPAGE, PHONE_CALL, APP_INSTALL (required). category: Category such as PURCHASE, LEAD, SIGNUP (required). counting_type: ONE_PER_CLICK or MANY_PER_CLICK. Default ONE_PER_CLICK. value: Default conversion value. Default 0.0. currency_code: Currency code, e.g. USD. Default USD. customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads.py#L1884-L1913) · Schema: tools/list.

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
    "type": {
      "title": "Type",
      "type": "string"
    },
    "category": {
      "title": "Category",
      "type": "string"
    },
    "counting_type": {
      "default": "ONE_PER_CLICK",
      "title": "Counting Type",
      "type": "string"
    },
    "value": {
      "default": 0,
      "title": "Value",
      "type": "number"
    },
    "currency_code": {
      "default": "USD",
      "title": "Currency Code",
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
    "type",
    "category"
  ],
  "title": "google_ads_create_conversion_actionArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_update_conversion_action-97a6a8ec"></a>

## google_ads_update_conversion_action

Handler: Other product (tools/google\_ads.py): calls mcp.tool, require\_editor, \_get\_client, client.get\_service, client.get\_type, op.update\_mask.CopyFrom, svc.mutate\_conversion\_actions, paths.append.

```text
[WRITE] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Update an existing conversion action in Google Ads. Args: conversion_action_id: The conversion action ID to update (required). status: New status: ENABLED, REMOVED, or HIDDEN. Leave blank to keep unchanged. value: New default conversion value. Pass -1 to keep unchanged. counting_type: ONE_PER_CLICK or MANY_PER_CLICK. Leave blank to keep unchanged. attribution_model: Attribution model name. Leave blank to keep unchanged. customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads.py#L1916-L1953) · Schema: tools/list.

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
    "status": {
      "default": "",
      "title": "Status",
      "type": "string"
    },
    "value": {
      "default": -1,
      "title": "Value",
      "type": "number"
    },
    "counting_type": {
      "default": "",
      "title": "Counting Type",
      "type": "string"
    },
    "attribution_model": {
      "default": "",
      "title": "Attribution Model",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "conversion_action_id"
  ],
  "title": "google_ads_update_conversion_actionArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_create_sitelink_asset-fadebb53"></a>

## google_ads_create_sitelink_asset

Handler: Other product (tools/google\_ads.py): calls mcp.tool, require\_editor, \_get\_client, client.get\_service, client.get\_type, asset.final\_urls.append, asset\_svc.mutate\_assets, caa\_svc.mutate\_campaign\_assets.

```text
[WRITE] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Create a sitelink asset in Google Ads and optionally link it to a campaign. Args: link_text: Sitelink link text, max 25 chars (required). description_1: First description line, max 35 chars (required). description_2: Second description line, max 35 chars (required). final_url: Destination URL (required). campaign_id: Campaign to link the sitelink to. Leave blank for account-level. customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads.py#L1956-L1994) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "link_text": {
      "title": "Link Text",
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
    "final_url": {
      "title": "Final Url",
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
    "link_text",
    "description_1",
    "description_2",
    "final_url"
  ],
  "title": "google_ads_create_sitelink_assetArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_create_callout_asset-baba7808"></a>

## google_ads_create_callout_asset

Handler: Other product (tools/google\_ads.py): calls mcp.tool, require\_editor, \_get\_client, client.get\_service, client.get\_type, asset\_svc.mutate\_assets, caa\_svc.mutate\_campaign\_assets.

```text
[WRITE] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Create a callout asset and optionally link it to a specific campaign. Args: callout_text: Callout text, max 25 chars (required). campaign_id: Campaign to link the callout to. Leave blank for account-level. customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads.py#L1997-L2028) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "callout_text": {
      "title": "Callout Text",
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
    "callout_text"
  ],
  "title": "google_ads_create_callout_assetArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_create_video_ad-6876737d"></a>

## google_ads_create_video_ad

Handler: Other product (tools/google\_ads.py): calls mcp.tool, require\_editor, \_get\_client, client.get\_service, client.get\_type, asset\_svc.mutate\_assets, aga\_svc.mutate\_ad\_group\_ads, ad\_group\_ad.ad.final\_urls.append.

```text
[WRITE] Create a video ad from an existing YouTube video ID. This does not upload a raw video file to Google Ads. If the user has a video file, upload it to YouTube or use the platform's supported video asset flow first, then pass youtube_video_id here. Keep the ad/campaign PAUSED unless the user explicitly asks to launch.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads.py#L2031-L2086) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "adgroup_id": {
      "title": "Adgroup Id",
      "type": "string"
    },
    "youtube_video_id": {
      "title": "Youtube Video Id",
      "type": "string"
    },
    "format": {
      "title": "Format",
      "type": "string"
    },
    "final_url": {
      "title": "Final Url",
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
    "companion_banner_asset_id": {
      "default": "",
      "title": "Companion Banner Asset Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "adgroup_id",
    "youtube_video_id",
    "format",
    "final_url"
  ],
  "title": "google_ads_create_video_adArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_bulk_create_keywords-55048fb6"></a>

## google_ads_bulk_create_keywords

Handler: Other product (tools/google\_ads.py): calls mcp.tool, require\_editor, json.loads, \_get\_client, client.get\_service, service.mutate\_ad\_group\_criteria, client.get\_type, kw.get.

```text
[WRITE] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Bulk create keywords across multiple ad groups in a single API call. Args: keywords_json: JSON array of objects with adgroup_id, text, match_type, and optional cpc_bid_micros. Example: '[{"adgroup_id": "123", "text": "shoes", "match_type": "BROAD", "cpc_bid_micros": 500000}]' (required). customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads.py#L2089-L2118) · Schema: tools/list.

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
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "keywords_json"
  ],
  "title": "google_ads_bulk_create_keywordsArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_create_label-02b13d17"></a>

## google_ads_create_label

Handler: Other product (tools/google\_ads.py): calls mcp.tool, require\_editor, \_get\_client, client.get\_service, client.get\_type, svc.mutate\_labels.

```text
[WRITE] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Create a new label in Google Ads for organizing campaigns, ad groups, ads or keywords. Args: name: Label name (required). color: Background color as hex code, e.g. '#FF0000'. Default #000000. description: Optional label description. customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads.py#L2121-L2145) · Schema: tools/list.

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
    "color": {
      "default": "#000000",
      "title": "Color",
      "type": "string"
    },
    "description": {
      "default": "",
      "title": "Description",
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
  "title": "google_ads_create_labelArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_apply_label-d9697485"></a>

## google_ads_apply_label

Handler: Other product (tools/google\_ads.py): calls mcp.tool, require\_editor, \_get\_client, client.get\_service, client.get\_type, svc.mutate\_campaign\_labels, svc.mutate\_ad\_group\_labels, type\_map.keys.

```text
[WRITE] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Apply an existing label to a campaign, ad group, ad, or keyword. Args: label_id: The label ID to apply (required). entity_type: One of 'campaign', 'ad_group', 'ad', or 'keyword' (required). entity_id: The ID of the entity to label (required). customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads.py#L2148-L2184) · Schema: tools/list.

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
    "entity_type": {
      "title": "Entity Type",
      "type": "string"
    },
    "entity_id": {
      "title": "Entity Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "label_id",
    "entity_type",
    "entity_id"
  ],
  "title": "google_ads_apply_labelArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_create_responsive_display_ad-225ba210"></a>

## google_ads_create_responsive_display_ad

Handler: Other product (tools/google\_ads.py): calls mcp.tool, require\_editor, json.loads, \_get\_client, client.get\_service, client.get\_type, ad\_group\_ad.ad.final\_urls.append, asset\_svc.asset\_path.

```text
[WRITE] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Create a Responsive Display Ad in an existing ad group. Args: adgroup_id: The ad group ID (required). headlines: JSON array of headline strings, e.g. '["Headline 1", "Headline 2"]' (required). descriptions: JSON array of description strings (required). business_name: Business name shown in the ad, max 25 chars (required). final_url: Landing page URL (required). marketing_image_asset_id: Image asset ID from google_ads_upload_image_asset (required). logo_asset_id: Optional logo asset ID. customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads.py#L2187-L2235) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "adgroup_id": {
      "title": "Adgroup Id",
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
    "business_name": {
      "title": "Business Name",
      "type": "string"
    },
    "final_url": {
      "title": "Final Url",
      "type": "string"
    },
    "marketing_image_asset_id": {
      "title": "Marketing Image Asset Id",
      "type": "string"
    },
    "logo_asset_id": {
      "default": "",
      "title": "Logo Asset Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "adgroup_id",
    "headlines",
    "descriptions",
    "business_name",
    "final_url",
    "marketing_image_asset_id"
  ],
  "title": "google_ads_create_responsive_display_adArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_create_asset_group-e0ecc4f1"></a>

## google_ads_create_asset_group

Handler: Other product (tools/google\_ads.py): calls mcp.tool, require\_editor, json.loads, \_get\_client, client.get\_service, client.get\_service('CampaignService').campaign\_path, client.get\_type, ag.final\_urls.append.

```text
[WRITE] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Create an Asset Group inside an existing Performance Max campaign. Args: campaign_id: The PMax campaign ID (required). name: Asset group name (required). final_url: Landing page URL (required). business_name: Business name, max 25 chars (required). headlines: JSON array of headlines, min 3, max 15, each max 30 chars (required). long_headlines: JSON array of long headlines, min 1, max 5, each max 90 chars (required). descriptions: JSON array of descriptions, min 2, max 4, each max 90 chars (required). image_asset_ids: JSON array of image asset IDs (required). logo_asset_ids: JSON array of logo asset IDs. youtube_video_ids: JSON array of YouTube video IDs. customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads.py#L2238-L2314) · Schema: tools/list.

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
    "final_url": {
      "title": "Final Url",
      "type": "string"
    },
    "business_name": {
      "title": "Business Name",
      "type": "string"
    },
    "headlines": {
      "title": "Headlines",
      "type": "string"
    },
    "long_headlines": {
      "title": "Long Headlines",
      "type": "string"
    },
    "descriptions": {
      "title": "Descriptions",
      "type": "string"
    },
    "image_asset_ids": {
      "title": "Image Asset Ids",
      "type": "string"
    },
    "logo_asset_ids": {
      "default": "[]",
      "title": "Logo Asset Ids",
      "type": "string"
    },
    "youtube_video_ids": {
      "default": "[]",
      "title": "Youtube Video Ids",
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
    "name",
    "final_url",
    "business_name",
    "headlines",
    "long_headlines",
    "descriptions",
    "image_asset_ids"
  ],
  "title": "google_ads_create_asset_groupArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_keyword_ideas-3f6e20a0"></a>

## google_ads_keyword_ideas

Handler: Other product (tools/google\_ads\_advanced.py): calls mcp.tool, require\_editor, \_get\_client, client.get\_service, client.get\_type, request.geo\_target\_constants.append, request.keyword\_seed.keywords.extend, enumerate.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Generate keyword ideas using Google Ads Keyword Planner. Args: customer_id: Google Ads customer ID seed_keywords: Comma-separated seed keywords (e.g. 'running shoes,athletic footwear') language_id: Google language criterion ID (1000=English, 1005=Spanish) country_code: Two-letter ISO country code, e.g. 'US', 'IL', 'GB' (default: 'US'). A numeric geo target constant ID such as '2376' is also accepted. limit: Max keyword ideas to return (default: 50)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_advanced.py#L35-L81) · Schema: tools/list.

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
    "seed_keywords": {
      "title": "Seed Keywords",
      "type": "string"
    },
    "language_id": {
      "default": "1000",
      "title": "Language Id",
      "type": "string"
    },
    "country_code": {
      "default": "US",
      "title": "Country Code",
      "type": "string"
    },
    "limit": {
      "default": 50,
      "title": "Limit",
      "type": "integer"
    }
  },
  "required": [
    "customer_id",
    "seed_keywords"
  ],
  "title": "google_ads_keyword_ideasArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_keyword_forecast-b291ffc4"></a>

## google_ads_keyword_forecast

Handler: Other product (tools/google\_ads\_advanced.py): calls mcp.tool, require\_editor, \_get\_client, client.get\_service, client.get\_type, start.isoformat, (start + timedelta(days=max(forecast\_days, 1))).isoformat, campaign.language\_constants.append.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Forecast clicks, impressions, and cost for a list of keywords using Keyword Planner. Args: customer_id: Google Ads customer ID keywords: Comma-separated keywords to forecast average_cpc_micros: Target CPC in micros (1_000_000 = $1.00) language_id: Language criterion ID (1000=English) country_code: Two-letter ISO country code, e.g. 'US', 'IL', 'GB' (default: 'US'). A numeric geo target constant ID such as '2376' is also accepted. forecast_days: Length of the forecast window in days, starting tomorrow (default: 30). Keyword Planner only forecasts future periods, up to a year out.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_advanced.py#L88-L161) · Schema: tools/list.

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
    "keywords": {
      "title": "Keywords",
      "type": "string"
    },
    "average_cpc_micros": {
      "default": 1000000,
      "title": "Average Cpc Micros",
      "type": "integer"
    },
    "language_id": {
      "default": "1000",
      "title": "Language Id",
      "type": "string"
    },
    "country_code": {
      "default": "US",
      "title": "Country Code",
      "type": "string"
    },
    "forecast_days": {
      "default": 30,
      "title": "Forecast Days",
      "type": "integer"
    }
  },
  "required": [
    "customer_id",
    "keywords"
  ],
  "title": "google_ads_keyword_forecastArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_audience_segments-667fadc5"></a>

## google_ads_audience_segments

Handler: Other product (tools/google\_ads\_advanced.py): calls mcp.tool, \_get\_client, \_search, lists.append, hasattr.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. List audience segments available for targeting in this Google Ads account. Args: customer_id: Google Ads customer ID type_filter: 'user_list' | 'in_market' | 'affinity' | 'all' (default: 'all')
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_advanced.py#L168-L203) · Schema: tools/list.

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
    "type_filter": {
      "default": "all",
      "title": "Type Filter",
      "type": "string"
    }
  },
  "required": [
    "customer_id"
  ],
  "title": "google_ads_audience_segmentsArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_bid_modifiers-cff7c10a"></a>

## google_ads_bid_modifiers

Handler: Other product (tools/google\_ads\_advanced.py): calls mcp.tool, \_get\_client, \_search, modifiers.append, hasattr, cc.campaign.split.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. List all bid modifiers on campaigns (device, location, ad schedule, audience). Args: customer_id: Google Ads customer ID campaign_id: Filter to a specific campaign ID (leave empty for all)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_advanced.py#L210-L246) · Schema: tools/list.

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
    }
  },
  "required": [
    "customer_id"
  ],
  "title": "google_ads_bid_modifiersArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_update_bid_modifier-d84d22a0"></a>

## google_ads_update_bid_modifier

Handler: Other product (tools/google\_ads\_advanced.py): calls mcp.tool, require\_editor, \_get\_client, client.get\_service, client.get\_type, svc.campaign\_criterion\_path, float, op.update.CopyFrom.

```text
[WRITE] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Update a bid modifier on a campaign criterion. Args: customer_id: Google Ads customer ID campaign_id: Campaign ID criterion_id: Criterion resource ID or numeric ID new_bid_modifier: New bid modifier value (0.1 to 10.0; 0 = completely excluded)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_advanced.py#L253-L283) · Schema: tools/list.

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
    },
    "new_bid_modifier": {
      "title": "New Bid Modifier",
      "type": "number"
    }
  },
  "required": [
    "customer_id",
    "campaign_id",
    "criterion_id",
    "new_bid_modifier"
  ],
  "title": "google_ads_update_bid_modifierArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_performance_max_asset_groups-61344420"></a>

## google_ads_performance_max_asset_groups

Handler: Other product (tools/google\_ads\_advanced.py): calls mcp.tool, \_search, groups.append, hasattr, ag.campaign.split.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. List asset groups for Performance Max campaigns. Args: customer_id: Google Ads customer ID campaign_id: Optional: filter to a specific P-Max campaign ID
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_advanced.py#L290-L326) · Schema: tools/list.

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
    }
  },
  "required": [
    "customer_id"
  ],
  "title": "google_ads_performance_max_asset_groupsArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_create_performance_max-8c583a48"></a>

## google_ads_create_performance_max

Handler: Other product (tools/google\_ads\_advanced.py): calls mcp.tool, require\_editor, \_get\_client, client.get\_service, client.get\_type, budget\_svc.mutate\_campaign\_budgets, campaign\_svc.mutate\_campaigns, camp.maximize\_conversion\_value.CopyFrom.

```text
[WRITE] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Create a new Performance Max campaign with a target ROAS or target CPA bidding strategy. Args: customer_id: Google Ads customer ID campaign_name: Name for the new P-Max campaign budget_amount_micros: Daily budget in micros (e.g. 50_000_000 = $50/day) target_roas: Target ROAS as decimal (e.g. 3.0 = 300% ROAS). Mutually exclusive with target_cpa_micros. target_cpa_micros: Target CPA in micros (e.g. 20_000_000 = $20 CPA). Mutually exclusive with target_roas. final_url: Landing page URL for the campaign
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_advanced.py#L333-L393) · Schema: tools/list.

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
    "campaign_name": {
      "title": "Campaign Name",
      "type": "string"
    },
    "budget_amount_micros": {
      "title": "Budget Amount Micros",
      "type": "integer"
    },
    "target_roas": {
      "default": null,
      "title": "Target Roas",
      "type": "number"
    },
    "target_cpa_micros": {
      "default": null,
      "title": "Target Cpa Micros",
      "type": "integer"
    },
    "final_url": {
      "default": "",
      "title": "Final Url",
      "type": "string"
    }
  },
  "required": [
    "customer_id",
    "campaign_name",
    "budget_amount_micros"
  ],
  "title": "google_ads_create_performance_maxArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_ad_schedule_report-706701d0"></a>

## google_ads_ad_schedule_report

Handler: Other product (tools/google\_ads\_advanced.py): calls mcp.tool, date.today, \_search, (today - timedelta(days=30)).strftime, (today - timedelta(days=1)).strftime, schedule.append, round, timedelta.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Return performance metrics broken down by day of week and hour of day. Use this to identify optimal ad scheduling windows. Args: customer_id: Google Ads customer ID start_date: YYYY-MM-DD (default: last 30 days) end_date: YYYY-MM-DD (default: yesterday) campaign_id: Optional campaign ID filter
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_advanced.py#L400-L447) · Schema: tools/list.

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
    "campaign_id": {
      "default": "",
      "title": "Campaign Id",
      "type": "string"
    }
  },
  "required": [
    "customer_id"
  ],
  "title": "google_ads_ad_schedule_reportArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_experiments-5c3d962a"></a>

## google_ads_experiments

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_advanced.py): calls mcp.tool, \_search, experiments.append, hasattr.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. List A/B campaign experiments (formerly Campaign Drafts & Experiments). Args: customer_id: Google Ads customer ID status_filter: 'active' | 'ended' | 'all' (default: 'active')
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_advanced.py#L454-L494) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "customer_id": {
      "title": "Customer Id",
      "type": "string"
    },
    "status_filter": {
      "default": "active",
      "title": "Status Filter",
      "type": "string"
    }
  },
  "required": [
    "customer_id"
  ],
  "title": "google_ads_experimentsArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_smart_bidding_report-ec60fa68"></a>

## google_ads_smart_bidding_report

Handler: Other product (tools/google\_ads\_advanced.py): calls mcp.tool, date.today, \_search, (today - timedelta(days=30)).strftime, (today - timedelta(days=1)).strftime, round, campaigns.append, hasattr.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Return smart bidding strategy performance: tROAS, tCPA, and maximize conversion strategies. Shows actual vs target ROAS/CPA and learning status. Args: customer_id: Google Ads customer ID start_date: YYYY-MM-DD (default: last 30 days) end_date: YYYY-MM-DD (default: yesterday)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_advanced.py#L501-L567) · Schema: tools/list.

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
  "required": [
    "customer_id"
  ],
  "title": "google_ads_smart_bidding_reportArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_shopping_product_groups-47d3536d"></a>

## google_ads_shopping_product_groups

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_advanced.py): calls mcp.tool, date.today, \_search, (today - timedelta(days=30)).strftime, (today - timedelta(days=1)).strftime, groups.append, round, timedelta.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Return shopping product groups (listing groups) with performance metrics. Args: customer_id: Google Ads customer ID campaign_id: Optional Shopping campaign ID to filter start_date: YYYY-MM-DD (default: 30 days ago) end_date: YYYY-MM-DD (default: yesterday)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_advanced.py#L574-L633) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

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
  "required": [
    "customer_id"
  ],
  "title": "google_ads_shopping_product_groupsArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_dynamic_search_targets-b534adef"></a>

## google_ads_dynamic_search_targets

Handler: Other product (tools/google\_ads\_advanced.py): calls mcp.tool, \_search, targets.append, round, hasattr.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. List dynamic search ad (DSA) targets — webpage conditions targeting specific page categories or URLs. Args: customer_id: Google Ads customer ID campaign_id: Optional DSA campaign ID to filter
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_advanced.py#L640-L686) · Schema: tools/list.

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
    }
  },
  "required": [
    "customer_id"
  ],
  "title": "google_ads_dynamic_search_targetsArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_brand_safety_exclusions-dd9abf08"></a>

## google_ads_brand_safety_exclusions

Handler: Other product (tools/google\_ads\_advanced.py): calls mcp.tool, \_search, exclusions.append, hasattr.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. List brand safety placement exclusions at account or campaign level. Args: customer_id: Google Ads customer ID level: 'account' (customer-level exclusions) or 'campaign' (campaign-level)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_advanced.py#L693-L750) · Schema: tools/list.

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
    "level": {
      "default": "account",
      "title": "Level",
      "type": "string"
    }
  },
  "required": [
    "customer_id"
  ],
  "title": "google_ads_brand_safety_exclusionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_add_placement_exclusion-72759ab9"></a>

## google_ads_add_placement_exclusion

Handler: Other product (tools/google\_ads\_advanced.py): calls mcp.tool, require\_editor, \_get\_client, client.get\_service, client.get\_type, client.get\_service('CampaignService').campaign\_path, svc.mutate\_campaign\_criteria, svc.mutate\_customer\_negative\_criteria.

```text
[WRITE] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Add a placement URL exclusion for brand safety (at account or campaign level). Args: customer_id: Google Ads customer ID placement_url: URL to exclude (e.g. 'www.example.com') campaign_id: If provided, adds exclusion to that campaign only. If empty, adds to account level.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_advanced.py#L757-L789) · Schema: tools/list.

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
    "placement_url": {
      "title": "Placement Url",
      "type": "string"
    },
    "campaign_id": {
      "default": "",
      "title": "Campaign Id",
      "type": "string"
    }
  },
  "required": [
    "customer_id",
    "placement_url"
  ],
  "title": "google_ads_add_placement_exclusionArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_attribution_paths-9ddece35"></a>

## google_ads_attribution_paths

Handler: Other product (tools/google\_ads\_advanced.py): calls mcp.tool, date.today, \_search, (today - timedelta(days=30)).strftime, (today - timedelta(days=1)).strftime, paths.append, hasattr, round.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Return top-of-funnel and cross-channel attribution paths showing which campaigns assist vs. close conversions. Args: customer_id: Google Ads customer ID start_date: YYYY-MM-DD (default: 30 days ago) end_date: YYYY-MM-DD (default: yesterday) limit: Max path rows (default: 50)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_advanced.py#L796-L846) · Schema: tools/list.

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
    "customer_id"
  ],
  "title": "google_ads_attribution_pathsArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_update_rsa-aa7c0db6"></a>

## google_ads_update_rsa

Handler: Other product (tools/google\_ads\_conversions.py): calls mcp.tool, require\_editor, \_get\_client, client.get\_service, client.get\_type, operation.update\_mask.CopyFrom, service.mutate\_ad\_group\_ads, paths.append.

```text
[WRITE] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Replace headlines and/or descriptions of an existing Responsive Search Ad (RSA). Replaces the entire headlines or descriptions list. To add a single asset without removing existing ones, use google_ads_add_rsa_asset instead. Args: ad_id: ID of the ad to update (required). ad_group_id: Ad group ID that contains the ad (required). headlines: New list of headline strings (3–15 items, max 30 chars each). Replaces all existing. descriptions: New list of description strings (2–4 items, max 90 chars each). Replaces all existing. customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_conversions.py#L28-L84) · Schema: tools/list.

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
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_id",
    "ad_group_id"
  ],
  "title": "google_ads_update_rsaArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_add_rsa_asset-7c241b48"></a>

## google_ads_add_rsa_asset

Handler: Other product (tools/google\_ads\_conversions.py): calls mcp.tool, require\_editor, \_search, \_get\_client, client.get\_service, client.get\_type, service.mutate\_ad\_group\_ads, operation.update\_mask.CopyFrom.

```text
[WRITE] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Add a single headline or description to an existing RSA without removing existing assets. Fetches the current assets, appends the new one, and writes back the full list. Args: ad_id: ID of the ad to update (required). ad_group_id: Ad group ID that contains the ad (required). asset_type: "headline" or "description" (required). text: Text of the new asset. Headlines max 30 chars, descriptions max 90 chars. customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_conversions.py#L87-L158) · Schema: tools/list.

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
    "asset_type": {
      "title": "Asset Type",
      "type": "string"
    },
    "text": {
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
    "ad_id",
    "ad_group_id",
    "asset_type",
    "text"
  ],
  "title": "google_ads_add_rsa_assetArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_get_account_conversion_id-d13fc6af"></a>

## google_ads_get_account_conversion_id

Handler: Other product (tools/google\_ads\_conversions.py): calls mcp.tool, \_search.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Get the Google Ads conversion tracking tag ID (AW-XXXXXXXXX) for the account. Returns the numeric conversion tracking ID used in gtag snippets. Required for building the send_to parameter: 'AW-{id}/{label}'. Args: customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_conversions.py#L165-L196) · Schema: tools/list.

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
  "title": "google_ads_get_account_conversion_idArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_get_conversion_tag_snippet-69d92af6"></a>

## google_ads_get_conversion_tag_snippet

Handler: Other product (tools/google\_ads\_conversions.py): calls mcp.tool, \_search, all\_snippets.append, re.search, match.group.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Get the complete gtag snippet for a specific conversion action. Returns the global_site_tag (for <head>), event_snippet (fires on conversion), and the ready-to-use AW-XXXXXXXX/LABEL send_to string. Args: conversion_action_id: The numeric conversion action ID. customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_conversions.py#L199-L270) · Schema: tools/list.

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
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "conversion_action_id"
  ],
  "title": "google_ads_get_conversion_tag_snippetArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_list_conversion_actions_full-c1633cab"></a>

## google_ads_list_conversion_actions_full

Handler: Other product (tools/google\_ads\_conversions.py): calls mcp.tool, \_search, results.append, re.search, match.group.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. List all conversion actions with full details including the AW-XXXXXXXX/LABEL send_to string ready for gtag injection. Args: include_paused: Include PAUSED actions (not just ENABLED). Default False. customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_conversions.py#L273-L328) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "include_paused": {
      "default": false,
      "title": "Include Paused",
      "type": "boolean"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "google_ads_list_conversion_actions_fullArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_conversion_performance_by_action-58955274"></a>

## google_ads_conversion_performance_by_action

Handler: Other product (tools/google\_ads\_conversions.py): calls mcp.tool, \_search, date.today, results.append, timedelta, round, float, \_m.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Get conversion performance metrics broken down by individual conversion action. Args: days: Number of days to look back (default 30). customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_conversions.py#L331-L377) · Schema: tools/list.

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
  "title": "google_ads_conversion_performance_by_actionArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_conversion_setup_complete-3bdf2eb7"></a>

## google_ads_conversion_setup_complete

Handler: Other product (tools/google\_ads\_conversions.py): calls mcp.tool, require\_editor, \_get\_client, \_search, client.get\_service, client.get\_type, getattr, svc.mutate\_conversion\_actions.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. One-shot: Create a conversion action and return complete ready-to-use JS snippets. Creates the conversion action, fetches its tag snippets, and returns: - The AW-XXXXXXXX/LABEL send_to string - JS snippet for form submit tracking (replace selector placeholder) - JS snippet for thank-you page tracking (replace URL placeholder) Args: name: Conversion action name (e.g. 'Lead Form Submission'). category: LEAD | PURCHASE | SIGNUP | PAGE_VIEW | DEFAULT value: Optional fixed conversion value. Use 0 for no fixed value. currency_code: Currency code (default USD). customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_conversions.py#L380-L488) · Schema: tools/list.

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
    "category": {
      "default": "LEAD",
      "title": "Category",
      "type": "string"
    },
    "value": {
      "default": 0,
      "title": "Value",
      "type": "number"
    },
    "currency_code": {
      "default": "USD",
      "title": "Currency Code",
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
  "title": "google_ads_conversion_setup_completeArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_create_ecommerce_conversion_actions-bde2d693"></a>

## google_ads_create_ecommerce_conversion_actions

Handler: Other product (tools/google\_ads\_conversions.py): calls mcp.tool, require\_editor, \_get\_client, \_search, client.get\_service, svc.mutate\_conversion\_actions, enumerate, client.get\_type.

```text
[WRITE] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Create the three standard ecommerce conversion actions in one call: Purchase, Add to Cart, Begin Checkout. Returns the ID and send_to for each action — ready for tracking implementation. Args: purchase_name: Name for the purchase conversion action. add_to_cart_name: Name for the add-to-cart conversion action. begin_checkout_name: Name for the begin-checkout conversion action. currency_code: Currency code (default USD). customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_conversions.py#L491-L580) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "purchase_name": {
      "default": "Purchase",
      "title": "Purchase Name",
      "type": "string"
    },
    "add_to_cart_name": {
      "default": "Add to Cart",
      "title": "Add To Cart Name",
      "type": "string"
    },
    "begin_checkout_name": {
      "default": "Begin Checkout",
      "title": "Begin Checkout Name",
      "type": "string"
    },
    "currency_code": {
      "default": "USD",
      "title": "Currency Code",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "google_ads_create_ecommerce_conversion_actionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_check_auto_tagging-525bdf32"></a>

## google_ads_check_auto_tagging

Handler: Other product (tools/google\_ads\_conversions.py): calls mcp.tool, \_search.

```text
[READ] Google Ads tool. Prefer the actions marked RECOMMENDED for everyday Google Ads workflows. Check if Google Ads auto-tagging is enabled (required for GA4 attribution). Auto-tagging appends the GCLID parameter to URLs so GA4 can attribute sessions back to Google Ads clicks. Args: customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_conversions.py#L583-L616) · Schema: tools/list.

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
  "title": "google_ads_check_auto_taggingArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_customers-4ef4abdc"></a>

## gads_list_customers

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, current\_user\_ctx.get, set, provider().list\_connections, client.get\_service, customer\_service.list\_accessible\_customers, current\_connection\_token\_ctx.get, seen.add.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List all Google Ads customer accounts accessible to the authenticated user.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L185-L222) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "gads_list_customersArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_account_info-6b9cadf0"></a>

## gads_get_account_info

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get basic information about a Google Ads account: name, currency, timezone, status. Args: customer_id: Google Ads customer ID (10 digits). Leave blank to use GOOGLE_ADS_CUSTOMER_ID.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L225-L251) · Schema: tools/list.

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
  "title": "gads_get_account_infoArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_account_overview-01cb10b9"></a>

## gads_account_overview

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_date\_range, \_search, \_m, \_pct, float, round, max.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get high-level account metrics: total spend, impressions, clicks, conversions, CTR, avg CPC, ROAS. Args: start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L254-L293) · Schema: tools/list.

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
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_account_overviewArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_campaign_performance-6f83598a"></a>

## gads_campaign_performance

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_date\_range, \_search, results.append, \_m, \_pct, float.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get Google Ads campaign-level performance: spend, impressions, clicks, conversions, CTR per campaign. Args: start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. customer_id: Google Ads customer ID. Leave blank to use default. status_filter: Filter by campaign status: ENABLED, PAUSED, REMOVED, or ALL. Default ENABLED. row_limit: Max campaigns. Default 25.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L296-L345) · Schema: tools/list.

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
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    },
    "status_filter": {
      "default": "ENABLED",
      "title": "Status Filter",
      "type": "string"
    },
    "row_limit": {
      "default": 25,
      "title": "Row Limit",
      "type": "integer"
    }
  },
  "title": "gads_campaign_performanceArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_adgroup_performance-535c5dff"></a>

## gads_adgroup_performance

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_date\_range, \_search, results.append, \_m, \_pct, float.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get Google Ads ad group performance: spend, clicks, conversions for each ad group. Args: start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. customer_id: Google Ads customer ID. Leave blank to use default. campaign_id: Filter by campaign ID. Leave blank for all. row_limit: Max ad groups. Default 25.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L348-L397) · Schema: tools/list.

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
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    },
    "campaign_id": {
      "default": "",
      "title": "Campaign Id",
      "type": "string"
    },
    "row_limit": {
      "default": 25,
      "title": "Row Limit",
      "type": "integer"
    }
  },
  "title": "gads_adgroup_performanceArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_keyword_performance-fe540610"></a>

## gads_keyword_performance

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_date\_range, {'cost': 'metrics.cost\_micros', 'clicks': 'metrics.clicks', 'conversions': 'metrics.conversions'}.get, \_search, results.append, \_m, \_pct, float.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get Google Ads keyword-level performance: clicks, impressions, spend, quality score, match type. Args: start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. customer_id: Google Ads customer ID. Leave blank to use default. campaign_id: Filter by campaign ID. Leave blank for all. row_limit: Max keywords. Default 50. sort_by: Sort by cost, clicks, or conversions. Default cost.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L400-L458) · Schema: tools/list.

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
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    },
    "campaign_id": {
      "default": "",
      "title": "Campaign Id",
      "type": "string"
    },
    "row_limit": {
      "default": 50,
      "title": "Row Limit",
      "type": "integer"
    },
    "sort_by": {
      "default": "cost",
      "title": "Sort By",
      "type": "string"
    }
  },
  "title": "gads_keyword_performanceArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_search_terms-23806ad9"></a>

## gads_search_terms

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_date\_range, \_search, results.append, \_m, \_pct, float.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get Google Ads search terms report — the actual queries that triggered ads, with clicks and conversions. Args: start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. customer_id: Google Ads customer ID. Leave blank to use default. campaign_id: Filter by campaign ID. Leave blank for all. row_limit: Max terms. Default 50.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L461-L510) · Schema: tools/list.

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
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    },
    "campaign_id": {
      "default": "",
      "title": "Campaign Id",
      "type": "string"
    },
    "row_limit": {
      "default": 50,
      "title": "Row Limit",
      "type": "integer"
    }
  },
  "title": "gads_search_termsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_ad_performance-9abfa5b6"></a>

## gads_ad_performance

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_date\_range, \_search, results.append, \_m, \_pct, float.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get Google Ads individual ad performance: clicks, impressions, CTR, conversions per ad. Args: start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. customer_id: Google Ads customer ID. Leave blank to use default. campaign_id: Filter by campaign ID. Leave blank for all. row_limit: Max ads. Default 25.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L513-L564) · Schema: tools/list.

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
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    },
    "campaign_id": {
      "default": "",
      "title": "Campaign Id",
      "type": "string"
    },
    "row_limit": {
      "default": 25,
      "title": "Row Limit",
      "type": "integer"
    }
  },
  "title": "gads_ad_performanceArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_demographic_breakdown-6e22a86b"></a>

## gads_demographic_breakdown

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_date\_range, \_search, \_m, float, age\_agg.items, gender\_agg.items.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get Google Ads performance broken down by age range and gender demographics. Args: start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. customer_id: Google Ads customer ID. Leave blank to use default. campaign_id: Filter by campaign ID. Leave blank for all.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L567-L632) · Schema: tools/list.

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
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    },
    "campaign_id": {
      "default": "",
      "title": "Campaign Id",
      "type": "string"
    }
  },
  "title": "gads_demographic_breakdownArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_geo_performance-7873c356"></a>

## gads_geo_performance

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_date\_range, \_search, results.append, \_m, float.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get Google Ads performance broken down by geographic location (country/region/city). Args: start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. customer_id: Google Ads customer ID. Leave blank to use default. row_limit: Max locations. Default 25.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L635-L674) · Schema: tools/list.

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
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    },
    "row_limit": {
      "default": 25,
      "title": "Row Limit",
      "type": "integer"
    }
  },
  "title": "gads_geo_performanceArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_hourly_breakdown-e2eef2ff"></a>

## gads_hourly_breakdown

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_date\_range, \_search, \_m, float, sorted, hourly.values.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get Google Ads performance by hour of day to identify peak performing times. Args: start_date: Start date YYYY-MM-DD. Defaults to 7 days ago. end_date: End date YYYY-MM-DD. Defaults to today. customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L677-L710) · Schema: tools/list.

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
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_hourly_breakdownArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_device_breakdown-2e602a1b"></a>

## gads_device_breakdown

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_date\_range, \_search, \_m, float, devices.values.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get Google Ads performance broken down by device type: desktop, mobile, tablet. Args: start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L713-L747) · Schema: tools/list.

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
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_device_breakdownArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_shopping_performance-fbd0d159"></a>

## gads_shopping_performance

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_date\_range, \_search, \_m, float, results.append, round, max.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get Google Shopping campaign performance by product: clicks, impressions, spend, ROAS. Args: start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. customer_id: Google Ads customer ID. Leave blank to use default. row_limit: Max products. Default 25.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L750-L795) · Schema: tools/list.

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
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    },
    "row_limit": {
      "default": 25,
      "title": "Row Limit",
      "type": "integer"
    }
  },
  "title": "gads_shopping_performanceArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_display_performance-8d08b70f"></a>

## gads_display_performance

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_date\_range, \_search, results.append, \_m, \_pct, float.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get Google Display Network campaign performance: impressions, clicks, viewable rate, conversions. Args: start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. customer_id: Google Ads customer ID. Leave blank to use default. row_limit: Max campaigns. Default 25.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L798-L842) · Schema: tools/list.

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
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    },
    "row_limit": {
      "default": 25,
      "title": "Row Limit",
      "type": "integer"
    }
  },
  "title": "gads_display_performanceArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_video_performance-4cd9d39e"></a>

## gads_video_performance

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_date\_range, \_search, results.append, \_m, \_pct, round, float.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get Google Video (YouTube) campaign performance: views, view rate, CPV, conversions. Args: start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. customer_id: Google Ads customer ID. Leave blank to use default. row_limit: Max campaigns. Default 25.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L845-L887) · Schema: tools/list.

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
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    },
    "row_limit": {
      "default": 25,
      "title": "Row Limit",
      "type": "integer"
    }
  },
  "title": "gads_video_performanceArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_landing_page_performance-96043905"></a>

## gads_landing_page_performance

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_date\_range, \_search, results.append, \_m, float, \_pct.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get Google Ads landing page performance: clicks, conversions, mobile-friendliness, speed score. Args: start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. customer_id: Google Ads customer ID. Leave blank to use default. row_limit: Max landing pages. Default 25.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L890-L932) · Schema: tools/list.

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
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    },
    "row_limit": {
      "default": 25,
      "title": "Row Limit",
      "type": "integer"
    }
  },
  "title": "gads_landing_page_performanceArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_audience_performance-56aaac50"></a>

## gads_audience_performance

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_date\_range, \_search, results.append, \_m, float.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get Google Ads performance for each audience segment or user list. Args: start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. customer_id: Google Ads customer ID. Leave blank to use default. row_limit: Max audiences. Default 25.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L935-L973) · Schema: tools/list.

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
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    },
    "row_limit": {
      "default": 25,
      "title": "Row Limit",
      "type": "integer"
    }
  },
  "title": "gads_audience_performanceArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_conversion_actions-f01b107f"></a>

## gads_conversion_actions

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, results.append.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List all conversion actions configured in the Google Ads account. Args: customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L976-L1003) · Schema: tools/list.

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
  "title": "gads_conversion_actionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_budget_pacing-ce46f664"></a>

## gads_budget_pacing

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, date.today, \_m, round, results.append, max.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get budget pacing for all active campaigns — daily budget, amount spent, and percentage used. Args: customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L1006-L1036) · Schema: tools/list.

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
  "title": "gads_budget_pacingArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_auction_insights-c4d68c99"></a>

## gads_auction_insights

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_date\_range, \_search, results.append, \_pct.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get Google Ads auction insights: impression share, overlap rate, outranking share vs competitors. Args: start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. customer_id: Google Ads customer ID. Leave blank to use default. campaign_id: Filter by campaign ID. Leave blank for all.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L1039-L1080) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Hidden from slim list_actions and refused by slim dispatch; remains registered on full surface.

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
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    },
    "campaign_id": {
      "default": "",
      "title": "Campaign Id",
      "type": "string"
    }
  },
  "title": "gads_auction_insightsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_change_history-1523a119"></a>

## gads_change_history

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_date\_range, \_search, results.append.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get recent change history in the Google Ads account: what was changed, when, and by whom. Args: start_date: Start date YYYY-MM-DD. Defaults to 7 days ago. end_date: End date YYYY-MM-DD. Defaults to today. customer_id: Google Ads customer ID. Leave blank to use default. row_limit: Max changes. Default 25.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L1083-L1127) · Schema: tools/list.

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
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    },
    "row_limit": {
      "default": 25,
      "title": "Row Limit",
      "type": "integer"
    }
  },
  "title": "gads_change_historyArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_quality_score-53deb743"></a>

## gads_quality_score

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, results.append.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get quality scores for all keywords: overall score, landing page experience, expected CTR, ad relevance. Args: customer_id: Google Ads customer ID. Leave blank to use default. campaign_id: Filter by campaign ID. Leave blank for all. row_limit: Max keywords. Default 50.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L1130-L1175) · Schema: tools/list.

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
    "campaign_id": {
      "default": "",
      "title": "Campaign Id",
      "type": "string"
    },
    "row_limit": {
      "default": 50,
      "title": "Row Limit",
      "type": "integer"
    }
  },
  "title": "gads_quality_scoreArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_call_metrics-7ddc8860"></a>

## gads_call_metrics

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_date\_range, \_search, results.append, \_pct.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get Google Ads call extension metrics: calls, call conversions, average call duration. Args: start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L1178-L1212) · Schema: tools/list.

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
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_call_metricsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_extension_performance-04cc209e"></a>

## gads_extension_performance

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_date\_range, \_search, results.append, \_m.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get Google Ads ad extension performance: sitelinks, callouts, structured snippets. Args: start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L1215-L1249) · Schema: tools/list.

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
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_extension_performanceArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_recommendations-b4ec9e78"></a>

## gads_recommendations

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, results.append.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get Google Ads optimization recommendations for the account. Args: customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L1252-L1275) · Schema: tools/list.

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
  "title": "gads_recommendationsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_asset_report-0af0665e"></a>

## gads_asset_report

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_date\_range, \_search, results.append.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get Google Ads asset performance (headlines and descriptions for responsive ads): clicks, impressions, performance rating. Args: start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. customer_id: Google Ads customer ID. Leave blank to use default. row_limit: Max assets. Default 25.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L1278-L1320) · Schema: tools/list.

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
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    },
    "row_limit": {
      "default": 25,
      "title": "Row Limit",
      "type": "integer"
    }
  },
  "title": "gads_asset_reportArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_labels-42c00635"></a>

## gads_list_labels

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, results.append.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List all labels defined in the Google Ads account. Args: customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L1323-L1346) · Schema: tools/list.

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
  "title": "gads_list_labelsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_budget-e9b08eac"></a>

## gads_create_budget

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, service.mutate\_campaign\_budgets.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a new shared campaign budget in Google Ads. Args: name: Budget name (required). amount_per_day: Daily budget amount in the account's currency, e.g. 50.00 for $50 (required). delivery_method: STANDARD or ACCELERATED. Default STANDARD. customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L1353-L1379) · Schema: tools/list.

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
    "amount_per_day": {
      "title": "Amount Per Day",
      "type": "number"
    },
    "delivery_method": {
      "default": "STANDARD",
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
    "name",
    "amount_per_day"
  ],
  "title": "gads_create_budgetArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_campaign-c5c026ef"></a>

## gads_create_campaign

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, service.mutate\_campaigns, budget\_id.startswith.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a new Google Ads campaign. Args: name: Campaign name (required). budget_id: Campaign budget resource name or ID, e.g. '1234567890' (required). advertising_channel_type: SEARCH, DISPLAY, VIDEO, SHOPPING, or PERFORMANCE_MAX. Default SEARCH. status: ENABLED or PAUSED. Default PAUSED. bidding_strategy: MANUAL_CPC, TARGET_CPA, TARGET_ROAS, or MAXIMIZE_CONVERSIONS. Default MANUAL_CPC. target_cpa_micros: Required if bidding_strategy is TARGET_CPA (target cost-per-acquisition, in micros). target_roas: Required if bidding_strategy is TARGET_ROAS (target return-on-ad-spend, e.g. 3.5 = 350%). customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L1382-L1431) · Schema: tools/list.

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
    "budget_id": {
      "title": "Budget Id",
      "type": "string"
    },
    "advertising_channel_type": {
      "default": "SEARCH",
      "title": "Advertising Channel Type",
      "type": "string"
    },
    "status": {
      "default": "PAUSED",
      "title": "Status",
      "type": "string"
    },
    "bidding_strategy": {
      "default": "MANUAL_CPC",
      "title": "Bidding Strategy",
      "type": "string"
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
    "budget_id"
  ],
  "title": "gads_create_campaignArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_adgroup-0dc69dd3"></a>

## gads_create_adgroup

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, service.mutate\_ad\_groups.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a new ad group within a Google Ads campaign. Args: name: Ad group name (required). campaign_id: Parent campaign ID (required). cpc_bid_micros: Default CPC bid in micros, e.g. 1000000 for $1.00. Default 1000000. status: ENABLED or PAUSED. Default PAUSED. customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L1434-L1464) · Schema: tools/list.

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
    "cpc_bid_micros": {
      "default": 1000000,
      "title": "Cpc Bid Micros",
      "type": "integer"
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
    "name",
    "campaign_id"
  ],
  "title": "gads_create_adgroupArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_add_keywords-3f27521b"></a>

## gads_add_keywords

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, json.loads, client.get\_service, service.mutate\_ad\_group\_criteria, client.get\_type, kw.get, operations.append.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Add keywords to a Google Ads ad group. Args: adgroup_id: Ad group ID to add keywords to (required). keywords_json: JSON array of keyword objects, e.g. '[{"text": "running shoes", "match_type": "BROAD", "cpc_bid_micros": 800000}]' (required). match_type options: BROAD, PHRASE, EXACT. campaign_id: Parent campaign ID (required). customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L1467-L1502) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "adgroup_id": {
      "title": "Adgroup Id",
      "type": "string"
    },
    "keywords_json": {
      "title": "Keywords Json",
      "type": "string"
    },
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
    "adgroup_id",
    "keywords_json",
    "campaign_id"
  ],
  "title": "gads_add_keywordsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_add_negative_keywords-0f281eeb"></a>

## gads_add_negative_keywords

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, json.loads, client.get\_service, service.mutate\_campaign\_criteria, client.get\_type, operations.append, kw.get.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Add negative keywords at the campaign level to exclude irrelevant traffic. Args: campaign_id: Campaign ID to add negative keywords to (required). keywords_json: JSON array of objects, e.g. '[{"text": "free", "match_type": "BROAD"}, {"text": "cheap shoes", "match_type": "EXACT"}]' (required). customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L1505-L1535) · Schema: tools/list.

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
    "keywords_json": {
      "title": "Keywords Json",
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
    "keywords_json"
  ],
  "title": "gads_add_negative_keywordsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_update_campaign_status-57b42159"></a>

## gads_update_campaign_status

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, operation.update\_mask.CopyFrom, service.mutate\_campaigns, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Update the status of a Google Ads campaign: enable, pause, or remove it. Args: campaign_id: Campaign ID to update (required). status: New status: ENABLED, PAUSED, or REMOVED (required). customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L1538-L1563) · Schema: tools/list.

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
    "campaign_id",
    "status"
  ],
  "title": "gads_update_campaign_statusArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_update_campaign_name-8d4fdaeb"></a>

## gads_update_campaign_name

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, operation.update\_mask.CopyFrom, service.mutate\_campaigns, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Rename a Google Ads campaign. Args: campaign_id: Campaign ID to rename (required). new_name: The new campaign name (required). customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L1566-L1591) · Schema: tools/list.

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
  "title": "gads_update_campaign_nameArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_update_adgroup_status-0c8be67b"></a>

## gads_update_adgroup_status

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, operation.update\_mask.CopyFrom, service.mutate\_ad\_groups, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Update the status of a Google Ads ad group: enable, pause, or remove it. Args: adgroup_id: Ad group ID to update (required). campaign_id: Parent campaign ID (required). status: New status: ENABLED, PAUSED, or REMOVED (required). customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L1594-L1621) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "adgroup_id": {
      "title": "Adgroup Id",
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
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "adgroup_id",
    "campaign_id",
    "status"
  ],
  "title": "gads_update_adgroup_statusArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_update_keyword_status-19654c18"></a>

## gads_update_keyword_status

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, operation.update\_mask.CopyFrom, service.mutate\_ad\_group\_criteria, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Update the status of a keyword in a Google Ads ad group. Args: adgroup_id: Ad group ID containing the keyword (required). criterion_id: Keyword criterion ID to update (required). status: New status: ENABLED, PAUSED, or REMOVED (required). customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L1624-L1651) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "adgroup_id": {
      "title": "Adgroup Id",
      "type": "string"
    },
    "criterion_id": {
      "title": "Criterion Id",
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
    "adgroup_id",
    "criterion_id",
    "status"
  ],
  "title": "gads_update_keyword_statusArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_update_keyword_bid-6d76f227"></a>

## gads_update_keyword_bid

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, operation.update\_mask.CopyFrom, service.mutate\_ad\_group\_criteria, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Update the CPC bid for a specific keyword in Google Ads. Args: adgroup_id: Ad group ID containing the keyword (required). criterion_id: Keyword criterion ID to update (required). cpc_bid_micros: New CPC bid in micros, e.g. 2000000 for $2.00 (required). customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L1654-L1681) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "adgroup_id": {
      "title": "Adgroup Id",
      "type": "string"
    },
    "criterion_id": {
      "title": "Criterion Id",
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
    "adgroup_id",
    "criterion_id",
    "cpc_bid_micros"
  ],
  "title": "gads_update_keyword_bidArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_update_campaign_budget-f5ed7b9d"></a>

## gads_update_campaign_budget

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, operation.update\_mask.CopyFrom, service.mutate\_campaign\_budgets, budget\_id.startswith, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Update the daily budget amount for a Google Ads campaign budget. Args: budget_id: Campaign budget ID to update (required). amount_per_day: New daily budget in the account's currency, e.g. 100.00 for $100 (required). customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L1684-L1709) · Schema: tools/list.

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
    "amount_per_day": {
      "title": "Amount Per Day",
      "type": "number"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "budget_id",
    "amount_per_day"
  ],
  "title": "gads_update_campaign_budgetArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_responsive_search_ad-f4873363"></a>

## gads_create_responsive_search_ad

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, ad\_group\_ad.ad.final\_urls.append, service.mutate\_ad\_group\_ads, rsa.headlines.append, rsa.descriptions.append.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a Responsive Search Ad (RSA) in a Google Ads ad group. Args: adgroup_id: Ad group ID to add the ad to (required). campaign_id: Parent campaign ID (required). final_url: The destination URL for the ad (required). headlines: List of 3–15 headline strings, max 30 characters each (required). descriptions: List of 2–4 description strings, max 90 characters each (required). path1: First URL display path, max 15 chars. Optional. path2: Second URL display path, max 15 chars. Optional. status: ENABLED or PAUSED. Default PAUSED. customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L1712-L1762) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "adgroup_id": {
      "title": "Adgroup Id",
      "type": "string"
    },
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "final_url": {
      "title": "Final Url",
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
    "adgroup_id",
    "campaign_id",
    "final_url",
    "headlines",
    "descriptions"
  ],
  "title": "gads_create_responsive_search_adArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_update_rsa-6b6b052a"></a>

## gads_update_rsa

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, operation.update\_mask.CopyFrom, service.mutate\_ad\_group\_ads, paths.append, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Replace headlines and/or descriptions of an existing Responsive Search Ad (RSA). Replaces the entire headlines or descriptions list. To add a single asset without removing existing ones, use gads_add_rsa_asset instead. Args: ad_id: ID of the ad to update (required). ad_group_id: Ad group ID that contains the ad (required). headlines: New list of headline strings (3–15 items, max 30 chars each). Replaces all existing headlines. descriptions: New list of description strings (2–4 items, max 90 chars each). Replaces all existing descriptions. customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L1765-L1820) · Schema: tools/list.

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
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "ad_id",
    "ad_group_id"
  ],
  "title": "gads_update_rsaArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_add_rsa_asset-1f16f1ac"></a>

## gads_add_rsa_asset

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_get\_client, client.get\_service, client.get\_type, service.mutate\_ad\_group\_ads, operation.update\_mask.CopyFrom, rsa.headlines.append.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Add a single headline or description to an existing RSA without removing existing assets. Fetches the current assets, appends the new one, and writes back the full list. Args: ad_id: ID of the ad to update (required). ad_group_id: Ad group ID that contains the ad (required). asset_type: "headline" or "description" (required). text: Text of the new asset (required). Headlines max 30 chars, descriptions max 90 chars. customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L1823-L1893) · Schema: tools/list.

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
    "asset_type": {
      "title": "Asset Type",
      "type": "string"
    },
    "text": {
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
    "ad_id",
    "ad_group_id",
    "asset_type",
    "text"
  ],
  "title": "gads_add_rsa_assetArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_pause_all_campaigns-ac30ded2"></a>

## gads_pause_all_campaigns

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_get\_client, client.get\_service, service.mutate\_campaigns, client.get\_type, operation.update\_mask.CopyFrom, operations.append.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Pause ALL active campaigns in the Google Ads account. Use with caution — this will pause all spending. Args: customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L1896-L1924) · Schema: tools/list.

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
  "title": "gads_pause_all_campaignsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_enable_campaign-15095a58"></a>

## gads_enable_campaign

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, operation.update\_mask.CopyFrom, service.mutate\_campaigns, field\_mask\_pb2.FieldMask.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Enable (un-pause) a specific Google Ads campaign. Args: campaign_id: Campaign ID to enable (required). customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L1927-L1950) · Schema: tools/list.

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
  "title": "gads_enable_campaignArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_apply_recommendation-4d32dc23"></a>

## gads_apply_recommendation

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, service.apply\_recommendation.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Apply a Google Ads optimization recommendation. Args: recommendation_resource_name: Full resource name of the recommendation, e.g. 'customers/123/recommendations/456' (required). customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L1953-L1972) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "recommendation_resource_name": {
      "title": "Recommendation Resource Name",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "recommendation_resource_name"
  ],
  "title": "gads_apply_recommendationArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_dismiss_recommendation-bd1d45ac"></a>

## gads_dismiss_recommendation

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type('DismissRecommendationRequest').Operations, service.dismiss\_recommendation, client.get\_type.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Dismiss a Google Ads optimization recommendation so it no longer appears. Args: recommendation_resource_name: Full resource name of the recommendation, e.g. 'customers/123/recommendations/456' (required). customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L1975-L1997) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "recommendation_resource_name": {
      "title": "Recommendation Resource Name",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "recommendation_resource_name"
  ],
  "title": "gads_dismiss_recommendationArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_upload_image_asset-a1a635b3"></a>

## gads_upload_image_asset

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_urllib\_request.Request, \_get\_client, client.get\_service, client.get\_type, asset\_svc.mutate\_assets, \_urllib\_request.urlopen, resp.read.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Upload a public image URL as a Google Ads Image Asset. Args: image_url: Public HTTPS URL of the image to upload. asset_name: Display name for the asset. customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L2007-L2034) · Schema: tools/list.

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
    "asset_name": {
      "title": "Asset Name",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "image_url",
    "asset_name"
  ],
  "title": "gads_upload_image_assetArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_responsive_display_ad-1df10e77"></a>

## gads_create_responsive_display_ad

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, json.loads, \_get\_client, client.get\_service, client.get\_type, client.get\_service('AdGroupService').ad\_group\_path, ad\_group\_ad.ad.final\_urls.append, asset\_svc.asset\_path.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a Responsive Display Ad in an existing ad group. Args: adgroup_id: The ad group ID. headlines: JSON array of headline strings (min 1, max 5, each ≤30 chars). descriptions: JSON array of description strings (min 1, max 5, each ≤90 chars). business_name: Business name shown in the ad (≤25 chars). final_url: Landing page URL. marketing_image_asset_id: Image asset ID from gads_upload_image_asset. logo_asset_id: Optional logo asset ID. customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L2037-L2092) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "adgroup_id": {
      "title": "Adgroup Id",
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
    "business_name": {
      "title": "Business Name",
      "type": "string"
    },
    "final_url": {
      "title": "Final Url",
      "type": "string"
    },
    "marketing_image_asset_id": {
      "title": "Marketing Image Asset Id",
      "type": "string"
    },
    "logo_asset_id": {
      "default": "",
      "title": "Logo Asset Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "adgroup_id",
    "headlines",
    "descriptions",
    "business_name",
    "final_url",
    "marketing_image_asset_id"
  ],
  "title": "gads_create_responsive_display_adArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_asset_group-034597a5"></a>

## gads_create_asset_group

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, json.loads, \_get\_client, client.get\_service, client.get\_service('CampaignService').campaign\_path, client.get\_type, ag.final\_urls.append, ag\_svc.mutate\_asset\_groups.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create an Asset Group inside an existing Performance Max campaign. Args: campaign_id: The PMax campaign ID. name: Asset group name. final_url: Landing page URL. business_name: Business name (≤25 chars). headlines: JSON array of headlines (min 3, max 15, each ≤30 chars). long_headlines: JSON array of long headlines (min 1, max 5, each ≤90 chars). descriptions: JSON array of descriptions (min 2, max 4, each ≤90 chars). image_asset_ids: JSON array of image asset IDs (at least 1 required). logo_asset_ids: JSON array of logo asset IDs (optional). youtube_video_ids: JSON array of YouTube video IDs (optional). customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L2095-L2187) · Schema: tools/list.

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
    "final_url": {
      "title": "Final Url",
      "type": "string"
    },
    "business_name": {
      "title": "Business Name",
      "type": "string"
    },
    "headlines": {
      "title": "Headlines",
      "type": "string"
    },
    "long_headlines": {
      "title": "Long Headlines",
      "type": "string"
    },
    "descriptions": {
      "title": "Descriptions",
      "type": "string"
    },
    "image_asset_ids": {
      "title": "Image Asset Ids",
      "type": "string"
    },
    "logo_asset_ids": {
      "default": "[]",
      "title": "Logo Asset Ids",
      "type": "string"
    },
    "youtube_video_ids": {
      "default": "[]",
      "title": "Youtube Video Ids",
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
    "name",
    "final_url",
    "business_name",
    "headlines",
    "long_headlines",
    "descriptions",
    "image_asset_ids"
  ],
  "title": "gads_create_asset_groupArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_asset_group_performance-defa9483"></a>

## gads_get_asset_group_performance

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, (date.today() - timedelta(days=30)).strftime, date.today().strftime, where\_clauses.append, results.append, ' AND '.join, date.today.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get performance metrics for Asset Groups in Performance Max campaigns. Args: campaign_id: Optional PMax campaign ID to filter results. start_date: Start date YYYY-MM-DD. Defaults to 30 days ago. end_date: End date YYYY-MM-DD. Defaults to today. customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L2190-L2236) · Schema: tools/list.

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
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_get_asset_group_performanceArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_conversion_action-fd453496"></a>

## gads_create_conversion_action

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, getattr, svc.mutate\_conversion\_actions, rn.split.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a new Conversion Action in the Google Ads account. Args: name: Display name for the conversion action. type: WEBPAGE | PHONE_CALL | APP_ANDROID | APP_IOS | IMPORT category: PURCHASE | LEAD | SIGNUP | PAGE_VIEW | DEFAULT counting_type: ONE_PER_CLICK | MANY_PER_CLICK value: Optional fixed conversion value in account currency. currency_code: Currency code, default ILS. customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L2239-L2280) · Schema: tools/list.

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
    "type": {
      "title": "Type",
      "type": "string"
    },
    "category": {
      "title": "Category",
      "type": "string"
    },
    "counting_type": {
      "title": "Counting Type",
      "type": "string"
    },
    "value": {
      "default": 0,
      "title": "Value",
      "type": "number"
    },
    "currency_code": {
      "default": "ILS",
      "title": "Currency Code",
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
    "type",
    "category",
    "counting_type"
  ],
  "title": "gads_create_conversion_actionArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_account_conversion_id-81bc7732"></a>

## gads_get_account_conversion_id

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get the Google Ads conversion tracking tag ID (AW-XXXXXXXXX) for the account. Returns the numeric conversion tracking ID used in gtag snippets. Required for building the send_to parameter: 'AW-{id}/{label}'. Args: customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L2283-L2315) · Schema: tools/list.

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
  "title": "gads_get_account_conversion_idArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_conversion_tag_snippet-14408de4"></a>

## gads_get_conversion_tag_snippet

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, all\_snippets.append, re.search, match.group.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get the complete gtag snippet for a specific conversion action. Returns the global_site_tag (for <head>), event_snippet (fires on conversion), and the ready-to-use AW-XXXXXXXX/LABEL send_to string for WordPress injection. Args: conversion_action_id: The numeric conversion action ID. customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L2318-L2390) · Schema: tools/list.

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
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "conversion_action_id"
  ],
  "title": "gads_get_conversion_tag_snippetArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_list_conversion_actions_full-8ab35dab"></a>

## gads_list_conversion_actions_full

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, results.append, re.search, match.group.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. List all conversion actions with full details: type, category, value, attribution model, and the AW-XXXXXXXX/LABEL send_to string ready for gtag injection. Args: include_paused: Include PAUSED actions (not just ENABLED). Default False. customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L2393-L2452) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "include_paused": {
      "default": false,
      "title": "Include Paused",
      "type": "boolean"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_list_conversion_actions_fullArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_conversion_performance_by_action-1cf0e1e9"></a>

## gads_conversion_performance_by_action

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, date.today, results.append, timedelta, round, float, \_m.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get conversion performance metrics broken down by individual conversion action. Args: days: Number of days to look back (default 30). customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L2455-L2501) · Schema: tools/list.

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
  "title": "gads_conversion_performance_by_actionArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_conversion_setup_complete-06c9507b"></a>

## gads_conversion_setup_complete

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, \_search, client.get\_service, client.get\_type, getattr, svc.mutate\_conversion\_actions, rn.split.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. One-shot: Create a conversion action in Google Ads and return the complete ready-to-use JavaScript snippets for WordPress form and page-based tracking. Creates the conversion action, fetches its tag snippets, and outputs: - The AW-XXXXXXXX/LABEL send_to string - JS snippet for form submit tracking (replace selector placeholder) - JS snippet for thank-you page tracking (replace URL placeholder) Args: name: Conversion action name (e.g. 'Lead Form Submission'). category: LEAD | PURCHASE | SIGNUP | PAGE_VIEW | DEFAULT value: Optional fixed conversion value. Use 0 for no fixed value. currency_code: Currency code, default ILS. customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L2504-L2619) · Schema: tools/list.

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
    "category": {
      "default": "LEAD",
      "title": "Category",
      "type": "string"
    },
    "value": {
      "default": 0,
      "title": "Value",
      "type": "number"
    },
    "currency_code": {
      "default": "ILS",
      "title": "Currency Code",
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
  "title": "gads_conversion_setup_completeArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_ecommerce_conversion_actions-8537338f"></a>

## gads_create_ecommerce_conversion_actions

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, \_search, client.get\_service, svc.mutate\_conversion\_actions, enumerate, client.get\_type, getattr.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create the three standard WooCommerce/ecommerce conversion actions in one call: Purchase (PURCHASE), Add to Cart (ADD_TO_CART), Begin Checkout (BEGIN_CHECKOUT). Returns the ID and send_to for each action — ready for WordPress injection. Args: purchase_name: Name for the purchase conversion action. add_to_cart_name: Name for the add-to-cart conversion action. begin_checkout_name: Name for the begin-checkout conversion action. currency_code: Currency code, default ILS. customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L2622-L2715) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "purchase_name": {
      "default": "Purchase",
      "title": "Purchase Name",
      "type": "string"
    },
    "add_to_cart_name": {
      "default": "Add to Cart",
      "title": "Add To Cart Name",
      "type": "string"
    },
    "begin_checkout_name": {
      "default": "Begin Checkout",
      "title": "Begin Checkout Name",
      "type": "string"
    },
    "currency_code": {
      "default": "ILS",
      "title": "Currency Code",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "title": "gads_create_ecommerce_conversion_actionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_check_auto_tagging-983a7c48"></a>

## gads_check_auto_tagging

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Check if Google Ads auto-tagging is enabled (required for GA4 attribution). Auto-tagging appends the GCLID parameter to URLs so GA4 can attribute sessions back to Google Ads clicks. Args: customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L2718-L2748) · Schema: tools/list.

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
  "title": "gads_check_auto_taggingArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_sitelink_asset-53caa97a"></a>

## gads_create_sitelink_asset

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, sl.final\_urls.append, asset\_svc.mutate\_assets, client.get\_service('CampaignService').campaign\_path, ca\_svc.mutate\_campaign\_assets.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a Sitelink asset and optionally attach it to a campaign. Args: link_text: Sitelink anchor text (≤25 chars). description_1: First description line (≤35 chars). description_2: Second description line (≤35 chars). final_url: URL the sitelink points to. campaign_id: If provided, attach the sitelink to this campaign. customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L2751-L2791) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "link_text": {
      "title": "Link Text",
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
    "final_url": {
      "title": "Final Url",
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
    "link_text",
    "description_1",
    "description_2",
    "final_url"
  ],
  "title": "gads_create_sitelink_assetArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_callout_asset-9a2337ac"></a>

## gads_create_callout_asset

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, asset\_svc.mutate\_assets, client.get\_service('CampaignService').campaign\_path, ca\_svc.mutate\_campaign\_assets, rn.split.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a Callout extension asset and optionally attach to a campaign. Args: callout_text: Callout text (≤25 chars). campaign_id: If provided, attach the callout to this campaign. customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L2794-L2824) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "callout_text": {
      "title": "Callout Text",
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
    "callout_text"
  ],
  "title": "gads_create_callout_assetArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_video_ad-90f84542"></a>

## gads_create_video_ad

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, asset\_svc.mutate\_assets, client.get\_service('AdGroupService').ad\_group\_path, ad.final\_urls.append, aga\_svc.mutate\_ad\_group\_ads.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a YouTube video ad in an ad group. Args: adgroup_id: The ad group ID. youtube_video_id: 11-character YouTube video ID (from watch?v=...). format: IN_STREAM_VIDEO | IN_FEED_VIDEO | BUMPER_AD | OUT_STREAM final_url: Landing page URL. headline: Headline text (required for IN_FEED_VIDEO). description: Description text. companion_banner_asset_id: Optional companion banner asset ID. customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L2827-L2899) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "adgroup_id": {
      "title": "Adgroup Id",
      "type": "string"
    },
    "youtube_video_id": {
      "title": "Youtube Video Id",
      "type": "string"
    },
    "format": {
      "title": "Format",
      "type": "string"
    },
    "final_url": {
      "title": "Final Url",
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
    "companion_banner_asset_id": {
      "default": "",
      "title": "Companion Banner Asset Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "adgroup_id",
    "youtube_video_id",
    "format",
    "final_url"
  ],
  "title": "gads_create_video_adArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_bulk_create_keywords-ae4088b4"></a>

## gads_bulk_create_keywords

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, json.loads, \_get\_client, client.get\_service, enumerate, svc.mutate\_ad\_group\_criteria, errors.append, client.get\_type.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create multiple keywords in a single batch API call (up to 10,000). Args: keywords_json: JSON array of objects, each with: adgroup_id (str), text (str), match_type (BROAD|PHRASE|EXACT), cpc_bid_micros (int, optional). customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L2902-L2951) · Schema: tools/list.

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
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "keywords_json"
  ],
  "title": "gads_bulk_create_keywordsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_label-ebd7a3a7"></a>

## gads_create_label

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, svc.mutate\_labels, rn.split.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Create a new Label in the Google Ads account. Args: name: Label display name. color: HEX color string e.g. '#FF0000' (optional). description: Label description (optional). customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L2954-L2983) · Schema: tools/list.

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
    "color": {
      "default": "",
      "title": "Color",
      "type": "string"
    },
    "description": {
      "default": "",
      "title": "Description",
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
  "title": "gads_create_labelArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_apply_label-0715f112"></a>

## gads_apply_label

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service('LabelService').label\_path, client.get\_service, client.get\_type, client.get\_service('CampaignService').campaign\_path, svc.mutate\_campaign\_labels, client.get\_service('AdGroupService').ad\_group\_path.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Apply a Label to a campaign, ad group, keyword, or ad. Args: label_id: The label ID (from gads_create_label or gads_list_labels). entity_type: CAMPAIGN | AD_GROUP | KEYWORD | AD entity_id: The entity ID. For KEYWORD use 'adgroup_id/criterion_id'. For AD use 'adgroup_id/ad_id'. customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L2986-L3038) · Schema: tools/list.

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
    "entity_type": {
      "title": "Entity Type",
      "type": "string"
    },
    "entity_id": {
      "title": "Entity Id",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "label_id",
    "entity_type",
    "entity_id"
  ],
  "title": "gads_apply_labelArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_update_conversion_action-c2995bcd"></a>

## gads_update_conversion_action

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_get\_client, client.get\_service, client.get\_type, svc.conversion\_action\_path, op.update\_mask.CopyFrom, svc.mutate\_conversion\_actions, getattr.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Update an existing Conversion Action (status, value, counting type, attribution model). Args: conversion_action_id: The conversion action ID to update. status: ENABLED | PAUSED | REMOVED (optional). value: New fixed conversion value (optional, pass -1 to skip). counting_type: ONE_PER_CLICK | MANY_PER_CLICK (optional). attribution_model: LAST_CLICK | FIRST_CLICK | LINEAR | TIME_DECAY | POSITION_BASED | DATA_DRIVEN (optional). customer_id: Google Ads customer ID. Leave blank to use default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L3042-L3102) · Schema: tools/list.

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
    "status": {
      "default": "",
      "title": "Status",
      "type": "string"
    },
    "value": {
      "default": -1,
      "title": "Value",
      "type": "number"
    },
    "counting_type": {
      "default": "",
      "title": "Counting Type",
      "type": "string"
    },
    "attribution_model": {
      "default": "",
      "title": "Attribution Model",
      "type": "string"
    },
    "customer_id": {
      "default": "",
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "conversion_action_id"
  ],
  "title": "gads_update_conversion_actionArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_create_customer_user_access-ad5fa635"></a>

## gads_create_customer_user_access

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, ' AND '.join, \_row\_to\_dict.

```text
[WRITE] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Invite a user to access this Google Ads account with a specified role.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L3150-L3161) · Schema: tools/list.

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
  "title": "gads_create_customer_user_accessArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_find_account-fc906218"></a>

## gads_find_account

Handler: Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Search for sub-accounts under the MCC by name or ID (fuzzy match). Useful for quickly finding a client account.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L3163-L3176) · Schema: tools/list.

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
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    }
  },
  "required": [
    "query"
  ],
  "title": "gads_find_accountArguments",
  "type": "object"
}
```

</details>

<a id="tool-gads_get_account_budget-401477f7"></a>

## gads_get_account_budget

Handler: Upstream flags this handler as broken/unavailable in tool\_registry.\_BROKEN\_ACTIONS; slim dispatch refuses it. Other product (tools/google\_ads\_gads.py): calls mcp.tool, \_search, \_row\_to\_dict.

```text
[READ] Google Ads tool (extended/low-level coverage). For common tasks prefer the RECOMMENDED google_ads_* actions; use these only for advanced operations those don't cover. Get account-level budget information including approved spending limits.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_gads.py#L3178-L3191) · Schema: tools/list.

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
  "title": "gads_get_account_budgetArguments",
  "type": "object"
}
```

</details>
