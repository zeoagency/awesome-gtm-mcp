# RoyAzran/mcp-ads: supporting and other-product tools

[Provider inventory](royazran--mcp-ads.md) · [Global tool index](../TOOL_INDEX.md)

Tools 1801–1950 of 3131. Exact schemas from the same upstream snapshot.

<a id="tool-woo_list_customer_downloads_all-e483b8fb"></a>

## woo_list_customer_downloads_all

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. List all downloadable file entries across all customers
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2050-L2063) · Schema: tools/list.

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
    "product": {
      "default": null,
      "title": "Product",
      "type": "integer"
    },
    "customer": {
      "default": null,
      "title": "Customer",
      "type": "integer"
    }
  },
  "title": "woo_list_customer_downloads_allArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_get_order_meta-47d685db"></a>

## woo_get_order_meta

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get specific meta value from a WooCommerce order
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2065-L2073) · Schema: tools/list.

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
    "meta_key": {
      "title": "Meta Key",
      "type": "string"
    }
  },
  "required": [
    "order_id",
    "meta_key"
  ],
  "title": "woo_get_order_metaArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_update_order_meta-efe83cb5"></a>

## woo_update_order_meta

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Update or add meta data to a WooCommerce order
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2075-L2082) · Schema: tools/list.

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
    "meta_data": {
      "items": {},
      "title": "Meta Data",
      "type": "array"
    }
  },
  "required": [
    "order_id",
    "meta_data"
  ],
  "title": "woo_update_order_metaArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_get_order_line_items-30d84ee9"></a>

## woo_get_order_line_items

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get line items (products) from a WooCommerce order
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2084-L2090) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "order_id": {
      "title": "Order Id",
      "type": "integer"
    }
  },
  "required": [
    "order_id"
  ],
  "title": "woo_get_order_line_itemsArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_get_product_meta-b1dbfa7a"></a>

## woo_get_product_meta

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get specific meta value from a WooCommerce product
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2092-L2100) · Schema: tools/list.

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
    "meta_key": {
      "title": "Meta Key",
      "type": "string"
    }
  },
  "required": [
    "product_id",
    "meta_key"
  ],
  "title": "woo_get_product_metaArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_update_product_meta-298fc71f"></a>

## woo_update_product_meta

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Update meta data on a WooCommerce product
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2102-L2109) · Schema: tools/list.

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
    "meta_data": {
      "items": {},
      "title": "Meta Data",
      "type": "array"
    }
  },
  "required": [
    "product_id",
    "meta_data"
  ],
  "title": "woo_update_product_metaArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_get_store_health-92d91b2d"></a>

## woo_get_store_health

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get WooCommerce store health status and any critical issues
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2111-L2115) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "woo_get_store_healthArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_get_store_info-25ebbacf"></a>

## woo_get_store_info

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get basic store info: name, URL, currency, timezone, admin email
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2117-L2121) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "woo_get_store_infoArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_analytics_overview-71b6199c"></a>

## woo_analytics_overview

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get WooCommerce analytics dashboard overview — total revenue, orders, customers, avg order value
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2123-L2127) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "woo_analytics_overviewArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_analytics_summary-d5030a2c"></a>

## woo_analytics_summary

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get analytics summary stats (revenue, net revenue, refunds, coupons, taxes, shipping, orders) for a date range
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2129-L2136) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "fields": {
      "default": null,
      "title": "Fields",
      "type": "string"
    }
  },
  "title": "woo_analytics_summaryArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_analytics_revenue-6c349924"></a>

## woo_analytics_revenue

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get detailed revenue analytics report — gross/net revenue, refunds, taxes, shipping by interval
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2138-L2142) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "woo_analytics_revenueArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_analytics_revenue_stats-ef49446e"></a>

## woo_analytics_revenue_stats

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get aggregated revenue stats totals for the selected period
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2144-L2148) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "woo_analytics_revenue_statsArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_analytics_revenue_by_day-ba4b1601"></a>

## woo_analytics_revenue_by_day

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get daily revenue breakdown for a date range
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2150-L2159) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "after": {
      "title": "After",
      "type": "string"
    },
    "before": {
      "title": "Before",
      "type": "string"
    }
  },
  "required": [
    "after",
    "before"
  ],
  "title": "woo_analytics_revenue_by_dayArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_analytics_revenue_by_month-c40be6b3"></a>

## woo_analytics_revenue_by_month

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get monthly revenue breakdown for a year or custom range
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2161-L2170) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
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
  "title": "woo_analytics_revenue_by_monthArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_analytics_orders-092ae568"></a>

## woo_analytics_orders

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get orders analytics — total orders, avg value, refunds count, new customers vs returning
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2172-L2191) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "status": {
      "default": null,
      "items": {},
      "title": "Status",
      "type": "array"
    },
    "product_includes": {
      "default": null,
      "items": {},
      "title": "Product Includes",
      "type": "array"
    },
    "coupon_includes": {
      "default": null,
      "items": {},
      "title": "Coupon Includes",
      "type": "array"
    },
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
  "title": "woo_analytics_ordersArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_analytics_orders_stats-97569ab5"></a>

## woo_analytics_orders_stats

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get aggregated order stats: total orders, net revenue, avg order value, refunds
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2193-L2197) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "woo_analytics_orders_statsArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_analytics_orders_by_status-58be0c05"></a>

## woo_analytics_orders_by_status

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get order count breakdown by status for a date range
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2199-L2210) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
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
    "period": {
      "default": null,
      "title": "Period",
      "type": "string"
    }
  },
  "title": "woo_analytics_orders_by_statusArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_analytics_products-0d5f8ac7"></a>

## woo_analytics_products

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get products analytics — items sold, net revenue, orders count per product
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2212-L2229) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
      "default": null,
      "title": "Orderby",
      "type": "string"
    },
    "order": {
      "default": null,
      "title": "Order",
      "type": "string"
    },
    "product_includes": {
      "default": null,
      "items": {},
      "title": "Product Includes",
      "type": "array"
    },
    "category_includes": {
      "default": null,
      "items": {},
      "title": "Category Includes",
      "type": "array"
    }
  },
  "title": "woo_analytics_productsArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_analytics_products_stats-da797d06"></a>

## woo_analytics_products_stats

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get aggregated product stats: total items sold, net revenue across all products
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2231-L2235) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "woo_analytics_products_statsArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_analytics_top_products-c9ed5517"></a>

## woo_analytics_top_products

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get top-selling products by revenue or quantity for a date range
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2237-L2248) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "per_page": {
      "default": 10,
      "title": "Per Page",
      "type": "integer"
    },
    "orderby": {
      "default": "net_revenue",
      "title": "Orderby",
      "type": "string"
    },
    "order": {
      "default": "desc",
      "title": "Order",
      "type": "string"
    }
  },
  "title": "woo_analytics_top_productsArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_analytics_categories-ab8e4683"></a>

## woo_analytics_categories

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get sales analytics by product category
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2250-L2265) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
      "default": null,
      "title": "Orderby",
      "type": "string"
    },
    "order": {
      "default": null,
      "title": "Order",
      "type": "string"
    },
    "hide_empty": {
      "default": null,
      "title": "Hide Empty",
      "type": "boolean"
    }
  },
  "title": "woo_analytics_categoriesArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_analytics_categories_stats-d133fb07"></a>

## woo_analytics_categories_stats

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get aggregated category analytics stats
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2267-L2271) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "woo_analytics_categories_statsArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_analytics_coupons-444b2e77"></a>

## woo_analytics_coupons

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get coupon usage analytics — orders count, discount amount per coupon
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2273-L2288) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
      "default": null,
      "title": "Orderby",
      "type": "string"
    },
    "order": {
      "default": null,
      "title": "Order",
      "type": "string"
    },
    "coupon_includes": {
      "default": null,
      "items": {},
      "title": "Coupon Includes",
      "type": "array"
    }
  },
  "title": "woo_analytics_couponsArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_analytics_coupons_stats-be9f03d8"></a>

## woo_analytics_coupons_stats

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get aggregated coupon stats: total discount amount, orders using coupons
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2290-L2294) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "woo_analytics_coupons_statsArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_analytics_customers-dc243d54"></a>

