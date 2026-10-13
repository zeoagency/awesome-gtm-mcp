# RoyAzran/mcp-ads: supporting and other-product tools

[Provider inventory](royazran--mcp-ads.md) · [Global tool index](../TOOL_INDEX.md)

Tools 2251–2400 of 3131. Exact schemas from the same upstream snapshot.

<a id="tool-chat_whatsapp_button_add-15d5e505"></a>

## chat_whatsapp_button_add

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Add a WhatsApp click-to-chat button on the site
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3467-L3480) · Schema: tools/list.

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
    "default_message": {
      "default": null,
      "title": "Default Message",
      "type": "string"
    },
    "button_text": {
      "default": "Chat on WhatsApp",
      "title": "Button Text",
      "type": "string"
    },
    "position": {
      "default": "bottom-right",
      "title": "Position",
      "type": "string"
    },
    "show_on_mobile": {
      "default": true,
      "title": "Show On Mobile",
      "type": "boolean"
    },
    "show_on_desktop": {
      "default": true,
      "title": "Show On Desktop",
      "type": "boolean"
    },
    "icon_size": {
      "default": "medium",
      "title": "Icon Size",
      "type": "string"
    },
    "delay_seconds": {
      "default": 0,
      "title": "Delay Seconds",
      "type": "integer"
    }
  },
  "required": [
    "phone_number"
  ],
  "title": "chat_whatsapp_button_addArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_list_categories-ff714ab0"></a>

## wp_list_categories

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] WordPress tool. List all categories with post counts and hierarchy
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3482-L3499) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
    "search": {
      "default": null,
      "title": "Search",
      "type": "string"
    },
    "parent": {
      "default": null,
      "title": "Parent",
      "type": "integer"
    },
    "hide_empty": {
      "default": false,
      "title": "Hide Empty",
      "type": "boolean"
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
    }
  },
  "title": "wp_list_categoriesArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_category-3fc49f98"></a>

## wp_get_category

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get a single category by ID
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3501-L3507) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
  "title": "wp_get_categoryArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_create_category-4ee7e99b"></a>

## wp_create_category

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Create a new post category
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3509-L3520) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
    "yoast_title": {
      "default": null,
      "title": "Yoast Title",
      "type": "string"
    },
    "yoast_description": {
      "default": null,
      "title": "Yoast Description",
      "type": "string"
    }
  },
  "required": [
    "name"
  ],
  "title": "wp_create_categoryArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_update_category-1385a0d3"></a>

## wp_update_category

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Update an existing category
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3522-L3532) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
    }
  },
  "required": [
    "id"
  ],
  "title": "wp_update_categoryArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_delete_category-c964171f"></a>

## wp_delete_category

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] WordPress tool. Delete a category
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3534-L3540) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
  "title": "wp_delete_categoryArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_list_tags-0eae22f4"></a>

## wp_list_tags

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] WordPress tool. List all post tags
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3542-L3557) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
    "search": {
      "default": null,
      "title": "Search",
      "type": "string"
    },
    "hide_empty": {
      "default": false,
      "title": "Hide Empty",
      "type": "boolean"
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
    }
  },
  "title": "wp_list_tagsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_create_tag-5172c608"></a>

## wp_create_tag

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Create a new post tag
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3559-L3567) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
    }
  },
  "required": [
    "name"
  ],
  "title": "wp_create_tagArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_update_tag-1c586ba5"></a>

## wp_update_tag

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Update an existing tag
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3569-L3578) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
    "slug": {
      "default": null,
      "title": "Slug",
      "type": "string"
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
  "title": "wp_update_tagArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_delete_tag-822878d1"></a>

## wp_delete_tag

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] WordPress tool. Delete a tag
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3580-L3586) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
  "title": "wp_delete_tagArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_list_taxonomies-3516b81d"></a>

## wp_list_taxonomies

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] WordPress tool. List all registered taxonomies (categories, tags, product_cat, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3588-L3592) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_list_taxonomiesArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_terms-6395255b"></a>

## wp_get_terms

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get terms for any custom taxonomy
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3594-L3603) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "taxonomy": {
      "title": "Taxonomy",
      "type": "string"
    },
    "per_page": {
      "default": 100,
      "title": "Per Page",
      "type": "integer"
    },
    "search": {
      "default": null,
      "title": "Search",
      "type": "string"
    },
    "hide_empty": {
      "default": false,
      "title": "Hide Empty",
      "type": "boolean"
    }
  },
  "required": [
    "taxonomy"
  ],
  "title": "wp_get_termsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_create_term-cc61b90c"></a>

## wp_create_term

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Create a term in any taxonomy
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3605-L3615) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "taxonomy": {
      "title": "Taxonomy",
      "type": "string"
    },
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
    }
  },
  "required": [
    "taxonomy",
    "name"
  ],
  "title": "wp_create_termArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_update_term-6bb78370"></a>

## wp_update_term

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Update a term in any taxonomy
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3617-L3628) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
    "name": {
      "default": null,
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
    }
  },
  "required": [
    "taxonomy",
    "id"
  ],
  "title": "wp_update_termArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_delete_term-6ccc5ce1"></a>

## wp_delete_term

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] WordPress tool. Delete a term from any taxonomy
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3630-L3637) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
  "title": "wp_delete_termArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_list_themes-4846517e"></a>

## wp_list_themes

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_unsupported\_from\_http, \_wp.

```text
[READ] WordPress tool. List all installed WordPress themes
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3639-L3653) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "status": {
      "default": "any",
      "title": "Status",
      "type": "string"
    },
    "per_page": {
      "default": 50,
      "title": "Per Page",
      "type": "integer"
    },
    "search": {
      "default": null,
      "title": "Search",
      "type": "string"
    }
  },
  "title": "wp_list_themesArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_active_theme-98c1b5dc"></a>

## wp_get_active_theme

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, isinstance, \_unsupported\_from\_http, \_wp.

```text
[READ] WordPress tool. Get the currently active WordPress theme details
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3655-L3665) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_get_active_themeArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_theme-593fb7d4"></a>

## wp_get_theme

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_unsupported\_from\_http, \_wp.

```text
[READ] WordPress tool. Get details about a specific theme
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3667-L3675) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "stylesheet": {
      "title": "Stylesheet",
      "type": "string"
    }
  },
  "required": [
    "stylesheet"
  ],
  "title": "wp_get_themeArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_switch_theme-c2627c77"></a>

## wp_switch_theme

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().put, \_unsupported\_from\_http, \_wp.

```text
[WRITE] WordPress tool. Activate a different WordPress theme
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3677-L3685) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "stylesheet": {
      "title": "Stylesheet",
      "type": "string"
    }
  },
  "required": [
    "stylesheet"
  ],
  "title": "wp_switch_themeArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_theme_customizations-131ddd0d"></a>

## wp_get_theme_customizations

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get WordPress Customizer settings (site identity, colors, typography, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3687-L3691) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_get_theme_customizationsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_update_theme_customization-43a846eb"></a>

## wp_update_theme_customization

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Update WordPress Customizer / Global Styles settings
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3693-L3699) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "settings": {
      "additionalProperties": true,
      "title": "Settings",
      "type": "object"
    }
  },
  "required": [
    "settings"
  ],
  "title": "wp_update_theme_customizationArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_list_theme_templates-890c8d58"></a>

## wp_list_theme_templates

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_unsupported\_from\_http, \_wp.

```text
[READ] WordPress tool. List all available templates in the active theme
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3701-L3708) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_list_theme_templatesArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_global_styles-214442a2"></a>

## wp_get_global_styles

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp\_global\_styles\_resolution\_hint.

```text
[READ] WordPress tool. Get WordPress Full Site Editing global styles (colors, typography, spacing)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3710-L3713) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_get_global_stylesArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_update_global_styles-8f25b8b8"></a>

## wp_update_global_styles

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, quote, locals.

```text
[WRITE] WordPress tool. Update WordPress FSE global styles
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3715-L3723) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "title": "Id",
      "type": "integer"
    },
    "styles": {
      "additionalProperties": true,
      "default": null,
      "title": "Styles",
      "type": "object"
    },
    "settings": {
      "additionalProperties": true,
      "default": null,
      "title": "Settings",
      "type": "object"
    }
  },
  "required": [
    "id"
  ],
  "title": "wp_update_global_stylesArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_list_theme_blocks-8269902e"></a>

## wp_list_theme_blocks

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] WordPress tool. List all block templates in the active block theme
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3725-L3732) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "per_page": {
      "default": 50,
      "title": "Per Page",
      "type": "integer"
    }
  },
  "title": "wp_list_theme_blocksArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_install_theme-576e331e"></a>

## wp_install_theme

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, \_unsupported\_from\_http, \_wp.

```text
[WRITE] WordPress tool. Install a theme from WordPress.org
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3734-L3744) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "slug": {
      "title": "Slug",
      "type": "string"
    },
    "activate": {
      "default": false,
      "title": "Activate",
      "type": "boolean"
    }
  },
  "required": [
    "slug"
  ],
  "title": "wp_install_themeArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_list_users-aeb4e0f6"></a>

## wp_list_users

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, params.setdefault, \_wp().get, \_wp.

