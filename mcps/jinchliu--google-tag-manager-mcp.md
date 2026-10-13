# jinchliu/google-tag-manager-mcp

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/jinchliu/google-tag-manager-mcp) · [Machine-readable inventory](../data/mcps/jinchliu--google-tag-manager-mcp.json)

**31 extracted tools.** Discovery-backed resource operations, API schema lookup, bulk workspace updates, and template imports.

Snapshot: 2026-10-13 · [96f764417e01](https://github.com/jinchliu/google-tag-manager-mcp/tree/96f764417e01115f044eafa2a7d5c39d5dbbfacb) · Method: tools/list.

Exposure: 30 tools default; 31 with GTM_MCP_ENABLE_RAW_API=1; 10 with GTM_MCP_READ_ONLY=1 (raw API excluded even if enabled). Boolean environment toggles accept 1,true,yes case-insensitively.

## Limits

- No authenticated GTM operations executed; functionality assessed from handlers and discovery method binding.
- Snapshot uses source-lock versions mcp 2.2.0 and google-api-python-client 2.200.0, with installed Pydantic 2.14.1; broad upstream dependency bounds can change schema rendering and bundled discovery data. Discovery snapshot dated 2026-10-13, revision 20260826. Generic bodies/patches/entities intentionally expose unrestricted objects, not expanded API entity schemas.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`gtm_lookup_container`](#tool-gtm_lookup_container-2e7679da) | GTM | Finds the container behind a tag id or a destination id. |
| [`gtm_get_container_snippet`](#tool-gtm_get_container_snippet-a7cc1184) | GTM | Returns the installation snippet of a container. |
| [`gtm_combine_containers`](#tool-gtm_combine_containers-e691e039) | GTM | Merges another container of the same account into this one. Irreversible. |
| [`gtm_move_tag_id`](#tool-gtm_move_tag_id-92bbc094) | GTM | Moves a Google tag id (G-XXXX) out of this container into a new one. |
| [`gtm_link_destination`](#tool-gtm_link_destination-5e61eba1) | GTM | Links a destination (AW-, G-, DC-) to this container, unlinking it elsewhere. |
| [`gtm_reauthorize_environment`](#tool-gtm_reauthorize_environment-b8921fcb) | GTM | Rotates an environment's authorization code; existing preview links stop working. |
| [`gtm_list`](#tool-gtm_list-af3b9072) | GTM | Lists resources of one kind under a parent path. |
| [`gtm_get`](#tool-gtm_get-dd147a9b) | GTM | Fetches one resource by its full path. |
| [`gtm_create`](#tool-gtm_create-ba528909) | GTM | Creates one resource under a parent path. |
| [`gtm_update`](#tool-gtm_update-b86785f1) | GTM | Updates one resource by merging a patch into its current state. |
| [`gtm_delete`](#tool-gtm_delete-e1f2b7fc) | GTM | Deletes one resource by path. Irreversible; requires confirm=true. |
| [`gtm_revert`](#tool-gtm_revert-49cf7e2f) | GTM | Discards the workspace's unpublished changes to one entity. |
| [`gtm_describe_schema`](#tool-gtm_describe_schema-ce4ad274) | GTM | Describes a Tag Manager API type or method, offline and without quota. |
| [`gtm_call_api`](#tool-gtm_call_api-d53b7ce4) | GTM | Calls any Tag Manager API v2 method directly. An escape hatch. |
| [`gtm_get_latest_version_header`](#tool-gtm_get_latest_version_header-b7253edc) | GTM | Returns the header (id, name, entity counts) of the newest version. |
| [`gtm_get_live_version`](#tool-gtm_get_live_version-986da5ee) | GTM | Returns the version currently published on the live site. |
| [`gtm_publish_version`](#tool-gtm_publish_version-0cc97535) | GTM | Publishes a version to the live site. Requires confirm=true. |
| [`gtm_set_latest_version`](#tool-gtm_set_latest_version-80a1483f) | GTM | Makes a version the "latest": the base new workspaces sync from. |
| [`gtm_undelete_version`](#tool-gtm_undelete_version-76a4263a) | GTM | Restores a deleted version. |
| [`gtm_get_workspace_status`](#tool-gtm_get_workspace_status-58373cea) | GTM | Shows what a workspace changes against the latest version, and conflicts. |
| [`gtm_quick_preview_workspace`](#tool-gtm_quick_preview_workspace-ae602af3) | GTM | Compiles the workspace without creating a version, to catch errors early. |
| [`gtm_list_folder_entities`](#tool-gtm_list_folder_entities-a2313233) | GTM | Lists the tags, triggers and variables inside one folder. |
| [`gtm_sync_workspace`](#tool-gtm_sync_workspace-c11e7d2f) | GTM | Merges the latest container version into the workspace. |
| [`gtm_resolve_workspace_conflict`](#tool-gtm_resolve_workspace_conflict-e76f4089) | GTM | Marks one merge conflict as resolved with the given entity state. |
| [`gtm_bulk_update_workspace`](#tool-gtm_bulk_update_workspace-e5431e03) | GTM | Applies many entity changes to a workspace in one request. |
| [`gtm_enable_built_in_variables`](#tool-gtm_enable_built_in_variables-b234837a) | GTM | Enables built-in variables (pageUrl, clickClasses, eventName, ...). |
| [`gtm_disable_built_in_variables`](#tool-gtm_disable_built_in_variables-a7152877) | GTM | Disables built-in variables in the workspace draft (re-enable to undo). |
| [`gtm_revert_built_in_variable`](#tool-gtm_revert_built_in_variable-19445473) | GTM | Discards the workspace's change to one built-in variable. |
| [`gtm_move_entities_to_folder`](#tool-gtm_move_entities_to_folder-3d5f0ae9) | GTM | Moves tags, triggers and variables (by id) into a folder. |
| [`gtm_import_template_from_gallery`](#tool-gtm_import_template_from_gallery-c54d3bda) | GTM | Imports a Community Template Gallery template into the workspace. |
| [`gtm_create_version`](#tool-gtm_create_version-50a805d7) | GTM | Turns the workspace into a new container version. Requires confirm=true. |

<a id="tool-gtm_lookup_container-2e7679da"></a>

## gtm_lookup_container

Handler: Finds the container behind a tag id or a destination id.

```text
Finds the container behind a tag id or a destination id.

Args:
    destination_id: A destination such as AW-123456789 or G-ABCDEF1234.
    tag_id: A container public id such as GTM-ABCDEF.

Returns:
    The Container, including its path for further calls.

```

[Source](https://github.com/jinchliu/google-tag-manager-mcp/blob/96f764417e01115f044eafa2a7d5c39d5dbbfacb/src/google_tag_manager_mcp/tools/containers.py#L15-L33) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "destination_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Destination Id"
    },
    "tag_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Tag Id"
    }
  },
  "title": "gtm_lookup_containerArguments"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true
}
```

</details>

<a id="tool-gtm_get_container_snippet-a7cc1184"></a>

## gtm_get_container_snippet

Handler: Returns the installation snippet of a container.

```text
Returns the installation snippet of a container.

Args:
    container: Path of the form accounts/{id}/containers/{id}.

Returns:
    snippet (the HTML to install) and, for server containers,
    containerConfig for provisioning a tagging server manually.

```

[Source](https://github.com/jinchliu/google-tag-manager-mcp/blob/96f764417e01115f044eafa2a7d5c39d5dbbfacb/src/google_tag_manager_mcp/tools/containers.py#L36-L51) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "container": {
      "title": "Container",
      "type": "string"
    }
  },
  "required": [
    "container"
  ],
  "title": "gtm_get_container_snippetArguments"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true
}
```

</details>

<a id="tool-gtm_combine_containers-e691e039"></a>

## gtm_combine_containers

Handler: Merges another container of the same account into this one. Irreversible.

```text
Merges another container of the same account into this one. Irreversible.

Args:
    container: Path of the target container (accounts/{id}/containers/{id}).
    source_container_id: containerId of the container merged into it.
    setting_source: Whose container settings win: current (this
        container) or other (the source container).
    allow_user_permission_feature_update: Must be true if the merge would
        switch on GTM-managed user permissions for the container.
    confirm: Must be true; ask the user first.

Returns:
    The combined Container.

```

[Source](https://github.com/jinchliu/google-tag-manager-mcp/blob/96f764417e01115f044eafa2a7d5c39d5dbbfacb/src/google_tag_manager_mcp/tools/containers.py#L54-L89) · Schema: tools/list.

Exposure: Default unless GTM_MCP_READ_ONLY in {1,true,yes}.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "container": {
      "title": "Container",
      "type": "string"
    },
    "source_container_id": {
      "title": "Source Container Id",
      "type": "string"
    },
    "setting_source": {
      "default": "current",
      "enum": [
        "current",
        "other"
      ],
      "title": "Setting Source",
      "type": "string"
    },
    "allow_user_permission_feature_update": {
      "default": false,
      "title": "Allow User Permission Feature Update",
      "type": "boolean"
    },
    "confirm": {
      "default": false,
      "title": "Confirm",
      "type": "boolean"
    }
  },
  "required": [
    "container",
    "source_container_id"
  ],
  "title": "gtm_combine_containersArguments"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true
}
```

</details>

<a id="tool-gtm_move_tag_id-92bbc094"></a>

## gtm_move_tag_id

Handler: Moves a Google tag id (G-XXXX) out of this container into a new one.

```text
Moves a Google tag id (G-XXXX) out of this container into a new one.

Args:
    container: Path of the container that currently holds the tag id.
    tag_id: The tag id to move, for example G-ABCDEF1234.
    tag_name: Name for the newly created tag container.
    copy_settings: Copy the tag settings to the new tag.
    copy_terms_of_service: Must be true to accept the terms of service
        copied to the new tag.
    copy_users: Copy user permissions to the new tag.
    allow_user_permission_feature_update: Must be true if the move would
        switch on GTM-managed user permissions.
    confirm: Must be true; ask the user first.

Returns:
    The new Container that owns the tag id.

```

[Source](https://github.com/jinchliu/google-tag-manager-mcp/blob/96f764417e01115f044eafa2a7d5c39d5dbbfacb/src/google_tag_manager_mcp/tools/containers.py#L92-L134) · Schema: tools/list.

Exposure: Default unless GTM_MCP_READ_ONLY in {1,true,yes}.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "container": {
      "title": "Container",
      "type": "string"
    },
    "tag_id": {
      "title": "Tag Id",
      "type": "string"
    },
    "tag_name": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Tag Name"
    },
    "copy_settings": {
      "default": false,
      "title": "Copy Settings",
      "type": "boolean"
    },
    "copy_terms_of_service": {
      "default": false,
      "title": "Copy Terms Of Service",
      "type": "boolean"
    },
    "copy_users": {
      "default": false,
      "title": "Copy Users",
      "type": "boolean"
    },
    "allow_user_permission_feature_update": {
      "default": false,
      "title": "Allow User Permission Feature Update",
      "type": "boolean"
    },
    "confirm": {
      "default": false,
      "title": "Confirm",
      "type": "boolean"
    }
  },
  "required": [
    "container",
    "tag_id"
  ],
  "title": "gtm_move_tag_idArguments"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true
}
```

</details>

<a id="tool-gtm_link_destination-5e61eba1"></a>

## gtm_link_destination

Handler: Links a destination (AW-, G-, DC-) to this container, unlinking it elsewhere.

```text
Links a destination (AW-, G-, DC-) to this container, unlinking it elsewhere.

Args:
    container: Path of the container to link the destination to.
    destination_id: The destination id, for example AW-123456789.
    allow_user_permission_feature_update: Must be true if linking would
        switch on GTM-managed user permissions.
    confirm: Must be true; ask the user first.

Returns:
    The linked Destination.

```

[Source](https://github.com/jinchliu/google-tag-manager-mcp/blob/96f764417e01115f044eafa2a7d5c39d5dbbfacb/src/google_tag_manager_mcp/tools/containers.py#L137-L166) · Schema: tools/list.

Exposure: Default unless GTM_MCP_READ_ONLY in {1,true,yes}.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "container": {
      "title": "Container",
      "type": "string"
    },
    "destination_id": {
      "title": "Destination Id",
      "type": "string"
    },
    "allow_user_permission_feature_update": {
      "default": false,
      "title": "Allow User Permission Feature Update",
      "type": "boolean"
    },
    "confirm": {
      "default": false,
      "title": "Confirm",
      "type": "boolean"
    }
  },
  "required": [
    "container",
    "destination_id"
  ],
  "title": "gtm_link_destinationArguments"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true
}
```

</details>

<a id="tool-gtm_reauthorize_environment-b8921fcb"></a>

## gtm_reauthorize_environment

Handler: Rotates an environment's authorization code; existing preview links stop working.

```text
Rotates an environment's authorization code; existing preview links stop working.

Args:
    environment: Path of the form accounts/{id}/containers/{id}/environments/{id}.
    confirm: Must be true; ask the user first.

Returns:
    The Environment with its new authorizationCode.

```

[Source](https://github.com/jinchliu/google-tag-manager-mcp/blob/96f764417e01115f044eafa2a7d5c39d5dbbfacb/src/google_tag_manager_mcp/tools/containers.py#L169-L198) · Schema: tools/list.

Exposure: Default unless GTM_MCP_READ_ONLY in {1,true,yes}.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "environment": {
      "title": "Environment",
      "type": "string"
    },
    "confirm": {
      "default": false,
      "title": "Confirm",
      "type": "boolean"
    }
  },
  "required": [
    "environment"
  ],
  "title": "gtm_reauthorize_environmentArguments"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true
}
```

</details>

<a id="tool-gtm_list-af3b9072"></a>

## gtm_list

Handler: Lists resources of one kind under a parent path.

```text
Lists resources of one kind under a parent path.

Parents: accounts need none; containers and user_permissions take
accounts/{id}; destinations, environments, version_headers and workspaces
take accounts/{id}/containers/{id}; everything else (tags, triggers,
variables, folders, templates, built_in_variables, clients,
transformations, zones, gtag_config) takes .../workspaces/{id}.

Args:
    resource: The collection to list.
    parent: Path of the enclosing resource, copied from earlier results.
    response_format: markdown (default, compact table), json (same slim
        fields as structured data) or json_full (complete configurations,
        the way to read many tags without one gtm_get per tag).
    include_deleted: version_headers only; include deleted versions.
    include_google_tags: accounts only; include Google tag accounts.
    page_token: Continue a listing that reported more pages.
    max_pages: Pages to fetch in one call (each page is one API request).

```

[Source](https://github.com/jinchliu/google-tag-manager-mcp/blob/96f764417e01115f044eafa2a7d5c39d5dbbfacb/src/google_tag_manager_mcp/tools/generic.py#L67-L155) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "resource": {
      "enum": [
        "accounts",
        "containers",
        "destinations",
        "environments",
        "version_headers",
        "workspaces",
        "built_in_variables",
        "clients",
        "folders",
        "gtag_config",
        "tags",
        "templates",
        "transformations",
        "triggers",
        "variables",
        "zones",
        "user_permissions"
      ],
      "title": "Resource",
      "type": "string"
    },
    "parent": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Parent"
    },
    "response_format": {
      "default": "markdown",
      "enum": [
        "markdown",
        "json",
        "json_full"
      ],
      "title": "Response Format",
      "type": "string"
    },
    "include_deleted": {
      "default": false,
      "title": "Include Deleted",
      "type": "boolean"
    },
    "include_google_tags": {
      "default": false,
      "title": "Include Google Tags",
      "type": "boolean"
    },
    "page_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Page Token"
    },
    "max_pages": {
      "default": 20,
      "title": "Max Pages",
      "type": "integer"
    }
  },
  "required": [
    "resource"
  ],
  "title": "gtm_listArguments"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true
}
```

</details>

<a id="tool-gtm_get-dd147a9b"></a>

## gtm_get

Handler: Fetches one resource by its full path.

```text
Fetches one resource by its full path.

Works for accounts, containers, destinations, environments, versions,
workspaces, user_permissions and every workspace entity (tags, triggers,
variables, folders, templates, clients, transformations, zones,
gtag_config). The result is the complete configuration; edit it and send
the changed keys back with gtm_update.

Args:
    path: Full path such as accounts/1/containers/2/workspaces/3/tags/4.
    response_format: json (default) returns the entity as is, except for
        container versions, which are summarised (entity lists reduced to
        slim rows); json_full returns a version verbatim, which can run to
        hundreds of KB.

```

[Source](https://github.com/jinchliu/google-tag-manager-mcp/blob/96f764417e01115f044eafa2a7d5c39d5dbbfacb/src/google_tag_manager_mcp/tools/generic.py#L158-L180) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "path": {
      "title": "Path",
      "type": "string"
    },
    "response_format": {
      "default": "json",
      "enum": [
        "json",
        "json_full"
      ],
      "title": "Response Format",
      "type": "string"
    }
  },
  "required": [
    "path"
  ],
  "title": "gtm_getArguments"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true
}
```

</details>

<a id="tool-gtm_create-ba528909"></a>

## gtm_create

Handler: Creates one resource under a parent path.

```text
Creates one resource under a parent path.

Bodies use the API's camelCase JSON; call gtm_describe_schema('Tag') (or
Trigger, Variable, Folder, Client, Transformation, Zone, GtagConfig,
CustomTemplate, Container, Workspace, Environment, UserPermission) for the
fields and example bodies. Workspace entities take .../workspaces/{id} as
parent, containers and user_permissions take accounts/{id}, environments
and workspaces take accounts/{id}/containers/{id}. Changes stay in the
workspace draft until a version is created and published.

Args:
    resource: The collection to create in.
    parent: Path of the enclosing resource.
    body: The entity, for example {"name": "...", "type": "gaawe", ...}.

Returns:
    The created entity with its path and fingerprint (templateData is
    omitted for templates).

```

[Source](https://github.com/jinchliu/google-tag-manager-mcp/blob/96f764417e01115f044eafa2a7d5c39d5dbbfacb/src/google_tag_manager_mcp/tools/generic.py#L212-L240) · Schema: tools/list.

Exposure: Default unless GTM_MCP_READ_ONLY in {1,true,yes}.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "resource": {
      "enum": [
        "containers",
        "environments",
        "workspaces",
        "clients",
        "folders",
        "gtag_config",
        "tags",
        "templates",
        "transformations",
        "triggers",
        "variables",
        "zones",
        "user_permissions"
      ],
      "title": "Resource",
      "type": "string"
    },
    "parent": {
      "title": "Parent",
      "type": "string"
    },
    "body": {
      "additionalProperties": true,
      "title": "Body",
      "type": "object"
    }
  },
  "required": [
    "resource",
    "parent",
    "body"
  ],
  "title": "gtm_createArguments"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false
}
```

</details>

<a id="tool-gtm_update-b86785f1"></a>

## gtm_update

Handler: Updates one resource by merging a patch into its current state.

```text
Updates one resource by merging a patch into its current state.

Reads the entity, applies a shallow merge patch (a top-level key replaces
the current value, null deletes it, lists are replaced whole, nested
objects are not merged) and writes it back with the current fingerprint,
retrying once if the entity changed in between. Send only the keys that
change. For versions only name and description are updatable.

Args:
    path: Full path of the entity to update.
    patch: The keys to change, in the API's camelCase JSON.

Returns:
    The updated entity (templateData omitted for templates).

```

[Source](https://github.com/jinchliu/google-tag-manager-mcp/blob/96f764417e01115f044eafa2a7d5c39d5dbbfacb/src/google_tag_manager_mcp/tools/generic.py#L243-L285) · Schema: tools/list.

Exposure: Default unless GTM_MCP_READ_ONLY in {1,true,yes}.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "path": {
      "title": "Path",
      "type": "string"
    },
    "patch": {
      "additionalProperties": true,
      "title": "Patch",
      "type": "object"
    }
  },
  "required": [
    "path",
    "patch"
  ],
  "title": "gtm_updateArguments"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false
}
```

</details>

<a id="tool-gtm_delete-e1f2b7fc"></a>

## gtm_delete

Handler: Deletes one resource by path. Irreversible; requires confirm=true.

```text
Deletes one resource by path. Irreversible; requires confirm=true.

Works for workspace entities (tags, triggers, variables, folders,
templates, clients, transformations, zones, gtag_config), workspaces,
environments, versions, containers and user_permissions. Deleting a
workspace entity only changes the draft until published; deleting a
container or workspace takes effect immediately.

Args:
    path: Full path of the resource.
    confirm: Must be true; ask the user first.

```

[Source](https://github.com/jinchliu/google-tag-manager-mcp/blob/96f764417e01115f044eafa2a7d5c39d5dbbfacb/src/google_tag_manager_mcp/tools/generic.py#L288-L306) · Schema: tools/list.

Exposure: Default unless GTM_MCP_READ_ONLY in {1,true,yes}.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "path": {
      "title": "Path",
      "type": "string"
    },
    "confirm": {
      "default": false,
      "title": "Confirm",
      "type": "boolean"
    }
  },
  "required": [
    "path"
  ],
  "title": "gtm_deleteArguments"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true
}
```

</details>

<a id="tool-gtm_revert-49cf7e2f"></a>

## gtm_revert

Handler: Discards the workspace's unpublished changes to one entity.

```text
Discards the workspace's unpublished changes to one entity.

The entity returns to its state in the latest container version; an
entity that was added in the workspace disappears. Works for tags,
triggers, variables, folders, templates, clients, transformations and
zones (built-in variables have gtm_revert_built_in_variable). Requires
confirm=true.

Args:
    path: Full path of the workspace entity.
    confirm: Must be true; ask the user first.

Returns:
    The entity as it is after the revert, when the API returns one.

```

[Source](https://github.com/jinchliu/google-tag-manager-mcp/blob/96f764417e01115f044eafa2a7d5c39d5dbbfacb/src/google_tag_manager_mcp/tools/generic.py#L309-L330) · Schema: tools/list.

Exposure: Default unless GTM_MCP_READ_ONLY in {1,true,yes}.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "path": {
      "title": "Path",
      "type": "string"
    },
    "confirm": {
      "default": false,
      "title": "Confirm",
      "type": "boolean"
    }
  },
  "required": [
    "path"
  ],
  "title": "gtm_revertArguments"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true
}
```

</details>

<a id="tool-gtm_describe_schema-ce4ad274"></a>

## gtm_describe_schema

Handler: Describes a Tag Manager API type or method, offline and without quota.

```text
Describes a Tag Manager API type or method, offline and without quota.

Use it before building a body for gtm_create / gtm_update, or to check a
method's parameters and scopes. Types come with example bodies for common
tag, trigger and variable types (for example gaawe, googtag, customEvent).

Args:
    name: A type such as 'Tag', 'Trigger', 'Variable', 'Parameter',
        'Condition', 'BuiltInVariable', or a method id such as
        'accounts.containers.workspaces.tags.create'.

Returns:
    For a type: its fields with type, enum values and description, plus
    examples. For a method: HTTP method, path template, parameters, body
    type and scopes.

```

[Source](https://github.com/jinchliu/google-tag-manager-mcp/blob/96f764417e01115f044eafa2a7d5c39d5dbbfacb/src/google_tag_manager_mcp/tools/meta.py#L34-L58) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "title": "Name",
      "type": "string"
    }
  },
  "required": [
    "name"
  ],
  "title": "gtm_describe_schemaArguments"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true
}
```

</details>

<a id="tool-gtm_call_api-d53b7ce4"></a>

## gtm_call_api

Handler: Calls any Tag Manager API v2 method directly. An escape hatch.

```text
Calls any Tag Manager API v2 method directly. An escape hatch.

Use it only for methods the dedicated tools do not cover yet (the API
gains methods over time). Look the method up with gtm_describe_schema
first. Query parameters are validated against the discovery document;
the body is sent as is. Non-GET methods require confirm=true.

Args:
    method_id: Dotted id without the service prefix, for example
        accounts.containers.workspaces.tags.list.
    params: Query and path parameters by their API names (parent, path,
        fingerprint, ...).
    body: Request body for methods that take one.
    confirm: Must be true for any method that is not a GET.

Returns:
    The verbatim API response.

```

[Source](https://github.com/jinchliu/google-tag-manager-mcp/blob/96f764417e01115f044eafa2a7d5c39d5dbbfacb/src/google_tag_manager_mcp/tools/meta.py#L66-L108) · Schema: tools/list.

Exposure: Opt-in only: GTM_MCP_ENABLE_RAW_API in {1,true,yes}, and GTM_MCP_READ_ONLY disabled.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "method_id": {
      "title": "Method Id",
      "type": "string"
    },
    "params": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Params"
    },
    "body": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Body"
    },
    "confirm": {
      "default": false,
      "title": "Confirm",
      "type": "boolean"
    }
  },
  "required": [
    "method_id"
  ],
  "title": "gtm_call_apiArguments"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true
}
```

</details>

<a id="tool-gtm_get_latest_version_header-b7253edc"></a>

## gtm_get_latest_version_header

Handler: Returns the header (id, name, entity counts) of the newest version.

```text
Returns the header (id, name, entity counts) of the newest version.

Args:
    container: Path of the form accounts/{id}/containers/{id}.

```

[Source](https://github.com/jinchliu/google-tag-manager-mcp/blob/96f764417e01115f044eafa2a7d5c39d5dbbfacb/src/google_tag_manager_mcp/tools/versions.py#L35-L48) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "container": {
      "title": "Container",
      "type": "string"
    }
  },
  "required": [
    "container"
  ],
  "title": "gtm_get_latest_version_headerArguments"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true
}
```

</details>

<a id="tool-gtm_get_live_version-986da5ee"></a>

## gtm_get_live_version

Handler: Returns the version currently published on the live site.

```text
Returns the version currently published on the live site.

Args:
    container: Path of the form accounts/{id}/containers/{id}.
    response_format: markdown or json summarise every entity list to slim
        rows; json_full returns the complete version, which is large.

```

[Source](https://github.com/jinchliu/google-tag-manager-mcp/blob/96f764417e01115f044eafa2a7d5c39d5dbbfacb/src/google_tag_manager_mcp/tools/versions.py#L51-L67) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "container": {
      "title": "Container",
      "type": "string"
    },
    "response_format": {
      "default": "markdown",
      "enum": [
        "markdown",
        "json",
        "json_full"
      ],
      "title": "Response Format",
      "type": "string"
    }
  },
  "required": [
    "container"
  ],
  "title": "gtm_get_live_versionArguments"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true
}
```

</details>

<a id="tool-gtm_publish_version-0cc97535"></a>

## gtm_publish_version

Handler: Publishes a version to the live site. Requires confirm=true.

```text
Publishes a version to the live site. Requires confirm=true.

There is no unpublish: to roll back, publish an older version (any
version works). Check compilerError in the result.

Args:
    version: Path of the form accounts/{id}/containers/{id}/versions/{id}.
    confirm: Must be true; ask the user first.
    response_format: markdown, json or json_full for the published version.

```

[Source](https://github.com/jinchliu/google-tag-manager-mcp/blob/96f764417e01115f044eafa2a7d5c39d5dbbfacb/src/google_tag_manager_mcp/tools/versions.py#L70-L94) · Schema: tools/list.

Exposure: Default unless GTM_MCP_READ_ONLY in {1,true,yes}.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "version": {
      "title": "Version",
      "type": "string"
    },
    "confirm": {
      "default": false,
      "title": "Confirm",
      "type": "boolean"
    },
    "response_format": {
      "default": "markdown",
      "enum": [
        "markdown",
        "json",
        "json_full"
      ],
      "title": "Response Format",
      "type": "string"
    }
  },
  "required": [
    "version"
  ],
  "title": "gtm_publish_versionArguments"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true
}
```

</details>

<a id="tool-gtm_set_latest_version-80a1483f"></a>

## gtm_set_latest_version

Handler: Makes a version the "latest": the base new workspaces sync from.

```text
Makes a version the "latest": the base new workspaces sync from.

This is not a rollback and does not change what is live; use
gtm_publish_version for that. Requires confirm=true.

Args:
    version: Path of the form accounts/{id}/containers/{id}/versions/{id}.
    confirm: Must be true; ask the user first.

Returns:
    A summary of the version.

```

[Source](https://github.com/jinchliu/google-tag-manager-mcp/blob/96f764417e01115f044eafa2a7d5c39d5dbbfacb/src/google_tag_manager_mcp/tools/versions.py#L97-L117) · Schema: tools/list.

Exposure: Default unless GTM_MCP_READ_ONLY in {1,true,yes}.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "version": {
      "title": "Version",
      "type": "string"
    },
    "confirm": {
      "default": false,
      "title": "Confirm",
      "type": "boolean"
    }
  },
  "required": [
    "version"
  ],
  "title": "gtm_set_latest_versionArguments"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true
}
```

</details>

<a id="tool-gtm_undelete_version-76a4263a"></a>

## gtm_undelete_version

Handler: Restores a deleted version.

```text
Restores a deleted version.

Args:
    version: Path of the form accounts/{id}/containers/{id}/versions/{id}.

Returns:
    A summary of the restored version.

```

[Source](https://github.com/jinchliu/google-tag-manager-mcp/blob/96f764417e01115f044eafa2a7d5c39d5dbbfacb/src/google_tag_manager_mcp/tools/versions.py#L120-L135) · Schema: tools/list.

Exposure: Default unless GTM_MCP_READ_ONLY in {1,true,yes}.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "version": {
      "title": "Version",
      "type": "string"
    }
  },
  "required": [
    "version"
  ],
  "title": "gtm_undelete_versionArguments"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false
}
```

</details>

<a id="tool-gtm_get_workspace_status-58373cea"></a>

## gtm_get_workspace_status

Handler: Shows what a workspace changes against the latest version, and conflicts.

```text
Shows what a workspace changes against the latest version, and conflicts.

Args:
    workspace: Path of the form accounts/{id}/containers/{id}/workspaces/{id}.
    response_format: markdown or json list each changed entity as kind,
        path, name and changeStatus; json_full returns the raw entities.

```

[Source](https://github.com/jinchliu/google-tag-manager-mcp/blob/96f764417e01115f044eafa2a7d5c39d5dbbfacb/src/google_tag_manager_mcp/tools/workspaces.py#L31-L47) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "workspace": {
      "title": "Workspace",
      "type": "string"
    },
    "response_format": {
      "default": "markdown",
      "enum": [
        "markdown",
        "json",
        "json_full"
      ],
      "title": "Response Format",
      "type": "string"
    }
  },
  "required": [
    "workspace"
  ],
  "title": "gtm_get_workspace_statusArguments"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true
}
```

</details>

<a id="tool-gtm_quick_preview_workspace-ae602af3"></a>

## gtm_quick_preview_workspace

Handler: Compiles the workspace without creating a version, to catch errors early.

```text
Compiles the workspace without creating a version, to catch errors early.

Args:
    workspace: Path of the form accounts/{id}/containers/{id}/workspaces/{id}.
    response_format: markdown or json summarise the compiled version;
        json_full returns it verbatim.

Returns:
    compilerError and syncStatus alongside the compiled version summary.

```

[Source](https://github.com/jinchliu/google-tag-manager-mcp/blob/96f764417e01115f044eafa2a7d5c39d5dbbfacb/src/google_tag_manager_mcp/tools/workspaces.py#L50-L75) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "workspace": {
      "title": "Workspace",
      "type": "string"
    },
    "response_format": {
      "default": "markdown",
      "enum": [
        "markdown",
        "json",
        "json_full"
      ],
      "title": "Response Format",
      "type": "string"
    }
  },
  "required": [
    "workspace"
  ],
  "title": "gtm_quick_preview_workspaceArguments"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true
}
```

</details>

<a id="tool-gtm_list_folder_entities-a2313233"></a>

## gtm_list_folder_entities

Handler: Lists the tags, triggers and variables inside one folder.

```text
Lists the tags, triggers and variables inside one folder.

Args:
    folder: Path of the form .../workspaces/{id}/folders/{id}.
    response_format: markdown or json give slim rows per kind; json_full
        returns complete configurations.
    page_token: Continue a listing that reported more pages.
    max_pages: Pages to fetch in one call.

```

[Source](https://github.com/jinchliu/google-tag-manager-mcp/blob/96f764417e01115f044eafa2a7d5c39d5dbbfacb/src/google_tag_manager_mcp/tools/workspaces.py#L78-L140) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "folder": {
      "title": "Folder",
      "type": "string"
    },
    "response_format": {
      "default": "markdown",
      "enum": [
        "markdown",
        "json",
        "json_full"
      ],
      "title": "Response Format",
      "type": "string"
    },
    "page_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Page Token"
    },
    "max_pages": {
      "default": 20,
      "title": "Max Pages",
      "type": "integer"
    }
  },
  "required": [
    "folder"
  ],
  "title": "gtm_list_folder_entitiesArguments"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true
}
```

</details>

<a id="tool-gtm_sync_workspace-c11e7d2f"></a>

## gtm_sync_workspace

Handler: Merges the latest container version into the workspace.

```text
Merges the latest container version into the workspace.

Needed before a version can be created when the container moved on. The
result lists merge conflicts; resolve each with
gtm_resolve_workspace_conflict.

Args:
    workspace: Path of the form accounts/{id}/containers/{id}/workspaces/{id}.
    response_format: markdown, json or json_full.

```

[Source](https://github.com/jinchliu/google-tag-manager-mcp/blob/96f764417e01115f044eafa2a7d5c39d5dbbfacb/src/google_tag_manager_mcp/tools/workspaces.py#L143-L162) · Schema: tools/list.

Exposure: Default unless GTM_MCP_READ_ONLY in {1,true,yes}.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "workspace": {
      "title": "Workspace",
      "type": "string"
    },
    "response_format": {
      "default": "markdown",
      "enum": [
        "markdown",
        "json",
        "json_full"
      ],
      "title": "Response Format",
      "type": "string"
    }
  },
  "required": [
    "workspace"
  ],
  "title": "gtm_sync_workspaceArguments"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false
}
```

</details>

<a id="tool-gtm_resolve_workspace_conflict-e76f4089"></a>

## gtm_resolve_workspace_conflict

Handler: Marks one merge conflict as resolved with the given entity state.

```text
Marks one merge conflict as resolved with the given entity state.

Args:
    workspace: Path of the form accounts/{id}/containers/{id}/workspaces/{id}.
    entity: An Entity object as reported by gtm_get_workspace_status with
        json_full: {"changeStatus": "...", "tag": {...}} (or trigger,
        variable, folder, ...), holding the state to keep.
    fingerprint: Optional fingerprint of the workspace entity; when given
        it must match the current one.

```

[Source](https://github.com/jinchliu/google-tag-manager-mcp/blob/96f764417e01115f044eafa2a7d5c39d5dbbfacb/src/google_tag_manager_mcp/tools/workspaces.py#L165-L190) · Schema: tools/list.

Exposure: Default unless GTM_MCP_READ_ONLY in {1,true,yes}.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "workspace": {
      "title": "Workspace",
      "type": "string"
    },
    "entity": {
      "additionalProperties": true,
      "title": "Entity",
      "type": "object"
    },
    "fingerprint": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Fingerprint"
    }
  },
  "required": [
    "workspace",
    "entity"
  ],
  "title": "gtm_resolve_workspace_conflictArguments"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false
}
```

</details>

<a id="tool-gtm_bulk_update_workspace-e5431e03"></a>

## gtm_bulk_update_workspace

Handler: Applies many entity changes to a workspace in one request.

```text
Applies many entity changes to a workspace in one request.

Each change is an Entity: {"changeStatus": "added" | "updated" |
"deleted", "tag": {...}} (or trigger, variable, folder, client,
transformation, zone, gtagConfig, customTemplate, builtInVariable).
Updated and deleted entities need their ids. This is the efficient way to
make many edits under the 25 requests / 100 s quota. Requires
confirm=true because a single call can delete entities.

Args:
    workspace: Path of the form accounts/{id}/containers/{id}/workspaces/{id}.
    changes: The Entity objects to apply.
    confirm: Must be true; ask the user first.

Returns:
    The added and updated entities, as slim rows with their paths.

```

[Source](https://github.com/jinchliu/google-tag-manager-mcp/blob/96f764417e01115f044eafa2a7d5c39d5dbbfacb/src/google_tag_manager_mcp/tools/workspaces.py#L193-L231) · Schema: tools/list.

Exposure: Default unless GTM_MCP_READ_ONLY in {1,true,yes}.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "workspace": {
      "title": "Workspace",
      "type": "string"
    },
    "changes": {
      "items": {
        "additionalProperties": true,
        "type": "object"
      },
      "title": "Changes",
      "type": "array"
    },
    "confirm": {
      "default": false,
      "title": "Confirm",
      "type": "boolean"
    }
  },
  "required": [
    "workspace",
    "changes"
  ],
  "title": "gtm_bulk_update_workspaceArguments"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true
}
```

</details>

<a id="tool-gtm_enable_built_in_variables-b234837a"></a>

## gtm_enable_built_in_variables

Handler: Enables built-in variables (pageUrl, clickClasses, eventName, ...).

```text
Enables built-in variables (pageUrl, clickClasses, eventName, ...).

Call gtm_describe_schema('BuiltInVariable') for the full list of types.

Args:
    workspace: Path of the form accounts/{id}/containers/{id}/workspaces/{id}.
    types: Built-in variable types to enable.

```

[Source](https://github.com/jinchliu/google-tag-manager-mcp/blob/96f764417e01115f044eafa2a7d5c39d5dbbfacb/src/google_tag_manager_mcp/tools/workspaces.py#L234-L261) · Schema: tools/list.

Exposure: Default unless GTM_MCP_READ_ONLY in {1,true,yes}.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "workspace": {
      "title": "Workspace",
      "type": "string"
    },
    "types": {
      "items": {
        "type": "string"
      },
      "title": "Types",
      "type": "array"
    }
  },
  "required": [
    "workspace",
    "types"
  ],
  "title": "gtm_enable_built_in_variablesArguments"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false
}
```

</details>

<a id="tool-gtm_disable_built_in_variables-a7152877"></a>

## gtm_disable_built_in_variables

Handler: Disables built-in variables in the workspace draft (re-enable to undo).

```text
Disables built-in variables in the workspace draft (re-enable to undo).

Args:
    workspace: Path of the form accounts/{id}/containers/{id}/workspaces/{id}.
    types: Built-in variable types to disable.

```

[Source](https://github.com/jinchliu/google-tag-manager-mcp/blob/96f764417e01115f044eafa2a7d5c39d5dbbfacb/src/google_tag_manager_mcp/tools/workspaces.py#L264-L284) · Schema: tools/list.

Exposure: Default unless GTM_MCP_READ_ONLY in {1,true,yes}.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "workspace": {
      "title": "Workspace",
      "type": "string"
    },
    "types": {
      "items": {
        "type": "string"
      },
      "title": "Types",
      "type": "array"
    }
  },
  "required": [
    "workspace",
    "types"
  ],
  "title": "gtm_disable_built_in_variablesArguments"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false
}
```

</details>

<a id="tool-gtm_revert_built_in_variable-19445473"></a>

## gtm_revert_built_in_variable

Handler: Discards the workspace's change to one built-in variable.

```text
Discards the workspace's change to one built-in variable.

Args:
    workspace: Path of the form accounts/{id}/containers/{id}/workspaces/{id}.
    type: The built-in variable type, for example pageUrl.
    confirm: Must be true; ask the user first.

Returns:
    enabled: whether the variable is enabled after the revert.

```

[Source](https://github.com/jinchliu/google-tag-manager-mcp/blob/96f764417e01115f044eafa2a7d5c39d5dbbfacb/src/google_tag_manager_mcp/tools/workspaces.py#L287-L315) · Schema: tools/list.

Exposure: Default unless GTM_MCP_READ_ONLY in {1,true,yes}.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "workspace": {
      "title": "Workspace",
      "type": "string"
    },
    "type": {
      "title": "Type",
      "type": "string"
    },
    "confirm": {
      "default": false,
      "title": "Confirm",
      "type": "boolean"
    }
  },
  "required": [
    "workspace",
    "type"
  ],
  "title": "gtm_revert_built_in_variableArguments"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true
}
```

</details>

<a id="tool-gtm_move_entities_to_folder-3d5f0ae9"></a>

## gtm_move_entities_to_folder

Handler: Moves tags, triggers and variables (by id) into a folder.

```text
Moves tags, triggers and variables (by id) into a folder.

Args:
    folder: Path of the form .../workspaces/{id}/folders/{id}.
    tag_ids: Tag ids (the tagId field) to move.
    trigger_ids: Trigger ids to move.
    variable_ids: Variable ids to move.

```

[Source](https://github.com/jinchliu/google-tag-manager-mcp/blob/96f764417e01115f044eafa2a7d5c39d5dbbfacb/src/google_tag_manager_mcp/tools/workspaces.py#L318-L359) · Schema: tools/list.

Exposure: Default unless GTM_MCP_READ_ONLY in {1,true,yes}.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "folder": {
      "title": "Folder",
      "type": "string"
    },
    "tag_ids": {
      "anyOf": [
        {
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Tag Ids"
    },
    "trigger_ids": {
      "anyOf": [
        {
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Trigger Ids"
    },
    "variable_ids": {
      "anyOf": [
        {
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Variable Ids"
    }
  },
  "required": [
    "folder"
  ],
  "title": "gtm_move_entities_to_folderArguments"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false
}
```

</details>

<a id="tool-gtm_import_template_from_gallery-c54d3bda"></a>

## gtm_import_template_from_gallery

Handler: Imports a Community Template Gallery template into the workspace.

```text
Imports a Community Template Gallery template into the workspace.

Args:
    workspace: Path of the form accounts/{id}/containers/{id}/workspaces/{id}.
    gallery_owner: GitHub owner of the template repository.
    gallery_repository: GitHub repository name of the template.
    gallery_sha: Commit to import; the latest when omitted.
    acknowledge_permissions: Must be true to accept the permissions the
        template declares.

Returns:
    The imported CustomTemplate (templateData omitted; gtm_get reads it).

```

[Source](https://github.com/jinchliu/google-tag-manager-mcp/blob/96f764417e01115f044eafa2a7d5c39d5dbbfacb/src/google_tag_manager_mcp/tools/workspaces.py#L362-L404) · Schema: tools/list.

Exposure: Default unless GTM_MCP_READ_ONLY in {1,true,yes}.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "workspace": {
      "title": "Workspace",
      "type": "string"
    },
    "gallery_owner": {
      "title": "Gallery Owner",
      "type": "string"
    },
    "gallery_repository": {
      "title": "Gallery Repository",
      "type": "string"
    },
    "gallery_sha": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Gallery Sha"
    },
    "acknowledge_permissions": {
      "default": false,
      "title": "Acknowledge Permissions",
      "type": "boolean"
    }
  },
  "required": [
    "workspace",
    "gallery_owner",
    "gallery_repository"
  ],
  "title": "gtm_import_template_from_galleryArguments"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false
}
```

</details>

<a id="tool-gtm_create_version-50a805d7"></a>

## gtm_create_version

Handler: Turns the workspace into a new container version. Requires confirm=true.

```text
Turns the workspace into a new container version. Requires confirm=true.

The workspace is consumed: continue in the workspace named by
newWorkspacePath. Nothing goes live until gtm_publish_version. If
syncStatus reports a merge conflict, run gtm_sync_workspace and resolve
the conflicts first. Free containers allow at most 3 workspaces.

Args:
    workspace: Path of the form accounts/{id}/containers/{id}/workspaces/{id}.
    name: Version name.
    notes: Version notes.
    confirm: Must be true; ask the user first.
    response_format: markdown, json or json_full for the created version.

```

[Source](https://github.com/jinchliu/google-tag-manager-mcp/blob/96f764417e01115f044eafa2a7d5c39d5dbbfacb/src/google_tag_manager_mcp/tools/workspaces.py#L407-L448) · Schema: tools/list.

Exposure: Default unless GTM_MCP_READ_ONLY in {1,true,yes}.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "workspace": {
      "title": "Workspace",
      "type": "string"
    },
    "name": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Name"
    },
    "notes": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Notes"
    },
    "confirm": {
      "default": false,
      "title": "Confirm",
      "type": "boolean"
    },
    "response_format": {
      "default": "markdown",
      "enum": [
        "markdown",
        "json",
        "json_full"
      ],
      "title": "Response Format",
      "type": "string"
    }
  },
  "required": [
    "workspace"
  ],
  "title": "gtm_create_versionArguments"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true
}
```

</details>
