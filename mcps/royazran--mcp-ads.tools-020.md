# RoyAzran/mcp-ads: supporting and other-product tools

[Provider inventory](royazran--mcp-ads.md) · [Global tool index](../TOOL_INDEX.md)

Tools 2851–3000 of 3131. Exact schemas from the same upstream snapshot.

<a id="tool-speed_check_images-3288024b"></a>

## speed_check_images

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Find images that are too large in file size or dimensions, hurting page load speed.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1312-L1320) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "min_size_kb": {
      "default": null,
      "title": "Min Size Kb",
      "type": "integer"
    },
    "min_width": {
      "default": null,
      "title": "Min Width",
      "type": "integer"
    },
    "per_page": {
      "default": null,
      "title": "Per Page",
      "type": "integer"
    }
  },
  "title": "speed_check_imagesArguments",
  "type": "object"
}
```

</details>

<a id="tool-speed_compress_images-92c5c5ee"></a>

## speed_compress_images

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Trigger image compression via an installed optimization plugin (Imagify, ShortPixel, Smush, EWWW).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1322-L1329) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "plugin": {
      "default": null,
      "title": "Plugin",
      "type": "string"
    },
    "quality": {
      "default": null,
      "title": "Quality",
      "type": "string"
    }
  },
  "title": "speed_compress_imagesArguments",
  "type": "object"
}
```

</details>

<a id="tool-speed_convert_webp-a6e9a0e0"></a>

## speed_convert_webp

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Convert images to WebP format via installed plugin or get setup instructions.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1331-L1337) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "plugin": {
      "default": null,
      "title": "Plugin",
      "type": "string"
    }
  },
  "title": "speed_convert_webpArguments",
  "type": "object"
}
```

</details>

<a id="tool-speed_enable_lazy_load-f7025097"></a>

## speed_enable_lazy_load

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Enable or verify lazy loading for images and iframes across the site.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1339-L1347) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "images": {
      "default": null,
      "title": "Images",
      "type": "boolean"
    },
    "iframes": {
      "default": null,
      "title": "Iframes",
      "type": "boolean"
    },
    "videos": {
      "default": null,
      "title": "Videos",
      "type": "boolean"
    }
  },
  "title": "speed_enable_lazy_loadArguments",
  "type": "object"
}
```

</details>

<a id="tool-speed_check_caching-f202c1a8"></a>

## speed_check_caching

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Verify that page caching is properly configured, checking all major caching plugins and server-level caching.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1349-L1353) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "speed_check_cachingArguments",
  "type": "object"
}
```

</details>

<a id="tool-speed_configure_caching-c92f7512"></a>

## speed_configure_caching

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Auto-configure caching settings for WP Rocket, LiteSpeed Cache, W3 Total Cache, or WP Super Cache.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1355-L1365) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "plugin": {
      "default": null,
      "title": "Plugin",
      "type": "string"
    },
    "page_cache": {
      "default": null,
      "title": "Page Cache",
      "type": "boolean"
    },
    "browser_cache": {
      "default": null,
      "title": "Browser Cache",
      "type": "boolean"
    },
    "object_cache": {
      "default": null,
      "title": "Object Cache",
      "type": "boolean"
    },
    "mobile_cache": {
      "default": null,
      "title": "Mobile Cache",
      "type": "boolean"
    }
  },
  "title": "speed_configure_cachingArguments",
  "type": "object"
}
```

</details>

<a id="tool-speed_check_gzip-c5e02041"></a>

## speed_check_gzip

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Verify GZIP/Brotli compression is enabled on the server for text-based resources.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1367-L1371) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "speed_check_gzipArguments",
  "type": "object"
}
```

</details>

<a id="tool-speed_enable_gzip-35ccc11c"></a>

## speed_enable_gzip

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Enable GZIP compression via caching plugin settings or provide .htaccess/nginx rules.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1373-L1379) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "method": {
      "default": null,
      "title": "Method",
      "type": "string"
    }
  },
  "title": "speed_enable_gzipArguments",
  "type": "object"
}
```

</details>

<a id="tool-speed_check_minification-e08f2322"></a>

## speed_check_minification

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Check if CSS and JavaScript files are minified and concatenated.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1381-L1385) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "speed_check_minificationArguments",
  "type": "object"
}
```

</details>

<a id="tool-speed_enable_minification-4e62acea"></a>

## speed_enable_minification

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Enable CSS/JS minification and concatenation via caching or optimization plugin.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1387-L1396) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "minify_css": {
      "default": null,
      "title": "Minify Css",
      "type": "boolean"
    },
    "minify_js": {
      "default": null,
      "title": "Minify Js",
      "type": "boolean"
    },
    "concatenate_css": {
      "default": null,
      "title": "Concatenate Css",
      "type": "boolean"
    },
    "concatenate_js": {
      "default": null,
      "title": "Concatenate Js",
      "type": "boolean"
    }
  },
  "title": "speed_enable_minificationArguments",
  "type": "object"
}
```

</details>

<a id="tool-speed_find_render_blocking-aa8acf22"></a>

## speed_find_render_blocking

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Identify render-blocking CSS and JavaScript resources that delay page rendering.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1398-L1404) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_url": {
      "default": null,
      "title": "Page Url",
      "type": "string"
    }
  },
  "title": "speed_find_render_blockingArguments",
  "type": "object"
}
```

</details>

<a id="tool-speed_defer_js-2a62874e"></a>

## speed_defer_js

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Configure JavaScript deferral/delay to eliminate render-blocking scripts.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1406-L1414) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "defer_all": {
      "default": null,
      "title": "Defer All",
      "type": "boolean"
    },
    "delay_js": {
      "default": null,
      "title": "Delay Js",
      "type": "boolean"
    },
    "exclude": {
      "default": null,
      "items": {},
      "title": "Exclude",
      "type": "array"
    }
  },
  "title": "speed_defer_jsArguments",
  "type": "object"
}
```

</details>

<a id="tool-speed_critical_css_generate-6e0db851"></a>

## speed_critical_css_generate

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Generate critical above-the-fold CSS for faster initial rendering, or get instructions to set it up.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1416-L1422) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_url": {
      "default": null,
      "title": "Page Url",
      "type": "string"
    }
  },
  "title": "speed_critical_css_generateArguments",
  "type": "object"
}
```

</details>

<a id="tool-speed_remove_unused_css-a5798017"></a>

## speed_remove_unused_css

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().post, \_wp.

```text
[WRITE] Tool tool. Identify and remove or defer unused CSS to reduce page weight. Requires wp-mcp companion plugin.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1424-L1431) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "enable": {
      "default": null,
      "title": "Enable",
      "type": "boolean"
    }
  },
  "title": "speed_remove_unused_cssArguments",
  "type": "object"
}
```

</details>

<a id="tool-speed_check_database-998e950c"></a>

## speed_check_database

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Check database health: table sizes, autoload size, orphaned data, post revisions, spam comments, transients.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1433-L1437) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "speed_check_databaseArguments",
  "type": "object"
}
```

</details>

<a id="tool-speed_optimize_database-f9ac4c36"></a>

## speed_optimize_database

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Clean up the WordPress database: remove revisions, spam, transients, orphaned metadata, and optimize tables.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1439-L1450) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "clean_revisions": {
      "default": null,
      "title": "Clean Revisions",
      "type": "boolean"
    },
    "clean_drafts": {
      "default": null,
      "title": "Clean Drafts",
      "type": "boolean"
    },
    "clean_spam": {
      "default": null,
      "title": "Clean Spam",
      "type": "boolean"
    },
    "clean_trash": {
      "default": null,
      "title": "Clean Trash",
      "type": "boolean"
    },
    "clean_transients": {
      "default": null,
      "title": "Clean Transients",
      "type": "boolean"
    },
    "optimize_tables": {
      "default": null,
      "title": "Optimize Tables",
      "type": "boolean"
    }
  },
  "title": "speed_optimize_databaseArguments",
  "type": "object"
}
```

</details>

<a id="tool-speed_check_hosting_response-90f4559c"></a>

## speed_check_hosting_response

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Check server Time To First Byte (TTFB) for the homepage and key pages.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1452-L1458) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "urls": {
      "default": null,
      "items": {},
      "title": "Urls",
      "type": "array"
    }
  },
  "title": "speed_check_hosting_responseArguments",
  "type": "object"
}
```

</details>

<a id="tool-speed_preload_key_requests-9c4eaf5f"></a>

## speed_preload_key_requests

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Configure preloading for critical fonts, CSS, and other key resources.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1460-L1468) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "fonts": {
      "default": null,
      "items": {},
      "title": "Fonts",
      "type": "array"
    },
    "css": {
      "default": null,
      "items": {},
      "title": "Css",
      "type": "array"
    },
    "preconnect": {
      "default": null,
      "items": {},
      "title": "Preconnect",
      "type": "array"
    }
  },
  "title": "speed_preload_key_requestsArguments",
  "type": "object"
}
```

</details>

<a id="tool-speed_get_recommendations-9a2ae84e"></a>

## speed_get_recommendations

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Get a prioritized list of speed improvements with estimated impact, effort, and step-by-step instructions.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1470-L1474) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "speed_get_recommendationsArguments",
  "type": "object"
}
```

</details>

<a id="tool-qa_check_page_status-c56aa6c1"></a>

