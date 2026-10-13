# RoyAzran/mcp-ads: supporting and other-product tools

[Provider inventory](royazran--mcp-ads.md) · [Global tool index](../TOOL_INDEX.md)

Tools 2701–2850 of 3131. Exact schemas from the same upstream snapshot.

<a id="tool-rest_test_endpoint-04a9851e"></a>

## rest_test_endpoint

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Test if a specific REST API endpoint is responding and accessible
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L2180-L2187) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "endpoint": {
      "title": "Endpoint",
      "type": "string"
    },
    "method": {
      "default": "GET",
      "title": "Method",
      "type": "string"
    }
  },
  "required": [
    "endpoint"
  ],
  "title": "rest_test_endpointArguments",
  "type": "object"
}
```

</details>

<a id="tool-graphql_detect-af7846a3"></a>

## graphql_detect

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Check if WPGraphQL plugin is installed and the /graphql endpoint is available
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L2189-L2193) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "graphql_detectArguments",
  "type": "object"
}
```

</details>

<a id="tool-graphql_query-d9f35c51"></a>

## graphql_query

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Execute a GraphQL query against the WPGraphQL endpoint
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L2195-L2203) · Schema: tools/list.

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
    "variables": {
      "additionalProperties": true,
      "default": null,
      "title": "Variables",
      "type": "object"
    },
    "operation_name": {
      "default": null,
      "title": "Operation Name",
      "type": "string"
    }
  },
  "required": [
    "query"
  ],
  "title": "graphql_queryArguments",
  "type": "object"
}
```

</details>

<a id="tool-graphql_introspect-fe9c111f"></a>

## graphql_introspect

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Run a GraphQL introspection query to discover the schema (types, queries, mutations)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L2205-L2211) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "type_name": {
      "default": null,
      "title": "Type Name",
      "type": "string"
    }
  },
  "title": "graphql_introspectArguments",
  "type": "object"
}
```

</details>

<a id="tool-graphql_mutation-43555b29"></a>

## graphql_mutation

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Execute a GraphQL mutation against the WPGraphQL endpoint
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L2213-L2220) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "mutation": {
      "title": "Mutation",
      "type": "string"
    },
    "variables": {
      "additionalProperties": true,
      "default": null,
      "title": "Variables",
      "type": "object"
    }
  },
  "required": [
    "mutation"
  ],
  "title": "graphql_mutationArguments",
  "type": "object"
}
```

</details>

<a id="tool-rest_batch_request-e148bbac"></a>

## rest_batch_request

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().post, {'requests': requests, 'validation': validation}.items, \_wp.

```text
[WRITE] Tool tool. Execute multiple REST API requests in a single batch call using the WP REST batch endpoint (/wp/v2/batch)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L2222-L2229) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "requests": {
      "default": null,
      "items": {},
      "title": "Requests",
      "type": "array"
    },
    "validation": {
      "default": "normal",
      "title": "Validation",
      "type": "string"
    }
  },
  "title": "rest_batch_requestArguments",
  "type": "object"
}
```

</details>

<a id="tool-a11y_audit_page-ff6750c7"></a>

## a11y_audit_page

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Audit a WordPress page for WCAG 2.2 AA accessibility issues (alt text, headings, contrast, form labels, ARIA landmarks, skip link)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L27-L34) · Schema: tools/list.

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
  "title": "a11y_audit_pageArguments",
  "type": "object"
}
```

</details>

<a id="tool-a11y_check_alt_texts-10864b72"></a>

## a11y_check_alt_texts

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Find images without alt text across the site (checks media library and page content)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L36-L43) · Schema: tools/list.

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
  "title": "a11y_check_alt_textsArguments",
  "type": "object"
}
```

</details>

<a id="tool-a11y_check_heading_hierarchy-33c0ada4"></a>

## a11y_check_heading_hierarchy

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Verify H1-H6 heading structure on a specific page for proper document outline
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L45-L52) · Schema: tools/list.

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
  "title": "a11y_check_heading_hierarchyArguments",
  "type": "object"
}
```

</details>

<a id="tool-a11y_check_form_labels-7a50306c"></a>

## a11y_check_form_labels

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Verify all form inputs have associated labels on a specific page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L54-L61) · Schema: tools/list.

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
  "title": "a11y_check_form_labelsArguments",
  "type": "object"
}
```

</details>

<a id="tool-a11y_check_link_text-c970dc46"></a>

## a11y_check_link_text

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Find generic link text like 'click here', 'read more', 'here' across pages (WCAG 2.4.4)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L63-L71) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

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
    "post_type": {
      "default": "page",
      "title": "Post Type",
      "type": "string"
    },
    "per_page": {
      "default": 10,
      "title": "Per Page",
      "type": "integer"
    }
  },
  "title": "a11y_check_link_textArguments",
  "type": "object"
}
```

</details>

<a id="tool-a11y_check_color_contrast-addadeb4"></a>

## a11y_check_color_contrast

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Check color contrast ratio between text and background colors (WCAG 2.2 AA requires 4.5:1 for normal text, 3:1 for large text)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L73-L82) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "foreground": {
      "title": "Foreground",
      "type": "string"
    },
    "background": {
      "title": "Background",
      "type": "string"
    },
    "font_size": {
      "default": 16,
      "title": "Font Size",
      "type": "integer"
    },
    "is_bold": {
      "default": false,
      "title": "Is Bold",
      "type": "boolean"
    }
  },
  "required": [
    "foreground",
    "background"
  ],
  "title": "a11y_check_color_contrastArguments",
  "type": "object"
}
```

</details>

<a id="tool-a11y_check_aria_landmarks-50197335"></a>

## a11y_check_aria_landmarks

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Verify ARIA landmark roles (main, nav, header/banner, footer/contentinfo, search) on a page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L84-L91) · Schema: tools/list.

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
  "title": "a11y_check_aria_landmarksArguments",
  "type": "object"
}
```

</details>

<a id="tool-a11y_fix_missing_alt-69481d30"></a>

## a11y_fix_missing_alt

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Bulk add placeholder alt text to images missing alt attributes in the media library
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L93-L101) · Schema: tools/list.

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
    "alt_template": {
      "default": "{title}",
      "title": "Alt Template",
      "type": "string"
    },
    "dry_run": {
      "default": true,
      "title": "Dry Run",
      "type": "boolean"
    }
  },
  "title": "a11y_fix_missing_altArguments",
  "type": "object"
}
```

</details>

<a id="tool-a11y_generate_alt_text-67fe8de6"></a>

## a11y_generate_alt_text

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Generate descriptive alt text suggestions for images (returns image URLs and titles for an AI agent to write alt text)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L103-L110) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "image_ids": {
      "default": null,
      "items": {},
      "title": "Image Ids",
      "type": "array"
    },
    "per_page": {
      "default": 10,
      "title": "Per Page",
      "type": "integer"
    }
  },
  "title": "a11y_generate_alt_textArguments",
  "type": "object"
}
```

</details>

<a id="tool-a11y_skip_link_check-7858d9e4"></a>

## a11y_skip_link_check

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Verify that a skip navigation link exists at the top of the page (WCAG 2.4.1)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L112-L119) · Schema: tools/list.

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
  "title": "a11y_skip_link_checkArguments",
  "type": "object"
}
```

</details>

<a id="tool-a11y_detect_plugin-f08a955a"></a>

## a11y_detect_plugin

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Detect installed accessibility plugins (WP Accessibility, One Click Accessibility, UserWay, AccessiBe, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L121-L125) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "a11y_detect_pluginArguments",
  "type": "object"
}
```

</details>

<a id="tool-a11y_widget_configure-596c01f4"></a>

