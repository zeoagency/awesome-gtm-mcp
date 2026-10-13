# RoyAzran/mcp-ads: supporting and other-product tools

[Provider inventory](royazran--mcp-ads.md) · [Global tool index](../TOOL_INDEX.md)

Tools 2101–2250 of 3131. Exact schemas from the same upstream snapshot.

<a id="tool-wp_wpbakery_set_data-8d706a03"></a>

## wp_wpbakery_set_data

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Set WPBakery shortcode content on a post
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1905-L1913) · Schema: tools/list.

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
    "content": {
      "title": "Content",
      "type": "string"
    },
    "post_type": {
      "default": "page",
      "title": "Post Type",
      "type": "string"
    }
  },
  "required": [
    "post_id",
    "content"
  ],
  "title": "wp_wpbakery_set_dataArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_list_pages-a2e7e4a3"></a>

## wp_list_pages

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, params.setdefault, \_wp().get, \_wp.

```text
[READ] WordPress tool. List all WordPress pages with filters
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1915-L1935) · Schema: tools/list.

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
    "parent": {
      "default": null,
      "title": "Parent",
      "type": "integer"
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
  "title": "wp_list_pagesArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_page-a90822f8"></a>

## wp_get_page

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] WordPress tool. Get a single page by ID with full content and meta
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1937-L1942) · Schema: tools/list.

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
  "title": "wp_get_pageArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_create_page-eee1e569"></a>

## wp_create_page

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Create a new WordPress page with template, parent, Elementor or Gutenberg content
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1944-L1962) · Schema: tools/list.

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
      "default": null,
      "title": "Content",
      "type": "string"
    },
    "status": {
      "default": "draft",
      "title": "Status",
      "type": "string"
    },
    "slug": {
      "default": null,
      "title": "Slug",
      "type": "string"
    },
    "parent": {
      "default": null,
      "title": "Parent",
      "type": "integer"
    },
    "menu_order": {
      "default": null,
      "title": "Menu Order",
      "type": "integer"
    },
    "template": {
      "default": null,
      "title": "Template",
      "type": "string"
    },
    "featured_media": {
      "default": null,
      "title": "Featured Media",
      "type": "integer"
    },
    "meta": {
      "additionalProperties": true,
      "default": null,
      "title": "Meta",
      "type": "object"
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
    },
    "yoast_focus_keyword": {
      "default": null,
      "title": "Yoast Focus Keyword",
      "type": "string"
    },
    "comment_status": {
      "default": "closed",
      "title": "Comment Status",
      "type": "string"
    }
  },
  "required": [
    "title"
  ],
  "title": "wp_create_pageArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_update_page-25e87d1b"></a>

## wp_update_page

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Update any field of an existing page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1964-L1982) · Schema: tools/list.

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
    "slug": {
      "default": null,
      "title": "Slug",
      "type": "string"
    },
    "parent": {
      "default": null,
      "title": "Parent",
      "type": "integer"
    },
    "menu_order": {
      "default": null,
      "title": "Menu Order",
      "type": "integer"
    },
    "template": {
      "default": null,
      "title": "Template",
      "type": "string"
    },
    "featured_media": {
      "default": null,
      "title": "Featured Media",
      "type": "integer"
    },
    "meta": {
      "additionalProperties": true,
      "default": null,
      "title": "Meta",
      "type": "object"
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
    },
    "yoast_focus_keyword": {
      "default": null,
      "title": "Yoast Focus Keyword",
      "type": "string"
    }
  },
  "required": [
    "id"
  ],
  "title": "wp_update_pageArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_delete_page-d20c2edd"></a>

## wp_delete_page

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] WordPress tool. Delete or trash a page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1984-L1992) · Schema: tools/list.

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
    "force": {
      "default": false,
      "title": "Force",
      "type": "boolean"
    }
  },
  "required": [
    "id"
  ],
  "title": "wp_delete_pageArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_set_homepage-1a5f7550"></a>

## wp_set_homepage

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Set a page as the site homepage (updates reading settings)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1994-L2001) · Schema: tools/list.

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
    "posts_page_id": {
      "default": null,
      "title": "Posts Page Id",
      "type": "integer"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "wp_set_homepageArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_page_hierarchy-c510101c"></a>

## wp_get_page_hierarchy

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get pages as a nested tree structure showing parent-child relationships
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2003-L2007) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_get_page_hierarchyArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_create_landing_page-1265c08f"></a>

## wp_create_landing_page

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Create a complete landing page with Elementor-ready setup and full SEO configuration
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2009-L2022) · Schema: tools/list.

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
    "slug": {
      "default": null,
      "title": "Slug",
      "type": "string"
    },
    "template": {
      "default": "elementor_header_footer",
      "title": "Template",
      "type": "string"
    },
    "status": {
      "default": "draft",
      "title": "Status",
      "type": "string"
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
    },
    "yoast_focus_keyword": {
      "default": null,
      "title": "Yoast Focus Keyword",
      "type": "string"
    },
    "elementor_json": {
      "default": null,
      "title": "Elementor Json",
      "type": "string"
    }
  },
  "required": [
    "title"
  ],
  "title": "wp_create_landing_pageArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_page_templates-19b26f9f"></a>

## wp_get_page_templates

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. List all available page templates for the active theme
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2024-L2028) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_get_page_templatesArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_duplicate_page-6cdea8a6"></a>

## wp_duplicate_page

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Duplicate a page as a new draft
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2030-L2038) · Schema: tools/list.

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
    "new_title": {
      "default": null,
      "title": "New Title",
      "type": "string"
    },
    "status": {
      "default": "draft",
      "title": "Status",
      "type": "string"
    }
  },
  "required": [
    "id"
  ],
  "title": "wp_duplicate_pageArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_page_by_slug-9a1ec9ac"></a>

## wp_get_page_by_slug

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Find a page by its slug/URL path
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2040-L2046) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "slug": {
      "title": "Slug",
      "type": "string"
    }
  },
  "required": [
    "slug"
  ],
  "title": "wp_get_page_by_slugArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_set_page_template-04a8a081"></a>

## wp_set_page_template

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Change the template of an existing page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2048-L2055) · Schema: tools/list.

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
    "template": {
      "title": "Template",
      "type": "string"
    }
  },
  "required": [
    "id",
    "template"
  ],
  "title": "wp_set_page_templateArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_payments_gateways_list-7eb815a8"></a>

## wp_payments_gateways_list

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. List all configured WooCommerce payment gateways
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2057-L2061) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_payments_gateways_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_payments_gateway_get-77251ad9"></a>

## wp_payments_gateway_get

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get a single payment gateway configuration by ID
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2063-L2069) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "title": "Id",
      "type": "string"
    }
  },
  "required": [
    "id"
  ],
  "title": "wp_payments_gateway_getArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_payments_gateway_update-f6d76d7e"></a>

## wp_payments_gateway_update

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Enable/disable a payment gateway and update its settings
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2071-L2081) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "title": "Id",
      "type": "string"
    },
    "enabled": {
      "default": null,
      "title": "Enabled",
      "type": "boolean"
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
  "title": "wp_payments_gateway_updateArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_payments_stripe_configure-be644240"></a>

## wp_payments_stripe_configure

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Configure WooCommerce Stripe gateway settings
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2083-L2099) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
    "testmode": {
      "default": null,
      "title": "Testmode",
      "type": "string"
    },
    "publishable_key": {
      "default": null,
      "title": "Publishable Key",
      "type": "string"
    },
    "secret_key": {
      "default": null,
      "title": "Secret Key",
      "type": "string"
    },
    "test_publishable_key": {
      "default": null,
      "title": "Test Publishable Key",
      "type": "string"
    },
    "test_secret_key": {
      "default": null,
      "title": "Test Secret Key",
      "type": "string"
    },
    "webhook_secret": {
      "default": null,
      "title": "Webhook Secret",
      "type": "string"
    },
    "capture": {
      "default": null,
      "title": "Capture",
      "type": "string"
    },
    "payment_request": {
      "default": null,
      "title": "Payment Request",
      "type": "string"
    },
    "saved_cards": {
      "default": null,
      "title": "Saved Cards",
      "type": "string"
    },
    "statement_descriptor": {
      "default": null,
      "title": "Statement Descriptor",
      "type": "string"
    }
  },
  "title": "wp_payments_stripe_configureArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_payments_paypal_configure-65feff57"></a>

## wp_payments_paypal_configure

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Configure WooCommerce PayPal gateway settings
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2101-L2117) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
    "title": {
      "default": null,
      "title": "Title",
      "type": "string"
    },
    "email": {
      "default": null,
      "title": "Email",
      "type": "string"
    },
    "testmode": {
      "default": null,
      "title": "Testmode",
      "type": "string"
    },
    "api_username": {
      "default": null,
      "title": "Api Username",
      "type": "string"
    },
    "api_password": {
      "default": null,
      "title": "Api Password",
      "type": "string"
    },
    "api_signature": {
      "default": null,
      "title": "Api Signature",
      "type": "string"
    },
    "sandbox_api_username": {
      "default": null,
      "title": "Sandbox Api Username",
      "type": "string"
    },
    "sandbox_api_password": {
      "default": null,
      "title": "Sandbox Api Password",
      "type": "string"
    },
    "sandbox_api_signature": {
      "default": null,
      "title": "Sandbox Api Signature",
      "type": "string"
    },
    "ipn_notification": {
      "default": null,
      "title": "Ipn Notification",
      "type": "string"
    }
  },
  "title": "wp_payments_paypal_configureArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_payments_cardcom_configure-5223d3ce"></a>

## wp_payments_cardcom_configure

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Configure CardCom Israeli payment gateway (terminal number, API credentials)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2119-L2132) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
    "terminal_number": {
      "default": null,
      "title": "Terminal Number",
      "type": "string"
    },
    "api_name": {
      "default": null,
      "title": "Api Name",
      "type": "string"
    },
    "api_password": {
      "default": null,
      "title": "Api Password",
      "type": "string"
    },
    "operation": {
      "default": null,
      "title": "Operation",
      "type": "string"
    },
    "max_payments": {
      "default": null,
      "title": "Max Payments",
      "type": "integer"
    },
    "language": {
      "default": null,
      "title": "Language",
      "type": "string"
    },
    "testmode": {
      "default": null,
      "title": "Testmode",
      "type": "string"
    }
  },
  "title": "wp_payments_cardcom_configureArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_payments_tranzila_configure-e0f34a44"></a>

## wp_payments_tranzila_configure

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Configure Tranzila Israeli payment gateway
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2134-L2145) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
    "terminal_name": {
      "default": null,
      "title": "Terminal Name",
      "type": "string"
    },
    "terminal_password": {
      "default": null,
      "title": "Terminal Password",
      "type": "string"
    },
    "max_payments": {
      "default": null,
      "title": "Max Payments",
      "type": "integer"
    },
    "currency": {
      "default": null,
      "title": "Currency",
      "type": "string"
    },
    "testmode": {
      "default": null,
      "title": "Testmode",
      "type": "string"
    }
  },
  "title": "wp_payments_tranzila_configureArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_payments_icredit_configure-4eac6b08"></a>

## wp_payments_icredit_configure

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Configure iCredit Israeli payment gateway
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2147-L2158) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
    "group_private_token": {
      "default": null,
      "title": "Group Private Token",
      "type": "string"
    },
    "credentials_key": {
      "default": null,
      "title": "Credentials Key",
      "type": "string"
    },
    "max_payments": {
      "default": null,
      "title": "Max Payments",
      "type": "integer"
    },
    "currency": {
      "default": "ILS",
      "title": "Currency",
      "type": "string"
    },
    "testmode": {
      "default": null,
      "title": "Testmode",
      "type": "string"
    }
  },
  "title": "wp_payments_icredit_configureArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_payments_pelecard_configure-eedc2e36"></a>

## wp_payments_pelecard_configure

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Configure Pelecard Israeli payment gateway
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2160-L2172) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
    "terminal": {
      "default": null,
      "title": "Terminal",
      "type": "string"
    },
    "user": {
      "default": null,
      "title": "User",
      "type": "string"
    },
    "password": {
      "default": null,
      "title": "Password",
      "type": "string"
    },
    "max_payments": {
      "default": null,
      "title": "Max Payments",
      "type": "integer"
    },
    "currency": {
      "default": "ILS",
      "title": "Currency",
      "type": "string"
    },
    "testmode": {
      "default": null,
      "title": "Testmode",
      "type": "string"
    }
  },
  "title": "wp_payments_pelecard_configureArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_payments_meshulam_configure-903567a6"></a>

## wp_payments_meshulam_configure

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Configure Grow/Meshulam Israeli payment gateway
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2174-L2186) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
    "page_id": {
      "default": null,
      "title": "Page Id",
      "type": "string"
    },
    "api_key": {
      "default": null,
      "title": "Api Key",
      "type": "string"
    },
    "api_secret": {
      "default": null,
      "title": "Api Secret",
      "type": "string"
    },
    "max_payments": {
      "default": null,
      "title": "Max Payments",
      "type": "integer"
    },
    "bit_enabled": {
      "default": null,
      "title": "Bit Enabled",
      "type": "string"
    },
    "testmode": {
      "default": null,
      "title": "Testmode",
      "type": "string"
    }
  },
  "title": "wp_payments_meshulam_configureArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_payments_payplus_configure-1fa288bf"></a>

## wp_payments_payplus_configure

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Configure PayPlus Israeli payment gateway
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2188-L2200) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
    "api_key": {
      "default": null,
      "title": "Api Key",
      "type": "string"
    },
    "secret_key": {
      "default": null,
      "title": "Secret Key",
      "type": "string"
    },
    "payment_page_uid": {
      "default": null,
      "title": "Payment Page Uid",
      "type": "string"
    },
    "max_payments": {
      "default": null,
      "title": "Max Payments",
      "type": "integer"
    },
    "currency": {
      "default": "ILS",
      "title": "Currency",
      "type": "string"
    },
    "testmode": {
      "default": null,
      "title": "Testmode",
      "type": "string"
    }
  },
  "title": "wp_payments_payplus_configureArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_payments_yaad_sarig_configure-54203309"></a>

## wp_payments_yaad_sarig_configure

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Configure Yaad Sarig (yaad.net) Israeli payment gateway
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2202-L2214) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
    "terminal_id": {
      "default": null,
      "title": "Terminal Id",
      "type": "string"
    },
    "api_key": {
      "default": null,
      "title": "Api Key",
      "type": "string"
    },
    "passp": {
      "default": null,
      "title": "Passp",
      "type": "string"
    },
    "max_payments": {
      "default": null,
      "title": "Max Payments",
      "type": "integer"
    },
    "currency": {
      "default": "ILS",
      "title": "Currency",
      "type": "string"
    },
    "testmode": {
      "default": null,
      "title": "Testmode",
      "type": "string"
    }
  },
  "title": "wp_payments_yaad_sarig_configureArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_payments_max_configure-8a89c57b"></a>

## wp_payments_max_configure

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Configure Max (Leumi Card) Israeli payment gateway
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2216-L2227) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
    "terminal_number": {
      "default": null,
      "title": "Terminal Number",
      "type": "string"
    },
    "api_user": {
      "default": null,
      "title": "Api User",
      "type": "string"
    },
    "api_password": {
      "default": null,
      "title": "Api Password",
      "type": "string"
    },
    "max_payments": {
      "default": null,
      "title": "Max Payments",
      "type": "integer"
    },
    "testmode": {
      "default": null,
      "title": "Testmode",
      "type": "string"
    }
  },
  "title": "wp_payments_max_configureArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_payments_bit_configure-b5d10e26"></a>

## wp_payments_bit_configure

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Configure Bit payment gateway (Israeli mobile payment)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2229-L2238) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
    "business_id": {
      "default": null,
      "title": "Business Id",
      "type": "string"
    },
    "api_key": {
      "default": null,
      "title": "Api Key",
      "type": "string"
    },
    "testmode": {
      "default": null,
      "title": "Testmode",
      "type": "string"
    }
  },
  "title": "wp_payments_bit_configureArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_shipping_israel_post_configure-14096fc2"></a>

## wp_shipping_israel_post_configure

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Configure Israel Post (doar Israel) shipping method settings
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2240-L2252) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
    "title": {
      "default": "Israel Post",
      "title": "Title",
      "type": "string"
    },
    "api_key": {
      "default": null,
      "title": "Api Key",
      "type": "string"
    },
    "default_weight": {
      "default": null,
      "title": "Default Weight",
      "type": "integer"
    },
    "domestic_enabled": {
      "default": null,
      "title": "Domestic Enabled",
      "type": "boolean"
    },
    "registered_mail": {
      "default": null,
      "title": "Registered Mail",
      "type": "boolean"
    },
    "ems_enabled": {
      "default": null,
      "title": "Ems Enabled",
      "type": "boolean"
    }
  },
  "title": "wp_shipping_israel_post_configureArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_shipping_chita_configure-82e3dedf"></a>

## wp_shipping_chita_configure

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Configure Chita delivery service shipping method for Israel
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2254-L2265) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
    "title": {
      "default": "Chita Delivery",
      "title": "Title",
      "type": "string"
    },
    "api_key": {
      "default": null,
      "title": "Api Key",
      "type": "string"
    },
    "api_secret": {
      "default": null,
      "title": "Api Secret",
      "type": "string"
    },
    "auto_create_shipment": {
      "default": null,
      "title": "Auto Create Shipment",
      "type": "boolean"
    },
    "default_package_size": {
      "default": null,
      "title": "Default Package Size",
      "type": "string"
    }
  },
  "title": "wp_shipping_chita_configureArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_shipping_boxit_configure-d5d024fb"></a>

## wp_shipping_boxit_configure

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Configure Box-It (locker pickup) shipping method for Israel
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2267-L2277) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
    "title": {
      "default": "Box-It Locker",
      "title": "Title",
      "type": "string"
    },
    "api_key": {
      "default": null,
      "title": "Api Key",
      "type": "string"
    },
    "store_id": {
      "default": null,
      "title": "Store Id",
      "type": "string"
    },
    "show_map": {
      "default": null,
      "title": "Show Map",
      "type": "boolean"
    }
  },
  "title": "wp_shipping_boxit_configureArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_shipping_hfd_configure-b0745e15"></a>

## wp_shipping_hfd_configure

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Configure HFD (Hol Fash Delivery) express shipping for Israel
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2279-L2290) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
    "title": {
      "default": "HFD Express",
      "title": "Title",
      "type": "string"
    },
    "api_key": {
      "default": null,
      "title": "Api Key",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "string"
    },
    "auto_create_shipment": {
      "default": null,
      "title": "Auto Create Shipment",
      "type": "boolean"
    },
    "same_day_cutoff": {
      "default": null,
      "title": "Same Day Cutoff",
      "type": "string"
    }
  },
  "title": "wp_shipping_hfd_configureArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_shipping_baldar_configure-6894cc9b"></a>

## wp_shipping_baldar_configure

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Configure Baldar Express delivery shipping method for Israel
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2292-L2302) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
    "title": {
      "default": "Baldar Express",
      "title": "Title",
      "type": "string"
    },
    "api_key": {
      "default": null,
      "title": "Api Key",
      "type": "string"
    },
    "branch_id": {
      "default": null,
      "title": "Branch Id",
      "type": "string"
    },
    "auto_create_shipment": {
      "default": null,
      "title": "Auto Create Shipment",
      "type": "boolean"
    }
  },
  "title": "wp_shipping_baldar_configureArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_accounting_greeninvoice_configure-34787cf9"></a>

## wp_accounting_greeninvoice_configure

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Configure Green Invoice Israeli accounting/invoicing integration
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2304-L2316) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
    "api_key": {
      "default": null,
      "title": "Api Key",
      "type": "string"
    },
    "api_secret": {
      "default": null,
      "title": "Api Secret",
      "type": "string"
    },
    "auto_create_invoice": {
      "default": null,
      "title": "Auto Create Invoice",
      "type": "boolean"
    },
    "document_type": {
      "default": "invoice_receipt",
      "title": "Document Type",
      "type": "string"
    },
    "language": {
      "default": "he",
      "title": "Language",
      "type": "string"
    },
    "include_tax": {
      "default": true,
      "title": "Include Tax",
      "type": "boolean"
    }
  },
  "title": "wp_accounting_greeninvoice_configureArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_accounting_morning_configure-0a3cedfb"></a>

## wp_accounting_morning_configure

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Configure Morning (Heshbonit) Israeli invoicing integration
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2318-L2329) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
    "api_key": {
      "default": null,
      "title": "Api Key",
      "type": "string"
    },
    "api_secret": {
      "default": null,
      "title": "Api Secret",
      "type": "string"
    },
    "auto_create_invoice": {
      "default": null,
      "title": "Auto Create Invoice",
      "type": "boolean"
    },
    "document_type": {
      "default": null,
      "title": "Document Type",
      "type": "string"
    },
    "send_email": {
      "default": null,
      "title": "Send Email",
      "type": "boolean"
    }
  },
  "title": "wp_accounting_morning_configureArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_accounting_hashavshevet_configure-9d2fdf9e"></a>

## wp_accounting_hashavshevet_configure

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Configure Hashavshevet (Wizcount) Israeli accounting integration
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2331-L2341) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
    "company_id": {
      "default": null,
      "title": "Company Id",
      "type": "string"
    },
    "api_key": {
      "default": null,
      "title": "Api Key",
      "type": "string"
    },
    "auto_export": {
      "default": null,
      "title": "Auto Export",
      "type": "boolean"
    },
    "account_code": {
      "default": null,
      "title": "Account Code",
      "type": "string"
    }
  },
  "title": "wp_accounting_hashavshevet_configureArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_accounting_ezcount_configure-e59744c1"></a>

## wp_accounting_ezcount_configure

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Configure EZcount Israeli invoicing integration
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2343-L2354) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
    "api_key": {
      "default": null,
      "title": "Api Key",
      "type": "string"
    },
    "api_email": {
      "default": null,
      "title": "Api Email",
      "type": "string"
    },
    "auto_create_invoice": {
      "default": null,
      "title": "Auto Create Invoice",
      "type": "boolean"
    },
    "document_type": {
      "default": null,
      "title": "Document Type",
      "type": "string"
    },
    "language": {
      "default": "he",
      "title": "Language",
      "type": "string"
    }
  },
  "title": "wp_accounting_ezcount_configureArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_accounting_rivhit_configure-e2e0d960"></a>

## wp_accounting_rivhit_configure

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Configure Rivhit (Profit) Israeli accounting integration
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2356-L2367) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
    "api_token": {
      "default": null,
      "title": "Api Token",
      "type": "string"
    },
    "company_id": {
      "default": null,
      "title": "Company Id",
      "type": "string"
    },
    "auto_create_invoice": {
      "default": null,
      "title": "Auto Create Invoice",
      "type": "boolean"
    },
    "document_type": {
      "default": null,
      "title": "Document Type",
      "type": "string"
    },
    "send_copy": {
      "default": null,
      "title": "Send Copy",
      "type": "boolean"
    }
  },
  "title": "wp_accounting_rivhit_configureArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_clear_all_caches-eefaecad"></a>

## wp_clear_all_caches

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, \_wp.

```text
[WRITE] WordPress tool. Clear all caches on the site (Elementor, WP Rocket, W3TC, WP Super Cache, LiteSpeed, Redis). Requires wp-mcp companion plugin.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2369-L2372) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_clear_all_cachesArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_clear_elementor_cache-bf56ec2e"></a>