## woo_analytics_customers

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get customer analytics — new vs returning, avg spend, CLV, orders per customer
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2296-L2315) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
      "default": null,
      "title": "Orderby",
      "type": "string"
    },
    "order": {
      "default": null,
      "title": "Order",
      "type": "string"
    },
    "registered_before": {
      "default": null,
      "title": "Registered Before",
      "type": "string"
    },
    "registered_after": {
      "default": null,
      "title": "Registered After",
      "type": "string"
    },
    "search": {
      "default": null,
      "title": "Search",
      "type": "string"
    }
  },
  "title": "woo_analytics_customersArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_analytics_customers_stats-1cdedcf3"></a>

## woo_analytics_customers_stats

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get aggregated customer stats: total, new, returning, avg lifetime value
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2317-L2321) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "woo_analytics_customers_statsArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_analytics_customer_ltv-b39e919d"></a>

## woo_analytics_customer_ltv

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get lifetime value analysis for customers — top spenders, average CLV
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2323-L2336) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
      "default": "total_spend",
      "title": "Orderby",
      "type": "string"
    },
    "order": {
      "default": "desc",
      "title": "Order",
      "type": "string"
    }
  },
  "title": "woo_analytics_customer_ltvArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_analytics_stock-903f8745"></a>

## woo_analytics_stock

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get stock analytics report — in stock, out of stock, low stock, on backorder
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2338-L2355) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
      "default": null,
      "title": "Orderby",
      "type": "string"
    },
    "order": {
      "default": null,
      "title": "Order",
      "type": "string"
    },
    "stock_status": {
      "default": null,
      "title": "Stock Status",
      "type": "string"
    },
    "low_stock_amount": {
      "default": null,
      "title": "Low Stock Amount",
      "type": "integer"
    }
  },
  "title": "woo_analytics_stockArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_analytics_stock_summary-db5bc838"></a>

## woo_analytics_stock_summary

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get stock summary: count of in-stock, out-of-stock, low-stock, backorder products
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2357-L2361) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "woo_analytics_stock_summaryArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_analytics_taxes-f2a3d665"></a>

## woo_analytics_taxes

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get tax analytics — tax collected per rate/class
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2363-L2376) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
  "title": "woo_analytics_taxesArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_analytics_taxes_stats-f59d13df"></a>

## woo_analytics_taxes_stats

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get aggregated tax stats: total tax collected, order tax, shipping tax
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2378-L2382) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "woo_analytics_taxes_statsArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_analytics_variations-b0419529"></a>

## woo_analytics_variations

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get variation-level sales analytics
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2384-L2399) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
      "default": null,
      "title": "Orderby",
      "type": "string"
    },
    "order": {
      "default": null,
      "title": "Order",
      "type": "string"
    },
    "product_includes": {
      "default": null,
      "items": {},
      "title": "Product Includes",
      "type": "array"
    }
  },
  "title": "woo_analytics_variationsArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_list_orders_by_date-533317a0"></a>

## woo_list_orders_by_date

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. List WooCommerce orders filtered by date range (after/before), status, customer
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2401-L2426) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
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
    "status": {
      "default": "any",
      "title": "Status",
      "type": "string"
    },
    "customer": {
      "default": null,
      "title": "Customer",
      "type": "integer"
    },
    "customer_email": {
      "default": null,
      "title": "Customer Email",
      "type": "string"
    },
    "product": {
      "default": null,
      "title": "Product",
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
  "title": "woo_list_orders_by_dateArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_list_orders_by_status-f33b5947"></a>

## woo_list_orders_by_status

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. List orders filtered by one or more statuses
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2428-L2439) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "status": {
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
    }
  },
  "required": [
    "status"
  ],
  "title": "woo_list_orders_by_statusArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_list_orders_by_product-1e3b6a11"></a>

## woo_list_orders_by_product

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. List all orders containing a specific product
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2441-L2453) · Schema: tools/list.

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
  "required": [
    "product_id"
  ],
  "title": "woo_list_orders_by_productArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_list_orders_by_customer-f1e5fc5a"></a>

## woo_list_orders_by_customer

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. List all orders for a specific customer (by ID or email)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2455-L2467) · Schema: tools/list.

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
    "email": {
      "default": null,
      "title": "Email",
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
  "title": "woo_list_orders_by_customerArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_delete_order-1f7ffa94"></a>

## woo_delete_order

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_delete, \_wp.

```text
[WRITE] WooCommerce tool. Delete a WooCommerce order
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2469-L2476) · Schema: tools/list.

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
  "title": "woo_delete_orderArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_bulk_update_orders-f028c992"></a>

## woo_bulk_update_orders

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Update multiple orders at once (batch) — e.g. bulk change status
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2478-L2486) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "updates": {
      "default": null,
      "items": {},
      "title": "Updates",
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
  "title": "woo_bulk_update_ordersArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_get_order_notes-23f82bdf"></a>

## woo_get_order_notes

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get all notes for a WooCommerce order
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2488-L2496) · Schema: tools/list.

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
    "type": {
      "default": "any",
      "title": "Type",
      "type": "string"
    }
  },
  "required": [
    "order_id"
  ],
  "title": "woo_get_order_notesArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_delete_order_note-629f712b"></a>

## woo_delete_order_note

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_delete, \_wp.

```text
[WRITE] WooCommerce tool. Delete a note from a WooCommerce order
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2498-L2505) · Schema: tools/list.

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
    "note_id": {
      "title": "Note Id",
      "type": "integer"
    }
  },
  "required": [
    "order_id",
    "note_id"
  ],
  "title": "woo_delete_order_noteArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_get_order_refunds-da1ead16"></a>

## woo_get_order_refunds

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get all refunds for a WooCommerce order
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2507-L2513) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "order_id": {
      "title": "Order Id",
      "type": "integer"
    }
  },
  "required": [
    "order_id"
  ],
  "title": "woo_get_order_refundsArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_delete_order_refund-f12245e8"></a>

## woo_delete_order_refund

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_delete, \_wp.

```text
[WRITE] WooCommerce tool. Delete a refund from a WooCommerce order
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2515-L2523) · Schema: tools/list.

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
    "refund_id": {
      "title": "Refund Id",
      "type": "integer"
    },
    "force": {
      "default": true,
      "title": "Force",
      "type": "boolean"
    }
  },
  "required": [
    "order_id",
    "refund_id"
  ],
  "title": "woo_delete_order_refundArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_update_order-90bd853f"></a>

## woo_update_order

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Update any field of a WooCommerce order (billing, shipping, status, meta, line items)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2525-L2542) · Schema: tools/list.

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
    "customer_note": {
      "default": null,
      "title": "Customer Note",
      "type": "string"
    },
    "meta_data": {
      "default": null,
      "items": {},
      "title": "Meta Data",
      "type": "array"
    },
    "line_items": {
      "default": null,
      "items": {},
      "title": "Line Items",
      "type": "array"
    },
    "shipping_lines": {
      "default": null,
      "items": {},
      "title": "Shipping Lines",
      "type": "array"
    },
    "fee_lines": {
      "default": null,
      "items": {},
      "title": "Fee Lines",
      "type": "array"
    },
    "coupon_lines": {
      "default": null,
      "items": {},
      "title": "Coupon Lines",
      "type": "array"
    },
    "set_paid": {
      "default": null,
      "title": "Set Paid",
      "type": "boolean"
    },
    "transaction_id": {
      "default": null,
      "title": "Transaction Id",
      "type": "string"
    }
  },
  "required": [
    "id"
  ],
  "title": "woo_update_orderArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_report_customers-15f8fd7a"></a>

## woo_report_customers

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get WooCommerce customers report (v3 REST API)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2544-L2555) · Schema: tools/list.

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
  "title": "woo_report_customersArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_report_categories-b990628f"></a>

## woo_report_categories

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get sales report grouped by product category
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2557-L2568) · Schema: tools/list.

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
  "title": "woo_report_categoriesArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_report_coupons-acf789c2"></a>

## woo_report_coupons

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get coupon usage report
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2570-L2581) · Schema: tools/list.

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
  "title": "woo_report_couponsArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_report_stock-838f69e5"></a>

## woo_report_stock

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get stock levels report for all products
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2583-L2590) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "type": {
      "default": "low_in_stock",
      "title": "Type",
      "type": "string"
    }
  },
  "title": "woo_report_stockArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_report_reviews-b0f99b53"></a>

## woo_report_reviews

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get product reviews report
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2592-L2601) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "reviewer_email": {
      "default": null,
      "title": "Reviewer Email",
      "type": "string"
    },
    "product": {
      "default": null,
      "title": "Product",
      "type": "integer"
    }
  },
  "title": "woo_report_reviewsArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_get_system_status-1bcb3916"></a>

## woo_get_system_status

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get complete WooCommerce system status: WP version, WC version, PHP, DB, active plugins, theme
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2603-L2607) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "woo_get_system_statusArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_get_system_status_tools-6fd74681"></a>

## woo_get_system_status_tools

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. List available WooCommerce system status tools (clear cache, recount terms, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2609-L2613) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "woo_get_system_status_toolsArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_run_system_status_tool-2aeabf3c"></a>

## woo_run_system_status_tool

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Run a WooCommerce system status tool (e.g. clear_transients, clear_expired_transients, recount_terms, clear_sessions, install_pages)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2615-L2622) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "tool_id": {
      "title": "Tool Id",
      "type": "string"
    }
  },
  "required": [
    "tool_id"
  ],
  "title": "woo_run_system_status_toolArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_list_webhooks-910145f0"></a>

## woo_list_webhooks

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. List all WooCommerce webhooks
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2624-L2633) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "status": {
      "default": "all",
      "title": "Status",
      "type": "string"
    },
    "per_page": {
      "default": 20,
      "title": "Per Page",
      "type": "integer"
    }
  },
  "title": "woo_list_webhooksArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_create_webhook-316e4b65"></a>

## woo_create_webhook

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_post, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Create a WooCommerce webhook
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2635-L2646) · Schema: tools/list.

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
    "topic": {
      "title": "Topic",
      "type": "string"
    },
    "delivery_url": {
      "title": "Delivery Url",
      "type": "string"
    },
    "status": {
      "default": "active",
      "title": "Status",
      "type": "string"
    },
    "secret": {
      "default": null,
      "title": "Secret",
      "type": "string"
    },
    "api_version": {
      "default": "v3",
      "title": "Api Version",
      "type": "string"
    }
  },
  "required": [
    "name",
    "topic",
    "delivery_url"
  ],
  "title": "woo_create_webhookArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_get_webhook-db2cf30d"></a>

## woo_get_webhook

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get a specific WooCommerce webhook by ID
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2648-L2654) · Schema: tools/list.

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
  "title": "woo_get_webhookArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_update_webhook-120977d0"></a>

## woo_update_webhook

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Update a WooCommerce webhook
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2656-L2666) · Schema: tools/list.

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
    "delivery_url": {
      "default": null,
      "title": "Delivery Url",
      "type": "string"
    },
    "secret": {
      "default": null,
      "title": "Secret",
      "type": "string"
    }
  },
  "required": [
    "id"
  ],
  "title": "woo_update_webhookArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_delete_webhook-834fc648"></a>

## woo_delete_webhook

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_delete, \_wp.

```text
[WRITE] WooCommerce tool. Delete a WooCommerce webhook
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2668-L2675) · Schema: tools/list.

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
  "title": "woo_delete_webhookArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_get_webhook_deliveries-9e1d0cdd"></a>

