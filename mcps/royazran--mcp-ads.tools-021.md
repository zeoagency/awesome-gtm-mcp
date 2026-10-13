# RoyAzran/mcp-ads: supporting and other-product tools

[Provider inventory](royazran--mcp-ads.md) · [Global tool index](../TOOL_INDEX.md)

Tools 3001–3131 of 3131. Exact schemas from the same upstream snapshot.

<a id="tool-seo_internal_link_suggestions-e28ca8de"></a>

## seo_internal_link_suggestions

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Tool tool. For a given post, find other posts that could be linked internally based on keyword overlap
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L897-L907) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_id": {
      "title": "Post Id",
      "type": "integer"
    },
    "focus_keyword": {
      "default": null,
      "title": "Focus Keyword",
      "type": "string"
    },
    "max_suggestions": {
      "default": 5,
      "title": "Max Suggestions",
      "type": "integer"
    }
  },
  "required": [
    "post_id"
  ],
  "title": "seo_internal_link_suggestionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_create_category_page-1620cb5a"></a>

## seo_create_category_page

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, \_wp.

```text
[WRITE] Tool tool. Create a category with SEO-optimized description and settings
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L909-L923) · Schema: tools/list.

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
    "slug": {
      "default": null,
      "title": "Slug",
      "type": "string"
    },
    "description": {
      "default": null,
      "title": "Description",
      "type": "string"
    },
    "parent": {
      "default": null,
      "title": "Parent",
      "type": "integer"
    },
    "seo_title": {
      "default": null,
      "title": "Seo Title",
      "type": "string"
    },
    "meta_description": {
      "default": null,
      "title": "Meta Description",
      "type": "string"
    }
  },
  "required": [
    "name"
  ],
  "title": "seo_create_category_pageArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_create_content_cluster-35d469ca"></a>

## seo_create_content_cluster

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp, wp.post, isinstance, results\['cluster'\].append.

```text
[WRITE] Tool tool. Create a content cluster: pillar page + multiple supporting blog posts, all cross-linked
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L925-L949) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "pillar_title": {
      "default": null,
      "title": "Pillar Title",
      "type": "string"
    },
    "pillar_content": {
      "default": null,
      "title": "Pillar Content",
      "type": "string"
    },
    "pillar_keyword": {
      "default": null,
      "title": "Pillar Keyword",
      "type": "string"
    },
    "cluster_posts": {
      "default": null,
      "items": {},
      "title": "Cluster Posts",
      "type": "array"
    },
    "category_id": {
      "default": null,
      "title": "Category Id",
      "type": "integer"
    }
  },
  "title": "seo_create_content_clusterArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_noindex_page-b74b242c"></a>

## seo_noindex_page

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Tool tool. Set a page/post to noindex (remove from search engines)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L951-L959) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "title": "Id",
      "type": "integer"
    },
    "type": {
      "default": "page",
      "title": "Type",
      "type": "string"
    }
  },
  "required": [
    "id"
  ],
  "title": "seo_noindex_pageArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_index_page-cbc90746"></a>

## seo_index_page

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Tool tool. Set a page/post to index (allow search engines)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L961-L969) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "title": "Id",
      "type": "integer"
    },
    "type": {
      "default": "page",
      "title": "Type",
      "type": "string"
    }
  },
  "required": [
    "id"
  ],
  "title": "seo_index_pageArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_bulk_set_focus_keywords-1bc80bb5"></a>

## seo_bulk_set_focus_keywords

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Set focus keywords for multiple posts at once
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L971-L977) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "updates": {
      "default": "post",
      "items": {},
      "title": "Updates",
      "type": "array"
    }
  },
  "title": "seo_bulk_set_focus_keywordsArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_get_all_focus_keywords-2ee25cc7"></a>

## seo_get_all_focus_keywords

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Tool tool. Get focus keywords and SEO scores for all posts — useful for keyword gap analysis
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L979-L989) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_type": {
      "default": "post",
      "title": "Post Type",
      "type": "string"
    },
    "per_page": {
      "default": 100,
      "title": "Per Page",
      "type": "integer"
    },
    "page": {
      "default": 1,
      "title": "Page",
      "type": "integer"
    }
  },
  "title": "seo_get_all_focus_keywordsArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_update_schema_markup-ef3a8f16"></a>

## seo_update_schema_markup

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Add schema markup to a post/page via meta field
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L991-L1000) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "title": "Id",
      "type": "integer"
    },
    "schema_type": {
      "title": "Schema Type",
      "type": "string"
    },
    "type": {
      "default": "post",
      "title": "Type",
      "type": "string"
    },
    "schema_data": {
      "additionalProperties": true,
      "default": null,
      "title": "Schema Data",
      "type": "object"
    }
  },
  "required": [
    "id",
    "schema_type"
  ],
  "title": "seo_update_schema_markupArguments",
  "type": "object"
}
```

</details>

<a id="tool-rankmath_meta_get-65c43d0d"></a>

## rankmath_meta_get

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Rank Math tool. Get all RankMath SEO meta for a post (title, description, focus keyword, robots, canonical, OG, Twitter, schema, seo score, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1002-L1010) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "title": "Id",
      "type": "integer"
    },
    "type": {
      "default": "post",
      "title": "Type",
      "type": "string"
    }
  },
  "required": [
    "id"
  ],
  "title": "rankmath_meta_getArguments",
  "type": "object"
}
```

</details>

<a id="tool-rankmath_meta_set-37ff272f"></a>

## rankmath_meta_set

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Rank Math tool. Set any RankMath meta fields for a post via post meta update (rank_math_title, rank_math_description, rank_math_focus_keyword, rank_math_robots, rank_math_canonical_url, rank_math_og_*, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1012-L1020) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "title": "Id",
      "type": "integer"
    },
    "meta": {
      "additionalProperties": true,
      "title": "Meta",
      "type": "object"
    },
    "type": {
      "default": "post",
      "title": "Type",
      "type": "string"
    }
  },
  "required": [
    "id",
    "meta"
  ],
  "title": "rankmath_meta_setArguments",
  "type": "object"
}
```

</details>

<a id="tool-rankmath_meta_bulk_set-cf49b9bf"></a>

## rankmath_meta_bulk_set

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Rank Math tool. Set RankMath meta fields across many posts at once
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1022-L1028) · Schema: tools/list.

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
    }
  },
  "required": [
    "updates"
  ],
  "title": "rankmath_meta_bulk_setArguments",
  "type": "object"
}
```

</details>

<a id="tool-rankmath_focus_keyword_set-450112ff"></a>

## rankmath_focus_keyword_set

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Rank Math tool. Set the RankMath focus keyword for a post
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1030-L1038) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "title": "Id",
      "type": "integer"
    },
    "keyword": {
      "title": "Keyword",
      "type": "string"
    },
    "type": {
      "default": "post",
      "title": "Type",
      "type": "string"
    }
  },
  "required": [
    "id",
    "keyword"
  ],
  "title": "rankmath_focus_keyword_setArguments",
  "type": "object"
}
```

</details>

<a id="tool-rankmath_schema_type_set-44b26209"></a>

## rankmath_schema_type_set

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Rank Math tool. Set the RankMath schema type for a post (Article, BlogPosting, Product, FAQ, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1040-L1049) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "title": "Id",
      "type": "integer"
    },
    "schema_type": {
      "title": "Schema Type",
      "type": "string"
    },
    "type": {
      "default": "post",
      "title": "Type",
      "type": "string"
    },
    "schema_data": {
      "additionalProperties": true,
      "default": null,
      "title": "Schema Data",
      "type": "object"
    }
  },
  "required": [
    "id",
    "schema_type"
  ],
  "title": "rankmath_schema_type_setArguments",
  "type": "object"
}
```

</details>

<a id="tool-rankmath_options_get-e65cdabb"></a>

## rankmath_options_get

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Rank Math tool. Get RankMath plugin options (general settings, title settings, sitemap settings)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1051-L1058) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "option_key": {
      "title": "Option Key",
      "type": "string"
    }
  },
  "required": [
    "option_key"
  ],
  "title": "rankmath_options_getArguments",
  "type": "object"
}
```

</details>

<a id="tool-rankmath_options_set-3420f05f"></a>

## rankmath_options_set

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Rank Math tool. Update RankMath plugin options
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1060-L1067) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "option_key": {
      "title": "Option Key",
      "type": "string"
    },
    "values": {
      "additionalProperties": true,
      "title": "Values",
      "type": "object"
    }
  },
  "required": [
    "option_key",
    "values"
  ],
  "title": "rankmath_options_setArguments",
  "type": "object"
}
```

</details>

<a id="tool-rankmath_modules_toggle-d8331a05"></a>

## rankmath_modules_toggle

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Rank Math tool. Enable or disable RankMath modules (sitemap, redirections, 404-monitor, schema, analytics, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1069-L1078) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "module": {
      "title": "Module",
      "type": "string"
    },
    "enable": {
      "title": "Enable",
      "type": "boolean"
    }
  },
  "required": [
    "module",
    "enable"
  ],
  "title": "rankmath_modules_toggleArguments",
  "type": "object"
}
```

</details>

<a id="tool-rankmath_redirects_list-50fa1503"></a>

## rankmath_redirects_list

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Rank Math tool. List all RankMath redirections
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1080-L1089) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "per_page": {
      "default": 25,
      "title": "Per Page",
      "type": "integer"
    },
    "page": {
      "default": 1,
      "title": "Page",
      "type": "integer"
    }
  },
  "title": "rankmath_redirects_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-rankmath_redirects_create-18321fe0"></a>

## rankmath_redirects_create

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Rank Math tool. Create a redirect in RankMath
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1091-L1100) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "from_val": {
      "title": "From Val",
      "type": "string"
    },
    "to": {
      "title": "To",
      "type": "string"
    },
    "type": {
      "default": 301,
      "title": "Type",
      "type": "integer"
    },
    "status": {
      "default": "active",
      "title": "Status",
      "type": "string"
    }
  },
  "required": [
    "from_val",
    "to"
  ],
  "title": "rankmath_redirects_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-rankmath_redirects_update-b8a68d7a"></a>

## rankmath_redirects_update

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Rank Math tool. Update an existing RankMath redirect
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1102-L1112) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "title": "Id",
      "type": "integer"
    },
    "from_val": {
      "default": null,
      "title": "From Val",
      "type": "string"
    },
    "to": {
      "default": null,
      "title": "To",
      "type": "string"
    },
    "type": {
      "default": null,
      "title": "Type",
      "type": "integer"
    },
    "status": {
      "default": null,
      "title": "Status",
      "type": "string"
    }
  },
  "required": [
    "id"
  ],
  "title": "rankmath_redirects_updateArguments",
  "type": "object"
}
```

