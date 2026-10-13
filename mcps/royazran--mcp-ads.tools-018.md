# RoyAzran/mcp-ads: supporting and other-product tools

[Provider inventory](royazran--mcp-ads.md) · [Global tool index](../TOOL_INDEX.md)

Tools 2551–2700 of 3131. Exact schemas from the same upstream snapshot.

<a id="tool-bbpress_forums_create-5b8c44e8"></a>

## bbpress_forums_create

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a new bbPress forum
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L389-L400) · Schema: tools/list.

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
    "parent": {
      "default": null,
      "title": "Parent",
      "type": "integer"
    },
    "type": {
      "default": "forum",
      "title": "Type",
      "type": "string"
    },
    "menu_order": {
      "default": 0,
      "title": "Menu Order",
      "type": "integer"
    }
  },
  "required": [
    "title"
  ],
  "title": "bbpress_forums_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-bbpress_topics_list-bb39cb0e"></a>

## bbpress_topics_list

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List bbPress topics (threads) in a forum
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L402-L416) · Schema: tools/list.

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
    "forum_id": {
      "default": null,
      "title": "Forum Id",
      "type": "integer"
    },
    "author": {
      "default": null,
      "title": "Author",
      "type": "integer"
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
    "sticky": {
      "default": null,
      "title": "Sticky",
      "type": "string"
    }
  },
  "title": "bbpress_topics_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-bbpress_topics_create-b40598af"></a>

## bbpress_topics_create

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a new bbPress topic (thread) in a forum
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L418-L430) · Schema: tools/list.

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
    "forum_id": {
      "title": "Forum Id",
      "type": "integer"
    },
    "author": {
      "default": null,
      "title": "Author",
      "type": "integer"
    },
    "status": {
      "default": "publish",
      "title": "Status",
      "type": "string"
    },
    "sticky": {
      "default": false,
      "title": "Sticky",
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
    "title",
    "content",
    "forum_id"
  ],
  "title": "bbpress_topics_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-bbpress_replies_create-020cafcc"></a>

## bbpress_replies_create

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a reply to a bbPress topic
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L432-L443) · Schema: tools/list.

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
    "topic_id": {
      "title": "Topic Id",
      "type": "integer"
    },
    "forum_id": {
      "default": null,
      "title": "Forum Id",
      "type": "integer"
    },
    "author": {
      "default": null,
      "title": "Author",
      "type": "integer"
    },
    "parent": {
      "default": null,
      "title": "Parent",
      "type": "integer"
    },
    "status": {
      "default": "publish",
      "title": "Status",
      "type": "string"
    }
  },
  "required": [
    "content",
    "topic_id"
  ],
  "title": "bbpress_replies_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-acf_get_fields-82b41884"></a>

## acf_get_fields

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] ACF tool. Get all ACF field values for a post, page, product, or user
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L445-L455) · Schema: tools/list.

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
    "taxonomy": {
      "default": null,
      "title": "Taxonomy",
      "type": "string"
    }
  },
  "required": [
    "id"
  ],
  "title": "acf_get_fieldsArguments",
  "type": "object"
}
```

</details>

<a id="tool-acf_update_field-10d2fa1e"></a>

## acf_update_field

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] ACF tool. Update a single ACF field value on a post/page/product
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L457-L466) · Schema: tools/list.

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
    "field_name": {
      "title": "Field Name",
      "type": "string"
    },
    "value": {
      "title": "Value",
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
    "field_name",
    "value"
  ],
  "title": "acf_update_fieldArguments",
  "type": "object"
}
```

</details>

<a id="tool-acf_bulk_update_fields-e35f71e1"></a>

## acf_bulk_update_fields

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] ACF tool. Update multiple ACF fields on a post at once
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L468-L476) · Schema: tools/list.

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
    "fields": {
      "additionalProperties": true,
      "title": "Fields",
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
    "fields"
  ],
  "title": "acf_bulk_update_fieldsArguments",
  "type": "object"
}
```

</details>

<a id="tool-acf_get_options_page-e25b4ed8"></a>

## acf_get_options_page

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] ACF tool. Get all ACF options page field values (global site options)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L478-L485) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_slug": {
      "default": "options",
      "title": "Page Slug",
      "type": "string"
    }
  },
  "title": "acf_get_options_pageArguments",
  "type": "object"
}
```

</details>

<a id="tool-acf_update_options_field-456b98c8"></a>

## acf_update_options_field

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] ACF tool. Update an ACF options page field value
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L487-L494) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "field_name": {
      "title": "Field Name",
      "type": "string"
    },
    "value": {
      "title": "Value",
      "type": "string"
    }
  },
  "required": [
    "field_name",
    "value"
  ],
  "title": "acf_update_options_fieldArguments",
  "type": "object"
}
```

</details>

<a id="tool-acf_get_field_groups-e2147d31"></a>

## acf_get_field_groups

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] ACF tool. List all ACF field groups
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L496-L505) · Schema: tools/list.

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
    "search": {
      "default": null,
      "title": "Search",
      "type": "string"
    }
  },
  "title": "acf_get_field_groupsArguments",
  "type": "object"
}
```

</details>

<a id="tool-acf_get_field_group-ceb76af4"></a>

## acf_get_field_group

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] ACF tool. Get a specific ACF field group with all its field definitions
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L507-L513) · Schema: tools/list.

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
  "title": "acf_get_field_groupArguments",
  "type": "object"
}
```

</details>

<a id="tool-acf_get_post_meta-09f4c51c"></a>

## acf_get_post_meta

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] ACF tool. Get a specific meta value from any post/page/CPT (ACF-aware)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L515-L524) · Schema: tools/list.

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
    "meta_key": {
      "title": "Meta Key",
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
    "meta_key"
  ],
  "title": "acf_get_post_metaArguments",
  "type": "object"
}
```

</details>

<a id="tool-crm_detect_plugin-0112caf6"></a>

## crm_detect_plugin

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Detect which CRM/email marketing plugin is active: FluentCRM, MailPoet, Groundhogg, MC4WP, or none
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L526-L530) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "crm_detect_pluginArguments",
  "type": "object"
}
```

</details>

<a id="tool-fluentcrm_contacts_list-f0fee363"></a>

## fluentcrm_contacts_list

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List FluentCRM contacts/subscribers with optional filters
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L532-L543) · Schema: tools/list.

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
      "default": null,
      "title": "Status",
      "type": "string"
    },
    "tags": {
      "default": null,
      "items": {},
      "title": "Tags",
      "type": "array"
    },
    "lists": {
      "default": null,
      "items": {},
      "title": "Lists",
      "type": "array"
    }
  },
  "title": "fluentcrm_contacts_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-fluentcrm_contact_create-4c2c1587"></a>

## fluentcrm_contact_create

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a new contact in FluentCRM
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L545-L563) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

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
    "status": {
      "default": "subscribed",
      "title": "Status",
      "type": "string"
    },
    "lists": {
      "default": null,
      "items": {},
      "title": "Lists",
      "type": "array"
    },
    "tags": {
      "default": null,
      "items": {},
      "title": "Tags",
      "type": "array"
    },
    "custom_fields": {
      "additionalProperties": true,
      "default": null,
      "title": "Custom Fields",
      "type": "object"
    },
    "company": {
      "default": null,
      "title": "Company",
      "type": "string"
    },
    "phone": {
      "default": null,
      "title": "Phone",
      "type": "string"
    },
    "address_line_1": {
      "default": null,
      "title": "Address Line 1",
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
    "country": {
      "default": null,
      "title": "Country",
      "type": "string"
    }
  },
  "required": [
    "email"
  ],
  "title": "fluentcrm_contact_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-fluentcrm_contact_update-20a0313e"></a>

## fluentcrm_contact_update

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Update an existing FluentCRM contact
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L565-L578) · Schema: tools/list.

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
    "status": {
      "default": null,
      "title": "Status",
      "type": "string"
    },
    "custom_fields": {
      "additionalProperties": true,
      "default": null,
      "title": "Custom Fields",
      "type": "object"
    },
    "company": {
      "default": null,
      "title": "Company",
      "type": "string"
    },
    "phone": {
      "default": null,
      "title": "Phone",
      "type": "string"
    }
  },
  "required": [
    "id"
  ],
  "title": "fluentcrm_contact_updateArguments",
  "type": "object"
}
```

</details>

<a id="tool-fluentcrm_contact_delete-9cccaa5b"></a>

## fluentcrm_contact_delete

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] Tool tool. Delete a contact from FluentCRM
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L580-L586) · Schema: tools/list.

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
  "title": "fluentcrm_contact_deleteArguments",
  "type": "object"
}
```

</details>

<a id="tool-fluentcrm_contact_add_tag-dee78e09"></a>

## fluentcrm_contact_add_tag

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Add one or more tags to a FluentCRM contact
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L588-L595) · Schema: tools/list.

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
    "tags": {
      "items": {},
      "title": "Tags",
      "type": "array"
    }
  },
  "required": [
    "id",
    "tags"
  ],
  "title": "fluentcrm_contact_add_tagArguments",
  "type": "object"
}
```

</details>

<a id="tool-fluentcrm_contact_remove_tag-1cac4630"></a>

