# RoyAzran/mcp-ads: supporting and other-product tools

[Provider inventory](royazran--mcp-ads.md) · [Global tool index](../TOOL_INDEX.md)

Tools 901–1050 of 3131. Exact schemas from the same upstream snapshot.

<a id="tool-meta_ads_send_server_event-1260bf0c"></a>

## meta_ads_send_server_event

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, ud.get, requests.post, resp.json, require\_editor, json.loads, \_sha256, resp.json().get.

```text
[WRITE] Meta Ads tool. Send a server-side conversion event to Meta via the Conversions API (CAPI). Emails, phone numbers, first name, and last name in user_data are automatically SHA-256 hashed. Use event_id to deduplicate with browser pixel events (same event_id on both sides). Args: pixel_id: Meta Pixel ID (required). event_name: Event name: Purchase, Lead, ViewContent, AddToCart, CompleteRegistration, etc. (required). event_time: Unix timestamp of the event as a string, e.g. '1735689600' (required). user_data: JSON object with user info. Fields: email, phone, first_name, last_name, country, city, zip, client_ip_address, client_user_agent, fbc, fbp (required). pixel_access_token: Pixel-specific access token (different from ad account token) (required). event_source_url: The URL where the event occurred (for website events). custom_data: Optional JSON object with: value, currency, order_id, content_name, content_type, contents (array of {id, quantity}). test_event_code: Optional test event code from Meta Events Manager to verify the event. event_id: Unique ID for deduplication with browser pixel. Must match the event_id sent by the browser pixel for the same event. action_source: Where the event happened. One of: website, app, email, phone_call, chat, physical_store, system_generated, other. Default: website.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L7986-L8078) · Schema: tools/list.

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
    "event_name": {
      "title": "Event Name",
      "type": "string"
    },
    "event_time": {
      "title": "Event Time",
      "type": "string"
    },
    "user_data": {
      "title": "User Data",
      "type": "string"
    },
    "pixel_access_token": {
      "title": "Pixel Access Token",
      "type": "string"
    },
    "event_source_url": {
      "default": "",
      "title": "Event Source Url",
      "type": "string"
    },
    "custom_data": {
      "default": "",
      "title": "Custom Data",
      "type": "string"
    },
    "test_event_code": {
      "default": "",
      "title": "Test Event Code",
      "type": "string"
    },
    "event_id": {
      "default": "",
      "title": "Event Id",
      "type": "string"
    },
    "action_source": {
      "default": "website",
      "title": "Action Source",
      "type": "string"
    }
  },
  "required": [
    "pixel_id",
    "event_name",
    "event_time",
    "user_data",
    "pixel_access_token"
  ],
  "title": "meta_ads_send_server_eventArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_create_custom_conversion-d4b82bd0"></a>

## meta_ads_create_custom_conversion

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_post, require\_editor.

```text
[WRITE] Meta Ads tool. Create a custom conversion from a pixel event with URL conditions. Args: name: Custom conversion name (required). pixel_id: Meta Pixel ID (required). rule: JSON rule for the conversion condition. Example: '{"and":[{"url":{"i_contains":"thank-you"}}]}' (required). custom_event_type: PURCHASE, LEAD, COMPLETE_REGISTRATION, ADD_TO_CART, VIEW_CONTENT, SEARCH, ADD_TO_WISHLIST, ADD_PAYMENT_INFO, INITIATED_CHECKOUT, CONTACT, FIND_LOCATION, SCHEDULE, START_TRIAL, SUBMIT_APPLICATION, SUBSCRIBE, OTHER (required). account_id: Ad account ID. Leave blank to use META_AD_ACCOUNT_ID from .env. description: Optional description.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L8081-L8114) · Schema: tools/list.

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
    "rule": {
      "title": "Rule",
      "type": "string"
    },
    "custom_event_type": {
      "title": "Custom Event Type",
      "type": "string"
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
    "pixel_id",
    "rule",
    "custom_event_type"
  ],
  "title": "meta_ads_create_custom_conversionArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_instagram_stories-d4d2f723"></a>

## meta_ads_instagram_stories

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_page\_tok, \_get\_with\_token.

```text
[READ] Meta Ads tool. Get active Instagram stories for a business account. Args: instagram_account_id: Instagram Business Account ID (required). page_access_token: Page access token, required -- take it from the `access_token` field of meta_ads_pages. There is no user-token fallback.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L8121-L8135) · Schema: tools/list.

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
    }
  },
  "required": [
    "instagram_account_id"
  ],
  "title": "meta_ads_instagram_storiesArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_create_instagram_reel-7036ac6a"></a>

## meta_ads_create_instagram_reel

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_page\_tok, \_post\_with\_token, container.get, publish.get, require\_editor, \_get\_with\_token, permalink\_result.get.

```text
[WRITE] Meta Ads tool. Create and publish an Instagram Reel. This is a 2-step process: creates a media container, then publishes it. Args: instagram_account_id: Instagram Business Account ID (required). video_url: Public URL of the video file (required). page_access_token: Page access token with instagram_content_publish permission (required). caption: Reel caption text. Optional. share_to_feed: Also show the Reel in the feed. Default True.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L8138-L8182) · Schema: tools/list.

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
    "video_url": {
      "title": "Video Url",
      "type": "string"
    },
    "page_access_token": {
      "title": "Page Access Token",
      "type": "string"
    },
    "caption": {
      "default": "",
      "title": "Caption",
      "type": "string"
    },
    "share_to_feed": {
      "default": true,
      "title": "Share To Feed",
      "type": "boolean"
    }
  },
  "required": [
    "instagram_account_id",
    "video_url",
    "page_access_token"
  ],
  "title": "meta_ads_create_instagram_reelArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_instagram_post_insights-7edddd5e"></a>

## meta_ads_instagram_post_insights

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_page\_tok, \_get\_with\_token.

```text
[READ] Meta Ads tool. Get insights for a specific Instagram post or reel. Args: media_id: Instagram media ID (required). page_access_token: Page access token, required -- take it from the `access_token` field of meta_ads_pages. There is no user-token fallback.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L8185-L8199) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "media_id": {
      "title": "Media Id",
      "type": "string"
    },
    "page_access_token": {
      "default": "",
      "title": "Page Access Token",
      "type": "string"
    }
  },
  "required": [
    "media_id"
  ],
  "title": "meta_ads_instagram_post_insightsArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_schedule_instagram_post-5f862cb3"></a>

## meta_ads_schedule_instagram_post

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_page\_tok, \_post\_with\_token, require\_editor, \_dt.datetime.fromisoformat, publish\_at.replace, dt.timestamp.

```text
[WRITE] Meta Ads tool. Schedule an Instagram post for future publishing. Args: instagram_account_id: Instagram Business Account ID (required). image_url: Public URL of the image (JPEG/PNG) to post (required). publish_at: Scheduled publish time in ISO 8601, e.g. '2025-06-15T10:00:00+0300' (required). page_access_token: Page access token with instagram_content_publish permission (required). caption: Post caption text. Optional.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L8202-L8242) · Schema: tools/list.

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
    "publish_at": {
      "title": "Publish At",
      "type": "string"
    },
    "page_access_token": {
      "title": "Page Access Token",
      "type": "string"
    },
    "caption": {
      "default": "",
      "title": "Caption",
      "type": "string"
    }
  },
  "required": [
    "instagram_account_id",
    "image_url",
    "publish_at",
    "page_access_token"
  ],
  "title": "meta_ads_schedule_instagram_postArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_delete_instagram_post-22c320c3"></a>

## meta_ads_delete_instagram_post

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_page\_tok, \_delete\_with\_token, require\_editor.

```text
[WRITE] Meta Ads tool. Delete an Instagram post. Args: media_id: Instagram media ID to delete (required). page_access_token: Page access token (required).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L8245-L8259) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "media_id": {
      "title": "Media Id",
      "type": "string"
    },
    "page_access_token": {
      "title": "Page Access Token",
      "type": "string"
    }
  },
  "required": [
    "media_id",
    "page_access_token"
  ],
  "title": "meta_ads_delete_instagram_postArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_instagram_mentions-939e18f9"></a>

## meta_ads_instagram_mentions

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_page\_tok, \_get\_with\_token.

```text
[READ] Meta Ads tool. Get posts and comments where your Instagram account is mentioned or tagged. Args: instagram_account_id: Instagram Business Account ID (required). page_access_token: Page access token, required -- take it from the `access_token` field of meta_ads_pages. There is no user-token fallback. limit: Number of mentions to return. Default 25.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L8262-L8279) · Schema: tools/list.

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
  "title": "meta_ads_instagram_mentionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_reply_to_instagram_comment-57c229c5"></a>

## meta_ads_reply_to_instagram_comment

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_page\_tok, \_post\_with\_token, require\_editor.

```text
[WRITE] Meta Ads tool. Reply to a comment on an Instagram post. Args: comment_id: Instagram comment ID to reply to (required). message: Reply text (required). page_access_token: Page access token (required).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L8282-L8300) · Schema: tools/list.

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
      "title": "Page Access Token",
      "type": "string"
    }
  },
  "required": [
    "comment_id",
    "message",
    "page_access_token"
  ],
  "title": "meta_ads_reply_to_instagram_commentArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_delete_instagram_comment-1c0beecf"></a>

## meta_ads_delete_instagram_comment

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_page\_tok, \_delete\_with\_token, require\_editor.

```text
[WRITE] Meta Ads tool. Delete a comment on an Instagram post. Args: comment_id: Instagram comment ID to delete (required). page_access_token: Page access token (required).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L8303-L8317) · Schema: tools/list.

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
      "title": "Page Access Token",
      "type": "string"
    }
  },
  "required": [
    "comment_id",
    "page_access_token"
  ],
  "title": "meta_ads_delete_instagram_commentArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_instagram_hashtag_posts-1535630d"></a>

## meta_ads_instagram_hashtag_posts

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_page\_tok, \_get\_with\_token, hashtag\_result.get, hashtag\_data\[0\].get, min.

```text
[READ] Meta Ads tool. Search for recent public posts using a specific Instagram hashtag (Business Discovery API). Args: hashtag: Hashtag to search without the # symbol, e.g. 'digitalmarketing' (required). instagram_account_id: Your Instagram Business Account ID (required for auth) (required). page_access_token: Page access token, required -- take it from the `access_token` field of meta_ads_pages. There is no user-token fallback. limit: Number of posts to return. Default 10, max 50.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L8320-L8353) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "hashtag": {
      "title": "Hashtag",
      "type": "string"
    },
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
      "default": 10,
      "title": "Limit",
      "type": "integer"
    }
  },
  "required": [
    "hashtag",
    "instagram_account_id"
  ],
  "title": "meta_ads_instagram_hashtag_postsArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_instagram_competitor_analysis-5edcfb9b"></a>

## meta_ads_instagram_competitor_analysis

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_page\_tok, \_get\_with\_token.

```text
[READ] Meta Ads tool. Get public profile info from a competitor's Instagram account using the Business Discovery API. Args: target_username: Competitor's Instagram username without the @ symbol (required). instagram_account_id: Your Instagram Business Account ID (required for auth) (required). page_access_token: Page access token, required -- take it from the `access_token` field of meta_ads_pages. There is no user-token fallback.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L8356-L8372) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "target_username": {
      "title": "Target Username",
      "type": "string"
    },
    "instagram_account_id": {
      "title": "Instagram Account Id",
      "type": "string"
    },
    "page_access_token": {
      "default": "",
      "title": "Page Access Token",
      "type": "string"
    }
  },
  "required": [
    "target_username",
    "instagram_account_id"
  ],
  "title": "meta_ads_instagram_competitor_analysisArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_page_photo_album-bdd7d4b6"></a>

## meta_ads_page_photo_album

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_page\_tok, \_get\_with\_token.

```text
[READ] Meta Ads tool. Get all photos in a specific Facebook Page photo album. Args: album_id: Album ID from meta_ads_page_albums (required). page_access_token: Page access token, required -- take it from the `access_token` field of meta_ads_pages. There is no user-token fallback. limit: Number of photos to return. Default 50.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L8379-L8396) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "album_id": {
      "title": "Album Id",
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
    }
  },
  "required": [
    "album_id"
  ],
  "title": "meta_ads_page_photo_albumArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_create_page_photo_album-dde4411c"></a>

## meta_ads_create_page_photo_album

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_page\_tok, \_post\_with\_token, require\_editor.

```text
[WRITE] Meta Ads tool. Create a new photo album on a Facebook Page. Args: page_id: Facebook Page ID (required). Run meta_ads_pages to list the Pages every connected login can reach. name: Album name (required). page_access_token: Page access token with pages_manage_posts permission (required). description: Album description. Optional. location: Album location. Optional.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L8399-L8426) · Schema: tools/list.

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
    "page_access_token": {
      "title": "Page Access Token",
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
    }
  },
  "required": [
    "page_id",
    "name",
    "page_access_token"
  ],
  "title": "meta_ads_create_page_photo_albumArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_page_stories-0067093a"></a>

## meta_ads_page_stories

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_page\_tok, \_get\_with\_token.

```text
[READ] Meta Ads tool. Get current stories posted by a Facebook Page. Args: page_id: Facebook Page ID (required). Run meta_ads_pages to list the Pages every connected login can reach. page_access_token: Page access token (required).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L8429-L8444) · Schema: tools/list.

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
    }
  },
  "required": [
    "page_id",
    "page_access_token"
  ],
  "title": "meta_ads_page_storiesArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_pin_post-fa3cd6ef"></a>

## meta_ads_pin_post

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_page\_tok, \_post\_with\_token, require\_editor.

```text
[WRITE] Meta Ads tool. Pin a post to the top of a Facebook Page. Args: page_id: Facebook Page ID (required). Run meta_ads_pages to list the Pages every connected login can reach. post_id: Post ID to pin (required). page_access_token: Page access token with admin rights (required).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L8447-L8463) · Schema: tools/list.

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
  "title": "meta_ads_pin_postArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_page_tags-4b16171f"></a>

## meta_ads_page_tags

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_page\_tok, \_get\_with\_token.

```text
[READ] Meta Ads tool. Get tags/labels applied to a Facebook Page. Args: page_id: Facebook Page ID (required). Run meta_ads_pages to list the Pages every connected login can reach. page_access_token: Page access token. Optional -- when omitted it is looked up from page_id across every connected Meta login. Pass one explicitly to force a specific Page identity.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L8466-L8481) · Schema: tools/list.

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
  "title": "meta_ads_page_tagsArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_page_liked_pages-688b5654"></a>

## meta_ads_page_liked_pages

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_page\_tok, \_get\_with\_token.

```text
[READ] Meta Ads tool. Get pages liked by or associated with a Facebook Page. Args: page_id: Facebook Page ID (required). Run meta_ads_pages to list the Pages every connected login can reach. page_access_token: Page access token. Optional -- when omitted it is looked up from page_id across every connected Meta login. Pass one explicitly to force a specific Page identity. limit: Number of pages to return. Default 25.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L8484-L8501) · Schema: tools/list.

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
  "title": "meta_ads_page_liked_pagesArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_list_catalog_products-115f215f"></a>

## meta_ads_list_catalog_products

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, min, \_get.

```text
[READ] Meta Ads tool. List all products in a Meta product catalog. Args: catalog_id: Meta catalog ID (required). limit: Number of products to return. Default 50, max 200. filter_status: Filter by availability: 'in stock', 'out of stock', 'preorder', 'available for order'. Leave blank for all.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L8508-L8527) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "catalog_id": {
      "title": "Catalog Id",
      "type": "string"
    },
    "limit": {
      "default": 50,
      "title": "Limit",
      "type": "integer"
    },
    "filter_status": {
      "default": "",
      "title": "Filter Status",
      "type": "string"
    }
  },
  "required": [
    "catalog_id"
  ],
  "title": "meta_ads_list_catalog_productsArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_catalog_diagnostics-316aa7e8"></a>

## meta_ads_catalog_diagnostics

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_get.

```text
[READ] Meta Ads tool. Get product feed errors and warnings for a Meta catalog. Args: catalog_id: Meta catalog ID (required).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L8530-L8542) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "catalog_id": {
      "title": "Catalog Id",
      "type": "string"
    }
  },
  "required": [
    "catalog_id"
  ],
  "title": "meta_ads_catalog_diagnosticsArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_create_product_set-f30c8512"></a>

## meta_ads_create_product_set

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_post, require\_editor.

```text
[WRITE] Meta Ads tool. Create a product set (subset of catalog for targeting in Collection/DPA ads). Args: catalog_id: Meta catalog ID (required). name: Product set name (required). filter: JSON filter expression. Examples: '{"retailer_id":{"is_any":["SKU1","SKU2"]}}' or '{"price":{"gt":10000}}' (prices in cents) or '{"category":{"is_any":["Shoes"]}}' (required).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L8545-L8565) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "catalog_id": {
      "title": "Catalog Id",
      "type": "string"
    },
    "name": {
      "title": "Name",
      "type": "string"
    },
    "filter": {
      "title": "Filter",
      "type": "string"
    }
  },
  "required": [
    "catalog_id",
    "name",
    "filter"
  ],
  "title": "meta_ads_create_product_setArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_product_sets-6267d7ec"></a>

## meta_ads_product_sets

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_get.

```text
[READ] Meta Ads tool. List all product sets in a Meta catalog. Args: catalog_id: Meta catalog ID (required).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L8568-L8580) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "catalog_id": {
      "title": "Catalog Id",
      "type": "string"
    }
  },
  "required": [
    "catalog_id"
  ],
  "title": "meta_ads_product_setsArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_ad_account_users-bcb1088a"></a>