## woo_get_webhook_deliveries

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get delivery log for a WooCommerce webhook
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2677-L2685) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "webhook_id": {
      "title": "Webhook Id",
      "type": "integer"
    },
    "per_page": {
      "default": 20,
      "title": "Per Page",
      "type": "integer"
    }
  },
  "required": [
    "webhook_id"
  ],
  "title": "woo_get_webhook_deliveriesArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_get_data_continents-25becde4"></a>

## woo_get_data_continents

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get list of supported continents and countries for WooCommerce
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2687-L2691) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "woo_get_data_continentsArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_get_data_countries-1e2d4b32"></a>

## woo_get_data_countries

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get list of supported countries for WooCommerce store
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2693-L2697) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "woo_get_data_countriesArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_get_data_currencies-4a5f5296"></a>

## woo_get_data_currencies

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get list of supported currencies
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2699-L2703) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "woo_get_data_currenciesArguments",
  "type": "object"
}
```

</details>

<a id="tool-woo_get_current_currency-0fef113e"></a>

## woo_get_current_currency

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get the current store currency
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2705-L2709) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "woo_get_current_currencyArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_get_general_settings-f31ef3a3"></a>

## wc_get_general_settings

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Get all WooCommerce General settings (store address, selling locations, currency, tax, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2711-L2715) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wc_get_general_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_set_store_address-e7d43351"></a>

## wc_set_store_address

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_post, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Set the WooCommerce store address (used for tax calculations and shipping)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2717-L2728) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "country": {
      "title": "Country",
      "type": "string"
    },
    "address": {
      "default": null,
      "title": "Address",
      "type": "string"
    },
    "address_2": {
      "default": null,
      "title": "Address 2",
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
    "postcode": {
      "default": null,
      "title": "Postcode",
      "type": "string"
    }
  },
  "required": [
    "country"
  ],
  "title": "wc_set_store_addressArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_set_selling_locations-9d10cc5b"></a>

## wc_set_selling_locations

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Configure which countries WooCommerce sells to and ships to
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2730-L2740) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "sell_to": {
      "default": null,
      "title": "Sell To",
      "type": "string"
    },
    "sell_to_countries": {
      "default": null,
      "items": {},
      "title": "Sell To Countries",
      "type": "array"
    },
    "ship_to": {
      "default": null,
      "title": "Ship To",
      "type": "string"
    },
    "ship_to_countries": {
      "default": null,
      "items": {},
      "title": "Ship To Countries",
      "type": "array"
    },
    "default_customer_address": {
      "default": null,
      "title": "Default Customer Address",
      "type": "string"
    }
  },
  "title": "wc_set_selling_locationsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_set_currency_settings-ee595ff4"></a>

## wc_set_currency_settings

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Set WooCommerce currency, currency position, and number format
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2742-L2752) · Schema: tools/list.

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
    "currency_pos": {
      "default": null,
      "title": "Currency Pos",
      "type": "string"
    },
    "price_num_decimals": {
      "default": null,
      "title": "Price Num Decimals",
      "type": "integer"
    },
    "price_decimal_sep": {
      "default": null,
      "title": "Price Decimal Sep",
      "type": "string"
    },
    "price_thousand_sep": {
      "default": null,
      "title": "Price Thousand Sep",
      "type": "string"
    }
  },
  "title": "wc_set_currency_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_set_tax_settings-12abecb5"></a>

## wc_set_tax_settings

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Configure WooCommerce tax options
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2754-L2768) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "woocommerce_calc_taxes": {
      "default": null,
      "title": "Woocommerce Calc Taxes",
      "type": "string"
    },
    "woocommerce_prices_include_tax": {
      "default": null,
      "title": "Woocommerce Prices Include Tax",
      "type": "string"
    },
    "woocommerce_tax_based_on": {
      "default": null,
      "title": "Woocommerce Tax Based On",
      "type": "string"
    },
    "woocommerce_shipping_tax_class": {
      "default": null,
      "title": "Woocommerce Shipping Tax Class",
      "type": "string"
    },
    "woocommerce_tax_round_at_subtotal": {
      "default": null,
      "title": "Woocommerce Tax Round At Subtotal",
      "type": "string"
    },
    "woocommerce_tax_display_shop": {
      "default": null,
      "title": "Woocommerce Tax Display Shop",
      "type": "string"
    },
    "woocommerce_tax_display_cart": {
      "default": null,
      "title": "Woocommerce Tax Display Cart",
      "type": "string"
    },
    "woocommerce_price_display_suffix": {
      "default": null,
      "title": "Woocommerce Price Display Suffix",
      "type": "string"
    },
    "woocommerce_tax_total_display": {
      "default": null,
      "title": "Woocommerce Tax Total Display",
      "type": "string"
    }
  },
  "title": "wc_set_tax_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_get_product_settings-a2538640"></a>

## wc_get_product_settings

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Get all WooCommerce Product settings (measurements, reviews, inventory, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2770-L2774) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wc_get_product_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_set_product_general_settings-38d6ab35"></a>

## wc_set_product_general_settings

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Configure WooCommerce product general settings — shop page, cart behaviour, measurements
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2776-L2791) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "woocommerce_shop_page_id": {
      "default": null,
      "title": "Woocommerce Shop Page Id",
      "type": "integer"
    },
    "woocommerce_cart_redirect_after_add": {
      "default": null,
      "title": "Woocommerce Cart Redirect After Add",
      "type": "string"
    },
    "woocommerce_enable_ajax_add_to_cart": {
      "default": null,
      "title": "Woocommerce Enable Ajax Add To Cart",
      "type": "string"
    },
    "woocommerce_placeholder_image": {
      "default": null,
      "title": "Woocommerce Placeholder Image",
      "type": "integer"
    },
    "woocommerce_weight_unit": {
      "default": null,
      "title": "Woocommerce Weight Unit",
      "type": "string"
    },
    "woocommerce_dimension_unit": {
      "default": null,
      "title": "Woocommerce Dimension Unit",
      "type": "string"
    },
    "woocommerce_reviews_enabled": {
      "default": null,
      "title": "Woocommerce Reviews Enabled",
      "type": "string"
    },
    "woocommerce_review_rating_verification_required": {
      "default": null,
      "title": "Woocommerce Review Rating Verification Required",
      "type": "string"
    },
    "woocommerce_review_rating_required": {
      "default": null,
      "title": "Woocommerce Review Rating Required",
      "type": "string"
    },
    "woocommerce_review_rating_verification_label": {
      "default": null,
      "title": "Woocommerce Review Rating Verification Label",
      "type": "string"
    }
  },
  "title": "wc_set_product_general_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_set_inventory_settings-5670ba73"></a>

## wc_set_inventory_settings

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Configure WooCommerce inventory management settings
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2793-L2807) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "woocommerce_manage_stock": {
      "default": null,
      "title": "Woocommerce Manage Stock",
      "type": "string"
    },
    "woocommerce_hold_stock_minutes": {
      "default": null,
      "title": "Woocommerce Hold Stock Minutes",
      "type": "integer"
    },
    "woocommerce_notify_low_stock": {
      "default": null,
      "title": "Woocommerce Notify Low Stock",
      "type": "string"
    },
    "woocommerce_notify_no_stock": {
      "default": null,
      "title": "Woocommerce Notify No Stock",
      "type": "string"
    },
    "woocommerce_stock_email_recipient": {
      "default": null,
      "title": "Woocommerce Stock Email Recipient",
      "type": "string"
    },
    "woocommerce_notify_low_stock_amount": {
      "default": null,
      "title": "Woocommerce Notify Low Stock Amount",
      "type": "integer"
    },
    "woocommerce_notify_no_stock_amount": {
      "default": null,
      "title": "Woocommerce Notify No Stock Amount",
      "type": "integer"
    },
    "woocommerce_hide_out_of_stock_items": {
      "default": null,
      "title": "Woocommerce Hide Out Of Stock Items",
      "type": "string"
    },
    "woocommerce_stock_format": {
      "default": null,
      "title": "Woocommerce Stock Format",
      "type": "string"
    }
  },
  "title": "wc_set_inventory_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_set_downloadable_product_settings-28448f80"></a>

## wc_set_downloadable_product_settings

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Configure WooCommerce downloadable product settings
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2809-L2818) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "woocommerce_file_download_method": {
      "default": null,
      "title": "Woocommerce File Download Method",
      "type": "string"
    },
    "woocommerce_downloads_add_hash_to_filename": {
      "default": null,
      "title": "Woocommerce Downloads Add Hash To Filename",
      "type": "string"
    },
    "woocommerce_downloads_require_login": {
      "default": null,
      "title": "Woocommerce Downloads Require Login",
      "type": "string"
    },
    "woocommerce_downloads_grant_access_after_payment": {
      "default": null,
      "title": "Woocommerce Downloads Grant Access After Payment",
      "type": "string"
    }
  },
  "title": "wc_set_downloadable_product_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_get_shipping_settings-5835b4b0"></a>

## wc_get_shipping_settings

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Get WooCommerce shipping general settings
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2820-L2824) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wc_get_shipping_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_set_shipping_options-937bc3e4"></a>

## wc_set_shipping_options

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Configure WooCommerce shipping general options
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2826-L2835) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "woocommerce_enable_shipping_calc": {
      "default": null,
      "title": "Woocommerce Enable Shipping Calc",
      "type": "string"
    },
    "woocommerce_shipping_cost_requires_address": {
      "default": null,
      "title": "Woocommerce Shipping Cost Requires Address",
      "type": "string"
    },
    "woocommerce_ship_to_countries": {
      "default": null,
      "title": "Woocommerce Ship To Countries",
      "type": "string"
    },
    "woocommerce_shipping_debug_mode": {
      "default": null,
      "title": "Woocommerce Shipping Debug Mode",
      "type": "string"
    }
  },
  "title": "wc_set_shipping_optionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_list_shipping_zones-2fefb904"></a>

## wc_list_shipping_zones

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. List all WooCommerce shipping zones
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2837-L2841) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wc_list_shipping_zonesArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_get_shipping_zone-0881cb8b"></a>

## wc_get_shipping_zone

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get a shipping zone including all its methods and locations
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2843-L2849) · Schema: tools/list.

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
  "title": "wc_get_shipping_zoneArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_create_shipping_zone-3dfba9b6"></a>

## wc_create_shipping_zone

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_post, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Create a new WooCommerce shipping zone
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2851-L2858) · Schema: tools/list.

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
      "default": 0,
      "title": "Order",
      "type": "integer"
    }
  },
  "required": [
    "name"
  ],
  "title": "wc_create_shipping_zoneArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_update_shipping_zone-63d287c3"></a>

## wc_update_shipping_zone

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Update a shipping zone name or order
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2860-L2868) · Schema: tools/list.

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
    "zone_id"
  ],
  "title": "wc_update_shipping_zoneArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_delete_shipping_zone-451f6fa1"></a>

## wc_delete_shipping_zone

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_delete, \_wp.

```text
[WRITE] WooCommerce tool. Delete a WooCommerce shipping zone (and all its methods)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2870-L2876) · Schema: tools/list.

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
  "title": "wc_delete_shipping_zoneArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_set_shipping_zone_locations-0033f7b6"></a>