## fluentcrm_contact_remove_tag

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] Tool tool. Remove one or more tags from a FluentCRM contact
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L597-L604) · Schema: tools/list.

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
    "tags": {
      "items": {},
      "title": "Tags",
      "type": "array"
    }
  },
  "required": [
    "id",
    "tags"
  ],
  "title": "fluentcrm_contact_remove_tagArguments",
  "type": "object"
}
```

</details>

<a id="tool-fluentcrm_lists_list-baa728c3"></a>

## fluentcrm_lists_list

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List all FluentCRM contact lists
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L606-L613) · Schema: tools/list.

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
  "title": "fluentcrm_lists_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-fluentcrm_lists_create-f5913e50"></a>

## fluentcrm_lists_create

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a new contact list in FluentCRM
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L615-L623) · Schema: tools/list.

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
    "title"
  ],
  "title": "fluentcrm_lists_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-fluentcrm_campaigns_list-7c366c5f"></a>

## fluentcrm_campaigns_list

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List all FluentCRM email campaigns
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L625-L633) · Schema: tools/list.

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
  "title": "fluentcrm_campaigns_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-fluentcrm_campaigns_create-e15a67ec"></a>

## fluentcrm_campaigns_create

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a new email campaign in FluentCRM
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L635-L648) · Schema: tools/list.

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
    "subject": {
      "title": "Subject",
      "type": "string"
    },
    "body": {
      "default": null,
      "title": "Body",
      "type": "string"
    },
    "from_name": {
      "default": null,
      "title": "From Name",
      "type": "string"
    },
    "from_email": {
      "default": null,
      "title": "From Email",
      "type": "string"
    },
    "lists": {
      "default": null,
      "items": {},
      "title": "Lists",
      "type": "array"
    },
    "tags": {
      "default": null,
      "items": {},
      "title": "Tags",
      "type": "array"
    },
    "template_id": {
      "default": null,
      "title": "Template Id",
      "type": "integer"
    }
  },
  "required": [
    "title",
    "subject"
  ],
  "title": "fluentcrm_campaigns_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-fluentcrm_campaigns_send-0d43d224"></a>

## fluentcrm_campaigns_send

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Send or schedule a FluentCRM campaign
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L650-L657) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "campaign_id": {
      "title": "Campaign Id",
      "type": "integer"
    },
    "scheduled_at": {
      "default": null,
      "title": "Scheduled At",
      "type": "string"
    }
  },
  "required": [
    "campaign_id"
  ],
  "title": "fluentcrm_campaigns_sendArguments",
  "type": "object"
}
```

</details>

<a id="tool-mailpoet_subscribers_list-c65eacd0"></a>

## mailpoet_subscribers_list

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List MailPoet subscribers with optional filters
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L659-L668) · Schema: tools/list.

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
    "offset": {
      "default": 0,
      "title": "Offset",
      "type": "integer"
    },
    "status": {
      "default": null,
      "title": "Status",
      "type": "string"
    },
    "segment_id": {
      "default": null,
      "title": "Segment Id",
      "type": "integer"
    }
  },
  "title": "mailpoet_subscribers_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-mailpoet_subscriber_add-5f84c027"></a>

## mailpoet_subscriber_add

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Add a new subscriber to MailPoet
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L670-L680) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

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
    "status": {
      "default": "subscribed",
      "title": "Status",
      "type": "string"
    },
    "segments": {
      "default": null,
      "items": {},
      "title": "Segments",
      "type": "array"
    }
  },
  "required": [
    "email"
  ],
  "title": "mailpoet_subscriber_addArguments",
  "type": "object"
}
```

</details>

<a id="tool-mailpoet_newsletters_list-766c98b2"></a>

## mailpoet_newsletters_list

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List MailPoet newsletters/emails
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L682-L691) · Schema: tools/list.

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
    "offset": {
      "default": 0,
      "title": "Offset",
      "type": "integer"
    },
    "type": {
      "default": null,
      "title": "Type",
      "type": "string"
    },
    "status": {
      "default": null,
      "title": "Status",
      "type": "string"
    }
  },
  "title": "mailpoet_newsletters_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-mailpoet_newsletters_create-9361a116"></a>

## mailpoet_newsletters_create

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a new newsletter in MailPoet
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L693-L707) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "subject": {
      "title": "Subject",
      "type": "string"
    },
    "type": {
      "default": "standard",
      "title": "Type",
      "type": "string"
    },
    "body": {
      "default": null,
      "title": "Body",
      "type": "string"
    },
    "preheader": {
      "default": null,
      "title": "Preheader",
      "type": "string"
    },
    "segments": {
      "default": null,
      "items": {},
      "title": "Segments",
      "type": "array"
    },
    "sender_name": {
      "default": null,
      "title": "Sender Name",
      "type": "string"
    },
    "sender_email": {
      "default": null,
      "title": "Sender Email",
      "type": "string"
    },
    "reply_to_name": {
      "default": null,
      "title": "Reply To Name",
      "type": "string"
    },
    "reply_to_email": {
      "default": null,
      "title": "Reply To Email",
      "type": "string"
    }
  },
  "required": [
    "subject"
  ],
  "title": "mailpoet_newsletters_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-mailpoet_segments_list-11dce197"></a>

## mailpoet_segments_list

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List all MailPoet segments/lists
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L709-L716) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "limit": {
      "default": 50,
      "title": "Limit",
      "type": "integer"
    },
    "offset": {
      "default": 0,
      "title": "Offset",
      "type": "integer"
    }
  },
  "title": "mailpoet_segments_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-groundhogg_contacts_list-aeb6b17f"></a>

## groundhogg_contacts_list

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List Groundhogg contacts with optional filters
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L718-L728) · Schema: tools/list.

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
    "offset": {
      "default": 0,
      "title": "Offset",
      "type": "integer"
    },
    "search": {
      "default": null,
      "title": "Search",
      "type": "string"
    },
    "optin_status": {
      "default": null,
      "title": "Optin Status",
      "type": "integer"
    },
    "tags_include": {
      "default": null,
      "items": {},
      "title": "Tags Include",
      "type": "array"
    }
  },
  "title": "groundhogg_contacts_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-groundhogg_contact_create-f9d1202b"></a>

## groundhogg_contact_create

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a new contact in Groundhogg
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L730-L741) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

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
    "optin_status": {
      "default": 2,
      "title": "Optin Status",
      "type": "integer"
    },
    "tags": {
      "default": null,
      "items": {},
      "title": "Tags",
      "type": "array"
    },
    "meta": {
      "additionalProperties": true,
      "default": null,
      "title": "Meta",
      "type": "object"
    }
  },
  "required": [
    "email"
  ],
  "title": "groundhogg_contact_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-groundhogg_email_send-7bd900cb"></a>

## groundhogg_email_send

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Send an email via Groundhogg to a contact or list of contacts
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L743-L752) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "contact_id": {
      "title": "Contact Id",
      "type": "integer"
    },
    "email_id": {
      "title": "Email Id",
      "type": "integer"
    },
    "subject": {
      "default": null,
      "title": "Subject",
      "type": "string"
    },
    "content": {
      "default": null,
      "title": "Content",
      "type": "string"
    }
  },
  "required": [
    "contact_id",
    "email_id"
  ],
  "title": "groundhogg_email_sendArguments",
  "type": "object"
}
```

</details>

<a id="tool-groundhogg_funnels_list-a930c5b4"></a>

## groundhogg_funnels_list

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List all Groundhogg funnels (automation workflows)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L754-L762) · Schema: tools/list.

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
    "offset": {
      "default": 0,
      "title": "Offset",
      "type": "integer"
    },
    "status": {
      "default": null,
      "title": "Status",
      "type": "string"
    }
  },
  "title": "groundhogg_funnels_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-crm_mailchimp_subscribe-0b61ea2c"></a>

## crm_mailchimp_subscribe

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Subscribe a contact to Mailchimp via MC4WP plugin or direct API integration
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L764-L776) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

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
    "list_id": {
      "default": null,
      "title": "List Id",
      "type": "string"
    },
    "tags": {
      "default": null,
      "items": {},
      "title": "Tags",
      "type": "array"
    },
    "merge_fields": {
      "additionalProperties": true,
      "default": null,
      "title": "Merge Fields",
      "type": "object"
    },
    "status": {
      "default": "pending",
      "title": "Status",
      "type": "string"
    }
  },
  "required": [
    "email"
  ],
  "title": "crm_mailchimp_subscribeArguments",
  "type": "object"
}
```

</details>

<a id="tool-crm_brevo_subscribe-6ac664e6"></a>

## crm_brevo_subscribe

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Subscribe a contact to Brevo (formerly Sendinblue) via plugin integration
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L778-L788) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

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
    "list_ids": {
      "default": null,
      "items": {},
      "title": "List Ids",
      "type": "array"
    },
    "attributes": {
      "additionalProperties": true,
      "default": null,
      "title": "Attributes",
      "type": "object"
    }
  },
  "required": [
    "email"
  ],
  "title": "crm_brevo_subscribeArguments",
  "type": "object"
}
```

</details>

<a id="tool-crm_convertkit_subscribe-30afff19"></a>