## meta_ads_ad_account_users

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_get.

```text
[READ] Meta Ads tool. List all users with access to a Meta ad account, including their roles and permission levels. Args: account_id: Ad account ID. Leave blank to use META_AD_ACCOUNT_ID from .env.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L8587-L8608) · Schema: tools/list.

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
  "title": "meta_ads_ad_account_usersArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_add_ad_account_user-9ccc92c4"></a>

## meta_ads_add_ad_account_user

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_post, require\_editor, ', '.join, role\_map.keys.

```text
[WRITE] Meta Ads tool. Add a user to a Meta ad account with a specific role. Args: user_id: Facebook User ID to add (required). role: User role: ADMIN (1001), GENERAL_USER (1002), or REPORTS_ONLY (1003) (required). account_id: Ad account ID. Leave blank to use META_AD_ACCOUNT_ID from .env.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L8611-L8633) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "user_id": {
      "title": "User Id",
      "type": "string"
    },
    "role": {
      "title": "Role",
      "type": "string"
    },
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    }
  },
  "required": [
    "user_id",
    "role"
  ],
  "title": "meta_ads_add_ad_account_userArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_remove_ad_account_user-b4d2b524"></a>

## meta_ads_remove_ad_account_user

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, requests.delete, resp.json, require\_editor, \_token, resp.json().get.

```text
[WRITE] Meta Ads tool. Remove a user's access from a Meta ad account. Args: user_id: Facebook User ID to remove (required). account_id: Ad account ID. Leave blank to use META_AD_ACCOUNT_ID from .env.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L8636-L8657) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "user_id": {
      "title": "User Id",
      "type": "string"
    },
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    }
  },
  "required": [
    "user_id"
  ],
  "title": "meta_ads_remove_ad_account_userArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_business_pages-23360c65"></a>

## meta_ads_business_pages

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_get.

```text
[READ] Meta Ads tool. Get all Facebook Pages connected to a Meta Business account. Args: business_id: Meta Business Manager account ID (required).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L8660-L8672) · Schema: tools/list.

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
  "title": "meta_ads_business_pagesArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_targeting_suggestions-07878e4f"></a>

## meta_ads_targeting_suggestions

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, i.strip, \_get, interests.split.

```text
[READ] Meta Ads tool. Get interest targeting suggestions based on seed interests using Meta's audience targeting search. Args: interests: Comma-separated list of interest names to use as seeds, e.g. 'digital marketing,SEO,content marketing' (required). limit: Number of suggestions to return. Default 25.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L8675-L8691) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "interests": {
      "title": "Interests",
      "type": "string"
    },
    "limit": {
      "default": 25,
      "title": "Limit",
      "type": "integer"
    }
  },
  "required": [
    "interests"
  ],
  "title": "meta_ads_targeting_suggestionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_copy_ad_to_adset-232df37d"></a>

## meta_ads_copy_ad_to_adset

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_post, require\_editor.

```text
[WRITE] Meta Ads tool. Copy an existing Meta ad to a different ad set, reusing the same creative. Args: ad_id: Source ad ID to copy (required). target_adset_id: Destination ad set ID (required). new_name: Name for the copied ad. Leave blank to auto-generate. status: Status for the new ad: ACTIVE or PAUSED. Default PAUSED.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L8694-L8717) · Schema: tools/list.

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
    "target_adset_id": {
      "title": "Target Adset Id",
      "type": "string"
    },
    "new_name": {
      "default": "",
      "title": "New Name",
      "type": "string"
    },
    "status": {
      "default": "PAUSED",
      "title": "Status",
      "type": "string"
    }
  },
  "required": [
    "ad_id",
    "target_adset_id"
  ],
  "title": "meta_ads_copy_ad_to_adsetArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_preview_ad_creative-621a7ef0"></a>

## meta_ads_preview_ad_creative

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_get.

```text
[READ] Meta Ads tool. Get a preview of an ad creative in a specific ad format. Args: creative_id: Creative ID to preview (required). ad_format: Ad format for the preview. Options: DESKTOP_FEED_STANDARD, MOBILE_FEED_STANDARD, INSTAGRAM_STANDARD, INSTAGRAM_STORY, INSTAGRAM_REELS, AUDIENCE_NETWORK_INSTREAM_VIDEO, FACEBOOK_STORY, RIGHT_COLUMN_STANDARD. Default MOBILE_FEED_STANDARD.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L8720-L8733) · Schema: tools/list.

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
    "ad_format": {
      "default": "MOBILE_FEED_STANDARD",
      "title": "Ad Format",
      "type": "string"
    }
  },
  "required": [
    "creative_id"
  ],
  "title": "meta_ads_preview_ad_creativeArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_bulk_updater-7c2407b4"></a>

## meta_ads_bulk_updater

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, require\_editor, i.strip, range, object\_ids.split, json.loads, \_post, time.sleep.

```text
[WRITE] Meta Ads tool. Bulk-apply an action to multiple Meta campaigns, ad sets, or ads with rate-limit protection. Supports status changes, budget updates, targeting updates, and duplication. Set dry_run=True first to preview operations before executing — use this for confirmation: call with dry_run=True, show the plan to the user, then call again with dry_run=False only after confirmation. Args: object_ids: Comma-separated list of IDs, e.g. "123,456,789" (required). object_type: campaign, adset, or ad (required). action: One of: pause, activate, update_budget, update_targeting, duplicate (required). params: JSON string with action-specific overrides. pause/activate → not needed update_budget → {"daily_budget": "5000"} or {"lifetime_budget": "50000"} update_targeting → any field accepted by meta_ads_update_adset_targeting, e.g. '{"targeting":"{...}","advantage_audience":true}' duplicate → {"status_override":"PAUSED","deep_copy":true} delay_ms: Milliseconds between API calls. Default 300. dry_run: If True, return the list of planned operations WITHOUT executing them. Always call with dry_run=True first, confirm with user, then run for real.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L8741-L8878) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "object_ids": {
      "title": "Object Ids",
      "type": "string"
    },
    "object_type": {
      "title": "Object Type",
      "type": "string"
    },
    "action": {
      "title": "Action",
      "type": "string"
    },
    "params": {
      "default": "",
      "title": "Params",
      "type": "string"
    },
    "delay_ms": {
      "default": 300,
      "title": "Delay Ms",
      "type": "integer"
    },
    "dry_run": {
      "default": false,
      "title": "Dry Run",
      "type": "boolean"
    }
  },
  "required": [
    "object_ids",
    "object_type",
    "action"
  ],
  "title": "meta_ads_bulk_updaterArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_image_pipeline-39225a5d"></a>

## meta_ads_image_pipeline

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_upload\_image\_url\_to\_meta, require\_editor.

```text
[READ] Meta Ads tool. Upload an image from a public URL to the Meta image library and return image_hash. Downloads the image bytes and uploads as multipart/form-data (works even without Advanced API Access). Use this as step 2 of the image pipeline: Step 1: Generate image externally (Gemini / Nano Banana / any tool) → get public URL Step 2: Call this tool with the URL → get image_hash ready for ad creatives Args: image_url: Public URL to the JPG/PNG/GIF image to upload (required). account_id: Ad account ID. Leave blank to use META_AD_ACCOUNT_ID from .env.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L8881-L8907) · Schema: tools/list.

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
  "title": "meta_ads_image_pipelineArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_adset_matrix_builder-43761088"></a>

## meta_ads_adset_matrix_builder

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, enumerate, require\_editor, json.loads, entry.get, range, adset\_result.get.

```text
[WRITE] Meta Ads tool. Create one ad set + one ad per entry in a structured adsets list (matrix / multi-audience structure). Every adset and ad is created as PAUSED. All ads share the same creative. Set dry_run=True first to preview the full plan before creating anything. Args: campaign_id: Campaign ID to create ad sets under (required). creative_id: Ad creative ID to use for all ads (required). adsets: JSON array of ad set definitions (required). Each entry: name – ad set name (required) targeting – full targeting JSON string (required) daily_budget – optional per-adset budget override (agoras/cents) frequency_cap – optional int: max impressions per user per 7 days Example: '[{"name":"Ages 25-34 IL","targeting":"{"age_min":25,"age_max":34,"geo_locations":{"countries":["IL"]}}","daily_budget":8000}, {"name":"Retargeting Website","targeting":"{"custom_audiences":[{"id":"123"}]}","frequency_cap":3}]' daily_budget_per_adset: Default daily budget in smallest currency unit (e.g. 5000 = ₪50). Per-adset daily_budget overrides this. optimization_goal: Optimization goal. Default OFFSITE_CONVERSIONS. billing_event: Billing event. Default IMPRESSIONS. ad_name_prefix: Prefix for ad names. Default 'Ad'. account_id: Ad account ID. Leave blank to use META_AD_ACCOUNT_ID from .env. dry_run: If True, return the full creation plan WITHOUT executing. Use for confirmation.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L8910-L9078) · Schema: tools/list.

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
    "creative_id": {
      "title": "Creative Id",
      "type": "string"
    },
    "adsets": {
      "title": "Adsets",
      "type": "string"
    },
    "daily_budget_per_adset": {
      "default": 5000,
      "title": "Daily Budget Per Adset",
      "type": "integer"
    },
    "optimization_goal": {
      "default": "OFFSITE_CONVERSIONS",
      "title": "Optimization Goal",
      "type": "string"
    },
    "billing_event": {
      "default": "IMPRESSIONS",
      "title": "Billing Event",
      "type": "string"
    },
    "ad_name_prefix": {
      "default": "",
      "title": "Ad Name Prefix",
      "type": "string"
    },
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    },
    "dry_run": {
      "default": false,
      "title": "Dry Run",
      "type": "boolean"
    }
  },
  "required": [
    "campaign_id",
    "creative_id",
    "adsets"
  ],
  "title": "meta_ads_adset_matrix_builderArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_lead_export-29374b56"></a>

## meta_ads_lead_export

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, form\_ids.strip, sum, \_token, range, \_get\_leads, date.today, save\_dir.strip.

```text
[READ] Meta Ads tool. Export all leads from Facebook Lead Gen forms to CSV files (one per form). Fetches all forms for the page (or specific form IDs), reads all leads with pagination, and saves one CSV file per form as leads_{form_id}_{date}.csv. The CSV content is also returned inline for immediate use. Args: page_id: Facebook Page ID (required). Run meta_ads_pages to list the Pages every connected login can reach. form_ids: Comma-separated specific form IDs to export. Leave blank to fetch all forms on the page. since: Filter leads created after this value — Unix timestamp or YYYY-MM-DD. Optional. until: Filter leads created before this value — Unix timestamp or YYYY-MM-DD. Optional. page_access_token: Page access token. Leave blank to use META_ACCESS_TOKEN from .env. save_dir: Directory path to save CSV files. Defaults to current working directory.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L9081-L9222) · Schema: tools/list.

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
    "form_ids": {
      "default": "",
      "title": "Form Ids",
      "type": "string"
    },
    "since": {
      "default": "",
      "title": "Since",
      "type": "string"
    },
    "until": {
      "default": "",
      "title": "Until",
      "type": "string"
    },
    "page_access_token": {
      "default": "",
      "title": "Page Access Token",
      "type": "string"
    },
    "save_dir": {
      "default": "",
      "title": "Save Dir",
      "type": "string"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "meta_ads_lead_exportArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_cross_account_report-0aa72707"></a>

## meta_ads_cross_account_report

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, rows.sort, sum, a.strip, \_resolve\_meta\_account, \_get, d.get, float.

```text
[READ] Meta Ads tool. Run a performance overview across multiple ad accounts and return a unified table. Calls each account individually and merges results, then sorts by the chosen metric. Ideal for agency-level reporting across all clients in one call. Args: account_ids: Comma-separated list of ad account IDs (with or without 'act_' prefix), e.g. "act_123,456,789" (required). start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. sort_by: Metric to sort results by. Options: roas, spend, impressions, clicks, ctr, cpm. Default roas.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L9225-L9340) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_ids": {
      "title": "Account Ids",
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
    "sort_by": {
      "default": "roas",
      "title": "Sort By",
      "type": "string"
    }
  },
  "required": [
    "account_ids"
  ],
  "title": "meta_ads_cross_account_reportArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_frequency_watcher-f9f62575"></a>

## meta_ads_frequency_watcher

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_get, flagged.sort, float, flagged.append, date.today, timedelta.

```text
[READ] Meta Ads tool. Monitor ad frequency across all campaigns and flag campaigns exceeding the threshold. Returns a list of at-risk campaigns with tailored recommendations: refresh_creative, reduce_budget, or pause. Args: frequency_threshold: Flag campaigns with frequency above this value. Default 3.0. start_date: Start date YYYY-MM-DD. Defaults to 14 days ago. end_date: End date YYYY-MM-DD. Defaults to today. account_id: Ad account ID. Leave blank to use META_AD_ACCOUNT_ID from .env. include_paused: Include paused campaigns in the check. Default False (active only).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L9343-L9448) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "frequency_threshold": {
      "default": 3,
      "title": "Frequency Threshold",
      "type": "number"
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
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    },
    "include_paused": {
      "default": false,
      "title": "Include Paused",
      "type": "boolean"
    }
  },
  "title": "meta_ads_frequency_watcherArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_create_automated_rule-4c0aa76a"></a>

## meta_ads_create_automated_rule

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_post, require\_editor.

```text
[WRITE] Meta Ads tool. Create a Meta automated rule that monitors and acts on ad performance automatically. Two types: - SCHEDULE_BASED: runs on interval (DAILY/HOURLY/SEMI_HOURLY). Use schedule_spec. - TRIGGER_BASED: real-time reaction to performance changes. Use trigger_spec. NOTE: Trigger-based rules are API-only — not available in Ads Manager UI. Args: name: Rule name (required). rule_type: 'SCHEDULE_BASED' or 'TRIGGER_BASED' (required). evaluation_spec: JSON string — what to evaluate. Example: '{"evaluation_type":"SCHEDULE","filters":[{"field":"entity_type","value":"ADSET"}, {"field":"campaign.delivery_status","value":"Active"}]}' execution_spec: JSON string — what action to take. Example: '{"execution_type":"PAUSE"}' or '{"execution_type":"CHANGE_BUDGET","execution_options":[{"field":"budget","value":10,"action_type":"PERCENTAGE","operator":"MULTIPLY_BY"}]}' account_id: Ad account ID. Leave blank for .env default. schedule_spec: JSON string for schedule-based rules. Example: '{"schedule_type":"DAILY","start_minute":480}' (480=8AM) trigger_spec: JSON string for trigger-based rules. Example: '{"type":"STATS_CHANGE","trigger_filters":[{"field":"cost_per_result","operator":">","value":50}]}'
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L9456-L9503) · Schema: tools/list.

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
    "rule_type": {
      "title": "Rule Type",
      "type": "string"
    },
    "evaluation_spec": {
      "title": "Evaluation Spec",
      "type": "string"
    },
    "execution_spec": {
      "title": "Execution Spec",
      "type": "string"
    },
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    },
    "schedule_spec": {
      "default": "",
      "title": "Schedule Spec",
      "type": "string"
    },
    "trigger_spec": {
      "default": "",
      "title": "Trigger Spec",
      "type": "string"
    }
  },
  "required": [
    "name",
    "rule_type",
    "evaluation_spec",
    "execution_spec"
  ],
  "title": "meta_ads_create_automated_ruleArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_list_automated_rules-a4172228"></a>

## meta_ads_list_automated_rules

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_get.

```text
[READ] Meta Ads tool. List all automated rules in an ad account. Args: account_id: Ad account ID. Leave blank for .env default. status: Filter by status: ENABLED, DISABLED, ALL. Default ENABLED.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L9506-L9524) · Schema: tools/list.

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
    "status": {
      "default": "ENABLED",
      "title": "Status",
      "type": "string"
    }
  },
  "title": "meta_ads_list_automated_rulesArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_update_automated_rule-488943d5"></a>

## meta_ads_update_automated_rule

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_post, require\_editor.

```text
[WRITE] Meta Ads tool. Enable, disable, or rename an automated rule. Args: rule_id: Automated rule ID (required). status: 'ENABLED' or 'DISABLED'. name: New name for the rule.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L9527-L9551) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "rule_id": {
      "title": "Rule Id",
      "type": "string"
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
    "rule_id"
  ],
  "title": "meta_ads_update_automated_ruleArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_delete_automated_rule-b857bbd0"></a>

## meta_ads_delete_automated_rule

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_delete, require\_editor.

