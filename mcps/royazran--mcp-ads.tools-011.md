# RoyAzran/mcp-ads: supporting and other-product tools

[Provider inventory](royazran--mcp-ads.md) · [Global tool index](../TOOL_INDEX.md)

Tools 1501–1650 of 3131. Exact schemas from the same upstream snapshot.

<a id="tool-elementor_create_footer_template-e9f6af80"></a>

## elementor_create_footer_template

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Create a new Elementor Pro Footer template
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2833-L2840) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "title": {
      "title": "Title",
      "type": "string"
    },
    "conditions": {
      "default": null,
      "items": {},
      "title": "Conditions",
      "type": "array"
    }
  },
  "required": [
    "title"
  ],
  "title": "elementor_create_footer_templateArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_create_single_post_template-66fa6d5f"></a>

## elementor_create_single_post_template

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Create an Elementor Pro Single Post/Page template
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2842-L2850) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "title": {
      "title": "Title",
      "type": "string"
    },
    "post_type": {
      "default": "post",
      "title": "Post Type",
      "type": "string"
    },
    "conditions": {
      "default": null,
      "items": {},
      "title": "Conditions",
      "type": "array"
    }
  },
  "required": [
    "title"
  ],
  "title": "elementor_create_single_post_templateArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_create_archive_template-205fd2a5"></a>

## elementor_create_archive_template

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Create an Elementor Pro Archive template (blog, category, tag, search)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2852-L2859) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "title": {
      "title": "Title",
      "type": "string"
    },
    "conditions": {
      "default": null,
      "items": {},
      "title": "Conditions",
      "type": "array"
    }
  },
  "required": [
    "title"
  ],
  "title": "elementor_create_archive_templateArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_create_404_template-e6ce8a70"></a>

## elementor_create_404_template

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_create\_library\_template.

```text
[WRITE] Elementor tool. Create an Elementor Pro 404 Error page template
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2861-L2866) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "title": {
      "default": "404 - Not Found",
      "title": "Title",
      "type": "string"
    }
  },
  "title": "elementor_create_404_templateArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_theme_builder_update_conditions-0521acb2"></a>

## elementor_theme_builder_update_conditions

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_schema\_required.

```text
[READ] Elementor tool. Update display conditions for an Elementor theme builder template
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2868-L2880) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "template_id": {
      "title": "Template Id",
      "type": "integer"
    },
    "conditions": {
      "items": {},
      "title": "Conditions",
      "type": "array"
    }
  },
  "required": [
    "template_id",
    "conditions"
  ],
  "title": "elementor_theme_builder_update_conditionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_set_performance_settings-ce6ce9d7"></a>

## elementor_set_performance_settings

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_schema\_required, locals().items, locals.

```text
[WRITE] Elementor tool. Configure Elementor performance/speed settings
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2882-L2895) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "load_fa4_shim": {
      "default": null,
      "title": "Load Fa4 Shim",
      "type": "boolean"
    },
    "improve_load_time_by": {
      "default": null,
      "title": "Improve Load Time By",
      "type": "string"
    },
    "optimized_dom_output": {
      "default": null,
      "title": "Optimized Dom Output",
      "type": "boolean"
    },
    "inline_font_icons": {
      "default": null,
      "title": "Inline Font Icons",
      "type": "string"
    },
    "lazy_load": {
      "default": null,
      "title": "Lazy Load",
      "type": "string"
    }
  },
  "title": "elementor_set_performance_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_set_maintenance_mode-5c984a7f"></a>

## elementor_set_maintenance_mode

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_schema\_required.

```text
[WRITE] Elementor tool. Enable or disable Elementor maintenance/coming soon mode
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2897-L2912) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "enabled": {
      "title": "Enabled",
      "type": "boolean"
    },
    "mode": {
      "default": "maintenance",
      "title": "Mode",
      "type": "string"
    },
    "template_id": {
      "default": null,
      "title": "Template Id",
      "type": "integer"
    },
    "exclude_roles": {
      "default": null,
      "items": {},
      "title": "Exclude Roles",
      "type": "array"
    }
  },
  "required": [
    "enabled"
  ],
  "title": "elementor_set_maintenance_modeArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_get_experiments-41c43736"></a>

## elementor_get_experiments

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_schema\_required.

```text
[READ] Elementor tool. Get all available Elementor experiments/features
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2914-L2920) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "elementor_get_experimentsArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_toggle_experiment-7a1cfc32"></a>

## elementor_toggle_experiment

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_schema\_required.

```text
[READ] Elementor tool. Enable or disable an Elementor experiment/feature
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2922-L2933) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "experiment_name": {
      "title": "Experiment Name",
      "type": "string"
    },
    "enabled": {
      "title": "Enabled",
      "type": "boolean"
    }
  },
  "required": [
    "experiment_name",
    "enabled"
  ],
  "title": "elementor_toggle_experimentArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_build_woo_shop_page-9bf04dac"></a>

## elementor_build_woo_shop_page

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Elementor tool. Build or rebuild the WooCommerce shop/archive page with Elementor
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2935-L2946) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "products_per_page": {
      "default": 12,
      "title": "Products Per Page",
      "type": "integer"
    },
    "columns": {
      "default": 3,
      "title": "Columns",
      "type": "integer"
    },
    "show_sidebar": {
      "default": true,
      "title": "Show Sidebar",
      "type": "boolean"
    },
    "show_ordering": {
      "default": true,
      "title": "Show Ordering",
      "type": "boolean"
    },
    "show_results_count": {
      "default": true,
      "title": "Show Results Count",
      "type": "boolean"
    },
    "show_sale_flash": {
      "default": true,
      "title": "Show Sale Flash",
      "type": "boolean"
    }
  },
  "title": "elementor_build_woo_shop_pageArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_build_woo_product_page-3c04030c"></a>

## elementor_build_woo_product_page

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Elementor tool. Build a WooCommerce single product page template with Elementor Pro
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2948-L2959) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "layout": {
      "default": "default",
      "title": "Layout",
      "type": "string"
    },
    "show_breadcrumbs": {
      "default": true,
      "title": "Show Breadcrumbs",
      "type": "boolean"
    },
    "show_rating": {
      "default": true,
      "title": "Show Rating",
      "type": "boolean"
    },
    "show_meta": {
      "default": true,
      "title": "Show Meta",
      "type": "boolean"
    },
    "show_tabs": {
      "default": true,
      "title": "Show Tabs",
      "type": "boolean"
    },
    "show_related": {
      "default": true,
      "title": "Show Related",
      "type": "boolean"
    }
  },
  "title": "elementor_build_woo_product_pageArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_create_full_page-8ce464e0"></a>

## elementor_create_full_page

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, \_wp.

```text
[WRITE] Elementor tool. Create a complete page with Elementor — specify sections and content from scratch
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2961-L2971) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "title": {
      "title": "Title",
      "type": "string"
    },
    "status": {
      "default": "publish",
      "title": "Status",
      "type": "string"
    },
    "page_template": {
      "default": null,
      "title": "Page Template",
      "type": "string"
    },
    "sections": {
      "default": null,
      "items": {},
      "title": "Sections",
      "type": "array"
    }
  },
  "required": [
    "title"
  ],
  "title": "elementor_create_full_pageArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_audio-99ea6392"></a>

## elementor_widget_audio

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_upsert\_widget, locals().items, locals.

```text
[READ] Elementor tool. Add an Audio player widget to an Elementor page (supports SoundCloud, hosted MP3)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2973-L2990) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "audio_type": {
      "default": "hosted",
      "title": "Audio Type",
      "type": "string"
    },
    "audio_url": {
      "default": null,
      "title": "Audio Url",
      "type": "string"
    },
    "hosted_url": {
      "default": null,
      "title": "Hosted Url",
      "type": "string"
    },
    "show_artwork": {
      "default": true,
      "title": "Show Artwork",
      "type": "boolean"
    },
    "show_comments": {
      "default": false,
      "title": "Show Comments",
      "type": "boolean"
    },
    "auto_play": {
      "default": false,
      "title": "Auto Play",
      "type": "boolean"
    },
    "color": {
      "default": null,
      "title": "Color",
      "type": "string"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "elementor_widget_audioArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_blockquote-7337dbda"></a>

## elementor_widget_blockquote

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_upsert\_widget, locals().items, locals.

```text
[READ] Elementor tool. Add a styled Blockquote widget to an Elementor page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2992-L3010) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "blockquote_content": {
      "title": "Blockquote Content",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "author_name": {
      "default": null,
      "title": "Author Name",
      "type": "string"
    },
    "author_title": {
      "default": null,
      "title": "Author Title",
      "type": "string"
    },
    "tweet_button": {
      "default": false,
      "title": "Tweet Button",
      "type": "boolean"
    },
    "quote_color": {
      "default": null,
      "title": "Quote Color",
      "type": "string"
    },
    "author_color": {
      "default": null,
      "title": "Author Color",
      "type": "string"
    },
    "border_color": {
      "default": null,
      "title": "Border Color",
      "type": "string"
    },
    "alignment": {
      "default": null,
      "title": "Alignment",
      "type": "string"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "blockquote_content"
  ],
  "title": "elementor_widget_blockquoteArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_text_path-94ceb5e1"></a>

## elementor_widget_text_path

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_upsert\_widget, locals().items, locals.

```text
[READ] Elementor tool. Add a Text Path widget — text that flows along an SVG path (Elementor Pro)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3012-L3032) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "text": {
      "title": "Text",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "path": {
      "default": "arc",
      "title": "Path",
      "type": "string"
    },
    "custom_path": {
      "default": null,
      "title": "Custom Path",
      "type": "string"
    },
    "direction": {
      "default": "ltr",
      "title": "Direction",
      "type": "string"
    },
    "align": {
      "default": null,
      "title": "Align",
      "type": "string"
    },
    "font_size": {
      "default": null,
      "title": "Font Size",
      "type": "string"
    },
    "font_color": {
      "default": null,
      "title": "Font Color",
      "type": "string"
    },
    "font_family": {
      "default": null,
      "title": "Font Family",
      "type": "string"
    },
    "font_weight": {
      "default": null,
      "title": "Font Weight",
      "type": "string"
    },
    "start_point": {
      "default": null,
      "title": "Start Point",
      "type": "integer"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "text"
  ],
  "title": "elementor_widget_text_pathArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_code_highlight-5c930e00"></a>

## elementor_widget_code_highlight

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_upsert\_widget, locals().items, locals.

```text
[READ] Elementor tool. Add a syntax-highlighted Code block widget to an Elementor page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3034-L3049) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "code": {
      "title": "Code",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "language": {
      "default": "javascript",
      "title": "Language",
      "type": "string"
    },
    "theme": {
      "default": "okaidia",
      "title": "Theme",
      "type": "string"
    },
    "line_numbers": {
      "default": true,
      "title": "Line Numbers",
      "type": "boolean"
    },
    "show_copy_button": {
      "default": true,
      "title": "Show Copy Button",
      "type": "boolean"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "code"
  ],
  "title": "elementor_widget_code_highlightArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_table_of_contents-4bf5d91b"></a>

## elementor_widget_table_of_contents

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_upsert\_widget, locals().items, locals.

```text
[READ] Elementor tool. Add a Table of Contents widget that auto-generates from page headings (Elementor Pro)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3051-L3069) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "title": {
      "default": "Table of Contents",
      "title": "Title",
      "type": "string"
    },
    "html_tag": {
      "default": "h4",
      "title": "Html Tag",
      "type": "string"
    },
    "include_headings": {
      "default": null,
      "items": {},
      "title": "Include Headings",
      "type": "array"
    },
    "exclude_headings": {
      "default": null,
      "items": {},
      "title": "Exclude Headings",
      "type": "array"
    },
    "hierarchical": {
      "default": true,
      "title": "Hierarchical",
      "type": "boolean"
    },
    "minimized_default": {
      "default": false,
      "title": "Minimized Default",
      "type": "boolean"
    },
    "min_screen": {
      "default": null,
      "title": "Min Screen",
      "type": "string"
    },
    "marker_type": {
      "default": "bullets",
      "title": "Marker Type",
      "type": "string"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "elementor_widget_table_of_contentsArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_lottie-05e61610"></a>

## elementor_widget_lottie

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_upsert\_widget, locals().items, locals.

```text
[READ] Elementor tool. Add a Lottie JSON animation widget to an Elementor page (Elementor Pro)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3071-L3093) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "json_url": {
      "title": "Json Url",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "source": {
      "default": "url",
      "title": "Source",
      "type": "string"
    },
    "trigger": {
      "default": "autoplay",
      "title": "Trigger",
      "type": "string"
    },
    "loop": {
      "default": true,
      "title": "Loop",
      "type": "boolean"
    },
    "speed": {
      "default": 1,
      "title": "Speed",
      "type": "integer"
    },
    "reverse": {
      "default": false,
      "title": "Reverse",
      "type": "boolean"
    },
    "start_point": {
      "default": null,
      "title": "Start Point",
      "type": "integer"
    },
    "end_point": {
      "default": null,
      "title": "End Point",
      "type": "integer"
    },
    "play_on_hover": {
      "default": null,
      "title": "Play On Hover",
      "type": "boolean"
    },
    "width": {
      "default": null,
      "title": "Width",
      "type": "string"
    },
    "align": {
      "default": null,
      "title": "Align",
      "type": "string"
    },
    "link_url": {
      "default": null,
      "title": "Link Url",
      "type": "string"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "json_url"
  ],
  "title": "elementor_widget_lottieArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_gallery_new-3d0aaf87"></a>

## elementor_widget_gallery_new

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_schema\_required, locals().items, locals.

```text
[READ] Elementor tool. Add a Gallery widget with filtering, masonry, and lightbox (newer Elementor Gallery widget)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3095-L3121) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "default": null,
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "gallery_type": {
      "default": "gallery",
      "title": "Gallery Type",
      "type": "string"
    },
    "images": {
      "default": null,
      "items": {},
      "title": "Images",
      "type": "array"
    },
    "layout": {
      "default": "grid",
      "title": "Layout",
      "type": "string"
    },
    "columns": {
      "default": 3,
      "title": "Columns",
      "type": "integer"
    },
    "columns_tablet": {
      "default": 2,
      "title": "Columns Tablet",
      "type": "integer"
    },
    "columns_mobile": {
      "default": 1,
      "title": "Columns Mobile",
      "type": "integer"
    },
    "image_ratio": {
      "default": "4:3",
      "title": "Image Ratio",
      "type": "string"
    },
    "gap": {
      "default": null,
      "title": "Gap",
      "type": "string"
    },
    "overlay_color": {
      "default": null,
      "title": "Overlay Color",
      "type": "string"
    },
    "overlay_title": {
      "default": true,
      "title": "Overlay Title",
      "type": "boolean"
    },
    "link_to": {
      "default": "lightbox",
      "title": "Link To",
      "type": "string"
    },
    "show_filter": {
      "default": false,
      "title": "Show Filter",
      "type": "boolean"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "title": "elementor_widget_gallery_newArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_portfolio-e77b22e9"></a>

## elementor_widget_portfolio

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_upsert\_widget, locals().items, locals.

```text
[READ] Elementor tool. Add a Portfolio grid widget with filterable categories (Elementor Pro)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3123-L3143) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "posts_per_page": {
      "default": 6,
      "title": "Posts Per Page",
      "type": "integer"
    },
    "columns": {
      "default": 3,
      "title": "Columns",
      "type": "integer"
    },
    "post_types": {
      "default": null,
      "items": {},
      "title": "Post Types",
      "type": "array"
    },
    "taxonomies": {
      "default": null,
      "items": {},
      "title": "Taxonomies",
      "type": "array"
    },
    "show_filter": {
      "default": true,
      "title": "Show Filter",
      "type": "boolean"
    },
    "filter_align": {
      "default": null,
      "title": "Filter Align",
      "type": "string"
    },
    "overlay_color": {
      "default": null,
      "title": "Overlay Color",
      "type": "string"
    },
    "overlay_title": {
      "default": true,
      "title": "Overlay Title",
      "type": "boolean"
    },
    "overlay_excerpt": {
      "default": false,
      "title": "Overlay Excerpt",
      "type": "boolean"
    },
    "image_aspect_ratio": {
      "default": "3:2",
      "title": "Image Aspect Ratio",
      "type": "string"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "elementor_widget_portfolioArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_loop_grid-46efee2e"></a>

## elementor_widget_loop_grid

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_upsert\_widget, locals().items, locals.

```text
[READ] Elementor tool. Add a Loop Grid widget — dynamic posts grid using a Loop Item template (Elementor Pro ≥ 3.8)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3145-L3168) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "template_id": {
      "title": "Template Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "post_type": {
      "default": "post",
      "title": "Post Type",
      "type": "string"
    },
    "posts_per_page": {
      "default": 6,
      "title": "Posts Per Page",
      "type": "integer"
    },
    "columns": {
      "default": 3,
      "title": "Columns",
      "type": "integer"
    },
    "columns_tablet": {
      "default": 2,
      "title": "Columns Tablet",
      "type": "integer"
    },
    "columns_mobile": {
      "default": 1,
      "title": "Columns Mobile",
      "type": "integer"
    },
    "orderby": {
      "default": "date",
      "title": "Orderby",
      "type": "string"
    },
    "order": {
      "default": "desc",
      "title": "Order",
      "type": "string"
    },
    "include_terms": {
      "default": null,
      "items": {},
      "title": "Include Terms",
      "type": "array"
    },
    "exclude_terms": {
      "default": null,
      "items": {},
      "title": "Exclude Terms",
      "type": "array"
    },
    "include_authors": {
      "default": null,
      "items": {},
      "title": "Include Authors",
      "type": "array"
    },
    "gap": {
      "default": null,
      "title": "Gap",
      "type": "string"
    },
    "equal_height": {
      "default": false,
      "title": "Equal Height",
      "type": "boolean"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "template_id"
  ],
  "title": "elementor_widget_loop_gridArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_loop_carousel-43f18922"></a>