</details>

<a id="tool-rankmath_redirects_delete-396c2ec5"></a>

## rankmath_redirects_delete

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] Rank Math tool. Delete a RankMath redirect
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1114-L1120) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

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
  "title": "rankmath_redirects_deleteArguments",
  "type": "object"
}
```

</details>

<a id="tool-rankmath_404_monitor_list-b3e95116"></a>

## rankmath_404_monitor_list

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Rank Math tool. List 404 errors tracked by RankMath 404 Monitor
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1122-L1133) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "per_page": {
      "default": 25,
      "title": "Per Page",
      "type": "integer"
    },
    "page": {
      "default": 1,
      "title": "Page",
      "type": "integer"
    },
    "orderby": {
      "default": "times_accessed",
      "title": "Orderby",
      "type": "string"
    }
  },
  "title": "rankmath_404_monitor_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-rankmath_404_to_redirect-00ed16ed"></a>

## rankmath_404_to_redirect

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Rank Math tool. Convert a 404 entry to a redirect in RankMath
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1135-L1146) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "uri": {
      "title": "Uri",
      "type": "string"
    },
    "to": {
      "title": "To",
      "type": "string"
    },
    "type": {
      "default": 301,
      "title": "Type",
      "type": "integer"
    }
  },
  "required": [
    "uri",
    "to"
  ],
  "title": "rankmath_404_to_redirectArguments",
  "type": "object"
}
```

</details>

<a id="tool-rankmath_instant_index_url-44c98145"></a>

## rankmath_instant_index_url

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Rank Math tool. Submit a URL for instant indexing via RankMath IndexNow
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1148-L1155) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "url": {
      "title": "Url",
      "type": "string"
    }
  },
  "required": [
    "url"
  ],
  "title": "rankmath_instant_index_urlArguments",
  "type": "object"
}
```

</details>

<a id="tool-rankmath_sitemap_config-b44644f4"></a>

## rankmath_sitemap_config

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Rank Math tool. Get or update RankMath sitemap configuration (post types, taxonomies, author sitemap, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1157-L1166) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "action": {
      "default": "get",
      "title": "Action",
      "type": "string"
    },
    "settings": {
      "additionalProperties": true,
      "default": null,
      "title": "Settings",
      "type": "object"
    }
  },
  "title": "rankmath_sitemap_configArguments",
  "type": "object"
}
```

</details>

<a id="tool-rankmath_local_seo_configure-7abbaaca"></a>

## rankmath_local_seo_configure

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Rank Math tool. Configure RankMath Local SEO settings (business name, address, phone, hours, geo, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1168-L1189) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

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
    "business_type": {
      "default": null,
      "title": "Business Type",
      "type": "string"
    },
    "address": {
      "additionalProperties": true,
      "default": null,
      "title": "Address",
      "type": "object"
    },
    "phone": {
      "default": null,
      "title": "Phone",
      "type": "string"
    },
    "email": {
      "default": null,
      "title": "Email",
      "type": "string"
    },
    "geo": {
      "additionalProperties": true,
      "default": null,
      "title": "Geo",
      "type": "object"
    },
    "opening_hours": {
      "additionalProperties": true,
      "default": null,
      "title": "Opening Hours",
      "type": "object"
    },
    "price_range": {
      "default": null,
      "title": "Price Range",
      "type": "string"
    }
  },
  "title": "rankmath_local_seo_configureArguments",
  "type": "object"
}
```

</details>

<a id="tool-rankmath_title_template_set-7d6bd3b1"></a>

## rankmath_title_template_set

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Rank Math tool. Set RankMath title template for a post type or taxonomy (uses variables like %title%, %sitename%, %sep%)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1191-L1198) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "content_type": {
      "title": "Content Type",
      "type": "string"
    },
    "template": {
      "title": "Template",
      "type": "string"
    }
  },
  "required": [
    "content_type",
    "template"
  ],
  "title": "rankmath_title_template_setArguments",
  "type": "object"
}
```

</details>

<a id="tool-rankmath_metadesc_template_set-56fd3c88"></a>

## rankmath_metadesc_template_set

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Rank Math tool. Set RankMath meta description template for a post type or taxonomy
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1200-L1207) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "content_type": {
      "title": "Content Type",
      "type": "string"
    },
    "template": {
      "title": "Template",
      "type": "string"
    }
  },
  "required": [
    "content_type",
    "template"
  ],
  "title": "rankmath_metadesc_template_setArguments",
  "type": "object"
}
```

</details>

<a id="tool-rankmath_analytics_stats-81705763"></a>

## rankmath_analytics_stats

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Rank Math tool. Get RankMath Analytics/SEO statistics (search impressions, clicks, CTR, position)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1209-L1216) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "period": {
      "default": "30days",
      "title": "Period",
      "type": "string"
    }
  },
  "title": "rankmath_analytics_statsArguments",
  "type": "object"
}
```

</details>

<a id="tool-rankmath_content_ai_generate-c615abe8"></a>

## rankmath_content_ai_generate

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Rank Math tool. Use RankMath Content AI to generate SEO suggestions for a keyword
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1218-L1229) · Schema: tools/list.

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
    "country": {
      "default": "us",
      "title": "Country",
      "type": "string"
    },
    "language": {
      "default": "en",
      "title": "Language",
      "type": "string"
    }
  },
  "required": [
    "keyword"
  ],
  "title": "rankmath_content_ai_generateArguments",
  "type": "object"
}
```

</details>

<a id="tool-rankmath_noindex_toggle-c8775014"></a>

## rankmath_noindex_toggle

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Rank Math tool. Toggle noindex for a post via RankMath robots meta
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1231-L1241) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "title": "Id",
      "type": "integer"
    },
    "noindex": {
      "title": "Noindex",
      "type": "boolean"
    },
    "type": {
      "default": "post",
      "title": "Type",
      "type": "string"
    }
  },
  "required": [
    "id",
    "noindex"
  ],
  "title": "rankmath_noindex_toggleArguments",
  "type": "object"
}
```

</details>

<a id="tool-rankmath_primary_category_set-a612f946"></a>

## rankmath_primary_category_set

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Rank Math tool. Set the primary category for a post in RankMath
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1243-L1250) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "title": "Id",
      "type": "integer"
    },
    "category_id": {
      "title": "Category Id",
      "type": "integer"
    }
  },
  "required": [
    "id",
    "category_id"
  ],
  "title": "rankmath_primary_category_setArguments",
  "type": "object"
}
```

</details>

<a id="tool-sitemap_detect_source-0175ba28"></a>

## sitemap_detect_source

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Tool tool. Detect which sitemap provider is active (Core WP, Yoast, RankMath, AIOSEO)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1252-L1256) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "sitemap_detect_sourceArguments",
  "type": "object"
}
```

</details>

<a id="tool-sitemap_get_url-dc2f64c8"></a>

## sitemap_get_url

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Tool tool. Return the main sitemap URL for the site
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1258-L1262) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "sitemap_get_urlArguments",
  "type": "object"
}
```

</details>

<a id="tool-sitemap_get_index-74796489"></a>

## sitemap_get_index

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Tool tool. Fetch sitemap index entries (list of sub-sitemaps)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1264-L1268) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "sitemap_get_indexArguments",
  "type": "object"
}
```

</details>

<a id="tool-sitemap_submit_google-590daa87"></a>

## sitemap_submit_google

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Tool tool. Submit/ping sitemap to Google
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1270-L1277) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "sitemap_url": {
      "default": null,
      "title": "Sitemap Url",
      "type": "string"
    }
  },
  "title": "sitemap_submit_googleArguments",
  "type": "object"
}
```

</details>

<a id="tool-sitemap_submit_bing-7374e736"></a>

## sitemap_submit_bing

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Tool tool. Submit sitemap to Bing via IndexNow API
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1279-L1288) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "sitemap_url": {
      "default": null,
      "title": "Sitemap Url",
      "type": "string"
    },
    "api_key": {
      "default": null,
      "title": "Api Key",
      "type": "string"
    }
  },
  "title": "sitemap_submit_bingArguments",
  "type": "object"
}
```

</details>

<a id="tool-sitemap_submit_all-45bff461"></a>

## sitemap_submit_all

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Tool tool. Ping/submit sitemap to all major search engines (Google, Bing)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1290-L1299) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "sitemap_url": {
      "default": null,
      "title": "Sitemap Url",
      "type": "string"
    },
    "bing_api_key": {
      "default": null,
      "title": "Bing Api Key",
      "type": "string"
    }
  },
  "title": "sitemap_submit_allArguments",
  "type": "object"
}
```

</details>

<a id="tool-sitemap_exclude_post-2bc6f881"></a>

## sitemap_exclude_post

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Tool tool. Exclude a specific post from the sitemap (via noindex or plugin-specific setting)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1301-L1309) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "title": "Id",
      "type": "integer"
    },
    "type": {
      "default": "post",
      "title": "Type",
      "type": "string"
    }
  },
  "required": [
    "id"
  ],
  "title": "sitemap_exclude_postArguments",
  "type": "object"
}
```

</details>

<a id="tool-sitemap_exclude_post_type-a23bb6f0"></a>

## sitemap_exclude_post_type

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Tool tool. Exclude an entire post type from the sitemap
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1311-L1317) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_type": {
      "title": "Post Type",
      "type": "string"
    }
  },
  "required": [
    "post_type"
  ],
  "title": "sitemap_exclude_post_typeArguments",
  "type": "object"
}
```

</details>

<a id="tool-sitemap_include_custom_url-b4c29f62"></a>

## sitemap_include_custom_url

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Tool tool. Add a custom URL to the sitemap (via plugin settings)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1319-L1330) · Schema: tools/list.

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
    "priority": {
      "default": 0.5,
      "title": "Priority",
      "type": "integer"
    },
    "changefreq": {
      "default": "weekly",
      "title": "Changefreq",
      "type": "string"
    }
  },
  "required": [
    "url"
  ],
  "title": "sitemap_include_custom_urlArguments",
  "type": "object"
}
```