```text
[WRITE] Meta Ads tool. Delete an automated rule permanently. Args: rule_id: Automated rule ID to delete (required).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L9554-L9565) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "rule_id": {
      "title": "Rule Id",
      "type": "string"
    }
  },
  "required": [
    "rule_id"
  ],
  "title": "meta_ads_delete_automated_ruleArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_create_ab_test-9bafc7c5"></a>

## meta_ads_create_ab_test

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_post, require\_editor, acct.replace, isinstance, json.loads.

```text
[WRITE] Meta Ads tool. Create an A/B split test (ad study) with mutually exclusive audience cells. Each cell receives a non-overlapping audience slice. Ideal for testing: - Different audiences (same creative) - Different placements - Different objectives Args: name: Study name (required). business_id: Meta Business Manager ID (required). start_time: ISO 8601 start datetime, e.g. '2026-04-01T00:00:00+0000' (required). end_time: ISO 8601 end datetime (required). cells: JSON array of cell configs. Each cell needs 'name', 'treatment_percentage', and optionally 'adsets' list. Example: '[{"name":"Control","treatment_percentage":50,"adsets":[{"id":"123"}]}, {"name":"Test","treatment_percentage":50,"adsets":[{"id":"456"}]}]' confidence_level: Statistical confidence level 0-1. Default 0.95. account_id: Ad account ID for context. Leave blank for .env default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L9568-L9618) · Schema: tools/list.

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
    "business_id": {
      "title": "Business Id",
      "type": "string"
    },
    "start_time": {
      "title": "Start Time",
      "type": "string"
    },
    "end_time": {
      "title": "End Time",
      "type": "string"
    },
    "cells": {
      "title": "Cells",
      "type": "string"
    },
    "confidence_level": {
      "default": 0.95,
      "title": "Confidence Level",
      "type": "number"
    },
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    }
  },
  "required": [
    "name",
    "business_id",
    "start_time",
    "end_time",
    "cells"
  ],
  "title": "meta_ads_create_ab_testArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_ab_test_results-56e04ac5"></a>

## meta_ads_ab_test_results

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_get.

```text
[READ] Meta Ads tool. Get results and status of an A/B split test. Args: study_id: Ad study ID (required).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L9621-L9632) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "study_id": {
      "title": "Study Id",
      "type": "string"
    }
  },
  "required": [
    "study_id"
  ],
  "title": "meta_ads_ab_test_resultsArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_create_adset_with_dayparting-55fd0e54"></a>

## meta_ads_create_adset_with_dayparting

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_post, require\_editor, isinstance, json.loads, \_require\_advantage\_audience\_flag.

```text
[WRITE] Meta Ads tool. Create an ad set with dayparting (scheduled delivery by hour/day). NOTE: Dayparting REQUIRES lifetime_budget — daily budget does not support scheduling. Args: name: Ad set name (required). campaign_id: Campaign ID (required). lifetime_budget: Total budget in smallest currency unit, e.g. 100000 = ₪1000 (required). start_time: Campaign start ISO datetime, e.g. '2026-04-01T00:00:00+0300' (required). end_time: Campaign end ISO datetime (required). schedule: JSON array of day-part windows. Each entry: {"start_minute": 540, "end_minute": 1080, "days": [1,2,3,4,5]} start/end_minute = minutes after midnight (must be multiples of 30). days: 0=Sun, 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat. (required) Example (Mon-Fri 9AM-6PM): '[{"start_minute":540,"end_minute":1080,"days":[1,2,3,4,5]}]' optimization_goal: Default OFFSITE_CONVERSIONS. billing_event: Default IMPRESSIONS. targeting: JSON targeting spec string. Leave blank for broad targeting. bid_amount: Bid cap in smallest currency unit. 0 = auto bid. account_id: Ad account ID. Leave blank for .env default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L9635-L9710) · Schema: tools/list.

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
    "lifetime_budget": {
      "title": "Lifetime Budget",
      "type": "integer"
    },
    "start_time": {
      "title": "Start Time",
      "type": "string"
    },
    "end_time": {
      "title": "End Time",
      "type": "string"
    },
    "schedule": {
      "title": "Schedule",
      "type": "string"
    },
    "optimization_goal": {
      "default": "OFFSITE_CONVERSIONS",
      "title": "Optimization Goal",
      "type": "string"
    },
    "billing_event": {
      "default": "IMPRESSIONS",
      "title": "Billing Event",
      "type": "string"
    },
    "targeting": {
      "default": "",
      "title": "Targeting",
      "type": "string"
    },
    "bid_amount": {
      "default": 0,
      "title": "Bid Amount",
      "type": "integer"
    },
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    }
  },
  "required": [
    "name",
    "campaign_id",
    "lifetime_budget",
    "start_time",
    "end_time",
    "schedule"
  ],
  "title": "meta_ads_create_adset_with_daypartingArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_create_advantage_plus_campaign-4087532d"></a>

## meta_ads_create_advantage_plus_campaign

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_post, campaign\_result.get, require\_editor, adset\_result.get, budget\_type.lower.

```text
[WRITE] Meta Ads tool. Create a Meta Advantage+ campaign (maximum AI automation: audience + placements + budget). Creates a campaign with all three Advantage+ levers enabled simultaneously: - Advantage+ Budget (campaign-level) - Advantage+ Audience (full automation) - Advantage+ Placements (automatic) Supported objectives: OUTCOME_SALES, OUTCOME_LEADS, OUTCOME_APP_PROMOTION Args: name: Campaign name (required). objective: 'OUTCOME_SALES', 'OUTCOME_LEADS', or 'OUTCOME_APP_PROMOTION' (required). budget: Daily or lifetime budget in smallest currency unit, e.g. 20000 = ₪200 (required). budget_type: 'DAILY' or 'LIFETIME'. Default DAILY. bid_strategy: 'LOWEST_COST_WITHOUT_CAP', 'COST_CAP', 'LOWEST_COST_WITH_BID_CAP', 'LOWEST_COST_WITH_MIN_ROAS'. Default LOWEST_COST_WITHOUT_CAP. account_id: Ad account ID. Leave blank for .env default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L9713-L9800) · Schema: tools/list.

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
    "budget": {
      "title": "Budget",
      "type": "integer"
    },
    "budget_type": {
      "default": "DAILY",
      "title": "Budget Type",
      "type": "string"
    },
    "bid_strategy": {
      "default": "LOWEST_COST_WITHOUT_CAP",
      "title": "Bid Strategy",
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
    "objective",
    "budget"
  ],
  "title": "meta_ads_create_advantage_plus_campaignArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_send_whatsapp_message-dff34707"></a>

## meta_ads_send_whatsapp_message

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, requests.post, resp.json, require\_editor, to.replace('+', '').replace(' ', '').replace, to.replace('+', '').replace, json.loads, to.replace.

```text
[WRITE] Meta Ads tool. Send a WhatsApp message via Meta WhatsApp Business Cloud API. Requires a WhatsApp Business Account (WABA) with messaging permissions. For outbound messages to new contacts, use template_name (pre-approved templates only). Free-form text only works within 24h customer service window. Args: phone_number_id: WhatsApp Business phone number ID from WABA (required). to: Recipient phone number with country code, e.g. '972501234567' (required). message_type: 'text' or 'template'. Default 'text'. text: Message text for text type messages. template_name: Approved template name for template messages. template_language: Template language code. Default 'he' (Hebrew). template_components: JSON array of template components for dynamic values. access_token: WhatsApp System User access token. Required — different from Meta Ads token.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L9803-L9870) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "phone_number_id": {
      "title": "Phone Number Id",
      "type": "string"
    },
    "to": {
      "title": "To",
      "type": "string"
    },
    "message_type": {
      "default": "text",
      "title": "Message Type",
      "type": "string"
    },
    "text": {
      "default": "",
      "title": "Text",
      "type": "string"
    },
    "template_name": {
      "default": "",
      "title": "Template Name",
      "type": "string"
    },
    "template_language": {
      "default": "he",
      "title": "Template Language",
      "type": "string"
    },
    "template_components": {
      "default": "",
      "title": "Template Components",
      "type": "string"
    },
    "access_token": {
      "default": "",
      "title": "Access Token",
      "type": "string"
    }
  },
  "required": [
    "phone_number_id",
    "to"
  ],
  "title": "meta_ads_send_whatsapp_messageArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_async_batch-0431a5a0"></a>

## meta_ads_async_batch

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_post, require\_editor, isinstance, json.loads, time.time.

```text
[READ] Meta Ads tool. Submit up to 1000 ad operations in a single async batch request. Much faster than calling tools in a loop for bulk creation. Meta processes operations in parallel and returns a request_set_id to poll for results. Args: account_id: Ad account ID (required). operations: JSON array of operations. Each operation needs 'method' (POST/DELETE), 'relative_url', and optionally 'body'. Example: '[{"method":"POST","relative_url":"act_123/campaigns", "body":"name=Test&objective=OUTCOME_SALES&special_ad_categories=[]&status=PAUSED"}]' notification_uri: Optional webhook URL to call when batch completes.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L9873-L9919) · Schema: tools/list.

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
    "operations": {
      "title": "Operations",
      "type": "string"
    },
    "notification_uri": {
      "default": "",
      "title": "Notification Uri",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "operations"
  ],
  "title": "meta_ads_async_batchArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_async_batch_status-b0eca0fa"></a>

## meta_ads_async_batch_status

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_get, round.

```text
[READ] Meta Ads tool. Check the status of an async batch request. Args: request_set_id: Async batch request set ID from meta_ads_async_batch (required).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L9922-L9950) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "request_set_id": {
      "title": "Request Set Id",
      "type": "string"
    }
  },
  "required": [
    "request_set_id"
  ],
  "title": "meta_ads_async_batch_statusArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_delivery_insights-35b80287"></a>

## meta_ads_delivery_insights

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_get, delivery.get, i.get, learning.get.

```text
[READ] Meta Ads tool. Get delivery diagnostics for a campaign, ad set, or ad. Returns: delivery status, learning phase, estimated daily results, issues. Args: object_id: Campaign, adset, or ad ID (required). object_type: 'campaign', 'adset', or 'ad'. Used for context only. Default 'campaign'.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L9953-L9994) · Schema: tools/list.

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
      "default": "campaign",
      "title": "Object Type",
      "type": "string"
    }
  },
  "required": [
    "object_id"
  ],
  "title": "meta_ads_delivery_insightsArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_set_adset_budget_guardrails-79015f7a"></a>

## meta_ads_set_adset_budget_guardrails

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_post, require\_editor.

```text
[WRITE] Meta Ads tool. Set budget guardrails on an ad set within a Campaign Budget Optimization campaign. Use to control how Meta distributes the campaign budget among ad sets: - min_spend_target: soft floor (Meta tries to hit this but not guaranteed) - spend_cap: hard ceiling (Meta will never exceed this per day/lifetime) Values in smallest currency unit (e.g. 5000 = ₪50). Args: adset_id: Ad set ID (required). daily_min_spend_target: Minimum daily spend floor (soft). 0 = no floor. daily_spend_cap: Maximum daily spend cap (hard). 0 = no cap. lifetime_min_spend_target: Minimum lifetime spend floor (soft). 0 = no floor. lifetime_spend_cap: Maximum lifetime spend cap (hard). 0 = no cap.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L9997-L10036) · Schema: tools/list.

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
    "daily_min_spend_target": {
      "default": 0,
      "title": "Daily Min Spend Target",
      "type": "integer"
    },
    "daily_spend_cap": {
      "default": 0,
      "title": "Daily Spend Cap",
      "type": "integer"
    },
    "lifetime_min_spend_target": {
      "default": 0,
      "title": "Lifetime Min Spend Target",
      "type": "integer"
    },
    "lifetime_spend_cap": {
      "default": 0,
      "title": "Lifetime Spend Cap",
      "type": "integer"
    }
  },
  "required": [
    "adset_id"
  ],
  "title": "meta_ads_set_adset_budget_guardrailsArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_ad_suggestions-280d4163"></a>

## meta_ads_ad_suggestions

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_get, r.get('importance', 'LOW').upper, by\_importance.setdefault(imp, \[\]).append, r.get, by\_importance.setdefault.

```text
[READ] Meta Ads tool. Get Meta's automated ad suggestions and recommendations for an account. Returns recommendations for budget increases, creative refresh, audience expansion, etc. Args: account_id: Ad account ID. Leave blank for .env default. objective: Campaign objective to filter recommendations. Default OUTCOME_SALES.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L10049-L10090) · Schema: tools/list.

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
    "objective": {
      "default": "OUTCOME_SALES",
      "title": "Objective",
      "type": "string"
    }
  },
  "title": "meta_ads_ad_suggestionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_apply_recommendation-8996db21"></a>

## meta_ads_apply_recommendation

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_post, require\_editor.

```text
[WRITE] Meta Ads tool. Apply a Meta recommendation (e.g. budget increase, audience expansion) automatically. Args: recommendation_id: Recommendation ID from meta_ads_ad_suggestions (required).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L10093-L10104) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "recommendation_id": {
      "title": "Recommendation Id",
      "type": "string"
    }
  },
  "required": [
    "recommendation_id"
  ],
  "title": "meta_ads_apply_recommendationArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_account_diagnostics-8b94a5de"></a>

## meta_ads_account_diagnostics

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_get, isinstance, pixels.get, acct\_info.get, bool, camps.get.

```text
[READ] Meta Ads tool. Get a full diagnostic report for an ad account: spending limits, status, active campaigns, pixel health, and recent issues — all in one call. Args: account_id: Ad account ID. Leave blank for .env default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L10107-L10179) · Schema: tools/list.

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
  "title": "meta_ads_account_diagnosticsArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_sync_batch-3cec8238"></a>

## meta_ads_sync_batch

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, requests.post, resp.json, enumerate, isinstance, parsed.append, json.loads, sum.

```text
[READ] Meta Ads tool. Run up to 50 Graph API calls in a single synchronous batch request. Faster than N individual calls for dependent chains. Supports JSONPath references between steps: use {result=step_name:$.id} to pass the ID from step N to step N+1. Args: operations: JSON array of operations. Each needs 'method', 'relative_url', and optionally 'body' and 'name'. Example: '[{"method":"GET","relative_url":"me","name":"get_me"}, {"method":"GET","relative_url":"me/accounts"}]'
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L10182-L10231) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "operations": {
      "title": "Operations",
      "type": "string"
    }
  },
  "required": [
    "operations"
  ],
  "title": "meta_ads_sync_batchArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_create_advantage_plus_creative-90db6ac0"></a>

## meta_ads_create_advantage_plus_creative

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, require\_editor, json.loads, \_post.

```text
[WRITE] Meta Ads tool. Create an Advantage+ (dynamic) ad creative using asset_feed_spec. asset_feed_spec lets you provide multiple headlines, bodies, images, videos, and CTAs so Meta's AI can mix-and-match for best performance per user. Args: account_id: Ad account ID. Leave blank for .env default. page_id: Facebook Page ID that the ad will come from. Run meta_ads_pages to list the Pages every connected login can reach. asset_feed_spec: JSON object. Keys: bodies (array of {text}), titles (array of {text}), link_urls (array of {website_url, display_url}), images (array of {hash}), videos (array of {video_id, thumbnail_hash}), call_to_action_types (array of strings like LEARN_MORE, SHOP_NOW). Example: '{"bodies":[{"text":"Try now"}],"titles":[{"text":"Best deal"}], "call_to_action_types":["LEARN_MORE"]}' name: Creative name. degrees_of_freedom: Optional JSON to enable/disable specific transformations. Example: '{"creative_features_spec":{"standard_enhancements":{"enroll_status":"OPT_IN"}}}'
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L10238-L10284) · Schema: tools/list.

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
    "page_id": {
      "title": "Page Id",
      "type": "string"
    },
    "asset_feed_spec": {
      "title": "Asset Feed Spec",
      "type": "string"
    },
    "name": {
      "default": "Advantage+ Creative",
      "title": "Name",
      "type": "string"
    },
    "degrees_of_freedom": {
      "default": "",
      "title": "Degrees Of Freedom",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "page_id",
    "asset_feed_spec"
  ],
  "title": "meta_ads_create_advantage_plus_creativeArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_boost_existing_post-a0ef3c63"></a>

## meta_ads_boost_existing_post

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_post, creative\_result.get, require\_editor, str(post\_id).startswith.

```text
[WRITE] Meta Ads tool. Boost an existing organic Facebook Page post as an ad using object_story_id. This creates an ad creative referencing the post, then creates an ad in the given adset. The post keeps its existing likes/comments/shares (social proof). Args: account_id: Ad account ID. Leave blank for .env default. page_id: Facebook Page ID that owns the post. Run meta_ads_pages to list the Pages every connected login can reach. post_id: The Facebook post ID (the numeric part after the page ID, or full post ID like 123_456). campaign_id: Campaign to place the boosted post ad in. adset_id: Ad set to place the ad in. ad_name: Name for the ad (default: 'Boosted Post').
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L10291-L10342) · Schema: tools/list.

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
    "page_id": {
      "title": "Page Id",
      "type": "string"
    },
    "post_id": {
      "title": "Post Id",
      "type": "string"
    },
    "campaign_id": {
      "title": "Campaign Id",
      "type": "string"
    },
    "adset_id": {
      "title": "Adset Id",
      "type": "string"
    },
    "ad_name": {
      "default": "Boosted Post",
      "title": "Ad Name",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "page_id",
    "post_id",
    "campaign_id",
    "adset_id"
  ],
  "title": "meta_ads_boost_existing_postArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_create_leadgen_form-43963588"></a>

## meta_ads_create_leadgen_form

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_post\_with\_token, require\_editor, \_json\_loads\_or\_error, \_page\_access\_token, token\_info.get, field.strip().upper, \_lead\_form\_error\_response.