## elementor_widget_loop_carousel

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_upsert\_widget, locals().items, locals.

```text
[READ] Elementor tool. Add a Loop Carousel widget — dynamic posts carousel using a Loop Item template (Elementor Pro ≥ 3.8)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3170-L3191) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "template_id": {
      "title": "Template Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "post_type": {
      "default": "post",
      "title": "Post Type",
      "type": "string"
    },
    "posts_per_page": {
      "default": 6,
      "title": "Posts Per Page",
      "type": "integer"
    },
    "slides_to_show": {
      "default": 3,
      "title": "Slides To Show",
      "type": "integer"
    },
    "slides_to_scroll": {
      "default": 1,
      "title": "Slides To Scroll",
      "type": "integer"
    },
    "autoplay": {
      "default": true,
      "title": "Autoplay",
      "type": "boolean"
    },
    "autoplay_speed": {
      "default": 3000,
      "title": "Autoplay Speed",
      "type": "integer"
    },
    "loop": {
      "default": true,
      "title": "Loop",
      "type": "boolean"
    },
    "show_dots": {
      "default": true,
      "title": "Show Dots",
      "type": "boolean"
    },
    "show_arrows": {
      "default": true,
      "title": "Show Arrows",
      "type": "boolean"
    },
    "transition": {
      "default": "slide",
      "title": "Transition",
      "type": "string"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "template_id"
  ],
  "title": "elementor_widget_loop_carouselArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_timeline-bd244572"></a>

## elementor_widget_timeline

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_schema\_required, locals().items, locals.

```text
[READ] Elementor tool. Add a Timeline widget to display events/history in chronological order (Elementor Pro)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3193-L3214) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "default": null,
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "source": {
      "default": "custom",
      "title": "Source",
      "type": "string"
    },
    "items": {
      "default": null,
      "items": {},
      "title": "Items",
      "type": "array"
    },
    "layout": {
      "default": "center",
      "title": "Layout",
      "type": "string"
    },
    "post_type": {
      "default": "post",
      "title": "Post Type",
      "type": "string"
    },
    "posts_count": {
      "default": 5,
      "title": "Posts Count",
      "type": "integer"
    },
    "icon_color": {
      "default": null,
      "title": "Icon Color",
      "type": "string"
    },
    "connector_color": {
      "default": null,
      "title": "Connector Color",
      "type": "string"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "title": "elementor_widget_timelineArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_media_carousel-b8cfe51d"></a>

## elementor_widget_media_carousel

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_upsert\_widget, locals().items, locals.

```text
[READ] Elementor tool. Add a Media Carousel (mixed images/videos in a slider) to an Elementor page (Elementor Pro)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3216-L3234) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "default": null,
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "slides": {
      "default": null,
      "items": {},
      "title": "Slides",
      "type": "array"
    },
    "slides_to_show": {
      "default": 1,
      "title": "Slides To Show",
      "type": "integer"
    },
    "autoplay": {
      "default": true,
      "title": "Autoplay",
      "type": "boolean"
    },
    "autoplay_speed": {
      "default": 3000,
      "title": "Autoplay Speed",
      "type": "integer"
    },
    "loop": {
      "default": true,
      "title": "Loop",
      "type": "boolean"
    },
    "show_dots": {
      "default": true,
      "title": "Show Dots",
      "type": "boolean"
    },
    "show_arrows": {
      "default": true,
      "title": "Show Arrows",
      "type": "boolean"
    },
    "effect": {
      "default": "slide",
      "title": "Effect",
      "type": "string"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "title": "elementor_widget_media_carouselArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_nested_tabs-3be119b7"></a>

## elementor_widget_nested_tabs

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_upsert\_widget, locals().items, locals.

```text
[READ] Elementor tool. Add Nested Tabs widget — tabs that contain full Elementor containers (Elementor ≥ 3.8)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3236-L3250) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "default": null,
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "tabs": {
      "default": null,
      "items": {},
      "title": "Tabs",
      "type": "array"
    },
    "tab_layout": {
      "default": "horizontal",
      "title": "Tab Layout",
      "type": "string"
    },
    "tab_align": {
      "default": null,
      "title": "Tab Align",
      "type": "string"
    },
    "active_tab": {
      "default": 1,
      "title": "Active Tab",
      "type": "integer"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "title": "elementor_widget_nested_tabsArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_nested_accordion-7638f54a"></a>

## elementor_widget_nested_accordion

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_upsert\_widget, locals().items, locals.

```text
[READ] Elementor tool. Add a Nested Accordion widget — accordions that contain full Elementor containers (Elementor ≥ 3.8)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3252-L3264) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "default": null,
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "items": {
      "default": null,
      "items": {},
      "title": "Items",
      "type": "array"
    },
    "default_active": {
      "default": null,
      "title": "Default Active",
      "type": "integer"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "title": "elementor_widget_nested_accordionArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_share_buttons-365a66da"></a>

## elementor_widget_share_buttons

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_upsert\_widget, locals().items, locals.

```text
[READ] Elementor tool. Add social sharing buttons widget to an Elementor page (Elementor Pro)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3266-L3282) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "networks": {
      "default": null,
      "items": {},
      "title": "Networks",
      "type": "array"
    },
    "view": {
      "default": "icon-text",
      "title": "View",
      "type": "string"
    },
    "shape": {
      "default": null,
      "title": "Shape",
      "type": "string"
    },
    "size": {
      "default": null,
      "title": "Size",
      "type": "string"
    },
    "show_label": {
      "default": true,
      "title": "Show Label",
      "type": "boolean"
    },
    "alignment": {
      "default": null,
      "title": "Alignment",
      "type": "string"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "elementor_widget_share_buttonsArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_read_more-18fc01e3"></a>

## elementor_widget_read_more

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_upsert\_widget, locals().items, locals.

```text
[READ] Elementor tool. Add a Read More tag widget — limits post content visibility in archive views
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3284-L3293) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "elementor_widget_read_moreArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_site_logo-0005ca8b"></a>

## elementor_widget_site_logo

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_upsert\_widget, locals().items, locals.

```text
[READ] Elementor tool. Add Site Logo widget — shows site logo from Customizer (Elementor Pro Theme Builder)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3295-L3311) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "width": {
      "default": null,
      "title": "Width",
      "type": "string"
    },
    "width_tablet": {
      "default": null,
      "title": "Width Tablet",
      "type": "string"
    },
    "width_mobile": {
      "default": null,
      "title": "Width Mobile",
      "type": "string"
    },
    "align": {
      "default": null,
      "title": "Align",
      "type": "string"
    },
    "link_to": {
      "default": "home",
      "title": "Link To",
      "type": "string"
    },
    "link_url": {
      "default": null,
      "title": "Link Url",
      "type": "string"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "elementor_widget_site_logoArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_site_title-d2662a4c"></a>

## elementor_widget_site_title

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_upsert\_widget, locals().items, locals.

```text
[READ] Elementor tool. Add Site Title widget (Elementor Pro Theme Builder)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3313-L3328) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "html_tag": {
      "default": "h2",
      "title": "Html Tag",
      "type": "string"
    },
    "link": {
      "default": true,
      "title": "Link",
      "type": "boolean"
    },
    "align": {
      "default": null,
      "title": "Align",
      "type": "string"
    },
    "color": {
      "default": null,
      "title": "Color",
      "type": "string"
    },
    "font_size": {
      "default": null,
      "title": "Font Size",
      "type": "string"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "elementor_widget_site_titleArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_page_title-3d4030fb"></a>

## elementor_widget_page_title

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_upsert\_widget, locals().items, locals.

```text
[READ] Elementor tool. Add Page Title widget — displays current page title dynamically (Elementor Pro)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3330-L3345) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "html_tag": {
      "default": "h1",
      "title": "Html Tag",
      "type": "string"
    },
    "link": {
      "default": false,
      "title": "Link",
      "type": "boolean"
    },
    "align": {
      "default": null,
      "title": "Align",
      "type": "string"
    },
    "color": {
      "default": null,
      "title": "Color",
      "type": "string"
    },
    "font_size": {
      "default": null,
      "title": "Font Size",
      "type": "string"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "elementor_widget_page_titleArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_post_title-d9cf43ce"></a>

## elementor_widget_post_title

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_upsert\_widget, locals().items, locals.

```text
[READ] Elementor tool. Add Post Title widget — dynamic title for single post templates (Elementor Pro)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3347-L3361) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "html_tag": {
      "default": "h1",
      "title": "Html Tag",
      "type": "string"
    },
    "link": {
      "default": false,
      "title": "Link",
      "type": "boolean"
    },
    "align": {
      "default": null,
      "title": "Align",
      "type": "string"
    },
    "color": {
      "default": null,
      "title": "Color",
      "type": "string"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "elementor_widget_post_titleArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_post_excerpt-d2a4a628"></a>

## elementor_widget_post_excerpt

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_upsert\_widget, locals().items, locals.

```text
[READ] Elementor tool. Add Post Excerpt widget — dynamic excerpt for single/archive templates (Elementor Pro)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3363-L3375) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "align": {
      "default": null,
      "title": "Align",
      "type": "string"
    },
    "text_color": {
      "default": null,
      "title": "Text Color",
      "type": "string"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "elementor_widget_post_excerptArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_post_content-6496685d"></a>

## elementor_widget_post_content

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_upsert\_widget, locals().items, locals.

```text
[READ] Elementor tool. Add Post Content widget — renders the full post content (Elementor Pro Single Post template)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3377-L3387) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "elementor_widget_post_contentArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_post_featured_image-e84331ec"></a>

## elementor_widget_post_featured_image

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_upsert\_widget, locals().items, locals.

```text
[READ] Elementor tool. Add Post Featured Image widget — dynamic featured image for templates (Elementor Pro)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3389-L3403) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "image_size": {
      "default": "large",
      "title": "Image Size",
      "type": "string"
    },
    "align": {
      "default": null,
      "title": "Align",
      "type": "string"
    },
    "link_to": {
      "default": "post",
      "title": "Link To",
      "type": "string"
    },
    "caption": {
      "default": null,
      "title": "Caption",
      "type": "string"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "elementor_widget_post_featured_imageArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_post_info-5a3788f3"></a>

## elementor_widget_post_info

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_upsert\_widget, locals().items, locals.

```text
[READ] Elementor tool. Add Post Info widget — author, date, time, category, tags, comments count (Elementor Pro)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3405-L3425) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "show_author": {
      "default": true,
      "title": "Show Author",
      "type": "boolean"
    },
    "show_date": {
      "default": true,
      "title": "Show Date",
      "type": "boolean"
    },
    "show_time": {
      "default": false,
      "title": "Show Time",
      "type": "boolean"
    },
    "show_modified_date": {
      "default": false,
      "title": "Show Modified Date",
      "type": "boolean"
    },
    "show_comments": {
      "default": true,
      "title": "Show Comments",
      "type": "boolean"
    },
    "show_category": {
      "default": true,
      "title": "Show Category",
      "type": "boolean"
    },
    "show_tags": {
      "default": false,
      "title": "Show Tags",
      "type": "boolean"
    },
    "date_format": {
      "default": null,
      "title": "Date Format",
      "type": "string"
    },
    "author_prefix": {
      "default": null,
      "title": "Author Prefix",
      "type": "string"
    },
    "layout": {
      "default": "inline",
      "title": "Layout",
      "type": "string"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "elementor_widget_post_infoArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_breadcrumbs-9bb73c56"></a>

## elementor_widget_breadcrumbs

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_upsert\_widget, locals().items, locals.

```text
[READ] Elementor tool. Add Breadcrumbs widget — displays navigation breadcrumbs (Elementor Pro)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3427-L3441) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "separator": {
      "default": "»",
      "title": "Separator",
      "type": "string"
    },
    "align": {
      "default": null,
      "title": "Align",
      "type": "string"
    },
    "text_color": {
      "default": null,
      "title": "Text Color",
      "type": "string"
    },
    "separator_color": {
      "default": null,
      "title": "Separator Color",
      "type": "string"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "elementor_widget_breadcrumbsArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_woo_product_rating-897846a3"></a>

## elementor_widget_woo_product_rating

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_upsert\_widget, locals().items, locals.

```text
[READ] Elementor tool. Add WooCommerce Product Rating widget (star rating + review count) for single product templates
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3443-L3455) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "show_count": {
      "default": true,
      "title": "Show Count",
      "type": "boolean"
    },
    "star_color": {
      "default": null,
      "title": "Star Color",
      "type": "string"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "elementor_widget_woo_product_ratingArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_woo_product_stock-085d220a"></a>

## elementor_widget_woo_product_stock

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_upsert\_widget, locals().items, locals.

```text
[READ] Elementor tool. Add WooCommerce Product Stock status widget for single product templates
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3457-L3467) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "elementor_widget_woo_product_stockArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_woo_product_sku-2b1b4f8c"></a>