</details>

<a id="tool-sitemap_image_config-62172f90"></a>

## sitemap_image_config

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Tool tool. Enable or disable image sitemap (Yoast/RankMath)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1332-L1339) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "enabled": {
      "title": "Enabled",
      "type": "boolean"
    }
  },
  "required": [
    "enabled"
  ],
  "title": "sitemap_image_configArguments",
  "type": "object"
}
```

</details>

<a id="tool-sitemap_video_config-5748eb5d"></a>

## sitemap_video_config

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Tool tool. Enable or disable video sitemap (Yoast/RankMath)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1341-L1348) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "enabled": {
      "title": "Enabled",
      "type": "boolean"
    }
  },
  "required": [
    "enabled"
  ],
  "title": "sitemap_video_configArguments",
  "type": "object"
}
```

</details>

<a id="tool-sitemap_news_config-bff4cce3"></a>

## sitemap_news_config

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Tool tool. Configure news sitemap settings (Yoast News SEO / RankMath)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1350-L1361) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "enabled": {
      "title": "Enabled",
      "type": "boolean"
    },
    "publication_name": {
      "default": null,
      "title": "Publication Name",
      "type": "string"
    },
    "post_types": {
      "default": null,
      "items": {},
      "title": "Post Types",
      "type": "array"
    }
  },
  "required": [
    "enabled"
  ],
  "title": "sitemap_news_configArguments",
  "type": "object"
}
```

</details>

<a id="tool-yoast_get_post_seo-317f6c20"></a>

## yoast_get_post_seo

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Yoast SEO tool. Get all Yoast SEO settings for a post or page (title, description, focus keyword, OG, schema, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1363-L1370) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "title": "Id",
      "type": "integer"
    },
    "type": {
      "default": "post",
      "title": "Type",
      "type": "string"
    }
  },
  "required": [
    "id"
  ],
  "title": "yoast_get_post_seoArguments",
  "type": "object"
}
```

</details>

<a id="tool-yoast_update_post_seo-6ecbd35a"></a>

## yoast_update_post_seo

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Yoast SEO tool. Update Yoast SEO settings for a post/page — title, meta description, focus keyword, OG title/description, canonical URL, robots, etc.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1372-L1392) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "title": "Id",
      "type": "integer"
    },
    "type": {
      "default": "post",
      "title": "Type",
      "type": "string"
    },
    "seo_title": {
      "default": null,
      "title": "Seo Title",
      "type": "string"
    },
    "meta_description": {
      "default": null,
      "title": "Meta Description",
      "type": "string"
    },
    "focus_keyword": {
      "default": null,
      "title": "Focus Keyword",
      "type": "string"
    },
    "canonical_url": {
      "default": null,
      "title": "Canonical Url",
      "type": "string"
    },
    "og_title": {
      "default": null,
      "title": "Og Title",
      "type": "string"
    },
    "og_description": {
      "default": null,
      "title": "Og Description",
      "type": "string"
    },
    "og_image": {
      "default": null,
      "title": "Og Image",
      "type": "string"
    },
    "twitter_title": {
      "default": null,
      "title": "Twitter Title",
      "type": "string"
    },
    "twitter_description": {
      "default": null,
      "title": "Twitter Description",
      "type": "string"
    },
    "twitter_image": {
      "default": null,
      "title": "Twitter Image",
      "type": "string"
    },
    "noindex": {
      "default": null,
      "title": "Noindex",
      "type": "boolean"
    },
    "nofollow": {
      "default": null,
      "title": "Nofollow",
      "type": "boolean"
    },
    "schema_type": {
      "default": null,
      "title": "Schema Type",
      "type": "string"
    }
  },
  "required": [
    "id"
  ],
  "title": "yoast_update_post_seoArguments",
  "type": "object"
}
```

</details>

<a id="tool-yoast_bulk_update_seo-9cfb01db"></a>

## yoast_bulk_update_seo

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Yoast SEO tool. Update SEO meta for multiple posts at once
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1394-L1400) · Schema: tools/list.

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
    }
  },
  "required": [
    "updates"
  ],
  "title": "yoast_bulk_update_seoArguments",
  "type": "object"
}
```

</details>

<a id="tool-yoast_get_term_seo-633b8fcf"></a>

## yoast_get_term_seo

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Yoast SEO tool. Get Yoast SEO settings for a category, tag, or custom term
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1402-L1409) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "taxonomy": {
      "title": "Taxonomy",
      "type": "string"
    },
    "id": {
      "title": "Id",
      "type": "integer"
    }
  },
  "required": [
    "taxonomy",
    "id"
  ],
  "title": "yoast_get_term_seoArguments",
  "type": "object"
}
```

</details>

<a id="tool-yoast_update_term_seo-fa8969b4"></a>

## yoast_update_term_seo

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Yoast SEO tool. Update Yoast SEO settings for a taxonomy term
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1411-L1421) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "taxonomy": {
      "title": "Taxonomy",
      "type": "string"
    },
    "id": {
      "title": "Id",
      "type": "integer"
    },
    "seo_title": {
      "default": null,
      "title": "Seo Title",
      "type": "string"
    },
    "meta_description": {
      "default": null,
      "title": "Meta Description",
      "type": "string"
    },
    "noindex": {
      "default": null,
      "title": "Noindex",
      "type": "boolean"
    }
  },
  "required": [
    "taxonomy",
    "id"
  ],
  "title": "yoast_update_term_seoArguments",
  "type": "object"
}
```

</details>

<a id="tool-yoast_get_site_seo-cc341e48"></a>

## yoast_get_site_seo

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Yoast SEO tool. Get site-wide Yoast SEO settings (site name, separator, social profiles, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1423-L1427) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "yoast_get_site_seoArguments",
  "type": "object"
}
```

</details>

<a id="tool-yoast_update_site_seo-7cd7102b"></a>

## yoast_update_site_seo

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Yoast SEO tool. Update site-wide Yoast SEO settings
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1429-L1442) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "website_name": {
      "default": null,
      "title": "Website Name",
      "type": "string"
    },
    "title_separator": {
      "default": null,
      "title": "Title Separator",
      "type": "string"
    },
    "homepage_title": {
      "default": null,
      "title": "Homepage Title",
      "type": "string"
    },
    "homepage_description": {
      "default": null,
      "title": "Homepage Description",
      "type": "string"
    },
    "twitter_site": {
      "default": null,
      "title": "Twitter Site",
      "type": "string"
    },
    "facebook_url": {
      "default": null,
      "title": "Facebook Url",
      "type": "string"
    },
    "company_name": {
      "default": null,
      "title": "Company Name",
      "type": "string"
    },
    "company_logo": {
      "default": null,
      "title": "Company Logo",
      "type": "string"
    }
  },
  "title": "yoast_update_site_seoArguments",
  "type": "object"
}
```

</details>

<a id="tool-yoast_create_redirect-3e866cc3"></a>

## yoast_create_redirect

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Yoast SEO tool. Create a 301/302 redirect using Yoast SEO Premium or Redirection plugin
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1444-L1452) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "from_val": {
      "title": "From Val",
      "type": "string"
    },
    "to": {
      "title": "To",
      "type": "string"
    },
    "type": {
      "default": 301,
      "title": "Type",
      "type": "integer"
    }
  },
  "required": [
    "from_val",
    "to"
  ],
  "title": "yoast_create_redirectArguments",
  "type": "object"
}
```

</details>

<a id="tool-yoast_get_redirects-6d335094"></a>

## yoast_get_redirects

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Yoast SEO tool. List all Yoast redirects
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1454-L1458) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "yoast_get_redirectsArguments",
  "type": "object"
}
```

</details>

<a id="tool-yoast_analyze_content-f710bc2c"></a>

## yoast_analyze_content

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Yoast SEO tool. Get Yoast SEO readability and keyword analysis for a post (returns scores and suggestions)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1460-L1467) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "title": "Id",
      "type": "integer"
    },
    "type": {
      "default": "post",
      "title": "Type",
      "type": "string"
    }
  },
  "required": [
    "id"
  ],
  "title": "yoast_analyze_contentArguments",
  "type": "object"
}
```

</details>

<a id="tool-yoast_set_webmaster_codes-6d9db97b"></a>

## yoast_set_webmaster_codes

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Yoast SEO tool. Set Google Search Console, Bing, Yandex webmaster verification codes
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1469-L1478) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "google_verification": {
      "default": null,
      "title": "Google Verification",
      "type": "string"
    },
    "bing_verification": {
      "default": null,
      "title": "Bing Verification",
      "type": "string"
    },
    "yandex_verification": {
      "default": null,
      "title": "Yandex Verification",
      "type": "string"
    },
    "baidu_verification": {
      "default": null,
      "title": "Baidu Verification",
      "type": "string"
    }
  },
  "title": "yoast_set_webmaster_codesArguments",
  "type": "object"
}
```

</details>

<a id="tool-yoast_get_all_posts_seo_scores-3fb9104b"></a>

## yoast_get_all_posts_seo_scores

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Yoast SEO tool. Get SEO and readability scores for all posts (requires Yoast data in meta)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1480-L1491) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
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
    "type": {
      "default": "post",
      "title": "Type",
      "type": "string"
    }
  },
  "title": "yoast_get_all_posts_seo_scoresArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_set_post_meta_title-cbad38e8"></a>

## seo_set_post_meta_title

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Set SEO meta title for a post/page (works with Yoast, RankMath, AIOSEO, Slim SEO)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1493-L1501) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_id": {
      "title": "Post Id",
      "type": "integer"
    },
    "title": {
      "title": "Title",
      "type": "string"
    },
    "plugin": {
      "default": "auto",
      "title": "Plugin",
      "type": "string"
    }
  },
  "required": [
    "post_id",
    "title"
  ],
  "title": "seo_set_post_meta_titleArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_set_post_meta_description-3c7465a4"></a>

## seo_set_post_meta_description

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Set SEO meta description for a post/page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1503-L1511) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_id": {
      "title": "Post Id",
      "type": "integer"
    },
    "description": {
      "title": "Description",
      "type": "string"
    },
    "plugin": {
      "default": "auto",
      "title": "Plugin",
      "type": "string"
    }
  },
  "required": [
    "post_id",
    "description"
  ],
  "title": "seo_set_post_meta_descriptionArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_set_post_focus_keyword-699f4cc7"></a>

