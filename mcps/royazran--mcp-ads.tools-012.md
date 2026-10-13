# RoyAzran/mcp-ads: supporting and other-product tools

[Provider inventory](royazran--mcp-ads.md) · [Global tool index](../TOOL_INDEX.md)

Tools 1651–1800 of 3131. Exact schemas from the same upstream snapshot.

<a id="tool-reviews_wc_create-08f5210f"></a>

## reviews_wc_create

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a WooCommerce product review
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L311-L322) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "product_id": {
      "title": "Product Id",
      "type": "integer"
    },
    "review": {
      "title": "Review",
      "type": "string"
    },
    "reviewer": {
      "title": "Reviewer",
      "type": "string"
    },
    "reviewer_email": {
      "title": "Reviewer Email",
      "type": "string"
    },
    "rating": {
      "title": "Rating",
      "type": "integer"
    },
    "status": {
      "default": "approved",
      "title": "Status",
      "type": "string"
    }
  },
  "required": [
    "product_id",
    "review",
    "reviewer",
    "reviewer_email",
    "rating"
  ],
  "title": "reviews_wc_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-reviews_wc_update-853b5f05"></a>

## reviews_wc_update

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Update a WooCommerce product review (approve, unapprove, edit content, change rating)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L324-L335) · Schema: tools/list.

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
    "review": {
      "default": null,
      "title": "Review",
      "type": "string"
    },
    "rating": {
      "default": null,
      "title": "Rating",
      "type": "integer"
    },
    "status": {
      "default": null,
      "title": "Status",
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
    }
  },
  "required": [
    "id"
  ],
  "title": "reviews_wc_updateArguments",
  "type": "object"
}
```

</details>

<a id="tool-reviews_wc_delete-b9895947"></a>

## reviews_wc_delete

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] Tool tool. Delete a WooCommerce product review
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L337-L345) · Schema: tools/list.

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
    "force": {
      "default": true,
      "title": "Force",
      "type": "boolean"
    }
  },
  "required": [
    "id"
  ],
  "title": "reviews_wc_deleteArguments",
  "type": "object"
}
```

</details>

<a id="tool-reviews_wc_reply-e6cb6fb6"></a>

## reviews_wc_reply

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().post, \_wp.

```text
[WRITE] Tool tool. Reply to a WooCommerce product review (creates a comment reply)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L347-L366) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "review_id": {
      "title": "Review Id",
      "type": "integer"
    },
    "product_id": {
      "title": "Product Id",
      "type": "integer"
    },
    "content": {
      "title": "Content",
      "type": "string"
    },
    "author_name": {
      "default": null,
      "title": "Author Name",
      "type": "string"
    },
    "author_email": {
      "default": null,
      "title": "Author Email",
      "type": "string"
    }
  },
  "required": [
    "review_id",
    "product_id",
    "content"
  ],
  "title": "reviews_wc_replyArguments",
  "type": "object"
}
```

</details>

<a id="tool-reviews_wc_bulk_approve-1edd03a4"></a>

## reviews_wc_bulk_approve

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, updated.append, \_wp().put, \_wp.

```text
[WRITE] Tool tool. Bulk approve/hold multiple WooCommerce product reviews
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L368-L377) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "review_ids": {
      "items": {},
      "title": "Review Ids",
      "type": "array"
    },
    "status": {
      "title": "Status",
      "type": "string"
    }
  },
  "required": [
    "review_ids",
    "status"
  ],
  "title": "reviews_wc_bulk_approveArguments",
  "type": "object"
}
```

</details>

<a id="tool-reviews_google_detect-b5dbcac8"></a>

## reviews_google_detect

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Detect if a Google Reviews widget plugin is installed and get configuration info
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L379-L383) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "reviews_google_detectArguments",
  "type": "object"
}
```

</details>

<a id="tool-reviews_trustpilot_configure-b5edc739"></a>

## reviews_trustpilot_configure

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Configure Trustpilot integration settings (widget embed, business unit ID)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L385-L398) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "business_unit_id": {
      "title": "Business Unit Id",
      "type": "string"
    },
    "widget_type": {
      "default": "carousel",
      "title": "Widget Type",
      "type": "string"
    },
    "theme": {
      "default": "light",
      "title": "Theme",
      "type": "string"
    },
    "locale": {
      "default": "en-US",
      "title": "Locale",
      "type": "string"
    },
    "stars": {
      "default": "4,5",
      "title": "Stars",
      "type": "string"
    },
    "review_count": {
      "default": 10,
      "title": "Review Count",
      "type": "integer"
    },
    "height": {
      "default": "240px",
      "title": "Height",
      "type": "string"
    },
    "width": {
      "default": "100%",
      "title": "Width",
      "type": "string"
    }
  },
  "required": [
    "business_unit_id"
  ],
  "title": "reviews_trustpilot_configureArguments",
  "type": "object"
}
```

</details>

<a id="tool-reviews_schema_generate-e909645f"></a>

## reviews_schema_generate

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Generate Review or AggregateRating JSON-LD schema markup for a product or page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L400-L414) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "type": {
      "title": "Type",
      "type": "string"
    },
    "name": {
      "title": "Name",
      "type": "string"
    },
    "rating_value": {
      "title": "Rating Value",
      "type": "integer"
    },
    "review_count": {
      "title": "Review Count",
      "type": "integer"
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
    "reviews": {
      "default": null,
      "items": {},
      "title": "Reviews",
      "type": "array"
    }
  },
  "required": [
    "type",
    "name",
    "rating_value",
    "review_count"
  ],
  "title": "reviews_schema_generateArguments",
  "type": "object"
}
```

</details>

<a id="tool-reviews_import_from_csv-28d48773"></a>

## reviews_import_from_csv

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Import product reviews from CSV data (array of review objects)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L416-L423) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "reviews": {
      "default": false,
      "items": {},
      "title": "Reviews",
      "type": "array"
    },
    "status": {
      "default": "approved",
      "title": "Status",
      "type": "string"
    }
  },
  "title": "reviews_import_from_csvArguments",
  "type": "object"
}
```

</details>

<a id="tool-reviews_summary_stats-f05677aa"></a>

## reviews_summary_stats

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Get review summary statistics: average rating, count by stars, total reviews for a product or all products
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L425-L431) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "product_id": {
      "default": null,
      "title": "Product Id",
      "type": "integer"
    }
  },
  "title": "reviews_summary_statsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_subs_list-91edf7b9"></a>

## wc_subs_list

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. List WooCommerce Subscriptions with optional filters
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L433-L452) · Schema: tools/list.

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
    "status": {
      "default": null,
      "title": "Status",
      "type": "string"
    },
    "customer": {
      "default": null,
      "title": "Customer",
      "type": "integer"
    },
    "product": {
      "default": null,
      "title": "Product",
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
  "title": "wc_subs_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_subs_get-173c7d5c"></a>

## wc_subs_get

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get a single WooCommerce Subscription by ID
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L454-L460) · Schema: tools/list.

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
  "title": "wc_subs_getArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_subs_create-fdaf3689"></a>

## wc_subs_create

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_post, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Create a new WooCommerce Subscription
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L462-L479) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "customer_id": {
      "title": "Customer Id",
      "type": "integer"
    },
    "billing_period": {
      "title": "Billing Period",
      "type": "string"
    },
    "status": {
      "default": "pending",
      "title": "Status",
      "type": "string"
    },
    "billing_interval": {
      "default": 1,
      "title": "Billing Interval",
      "type": "integer"
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
    "line_items": {
      "default": null,
      "items": {},
      "title": "Line Items",
      "type": "array"
    },
    "billing": {
      "additionalProperties": true,
      "default": null,
      "title": "Billing",
      "type": "object"
    },
    "shipping": {
      "additionalProperties": true,
      "default": null,
      "title": "Shipping",
      "type": "object"
    },
    "payment_method": {
      "default": null,
      "title": "Payment Method",
      "type": "string"
    },
    "payment_method_title": {
      "default": null,
      "title": "Payment Method Title",
      "type": "string"
    },
    "meta_data": {
      "default": null,
      "items": {},
      "title": "Meta Data",
      "type": "array"
    }
  },
  "required": [
    "customer_id",
    "billing_period"
  ],
  "title": "wc_subs_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_subs_update-554972d1"></a>

## wc_subs_update

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Update an existing WooCommerce Subscription
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L481-L493) · Schema: tools/list.

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
    "status": {
      "default": null,
      "title": "Status",
      "type": "string"
    },
    "billing_period": {
      "default": null,
      "title": "Billing Period",
      "type": "string"
    },
    "billing_interval": {
      "default": null,
      "title": "Billing Interval",
      "type": "integer"
    },
    "next_payment_date": {
      "default": null,
      "title": "Next Payment Date",
      "type": "string"
    },
    "end_date": {
      "default": null,
      "title": "End Date",
      "type": "string"
    },
    "meta_data": {
      "default": null,
      "items": {},
      "title": "Meta Data",
      "type": "array"
    }
  },
  "required": [
    "id"
  ],
  "title": "wc_subs_updateArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_subs_cancel-c9c3a36f"></a>

## wc_subs_cancel

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Cancel a WooCommerce Subscription
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L495-L501) · Schema: tools/list.

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
  "title": "wc_subs_cancelArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_subs_pause-e4bbfc21"></a>