## elementor_widget_woo_product_sku

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_schema\_required, locals().items, locals.

```text
[READ] Elementor tool. Add WooCommerce Product SKU widget for single product templates
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3469-L3484) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "sku_label": {
      "default": "SKU:",
      "title": "Sku Label",
      "type": "string"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "elementor_widget_woo_product_skuArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_woo_short_description-e7199a4e"></a>

## elementor_widget_woo_short_description

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_upsert\_widget, locals().items, locals.

```text
[READ] Elementor tool. Add WooCommerce Product Short Description widget for single product templates
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3486-L3497) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "text_color": {
      "default": null,
      "title": "Text Color",
      "type": "string"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "elementor_widget_woo_short_descriptionArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_woo_related_products-d8003f46"></a>

## elementor_widget_woo_related_products

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_upsert\_widget, locals().items, locals.

```text
[READ] Elementor tool. Add WooCommerce Related Products widget for single product templates
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3499-L3512) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "posts_per_page": {
      "default": 4,
      "title": "Posts Per Page",
      "type": "integer"
    },
    "columns": {
      "default": 4,
      "title": "Columns",
      "type": "integer"
    },
    "orderby": {
      "default": null,
      "title": "Orderby",
      "type": "string"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "elementor_widget_woo_related_productsArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_woo_upsells-983167b9"></a>

## elementor_widget_woo_upsells

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_upsert\_widget, locals().items, locals.

```text
[READ] Elementor tool. Add WooCommerce Upsells widget for single product templates
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3514-L3526) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "posts_per_page": {
      "default": 4,
      "title": "Posts Per Page",
      "type": "integer"
    },
    "columns": {
      "default": 4,
      "title": "Columns",
      "type": "integer"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "elementor_widget_woo_upsellsArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_woo_cross_sells-b2b4d7a8"></a>

## elementor_widget_woo_cross_sells

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_upsert\_widget, locals().items, locals.

```text
[READ] Elementor tool. Add WooCommerce Cross-Sells widget for the cart template
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3528-L3539) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "columns": {
      "default": 2,
      "title": "Columns",
      "type": "integer"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "elementor_widget_woo_cross_sellsArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_woo_my_account-51144fd5"></a>

## elementor_widget_woo_my_account

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_upsert\_widget, locals().items, locals.

```text
[READ] Elementor tool. Add WooCommerce My Account widget — shows account dashboard tabs (orders, address, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3541-L3551) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "elementor_widget_woo_my_accountArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_woo_order_tracking-10ff18d7"></a>

## elementor_widget_woo_order_tracking

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_upsert\_widget, locals().items, locals.

```text
[READ] Elementor tool. Add WooCommerce Order Tracking form widget — lets customers look up orders by ID
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3553-L3563) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "elementor_widget_woo_order_trackingArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_woo_product_data_tabs-ecd932d8"></a>

## elementor_widget_woo_product_data_tabs

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_upsert\_widget, locals().items, locals.

```text
[READ] Elementor tool. Add WooCommerce Product Data Tabs widget (Description, Reviews, Additional Info) for single product templates
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3565-L3575) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "elementor_widget_woo_product_data_tabsArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_woo_notices-c97e5de7"></a>

## elementor_widget_woo_notices

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_upsert\_widget, locals().items, locals.

