# RoyAzran/mcp-ads: supporting and other-product tools

[Provider inventory](royazran--mcp-ads.md) · [Global tool index](../TOOL_INDEX.md)

Tools 2401–2550 of 3131. Exact schemas from the same upstream snapshot.

<a id="tool-wp_bulk_trash_posts-7a955625"></a>

## wp_bulk_trash_posts

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Move multiple posts to trash
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5155-L5161) · Schema: tools/list.

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
  "title": "wp_bulk_trash_postsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_bulk_restore_posts-3c8a62d0"></a>

## wp_bulk_restore_posts

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Restore multiple trashed posts
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5163-L5170) · Schema: tools/list.

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
    "restore_status": {
      "default": "draft",
      "title": "Restore Status",
      "type": "string"
    }
  },
  "required": [
    "ids"
  ],
  "title": "wp_bulk_restore_postsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_bulk_delete_posts-ab88ce11"></a>

## wp_bulk_delete_posts

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] WordPress tool. Permanently delete multiple posts
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5172-L5179) · Schema: tools/list.

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
    "post_type": {
      "default": "posts",
      "title": "Post Type",
      "type": "string"
    }
  },
  "required": [
    "ids"
  ],
  "title": "wp_bulk_delete_postsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_bulk_assign_category-e98a59eb"></a>

## wp_bulk_assign_category

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Assign a category to multiple posts
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5181-L5189) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
    "category_id": {
      "title": "Category Id",
      "type": "integer"
    },
    "append": {
      "default": true,
      "title": "Append",
      "type": "boolean"
    }
  },
  "required": [
    "post_ids",
    "category_id"
  ],
  "title": "wp_bulk_assign_categoryArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_bulk_assign_tag-479036c4"></a>

## wp_bulk_assign_tag

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Assign a tag to multiple posts
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5191-L5199) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
    "tag_id": {
      "title": "Tag Id",
      "type": "integer"
    },
    "append": {
      "default": true,
      "title": "Append",
      "type": "boolean"
    }
  },
  "required": [
    "post_ids",
    "tag_id"
  ],
  "title": "wp_bulk_assign_tagArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_bulk_change_author-a2ac6de4"></a>

## wp_bulk_change_author

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Change author on multiple posts
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5201-L5208) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
    "author_id": {
      "title": "Author Id",
      "type": "integer"
    }
  },
  "required": [
    "post_ids",
    "author_id"
  ],
  "title": "wp_bulk_change_authorArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_bulk_change_status-b27463b4"></a>

## wp_bulk_change_status

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Change status on multiple posts (publish/draft/private/pending/trash)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5210-L5218) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
    "status": {
      "title": "Status",
      "type": "string"
    },
    "post_type": {
      "default": "posts",
      "title": "Post Type",
      "type": "string"
    }
  },
  "required": [
    "post_ids",
    "status"
  ],
  "title": "wp_bulk_change_statusArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_bulk_toggle_comments-4e3eb8b4"></a>

## wp_bulk_toggle_comments

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Enable or disable comments on multiple posts
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5220-L5227) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
    "comment_status": {
      "title": "Comment Status",
      "type": "string"
    }
  },
  "required": [
    "post_ids",
    "comment_status"
  ],
  "title": "wp_bulk_toggle_commentsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_post_terms-382d024d"></a>

## wp_get_post_terms

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get all terms (categories, tags, custom taxonomies) assigned to a post
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5229-L5236) · Schema: tools/list.

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
    "taxonomy": {
      "default": null,
      "title": "Taxonomy",
      "type": "string"
    }
  },
  "required": [
    "post_id"
  ],
  "title": "wp_get_post_termsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_set_post_terms-18ba5fb4"></a>

## wp_set_post_terms

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Set terms (categories/tags/custom) on a post, replacing existing
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5238-L5246) · Schema: tools/list.

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
    "post_id",
    "taxonomy",
    "term_ids"
  ],
  "title": "wp_set_post_termsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_add_post_term-c94b5024"></a>

## wp_add_post_term

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Add a term to a post without removing existing terms
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5248-L5256) · Schema: tools/list.

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
    "post_id",
    "taxonomy",
    "term_id"
  ],
  "title": "wp_add_post_termArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_remove_post_term-9d4597b9"></a>

## wp_remove_post_term

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] WordPress tool. Remove a specific term from a post
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5258-L5266) · Schema: tools/list.

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
    "post_id",
    "taxonomy",
    "term_id"
  ],
  "title": "wp_remove_post_termArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_delete_term_meta-c079367c"></a>

## wp_delete_term_meta

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] WordPress tool. Delete a meta key from a taxonomy term
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5268-L5276) · Schema: tools/list.

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
      "title": "Meta Key",
      "type": "string"
    }
  },
  "required": [
    "taxonomy",
    "term_id",
    "meta_key"
  ],
  "title": "wp_delete_term_metaArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_trash_comment-f17705c6"></a>

## wp_trash_comment

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Move a comment to trash (reversible)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5278-L5284) · Schema: tools/list.

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
  "title": "wp_trash_commentArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_untrash_comment-7d6c3f06"></a>

## wp_untrash_comment

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Restore a comment from trash
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5286-L5292) · Schema: tools/list.

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
  "title": "wp_untrash_commentArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_hold_comment-618c2467"></a>

## wp_hold_comment

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Put a comment on hold (pending moderation)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5294-L5300) · Schema: tools/list.

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
  "title": "wp_hold_commentArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_unspam_comment-0bfe1f32"></a>

## wp_unspam_comment

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Mark a comment as NOT spam
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5302-L5308) · Schema: tools/list.

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
  "title": "wp_unspam_commentArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_empty_comment_trash-c1d6d40c"></a>

## wp_empty_comment_trash

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Permanently delete all trashed comments
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5310-L5314) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_empty_comment_trashArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_bulk_approve_comments-c0742b0e"></a>

## wp_bulk_approve_comments

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Approve multiple comments at once
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5316-L5322) · Schema: tools/list.

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
  "title": "wp_bulk_approve_commentsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_bulk_spam_comments-0be0a045"></a>

## wp_bulk_spam_comments

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Mark multiple comments as spam
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5324-L5330) · Schema: tools/list.

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
  "title": "wp_bulk_spam_commentsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_bulk_trash_comments-ec2082c4"></a>

## wp_bulk_trash_comments

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Move multiple comments to trash
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5332-L5338) · Schema: tools/list.

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
  "title": "wp_bulk_trash_commentsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_bulk_delete_comments-710a4ba8"></a>