## wc_subs_pause

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Pause (put on-hold) a WooCommerce Subscription
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L503-L509) · Schema: tools/list.

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
  "title": "wc_subs_pauseArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_subs_resume-81c065a0"></a>

## wc_subs_resume

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Resume an on-hold WooCommerce Subscription back to active
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L511-L517) · Schema: tools/list.

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
  "title": "wc_subs_resumeArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_bookings_list-b1ac91b8"></a>

## wc_bookings_list

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. List WooCommerce Bookings with optional filters
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L519-L539) · Schema: tools/list.

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
    "status": {
      "default": null,
      "title": "Status",
      "type": "string"
    },
    "product_id": {
      "default": null,
      "title": "Product Id",
      "type": "integer"
    },
    "resource_id": {
      "default": null,
      "title": "Resource Id",
      "type": "integer"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
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
  "title": "wc_bookings_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_bookings_create-90a43715"></a>

## wc_bookings_create

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_post, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Create a new WooCommerce Booking
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L541-L555) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "product_id": {
      "title": "Product Id",
      "type": "integer"
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
      "type": "integer"
    },
    "status": {
      "default": "confirmed",
      "title": "Status",
      "type": "string"
    },
    "resource_id": {
      "default": null,
      "title": "Resource Id",
      "type": "integer"
    },
    "persons": {
      "default": null,
      "items": {},
      "title": "Persons",
      "type": "array"
    },
    "order_id": {
      "default": null,
      "title": "Order Id",
      "type": "integer"
    },
    "meta_data": {
      "default": null,
      "items": {},
      "title": "Meta Data",
      "type": "array"
    }
  },
  "required": [
    "product_id",
    "start_date",
    "end_date"
  ],
  "title": "wc_bookings_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_bookings_update_status-a5f3a264"></a>

## wc_bookings_update_status

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Update the status of a WooCommerce Booking
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L557-L564) · Schema: tools/list.

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
    "status": {
      "title": "Status",
      "type": "string"
    }
  },
  "required": [
    "id",
    "status"
  ],
  "title": "wc_bookings_update_statusArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_bookings_resources_list-cfcce749"></a>

## wc_bookings_resources_list

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. List all WooCommerce Booking resources
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L566-L573) · Schema: tools/list.

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
  "title": "wc_bookings_resources_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_memberships_plans_list-e28ef25f"></a>

## wc_memberships_plans_list

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. List all WooCommerce Memberships plans
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L575-L584) · Schema: tools/list.

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
    "status": {
      "default": null,
      "title": "Status",
      "type": "string"
    }
  },
  "title": "wc_memberships_plans_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_memberships_grant_access-f7c61427"></a>

## wc_memberships_grant_access

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Grant a user access to a membership plan
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L586-L596) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "customer_id": {
      "title": "Customer Id",
      "type": "integer"
    },
    "plan_id": {
      "title": "Plan Id",
      "type": "integer"
    },
    "order_id": {
      "default": null,
      "title": "Order Id",
      "type": "integer"
    }
  },
  "required": [
    "customer_id",
    "plan_id"
  ],
  "title": "wc_memberships_grant_accessArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_memberships_revoke_access-c5572aa7"></a>

## wc_memberships_revoke_access

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Revoke a user's membership (cancel user membership)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L598-L605) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "membership_id": {
      "title": "Membership Id",
      "type": "integer"
    }
  },
  "required": [
    "membership_id"
  ],
  "title": "wc_memberships_revoke_accessArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_product_addons_get-0f0688aa"></a>

## wc_product_addons_get

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_post, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Get product add-ons (extra options) configured on a product
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L607-L613) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "product_id": {
      "title": "Product Id",
      "type": "integer"
    }
  },
  "required": [
    "product_id"
  ],
  "title": "wc_product_addons_getArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_product_addons_set-94c79790"></a>

## wc_product_addons_set

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_post, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Set product add-ons configuration on a product
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L615-L622) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "product_id": {
      "title": "Product Id",
      "type": "integer"
    },
    "addons": {
      "items": {},
      "title": "Addons",
      "type": "array"
    }
  },
  "required": [
    "product_id",
    "addons"
  ],
  "title": "wc_product_addons_setArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_bundles_configure-e6ed5368"></a>

## wc_bundles_configure

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Configure a WooCommerce Product Bundle (set bundled items, quantities, discounts)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L624-L636) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "product_id": {
      "title": "Product Id",
      "type": "integer"
    },
    "bundled_items": {
      "items": {},
      "title": "Bundled Items",
      "type": "array"
    },
    "layout": {
      "default": null,
      "title": "Layout",
      "type": "string"
    },
    "bundle_sells": {
      "default": null,
      "items": {},
      "title": "Bundle Sells",
      "type": "array"
    }
  },
  "required": [
    "product_id",
    "bundled_items"
  ],
  "title": "wc_bundles_configureArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_yith_wishlist_list-54d2bb63"></a>

## wc_yith_wishlist_list

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. List YITH wishlists (optionally by customer)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L638-L648) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "customer_id": {
      "default": null,
      "title": "Customer Id",
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
    }
  },
  "title": "wc_yith_wishlist_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_yith_brands_list-f79ceb30"></a>

## wc_yith_brands_list

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. List YITH WooCommerce Brands
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L650-L659) · Schema: tools/list.

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
    "hide_empty": {
      "default": false,
      "title": "Hide Empty",
      "type": "boolean"
    }
  },
  "title": "wc_yith_brands_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_dokan_vendors_list-90b35995"></a>

## wc_dokan_vendors_list

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. List all Dokan vendors (stores)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L661-L674) · Schema: tools/list.

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
    "search": {
      "default": null,
      "title": "Search",
      "type": "string"
    },
    "status": {
      "default": null,
      "title": "Status",
      "type": "string"
    }
  },
  "title": "wc_dokan_vendors_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_dokan_vendors_create-90975d77"></a>

## wc_dokan_vendors_create

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_post, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Create a new Dokan vendor
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L676-L691) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "user_login": {
      "title": "User Login",
      "type": "string"
    },
    "email": {
      "title": "Email",
      "type": "string"
    },
    "store_name": {
      "title": "Store Name",
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
    "social": {
      "additionalProperties": true,
      "default": null,
      "title": "Social",
      "type": "object"
    },
    "payment": {
      "additionalProperties": true,
      "default": null,
      "title": "Payment",
      "type": "object"
    },
    "enabled": {
      "default": true,
      "title": "Enabled",
      "type": "boolean"
    }
  },
  "required": [
    "user_login",
    "email",
    "store_name"
  ],
  "title": "wc_dokan_vendors_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_dokan_products_by_vendor-fd175ad9"></a>

## wc_dokan_products_by_vendor

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. List products belonging to a specific Dokan vendor
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L693-L705) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "vendor_id": {
      "title": "Vendor Id",
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
    }
  },
  "required": [
    "vendor_id"
  ],
  "title": "wc_dokan_products_by_vendorArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_dokan_withdrawals_list-a461c89a"></a>

## wc_dokan_withdrawals_list

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. List Dokan vendor withdrawals
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L707-L719) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "vendor_id": {
      "default": null,
      "title": "Vendor Id",
      "type": "integer"
    },
    "status": {
      "default": null,
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
  "title": "wc_dokan_withdrawals_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_dokan_commission_set-11fad487"></a>

## wc_dokan_commission_set

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Set Dokan commission rate for a vendor or globally
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L721-L730) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "type": {
      "title": "Type",
      "type": "string"
    },
    "rate": {
      "title": "Rate",
      "type": "integer"
    },
    "vendor_id": {
      "default": null,
      "title": "Vendor Id",
      "type": "integer"
    },
    "flat": {
      "default": null,
      "title": "Flat",
      "type": "integer"
    }
  },
  "required": [
    "type",
    "rate"
  ],
  "title": "wc_dokan_commission_setArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_store_get_cart-d020adbb"></a>

## wc_store_get_cart

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] WooCommerce tool. Get the current WooCommerce Store API cart (headless)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L732-L738) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "cart_token": {
      "default": null,
      "title": "Cart Token",
      "type": "string"
    }
  },
  "title": "wc_store_get_cartArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_store_add_to_cart-bbc0a5f1"></a>

## wc_store_add_to_cart

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Add an item to the WooCommerce Store API cart
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L740-L750) · Schema: tools/list.

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
    "quantity": {
      "default": 1,
      "title": "Quantity",
      "type": "integer"
    },
    "variation": {
      "default": null,
      "items": {},
      "title": "Variation",
      "type": "array"
    },
    "cart_token": {
      "default": null,
      "title": "Cart Token",
      "type": "string"
    }
  },
  "required": [
    "id"
  ],
  "title": "wc_store_add_to_cartArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_store_update_item-ceb4e964"></a>

## wc_store_update_item

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Update an item quantity in the WooCommerce Store API cart
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L752-L761) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "key": {
      "title": "Key",
      "type": "string"
    },
    "quantity": {
      "title": "Quantity",
      "type": "integer"
    },
    "cart_token": {
      "default": null,
      "title": "Cart Token",
      "type": "string"
    }
  },
  "required": [
    "key",
    "quantity"
  ],
  "title": "wc_store_update_itemArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_store_remove_item-4c6942cc"></a>