## qa_check_page_status

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Verify a page loads without errors (checks HTTP status via REST)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1476-L1483) · Schema: tools/list.

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
    "post_type": {
      "default": "page",
      "title": "Post Type",
      "type": "string"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "qa_check_page_statusArguments",
  "type": "object"
}
```

</details>

<a id="tool-qa_check_all_pages-7f0ae526"></a>

## qa_check_all_pages

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Check all published pages for content issues (empty, missing title, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1485-L1492) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_type": {
      "default": "page",
      "title": "Post Type",
      "type": "string"
    },
    "per_page": {
      "default": 100,
      "title": "Per Page",
      "type": "integer"
    }
  },
  "title": "qa_check_all_pagesArguments",
  "type": "object"
}
```

</details>

<a id="tool-qa_check_broken_images-9339e157"></a>

## qa_check_broken_images

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Find images in content that reference missing media IDs
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1494-L1501) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_type": {
      "default": "page",
      "title": "Post Type",
      "type": "string"
    },
    "per_page": {
      "default": 50,
      "title": "Per Page",
      "type": "integer"
    }
  },
  "title": "qa_check_broken_imagesArguments",
  "type": "object"
}
```

</details>

<a id="tool-qa_check_missing_meta-1b337732"></a>

## qa_check_missing_meta

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Find pages missing SEO meta (title, description, OG image)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1503-L1510) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_type": {
      "default": "page",
      "title": "Post Type",
      "type": "string"
    },
    "per_page": {
      "default": 100,
      "title": "Per Page",
      "type": "integer"
    }
  },
  "title": "qa_check_missing_metaArguments",
  "type": "object"
}
```

</details>

<a id="tool-qa_check_missing_alt_text-929d1812"></a>

## qa_check_missing_alt_text

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Find all media images without alt text
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1512-L1518) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "per_page": {
      "default": 100,
      "title": "Per Page",
      "type": "integer"
    }
  },
  "title": "qa_check_missing_alt_textArguments",
  "type": "object"
}
```

</details>

<a id="tool-qa_check_empty_pages-668ab0b9"></a>

## qa_check_empty_pages

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Find published pages with no content
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1520-L1526) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_type": {
      "default": "page",
      "title": "Post Type",
      "type": "string"
    }
  },
  "title": "qa_check_empty_pagesArguments",
  "type": "object"
}
```

</details>

<a id="tool-qa_check_draft_pages-be4d4549"></a>

## qa_check_draft_pages

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List forgotten draft pages and posts
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1528-L1535) · Schema: tools/list.

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
  "title": "qa_check_draft_pagesArguments",
  "type": "object"
}
```

</details>

<a id="tool-qa_check_orphaned_pages-2c77308b"></a>

## qa_check_orphaned_pages

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Find published pages not linked in any menu
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1537-L1541) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "qa_check_orphaned_pagesArguments",
  "type": "object"
}
```

</details>

<a id="tool-qa_check_broken_links-af9c9a5d"></a>

## qa_check_broken_links

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Scan post/page content for potentially broken internal links
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1543-L1550) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_type": {
      "default": "page",
      "title": "Post Type",
      "type": "string"
    },
    "per_page": {
      "default": 20,
      "title": "Per Page",
      "type": "integer"
    }
  },
  "title": "qa_check_broken_linksArguments",
  "type": "object"
}
```

</details>

<a id="tool-qa_check_heading_hierarchy-1348a75e"></a>

## qa_check_heading_hierarchy

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Check H1-H6 heading structure across pages for SEO issues
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1552-L1559) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_type": {
      "default": "page",
      "title": "Post Type",
      "type": "string"
    },
    "per_page": {
      "default": 50,
      "title": "Per Page",
      "type": "integer"
    }
  },
  "title": "qa_check_heading_hierarchyArguments",
  "type": "object"
}
```

</details>

<a id="tool-qa_full_site_audit-64ee281e"></a>

## qa_full_site_audit

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Run all QA checks and return comprehensive report
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1561-L1568) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "include_posts": {
      "default": true,
      "title": "Include Posts",
      "type": "boolean"
    },
    "include_products": {
      "default": false,
      "title": "Include Products",
      "type": "boolean"
    }
  },
  "title": "qa_full_site_auditArguments",
  "type": "object"
}
```

</details>

<a id="tool-qa_generate_report-0e46ee7c"></a>

## qa_generate_report

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Generate a formatted QA report with pass/fail/warning status for each check
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1570-L1576) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "checks": {
      "items": {},
      "title": "Checks",
      "type": "array"
    }
  },
  "required": [
    "checks"
  ],
  "title": "qa_generate_reportArguments",
  "type": "object"
}
```

</details>

<a id="tool-webhooks_wc_list-eac6a8c7"></a>

## webhooks_wc_list

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List all WooCommerce webhooks
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1578-L1586) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
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
    }
  },
  "title": "webhooks_wc_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-webhooks_wc_create-7cfb7f90"></a>

## webhooks_wc_create

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a new WooCommerce webhook (fires HTTP POST on WC events)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1588-L1599) · Schema: tools/list.

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
    "topic": {
      "title": "Topic",
      "type": "string"
    },
    "delivery_url": {
      "title": "Delivery Url",
      "type": "string"
    },
    "secret": {
      "default": null,
      "title": "Secret",
      "type": "string"
    },
    "status": {
      "default": "active",
      "title": "Status",
      "type": "string"
    },
    "api_version": {
      "default": "wp_api_v3",
      "title": "Api Version",
      "type": "string"
    }
  },
  "required": [
    "name",
    "topic",
    "delivery_url"
  ],
  "title": "webhooks_wc_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-webhooks_wc_update-34c30c02"></a>

## webhooks_wc_update

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().put, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Update an existing WooCommerce webhook
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1601-L1612) · Schema: tools/list.

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
    "name": {
      "default": null,
      "title": "Name",
      "type": "string"
    },
    "topic": {
      "default": null,
      "title": "Topic",
      "type": "string"
    },
    "delivery_url": {
      "default": null,
      "title": "Delivery Url",
      "type": "string"
    },
    "secret": {
      "default": null,
      "title": "Secret",
      "type": "string"
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
  "title": "webhooks_wc_updateArguments",
  "type": "object"
}
```

</details>

<a id="tool-webhooks_wc_delete-78eecf84"></a>

## webhooks_wc_delete

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] Tool tool. Delete a WooCommerce webhook
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1614-L1620) · Schema: tools/list.

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
  "title": "webhooks_wc_deleteArguments",
  "type": "object"
}
```

</details>

<a id="tool-webhooks_wp_register-ead30a86"></a>

## webhooks_wp_register

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Register a custom WordPress webhook that fires on WP action hooks (post_publish, user_register, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1622-L1633) · Schema: tools/list.

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
    "action": {
      "title": "Action",
      "type": "string"
    },
    "delivery_url": {
      "title": "Delivery Url",
      "type": "string"
    },
    "custom_action": {
      "default": null,
      "title": "Custom Action",
      "type": "string"
    },
    "secret": {
      "default": null,
      "title": "Secret",
      "type": "string"
    },
    "active": {
      "default": true,
      "title": "Active",
      "type": "boolean"
    }
  },
  "required": [
    "name",
    "action",
    "delivery_url"
  ],
  "title": "webhooks_wp_registerArguments",
  "type": "object"
}
```

</details>

<a id="tool-webhooks_wp_list-1007dba4"></a>

## webhooks_wp_list

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List registered WordPress webhooks (via WP Webhooks plugin or companion)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1635-L1642) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "per_page": {
      "default": 20,
      "title": "Per Page",
      "type": "integer"
    },
    "page": {
      "default": 1,
      "title": "Page",
      "type": "integer"
    }
  },
  "title": "webhooks_wp_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-webhooks_wp_delete-d3216355"></a>

## webhooks_wp_delete

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] Tool tool. Delete a registered WordPress webhook
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1644-L1651) · Schema: tools/list.

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
    "webhook_group": {
      "default": null,
      "title": "Webhook Group",
      "type": "string"
    }
  },
  "required": [
    "id"
  ],
  "title": "webhooks_wp_deleteArguments",
  "type": "object"
}
```

</details>

<a id="tool-webhooks_zapier_detect-0c8e20da"></a>

## webhooks_zapier_detect

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Check if Zapier, WP Webhooks, or similar automation plugin is installed
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1653-L1657) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "webhooks_zapier_detectArguments",
  "type": "object"
}
```

</details>

<a id="tool-webhooks_zapier_triggers_list-867870c3"></a>

## webhooks_zapier_triggers_list

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List available Zapier triggers/actions (requires Zapier or WP Webhooks plugin)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1659-L1663) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "webhooks_zapier_triggers_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-webhooks_make_detect-25e87477"></a>

## webhooks_make_detect

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Check if Make (Integromat) integration is connected or available
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1665-L1669) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "webhooks_make_detectArguments",
  "type": "object"
}
```

</details>

<a id="tool-webhooks_n8n_configure-1e73ee7f"></a>