## seo_set_post_focus_keyword

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Set the focus/primary keyword for a post (Yoast or RankMath)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1513-L1521) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_id": {
      "title": "Post Id",
      "type": "integer"
    },
    "keyword": {
      "title": "Keyword",
      "type": "string"
    },
    "plugin": {
      "default": "auto",
      "title": "Plugin",
      "type": "string"
    }
  },
  "required": [
    "post_id",
    "keyword"
  ],
  "title": "seo_set_post_focus_keywordArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_set_post_canonical-f5d8dce2"></a>

## seo_set_post_canonical

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Set canonical URL for a post/page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1523-L1531) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_id": {
      "title": "Post Id",
      "type": "integer"
    },
    "canonical_url": {
      "title": "Canonical Url",
      "type": "string"
    },
    "plugin": {
      "default": "auto",
      "title": "Plugin",
      "type": "string"
    }
  },
  "required": [
    "post_id",
    "canonical_url"
  ],
  "title": "seo_set_post_canonicalArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_set_post_robots-40c88355"></a>

## seo_set_post_robots

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Set robots meta directives for a post/page (noindex, nofollow, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1533-L1544) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_id": {
      "title": "Post Id",
      "type": "integer"
    },
    "noindex": {
      "default": false,
      "title": "Noindex",
      "type": "boolean"
    },
    "nofollow": {
      "default": false,
      "title": "Nofollow",
      "type": "boolean"
    },
    "noarchive": {
      "default": false,
      "title": "Noarchive",
      "type": "boolean"
    },
    "noimageindex": {
      "default": false,
      "title": "Noimageindex",
      "type": "boolean"
    },
    "plugin": {
      "default": "auto",
      "title": "Plugin",
      "type": "string"
    }
  },
  "required": [
    "post_id"
  ],
  "title": "seo_set_post_robotsArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_set_og_title-6f739bd2"></a>

## seo_set_og_title

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Set Open Graph title for a post/page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1546-L1554) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_id": {
      "title": "Post Id",
      "type": "integer"
    },
    "og_title": {
      "title": "Og Title",
      "type": "string"
    },
    "plugin": {
      "default": "auto",
      "title": "Plugin",
      "type": "string"
    }
  },
  "required": [
    "post_id",
    "og_title"
  ],
  "title": "seo_set_og_titleArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_set_og_description-cd179964"></a>

## seo_set_og_description

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Set Open Graph description for a post/page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1556-L1564) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_id": {
      "title": "Post Id",
      "type": "integer"
    },
    "og_description": {
      "title": "Og Description",
      "type": "string"
    },
    "plugin": {
      "default": "auto",
      "title": "Plugin",
      "type": "string"
    }
  },
  "required": [
    "post_id",
    "og_description"
  ],
  "title": "seo_set_og_descriptionArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_set_og_image-ff235b94"></a>

## seo_set_og_image

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Set Open Graph (social share) image for a post/page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1566-L1575) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_id": {
      "title": "Post Id",
      "type": "integer"
    },
    "image_id": {
      "default": null,
      "title": "Image Id",
      "type": "integer"
    },
    "image_url": {
      "default": null,
      "title": "Image Url",
      "type": "string"
    },
    "plugin": {
      "default": "auto",
      "title": "Plugin",
      "type": "string"
    }
  },
  "required": [
    "post_id"
  ],
  "title": "seo_set_og_imageArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_set_twitter_card-9f9500a2"></a>

## seo_set_twitter_card

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Set Twitter Card meta for a post/page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1577-L1588) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_id": {
      "title": "Post Id",
      "type": "integer"
    },
    "twitter_title": {
      "default": null,
      "title": "Twitter Title",
      "type": "string"
    },
    "twitter_description": {
      "default": null,
      "title": "Twitter Description",
      "type": "string"
    },
    "twitter_image_id": {
      "default": null,
      "title": "Twitter Image Id",
      "type": "integer"
    },
    "twitter_card_type": {
      "default": "summary_large_image",
      "title": "Twitter Card Type",
      "type": "string"
    },
    "plugin": {
      "default": "auto",
      "title": "Plugin",
      "type": "string"
    }
  },
  "required": [
    "post_id"
  ],
  "title": "seo_set_twitter_cardArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_set_tag_meta-eddada7f"></a>

## seo_set_tag_meta

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Set SEO meta title and description for a post tag
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1590-L1602) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "tag_id": {
      "title": "Tag Id",
      "type": "integer"
    },
    "title": {
      "default": null,
      "title": "Title",
      "type": "string"
    },
    "description": {
      "default": null,
      "title": "Description",
      "type": "string"
    },
    "og_title": {
      "default": null,
      "title": "Og Title",
      "type": "string"
    },
    "og_description": {
      "default": null,
      "title": "Og Description",
      "type": "string"
    },
    "noindex": {
      "default": null,
      "title": "Noindex",
      "type": "boolean"
    },
    "plugin": {
      "default": "auto",
      "title": "Plugin",
      "type": "string"
    }
  },
  "required": [
    "tag_id"
  ],
  "title": "seo_set_tag_metaArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_set_category_meta-333556dc"></a>

## seo_set_category_meta

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Set SEO meta title and description for a category
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1604-L1616) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "category_id": {
      "title": "Category Id",
      "type": "integer"
    },
    "title": {
      "default": null,
      "title": "Title",
      "type": "string"
    },
    "description": {
      "default": null,
      "title": "Description",
      "type": "string"
    },
    "og_title": {
      "default": null,
      "title": "Og Title",
      "type": "string"
    },
    "og_description": {
      "default": null,
      "title": "Og Description",
      "type": "string"
    },
    "noindex": {
      "default": null,
      "title": "Noindex",
      "type": "boolean"
    },
    "plugin": {
      "default": "auto",
      "title": "Plugin",
      "type": "string"
    }
  },
  "required": [
    "category_id"
  ],
  "title": "seo_set_category_metaArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_set_custom_taxonomy_meta-5c774c40"></a>

## seo_set_custom_taxonomy_meta

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Set SEO meta for any custom taxonomy term
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1618-L1629) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "taxonomy": {
      "title": "Taxonomy",
      "type": "string"
    },
    "term_id": {
      "title": "Term Id",
      "type": "integer"
    },
    "title": {
      "default": null,
      "title": "Title",
      "type": "string"
    },
    "description": {
      "default": null,
      "title": "Description",
      "type": "string"
    },
    "noindex": {
      "default": null,
      "title": "Noindex",
      "type": "boolean"
    },
    "plugin": {
      "default": "auto",
      "title": "Plugin",
      "type": "string"
    }
  },
  "required": [
    "taxonomy",
    "term_id"
  ],
  "title": "seo_set_custom_taxonomy_metaArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_get_taxonomy_seo-4eee4170"></a>

## seo_get_taxonomy_seo

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Tool tool. Get current SEO meta for a taxonomy term (category, tag, custom)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1631-L1640) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "taxonomy": {
      "title": "Taxonomy",
      "type": "string"
    },
    "term_id": {
      "title": "Term Id",
      "type": "integer"
    }
  },
  "required": [
    "taxonomy",
    "term_id"
  ],
  "title": "seo_get_taxonomy_seoArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_audit_posts_seo-2dba120a"></a>

## seo_audit_posts_seo

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Tool tool. Audit all posts/pages for missing or weak SEO meta (title, description, focus keyword)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1642-L1656) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_type": {
      "default": "post",
      "title": "Post Type",
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
    "check_focus_keyword": {
      "default": true,
      "title": "Check Focus Keyword",
      "type": "boolean"
    },
    "check_og_image": {
      "default": true,
      "title": "Check Og Image",
      "type": "boolean"
    }
  },
  "title": "seo_audit_posts_seoArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_get_posts_without_meta-c618a1ef"></a>

## seo_get_posts_without_meta

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Tool tool. Get all posts/pages missing SEO meta title or description
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1658-L1668) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_type": {
      "default": "post",
      "title": "Post Type",
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
    }
  },
  "title": "seo_get_posts_without_metaArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_get_posts_without_focus_keyword-1fbef27a"></a>

## seo_get_posts_without_focus_keyword

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Tool tool. Get all posts/pages without a set focus keyword
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1670-L1680) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_type": {
      "default": "post",
      "title": "Post Type",
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
    }
  },
  "title": "seo_get_posts_without_focus_keywordArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_find_duplicate_titles-39a980a6"></a>

## seo_find_duplicate_titles

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Find posts/pages with duplicate SEO meta titles
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1682-L1688) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_type": {
      "default": "any",
      "title": "Post Type",
      "type": "string"
    }
  },
  "title": "seo_find_duplicate_titlesArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_find_duplicate_descriptions-8921d1bb"></a>

## seo_find_duplicate_descriptions

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Find posts/pages with duplicate meta descriptions
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1690-L1696) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_type": {
      "default": "any",
      "title": "Post Type",
      "type": "string"
    }
  },
  "title": "seo_find_duplicate_descriptionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_find_missing_alt_text-ccae1828"></a>

## seo_find_missing_alt_text

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Tool tool. Find images in media library or posts missing alt text
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1698-L1707) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "per_page": {
      "default": 50,
      "title": "Per Page",
      "type": "integer"
    },
    "page": {
      "default": 1,
      "title": "Page",
      "type": "integer"
    }
  },
  "title": "seo_find_missing_alt_textArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_find_thin_content-3f7dbf03"></a>

## seo_find_thin_content

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Tool tool. Find posts/pages with thin content (below word count threshold)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1709-L1721) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "min_word_count": {
      "default": 300,
      "title": "Min Word Count",
      "type": "integer"
    },
    "post_type": {
      "default": "post",
      "title": "Post Type",
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
    }
  },
  "title": "seo_find_thin_contentArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_analyze_heading_structure-e7a48b65"></a>

## seo_analyze_heading_structure

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Tool tool. Analyze heading structure (H1, H2, H3...) for a post/page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1723-L1729) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_id": {
      "title": "Post Id",
      "type": "integer"
    }
  },
  "required": [
    "post_id"
  ],
  "title": "seo_analyze_heading_structureArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_bulk_set_meta_from_title-3069e5d1"></a>