## wc_set_shipping_zone_locations

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Set the locations (countries, states, postcodes, continents) for a shipping zone
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2878-L2885) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "zone_id": {
      "default": null,
      "title": "Zone Id",
      "type": "integer"
    },
    "locations": {
      "default": null,
      "items": {},
      "title": "Locations",
      "type": "array"
    }
  },
  "title": "wc_set_shipping_zone_locationsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_list_shipping_zone_methods-39f97fd9"></a>

## wc_list_shipping_zone_methods

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. List all shipping methods for a specific zone
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2887-L2893) · Schema: tools/list.

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
  "title": "wc_list_shipping_zone_methodsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_add_flat_rate_shipping-a37ce267"></a>

## wc_add_flat_rate_shipping

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_post, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Add a Flat Rate shipping method to a zone with full configuration
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2895-L2908) · Schema: tools/list.

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
    "title": {
      "default": "Flat Rate",
      "title": "Title",
      "type": "string"
    },
    "cost": {
      "default": null,
      "title": "Cost",
      "type": "string"
    },
    "tax_status": {
      "default": "taxable",
      "title": "Tax Status",
      "type": "string"
    },
    "class_costs": {
      "default": null,
      "title": "Class Costs",
      "type": "string"
    },
    "no_class_cost": {
      "default": null,
      "title": "No Class Cost",
      "type": "string"
    },
    "type": {
      "default": null,
      "title": "Type",
      "type": "string"
    },
    "enabled": {
      "default": true,
      "title": "Enabled",
      "type": "boolean"
    }
  },
  "required": [
    "zone_id"
  ],
  "title": "wc_add_flat_rate_shippingArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_update_flat_rate_shipping-e7073b24"></a>

## wc_update_flat_rate_shipping

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Update a Flat Rate shipping method settings in a zone
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2910-L2924) · Schema: tools/list.

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
    "title": {
      "default": null,
      "title": "Title",
      "type": "string"
    },
    "cost": {
      "default": null,
      "title": "Cost",
      "type": "string"
    },
    "tax_status": {
      "default": null,
      "title": "Tax Status",
      "type": "string"
    },
    "class_costs": {
      "default": null,
      "title": "Class Costs",
      "type": "string"
    },
    "no_class_cost": {
      "default": null,
      "title": "No Class Cost",
      "type": "string"
    },
    "type": {
      "default": null,
      "title": "Type",
      "type": "string"
    },
    "enabled": {
      "default": null,
      "title": "Enabled",
      "type": "boolean"
    }
  },
  "required": [
    "zone_id",
    "instance_id"
  ],
  "title": "wc_update_flat_rate_shippingArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_add_free_shipping-a799eaef"></a>