```text
[READ] WordPress tool. List WordPress users with role filters
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3746-L3764) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
    "roles": {
      "default": null,
      "title": "Roles",
      "type": "string"
    },
    "search": {
      "default": null,
      "title": "Search",
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
    }
  },
  "title": "wp_list_usersArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_user-617e66ba"></a>

## wp_get_user

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get a user by ID with roles and capabilities
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3766-L3772) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
  "title": "wp_get_userArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_current_user-a5b9c247"></a>

## wp_get_current_user

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get the currently authenticated user (the Application Password owner)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3774-L3778) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_get_current_userArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_create_user-b940b048"></a>

## wp_create_user

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Create a new WordPress user
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3780-L3793) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "username": {
      "title": "Username",
      "type": "string"
    },
    "email": {
      "title": "Email",
      "type": "string"
    },
    "password": {
      "title": "Password",
      "type": "string"
    },
    "first_name": {
      "default": null,
      "title": "First Name",
      "type": "string"
    },
    "last_name": {
      "default": null,
      "title": "Last Name",
      "type": "string"
    },
    "roles": {
      "default": null,
      "items": {},
      "title": "Roles",
      "type": "array"
    },
    "url": {
      "default": null,
      "title": "Url",
      "type": "string"
    },
    "description": {
      "default": null,
      "title": "Description",
      "type": "string"
    }
  },
  "required": [
    "username",
    "email",
    "password"
  ],
  "title": "wp_create_userArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_update_user-525a2379"></a>

## wp_update_user

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Update user profile information
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3795-L3808) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "title": "Id",
      "type": "integer"
    },
    "email": {
      "default": null,
      "title": "Email",
      "type": "string"
    },
    "first_name": {
      "default": null,
      "title": "First Name",
      "type": "string"
    },
    "last_name": {
      "default": null,
      "title": "Last Name",
      "type": "string"
    },
    "roles": {
      "default": null,
      "items": {},
      "title": "Roles",
      "type": "array"
    },
    "url": {
      "default": null,
      "title": "Url",
      "type": "string"
    },
    "description": {
      "default": null,
      "title": "Description",
      "type": "string"
    },
    "meta": {
      "additionalProperties": true,
      "default": null,
      "title": "Meta",
      "type": "object"
    }
  },
  "required": [
    "id"
  ],
  "title": "wp_update_userArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_delete_user-dd713409"></a>

## wp_delete_user

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] WordPress tool. Delete a WordPress user, optionally reassigning their content
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3810-L3817) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "title": "Id",
      "type": "integer"
    },
    "reassign": {
      "default": null,
      "title": "Reassign",
      "type": "integer"
    }
  },
  "required": [
    "id"
  ],
  "title": "wp_delete_userArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_change_user_role-d86b50ce"></a>

## wp_change_user_role

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Change a user's WordPress role
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3819-L3826) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "title": "Id",
      "type": "integer"
    },
    "role": {
      "title": "Role",
      "type": "string"
    }
  },
  "required": [
    "id",
    "role"
  ],
  "title": "wp_change_user_roleArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_reset_user_password-cda26daa"></a>

## wp_reset_user_password

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Set a new password for a user
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3828-L3835) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "title": "Id",
      "type": "integer"
    },
    "password": {
      "title": "Password",
      "type": "string"
    }
  },
  "required": [
    "id",
    "password"
  ],
  "title": "wp_reset_user_passwordArguments",
  "type": "object"
}
```

</details>

<a id="tool-realestate_listings_list-283d52b3"></a>

## realestate_listings_list

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List real estate property listings (auto-detects CPT: property, listing, estate_property, houzez_property)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3837-L3853) · Schema: tools/list.

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
    "property_type": {
      "default": null,
      "title": "Property Type",
      "type": "string"
    },
    "min_price": {
      "default": null,
      "title": "Min Price",
      "type": "integer"
    },
    "max_price": {
      "default": null,
      "title": "Max Price",
      "type": "integer"
    },
    "bedrooms": {
      "default": null,
      "title": "Bedrooms",
      "type": "integer"
    },
    "location": {
      "default": null,
      "title": "Location",
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
  "title": "realestate_listings_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-realestate_listing_create-4cb0d4b0"></a>

## realestate_listing_create

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a real estate property listing with address, price, features, and media
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3855-L3889) · Schema: tools/list.

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
    "price": {
      "title": "Price",
      "type": "integer"
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
      "default": "draft",
      "title": "Status",
      "type": "string"
    },
    "featured_media": {
      "default": null,
      "title": "Featured Media",
      "type": "integer"
    },
    "gallery_ids": {
      "default": null,
      "items": {},
      "title": "Gallery Ids",
      "type": "array"
    },
    "address": {
      "default": null,
      "title": "Address",
      "type": "string"
    },
    "city": {
      "default": null,
      "title": "City",
      "type": "string"
    },
    "state": {
      "default": null,
      "title": "State",
      "type": "string"
    },
    "zip": {
      "default": null,
      "title": "Zip",
      "type": "string"
    },
    "country": {
      "default": null,
      "title": "Country",
      "type": "string"
    },
    "latitude": {
      "default": null,
      "title": "Latitude",
      "type": "integer"
    },
    "longitude": {
      "default": null,
      "title": "Longitude",
      "type": "integer"
    },
    "price_prefix": {
      "default": null,
      "title": "Price Prefix",
      "type": "string"
    },
    "price_suffix": {
      "default": null,
      "title": "Price Suffix",
      "type": "string"
    },
    "property_type": {
      "default": null,
      "title": "Property Type",
      "type": "string"
    },
    "listing_type": {
      "default": "sale",
      "title": "Listing Type",
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
    "area": {
      "default": null,
      "title": "Area",
      "type": "integer"
    },
    "area_unit": {
      "default": "sqft",
      "title": "Area Unit",
      "type": "string"
    },
    "lot_size": {
      "default": null,
      "title": "Lot Size",
      "type": "integer"
    },
    "year_built": {
      "default": null,
      "title": "Year Built",
      "type": "integer"
    },
    "garage": {
      "default": null,
      "title": "Garage",
      "type": "integer"
    },
    "features": {
      "default": null,
      "items": {},
      "title": "Features",
      "type": "array"
    },
    "agent_id": {
      "default": null,
      "title": "Agent Id",
      "type": "integer"
    },
    "virtual_tour_url": {
      "default": null,
      "title": "Virtual Tour Url",
      "type": "string"
    },
    "video_url": {
      "default": null,
      "title": "Video Url",
      "type": "string"
    }
  },
  "required": [
    "title",
    "price"
  ],
  "title": "realestate_listing_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-realestate_listing_update-0ebc939e"></a>

## realestate_listing_update

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Update an existing real estate property listing
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3891-L3911) · Schema: tools/list.

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
    "content": {
      "default": null,
      "title": "Content",
      "type": "string"
    },
    "status": {
      "default": null,
      "title": "Status",
      "type": "string"
    },
    "price": {
      "default": null,
      "title": "Price",
      "type": "integer"
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
    "area": {
      "default": null,
      "title": "Area",
      "type": "integer"
    },
    "address": {
      "default": null,
      "title": "Address",
      "type": "string"
    },
    "city": {
      "default": null,
      "title": "City",
      "type": "string"
    },
    "property_type": {
      "default": null,
      "title": "Property Type",
      "type": "string"
    },
    "listing_type": {
      "default": null,
      "title": "Listing Type",
      "type": "string"
    },
    "features": {
      "default": null,
      "items": {},
      "title": "Features",
      "type": "array"
    },
    "featured_media": {
      "default": null,
      "title": "Featured Media",
      "type": "integer"
    },
    "gallery_ids": {
      "default": null,
      "items": {},
      "title": "Gallery Ids",
      "type": "array"
    }
  },
  "required": [
    "id"
  ],
  "title": "realestate_listing_updateArguments",
  "type": "object"
}
```

</details>

<a id="tool-realestate_agents_list-27c89c72"></a>

## realestate_agents_list

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List real estate agents (agent CPT or users with agent role)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3913-L3921) · Schema: tools/list.

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
    "search": {
      "default": null,
      "title": "Search",
      "type": "string"
    }
  },
  "title": "realestate_agents_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-realestate_agents_create-80cfe6c4"></a>

## realestate_agents_create

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a real estate agent profile
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3923-L3941) · Schema: tools/list.

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
      "default": null,
      "title": "Content",
      "type": "string"
    },
    "status": {
      "default": "publish",
      "title": "Status",
      "type": "string"
    },
    "featured_media": {
      "default": null,
      "title": "Featured Media",
      "type": "integer"
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
    "mobile": {
      "default": null,
      "title": "Mobile",
      "type": "string"
    },
    "license_number": {
      "default": null,
      "title": "License Number",
      "type": "string"
    },
    "agency": {
      "default": null,
      "title": "Agency",
      "type": "string"
    },
    "specializations": {
      "default": null,
      "items": {},
      "title": "Specializations",
      "type": "array"
    },
    "social_facebook": {
      "default": null,
      "title": "Social Facebook",
      "type": "string"
    },
    "social_instagram": {
      "default": null,
      "title": "Social Instagram",
      "type": "string"
    },
    "social_linkedin": {
      "default": null,
      "title": "Social Linkedin",
      "type": "string"
    }
  },
  "required": [
    "title"
  ],
  "title": "realestate_agents_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-realestate_search_configure-a298b1e8"></a>

## realestate_search_configure

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Configure property search parameters (filterable fields, price ranges, location areas)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3943-L3958) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "enable_location_filter": {
      "default": true,
      "title": "Enable Location Filter",
      "type": "boolean"
    },
    "enable_price_filter": {
      "default": true,
      "title": "Enable Price Filter",
      "type": "boolean"
    },
    "enable_type_filter": {
      "default": true,
      "title": "Enable Type Filter",
      "type": "boolean"
    },
    "enable_bedrooms_filter": {
      "default": true,
      "title": "Enable Bedrooms Filter",
      "type": "boolean"
    },
    "enable_bathrooms_filter": {
      "default": true,
      "title": "Enable Bathrooms Filter",
      "type": "boolean"
    },
    "enable_area_filter": {
      "default": true,
      "title": "Enable Area Filter",
      "type": "boolean"
    },
    "price_ranges": {
      "default": null,
      "items": {},
      "title": "Price Ranges",
      "type": "array"
    },
    "property_types": {
      "default": null,
      "items": {},
      "title": "Property Types",
      "type": "array"
    },
    "locations": {
      "default": null,
      "items": {},
      "title": "Locations",
      "type": "array"
    },
    "default_sort": {
      "default": "date",
      "title": "Default Sort",
      "type": "string"
    }
  },
  "title": "realestate_search_configureArguments",
  "type": "object"
}
```

</details>

<a id="tool-directory_listings_list-6c9e0e80"></a>