## crm_convertkit_subscribe

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Subscribe a contact to ConvertKit via plugin or API integration
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L790-L800) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

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
    "form_id": {
      "default": null,
      "title": "Form Id",
      "type": "integer"
    },
    "tag_ids": {
      "default": null,
      "items": {},
      "title": "Tag Ids",
      "type": "array"
    },
    "fields": {
      "additionalProperties": true,
      "default": null,
      "title": "Fields",
      "type": "object"
    }
  },
  "required": [
    "email"
  ],
  "title": "crm_convertkit_subscribeArguments",
  "type": "object"
}
```

</details>

<a id="tool-tec_events_list-beb99beb"></a>

## tec_events_list

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List events from The Events Calendar plugin
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L802-L817) · Schema: tools/list.

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
    "categories": {
      "default": null,
      "title": "Categories",
      "type": "string"
    },
    "venue": {
      "default": null,
      "title": "Venue",
      "type": "integer"
    },
    "organizer": {
      "default": null,
      "title": "Organizer",
      "type": "integer"
    },
    "featured": {
      "default": null,
      "title": "Featured",
      "type": "boolean"
    }
  },
  "title": "tec_events_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-tec_events_create-0de2f4e5"></a>

## tec_events_create

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a new event in The Events Calendar
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L819-L841) · Schema: tools/list.

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
    "start_date": {
      "title": "Start Date",
      "type": "string"
    },
    "end_date": {
      "title": "End Date",
      "type": "string"
    },
    "description": {
      "default": null,
      "title": "Description",
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
    "all_day": {
      "default": false,
      "title": "All Day",
      "type": "boolean"
    },
    "timezone": {
      "default": null,
      "title": "Timezone",
      "type": "string"
    },
    "venue": {
      "default": null,
      "title": "Venue",
      "type": "integer"
    },
    "organizer": {
      "default": null,
      "items": {},
      "title": "Organizer",
      "type": "array"
    },
    "cost": {
      "default": null,
      "title": "Cost",
      "type": "string"
    },
    "currency_symbol": {
      "default": "$",
      "title": "Currency Symbol",
      "type": "string"
    },
    "website": {
      "default": null,
      "title": "Website",
      "type": "string"
    },
    "featured": {
      "default": false,
      "title": "Featured",
      "type": "boolean"
    },
    "image": {
      "default": null,
      "title": "Image",
      "type": "integer"
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
    "title",
    "start_date",
    "end_date"
  ],
  "title": "tec_events_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-tec_events_update-14d5b0b3"></a>

## tec_events_update

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Update an existing event in The Events Calendar
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L843-L865) · Schema: tools/list.

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
    "description": {
      "default": null,
      "title": "Description",
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
    "all_day": {
      "default": null,
      "title": "All Day",
      "type": "boolean"
    },
    "timezone": {
      "default": null,
      "title": "Timezone",
      "type": "string"
    },
    "venue": {
      "default": null,
      "title": "Venue",
      "type": "integer"
    },
    "organizer": {
      "default": null,
      "items": {},
      "title": "Organizer",
      "type": "array"
    },
    "cost": {
      "default": null,
      "title": "Cost",
      "type": "string"
    },
    "website": {
      "default": null,
      "title": "Website",
      "type": "string"
    },
    "featured": {
      "default": null,
      "title": "Featured",
      "type": "boolean"
    },
    "image": {
      "default": null,
      "title": "Image",
      "type": "integer"
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
    "id"
  ],
  "title": "tec_events_updateArguments",
  "type": "object"
}
```

</details>

<a id="tool-tec_events_delete-8a99d135"></a>

## tec_events_delete

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] Tool tool. Delete an event from The Events Calendar
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L867-L875) · Schema: tools/list.

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
      "default": false,
      "title": "Force",
      "type": "boolean"
    }
  },
  "required": [
    "id"
  ],
  "title": "tec_events_deleteArguments",
  "type": "object"
}
```

</details>

<a id="tool-tec_venues_list-e93ace6e"></a>

## tec_venues_list

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List venues from The Events Calendar
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L877-L886) · Schema: tools/list.

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
    }
  },
  "title": "tec_venues_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-tec_venues_create-9763bbeb"></a>

## tec_venues_create

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a new venue for The Events Calendar
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L888-L906) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "venue": {
      "title": "Venue",
      "type": "string"
    },
    "description": {
      "default": null,
      "title": "Description",
      "type": "string"
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
    "province": {
      "default": null,
      "title": "Province",
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
    "phone": {
      "default": null,
      "title": "Phone",
      "type": "string"
    },
    "website": {
      "default": null,
      "title": "Website",
      "type": "string"
    },
    "show_map": {
      "default": true,
      "title": "Show Map",
      "type": "boolean"
    },
    "show_map_link": {
      "default": true,
      "title": "Show Map Link",
      "type": "boolean"
    },
    "status": {
      "default": "publish",
      "title": "Status",
      "type": "string"
    }
  },
  "required": [
    "venue"
  ],
  "title": "tec_venues_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-tec_organizers_list-cc44f6f4"></a>

## tec_organizers_list

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List organizers from The Events Calendar
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L908-L917) · Schema: tools/list.

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
    }
  },
  "title": "tec_organizers_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-tec_organizers_create-9eb59f60"></a>

## tec_organizers_create

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a new organizer for The Events Calendar
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L919-L930) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "organizer": {
      "title": "Organizer",
      "type": "string"
    },
    "description": {
      "default": null,
      "title": "Description",
      "type": "string"
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
    "status": {
      "default": "publish",
      "title": "Status",
      "type": "string"
    }
  },
  "required": [
    "organizer"
  ],
  "title": "tec_organizers_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-tec_tickets_list-b30af1e6"></a>

## tec_tickets_list

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List tickets for an event (requires Event Tickets add-on)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L932-L941) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "event_id": {
      "title": "Event Id",
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
    "include_rsvp": {
      "default": true,
      "title": "Include Rsvp",
      "type": "boolean"
    }
  },
  "required": [
    "event_id"
  ],
  "title": "tec_tickets_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-tec_tickets_create-af772d37"></a>

## tec_tickets_create

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a ticket type for an event (requires Event Tickets add-on)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L943-L959) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "event_id": {
      "title": "Event Id",
      "type": "integer"
    },
    "title": {
      "title": "Title",
      "type": "string"
    },
    "description": {
      "default": null,
      "title": "Description",
      "type": "string"
    },
    "price": {
      "default": null,
      "title": "Price",
      "type": "string"
    },
    "type": {
      "default": "default",
      "title": "Type",
      "type": "string"
    },
    "capacity": {
      "default": null,
      "title": "Capacity",
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
    "sku": {
      "default": null,
      "title": "Sku",
      "type": "string"
    },
    "min_per_order": {
      "default": 1,
      "title": "Min Per Order",
      "type": "integer"
    },
    "max_per_order": {
      "default": null,
      "title": "Max Per Order",
      "type": "integer"
    }
  },
  "required": [
    "event_id",
    "title"
  ],
  "title": "tec_tickets_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-tec_attendees_list-05b7aae1"></a>

## tec_attendees_list

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List attendees for an event (requires Event Tickets add-on)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L961-L970) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "event_id": {
      "title": "Event Id",
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
    },
    "search": {
      "default": null,
      "title": "Search",
      "type": "string"
    }
  },
  "required": [
    "event_id"
  ],
  "title": "tec_attendees_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-amelia_services_list-10840e78"></a>

## amelia_services_list

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List Amelia booking services
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L972-L982) · Schema: tools/list.

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
    "category_id": {
      "default": null,
      "title": "Category Id",
      "type": "integer"
    },
    "status": {
      "default": null,
      "title": "Status",
      "type": "string"
    }
  },
  "title": "amelia_services_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-amelia_services_create-53110e02"></a>

## amelia_services_create

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a new Amelia booking service
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L984-L1002) · Schema: tools/list.

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
    "category_id": {
      "title": "Category Id",
      "type": "integer"
    },
    "duration": {
      "title": "Duration",
      "type": "integer"
    },
    "price": {
      "title": "Price",
      "type": "integer"
    },
    "description": {
      "default": null,
      "title": "Description",
      "type": "string"
    },
    "color": {
      "default": null,
      "title": "Color",
      "type": "string"
    },
    "min_capacity": {
      "default": 1,
      "title": "Min Capacity",
      "type": "integer"
    },
    "max_capacity": {
      "default": 1,
      "title": "Max Capacity",
      "type": "integer"
    },
    "time_before": {
      "default": null,
      "title": "Time Before",
      "type": "integer"
    },
    "time_after": {
      "default": null,
      "title": "Time After",
      "type": "integer"
    },
    "status": {
      "default": "visible",
      "title": "Status",
      "type": "string"
    },
    "bring_anyone": {
      "default": false,
      "title": "Bring Anyone",
      "type": "boolean"
    },
    "recurring": {
      "default": false,
      "title": "Recurring",
      "type": "boolean"
    }
  },
  "required": [
    "name",
    "category_id",
    "duration",
    "price"
  ],
  "title": "amelia_services_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-amelia_employees_list-0473cc49"></a>

## amelia_employees_list

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List Amelia employees (service providers)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1004-L1014) · Schema: tools/list.

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
    "service_id": {
      "default": null,
      "title": "Service Id",
      "type": "integer"
    },
    "status": {
      "default": null,
      "title": "Status",
      "type": "string"
    }
  },
  "title": "amelia_employees_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-amelia_employees_create-4ecaa254"></a>

## amelia_employees_create

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a new Amelia employee (service provider)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1016-L1030) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "first_name": {
      "title": "First Name",
      "type": "string"
    },
    "last_name": {
      "title": "Last Name",
      "type": "string"
    },
    "email": {
      "title": "Email",
      "type": "string"
    },
    "phone": {
      "default": null,
      "title": "Phone",
      "type": "string"
    },
    "description": {
      "default": null,
      "title": "Description",
      "type": "string"
    },
    "service_list": {
      "default": null,
      "items": {},
      "title": "Service List",
      "type": "array"
    },
    "location_id": {
      "default": null,
      "title": "Location Id",
      "type": "integer"
    },
    "status": {
      "default": "visible",
      "title": "Status",
      "type": "string"
    },
    "wp_user_id": {
      "default": null,
      "title": "Wp User Id",
      "type": "integer"
    }
  },
  "required": [
    "first_name",
    "last_name",
    "email"
  ],
  "title": "amelia_employees_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-amelia_appointments_list-c4785020"></a>

## amelia_appointments_list

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List Amelia appointments
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1032-L1045) · Schema: tools/list.

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
    "service_id": {
      "default": null,
      "title": "Service Id",
      "type": "integer"
    },
    "provider_id": {
      "default": null,
      "title": "Provider Id",
      "type": "integer"
    },
    "customer_id": {
      "default": null,
      "title": "Customer Id",
      "type": "integer"
    },
    "status": {
      "default": null,
      "title": "Status",
      "type": "string"
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
  "title": "amelia_appointments_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-amelia_appointments_create-d082b144"></a>

## amelia_appointments_create

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a new Amelia appointment
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1047-L1062) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "service_id": {
      "title": "Service Id",
      "type": "integer"
    },
    "provider_id": {
      "title": "Provider Id",
      "type": "integer"
    },
    "customer_id": {
      "title": "Customer Id",
      "type": "integer"
    },
    "booking_start": {
      "title": "Booking Start",
      "type": "string"
    },
    "booking_end": {
      "default": null,
      "title": "Booking End",
      "type": "string"
    },
    "status": {
      "default": "approved",
      "title": "Status",
      "type": "string"
    },
    "notify_participants": {
      "default": true,
      "title": "Notify Participants",
      "type": "boolean"
    },
    "internal_notes": {
      "default": null,
      "title": "Internal Notes",
      "type": "string"
    },
    "location_id": {
      "default": null,
      "title": "Location Id",
      "type": "integer"
    },
    "persons": {
      "default": 1,
      "title": "Persons",
      "type": "integer"
    }
  },
  "required": [
    "service_id",
    "provider_id",
    "customer_id",
    "booking_start"
  ],
  "title": "amelia_appointments_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-amelia_customers_list-0114ac37"></a>

## amelia_customers_list

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List Amelia customers
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1064-L1072) · Schema: tools/list.

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
  "title": "amelia_customers_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-events_detect_plugin-77589931"></a>

## events_detect_plugin

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Detect which events/booking plugin is installed (The Events Calendar, Amelia, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1074-L1078) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "events_detect_pluginArguments",
  "type": "object"
}
```

