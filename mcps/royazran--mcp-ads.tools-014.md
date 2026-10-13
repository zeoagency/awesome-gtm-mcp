# RoyAzran/mcp-ads: supporting and other-product tools

[Provider inventory](royazran--mcp-ads.md) · [Global tool index](../TOOL_INDEX.md)

Tools 1951–2100 of 3131. Exact schemas from the same upstream snapshot.

<a id="tool-cpt_list_posts-8c618acd"></a>

## cpt_list_posts

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List posts of any custom post type
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L321-L333) · Schema: tools/list.

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
  "required": [
    "post_type"
  ],
  "title": "cpt_list_postsArguments",
  "type": "object"
}
```

</details>

<a id="tool-cpt_get_post-a39e66fa"></a>

## cpt_get_post

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Get a single post from any custom post type
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L335-L342) · Schema: tools/list.

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
    }
  },
  "required": [
    "post_type",
    "id"
  ],
  "title": "cpt_get_postArguments",
  "type": "object"
}
```

</details>

<a id="tool-cpt_create_post-83bf58cc"></a>

## cpt_create_post

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_rest\_map.get, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a post in any custom post type
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L344-L361) · Schema: tools/list.

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
    "slug": {
      "default": null,
      "title": "Slug",
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
    "acf": {
      "additionalProperties": true,
      "default": null,
      "title": "Acf",
      "type": "object"
    },
    "template": {
      "default": null,
      "title": "Template",
      "type": "string"
    }
  },
  "required": [
    "post_type",
    "title"
  ],
  "title": "cpt_create_postArguments",
  "type": "object"
}
```

</details>

<a id="tool-cpt_update_post-fc851023"></a>

## cpt_update_post

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_rest\_map.get, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Update a post in any custom post type
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L363-L380) · Schema: tools/list.

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
    "slug": {
      "default": null,
      "title": "Slug",
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
    "acf": {
      "additionalProperties": true,
      "default": null,
      "title": "Acf",
      "type": "object"
    }
  },
  "required": [
    "post_type",
    "id"
  ],
  "title": "cpt_update_postArguments",
  "type": "object"
}
```

</details>

<a id="tool-cpt_delete_post-7f899054"></a>

## cpt_delete_post

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_rest\_map.get, \_wp().delete, \_wp.

```text
[WRITE] Tool tool. Delete a post from any custom post type
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L382-L393) · Schema: tools/list.

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
      "default": true,
      "title": "Force",
      "type": "boolean"
    }
  },
  "required": [
    "post_type",
    "id"
  ],
  "title": "cpt_delete_postArguments",
  "type": "object"
}
```

</details>

<a id="tool-cpt_bulk_create_posts-05dc0972"></a>

## cpt_bulk_create_posts

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_rest\_map.get, \_wp().post, \_wp.