## wp_bulk_delete_comments

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] WordPress tool. Permanently delete multiple comments
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5340-L5346) · Schema: tools/list.

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
  "title": "wp_bulk_delete_commentsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_close_post_comments-e22bb406"></a>

## wp_close_post_comments

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Close comments on a specific post/page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5348-L5354) · Schema: tools/list.

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
  "title": "wp_close_post_commentsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_open_post_comments-39b0db63"></a>

## wp_open_post_comments

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Open comments on a specific post/page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5356-L5362) · Schema: tools/list.

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
  "title": "wp_open_post_commentsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_pending_comments-0ea555ea"></a>

## wp_get_pending_comments

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get all comments pending moderation
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5364-L5371) · Schema: tools/list.

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
  "title": "wp_get_pending_commentsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_user_by_email-8cf7f036"></a>

## wp_get_user_by_email

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Find a WordPress user by email address
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5373-L5379) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
  "title": "wp_get_user_by_emailArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_user_by_login-d7453078"></a>

## wp_get_user_by_login

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Find a WordPress user by username/login
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5381-L5387) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "login": {
      "title": "Login",
      "type": "string"
    }
  },
  "required": [
    "login"
  ],
  "title": "wp_get_user_by_loginArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_send_password_reset_email-5b365752"></a>

## wp_send_password_reset_email

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Send a password reset email to a user
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5389-L5396) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "user_id": {
      "default": null,
      "title": "User Id",
      "type": "integer"
    },
    "email": {
      "default": null,
      "title": "Email",
      "type": "string"
    }
  },
  "title": "wp_send_password_reset_emailArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_role_capabilities-4d72c13a"></a>

## wp_get_role_capabilities

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get all capabilities for a specific role
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5398-L5404) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "role": {
      "title": "Role",
      "type": "string"
    }
  },
  "required": [
    "role"
  ],
  "title": "wp_get_role_capabilitiesArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_all_user_meta-2eb1b79a"></a>

## wp_get_all_user_meta

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] WordPress tool. Get all meta values for a WordPress user
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5406-L5413) · Schema: tools/list.

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
  "title": "wp_get_all_user_metaArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_delete_user_meta-641d5440"></a>

## wp_delete_user_meta

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] WordPress tool. Delete a meta key from a WordPress user
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5415-L5422) · Schema: tools/list.

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
      "title": "Meta Key",
      "type": "string"
    }
  },
  "required": [
    "user_id",
    "meta_key"
  ],
  "title": "wp_delete_user_metaArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_create_application_password-194a66bd"></a>

## wp_create_application_password

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Create an application password for a user (for API access)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5424-L5431) · Schema: tools/list.

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
    "name": {
      "title": "Name",
      "type": "string"
    }
  },
  "required": [
    "user_id",
    "name"
  ],
  "title": "wp_create_application_passwordArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_list_application_passwords-b54d70f2"></a>

## wp_list_application_passwords

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] WordPress tool. List all application passwords for a user
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5433-L5440) · Schema: tools/list.

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
  "title": "wp_list_application_passwordsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_delete_application_password-3aae7ef5"></a>

## wp_delete_application_password

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] WordPress tool. Delete a specific application password
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5442-L5449) · Schema: tools/list.

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
  "title": "wp_delete_application_passwordArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_delete_all_application_passwords-be90c6d2"></a>

## wp_delete_all_application_passwords

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] WordPress tool. Delete all application passwords for a user
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5451-L5457) · Schema: tools/list.

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
  "title": "wp_delete_all_application_passwordsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_search_media-d8ffef7d"></a>

## wp_search_media

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] WordPress tool. Search media library by filename, title, or MIME type
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5459-L5480) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "search": {
      "default": null,
      "title": "Search",
      "type": "string"
    },
    "mime_type": {
      "default": null,
      "title": "Mime Type",
      "type": "string"
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
  "title": "wp_search_mediaArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_unattached_media-9fbe6391"></a>

## wp_get_unattached_media

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get media files not attached to any post
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5482-L5489) · Schema: tools/list.

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
    "mime_type": {
      "default": null,
      "title": "Mime Type",
      "type": "string"
    }
  },
  "title": "wp_get_unattached_mediaArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_bulk_delete_media-9d4b488d"></a>

## wp_bulk_delete_media

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] WordPress tool. Permanently delete multiple media items
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5491-L5497) · Schema: tools/list.

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
  "title": "wp_bulk_delete_mediaArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_image_sizes-65b565f7"></a>

## wp_get_image_sizes

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get all registered image sizes (thumbnail, medium, large, custom)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5499-L5503) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_get_image_sizesArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_media_details-6820467b"></a>

## wp_get_media_details

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get full details for a media file including dimensions, EXIF, file size
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5505-L5511) · Schema: tools/list.

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
  "title": "wp_get_media_detailsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_attach_media_to_post-3e5cc265"></a>

## wp_attach_media_to_post

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Attach a media file to a specific post
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5513-L5520) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "media_id": {
      "title": "Media Id",
      "type": "integer"
    },
    "post_id": {
      "title": "Post Id",
      "type": "integer"
    }
  },
  "required": [
    "media_id",
    "post_id"
  ],
  "title": "wp_attach_media_to_postArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_delete_option-fd2424b6"></a>

## wp_delete_option

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] WordPress tool. Delete a WordPress option by name
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5522-L5528) · Schema: tools/list.

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
  "title": "wp_delete_optionArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_list_options-862d3e7d"></a>

## wp_list_options

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] WordPress tool. List WordPress options, optionally filtered by prefix
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5530-L5541) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "search": {
      "default": null,
      "title": "Search",
      "type": "string"
    },
    "autoload": {
      "default": "any",
      "title": "Autoload",
      "type": "string"
    },
    "per_page": {
      "default": 50,
      "title": "Per Page",
      "type": "integer"
    }
  },
  "title": "wp_list_optionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_transient-22dff218"></a>

## wp_get_transient

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get a WordPress transient value
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5543-L5549) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "transient_key": {
      "title": "Transient Key",
      "type": "string"
    }
  },
  "required": [
    "transient_key"
  ],
  "title": "wp_get_transientArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_set_transient-a14d1c97"></a>