```text
[WRITE] Meta Ads tool. Create a Facebook Lead Gen form on a Page. Args: page_id: Facebook Page ID or connected Page name. Use meta_ads_find_page if unsure. name: Internal name for the form. privacy_policy_url: URL to your privacy policy (required by Meta). questions: Optional JSON array of question objects. Each has 'type' (built-in: FULL_NAME, EMAIL, PHONE, CITY, COMPANY_NAME, JOB_TITLE, etc.) or for custom questions: {"type":"CUSTOM","label":"Your question","key":"custom_key"}. Example: '[{"type":"FULL_NAME"},{"type":"EMAIL"},{"type":"PHONE"}]' page_access_token: Optional Page-level access token. Leave blank to auto-discover from connected Meta Pages. thank_you_message: Message shown after submission. Defaults to generic. locale: Form locale, e.g. en_US, he_IL. follow_up_action_url: URL to redirect after form submit. context_card_title: Optional intro card title shown before the form. context_card_content: Optional intro card body text. standard_fields_csv: Built-in fields to use when questions is blank. Default FULL_NAME,EMAIL,PHONE. privacy_policy_link_text: Link text for the privacy policy. thank_you_button_type: Thank-you CTA type. Default VIEW_WEBSITE. thank_you_button_text: Thank-you CTA button text. Default Visit Website.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L10349-L10428) · Schema: tools/list.

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
    "privacy_policy_url": {
      "title": "Privacy Policy Url",
      "type": "string"
    },
    "questions": {
      "default": "",
      "title": "Questions",
      "type": "string"
    },
    "page_access_token": {
      "default": "",
      "title": "Page Access Token",
      "type": "string"
    },
    "thank_you_message": {
      "default": "",
      "title": "Thank You Message",
      "type": "string"
    },
    "locale": {
      "default": "en_US",
      "title": "Locale",
      "type": "string"
    },
    "follow_up_action_url": {
      "default": "",
      "title": "Follow Up Action Url",
      "type": "string"
    },
    "context_card_title": {
      "default": "",
      "title": "Context Card Title",
      "type": "string"
    },
    "context_card_content": {
      "default": "",
      "title": "Context Card Content",
      "type": "string"
    },
    "standard_fields_csv": {
      "default": "FULL_NAME,EMAIL,PHONE",
      "title": "Standard Fields Csv",
      "type": "string"
    },
    "privacy_policy_link_text": {
      "default": "Privacy Policy",
      "title": "Privacy Policy Link Text",
      "type": "string"
    },
    "thank_you_button_type": {
      "default": "VIEW_WEBSITE",
      "title": "Thank You Button Type",
      "type": "string"
    },
    "thank_you_button_text": {
      "default": "Visit Website",
      "title": "Thank You Button Text",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "name",
    "privacy_policy_url"
  ],
  "title": "meta_ads_create_leadgen_formArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_create_lead_form-6d64d401"></a>

## meta_ads_create_lead_form

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_json\_string\_arg, meta\_ads\_create\_leadgen\_form, require\_editor, missing.append.

```text
[WRITE] Create a lead form on a connected Facebook Page. Requires page_id, name, and privacy_policy_url. questions may be a JSON string or JSON array. If page_id is unknown, call meta_ads_find_page or meta_ads_pages first. For complete lead ads, prefer meta_ads_create_lead_form_and_paused_ad.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L10431-L10486) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "default": "",
      "title": "Page Id",
      "type": "string"
    },
    "name": {
      "default": "",
      "title": "Name",
      "type": "string"
    },
    "privacy_policy_url": {
      "default": "",
      "title": "Privacy Policy Url",
      "type": "string"
    },
    "standard_fields_csv": {
      "default": "FULL_NAME,EMAIL,PHONE",
      "title": "Standard Fields Csv",
      "type": "string"
    },
    "questions": {
      "default": "",
      "title": "Questions"
    },
    "thank_you_message": {
      "default": "",
      "title": "Thank You Message",
      "type": "string"
    },
    "locale": {
      "default": "en_US",
      "title": "Locale",
      "type": "string"
    },
    "follow_up_action_url": {
      "default": "",
      "title": "Follow Up Action Url",
      "type": "string"
    },
    "context_card_title": {
      "default": "",
      "title": "Context Card Title",
      "type": "string"
    },
    "context_card_content": {
      "default": "",
      "title": "Context Card Content",
      "type": "string"
    },
    "page_access_token": {
      "default": "",
      "title": "Page Access Token",
      "type": "string"
    },
    "thank_you_button_type": {
      "default": "VIEW_WEBSITE",
      "title": "Thank You Button Type",
      "type": "string"
    },
    "thank_you_button_text": {
      "default": "Visit Website",
      "title": "Thank You Button Text",
      "type": "string"
    }
  },
  "title": "meta_ads_create_lead_formArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_list_leadgen_forms-6c8ecf4d"></a>

## meta_ads_list_leadgen_forms

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_get\_with\_token, \_page\_access\_token, token\_info.get, \_lead\_form\_error\_response.

```text
[READ] Meta Ads tool. List all lead gen forms for a Facebook Page. Args: page_id: Facebook Page ID or connected Page name. Use meta_ads_find_page if unsure. page_access_token: Optional Page-level access token. Leave blank to auto-discover from connected Meta Pages.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L10489-L10506) · Schema: tools/list.

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
  "title": "meta_ads_list_leadgen_formsArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_create_lead_ad_creative-71d07b5a"></a>

## meta_ads_create_lead_ad_creative

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_post, require\_editor.

```text
[WRITE] Meta Ads tool. Create a Meta lead ad creative from an existing lead form ID. Args: account_id: Meta ad account ID. page_id: Facebook Page ID. Run meta_ads_pages to list the Pages every connected login can reach. form_id: Lead form ID returned by meta_ads_create_lead_form. name: Creative name. message: Primary ad text. headline: Lead ad headline. link_description: Optional description. call_to_action_type: CTA type. Default SIGN_UP. image_hash: Optional image hash from Meta ads library. image_url: Optional public image URL. link_url: Link value for lead ad story spec. Default https://fb.me/.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L10509-L10558) · Schema: tools/list.

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
    "page_id": {
      "title": "Page Id",
      "type": "string"
    },
    "form_id": {
      "title": "Form Id",
      "type": "string"
    },
    "name": {
      "title": "Name",
      "type": "string"
    },
    "message": {
      "title": "Message",
      "type": "string"
    },
    "headline": {
      "title": "Headline",
      "type": "string"
    },
    "link_description": {
      "default": "",
      "title": "Link Description",
      "type": "string"
    },
    "call_to_action_type": {
      "default": "SIGN_UP",
      "title": "Call To Action Type",
      "type": "string"
    },
    "image_hash": {
      "default": "",
      "title": "Image Hash",
      "type": "string"
    },
    "image_url": {
      "default": "",
      "title": "Image Url",
      "type": "string"
    },
    "link_url": {
      "default": "https://fb.me/",
      "title": "Link Url",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "page_id",
    "form_id",
    "name",
    "message",
    "headline"
  ],
  "title": "meta_ads_create_lead_ad_creativeArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_create_lead_ad_from_form-f5e3e21c"></a>

## meta_ads_create_lead_ad_from_form

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, meta\_ads\_create\_lead\_ad\_creative, json.loads, meta\_ads\_create\_ad, require\_editor, creative.get.

```text
[WRITE] Meta Ads tool. Create lead ad creative from form_id, then create a Meta ad. Default status PAUSED. Use this only when you already have both a working form_id and adset_id. For the normal guided test flow, prefer meta_ads_create_lead_form_and_paused_ad.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L10561-L10608) · Schema: tools/list.

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
    "page_id": {
      "title": "Page Id",
      "type": "string"
    },
    "form_id": {
      "title": "Form Id",
      "type": "string"
    },
    "adset_id": {
      "title": "Adset Id",
      "type": "string"
    },
    "creative_name": {
      "title": "Creative Name",
      "type": "string"
    },
    "ad_name": {
      "title": "Ad Name",
      "type": "string"
    },
    "message": {
      "title": "Message",
      "type": "string"
    },
    "headline": {
      "title": "Headline",
      "type": "string"
    },
    "status": {
      "default": "PAUSED",
      "title": "Status",
      "type": "string"
    },
    "link_description": {
      "default": "",
      "title": "Link Description",
      "type": "string"
    },
    "call_to_action_type": {
      "default": "SIGN_UP",
      "title": "Call To Action Type",
      "type": "string"
    },
    "image_hash": {
      "default": "",
      "title": "Image Hash",
      "type": "string"
    },
    "image_url": {
      "default": "",
      "title": "Image Url",
      "type": "string"
    },
    "link_url": {
      "default": "https://fb.me/",
      "title": "Link Url",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "page_id",
    "form_id",
    "adset_id",
    "creative_name",
    "ad_name",
    "message",
    "headline"
  ],
  "title": "meta_ads_create_lead_ad_from_formArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_create_lead_form_and_paused_ad-839354e5"></a>

## meta_ads_create_lead_form_and_paused_ad

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_json\_string\_arg, meta\_ads\_create\_lead\_form, json.loads, meta\_ads\_create\_lead\_ad\_from\_form, require\_editor, form.get, bool.

```text
[WRITE][RECOMMENDED] Complete lead-gen workflow: create lead form, creative, and PAUSED ad. Requires account_id, page_id, adset_id, privacy_policy_url, message, and headline. questions may be a JSON string or JSON array.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L10611-L10677) · Schema: tools/list.

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
    "page_id": {
      "title": "Page Id",
      "type": "string"
    },
    "adset_id": {
      "title": "Adset Id",
      "type": "string"
    },
    "form_name": {
      "title": "Form Name",
      "type": "string"
    },
    "privacy_policy_url": {
      "title": "Privacy Policy Url",
      "type": "string"
    },
    "creative_name": {
      "title": "Creative Name",
      "type": "string"
    },
    "ad_name": {
      "title": "Ad Name",
      "type": "string"
    },
    "message": {
      "title": "Message",
      "type": "string"
    },
    "headline": {
      "title": "Headline",
      "type": "string"
    },
    "standard_fields_csv": {
      "default": "FULL_NAME,EMAIL,PHONE",
      "title": "Standard Fields Csv",
      "type": "string"
    },
    "questions": {
      "default": "",
      "title": "Questions"
    },
    "thank_you_message": {
      "default": "",
      "title": "Thank You Message",
      "type": "string"
    },
    "locale": {
      "default": "en_US",
      "title": "Locale",
      "type": "string"
    },
    "follow_up_action_url": {
      "default": "",
      "title": "Follow Up Action Url",
      "type": "string"
    },
    "image_hash": {
      "default": "",
      "title": "Image Hash",
      "type": "string"
    },
    "image_url": {
      "default": "",
      "title": "Image Url",
      "type": "string"
    },
    "link_url": {
      "default": "https://fb.me/",
      "title": "Link Url",
      "type": "string"
    },
    "page_access_token": {
      "default": "",
      "title": "Page Access Token",
      "type": "string"
    },
    "thank_you_button_type": {
      "default": "VIEW_WEBSITE",
      "title": "Thank You Button Type",
      "type": "string"
    },
    "thank_you_button_text": {
      "default": "Visit Website",
      "title": "Thank You Button Text",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "page_id",
    "adset_id",
    "form_name",
    "privacy_policy_url",
    "creative_name",
    "ad_name",
    "message",
    "headline"
  ],
  "title": "meta_ads_create_lead_form_and_paused_adArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_create_instagram_story-21fd0241"></a>

## meta_ads_create_instagram_story

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, requests.post, create\_resp.json().get, require\_editor, media\_type.upper, container\_params.update, create\_resp.json, publish\_resp.json().get.

```text
[WRITE] Meta Ads tool. Create and publish an Instagram Story (image or video) using the container API. Two-step process: create container → publish. Supports link stickers. Args: ig_user_id: Instagram Business Account ID (from CLIENT_PAGES.md). media_type: IMAGE or VIDEO. media_url: Public URL of the image or video. page_access_token: Page-level access token for the linked Facebook Page. link_url: Optional URL for the link sticker (swipe-up equivalent). sticker_data: Optional JSON for custom sticker overlays.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L10684-L10751) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ig_user_id": {
      "title": "Ig User Id",
      "type": "string"
    },
    "media_type": {
      "title": "Media Type",
      "type": "string"
    },
    "media_url": {
      "title": "Media Url",
      "type": "string"
    },
    "page_access_token": {
      "title": "Page Access Token",
      "type": "string"
    },
    "link_url": {
      "default": "",
      "title": "Link Url",
      "type": "string"
    },
    "sticker_data": {
      "default": "",
      "title": "Sticker Data",
      "type": "string"
    }
  },
  "required": [
    "ig_user_id",
    "media_type",
    "media_url",
    "page_access_token"
  ],
  "title": "meta_ads_create_instagram_storyArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_reach_frequency_prediction-71e7f575"></a>

## meta_ads_reach_frequency_prediction

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_post, isinstance, json.loads.

```text
[READ] Meta Ads tool. Get Reach & Frequency prediction for a campaign before buying. Returns estimated reach, impressions, frequency, and CPM for a given audience + budget + date range. Use this before launching a branding campaign. Args: account_id: Ad account ID. Leave blank for .env default. start_time: Start time as Unix timestamp string (e.g. '1735689600'). end_time: End time as Unix timestamp string. budget: Total budget in account currency smallest unit (cents/agorot). target_spec: JSON targeting spec (same as adset targeting). Example: '{"geo_locations":{"countries":["IL"]},"age_min":25,"age_max":45}' prediction_mode: 0=BASIC (budget→reach), 1=EXPERT (reach→budget). Default: 0. objective: REACH or BRAND_AWARENESS. Default: REACH. frequency_cap: Max impressions per user (e.g. '3'). interval_frequency_cap_reset_period: Hours for frequency cap reset (e.g. '168' for weekly).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L10758-L10802) · Schema: tools/list.

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
    "start_time": {
      "title": "Start Time",
      "type": "string"
    },
    "end_time": {
      "title": "End Time",
      "type": "string"
    },
    "budget": {
      "title": "Budget",
      "type": "string"
    },
    "target_spec": {
      "title": "Target Spec",
      "type": "string"
    },
    "prediction_mode": {
      "default": "0",
      "title": "Prediction Mode",
      "type": "string"
    },
    "objective": {
      "default": "REACH",
      "title": "Objective",
      "type": "string"
    },
    "frequency_cap": {
      "default": "",
      "title": "Frequency Cap",
      "type": "string"
    },
    "interval_frequency_cap_reset_period": {
      "default": "",
      "title": "Interval Frequency Cap Reset Period",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "start_time",
    "end_time",
    "budget",
    "target_spec"
  ],
  "title": "meta_ads_reach_frequency_predictionArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_publisher_block_lists-38bf1f2c"></a>

## meta_ads_publisher_block_lists

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_get.

```text
[READ] Meta Ads tool. List all publisher block lists for an ad account (Brand Safety). Args: account_id: Ad account ID. Leave blank for .env default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L10809-L10817) · Schema: tools/list.

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
  "title": "meta_ads_publisher_block_listsArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_create_publisher_block_list-04dcfdcb"></a>

## meta_ads_create_publisher_block_list

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, require\_editor, json.loads, \_post.

```text
[WRITE] Meta Ads tool. Create a publisher block list to exclude specific websites/apps from your ads. Args: account_id: Ad account ID. Leave blank for .env default. name: Name for the block list. publisher_urls: JSON array of domain strings to block. Example: '["example.com","badsite.net"]'
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L10820-L10840) · Schema: tools/list.

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
    "publisher_urls": {
      "title": "Publisher Urls",
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
    "publisher_urls"
  ],
  "title": "meta_ads_create_publisher_block_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_brand_safety_controls-f3807729"></a>

## meta_ads_brand_safety_controls

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_get.

```text
[READ] Meta Ads tool. Get current brand safety / content suitability controls for an ad account. Returns the account's content filter levels and notification setting. Args: account_id: Ad account ID. Leave blank for .env default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L10843-L10857) · Schema: tools/list.

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
  "title": "meta_ads_brand_safety_controlsArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_create_live_video-83092161"></a>

## meta_ads_create_live_video

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, requests.post, resp.json, require\_editor, resp.json().get.

```text
[WRITE] Meta Ads tool. Create a live video broadcast on a Facebook Page. Returns stream_url and stream_key. After creating, use the returned stream_url to start streaming (e.g. OBS, ffmpeg). Then call meta_ads_publish_live_video to make it public. Args: page_id: Facebook Page ID. Run meta_ads_pages to list the Pages every connected login can reach. page_access_token: Page-level access token. title: Live video title. description: Live video description. status: UNPUBLISHED (default, stream privately first) or LIVE_NOW.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L10864-L10907) · Schema: tools/list.

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
    "status": {
      "default": "UNPUBLISHED",
      "title": "Status",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "page_access_token"
  ],
  "title": "meta_ads_create_live_videoArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_publish_live_video-dec2872c"></a>

## meta_ads_publish_live_video

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, requests.post, require\_editor, resp.json, resp.json().get.