## seo_bulk_set_meta_from_title

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Bulk generate and set SEO meta titles from post titles for multiple posts
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1731-L1739) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_ids": {
      "items": {},
      "title": "Post Ids",
      "type": "array"
    },
    "title_pattern": {
      "title": "Title Pattern",
      "type": "string"
    },
    "plugin": {
      "default": "auto",
      "title": "Plugin",
      "type": "string"
    }
  },
  "required": [
    "post_ids",
    "title_pattern"
  ],
  "title": "seo_bulk_set_meta_from_titleArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_bulk_noindex-328365f3"></a>

## seo_bulk_noindex

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Tool tool. Bulk set noindex on multiple posts/pages
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1741-L1752) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_ids": {
      "items": {},
      "title": "Post Ids",
      "type": "array"
    },
    "noindex": {
      "default": true,
      "title": "Noindex",
      "type": "boolean"
    },
    "plugin": {
      "default": "auto",
      "title": "Plugin",
      "type": "string"
    }
  },
  "required": [
    "post_ids"
  ],
  "title": "seo_bulk_noindexArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_add_faq_schema-3fe949cd"></a>

## seo_add_faq_schema

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Add FAQ schema markup to a post/page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1754-L1761) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_id": {
      "default": null,
      "title": "Post Id",
      "type": "integer"
    },
    "faqs": {
      "default": null,
      "items": {},
      "title": "Faqs",
      "type": "array"
    }
  },
  "title": "seo_add_faq_schemaArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_add_howto_schema-3bc58e9d"></a>

## seo_add_howto_schema

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Add HowTo schema markup to a post/page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1763-L1774) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_id": {
      "title": "Post Id",
      "type": "integer"
    },
    "name": {
      "title": "Name",
      "type": "string"
    },
    "steps": {
      "items": {},
      "title": "Steps",
      "type": "array"
    },
    "description": {
      "default": null,
      "title": "Description",
      "type": "string"
    },
    "total_time": {
      "default": null,
      "title": "Total Time",
      "type": "string"
    },
    "estimated_cost": {
      "default": null,
      "title": "Estimated Cost",
      "type": "string"
    }
  },
  "required": [
    "post_id",
    "name",
    "steps"
  ],
  "title": "seo_add_howto_schemaArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_add_article_schema-7a153504"></a>

## seo_add_article_schema

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Add Article/BlogPosting schema to a post
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1776-L1786) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_id": {
      "title": "Post Id",
      "type": "integer"
    },
    "article_type": {
      "default": "BlogPosting",
      "title": "Article Type",
      "type": "string"
    },
    "author_name": {
      "default": null,
      "title": "Author Name",
      "type": "string"
    },
    "date_published": {
      "default": null,
      "title": "Date Published",
      "type": "string"
    },
    "date_modified": {
      "default": null,
      "title": "Date Modified",
      "type": "string"
    }
  },
  "required": [
    "post_id"
  ],
  "title": "seo_add_article_schemaArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_add_product_schema-4d218870"></a>

## seo_add_product_schema

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Add Product schema to a post or WooCommerce product
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1788-L1803) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_id": {
      "title": "Post Id",
      "type": "integer"
    },
    "product_name": {
      "default": null,
      "title": "Product Name",
      "type": "string"
    },
    "description": {
      "default": null,
      "title": "Description",
      "type": "string"
    },
    "sku": {
      "default": null,
      "title": "Sku",
      "type": "string"
    },
    "price": {
      "default": null,
      "title": "Price",
      "type": "string"
    },
    "currency": {
      "default": "USD",
      "title": "Currency",
      "type": "string"
    },
    "availability": {
      "default": "InStock",
      "title": "Availability",
      "type": "string"
    },
    "brand": {
      "default": null,
      "title": "Brand",
      "type": "string"
    },
    "rating_value": {
      "default": null,
      "title": "Rating Value",
      "type": "integer"
    },
    "review_count": {
      "default": null,
      "title": "Review Count",
      "type": "integer"
    }
  },
  "required": [
    "post_id"
  ],
  "title": "seo_add_product_schemaArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_add_review_schema-0d86b380"></a>

## seo_add_review_schema

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Add Review schema markup to a post/page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1805-L1819) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_id": {
      "title": "Post Id",
      "type": "integer"
    },
    "item_name": {
      "title": "Item Name",
      "type": "string"
    },
    "rating_value": {
      "title": "Rating Value",
      "type": "integer"
    },
    "item_type": {
      "default": null,
      "title": "Item Type",
      "type": "string"
    },
    "best_rating": {
      "default": 5,
      "title": "Best Rating",
      "type": "integer"
    },
    "worst_rating": {
      "default": 1,
      "title": "Worst Rating",
      "type": "integer"
    },
    "author": {
      "default": null,
      "title": "Author",
      "type": "string"
    },
    "review_body": {
      "default": null,
      "title": "Review Body",
      "type": "string"
    },
    "date_published": {
      "default": null,
      "title": "Date Published",
      "type": "string"
    }
  },
  "required": [
    "post_id",
    "item_name",
    "rating_value"
  ],
  "title": "seo_add_review_schemaArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_add_local_business_schema-94cbff86"></a>

## seo_add_local_business_schema

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Add LocalBusiness schema markup (great for local SEO)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1821-L1841) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_id": {
      "title": "Post Id",
      "type": "integer"
    },
    "business_name": {
      "title": "Business Name",
      "type": "string"
    },
    "business_type": {
      "default": null,
      "title": "Business Type",
      "type": "string"
    },
    "address_street": {
      "default": null,
      "title": "Address Street",
      "type": "string"
    },
    "address_city": {
      "default": null,
      "title": "Address City",
      "type": "string"
    },
    "address_state": {
      "default": null,
      "title": "Address State",
      "type": "string"
    },
    "address_postal_code": {
      "default": null,
      "title": "Address Postal Code",
      "type": "string"
    },
    "address_country": {
      "default": null,
      "title": "Address Country",
      "type": "string"
    },
    "telephone": {
      "default": null,
      "title": "Telephone",
      "type": "string"
    },
    "opening_hours": {
      "default": null,
      "items": {},
      "title": "Opening Hours",
      "type": "array"
    },
    "geo_latitude": {
      "default": null,
      "title": "Geo Latitude",
      "type": "integer"
    },
    "geo_longitude": {
      "default": null,
      "title": "Geo Longitude",
      "type": "integer"
    },
    "price_range": {
      "default": null,
      "title": "Price Range",
      "type": "string"
    },
    "image_url": {
      "default": null,
      "title": "Image Url",
      "type": "string"
    },
    "website_url": {
      "default": null,
      "title": "Website Url",
      "type": "string"
    }
  },
  "required": [
    "post_id",
    "business_name"
  ],
  "title": "seo_add_local_business_schemaArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_add_event_schema-c2c2db78"></a>

## seo_add_event_schema

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Add Event schema markup to a post/page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1843-L1861) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_id": {
      "title": "Post Id",
      "type": "integer"
    },
    "event_name": {
      "title": "Event Name",
      "type": "string"
    },
    "start_date": {
      "title": "Start Date",
      "type": "string"
    },
    "end_date": {
      "default": null,
      "title": "End Date",
      "type": "string"
    },
    "description": {
      "default": null,
      "title": "Description",
      "type": "string"
    },
    "location_name": {
      "default": null,
      "title": "Location Name",
      "type": "string"
    },
    "location_address": {
      "default": null,
      "title": "Location Address",
      "type": "string"
    },
    "event_status": {
      "default": "EventScheduled",
      "title": "Event Status",
      "type": "string"
    },
    "event_attendance_mode": {
      "default": null,
      "title": "Event Attendance Mode",
      "type": "string"
    },
    "image_url": {
      "default": null,
      "title": "Image Url",
      "type": "string"
    },
    "organizer": {
      "default": null,
      "title": "Organizer",
      "type": "string"
    },
    "price": {
      "default": null,
      "title": "Price",
      "type": "string"
    },
    "currency": {
      "default": null,
      "title": "Currency",
      "type": "string"
    }
  },
  "required": [
    "post_id",
    "event_name",
    "start_date"
  ],
  "title": "seo_add_event_schemaArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_create_301_redirect-5c38c51d"></a>

## seo_create_301_redirect

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a 301 permanent redirect
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1863-L1871) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "from_url": {
      "title": "From Url",
      "type": "string"
    },
    "to_url": {
      "title": "To Url",
      "type": "string"
    },
    "plugin": {
      "default": "auto",
      "title": "Plugin",
      "type": "string"
    }
  },
  "required": [
    "from_url",
    "to_url"
  ],
  "title": "seo_create_301_redirectArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_create_302_redirect-b97756c1"></a>

## seo_create_302_redirect

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a 302 temporary redirect
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1873-L1880) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "from_url": {
      "title": "From Url",
      "type": "string"
    },
    "to_url": {
      "title": "To Url",
      "type": "string"
    }
  },
  "required": [
    "from_url",
    "to_url"
  ],
  "title": "seo_create_302_redirectArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_list_redirects-89d71841"></a>

## seo_list_redirects

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Tool tool. List all SEO redirects
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1882-L1893) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
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
    "plugin": {
      "default": "auto",
      "title": "Plugin",
      "type": "string"
    }
  },
  "title": "seo_list_redirectsArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_delete_redirect-334cae74"></a>

## seo_delete_redirect

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] Tool tool. Delete a redirect
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1895-L1902) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "title": "Id",
      "type": "integer"
    },
    "plugin": {
      "default": "auto",
      "title": "Plugin",
      "type": "string"
    }
  },
  "required": [
    "id"
  ],
  "title": "seo_delete_redirectArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_get_sitemap_url-32b3fa02"></a>

## seo_get_sitemap_url

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Tool tool. Get the sitemap URL(s) for the site
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1904-L1908) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "seo_get_sitemap_urlArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_ping_sitemap_to_google-25141b1a"></a>

## seo_ping_sitemap_to_google

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Tool tool. Ping Google Search Console to re-index the sitemap
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1910-L1917) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "sitemap_url": {
      "default": null,
      "title": "Sitemap Url",
      "type": "string"
    }
  },
  "title": "seo_ping_sitemap_to_googleArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_exclude_from_sitemap-7d9945e6"></a>