</details>

<a id="tool-events_list_universal-adf38937"></a>

## events_list_universal

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List events from whichever events plugin is active — auto-detects The Events Calendar or Amelia
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1080-L1090) · Schema: tools/list.

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
  "title": "events_list_universalArguments",
  "type": "object"
}
```

</details>

<a id="tool-cf7_list_forms-03a80b81"></a>

## cf7_list_forms

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Tool tool. List all Contact Form 7 forms
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1092-L1101) · Schema: tools/list.

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
    "search": {
      "default": null,
      "title": "Search",
      "type": "string"
    }
  },
  "title": "cf7_list_formsArguments",
  "type": "object"
}
```

</details>

<a id="tool-cf7_get_form-fe89c1cf"></a>

## cf7_get_form

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Get a Contact Form 7 form by ID including its fields and configuration
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1103-L1109) · Schema: tools/list.

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
  "title": "cf7_get_formArguments",
  "type": "object"
}
```

</details>

<a id="tool-cf7_create_form-e9fab8c3"></a>

## cf7_create_form

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a new Contact Form 7 form
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1111-L1127) · Schema: tools/list.

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
    "form_content": {
      "default": null,
      "title": "Form Content",
      "type": "string"
    },
    "mail_subject": {
      "default": null,
      "title": "Mail Subject",
      "type": "string"
    },
    "mail_to": {
      "default": null,
      "title": "Mail To",
      "type": "string"
    },
    "mail_from": {
      "default": null,
      "title": "Mail From",
      "type": "string"
    },
    "mail_body": {
      "default": null,
      "title": "Mail Body",
      "type": "string"
    },
    "mail_additional_headers": {
      "default": null,
      "title": "Mail Additional Headers",
      "type": "string"
    },
    "mail_2_active": {
      "default": null,
      "title": "Mail 2 Active",
      "type": "boolean"
    },
    "mail_2_to": {
      "default": null,
      "title": "Mail 2 To",
      "type": "string"
    },
    "mail_2_subject": {
      "default": null,
      "title": "Mail 2 Subject",
      "type": "string"
    },
    "mail_2_body": {
      "default": null,
      "title": "Mail 2 Body",
      "type": "string"
    }
  },
  "required": [
    "title"
  ],
  "title": "cf7_create_formArguments",
  "type": "object"
}
```

</details>

<a id="tool-cf7_update_form-d0145f78"></a>

## cf7_update_form

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Update a Contact Form 7 form
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1129-L1140) · Schema: tools/list.

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
    "form_content": {
      "default": null,
      "title": "Form Content",
      "type": "string"
    },
    "mail_subject": {
      "default": null,
      "title": "Mail Subject",
      "type": "string"
    },
    "mail_to": {
      "default": null,
      "title": "Mail To",
      "type": "string"
    },
    "mail_body": {
      "default": null,
      "title": "Mail Body",
      "type": "string"
    }
  },
  "required": [
    "id"
  ],
  "title": "cf7_update_formArguments",
  "type": "object"
}
```

</details>

<a id="tool-cf7_delete_form-31d02ad5"></a>

## cf7_delete_form

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] Tool tool. Delete a Contact Form 7 form
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1142-L1148) · Schema: tools/list.

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
  "title": "cf7_delete_formArguments",
  "type": "object"
}
```

</details>

<a id="tool-cf7_get_shortcode-49e34466"></a>

## cf7_get_shortcode

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Get the shortcode to embed a CF7 form in a page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1150-L1156) · Schema: tools/list.

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
  "title": "cf7_get_shortcodeArguments",
  "type": "object"
}
```

</details>

<a id="tool-gf_list_forms-618a6c3c"></a>

## gf_list_forms

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Tool tool. List all Gravity Forms
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1158-L1167) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "active": {
      "default": null,
      "title": "Active",
      "type": "boolean"
    },
    "per_page": {
      "default": 20,
      "title": "Per Page",
      "type": "integer"
    }
  },
  "title": "gf_list_formsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gf_get_form-4dee8745"></a>

## gf_get_form

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Get a Gravity Form by ID
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1169-L1175) · Schema: tools/list.

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
  "title": "gf_get_formArguments",
  "type": "object"
}
```

</details>

<a id="tool-gf_get_entries-671bf0bb"></a>

## gf_get_entries

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Get form entries/submissions from Gravity Forms
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1177-L1189) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "form_id": {
      "title": "Form Id",
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
      "default": "active",
      "title": "Status",
      "type": "string"
    },
    "search": {
      "default": null,
      "title": "Search",
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
    "form_id"
  ],
  "title": "gf_get_entriesArguments",
  "type": "object"
}
```

</details>

<a id="tool-gf_get_entry-f016bd85"></a>

## gf_get_entry

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Get a single Gravity Forms entry
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1191-L1197) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "entry_id": {
      "title": "Entry Id",
      "type": "integer"
    }
  },
  "required": [
    "entry_id"
  ],
  "title": "gf_get_entryArguments",
  "type": "object"
}
```

</details>

<a id="tool-gf_update_entry_status-a163ee85"></a>

## gf_update_entry_status

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Update the status of a Gravity Forms entry
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1199-L1206) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "entry_id": {
      "title": "Entry Id",
      "type": "integer"
    },
    "status": {
      "title": "Status",
      "type": "string"
    }
  },
  "required": [
    "entry_id",
    "status"
  ],
  "title": "gf_update_entry_statusArguments",
  "type": "object"
}
```

</details>

<a id="tool-gf_delete_entry-6a5f31c0"></a>

## gf_delete_entry

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] Tool tool. Delete a Gravity Forms entry
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1208-L1214) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "entry_id": {
      "title": "Entry Id",
      "type": "integer"
    }
  },
  "required": [
    "entry_id"
  ],
  "title": "gf_delete_entryArguments",
  "type": "object"
}
```

</details>

<a id="tool-wpforms_list_forms-cfab4dd4"></a>

## wpforms_list_forms

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Tool tool. List all WPForms
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1216-L1225) · Schema: tools/list.

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
    "search": {
      "default": null,
      "title": "Search",
      "type": "string"
    }
  },
  "title": "wpforms_list_formsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wpforms_get_entries-5a8b246d"></a>

## wpforms_get_entries

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Get WPForms entries
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1227-L1236) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "form_id": {
      "title": "Form Id",
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
      "default": "read",
      "title": "Status",
      "type": "string"
    }
  },
  "required": [
    "form_id"
  ],
  "title": "wpforms_get_entriesArguments",
  "type": "object"
}
```

</details>

<a id="tool-nf_list_forms-b50993da"></a>

## nf_list_forms

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Tool tool. List all Ninja Forms
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1238-L1245) · Schema: tools/list.

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
    }
  },
  "title": "nf_list_formsArguments",
  "type": "object"
}
```

</details>

<a id="tool-nf_get_form-d467c1f2"></a>

## nf_get_form

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Get a Ninja Form by ID
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1247-L1253) · Schema: tools/list.

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
  "title": "nf_get_formArguments",
  "type": "object"
}
```

</details>

<a id="tool-nf_get_submissions-a6591212"></a>

## nf_get_submissions

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Get Ninja Forms submissions
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1255-L1263) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "form_id": {
      "title": "Form Id",
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
  "required": [
    "form_id"
  ],
  "title": "nf_get_submissionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-ld_courses_list-f0feefbb"></a>

## ld_courses_list

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List LearnDash courses with optional filters
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1265-L1276) · Schema: tools/list.

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
    }
  },
  "title": "ld_courses_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-ld_courses_create-96230fff"></a>

## ld_courses_create

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a new LearnDash course
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1278-L1295) · Schema: tools/list.

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
    "price_type": {
      "default": "open",
      "title": "Price Type",
      "type": "string"
    },
    "price": {
      "default": null,
      "title": "Price",
      "type": "string"
    },
    "materials": {
      "default": null,
      "title": "Materials",
      "type": "string"
    },
    "prerequisite_enabled": {
      "default": false,
      "title": "Prerequisite Enabled",
      "type": "boolean"
    },
    "prerequisite": {
      "default": null,
      "items": {},
      "title": "Prerequisite",
      "type": "array"
    },
    "points_enabled": {
      "default": false,
      "title": "Points Enabled",
      "type": "boolean"
    },
    "points_access": {
      "default": null,
      "title": "Points Access",
      "type": "integer"
    }
  },
  "required": [
    "title"
  ],
  "title": "ld_courses_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-ld_courses_update-3965a87b"></a>

## ld_courses_update

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Update an existing LearnDash course
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1297-L1311) · Schema: tools/list.

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
    "featured_media": {
      "default": null,
      "title": "Featured Media",
      "type": "integer"
    },
    "price_type": {
      "default": null,
      "title": "Price Type",
      "type": "string"
    },
    "price": {
      "default": null,
      "title": "Price",
      "type": "string"
    },
    "materials": {
      "default": null,
      "title": "Materials",
      "type": "string"
    }
  },
  "required": [
    "id"
  ],
  "title": "ld_courses_updateArguments",
  "type": "object"
}
```