## webhooks_n8n_configure

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Configure n8n webhook URL and settings for WordPress integration
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1671-L1680) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "webhook_url": {
      "title": "Webhook Url",
      "type": "string"
    },
    "events": {
      "default": null,
      "items": {},
      "title": "Events",
      "type": "array"
    },
    "secret": {
      "default": null,
      "title": "Secret",
      "type": "string"
    },
    "active": {
      "default": true,
      "title": "Active",
      "type": "boolean"
    }
  },
  "required": [
    "webhook_url"
  ],
  "title": "webhooks_n8n_configureArguments",
  "type": "object"
}
```

</details>

<a id="tool-webhooks_test_send-c2b53bbf"></a>

## webhooks_test_send

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Send a test webhook payload to a delivery URL to verify connectivity
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1682-L1690) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "delivery_url": {
      "title": "Delivery Url",
      "type": "string"
    },
    "topic": {
      "default": "test.ping",
      "title": "Topic",
      "type": "string"
    },
    "payload": {
      "additionalProperties": true,
      "default": null,
      "title": "Payload",
      "type": "object"
    }
  },
  "required": [
    "delivery_url"
  ],
  "title": "webhooks_test_sendArguments",
  "type": "object"
}
```

</details>

<a id="tool-webhooks_incoming_create-6cd30250"></a>

## webhooks_incoming_create

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create an incoming webhook endpoint on WordPress (receive data from external services)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1692-L1701) · Schema: tools/list.

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
    "action": {
      "title": "Action",
      "type": "string"
    },
    "secret": {
      "default": null,
      "title": "Secret",
      "type": "string"
    },
    "response_format": {
      "default": "json",
      "title": "Response Format",
      "type": "string"
    }
  },
  "required": [
    "name",
    "action"
  ],
  "title": "webhooks_incoming_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-webhooks_log_list-6cd82d98"></a>

## webhooks_log_list

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. View webhook delivery log (delivery attempts, response codes, timestamps)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1703-L1712) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "webhook_id": {
      "default": null,
      "title": "Webhook Id",
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
      "default": "all",
      "title": "Status",
      "type": "string"
    }
  },
  "title": "webhooks_log_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-webhooks_retry_failed-fd28f185"></a>

## webhooks_retry_failed

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Retry failed webhook deliveries
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1714-L1722) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "webhook_id": {
      "default": null,
      "title": "Webhook Id",
      "type": "integer"
    },
    "delivery_id": {
      "default": null,
      "title": "Delivery Id",
      "type": "integer"
    },
    "retry_all_failed": {
      "default": false,
      "title": "Retry All Failed",
      "type": "boolean"
    }
  },
  "title": "webhooks_retry_failedArguments",
  "type": "object"
}
```

</details>

<a id="tool-snippet_check_plugin-bf841808"></a>

## snippet_check_plugin

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Detect which code snippet plugin is active: WPCode, Code Snippets, or none
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1724-L1728) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "snippet_check_pluginArguments",
  "type": "object"
}
```

</details>

<a id="tool-snippet_list-6c32f7aa"></a>

## snippet_list

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List all code snippets (works with WPCode and Code Snippets plugin)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1730-L1737) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
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
  "title": "snippet_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-snippet_get-74cf7aa7"></a>

## snippet_get

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Get a single snippet by ID with full code and metadata
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1739-L1745) · Schema: tools/list.

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
  "title": "snippet_getArguments",
  "type": "object"
}
```

</details>

<a id="tool-snippet_create-93b9e33a"></a>

## snippet_create

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a new code snippet (PHP, CSS, JS, HTML). Supports WPCode and Code Snippets plugin.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1747-L1761) · Schema: tools/list.

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
    "code": {
      "title": "Code",
      "type": "string"
    },
    "type": {
      "default": null,
      "title": "Type",
      "type": "string"
    },
    "active": {
      "default": null,
      "title": "Active",
      "type": "boolean"
    },
    "location": {
      "default": null,
      "title": "Location",
      "type": "string"
    },
    "scope": {
      "default": null,
      "title": "Scope",
      "type": "string"
    },
    "priority": {
      "default": null,
      "title": "Priority",
      "type": "integer"
    },
    "tags": {
      "default": null,
      "items": {},
      "title": "Tags",
      "type": "array"
    },
    "description": {
      "default": null,
      "title": "Description",
      "type": "string"
    }
  },
  "required": [
    "title",
    "code"
  ],
  "title": "snippet_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-snippet_update-3d164053"></a>

## snippet_update

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Update an existing snippet: change code, title, status, or any property
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1763-L1777) · Schema: tools/list.

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
    "title": {
      "default": null,
      "title": "Title",
      "type": "string"
    },
    "code": {
      "default": null,
      "title": "Code",
      "type": "string"
    },
    "type": {
      "default": null,
      "title": "Type",
      "type": "string"
    },
    "active": {
      "default": null,
      "title": "Active",
      "type": "boolean"
    },
    "location": {
      "default": null,
      "title": "Location",
      "type": "string"
    },
    "priority": {
      "default": null,
      "title": "Priority",
      "type": "integer"
    },
    "tags": {
      "default": null,
      "items": {},
      "title": "Tags",
      "type": "array"
    },
    "description": {
      "default": null,
      "title": "Description",
      "type": "string"
    }
  },
  "required": [
    "id"
  ],
  "title": "snippet_updateArguments",
  "type": "object"
}
```

</details>

<a id="tool-snippet_delete-2661600d"></a>

## snippet_delete

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] Tool tool. Permanently delete a code snippet by ID
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1779-L1785) · Schema: tools/list.

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
  "title": "snippet_deleteArguments",
  "type": "object"
}
```

</details>

<a id="tool-snippet_enable-5d052b2d"></a>

## snippet_enable

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Activate/enable a code snippet by ID
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1787-L1793) · Schema: tools/list.

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
  "title": "snippet_enableArguments",
  "type": "object"
}
```

</details>

<a id="tool-snippet_disable-01f183f7"></a>

## snippet_disable

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Deactivate/disable a code snippet by ID (keeps code, stops execution)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1795-L1801) · Schema: tools/list.

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
  "title": "snippet_disableArguments",
  "type": "object"
}
```

</details>

<a id="tool-snippet_search-f6f669da"></a>

## snippet_search

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Search snippets by keyword (matches title, code content, tags)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1803-L1811) · Schema: tools/list.

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
    "type": {
      "default": null,
      "title": "Type",
      "type": "string"
    },
    "active_only": {
      "default": null,
      "title": "Active Only",
      "type": "boolean"
    }
  },
  "required": [
    "keyword"
  ],
  "title": "snippet_searchArguments",
  "type": "object"
}
```

</details>

<a id="tool-snippet_bulk_toggle-016b7c8d"></a>

## snippet_bulk_toggle

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Enable or disable multiple snippets by ID at once
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1813-L1820) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ids": {
      "items": {},
      "title": "Ids",
      "type": "array"
    },
    "active": {
      "title": "Active",
      "type": "boolean"
    }
  },
  "required": [
    "ids",
    "active"
  ],
  "title": "snippet_bulk_toggleArguments",
  "type": "object"
}
```

</details>

<a id="tool-snippet_clone-9c1ba4bf"></a>

## snippet_clone

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Clone/duplicate an existing snippet (creates inactive copy)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1822-L1829) · Schema: tools/list.

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
    "new_title": {
      "default": null,
      "title": "New Title",
      "type": "string"
    }
  },
  "required": [
    "id"
  ],
  "title": "snippet_cloneArguments",
  "type": "object"
}
```

</details>

<a id="tool-snippet_create_php-4f792b43"></a>

## snippet_create_php

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Shorthand: create a PHP snippet — runs on every page load globally (or admin/frontend only)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1831-L1843) · Schema: tools/list.

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
    "code": {
      "title": "Code",
      "type": "string"
    },
    "scope": {
      "default": "global",
      "title": "Scope",
      "type": "string"
    },
    "priority": {
      "default": 10,
      "title": "Priority",
      "type": "integer"
    },
    "active": {
      "default": true,
      "title": "Active",
      "type": "boolean"
    },
    "tags": {
      "default": null,
      "items": {},
      "title": "Tags",
      "type": "array"
    },
    "description": {
      "default": null,
      "title": "Description",
      "type": "string"
    }
  },
  "required": [
    "title",
    "code"
  ],
  "title": "snippet_create_phpArguments",
  "type": "object"
}
```

</details>

<a id="tool-snippet_create_css-5b1ffc73"></a>

## snippet_create_css

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Shorthand: create a CSS snippet — injected into <head> on frontend pages
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1845-L1855) · Schema: tools/list.

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
    "code": {
      "title": "Code",
      "type": "string"
    },
    "active": {
      "default": true,
      "title": "Active",
      "type": "boolean"
    },
    "tags": {
      "default": null,
      "items": {},
      "title": "Tags",
      "type": "array"
    },
    "description": {
      "default": null,
      "title": "Description",
      "type": "string"
    }
  },
  "required": [
    "title",
    "code"
  ],
  "title": "snippet_create_cssArguments",
  "type": "object"
}
```

</details>

<a id="tool-snippet_create_js-db65e806"></a>