## seo_exclude_from_sitemap

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Tool tool. Exclude a post/page/term from the XML sitemap
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1919-L1929) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_id": {
      "title": "Post Id",
      "type": "integer"
    },
    "exclude": {
      "default": true,
      "title": "Exclude",
      "type": "boolean"
    },
    "plugin": {
      "default": "auto",
      "title": "Plugin",
      "type": "string"
    }
  },
  "required": [
    "post_id"
  ],
  "title": "seo_exclude_from_sitemapArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_get_all_noindex_pages-0b0b5087"></a>

## seo_get_all_noindex_pages

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Tool tool. List all posts/pages currently set to noindex
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1931-L1939) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_type": {
      "default": "any",
      "title": "Post Type",
      "type": "string"
    },
    "per_page": {
      "default": 50,
      "title": "Per Page",
      "type": "integer"
    }
  },
  "title": "seo_get_all_noindex_pagesArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_check_canonical_issues-1713b05f"></a>

## seo_check_canonical_issues

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Tool tool. Find posts/pages with canonical URL issues (missing or pointing to wrong URL)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1941-L1949) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_type": {
      "default": "post",
      "title": "Post Type",
      "type": "string"
    },
    "per_page": {
      "default": 50,
      "title": "Per Page",
      "type": "integer"
    }
  },
  "title": "seo_check_canonical_issuesArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_set_breadcrumbs_settings-322db5f5"></a>

## seo_set_breadcrumbs_settings

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Configure breadcrumbs settings (SEO plugin)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1951-L1962) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "enabled": {
      "default": null,
      "title": "Enabled",
      "type": "boolean"
    },
    "separator": {
      "default": "»",
      "title": "Separator",
      "type": "string"
    },
    "home_text": {
      "default": "Home",
      "title": "Home Text",
      "type": "string"
    },
    "show_current": {
      "default": true,
      "title": "Show Current",
      "type": "boolean"
    },
    "show_category": {
      "default": true,
      "title": "Show Category",
      "type": "boolean"
    },
    "plugin": {
      "default": "auto",
      "title": "Plugin",
      "type": "string"
    }
  },
  "title": "seo_set_breadcrumbs_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_set_site_verification-1dcdefe5"></a>

## seo_set_site_verification

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Set site verification codes (Google, Bing, Pinterest, Yandex)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1964-L1975) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "google": {
      "default": null,
      "title": "Google",
      "type": "string"
    },
    "bing": {
      "default": null,
      "title": "Bing",
      "type": "string"
    },
    "pinterest": {
      "default": null,
      "title": "Pinterest",
      "type": "string"
    },
    "yandex": {
      "default": null,
      "title": "Yandex",
      "type": "string"
    },
    "baidu": {
      "default": null,
      "title": "Baidu",
      "type": "string"
    },
    "plugin": {
      "default": "auto",
      "title": "Plugin",
      "type": "string"
    }
  },
  "title": "seo_set_site_verificationArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_set_homepage_meta-ffe939e6"></a>

## seo_set_homepage_meta

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Set SEO meta title and description for the homepage
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1977-L1988) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "title": {
      "default": null,
      "title": "Title",
      "type": "string"
    },
    "description": {
      "default": null,
      "title": "Description",
      "type": "string"
    },
    "og_title": {
      "default": null,
      "title": "Og Title",
      "type": "string"
    },
    "og_description": {
      "default": null,
      "title": "Og Description",
      "type": "string"
    },
    "og_image_id": {
      "default": null,
      "title": "Og Image Id",
      "type": "integer"
    },
    "plugin": {
      "default": "auto",
      "title": "Plugin",
      "type": "string"
    }
  },
  "title": "seo_set_homepage_metaArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_set_archives_settings-669c1328"></a>

## seo_set_archives_settings

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Configure SEO settings for author, date, and search archives
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L1990-L2001) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "author_archive_enabled": {
      "default": null,
      "title": "Author Archive Enabled",
      "type": "boolean"
    },
    "author_archive_noindex": {
      "default": null,
      "title": "Author Archive Noindex",
      "type": "boolean"
    },
    "date_archive_enabled": {
      "default": null,
      "title": "Date Archive Enabled",
      "type": "boolean"
    },
    "date_archive_noindex": {
      "default": null,
      "title": "Date Archive Noindex",
      "type": "boolean"
    },
    "search_noindex": {
      "default": null,
      "title": "Search Noindex",
      "type": "boolean"
    },
    "plugin": {
      "default": "auto",
      "title": "Plugin",
      "type": "string"
    }
  },
  "title": "seo_set_archives_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_set_social_profiles-78b26345"></a>

## seo_set_social_profiles

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Set social media profile URLs for knowledge graph / SEO
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L2003-L2015) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "facebook_url": {
      "default": null,
      "title": "Facebook Url",
      "type": "string"
    },
    "twitter_username": {
      "default": null,
      "title": "Twitter Username",
      "type": "string"
    },
    "instagram_url": {
      "default": null,
      "title": "Instagram Url",
      "type": "string"
    },
    "linkedin_url": {
      "default": null,
      "title": "Linkedin Url",
      "type": "string"
    },
    "youtube_url": {
      "default": null,
      "title": "Youtube Url",
      "type": "string"
    },
    "pinterest_url": {
      "default": null,
      "title": "Pinterest Url",
      "type": "string"
    },
    "plugin": {
      "default": "auto",
      "title": "Plugin",
      "type": "string"
    }
  },
  "title": "seo_set_social_profilesArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_set_organization_info-15cf0ab1"></a>

## seo_set_organization_info

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Set organization/person info for SEO knowledge graph
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L2017-L2028) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "entity_type": {
      "default": "company",
      "title": "Entity Type",
      "type": "string"
    },
    "name": {
      "default": null,
      "title": "Name",
      "type": "string"
    },
    "logo_id": {
      "default": null,
      "title": "Logo Id",
      "type": "integer"
    },
    "description": {
      "default": null,
      "title": "Description",
      "type": "string"
    },
    "same_as": {
      "default": null,
      "items": {},
      "title": "Same As",
      "type": "array"
    },
    "plugin": {
      "default": "auto",
      "title": "Plugin",
      "type": "string"
    }
  },
  "title": "seo_set_organization_infoArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_get_blog_seo_overview-6528b741"></a>

## seo_get_blog_seo_overview

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Tool tool. Get SEO overview for all blog posts: meta completeness, scores, keywords
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L2030-L2041) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
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
      "default": "publish",
      "title": "Status",
      "type": "string"
    }
  },
  "title": "seo_get_blog_seo_overviewArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_update_post_slug-13b65258"></a>

## seo_update_post_slug

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Update the URL slug (permalink) of a post/page for SEO
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L2043-L2051) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_id": {
      "title": "Post Id",
      "type": "integer"
    },
    "slug": {
      "title": "Slug",
      "type": "string"
    },
    "auto_redirect": {
      "default": true,
      "title": "Auto Redirect",
      "type": "boolean"
    }
  },
  "required": [
    "post_id",
    "slug"
  ],
  "title": "seo_update_post_slugArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_get_robots_txt-22140e1d"></a>

## seo_get_robots_txt

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Tool tool. Get the current robots.txt content
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L2053-L2057) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "seo_get_robots_txtArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_update_robots_txt-a17852b8"></a>

## seo_update_robots_txt

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Update the robots.txt file content
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L2059-L2066) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "content": {
      "title": "Content",
      "type": "string"
    },
    "plugin": {
      "default": "auto",
      "title": "Plugin",
      "type": "string"
    }
  },
  "required": [
    "content"
  ],
  "title": "seo_update_robots_txtArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_inject_json_ld-39de2195"></a>

## seo_inject_json_ld

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Tool tool. Inject custom JSON-LD structured data into a post/page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L2068-L2078) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_id": {
      "title": "Post Id",
      "type": "integer"
    },
    "json_ld": {
      "additionalProperties": true,
      "title": "Json Ld",
      "type": "object"
    },
    "plugin": {
      "default": "rankmath",
      "title": "Plugin",
      "type": "string"
    }
  },
  "required": [
    "post_id",
    "json_ld"
  ],
  "title": "seo_inject_json_ldArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_get_post_schema-a0456c97"></a>

## seo_get_post_schema

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Tool tool. Get the current structured data/schema for a post/page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L2080-L2086) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_id": {
      "title": "Post Id",
      "type": "integer"
    }
  },
  "required": [
    "post_id"
  ],
  "title": "seo_get_post_schemaArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_set_image_alt-9966a4a6"></a>

## seo_set_image_alt

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Set alt text for a media library image
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L2088-L2098) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "image_id": {
      "title": "Image Id",
      "type": "integer"
    },
    "alt": {
      "title": "Alt",
      "type": "string"
    },
    "title": {
      "default": null,
      "title": "Title",
      "type": "string"
    },
    "caption": {
      "default": null,
      "title": "Caption",
      "type": "string"
    },
    "description": {
      "default": null,
      "title": "Description",
      "type": "string"
    }
  },
  "required": [
    "image_id",
    "alt"
  ],
  "title": "seo_set_image_altArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_bulk_set_image_alt-7fc0e9ad"></a>

## seo_bulk_set_image_alt

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Bulk set alt text for multiple images
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L2100-L2106) · Schema: tools/list.

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
    }
  },
  "required": [
    "updates"
  ],
  "title": "seo_bulk_set_image_altArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_list_images_without_alt-7d6cde6d"></a>