```text
[WRITE] Meta Ads tool. Publish (go live) or end a live video broadcast. Args: live_video_id: The live video ID returned by meta_ads_create_live_video. page_access_token: Page-level access token.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L10910-L10929) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "live_video_id": {
      "title": "Live Video Id",
      "type": "string"
    },
    "page_access_token": {
      "title": "Page Access Token",
      "type": "string"
    }
  },
  "required": [
    "live_video_id",
    "page_access_token"
  ],
  "title": "meta_ads_publish_live_videoArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_end_live_video-492db227"></a>

## meta_ads_end_live_video

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, requests.post, require\_editor, resp.json, resp.json().get.

```text
[READ] Meta Ads tool. End a live video broadcast. Args: live_video_id: The live video ID. page_access_token: Page-level access token.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L10932-L10951) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "live_video_id": {
      "title": "Live Video Id",
      "type": "string"
    },
    "page_access_token": {
      "title": "Page Access Token",
      "type": "string"
    }
  },
  "required": [
    "live_video_id",
    "page_access_token"
  ],
  "title": "meta_ads_end_live_videoArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_product_feeds-2ee3a728"></a>

## meta_ads_product_feeds

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_get.

```text
[READ] Meta Ads tool. List all product feeds in a catalog. Args: catalog_id: Meta product catalog ID.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L10958-L10967) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "catalog_id": {
      "title": "Catalog Id",
      "type": "string"
    }
  },
  "required": [
    "catalog_id"
  ],
  "title": "meta_ads_product_feedsArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_create_product_feed-f69136e8"></a>

## meta_ads_create_product_feed

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, require\_editor, \_post, json.loads.

```text
[WRITE] Meta Ads tool. Create a product feed (data source) for a catalog. Args: catalog_id: Meta product catalog ID. name: Feed name. feed_url: Public URL of the CSV/TSV/XML product feed. schedule: Optional JSON for recurring ingestion schedule. Example: '{"interval":"DAILY","url":"https://...","hour":"6"}' update_schedule: Optional JSON for incremental update schedule.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L10970-L11005) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "catalog_id": {
      "title": "Catalog Id",
      "type": "string"
    },
    "name": {
      "title": "Name",
      "type": "string"
    },
    "feed_url": {
      "title": "Feed Url",
      "type": "string"
    },
    "schedule": {
      "default": "",
      "title": "Schedule",
      "type": "string"
    },
    "update_schedule": {
      "default": "",
      "title": "Update Schedule",
      "type": "string"
    }
  },
  "required": [
    "catalog_id",
    "name",
    "feed_url"
  ],
  "title": "meta_ads_create_product_feedArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_upload_product_feed-34e048c2"></a>

## meta_ads_upload_product_feed

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, require\_editor, \_post.

```text
[WRITE] Meta Ads tool. Trigger an immediate upload/ingestion of a product feed. Args: feed_id: Product feed ID (from meta_ads_product_feeds). feed_url: Public URL to fetch the feed from.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L11008-L11020) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "feed_id": {
      "title": "Feed Id",
      "type": "string"
    },
    "feed_url": {
      "title": "Feed Url",
      "type": "string"
    }
  },
  "required": [
    "feed_id",
    "feed_url"
  ],
  "title": "meta_ads_upload_product_feedArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_update_catalog_product-fc34dda7"></a>

## meta_ads_update_catalog_product

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, require\_editor, json.loads, \_post.

```text
[WRITE] Meta Ads tool. Update a single product in a catalog by retailer ID. Args: catalog_id: Meta product catalog ID. retailer_id: The product's retailer_id (your internal SKU / product ID). updates: JSON object with fields to update. Common fields: name, description, price (in cents, e.g. 9900 for $99), sale_price, availability (in stock/out of stock), url, image_url, condition (new/refurbished/used). Example: '{"price":9900,"availability":"in stock"}'
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L11023-L11047) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "catalog_id": {
      "title": "Catalog Id",
      "type": "string"
    },
    "retailer_id": {
      "title": "Retailer Id",
      "type": "string"
    },
    "updates": {
      "title": "Updates",
      "type": "string"
    }
  },
  "required": [
    "catalog_id",
    "retailer_id",
    "updates"
  ],
  "title": "meta_ads_update_catalog_productArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_set_page_cta-93a4d26a"></a>

## meta_ads_set_page_cta

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, requests.post, require\_editor, resp.json, resp.json().get.

```text
[WRITE] Meta Ads tool. Set or update the call-to-action button on a Facebook Page. Args: page_id: Facebook Page ID. Run meta_ads_pages to list the Pages every connected login can reach. page_access_token: Page-level access token. cta_type: CTA type. Options: CALL_NOW, CONTACT_US, SEND_MESSAGE, BOOK_NOW, SHOP_NOW, SIGN_UP, WATCH_VIDEO, SEND_EMAIL, LEARN_MORE, GET_DIRECTIONS, REQUEST_APPOINTMENT, GET_QUOTE, PLAY_GAME. cta_value: Associated value — phone number for CALL_NOW, URL for SHOP_NOW/SIGN_UP/etc. For SEND_MESSAGE leave empty (opens Messenger).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L11054-L11093) · Schema: tools/list.

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
    "cta_type": {
      "title": "Cta Type",
      "type": "string"
    },
    "cta_value": {
      "default": "",
      "title": "Cta Value",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "page_access_token",
    "cta_type"
  ],
  "title": "meta_ads_set_page_ctaArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_page_cta-d503e45b"></a>

## meta_ads_page_cta

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, requests.get, resp.json, resp.json().get.

```text
[READ] Meta Ads tool. Get the current CTA button set on a Facebook Page. Args: page_id: Facebook Page ID. Run meta_ads_pages to list the Pages every connected login can reach. page_access_token: Page-level access token.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L11096-L11111) · Schema: tools/list.

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
    }
  },
  "required": [
    "page_id",
    "page_access_token"
  ],
  "title": "meta_ads_page_ctaArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_list_system_users-77f413e1"></a>

## meta_ads_list_system_users

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_get.

```text
[READ] Meta Ads tool. List all system users in a Business Manager. System users are non-human accounts used for API integrations and automation. Args: business_id: Business Manager ID.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L11118-L11129) · Schema: tools/list.

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
  "title": "meta_ads_list_system_usersArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_create_system_user-9242d3bf"></a>

## meta_ads_create_system_user

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, require\_editor, \_post.

```text
[WRITE] Meta Ads tool. Create a system user in a Business Manager. Args: business_id: Business Manager ID. name: Display name for the system user. role: ADMIN or EMPLOYEE. Default: EMPLOYEE.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L11132-L11149) · Schema: tools/list.

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
    "name": {
      "title": "Name",
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
    "name"
  ],
  "title": "meta_ads_create_system_userArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_system_user_token-e57fd355"></a>

## meta_ads_system_user_token

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, require\_editor, \_post, \_sha256.

```text
[READ] Meta Ads tool. Generate an access token for a system user. The token never expires (unless permissions are revoked). Ideal for automation. Args: system_user_id: System user ID. app_id: Facebook App ID. app_secret: Facebook App Secret. scope: Comma-separated permissions to request.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L11152-L11174) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "system_user_id": {
      "title": "System User Id",
      "type": "string"
    },
    "app_id": {
      "title": "App Id",
      "type": "string"
    },
    "app_secret": {
      "title": "App Secret",
      "type": "string"
    },
    "scope": {
      "default": "ads_management,pages_manage_posts,pages_read_engagement",
      "title": "Scope",
      "type": "string"
    }
  },
  "required": [
    "system_user_id",
    "app_id",
    "app_secret"
  ],
  "title": "meta_ads_system_user_tokenArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_assign_system_user_to_account-91fc04ff"></a>

## meta_ads_assign_system_user_to_account

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, require\_editor, \_post.

```text
[WRITE] Meta Ads tool. Assign a system user to an ad account with a specific role. Args: account_id: Ad account ID. system_user_id: System user ID. role: ADMIN, ADVERTISER, or ANALYST. Default: ANALYST.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L11177-L11195) · Schema: tools/list.

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
    "system_user_id": {
      "title": "System User Id",
      "type": "string"
    },
    "role": {
      "default": "ANALYST",
      "title": "Role",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "system_user_id"
  ],
  "title": "meta_ads_assign_system_user_to_accountArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_create_saved_audience-e718ee70"></a>

## meta_ads_create_saved_audience

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, require\_editor, \_post, isinstance, json.loads.

```text
[WRITE] Meta Ads tool. Save a reusable targeting template (Saved Audience) in Meta Ads. Saved audiences can be reused across ad sets without re-entering targeting each time. Accessible in Ads Manager under Audiences > Saved Audiences. Args: name: Display name for the saved audience (required). targeting: Full targeting spec as JSON string. Example: '{"age_min":25,"age_max":45,"genders":[1], "geo_locations":{"countries":["IL"]}, "interests":[{"id":"6003139266461","name":"Real estate"}]}' account_id: Ad account ID (e.g. act_123456). Leave blank for default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L11202-L11230) · Schema: tools/list.

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
    "targeting": {
      "title": "Targeting",
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
    "targeting"
  ],
  "title": "meta_ads_create_saved_audienceArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_upload_enhanced_conversions-fe4bfcad"></a>

## meta_ads_upload_enhanced_conversions

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, require\_editor, hashlib.sha256(val.strip().lower().encode()).hexdigest, ev.get, upload\_data.append, \_post, isinstance, json.loads.

```text
[WRITE] Meta Ads tool. Upload offline or enhanced conversion data with hashed PII for Meta matching. Used for offline purchase matching, CRM uploads, and enhanced conversions. PII fields (email, phone, fn, ln) are auto-hashed with SHA-256 before sending. Args: pixel_id: Meta Pixel (or dataset) ID (required). events: JSON array of conversion events. Each event supports: - event_name: PURCHASE, LEAD, COMPLETE_REGISTRATION, etc. (required) - event_time: Unix timestamp (required) - value: Order value as float - currency: ISO currency code, e.g. ILS, USD - order_id: Unique order/transaction ID (for deduplication) - email: Customer email (will be SHA-256 hashed) - phone: Customer phone with country code (will be hashed) - fn: First name (will be hashed) - ln: Last name (will be hashed) - external_id: Your internal customer ID (will be hashed) - country: Two-letter country code (will be hashed) - city: City (will be hashed) - zip: Postal code (will be hashed) Example: '[{"event_name":"PURCHASE","event_time":1700000000, "value":250.0,"currency":"ILS","order_id":"ORD-001", "email":"customer@example.com","phone":"+972501234567"}]' upload_tag: Optional label to identify this upload batch in reporting. account_id: Ad account ID. Leave blank for default.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L11233-L11315) · Schema: tools/list.

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
    "events": {
      "title": "Events",
      "type": "string"
    },
    "upload_tag": {
      "default": "",
      "title": "Upload Tag",
      "type": "string"
    },
    "account_id": {
      "default": "",
      "title": "Account Id",
      "type": "string"
    }
  },
  "required": [
    "pixel_id",
    "events"
  ],
  "title": "meta_ads_upload_enhanced_conversionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_campaign_change_history-26f9865c"></a>

## meta_ads_campaign_change_history

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_dt.date.today, \_get, \_fetch\_all\_activities, changes.sort, isinstance, meta\_info.get, \_format\_activity.

```text
[READ] Meta Ads tool. Retrieve the full change history of a Meta Ads campaign. Shows who changed what and when — budget, status, name, bids, and more. Uses the account-level /activities endpoint (correct for API v22+) filtered by campaign ID and object_type=CAMPAIGN. Args: campaign_id: The campaign ID to inspect (required). account_id: Ad account ID (e.g. act_123456 or just 123456). Leave blank to use the default account from env. start_date: Start date YYYY-MM-DD. Default: 30 days ago. end_date: End date YYYY-MM-DD. Default: today. Returns JSON with campaign_name and changes list sorted newest-first. Each change: date, user, action, from, to, object_name.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L11491-L11536) · Schema: tools/list.

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
      "default": "",
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
    }
  },
  "required": [
    "campaign_id"
  ],
  "title": "meta_ads_campaign_change_historyArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_adset_change_history-cd79d5ff"></a>

## meta_ads_adset_change_history

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_dt.date.today, \_get, \_fetch\_all\_activities, changes.sort, isinstance, meta\_info.get, \_format\_activity.

```text
[READ] Meta Ads tool. Retrieve the full change history of a Meta Ads ad set. Shows who changed what and when — budget, targeting, status, bidding, and more. Uses the account-level /activities endpoint (correct for API v22+) filtered by ad set ID and object_type=ADSET. Args: adset_id: The ad set ID to inspect (required). account_id: Ad account ID (e.g. act_123456 or just 123456). Leave blank to use the default account from env. start_date: Start date YYYY-MM-DD. Default: 30 days ago. end_date: End date YYYY-MM-DD. Default: today. Returns JSON with adset_name and changes list sorted newest-first. Each change: date, user, action, from, to, object_name.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L11539-L11584) · Schema: tools/list.

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
    "account_id": {
      "default": "",
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
    }
  },
  "required": [
    "adset_id"
  ],
  "title": "meta_ads_adset_change_historyArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_ad_change_history-d1030033"></a>

## meta_ads_ad_change_history

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_dt.date.today, \_get, \_fetch\_all\_activities, changes.sort, isinstance, meta\_info.get, \_format\_activity.

```text
[READ] Meta Ads tool. Retrieve the full change history of a specific Meta Ads ad (creative level). Shows who changed what and when — creative, status, tracking, bids, and more. Uses the account-level /activities endpoint filtered by ad ID and object_type=AD. Args: ad_id: The ad ID to inspect (required). account_id: Ad account ID (e.g. act_123456 or just 123456). Leave blank to use the default account from env. start_date: Start date YYYY-MM-DD. Default: 30 days ago. end_date: End date YYYY-MM-DD. Default: today. Returns JSON with ad_name and changes list sorted newest-first. Each change: date, user, action, event_type, from, to, object_name, object_id.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L11587-L11631) · Schema: tools/list.

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
    "account_id": {
      "default": "",
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
    }
  },
  "required": [
    "ad_id"
  ],
  "title": "meta_ads_ad_change_historyArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_account_change_history-807b4856"></a>

## meta_ads_account_change_history

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_dt.date.today, min, \_fetch\_all\_activities, changes.sort, max, isinstance, \_format\_activity.

```text
[READ] Meta Ads tool. Retrieve the full change history across the ENTIRE Meta Ads account in one call. The fastest way to audit what changed, who changed it, and when — across all campaigns, ad sets, and ads simultaneously. No need to know specific IDs in advance. Args: account_id: Ad account ID (e.g. act_123456 or just 123456). Leave blank to use the default account from env. start_date: Start date YYYY-MM-DD. Default: 7 days ago. end_date: End date YYYY-MM-DD. Default: today. object_type: Optional filter — CAMPAIGN, ADSET, or AD. Leave blank to return ALL object types. limit: Max number of changes to return (default 500, max 2000). Returns JSON with: - period: date range queried - total_changes: total count - by_user: summary of changes per user (name → count) - by_type: summary of changes per event type (Hebrew label → count) - changes: full list sorted newest-first, each entry has: date, user, action, event_type, from, to, object_name, object_id
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L11634-L11700) · Schema: tools/list.

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
    "object_type": {
      "default": "",
      "title": "Object Type",
      "type": "string"
    },
    "limit": {
      "default": 500,
      "title": "Limit",
      "type": "integer"
    }
  },
  "title": "meta_ads_account_change_historyArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_check_payment_errors-5b294a6f"></a>

## meta_ads_check_payment_errors

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_get, acct\_data.get, \_ACCOUNT\_STATUS\_LABELS.get, isinstance, pm\_data.get, pm.get.

```text
[READ] Meta Ads tool. Check if a Meta Ads account has any active payment errors or billing issues. Inspects account status codes and payment method statuses to detect: - Unpaid debt (UNSETTLED / status 3) - Declined payment methods - Expired cards - Grace period warnings - Blocked accounts due to non-payment (status 101) Args: account_id: Ad account ID. Leave blank to use the default account. Returns a structured JSON with has_payment_error, severity (ok/warning/critical), account_status details, payment methods list, and a recommendation in Hebrew.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L11703-L11788) · Schema: tools/list.

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
  "title": "meta_ads_check_payment_errorsArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_bulk_payment_check-a2edd5a7"></a>

## meta_ads_bulk_payment_check

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, a.strip, data.get, time.sleep, account\_ids.split, meta\_ads\_check\_payment\_errors, json.loads, results.append.

```text
[WRITE] Meta Ads tool. Check payment errors across multiple Meta Ads accounts at once. Runs meta_ads_check_payment_errors on each account with a 0.5s delay between calls to respect rate limits. Returns a summary of all issues found. Args: account_ids: Comma-separated list of ad account IDs. Example: "act_111,act_222,act_333" or "111,222,333" Returns a JSON summary with total checked, number of issues found, and a list of accounts with problems (severity + recommendation).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L11791-L11843) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_ids": {
      "title": "Account Ids",
      "type": "string"
    }
  },
  "required": [
    "account_ids"
  ],
  "title": "meta_ads_bulk_payment_checkArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_find_account-5dacaeb8"></a>

## meta_ads_find_account

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, query.strip().lower, scored.sort, \_get, all\_accounts.extend, acct.get, f'{name} {acct\_id} {currency}'.lower, name.lower.