## wc_store_remove_item

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().post, \_wp.

```text
[WRITE] WooCommerce tool. Remove an item from the WooCommerce Store API cart
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L763-L770) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "key": {
      "title": "Key",
      "type": "string"
    },
    "cart_token": {
      "default": null,
      "title": "Cart Token",
      "type": "string"
    }
  },
  "required": [
    "key"
  ],
  "title": "wc_store_remove_itemArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_store_apply_coupon-42b68a3d"></a>

## wc_store_apply_coupon

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().post, \_wp.

```text
[WRITE] WooCommerce tool. Apply a coupon code to the WooCommerce Store API cart
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L772-L779) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "code": {
      "title": "Code",
      "type": "string"
    },
    "cart_token": {
      "default": null,
      "title": "Cart Token",
      "type": "string"
    }
  },
  "required": [
    "code"
  ],
  "title": "wc_store_apply_couponArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_store_checkout-086e4aa5"></a>

## wc_store_checkout

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Submit a checkout via WooCommerce Store API
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L781-L793) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "billing_address": {
      "additionalProperties": true,
      "title": "Billing Address",
      "type": "object"
    },
    "payment_method": {
      "title": "Payment Method",
      "type": "string"
    },
    "shipping_address": {
      "additionalProperties": true,
      "default": null,
      "title": "Shipping Address",
      "type": "object"
    },
    "payment_data": {
      "default": null,
      "items": {},
      "title": "Payment Data",
      "type": "array"
    },
    "customer_note": {
      "default": null,
      "title": "Customer Note",
      "type": "string"
    },
    "cart_token": {
      "default": null,
      "title": "Cart Token",
      "type": "string"
    }
  },
  "required": [
    "billing_address",
    "payment_method"
  ],
  "title": "wc_store_checkoutArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_list_products-b165d386"></a>

## woo_list_products

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, params.setdefault, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. List WooCommerce products with filters (category, status, price range, stock)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L795-L831) · Schema: tools/list.

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
    "search": {
      "default": null,
      "title": "Search",
      "type": "string"
    },
    "status": {
      "default": "any",
      "title": "Status",
      "type": "string"
    },
    "category": {
      "default": null,
      "title": "Category",
      "type": "integer"
    },
    "tag": {
      "default": null,
      "title": "Tag",
      "type": "integer"
    },
    "type": {
      "default": null,
      "title": "Type",
      "type": "string"
    },
    "stock_status": {
      "default": null,
      "title": "Stock Status",
      "type": "string"
    },
    "min_price": {
      "default": null,
      "title": "Min Price",
      "type": "string"
    },
    "max_price": {
      "default": null,
      "title": "Max Price",
      "type": "string"
    },
    "sku": {
      "default": null,
      "title": "Sku",
      "type": "string"
    },
    "featured": {
      "default": null,
      "title": "Featured",
      "type": "boolean"
    },
    "on_sale": {
      "default": null,
      "title": "On Sale",
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
  "title": "woo_list_productsArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_get_product-ac230952"></a>

## woo_get_product

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get a single WooCommerce product with all details
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L833-L839) · Schema: tools/list.

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
  "title": "woo_get_productArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_create_product-4fcbde48"></a>

## woo_create_product

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_post, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Create a new WooCommerce product (simple, variable, digital, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L841-L872) · Schema: tools/list.

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
    "type": {
      "default": "simple",
      "title": "Type",
      "type": "string"
    },
    "status": {
      "default": "publish",
      "title": "Status",
      "type": "string"
    },
    "regular_price": {
      "default": null,
      "title": "Regular Price",
      "type": "string"
    },
    "sale_price": {
      "default": null,
      "title": "Sale Price",
      "type": "string"
    },
    "description": {
      "default": null,
      "title": "Description",
      "type": "string"
    },
    "short_description": {
      "default": null,
      "title": "Short Description",
      "type": "string"
    },
    "sku": {
      "default": null,
      "title": "Sku",
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
    "images": {
      "default": null,
      "items": {},
      "title": "Images",
      "type": "array"
    },
    "manage_stock": {
      "default": null,
      "title": "Manage Stock",
      "type": "boolean"
    },
    "stock_quantity": {
      "default": null,
      "title": "Stock Quantity",
      "type": "integer"
    },
    "stock_status": {
      "default": null,
      "title": "Stock Status",
      "type": "string"
    },
    "backorders": {
      "default": null,
      "title": "Backorders",
      "type": "string"
    },
    "weight": {
      "default": null,
      "title": "Weight",
      "type": "string"
    },
    "dimensions": {
      "additionalProperties": true,
      "default": null,
      "title": "Dimensions",
      "type": "object"
    },
    "virtual": {
      "default": null,
      "title": "Virtual",
      "type": "boolean"
    },
    "downloadable": {
      "default": null,
      "title": "Downloadable",
      "type": "boolean"
    },
    "downloads": {
      "default": null,
      "items": {},
      "title": "Downloads",
      "type": "array"
    },
    "featured": {
      "default": null,
      "title": "Featured",
      "type": "boolean"
    },
    "catalog_visibility": {
      "default": null,
      "title": "Catalog Visibility",
      "type": "string"
    },
    "attributes": {
      "default": null,
      "items": {},
      "title": "Attributes",
      "type": "array"
    },
    "meta_data": {
      "default": null,
      "items": {},
      "title": "Meta Data",
      "type": "array"
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
  "title": "woo_create_productArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_update_product-a91ec78e"></a>

## woo_update_product

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Update any WooCommerce product field — price, stock, description, images, etc.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L874-L896) · Schema: tools/list.

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
    "status": {
      "default": null,
      "title": "Status",
      "type": "string"
    },
    "regular_price": {
      "default": null,
      "title": "Regular Price",
      "type": "string"
    },
    "sale_price": {
      "default": null,
      "title": "Sale Price",
      "type": "string"
    },
    "description": {
      "default": null,
      "title": "Description",
      "type": "string"
    },
    "short_description": {
      "default": null,
      "title": "Short Description",
      "type": "string"
    },
    "sku": {
      "default": null,
      "title": "Sku",
      "type": "string"
    },
    "manage_stock": {
      "default": null,
      "title": "Manage Stock",
      "type": "boolean"
    },
    "stock_quantity": {
      "default": null,
      "title": "Stock Quantity",
      "type": "integer"
    },
    "stock_status": {
      "default": null,
      "title": "Stock Status",
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
    "images": {
      "default": null,
      "items": {},
      "title": "Images",
      "type": "array"
    },
    "featured": {
      "default": null,
      "title": "Featured",
      "type": "boolean"
    },
    "catalog_visibility": {
      "default": null,
      "title": "Catalog Visibility",
      "type": "string"
    },
    "meta_data": {
      "default": null,
      "items": {},
      "title": "Meta Data",
      "type": "array"
    }
  },
  "required": [
    "id"
  ],
  "title": "woo_update_productArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_delete_product-e7ab0943"></a>

## woo_delete_product

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_delete, \_wp.

```text
[WRITE] WooCommerce tool. Delete a WooCommerce product
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L898-L905) · Schema: tools/list.

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
      "default": true,
      "title": "Force",
      "type": "boolean"
    }
  },
  "required": [
    "id"
  ],
  "title": "woo_delete_productArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_bulk_update_products-51c8e873"></a>

## woo_bulk_update_products

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_post, \_wp.

```text
[WRITE] WooCommerce tool. Update multiple products at once (batch endpoint)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L907-L912) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
  "title": "woo_bulk_update_productsArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_get_product_variations-aaf77552"></a>

## woo_get_product_variations

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get all variations of a variable product
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L914-L922) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "product_id": {
      "title": "Product Id",
      "type": "integer"
    },
    "per_page": {
      "default": 50,
      "title": "Per Page",
      "type": "integer"
    }
  },
  "required": [
    "product_id"
  ],
  "title": "woo_get_product_variationsArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_create_product_variation-4b2f531a"></a>

## woo_create_product_variation

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_post, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Create a variation for a variable product
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L924-L940) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "product_id": {
      "title": "Product Id",
      "type": "integer"
    },
    "regular_price": {
      "default": null,
      "title": "Regular Price",
      "type": "string"
    },
    "sale_price": {
      "default": null,
      "title": "Sale Price",
      "type": "string"
    },
    "sku": {
      "default": null,
      "title": "Sku",
      "type": "string"
    },
    "stock_quantity": {
      "default": null,
      "title": "Stock Quantity",
      "type": "integer"
    },
    "stock_status": {
      "default": null,
      "title": "Stock Status",
      "type": "string"
    },
    "attributes": {
      "default": null,
      "items": {},
      "title": "Attributes",
      "type": "array"
    },
    "image": {
      "additionalProperties": true,
      "default": null,
      "title": "Image",
      "type": "object"
    },
    "weight": {
      "default": null,
      "title": "Weight",
      "type": "string"
    },
    "virtual": {
      "default": null,
      "title": "Virtual",
      "type": "boolean"
    },
    "downloadable": {
      "default": null,
      "title": "Downloadable",
      "type": "boolean"
    }
  },
  "required": [
    "product_id"
  ],
  "title": "woo_create_product_variationArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_update_product_variation-95b947c2"></a>