## wp_clear_elementor_cache

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] WordPress tool. Clear Elementor CSS/file cache
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2374-L2378) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_clear_elementor_cacheArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_clear_wp_rocket_cache-855cf178"></a>

## wp_clear_wp_rocket_cache

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, \_wp.

```text
[WRITE] WordPress tool. Clear WP Rocket page cache. Requires wp-mcp companion plugin.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2380-L2389) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "url": {
      "default": null,
      "title": "Url",
      "type": "string"
    },
    "lang": {
      "default": null,
      "title": "Lang",
      "type": "string"
    }
  },
  "title": "wp_clear_wp_rocket_cacheArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_clear_w3tc_cache-e8ad9852"></a>

## wp_clear_w3tc_cache

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, \_wp.

```text
[WRITE] WordPress tool. Clear W3 Total Cache page and object cache. Requires wp-mcp companion plugin.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2391-L2394) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_clear_w3tc_cacheArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_clear_litespeed_cache-1582c839"></a>

## wp_clear_litespeed_cache

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, \_wp.

```text
[WRITE] WordPress tool. Purge LiteSpeed Cache. Requires wp-mcp companion plugin.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2396-L2399) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_clear_litespeed_cacheArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_clear_object_cache-39f5cebf"></a>

## wp_clear_object_cache

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, \_wp.

```text
[WRITE] WordPress tool. Clear WordPress object/transient cache. Requires wp-mcp companion plugin.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2401-L2404) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_clear_object_cacheArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_database_size-1b721470"></a>

