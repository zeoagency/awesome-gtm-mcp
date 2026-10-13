# wonyoungseong/gtmAgent

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/wonyoungseong/gtmAgent) · [Machine-readable inventory](../data/mcps/wonyoungseong--gtmagent.json)

**23 extracted tools.** Manage server clients and transformations, export workspace resources, and prepare tracking workflow changes.

Snapshot: 2026-10-13 · [4ad276f877ab](https://github.com/wonyoungseong/gtmAgent/tree/4ad276f877abb28e0b5ff1dd279b26da2bbf1e35) · Method: source.

Exposure: All 23 schemas returned unconditionally by registerAllTools; container create/update/remove and version publish/remove are absent from advertised enums and explicitly rejected by handlers.

## Limits

- Offline evaluation of checked-in compiled schema modules only; no MCP protocol session or authenticated API operations executed.
- Destination unlink is in registered action enum but always throws unsupported-operation error.
- gtm_remove_session clears local state and caches rather than remotely revoking Google authorization.
- Workspace export only issues one list request per resource (no nextPageToken loop), omits gtag_config resources, and suppresses errors for optional clients/zones/transformations, so its COMPLETE promise is not guaranteed.
- Most configuration payloads are intentionally unrestricted objects in upstream schemas; no imagined Google API fields were added.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`gtm_context`](#tool-gtm_context-d83cfa6c) | Supporting | Reads, clears or sets session hierarchy context; setting verifies names through GTM account/container/workspace reads. |
| [`gtm_account`](#tool-gtm_account-da3f1407) | GTM | Lists, reads and updates GTM accounts via accounts API. |
| [`gtm_container`](#tool-gtm_container-edc9968d) | GTM | Lists, reads, combines, looks up, moves tag IDs and retrieves snippets; create/update/remove branches reject requests. |
| [`gtm_workspace`](#tool-gtm_workspace-ee5e8b97) | GTM | Performs workspace CRUD, version creation, status, synchronization, preview and conflict resolution through GTM workspace APIs. |
| [`gtm_tag`](#tool-gtm_tag-c3e06f2b) | GTM | Routes create, get, list, update, remove, revert actions to GTM tag resource API methods with local pagination where implemented. |
| [`gtm_trigger`](#tool-gtm_trigger-5c5777f3) | GTM | Routes create, get, list, update, remove, revert actions to GTM trigger resource API methods with local pagination where implemented. |
| [`gtm_variable`](#tool-gtm_variable-ec512642) | GTM | Routes create, get, list, update, remove, revert actions to GTM variable resource API methods with local pagination where implemented. |
| [`gtm_version`](#tool-gtm_version-759608b8) | GTM | Reads live/specific versions and updates, restores or sets latest versions; publish/remove explicitly reject requests. |
| [`gtm_version_header`](#tool-gtm_version_header-e1c252fe) | GTM | Routes list, latest actions to GTM version-header resource API methods with local pagination where implemented. |
| [`gtm_built_in_variable`](#tool-gtm_built_in_variable-779be1c3) | GTM | Routes create, list, remove, revert actions to GTM built-in-variable resource API methods with local pagination where implemented. |
| [`gtm_client`](#tool-gtm_client-dc17ee47) | GTM | Routes create, get, list, update, remove, revert actions to GTM client resource API methods with local pagination where implemented. |
| [`gtm_destination`](#tool-gtm_destination-0c1e6401) | GTM | Reads/lists/links GTM destinations; exposed unlink action always throws unsupported-operation error. |
| [`gtm_environment`](#tool-gtm_environment-9aa46ece) | GTM | Routes create, get, list, update, remove, reauthorize actions to GTM environment resource API methods with local pagination where implemented. |
| [`gtm_folder`](#tool-gtm_folder-98e6da8b) | GTM | Routes create, get, list, update, remove, revert, entities, moveEntitiesToFolder actions to GTM folder resource API methods with local pagination where implemented. |
| [`gtm_gtag_config`](#tool-gtm_gtag_config-f5a9eddd) | GTM | Routes create, get, list, update, remove actions to GTM gtag-config resource API methods with local pagination where implemented. |
| [`gtm_template`](#tool-gtm_template-47833aba) | GTM | Routes create, get, list, update, remove, revert actions to GTM template resource API methods with local pagination where implemented. |
| [`gtm_transformation`](#tool-gtm_transformation-c270ba51) | GTM | Routes create, get, list, update, remove, revert actions to GTM transformation resource API methods with local pagination where implemented. |
| [`gtm_user_permission`](#tool-gtm_user_permission-cbd8ceca) | GTM | Routes create, get, list, update, remove actions to GTM user-permission resource API methods with local pagination where implemented. |
| [`gtm_zone`](#tool-gtm_zone-78bf4872) | GTM | Routes create, get, list, update, remove, revert actions to GTM zone resource API methods with local pagination where implemented. |
| [`gtm_export_full`](#tool-gtm_export_full-69fac504) | GTM | Exports live/specific version or collected workspace resources inline or writes JSON to a supplied local output path; optional resource errors are swallowed. |
| [`gtm_remove_session`](#tool-gtm_remove_session-f9bd0cb8) | Supporting | Clears local session, cached auth client and all caches; does not revoke Google authorization remotely despite description. |
| [`gtm_cache`](#tool-gtm_cache-5d39197c) | Supporting | Clears per-workspace or all local caches, or reports cache statistics; dispatch still constructs an authenticated GTM client. |
| [`gtm_workflow`](#tool-gtm_workflow-5c58ce98) | GTM | Runs local multi-agent tag dependency analysis or replication using internal tag/trigger/variable/template handlers, and reports session workflow status. |

<a id="tool-gtm_context-d83cfa6c"></a>

## gtm_context

Handler: Reads, clears or sets session hierarchy context; setting verifies names through GTM account/container/workspace reads.

```text
GTM 작업 환경(컨텍스트)을 관리합니다. 한 번 설정하면 이후 모든 도구 호출에서 accountId/containerId/workspaceId를 생략할 수 있습니다.

**권장 워크플로우:**
1. gtm_context action='set' → Account/Container/Workspace 선택
2. 이후 gtm_tag, gtm_trigger 등 호출 시 ID 생략 가능

**액션:**
- 'get': 현재 설정된 컨텍스트 조회
- 'set': 컨텍스트 설정 (accountId 필수, containerId/workspaceId 선택)
- 'clear': 컨텍스트 초기화
```

[Source](https://github.com/wonyoungseong/gtmAgent/blob/4ad276f877abb28e0b5ff1dd279b26da2bbf1e35/mcp-server/src/tools/schemas/context.schema.ts#L9-L43) · [Handler](https://github.com/wonyoungseong/gtmAgent/blob/4ad276f877abb28e0b5ff1dd279b26da2bbf1e35/mcp-server/src/tools/handlers/context.handler.ts#L1-L100) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "action": {
      "type": "string",
      "enum": [
        "get",
        "set",
        "clear"
      ],
      "description": "get: 현재 컨텍스트 조회, set: 컨텍스트 설정, clear: 컨텍스트 초기화"
    },
    "accountId": {
      "type": "string",
      "description": "GTM Account ID. 'set' action에서 필수."
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID. 'set' action에서 선택."
    },
    "workspaceId": {
      "type": "string",
      "description": "GTM Workspace ID. 'set' action에서 선택. containerId가 있어야 설정 가능."
    }
  },
  "required": [
    "action"
  ]
}
```

</details>

<a id="tool-gtm_account-da3f1407"></a>

## gtm_account

Handler: Lists, reads and updates GTM accounts via accounts API.

```text
Performs all account-related operations: get, list, update. Use the 'action' parameter to select the operation. 'list' requires no additional params. 'get' and 'update' require accountId.
```

[Source](https://github.com/wonyoungseong/gtmAgent/blob/4ad276f877abb28e0b5ff1dd279b26da2bbf1e35/mcp-server/src/tools/schemas/account.schema.ts#L9-L30) · [Handler](https://github.com/wonyoungseong/gtmAgent/blob/4ad276f877abb28e0b5ff1dd279b26da2bbf1e35/mcp-server/src/tools/handlers/account.handler.ts#L1-L43) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "action": {
      "type": "string",
      "enum": [
        "get",
        "list",
        "update"
      ],
      "description": "The account operation to perform. 'list': returns all accessible accounts (no accountId needed). 'get': returns specific account (requires accountId). 'update': updates account (requires accountId and config)."
    },
    "accountId": {
      "type": "string",
      "description": "The unique ID of the GTM Account. Required for 'get' and 'update' actions. Not needed for 'list'."
    },
    "config": {
      "type": "object",
      "description": "Configuration for 'update' action. All fields correspond to the GTM Account resource."
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

Handler: Lists, reads, combines, looks up, moves tag IDs and retrieves snippets; create/update/remove branches reject requests.

```text
Performs container-related operations: get, list, combine, lookup, moveTagId, snippet. The 'list' action returns up to itemsPerPage items per page. NOTE: create/update/remove actions are disabled for safety.
```

[Source](https://github.com/wonyoungseong/gtmAgent/blob/4ad276f877abb28e0b5ff1dd279b26da2bbf1e35/mcp-server/src/tools/schemas/container.schema.ts#L9-L60) · [Handler](https://github.com/wonyoungseong/gtmAgent/blob/4ad276f877abb28e0b5ff1dd279b26da2bbf1e35/mcp-server/src/tools/handlers/container.handler.ts#L1-L96) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "action": {
      "type": "string",
      "enum": [
        "get",
        "list",
        "combine",
        "lookup",
        "moveTagId",
        "snippet"
      ],
      "description": "The container operation to perform. Must be one of: 'get', 'list', 'combine', 'lookup', 'moveTagId', 'snippet'. NOTE: create/update/remove are disabled for safety."
    },
    "accountId": {
      "type": "string",
      "description": "The unique ID of the GTM Account containing the container."
    },
    "containerId": {
      "type": "string",
      "description": "The unique ID of the GTM Container. Required for 'get', 'update', 'remove', 'combine', 'lookup', 'moveTagId', and 'snippet' actions."
    },
    "destinationId": {
      "type": "string",
      "description": "The destination ID linked to a GTM Container (e.g., AW-123456789). Required for the 'lookup' action."
    },
    "createOrUpdateConfig": {
      "type": "object",
      "description": "Configuration for 'create' and 'update' actions. All fields correspond to the GTM Container resource."
    },
    "fingerprint": {
      "type": "string",
      "description": "The fingerprint for optimistic concurrency control. Required for 'update' action."
    },
    "combineConfig": {
      "type": "object",
      "description": "Configuration for 'combine' action. Specifies which containers to combine."
    },
    "moveTagIdConfig": {
      "type": "object",
      "description": "Configuration for 'moveTagId' action. Specifies tag ID mapping for moving tags between containers."
    },
    "page": {
      "type": "number",
      "description": "Page number for pagination (starts from 1). Each page contains up to itemsPerPage items.",
      "default": 1
    },
    "itemsPerPage": {
      "type": "number",
      "description": "Number of items to return per page (1-50). Default: 50. Use lower values if experiencing response issues.",
      "default": 50
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

Handler: Performs workspace CRUD, version creation, status, synchronization, preview and conflict resolution through GTM workspace APIs.

```text
Performs various workspace operations including create, get, list, update, remove, createVersion, getStatus, sync, quickPreview, and resolveConflict actions. The 'list' action returns up to 50 items per page.
```

[Source](https://github.com/wonyoungseong/gtmAgent/blob/4ad276f877abb28e0b5ff1dd279b26da2bbf1e35/mcp-server/src/tools/schemas/workspace.schema.ts#L9-L58) · [Handler](https://github.com/wonyoungseong/gtmAgent/blob/4ad276f877abb28e0b5ff1dd279b26da2bbf1e35/mcp-server/src/tools/handlers/workspace.handler.ts#L1-L141) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "action": {
      "type": "string",
      "enum": [
        "create",
        "get",
        "list",
        "update",
        "remove",
        "createVersion",
        "getStatus",
        "sync",
        "quickPreview",
        "resolveConflict"
      ],
      "description": "The workspace operation to perform."
    },
    "accountId": {
      "type": "string",
      "description": "The unique ID of the GTM Account containing the workspace."
    },
    "containerId": {
      "type": "string",
      "description": "The unique ID of the GTM Container containing the workspace."
    },
    "workspaceId": {
      "type": "string",
      "description": "The unique ID of the GTM Workspace. Required for all actions except 'create' and 'list'."
    },
    "createOrUpdateConfig": {
      "type": "object",
      "description": "Configuration for 'create' and 'update' actions."
    },
    "fingerprint": {
      "type": "string",
      "description": "Fingerprint for optimistic concurrency control. Required for 'update' and 'resolveConflict' actions."
    },
    "entity": {
      "type": "object",
      "description": "The resolved entity for 'resolveConflict' action."
    },
    "changeStatus": {
      "type": "string",
      "description": "The status of the change for 'resolveConflict' action. Possible values: 'added', 'modified', 'deleted', 'unmodified'."
    },
    "page": {
      "type": "number",
      "default": 1
    },
    "itemsPerPage": {
      "type": "number",
      "default": 50
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

Handler: Routes create, get, list, update, remove, revert actions to GTM tag resource API methods with local pagination where implemented.

```text
Performs all GTM tag operations: create, get, list, update, remove, revert. The 'list' action returns up to 20 items per page.
```

[Source](https://github.com/wonyoungseong/gtmAgent/blob/4ad276f877abb28e0b5ff1dd279b26da2bbf1e35/mcp-server/src/tools/schemas/tag.schema.ts#L9-L62) · [Handler](https://github.com/wonyoungseong/gtmAgent/blob/4ad276f877abb28e0b5ff1dd279b26da2bbf1e35/mcp-server/src/tools/handlers/tag.handler.ts#L1-L142) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "action": {
      "type": "string",
      "enum": [
        "create",
        "get",
        "list",
        "update",
        "remove",
        "revert"
      ],
      "description": "The GTM tag operation to perform. Must be one of: 'create', 'get', 'list', 'update', 'remove', 'revert'."
    },
    "accountId": {
      "type": "string",
      "description": "The unique ID of the GTM Account containing the tag."
    },
    "containerId": {
      "type": "string",
      "description": "The unique ID of the GTM Container containing the tag."
    },
    "workspaceId": {
      "type": "string",
      "description": "The unique ID of the GTM Workspace containing the tag."
    },
    "tagId": {
      "type": "string",
      "description": "The unique ID of the GTM tag. Required for 'get', 'update', 'remove', and 'revert' actions."
    },
    "createOrUpdateConfig": {
      "type": "object",
      "description": "Configuration for 'create' and 'update' actions."
    },
    "fingerprint": {
      "type": "string",
      "description": "The fingerprint for optimistic concurrency control. Required for 'update' and 'revert' actions."
    },
    "page": {
      "type": "number",
      "default": 1,
      "description": "Page number for pagination (starts from 1). Each page contains up to itemsPerPage items."
    },
    "itemsPerPage": {
      "type": "number",
      "default": 20,
      "maximum": 20,
      "description": "Number of items to return per page (1-20). Default: 20."
    },
    "refresh": {
      "type": "boolean",
      "default": false,
      "description": "Force refresh cache by fetching latest data from API, ignoring cached data."
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

Handler: Routes create, get, list, update, remove, revert actions to GTM trigger resource API methods with local pagination where implemented.

```text
Performs all GTM trigger operations: create, get, list, update, remove, revert. The 'list' action returns up to 20 items per page.
```

[Source](https://github.com/wonyoungseong/gtmAgent/blob/4ad276f877abb28e0b5ff1dd279b26da2bbf1e35/mcp-server/src/tools/schemas/trigger.schema.ts#L9-L60) · [Handler](https://github.com/wonyoungseong/gtmAgent/blob/4ad276f877abb28e0b5ff1dd279b26da2bbf1e35/mcp-server/src/tools/handlers/trigger.handler.ts#L1-L140) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "action": {
      "type": "string",
      "enum": [
        "create",
        "get",
        "list",
        "update",
        "remove",
        "revert"
      ],
      "description": "The GTM trigger operation to perform."
    },
    "accountId": {
      "type": "string",
      "description": "The unique ID of the GTM Account containing the trigger."
    },
    "containerId": {
      "type": "string",
      "description": "The unique ID of the GTM Container containing the trigger."
    },
    "workspaceId": {
      "type": "string",
      "description": "The unique ID of the GTM Workspace containing the trigger."
    },
    "triggerId": {
      "type": "string",
      "description": "The unique ID of the GTM trigger. Required for 'get', 'update', 'remove', and 'revert' actions."
    },
    "createOrUpdateConfig": {
      "type": "object",
      "description": "Configuration for 'create' and 'update' actions."
    },
    "fingerprint": {
      "type": "string",
      "description": "The fingerprint for optimistic concurrency control."
    },
    "page": {
      "type": "number",
      "default": 1
    },
    "itemsPerPage": {
      "type": "number",
      "default": 20,
      "maximum": 20
    },
    "refresh": {
      "type": "boolean",
      "default": false,
      "description": "Force refresh cache by fetching latest data from API, ignoring cached data."
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

Handler: Routes create, get, list, update, remove, revert actions to GTM variable resource API methods with local pagination where implemented.

```text
Performs all GTM variable operations: create, get, list, update, remove, revert. The 'list' action returns up to 20 items per page.
```

[Source](https://github.com/wonyoungseong/gtmAgent/blob/4ad276f877abb28e0b5ff1dd279b26da2bbf1e35/mcp-server/src/tools/schemas/variable.schema.ts#L9-L60) · [Handler](https://github.com/wonyoungseong/gtmAgent/blob/4ad276f877abb28e0b5ff1dd279b26da2bbf1e35/mcp-server/src/tools/handlers/variable.handler.ts#L1-L140) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "action": {
      "type": "string",
      "enum": [
        "create",
        "get",
        "list",
        "update",
        "remove",
        "revert"
      ],
      "description": "The GTM variable operation to perform."
    },
    "accountId": {
      "type": "string",
      "description": "The unique ID of the GTM Account containing the variable."
    },
    "containerId": {
      "type": "string",
      "description": "The unique ID of the GTM Container containing the variable."
    },
    "workspaceId": {
      "type": "string",
      "description": "The unique ID of the GTM Workspace containing the variable."
    },
    "variableId": {
      "type": "string",
      "description": "The unique ID of the GTM variable. Required for 'get', 'update', 'remove', and 'revert' actions."
    },
    "createOrUpdateConfig": {
      "type": "object",
      "description": "Configuration for 'create' and 'update' actions."
    },
    "fingerprint": {
      "type": "string",
      "description": "The fingerprint for optimistic concurrency control."
    },
    "page": {
      "type": "number",
      "default": 1
    },
    "itemsPerPage": {
      "type": "number",
      "default": 20,
      "maximum": 20
    },
    "refresh": {
      "type": "boolean",
      "default": false,
      "description": "Force refresh cache by fetching latest data from API, ignoring cached data."
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

Handler: Reads live/specific versions and updates, restores or sets latest versions; publish/remove explicitly reject requests.

```text
Performs container version operations: get, live, setLatest, undelete, update. For 'get' and 'live' actions, use 'resourceType' to paginate specific resource arrays (up to 20 items per page) to avoid response truncation. NOTE: publish/remove actions are disabled for safety.
```

[Source](https://github.com/wonyoungseong/gtmAgent/blob/4ad276f877abb28e0b5ff1dd279b26da2bbf1e35/mcp-server/src/tools/schemas/other.schema.ts#L12-L288) · [Handler](https://github.com/wonyoungseong/gtmAgent/blob/4ad276f877abb28e0b5ff1dd279b26da2bbf1e35/mcp-server/src/tools/handlers/version.handler.ts#L1-L116) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "action": {
      "type": "string",
      "enum": [
        "get",
        "live",
        "setLatest",
        "undelete",
        "update"
      ],
      "description": "The container version operation to perform."
    },
    "accountId": {
      "type": "string",
      "description": "The unique ID of the GTM Account containing the container version."
    },
    "containerId": {
      "type": "string",
      "description": "The unique ID of the GTM Container containing the container version."
    },
    "containerVersionId": {
      "type": "string",
      "description": "The unique ID of the GTM container version. Required for 'get', 'setLatest', 'undelete', and 'update' actions."
    },
    "page": {
      "type": "number",
      "default": 1
    },
    "itemsPerPage": {
      "type": "number",
      "default": 20,
      "maximum": 20
    },
    "createOrUpdateConfig": {
      "type": "object",
      "description": "Configuration for 'update' actions."
    },
    "fingerprint": {
      "type": "string",
      "description": "The fingerprint for optimistic concurrency control. Required for 'update' actions."
    },
    "resourceType": {
      "type": "string",
      "enum": [
        "tag",
        "trigger",
        "variable",
        "folder",
        "builtInVariable",
        "zone",
        "customTemplate",
        "client",
        "gtagConfig",
        "transformation"
      ],
      "description": "Specific resource type to retrieve with pagination (only for 'get' and 'live' actions)."
    },
    "includeSummary": {
      "type": "boolean",
      "default": true,
      "description": "Include counts and metadata for all resource types."
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

Handler: Routes list, latest actions to GTM version-header resource API methods with local pagination where implemented.

```text
Performs all container version header operations: list, latest. The 'list' action returns up to 50 items per page.
```

[Source](https://github.com/wonyoungseong/gtmAgent/blob/4ad276f877abb28e0b5ff1dd279b26da2bbf1e35/mcp-server/src/tools/schemas/other.schema.ts#L188-L288) · [Handler](https://github.com/wonyoungseong/gtmAgent/blob/4ad276f877abb28e0b5ff1dd279b26da2bbf1e35/mcp-server/src/tools/handlers/version-header.handler.ts#L1-L52) · Schema: literal-source.

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
      ],
      "description": "The container operation to perform."
    },
    "accountId": {
      "type": "string",
      "description": "The unique ID of the GTM Account containing the container."
    },
    "containerId": {
      "type": "string",
      "description": "The unique ID of the GTM Container containing the container."
    },
    "page": {
      "type": "number",
      "default": 1
    },
    "itemsPerPage": {
      "type": "number",
      "default": 50,
      "maximum": 50
    },
    "includeDeleted": {
      "type": "boolean",
      "description": "Whether to also retrieve deleted (archived) versions. Required for 'list' action."
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

<a id="tool-gtm_built_in_variable-779be1c3"></a>

## gtm_built_in_variable

Handler: Routes create, list, remove, revert actions to GTM built-in-variable resource API methods with local pagination where implemented.

```text
Performs all built-in variable operations: create, list, remove, revert. The 'list' action returns up to itemsPerPage items per page.
```

[Source](https://github.com/wonyoungseong/gtmAgent/blob/4ad276f877abb28e0b5ff1dd279b26da2bbf1e35/mcp-server/src/tools/schemas/other.schema.ts#L44-L288) · [Handler](https://github.com/wonyoungseong/gtmAgent/blob/4ad276f877abb28e0b5ff1dd279b26da2bbf1e35/mcp-server/src/tools/handlers/built-in-variable.handler.ts#L1-L74) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "action": {
      "type": "string",
      "enum": [
        "create",
        "list",
        "remove",
        "revert"
      ],
      "description": "The built-in variable operation to perform."
    },
    "accountId": {
      "type": "string",
      "description": "The unique ID of the GTM Account containing the built-in variable."
    },
    "containerId": {
      "type": "string",
      "description": "The unique ID of the GTM Container containing the built-in variable."
    },
    "workspaceId": {
      "type": "string",
      "description": "The unique ID of the GTM Workspace containing the built-in variable."
    },
    "page": {
      "type": "number",
      "default": 1
    },
    "itemsPerPage": {
      "type": "number",
      "default": 50,
      "maximum": 50
    },
    "type": {
      "type": "string",
      "description": "The built-in variable type. Required for 'revert' and 'remove' actions."
    },
    "types": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Array of built-in variable types. Optional for 'list' action."
    },
    "pageToken": {
      "type": "string",
      "description": "A token for pagination. Optional for 'list' action."
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

Handler: Routes create, get, list, update, remove, revert actions to GTM client resource API methods with local pagination where implemented.

```text
Performs all client operations: create, get, list, update, remove, revert. The 'list' action returns up to itemsPerPage items per page.
```

[Source](https://github.com/wonyoungseong/gtmAgent/blob/4ad276f877abb28e0b5ff1dd279b26da2bbf1e35/mcp-server/src/tools/schemas/other.schema.ts#L69-L288) · [Handler](https://github.com/wonyoungseong/gtmAgent/blob/4ad276f877abb28e0b5ff1dd279b26da2bbf1e35/mcp-server/src/tools/handlers/client.handler.ts#L1-L95) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "action": {
      "type": "string",
      "enum": [
        "create",
        "get",
        "list",
        "update",
        "remove",
        "revert"
      ],
      "description": "The client operation to perform."
    },
    "accountId": {
      "type": "string",
      "description": "The unique ID of the GTM Account containing the client."
    },
    "containerId": {
      "type": "string",
      "description": "The unique ID of the GTM Container containing the client."
    },
    "workspaceId": {
      "type": "string",
      "description": "The unique ID of the GTM Workspace containing the client."
    },
    "clientId": {
      "type": "string",
      "description": "The unique ID of the GTM Client. Required for 'get', 'update', 'remove', and 'revert' actions."
    },
    "createOrUpdateConfig": {
      "type": "object",
      "description": "Configuration for 'create' and 'update' actions."
    },
    "fingerprint": {
      "type": "string",
      "description": "The fingerprint for optimistic concurrency control."
    },
    "page": {
      "type": "number",
      "default": 1
    },
    "itemsPerPage": {
      "type": "number",
      "default": 50,
      "maximum": 50
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

<a id="tool-gtm_destination-0c1e6401"></a>

## gtm_destination

Handler: Reads/lists/links GTM destinations; exposed unlink action always throws unsupported-operation error.

```text
Performs all destination operations: get, list, link, unlink.  The 'list' action returns up to 50 items per page.
```

[Source](https://github.com/wonyoungseong/gtmAgent/blob/4ad276f877abb28e0b5ff1dd279b26da2bbf1e35/mcp-server/src/tools/schemas/other.schema.ts#L80-L288) · [Handler](https://github.com/wonyoungseong/gtmAgent/blob/4ad276f877abb28e0b5ff1dd279b26da2bbf1e35/mcp-server/src/tools/handlers/destination.handler.ts#L1-L60) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "action": {
      "type": "string",
      "enum": [
        "get",
        "list",
        "link",
        "unlink"
      ],
      "description": "The destination operation to perform."
    },
    "accountId": {
      "type": "string",
      "description": "The unique ID of the GTM Account containing the destination."
    },
    "containerId": {
      "type": "string",
      "description": "The unique ID of the GTM Container containing the destination."
    },
    "destinationId": {
      "type": "string",
      "description": "The unique ID of the GTM Destination. Required for 'get', 'link', and 'unlink' actions."
    },
    "page": {
      "type": "number",
      "default": 1
    },
    "itemsPerPage": {
      "type": "number",
      "default": 50,
      "maximum": 50
    },
    "allowUserPermissionFeatureUpdate": {
      "type": "boolean",
      "description": "If true, allows user permission feature update during linking."
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

Handler: Routes create, get, list, update, remove, reauthorize actions to GTM environment resource API methods with local pagination where implemented.

```text
Performs all environment operations: create, get, list, update, remove, reauthorize.  The 'list' action returns up to 50 items per page.
```

[Source](https://github.com/wonyoungseong/gtmAgent/blob/4ad276f877abb28e0b5ff1dd279b26da2bbf1e35/mcp-server/src/tools/schemas/other.schema.ts#L98-L288) · [Handler](https://github.com/wonyoungseong/gtmAgent/blob/4ad276f877abb28e0b5ff1dd279b26da2bbf1e35/mcp-server/src/tools/handlers/environment.handler.ts#L1-L92) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "action": {
      "type": "string",
      "enum": [
        "create",
        "get",
        "list",
        "update",
        "remove",
        "reauthorize"
      ],
      "description": "The environment operation to perform."
    },
    "accountId": {
      "type": "string",
      "description": "The unique ID of the GTM Account containing the environment."
    },
    "containerId": {
      "type": "string",
      "description": "The unique ID of the GTM Container containing the environment."
    },
    "environmentId": {
      "type": "string",
      "description": "The unique ID of the GTM Environment. Required for 'get', 'update', 'remove', and 'reauthorize' actions."
    },
    "createOrUpdateConfig": {
      "type": "object",
      "description": "Configuration for 'create' and 'update' actions."
    },
    "fingerprint": {
      "type": "string",
      "description": "The fingerprint for optimistic concurrency control."
    },
    "page": {
      "type": "number",
      "default": 1
    },
    "itemsPerPage": {
      "type": "number",
      "default": 50,
      "maximum": 50
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

<a id="tool-gtm_folder-98e6da8b"></a>

## gtm_folder

Handler: Routes create, get, list, update, remove, revert, entities, moveEntitiesToFolder actions to GTM folder resource API methods with local pagination where implemented.

```text
Performs all folder operations: create, get, list, update, remove, revert, entities, moveEntitiesToFolder. The 'list' action returns up to 50 items per page.
```

[Source](https://github.com/wonyoungseong/gtmAgent/blob/4ad276f877abb28e0b5ff1dd279b26da2bbf1e35/mcp-server/src/tools/schemas/other.schema.ts#L109-L288) · [Handler](https://github.com/wonyoungseong/gtmAgent/blob/4ad276f877abb28e0b5ff1dd279b26da2bbf1e35/mcp-server/src/tools/handlers/folder.handler.ts#L1-L117) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "action": {
      "type": "string",
      "enum": [
        "create",
        "get",
        "list",
        "update",
        "remove",
        "revert",
        "entities",
        "moveEntitiesToFolder"
      ],
      "description": "The folder operation to perform."
    },
    "accountId": {
      "type": "string",
      "description": "The unique ID of the GTM Account containing the folder."
    },
    "containerId": {
      "type": "string",
      "description": "The unique ID of the GTM Container containing the folder."
    },
    "workspaceId": {
      "type": "string",
      "description": "The unique ID of the GTM Workspace containing the folder."
    },
    "folderId": {
      "type": "string",
      "description": "The unique ID of the GTM Folder."
    },
    "createOrUpdateConfig": {
      "type": "object",
      "description": "Configuration for 'create' and 'update' actions."
    },
    "fingerprint": {
      "type": "string",
      "description": "The fingerprint for optimistic concurrency control."
    },
    "page": {
      "type": "number",
      "default": 1
    },
    "itemsPerPage": {
      "type": "number",
      "default": 50,
      "maximum": 50
    },
    "tagId": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "The tags to be moved to the folder."
    },
    "triggerId": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "The triggers to be moved to the folder."
    },
    "variableId": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "The variables to be moved to the folder."
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

Handler: Routes create, get, list, update, remove actions to GTM gtag-config resource API methods with local pagination where implemented.

```text
Performs all Google tag config operations: create, get, list, update, remove. The 'list' action returns up to itemsPerPage items per page.
```

[Source](https://github.com/wonyoungseong/gtmAgent/blob/4ad276f877abb28e0b5ff1dd279b26da2bbf1e35/mcp-server/src/tools/schemas/other.schema.ts#L137-L288) · [Handler](https://github.com/wonyoungseong/gtmAgent/blob/4ad276f877abb28e0b5ff1dd279b26da2bbf1e35/mcp-server/src/tools/handlers/gtag-config.handler.ts#L1-L85) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "action": {
      "type": "string",
      "enum": [
        "create",
        "get",
        "list",
        "update",
        "remove"
      ],
      "description": "The Google tag config operation to perform."
    },
    "accountId": {
      "type": "string",
      "description": "The unique ID of the GTM Account containing the Google tag config."
    },
    "containerId": {
      "type": "string",
      "description": "The unique ID of the GTM Container containing the Google tag config."
    },
    "workspaceId": {
      "type": "string",
      "description": "The unique ID of the GTM Workspace containing the Google tag config."
    },
    "gtagConfigId": {
      "type": "string",
      "description": "The unique ID of the Google tag config. Required for 'get', 'update', and 'remove' actions."
    },
    "createOrUpdateConfig": {
      "type": "object",
      "description": "Configuration for 'create' and 'update' actions."
    },
    "fingerprint": {
      "type": "string",
      "description": "The fingerprint for optimistic concurrency control."
    },
    "page": {
      "type": "number",
      "default": 1
    },
    "itemsPerPage": {
      "type": "number",
      "default": 50,
      "maximum": 50
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

Handler: Routes create, get, list, update, remove, revert actions to GTM template resource API methods with local pagination where implemented.

```text
Performs all GTM custom template operations: create, get, list, update, remove, revert. The 'list' action returns up to itemsPerPage items per page.
```

[Source](https://github.com/wonyoungseong/gtmAgent/blob/4ad276f877abb28e0b5ff1dd279b26da2bbf1e35/mcp-server/src/tools/schemas/other.schema.ts#L148-L288) · [Handler](https://github.com/wonyoungseong/gtmAgent/blob/4ad276f877abb28e0b5ff1dd279b26da2bbf1e35/mcp-server/src/tools/handlers/template.handler.ts#L1-L95) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "action": {
      "type": "string",
      "enum": [
        "create",
        "get",
        "list",
        "update",
        "remove",
        "revert"
      ],
      "description": "The custom template operation to perform."
    },
    "accountId": {
      "type": "string",
      "description": "The unique ID of the GTM Account containing the custom template."
    },
    "containerId": {
      "type": "string",
      "description": "The unique ID of the GTM Container containing the custom template."
    },
    "workspaceId": {
      "type": "string",
      "description": "The unique ID of the GTM Workspace containing the custom template."
    },
    "templateId": {
      "type": "string",
      "description": "The unique ID of the GTM custom template. Required for 'get', 'update', 'remove', and 'revert' actions."
    },
    "createOrUpdateConfig": {
      "type": "object",
      "description": "Configuration for 'create' and 'update' actions."
    },
    "fingerprint": {
      "type": "string",
      "description": "The fingerprint for optimistic concurrency control."
    },
    "page": {
      "type": "number",
      "default": 1
    },
    "itemsPerPage": {
      "type": "number",
      "default": 20,
      "maximum": 20
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

Handler: Routes create, get, list, update, remove, revert actions to GTM transformation resource API methods with local pagination where implemented.

```text
Performs all GTM transformation operations: create, get, list, update, remove, revert. The 'list' action returns up to itemsPerPage items per page.
```

[Source](https://github.com/wonyoungseong/gtmAgent/blob/4ad276f877abb28e0b5ff1dd279b26da2bbf1e35/mcp-server/src/tools/schemas/other.schema.ts#L159-L288) · [Handler](https://github.com/wonyoungseong/gtmAgent/blob/4ad276f877abb28e0b5ff1dd279b26da2bbf1e35/mcp-server/src/tools/handlers/transformation.handler.ts#L1-L96) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "action": {
      "type": "string",
      "enum": [
        "create",
        "get",
        "list",
        "update",
        "remove",
        "revert"
      ],
      "description": "The transformation operation to perform."
    },
    "accountId": {
      "type": "string",
      "description": "The unique ID of the GTM Account containing the transformation."
    },
    "containerId": {
      "type": "string",
      "description": "The unique ID of the GTM Container containing the transformation."
    },
    "workspaceId": {
      "type": "string",
      "description": "The unique ID of the GTM Workspace containing the transformation."
    },
    "transformationId": {
      "type": "string",
      "description": "The unique ID of the GTM transformation. Required for 'get', 'update', 'remove', and 'revert' actions."
    },
    "createOrUpdateConfig": {
      "type": "object",
      "description": "Configuration for 'create' and 'update' actions."
    },
    "fingerprint": {
      "type": "string",
      "description": "The fingerprint for optimistic concurrency control."
    },
    "page": {
      "type": "number",
      "default": 1
    },
    "itemsPerPage": {
      "type": "number",
      "default": 50,
      "maximum": 50
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

<a id="tool-gtm_user_permission-cbd8ceca"></a>

## gtm_user_permission

Handler: Routes create, get, list, update, remove actions to GTM user-permission resource API methods with local pagination where implemented.

```text
Performs all user permission operations: create, get, list, update, remove. The 'list' action returns up to 50 items per page.
```

[Source](https://github.com/wonyoungseong/gtmAgent/blob/4ad276f877abb28e0b5ff1dd279b26da2bbf1e35/mcp-server/src/tools/schemas/other.schema.ts#L170-L288) · [Handler](https://github.com/wonyoungseong/gtmAgent/blob/4ad276f877abb28e0b5ff1dd279b26da2bbf1e35/mcp-server/src/tools/handlers/user-permission.handler.ts#L1-L81) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "action": {
      "type": "string",
      "enum": [
        "create",
        "get",
        "list",
        "update",
        "remove"
      ],
      "description": "The user permission operation to perform."
    },
    "accountId": {
      "type": "string",
      "description": "The unique ID of the GTM Account containing the user permission."
    },
    "userPermissionId": {
      "type": "string",
      "description": "The unique ID of the user permission. Required for 'get', 'update', and 'remove' actions."
    },
    "page": {
      "type": "number",
      "default": 1
    },
    "itemsPerPage": {
      "type": "number",
      "default": 50,
      "maximum": 50
    },
    "createOrUpdateConfig": {
      "type": "object",
      "description": "Configuration for 'create' and 'update' actions."
    }
  },
  "required": [
    "action",
    "accountId"
  ]
}
```

</details>

<a id="tool-gtm_zone-78bf4872"></a>

## gtm_zone

Handler: Routes create, get, list, update, remove, revert actions to GTM zone resource API methods with local pagination where implemented.

```text
Performs various zone operations including create, get, list, update, remove, and revert actions. The 'list' action returns up to 20 items per page.
```

[Source](https://github.com/wonyoungseong/gtmAgent/blob/4ad276f877abb28e0b5ff1dd279b26da2bbf1e35/mcp-server/src/tools/schemas/other.schema.ts#L204-L288) · [Handler](https://github.com/wonyoungseong/gtmAgent/blob/4ad276f877abb28e0b5ff1dd279b26da2bbf1e35/mcp-server/src/tools/handlers/zone.handler.ts#L1-L95) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "action": {
      "type": "string",
      "enum": [
        "create",
        "get",
        "list",
        "update",
        "remove",
        "revert"
      ],
      "description": "The zone operation to perform."
    },
    "accountId": {
      "type": "string",
      "description": "The unique ID of the GTM Account containing the zone."
    },
    "containerId": {
      "type": "string",
      "description": "The unique ID of the GTM Container containing the zone."
    },
    "workspaceId": {
      "type": "string",
      "description": "The unique ID of the GTM Workspace containing the zone."
    },
    "zoneId": {
      "type": "string",
      "description": "The unique ID of the GTM Zone. Required for all actions except 'create' and 'list'."
    },
    "createOrUpdateConfig": {
      "type": "object",
      "description": "Configuration for 'create' and 'update' actions."
    },
    "fingerprint": {
      "type": "string",
      "description": "The fingerprint for optimistic concurrency control."
    },
    "page": {
      "type": "number",
      "default": 1
    },
    "itemsPerPage": {
      "type": "number",
      "default": 20,
      "maximum": 20
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

<a id="tool-gtm_export_full-69fac504"></a>

## gtm_export_full

Handler: Exports live/specific version or collected workspace resources inline or writes JSON to a supplied local output path; optional resource errors are swallowed.

```text
Export COMPLETE GTM container data as JSON. Supports live version, specific version, or workspace (draft). When outputPath is provided, saves directly to file and returns only summary (recommended for large containers). Without outputPath, returns full data inline.
```

[Source](https://github.com/wonyoungseong/gtmAgent/blob/4ad276f877abb28e0b5ff1dd279b26da2bbf1e35/mcp-server/src/tools/schemas/other.schema.ts#L217-L288) · [Handler](https://github.com/wonyoungseong/gtmAgent/blob/4ad276f877abb28e0b5ff1dd279b26da2bbf1e35/mcp-server/src/tools/handlers/export.handler.ts#L1-L140) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The unique ID of the GTM Account."
    },
    "containerId": {
      "type": "string",
      "description": "The unique ID of the GTM Container."
    },
    "versionType": {
      "type": "string",
      "enum": [
        "live",
        "specific",
        "workspace"
      ],
      "description": "Export live version, a specific version, or workspace (draft without publishing)."
    },
    "containerVersionId": {
      "type": "string",
      "description": "The version ID (required if versionType is 'specific')."
    },
    "workspaceId": {
      "type": "string",
      "description": "The workspace ID (required if versionType is 'workspace')."
    },
    "outputPath": {
      "type": "string",
      "description": "Absolute file path to save the JSON export. When provided, saves directly to file and returns only summary (avoids large response issues)."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "versionType"
  ]
}
```

</details>

<a id="tool-gtm_remove_session-f9bd0cb8"></a>

## gtm_remove_session

Handler: Clears local session, cached auth client and all caches; does not revoke Google authorization remotely despite description.

```text
Clear client data from MCP server and revoke google auth access
```

[Source](https://github.com/wonyoungseong/gtmAgent/blob/4ad276f877abb28e0b5ff1dd279b26da2bbf1e35/mcp-server/src/tools/schemas/other.schema.ts#L253-L288) · [Handler](https://github.com/wonyoungseong/gtmAgent/blob/4ad276f877abb28e0b5ff1dd279b26da2bbf1e35/mcp-server/src/tools/handlers/index.ts#L1-L135) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {},
  "required": []
}
```

</details>

<a id="tool-gtm_cache-5d39197c"></a>

## gtm_cache

Handler: Clears per-workspace or all local caches, or reports cache statistics; dispatch still constructs an authenticated GTM client.

```text
Manage GTM MCP cache. Use 'clear' to force refresh data on next request. Use 'stats' to view cache status.
```

[Source](https://github.com/wonyoungseong/gtmAgent/blob/4ad276f877abb28e0b5ff1dd279b26da2bbf1e35/mcp-server/src/tools/schemas/other.schema.ts#L263-L288) · [Handler](https://github.com/wonyoungseong/gtmAgent/blob/4ad276f877abb28e0b5ff1dd279b26da2bbf1e35/mcp-server/src/tools/handlers/cache.handler.ts#L1-L58) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "action": {
      "type": "string",
      "enum": [
        "clear",
        "clearAll",
        "stats"
      ],
      "description": "'clear': Clear cache for specific workspace (requires accountId, containerId, workspaceId). 'clearAll': Clear all caches. 'stats': Show cache statistics."
    },
    "accountId": {
      "type": "string",
      "description": "Account ID (required for 'clear' action)"
    },
    "containerId": {
      "type": "string",
      "description": "Container ID (required for 'clear' action)"
    },
    "workspaceId": {
      "type": "string",
      "description": "Workspace ID (required for 'clear' action)"
    }
  },
  "required": [
    "action"
  ]
}
```

</details>

<a id="tool-gtm_workflow-5c58ce98"></a>

## gtm_workflow

Handler: Runs local multi-agent tag dependency analysis or replication using internal tag/trigger/variable/template handlers, and reports session workflow status.

```text
Executes GTM Agent System workflows for tag replication between workspaces.

Actions:
- analyze: Analyze source workspace tags and build dependency graph
- replicate: Replicate tags from source to target workspace (full workflow)
- status: Get current workflow status

This tool uses the multi-agent system (AnalyzerAgent, NamingAgent, PlannerAgent, BuilderAgent, ValidatorAgent) to automatically:
1. Analyze dependencies between tags, triggers, variables
2. Apply naming patterns from target workspace
3. Plan creation order respecting dependencies
4. Create entities in correct order
5. Validate created entities
```

[Source](https://github.com/wonyoungseong/gtmAgent/blob/4ad276f877abb28e0b5ff1dd279b26da2bbf1e35/mcp-server/src/tools/schemas/workflow.schema.ts#L9-L95) · [Handler](https://github.com/wonyoungseong/gtmAgent/blob/4ad276f877abb28e0b5ff1dd279b26da2bbf1e35/mcp-server/src/tools/handlers/workflow.handler.ts#L1-L375) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "action": {
      "type": "string",
      "description": "The workflow action to perform",
      "enum": [
        "analyze",
        "replicate",
        "status"
      ]
    },
    "sessionId": {
      "type": "string",
      "description": "Unique session ID for tracking workflow state. Required for all actions."
    },
    "sourceAccountId": {
      "type": "string",
      "description": "Source GTM Account ID. Required for 'analyze' and 'replicate' actions."
    },
    "sourceContainerId": {
      "type": "string",
      "description": "Source GTM Container ID. Required for 'analyze' and 'replicate' actions."
    },
    "sourceWorkspaceId": {
      "type": "string",
      "description": "Source GTM Workspace ID. Required for 'analyze' and 'replicate' actions."
    },
    "targetAccountId": {
      "type": "string",
      "description": "Target GTM Account ID. Required for 'replicate' action."
    },
    "targetContainerId": {
      "type": "string",
      "description": "Target GTM Container ID. Required for 'replicate' action."
    },
    "targetWorkspaceId": {
      "type": "string",
      "description": "Target GTM Workspace ID. Required for 'replicate' action."
    },
    "tagIds": {
      "type": "string",
      "description": "Comma-separated list of tag IDs to analyze/replicate (e.g., '123,456,789'). Required for 'analyze' and 'replicate' actions."
    },
    "includeAllDependencies": {
      "type": "boolean",
      "description": "Whether to include all dependencies (triggers, variables, templates). Default: true",
      "default": true
    },
    "skipNaming": {
      "type": "boolean",
      "description": "Skip naming pattern analysis. Default: false",
      "default": false
    },
    "skipValidation": {
      "type": "boolean",
      "description": "Skip validation after creation. Default: false",
      "default": false
    },
    "dryRun": {
      "type": "boolean",
      "description": "If true, only plan without creating. Default: false",
      "default": false
    },
    "namePrefix": {
      "type": "string",
      "description": "Prefix to add to entity names (e.g., '[COPY] ')"
    },
    "nameSuffix": {
      "type": "string",
      "description": "Suffix to add to entity names (e.g., ' v2')"
    }
  },
  "required": [
    "action",
    "sessionId"
  ]
}
```

</details>
