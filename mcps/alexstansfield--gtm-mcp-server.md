# AlexStansfield/gtm-mcp-server

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/AlexStansfield/gtm-mcp-server) · [Machine-readable inventory](../data/mcps/alexstansfield--gtm-mcp-server.json)

**29 extracted tools.** Edits tags, triggers, variables and built-ins, synchronizes workspaces, and publishes checked versions.

Snapshot: 2026-10-13 · [30c904deda24](https://github.com/AlexStansfield/gtm-mcp-server/tree/30c904deda24877891451cc3c0e8598f415ce087) · Method: tools/list.

Exposure: All eight registration groups are enabled unconditionally by src/index.ts; all 29 tools are exposed by default. Service-account credentials are required only when handlers execute.

## Limits

- Catalog obtained offline from an isolated dependency installation and compiled source with a minimal subprocess environment; only initialize and tools/list were invoked. Google Tag Manager handler behavior was inspected statically and not exercised against the remote API.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`gtm_list_accounts`](#tool-gtm_list_accounts-c5d9b27f) | GTM | Calls Google Tag Manager v2 accounts.list. |
| [`gtm_list_containers`](#tool-gtm_list_containers-e45afd2b) | GTM | Calls Google Tag Manager v2 accounts.containers.list. |
| [`gtm_get_container`](#tool-gtm_get_container-fdc6e39c) | GTM | Calls Google Tag Manager v2 accounts.containers.get. |
| [`gtm_list_workspaces`](#tool-gtm_list_workspaces-248ce86f) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.list. |
| [`gtm_create_workspace`](#tool-gtm_create_workspace-6324597f) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.create. |
| [`gtm_get_workspace_status`](#tool-gtm_get_workspace_status-58373cea) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.getStatus. |
| [`gtm_sync_workspace`](#tool-gtm_sync_workspace-c11e7d2f) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.sync. |
| [`gtm_list_tags`](#tool-gtm_list_tags-b585bc12) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.tags.list. |
| [`gtm_get_tag`](#tool-gtm_get_tag-3d242291) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.tags.get. |
| [`gtm_create_tag`](#tool-gtm_create_tag-c682840c) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.tags.create. |
| [`gtm_update_tag`](#tool-gtm_update_tag-23807743) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.tags.get, then accounts.containers.workspaces.tags.update. Reads the existing entity, merges provided fields, and updates using its fingerprint. |
| [`gtm_delete_tag`](#tool-gtm_delete_tag-42a56cac) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.tags.delete. |
| [`gtm_list_triggers`](#tool-gtm_list_triggers-16b41a3c) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.triggers.list. |
| [`gtm_get_trigger`](#tool-gtm_get_trigger-669e5c62) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.triggers.get. |
| [`gtm_create_trigger`](#tool-gtm_create_trigger-99da4322) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.triggers.create. |
| [`gtm_update_trigger`](#tool-gtm_update_trigger-ce48de45) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.triggers.get, then accounts.containers.workspaces.triggers.update. Reads the existing entity, merges provided fields, and updates using its fingerprint. |
| [`gtm_delete_trigger`](#tool-gtm_delete_trigger-dac3085f) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.triggers.delete. |
| [`gtm_list_variables`](#tool-gtm_list_variables-81705a80) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.variables.list. |
| [`gtm_get_variable`](#tool-gtm_get_variable-e6ff3763) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.variables.get. |
| [`gtm_create_variable`](#tool-gtm_create_variable-5b853337) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.variables.create. |
| [`gtm_update_variable`](#tool-gtm_update_variable-898f92d4) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.variables.get, then accounts.containers.workspaces.variables.update. Reads the existing entity, merges provided fields, and updates using its fingerprint. |
| [`gtm_delete_variable`](#tool-gtm_delete_variable-9bd36787) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.variables.delete. |
| [`gtm_list_versions`](#tool-gtm_list_versions-f9371c4c) | GTM | Calls Google Tag Manager v2 accounts.containers.version\_headers.list. |
| [`gtm_get_live_version`](#tool-gtm_get_live_version-986da5ee) | GTM | Calls Google Tag Manager v2 accounts.containers.versions.live. |
| [`gtm_create_version`](#tool-gtm_create_version-50a805d7) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.create\_version. Checks merge conflicts, compiler errors, and missing version responses. |
| [`gtm_publish_version`](#tool-gtm_publish_version-0cc97535) | GTM | Calls Google Tag Manager v2 accounts.containers.versions.publish. Checks compiler errors and missing published version responses. |
| [`gtm_list_built_in_variables`](#tool-gtm_list_built_in_variables-af7ccc4e) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.built\_in\_variables.list. |
| [`gtm_enable_built_in_variables`](#tool-gtm_enable_built_in_variables-b234837a) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.built\_in\_variables.create. |
| [`gtm_disable_built_in_variables`](#tool-gtm_disable_built_in_variables-a7152877) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.built\_in\_variables.delete. |

<a id="tool-gtm_list_accounts-c5d9b27f"></a>

## gtm_list_accounts

Handler: Calls Google Tag Manager v2 accounts.list.

```text
List all Google Tag Manager accounts accessible by the service account, with their IDs, names, and paths.
```

[Source](https://github.com/AlexStansfield/gtm-mcp-server/blob/30c904deda24877891451cc3c0e8598f415ce087/src/tools/accounts.ts#L9-L43) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "page_token": {
      "type": "string",
      "description": "Continuation token from a previous call to fetch the next page of results"
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
  "openWorldHint": false
}
```

</details>

<a id="tool-gtm_list_containers-e45afd2b"></a>

## gtm_list_containers

Handler: Calls Google Tag Manager v2 accounts.containers.list.

```text
List all containers in a GTM account, with their IDs, names, public IDs, and domains.
```

[Source](https://github.com/AlexStansfield/gtm-mcp-server/blob/30c904deda24877891451cc3c0e8598f415ce087/src/tools/containers.ts#L9-L45) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM account ID"
    },
    "page_token": {
      "type": "string",
      "description": "Continuation token from a previous call to fetch the next page of results"
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
  "openWorldHint": false
}
```

</details>

<a id="tool-gtm_get_container-fdc6e39c"></a>

## gtm_get_container

Handler: Calls Google Tag Manager v2 accounts.containers.get.

```text
Get details of a specific container, including name, public ID, domains, and usage context.
```

[Source](https://github.com/AlexStansfield/gtm-mcp-server/blob/30c904deda24877891451cc3c0e8598f415ce087/src/tools/containers.ts#L45-L66) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM account ID"
    },
    "container_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM container ID"
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
  "openWorldHint": false
}
```

</details>

<a id="tool-gtm_list_workspaces-248ce86f"></a>

## gtm_list_workspaces

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.list.

```text
List all workspaces in a container, with their IDs, names, and descriptions.
```

[Source](https://github.com/AlexStansfield/gtm-mcp-server/blob/30c904deda24877891451cc3c0e8598f415ce087/src/tools/workspaces.ts#L9-L45) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM account ID"
    },
    "container_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM container ID"
    },
    "page_token": {
      "type": "string",
      "description": "Continuation token from a previous call to fetch the next page of results"
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
  "openWorldHint": false
}
```

</details>

<a id="tool-gtm_create_workspace-6324597f"></a>

## gtm_create_workspace

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.create.

```text
Create a new workspace in a container.
```

[Source](https://github.com/AlexStansfield/gtm-mcp-server/blob/30c904deda24877891451cc3c0e8598f415ce087/src/tools/workspaces.ts#L45-L75) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM account ID"
    },
    "container_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM container ID"
    },
    "name": {
      "type": "string",
      "description": "Name for the new workspace"
    },
    "description": {
      "type": "string",
      "description": "Optional description for the workspace"
    }
  },
  "required": [
    "account_id",
    "container_id",
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
  "openWorldHint": false
}
```

</details>

<a id="tool-gtm_get_workspace_status-58373cea"></a>

## gtm_get_workspace_status

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.getStatus.

```text
Show all pending changes in a workspace (entities added, updated, or deleted since the last container version) and any merge conflicts.
```

[Source](https://github.com/AlexStansfield/gtm-mcp-server/blob/30c904deda24877891451cc3c0e8598f415ce087/src/tools/workspaces.ts#L75-L112) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM account ID"
    },
    "container_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM workspace ID"
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
  "openWorldHint": false
}
```

</details>

<a id="tool-gtm_sync_workspace-c11e7d2f"></a>

## gtm_sync_workspace

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.sync.

```text
Sync a workspace to the latest container version, pulling in changes published since the workspace was created. Reports any merge conflicts.
```

[Source](https://github.com/AlexStansfield/gtm-mcp-server/blob/30c904deda24877891451cc3c0e8598f415ce087/src/tools/workspaces.ts#L112-L152) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM account ID"
    },
    "container_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM workspace ID"
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
  "idempotentHint": true,
  "openWorldHint": false
}
```

</details>

<a id="tool-gtm_list_tags-b585bc12"></a>

## gtm_list_tags

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.tags.list.

```text
List all tags in a workspace, with their IDs, names, types, and trigger associations.
```

[Source](https://github.com/AlexStansfield/gtm-mcp-server/blob/30c904deda24877891451cc3c0e8598f415ce087/src/tools/tags.ts#L12-L48) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM account ID"
    },
    "container_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM workspace ID"
    },
    "page_token": {
      "type": "string",
      "description": "Continuation token from a previous call to fetch the next page of results"
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
  "openWorldHint": false
}
```

</details>

<a id="tool-gtm_get_tag-3d242291"></a>

## gtm_get_tag

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.tags.get.

```text
Get full details of a specific tag, including all its parameters, triggers, and configuration.
```

[Source](https://github.com/AlexStansfield/gtm-mcp-server/blob/30c904deda24877891451cc3c0e8598f415ce087/src/tools/tags.ts#L48-L78) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM account ID"
    },
    "container_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM workspace ID"
    },
    "tag_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM tag ID"
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
  "openWorldHint": false
}
```

</details>

<a id="tool-gtm_create_tag-c682840c"></a>

## gtm_create_tag

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.tags.create.

```text
Create a new tag in a workspace.

Example parameters for GA4 event parameters (eventSettingsTable):
  {"key": "eventSettingsTable", "type": "list", "list": [{"type": "map", "map": [{"key": "parameter", "type": "template", "value": "method"}, {"key": "parameterValue", "type": "template", "value": "{{dlv - method}}"}]}]}
```

[Source](https://github.com/AlexStansfield/gtm-mcp-server/blob/30c904deda24877891451cc3c0e8598f415ce087/src/tools/tags.ts#L78-L120) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM account ID"
    },
    "container_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM workspace ID"
    },
    "name": {
      "type": "string",
      "description": "Name for the tag"
    },
    "type": {
      "type": "string",
      "description": "Tag type (e.g., 'html', 'img', 'ua', 'gaawe')"
    },
    "parameters": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "key": {
            "type": "string"
          },
          "type": {
            "type": "string",
            "enum": [
              "template",
              "list",
              "map",
              "boolean",
              "integer",
              "triggerReference",
              "tagReference"
            ]
          },
          "value": {
            "type": "string"
          },
          "list": {
            "type": "array",
            "items": {
              "$ref": "#/properties/parameters/items"
            }
          },
          "map": {
            "type": "array",
            "items": {
              "$ref": "#/properties/parameters/items"
            }
          }
        },
        "additionalProperties": false
      },
      "description": "Array of parameter objects. Supports nested structures with list/map for complex parameters like eventSettingsTable"
    },
    "firing_trigger_ids": {
      "type": "array",
      "items": {
        "type": "string",
        "pattern": "^\\d+$"
      },
      "description": "Array of trigger IDs that fire this tag"
    },
    "blocking_trigger_ids": {
      "type": "array",
      "items": {
        "$ref": "#/properties/firing_trigger_ids/items"
      },
      "description": "Array of trigger IDs that block this tag"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "name",
    "type"
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
  "openWorldHint": false
}
```

</details>

<a id="tool-gtm_update_tag-23807743"></a>

## gtm_update_tag

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.tags.get, then accounts.containers.workspaces.tags.update. Reads the existing entity, merges provided fields, and updates using its fingerprint.

```text
Update an existing tag in a workspace. Only the provided fields are changed; provided array fields (parameters, trigger IDs) replace the existing arrays wholesale.
```

[Source](https://github.com/AlexStansfield/gtm-mcp-server/blob/30c904deda24877891451cc3c0e8598f415ce087/src/tools/tags.ts#L120-L168) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM account ID"
    },
    "container_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM workspace ID"
    },
    "tag_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM tag ID to update"
    },
    "name": {
      "type": "string",
      "description": "New name for the tag"
    },
    "parameters": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "key": {
            "type": "string"
          },
          "type": {
            "type": "string",
            "enum": [
              "template",
              "list",
              "map",
              "boolean",
              "integer",
              "triggerReference",
              "tagReference"
            ]
          },
          "value": {
            "type": "string"
          },
          "list": {
            "type": "array",
            "items": {
              "$ref": "#/properties/parameters/items"
            }
          },
          "map": {
            "type": "array",
            "items": {
              "$ref": "#/properties/parameters/items"
            }
          }
        },
        "additionalProperties": false
      },
      "description": "New parameters array (replaces all existing parameters)"
    },
    "firing_trigger_ids": {
      "type": "array",
      "items": {
        "type": "string",
        "pattern": "^\\d+$"
      },
      "description": "New firing trigger IDs (replaces existing)"
    },
    "blocking_trigger_ids": {
      "type": "array",
      "items": {
        "$ref": "#/properties/firing_trigger_ids/items"
      },
      "description": "New blocking trigger IDs (replaces existing)"
    },
    "paused": {
      "type": "boolean",
      "description": "Whether to pause the tag"
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
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": true,
  "openWorldHint": false
}
```

</details>

<a id="tool-gtm_delete_tag-42a56cac"></a>

## gtm_delete_tag

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.tags.delete.

```text
Delete a tag from a workspace.
```

[Source](https://github.com/AlexStansfield/gtm-mcp-server/blob/30c904deda24877891451cc3c0e8598f415ce087/src/tools/tags.ts#L168-L192) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM account ID"
    },
    "container_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM workspace ID"
    },
    "tag_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM tag ID to delete"
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
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": true,
  "openWorldHint": false
}
```

</details>

<a id="tool-gtm_list_triggers-16b41a3c"></a>

## gtm_list_triggers

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.triggers.list.

```text
List all triggers in a workspace, with their IDs, names, types, and filter conditions.
```

[Source](https://github.com/AlexStansfield/gtm-mcp-server/blob/30c904deda24877891451cc3c0e8598f415ce087/src/tools/triggers.ts#L10-L46) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM account ID"
    },
    "container_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM workspace ID"
    },
    "page_token": {
      "type": "string",
      "description": "Continuation token from a previous call to fetch the next page of results"
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
  "openWorldHint": false
}
```

</details>

<a id="tool-gtm_get_trigger-669e5c62"></a>

## gtm_get_trigger

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.triggers.get.

```text
Get full details of a specific trigger, including its type, filters, and conditions.
```

[Source](https://github.com/AlexStansfield/gtm-mcp-server/blob/30c904deda24877891451cc3c0e8598f415ce087/src/tools/triggers.ts#L46-L71) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM account ID"
    },
    "container_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM workspace ID"
    },
    "trigger_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM trigger ID"
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
  "openWorldHint": false
}
```

</details>

<a id="tool-gtm_create_trigger-99da4322"></a>

## gtm_create_trigger

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.triggers.create.

```text
Create a new trigger in a workspace.

Common trigger types:
- PAGEVIEW: Fires on page view
- CLICK: Fires on click events
- LINK_CLICK: Fires on link clicks
- FORM_SUBMISSION: Fires on form submit
- CUSTOM_EVENT: Fires on custom dataLayer events
- DOM_READY: Fires when DOM is ready
- WINDOW_LOADED: Fires when window loads
- ELEMENT_VISIBILITY: Fires when element becomes visible
```

[Source](https://github.com/AlexStansfield/gtm-mcp-server/blob/30c904deda24877891451cc3c0e8598f415ce087/src/tools/triggers.ts#L71-L120) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM account ID"
    },
    "container_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM workspace ID"
    },
    "name": {
      "type": "string",
      "description": "Name for the trigger"
    },
    "type": {
      "type": "string",
      "description": "Trigger type (PAGEVIEW, CLICK, CUSTOM_EVENT, etc.)"
    },
    "custom_event_filter": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "equals",
              "contains",
              "startsWith",
              "endsWith",
              "matchRegex",
              "greater",
              "greaterOrEquals",
              "less",
              "lessOrEquals",
              "cssSelector",
              "urlMatches"
            ],
            "description": "Condition operator"
          },
          "parameter": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "key": {
                  "type": "string"
                },
                "type": {
                  "type": "string",
                  "enum": [
                    "template",
                    "list",
                    "map",
                    "boolean",
                    "integer",
                    "triggerReference",
                    "tagReference"
                  ]
                },
                "value": {
                  "type": "string"
                },
                "list": {
                  "type": "array",
                  "items": {
                    "$ref": "#/properties/custom_event_filter/items/properties/parameter/items"
                  }
                },
                "map": {
                  "type": "array",
                  "items": {
                    "$ref": "#/properties/custom_event_filter/items/properties/parameter/items"
                  }
                }
              },
              "additionalProperties": false
            },
            "description": "Condition operands, typically arg0 (a variable reference like '{{_event}}') and arg1 (the value to compare)"
          }
        },
        "required": [
          "type",
          "parameter"
        ],
        "additionalProperties": false
      },
      "description": "For CUSTOM_EVENT triggers, the event filter conditions"
    },
    "filter": {
      "type": "array",
      "items": {
        "$ref": "#/properties/custom_event_filter/items"
      },
      "description": "General filter conditions for the trigger"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "name",
    "type"
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
  "openWorldHint": false
}
```

</details>

<a id="tool-gtm_update_trigger-ce48de45"></a>

## gtm_update_trigger

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.triggers.get, then accounts.containers.workspaces.triggers.update. Reads the existing entity, merges provided fields, and updates using its fingerprint.

```text
Update an existing trigger in a workspace. Only the provided fields are changed; provided filter arrays replace the existing ones wholesale.
```

[Source](https://github.com/AlexStansfield/gtm-mcp-server/blob/30c904deda24877891451cc3c0e8598f415ce087/src/tools/triggers.ts#L120-L166) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM account ID"
    },
    "container_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM workspace ID"
    },
    "trigger_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM trigger ID to update"
    },
    "name": {
      "type": "string",
      "description": "New name for the trigger"
    },
    "custom_event_filter": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "equals",
              "contains",
              "startsWith",
              "endsWith",
              "matchRegex",
              "greater",
              "greaterOrEquals",
              "less",
              "lessOrEquals",
              "cssSelector",
              "urlMatches"
            ],
            "description": "Condition operator"
          },
          "parameter": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "key": {
                  "type": "string"
                },
                "type": {
                  "type": "string",
                  "enum": [
                    "template",
                    "list",
                    "map",
                    "boolean",
                    "integer",
                    "triggerReference",
                    "tagReference"
                  ]
                },
                "value": {
                  "type": "string"
                },
                "list": {
                  "type": "array",
                  "items": {
                    "$ref": "#/properties/custom_event_filter/items/properties/parameter/items"
                  }
                },
                "map": {
                  "type": "array",
                  "items": {
                    "$ref": "#/properties/custom_event_filter/items/properties/parameter/items"
                  }
                }
              },
              "additionalProperties": false
            },
            "description": "Condition operands, typically arg0 (a variable reference like '{{_event}}') and arg1 (the value to compare)"
          }
        },
        "required": [
          "type",
          "parameter"
        ],
        "additionalProperties": false
      },
      "description": "New custom event filter conditions (replaces existing)"
    },
    "filter": {
      "type": "array",
      "items": {
        "$ref": "#/properties/custom_event_filter/items"
      },
      "description": "New general filter conditions (replaces existing)"
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
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": true,
  "openWorldHint": false
}
```

</details>

<a id="tool-gtm_delete_trigger-dac3085f"></a>

## gtm_delete_trigger

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.triggers.delete.

```text
Delete a trigger from a workspace.
```

[Source](https://github.com/AlexStansfield/gtm-mcp-server/blob/30c904deda24877891451cc3c0e8598f415ce087/src/tools/triggers.ts#L166-L190) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM account ID"
    },
    "container_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM workspace ID"
    },
    "trigger_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM trigger ID to delete"
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
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": true,
  "openWorldHint": false
}
```

</details>

<a id="tool-gtm_list_variables-81705a80"></a>

## gtm_list_variables

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.variables.list.

```text
List all variables in a workspace, with their IDs, names, and types.
```

[Source](https://github.com/AlexStansfield/gtm-mcp-server/blob/30c904deda24877891451cc3c0e8598f415ce087/src/tools/variables.ts#L10-L46) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM account ID"
    },
    "container_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM workspace ID"
    },
    "page_token": {
      "type": "string",
      "description": "Continuation token from a previous call to fetch the next page of results"
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
  "openWorldHint": false
}
```

</details>

<a id="tool-gtm_get_variable-e6ff3763"></a>

## gtm_get_variable

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.variables.get.

```text
Get full details of a specific variable, including its type and parameters.
```

[Source](https://github.com/AlexStansfield/gtm-mcp-server/blob/30c904deda24877891451cc3c0e8598f415ce087/src/tools/variables.ts#L46-L76) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM account ID"
    },
    "container_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM workspace ID"
    },
    "variable_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM variable ID"
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
  "openWorldHint": false
}
```

</details>

<a id="tool-gtm_create_variable-5b853337"></a>

## gtm_create_variable

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.variables.create.

```text
Create a new variable in a workspace.

Common variable types:
- c: Constant
- v: Data Layer Variable
- k: First Party Cookie
- jsm: Custom JavaScript
- j: JavaScript Variable
- u: URL
- r: HTTP Referrer
- aev: Auto-Event Variable
```

[Source](https://github.com/AlexStansfield/gtm-mcp-server/blob/30c904deda24877891451cc3c0e8598f415ce087/src/tools/variables.ts#L76-L121) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM account ID"
    },
    "container_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM workspace ID"
    },
    "name": {
      "type": "string",
      "description": "Name for the variable"
    },
    "type": {
      "type": "string",
      "description": "Variable type (c, v, k, jsm, j, u, r, aev, etc.)"
    },
    "parameters": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "key": {
            "type": "string"
          },
          "type": {
            "type": "string",
            "enum": [
              "template",
              "list",
              "map",
              "boolean",
              "integer",
              "triggerReference",
              "tagReference"
            ]
          },
          "value": {
            "type": "string"
          },
          "list": {
            "type": "array",
            "items": {
              "$ref": "#/properties/parameters/items"
            }
          },
          "map": {
            "type": "array",
            "items": {
              "$ref": "#/properties/parameters/items"
            }
          }
        },
        "additionalProperties": false
      },
      "description": "Array of parameter objects. Supports nested structures with list/map"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "name",
    "type"
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
  "openWorldHint": false
}
```

</details>

<a id="tool-gtm_update_variable-898f92d4"></a>

## gtm_update_variable

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.variables.get, then accounts.containers.workspaces.variables.update. Reads the existing entity, merges provided fields, and updates using its fingerprint.

```text
Update an existing variable in a workspace. Only the provided fields are changed; a provided parameters array replaces the existing parameters wholesale.
```

[Source](https://github.com/AlexStansfield/gtm-mcp-server/blob/30c904deda24877891451cc3c0e8598f415ce087/src/tools/variables.ts#L121-L163) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM account ID"
    },
    "container_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM workspace ID"
    },
    "variable_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM variable ID to update"
    },
    "name": {
      "type": "string",
      "description": "New name for the variable"
    },
    "parameters": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "key": {
            "type": "string"
          },
          "type": {
            "type": "string",
            "enum": [
              "template",
              "list",
              "map",
              "boolean",
              "integer",
              "triggerReference",
              "tagReference"
            ]
          },
          "value": {
            "type": "string"
          },
          "list": {
            "type": "array",
            "items": {
              "$ref": "#/properties/parameters/items"
            }
          },
          "map": {
            "type": "array",
            "items": {
              "$ref": "#/properties/parameters/items"
            }
          }
        },
        "additionalProperties": false
      },
      "description": "New parameters array (replaces all existing parameters)"
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
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": true,
  "openWorldHint": false
}
```

</details>

<a id="tool-gtm_delete_variable-9bd36787"></a>

## gtm_delete_variable

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.variables.delete.

```text
Delete a variable from a workspace.
```

[Source](https://github.com/AlexStansfield/gtm-mcp-server/blob/30c904deda24877891451cc3c0e8598f415ce087/src/tools/variables.ts#L163-L187) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM account ID"
    },
    "container_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM workspace ID"
    },
    "variable_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM variable ID to delete"
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
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": true,
  "openWorldHint": false
}
```