## wc_add_free_shipping

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_post, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Add a Free Shipping method to a zone with minimum order requirements
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2926-L2937) · Schema: tools/list.

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
    "title": {
      "default": "Free Shipping",
      "title": "Title",
      "type": "string"
    },
    "requires": {
      "default": null,
      "title": "Requires",
      "type": "string"
    },
    "min_amount": {
      "default": null,
      "title": "Min Amount",
      "type": "string"
    },
    "ignore_discounts": {
      "default": null,
      "title": "Ignore Discounts",
      "type": "string"
    },
    "enabled": {
      "default": true,
      "title": "Enabled",
      "type": "boolean"
    }
  },
  "required": [
    "zone_id"
  ],
  "title": "wc_add_free_shippingArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_update_free_shipping-e906963d"></a>

## wc_update_free_shipping

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Update a Free Shipping method settings in a zone
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2939-L2951) · Schema: tools/list.

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
    "title": {
      "default": null,
      "title": "Title",
      "type": "string"
    },
    "requires": {
      "default": null,
      "title": "Requires",
      "type": "string"
    },
    "min_amount": {
      "default": null,
      "title": "Min Amount",
      "type": "string"
    },
    "ignore_discounts": {
      "default": null,
      "title": "Ignore Discounts",
      "type": "string"
    },
    "enabled": {
      "default": null,
      "title": "Enabled",
      "type": "boolean"
    }
  },
  "required": [
    "zone_id",
    "instance_id"
  ],
  "title": "wc_update_free_shippingArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_add_local_pickup-bdd29bbd"></a>

## wc_add_local_pickup

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_post, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Add a Local Pickup shipping method to a zone
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2953-L2963) · Schema: tools/list.

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
    "title": {
      "default": "Local Pickup",
      "title": "Title",
      "type": "string"
    },
    "cost": {
      "default": null,
      "title": "Cost",
      "type": "string"
    },
    "tax_status": {
      "default": null,
      "title": "Tax Status",
      "type": "string"
    },
    "enabled": {
      "default": true,
      "title": "Enabled",
      "type": "boolean"
    }
  },
  "required": [
    "zone_id"
  ],
  "title": "wc_add_local_pickupArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_toggle_shipping_method-cac4269d"></a>

## wc_toggle_shipping_method

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Enable or disable a shipping method in a zone
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2965-L2975) · Schema: tools/list.

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
      "title": "Enabled",
      "type": "boolean"
    }
  },
  "required": [
    "zone_id",
    "instance_id",
    "enabled"
  ],
  "title": "wc_toggle_shipping_methodArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_delete_shipping_method-9ee71156"></a>

## wc_delete_shipping_method

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_delete, \_wp.

```text
[WRITE] WooCommerce tool. Remove a shipping method from a zone
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2977-L2984) · Schema: tools/list.

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
    }
  },
  "required": [
    "zone_id",
    "instance_id"
  ],
  "title": "wc_delete_shipping_methodArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_get_shipping_classes-13f32a46"></a>

## wc_get_shipping_classes

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. List all WooCommerce shipping classes
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2986-L2990) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wc_get_shipping_classesArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_create_shipping_class-d3e70a67"></a>

## wc_create_shipping_class

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_post, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Create a new shipping class
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L2992-L3000) · Schema: tools/list.

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
  "title": "wc_create_shipping_classArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_update_shipping_class-e24c0b5c"></a>

## wc_update_shipping_class

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Update a shipping class
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L3002-L3011) · Schema: tools/list.

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
  "title": "wc_update_shipping_classArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_delete_shipping_class-6576aaa4"></a>

## wc_delete_shipping_class

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_delete, \_wp.

```text
[WRITE] WooCommerce tool. Delete a shipping class
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L3013-L3019) · Schema: tools/list.

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
  "title": "wc_delete_shipping_classArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_list_payment_gateways-48964a32"></a>

## wc_list_payment_gateways

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. List all available WooCommerce payment gateways and their status
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L3021-L3025) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wc_list_payment_gatewaysArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_get_payment_gateway-605862ba"></a>

## wc_get_payment_gateway

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get full settings for a specific payment gateway
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L3027-L3033) · Schema: tools/list.

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
  "title": "wc_get_payment_gatewayArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_configure_bacs_gateway-3762097c"></a>

## wc_configure_bacs_gateway

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Configure the Bank Transfer (BACS) payment gateway
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L3035-L3060) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "enabled": {
      "default": null,
      "title": "Enabled",
      "type": "string"
    },
    "title": {
      "default": "Direct Bank Transfer",
      "title": "Title",
      "type": "string"
    },
    "description": {
      "default": null,
      "title": "Description",
      "type": "string"
    },
    "instructions": {
      "default": null,
      "title": "Instructions",
      "type": "string"
    },
    "account_name": {
      "default": null,
      "title": "Account Name",
      "type": "string"
    },
    "account_number": {
      "default": null,
      "title": "Account Number",
      "type": "string"
    },
    "sort_code": {
      "default": null,
      "title": "Sort Code",
      "type": "string"
    },
    "bank_name": {
      "default": null,
      "title": "Bank Name",
      "type": "string"
    },
    "iban": {
      "default": null,
      "title": "Iban",
      "type": "string"
    },
    "bic": {
      "default": null,
      "title": "Bic",
      "type": "string"
    }
  },
  "title": "wc_configure_bacs_gatewayArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_configure_cheque_gateway-ae25e500"></a>

## wc_configure_cheque_gateway

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Configure the Check/Cheque payment gateway
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L3062-L3075) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "enabled": {
      "default": null,
      "title": "Enabled",
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
    "instructions": {
      "default": null,
      "title": "Instructions",
      "type": "string"
    }
  },
  "title": "wc_configure_cheque_gatewayArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_configure_cod_gateway-b8f97841"></a>

## wc_configure_cod_gateway

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Configure the Cash on Delivery (COD) payment gateway
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L3077-L3094) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "enabled": {
      "default": null,
      "title": "Enabled",
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
    "instructions": {
      "default": null,
      "title": "Instructions",
      "type": "string"
    },
    "enable_for_methods": {
      "default": null,
      "items": {},
      "title": "Enable For Methods",
      "type": "array"
    },
    "enable_for_virtual": {
      "default": null,
      "title": "Enable For Virtual",
      "type": "string"
    }
  },
  "title": "wc_configure_cod_gatewayArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_configure_paypal_gateway-b2d18713"></a>

## wc_configure_paypal_gateway

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Configure the PayPal Standard payment gateway
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L3096-L3143) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "enabled": {
      "default": null,
      "title": "Enabled",
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
    "debug": {
      "default": null,
      "title": "Debug",
      "type": "string"
    },
    "ipn_notification": {
      "default": null,
      "title": "Ipn Notification",
      "type": "string"
    },
    "receiver_email": {
      "default": null,
      "title": "Receiver Email",
      "type": "string"
    },
    "identity_token": {
      "default": null,
      "title": "Identity Token",
      "type": "string"
    },
    "invoice_prefix": {
      "default": null,
      "title": "Invoice Prefix",
      "type": "string"
    },
    "send_shipping": {
      "default": null,
      "title": "Send Shipping",
      "type": "string"
    },
    "address_override": {
      "default": null,
      "title": "Address Override",
      "type": "string"
    },
    "paymentaction": {
      "default": null,
      "title": "Paymentaction",
      "type": "string"
    },
    "page_style": {
      "default": null,
      "title": "Page Style",
      "type": "string"
    },
    "image_url": {
      "default": null,
      "title": "Image Url",
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
    }
  },
  "title": "wc_configure_paypal_gatewayArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_reorder_payment_gateways-704bff6f"></a>

## wc_reorder_payment_gateways

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Change the display order of payment gateways on checkout
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L3145-L3152) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "order": {
      "items": {},
      "title": "Order",
      "type": "array"
    }
  },
  "required": [
    "order"
  ],
  "title": "wc_reorder_payment_gatewaysArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_get_accounts_privacy_settings-fca75af8"></a>

## wc_get_accounts_privacy_settings

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Get WooCommerce Accounts & Privacy settings
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L3154-L3158) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wc_get_accounts_privacy_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_set_accounts_settings-1963f7cf"></a>