```text
[READ] Elementor tool. Add WooCommerce Notices widget — displays cart/checkout/account notice messages
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3577-L3587) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "elementor_widget_woo_noticesArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_list_all_elements-7d375d7b"></a>

## elementor_list_all_elements

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Elementor tool. List every element (section/column/container/widget) on an Elementor page with their IDs and types — needed before targeting specific elements with CSS tools
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3589-L3598) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "elementor_list_all_elementsArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_get_element_settings-a82f4e8e"></a>

## elementor_get_element_settings

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Elementor tool. Get all current settings (including CSS/styling) of a specific Elementor element by its ID
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3600-L3608) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "element_id": {
      "title": "Element Id",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "element_id"
  ],
  "title": "elementor_get_element_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_patch_element_settings-9e03b73d"></a>

## elementor_patch_element_settings

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Elementor tool. Directly patch any settings key on a specific Elementor element by ID — full code-level control over any property
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3610-L3619) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "element_id": {
      "title": "Element Id",
      "type": "string"
    },
    "settings": {
      "additionalProperties": true,
      "title": "Settings",
      "type": "object"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "element_id",
    "settings"
  ],
  "title": "elementor_patch_element_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_set_element_custom_css-534d9f0e"></a>

## elementor_set_element_custom_css

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Set custom CSS code on a specific Elementor element (Elementor Pro 'Custom CSS' tab). CSS is scoped to the element's selector automatically.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3621-L3630) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "element_id": {
      "title": "Element Id",
      "type": "string"
    },
    "css": {
      "title": "Css",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "element_id",
    "css"
  ],
  "title": "elementor_set_element_custom_cssArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_get_element_custom_css-1f1f4d98"></a>

## elementor_get_element_custom_css

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Elementor tool. Get the custom CSS code currently set on a specific Elementor element
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3632-L3640) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "element_id": {
      "title": "Element Id",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "element_id"
  ],
  "title": "elementor_get_element_custom_cssArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_set_page_custom_css-fdc62480"></a>

## elementor_set_page_custom_css

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Set page-level custom CSS for an Elementor page (stored in _elementor_css meta)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3642-L3650) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "css": {
      "title": "Css",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "css"
  ],
  "title": "elementor_set_page_custom_cssArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_set_global_custom_css-86cd6b9e"></a>

## elementor_set_global_custom_css

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Set global custom CSS in Elementor (applies site-wide via Elementor > Customizer > Custom CSS or kit settings)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3652-L3659) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "css": {
      "title": "Css",
      "type": "string"
    },
    "append": {
      "default": false,
      "title": "Append",
      "type": "boolean"
    }
  },
  "required": [
    "css"
  ],
  "title": "elementor_set_global_custom_cssArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_set_element_css_id-dd91f03d"></a>

## elementor_set_element_css_id

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Set the CSS ID (#id) on an Elementor element — usable in custom CSS selectors
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3661-L3670) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "element_id": {
      "title": "Element Id",
      "type": "string"
    },
    "css_id": {
      "title": "Css Id",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "element_id",
    "css_id"
  ],
  "title": "elementor_set_element_css_idArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_set_element_css_classes-2a2647c3"></a>

## elementor_set_element_css_classes

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Set additional CSS classes on an Elementor element
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3672-L3681) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "element_id": {
      "title": "Element Id",
      "type": "string"
    },
    "classes": {
      "title": "Classes",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "element_id",
    "classes"
  ],
  "title": "elementor_set_element_css_classesArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_set_element_margin-763146e3"></a>

## elementor_set_element_margin

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Set margin on an Elementor element — supports desktop/tablet/mobile breakpoints
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3683-L3697) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "element_id": {
      "title": "Element Id",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "top": {
      "default": null,
      "title": "Top",
      "type": "string"
    },
    "right": {
      "default": null,
      "title": "Right",
      "type": "string"
    },
    "bottom": {
      "default": null,
      "title": "Bottom",
      "type": "string"
    },
    "left": {
      "default": null,
      "title": "Left",
      "type": "string"
    },
    "unit": {
      "default": "px",
      "title": "Unit",
      "type": "string"
    },
    "breakpoint": {
      "default": "desktop",
      "title": "Breakpoint",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "element_id"
  ],
  "title": "elementor_set_element_marginArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_set_element_padding-9ade77e2"></a>

## elementor_set_element_padding

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Set padding on an Elementor element — supports desktop/tablet/mobile breakpoints
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3699-L3713) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "element_id": {
      "title": "Element Id",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "top": {
      "default": null,
      "title": "Top",
      "type": "string"
    },
    "right": {
      "default": null,
      "title": "Right",
      "type": "string"
    },
    "bottom": {
      "default": null,
      "title": "Bottom",
      "type": "string"
    },
    "left": {
      "default": null,
      "title": "Left",
      "type": "string"
    },
    "unit": {
      "default": "px",
      "title": "Unit",
      "type": "string"
    },
    "breakpoint": {
      "default": "desktop",
      "title": "Breakpoint",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "element_id"
  ],
  "title": "elementor_set_element_paddingArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_set_element_background-32ca958a"></a>

## elementor_set_element_background

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Set background on any Elementor element — color, image, gradient, or video
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3715-L3738) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "element_id": {
      "title": "Element Id",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "background_type": {
      "default": "classic",
      "title": "Background Type",
      "type": "string"
    },
    "color": {
      "default": null,
      "title": "Color",
      "type": "string"
    },
    "image_url": {
      "default": null,
      "title": "Image Url",
      "type": "string"
    },
    "image_id": {
      "default": null,
      "title": "Image Id",
      "type": "integer"
    },
    "image_position": {
      "default": null,
      "title": "Image Position",
      "type": "string"
    },
    "image_repeat": {
      "default": null,
      "title": "Image Repeat",
      "type": "string"
    },
    "image_size": {
      "default": null,
      "title": "Image Size",
      "type": "string"
    },
    "image_attachment": {
      "default": null,
      "title": "Image Attachment",
      "type": "string"
    },
    "gradient_angle": {
      "default": null,
      "title": "Gradient Angle",
      "type": "integer"
    },
    "gradient_color_a": {
      "default": null,
      "title": "Gradient Color A",
      "type": "string"
    },
    "gradient_color_b": {
      "default": null,
      "title": "Gradient Color B",
      "type": "string"
    },
    "gradient_color_a_stop": {
      "default": null,
      "title": "Gradient Color A Stop",
      "type": "integer"
    },
    "gradient_color_b_stop": {
      "default": null,
      "title": "Gradient Color B Stop",
      "type": "integer"
    },
    "video_url": {
      "default": null,
      "title": "Video Url",
      "type": "string"
    },
    "video_fallback_url": {
      "default": null,
      "title": "Video Fallback Url",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "element_id"
  ],
  "title": "elementor_set_element_backgroundArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_set_element_background_overlay-76dd1b55"></a>

## elementor_set_element_background_overlay

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Set background overlay on an Elementor section/column — adds a color or gradient layer over the background
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3740-L3754) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "element_id": {
      "title": "Element Id",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "overlay_type": {
      "default": "classic",
      "title": "Overlay Type",
      "type": "string"
    },
    "color": {
      "default": null,
      "title": "Color",
      "type": "string"
    },
    "opacity": {
      "default": null,
      "title": "Opacity",
      "type": "integer"
    },
    "gradient_color_a": {
      "default": null,
      "title": "Gradient Color A",
      "type": "string"
    },
    "gradient_color_b": {
      "default": null,
      "title": "Gradient Color B",
      "type": "string"
    },
    "blend_mode": {
      "default": null,
      "title": "Blend Mode",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "element_id"
  ],
  "title": "elementor_set_element_background_overlayArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_set_element_border-53b231ee"></a>

## elementor_set_element_border

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Set border properties on an Elementor element
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3756-L3775) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "element_id": {
      "title": "Element Id",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "border_type": {
      "default": null,
      "title": "Border Type",
      "type": "string"
    },
    "border_width_top": {
      "default": null,
      "title": "Border Width Top",
      "type": "string"
    },
    "border_width_right": {
      "default": null,
      "title": "Border Width Right",
      "type": "string"
    },
    "border_width_bottom": {
      "default": null,
      "title": "Border Width Bottom",
      "type": "string"
    },
    "border_width_left": {
      "default": null,
      "title": "Border Width Left",
      "type": "string"
    },
    "border_color": {
      "default": null,
      "title": "Border Color",
      "type": "string"
    },
    "border_radius_top_left": {
      "default": null,
      "title": "Border Radius Top Left",
      "type": "string"
    },
    "border_radius_top_right": {
      "default": null,
      "title": "Border Radius Top Right",
      "type": "string"
    },
    "border_radius_bottom_right": {
      "default": null,
      "title": "Border Radius Bottom Right",
      "type": "string"
    },
    "border_radius_bottom_left": {
      "default": null,
      "title": "Border Radius Bottom Left",
      "type": "string"
    },
    "border_radius_unit": {
      "default": "px",
      "title": "Border Radius Unit",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "element_id"
  ],
  "title": "elementor_set_element_borderArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_set_element_box_shadow-6c3ccdcc"></a>

## elementor_set_element_box_shadow

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Set box shadow on an Elementor element
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3777-L3792) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "element_id": {
      "title": "Element Id",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "horizontal": {
      "default": null,
      "title": "Horizontal",
      "type": "integer"
    },
    "vertical": {
      "default": null,
      "title": "Vertical",
      "type": "integer"
    },
    "blur": {
      "default": null,
      "title": "Blur",
      "type": "integer"
    },
    "spread": {
      "default": null,
      "title": "Spread",
      "type": "integer"
    },
    "color": {
      "default": null,
      "title": "Color",
      "type": "string"
    },
    "position": {
      "default": null,
      "title": "Position",
      "type": "string"
    },
    "enable": {
      "default": true,
      "title": "Enable",
      "type": "boolean"
    }
  },
  "required": [
    "page_id",
    "element_id"
  ],
  "title": "elementor_set_element_box_shadowArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_set_element_text_shadow-365a75f0"></a>

## elementor_set_element_text_shadow

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Set text shadow on an Elementor widget
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3794-L3807) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "element_id": {
      "title": "Element Id",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "horizontal": {
      "default": null,
      "title": "Horizontal",
      "type": "integer"
    },
    "vertical": {
      "default": null,
      "title": "Vertical",
      "type": "integer"
    },
    "blur": {
      "default": null,
      "title": "Blur",
      "type": "integer"
    },
    "color": {
      "default": null,
      "title": "Color",
      "type": "string"
    },
    "enable": {
      "default": true,
      "title": "Enable",
      "type": "boolean"
    }
  },
  "required": [
    "page_id",
    "element_id"
  ],
  "title": "elementor_set_element_text_shadowArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_set_element_typography-f42fc844"></a>

## elementor_set_element_typography

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Set typography settings on an Elementor widget at code level — font, size, weight, line height, spacing, transform for all breakpoints
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3809-L3830) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "element_id": {
      "title": "Element Id",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "typography_key": {
      "default": "typography",
      "title": "Typography Key",
      "type": "string"
    },
    "font_family": {
      "default": null,
      "title": "Font Family",
      "type": "string"
    },
    "font_size": {
      "default": null,
      "title": "Font Size",
      "type": "string"
    },
    "font_size_unit": {
      "default": "px",
      "title": "Font Size Unit",
      "type": "string"
    },
    "font_size_tablet": {
      "default": null,
      "title": "Font Size Tablet",
      "type": "string"
    },
    "font_size_mobile": {
      "default": null,
      "title": "Font Size Mobile",
      "type": "string"
    },
    "font_weight": {
      "default": null,
      "title": "Font Weight",
      "type": "string"
    },
    "font_style": {
      "default": null,
      "title": "Font Style",
      "type": "string"
    },
    "text_transform": {
      "default": null,
      "title": "Text Transform",
      "type": "string"
    },
    "text_decoration": {
      "default": null,
      "title": "Text Decoration",
      "type": "string"
    },
    "line_height": {
      "default": null,
      "title": "Line Height",
      "type": "string"
    },
    "letter_spacing": {
      "default": null,
      "title": "Letter Spacing",
      "type": "string"
    },
    "word_spacing": {
      "default": null,
      "title": "Word Spacing",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "element_id"
  ],
  "title": "elementor_set_element_typographyArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_set_element_color-10adf047"></a>

## elementor_set_element_color

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Set color settings on an Elementor widget by control key (e.g. 'title_color', 'text_color', 'icon_color', 'button_text_color')
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3832-L3842) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "element_id": {
      "title": "Element Id",
      "type": "string"
    },
    "color_key": {
      "title": "Color Key",
      "type": "string"
    },
    "color": {
      "title": "Color",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "element_id",
    "color_key",
    "color"
  ],
  "title": "elementor_set_element_colorArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_set_element_opacity-46fc752a"></a>

## elementor_set_element_opacity

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Set opacity on an Elementor element (0-1, supports hover state)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3844-L3855) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "element_id": {
      "title": "Element Id",
      "type": "string"
    },
    "opacity": {
      "title": "Opacity",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "opacity_hover": {
      "default": null,
      "title": "Opacity Hover",
      "type": "integer"
    },
    "transition_duration": {
      "default": 300,
      "title": "Transition Duration",
      "type": "integer"
    }
  },
  "required": [
    "page_id",
    "element_id",
    "opacity"
  ],
  "title": "elementor_set_element_opacityArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_set_element_visibility-5496b7a8"></a>

## elementor_set_element_visibility

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Show or hide an Elementor element on specific devices (desktop/tablet/mobile)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3857-L3868) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "element_id": {
      "title": "Element Id",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "hide_desktop": {
      "default": false,
      "title": "Hide Desktop",
      "type": "boolean"
    },
    "hide_tablet": {
      "default": false,
      "title": "Hide Tablet",
      "type": "boolean"
    },
    "hide_mobile": {
      "default": false,
      "title": "Hide Mobile",
      "type": "boolean"
    }
  },
  "required": [
    "page_id",
    "element_id"
  ],
  "title": "elementor_set_element_visibilityArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_set_element_z_index-ed26eb77"></a>

## elementor_set_element_z_index

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Set z-index on an Elementor element
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3870-L3879) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "element_id": {
      "title": "Element Id",
      "type": "string"
    },
    "z_index": {
      "title": "Z Index",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "element_id",
    "z_index"
  ],
  "title": "elementor_set_element_z_indexArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_set_element_position-4b593a73"></a>

## elementor_set_element_position

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Set CSS positioning on an Elementor element (absolute/fixed with offset values)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3881-L3894) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "element_id": {
      "title": "Element Id",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "position": {
      "default": null,
      "title": "Position",
      "type": "string"
    },
    "offset_x": {
      "default": null,
      "title": "Offset X",
      "type": "string"
    },
    "offset_y": {
      "default": null,
      "title": "Offset Y",
      "type": "string"
    },
    "offset_x_unit": {
      "default": "px",
      "title": "Offset X Unit",
      "type": "string"
    },
    "offset_y_unit": {
      "default": "px",
      "title": "Offset Y Unit",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "element_id"
  ],
  "title": "elementor_set_element_positionArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_set_element_transform-e58a9ae4"></a>

## elementor_set_element_transform

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Set CSS transform effects on an Elementor element — rotate, scale, skew, translate (supports normal + hover states)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3896-L3917) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "element_id": {
      "title": "Element Id",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "state": {
      "default": "normal",
      "title": "State",
      "type": "string"
    },
    "rotate_x": {
      "default": null,
      "title": "Rotate X",
      "type": "integer"
    },
    "rotate_y": {
      "default": null,
      "title": "Rotate Y",
      "type": "integer"
    },
    "rotate_z": {
      "default": null,
      "title": "Rotate Z",
      "type": "integer"
    },
    "scale_x": {
      "default": null,
      "title": "Scale X",
      "type": "integer"
    },
    "scale_y": {
      "default": null,
      "title": "Scale Y",
      "type": "integer"
    },
    "skew_x": {
      "default": null,
      "title": "Skew X",
      "type": "integer"
    },
    "skew_y": {
      "default": null,
      "title": "Skew Y",
      "type": "integer"
    },
    "translate_x": {
      "default": null,
      "title": "Translate X",
      "type": "string"
    },
    "translate_y": {
      "default": null,
      "title": "Translate Y",
      "type": "string"
    },
    "transform_origin_x": {
      "default": "center",
      "title": "Transform Origin X",
      "type": "string"
    },
    "transform_origin_y": {
      "default": "center",
      "title": "Transform Origin Y",
      "type": "string"
    },
    "transition_duration": {
      "default": 300,
      "title": "Transition Duration",
      "type": "integer"
    }
  },
  "required": [
    "page_id",
    "element_id"
  ],
  "title": "elementor_set_element_transformArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_set_element_css_filter-ef89503f"></a>

## elementor_set_element_css_filter

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Set CSS filters on an Elementor element — blur, brightness, contrast, saturation, hue rotate (supports normal + hover states)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3919-L3935) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "element_id": {
      "title": "Element Id",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "state": {
      "default": "normal",
      "title": "State",
      "type": "string"
    },
    "blur": {
      "default": null,
      "title": "Blur",
      "type": "integer"
    },
    "brightness": {
      "default": null,
      "title": "Brightness",
      "type": "integer"
    },
    "contrast": {
      "default": null,
      "title": "Contrast",
      "type": "integer"
    },
    "saturation": {
      "default": null,
      "title": "Saturation",
      "type": "integer"
    },
    "hue": {
      "default": null,
      "title": "Hue",
      "type": "integer"
    },
    "opacity": {
      "default": null,
      "title": "Opacity",
      "type": "integer"
    },
    "transition_duration": {
      "default": 300,
      "title": "Transition Duration",
      "type": "integer"
    }
  },
  "required": [
    "page_id",
    "element_id"
  ],
  "title": "elementor_set_element_css_filterArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_set_element_blend_mode-552ec59c"></a>

## elementor_set_element_blend_mode

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Set CSS mix-blend-mode on an Elementor element
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3937-L3946) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "element_id": {
      "title": "Element Id",
      "type": "string"
    },
    "blend_mode": {
      "title": "Blend Mode",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "element_id",
    "blend_mode"
  ],
  "title": "elementor_set_element_blend_modeArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_set_element_scroll_effects-30100e3b"></a>

## elementor_set_element_scroll_effects

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Set scroll-based motion effects on an Elementor element (Elementor Pro — Vertical Scroll, Horizontal Scroll, Transparency, Blur, Scale, Rotate on scroll)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3948-L3974) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "element_id": {
      "title": "Element Id",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "vertical_scroll": {
      "default": null,
      "title": "Vertical Scroll",
      "type": "boolean"
    },
    "vertical_direction": {
      "default": null,
      "title": "Vertical Direction",
      "type": "string"
    },
    "vertical_speed": {
      "default": null,
      "title": "Vertical Speed",
      "type": "integer"
    },
    "horizontal_scroll": {
      "default": null,
      "title": "Horizontal Scroll",
      "type": "boolean"
    },
    "horizontal_direction": {
      "default": null,
      "title": "Horizontal Direction",
      "type": "string"
    },
    "horizontal_speed": {
      "default": null,
      "title": "Horizontal Speed",
      "type": "integer"
    },
    "transparency": {
      "default": null,
      "title": "Transparency",
      "type": "boolean"
    },
    "transparency_direction": {
      "default": null,
      "title": "Transparency Direction",
      "type": "string"
    },
    "blur_scroll": {
      "default": null,
      "title": "Blur Scroll",
      "type": "boolean"
    },
    "blur_direction": {
      "default": null,
      "title": "Blur Direction",
      "type": "string"
    },
    "blur_level": {
      "default": null,
      "title": "Blur Level",
      "type": "integer"
    },
    "scale_scroll": {
      "default": null,
      "title": "Scale Scroll",
      "type": "boolean"
    },
    "scale_direction": {
      "default": null,
      "title": "Scale Direction",
      "type": "string"
    },
    "scale_speed": {
      "default": null,
      "title": "Scale Speed",
      "type": "integer"
    },
    "rotate_scroll": {
      "default": null,
      "title": "Rotate Scroll",
      "type": "boolean"
    },
    "rotate_speed": {
      "default": null,
      "title": "Rotate Speed",
      "type": "integer"
    },
    "rotate_direction": {
      "default": null,
      "title": "Rotate Direction",
      "type": "string"
    },
    "devices": {
      "default": null,
      "items": {},
      "title": "Devices",
      "type": "array"
    }
  },
  "required": [
    "page_id",
    "element_id"
  ],
  "title": "elementor_set_element_scroll_effectsArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_set_element_mouse_effects-a4151b6e"></a>

## elementor_set_element_mouse_effects

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Set mouse-tracking effects on Elementor elements (3D tilt, glow on mouse move — Elementor Pro)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3976-L3992) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "element_id": {
      "title": "Element Id",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "tilt_enable": {
      "default": null,
      "title": "Tilt Enable",
      "type": "boolean"
    },
    "tilt_max": {
      "default": 20,
      "title": "Tilt Max",
      "type": "integer"
    },
    "tilt_speed": {
      "default": 400,
      "title": "Tilt Speed",
      "type": "integer"
    },
    "tilt_gyroscope": {
      "default": null,
      "title": "Tilt Gyroscope",
      "type": "boolean"
    },
    "glow_enable": {
      "default": null,
      "title": "Glow Enable",
      "type": "boolean"
    },
    "glow_color": {
      "default": null,
      "title": "Glow Color",
      "type": "string"
    },
    "glow_size": {
      "default": null,
      "title": "Glow Size",
      "type": "integer"
    },
    "glow_opacity": {
      "default": null,
      "title": "Glow Opacity",
      "type": "integer"
    }
  },
  "required": [
    "page_id",
    "element_id"
  ],
  "title": "elementor_set_element_mouse_effectsArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_set_element_sticky-1fbbfb84"></a>

## elementor_set_element_sticky

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Set sticky behavior on an Elementor section (Pro) — makes header or section stick to top/bottom on scroll
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L3994-L4008) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "element_id": {
      "title": "Element Id",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "sticky": {
      "default": null,
      "title": "Sticky",
      "type": "string"
    },
    "sticky_offset": {
      "default": 0,
      "title": "Sticky Offset",
      "type": "integer"
    },
    "sticky_effects_offset": {
      "default": 0,
      "title": "Sticky Effects Offset",
      "type": "integer"
    },
    "sticky_hide_on": {
      "default": null,
      "items": {},
      "title": "Sticky Hide On",
      "type": "array"
    },
    "sticky_parent": {
      "default": null,
      "title": "Sticky Parent",
      "type": "boolean"
    },
    "sticky_on": {
      "default": null,
      "items": {},
      "title": "Sticky On",
      "type": "array"
    }
  },
  "required": [
    "page_id",
    "element_id"
  ],
  "title": "elementor_set_element_stickyArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_set_element_attributes-03a26721"></a>

## elementor_set_element_attributes

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Set custom HTML attributes on an Elementor element (e.g. data-*, aria-*, id for JS hooks)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L4010-L4019) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "default": null,
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "element_id": {
      "default": null,
      "title": "Element Id",
      "type": "string"
    },
    "attributes": {
      "default": null,
      "items": {},
      "title": "Attributes",
      "type": "array"
    }
  },
  "title": "elementor_set_element_attributesArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_set_column_width-8459faed"></a>

## elementor_set_column_width

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Set the width of a column within an Elementor section
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L4021-L4030) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "column_id": {
      "title": "Column Id",
      "type": "string"
    },
    "width": {
      "title": "Width",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "column_id",
    "width"
  ],
  "title": "elementor_set_column_widthArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_set_column_gap-4a8f2c9d"></a>

## elementor_set_column_gap

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Set the column gap (gutter) between columns in an Elementor section
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L4032-L4042) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "section_id": {
      "title": "Section Id",
      "type": "string"
    },
    "gap": {
      "title": "Gap",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "custom_gap": {
      "default": null,
      "title": "Custom Gap",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "section_id",
    "gap"
  ],
  "title": "elementor_set_column_gapArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_set_column_vertical_align-da942a6a"></a>

## elementor_set_column_vertical_align

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Set vertical content alignment within an Elementor column
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L4044-L4053) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "column_id": {
      "title": "Column Id",
      "type": "string"
    },
    "align": {
      "title": "Align",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "column_id",
    "align"
  ],
  "title": "elementor_set_column_vertical_alignArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_set_element_responsive_settings-4221f7e8"></a>

## elementor_set_element_responsive_settings

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Set any Elementor setting per responsive breakpoint (desktop/tablet/mobile). Use this to override any setting for specific screen sizes.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L4055-L4065) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "element_id": {
      "title": "Element Id",
      "type": "string"
    },
    "breakpoint": {
      "title": "Breakpoint",
      "type": "string"
    },
    "settings": {
      "additionalProperties": true,
      "title": "Settings",
      "type": "object"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "element_id",
    "breakpoint",
    "settings"
  ],
  "title": "elementor_set_element_responsive_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_set_element_hover_animation-40f5ea07"></a>

## elementor_set_element_hover_animation

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Set a CSS hover animation effect on an Elementor element (grow, shrink, pulse, rotate, wobble, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L4067-L4076) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "element_id": {
      "title": "Element Id",
      "type": "string"
    },
    "hover_animation": {
      "title": "Hover Animation",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "element_id",
    "hover_animation"
  ],
  "title": "elementor_set_element_hover_animationArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_set_section_shape_divider-92fed8c5"></a>

## elementor_set_section_shape_divider

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Add a shape divider (top or bottom) to an Elementor section
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L4078-L4094) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "section_id": {
      "title": "Section Id",
      "type": "string"
    },
    "position": {
      "title": "Position",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "shape": {
      "default": "triangle",
      "title": "Shape",
      "type": "string"
    },
    "color": {
      "default": null,
      "title": "Color",
      "type": "string"
    },
    "width": {
      "default": 100,
      "title": "Width",
      "type": "integer"
    },
    "height": {
      "default": 50,
      "title": "Height",
      "type": "integer"
    },
    "flip": {
      "default": null,
      "title": "Flip",
      "type": "boolean"
    },
    "invert": {
      "default": null,
      "title": "Invert",
      "type": "boolean"
    },
    "bring_to_front": {
      "default": null,
      "title": "Bring To Front",
      "type": "boolean"
    }
  },
  "required": [
    "page_id",
    "section_id",
    "position"
  ],
  "title": "elementor_set_section_shape_dividerArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_batch_set_css-387cb906"></a>

## elementor_batch_set_css

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Apply the same CSS settings to multiple Elementor elements at once — efficient bulk styling
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L4096-L4105) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "element_ids": {
      "items": {},
      "title": "Element Ids",
      "type": "array"
    },
    "settings": {
      "additionalProperties": true,
      "title": "Settings",
      "type": "object"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "element_ids",
    "settings"
  ],
  "title": "elementor_batch_set_cssArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_copy_element_styles-5ae30476"></a>

## elementor_copy_element_styles

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Copy all styling settings from one Elementor element to another
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L4107-L4116) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "source_element_id": {
      "title": "Source Element Id",
      "type": "string"
    },
    "target_element_id": {
      "title": "Target Element Id",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "source_element_id",
    "target_element_id"
  ],
  "title": "elementor_copy_element_stylesArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_reset_element_styles-21dfb09c"></a>

## elementor_reset_element_styles

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Elementor tool. Reset all styling settings on an Elementor element back to Elementor defaults
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L4118-L4127) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "element_id": {
      "title": "Element Id",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "reset_section": {
      "default": "all",
      "title": "Reset Section",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "element_id"
  ],
  "title": "elementor_reset_element_stylesArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_set_page_custom_js-b90ff055"></a>

## elementor_set_page_custom_js

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Inject custom JavaScript into an Elementor page (Elementor Pro — Page > Advanced > Custom JS)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L4129-L4138) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "js": {
      "title": "Js",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "position": {
      "default": "footer",
      "title": "Position",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "js"
  ],
  "title": "elementor_set_page_custom_jsArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_set_section_layout-6b19e4b5"></a>

## elementor_set_section_layout

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Set the layout properties of an Elementor section — content width, height, overflow, direction
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L4140-L4158) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "section_id": {
      "title": "Section Id",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "content_width": {
      "default": null,
      "title": "Content Width",
      "type": "string"
    },
    "custom_width": {
      "default": null,
      "title": "Custom Width",
      "type": "string"
    },
    "height": {
      "default": null,
      "title": "Height",
      "type": "string"
    },
    "custom_height": {
      "default": null,
      "title": "Custom Height",
      "type": "string"
    },
    "custom_height_unit": {
      "default": null,
      "title": "Custom Height Unit",
      "type": "string"
    },
    "column_position": {
      "default": null,
      "title": "Column Position",
      "type": "string"
    },
    "overflow": {
      "default": null,
      "title": "Overflow",
      "type": "string"
    },
    "stretch_section": {
      "default": null,
      "title": "Stretch Section",
      "type": "string"
    },
    "is_reversed": {
      "default": null,
      "title": "Is Reversed",
      "type": "boolean"
    },
    "html_tag": {
      "default": null,
      "title": "Html Tag",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "section_id"
  ],
  "title": "elementor_set_section_layoutArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_find_kit-eab23f56"></a>

## elementor_find_kit

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Elementor tool. Find the active Elementor Global Kit — returns its post ID and all raw settings
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L4160-L4164) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "elementor_find_kitArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_list_global_colors-ed255121"></a>

## elementor_list_global_colors

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Elementor tool. List all global colors in the Elementor Kit (system colors + custom colors)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L4166-L4170) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "elementor_list_global_colorsArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_update_global_color-1c9cb7cc"></a>

## elementor_update_global_color

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Update an existing global color by ID or title
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L4172-L4181) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "default": null,
      "title": "Id",
      "type": "string"
    },
    "title_match": {
      "default": null,
      "title": "Title Match",
      "type": "string"
    },
    "new_title": {
      "default": null,
      "title": "New Title",
      "type": "string"
    },
    "new_color": {
      "default": null,
      "title": "New Color",
      "type": "string"
    }
  },
  "title": "elementor_update_global_colorArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_delete_global_color-cd06bdbf"></a>

## elementor_delete_global_color

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] Elementor tool. Delete a custom global color by ID or title (system colors cannot be deleted)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L4183-L4190) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "default": null,
      "title": "Id",
      "type": "string"
    },
    "title_match": {
      "default": null,
      "title": "Title Match",
      "type": "string"
    }
  },
  "title": "elementor_delete_global_colorArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_update_system_color-55b2f123"></a>

## elementor_update_system_color

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Update one of the four Elementor system colors: Primary, Secondary, Text, Accent
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L4192-L4199) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "system_color": {
      "title": "System Color",
      "type": "string"
    },
    "color": {
      "title": "Color",
      "type": "string"
    }
  },
  "required": [
    "system_color",
    "color"
  ],
  "title": "elementor_update_system_colorArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_list_global_fonts-f46752dd"></a>

## elementor_list_global_fonts

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Elementor tool. List all global typography presets in the Elementor Kit (system + custom)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L4201-L4205) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "elementor_list_global_fontsArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_add_global_font-70fd673b"></a>

## elementor_add_global_font

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Add a new custom global typography preset to the Elementor Kit
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L4207-L4225) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "title": {
      "title": "Title",
      "type": "string"
    },
    "font_family": {
      "default": null,
      "title": "Font Family",
      "type": "string"
    },
    "font_size": {
      "default": null,
      "title": "Font Size",
      "type": "integer"
    },
    "font_size_unit": {
      "default": "px",
      "title": "Font Size Unit",
      "type": "string"
    },
    "font_size_tablet": {
      "default": null,
      "title": "Font Size Tablet",
      "type": "integer"
    },
    "font_size_mobile": {
      "default": null,
      "title": "Font Size Mobile",
      "type": "integer"
    },
    "font_weight": {
      "default": null,
      "title": "Font Weight",
      "type": "string"
    },
    "font_style": {
      "default": null,
      "title": "Font Style",
      "type": "string"
    },
    "line_height": {
      "default": null,
      "title": "Line Height",
      "type": "integer"
    },
    "line_height_unit": {
      "default": "em",
      "title": "Line Height Unit",
      "type": "string"
    },
    "letter_spacing": {
      "default": null,
      "title": "Letter Spacing",
      "type": "integer"
    },
    "text_transform": {
      "default": null,
      "title": "Text Transform",
      "type": "string"
    },
    "text_decoration": {
      "default": null,
      "title": "Text Decoration",
      "type": "string"
    }
  },
  "required": [
    "title"
  ],
  "title": "elementor_add_global_fontArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_update_global_font-b0adcfca"></a>

## elementor_update_global_font

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Update an existing global typography preset by ID or title
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L4227-L4247) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "default": null,
      "title": "Id",
      "type": "string"
    },
    "title_match": {
      "default": null,
      "title": "Title Match",
      "type": "string"
    },
    "font_family": {
      "default": null,
      "title": "Font Family",
      "type": "string"
    },
    "font_size": {
      "default": null,
      "title": "Font Size",
      "type": "integer"
    },
    "font_size_unit": {
      "default": null,
      "title": "Font Size Unit",
      "type": "string"
    },
    "font_size_tablet": {
      "default": null,
      "title": "Font Size Tablet",
      "type": "integer"
    },
    "font_size_mobile": {
      "default": null,
      "title": "Font Size Mobile",
      "type": "integer"
    },
    "font_weight": {
      "default": null,
      "title": "Font Weight",
      "type": "string"
    },
    "font_style": {
      "default": null,
      "title": "Font Style",
      "type": "string"
    },
    "line_height": {
      "default": null,
      "title": "Line Height",
      "type": "integer"
    },
    "line_height_unit": {
      "default": null,
      "title": "Line Height Unit",
      "type": "string"
    },
    "letter_spacing": {
      "default": null,
      "title": "Letter Spacing",
      "type": "integer"
    },
    "text_transform": {
      "default": null,
      "title": "Text Transform",
      "type": "string"
    },
    "text_decoration": {
      "default": null,
      "title": "Text Decoration",
      "type": "string"
    },
    "new_title": {
      "default": null,
      "title": "New Title",
      "type": "string"
    }
  },
  "title": "elementor_update_global_fontArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_delete_global_font-9e25ddd0"></a>

## elementor_delete_global_font

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] Elementor tool. Delete a custom global typography preset by ID or title (system presets cannot be deleted)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L4249-L4256) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "default": null,
      "title": "Id",
      "type": "string"
    },
    "title_match": {
      "default": null,
      "title": "Title Match",
      "type": "string"
    }
  },
  "title": "elementor_delete_global_fontArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_update_system_typography-e6493e22"></a>

## elementor_update_system_typography

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Update one of the four Elementor system typography presets: Primary, Secondary, Text, Accent
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L4258-L4273) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "system_preset": {
      "title": "System Preset",
      "type": "string"
    },
    "font_family": {
      "default": null,
      "title": "Font Family",
      "type": "string"
    },
    "font_size": {
      "default": null,
      "title": "Font Size",
      "type": "integer"
    },
    "font_size_unit": {
      "default": null,
      "title": "Font Size Unit",
      "type": "string"
    },
    "font_weight": {
      "default": null,
      "title": "Font Weight",
      "type": "string"
    },
    "font_style": {
      "default": null,
      "title": "Font Style",
      "type": "string"
    },
    "line_height": {
      "default": null,
      "title": "Line Height",
      "type": "integer"
    },
    "letter_spacing": {
      "default": null,
      "title": "Letter Spacing",
      "type": "integer"
    },
    "text_transform": {
      "default": null,
      "title": "Text Transform",
      "type": "string"
    },
    "text_decoration": {
      "default": null,
      "title": "Text Decoration",
      "type": "string"
    }
  },
  "required": [
    "system_preset"
  ],
  "title": "elementor_update_system_typographyArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_set_kit_layout-581a1d46"></a>

## elementor_set_kit_layout

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Set global layout settings: container width, gaps, padding, page title selector
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L4275-L4286) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "container_width": {
      "default": null,
      "title": "Container Width",
      "type": "integer"
    },
    "container_width_unit": {
      "default": "px",
      "title": "Container Width Unit",
      "type": "string"
    },
    "space_between_widgets": {
      "default": null,
      "title": "Space Between Widgets",
      "type": "integer"
    },
    "widgets_spacing": {
      "default": null,
      "title": "Widgets Spacing",
      "type": "string"
    },
    "page_title_selector": {
      "default": null,
      "title": "Page Title Selector",
      "type": "string"
    },
    "stretched_section_container": {
      "default": null,
      "title": "Stretched Section Container",
      "type": "string"
    }
  },
  "title": "elementor_set_kit_layoutArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_set_kit_body_typography-76d5903e"></a>

## elementor_set_kit_body_typography

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Set global body (default) typography for the entire site
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L4288-L4302) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "font_family": {
      "default": null,
      "title": "Font Family",
      "type": "string"
    },
    "font_size": {
      "default": null,
      "title": "Font Size",
      "type": "integer"
    },
    "font_size_unit": {
      "default": null,
      "title": "Font Size Unit",
      "type": "string"
    },
    "font_weight": {
      "default": null,
      "title": "Font Weight",
      "type": "string"
    },
    "font_style": {
      "default": null,
      "title": "Font Style",
      "type": "string"
    },
    "line_height": {
      "default": null,
      "title": "Line Height",
      "type": "integer"
    },
    "line_height_unit": {
      "default": null,
      "title": "Line Height Unit",
      "type": "string"
    },
    "letter_spacing": {
      "default": null,
      "title": "Letter Spacing",
      "type": "integer"
    },
    "text_transform": {
      "default": null,
      "title": "Text Transform",
      "type": "string"
    }
  },
  "title": "elementor_set_kit_body_typographyArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_set_kit_link_styles-1776608d"></a>

## elementor_set_kit_link_styles

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Set global link colors and hover color for the site
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L4304-L4313) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "link_normal_color": {
      "default": null,
      "title": "Link Normal Color",
      "type": "string"
    },
    "link_hover_color": {
      "default": null,
      "title": "Link Hover Color",
      "type": "string"
    },
    "link_normal_typography_decoration": {
      "default": null,
      "title": "Link Normal Typography Decoration",
      "type": "string"
    },
    "link_hover_decoration": {
      "default": null,
      "title": "Link Hover Decoration",
      "type": "string"
    }
  },
  "title": "elementor_set_kit_link_stylesArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_set_kit_background-cb484c61"></a>

## elementor_set_kit_background

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Set site-wide background (color, image, gradient) via the Elementor Kit
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L4315-L4329) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "background_background": {
      "default": null,
      "title": "Background Background",
      "type": "string"
    },
    "background_color": {
      "default": null,
      "title": "Background Color",
      "type": "string"
    },
    "background_image": {
      "default": null,
      "title": "Background Image",
      "type": "string"
    },
    "background_position": {
      "default": null,
      "title": "Background Position",
      "type": "string"
    },
    "background_size": {
      "default": null,
      "title": "Background Size",
      "type": "string"
    },
    "background_repeat": {
      "default": null,
      "title": "Background Repeat",
      "type": "string"
    },
    "background_color_b": {
      "default": null,
      "title": "Background Color B",
      "type": "string"
    },
    "background_gradient_angle": {
      "default": null,
      "title": "Background Gradient Angle",
      "type": "integer"
    },
    "background_gradient_type": {
      "default": null,
      "title": "Background Gradient Type",
      "type": "string"
    }
  },
  "title": "elementor_set_kit_backgroundArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_set_kit_buttons-499b5511"></a>

## elementor_set_kit_buttons

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Set global button styling: typography, colors, padding, border, border-radius
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L4331-L4350) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "button_typography_font_family": {
      "default": null,
      "title": "Button Typography Font Family",
      "type": "string"
    },
    "button_typography_font_size": {
      "default": null,
      "title": "Button Typography Font Size",
      "type": "integer"
    },
    "button_typography_font_weight": {
      "default": null,
      "title": "Button Typography Font Weight",
      "type": "string"
    },
    "button_text_color": {
      "default": null,
      "title": "Button Text Color",
      "type": "string"
    },
    "button_background_color": {
      "default": null,
      "title": "Button Background Color",
      "type": "string"
    },
    "button_hover_color": {
      "default": null,
      "title": "Button Hover Color",
      "type": "string"
    },
    "button_hover_background_color": {
      "default": null,
      "title": "Button Hover Background Color",
      "type": "string"
    },
    "button_padding_top": {
      "default": null,
      "title": "Button Padding Top",
      "type": "integer"
    },
    "button_padding_right": {
      "default": null,
      "title": "Button Padding Right",
      "type": "integer"
    },
    "button_padding_bottom": {
      "default": null,
      "title": "Button Padding Bottom",
      "type": "integer"
    },
    "button_padding_left": {
      "default": null,
      "title": "Button Padding Left",
      "type": "integer"
    },
    "button_border_radius": {
      "default": null,
      "title": "Button Border Radius",
      "type": "integer"
    },
    "button_border_width": {
      "default": null,
      "title": "Button Border Width",
      "type": "integer"
    },
    "button_border_color": {
      "default": null,
      "title": "Button Border Color",
      "type": "string"
    }
  },
  "title": "elementor_set_kit_buttonsArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_set_kit_form_fields-2d412950"></a>

## elementor_set_kit_form_fields

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Set global form field styling: label typography, field colors, border, padding
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L4352-L4370) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "form_label_color": {
      "default": null,
      "title": "Form Label Color",
      "type": "string"
    },
    "form_label_typography_font_family": {
      "default": null,
      "title": "Form Label Typography Font Family",
      "type": "string"
    },
    "form_label_typography_font_size": {
      "default": null,
      "title": "Form Label Typography Font Size",
      "type": "integer"
    },
    "form_field_text_color": {
      "default": null,
      "title": "Form Field Text Color",
      "type": "string"
    },
    "form_field_background_color": {
      "default": null,
      "title": "Form Field Background Color",
      "type": "string"
    },
    "form_field_border_color": {
      "default": null,
      "title": "Form Field Border Color",
      "type": "string"
    },
    "form_field_border_width": {
      "default": null,
      "title": "Form Field Border Width",
      "type": "integer"
    },
    "form_field_border_radius": {
      "default": null,
      "title": "Form Field Border Radius",
      "type": "integer"
    },
    "form_field_padding_top": {
      "default": null,
      "title": "Form Field Padding Top",
      "type": "integer"
    },
    "form_field_padding_right": {
      "default": null,
      "title": "Form Field Padding Right",
      "type": "integer"
    },
    "form_field_padding_bottom": {
      "default": null,
      "title": "Form Field Padding Bottom",
      "type": "integer"
    },
    "form_field_padding_left": {
      "default": null,
      "title": "Form Field Padding Left",
      "type": "integer"
    },
    "form_field_placeholder_color": {
      "default": null,
      "title": "Form Field Placeholder Color",
      "type": "string"
    }
  },
  "title": "elementor_set_kit_form_fieldsArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_set_kit_lightbox-32317e93"></a>

## elementor_set_kit_lightbox

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Set Elementor global lightbox settings (background, UI color, close button, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L4372-L4386) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "lightbox_enable_counter": {
      "default": null,
      "title": "Lightbox Enable Counter",
      "type": "boolean"
    },
    "lightbox_enable_fullscreen": {
      "default": null,
      "title": "Lightbox Enable Fullscreen",
      "type": "boolean"
    },
    "lightbox_enable_zoom": {
      "default": null,
      "title": "Lightbox Enable Zoom",
      "type": "boolean"
    },
    "lightbox_enable_share": {
      "default": null,
      "title": "Lightbox Enable Share",
      "type": "boolean"
    },
    "lightbox_title_src": {
      "default": null,
      "title": "Lightbox Title Src",
      "type": "string"
    },
    "lightbox_description_src": {
      "default": null,
      "title": "Lightbox Description Src",
      "type": "string"
    },
    "lightbox_background_color": {
      "default": null,
      "title": "Lightbox Background Color",
      "type": "string"
    },
    "lightbox_ui_color": {
      "default": null,
      "title": "Lightbox Ui Color",
      "type": "string"
    },
    "lightbox_ui_hover_color": {
      "default": null,
      "title": "Lightbox Ui Hover Color",
      "type": "string"
    }
  },
  "title": "elementor_set_kit_lightboxArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_get_kit_custom_css-13445be3"></a>

## elementor_get_kit_custom_css

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Elementor tool. Get the global custom CSS stored in the Elementor Kit (applied site-wide)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L4388-L4392) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "elementor_get_kit_custom_cssArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_set_kit_custom_css-afda3f0d"></a>

## elementor_set_kit_custom_css

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Set global custom CSS in the Elementor Kit — applied site-wide to all Elementor pages
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L4394-L4401) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "css": {
      "title": "Css",
      "type": "string"
    },
    "append": {
      "default": null,
      "title": "Append",
      "type": "boolean"
    }
  },
  "required": [
    "css"
  ],
  "title": "elementor_set_kit_custom_cssArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_apply_global_color_to_element-bc47d7f5"></a>

## elementor_apply_global_color_to_element

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Apply a Global Kit color token to any color setting on a specific Elementor element
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L4403-L4413) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "element_id": {
      "title": "Element Id",
      "type": "string"
    },
    "color_setting_key": {
      "title": "Color Setting Key",
      "type": "string"
    },
    "global_color_id": {
      "title": "Global Color Id",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "element_id",
    "color_setting_key",
    "global_color_id"
  ],
  "title": "elementor_apply_global_color_to_elementArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_apply_global_font_to_element-7a07fd79"></a>

## elementor_apply_global_font_to_element

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Apply a Global Kit typography preset token to any typography setting on a specific Elementor element
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L4415-L4425) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "element_id": {
      "title": "Element Id",
      "type": "string"
    },
    "typography_setting_prefix": {
      "title": "Typography Setting Prefix",
      "type": "string"
    },
    "global_font_id": {
      "title": "Global Font Id",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "element_id",
    "typography_setting_prefix",
    "global_font_id"
  ],
  "title": "elementor_apply_global_font_to_elementArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_set_kit_image_settings-d6e57bc9"></a>

## elementor_set_kit_image_settings

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Set global image settings: border, border-radius, box-shadow, CSS filter, opacity
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L4427-L4442) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "image_border_border": {
      "default": null,
      "title": "Image Border Border",
      "type": "string"
    },
    "image_border_width": {
      "default": null,
      "title": "Image Border Width",
      "type": "integer"
    },
    "image_border_color": {
      "default": null,
      "title": "Image Border Color",
      "type": "string"
    },
    "image_border_radius": {
      "default": null,
      "title": "Image Border Radius",
      "type": "integer"
    },
    "image_opacity": {
      "default": null,
      "title": "Image Opacity",
      "type": "integer"
    },
    "image_hover_opacity": {
      "default": null,
      "title": "Image Hover Opacity",
      "type": "integer"
    },
    "image_css_filter_blur": {
      "default": null,
      "title": "Image Css Filter Blur",
      "type": "integer"
    },
    "image_css_filter_brightness": {
      "default": null,
      "title": "Image Css Filter Brightness",
      "type": "integer"
    },
    "image_css_filter_contrast": {
      "default": null,
      "title": "Image Css Filter Contrast",
      "type": "integer"
    },
    "image_css_filter_saturate": {
      "default": null,
      "title": "Image Css Filter Saturate",
      "type": "integer"
    }
  },
  "title": "elementor_set_kit_image_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_set_kit_heading_defaults-30679b05"></a>

## elementor_set_kit_heading_defaults

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Set global H1-H6 default typography settings in the Elementor Kit
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L4444-L4461) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "heading": {
      "title": "Heading",
      "type": "string"
    },
    "font_family": {
      "default": null,
      "title": "Font Family",
      "type": "string"
    },
    "font_size": {
      "default": null,
      "title": "Font Size",
      "type": "integer"
    },
    "font_size_unit": {
      "default": null,
      "title": "Font Size Unit",
      "type": "string"
    },
    "font_size_tablet": {
      "default": null,
      "title": "Font Size Tablet",
      "type": "integer"
    },
    "font_size_mobile": {
      "default": null,
      "title": "Font Size Mobile",
      "type": "integer"
    },
    "font_weight": {
      "default": null,
      "title": "Font Weight",
      "type": "string"
    },
    "font_style": {
      "default": null,
      "title": "Font Style",
      "type": "string"
    },
    "line_height": {
      "default": null,
      "title": "Line Height",
      "type": "integer"
    },
    "letter_spacing": {
      "default": null,
      "title": "Letter Spacing",
      "type": "integer"
    },
    "text_transform": {
      "default": null,
      "title": "Text Transform",
      "type": "string"
    },
    "color": {
      "default": null,
      "title": "Color",
      "type": "string"
    }
  },
  "required": [
    "heading"
  ],
  "title": "elementor_set_kit_heading_defaultsArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_reset_kit_setting-3be37319"></a>

## elementor_reset_kit_setting

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Elementor tool. Reset a specific setting key in the Elementor Kit to its default (removes the key)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L4463-L4469) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "setting_key": {
      "title": "Setting Key",
      "type": "string"
    }
  },
  "required": [
    "setting_key"
  ],
  "title": "elementor_reset_kit_settingArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_export_kit_colors_fonts-37e1b98a"></a>

## elementor_export_kit_colors_fonts

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Elementor tool. Export the current kit colors and fonts as JSON (for backup or transfer to another site)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L4471-L4475) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "elementor_export_kit_colors_fontsArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_import_kit_colors_fonts-fab9a601"></a>

## elementor_import_kit_colors_fonts

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Import colors and/or fonts from a JSON export into the current Elementor Kit
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L4477-L4486) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "json": {
      "title": "Json",
      "type": "string"
    },
    "import_colors": {
      "default": true,
      "title": "Import Colors",
      "type": "boolean"
    },
    "import_fonts": {
      "default": true,
      "title": "Import Fonts",
      "type": "boolean"
    },
    "merge": {
      "default": null,
      "title": "Merge",
      "type": "boolean"
    }
  },
  "required": [
    "json"
  ],
  "title": "elementor_import_kit_colors_fontsArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_list_design_themes-c033c466"></a>

## elementor_list_design_themes

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool.

```text
[READ] Elementor tool. List all available built-in design themes: modern_dark, modern_light, bold, elegant, fresh, corporate, minimal
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L4488-L4501) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "elementor_list_design_themesArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_build_page-5fd71e3d"></a>