## directory_listings_list

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List directory/business listings (auto-detects CPT: listing, business, directory)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3960-L3973) · Schema: tools/list.

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
    "category": {
      "default": null,
      "title": "Category",
      "type": "string"
    },
    "location": {
      "default": null,
      "title": "Location",
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
  "title": "directory_listings_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-directory_listing_create-09ff13c5"></a>

## directory_listing_create

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a directory/business listing with contact info, hours, and location
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3975-L4003) · Schema: tools/list.

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
      "default": "draft",
      "title": "Status",
      "type": "string"
    },
    "featured_media": {
      "default": null,
      "title": "Featured Media",
      "type": "integer"
    },
    "gallery_ids": {
      "default": null,
      "items": {},
      "title": "Gallery Ids",
      "type": "array"
    },
    "address": {
      "default": null,
      "title": "Address",
      "type": "string"
    },
    "city": {
      "default": null,
      "title": "City",
      "type": "string"
    },
    "state": {
      "default": null,
      "title": "State",
      "type": "string"
    },
    "zip": {
      "default": null,
      "title": "Zip",
      "type": "string"
    },
    "country": {
      "default": null,
      "title": "Country",
      "type": "string"
    },
    "latitude": {
      "default": null,
      "title": "Latitude",
      "type": "integer"
    },
    "longitude": {
      "default": null,
      "title": "Longitude",
      "type": "integer"
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
    "website": {
      "default": null,
      "title": "Website",
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
    "hours": {
      "additionalProperties": true,
      "default": null,
      "title": "Hours",
      "type": "object"
    },
    "social_facebook": {
      "default": null,
      "title": "Social Facebook",
      "type": "string"
    },
    "social_instagram": {
      "default": null,
      "title": "Social Instagram",
      "type": "string"
    },
    "social_twitter": {
      "default": null,
      "title": "Social Twitter",
      "type": "string"
    },
    "price_range": {
      "default": null,
      "title": "Price Range",
      "type": "string"
    }
  },
  "required": [
    "title"
  ],
  "title": "directory_listing_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-directory_categories_list-b78b46bc"></a>

## directory_categories_list

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List directory listing categories
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4005-L4014) · Schema: tools/list.

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
    "search": {
      "default": null,
      "title": "Search",
      "type": "string"
    },
    "parent": {
      "default": null,
      "title": "Parent",
      "type": "integer"
    },
    "hide_empty": {
      "default": false,
      "title": "Hide Empty",
      "type": "boolean"
    }
  },
  "title": "directory_categories_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-directory_search_configure-8e087781"></a>

## directory_search_configure

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Configure directory search and filter settings
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4016-L4031) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "enable_location_filter": {
      "default": true,
      "title": "Enable Location Filter",
      "type": "boolean"
    },
    "enable_category_filter": {
      "default": true,
      "title": "Enable Category Filter",
      "type": "boolean"
    },
    "enable_price_range_filter": {
      "default": true,
      "title": "Enable Price Range Filter",
      "type": "boolean"
    },
    "enable_rating_filter": {
      "default": true,
      "title": "Enable Rating Filter",
      "type": "boolean"
    },
    "enable_map_view": {
      "default": true,
      "title": "Enable Map View",
      "type": "boolean"
    },
    "google_maps_api_key": {
      "default": null,
      "title": "Google Maps Api Key",
      "type": "string"
    },
    "radius_search": {
      "default": false,
      "title": "Radius Search",
      "type": "boolean"
    },
    "radius_unit": {
      "default": "km",
      "title": "Radius Unit",
      "type": "string"
    },
    "default_radius": {
      "default": 25,
      "title": "Default Radius",
      "type": "integer"
    },
    "results_per_page": {
      "default": 20,
      "title": "Results Per Page",
      "type": "integer"
    }
  },
  "title": "directory_search_configureArguments",
  "type": "object"
}
```

</details>

<a id="tool-jobboard_listings_list-0160a353"></a>

## jobboard_listings_list

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List job board listings (auto-detects CPT: job_listing, job, career)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4033-L4049) · Schema: tools/list.

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
    "job_type": {
      "default": null,
      "title": "Job Type",
      "type": "string"
    },
    "location": {
      "default": null,
      "title": "Location",
      "type": "string"
    },
    "remote": {
      "default": null,
      "title": "Remote",
      "type": "boolean"
    },
    "company": {
      "default": null,
      "title": "Company",
      "type": "string"
    },
    "category": {
      "default": null,
      "title": "Category",
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
  "title": "jobboard_listings_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-jobboard_listing_create-09a3527b"></a>

## jobboard_listing_create

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a job listing with company info, salary, and requirements
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4051-L4079) · Schema: tools/list.

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
    "company_name": {
      "title": "Company Name",
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
      "default": "draft",
      "title": "Status",
      "type": "string"
    },
    "company_logo": {
      "default": null,
      "title": "Company Logo",
      "type": "integer"
    },
    "company_website": {
      "default": null,
      "title": "Company Website",
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
    "job_type": {
      "default": "full-time",
      "title": "Job Type",
      "type": "string"
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
    "salary_period": {
      "default": "yearly",
      "title": "Salary Period",
      "type": "string"
    },
    "experience_level": {
      "default": null,
      "title": "Experience Level",
      "type": "string"
    },
    "education": {
      "default": null,
      "title": "Education",
      "type": "string"
    },
    "skills": {
      "default": null,
      "items": {},
      "title": "Skills",
      "type": "array"
    },
    "benefits": {
      "default": null,
      "items": {},
      "title": "Benefits",
      "type": "array"
    },
    "application_url": {
      "default": null,
      "title": "Application Url",
      "type": "string"
    },
    "application_email": {
      "default": null,
      "title": "Application Email",
      "type": "string"
    },
    "deadline": {
      "default": null,
      "title": "Deadline",
      "type": "string"
    },
    "categories": {
      "default": null,
      "items": {},
      "title": "Categories",
      "type": "array"
    },
    "featured": {
      "default": false,
      "title": "Featured",
      "type": "boolean"
    }
  },
  "required": [
    "title",
    "company_name"
  ],
  "title": "jobboard_listing_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-jobboard_applications_list-b7419682"></a>

## jobboard_applications_list

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List job applications received for a specific job or all jobs
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4081-L4092) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "job_id": {
      "default": null,
      "title": "Job Id",
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
      "default": null,
      "title": "Status",
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
  "title": "jobboard_applications_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-vertical_detect_type-fd69168d"></a>

## vertical_detect_type

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Detect which vertical/CPT is set up on the site (real estate, directory, job board, restaurant, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4094-L4098) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "vertical_detect_typeArguments",
  "type": "object"
}
```

</details>

<a id="tool-vertical_create_from_preset-28601a58"></a>

## vertical_create_from_preset

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a full vertical setup from a template including CPT, taxonomies, meta fields, and pages
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4100-L4109) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "vertical": {
      "title": "Vertical",
      "type": "string"
    },
    "site_name": {
      "default": null,
      "title": "Site Name",
      "type": "string"
    },
    "create_sample_data": {
      "default": false,
      "title": "Create Sample Data",
      "type": "boolean"
    },
    "sample_count": {
      "default": 10,
      "title": "Sample Count",
      "type": "integer"
    }
  },
  "required": [
    "vertical"
  ],
  "title": "vertical_create_from_presetArguments",
  "type": "object"
}
```

</details>

<a id="tool-vertical_configure_search-1be7e40b"></a>

## vertical_configure_search

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Set up search/filter functionality for a vertical CPT
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4111-L4121) · Schema: tools/list.

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
    "filterable_fields": {
      "default": null,
      "items": {},
      "title": "Filterable Fields",
      "type": "array"
    },
    "enable_map": {
      "default": false,
      "title": "Enable Map",
      "type": "boolean"
    },
    "enable_sorting": {
      "default": true,
      "title": "Enable Sorting",
      "type": "boolean"
    },
    "sort_options": {
      "default": null,
      "items": {},
      "title": "Sort Options",
      "type": "array"
    }
  },
  "required": [
    "post_type"
  ],
  "title": "vertical_configure_searchArguments",
  "type": "object"
}
```

</details>

<a id="tool-vertical_create_single_template-92111be2"></a>

## vertical_create_single_template

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create an Elementor single-item template for a vertical CPT
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4123-L4132) · Schema: tools/list.

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
    "vertical": {
      "title": "Vertical",
      "type": "string"
    },
    "template_name": {
      "default": null,
      "title": "Template Name",
      "type": "string"
    },
    "include_sections": {
      "default": null,
      "items": {},
      "title": "Include Sections",
      "type": "array"
    }
  },
  "required": [
    "post_type",
    "vertical"
  ],
  "title": "vertical_create_single_templateArguments",
  "type": "object"
}
```

</details>

<a id="tool-vertical_create_archive_template-5f05a3eb"></a>

## vertical_create_archive_template

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, \_wp, vertical.title.

```text
[WRITE] Tool tool. Create an Elementor archive/listing template for a vertical CPT
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4134-L4148) · Schema: tools/list.

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
    "vertical": {
      "title": "Vertical",
      "type": "string"
    },
    "template_name": {
      "default": null,
      "title": "Template Name",
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
    "show_map": {
      "default": false,
      "title": "Show Map",
      "type": "boolean"
    },
    "items_per_page": {
      "default": 12,
      "title": "Items Per Page",
      "type": "integer"
    }
  },
  "required": [
    "post_type",
    "vertical"
  ],
  "title": "vertical_create_archive_templateArguments",
  "type": "object"
}
```

</details>

<a id="tool-vertical_import_sample_data-5b4076bc"></a>

## vertical_import_sample_data

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Import demo/sample data for a vertical (creates sample listings with meta)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4150-L4158) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "vertical": {
      "title": "Vertical",
      "type": "string"
    },
    "count": {
      "default": 10,
      "title": "Count",
      "type": "integer"
    },
    "locale": {
      "default": "en-US",
      "title": "Locale",
      "type": "string"
    }
  },
  "required": [
    "vertical"
  ],
  "title": "vertical_import_sample_dataArguments",
  "type": "object"
}
```

</details>

<a id="tool-video_embed-1a4e4e58"></a>

