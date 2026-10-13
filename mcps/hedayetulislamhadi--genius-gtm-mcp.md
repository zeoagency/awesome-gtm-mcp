# hedayetulislamhadi/genius-gtm-mcp

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/hedayetulislamhadi/genius-gtm-mcp) · [Machine-readable inventory](../data/mcps/hedayetulislamhadi--genius-gtm-mcp.json)

**27 extracted tools.** Configures server clients, transformations, and templates alongside container entity operations.

Snapshot: 2026-10-13 · [ba2bc077fd80](https://github.com/hedayetulislamhadi/genius-gtm-mcp/tree/ba2bc077fd804542decb9018cc88acd4face3b05) · Method: source.

Exposure: All 27 tools are unconditionally listed together after mandatory Google OAuth client ID, secret and refresh token startup gate; Cloudflare, Stape and Meta credentials are checked by their handlers.

## Limits

- Static literal registration extracted without executing server or invoking any API operations; SDK method availability inspected offline with googleapis 144.0.0.
- Upstream package-lock resolves googleapis 173.0.0 while package.json requests ^144.0.0; npm ci fails; offline inspection used package.json-compatible npm install in isolated scratch.
- gtm_version list calls absent versions.list; gtm_gtag_config revert calls absent gtag_config.revert.
- Built-in-variable disable uses workspace path without built_in_variables suffix; revert supplies array types where SDK expects singular string and uses workspace path contrary to declared SDK path.
- Action-specific required IDs/payload fields are mostly not required by exposed schemas; handlers do not validate these before API calls.
- No remote API functionality tested; Cloudflare, Stape and Meta HTTP endpoints and API-version support remain unverified.
- stape_container_manager logs API key to stderr; default create region differs from schema description.
- genius_capi_validator only produces sample payloads and performs no actual validation; shared other-product tools are retained in catalog.
- List endpoints do not paginate; responses are truncated at 60000 characters.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`gtm_account`](#tool-gtm_account-da3f1407) | GTM | Lists, reads or updates GTM accounts using the v2 accounts resource. |
| [`gtm_container`](#tool-gtm_container-edc9968d) | GTM | Dispatches container CRUD, snippet, lookup, combine and move\_tag\_id requests to the v2 containers resource. |
| [`gtm_workspace`](#tool-gtm_workspace-ee5e8b97) | GTM | Dispatches workspace CRUD, sync, status, quick preview and conflict resolution to the v2 workspaces resource. |
| [`gtm_tag`](#tool-gtm_tag-c3e06f2b) | GTM | Dispatches workspace tag list/get/create/update/delete/revert operations through the common GTM resource helper. |
| [`gtm_trigger`](#tool-gtm_trigger-5c5777f3) | GTM | Dispatches workspace trigger list/get/create/update/delete/revert operations through the common GTM resource helper. |
| [`gtm_variable`](#tool-gtm_variable-ec512642) | GTM | Dispatches workspace variable list/get/create/update/delete/revert operations through the common GTM resource helper. |
| [`gtm_built_in_variable`](#tool-gtm_built_in_variable-779be1c3) | GTM | Lists/enables built-in variables; disable passes a workspace path without /built\_in\_variables, and revert passes an array where the SDK expects one type. |
| [`gtm_folder`](#tool-gtm_folder-98e6da8b) | GTM | Dispatches folder CRUD/revert/entity inspection and moves payload tagIds, triggerIds and variableIds into a folder. |
| [`gtm_client`](#tool-gtm_client-dc17ee47) | GTM | Dispatches workspace client list/get/create/update/delete/revert operations through the common GTM resource helper. |
| [`gtm_zone`](#tool-gtm_zone-78bf4872) | GTM | Dispatches workspace zone list/get/create/update/delete/revert operations through the common GTM resource helper. |
| [`gtm_template`](#tool-gtm_template-47833aba) | GTM | Dispatches workspace template list/get/create/update/delete/revert operations through the common GTM resource helper. |
| [`gtm_transformation`](#tool-gtm_transformation-c270ba51) | GTM | Dispatches workspace transformation list/get/create/update/delete/revert operations through the common GTM resource helper. |
| [`gtm_gtag_config`](#tool-gtm_gtag_config-f5a9eddd) | GTM | Dispatches Google tag configuration CRUD through the workspace helper; advertised revert calls a nonexistent SDK method. |
| [`gtm_version`](#tool-gtm_version-759608b8) | GTM | Gets live/specific versions, publishes, undeletes, sets latest or creates from workspace; list calls nonexistent versions.list in googleapis 144. |
| [`gtm_version_header`](#tool-gtm_version_header-e1c252fe) | GTM | Lists version headers or retrieves the latest header. |
| [`gtm_environment`](#tool-gtm_environment-9aa46ece) | GTM | Lists, gets, creates, updates, deletes or reauthorizes container environments. |
| [`gtm_destination`](#tool-gtm_destination-0c1e6401) | GTM | Lists/gets destinations or links a destination with allowUserPermissionFeatureUpdate always true; payload is ignored. |
| [`gtm_user_permission`](#tool-gtm_user_permission-cbd8ceca) | GTM | Lists, gets, creates, updates or deletes account user permissions. |
| [`gtm_raw`](#tool-gtm_raw-5c9b23ae) | GTM | Traverses an arbitrary dot-separated method on the GTM v2 client and invokes it with unrestricted params. |
| [`genius_datalayer_builder`](#tool-genius_datalayer_builder-dc50e01b) | Supporting | Generates a local dataLayer.push script with hardcoded demo ecommerce items or placeholder custom parameters, interpolating eventName directly. |
| [`genius_capi_validator`](#tool-genius_capi_validator-5eb36b9e) | Other product | Generates local hardcoded sample Meta, TikTok or Snapchat event payloads with placeholder hashed identity data; performs no validation of browser data. |
| [`cloudflare_zone_lookup`](#tool-cloudflare_zone_lookup-a79903c6) | Other product | Cloudflare: fetches zones by domain name and returns the first matching zone ID. |
| [`cloudflare_dns_manager`](#tool-cloudflare_dns_manager-e54c8617) | Other product | Cloudflare: lists, creates with ttl 3600 and proxied default false, or deletes DNS records, returning raw API JSON. |
| [`cloudflare_worker_deploy`](#tool-cloudflare_worker_deploy-16e92166) | Other product | Cloudflare: uploads scriptContent via PUT to a Workers script endpoint; does not configure routes or bindings. |
| [`stape_container_manager`](#tool-stape_container_manager-9f95abca) | Supporting | Calls Stape v2 container list/get/create/delete endpoints; create defaults zone.type to apd despite schema description saying us, and logs the API key to stderr. |
| [`stape_domain_manager`](#tool-stape_domain_manager-2ca8fd22) | Supporting | Calls Stape v2 domain list/add/verify/delete endpoints and returns API responses as DNS instructions when adding. |
| [`meta_pixel_capi_manager`](#tool-meta_pixel_capi_manager-82f9b89d) | Other product | Meta: lists ad accounts, scans accounts for pixels or posts CAPI events to Graph API v19.0 with timestamp and fallback event/user data; does not hash supplied identity data. |

<a id="tool-gtm_account-da3f1407"></a>

## gtm_account

Handler: Lists, reads or updates GTM accounts using the v2 accounts resource.

```text
Manage GTM accounts. actions: list | get | update.
```

[Source](https://github.com/hedayetulislamhadi/genius-gtm-mcp/blob/ba2bc077fd804542decb9018cc88acd4face3b05/server.js#L98-L98) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "action": {
      "type": "string",
      "enum": [
        "list",
        "get",
        "update"
      ]
    },
    "accountId": {
      "type": "string"
    },
    "payload": {
      "type": "object"
    }
  },
  "required": [
    "action"
  ]
}
```

</details>

<a id="tool-gtm_container-edc9968d"></a>

## gtm_container

Handler: Dispatches container CRUD, snippet, lookup, combine and move\_tag\_id requests to the v2 containers resource.

```text
Manage containers. actions: list | get | create | update | delete | snippet | lookup | combine | move_tag_id.
```

[Source](https://github.com/hedayetulislamhadi/genius-gtm-mcp/blob/ba2bc077fd804542decb9018cc88acd4face3b05/server.js#L99-L99) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "action": {
      "type": "string",
      "enum": [
        "list",
        "get",
        "create",
        "update",
        "delete",
        "snippet",
        "lookup",
        "combine",
        "move_tag_id"
      ]
    },
    "accountId": {
      "type": "string"
    },
    "containerId": {
      "type": "string"
    },
    "destinationId": {
      "type": "string"
    },
    "tagId": {
      "type": "string"
    },
    "payload": {
      "type": "object"
    }
  },
  "required": [
    "action",
    "accountId"
  ]
}
```

</details>

<a id="tool-gtm_workspace-ee5e8b97"></a>

## gtm_workspace

Handler: Dispatches workspace CRUD, sync, status, quick preview and conflict resolution to the v2 workspaces resource.

```text
Manage workspaces. actions: list | get | create | update | delete | sync | get_status | quick_preview | resolve_conflict.
```

[Source](https://github.com/hedayetulislamhadi/genius-gtm-mcp/blob/ba2bc077fd804542decb9018cc88acd4face3b05/server.js#L100-L100) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "action": {
      "type": "string",
      "enum": [
        "list",
        "get",
        "create",
        "update",
        "delete",
        "sync",
        "get_status",
        "quick_preview",
        "resolve_conflict"
      ]
    },
    "accountId": {
      "type": "string"
    },
    "containerId": {
      "type": "string"
    },
    "workspaceId": {
      "type": "string"
    },
    "payload": {
      "type": "object"
    }
  },
  "required": [
    "action",
    "accountId",
    "containerId"
  ]
}
```

</details>

<a id="tool-gtm_tag-c3e06f2b"></a>

## gtm_tag

Handler: Dispatches workspace tag list/get/create/update/delete/revert operations through the common GTM resource helper.

```text
Manage tags.
```

[Source](https://github.com/hedayetulislamhadi/genius-gtm-mcp/blob/ba2bc077fd804542decb9018cc88acd4face3b05/server.js#L101-L101) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "action": {
      "type": "string",
      "enum": [
        "list",
        "get",
        "create",
        "update",
        "delete",
        "revert"
      ]
    },
    "accountId": {
      "type": "string"
    },
    "containerId": {
      "type": "string"
    },
    "workspaceId": {
      "type": "string"
    },
    "entityId": {
      "type": "string"
    },
    "payload": {
      "type": "object"
    }
  },
  "required": [
    "action",
    "accountId",
    "containerId",
    "workspaceId"
  ]
}
```

</details>

<a id="tool-gtm_trigger-5c5777f3"></a>

## gtm_trigger

Handler: Dispatches workspace trigger list/get/create/update/delete/revert operations through the common GTM resource helper.

```text
Manage triggers.
```

[Source](https://github.com/hedayetulislamhadi/genius-gtm-mcp/blob/ba2bc077fd804542decb9018cc88acd4face3b05/server.js#L102-L102) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "action": {
      "type": "string",
      "enum": [
        "list",
        "get",
        "create",
        "update",
        "delete",
        "revert"
      ]
    },
    "accountId": {
      "type": "string"
    },
    "containerId": {
      "type": "string"
    },
    "workspaceId": {
      "type": "string"
    },
    "entityId": {
      "type": "string"
    },
    "payload": {
      "type": "object"
    }
  },
  "required": [
    "action",
    "accountId",
    "containerId",
    "workspaceId"
  ]
}
```

</details>

<a id="tool-gtm_variable-ec512642"></a>

## gtm_variable

Handler: Dispatches workspace variable list/get/create/update/delete/revert operations through the common GTM resource helper.

```text
Manage user-defined variables.
```

[Source](https://github.com/hedayetulislamhadi/genius-gtm-mcp/blob/ba2bc077fd804542decb9018cc88acd4face3b05/server.js#L103-L103) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "action": {
      "type": "string",
      "enum": [
        "list",
        "get",
        "create",
        "update",
        "delete",
        "revert"
      ]
    },
    "accountId": {
      "type": "string"
    },
    "containerId": {
      "type": "string"
    },
    "workspaceId": {
      "type": "string"
    },
    "entityId": {
      "type": "string"
    },
    "payload": {
      "type": "object"
    }
  },
  "required": [
    "action",
    "accountId",
    "containerId",
    "workspaceId"
  ]
}
```

</details>

<a id="tool-gtm_built_in_variable-779be1c3"></a>

## gtm_built_in_variable

Handler: Lists/enables built-in variables; disable passes a workspace path without /built\_in\_variables, and revert passes an array where the SDK expects one type.

```text
Manage built-in variables.
```

[Source](https://github.com/hedayetulislamhadi/genius-gtm-mcp/blob/ba2bc077fd804542decb9018cc88acd4face3b05/server.js#L104-L104) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "action": {
      "type": "string",
      "enum": [
        "list",
        "enable",
        "disable",
        "revert"
      ]
    },
    "accountId": {
      "type": "string"
    },
    "containerId": {
      "type": "string"
    },
    "workspaceId": {
      "type": "string"
    },
    "types": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  },
  "required": [
    "action",
    "accountId",
    "containerId",
    "workspaceId"
  ]
}
```

</details>

<a id="tool-gtm_folder-98e6da8b"></a>

## gtm_folder

Handler: Dispatches folder CRUD/revert/entity inspection and moves payload tagIds, triggerIds and variableIds into a folder.

```text
Manage folders.
```

[Source](https://github.com/hedayetulislamhadi/genius-gtm-mcp/blob/ba2bc077fd804542decb9018cc88acd4face3b05/server.js#L105-L105) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "action": {
      "type": "string",
      "enum": [
        "list",
        "get",
        "create",
        "update",
        "delete",
        "revert",
        "move_entities",
        "entities"
      ]
    },
    "accountId": {
      "type": "string"
    },
    "containerId": {
      "type": "string"
    },
    "workspaceId": {
      "type": "string"
    },
    "entityId": {
      "type": "string"
    },
    "payload": {
      "type": "object"
    }
  },
  "required": [
    "action",
    "accountId",
    "containerId",
    "workspaceId"
  ]
}
```

</details>

<a id="tool-gtm_client-dc17ee47"></a>

## gtm_client

Handler: Dispatches workspace client list/get/create/update/delete/revert operations through the common GTM resource helper.

```text
sGTM clients.
```

[Source](https://github.com/hedayetulislamhadi/genius-gtm-mcp/blob/ba2bc077fd804542decb9018cc88acd4face3b05/server.js#L106-L106) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "action": {
      "type": "string",
      "enum": [
        "list",
        "get",
        "create",
        "update",
        "delete",
        "revert"
      ]
    },
    "accountId": {
      "type": "string"
    },
    "containerId": {
      "type": "string"
    },
    "workspaceId": {
      "type": "string"
    },
    "entityId": {
      "type": "string"
    },
    "payload": {
      "type": "object"
    }
  },
  "required": [
    "action",
    "accountId",
    "containerId",
    "workspaceId"
  ]
}
```

</details>

<a id="tool-gtm_zone-78bf4872"></a>

## gtm_zone

Handler: Dispatches workspace zone list/get/create/update/delete/revert operations through the common GTM resource helper.

```text
Zones (sub-containers).
```

[Source](https://github.com/hedayetulislamhadi/genius-gtm-mcp/blob/ba2bc077fd804542decb9018cc88acd4face3b05/server.js#L107-L107) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "action": {
      "type": "string",
      "enum": [
        "list",
        "get",
        "create",
        "update",
        "delete",
        "revert"
      ]
    },
    "accountId": {
      "type": "string"
    },
    "containerId": {
      "type": "string"
    },
    "workspaceId": {
      "type": "string"
    },
    "entityId": {
      "type": "string"
    },
    "payload": {
      "type": "object"
    }
  },
  "required": [
    "action",
    "accountId",
    "containerId",
    "workspaceId"
  ]
}
```

</details>

<a id="tool-gtm_template-47833aba"></a>

## gtm_template

Handler: Dispatches workspace template list/get/create/update/delete/revert operations through the common GTM resource helper.

```text
Custom tag/variable templates with full .tpl support.
```

[Source](https://github.com/hedayetulislamhadi/genius-gtm-mcp/blob/ba2bc077fd804542decb9018cc88acd4face3b05/server.js#L108-L108) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "action": {
      "type": "string",
      "enum": [
        "list",
        "get",
        "create",
        "update",
        "delete",
        "revert"
      ]
    },
    "accountId": {
      "type": "string"
    },
    "containerId": {
      "type": "string"
    },
    "workspaceId": {
      "type": "string"
    },
    "entityId": {
      "type": "string"
    },
    "payload": {
      "type": "object"
    }
  },
  "required": [
    "action",
    "accountId",
    "containerId",
    "workspaceId"
  ]
}
```

</details>

<a id="tool-gtm_transformation-c270ba51"></a>

## gtm_transformation

Handler: Dispatches workspace transformation list/get/create/update/delete/revert operations through the common GTM resource helper.

```text
Server-container transformations.
```

[Source](https://github.com/hedayetulislamhadi/genius-gtm-mcp/blob/ba2bc077fd804542decb9018cc88acd4face3b05/server.js#L109-L109) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "action": {
      "type": "string",
      "enum": [
        "list",
        "get",
        "create",
        "update",
        "delete",
        "revert"
      ]
    },
    "accountId": {
      "type": "string"
    },
    "containerId": {
      "type": "string"
    },
    "workspaceId": {
      "type": "string"
    },
    "entityId": {
      "type": "string"
    },
    "payload": {
      "type": "object"
    }
  },
  "required": [
    "action",
    "accountId",
    "containerId",
    "workspaceId"
  ]
}
```

</details>

<a id="tool-gtm_gtag_config-f5a9eddd"></a>

## gtm_gtag_config

Handler: Dispatches Google tag configuration CRUD through the workspace helper; advertised revert calls a nonexistent SDK method.

```text
Google tag config.
```

[Source](https://github.com/hedayetulislamhadi/genius-gtm-mcp/blob/ba2bc077fd804542decb9018cc88acd4face3b05/server.js#L110-L110) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "action": {
      "type": "string",
      "enum": [
        "list",
        "get",
        "create",
        "update",
        "delete",
        "revert"
      ]
    },
    "accountId": {
      "type": "string"
    },
    "containerId": {
      "type": "string"
    },
    "workspaceId": {
      "type": "string"
    },
    "entityId": {
      "type": "string"
    },
    "payload": {
      "type": "object"
    }
  },
  "required": [
    "action",
    "accountId",
    "containerId",
    "workspaceId"
  ]
}
```

</details>

<a id="tool-gtm_version-759608b8"></a>

## gtm_version

Handler: Gets live/specific versions, publishes, undeletes, sets latest or creates from workspace; list calls nonexistent versions.list in googleapis 144.

```text
Container versions.
```

[Source](https://github.com/hedayetulislamhadi/genius-gtm-mcp/blob/ba2bc077fd804542decb9018cc88acd4face3b05/server.js#L111-L111) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "action": {
      "type": "string",
      "enum": [
        "list",
        "get",
        "live",
        "publish",
        "undelete",
        "set_latest",
        "create_from_workspace"
      ]
    },
    "accountId": {
      "type": "string"
    },
    "containerId": {
      "type": "string"
    },
    "workspaceId": {
      "type": "string"
    },
    "versionId": {
      "type": "string"
    },
    "payload": {
      "type": "object"
    }
  },
  "required": [
    "action",
    "accountId",
    "containerId"
  ]
}
```

</details>

<a id="tool-gtm_version_header-e1c252fe"></a>

## gtm_version_header

Handler: Lists version headers or retrieves the latest header.

```text
Version metadata.
```

[Source](https://github.com/hedayetulislamhadi/genius-gtm-mcp/blob/ba2bc077fd804542decb9018cc88acd4face3b05/server.js#L112-L112) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "action": {
      "type": "string",
      "enum": [
        "list",
        "latest"
      ]
    },
    "accountId": {
      "type": "string"
    },
    "containerId": {
      "type": "string"
    }
  },
  "required": [
    "action",
    "accountId",
    "containerId"
  ]
}
```

</details>

<a id="tool-gtm_environment-9aa46ece"></a>

## gtm_environment

Handler: Lists, gets, creates, updates, deletes or reauthorizes container environments.

```text
Environments.
```

[Source](https://github.com/hedayetulislamhadi/genius-gtm-mcp/blob/ba2bc077fd804542decb9018cc88acd4face3b05/server.js#L113-L113) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "action": {
      "type": "string",
      "enum": [
        "list",
        "get",
        "create",
        "update",
        "delete",
        "reauthorize"
      ]
    },
    "accountId": {
      "type": "string"
    },
    "containerId": {
      "type": "string"
    },
    "entityId": {
      "type": "string"
    },
    "payload": {
      "type": "object"
    }
  },
  "required": [
    "action",
    "accountId",
    "containerId"
  ]
}
```

</details>

<a id="tool-gtm_destination-0c1e6401"></a>

## gtm_destination

Handler: Lists/gets destinations or links a destination with allowUserPermissionFeatureUpdate always true; payload is ignored.

```text
GA4 destinations.
```

[Source](https://github.com/hedayetulislamhadi/genius-gtm-mcp/blob/ba2bc077fd804542decb9018cc88acd4face3b05/server.js#L114-L114) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "action": {
      "type": "string",
      "enum": [
        "list",
        "get",
        "link"
      ]
    },
    "accountId": {
      "type": "string"
    },
    "containerId": {
      "type": "string"
    },
    "destinationId": {
      "type": "string"
    },
    "payload": {
      "type": "object"
    }
  },
  "required": [
    "action",
    "accountId",
    "containerId"
  ]
}
```

</details>

<a id="tool-gtm_user_permission-cbd8ceca"></a>

## gtm_user_permission

Handler: Lists, gets, creates, updates or deletes account user permissions.

```text
User permissions.
```

[Source](https://github.com/hedayetulislamhadi/genius-gtm-mcp/blob/ba2bc077fd804542decb9018cc88acd4face3b05/server.js#L115-L115) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "action": {
      "type": "string",
      "enum": [
        "list",
        "get",
        "create",
        "update",
        "delete"
      ]
    },
    "accountId": {
      "type": "string"
    },
    "userPermissionId": {
      "type": "string"
    },
    "payload": {
      "type": "object"
    }
  },
  "required": [
    "action"
  ]
}
```

</details>

<a id="tool-gtm_raw-5c9b23ae"></a>

## gtm_raw

Handler: Traverses an arbitrary dot-separated method on the GTM v2 client and invokes it with unrestricted params.

```text
UNIVERSAL escape hatch.
```

[Source](https://github.com/hedayetulislamhadi/genius-gtm-mcp/blob/ba2bc077fd804542decb9018cc88acd4face3b05/server.js#L116-L119) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "method": {
      "type": "string"
    },
    "params": {
      "type": "object"
    }
  },
  "required": [
    "method"
  ]
}
```

</details>

<a id="tool-genius_datalayer_builder-dc50e01b"></a>

## genius_datalayer_builder

Handler: Generates a local dataLayer.push script with hardcoded demo ecommerce items or placeholder custom parameters, interpolating eventName directly.

```text
Generate advanced, server-side optimized e-commerce DataLayer snippet for GA4.
```

[Source](https://github.com/hedayetulislamhadi/genius-gtm-mcp/blob/ba2bc077fd804542decb9018cc88acd4face3b05/server.js#L120-L131) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "eventName": {
      "type": "string",
      "description": "Event name e.g., view_item, purchase"
    },
    "includeItems": {
      "type": "boolean",
      "description": "Include demo ecommerce items?"
    }
  },
  "required": [
    "eventName"
  ]
}
```

</details>

<a id="tool-genius_capi_validator-5eb36b9e"></a>

## genius_capi_validator

Handler: Generates local hardcoded sample Meta, TikTok or Snapchat event payloads with placeholder hashed identity data; performs no validation of browser data.

```text
Validate and generate Meta CAPI / TikTok Server payload from browser data.
```

[Source](https://github.com/hedayetulislamhadi/genius-gtm-mcp/blob/ba2bc077fd804542decb9018cc88acd4face3b05/server.js#L132-L145) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "enum": [
        "meta",
        "tiktok",
        "snapchat"
      ],
      "description": "Target platform"
    },
    "eventName": {
      "type": "string",
      "description": "Standard event name"
    }
  },
  "required": [
    "platform",
    "eventName"
  ]
}
```

</details>

<a id="tool-cloudflare_zone_lookup-a79903c6"></a>

## cloudflare_zone_lookup

Handler: Cloudflare: fetches zones by domain name and returns the first matching zone ID.

```text
Find Cloudflare Zone ID automatically using your domain name.
```

[Source](https://github.com/hedayetulislamhadi/genius-gtm-mcp/blob/ba2bc077fd804542decb9018cc88acd4face3b05/server.js#L146-L156) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "domainName": {
      "type": "string",
      "description": "Your website domain name (e.g., example.com)"
    }
  },
  "required": [
    "domainName"
  ]
}
```

</details>

<a id="tool-cloudflare_dns_manager-e54c8617"></a>

## cloudflare_dns_manager

Handler: Cloudflare: lists, creates with ttl 3600 and proxied default false, or deletes DNS records, returning raw API JSON.

```text
Add, list or delete DNS records (TXT, CNAME, A, etc.) in Cloudflare for domain verification or Stape.
```

[Source](https://github.com/hedayetulislamhadi/genius-gtm-mcp/blob/ba2bc077fd804542decb9018cc88acd4face3b05/server.js#L157-L173) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "action": {
      "type": "string",
      "enum": [
        "list",
        "create",
        "delete"
      ]
    },
    "zoneId": {
      "type": "string",
      "description": "Cloudflare Zone ID"
    },
    "recordId": {
      "type": "string",
      "description": "DNS Record ID (needed for delete)"
    },
    "type": {
      "type": "string",
      "enum": [
        "TXT",
        "CNAME",
        "A",
        "AAAA"
      ]
    },
    "name": {
      "type": "string",
      "description": "Record name e.g., _stape or metrics"
    },
    "content": {
      "type": "string",
      "description": "Record value/target"
    },
    "proxied": {
      "type": "boolean",
      "description": "True for Orange Cloud (Same Origin), False for Grey cloud (DNS only)"
    }
  },
  "required": [
    "action",
    "zoneId"
  ]
}
```

</details>

<a id="tool-cloudflare_worker_deploy-16e92166"></a>

## cloudflare_worker_deploy

Handler: Cloudflare: uploads scriptContent via PUT to a Workers script endpoint; does not configure routes or bindings.

```text
Deploy or update a Cloudflare Worker script for Same-Origin server-side tracking proxy.
```

[Source](https://github.com/hedayetulislamhadi/genius-gtm-mcp/blob/ba2bc077fd804542decb9018cc88acd4face3b05/server.js#L174-L187) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "workerName": {
      "type": "string",
      "description": "Name of the Cloudflare Worker"
    },
    "scriptContent": {
      "type": "string",
      "description": "The complete JavaScript code for the Worker"
    }
  },
  "required": [
    "workerName",
    "scriptContent"
  ]
}
```

</details>

<a id="tool-stape_container_manager-9f95abca"></a>

## stape_container_manager

Handler: Calls Stape v2 container list/get/create/delete endpoints; create defaults zone.type to apd despite schema description saying us, and logs the API key to stderr.

```text
Manage Stape.io sGTM server containers: list, get status, create new container, or delete.
```

[Source](https://github.com/hedayetulislamhadi/genius-gtm-mcp/blob/ba2bc077fd804542decb9018cc88acd4face3b05/server.js#L188-L202) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "action": {
      "type": "string",
      "enum": [
        "list",
        "get",
        "create",
        "delete"
      ],
      "description": "Action to perform on Stape"
    },
    "containerId": {
      "type": "string",
      "description": "Stape Container ID"
    },
    "name": {
      "type": "string",
      "description": "Container Name (for create)"
    },
    "gtmServerContainerConfig": {
      "type": "string",
      "description": "sGTM Container Config string from Google GTM"
    },
    "region": {
      "type": "string",
      "description": "Server region e.g., us, eu, sg (default: us)"
    }
  },
  "required": [
    "action"
  ]
}
```

</details>

<a id="tool-stape_domain_manager-2ca8fd22"></a>

## stape_domain_manager

Handler: Calls Stape v2 domain list/add/verify/delete endpoints and returns API responses as DNS instructions when adding.

```text
Add a custom domain to a Stape sGTM container and fetch the required DNS verification records.
```

[Source](https://github.com/hedayetulislamhadi/genius-gtm-mcp/blob/ba2bc077fd804542decb9018cc88acd4face3b05/server.js#L203-L218) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "action": {
      "type": "string",
      "enum": [
        "list",
        "add",
        "verify",
        "delete"
      ],
      "description": "Domain action"
    },
    "containerId": {
      "type": "string",
      "description": "Stape Container ID"
    },
    "domain": {
      "type": "string",
      "description": "Custom domain name e.g., metrics.yoursite.com"
    },
    "domainId": {
      "type": "string",
      "description": "Stape Domain ID (required for verify/delete)"
    }
  },
  "required": [
    "action",
    "containerId"
  ]
}
```