```text
[WRITE] Tool tool. Create multiple posts in a CPT at once
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L395-L404) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_type": {
      "default": null,
      "title": "Post Type",
      "type": "string"
    },
    "posts": {
      "default": null,
      "items": {},
      "title": "Posts",
      "type": "array"
    }
  },
  "title": "cpt_bulk_create_postsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_discover_cpt_endpoint-98b3412a"></a>

## wp_discover_cpt_endpoint

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Auto-discover the REST API endpoint for a custom post type
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L406-L412) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_type_slug": {
      "title": "Post Type Slug",
      "type": "string"
    }
  },
  "required": [
    "post_type_slug"
  ],
  "title": "wp_discover_cpt_endpointArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_list_post_statuses-df549e5b"></a>

## wp_list_post_statuses

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] WordPress tool. List all available post statuses
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L414-L418) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_list_post_statusesArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_deploy_staging_to_production-4ff0c664"></a>

## wp_deploy_staging_to_production

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Push staging site to production (via companion plugin or hosting API)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L420-L432) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "staging_url": {
      "default": null,
      "title": "Staging Url",
      "type": "string"
    },
    "include_database": {
      "default": true,
      "title": "Include Database",
      "type": "boolean"
    },
    "include_media": {
      "default": true,
      "title": "Include Media",
      "type": "boolean"
    },
    "include_plugins": {
      "default": true,
      "title": "Include Plugins",
      "type": "boolean"
    },
    "include_themes": {
      "default": true,
      "title": "Include Themes",
      "type": "boolean"
    },
    "backup_first": {
      "default": true,
      "title": "Backup First",
      "type": "boolean"
    },
    "dry_run": {
      "default": false,
      "title": "Dry Run",
      "type": "boolean"
    }
  },
  "title": "wp_deploy_staging_to_productionArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_deploy_production_to_staging-dc766c72"></a>

## wp_deploy_production_to_staging

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Clone production site to staging for testing
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L434-L443) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "staging_url": {
      "default": null,
      "title": "Staging Url",
      "type": "string"
    },
    "include_database": {
      "default": true,
      "title": "Include Database",
      "type": "boolean"
    },
    "include_media": {
      "default": true,
      "title": "Include Media",
      "type": "boolean"
    },
    "replace_urls": {
      "default": true,
      "title": "Replace Urls",
      "type": "boolean"
    }
  },
  "title": "wp_deploy_production_to_stagingArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_deploy_git_status-97a95d27"></a>

## wp_deploy_git_status

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get git status for theme or plugin directory (requires companion plugin or server access)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L445-L453) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "path": {
      "default": "theme",
      "title": "Path",
      "type": "string"
    },
    "theme_slug": {
      "default": null,
      "title": "Theme Slug",
      "type": "string"
    },
    "plugin_slug": {
      "default": null,
      "title": "Plugin Slug",
      "type": "string"
    }
  },
  "title": "wp_deploy_git_statusArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_deploy_git_commit-55f11d89"></a>

## wp_deploy_git_commit

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Commit changes in a theme or plugin git repository
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L455-L466) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "message": {
      "title": "Message",
      "type": "string"
    },
    "path": {
      "default": "theme",
      "title": "Path",
      "type": "string"
    },
    "theme_slug": {
      "default": null,
      "title": "Theme Slug",
      "type": "string"
    },
    "plugin_slug": {
      "default": null,
      "title": "Plugin Slug",
      "type": "string"
    },
    "add_all": {
      "default": true,
      "title": "Add All",
      "type": "boolean"
    },
    "files": {
      "default": null,
      "items": {},
      "title": "Files",
      "type": "array"
    }
  },
  "required": [
    "message"
  ],
  "title": "wp_deploy_git_commitArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_deploy_git_push-366006ce"></a>

## wp_deploy_git_push

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Push commits to remote git repository
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L468-L479) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "path": {
      "default": "theme",
      "title": "Path",
      "type": "string"
    },
    "theme_slug": {
      "default": null,
      "title": "Theme Slug",
      "type": "string"
    },
    "plugin_slug": {
      "default": null,
      "title": "Plugin Slug",
      "type": "string"
    },
    "remote": {
      "default": "origin",
      "title": "Remote",
      "type": "string"
    },
    "branch": {
      "default": "main",
      "title": "Branch",
      "type": "string"
    },
    "force": {
      "default": false,
      "title": "Force",
      "type": "boolean"
    }
  },
  "title": "wp_deploy_git_pushArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_deploy_git_pull-809ad8bb"></a>

## wp_deploy_git_pull

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Pull latest changes from remote git repository
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L481-L491) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "path": {
      "default": "theme",
      "title": "Path",
      "type": "string"
    },
    "theme_slug": {
      "default": null,
      "title": "Theme Slug",
      "type": "string"
    },
    "plugin_slug": {
      "default": null,
      "title": "Plugin Slug",
      "type": "string"
    },
    "remote": {
      "default": "origin",
      "title": "Remote",
      "type": "string"
    },
    "branch": {
      "default": "main",
      "title": "Branch",
      "type": "string"
    }
  },
  "title": "wp_deploy_git_pullArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_deploy_git_log-95cafc2d"></a>

## wp_deploy_git_log

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get recent git commit history
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L493-L503) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "path": {
      "default": "theme",
      "title": "Path",
      "type": "string"
    },
    "theme_slug": {
      "default": null,
      "title": "Theme Slug",
      "type": "string"
    },
    "plugin_slug": {
      "default": null,
      "title": "Plugin Slug",
      "type": "string"
    },
    "count": {
      "default": 20,
      "title": "Count",
      "type": "integer"
    },
    "since": {
      "default": null,
      "title": "Since",
      "type": "string"
    }
  },
  "title": "wp_deploy_git_logArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_deploy_create_staging-3f8c0383"></a>

## wp_deploy_create_staging

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Create a staging site (via hosting API or subdomain setup instructions)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L505-L513) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "method": {
      "default": "hosting-api",
      "title": "Method",
      "type": "string"
    },
    "staging_name": {
      "default": "staging",
      "title": "Staging Name",
      "type": "string"
    },
    "source": {
      "default": "production",
      "title": "Source",
      "type": "string"
    }
  },
  "title": "wp_deploy_create_stagingArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_deploy_compare_staging_prod-c464aeae"></a>

## wp_deploy_compare_staging_prod

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Compare differences between staging and production environments
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L515-L522) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "staging_url": {
      "title": "Staging Url",
      "type": "string"
    },
    "compare": {
      "default": null,
      "items": {},
      "title": "Compare",
      "type": "array"
    }
  },
  "required": [
    "staging_url"
  ],
  "title": "wp_deploy_compare_staging_prodArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_deploy_rollback-726704b9"></a>

## wp_deploy_rollback

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Rollback to a previous deployment or git commit
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L524-L535) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "method": {
      "default": "git-revert",
      "title": "Method",
      "type": "string"
    },
    "commit_hash": {
      "default": null,
      "title": "Commit Hash",
      "type": "string"
    },
    "backup_id": {
      "default": null,
      "title": "Backup Id",
      "type": "string"
    },
    "path": {
      "default": "theme",
      "title": "Path",
      "type": "string"
    },
    "theme_slug": {
      "default": null,
      "title": "Theme Slug",
      "type": "string"
    },
    "plugin_slug": {
      "default": null,
      "title": "Plugin Slug",
      "type": "string"
    }
  },
  "title": "wp_deploy_rollbackArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_deploy_changelog_generate-0ed6bf57"></a>

## wp_deploy_changelog_generate

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Generate a changelog from git commit history
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L537-L549) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "path": {
      "default": "theme",
      "title": "Path",
      "type": "string"
    },
    "theme_slug": {
      "default": null,
      "title": "Theme Slug",
      "type": "string"
    },
    "plugin_slug": {
      "default": null,
      "title": "Plugin Slug",
      "type": "string"
    },
    "since_tag": {
      "default": null,
      "title": "Since Tag",
      "type": "string"
    },
    "since_date": {
      "default": null,
      "title": "Since Date",
      "type": "string"
    },
    "count": {
      "default": 50,
      "title": "Count",
      "type": "integer"
    },
    "format": {
      "default": "markdown",
      "title": "Format",
      "type": "string"
    }
  },
  "title": "wp_deploy_changelog_generateArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_deploy_pre_deploy_checklist-0cf75027"></a>

## wp_deploy_pre_deploy_checklist

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Run automated pre-deployment checks (backups, broken links, plugin updates, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L551-L563) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "check_backup": {
      "default": true,
      "title": "Check Backup",
      "type": "boolean"
    },
    "check_plugins": {
      "default": true,
      "title": "Check Plugins",
      "type": "boolean"
    },
    "check_php_errors": {
      "default": true,
      "title": "Check Php Errors",
      "type": "boolean"
    },
    "check_ssl": {
      "default": true,
      "title": "Check Ssl",
      "type": "boolean"
    },
    "check_search_replace": {
      "default": true,
      "title": "Check Search Replace",
      "type": "boolean"
    },
    "staging_url": {
      "default": null,
      "title": "Staging Url",
      "type": "string"
    },
    "test_urls": {
      "default": null,
      "items": {},
      "title": "Test Urls",
      "type": "array"
    }
  },
  "title": "wp_deploy_pre_deploy_checklistArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_detect_form_plugin-f2993f35"></a>

## wp_detect_form_plugin

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Detect which form plugin is installed (CF7, Gravity Forms, WPForms, Ninja Forms, Elementor Forms)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L565-L569) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_detect_form_pluginArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_embed_form_in_page-2243fa40"></a>

## wp_embed_form_in_page

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Add a form shortcode to an Elementor page using the Shortcode widget
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L571-L580) · Schema: tools/list.

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
    "form_shortcode": {
      "title": "Form Shortcode",
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
    "page_id",
    "form_shortcode"
  ],
  "title": "wp_embed_form_in_pageArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_blocks_parse-84e48b98"></a>

## wp_blocks_parse

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp\_get\_editable\_content, \_elementor\_content\_collection, \_wp\_parse\_blocks\_content, ValueError.

```text
[READ] WordPress tool. Parse post_content (block markup) into a structured block tree
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L582-L598) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "content": {
      "default": null,
      "title": "Content",
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
  "title": "wp_blocks_parseArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_blocks_serialize-933c6b64"></a>

## wp_blocks_serialize

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp\_serialize\_blocks, \_wp\_parse\_blocks\_content.

```text
[READ] WordPress tool. Serialize a JSON block tree back to WordPress post_content string
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L600-L606) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "blocks": {
      "items": {},
      "title": "Blocks",
      "type": "array"
    }
  },
  "required": [
    "blocks"
  ],
  "title": "wp_blocks_serializeArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_blocks_find-23a8bb2b"></a>

## wp_blocks_find

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp\_get\_editable\_content, \_wp\_parse\_blocks\_content, block\_name.strip().lower, \_elementor\_content\_collection, block\_name.strip, str(block.get('blockName') or '').strip().lower, str(block.get('blockName') or '').strip.

```text
[READ] WordPress tool. Find blocks by name in a post's content
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L608-L619) · Schema: tools/list.

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
    "block_name": {
      "title": "Block Name",
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
    "block_name"
  ],
  "title": "wp_blocks_findArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_blocks_insert-368f4276"></a>

## wp_blocks_insert

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp\_get\_editable\_content, \_wp\_parse\_blocks\_content, blocks.insert, \_wp\_save\_blocks, max, min.

```text
[READ] WordPress tool. Insert a block at a specific position in a post's content
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L621-L633) · Schema: tools/list.

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
    "block": {
      "additionalProperties": true,
      "title": "Block",
      "type": "object"
    },
    "post_type": {
      "default": "post",
      "title": "Post Type",
      "type": "string"
    },
    "position": {
      "default": null,
      "title": "Position",
      "type": "integer"
    }
  },
  "required": [
    "post_id",
    "block"
  ],
  "title": "wp_blocks_insertArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_blocks_update-fc781697"></a>

## wp_blocks_update

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp\_get\_editable\_content, \_wp\_parse\_blocks\_content, \_wp\_save\_blocks, target.get, \_wp\_block\_index.

```text
[READ] WordPress tool. Update block attributes at a specific index in a post
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L635-L651) · Schema: tools/list.

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
    "index": {
      "title": "Index",
      "type": "integer"
    },
    "attrs": {
      "additionalProperties": true,
      "title": "Attrs",
      "type": "object"
    },
    "post_type": {
      "default": "post",
      "title": "Post Type",
      "type": "string"
    },
    "innerHTML": {
      "default": null,
      "title": "Innerhtml",
      "type": "string"
    }
  },
  "required": [
    "post_id",
    "index",
    "attrs"
  ],
  "title": "wp_blocks_updateArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_blocks_remove-56fe8467"></a>