## woo_update_product_variation

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Update a product variation
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L942-L954) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "product_id": {
      "title": "Product Id",
      "type": "integer"
    },
    "variation_id": {
      "title": "Variation Id",
      "type": "integer"
    },
    "regular_price": {
      "default": null,
      "title": "Regular Price",
      "type": "string"
    },
    "sale_price": {
      "default": null,
      "title": "Sale Price",
      "type": "string"
    },
    "stock_quantity": {
      "default": null,
      "title": "Stock Quantity",
      "type": "integer"
    },
    "stock_status": {
      "default": null,
      "title": "Stock Status",
      "type": "string"
    },
    "attributes": {
      "default": null,
      "items": {},
      "title": "Attributes",
      "type": "array"
    }
  },
  "required": [
    "product_id",
    "variation_id"
  ],
  "title": "woo_update_product_variationArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_list_product_categories-f6cdc19a"></a>

## woo_list_product_categories

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. List WooCommerce product categories
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L956-L967) · Schema: tools/list.

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
  "title": "woo_list_product_categoriesArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_create_product_category-7bf7643b"></a>

## woo_create_product_category

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_post, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Create a WooCommerce product category
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L969-L979) · Schema: tools/list.

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
    "parent": {
      "default": null,
      "title": "Parent",
      "type": "integer"
    },
    "description": {
      "default": null,
      "title": "Description",
      "type": "string"
    },
    "image": {
      "additionalProperties": true,
      "default": null,
      "title": "Image",
      "type": "object"
    }
  },
  "required": [
    "name"
  ],
  "title": "woo_create_product_categoryArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_update_product_category-39bef6d2"></a>

## woo_update_product_category

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Update a product category
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L981-L991) · Schema: tools/list.

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
    "description": {
      "default": null,
      "title": "Description",
      "type": "string"
    },
    "image": {
      "additionalProperties": true,
      "default": null,
      "title": "Image",
      "type": "object"
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
  "title": "woo_update_product_categoryArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_list_orders-9c4bf99a"></a>

## woo_list_orders

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, params.setdefault, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. List WooCommerce orders with filters
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L993-L1019) · Schema: tools/list.

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
    "status": {
      "default": null,
      "title": "Status",
      "type": "string"
    },
    "customer": {
      "default": null,
      "title": "Customer",
      "type": "integer"
    },
    "product": {
      "default": null,
      "title": "Product",
      "type": "integer"
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
  "title": "woo_list_ordersArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_get_order-343a9b43"></a>

## woo_get_order

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get a single order with all details (items, billing, shipping, meta)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1021-L1027) · Schema: tools/list.

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
  "title": "woo_get_orderArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_create_order-25fd6ea7"></a>

## woo_create_order

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_post, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Create a WooCommerce order
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1029-L1043) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "status": {
      "default": "pending",
      "title": "Status",
      "type": "string"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "integer"
    },
    "line_items": {
      "default": null,
      "items": {},
      "title": "Line Items",
      "type": "array"
    },
    "billing": {
      "additionalProperties": true,
      "default": null,
      "title": "Billing",
      "type": "object"
    },
    "shipping": {
      "additionalProperties": true,
      "default": null,
      "title": "Shipping",
      "type": "object"
    },
    "payment_method": {
      "default": null,
      "title": "Payment Method",
      "type": "string"
    },
    "payment_method_title": {
      "default": null,
      "title": "Payment Method Title",
      "type": "string"
    },
    "set_paid": {
      "default": null,
      "title": "Set Paid",
      "type": "boolean"
    },
    "meta_data": {
      "default": null,
      "items": {},
      "title": "Meta Data",
      "type": "array"
    }
  },
  "title": "woo_create_orderArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_update_order_status-6a87590b"></a>

## woo_update_order_status

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Change the status of a WooCommerce order
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1045-L1053) · Schema: tools/list.

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
    "status": {
      "title": "Status",
      "type": "string"
    },
    "note": {
      "default": null,
      "title": "Note",
      "type": "string"
    }
  },
  "required": [
    "id",
    "status"
  ],
  "title": "woo_update_order_statusArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_add_order_note-e623d089"></a>

## woo_add_order_note

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_post, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Add a note to a WooCommerce order
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1055-L1063) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "order_id": {
      "title": "Order Id",
      "type": "integer"
    },
    "note": {
      "title": "Note",
      "type": "string"
    },
    "customer_note": {
      "default": false,
      "title": "Customer Note",
      "type": "boolean"
    }
  },
  "required": [
    "order_id",
    "note"
  ],
  "title": "woo_add_order_noteArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_refund_order-9e547603"></a>

## woo_refund_order

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_post, \_wp.

```text
[WRITE] WooCommerce tool. Create a refund for an order
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1065-L1077) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "order_id": {
      "title": "Order Id",
      "type": "integer"
    },
    "amount": {
      "title": "Amount",
      "type": "string"
    },
    "reason": {
      "default": null,
      "title": "Reason",
      "type": "string"
    },
    "api_refund": {
      "default": true,
      "title": "Api Refund",
      "type": "boolean"
    }
  },
  "required": [
    "order_id",
    "amount"
  ],
  "title": "woo_refund_orderArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_list_customers-000bf761"></a>

## woo_list_customers

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. List WooCommerce customers
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1079-L1096) · Schema: tools/list.

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
    "search": {
      "default": null,
      "title": "Search",
      "type": "string"
    },
    "email": {
      "default": null,
      "title": "Email",
      "type": "string"
    },
    "role": {
      "default": "customer",
      "title": "Role",
      "type": "string"
    },
    "orderby": {
      "default": null,
      "title": "Orderby",
      "type": "string"
    }
  },
  "title": "woo_list_customersArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_get_customer-32e0b5a2"></a>

## woo_get_customer

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get a WooCommerce customer by ID
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1098-L1104) · Schema: tools/list.

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
  "title": "woo_get_customerArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_create_customer-7609f171"></a>

## woo_create_customer

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_post, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Create a new WooCommerce customer
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1106-L1119) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "email": {
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
    "username": {
      "default": null,
      "title": "Username",
      "type": "string"
    },
    "password": {
      "default": null,
      "title": "Password",
      "type": "string"
    },
    "billing": {
      "additionalProperties": true,
      "default": null,
      "title": "Billing",
      "type": "object"
    },
    "shipping": {
      "additionalProperties": true,
      "default": null,
      "title": "Shipping",
      "type": "object"
    },
    "meta_data": {
      "default": null,
      "items": {},
      "title": "Meta Data",
      "type": "array"
    }
  },
  "required": [
    "email"
  ],
  "title": "woo_create_customerArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_update_customer-9ad2c994"></a>

## woo_update_customer

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Update a WooCommerce customer
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1121-L1133) · Schema: tools/list.

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
    "billing": {
      "additionalProperties": true,
      "default": null,
      "title": "Billing",
      "type": "object"
    },
    "shipping": {
      "additionalProperties": true,
      "default": null,
      "title": "Shipping",
      "type": "object"
    },
    "meta_data": {
      "default": null,
      "items": {},
      "title": "Meta Data",
      "type": "array"
    }
  },
  "required": [
    "id"
  ],
  "title": "woo_update_customerArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_list_coupons-9da33ab8"></a>

## woo_list_coupons

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. List WooCommerce coupons
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1135-L1146) · Schema: tools/list.

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
    "search": {
      "default": null,
      "title": "Search",
      "type": "string"
    },
    "code": {
      "default": null,
      "title": "Code",
      "type": "string"
    }
  },
  "title": "woo_list_couponsArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_create_coupon-350d5e7e"></a>

## woo_create_coupon

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_post, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Create a WooCommerce discount coupon
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1148-L1168) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "code": {
      "title": "Code",
      "type": "string"
    },
    "amount": {
      "title": "Amount",
      "type": "string"
    },
    "discount_type": {
      "default": "percent",
      "title": "Discount Type",
      "type": "string"
    },
    "description": {
      "default": null,
      "title": "Description",
      "type": "string"
    },
    "date_expires": {
      "default": null,
      "title": "Date Expires",
      "type": "string"
    },
    "minimum_amount": {
      "default": null,
      "title": "Minimum Amount",
      "type": "string"
    },
    "maximum_amount": {
      "default": null,
      "title": "Maximum Amount",
      "type": "string"
    },
    "usage_limit": {
      "default": null,
      "title": "Usage Limit",
      "type": "integer"
    },
    "usage_limit_per_user": {
      "default": null,
      "title": "Usage Limit Per User",
      "type": "integer"
    },
    "individual_use": {
      "default": null,
      "title": "Individual Use",
      "type": "boolean"
    },
    "exclude_sale_items": {
      "default": null,
      "title": "Exclude Sale Items",
      "type": "boolean"
    },
    "product_ids": {
      "default": null,
      "items": {},
      "title": "Product Ids",
      "type": "array"
    },
    "excluded_product_ids": {
      "default": null,
      "items": {},
      "title": "Excluded Product Ids",
      "type": "array"
    },
    "product_categories": {
      "default": null,
      "items": {},
      "title": "Product Categories",
      "type": "array"
    },
    "free_shipping": {
      "default": null,
      "title": "Free Shipping",
      "type": "boolean"
    }
  },
  "required": [
    "code",
    "amount"
  ],
  "title": "woo_create_couponArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_update_coupon-f39a4679"></a>

## woo_update_coupon

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Update an existing coupon
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1170-L1181) · Schema: tools/list.

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
    "code": {
      "default": null,
      "title": "Code",
      "type": "string"
    },
    "discount_type": {
      "default": null,
      "title": "Discount Type",
      "type": "string"
    },
    "amount": {
      "default": null,
      "title": "Amount",
      "type": "string"
    },
    "date_expires": {
      "default": null,
      "title": "Date Expires",
      "type": "string"
    },
    "usage_limit": {
      "default": null,
      "title": "Usage Limit",
      "type": "integer"
    }
  },
  "required": [
    "id"
  ],
  "title": "woo_update_couponArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_delete_coupon-56e8a8ef"></a>

## woo_delete_coupon

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_delete, \_wp.

```text
[WRITE] WooCommerce tool. Delete a WooCommerce coupon
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1183-L1189) · Schema: tools/list.

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
  "title": "woo_delete_couponArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_get_sales_report-c3027f6a"></a>