## a11y_widget_configure

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Configure accessibility widget/overlay settings for detected accessibility plugin
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L127-L137) · Schema: tools/list.

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
    "enabled": {
      "default": null,
      "title": "Enabled",
      "type": "boolean"
    },
    "position": {
      "default": null,
      "title": "Position",
      "type": "string"
    },
    "icon_size": {
      "default": null,
      "title": "Icon Size",
      "type": "string"
    },
    "features": {
      "additionalProperties": true,
      "default": null,
      "title": "Features",
      "type": "object"
    }
  },
  "required": [
    "plugin"
  ],
  "title": "a11y_widget_configureArguments",
  "type": "object"
}
```

</details>

<a id="tool-backup_detect_plugin-2ddeb51f"></a>

## backup_detect_plugin

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Detect which backup plugin is installed (UpdraftPlus, All-in-One WP Migration, Duplicator, BackupBuddy, BlogVault, WPvivid, or none)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L139-L143) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "backup_detect_pluginArguments",
  "type": "object"
}
```

</details>

<a id="tool-backup_updraft_run-7e7f40b1"></a>

## backup_updraft_run

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Trigger an UpdraftPlus backup (full or incremental)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L145-L152) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "type": {
      "default": "full",
      "title": "Type",
      "type": "string"
    },
    "label": {
      "default": null,
      "title": "Label",
      "type": "string"
    }
  },
  "title": "backup_updraft_runArguments",
  "type": "object"
}
```

</details>

<a id="tool-backup_updraft_list-b00e5e61"></a>

## backup_updraft_list

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List existing UpdraftPlus backups with dates and sizes
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L154-L158) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "backup_updraft_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-backup_updraft_restore-9815837b"></a>

## backup_updraft_restore

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Trigger an UpdraftPlus restore from a specific backup
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L160-L167) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "backup_id": {
      "title": "Backup Id",
      "type": "string"
    },
    "components": {
      "default": null,
      "items": {},
      "title": "Components",
      "type": "array"
    }
  },
  "required": [
    "backup_id"
  ],
  "title": "backup_updraft_restoreArguments",
  "type": "object"
}
```

</details>

<a id="tool-backup_updraft_schedule_get-a21fa481"></a>

## backup_updraft_schedule_get

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Get current UpdraftPlus backup schedule settings
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L169-L173) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "backup_updraft_schedule_getArguments",
  "type": "object"
}
```

</details>

<a id="tool-backup_updraft_schedule_set-4580a392"></a>

## backup_updraft_schedule_set

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Set UpdraftPlus backup schedule
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L175-L184) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "files_schedule": {
      "default": null,
      "title": "Files Schedule",
      "type": "string"
    },
    "db_schedule": {
      "default": null,
      "title": "Db Schedule",
      "type": "string"
    },
    "retain_files": {
      "default": null,
      "title": "Retain Files",
      "type": "integer"
    },
    "retain_db": {
      "default": null,
      "title": "Retain Db",
      "type": "integer"
    }
  },
  "title": "backup_updraft_schedule_setArguments",
  "type": "object"
}
```

</details>

<a id="tool-backup_updraft_settings_get-615bae58"></a>

## backup_updraft_settings_get

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Get UpdraftPlus plugin settings (remote storage, email notifications, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L186-L190) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "backup_updraft_settings_getArguments",
  "type": "object"
}
```

</details>

<a id="tool-backup_aio_export-412c4059"></a>

## backup_aio_export

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Trigger an All-in-One WP Migration export
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L192-L201) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "format": {
      "default": "file",
      "title": "Format",
      "type": "string"
    },
    "exclude_spam_comments": {
      "default": true,
      "title": "Exclude Spam Comments",
      "type": "boolean"
    },
    "exclude_post_revisions": {
      "default": false,
      "title": "Exclude Post Revisions",
      "type": "boolean"
    },
    "exclude_media": {
      "default": false,
      "title": "Exclude Media",
      "type": "boolean"
    }
  },
  "title": "backup_aio_exportArguments",
  "type": "object"
}
```

</details>

<a id="tool-backup_aio_import-35f661ed"></a>

## backup_aio_import

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Trigger an All-in-One WP Migration import from uploaded file
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L203-L209) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "file_path": {
      "title": "File Path",
      "type": "string"
    }
  },
  "required": [
    "file_path"
  ],
  "title": "backup_aio_importArguments",
  "type": "object"
}
```

</details>

<a id="tool-backup_duplicator_list-74f5406c"></a>

## backup_duplicator_list

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List Duplicator packages (backup archives)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L211-L215) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "backup_duplicator_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-backup_duplicator_create-849d0b86"></a>

## backup_duplicator_create

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a new Duplicator backup package
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L217-L226) · Schema: tools/list.

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
    "notes": {
      "default": null,
      "title": "Notes",
      "type": "string"
    },
    "archive_filter_dirs": {
      "default": null,
      "title": "Archive Filter Dirs",
      "type": "string"
    },
    "archive_filter_exts": {
      "default": null,
      "title": "Archive Filter Exts",
      "type": "string"
    }
  },
  "title": "backup_duplicator_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-backup_wpvivid_run-cfb3cf48"></a>

## backup_wpvivid_run

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Trigger a WPvivid backup
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L228-L234) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "type": {
      "default": "full",
      "title": "Type",
      "type": "string"
    }
  },
  "title": "backup_wpvivid_runArguments",
  "type": "object"
}
```

</details>

<a id="tool-backup_wpvivid_list-2b81732b"></a>

## backup_wpvivid_list

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List existing WPvivid backups
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L236-L240) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "backup_wpvivid_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-backup_get_status-8b2983b0"></a>

## backup_get_status

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Get universal backup status — checks all supported backup plugins for last backup info
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L242-L246) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "backup_get_statusArguments",
  "type": "object"
}
```

</details>

<a id="tool-backup_export_db_tables-b94ca589"></a>

## backup_export_db_tables

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Export specific database tables via companion plugin or provide WP-CLI/mysqldump commands
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L248-L255) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "tables": {
      "default": null,
      "items": {},
      "title": "Tables",
      "type": "array"
    },
    "format": {
      "default": "sql",
      "title": "Format",
      "type": "string"
    }
  },
  "title": "backup_export_db_tablesArguments",
  "type": "object"
}
```

</details>

<a id="tool-cdn_detect_service-3d245cea"></a>

## cdn_detect_service

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Detect which CDN service is active on the site (Cloudflare, Bunny, StackPath, KeyCDN, CloudFront, or none) by inspecting response headers
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L257-L261) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "cdn_detect_serviceArguments",
  "type": "object"
}
```

</details>

<a id="tool-cdn_cloudflare_purge-6bb216a9"></a>

## cdn_cloudflare_purge

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Purge Cloudflare cache via companion plugin endpoint or Cloudflare plugin REST API
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L263-L270) · Schema: tools/list.

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
    },
    "purge_everything": {
      "default": false,
      "title": "Purge Everything",
      "type": "boolean"
    }
  },
  "title": "cdn_cloudflare_purgeArguments",
  "type": "object"
}
```

</details>

<a id="tool-cdn_cloudflare_dev_mode_toggle-b47f201b"></a>

## cdn_cloudflare_dev_mode_toggle

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Toggle Cloudflare Development Mode on/off (bypasses cache for 3 hours)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L272-L278) · Schema: tools/list.

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
  "title": "cdn_cloudflare_dev_mode_toggleArguments",
  "type": "object"
}
```

</details>

<a id="tool-cdn_cloudflare_security_level-911ec0cb"></a>

## cdn_cloudflare_security_level

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Set Cloudflare security level (essentially_off, low, medium, high, under_attack)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L280-L286) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "level": {
      "title": "Level",
      "type": "string"
    }
  },
  "required": [
    "level"
  ],
  "title": "cdn_cloudflare_security_levelArguments",
  "type": "object"
}
```

</details>

<a id="tool-cdn_bunny_purge-b5fdce5a"></a>

## cdn_bunny_purge

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Purge Bunny CDN cache via companion plugin endpoint
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L288-L294) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "url": {
      "default": null,
      "title": "Url",
      "type": "string"
    }
  },
  "title": "cdn_bunny_purgeArguments",
  "type": "object"
}
```

</details>

<a id="tool-cdn_configure_wp_rocket_cdn-f4628dee"></a>

## cdn_configure_wp_rocket_cdn

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Configure CDN CNAME/URL in WP Rocket settings
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L296-L303) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "cdn_url": {
      "title": "Cdn Url",
      "type": "string"
    },
    "enabled": {
      "default": true,
      "title": "Enabled",
      "type": "boolean"
    }
  },
  "required": [
    "cdn_url"
  ],
  "title": "cdn_configure_wp_rocket_cdnArguments",
  "type": "object"
}
```