## wp_blocks_remove

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp\_get\_editable\_content, \_wp\_parse\_blocks\_content, blocks.pop, \_wp\_save\_blocks, \_wp\_block\_index.

```text
[READ] WordPress tool. Remove a block by index from a post's content
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L653-L663) · Schema: tools/list.

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
    "index": {
      "title": "Index",
      "type": "integer"
    },
    "post_type": {
      "default": "post",
      "title": "Post Type",
      "type": "string"
    }
  },
  "required": [
    "post_id",
    "index"
  ],
  "title": "wp_blocks_removeArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_blocks_move-b43974f8"></a>

## wp_blocks_move

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp\_get\_editable\_content, \_wp\_parse\_blocks\_content, blocks.pop, max, blocks.insert, \_wp\_save\_blocks, \_wp\_block\_index.

```text
[READ] WordPress tool. Move a block from one position to another in a post
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L665-L678) · Schema: tools/list.

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
    "from_index": {
      "title": "From Index",
      "type": "integer"
    },
    "to_index": {
      "title": "To Index",
      "type": "integer"
    },
    "post_type": {
      "default": "post",
      "title": "Post Type",
      "type": "string"
    }
  },
  "required": [
    "post_id",
    "from_index",
    "to_index"
  ],
  "title": "wp_blocks_moveArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_blocks_replace-27bc9f22"></a>

## wp_blocks_replace

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp\_get\_editable\_content, \_wp\_parse\_blocks\_content, \_wp\_save\_blocks, \_wp\_block\_index.

```text
[READ] WordPress tool. Replace a block at a specific index with a new block
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L680-L691) · Schema: tools/list.

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
    "index": {
      "title": "Index",
      "type": "integer"
    },
    "block": {
      "additionalProperties": true,
      "title": "Block",
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
    "index",
    "block"
  ],
  "title": "wp_blocks_replaceArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_blocks_wrap-15343720"></a>

## wp_blocks_wrap

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp\_get\_editable\_content, \_wp\_parse\_blocks\_content, \_wp\_block\_index, \_wp\_save\_blocks, ValueError, \_wp\_serialize\_blocks.

```text
[READ] WordPress tool. Wrap one or more blocks in a group or columns block
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L693-L715) · Schema: tools/list.

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
    "start_index": {
      "title": "Start Index",
      "type": "integer"
    },
    "end_index": {
      "title": "End Index",
      "type": "integer"
    },
    "post_type": {
      "default": "post",
      "title": "Post Type",
      "type": "string"
    },
    "wrapper": {
      "default": "group",
      "title": "Wrapper",
      "type": "string"
    },
    "wrapper_attrs": {
      "additionalProperties": true,
      "default": null,
      "title": "Wrapper Attrs",
      "type": "object"
    }
  },
  "required": [
    "post_id",
    "start_index",
    "end_index"
  ],
  "title": "wp_blocks_wrapArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_blocks_batch_update-84ada022"></a>

## wp_blocks_batch_update

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp\_get\_editable\_content, \_wp\_parse\_blocks\_content, \_wp\_apply\_block\_operations, \_wp\_save\_blocks.

```text
[READ] WordPress tool. Perform multiple block operations on a post in a single save
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L717-L727) · Schema: tools/list.

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
    "operations": {
      "items": {},
      "title": "Operations",
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
    "operations"
  ],
  "title": "wp_blocks_batch_updateArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_reusable_blocks_list-1bce67c4"></a>

## wp_reusable_blocks_list

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. List all reusable blocks (synced patterns)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L729-L736) · Schema: tools/list.

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
    "search": {
      "default": null,
      "title": "Search",
      "type": "string"
    }
  },
  "title": "wp_reusable_blocks_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_reusable_blocks_get-90ea9ad0"></a>

## wp_reusable_blocks_get

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get a single reusable block by ID
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L738-L744) · Schema: tools/list.

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
  "title": "wp_reusable_blocks_getArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_reusable_blocks_create-e7f43d8d"></a>

## wp_reusable_blocks_create

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Create a new reusable block
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L746-L754) · Schema: tools/list.

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
    "status": {
      "default": "publish",
      "title": "Status",
      "type": "string"
    }
  },
  "required": [
    "title",
    "content"
  ],
  "title": "wp_reusable_blocks_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_reusable_blocks_update-41d42fe6"></a>

## wp_reusable_blocks_update

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Update a reusable block
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L756-L764) · Schema: tools/list.

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
    }
  },
  "required": [
    "id"
  ],
  "title": "wp_reusable_blocks_updateArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_reusable_blocks_delete-5daed593"></a>

## wp_reusable_blocks_delete

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] WordPress tool. Delete a reusable block
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L766-L774) · Schema: tools/list.

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
  "title": "wp_reusable_blocks_deleteArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_patterns_list-5f0cfe0c"></a>

## wp_patterns_list

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. List all registered block patterns
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L776-L782) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "category": {
      "default": null,
      "title": "Category",
      "type": "string"
    }
  },
  "title": "wp_patterns_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_patterns_categories-9eefb048"></a>

## wp_patterns_categories

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] WordPress tool. List all block pattern categories
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L784-L787) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_patterns_categoriesArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_patterns_apply_to_post-78554260"></a>

## wp_patterns_apply_to_post

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_elementor\_flatten\_items, (pattern\_name or '').strip().lower, next, \_elementor\_content\_collection, \_wp().get, document.get, blocks.insert.

```text
[WRITE] WordPress tool. Insert a block pattern's content into a post at a given position
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L789-L829) · Schema: tools/list.

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
    "pattern_name": {
      "title": "Pattern Name",
      "type": "string"
    },
    "post_type": {
      "default": "post",
      "title": "Post Type",
      "type": "string"
    },
    "position": {
      "default": null,
      "title": "Position",
      "type": "integer"
    }
  },
  "required": [
    "post_id",
    "pattern_name"
  ],
  "title": "wp_patterns_apply_to_postArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_templates_list-fb0cb706"></a>

## wp_templates_list

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. List all block templates (Full Site Editing)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L831-L837) · Schema: tools/list.

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
  "title": "wp_templates_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_templates_get-cebd966a"></a>

## wp_templates_get

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp, quote.

```text
[READ] WordPress tool. Get a single block template by ID (e.g. 'theme-slug//single')
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L839-L844) · Schema: tools/list.

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
  "title": "wp_templates_getArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_templates_create-4829eea1"></a>

## wp_templates_create

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Create a custom block template
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L846-L855) · Schema: tools/list.

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
    "title": {
      "title": "Title",
      "type": "string"
    },
    "content": {
      "title": "Content",
      "type": "string"
    },
    "description": {
      "default": null,
      "title": "Description",
      "type": "string"
    }
  },
  "required": [
    "slug",
    "title",
    "content"
  ],
  "title": "wp_templates_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_templates_update-ca425b7c"></a>

## wp_templates_update

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, quote, locals.

```text
[WRITE] WordPress tool. Update a block template
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L857-L866) · Schema: tools/list.

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
    "content": {
      "default": null,
      "title": "Content",
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
    }
  },
  "required": [
    "id"
  ],
  "title": "wp_templates_updateArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_templates_delete-461be3b9"></a>