```text
[READ] Meta Ads tool. Find a Meta Ads account by partial name, ID fragment, or currency. Searches across ALL accounts (130+) using fuzzy partial matching. Checks user accounts and optionally business accounts. Case-insensitive. Hebrew, English, and mixed names all supported. Examples of valid queries: - "רוקט" → matches "Rocket Digital | רוקט" - "ynet" → matches "Ynet – News" - "269" → matches account IDs containing "269" - "ILS" → all ILS-currency accounts - "רמי לוי" → matches partial client name Args: query: Any partial string to match against account name or ID (required). user_id: Facebook user ID. Default: "me". business_id: Optional Business Manager ID to also search business accounts. Returns a list of matching accounts with id, name, status, and currency, plus the total count of matches.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L11850-L11970) · Schema: tools/list.

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
    "user_id": {
      "default": "me",
      "title": "User Id",
      "type": "string"
    },
    "business_id": {
      "default": "",
      "title": "Business Id",
      "type": "string"
    }
  },
  "required": [
    "query"
  ],
  "title": "meta_ads_find_accountArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_dashboard-04aa6b15"></a>

## meta_ads_dashboard

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_get, safe, float, ov.get, sum, sorted.

```text
[READ] Meta Ads tool. Generate a complete, beautiful Hebrew RTL Meta Ads dashboard as an HTML artifact. Fetches overview, campaigns, daily trend, demographics, and placements data, then returns a fully self-contained HTML page (zero external dependencies — all charts drawn with pure Canvas API so they work inside Claude's sandbox). Claude should display the returned HTML as an artifact. Args: start_date: Start date YYYY-MM-DD. Defaults to 28 days ago. end_date: End date YYYY-MM-DD. Defaults to today. account_id: Ad account ID. Leave blank to use META_AD_ACCOUNT_ID from .env. dashboard_title: Custom dashboard title in Hebrew. Optional.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L11977-L12624) · Schema: tools/list.

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
    "dashboard_title": {
      "default": "",
      "title": "Dashboard Title",
      "type": "string"
    }
  },
  "title": "meta_ads_dashboardArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_pdf-3f273264"></a>

## meta_ads_pdf

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_get, safe, float, ov.get, sum, sorted.

```text
[READ] Meta Ads tool. Generate a complete Meta Ads PDF report saved to disk. Creates an A3 landscape dark-themed PDF with KPI summary, daily trend chart, platform distribution donut, demographics bar chart, and campaign performance table. Returns the path to the saved PDF file. Args: start_date: YYYY-MM-DD. Defaults to 28 days ago. end_date: YYYY-MM-DD. Defaults to today. account_id: Ad account ID. Leave blank to use META_AD_ACCOUNT_ID from .env. output_path: Full path for the PDF. Defaults to ~/Desktop/meta_report_YYYYMMDD.pdf
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L12631-L12883) · Schema: tools/list.

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
    "output_path": {
      "default": "",
      "title": "Output Path",
      "type": "string"
    }
  },
  "title": "meta_ads_pdfArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_dashboard_figma-a0aa0833"></a>

## meta_ads_dashboard_figma

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, \_resolve\_meta\_account, \_get, safe, float, ov.get, sum, sorted.

```text
[READ] Meta Ads tool. Generate a premium Figma-level Meta Ads dashboard as an HTML artifact. Same data as meta_ads_dashboard but with a completely redesigned UI: glassmorphism cards, Inter font, gradient glow KPIs, premium typography, animated counters, and a dark-navy design system. Args: start_date: YYYY-MM-DD. Defaults to 28 days ago. end_date: YYYY-MM-DD. Defaults to today. account_id: Ad account ID. Leave blank to use META_AD_ACCOUNT_ID from .env. dashboard_title: Custom title. Optional.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L12886-L13588) · Schema: tools/list.

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
    "dashboard_title": {
      "default": "",
      "title": "Dashboard Title",
      "type": "string"
    }
  },
  "title": "meta_ads_dashboard_figmaArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_render_report_pdf-c7b86565"></a>

## meta_ads_render_report_pdf

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, bool, plt.rcParams.update, sum, plt.figure, fig.patch.set\_facecolor, gridspec.GridSpec, fig.add\_subplot.

```text
[WRITE] Meta Ads tool. Generate a universal PDF report from any structured data. Pass data from ANY source (Google Ads, Meta, Analytics, GA4, etc.) and get a beautiful dark-themed PDF saved to disk. Args: title: Report title (e.g. "Google Ads Weekly Report"). metrics: JSON list of KPI objects: [{"label":"Spend","value":"$1,234","color":"#7c3aed"}, ...] color is optional (defaults cycle through palette). table_headers: JSON list of column names: ["Campaign","Spend","Clicks"] table_rows: JSON list of rows (list of lists): [["Campaign A","$500","1,200"],["Campaign B","$300","800"]] time_series: JSON object with optional line chart data: {"labels":["01/01","02/01",...], "series":[{"name":"Spend","values":[100,200,...],"color":"#7c3aed"}, {"name":"Clicks","values":[50,80,...],"color":"#06b6d4","secondary":true}]} subtitle: Optional date range or description shown under the title. output_path: Where to save the PDF. Defaults to ~/Desktop/<title>_YYYYMMDD.pdf
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L13595-L13767) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "title": {
      "title": "Title",
      "type": "string"
    },
    "metrics": {
      "default": "[]",
      "title": "Metrics",
      "type": "string"
    },
    "table_headers": {
      "default": "[]",
      "title": "Table Headers",
      "type": "string"
    },
    "table_rows": {
      "default": "[]",
      "title": "Table Rows",
      "type": "string"
    },
    "time_series": {
      "default": "{}",
      "title": "Time Series",
      "type": "string"
    },
    "subtitle": {
      "default": "",
      "title": "Subtitle",
      "type": "string"
    },
    "output_path": {
      "default": "",
      "title": "Output Path",
      "type": "string"
    }
  },
  "required": [
    "title"
  ],
  "title": "meta_ads_render_report_pdfArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ads_render_report_html-baa83303"></a>

## meta_ads_render_report_html

Handler: Other product (tools/meta\_ads.py): calls mcp.tool, bool, enumerate, json.loads, m.get, ''.join, ts.get, date.today.

```text
[WRITE] Meta Ads tool. Generate a premium Figma-level HTML dashboard from any structured data. Works with ANY data source. Claude should display the returned HTML as an artifact. Args: title: Dashboard title. metrics: JSON list: [{"label":"Spend","value":"$1,234","color":"#7c3aed"}, ...] table_headers: JSON list of column names. table_rows: JSON list of rows (list of lists). time_series: JSON: {"labels":[...],"series":[{"name":"X","values":[...],"color":"#hex","secondary":true/false}]} subtitle: Date range or description shown under the title. color_accent: Primary accent color for the header gradient (hex).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ads.py#L13770-L14055) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "title": {
      "title": "Title",
      "type": "string"
    },
    "metrics": {
      "default": "[]",
      "title": "Metrics",
      "type": "string"
    },
    "table_headers": {
      "default": "[]",
      "title": "Table Headers",
      "type": "string"
    },
    "table_rows": {
      "default": "[]",
      "title": "Table Rows",
      "type": "string"
    },
    "time_series": {
      "default": "{}",
      "title": "Time Series",
      "type": "string"
    },
    "subtitle": {
      "default": "",
      "title": "Subtitle",
      "type": "string"
    },
    "color_accent": {
      "default": "#7c3aed",
      "title": "Color Accent",
      "type": "string"
    }
  },
  "required": [
    "title"
  ],
  "title": "meta_ads_render_report_htmlArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ad_library_check_access-8677351f"></a>

## meta_ad_library_check_access

Handler: Other product (tools/meta\_ad\_library.py): calls mcp.tool, \_token, \_archive\_get, probe.get, \_json, bool, stats, sorted.

```text
[RECOMMENDED] Check whether Meta's Ad Library can be read, and how.

Run this first in any Meta competitor-research session, and whenever a
search comes back empty or refused. It reports which token resolved, whether
the archive answers, and which countries actually return commercial ads --
so an empty search can be explained instead of guessed at. Reads nothing
from the user's own ad account.

```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ad_library.py#L434-L487) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "meta_ad_library_check_accessArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ad_library_search_ads-4e5d35ff"></a>

## meta_ad_library_search_ads

Handler: Other product (tools/meta\_ad\_library.py): calls mcp.tool, \_run\_query, \_json, \_countries, (ad\_type or 'ALL').upper, (ad\_active\_status or 'ACTIVE').upper, ','.join, max.

```text
[RECOMMENDED] Search Meta's public Ad Library by keyword.

Searches ad copy across advertisers. Note that a keyword search misses
brands whose ads never mention their own name -- use
meta_ad_library_find_advertiser when you want everything one company runs.

COVERAGE: ordinary commercial ads come back only for EU countries and GB.
For the US, Israel, Canada and elsewhere Meta's API carries political and
social-issue ads only, and a commercial search there returns empty. That is
not an error; read the `note` in the response and follow its `next_step`.

Args:
    search_terms: What to search for in ad text, e.g. 'house painting'.
    countries: Two-letter country codes, comma separated, e.g. 'IE' or
        'DE,FR'. Use an EU country or 'GB' for commercial ads.
    ad_type: 'ALL' (default), 'POLITICAL_AND_ISSUE_ADS', 'HOUSING_ADS',
        'EMPLOYMENT_ADS', 'FINANCIAL_PRODUCTS_AND_SERVICES_ADS'.
    ad_active_status: 'ACTIVE' (default), 'INACTIVE' or 'ALL'.
    media_type: Optional 'IMAGE', 'VIDEO', 'MEME', 'NONE'.
    publisher_platforms: Optional, comma separated, e.g. 'FACEBOOK,INSTAGRAM'.
    date_min: Optional earliest delivery date, YYYY-MM-DD.
    date_max: Optional latest delivery date, YYYY-MM-DD.
    limit: Max ads to return. Default 25.
    after: Paging cursor from a previous call's `after`.
    refresh: Skip the cache and ask Meta again.

```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ad_library.py#L490-L555) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "search_terms": {
      "title": "Search Terms",
      "type": "string"
    },
    "countries": {
      "default": "US",
      "title": "Countries",
      "type": "string"
    },
    "ad_type": {
      "default": "ALL",
      "title": "Ad Type",
      "type": "string"
    },
    "ad_active_status": {
      "default": "ACTIVE",
      "title": "Ad Active Status",
      "type": "string"
    },
    "media_type": {
      "default": "",
      "title": "Media Type",
      "type": "string"
    },
    "publisher_platforms": {
      "default": "",
      "title": "Publisher Platforms",
      "type": "string"
    },
    "date_min": {
      "default": "",
      "title": "Date Min",
      "type": "string"
    },
    "date_max": {
      "default": "",
      "title": "Date Max",
      "type": "string"
    },
    "limit": {
      "default": 25,
      "title": "Limit",
      "type": "integer"
    },
    "after": {
      "default": "",
      "title": "After",
      "type": "string"
    },
    "refresh": {
      "default": false,
      "title": "Refresh",
      "type": "boolean"
    }
  },
  "required": [
    "search_terms"
  ],
  "title": "meta_ad_library_search_adsArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ad_library_find_advertiser-6147e6bd"></a>

## meta_ad_library_find_advertiser

Handler: Other product (tools/meta\_ad\_library.py): calls mcp.tool, \_archive\_get, raw.get, \_graph\_error, sorted, \_json, \_countries, max.

```text
[RECOMMENDED] Turn a brand name into the Facebook page_id that runs its ads.

The reliable way in: keyword search misses any brand whose ad copy does not
contain its own name, and page-scoped lookups do not. Returns the Pages
found in the archive with how many of their ads matched, most first.

Defaults to Ireland because the API only carries commercial ads for the
EU/UK -- searching 'US' for a commercial brand finds nothing to resolve.

Args:
    name: Brand or company name, e.g. 'Wix', 'Booking.com'.
    countries: Two-letter country codes, comma separated. Default 'IE'.
    limit: How many ads to scan for pages. Default 25.
    refresh: Skip the cache and ask Meta again.

```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ad_library.py#L558-L619) · Schema: tools/list.

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
    "countries": {
      "default": "IE",
      "title": "Countries",
      "type": "string"
    },
    "limit": {
      "default": 25,
      "title": "Limit",
      "type": "integer"
    },
    "refresh": {
      "default": false,
      "title": "Refresh",
      "type": "boolean"
    }
  },
  "required": [
    "name"
  ],
  "title": "meta_ad_library_find_advertiserArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ad_library_advertiser_ads-6ad90a6b"></a>

## meta_ad_library_advertiser_ads

Handler: Other product (tools/meta\_ad\_library.py): calls mcp.tool, \_run\_query, \_library\_url, \_json, \_countries, (ad\_active\_status or 'ACTIVE').upper, ','.join, max.

```text
[RECOMMENDED] List every archived ad for one Facebook Page.

Takes the page_id from meta_ad_library_find_advertiser. This is the "what is
this competitor running right now" call, and unlike a keyword search it does
not depend on the brand naming itself in its own ad copy.

Args:
    page_id: Facebook Page ID of the advertiser.
    countries: Two-letter country codes, comma separated. Default 'IE'.
        EU countries and 'GB' return commercial ads; elsewhere only political.
    ad_active_status: 'ACTIVE' (default), 'INACTIVE' or 'ALL'.
    limit: Max ads to return. Default 25.
    after: Paging cursor from a previous call's `after`.
    refresh: Skip the cache and ask Meta again.

```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ad_library.py#L622-L665) · Schema: tools/list.

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
    "countries": {
      "default": "IE",
      "title": "Countries",
      "type": "string"
    },
    "ad_active_status": {
      "default": "ACTIVE",
      "title": "Ad Active Status",
      "type": "string"
    },
    "limit": {
      "default": 25,
      "title": "Limit",
      "type": "integer"
    },
    "after": {
      "default": "",
      "title": "After",
      "type": "string"
    },
    "refresh": {
      "default": false,
      "title": "Refresh",
      "type": "boolean"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "meta_ad_library_advertiser_adsArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ad_library_ad_details-772bd6c5"></a>

## meta_ad_library_ad_details

Handler: Other product (tools/meta\_ad\_library.py): calls mcp.tool, \_archive\_get, raw.get, \_graph\_error, next, normalize\_ad, \_json, \_countries.

```text
[READ] Meta Ad Library tool. Get one archived ad with every field its region and type allow. Args: ad_archive_id: The Ad Library ID, from any of the search tools' `ad_id`. countries: Two-letter country codes, comma separated. Default 'IE'.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ad_library.py#L668-L707) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ad_archive_id": {
      "title": "Ad Archive Id",
      "type": "string"
    },
    "countries": {
      "default": "IE",
      "title": "Countries",
      "type": "string"
    }
  },
  "required": [
    "ad_archive_id"
  ],
  "title": "meta_ad_library_ad_detailsArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ad_library_creative_angles-e435f4c9"></a>

## meta_ad_library_creative_angles

Handler: Other product (tools/meta\_ad\_library.py): calls mcp.tool, \_run\_query, \_json, \_countries, ','.join, max, \_no\_token\_error, sorted.

```text
[READ] Meta Ad Library tool. Summarise the angles one advertiser is running on Facebook and Instagram. The analysis tool: which headlines and calls to action they repeat, which ads have run longest, how their ads split across Facebook and Instagram, and how much is still live. Use this to answer "what is their pitch" rather than listing fifty near-identical creatives. Args: page_id: Facebook Page ID, from meta_ad_library_find_advertiser. countries: Two-letter country codes, comma separated. Default 'IE'. limit: How many ads to analyse, up to 100. Default 100. refresh: Skip the cache and ask Meta again.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ad_library.py#L710-L792) · Schema: tools/list.

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
    "countries": {
      "default": "IE",
      "title": "Countries",
      "type": "string"
    },
    "limit": {
      "default": 100,
      "title": "Limit",
      "type": "integer"
    },
    "refresh": {
      "default": false,
      "title": "Refresh",
      "type": "boolean"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "meta_ad_library_creative_anglesArguments",
  "type": "object"
}
```

</details>

<a id="tool-meta_ad_library_eu_reach-8636c021"></a>

## meta_ad_library_eu_reach

Handler: Other product (tools/meta\_ad\_library.py): calls mcp.tool, \_archive\_get, raw.get, \_graph\_error, \_json, \_countries, ','.join, max.

```text
[READ] Meta Ad Library tool. EU/UK only: who an advertiser's ads actually reached, and who they targeted. Reach totals, age and gender targeting and included/excluded locations are published under EU and UK transparency rules and exist nowhere else in the archive. Refuses a non-EU country outright rather than returning an empty result that looks like a bug. Args: page_id: Facebook Page ID, from meta_ad_library_find_advertiser. countries: EU member state or 'GB'. Default 'IE'. limit: Max ads to return. Default 50. refresh: Skip the cache and ask Meta again.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/meta_ad_library.py#L795-L875) · Schema: tools/list.

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
    "countries": {
      "default": "IE",
      "title": "Countries",
      "type": "string"
    },
    "limit": {
      "default": 50,
      "title": "Limit",
      "type": "integer"
    },
    "refresh": {
      "default": false,
      "title": "Refresh",
      "type": "boolean"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "meta_ad_library_eu_reachArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_transparency_check_access-37012206"></a>

## google_ads_transparency_check_access

Handler: Other product (tools/google\_ads\_transparency.py): calls mcp.tool, \_json, stats, \_suggest, \_rank\_advertisers, all, \_paginate, \_field.

```text
[RECOMMENDED] Check that Google's Ads Transparency Center is answering.

Run this first when a transparency lookup came back degraded, or before a
long research session. It probes all three endpoints with a fixed query and
reports which respond, so "is it Google or is it us" is answerable in one
call. Needs no account, token or connection of any kind.

Args:
    debug: Include the raw first record from each endpoint. Use when the
        shape looks like it has changed upstream.

```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_transparency.py#L491-L548) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "debug": {
      "default": false,
      "title": "Debug",
      "type": "boolean"
    }
  },
  "title": "google_ads_transparency_check_accessArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_transparency_find_advertiser-3ed32679"></a>