</details>

<a id="tool-cdn_configure_w3tc_cdn-8f4b1661"></a>

## cdn_configure_w3tc_cdn

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Configure CDN settings in W3 Total Cache
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L305-L313) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "cdn_url": {
      "title": "Cdn Url",
      "type": "string"
    },
    "cdn_type": {
      "default": "pull",
      "title": "Cdn Type",
      "type": "string"
    },
    "enabled": {
      "default": true,
      "title": "Enabled",
      "type": "boolean"
    }
  },
  "required": [
    "cdn_url"
  ],
  "title": "cdn_configure_w3tc_cdnArguments",
  "type": "object"
}
```

</details>

<a id="tool-cdn_offload_media_s3-4cc92159"></a>

## cdn_offload_media_s3

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Configure WP Offload Media (WP Offload S3) settings for offloading media to Amazon S3 or compatible storage
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L315-L326) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "provider": {
      "default": null,
      "title": "Provider",
      "type": "string"
    },
    "bucket": {
      "default": null,
      "title": "Bucket",
      "type": "string"
    },
    "region": {
      "default": null,
      "title": "Region",
      "type": "string"
    },
    "copy_to_s3": {
      "default": true,
      "title": "Copy To S3",
      "type": "boolean"
    },
    "serve_from_s3": {
      "default": true,
      "title": "Serve From S3",
      "type": "boolean"
    },
    "remove_local_file": {
      "default": false,
      "title": "Remove Local File",
      "type": "boolean"
    }
  },
  "title": "cdn_offload_media_s3Arguments",
  "type": "object"
}
```

</details>

<a id="tool-cdn_offload_media_cloudinary-50c38079"></a>

## cdn_offload_media_cloudinary

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Configure Cloudinary plugin settings for media offloading and transformation
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L328-L337) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "cloud_name": {
      "default": null,
      "title": "Cloud Name",
      "type": "string"
    },
    "auto_sync": {
      "default": true,
      "title": "Auto Sync",
      "type": "boolean"
    },
    "image_optimization": {
      "default": true,
      "title": "Image Optimization",
      "type": "boolean"
    },
    "lazy_loading": {
      "default": false,
      "title": "Lazy Loading",
      "type": "boolean"
    }
  },
  "title": "cdn_offload_media_cloudinaryArguments",
  "type": "object"
}
```

</details>

<a id="tool-cdn_get_status-35efe44a"></a>

## cdn_get_status

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Check if CDN is currently working by inspecting headers and response patterns
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L339-L343) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "cdn_get_statusArguments",
  "type": "object"
}
```

</details>

<a id="tool-cdn_configure_url_rewriting-5c03e631"></a>

## cdn_configure_url_rewriting

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Configure media URL rewriting to use CDN domain via functions.php or plugin settings
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L345-L353) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "cdn_url": {
      "title": "Cdn Url",
      "type": "string"
    },
    "include_dirs": {
      "default": "wp-content,wp-includes",
      "title": "Include Dirs",
      "type": "string"
    },
    "exclude_extensions": {
      "default": "php",
      "title": "Exclude Extensions",
      "type": "string"
    }
  },
  "required": [
    "cdn_url"
  ],
  "title": "cdn_configure_url_rewritingArguments",
  "type": "object"
}
```

</details>

<a id="tool-cdn_test_response_headers-70e657e0"></a>

## cdn_test_response_headers

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Test CDN response headers for a given URL to verify caching, cache-hit status, and CDN identification
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L355-L361) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "url": {
      "default": null,
      "title": "Url",
      "type": "string"
    }
  },
  "title": "cdn_test_response_headersArguments",
  "type": "object"
}
```

</details>

<a id="tool-cron_list_events-5ad3067a"></a>

## cron_list_events

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List all scheduled WordPress cron events with hook names, schedules, and next run times
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L363-L369) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "search": {
      "default": null,
      "title": "Search",
      "type": "string"
    }
  },
  "title": "cron_list_eventsArguments",
  "type": "object"
}
```

</details>

<a id="tool-cron_list_schedules-bcbfa598"></a>

## cron_list_schedules

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List all registered cron schedule intervals (hourly, daily, custom, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L371-L375) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "cron_list_schedulesArguments",
  "type": "object"
}
```

</details>

<a id="tool-cron_create_event-d3c1cada"></a>

## cron_create_event

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Schedule a new WordPress cron event
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L377-L386) · Schema: tools/list.

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
    "recurrence": {
      "default": null,
      "title": "Recurrence",
      "type": "string"
    },
    "timestamp": {
      "default": null,
      "title": "Timestamp",
      "type": "integer"
    },
    "args": {
      "default": null,
      "items": {},
      "title": "Args",
      "type": "array"
    }
  },
  "required": [
    "hook"
  ],
  "title": "cron_create_eventArguments",
  "type": "object"
}
```

</details>

<a id="tool-cron_delete_event-64a0b302"></a>

## cron_delete_event

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] Tool tool. Unschedule/delete a WordPress cron event by hook name
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L388-L395) · Schema: tools/list.

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
    "timestamp": {
      "default": null,
      "title": "Timestamp",
      "type": "integer"
    }
  },
  "required": [
    "hook"
  ],
  "title": "cron_delete_eventArguments",
  "type": "object"
}
```

</details>

<a id="tool-cron_run_now-feb1d6e3"></a>

## cron_run_now

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Execute a cron event immediately (trigger the hook now)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L397-L403) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "hook": {
      "title": "Hook",
      "type": "string"
    }
  },
  "required": [
    "hook"
  ],
  "title": "cron_run_nowArguments",
  "type": "object"
}
```

</details>

<a id="tool-cron_next_run-638bb11e"></a>

## cron_next_run

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Get the next scheduled run time for a specific cron event
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L405-L411) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "hook": {
      "title": "Hook",
      "type": "string"
    }
  },
  "required": [
    "hook"
  ],
  "title": "cron_next_runArguments",
  "type": "object"
}
```

</details>

<a id="tool-cron_register_schedule-3ed10222"></a>

## cron_register_schedule

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Register a custom cron schedule interval
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L413-L421) · Schema: tools/list.

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
    "interval": {
      "title": "Interval",
      "type": "integer"
    },
    "display": {
      "title": "Display",
      "type": "string"
    }
  },
  "required": [
    "name",
    "interval",
    "display"
  ],
  "title": "cron_register_scheduleArguments",
  "type": "object"
}
```

</details>

<a id="tool-cron_wp_cron_status-da6eb95a"></a>

## cron_wp_cron_status

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Check if WP-Cron is working correctly (DISABLE_WP_CRON status, missed events, spawn test)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L423-L427) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "cron_wp_cron_statusArguments",
  "type": "object"
}
```

</details>

<a id="tool-cron_disable_wp_cron-1da68ae1"></a>

## cron_disable_wp_cron

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Get instructions to disable WP-Cron and use a real server cron job instead
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L429-L435) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "interval_minutes": {
      "default": 5,
      "title": "Interval Minutes",
      "type": "integer"
    }
  },
  "title": "cron_disable_wp_cronArguments",
  "type": "object"
}
```

</details>

<a id="tool-cron_detect_plugin-34d14694"></a>

## cron_detect_plugin

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Detect if WP-Crontrol or Advanced Cron Manager is installed
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L437-L441) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "cron_detect_pluginArguments",
  "type": "object"
}
```

</details>

<a id="tool-cron_crontrol_list-5579abcd"></a>

## cron_crontrol_list

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List cron events via WP-Crontrol plugin (if installed)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L443-L447) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "cron_crontrol_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-cron_crontrol_add-0b28b295"></a>