## woo_get_sales_report

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get WooCommerce sales report for a date period
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1191-L1202) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "period": {
      "default": null,
      "title": "Period",
      "type": "string"
    },
    "date_min": {
      "default": null,
      "title": "Date Min",
      "type": "string"
    },
    "date_max": {
      "default": null,
      "title": "Date Max",
      "type": "string"
    }
  },
  "title": "woo_get_sales_reportArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_get_top_sellers-d8c6fe6e"></a>

## woo_get_top_sellers

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get top selling WooCommerce products
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1204-L1215) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "period": {
      "default": null,
      "title": "Period",
      "type": "string"
    },
    "date_min": {
      "default": null,
      "title": "Date Min",
      "type": "string"
    },
    "date_max": {
      "default": null,
      "title": "Date Max",
      "type": "string"
    }
  },
  "title": "woo_get_top_sellersArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_get_store_settings-ff4abdfd"></a>

## woo_get_store_settings

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get WooCommerce store settings (currency, address, tax, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1217-L1222) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "group": {
      "default": "general",
      "title": "Group",
      "type": "string"
    }
  },
  "title": "woo_get_store_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_update_store_settings-379bb10f"></a>

## woo_update_store_settings

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, setting.get, updated.append, ValueError, \_wp().woo\_put, setting.items, \_wp.

```text
[WRITE] WooCommerce tool. Update WooCommerce store settings
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1224-L1237) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "group": {
      "title": "Group",
      "type": "string"
    },
    "settings": {
      "items": {},
      "title": "Settings",
      "type": "array"
    }
  },
  "required": [
    "group",
    "settings"
  ],
  "title": "woo_update_store_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_list_shipping_zones-83b953dc"></a>

## woo_list_shipping_zones

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. List all WooCommerce shipping zones
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1239-L1243) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "woo_list_shipping_zonesArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_create_shipping_zone-43fe61f1"></a>

## woo_create_shipping_zone

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_post, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Create a new shipping zone
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1245-L1252) · Schema: tools/list.

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
    "order": {
      "default": null,
      "title": "Order",
      "type": "integer"
    }
  },
  "required": [
    "name"
  ],
  "title": "woo_create_shipping_zoneArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_get_shipping_zone_methods-636bfe52"></a>

## woo_get_shipping_zone_methods

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get shipping methods for a zone
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1254-L1259) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "zone_id": {
      "title": "Zone Id",
      "type": "integer"
    }
  },
  "required": [
    "zone_id"
  ],
  "title": "woo_get_shipping_zone_methodsArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_list_payment_gateways-2d357596"></a>

## woo_list_payment_gateways

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. List all configured payment gateways
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1261-L1265) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "woo_list_payment_gatewaysArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_update_payment_gateway-572904fe"></a>

## woo_update_payment_gateway

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Enable/disable or configure a payment gateway
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1267-L1275) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "gateway_id": {
      "title": "Gateway Id",
      "type": "string"
    },
    "enabled": {
      "default": null,
      "title": "Enabled",
      "type": "boolean"
    },
    "settings": {
      "additionalProperties": true,
      "default": null,
      "title": "Settings",
      "type": "object"
    }
  },
  "required": [
    "gateway_id"
  ],
  "title": "woo_update_payment_gatewayArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_list_product_attributes-c7b0122f"></a>

## woo_list_product_attributes

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. List all WooCommerce product attributes (Size, Color, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1277-L1281) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "woo_list_product_attributesArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_create_product_attribute-6ac1306f"></a>

## woo_create_product_attribute

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_post, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Create a product attribute
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1283-L1292) · Schema: tools/list.

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
    "type": {
      "default": "select",
      "title": "Type",
      "type": "string"
    },
    "has_archives": {
      "default": null,
      "title": "Has Archives",
      "type": "boolean"
    }
  },
  "required": [
    "name"
  ],
  "title": "woo_create_product_attributeArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_get_attribute_terms-2337d577"></a>

## woo_get_attribute_terms

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get all terms for a product attribute (e.g. all colors)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1294-L1299) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "attribute_id": {
      "title": "Attribute Id",
      "type": "integer"
    }
  },
  "required": [
    "attribute_id"
  ],
  "title": "woo_get_attribute_termsArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_create_attribute_term-ea305165"></a>

## woo_create_attribute_term

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_post, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Add a term to a product attribute (e.g. add 'Blue' to Colors)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1301-L1311) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "attribute_id": {
      "title": "Attribute Id",
      "type": "integer"
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
    "menu_order": {
      "default": null,
      "title": "Menu Order",
      "type": "integer"
    }
  },
  "required": [
    "attribute_id",
    "name"
  ],
  "title": "woo_create_attribute_termArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_list_tax_rates-30bd271f"></a>

## woo_list_tax_rates

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. List WooCommerce tax rates
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1313-L1320) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "title": "woo_list_tax_ratesArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_create_tax_rate-fce05b40"></a>

## woo_create_tax_rate

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_post, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Create a tax rate
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1322-L1334) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "rate": {
      "title": "Rate",
      "type": "string"
    },
    "name": {
      "title": "Name",
      "type": "string"
    },
    "country": {
      "default": null,
      "title": "Country",
      "type": "string"
    },
    "state": {
      "default": null,
      "title": "State",
      "type": "string"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    },
    "compound": {
      "default": null,
      "title": "Compound",
      "type": "boolean"
    },
    "shipping": {
      "default": null,
      "title": "Shipping",
      "type": "boolean"
    }
  },
  "required": [
    "rate",
    "name"
  ],
  "title": "woo_create_tax_rateArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_list_product_tags-dc3eaa60"></a>

## woo_list_product_tags

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. List all WooCommerce product tags
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1336-L1353) · Schema: tools/list.

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
    "orderby": {
      "default": "name",
      "title": "Orderby",
      "type": "string"
    },
    "order": {
      "default": "asc",
      "title": "Order",
      "type": "string"
    },
    "hide_empty": {
      "default": false,
      "title": "Hide Empty",
      "type": "boolean"
    }
  },
  "title": "woo_list_product_tagsArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_create_product_tag-71a25099"></a>

## woo_create_product_tag

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_post, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Create a new WooCommerce product tag
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1355-L1363) · Schema: tools/list.

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
  "title": "woo_create_product_tagArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_update_product_tag-e712a8e4"></a>

## woo_update_product_tag

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Update a WooCommerce product tag
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1365-L1374) · Schema: tools/list.

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
  "title": "woo_update_product_tagArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_delete_product_tag-2257e49e"></a>

## woo_delete_product_tag

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_delete, \_wp.

```text
[WRITE] WooCommerce tool. Delete a WooCommerce product tag
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1376-L1383) · Schema: tools/list.

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
      "default": true,
      "title": "Force",
      "type": "boolean"
    }
  },
  "required": [
    "id"
  ],
  "title": "woo_delete_product_tagArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_get_product_tag-d2c63134"></a>

## woo_get_product_tag

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get a single WooCommerce product tag by ID
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1385-L1391) · Schema: tools/list.

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
  "title": "woo_get_product_tagArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_list_product_reviews-bb78dab2"></a>

## woo_list_product_reviews

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. List WooCommerce product reviews with filters
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1393-L1416) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
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
    "reviewer_email": {
      "default": null,
      "title": "Reviewer Email",
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
    "after": {
      "default": null,
      "title": "After",
      "type": "string"
    },
    "before": {
      "default": null,
      "title": "Before",
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
  "title": "woo_list_product_reviewsArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_get_product_review-39dcc418"></a>

## woo_get_product_review

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get a single product review
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1418-L1424) · Schema: tools/list.

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
  "title": "woo_get_product_reviewArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_create_product_review-04bb7310"></a>

## woo_create_product_review

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_post, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Create a product review
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1426-L1437) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "product_id": {
      "title": "Product Id",
      "type": "integer"
    },
    "review": {
      "title": "Review",
      "type": "string"
    },
    "reviewer": {
      "title": "Reviewer",
      "type": "string"
    },
    "reviewer_email": {
      "title": "Reviewer Email",
      "type": "string"
    },
    "rating": {
      "default": null,
      "title": "Rating",
      "type": "integer"
    },
    "status": {
      "default": "approved",
      "title": "Status",
      "type": "string"
    }
  },
  "required": [
    "product_id",
    "review",
    "reviewer",
    "reviewer_email"
  ],
  "title": "woo_create_product_reviewArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_update_product_review-3bc5f6b5"></a>