## wp_templates_delete

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().delete, \_wp, quote.

```text
[WRITE] WordPress tool. Delete a custom block template
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L868-L876) · Schema: tools/list.

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
    "force": {
      "default": true,
      "title": "Force",
      "type": "boolean"
    }
  },
  "required": [
    "id"
  ],
  "title": "wp_templates_deleteArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_template_parts_list-ac39f1c5"></a>

## wp_template_parts_list

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. List all block template parts (headers, footers, sidebars)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L878-L885) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "area": {
      "default": null,
      "title": "Area",
      "type": "string"
    },
    "per_page": {
      "default": 50,
      "title": "Per Page",
      "type": "integer"
    }
  },
  "title": "wp_template_parts_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_template_parts_get-e490ad7a"></a>

## wp_template_parts_get

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp, quote.

```text
[READ] WordPress tool. Get a single template part by ID
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L887-L892) · Schema: tools/list.

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
  "title": "wp_template_parts_getArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_template_parts_create-dfbd2ddb"></a>

## wp_template_parts_create

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Create a new template part
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L894-L903) · Schema: tools/list.

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
    "title": {
      "title": "Title",
      "type": "string"
    },
    "content": {
      "title": "Content",
      "type": "string"
    },
    "area": {
      "default": "uncategorized",
      "title": "Area",
      "type": "string"
    }
  },
  "required": [
    "slug",
    "title",
    "content"
  ],
  "title": "wp_template_parts_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_template_parts_update-66691932"></a>

## wp_template_parts_update

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, quote, locals.

```text
[WRITE] WordPress tool. Update a template part
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L905-L914) · Schema: tools/list.

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
    "content": {
      "default": null,
      "title": "Content",
      "type": "string"
    },
    "title": {
      "default": null,
      "title": "Title",
      "type": "string"
    },
    "area": {
      "default": null,
      "title": "Area",
      "type": "string"
    }
  },
  "required": [
    "id"
  ],
  "title": "wp_template_parts_updateArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_global_styles_get-cec5068f"></a>

## wp_global_styles_get

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp\_global\_styles\_resolution\_hint, \_wp, quote.

```text
[READ] WordPress tool. Get global styles (theme.json) settings and styles
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L916-L923) · Schema: tools/list.

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
    }
  },
  "title": "wp_global_styles_getArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_global_styles_update-fe1d05a4"></a>

## wp_global_styles_update

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, quote, locals.

```text
[WRITE] WordPress tool. Update global styles (theme.json) settings and styles
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L925-L933) · Schema: tools/list.

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
    "settings": {
      "additionalProperties": true,
      "default": null,
      "title": "Settings",
      "type": "object"
    },
    "styles": {
      "additionalProperties": true,
      "default": null,
      "title": "Styles",
      "type": "object"
    }
  },
  "required": [
    "id"
  ],
  "title": "wp_global_styles_updateArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_global_styles_add_color-c60cc488"></a>

## wp_global_styles_add_color

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, wp\_global\_styles\_get, settings.setdefault, color\_settings.setdefault('palette', {}).setdefault, palette.append, wp\_global\_styles\_update, current.get, color\_settings.setdefault.

```text
[READ] WordPress tool. Add a color to the global styles color palette
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L935-L948) · Schema: tools/list.

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
      "title": "Name",
      "type": "string"
    },
    "slug": {
      "title": "Slug",
      "type": "string"
    },
    "color": {
      "title": "Color",
      "type": "string"
    }
  },
  "required": [
    "id",
    "name",
    "slug",
    "color"
  ],
  "title": "wp_global_styles_add_colorArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_global_styles_add_font-6b3c4d26"></a>

## wp_global_styles_add_font

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Add a font family to the global styles typography settings
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L950-L959) · Schema: tools/list.

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
      "title": "Name",
      "type": "string"
    },
    "slug": {
      "title": "Slug",
      "type": "string"
    },
    "fontFamily": {
      "title": "Fontfamily",
      "type": "string"
    }
  },
  "required": [
    "id",
    "name",
    "slug",
    "fontFamily"
  ],
  "title": "wp_global_styles_add_fontArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_global_styles_set_layout-5ced74ed"></a>

## wp_global_styles_set_layout

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Set global layout settings (content width, wide width)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L961-L969) · Schema: tools/list.

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
    "contentSize": {
      "default": null,
      "title": "Contentsize",
      "type": "string"
    },
    "wideSize": {
      "default": null,
      "title": "Widesize",
      "type": "string"
    }
  },
  "required": [
    "id"
  ],
  "title": "wp_global_styles_set_layoutArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_navigation_list-b3d545c5"></a>

## wp_navigation_list

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. List all navigation menus (block-based)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L971-L977) · Schema: tools/list.

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
  "title": "wp_navigation_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_navigation_create-148ec880"></a>

## wp_navigation_create

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Create a new block-based navigation menu
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L979-L987) · Schema: tools/list.

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
      "default": "publish",
      "title": "Status",
      "type": "string"
    }
  },
  "required": [
    "title"
  ],
  "title": "wp_navigation_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_navigation_update-61554256"></a>

## wp_navigation_update

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Update a block-based navigation menu
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L989-L998) · Schema: tools/list.

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
    }
  },
  "required": [
    "id"
  ],
  "title": "wp_navigation_updateArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_hosting_detect_provider-014273ef"></a>

## wp_hosting_detect_provider

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Detect the hosting provider from server headers, environment variables, and known signatures
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1000-L1004) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_hosting_detect_providerArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_hosting_cloudways_apps_list-d42eab1e"></a>

## wp_hosting_cloudways_apps_list

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. List applications on Cloudways account (requires Cloudways API key in config)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1006-L1013) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
    "email": {
      "default": null,
      "title": "Email",
      "type": "string"
    }
  },
  "title": "wp_hosting_cloudways_apps_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_hosting_cloudways_clear_cache-bc577d2d"></a>

## wp_hosting_cloudways_clear_cache

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Purge Varnish and application cache on Cloudways. Requires wp-mcp companion plugin.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1015-L1023) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
    "server_id": {
      "default": null,
      "title": "Server Id",
      "type": "string"
    },
    "cache_type": {
      "default": "all",
      "title": "Cache Type",
      "type": "string"
    }
  },
  "title": "wp_hosting_cloudways_clear_cacheArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_hosting_cloudways_staging_create-403052be"></a>

## wp_hosting_cloudways_staging_create

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Create a staging site on Cloudways
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1025-L1032) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "app_id": {
      "title": "App Id",
      "type": "string"
    },
    "server_id": {
      "title": "Server Id",
      "type": "string"
    }
  },
  "required": [
    "app_id",
    "server_id"
  ],
  "title": "wp_hosting_cloudways_staging_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_hosting_siteground_tools-84d314fd"></a>

## wp_hosting_siteground_tools

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Access SiteGround optimization tools (SuperCacher, PHP settings)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1034-L1040) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "action": {
      "title": "Action",
      "type": "string"
    }
  },
  "required": [
    "action"
  ],
  "title": "wp_hosting_siteground_toolsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_hosting_siteground_staging-73236631"></a>

## wp_hosting_siteground_staging

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Manage SiteGround staging environments
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1042-L1049) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "action": {
      "title": "Action",
      "type": "string"
    },
    "staging_id": {
      "default": null,
      "title": "Staging Id",
      "type": "string"
    }
  },
  "required": [
    "action"
  ],
  "title": "wp_hosting_siteground_stagingArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_hosting_wpengine_purge_cache-cfb4f104"></a>