## cron_crontrol_add

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Add a new cron event via WP-Crontrol plugin (if installed)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L449-L458) · Schema: tools/list.

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
    "recurrence": {
      "default": null,
      "title": "Recurrence",
      "type": "string"
    },
    "next_run": {
      "default": "now",
      "title": "Next Run",
      "type": "string"
    },
    "php_code": {
      "default": null,
      "title": "Php Code",
      "type": "string"
    }
  },
  "required": [
    "hook"
  ],
  "title": "cron_crontrol_addArguments",
  "type": "object"
}
```

</details>

<a id="tool-db_tables_list-81c8a4f2"></a>

## db_tables_list

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List all database tables with their row counts and sizes via companion plugin
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L460-L464) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "db_tables_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-db_table_size-ef2392a9"></a>

## db_table_size

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Get size and row count for a specific database table
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L466-L472) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "table": {
      "title": "Table",
      "type": "string"
    }
  },
  "required": [
    "table"
  ],
  "title": "db_table_sizeArguments",
  "type": "object"
}
```

</details>

<a id="tool-db_query_select-6d3a8375"></a>

## db_query_select

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Execute a safe SELECT query via companion plugin (only SELECT statements allowed)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L474-L481) · Schema: tools/list.

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
    "limit": {
      "default": 100,
      "title": "Limit",
      "type": "integer"
    }
  },
  "required": [
    "query"
  ],
  "title": "db_query_selectArguments",
  "type": "object"
}
```

</details>

<a id="tool-db_query_count-e05a3abc"></a>

## db_query_count

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Execute a COUNT query via companion plugin
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L483-L490) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "table": {
      "title": "Table",
      "type": "string"
    },
    "where": {
      "default": null,
      "title": "Where",
      "type": "string"
    }
  },
  "required": [
    "table"
  ],
  "title": "db_query_countArguments",
  "type": "object"
}
```

</details>

<a id="tool-db_optimize_tables-61d8dc31"></a>

## db_optimize_tables

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Run OPTIMIZE TABLE on specified tables or all tables via companion plugin
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L492-L498) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "tables": {
      "default": null,
      "items": {},
      "title": "Tables",
      "type": "array"
    }
  },
  "title": "db_optimize_tablesArguments",
  "type": "object"
}
```

</details>

<a id="tool-db_repair_tables-95e5cfda"></a>

## db_repair_tables

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Run REPAIR TABLE on specified tables or all tables via companion plugin
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L500-L506) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "tables": {
      "default": null,
      "items": {},
      "title": "Tables",
      "type": "array"
    }
  },
  "title": "db_repair_tablesArguments",
  "type": "object"
}
```

</details>

<a id="tool-db_get_options-fa3efb57"></a>

## db_get_options

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Read one or more values from the wp_options table
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L508-L514) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "option_names": {
      "items": {},
      "title": "Option Names",
      "type": "array"
    }
  },
  "required": [
    "option_names"
  ],
  "title": "db_get_optionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-db_set_option-dcda64d4"></a>

## db_set_option

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Set a value in the wp_options table
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L516-L524) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

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
    },
    "autoload": {
      "default": "yes",
      "title": "Autoload",
      "type": "string"
    }
  },
  "required": [
    "option_name",
    "option_value"
  ],
  "title": "db_set_optionArguments",
  "type": "object"
}
```

</details>

<a id="tool-db_delete_option-e5e66c22"></a>

## db_delete_option

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] Tool tool. Delete an option from the wp_options table
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L526-L532) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

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
  "title": "db_delete_optionArguments",
  "type": "object"
}
```

</details>

<a id="tool-db_search_options-d1078e25"></a>

## db_search_options

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Search wp_options by key pattern (SQL LIKE pattern)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L534-L541) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "pattern": {
      "title": "Pattern",
      "type": "string"
    },
    "limit": {
      "default": 50,
      "title": "Limit",
      "type": "integer"
    }
  },
  "required": [
    "pattern"
  ],
  "title": "db_search_optionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-db_get_autoloaded_size-d52b9fc0"></a>

## db_get_autoloaded_size

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Get total size of autoloaded options in wp_options (large autoload can slow sites)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L543-L547) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "db_get_autoloaded_sizeArguments",
  "type": "object"
}
```

</details>

<a id="tool-db_cleanup_orphaned_postmeta-2f282697"></a>

## db_cleanup_orphaned_postmeta

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Find and delete postmeta entries whose parent post no longer exists
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L549-L555) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "dry_run": {
      "default": true,
      "title": "Dry Run",
      "type": "boolean"
    }
  },
  "title": "db_cleanup_orphaned_postmetaArguments",
  "type": "object"
}
```

</details>

<a id="tool-db_cleanup_orphaned_commentmeta-fb48d9a3"></a>

## db_cleanup_orphaned_commentmeta

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Find and delete commentmeta entries whose parent comment no longer exists
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L557-L563) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "dry_run": {
      "default": true,
      "title": "Dry Run",
      "type": "boolean"
    }
  },
  "title": "db_cleanup_orphaned_commentmetaArguments",
  "type": "object"
}
```

</details>

<a id="tool-db_cleanup_orphaned_termmeta-40d5e627"></a>

## db_cleanup_orphaned_termmeta

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Find and delete termmeta entries whose parent term no longer exists
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L565-L571) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "dry_run": {
      "default": true,
      "title": "Dry Run",
      "type": "boolean"
    }
  },
  "title": "db_cleanup_orphaned_termmetaArguments",
  "type": "object"
}
```

</details>

<a id="tool-db_get_table_prefix-7852fab8"></a>

## db_get_table_prefix

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Get the current WordPress database table prefix
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L573-L577) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "db_get_table_prefixArguments",
  "type": "object"
}
```

</details>

<a id="tool-dev_wp_cli_run-4b27a400"></a>

## dev_wp_cli_run

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Execute a WP-CLI command via companion plugin endpoint (requires companion plugin on the server)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L579-L586) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "command": {
      "title": "Command",
      "type": "string"
    },
    "args": {
      "default": null,
      "items": {},
      "title": "Args",
      "type": "array"
    }
  },
  "required": [
    "command"
  ],
  "title": "dev_wp_cli_runArguments",
  "type": "object"
}
```

</details>

<a id="tool-dev_debug_mode_get-c412c764"></a>

## dev_debug_mode_get

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Read current WP_DEBUG and related debug constant status
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L588-L592) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "dev_debug_mode_getArguments",
  "type": "object"
}
```

</details>

<a id="tool-dev_debug_mode_set-a8a4482d"></a>

## dev_debug_mode_set

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Enable or disable WP_DEBUG and related constants via companion plugin (modifies wp-config.php)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L594-L604) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "wp_debug": {
      "default": null,
      "title": "Wp Debug",
      "type": "boolean"
    },
    "wp_debug_log": {
      "default": null,
      "title": "Wp Debug Log",
      "type": "boolean"
    },
    "wp_debug_display": {
      "default": null,
      "title": "Wp Debug Display",
      "type": "boolean"
    },
    "script_debug": {
      "default": null,
      "title": "Script Debug",
      "type": "boolean"
    },
    "savequeries": {
      "default": null,
      "title": "Savequeries",
      "type": "boolean"
    }
  },
  "title": "dev_debug_mode_setArguments",
  "type": "object"
}
```

</details>

<a id="tool-dev_debug_log_read-9310183b"></a>

## dev_debug_log_read

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Read the WordPress debug.log file contents via companion plugin
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L606-L613) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "lines": {
      "default": 100,
      "title": "Lines",
      "type": "integer"
    },
    "search": {
      "default": null,
      "title": "Search",
      "type": "string"
    }
  },
  "title": "dev_debug_log_readArguments",
  "type": "object"
}
```

</details>

<a id="tool-dev_debug_log_clear-be0896c4"></a>

## dev_debug_log_clear

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Clear/truncate the WordPress debug.log file via companion plugin
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L615-L619) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "dev_debug_log_clearArguments",
  "type": "object"
}
```

</details>

<a id="tool-dev_error_log_read-d4e761f4"></a>