## wp_set_transient

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Set a WordPress transient with optional expiry
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5551-L5559) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "transient_key": {
      "title": "Transient Key",
      "type": "string"
    },
    "value": {
      "title": "Value",
      "type": "string"
    },
    "expiration": {
      "default": null,
      "title": "Expiration",
      "type": "integer"
    }
  },
  "required": [
    "transient_key",
    "value"
  ],
  "title": "wp_set_transientArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_delete_transient-6b36e852"></a>

## wp_delete_transient

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] WordPress tool. Delete a specific WordPress transient
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5561-L5567) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "transient_key": {
      "title": "Transient Key",
      "type": "string"
    }
  },
  "required": [
    "transient_key"
  ],
  "title": "wp_delete_transientArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_delete_all_transients-528a68be"></a>

## wp_delete_all_transients

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] WordPress tool. Delete all WordPress transients (clears all cached transients)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5569-L5575) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "include_site_transients": {
      "default": true,
      "title": "Include Site Transients",
      "type": "boolean"
    }
  },
  "title": "wp_delete_all_transientsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_list_reusable_blocks-0dc92b86"></a>

## wp_list_reusable_blocks

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] WordPress tool. List all WordPress reusable blocks
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5577-L5588) · Schema: tools/list.

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
    },
    "search": {
      "default": null,
      "title": "Search",
      "type": "string"
    }
  },
  "title": "wp_list_reusable_blocksArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_reusable_block-1253cd95"></a>

## wp_get_reusable_block

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get a specific reusable block by ID
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5590-L5596) · Schema: tools/list.

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
  "title": "wp_get_reusable_blockArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_create_reusable_block-e736284f"></a>

## wp_create_reusable_block

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Create a new reusable block
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5598-L5606) · Schema: tools/list.

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
  "title": "wp_create_reusable_blockArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_update_reusable_block-d960f64b"></a>

## wp_update_reusable_block

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Update a reusable block content or title
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5608-L5617) · Schema: tools/list.

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
  "title": "wp_update_reusable_blockArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_delete_reusable_block-b7d2c938"></a>

## wp_delete_reusable_block

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] WordPress tool. Delete a reusable block
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5619-L5627) · Schema: tools/list.

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
  "title": "wp_delete_reusable_blockArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_list_block_patterns-dd085ea4"></a>

## wp_list_block_patterns

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] WordPress tool. List all registered block patterns
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5629-L5636) · Schema: tools/list.

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
    }
  },
  "title": "wp_list_block_patternsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_list_pattern_categories-ffb0b94e"></a>

## wp_list_pattern_categories

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] WordPress tool. List all block pattern categories
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5638-L5642) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_list_pattern_categoriesArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_list_templates-3a3c2e2f"></a>

## wp_list_templates

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] WordPress tool. List Full Site Editing (FSE) templates
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5644-L5654) · Schema: tools/list.

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
    "theme": {
      "default": null,
      "title": "Theme",
      "type": "string"
    },
    "post_type": {
      "default": null,
      "title": "Post Type",
      "type": "string"
    }
  },
  "title": "wp_list_templatesArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_template-d6874b16"></a>

## wp_get_template

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get a specific FSE template by ID
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5656-L5662) · Schema: tools/list.

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
  "title": "wp_get_templateArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_update_template-265b599e"></a>

## wp_update_template

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Update FSE template content
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5664-L5673) · Schema: tools/list.

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
  "title": "wp_update_templateArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_delete_template-5cb157f2"></a>

## wp_delete_template

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] WordPress tool. Delete a customized FSE template (reverts to theme default)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5675-L5683) · Schema: tools/list.

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
  "title": "wp_delete_templateArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_list_template_parts-27436f34"></a>

## wp_list_template_parts

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] WordPress tool. List FSE template parts (header, footer, sidebar)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5685-L5694) · Schema: tools/list.

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
    "area": {
      "default": null,
      "title": "Area",
      "type": "string"
    }
  },
  "title": "wp_list_template_partsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_template_part-88432e64"></a>

## wp_get_template_part

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp, quote.

```text
[READ] WordPress tool. Get a specific FSE template part
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5696-L5701) · Schema: tools/list.

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
  "title": "wp_get_template_partArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_update_template_part-ab7046b4"></a>

## wp_update_template_part

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, quote, locals.

```text
[WRITE] WordPress tool. Update an FSE template part content
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5703-L5712) · Schema: tools/list.

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
  "title": "wp_update_template_partArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_create_template_part-f6342ac8"></a>

## wp_create_template_part

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Create a new FSE template part
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5714-L5723) · Schema: tools/list.

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
    "area": {
      "default": "uncategorized",
      "title": "Area",
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
  "title": "wp_create_template_partArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_delete_template_part-4d5ff156"></a>

## wp_delete_template_part

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().delete, \_wp, quote.

```text
[WRITE] WordPress tool. Delete a customized FSE template part
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5725-L5733) · Schema: tools/list.

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
  "title": "wp_delete_template_partArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_list_navigation_blocks-523e06f1"></a>

## wp_list_navigation_blocks

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] WordPress tool. List all navigation post types (block-based navigation menus)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5735-L5744) · Schema: tools/list.

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
      "default": "publish",
      "title": "Status",
      "type": "string"
    }
  },
  "title": "wp_list_navigation_blocksArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_navigation_block-e9da4661"></a>

## wp_get_navigation_block

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] WordPress tool. Get a specific navigation block with all items
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5746-L5751) · Schema: tools/list.

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
  "title": "wp_get_navigation_blockArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_create_navigation_block-a95a7d03"></a>

## wp_create_navigation_block

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Create a new block-based navigation menu
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5753-L5761) · Schema: tools/list.

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
  "title": "wp_create_navigation_blockArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_update_navigation_block-1098eea5"></a>

## wp_update_navigation_block

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Update a block-based navigation menu
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5763-L5772) · Schema: tools/list.

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
  "title": "wp_update_navigation_blockArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_delete_navigation_block-791d7912"></a>

## wp_delete_navigation_block

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] WordPress tool. Delete a block-based navigation menu
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5774-L5782) · Schema: tools/list.

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
  "title": "wp_delete_navigation_blockArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_search_plugins_org-1eb9e097"></a>

## wp_search_plugins_org

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, request\_params.update, requests.get, r.raise\_for\_status, \_trim, r.json, params.items.

```text
[READ] WordPress tool. Search the WordPress.org plugin repository
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5784-L5803) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "search": {
      "default": null,
      "title": "Search",
      "type": "string"
    },
    "per_page": {
      "default": 12,
      "title": "Per Page",
      "type": "integer"
    },
    "page": {
      "default": 1,
      "title": "Page",
      "type": "integer"
    },
    "browse": {
      "default": null,
      "title": "Browse",
      "type": "string"
    },
    "tag": {
      "default": null,
      "title": "Tag",
      "type": "string"
    }
  },
  "title": "wp_search_plugins_orgArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_plugin_info_org-de5442e2"></a>