## wp_get_database_size

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get WordPress database table sizes and total DB size
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2406-L2410) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_get_database_sizeArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_autoloaded_options_size-3f95e185"></a>

## wp_get_autoloaded_options_size

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Check size of autoloaded WordPress options (can slow down site if too large)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2412-L2416) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_get_autoloaded_options_sizeArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_cleanup_post_revisions-4dd8aa44"></a>

## wp_cleanup_post_revisions

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get info about post revisions and cleanup instructions
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2418-L2424) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "days_old": {
      "default": 30,
      "title": "Days Old",
      "type": "integer"
    }
  },
  "title": "wp_cleanup_post_revisionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_cleanup_spam_comments-701620d6"></a>

## wp_cleanup_spam_comments

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Delete spam and trashed comments
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2426-L2430) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_cleanup_spam_commentsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_media_without_alt-81331b9e"></a>

## wp_get_media_without_alt

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Find media images that are missing alt text (hurts SEO)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2432-L2438) · Schema: tools/list.

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
  "title": "wp_get_media_without_altArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_large_images-d889683c"></a>

## wp_get_large_images

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Find images that are unusually large in file size or dimensions
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2440-L2447) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "min_size_kb": {
      "default": 500,
      "title": "Min Size Kb",
      "type": "integer"
    },
    "per_page": {
      "default": 20,
      "title": "Per Page",
      "type": "integer"
    }
  },
  "title": "wp_get_large_imagesArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_enable_lazy_loading-187671a5"></a>

## wp_enable_lazy_loading

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Get instructions to enable lazy loading for images and iframes
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2449-L2453) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_enable_lazy_loadingArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_configure_cdn-80923003"></a>

## wp_configure_cdn

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Configure CDN URL for media assets (updates settings for supported plugins)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2455-L2462) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "cdn_url": {
      "title": "Cdn Url",
      "type": "string"
    },
    "plugin": {
      "default": "auto",
      "title": "Plugin",
      "type": "string"
    }
  },
  "required": [
    "cdn_url"
  ],
  "title": "wp_configure_cdnArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_optimize_database-814ab865"></a>