</details>

<a id="tool-gtm_list_versions-f9371c4c"></a>

## gtm_list_versions

Handler: Calls Google Tag Manager v2 accounts.containers.version\_headers.list.

```text
List all container versions, with their IDs, names, and entity counts.
```

[Source](https://github.com/AlexStansfield/gtm-mcp-server/blob/30c904deda24877891451cc3c0e8598f415ce087/src/tools/versions.ts#L9-L45) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM account ID"
    },
    "container_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM container ID"
    },
    "page_token": {
      "type": "string",
      "description": "Continuation token from a previous call to fetch the next page of results"
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
  "openWorldHint": false
}
```

</details>

<a id="tool-gtm_get_live_version-986da5ee"></a>

## gtm_get_live_version

Handler: Calls Google Tag Manager v2 accounts.containers.versions.live.

```text
Get the container version that is currently live (published) for a container.
```

[Source](https://github.com/AlexStansfield/gtm-mcp-server/blob/30c904deda24877891451cc3c0e8598f415ce087/src/tools/versions.ts#L45-L70) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM account ID"
    },
    "container_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM container ID"
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
  "openWorldHint": false
}
```

</details>

<a id="tool-gtm_create_version-50a805d7"></a>

## gtm_create_version

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.create\_version. Checks merge conflicts, compiler errors, and missing version responses.