## dev_error_log_read

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Read the PHP error log file via companion plugin
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L621-L628) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "lines": {
      "default": 100,
      "title": "Lines",
      "type": "integer"
    },
    "search": {
      "default": null,
      "title": "Search",
      "type": "string"
    }
  },
  "title": "dev_error_log_readArguments",
  "type": "object"
}
```

</details>

<a id="tool-dev_query_monitor_data-a705eabc"></a>

## dev_query_monitor_data

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Retrieve Query Monitor plugin data (queries, hooks, HTTP requests, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L630-L636) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "panel": {
      "default": "all",
      "title": "Panel",
      "type": "string"
    }
  },
  "title": "dev_query_monitor_dataArguments",
  "type": "object"
}
```

</details>

<a id="tool-dev_code_snippets_list-674d8fa7"></a>

## dev_code_snippets_list

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List all code snippets from the Code Snippets plugin
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L638-L645) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

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
      "default": 50,
      "title": "Per Page",
      "type": "integer"
    }
  },
  "title": "dev_code_snippets_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-dev_code_snippets_create-37b37882"></a>

## dev_code_snippets_create

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a new code snippet via the Code Snippets plugin
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L647-L658) · Schema: tools/list.

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
    "code": {
      "title": "Code",
      "type": "string"
    },
    "description": {
      "default": null,
      "title": "Description",
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
    }
  },
  "required": [
    "name",
    "code"
  ],
  "title": "dev_code_snippets_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-dev_code_snippets_update-7b3e6d09"></a>

## dev_code_snippets_update

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Update an existing code snippet
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L660-L671) · Schema: tools/list.

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
    "code": {
      "default": null,
      "title": "Code",
      "type": "string"
    },
    "description": {
      "default": null,
      "title": "Description",
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
    }
  },
  "required": [
    "id"
  ],
  "title": "dev_code_snippets_updateArguments",
  "type": "object"
}
```

</details>

<a id="tool-dev_code_snippets_toggle-5d83940a"></a>

## dev_code_snippets_toggle

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Activate or deactivate a code snippet
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L673-L680) · Schema: tools/list.

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
    "active": {
      "title": "Active",
      "type": "boolean"
    }
  },
  "required": [
    "id",
    "active"
  ],
  "title": "dev_code_snippets_toggleArguments",
  "type": "object"
}
```

</details>

<a id="tool-dev_code_snippets_delete-a5c54f33"></a>

## dev_code_snippets_delete

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] Tool tool. Delete a code snippet
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L682-L688) · Schema: tools/list.

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
  "title": "dev_code_snippets_deleteArguments",
  "type": "object"
}
```

</details>

<a id="tool-dev_hooks_list-a89181b2"></a>

## dev_hooks_list

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List registered WordPress hooks/filters via companion plugin (actions and filters currently registered)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L690-L697) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "type": {
      "default": "all",
      "title": "Type",
      "type": "string"
    },
    "search": {
      "default": null,
      "title": "Search",
      "type": "string"
    }
  },
  "title": "dev_hooks_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-dev_constants_get-50c1a64c"></a>

## dev_constants_get

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Read WordPress constants (WP_DEBUG, ABSPATH, etc.) via companion plugin
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L699-L705) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "constants": {
      "default": null,
      "items": {},
      "title": "Constants",
      "type": "array"
    }
  },
  "title": "dev_constants_getArguments",
  "type": "object"
}
```

</details>

<a id="tool-dev_constants_set-8b3dfafe"></a>

## dev_constants_set

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Set/update WordPress constants in wp-config.php via companion plugin
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L707-L714) · Schema: tools/list.

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
    "value": {
      "title": "Value",
      "type": "string"
    }
  },
  "required": [
    "name",
    "value"
  ],
  "title": "dev_constants_setArguments",
  "type": "object"
}
```

</details>

<a id="tool-dev_wp_config_read-f0adf5cf"></a>

## dev_wp_config_read

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Read wp-config.php contents via companion plugin (sensitive data may be redacted)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L716-L720) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "dev_wp_config_readArguments",
  "type": "object"
}
```

</details>

<a id="tool-dev_file_read-a4e7284f"></a>

## dev_file_read

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Read a theme or plugin file via companion plugin (restricted to wp-content directory)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L722-L728) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "path": {
      "title": "Path",
      "type": "string"
    }
  },
  "required": [
    "path"
  ],
  "title": "dev_file_readArguments",
  "type": "object"
}
```

</details>

<a id="tool-dev_file_write-ee9d1632"></a>

## dev_file_write

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Write/update a theme or plugin file via companion plugin (restricted to wp-content directory)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L730-L738) · Schema: tools/list.

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
    "content": {
      "title": "Content",
      "type": "string"
    },
    "backup": {
      "default": true,
      "title": "Backup",
      "type": "boolean"
    }
  },
  "required": [
    "path",
    "content"
  ],
  "title": "dev_file_writeArguments",
  "type": "object"
}
```

</details>

<a id="tool-dev_theme_file_list-dc737f13"></a>

## dev_theme_file_list

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List files in the active theme directory via companion plugin or theme file editor REST API
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L740-L746) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "subdirectory": {
      "default": null,
      "title": "Subdirectory",
      "type": "string"
    }
  },
  "title": "dev_theme_file_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-dev_eval_php-7a784ebf"></a>

## dev_eval_php

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Execute arbitrary PHP code via companion plugin. Use with extreme caution! Code runs with full WordPress context.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L748-L754) · Schema: tools/list.

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
  "title": "dev_eval_phpArguments",
  "type": "object"
}
```

</details>

<a id="tool-multisite_detect-22221c33"></a>

## multisite_detect

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Check if the WordPress installation is a multisite network
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L756-L760) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "multisite_detectArguments",
  "type": "object"
}
```

</details>

<a id="tool-multisite_sites_list-023e342c"></a>

## multisite_sites_list

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List all sites in the multisite network (requires network admin privileges)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L762-L771) · Schema: tools/list.

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
      "default": "all",
      "title": "Status",
      "type": "string"
    }
  },
  "title": "multisite_sites_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-multisite_site_create-8a0ebb28"></a>

## multisite_site_create

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a new site in the multisite network
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L773-L783) · Schema: tools/list.

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
    "domain": {
      "default": null,
      "title": "Domain",
      "type": "string"
    },
    "path": {
      "default": null,
      "title": "Path",
      "type": "string"
    },
    "admin_user_id": {
      "default": null,
      "title": "Admin User Id",
      "type": "integer"
    },
    "options": {
      "additionalProperties": true,
      "default": null,
      "title": "Options",
      "type": "object"
    }
  },
  "required": [
    "title"
  ],
  "title": "multisite_site_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-multisite_site_update-0c572a29"></a>

## multisite_site_update

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Update settings for a specific site in the network
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L785-L797) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "site_id": {
      "title": "Site Id",
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
    "domain": {
      "default": null,
      "title": "Domain",
      "type": "string"
    },
    "path": {
      "default": null,
      "title": "Path",
      "type": "string"
    },
    "public": {
      "default": null,
      "title": "Public",
      "type": "integer"
    },
    "language": {
      "default": null,
      "title": "Language",
      "type": "string"
    }
  },
  "required": [
    "site_id"
  ],
  "title": "multisite_site_updateArguments",
  "type": "object"
}
```

</details>

<a id="tool-multisite_site_delete-8783db7a"></a>

## multisite_site_delete

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] Tool tool. Delete a site from the multisite network (irreversible)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L799-L806) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "site_id": {
      "title": "Site Id",
      "type": "integer"
    },
    "drop_tables": {
      "default": false,
      "title": "Drop Tables",
      "type": "boolean"
    }
  },
  "required": [
    "site_id"
  ],
  "title": "multisite_site_deleteArguments",
  "type": "object"
}
```

</details>

<a id="tool-multisite_site_activate-4ccb322d"></a>

## multisite_site_activate

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Activate a deactivated site in the network
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L808-L814) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "site_id": {
      "title": "Site Id",
      "type": "integer"
    }
  },
  "required": [
    "site_id"
  ],
  "title": "multisite_site_activateArguments",
  "type": "object"
}
```

</details>

<a id="tool-multisite_site_deactivate-ebc67a7e"></a>

## multisite_site_deactivate

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Deactivate (suspend) a site in the network without deleting it
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L816-L822) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "site_id": {
      "title": "Site Id",
      "type": "integer"
    }
  },
  "required": [
    "site_id"
  ],
  "title": "multisite_site_deactivateArguments",
  "type": "object"
}
```