## woo_update_product_review

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Update a product review (text, rating, status)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1439-L1450) · Schema: tools/list.

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
    "review": {
      "default": null,
      "title": "Review",
      "type": "string"
    },
    "rating": {
      "default": null,
      "title": "Rating",
      "type": "integer"
    },
    "status": {
      "default": null,
      "title": "Status",
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
    }
  },
  "required": [
    "id"
  ],
  "title": "woo_update_product_reviewArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_delete_product_review-1309bedb"></a>

## woo_delete_product_review

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_delete, \_wp.

```text
[WRITE] WooCommerce tool. Delete a product review
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1452-L1459) · Schema: tools/list.

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
      "default": true,
      "title": "Force",
      "type": "boolean"
    }
  },
  "required": [
    "id"
  ],
  "title": "woo_delete_product_reviewArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_delete_product_variation-fccecfc5"></a>

## woo_delete_product_variation

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_delete, \_wp.

```text
[WRITE] WooCommerce tool. Delete a variation from a variable product
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1461-L1469) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "product_id": {
      "title": "Product Id",
      "type": "integer"
    },
    "variation_id": {
      "title": "Variation Id",
      "type": "integer"
    },
    "force": {
      "default": true,
      "title": "Force",
      "type": "boolean"
    }
  },
  "required": [
    "product_id",
    "variation_id"
  ],
  "title": "woo_delete_product_variationArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_bulk_create_variations-664e8b6a"></a>

## woo_bulk_create_variations

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_post, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Batch create multiple variations for a variable product
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1471-L1478) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "product_id": {
      "title": "Product Id",
      "type": "integer"
    },
    "variations": {
      "items": {},
      "title": "Variations",
      "type": "array"
    }
  },
  "required": [
    "product_id",
    "variations"
  ],
  "title": "woo_bulk_create_variationsArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_bulk_update_variations-2befb298"></a>

## woo_bulk_update_variations

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Batch update/delete multiple variations at once
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1480-L1489) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "product_id": {
      "title": "Product Id",
      "type": "integer"
    },
    "update": {
      "default": null,
      "items": {},
      "title": "Update",
      "type": "array"
    },
    "create": {
      "default": null,
      "items": {},
      "title": "Create",
      "type": "array"
    },
    "delete": {
      "default": null,
      "items": {},
      "title": "Delete",
      "type": "array"
    }
  },
  "required": [
    "product_id"
  ],
  "title": "woo_bulk_update_variationsArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_set_product_sale_dates-7f4e3dc0"></a>

## woo_set_product_sale_dates

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Set sale price start/end dates for a product
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1491-L1500) · Schema: tools/list.

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
    "sale_price": {
      "default": null,
      "title": "Sale Price",
      "type": "string"
    },
    "date_on_sale_from": {
      "default": null,
      "title": "Date On Sale From",
      "type": "string"
    },
    "date_on_sale_to": {
      "default": null,
      "title": "Date On Sale To",
      "type": "string"
    }
  },
  "required": [
    "id"
  ],
  "title": "woo_set_product_sale_datesArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_set_product_purchase_note-b373720f"></a>

## woo_set_product_purchase_note

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Set the purchase note shown to customers after buying a product
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1502-L1509) · Schema: tools/list.

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
    "purchase_note": {
      "title": "Purchase Note",
      "type": "string"
    }
  },
  "required": [
    "id",
    "purchase_note"
  ],
  "title": "woo_set_product_purchase_noteArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_set_product_upsells-b5447b9e"></a>

## woo_set_product_upsells

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Set upsell products for a product
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1511-L1518) · Schema: tools/list.

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
    "upsell_ids": {
      "items": {},
      "title": "Upsell Ids",
      "type": "array"
    }
  },
  "required": [
    "id",
    "upsell_ids"
  ],
  "title": "woo_set_product_upsellsArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_set_product_crosssells-6d44e05e"></a>

## woo_set_product_crosssells

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Set cross-sell products for a product
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1520-L1527) · Schema: tools/list.

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
    "cross_sell_ids": {
      "items": {},
      "title": "Cross Sell Ids",
      "type": "array"
    }
  },
  "required": [
    "id",
    "cross_sell_ids"
  ],
  "title": "woo_set_product_crosssellsArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_bulk_set_product_status-64ce295a"></a>

## woo_bulk_set_product_status

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Bulk set status for multiple products (publish/draft/private)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1529-L1536) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "product_ids": {
      "items": {},
      "title": "Product Ids",
      "type": "array"
    },
    "status": {
      "title": "Status",
      "type": "string"
    }
  },
  "required": [
    "product_ids",
    "status"
  ],
  "title": "woo_bulk_set_product_statusArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_bulk_set_product_price-fb2d68d0"></a>

## woo_bulk_set_product_price

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Bulk update regular price for multiple products
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1538-L1546) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "product_ids": {
      "items": {},
      "title": "Product Ids",
      "type": "array"
    },
    "regular_price": {
      "default": null,
      "title": "Regular Price",
      "type": "string"
    },
    "sale_price": {
      "default": null,
      "title": "Sale Price",
      "type": "string"
    }
  },
  "required": [
    "product_ids"
  ],
  "title": "woo_bulk_set_product_priceArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_bulk_set_product_stock-e3bdc57d"></a>

## woo_bulk_set_product_stock

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Bulk update stock quantity for multiple products
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1548-L1557) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "product_ids": {
      "items": {},
      "title": "Product Ids",
      "type": "array"
    },
    "stock_quantity": {
      "default": null,
      "title": "Stock Quantity",
      "type": "integer"
    },
    "stock_status": {
      "default": null,
      "title": "Stock Status",
      "type": "string"
    },
    "manage_stock": {
      "default": null,
      "title": "Manage Stock",
      "type": "boolean"
    }
  },
  "required": [
    "product_ids"
  ],
  "title": "woo_bulk_set_product_stockArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_list_low_stock_products-bb05ff8c"></a>

## woo_list_low_stock_products

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. List products with low stock (below low stock threshold)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1559-L1570) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "threshold": {
      "default": 5,
      "title": "Threshold",
      "type": "integer"
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
  "title": "woo_list_low_stock_productsArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_list_out_of_stock_products-2ebfba67"></a>

## woo_list_out_of_stock_products

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. List all out-of-stock products
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1572-L1581) · Schema: tools/list.

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
    "page": {
      "default": 1,
      "title": "Page",
      "type": "integer"
    }
  },
  "title": "woo_list_out_of_stock_productsArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_list_products_on_sale-c1eb8d5e"></a>

## woo_list_products_on_sale

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. List all products currently on sale
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1583-L1592) · Schema: tools/list.

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
    "page": {
      "default": 1,
      "title": "Page",
      "type": "integer"
    }
  },
  "title": "woo_list_products_on_saleArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_list_featured_products-9fde2109"></a>

## woo_list_featured_products

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. List all featured products
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1594-L1603) · Schema: tools/list.

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
    "page": {
      "default": 1,
      "title": "Page",
      "type": "integer"
    }
  },
  "title": "woo_list_featured_productsArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_update_product_attribute-e5153ec9"></a>

## woo_update_product_attribute

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Update an existing product attribute
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1605-L1616) · Schema: tools/list.

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
    "type": {
      "default": null,
      "title": "Type",
      "type": "string"
    },
    "order_by": {
      "default": null,
      "title": "Order By",
      "type": "string"
    },
    "has_archives": {
      "default": null,
      "title": "Has Archives",
      "type": "boolean"
    }
  },
  "required": [
    "id"
  ],
  "title": "woo_update_product_attributeArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_delete_product_attribute-96b5a058"></a>

## woo_delete_product_attribute

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_delete, \_wp.

```text
[WRITE] WooCommerce tool. Delete a product attribute
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1618-L1625) · Schema: tools/list.

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
      "default": true,
      "title": "Force",
      "type": "boolean"
    }
  },
  "required": [
    "id"
  ],
  "title": "woo_delete_product_attributeArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_update_attribute_term-fb1ebf0e"></a>

## woo_update_attribute_term

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Update a term of a product attribute
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1627-L1638) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "attribute_id": {
      "title": "Attribute Id",
      "type": "integer"
    },
    "term_id": {
      "title": "Term Id",
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
    "menu_order": {
      "default": null,
      "title": "Menu Order",
      "type": "integer"
    }
  },
  "required": [
    "attribute_id",
    "term_id"
  ],
  "title": "woo_update_attribute_termArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_delete_attribute_term-b031b435"></a>

## woo_delete_attribute_term

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_delete, \_wp.

```text
[WRITE] WooCommerce tool. Delete a term from a product attribute
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1640-L1648) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "attribute_id": {
      "title": "Attribute Id",
      "type": "integer"
    },
    "term_id": {
      "title": "Term Id",
      "type": "integer"
    },
    "force": {
      "default": true,
      "title": "Force",
      "type": "boolean"
    }
  },
  "required": [
    "attribute_id",
    "term_id"
  ],
  "title": "woo_delete_attribute_termArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_delete_product_category-073eee98"></a>