## snippet_create_js

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Shorthand: create a JavaScript snippet — injected before </body> on frontend
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1857-L1868) · Schema: tools/list.

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
    "code": {
      "title": "Code",
      "type": "string"
    },
    "location": {
      "default": "body_end",
      "title": "Location",
      "type": "string"
    },
    "active": {
      "default": true,
      "title": "Active",
      "type": "boolean"
    },
    "tags": {
      "default": null,
      "items": {},
      "title": "Tags",
      "type": "array"
    },
    "description": {
      "default": null,
      "title": "Description",
      "type": "string"
    }
  },
  "required": [
    "title",
    "code"
  ],
  "title": "snippet_create_jsArguments",
  "type": "object"
}
```

</details>

<a id="tool-snippet_create_html-316dc100"></a>

## snippet_create_html

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Shorthand: create an HTML snippet — inject HTML at header, footer, or specific hook
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1870-L1881) · Schema: tools/list.

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
    "code": {
      "title": "Code",
      "type": "string"
    },
    "location": {
      "default": "body_end",
      "title": "Location",
      "type": "string"
    },
    "active": {
      "default": true,
      "title": "Active",
      "type": "boolean"
    },
    "tags": {
      "default": null,
      "items": {},
      "title": "Tags",
      "type": "array"
    },
    "description": {
      "default": null,
      "title": "Description",
      "type": "string"
    }
  },
  "required": [
    "title",
    "code"
  ],
  "title": "snippet_create_htmlArguments",
  "type": "object"
}
```

</details>

<a id="tool-snippet_create_shortcode-c2fcf7b6"></a>

## snippet_create_shortcode

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a PHP snippet that registers a WordPress shortcode
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1883-L1893) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "shortcode_tag": {
      "title": "Shortcode Tag",
      "type": "string"
    },
    "output_html": {
      "default": null,
      "title": "Output Html",
      "type": "string"
    },
    "php_callback": {
      "default": null,
      "title": "Php Callback",
      "type": "string"
    },
    "title": {
      "default": null,
      "title": "Title",
      "type": "string"
    },
    "active": {
      "default": true,
      "title": "Active",
      "type": "boolean"
    }
  },
  "required": [
    "shortcode_tag"
  ],
  "title": "snippet_create_shortcodeArguments",
  "type": "object"
}
```

</details>

<a id="tool-snippet_create_action_hook-d8c0400b"></a>

## snippet_create_action_hook

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a PHP snippet that hooks into a WordPress action (add_action)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1895-L1907) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "hook": {
      "title": "Hook",
      "type": "string"
    },
    "php_code": {
      "title": "Php Code",
      "type": "string"
    },
    "priority": {
      "default": null,
      "title": "Priority",
      "type": "integer"
    },
    "accepted_args": {
      "default": null,
      "title": "Accepted Args",
      "type": "integer"
    },
    "title": {
      "default": null,
      "title": "Title",
      "type": "string"
    },
    "active": {
      "default": true,
      "title": "Active",
      "type": "boolean"
    },
    "scope": {
      "default": "global",
      "title": "Scope",
      "type": "string"
    }
  },
  "required": [
    "hook",
    "php_code"
  ],
  "title": "snippet_create_action_hookArguments",
  "type": "object"
}
```

</details>

<a id="tool-snippet_create_filter_hook-e6a3a981"></a>

## snippet_create_filter_hook

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a PHP snippet that hooks into a WordPress filter (add_filter)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1909-L1921) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "hook": {
      "title": "Hook",
      "type": "string"
    },
    "php_code": {
      "title": "Php Code",
      "type": "string"
    },
    "priority": {
      "default": 10,
      "title": "Priority",
      "type": "integer"
    },
    "accepted_args": {
      "default": 1,
      "title": "Accepted Args",
      "type": "integer"
    },
    "title": {
      "default": null,
      "title": "Title",
      "type": "string"
    },
    "active": {
      "default": true,
      "title": "Active",
      "type": "boolean"
    },
    "scope": {
      "default": "global",
      "title": "Scope",
      "type": "string"
    }
  },
  "required": [
    "hook",
    "php_code"
  ],
  "title": "snippet_create_filter_hookArguments",
  "type": "object"
}
```

</details>

<a id="tool-snippet_inject_header-3bc49444"></a>

## snippet_inject_header

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Inject arbitrary code into <head> site-wide (meta tags, tracking pixels, CSS, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1923-L1931) · Schema: tools/list.

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
    "code": {
      "title": "Code",
      "type": "string"
    },
    "active": {
      "default": true,
      "title": "Active",
      "type": "boolean"
    }
  },
  "required": [
    "title",
    "code"
  ],
  "title": "snippet_inject_headerArguments",
  "type": "object"
}
```

</details>

<a id="tool-snippet_inject_footer-4b410188"></a>

## snippet_inject_footer

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Inject arbitrary code before </body> site-wide (analytics, chat widgets, JS, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1933-L1941) · Schema: tools/list.

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
    "code": {
      "title": "Code",
      "type": "string"
    },
    "active": {
      "default": true,
      "title": "Active",
      "type": "boolean"
    }
  },
  "required": [
    "title",
    "code"
  ],
  "title": "snippet_inject_footerArguments",
  "type": "object"
}
```

</details>

<a id="tool-snippet_inject_via_options-10b9f2bd"></a>

## snippet_inject_via_options

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. FALLBACK: Inject code into header/footer via WordPress options (works without any snippet plugin). Uses wp_head / wp_footer hooks stored in options.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1943-L1952) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "location": {
      "title": "Location",
      "type": "string"
    },
    "code": {
      "title": "Code",
      "type": "string"
    },
    "mode": {
      "default": "append",
      "title": "Mode",
      "type": "string"
    },
    "option_key": {
      "default": null,
      "title": "Option Key",
      "type": "string"
    }
  },
  "required": [
    "location",
    "code"
  ],
  "title": "snippet_inject_via_optionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-snippet_get_options_injection-6e2b5616"></a>

## snippet_get_options_injection

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Get the current code injected via snippet_inject_via_options (header and footer)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1954-L1958) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "snippet_get_options_injectionArguments",
  "type": "object"
}
```

</details>

<a id="tool-snippet_wpcode_get_locations-e0d6fac1"></a>

## snippet_wpcode_get_locations

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Get all available WPCode snippet locations/positions (head_start, body_end, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1960-L1964) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "snippet_wpcode_get_locationsArguments",
  "type": "object"
}
```

</details>

<a id="tool-snippet_wpcode_set_location-be4fb22d"></a>

## snippet_wpcode_set_location

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Change where a WPCode snippet runs (location/position)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1966-L1973) · Schema: tools/list.

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
    "location": {
      "title": "Location",
      "type": "string"
    }
  },
  "required": [
    "id",
    "location"
  ],
  "title": "snippet_wpcode_set_locationArguments",
  "type": "object"
}
```

</details>

<a id="tool-snippet_export-49602d49"></a>

## snippet_export

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Export snippets as JSON (for backup or migration to another site)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1975-L1981) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ids": {
      "default": null,
      "items": {},
      "title": "Ids",
      "type": "array"
    }
  },
  "title": "snippet_exportArguments",
  "type": "object"
}
```

</details>

<a id="tool-snippet_get_stats-178df838"></a>

## snippet_get_stats

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Get summary stats: total snippets, active count, by type, by scope
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1983-L1987) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "snippet_get_statsArguments",
  "type": "object"
}
```

</details>

<a id="tool-aiseo_llmstxt_generate-5691f012"></a>

## aiseo_llmstxt_generate

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] AI SEO tool. Generate /llms.txt content from site posts and pages (structured site summary for AI crawlers)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L27-L35) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_types": {
      "default": null,
      "items": {},
      "title": "Post Types",
      "type": "array"
    },
    "per_page": {
      "default": 50,
      "title": "Per Page",
      "type": "integer"
    },
    "include_descriptions": {
      "default": true,
      "title": "Include Descriptions",
      "type": "boolean"
    }
  },
  "title": "aiseo_llmstxt_generateArguments",
  "type": "object"
}
```

</details>

<a id="tool-aiseo_llmstxt_get-3cd73150"></a>

## aiseo_llmstxt_get

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] AI SEO tool. Read current llms.txt content (if stored as a page or option)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L37-L41) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "aiseo_llmstxt_getArguments",
  "type": "object"
}
```

</details>

<a id="tool-aiseo_llmstxt_update-2d3c0c63"></a>

## aiseo_llmstxt_update

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] AI SEO tool. Add or remove URLs from llms.txt content
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L43-L52) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "action": {
      "title": "Action",
      "type": "string"
    },
    "urls": {
      "items": {},
      "title": "Urls",
      "type": "array"
    },
    "titles": {
      "default": null,
      "items": {},
      "title": "Titles",
      "type": "array"
    },
    "descriptions": {
      "default": null,
      "items": {},
      "title": "Descriptions",
      "type": "array"
    }
  },
  "required": [
    "action",
    "urls"
  ],
  "title": "aiseo_llmstxt_updateArguments",
  "type": "object"
}
```

</details>

<a id="tool-aiseo_robots_txt_get-be02e51d"></a>

## aiseo_robots_txt_get

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] AI SEO tool. Read the current robots.txt content
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L54-L58) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "aiseo_robots_txt_getArguments",
  "type": "object"
}
```

</details>

<a id="tool-aiseo_robots_txt_update-e2ccb8c7"></a>

## aiseo_robots_txt_update

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] AI SEO tool. Add AI bot rules to robots.txt (GPTBot, ClaudeBot, Google-Extended, CCBot, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L60-L66) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "rules": {
      "default": null,
      "items": {},
      "title": "Rules",
      "type": "array"
    }
  },
  "title": "aiseo_robots_txt_updateArguments",
  "type": "object"
}
```

</details>

<a id="tool-aiseo_topical_authority_map-0ee2513c"></a>

## aiseo_topical_authority_map

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] AI SEO tool. Build a topical authority map / topic cluster from existing posts based on categories and keywords
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L68-L75) · Schema: tools/list.

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
    }
  },
  "title": "aiseo_topical_authority_mapArguments",
  "type": "object"
}
```