</details>

<a id="tool-multisite_site_archive-2508042d"></a>

## multisite_site_archive

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Archive a site in the network (makes it inaccessible but preserved)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L824-L831) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "site_id": {
      "title": "Site Id",
      "type": "integer"
    },
    "archive": {
      "default": true,
      "title": "Archive",
      "type": "boolean"
    }
  },
  "required": [
    "site_id"
  ],
  "title": "multisite_site_archiveArguments",
  "type": "object"
}
```

</details>

<a id="tool-multisite_users_list-b6c44eb1"></a>

## multisite_users_list

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List users across the multisite network (network-wide)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L833-L842) · Schema: tools/list.

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
    "role": {
      "default": null,
      "title": "Role",
      "type": "string"
    }
  },
  "title": "multisite_users_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-multisite_user_add_to_site-b6a16dd6"></a>

## multisite_user_add_to_site

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Add an existing network user to a specific site with a given role
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L844-L852) · Schema: tools/list.

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
    "site_id": {
      "title": "Site Id",
      "type": "integer"
    },
    "role": {
      "title": "Role",
      "type": "string"
    }
  },
  "required": [
    "user_id",
    "site_id",
    "role"
  ],
  "title": "multisite_user_add_to_siteArguments",
  "type": "object"
}
```

</details>

<a id="tool-multisite_user_remove_from_site-5bacb83a"></a>

## multisite_user_remove_from_site

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] Tool tool. Remove a user from a specific site in the network (does not delete the user)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L854-L861) · Schema: tools/list.

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
    "site_id": {
      "title": "Site Id",
      "type": "integer"
    }
  },
  "required": [
    "user_id",
    "site_id"
  ],
  "title": "multisite_user_remove_from_siteArguments",
  "type": "object"
}
```

</details>

<a id="tool-multisite_themes_network_enable-5c1a3094"></a>

## multisite_themes_network_enable

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Enable or disable a theme network-wide so subsites can use it
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L863-L870) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "theme": {
      "title": "Theme",
      "type": "string"
    },
    "enabled": {
      "title": "Enabled",
      "type": "boolean"
    }
  },
  "required": [
    "theme",
    "enabled"
  ],
  "title": "multisite_themes_network_enableArguments",
  "type": "object"
}
```

</details>

<a id="tool-multisite_plugins_network_activate-8362a6b5"></a>

## multisite_plugins_network_activate

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Network-activate or deactivate a plugin across all sites
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L872-L879) · Schema: tools/list.

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
    "activate": {
      "title": "Activate",
      "type": "boolean"
    }
  },
  "required": [
    "plugin",
    "activate"
  ],
  "title": "multisite_plugins_network_activateArguments",
  "type": "object"
}
```

</details>

<a id="tool-multisite_network_settings_get-ff97ce2f"></a>

## multisite_network_settings_get

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Get network-wide settings (registration, upload limits, allowed themes, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L881-L885) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "multisite_network_settings_getArguments",
  "type": "object"
}
```

</details>

<a id="tool-multisite_network_settings_update-159bbd9b"></a>

## multisite_network_settings_update

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Update network-wide settings
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L887-L901) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "registration": {
      "default": null,
      "title": "Registration",
      "type": "string"
    },
    "upload_max_filesize": {
      "default": null,
      "title": "Upload Max Filesize",
      "type": "integer"
    },
    "blog_upload_space": {
      "default": null,
      "title": "Blog Upload Space",
      "type": "integer"
    },
    "upload_filetypes": {
      "default": null,
      "title": "Upload Filetypes",
      "type": "string"
    },
    "site_name": {
      "default": null,
      "title": "Site Name",
      "type": "string"
    },
    "admin_email": {
      "default": null,
      "title": "Admin Email",
      "type": "string"
    },
    "first_post": {
      "default": null,
      "title": "First Post",
      "type": "string"
    },
    "add_new_users": {
      "default": null,
      "title": "Add New Users",
      "type": "boolean"
    },
    "menu_items": {
      "additionalProperties": true,
      "default": null,
      "title": "Menu Items",
      "type": "object"
    }
  },
  "title": "multisite_network_settings_updateArguments",
  "type": "object"
}
```

</details>

<a id="tool-privacy_policy_page_get-cd018d5a"></a>

## privacy_policy_page_get

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Get the designated privacy policy page (ID, title, URL, content)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L903-L907) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "privacy_policy_page_getArguments",
  "type": "object"
}
```

</details>

<a id="tool-privacy_policy_page_set-30c8ff0c"></a>

## privacy_policy_page_set

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Set the privacy policy page by page ID
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L909-L915) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "privacy_policy_page_setArguments",
  "type": "object"
}
```

</details>

<a id="tool-privacy_export_request_create-71a44fe5"></a>

## privacy_export_request_create

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a personal data export request for a user (GDPR Article 15 — Right of Access)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L917-L923) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "email": {
      "title": "Email",
      "type": "string"
    }
  },
  "required": [
    "email"
  ],
  "title": "privacy_export_request_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-privacy_erasure_request_create-9334ac27"></a>

## privacy_erasure_request_create

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a personal data erasure request for a user (GDPR Article 17 — Right to Erasure)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L925-L931) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "email": {
      "title": "Email",
      "type": "string"
    }
  },
  "required": [
    "email"
  ],
  "title": "privacy_erasure_request_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-privacy_requests_list-28d968c3"></a>

## privacy_requests_list

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List pending privacy data requests (exports and erasures)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L933-L941) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "type": {
      "default": "all",
      "title": "Type",
      "type": "string"
    },
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
  "title": "privacy_requests_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-privacy_cookie_banner_detect-4c33b285"></a>

## privacy_cookie_banner_detect

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Detect installed cookie consent/banner plugins (CookieYes, Complianz, Cookie Notice, GDPR Cookie Consent, CookieBot, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L943-L947) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "privacy_cookie_banner_detectArguments",
  "type": "object"
}
```

</details>

<a id="tool-privacy_cookie_banner_configure-8f6e615b"></a>

## privacy_cookie_banner_configure

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Configure cookie consent banner settings for the detected plugin
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L949-L962) · Schema: tools/list.

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
    "banner_text": {
      "default": null,
      "title": "Banner Text",
      "type": "string"
    },
    "accept_text": {
      "default": null,
      "title": "Accept Text",
      "type": "string"
    },
    "reject_text": {
      "default": null,
      "title": "Reject Text",
      "type": "string"
    },
    "policy_url": {
      "default": null,
      "title": "Policy Url",
      "type": "string"
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
    "auto_block_scripts": {
      "default": null,
      "title": "Auto Block Scripts",
      "type": "boolean"
    }
  },
  "required": [
    "plugin"
  ],
  "title": "privacy_cookie_banner_configureArguments",
  "type": "object"
}
```

</details>

<a id="tool-privacy_cookie_categories_set-bcf6a394"></a>

## privacy_cookie_categories_set

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Configure cookie categories (necessary, analytics, marketing, preferences/functional)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L964-L971) · Schema: tools/list.

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
    "categories": {
      "items": {},
      "title": "Categories",
      "type": "array"
    }
  },
  "required": [
    "plugin",
    "categories"
  ],
  "title": "privacy_cookie_categories_setArguments",
  "type": "object"
}
```

</details>

<a id="tool-privacy_data_retention_configure-9361f538"></a>