## wp_hosting_wpengine_purge_cache

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, \_wp.

```text
[WRITE] WordPress tool. Purge WP Engine page cache and object cache. Requires wp-mcp companion plugin.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1051-L1056) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "cache_type": {
      "default": "all",
      "title": "Cache Type",
      "type": "string"
    }
  },
  "title": "wp_hosting_wpengine_purge_cacheArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_hosting_wpengine_environments_list-48649688"></a>

## wp_hosting_wpengine_environments_list

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. List WP Engine environments (production, staging, development)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1058-L1064) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "install_name": {
      "default": null,
      "title": "Install Name",
      "type": "string"
    }
  },
  "title": "wp_hosting_wpengine_environments_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_hosting_kinsta_purge_cache-a3e2cdce"></a>

## wp_hosting_kinsta_purge_cache

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] WordPress tool. Purge Kinsta edge cache and CDN cache
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1066-L1073) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "site_id": {
      "default": null,
      "title": "Site Id",
      "type": "string"
    },
    "environment": {
      "default": "live",
      "title": "Environment",
      "type": "string"
    }
  },
  "title": "wp_hosting_kinsta_purge_cacheArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_hosting_runcloud_apps_list-34ba881c"></a>

## wp_hosting_runcloud_apps_list

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. List web applications on RunCloud server
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1075-L1082) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "server_id": {
      "default": null,
      "title": "Server Id",
      "type": "string"
    },
    "api_key": {
      "default": null,
      "title": "Api Key",
      "type": "string"
    }
  },
  "title": "wp_hosting_runcloud_apps_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_hosting_server_info-b6169d55"></a>

## wp_hosting_server_info

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get server information — PHP version, memory limit, disk space, max upload size, etc.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1084-L1088) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_hosting_server_infoArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_hosting_php_version_check-9e30117d"></a>

## wp_hosting_php_version_check

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Check PHP version and compatibility with WordPress and installed plugins
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1090-L1096) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "target_php_version": {
      "default": null,
      "title": "Target Php Version",
      "type": "string"
    }
  },
  "title": "wp_hosting_php_version_checkArguments",
  "type": "object"
}
```

</details>

<a id="tool-lms_detect_plugin-864c1ff2"></a>

## lms_detect_plugin

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Detect which LMS plugin is installed (LearnDash, LifterLMS, Tutor LMS)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1098-L1102) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "lms_detect_pluginArguments",
  "type": "object"
}
```

</details>

<a id="tool-lms_courses_list_universal-62ad5c4f"></a>

## lms_courses_list_universal

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List courses from whichever LMS plugin is active — auto-detects LearnDash, LifterLMS, or Tutor LMS
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1104-L1112) · Schema: tools/list.

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
  "title": "lms_courses_list_universalArguments",
  "type": "object"
}
```

</details>

<a id="tool-lms_enroll_universal-6b26de0a"></a>

## lms_enroll_universal

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Enroll a user in a course using whichever LMS plugin is active
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1114-L1121) · Schema: tools/list.

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
  "title": "lms_enroll_universalArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_site_health_check-453e09ea"></a>

## wp_site_health_check

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Run WordPress Site Health checks and get results
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1123-L1127) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_site_health_checkArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_health_tests-fd9c08c8"></a>

## wp_get_health_tests

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get all site health test results (async tests that WP runs)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1129-L1133) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_get_health_testsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_clear_cache-e71fd546"></a>

## wp_clear_cache

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, \_wp.

```text
[WRITE] WordPress tool. Clear WordPress caches (object cache, page cache, transients). Requires wp-mcp companion plugin.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1135-L1140) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "cache_type": {
      "default": "all",
      "title": "Cache Type",
      "type": "string"
    }
  },
  "title": "wp_clear_cacheArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_delete_expired_transients-c76750aa"></a>

## wp_delete_expired_transients

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, \_wp.

```text
[WRITE] WordPress tool. Delete all expired WordPress transients from the database. Requires wp-mcp companion plugin.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1142-L1145) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_delete_expired_transientsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_check_core_updates-47e4965d"></a>

## wp_check_core_updates

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_unsupported\_from\_http, \_wp.

```text
[READ] WordPress tool. Check if WordPress core has available updates
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1147-L1153) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_check_core_updatesArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_update_info-963df9ba"></a>

## wp_get_update_info

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp, wp.get, \_unsupported\_from\_http.

```text
[READ] WordPress tool. Get available updates for WordPress core, plugins, and themes
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1155-L1175) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_get_update_infoArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_flush_rewrite_rules-2aa85324"></a>

## wp_flush_rewrite_rules

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, \_wp.

```text
[WRITE] WordPress tool. Flush WordPress permalink/rewrite rules (use after changing permalink structure). Requires wp-mcp companion plugin.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1177-L1180) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_flush_rewrite_rulesArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_cron_jobs-b9f4cc81"></a>

## wp_get_cron_jobs

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. List all scheduled WordPress cron jobs
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1182-L1186) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_get_cron_jobsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_delete_cron_job-7e58febc"></a>

## wp_delete_cron_job

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] WordPress tool. Remove a scheduled cron job
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1188-L1194) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
  "title": "wp_delete_cron_jobArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_debug_log-94d0f393"></a>

## wp_get_debug_log

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] WordPress tool. Get recent entries from the WordPress debug log. Requires wp-mcp companion plugin.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1196-L1201) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "lines": {
      "default": 100,
      "title": "Lines",
      "type": "integer"
    }
  },
  "title": "wp_get_debug_logArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_enable_maintenance_mode-ae63bf75"></a>

## wp_enable_maintenance_mode

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Put WordPress site into maintenance mode (creates .maintenance file)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1203-L1207) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_enable_maintenance_modeArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_disable_maintenance_mode-15d22425"></a>

## wp_disable_maintenance_mode

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Disable WordPress maintenance mode
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1209-L1213) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_disable_maintenance_modeArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_system_info-40260060"></a>

## wp_get_system_info

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] WordPress tool. Get server/system info: PHP version, MySQL version, memory limits, WP constants. Requires wp-mcp companion plugin.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1215-L1218) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_get_system_infoArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_regenerate_thumbnails-48edb295"></a>

## wp_regenerate_thumbnails

Handler: Other product (tools/wordpress/core.py): calls mcp.tool.

```text
[READ] WordPress tool. Trigger image thumbnail regeneration (requires appropriate plugin)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1220-L1229) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "media_ids": {
      "default": null,
      "items": {},
      "title": "Media Ids",
      "type": "array"
    }
  },
  "title": "wp_regenerate_thumbnailsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_optimize_images-c49a6056"></a>

## wp_optimize_images

Handler: Other product (tools/wordpress/core.py): calls mcp.tool.