</details>

<a id="tool-ld_courses_delete-13716a0c"></a>

## ld_courses_delete

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] Tool tool. Delete a LearnDash course
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1313-L1321) · Schema: tools/list.

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
      "default": false,
      "title": "Force",
      "type": "boolean"
    }
  },
  "required": [
    "id"
  ],
  "title": "ld_courses_deleteArguments",
  "type": "object"
}
```

</details>

<a id="tool-ld_lessons_list-47ecf7c1"></a>

## ld_lessons_list

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List LearnDash lessons, optionally filtered by course
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1323-L1334) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "course": {
      "default": null,
      "title": "Course",
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
    "search": {
      "default": null,
      "title": "Search",
      "type": "string"
    },
    "orderby": {
      "default": "menu_order",
      "title": "Orderby",
      "type": "string"
    },
    "order": {
      "default": "asc",
      "title": "Order",
      "type": "string"
    }
  },
  "title": "ld_lessons_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-ld_lessons_create-39e9d8f0"></a>

## ld_lessons_create

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a new LearnDash lesson
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1336-L1352) · Schema: tools/list.

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
    "course": {
      "title": "Course",
      "type": "integer"
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
    "featured_media": {
      "default": null,
      "title": "Featured Media",
      "type": "integer"
    },
    "visible_after": {
      "default": null,
      "title": "Visible After",
      "type": "integer"
    },
    "visible_after_specific_date": {
      "default": null,
      "title": "Visible After Specific Date",
      "type": "string"
    },
    "forced_lesson_time": {
      "default": null,
      "title": "Forced Lesson Time",
      "type": "string"
    },
    "assignment_upload_enabled": {
      "default": false,
      "title": "Assignment Upload Enabled",
      "type": "boolean"
    },
    "video_enabled": {
      "default": false,
      "title": "Video Enabled",
      "type": "boolean"
    },
    "video_url": {
      "default": null,
      "title": "Video Url",
      "type": "string"
    }
  },
  "required": [
    "title",
    "course"
  ],
  "title": "ld_lessons_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-ld_lessons_update-8a5e0eaf"></a>

## ld_lessons_update

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Update an existing LearnDash lesson
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1354-L1367) · Schema: tools/list.

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
    "course": {
      "default": null,
      "title": "Course",
      "type": "integer"
    },
    "status": {
      "default": null,
      "title": "Status",
      "type": "string"
    },
    "featured_media": {
      "default": null,
      "title": "Featured Media",
      "type": "integer"
    },
    "visible_after": {
      "default": null,
      "title": "Visible After",
      "type": "integer"
    },
    "forced_lesson_time": {
      "default": null,
      "title": "Forced Lesson Time",
      "type": "string"
    }
  },
  "required": [
    "id"
  ],
  "title": "ld_lessons_updateArguments",
  "type": "object"
}
```

</details>

<a id="tool-ld_topics_list-77e8313d"></a>

## ld_topics_list

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List LearnDash topics (sub-lessons), optionally filtered by course and lesson
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1369-L1379) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "course": {
      "default": null,
      "title": "Course",
      "type": "integer"
    },
    "lesson": {
      "default": null,
      "title": "Lesson",
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
    "search": {
      "default": null,
      "title": "Search",
      "type": "string"
    }
  },
  "title": "ld_topics_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-ld_topics_create-e5458dd0"></a>

## ld_topics_create

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a new LearnDash topic (sub-lesson)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1381-L1392) · Schema: tools/list.

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
    "course": {
      "title": "Course",
      "type": "integer"
    },
    "lesson": {
      "title": "Lesson",
      "type": "integer"
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
    "featured_media": {
      "default": null,
      "title": "Featured Media",
      "type": "integer"
    }
  },
  "required": [
    "title",
    "course",
    "lesson"
  ],
  "title": "ld_topics_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-ld_quizzes_list-123887c8"></a>

## ld_quizzes_list

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List LearnDash quizzes, optionally filtered by course or lesson
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1394-L1404) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "course": {
      "default": null,
      "title": "Course",
      "type": "integer"
    },
    "lesson": {
      "default": null,
      "title": "Lesson",
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
    "search": {
      "default": null,
      "title": "Search",
      "type": "string"
    }
  },
  "title": "ld_quizzes_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-ld_quizzes_create-243ecbd6"></a>

## ld_quizzes_create

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a new LearnDash quiz
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1406-L1420) · Schema: tools/list.

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
    "course": {
      "title": "Course",
      "type": "integer"
    },
    "content": {
      "default": null,
      "title": "Content",
      "type": "string"
    },
    "lesson": {
      "default": null,
      "title": "Lesson",
      "type": "integer"
    },
    "status": {
      "default": "draft",
      "title": "Status",
      "type": "string"
    },
    "passing_percentage": {
      "default": 80,
      "title": "Passing Percentage",
      "type": "integer"
    },
    "quiz_attempts": {
      "default": null,
      "title": "Quiz Attempts",
      "type": "integer"
    },
    "time_limit": {
      "default": null,
      "title": "Time Limit",
      "type": "integer"
    },
    "certificate": {
      "default": null,
      "title": "Certificate",
      "type": "integer"
    }
  },
  "required": [
    "title",
    "course"
  ],
  "title": "ld_quizzes_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-ld_enroll_user-221c7fb4"></a>

## ld_enroll_user

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Enroll a user in a LearnDash course
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1422-L1429) · Schema: tools/list.

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
    "course_id": {
      "title": "Course Id",
      "type": "integer"
    }
  },
  "required": [
    "user_id",
    "course_id"
  ],
  "title": "ld_enroll_userArguments",
  "type": "object"
}
```

</details>

<a id="tool-ld_unenroll_user-d67fffca"></a>

## ld_unenroll_user

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Remove a user from a LearnDash course
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1431-L1438) · Schema: tools/list.

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
    "course_id": {
      "title": "Course Id",
      "type": "integer"
    }
  },
  "required": [
    "user_id",
    "course_id"
  ],
  "title": "ld_unenroll_userArguments",
  "type": "object"
}
```

</details>

<a id="tool-ld_mark_complete-46e446a3"></a>

## ld_mark_complete

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Mark a LearnDash course step (lesson/topic/quiz) as complete for a user
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1440-L1448) · Schema: tools/list.

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
    "course_id": {
      "title": "Course Id",
      "type": "integer"
    },
    "step_id": {
      "title": "Step Id",
      "type": "integer"
    }
  },
  "required": [
    "user_id",
    "course_id",
    "step_id"
  ],
  "title": "ld_mark_completeArguments",
  "type": "object"
}
```

</details>

<a id="tool-ld_user_progress-dc450cb7"></a>

## ld_user_progress

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Get a user's progress in a LearnDash course
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1450-L1457) · Schema: tools/list.

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
    "course_id": {
      "title": "Course Id",
      "type": "integer"
    }
  },
  "required": [
    "user_id",
    "course_id"
  ],
  "title": "ld_user_progressArguments",
  "type": "object"
}
```

</details>

<a id="tool-lifter_courses_list-c67d668c"></a>

## lifter_courses_list

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List LifterLMS courses
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1459-L1470) · Schema: tools/list.

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
    }
  },
  "title": "lifter_courses_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-lifter_courses_create-c278ae4d"></a>

## lifter_courses_create

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a new LifterLMS course
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1472-L1486) · Schema: tools/list.

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
    "catalog_visibility": {
      "default": "catalog_search",
      "title": "Catalog Visibility",
      "type": "string"
    },
    "access_opens_date": {
      "default": null,
      "title": "Access Opens Date",
      "type": "string"
    },
    "access_closes_date": {
      "default": null,
      "title": "Access Closes Date",
      "type": "string"
    },
    "enrollment_opens_date": {
      "default": null,
      "title": "Enrollment Opens Date",
      "type": "string"
    },
    "enrollment_closes_date": {
      "default": null,
      "title": "Enrollment Closes Date",
      "type": "string"
    }
  },
  "required": [
    "title"
  ],
  "title": "lifter_courses_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-lifter_lessons_list-45444f0d"></a>

## lifter_lessons_list

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List LifterLMS lessons, optionally filtered by course
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1488-L1499) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "parent": {
      "default": null,
      "title": "Parent",
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
    "search": {
      "default": null,
      "title": "Search",
      "type": "string"
    },
    "orderby": {
      "default": "order",
      "title": "Orderby",
      "type": "string"
    },
    "order": {
      "default": "asc",
      "title": "Order",
      "type": "string"
    }
  },
  "title": "lifter_lessons_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-lifter_enroll_user-ae5214a5"></a>

## lifter_enroll_user

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Enroll a user in a LifterLMS course or membership
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1501-L1509) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "student_id": {
      "title": "Student Id",
      "type": "integer"
    },
    "post_id": {
      "title": "Post Id",
      "type": "integer"
    },
    "trigger": {
      "default": "admin_enroll",
      "title": "Trigger",
      "type": "string"
    }
  },
  "required": [
    "student_id",
    "post_id"
  ],
  "title": "lifter_enroll_userArguments",
  "type": "object"
}
```

</details>

<a id="tool-tutor_courses_list-c0d00d42"></a>

## tutor_courses_list

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List Tutor LMS courses
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1511-L1522) · Schema: tools/list.

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
    }
  },
  "title": "tutor_courses_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-tutor_courses_create-0268e9ad"></a>

## tutor_courses_create

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a new Tutor LMS course
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1524-L1538) · Schema: tools/list.

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
    "price": {
      "default": null,
      "title": "Price",
      "type": "string"
    },
    "course_level": {
      "default": "all_levels",
      "title": "Course Level",
      "type": "string"
    },
    "maximum_students": {
      "default": null,
      "title": "Maximum Students",
      "type": "integer"
    },
    "course_duration_hours": {
      "default": null,
      "title": "Course Duration Hours",
      "type": "integer"
    },
    "course_duration_minutes": {
      "default": null,
      "title": "Course Duration Minutes",
      "type": "integer"
    }
  },
  "required": [
    "title"
  ],
  "title": "tutor_courses_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-tutor_lessons_list-d70d74e2"></a>

## tutor_lessons_list

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List Tutor LMS lessons, optionally filtered by course
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1540-L1549) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "course_id": {
      "default": null,
      "title": "Course Id",
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
    "search": {
      "default": null,
      "title": "Search",
      "type": "string"
    }
  },
  "title": "tutor_lessons_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-tutor_enroll_user-ee04bbb2"></a>

## tutor_enroll_user

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Enroll a user in a Tutor LMS course
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1551-L1558) · Schema: tools/list.

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
    "course_id": {
      "title": "Course Id",
      "type": "integer"
    }
  },
  "required": [
    "user_id",
    "course_id"
  ],
  "title": "tutor_enroll_userArguments",
  "type": "object"
}
```