## wp_optimize_database

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Run database optimization (optimize tables, clean orphaned data) via available plugin
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2464-L2468) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_optimize_databaseArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_slow_queries-bd8c41bb"></a>

## wp_get_slow_queries

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get information about slow queries (requires Query Monitor plugin)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2470-L2474) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_get_slow_queriesArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_cache_config-6f2b9980"></a>

## wp_get_cache_config

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get current caching plugin configuration
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2476-L2480) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_get_cache_configArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_enable_browser_caching-75f66de6"></a>

## wp_enable_browser_caching

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Get .htaccess rules for browser caching of static assets
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2482-L2486) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_enable_browser_cachingArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_enable_gzip_compression-f218ebea"></a>

## wp_enable_gzip_compression

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Get .htaccess rules for GZIP compression
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2488-L2492) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_enable_gzip_compressionArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_elementor_performance_settings-9332d57a"></a>

## wp_elementor_performance_settings

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get/update Elementor performance settings (improved asset loading, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2494-L2502) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "improved_assets_loading": {
      "default": null,
      "title": "Improved Assets Loading",
      "type": "boolean"
    },
    "optimized_dom_output": {
      "default": null,
      "title": "Optimized Dom Output",
      "type": "boolean"
    },
    "unfiltered_files_upload": {
      "default": null,
      "title": "Unfiltered Files Upload",
      "type": "boolean"
    }
  },
  "title": "wp_elementor_performance_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_minification_status-621ccb26"></a>

## wp_get_minification_status

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Check status of CSS/JS minification on the site
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2504-L2508) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_get_minification_statusArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_configure_wp_rocket-a460789f"></a>

## wp_configure_wp_rocket

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Configure WP Rocket settings via its REST API
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2510-L2525) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "cache_mobile": {
      "default": null,
      "title": "Cache Mobile",
      "type": "boolean"
    },
    "cache_logged_user": {
      "default": null,
      "title": "Cache Logged User",
      "type": "boolean"
    },
    "minify_css": {
      "default": null,
      "title": "Minify Css",
      "type": "boolean"
    },
    "minify_concatenate_css": {
      "default": null,
      "title": "Minify Concatenate Css",
      "type": "boolean"
    },
    "minify_js": {
      "default": null,
      "title": "Minify Js",
      "type": "boolean"
    },
    "minify_concatenate_js": {
      "default": null,
      "title": "Minify Concatenate Js",
      "type": "boolean"
    },
    "defer_all_js": {
      "default": null,
      "title": "Defer All Js",
      "type": "boolean"
    },
    "lazyload": {
      "default": null,
      "title": "Lazyload",
      "type": "boolean"
    },
    "lazyload_iframes": {
      "default": null,
      "title": "Lazyload Iframes",
      "type": "boolean"
    },
    "imagedimensions": {
      "default": null,
      "title": "Imagedimensions",
      "type": "boolean"
    }
  },
  "title": "wp_configure_wp_rocketArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_list_plugins-a3044589"></a>

## wp_list_plugins

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_unsupported\_from\_http, \_wp.

```text
[READ] WordPress tool. List all installed WordPress plugins with status (active/inactive)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2527-L2541) · Schema: tools/list.

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
    "search": {
      "default": null,
      "title": "Search",
      "type": "string"
    },
    "per_page": {
      "default": 100,
      "title": "Per Page",
      "type": "integer"
    }
  },
  "title": "wp_list_pluginsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_plugin-908544c3"></a>

## wp_get_plugin

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] WordPress tool. Get details about a specific plugin. Use the 'plugin' identifier returned by wp_list_plugins(), e.g. 'elementor/elementor'
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2543-L2548) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "plugin": {
      "title": "Plugin",
      "type": "string"
    }
  },
  "required": [
    "plugin"
  ],
  "title": "wp_get_pluginArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_activate_plugin-06314dc0"></a>

## wp_activate_plugin

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().put, \_wp.

```text
[WRITE] WordPress tool. Activate an installed plugin. Use the 'plugin' identifier returned by wp_list_plugins(), e.g. 'elementor/elementor'
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2550-L2555) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "plugin": {
      "title": "Plugin",
      "type": "string"
    }
  },
  "required": [
    "plugin"
  ],
  "title": "wp_activate_pluginArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_deactivate_plugin-d63659ce"></a>

## wp_deactivate_plugin

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().put, \_wp.

```text
[WRITE] WordPress tool. Deactivate an active plugin. Use the 'plugin' identifier returned by wp_list_plugins(), e.g. 'elementor/elementor'
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2557-L2562) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "plugin": {
      "title": "Plugin",
      "type": "string"
    }
  },
  "required": [
    "plugin"
  ],
  "title": "wp_deactivate_pluginArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_install_plugin-22438c32"></a>

## wp_install_plugin

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, \_wp.

```text
[WRITE] WordPress tool. Install a plugin from WordPress.org repository by slug. slug = plugin folder name, e.g. 'elementor'
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2564-L2571) · Schema: tools/list.

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
  "title": "wp_install_pluginArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_delete_plugin-de42a1b3"></a>

## wp_delete_plugin

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] WordPress tool. Delete an installed plugin (must be deactivated first). Use the 'plugin' identifier returned by wp_list_plugins()
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2573-L2578) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "plugin": {
      "title": "Plugin",
      "type": "string"
    }
  },
  "required": [
    "plugin"
  ],
  "title": "wp_delete_pluginArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_update_plugin-a65a0008"></a>

## wp_update_plugin

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().put, \_wp.

```text
[WRITE] WordPress tool. Update a plugin to latest version. Use the 'plugin' identifier returned by wp_list_plugins()
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2580-L2585) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "plugin": {
      "title": "Plugin",
      "type": "string"
    }
  },
  "required": [
    "plugin"
  ],
  "title": "wp_update_pluginArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_check_plugin_updates-8d527edc"></a>

## wp_check_plugin_updates

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_unsupported\_from\_http, \_wp.

```text
[READ] WordPress tool. Check which plugins have available updates
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2587-L2593) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_check_plugin_updatesArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_bulk_activate_plugins-6be88bcb"></a>

## wp_bulk_activate_plugins

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().put, \_wp.

```text
[WRITE] WordPress tool. Activate multiple plugins at once. plugins = list of plugin identifiers as returned by wp_list_plugins()
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2595-L2606) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "plugins": {
      "items": {},
      "title": "Plugins",
      "type": "array"
    }
  },
  "required": [
    "plugins"
  ],
  "title": "wp_bulk_activate_pluginsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_bulk_deactivate_plugins-a4437d9e"></a>

## wp_bulk_deactivate_plugins

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().put, \_wp.

```text
[WRITE] WordPress tool. Deactivate multiple plugins at once. plugins = list of plugin identifiers as returned by wp_list_plugins()
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2608-L2619) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "plugins": {
      "items": {},
      "title": "Plugins",
      "type": "array"
    }
  },
  "required": [
    "plugins"
  ],
  "title": "wp_bulk_deactivate_pluginsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_plugin_option-eb259b8e"></a>

## wp_get_plugin_option

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get a WordPress option/setting value set by a plugin
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2621-L2627) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "option_name": {
      "title": "Option Name",
      "type": "string"
    }
  },
  "required": [
    "option_name"
  ],
  "title": "wp_get_plugin_optionArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_update_plugin_option-691dd9a7"></a>

## wp_update_plugin_option

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Update a WordPress option/setting value (for configuring plugins)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2629-L2636) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "option_name": {
      "title": "Option Name",
      "type": "string"
    },
    "option_value": {
      "title": "Option Value",
      "type": "string"
    }
  },
  "required": [
    "option_name",
    "option_value"
  ],
  "title": "wp_update_plugin_optionArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_popup_detect_plugin-94728043"></a>

## wp_popup_detect_plugin

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Detect which popup / lead-capture plugin is installed (Popup Maker, Elementor Popup, OptinMonster, Convert Pro, Hustle)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2638-L2642) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_popup_detect_pluginArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_popup_list-5ca9cf73"></a>

## wp_popup_list

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. List all popups on the site
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2644-L2652) · Schema: tools/list.

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
  "title": "wp_popup_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_popup_create-eb2fbfd6"></a>

## wp_popup_create

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Create a new popup (Popup Maker or Elementor popup template)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2654-L2665) · Schema: tools/list.

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
    "trigger": {
      "default": "timed",
      "title": "Trigger",
      "type": "string"
    },
    "delay": {
      "default": 5000,
      "title": "Delay",
      "type": "integer"
    },
    "status": {
      "default": "draft",
      "title": "Status",
      "type": "string"
    },
    "plugin": {
      "default": "auto",
      "title": "Plugin",
      "type": "string"
    }
  },
  "required": [
    "title",
    "content"
  ],
  "title": "wp_popup_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_popup_update-26b17fd9"></a>

## wp_popup_update

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Update an existing popup's title, content, or status
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2667-L2677) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "popup_id": {
      "title": "Popup Id",
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
    "plugin": {
      "default": "auto",
      "title": "Plugin",
      "type": "string"
    }
  },
  "required": [
    "popup_id"
  ],
  "title": "wp_popup_updateArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_popup_delete-8504a887"></a>