</details>

<a id="tool-meta_pixel_capi_manager-82f9b89d"></a>

## meta_pixel_capi_manager

Handler: Meta: lists ad accounts, scans accounts for pixels or posts CAPI events to Graph API v19.0 with timestamp and fallback event/user data; does not hash supplied identity data.

```text
Manage Meta Pixels, fetch ad accounts and pixels, or send server-side events via Conversions API (CAPI).
```

[Source](https://github.com/hedayetulislamhadi/genius-gtm-mcp/blob/ba2bc077fd804542decb9018cc88acd4face3b05/server.js#L219-L235) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "action": {
      "type": "string",
      "enum": [
        "list_ad_accounts",
        "list_pixels",
        "send_capi_event"
      ],
      "description": "Action to perform"
    },
    "adAccountId": {
      "type": "string",
      "description": "Optional Meta Ad Account ID (e.g. act_313006043640351)"
    },
    "pixel_id": {
      "type": "string",
      "description": "Facebook Pixel ID or Dataset ID. Falls back to your saved default Pixel ID from meta-auth if omitted."
    },
    "event_name": {
      "type": "string",
      "description": "Standard event name e.g., Purchase, Lead, ViewContent"
    },
    "event_source_url": {
      "type": "string",
      "description": "Website URL where the event occurred"
    },
    "test_event_code": {
      "type": "string",
      "description": "Optional Test Event Code from Meta Events Manager"
    },
    "user_data": {
      "type": "object",
      "description": "Hashed user data (em, ph, client_ip_address, etc.)"
    },
    "custom_data": {
      "type": "object",
      "description": "Custom parameters like currency, value"
    }
  },
  "required": [
    "action"
  ]
}
```

</details>