## wp_get_plugin_info_org

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, requests.get, r.raise\_for\_status, \_trim, r.json.

```text
[READ] WordPress tool. Get detailed info about a plugin from WordPress.org (description, changelog, reviews)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5805-L5812) · Schema: tools/list.

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
  "title": "wp_get_plugin_info_orgArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_bulk_update_plugins-d790a6b9"></a>

## wp_bulk_update_plugins

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp, wp.get, \_unsupported\_from\_http.

```text
[WRITE] WordPress tool. Update multiple plugins at once
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5814-L5829) · Schema: tools/list.

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
  "title": "wp_bulk_update_pluginsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_update_all_plugins-662a7526"></a>

## wp_update_all_plugins

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_unsupported\_from\_http, \_wp.

```text
[WRITE] WordPress tool. Update all plugins that have available updates
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5831-L5842) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_update_all_pluginsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_auto_update_plugins-1401713d"></a>

## wp_get_auto_update_plugins

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, isinstance, \_wp().get, plugins.get, \_unsupported\_from\_http, \_wp, p.get.

```text
[READ] WordPress tool. Get list of plugins with auto-updates enabled
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5844-L5854) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_get_auto_update_pluginsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_toggle_plugin_auto_update-19c7c055"></a>

## wp_toggle_plugin_auto_update

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().put, \_unsupported\_from\_http, \_wp.

```text
[WRITE] WordPress tool. Enable or disable auto-updates for a plugin
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5856-L5865) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
      "title": "Enabled",
      "type": "boolean"
    }
  },
  "required": [
    "plugin",
    "enabled"
  ],
  "title": "wp_toggle_plugin_auto_updateArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_search_themes_org-13aba397"></a>

## wp_search_themes_org

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, request\_params.update, requests.get, r.raise\_for\_status, \_trim, r.json, params.items.

```text
[READ] WordPress tool. Search the WordPress.org theme repository
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5867-L5884) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "search": {
      "default": null,
      "title": "Search",
      "type": "string"
    },
    "per_page": {
      "default": 12,
      "title": "Per Page",
      "type": "integer"
    },
    "browse": {
      "default": null,
      "title": "Browse",
      "type": "string"
    },
    "tag": {
      "default": null,
      "title": "Tag",
      "type": "string"
    }
  },
  "title": "wp_search_themes_orgArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_theme_info_org-425383fb"></a>

## wp_get_theme_info_org

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, requests.get, r.raise\_for\_status, \_trim, r.json.

```text
[READ] WordPress tool. Get detailed info about a theme from WordPress.org
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5886-L5893) · Schema: tools/list.

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
  "title": "wp_get_theme_info_orgArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_delete_theme-842ea68e"></a>

## wp_delete_theme

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().delete, \_unsupported\_from\_http, \_wp.

```text
[WRITE] WordPress tool. Delete an installed theme
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5895-L5903) · Schema: tools/list.

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
  "title": "wp_delete_themeArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_parent_theme-6817cbb1"></a>

## wp_get_parent_theme

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, isinstance, theme.get, parent.get, \_wp.

```text
[READ] WordPress tool. Get info about the parent theme of a child theme
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5905-L5914) · Schema: tools/list.

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
  "title": "wp_get_parent_themeArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_toggle_theme_auto_update-2d43ae48"></a>

## wp_toggle_theme_auto_update

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().put, \_unsupported\_from\_http, \_wp.

```text
[WRITE] WordPress tool. Enable or disable auto-updates for a theme
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5916-L5925) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "stylesheet": {
      "title": "Stylesheet",
      "type": "string"
    },
    "enabled": {
      "title": "Enabled",
      "type": "boolean"
    }
  },
  "required": [
    "stylesheet",
    "enabled"
  ],
  "title": "wp_toggle_theme_auto_updateArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_list_global_style_variations-aad9b3d7"></a>

## wp_list_global_style_variations

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp\_global\_styles\_resolution\_hint.

```text
[READ] WordPress tool. List all available theme style variations
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5927-L5934) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_list_global_style_variationsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_current_global_styles-4ab08c7c"></a>

## wp_get_current_global_styles

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp\_global\_styles\_resolution\_hint.

```text
[READ] WordPress tool. Get current active global styles (colors, typography, spacing)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5936-L5939) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_get_current_global_stylesArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_update_global_styles_colors-735d93ff"></a>

## wp_update_global_styles_colors

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp\_global\_styles\_resolution\_hint.

```text
[WRITE] WordPress tool. Update global color palette in theme.json / global styles
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5941-L5951) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "colors": {
      "items": {},
      "title": "Colors",
      "type": "array"
    }
  },
  "required": [
    "colors"
  ],
  "title": "wp_update_global_styles_colorsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_update_global_styles_typography-89780cb2"></a>

## wp_update_global_styles_typography

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp\_global\_styles\_resolution\_hint, locals().items, locals.

```text
[WRITE] WordPress tool. Update global typography settings (font family, size, line height)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5953-L5966) · Schema: tools/list.

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
      "type": "string"
    },
    "line_height": {
      "default": null,
      "title": "Line Height",
      "type": "string"
    },
    "element": {
      "default": "body",
      "title": "Element",
      "type": "string"
    }
  },
  "title": "wp_update_global_styles_typographyArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_list_cron_events-affce283"></a>

## wp_list_cron_events

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] WordPress tool. List all scheduled cron events with next run time
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5968-L5972) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_list_cron_eventsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_run_cron_event-586daad1"></a>

## wp_run_cron_event

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Run a specific cron event immediately
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5974-L5980) · Schema: tools/list.

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
  "title": "wp_run_cron_eventArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_add_cron_event-6e894712"></a>

## wp_add_cron_event

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Add a new WordPress cron event
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5982-L5991) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
      "title": "Recurrence",
      "type": "string"
    },
    "args": {
      "default": null,
      "items": {},
      "title": "Args",
      "type": "array"
    },
    "next_run": {
      "default": null,
      "title": "Next Run",
      "type": "string"
    }
  },
  "required": [
    "hook",
    "recurrence"
  ],
  "title": "wp_add_cron_eventArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_delete_all_cron_events-74f08148"></a>