## video_embed

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Generate a video embed (YouTube, Vimeo, Wistia, etc.) from a URL. Returns HTML embed code and shortcode.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4160-L4171) · Schema: tools/list.

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
    "width": {
      "default": 800,
      "title": "Width",
      "type": "integer"
    },
    "height": {
      "default": 450,
      "title": "Height",
      "type": "integer"
    },
    "autoplay": {
      "default": false,
      "title": "Autoplay",
      "type": "boolean"
    },
    "loop": {
      "default": false,
      "title": "Loop",
      "type": "boolean"
    },
    "muted": {
      "default": false,
      "title": "Muted",
      "type": "boolean"
    }
  },
  "required": [
    "url"
  ],
  "title": "video_embedArguments",
  "type": "object"
}
```

</details>

<a id="tool-video_upload-67708acc"></a>

## video_upload

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_req.get, r.raise\_for\_status, r.headers.get('Content-Type', 'video/mp4').split(';')\[0\].strip, \_wp().upload\_media, \_wp().post, source\_url.rstrip('/').split('/')\[-1\].split, \_wp.

```text
[WRITE] Tool tool. Upload a video file to the WordPress media library from a URL
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4173-L4192) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "source_url": {
      "title": "Source Url",
      "type": "string"
    },
    "filename": {
      "title": "Filename",
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
    },
    "alt_text": {
      "default": null,
      "title": "Alt Text",
      "type": "string"
    }
  },
  "required": [
    "source_url",
    "filename"
  ],
  "title": "video_uploadArguments",
  "type": "object"
}
```

</details>

<a id="tool-video_get_oembed-c101d251"></a>

## video_get_oembed

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Resolve oEmbed data for a video URL. Returns provider, title, thumbnail, dimensions, and embed HTML.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4194-L4202) · Schema: tools/list.

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
    "maxwidth": {
      "default": null,
      "title": "Maxwidth",
      "type": "integer"
    },
    "maxheight": {
      "default": null,
      "title": "Maxheight",
      "type": "integer"
    }
  },
  "required": [
    "url"
  ],
  "title": "video_get_oembedArguments",
  "type": "object"
}
```

</details>

<a id="tool-video_playlist_create-bf7d0598"></a>

## video_playlist_create

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a WordPress video playlist shortcode from media attachment IDs
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4204-L4211) · Schema: tools/list.

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
    "style": {
      "default": "light",
      "title": "Style",
      "type": "string"
    }
  },
  "required": [
    "ids"
  ],
  "title": "video_playlist_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-video_schema_generate-75f3e851"></a>

## video_schema_generate

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Generate VideoObject JSON-LD schema for SEO from video metadata
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4213-L4226) · Schema: tools/list.

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
      "default": null,
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
    "interaction_count": {
      "default": null,
      "title": "Interaction Count",
      "type": "integer"
    }
  },
  "required": [
    "name",
    "description",
    "thumbnail_url"
  ],
  "title": "video_schema_generateArguments",
  "type": "object"
}
```

</details>

<a id="tool-podcast_detect_plugin-e1778860"></a>

## podcast_detect_plugin

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Detect which podcast plugin is installed (PowerPress, Seriously Simple Podcasting, Podlove)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4228-L4232) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "podcast_detect_pluginArguments",
  "type": "object"
}
```

</details>

<a id="tool-podcast_episodes_list-09979189"></a>

## podcast_episodes_list

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List podcast episodes. Auto-detects podcast plugin and fetches episodes.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4234-L4246) · Schema: tools/list.

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
      "default": "date",
      "title": "Orderby",
      "type": "string"
    },
    "order": {
      "default": "desc",
      "title": "Order",
      "type": "string"
    },
    "series": {
      "default": null,
      "title": "Series",
      "type": "string"
    }
  },
  "title": "podcast_episodes_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-podcast_episode_create-6ba21fee"></a>

## podcast_episode_create

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a podcast episode post with audio enclosure metadata
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4248-L4267) · Schema: tools/list.

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
    "audio_url": {
      "title": "Audio Url",
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
      "default": "draft",
      "title": "Status",
      "type": "string"
    },
    "audio_filesize": {
      "default": null,
      "title": "Audio Filesize",
      "type": "integer"
    },
    "duration": {
      "default": null,
      "title": "Duration",
      "type": "string"
    },
    "episode_number": {
      "default": null,
      "title": "Episode Number",
      "type": "integer"
    },
    "season_number": {
      "default": null,
      "title": "Season Number",
      "type": "integer"
    },
    "episode_type": {
      "default": "full",
      "title": "Episode Type",
      "type": "string"
    },
    "explicit": {
      "default": false,
      "title": "Explicit",
      "type": "boolean"
    },
    "featured_media": {
      "default": null,
      "title": "Featured Media",
      "type": "integer"
    },
    "series": {
      "default": null,
      "title": "Series",
      "type": "string"
    },
    "categories": {
      "default": null,
      "items": {},
      "title": "Categories",
      "type": "array"
    }
  },
  "required": [
    "title",
    "audio_url"
  ],
  "title": "podcast_episode_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-podcast_rss_configure-214d7434"></a>

## podcast_rss_configure

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Configure podcast RSS feed settings (title, author, description, artwork, category)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4269-L4288) · Schema: tools/list.

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
    "subtitle": {
      "default": null,
      "title": "Subtitle",
      "type": "string"
    },
    "author_name": {
      "default": null,
      "title": "Author Name",
      "type": "string"
    },
    "description": {
      "default": null,
      "title": "Description",
      "type": "string"
    },
    "owner_name": {
      "default": null,
      "title": "Owner Name",
      "type": "string"
    },
    "owner_email": {
      "default": null,
      "title": "Owner Email",
      "type": "string"
    },
    "image_url": {
      "default": null,
      "title": "Image Url",
      "type": "string"
    },
    "language": {
      "default": "en-us",
      "title": "Language",
      "type": "string"
    },
    "category_1": {
      "default": null,
      "title": "Category 1",
      "type": "string"
    },
    "category_2": {
      "default": null,
      "title": "Category 2",
      "type": "string"
    },
    "explicit": {
      "default": "no",
      "title": "Explicit",
      "type": "string"
    },
    "copyright": {
      "default": null,
      "title": "Copyright",
      "type": "string"
    },
    "complete": {
      "default": false,
      "title": "Complete",
      "type": "boolean"
    },
    "series": {
      "default": null,
      "title": "Series",
      "type": "string"
    }
  },
  "title": "podcast_rss_configureArguments",
  "type": "object"
}
```

</details>

<a id="tool-podcast_submit_directories-9fbabb82"></a>

## podcast_submit_directories

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Get podcast submission URLs and instructions for Apple Podcasts, Spotify, Google Podcasts, and other directories
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4290-L4296) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "feed_url": {
      "title": "Feed Url",
      "type": "string"
    }
  },
  "required": [
    "feed_url"
  ],
  "title": "podcast_submit_directoriesArguments",
  "type": "object"
}
```

</details>

<a id="tool-audio_player_embed-86587aba"></a>