## elementor_build_page

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_is\_native\_structure, enumerate, \_elementor\_insert\_elements, elementor\_clear\_page, \_elementor\_section\_type\_key, section\_builders.get, payload.pop.

```text
[READ] Elementor tool. Build a complete Elementor page from supported section briefs or native Elementor element JSON.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L4503-L4582) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "sections": {
      "items": {},
      "title": "Sections",
      "type": "array"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "design_theme": {
      "default": "modern_light",
      "title": "Design Theme",
      "type": "string"
    },
    "replace_existing": {
      "default": true,
      "title": "Replace Existing",
      "type": "boolean"
    }
  },
  "required": [
    "page_id",
    "sections"
  ],
  "title": "elementor_build_pageArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_add_hero_section-adc12a6c"></a>

## elementor_add_hero_section

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_make\_section, \_elementor\_append\_widget\_to\_section, \_elementor\_insert\_elements, ''.join, section.get, '\n\n'.join, section\_settings.items.

```text
[WRITE] Elementor tool. Add a beautiful hero section to an Elementor page. Style: 'centered' (full-width center-aligned) or 'split' (text left, image right)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L4584-L4635) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "headline": {
      "title": "Headline",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "style": {
      "default": "centered",
      "title": "Style",
      "type": "string"
    },
    "subheadline": {
      "default": null,
      "title": "Subheadline",
      "type": "string"
    },
    "description": {
      "default": null,
      "title": "Description",
      "type": "string"
    },
    "badge": {
      "default": null,
      "title": "Badge",
      "type": "string"
    },
    "cta_text": {
      "default": null,
      "title": "Cta Text",
      "type": "string"
    },
    "cta_url": {
      "default": null,
      "title": "Cta Url",
      "type": "string"
    },
    "cta_secondary_text": {
      "default": null,
      "title": "Cta Secondary Text",
      "type": "string"
    },
    "cta_secondary_url": {
      "default": null,
      "title": "Cta Secondary Url",
      "type": "string"
    },
    "bg_color": {
      "default": null,
      "title": "Bg Color",
      "type": "string"
    },
    "bg_gradient_from": {
      "default": null,
      "title": "Bg Gradient From",
      "type": "string"
    },
    "bg_gradient_to": {
      "default": null,
      "title": "Bg Gradient To",
      "type": "string"
    },
    "bg_image": {
      "default": null,
      "title": "Bg Image",
      "type": "string"
    },
    "text_color": {
      "default": null,
      "title": "Text Color",
      "type": "string"
    },
    "image_url": {
      "default": null,
      "title": "Image Url",
      "type": "string"
    },
    "height": {
      "default": "100vh",
      "title": "Height",
      "type": "string"
    },
    "points": {
      "default": null,
      "items": {},
      "title": "Points",
      "type": "array"
    },
    "design_theme": {
      "default": "modern_dark",
      "title": "Design Theme",
      "type": "string"
    },
    "position": {
      "default": "end",
      "title": "Position",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "headline"
  ],
  "title": "elementor_add_hero_sectionArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_add_features_section-09ac9489"></a>

## elementor_add_features_section

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_insert\_elements, sections.append, max, \_elementor\_make\_section, enumerate, \_elementor\_make\_heading\_section, \_elementor\_append\_widget\_to\_section.

```text
[WRITE] Elementor tool. Add a features/services grid section. Choose style: 'cards' (elevated cards), 'minimal' (borderless), 'icon-left' (horizontal layout), 'numbered'
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L4637-L4675) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "title": {
      "title": "Title",
      "type": "string"
    },
    "page_id": {
      "default": null,
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "subtitle": {
      "default": null,
      "title": "Subtitle",
      "type": "string"
    },
    "features": {
      "default": null,
      "items": {},
      "title": "Features",
      "type": "array"
    },
    "columns": {
      "default": 3,
      "title": "Columns",
      "type": "integer"
    },
    "style": {
      "default": "cards",
      "title": "Style",
      "type": "string"
    },
    "bg_color": {
      "default": null,
      "title": "Bg Color",
      "type": "string"
    },
    "design_theme": {
      "default": "modern_light",
      "title": "Design Theme",
      "type": "string"
    },
    "position": {
      "default": "end",
      "title": "Position",
      "type": "string"
    }
  },
  "required": [
    "title"
  ],
  "title": "elementor_add_features_sectionArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_add_stats_section-7a6dd625"></a>

## elementor_add_stats_section

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_insert\_elements, sections.append, \_elementor\_make\_section, enumerate, \_elementor\_make\_heading\_section, \_elementor\_append\_widget\_to\_section, max.

```text
[WRITE] Elementor tool. Add a statistics/numbers section (e.g. '10K+ Users', '99% Uptime'). Style: 'dark-band', 'light', 'gradient'
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L4677-L4709) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "default": null,
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "title": {
      "default": null,
      "title": "Title",
      "type": "string"
    },
    "stats": {
      "default": null,
      "items": {},
      "title": "Stats",
      "type": "array"
    },
    "style": {
      "default": "dark-band",
      "title": "Style",
      "type": "string"
    },
    "design_theme": {
      "default": "modern_dark",
      "title": "Design Theme",
      "type": "string"
    },
    "position": {
      "default": "end",
      "title": "Position",
      "type": "string"
    }
  },
  "title": "elementor_add_stats_sectionArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_add_testimonials_section-c31f3a3b"></a>