```text
Create a new container version from a workspace's changes. The workspace must contain changes and be free of merge conflicts.
```

[Source](https://github.com/AlexStansfield/gtm-mcp-server/blob/30c904deda24877891451cc3c0e8598f415ce087/src/tools/versions.ts#L70-L122) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM account ID"
    },
    "container_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM workspace ID"
    },
    "name": {
      "type": "string",
      "description": "Name for the version"
    },
    "notes": {
      "type": "string",
      "description": "Notes about this version"
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
  "openWorldHint": false
}
```

</details>

<a id="tool-gtm_publish_version-0cc97535"></a>

## gtm_publish_version

Handler: Calls Google Tag Manager v2 accounts.containers.versions.publish. Checks compiler errors and missing published version responses.

```text
Publish a container version, making it the LIVE version served to all visitors. This replaces the currently live container configuration.
```

[Source](https://github.com/AlexStansfield/gtm-mcp-server/blob/30c904deda24877891451cc3c0e8598f415ce087/src/tools/versions.ts#L122-L164) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM account ID"
    },
    "container_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM container ID"
    },
    "version_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The version ID to publish"
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
  "destructiveHint": true,
  "idempotentHint": true,
  "openWorldHint": false
}
```

</details>

<a id="tool-gtm_list_built_in_variables-af7ccc4e"></a>