## audio_player_embed

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Generate a WordPress audio player shortcode or HTML5 audio embed
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4298-L4308) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "src": {
      "default": null,
      "title": "Src",
      "type": "string"
    },
    "attachment_id": {
      "default": null,
      "title": "Attachment Id",
      "type": "integer"
    },
    "autoplay": {
      "default": false,
      "title": "Autoplay",
      "type": "boolean"
    },
    "loop": {
      "default": false,
      "title": "Loop",
      "type": "boolean"
    },
    "preload": {
      "default": "metadata",
      "title": "Preload",
      "type": "string"
    }
  },
  "title": "audio_player_embedArguments",
  "type": "object"
}
```

</details>

<a id="tool-audio_playlist_create-77b29ee2"></a>

## audio_playlist_create

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a WordPress audio playlist shortcode from media attachment IDs
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4310-L4321) · Schema: tools/list.

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
    "style": {
      "default": "light",
      "title": "Style",
      "type": "string"
    },
    "tracklist": {
      "default": true,
      "title": "Tracklist",
      "type": "boolean"
    },
    "tracknumbers": {
      "default": true,
      "title": "Tracknumbers",
      "type": "boolean"
    },
    "images": {
      "default": true,
      "title": "Images",
      "type": "boolean"
    },
    "artists": {
      "default": true,
      "title": "Artists",
      "type": "boolean"
    }
  },
  "required": [
    "ids"
  ],
  "title": "audio_playlist_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_whitelabel_login_page_customize-1d087561"></a>

## wp_whitelabel_login_page_customize

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Customize the wp-login.php page — custom logo, background color/image, form styles
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4323-L4339) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "logo_url": {
      "default": null,
      "title": "Logo Url",
      "type": "string"
    },
    "logo_width": {
      "default": 320,
      "title": "Logo Width",
      "type": "integer"
    },
    "logo_height": {
      "default": 80,
      "title": "Logo Height",
      "type": "integer"
    },
    "logo_link": {
      "default": null,
      "title": "Logo Link",
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
    "form_background": {
      "default": null,
      "title": "Form Background",
      "type": "string"
    },
    "text_color": {
      "default": null,
      "title": "Text Color",
      "type": "string"
    },
    "button_color": {
      "default": null,
      "title": "Button Color",
      "type": "string"
    },
    "button_text_color": {
      "default": null,
      "title": "Button Text Color",
      "type": "string"
    },
    "custom_css": {
      "default": null,
      "title": "Custom Css",
      "type": "string"
    }
  },
  "title": "wp_whitelabel_login_page_customizeArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_whitelabel_admin_branding-93e15b76"></a>

## wp_whitelabel_admin_branding

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Set custom admin bar logo, footer text, and dashboard branding
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4341-L4350) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "admin_bar_logo_url": {
      "default": null,
      "title": "Admin Bar Logo Url",
      "type": "string"
    },
    "admin_footer_text": {
      "default": null,
      "title": "Admin Footer Text",
      "type": "string"
    },
    "admin_footer_version": {
      "default": null,
      "title": "Admin Footer Version",
      "type": "string"
    },
    "howdy_replacement": {
      "default": null,
      "title": "Howdy Replacement",
      "type": "string"
    }
  },
  "title": "wp_whitelabel_admin_brandingArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_whitelabel_hide_admin_menus-32926cde"></a>

## wp_whitelabel_hide_admin_menus

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Hide WordPress admin menu items for specific user roles
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4352-L4360) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "menus_to_hide": {
      "items": {},
      "title": "Menus To Hide",
      "type": "array"
    },
    "roles": {
      "default": null,
      "items": {},
      "title": "Roles",
      "type": "array"
    },
    "hide_submenus": {
      "default": null,
      "items": {},
      "title": "Hide Submenus",
      "type": "array"
    }
  },
  "required": [
    "menus_to_hide"
  ],
  "title": "wp_whitelabel_hide_admin_menusArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_whitelabel_hide_admin_notices-effaa999"></a>

## wp_whitelabel_hide_admin_notices

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Suppress plugin nag notices and update banners for non-admin users
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4362-L4371) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "hide_all_notices": {
      "default": false,
      "title": "Hide All Notices",
      "type": "boolean"
    },
    "hide_update_nags": {
      "default": true,
      "title": "Hide Update Nags",
      "type": "boolean"
    },
    "hide_plugin_notices": {
      "default": true,
      "title": "Hide Plugin Notices",
      "type": "boolean"
    },
    "roles": {
      "default": null,
      "items": {},
      "title": "Roles",
      "type": "array"
    }
  },
  "title": "wp_whitelabel_hide_admin_noticesArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_whitelabel_custom_dashboard_widget-081b70da"></a>

## wp_whitelabel_custom_dashboard_widget

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Add a branded custom widget to the WordPress dashboard
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4373-L4383) · Schema: tools/list.

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
    "content": {
      "title": "Content",
      "type": "string"
    },
    "widget_id": {
      "default": "custom_branded_widget",
      "title": "Widget Id",
      "type": "string"
    },
    "position": {
      "default": "normal",
      "title": "Position",
      "type": "string"
    },
    "priority": {
      "default": "high",
      "title": "Priority",
      "type": "string"
    }
  },
  "required": [
    "title",
    "content"
  ],
  "title": "wp_whitelabel_custom_dashboard_widgetArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_whitelabel_admin_color_scheme-5eacd64e"></a>

## wp_whitelabel_admin_color_scheme

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Register and apply a custom admin color scheme
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4385-L4399) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "name": {
      "title": "Name",
      "type": "string"
    },
    "menu_background": {
      "default": null,
      "title": "Menu Background",
      "type": "string"
    },
    "menu_text": {
      "default": null,
      "title": "Menu Text",
      "type": "string"
    },
    "menu_highlight": {
      "default": null,
      "title": "Menu Highlight",
      "type": "string"
    },
    "menu_submenu_bg": {
      "default": null,
      "title": "Menu Submenu Bg",
      "type": "string"
    },
    "notification_color": {
      "default": null,
      "title": "Notification Color",
      "type": "string"
    },
    "link_color": {
      "default": null,
      "title": "Link Color",
      "type": "string"
    },
    "button_color": {
      "default": null,
      "title": "Button Color",
      "type": "string"
    },
    "apply_to_all": {
      "default": false,
      "title": "Apply To All",
      "type": "boolean"
    }
  },
  "required": [
    "name"
  ],
  "title": "wp_whitelabel_admin_color_schemeArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_whitelabel_disable_updates_ui-c32652f6"></a>

## wp_whitelabel_disable_updates_ui

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Hide update notifications and the Updates page from non-admin users
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4401-L4411) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "hide_core_updates": {
      "default": true,
      "title": "Hide Core Updates",
      "type": "boolean"
    },
    "hide_plugin_updates": {
      "default": true,
      "title": "Hide Plugin Updates",
      "type": "boolean"
    },
    "hide_theme_updates": {
      "default": true,
      "title": "Hide Theme Updates",
      "type": "boolean"
    },
    "hide_updates_page": {
      "default": true,
      "title": "Hide Updates Page",
      "type": "boolean"
    },
    "roles": {
      "default": null,
      "items": {},
      "title": "Roles",
      "type": "array"
    }
  },
  "title": "wp_whitelabel_disable_updates_uiArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_whitelabel_remove_wp_branding-0f52a421"></a>

## wp_whitelabel_remove_wp_branding

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] WordPress tool. Remove WordPress references — logo in admin bar, meta generator tag, login page link
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4413-L4423) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "remove_admin_bar_logo": {
      "default": true,
      "title": "Remove Admin Bar Logo",
      "type": "boolean"
    },
    "remove_meta_generator": {
      "default": true,
      "title": "Remove Meta Generator",
      "type": "boolean"
    },
    "remove_login_logo_link": {
      "default": true,
      "title": "Remove Login Logo Link",
      "type": "boolean"
    },
    "remove_dashboard_widgets": {
      "default": true,
      "title": "Remove Dashboard Widgets",
      "type": "boolean"
    },
    "remove_admin_bar_items": {
      "default": null,
      "items": {},
      "title": "Remove Admin Bar Items",
      "type": "array"
    }
  },
  "title": "wp_whitelabel_remove_wp_brandingArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_whitelabel_custom_admin_footer-7e428287"></a>

## wp_whitelabel_custom_admin_footer

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Set custom text for the WordPress admin footer
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4425-L4432) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "left_text": {
      "title": "Left Text",
      "type": "string"
    },
    "right_text": {
      "default": null,
      "title": "Right Text",
      "type": "string"
    }
  },
  "required": [
    "left_text"
  ],
  "title": "wp_whitelabel_custom_admin_footerArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_whitelabel_restrict_admin_access-0f91f95b"></a>

## wp_whitelabel_restrict_admin_access

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Restrict what non-admin roles can see and do in the WordPress admin
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4434-L4445) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "role": {
      "title": "Role",
      "type": "string"
    },
    "allowed_pages": {
      "default": null,
      "items": {},
      "title": "Allowed Pages",
      "type": "array"
    },
    "blocked_pages": {
      "default": null,
      "items": {},
      "title": "Blocked Pages",
      "type": "array"
    },
    "hide_admin_bar": {
      "default": null,
      "title": "Hide Admin Bar",
      "type": "boolean"
    },
    "redirect_on_login": {
      "default": null,
      "title": "Redirect On Login",
      "type": "string"
    },
    "disable_file_editor": {
      "default": true,
      "title": "Disable File Editor",
      "type": "boolean"
    }
  },
  "required": [
    "role"
  ],
  "title": "wp_whitelabel_restrict_admin_accessArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_whitelabel_export_site_report-4a938646"></a>

## wp_whitelabel_export_site_report

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Generate a client-ready site report (plugins, theme, pages, posts, health status)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4447-L4460) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "include_plugins": {
      "default": true,
      "title": "Include Plugins",
      "type": "boolean"
    },
    "include_theme": {
      "default": true,
      "title": "Include Theme",
      "type": "boolean"
    },
    "include_pages": {
      "default": true,
      "title": "Include Pages",
      "type": "boolean"
    },
    "include_posts": {
      "default": true,
      "title": "Include Posts",
      "type": "boolean"
    },
    "include_users": {
      "default": true,
      "title": "Include Users",
      "type": "boolean"
    },
    "include_health": {
      "default": true,
      "title": "Include Health",
      "type": "boolean"
    },
    "brand_name": {
      "default": null,
      "title": "Brand Name",
      "type": "string"
    },
    "client_name": {
      "default": null,
      "title": "Client Name",
      "type": "string"
    }
  },
  "title": "wp_whitelabel_export_site_reportArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_whitelabel_maintenance_page_set-9a32883f"></a>

## wp_whitelabel_maintenance_page_set

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Enable a branded maintenance / coming-soon page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4462-L4477) · Schema: tools/list.

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
    "title": {
      "default": null,
      "title": "Title",
      "type": "string"
    },
    "headline": {
      "default": null,
      "title": "Headline",
      "type": "string"
    },
    "message": {
      "default": null,
      "title": "Message",
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
    "logo_url": {
      "default": null,
      "title": "Logo Url",
      "type": "string"
    },
    "text_color": {
      "default": null,
      "title": "Text Color",
      "type": "string"
    },
    "allow_logged_in": {
      "default": true,
      "title": "Allow Logged In",
      "type": "boolean"
    },
    "retry_after": {
      "default": 3600,
      "title": "Retry After",
      "type": "integer"
    }
  },
  "required": [
    "enabled"
  ],
  "title": "wp_whitelabel_maintenance_page_setArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_shortcodes_list-fdd20ac4"></a>

## wp_shortcodes_list

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. List registered shortcodes (requires a companion plugin or returns guidance on common shortcodes)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4479-L4483) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_shortcodes_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_shortcodes_register-90fdf954"></a>

## wp_shortcodes_register

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Register a shortcode via companion REST endpoint or generate the PHP code to register it
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4485-L4494) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "tag": {
      "title": "Tag",
      "type": "string"
    },
    "callback_code": {
      "default": null,
      "title": "Callback Code",
      "type": "string"
    },
    "attributes": {
      "default": null,
      "items": {},
      "title": "Attributes",
      "type": "array"
    },
    "description": {
      "default": null,
      "title": "Description",
      "type": "string"
    }
  },
  "required": [
    "tag"
  ],
  "title": "wp_shortcodes_registerArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_shortcodes_test_render-ae9b5dd2"></a>

## wp_shortcodes_test_render

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Render a shortcode and return the HTML output (requires companion REST endpoint or returns the shortcode string)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4496-L4503) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "shortcode": {
      "title": "Shortcode",
      "type": "string"
    },
    "post_id": {
      "default": null,
      "title": "Post Id",
      "type": "integer"
    }
  },
  "required": [
    "shortcode"
  ],
  "title": "wp_shortcodes_test_renderArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_block_dev_scaffold-3c1fff48"></a>

## wp_block_dev_scaffold

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Generate a block.json and JS/PHP scaffold for a custom Gutenberg block
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4505-L4518) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "name": {
      "title": "Name",
      "type": "string"
    },
    "title": {
      "title": "Title",
      "type": "string"
    },
    "category": {
      "default": "widgets",
      "title": "Category",
      "type": "string"
    },
    "description": {
      "default": null,
      "title": "Description",
      "type": "string"
    },
    "icon": {
      "default": "block-default",
      "title": "Icon",
      "type": "string"
    },
    "supports": {
      "additionalProperties": true,
      "default": null,
      "title": "Supports",
      "type": "object"
    },
    "attributes": {
      "additionalProperties": true,
      "default": null,
      "title": "Attributes",
      "type": "object"
    },
    "render_type": {
      "default": "static",
      "title": "Render Type",
      "type": "string"
    }
  },
  "required": [
    "name",
    "title"
  ],
  "title": "wp_block_dev_scaffoldArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_block_dev_register_variation-28b67fe9"></a>

## wp_block_dev_register_variation

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Generate code to register a block variation (extending an existing block)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4520-L4534) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "block_name": {
      "title": "Block Name",
      "type": "string"
    },
    "variation_name": {
      "title": "Variation Name",
      "type": "string"
    },
    "variation_title": {
      "title": "Variation Title",
      "type": "string"
    },
    "description": {
      "default": null,
      "title": "Description",
      "type": "string"
    },
    "icon": {
      "default": null,
      "title": "Icon",
      "type": "string"
    },
    "attributes": {
      "additionalProperties": true,
      "default": null,
      "title": "Attributes",
      "type": "object"
    },
    "inner_blocks": {
      "default": null,
      "items": {},
      "title": "Inner Blocks",
      "type": "array"
    },
    "scope": {
      "default": null,
      "items": {},
      "title": "Scope",
      "type": "array"
    },
    "is_default": {
      "default": false,
      "title": "Is Default",
      "type": "boolean"
    }
  },
  "required": [
    "block_name",
    "variation_name",
    "variation_title"
  ],
  "title": "wp_block_dev_register_variationArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_block_dev_register_style-3de6cc67"></a>

## wp_block_dev_register_style

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Generate code to register a custom block style for an existing block
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4536-L4547) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "block_name": {
      "title": "Block Name",
      "type": "string"
    },
    "style_name": {
      "title": "Style Name",
      "type": "string"
    },
    "style_label": {
      "title": "Style Label",
      "type": "string"
    },
    "is_default": {
      "default": false,
      "title": "Is Default",
      "type": "boolean"
    },
    "inline_style": {
      "default": null,
      "title": "Inline Style",
      "type": "string"
    },
    "stylesheet": {
      "default": null,
      "title": "Stylesheet",
      "type": "string"
    }
  },
  "required": [
    "block_name",
    "style_name",
    "style_label"
  ],
  "title": "wp_block_dev_register_styleArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_widget_scaffold_elementor-f7711299"></a>

## wp_widget_scaffold_elementor

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Generate the PHP skeleton for a custom Elementor widget
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4549-L4560) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "widget_name": {
      "title": "Widget Name",
      "type": "string"
    },
    "widget_title": {
      "title": "Widget Title",
      "type": "string"
    },
    "widget_icon": {
      "default": "eicon-code",
      "title": "Widget Icon",
      "type": "string"
    },
    "category": {
      "default": "general",
      "title": "Category",
      "type": "string"
    },
    "controls": {
      "default": null,
      "items": {},
      "title": "Controls",
      "type": "array"
    },
    "sections": {
      "default": "content",
      "items": {},
      "title": "Sections",
      "type": "array"
    }
  },
  "required": [
    "widget_name",
    "widget_title"
  ],
  "title": "wp_widget_scaffold_elementorArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_widget_register_category-2b26edeb"></a>

## wp_widget_register_category

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Generate PHP code to register a custom Elementor widget category
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4562-L4570) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "category_slug": {
      "title": "Category Slug",
      "type": "string"
    },
    "category_title": {
      "title": "Category Title",
      "type": "string"
    },
    "category_icon": {
      "default": "fa fa-plug",
      "title": "Category Icon",
      "type": "string"
    }
  },
  "required": [
    "category_slug",
    "category_title"
  ],
  "title": "wp_widget_register_categoryArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_widget_list_installed-8767b58b"></a>

## wp_widget_list_installed

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. List installed WordPress widgets (classic widgets and block widgets)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4572-L4578) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "type": {
      "default": "all",
      "title": "Type",
      "type": "string"
    }
  },
  "title": "wp_widget_list_installedArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_code_snippets_list-6eadd738"></a>

## wp_code_snippets_list

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. List code snippets from the Code Snippets plugin
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4580-L4588) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
    "type": {
      "default": null,
      "title": "Type",
      "type": "string"
    },
    "active": {
      "default": null,
      "title": "Active",
      "type": "boolean"
    }
  },
  "title": "wp_code_snippets_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_code_snippets_create-c8b64247"></a>

## wp_code_snippets_create

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Create a new code snippet via the Code Snippets plugin
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4590-L4603) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "name": {
      "title": "Name",
      "type": "string"
    },
    "code": {
      "title": "Code",
      "type": "string"
    },
    "description": {
      "default": null,
      "title": "Description",
      "type": "string"
    },
    "type": {
      "default": "php",
      "title": "Type",
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
      "default": false,
      "title": "Active",
      "type": "boolean"
    },
    "tags": {
      "default": null,
      "items": {},
      "title": "Tags",
      "type": "array"
    }
  },
  "required": [
    "name",
    "code"
  ],
  "title": "wp_code_snippets_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_code_snippets_toggle-4bd87aa0"></a>

## wp_code_snippets_toggle

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Activate or deactivate a code snippet
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4605-L4612) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "title": "Id",
      "type": "integer"
    },
    "active": {
      "title": "Active",
      "type": "boolean"
    }
  },
  "required": [
    "id",
    "active"
  ],
  "title": "wp_code_snippets_toggleArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_list_sidebars-8a207369"></a>

## wp_list_sidebars

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] WordPress tool. List all registered WordPress sidebars/widget areas
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4614-L4618) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_list_sidebarsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_sidebar-c949af4a"></a>

## wp_get_sidebar

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get a specific sidebar and its widgets
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4620-L4626) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "sidebar_id": {
      "title": "Sidebar Id",
      "type": "string"
    }
  },
  "required": [
    "sidebar_id"
  ],
  "title": "wp_get_sidebarArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_list_widgets-227e2dd0"></a>

## wp_list_widgets

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] WordPress tool. List all widgets currently placed in sidebars
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4628-L4632) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_list_widgetsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_list_widget_types-0d59b7f6"></a>

## wp_list_widget_types

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] WordPress tool. List all available widget types
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4634-L4638) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_list_widget_typesArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_widget-4910becc"></a>

## wp_get_widget

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get a specific widget by ID
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4640-L4646) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "widget_id": {
      "title": "Widget Id",
      "type": "string"
    }
  },
  "required": [
    "widget_id"
  ],
  "title": "wp_get_widgetArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_create_widget-a43c4c30"></a>

## wp_create_widget

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Add a new widget to a sidebar
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4648-L4656) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "sidebar_id": {
      "title": "Sidebar Id",
      "type": "string"
    },
    "id_base": {
      "title": "Id Base",
      "type": "string"
    },
    "settings": {
      "additionalProperties": true,
      "default": null,
      "title": "Settings",
      "type": "object"
    }
  },
  "required": [
    "sidebar_id",
    "id_base"
  ],
  "title": "wp_create_widgetArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_update_widget-f10d45b6"></a>

## wp_update_widget

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Update an existing widget's settings
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4658-L4666) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "widget_id": {
      "title": "Widget Id",
      "type": "string"
    },
    "settings": {
      "additionalProperties": true,
      "title": "Settings",
      "type": "object"
    },
    "sidebar_id": {
      "default": null,
      "title": "Sidebar Id",
      "type": "string"
    }
  },
  "required": [
    "widget_id",
    "settings"
  ],
  "title": "wp_update_widgetArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_delete_widget-08f0c706"></a>

## wp_delete_widget

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] WordPress tool. Remove a widget from a sidebar
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4668-L4674) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "widget_id": {
      "title": "Widget Id",
      "type": "string"
    }
  },
  "required": [
    "widget_id"
  ],
  "title": "wp_delete_widgetArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_add_text_widget-6801fbe8"></a>

## wp_add_text_widget

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Add a text/HTML widget to a sidebar
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4676-L4685) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "sidebar_id": {
      "title": "Sidebar Id",
      "type": "string"
    },
    "text": {
      "title": "Text",
      "type": "string"
    },
    "title": {
      "default": null,
      "title": "Title",
      "type": "string"
    },
    "filter": {
      "default": false,
      "title": "Filter",
      "type": "boolean"
    }
  },
  "required": [
    "sidebar_id",
    "text"
  ],
  "title": "wp_add_text_widgetArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_add_html_widget-22d8478f"></a>

## wp_add_html_widget

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Add a custom HTML widget to a sidebar
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4687-L4695) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "sidebar_id": {
      "title": "Sidebar Id",
      "type": "string"
    },
    "content": {
      "title": "Content",
      "type": "string"
    },
    "title": {
      "default": null,
      "title": "Title",
      "type": "string"
    }
  },
  "required": [
    "sidebar_id",
    "content"
  ],
  "title": "wp_add_html_widgetArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_add_nav_menu_widget-8b8c8d7e"></a>

## wp_add_nav_menu_widget

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Add a navigation menu widget to a sidebar
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4697-L4705) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "sidebar_id": {
      "title": "Sidebar Id",
      "type": "string"
    },
    "nav_menu": {
      "title": "Nav Menu",
      "type": "integer"
    },
    "title": {
      "default": null,
      "title": "Title",
      "type": "string"
    }
  },
  "required": [
    "sidebar_id",
    "nav_menu"
  ],
  "title": "wp_add_nav_menu_widgetArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_add_search_widget-87b14ebc"></a>

## wp_add_search_widget

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Add a search widget to a sidebar
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4707-L4714) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "sidebar_id": {
      "title": "Sidebar Id",
      "type": "string"
    },
    "title": {
      "default": null,
      "title": "Title",
      "type": "string"
    }
  },
  "required": [
    "sidebar_id"
  ],
  "title": "wp_add_search_widgetArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_add_recent_posts_widget-3079c9a9"></a>

## wp_add_recent_posts_widget

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Add a recent posts widget to a sidebar
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4716-L4725) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "sidebar_id": {
      "title": "Sidebar Id",
      "type": "string"
    },
    "title": {
      "default": null,
      "title": "Title",
      "type": "string"
    },
    "number": {
      "default": 5,
      "title": "Number",
      "type": "integer"
    },
    "show_date": {
      "default": false,
      "title": "Show Date",
      "type": "boolean"
    }
  },
  "required": [
    "sidebar_id"
  ],
  "title": "wp_add_recent_posts_widgetArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_add_categories_widget-817481c9"></a>

## wp_add_categories_widget

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Add a categories widget to a sidebar
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4727-L4737) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "sidebar_id": {
      "title": "Sidebar Id",
      "type": "string"
    },
    "title": {
      "default": null,
      "title": "Title",
      "type": "string"
    },
    "count": {
      "default": false,
      "title": "Count",
      "type": "boolean"
    },
    "hierarchical": {
      "default": false,
      "title": "Hierarchical",
      "type": "boolean"
    },
    "dropdown": {
      "default": false,
      "title": "Dropdown",
      "type": "boolean"
    }
  },
  "required": [
    "sidebar_id"
  ],
  "title": "wp_add_categories_widgetArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_clear_sidebar-98e31ebd"></a>

## wp_clear_sidebar

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] WordPress tool. Remove all widgets from a sidebar
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4739-L4744) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "sidebar_id": {
      "title": "Sidebar Id",
      "type": "string"
    }
  },
  "required": [
    "sidebar_id"
  ],
  "title": "wp_clear_sidebarArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_reorder_sidebar_widgets-9f05c0d8"></a>

## wp_reorder_sidebar_widgets

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Reorder widgets in a sidebar
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4746-L4753) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "sidebar_id": {
      "title": "Sidebar Id",
      "type": "string"
    },
    "widget_ids": {
      "items": {},
      "title": "Widget Ids",
      "type": "array"
    }
  },
  "required": [
    "sidebar_id",
    "widget_ids"
  ],
  "title": "wp_reorder_sidebar_widgetsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wpmcp_generate_helper_plugin-83185db9"></a>

## wpmcp_generate_helper_plugin

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Generate the PHP code for the WPMCP File Bridge helper plugin. Copy-paste into wp-content/plugins/wpmcp-file-bridge/wpmcp-file-bridge.php and activate it — then all file editing tools work.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4755-L4759) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wpmcp_generate_helper_pluginArguments",
  "type": "object"
}
```