</details>

<a id="tool-mepr_memberships_list-9e0ab6ea"></a>

## mepr_memberships_list

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List all MemberPress memberships (plans)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1560-L1569) · Schema: tools/list.

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
    }
  },
  "title": "mepr_memberships_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-mepr_memberships_create-ae7ec662"></a>

## mepr_memberships_create

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a new MemberPress membership plan
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1571-L1589) · Schema: tools/list.

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
      "type": "string"
    },
    "content": {
      "default": null,
      "title": "Content",
      "type": "string"
    },
    "period": {
      "default": 1,
      "title": "Period",
      "type": "integer"
    },
    "period_type": {
      "default": "months",
      "title": "Period Type",
      "type": "string"
    },
    "trial": {
      "default": false,
      "title": "Trial",
      "type": "boolean"
    },
    "trial_days": {
      "default": null,
      "title": "Trial Days",
      "type": "integer"
    },
    "trial_amount": {
      "default": null,
      "title": "Trial Amount",
      "type": "string"
    },
    "limit_cycles": {
      "default": false,
      "title": "Limit Cycles",
      "type": "boolean"
    },
    "limit_cycles_num": {
      "default": null,
      "title": "Limit Cycles Num",
      "type": "integer"
    },
    "limit_cycles_action": {
      "default": "expire",
      "title": "Limit Cycles Action",
      "type": "string"
    },
    "group_id": {
      "default": null,
      "title": "Group Id",
      "type": "integer"
    },
    "status": {
      "default": "draft",
      "title": "Status",
      "type": "string"
    }
  },
  "required": [
    "title",
    "price"
  ],
  "title": "mepr_memberships_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-mepr_memberships_update-619e7fba"></a>

## mepr_memberships_update

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Update an existing MemberPress membership plan
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1591-L1606) · Schema: tools/list.

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
    "price": {
      "default": null,
      "title": "Price",
      "type": "string"
    },
    "period": {
      "default": null,
      "title": "Period",
      "type": "integer"
    },
    "period_type": {
      "default": null,
      "title": "Period Type",
      "type": "string"
    },
    "trial": {
      "default": null,
      "title": "Trial",
      "type": "boolean"
    },
    "trial_days": {
      "default": null,
      "title": "Trial Days",
      "type": "integer"
    },
    "trial_amount": {
      "default": null,
      "title": "Trial Amount",
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
  "title": "mepr_memberships_updateArguments",
  "type": "object"
}
```

</details>

<a id="tool-mepr_members_list-bb1489e0"></a>

## mepr_members_list

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List MemberPress members with optional filters
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1608-L1618) · Schema: tools/list.

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
    "membership": {
      "default": null,
      "title": "Membership",
      "type": "integer"
    },
    "status": {
      "default": "all",
      "title": "Status",
      "type": "string"
    }
  },
  "title": "mepr_members_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-mepr_grant_access-a1f11701"></a>

## mepr_grant_access

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Grant a user access to a MemberPress membership
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1620-L1628) · Schema: tools/list.

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
    "membership_id": {
      "title": "Membership Id",
      "type": "integer"
    },
    "trans_num": {
      "default": null,
      "title": "Trans Num",
      "type": "string"
    }
  },
  "required": [
    "user_id",
    "membership_id"
  ],
  "title": "mepr_grant_accessArguments",
  "type": "object"
}
```

</details>

<a id="tool-mepr_revoke_access-a9cd5b74"></a>

## mepr_revoke_access

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] Tool tool. Revoke a user's access to a MemberPress membership
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1630-L1638) · Schema: tools/list.

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
    "membership_id": {
      "title": "Membership Id",
      "type": "integer"
    },
    "transaction_id": {
      "default": null,
      "title": "Transaction Id",
      "type": "integer"
    }
  },
  "required": [
    "user_id",
    "membership_id"
  ],
  "title": "mepr_revoke_accessArguments",
  "type": "object"
}
```

</details>

<a id="tool-mepr_transactions_list-4a46f03a"></a>

## mepr_transactions_list

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List MemberPress transactions
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1640-L1650) · Schema: tools/list.

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
    "member": {
      "default": null,
      "title": "Member",
      "type": "integer"
    },
    "membership": {
      "default": null,
      "title": "Membership",
      "type": "integer"
    },
    "status": {
      "default": null,
      "title": "Status",
      "type": "string"
    }
  },
  "title": "mepr_transactions_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-mepr_coupons_list-b495876c"></a>

## mepr_coupons_list

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List MemberPress coupons
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1652-L1660) · Schema: tools/list.

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
  "title": "mepr_coupons_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-mepr_coupons_create-dfcbff4f"></a>

## mepr_coupons_create

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a new MemberPress coupon
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1662-L1677) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "coupon_code": {
      "title": "Coupon Code",
      "type": "string"
    },
    "discount_amount": {
      "title": "Discount Amount",
      "type": "string"
    },
    "discount_type": {
      "default": "percent",
      "title": "Discount Type",
      "type": "string"
    },
    "valid_memberships": {
      "default": null,
      "items": {},
      "title": "Valid Memberships",
      "type": "array"
    },
    "usage_count": {
      "default": null,
      "title": "Usage Count",
      "type": "integer"
    },
    "starts_on": {
      "default": null,
      "title": "Starts On",
      "type": "string"
    },
    "expires_on": {
      "default": null,
      "title": "Expires On",
      "type": "string"
    },
    "first_payment_discount_type": {
      "default": null,
      "title": "First Payment Discount Type",
      "type": "string"
    },
    "first_payment_discount_amount": {
      "default": null,
      "title": "First Payment Discount Amount",
      "type": "string"
    },
    "status": {
      "default": "publish",
      "title": "Status",
      "type": "string"
    }
  },
  "required": [
    "coupon_code",
    "discount_amount"
  ],
  "title": "mepr_coupons_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-mepr_rules_list-f63b626e"></a>

## mepr_rules_list

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List MemberPress access rules
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1679-L1686) · Schema: tools/list.

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
  "title": "mepr_rules_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-mepr_rules_create-75336952"></a>

## mepr_rules_create

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a MemberPress access rule to protect content
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1688-L1706) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "mepr_type": {
      "title": "Mepr Type",
      "type": "string"
    },
    "mepr_content": {
      "title": "Mepr Content",
      "type": "string"
    },
    "memberships": {
      "items": {},
      "title": "Memberships",
      "type": "array"
    },
    "drip_enabled": {
      "default": false,
      "title": "Drip Enabled",
      "type": "boolean"
    },
    "drip_amount": {
      "default": null,
      "title": "Drip Amount",
      "type": "integer"
    },
    "drip_type": {
      "default": null,
      "title": "Drip Type",
      "type": "string"
    },
    "drip_after": {
      "default": "registers",
      "title": "Drip After",
      "type": "string"
    },
    "expires_enabled": {
      "default": false,
      "title": "Expires Enabled",
      "type": "boolean"
    },
    "expires_amount": {
      "default": null,
      "title": "Expires Amount",
      "type": "integer"
    },
    "expires_type": {
      "default": null,
      "title": "Expires Type",
      "type": "string"
    },
    "unauth_excerpt_type": {
      "default": "default",
      "title": "Unauth Excerpt Type",
      "type": "string"
    },
    "unauth_message_type": {
      "default": "default",
      "title": "Unauth Message Type",
      "type": "string"
    },
    "unauth_message": {
      "default": null,
      "title": "Unauth Message",
      "type": "string"
    }
  },
  "required": [
    "mepr_type",
    "mepr_content",
    "memberships"
  ],
  "title": "mepr_rules_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-pmp_levels_list-1a3b1517"></a>

## pmp_levels_list

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List Paid Memberships Pro membership levels
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1708-L1715) · Schema: tools/list.

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
  "title": "pmp_levels_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-pmp_levels_create-b9cf43c2"></a>

## pmp_levels_create

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a new Paid Memberships Pro membership level
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1717-L1735) · Schema: tools/list.

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
    "initial_payment": {
      "default": null,
      "title": "Initial Payment",
      "type": "string"
    },
    "billing_amount": {
      "default": null,
      "title": "Billing Amount",
      "type": "string"
    },
    "cycle_number": {
      "default": 1,
      "title": "Cycle Number",
      "type": "integer"
    },
    "cycle_period": {
      "default": "Month",
      "title": "Cycle Period",
      "type": "string"
    },
    "billing_limit": {
      "default": null,
      "title": "Billing Limit",
      "type": "integer"
    },
    "trial_amount": {
      "default": null,
      "title": "Trial Amount",
      "type": "string"
    },
    "trial_limit": {
      "default": null,
      "title": "Trial Limit",
      "type": "integer"
    },
    "expiration_number": {
      "default": null,
      "title": "Expiration Number",
      "type": "integer"
    },
    "expiration_period": {
      "default": null,
      "title": "Expiration Period",
      "type": "string"
    },
    "confirmation": {
      "default": null,
      "title": "Confirmation",
      "type": "string"
    },
    "allow_signups": {
      "default": true,
      "title": "Allow Signups",
      "type": "boolean"
    }
  },
  "required": [
    "name"
  ],
  "title": "pmp_levels_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-pmp_members_list-fb350b2d"></a>

## pmp_members_list

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List Paid Memberships Pro members
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1737-L1747) · Schema: tools/list.

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
    "level": {
      "default": null,
      "title": "Level",
      "type": "integer"
    },
    "status": {
      "default": "active",
      "title": "Status",
      "type": "string"
    },
    "search": {
      "default": null,
      "title": "Search",
      "type": "string"
    }
  },
  "title": "pmp_members_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-pmp_orders_list-68aa3828"></a>

## pmp_orders_list

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List Paid Memberships Pro orders
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1749-L1759) · Schema: tools/list.

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
    "user_id": {
      "default": null,
      "title": "User Id",
      "type": "integer"
    },
    "membership_id": {
      "default": null,
      "title": "Membership Id",
      "type": "integer"
    },
    "status": {
      "default": null,
      "title": "Status",
      "type": "string"
    }
  },
  "title": "pmp_orders_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-pmp_discount_codes_create-a74b1e2e"></a>

## pmp_discount_codes_create

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a Paid Memberships Pro discount code
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1761-L1773) · Schema: tools/list.

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
    "starts": {
      "default": null,
      "title": "Starts",
      "type": "string"
    },
    "expires": {
      "default": null,
      "title": "Expires",
      "type": "string"
    },
    "uses": {
      "default": null,
      "title": "Uses",
      "type": "integer"
    },
    "levels": {
      "default": null,
      "items": {},
      "title": "Levels",
      "type": "array"
    },
    "initial_payment": {
      "default": null,
      "title": "Initial Payment",
      "type": "string"
    },
    "billing_amount": {
      "default": null,
      "title": "Billing Amount",
      "type": "string"
    }
  },
  "required": [
    "code"
  ],
  "title": "pmp_discount_codes_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-rcp_levels_list-0600329b"></a>

## rcp_levels_list

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List Restrict Content Pro subscription levels
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1775-L1783) · Schema: tools/list.

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
      "default": "active",
      "title": "Status",
      "type": "string"
    }
  },
  "title": "rcp_levels_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-rcp_members_list-039f54fb"></a>

## rcp_members_list

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List Restrict Content Pro members
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1785-L1795) · Schema: tools/list.

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
    "subscription": {
      "default": null,
      "title": "Subscription",
      "type": "integer"
    },
    "status": {
      "default": "active",
      "title": "Status",
      "type": "string"
    },
    "search": {
      "default": null,
      "title": "Search",
      "type": "string"
    }
  },
  "title": "rcp_members_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-um_forms_list-a5a26297"></a>

## um_forms_list

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List Ultimate Member forms (registration, profile, login, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1797-L1805) · Schema: tools/list.

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
    "type": {
      "default": null,
      "title": "Type",
      "type": "string"
    }
  },
  "title": "um_forms_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-um_roles_list-5c914a26"></a>

## um_roles_list

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List Ultimate Member custom roles
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1807-L1814) · Schema: tools/list.

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
  "title": "um_roles_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-wpml_languages_list-43d7deb2"></a>

## wpml_languages_list

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List all configured languages in WPML with status and default flag
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1816-L1820) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wpml_languages_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-wpml_language_add-bfd670ee"></a>

## wpml_language_add

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Add a new language to WPML
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1822-L1830) · Schema: tools/list.

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
    "default_locale": {
      "default": null,
      "title": "Default Locale",
      "type": "string"
    },
    "flag": {
      "default": null,
      "title": "Flag",
      "type": "string"
    }
  },
  "required": [
    "code"
  ],
  "title": "wpml_language_addArguments",
  "type": "object"
}
```