</details>

<a id="tool-aiseo_topical_gap_analysis-444fb55c"></a>

## aiseo_topical_gap_analysis

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] AI SEO tool. Find missing subtopics by analyzing existing content clusters and suggesting gaps
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L77-L84) · Schema: tools/list.

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
    "per_page": {
      "default": 50,
      "title": "Per Page",
      "type": "integer"
    }
  },
  "required": [
    "category_id"
  ],
  "title": "aiseo_topical_gap_analysisArguments",
  "type": "object"
}
```

</details>

<a id="tool-aiseo_content_audit-cd615c68"></a>

## aiseo_content_audit

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] AI SEO tool. Audit content for AI-friendliness (clear structure, Q&A format, entity mentions, key takeaways)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L86-L93) · Schema: tools/list.

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
  "title": "aiseo_content_auditArguments",
  "type": "object"
}
```

</details>

<a id="tool-aiseo_structured_answers_generate-38c9b139"></a>

## aiseo_structured_answers_generate

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] AI SEO tool. Generate Q&A blocks from post content for featured snippet / AI citation optimization
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L95-L102) · Schema: tools/list.

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
  "title": "aiseo_structured_answers_generateArguments",
  "type": "object"
}
```

</details>

<a id="tool-aiseo_key_takeaways_generate-7699af67"></a>

## aiseo_key_takeaways_generate

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] AI SEO tool. Extract key takeaway points from a post's content
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L104-L112) · Schema: tools/list.

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
    "max_points": {
      "default": 5,
      "title": "Max Points",
      "type": "integer"
    }
  },
  "required": [
    "id"
  ],
  "title": "aiseo_key_takeaways_generateArguments",
  "type": "object"
}
```

</details>

<a id="tool-aiseo_entity_extract-440ada5a"></a>

## aiseo_entity_extract

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] AI SEO tool. Identify named entities (people, places, brands, concepts) mentioned in post content
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L114-L121) · Schema: tools/list.

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
  "title": "aiseo_entity_extractArguments",
  "type": "object"
}
```

</details>

<a id="tool-aiseo_internal_linking_suggest-01fb2cb9"></a>

## aiseo_internal_linking_suggest

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] AI SEO tool. Suggest internal links between posts based on content and keyword similarity
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L123-L131) · Schema: tools/list.

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
    "max_suggestions": {
      "default": 10,
      "title": "Max Suggestions",
      "type": "integer"
    },
    "post_type": {
      "default": "post",
      "title": "Post Type",
      "type": "string"
    }
  },
  "required": [
    "id"
  ],
  "title": "aiseo_internal_linking_suggestArguments",
  "type": "object"
}
```

</details>

<a id="tool-aiseo_internal_linking_report-2d95810f"></a>

## aiseo_internal_linking_report

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] AI SEO tool. Report on internal linking: orphaned content, link distribution, posts with no inbound links
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L133-L140) · Schema: tools/list.

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
  "title": "aiseo_internal_linking_reportArguments",
  "type": "object"
}
```

</details>

<a id="tool-aiseo_keyword_density_check-605fc304"></a>

## aiseo_keyword_density_check

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] AI SEO tool. Check keyword usage and density in a post's content
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L142-L150) · Schema: tools/list.

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
    "keyword": {
      "default": null,
      "title": "Keyword",
      "type": "string"
    }
  },
  "required": [
    "id"
  ],
  "title": "aiseo_keyword_density_checkArguments",
  "type": "object"
}
```

</details>

<a id="tool-aiseo_readability_score-a7a237da"></a>

## aiseo_readability_score

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] AI SEO tool. Calculate readability score for a post (Flesch-Kincaid grade level, avg sentence/word length)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L152-L159) · Schema: tools/list.

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
  "title": "aiseo_readability_scoreArguments",
  "type": "object"
}
```

</details>

<a id="tool-aiseo_content_length_audit-c3ccc0d6"></a>

## aiseo_content_length_audit

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] AI SEO tool. Audit posts for minimum word count thresholds
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L161-L169) · Schema: tools/list.

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
    "min_words": {
      "default": 300,
      "title": "Min Words",
      "type": "integer"
    },
    "per_page": {
      "default": 50,
      "title": "Per Page",
      "type": "integer"
    }
  },
  "title": "aiseo_content_length_auditArguments",
  "type": "object"
}
```

</details>

<a id="tool-aiseo_heading_structure_audit-0657731d"></a>

## aiseo_heading_structure_audit

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] AI SEO tool. Audit H1-H6 heading hierarchy in post content (missing H1, skipped levels, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L171-L178) · Schema: tools/list.

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
  "title": "aiseo_heading_structure_auditArguments",
  "type": "object"
}
```

</details>

<a id="tool-aiseo_image_seo_audit-31423825"></a>

## aiseo_image_seo_audit

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] AI SEO tool. Audit images in a post for SEO (missing alt text, filename quality, dimensions)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L180-L187) · Schema: tools/list.

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
  "title": "aiseo_image_seo_auditArguments",
  "type": "object"
}
```

</details>

<a id="tool-redirects_detect_plugin-a6301939"></a>

## redirects_detect_plugin

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Detect which redirect plugin is active (Redirection, RankMath, Yoast Premium, SEOPress)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L189-L193) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "redirects_detect_pluginArguments",
  "type": "object"
}
```

</details>

<a id="tool-redirects_list-02717c78"></a>

## redirects_list

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Tool tool. List all redirects (plugin-agnostic, auto-detects which plugin is active)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L195-L206) · Schema: tools/list.

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
    "filter_type": {
      "default": null,
      "title": "Filter Type",
      "type": "integer"
    }
  },
  "title": "redirects_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-redirects_create-5633fe9c"></a>

## redirects_create

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a redirect (plugin-agnostic)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L208-L218) · Schema: tools/list.

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
    "target": {
      "title": "Target",
      "type": "string"
    },
    "type": {
      "default": 301,
      "title": "Type",
      "type": "integer"
    },
    "match_type": {
      "default": "url",
      "title": "Match Type",
      "type": "string"
    },
    "group_id": {
      "default": null,
      "title": "Group Id",
      "type": "integer"
    }
  },
  "required": [
    "source",
    "target"
  ],
  "title": "redirects_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-redirects_update-2de3c95c"></a>

## redirects_update

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Update an existing redirect
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L220-L230) · Schema: tools/list.

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
    "source": {
      "default": null,
      "title": "Source",
      "type": "string"
    },
    "target": {
      "default": null,
      "title": "Target",
      "type": "string"
    },
    "type": {
      "default": null,
      "title": "Type",
      "type": "integer"
    },
    "enabled": {
      "default": null,
      "title": "Enabled",
      "type": "boolean"
    }
  },
  "required": [
    "id"
  ],
  "title": "redirects_updateArguments",
  "type": "object"
}
```

</details>

<a id="tool-redirects_delete-338776e5"></a>

## redirects_delete

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] Tool tool. Delete a redirect
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L232-L238) · Schema: tools/list.

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
  "title": "redirects_deleteArguments",
  "type": "object"
}
```

</details>

<a id="tool-redirects_bulk_import-d440d0c3"></a>

## redirects_bulk_import

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Import redirects in bulk from an array of redirect entries
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L240-L246) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "redirects": {
      "default": 301,
      "items": {},
      "title": "Redirects",
      "type": "array"
    }
  },
  "title": "redirects_bulk_importArguments",
  "type": "object"
}
```

</details>

<a id="tool-redirects_export-727ec82b"></a>

## redirects_export

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Export all redirects as a structured array
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L248-L254) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "format": {
      "default": "json",
      "title": "Format",
      "type": "string"
    }
  },
  "title": "redirects_exportArguments",
  "type": "object"
}
```

</details>

<a id="tool-redirects_groups_list-0e6cb3d0"></a>

## redirects_groups_list

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List redirect groups (Redirection plugin)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L256-L260) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "redirects_groups_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-redirects_groups_create-5e33dfd2"></a>

## redirects_groups_create

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a redirect group (Redirection plugin)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L262-L269) · Schema: tools/list.

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
    "module_id": {
      "default": 1,
      "title": "Module Id",
      "type": "integer"
    }
  },
  "required": [
    "name"
  ],
  "title": "redirects_groups_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-redirects_404_list-bebade11"></a>

## redirects_404_list

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List 404 errors / unmatched URLs
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L271-L279) · Schema: tools/list.

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
      "default": "total",
      "title": "Orderby",
      "type": "string"
    }
  },
  "title": "redirects_404_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-redirects_404_to_redirect-5e7904f0"></a>

## redirects_404_to_redirect

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Convert a 404 entry to a redirect
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L281-L289) · Schema: tools/list.

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
    "target": {
      "title": "Target",
      "type": "string"
    },
    "type": {
      "default": 301,
      "title": "Type",
      "type": "integer"
    }
  },
  "required": [
    "url",
    "target"
  ],
  "title": "redirects_404_to_redirectArguments",
  "type": "object"
}
```

</details>

<a id="tool-redirects_test-a03c1039"></a>