## seo_list_images_without_alt

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Tool tool. List all media library images missing alt text
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L2108-L2117) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "per_page": {
      "default": 50,
      "title": "Per Page",
      "type": "integer"
    },
    "page": {
      "default": 1,
      "title": "Page",
      "type": "integer"
    }
  },
  "title": "seo_list_images_without_altArguments",
  "type": "object"
}
```

</details>

<a id="tool-wordpress_list_sites-e0cb8eaa"></a>

## wordpress_list_sites

Handler: Other product (tools/wordpress/sites.py): calls mcp.tool, current\_user\_ctx.get, getattr, \_json, \_load\_user\_wordpress\_connections, \_public.

```text
[READ] WordPress tool. List the WordPress sites connected to this account, with their ids and which one is selected.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/sites.py#L37-L51) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wordpress_list_sitesArguments",
  "type": "object"
}
```

</details>

<a id="tool-wordpress_select_site-e7c11169"></a>

## wordpress_select_site

Handler: Other product (tools/wordpress/sites.py): calls mcp.tool, current\_user\_ctx.get, current\_connection\_token\_ctx.get, (connection\_id or '').strip, \_load\_user\_wordpress\_connections, next, provider().select\_wordpress\_connection, \_json.

```text
[READ] WordPress tool. Choose which connected WordPress site later tools act on. Takes a connection_id from wordpress_list_sites.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/sites.py#L54-L84) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "connection_id": {
      "title": "Connection Id",
      "type": "string"
    }
  },
  "required": [
    "connection_id"
  ],
  "title": "wordpress_select_siteArguments",
  "type": "object"
}
```

</details>

<a id="tool-wordpress_current_site-28fc820b"></a>

## wordpress_current_site

Handler: Other product (tools/wordpress/sites.py): calls mcp.tool, current\_connection\_token\_ctx.get, \_json, current\_user\_ctx.get, \_load\_user\_wordpress\_connections, resolve\_wp\_creds, creds.get.

```text
[READ] WordPress tool. Show which WordPress site the current session will act on, and why that one.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/sites.py#L87-L112) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wordpress_current_siteArguments",
  "type": "object"
}
```

</details>

<a id="tool-wordpress_site_info-d95c0020"></a>

## wordpress_site_info

Handler: Other product (tools/wordpress/sites.py): calls mcp.tool, creds.get, isinstance, \_json, resolve\_wp\_creds, \_wp().get, \_wp, info.get.

```text
[READ] WordPress tool. Get the connected WordPress site's name, description, and URL.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/sites.py#L115-L138) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wordpress_site_infoArguments",
  "type": "object"
}
```

</details>

<a id="tool-list_actions-7a18d172"></a>

## list_actions

Handler: Local action-discovery handler: calls slim\_mcp.tool, list\_actions, ToolAnnotations.

```text
List available actions inside a category before calling that category tool. Returns each action's dispatch name, human title, description, parameter schema, and agent hints for account IDs, safe paused writes, and image/video uploads. Use `search` when you only know part of the action name. For long-running actions, tell the user which step is running before you call the tool.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/slim_mcp.py#L173-L198) · Schema: tools/list.

Exposure: Default slim surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "category": {
      "title": "Category",
      "type": "string"
    },
    "search": {
      "default": "",
      "title": "Search",
      "type": "string"
    },
    "limit": {
      "default": 200,
      "title": "Limit",
      "type": "integer"
    },
    "offset": {
      "default": 0,
      "title": "Offset",
      "type": "integer"
    }
  },
  "required": [
    "category"
  ],
  "title": "slim_list_actionsArguments",
  "type": "object"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": false
}
```

</details>

<a id="tool-agency_action-0b1a45a4"></a>

## agency_action

Handler: Other product (slim\_mcp.py): calls \_serialize\_tool\_result, current\_user\_ctx.get, RuntimeError, list\_actions, dispatch, payload.get.

```text
Run agency-workflow actions — multi-account audits, weekly reports, wasted-spend reports, pacing across all channels. Call `list_actions` first when you need to discover the exact action name, human title, parameter schema, or image/video upload path. For long-running calls, tell the user the current step before invoking the action so the chat does not look stuck.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/slim_mcp.py#L234-L249) · Schema: tools/list.

Exposure: Default slim surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "action": {
      "title": "Action",
      "type": "string"
    },
    "params": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Params"
    }
  },
  "required": [
    "action"
  ],
  "title": "category_toolArguments",
  "type": "object"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-creative_action-f70ffff2"></a>

## creative_action

Handler: Other product (slim\_mcp.py): calls \_serialize\_tool\_result, current\_user\_ctx.get, RuntimeError, list\_actions, dispatch, payload.get.

```text
Generate ad creative images via OpenAI image models. Call `list_actions` first when you need to discover the exact action name, human title, parameter schema, or image/video upload path. For long-running calls, tell the user the current step before invoking the action so the chat does not look stuck.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/slim_mcp.py#L234-L249) · Schema: tools/list.

Exposure: Default slim surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "action": {
      "title": "Action",
      "type": "string"
    },
    "params": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Params"
    }
  },
  "required": [
    "action"
  ],
  "title": "category_toolArguments",
  "type": "object"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-ga4_action-1387e1d5"></a>

## ga4_action

Handler: Other product (slim\_mcp.py): calls \_serialize\_tool\_result, current\_user\_ctx.get, RuntimeError, list\_actions, dispatch, payload.get.

```text
GA4 actions. Start with ga4_list_properties, ga4_overview, ga4_traffic_sources, ga4_top_pages, ga4_conversions, and GA preset dashboards. Call `list_actions` first when you need to discover the exact action name, human title, parameter schema, or image/video upload path. For long-running calls, tell the user the current step before invoking the action so the chat does not look stuck.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/slim_mcp.py#L234-L249) · Schema: tools/list.

Exposure: Default slim surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "action": {
      "title": "Action",
      "type": "string"
    },
    "params": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Params"
    }
  },
  "required": [
    "action"
  ],
  "title": "category_toolArguments",
  "type": "object"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-google_ads_action-335e971b"></a>

## google_ads_action

Handler: Other product (slim\_mcp.py): calls \_serialize\_tool\_result, current\_user\_ctx.get, RuntimeError, list\_actions, dispatch, payload.get.

```text
Google Ads actions. Start with google_ads_find_account when an account is missing or under an MCC; otherwise use google_ads_list_customers, google_ads_account_overview, google_ads_campaign_performance, google_ads_search_terms, google_ads_recommendations. Write actions should create PAUSED entities unless explicitly requested. Call `list_actions` first when you need to discover the exact action name, human title, parameter schema, or image/video upload path. For long-running calls, tell the user the current step before invoking the action so the chat does not look stuck.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/slim_mcp.py#L234-L249) · Schema: tools/list.

Exposure: Default slim surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "action": {
      "title": "Action",
      "type": "string"
    },
    "params": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Params"
    }
  },
  "required": [
    "action"
  ],
  "title": "category_toolArguments",
  "type": "object"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-google_ads_transparency_action-ee7de10a"></a>

## google_ads_transparency_action

Handler: Other product (slim\_mcp.py): calls \_serialize\_tool\_result, current\_user\_ctx.get, RuntimeError, list\_actions, dispatch, payload.get.

```text
Competitor research on Google's Ads Transparency Center -- public ads any verified advertiser runs on Search, YouTube, Display and Shopping, in 180+ countries. Needs no API key, no account and no connection, so it works even for a user who has connected nothing. This is not the user's own Google Ads account; that is google_ads_action. Start with google_ads_transparency_search_ads for a brand name, or google_ads_transparency_find_advertiser then google_ads_transparency_advertiser_ads when several companies share a name. Backed by a public endpoint Google publishes for browsing but does not document, so a lookup can come back degraded: when it does, say the source is temporarily unavailable and pass on the manual_url. Never tell the user to reconnect or re-authenticate anything -- no account is involved. Call `list_actions` first when you need to discover the exact action name, human title, parameter schema, or image/video upload path. For long-running calls, tell the user the current step before invoking the action so the chat does not look stuck.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/slim_mcp.py#L234-L249) · Schema: tools/list.

Exposure: Default slim surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "action": {
      "title": "Action",
      "type": "string"
    },
    "params": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Params"
    }
  },
  "required": [
    "action"
  ],
  "title": "category_toolArguments",
  "type": "object"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-gsc_action-ad919367"></a>

## gsc_action

Handler: Other product (slim\_mcp.py): calls \_serialize\_tool\_result, current\_user\_ctx.get, RuntimeError, list\_actions, dispatch, payload.get.

```text
Search Console actions. Start with gsc_list_sites, then use returned site_url with gsc_search_analytics, gsc_top_keywords, and gsc_top_pages. Call `list_actions` first when you need to discover the exact action name, human title, parameter schema, or image/video upload path. For long-running calls, tell the user the current step before invoking the action so the chat does not look stuck.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/slim_mcp.py#L234-L249) · Schema: tools/list.

Exposure: Default slim surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "action": {
      "title": "Action",
      "type": "string"
    },
    "params": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Params"
    }
  },
  "required": [
    "action"
  ],
  "title": "category_toolArguments",
  "type": "object"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-linkedin_ads_action-a2834066"></a>

## linkedin_ads_action

Handler: Other product (slim\_mcp.py): calls \_serialize\_tool\_result, current\_user\_ctx.get, RuntimeError, list\_actions, dispatch, payload.get.

```text
LinkedIn Ads actions on the connected LinkedIn account — connect it via your .env file (see the README). Start with linkedin_ads_pipedream_accounts to confirm a connection exists, then linkedin_ads_list_accounts to get the sponsored account id every other action needs. From there use linkedin_ads_list_campaign_groups, linkedin_ads_list_campaigns and linkedin_ads_campaign_report. Write actions create entities PAUSED unless the user explicitly asks to launch. Call `list_actions` first when you need to discover the exact action name, human title, parameter schema, or image/video upload path. For long-running calls, tell the user the current step before invoking the action so the chat does not look stuck.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/slim_mcp.py#L234-L249) · Schema: tools/list.

Exposure: Default slim surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "action": {
      "title": "Action",
      "type": "string"
    },
    "params": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Params"
    }
  },
  "required": [
    "action"
  ],
  "title": "category_toolArguments",
  "type": "object"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-meta_ad_library_action-0224a29b"></a>

## meta_ad_library_action

Handler: Other product (slim\_mcp.py): calls \_serialize\_tool\_result, current\_user\_ctx.get, RuntimeError, list\_actions, dispatch, payload.get.