```text
[READ] WordPress tool. Trigger image optimization via installed optimization plugin (Imagify, ShortPixel, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1231-L1240) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "media_ids": {
      "default": null,
      "items": {},
      "title": "Media Ids",
      "type": "array"
    }
  },
  "title": "wp_optimize_imagesArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_export_content-b29ac392"></a>

## wp_export_content

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, locals().items, locals.

```text
[READ] WordPress tool. Export WordPress content (posts, pages, etc.) in WXR format
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1242-L1253) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "content": {
      "default": "all",
      "title": "Content",
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
  "title": "wp_export_contentArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_search_replace_content-3630ab6f"></a>

## wp_search_replace_content

Handler: Other product (tools/wordpress/core.py): calls mcp.tool.

```text
[READ] WordPress tool. Search and replace text across all post content (uses Better Search Replace or WP REST)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1255-L1270) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "search": {
      "title": "Search",
      "type": "string"
    },
    "replace": {
      "title": "Replace",
      "type": "string"
    },
    "post_type": {
      "default": null,
      "title": "Post Type",
      "type": "string"
    },
    "dry_run": {
      "default": true,
      "title": "Dry Run",
      "type": "boolean"
    }
  },
  "required": [
    "search",
    "replace"
  ],
  "title": "wp_search_replace_contentArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_error_log-e08c6c6f"></a>

## wp_get_error_log

Handler: Other product (tools/wordpress/core.py): calls mcp.tool.

```text
[READ] WordPress tool. Get WordPress error log entries via site health or custom endpoint
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1272-L1278) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_get_error_logArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_list_media-b66cd62e"></a>

## wp_list_media

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] WordPress tool. List media files in WordPress Media Library
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1280-L1301) · Schema: tools/list.

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
    "media_type": {
      "default": null,
      "title": "Media Type",
      "type": "string"
    },
    "mime_type": {
      "default": null,
      "title": "Mime Type",
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
    "parent": {
      "default": null,
      "title": "Parent",
      "type": "integer"
    }
  },
  "title": "wp_list_mediaArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_media-46722984"></a>

## wp_get_media

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get a single media item details (URL, alt, title, caption, sizes, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1303-L1309) · Schema: tools/list.

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
  "title": "wp_get_mediaArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_upload_media_from_url-abd51a11"></a>

## wp_upload_media_from_url

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_req.get, r.raise\_for\_status, r.headers.get('Content-Type', 'application/octet-stream').split(';')\[0\].strip, \_wp().upload\_media, \_wp().post, url.rstrip('/').split('/')\[-1\].split, \_wp.

```text
[WRITE] WordPress tool. Download an image/file from a URL and upload it to WordPress Media Library
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1311-L1330) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "url": {
      "title": "Url",
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
    },
    "filename": {
      "default": null,
      "title": "Filename",
      "type": "string"
    }
  },
  "required": [
    "url"
  ],
  "title": "wp_upload_media_from_urlArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_update_media-50cb9455"></a>

## wp_update_media

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Update media file metadata — alt text, title, caption, description
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1332-L1342) · Schema: tools/list.

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
    "id"
  ],
  "title": "wp_update_mediaArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_delete_media-cbbe2cd6"></a>

## wp_delete_media

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] WordPress tool. Delete a media file from WordPress
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1344-L1352) · Schema: tools/list.

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
  "title": "wp_delete_mediaArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_set_featured_image-2881d78e"></a>

## wp_set_featured_image

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_rest\_map.get, \_wp().post, \_wp.

```text
[WRITE] WordPress tool. Set featured image for a post or page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1354-L1363) · Schema: tools/list.

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
    "media_id": {
      "title": "Media Id",
      "type": "integer"
    },
    "post_type": {
      "default": "post",
      "title": "Post Type",
      "type": "string"
    }
  },
  "required": [
    "post_id",
    "media_id"
  ],
  "title": "wp_set_featured_imageArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_remove_featured_image-17a4bdb2"></a>

## wp_remove_featured_image

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_rest\_map.get, \_wp().post, \_wp.

```text
[WRITE] WordPress tool. Remove featured image from a post or page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1365-L1373) · Schema: tools/list.

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
    "post_type": {
      "default": "post",
      "title": "Post Type",
      "type": "string"
    }
  },
  "required": [
    "post_id"
  ],
  "title": "wp_remove_featured_imageArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_media_url-55b55c00"></a>

## wp_get_media_url

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] WordPress tool. Get direct URL of a media item (full size and all available sizes)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1375-L1380) · Schema: tools/list.

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
  "title": "wp_get_media_urlArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_bulk_upload_media-7d0615a4"></a>

## wp_bulk_upload_media

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp, isinstance, item.get, \_req.get, r.raise\_for\_status, r.headers.get('Content-Type', 'image/jpeg').split(';')\[0\].strip, wp.upload\_media.

```text
[WRITE] WordPress tool. Upload multiple images from URLs in one call
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1382-L1404) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
    }
  },
  "title": "wp_bulk_upload_mediaArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_upload_media_base64-130a2cad"></a>

## wp_upload_media_base64

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, base64\_lib.b64decode, \_wp().upload\_media, \_trim, \_wp().post, \_wp, {'title': title, 'alt\_text': alt\_text}.items.

```text
[WRITE] WordPress tool. Upload a file from base64-encoded content
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1406-L1420) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "base64": {
      "title": "Base64",
      "type": "string"
    },
    "filename": {
      "title": "Filename",
      "type": "string"
    },
    "mime_type": {
      "title": "Mime Type",
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
    }
  },
  "required": [
    "base64",
    "filename",
    "mime_type"
  ],
  "title": "wp_upload_media_base64Arguments",
  "type": "object"
}
```

</details>

<a id="tool-membership_detect_plugin-cbcc862e"></a>

## membership_detect_plugin

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Detect which membership plugin is installed (MemberPress, Paid Memberships Pro, Restrict Content Pro, Ultimate Member)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1422-L1426) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "membership_detect_pluginArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_list_menus-c658d5a3"></a>

## wp_list_menus

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] WordPress tool. List all WordPress navigation menus
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1428-L1432) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_list_menusArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_menu-36c2f55f"></a>

## wp_get_menu

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] WordPress tool. Get a navigation menu and all its items
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1434-L1439) · Schema: tools/list.

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
  "title": "wp_get_menuArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_create_menu-8ce4e06a"></a>

## wp_create_menu

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Create a new navigation menu
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1441-L1450) · Schema: tools/list.

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
    "auto_add_pages": {
      "default": null,
      "title": "Auto Add Pages",
      "type": "boolean"
    }
  },
  "required": [
    "name"
  ],
  "title": "wp_create_menuArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_update_menu-5256d26b"></a>

## wp_update_menu

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Update a menu's name, slug, or settings
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1452-L1461) · Schema: tools/list.

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
  "title": "wp_update_menuArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_delete_menu-21bcdce2"></a>

## wp_delete_menu

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] WordPress tool. Delete a navigation menu
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1463-L1469) · Schema: tools/list.

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
  "title": "wp_delete_menuArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_list_menu_items-6fde3d8e"></a>

## wp_list_menu_items

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] WordPress tool. List all items in a specific menu
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1471-L1480) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "menu_id": {
      "title": "Menu Id",
      "type": "integer"
    },
    "per_page": {
      "default": 100,
      "title": "Per Page",
      "type": "integer"
    }
  },
  "required": [
    "menu_id"
  ],
  "title": "wp_list_menu_itemsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_add_menu_item-7d77b9b6"></a>

## wp_add_menu_item

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Add a link, page, post, or custom URL to a menu
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1482-L1501) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "menu_id": {
      "title": "Menu Id",
      "type": "integer"
    },
    "type": {
      "default": "custom",
      "title": "Type",
      "type": "string"
    },
    "type_label": {
      "default": null,
      "title": "Type Label",
      "type": "string"
    },
    "object_id": {
      "default": null,
      "title": "Object Id",
      "type": "integer"
    },
    "object": {
      "default": null,
      "title": "Object",
      "type": "string"
    },
    "url": {
      "default": null,
      "title": "Url",
      "type": "string"
    },
    "title": {
      "default": null,
      "title": "Title",
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
    "attr_title": {
      "default": null,
      "title": "Attr Title",
      "type": "string"
    },
    "description": {
      "default": null,
      "title": "Description",
      "type": "string"
    },
    "classes": {
      "default": null,
      "title": "Classes",
      "type": "string"
    },
    "target": {
      "default": null,
      "title": "Target",
      "type": "string"
    },
    "xfn": {
      "default": null,
      "title": "Xfn",
      "type": "string"
    }
  },
  "required": [
    "menu_id"
  ],
  "title": "wp_add_menu_itemArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_update_menu_item-364150c7"></a>