## wp_popup_delete

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] WordPress tool. Delete a popup
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2679-L2687) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "popup_id": {
      "title": "Popup Id",
      "type": "integer"
    },
    "force": {
      "default": false,
      "title": "Force",
      "type": "boolean"
    }
  },
  "required": [
    "popup_id"
  ],
  "title": "wp_popup_deleteArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_popup_set_trigger-d88beaec"></a>

## wp_popup_set_trigger

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Set when a popup should appear (trigger type and options)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2689-L2700) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "popup_id": {
      "title": "Popup Id",
      "type": "integer"
    },
    "trigger": {
      "title": "Trigger",
      "type": "string"
    },
    "delay": {
      "default": null,
      "title": "Delay",
      "type": "integer"
    },
    "scroll_percentage": {
      "default": null,
      "title": "Scroll Percentage",
      "type": "integer"
    },
    "click_selector": {
      "default": null,
      "title": "Click Selector",
      "type": "string"
    },
    "inactivity_seconds": {
      "default": null,
      "title": "Inactivity Seconds",
      "type": "integer"
    }
  },
  "required": [
    "popup_id",
    "trigger"
  ],
  "title": "wp_popup_set_triggerArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_popup_set_display_rules-5cd65861"></a>

## wp_popup_set_display_rules

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Set display conditions — which pages to show on, user targeting, frequency
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2702-L2714) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "popup_id": {
      "title": "Popup Id",
      "type": "integer"
    },
    "show_on_pages": {
      "default": null,
      "items": {},
      "title": "Show On Pages",
      "type": "array"
    },
    "exclude_pages": {
      "default": null,
      "items": {},
      "title": "Exclude Pages",
      "type": "array"
    },
    "hide_for_logged_in": {
      "default": null,
      "title": "Hide For Logged In",
      "type": "boolean"
    },
    "max_shows": {
      "default": null,
      "title": "Max Shows",
      "type": "integer"
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
    }
  },
  "required": [
    "popup_id"
  ],
  "title": "wp_popup_set_display_rulesArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_popup_set_content-833e5b92"></a>

## wp_popup_set_content

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Set or replace popup content with HTML or a shortcode
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2716-L2724) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "popup_id": {
      "title": "Popup Id",
      "type": "integer"
    },
    "content": {
      "title": "Content",
      "type": "string"
    },
    "css": {
      "default": null,
      "title": "Css",
      "type": "string"
    }
  },
  "required": [
    "popup_id",
    "content"
  ],
  "title": "wp_popup_set_contentArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_popup_activate-33dca714"></a>

## wp_popup_activate

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Activate (publish) a popup so it is live on the site
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2726-L2732) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "popup_id": {
      "title": "Popup Id",
      "type": "integer"
    }
  },
  "required": [
    "popup_id"
  ],
  "title": "wp_popup_activateArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_popup_deactivate-dd86540b"></a>

## wp_popup_deactivate

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Deactivate (unpublish) a popup so it stops showing
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2734-L2740) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "popup_id": {
      "title": "Popup Id",
      "type": "integer"
    }
  },
  "required": [
    "popup_id"
  ],
  "title": "wp_popup_deactivateArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_popup_analytics_get-5a009bca"></a>

## wp_popup_analytics_get

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get popup analytics — views, conversions, and conversion rate
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2742-L2750) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "popup_id": {
      "default": null,
      "title": "Popup Id",
      "type": "integer"
    },
    "date_from": {
      "default": null,
      "title": "Date From",
      "type": "string"
    },
    "date_to": {
      "default": null,
      "title": "Date To",
      "type": "string"
    }
  },
  "title": "wp_popup_analytics_getArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_lead_form_create-be1b31d5"></a>

## wp_lead_form_create

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Create an opt-in / lead capture form (name, email fields with submit button)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2752-L2762) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
    "fields": {
      "default": false,
      "items": {},
      "title": "Fields",
      "type": "array"
    },
    "submit_text": {
      "default": "Subscribe",
      "title": "Submit Text",
      "type": "string"
    },
    "success_message": {
      "default": null,
      "title": "Success Message",
      "type": "string"
    },
    "redirect_url": {
      "default": null,
      "title": "Redirect Url",
      "type": "string"
    }
  },
  "title": "wp_lead_form_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_lead_notification_configure-53b9fef3"></a>

## wp_lead_notification_configure

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Configure email notification when a new lead is captured
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2764-L2773) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "form_id": {
      "title": "Form Id",
      "type": "integer"
    },
    "email_to": {
      "title": "Email To",
      "type": "string"
    },
    "email_subject": {
      "default": null,
      "title": "Email Subject",
      "type": "string"
    },
    "include_fields": {
      "default": true,
      "title": "Include Fields",
      "type": "boolean"
    }
  },
  "required": [
    "form_id",
    "email_to"
  ],
  "title": "wp_lead_notification_configureArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_lead_export-96c82c2b"></a>

## wp_lead_export

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Export captured leads / subscribers to CSV
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2775-L2784) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "form_id": {
      "default": null,
      "title": "Form Id",
      "type": "integer"
    },
    "date_from": {
      "default": null,
      "title": "Date From",
      "type": "string"
    },
    "date_to": {
      "default": null,
      "title": "Date To",
      "type": "string"
    },
    "format": {
      "default": "json",
      "title": "Format",
      "type": "string"
    }
  },
  "title": "wp_lead_exportArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_lead_integrate_crm-09cd0655"></a>

## wp_lead_integrate_crm

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Connect lead capture to an external CRM or email marketing service
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2786-L2795) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "service": {
      "title": "Service",
      "type": "string"
    },
    "form_id": {
      "default": null,
      "title": "Form Id",
      "type": "integer"
    },
    "api_key": {
      "default": null,
      "title": "Api Key",
      "type": "string"
    },
    "list_id": {
      "default": null,
      "title": "List Id",
      "type": "string"
    }
  },
  "required": [
    "service"
  ],
  "title": "wp_lead_integrate_crmArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_list_posts-1ed9b047"></a>

## wp_list_posts

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, params.setdefault, \_wp().get, \_wp.