## google_ads_transparency_find_advertiser

Handler: Other product (tools/google\_ads\_transparency.py): calls mcp.tool, \_json, \_rank\_advertisers, advertiser\_url, \_suggest, \_degraded, \_search\_url.

```text
[RECOMMENDED] Find an advertiser's ID by brand or company name.

Use when you need to be sure which advertiser you are looking at before
pulling their ads -- several unrelated businesses share most brand names.
Results are ranked best-match-first rather than in Google's own order, which
is alphabetical and buries the brand you asked for.

Results are global; `region` only shapes the links returned.

Args:
    query: Brand, company or domain, e.g. 'nike', 'booking.com'.
    region: Two-letter country code for the links, e.g. 'US', 'IL', 'GB'.
    limit: How many candidates to return. Default 20.

```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_transparency.py#L551-L596) · Schema: tools/list.

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
    "region": {
      "default": "US",
      "title": "Region",
      "type": "string"
    },
    "limit": {
      "default": 20,
      "title": "Limit",
      "type": "integer"
    }
  },
  "required": [
    "query"
  ],
  "title": "google_ads_transparency_find_advertiserArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_transparency_advertiser_ads-dc9433ae"></a>

## google_ads_transparency_advertiser_ads

Handler: Other product (tools/google\_ads\_transparency.py): calls mcp.tool, (format or '').strip().upper, \_json, \_paginate, normalize\_creative, region.upper, country\_name, advertiser\_url.

```text
[RECOMMENDED] List the ads one advertiser is running in a country.

Takes the advertiser_id from google_ads_transparency_find_advertiser. Covers
Search, YouTube, Display and Shopping. Needs no account or connection.

Args:
    advertiser_id: e.g. 'AR02934798844673654785'.
    region: Two-letter country code, e.g. 'US', 'IL', 'GB'. Ads are filtered
        to ones shown in that country.
    format: Optional filter — 'TEXT', 'IMAGE' or 'VIDEO'. Blank for all.
    limit: Max ads to return, up to 200. Default 40.
    refresh: Skip the cache and ask Google again.

```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_transparency.py#L599-L664) · Schema: tools/list.

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
    "region": {
      "default": "US",
      "title": "Region",
      "type": "string"
    },
    "format": {
      "default": "",
      "title": "Format",
      "type": "string"
    },
    "limit": {
      "default": 40,
      "title": "Limit",
      "type": "integer"
    },
    "refresh": {
      "default": false,
      "title": "Refresh",
      "type": "boolean"
    }
  },
  "required": [
    "advertiser_id"
  ],
  "title": "google_ads_transparency_advertiser_adsArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_transparency_search_ads-e5517eb4"></a>

## google_ads_transparency_search_ads

Handler: Other product (tools/google\_ads\_transparency.py): calls mcp.tool, json.loads, \_json, \_rank\_advertisers, google\_ads\_transparency\_advertiser\_ads, isinstance, \_suggest, \_degraded.

```text
[RECOMMENDED] Look up a brand's Google ads in one call.

The default way in: resolves the brand name to the best-matching verified
advertiser, then returns their ads. Use
google_ads_transparency_find_advertiser instead when several businesses
share the name and you need to pick deliberately.

Needs no account, connection or API key, and works in 180+ countries — this
is the tool to reach for when Meta's Ad Library returns nothing because the
advertiser is outside the EU/UK.

Args:
    query: Brand, company or domain, e.g. 'nike', 'booking.com'.
    region: Two-letter country code, e.g. 'US', 'IL', 'GB'.
    format: Optional filter — 'TEXT', 'IMAGE' or 'VIDEO'. Blank for all.
    limit: Max ads to return, up to 200. Default 40.
    refresh: Skip the cache and ask Google again.

```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_transparency.py#L667-L724) · Schema: tools/list.

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
    "region": {
      "default": "US",
      "title": "Region",
      "type": "string"
    },
    "format": {
      "default": "",
      "title": "Format",
      "type": "string"
    },
    "limit": {
      "default": 40,
      "title": "Limit",
      "type": "integer"
    },
    "refresh": {
      "default": false,
      "title": "Refresh",
      "type": "boolean"
    }
  },
  "required": [
    "query"
  ],
  "title": "google_ads_transparency_search_adsArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_transparency_ad_details-d2202c30"></a>

## google_ads_transparency_ad_details

Handler: Other product (tools/google\_ads\_transparency.py): calls mcp.tool, \_dig, \_json, \_rpc, payload.get, \_thumbnail, variants.append, country\_for\_geo\_target\_id.

```text
[READ] Google Ads Transparency tool. Get the full record for one ad, including every variant Google archived. Args: advertiser_id: e.g. 'AR02934798844673654785'. creative_id: e.g. 'CR14039481954357739521'. region: Two-letter country code, e.g. 'US', 'IL', 'GB'.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_transparency.py#L727-L795) · Schema: tools/list.

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
    "creative_id": {
      "title": "Creative Id",
      "type": "string"
    },
    "region": {
      "default": "US",
      "title": "Region",
      "type": "string"
    }
  },
  "required": [
    "advertiser_id",
    "creative_id"
  ],
  "title": "google_ads_transparency_ad_detailsArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_transparency_creative_mix-bb96249e"></a>

## google_ads_transparency_creative_mix

Handler: Other product (tools/google\_ads\_transparency.py): calls mcp.tool, sorted, \_json, \_paginate, normalize\_creative, region.upper, country\_name, advertiser\_url.

```text
[READ] Google Ads Transparency tool. Summarise what an advertiser's Google ads look like as a whole. The analysis counterpart to listing ads: format split, how long creatives stay live, which are longest-running, and when they last refreshed. Use it to answer "how heavily are they investing and how often do they change angle" rather than showing 100 thumbnails. Args: advertiser_id: e.g. 'AR02934798844673654785'. region: Two-letter country code, e.g. 'US', 'IL', 'GB'. limit: How many ads to analyse, up to 200. Default 100. refresh: Skip the cache and ask Google again.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_transparency.py#L798-L877) · Schema: tools/list.

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
    "region": {
      "default": "US",
      "title": "Region",
      "type": "string"
    },
    "limit": {
      "default": 100,
      "title": "Limit",
      "type": "integer"
    },
    "refresh": {
      "default": false,
      "title": "Refresh",
      "type": "boolean"
    }
  },
  "required": [
    "advertiser_id"
  ],
  "title": "google_ads_transparency_creative_mixArguments",
  "type": "object"
}
```

</details>

<a id="tool-google_ads_transparency_regions-1950c6b7"></a>

## google_ads_transparency_regions

Handler: Other product (tools/google\_ads\_transparency.py): calls mcp.tool, (search or '').strip().lower, \_json, (search or '').strip, geo\_target\_id, sorted, COUNTRY\_NAMES.items, name.lower.

```text
[READ] Google Ads Transparency tool. List the countries Google's Ads Transparency Center can be filtered to. No network call. Use it instead of guessing a country code. Args: search: Optional filter on country name or code, e.g. 'isr', 'united'.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/google_ads_transparency.py#L880-L896) · Schema: tools/list.

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
  "title": "google_ads_transparency_regionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-linkedin_ads_pipedream_accounts-71a28d77"></a>

## linkedin_ads_pipedream_accounts

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, \_list\_pipedream\_accounts, \_json.

```text
[READ] LinkedIn Ads tool backed by Pipedream managed auth. List connected Pipedream accounts that can be used for LinkedIn Ads proxy calls.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L45-L52) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "linkedin_ads_pipedream_accountsArguments",
  "type": "object"
}
```

</details>

<a id="tool-linkedin_ads_list_accounts-a66df569"></a>

## linkedin_ads_list_accounts

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, \_json, \_proxy\_request, \_linkedin\_base.

```text
[READ] LinkedIn Ads tool backed by Pipedream managed auth. List LinkedIn Ads accounts visible to the connected LinkedIn user.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L55-L67) · Schema: tools/list.

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
  "title": "linkedin_ads_list_accountsArguments",
  "type": "object"
}
```

</details>

<a id="tool-linkedin_ads_list_campaigns-175717c3"></a>

## linkedin_ads_list_campaigns

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, \_json, \_proxy\_request, \_linkedin\_base, \_linkedin\_urn, max, min.

```text
[READ] LinkedIn Ads tool backed by Pipedream managed auth. List LinkedIn Ads campaigns for a sponsored account.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L70-L86) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "linkedin_account_id": {
      "title": "Linkedin Account Id",
      "type": "string"
    },
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    },
    "count": {
      "default": 100,
      "title": "Count",
      "type": "integer"
    }
  },
  "required": [
    "linkedin_account_id"
  ],
  "title": "linkedin_ads_list_campaignsArguments",
  "type": "object"
}
```

</details>

<a id="tool-linkedin_ads_get_campaign-4568d19f"></a>

## linkedin_ads_get_campaign

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, \_json, \_proxy\_request, \_linkedin\_base.

```text
[READ] LinkedIn Ads tool backed by Pipedream managed auth. Get one LinkedIn Ads campaign by campaign id.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L89-L95) · Schema: tools/list.

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
  "title": "linkedin_ads_get_campaignArguments",
  "type": "object"
}
```

</details>

<a id="tool-linkedin_ads_campaign_report-a29163d9"></a>

## linkedin_ads_campaign_report

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, \_json, \_linkedin\_urn, \_proxy\_request, date.today, \_date\_parts, \_linkedin\_base, timedelta.

```text
[READ] LinkedIn Ads tool backed by Pipedream managed auth. Get LinkedIn Ads analytics by campaign for a date range.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L98-L126) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "linkedin_account_id": {
      "title": "Linkedin Account Id",
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
    "pivot": {
      "default": "CAMPAIGN",
      "title": "Pivot",
      "type": "string"
    },
    "time_granularity": {
      "default": "DAILY",
      "title": "Time Granularity",
      "type": "string"
    },
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    }
  },
  "required": [
    "linkedin_account_id"
  ],
  "title": "linkedin_ads_campaign_reportArguments",
  "type": "object"
}
```

</details>

<a id="tool-linkedin_ads_create_campaign-427e5a02"></a>

## linkedin_ads_create_campaign

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, require\_editor, \_parse\_json\_arg, body.setdefault, \_json, isinstance, \_linkedin\_urn, \_proxy\_request.

```text
[WRITE] LinkedIn Ads tool backed by Pipedream managed auth. Create a LinkedIn Ads campaign. Pass the full LinkedIn campaign body as JSON; account is added if omitted.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L129-L142) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "linkedin_account_id": {
      "title": "Linkedin Account Id",
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
    "linkedin_account_id",
    "campaign_json"
  ],
  "title": "linkedin_ads_create_campaignArguments",
  "type": "object"
}
```

</details>

<a id="tool-linkedin_ads_update_campaign-8a89bf50"></a>

## linkedin_ads_update_campaign

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, require\_editor, \_parse\_json\_arg, \_json, \_proxy\_request, \_linkedin\_base.

```text
[WRITE] LinkedIn Ads tool backed by Pipedream managed auth. Update a LinkedIn Ads campaign with a Rest.li patch JSON body, for example {"patch":{"$set":{"status":"PAUSED"}}}.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L145-L162) · Schema: tools/list.

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
    "patch_json": {
      "title": "Patch Json",
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
    "patch_json"
  ],
  "title": "linkedin_ads_update_campaignArguments",
  "type": "object"
}
```

</details>

<a id="tool-linkedin_ads_create_creative-7a09e952"></a>

## linkedin_ads_create_creative

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, require\_editor, \_parse\_json\_arg, body.setdefault, \_json, isinstance, \_linkedin\_urn, \_proxy\_request.

```text
[WRITE] LinkedIn Ads tool backed by Pipedream managed auth. Create a LinkedIn Ads creative. Pass the full LinkedIn creative body as JSON; account is added if omitted.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L165-L178) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "linkedin_account_id": {
      "title": "Linkedin Account Id",
      "type": "string"
    },
    "creative_json": {
      "title": "Creative Json",
      "type": "string"
    },
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    }
  },
  "required": [
    "linkedin_account_id",
    "creative_json"
  ],
  "title": "linkedin_ads_create_creativeArguments",
  "type": "object"
}
```

</details>

<a id="tool-linkedin_ads_raw_request-69a75296"></a>

## linkedin_ads_raw_request

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, require\_editor, \_parse\_json\_arg, \_json, url.startswith, \_linkedin\_base, \_proxy\_request.

```text
[WRITE] LinkedIn Ads tool backed by Pipedream managed auth. Run a LinkedIn Ads API request through Pipedream. Editor role required because non-GET requests can mutate ads.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L181-L193) · Schema: tools/list.

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
  "title": "linkedin_ads_raw_requestArguments",
  "type": "object"
}
```

</details>

<a id="tool-tiktok_ads_pipedream_accounts-1c7e0dba"></a>

## tiktok_ads_pipedream_accounts

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, \_list\_pipedream\_accounts, \_json.

```text
[READ] TikTok Ads tool backed by Pipedream managed auth. List connected Pipedream accounts that can be used for TikTok Ads proxy calls.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L196-L203) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "tiktok_ads_pipedream_accountsArguments",
  "type": "object"
}
```

</details>

<a id="tool-tiktok_ads_list_advertisers-71e80cca"></a>

## tiktok_ads_list_advertisers

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, \_json, \_proxy\_request, \_tiktok\_base.

```text
[READ] TikTok Ads tool backed by Pipedream managed auth. List TikTok advertiser accounts available to the connected TikTok Business user.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L206-L212) · Schema: tools/list.

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
  "title": "tiktok_ads_list_advertisersArguments",
  "type": "object"
}
```

</details>

<a id="tool-tiktok_ads_list_campaigns-55744de8"></a>

## tiktok_ads_list_campaigns

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, \_json, \_proxy\_request, \_tiktok\_base, max, min.

```text
[READ] TikTok Ads tool backed by Pipedream managed auth. List TikTok Ads campaigns for an advertiser.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L215-L227) · Schema: tools/list.

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
  "title": "tiktok_ads_list_campaignsArguments",
  "type": "object"
}
```

</details>

<a id="tool-tiktok_ads_get_campaign-87eccda9"></a>

## tiktok_ads_get_campaign

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, \_json, \_proxy\_request, \_tiktok\_base.

```text
[READ] TikTok Ads tool backed by Pipedream managed auth. Get one TikTok Ads campaign by campaign id.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L230-L243) · Schema: tools/list.

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
    "advertiser_id",
    "campaign_id"
  ],
  "title": "tiktok_ads_get_campaignArguments",
  "type": "object"
}
```

</details>

<a id="tool-tiktok_ads_campaign_report-279c4310"></a>

## tiktok_ads_campaign_report

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, \_parse\_json\_arg, \_json, \_proxy\_request, date.today, \_tiktok\_base, timedelta.

```text
[READ] TikTok Ads tool backed by Pipedream managed auth. Get TikTok Ads campaign performance report for a date range.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L246-L278) · Schema: tools/list.

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
      "default": "[\"campaign_id\"]",
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
  "title": "tiktok_ads_campaign_reportArguments",
  "type": "object"
}
```

</details>

<a id="tool-tiktok_ads_create_campaign-004579ca"></a>

## tiktok_ads_create_campaign

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, require\_editor, \_parse\_json\_arg, body.setdefault, \_json, isinstance, \_proxy\_request, \_tiktok\_base.

```text
[WRITE] TikTok Ads tool backed by Pipedream managed auth. Create a TikTok Ads campaign. Pass the TikTok campaign fields as JSON; advertiser_id is added if omitted.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L281-L294) · Schema: tools/list.

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
    "advertiser_id",
    "campaign_json"
  ],
  "title": "tiktok_ads_create_campaignArguments",
  "type": "object"
}
```

</details>

<a id="tool-tiktok_ads_update_campaign-566aa5bd"></a>

## tiktok_ads_update_campaign

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, require\_editor, \_parse\_json\_arg, body.setdefault, \_json, isinstance, \_proxy\_request, \_tiktok\_base.

```text
[WRITE] TikTok Ads tool backed by Pipedream managed auth. Update a TikTok Ads campaign. Pass fields like {"operation_status":"DISABLE"} in updates_json.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L297-L311) · Schema: tools/list.

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
    "campaign_id": {
      "title": "Campaign Id",
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
    "campaign_id",
    "updates_json"
  ],
  "title": "tiktok_ads_update_campaignArguments",
  "type": "object"
}
```