## privacy_data_retention_configure

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Configure data retention rules (comment data, WooCommerce orders, form entries, analytics)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L973-L983) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "comments_retention_days": {
      "default": null,
      "title": "Comments Retention Days",
      "type": "integer"
    },
    "wc_orders_retention_days": {
      "default": null,
      "title": "Wc Orders Retention Days",
      "type": "integer"
    },
    "form_entries_retention_days": {
      "default": null,
      "title": "Form Entries Retention Days",
      "type": "integer"
    },
    "analytics_retention_days": {
      "default": null,
      "title": "Analytics Retention Days",
      "type": "integer"
    },
    "inactive_user_notification_days": {
      "default": null,
      "title": "Inactive User Notification Days",
      "type": "integer"
    }
  },
  "title": "privacy_data_retention_configureArguments",
  "type": "object"
}
```

</details>

<a id="tool-privacy_consent_log_list-58553443"></a>

## privacy_consent_log_list

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List cookie consent log entries (requires a consent logging plugin)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L985-L992) · Schema: tools/list.

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
  "title": "privacy_consent_log_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-privacy_dpa_info-041210a3"></a>

## privacy_dpa_info

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Get data processing agreement (DPA) information and checklist for GDPR compliance
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L994-L998) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "privacy_dpa_infoArguments",
  "type": "object"
}
```

</details>

<a id="tool-privacy_ccpa_configure-bd2b4909"></a>

## privacy_ccpa_configure

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Configure California Consumer Privacy Act (CCPA) / CPRA settings — 'Do Not Sell' link, opt-out mechanism
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1000-L1010) · Schema: tools/list.

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
    "enable_do_not_sell": {
      "default": null,
      "title": "Enable Do Not Sell",
      "type": "boolean"
    },
    "do_not_sell_text": {
      "default": "Do Not Sell My Personal Information",
      "title": "Do Not Sell Text",
      "type": "string"
    },
    "do_not_sell_url": {
      "default": null,
      "title": "Do Not Sell Url",
      "type": "string"
    },
    "gpc_support": {
      "default": null,
      "title": "Gpc Support",
      "type": "boolean"
    }
  },
  "required": [
    "plugin"
  ],
  "title": "privacy_ccpa_configureArguments",
  "type": "object"
}
```

</details>

<a id="tool-clone_analyze_url-bd95b438"></a>

## clone_analyze_url

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Fetch any website URL and extract its full structure: colors, fonts, layout sections, images, and text content. Returns a structured JSON analysis for cloning into WordPress/Elementor.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1012-L1018) · Schema: tools/list.

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
  "title": "clone_analyze_urlArguments",
  "type": "object"
}
```

</details>

<a id="tool-clone_analyze_full_site-bdbcf046"></a>

## clone_analyze_full_site

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Crawl multiple pages of a website to extract global structure: all page URLs, menu, footer, global colors, and fonts.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1020-L1027) · Schema: tools/list.

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
    "max_pages": {
      "default": null,
      "title": "Max Pages",
      "type": "integer"
    }
  },
  "required": [
    "url"
  ],
  "title": "clone_analyze_full_siteArguments",
  "type": "object"
}
```

</details>

<a id="tool-clone_download_images-b5ebddf2"></a>

## clone_download_images

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp, \_req.get, r.raise\_for\_status, r.headers.get('Content-Type', 'image/jpeg').split(';')\[0\].strip, wp.upload\_media, media.get, img\_url.rstrip('/').split('/')\[-1\].split.

```text
[READ] Tool tool. Download images from analyzed URLs and upload them to the WordPress Media Library. Returns a mapping of original URL to new WP media ID and URL.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1029-L1048) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "image_urls": {
      "items": {},
      "title": "Image Urls",
      "type": "array"
    },
    "post_id": {
      "default": null,
      "title": "Post Id",
      "type": "integer"
    }
  },
  "required": [
    "image_urls"
  ],
  "title": "clone_download_imagesArguments",
  "type": "object"
}
```

</details>

<a id="tool-clone_extract_colors-5a8d51f6"></a>

## clone_extract_colors

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Extract the color palette from a website URL. Returns primary, secondary, accent, background, and text colors with usage counts.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1050-L1056) · Schema: tools/list.

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
  "title": "clone_extract_colorsArguments",
  "type": "object"
}
```

</details>

<a id="tool-clone_extract_fonts-8e8d9618"></a>

## clone_extract_fonts

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Extract font families used on a website URL. Returns heading font, body font, and full list with weights.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1058-L1064) · Schema: tools/list.

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
  "title": "clone_extract_fontsArguments",
  "type": "object"
}
```

</details>

<a id="tool-clone_extract_menu-34171ab7"></a>

## clone_extract_menu

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Extract the navigation menu structure from a website URL, including nested sub-menu items.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1066-L1072) · Schema: tools/list.

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
  "title": "clone_extract_menuArguments",
  "type": "object"
}
```

</details>

<a id="tool-clone_extract_footer-f1328051"></a>

## clone_extract_footer

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Extract footer content (text, links, HTML) from a website URL.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1074-L1080) · Schema: tools/list.

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
  "title": "clone_extract_footerArguments",
  "type": "object"
}
```

</details>

<a id="tool-clone_build_page_plan-89924e36"></a>

## clone_build_page_plan

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. From a clone analysis result, create an ordered Elementor page-building plan: which sections to create, which widgets to use, and in what order.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1082-L1088) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "analysis": {
      "additionalProperties": true,
      "title": "Analysis",
      "type": "object"
    }
  },
  "required": [
    "analysis"
  ],
  "title": "clone_build_page_planArguments",
  "type": "object"
}
```

</details>

<a id="tool-clone_create_page_from_url-574540c8"></a>

## clone_create_page_from_url

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().post, \_wp.

```text
[WRITE] Tool tool. Full automated cloning: analyze a URL, download its images, create a WordPress page, and build Elementor sections/widgets to replicate the original layout.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1090-L1098) · Schema: tools/list.

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
    "page_title": {
      "default": null,
      "title": "Page Title",
      "type": "string"
    },
    "page_status": {
      "default": null,
      "title": "Page Status",
      "type": "string"
    }
  },
  "required": [
    "source_url"
  ],
  "title": "clone_create_page_from_urlArguments",
  "type": "object"
}
```

</details>

<a id="tool-clone_replicate_section-2eaad349"></a>

## clone_replicate_section

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Replicate a specific section type (hero, features, pricing, etc.) from analysis data into an existing Elementor page.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1100-L1108) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "section_data": {
      "additionalProperties": true,
      "title": "Section Data",
      "type": "object"
    },
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "position": {
      "default": null,
      "title": "Position",
      "type": "integer"
    }
  },
  "required": [
    "section_data",
    "page_id"
  ],
  "title": "clone_replicate_sectionArguments",
  "type": "object"
}
```

</details>

<a id="tool-clone_map_colors_to_kit-77c336fb"></a>

## clone_map_colors_to_kit

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Apply extracted colors to the Elementor global kit (site-wide color settings).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1110-L1120) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "primary": {
      "title": "Primary",
      "type": "string"
    },
    "secondary": {
      "default": null,
      "title": "Secondary",
      "type": "string"
    },
    "accent": {
      "default": null,
      "title": "Accent",
      "type": "string"
    },
    "text": {
      "default": null,
      "title": "Text",
      "type": "string"
    },
    "background": {
      "default": null,
      "title": "Background",
      "type": "string"
    }
  },
  "required": [
    "primary"
  ],
  "title": "clone_map_colors_to_kitArguments",
  "type": "object"
}
```

</details>

<a id="tool-clone_map_fonts_to_kit-c542eff5"></a>

## clone_map_fonts_to_kit

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Apply extracted fonts to the Elementor global kit (heading and body typography).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1122-L1129) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "heading_font": {
      "title": "Heading Font",
      "type": "string"
    },
    "body_font": {
      "title": "Body Font",
      "type": "string"
    }
  },
  "required": [
    "heading_font",
    "body_font"
  ],
  "title": "clone_map_fonts_to_kitArguments",
  "type": "object"
}
```

</details>

<a id="tool-clone_full_site-3b13b806"></a>

## clone_full_site

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Master tool: clone an entire website. Crawls pages, downloads images, creates all WordPress pages, sets up menus, applies colors/fonts, and sets the homepage.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1131-L1138) · Schema: tools/list.

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
    "max_pages": {
      "default": null,
      "title": "Max Pages",
      "type": "integer"
    }
  },
  "required": [
    "source_url"
  ],
  "title": "clone_full_siteArguments",
  "type": "object"
}
```

</details>

<a id="tool-clone_get_page_html-a9ce47cd"></a>