## woo_delete_product_category

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_delete, \_wp.

```text
[WRITE] WooCommerce tool. Delete a WooCommerce product category
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1650-L1657) · Schema: tools/list.

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
      "default": true,
      "title": "Force",
      "type": "boolean"
    }
  },
  "required": [
    "id"
  ],
  "title": "woo_delete_product_categoryArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_get_product_category-19a9a8f0"></a>

## woo_get_product_category

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get a single product category by ID
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1659-L1665) · Schema: tools/list.

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
  "title": "woo_get_product_categoryArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_delete_customer-89b99d0a"></a>

## woo_delete_customer

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_delete, \_wp.

```text
[WRITE] WooCommerce tool. Delete a WooCommerce customer
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1667-L1675) · Schema: tools/list.

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
    },
    "force": {
      "default": true,
      "title": "Force",
      "type": "boolean"
    }
  },
  "required": [
    "id"
  ],
  "title": "woo_delete_customerArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_get_customer_orders-0411e54d"></a>

## woo_get_customer_orders

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get all orders for a specific customer
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1677-L1689) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "customer_id": {
      "title": "Customer Id",
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
      "default": "any",
      "title": "Status",
      "type": "string"
    }
  },
  "required": [
    "customer_id"
  ],
  "title": "woo_get_customer_ordersArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_get_customer_downloads-a3d2d309"></a>

## woo_get_customer_downloads

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get downloadable files available to a customer
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1691-L1697) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "customer_id": {
      "title": "Customer Id",
      "type": "integer"
    }
  },
  "required": [
    "customer_id"
  ],
  "title": "woo_get_customer_downloadsArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_bulk_update_customers-de1d31f9"></a>

## woo_bulk_update_customers

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Batch create/update/delete customers
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1699-L1707) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "create": {
      "default": null,
      "items": {},
      "title": "Create",
      "type": "array"
    },
    "update": {
      "default": null,
      "items": {},
      "title": "Update",
      "type": "array"
    },
    "delete": {
      "default": null,
      "items": {},
      "title": "Delete",
      "type": "array"
    }
  },
  "title": "woo_bulk_update_customersArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_update_shipping_zone-6f10f23e"></a>

## woo_update_shipping_zone

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Update a WooCommerce shipping zone
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1709-L1717) · Schema: tools/list.

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
    "order": {
      "default": null,
      "title": "Order",
      "type": "integer"
    }
  },
  "required": [
    "id"
  ],
  "title": "woo_update_shipping_zoneArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_delete_shipping_zone-1e4154d1"></a>

## woo_delete_shipping_zone

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_delete, \_wp.

```text
[WRITE] WooCommerce tool. Delete a WooCommerce shipping zone
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1719-L1726) · Schema: tools/list.

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
      "default": true,
      "title": "Force",
      "type": "boolean"
    }
  },
  "required": [
    "id"
  ],
  "title": "woo_delete_shipping_zoneArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_get_shipping_zone-36ee6b08"></a>

## woo_get_shipping_zone

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get a specific shipping zone by ID
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1728-L1734) · Schema: tools/list.

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
  "title": "woo_get_shipping_zoneArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_add_shipping_method_to_zone-e9ae481c"></a>

## woo_add_shipping_method_to_zone

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_post, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Add a shipping method to a zone (flat_rate, free_shipping, local_pickup)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1736-L1744) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "zone_id": {
      "title": "Zone Id",
      "type": "integer"
    },
    "method_id": {
      "title": "Method Id",
      "type": "string"
    },
    "enabled": {
      "default": true,
      "title": "Enabled",
      "type": "boolean"
    }
  },
  "required": [
    "zone_id",
    "method_id"
  ],
  "title": "woo_add_shipping_method_to_zoneArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_update_shipping_zone_method-3b3b0c0a"></a>

## woo_update_shipping_zone_method

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Update a shipping method instance in a zone
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1746-L1756) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "zone_id": {
      "title": "Zone Id",
      "type": "integer"
    },
    "instance_id": {
      "title": "Instance Id",
      "type": "integer"
    },
    "enabled": {
      "default": null,
      "title": "Enabled",
      "type": "boolean"
    },
    "settings": {
      "additionalProperties": true,
      "default": null,
      "title": "Settings",
      "type": "object"
    },
    "order": {
      "default": null,
      "title": "Order",
      "type": "integer"
    }
  },
  "required": [
    "zone_id",
    "instance_id"
  ],
  "title": "woo_update_shipping_zone_methodArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_delete_shipping_zone_method-556f9607"></a>

## woo_delete_shipping_zone_method

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_delete, \_wp.

```text
[WRITE] WooCommerce tool. Remove a shipping method from a zone
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1758-L1766) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "zone_id": {
      "title": "Zone Id",
      "type": "integer"
    },
    "instance_id": {
      "title": "Instance Id",
      "type": "integer"
    },
    "force": {
      "default": true,
      "title": "Force",
      "type": "boolean"
    }
  },
  "required": [
    "zone_id",
    "instance_id"
  ],
  "title": "woo_delete_shipping_zone_methodArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_get_shipping_zone_locations-acbfeb32"></a>

## woo_get_shipping_zone_locations

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get locations (countries, states, postcodes) assigned to a shipping zone
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1768-L1774) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "zone_id": {
      "title": "Zone Id",
      "type": "integer"
    }
  },
  "required": [
    "zone_id"
  ],
  "title": "woo_get_shipping_zone_locationsArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_update_shipping_zone_locations-9d6ed74d"></a>

## woo_update_shipping_zone_locations

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Set locations for a shipping zone
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1776-L1783) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "zone_id": {
      "title": "Zone Id",
      "type": "integer"
    },
    "locations": {
      "items": {},
      "title": "Locations",
      "type": "array"
    }
  },
  "required": [
    "zone_id",
    "locations"
  ],
  "title": "woo_update_shipping_zone_locationsArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_list_shipping_classes-9628ab26"></a>

## woo_list_shipping_classes

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. List all WooCommerce shipping classes
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1785-L1789) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "woo_list_shipping_classesArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_create_shipping_class-9c6f9ab9"></a>

## woo_create_shipping_class

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_post, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Create a new shipping class
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1791-L1799) · Schema: tools/list.

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
  "title": "woo_create_shipping_classArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_update_shipping_class-389ee963"></a>

## woo_update_shipping_class

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Update a shipping class
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1801-L1810) · Schema: tools/list.

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
  "title": "woo_update_shipping_classArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_delete_shipping_class-720732b6"></a>

## woo_delete_shipping_class

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_delete, \_wp.

```text
[WRITE] WooCommerce tool. Delete a shipping class
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1812-L1819) · Schema: tools/list.

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
      "default": true,
      "title": "Force",
      "type": "boolean"
    }
  },
  "required": [
    "id"
  ],
  "title": "woo_delete_shipping_classArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_update_tax_rate-13dd37da"></a>

## woo_update_tax_rate

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Update a WooCommerce tax rate
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1821-L1838) · Schema: tools/list.

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
    "country": {
      "default": null,
      "title": "Country",
      "type": "string"
    },
    "state": {
      "default": null,
      "title": "State",
      "type": "string"
    },
    "postcode": {
      "default": null,
      "title": "Postcode",
      "type": "string"
    },
    "city": {
      "default": null,
      "title": "City",
      "type": "string"
    },
    "rate": {
      "default": null,
      "title": "Rate",
      "type": "string"
    },
    "name": {
      "default": null,
      "title": "Name",
      "type": "string"
    },
    "priority": {
      "default": null,
      "title": "Priority",
      "type": "integer"
    },
    "compound": {
      "default": null,
      "title": "Compound",
      "type": "boolean"
    },
    "shipping": {
      "default": null,
      "title": "Shipping",
      "type": "boolean"
    },
    "order": {
      "default": null,
      "title": "Order",
      "type": "integer"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "required": [
    "id"
  ],
  "title": "woo_update_tax_rateArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_delete_tax_rate-168923bf"></a>

## woo_delete_tax_rate

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_delete, \_wp.

```text
[WRITE] WooCommerce tool. Delete a WooCommerce tax rate
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1840-L1847) · Schema: tools/list.

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
      "default": true,
      "title": "Force",
      "type": "boolean"
    }
  },
  "required": [
    "id"
  ],
  "title": "woo_delete_tax_rateArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_list_tax_classes-95393a6c"></a>

## woo_list_tax_classes

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. List all WooCommerce tax classes
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1849-L1853) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "woo_list_tax_classesArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_create_tax_class-de017836"></a>

## woo_create_tax_class

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_post, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Create a new tax class
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1855-L1861) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "name": {
      "title": "Name",
      "type": "string"
    }
  },
  "required": [
    "name"
  ],
  "title": "woo_create_tax_classArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_delete_tax_class-2e1bbbe3"></a>