</details>

<a id="tool-tiktok_ads_create_adgroup-d3c3c6bf"></a>

## tiktok_ads_create_adgroup

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, require\_editor, \_parse\_json\_arg, body.setdefault, \_json, isinstance, \_proxy\_request, \_tiktok\_base.

```text
[WRITE] TikTok Ads tool backed by Pipedream managed auth. Create a TikTok Ads ad group. Pass the TikTok ad group fields as JSON; advertiser_id is added if omitted.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L314-L327) · Schema: tools/list.

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
    "adgroup_json": {
      "title": "Adgroup Json",
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
    "adgroup_json"
  ],
  "title": "tiktok_ads_create_adgroupArguments",
  "type": "object"
}
```

</details>

<a id="tool-tiktok_ads_create_ad-fa07c7cf"></a>

## tiktok_ads_create_ad

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, require\_editor, \_parse\_json\_arg, body.setdefault, \_json, isinstance, \_proxy\_request, \_tiktok\_base.

```text
[WRITE] TikTok Ads tool backed by Pipedream managed auth. Create a TikTok Ads ad. Pass the TikTok ad fields as JSON; advertiser_id is added if omitted.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L330-L343) · Schema: tools/list.

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
    "ad_json": {
      "title": "Ad Json",
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
    "ad_json"
  ],
  "title": "tiktok_ads_create_adArguments",
  "type": "object"
}
```

</details>

<a id="tool-tiktok_ads_raw_request-f4f4b94e"></a>

## tiktok_ads_raw_request

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, require\_editor, \_parse\_json\_arg, \_json, \_proxy\_request, \_tiktok\_base.

```text
[WRITE] TikTok Ads tool backed by Pipedream managed auth. Run a TikTok Business API request through Pipedream. Editor role required because non-GET requests can mutate ads.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L346-L357) · Schema: tools/list.

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
    "path_or_url": {
      "title": "Path Or Url",
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
    "path_or_url"
  ],
  "title": "tiktok_ads_raw_requestArguments",
  "type": "object"
}
```

</details>

<a id="tool-linkedin_ads_get_resource-83200c7a"></a>

## linkedin_ads_get_resource

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, \_parse\_json\_arg, \_linkedin\_resource\_get, path.startswith, \_json.

```text
[READ] LinkedIn Ads tool backed by Pipedream managed auth. GET any LinkedIn Marketing API resource path through Pipedream, for endpoints not covered by a named tool.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L373-L381) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "path": {
      "title": "Path",
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
    "path"
  ],
  "title": "linkedin_ads_get_resourceArguments",
  "type": "object"
}
```

</details>

<a id="tool-linkedin_ads_get_account-639d7d2d"></a>

## linkedin_ads_get_account

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, \_linkedin\_resource\_get, \_json.

```text
[READ] LinkedIn Ads tool backed by Pipedream managed auth. Get a LinkedIn sponsored ad account by account id.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L384-L390) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "linkedin_account_id": {
      "title": "Linkedin Account Id",
      "type": "string"
    },
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    }
  },
  "required": [
    "linkedin_account_id"
  ],
  "title": "linkedin_ads_get_accountArguments",
  "type": "object"
}
```

</details>

<a id="tool-linkedin_ads_list_campaign_groups-b4e9e706"></a>

## linkedin_ads_list_campaign_groups

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, \_linkedin\_resource\_get, \_json, \_linkedin\_urn, max, min.

```text
[READ] LinkedIn Ads tool backed by Pipedream managed auth. List LinkedIn campaign groups for a sponsored account.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L393-L407) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "linkedin_account_id": {
      "title": "Linkedin Account Id",
      "type": "string"
    },
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    },
    "count": {
      "default": 100,
      "title": "Count",
      "type": "integer"
    }
  },
  "required": [
    "linkedin_account_id"
  ],
  "title": "linkedin_ads_list_campaign_groupsArguments",
  "type": "object"
}
```

</details>

<a id="tool-linkedin_ads_get_campaign_group-1da547cb"></a>

## linkedin_ads_get_campaign_group

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, \_linkedin\_resource\_get, \_json.

```text
[READ] LinkedIn Ads tool backed by Pipedream managed auth. Get one LinkedIn campaign group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L410-L416) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_group_id": {
      "title": "Campaign Group Id",
      "type": "string"
    },
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_group_id"
  ],
  "title": "linkedin_ads_get_campaign_groupArguments",
  "type": "object"
}
```

</details>

<a id="tool-linkedin_ads_create_campaign_group-79c2e5bb"></a>

## linkedin_ads_create_campaign_group

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, require\_editor, \_parse\_json\_arg, body.setdefault, \_linkedin\_resource\_post, isinstance, \_json, \_linkedin\_urn.

```text
[WRITE] LinkedIn Ads tool backed by Pipedream managed auth. Create a LinkedIn campaign group. Pass full LinkedIn campaign group JSON; account is added if omitted.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L419-L432) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "linkedin_account_id": {
      "title": "Linkedin Account Id",
      "type": "string"
    },
    "campaign_group_json": {
      "title": "Campaign Group Json",
      "type": "string"
    },
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    }
  },
  "required": [
    "linkedin_account_id",
    "campaign_group_json"
  ],
  "title": "linkedin_ads_create_campaign_groupArguments",
  "type": "object"
}
```

</details>

<a id="tool-linkedin_ads_update_campaign_group-45fe43dd"></a>

## linkedin_ads_update_campaign_group

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, require\_editor, \_parse\_json\_arg, \_linkedin\_resource\_post, \_json.

```text
[WRITE] LinkedIn Ads tool backed by Pipedream managed auth. Update a LinkedIn campaign group using a Rest.li patch JSON body.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L435-L450) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_group_id": {
      "title": "Campaign Group Id",
      "type": "string"
    },
    "patch_json": {
      "title": "Patch Json",
      "type": "string"
    },
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    }
  },
  "required": [
    "campaign_group_id",
    "patch_json"
  ],
  "title": "linkedin_ads_update_campaign_groupArguments",
  "type": "object"
}
```

</details>

<a id="tool-linkedin_ads_list_creatives-a3d9a055"></a>

## linkedin_ads_list_creatives

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, \_linkedin\_resource\_get, \_linkedin\_urn, max, \_json, min.

```text
[READ] LinkedIn Ads tool backed by Pipedream managed auth. List LinkedIn ad creatives, optionally filtered by campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L453-L466) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "linkedin_account_id": {
      "title": "Linkedin Account Id",
      "type": "string"
    },
    "campaign_id": {
      "default": "",
      "title": "Campaign Id",
      "type": "string"
    },
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    },
    "count": {
      "default": 100,
      "title": "Count",
      "type": "integer"
    }
  },
  "required": [
    "linkedin_account_id"
  ],
  "title": "linkedin_ads_list_creativesArguments",
  "type": "object"
}
```

</details>

<a id="tool-linkedin_ads_get_creative-58985ee4"></a>

## linkedin_ads_get_creative

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, \_linkedin\_resource\_get, \_json.

```text
[READ] LinkedIn Ads tool backed by Pipedream managed auth. Get one LinkedIn ad creative.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L469-L475) · Schema: tools/list.

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
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    }
  },
  "required": [
    "creative_id"
  ],
  "title": "linkedin_ads_get_creativeArguments",
  "type": "object"
}
```

</details>

<a id="tool-linkedin_ads_update_creative-03fa5e3a"></a>

## linkedin_ads_update_creative

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, require\_editor, \_parse\_json\_arg, \_linkedin\_resource\_post, \_json.

```text
[WRITE] LinkedIn Ads tool backed by Pipedream managed auth. Update a LinkedIn creative using a Rest.li patch JSON body.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L478-L493) · Schema: tools/list.

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
    "patch_json": {
      "title": "Patch Json",
      "type": "string"
    },
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    }
  },
  "required": [
    "creative_id",
    "patch_json"
  ],
  "title": "linkedin_ads_update_creativeArguments",
  "type": "object"
}
```

</details>

<a id="tool-linkedin_ads_list_conversions-d3e29103"></a>

## linkedin_ads_list_conversions

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, \_linkedin\_resource\_get, \_json, \_linkedin\_urn, max, min.

```text
[READ] LinkedIn Ads tool backed by Pipedream managed auth. List LinkedIn conversion rules for a sponsored account.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L496-L506) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "linkedin_account_id": {
      "title": "Linkedin Account Id",
      "type": "string"
    },
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    },
    "count": {
      "default": 100,
      "title": "Count",
      "type": "integer"
    }
  },
  "required": [
    "linkedin_account_id"
  ],
  "title": "linkedin_ads_list_conversionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-linkedin_ads_create_conversion-6419c33e"></a>

## linkedin_ads_create_conversion

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, require\_editor, \_parse\_json\_arg, body.setdefault, \_linkedin\_resource\_post, isinstance, \_json, \_linkedin\_urn.

```text
[WRITE] LinkedIn Ads tool backed by Pipedream managed auth. Create a LinkedIn conversion rule. Pass full conversion JSON; account is added if omitted.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L509-L522) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "linkedin_account_id": {
      "title": "Linkedin Account Id",
      "type": "string"
    },
    "conversion_json": {
      "title": "Conversion Json",
      "type": "string"
    },
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    }
  },
  "required": [
    "linkedin_account_id",
    "conversion_json"
  ],
  "title": "linkedin_ads_create_conversionArguments",
  "type": "object"
}
```

</details>

<a id="tool-linkedin_ads_update_conversion-5e6bdf9b"></a>

## linkedin_ads_update_conversion

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, require\_editor, \_parse\_json\_arg, \_linkedin\_resource\_post, \_json.

```text
[WRITE] LinkedIn Ads tool backed by Pipedream managed auth. Update a LinkedIn conversion rule using a Rest.li patch JSON body.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L525-L540) · Schema: tools/list.

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
    "patch_json": {
      "title": "Patch Json",
      "type": "string"
    },
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    }
  },
  "required": [
    "conversion_id",
    "patch_json"
  ],
  "title": "linkedin_ads_update_conversionArguments",
  "type": "object"
}
```

</details>

<a id="tool-linkedin_ads_list_targeting_facets-558f1e0f"></a>

## linkedin_ads_list_targeting_facets

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, \_linkedin\_resource\_get, \_json.

```text
[READ] LinkedIn Ads tool backed by Pipedream managed auth. List LinkedIn targeting facets available for ad targeting.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L543-L549) · Schema: tools/list.

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
  "title": "linkedin_ads_list_targeting_facetsArguments",
  "type": "object"
}
```

</details>

<a id="tool-linkedin_ads_find_targeting_entities-2dab6971"></a>

## linkedin_ads_find_targeting_entities

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, \_linkedin\_resource\_get, max, \_json, min.

```text
[READ] LinkedIn Ads tool backed by Pipedream managed auth. Search LinkedIn targeting entities for a facet such as locations, industries, skills, titles, or companies.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L552-L561) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "facet": {
      "title": "Facet",
      "type": "string"
    },
    "query": {
      "default": "",
      "title": "Query",
      "type": "string"
    },
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    },
    "count": {
      "default": 50,
      "title": "Count",
      "type": "integer"
    }
  },
  "required": [
    "facet"
  ],
  "title": "linkedin_ads_find_targeting_entitiesArguments",
  "type": "object"
}
```

</details>

<a id="tool-linkedin_ads_audience_counts-57ebdbf9"></a>

## linkedin_ads_audience_counts

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, \_parse\_json\_arg, \_linkedin\_resource\_get, \_json.

```text
[READ] LinkedIn Ads tool backed by Pipedream managed auth. Estimate LinkedIn audience size for a targeting criteria JSON payload.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L564-L571) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "targeting_json": {
      "title": "Targeting Json",
      "type": "string"
    },
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    }
  },
  "required": [
    "targeting_json"
  ],
  "title": "linkedin_ads_audience_countsArguments",
  "type": "object"
}
```

</details>

<a id="tool-linkedin_ads_campaign_group_report-703f5233"></a>

## linkedin_ads_campaign_group_report

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, linkedin\_ads\_campaign\_report.

```text
[READ] LinkedIn Ads tool backed by Pipedream managed auth. Get LinkedIn Ads analytics pivoted by campaign group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L574-L583) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "linkedin_account_id": {
      "title": "Linkedin Account Id",
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
    "time_granularity": {
      "default": "DAILY",
      "title": "Time Granularity",
      "type": "string"
    },
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    }
  },
  "required": [
    "linkedin_account_id"
  ],
  "title": "linkedin_ads_campaign_group_reportArguments",
  "type": "object"
}
```

</details>

<a id="tool-linkedin_ads_creative_report-b551d33d"></a>

## linkedin_ads_creative_report

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, linkedin\_ads\_campaign\_report.

```text
[READ] LinkedIn Ads tool backed by Pipedream managed auth. Get LinkedIn Ads analytics pivoted by creative.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L586-L595) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "linkedin_account_id": {
      "title": "Linkedin Account Id",
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
    "time_granularity": {
      "default": "DAILY",
      "title": "Time Granularity",
      "type": "string"
    },
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    }
  },
  "required": [
    "linkedin_account_id"
  ],
  "title": "linkedin_ads_creative_reportArguments",
  "type": "object"
}
```

</details>

<a id="tool-tiktok_ads_get_resource-8daf7827"></a>

## tiktok_ads_get_resource

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, \_parse\_json\_arg, \_tiktok\_get, \_json.

```text
[READ] TikTok Ads tool backed by Pipedream managed auth. GET any TikTok Business API resource through Pipedream, for endpoints not covered by a named tool.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L611-L618) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "path_or_url": {
      "title": "Path Or Url",
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
    "path_or_url"
  ],
  "title": "tiktok_ads_get_resourceArguments",
  "type": "object"
}
```

</details>

<a id="tool-tiktok_ads_advertiser_info-9e099ca5"></a>

## tiktok_ads_advertiser_info

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, \_tiktok\_get, \_json.

```text
[READ] TikTok Ads tool backed by Pipedream managed auth. Get TikTok advertiser account info.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L621-L627) · Schema: tools/list.

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
  "title": "tiktok_ads_advertiser_infoArguments",
  "type": "object"
}
```

</details>

<a id="tool-tiktok_ads_account_balance-99343d05"></a>

## tiktok_ads_account_balance

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, \_tiktok\_get, \_json.

```text
[READ] TikTok Ads tool backed by Pipedream managed auth. Get TikTok advertiser account balance.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L630-L636) · Schema: tools/list.

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
  "title": "tiktok_ads_account_balanceArguments",
  "type": "object"
}
```

</details>

<a id="tool-tiktok_ads_list_adgroups-e12712ce"></a>

## tiktok_ads_list_adgroups

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, \_tiktok\_get, \_json, max, min.

```text
[READ] TikTok Ads tool backed by Pipedream managed auth. List TikTok ad groups, optionally filtered by campaign.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L639-L656) · Schema: tools/list.

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
    "campaign_id": {
      "default": "",
      "title": "Campaign Id",
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
  "title": "tiktok_ads_list_adgroupsArguments",
  "type": "object"
}
```

</details>

<a id="tool-tiktok_ads_get_adgroup-f7cd711b"></a>

## tiktok_ads_get_adgroup

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, \_tiktok\_get, \_json.

```text
[READ] TikTok Ads tool backed by Pipedream managed auth. Get one TikTok ad group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L659-L669) · Schema: tools/list.

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
    "adgroup_id": {
      "title": "Adgroup Id",
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
    "adgroup_id"
  ],
  "title": "tiktok_ads_get_adgroupArguments",
  "type": "object"
}
```

</details>

<a id="tool-tiktok_ads_update_adgroup-59a64597"></a>

## tiktok_ads_update_adgroup

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, require\_editor, \_parse\_json\_arg, body.setdefault, \_tiktok\_post, isinstance, \_json.

```text
[WRITE] TikTok Ads tool backed by Pipedream managed auth. Update a TikTok ad group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L672-L686) · Schema: tools/list.

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
    "adgroup_id": {
      "title": "Adgroup Id",
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
    "adgroup_id",
    "updates_json"
  ],
  "title": "tiktok_ads_update_adgroupArguments",
  "type": "object"
}
```

</details>

<a id="tool-tiktok_ads_list_ads-7735b2fe"></a>

## tiktok_ads_list_ads

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, \_tiktok\_get, \_json, max, min.

```text
[READ] TikTok Ads tool backed by Pipedream managed auth. List TikTok ads, optionally filtered by campaign or ad group.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L689-L708) · Schema: tools/list.

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
  "title": "tiktok_ads_list_adsArguments",
  "type": "object"
}
```

</details>

<a id="tool-tiktok_ads_get_ad-4d2e8177"></a>

## tiktok_ads_get_ad

Handler: Other product (tools/pipedream\_ads.py): calls mcp.tool, \_tiktok\_get, \_json.

```text
[READ] TikTok Ads tool backed by Pipedream managed auth. Get one TikTok ad.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/pipedream_ads.py#L711-L721) · Schema: tools/list.

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
    "pipedream_account_id": {
      "default": "",
      "title": "Pipedream Account Id",
      "type": "string"
    }
  },
  "required": [
    "advertiser_id",
    "ad_id"
  ],
  "title": "tiktok_ads_get_adArguments",
  "type": "object"
}
```

</details>