## clone_get_page_html

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Fetch the raw HTML of any URL via the companion plugin or direct request.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1140-L1146) · Schema: tools/list.

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
  "title": "clone_get_page_htmlArguments",
  "type": "object"
}
```

</details>

<a id="tool-clone_parse_html_sections-47be03f9"></a>

## clone_parse_html_sections

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Parse raw HTML into semantic sections (header, hero, features, testimonials, pricing, footer, etc.).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1148-L1155) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "html": {
      "title": "Html",
      "type": "string"
    },
    "base_url": {
      "default": null,
      "title": "Base Url",
      "type": "string"
    }
  },
  "required": [
    "html"
  ],
  "title": "clone_parse_html_sectionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-clone_detect_layout_type-d756e761"></a>

## clone_detect_layout_type

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Detect the type of a page: landing, blog, ecommerce, portfolio, corporate, or directory.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1157-L1163) · Schema: tools/list.

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
  "title": "clone_detect_layout_typeArguments",
  "type": "object"
}
```

</details>

<a id="tool-clone_suggest_elementor_widgets-1b8f92f8"></a>

## clone_suggest_elementor_widgets

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. For each detected section type, suggest which Elementor widgets should be used to replicate it.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1165-L1171) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "sections": {
      "items": {},
      "title": "Sections",
      "type": "array"
    }
  },
  "required": [
    "sections"
  ],
  "title": "clone_suggest_elementor_widgetsArguments",
  "type": "object"
}
```

</details>

<a id="tool-clone_create_style_guide-808ea0cc"></a>

## clone_create_style_guide

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Generate a complete style guide from an analyzed site: colors, fonts, spacing patterns, button styles.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1173-L1179) · Schema: tools/list.

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
  "title": "clone_create_style_guideArguments",
  "type": "object"
}
```

</details>

<a id="tool-clone_compare_original_vs_clone-0d12f686"></a>

## clone_compare_original_vs_clone

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Compare the original URL's text content against a cloned WordPress page to find differences.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1181-L1188) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "original_url": {
      "title": "Original Url",
      "type": "string"
    },
    "clone_page_id": {
      "title": "Clone Page Id",
      "type": "integer"
    }
  },
  "required": [
    "original_url",
    "clone_page_id"
  ],
  "title": "clone_compare_original_vs_cloneArguments",
  "type": "object"
}
```

</details>

<a id="tool-clone_status-e85bd803"></a>

## clone_status

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Get the status of the most recent or ongoing clone operation stored in WP options.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1190-L1194) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "clone_statusArguments",
  "type": "object"
}
```

</details>

<a id="tool-smtp_detect_plugin-377720fe"></a>

## smtp_detect_plugin

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Detect which SMTP plugin is active: WP Mail SMTP, FluentSMTP, Post SMTP, or none
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1196-L1200) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "smtp_detect_pluginArguments",
  "type": "object"
}
```

</details>

<a id="tool-smtp_configure-dd552ad4"></a>

## smtp_configure

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Set SMTP provider settings (host, port, user, pass, encryption) for the active SMTP plugin
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1202-L1216) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "host": {
      "title": "Host",
      "type": "string"
    },
    "port": {
      "title": "Port",
      "type": "integer"
    },
    "plugin": {
      "default": "auto",
      "title": "Plugin",
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
    "encryption": {
      "default": "tls",
      "title": "Encryption",
      "type": "string"
    },
    "from_email": {
      "default": null,
      "title": "From Email",
      "type": "string"
    },
    "from_name": {
      "default": null,
      "title": "From Name",
      "type": "string"
    },
    "auth": {
      "default": true,
      "title": "Auth",
      "type": "boolean"
    }
  },
  "required": [
    "host",
    "port"
  ],
  "title": "smtp_configureArguments",
  "type": "object"
}
```

</details>

<a id="tool-smtp_configure_provider-4c14da09"></a>

## smtp_configure_provider

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Configure SMTP with preset settings for popular providers (Gmail, Outlook, SendGrid, Mailgun, Amazon SES, Postmark, Brevo)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1218-L1231) · Schema: tools/list.

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
    "api_key": {
      "default": null,
      "title": "Api Key",
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
    "region": {
      "default": null,
      "title": "Region",
      "type": "string"
    },
    "from_email": {
      "default": null,
      "title": "From Email",
      "type": "string"
    },
    "from_name": {
      "default": null,
      "title": "From Name",
      "type": "string"
    },
    "plugin": {
      "default": "auto",
      "title": "Plugin",
      "type": "string"
    }
  },
  "required": [
    "provider"
  ],
  "title": "smtp_configure_providerArguments",
  "type": "object"
}
```

</details>

<a id="tool-smtp_test_send-b0dd858a"></a>

## smtp_test_send

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Send a test email to verify SMTP configuration is working
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1233-L1241) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "to": {
      "title": "To",
      "type": "string"
    },
    "subject": {
      "default": "WordPress SMTP Test Email",
      "title": "Subject",
      "type": "string"
    },
    "message": {
      "default": "This is a test email sent from your WordPress site to verify SMTP configuration.",
      "title": "Message",
      "type": "string"
    }
  },
  "required": [
    "to"
  ],
  "title": "smtp_test_sendArguments",
  "type": "object"
}
```

</details>

<a id="tool-smtp_get_failed_log-96e99623"></a>

## smtp_get_failed_log

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Get failed email log from the active SMTP plugin
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1243-L1252) · Schema: tools/list.

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
  "title": "smtp_get_failed_logArguments",
  "type": "object"
}
```

</details>

<a id="tool-smtp_retry_failed-5e23ee2a"></a>

## smtp_retry_failed

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Retry sending failed emails from the SMTP plugin log
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1254-L1260) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "email_ids": {
      "default": null,
      "items": {},
      "title": "Email Ids",
      "type": "array"
    }
  },
  "title": "smtp_retry_failedArguments",
  "type": "object"
}
```

</details>

<a id="tool-smtp_get_sent_log-bf1a111d"></a>

## smtp_get_sent_log

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Get sent email log from the active SMTP plugin
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1262-L1272) · Schema: tools/list.

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
  "title": "smtp_get_sent_logArguments",
  "type": "object"
}
```

</details>

<a id="tool-smtp_check_spf_dkim-2b3bde07"></a>

## smtp_check_spf_dkim

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Return SPF and DKIM configuration guidance for the current from-email domain
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1274-L1280) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "domain": {
      "default": null,
      "title": "Domain",
      "type": "string"
    }
  },
  "title": "smtp_check_spf_dkimArguments",
  "type": "object"
}
```

</details>

<a id="tool-smtp_email_templates_list-c06847e0"></a>

## smtp_email_templates_list

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List available WooCommerce and WordPress email templates
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1282-L1286) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "smtp_email_templates_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-smtp_email_template_customize-1cf5b30b"></a>

## smtp_email_template_customize

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Customize a WooCommerce email template (header, footer, colors, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1288-L1304) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "template": {
      "title": "Template",
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
    "header_image": {
      "default": null,
      "title": "Header Image",
      "type": "string"
    },
    "base_color": {
      "default": null,
      "title": "Base Color",
      "type": "string"
    },
    "background_color": {
      "default": null,
      "title": "Background Color",
      "type": "string"
    },
    "body_background_color": {
      "default": null,
      "title": "Body Background Color",
      "type": "string"
    },
    "text_color": {
      "default": null,
      "title": "Text Color",
      "type": "string"
    },
    "footer_text": {
      "default": null,
      "title": "Footer Text",
      "type": "string"
    }
  },
  "required": [
    "template"
  ],
  "title": "smtp_email_template_customizeArguments",
  "type": "object"
}
```

</details>

<a id="tool-speed_audit-83e95cd8"></a>

## speed_audit

Handler: Other product (tools/wordpress/ops.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Run a comprehensive speed audit on the WordPress site: check image sizes, lazy loading, caching, GZIP, minification, unused CSS/JS, render-blocking resources, and database health. Returns a score with categorized issues and fix recommendations.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/ops.py#L1306-L1310) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "speed_auditArguments",
  "type": "object"
}
```

</details>