## woo_delete_tax_class

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_delete, \_wp.

```text
[WRITE] WooCommerce tool. Delete a tax class
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1863-L1870) · Schema: tools/list.

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
    "force": {
      "default": true,
      "title": "Force",
      "type": "boolean"
    }
  },
  "required": [
    "slug"
  ],
  "title": "woo_delete_tax_classArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_bulk_create_tax_rates-e954652b"></a>

## woo_bulk_create_tax_rates

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_post, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Batch create multiple tax rates at once
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1872-L1878) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "tax_rates": {
      "items": {},
      "title": "Tax Rates",
      "type": "array"
    }
  },
  "required": [
    "tax_rates"
  ],
  "title": "woo_bulk_create_tax_ratesArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_list_email_templates-c05c9033"></a>

## woo_list_email_templates

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. List all WooCommerce email notification templates
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1880-L1884) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "woo_list_email_templatesArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_get_email_template-c144bb5f"></a>

## woo_get_email_template

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get settings for a specific WooCommerce email
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1886-L1893) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "email_id": {
      "title": "Email Id",
      "type": "string"
    }
  },
  "required": [
    "email_id"
  ],
  "title": "woo_get_email_templateArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_update_email_template-58238129"></a>

## woo_update_email_template

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Update WooCommerce email template settings (subject, heading, enabled, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1895-L1906) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "email_id": {
      "title": "Email Id",
      "type": "string"
    },
    "enabled": {
      "default": null,
      "title": "Enabled",
      "type": "boolean"
    },
    "subject": {
      "default": null,
      "title": "Subject",
      "type": "string"
    },
    "heading": {
      "default": null,
      "title": "Heading",
      "type": "string"
    },
    "additional_content": {
      "default": null,
      "title": "Additional Content",
      "type": "string"
    },
    "recipient": {
      "default": null,
      "title": "Recipient",
      "type": "string"
    }
  },
  "required": [
    "email_id"
  ],
  "title": "woo_update_email_templateArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_get_payment_gateway-fe45f07e"></a>

## woo_get_payment_gateway

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get details and settings for a specific payment gateway
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1908-L1914) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "gateway_id": {
      "title": "Gateway Id",
      "type": "string"
    }
  },
  "required": [
    "gateway_id"
  ],
  "title": "woo_get_payment_gatewayArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_enable_payment_gateway-1252fc35"></a>

## woo_enable_payment_gateway

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[WRITE] WooCommerce tool. Enable a payment gateway
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1916-L1922) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "gateway_id": {
      "title": "Gateway Id",
      "type": "string"
    }
  },
  "required": [
    "gateway_id"
  ],
  "title": "woo_enable_payment_gatewayArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_disable_payment_gateway-16bea026"></a>

## woo_disable_payment_gateway

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Disable a payment gateway
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1924-L1930) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "gateway_id": {
      "title": "Gateway Id",
      "type": "string"
    }
  },
  "required": [
    "gateway_id"
  ],
  "title": "woo_disable_payment_gatewayArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_get_all_settings-f94d24b5"></a>

## woo_get_all_settings

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Get all WooCommerce settings groups and their options
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1932-L1936) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "woo_get_all_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_get_setting_option-ad3a935a"></a>

## woo_get_setting_option

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Get a single WooCommerce setting option value
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1938-L1945) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "group": {
      "title": "Group",
      "type": "string"
    },
    "option_id": {
      "title": "Option Id",
      "type": "string"
    }
  },
  "required": [
    "group",
    "option_id"
  ],
  "title": "woo_get_setting_optionArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_update_setting_option-f158515d"></a>

## woo_update_setting_option

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Update a single WooCommerce setting option
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1947-L1955) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "group": {
      "title": "Group",
      "type": "string"
    },
    "option_id": {
      "title": "Option Id",
      "type": "string"
    },
    "value": {
      "title": "Value",
      "type": "string"
    }
  },
  "required": [
    "group",
    "option_id",
    "value"
  ],
  "title": "woo_update_setting_optionArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_update_currency_settings-7e06e7de"></a>

## woo_update_currency_settings

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Update WooCommerce currency and number format settings
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1957-L1967) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "currency": {
      "default": null,
      "title": "Currency",
      "type": "string"
    },
    "currency_position": {
      "default": null,
      "title": "Currency Position",
      "type": "string"
    },
    "price_thousand_sep": {
      "default": null,
      "title": "Price Thousand Sep",
      "type": "string"
    },
    "price_decimal_sep": {
      "default": null,
      "title": "Price Decimal Sep",
      "type": "string"
    },
    "price_num_decimals": {
      "default": null,
      "title": "Price Num Decimals",
      "type": "integer"
    }
  },
  "title": "woo_update_currency_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_update_products_settings-26b7b478"></a>

## woo_update_products_settings

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Update WooCommerce products tab settings
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1969-L1981) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "shop_catalog_image_size": {
      "additionalProperties": true,
      "default": null,
      "title": "Shop Catalog Image Size",
      "type": "object"
    },
    "shop_single_image_size": {
      "additionalProperties": true,
      "default": null,
      "title": "Shop Single Image Size",
      "type": "object"
    },
    "shop_thumbnail_image_size": {
      "additionalProperties": true,
      "default": null,
      "title": "Shop Thumbnail Image Size",
      "type": "object"
    },
    "weight_unit": {
      "default": null,
      "title": "Weight Unit",
      "type": "string"
    },
    "dimension_unit": {
      "default": null,
      "title": "Dimension Unit",
      "type": "string"
    },
    "reviews_enabled": {
      "default": null,
      "title": "Reviews Enabled",
      "type": "boolean"
    },
    "review_rating_verification_required": {
      "default": null,
      "title": "Review Rating Verification Required",
      "type": "boolean"
    }
  },
  "title": "woo_update_products_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_update_checkout_settings-52590f61"></a>

## woo_update_checkout_settings

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Update WooCommerce checkout settings
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1983-L1995) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "enable_guest_checkout": {
      "default": null,
      "title": "Enable Guest Checkout",
      "type": "boolean"
    },
    "enable_signup_and_login_from_checkout": {
      "default": null,
      "title": "Enable Signup And Login From Checkout",
      "type": "boolean"
    },
    "enable_checkout_login_reminder": {
      "default": null,
      "title": "Enable Checkout Login Reminder",
      "type": "boolean"
    },
    "enable_signup_from_checkout_for_subscriptions": {
      "default": null,
      "title": "Enable Signup From Checkout For Subscriptions",
      "type": "boolean"
    },
    "terms_page_id": {
      "default": null,
      "title": "Terms Page Id",
      "type": "integer"
    },
    "checkout_pay_endpoint": {
      "default": null,
      "title": "Checkout Pay Endpoint",
      "type": "string"
    },
    "checkout_order_received_endpoint": {
      "default": null,
      "title": "Checkout Order Received Endpoint",
      "type": "string"
    }
  },
  "title": "woo_update_checkout_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_update_account_settings-5ce97028"></a>

## woo_update_account_settings

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Update WooCommerce my account settings
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L1997-L2009) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "enable_myaccount_registration": {
      "default": null,
      "title": "Enable Myaccount Registration",
      "type": "boolean"
    },
    "enable_registration_nonce": {
      "default": null,
      "title": "Enable Registration Nonce",
      "type": "boolean"
    },
    "registration_generate_username": {
      "default": null,
      "title": "Registration Generate Username",
      "type": "boolean"
    },
    "registration_generate_password": {
      "default": null,
      "title": "Registration Generate Password",
      "type": "boolean"
    },
    "myaccount_orders_endpoint": {
      "default": null,
      "title": "Myaccount Orders Endpoint",
      "type": "string"
    },
    "myaccount_edit_account_endpoint": {
      "default": null,
      "title": "Myaccount Edit Account Endpoint",
      "type": "string"
    },
    "myaccount_edit_address_endpoint": {
      "default": null,
      "title": "Myaccount Edit Address Endpoint",
      "type": "string"
    }
  },
  "title": "woo_update_account_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_get_coupon-c25d886e"></a>

## woo_get_coupon

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get a single coupon by ID
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2011-L2017) · Schema: tools/list.

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
  "title": "woo_get_couponArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_list_coupons_by_type-e2587d71"></a>

## woo_list_coupons_by_type

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. List coupons filtered by discount type
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2019-L2030) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "discount_type": {
      "title": "Discount Type",
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
  "required": [
    "discount_type"
  ],
  "title": "woo_list_coupons_by_typeArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_bulk_delete_coupons-c15bdf17"></a>

## woo_bulk_delete_coupons

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_delete, \_wp.

```text
[WRITE] WooCommerce tool. Delete multiple coupons at once
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2032-L2038) · Schema: tools/list.

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
    }
  },
  "required": [
    "ids"
  ],
  "title": "woo_bulk_delete_couponsArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_check_coupon_usage-77961902"></a>

## woo_check_coupon_usage

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Check coupon usage count and details
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2040-L2048) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "default": null,
      "title": "Id",
      "type": "integer"
    },
    "code": {
      "default": null,
      "title": "Code",
      "type": "string"
    }
  },
  "title": "woo_check_coupon_usageArguments",
  "type": "object"
}
```

</details>
