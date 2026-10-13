# paolobietolini/gtm-mcp-server

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/paolobietolini/gtm-mcp-server) · [Machine-readable inventory](../data/mcps/paolobietolini--gtm-mcp-server.json)

**96 extracted tools.** Manage server clients and transformations, import community templates, and synchronize workspace changes.

Snapshot: 2026-10-13 · [3b218624ba16](https://github.com/paolobietolini/gtm-mcp-server/tree/3b218624ba169390002a265ac830f2c10a028c2e) · Method: tools/list.

Exposure: Captured GTM_TOOL_GROUPS=all: 94 GTM tools plus ping/auth_status. Defaults expose 64 GTM tools plus 2 utilities. Optional groups environments, destinations, gtag, container-admin, folder-admin, workspace-admin, version-admin, reverts must be selected explicitly or via all.

## Limits

- Live Google API behavior was not exercised; extraction only initialized MCP registration and performed in-memory tools/list.
- auth_status checks OAuth token context only and can report unauthenticated in S2S mode despite an injected service-account token source.
- Several complex entity inputs are deliberately registered as JSON strings (for example parametersJson, changesJson, and entityJson); schemas preserve that public string surface rather than inventing nested API parameters.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`auth_status`](#tool-auth_status-50348a10) | Supporting | Checks the request context for OAuth token information; it does not check the service-account token source used by S2S mode. |
| [`bulk_update_workspace`](#tool-bulk_update_workspace-1affab96) | GTM | Validates and resolves the supplied GTM identifiers, then calls BulkUpdateWorkspace on the implemented Google Tag Manager client and returns the result. |
| [`combine_containers`](#tool-combine_containers-c87d4a1a) | GTM | Validates and resolves the supplied GTM identifiers, then calls CombineContainers on the implemented Google Tag Manager client and returns the result. |
| [`create_client`](#tool-create_client-6142e83d) | GTM | Validates and resolves the supplied GTM identifiers, then calls CreateClient on the implemented Google Tag Manager client and returns the result. |
| [`create_container`](#tool-create_container-352b1505) | GTM | Resolves the authenticated GTM client and calls Accounts.Containers.Create through the Google Tag Manager v2 SDK, then returns the result. |
| [`create_environment`](#tool-create_environment-eacd4263) | GTM | Validates and resolves the supplied GTM identifiers, then calls CreateEnvironment on the implemented Google Tag Manager client and returns the result. |
| [`create_folder`](#tool-create_folder-5b53fba3) | GTM | Validates and resolves the supplied GTM identifiers, then calls CreateFolder on the implemented Google Tag Manager client and returns the result. |
| [`create_google_tag_config`](#tool-create_google_tag_config-f1cc90ac) | GTM | Validates and resolves the supplied GTM identifiers, then calls CreateGoogleTagConfig on the implemented Google Tag Manager client and returns the result. |
| [`create_tag`](#tool-create_tag-e71dcc44) | GTM | Validates and resolves the supplied GTM identifiers, then calls CreateTag on the implemented Google Tag Manager client and returns the result. |
| [`create_template`](#tool-create_template-ccfe420c) | GTM | Resolves the authenticated GTM client and calls Accounts.Containers.Workspaces.Templates.Create through the Google Tag Manager v2 SDK, then returns the result. |
| [`create_transformation`](#tool-create_transformation-9ff603f0) | GTM | Validates and resolves the supplied GTM identifiers, then calls CreateTransformation on the implemented Google Tag Manager client and returns the result. |
| [`create_trigger`](#tool-create_trigger-71660c93) | GTM | Validates and resolves the supplied GTM identifiers, then calls CreateTrigger on the implemented Google Tag Manager client and returns the result. |
| [`create_variable`](#tool-create_variable-2f5e4ddb) | GTM | Validates and resolves the supplied GTM identifiers, then calls CreateVariable on the implemented Google Tag Manager client and returns the result. |
| [`create_version`](#tool-create_version-fc39e936) | GTM | Validates and resolves the supplied GTM identifiers, then calls GetWorkspaceStatus, CreateVersion on the implemented Google Tag Manager client and returns the result. |
| [`create_workspace`](#tool-create_workspace-a1af8425) | GTM | Resolves the authenticated GTM client and calls Accounts.Containers.Workspaces.Create through the Google Tag Manager v2 SDK, then returns the result. |
| [`create_zone`](#tool-create_zone-eb54dad2) | GTM | Validates and resolves the supplied GTM identifiers, then calls CreateZone on the implemented Google Tag Manager client and returns the result. |
| [`delete_client`](#tool-delete_client-2acb4417) | GTM | Validates and resolves the supplied GTM identifiers, then calls DeleteClient on the implemented Google Tag Manager client and returns the result. |
| [`delete_container`](#tool-delete_container-a8bba20f) | GTM | Validates and resolves the supplied GTM identifiers, then calls DeleteContainer on the implemented Google Tag Manager client and returns the result. |
| [`delete_environment`](#tool-delete_environment-0b7bb498) | GTM | Validates and resolves the supplied GTM identifiers, then calls DeleteEnvironment on the implemented Google Tag Manager client and returns the result. |
| [`delete_folder`](#tool-delete_folder-934d582b) | GTM | Validates and resolves the supplied GTM identifiers, then calls DeleteFolder on the implemented Google Tag Manager client and returns the result. |
| [`delete_google_tag_config`](#tool-delete_google_tag_config-92561dfc) | GTM | Validates and resolves the supplied GTM identifiers, then calls DeleteGoogleTagConfig on the implemented Google Tag Manager client and returns the result. |
| [`delete_tag`](#tool-delete_tag-1345d160) | GTM | Validates and resolves the supplied GTM identifiers, then calls DeleteTag on the implemented Google Tag Manager client and returns the result. |
| [`delete_template`](#tool-delete_template-02c8a6cb) | GTM | Resolves the authenticated GTM client and calls Accounts.Containers.Workspaces.Templates.Delete through the Google Tag Manager v2 SDK, then returns the result. |
| [`delete_transformation`](#tool-delete_transformation-e23da7c3) | GTM | Validates and resolves the supplied GTM identifiers, then calls DeleteTransformation on the implemented Google Tag Manager client and returns the result. |
| [`delete_trigger`](#tool-delete_trigger-ec67de91) | GTM | Validates and resolves the supplied GTM identifiers, then calls DeleteTrigger on the implemented Google Tag Manager client and returns the result. |
| [`delete_variable`](#tool-delete_variable-3ead6fdb) | GTM | Validates and resolves the supplied GTM identifiers, then calls DeleteVariable on the implemented Google Tag Manager client and returns the result. |
| [`delete_version`](#tool-delete_version-f7b6682e) | GTM | Validates and resolves the supplied GTM identifiers, then calls DeleteVersion on the implemented Google Tag Manager client and returns the result. |
| [`delete_workspace`](#tool-delete_workspace-50bbbf2e) | GTM | Validates and resolves the supplied GTM identifiers, then calls DeleteWorkspace on the implemented Google Tag Manager client and returns the result. |
| [`delete_zone`](#tool-delete_zone-056c0d00) | GTM | Validates and resolves the supplied GTM identifiers, then calls DeleteZone on the implemented Google Tag Manager client and returns the result. |
| [`disable_built_in_variables`](#tool-disable_built_in_variables-a7be9454) | GTM | Validates and resolves the supplied GTM identifiers, then calls DisableBuiltInVariables on the implemented Google Tag Manager client and returns the result. |
| [`enable_built_in_variables`](#tool-enable_built_in_variables-d3221371) | GTM | Validates and resolves the supplied GTM identifiers, then calls EnableBuiltInVariables on the implemented Google Tag Manager client and returns the result. |
| [`get_client`](#tool-get_client-2d47e9a6) | GTM | Validates and resolves the supplied GTM identifiers, then calls GetClient on the implemented Google Tag Manager client and returns the result. |
| [`get_container_snippet`](#tool-get_container_snippet-abfe46b2) | GTM | Validates and resolves the supplied GTM identifiers, then calls GetContainerSnippet on the implemented Google Tag Manager client and returns the result. |
| [`get_destination`](#tool-get_destination-524a1285) | GTM | Validates and resolves the supplied GTM identifiers, then calls GetDestination on the implemented Google Tag Manager client and returns the result. |
| [`get_environment`](#tool-get_environment-6589f882) | GTM | Validates and resolves the supplied GTM identifiers, then calls GetEnvironment on the implemented Google Tag Manager client and returns the result. |
| [`get_folder`](#tool-get_folder-e6226f1e) | GTM | Validates and resolves the supplied GTM identifiers, then calls GetFolder on the implemented Google Tag Manager client and returns the result. |
| [`get_folder_entities`](#tool-get_folder_entities-af7babd3) | GTM | Validates and resolves the supplied GTM identifiers, then calls GetFolderEntities on the implemented Google Tag Manager client and returns the result. |
| [`get_google_tag_config`](#tool-get_google_tag_config-bdaf26bd) | GTM | Validates and resolves the supplied GTM identifiers, then calls GetGoogleTagConfig on the implemented Google Tag Manager client and returns the result. |
| [`get_latest_version_header`](#tool-get_latest_version_header-e7218219) | GTM | Validates and resolves the supplied GTM identifiers, then calls LatestVersionHeader on the implemented Google Tag Manager client and returns the result. |
| [`get_live_version`](#tool-get_live_version-ffef26dc) | GTM | Validates and resolves the supplied GTM identifiers, then calls GetLiveContainerVersion on the implemented Google Tag Manager client and returns the result. |
| [`get_tag`](#tool-get_tag-749bab4b) | GTM | Validates and resolves the supplied GTM identifiers, then calls GetTag on the implemented Google Tag Manager client and returns the result. |
| [`get_tag_templates`](#tool-get_tag_templates-7475b430) | GTM | Returns local tag parameter examples and usage guidance without accessing Google APIs. |
| [`get_template`](#tool-get_template-99eb59af) | GTM | Resolves the authenticated GTM client and calls Accounts.Containers.Workspaces.Templates.Get through the Google Tag Manager v2 SDK, then returns the result. |
| [`get_transformation`](#tool-get_transformation-13553d72) | GTM | Validates and resolves the supplied GTM identifiers, then calls GetTransformation on the implemented Google Tag Manager client and returns the result. |
| [`get_trigger`](#tool-get_trigger-e2f13ee6) | GTM | Validates and resolves the supplied GTM identifiers, then calls GetTrigger on the implemented Google Tag Manager client and returns the result. |
| [`get_trigger_templates`](#tool-get_trigger_templates-c30240fc) | GTM | Returns local trigger structure examples and usage guidance without accessing Google APIs. |
| [`get_variable`](#tool-get_variable-ba0cd778) | GTM | Validates and resolves the supplied GTM identifiers, then calls GetVariable on the implemented Google Tag Manager client and returns the result. |
| [`get_version`](#tool-get_version-e67e6685) | GTM | Validates and resolves the supplied GTM identifiers, then calls GetContainerVersion on the implemented Google Tag Manager client and returns the result. |
| [`get_workspace`](#tool-get_workspace-80ffee6a) | GTM | Validates and resolves the supplied GTM identifiers, then calls GetWorkspace on the implemented Google Tag Manager client and returns the result. |
| [`get_workspace_status`](#tool-get_workspace_status-23f21bb9) | GTM | Validates and resolves the supplied GTM identifiers, then calls GetWorkspaceStatus on the implemented Google Tag Manager client and returns the result. |
| [`get_zone`](#tool-get_zone-81cb3a97) | GTM | Validates and resolves the supplied GTM identifiers, then calls GetZone on the implemented Google Tag Manager client and returns the result. |
| [`import_gallery_template`](#tool-import_gallery_template-2fc7e72c) | GTM | Resolves the authenticated GTM client and calls Accounts.Containers.Workspaces.Templates.ImportFromGallery through the Google Tag Manager v2 SDK, then returns the result. |
| [`link_destination`](#tool-link_destination-8b94917d) | GTM | Validates and resolves the supplied GTM identifiers, then calls LinkDestination on the implemented Google Tag Manager client and returns the result. |
| [`list_accounts`](#tool-list_accounts-1090ba6a) | GTM | Validates and resolves the supplied GTM identifiers, then calls ListAccounts on the implemented Google Tag Manager client and returns the result. |
| [`list_built_in_variables`](#tool-list_built_in_variables-598c2ffb) | GTM | Validates and resolves the supplied GTM identifiers, then calls ListBuiltInVariables on the implemented Google Tag Manager client and returns the result. |
| [`list_clients`](#tool-list_clients-916df1aa) | GTM | Validates and resolves the supplied GTM identifiers, then calls ListClients on the implemented Google Tag Manager client and returns the result. |
| [`list_containers`](#tool-list_containers-a53dbc4d) | GTM | Validates and resolves the supplied GTM identifiers, then calls ListContainers on the implemented Google Tag Manager client and returns the result. |
| [`list_destinations`](#tool-list_destinations-4f3091aa) | GTM | Validates and resolves the supplied GTM identifiers, then calls ListDestinations on the implemented Google Tag Manager client and returns the result. |
| [`list_environments`](#tool-list_environments-eb645b0f) | GTM | Validates and resolves the supplied GTM identifiers, then calls ListEnvironments on the implemented Google Tag Manager client and returns the result. |
| [`list_folders`](#tool-list_folders-786055b5) | GTM | Validates and resolves the supplied GTM identifiers, then calls ListFolders on the implemented Google Tag Manager client and returns the result. |
| [`list_google_tag_configs`](#tool-list_google_tag_configs-79a9baaa) | GTM | Validates and resolves the supplied GTM identifiers, then calls ListGoogleTagConfigs on the implemented Google Tag Manager client and returns the result. |
| [`list_tags`](#tool-list_tags-86fc0f9c) | GTM | Validates and resolves the supplied GTM identifiers, then calls ListTags on the implemented Google Tag Manager client and returns the result. |
| [`list_templates`](#tool-list_templates-f9ffad71) | GTM | Resolves the authenticated GTM client and calls Accounts.Containers.Workspaces.Templates.List through the Google Tag Manager v2 SDK, then returns the result. |
| [`list_transformations`](#tool-list_transformations-f386365b) | GTM | Validates and resolves the supplied GTM identifiers, then calls ListTransformations on the implemented Google Tag Manager client and returns the result. |
| [`list_triggers`](#tool-list_triggers-4ca44d74) | GTM | Validates and resolves the supplied GTM identifiers, then calls ListTriggers on the implemented Google Tag Manager client and returns the result. |
| [`list_variables`](#tool-list_variables-1adaa2a1) | GTM | Validates and resolves the supplied GTM identifiers, then calls ListVariables on the implemented Google Tag Manager client and returns the result. |
| [`list_versions`](#tool-list_versions-3eb8d6c0) | GTM | Validates and resolves the supplied GTM identifiers, then calls ListVersionHeaders on the implemented Google Tag Manager client and returns the result. |
| [`list_workspaces`](#tool-list_workspaces-af844119) | GTM | Validates and resolves the supplied GTM identifiers, then calls ListWorkspaces on the implemented Google Tag Manager client and returns the result. |
| [`list_zones`](#tool-list_zones-ab161553) | GTM | Validates and resolves the supplied GTM identifiers, then calls ListZones on the implemented Google Tag Manager client and returns the result. |
| [`lookup_container`](#tool-lookup_container-bdbb7fe1) | GTM | Validates and resolves the supplied GTM identifiers, then calls LookupContainer on the implemented Google Tag Manager client and returns the result. |
| [`move_entities_to_folder`](#tool-move_entities_to_folder-abdb631f) | GTM | Validates and resolves the supplied GTM identifiers, then calls MoveEntitiesToFolder on the implemented Google Tag Manager client and returns the result. |
| [`move_tag_id`](#tool-move_tag_id-fe781702) | GTM | Validates and resolves the supplied GTM identifiers, then calls MoveTagID on the implemented Google Tag Manager client and returns the result. |
| [`ping`](#tool-ping-758d61f2) | Supporting | Returns pong, an optional echoed message, and the current UTC timestamp. |
| [`publish_version`](#tool-publish_version-0628e4c5) | GTM | Validates and resolves the supplied GTM identifiers, then calls PublishVersion on the implemented Google Tag Manager client and returns the result. |
| [`quick_preview_workspace`](#tool-quick_preview_workspace-2e1cb327) | GTM | Validates and resolves the supplied GTM identifiers, then calls QuickPreviewWorkspace on the implemented Google Tag Manager client and returns the result. |
| [`reauthorize_environment`](#tool-reauthorize_environment-191d3333) | GTM | Validates and resolves the supplied GTM identifiers, then calls ReauthorizeEnvironment on the implemented Google Tag Manager client and returns the result. |
| [`resolve_workspace_conflict`](#tool-resolve_workspace_conflict-33394013) | GTM | Validates and resolves the supplied GTM identifiers, then calls ResolveWorkspaceConflict on the implemented Google Tag Manager client and returns the result. |
| [`revert_folder`](#tool-revert_folder-a2d986fe) | GTM | Validates and resolves the supplied GTM identifiers, then calls RevertFolder on the implemented Google Tag Manager client and returns the result. |
| [`revert_workspace_entity`](#tool-revert_workspace_entity-239cfa10) | GTM | Validates and resolves the supplied GTM identifiers, then calls RevertWorkspaceEntity on the implemented Google Tag Manager client and returns the result. |
| [`set_latest_version`](#tool-set_latest_version-fb529238) | GTM | Validates and resolves the supplied GTM identifiers, then calls SetLatestVersion on the implemented Google Tag Manager client and returns the result. |
| [`sync_workspace`](#tool-sync_workspace-4b02a6d9) | GTM | Validates and resolves the supplied GTM identifiers, then calls SyncWorkspace on the implemented Google Tag Manager client and returns the result. |
| [`undelete_version`](#tool-undelete_version-c548ac58) | GTM | Validates and resolves the supplied GTM identifiers, then calls UndeleteVersion on the implemented Google Tag Manager client and returns the result. |
| [`update_account`](#tool-update_account-ad80eae4) | GTM | Validates and resolves the supplied GTM identifiers, then calls UpdateAccount on the implemented Google Tag Manager client and returns the result. |
| [`update_client`](#tool-update_client-b54d9c9e) | GTM | Validates and resolves the supplied GTM identifiers, then calls UpdateClient on the implemented Google Tag Manager client and returns the result. |
| [`update_container`](#tool-update_container-cacd7302) | GTM | Validates and resolves the supplied GTM identifiers, then calls UpdateContainer on the implemented Google Tag Manager client and returns the result. |
| [`update_environment`](#tool-update_environment-b926ea2d) | GTM | Validates and resolves the supplied GTM identifiers, then calls UpdateEnvironment on the implemented Google Tag Manager client and returns the result. |
| [`update_folder`](#tool-update_folder-eb714a16) | GTM | Validates and resolves the supplied GTM identifiers, then calls UpdateFolder on the implemented Google Tag Manager client and returns the result. |
| [`update_google_tag_config`](#tool-update_google_tag_config-9a58b040) | GTM | Validates and resolves the supplied GTM identifiers, then calls UpdateGoogleTagConfig on the implemented Google Tag Manager client and returns the result. |
| [`update_tag`](#tool-update_tag-ff9e7962) | GTM | Validates and resolves the supplied GTM identifiers, then calls UpdateTag on the implemented Google Tag Manager client and returns the result. |
| [`update_template`](#tool-update_template-dbe66b4e) | GTM | Resolves the authenticated GTM client and calls Accounts.Containers.Workspaces.Templates.Get, Accounts.Containers.Workspaces.Templates.Update through the Google Tag Manager v2 SDK, then returns the result. |
| [`update_transformation`](#tool-update_transformation-67f8c3a8) | GTM | Validates and resolves the supplied GTM identifiers, then calls UpdateTransformation on the implemented Google Tag Manager client and returns the result. |
| [`update_trigger`](#tool-update_trigger-60ddeb77) | GTM | Validates and resolves the supplied GTM identifiers, then calls UpdateTrigger on the implemented Google Tag Manager client and returns the result. |
| [`update_variable`](#tool-update_variable-63c48ad7) | GTM | Validates and resolves the supplied GTM identifiers, then calls UpdateVariable on the implemented Google Tag Manager client and returns the result. |
| [`update_version`](#tool-update_version-23a8648e) | GTM | Validates and resolves the supplied GTM identifiers, then calls UpdateVersion on the implemented Google Tag Manager client and returns the result. |
| [`update_workspace`](#tool-update_workspace-1a76edb7) | GTM | Validates and resolves the supplied GTM identifiers, then calls UpdateWorkspace on the implemented Google Tag Manager client and returns the result. |
| [`update_zone`](#tool-update_zone-6369eede) | GTM | Validates and resolves the supplied GTM identifiers, then calls UpdateZone on the implemented Google Tag Manager client and returns the result. |

<a id="tool-auth_status-50348a10"></a>

## auth_status

Handler: Checks the request context for OAuth token information; it does not check the service-account token source used by S2S mode.

```text
Check authentication status with Google Tag Manager
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/main.go#L300-L341) · Schema: tools/list.

Exposure: Always registered utility tool.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "type": "object"
}
```

</details>

<a id="tool-bulk_update_workspace-1affab96"></a>

## bulk_update_workspace

Handler: Validates and resolves the supplied GTM identifiers, then calls BulkUpdateWorkspace on the implemented Google Tag Manager client and returns the result.

```text
Apply multiple GTM entity changes atomically. Requires confirm: true; new IDs must use the new_N format.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_workspace_operations.go#L46-L63) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "workspace-admin"; disabled by default; enabled by selecting this group or "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "changesJson": {
      "description": "JSON object containing a non-empty changes array of GTM Entity objects",
      "type": "string"
    },
    "confirm": {
      "description": "Must be true to apply all proposed workspace changes",
      "type": "boolean"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "changesJson",
    "confirm"
  ],
  "type": "object"
}
```

</details>

<a id="tool-combine_containers-c87d4a1a"></a>

## combine_containers

Handler: Validates and resolves the supplied GTM identifiers, then calls CombineContainers on the implemented Google Tag Manager client and returns the result.

```text
Merge another container into this target container. Requires confirm: true and never changes the user-permissions feature.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_container_admin.go#L35-L58) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "container-admin"; disabled by default; enabled by selecting this group or "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID shared by both containers",
      "type": "string"
    },
    "confirm": {
      "description": "Must be true to confirm the irreversible container combine",
      "type": "boolean"
    },
    "containerId": {
      "description": "The target container ID that remains after the combine",
      "type": "string"
    },
    "settingSource": {
      "description": "Which container settings to retain: current or other",
      "type": "string"
    },
    "sourceContainerId": {
      "description": "The container ID merged into the target",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "sourceContainerId",
    "settingSource",
    "confirm"
  ],
  "type": "object"
}
```

</details>

<a id="tool-create_client-6142e83d"></a>

## create_client

Handler: Validates and resolves the supplied GTM identifiers, then calls CreateClient on the implemented Google Tag Manager client and returns the result.

```text
Create a new client in a GTM workspace (server-side containers only)
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_create_client.go#L29-L71) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "server"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "name": {
      "description": "Client name",
      "type": "string"
    },
    "notes": {
      "description": "Client notes (optional)",
      "type": "string"
    },
    "parametersJson": {
      "description": "Client parameters as JSON array (optional). Each parameter: {type, key, value} or {type, key, list/map}",
      "type": "string"
    },
    "priority": {
      "description": "Client priority (optional, higher runs first)",
      "type": "integer"
    },
    "type": {
      "description": "Client type (e.g. __ga4 for GA4, __googtag for Google tag)",
      "type": "string"
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "name",
    "type"
  ],
  "type": "object"
}
```

</details>

<a id="tool-create_container-352b1505"></a>

## create_container

Handler: Resolves the authenticated GTM client and calls Accounts.Containers.Create through the Google Tag Manager v2 SDK, then returns the result.

```text
Create a new container in a GTM account. UsageContext specifies the container type (web, android, ios, amp, server).
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_create_container.go#L38-L96) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "accounts"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "domainName": {
      "description": "List of domain names associated with the container (optional)",
      "items": {
        "type": "string"
      },
      "type": [
        "null",
        "array"
      ]
    },
    "name": {
      "description": "Container display name",
      "type": "string"
    },
    "notes": {
      "description": "Container notes (optional)",
      "type": "string"
    },
    "taggingServerUrls": {
      "description": "Server-side container URLs (for server containers only)",
      "items": {
        "type": "string"
      },
      "type": [
        "null",
        "array"
      ]
    },
    "usageContext": {
      "description": "Usage context for the container. Valid values: web, android, ios, amp, server",
      "items": {
        "type": "string"
      },
      "type": [
        "null",
        "array"
      ]
    }
  },
  "required": [
    "accountId",
    "name",
    "usageContext"
  ],
  "type": "object"
}
```

</details>

<a id="tool-create_environment-eacd4263"></a>

## create_environment

Handler: Validates and resolves the supplied GTM identifiers, then calls CreateEnvironment on the implemented Google Tag Manager client and returns the result.

```text
Create a user GTM environment in a container.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_environments.go#L92-L111) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "environments"; disabled by default; enabled by selecting this group or "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "description": {
      "description": "Optional environment description",
      "type": "string"
    },
    "enableDebug": {
      "description": "Enable debugging by default",
      "type": "boolean"
    },
    "name": {
      "description": "Environment display name",
      "type": "string"
    },
    "url": {
      "description": "Optional default preview URL",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "name"
  ],
  "type": "object"
}
```

</details>

<a id="tool-create_folder-5b53fba3"></a>

## create_folder

Handler: Validates and resolves the supplied GTM identifiers, then calls CreateFolder on the implemented Google Tag Manager client and returns the result.

```text
Create a folder in a GTM workspace.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_folders.go#L135-L149) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "folder-admin"; disabled by default; enabled by selecting this group or "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "name": {
      "description": "Folder display name",
      "type": "string"
    },
    "notes": {
      "description": "Optional folder notes",
      "type": "string"
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "name"
  ],
  "type": "object"
}
```

</details>

<a id="tool-create_google_tag_config-f1cc90ac"></a>

## create_google_tag_config

Handler: Validates and resolves the supplied GTM identifiers, then calls CreateGoogleTagConfig on the implemented Google Tag Manager client and returns the result.

```text
Create a Google tag configuration in a workspace.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_gtag_configs.go#L80-L103) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "gtag"; disabled by default; enabled by selecting this group or "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "parametersJson": {
      "description": "Google tag parameters as a JSON array; each parameter has type, key, value, list, or map fields",
      "type": "string"
    },
    "type": {
      "description": "The Google tag configuration type",
      "type": "string"
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "type"
  ],
  "type": "object"
}
```

</details>

<a id="tool-create_tag-e71dcc44"></a>

## create_tag

Handler: Validates and resolves the supplied GTM identifiers, then calls CreateTag on the implemented Google Tag Manager client and returns the result.

```text
Create a new tag in a GTM workspace. Requires at least one firing trigger ID. Always call get_tag_templates before creating GA4 tags
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_create_tag.go#L37-L113) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "tags"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "blockingTriggerIds": {
      "description": "Array of trigger IDs that block this tag (optional)",
      "items": {
        "type": "string"
      },
      "type": [
        "null",
        "array"
      ]
    },
    "consentStatus": {
      "description": "Consent status: notSet (default)\\, notNeeded (no consent required)\\, needed (requires consent types to be granted before firing).",
      "type": "string"
    },
    "consentTypes": {
      "description": "Comma-separated consent types when consentStatus is needed (e.g. ad_storage\\,analytics_storage\\,ad_user_data\\,ad_personalization). Ignored when consentStatus is notSet or notNeeded.",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "firingTriggerIds": {
      "description": "Array of trigger IDs that fire this tag",
      "items": {
        "type": "string"
      },
      "type": [
        "null",
        "array"
      ]
    },
    "name": {
      "description": "Tag name",
      "type": "string"
    },
    "notes": {
      "description": "Tag notes (optional)",
      "type": "string"
    },
    "parametersJson": {
      "description": "JSON parameters; see gtm://best-practices/tool-input-formats",
      "type": "string"
    },
    "paused": {
      "description": "Whether tag is paused (optional)",
      "type": "boolean"
    },
    "setupTagJson": {
      "description": "JSON setup sequence; see gtm://best-practices/tool-input-formats",
      "type": "string"
    },
    "teardownTagJson": {
      "description": "JSON teardown sequence; see gtm://best-practices/tool-input-formats",
      "type": "string"
    },
    "type": {
      "description": "Tag type (e.g. gaawe for GA4, html for Custom HTML)",
      "type": "string"
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "name",
    "type",
    "firingTriggerIds"
  ],
  "type": "object"
}
```

</details>

<a id="tool-create_template-ccfe420c"></a>

## create_template

Handler: Resolves the authenticated GTM client and calls Accounts.Containers.Workspaces.Templates.Create through the Google Tag Manager v2 SDK, then returns the result.

```text
Create a new custom template in a GTM workspace. Requires the full template code in .tpl format. For gallery templates, use import_gallery_template instead.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_create_template.go#L31-L72) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "templates"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "name": {
      "description": "Template display name",
      "type": "string"
    },
    "templateData": {
      "description": "The template code in .tpl format (the full template file content)",
      "type": "string"
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "name",
    "templateData"
  ],
  "type": "object"
}
```

</details>

<a id="tool-create_transformation-9ff603f0"></a>

## create_transformation

Handler: Validates and resolves the supplied GTM identifiers, then calls CreateTransformation on the implemented Google Tag Manager client and returns the result.

```text
Create a transformation in a server-side workspace. Read gtm://best-practices/tool-input-formats for parameter table shapes.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_create_transformation.go#L28-L69) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "server"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "name": {
      "description": "Transformation name",
      "type": "string"
    },
    "notes": {
      "description": "Transformation notes (optional)",
      "type": "string"
    },
    "parametersJson": {
      "description": "JSON parameter array; see gtm://best-practices/tool-input-formats",
      "type": "string"
    },
    "type": {
      "description": "One of tf_exclude_params, tf_allow_params, or tf_augment_event",
      "type": "string"
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "name",
    "type"
  ],
  "type": "object"
}
```

</details>

<a id="tool-create_trigger-71660c93"></a>

## create_trigger

Handler: Validates and resolves the supplied GTM identifiers, then calls CreateTrigger on the implemented Google Tag Manager client and returns the result.

```text
Create a workspace trigger. Read gtm://best-practices/tool-input-formats for condition and trigger-group shapes.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_create_trigger.go#L31-L108) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "triggers"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "autoEventFilterJson": {
      "description": "JSON auto-event conditions; see gtm://best-practices/tool-input-formats",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "customEventFilterJson": {
      "description": "JSON custom-event conditions; required for customEvent; see gtm://best-practices/tool-input-formats",
      "type": "string"
    },
    "eventNameJson": {
      "description": "Event name as JSON object {type, value} for timer triggers (optional)",
      "type": "string"
    },
    "filterJson": {
      "description": "JSON conditions; see gtm://best-practices/tool-input-formats",
      "type": "string"
    },
    "name": {
      "description": "Trigger name",
      "type": "string"
    },
    "notes": {
      "description": "Trigger notes (optional)",
      "type": "string"
    },
    "type": {
      "description": "Trigger type (e.g. pageview, customEvent, linkClick, formSubmission, timer)",
      "type": "string"
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "name",
    "type"
  ],
  "type": "object"
}
```

</details>

<a id="tool-create_variable-2f5e4ddb"></a>

## create_variable

Handler: Validates and resolves the supplied GTM identifiers, then calls CreateVariable on the implemented Google Tag Manager client and returns the result.

```text
Create a new variable in a GTM workspace. Common types: c (Constant), v (Data Layer), k (Cookie), jsm (Custom JavaScript), u (URL). For DLV variables, omit defaultValue entirely or use type template, never type integer with empty value
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_create_variable.go#L28-L71) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "variables"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "name": {
      "description": "Variable name",
      "type": "string"
    },
    "notes": {
      "description": "Variable notes (optional)",
      "type": "string"
    },
    "parametersJson": {
      "description": "Variable parameters as JSON array (required for most types)",
      "type": "string"
    },
    "type": {
      "description": "Variable type (e.g. c for Constant, v for Data Layer, k for Cookie, jsm for Custom JavaScript)",
      "type": "string"
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "name",
    "type"
  ],
  "type": "object"
}
```

</details>

<a id="tool-create_version-fc39e936"></a>

## create_version

Handler: Validates and resolves the supplied GTM identifiers, then calls GetWorkspaceStatus, CreateVersion on the implemented Google Tag Manager client and returns the result.

```text
Create a new container version from workspace changes. This snapshots the current workspace state but does not publish it.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_version.go#L41-L95) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "workspaces"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "name": {
      "description": "Version name (optional)",
      "type": "string"
    },
    "notes": {
      "description": "Version notes describing changes (optional)",
      "type": "string"
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "type": "object"
}
```

</details>

<a id="tool-create_workspace-a1af8425"></a>

## create_workspace

Handler: Resolves the authenticated GTM client and calls Accounts.Containers.Workspaces.Create through the Google Tag Manager v2 SDK, then returns the result.

```text
Create a new workspace in a GTM container. Workspaces are used to make changes that can later be versioned and published.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_create_workspace.go#L35-L74) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "workspaces"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "description": {
      "description": "Workspace description (optional)",
      "type": "string"
    },
    "name": {
      "description": "Workspace display name",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "name"
  ],
  "type": "object"
}
```

</details>

<a id="tool-create_zone-eb54dad2"></a>

## create_zone

Handler: Validates and resolves the supplied GTM identifiers, then calls CreateZone on the implemented Google Tag Manager client and returns the result.

```text
Create a zone in a GTM workspace.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_zones.go#L95-L123) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "zones"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "boundaryConditionsJson": {
      "description": "JSON array of boundary conditions; see the trigger condition format",
      "type": "string"
    },
    "childContainers": {
      "description": "Containers governed as children of this zone",
      "items": {
        "additionalProperties": false,
        "properties": {
          "nickname": {
            "description": "Optional nickname inside the zone",
            "type": "string"
          },
          "publicId": {
            "description": "Child container public ID such as GTM-ABC123",
            "type": "string"
          }
        },
        "required": [
          "publicId"
        ],
        "type": "object"
      },
      "type": [
        "null",
        "array"
      ]
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "customEvaluationTriggerIds": {
      "description": "Trigger IDs that cause boundary evaluation",
      "items": {
        "type": "string"
      },
      "type": [
        "null",
        "array"
      ]
    },
    "name": {
      "description": "Zone display name",
      "type": "string"
    },
    "notes": {
      "description": "Optional zone notes",
      "type": "string"
    },
    "typeRestriction": {
      "additionalProperties": false,
      "description": "Optional tag type restriction settings",
      "properties": {
        "enabled": {
          "description": "Whether tag type restrictions are enabled",
          "type": "boolean"
        },
        "whitelistedTypeIds": {
          "description": "Allowed tag template public IDs",
          "items": {
            "type": "string"
          },
          "type": [
            "null",
            "array"
          ]
        }
      },
      "required": [
        "enabled"
      ],
      "type": [
        "null",
        "object"
      ]
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "name"
  ],
  "type": "object"
}
```

</details>

<a id="tool-delete_client-2acb4417"></a>

## delete_client

Handler: Validates and resolves the supplied GTM identifiers, then calls DeleteClient on the implemented Google Tag Manager client and returns the result.

```text
Delete a client from a workspace. Requires confirm: true as a safety guard. Server-side containers only.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_delete_client.go#L25-L59) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "server"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "clientId": {
      "description": "The client ID to delete",
      "type": "string"
    },
    "confirm": {
      "description": "Must be true to confirm deletion. This is a safety guard.",
      "type": "boolean"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "clientId",
    "confirm"
  ],
  "type": "object"
}
```

</details>

<a id="tool-delete_container-a8bba20f"></a>

## delete_container

Handler: Validates and resolves the supplied GTM identifiers, then calls DeleteContainer on the implemented Google Tag Manager client and returns the result.

```text
Delete a GTM container. Requires confirm: true as a safety guard. WARNING: This permanently deletes the container and ALL its contents including tags, triggers, variables, and versions.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_delete_container.go#L23-L54) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "accounts"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "confirm": {
      "description": "Must be true to confirm deletion. This is a safety guard.",
      "type": "boolean"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "confirm"
  ],
  "type": "object"
}
```

</details>

<a id="tool-delete_environment-0b7bb498"></a>

## delete_environment

Handler: Validates and resolves the supplied GTM identifiers, then calls DeleteEnvironment on the implemented Google Tag Manager client and returns the result.

```text
Delete a user GTM environment. Requires confirm: true.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_environments.go#L154-L170) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "environments"; disabled by default; enabled by selecting this group or "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "confirm": {
      "description": "Must be true to confirm the operation",
      "type": "boolean"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "environmentId": {
      "description": "The GTM environment ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "environmentId",
    "confirm"
  ],
  "type": "object"
}
```

</details>

<a id="tool-delete_folder-934d582b"></a>

## delete_folder

Handler: Validates and resolves the supplied GTM identifiers, then calls DeleteFolder on the implemented Google Tag Manager client and returns the result.

```text
Delete a GTM folder. Requires confirm: true.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_folders.go#L168-L182) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "folder-admin"; disabled by default; enabled by selecting this group or "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "confirm": {
      "description": "Must be true to confirm the operation",
      "type": "boolean"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "folderId": {
      "description": "The folder ID",
      "type": "string"
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "folderId",
    "confirm"
  ],
  "type": "object"
}
```

</details>

<a id="tool-delete_google_tag_config-92561dfc"></a>

## delete_google_tag_config

Handler: Validates and resolves the supplied GTM identifiers, then calls DeleteGoogleTagConfig on the implemented Google Tag Manager client and returns the result.

```text
Delete a Google tag configuration. Requires confirm: true.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_gtag_configs.go#L133-L149) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "gtag"; disabled by default; enabled by selecting this group or "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "confirm": {
      "description": "Must be true to confirm deletion",
      "type": "boolean"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "gtagConfigId": {
      "description": "The Google tag config ID",
      "type": "string"
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "gtagConfigId",
    "confirm"
  ],
  "type": "object"
}
```

</details>

<a id="tool-delete_tag-1345d160"></a>

## delete_tag

Handler: Validates and resolves the supplied GTM identifiers, then calls DeleteTag on the implemented Google Tag Manager client and returns the result.

```text
Delete a tag from a workspace. Requires confirm: true as a safety guard.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_delete_tag.go#L25-L61) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "tags"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "confirm": {
      "description": "Must be true to confirm deletion. This is a safety guard.",
      "type": "boolean"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "tagId": {
      "description": "The tag ID to delete",
      "type": "string"
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "tagId",
    "confirm"
  ],
  "type": "object"
}
```

</details>

<a id="tool-delete_template-02c8a6cb"></a>

## delete_template

Handler: Resolves the authenticated GTM client and calls Accounts.Containers.Workspaces.Templates.Delete through the Google Tag Manager v2 SDK, then returns the result.

```text
Delete a custom template from a workspace. Requires confirm: true as a safety guard. Note: Templates that are in use by tags cannot be deleted.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_delete_template.go#L25-L60) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "templates"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "confirm": {
      "description": "Must be true to confirm deletion. This is a safety guard.",
      "type": "boolean"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "templateId": {
      "description": "The template ID to delete",
      "type": "string"
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "templateId",
    "confirm"
  ],
  "type": "object"
}
```

</details>

<a id="tool-delete_transformation-e23da7c3"></a>

## delete_transformation

Handler: Validates and resolves the supplied GTM identifiers, then calls DeleteTransformation on the implemented Google Tag Manager client and returns the result.

```text
Delete a transformation from a workspace. Requires confirm: true as a safety guard. Server-side containers only.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_delete_transformation.go#L25-L59) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "server"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "confirm": {
      "description": "Must be true to confirm deletion. This is a safety guard.",
      "type": "boolean"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "transformationId": {
      "description": "The transformation ID to delete",
      "type": "string"
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "transformationId",
    "confirm"
  ],
  "type": "object"
}
```

</details>

<a id="tool-delete_trigger-ec67de91"></a>

## delete_trigger

Handler: Validates and resolves the supplied GTM identifiers, then calls DeleteTrigger on the implemented Google Tag Manager client and returns the result.

```text
Delete a trigger from a workspace. Requires confirm: true as a safety guard. Note: Triggers that are members of a trigger group cannot be deleted until the trigger group is deleted first.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_delete_trigger.go#L25-L61) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "triggers"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "confirm": {
      "description": "Must be true to confirm deletion. This is a safety guard.",
      "type": "boolean"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "triggerId": {
      "description": "The trigger ID to delete",
      "type": "string"
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "triggerId",
    "confirm"
  ],
  "type": "object"
}
```

</details>

<a id="tool-delete_variable-3ead6fdb"></a>

## delete_variable

Handler: Validates and resolves the supplied GTM identifiers, then calls DeleteVariable on the implemented Google Tag Manager client and returns the result.

```text
Delete a variable from a workspace. Requires confirm: true as a safety guard.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_delete_variable.go#L25-L61) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "variables"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "confirm": {
      "description": "Must be true to confirm deletion. This is a safety guard.",
      "type": "boolean"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "variableId": {
      "description": "The variable ID to delete",
      "type": "string"
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "variableId",
    "confirm"
  ],
  "type": "object"
}
```

</details>

<a id="tool-delete_version-f7b6682e"></a>

## delete_version

Handler: Validates and resolves the supplied GTM identifiers, then calls DeleteVersion on the implemented Google Tag Manager client and returns the result.

```text
Soft-delete a container version. Requires confirm: true and can be reversed with undelete_version.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_version_lifecycle.go#L34-L48) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "version-admin"; disabled by default; enabled by selecting this group or "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "confirm": {
      "description": "Must be true to confirm the version state change",
      "type": "boolean"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "versionId": {
      "description": "The container version ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "versionId",
    "confirm"
  ],
  "type": "object"
}
```

</details>

<a id="tool-delete_workspace-50bbbf2e"></a>

## delete_workspace

Handler: Validates and resolves the supplied GTM identifiers, then calls DeleteWorkspace on the implemented Google Tag Manager client and returns the result.

```text
Delete a workspace and its pending changes. Requires confirm: true.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_workspace_metadata.go#L95-L113) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "workspaces"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "confirm": {
      "description": "Must be true to confirm workspace deletion",
      "type": "boolean"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "confirm"
  ],
  "type": "object"
}
```

</details>

<a id="tool-delete_zone-056c0d00"></a>

## delete_zone

Handler: Validates and resolves the supplied GTM identifiers, then calls DeleteZone on the implemented Google Tag Manager client and returns the result.

```text
Delete a zone and require confirm: true.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_zones.go#L163-L179) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "zones"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "confirm": {
      "description": "Must be true to confirm zone deletion",
      "type": "boolean"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    },
    "zoneId": {
      "description": "The GTM zone ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "zoneId",
    "confirm"
  ],
  "type": "object"
}
```

</details>

<a id="tool-disable_built_in_variables-a7be9454"></a>

## disable_built_in_variables

Handler: Validates and resolves the supplied GTM identifiers, then calls DisableBuiltInVariables on the implemented Google Tag Manager client and returns the result.

```text
Disable one or more built-in variable types. Requires confirm: true as a safety guard.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_built_in_variables.go#L102-L134) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "builtins"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "confirm": {
      "description": "Must be true to confirm disabling. This is a safety guard.",
      "type": "boolean"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "types": {
      "description": "Array of built-in variable types to disable",
      "items": {
        "type": "string"
      },
      "type": [
        "null",
        "array"
      ]
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "types",
    "confirm"
  ],
  "type": "object"
}
```

</details>

<a id="tool-enable_built_in_variables-d3221371"></a>

## enable_built_in_variables

Handler: Validates and resolves the supplied GTM identifiers, then calls EnableBuiltInVariables on the implemented Google Tag Manager client and returns the result.

```text
Enable one or more built-in variable types in a GTM workspace
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_built_in_variables.go#L58-L101) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "builtins"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "types": {
      "description": "Array of built-in variable types to enable (e.g. eventName, clientName, requestPath, pageUrl, event)",
      "items": {
        "type": "string"
      },
      "type": [
        "null",
        "array"
      ]
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "types"
  ],
  "type": "object"
}
```

</details>

<a id="tool-get_client-2d47e9a6"></a>

## get_client

Handler: Validates and resolves the supplied GTM identifiers, then calls GetClient on the implemented Google Tag Manager client and returns the result.

```text
Get a specific client by ID (server-side containers only)
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_clients.go#L55-L74) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "server"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "clientId": {
      "description": "The client ID to retrieve",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "clientId"
  ],
  "type": "object"
}
```

</details>

<a id="tool-get_container_snippet-abfe46b2"></a>

## get_container_snippet

Handler: Validates and resolves the supplied GTM identifiers, then calls GetContainerSnippet on the implemented Google Tag Manager client and returns the result.

```text
Get the install snippet for a web container or provisioning configuration for a server container.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_inspection.go#L94-L109) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "accounts"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId"
  ],
  "type": "object"
}
```

</details>

<a id="tool-get_destination-524a1285"></a>

## get_destination

Handler: Validates and resolves the supplied GTM identifiers, then calls GetDestination on the implemented Google Tag Manager client and returns the result.

```text
Get a Google tag destination by its container-specific link ID.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_destinations.go#L44-L61) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "destinations"; disabled by default; enabled by selecting this group or "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "destinationLinkId": {
      "description": "The container-specific destination link ID returned by list_destinations",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "destinationLinkId"
  ],
  "type": "object"
}
```

</details>

<a id="tool-get_environment-6589f882"></a>

## get_environment

Handler: Validates and resolves the supplied GTM identifiers, then calls GetEnvironment on the implemented Google Tag Manager client and returns the result.

```text
Get a GTM environment, including its preview URL and authorization metadata.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_environments.go#L77-L91) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "environments"; disabled by default; enabled by selecting this group or "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "environmentId": {
      "description": "The GTM environment ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "environmentId"
  ],
  "type": "object"
}
```

</details>

<a id="tool-get_folder-e6226f1e"></a>

## get_folder

Handler: Validates and resolves the supplied GTM identifiers, then calls GetFolder on the implemented Google Tag Manager client and returns the result.

```text
Get a GTM folder by ID.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_folders.go#L123-L134) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "folder-admin"; disabled by default; enabled by selecting this group or "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "folderId": {
      "description": "The folder ID",
      "type": "string"
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "folderId"
  ],
  "type": "object"
}
```

</details>

<a id="tool-get_folder_entities-af7babd3"></a>

## get_folder_entities

Handler: Validates and resolves the supplied GTM identifiers, then calls GetFolderEntities on the implemented Google Tag Manager client and returns the result.

```text
Get the tags, triggers, and variables inside a specific folder.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_folders.go#L102-L122) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "folders"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "folderId": {
      "description": "The folder ID",
      "type": "string"
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "folderId"
  ],
  "type": "object"
}
```

</details>

<a id="tool-get_google_tag_config-bdaf26bd"></a>

## get_google_tag_config

Handler: Validates and resolves the supplied GTM identifiers, then calls GetGoogleTagConfig on the implemented Google Tag Manager client and returns the result.

```text
Get a Google tag configuration by ID.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_gtag_configs.go#L65-L79) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "gtag"; disabled by default; enabled by selecting this group or "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "gtagConfigId": {
      "description": "The Google tag config ID",
      "type": "string"
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "gtagConfigId"
  ],
  "type": "object"
}
```

</details>

<a id="tool-get_latest_version_header-e7218219"></a>

## get_latest_version_header

Handler: Validates and resolves the supplied GTM identifiers, then calls LatestVersionHeader on the implemented Google Tag Manager client and returns the result.

```text
Get the latest container version header. The latest version may differ from the published live version.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_get_latest_version_header.go#L15-L34) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "workspaces"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId"
  ],
  "type": "object"
}
```

</details>

<a id="tool-get_live_version-ffef26dc"></a>

## get_live_version

Handler: Validates and resolves the supplied GTM identifiers, then calls GetLiveContainerVersion on the implemented Google Tag Manager client and returns the result.

```text
Get the published live container version with its complete entity collections.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_inspection.go#L55-L71) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "workspaces"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId"
  ],
  "type": "object"
}
```

</details>

<a id="tool-get_tag-749bab4b"></a>

## get_tag

Handler: Validates and resolves the supplied GTM identifiers, then calls GetTag on the implemented Google Tag Manager client and returns the result.

```text
Get a specific tag by ID
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_tags.go#L49-L68) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "tags"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "tagId": {
      "description": "The tag ID to retrieve",
      "type": "string"
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "tagId"
  ],
  "type": "object"
}
```

</details>

<a id="tool-get_tag_templates-7475b430"></a>

## get_tag_templates

Handler: Returns local tag parameter examples and usage guidance without accessing Google APIs.

```text
Get example parameter structures for creating GTM tags. Use this BEFORE creating GA4 or complex tags to see the correct parameter format.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_templates.go#L15-L42) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "guidance"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "type": "object"
}
```

</details>

<a id="tool-get_template-99eb59af"></a>

## get_template

Handler: Resolves the authenticated GTM client and calls Accounts.Containers.Workspaces.Templates.Get through the Google Tag Manager v2 SDK, then returns the result.

```text
Get a specific custom template by ID. Returns full template details including the template code.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_get_template.go#L31-L80) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "templates"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "templateId": {
      "description": "The template ID to retrieve",
      "type": "string"
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "templateId"
  ],
  "type": "object"
}
```

</details>

<a id="tool-get_transformation-13553d72"></a>

## get_transformation

Handler: Validates and resolves the supplied GTM identifiers, then calls GetTransformation on the implemented Google Tag Manager client and returns the result.

```text
Get a specific transformation by ID (server-side containers only)
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_transformations.go#L55-L74) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "server"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "transformationId": {
      "description": "The transformation ID to retrieve",
      "type": "string"
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "transformationId"
  ],
  "type": "object"
}
```

</details>

<a id="tool-get_trigger-e2f13ee6"></a>

## get_trigger

Handler: Validates and resolves the supplied GTM identifiers, then calls GetTrigger on the implemented Google Tag Manager client and returns the result.

```text
Get a specific trigger by ID
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_get_trigger.go#L20-L43) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "triggers"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "triggerId": {
      "description": "The trigger ID to retrieve",
      "type": "string"
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "triggerId"
  ],
  "type": "object"
}
```

</details>

<a id="tool-get_trigger_templates-c30240fc"></a>

## get_trigger_templates

Handler: Returns local trigger structure examples and usage guidance without accessing Google APIs.

```text
Get example structures for creating GTM triggers. Use this to see the correct format for different trigger types.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_templates.go#L43-L60) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "guidance"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "type": "object"
}
```

</details>

<a id="tool-get_variable-ba0cd778"></a>

## get_variable

Handler: Validates and resolves the supplied GTM identifiers, then calls GetVariable on the implemented Google Tag Manager client and returns the result.

```text
Get a specific variable by ID
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_get_variable.go#L20-L43) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "variables"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "variableId": {
      "description": "The variable ID to retrieve",
      "type": "string"
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "variableId"
  ],
  "type": "object"
}
```

</details>

<a id="tool-get_version-e67e6685"></a>

## get_version

Handler: Validates and resolves the supplied GTM identifiers, then calls GetContainerVersion on the implemented Google Tag Manager client and returns the result.

```text
Get a saved container version with its tags, triggers, variables, templates, and other entities.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_inspection.go#L34-L54) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "workspaces"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "versionId": {
      "description": "The saved container version ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "versionId"
  ],
  "type": "object"
}
```

</details>

<a id="tool-get_workspace-80ffee6a"></a>

## get_workspace

Handler: Validates and resolves the supplied GTM identifiers, then calls GetWorkspace on the implemented Google Tag Manager client and returns the result.

```text
Get workspace metadata including its current fingerprint.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_workspace_metadata.go#L51-L67) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "workspaces"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "type": "object"
}
```

</details>

<a id="tool-get_workspace_status-23f21bb9"></a>

## get_workspace_status

Handler: Validates and resolves the supplied GTM identifiers, then calls GetWorkspaceStatus on the implemented Google Tag Manager client and returns the result.

```text
Check if a workspace has pending changes or merge conflicts before versioning.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_workspace_status.go#L18-L37) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "workspaces"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "type": "object"
}
```

</details>

<a id="tool-get_zone-81cb3a97"></a>

## get_zone

Handler: Validates and resolves the supplied GTM identifiers, then calls GetZone on the implemented Google Tag Manager client and returns the result.

```text
Get a zone and its boundary, child containers, and type restrictions.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_zones.go#L80-L94) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "zones"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    },
    "zoneId": {
      "description": "The GTM zone ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "zoneId"
  ],
  "type": "object"
}
```

</details>

<a id="tool-import_gallery_template-2fc7e72c"></a>

## import_gallery_template

Handler: Resolves the authenticated GTM client and calls Accounts.Containers.Workspaces.Templates.ImportFromGallery through the Google Tag Manager v2 SDK, then returns the result.

```text
Import a GTM Custom Template from the Community Template Gallery into a workspace. Returns the template type string to use when creating tags. Example: import_gallery_template(galleryOwner='iubenda', galleryRepository='gtm-cookie-solution')
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_import_gallery_template.go#L27-L87) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "templates"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "galleryOwner": {
      "description": "Owner of the Gallery template (e.g. 'iubenda' or 'GoogleAnalytics')",
      "type": "string"
    },
    "galleryRepository": {
      "description": "Repository of the Gallery template (e.g. 'gtm-cookie-solution')",
      "type": "string"
    },
    "gallerySha": {
      "description": "SHA version of the Gallery template. Defaults to latest if not provided",
      "type": "string"
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "galleryOwner",
    "galleryRepository"
  ],
  "type": "object"
}
```

</details>

<a id="tool-link_destination-8b94917d"></a>

## link_destination

Handler: Validates and resolves the supplied GTM identifiers, then calls LinkDestination on the implemented Google Tag Manager client and returns the result.

```text
Move a Google tag destination to this container. Requires confirm: true; user permissions are not copied or changed.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_destinations.go#L62-L81) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "destinations"; disabled by default; enabled by selecting this group or "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The receiving GTM account ID",
      "type": "string"
    },
    "confirm": {
      "description": "Must be true because linking moves the destination from its current container",
      "type": "boolean"
    },
    "containerId": {
      "description": "The receiving GTM container ID",
      "type": "string"
    },
    "destinationId": {
      "description": "The destination ID to move to this container",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "destinationId",
    "confirm"
  ],
  "type": "object"
}
```

</details>

<a id="tool-list_accounts-1090ba6a"></a>

## list_accounts

Handler: Validates and resolves the supplied GTM identifiers, then calls ListAccounts on the implemented Google Tag Manager client and returns the result.

```text
List all GTM accounts accessible to the authenticated user
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_accounts.go#L14-L33) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "accounts"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "type": "object"
}
```

</details>

<a id="tool-list_built_in_variables-598c2ffb"></a>

## list_built_in_variables

Handler: Validates and resolves the supplied GTM identifiers, then calls ListBuiltInVariables on the implemented Google Tag Manager client and returns the result.

```text
List all enabled built-in variables in a GTM workspace
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_built_in_variables.go#L22-L57) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "builtins"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "type": "object"
}
```

</details>

<a id="tool-list_clients-916df1aa"></a>

## list_clients

Handler: Validates and resolves the supplied GTM identifiers, then calls ListClients on the implemented Google Tag Manager client and returns the result.

```text
List all clients in a GTM workspace (server-side containers only)
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_clients.go#L21-L54) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "server"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "type": "object"
}
```

</details>

<a id="tool-list_containers-a53dbc4d"></a>

## list_containers

Handler: Validates and resolves the supplied GTM identifiers, then calls ListContainers on the implemented Google Tag Manager client and returns the result.

```text
List all containers in a GTM account
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_containers.go#L16-L35) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "accounts"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    }
  },
  "required": [
    "accountId"
  ],
  "type": "object"
}
```

</details>

<a id="tool-list_destinations-4f3091aa"></a>

## list_destinations

Handler: Validates and resolves the supplied GTM identifiers, then calls ListDestinations on the implemented Google Tag Manager client and returns the result.

```text
List Google tag destinations linked to a GTM container.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_destinations.go#L32-L43) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "destinations"; disabled by default; enabled by selecting this group or "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId"
  ],
  "type": "object"
}
```

</details>

<a id="tool-list_environments-eb645b0f"></a>

## list_environments

Handler: Validates and resolves the supplied GTM identifiers, then calls ListEnvironments on the implemented Google Tag Manager client and returns the result.

```text
List all GTM environments in a container across every result page.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_environments.go#L65-L76) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "environments"; disabled by default; enabled by selecting this group or "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId"
  ],
  "type": "object"
}
```

</details>

<a id="tool-list_folders-786055b5"></a>

## list_folders

Handler: Validates and resolves the supplied GTM identifiers, then calls ListFolders on the implemented Google Tag Manager client and returns the result.

```text
List all folders (trigger groups) in a GTM workspace. Folders help organize tags, triggers, and variables.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_folders.go#L81-L101) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "folders"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "type": "object"
}
```

</details>

<a id="tool-list_google_tag_configs-79a9baaa"></a>

## list_google_tag_configs

Handler: Validates and resolves the supplied GTM identifiers, then calls ListGoogleTagConfigs on the implemented Google Tag Manager client and returns the result.

```text
List Google tag configurations in a workspace across every result page.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_gtag_configs.go#L53-L64) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "gtag"; disabled by default; enabled by selecting this group or "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "type": "object"
}
```

</details>

<a id="tool-list_tags-86fc0f9c"></a>

## list_tags

Handler: Validates and resolves the supplied GTM identifiers, then calls ListTags on the implemented Google Tag Manager client and returns the result.

```text
List all tags in a GTM workspace
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_tags.go#L28-L48) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "tags"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "type": "object"
}
```

</details>

<a id="tool-list_templates-f9ffad71"></a>

## list_templates

Handler: Resolves the authenticated GTM client and calls Accounts.Containers.Workspaces.Templates.List through the Google Tag Manager v2 SDK, then returns the result.

```text
List all GTM Custom Templates in a workspace. Returns template IDs and their type strings (cvt_{galleryTemplateId} for gallery templates) for use when creating tags.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_list_templates.go#L40-L89) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "templates"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "type": "object"
}
```

</details>

<a id="tool-list_transformations-f386365b"></a>

## list_transformations

Handler: Validates and resolves the supplied GTM identifiers, then calls ListTransformations on the implemented Google Tag Manager client and returns the result.

```text
List all transformations in a GTM workspace (server-side containers only)
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_transformations.go#L21-L54) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "server"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "type": "object"
}
```

</details>

<a id="tool-list_triggers-4ca44d74"></a>

## list_triggers

Handler: Validates and resolves the supplied GTM identifiers, then calls ListTriggers on the implemented Google Tag Manager client and returns the result.

```text
List all triggers in a GTM workspace
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_triggers.go#L18-L37) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "triggers"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "type": "object"
}
```

</details>

<a id="tool-list_variables-1adaa2a1"></a>

## list_variables

Handler: Validates and resolves the supplied GTM identifiers, then calls ListVariables on the implemented Google Tag Manager client and returns the result.

```text
List all variables in a GTM workspace
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_variables.go#L18-L37) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "variables"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "type": "object"
}
```

</details>

<a id="tool-list_versions-3eb8d6c0"></a>

## list_versions

Handler: Validates and resolves the supplied GTM identifiers, then calls ListVersionHeaders on the implemented Google Tag Manager client and returns the result.

```text
List all container versions. Returns version headers with counts of tags, triggers, variables, and templates.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_list_versions.go#L33-L64) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "workspaces"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId"
  ],
  "type": "object"
}
```

</details>

<a id="tool-list_workspaces-af844119"></a>

## list_workspaces

Handler: Validates and resolves the supplied GTM identifiers, then calls ListWorkspaces on the implemented Google Tag Manager client and returns the result.

```text
List all workspaces in a GTM container
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_workspaces.go#L17-L36) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "workspaces"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId"
  ],
  "type": "object"
}
```

</details>

<a id="tool-list_zones-ab161553"></a>

## list_zones

Handler: Validates and resolves the supplied GTM identifiers, then calls ListZones on the implemented Google Tag Manager client and returns the result.

```text
List zones in a GTM workspace.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_zones.go#L68-L79) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "zones"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "type": "object"
}
```

</details>

<a id="tool-lookup_container-bdbb7fe1"></a>

## lookup_container

Handler: Validates and resolves the supplied GTM identifiers, then calls LookupContainer on the implemented Google Tag Manager client and returns the result.

```text
Find a container by exactly one destination ID or GTM public tag ID.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_inspection.go#L72-L93) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "accounts"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "destinationId": {
      "description": "A destination ID such as AW-123456; provide exactly one lookup field",
      "type": "string"
    },
    "tagId": {
      "description": "A GTM public ID such as GTM-ABC123; provide exactly one lookup field",
      "type": "string"
    }
  },
  "type": "object"
}
```

</details>

<a id="tool-move_entities_to_folder-abdb631f"></a>

## move_entities_to_folder

Handler: Validates and resolves the supplied GTM identifiers, then calls MoveEntitiesToFolder on the implemented Google Tag Manager client and returns the result.

```text
Move tags, triggers, and variables into a folder. Requires confirm: true.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_folders.go#L183-L200) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "folder-admin"; disabled by default; enabled by selecting this group or "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "confirm": {
      "description": "Must be true to confirm moving the entities",
      "type": "boolean"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "folderId": {
      "description": "The folder ID",
      "type": "string"
    },
    "tagIds": {
      "description": "Tag IDs to move",
      "items": {
        "type": "string"
      },
      "type": [
        "null",
        "array"
      ]
    },
    "triggerIds": {
      "description": "Trigger IDs to move",
      "items": {
        "type": "string"
      },
      "type": [
        "null",
        "array"
      ]
    },
    "variableIds": {
      "description": "Variable IDs to move",
      "items": {
        "type": "string"
      },
      "type": [
        "null",
        "array"
      ]
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "folderId",
    "confirm"
  ],
  "type": "object"
}
```

</details>

<a id="tool-move_tag_id-fe781702"></a>

## move_tag_id

Handler: Validates and resolves the supplied GTM identifiers, then calls MoveTagID on the implemented Google Tag Manager client and returns the result.

```text
Move a tag ID out of a container into a new container. Requires confirm: true and acceptTerms: true; users are not copied.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_container_admin.go#L59-L81) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "container-admin"; disabled by default; enabled by selecting this group or "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "acceptTerms": {
      "description": "Must be true to accept the terms copied to the new container",
      "type": "boolean"
    },
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "confirm": {
      "description": "Must be true to confirm moving the tag ID",
      "type": "boolean"
    },
    "containerId": {
      "description": "The container currently holding the tag ID",
      "type": "string"
    },
    "copySettings": {
      "description": "Copy tag settings to the newly created container",
      "type": "boolean"
    },
    "tagId": {
      "description": "The tag ID to remove from the current container",
      "type": "string"
    },
    "tagName": {
      "description": "The name for the newly created container",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "tagId",
    "tagName",
    "acceptTerms",
    "confirm"
  ],
  "type": "object"
}
```

</details>

<a id="tool-ping-758d61f2"></a>

## ping

Handler: Returns pong, an optional echoed message, and the current UTC timestamp.

```text
Test connectivity to the GTM MCP server
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/main.go#L300-L341) · Schema: tools/list.

Exposure: Always registered utility tool.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "message": {
      "description": "Optional message to echo back",
      "type": "string"
    }
  },
  "type": "object"
}
```

</details>

<a id="tool-publish_version-0628e4c5"></a>

## publish_version

Handler: Validates and resolves the supplied GTM identifiers, then calls PublishVersion on the implemented Google Tag Manager client and returns the result.

```text
Publish a container version to make it live. Requires confirm: true as a safety guard. WARNING: This pushes changes to your live website.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_version.go#L96-L132) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "workspaces"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "confirm": {
      "description": "Must be true to confirm publishing. This is a safety guard - publishing makes changes live.",
      "type": "boolean"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "versionId": {
      "description": "The version ID to publish",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "versionId",
    "confirm"
  ],
  "type": "object"
}
```

</details>

<a id="tool-quick_preview_workspace-2e1cb327"></a>

## quick_preview_workspace

Handler: Validates and resolves the supplied GTM identifiers, then calls QuickPreviewWorkspace on the implemented Google Tag Manager client and returns the result.

```text
Compile an ephemeral preview version of a workspace without saving or publishing it.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_workspace_metadata.go#L114-L129) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "workspaces"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "type": "object"
}
```

</details>

<a id="tool-reauthorize_environment-191d3333"></a>

## reauthorize_environment

Handler: Validates and resolves the supplied GTM identifiers, then calls ReauthorizeEnvironment on the implemented Google Tag Manager client and returns the result.

```text
Generate a new authorization code for a GTM environment. Requires confirm: true because the previous code becomes invalid.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_environments.go#L136-L153) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "environments"; disabled by default; enabled by selecting this group or "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "confirm": {
      "description": "Must be true to confirm the operation",
      "type": "boolean"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "environmentId": {
      "description": "The GTM environment ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "environmentId",
    "confirm"
  ],
  "type": "object"
}
```

</details>

<a id="tool-resolve_workspace_conflict-33394013"></a>

## resolve_workspace_conflict

Handler: Validates and resolves the supplied GTM identifiers, then calls ResolveWorkspaceConflict on the implemented Google Tag Manager client and returns the result.

```text
Replace a conflicting workspace entity with a fully resolved entity. Requires confirm: true and the conflict fingerprint.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_workspace_operations.go#L64-L81) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "workspace-admin"; disabled by default; enabled by selecting this group or "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "confirm": {
      "description": "Must be true to replace the conflicting entity",
      "type": "boolean"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "entityJson": {
      "description": "The fully resolved GTM Entity as JSON",
      "type": "string"
    },
    "fingerprint": {
      "description": "Fingerprint of entityInWorkspace from the merge conflict",
      "type": "string"
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "fingerprint",
    "entityJson",
    "confirm"
  ],
  "type": "object"
}
```

</details>

<a id="tool-revert_folder-a2d986fe"></a>

## revert_folder

Handler: Validates and resolves the supplied GTM identifiers, then calls RevertFolder on the implemented Google Tag Manager client and returns the result.

```text
Discard workspace changes to a folder and restore its latest-version state. Requires confirm: true.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_folders.go#L201-L215) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "folder-admin"; disabled by default; enabled by selecting this group or "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "confirm": {
      "description": "Must be true to confirm the operation",
      "type": "boolean"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "folderId": {
      "description": "The folder ID",
      "type": "string"
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "folderId",
    "confirm"
  ],
  "type": "object"
}
```

</details>

<a id="tool-revert_workspace_entity-239cfa10"></a>

## revert_workspace_entity

Handler: Validates and resolves the supplied GTM identifiers, then calls RevertWorkspaceEntity on the implemented Google Tag Manager client and returns the result.

```text
Discard workspace changes to a built-in variable, client, tag, template, transformation, trigger, variable, or zone. Requires confirm: true and uses the current fingerprint.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_reverts.go#L24-L40) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "reverts"; disabled by default; enabled by selecting this group or "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "confirm": {
      "description": "Must be true to discard the entity's workspace changes",
      "type": "boolean"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "resourceId": {
      "description": "Entity ID, or the built-in variable type for builtInVariable",
      "type": "string"
    },
    "resourceType": {
      "description": "Resource family: builtInVariable, client, tag, template, transformation, trigger, variable, or zone",
      "type": "string"
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "resourceType",
    "resourceId",
    "confirm"
  ],
  "type": "object"
}
```

</details>

<a id="tool-set_latest_version-fb529238"></a>

## set_latest_version

Handler: Validates and resolves the supplied GTM identifiers, then calls SetLatestVersion on the implemented Google Tag Manager client and returns the result.

```text
Set a container version as Latest without publishing it Live. Requires confirm: true.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_version_lifecycle.go#L64-L78) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "version-admin"; disabled by default; enabled by selecting this group or "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "confirm": {
      "description": "Must be true to confirm the version state change",
      "type": "boolean"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "versionId": {
      "description": "The container version ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "versionId",
    "confirm"
  ],
  "type": "object"
}
```

</details>

<a id="tool-sync_workspace-4b02a6d9"></a>

## sync_workspace

Handler: Validates and resolves the supplied GTM identifiers, then calls SyncWorkspace on the implemented Google Tag Manager client and returns the result.

```text
Synchronize a workspace to the latest container version and return any merge conflicts. Requires confirm: true.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_workspace_operations.go#L82-L98) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "workspace-admin"; disabled by default; enabled by selecting this group or "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "confirm": {
      "description": "Must be true to synchronize the workspace",
      "type": "boolean"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "confirm"
  ],
  "type": "object"
}
```

</details>

<a id="tool-undelete_version-c548ac58"></a>

## undelete_version

Handler: Validates and resolves the supplied GTM identifiers, then calls UndeleteVersion on the implemented Google Tag Manager client and returns the result.

```text
Restore a soft-deleted container version. Requires confirm: true.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_version_lifecycle.go#L49-L63) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "version-admin"; disabled by default; enabled by selecting this group or "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "confirm": {
      "description": "Must be true to confirm the version state change",
      "type": "boolean"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "versionId": {
      "description": "The container version ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "versionId",
    "confirm"
  ],
  "type": "object"
}
```

</details>

<a id="tool-update_account-ad80eae4"></a>

## update_account

Handler: Validates and resolves the supplied GTM identifiers, then calls UpdateAccount on the implemented Google Tag Manager client and returns the result.

```text
Rename a GTM account. Automatically handles fingerprint for concurrency control.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_update_account.go#L23-L50) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "accounts"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "name": {
      "description": "New account display name",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "name"
  ],
  "type": "object"
}
```

</details>

<a id="tool-update_client-b54d9c9e"></a>

## update_client

Handler: Validates and resolves the supplied GTM identifiers, then calls UpdateClient on the implemented Google Tag Manager client and returns the result.

```text
Update an existing client. Automatically handles fingerprint for concurrency control. Server-side containers only.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_update_client.go#L31-L79) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "server"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "clientId": {
      "description": "The client ID to update",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "name": {
      "description": "Client name",
      "type": "string"
    },
    "notes": {
      "description": "Client notes (optional)",
      "type": "string"
    },
    "parametersJson": {
      "description": "Client parameters as JSON array (optional)",
      "type": "string"
    },
    "priority": {
      "description": "Client priority (optional, higher runs first)",
      "type": "integer"
    },
    "type": {
      "description": "Client type",
      "type": "string"
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "clientId",
    "name",
    "type"
  ],
  "type": "object"
}
```

</details>

<a id="tool-update_container-cacd7302"></a>

## update_container

Handler: Validates and resolves the supplied GTM identifiers, then calls UpdateContainer on the implemented Google Tag Manager client and returns the result.

```text
Rename a GTM container. Preserves all existing settings (usage context, domain, notes). Automatically handles fingerprint for concurrency control.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_update_container.go#L24-L51) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "accounts"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "name": {
      "description": "New container display name",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "name"
  ],
  "type": "object"
}
```

</details>

<a id="tool-update_environment-b926ea2d"></a>

## update_environment

Handler: Validates and resolves the supplied GTM identifiers, then calls UpdateEnvironment on the implemented Google Tag Manager client and returns the result.

```text
Update selected GTM environment fields while preserving omitted values and checking its fingerprint.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_environments.go#L112-L135) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "environments"; disabled by default; enabled by selecting this group or "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "containerVersionId": {
      "description": "Container version exposed by this environment; omit to preserve or pass empty to clear",
      "type": [
        "null",
        "string"
      ]
    },
    "description": {
      "description": "New description; omit to preserve or pass empty to clear",
      "type": [
        "null",
        "string"
      ]
    },
    "enableDebug": {
      "description": "New debug setting; omit to preserve",
      "type": [
        "null",
        "boolean"
      ]
    },
    "environmentId": {
      "description": "The GTM environment ID",
      "type": "string"
    },
    "name": {
      "description": "New name; omit to preserve",
      "type": [
        "null",
        "string"
      ]
    },
    "url": {
      "description": "New preview URL; omit to preserve or pass empty to clear",
      "type": [
        "null",
        "string"
      ]
    },
    "workspaceId": {
      "description": "Workspace exposed by this environment; omit to preserve or pass empty to clear",
      "type": [
        "null",
        "string"
      ]
    }
  },
  "required": [
    "accountId",
    "containerId",
    "environmentId"
  ],
  "type": "object"
}
```

</details>

<a id="tool-update_folder-eb714a16"></a>

## update_folder

Handler: Validates and resolves the supplied GTM identifiers, then calls UpdateFolder on the implemented Google Tag Manager client and returns the result.

```text
Update selected folder fields while preserving omitted values and checking its fingerprint.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_folders.go#L150-L167) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "folder-admin"; disabled by default; enabled by selecting this group or "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "folderId": {
      "description": "The folder ID",
      "type": "string"
    },
    "name": {
      "description": "New name; omit to preserve",
      "type": [
        "null",
        "string"
      ]
    },
    "notes": {
      "description": "New notes; omit to preserve or pass empty to clear",
      "type": [
        "null",
        "string"
      ]
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "folderId"
  ],
  "type": "object"
}
```

</details>

<a id="tool-update_google_tag_config-9a58b040"></a>

## update_google_tag_config

Handler: Validates and resolves the supplied GTM identifiers, then calls UpdateGoogleTagConfig on the implemented Google Tag Manager client and returns the result.

```text
Update selected Google tag configuration fields while preserving omitted values and checking its fingerprint.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_gtag_configs.go#L104-L132) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "gtag"; disabled by default; enabled by selecting this group or "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "gtagConfigId": {
      "description": "The Google tag config ID",
      "type": "string"
    },
    "parametersJson": {
      "description": "New parameters as a JSON array; omit to preserve or pass [] to clear",
      "type": [
        "null",
        "string"
      ]
    },
    "type": {
      "description": "New config type; omit to preserve",
      "type": [
        "null",
        "string"
      ]
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "gtagConfigId"
  ],
  "type": "object"
}
```

</details>

<a id="tool-update_tag-ff9e7962"></a>

## update_tag

Handler: Validates and resolves the supplied GTM identifiers, then calls UpdateTag on the implemented Google Tag Manager client and returns the result.

```text
Update an existing tag. Only provided fields are changed — all other fields (parameters, triggers, consent, etc.) are preserved from the existing tag. Automatically handles fingerprint for concurrency control.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_update_tag.go#L38-L140) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "tags"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "blockingTriggerIds": {
      "description": "Array of trigger IDs that block this tag. If omitted\\, existing blocking triggers are preserved.",
      "items": {
        "type": "string"
      },
      "type": [
        "null",
        "array"
      ]
    },
    "consentStatus": {
      "description": "Consent status: notSet (default/clear)\\, notNeeded (no consent required)\\, needed (requires consent types to be granted before firing). If omitted\\, existing consent settings are preserved.",
      "type": "string"
    },
    "consentTypes": {
      "description": "Comma-separated consent types when consentStatus is needed (e.g. ad_storage\\,analytics_storage\\,ad_user_data\\,ad_personalization). Ignored when consentStatus is notSet or notNeeded.",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "firingTriggerIds": {
      "description": "Array of trigger IDs that fire this tag. If omitted\\, existing triggers are preserved.",
      "items": {
        "type": "string"
      },
      "type": [
        "null",
        "array"
      ]
    },
    "name": {
      "description": "Tag name. If omitted\\, existing name is preserved.",
      "type": "string"
    },
    "notes": {
      "description": "Tag notes. Omit to preserve or pass an empty string to clear.",
      "type": [
        "null",
        "string"
      ]
    },
    "parametersJson": {
      "description": "JSON parameters; omit to preserve; see gtm://best-practices/tool-input-formats",
      "type": "string"
    },
    "paused": {
      "description": "Whether tag is paused. If omitted\\, existing paused state is preserved.",
      "type": [
        "null",
        "boolean"
      ]
    },
    "setupTagJson": {
      "description": "JSON setup sequence; omit to preserve\\, [] to clear; see gtm://best-practices/tool-input-formats",
      "type": "string"
    },
    "tagId": {
      "description": "The tag ID to update",
      "type": "string"
    },
    "teardownTagJson": {
      "description": "JSON teardown sequence; omit to preserve\\, [] to clear; see gtm://best-practices/tool-input-formats",
      "type": "string"
    },
    "type": {
      "description": "Tag type. If omitted\\, existing type is preserved.",
      "type": "string"
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "tagId"
  ],
  "type": "object"
}
```

</details>

<a id="tool-update_template-dbe66b4e"></a>

## update_template

Handler: Resolves the authenticated GTM client and calls Accounts.Containers.Workspaces.Templates.Get, Accounts.Containers.Workspaces.Templates.Update through the Google Tag Manager v2 SDK, then returns the result.

```text
Update an existing custom template. Automatically handles fingerprint for concurrency control. Note: Updating gallery templates may break the link to the gallery. IMPORTANT: To change the visible template name, update the 'displayName' field inside the ___INFO___ section of templateData - the 'name' parameter is only an internal identifier.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_update_template.go#L33-L97) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "templates"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "name": {
      "description": "Internal template name (optional). Note: This is NOT the visible display name. The visible name comes from the displayName field inside the ___INFO___ section of templateData.",
      "type": "string"
    },
    "templateData": {
      "description": "New template code in .tpl format (optional)",
      "type": "string"
    },
    "templateId": {
      "description": "The template ID to update",
      "type": "string"
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "templateId"
  ],
  "type": "object"
}
```

</details>

<a id="tool-update_transformation-67f8c3a8"></a>

## update_transformation

Handler: Validates and resolves the supplied GTM identifiers, then calls UpdateTransformation on the implemented Google Tag Manager client and returns the result.

```text
Update a server-side transformation with automatic fingerprint handling. See gtm://best-practices/tool-input-formats.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_update_transformation.go#L30-L77) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "server"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "name": {
      "description": "Transformation name",
      "type": "string"
    },
    "notes": {
      "description": "Transformation notes (optional)",
      "type": "string"
    },
    "parametersJson": {
      "description": "JSON parameter array; see gtm://best-practices/tool-input-formats",
      "type": "string"
    },
    "transformationId": {
      "description": "The transformation ID to update",
      "type": "string"
    },
    "type": {
      "description": "One of tf_exclude_params, tf_allow_params, or tf_augment_event",
      "type": "string"
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "transformationId",
    "name"
  ],
  "type": "object"
}
```

</details>

<a id="tool-update_trigger-60ddeb77"></a>

## update_trigger

Handler: Validates and resolves the supplied GTM identifiers, then calls UpdateTrigger on the implemented Google Tag Manager client and returns the result.

```text
Update a trigger while preserving omitted fields, with automatic fingerprint handling. Read gtm://best-practices/tool-input-formats for filters and trigger groups.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_update_trigger.go#L33-L132) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "triggers"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "autoEventFilterJson": {
      "description": "JSON auto-event conditions; omit to preserve\\, [] to clear; see gtm://best-practices/tool-input-formats",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "customEventFilterJson": {
      "description": "JSON custom-event conditions; omit to preserve\\, [] to clear; see gtm://best-practices/tool-input-formats",
      "type": "string"
    },
    "filterJson": {
      "description": "JSON conditions; omit to preserve\\, [] to clear; see gtm://best-practices/tool-input-formats",
      "type": "string"
    },
    "name": {
      "description": "Trigger name",
      "type": "string"
    },
    "notes": {
      "description": "Trigger notes. Omit to preserve or pass an empty string to clear.",
      "type": [
        "null",
        "string"
      ]
    },
    "parameterJson": {
      "description": "JSON parameters; omit to preserve\\, [] to clear; see gtm://best-practices/tool-input-formats",
      "type": "string"
    },
    "triggerId": {
      "description": "The trigger ID to update",
      "type": "string"
    },
    "type": {
      "description": "Trigger type (e.g. pageview, customEvent, linkClick, triggerGroup)",
      "type": "string"
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "triggerId",
    "name",
    "type"
  ],
  "type": "object"
}
```

</details>

<a id="tool-update_variable-63c48ad7"></a>

## update_variable

Handler: Validates and resolves the supplied GTM identifiers, then calls UpdateVariable on the implemented Google Tag Manager client and returns the result.

```text
Update an existing variable. Omitted parameters and notes are preserved. Automatically handles fingerprint for concurrency control.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_update_variable.go#L30-L85) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "variables"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "name": {
      "description": "Variable name",
      "type": "string"
    },
    "notes": {
      "description": "Variable notes. Omit to preserve or pass an empty string to clear.",
      "type": [
        "null",
        "string"
      ]
    },
    "parametersJson": {
      "description": "Variable parameters as JSON array; omit to preserve or pass [] to clear",
      "type": "string"
    },
    "type": {
      "description": "Variable type (e.g. c for Constant, v for Data Layer, k for Cookie, jsm for Custom JavaScript)",
      "type": "string"
    },
    "variableId": {
      "description": "The variable ID to update",
      "type": "string"
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "variableId",
    "name",
    "type"
  ],
  "type": "object"
}
```

</details>

<a id="tool-update_version-23a8648e"></a>

## update_version

Handler: Validates and resolves the supplied GTM identifiers, then calls UpdateVersion on the implemented Google Tag Manager client and returns the result.

```text
Update a saved version's name or description with fingerprint concurrency control.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_version_lifecycle.go#L79-L93) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "version-admin"; disabled by default; enabled by selecting this group or "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "description": {
      "description": "New version description; omit to preserve or pass empty to clear",
      "type": [
        "null",
        "string"
      ]
    },
    "name": {
      "description": "New version name; omit to preserve or pass empty to clear",
      "type": [
        "null",
        "string"
      ]
    },
    "versionId": {
      "description": "The container version ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "versionId"
  ],
  "type": "object"
}
```

</details>

<a id="tool-update_workspace-1a76edb7"></a>

## update_workspace

Handler: Validates and resolves the supplied GTM identifiers, then calls UpdateWorkspace on the implemented Google Tag Manager client and returns the result.

```text
Update a workspace name or description while preserving omitted fields and checking its fingerprint.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_workspace_metadata.go#L68-L94) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "workspaces"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "description": {
      "description": "New description; omit to preserve or pass an empty string to clear",
      "type": [
        "null",
        "string"
      ]
    },
    "name": {
      "description": "New workspace name; omit to preserve it",
      "type": [
        "null",
        "string"
      ]
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "type": "object"
}
```

</details>

<a id="tool-update_zone-6369eede"></a>

## update_zone

Handler: Validates and resolves the supplied GTM identifiers, then calls UpdateZone on the implemented Google Tag Manager client and returns the result.

```text
Update selected zone fields while preserving omitted values and checking its fingerprint.
```

[Source](https://github.com/paolobietolini/gtm-mcp-server/blob/3b218624ba169390002a265ac830f2c10a028c2e/gtm/tool_zones.go#L124-L162) · Schema: tools/list.

Exposure: GTM_TOOL_GROUPS group "zones"; enabled by default and by "all".

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "accountId": {
      "description": "The GTM account ID",
      "type": "string"
    },
    "boundaryConditionsJson": {
      "description": "JSON boundary conditions; omit to preserve or pass [] to clear",
      "type": [
        "null",
        "string"
      ]
    },
    "childContainers": {
      "description": "Child containers; omit to preserve or pass [] to clear",
      "items": {
        "additionalProperties": false,
        "properties": {
          "nickname": {
            "description": "Optional nickname inside the zone",
            "type": "string"
          },
          "publicId": {
            "description": "Child container public ID such as GTM-ABC123",
            "type": "string"
          }
        },
        "required": [
          "publicId"
        ],
        "type": "object"
      },
      "type": [
        "null",
        "array"
      ]
    },
    "containerId": {
      "description": "The GTM container ID",
      "type": "string"
    },
    "customEvaluationTriggerIds": {
      "description": "Trigger IDs; omit to preserve or pass [] to clear",
      "items": {
        "type": "string"
      },
      "type": [
        "null",
        "array"
      ]
    },
    "name": {
      "description": "New name; omit to preserve",
      "type": [
        "null",
        "string"
      ]
    },
    "notes": {
      "description": "New notes; omit to preserve or pass empty to clear",
      "type": [
        "null",
        "string"
      ]
    },
    "typeRestriction": {
      "additionalProperties": false,
      "description": "New tag type restriction settings; omit to preserve",
      "properties": {
        "enabled": {
          "description": "Whether tag type restrictions are enabled",
          "type": "boolean"
        },
        "whitelistedTypeIds": {
          "description": "Allowed tag template public IDs",
          "items": {
            "type": "string"
          },
          "type": [
            "null",
            "array"
          ]
        }
      },
      "required": [
        "enabled"
      ],
      "type": [
        "null",
        "object"
      ]
    },
    "workspaceId": {
      "description": "The GTM workspace ID",
      "type": "string"
    },
    "zoneId": {
      "description": "The GTM zone ID",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "zoneId"
  ],
  "type": "object"
}
```

</details>