## elementor_add_testimonials_section

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_insert\_elements, sections.append, \_elementor\_make\_section, enumerate, \_elementor\_make\_heading\_section, \_elementor\_append\_widget\_to\_section, max.

```text
[WRITE] Elementor tool. Add a testimonials/reviews section. Style: 'cards' (grid of cards) or 'large-quote' (full-width quote blocks)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L4711-L4746) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "default": null,
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "title": {
      "default": null,
      "title": "Title",
      "type": "string"
    },
    "subtitle": {
      "default": null,
      "title": "Subtitle",
      "type": "string"
    },
    "testimonials": {
      "default": null,
      "items": {},
      "title": "Testimonials",
      "type": "array"
    },
    "style": {
      "default": "cards",
      "title": "Style",
      "type": "string"
    },
    "bg_color": {
      "default": null,
      "title": "Bg Color",
      "type": "string"
    },
    "design_theme": {
      "default": "modern_light",
      "title": "Design Theme",
      "type": "string"
    },
    "position": {
      "default": "end",
      "title": "Position",
      "type": "string"
    }
  },
  "title": "elementor_add_testimonials_sectionArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_add_pricing_section-5ff447c5"></a>

## elementor_add_pricing_section

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_insert\_elements, sections.append, \_elementor\_make\_section, enumerate, \_elementor\_make\_heading\_section, \_elementor\_append\_widget\_to\_section, max.

```text
[WRITE] Elementor tool. Add a pricing plans section with highlighted plan support
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L4748-L4783) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "default": null,
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "title": {
      "default": null,
      "title": "Title",
      "type": "string"
    },
    "subtitle": {
      "default": null,
      "title": "Subtitle",
      "type": "string"
    },
    "plans": {
      "default": null,
      "items": {},
      "title": "Plans",
      "type": "array"
    },
    "design_theme": {
      "default": "modern_light",
      "title": "Design Theme",
      "type": "string"
    },
    "position": {
      "default": "end",
      "title": "Position",
      "type": "string"
    }
  },
  "title": "elementor_add_pricing_sectionArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_add_cta_section-122f46d6"></a>