## wp_delete_all_cron_events

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] WordPress tool. Remove all scheduled cron events for a specific hook
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L5993-L5999) · Schema: tools/list.

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
  "title": "wp_delete_all_cron_eventsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_list_privacy_requests-5c3bbd93"></a>

## wp_list_privacy_requests

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] WordPress tool. List privacy requests (data export/erasure)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L6001-L6012) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "type": {
      "default": "any",
      "title": "Type",
      "type": "string"
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
    }
  },
  "title": "wp_list_privacy_requestsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_create_privacy_export_request-51a8b9a0"></a>

## wp_create_privacy_export_request

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Create a personal data export request for a user email
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L6014-L6020) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
  "title": "wp_create_privacy_export_requestArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_create_privacy_erasure_request-2feca29e"></a>

## wp_create_privacy_erasure_request

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Create a personal data erasure request for a user email
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L6022-L6028) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
  "title": "wp_create_privacy_erasure_requestArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_privacy_policy_page-09cb9758"></a>

## wp_get_privacy_policy_page

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get the ID and URL of the privacy policy page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L6030-L6034) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_get_privacy_policy_pageArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_set_privacy_policy_page-ec38276e"></a>

## wp_set_privacy_policy_page

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Set the privacy policy page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L6036-L6042) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
  "title": "wp_set_privacy_policy_pageArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_export_url-34e36a5f"></a>

## wp_get_export_url

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get the download URL for a WordPress content export (WXR)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L6044-L6054) · Schema: tools/list.

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
    "author": {
      "default": null,
      "title": "Author",
      "type": "integer"
    },
    "category": {
      "default": null,
      "title": "Category",
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
    }
  },
  "title": "wp_get_export_urlArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_clear_all_transients-5c5a55a6"></a>

## wp_clear_all_transients

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] WordPress tool. Delete ALL WordPress transients (both regular and network)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L6056-L6060) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_clear_all_transientsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_check_core_update-5f5de260"></a>

## wp_check_core_update

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Check if a WordPress core update is available
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L6062-L6066) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_check_core_updateArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_update_core-458a4ae6"></a>

## wp_update_core

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Update WordPress core to the latest version
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L6068-L6074) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "version": {
      "default": null,
      "title": "Version",
      "type": "string"
    }
  },
  "title": "wp_update_coreArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_active_installs-8972c16b"></a>

## wp_get_active_installs

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get count of active plugin/theme installs and site information
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L6076-L6080) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_get_active_installsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_ping_search_engines-67ab6ebd"></a>

## wp_ping_search_engines

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Notify search engines (Google, Bing) about site updates
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L6082-L6086) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_ping_search_enginesArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_set_front_page-c45346f9"></a>

## wp_set_front_page

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Set site front page to a static page or latest posts
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L6088-L6096) · Schema: tools/list.

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
  "title": "wp_set_front_pageArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_set_posts_per_page-59a76f7f"></a>

## wp_set_posts_per_page

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Set how many posts show per page on blog/archive
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L6098-L6105) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "posts_per_page": {
      "title": "Posts Per Page",
      "type": "integer"
    },
    "posts_per_rss": {
      "default": null,
      "title": "Posts Per Rss",
      "type": "integer"
    }
  },
  "required": [
    "posts_per_page"
  ],
  "title": "wp_set_posts_per_pageArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_set_default_category-0776588d"></a>

## wp_set_default_category

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Set the default category for new posts
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L6107-L6113) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "category_id": {
      "title": "Category Id",
      "type": "integer"
    }
  },
  "required": [
    "category_id"
  ],
  "title": "wp_set_default_categoryArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_set_timezone-23e102c0"></a>

## wp_set_timezone

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Set the site timezone
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L6115-L6121) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "timezone": {
      "title": "Timezone",
      "type": "string"
    }
  },
  "required": [
    "timezone"
  ],
  "title": "wp_set_timezoneArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_set_date_time_format-d3f14beb"></a>

## wp_set_date_time_format

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Set date and time format for the site
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L6123-L6130) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "date_format": {
      "default": null,
      "title": "Date Format",
      "type": "string"
    },
    "time_format": {
      "default": null,
      "title": "Time Format",
      "type": "string"
    }
  },
  "title": "wp_set_date_time_formatArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_set_site_language-07bd4401"></a>

## wp_set_site_language

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Set site language/locale
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L6132-L6138) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "language": {
      "title": "Language",
      "type": "string"
    }
  },
  "required": [
    "language"
  ],
  "title": "wp_set_site_languageArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_set_admin_email-670f8f18"></a>

## wp_set_admin_email

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Update the admin email address for the site
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L6140-L6146) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
  "title": "wp_set_admin_emailArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_toggle_user_registration-187b9b51"></a>

## wp_toggle_user_registration

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Enable or disable user registration (Anyone can register)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L6148-L6154) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
  "title": "wp_toggle_user_registrationArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_set_default_user_role-529b4d7d"></a>

## wp_set_default_user_role

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Set the default role for new user registrations
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L6156-L6162) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "role": {
      "title": "Role",
      "type": "string"
    }
  },
  "required": [
    "role"
  ],
  "title": "wp_set_default_user_roleArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_toggle_search_engine_visibility-0cb307f6"></a>

## wp_toggle_search_engine_visibility

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Enable or disable search engine indexing (Discourage search engines)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L6164-L6170) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "discourage": {
      "title": "Discourage",
      "type": "boolean"
    }
  },
  "required": [
    "discourage"
  ],
  "title": "wp_toggle_search_engine_visibilityArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_check_post_lock-4a6e63f1"></a>

## wp_check_post_lock

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Check if a post is currently locked for editing by another user
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L6172-L6178) · Schema: tools/list.

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
  "title": "wp_check_post_lockArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_render_shortcode-aa6204cb"></a>

## wp_render_shortcode

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Render a shortcode and return the output HTML
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L6180-L6187) · Schema: tools/list.

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
  "title": "wp_render_shortcodeArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_oembed-dcd4ec95"></a>

## wp_get_oembed

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get oEmbed data for a URL (YouTube, Twitter, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L6189-L6196) · Schema: tools/list.

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
    "maxwidth": {
      "default": 600,
      "title": "Maxwidth",
      "type": "integer"
    }
  },
  "required": [
    "url"
  ],
  "title": "wp_get_oembedArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_list_rest_routes-1ad673a3"></a>