</details>

<a id="tool-wpmcp_check_helper_plugin-31defca2"></a>

## wpmcp_check_helper_plugin

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Check if the WPMCP File Bridge helper plugin is installed and active
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4761-L4765) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wpmcp_check_helper_pluginArguments",
  "type": "object"
}
```

</details>

<a id="tool-theme_get_info-634d0cc3"></a>

## theme_get_info

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, wp\_get\_active\_theme.

```text
[READ] Tool tool. Get active theme info: name, version, author, template (parent theme), tags, screenshot
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4767-L4770) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "theme_get_infoArguments",
  "type": "object"
}
```

</details>

<a id="tool-theme_list_all-5b953176"></a>

## theme_list_all

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List all installed themes with status (active/inactive)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4772-L4776) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "theme_list_allArguments",
  "type": "object"
}
```

</details>

<a id="tool-theme_get_all_mods-bc2c95a8"></a>

## theme_get_all_mods

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Get all WordPress theme modifications (theme_mods) for the active theme — all customizer values
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4778-L4782) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "theme_get_all_modsArguments",
  "type": "object"
}
```

</details>

<a id="tool-theme_set_mod-c5eb0834"></a>

## theme_set_mod

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Set a specific theme mod (customizer value) for the active theme
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4784-L4791) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "key": {
      "title": "Key",
      "type": "string"
    },
    "value": {
      "title": "Value",
      "type": "string"
    }
  },
  "required": [
    "key",
    "value"
  ],
  "title": "theme_set_modArguments",
  "type": "object"
}
```