## wc_set_accounts_settings

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Configure WooCommerce customer account and registration settings
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L3160-L3175) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "woocommerce_enable_myaccount_registration": {
      "default": null,
      "title": "Woocommerce Enable Myaccount Registration",
      "type": "string"
    },
    "woocommerce_registration_generate_username": {
      "default": null,
      "title": "Woocommerce Registration Generate Username",
      "type": "string"
    },
    "woocommerce_registration_generate_password": {
      "default": null,
      "title": "Woocommerce Registration Generate Password",
      "type": "string"
    },
    "woocommerce_enable_checkout_login_reminder": {
      "default": null,
      "title": "Woocommerce Enable Checkout Login Reminder",
      "type": "string"
    },
    "woocommerce_enable_signup_and_login_from_checkout": {
      "default": null,
      "title": "Woocommerce Enable Signup And Login From Checkout",
      "type": "string"
    },
    "woocommerce_enable_guest_checkout": {
      "default": null,
      "title": "Woocommerce Enable Guest Checkout",
      "type": "string"
    },
    "woocommerce_login_privacy": {
      "default": null,
      "title": "Woocommerce Login Privacy",
      "type": "string"
    },
    "woocommerce_erasure_request_removes_order_data": {
      "default": null,
      "title": "Woocommerce Erasure Request Removes Order Data",
      "type": "string"
    },
    "woocommerce_erasure_request_removes_download_data": {
      "default": null,
      "title": "Woocommerce Erasure Request Removes Download Data",
      "type": "string"
    },
    "woocommerce_allow_bulk_remove_personal_data": {
      "default": null,
      "title": "Woocommerce Allow Bulk Remove Personal Data",
      "type": "string"
    }
  },
  "title": "wc_set_accounts_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_set_privacy_policy_settings-e4629b91"></a>

## wc_set_privacy_policy_settings

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Configure WooCommerce privacy policy page links for checkout and registration
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L3177-L3184) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "woocommerce_checkout_privacy_policy_text": {
      "default": null,
      "title": "Woocommerce Checkout Privacy Policy Text",
      "type": "string"
    },
    "woocommerce_registration_privacy_policy_text": {
      "default": null,
      "title": "Woocommerce Registration Privacy Policy Text",
      "type": "string"
    }
  },
  "title": "wc_set_privacy_policy_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_set_personal_data_retention-45e98c34"></a>

## wc_set_personal_data_retention

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Configure how long WooCommerce retains personal data for inactive accounts, failed/pending orders, and completed orders
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L3186-L3197) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "woocommerce_delete_inactive_accounts": {
      "default": null,
      "title": "Woocommerce Delete Inactive Accounts",
      "type": "string"
    },
    "woocommerce_trash_pending_orders": {
      "default": null,
      "title": "Woocommerce Trash Pending Orders",
      "type": "string"
    },
    "woocommerce_trash_failed_orders": {
      "default": null,
      "title": "Woocommerce Trash Failed Orders",
      "type": "string"
    },
    "woocommerce_trash_cancelled_orders": {
      "default": null,
      "title": "Woocommerce Trash Cancelled Orders",
      "type": "string"
    },
    "woocommerce_anonymize_completed_orders": {
      "default": null,
      "title": "Woocommerce Anonymize Completed Orders",
      "type": "string"
    },
    "woocommerce_delete_cancelled_orders": {
      "default": null,
      "title": "Woocommerce Delete Cancelled Orders",
      "type": "string"
    }
  },
  "title": "wc_set_personal_data_retentionArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_get_email_settings-67962cfa"></a>

## wc_get_email_settings

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Get WooCommerce email settings (sender name, email, and all template settings)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L3199-L3203) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wc_get_email_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_set_email_sender_settings-d8686b16"></a>

## wc_set_email_sender_settings

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Configure WooCommerce email sender name and address
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L3205-L3212) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "woocommerce_email_from_name": {
      "default": null,
      "title": "Woocommerce Email From Name",
      "type": "string"
    },
    "woocommerce_email_from_address": {
      "default": null,
      "title": "Woocommerce Email From Address",
      "type": "string"
    }
  },
  "title": "wc_set_email_sender_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_set_email_template_styling-2f9b2a65"></a>

## wc_set_email_template_styling

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Configure WooCommerce email template visual styling (colors, header image, footer text)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L3214-L3225) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "woocommerce_email_header_image": {
      "default": null,
      "title": "Woocommerce Email Header Image",
      "type": "string"
    },
    "woocommerce_email_footer_text": {
      "default": null,
      "title": "Woocommerce Email Footer Text",
      "type": "string"
    },
    "woocommerce_email_base_color": {
      "default": null,
      "title": "Woocommerce Email Base Color",
      "type": "string"
    },
    "woocommerce_email_background_color": {
      "default": null,
      "title": "Woocommerce Email Background Color",
      "type": "string"
    },
    "woocommerce_email_body_background_color": {
      "default": null,
      "title": "Woocommerce Email Body Background Color",
      "type": "string"
    },
    "woocommerce_email_text_color": {
      "default": null,
      "title": "Woocommerce Email Text Color",
      "type": "string"
    }
  },
  "title": "wc_set_email_template_stylingArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_list_email_notifications-1b681e94"></a>

## wc_list_email_notifications

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. List all WooCommerce email notification types and their enabled/disabled status
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L3227-L3231) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wc_list_email_notificationsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_get_email_notification-ef0b92b6"></a>

## wc_get_email_notification

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get settings for a specific WooCommerce email notification
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L3233-L3240) · Schema: tools/list.

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
  "title": "wc_get_email_notificationArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_update_email_notification-f808ee57"></a>

## wc_update_email_notification

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Enable/disable and configure a WooCommerce email notification template
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L3242-L3253) · Schema: tools/list.

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
      "type": "string"
    },
    "recipient": {
      "default": null,
      "title": "Recipient",
      "type": "string"
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
    }
  },
  "required": [
    "email_id"
  ],
  "title": "wc_update_email_notificationArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_get_advanced_settings-948abac9"></a>

## wc_get_advanced_settings

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Get WooCommerce Advanced settings (page assignments, REST API, legacy API)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L3255-L3259) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wc_get_advanced_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_set_page_assignments-cdbb707f"></a>

## wc_set_page_assignments

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Assign WooCommerce special pages (cart, checkout, my account, terms)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L3261-L3270) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "woocommerce_cart_page_id": {
      "default": null,
      "title": "Woocommerce Cart Page Id",
      "type": "integer"
    },
    "woocommerce_checkout_page_id": {
      "default": null,
      "title": "Woocommerce Checkout Page Id",
      "type": "integer"
    },
    "woocommerce_myaccount_page_id": {
      "default": null,
      "title": "Woocommerce Myaccount Page Id",
      "type": "integer"
    },
    "woocommerce_terms_page_id": {
      "default": null,
      "title": "Woocommerce Terms Page Id",
      "type": "integer"
    }
  },
  "title": "wc_set_page_assignmentsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_set_checkout_settings-16ebe616"></a>

## wc_set_checkout_settings

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Configure WooCommerce checkout page settings
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L3272-L3284) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "woocommerce_force_ssl_checkout": {
      "default": null,
      "title": "Woocommerce Force Ssl Checkout",
      "type": "string"
    },
    "woocommerce_unforce_ssl_checkout": {
      "default": null,
      "title": "Woocommerce Unforce Ssl Checkout",
      "type": "string"
    },
    "woocommerce_checkout_pay_endpoint": {
      "default": "order-pay",
      "title": "Woocommerce Checkout Pay Endpoint",
      "type": "string"
    },
    "woocommerce_checkout_order_received_endpoint": {
      "default": "order-received",
      "title": "Woocommerce Checkout Order Received Endpoint",
      "type": "string"
    },
    "woocommerce_myaccount_add_payment_method_endpoint": {
      "default": null,
      "title": "Woocommerce Myaccount Add Payment Method Endpoint",
      "type": "string"
    },
    "woocommerce_myaccount_delete_payment_method_endpoint": {
      "default": null,
      "title": "Woocommerce Myaccount Delete Payment Method Endpoint",
      "type": "string"
    },
    "woocommerce_myaccount_set_default_payment_method_endpoint": {
      "default": null,
      "title": "Woocommerce Myaccount Set Default Payment Method Endpoint",
      "type": "string"
    }
  },
  "title": "wc_set_checkout_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_set_myaccount_endpoints-9c849682"></a>