</details>

<a id="tool-wpml_language_set_default-ffcf3716"></a>

## wpml_language_set_default

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Set the default language in WPML
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1832-L1838) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

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
  "title": "wpml_language_set_defaultArguments",
  "type": "object"
}
```

</details>

<a id="tool-wpml_post_get_translations-218e45da"></a>

## wpml_post_get_translations

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Get all translations of a post in WPML (returns linked post IDs per language)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1840-L1847) · Schema: tools/list.

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
    "post_type": {
      "default": "post",
      "title": "Post Type",
      "type": "string"
    }
  },
  "required": [
    "post_id"
  ],
  "title": "wpml_post_get_translationsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wpml_post_create_translation-cf801bb3"></a>

## wpml_post_create_translation

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a translation of a post by duplicating it in WPML for a target language
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1849-L1859) · Schema: tools/list.

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
    "language": {
      "title": "Language",
      "type": "string"
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
    "duplicate": {
      "default": true,
      "title": "Duplicate",
      "type": "boolean"
    }
  },
  "required": [
    "post_id",
    "language"
  ],
  "title": "wpml_post_create_translationArguments",
  "type": "object"
}
```

</details>

<a id="tool-wpml_post_link_translation-3268c64d"></a>

## wpml_post_link_translation

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Link two existing posts as translations of each other in WPML
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1861-L1869) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "source_post_id": {
      "title": "Source Post Id",
      "type": "integer"
    },
    "target_post_id": {
      "title": "Target Post Id",
      "type": "integer"
    },
    "language": {
      "title": "Language",
      "type": "string"
    }
  },
  "required": [
    "source_post_id",
    "target_post_id",
    "language"
  ],
  "title": "wpml_post_link_translationArguments",
  "type": "object"
}
```

</details>

<a id="tool-wpml_strings_list-e89446c9"></a>

## wpml_strings_list

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List translatable strings registered in WPML string translation
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1871-L1881) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "context": {
      "default": null,
      "title": "Context",
      "type": "string"
    },
    "search": {
      "default": null,
      "title": "Search",
      "type": "string"
    },
    "language": {
      "default": null,
      "title": "Language",
      "type": "string"
    },
    "page": {
      "default": 1,
      "title": "Page",
      "type": "integer"
    },
    "per_page": {
      "default": 50,
      "title": "Per Page",
      "type": "integer"
    }
  },
  "title": "wpml_strings_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-wpml_string_translate-8726706a"></a>

## wpml_string_translate

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Translate a specific string in WPML string translation
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1883-L1892) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "string_id": {
      "title": "String Id",
      "type": "integer"
    },
    "language": {
      "title": "Language",
      "type": "string"
    },
    "value": {
      "title": "Value",
      "type": "string"
    },
    "status": {
      "default": 10,
      "title": "Status",
      "type": "integer"
    }
  },
  "required": [
    "string_id",
    "language",
    "value"
  ],
  "title": "wpml_string_translateArguments",
  "type": "object"
}
```

</details>

<a id="tool-wpml_auto_translate-9ff60a61"></a>

## wpml_auto_translate

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Trigger WPML automatic translation (ATE) for a post
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1894-L1902) · Schema: tools/list.

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
    "target_languages": {
      "items": {},
      "title": "Target Languages",
      "type": "array"
    },
    "post_type": {
      "default": "post",
      "title": "Post Type",
      "type": "string"
    }
  },
  "required": [
    "post_id",
    "target_languages"
  ],
  "title": "wpml_auto_translateArguments",
  "type": "object"
}
```

</details>

<a id="tool-wpml_taxonomy_translate-253d3dd1"></a>

## wpml_taxonomy_translate

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Translate a taxonomy term in WPML (categories, tags, custom taxonomies)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1904-L1915) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "term_id": {
      "title": "Term Id",
      "type": "integer"
    },
    "taxonomy": {
      "title": "Taxonomy",
      "type": "string"
    },
    "language": {
      "title": "Language",
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
    }
  },
  "required": [
    "term_id",
    "taxonomy",
    "language",
    "name"
  ],
  "title": "wpml_taxonomy_translateArguments",
  "type": "object"
}
```

</details>

<a id="tool-wpml_media_translate-87b499b2"></a>

## wpml_media_translate

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Translate media metadata (title, alt text, caption, description) for a specific language in WPML
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1917-L1928) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "attachment_id": {
      "title": "Attachment Id",
      "type": "integer"
    },
    "language": {
      "title": "Language",
      "type": "string"
    },
    "title": {
      "default": null,
      "title": "Title",
      "type": "string"
    },
    "alt_text": {
      "default": null,
      "title": "Alt Text",
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
    "attachment_id",
    "language"
  ],
  "title": "wpml_media_translateArguments",
  "type": "object"
}
```

</details>

<a id="tool-polylang_languages_list-8a34ef18"></a>

## polylang_languages_list

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List all languages configured in Polylang
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1930-L1934) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "polylang_languages_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-polylang_post_translate-ead7f103"></a>

## polylang_post_translate

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Create or link a translation for a post in Polylang
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1936-L1946) · Schema: tools/list.

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
    "language": {
      "title": "Language",
      "type": "string"
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
    "post_id",
    "language"
  ],
  "title": "polylang_post_translateArguments",
  "type": "object"
}
```

</details>

<a id="tool-polylang_string_translate-329c4bea"></a>

## polylang_string_translate

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Translate a registered string in Polylang's string translation module
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1948-L1957) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "group": {
      "title": "Group",
      "type": "string"
    },
    "name": {
      "title": "Name",
      "type": "string"
    },
    "language": {
      "title": "Language",
      "type": "string"
    },
    "value": {
      "title": "Value",
      "type": "string"
    }
  },
  "required": [
    "group",
    "name",
    "language",
    "value"
  ],
  "title": "polylang_string_translateArguments",
  "type": "object"
}
```

</details>

<a id="tool-polylang_sync_translation-e21a16f9"></a>

## polylang_sync_translation

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Sync metadata (custom fields, taxonomies, featured image) between Polylang translations
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1959-L1968) · Schema: tools/list.

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
    "sync_taxonomies": {
      "default": true,
      "title": "Sync Taxonomies",
      "type": "boolean"
    },
    "sync_meta": {
      "default": true,
      "title": "Sync Meta",
      "type": "boolean"
    },
    "sync_featured_image": {
      "default": true,
      "title": "Sync Featured Image",
      "type": "boolean"
    }
  },
  "required": [
    "post_id"
  ],
  "title": "polylang_sync_translationArguments",
  "type": "object"
}
```

