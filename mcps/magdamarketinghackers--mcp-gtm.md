# magdamarketinghackers/MCP-GTM

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/magdamarketinghackers/MCP-GTM) · [Machine-readable inventory](../data/mcps/magdamarketinghackers--mcp-gtm.json)

**77 extracted tools.** Discover containers by public ID, preview draft changes, and manage versions, environments, and account access.

Snapshot: 2026-10-13 · [d90bc3d73394](https://github.com/magdamarketinghackers/MCP-GTM/tree/d90bc3d73394a8c3e444aeb79be5d46a6df342f2) · Method: source.

Exposure: All ALL_TOOLS entries are returned unconditionally by list_tools; no configured or read-only conditional tool groups. Google operations require configured OAuth and stored user tokens; dry_run defaults True where registered.

## Limits

- Static extraction of exact registered schema constructors; no MCP transport or authenticated GTM operation was executed.
- List handlers generally perform one API request without nextPageToken pagination; results may be incomplete.
- Constructs fingerprint query parameters but never passes them to client.put, so optimistic locking input is ignored.
- Posts {entity: entity}, while discovery requires the Entity resource directly as request body; execution needs correction.
- Posts arrays of entity objects in the body, while discovery requires tagId/triggerId/variableId query parameters and a Folder body; execution needs correction.
- Caches discovered containers but does not set any active container; its registered description is stale.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`list_users`](#tool-list_users-73cf19f8) | Supporting | Reads locally stored authorized users and reports token presence and cached container counts. |
| [`authorize_user`](#tool-authorize_user-6bf5f9d1) | Supporting | Builds an OAuth authorization-start URL without authenticating or calling Google. |
| [`get_audit_log`](#tool-get_audit_log-ff9903ab) | Supporting | Reads the local audit log, defaulting to the last 50 entries. |
| [`list_accounts`](#tool-list_accounts-1090ba6a) | GTM | List all GTM accounts accessible to the user; handler uses GTM API v2 GET. |
| [`get_account`](#tool-get_account-896a62e4) | GTM | Get details for a specific GTM account; handler uses GTM API v2 GET. |
| [`update_account`](#tool-update_account-ad80eae4) | GTM | Update a GTM account name; handler uses GTM API v2 PUT after preview when dry\_run=False. |
| [`list_containers`](#tool-list_containers-a53dbc4d) | GTM | List containers in a GTM account; handler uses GTM API v2 GET. |
| [`get_container`](#tool-get_container-9a0808eb) | GTM | Get details for a specific container; handler uses GTM API v2 GET. |
| [`create_container`](#tool-create_container-352b1505) | GTM | Create a new GTM container; handler uses GTM API v2 POST after preview when dry\_run=False. |
| [`update_container`](#tool-update_container-cacd7302) | GTM | Update a container name/usage context; handler uses GTM API v2 PUT after preview when dry\_run=False. |
| [`delete_container`](#tool-delete_container-a8bba20f) | GTM | Delete a container permanently; handler uses GTM API v2 DELETE after preview when dry\_run=False. |
| [`get_container_snippet`](#tool-get_container_snippet-abfe46b2) | GTM | Get the GTM snippet code (JS/noscript) to embed on your site; handler uses GTM API v2 GET. |
| [`discover_containers`](#tool-discover_containers-1c24dd8a) | GTM | Fetch all GTM accounts and containers, save to store, set first as active; handler uses GTM API v2 GET. Caches discovered containers but does not set any active container; its registered description is stale. |
| [`list_workspaces`](#tool-list_workspaces-af844119) | GTM | List workspaces in the active (or specified) container; handler uses GTM API v2 GET. |
| [`get_workspace`](#tool-get_workspace-80ffee6a) | GTM | Get workspace details; handler uses GTM API v2 GET. |
| [`create_workspace`](#tool-create_workspace-a1af8425) | GTM | Create a new workspace; handler uses GTM API v2 POST after preview when dry\_run=False. |
| [`delete_workspace`](#tool-delete_workspace-50bbbf2e) | GTM | Delete workspace and all unpublished changes; handler uses GTM API v2 DELETE after preview when dry\_run=False. |
| [`get_workspace_status`](#tool-get_workspace_status-23f21bb9) | GTM | List all pending (uncommitted) changes in a workspace; handler uses GTM API v2 GET. |
| [`update_workspace`](#tool-update_workspace-1a76edb7) | GTM | Rename a workspace or update its description; handler uses GTM API v2 PUT after preview when dry\_run=False. |
| [`quick_preview_workspace`](#tool-quick_preview_workspace-2e1cb327) | GTM | Compile and validate workspace entities without creating a version; handler uses GTM API v2 POST. |
| [`sync_workspace`](#tool-sync_workspace-4b02a6d9) | GTM | Sync workspace with the latest container version; returns merge conflicts if any; handler uses GTM API v2 POST. |
| [`resolve_conflict_workspace`](#tool-resolve_conflict_workspace-60e23e63) | GTM | Resolve a merge conflict in a workspace; handler uses GTM API v2 POST after preview when dry\_run=False. Posts {entity: entity}, while discovery requires the Entity resource directly as request body; execution needs correction. |
| [`list_tags`](#tool-list_tags-86fc0f9c) | GTM | List all tags in a workspace; handler uses GTM API v2 GET. |
| [`get_tag`](#tool-get_tag-749bab4b) | GTM | Get full tag details including parameters; handler uses GTM API v2 GET. |
| [`create_tag`](#tool-create_tag-e71dcc44) | GTM | Create a tag; handler uses GTM API v2 POST after preview when dry\_run=False. |
| [`update_tag`](#tool-update_tag-ff9e7962) | GTM | Update a tag (full replacement); handler uses GTM API v2 PUT after preview when dry\_run=False. Constructs fingerprint query parameters but never passes them to client.put, so optimistic locking input is ignored. |
| [`delete_tag`](#tool-delete_tag-1345d160) | GTM | Delete a tag; handler uses GTM API v2 DELETE after preview when dry\_run=False. |
| [`revert_tag`](#tool-revert_tag-4c84be02) | GTM | Revert a tag to its state in the published container version; handler uses GTM API v2 POST after preview when dry\_run=False. |
| [`list_triggers`](#tool-list_triggers-4ca44d74) | GTM | List all triggers in a workspace; handler uses GTM API v2 GET. |
| [`get_trigger`](#tool-get_trigger-e2f13ee6) | GTM | Get full trigger details; handler uses GTM API v2 GET. |
| [`create_trigger`](#tool-create_trigger-71660c93) | GTM | Create a trigger; handler uses GTM API v2 POST after preview when dry\_run=False. |
| [`update_trigger`](#tool-update_trigger-60ddeb77) | GTM | Update a trigger (full replacement); handler uses GTM API v2 PUT after preview when dry\_run=False. |
| [`delete_trigger`](#tool-delete_trigger-ec67de91) | GTM | Delete a trigger; handler uses GTM API v2 DELETE after preview when dry\_run=False. |
| [`revert_trigger`](#tool-revert_trigger-8e193d59) | GTM | Revert a trigger to its state in the published container version; handler uses GTM API v2 POST after preview when dry\_run=False. |
| [`list_variables`](#tool-list_variables-1adaa2a1) | GTM | List all custom variables in a workspace; handler uses GTM API v2 GET. |
| [`get_variable`](#tool-get_variable-ba0cd778) | GTM | Get full variable details; handler uses GTM API v2 GET. |
| [`create_variable`](#tool-create_variable-2f5e4ddb) | GTM | Create a variable; handler uses GTM API v2 POST after preview when dry\_run=False. |
| [`update_variable`](#tool-update_variable-63c48ad7) | GTM | Update a variable (full replacement); handler uses GTM API v2 PUT after preview when dry\_run=False. |
| [`delete_variable`](#tool-delete_variable-3ead6fdb) | GTM | Delete a variable; handler uses GTM API v2 DELETE after preview when dry\_run=False. |
| [`revert_variable`](#tool-revert_variable-7fb63cb4) | GTM | Revert a variable to its state in the published container version; handler uses GTM API v2 POST after preview when dry\_run=False. |
| [`list_builtin_variables`](#tool-list_builtin_variables-7866d3ce) | GTM | List all enabled built-in variables in a workspace; handler uses GTM API v2 GET. |
| [`enable_builtin_variables`](#tool-enable_builtin_variables-bf909ea0) | GTM | Enable built-in variables; handler uses GTM API v2 POST after preview when dry\_run=False. |
| [`disable_builtin_variables`](#tool-disable_builtin_variables-1d6fe5b0) | GTM | Disable built-in variables; handler uses GTM API v2 DELETE after preview when dry\_run=False. |
| [`revert_builtin_variable`](#tool-revert_builtin_variable-bc9d4801) | GTM | Revert a built-in variable to its published state; handler uses GTM API v2 POST after preview when dry\_run=False. |
| [`list_version_headers`](#tool-list_version_headers-bec4b502) | GTM | List version summaries for a container; handler uses GTM API v2 GET. |
| [`get_version`](#tool-get_version-e67e6685) | GTM | Get full version details (all tags, triggers, variables); handler uses GTM API v2 GET. |
| [`get_live_version`](#tool-get_live_version-ffef26dc) | GTM | Get the currently published (live) container version; handler uses GTM API v2 GET. |
| [`create_version`](#tool-create_version-fc39e936) | GTM | Create a version snapshot from a workspace; handler uses GTM API v2 POST after preview when dry\_run=False. |
| [`publish_version`](#tool-publish_version-0628e4c5) | GTM | Publish a version to production (LIVE); handler uses GTM API v2 POST after preview when dry\_run=False. |
| [`get_latest_version_header`](#tool-get_latest_version_header-e7218219) | GTM | Get summary header of the latest container version; handler uses GTM API v2 GET. |
| [`update_version`](#tool-update_version-23a8648e) | GTM | Update a version name/description; handler uses GTM API v2 PUT after preview when dry\_run=False. |
| [`delete_version`](#tool-delete_version-f7b6682e) | GTM | Delete a container version; handler uses GTM API v2 DELETE after preview when dry\_run=False. |
| [`set_latest_version`](#tool-set_latest_version-fb529238) | GTM | Set a version as the 'latest' (what workspaces sync against); handler uses GTM API v2 POST after preview when dry\_run=False. |
| [`undelete_version`](#tool-undelete_version-c548ac58) | GTM | Restore a previously deleted container version; handler uses GTM API v2 POST after preview when dry\_run=False. |
| [`list_environments`](#tool-list_environments-eb645b0f) | GTM | List all GTM environments (Live, Latest, Draft, custom); handler uses GTM API v2 GET. |
| [`get_environment`](#tool-get_environment-6589f882) | GTM | Get details for a specific environment; handler uses GTM API v2 GET. |
| [`create_environment`](#tool-create_environment-eacd4263) | GTM | Create a custom environment; handler uses GTM API v2 POST after preview when dry\_run=False. |
| [`update_environment`](#tool-update_environment-b926ea2d) | GTM | Update an environment; handler uses GTM API v2 PUT after preview when dry\_run=False. |
| [`delete_environment`](#tool-delete_environment-0b7bb498) | GTM | Delete a custom environment; handler uses GTM API v2 DELETE after preview when dry\_run=False. |
| [`reauthorize_environment`](#tool-reauthorize_environment-191d3333) | GTM | Regenerate the authorization token for an environment; handler uses GTM API v2 POST after preview when dry\_run=False. |
| [`list_folders`](#tool-list_folders-786055b5) | GTM | List all folders in a workspace; handler uses GTM API v2 GET. |
| [`get_folder`](#tool-get_folder-e6226f1e) | GTM | Get folder details; handler uses GTM API v2 GET. |
| [`create_folder`](#tool-create_folder-5b53fba3) | GTM | Create a folder in a workspace; handler uses GTM API v2 POST after preview when dry\_run=False. |
| [`update_folder`](#tool-update_folder-eb714a16) | GTM | Rename a folder; handler uses GTM API v2 PUT after preview when dry\_run=False. |
| [`delete_folder`](#tool-delete_folder-934d582b) | GTM | Delete a folder (entities inside are NOT deleted); handler uses GTM API v2 DELETE after preview when dry\_run=False. |
| [`list_folder_entities`](#tool-list_folder_entities-266cc3f4) | GTM | List all tags, triggers and variables in a folder; handler uses GTM API v2 POST. |
| [`move_entities_to_folder`](#tool-move_entities_to_folder-abdb631f) | GTM | Move tags/triggers/variables into a folder; handler uses GTM API v2 POST after preview when dry\_run=False. Posts arrays of entity objects in the body, while discovery requires tagId/triggerId/variableId query parameters and a Folder body; execution needs correction. |
| [`list_user_permissions`](#tool-list_user_permissions-9cabc1e3) | GTM | List all user permissions for a GTM account; handler uses GTM API v2 GET. |
| [`get_user_permission`](#tool-get_user_permission-66c42a4c) | GTM | Get a specific user's GTM permissions; handler uses GTM API v2 GET. |
| [`create_user_permission`](#tool-create_user_permission-ed2ceb20) | GTM | Grant a user access; handler uses GTM API v2 POST after preview when dry\_run=False. |
| [`update_user_permission`](#tool-update_user_permission-0063613f) | GTM | Update a user's permissions; handler uses GTM API v2 PUT after preview when dry\_run=False. |
| [`delete_user_permission`](#tool-delete_user_permission-15a81315) | GTM | Revoke a user's GTM access; handler uses GTM API v2 DELETE after preview when dry\_run=False. |
| [`list_gtag_configs`](#tool-list_gtag_configs-eb17a2c8) | GTM | List Google Tag configurations in a workspace; handler uses GTM API v2 GET. |
| [`get_gtag_config`](#tool-get_gtag_config-9b30a656) | GTM | Get a specific Google Tag configuration; handler uses GTM API v2 GET. |
| [`create_gtag_config`](#tool-create_gtag_config-c4eb609b) | GTM | Create a Google Tag configuration; handler uses GTM API v2 POST after preview when dry\_run=False. |
| [`update_gtag_config`](#tool-update_gtag_config-6ff2d061) | GTM | Update a Google Tag configuration; handler uses GTM API v2 PUT after preview when dry\_run=False. |
| [`delete_gtag_config`](#tool-delete_gtag_config-1944cd94) | GTM | Delete a Google Tag configuration; handler uses GTM API v2 DELETE after preview when dry\_run=False. |

<a id="tool-list_users-73cf19f8"></a>

## list_users

Handler: Reads locally stored authorized users and reports token presence and cached container counts.

```text
List all authorized Google users (clients). Always call this first if you don't know which user_id to query — this server keeps no 'active user' state, you must pass user_id explicitly when more than one user is authorized.
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L111-L111) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L322-L586) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<a id="tool-authorize_user-6bf5f9d1"></a>

## authorize_user

Handler: Builds an OAuth authorization-start URL without authenticating or calling Google.

```text
Get the OAuth URL to authorize a new Google user
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L112-L113) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L322-L586) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "user_id": {
      "type": "string"
    }
  },
  "required": [
    "user_id"
  ]
}
```

</details>

<a id="tool-get_audit_log-ff9903ab"></a>

## get_audit_log

Handler: Reads the local audit log, defaulting to the last 50 entries.

```text
View recent write operations log
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L114-L115) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L322-L586) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "lines": {
      "type": "integer"
    }
  }
}
```

</details>

<a id="tool-list_accounts-1090ba6a"></a>

## list_accounts

Handler: List all GTM accounts accessible to the user; handler uses GTM API v2 GET.

```text
List all GTM accounts accessible to the user
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L118-L118) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/accounts.py#L17-L36) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  }
}
```

</details>

<a id="tool-get_account-896a62e4"></a>

## get_account

Handler: Get details for a specific GTM account; handler uses GTM API v2 GET.

```text
Get details for a specific GTM account
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L119-L120) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/accounts.py#L127-L140) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_path": {
      "type": "string"
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "account_path"
  ]
}
```

</details>

<a id="tool-update_account-ad80eae4"></a>

## update_account

Handler: Update a GTM account name; handler uses GTM API v2 PUT after preview when dry\_run=False.

```text
Update a GTM account name. dry_run=True by default.
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L121-L122) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/accounts.py#L143-L160) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_path": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "dry_run": {
      "type": "boolean",
      "default": true,
      "description": "If True (default), preview only. Pass False to execute."
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "account_path",
    "name"
  ]
}
```

</details>

<a id="tool-list_containers-a53dbc4d"></a>

## list_containers

Handler: List containers in a GTM account; handler uses GTM API v2 GET.

```text
List containers in a GTM account
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L123-L124) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/accounts.py#L39-L61) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_path": {
      "type": "string"
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "account_path"
  ]
}
```

</details>

<a id="tool-get_container-9a0808eb"></a>

## get_container

Handler: Get details for a specific container; handler uses GTM API v2 GET.

```text
Get details for a specific container
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L125-L126) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/accounts.py#L64-L80) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "container_path": {
      "type": "string"
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "container_path"
  ]
}
```

</details>

<a id="tool-create_container-352b1505"></a>

## create_container

Handler: Create a new GTM container; handler uses GTM API v2 POST after preview when dry\_run=False.

```text
Create a new GTM container. usage_context e.g. ['web'], ['server']. dry_run=True by default.
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L127-L129) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/accounts.py#L163-L190) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_path": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "usage_context": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "dry_run": {
      "type": "boolean",
      "default": true,
      "description": "If True (default), preview only. Pass False to execute."
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "account_path",
    "name",
    "usage_context"
  ]
}
```

</details>

<a id="tool-update_container-cacd7302"></a>

## update_container

Handler: Update a container name/usage context; handler uses GTM API v2 PUT after preview when dry\_run=False.

```text
Update a container name/usage context. dry_run=True by default.
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L130-L133) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/accounts.py#L193-L213) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "container_path": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "usage_context": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "dry_run": {
      "type": "boolean",
      "default": true,
      "description": "If True (default), preview only. Pass False to execute."
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "container_path",
    "name"
  ]
}
```

</details>

<a id="tool-delete_container-a8bba20f"></a>

## delete_container

Handler: Delete a container permanently; handler uses GTM API v2 DELETE after preview when dry\_run=False.

```text
Delete a container permanently. dry_run=True by default. WARNING: irreversible.
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L134-L135) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/accounts.py#L216-L234) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "container_path": {
      "type": "string"
    },
    "dry_run": {
      "type": "boolean",
      "default": true,
      "description": "If True (default), preview only. Pass False to execute."
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "container_path"
  ]
}
```

</details>

<a id="tool-get_container_snippet-abfe46b2"></a>

## get_container_snippet

Handler: Get the GTM snippet code (JS/noscript) to embed on your site; handler uses GTM API v2 GET.

```text
Get the GTM snippet code (JS/noscript) to embed on your site
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L136-L137) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/accounts.py#L237-L249) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  }
}
```

</details>

<a id="tool-discover_containers-1c24dd8a"></a>

## discover_containers

Handler: Fetch all GTM accounts and containers, save to store, set first as active; handler uses GTM API v2 GET. Caches discovered containers but does not set any active container; its registered description is stale.

```text
Fetch all GTM accounts and containers, save to store, set first as active
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L138-L139) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/accounts.py#L83-L124) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  }
}
```

</details>

<a id="tool-list_workspaces-af844119"></a>

## list_workspaces

Handler: List workspaces in the active (or specified) container; handler uses GTM API v2 GET.

```text
List workspaces in the active (or specified) container
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L142-L143) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/workspaces.py#L18-L42) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  }
}
```

</details>

<a id="tool-get_workspace-80ffee6a"></a>

## get_workspace

Handler: Get workspace details; handler uses GTM API v2 GET.

```text
Get workspace details
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L144-L145) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/workspaces.py#L45-L62) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "workspace_id": {
      "type": "string",
      "description": "Workspace ID (numeric string)"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "workspace_id"
  ]
}
```

</details>

<a id="tool-create_workspace-a1af8425"></a>

## create_workspace

Handler: Create a new workspace; handler uses GTM API v2 POST after preview when dry\_run=False.

```text
Create a new workspace. dry_run=True by default.
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L146-L147) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/workspaces.py#L65-L87) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "dry_run": {
      "type": "boolean",
      "default": true,
      "description": "If True (default), preview only. Pass False to execute."
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "name"
  ]
}
```

</details>

<a id="tool-delete_workspace-50bbbf2e"></a>

## delete_workspace

Handler: Delete workspace and all unpublished changes; handler uses GTM API v2 DELETE after preview when dry\_run=False.

```text
Delete workspace and all unpublished changes. dry_run=True by default.
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L148-L149) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/workspaces.py#L90-L108) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "workspace_id": {
      "type": "string",
      "description": "Workspace ID (numeric string)"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "dry_run": {
      "type": "boolean",
      "default": true,
      "description": "If True (default), preview only. Pass False to execute."
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "workspace_id"
  ]
}
```

</details>

<a id="tool-get_workspace_status-23f21bb9"></a>

## get_workspace_status

Handler: List all pending (uncommitted) changes in a workspace; handler uses GTM API v2 GET.

```text
List all pending (uncommitted) changes in a workspace
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L150-L151) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/workspaces.py#L111-L137) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "workspace_id": {
      "type": "string",
      "description": "Workspace ID (numeric string)"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "workspace_id"
  ]
}
```

</details>

<a id="tool-update_workspace-1a76edb7"></a>

## update_workspace

Handler: Rename a workspace or update its description; handler uses GTM API v2 PUT after preview when dry\_run=False.

```text
Rename a workspace or update its description. dry_run=True by default.
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L152-L153) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/workspaces.py#L140-L160) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "workspace_id": {
      "type": "string",
      "description": "Workspace ID (numeric string)"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "dry_run": {
      "type": "boolean",
      "default": true,
      "description": "If True (default), preview only. Pass False to execute."
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "workspace_id",
    "name"
  ]
}
```

</details>

<a id="tool-quick_preview_workspace-2e1cb327"></a>

## quick_preview_workspace

Handler: Compile and validate workspace entities without creating a version; handler uses GTM API v2 POST.

```text
Compile and validate workspace entities without creating a version
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L154-L155) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/workspaces.py#L163-L184) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "workspace_id": {
      "type": "string",
      "description": "Workspace ID (numeric string)"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "workspace_id"
  ]
}
```

</details>

<a id="tool-sync_workspace-4b02a6d9"></a>

## sync_workspace

Handler: Sync workspace with the latest container version; returns merge conflicts if any; handler uses GTM API v2 POST.

```text
Sync workspace with the latest container version; returns merge conflicts if any
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L156-L157) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/workspaces.py#L187-L208) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "workspace_id": {
      "type": "string",
      "description": "Workspace ID (numeric string)"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "workspace_id"
  ]
}
```

</details>

<a id="tool-resolve_conflict_workspace-60e23e63"></a>

## resolve_conflict_workspace

Handler: Resolve a merge conflict in a workspace; handler uses GTM API v2 POST after preview when dry\_run=False. Posts {entity: entity}, while discovery requires the Entity resource directly as request body; execution needs correction.

```text
Resolve a merge conflict in a workspace. entity = GTM resource to use as resolved state. dry_run=True by default.
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L158-L159) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/workspaces.py#L211-L234) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "entity": {
      "type": "object"
    },
    "workspace_id": {
      "type": "string",
      "description": "Workspace ID (numeric string)"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "dry_run": {
      "type": "boolean",
      "default": true,
      "description": "If True (default), preview only. Pass False to execute."
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "workspace_id",
    "entity"
  ]
}
```

</details>

<a id="tool-list_tags-86fc0f9c"></a>

## list_tags

Handler: List all tags in a workspace; handler uses GTM API v2 GET.

```text
List all tags in a workspace
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L162-L163) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/tags.py#L43-L69) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "workspace_id": {
      "type": "string",
      "description": "Workspace ID (numeric string)"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "workspace_id"
  ]
}
```

</details>

<a id="tool-get_tag-749bab4b"></a>

## get_tag

Handler: Get full tag details including parameters; handler uses GTM API v2 GET.

```text
Get full tag details including parameters
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L164-L165) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/tags.py#L72-L83) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "tag_id": {
      "type": "string"
    },
    "workspace_id": {
      "type": "string",
      "description": "Workspace ID (numeric string)"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "workspace_id",
    "tag_id"
  ]
}
```

</details>

<a id="tool-create_tag-e71dcc44"></a>

## create_tag

Handler: Create a tag; handler uses GTM API v2 POST after preview when dry\_run=False.

```text
Create a tag. body = GTM Tag resource JSON. dry_run=True by default.
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L166-L167) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/tags.py#L86-L108) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "body": {
      "type": "object"
    },
    "workspace_id": {
      "type": "string",
      "description": "Workspace ID (numeric string)"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "dry_run": {
      "type": "boolean",
      "default": true,
      "description": "If True (default), preview only. Pass False to execute."
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "workspace_id",
    "body"
  ]
}
```

</details>

<a id="tool-update_tag-ff9e7962"></a>

## update_tag

Handler: Update a tag (full replacement); handler uses GTM API v2 PUT after preview when dry\_run=False. Constructs fingerprint query parameters but never passes them to client.put, so optimistic locking input is ignored.

```text
Update a tag (full replacement). dry_run=True by default.
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L168-L170) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/tags.py#L111-L136) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "tag_id": {
      "type": "string"
    },
    "body": {
      "type": "object"
    },
    "fingerprint": {
      "type": "string"
    },
    "workspace_id": {
      "type": "string",
      "description": "Workspace ID (numeric string)"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "dry_run": {
      "type": "boolean",
      "default": true,
      "description": "If True (default), preview only. Pass False to execute."
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "workspace_id",
    "tag_id",
    "body"
  ]
}
```

</details>

<a id="tool-delete_tag-1345d160"></a>

## delete_tag

Handler: Delete a tag; handler uses GTM API v2 DELETE after preview when dry\_run=False.

```text
Delete a tag. dry_run=True by default.
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L171-L172) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/tags.py#L139-L157) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "tag_id": {
      "type": "string"
    },
    "workspace_id": {
      "type": "string",
      "description": "Workspace ID (numeric string)"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "dry_run": {
      "type": "boolean",
      "default": true,
      "description": "If True (default), preview only. Pass False to execute."
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "workspace_id",
    "tag_id"
  ]
}
```

</details>

<a id="tool-revert_tag-4c84be02"></a>

## revert_tag

Handler: Revert a tag to its state in the published container version; handler uses GTM API v2 POST after preview when dry\_run=False.

```text
Revert a tag to its state in the published container version. dry_run=True by default.
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L173-L174) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/tags.py#L160-L182) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "tag_id": {
      "type": "string"
    },
    "fingerprint": {
      "type": "string"
    },
    "workspace_id": {
      "type": "string",
      "description": "Workspace ID (numeric string)"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "dry_run": {
      "type": "boolean",
      "default": true,
      "description": "If True (default), preview only. Pass False to execute."
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "workspace_id",
    "tag_id"
  ]
}
```

</details>

<a id="tool-list_triggers-4ca44d74"></a>

## list_triggers

Handler: List all triggers in a workspace; handler uses GTM API v2 GET.

```text
List all triggers in a workspace
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L177-L178) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/triggers.py#L58-L81) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "workspace_id": {
      "type": "string",
      "description": "Workspace ID (numeric string)"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "workspace_id"
  ]
}
```

</details>

<a id="tool-get_trigger-e2f13ee6"></a>

## get_trigger

Handler: Get full trigger details; handler uses GTM API v2 GET.

```text
Get full trigger details
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L179-L180) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/triggers.py#L84-L95) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "trigger_id": {
      "type": "string"
    },
    "workspace_id": {
      "type": "string",
      "description": "Workspace ID (numeric string)"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "workspace_id",
    "trigger_id"
  ]
}
```

</details>

<a id="tool-create_trigger-71660c93"></a>

## create_trigger

Handler: Create a trigger; handler uses GTM API v2 POST after preview when dry\_run=False.

```text
Create a trigger. body = GTM Trigger resource JSON. dry_run=True by default.
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L181-L182) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/triggers.py#L98-L122) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "body": {
      "type": "object"
    },
    "workspace_id": {
      "type": "string",
      "description": "Workspace ID (numeric string)"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "dry_run": {
      "type": "boolean",
      "default": true,
      "description": "If True (default), preview only. Pass False to execute."
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "workspace_id",
    "body"
  ]
}
```

</details>

<a id="tool-update_trigger-60ddeb77"></a>

## update_trigger

Handler: Update a trigger (full replacement); handler uses GTM API v2 PUT after preview when dry\_run=False.

```text
Update a trigger (full replacement). dry_run=True by default.
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L183-L185) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/triggers.py#L125-L145) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "trigger_id": {
      "type": "string"
    },
    "body": {
      "type": "object"
    },
    "workspace_id": {
      "type": "string",
      "description": "Workspace ID (numeric string)"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "dry_run": {
      "type": "boolean",
      "default": true,
      "description": "If True (default), preview only. Pass False to execute."
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "workspace_id",
    "trigger_id",
    "body"
  ]
}
```

</details>

<a id="tool-delete_trigger-ec67de91"></a>

## delete_trigger

Handler: Delete a trigger; handler uses GTM API v2 DELETE after preview when dry\_run=False.

```text
Delete a trigger. dry_run=True by default.
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L186-L187) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/triggers.py#L148-L166) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "trigger_id": {
      "type": "string"
    },
    "workspace_id": {
      "type": "string",
      "description": "Workspace ID (numeric string)"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "dry_run": {
      "type": "boolean",
      "default": true,
      "description": "If True (default), preview only. Pass False to execute."
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "workspace_id",
    "trigger_id"
  ]
}
```

</details>

<a id="tool-revert_trigger-8e193d59"></a>

## revert_trigger

Handler: Revert a trigger to its state in the published container version; handler uses GTM API v2 POST after preview when dry\_run=False.

```text
Revert a trigger to its state in the published container version. dry_run=True by default.
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L188-L189) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/triggers.py#L169-L191) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "trigger_id": {
      "type": "string"
    },
    "fingerprint": {
      "type": "string"
    },
    "workspace_id": {
      "type": "string",
      "description": "Workspace ID (numeric string)"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "dry_run": {
      "type": "boolean",
      "default": true,
      "description": "If True (default), preview only. Pass False to execute."
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "workspace_id",
    "trigger_id"
  ]
}
```

</details>

<a id="tool-list_variables-1adaa2a1"></a>

## list_variables

Handler: List all custom variables in a workspace; handler uses GTM API v2 GET.

```text
List all custom variables in a workspace
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L192-L193) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/variables.py#L56-L79) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "workspace_id": {
      "type": "string",
      "description": "Workspace ID (numeric string)"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "workspace_id"
  ]
}
```

</details>

<a id="tool-get_variable-ba0cd778"></a>

## get_variable

Handler: Get full variable details; handler uses GTM API v2 GET.

```text
Get full variable details
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L194-L195) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/variables.py#L82-L93) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "variable_id": {
      "type": "string"
    },
    "workspace_id": {
      "type": "string",
      "description": "Workspace ID (numeric string)"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "workspace_id",
    "variable_id"
  ]
}
```

</details>

<a id="tool-create_variable-2f5e4ddb"></a>

## create_variable

Handler: Create a variable; handler uses GTM API v2 POST after preview when dry\_run=False.

```text
Create a variable. body = GTM Variable resource JSON. dry_run=True by default.
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L196-L197) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/variables.py#L96-L118) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "body": {
      "type": "object"
    },
    "workspace_id": {
      "type": "string",
      "description": "Workspace ID (numeric string)"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "dry_run": {
      "type": "boolean",
      "default": true,
      "description": "If True (default), preview only. Pass False to execute."
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "workspace_id",
    "body"
  ]
}
```

</details>

<a id="tool-update_variable-63c48ad7"></a>

## update_variable

Handler: Update a variable (full replacement); handler uses GTM API v2 PUT after preview when dry\_run=False.

```text
Update a variable (full replacement). dry_run=True by default.
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L198-L200) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/variables.py#L121-L141) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "variable_id": {
      "type": "string"
    },
    "body": {
      "type": "object"
    },
    "workspace_id": {
      "type": "string",
      "description": "Workspace ID (numeric string)"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "dry_run": {
      "type": "boolean",
      "default": true,
      "description": "If True (default), preview only. Pass False to execute."
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "workspace_id",
    "variable_id",
    "body"
  ]
}
```

</details>

<a id="tool-delete_variable-3ead6fdb"></a>

## delete_variable

Handler: Delete a variable; handler uses GTM API v2 DELETE after preview when dry\_run=False.

```text
Delete a variable. dry_run=True by default.
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L201-L202) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/variables.py#L144-L162) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "variable_id": {
      "type": "string"
    },
    "workspace_id": {
      "type": "string",
      "description": "Workspace ID (numeric string)"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "dry_run": {
      "type": "boolean",
      "default": true,
      "description": "If True (default), preview only. Pass False to execute."
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "workspace_id",
    "variable_id"
  ]
}
```

</details>

<a id="tool-revert_variable-7fb63cb4"></a>

## revert_variable

Handler: Revert a variable to its state in the published container version; handler uses GTM API v2 POST after preview when dry\_run=False.

```text
Revert a variable to its state in the published container version. dry_run=True by default.
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L203-L204) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/variables.py#L165-L187) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "variable_id": {
      "type": "string"
    },
    "fingerprint": {
      "type": "string"
    },
    "workspace_id": {
      "type": "string",
      "description": "Workspace ID (numeric string)"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "dry_run": {
      "type": "boolean",
      "default": true,
      "description": "If True (default), preview only. Pass False to execute."
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "workspace_id",
    "variable_id"
  ]
}
```

</details>

<a id="tool-list_builtin_variables-7866d3ce"></a>

## list_builtin_variables

Handler: List all enabled built-in variables in a workspace; handler uses GTM API v2 GET.

```text
List all enabled built-in variables in a workspace
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L207-L208) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/builtins.py#L30-L48) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "workspace_id": {
      "type": "string",
      "description": "Workspace ID (numeric string)"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "workspace_id"
  ]
}
```

</details>

<a id="tool-enable_builtin_variables-bf909ea0"></a>

## enable_builtin_variables

Handler: Enable built-in variables; handler uses GTM API v2 POST after preview when dry\_run=False.

```text
Enable built-in variables. types = list of type strings. dry_run=True by default.
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L209-L211) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/builtins.py#L51-L78) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "types": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "workspace_id": {
      "type": "string",
      "description": "Workspace ID (numeric string)"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "dry_run": {
      "type": "boolean",
      "default": true,
      "description": "If True (default), preview only. Pass False to execute."
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "workspace_id",
    "types"
  ]
}
```

</details>

<a id="tool-disable_builtin_variables-1d6fe5b0"></a>

## disable_builtin_variables

Handler: Disable built-in variables; handler uses GTM API v2 DELETE after preview when dry\_run=False.

```text
Disable built-in variables. types = list of type strings. dry_run=True by default.
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L212-L214) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/builtins.py#L104-L124) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "types": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "workspace_id": {
      "type": "string",
      "description": "Workspace ID (numeric string)"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "dry_run": {
      "type": "boolean",
      "default": true,
      "description": "If True (default), preview only. Pass False to execute."
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "workspace_id",
    "types"
  ]
}
```

</details>

<a id="tool-revert_builtin_variable-bc9d4801"></a>

## revert_builtin_variable

Handler: Revert a built-in variable to its published state; handler uses GTM API v2 POST after preview when dry\_run=False.

```text
Revert a built-in variable to its published state. variable_type = type string. dry_run=True by default.
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L215-L216) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/builtins.py#L81-L101) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "variable_type": {
      "type": "string"
    },
    "workspace_id": {
      "type": "string",
      "description": "Workspace ID (numeric string)"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "dry_run": {
      "type": "boolean",
      "default": true,
      "description": "If True (default), preview only. Pass False to execute."
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "workspace_id",
    "variable_type"
  ]
}
```

</details>

<a id="tool-list_version_headers-bec4b502"></a>

## list_version_headers

Handler: List version summaries for a container; handler uses GTM API v2 GET.

```text
List version summaries for a container
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L219-L220) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/versions.py#L23-L50) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  }
}
```

</details>

<a id="tool-get_version-e67e6685"></a>

## get_version

Handler: Get full version details (all tags, triggers, variables); handler uses GTM API v2 GET.

```text
Get full version details (all tags, triggers, variables)
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L221-L222) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/versions.py#L53-L79) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "version_id": {
      "type": "string"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "version_id"
  ]
}
```

</details>

<a id="tool-get_live_version-ffef26dc"></a>

## get_live_version

Handler: Get the currently published (live) container version; handler uses GTM API v2 GET.

```text
Get the currently published (live) container version
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L223-L224) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/versions.py#L82-L102) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  }
}
```

</details>

<a id="tool-create_version-fc39e936"></a>

## create_version

Handler: Create a version snapshot from a workspace; handler uses GTM API v2 POST after preview when dry\_run=False.

```text
Create a version snapshot from a workspace. dry_run=True by default.
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L225-L226) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/versions.py#L105-L139) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "notes": {
      "type": "string"
    },
    "workspace_id": {
      "type": "string",
      "description": "Workspace ID (numeric string)"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "dry_run": {
      "type": "boolean",
      "default": true,
      "description": "If True (default), preview only. Pass False to execute."
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "workspace_id",
    "name"
  ]
}
```

</details>

<a id="tool-publish_version-0628e4c5"></a>

## publish_version

Handler: Publish a version to production (LIVE); handler uses GTM API v2 POST after preview when dry\_run=False.

```text
Publish a version to production (LIVE). dry_run=True by default. WARNING: immediately affects live container.
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L227-L228) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/versions.py#L142-L173) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "version_id": {
      "type": "string"
    },
    "fingerprint": {
      "type": "string"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "dry_run": {
      "type": "boolean",
      "default": true,
      "description": "If True (default), preview only. Pass False to execute."
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "version_id"
  ]
}
```

</details>

<a id="tool-get_latest_version_header-e7218219"></a>

## get_latest_version_header

Handler: Get summary header of the latest container version; handler uses GTM API v2 GET.

```text
Get summary header of the latest container version
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L229-L230) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/versions.py#L176-L195) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  }
}
```

</details>

<a id="tool-update_version-23a8648e"></a>

## update_version

Handler: Update a version name/description; handler uses GTM API v2 PUT after preview when dry\_run=False.

```text
Update a version name/description. dry_run=True by default.
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L231-L232) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/versions.py#L198-L219) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "version_id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "notes": {
      "type": "string"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "dry_run": {
      "type": "boolean",
      "default": true,
      "description": "If True (default), preview only. Pass False to execute."
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "version_id",
    "name"
  ]
}
```

</details>

<a id="tool-delete_version-f7b6682e"></a>

## delete_version

Handler: Delete a container version; handler uses GTM API v2 DELETE after preview when dry\_run=False.

```text
Delete a container version. dry_run=True by default.
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L233-L234) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/versions.py#L222-L241) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "version_id": {
      "type": "string"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "dry_run": {
      "type": "boolean",
      "default": true,
      "description": "If True (default), preview only. Pass False to execute."
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "version_id"
  ]
}
```

</details>

<a id="tool-set_latest_version-fb529238"></a>

## set_latest_version

Handler: Set a version as the 'latest' (what workspaces sync against); handler uses GTM API v2 POST after preview when dry\_run=False.

```text
Set a version as the 'latest' (what workspaces sync against). dry_run=True by default.
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L235-L236) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/versions.py#L244-L264) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "version_id": {
      "type": "string"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "dry_run": {
      "type": "boolean",
      "default": true,
      "description": "If True (default), preview only. Pass False to execute."
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "version_id"
  ]
}
```

</details>

<a id="tool-undelete_version-c548ac58"></a>

## undelete_version

Handler: Restore a previously deleted container version; handler uses GTM API v2 POST after preview when dry\_run=False.

```text
Restore a previously deleted container version. dry_run=True by default.
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L237-L238) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/versions.py#L267-L287) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "version_id": {
      "type": "string"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "dry_run": {
      "type": "boolean",
      "default": true,
      "description": "If True (default), preview only. Pass False to execute."
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "version_id"
  ]
}
```

</details>

<a id="tool-list_environments-eb645b0f"></a>

## list_environments

Handler: List all GTM environments (Live, Latest, Draft, custom); handler uses GTM API v2 GET.

```text
List all GTM environments (Live, Latest, Draft, custom)
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L241-L242) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/environments.py#L23-L48) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  }
}
```

</details>

<a id="tool-get_environment-6589f882"></a>

## get_environment

Handler: Get details for a specific environment; handler uses GTM API v2 GET.

```text
Get details for a specific environment
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L243-L244) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/environments.py#L51-L61) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "environment_id": {
      "type": "string"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "environment_id"
  ]
}
```

</details>

<a id="tool-create_environment-eacd4263"></a>

## create_environment

Handler: Create a custom environment; handler uses GTM API v2 POST after preview when dry\_run=False.

```text
Create a custom environment. dry_run=True by default.
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L245-L246) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/environments.py#L64-L93) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "url": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "enable_debug": {
      "type": "boolean"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "dry_run": {
      "type": "boolean",
      "default": true,
      "description": "If True (default), preview only. Pass False to execute."
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "name"
  ]
}
```

</details>

<a id="tool-update_environment-b926ea2d"></a>

## update_environment

Handler: Update an environment; handler uses GTM API v2 PUT after preview when dry\_run=False.

```text
Update an environment. body = GTM Environment resource. dry_run=True by default.
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L247-L248) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/environments.py#L96-L115) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "environment_id": {
      "type": "string"
    },
    "body": {
      "type": "object"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "dry_run": {
      "type": "boolean",
      "default": true,
      "description": "If True (default), preview only. Pass False to execute."
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "environment_id",
    "body"
  ]
}
```

</details>

<a id="tool-delete_environment-0b7bb498"></a>

## delete_environment

Handler: Delete a custom environment; handler uses GTM API v2 DELETE after preview when dry\_run=False.

```text
Delete a custom environment. dry_run=True by default.
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L249-L250) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/environments.py#L118-L137) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "environment_id": {
      "type": "string"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "dry_run": {
      "type": "boolean",
      "default": true,
      "description": "If True (default), preview only. Pass False to execute."
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "environment_id"
  ]
}
```

</details>

<a id="tool-reauthorize_environment-191d3333"></a>

## reauthorize_environment

Handler: Regenerate the authorization token for an environment; handler uses GTM API v2 POST after preview when dry\_run=False.

```text
Regenerate the authorization token for an environment. dry_run=True by default.
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L251-L252) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/environments.py#L140-L163) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "environment_id": {
      "type": "string"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "dry_run": {
      "type": "boolean",
      "default": true,
      "description": "If True (default), preview only. Pass False to execute."
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "environment_id"
  ]
}
```

</details>

<a id="tool-list_folders-786055b5"></a>

## list_folders

Handler: List all folders in a workspace; handler uses GTM API v2 GET.

```text
List all folders in a workspace
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L255-L256) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/folders.py#L26-L48) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "workspace_id": {
      "type": "string",
      "description": "Workspace ID (numeric string)"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "workspace_id"
  ]
}
```

</details>

<a id="tool-get_folder-e6226f1e"></a>

## get_folder

Handler: Get folder details; handler uses GTM API v2 GET.

```text
Get folder details
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L257-L258) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/folders.py#L51-L61) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "folder_id": {
      "type": "string"
    },
    "workspace_id": {
      "type": "string",
      "description": "Workspace ID (numeric string)"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "workspace_id",
    "folder_id"
  ]
}
```

</details>

<a id="tool-create_folder-5b53fba3"></a>

## create_folder

Handler: Create a folder in a workspace; handler uses GTM API v2 POST after preview when dry\_run=False.

```text
Create a folder in a workspace. dry_run=True by default.
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L259-L260) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/folders.py#L64-L82) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "workspace_id": {
      "type": "string",
      "description": "Workspace ID (numeric string)"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "dry_run": {
      "type": "boolean",
      "default": true,
      "description": "If True (default), preview only. Pass False to execute."
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "workspace_id",
    "name"
  ]
}
```

</details>

<a id="tool-update_folder-eb714a16"></a>

## update_folder

Handler: Rename a folder; handler uses GTM API v2 PUT after preview when dry\_run=False.

```text
Rename a folder. dry_run=True by default.
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L261-L262) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/folders.py#L85-L104) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "folder_id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "workspace_id": {
      "type": "string",
      "description": "Workspace ID (numeric string)"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "dry_run": {
      "type": "boolean",
      "default": true,
      "description": "If True (default), preview only. Pass False to execute."
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "workspace_id",
    "folder_id",
    "name"
  ]
}
```

</details>

<a id="tool-delete_folder-934d582b"></a>

## delete_folder

Handler: Delete a folder (entities inside are NOT deleted); handler uses GTM API v2 DELETE after preview when dry\_run=False.

```text
Delete a folder (entities inside are NOT deleted). dry_run=True by default.
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L263-L264) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/folders.py#L107-L127) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "folder_id": {
      "type": "string"
    },
    "workspace_id": {
      "type": "string",
      "description": "Workspace ID (numeric string)"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "dry_run": {
      "type": "boolean",
      "default": true,
      "description": "If True (default), preview only. Pass False to execute."
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "workspace_id",
    "folder_id"
  ]
}
```

</details>

<a id="tool-list_folder_entities-266cc3f4"></a>

## list_folder_entities

Handler: List all tags, triggers and variables in a folder; handler uses GTM API v2 POST.

```text
List all tags, triggers and variables in a folder
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L265-L266) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/folders.py#L130-L150) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "folder_id": {
      "type": "string"
    },
    "workspace_id": {
      "type": "string",
      "description": "Workspace ID (numeric string)"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "workspace_id",
    "folder_id"
  ]
}
```

</details>

<a id="tool-move_entities_to_folder-abdb631f"></a>

## move_entities_to_folder

Handler: Move tags/triggers/variables into a folder; handler uses GTM API v2 POST after preview when dry\_run=False. Posts arrays of entity objects in the body, while discovery requires tagId/triggerId/variableId query parameters and a Folder body; execution needs correction.

```text
Move tags/triggers/variables into a folder. dry_run=True by default.
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L267-L269) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/folders.py#L153-L184) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "folder_id": {
      "type": "string"
    },
    "tag_ids": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "trigger_ids": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "variable_ids": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "workspace_id": {
      "type": "string",
      "description": "Workspace ID (numeric string)"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "dry_run": {
      "type": "boolean",
      "default": true,
      "description": "If True (default), preview only. Pass False to execute."
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "workspace_id",
    "folder_id"
  ]
}
```

</details>

<a id="tool-list_user_permissions-9cabc1e3"></a>

## list_user_permissions

Handler: List all user permissions for a GTM account; handler uses GTM API v2 GET.

```text
List all user permissions for a GTM account
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L272-L273) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/permissions.py#L39-L62) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_path": {
      "type": "string"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  }
}
```

</details>

<a id="tool-get_user_permission-66c42a4c"></a>

## get_user_permission

Handler: Get a specific user's GTM permissions; handler uses GTM API v2 GET.

```text
Get a specific user's GTM permissions
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L274-L275) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/permissions.py#L65-L76) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "permission_id": {
      "type": "string"
    },
    "account_path": {
      "type": "string"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "permission_id"
  ]
}
```

</details>

<a id="tool-create_user_permission-ed2ceb20"></a>

## create_user_permission

Handler: Grant a user access; handler uses GTM API v2 POST after preview when dry\_run=False.

```text
Grant a user access. body = UserPermission resource. dry_run=True by default.
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L276-L277) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/permissions.py#L79-L105) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "body": {
      "type": "object"
    },
    "account_path": {
      "type": "string"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "dry_run": {
      "type": "boolean",
      "default": true,
      "description": "If True (default), preview only. Pass False to execute."
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "body"
  ]
}
```

</details>

<a id="tool-update_user_permission-0063613f"></a>

## update_user_permission

Handler: Update a user's permissions; handler uses GTM API v2 PUT after preview when dry\_run=False.

```text
Update a user's permissions. dry_run=True by default.
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L278-L280) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/permissions.py#L108-L128) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "permission_id": {
      "type": "string"
    },
    "body": {
      "type": "object"
    },
    "account_path": {
      "type": "string"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "dry_run": {
      "type": "boolean",
      "default": true,
      "description": "If True (default), preview only. Pass False to execute."
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "permission_id",
    "body"
  ]
}
```

</details>

<a id="tool-delete_user_permission-15a81315"></a>

## delete_user_permission

Handler: Revoke a user's GTM access; handler uses GTM API v2 DELETE after preview when dry\_run=False.

```text
Revoke a user's GTM access. dry_run=True by default.
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L281-L282) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/permissions.py#L131-L151) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "permission_id": {
      "type": "string"
    },
    "account_path": {
      "type": "string"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "dry_run": {
      "type": "boolean",
      "default": true,
      "description": "If True (default), preview only. Pass False to execute."
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "permission_id"
  ]
}
```

</details>

<a id="tool-list_gtag_configs-eb17a2c8"></a>

## list_gtag_configs

Handler: List Google Tag configurations in a workspace; handler uses GTM API v2 GET.

```text
List Google Tag configurations in a workspace
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L285-L286) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/gtag_config.py#L25-L47) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "workspace_id": {
      "type": "string",
      "description": "Workspace ID (numeric string)"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "workspace_id"
  ]
}
```

</details>

<a id="tool-get_gtag_config-9b30a656"></a>

## get_gtag_config

Handler: Get a specific Google Tag configuration; handler uses GTM API v2 GET.

```text
Get a specific Google Tag configuration
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L287-L288) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/gtag_config.py#L50-L60) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "gtag_config_id": {
      "type": "string"
    },
    "workspace_id": {
      "type": "string",
      "description": "Workspace ID (numeric string)"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "workspace_id",
    "gtag_config_id"
  ]
}
```

</details>

<a id="tool-create_gtag_config-c4eb609b"></a>

## create_gtag_config

Handler: Create a Google Tag configuration; handler uses GTM API v2 POST after preview when dry\_run=False.

```text
Create a Google Tag configuration. body = GtagConfig resource. dry_run=True by default.
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L289-L290) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/gtag_config.py#L63-L82) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "body": {
      "type": "object"
    },
    "workspace_id": {
      "type": "string",
      "description": "Workspace ID (numeric string)"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "dry_run": {
      "type": "boolean",
      "default": true,
      "description": "If True (default), preview only. Pass False to execute."
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "workspace_id",
    "body"
  ]
}
```

</details>

<a id="tool-update_gtag_config-6ff2d061"></a>

## update_gtag_config

Handler: Update a Google Tag configuration; handler uses GTM API v2 PUT after preview when dry\_run=False.

```text
Update a Google Tag configuration. dry_run=True by default.
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L291-L293) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/gtag_config.py#L85-L104) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "gtag_config_id": {
      "type": "string"
    },
    "body": {
      "type": "object"
    },
    "workspace_id": {
      "type": "string",
      "description": "Workspace ID (numeric string)"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "dry_run": {
      "type": "boolean",
      "default": true,
      "description": "If True (default), preview only. Pass False to execute."
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "workspace_id",
    "gtag_config_id",
    "body"
  ]
}
```

</details>

<a id="tool-delete_gtag_config-1944cd94"></a>

## delete_gtag_config

Handler: Delete a Google Tag configuration; handler uses GTM API v2 DELETE after preview when dry\_run=False.

```text
Delete a Google Tag configuration. dry_run=True by default.
```

[Source](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/server.py#L294-L295) · [Handler](https://github.com/magdamarketinghackers/MCP-GTM/blob/d90bc3d73394a8c3e444aeb79be5d46a6df342f2/tools/gtag_config.py#L107-L125) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "gtag_config_id": {
      "type": "string"
    },
    "workspace_id": {
      "type": "string",
      "description": "Workspace ID (numeric string)"
    },
    "container_path": {
      "type": "string",
      "description": "Container path e.g. accounts/123/containers/456 (optional, uses active container)"
    },
    "dry_run": {
      "type": "boolean",
      "default": true,
      "description": "If True (default), preview only. Pass False to execute."
    },
    "user_id": {
      "type": "string",
      "description": "User email (optional, uses active user)"
    }
  },
  "required": [
    "workspace_id",
    "gtag_config_id"
  ]
}
```

</details>