## wp_update_menu_item

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Update a menu item (title, URL, order, parent, classes, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1503-L1518) · Schema: tools/list.

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
    "url": {
      "default": null,
      "title": "Url",
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
    "target": {
      "default": null,
      "title": "Target",
      "type": "string"
    },
    "classes": {
      "default": null,
      "title": "Classes",
      "type": "string"
    },
    "attr_title": {
      "default": null,
      "title": "Attr Title",
      "type": "string"
    },
    "description": {
      "default": null,
      "title": "Description",
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
  "title": "wp_update_menu_itemArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_remove_menu_item-92386b67"></a>

## wp_remove_menu_item

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] WordPress tool. Remove an item from a navigation menu
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1520-L1526) · Schema: tools/list.

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
  "title": "wp_remove_menu_itemArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_assign_menu_to_location-8abd6ef3"></a>

## wp_assign_menu_to_location

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, \_wp.

```text
[WRITE] WordPress tool. Assign a menu to a theme location (primary, footer, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1528-L1534) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "menu_id": {
      "title": "Menu Id",
      "type": "integer"
    },
    "location": {
      "title": "Location",
      "type": "string"
    }
  },
  "required": [
    "menu_id",
    "location"
  ],
  "title": "wp_assign_menu_to_locationArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_list_menu_locations-6aaec03e"></a>

## wp_list_menu_locations

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] WordPress tool. List all available menu locations registered by the active theme
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1536-L1539) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_list_menu_locationsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_menu_by_location-074e7561"></a>

## wp_get_menu_by_location

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] WordPress tool. Get the menu assigned to a specific theme location
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1541-L1546) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "location": {
      "title": "Location",
      "type": "string"
    }
  },
  "required": [
    "location"
  ],
  "title": "wp_get_menu_by_locationArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_build_menu-aa4d8620"></a>

## wp_build_menu

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, menu\_resp.get, \_wp, item\_results.append.

```text
[WRITE] WordPress tool. Build a complete menu structure in one call — creates menu and adds all items
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1548-L1572) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
    "location": {
      "default": null,
      "title": "Location",
      "type": "string"
    },
    "items": {
      "default": null,
      "items": {},
      "title": "Items",
      "type": "array"
    }
  },
  "title": "wp_build_menuArguments",
  "type": "object"
}
```

</details>

<a id="tool-multilingual_detect_plugin-53c40e7c"></a>

## multilingual_detect_plugin

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Detect which multilingual plugin is active: WPML, Polylang, TranslatePress, Weglot, or none
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1574-L1578) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "multilingual_detect_pluginArguments",
  "type": "object"
}
```

</details>

<a id="tool-translate_text-0fbffe3d"></a>

## translate_text

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Translate text using the active multilingual plugin's translation engine, or return text for agent-side translation
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1580-L1588) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "text": {
      "title": "Text",
      "type": "string"
    },
    "target_language": {
      "title": "Target Language",
      "type": "string"
    },
    "source_language": {
      "default": null,
      "title": "Source Language",
      "type": "string"
    }
  },
  "required": [
    "text",
    "target_language"
  ],
  "title": "translate_textArguments",
  "type": "object"
}
```

</details>

<a id="tool-translate_bulk_posts-581fd54d"></a>

## translate_bulk_posts

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Translate multiple posts in bulk using the active multilingual plugin
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1590-L1599) · Schema: tools/list.

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
    "target_language": {
      "title": "Target Language",
      "type": "string"
    },
    "post_type": {
      "default": "post",
      "title": "Post Type",
      "type": "string"
    },
    "duplicate_content": {
      "default": true,
      "title": "Duplicate Content",
      "type": "boolean"
    }
  },
  "required": [
    "post_ids",
    "target_language"
  ],
  "title": "translate_bulk_postsArguments",
  "type": "object"
}
```

</details>

<a id="tool-translate_detect_language-71eafbf9"></a>

## translate_detect_language

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Detect the language of provided text content (returns best guess based on content analysis)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1601-L1607) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "text": {
      "title": "Text",
      "type": "string"
    }
  },
  "required": [
    "text"
  ],
  "title": "translate_detect_languageArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_option-724a64a3"></a>

## wp_get_option

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get a WordPress option value by key (from wp_options table via REST settings API)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1609-L1615) · Schema: tools/list.

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
  "title": "wp_get_optionArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_set_option-dfd6d67f"></a>

## wp_set_option

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Set a WordPress option value
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1617-L1624) · Schema: tools/list.

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
  "title": "wp_set_optionArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_site_settings-549a7f6d"></a>

## wp_get_site_settings

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] WordPress tool. Get all exposed WordPress settings (blogname, blogdescription, url, email, timezone, date_format, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1626-L1629) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_get_site_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_update_settings-31f6ddaf"></a>

## wp_update_settings

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Bulk update multiple WordPress settings at once
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1631-L1656) · Schema: tools/list.

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
    "posts_per_page": {
      "default": null,
      "title": "Posts Per Page",
      "type": "integer"
    },
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
    "use_smilies": {
      "default": null,
      "title": "Use Smilies",
      "type": "boolean"
    },
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
    "show_avatars": {
      "default": null,
      "title": "Show Avatars",
      "type": "boolean"
    },
    "avatar_rating": {
      "default": null,
      "title": "Avatar Rating",
      "type": "string"
    },
    "uploads_use_yearmonth_folders": {
      "default": null,
      "title": "Uploads Use Yearmonth Folders",
      "type": "boolean"
    },
    "permalink_structure": {
      "default": null,
      "title": "Permalink Structure",
      "type": "string"
    }
  },
  "title": "wp_update_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_reading_settings-5964a408"></a>

## wp_get_reading_settings

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] WordPress tool. Get WordPress reading/front-page settings
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1658-L1661) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_get_reading_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_configure_homepage-dee77c07"></a>

## wp_configure_homepage

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, \_wp.

```text
[WRITE] WordPress tool. Set the WordPress homepage to a static page or latest posts
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1663-L1677) · Schema: tools/list.

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
    "page_id": {
      "default": null,
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
    "type"
  ],
  "title": "wp_configure_homepageArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_permalink_structure-136ffb98"></a>

## wp_get_permalink_structure

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] WordPress tool. Get current permalink/URL structure
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1679-L1682) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_get_permalink_structureArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_set_permalink_structure-7eb2b5b0"></a>

## wp_set_permalink_structure

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, \_wp.

```text
[WRITE] WordPress tool. Set WordPress permalink structure
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1684-L1689) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "structure": {
      "title": "Structure",
      "type": "string"
    }
  },
  "required": [
    "structure"
  ],
  "title": "wp_set_permalink_structureArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_discussion_settings-4cca75ec"></a>

## wp_get_discussion_settings

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] WordPress tool. Get WordPress comment/discussion settings
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1691-L1694) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_get_discussion_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_media_settings-e3cd8a95"></a>

## wp_get_media_settings

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] WordPress tool. Get WordPress media/image size settings
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1696-L1699) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_get_media_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_update_media_sizes-3b6c549d"></a>