```text
[READ] WordPress tool. List WordPress posts with filters (status, category, author, search, date, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2797-L2825) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "status": {
      "default": "publish",
      "title": "Status",
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
    "categories": {
      "default": null,
      "title": "Categories",
      "type": "string"
    },
    "tags": {
      "default": null,
      "title": "Tags",
      "type": "string"
    },
    "author": {
      "default": null,
      "title": "Author",
      "type": "integer"
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
    "after": {
      "default": null,
      "title": "After",
      "type": "string"
    },
    "before": {
      "default": null,
      "title": "Before",
      "type": "string"
    }
  },
  "title": "wp_list_postsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_post-0f417ded"></a>

## wp_get_post

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] WordPress tool. Get a single WordPress post by ID, including all meta fields
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2827-L2833) · Schema: tools/list.

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
    "context": {
      "default": "edit",
      "title": "Context",
      "type": "string"
    }
  },
  "required": [
    "id"
  ],
  "title": "wp_get_postArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_create_post-9fed4c77"></a>

## wp_create_post

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Create a new WordPress post with full SEO meta, categories, tags, and featured image
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2835-L2857) · Schema: tools/list.

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
    "date": {
      "default": null,
      "title": "Date",
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
    "featured_media": {
      "default": null,
      "title": "Featured Media",
      "type": "integer"
    },
    "slug": {
      "default": null,
      "title": "Slug",
      "type": "string"
    },
    "comment_status": {
      "default": null,
      "title": "Comment Status",
      "type": "string"
    },
    "ping_status": {
      "default": null,
      "title": "Ping Status",
      "type": "string"
    },
    "format": {
      "default": null,
      "title": "Format",
      "type": "string"
    },
    "sticky": {
      "default": null,
      "title": "Sticky",
      "type": "boolean"
    },
    "meta": {
      "additionalProperties": true,
      "default": null,
      "title": "Meta",
      "type": "object"
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
    },
    "yoast_focus_keyword": {
      "default": null,
      "title": "Yoast Focus Keyword",
      "type": "string"
    }
  },
  "required": [
    "title"
  ],
  "title": "wp_create_postArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_update_post-48321261"></a>

## wp_update_post

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Update an existing WordPress post — any field including content, status, SEO meta
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2859-L2878) · Schema: tools/list.

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
    "date": {
      "default": null,
      "title": "Date",
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
    "featured_media": {
      "default": null,
      "title": "Featured Media",
      "type": "integer"
    },
    "slug": {
      "default": null,
      "title": "Slug",
      "type": "string"
    },
    "meta": {
      "additionalProperties": true,
      "default": null,
      "title": "Meta",
      "type": "object"
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
    },
    "yoast_focus_keyword": {
      "default": null,
      "title": "Yoast Focus Keyword",
      "type": "string"
    }
  },
  "required": [
    "id"
  ],
  "title": "wp_update_postArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_delete_post-c8964f35"></a>

## wp_delete_post

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] WordPress tool. Delete or trash a WordPress post
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2880-L2888) · Schema: tools/list.

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
    "force": {
      "default": false,
      "title": "Force",
      "type": "boolean"
    }
  },
  "required": [
    "id"
  ],
  "title": "wp_delete_postArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_publish_post-8b4ca81c"></a>

## wp_publish_post

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Publish a draft post immediately
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2890-L2896) · Schema: tools/list.

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
  "title": "wp_publish_postArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_schedule_post-66539d4e"></a>

## wp_schedule_post

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Schedule a post to publish at a specific date/time
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2898-L2905) · Schema: tools/list.

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
  "title": "wp_schedule_postArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_duplicate_post-f3f9d93f"></a>

## wp_duplicate_post

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Duplicate a post as a new draft (copies title, content, meta, categories, tags)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2907-L2915) · Schema: tools/list.

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
    "new_title": {
      "default": null,
      "title": "New Title",
      "type": "string"
    },
    "status": {
      "default": "draft",
      "title": "Status",
      "type": "string"
    }
  },
  "required": [
    "id"
  ],
  "title": "wp_duplicate_postArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_post_revisions-dd0dbafa"></a>

## wp_get_post_revisions

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] WordPress tool. Get revision history for a post
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2917-L2922) · Schema: tools/list.

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
  "title": "wp_get_post_revisionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_bulk_update_posts-5997f22c"></a>

## wp_bulk_update_posts

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Update multiple posts at once — useful for bulk status changes, category assignments, etc.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2924-L2931) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
    "updates": {
      "additionalProperties": true,
      "title": "Updates",
      "type": "object"
    }
  },
  "required": [
    "ids",
    "updates"
  ],
  "title": "wp_bulk_update_postsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_post_meta-1520e040"></a>

## wp_get_post_meta

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get all meta fields for a post
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2933-L2939) · Schema: tools/list.

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
  "title": "wp_get_post_metaArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_update_post_meta-78db1b5e"></a>

## wp_update_post_meta

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Update specific meta fields on a post
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2941-L2948) · Schema: tools/list.

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
    "meta": {
      "additionalProperties": true,
      "title": "Meta",
      "type": "object"
    }
  },
  "required": [
    "id",
    "meta"
  ],
  "title": "wp_update_post_metaArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_search_posts-24fb76b8"></a>

## wp_search_posts

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] WordPress tool. Search posts across all statuses with advanced filters
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2950-L2962) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "query": {
      "title": "Query",
      "type": "string"
    },
    "post_type": {
      "default": "post",
      "title": "Post Type",
      "type": "string"
    },
    "status": {
      "default": "any",
      "title": "Status",
      "type": "string"
    },
    "per_page": {
      "default": 10,
      "title": "Per Page",
      "type": "integer"
    }
  },
  "required": [
    "query"
  ],
  "title": "wp_search_postsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_posts_by_category-f5fa78d7"></a>

## wp_get_posts_by_category

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get all posts in a specific category
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2964-L2973) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
      "default": "publish",
      "title": "Status",
      "type": "string"
    }
  },
  "required": [
    "category_id"
  ],
  "title": "wp_get_posts_by_categoryArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_restore_post-dd8b57aa"></a>

## wp_restore_post

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Restore a trashed post back to draft
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2975-L2981) · Schema: tools/list.

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
  "title": "wp_restore_postArguments",
  "type": "object"
}
```

</details>

<a id="tool-gamification_points_get-d0df66d1"></a>

## gamification_points_get

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Get a user's points balance (myCred, YITH Points & Rewards, WooCommerce Points)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2983-L2990) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "user_id": {
      "title": "User Id",
      "type": "integer"
    },
    "points_type": {
      "default": "mycred_default",
      "title": "Points Type",
      "type": "string"
    }
  },
  "required": [
    "user_id"
  ],
  "title": "gamification_points_getArguments",
  "type": "object"
}
```

</details>

<a id="tool-gamification_points_award-c0819dbb"></a>

## gamification_points_award

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Award or deduct points for a user
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L2992-L3003) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "user_id": {
      "title": "User Id",
      "type": "integer"
    },
    "amount": {
      "title": "Amount",
      "type": "integer"
    },
    "reason": {
      "default": null,
      "title": "Reason",
      "type": "string"
    },
    "points_type": {
      "default": "mycred_default",
      "title": "Points Type",
      "type": "string"
    },
    "reference": {
      "default": null,
      "title": "Reference",
      "type": "string"
    },
    "entry": {
      "default": null,
      "title": "Entry",
      "type": "string"
    }
  },
  "required": [
    "user_id",
    "amount"
  ],
  "title": "gamification_points_awardArguments",
  "type": "object"
}
```

</details>

<a id="tool-gamification_leaderboard-5ad4bfad"></a>

## gamification_leaderboard

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Get points leaderboard (top users by points)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3005-L3014) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "limit": {
      "default": 10,
      "title": "Limit",
      "type": "integer"
    },
    "points_type": {
      "default": "mycred_default",
      "title": "Points Type",
      "type": "string"
    },
    "period": {
      "default": "all_time",
      "title": "Period",
      "type": "string"
    },
    "offset": {
      "default": 0,
      "title": "Offset",
      "type": "integer"
    }
  },
  "title": "gamification_leaderboardArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_list_app_passwords-7a02bad2"></a>

## wp_list_app_passwords

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] WordPress tool. List application passwords for a user
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3016-L3021) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "user_id": {
      "title": "User Id",
      "type": "integer"
    }
  },
  "required": [
    "user_id"
  ],
  "title": "wp_list_app_passwordsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_create_app_password-5c4b76b2"></a>

## wp_create_app_password

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, \_wp.

```text
[WRITE] WordPress tool. Create a new application password for a user
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3023-L3029) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "user_id": {
      "title": "User Id",
      "type": "integer"
    },
    "app_name": {
      "title": "App Name",
      "type": "string"
    }
  },
  "required": [
    "user_id",
    "app_name"
  ],
  "title": "wp_create_app_passwordArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_delete_app_password-68beedfe"></a>

## wp_delete_app_password

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] WordPress tool. Delete an application password
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3031-L3037) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "user_id": {
      "title": "User Id",
      "type": "integer"
    },
    "uuid": {
      "title": "Uuid",
      "type": "string"
    }
  },
  "required": [
    "user_id",
    "uuid"
  ],
  "title": "wp_delete_app_passwordArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_delete_all_app_passwords-b8cc852f"></a>

## wp_delete_all_app_passwords

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] WordPress tool. Delete all application passwords for a user
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3039-L3044) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "user_id": {
      "title": "User Id",
      "type": "integer"
    }
  },
  "required": [
    "user_id"
  ],
  "title": "wp_delete_all_app_passwordsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_list_roles-47ac0fab"></a>

## wp_list_roles

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] WordPress tool. List all WordPress user roles and their capabilities
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3046-L3049) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_list_rolesArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_user_capabilities-cb433999"></a>

## wp_get_user_capabilities

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] WordPress tool. Get capabilities for a specific user
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3051-L3056) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "user_id": {
      "title": "User Id",
      "type": "integer"
    }
  },
  "required": [
    "user_id"
  ],
  "title": "wp_get_user_capabilitiesArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_security_change_role-0397373c"></a>

## wp_security_change_role

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, \_wp.

```text
[WRITE] WordPress tool. Change a user's role (security-audited)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3058-L3064) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "user_id": {
      "title": "User Id",
      "type": "integer"
    },
    "role": {
      "title": "Role",
      "type": "string"
    }
  },
  "required": [
    "user_id",
    "role"
  ],
  "title": "wp_security_change_roleArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_verify_auth-46f28065"></a>

## wp_verify_auth

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] WordPress tool. Verify that current authentication credentials are valid
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3066-L3069) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_verify_authArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_verify_current_user-9abe297e"></a>

## wp_verify_current_user

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] WordPress tool. Get the currently authenticated user details (security context)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3071-L3074) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_verify_current_userArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_check_file_permissions-e363298b"></a>

## wp_check_file_permissions

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Check critical WordPress file/directory permissions
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3076-L3080) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_check_file_permissionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_list_admin_users-f97a5aff"></a>

## wp_list_admin_users

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] WordPress tool. List all administrator users on the site
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3082-L3085) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_list_admin_usersArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_check_plugin_vulnerabilities-e9648f82"></a>

## wp_check_plugin_vulnerabilities

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Check installed plugins against known vulnerability data (uses WPScan API if available)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3087-L3091) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_check_plugin_vulnerabilitiesArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_login_activity-2f557155"></a>

## wp_get_login_activity

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get recent login activity (requires audit log plugin like Simple History or WP Activity Log)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3093-L3100) · Schema: tools/list.

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
    "type": {
      "default": null,
      "title": "Type",
      "type": "string"
    }
  },
  "title": "wp_get_login_activityArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_block_user-8842329d"></a>

## wp_block_user

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Block/disable a user account
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3102-L3108) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "user_id": {
      "title": "User Id",
      "type": "integer"
    }
  },
  "required": [
    "user_id"
  ],
  "title": "wp_block_userArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_force_password_reset-d441f9fd"></a>