## wc_set_myaccount_endpoints

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Configure WooCommerce My Account page endpoint slugs
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L3286-L3299) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "woocommerce_myaccount_orders_endpoint": {
      "default": "orders",
      "title": "Woocommerce Myaccount Orders Endpoint",
      "type": "string"
    },
    "woocommerce_myaccount_view_order_endpoint": {
      "default": "view-order",
      "title": "Woocommerce Myaccount View Order Endpoint",
      "type": "string"
    },
    "woocommerce_myaccount_downloads_endpoint": {
      "default": "downloads",
      "title": "Woocommerce Myaccount Downloads Endpoint",
      "type": "string"
    },
    "woocommerce_myaccount_edit_account_endpoint": {
      "default": "edit-account",
      "title": "Woocommerce Myaccount Edit Account Endpoint",
      "type": "string"
    },
    "woocommerce_myaccount_edit_address_endpoint": {
      "default": "edit-address",
      "title": "Woocommerce Myaccount Edit Address Endpoint",
      "type": "string"
    },
    "woocommerce_myaccount_payment_methods_endpoint": {
      "default": "payment-methods",
      "title": "Woocommerce Myaccount Payment Methods Endpoint",
      "type": "string"
    },
    "woocommerce_myaccount_lost_password_endpoint": {
      "default": "lost-password",
      "title": "Woocommerce Myaccount Lost Password Endpoint",
      "type": "string"
    },
    "woocommerce_logout_endpoint": {
      "default": "customer-logout",
      "title": "Woocommerce Logout Endpoint",
      "type": "string"
    }
  },
  "title": "wc_set_myaccount_endpointsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_set_geolocation_settings-0df62f57"></a>

## wc_set_geolocation_settings

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Configure WooCommerce geolocation settings (requires MaxMind GeoIP for accuracy)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L3301-L3308) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "woocommerce_maxmind_geolocation_license_key": {
      "default": null,
      "title": "Woocommerce Maxmind Geolocation License Key",
      "type": "string"
    },
    "woocommerce_default_customer_address": {
      "default": null,
      "title": "Woocommerce Default Customer Address",
      "type": "string"
    }
  },
  "title": "wc_set_geolocation_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_list_rest_api_keys-e301a799"></a>

## wc_list_rest_api_keys

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. List WooCommerce REST API keys
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L3310-L3319) · Schema: tools/list.

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
    }
  },
  "title": "wc_list_rest_api_keysArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_create_rest_api_key-b01539c3"></a>

## wc_create_rest_api_key

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_post, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Create a new WooCommerce REST API key
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L3321-L3329) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "description": {
      "title": "Description",
      "type": "string"
    },
    "user": {
      "title": "User",
      "type": "integer"
    },
    "permissions": {
      "title": "Permissions",
      "type": "string"
    }
  },
  "required": [
    "description",
    "user",
    "permissions"
  ],
  "title": "wc_create_rest_api_keyArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_revoke_rest_api_key-12b0de16"></a>

## wc_revoke_rest_api_key

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Revoke/delete a WooCommerce REST API key
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L3331-L3338) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "key_id": {
      "title": "Key Id",
      "type": "integer"
    }
  },
  "required": [
    "key_id"
  ],
  "title": "wc_revoke_rest_api_keyArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_set_legacy_api-a1cd995f"></a>

## wc_set_legacy_api

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Enable or disable the WooCommerce Legacy REST API (v1/v2/v3)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L3340-L3346) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "woocommerce_api_enabled": {
      "title": "Woocommerce Api Enabled",
      "type": "string"
    }
  },
  "required": [
    "woocommerce_api_enabled"
  ],
  "title": "wc_set_legacy_apiArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_set_catalog_display_settings-a69bf579"></a>

## wc_set_catalog_display_settings

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Configure WooCommerce product catalog display settings
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L3348-L3359) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "woocommerce_shop_page_display": {
      "default": null,
      "title": "Woocommerce Shop Page Display",
      "type": "string"
    },
    "woocommerce_category_archive_display": {
      "default": null,
      "title": "Woocommerce Category Archive Display",
      "type": "string"
    },
    "woocommerce_default_catalog_orderby": {
      "default": null,
      "title": "Woocommerce Default Catalog Orderby",
      "type": "string"
    },
    "woocommerce_catalog_columns": {
      "default": null,
      "title": "Woocommerce Catalog Columns",
      "type": "integer"
    },
    "woocommerce_catalog_rows": {
      "default": null,
      "title": "Woocommerce Catalog Rows",
      "type": "integer"
    },
    "woocommerce_enable_review_rating": {
      "default": null,
      "title": "Woocommerce Enable Review Rating",
      "type": "string"
    }
  },
  "title": "wc_set_catalog_display_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_set_product_image_settings-448bf790"></a>

## wc_set_product_image_settings

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_put, locals().items, \_wp, locals.

```text
[WRITE] WooCommerce tool. Configure WooCommerce product image thumbnail sizes
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L3361-L3371) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "woocommerce_thumbnail_image_width": {
      "default": null,
      "title": "Woocommerce Thumbnail Image Width",
      "type": "integer"
    },
    "woocommerce_single_image_width": {
      "default": null,
      "title": "Woocommerce Single Image Width",
      "type": "integer"
    },
    "woocommerce_thumbnail_cropping": {
      "default": null,
      "title": "Woocommerce Thumbnail Cropping",
      "type": "string"
    },
    "woocommerce_thumbnail_cropping_custom_width": {
      "default": null,
      "title": "Woocommerce Thumbnail Cropping Custom Width",
      "type": "integer"
    },
    "woocommerce_thumbnail_cropping_custom_height": {
      "default": null,
      "title": "Woocommerce Thumbnail Cropping Custom Height",
      "type": "integer"
    }
  },
  "title": "wc_set_product_image_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_get_system_status_full-a481d006"></a>

## wc_get_system_status_full

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Get detailed WooCommerce system status report (environment, database, active plugins, theme, settings)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L3373-L3377) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wc_get_system_status_fullArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_run_status_tool-69075859"></a>

## wc_run_status_tool

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. Run a WooCommerce maintenance tool (clear transients, clear sessions, install pages, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L3379-L3386) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "tool_id": {
      "title": "Tool Id",
      "type": "string"
    }
  },
  "required": [
    "tool_id"
  ],
  "title": "wc_run_status_toolArguments",
  "type": "object"
}
```

</details>

<a id="tool-wc_list_status_tools-89eb0733"></a>

## wc_list_status_tools

Handler: Other product (tools/wordpress/commerce.py): calls mcp.tool, \_wp().woo\_get, \_wp.