## wp_update_media_sizes

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Update WordPress image size settings
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1701-L1712) · Schema: tools/list.

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
    }
  },
  "title": "wp_update_media_sizesArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_woocommerce_settings-c82a36e3"></a>

## wp_get_woocommerce_settings

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get WooCommerce general settings via WC API
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1714-L1720) · Schema: tools/list.

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
  "title": "wp_get_woocommerce_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_update_woocommerce_setting-2f5533c4"></a>

## wp_update_woocommerce_setting

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Update a specific WooCommerce setting
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1722-L1730) · Schema: tools/list.

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
    "setting_id": {
      "title": "Setting Id",
      "type": "string"
    },
    "value": {
      "title": "Value",
      "type": "string"
    }
  },
  "required": [
    "group",
    "setting_id",
    "value"
  ],
  "title": "wp_update_woocommerce_settingArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_bricks_get_data-f57269a7"></a>

## wp_bricks_get_data

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get Bricks Builder page content data from post meta
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1732-L1739) · Schema: tools/list.

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
    "post_type": {
      "default": "page",
      "title": "Post Type",
      "type": "string"
    }
  },
  "required": [
    "post_id"
  ],
  "title": "wp_bricks_get_dataArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_bricks_set_data-430be035"></a>

## wp_bricks_set_data

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Set Bricks Builder page content data via post meta
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1741-L1749) · Schema: tools/list.

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
    "data": {
      "items": {},
      "title": "Data",
      "type": "array"
    },
    "post_type": {
      "default": "page",
      "title": "Post Type",
      "type": "string"
    }
  },
  "required": [
    "post_id",
    "data"
  ],
  "title": "wp_bricks_set_dataArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_bricks_templates_list-177fcdd2"></a>

## wp_bricks_templates_list

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. List Bricks Builder templates
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1751-L1758) · Schema: tools/list.

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
    "template_type": {
      "default": null,
      "title": "Template Type",
      "type": "string"
    }
  },
  "title": "wp_bricks_templates_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_bricks_templates_import-10a23457"></a>

## wp_bricks_templates_import

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Import a Bricks template from JSON data
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1760-L1769) · Schema: tools/list.

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
    "data": {
      "items": {},
      "title": "Data",
      "type": "array"
    },
    "template_type": {
      "default": "section",
      "title": "Template Type",
      "type": "string"
    },
    "status": {
      "default": "publish",
      "title": "Status",
      "type": "string"
    }
  },
  "required": [
    "title",
    "data"
  ],
  "title": "wp_bricks_templates_importArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_bricks_global_settings-d03060ac"></a>

## wp_bricks_global_settings

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get or update Bricks global settings (stored as WP option)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1771-L1778) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
  "title": "wp_bricks_global_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_breakdance_get_data-018c84a9"></a>

## wp_breakdance_get_data

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get Breakdance page builder data from post meta
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1780-L1787) · Schema: tools/list.

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
    "post_type": {
      "default": "page",
      "title": "Post Type",
      "type": "string"
    }
  },
  "required": [
    "post_id"
  ],
  "title": "wp_breakdance_get_dataArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_breakdance_set_data-69cf444c"></a>

## wp_breakdance_set_data

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Set Breakdance page builder data via post meta
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1789-L1797) · Schema: tools/list.

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
    "data": {
      "additionalProperties": true,
      "title": "Data",
      "type": "object"
    },
    "post_type": {
      "default": "page",
      "title": "Post Type",
      "type": "string"
    }
  },
  "required": [
    "post_id",
    "data"
  ],
  "title": "wp_breakdance_set_dataArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_breakdance_templates_list-91f04fca"></a>

## wp_breakdance_templates_list

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. List Breakdance templates
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1799-L1805) · Schema: tools/list.

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
  "title": "wp_breakdance_templates_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_divi_get_data-db172e10"></a>

## wp_divi_get_data

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get Divi Builder content (shortcodes in post_content and builder meta flags)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1807-L1814) · Schema: tools/list.

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
    "post_type": {
      "default": "page",
      "title": "Post Type",
      "type": "string"
    }
  },
  "required": [
    "post_id"
  ],
  "title": "wp_divi_get_dataArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_divi_set_data-9e9a127f"></a>

## wp_divi_set_data

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Set Divi Builder content (shortcodes) and enable the builder on the post
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1816-L1824) · Schema: tools/list.

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
  "title": "wp_divi_set_dataArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_divi_theme_options_get-138c3235"></a>

## wp_divi_theme_options_get

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get Divi theme options (stored in et_divi WP option)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1826-L1830) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_divi_theme_options_getArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_divi_theme_options_set-f2762eb9"></a>

## wp_divi_theme_options_set

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Update Divi theme options
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1832-L1838) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "options": {
      "additionalProperties": true,
      "title": "Options",
      "type": "object"
    }
  },
  "required": [
    "options"
  ],
  "title": "wp_divi_theme_options_setArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_beaver_get_data-5efb613c"></a>

## wp_beaver_get_data

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get Beaver Builder page data from post meta
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1840-L1847) · Schema: tools/list.

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
    "post_type": {
      "default": "page",
      "title": "Post Type",
      "type": "string"
    }
  },
  "required": [
    "post_id"
  ],
  "title": "wp_beaver_get_dataArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_beaver_set_data-88ca4234"></a>

## wp_beaver_set_data

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Set Beaver Builder page data via post meta
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1849-L1857) · Schema: tools/list.

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
    "data": {
      "additionalProperties": true,
      "title": "Data",
      "type": "object"
    },
    "post_type": {
      "default": "page",
      "title": "Post Type",
      "type": "string"
    }
  },
  "required": [
    "post_id",
    "data"
  ],
  "title": "wp_beaver_set_dataArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_beaver_templates_list-58134732"></a>

## wp_beaver_templates_list

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. List Beaver Builder saved templates
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1859-L1866) · Schema: tools/list.

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
    }
  },
  "title": "wp_beaver_templates_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_oxygen_get_data-cb3f2636"></a>

## wp_oxygen_get_data

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get Oxygen Builder data from post meta (ct_builder_shortcodes)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1868-L1875) · Schema: tools/list.

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
    "post_type": {
      "default": "page",
      "title": "Post Type",
      "type": "string"
    }
  },
  "required": [
    "post_id"
  ],
  "title": "wp_oxygen_get_dataArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_oxygen_set_data-ef7b34cf"></a>

## wp_oxygen_set_data

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Set Oxygen Builder shortcode data via post meta
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1877-L1885) · Schema: tools/list.

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
    "shortcodes": {
      "title": "Shortcodes",
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
    "shortcodes"
  ],
  "title": "wp_oxygen_set_dataArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_page_builder_detect-8bd79b7c"></a>

## wp_page_builder_detect

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Auto-detect which page builder a specific post/page uses
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1887-L1894) · Schema: tools/list.

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
    "post_type": {
      "default": "page",
      "title": "Post Type",
      "type": "string"
    }
  },
  "required": [
    "post_id"
  ],
  "title": "wp_page_builder_detectArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_wpbakery_get_data-da32dbfb"></a>

## wp_wpbakery_get_data

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get WPBakery (Visual Composer) shortcode content from a post
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L1896-L1903) · Schema: tools/list.

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
    "post_type": {
      "default": "page",
      "title": "Post Type",
      "type": "string"
    }
  },
  "required": [
    "post_id"
  ],
  "title": "wp_wpbakery_get_dataArguments",
  "type": "object"
}
```

</details>