## wp_force_password_reset

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Force a user to reset their password on next login
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3110-L3116) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "user_id": {
      "title": "User Id",
      "type": "integer"
    }
  },
  "required": [
    "user_id"
  ],
  "title": "wp_force_password_resetArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_check_rest_api_access-5c69dec1"></a>

## wp_check_rest_api_access

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] WordPress tool. Check which REST API endpoints are publicly accessible
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3118-L3121) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_check_rest_api_accessArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_security_headers-6cc789e0"></a>

## wp_get_security_headers

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Check security-related HTTP headers returned by the site
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3123-L3127) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_get_security_headersArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_disable_xmlrpc-904104ff"></a>

## wp_disable_xmlrpc

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Check XML-RPC status and instructions to disable it
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3129-L3133) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_disable_xmlrpcArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_secret_keys-11d7c2c9"></a>

## wp_get_secret_keys

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get instructions to regenerate WordPress security keys
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3135-L3139) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_get_secret_keysArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_audit_user_accounts-45a6a284"></a>

## wp_audit_user_accounts

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Audit all user accounts — list users with admin role, old accounts, no recent logins
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3141-L3145) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_audit_user_accountsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_all_settings-1b2fd53a"></a>

## wp_get_all_settings

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] WordPress tool. Get all WordPress site settings (title, tagline, timezone, date format, reading, writing, discussion, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3147-L3151) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_get_all_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_update_general_settings-3c960fae"></a>

## wp_update_general_settings

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, \_wp.

```text
[WRITE] WordPress tool. Update general WordPress settings (site title, tagline, URL, admin email, timezone, language, date format)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3153-L3177) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "blogname": {
      "default": null,
      "title": "Blogname",
      "type": "string"
    },
    "blogdescription": {
      "default": null,
      "title": "Blogdescription",
      "type": "string"
    },
    "siteurl": {
      "default": null,
      "title": "Siteurl",
      "type": "string"
    },
    "home": {
      "default": null,
      "title": "Home",
      "type": "string"
    },
    "admin_email": {
      "default": null,
      "title": "Admin Email",
      "type": "string"
    },
    "timezone_string": {
      "default": null,
      "title": "Timezone String",
      "type": "string"
    },
    "date_format": {
      "default": null,
      "title": "Date Format",
      "type": "string"
    },
    "time_format": {
      "default": null,
      "title": "Time Format",
      "type": "string"
    },
    "start_of_week": {
      "default": null,
      "title": "Start Of Week",
      "type": "integer"
    },
    "WPLANG": {
      "default": null,
      "title": "Wplang",
      "type": "string"
    }
  },
  "title": "wp_update_general_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_update_reading_settings-cfde932d"></a>

## wp_update_reading_settings

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Update reading settings (homepage, posts page, posts per page, search engine visibility)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3179-L3189) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "show_on_front": {
      "default": null,
      "title": "Show On Front",
      "type": "string"
    },
    "page_on_front": {
      "default": null,
      "title": "Page On Front",
      "type": "integer"
    },
    "page_for_posts": {
      "default": null,
      "title": "Page For Posts",
      "type": "integer"
    },
    "posts_per_page": {
      "default": null,
      "title": "Posts Per Page",
      "type": "integer"
    },
    "blog_public": {
      "default": null,
      "title": "Blog Public",
      "type": "integer"
    }
  },
  "title": "wp_update_reading_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_update_discussion_settings-84dbc246"></a>

## wp_update_discussion_settings

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Update comment/discussion settings (allow comments, moderation, notifications)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3191-L3212) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "default_comment_status": {
      "default": null,
      "title": "Default Comment Status",
      "type": "string"
    },
    "default_ping_status": {
      "default": null,
      "title": "Default Ping Status",
      "type": "string"
    },
    "default_pingback_flag": {
      "default": null,
      "title": "Default Pingback Flag",
      "type": "boolean"
    },
    "require_name_email": {
      "default": null,
      "title": "Require Name Email",
      "type": "boolean"
    },
    "comment_registration": {
      "default": null,
      "title": "Comment Registration",
      "type": "boolean"
    },
    "close_comments_for_old_posts": {
      "default": null,
      "title": "Close Comments For Old Posts",
      "type": "boolean"
    },
    "close_comments_days_old": {
      "default": null,
      "title": "Close Comments Days Old",
      "type": "integer"
    },
    "thread_comments": {
      "default": null,
      "title": "Thread Comments",
      "type": "boolean"
    },
    "thread_comments_depth": {
      "default": null,
      "title": "Thread Comments Depth",
      "type": "integer"
    },
    "page_comments": {
      "default": null,
      "title": "Page Comments",
      "type": "boolean"
    },
    "comments_per_page": {
      "default": null,
      "title": "Comments Per Page",
      "type": "integer"
    },
    "comment_order": {
      "default": null,
      "title": "Comment Order",
      "type": "string"
    },
    "comments_notify": {
      "default": null,
      "title": "Comments Notify",
      "type": "boolean"
    },
    "moderation_notify": {
      "default": null,
      "title": "Moderation Notify",
      "type": "boolean"
    },
    "comment_moderation": {
      "default": null,
      "title": "Comment Moderation",
      "type": "boolean"
    },
    "comment_whitelist": {
      "default": null,
      "title": "Comment Whitelist",
      "type": "boolean"
    }
  },
  "title": "wp_update_discussion_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_update_writing_settings-b646bfbf"></a>

## wp_update_writing_settings

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Update writing settings (default post category, format, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3214-L3223) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "default_category": {
      "default": null,
      "title": "Default Category",
      "type": "integer"
    },
    "default_post_format": {
      "default": null,
      "title": "Default Post Format",
      "type": "string"
    },
    "use_smilies": {
      "default": null,
      "title": "Use Smilies",
      "type": "boolean"
    },
    "default_link_category": {
      "default": null,
      "title": "Default Link Category",
      "type": "integer"
    }
  },
  "title": "wp_update_writing_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_update_media_settings-0d80f372"></a>

## wp_update_media_settings

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Update media/image settings (thumbnail, medium, large sizes)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3225-L3238) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "thumbnail_size_w": {
      "default": null,
      "title": "Thumbnail Size W",
      "type": "integer"
    },
    "thumbnail_size_h": {
      "default": null,
      "title": "Thumbnail Size H",
      "type": "integer"
    },
    "thumbnail_crop": {
      "default": null,
      "title": "Thumbnail Crop",
      "type": "boolean"
    },
    "medium_size_w": {
      "default": null,
      "title": "Medium Size W",
      "type": "integer"
    },
    "medium_size_h": {
      "default": null,
      "title": "Medium Size H",
      "type": "integer"
    },
    "large_size_w": {
      "default": null,
      "title": "Large Size W",
      "type": "integer"
    },
    "large_size_h": {
      "default": null,
      "title": "Large Size H",
      "type": "integer"
    },
    "uploads_use_yearmonth_folders": {
      "default": null,
      "title": "Uploads Use Yearmonth Folders",
      "type": "boolean"
    }
  },
  "title": "wp_update_media_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_update_permalink_settings-6d366ccd"></a>

## wp_update_permalink_settings

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Update permalink structure
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3240-L3248) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "permalink_structure": {
      "default": null,
      "title": "Permalink Structure",
      "type": "string"
    },
    "category_base": {
      "default": null,
      "title": "Category Base",
      "type": "string"
    },
    "tag_base": {
      "default": null,
      "title": "Tag Base",
      "type": "string"
    }
  },
  "title": "wp_update_permalink_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_set_site_logo-aa4bad00"></a>

## wp_set_site_logo

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Set or remove the site logo
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3250-L3256) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "media_id": {
      "title": "Media Id",
      "type": "integer"
    }
  },
  "required": [
    "media_id"
  ],
  "title": "wp_set_site_logoArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_set_site_icon-3a1ad0d4"></a>

## wp_set_site_icon

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Set the site favicon/icon
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3258-L3264) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "media_id": {
      "title": "Media Id",
      "type": "integer"
    }
  },
  "required": [
    "media_id"
  ],
  "title": "wp_set_site_iconArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_site_info-d26d8aaf"></a>

## wp_get_site_info

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, wp\_get\_site\_settings, wp\_get\_active\_theme, settings.get, \_elementor\_flatten\_items, sum, \_wp().get, \_unsupported\_from\_http.

```text
[READ] WordPress tool. Get site settings, active theme, and high-level counts from verified WordPress controllers.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3266-L3295) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_get_site_infoArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_update_user_registration_settings-e15e5bff"></a>

## wp_update_user_registration_settings

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Enable/disable user registration and set default role
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3297-L3304) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "users_can_register": {
      "default": null,
      "title": "Users Can Register",
      "type": "boolean"
    },
    "default_role": {
      "default": null,
      "title": "Default Role",
      "type": "string"
    }
  },
  "title": "wp_update_user_registration_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_update_email_settings-af069158"></a>

## wp_update_email_settings

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Update WordPress email from name and address
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3306-L3313) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "from_name": {
      "default": null,
      "title": "From Name",
      "type": "string"
    },
    "from_email": {
      "default": null,
      "title": "From Email",
      "type": "string"
    }
  },
  "title": "wp_update_email_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-social_detect_plugin-d4fd2744"></a>