```text
Competitor research on Meta's PUBLIC Ad Library -- ads that OTHER advertisers run on Facebook and Instagram. This is not the user's own Meta account; that is meta_ads_action. No ad account, connection or customer id is involved. Start with meta_ad_library_check_access, then meta_ad_library_find_advertiser to turn a brand name into a page_id, then meta_ad_library_advertiser_ads or meta_ad_library_creative_angles. COVERAGE LIMIT, READ THIS: outside the EU and UK, Meta's API returns only political and social-issue ads, so a commercial search for the US, Israel, Canada or Australia comes back empty. That is Meta's rule and not a fault. Pass an EU country or GB in `countries` for commercial ads, or use google_ads_transparency_action, which covers 180+ countries with no such limit. Never report an empty result here as a broken connection or as proof the brand does not advertise. Call `list_actions` first when you need to discover the exact action name, human title, parameter schema, or image/video upload path. For long-running calls, tell the user the current step before invoking the action so the chat does not look stuck.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/slim_mcp.py#L234-L249) · Schema: tools/list.

Exposure: Default slim surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "action": {
      "title": "Action",
      "type": "string"
    },
    "params": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Params"
    }
  },
  "required": [
    "action"
  ],
  "title": "category_toolArguments",
  "type": "object"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-meta_ads_action-e1ad1275"></a>

## meta_ads_action

Handler: Other product (slim\_mcp.py): calls \_serialize\_tool\_result, current\_user\_ctx.get, RuntimeError, list\_actions, dispatch, payload.get.

```text
Meta Ads actions. Start with meta_ads_list_ad_accounts and meta_ads_find_page. For lead-gen use this path: meta_ads_create_lead_campaign -> meta_ads_create_lead_adset -> meta_ads_create_lead_form_and_paused_ad. Prefer meta_ads_create_lead_form_and_paused_ad over calling meta_ads_create_lead_form directly when you want a usable paused test ad fast. For media, use meta_ads_upload_image_file_bytes_to_meta, meta_ads_upload_video_file_bytes_to_meta, or meta_ads_test_media_upload_flow. Create ads PAUSED by default. Call `list_actions` first when you need to discover the exact action name, human title, parameter schema, or image/video upload path. For long-running calls, tell the user the current step before invoking the action so the chat does not look stuck.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/slim_mcp.py#L234-L249) · Schema: tools/list.

Exposure: Default slim surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "action": {
      "title": "Action",
      "type": "string"
    },
    "params": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Params"
    }
  },
  "required": [
    "action"
  ],
  "title": "category_toolArguments",
  "type": "object"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-microsoft_ads_action-60989369"></a>

## microsoft_ads_action

Handler: Other product (slim\_mcp.py): calls \_serialize\_tool\_result, current\_user\_ctx.get, RuntimeError, list\_actions, dispatch, payload.get.

```text
Microsoft Advertising (Bing Ads) actions on the connected Microsoft account. Also requires MICROSOFT_ADS_DEVELOPER_TOKEN on the server — call microsoft_ads_pipedream_accounts first, which reports whether it is configured. Start with microsoft_ads_list_accounts to get the account_id every other action needs, then microsoft_ads_list_campaigns and microsoft_ads_campaign_performance. Note Bing's API is POST-for-reads and its reporting is asynchronous; microsoft_ads_campaign_performance hides that behind one call. Call `list_actions` first when you need to discover the exact action name, human title, parameter schema, or image/video upload path. For long-running calls, tell the user the current step before invoking the action so the chat does not look stuck.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/slim_mcp.py#L234-L249) · Schema: tools/list.

Exposure: Default slim surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "action": {
      "title": "Action",
      "type": "string"
    },
    "params": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Params"
    }
  },
  "required": [
    "action"
  ],
  "title": "category_toolArguments",
  "type": "object"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-misc_action-78967fe6"></a>

## misc_action

Handler: Other product (slim\_mcp.py): calls \_serialize\_tool\_result, current\_user\_ctx.get, RuntimeError, list\_actions, dispatch, payload.get.

```text
Tools that don't fit any other category. Call `list_actions` first when you need to discover the exact action name, human title, parameter schema, or image/video upload path. For long-running calls, tell the user the current step before invoking the action so the chat does not look stuck.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/slim_mcp.py#L234-L249) · Schema: tools/list.

Exposure: Default slim surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "action": {
      "title": "Action",
      "type": "string"
    },
    "params": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Params"
    }
  },
  "required": [
    "action"
  ],
  "title": "category_toolArguments",
  "type": "object"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-openai_ads_action-27b8ad7a"></a>

## openai_ads_action

Handler: Other product (slim\_mcp.py): calls \_serialize\_tool\_result, current\_user\_ctx.get, RuntimeError, list\_actions, dispatch, payload.get.

```text
OpenAI Ads actions — manage ads shown inside ChatGPT via the OpenAI Ads API. Requires the user to connect their OpenAI Ads API key first. Start with openai_ads_get_account to confirm the key works, then openai_ads_list_campaigns, openai_ads_list_ad_groups, openai_ads_list_ads, and openai_ads_ad_insights. Write actions create entities PAUSED unless the user explicitly asks to launch; budgets and bids are passed in US dollars. Call `list_actions` first when you need to discover the exact action name, human title, parameter schema, or image/video upload path. For long-running calls, tell the user the current step before invoking the action so the chat does not look stuck.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/slim_mcp.py#L234-L249) · Schema: tools/list.

Exposure: Default slim surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "action": {
      "title": "Action",
      "type": "string"
    },
    "params": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Params"
    }
  },
  "required": [
    "action"
  ],
  "title": "category_toolArguments",
  "type": "object"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-organic_social_action-22b54b65"></a>

## organic_social_action

Handler: Other product (slim\_mcp.py): calls \_serialize\_tool\_result, current\_user\_ctx.get, RuntimeError, list\_actions, dispatch, payload.get.

```text
Call `list_actions` first when you need to discover the exact action name, human title, parameter schema, or image/video upload path. For long-running calls, tell the user the current step before invoking the action so the chat does not look stuck.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/slim_mcp.py#L234-L249) · Schema: tools/list.

Exposure: Default slim surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "action": {
      "title": "Action",
      "type": "string"
    },
    "params": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Params"
    }
  },
  "required": [
    "action"
  ],
  "title": "category_toolArguments",
  "type": "object"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-reports_action-f8cc160e"></a>

## reports_action

Handler: Other product (slim\_mcp.py): calls \_serialize\_tool\_result, current\_user\_ctx.get, RuntimeError, list\_actions, dispatch, payload.get.

```text
Run composite cross-platform reports — monthly executive, full SEO, full paid search, full paid social, ecommerce, new client audit, landing page quality, campaign health. Call `list_actions` first when you need to discover the exact action name, human title, parameter schema, or image/video upload path. For long-running calls, tell the user the current step before invoking the action so the chat does not look stuck.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/slim_mcp.py#L234-L249) · Schema: tools/list.

Exposure: Default slim surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "action": {
      "title": "Action",
      "type": "string"
    },
    "params": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Params"
    }
  },
  "required": [
    "action"
  ],
  "title": "category_toolArguments",
  "type": "object"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-snapchat_ads_action-bdb29b83"></a>

## snapchat_ads_action

Handler: Other product (slim\_mcp.py): calls \_serialize\_tool\_result, current\_user\_ctx.get, RuntimeError, list\_actions, dispatch, payload.get.

```text
Snapchat Ads actions on the connected Snapchat account. The hierarchy is organization > ad account > campaign > ad squad (Snapchat's name for an ad set) > ad. Start with snapchat_ads_list_organizations, then snapchat_ads_list_accounts to get the ad_account_id the rest need, then snapchat_ads_list_campaigns and snapchat_ads_campaign_report. Campaign status is PAUSED or ACTIVE; new campaigns are created PAUSED unless the user explicitly asks to launch. Call `list_actions` first when you need to discover the exact action name, human title, parameter schema, or image/video upload path. For long-running calls, tell the user the current step before invoking the action so the chat does not look stuck.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/slim_mcp.py#L234-L249) · Schema: tools/list.

Exposure: Default slim surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "action": {
      "title": "Action",
      "type": "string"
    },
    "params": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Params"
    }
  },
  "required": [
    "action"
  ],
  "title": "category_toolArguments",
  "type": "object"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-tiktok_ads_action-c2115fdd"></a>

## tiktok_ads_action

Handler: Other product (slim\_mcp.py): calls \_serialize\_tool\_result, current\_user\_ctx.get, RuntimeError, list\_actions, dispatch, payload.get.

```text
TikTok Ads actions on the connected TikTok advertiser account — connect it via your .env file (see the README). Start with tiktok_ads_pipedream_accounts to confirm a connection, then tiktok_ads_list_advertisers — nearly every other action requires the advertiser_id it returns. From there use tiktok_ads_list_campaigns, tiktok_ads_list_adgroups and tiktok_ads_campaign_report. Write actions create entities PAUSED unless the user explicitly asks to launch. Call `list_actions` first when you need to discover the exact action name, human title, parameter schema, or image/video upload path. For long-running calls, tell the user the current step before invoking the action so the chat does not look stuck.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/slim_mcp.py#L234-L249) · Schema: tools/list.

Exposure: Default slim surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "action": {
      "title": "Action",
      "type": "string"
    },
    "params": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Params"
    }
  },
  "required": [
    "action"
  ],
  "title": "category_toolArguments",
  "type": "object"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-wordpress_action-c13824e3"></a>

## wordpress_action

Handler: Other product (slim\_mcp.py): calls \_serialize\_tool\_result, current\_user\_ctx.get, RuntimeError, list\_actions, dispatch, payload.get.

```text
WordPress site actions over the site's REST API — posts, pages, media, categories and tags, users, comments, settings, plugins and themes, plus WooCommerce (woo_*/wc_*), Elementor, and SEO plugins (yoast_*, rankmath_*). Requires a WordPress site connected via your .env file (see the README) with an Application Password. Start with wordpress_current_site to see which site you are acting on; if several are connected, wordpress_list_sites then wordpress_select_site. This category is large — use list_actions with a search term (e.g. list_actions('wordpress_action', 'product')) instead of listing everything. Call `list_actions` first when you need to discover the exact action name, human title, parameter schema, or image/video upload path. For long-running calls, tell the user the current step before invoking the action so the chat does not look stuck.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/slim_mcp.py#L234-L249) · Schema: tools/list.

Exposure: Default slim surface. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "action": {
      "title": "Action",
      "type": "string"
    },
    "params": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Params"
    }
  },
  "required": [
    "action"
  ],
  "title": "category_toolArguments",
  "type": "object"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "openWorldHint": true
}
```

</details>