## gtm_list_built_in_variables

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.built\_in\_variables.list.

```text
List the built-in variables currently enabled in a workspace (e.g. Page URL, Click Classes). Tags and triggers can only reference built-in variables that are enabled.
```

[Source](https://github.com/AlexStansfield/gtm-mcp-server/blob/30c904deda24877891451cc3c0e8598f415ce087/src/tools/builtInVariables.ts#L12-L48) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM account ID"
    },
    "container_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM workspace ID"
    },
    "page_token": {
      "type": "string",
      "description": "Continuation token from a previous call to fetch the next page of results"
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
  "openWorldHint": false
}
```

</details>

<a id="tool-gtm_enable_built_in_variables-b234837a"></a>

## gtm_enable_built_in_variables

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.built\_in\_variables.create.

```text
Enable one or more built-in variables in a workspace so tags and triggers can reference them (e.g. {{Page URL}}, {{Click Classes}}).
```

[Source](https://github.com/AlexStansfield/gtm-mcp-server/blob/30c904deda24877891451cc3c0e8598f415ce087/src/tools/builtInVariables.ts#L48-L85) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM account ID"
    },
    "container_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM workspace ID"
    },
    "types": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "minItems": 1,
      "description": "Built-in variable types in camelCase, e.g. pageUrl, pagePath, pageHostname, referrer, event, clickElement, clickClasses, clickId, clickTarget, clickUrl, clickText, formElement, formClasses, formId, formTarget, formUrl, formText, errorMessage, errorUrl, errorLine, containerId, containerVersion, randomNumber, htmlId, scrollDepthThreshold, videoTitle, videoUrl, videoPercent"
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
  "openWorldHint": false
}
```

</details>

<a id="tool-gtm_disable_built_in_variables-a7152877"></a>

## gtm_disable_built_in_variables

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.built\_in\_variables.delete.

```text
Disable one or more built-in variables in a workspace. Tags or triggers still referencing them will break.
```

[Source](https://github.com/AlexStansfield/gtm-mcp-server/blob/30c904deda24877891451cc3c0e8598f415ce087/src/tools/builtInVariables.ts#L85-L113) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM account ID"
    },
    "container_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "The GTM workspace ID"
    },
    "types": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "minItems": 1,
      "description": "Built-in variable types in camelCase, e.g. pageUrl, pagePath, pageHostname, referrer, event, clickElement, clickClasses, clickId, clickTarget, clickUrl, clickText, formElement, formClasses, formId, formTarget, formUrl, formText, errorMessage, errorUrl, errorLine, containerId, containerVersion, randomNumber, htmlId, scrollDepthThreshold, videoTitle, videoUrl, videoPercent"
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
  "openWorldHint": false
}
```

</details>