## wp_list_rest_routes

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] WordPress tool. List all registered REST API routes on the site
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L6198-L6205) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

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
  "title": "wp_list_rest_routesArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_rest_request-7d33ea69"></a>

## wp_rest_request

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Make a raw REST API request to any WordPress endpoint
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L6207-L6215) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "path": {
      "title": "Path",
      "type": "string"
    },
    "method": {
      "default": "GET",
      "title": "Method",
      "type": "string"
    },
    "params": {
      "additionalProperties": true,
      "default": null,
      "title": "Params",
      "type": "object"
    }
  },
  "required": [
    "path"
  ],
  "title": "wp_rest_requestArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_site_urls-63f56962"></a>

## wp_get_site_urls

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get the site URL and home URL
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L6217-L6221) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_get_site_urlsArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_update_site_url-e0af091c"></a>

## wp_update_site_url

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Update the WordPress siteurl option
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L6223-L6229) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "siteurl": {
      "title": "Siteurl",
      "type": "string"
    }
  },
  "required": [
    "siteurl"
  ],
  "title": "wp_update_site_urlArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_update_home_url-d956f5cc"></a>

## wp_update_home_url

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WordPress tool. Update the WordPress home option
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L6231-L6237) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "home": {
      "title": "Home",
      "type": "string"
    }
  },
  "required": [
    "home"
  ],
  "title": "wp_update_home_urlArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_wp_version-4726875d"></a>

## wp_get_wp_version

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get the current WordPress version
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L6239-L6243) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_get_wp_versionArguments",
  "type": "object"
}
```

</details>

<a id="tool-wp_get_installed_languages-bd80e1e6"></a>

## wp_get_installed_languages

Handler: Other product (tools/wordpress/core.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WordPress tool. Get all installed language packs
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/core.py#L6245-L6249) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "wp_get_installed_languagesArguments",
  "type": "object"
}
```

</details>

<a id="tool-amp_detect-c2b03543"></a>

## amp_detect

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Check if the AMP plugin is installed and active, and get its current configuration
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L27-L31) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "amp_detectArguments",
  "type": "object"
}
```

</details>

<a id="tool-amp_configure-a14bed35"></a>

## amp_configure

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Configure AMP plugin mode and settings
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L33-L41) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "mode": {
      "default": null,
      "title": "Mode",
      "type": "string"
    },
    "all_templates_supported": {
      "default": null,
      "title": "All Templates Supported",
      "type": "boolean"
    },
    "mobile_redirect": {
      "default": null,
      "title": "Mobile Redirect",
      "type": "boolean"
    }
  },
  "title": "amp_configureArguments",
  "type": "object"
}
```

</details>

<a id="tool-amp_validate_url-44c15efc"></a>

## amp_validate_url

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Validate an AMP page URL for AMP compliance errors
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L43-L50) · Schema: tools/list.

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
    },
    "post_id": {
      "default": null,
      "title": "Post Id",
      "type": "integer"
    }
  },
  "title": "amp_validate_urlArguments",
  "type": "object"
}
```

</details>

<a id="tool-amp_supported_templates_set-fd523063"></a>

## amp_supported_templates_set

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Configure which templates/content types use AMP (posts, pages, archives, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L52-L65) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "posts": {
      "default": null,
      "title": "Posts",
      "type": "boolean"
    },
    "pages": {
      "default": null,
      "title": "Pages",
      "type": "boolean"
    },
    "archives": {
      "default": null,
      "title": "Archives",
      "type": "boolean"
    },
    "categories": {
      "default": null,
      "title": "Categories",
      "type": "boolean"
    },
    "tags": {
      "default": null,
      "title": "Tags",
      "type": "boolean"
    },
    "search": {
      "default": null,
      "title": "Search",
      "type": "boolean"
    },
    "author": {
      "default": null,
      "title": "Author",
      "type": "boolean"
    },
    "homepage": {
      "default": null,
      "title": "Homepage",
      "type": "boolean"
    }
  },
  "title": "amp_supported_templates_setArguments",
  "type": "object"
}
```

</details>

<a id="tool-pwa_detect-1b36e93e"></a>

## pwa_detect

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Check if a PWA plugin is installed (PWA for WP, Super Progressive Web Apps, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L67-L71) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "pwa_detectArguments",
  "type": "object"
}
```

</details>

<a id="tool-pwa_manifest_get-98b827b4"></a>

## pwa_manifest_get

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Get the web app manifest (manifest.json) configuration
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L73-L77) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "pwa_manifest_getArguments",
  "type": "object"
}
```

</details>

<a id="tool-pwa_manifest_set-cf743834"></a>

## pwa_manifest_set

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Update the web app manifest settings (name, icons, colors, display mode)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L79-L94) · Schema: tools/list.

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
    "short_name": {
      "default": null,
      "title": "Short Name",
      "type": "string"
    },
    "description": {
      "default": null,
      "title": "Description",
      "type": "string"
    },
    "start_url": {
      "default": "/",
      "title": "Start Url",
      "type": "string"
    },
    "display": {
      "default": null,
      "title": "Display",
      "type": "string"
    },
    "orientation": {
      "default": null,
      "title": "Orientation",
      "type": "string"
    },
    "theme_color": {
      "default": null,
      "title": "Theme Color",
      "type": "string"
    },
    "background_color": {
      "default": null,
      "title": "Background Color",
      "type": "string"
    },
    "icon_url": {
      "default": null,
      "title": "Icon Url",
      "type": "string"
    },
    "categories": {
      "default": null,
      "items": {},
      "title": "Categories",
      "type": "array"
    }
  },
  "title": "pwa_manifest_setArguments",
  "type": "object"
}
```

</details>

<a id="tool-pwa_service_worker_configure-97223006"></a>

## pwa_service_worker_configure

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Configure service worker settings (caching strategy, offline page, push support)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L96-L107) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "caching_strategy": {
      "default": null,
      "title": "Caching Strategy",
      "type": "string"
    },
    "offline_page": {
      "default": null,
      "title": "Offline Page",
      "type": "string"
    },
    "precache_urls": {
      "default": null,
      "items": {},
      "title": "Precache Urls",
      "type": "array"
    },
    "cache_expiration_hours": {
      "default": 24,
      "title": "Cache Expiration Hours",
      "type": "integer"
    },
    "exclude_urls": {
      "default": null,
      "items": {},
      "title": "Exclude Urls",
      "type": "array"
    },
    "push_notifications": {
      "default": null,
      "title": "Push Notifications",
      "type": "boolean"
    }
  },
  "title": "pwa_service_worker_configureArguments",
  "type": "object"
}
```