## social_detect_plugin

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Detect installed social media auto-posting plugins (Blog2Social, Jetpack Publicize, SNAP, NextScripts, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3315-L3319) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "social_detect_pluginArguments",
  "type": "object"
}
```

</details>

<a id="tool-social_auto_post_configure-a9a9cd51"></a>

## social_auto_post_configure

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Configure social auto-posting settings for the detected plugin
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3321-L3332) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "plugin": {
      "title": "Plugin",
      "type": "string"
    },
    "auto_post_on_publish": {
      "default": null,
      "title": "Auto Post On Publish",
      "type": "boolean"
    },
    "post_types": {
      "default": null,
      "items": {},
      "title": "Post Types",
      "type": "array"
    },
    "default_message": {
      "default": null,
      "title": "Default Message",
      "type": "string"
    },
    "include_featured_image": {
      "default": null,
      "title": "Include Featured Image",
      "type": "boolean"
    },
    "hashtags": {
      "default": null,
      "title": "Hashtags",
      "type": "string"
    }
  },
  "required": [
    "plugin"
  ],
  "title": "social_auto_post_configureArguments",
  "type": "object"
}
```

</details>

<a id="tool-social_profiles_list-cf466114"></a>

## social_profiles_list

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List connected social media profiles/accounts
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3334-L3340) · Schema: tools/list.

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
  "title": "social_profiles_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-social_profile_connect-60afae78"></a>

## social_profile_connect

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Get instructions to connect a social media profile for auto-posting
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3342-L3349) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "network": {
      "title": "Network",
      "type": "string"
    },
    "plugin": {
      "default": null,
      "title": "Plugin",
      "type": "string"
    }
  },
  "required": [
    "network"
  ],
  "title": "social_profile_connectArguments",
  "type": "object"
}
```

</details>

<a id="tool-social_schedule_post-55ce5e49"></a>

## social_schedule_post

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Schedule a social media share for a specific post at a given time
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3351-L3361) · Schema: tools/list.

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
    "networks": {
      "items": {},
      "title": "Networks",
      "type": "array"
    },
    "message": {
      "default": null,
      "title": "Message",
      "type": "string"
    },
    "schedule_time": {
      "default": null,
      "title": "Schedule Time",
      "type": "string"
    },
    "include_image": {
      "default": true,
      "title": "Include Image",
      "type": "boolean"
    }
  },
  "required": [
    "post_id",
    "networks"
  ],
  "title": "social_schedule_postArguments",
  "type": "object"
}
```

</details>

<a id="tool-social_share_buttons_configure-f0740a95"></a>

## social_share_buttons_configure

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Configure social share buttons displayed on posts/pages
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3363-L3375) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "plugin": {
      "title": "Plugin",
      "type": "string"
    },
    "networks": {
      "default": null,
      "items": {},
      "title": "Networks",
      "type": "array"
    },
    "position": {
      "default": null,
      "title": "Position",
      "type": "string"
    },
    "style": {
      "default": null,
      "title": "Style",
      "type": "string"
    },
    "show_counts": {
      "default": null,
      "title": "Show Counts",
      "type": "boolean"
    },
    "post_types": {
      "default": null,
      "items": {},
      "title": "Post Types",
      "type": "array"
    },
    "mobile_behavior": {
      "default": null,
      "title": "Mobile Behavior",
      "type": "string"
    }
  },
  "required": [
    "plugin"
  ],
  "title": "social_share_buttons_configureArguments",
  "type": "object"
}
```

</details>

<a id="tool-push_detect_plugin-894ddc52"></a>

## push_detect_plugin

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Detect installed push notification plugins (OneSignal, PushEngage, Jeeng/PushCrew, WebPush, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3377-L3381) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "push_detect_pluginArguments",
  "type": "object"
}
```

</details>

<a id="tool-push_onesignal_configure-4b53e39e"></a>

## push_onesignal_configure

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Configure OneSignal push notification settings
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3383-L3397) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "app_id": {
      "default": null,
      "title": "App Id",
      "type": "string"
    },
    "rest_api_key": {
      "default": null,
      "title": "Rest Api Key",
      "type": "string"
    },
    "auto_send_on_publish": {
      "default": null,
      "title": "Auto Send On Publish",
      "type": "boolean"
    },
    "post_types": {
      "default": null,
      "items": {},
      "title": "Post Types",
      "type": "array"
    },
    "prompt_type": {
      "default": null,
      "title": "Prompt Type",
      "type": "string"
    },
    "prompt_delay": {
      "default": null,
      "title": "Prompt Delay",
      "type": "integer"
    },
    "title_template": {
      "default": null,
      "title": "Title Template",
      "type": "string"
    },
    "message_template": {
      "default": null,
      "title": "Message Template",
      "type": "string"
    },
    "utm_params": {
      "default": null,
      "title": "Utm Params",
      "type": "string"
    }
  },
  "title": "push_onesignal_configureArguments",
  "type": "object"
}
```

</details>

<a id="tool-push_send_notification-8e2e1144"></a>

## push_send_notification

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Send a push notification to all subscribers or a specific segment
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3399-L3411) · Schema: tools/list.

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
    "message": {
      "default": null,
      "title": "Message",
      "type": "string"
    },
    "url": {
      "default": null,
      "title": "Url",
      "type": "string"
    },
    "image_url": {
      "default": null,
      "title": "Image Url",
      "type": "string"
    },
    "segment": {
      "default": null,
      "title": "Segment",
      "type": "string"
    },
    "post_id": {
      "default": null,
      "title": "Post Id",
      "type": "integer"
    },
    "schedule_time": {
      "default": null,
      "title": "Schedule Time",
      "type": "string"
    }
  },
  "title": "push_send_notificationArguments",
  "type": "object"
}
```

</details>

<a id="tool-push_segments_list-a1a8e3b8"></a>

## push_segments_list

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List push notification subscriber segments
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3413-L3419) · Schema: tools/list.

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
  "title": "push_segments_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-chat_detect_plugin-bac42614"></a>

## chat_detect_plugin

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Detect installed live chat plugins (Tidio, LiveChat, Crisp, Tawk.to, WP Live Chat Support, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3421-L3425) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "chat_detect_pluginArguments",
  "type": "object"
}
```

</details>

<a id="tool-chat_widget_install-91f63bdd"></a>

## chat_widget_install

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Install/inject a chat widget script into the WordPress site
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3427-L3435) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "provider": {
      "title": "Provider",
      "type": "string"
    },
    "widget_id": {
      "title": "Widget Id",
      "type": "string"
    },
    "api_key": {
      "default": null,
      "title": "Api Key",
      "type": "string"
    }
  },
  "required": [
    "provider",
    "widget_id"
  ],
  "title": "chat_widget_installArguments",
  "type": "object"
}
```

</details>

<a id="tool-chat_widget_configure-a2474f61"></a>

## chat_widget_configure

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Configure live chat widget settings (position, color, behavior, visibility)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3437-L3451) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "plugin": {
      "title": "Plugin",
      "type": "string"
    },
    "position": {
      "default": null,
      "title": "Position",
      "type": "string"
    },
    "color": {
      "default": null,
      "title": "Color",
      "type": "string"
    },
    "welcome_message": {
      "default": null,
      "title": "Welcome Message",
      "type": "string"
    },
    "auto_popup": {
      "default": null,
      "title": "Auto Popup",
      "type": "boolean"
    },
    "auto_popup_delay": {
      "default": null,
      "title": "Auto Popup Delay",
      "type": "integer"
    },
    "show_on_mobile": {
      "default": null,
      "title": "Show On Mobile",
      "type": "boolean"
    },
    "hide_on_pages": {
      "default": null,
      "items": {},
      "title": "Hide On Pages",
      "type": "array"
    },
    "working_hours": {
      "additionalProperties": true,
      "default": null,
      "title": "Working Hours",
      "type": "object"
    }
  },
  "required": [
    "plugin"
  ],
  "title": "chat_widget_configureArguments",
  "type": "object"
}
```

</details>

<a id="tool-chat_offline_message_configure-91dbe83a"></a>

## chat_offline_message_configure

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Configure the offline/away message form shown when no agents are available
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L3453-L3465) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "plugin": {
      "title": "Plugin",
      "type": "string"
    },
    "offline_message": {
      "default": null,
      "title": "Offline Message",
      "type": "string"
    },
    "collect_email": {
      "default": true,
      "title": "Collect Email",
      "type": "boolean"
    },
    "collect_name": {
      "default": null,
      "title": "Collect Name",
      "type": "boolean"
    },
    "collect_phone": {
      "default": null,
      "title": "Collect Phone",
      "type": "boolean"
    },
    "email_recipient": {
      "default": null,
      "title": "Email Recipient",
      "type": "string"
    },
    "auto_reply": {
      "default": null,
      "title": "Auto Reply",
      "type": "string"
    }
  },
  "required": [
    "plugin"
  ],
  "title": "chat_offline_message_configureArguments",
  "type": "object"
}
```

</details>