## elementor_add_cta_section

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_make\_section, \_elementor\_append\_widget\_to\_section, \_elementor\_insert\_elements, '\n\n'.join.

```text
[WRITE] Elementor tool. Add a Call-To-Action banner section. Style: 'gradient' (colorful), 'solid' (flat color), 'bordered' (outline box)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L4785-L4811) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "title": {
      "title": "Title",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "subtitle": {
      "default": null,
      "title": "Subtitle",
      "type": "string"
    },
    "cta_text": {
      "default": null,
      "title": "Cta Text",
      "type": "string"
    },
    "cta_url": {
      "default": null,
      "title": "Cta Url",
      "type": "string"
    },
    "cta_secondary_text": {
      "default": null,
      "title": "Cta Secondary Text",
      "type": "string"
    },
    "style": {
      "default": "gradient",
      "title": "Style",
      "type": "string"
    },
    "bg_color": {
      "default": null,
      "title": "Bg Color",
      "type": "string"
    },
    "bg_gradient_from": {
      "default": null,
      "title": "Bg Gradient From",
      "type": "string"
    },
    "bg_gradient_to": {
      "default": null,
      "title": "Bg Gradient To",
      "type": "string"
    },
    "design_theme": {
      "default": "modern_light",
      "title": "Design Theme",
      "type": "string"
    },
    "position": {
      "default": "end",
      "title": "Position",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "title"
  ],
  "title": "elementor_add_cta_sectionArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_add_faq_section-fe27682c"></a>

## elementor_add_faq_section

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_make\_section, \_elementor\_append\_widget\_to\_section, sections.append, \_elementor\_insert\_elements, \_elementor\_make\_heading\_section.

```text
[WRITE] Elementor tool. Add a FAQ accordion section
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L4813-L4832) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "default": null,
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "title": {
      "default": null,
      "title": "Title",
      "type": "string"
    },
    "subtitle": {
      "default": null,
      "title": "Subtitle",
      "type": "string"
    },
    "faqs": {
      "default": null,
      "items": {},
      "title": "Faqs",
      "type": "array"
    },
    "bg_color": {
      "default": null,
      "title": "Bg Color",
      "type": "string"
    },
    "design_theme": {
      "default": "modern_light",
      "title": "Design Theme",
      "type": "string"
    },
    "position": {
      "default": "end",
      "title": "Position",
      "type": "string"
    }
  },
  "title": "elementor_add_faq_sectionArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_add_team_section-1dd50449"></a>

## elementor_add_team_section

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_insert\_elements, sections.append, max, \_elementor\_make\_section, enumerate, \_elementor\_make\_heading\_section, \_elementor\_append\_widget\_to\_section.

```text
[WRITE] Elementor tool. Add a team members grid section
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L4834-L4868) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "default": null,
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "title": {
      "default": null,
      "title": "Title",
      "type": "string"
    },
    "subtitle": {
      "default": null,
      "title": "Subtitle",
      "type": "string"
    },
    "members": {
      "default": null,
      "items": {},
      "title": "Members",
      "type": "array"
    },
    "columns": {
      "default": 3,
      "title": "Columns",
      "type": "integer"
    },
    "design_theme": {
      "default": "modern_light",
      "title": "Design Theme",
      "type": "string"
    },
    "position": {
      "default": "end",
      "title": "Position",
      "type": "string"
    }
  },
  "title": "elementor_add_team_sectionArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_add_text_media_section-e0725022"></a>

## elementor_add_text_media_section

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_make\_section, \_elementor\_append\_widget\_to\_section, \_elementor\_insert\_elements, ''.join, section.get.

```text
[WRITE] Elementor tool. Add a text + image/media side-by-side section (alternating layout). imagePosition: 'right' or 'left'
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L4870-L4902) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "headline": {
      "title": "Headline",
      "type": "string"
    },
    "body": {
      "title": "Body",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "badge": {
      "default": null,
      "title": "Badge",
      "type": "string"
    },
    "image_url": {
      "default": null,
      "title": "Image Url",
      "type": "string"
    },
    "image_position": {
      "default": "right",
      "title": "Image Position",
      "type": "string"
    },
    "points": {
      "default": null,
      "items": {},
      "title": "Points",
      "type": "array"
    },
    "cta_text": {
      "default": null,
      "title": "Cta Text",
      "type": "string"
    },
    "cta_url": {
      "default": null,
      "title": "Cta Url",
      "type": "string"
    },
    "bg_color": {
      "default": null,
      "title": "Bg Color",
      "type": "string"
    },
    "design_theme": {
      "default": "modern_light",
      "title": "Design Theme",
      "type": "string"
    },
    "position": {
      "default": "end",
      "title": "Position",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "headline",
    "body"
  ],
  "title": "elementor_add_text_media_sectionArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_add_logo_bar-b540e12e"></a>

## elementor_add_logo_bar

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_insert\_elements, sections.append, \_elementor\_make\_section, enumerate, \_elementor\_make\_heading\_section, \_elementor\_append\_widget\_to\_section, max.

```text
[WRITE] Elementor tool. Add a client logos / trust badges / partners bar
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L4904-L4932) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "label": {
      "default": null,
      "title": "Label",
      "type": "string"
    },
    "logos": {
      "default": null,
      "items": {},
      "title": "Logos",
      "type": "array"
    },
    "bg_color": {
      "default": null,
      "title": "Bg Color",
      "type": "string"
    },
    "design_theme": {
      "default": "modern_light",
      "title": "Design Theme",
      "type": "string"
    },
    "position": {
      "default": "end",
      "title": "Position",
      "type": "string"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "elementor_add_logo_barArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_set_page_full_width-5cade146"></a>

## elementor_set_page_full_width

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, \_wp.

```text
[WRITE] Elementor tool. Set an Elementor page to full width (removes sidebar, sets canvas or full-width template)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L4934-L4940) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "template": {
      "default": "elementor_canvas",
      "title": "Template",
      "type": "string"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "elementor_set_page_full_widthArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_get_available_sections-58841668"></a>

## elementor_get_available_sections

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool.

```text
[READ] Elementor tool. List all available section types that elementor_build_page and individual add_* tools support
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L4942-L4970) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "elementor_get_available_sectionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-catalog_create_cpt-e225f12d"></a>

## catalog_create_cpt

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Register a new Custom Post Type for a catalog (vehicles, furniture, apartments, etc.). Returns PHP code for functions.php or uses a companion plugin endpoint if available.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L27-L41) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "slug": {
      "title": "Slug",
      "type": "string"
    },
    "label": {
      "title": "Label",
      "type": "string"
    },
    "label_plural": {
      "default": null,
      "title": "Label Plural",
      "type": "string"
    },
    "icon": {
      "default": "dashicons-grid-view",
      "title": "Icon",
      "type": "string"
    },
    "supports": {
      "default": null,
      "items": {},
      "title": "Supports",
      "type": "array"
    },
    "has_archive": {
      "default": true,
      "title": "Has Archive",
      "type": "boolean"
    },
    "public": {
      "default": true,
      "title": "Public",
      "type": "boolean"
    },
    "show_in_rest": {
      "default": true,
      "title": "Show In Rest",
      "type": "boolean"
    },
    "taxonomies": {
      "default": null,
      "items": {},
      "title": "Taxonomies",
      "type": "array"
    }
  },
  "required": [
    "slug",
    "label"
  ],
  "title": "catalog_create_cptArguments",
  "type": "object"
}
```

</details>

<a id="tool-catalog_register_fields-92a43dec"></a>

## catalog_register_fields

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Define custom fields (meta fields) for a catalog CPT using ACF or meta registration
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L43-L50) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_type": {
      "title": "Post Type",
      "type": "string"
    },
    "fields": {
      "items": {},
      "title": "Fields",
      "type": "array"
    }
  },
  "required": [
    "post_type",
    "fields"
  ],
  "title": "catalog_register_fieldsArguments",
  "type": "object"
}
```

</details>

<a id="tool-catalog_create_item-00bef493"></a>

## catalog_create_item

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a catalog item (post) with all custom fields populated
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L52-L66) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_type": {
      "title": "Post Type",
      "type": "string"
    },
    "title": {
      "title": "Title",
      "type": "string"
    },
    "content": {
      "default": null,
      "title": "Content",
      "type": "string"
    },
    "excerpt": {
      "default": null,
      "title": "Excerpt",
      "type": "string"
    },
    "status": {
      "default": "publish",
      "title": "Status",
      "type": "string"
    },
    "featured_image": {
      "default": null,
      "title": "Featured Image",
      "type": "integer"
    },
    "meta": {
      "additionalProperties": true,
      "default": null,
      "title": "Meta",
      "type": "object"
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
    }
  },
  "required": [
    "post_type",
    "title"
  ],
  "title": "catalog_create_itemArguments",
  "type": "object"
}
```

