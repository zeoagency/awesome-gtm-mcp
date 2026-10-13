# VasthavM/google-tag-manager-mcp

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/VasthavM/google-tag-manager-mcp) · [Machine-readable inventory](../data/mcps/vasthavm--google-tag-manager-mcp.json)

**50 extracted tools.** Create and update server clients and transformations, import gallery templates, and manage tracking resources.

Snapshot: 2026-10-13 · [c6b7e649be85](https://github.com/VasthavM/google-tag-manager-mcp/tree/c6b7e649be853cafbed86917b8a6daea3002b677) · Method: tools/list.

Exposure: All 50 tools register unconditionally; production main authenticates before registering. Offline extraction bypassed only startup OAuth/client construction and never called tool handlers.

## Limits

- No authenticated GTM operations were executed; implementation assessment is source based.
- auth_status always returns authenticated=true and does not validate authentication.
- Input fields holding JSON remain string schemas exactly as registered; their payload structures are described by source text, not enforced by MCP input schemas.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`auth_status`](#tool-auth_status-50348a10) | Supporting | Returns authenticated=true and a fixed readiness message without checking credentials or contacting Google. |
| [`create_client`](#tool-create_client-6142e83d) | GTM | Calls GTM client CreateClient and returns the mapped result or propagated API error. |
| [`create_container`](#tool-create_container-352b1505) | GTM | Validates usage contexts, creates a GTM v2 container, and returns its identifiers, path, and UI URL. |
| [`create_tag`](#tool-create_tag-e71dcc44) | GTM | Calls GTM client CreateTag and returns the mapped result or propagated API error. |
| [`create_template`](#tool-create_template-ccfe420c) | GTM | Uses Google Tag Manager v2 Accounts.Containers.Workspaces.Templates.Create(parent, template) to perform the requested operation and maps the response. |
| [`create_transformation`](#tool-create_transformation-9ff603f0) | GTM | Calls GTM client CreateTransformation and returns the mapped result or propagated API error. |
| [`create_trigger`](#tool-create_trigger-71660c93) | GTM | Calls GTM client CreateTrigger and returns the mapped result or propagated API error. |
| [`create_variable`](#tool-create_variable-2f5e4ddb) | GTM | Calls GTM client CreateVariable and returns the mapped result or propagated API error. |
| [`create_version`](#tool-create_version-fc39e936) | GTM | Checks workspace status, refuses unchanged or conflicting workspaces, then calls GTM v2 CreateVersion. |
| [`create_workspace`](#tool-create_workspace-a1af8425) | GTM | Creates a named GTM v2 workspace under the resolved container and returns its identifiers and path. |
| [`delete_client`](#tool-delete_client-2acb4417) | GTM | Calls GTM client DeleteClient and returns the mapped result or propagated API error. |
| [`delete_container`](#tool-delete_container-a8bba20f) | GTM | Requires confirm=true, resolves the container path, and calls GTM v2 Containers.Delete. |
| [`delete_tag`](#tool-delete_tag-1345d160) | GTM | Calls GTM client DeleteTag and returns the mapped result or propagated API error. |
| [`delete_template`](#tool-delete_template-02c8a6cb) | GTM | Uses Google Tag Manager v2 Accounts.Containers.Workspaces.Templates.Delete(path) to perform the requested operation and maps the response. |
| [`delete_transformation`](#tool-delete_transformation-e23da7c3) | GTM | Calls GTM client DeleteTransformation and returns the mapped result or propagated API error. |
| [`delete_trigger`](#tool-delete_trigger-ec67de91) | GTM | Calls GTM client DeleteTrigger and returns the mapped result or propagated API error. |
| [`delete_variable`](#tool-delete_variable-3ead6fdb) | GTM | Calls GTM client DeleteVariable and returns the mapped result or propagated API error. |
| [`disable_built_in_variables`](#tool-disable_built_in_variables-a7be9454) | GTM | Calls GTM client DisableBuiltInVariables and returns the mapped result or propagated API error. |
| [`enable_built_in_variables`](#tool-enable_built_in_variables-d3221371) | GTM | Calls GTM client EnableBuiltInVariables and returns the mapped result or propagated API error. |
| [`get_client`](#tool-get_client-2d47e9a6) | GTM | Calls GTM client GetClient and returns the mapped result or propagated API error. |
| [`get_folder_entities`](#tool-get_folder_entities-af7babd3) | GTM | Calls GTM client GetFolderEntities and returns the mapped result or propagated API error. |
| [`get_tag`](#tool-get_tag-749bab4b) | GTM | Calls GTM client GetTag and returns the mapped result or propagated API error. |
| [`get_tag_templates`](#tool-get_tag_templates-7475b430) | Supporting | Returns locally defined example parameter structures and usage instructions. |
| [`get_template`](#tool-get_template-99eb59af) | GTM | Uses Google Tag Manager v2 Accounts.Containers.Workspaces.Templates.Get(path) to perform the requested operation and maps the response. |
| [`get_transformation`](#tool-get_transformation-13553d72) | GTM | Calls GTM client GetTransformation and returns the mapped result or propagated API error. |
| [`get_trigger`](#tool-get_trigger-e2f13ee6) | GTM | Calls GTM client GetTrigger and returns the mapped result or propagated API error. |
| [`get_trigger_templates`](#tool-get_trigger_templates-c30240fc) | Supporting | Returns locally defined example parameter structures and usage instructions. |
| [`get_variable`](#tool-get_variable-ba0cd778) | GTM | Calls GTM client GetVariable and returns the mapped result or propagated API error. |
| [`get_workspace_status`](#tool-get_workspace_status-23f21bb9) | GTM | Calls GTM client GetWorkspaceStatus and returns the mapped result or propagated API error. |
| [`import_gallery_template`](#tool-import_gallery_template-2fc7e72c) | GTM | Imports a community gallery template through GTM v2 with AcknowledgePermissions(true), optionally pins the SHA, and returns its custom template type. |
| [`list_accounts`](#tool-list_accounts-1090ba6a) | GTM | Calls GTM client ListAccounts and returns the mapped result or propagated API error. |
| [`list_built_in_variables`](#tool-list_built_in_variables-598c2ffb) | GTM | Calls GTM client ListBuiltInVariables and returns the mapped result or propagated API error. |
| [`list_clients`](#tool-list_clients-916df1aa) | GTM | Calls GTM client ListClients and returns the mapped result or propagated API error. |
| [`list_containers`](#tool-list_containers-a53dbc4d) | GTM | Calls GTM client ListContainers and returns the mapped result or propagated API error. |
| [`list_folders`](#tool-list_folders-786055b5) | GTM | Calls GTM client ListFolders and returns the mapped result or propagated API error. |
| [`list_tags`](#tool-list_tags-86fc0f9c) | GTM | Calls GTM client ListTags and returns the mapped result or propagated API error. |
| [`list_templates`](#tool-list_templates-f9ffad71) | GTM | Uses Google Tag Manager v2 Accounts.Containers.Workspaces.Templates.List(parent) to perform the requested operation and maps the response. |
| [`list_transformations`](#tool-list_transformations-f386365b) | GTM | Calls GTM client ListTransformations and returns the mapped result or propagated API error. |
| [`list_triggers`](#tool-list_triggers-4ca44d74) | GTM | Calls GTM client ListTriggers and returns the mapped result or propagated API error. |
| [`list_variables`](#tool-list_variables-1adaa2a1) | GTM | Calls GTM client ListVariables and returns the mapped result or propagated API error. |
| [`list_versions`](#tool-list_versions-3eb8d6c0) | GTM | Lists GTM v2 container version headers, optionally including deleted versions, and returns simplified version records. |
| [`list_workspaces`](#tool-list_workspaces-af844119) | GTM | Calls GTM client ListWorkspaces and returns the mapped result or propagated API error. |
| [`ping`](#tool-ping-758d61f2) | Supporting | Returns pong, optionally echoes the input message, and adds the current UTC timestamp. |
| [`publish_version`](#tool-publish_version-0628e4c5) | GTM | Requires confirm=true, then calls GTM v2 Versions.Publish to make the requested container version live. |
| [`update_client`](#tool-update_client-b54d9c9e) | GTM | Calls GTM client UpdateClient and returns the mapped result or propagated API error. |
| [`update_tag`](#tool-update_tag-ff9e7962) | GTM | Calls GTM client UpdateTag and returns the mapped result or propagated API error. |
| [`update_template`](#tool-update_template-dbe66b4e) | GTM | Reads the existing custom template, preserves unchanged name/data and its fingerprint, then updates through GTM v2. |
| [`update_transformation`](#tool-update_transformation-67f8c3a8) | GTM | Calls GTM client UpdateTransformation and returns the mapped result or propagated API error. |
| [`update_trigger`](#tool-update_trigger-60ddeb77) | GTM | Calls GTM client UpdateTrigger and returns the mapped result or propagated API error. |
| [`update_variable`](#tool-update_variable-63c48ad7) | GTM | Calls GTM client UpdateVariable and returns the mapped result or propagated API error. |

<a id="tool-auth_status-50348a10"></a>

## auth_status

Handler: Returns authenticated=true and a fixed readiness message without checking credentials or contacting Google.

```text
Check authentication status with Google Tag Manager
```

[Source](https://github.com/VasthavM/google-tag-manager-mcp/blob/c6b7e649be853cafbed86917b8a6daea3002b677/main.go#L67-L103) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "additionalProperties": false
}
```

</details>

<a id="tool-create_client-6142e83d"></a>

## create_client

Handler: Calls GTM client CreateClient and returns the mapped result or propagated API error.

```text
Create a new client in a GTM workspace (server-side containers only)
```

[Source](https://github.com/VasthavM/google-tag-manager-mcp/blob/c6b7e649be853cafbed86917b8a6daea3002b677/gtm/tool_create_client.go#L28-L71) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "name",
    "type"
  ],
  "properties": {
    "accountId": {
      "type": "string",
      "description": "description:The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "description:The GTM container ID"
    },
    "name": {
      "type": "string",
      "description": "description:Client name"
    },
    "notes": {
      "type": "string",
      "description": "description:Client notes (optional)"
    },
    "parametersJson": {
      "type": "string",
      "description": "description:Client parameters as JSON array (optional). Each parameter: {type, key, value} or {type, key, list/map}"
    },
    "priority": {
      "type": "integer",
      "description": "description:Client priority (optional, higher runs first)"
    },
    "type": {
      "type": "string",
      "description": "description:Client type (e.g. __ga4 for GA4, __googtag for Google tag)"
    },
    "workspaceId": {
      "type": "string",
      "description": "description:The GTM workspace ID"
    }
  },
  "additionalProperties": false
}
```

</details>

<a id="tool-create_container-352b1505"></a>

## create_container

Handler: Validates usage contexts, creates a GTM v2 container, and returns its identifiers, path, and UI URL.

```text
Create a new container in a GTM account. UsageContext specifies the container type (web, android, ios, amp, server).
```

[Source](https://github.com/VasthavM/google-tag-manager-mcp/blob/c6b7e649be853cafbed86917b8a6daea3002b677/gtm/tool_create_container.go#L37-L96) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "required": [
    "accountId",
    "name",
    "usageContext"
  ],
  "properties": {
    "accountId": {
      "type": "string",
      "description": "description:The GTM account ID"
    },
    "domainName": {
      "type": "array",
      "description": "description:List of domain names associated with the container (optional)",
      "items": {
        "type": "string"
      }
    },
    "name": {
      "type": "string",
      "description": "description:Container display name"
    },
    "notes": {
      "type": "string",
      "description": "description:Container notes (optional)"
    },
    "taggingServerUrls": {
      "type": "array",
      "description": "description:Server-side container URLs (for server containers only)",
      "items": {
        "type": "string"
      }
    },
    "usageContext": {
      "type": "array",
      "description": "description:Usage context for the container. Valid values: web, android, ios, amp, server",
      "items": {
        "type": "string"
      }
    }
  },
  "additionalProperties": false
}
```

</details>

<a id="tool-create_tag-e71dcc44"></a>

## create_tag

Handler: Calls GTM client CreateTag and returns the mapped result or propagated API error.

```text
Create a new tag in a GTM workspace. Requires at least one firing trigger ID.
```

[Source](https://github.com/VasthavM/google-tag-manager-mcp/blob/c6b7e649be853cafbed86917b8a6daea3002b677/gtm/tool_create_tag.go#L33-L98) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "name",
    "type",
    "firingTriggerIds"
  ],
  "properties": {
    "accountId": {
      "type": "string",
      "description": "description:The GTM account ID"
    },
    "blockingTriggerIds": {
      "type": "array",
      "description": "description:Array of trigger IDs that block this tag (optional)",
      "items": {
        "type": "string"
      }
    },
    "containerId": {
      "type": "string",
      "description": "description:The GTM container ID"
    },
    "firingTriggerIds": {
      "type": "array",
      "description": "description:Array of trigger IDs that fire this tag",
      "items": {
        "type": "string"
      }
    },
    "name": {
      "type": "string",
      "description": "description:Tag name"
    },
    "notes": {
      "type": "string",
      "description": "description:Tag notes (optional)"
    },
    "parametersJson": {
      "type": "string",
      "description": "description:Tag parameters as JSON array (optional). Each parameter: {type, key, value} or {type, key, list/map}"
    },
    "paused": {
      "type": "boolean",
      "description": "description:Whether tag is paused (optional)"
    },
    "setupTagJson": {
      "type": "string",
      "description": "description:Setup tag sequencing as JSON array (optional). Each element: {tagName: string, stopOnSetupFailure: bool}. The setup tag fires before this tag."
    },
    "teardownTagJson": {
      "type": "string",
      "description": "description:Teardown tag sequencing as JSON array (optional). Each element: {tagName: string, stopTeardownOnFailure: bool}. The teardown tag fires after this tag."
    },
    "type": {
      "type": "string",
      "description": "description:Tag type (e.g. gaawe for GA4, html for Custom HTML)"
    },
    "workspaceId": {
      "type": "string",
      "description": "description:The GTM workspace ID"
    }
  },
  "additionalProperties": false
}
```

</details>

<a id="tool-create_template-ccfe420c"></a>

## create_template

Handler: Uses Google Tag Manager v2 Accounts.Containers.Workspaces.Templates.Create(parent, template) to perform the requested operation and maps the response.

```text
Create a new custom template in a GTM workspace. Requires the full template code in .tpl format. For gallery templates, use import_gallery_template instead.
```

[Source](https://github.com/VasthavM/google-tag-manager-mcp/blob/c6b7e649be853cafbed86917b8a6daea3002b677/gtm/tool_create_template.go#L30-L72) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "name",
    "templateData"
  ],
  "properties": {
    "accountId": {
      "type": "string",
      "description": "description:The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "description:The GTM container ID"
    },
    "name": {
      "type": "string",
      "description": "description:Template display name"
    },
    "templateData": {
      "type": "string",
      "description": "description:The template code in .tpl format (the full template file content)"
    },
    "workspaceId": {
      "type": "string",
      "description": "description:The GTM workspace ID"
    }
  },
  "additionalProperties": false
}
```

</details>

<a id="tool-create_transformation-9ff603f0"></a>

## create_transformation

Handler: Calls GTM client CreateTransformation and returns the mapped result or propagated API error.

```text
Create a new transformation in a GTM workspace (server-side containers only).

Type must be one of: tf_exclude_params, tf_allow_params, tf_augment_event.

Each type uses a different table key and column names in parametersJson:
- tf_allow_params: "allowedParamsTable" with column "allowedParams"
- tf_exclude_params: "excludedParamsTable" with column "excludedParams"
- tf_augment_event: "augmentEventTable" with columns "paramName" and "paramValue"

Common parameters shared by all types:
- matchingConditionsEnabled (boolean) — whether conditions must match
- allTagsExcept (boolean) — if true, apply to all tags except listed ones
- affectedTags (list of maps with tagReference) — specific tags to target
- affectedTagTypes (list of maps with tagType + tagTypeExceptions) — tag types to target
- matchingConditionsTable (list of maps with variableName, variableReference, expressionType, expressionValue)

Example for tf_exclude_params:
[{"key":"excludedParamsTable","type":"list","list":[{"type":"map","map":[{"key":"excludedParams","type":"template","value":"x-fb-ck-fbp"}]}]},{"key":"matchingConditionsEnabled","type":"boolean","value":"false"},{"key":"allTagsExcept","type":"boolean","value":"false"},{"key":"affectedTags","type":"list"},{"key":"affectedTagTypes","type":"list"}]
```

[Source](https://github.com/VasthavM/google-tag-manager-mcp/blob/c6b7e649be853cafbed86917b8a6daea3002b677/gtm/tool_create_transformation.go#L27-L86) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "name",
    "type"
  ],
  "properties": {
    "accountId": {
      "type": "string",
      "description": "description:The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "description:The GTM container ID"
    },
    "name": {
      "type": "string",
      "description": "description:Transformation name"
    },
    "notes": {
      "type": "string",
      "description": "description:Transformation notes (optional)"
    },
    "parametersJson": {
      "type": "string",
      "description": "description:Transformation parameters as JSON array (optional). Each parameter: {type, key, value} or {type, key, list/map}"
    },
    "type": {
      "type": "string",
      "description": "description:Transformation type. Valid values: tf_exclude_params (exclude parameters from tags), tf_allow_params (allow only specified parameters), tf_augment_event (add/modify event parameters)"
    },
    "workspaceId": {
      "type": "string",
      "description": "description:The GTM workspace ID"
    }
  },
  "additionalProperties": false
}
```

</details>

<a id="tool-create_trigger-71660c93"></a>

## create_trigger

Handler: Calls GTM client CreateTrigger and returns the mapped result or propagated API error.

```text
Create a new trigger in a GTM workspace. Common types: pageview, customEvent, linkClick, formSubmission, timer, scrollDepth.
```

[Source](https://github.com/VasthavM/google-tag-manager-mcp/blob/c6b7e649be853cafbed86917b8a6daea3002b677/gtm/tool_create_trigger.go#L30-L102) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "name",
    "type"
  ],
  "properties": {
    "accountId": {
      "type": "string",
      "description": "description:The GTM account ID"
    },
    "autoEventFilterJson": {
      "type": "string",
      "description": "description:Auto-event filter as JSON array for click/form triggers (optional)"
    },
    "containerId": {
      "type": "string",
      "description": "description:The GTM container ID"
    },
    "customEventFilterJson": {
      "type": "string",
      "description": "description:Custom event filter as JSON array for customEvent triggers. REQUIRED for customEvent type. Must contain exactly one condition matching the event name."
    },
    "eventNameJson": {
      "type": "string",
      "description": "description:Event name as JSON object {type, value} for timer triggers (optional)"
    },
    "filterJson": {
      "type": "string",
      "description": "description:Filter conditions as JSON array for pageview triggers (optional)"
    },
    "name": {
      "type": "string",
      "description": "description:Trigger name"
    },
    "notes": {
      "type": "string",
      "description": "description:Trigger notes (optional)"
    },
    "type": {
      "type": "string",
      "description": "description:Trigger type (e.g. pageview, customEvent, linkClick, formSubmission, timer)"
    },
    "workspaceId": {
      "type": "string",
      "description": "description:The GTM workspace ID"
    }
  },
  "additionalProperties": false
}
```

</details>

<a id="tool-create_variable-2f5e4ddb"></a>

## create_variable

Handler: Calls GTM client CreateVariable and returns the mapped result or propagated API error.

```text
Create a new variable in a GTM workspace. Common types: c (Constant), v (Data Layer), k (Cookie), jsm (Custom JavaScript), u (URL).
```

[Source](https://github.com/VasthavM/google-tag-manager-mcp/blob/c6b7e649be853cafbed86917b8a6daea3002b677/gtm/tool_create_variable.go#L27-L71) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "name",
    "type"
  ],
  "properties": {
    "accountId": {
      "type": "string",
      "description": "description:The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "description:The GTM container ID"
    },
    "name": {
      "type": "string",
      "description": "description:Variable name"
    },
    "notes": {
      "type": "string",
      "description": "description:Variable notes (optional)"
    },
    "parametersJson": {
      "type": "string",
      "description": "description:Variable parameters as JSON array (required for most types)"
    },
    "type": {
      "type": "string",
      "description": "description:Variable type (e.g. c for Constant, v for Data Layer, k for Cookie, jsm for Custom JavaScript)"
    },
    "workspaceId": {
      "type": "string",
      "description": "description:The GTM workspace ID"
    }
  },
  "additionalProperties": false
}
```

</details>

<a id="tool-create_version-fc39e936"></a>

## create_version

Handler: Checks workspace status, refuses unchanged or conflicting workspaces, then calls GTM v2 CreateVersion.

```text
Create a new container version from workspace changes. This snapshots the current workspace state but does not publish it.
```

[Source](https://github.com/VasthavM/google-tag-manager-mcp/blob/c6b7e649be853cafbed86917b8a6daea3002b677/gtm/tool_version.go#L40-L95) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "properties": {
    "accountId": {
      "type": "string",
      "description": "description:The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "description:The GTM container ID"
    },
    "name": {
      "type": "string",
      "description": "description:Version name (optional)"
    },
    "notes": {
      "type": "string",
      "description": "description:Version notes describing changes (optional)"
    },
    "workspaceId": {
      "type": "string",
      "description": "description:The GTM workspace ID"
    }
  },
  "additionalProperties": false
}
```

</details>

<a id="tool-create_workspace-a1af8425"></a>

## create_workspace

Handler: Creates a named GTM v2 workspace under the resolved container and returns its identifiers and path.

```text
Create a new workspace in a GTM container. Workspaces are used to make changes that can later be versioned and published.
```

[Source](https://github.com/VasthavM/google-tag-manager-mcp/blob/c6b7e649be853cafbed86917b8a6daea3002b677/gtm/tool_create_workspace.go#L34-L74) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "required": [
    "accountId",
    "containerId",
    "name"
  ],
  "properties": {
    "accountId": {
      "type": "string",
      "description": "description:The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "description:The GTM container ID"
    },
    "description": {
      "type": "string",
      "description": "description:Workspace description (optional)"
    },
    "name": {
      "type": "string",
      "description": "description:Workspace display name"
    }
  },
  "additionalProperties": false
}
```

</details>

<a id="tool-delete_client-2acb4417"></a>

## delete_client

Handler: Calls GTM client DeleteClient and returns the mapped result or propagated API error.

```text
Delete a client from a workspace. Requires confirm: true as a safety guard. Server-side containers only.
```

[Source](https://github.com/VasthavM/google-tag-manager-mcp/blob/c6b7e649be853cafbed86917b8a6daea3002b677/gtm/tool_delete_client.go#L24-L59) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "clientId",
    "confirm"
  ],
  "properties": {
    "accountId": {
      "type": "string",
      "description": "description:The GTM account ID"
    },
    "clientId": {
      "type": "string",
      "description": "description:The client ID to delete"
    },
    "confirm": {
      "type": "boolean",
      "description": "description:Must be true to confirm deletion. This is a safety guard."
    },
    "containerId": {
      "type": "string",
      "description": "description:The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "description:The GTM workspace ID"
    }
  },
  "additionalProperties": false
}
```

</details>

<a id="tool-delete_container-a8bba20f"></a>

## delete_container

Handler: Requires confirm=true, resolves the container path, and calls GTM v2 Containers.Delete.

```text
Delete a GTM container. Requires confirm: true as a safety guard. WARNING: This permanently deletes the container and ALL its contents including tags, triggers, variables, and versions.
```

[Source](https://github.com/VasthavM/google-tag-manager-mcp/blob/c6b7e649be853cafbed86917b8a6daea3002b677/gtm/tool_delete_container.go#L22-L54) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "required": [
    "accountId",
    "containerId",
    "confirm"
  ],
  "properties": {
    "accountId": {
      "type": "string",
      "description": "description:The GTM account ID"
    },
    "confirm": {
      "type": "boolean",
      "description": "description:Must be true to confirm deletion. This is a safety guard."
    },
    "containerId": {
      "type": "string",
      "description": "description:The GTM container ID"
    }
  },
  "additionalProperties": false
}
```

</details>

<a id="tool-delete_tag-1345d160"></a>

## delete_tag

Handler: Calls GTM client DeleteTag and returns the mapped result or propagated API error.

```text
Delete a tag from a workspace. Requires confirm: true as a safety guard.
```

[Source](https://github.com/VasthavM/google-tag-manager-mcp/blob/c6b7e649be853cafbed86917b8a6daea3002b677/gtm/tool_delete_tag.go#L24-L61) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "tagId",
    "confirm"
  ],
  "properties": {
    "accountId": {
      "type": "string",
      "description": "description:The GTM account ID"
    },
    "confirm": {
      "type": "boolean",
      "description": "description:Must be true to confirm deletion. This is a safety guard."
    },
    "containerId": {
      "type": "string",
      "description": "description:The GTM container ID"
    },
    "tagId": {
      "type": "string",
      "description": "description:The tag ID to delete"
    },
    "workspaceId": {
      "type": "string",
      "description": "description:The GTM workspace ID"
    }
  },
  "additionalProperties": false
}
```

</details>

<a id="tool-delete_template-02c8a6cb"></a>

## delete_template

Handler: Uses Google Tag Manager v2 Accounts.Containers.Workspaces.Templates.Delete(path) to perform the requested operation and maps the response.

```text
Delete a custom template from a workspace. Requires confirm: true as a safety guard. Note: Templates that are in use by tags cannot be deleted.
```

[Source](https://github.com/VasthavM/google-tag-manager-mcp/blob/c6b7e649be853cafbed86917b8a6daea3002b677/gtm/tool_delete_template.go#L24-L60) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "templateId",
    "confirm"
  ],
  "properties": {
    "accountId": {
      "type": "string",
      "description": "description:The GTM account ID"
    },
    "confirm": {
      "type": "boolean",
      "description": "description:Must be true to confirm deletion. This is a safety guard."
    },
    "containerId": {
      "type": "string",
      "description": "description:The GTM container ID"
    },
    "templateId": {
      "type": "string",
      "description": "description:The template ID to delete"
    },
    "workspaceId": {
      "type": "string",
      "description": "description:The GTM workspace ID"
    }
  },
  "additionalProperties": false
}
```

</details>

<a id="tool-delete_transformation-e23da7c3"></a>

## delete_transformation

Handler: Calls GTM client DeleteTransformation and returns the mapped result or propagated API error.

```text
Delete a transformation from a workspace. Requires confirm: true as a safety guard. Server-side containers only.
```

[Source](https://github.com/VasthavM/google-tag-manager-mcp/blob/c6b7e649be853cafbed86917b8a6daea3002b677/gtm/tool_delete_transformation.go#L24-L59) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "transformationId",
    "confirm"
  ],
  "properties": {
    "accountId": {
      "type": "string",
      "description": "description:The GTM account ID"
    },
    "confirm": {
      "type": "boolean",
      "description": "description:Must be true to confirm deletion. This is a safety guard."
    },
    "containerId": {
      "type": "string",
      "description": "description:The GTM container ID"
    },
    "transformationId": {
      "type": "string",
      "description": "description:The transformation ID to delete"
    },
    "workspaceId": {
      "type": "string",
      "description": "description:The GTM workspace ID"
    }
  },
  "additionalProperties": false
}
```

</details>

<a id="tool-delete_trigger-ec67de91"></a>

## delete_trigger

Handler: Calls GTM client DeleteTrigger and returns the mapped result or propagated API error.

```text
Delete a trigger from a workspace. Requires confirm: true as a safety guard. Note: Triggers that are members of a trigger group cannot be deleted until the trigger group is deleted first.
```

[Source](https://github.com/VasthavM/google-tag-manager-mcp/blob/c6b7e649be853cafbed86917b8a6daea3002b677/gtm/tool_delete_trigger.go#L24-L61) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "triggerId",
    "confirm"
  ],
  "properties": {
    "accountId": {
      "type": "string",
      "description": "description:The GTM account ID"
    },
    "confirm": {
      "type": "boolean",
      "description": "description:Must be true to confirm deletion. This is a safety guard."
    },
    "containerId": {
      "type": "string",
      "description": "description:The GTM container ID"
    },
    "triggerId": {
      "type": "string",
      "description": "description:The trigger ID to delete"
    },
    "workspaceId": {
      "type": "string",
      "description": "description:The GTM workspace ID"
    }
  },
  "additionalProperties": false
}
```

</details>

<a id="tool-delete_variable-3ead6fdb"></a>

## delete_variable

Handler: Calls GTM client DeleteVariable and returns the mapped result or propagated API error.

```text
Delete a variable from a workspace. Requires confirm: true as a safety guard.
```

[Source](https://github.com/VasthavM/google-tag-manager-mcp/blob/c6b7e649be853cafbed86917b8a6daea3002b677/gtm/tool_delete_variable.go#L24-L61) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "variableId",
    "confirm"
  ],
  "properties": {
    "accountId": {
      "type": "string",
      "description": "description:The GTM account ID"
    },
    "confirm": {
      "type": "boolean",
      "description": "description:Must be true to confirm deletion. This is a safety guard."
    },
    "containerId": {
      "type": "string",
      "description": "description:The GTM container ID"
    },
    "variableId": {
      "type": "string",
      "description": "description:The variable ID to delete"
    },
    "workspaceId": {
      "type": "string",
      "description": "description:The GTM workspace ID"
    }
  },
  "additionalProperties": false
}
```

</details>

<a id="tool-disable_built_in_variables-a7be9454"></a>

## disable_built_in_variables

Handler: Calls GTM client DisableBuiltInVariables and returns the mapped result or propagated API error.

```text
Disable one or more built-in variable types. Requires confirm: true as a safety guard.
```

[Source](https://github.com/VasthavM/google-tag-manager-mcp/blob/c6b7e649be853cafbed86917b8a6daea3002b677/gtm/tool_built_in_variables.go#L101-L134) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "types",
    "confirm"
  ],
  "properties": {
    "accountId": {
      "type": "string",
      "description": "description:The GTM account ID"
    },
    "confirm": {
      "type": "boolean",
      "description": "description:Must be true to confirm disabling. This is a safety guard."
    },
    "containerId": {
      "type": "string",
      "description": "description:The GTM container ID"
    },
    "types": {
      "type": "array",
      "description": "description:Array of built-in variable types to disable",
      "items": {
        "type": "string"
      }
    },
    "workspaceId": {
      "type": "string",
      "description": "description:The GTM workspace ID"
    }
  },
  "additionalProperties": false
}
```

</details>

<a id="tool-enable_built_in_variables-d3221371"></a>

## enable_built_in_variables

Handler: Calls GTM client EnableBuiltInVariables and returns the mapped result or propagated API error.

```text
Enable one or more built-in variable types in a GTM workspace
```

[Source](https://github.com/VasthavM/google-tag-manager-mcp/blob/c6b7e649be853cafbed86917b8a6daea3002b677/gtm/tool_built_in_variables.go#L57-L101) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "types"
  ],
  "properties": {
    "accountId": {
      "type": "string",
      "description": "description:The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "description:The GTM container ID"
    },
    "types": {
      "type": "array",
      "description": "description:Array of built-in variable types to enable (e.g. eventName, clientName, requestPath, pageUrl, event)",
      "items": {
        "type": "string"
      }
    },
    "workspaceId": {
      "type": "string",
      "description": "description:The GTM workspace ID"
    }
  },
  "additionalProperties": false
}
```

</details>

<a id="tool-get_client-2d47e9a6"></a>

## get_client

Handler: Calls GTM client GetClient and returns the mapped result or propagated API error.

```text
Get a specific client by ID (server-side containers only)
```

[Source](https://github.com/VasthavM/google-tag-manager-mcp/blob/c6b7e649be853cafbed86917b8a6daea3002b677/gtm/tool_clients.go#L54-L74) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "clientId"
  ],
  "properties": {
    "accountId": {
      "type": "string",
      "description": "description:The GTM account ID"
    },
    "clientId": {
      "type": "string",
      "description": "description:The client ID to retrieve"
    },
    "containerId": {
      "type": "string",
      "description": "description:The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "description:The GTM workspace ID"
    }
  },
  "additionalProperties": false
}
```

</details>

<a id="tool-get_folder_entities-af7babd3"></a>

## get_folder_entities

Handler: Calls GTM client GetFolderEntities and returns the mapped result or propagated API error.

```text
Get the tags, triggers, and variables inside a specific folder.
```

[Source](https://github.com/VasthavM/google-tag-manager-mcp/blob/c6b7e649be853cafbed86917b8a6daea3002b677/gtm/tool_folders.go#L54-L74) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "folderId"
  ],
  "properties": {
    "accountId": {
      "type": "string",
      "description": "description:The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "description:The GTM container ID"
    },
    "folderId": {
      "type": "string",
      "description": "description:The folder ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "description:The GTM workspace ID"
    }
  },
  "additionalProperties": false
}
```

</details>

<a id="tool-get_tag-749bab4b"></a>

## get_tag

Handler: Calls GTM client GetTag and returns the mapped result or propagated API error.

```text
Get a specific tag by ID
```

[Source](https://github.com/VasthavM/google-tag-manager-mcp/blob/c6b7e649be853cafbed86917b8a6daea3002b677/gtm/tool_tags.go#L48-L68) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "tagId"
  ],
  "properties": {
    "accountId": {
      "type": "string",
      "description": "description:The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "description:The GTM container ID"
    },
    "tagId": {
      "type": "string",
      "description": "description:The tag ID to retrieve"
    },
    "workspaceId": {
      "type": "string",
      "description": "description:The GTM workspace ID"
    }
  },
  "additionalProperties": false
}
```

</details>

<a id="tool-get_tag_templates-7475b430"></a>

## get_tag_templates

Handler: Returns locally defined example parameter structures and usage instructions.

```text
Get example parameter structures for creating GTM tags. Use this BEFORE creating GA4 or complex tags to see the correct parameter format.
```

[Source](https://github.com/VasthavM/google-tag-manager-mcp/blob/c6b7e649be853cafbed86917b8a6daea3002b677/gtm/tool_templates.go#L14-L42) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "additionalProperties": false
}
```

</details>

<a id="tool-get_template-99eb59af"></a>

## get_template

Handler: Uses Google Tag Manager v2 Accounts.Containers.Workspaces.Templates.Get(path) to perform the requested operation and maps the response.

```text
Get a specific custom template by ID. Returns full template details including the template code.
```

[Source](https://github.com/VasthavM/google-tag-manager-mcp/blob/c6b7e649be853cafbed86917b8a6daea3002b677/gtm/tool_get_template.go#L30-L80) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "templateId"
  ],
  "properties": {
    "accountId": {
      "type": "string",
      "description": "description:The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "description:The GTM container ID"
    },
    "templateId": {
      "type": "string",
      "description": "description:The template ID to retrieve"
    },
    "workspaceId": {
      "type": "string",
      "description": "description:The GTM workspace ID"
    }
  },
  "additionalProperties": false
}
```

</details>

<a id="tool-get_transformation-13553d72"></a>

## get_transformation

Handler: Calls GTM client GetTransformation and returns the mapped result or propagated API error.

```text
Get a specific transformation by ID (server-side containers only)
```

[Source](https://github.com/VasthavM/google-tag-manager-mcp/blob/c6b7e649be853cafbed86917b8a6daea3002b677/gtm/tool_transformations.go#L54-L74) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "transformationId"
  ],
  "properties": {
    "accountId": {
      "type": "string",
      "description": "description:The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "description:The GTM container ID"
    },
    "transformationId": {
      "type": "string",
      "description": "description:The transformation ID to retrieve"
    },
    "workspaceId": {
      "type": "string",
      "description": "description:The GTM workspace ID"
    }
  },
  "additionalProperties": false
}
```

</details>

<a id="tool-get_trigger-e2f13ee6"></a>

## get_trigger

Handler: Calls GTM client GetTrigger and returns the mapped result or propagated API error.

```text
Get a specific trigger by ID
```

[Source](https://github.com/VasthavM/google-tag-manager-mcp/blob/c6b7e649be853cafbed86917b8a6daea3002b677/gtm/tool_get_trigger.go#L19-L43) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "triggerId"
  ],
  "properties": {
    "accountId": {
      "type": "string",
      "description": "description:The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "description:The GTM container ID"
    },
    "triggerId": {
      "type": "string",
      "description": "description:The trigger ID to retrieve"
    },
    "workspaceId": {
      "type": "string",
      "description": "description:The GTM workspace ID"
    }
  },
  "additionalProperties": false
}
```

</details>

<a id="tool-get_trigger_templates-c30240fc"></a>

## get_trigger_templates

Handler: Returns locally defined example parameter structures and usage instructions.

```text
Get example structures for creating GTM triggers. Use this to see the correct format for different trigger types.
```

[Source](https://github.com/VasthavM/google-tag-manager-mcp/blob/c6b7e649be853cafbed86917b8a6daea3002b677/gtm/tool_templates.go#L42-L60) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "additionalProperties": false
}
```

</details>

<a id="tool-get_variable-ba0cd778"></a>

## get_variable

Handler: Calls GTM client GetVariable and returns the mapped result or propagated API error.

```text
Get a specific variable by ID
```

[Source](https://github.com/VasthavM/google-tag-manager-mcp/blob/c6b7e649be853cafbed86917b8a6daea3002b677/gtm/tool_get_variable.go#L19-L43) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "variableId"
  ],
  "properties": {
    "accountId": {
      "type": "string",
      "description": "description:The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "description:The GTM container ID"
    },
    "variableId": {
      "type": "string",
      "description": "description:The variable ID to retrieve"
    },
    "workspaceId": {
      "type": "string",
      "description": "description:The GTM workspace ID"
    }
  },
  "additionalProperties": false
}
```

</details>

<a id="tool-get_workspace_status-23f21bb9"></a>

## get_workspace_status

Handler: Calls GTM client GetWorkspaceStatus and returns the mapped result or propagated API error.

```text
Check if a workspace has pending changes or merge conflicts before versioning.
```

[Source](https://github.com/VasthavM/google-tag-manager-mcp/blob/c6b7e649be853cafbed86917b8a6daea3002b677/gtm/tool_workspace_status.go#L17-L37) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "properties": {
    "accountId": {
      "type": "string",
      "description": "description:The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "description:The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "description:The GTM workspace ID"
    }
  },
  "additionalProperties": false
}
```

</details>

<a id="tool-import_gallery_template-2fc7e72c"></a>

## import_gallery_template

Handler: Imports a community gallery template through GTM v2 with AcknowledgePermissions(true), optionally pins the SHA, and returns its custom template type.

```text
Import a GTM Custom Template from the Community Template Gallery into a workspace. Returns the template type string to use when creating tags. Example: import_gallery_template(galleryOwner='iubenda', galleryRepository='gtm-cookie-solution')
```

[Source](https://github.com/VasthavM/google-tag-manager-mcp/blob/c6b7e649be853cafbed86917b8a6daea3002b677/gtm/tool_import_gallery_template.go#L26-L87) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "galleryOwner",
    "galleryRepository"
  ],
  "properties": {
    "accountId": {
      "type": "string",
      "description": "description:The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "description:The GTM container ID"
    },
    "galleryOwner": {
      "type": "string",
      "description": "description:Owner of the Gallery template (e.g. 'iubenda' or 'GoogleAnalytics')"
    },
    "galleryRepository": {
      "type": "string",
      "description": "description:Repository of the Gallery template (e.g. 'gtm-cookie-solution')"
    },
    "gallerySha": {
      "type": "string",
      "description": "description:SHA version of the Gallery template. Defaults to latest if not provided"
    },
    "workspaceId": {
      "type": "string",
      "description": "description:The GTM workspace ID"
    }
  },
  "additionalProperties": false
}
```

</details>

<a id="tool-list_accounts-1090ba6a"></a>

## list_accounts

Handler: Calls GTM client ListAccounts and returns the mapped result or propagated API error.

```text
List all GTM accounts accessible to the authenticated user
```

[Source](https://github.com/VasthavM/google-tag-manager-mcp/blob/c6b7e649be853cafbed86917b8a6daea3002b677/gtm/tool_accounts.go#L13-L33) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "additionalProperties": false
}
```

</details>

<a id="tool-list_built_in_variables-598c2ffb"></a>

## list_built_in_variables

Handler: Calls GTM client ListBuiltInVariables and returns the mapped result or propagated API error.

```text
List all enabled built-in variables in a GTM workspace
```

[Source](https://github.com/VasthavM/google-tag-manager-mcp/blob/c6b7e649be853cafbed86917b8a6daea3002b677/gtm/tool_built_in_variables.go#L21-L57) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "properties": {
    "accountId": {
      "type": "string",
      "description": "description:The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "description:The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "description:The GTM workspace ID"
    }
  },
  "additionalProperties": false
}
```

</details>

<a id="tool-list_clients-916df1aa"></a>

## list_clients

Handler: Calls GTM client ListClients and returns the mapped result or propagated API error.

```text
List all clients in a GTM workspace (server-side containers only)
```

[Source](https://github.com/VasthavM/google-tag-manager-mcp/blob/c6b7e649be853cafbed86917b8a6daea3002b677/gtm/tool_clients.go#L20-L54) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "properties": {
    "accountId": {
      "type": "string",
      "description": "description:The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "description:The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "description:The GTM workspace ID"
    }
  },
  "additionalProperties": false
}
```

</details>

<a id="tool-list_containers-a53dbc4d"></a>

## list_containers

Handler: Calls GTM client ListContainers and returns the mapped result or propagated API error.

```text
List all containers in a GTM account
```

[Source](https://github.com/VasthavM/google-tag-manager-mcp/blob/c6b7e649be853cafbed86917b8a6daea3002b677/gtm/tool_containers.go#L15-L35) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "required": [
    "accountId"
  ],
  "properties": {
    "accountId": {
      "type": "string",
      "description": "description:The GTM account ID"
    }
  },
  "additionalProperties": false
}
```

</details>

<a id="tool-list_folders-786055b5"></a>

## list_folders

Handler: Calls GTM client ListFolders and returns the mapped result or propagated API error.

```text
List all folders (trigger groups) in a GTM workspace. Folders help organize tags, triggers, and variables.
```

[Source](https://github.com/VasthavM/google-tag-manager-mcp/blob/c6b7e649be853cafbed86917b8a6daea3002b677/gtm/tool_folders.go#L33-L54) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "properties": {
    "accountId": {
      "type": "string",
      "description": "description:The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "description:The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "description:The GTM workspace ID"
    }
  },
  "additionalProperties": false
}
```

</details>

<a id="tool-list_tags-86fc0f9c"></a>

## list_tags

Handler: Calls GTM client ListTags and returns the mapped result or propagated API error.

```text
List all tags in a GTM workspace
```

[Source](https://github.com/VasthavM/google-tag-manager-mcp/blob/c6b7e649be853cafbed86917b8a6daea3002b677/gtm/tool_tags.go#L27-L48) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "properties": {
    "accountId": {
      "type": "string",
      "description": "description:The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "description:The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "description:The GTM workspace ID"
    }
  },
  "additionalProperties": false
}
```

</details>

<a id="tool-list_templates-f9ffad71"></a>

## list_templates

Handler: Uses Google Tag Manager v2 Accounts.Containers.Workspaces.Templates.List(parent) to perform the requested operation and maps the response.

```text
List all GTM Custom Templates in a workspace. Returns template IDs and their type strings (cvt_{galleryTemplateId} for gallery templates) for use when creating tags.
```

[Source](https://github.com/VasthavM/google-tag-manager-mcp/blob/c6b7e649be853cafbed86917b8a6daea3002b677/gtm/tool_list_templates.go#L39-L89) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "properties": {
    "accountId": {
      "type": "string",
      "description": "description:The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "description:The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "description:The GTM workspace ID"
    }
  },
  "additionalProperties": false
}
```

</details>

<a id="tool-list_transformations-f386365b"></a>

## list_transformations

Handler: Calls GTM client ListTransformations and returns the mapped result or propagated API error.

```text
List all transformations in a GTM workspace (server-side containers only)
```

[Source](https://github.com/VasthavM/google-tag-manager-mcp/blob/c6b7e649be853cafbed86917b8a6daea3002b677/gtm/tool_transformations.go#L20-L54) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "properties": {
    "accountId": {
      "type": "string",
      "description": "description:The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "description:The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "description:The GTM workspace ID"
    }
  },
  "additionalProperties": false
}
```

</details>

<a id="tool-list_triggers-4ca44d74"></a>

## list_triggers

Handler: Calls GTM client ListTriggers and returns the mapped result or propagated API error.

```text
List all triggers in a GTM workspace
```

[Source](https://github.com/VasthavM/google-tag-manager-mcp/blob/c6b7e649be853cafbed86917b8a6daea3002b677/gtm/tool_triggers.go#L17-L37) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "properties": {
    "accountId": {
      "type": "string",
      "description": "description:The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "description:The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "description:The GTM workspace ID"
    }
  },
  "additionalProperties": false
}
```

</details>

<a id="tool-list_variables-1adaa2a1"></a>

## list_variables

Handler: Calls GTM client ListVariables and returns the mapped result or propagated API error.

```text
List all variables in a GTM workspace
```

[Source](https://github.com/VasthavM/google-tag-manager-mcp/blob/c6b7e649be853cafbed86917b8a6daea3002b677/gtm/tool_variables.go#L17-L37) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "properties": {
    "accountId": {
      "type": "string",
      "description": "description:The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "description:The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "description:The GTM workspace ID"
    }
  },
  "additionalProperties": false
}
```

</details>

<a id="tool-list_versions-3eb8d6c0"></a>

## list_versions

Handler: Lists GTM v2 container version headers, optionally including deleted versions, and returns simplified version records.

```text
List all container versions. Returns version headers with counts of tags, triggers, variables, and templates.
```

[Source](https://github.com/VasthavM/google-tag-manager-mcp/blob/c6b7e649be853cafbed86917b8a6daea3002b677/gtm/tool_list_versions.go#L33-L83) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "required": [
    "accountId",
    "containerId"
  ],
  "properties": {
    "accountId": {
      "type": "string",
      "description": "description:The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "description:The GTM container ID"
    }
  },
  "additionalProperties": false
}
```

</details>

<a id="tool-list_workspaces-af844119"></a>

## list_workspaces

Handler: Calls GTM client ListWorkspaces and returns the mapped result or propagated API error.

```text
List all workspaces in a GTM container
```

[Source](https://github.com/VasthavM/google-tag-manager-mcp/blob/c6b7e649be853cafbed86917b8a6daea3002b677/gtm/tool_workspaces.go#L16-L36) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "required": [
    "accountId",
    "containerId"
  ],
  "properties": {
    "accountId": {
      "type": "string",
      "description": "description:The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "description:The GTM container ID"
    }
  },
  "additionalProperties": false
}
```

</details>

<a id="tool-ping-758d61f2"></a>

## ping

Handler: Returns pong, optionally echoes the input message, and adds the current UTC timestamp.

```text
Test connectivity to the GTM MCP server
```

[Source](https://github.com/VasthavM/google-tag-manager-mcp/blob/c6b7e649be853cafbed86917b8a6daea3002b677/main.go#L67-L103) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "message": {
      "type": "string",
      "description": "Optional message to echo back"
    }
  },
  "additionalProperties": false
}
```

</details>

<a id="tool-publish_version-0628e4c5"></a>

## publish_version

Handler: Requires confirm=true, then calls GTM v2 Versions.Publish to make the requested container version live.

```text
Publish a container version to make it live. Requires confirm: true as a safety guard. WARNING: This pushes changes to your live website.
```

[Source](https://github.com/VasthavM/google-tag-manager-mcp/blob/c6b7e649be853cafbed86917b8a6daea3002b677/gtm/tool_version.go#L95-L132) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "required": [
    "accountId",
    "containerId",
    "versionId",
    "confirm"
  ],
  "properties": {
    "accountId": {
      "type": "string",
      "description": "description:The GTM account ID"
    },
    "confirm": {
      "type": "boolean",
      "description": "description:Must be true to confirm publishing. This is a safety guard - publishing makes changes live."
    },
    "containerId": {
      "type": "string",
      "description": "description:The GTM container ID"
    },
    "versionId": {
      "type": "string",
      "description": "description:The version ID to publish"
    }
  },
  "additionalProperties": false
}
```

</details>

<a id="tool-update_client-b54d9c9e"></a>

## update_client

Handler: Calls GTM client UpdateClient and returns the mapped result or propagated API error.

```text
Update an existing client. Automatically handles fingerprint for concurrency control. Server-side containers only.
```

[Source](https://github.com/VasthavM/google-tag-manager-mcp/blob/c6b7e649be853cafbed86917b8a6daea3002b677/gtm/tool_update_client.go#L30-L79) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "clientId",
    "name",
    "type"
  ],
  "properties": {
    "accountId": {
      "type": "string",
      "description": "description:The GTM account ID"
    },
    "clientId": {
      "type": "string",
      "description": "description:The client ID to update"
    },
    "containerId": {
      "type": "string",
      "description": "description:The GTM container ID"
    },
    "name": {
      "type": "string",
      "description": "description:Client name"
    },
    "notes": {
      "type": "string",
      "description": "description:Client notes (optional)"
    },
    "parametersJson": {
      "type": "string",
      "description": "description:Client parameters as JSON array (optional)"
    },
    "priority": {
      "type": "integer",
      "description": "description:Client priority (optional, higher runs first)"
    },
    "type": {
      "type": "string",
      "description": "description:Client type"
    },
    "workspaceId": {
      "type": "string",
      "description": "description:The GTM workspace ID"
    }
  },
  "additionalProperties": false
}
```

</details>

<a id="tool-update_tag-ff9e7962"></a>

## update_tag

Handler: Calls GTM client UpdateTag and returns the mapped result or propagated API error.

```text
Update an existing tag. Automatically handles fingerprint for concurrency control.
```

[Source](https://github.com/VasthavM/google-tag-manager-mcp/blob/c6b7e649be853cafbed86917b8a6daea3002b677/gtm/tool_update_tag.go#L34-L116) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "tagId",
    "name",
    "type",
    "firingTriggerIds"
  ],
  "properties": {
    "accountId": {
      "type": "string",
      "description": "description:The GTM account ID"
    },
    "blockingTriggerIds": {
      "type": "array",
      "description": "description:Array of trigger IDs that block this tag (optional)",
      "items": {
        "type": "string"
      }
    },
    "containerId": {
      "type": "string",
      "description": "description:The GTM container ID"
    },
    "firingTriggerIds": {
      "type": "array",
      "description": "description:Array of trigger IDs that fire this tag",
      "items": {
        "type": "string"
      }
    },
    "name": {
      "type": "string",
      "description": "description:Tag name"
    },
    "notes": {
      "type": "string",
      "description": "description:Tag notes (optional)"
    },
    "parametersJson": {
      "type": "string",
      "description": "description:Tag parameters as JSON array (optional)"
    },
    "paused": {
      "type": "boolean",
      "description": "description:Whether tag is paused (optional)"
    },
    "setupTagJson": {
      "type": "string",
      "description": "description:Setup tag sequencing as JSON array (optional). Each element: {tagName: string, stopOnSetupFailure: bool}. The setup tag fires before this tag."
    },
    "tagId": {
      "type": "string",
      "description": "description:The tag ID to update"
    },
    "teardownTagJson": {
      "type": "string",
      "description": "description:Teardown tag sequencing as JSON array (optional). Each element: {tagName: string, stopTeardownOnFailure: bool}. The teardown tag fires after this tag."
    },
    "type": {
      "type": "string",
      "description": "description:Tag type"
    },
    "workspaceId": {
      "type": "string",
      "description": "description:The GTM workspace ID"
    }
  },
  "additionalProperties": false
}
```

</details>

<a id="tool-update_template-dbe66b4e"></a>

## update_template

Handler: Reads the existing custom template, preserves unchanged name/data and its fingerprint, then updates through GTM v2.

```text
Update an existing custom template. Automatically handles fingerprint for concurrency control. Note: Updating gallery templates may break the link to the gallery. IMPORTANT: To change the visible template name, update the 'displayName' field inside the ___INFO___ section of templateData - the 'name' parameter is only an internal identifier.
```

[Source](https://github.com/VasthavM/google-tag-manager-mcp/blob/c6b7e649be853cafbed86917b8a6daea3002b677/gtm/tool_update_template.go#L32-L97) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "templateId"
  ],
  "properties": {
    "accountId": {
      "type": "string",
      "description": "description:The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "description:The GTM container ID"
    },
    "name": {
      "type": "string",
      "description": "description:Internal template name (optional). Note: This is NOT the visible display name. The visible name comes from the displayName field inside the ___INFO___ section of templateData."
    },
    "templateData": {
      "type": "string",
      "description": "description:New template code in .tpl format (optional)"
    },
    "templateId": {
      "type": "string",
      "description": "description:The template ID to update"
    },
    "workspaceId": {
      "type": "string",
      "description": "description:The GTM workspace ID"
    }
  },
  "additionalProperties": false
}
```

</details>

<a id="tool-update_transformation-67f8c3a8"></a>

## update_transformation

Handler: Calls GTM client UpdateTransformation and returns the mapped result or propagated API error.

```text
Update an existing transformation. Automatically handles fingerprint for concurrency control. Server-side containers only.

Type must be one of: tf_exclude_params, tf_allow_params, tf_augment_event. Table key and columns per type:
- tf_allow_params: "allowedParamsTable" with column "allowedParams"
- tf_exclude_params: "excludedParamsTable" with column "excludedParams"
- tf_augment_event: "augmentEventTable" with columns "paramName" and "paramValue"
```

[Source](https://github.com/VasthavM/google-tag-manager-mcp/blob/c6b7e649be853cafbed86917b8a6daea3002b677/gtm/tool_update_transformation.go#L29-L82) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "transformationId",
    "name"
  ],
  "properties": {
    "accountId": {
      "type": "string",
      "description": "description:The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "description:The GTM container ID"
    },
    "name": {
      "type": "string",
      "description": "description:Transformation name"
    },
    "notes": {
      "type": "string",
      "description": "description:Transformation notes (optional)"
    },
    "parametersJson": {
      "type": "string",
      "description": "description:Transformation parameters as JSON array (optional)"
    },
    "transformationId": {
      "type": "string",
      "description": "description:The transformation ID to update"
    },
    "type": {
      "type": "string",
      "description": "description:Transformation type (optional). Valid values: tf_exclude_params, tf_allow_params, tf_augment_event"
    },
    "workspaceId": {
      "type": "string",
      "description": "description:The GTM workspace ID"
    }
  },
  "additionalProperties": false
}
```

</details>

<a id="tool-update_trigger-60ddeb77"></a>

## update_trigger

Handler: Calls GTM client UpdateTrigger and returns the mapped result or propagated API error.

```text
Update an existing trigger. For trigger groups, use parameterJson with format: [{"key": "triggerIds", "type": "list", "list": [{"type": "triggerReference", "value": "<triggerId>"}, ...]}]
```

[Source](https://github.com/VasthavM/google-tag-manager-mcp/blob/c6b7e649be853cafbed86917b8a6daea3002b677/gtm/tool_update_trigger.go#L32-L110) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "triggerId",
    "name",
    "type"
  ],
  "properties": {
    "accountId": {
      "type": "string",
      "description": "description:The GTM account ID"
    },
    "autoEventFilterJson": {
      "type": "string",
      "description": "description:Auto-event filter as JSON array for click/form triggers (optional)"
    },
    "containerId": {
      "type": "string",
      "description": "description:The GTM container ID"
    },
    "customEventFilterJson": {
      "type": "string",
      "description": "description:Custom event filter as JSON array for customEvent triggers (optional)"
    },
    "filterJson": {
      "type": "string",
      "description": "description:Filter conditions as JSON array for pageview triggers (optional)"
    },
    "name": {
      "type": "string",
      "description": "description:Trigger name"
    },
    "notes": {
      "type": "string",
      "description": "description:Trigger notes (optional)"
    },
    "parameterJson": {
      "type": "string",
      "description": "description:Trigger parameters as JSON array. For triggerGroup type use: [{key: triggerIds, type: list, list: [{type: triggerReference, value: triggerId}, ...]}]"
    },
    "triggerId": {
      "type": "string",
      "description": "description:The trigger ID to update"
    },
    "type": {
      "type": "string",
      "description": "description:Trigger type (e.g. pageview, customEvent, linkClick, triggerGroup)"
    },
    "workspaceId": {
      "type": "string",
      "description": "description:The GTM workspace ID"
    }
  },
  "additionalProperties": false
}
```

</details>

<a id="tool-update_variable-63c48ad7"></a>

## update_variable

Handler: Calls GTM client UpdateVariable and returns the mapped result or propagated API error.

```text
Update an existing variable. Automatically handles fingerprint for concurrency control.
```

[Source](https://github.com/VasthavM/google-tag-manager-mcp/blob/c6b7e649be853cafbed86917b8a6daea3002b677/gtm/tool_update_variable.go#L29-L79) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "variableId",
    "name",
    "type"
  ],
  "properties": {
    "accountId": {
      "type": "string",
      "description": "description:The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "description:The GTM container ID"
    },
    "name": {
      "type": "string",
      "description": "description:Variable name"
    },
    "notes": {
      "type": "string",
      "description": "description:Variable notes (optional)"
    },
    "parametersJson": {
      "type": "string",
      "description": "description:Variable parameters as JSON array (required for most types)"
    },
    "type": {
      "type": "string",
      "description": "description:Variable type (e.g. c for Constant, v for Data Layer, k for Cookie, jsm for Custom JavaScript)"
    },
    "variableId": {
      "type": "string",
      "description": "description:The variable ID to update"
    },
    "workspaceId": {
      "type": "string",
      "description": "description:The GTM workspace ID"
    }
  },
  "additionalProperties": false
}
```

</details>