## redirects_test

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Test if a URL would be redirected (checks existing redirect rules)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L291-L297) · Schema: tools/list.

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
  "title": "redirects_testArguments",
  "type": "object"
}
```

</details>

<a id="tool-redirects_htaccess_add-aa97c38d"></a>

## redirects_htaccess_add

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Generate an .htaccess redirect rule (for manual addition or companion plugin)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L299-L308) · Schema: tools/list.

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
    "target": {
      "title": "Target",
      "type": "string"
    },
    "type": {
      "default": 301,
      "title": "Type",
      "type": "integer"
    },
    "match_type": {
      "default": "exact",
      "title": "Match Type",
      "type": "string"
    }
  },
  "required": [
    "source",
    "target"
  ],
  "title": "redirects_htaccess_addArguments",
  "type": "object"
}
```

</details>

<a id="tool-redirects_htaccess_read-0742c5ba"></a>

## redirects_htaccess_read

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Read current .htaccess redirect rules (via companion endpoint)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L310-L314) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "redirects_htaccess_readArguments",
  "type": "object"
}
```

</details>

<a id="tool-redirects_nginx_generate-248eeb69"></a>

## redirects_nginx_generate

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Generate Nginx redirect configuration from existing redirects
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L316-L322) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "per_page": {
      "default": 100,
      "title": "Per Page",
      "type": "integer"
    }
  },
  "title": "redirects_nginx_generateArguments",
  "type": "object"
}
```

</details>

<a id="tool-schema_set_for_post-dc5c6ac5"></a>

## schema_set_for_post

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Inject JSON-LD schema markup into a post via post meta
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L324-L332) · Schema: tools/list.

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
    "schema": {
      "additionalProperties": true,
      "title": "Schema",
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
    "schema"
  ],
  "title": "schema_set_for_postArguments",
  "type": "object"
}
```

</details>

<a id="tool-schema_get_for_post-3294bde2"></a>

## schema_get_for_post

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Read existing JSON-LD schema from a post
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L334-L341) · Schema: tools/list.

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
  "title": "schema_get_for_postArguments",
  "type": "object"
}
```

</details>

<a id="tool-schema_remove_from_post-c182057e"></a>

## schema_remove_from_post

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] Tool tool. Remove JSON-LD schema from a post
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L343-L350) · Schema: tools/list.

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
  "title": "schema_remove_from_postArguments",
  "type": "object"
}
```

</details>

<a id="tool-schema_validate-f9d1b98b"></a>

## schema_validate

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Validate a JSON-LD schema object for basic correctness (required fields, @context, @type)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L352-L358) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "schema": {
      "additionalProperties": true,
      "title": "Schema",
      "type": "object"
    }
  },
  "required": [
    "schema"
  ],
  "title": "schema_validateArguments",
  "type": "object"
}
```

</details>

<a id="tool-schema_generate_article-4fce3dff"></a>

## schema_generate_article

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Auto-generate Article/BlogPosting JSON-LD schema from a post's fields
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L360-L367) · Schema: tools/list.

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
    "article_type": {
      "default": "Article",
      "title": "Article Type",
      "type": "string"
    }
  },
  "required": [
    "id"
  ],
  "title": "schema_generate_articleArguments",
  "type": "object"
}
```

</details>

<a id="tool-schema_generate_product-9f70b710"></a>

## schema_generate_product

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Auto-generate Product JSON-LD schema from a WooCommerce product
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L369-L376) · Schema: tools/list.

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
    "include_reviews": {
      "default": true,
      "title": "Include Reviews",
      "type": "boolean"
    }
  },
  "required": [
    "id"
  ],
  "title": "schema_generate_productArguments",
  "type": "object"
}
```

</details>

<a id="tool-schema_generate_local_business-62d1b2fa"></a>

## schema_generate_local_business

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Generate LocalBusiness JSON-LD schema from site info
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L378-L395) · Schema: tools/list.

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
    "business_type": {
      "default": "LocalBusiness",
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
    "url": {
      "default": null,
      "title": "Url",
      "type": "string"
    },
    "image": {
      "default": null,
      "title": "Image",
      "type": "string"
    },
    "geo": {
      "additionalProperties": true,
      "default": null,
      "title": "Geo",
      "type": "object"
    },
    "opening_hours": {
      "default": null,
      "items": {},
      "title": "Opening Hours",
      "type": "array"
    },
    "price_range": {
      "default": null,
      "title": "Price Range",
      "type": "string"
    },
    "post_id": {
      "default": null,
      "title": "Post Id",
      "type": "integer"
    },
    "post_type": {
      "default": "page",
      "title": "Post Type",
      "type": "string"
    }
  },
  "required": [
    "name"
  ],
  "title": "schema_generate_local_businessArguments",
  "type": "object"
}
```

</details>

<a id="tool-schema_generate_faq-3cb6d305"></a>

## schema_generate_faq

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Generate FAQPage JSON-LD schema from FAQ content
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L397-L405) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "questions": {
      "default": null,
      "items": {},
      "title": "Questions",
      "type": "array"
    },
    "post_id": {
      "default": null,
      "title": "Post Id",
      "type": "integer"
    },
    "post_type": {
      "default": "post",
      "title": "Post Type",
      "type": "string"
    }
  },
  "title": "schema_generate_faqArguments",
  "type": "object"
}
```

</details>

<a id="tool-schema_generate_howto-15ee29ca"></a>

## schema_generate_howto

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Generate HowTo JSON-LD schema from step-by-step content
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L407-L421) · Schema: tools/list.

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
      "additionalProperties": true,
      "default": null,
      "title": "Estimated Cost",
      "type": "object"
    },
    "supply": {
      "default": null,
      "items": {},
      "title": "Supply",
      "type": "array"
    },
    "tool": {
      "default": null,
      "items": {},
      "title": "Tool",
      "type": "array"
    },
    "steps": {
      "default": null,
      "items": {},
      "title": "Steps",
      "type": "array"
    },
    "post_id": {
      "default": null,
      "title": "Post Id",
      "type": "integer"
    },
    "post_type": {
      "default": "post",
      "title": "Post Type",
      "type": "string"
    }
  },
  "required": [
    "name"
  ],
  "title": "schema_generate_howtoArguments",
  "type": "object"
}
```

</details>

<a id="tool-schema_generate_recipe-9d46cb31"></a>

## schema_generate_recipe

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Generate Recipe JSON-LD schema
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L423-L445) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

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
    "image": {
      "default": null,
      "title": "Image",
      "type": "string"
    },
    "author": {
      "default": null,
      "title": "Author",
      "type": "string"
    },
    "prep_time": {
      "default": null,
      "title": "Prep Time",
      "type": "string"
    },
    "cook_time": {
      "default": null,
      "title": "Cook Time",
      "type": "string"
    },
    "total_time": {
      "default": null,
      "title": "Total Time",
      "type": "string"
    },
    "servings": {
      "default": null,
      "title": "Servings",
      "type": "string"
    },
    "calories": {
      "default": null,
      "title": "Calories",
      "type": "string"
    },
    "category": {
      "default": null,
      "title": "Category",
      "type": "string"
    },
    "cuisine": {
      "default": null,
      "title": "Cuisine",
      "type": "string"
    },
    "ingredients": {
      "default": null,
      "items": {},
      "title": "Ingredients",
      "type": "array"
    },
    "instructions": {
      "default": null,
      "items": {},
      "title": "Instructions",
      "type": "array"
    },
    "rating_value": {
      "default": null,
      "title": "Rating Value",
      "type": "integer"
    },
    "rating_count": {
      "default": null,
      "title": "Rating Count",
      "type": "integer"
    },
    "post_id": {
      "default": null,
      "title": "Post Id",
      "type": "integer"
    },
    "post_type": {
      "default": "post",
      "title": "Post Type",
      "type": "string"
    }
  },
  "title": "schema_generate_recipeArguments",
  "type": "object"
}
```

</details>

<a id="tool-schema_generate_event-b0ee9d31"></a>

## schema_generate_event

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Generate Event JSON-LD schema
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L447-L469) · Schema: tools/list.

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
    "start_date": {
      "title": "Start Date",
      "type": "string"
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
    "location_url": {
      "default": null,
      "title": "Location Url",
      "type": "string"
    },
    "event_status": {
      "default": "EventScheduled",
      "title": "Event Status",
      "type": "string"
    },
    "attendance_mode": {
      "default": "OfflineEventAttendanceMode",
      "title": "Attendance Mode",
      "type": "string"
    },
    "image": {
      "default": null,
      "title": "Image",
      "type": "string"
    },
    "organizer": {
      "default": null,
      "title": "Organizer",
      "type": "string"
    },
    "performer": {
      "default": null,
      "title": "Performer",
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
    "url": {
      "default": null,
      "title": "Url",
      "type": "string"
    },
    "post_id": {
      "default": null,
      "title": "Post Id",
      "type": "integer"
    },
    "post_type": {
      "default": "post",
      "title": "Post Type",
      "type": "string"
    }
  },
  "required": [
    "name",
    "start_date"
  ],
  "title": "schema_generate_eventArguments",
  "type": "object"
}
```

</details>

<a id="tool-schema_generate_breadcrumbs-2eed6481"></a>

## schema_generate_breadcrumbs

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Generate BreadcrumbList JSON-LD schema
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L471-L479) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "items": {
      "default": null,
      "items": {},
      "title": "Items",
      "type": "array"
    },
    "post_id": {
      "default": null,
      "title": "Post Id",
      "type": "integer"
    },
    "post_type": {
      "default": "page",
      "title": "Post Type",
      "type": "string"
    }
  },
  "title": "schema_generate_breadcrumbsArguments",
  "type": "object"
}
```