</details>

<a id="tool-theme_delete_mod-2e2bd7a6"></a>

## theme_delete_mod

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] Tool tool. Remove a theme mod (reset to default)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4793-L4799) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "key": {
      "title": "Key",
      "type": "string"
    }
  },
  "required": [
    "key"
  ],
  "title": "theme_delete_modArguments",
  "type": "object"
}
```

</details>

<a id="tool-theme_get_custom_css-4948b94a"></a>

## theme_get_custom_css

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Get the WordPress core Additional CSS (from Customizer → Additional CSS)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4801-L4805) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "theme_get_custom_cssArguments",
  "type": "object"
}
```

</details>

<a id="tool-theme_set_custom_css-dd0256ee"></a>

## theme_set_custom_css

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Set WordPress core Additional CSS — applies site-wide without editing any theme file
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4807-L4814) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

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
  "title": "theme_set_custom_cssArguments",
  "type": "object"
}
```

</details>

<a id="tool-theme_set_site_identity-8bffeb3b"></a>

## theme_set_site_identity

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, \_wp.

```text
[WRITE] Tool tool. Set site title, tagline, site icon, and custom logo via Customizer mods
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4816-L4828) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "site_title": {
      "default": null,
      "title": "Site Title",
      "type": "string"
    },
    "tagline": {
      "default": null,
      "title": "Tagline",
      "type": "string"
    },
    "show_title_tagline": {
      "default": null,
      "title": "Show Title Tagline",
      "type": "boolean"
    },
    "custom_logo": {
      "default": null,
      "title": "Custom Logo",
      "type": "integer"
    },
    "site_icon": {
      "default": null,
      "title": "Site Icon",
      "type": "integer"
    }
  },
  "title": "theme_set_site_identityArguments",
  "type": "object"
}
```

</details>

<a id="tool-theme_set_background-fc87481d"></a>

## theme_set_background

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Set site background color and image via WordPress Customizer
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4830-L4842) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
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
    "background_repeat": {
      "default": null,
      "title": "Background Repeat",
      "type": "string"
    },
    "background_position_x": {
      "default": null,
      "title": "Background Position X",
      "type": "string"
    },
    "background_position_y": {
      "default": null,
      "title": "Background Position Y",
      "type": "string"
    },
    "background_size": {
      "default": null,
      "title": "Background Size",
      "type": "string"
    },
    "background_attachment": {
      "default": null,
      "title": "Background Attachment",
      "type": "string"
    }
  },
  "title": "theme_set_backgroundArguments",
  "type": "object"
}
```

</details>

<a id="tool-theme_set_header-d60b3737"></a>

## theme_set_header

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Set header image and text color via WordPress Customizer
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4844-L4853) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "header_image": {
      "default": null,
      "title": "Header Image",
      "type": "string"
    },
    "header_textcolor": {
      "default": null,
      "title": "Header Textcolor",
      "type": "string"
    },
    "header_image_width": {
      "default": null,
      "title": "Header Image Width",
      "type": "integer"
    },
    "header_image_height": {
      "default": null,
      "title": "Header Image Height",
      "type": "integer"
    }
  },
  "title": "theme_set_headerArguments",
  "type": "object"
}
```

</details>

<a id="tool-theme_list_files-fe7d54a1"></a>

## theme_list_files

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List all files in the active theme directory [requires WPMCP File Bridge plugin]
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4855-L4862) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "recursive": {
      "default": null,
      "title": "Recursive",
      "type": "boolean"
    },
    "theme_slug": {
      "default": null,
      "title": "Theme Slug",
      "type": "string"
    }
  },
  "title": "theme_list_filesArguments",
  "type": "object"
}
```

</details>

<a id="tool-theme_read_file-7ea68382"></a>

## theme_read_file

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Read the content of any file in the active theme [requires WPMCP File Bridge plugin]
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4864-L4871) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "file_path": {
      "title": "File Path",
      "type": "string"
    },
    "theme_slug": {
      "default": null,
      "title": "Theme Slug",
      "type": "string"
    }
  },
  "required": [
    "file_path"
  ],
  "title": "theme_read_fileArguments",
  "type": "object"
}
```

</details>

<a id="tool-theme_write_file-f3521a0d"></a>

## theme_write_file

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Write/overwrite any file in the active theme [requires WPMCP File Bridge plugin]. Creates backup before writing.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4873-L4882) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "file_path": {
      "title": "File Path",
      "type": "string"
    },
    "content": {
      "title": "Content",
      "type": "string"
    },
    "theme_slug": {
      "default": null,
      "title": "Theme Slug",
      "type": "string"
    },
    "create_backup": {
      "default": null,
      "title": "Create Backup",
      "type": "boolean"
    }
  },
  "required": [
    "file_path",
    "content"
  ],
  "title": "theme_write_fileArguments",
  "type": "object"
}
```

</details>

<a id="tool-theme_read_functions_php-58a4dbb7"></a>

## theme_read_functions_php

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Read the active theme's functions.php [requires WPMCP File Bridge plugin]
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4884-L4890) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "theme_slug": {
      "default": null,
      "title": "Theme Slug",
      "type": "string"
    }
  },
  "title": "theme_read_functions_phpArguments",
  "type": "object"
}
```

</details>

<a id="tool-theme_append_to_functions_php-40853982"></a>

## theme_append_to_functions_php

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Append PHP code to the active theme's functions.php [requires WPMCP File Bridge plugin]. Safe — creates backup first.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4892-L4900) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "code": {
      "title": "Code",
      "type": "string"
    },
    "comment": {
      "default": null,
      "title": "Comment",
      "type": "string"
    },
    "theme_slug": {
      "default": null,
      "title": "Theme Slug",
      "type": "string"
    }
  },
  "required": [
    "code"
  ],
  "title": "theme_append_to_functions_phpArguments",
  "type": "object"
}
```

</details>

<a id="tool-theme_write_functions_php-c3f8928a"></a>

## theme_write_functions_php

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Replace the entire functions.php of the active theme [requires WPMCP File Bridge plugin]. Backup created automatically.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4902-L4909) · Schema: tools/list.

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
    "theme_slug": {
      "default": null,
      "title": "Theme Slug",
      "type": "string"
    }
  },
  "required": [
    "content"
  ],
  "title": "theme_write_functions_phpArguments",
  "type": "object"
}
```

</details>

<a id="tool-theme_read_style_css-a5f09c0c"></a>

## theme_read_style_css

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Read the active theme's style.css [requires WPMCP File Bridge plugin]
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4911-L4917) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "theme_slug": {
      "default": null,
      "title": "Theme Slug",
      "type": "string"
    }
  },
  "title": "theme_read_style_cssArguments",
  "type": "object"
}
```

</details>

<a id="tool-theme_write_style_css-1a5c5a4c"></a>

## theme_write_style_css

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Write the active theme's style.css [requires WPMCP File Bridge plugin]. Backup created automatically.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4919-L4926) · Schema: tools/list.

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
    "theme_slug": {
      "default": null,
      "title": "Theme Slug",
      "type": "string"
    }
  },
  "required": [
    "content"
  ],
  "title": "theme_write_style_cssArguments",
  "type": "object"
}
```

</details>

<a id="tool-theme_search_in_files-f8238f05"></a>

## theme_search_in_files

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Search for a string or pattern across all theme files [requires WPMCP File Bridge plugin]
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4928-L4936) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "needle": {
      "title": "Needle",
      "type": "string"
    },
    "extension": {
      "default": "php",
      "title": "Extension",
      "type": "string"
    },
    "theme_slug": {
      "default": null,
      "title": "Theme Slug",
      "type": "string"
    }
  },
  "required": [
    "needle"
  ],
  "title": "theme_search_in_filesArguments",
  "type": "object"
}
```

