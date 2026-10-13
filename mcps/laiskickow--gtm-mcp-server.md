# laiskickow/gtm-mcp-server

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/laiskickow/gtm-mcp-server) · [Machine-readable inventory](../data/mcps/laiskickow--gtm-mcp-server.json)

**103 extracted tools.** Configure server-container clients and transformations, manage templates, and deploy tracking presets.

Snapshot: 2026-10-13 · [1c8eb3fedcd3](https://github.com/laiskickow/gtm-mcp-server/tree/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45) · Method: tools/list.

Exposure: All 19 tool groups are registered unconditionally, including server-side clients/transformations, destinations, gtag configuration, zones, permissions, conventions and presets. Authentication is lazy.

## Limits

- Offline in-memory MCP tools/list only; no authenticated GTM calls or mutations executed. Handler API targets and implementations were inspected statically.
- gtm_unlink_destination calls destinations.unlink via any; installed @googleapis/tagmanager exposes no unlink method.
- API handlers JSON.stringify the full GaxiosResponse instead of result.data; serialization behavior and potential response/config verbosity were not verified live.
- List handlers do not paginate; no pageToken input is exposed.
- Preset deployment can partially succeed and has no rollback.
- gtm_get_container_snippet reads publicId from the GaxiosResponse wrapper instead of response.data, so normal SDK responses omit generated snippets.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`gtm_list_accounts`](#tool-gtm_list_accounts-c5d9b27f) | GTM | Calls Google Tag Manager API accounts.list. |
| [`gtm_get_account`](#tool-gtm_get_account-b0358265) | GTM | Calls Google Tag Manager API accounts.get. |
| [`gtm_update_account`](#tool-gtm_update_account-860a61d8) | GTM | Calls Google Tag Manager API accounts.update. |
| [`gtm_list_containers`](#tool-gtm_list_containers-e45afd2b) | GTM | Calls Google Tag Manager API accounts.containers.list. |
| [`gtm_get_container`](#tool-gtm_get_container-fdc6e39c) | GTM | Calls Google Tag Manager API accounts.containers.get. |
| [`gtm_create_container`](#tool-gtm_create_container-67c96447) | GTM | Calls Google Tag Manager API accounts.containers.create. |
| [`gtm_update_container`](#tool-gtm_update_container-2d4e16fc) | GTM | Calls Google Tag Manager API accounts.containers.update. |
| [`gtm_delete_container`](#tool-gtm_delete_container-87eaf656) | GTM | Calls Google Tag Manager API accounts.containers.delete. |
| [`gtm_get_container_snippet`](#tool-gtm_get_container_snippet-a7cc1184) | GTM | Fetches the container but reads publicId from the SDK response wrapper instead of response.data, so normal SDK responses omit the generated installation snippets. |
| [`gtm_list_workspaces`](#tool-gtm_list_workspaces-248ce86f) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.list. |
| [`gtm_get_workspace`](#tool-gtm_get_workspace-573c6822) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.get. |
| [`gtm_create_workspace`](#tool-gtm_create_workspace-6324597f) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.create. |
| [`gtm_update_workspace`](#tool-gtm_update_workspace-083bc7da) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.update. |
| [`gtm_delete_workspace`](#tool-gtm_delete_workspace-755351ec) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.delete. |
| [`gtm_sync_workspace`](#tool-gtm_sync_workspace-c11e7d2f) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.sync. |
| [`gtm_quick_preview_workspace`](#tool-gtm_quick_preview_workspace-ae602af3) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.quick\_preview. |
| [`gtm_create_version`](#tool-gtm_create_version-50a805d7) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.create\_version. |
| [`gtm_get_workspace_status`](#tool-gtm_get_workspace_status-58373cea) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.getStatus. |
| [`gtm_list_tags`](#tool-gtm_list_tags-b585bc12) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.tags.list. |
| [`gtm_get_tag`](#tool-gtm_get_tag-3d242291) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.tags.get. |
| [`gtm_create_tag`](#tool-gtm_create_tag-c682840c) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.tags.create. |
| [`gtm_update_tag`](#tool-gtm_update_tag-23807743) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.tags.update. |
| [`gtm_delete_tag`](#tool-gtm_delete_tag-42a56cac) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.tags.delete. |
| [`gtm_revert_tag`](#tool-gtm_revert_tag-d946b9ec) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.tags.revert. |
| [`gtm_list_triggers`](#tool-gtm_list_triggers-16b41a3c) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.triggers.list. |
| [`gtm_get_trigger`](#tool-gtm_get_trigger-669e5c62) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.triggers.get. |
| [`gtm_create_trigger`](#tool-gtm_create_trigger-99da4322) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.triggers.create. |
| [`gtm_update_trigger`](#tool-gtm_update_trigger-ce48de45) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.triggers.update. |
| [`gtm_delete_trigger`](#tool-gtm_delete_trigger-dac3085f) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.triggers.delete. |
| [`gtm_revert_trigger`](#tool-gtm_revert_trigger-e5cc38f4) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.triggers.revert. |
| [`gtm_list_variables`](#tool-gtm_list_variables-81705a80) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.variables.list. |
| [`gtm_get_variable`](#tool-gtm_get_variable-e6ff3763) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.variables.get. |
| [`gtm_create_variable`](#tool-gtm_create_variable-5b853337) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.variables.create. |
| [`gtm_update_variable`](#tool-gtm_update_variable-898f92d4) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.variables.update. |
| [`gtm_delete_variable`](#tool-gtm_delete_variable-9bd36787) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.variables.delete. |
| [`gtm_revert_variable`](#tool-gtm_revert_variable-c14bd29c) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.variables.revert. |
| [`gtm_list_built_in_variables`](#tool-gtm_list_built_in_variables-af7ccc4e) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.built\_in\_variables.list. |
| [`gtm_create_built_in_variable`](#tool-gtm_create_built_in_variable-f6a3aa30) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.built\_in\_variables.create. |
| [`gtm_delete_built_in_variable`](#tool-gtm_delete_built_in_variable-579720b8) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.built\_in\_variables.delete. |
| [`gtm_revert_built_in_variable`](#tool-gtm_revert_built_in_variable-19445473) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.built\_in\_variables.revert. |
| [`gtm_list_folders`](#tool-gtm_list_folders-9da6c22f) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.folders.list. |
| [`gtm_get_folder`](#tool-gtm_get_folder-a5332034) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.folders.get. |
| [`gtm_create_folder`](#tool-gtm_create_folder-a7f80e8c) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.folders.create. |
| [`gtm_update_folder`](#tool-gtm_update_folder-0eb0b999) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.folders.update. |
| [`gtm_delete_folder`](#tool-gtm_delete_folder-9602489f) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.folders.delete. |
| [`gtm_move_entities_to_folder`](#tool-gtm_move_entities_to_folder-3d5f0ae9) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.folders.move\_entities\_to\_folder. |
| [`gtm_list_environments`](#tool-gtm_list_environments-9f7a4399) | GTM | Calls Google Tag Manager API accounts.containers.environments.list. |
| [`gtm_get_environment`](#tool-gtm_get_environment-9574f4ec) | GTM | Calls Google Tag Manager API accounts.containers.environments.get. |
| [`gtm_create_environment`](#tool-gtm_create_environment-f4b9f2a2) | GTM | Calls Google Tag Manager API accounts.containers.environments.create. |
| [`gtm_update_environment`](#tool-gtm_update_environment-0e3b039d) | GTM | Calls Google Tag Manager API accounts.containers.environments.update. |
| [`gtm_delete_environment`](#tool-gtm_delete_environment-8cc50977) | GTM | Calls Google Tag Manager API accounts.containers.environments.delete. |
| [`gtm_get_version`](#tool-gtm_get_version-c83b7c02) | GTM | Calls Google Tag Manager API accounts.containers.versions.get. |
| [`gtm_publish_version`](#tool-gtm_publish_version-0cc97535) | GTM | Calls Google Tag Manager API accounts.containers.versions.publish. |
| [`gtm_list_version_headers`](#tool-gtm_list_version_headers-1b2c0287) | GTM | Calls Google Tag Manager API accounts.containers.version\_headers.list. |
| [`gtm_set_latest_version`](#tool-gtm_set_latest_version-80a1483f) | GTM | Calls Google Tag Manager API accounts.containers.versions.set\_latest. |
| [`gtm_delete_version`](#tool-gtm_delete_version-e3e5ab73) | GTM | Calls Google Tag Manager API accounts.containers.versions.delete. |
| [`gtm_undelete_version`](#tool-gtm_undelete_version-76a4263a) | GTM | Calls Google Tag Manager API accounts.containers.versions.undelete. |
| [`gtm_list_templates`](#tool-gtm_list_templates-8d77f0ae) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.templates.list. |
| [`gtm_get_template`](#tool-gtm_get_template-824e180d) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.templates.get. |
| [`gtm_create_template`](#tool-gtm_create_template-5614d059) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.templates.create. |
| [`gtm_update_template`](#tool-gtm_update_template-c57577d6) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.templates.update. |
| [`gtm_delete_template`](#tool-gtm_delete_template-a7777f3c) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.templates.delete. |
| [`gtm_revert_template`](#tool-gtm_revert_template-e2c41e5e) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.templates.revert. |
| [`gtm_list_user_permissions`](#tool-gtm_list_user_permissions-97b567b6) | GTM | Calls Google Tag Manager API accounts.user\_permissions. |
| [`gtm_get_user_permission`](#tool-gtm_get_user_permission-6e708d22) | GTM | Calls Google Tag Manager API accounts.user\_permissions. |
| [`gtm_create_user_permission`](#tool-gtm_create_user_permission-78bb327e) | GTM | Calls Google Tag Manager API accounts.user\_permissions. |
| [`gtm_update_user_permission`](#tool-gtm_update_user_permission-c6505886) | GTM | Calls Google Tag Manager API accounts.user\_permissions. |
| [`gtm_delete_user_permission`](#tool-gtm_delete_user_permission-d28d25e3) | GTM | Calls Google Tag Manager API accounts.user\_permissions. |
| [`gtm_list_zones`](#tool-gtm_list_zones-8f9cbfc8) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.zones.list. |
| [`gtm_get_zone`](#tool-gtm_get_zone-4df554bd) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.zones.get. |
| [`gtm_create_zone`](#tool-gtm_create_zone-ddf1b18f) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.zones.create. |
| [`gtm_update_zone`](#tool-gtm_update_zone-73d35ad5) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.zones.update. |
| [`gtm_delete_zone`](#tool-gtm_delete_zone-b659a4bc) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.zones.delete. |
| [`gtm_revert_zone`](#tool-gtm_revert_zone-a6d34405) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.zones.revert. |
| [`gtm_list_clients`](#tool-gtm_list_clients-bd1499aa) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.clients.list. |
| [`gtm_get_client`](#tool-gtm_get_client-805d1819) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.clients.get. |
| [`gtm_create_client`](#tool-gtm_create_client-aefac744) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.clients.create. |
| [`gtm_update_client`](#tool-gtm_update_client-49d21241) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.clients.update. |
| [`gtm_delete_client`](#tool-gtm_delete_client-1584ff14) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.clients.delete. |
| [`gtm_revert_client`](#tool-gtm_revert_client-a93ba9e0) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.clients.revert. |
| [`gtm_list_destinations`](#tool-gtm_list_destinations-4dd586f2) | GTM | Calls Google Tag Manager API accounts.containers.destinations.list. |
| [`gtm_get_destination`](#tool-gtm_get_destination-1f5c3969) | GTM | Calls Google Tag Manager API accounts.containers.destinations.get. |
| [`gtm_link_destination`](#tool-gtm_link_destination-5e61eba1) | GTM | Calls Google Tag Manager API accounts.containers.destinations.link. |
| [`gtm_unlink_destination`](#tool-gtm_unlink_destination-180f732e) | GTM | Attempts destinations.unlink through an any cast; that method is absent from the installed Tag Manager client and returns an error. |
| [`gtm_list_transformations`](#tool-gtm_list_transformations-5197f98a) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.transformations.list. |
| [`gtm_get_transformation`](#tool-gtm_get_transformation-0c9c60f4) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.transformations.get. |
| [`gtm_create_transformation`](#tool-gtm_create_transformation-321af14e) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.transformations.create. |
| [`gtm_update_transformation`](#tool-gtm_update_transformation-711e53c6) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.transformations.update. |
| [`gtm_delete_transformation`](#tool-gtm_delete_transformation-6e207020) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.transformations.delete. |
| [`gtm_revert_transformation`](#tool-gtm_revert_transformation-4a2b616d) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.transformations.revert. |
| [`gtm_list_gtag_configs`](#tool-gtm_list_gtag_configs-a812ef9c) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.gtag\_config.list. |
| [`gtm_get_gtag_config`](#tool-gtm_get_gtag_config-04e64cb4) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.gtag\_config.get. |
| [`gtm_create_gtag_config`](#tool-gtm_create_gtag_config-036fed25) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.gtag\_config.create. |
| [`gtm_update_gtag_config`](#tool-gtm_update_gtag_config-110cc67b) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.gtag\_config.update. |
| [`gtm_delete_gtag_config`](#tool-gtm_delete_gtag_config-dba69879) | GTM | Calls Google Tag Manager API accounts.containers.workspaces.gtag\_config.delete. |
| [`gtm_naming_guide`](#tool-gtm_naming_guide-5844d9e2) | Supporting | Returns hardcoded organization naming conventions and registered naming components. |
| [`gtm_validate_name`](#tool-gtm_validate_name-f505f4e0) | Supporting | Validates a tag name using local organization naming conventions. |
| [`gtm_build_tag_name`](#tool-gtm_build_tag_name-46ce019a) | Supporting | Builds and validates a local organization tag name. |
| [`gtm_build_trigger_name`](#tool-gtm_build_trigger_name-b630839d) | Supporting | Builds a trigger name using local organization naming conventions. |
| [`gtm_build_variable_name`](#tool-gtm_build_variable_name-858527d5) | Supporting | Builds a variable name using local organization naming conventions. |
| [`gtm_list_presets`](#tool-gtm_list_presets-bce39cbd) | Supporting | Lists bundled internal web app tracking presets and entity names. |
| [`gtm_preview_preset`](#tool-gtm_preview_preset-22c972c9) | Supporting | Returns preset entity names and configurations locally without GTM operations. |
| [`gtm_deploy_preset`](#tool-gtm_deploy_preset-0e7f7805) | GTM | Creates preset variables, triggers, and tags sequentially, records per-entity errors, and optionally moves created entities into a folder. |

<a id="tool-gtm_list_accounts-c5d9b27f"></a>

## gtm_list_accounts

Handler: Calls Google Tag Manager API accounts.list.

```text
List all Google Tag Manager accounts accessible to the authenticated user
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/accounts.ts#L9-L30) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {},
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_get_account-b0358265"></a>

## gtm_get_account

Handler: Calls Google Tag Manager API accounts.get.

```text
Get a single Google Tag Manager account by its account ID
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/accounts.ts#L30-L55) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    }
  },
  "required": [
    "accountId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_update_account-860a61d8"></a>

## gtm_update_account

Handler: Calls Google Tag Manager API accounts.update.

```text
Update a Google Tag Manager account's name or data sharing settings
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/accounts.ts#L55-L91) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "name": {
      "type": "string",
      "description": "The new display name for the account"
    },
    "shareData": {
      "type": "boolean",
      "description": "Whether the account shares data anonymously with Google and others"
    }
  },
  "required": [
    "accountId",
    "name"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_list_containers-e45afd2b"></a>

## gtm_list_containers

Handler: Calls Google Tag Manager API accounts.containers.list.

```text
List all containers in a Google Tag Manager account
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/containers.ts#L9-L34) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    }
  },
  "required": [
    "accountId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_get_container-fdc6e39c"></a>

## gtm_get_container

Handler: Calls Google Tag Manager API accounts.containers.get.

```text
Get a single container by account ID and container ID
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/containers.ts#L34-L60) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    }
  },
  "required": [
    "accountId",
    "containerId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_create_container-67c96447"></a>

## gtm_create_container

Handler: Calls Google Tag Manager API accounts.containers.create.

```text
Create a new container in a Google Tag Manager account
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/containers.ts#L60-L109) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "name": {
      "type": "string",
      "description": "The container display name"
    },
    "usageContext": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Usage context for the container, e.g. [\"web\"], [\"server\"], or [\"web\",\"server\"]"
    },
    "notes": {
      "type": "string",
      "description": "Optional notes or description for the container"
    },
    "domainName": {
      "type": "string",
      "description": "Optional comma-separated list of domain names associated with the container"
    }
  },
  "required": [
    "accountId",
    "name",
    "usageContext"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_update_container-2d4e16fc"></a>

## gtm_update_container

Handler: Calls Google Tag Manager API accounts.containers.update.

```text
Update an existing container's properties such as name, usage context, notes, or domain
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/containers.ts#L109-L165) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "name": {
      "type": "string",
      "description": "New display name for the container"
    },
    "usageContext": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Updated usage context array"
    },
    "notes": {
      "type": "string",
      "description": "Updated notes for the container"
    },
    "domainName": {
      "type": "string",
      "description": "Updated comma-separated domain names"
    }
  },
  "required": [
    "accountId",
    "containerId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_delete_container-87eaf656"></a>

## gtm_delete_container

Handler: Calls Google Tag Manager API accounts.containers.delete.

```text
Delete a container from a Google Tag Manager account
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/containers.ts#L165-L200) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    }
  },
  "required": [
    "accountId",
    "containerId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_get_container_snippet-a7cc1184"></a>

## gtm_get_container_snippet

Handler: Fetches the container but reads publicId from the SDK response wrapper instead of response.data, so normal SDK responses omit the generated installation snippets.

```text
Get the container snippet code for installing GTM on a website. Returns the container information including the public ID needed for the snippet. The GTM snippet consists of a <script> tag for the <head> and a <noscript> tag for the <body>, both using the container's public ID (e.g. GTM-XXXXXX).
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/containers.ts#L200-L250) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    }
  },
  "required": [
    "accountId",
    "containerId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_list_workspaces-248ce86f"></a>

## gtm_list_workspaces

Handler: Calls Google Tag Manager API accounts.containers.workspaces.list.

```text
List all workspaces in a Google Tag Manager container
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/workspaces.ts#L9-L35) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    }
  },
  "required": [
    "accountId",
    "containerId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_get_workspace-573c6822"></a>

## gtm_get_workspace

Handler: Calls Google Tag Manager API accounts.containers.workspaces.get.

```text
Get a single workspace by its account, container, and workspace IDs
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/workspaces.ts#L35-L62) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_create_workspace-6324597f"></a>

## gtm_create_workspace

Handler: Calls Google Tag Manager API accounts.containers.workspaces.create.

```text
Create a new workspace in a Google Tag Manager container
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/workspaces.ts#L62-L98) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "name": {
      "type": "string",
      "description": "The workspace display name"
    },
    "description": {
      "type": "string",
      "description": "Optional description for the workspace"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "name"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_update_workspace-083bc7da"></a>

## gtm_update_workspace

Handler: Calls Google Tag Manager API accounts.containers.workspaces.update.

```text
Update an existing workspace's name or description
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/workspaces.ts#L98-L141) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    },
    "name": {
      "type": "string",
      "description": "New display name for the workspace"
    },
    "description": {
      "type": "string",
      "description": "Updated description for the workspace"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_delete_workspace-755351ec"></a>

## gtm_delete_workspace

Handler: Calls Google Tag Manager API accounts.containers.workspaces.delete.

```text
Delete a workspace from a Google Tag Manager container
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/workspaces.ts#L141-L177) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_sync_workspace-c11e7d2f"></a>

## gtm_sync_workspace

Handler: Calls Google Tag Manager API accounts.containers.workspaces.sync.

```text
Sync a workspace to the latest container version by updating all unmodified workspace entities and displaying conflicts for modified entities
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/workspaces.ts#L177-L204) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_quick_preview_workspace-ae602af3"></a>

## gtm_quick_preview_workspace

Handler: Calls Google Tag Manager API accounts.containers.workspaces.quick\_preview.

```text
Quick-preview a workspace by creating a server-side or otherwise fast preview of the container version from the workspace changes
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/workspaces.ts#L204-L232) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_create_version-50a805d7"></a>

## gtm_create_version

Handler: Calls Google Tag Manager API accounts.containers.workspaces.create\_version.

```text
Create a container version from the current workspace, optionally with a name and notes
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/workspaces.ts#L232-L276) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    },
    "name": {
      "type": "string",
      "description": "Optional name for the new container version"
    },
    "notes": {
      "type": "string",
      "description": "Optional notes describing the version"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_get_workspace_status-58373cea"></a>

## gtm_get_workspace_status

Handler: Calls Google Tag Manager API accounts.containers.workspaces.getStatus.

```text
Get the status of a workspace, showing which entities have been changed, added, or deleted
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/workspaces.ts#L276-L303) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_list_tags-b585bc12"></a>

## gtm_list_tags

Handler: Calls Google Tag Manager API accounts.containers.workspaces.tags.list.

```text
List all tags in a Google Tag Manager workspace
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/tags.ts#L39-L67) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_get_tag-3d242291"></a>

## gtm_get_tag

Handler: Calls Google Tag Manager API accounts.containers.workspaces.tags.get.

```text
Get a single tag by its ID within a workspace
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/tags.ts#L67-L96) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    },
    "tagId": {
      "type": "string",
      "description": "The GTM tag ID"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "tagId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_create_tag-c682840c"></a>

## gtm_create_tag

Handler: Calls Google Tag Manager API accounts.containers.workspaces.tags.create.

```text
Create a new tag in a Google Tag Manager workspace. Requires a name and type (e.g. 'googtag' for Google Tag, 'html' for Custom HTML, 'ua' for Universal Analytics). Parameters define the tag's configuration.
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/tags.ts#L96-L198) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    },
    "name": {
      "type": "string",
      "description": "The tag display name"
    },
    "type": {
      "type": "string",
      "description": "The tag type identifier (e.g. 'googtag', 'html', 'ua', 'awct', 'gaawc')"
    },
    "parameter": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "description": "The parameter type (e.g. 'template', 'list', 'map')"
          },
          "key": {
            "type": "string",
            "description": "The parameter key name"
          },
          "value": {
            "type": "string",
            "description": "The parameter value (for simple types)"
          },
          "list": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "type": {
                  "type": "string",
                  "description": "The list item type"
                },
                "key": {
                  "type": "string",
                  "description": "The list item key"
                },
                "value": {
                  "type": "string",
                  "description": "The list item value"
                }
              },
              "required": [
                "type"
              ],
              "additionalProperties": false
            },
            "description": "Nested list of parameter objects (for list/map types)"
          }
        },
        "required": [
          "type",
          "key"
        ],
        "additionalProperties": false
      },
      "description": "Tag parameters array defining the tag's configuration"
    },
    "firingTriggerId": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Array of trigger IDs that cause this tag to fire"
    },
    "blockingTriggerId": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Array of trigger IDs that block this tag from firing"
    },
    "liveOnly": {
      "type": "boolean",
      "description": "If true, this tag will only fire in the live environment (not in preview/debug)"
    },
    "scheduleStartMs": {
      "type": "string",
      "description": "The start timestamp in milliseconds to schedule the tag to start firing"
    },
    "scheduleEndMs": {
      "type": "string",
      "description": "The end timestamp in milliseconds to schedule the tag to stop firing"
    },
    "paused": {
      "type": "boolean",
      "description": "If true, the tag is paused and will not fire"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "name",
    "type"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_update_tag-23807743"></a>

## gtm_update_tag

Handler: Calls Google Tag Manager API accounts.containers.workspaces.tags.update.

```text
Update an existing tag's properties in a workspace. Any provided fields will be updated; omitted fields remain unchanged.
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/tags.ts#L198-L303) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    },
    "tagId": {
      "type": "string",
      "description": "The GTM tag ID"
    },
    "name": {
      "type": "string",
      "description": "Updated tag display name"
    },
    "type": {
      "type": "string",
      "description": "Updated tag type identifier"
    },
    "parameter": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "description": "The parameter type (e.g. 'template', 'list', 'map')"
          },
          "key": {
            "type": "string",
            "description": "The parameter key name"
          },
          "value": {
            "type": "string",
            "description": "The parameter value (for simple types)"
          },
          "list": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "type": {
                  "type": "string",
                  "description": "The list item type"
                },
                "key": {
                  "type": "string",
                  "description": "The list item key"
                },
                "value": {
                  "type": "string",
                  "description": "The list item value"
                }
              },
              "required": [
                "type"
              ],
              "additionalProperties": false
            },
            "description": "Nested list of parameter objects (for list/map types)"
          }
        },
        "required": [
          "type",
          "key"
        ],
        "additionalProperties": false
      },
      "description": "Tag parameters array defining the tag's configuration"
    },
    "firingTriggerId": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Updated array of trigger IDs that cause this tag to fire"
    },
    "blockingTriggerId": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Updated array of trigger IDs that block this tag from firing"
    },
    "liveOnly": {
      "type": "boolean",
      "description": "If true, this tag will only fire in the live environment"
    },
    "scheduleStartMs": {
      "type": "string",
      "description": "Updated start timestamp in milliseconds for tag scheduling"
    },
    "scheduleEndMs": {
      "type": "string",
      "description": "Updated end timestamp in milliseconds for tag scheduling"
    },
    "paused": {
      "type": "boolean",
      "description": "If true, the tag is paused and will not fire"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "tagId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_delete_tag-42a56cac"></a>

## gtm_delete_tag

Handler: Calls Google Tag Manager API accounts.containers.workspaces.tags.delete.

```text
Delete a tag from a Google Tag Manager workspace
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/tags.ts#L303-L341) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    },
    "tagId": {
      "type": "string",
      "description": "The GTM tag ID"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "tagId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_revert_tag-d946b9ec"></a>

## gtm_revert_tag

Handler: Calls Google Tag Manager API accounts.containers.workspaces.tags.revert.

```text
Revert changes to a tag in a workspace, restoring it to the state in the latest container version
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/tags.ts#L341-L369) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    },
    "tagId": {
      "type": "string",
      "description": "The GTM tag ID"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "tagId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_list_triggers-16b41a3c"></a>

## gtm_list_triggers

Handler: Calls Google Tag Manager API accounts.containers.workspaces.triggers.list.

```text
List all triggers in a GTM workspace
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/triggers.ts#L37-L66) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_get_trigger-669e5c62"></a>

## gtm_get_trigger

Handler: Calls Google Tag Manager API accounts.containers.workspaces.triggers.get.

```text
Get a single trigger from a GTM workspace
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/triggers.ts#L66-L96) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    },
    "triggerId": {
      "type": "string",
      "description": "The GTM trigger ID"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "triggerId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_create_trigger-99da4322"></a>

## gtm_create_trigger

Handler: Calls Google Tag Manager API accounts.containers.workspaces.triggers.create.

```text
Create a new trigger in a GTM workspace
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/triggers.ts#L96-L195) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    },
    "name": {
      "type": "string",
      "description": "The display name of the trigger"
    },
    "type": {
      "type": "string",
      "description": "The type of trigger (e.g. pageview, domReady, windowLoaded, customEvent, triggerGroup, etc.)"
    },
    "customEventFilter": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "description": "The type of operator for this condition"
          },
          "parameter": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "type": {
                  "type": "string",
                  "description": "The parameter type"
                },
                "key": {
                  "type": "string",
                  "description": "The named key that uniquely identifies a parameter"
                },
                "value": {
                  "type": "string",
                  "description": "The parameter value"
                }
              },
              "required": [
                "type",
                "key"
              ],
              "additionalProperties": false
            },
            "description": "The parameters for this condition"
          }
        },
        "required": [
          "type"
        ],
        "additionalProperties": false
      },
      "description": "Custom event filter conditions for custom event triggers"
    },
    "filter": {
      "$ref": "#/properties/customEventFilter",
      "description": "Filter conditions that cause the trigger to fire"
    },
    "autoEventFilter": {
      "$ref": "#/properties/customEventFilter",
      "description": "Auto-event filter conditions for auto-event triggers"
    },
    "waitForTags": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "description": "The parameter type"
        },
        "value": {
          "type": "string",
          "description": "The parameter value"
        }
      },
      "required": [
        "type"
      ],
      "additionalProperties": false,
      "description": "Whether the trigger waits for tags to fire before redirecting"
    },
    "checkValidation": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "description": "The parameter type"
        },
        "value": {
          "type": "string",
          "description": "The parameter value"
        }
      },
      "required": [
        "type"
      ],
      "additionalProperties": false,
      "description": "Whether the trigger checks validation before firing"
    },
    "waitForTagsTimeout": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "description": "The parameter type"
        },
        "value": {
          "type": "string",
          "description": "The parameter value"
        }
      },
      "required": [
        "type"
      ],
      "additionalProperties": false,
      "description": "Timeout for waitForTags in milliseconds"
    },
    "uniqueTriggerId": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "description": "The parameter type"
        },
        "value": {
          "type": "string",
          "description": "The parameter value"
        }
      },
      "required": [
        "type"
      ],
      "additionalProperties": false,
      "description": "Globally unique ID of the trigger"
    },
    "parameter": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "description": "The parameter type"
          },
          "key": {
            "type": "string",
            "description": "The named key that uniquely identifies a parameter"
          },
          "value": {
            "type": "string",
            "description": "The parameter value"
          }
        },
        "required": [
          "type",
          "key"
        ],
        "additionalProperties": false
      },
      "description": "Additional parameters for the trigger"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "name",
    "type"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_update_trigger-ce48de45"></a>

## gtm_update_trigger

Handler: Calls Google Tag Manager API accounts.containers.workspaces.triggers.update.

```text
Update an existing trigger in a GTM workspace
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/triggers.ts#L195-L299) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    },
    "triggerId": {
      "type": "string",
      "description": "The GTM trigger ID"
    },
    "name": {
      "type": "string",
      "description": "The display name of the trigger"
    },
    "type": {
      "type": "string",
      "description": "The type of trigger (e.g. pageview, domReady, windowLoaded, customEvent, triggerGroup, etc.)"
    },
    "customEventFilter": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "description": "The type of operator for this condition"
          },
          "parameter": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "type": {
                  "type": "string",
                  "description": "The parameter type"
                },
                "key": {
                  "type": "string",
                  "description": "The named key that uniquely identifies a parameter"
                },
                "value": {
                  "type": "string",
                  "description": "The parameter value"
                }
              },
              "required": [
                "type",
                "key"
              ],
              "additionalProperties": false
            },
            "description": "The parameters for this condition"
          }
        },
        "required": [
          "type"
        ],
        "additionalProperties": false
      },
      "description": "Custom event filter conditions for custom event triggers"
    },
    "filter": {
      "$ref": "#/properties/customEventFilter",
      "description": "Filter conditions that cause the trigger to fire"
    },
    "autoEventFilter": {
      "$ref": "#/properties/customEventFilter",
      "description": "Auto-event filter conditions for auto-event triggers"
    },
    "waitForTags": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "description": "The parameter type"
        },
        "value": {
          "type": "string",
          "description": "The parameter value"
        }
      },
      "required": [
        "type"
      ],
      "additionalProperties": false,
      "description": "Whether the trigger waits for tags to fire before redirecting"
    },
    "checkValidation": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "description": "The parameter type"
        },
        "value": {
          "type": "string",
          "description": "The parameter value"
        }
      },
      "required": [
        "type"
      ],
      "additionalProperties": false,
      "description": "Whether the trigger checks validation before firing"
    },
    "waitForTagsTimeout": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "description": "The parameter type"
        },
        "value": {
          "type": "string",
          "description": "The parameter value"
        }
      },
      "required": [
        "type"
      ],
      "additionalProperties": false,
      "description": "Timeout for waitForTags in milliseconds"
    },
    "uniqueTriggerId": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "description": "The parameter type"
        },
        "value": {
          "type": "string",
          "description": "The parameter value"
        }
      },
      "required": [
        "type"
      ],
      "additionalProperties": false,
      "description": "Globally unique ID of the trigger"
    },
    "parameter": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "description": "The parameter type"
          },
          "key": {
            "type": "string",
            "description": "The named key that uniquely identifies a parameter"
          },
          "value": {
            "type": "string",
            "description": "The parameter value"
          }
        },
        "required": [
          "type",
          "key"
        ],
        "additionalProperties": false
      },
      "description": "Additional parameters for the trigger"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "triggerId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_delete_trigger-dac3085f"></a>

## gtm_delete_trigger

Handler: Calls Google Tag Manager API accounts.containers.workspaces.triggers.delete.

```text
Delete a trigger from a GTM workspace
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/triggers.ts#L299-L329) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    },
    "triggerId": {
      "type": "string",
      "description": "The GTM trigger ID"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "triggerId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_revert_trigger-e5cc38f4"></a>

## gtm_revert_trigger

Handler: Calls Google Tag Manager API accounts.containers.workspaces.triggers.revert.

```text
Revert changes to a trigger in a GTM workspace
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/triggers.ts#L329-L358) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    },
    "triggerId": {
      "type": "string",
      "description": "The GTM trigger ID"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "triggerId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_list_variables-81705a80"></a>

## gtm_list_variables

Handler: Calls Google Tag Manager API accounts.containers.workspaces.variables.list.

```text
List all variables in a GTM workspace
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/variables.ts#L66-L95) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_get_variable-e6ff3763"></a>

## gtm_get_variable

Handler: Calls Google Tag Manager API accounts.containers.workspaces.variables.get.

```text
Get a single variable from a GTM workspace
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/variables.ts#L95-L125) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    },
    "variableId": {
      "type": "string",
      "description": "The GTM variable ID"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "variableId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_create_variable-5b853337"></a>

## gtm_create_variable

Handler: Calls Google Tag Manager API accounts.containers.workspaces.variables.create.

```text
Create a new variable in a GTM workspace
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/variables.ts#L125-L191) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    },
    "name": {
      "type": "string",
      "description": "The display name of the variable"
    },
    "type": {
      "type": "string",
      "description": "The type of variable (e.g. v, jsm, j, gas, remm, smm, k, aev, ctv, etc.)"
    },
    "parameter": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "description": "The parameter type"
          },
          "key": {
            "type": "string",
            "description": "The named key that uniquely identifies a parameter"
          },
          "value": {
            "type": "string",
            "description": "The parameter value"
          },
          "list": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "type": {
                  "type": "string",
                  "description": "The list item type"
                },
                "key": {
                  "type": "string",
                  "description": "The list item key"
                },
                "value": {
                  "type": "string",
                  "description": "The list item value"
                }
              },
              "required": [
                "type"
              ],
              "additionalProperties": false
            },
            "description": "The list of parameters (for list/map types)"
          }
        },
        "required": [
          "type",
          "key"
        ],
        "additionalProperties": false
      },
      "description": "Variable parameters"
    },
    "formatValue": {
      "type": "object",
      "properties": {
        "caseConversionType": {
          "type": "string",
          "description": "The case conversion type (e.g. lowercase, uppercase, none)"
        },
        "convertNullToValue": {
          "type": "object",
          "properties": {
            "type": {
              "type": "string",
              "description": "The parameter type"
            },
            "value": {
              "type": "string",
              "description": "The value to convert null to"
            }
          },
          "required": [
            "type"
          ],
          "additionalProperties": false,
          "description": "Value to convert null to"
        },
        "convertUndefinedToValue": {
          "type": "object",
          "properties": {
            "type": {
              "type": "string",
              "description": "The parameter type"
            },
            "value": {
              "type": "string",
              "description": "The value to convert undefined to"
            }
          },
          "required": [
            "type"
          ],
          "additionalProperties": false,
          "description": "Value to convert undefined to"
        },
        "convertTrueToValue": {
          "type": "object",
          "properties": {
            "type": {
              "type": "string",
              "description": "The parameter type"
            },
            "value": {
              "type": "string",
              "description": "The value to convert true to"
            }
          },
          "required": [
            "type"
          ],
          "additionalProperties": false,
          "description": "Value to convert true to"
        },
        "convertFalseToValue": {
          "type": "object",
          "properties": {
            "type": {
              "type": "string",
              "description": "The parameter type"
            },
            "value": {
              "type": "string",
              "description": "The value to convert false to"
            }
          },
          "required": [
            "type"
          ],
          "additionalProperties": false,
          "description": "Value to convert false to"
        }
      },
      "additionalProperties": false,
      "description": "Options for formatting the variable value"
    },
    "disablingTriggerId": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Trigger IDs that disable this variable"
    },
    "enablingTriggerId": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Trigger IDs that enable this variable"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "name",
    "type"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_update_variable-898f92d4"></a>

## gtm_update_variable

Handler: Calls Google Tag Manager API accounts.containers.workspaces.variables.update.

```text
Update an existing variable in a GTM workspace
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/variables.ts#L191-L262) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    },
    "variableId": {
      "type": "string",
      "description": "The GTM variable ID"
    },
    "name": {
      "type": "string",
      "description": "The display name of the variable"
    },
    "type": {
      "type": "string",
      "description": "The type of variable (e.g. v, jsm, j, gas, remm, smm, k, aev, ctv, etc.)"
    },
    "parameter": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "description": "The parameter type"
          },
          "key": {
            "type": "string",
            "description": "The named key that uniquely identifies a parameter"
          },
          "value": {
            "type": "string",
            "description": "The parameter value"
          },
          "list": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "type": {
                  "type": "string",
                  "description": "The list item type"
                },
                "key": {
                  "type": "string",
                  "description": "The list item key"
                },
                "value": {
                  "type": "string",
                  "description": "The list item value"
                }
              },
              "required": [
                "type"
              ],
              "additionalProperties": false
            },
            "description": "The list of parameters (for list/map types)"
          }
        },
        "required": [
          "type",
          "key"
        ],
        "additionalProperties": false
      },
      "description": "Variable parameters"
    },
    "formatValue": {
      "type": "object",
      "properties": {
        "caseConversionType": {
          "type": "string",
          "description": "The case conversion type (e.g. lowercase, uppercase, none)"
        },
        "convertNullToValue": {
          "type": "object",
          "properties": {
            "type": {
              "type": "string",
              "description": "The parameter type"
            },
            "value": {
              "type": "string",
              "description": "The value to convert null to"
            }
          },
          "required": [
            "type"
          ],
          "additionalProperties": false,
          "description": "Value to convert null to"
        },
        "convertUndefinedToValue": {
          "type": "object",
          "properties": {
            "type": {
              "type": "string",
              "description": "The parameter type"
            },
            "value": {
              "type": "string",
              "description": "The value to convert undefined to"
            }
          },
          "required": [
            "type"
          ],
          "additionalProperties": false,
          "description": "Value to convert undefined to"
        },
        "convertTrueToValue": {
          "type": "object",
          "properties": {
            "type": {
              "type": "string",
              "description": "The parameter type"
            },
            "value": {
              "type": "string",
              "description": "The value to convert true to"
            }
          },
          "required": [
            "type"
          ],
          "additionalProperties": false,
          "description": "Value to convert true to"
        },
        "convertFalseToValue": {
          "type": "object",
          "properties": {
            "type": {
              "type": "string",
              "description": "The parameter type"
            },
            "value": {
              "type": "string",
              "description": "The value to convert false to"
            }
          },
          "required": [
            "type"
          ],
          "additionalProperties": false,
          "description": "Value to convert false to"
        }
      },
      "additionalProperties": false,
      "description": "Options for formatting the variable value"
    },
    "disablingTriggerId": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Trigger IDs that disable this variable"
    },
    "enablingTriggerId": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Trigger IDs that enable this variable"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "variableId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_delete_variable-9bd36787"></a>

## gtm_delete_variable

Handler: Calls Google Tag Manager API accounts.containers.workspaces.variables.delete.

```text
Delete a variable from a GTM workspace
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/variables.ts#L262-L292) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    },
    "variableId": {
      "type": "string",
      "description": "The GTM variable ID"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "variableId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_revert_variable-c14bd29c"></a>

## gtm_revert_variable

Handler: Calls Google Tag Manager API accounts.containers.workspaces.variables.revert.

```text
Revert changes to a variable in a GTM workspace
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/variables.ts#L292-L321) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    },
    "variableId": {
      "type": "string",
      "description": "The GTM variable ID"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "variableId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_list_built_in_variables-af7ccc4e"></a>

## gtm_list_built_in_variables

Handler: Calls Google Tag Manager API accounts.containers.workspaces.built\_in\_variables.list.

```text
List all built-in variables in a GTM workspace
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/built-in-variables.ts#L9-L38) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_create_built_in_variable-f6a3aa30"></a>

## gtm_create_built_in_variable

Handler: Calls Google Tag Manager API accounts.containers.workspaces.built\_in\_variables.create.

```text
Enable (create) built-in variables in a GTM workspace
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/built-in-variables.ts#L38-L73) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    },
    "type": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "The types of built-in variables to enable (e.g. pageUrl, pageHostname, pagePath, referrer, event, clickElement, clickClasses, clickId, clickTarget, clickUrl, clickText, formElement, formClasses, formId, formTarget, formUrl, formText, errorMessage, errorUrl, errorLine, newHistoryFragment, oldHistoryFragment, newHistoryState, oldHistoryState, historySource, containerVersion, debugMode, randomNumber, containerId)"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "type"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_delete_built_in_variable-579720b8"></a>

## gtm_delete_built_in_variable

Handler: Calls Google Tag Manager API accounts.containers.workspaces.built\_in\_variables.delete.

```text
Disable (delete) built-in variables from a GTM workspace
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/built-in-variables.ts#L73-L106) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    },
    "type": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "The types of built-in variables to disable"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "type"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_revert_built_in_variable-19445473"></a>

## gtm_revert_built_in_variable

Handler: Calls Google Tag Manager API accounts.containers.workspaces.built\_in\_variables.revert.

```text
Revert changes to a built-in variable in a GTM workspace
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/built-in-variables.ts#L106-L138) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    },
    "type": {
      "type": "string",
      "description": "The type of built-in variable to revert"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "type"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_list_folders-9da6c22f"></a>

## gtm_list_folders

Handler: Calls Google Tag Manager API accounts.containers.workspaces.folders.list.

```text
List all folders in a GTM workspace
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/folders.ts#L9-L38) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_get_folder-a5332034"></a>

## gtm_get_folder

Handler: Calls Google Tag Manager API accounts.containers.workspaces.folders.get.

```text
Get a single folder from a GTM workspace
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/folders.ts#L38-L68) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    },
    "folderId": {
      "type": "string",
      "description": "The GTM folder ID"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "folderId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_create_folder-a7f80e8c"></a>

## gtm_create_folder

Handler: Calls Google Tag Manager API accounts.containers.workspaces.folders.create.

```text
Create a new folder in a GTM workspace
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/folders.ts#L68-L106) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    },
    "name": {
      "type": "string",
      "description": "The display name of the folder"
    },
    "notes": {
      "type": "string",
      "description": "User notes for the folder"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "name"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_update_folder-0eb0b999"></a>

## gtm_update_folder

Handler: Calls Google Tag Manager API accounts.containers.workspaces.folders.update.

```text
Update an existing folder in a GTM workspace
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/folders.ts#L106-L149) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    },
    "folderId": {
      "type": "string",
      "description": "The GTM folder ID"
    },
    "name": {
      "type": "string",
      "description": "The display name of the folder"
    },
    "notes": {
      "type": "string",
      "description": "User notes for the folder"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "folderId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_delete_folder-9602489f"></a>

## gtm_delete_folder

Handler: Calls Google Tag Manager API accounts.containers.workspaces.folders.delete.

```text
Delete a folder from a GTM workspace
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/folders.ts#L149-L179) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    },
    "folderId": {
      "type": "string",
      "description": "The GTM folder ID"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "folderId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_move_entities_to_folder-3d5f0ae9"></a>

## gtm_move_entities_to_folder

Handler: Calls Google Tag Manager API accounts.containers.workspaces.folders.move\_entities\_to\_folder.

```text
Move tags, triggers, and/or variables into a folder in a GTM workspace
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/folders.ts#L179-L233) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    },
    "folderId": {
      "type": "string",
      "description": "The GTM folder ID to move entities into"
    },
    "tagId": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Tag IDs to move into the folder"
    },
    "triggerId": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Trigger IDs to move into the folder"
    },
    "variableId": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Variable IDs to move into the folder"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "folderId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_list_environments-9f7a4399"></a>

## gtm_list_environments

Handler: Calls Google Tag Manager API accounts.containers.environments.list.

```text
List all environments in a Google Tag Manager container
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/environments.ts#L9-L35) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    }
  },
  "required": [
    "accountId",
    "containerId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_get_environment-9574f4ec"></a>

## gtm_get_environment

Handler: Calls Google Tag Manager API accounts.containers.environments.get.

```text
Get a single environment by account ID, container ID, and environment ID
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/environments.ts#L35-L62) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "environmentId": {
      "type": "string",
      "description": "The GTM environment ID"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "environmentId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_create_environment-f4b9f2a2"></a>

## gtm_create_environment

Handler: Calls Google Tag Manager API accounts.containers.environments.create.

```text
Create a new environment in a Google Tag Manager container
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/environments.ts#L62-L121) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "name": {
      "type": "string",
      "description": "The environment display name"
    },
    "description": {
      "type": "string",
      "description": "Optional description for the environment"
    },
    "type": {
      "type": "string",
      "description": "The environment type, e.g. 'user', 'live', or 'latest'"
    },
    "enableDebug": {
      "type": "boolean",
      "description": "Whether to enable debug mode for this environment"
    },
    "url": {
      "type": "string",
      "description": "The default URL for the environment preview"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "name"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_update_environment-0e3b039d"></a>

## gtm_update_environment

Handler: Calls Google Tag Manager API accounts.containers.environments.update.

```text
Update an existing environment's properties such as name, description, debug mode, or URL
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/environments.ts#L121-L178) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "environmentId": {
      "type": "string",
      "description": "The GTM environment ID"
    },
    "name": {
      "type": "string",
      "description": "Updated display name for the environment"
    },
    "description": {
      "type": "string",
      "description": "Updated description for the environment"
    },
    "enableDebug": {
      "type": "boolean",
      "description": "Whether to enable debug mode for this environment"
    },
    "url": {
      "type": "string",
      "description": "Updated default URL for the environment preview"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "environmentId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_delete_environment-8cc50977"></a>

## gtm_delete_environment

Handler: Calls Google Tag Manager API accounts.containers.environments.delete.

```text
Delete an environment from a Google Tag Manager container
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/environments.ts#L178-L213) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "environmentId": {
      "type": "string",
      "description": "The GTM environment ID"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "environmentId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_get_version-c83b7c02"></a>

## gtm_get_version

Handler: Calls Google Tag Manager API accounts.containers.versions.get.

```text
Get a specific container version by account ID, container ID, and version ID
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/versions.ts#L9-L36) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "versionId": {
      "type": "string",
      "description": "The GTM container version ID"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "versionId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_publish_version-0cc97535"></a>

## gtm_publish_version

Handler: Calls Google Tag Manager API accounts.containers.versions.publish.

```text
Publish a container version, making it live
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/versions.ts#L36-L63) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "versionId": {
      "type": "string",
      "description": "The GTM container version ID to publish"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "versionId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_list_version_headers-1b2c0287"></a>

## gtm_list_version_headers

Handler: Calls Google Tag Manager API accounts.containers.version\_headers.list.

```text
List all container version headers in a container, providing a lightweight summary of each version
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/versions.ts#L63-L89) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    }
  },
  "required": [
    "accountId",
    "containerId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_set_latest_version-80a1483f"></a>

## gtm_set_latest_version

Handler: Calls Google Tag Manager API accounts.containers.versions.set\_latest.

```text
Set a container version as the latest version
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/versions.ts#L89-L118) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "versionId": {
      "type": "string",
      "description": "The GTM container version ID to set as latest"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "versionId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_delete_version-e3e5ab73"></a>

## gtm_delete_version

Handler: Calls Google Tag Manager API accounts.containers.versions.delete.

```text
Delete a container version
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/versions.ts#L118-L156) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "versionId": {
      "type": "string",
      "description": "The GTM container version ID to delete"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "versionId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_undelete_version-76a4263a"></a>

## gtm_undelete_version

Handler: Calls Google Tag Manager API accounts.containers.versions.undelete.

```text
Undelete a previously deleted container version
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/versions.ts#L156-L184) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "versionId": {
      "type": "string",
      "description": "The GTM container version ID to undelete"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "versionId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_list_templates-8d77f0ae"></a>

## gtm_list_templates

Handler: Calls Google Tag Manager API accounts.containers.workspaces.templates.list.

```text
List all custom templates in a Google Tag Manager workspace
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/templates.ts#L9-L37) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_get_template-824e180d"></a>

## gtm_get_template

Handler: Calls Google Tag Manager API accounts.containers.workspaces.templates.get.

```text
Get a single custom template by its ID within a workspace
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/templates.ts#L37-L66) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    },
    "templateId": {
      "type": "string",
      "description": "The GTM template ID"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "templateId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_create_template-5614d059"></a>

## gtm_create_template

Handler: Calls Google Tag Manager API accounts.containers.workspaces.templates.create.

```text
Create a new custom template in a Google Tag Manager workspace
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/templates.ts#L66-L106) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    },
    "templateData": {
      "type": "string",
      "description": "The .tpl file content for the custom template"
    },
    "name": {
      "type": "string",
      "description": "Optional display name for the template"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "templateData"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_update_template-c57577d6"></a>

## gtm_update_template

Handler: Calls Google Tag Manager API accounts.containers.workspaces.templates.update.

```text
Update an existing custom template in a Google Tag Manager workspace
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/templates.ts#L106-L158) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    },
    "templateId": {
      "type": "string",
      "description": "The GTM template ID"
    },
    "templateData": {
      "type": "string",
      "description": "Updated .tpl file content for the custom template"
    },
    "name": {
      "type": "string",
      "description": "Updated display name for the template"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "templateId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_delete_template-a7777f3c"></a>

## gtm_delete_template

Handler: Calls Google Tag Manager API accounts.containers.workspaces.templates.delete.

```text
Delete a custom template from a Google Tag Manager workspace
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/templates.ts#L158-L196) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    },
    "templateId": {
      "type": "string",
      "description": "The GTM template ID"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "templateId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_revert_template-e2c41e5e"></a>

## gtm_revert_template

Handler: Calls Google Tag Manager API accounts.containers.workspaces.templates.revert.

```text
Revert changes to a custom template in a Google Tag Manager workspace
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/templates.ts#L196-L224) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    },
    "templateId": {
      "type": "string",
      "description": "The GTM template ID"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "templateId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_list_user_permissions-97b567b6"></a>

## gtm_list_user_permissions

Handler: Calls Google Tag Manager API accounts.user\_permissions.

```text
List all user permissions for a Google Tag Manager account
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/user-permissions.ts#L9-L34) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    }
  },
  "required": [
    "accountId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_get_user_permission-6e708d22"></a>

## gtm_get_user_permission

Handler: Calls Google Tag Manager API accounts.user\_permissions.

```text
Get a single user permission entry by account ID and user permission ID
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/user-permissions.ts#L34-L62) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "userPermissionId": {
      "type": "string",
      "description": "The GTM user permission ID"
    }
  },
  "required": [
    "accountId",
    "userPermissionId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_create_user_permission-78bb327e"></a>

## gtm_create_user_permission

Handler: Calls Google Tag Manager API accounts.user\_permissions.

```text
Create a new user permission entry for a Google Tag Manager account, granting access to a user by email
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/user-permissions.ts#L62-L121) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "emailAddress": {
      "type": "string",
      "description": "The email address of the user to grant permissions to"
    },
    "accountAccess": {
      "type": "object",
      "properties": {
        "permission": {
          "type": "string",
          "description": "Account-level permission, e.g. 'admin', 'user', 'noAccess'"
        }
      },
      "required": [
        "permission"
      ],
      "additionalProperties": false,
      "description": "Account-level access settings"
    },
    "containerAccess": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "containerId": {
            "type": "string",
            "description": "The container ID to grant access to"
          },
          "permission": {
            "type": "string",
            "description": "Container-level permission, e.g. 'noAccess', 'read', 'edit', 'approve', 'publish'"
          }
        },
        "required": [
          "containerId",
          "permission"
        ],
        "additionalProperties": false
      },
      "description": "Array of container-level access settings"
    }
  },
  "required": [
    "accountId",
    "emailAddress"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_update_user_permission-c6505886"></a>

## gtm_update_user_permission

Handler: Calls Google Tag Manager API accounts.user\_permissions.

```text
Update an existing user permission entry for a Google Tag Manager account
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/user-permissions.ts#L121-L193) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "userPermissionId": {
      "type": "string",
      "description": "The GTM user permission ID to update"
    },
    "emailAddress": {
      "type": "string",
      "description": "Updated email address for the user permission"
    },
    "accountAccess": {
      "type": "object",
      "properties": {
        "permission": {
          "type": "string",
          "description": "Account-level permission, e.g. 'admin', 'user', 'noAccess'"
        }
      },
      "required": [
        "permission"
      ],
      "additionalProperties": false,
      "description": "Updated account-level access settings"
    },
    "containerAccess": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "containerId": {
            "type": "string",
            "description": "The container ID to grant access to"
          },
          "permission": {
            "type": "string",
            "description": "Container-level permission, e.g. 'noAccess', 'read', 'edit', 'approve', 'publish'"
          }
        },
        "required": [
          "containerId",
          "permission"
        ],
        "additionalProperties": false
      },
      "description": "Updated array of container-level access settings"
    }
  },
  "required": [
    "accountId",
    "userPermissionId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_delete_user_permission-d28d25e3"></a>

## gtm_delete_user_permission

Handler: Calls Google Tag Manager API accounts.user\_permissions.

```text
Delete a user permission entry from a Google Tag Manager account
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/user-permissions.ts#L193-L232) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "userPermissionId": {
      "type": "string",
      "description": "The GTM user permission ID to delete"
    }
  },
  "required": [
    "accountId",
    "userPermissionId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_list_zones-8f9cbfc8"></a>

## gtm_list_zones

Handler: Calls Google Tag Manager API accounts.containers.workspaces.zones.list.

```text
List all zones in a Google Tag Manager workspace
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/zones.ts#L9-L37) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_get_zone-4df554bd"></a>

## gtm_get_zone

Handler: Calls Google Tag Manager API accounts.containers.workspaces.zones.get.

```text
Get a single zone by its ID within a workspace
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/zones.ts#L37-L66) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    },
    "zoneId": {
      "type": "string",
      "description": "The GTM zone ID"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "zoneId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_create_zone-ddf1b18f"></a>

## gtm_create_zone

Handler: Calls Google Tag Manager API accounts.containers.workspaces.zones.create.

```text
Create a new zone in a Google Tag Manager workspace
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/zones.ts#L66-L171) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    },
    "name": {
      "type": "string",
      "description": "The zone display name"
    },
    "childContainer": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "publicId": {
            "type": "string",
            "description": "The public ID of the child container (e.g. GTM-XXXXXX)"
          },
          "nickname": {
            "type": "string",
            "description": "A nickname for the child container"
          }
        },
        "required": [
          "publicId",
          "nickname"
        ],
        "additionalProperties": false
      },
      "description": "Array of child containers included in this zone"
    },
    "boundary": {
      "type": "object",
      "properties": {
        "condition": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "type": {
                "type": "string",
                "description": "The condition type, e.g. 'equals', 'contains', 'startsWith', 'endsWith', 'matchRegex'"
              },
              "parameter": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "description": "The parameter type, e.g. 'template'"
                    },
                    "key": {
                      "type": "string",
                      "description": "The parameter key"
                    },
                    "value": {
                      "type": "string",
                      "description": "The parameter value"
                    }
                  },
                  "required": [
                    "type",
                    "key"
                  ],
                  "additionalProperties": false
                },
                "description": "Array of parameters for this condition"
              }
            },
            "required": [
              "type"
            ],
            "additionalProperties": false
          },
          "description": "Array of boundary conditions"
        }
      },
      "additionalProperties": false,
      "description": "The boundary configuration for the zone"
    },
    "typeRestriction": {
      "type": "object",
      "properties": {
        "enable": {
          "type": "boolean",
          "description": "Whether type restrictions are enabled"
        },
        "whitelistedTypeId": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "Array of whitelisted tag type IDs"
        }
      },
      "required": [
        "enable"
      ],
      "additionalProperties": false,
      "description": "Tag type restrictions for the zone"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "name"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_update_zone-73d35ad5"></a>

## gtm_update_zone

Handler: Calls Google Tag Manager API accounts.containers.workspaces.zones.update.

```text
Update an existing zone in a Google Tag Manager workspace
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/zones.ts#L171-L284) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    },
    "zoneId": {
      "type": "string",
      "description": "The GTM zone ID"
    },
    "name": {
      "type": "string",
      "description": "Updated display name for the zone"
    },
    "childContainer": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "publicId": {
            "type": "string",
            "description": "The public ID of the child container (e.g. GTM-XXXXXX)"
          },
          "nickname": {
            "type": "string",
            "description": "A nickname for the child container"
          }
        },
        "required": [
          "publicId",
          "nickname"
        ],
        "additionalProperties": false
      },
      "description": "Updated array of child containers"
    },
    "boundary": {
      "type": "object",
      "properties": {
        "condition": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "type": {
                "type": "string",
                "description": "The condition type, e.g. 'equals', 'contains', 'startsWith', 'endsWith', 'matchRegex'"
              },
              "parameter": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "description": "The parameter type, e.g. 'template'"
                    },
                    "key": {
                      "type": "string",
                      "description": "The parameter key"
                    },
                    "value": {
                      "type": "string",
                      "description": "The parameter value"
                    }
                  },
                  "required": [
                    "type",
                    "key"
                  ],
                  "additionalProperties": false
                },
                "description": "Array of parameters for this condition"
              }
            },
            "required": [
              "type"
            ],
            "additionalProperties": false
          },
          "description": "Array of boundary conditions"
        }
      },
      "additionalProperties": false,
      "description": "Updated boundary configuration for the zone"
    },
    "typeRestriction": {
      "type": "object",
      "properties": {
        "enable": {
          "type": "boolean",
          "description": "Whether type restrictions are enabled"
        },
        "whitelistedTypeId": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "Array of whitelisted tag type IDs"
        }
      },
      "required": [
        "enable"
      ],
      "additionalProperties": false,
      "description": "Updated tag type restrictions for the zone"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "zoneId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_delete_zone-b659a4bc"></a>

## gtm_delete_zone

Handler: Calls Google Tag Manager API accounts.containers.workspaces.zones.delete.

```text
Delete a zone from a Google Tag Manager workspace
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/zones.ts#L284-L322) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    },
    "zoneId": {
      "type": "string",
      "description": "The GTM zone ID"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "zoneId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_revert_zone-a6d34405"></a>

## gtm_revert_zone

Handler: Calls Google Tag Manager API accounts.containers.workspaces.zones.revert.

```text
Revert changes to a zone in a Google Tag Manager workspace
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/zones.ts#L322-L350) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    },
    "zoneId": {
      "type": "string",
      "description": "The GTM zone ID"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "zoneId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_list_clients-bd1499aa"></a>

## gtm_list_clients

Handler: Calls Google Tag Manager API accounts.containers.workspaces.clients.list.

```text
List all clients in a GTM workspace (server containers)
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/clients.ts#L19-L46) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_get_client-805d1819"></a>

## gtm_get_client

Handler: Calls Google Tag Manager API accounts.containers.workspaces.clients.get.

```text
Get a single client from a GTM workspace (server containers)
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/clients.ts#L46-L74) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    },
    "clientId": {
      "type": "string",
      "description": "The GTM client ID"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "clientId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_create_client-aefac744"></a>

## gtm_create_client

Handler: Calls Google Tag Manager API accounts.containers.workspaces.clients.create.

```text
Create a new client in a GTM workspace (server containers)
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/clients.ts#L74-L108) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    },
    "name": {
      "type": "string",
      "description": "The display name of the client"
    },
    "type": {
      "type": "string",
      "description": "The type of the client"
    },
    "parameter": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "description": "The parameter type"
          },
          "key": {
            "type": "string",
            "description": "The named key that uniquely identifies a parameter"
          },
          "value": {
            "type": "string",
            "description": "The parameter value"
          }
        },
        "required": [
          "type",
          "key"
        ],
        "additionalProperties": false
      },
      "description": "Additional parameters for the client"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "name",
    "type"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_update_client-49d21241"></a>

## gtm_update_client

Handler: Calls Google Tag Manager API accounts.containers.workspaces.clients.update.

```text
Update an existing client in a GTM workspace (server containers)
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/clients.ts#L108-L145) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    },
    "clientId": {
      "type": "string",
      "description": "The GTM client ID"
    },
    "name": {
      "type": "string",
      "description": "The display name of the client"
    },
    "type": {
      "type": "string",
      "description": "The type of the client"
    },
    "parameter": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "description": "The parameter type"
          },
          "key": {
            "type": "string",
            "description": "The named key that uniquely identifies a parameter"
          },
          "value": {
            "type": "string",
            "description": "The parameter value"
          }
        },
        "required": [
          "type",
          "key"
        ],
        "additionalProperties": false
      },
      "description": "Additional parameters for the client"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "clientId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_delete_client-1584ff14"></a>

## gtm_delete_client

Handler: Calls Google Tag Manager API accounts.containers.workspaces.clients.delete.

```text
Delete a client from a GTM workspace (server containers)
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/clients.ts#L145-L173) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    },
    "clientId": {
      "type": "string",
      "description": "The GTM client ID"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "clientId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_revert_client-a93ba9e0"></a>

## gtm_revert_client

Handler: Calls Google Tag Manager API accounts.containers.workspaces.clients.revert.

```text
Revert changes to a client in a GTM workspace (server containers)
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/clients.ts#L173-L200) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    },
    "clientId": {
      "type": "string",
      "description": "The GTM client ID"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "clientId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_list_destinations-4dd586f2"></a>

## gtm_list_destinations

Handler: Calls Google Tag Manager API accounts.containers.destinations.list.

```text
List all destinations linked to a GTM container
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/destinations.ts#L9-L35) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    }
  },
  "required": [
    "accountId",
    "containerId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_get_destination-1f5c3969"></a>

## gtm_get_destination

Handler: Calls Google Tag Manager API accounts.containers.destinations.get.

```text
Get a single destination linked to a GTM container
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/destinations.ts#L35-L62) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "destinationLinkId": {
      "type": "string",
      "description": "The destination link ID"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "destinationLinkId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_link_destination-5e61eba1"></a>

## gtm_link_destination

Handler: Calls Google Tag Manager API accounts.containers.destinations.link.

```text
Link a destination to a GTM container
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/destinations.ts#L62-L99) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "destinationId": {
      "type": "string",
      "description": "The destination ID to link"
    },
    "allowUserPermissionFeatureUpdate": {
      "type": "boolean",
      "description": "Whether to allow user permission feature update"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "destinationId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_unlink_destination-180f732e"></a>

## gtm_unlink_destination

Handler: Attempts destinations.unlink through an any cast; that method is absent from the installed Tag Manager client and returns an error.

```text
Unlink a destination from a GTM container
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/destinations.ts#L99-L125) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "destinationLinkId": {
      "type": "string",
      "description": "The destination link ID to unlink"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "destinationLinkId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_list_transformations-5197f98a"></a>

## gtm_list_transformations

Handler: Calls Google Tag Manager API accounts.containers.workspaces.transformations.list.

```text
List all transformations in a GTM workspace
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/transformations.ts#L19-L46) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_get_transformation-0c9c60f4"></a>

## gtm_get_transformation

Handler: Calls Google Tag Manager API accounts.containers.workspaces.transformations.get.

```text
Get a single transformation from a GTM workspace
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/transformations.ts#L46-L74) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    },
    "transformationId": {
      "type": "string",
      "description": "The GTM transformation ID"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "transformationId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_create_transformation-321af14e"></a>

## gtm_create_transformation

Handler: Calls Google Tag Manager API accounts.containers.workspaces.transformations.create.

```text
Create a new transformation in a GTM workspace
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/transformations.ts#L74-L108) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    },
    "name": {
      "type": "string",
      "description": "The display name of the transformation"
    },
    "type": {
      "type": "string",
      "description": "The type of the transformation"
    },
    "parameter": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "description": "The parameter type"
          },
          "key": {
            "type": "string",
            "description": "The named key that uniquely identifies a parameter"
          },
          "value": {
            "type": "string",
            "description": "The parameter value"
          }
        },
        "required": [
          "type",
          "key"
        ],
        "additionalProperties": false
      },
      "description": "Additional parameters for the transformation"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "name",
    "type"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_update_transformation-711e53c6"></a>

## gtm_update_transformation

Handler: Calls Google Tag Manager API accounts.containers.workspaces.transformations.update.

```text
Update an existing transformation in a GTM workspace
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/transformations.ts#L108-L145) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    },
    "transformationId": {
      "type": "string",
      "description": "The GTM transformation ID"
    },
    "name": {
      "type": "string",
      "description": "The display name of the transformation"
    },
    "type": {
      "type": "string",
      "description": "The type of the transformation"
    },
    "parameter": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "description": "The parameter type"
          },
          "key": {
            "type": "string",
            "description": "The named key that uniquely identifies a parameter"
          },
          "value": {
            "type": "string",
            "description": "The parameter value"
          }
        },
        "required": [
          "type",
          "key"
        ],
        "additionalProperties": false
      },
      "description": "Additional parameters for the transformation"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "transformationId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_delete_transformation-6e207020"></a>

## gtm_delete_transformation

Handler: Calls Google Tag Manager API accounts.containers.workspaces.transformations.delete.

```text
Delete a transformation from a GTM workspace
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/transformations.ts#L145-L173) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    },
    "transformationId": {
      "type": "string",
      "description": "The GTM transformation ID"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "transformationId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_revert_transformation-4a2b616d"></a>

## gtm_revert_transformation

Handler: Calls Google Tag Manager API accounts.containers.workspaces.transformations.revert.

```text
Revert changes to a transformation in a GTM workspace
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/transformations.ts#L173-L200) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    },
    "transformationId": {
      "type": "string",
      "description": "The GTM transformation ID"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "transformationId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_list_gtag_configs-a812ef9c"></a>

## gtm_list_gtag_configs

Handler: Calls Google Tag Manager API accounts.containers.workspaces.gtag\_config.list.

```text
List all Google tag configs in a GTM workspace
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/gtag-config.ts#L19-L46) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_get_gtag_config-04e64cb4"></a>

## gtm_get_gtag_config

Handler: Calls Google Tag Manager API accounts.containers.workspaces.gtag\_config.get.

```text
Get a single Google tag config from a GTM workspace
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/gtag-config.ts#L46-L74) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    },
    "gtagConfigId": {
      "type": "string",
      "description": "The Google tag config ID"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "gtagConfigId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_create_gtag_config-036fed25"></a>

## gtm_create_gtag_config

Handler: Calls Google Tag Manager API accounts.containers.workspaces.gtag\_config.create.

```text
Create a new Google tag config in a GTM workspace
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/gtag-config.ts#L74-L107) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    },
    "type": {
      "type": "string",
      "description": "The type of the Google tag config"
    },
    "parameter": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "description": "The parameter type"
          },
          "key": {
            "type": "string",
            "description": "The named key that uniquely identifies a parameter"
          },
          "value": {
            "type": "string",
            "description": "The parameter value"
          }
        },
        "required": [
          "type",
          "key"
        ],
        "additionalProperties": false
      },
      "description": "Parameters for the Google tag config (e.g. measurement ID)"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "type"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_update_gtag_config-110cc67b"></a>

## gtm_update_gtag_config

Handler: Calls Google Tag Manager API accounts.containers.workspaces.gtag\_config.update.

```text
Update an existing Google tag config in a GTM workspace
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/gtag-config.ts#L107-L142) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    },
    "gtagConfigId": {
      "type": "string",
      "description": "The Google tag config ID"
    },
    "type": {
      "type": "string",
      "description": "The type of the Google tag config"
    },
    "parameter": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "description": "The parameter type"
          },
          "key": {
            "type": "string",
            "description": "The named key that uniquely identifies a parameter"
          },
          "value": {
            "type": "string",
            "description": "The parameter value"
          }
        },
        "required": [
          "type",
          "key"
        ],
        "additionalProperties": false
      },
      "description": "Parameters for the Google tag config"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "gtagConfigId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_delete_gtag_config-dba69879"></a>

## gtm_delete_gtag_config

Handler: Calls Google Tag Manager API accounts.containers.workspaces.gtag\_config.delete.

```text
Delete a Google tag config from a GTM workspace
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/gtag-config.ts#L142-L169) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    },
    "gtagConfigId": {
      "type": "string",
      "description": "The Google tag config ID"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "gtagConfigId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_naming_guide-5844d9e2"></a>

## gtm_naming_guide

Handler: Returns hardcoded organization naming conventions and registered naming components.

```text
Show the tag naming convention, registered apps, valid categories, actions, variable scopes, and variable types. Use this before creating tags to understand the standard.
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/conventions-tools.ts#L18-L60) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {},
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_validate_name-f505f4e0"></a>

## gtm_validate_name

Handler: Validates a tag name using local organization naming conventions.

```text
Validate a tag name against the naming convention. Returns whether the name follows the standard and any warnings.
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/conventions-tools.ts#L60-L74) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "The tag name to validate"
    }
  },
  "required": [
    "name"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_build_tag_name-46ce019a"></a>

## gtm_build_tag_name

Handler: Builds and validates a local organization tag name.

```text
Generate a standards-compliant tag name from its parts
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/conventions-tools.ts#L74-L113) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "app": {
      "type": "string",
      "description": "The application identifier. Registered: golf, mcui, bopui, ivory, shared"
    },
    "category": {
      "type": "string",
      "description": "The event category. Valid: action, nav, data, error, perf, auth, config, workflow"
    },
    "action": {
      "type": "string",
      "description": "The action type. Valid: click, submit, toggle, select, search, filter, sort, create, update, delete, view, open, close, expand, collapse, drag, export, import, copy, start, complete, cancel, fail, retry, load, scroll"
    },
    "detail": {
      "type": "string",
      "description": "A short kebab-case descriptor for the specific element or context (e.g. kill-switch, rule-group, odds-cell)"
    }
  },
  "required": [
    "app",
    "category",
    "action",
    "detail"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_build_trigger_name-b630839d"></a>

## gtm_build_trigger_name

Handler: Builds a trigger name using local organization naming conventions.

```text
Generate a standards-compliant trigger name
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/conventions-tools.ts#L113-L129) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "app": {
      "type": "string",
      "description": "The application identifier"
    },
    "event": {
      "type": "string",
      "description": "The event type (e.g. click, submit, pageview, custom)"
    },
    "detail": {
      "type": "string",
      "description": "Optional detail for the trigger"
    }
  },
  "required": [
    "app",
    "event"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_build_variable_name-858527d5"></a>

## gtm_build_variable_name

Handler: Builds a variable name using local organization naming conventions.

```text
Generate a standards-compliant variable name
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/conventions-tools.ts#L129-L154) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "scope": {
      "type": "string",
      "description": "The variable scope. Valid: app, user, page, env, session"
    },
    "type": {
      "type": "string",
      "description": "The variable type. Valid: dl, dom, js, const, cookie, url, lookup, regex"
    },
    "name": {
      "type": "string",
      "description": "The variable name in kebab-case"
    }
  },
  "required": [
    "scope",
    "type",
    "name"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_list_presets-bce39cbd"></a>

## gtm_list_presets

Handler: Lists bundled internal web app tracking presets and entity names.

```text
List all available tracking presets for internal web apps. Each preset is a bundle of tags, triggers, and variables that can be deployed together.
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/presets.ts#L447-L466) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {},
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_preview_preset-22c972c9"></a>

## gtm_preview_preset

Handler: Returns preset entity names and configurations locally without GTM operations.

```text
Preview what a preset would create for a specific app, without actually creating anything in GTM. Shows all entity names and configurations.
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/presets.ts#L466-L499) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "presetId": {
      "type": "string",
      "description": "The preset ID. Available: app-bootstrap, error-tracking, user-action-tracking, api-performance, crud-operations, workflow-tracking"
    },
    "app": {
      "type": "string",
      "description": "The application identifier (e.g. golf, mcui, bopui)"
    }
  },
  "required": [
    "presetId",
    "app"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_deploy_preset-0e7f7805"></a>

## gtm_deploy_preset

Handler: Creates preset variables, triggers, and tags sequentially, records per-entity errors, and optionally moves created entities into a folder.

```text
Deploy a preset to a GTM workspace — creates all its tags, triggers, and variables. Returns the created entities with their GTM IDs.
```

[Source](https://github.com/laiskickow/gtm-mcp-server/blob/1c8eb3fedcd3530fa0dc00d1d4dacbb7b512ef45/src/tools/presets.ts#L499-L625) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "presetId": {
      "type": "string",
      "description": "The preset ID. Available: app-bootstrap, error-tracking, user-action-tracking, api-performance, crud-operations, workflow-tracking"
    },
    "app": {
      "type": "string",
      "description": "The application identifier (e.g. golf, mcui, bopui)"
    },
    "accountId": {
      "type": "string",
      "description": "The GTM account ID"
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID"
    },
    "folderId": {
      "type": "string",
      "description": "Optional folder ID to organise the created entities into"
    }
  },
  "required": [
    "presetId",
    "app",
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>