</details>

<a id="tool-schema_generate_organization-fa854514"></a>

## schema_generate_organization

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Generate Organization JSON-LD schema with sameAs social profiles
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L481-L498) · Schema: tools/list.

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
    "url": {
      "default": null,
      "title": "Url",
      "type": "string"
    },
    "logo": {
      "default": null,
      "title": "Logo",
      "type": "string"
    },
    "description": {
      "default": null,
      "title": "Description",
      "type": "string"
    },
    "email": {
      "default": null,
      "title": "Email",
      "type": "string"
    },
    "phone": {
      "default": null,
      "title": "Phone",
      "type": "string"
    },
    "address": {
      "additionalProperties": true,
      "default": null,
      "title": "Address",
      "type": "object"
    },
    "social_profiles": {
      "default": null,
      "items": {},
      "title": "Social Profiles",
      "type": "array"
    },
    "founding_date": {
      "default": null,
      "title": "Founding Date",
      "type": "string"
    },
    "founders": {
      "default": null,
      "items": {},
      "title": "Founders",
      "type": "array"
    },
    "post_id": {
      "default": null,
      "title": "Post Id",
      "type": "integer"
    },
    "post_type": {
      "default": "page",
      "title": "Post Type",
      "type": "string"
    }
  },
  "required": [
    "name"
  ],
  "title": "schema_generate_organizationArguments",
  "type": "object"
}
```

</details>

<a id="tool-schema_generate_video-5840c75b"></a>

## schema_generate_video

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Generate VideoObject JSON-LD schema
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L500-L514) · Schema: tools/list.

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
      "title": "Description",
      "type": "string"
    },
    "thumbnail_url": {
      "title": "Thumbnail Url",
      "type": "string"
    },
    "upload_date": {
      "title": "Upload Date",
      "type": "string"
    },
    "duration": {
      "default": null,
      "title": "Duration",
      "type": "string"
    },
    "content_url": {
      "default": null,
      "title": "Content Url",
      "type": "string"
    },
    "embed_url": {
      "default": null,
      "title": "Embed Url",
      "type": "string"
    },
    "post_id": {
      "default": null,
      "title": "Post Id",
      "type": "integer"
    },
    "post_type": {
      "default": "post",
      "title": "Post Type",
      "type": "string"
    }
  },
  "required": [
    "name",
    "description",
    "thumbnail_url",
    "upload_date"
  ],
  "title": "schema_generate_videoArguments",
  "type": "object"
}
```

</details>

<a id="tool-schema_generate_review-d2e6662e"></a>

## schema_generate_review

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Generate Review or AggregateRating JSON-LD schema
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L516-L531) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "item_name": {
      "title": "Item Name",
      "type": "string"
    },
    "rating_value": {
      "title": "Rating Value",
      "type": "integer"
    },
    "item_type": {
      "default": "Product",
      "title": "Item Type",
      "type": "string"
    },
    "review_body": {
      "default": null,
      "title": "Review Body",
      "type": "string"
    },
    "author": {
      "default": null,
      "title": "Author",
      "type": "string"
    },
    "best_rating": {
      "default": 5,
      "title": "Best Rating",
      "type": "integer"
    },
    "aggregate": {
      "default": false,
      "title": "Aggregate",
      "type": "boolean"
    },
    "review_count": {
      "default": null,
      "title": "Review Count",
      "type": "integer"
    },
    "post_id": {
      "default": null,
      "title": "Post Id",
      "type": "integer"
    },
    "post_type": {
      "default": "post",
      "title": "Post Type",
      "type": "string"
    }
  },
  "required": [
    "item_name",
    "rating_value"
  ],
  "title": "schema_generate_reviewArguments",
  "type": "object"
}
```

</details>

<a id="tool-schema_generate_job_posting-cd29ff92"></a>

## schema_generate_job_posting

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Generate JobPosting JSON-LD schema
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L533-L554) · Schema: tools/list.

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
    "description": {
      "title": "Description",
      "type": "string"
    },
    "company_name": {
      "title": "Company Name",
      "type": "string"
    },
    "date_posted": {
      "default": null,
      "title": "Date Posted",
      "type": "string"
    },
    "valid_through": {
      "default": null,
      "title": "Valid Through",
      "type": "string"
    },
    "employment_type": {
      "default": "FULL_TIME",
      "title": "Employment Type",
      "type": "string"
    },
    "company_url": {
      "default": null,
      "title": "Company Url",
      "type": "string"
    },
    "company_logo": {
      "default": null,
      "title": "Company Logo",
      "type": "string"
    },
    "location": {
      "default": null,
      "title": "Location",
      "type": "string"
    },
    "remote": {
      "default": false,
      "title": "Remote",
      "type": "boolean"
    },
    "salary_min": {
      "default": null,
      "title": "Salary Min",
      "type": "integer"
    },
    "salary_max": {
      "default": null,
      "title": "Salary Max",
      "type": "integer"
    },
    "salary_currency": {
      "default": "USD",
      "title": "Salary Currency",
      "type": "string"
    },
    "salary_unit": {
      "default": "YEAR",
      "title": "Salary Unit",
      "type": "string"
    },
    "post_id": {
      "default": null,
      "title": "Post Id",
      "type": "integer"
    },
    "post_type": {
      "default": "post",
      "title": "Post Type",
      "type": "string"
    }
  },
  "required": [
    "title",
    "description",
    "company_name"
  ],
  "title": "schema_generate_job_postingArguments",
  "type": "object"
}
```

</details>

<a id="tool-schema_generate_real_estate-36bae93c"></a>

## schema_generate_real_estate

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Generate RealEstateListing JSON-LD schema
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L556-L577) · Schema: tools/list.

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
      "default": null,
      "title": "Description",
      "type": "string"
    },
    "url": {
      "default": null,
      "title": "Url",
      "type": "string"
    },
    "image": {
      "default": null,
      "title": "Image",
      "type": "string"
    },
    "address": {
      "additionalProperties": true,
      "default": null,
      "title": "Address",
      "type": "object"
    },
    "price": {
      "default": null,
      "title": "Price",
      "type": "integer"
    },
    "currency": {
      "default": "USD",
      "title": "Currency",
      "type": "string"
    },
    "property_type": {
      "default": null,
      "title": "Property Type",
      "type": "string"
    },
    "bedrooms": {
      "default": null,
      "title": "Bedrooms",
      "type": "integer"
    },
    "bathrooms": {
      "default": null,
      "title": "Bathrooms",
      "type": "integer"
    },
    "floor_size": {
      "default": null,
      "title": "Floor Size",
      "type": "string"
    },
    "lot_size": {
      "default": null,
      "title": "Lot Size",
      "type": "string"
    },
    "year_built": {
      "default": null,
      "title": "Year Built",
      "type": "integer"
    },
    "listing_agent": {
      "default": null,
      "title": "Listing Agent",
      "type": "string"
    },
    "post_id": {
      "default": null,
      "title": "Post Id",
      "type": "integer"
    },
    "post_type": {
      "default": "post",
      "title": "Post Type",
      "type": "string"
    }
  },
  "required": [
    "name"
  ],
  "title": "schema_generate_real_estateArguments",
  "type": "object"
}
```

</details>

<a id="tool-schema_bulk_apply-971fe512"></a>

## schema_bulk_apply

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Apply a schema template to all posts of a specific type
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L579-L588) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "schema_type": {
      "title": "Schema Type",
      "type": "string"
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
    "overwrite": {
      "default": false,
      "title": "Overwrite",
      "type": "boolean"
    }
  },
  "required": [
    "schema_type"
  ],
  "title": "schema_bulk_applyArguments",
  "type": "object"
}
```

</details>

<a id="tool-schema_audit_site-05788a26"></a>

## schema_audit_site

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Audit which posts have or lack JSON-LD schema markup
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L590-L598) · Schema: tools/list.

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
  "title": "schema_audit_siteArguments",
  "type": "object"
}
```

</details>

<a id="tool-schema_custom_jsonld-6405ebff"></a>

## schema_custom_jsonld

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Inject raw custom JSON-LD markup into a post
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L600-L608) · Schema: tools/list.

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
    "jsonld": {
      "title": "Jsonld",
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
    "jsonld"
  ],
  "title": "schema_custom_jsonldArguments",
  "type": "object"
}
```

</details>

<a id="tool-aioseo_meta_get-40504147"></a>

## aioseo_meta_get

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] All in One SEO tool. Get AIOSEO meta for a post (_aioseo_title, _aioseo_description, _aioseo_keywords, _aioseo_robots, _aioseo_canonical_url, _aioseo_og_*, _aioseo_twitter_*)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L610-L617) · Schema: tools/list.

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
  "title": "aioseo_meta_getArguments",
  "type": "object"
}
```

</details>

<a id="tool-aioseo_meta_set-7c2c468f"></a>

## aioseo_meta_set

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] All in One SEO tool. Set AIOSEO meta fields for a post
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L619-L627) · Schema: tools/list.

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
  "title": "aioseo_meta_setArguments",
  "type": "object"
}
```

</details>

<a id="tool-aioseo_meta_bulk_set-ab013406"></a>