</details>

<a id="tool-headless_get_rest_config-223aefbe"></a>

## headless_get_rest_config

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Get REST API configuration and available namespaces for headless WordPress use
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L109-L113) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "headless_get_rest_configArguments",
  "type": "object"
}
```

</details>

<a id="tool-headless_cors_configure-f5eb025b"></a>

## headless_cors_configure

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Configure CORS headers for headless WordPress frontend (allow cross-origin REST API access)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L115-L125) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "allowed_origins": {
      "items": {},
      "title": "Allowed Origins",
      "type": "array"
    },
    "allowed_methods": {
      "default": null,
      "items": {},
      "title": "Allowed Methods",
      "type": "array"
    },
    "allowed_headers": {
      "default": null,
      "items": {},
      "title": "Allowed Headers",
      "type": "array"
    },
    "allow_credentials": {
      "default": true,
      "title": "Allow Credentials",
      "type": "boolean"
    },
    "max_age": {
      "default": 86400,
      "title": "Max Age",
      "type": "integer"
    }
  },
  "required": [
    "allowed_origins"
  ],
  "title": "headless_cors_configureArguments",
  "type": "object"
}
```

</details>

<a id="tool-booking_detect_plugin-18b8726c"></a>

## booking_detect_plugin

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Detect which booking/appointments plugin is installed (Amelia, BookingPress, Booked, Simply Schedule Appointments)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L127-L131) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "booking_detect_pluginArguments",
  "type": "object"
}
```

</details>

<a id="tool-booking_slots_list-c0226a46"></a>

## booking_slots_list

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List available booking time slots for a service/provider on a given date
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L133-L143) · Schema: tools/list.

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
    "date": {
      "title": "Date",
      "type": "string"
    },
    "provider_id": {
      "default": null,
      "title": "Provider Id",
      "type": "integer"
    },
    "date_end": {
      "default": null,
      "title": "Date End",
      "type": "string"
    },
    "location_id": {
      "default": null,
      "title": "Location Id",
      "type": "integer"
    }
  },
  "required": [
    "service_id",
    "date"
  ],
  "title": "booking_slots_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-booking_create-016101cb"></a>

## booking_create

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a new booking/appointment using whichever booking plugin is active
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L145-L164) · Schema: tools/list.

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
    "date": {
      "title": "Date",
      "type": "string"
    },
    "time": {
      "title": "Time",
      "type": "string"
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
    "customer_name": {
      "default": null,
      "title": "Customer Name",
      "type": "string"
    },
    "customer_email": {
      "default": null,
      "title": "Customer Email",
      "type": "string"
    },
    "customer_phone": {
      "default": null,
      "title": "Customer Phone",
      "type": "string"
    },
    "duration": {
      "default": null,
      "title": "Duration",
      "type": "integer"
    },
    "persons": {
      "default": 1,
      "title": "Persons",
      "type": "integer"
    },
    "status": {
      "default": "approved",
      "title": "Status",
      "type": "string"
    },
    "notes": {
      "default": null,
      "title": "Notes",
      "type": "string"
    },
    "location_id": {
      "default": null,
      "title": "Location Id",
      "type": "integer"
    },
    "custom_fields": {
      "additionalProperties": true,
      "default": null,
      "title": "Custom Fields",
      "type": "object"
    }
  },
  "required": [
    "service_id",
    "date",
    "time"
  ],
  "title": "booking_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-booking_cancel-a6045f5e"></a>

## booking_cancel

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Cancel an existing booking/appointment
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L166-L174) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "booking_id": {
      "title": "Booking Id",
      "type": "integer"
    },
    "reason": {
      "default": null,
      "title": "Reason",
      "type": "string"
    },
    "notify": {
      "default": true,
      "title": "Notify",
      "type": "boolean"
    }
  },
  "required": [
    "booking_id"
  ],
  "title": "booking_cancelArguments",
  "type": "object"
}
```

</details>

<a id="tool-booking_reschedule-7e816a51"></a>

## booking_reschedule

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Reschedule an existing booking to a new date/time
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L176-L186) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "booking_id": {
      "title": "Booking Id",
      "type": "integer"
    },
    "new_date": {
      "title": "New Date",
      "type": "string"
    },
    "new_time": {
      "title": "New Time",
      "type": "string"
    },
    "provider_id": {
      "default": null,
      "title": "Provider Id",
      "type": "integer"
    },
    "notify": {
      "default": true,
      "title": "Notify",
      "type": "boolean"
    }
  },
  "required": [
    "booking_id",
    "new_date",
    "new_time"
  ],
  "title": "booking_rescheduleArguments",
  "type": "object"
}
```

</details>

<a id="tool-booking_customers_list-e773be39"></a>

## booking_customers_list

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List customers/clients from the booking system
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L188-L196) · Schema: tools/list.

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
  "title": "booking_customers_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-booking_services_list-35bae4bc"></a>

## booking_services_list

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List bookable services/appointment types
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L198-L208) · Schema: tools/list.

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
      "default": "active",
      "title": "Status",
      "type": "string"
    }
  },
  "title": "booking_services_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-booking_staff_list-0e496d8c"></a>

## booking_staff_list

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List staff members/providers from the booking system
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L210-L219) · Schema: tools/list.

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
    }
  },
  "title": "booking_staff_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-booking_settings_get-ce86bfb8"></a>

## booking_settings_get

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Get booking plugin general settings (business hours, timezone, notification settings, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L221-L225) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "booking_settings_getArguments",
  "type": "object"
}
```

</details>

<a id="tool-booking_calendar_export-c6ff85fc"></a>

