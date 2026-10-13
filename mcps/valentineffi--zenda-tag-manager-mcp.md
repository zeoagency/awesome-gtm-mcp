# valentineffi/zenda-tag-manager-mcp

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/valentineffi/zenda-tag-manager-mcp) · [Machine-readable inventory](../data/mcps/valentineffi--zenda-tag-manager-mcp.json)

**42 extracted tools.** Inspect draft status, synchronize workspaces, create versions, and edit resources using raw object bodies.

Snapshot: 2026-10-13 · [d65efb7ba3c2](https://github.com/valentineffi/zenda-tag-manager-mcp/tree/d65efb7ba3c2cf0489d802478ad11d3747ffc086) · Method: tools/list.

Exposure: All 42 tools registered unconditionally; startup requires GTM_CLIENT_ID, GTM_CLIENT_SECRET and GTM_REFRESH_TOKEN. Container/workspace deletion intentionally not exposed.

## Limits

- Catalog obtained offline by invoking original registration functions with an MCP client and in-memory transport, bypassing credential-gated main; no handlers or authenticated API operations executed.
- Resource bodies intentionally accept unrestricted JSON records; detailed Google resource fields are not part of exposed input schemas.
- Several list tools omit page-token input and response continuation; version-header list returns nextPageToken but cannot accept it. Markdown pagination advice in renderList uses a literal unexpanded token and pageToken instead of page_token.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`gtm_list_accounts`](#tool-gtm_list_accounts-c5d9b27f) | GTM | Calls Google Tag Manager v2 accounts.list, assembling its resource path from supplied IDs. |
| [`gtm_get_account`](#tool-gtm_get_account-b0358265) | GTM | Calls Google Tag Manager v2 accounts.get, assembling its resource path from supplied IDs. |
| [`gtm_list_containers`](#tool-gtm_list_containers-e45afd2b) | GTM | Calls Google Tag Manager v2 accounts.containers.list, assembling its resource path from supplied IDs. |
| [`gtm_get_container`](#tool-gtm_get_container-fdc6e39c) | GTM | Calls Google Tag Manager v2 accounts.containers.get, assembling its resource path from supplied IDs. |
| [`gtm_create_container`](#tool-gtm_create_container-67c96447) | GTM | Calls Google Tag Manager v2 accounts.containers.create, assembling its resource path from supplied IDs. |
| [`gtm_update_container`](#tool-gtm_update_container-2d4e16fc) | GTM | Calls Google Tag Manager v2 accounts.containers.update, assembling its resource path from supplied IDs. |
| [`gtm_list_workspaces`](#tool-gtm_list_workspaces-248ce86f) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.list, assembling its resource path from supplied IDs. |
| [`gtm_get_workspace`](#tool-gtm_get_workspace-573c6822) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.get, assembling its resource path from supplied IDs. |
| [`gtm_create_workspace`](#tool-gtm_create_workspace-6324597f) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.create, assembling its resource path from supplied IDs. |
| [`gtm_get_workspace_status`](#tool-gtm_get_workspace_status-58373cea) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.getStatus, assembling its resource path from supplied IDs. |
| [`gtm_sync_workspace`](#tool-gtm_sync_workspace-c11e7d2f) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.sync, assembling its resource path from supplied IDs. |
| [`gtm_create_version`](#tool-gtm_create_version-50a805d7) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.create\_version, assembling its resource path from supplied IDs. |
| [`gtm_list_tags`](#tool-gtm_list_tags-b585bc12) | GTM | Calls Google Tag Manager v2 workspace tag collection list, assembling the resource path from IDs. |
| [`gtm_get_tag`](#tool-gtm_get_tag-3d242291) | GTM | Calls Google Tag Manager v2 workspace tag collection get, assembling the resource path from IDs. |
| [`gtm_create_tag`](#tool-gtm_create_tag-c682840c) | GTM | Calls Google Tag Manager v2 workspace tag collection create, assembling the resource path from IDs. |
| [`gtm_update_tag`](#tool-gtm_update_tag-23807743) | GTM | Calls Google Tag Manager v2 workspace tag collection update, assembling the resource path from IDs. |
| [`gtm_delete_tag`](#tool-gtm_delete_tag-42a56cac) | GTM | Calls Google Tag Manager v2 workspace tag collection delete, assembling the resource path from IDs. Requires confirm=true before deletion. |
| [`gtm_list_triggers`](#tool-gtm_list_triggers-16b41a3c) | GTM | Calls Google Tag Manager v2 workspace trigger collection list, assembling the resource path from IDs. |
| [`gtm_get_trigger`](#tool-gtm_get_trigger-669e5c62) | GTM | Calls Google Tag Manager v2 workspace trigger collection get, assembling the resource path from IDs. |
| [`gtm_create_trigger`](#tool-gtm_create_trigger-99da4322) | GTM | Calls Google Tag Manager v2 workspace trigger collection create, assembling the resource path from IDs. |
| [`gtm_update_trigger`](#tool-gtm_update_trigger-ce48de45) | GTM | Calls Google Tag Manager v2 workspace trigger collection update, assembling the resource path from IDs. |
| [`gtm_delete_trigger`](#tool-gtm_delete_trigger-dac3085f) | GTM | Calls Google Tag Manager v2 workspace trigger collection delete, assembling the resource path from IDs. Requires confirm=true before deletion. |
| [`gtm_list_variables`](#tool-gtm_list_variables-81705a80) | GTM | Calls Google Tag Manager v2 workspace variable collection list, assembling the resource path from IDs. |
| [`gtm_get_variable`](#tool-gtm_get_variable-e6ff3763) | GTM | Calls Google Tag Manager v2 workspace variable collection get, assembling the resource path from IDs. |
| [`gtm_create_variable`](#tool-gtm_create_variable-5b853337) | GTM | Calls Google Tag Manager v2 workspace variable collection create, assembling the resource path from IDs. |
| [`gtm_update_variable`](#tool-gtm_update_variable-898f92d4) | GTM | Calls Google Tag Manager v2 workspace variable collection update, assembling the resource path from IDs. |
| [`gtm_delete_variable`](#tool-gtm_delete_variable-9bd36787) | GTM | Calls Google Tag Manager v2 workspace variable collection delete, assembling the resource path from IDs. Requires confirm=true before deletion. |
| [`gtm_list_folders`](#tool-gtm_list_folders-9da6c22f) | GTM | Calls Google Tag Manager v2 workspace folder collection list, assembling the resource path from IDs. |
| [`gtm_get_folder`](#tool-gtm_get_folder-a5332034) | GTM | Calls Google Tag Manager v2 workspace folder collection get, assembling the resource path from IDs. |
| [`gtm_create_folder`](#tool-gtm_create_folder-a7f80e8c) | GTM | Calls Google Tag Manager v2 workspace folder collection create, assembling the resource path from IDs. |
| [`gtm_update_folder`](#tool-gtm_update_folder-0eb0b999) | GTM | Calls Google Tag Manager v2 workspace folder collection update, assembling the resource path from IDs. |
| [`gtm_delete_folder`](#tool-gtm_delete_folder-9602489f) | GTM | Calls Google Tag Manager v2 workspace folder collection delete, assembling the resource path from IDs. Requires confirm=true before deletion. |
| [`gtm_list_builtin_variables`](#tool-gtm_list_builtin_variables-e3216e58) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.built\_in\_variables.list, assembling its resource path from supplied IDs. |
| [`gtm_enable_builtin_variables`](#tool-gtm_enable_builtin_variables-58e53a64) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.built\_in\_variables.create, assembling its resource path from supplied IDs. |
| [`gtm_disable_builtin_variables`](#tool-gtm_disable_builtin_variables-a24ff688) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.built\_in\_variables.delete, assembling its resource path from supplied IDs. |
| [`gtm_list_version_headers`](#tool-gtm_list_version_headers-1b2c0287) | GTM | Calls Google Tag Manager v2 accounts.containers.version\_headers.list, assembling its resource path from supplied IDs. |
| [`gtm_get_version`](#tool-gtm_get_version-c83b7c02) | GTM | Calls Google Tag Manager v2 accounts.containers.versions.get, assembling its resource path from supplied IDs. |
| [`gtm_get_live_version`](#tool-gtm_get_live_version-986da5ee) | GTM | Calls Google Tag Manager v2 accounts.containers.versions.live, assembling its resource path from supplied IDs. |
| [`gtm_publish_version`](#tool-gtm_publish_version-0cc97535) | GTM | Calls Google Tag Manager v2 accounts.containers.versions.publish, assembling its resource path from supplied IDs. Requires confirm=true before publishing. |
| [`gtm_set_latest_version`](#tool-gtm_set_latest_version-80a1483f) | GTM | Calls Google Tag Manager v2 accounts.containers.versions.set\_latest, assembling its resource path from supplied IDs. |
| [`gtm_list_environments`](#tool-gtm_list_environments-9f7a4399) | GTM | Calls Google Tag Manager v2 accounts.containers.environments.list, assembling its resource path from supplied IDs. |
| [`gtm_get_environment`](#tool-gtm_get_environment-9574f4ec) | GTM | Calls Google Tag Manager v2 accounts.containers.environments.get, assembling its resource path from supplied IDs. |

<a id="tool-gtm_list_accounts-c5d9b27f"></a>

## gtm_list_accounts

Handler: Calls Google Tag Manager v2 accounts.list, assembling its resource path from supplied IDs.

```text
List all Google Tag Manager accounts the authenticated user can access.

This is the entry point — every other tool needs an accountId from here. Read-only.

Args:
  - response_format ('markdown' | 'json'): Output format (default: markdown)

Returns: A list of accounts, each with accountId, name, and path.
```

[Source](https://github.com/valentineffi/zenda-tag-manager-mcp/blob/d65efb7ba3c2cf0489d802478ad11d3747ffc086/src/tools/accounts.ts#L17-L42) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "response_format": {
      "type": "string",
      "enum": [
        "markdown",
        "json"
      ],
      "default": "markdown",
      "description": "Output format: 'markdown' for a compact human-readable summary, 'json' for the full raw resource(s)."
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_get_account-b0358265"></a>

## gtm_get_account

Handler: Calls Google Tag Manager v2 accounts.get, assembling its resource path from supplied IDs.

```text
Get details for a single Google Tag Manager account. Read-only.

Args:
  - account_id (string): GTM account ID
  - response_format ('markdown' | 'json'): Output format (default: markdown)

Returns: The account resource (accountId, name, shareData, features).
```

[Source](https://github.com/valentineffi/zenda-tag-manager-mcp/blob/d65efb7ba3c2cf0489d802478ad11d3747ffc086/src/tools/accounts.ts#L43-L66) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID, e.g. '6000000000' (from gtm_list_accounts)."
    },
    "response_format": {
      "type": "string",
      "enum": [
        "markdown",
        "json"
      ],
      "default": "markdown",
      "description": "Output format: 'markdown' for a compact human-readable summary, 'json' for the full raw resource(s)."
    }
  },
  "required": [
    "account_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_list_containers-e45afd2b"></a>

## gtm_list_containers

Handler: Calls Google Tag Manager v2 accounts.containers.list, assembling its resource path from supplied IDs.

```text
List all containers within a GTM account. Read-only.

Args:
  - account_id (string): GTM account ID
  - response_format ('markdown' | 'json'): Output format (default: markdown)

Returns: A list of containers, each with containerId, name, publicId (GTM-XXXX), and usageContext (web/android/ios/server).
```

[Source](https://github.com/valentineffi/zenda-tag-manager-mcp/blob/d65efb7ba3c2cf0489d802478ad11d3747ffc086/src/tools/containers.ts#L16-L40) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID, e.g. '6000000000' (from gtm_list_accounts)."
    },
    "response_format": {
      "type": "string",
      "enum": [
        "markdown",
        "json"
      ],
      "default": "markdown",
      "description": "Output format: 'markdown' for a compact human-readable summary, 'json' for the full raw resource(s)."
    }
  },
  "required": [
    "account_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_get_container-fdc6e39c"></a>

## gtm_get_container

Handler: Calls Google Tag Manager v2 accounts.containers.get, assembling its resource path from supplied IDs.

```text
Get a single container's details. Read-only.

Args:
  - account_id (string), container_id (string)
  - response_format ('markdown' | 'json'): Output format (default: markdown)

Returns: The container resource (containerId, name, publicId, usageContext, domainName, notes).
```

[Source](https://github.com/valentineffi/zenda-tag-manager-mcp/blob/d65efb7ba3c2cf0489d802478ad11d3747ffc086/src/tools/containers.ts#L41-L68) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID, e.g. '6000000000' (from gtm_list_accounts)."
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID, e.g. '7000000000' (from gtm_list_containers)."
    },
    "response_format": {
      "type": "string",
      "enum": [
        "markdown",
        "json"
      ],
      "default": "markdown",
      "description": "Output format: 'markdown' for a compact human-readable summary, 'json' for the full raw resource(s)."
    }
  },
  "required": [
    "account_id",
    "container_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_create_container-67c96447"></a>

## gtm_create_container

Handler: Calls Google Tag Manager v2 accounts.containers.create, assembling its resource path from supplied IDs.

```text
Create a new container in an account. Write operation.

Args:
  - account_id (string)
  - body (object): Container resource. Minimum: { name, usageContext: ["web"] }.
    usageContext options: "web", "android", "ios", "server".
  - response_format ('markdown' | 'json'): Output format (default: markdown)

Returns: The created container, including the generated containerId and publicId.
```

[Source](https://github.com/valentineffi/zenda-tag-manager-mcp/blob/d65efb7ba3c2cf0489d802478ad11d3747ffc086/src/tools/containers.ts#L69-L99) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID, e.g. '6000000000' (from gtm_list_accounts)."
    },
    "body": {
      "type": "object",
      "additionalProperties": {},
      "description": "The full GTM resource object as JSON (matches the API v2 resource schema). For a tag: { name, type, parameter: [...], firingTriggerId: [...] }. For a trigger: { name, type, ... }. For a variable: { name, type, parameter: [...] }."
    },
    "response_format": {
      "type": "string",
      "enum": [
        "markdown",
        "json"
      ],
      "default": "markdown",
      "description": "Output format: 'markdown' for a compact human-readable summary, 'json' for the full raw resource(s)."
    }
  },
  "required": [
    "account_id",
    "body"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_update_container-2d4e16fc"></a>

## gtm_update_container

Handler: Calls Google Tag Manager v2 accounts.containers.update, assembling its resource path from supplied IDs.

```text
Update an existing container. Write operation.

Args:
  - account_id (string), container_id (string)
  - body (object): Full container resource with the updated fields (e.g. { name, notes }).
  - response_format ('markdown' | 'json'): Output format (default: markdown)

Returns: The updated container resource.
```

[Source](https://github.com/valentineffi/zenda-tag-manager-mcp/blob/d65efb7ba3c2cf0489d802478ad11d3747ffc086/src/tools/containers.ts#L100-L137) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID, e.g. '6000000000' (from gtm_list_accounts)."
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID, e.g. '7000000000' (from gtm_list_containers)."
    },
    "body": {
      "type": "object",
      "additionalProperties": {},
      "description": "The full GTM resource object as JSON (matches the API v2 resource schema). For a tag: { name, type, parameter: [...], firingTriggerId: [...] }. For a trigger: { name, type, ... }. For a variable: { name, type, parameter: [...] }."
    },
    "response_format": {
      "type": "string",
      "enum": [
        "markdown",
        "json"
      ],
      "default": "markdown",
      "description": "Output format: 'markdown' for a compact human-readable summary, 'json' for the full raw resource(s)."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "body"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_list_workspaces-248ce86f"></a>

## gtm_list_workspaces

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.list, assembling its resource path from supplied IDs.

```text
List workspaces in a container. Workspaces are isolated drafts where you edit tags/triggers/variables before publishing. Read-only.

Args:
  - account_id (string), container_id (string)
  - response_format ('markdown' | 'json'): Output format (default: markdown)

Returns: A list of workspaces, each with workspaceId, name, and description.
```

[Source](https://github.com/valentineffi/zenda-tag-manager-mcp/blob/d65efb7ba3c2cf0489d802478ad11d3747ffc086/src/tools/workspaces.ts#L17-L45) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID, e.g. '6000000000' (from gtm_list_accounts)."
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID, e.g. '7000000000' (from gtm_list_containers)."
    },
    "response_format": {
      "type": "string",
      "enum": [
        "markdown",
        "json"
      ],
      "default": "markdown",
      "description": "Output format: 'markdown' for a compact human-readable summary, 'json' for the full raw resource(s)."
    }
  },
  "required": [
    "account_id",
    "container_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_get_workspace-573c6822"></a>

## gtm_get_workspace

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.get, assembling its resource path from supplied IDs.

```text
Get a single workspace. Read-only.

Args:
  - account_id, container_id, workspace_id (strings)
  - response_format ('markdown' | 'json'): Output format (default: markdown)
```

[Source](https://github.com/valentineffi/zenda-tag-manager-mcp/blob/d65efb7ba3c2cf0489d802478ad11d3747ffc086/src/tools/workspaces.ts#L46-L76) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID, e.g. '6000000000' (from gtm_list_accounts)."
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID, e.g. '7000000000' (from gtm_list_containers)."
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM workspace ID, e.g. '3' (from gtm_list_workspaces)."
    },
    "response_format": {
      "type": "string",
      "enum": [
        "markdown",
        "json"
      ],
      "default": "markdown",
      "description": "Output format: 'markdown' for a compact human-readable summary, 'json' for the full raw resource(s)."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_create_workspace-6324597f"></a>

## gtm_create_workspace

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.create, assembling its resource path from supplied IDs.

```text
Create a new workspace (a fresh draft) in a container. Write operation.

Args:
  - account_id, container_id (strings)
  - body (object): { name, description? }
  - response_format ('markdown' | 'json'): Output format (default: markdown)

Returns: The created workspace with its workspaceId.
```

[Source](https://github.com/valentineffi/zenda-tag-manager-mcp/blob/d65efb7ba3c2cf0489d802478ad11d3747ffc086/src/tools/workspaces.ts#L77-L114) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID, e.g. '6000000000' (from gtm_list_accounts)."
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID, e.g. '7000000000' (from gtm_list_containers)."
    },
    "body": {
      "type": "object",
      "additionalProperties": {},
      "description": "The full GTM resource object as JSON (matches the API v2 resource schema). For a tag: { name, type, parameter: [...], firingTriggerId: [...] }. For a trigger: { name, type, ... }. For a variable: { name, type, parameter: [...] }."
    },
    "response_format": {
      "type": "string",
      "enum": [
        "markdown",
        "json"
      ],
      "default": "markdown",
      "description": "Output format: 'markdown' for a compact human-readable summary, 'json' for the full raw resource(s)."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "body"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_get_workspace_status-58373cea"></a>

## gtm_get_workspace_status

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.getStatus, assembling its resource path from supplied IDs.

```text
Show the uncommitted changes in a workspace (what was added/modified/deleted vs. the base version) plus any merge conflicts. Read-only. Use before creating a version to review the diff.

Args:
  - account_id, container_id, workspace_id (strings)

Returns: JSON with workspaceChange[] (each entry: changeStatus + the affected tag/trigger/variable) and mergeConflict[].
```

[Source](https://github.com/valentineffi/zenda-tag-manager-mcp/blob/d65efb7ba3c2cf0489d802478ad11d3747ffc086/src/tools/workspaces.ts#L115-L141) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID, e.g. '6000000000' (from gtm_list_accounts)."
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID, e.g. '7000000000' (from gtm_list_containers)."
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM workspace ID, e.g. '3' (from gtm_list_workspaces)."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_sync_workspace-c11e7d2f"></a>

## gtm_sync_workspace

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.sync, assembling its resource path from supplied IDs.

```text
Sync a workspace to the container's latest published version, surfacing any merge conflicts that must be resolved before a new version can be created. Write operation (modifies the workspace base).

Args:
  - account_id, container_id, workspace_id (strings)

Returns: JSON with syncStatus and any mergeConflict[].
```

[Source](https://github.com/valentineffi/zenda-tag-manager-mcp/blob/d65efb7ba3c2cf0489d802478ad11d3747ffc086/src/tools/workspaces.ts#L142-L168) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID, e.g. '6000000000' (from gtm_list_accounts)."
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID, e.g. '7000000000' (from gtm_list_containers)."
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM workspace ID, e.g. '3' (from gtm_list_workspaces)."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_create_version-50a805d7"></a>

## gtm_create_version

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.create\_version, assembling its resource path from supplied IDs.

```text
Freeze a workspace's current changes into a new container version. This does NOT publish — use gtm_publish_version to push the version live. Write operation.

Args:
  - account_id, container_id, workspace_id (strings)
  - name (string): Version name
  - notes (string, optional): Version notes / changelog

Returns: JSON with the created containerVersion (and its containerVersionId), plus any compilerError. After this, the workspace is typically consumed.
```

[Source](https://github.com/valentineffi/zenda-tag-manager-mcp/blob/d65efb7ba3c2cf0489d802478ad11d3747ffc086/src/tools/workspaces.ts#L169-L204) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID, e.g. '6000000000' (from gtm_list_accounts)."
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID, e.g. '7000000000' (from gtm_list_containers)."
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM workspace ID, e.g. '3' (from gtm_list_workspaces)."
    },
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "Name for the new version"
    },
    "notes": {
      "type": "string",
      "description": "Optional version notes / changelog"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "name"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_list_tags-b585bc12"></a>

## gtm_list_tags

Handler: Calls Google Tag Manager v2 workspace tag collection list, assembling the resource path from IDs.

```text
List all tags in a workspace. Read-only.

Args:
  - account_id, container_id, workspace_id (strings)
  - page_token (string, optional): for pagination
  - response_format ('markdown' | 'json'): Output format (default: markdown)

Returns: A list of tags, each with tagId, name, and type. Includes nextPageToken when more results exist.
```

[Source](https://github.com/valentineffi/zenda-tag-manager-mcp/blob/d65efb7ba3c2cf0489d802478ad11d3747ffc086/src/tools/workspaceEntities.ts#L88-L119) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID, e.g. '6000000000' (from gtm_list_accounts)."
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID, e.g. '7000000000' (from gtm_list_containers)."
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM workspace ID, e.g. '3' (from gtm_list_workspaces)."
    },
    "page_token": {
      "type": "string",
      "description": "Pagination token from a previous list response's nextPageToken."
    },
    "response_format": {
      "type": "string",
      "enum": [
        "markdown",
        "json"
      ],
      "default": "markdown",
      "description": "Output format: 'markdown' for a compact human-readable summary, 'json' for the full raw resource(s)."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_get_tag-3d242291"></a>

## gtm_get_tag

Handler: Calls Google Tag Manager v2 workspace tag collection get, assembling the resource path from IDs.

```text
Get a single tag by ID. Read-only.

Args:
  - account_id, container_id, workspace_id (strings), tag_id (string)
  - response_format ('markdown' | 'json'): Output format (default: markdown)
```

[Source](https://github.com/valentineffi/zenda-tag-manager-mcp/blob/d65efb7ba3c2cf0489d802478ad11d3747ffc086/src/tools/workspaceEntities.ts#L120-L146) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID, e.g. '6000000000' (from gtm_list_accounts)."
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID, e.g. '7000000000' (from gtm_list_containers)."
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM workspace ID, e.g. '3' (from gtm_list_workspaces)."
    },
    "tag_id": {
      "type": "string",
      "minLength": 1,
      "description": "The tagId (from gtm_list_tags)."
    },
    "response_format": {
      "type": "string",
      "enum": [
        "markdown",
        "json"
      ],
      "default": "markdown",
      "description": "Output format: 'markdown' for a compact human-readable summary, 'json' for the full raw resource(s)."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "tag_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_create_tag-c682840c"></a>

## gtm_create_tag

Handler: Calls Google Tag Manager v2 workspace tag collection create, assembling the resource path from IDs.

```text
Create a new tag in a workspace. Write operation (draft only — not live until a version is created and published).

Args:
  - account_id, container_id, workspace_id (strings)
  - body (object): Tag resource, shape: { name, type (e.g. "ua", "gaawe", "html"), parameter: [...], firingTriggerId: [...] }
  - response_format ('markdown' | 'json'): Output format (default: markdown)

Returns: The created tag with its generated tagId.
```

[Source](https://github.com/valentineffi/zenda-tag-manager-mcp/blob/d65efb7ba3c2cf0489d802478ad11d3747ffc086/src/tools/workspaceEntities.ts#L147-L176) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID, e.g. '6000000000' (from gtm_list_accounts)."
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID, e.g. '7000000000' (from gtm_list_containers)."
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM workspace ID, e.g. '3' (from gtm_list_workspaces)."
    },
    "body": {
      "type": "object",
      "additionalProperties": {},
      "description": "The full GTM resource object as JSON (matches the API v2 resource schema). For a tag: { name, type, parameter: [...], firingTriggerId: [...] }. For a trigger: { name, type, ... }. For a variable: { name, type, parameter: [...] }."
    },
    "response_format": {
      "type": "string",
      "enum": [
        "markdown",
        "json"
      ],
      "default": "markdown",
      "description": "Output format: 'markdown' for a compact human-readable summary, 'json' for the full raw resource(s)."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "body"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_update_tag-23807743"></a>

## gtm_update_tag

Handler: Calls Google Tag Manager v2 workspace tag collection update, assembling the resource path from IDs.

```text
Update an existing tag. Write operation (draft only). Send the full tag resource with your changes applied.

Args:
  - account_id, container_id, workspace_id (strings), tag_id (string)
  - body (object): Full Tag resource, shape: { name, type (e.g. "ua", "gaawe", "html"), parameter: [...], firingTriggerId: [...] }
  - response_format ('markdown' | 'json'): Output format (default: markdown)
```

[Source](https://github.com/valentineffi/zenda-tag-manager-mcp/blob/d65efb7ba3c2cf0489d802478ad11d3747ffc086/src/tools/workspaceEntities.ts#L177-L216) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID, e.g. '6000000000' (from gtm_list_accounts)."
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID, e.g. '7000000000' (from gtm_list_containers)."
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM workspace ID, e.g. '3' (from gtm_list_workspaces)."
    },
    "tag_id": {
      "type": "string",
      "minLength": 1,
      "description": "The tagId (from gtm_list_tags)."
    },
    "body": {
      "type": "object",
      "additionalProperties": {},
      "description": "The full GTM resource object as JSON (matches the API v2 resource schema). For a tag: { name, type, parameter: [...], firingTriggerId: [...] }. For a trigger: { name, type, ... }. For a variable: { name, type, parameter: [...] }."
    },
    "response_format": {
      "type": "string",
      "enum": [
        "markdown",
        "json"
      ],
      "default": "markdown",
      "description": "Output format: 'markdown' for a compact human-readable summary, 'json' for the full raw resource(s)."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "tag_id",
    "body"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_delete_tag-42a56cac"></a>

## gtm_delete_tag

Handler: Calls Google Tag Manager v2 workspace tag collection delete, assembling the resource path from IDs. Requires confirm=true before deletion.

```text
Delete a tag from a workspace. This is a draft change — it only affects production once a new version is created and published, and can be reverted before then. Destructive at the workspace level.

IMPORTANT: Always confirm with the user before deleting. Do NOT set confirm=true on your own — only pass it after the user has explicitly approved deleting this specific tag.

Args:
  - account_id, container_id, workspace_id (strings), tag_id (string)
  - confirm (boolean): Must be true to proceed. Set this only after the user explicitly confirms the deletion.
```

[Source](https://github.com/valentineffi/zenda-tag-manager-mcp/blob/d65efb7ba3c2cf0489d802478ad11d3747ffc086/src/tools/workspaceEntities.ts#L217-L269) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID, e.g. '6000000000' (from gtm_list_accounts)."
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID, e.g. '7000000000' (from gtm_list_containers)."
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM workspace ID, e.g. '3' (from gtm_list_workspaces)."
    },
    "tag_id": {
      "type": "string",
      "minLength": 1,
      "description": "The tagId (from gtm_list_tags)."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to actually delete. Only set after the user explicitly confirms deleting this tag."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "tag_id",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_list_triggers-16b41a3c"></a>

## gtm_list_triggers

Handler: Calls Google Tag Manager v2 workspace trigger collection list, assembling the resource path from IDs.

```text
List all triggers in a workspace. Read-only.

Args:
  - account_id, container_id, workspace_id (strings)
  - page_token (string, optional): for pagination
  - response_format ('markdown' | 'json'): Output format (default: markdown)

Returns: A list of triggers, each with triggerId, name, and type. Includes nextPageToken when more results exist.
```

[Source](https://github.com/valentineffi/zenda-tag-manager-mcp/blob/d65efb7ba3c2cf0489d802478ad11d3747ffc086/src/tools/workspaceEntities.ts#L88-L119) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID, e.g. '6000000000' (from gtm_list_accounts)."
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID, e.g. '7000000000' (from gtm_list_containers)."
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM workspace ID, e.g. '3' (from gtm_list_workspaces)."
    },
    "page_token": {
      "type": "string",
      "description": "Pagination token from a previous list response's nextPageToken."
    },
    "response_format": {
      "type": "string",
      "enum": [
        "markdown",
        "json"
      ],
      "default": "markdown",
      "description": "Output format: 'markdown' for a compact human-readable summary, 'json' for the full raw resource(s)."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_get_trigger-669e5c62"></a>

## gtm_get_trigger

Handler: Calls Google Tag Manager v2 workspace trigger collection get, assembling the resource path from IDs.

```text
Get a single trigger by ID. Read-only.

Args:
  - account_id, container_id, workspace_id (strings), trigger_id (string)
  - response_format ('markdown' | 'json'): Output format (default: markdown)
```

[Source](https://github.com/valentineffi/zenda-tag-manager-mcp/blob/d65efb7ba3c2cf0489d802478ad11d3747ffc086/src/tools/workspaceEntities.ts#L120-L146) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID, e.g. '6000000000' (from gtm_list_accounts)."
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID, e.g. '7000000000' (from gtm_list_containers)."
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM workspace ID, e.g. '3' (from gtm_list_workspaces)."
    },
    "trigger_id": {
      "type": "string",
      "minLength": 1,
      "description": "The triggerId (from gtm_list_triggers)."
    },
    "response_format": {
      "type": "string",
      "enum": [
        "markdown",
        "json"
      ],
      "default": "markdown",
      "description": "Output format: 'markdown' for a compact human-readable summary, 'json' for the full raw resource(s)."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "trigger_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_create_trigger-99da4322"></a>

## gtm_create_trigger

Handler: Calls Google Tag Manager v2 workspace trigger collection create, assembling the resource path from IDs.

```text
Create a new trigger in a workspace. Write operation (draft only — not live until a version is created and published).

Args:
  - account_id, container_id, workspace_id (strings)
  - body (object): Trigger resource, shape: { name, type (e.g. "pageview", "click", "customEvent"), filter: [...] }
  - response_format ('markdown' | 'json'): Output format (default: markdown)

Returns: The created trigger with its generated triggerId.
```

[Source](https://github.com/valentineffi/zenda-tag-manager-mcp/blob/d65efb7ba3c2cf0489d802478ad11d3747ffc086/src/tools/workspaceEntities.ts#L147-L176) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID, e.g. '6000000000' (from gtm_list_accounts)."
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID, e.g. '7000000000' (from gtm_list_containers)."
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM workspace ID, e.g. '3' (from gtm_list_workspaces)."
    },
    "body": {
      "type": "object",
      "additionalProperties": {},
      "description": "The full GTM resource object as JSON (matches the API v2 resource schema). For a tag: { name, type, parameter: [...], firingTriggerId: [...] }. For a trigger: { name, type, ... }. For a variable: { name, type, parameter: [...] }."
    },
    "response_format": {
      "type": "string",
      "enum": [
        "markdown",
        "json"
      ],
      "default": "markdown",
      "description": "Output format: 'markdown' for a compact human-readable summary, 'json' for the full raw resource(s)."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "body"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_update_trigger-ce48de45"></a>

## gtm_update_trigger

Handler: Calls Google Tag Manager v2 workspace trigger collection update, assembling the resource path from IDs.

```text
Update an existing trigger. Write operation (draft only). Send the full trigger resource with your changes applied.

Args:
  - account_id, container_id, workspace_id (strings), trigger_id (string)
  - body (object): Full Trigger resource, shape: { name, type (e.g. "pageview", "click", "customEvent"), filter: [...] }
  - response_format ('markdown' | 'json'): Output format (default: markdown)
```

[Source](https://github.com/valentineffi/zenda-tag-manager-mcp/blob/d65efb7ba3c2cf0489d802478ad11d3747ffc086/src/tools/workspaceEntities.ts#L177-L216) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID, e.g. '6000000000' (from gtm_list_accounts)."
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID, e.g. '7000000000' (from gtm_list_containers)."
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM workspace ID, e.g. '3' (from gtm_list_workspaces)."
    },
    "trigger_id": {
      "type": "string",
      "minLength": 1,
      "description": "The triggerId (from gtm_list_triggers)."
    },
    "body": {
      "type": "object",
      "additionalProperties": {},
      "description": "The full GTM resource object as JSON (matches the API v2 resource schema). For a tag: { name, type, parameter: [...], firingTriggerId: [...] }. For a trigger: { name, type, ... }. For a variable: { name, type, parameter: [...] }."
    },
    "response_format": {
      "type": "string",
      "enum": [
        "markdown",
        "json"
      ],
      "default": "markdown",
      "description": "Output format: 'markdown' for a compact human-readable summary, 'json' for the full raw resource(s)."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "trigger_id",
    "body"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_delete_trigger-dac3085f"></a>

## gtm_delete_trigger

Handler: Calls Google Tag Manager v2 workspace trigger collection delete, assembling the resource path from IDs. Requires confirm=true before deletion.

```text
Delete a trigger from a workspace. This is a draft change — it only affects production once a new version is created and published, and can be reverted before then. Destructive at the workspace level.

IMPORTANT: Always confirm with the user before deleting. Do NOT set confirm=true on your own — only pass it after the user has explicitly approved deleting this specific trigger.

Args:
  - account_id, container_id, workspace_id (strings), trigger_id (string)
  - confirm (boolean): Must be true to proceed. Set this only after the user explicitly confirms the deletion.
```

[Source](https://github.com/valentineffi/zenda-tag-manager-mcp/blob/d65efb7ba3c2cf0489d802478ad11d3747ffc086/src/tools/workspaceEntities.ts#L217-L269) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID, e.g. '6000000000' (from gtm_list_accounts)."
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID, e.g. '7000000000' (from gtm_list_containers)."
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM workspace ID, e.g. '3' (from gtm_list_workspaces)."
    },
    "trigger_id": {
      "type": "string",
      "minLength": 1,
      "description": "The triggerId (from gtm_list_triggers)."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to actually delete. Only set after the user explicitly confirms deleting this trigger."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "trigger_id",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_list_variables-81705a80"></a>

## gtm_list_variables

Handler: Calls Google Tag Manager v2 workspace variable collection list, assembling the resource path from IDs.

```text
List all variables in a workspace. Read-only.

Args:
  - account_id, container_id, workspace_id (strings)
  - page_token (string, optional): for pagination
  - response_format ('markdown' | 'json'): Output format (default: markdown)

Returns: A list of variables, each with variableId, name, and type. Includes nextPageToken when more results exist.
```

[Source](https://github.com/valentineffi/zenda-tag-manager-mcp/blob/d65efb7ba3c2cf0489d802478ad11d3747ffc086/src/tools/workspaceEntities.ts#L88-L119) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID, e.g. '6000000000' (from gtm_list_accounts)."
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID, e.g. '7000000000' (from gtm_list_containers)."
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM workspace ID, e.g. '3' (from gtm_list_workspaces)."
    },
    "page_token": {
      "type": "string",
      "description": "Pagination token from a previous list response's nextPageToken."
    },
    "response_format": {
      "type": "string",
      "enum": [
        "markdown",
        "json"
      ],
      "default": "markdown",
      "description": "Output format: 'markdown' for a compact human-readable summary, 'json' for the full raw resource(s)."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_get_variable-e6ff3763"></a>

## gtm_get_variable

Handler: Calls Google Tag Manager v2 workspace variable collection get, assembling the resource path from IDs.

```text
Get a single variable by ID. Read-only.

Args:
  - account_id, container_id, workspace_id (strings), variable_id (string)
  - response_format ('markdown' | 'json'): Output format (default: markdown)
```

[Source](https://github.com/valentineffi/zenda-tag-manager-mcp/blob/d65efb7ba3c2cf0489d802478ad11d3747ffc086/src/tools/workspaceEntities.ts#L120-L146) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID, e.g. '6000000000' (from gtm_list_accounts)."
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID, e.g. '7000000000' (from gtm_list_containers)."
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM workspace ID, e.g. '3' (from gtm_list_workspaces)."
    },
    "variable_id": {
      "type": "string",
      "minLength": 1,
      "description": "The variableId (from gtm_list_variables)."
    },
    "response_format": {
      "type": "string",
      "enum": [
        "markdown",
        "json"
      ],
      "default": "markdown",
      "description": "Output format: 'markdown' for a compact human-readable summary, 'json' for the full raw resource(s)."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "variable_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_create_variable-5b853337"></a>

## gtm_create_variable

Handler: Calls Google Tag Manager v2 workspace variable collection create, assembling the resource path from IDs.

```text
Create a new variable in a workspace. Write operation (draft only — not live until a version is created and published).

Args:
  - account_id, container_id, workspace_id (strings)
  - body (object): Variable resource, shape: { name, type (e.g. "v" for data-layer, "c" for constant, "jsm"), parameter: [...] }
  - response_format ('markdown' | 'json'): Output format (default: markdown)

Returns: The created variable with its generated variableId.
```

[Source](https://github.com/valentineffi/zenda-tag-manager-mcp/blob/d65efb7ba3c2cf0489d802478ad11d3747ffc086/src/tools/workspaceEntities.ts#L147-L176) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID, e.g. '6000000000' (from gtm_list_accounts)."
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID, e.g. '7000000000' (from gtm_list_containers)."
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM workspace ID, e.g. '3' (from gtm_list_workspaces)."
    },
    "body": {
      "type": "object",
      "additionalProperties": {},
      "description": "The full GTM resource object as JSON (matches the API v2 resource schema). For a tag: { name, type, parameter: [...], firingTriggerId: [...] }. For a trigger: { name, type, ... }. For a variable: { name, type, parameter: [...] }."
    },
    "response_format": {
      "type": "string",
      "enum": [
        "markdown",
        "json"
      ],
      "default": "markdown",
      "description": "Output format: 'markdown' for a compact human-readable summary, 'json' for the full raw resource(s)."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "body"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_update_variable-898f92d4"></a>

## gtm_update_variable

Handler: Calls Google Tag Manager v2 workspace variable collection update, assembling the resource path from IDs.

```text
Update an existing variable. Write operation (draft only). Send the full variable resource with your changes applied.

Args:
  - account_id, container_id, workspace_id (strings), variable_id (string)
  - body (object): Full Variable resource, shape: { name, type (e.g. "v" for data-layer, "c" for constant, "jsm"), parameter: [...] }
  - response_format ('markdown' | 'json'): Output format (default: markdown)
```

[Source](https://github.com/valentineffi/zenda-tag-manager-mcp/blob/d65efb7ba3c2cf0489d802478ad11d3747ffc086/src/tools/workspaceEntities.ts#L177-L216) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID, e.g. '6000000000' (from gtm_list_accounts)."
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID, e.g. '7000000000' (from gtm_list_containers)."
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM workspace ID, e.g. '3' (from gtm_list_workspaces)."
    },
    "variable_id": {
      "type": "string",
      "minLength": 1,
      "description": "The variableId (from gtm_list_variables)."
    },
    "body": {
      "type": "object",
      "additionalProperties": {},
      "description": "The full GTM resource object as JSON (matches the API v2 resource schema). For a tag: { name, type, parameter: [...], firingTriggerId: [...] }. For a trigger: { name, type, ... }. For a variable: { name, type, parameter: [...] }."
    },
    "response_format": {
      "type": "string",
      "enum": [
        "markdown",
        "json"
      ],
      "default": "markdown",
      "description": "Output format: 'markdown' for a compact human-readable summary, 'json' for the full raw resource(s)."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "variable_id",
    "body"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_delete_variable-9bd36787"></a>

## gtm_delete_variable

Handler: Calls Google Tag Manager v2 workspace variable collection delete, assembling the resource path from IDs. Requires confirm=true before deletion.

```text
Delete a variable from a workspace. This is a draft change — it only affects production once a new version is created and published, and can be reverted before then. Destructive at the workspace level.

IMPORTANT: Always confirm with the user before deleting. Do NOT set confirm=true on your own — only pass it after the user has explicitly approved deleting this specific variable.

Args:
  - account_id, container_id, workspace_id (strings), variable_id (string)
  - confirm (boolean): Must be true to proceed. Set this only after the user explicitly confirms the deletion.
```

[Source](https://github.com/valentineffi/zenda-tag-manager-mcp/blob/d65efb7ba3c2cf0489d802478ad11d3747ffc086/src/tools/workspaceEntities.ts#L217-L269) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID, e.g. '6000000000' (from gtm_list_accounts)."
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID, e.g. '7000000000' (from gtm_list_containers)."
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM workspace ID, e.g. '3' (from gtm_list_workspaces)."
    },
    "variable_id": {
      "type": "string",
      "minLength": 1,
      "description": "The variableId (from gtm_list_variables)."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to actually delete. Only set after the user explicitly confirms deleting this variable."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "variable_id",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_list_folders-9da6c22f"></a>

## gtm_list_folders

Handler: Calls Google Tag Manager v2 workspace folder collection list, assembling the resource path from IDs.

```text
List all folders in a workspace. Read-only.

Args:
  - account_id, container_id, workspace_id (strings)
  - page_token (string, optional): for pagination
  - response_format ('markdown' | 'json'): Output format (default: markdown)

Returns: A list of folders, each with folderId, name, and type. Includes nextPageToken when more results exist.
```

[Source](https://github.com/valentineffi/zenda-tag-manager-mcp/blob/d65efb7ba3c2cf0489d802478ad11d3747ffc086/src/tools/workspaceEntities.ts#L88-L119) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID, e.g. '6000000000' (from gtm_list_accounts)."
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID, e.g. '7000000000' (from gtm_list_containers)."
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM workspace ID, e.g. '3' (from gtm_list_workspaces)."
    },
    "page_token": {
      "type": "string",
      "description": "Pagination token from a previous list response's nextPageToken."
    },
    "response_format": {
      "type": "string",
      "enum": [
        "markdown",
        "json"
      ],
      "default": "markdown",
      "description": "Output format: 'markdown' for a compact human-readable summary, 'json' for the full raw resource(s)."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_get_folder-a5332034"></a>

## gtm_get_folder

Handler: Calls Google Tag Manager v2 workspace folder collection get, assembling the resource path from IDs.

```text
Get a single folder by ID. Read-only.

Args:
  - account_id, container_id, workspace_id (strings), folder_id (string)
  - response_format ('markdown' | 'json'): Output format (default: markdown)
```

[Source](https://github.com/valentineffi/zenda-tag-manager-mcp/blob/d65efb7ba3c2cf0489d802478ad11d3747ffc086/src/tools/workspaceEntities.ts#L120-L146) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID, e.g. '6000000000' (from gtm_list_accounts)."
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID, e.g. '7000000000' (from gtm_list_containers)."
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM workspace ID, e.g. '3' (from gtm_list_workspaces)."
    },
    "folder_id": {
      "type": "string",
      "minLength": 1,
      "description": "The folderId (from gtm_list_folders)."
    },
    "response_format": {
      "type": "string",
      "enum": [
        "markdown",
        "json"
      ],
      "default": "markdown",
      "description": "Output format: 'markdown' for a compact human-readable summary, 'json' for the full raw resource(s)."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "folder_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_create_folder-a7f80e8c"></a>

## gtm_create_folder

Handler: Calls Google Tag Manager v2 workspace folder collection create, assembling the resource path from IDs.

```text
Create a new folder in a workspace. Write operation (draft only — not live until a version is created and published).

Args:
  - account_id, container_id, workspace_id (strings)
  - body (object): Folder resource, shape: { name }
  - response_format ('markdown' | 'json'): Output format (default: markdown)

Returns: The created folder with its generated folderId.
```

[Source](https://github.com/valentineffi/zenda-tag-manager-mcp/blob/d65efb7ba3c2cf0489d802478ad11d3747ffc086/src/tools/workspaceEntities.ts#L147-L176) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID, e.g. '6000000000' (from gtm_list_accounts)."
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID, e.g. '7000000000' (from gtm_list_containers)."
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM workspace ID, e.g. '3' (from gtm_list_workspaces)."
    },
    "body": {
      "type": "object",
      "additionalProperties": {},
      "description": "The full GTM resource object as JSON (matches the API v2 resource schema). For a tag: { name, type, parameter: [...], firingTriggerId: [...] }. For a trigger: { name, type, ... }. For a variable: { name, type, parameter: [...] }."
    },
    "response_format": {
      "type": "string",
      "enum": [
        "markdown",
        "json"
      ],
      "default": "markdown",
      "description": "Output format: 'markdown' for a compact human-readable summary, 'json' for the full raw resource(s)."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "body"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_update_folder-0eb0b999"></a>

## gtm_update_folder

Handler: Calls Google Tag Manager v2 workspace folder collection update, assembling the resource path from IDs.

```text
Update an existing folder. Write operation (draft only). Send the full folder resource with your changes applied.

Args:
  - account_id, container_id, workspace_id (strings), folder_id (string)
  - body (object): Full Folder resource, shape: { name }
  - response_format ('markdown' | 'json'): Output format (default: markdown)
```

[Source](https://github.com/valentineffi/zenda-tag-manager-mcp/blob/d65efb7ba3c2cf0489d802478ad11d3747ffc086/src/tools/workspaceEntities.ts#L177-L216) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID, e.g. '6000000000' (from gtm_list_accounts)."
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID, e.g. '7000000000' (from gtm_list_containers)."
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM workspace ID, e.g. '3' (from gtm_list_workspaces)."
    },
    "folder_id": {
      "type": "string",
      "minLength": 1,
      "description": "The folderId (from gtm_list_folders)."
    },
    "body": {
      "type": "object",
      "additionalProperties": {},
      "description": "The full GTM resource object as JSON (matches the API v2 resource schema). For a tag: { name, type, parameter: [...], firingTriggerId: [...] }. For a trigger: { name, type, ... }. For a variable: { name, type, parameter: [...] }."
    },
    "response_format": {
      "type": "string",
      "enum": [
        "markdown",
        "json"
      ],
      "default": "markdown",
      "description": "Output format: 'markdown' for a compact human-readable summary, 'json' for the full raw resource(s)."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "folder_id",
    "body"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_delete_folder-9602489f"></a>

## gtm_delete_folder

Handler: Calls Google Tag Manager v2 workspace folder collection delete, assembling the resource path from IDs. Requires confirm=true before deletion.

```text
Delete a folder from a workspace. This is a draft change — it only affects production once a new version is created and published, and can be reverted before then. Destructive at the workspace level.

IMPORTANT: Always confirm with the user before deleting. Do NOT set confirm=true on your own — only pass it after the user has explicitly approved deleting this specific folder.

Args:
  - account_id, container_id, workspace_id (strings), folder_id (string)
  - confirm (boolean): Must be true to proceed. Set this only after the user explicitly confirms the deletion.
```

[Source](https://github.com/valentineffi/zenda-tag-manager-mcp/blob/d65efb7ba3c2cf0489d802478ad11d3747ffc086/src/tools/workspaceEntities.ts#L217-L269) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID, e.g. '6000000000' (from gtm_list_accounts)."
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID, e.g. '7000000000' (from gtm_list_containers)."
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM workspace ID, e.g. '3' (from gtm_list_workspaces)."
    },
    "folder_id": {
      "type": "string",
      "minLength": 1,
      "description": "The folderId (from gtm_list_folders)."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to actually delete. Only set after the user explicitly confirms deleting this folder."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "folder_id",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_list_builtin_variables-e3216e58"></a>

## gtm_list_builtin_variables

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.built\_in\_variables.list, assembling its resource path from supplied IDs.

```text
List the built-in variables currently enabled in a workspace (Page URL, Click Classes, etc.). Read-only.

Args:
  - account_id, container_id, workspace_id (strings)
  - response_format ('markdown' | 'json'): Output format (default: markdown)
```

[Source](https://github.com/valentineffi/zenda-tag-manager-mcp/blob/d65efb7ba3c2cf0489d802478ad11d3747ffc086/src/tools/builtinVariables.ts#L24-L55) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID, e.g. '6000000000' (from gtm_list_accounts)."
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID, e.g. '7000000000' (from gtm_list_containers)."
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM workspace ID, e.g. '3' (from gtm_list_workspaces)."
    },
    "response_format": {
      "type": "string",
      "enum": [
        "markdown",
        "json"
      ],
      "default": "markdown",
      "description": "Output format: 'markdown' for a compact human-readable summary, 'json' for the full raw resource(s)."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_enable_builtin_variables-58e53a64"></a>

## gtm_enable_builtin_variables

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.built\_in\_variables.create, assembling its resource path from supplied IDs.

```text
Enable one or more built-in variables in a workspace. Write operation.

Args:
  - account_id, container_id, workspace_id (strings)
  - types (string[]): built-in variable type keys to enable

Returns: JSON with the enabled builtInVariable[].
```

[Source](https://github.com/valentineffi/zenda-tag-manager-mcp/blob/d65efb7ba3c2cf0489d802478ad11d3747ffc086/src/tools/builtinVariables.ts#L56-L84) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID, e.g. '6000000000' (from gtm_list_accounts)."
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID, e.g. '7000000000' (from gtm_list_containers)."
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM workspace ID, e.g. '3' (from gtm_list_workspaces)."
    },
    "types": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1
      },
      "minItems": 1,
      "description": "Built-in variable type keys, e.g. [\"pageUrl\", \"clickClasses\", \"newHistoryFragment\"]. See the GTM API enum BuiltInVariable.Type."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "types"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_disable_builtin_variables-a24ff688"></a>

## gtm_disable_builtin_variables

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.built\_in\_variables.delete, assembling its resource path from supplied IDs.

```text
Disable one or more built-in variables in a workspace. Destructive at the workspace level (reversible before publish).

Args:
  - account_id, container_id, workspace_id (strings)
  - types (string[]): built-in variable type keys to disable
```

[Source](https://github.com/valentineffi/zenda-tag-manager-mcp/blob/d65efb7ba3c2cf0489d802478ad11d3747ffc086/src/tools/builtinVariables.ts#L85-L111) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID, e.g. '6000000000' (from gtm_list_accounts)."
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID, e.g. '7000000000' (from gtm_list_containers)."
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM workspace ID, e.g. '3' (from gtm_list_workspaces)."
    },
    "types": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1
      },
      "minItems": 1,
      "description": "Built-in variable type keys, e.g. [\"pageUrl\", \"clickClasses\", \"newHistoryFragment\"]. See the GTM API enum BuiltInVariable.Type."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "types"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_list_version_headers-1b2c0287"></a>

## gtm_list_version_headers

Handler: Calls Google Tag Manager v2 accounts.containers.version\_headers.list, assembling its resource path from supplied IDs.

```text
List the version history of a container (lightweight headers, not full versions). Read-only.

Args:
  - account_id, container_id (strings)
  - response_format ('markdown' | 'json'): Output format (default: markdown)

Returns: containerVersionHeader[] with containerVersionId, name, and counts. Includes nextPageToken when more exist.
```

[Source](https://github.com/valentineffi/zenda-tag-manager-mcp/blob/d65efb7ba3c2cf0489d802478ad11d3747ffc086/src/tools/versions.ts#L19-L48) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID, e.g. '6000000000' (from gtm_list_accounts)."
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID, e.g. '7000000000' (from gtm_list_containers)."
    },
    "response_format": {
      "type": "string",
      "enum": [
        "markdown",
        "json"
      ],
      "default": "markdown",
      "description": "Output format: 'markdown' for a compact human-readable summary, 'json' for the full raw resource(s)."
    }
  },
  "required": [
    "account_id",
    "container_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_get_version-c83b7c02"></a>

## gtm_get_version

Handler: Calls Google Tag Manager v2 accounts.containers.versions.get, assembling its resource path from supplied IDs.

```text
Get a full container version, including all its tags, triggers and variables. Read-only.

Args:
  - account_id, container_id, version_id (strings)
  - response_format ('markdown' | 'json'): Output format (default: markdown)
```

[Source](https://github.com/valentineffi/zenda-tag-manager-mcp/blob/d65efb7ba3c2cf0489d802478ad11d3747ffc086/src/tools/versions.ts#L49-L79) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID, e.g. '6000000000' (from gtm_list_accounts)."
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID, e.g. '7000000000' (from gtm_list_containers)."
    },
    "version_id": {
      "type": "string",
      "minLength": 1,
      "description": "Container version ID (containerVersionId)."
    },
    "response_format": {
      "type": "string",
      "enum": [
        "markdown",
        "json"
      ],
      "default": "markdown",
      "description": "Output format: 'markdown' for a compact human-readable summary, 'json' for the full raw resource(s)."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "version_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_get_live_version-986da5ee"></a>

## gtm_get_live_version

Handler: Calls Google Tag Manager v2 accounts.containers.versions.live, assembling its resource path from supplied IDs.

```text
Get the container version currently published live to production. Read-only.

Args:
  - account_id, container_id (strings)
  - response_format ('markdown' | 'json'): Output format (default: markdown)
```

[Source](https://github.com/valentineffi/zenda-tag-manager-mcp/blob/d65efb7ba3c2cf0489d802478ad11d3747ffc086/src/tools/versions.ts#L80-L105) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID, e.g. '6000000000' (from gtm_list_accounts)."
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID, e.g. '7000000000' (from gtm_list_containers)."
    },
    "response_format": {
      "type": "string",
      "enum": [
        "markdown",
        "json"
      ],
      "default": "markdown",
      "description": "Output format: 'markdown' for a compact human-readable summary, 'json' for the full raw resource(s)."
    }
  },
  "required": [
    "account_id",
    "container_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_publish_version-0cc97535"></a>

## gtm_publish_version

Handler: Calls Google Tag Manager v2 accounts.containers.versions.publish, assembling its resource path from supplied IDs. Requires confirm=true before publishing.

```text
Publish a container version LIVE to production. This immediately affects the real website/app. DESTRUCTIVE / high-impact — requires confirmation.

Args:
  - account_id, container_id, version_id (strings)
  - confirm (boolean): Must be true to publish.

Returns: JSON with the published containerVersion and any compilerError.
```

[Source](https://github.com/valentineffi/zenda-tag-manager-mcp/blob/d65efb7ba3c2cf0489d802478ad11d3747ffc086/src/tools/versions.ts#L106-L144) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID, e.g. '6000000000' (from gtm_list_accounts)."
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID, e.g. '7000000000' (from gtm_list_containers)."
    },
    "version_id": {
      "type": "string",
      "minLength": 1,
      "description": "Container version ID (containerVersionId)."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to publish live to production."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "version_id",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_set_latest_version-80a1483f"></a>

## gtm_set_latest_version

Handler: Calls Google Tag Manager v2 accounts.containers.versions.set\_latest, assembling its resource path from supplied IDs.

```text
Mark a container version as the latest (without publishing it live). Write operation.

Args:
  - account_id, container_id, version_id (strings)
  - response_format ('markdown' | 'json'): Output format (default: markdown)
```

[Source](https://github.com/valentineffi/zenda-tag-manager-mcp/blob/d65efb7ba3c2cf0489d802478ad11d3747ffc086/src/tools/versions.ts#L145-L175) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID, e.g. '6000000000' (from gtm_list_accounts)."
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID, e.g. '7000000000' (from gtm_list_containers)."
    },
    "version_id": {
      "type": "string",
      "minLength": 1,
      "description": "Container version ID (containerVersionId)."
    },
    "response_format": {
      "type": "string",
      "enum": [
        "markdown",
        "json"
      ],
      "default": "markdown",
      "description": "Output format: 'markdown' for a compact human-readable summary, 'json' for the full raw resource(s)."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "version_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_list_environments-9f7a4399"></a>

## gtm_list_environments

Handler: Calls Google Tag Manager v2 accounts.containers.environments.list, assembling its resource path from supplied IDs.

```text
List a container's environments (Live, Latest, and any custom ones like Staging). Read-only.

Args:
  - account_id, container_id (strings)
  - response_format ('markdown' | 'json'): Output format (default: markdown)
```

[Source](https://github.com/valentineffi/zenda-tag-manager-mcp/blob/d65efb7ba3c2cf0489d802478ad11d3747ffc086/src/tools/environments.ts#L16-L42) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID, e.g. '6000000000' (from gtm_list_accounts)."
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID, e.g. '7000000000' (from gtm_list_containers)."
    },
    "response_format": {
      "type": "string",
      "enum": [
        "markdown",
        "json"
      ],
      "default": "markdown",
      "description": "Output format: 'markdown' for a compact human-readable summary, 'json' for the full raw resource(s)."
    }
  },
  "required": [
    "account_id",
    "container_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_get_environment-9574f4ec"></a>

## gtm_get_environment

Handler: Calls Google Tag Manager v2 accounts.containers.environments.get, assembling its resource path from supplied IDs.

```text
Get a single environment, including its authorization code/URL. Read-only.

Args:
  - account_id, container_id, environment_id (strings)
  - response_format ('markdown' | 'json'): Output format (default: markdown)
```

[Source](https://github.com/valentineffi/zenda-tag-manager-mcp/blob/d65efb7ba3c2cf0489d802478ad11d3747ffc086/src/tools/environments.ts#L43-L73) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID, e.g. '6000000000' (from gtm_list_accounts)."
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID, e.g. '7000000000' (from gtm_list_containers)."
    },
    "environment_id": {
      "type": "string",
      "minLength": 1,
      "description": "Environment ID"
    },
    "response_format": {
      "type": "string",
      "enum": [
        "markdown",
        "json"
      ],
      "default": "markdown",
      "description": "Output format: 'markdown' for a compact human-readable summary, 'json' for the full raw resource(s)."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "environment_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>