```text
[READ] WooCommerce tool. List all available WooCommerce maintenance/status tools
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/commerce.py#L3388-L3392) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wc_list_status_toolsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_ab_detect_plugin-f7d33cd6"></a>

## wp_ab_detect_plugin

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Detect which A/B testing plugin is installed (Nelio AB Testing, Split Hero, Thrive Optimize, Google Optimize — sunset)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L27-L31) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_ab_detect_pluginArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_ab_test_create-a5c49e2d"></a>

## wp_ab_test_create

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Create a new A/B test experiment with an original page, variant, and traffic split
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L33-L45) · Schema: tools/list.

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
    "original_id": {
      "title": "Original Id",
      "type": "integer"
    },
    "variant_id": {
      "default": null,
      "title": "Variant Id",
      "type": "integer"
    },
    "traffic_split": {
      "default": 50,
      "title": "Traffic Split",
      "type": "integer"
    },
    "type": {
      "default": "page",
      "title": "Type",
      "type": "string"
    },
    "goal": {
      "default": null,
      "title": "Goal",
      "type": "string"
    },
    "goal_page_id": {
      "default": null,
      "title": "Goal Page Id",
      "type": "integer"
    }
  },
  "required": [
    "name",
    "original_id"
  ],
  "title": "wp_ab_test_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_ab_test_list-bea27581"></a>

## wp_ab_test_list

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. List all A/B test experiments
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L47-L55) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
  "title": "wp_ab_test_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_ab_test_get-7ece3bbf"></a>

## wp_ab_test_get

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get details and results for a specific A/B test experiment
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L57-L63) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "test_id": {
      "title": "Test Id",
      "type": "integer"
    }
  },
  "required": [
    "test_id"
  ],
  "title": "wp_ab_test_getArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_ab_test_start-58ae647a"></a>

## wp_ab_test_start

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Activate / start a draft or paused A/B test
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L65-L71) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "test_id": {
      "title": "Test Id",
      "type": "integer"
    }
  },
  "required": [
    "test_id"
  ],
  "title": "wp_ab_test_startArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_ab_test_stop-0279e925"></a>

## wp_ab_test_stop

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Stop / pause a running A/B test
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L73-L79) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "test_id": {
      "title": "Test Id",
      "type": "integer"
    }
  },
  "required": [
    "test_id"
  ],
  "title": "wp_ab_test_stopArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_ab_test_winner_apply-328582d1"></a>

## wp_ab_test_winner_apply

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Apply the winning variant — replace the original page with the winning version
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L81-L88) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "test_id": {
      "title": "Test Id",
      "type": "integer"
    },
    "winner": {
      "title": "Winner",
      "type": "string"
    }
  },
  "required": [
    "test_id",
    "winner"
  ],
  "title": "wp_ab_test_winner_applyArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_ab_variant_create-fb2f1279"></a>

## wp_ab_variant_create

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Create a variant page by duplicating the original and optionally modifying title/content
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L90-L99) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "original_id": {
      "title": "Original Id",
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
      "default": "draft",
      "title": "Status",
      "type": "string"
    }
  },
  "required": [
    "original_id"
  ],
  "title": "wp_ab_variant_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_ab_goals_configure-8f3c69d8"></a>

## wp_ab_goals_configure

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Configure conversion goals for an A/B test (click, form submit, purchase, page view)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L101-L108) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "test_id": {
      "default": null,
      "title": "Test Id",
      "type": "integer"
    },
    "goals": {
      "default": null,
      "items": {},
      "title": "Goals",
      "type": "array"
    }
  },
  "title": "wp_ab_goals_configureArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_ab_report_get-362a7570"></a>

## wp_ab_report_get

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get A/B test report — conversion rates, visits, confidence interval, and statistical significance
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L110-L116) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "test_id": {
      "title": "Test Id",
      "type": "integer"
    }
  },
  "required": [
    "test_id"
  ],
  "title": "wp_ab_report_getArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_list_comments-25406b1b"></a>

## wp_list_comments

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] WordPress tool. List comments with filters (status, post, author, date)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L118-L143) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post": {
      "default": null,
      "title": "Post",
      "type": "integer"
    },
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
    },
    "search": {
      "default": null,
      "title": "Search",
      "type": "string"
    },
    "author_email": {
      "default": null,
      "title": "Author Email",
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
  "title": "wp_list_commentsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_comment-5dc204c2"></a>

## wp_get_comment

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get a single comment by ID
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L145-L151) · Schema: tools/list.

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
  "title": "wp_get_commentArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_create_comment-85a3c38a"></a>

## wp_create_comment

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Create a new comment on a post
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L153-L166) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post": {
      "title": "Post",
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
    },
    "author_url": {
      "default": null,
      "title": "Author Url",
      "type": "string"
    },
    "parent": {
      "default": null,
      "title": "Parent",
      "type": "integer"
    },
    "status": {
      "default": "approved",
      "title": "Status",
      "type": "string"
    },
    "date": {
      "default": null,
      "title": "Date",
      "type": "string"
    }
  },
  "required": [
    "post",
    "content"
  ],
  "title": "wp_create_commentArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_update_comment-68aefbb5"></a>

## wp_update_comment

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Update a comment's content or status
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L168-L180) · Schema: tools/list.

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
    "author_name": {
      "default": null,
      "title": "Author Name",
      "type": "string"
    },
    "author_email": {
      "default": null,
      "title": "Author Email",
      "type": "string"
    },
    "author_url": {
      "default": null,
      "title": "Author Url",
      "type": "string"
    },
    "date": {
      "default": null,
      "title": "Date",
      "type": "string"
    }
  },
  "required": [
    "id"
  ],
  "title": "wp_update_commentArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_delete_comment-97128ff9"></a>

## wp_delete_comment

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] WordPress tool. Delete or trash a comment
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L182-L190) · Schema: tools/list.

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
  "title": "wp_delete_commentArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_approve_comment-9446d59a"></a>

## wp_approve_comment

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, \_wp.

```text
[WRITE] WordPress tool. Approve a pending comment
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L192-L197) · Schema: tools/list.

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
  "title": "wp_approve_commentArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_spam_comment-768eaccd"></a>

## wp_spam_comment

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, \_wp.

```text
[WRITE] WordPress tool. Mark a comment as spam
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L199-L204) · Schema: tools/list.

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
  "title": "wp_spam_commentArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_reply_to_comment-e7675ced"></a>

## wp_reply_to_comment

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, \_wp.

```text
[WRITE] WordPress tool. Reply to an existing comment
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L206-L214) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "parent_id": {
      "title": "Parent Id",
      "type": "integer"
    },
    "post": {
      "title": "Post",
      "type": "integer"
    },
    "content": {
      "title": "Content",
      "type": "string"
    },
    "status": {
      "default": "approved",
      "title": "Status",
      "type": "string"
    }
  },
  "required": [
    "parent_id",
    "post",
    "content"
  ],
  "title": "wp_reply_to_commentArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_bulk_comment_action-438a3ab5"></a>

## wp_bulk_comment_action

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, status\_map.get, results.append, \_wp().delete, \_wp().post, \_wp.

```text
[WRITE] WordPress tool. Apply an action to multiple comments at once (approve, spam, delete, trash)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L216-L231) · Schema: tools/list.

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
    "action": {
      "title": "Action",
      "type": "string"
    }
  },
  "required": [
    "ids",
    "action"
  ],
  "title": "wp_bulk_comment_actionArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_comment_counts-95beb5c3"></a>

## wp_get_comment_counts

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] WordPress tool. Get comment count totals for a post (approved, pending, spam, trash)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L233-L238) · Schema: tools/list.

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
  "title": "wp_get_comment_countsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_test_connection-506b480e"></a>

## wp_test_connection

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().test\_connection, \_wp.

```text
[READ] WordPress tool. Test current WordPress connection and return site info
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L240-L243) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_test_connectionArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_set_post_meta-01d65a62"></a>

## wp_set_post_meta

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Set a specific meta value on any post/page/CPT
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L245-L254) · Schema: tools/list.

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
    "meta_key": {
      "title": "Meta Key",
      "type": "string"
    },
    "meta_value": {
      "title": "Meta Value",
      "type": "string"
    },
    "post_type": {
      "default": "post",
      "title": "Post Type",
      "type": "string"
    }
  },
  "required": [
    "post_id",
    "meta_key",
    "meta_value"
  ],
  "title": "wp_set_post_metaArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_bulk_set_post_meta-5695be86"></a>

## wp_bulk_set_post_meta

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Set multiple meta fields on a post at once
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L256-L264) · Schema: tools/list.

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
    "meta": {
      "additionalProperties": true,
      "title": "Meta",
      "type": "object"
    },
    "post_type": {
      "default": "post",
      "title": "Post Type",
      "type": "string"
    }
  },
  "required": [
    "post_id",
    "meta"
  ],
  "title": "wp_bulk_set_post_metaArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_user_meta-9766d878"></a>

## wp_get_user_meta

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get meta values for a WordPress user
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L266-L273) · Schema: tools/list.

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
    "meta_key": {
      "default": null,
      "title": "Meta Key",
      "type": "string"
    }
  },
  "required": [
    "user_id"
  ],
  "title": "wp_get_user_metaArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_set_user_meta-ff938dc2"></a>

## wp_set_user_meta

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Set meta value for a WordPress user
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L275-L282) · Schema: tools/list.

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
    "meta": {
      "additionalProperties": true,
      "title": "Meta",
      "type": "object"
    }
  },
  "required": [
    "user_id",
    "meta"
  ],
  "title": "wp_set_user_metaArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_term_meta-2ec24edf"></a>

## wp_get_term_meta

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get meta values for a taxonomy term
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L284-L292) · Schema: tools/list.

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
    "term_id": {
      "title": "Term Id",
      "type": "integer"
    },
    "meta_key": {
      "default": null,
      "title": "Meta Key",
      "type": "string"
    }
  },
  "required": [
    "taxonomy",
    "term_id"
  ],
  "title": "wp_get_term_metaArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_set_term_meta-c17e7619"></a>

## wp_set_term_meta

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Set meta value for a taxonomy term
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L294-L302) · Schema: tools/list.

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
    "term_id": {
      "title": "Term Id",
      "type": "integer"
    },
    "meta": {
      "additionalProperties": true,
      "title": "Meta",
      "type": "object"
    }
  },
  "required": [
    "taxonomy",
    "term_id",
    "meta"
  ],
  "title": "wp_set_term_metaArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_list_post_types-c208ec09"></a>

## wp_list_post_types

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] WordPress tool. List all registered post types (posts, pages, products, custom, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L304-L311) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "context": {
      "default": "edit",
      "title": "Context",
      "type": "string"
    }
  },
  "title": "wp_list_post_typesArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_post_type-37d042e2"></a>

## wp_get_post_type

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get details about a specific post type
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L313-L319) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "type": {
      "title": "Type",
      "type": "string"
    }
  },
  "required": [
    "type"
  ],
  "title": "wp_get_post_typeArguments",
  "type": "object"
}
```

</details>