## booking_calendar_export

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Export bookings in a date range as a list (for calendar sync or reporting)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L227-L239) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "date_from": {
      "title": "Date From",
      "type": "string"
    },
    "date_to": {
      "title": "Date To",
      "type": "string"
    },
    "provider_id": {
      "default": null,
      "title": "Provider Id",
      "type": "integer"
    },
    "service_id": {
      "default": null,
      "title": "Service Id",
      "type": "integer"
    },
    "status": {
      "default": "approved",
      "title": "Status",
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
  "required": [
    "date_from",
    "date_to"
  ],
  "title": "booking_calendar_exportArguments",
  "type": "object"
}
```

</details>

<a id="tool-bp_members_list-24441150"></a>

## bp_members_list

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List BuddyPress community members
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L241-L251) · Schema: tools/list.

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
    "type": {
      "default": "active",
      "title": "Type",
      "type": "string"
    },
    "exclude": {
      "default": null,
      "items": {},
      "title": "Exclude",
      "type": "array"
    }
  },
  "title": "bp_members_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-bp_groups_list-71e913bb"></a>

## bp_groups_list

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List BuddyPress groups
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L253-L264) · Schema: tools/list.

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
    "type": {
      "default": "active",
      "title": "Type",
      "type": "string"
    },
    "status": {
      "default": null,
      "title": "Status",
      "type": "string"
    },
    "user_id": {
      "default": null,
      "title": "User Id",
      "type": "integer"
    }
  },
  "title": "bp_groups_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-bp_groups_create-33a942b8"></a>

## bp_groups_create

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a new BuddyPress group
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L266-L277) · Schema: tools/list.

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
    "status": {
      "default": "public",
      "title": "Status",
      "type": "string"
    },
    "creator_id": {
      "default": null,
      "title": "Creator Id",
      "type": "integer"
    },
    "enable_forum": {
      "default": false,
      "title": "Enable Forum",
      "type": "boolean"
    },
    "parent_id": {
      "default": null,
      "title": "Parent Id",
      "type": "integer"
    }
  },
  "required": [
    "name"
  ],
  "title": "bp_groups_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-bp_groups_update-20af1154"></a>

## bp_groups_update

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().put, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Update an existing BuddyPress group
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L279-L290) · Schema: tools/list.

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
    "description": {
      "default": null,
      "title": "Description",
      "type": "string"
    },
    "status": {
      "default": null,
      "title": "Status",
      "type": "string"
    },
    "enable_forum": {
      "default": null,
      "title": "Enable Forum",
      "type": "boolean"
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
  "title": "bp_groups_updateArguments",
  "type": "object"
}
```

</details>

<a id="tool-bp_groups_delete-956704c8"></a>

## bp_groups_delete

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] Tool tool. Delete a BuddyPress group
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L292-L298) · Schema: tools/list.

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
  "title": "bp_groups_deleteArguments",
  "type": "object"
}
```

</details>

<a id="tool-bp_activity_list-4877ef26"></a>

## bp_activity_list

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List BuddyPress activity stream items
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L300-L315) · Schema: tools/list.

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
    "type": {
      "default": null,
      "title": "Type",
      "type": "string"
    },
    "component": {
      "default": null,
      "title": "Component",
      "type": "string"
    },
    "user_id": {
      "default": null,
      "title": "User Id",
      "type": "integer"
    },
    "group_id": {
      "default": null,
      "title": "Group Id",
      "type": "integer"
    },
    "display_comments": {
      "default": "threaded",
      "title": "Display Comments",
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
  "title": "bp_activity_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-bp_activity_create-b63b8ddc"></a>

## bp_activity_create

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a new BuddyPress activity update
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L317-L329) · Schema: tools/list.

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
    "user_id": {
      "default": null,
      "title": "User Id",
      "type": "integer"
    },
    "component": {
      "default": "activity",
      "title": "Component",
      "type": "string"
    },
    "type": {
      "default": "activity_update",
      "title": "Type",
      "type": "string"
    },
    "primary_item_id": {
      "default": null,
      "title": "Primary Item Id",
      "type": "integer"
    },
    "secondary_item_id": {
      "default": null,
      "title": "Secondary Item Id",
      "type": "integer"
    },
    "hidden": {
      "default": false,
      "title": "Hidden",
      "type": "boolean"
    }
  },
  "required": [
    "content"
  ],
  "title": "bp_activity_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-bp_messages_send-72280fd3"></a>

## bp_messages_send

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Send a private message via BuddyPress
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L331-L341) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "recipients": {
      "items": {},
      "title": "Recipients",
      "type": "array"
    },
    "message": {
      "title": "Message",
      "type": "string"
    },
    "sender_id": {
      "default": null,
      "title": "Sender Id",
      "type": "integer"
    },
    "subject": {
      "default": null,
      "title": "Subject",
      "type": "string"
    },
    "thread_id": {
      "default": null,
      "title": "Thread Id",
      "type": "integer"
    }
  },
  "required": [
    "recipients",
    "message"
  ],
  "title": "bp_messages_sendArguments",
  "type": "object"
}
```

</details>

<a id="tool-bp_friendship_create-e3d10532"></a>

## bp_friendship_create

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Send a friendship request or create a friendship between two BuddyPress users
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L343-L351) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "initiator_id": {
      "title": "Initiator Id",
      "type": "integer"
    },
    "friend_id": {
      "title": "Friend Id",
      "type": "integer"
    },
    "force": {
      "default": false,
      "title": "Force",
      "type": "boolean"
    }
  },
  "required": [
    "initiator_id",
    "friend_id"
  ],
  "title": "bp_friendship_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-bp_xprofile_fields_list-1d6bca4f"></a>

## bp_xprofile_fields_list

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List BuddyPress extended profile (xProfile) field groups and fields
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L353-L363) · Schema: tools/list.

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
    "profile_group_id": {
      "default": null,
      "title": "Profile Group Id",
      "type": "integer"
    },
    "fetch_field_data": {
      "default": false,
      "title": "Fetch Field Data",
      "type": "boolean"
    },
    "member_type": {
      "default": null,
      "title": "Member Type",
      "type": "string"
    }
  },
  "title": "bp_xprofile_fields_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-bp_xprofile_field_update-354f3bfc"></a>

## bp_xprofile_field_update

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Update a BuddyPress xProfile field value for a user
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L365-L373) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "field_id": {
      "title": "Field Id",
      "type": "integer"
    },
    "user_id": {
      "title": "User Id",
      "type": "integer"
    },
    "value": {
      "title": "Value",
      "type": "string"
    }
  },
  "required": [
    "field_id",
    "user_id",
    "value"
  ],
  "title": "bp_xprofile_field_updateArguments",
  "type": "object"
}
```

</details>

<a id="tool-bbpress_forums_list-facf2ae8"></a>

## bbpress_forums_list

Handler: Other product (tools/wordpress/integrations.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. List bbPress forums
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/integrations.py#L375-L387) · Schema: tools/list.

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
    "parent": {
      "default": null,
      "title": "Parent",
      "type": "integer"
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
  "title": "bbpress_forums_listArguments",
  "type": "object"
}
```

</details>