## aioseo_meta_bulk_set

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] All in One SEO tool. Set AIOSEO meta fields across many posts at once
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L629-L635) · Schema: tools/list.

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
  "title": "aioseo_meta_bulk_setArguments",
  "type": "object"
}
```

</details>

<a id="tool-aioseo_schema_set-77df3947"></a>

## aioseo_schema_set

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] All in One SEO tool. Set AIOSEO schema markup type for a post
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L637-L646) · Schema: tools/list.

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
  "title": "aioseo_schema_setArguments",
  "type": "object"
}
```

</details>

<a id="tool-aioseo_redirects_list-8cbc974c"></a>

## aioseo_redirects_list

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] All in One SEO tool. List AIOSEO redirects
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L648-L655) · Schema: tools/list.

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
  "title": "aioseo_redirects_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-aioseo_redirects_create-8c27148c"></a>

## aioseo_redirects_create

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] All in One SEO tool. Create a redirect in AIOSEO
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L657-L665) · Schema: tools/list.

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
  "title": "aioseo_redirects_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-aioseo_sitemap_config-fcb21429"></a>

## aioseo_sitemap_config

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] All in One SEO tool. Get or update AIOSEO sitemap settings
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L667-L674) · Schema: tools/list.

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
  "title": "aioseo_sitemap_configArguments",
  "type": "object"
}
```

</details>

<a id="tool-seopress_meta_get-c8497a23"></a>

## seopress_meta_get

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] SEOPress tool. Get SEOPress meta for a post (_seopress_titles_title, _seopress_titles_desc, _seopress_robots_index, _seopress_social_fb_*, _seopress_social_twitter_*)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L676-L683) · Schema: tools/list.

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
  "title": "seopress_meta_getArguments",
  "type": "object"
}
```

</details>

<a id="tool-seopress_meta_set-6f83f903"></a>

## seopress_meta_set

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] SEOPress tool. Set SEOPress meta fields for a post
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L685-L693) · Schema: tools/list.

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
  "title": "seopress_meta_setArguments",
  "type": "object"
}
```

</details>

<a id="tool-seopress_redirects_list-1809b90c"></a>

## seopress_redirects_list

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] SEOPress tool. List SEOPress redirects
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L695-L702) · Schema: tools/list.

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
  "title": "seopress_redirects_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-seopress_redirects_create-82d2019d"></a>

## seopress_redirects_create

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] SEOPress tool. Create a redirect in SEOPress
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L704-L712) · Schema: tools/list.

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
  "title": "seopress_redirects_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_plugin_detect-05166d57"></a>

## seo_plugin_detect

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Tool tool. Detect which SEO plugin is active on the site (Yoast, RankMath, AIOSEO, or SEOPress)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L714-L718) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "seo_plugin_detectArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_meta_get_universal-4a0d560c"></a>

## seo_meta_get_universal

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Tool tool. Get SEO meta for a post using whichever SEO plugin is active (auto-detects Yoast/RankMath/AIOSEO/SEOPress)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L720-L728) · Schema: tools/list.

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
  "title": "seo_meta_get_universalArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_meta_set_universal-034d1e8e"></a>

## seo_meta_set_universal

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Set SEO meta for a post using whichever SEO plugin is active (auto-detects). Accepts standard keys: title, description, focus_keyword, canonical, og_title, og_description, og_image, twitter_title, twitter_description, noindex
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L730-L747) · Schema: tools/list.

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
    "focus_keyword": {
      "default": null,
      "title": "Focus Keyword",
      "type": "string"
    },
    "canonical": {
      "default": null,
      "title": "Canonical",
      "type": "string"
    },
    "noindex": {
      "default": null,
      "title": "Noindex",
      "type": "boolean"
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
    }
  },
  "required": [
    "id"
  ],
  "title": "seo_meta_set_universalArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_migrate_meta-bf921f99"></a>

## seo_migrate_meta

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Tool tool. Migrate SEO meta from one plugin format to another (e.g. Yoast to RankMath) for all posts
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L749-L763) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "from_plugin": {
      "title": "From Plugin",
      "type": "string"
    },
    "to_plugin": {
      "title": "To Plugin",
      "type": "string"
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
    "dry_run": {
      "default": true,
      "title": "Dry Run",
      "type": "boolean"
    }
  },
  "required": [
    "from_plugin",
    "to_plugin"
  ],
  "title": "seo_migrate_metaArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_bulk_analyze-71b2ced9"></a>

## seo_bulk_analyze

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Tool tool. Analyze all posts for SEO completeness (title, description, focus keyword, OG data) across any SEO plugin
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L765-L775) · Schema: tools/list.

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
  "title": "seo_bulk_analyzeArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_missing_meta_report-0f440808"></a>

## seo_missing_meta_report

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Tool tool. Find posts missing SEO title, meta description, or focus keyword
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L777-L787) · Schema: tools/list.

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
    "check": {
      "default": "all",
      "title": "Check",
      "type": "string"
    }
  },
  "title": "seo_missing_meta_reportArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_duplicate_meta_report-b7c6b4df"></a>

## seo_duplicate_meta_report

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Find posts with duplicate SEO titles or meta descriptions
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L789-L797) · Schema: tools/list.

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
    "field": {
      "default": "both",
      "title": "Field",
      "type": "string"
    }
  },
  "title": "seo_duplicate_meta_reportArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_keyword_cannibalization_check-853fea76"></a>

## seo_keyword_cannibalization_check

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Tool tool. Find posts targeting the same focus keyword (keyword cannibalization)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L799-L807) · Schema: tools/list.

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
    }
  },
  "title": "seo_keyword_cannibalization_checkArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_create_optimized_post-88cddf35"></a>

## seo_create_optimized_post

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a fully SEO-optimized blog post with Yoast meta, featured image URL, categories, tags, and canonical URL in one call
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L809-L836) · Schema: tools/list.

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
    "content": {
      "title": "Content",
      "type": "string"
    },
    "excerpt": {
      "default": null,
      "title": "Excerpt",
      "type": "string"
    },
    "slug": {
      "default": null,
      "title": "Slug",
      "type": "string"
    },
    "focus_keyword": {
      "default": null,
      "title": "Focus Keyword",
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
    "categories": {
      "default": null,
      "items": {},
      "title": "Categories",
      "type": "array"
    },
    "tags": {
      "default": null,
      "items": {},
      "title": "Tags",
      "type": "array"
    },
    "featured_image_url": {
      "default": null,
      "title": "Featured Image Url",
      "type": "string"
    },
    "featured_image_alt": {
      "default": null,
      "title": "Featured Image Alt",
      "type": "string"
    },
    "status": {
      "default": "publish",
      "title": "Status",
      "type": "string"
    },
    "date": {
      "default": null,
      "title": "Date",
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
    "noindex": {
      "default": null,
      "title": "Noindex",
      "type": "boolean"
    },
    "canonical_url": {
      "default": null,
      "title": "Canonical Url",
      "type": "string"
    },
    "schema_type": {
      "default": null,
      "title": "Schema Type",
      "type": "string"
    },
    "author_id": {
      "default": null,
      "title": "Author Id",
      "type": "integer"
    },
    "comment_status": {
      "default": "closed",
      "title": "Comment Status",
      "type": "string"
    }
  },
  "required": [
    "title",
    "content"
  ],
  "title": "seo_create_optimized_postArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_bulk_create_posts-09a484f2"></a>

## seo_bulk_create_posts

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp, isinstance, results.append, wp.post.

```text
[WRITE] Tool tool. Create multiple SEO-optimized posts at once from an array of post data
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L838-L851) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "posts": {
      "default": null,
      "items": {},
      "title": "Posts",
      "type": "array"
    }
  },
  "title": "seo_bulk_create_postsArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_audit_posts-317e66f6"></a>

## seo_audit_posts

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Tool tool. Audit SEO status of all posts — find posts with missing meta description, title, focus keyword, or low scores
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L853-L863) · Schema: tools/list.

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
    "filter": {
      "default": "all",
      "title": "Filter",
      "type": "string"
    }
  },
  "title": "seo_audit_postsArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_fix_missing_meta-da135727"></a>

## seo_fix_missing_meta

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Tool tool. For posts missing SEO meta description, auto-generate from excerpt or content
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L865-L875) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_ids": {
      "default": null,
      "items": {},
      "title": "Post Ids",
      "type": "array"
    },
    "post_type": {
      "default": "post",
      "title": "Post Type",
      "type": "string"
    },
    "max_length": {
      "default": 155,
      "title": "Max Length",
      "type": "integer"
    }
  },
  "title": "seo_fix_missing_metaArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_update_all_og_images-762333ca"></a>

## seo_update_all_og_images

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Set Open Graph image for all posts that have a featured image but no OG image set
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L877-L884) · Schema: tools/list.

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
  "title": "seo_update_all_og_imagesArguments",
  "type": "object"
}
```

</details>

<a id="tool-seo_generate_sitemap_list-aeca12e3"></a>

## seo_generate_sitemap_list

Handler: Other product (tools/wordpress/seo.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Tool tool. Get a list of all public URLs on the site (for sitemap purposes)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/seo.py#L886-L895) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_types": {
      "default": null,
      "items": {},
      "title": "Post Types",
      "type": "array"
    },
    "per_page": {
      "default": 100,
      "title": "Per Page",
      "type": "integer"
    }
  },
  "title": "seo_generate_sitemap_listArguments",
  "type": "object"
}
```

</details>