</details>

<a id="tool-catalog_update_item-2831d5f7"></a>

## catalog_update_item

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Update a catalog item's fields, content, or status
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L68-L82) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_type": {
      "title": "Post Type",
      "type": "string"
    },
    "id": {
      "title": "Id",
      "type": "integer"
    },
    "title": {
      "default": null,
      "title": "Title",
      "type": "string"
    },
    "content": {
      "default": null,
      "title": "Content",
      "type": "string"
    },
    "excerpt": {
      "default": null,
      "title": "Excerpt",
      "type": "string"
    },
    "status": {
      "default": null,
      "title": "Status",
      "type": "string"
    },
    "featured_image": {
      "default": null,
      "title": "Featured Image",
      "type": "integer"
    },
    "meta": {
      "additionalProperties": true,
      "default": null,
      "title": "Meta",
      "type": "object"
    },
    "categories": {
      "default": null,
      "items": {},
      "title": "Categories",
      "type": "array"
    }
  },
  "required": [
    "post_type",
    "id"
  ],
  "title": "catalog_update_itemArguments",
  "type": "object"
}
```

</details>

<a id="tool-catalog_delete_item-ff3dcd0a"></a>

## catalog_delete_item

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] Tool tool. Delete a catalog item
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L84-L93) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_type": {
      "title": "Post Type",
      "type": "string"
    },
    "id": {
      "title": "Id",
      "type": "integer"
    },
    "force": {
      "default": false,
      "title": "Force",
      "type": "boolean"
    }
  },
  "required": [
    "post_type",
    "id"
  ],
  "title": "catalog_delete_itemArguments",
  "type": "object"
}
```

</details>

<a id="tool-catalog_list_items-0b8844d1"></a>

## catalog_list_items

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List catalog items with filtering by custom fields, taxonomy, search, and pagination
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L95-L111) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_type": {
      "title": "Post Type",
      "type": "string"
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
    "search": {
      "default": null,
      "title": "Search",
      "type": "string"
    },
    "status": {
      "default": "publish",
      "title": "Status",
      "type": "string"
    },
    "orderby": {
      "default": null,
      "title": "Orderby",
      "type": "string"
    },
    "order": {
      "default": null,
      "title": "Order",
      "type": "string"
    },
    "meta_key": {
      "default": null,
      "title": "Meta Key",
      "type": "string"
    },
    "meta_value": {
      "default": null,
      "title": "Meta Value",
      "type": "string"
    },
    "taxonomy": {
      "default": null,
      "title": "Taxonomy",
      "type": "string"
    },
    "term_id": {
      "default": null,
      "title": "Term Id",
      "type": "integer"
    }
  },
  "required": [
    "post_type"
  ],
  "title": "catalog_list_itemsArguments",
  "type": "object"
}
```

</details>

<a id="tool-catalog_bulk_import-5400f15c"></a>

## catalog_bulk_import

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Bulk import catalog items from a JSON array of item objects
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L113-L121) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_type": {
      "title": "Post Type",
      "type": "string"
    },
    "items": {
      "items": {},
      "title": "Items",
      "type": "array"
    },
    "status": {
      "default": "publish",
      "title": "Status",
      "type": "string"
    }
  },
  "required": [
    "post_type",
    "items"
  ],
  "title": "catalog_bulk_importArguments",
  "type": "object"
}
```

</details>

<a id="tool-catalog_create_filters_page-5b7128be"></a>

## catalog_create_filters_page

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Generate an Elementor-based search/filter page for the catalog (returns JSON template or creates page)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L123-L133) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_type": {
      "title": "Post Type",
      "type": "string"
    },
    "title": {
      "default": "Catalog Search",
      "title": "Title",
      "type": "string"
    },
    "filters": {
      "default": null,
      "items": {},
      "title": "Filters",
      "type": "array"
    },
    "columns": {
      "default": 3,
      "title": "Columns",
      "type": "integer"
    },
    "show_map": {
      "default": false,
      "title": "Show Map",
      "type": "boolean"
    }
  },
  "required": [
    "post_type"
  ],
  "title": "catalog_create_filters_pageArguments",
  "type": "object"
}
```

</details>

<a id="tool-catalog_create_single_template-9b846da5"></a>

## catalog_create_single_template

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Generate a single item template for the catalog (returns Elementor JSON or PHP template code)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L135-L145) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_type": {
      "title": "Post Type",
      "type": "string"
    },
    "fields_to_show": {
      "default": null,
      "items": {},
      "title": "Fields To Show",
      "type": "array"
    },
    "layout": {
      "default": "standard",
      "title": "Layout",
      "type": "string"
    },
    "show_related": {
      "default": true,
      "title": "Show Related",
      "type": "boolean"
    },
    "show_contact_form": {
      "default": false,
      "title": "Show Contact Form",
      "type": "boolean"
    }
  },
  "required": [
    "post_type"
  ],
  "title": "catalog_create_single_templateArguments",
  "type": "object"
}
```

</details>

<a id="tool-catalog_create_archive_template-8c8e6a0e"></a>

## catalog_create_archive_template

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Generate an archive (listing) page template for the catalog
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L147-L158) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_type": {
      "title": "Post Type",
      "type": "string"
    },
    "layout": {
      "default": "grid",
      "title": "Layout",
      "type": "string"
    },
    "columns": {
      "default": 3,
      "title": "Columns",
      "type": "integer"
    },
    "show_filters": {
      "default": true,
      "title": "Show Filters",
      "type": "boolean"
    },
    "fields_in_card": {
      "default": null,
      "items": {},
      "title": "Fields In Card",
      "type": "array"
    },
    "show_pagination": {
      "default": true,
      "title": "Show Pagination",
      "type": "boolean"
    }
  },
  "required": [
    "post_type"
  ],
  "title": "catalog_create_archive_templateArguments",
  "type": "object"
}
```

</details>

<a id="tool-catalog_setup_search_engine-ee9c39c2"></a>

## catalog_setup_search_engine

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Configure AJAX-based search/filter engine for the catalog (returns code snippet or plugin config)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L160-L169) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_type": {
      "title": "Post Type",
      "type": "string"
    },
    "searchable_fields": {
      "default": null,
      "items": {},
      "title": "Searchable Fields",
      "type": "array"
    },
    "instant_search": {
      "default": true,
      "title": "Instant Search",
      "type": "boolean"
    },
    "facets": {
      "default": null,
      "items": {},
      "title": "Facets",
      "type": "array"
    }
  },
  "required": [
    "post_type"
  ],
  "title": "catalog_setup_search_engineArguments",
  "type": "object"
}
```

</details>

<a id="tool-catalog_create_comparison_table-c131d23d"></a>

## catalog_create_comparison_table

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a comparison table page for catalog items
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L171-L180) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_type": {
      "title": "Post Type",
      "type": "string"
    },
    "item_ids": {
      "items": {},
      "title": "Item Ids",
      "type": "array"
    },
    "fields": {
      "items": {},
      "title": "Fields",
      "type": "array"
    },
    "title": {
      "default": "Compare Items",
      "title": "Title",
      "type": "string"
    }
  },
  "required": [
    "post_type",
    "item_ids",
    "fields"
  ],
  "title": "catalog_create_comparison_tableArguments",
  "type": "object"
}
```

</details>

<a id="tool-catalog_create_categories-cffa4244"></a>

## catalog_create_categories

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_tax\_map.get, \_wp, isinstance, results.append, wp.post.

```text
[WRITE] Tool tool. Create taxonomy terms (categories) for the catalog
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L182-L198) · Schema: tools/list.

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
    "categories": {
      "items": {},
      "title": "Categories",
      "type": "array"
    }
  },
  "required": [
    "taxonomy",
    "categories"
  ],
  "title": "catalog_create_categoriesArguments",
  "type": "object"
}
```

</details>

<a id="tool-catalog_assign_category-1dab97fb"></a>

## catalog_assign_category

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Assign taxonomy terms to a catalog item
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L200-L209) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_type": {
      "title": "Post Type",
      "type": "string"
    },
    "item_id": {
      "title": "Item Id",
      "type": "integer"
    },
    "taxonomy": {
      "title": "Taxonomy",
      "type": "string"
    },
    "term_ids": {
      "items": {},
      "title": "Term Ids",
      "type": "array"
    }
  },
  "required": [
    "post_type",
    "item_id",
    "taxonomy",
    "term_ids"
  ],
  "title": "catalog_assign_categoryArguments",
  "type": "object"
}
```

</details>

<a id="tool-catalog_set_featured_items-f8e4ab31"></a>

## catalog_set_featured_items

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_rest\_map.get, \_wp, results.append, wp.post.

```text
[WRITE] Tool tool. Mark specific catalog items as featured
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L211-L227) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_type": {
      "title": "Post Type",
      "type": "string"
    },
    "item_ids": {
      "items": {},
      "title": "Item Ids",
      "type": "array"
    },
    "featured": {
      "default": true,
      "title": "Featured",
      "type": "boolean"
    }
  },
  "required": [
    "post_type",
    "item_ids"
  ],
  "title": "catalog_set_featured_itemsArguments",
  "type": "object"
}
```

</details>

<a id="tool-catalog_get_stats-f0738ba9"></a>

## catalog_get_stats

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Get catalog statistics: item count, price ranges, popular categories, etc.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L229-L237) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_type": {
      "title": "Post Type",
      "type": "string"
    },
    "price_field": {
      "default": "price",
      "title": "Price Field",
      "type": "string"
    },
    "taxonomy": {
      "default": null,
      "title": "Taxonomy",
      "type": "string"
    }
  },
  "required": [
    "post_type"
  ],
  "title": "catalog_get_statsArguments",
  "type": "object"
}
```

</details>

<a id="tool-catalog_create_shortcode-a3f40628"></a>

## catalog_create_shortcode

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Generate a shortcode for embedding catalog listings in any page or post
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L239-L253) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_type": {
      "title": "Post Type",
      "type": "string"
    },
    "display": {
      "default": "grid",
      "title": "Display",
      "type": "string"
    },
    "limit": {
      "default": 12,
      "title": "Limit",
      "type": "integer"
    },
    "columns": {
      "default": 3,
      "title": "Columns",
      "type": "integer"
    },
    "taxonomy": {
      "default": null,
      "title": "Taxonomy",
      "type": "string"
    },
    "term": {
      "default": null,
      "title": "Term",
      "type": "string"
    },
    "orderby": {
      "default": null,
      "title": "Orderby",
      "type": "string"
    },
    "featured_only": {
      "default": false,
      "title": "Featured Only",
      "type": "boolean"
    },
    "fields_to_show": {
      "default": null,
      "items": {},
      "title": "Fields To Show",
      "type": "array"
    }
  },
  "required": [
    "post_type"
  ],
  "title": "catalog_create_shortcodeArguments",
  "type": "object"
}
```

</details>

<a id="tool-catalog_setup_from_preset-03bd00f9"></a>

## catalog_setup_from_preset

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Set up a complete catalog from a preset configuration (vehicles, real_estate, furniture, products)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L255-L263) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "preset": {
      "title": "Preset",
      "type": "string"
    },
    "slug_override": {
      "default": null,
      "title": "Slug Override",
      "type": "string"
    },
    "language": {
      "default": "en",
      "title": "Language",
      "type": "string"
    }
  },
  "required": [
    "preset"
  ],
  "title": "catalog_setup_from_presetArguments",
  "type": "object"
}
```

</details>

<a id="tool-catalog_configure_sorting-3fe076fd"></a>

## catalog_configure_sorting

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Configure sorting options available for catalog listings
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L265-L274) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_type": {
      "title": "Post Type",
      "type": "string"
    },
    "sort_options": {
      "items": {},
      "title": "Sort Options",
      "type": "array"
    },
    "default_sort": {
      "default": null,
      "title": "Default Sort",
      "type": "string"
    },
    "default_order": {
      "default": "desc",
      "title": "Default Order",
      "type": "string"
    }
  },
  "required": [
    "post_type",
    "sort_options"
  ],
  "title": "catalog_configure_sortingArguments",
  "type": "object"
}
```

</details>

<a id="tool-catalog_export_items-220c122b"></a>

## catalog_export_items

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Export catalog items to JSON format
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L276-L286) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_type": {
      "title": "Post Type",
      "type": "string"
    },
    "format": {
      "default": "json",
      "title": "Format",
      "type": "string"
    },
    "fields": {
      "default": null,
      "items": {},
      "title": "Fields",
      "type": "array"
    },
    "status": {
      "default": "publish",
      "title": "Status",
      "type": "string"
    },
    "per_page": {
      "default": 100,
      "title": "Per Page",
      "type": "integer"
    }
  },
  "required": [
    "post_type"
  ],
  "title": "catalog_export_itemsArguments",
  "type": "object"
}
```

</details>

<a id="tool-reviews_wc_list-6ff34f19"></a>

## reviews_wc_list

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List WooCommerce product reviews with optional filters
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L288-L302) · Schema: tools/list.

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
    "product": {
      "default": null,
      "items": {},
      "title": "Product",
      "type": "array"
    },
    "status": {
      "default": "approved",
      "title": "Status",
      "type": "string"
    },
    "search": {
      "default": null,
      "title": "Search",
      "type": "string"
    },
    "reviewer": {
      "default": null,
      "title": "Reviewer",
      "type": "string"
    },
    "reviewer_email": {
      "default": null,
      "title": "Reviewer Email",
      "type": "string"
    },
    "orderby": {
      "default": "date",
      "title": "Orderby",
      "type": "string"
    },
    "order": {
      "default": "desc",
      "title": "Order",
      "type": "string"
    }
  },
  "title": "reviews_wc_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-reviews_wc_get-c11ed306"></a>

## reviews_wc_get

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Tool tool. Get a single WooCommerce product review by ID
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L304-L309) · Schema: tools/list.

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
  "title": "reviews_wc_getArguments",
  "type": "object"
}
```

</details>