</details>

<a id="tool-plugin_list_files-482c2bf3"></a>

## plugin_list_files

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List files in a specific plugin directory [requires WPMCP File Bridge plugin]
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4938-L4945) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "plugin_slug": {
      "title": "Plugin Slug",
      "type": "string"
    },
    "recursive": {
      "default": false,
      "title": "Recursive",
      "type": "boolean"
    }
  },
  "required": [
    "plugin_slug"
  ],
  "title": "plugin_list_filesArguments",
  "type": "object"
}
```

</details>

<a id="tool-plugin_read_file-14c3f943"></a>

## plugin_read_file

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Read a file from any plugin directory [requires WPMCP File Bridge plugin]
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4947-L4954) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "plugin_slug": {
      "title": "Plugin Slug",
      "type": "string"
    },
    "file_path": {
      "title": "File Path",
      "type": "string"
    }
  },
  "required": [
    "plugin_slug",
    "file_path"
  ],
  "title": "plugin_read_fileArguments",
  "type": "object"
}
```

</details>

<a id="tool-plugin_write_file-d47c30cc"></a>

## plugin_write_file

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Write a file to a plugin directory [requires WPMCP File Bridge plugin]. Use for custom plugins only.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4956-L4965) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "plugin_slug": {
      "title": "Plugin Slug",
      "type": "string"
    },
    "file_path": {
      "title": "File Path",
      "type": "string"
    },
    "content": {
      "title": "Content",
      "type": "string"
    },
    "create_backup": {
      "default": true,
      "title": "Create Backup",
      "type": "boolean"
    }
  },
  "required": [
    "plugin_slug",
    "file_path",
    "content"
  ],
  "title": "plugin_write_fileArguments",
  "type": "object"
}
```

</details>

<a id="tool-plugin_create_custom-a6817750"></a>

## plugin_create_custom

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a complete new custom plugin from scratch [requires WPMCP File Bridge plugin]
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4967-L4978) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "plugin_name": {
      "title": "Plugin Name",
      "type": "string"
    },
    "plugin_slug": {
      "title": "Plugin Slug",
      "type": "string"
    },
    "description": {
      "default": null,
      "title": "Description",
      "type": "string"
    },
    "version": {
      "default": "1.0.0",
      "title": "Version",
      "type": "string"
    },
    "author": {
      "default": null,
      "title": "Author",
      "type": "string"
    },
    "initial_code": {
      "default": null,
      "title": "Initial Code",
      "type": "string"
    }
  },
  "required": [
    "plugin_name",
    "plugin_slug"
  ],
  "title": "plugin_create_customArguments",
  "type": "object"
}
```

</details>

<a id="tool-mu_plugin_list-52ca52ff"></a>

## mu_plugin_list

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List all Must-Use plugins in wp-content/mu-plugins/ [requires WPMCP File Bridge plugin]
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4980-L4984) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "mu_plugin_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-mu_plugin_read-efcc1b87"></a>

## mu_plugin_read

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Read a Must-Use plugin file [requires WPMCP File Bridge plugin]
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4986-L4992) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "file_name": {
      "title": "File Name",
      "type": "string"
    }
  },
  "required": [
    "file_name"
  ],
  "title": "mu_plugin_readArguments",
  "type": "object"
}
```

</details>

<a id="tool-mu_plugin_write-32fdc7f3"></a>

## mu_plugin_write

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Write a Must-Use plugin file — code runs on every WordPress load, cannot be deactivated [requires WPMCP File Bridge plugin]
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L4994-L5001) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "file_name": {
      "title": "File Name",
      "type": "string"
    },
    "content": {
      "title": "Content",
      "type": "string"
    }
  },
  "required": [
    "file_name",
    "content"
  ],
  "title": "mu_plugin_writeArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_eval_php-5a3b3a2b"></a>

## wp_eval_php

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Execute arbitrary PHP code on the WordPress installation and return output [requires WPMCP File Bridge plugin — admin only]
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5003-L5009) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "code": {
      "title": "Code",
      "type": "string"
    }
  },
  "required": [
    "code"
  ],
  "title": "wp_eval_phpArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_trash_post-2b15e9ec"></a>

## wp_trash_post

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Move a post/page to trash (reversible, not permanent delete)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5011-L5018) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "title": "Id",
      "type": "integer"
    },
    "post_type": {
      "default": "posts",
      "title": "Post Type",
      "type": "string"
    }
  },
  "required": [
    "id"
  ],
  "title": "wp_trash_postArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_restore_from_trash-21e675c0"></a>

## wp_restore_from_trash

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Restore a trashed post/page back to its previous status
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5020-L5028) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "title": "Id",
      "type": "integer"
    },
    "post_type": {
      "default": "posts",
      "title": "Post Type",
      "type": "string"
    },
    "restore_status": {
      "default": "draft",
      "title": "Restore Status",
      "type": "string"
    }
  },
  "required": [
    "id"
  ],
  "title": "wp_restore_from_trashArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_empty_post_trash-295024fc"></a>

## wp_empty_post_trash

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Permanently delete all posts/pages in trash
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5030-L5036) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
  "title": "wp_empty_post_trashArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_set_post_sticky-49188c08"></a>

## wp_set_post_sticky

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Pin/sticky a post (show first in blog listing)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5038-L5045) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "title": "Id",
      "type": "integer"
    },
    "sticky": {
      "default": true,
      "title": "Sticky",
      "type": "boolean"
    }
  },
  "required": [
    "id"
  ],
  "title": "wp_set_post_stickyArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_set_post_password-84822f7d"></a>

## wp_set_post_password

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Set or remove a password on a post/page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5047-L5054) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "title": "Id",
      "type": "integer"
    },
    "password": {
      "default": null,
      "title": "Password",
      "type": "string"
    }
  },
  "required": [
    "id"
  ],
  "title": "wp_set_post_passwordArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_set_post_format-cede982d"></a>

## wp_set_post_format

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Set the post format (standard, aside, gallery, image, link, quote, status, video, audio, chat)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5056-L5063) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "title": "Id",
      "type": "integer"
    },
    "format": {
      "title": "Format",
      "type": "string"
    }
  },
  "required": [
    "id",
    "format"
  ],
  "title": "wp_set_post_formatArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_set_post_comment_status-84056202"></a>

## wp_set_post_comment_status

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Enable or disable comments on a specific post/page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5065-L5072) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "title": "Id",
      "type": "integer"
    },
    "comment_status": {
      "title": "Comment Status",
      "type": "string"
    }
  },
  "required": [
    "id",
    "comment_status"
  ],
  "title": "wp_set_post_comment_statusArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_set_post_ping_status-c9b30528"></a>

## wp_set_post_ping_status

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Enable or disable pingbacks/trackbacks on a specific post
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5074-L5081) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "title": "Id",
      "type": "integer"
    },
    "ping_status": {
      "title": "Ping Status",
      "type": "string"
    }
  },
  "required": [
    "id",
    "ping_status"
  ],
  "title": "wp_set_post_ping_statusArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_set_post_slug-b8b6ece3"></a>

## wp_set_post_slug

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Change the URL slug (permalink) of a post/page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5083-L5091) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "title": "Id",
      "type": "integer"
    },
    "slug": {
      "title": "Slug",
      "type": "string"
    },
    "post_type": {
      "default": "posts",
      "title": "Post Type",
      "type": "string"
    }
  },
  "required": [
    "id",
    "slug"
  ],
  "title": "wp_set_post_slugArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_set_post_excerpt-6fbb4194"></a>

## wp_set_post_excerpt

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Set or update the excerpt of a post
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5093-L5100) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "title": "Id",
      "type": "integer"
    },
    "excerpt": {
      "default": null,
      "title": "Excerpt",
      "type": "string"
    }
  },
  "required": [
    "id"
  ],
  "title": "wp_set_post_excerptArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_set_post_author-fa49ac25"></a>

## wp_set_post_author

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Change the author of a post
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5102-L5109) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "title": "Id",
      "type": "integer"
    },
    "author_id": {
      "title": "Author Id",
      "type": "integer"
    }
  },
  "required": [
    "id",
    "author_id"
  ],
  "title": "wp_set_post_authorArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_set_post_date-f29508bf"></a>

## wp_set_post_date

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Change the publish date of a post (schedule or backdate)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5111-L5118) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "title": "Id",
      "type": "integer"
    },
    "date": {
      "title": "Date",
      "type": "string"
    }
  },
  "required": [
    "id",
    "date"
  ],
  "title": "wp_set_post_dateArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_set_post_parent-384729cb"></a>

## wp_set_post_parent

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Set parent page for a page (hierarchy)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5120-L5127) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "title": "Id",
      "type": "integer"
    },
    "parent_id": {
      "default": null,
      "title": "Parent Id",
      "type": "integer"
    }
  },
  "required": [
    "id"
  ],
  "title": "wp_set_post_parentArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_set_post_menu_order-448b1f95"></a>

## wp_set_post_menu_order

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Set menu_order (page order) for a page or custom post
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5129-L5136) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "title": "Id",
      "type": "integer"
    },
    "menu_order": {
      "title": "Menu Order",
      "type": "integer"
    }
  },
  "required": [
    "id",
    "menu_order"
  ],
  "title": "wp_set_post_menu_orderArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_restore_post_revision-87f8b2e3"></a>

## wp_restore_post_revision

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Restore a post to a specific revision
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5138-L5145) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_id": {
      "title": "Post Id",
      "type": "integer"
    },
    "revision_id": {
      "title": "Revision Id",
      "type": "integer"
    }
  },
  "required": [
    "post_id",
    "revision_id"
  ],
  "title": "wp_restore_post_revisionArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_delete_all_revisions-30c5217e"></a>

## wp_delete_all_revisions

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] WordPress tool. Delete all revisions for a post
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5147-L5153) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
  "title": "wp_delete_all_revisionsArguments",
  "type": "object"
}
```

</details>