</details>

<a id="tool-translatepress_strings_list-55270eb0"></a>

## translatepress_strings_list

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List translated strings from TranslatePress dictionary tables
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1970-L1980) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "language": {
      "default": null,
      "title": "Language",
      "type": "string"
    },
    "search": {
      "default": null,
      "title": "Search",
      "type": "string"
    },
    "status": {
      "default": "all",
      "title": "Status",
      "type": "string"
    },
    "page": {
      "default": 1,
      "title": "Page",
      "type": "integer"
    },
    "per_page": {
      "default": 50,
      "title": "Per Page",
      "type": "integer"
    }
  },
  "title": "translatepress_strings_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-translatepress_string_translate-0e9f9a22"></a>

## translatepress_string_translate

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Add or update a string translation in TranslatePress
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1982-L1990) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "original": {
      "title": "Original",
      "type": "string"
    },
    "translated": {
      "title": "Translated",
      "type": "string"
    },
    "language": {
      "title": "Language",
      "type": "string"
    }
  },
  "required": [
    "original",
    "translated",
    "language"
  ],
  "title": "translatepress_string_translateArguments",
  "type": "object"
}
```

</details>

<a id="tool-translatepress_auto_translate-1a131e38"></a>

## translatepress_auto_translate

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Configure or trigger TranslatePress automatic translation via Google Translate or DeepL
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L1992-L2000) · Schema: tools/list.

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
    },
    "engine": {
      "default": null,
      "title": "Engine",
      "type": "string"
    },
    "api_key": {
      "default": null,
      "title": "Api Key",
      "type": "string"
    }
  },
  "title": "translatepress_auto_translateArguments",
  "type": "object"
}
```

</details>

<a id="tool-weglot_languages_list-a2cb2c88"></a>

## weglot_languages_list

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List languages configured in Weglot
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L2002-L2006) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "weglot_languages_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-weglot_translate_url-4a1232ee"></a>

## weglot_translate_url

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Get the translated URL for a specific page in Weglot
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L2008-L2015) · Schema: tools/list.

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
    "language": {
      "title": "Language",
      "type": "string"
    }
  },
  "required": [
    "url",
    "language"
  ],
  "title": "weglot_translate_urlArguments",
  "type": "object"
}
```

</details>

<a id="tool-weglot_settings_update-9d151c30"></a>

## weglot_settings_update

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Update Weglot plugin settings (original language, destination languages, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L2017-L2027) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "api_key": {
      "default": null,
      "title": "Api Key",
      "type": "string"
    },
    "original_language": {
      "default": null,
      "title": "Original Language",
      "type": "string"
    },
    "destination_languages": {
      "default": null,
      "items": {},
      "title": "Destination Languages",
      "type": "array"
    },
    "auto_switch": {
      "default": null,
      "title": "Auto Switch",
      "type": "boolean"
    },
    "exclude_urls": {
      "default": null,
      "items": {},
      "title": "Exclude Urls",
      "type": "array"
    }
  },
  "title": "weglot_settings_updateArguments",
  "type": "object"
}
```

</details>

<a id="tool-affiliates_detect_plugin-04a5e0a3"></a>

## affiliates_detect_plugin

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Detect which affiliate/referral plugin is installed (AffiliateWP, YITH Affiliates, SliceWP)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L2029-L2033) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "affiliates_detect_pluginArguments",
  "type": "object"
}
```

</details>

<a id="tool-affiliates_list-021f309b"></a>

## affiliates_list

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List affiliates with optional filters
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L2035-L2046) · Schema: tools/list.

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
      "default": "active",
      "title": "Status",
      "type": "string"
    },
    "search": {
      "default": null,
      "title": "Search",
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
  "title": "affiliates_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-affiliates_create-7ef53345"></a>

## affiliates_create

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a new affiliate account
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L2048-L2059) · Schema: tools/list.

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
    "payment_email": {
      "default": null,
      "title": "Payment Email",
      "type": "string"
    },
    "rate": {
      "default": null,
      "title": "Rate",
      "type": "integer"
    },
    "rate_type": {
      "default": "percentage",
      "title": "Rate Type",
      "type": "string"
    },
    "status": {
      "default": "active",
      "title": "Status",
      "type": "string"
    },
    "notes": {
      "default": null,
      "title": "Notes",
      "type": "string"
    }
  },
  "required": [
    "user_id"
  ],
  "title": "affiliates_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-affiliates_update-dfa8cc07"></a>

## affiliates_update

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Update an existing affiliate's settings
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L2061-L2072) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "affiliate_id": {
      "title": "Affiliate Id",
      "type": "integer"
    },
    "status": {
      "default": null,
      "title": "Status",
      "type": "string"
    },
    "rate": {
      "default": null,
      "title": "Rate",
      "type": "integer"
    },
    "rate_type": {
      "default": null,
      "title": "Rate Type",
      "type": "string"
    },
    "payment_email": {
      "default": null,
      "title": "Payment Email",
      "type": "string"
    },
    "notes": {
      "default": null,
      "title": "Notes",
      "type": "string"
    }
  },
  "required": [
    "affiliate_id"
  ],
  "title": "affiliates_updateArguments",
  "type": "object"
}
```

</details>

<a id="tool-affiliates_referrals_list-89091a4a"></a>

## affiliates_referrals_list

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List referral history with optional filters
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L2074-L2087) · Schema: tools/list.

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
    "affiliate_id": {
      "default": null,
      "title": "Affiliate Id",
      "type": "integer"
    },
    "status": {
      "default": "unpaid",
      "title": "Status",
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
  "title": "affiliates_referrals_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-affiliates_payouts_list-7d15b298"></a>

## affiliates_payouts_list

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List affiliate payouts
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L2089-L2100) · Schema: tools/list.

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
    "affiliate_id": {
      "default": null,
      "title": "Affiliate Id",
      "type": "integer"
    },
    "status": {
      "default": null,
      "title": "Status",
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
  "title": "affiliates_payouts_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-affiliates_payout_create-08a5bcf5"></a>

## affiliates_payout_create

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a payout for an affiliate (mark referrals as paid)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L2102-L2112) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "affiliate_id": {
      "title": "Affiliate Id",
      "type": "integer"
    },
    "amount": {
      "title": "Amount",
      "type": "integer"
    },
    "referral_ids": {
      "default": null,
      "items": {},
      "title": "Referral Ids",
      "type": "array"
    },
    "payout_method": {
      "default": "manual",
      "title": "Payout Method",
      "type": "string"
    },
    "notes": {
      "default": null,
      "title": "Notes",
      "type": "string"
    }
  },
  "required": [
    "affiliate_id",
    "amount"
  ],
  "title": "affiliates_payout_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-affiliates_links_generate-1d840453"></a>

## affiliates_links_generate

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Generate an affiliate referral link for a given URL
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L2114-L2122) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "affiliate_id": {
      "title": "Affiliate Id",
      "type": "integer"
    },
    "url": {
      "title": "Url",
      "type": "string"
    },
    "campaign": {
      "default": null,
      "title": "Campaign",
      "type": "string"
    }
  },
  "required": [
    "affiliate_id",
    "url"
  ],
  "title": "affiliates_links_generateArguments",
  "type": "object"
}
```

</details>

<a id="tool-affiliates_commission_set-64a8afa6"></a>

## affiliates_commission_set

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Set global or per-affiliate commission rate and type
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L2124-L2134) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "rate": {
      "title": "Rate",
      "type": "integer"
    },
    "affiliate_id": {
      "default": null,
      "title": "Affiliate Id",
      "type": "integer"
    },
    "rate_type": {
      "default": "percentage",
      "title": "Rate Type",
      "type": "string"
    },
    "cookie_duration": {
      "default": null,
      "title": "Cookie Duration",
      "type": "integer"
    },
    "per_product_rates": {
      "default": null,
      "items": {},
      "title": "Per Product Rates",
      "type": "array"
    }
  },
  "required": [
    "rate"
  ],
  "title": "affiliates_commission_setArguments",
  "type": "object"
}
```

</details>

<a id="tool-rest_discover_routes-ed4eb276"></a>

## rest_discover_routes

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Discover all available REST API routes by fetching the root /wp-json/ index
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L2136-L2142) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "namespace": {
      "default": null,
      "title": "Namespace",
      "type": "string"
    }
  },
  "title": "rest_discover_routesArguments",
  "type": "object"
}
```

</details>

<a id="tool-rest_get_route_info-9769a2e4"></a>

## rest_get_route_info

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Get detailed information about a specific REST API route (methods, arguments, schema)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L2144-L2150) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "route": {
      "title": "Route",
      "type": "string"
    }
  },
  "required": [
    "route"
  ],
  "title": "rest_get_route_infoArguments",
  "type": "object"
}
```

</details>

<a id="tool-rest_custom_call-dab029f4"></a>

## rest_custom_call

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, (method or 'GET').upper, \_wp, wp.get, wp.post, wp.put, wp.patch, wp.delete.

```text
[WRITE] Tool tool. Make an arbitrary REST API call to any endpoint with any HTTP method (GET, POST, PUT, PATCH, DELETE)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L2152-L2172) · Schema: tools/list.

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
    "endpoint": {
      "title": "Endpoint",
      "type": "string"
    },
    "body": {
      "additionalProperties": true,
      "default": null,
      "title": "Body",
      "type": "object"
    },
    "params": {
      "additionalProperties": true,
      "default": null,
      "title": "Params",
      "type": "object"
    }
  },
  "required": [
    "method",
    "endpoint"
  ],
  "title": "rest_custom_callArguments",
  "type": "object"
}
```

</details>

<a id="tool-rest_namespace_list-817d7cf0"></a>

## rest_namespace_list

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List all registered REST API namespaces
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L2174-L2178) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "rest_namespace_listArguments",
  "type": "object"
}
```

</details>
