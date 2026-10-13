# adtechnacity/gtm-mcp

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/adtechnacity/gtm-mcp) · [Machine-readable inventory](../data/mcps/adtechnacity--gtm-mcp.json)

**35 extracted tools.** Compares versions, synchronizes workspaces, reverts entities, and applies batch tag and consent changes.

Snapshot: 2026-10-13 · [cc3802596523](https://github.com/adtechnacity/gtm-mcp/tree/cc3802596523ebad245af0280123e7a617ba1e89) · Method: tools/list.

Exposure: All 35 tools register unconditionally by importing lifecycle_tools, read_tools, and write_tools. Default stdio; optional SSE or streamable HTTP. Authentication is lazy at handler invocation and does not gate tool listing.

## Limits

- Offline FastMCP list_tools was loaded with repository uv.lock dependencies in an isolated virtual environment and empty environment; no GTM handler, authentication, or remote GTM request was executed. Runtime API success remains unverified.
- Native dict/list parameters are intentionally unrestricted where upstream signatures expose them; handler-only enums, batch limits, and object validation are not encoded in the exposed input schemas.
- create_trigger accepts advanced trigger types such as timer, scrollDepth, and triggerGroup but exposes only event_name and filters, so creation may require additional type-specific configuration that this handler does not supply.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`create_gtm_version`](#tool-create_gtm_version-d5ea3ee1) | GTM | Creates an unpublished container version from the resolved workspace and returns version identity or compilation/sync errors. |
| [`publish_gtm_container`](#tool-publish_gtm_container-1abf53e6) | GTM | Creates a workspace version then publishes it immediately, returning published version identity. |
| [`publish_gtm_version`](#tool-publish_gtm_version-4ec5da3f) | GTM | Publishes an existing numeric container version, allowing rollback without changing draft workspaces. |
| [`create_gtm_workspace`](#tool-create_gtm_workspace-00287f7b) | GTM | Creates a named workspace under a container and invalidates cached workspace selection. |
| [`get_gtm_workspace_status`](#tool-get_gtm_workspace_status-375c9459) | GTM | Fetches pending workspace entity changes and merge conflicts and returns compact summaries. |
| [`sync_gtm_workspace`](#tool-sync_gtm_workspace-f25bcef9) | GTM | Synchronizes a workspace with the latest container version and reports merge conflicts. |
| [`revert_gtm_entity`](#tool-revert_gtm_entity-7bd7f786) | GTM | Calls the selected tag, trigger, or variable revert endpoint to discard that entity’s workspace changes. |
| [`list_gtm_containers`](#tool-list_gtm_containers-c6ad6269) | GTM | Lists containers accessible in an account and returns their identity and usage fields. |
| [`list_gtm_accounts`](#tool-list_gtm_accounts-8aee50f5) | GTM | Lists accessible GTM accounts and returns names, account IDs, and paths. |
| [`list_gtm_workspaces`](#tool-list_gtm_workspaces-e1ad847d) | GTM | Paginates container workspaces and returns names, IDs, and descriptions. |
| [`list_gtm_variables`](#tool-list_gtm_variables-b1742e8b) | GTM | Paginates workspace variables and returns names, types, and IDs. |
| [`list_gtm_tags`](#tool-list_gtm_tags-7506947b) | GTM | Paginates workspace tags and returns identity, triggers, pause state, and parsed consent settings. |
| [`get_gtm_tag`](#tool-get_gtm_tag-95c3a3dd) | GTM | Fetches and returns the complete workspace tag resource. |
| [`get_gtm_variable`](#tool-get_gtm_variable-1817042d) | GTM | Fetches and returns the complete workspace variable resource. |
| [`list_gtm_triggers`](#tool-list_gtm_triggers-3dd5a402) | GTM | Paginates workspace triggers and returns identity and filter conditions. |
| [`get_gtm_trigger`](#tool-get_gtm_trigger-d280b47f) | GTM | Fetches and returns a complete workspace trigger resource; built-in triggers are not workspace resources. |
| [`find_gtm_references`](#tool-find_gtm_references-2806738d) | GTM | Fetches tags, triggers, and variables and scans trigger links, variable expressions, or tag sequencing references. |
| [`list_gtm_container_versions`](#tool-list_gtm_container_versions-c1070a98) | GTM | Paginates version headers with optional deleted versions and returns identity and entity counts. |
| [`get_gtm_container_version`](#tool-get_gtm_container_version-e62b61a2) | GTM | Fetches a numeric or live container version and returns a summarized snapshot with fingerprint-derived time. |
| [`diff_gtm_container_versions`](#tool-diff_gtm_container_versions-5b4a4c19) | GTM | Fetches two versions and computes entity and parameter changes with bounded string and change-list output. |
| [`delete_gtm_variable`](#tool-delete_gtm_variable-16583557) | GTM | Deletes a variable from the resolved workspace through the GTM variables endpoint. |
| [`create_tag`](#tool-create_tag-e71dcc44) | GTM | Creates a tag from native parameter lists and optional trigger, consent, pause, and firing settings. |
| [`create_datalayer_variables_batch`](#tool-create_datalayer_variables_batch-3e24b84b) | GTM | Creates up to 50 dataLayer version 2 variables sequentially and reports individual successes and failures. |
| [`create_trigger`](#tool-create_trigger-71660c93) | GTM | Creates a trigger with optional native filter conditions and a custom-event match; advanced trigger types needing additional settings require later updates. |
| [`delete_tag`](#tool-delete_tag-1345d160) | GTM | Deletes a tag from the resolved workspace. |
| [`delete_trigger`](#tool-delete_trigger-ec67de91) | GTM | Deletes a workspace trigger without detaching references from tags. |
| [`update_trigger_parameters`](#tool-update_trigger_parameters-87799997) | GTM | Fetches a trigger, replaces or removes supported top-level fields, and updates with fingerprint concurrency. |
| [`update_trigger_filter`](#tool-update_trigger_filter-1ca00e07) | GTM | Converts operator/lhs/rhs conditions to native GTM conditions and replaces the selected trigger filter list. |
| [`update_tags_consent_settings_batch`](#tool-update_tags_consent_settings_batch-91c780d8) | GTM | Fetches and fingerprint-updates each selected tag with a shared validated consent configuration. |
| [`update_tag_parameters`](#tool-update_tag_parameters-54e07806) | GTM | Upserts complete native tag parameters by key and writes the tag with fingerprint concurrency. |
| [`set_tags_firing_option_batch`](#tool-set_tags_firing_option_batch-f1e884ab) | GTM | Updates selected tags to a validated firing option with fingerprint concurrency and skips unchanged tags. |
| [`create_gtm_variable`](#tool-create_gtm_variable-3a356a91) | GTM | Creates an arbitrary variable from native parameters or custom-JavaScript/dataLayer shortcuts. |
| [`update_gtm_variable`](#tool-update_gtm_variable-273d164b) | GTM | Fetches a variable, changes only supplied fields, and saves with fingerprint concurrency. |
| [`update_tag`](#tool-update_tag-ff9e7962) | GTM | Fetches a tag, changes supplied fields including sequencing and pause state, and fingerprint-updates unless unchanged. |
| [`update_tags_triggers_batch`](#tool-update_tags_triggers_batch-034fc0fa) | GTM | Adds, removes, or replaces firing or blocking trigger IDs across selected tags and skips unchanged tags. |

<a id="tool-create_gtm_version-d5ea3ee1"></a>

## create_gtm_version

Handler: Creates an unpublished container version from the resolved workspace and returns version identity or compilation/sync errors.

```text
Create a container version from a workspace WITHOUT publishing it.

    Use this to snapshot changes for review, then ``publish_gtm_version`` when
    approved (``publish_gtm_container`` does both steps at once). GTM refuses
    to create a version when the workspace has compiler errors or unresolved
    merge conflicts; those are returned as the error. Creating a version from
    the Default Workspace replaces it with a new, empty one (new ID).

    Args:
        account_id: GTM Account ID
        container_id: GTM Container ID
        version_name: Name for the new version
        version_notes: Notes describing the changes
        workspace_id: GTM Workspace ID (auto-detected if omitted)

```

[Source](https://github.com/adtechnacity/gtm-mcp/blob/cc3802596523ebad245af0280123e7a617ba1e89/src/gtm_mcp/lifecycle_tools.py#L58-L95) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "version_name": {
      "title": "Version Name",
      "type": "string"
    },
    "version_notes": {
      "default": "",
      "title": "Version Notes",
      "type": "string"
    },
    "workspace_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Workspace Id"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "version_name"
  ],
  "title": "create_gtm_versionArguments",
  "type": "object"
}
```

</details>

<a id="tool-publish_gtm_container-1abf53e6"></a>

## publish_gtm_container

Handler: Creates a workspace version then publishes it immediately, returning published version identity.

```text
Create a version from a workspace and publish it — all its changes go live.

    Same as ``create_gtm_version`` followed by ``publish_gtm_version``; use those
    two to review the version before it goes live. Check
    ``get_gtm_workspace_status`` first to see exactly what will ship.

    Args:
        account_id: GTM Account ID
        container_id: GTM Container ID
        version_name: Name for the new version
        version_notes: Notes describing the changes
        workspace_id: GTM Workspace ID to publish from (auto-detected if omitted)

```

[Source](https://github.com/adtechnacity/gtm-mcp/blob/cc3802596523ebad245af0280123e7a617ba1e89/src/gtm_mcp/lifecycle_tools.py#L98-L138) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "version_name": {
      "title": "Version Name",
      "type": "string"
    },
    "version_notes": {
      "default": "Published via MCP",
      "title": "Version Notes",
      "type": "string"
    },
    "workspace_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Workspace Id"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "version_name"
  ],
  "title": "publish_gtm_containerArguments",
  "type": "object"
}
```

</details>

<a id="tool-publish_gtm_version-4ec5da3f"></a>

## publish_gtm_version

Handler: Publishes an existing numeric container version, allowing rollback without changing draft workspaces.

```text
Publish an existing container version — the way to roll back.

    Publishing an older version makes it live immediately. It does NOT touch
    workspaces: changes still sitting in the Default Workspace will go live
    again with the next publish from it. Use ``list_gtm_container_versions`` to
    pick the version and ``diff_gtm_container_versions`` (version → "live") to
    see exactly what the rollback changes before running it.

    Args:
        account_id: GTM Account ID
        container_id: GTM Container ID
        version_id: Numeric container version ID to make live

```

[Source](https://github.com/adtechnacity/gtm-mcp/blob/cc3802596523ebad245af0280123e7a617ba1e89/src/gtm_mcp/lifecycle_tools.py#L141-L169) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "version_id": {
      "title": "Version Id",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "version_id"
  ],
  "title": "publish_gtm_versionArguments",
  "type": "object"
}
```

</details>

<a id="tool-create_gtm_workspace-00287f7b"></a>

## create_gtm_workspace

Handler: Creates a named workspace under a container and invalidates cached workspace selection.

```text
Create a new workspace, branched from the latest container version.

    A separate workspace keeps one person's draft out of everyone else's — pass
    its ID as ``workspace_id`` to the other tools. GTM limits a container to 3
    workspaces on the free tier.

    Args:
        account_id: GTM Account ID
        container_id: GTM Container ID
        name: Workspace name
        description: Optional description

```

[Source](https://github.com/adtechnacity/gtm-mcp/blob/cc3802596523ebad245af0280123e7a617ba1e89/src/gtm_mcp/lifecycle_tools.py#L172-L205) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "name": {
      "title": "Name",
      "type": "string"
    },
    "description": {
      "default": "",
      "title": "Description",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "name"
  ],
  "title": "create_gtm_workspaceArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_gtm_workspace_status-375c9459"></a>

## get_gtm_workspace_status

Handler: Fetches pending workspace entity changes and merge conflicts and returns compact summaries.

```text
List a workspace's pending changes and merge conflicts.

    Shows what would ship with the next version from this workspace (each
    added/updated/deleted tag, trigger, variable…) and any conflicts with the
    latest container version. Check this before ``create_gtm_version`` /
    ``publish_gtm_container``; resolve conflicts with ``sync_gtm_workspace``.

    Args:
        account_id: GTM Account ID
        container_id: GTM Container ID
        workspace_id: GTM Workspace ID (auto-detected if omitted)

```

[Source](https://github.com/adtechnacity/gtm-mcp/blob/cc3802596523ebad245af0280123e7a617ba1e89/src/gtm_mcp/lifecycle_tools.py#L208-L243) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Workspace Id"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ],
  "title": "get_gtm_workspace_statusArguments",
  "type": "object"
}
```

</details>

<a id="tool-sync_gtm_workspace-f25bcef9"></a>

## sync_gtm_workspace

Handler: Synchronizes a workspace with the latest container version and reports merge conflicts.

```text
Bring a workspace up to date with the latest container version.

    Needed after someone else publishes: GTM won't create a version from a
    stale workspace. Non-conflicting changes merge automatically; conflicts are
    returned and must be fixed (edit the entity, or ``revert_gtm_entity``)
    before publishing.

    Args:
        account_id: GTM Account ID
        container_id: GTM Container ID
        workspace_id: GTM Workspace ID (auto-detected if omitted)

```

[Source](https://github.com/adtechnacity/gtm-mcp/blob/cc3802596523ebad245af0280123e7a617ba1e89/src/gtm_mcp/lifecycle_tools.py#L246-L283) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Workspace Id"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ],
  "title": "sync_gtm_workspaceArguments",
  "type": "object"
}
```

</details>

<a id="tool-revert_gtm_entity-7bd7f786"></a>

## revert_gtm_entity

Handler: Calls the selected tag, trigger, or variable revert endpoint to discard that entity’s workspace changes.

```text
Undo a workspace's changes to one tag, trigger, or variable.

    Restores the entity to how it is in the latest container version: edits
    are discarded, an entity created in this workspace is removed, a deleted
    one comes back. Only affects the workspace — nothing live changes.

    Args:
        account_id: GTM Account ID
        container_id: GTM Container ID
        kind: "tag", "trigger", or "variable"
        entity_id: ID of the entity to revert
        workspace_id: GTM Workspace ID (auto-detected if omitted)

```

[Source](https://github.com/adtechnacity/gtm-mcp/blob/cc3802596523ebad245af0280123e7a617ba1e89/src/gtm_mcp/lifecycle_tools.py#L286-L327) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "kind": {
      "title": "Kind",
      "type": "string"
    },
    "entity_id": {
      "title": "Entity Id",
      "type": "string"
    },
    "workspace_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Workspace Id"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "kind",
    "entity_id"
  ],
  "title": "revert_gtm_entityArguments",
  "type": "object"
}
```

</details>

<a id="tool-list_gtm_containers-c6ad6269"></a>

## list_gtm_containers

Handler: Lists containers accessible in an account and returns their identity and usage fields.

```text
List all GTM containers in an account.

    Calls tagmanager.accounts.containers.list. Returns container names, IDs,
    public IDs, and usage contexts. Use this to discover container IDs needed
    by most other tools.

    Args:
        account_id: GTM Account ID (numeric string)

```

[Source](https://github.com/adtechnacity/gtm-mcp/blob/cc3802596523ebad245af0280123e7a617ba1e89/src/gtm_mcp/read_tools.py#L20-L46) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    }
  },
  "required": [
    "account_id"
  ],
  "title": "list_gtm_containersArguments",
  "type": "object"
}
```

</details>

<a id="tool-list_gtm_accounts-8aee50f5"></a>

## list_gtm_accounts

Handler: Lists accessible GTM accounts and returns names, account IDs, and paths.

```text
List all GTM accounts the authenticated user has access to.

    Calls tagmanager.accounts.list. Returns each account's name, ID, and path.
    This is typically the first discovery call — use the returned account IDs
    with list_gtm_containers to find containers.

```

[Source](https://github.com/adtechnacity/gtm-mcp/blob/cc3802596523ebad245af0280123e7a617ba1e89/src/gtm_mcp/read_tools.py#L48-L73) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "list_gtm_accountsArguments",
  "type": "object"
}
```

</details>

<a id="tool-list_gtm_workspaces-e1ad847d"></a>

## list_gtm_workspaces

Handler: Paginates container workspaces and returns names, IDs, and descriptions.

```text
List all workspaces in a GTM container.

    Calls tagmanager.accounts.containers.workspaces.list.
    Returns each workspace's name, ID, and description. The workspace ID is
    required by most tools that modify container contents.

    Args:
        account_id: GTM Account ID
        container_id: GTM Container ID

```

[Source](https://github.com/adtechnacity/gtm-mcp/blob/cc3802596523ebad245af0280123e7a617ba1e89/src/gtm_mcp/read_tools.py#L76-L111) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ],
  "title": "list_gtm_workspacesArguments",
  "type": "object"
}
```

</details>

<a id="tool-list_gtm_variables-b1742e8b"></a>

## list_gtm_variables

Handler: Paginates workspace variables and returns names, types, and IDs.

```text
List all variables in a GTM workspace.

    Calls tagmanager.accounts.containers.workspaces.variables.list.
    Returns each variable's name, type, and ID.

    Args:
        account_id: GTM Account ID
        container_id: GTM Container ID
        workspace_id: GTM Workspace ID (auto-detected if omitted)

```

[Source](https://github.com/adtechnacity/gtm-mcp/blob/cc3802596523ebad245af0280123e7a617ba1e89/src/gtm_mcp/read_tools.py#L113-L148) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Workspace Id"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ],
  "title": "list_gtm_variablesArguments",
  "type": "object"
}
```

</details>

<a id="tool-list_gtm_tags-7506947b"></a>

## list_gtm_tags

Handler: Paginates workspace tags and returns identity, triggers, pause state, and parsed consent settings.

```text
List all tags in a GTM workspace, including their consent settings.

    Calls tagmanager.accounts.containers.workspaces.tags.list.
    Returns each tag's name, type, ID, firing/blocking triggers, pause state,
    and parsed consent configuration. Use this to audit which tags have consent
    requirements configured.

    Args:
        account_id: GTM Account ID
        container_id: GTM Container ID
        workspace_id: GTM Workspace ID (auto-detected if omitted)

```

[Source](https://github.com/adtechnacity/gtm-mcp/blob/cc3802596523ebad245af0280123e7a617ba1e89/src/gtm_mcp/read_tools.py#L150-L205) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Workspace Id"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ],
  "title": "list_gtm_tagsArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_gtm_tag-95c3a3dd"></a>

## get_gtm_tag

Handler: Fetches and returns the complete workspace tag resource.

```text
Get full details of a specific GTM tag, including all parameters and consent settings.

    Calls tagmanager.accounts.containers.workspaces.tags.get.
    Returns the complete tag resource with all fields (parameters, consent
    settings, firing triggers, etc.).

    Args:
        account_id: GTM Account ID
        container_id: GTM Container ID
        tag_id: The tag ID to retrieve
        workspace_id: GTM Workspace ID (auto-detected if omitted)

```

[Source](https://github.com/adtechnacity/gtm-mcp/blob/cc3802596523ebad245af0280123e7a617ba1e89/src/gtm_mcp/read_tools.py#L208-L237) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "tag_id": {
      "title": "Tag Id",
      "type": "string"
    },
    "workspace_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Workspace Id"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "tag_id"
  ],
  "title": "get_gtm_tagArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_gtm_variable-1817042d"></a>

## get_gtm_variable

Handler: Fetches and returns the complete workspace variable resource.

```text
Get full details of a specific GTM variable, including its parameters.

    Calls tagmanager.accounts.containers.workspaces.variables.get.
    For JS Macro (jsm) variables, the JavaScript source is in the parameter
    list under key="javascript". For Data Layer Variables (v), the dataLayer
    key is under key="name".

    Args:
        account_id: GTM Account ID
        container_id: GTM Container ID
        variable_id: The variable ID to retrieve
        workspace_id: GTM Workspace ID (auto-detected if omitted)

```

[Source](https://github.com/adtechnacity/gtm-mcp/blob/cc3802596523ebad245af0280123e7a617ba1e89/src/gtm_mcp/read_tools.py#L240-L276) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "variable_id": {
      "title": "Variable Id",
      "type": "string"
    },
    "workspace_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Workspace Id"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "variable_id"
  ],
  "title": "get_gtm_variableArguments",
  "type": "object"
}
```

</details>

<a id="tool-list_gtm_triggers-3dd5a402"></a>

## list_gtm_triggers

Handler: Paginates workspace triggers and returns identity and filter conditions.

```text
List all triggers in a GTM workspace.

    Calls tagmanager.accounts.containers.workspaces.triggers.list.
    Returns each trigger's name, type, ID, filter conditions, and custom event filters.

    Args:
        account_id: GTM Account ID
        container_id: GTM Container ID
        workspace_id: GTM Workspace ID (auto-detected if omitted)

```

[Source](https://github.com/adtechnacity/gtm-mcp/blob/cc3802596523ebad245af0280123e7a617ba1e89/src/gtm_mcp/read_tools.py#L279-L316) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Workspace Id"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ],
  "title": "list_gtm_triggersArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_gtm_trigger-d280b47f"></a>

## get_gtm_trigger

Handler: Fetches and returns a complete workspace trigger resource; built-in triggers are not workspace resources.

```text
Get full details of one trigger: type, filters, auto-event settings, parameters.

    Built-in triggers such as All Pages (ID 2147479553) aren't workspace
    resources and return 404; ``find_gtm_references`` still works for them.

    Args:
        account_id: GTM Account ID
        container_id: GTM Container ID
        trigger_id: The trigger ID to retrieve
        workspace_id: GTM Workspace ID (auto-detected if omitted)

```

[Source](https://github.com/adtechnacity/gtm-mcp/blob/cc3802596523ebad245af0280123e7a617ba1e89/src/gtm_mcp/read_tools.py#L319-L342) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "trigger_id": {
      "title": "Trigger Id",
      "type": "string"
    },
    "workspace_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Workspace Id"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "trigger_id"
  ],
  "title": "get_gtm_triggerArguments",
  "type": "object"
}
```

</details>

<a id="tool-find_gtm_references-2806738d"></a>

## find_gtm_references

Handler: Fetches tags, triggers, and variables and scans trigger links, variable expressions, or tag sequencing references.

```text
Find everything in a workspace that uses a trigger, variable, or tag.

    Run before deleting or renaming — GTM's API doesn't stop you from leaving
    dangling references, and renaming a variable through the API does NOT
    rewrite ``{{Old Name}}`` where it's used.

    - ``kind="trigger"``: tags firing on or blocked by it; trigger groups containing it.
    - ``kind="variable"``: every ``{{Name}}`` use in tags, triggers, and other variables
      (custom JS, HTML, filters, parameters), with the field path.
    - ``kind="tag"``: tags that sequence it (setup / teardown).

    Args:
        account_id: GTM Account ID
        container_id: GTM Container ID
        kind: "trigger", "variable", or "tag"
        entity_id: ID of the entity to look up
        workspace_id: GTM Workspace ID (auto-detected if omitted)

```

[Source](https://github.com/adtechnacity/gtm-mcp/blob/cc3802596523ebad245af0280123e7a617ba1e89/src/gtm_mcp/read_tools.py#L348-L406) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "kind": {
      "title": "Kind",
      "type": "string"
    },
    "entity_id": {
      "title": "Entity Id",
      "type": "string"
    },
    "workspace_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Workspace Id"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "kind",
    "entity_id"
  ],
  "title": "find_gtm_referencesArguments",
  "type": "object"
}
```

</details>

<a id="tool-list_gtm_container_versions-c1070a98"></a>

## list_gtm_container_versions

Handler: Paginates version headers with optional deleted versions and returns identity and entity counts.

```text
List all container version headers (the container's publish history).

    Calls tagmanager.accounts.containers.version_headers.list.
    Returns each version's ID, name, entity counts, and deleted flag. Version
    IDs are monotonically increasing — higher ID means created later. Headers
    carry no timestamps; use get_gtm_container_version and read
    fingerprint_datetime to date a specific version.

    Args:
        account_id: GTM Account ID
        container_id: GTM Container ID
        include_deleted: Also include deleted versions (default False)

```

[Source](https://github.com/adtechnacity/gtm-mcp/blob/cc3802596523ebad245af0280123e7a617ba1e89/src/gtm_mcp/read_tools.py#L448-L490) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "include_deleted": {
      "default": false,
      "title": "Include Deleted",
      "type": "boolean"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ],
  "title": "list_gtm_container_versionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_gtm_container_version-e62b61a2"></a>

## get_gtm_container_version

Handler: Fetches a numeric or live container version and returns a summarized snapshot with fingerprint-derived time.

```text
Get a summarized snapshot of a specific GTM container version.

    Calls tagmanager.accounts.containers.versions.get (or versions.live when
    version_id is "live"). Returns identity fields, entity counts, and slim
    tag/trigger/variable listings — never the raw resource, which exceeds 200KB
    on large containers. fingerprint_datetime (ISO 8601 UTC, derived from the
    version's fingerprint) is effectively the version's creation time.

    Args:
        account_id: GTM Account ID
        container_id: GTM Container ID
        version_id: Container version ID, or "live" (default) for the published version

```

[Source](https://github.com/adtechnacity/gtm-mcp/blob/cc3802596523ebad245af0280123e7a617ba1e89/src/gtm_mcp/read_tools.py#L493-L508) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "version_id": {
      "default": "live",
      "title": "Version Id",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ],
  "title": "get_gtm_container_versionArguments",
  "type": "object"
}
```

</details>

<a id="tool-diff_gtm_container_versions-5b4a4c19"></a>

## diff_gtm_container_versions

Handler: Fetches two versions and computes entity and parameter changes with bounded string and change-list output.

```text
Diff two GTM container versions field-by-field, server-side.

    Calls tagmanager.accounts.containers.versions.get for each side (or
    versions.live for the special value "live"). Answers "what did publishing
    version X change" — diff X-1 → X, or X → live to see what changed since.
    Returns added/removed/changed tags, triggers, and variables (changed
    entries carry per-field change lists with GTM parameter lists matched by
    key), plus added/removed built-in variables and summary counts. Long
    string values are truncated at 300 chars; per-entity change lists are
    capped at 40 entries.

    Args:
        account_id: GTM Account ID
        container_id: GTM Container ID
        from_version_id: Baseline version ID, or "live"
        to_version_id: Target version ID, or "live" (default)

```

[Source](https://github.com/adtechnacity/gtm-mcp/blob/cc3802596523ebad245af0280123e7a617ba1e89/src/gtm_mcp/read_tools.py#L511-L556) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "from_version_id": {
      "title": "From Version Id",
      "type": "string"
    },
    "to_version_id": {
      "default": "live",
      "title": "To Version Id",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "from_version_id"
  ],
  "title": "diff_gtm_container_versionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-delete_gtm_variable-16583557"></a>

## delete_gtm_variable

Handler: Deletes a variable from the resolved workspace through the GTM variables endpoint.

```text
Delete a variable from a GTM workspace.

    Calls tagmanager.accounts.containers.workspaces.variables.delete.
    This is permanent within the workspace — publish to make it live, or
    discard workspace changes to undo.

    Args:
        account_id: GTM Account ID
        container_id: GTM Container ID
        variable_id: The variable ID to delete
        workspace_id: GTM Workspace ID (auto-detected if omitted)

```

[Source](https://github.com/adtechnacity/gtm-mcp/blob/cc3802596523ebad245af0280123e7a617ba1e89/src/gtm_mcp/read_tools.py#L559-L588) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "variable_id": {
      "title": "Variable Id",
      "type": "string"
    },
    "workspace_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Workspace Id"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "variable_id"
  ],
  "title": "delete_gtm_variableArguments",
  "type": "object"
}
```

</details>

<a id="tool-create_tag-e71dcc44"></a>

## create_tag

Handler: Creates a tag from native parameter lists and optional trigger, consent, pause, and firing settings.

```text
Create any tag in a GTM workspace.

    Calls tagmanager.accounts.containers.workspaces.tags.create to create a tag
    of any type (GA4, Custom HTML, Facebook Pixel, Google Ads, etc.).

    The ``parameter`` list uses GTM's native format — each item is a dict with
    ``key``, ``value``, and ``type`` (usually ``"template"``). Use ``get_gtm_tag``
    on an existing tag to see the parameter format for a given tag type.

    Args:
        account_id: GTM Account ID
        container_id: GTM Container ID
        name: Display name for the tag in GTM
        tag_type: GTM tag type identifier (e.g. "gtagjs", "html", "ua", "fbpixel", "gclidw")
        parameter: List of parameter dicts in GTM format: [{"key": "...", "value": "...", "type": "template"}, ...]
        firing_trigger_ids: List of trigger ID strings that cause this tag to fire
        blocking_trigger_ids: List of trigger ID strings that prevent this tag from firing
        consent_status: Consent requirement — "notSet", "notNeeded", or "needed"
        consent_types: List of consent types required when consent_status is "needed"
                       (e.g. ["ad_storage", "analytics_storage"])
        notes: Optional user notes describing the tag's purpose
        paused: Whether the tag should be created in a paused state (default False)
        tag_firing_option: Firing option — "unlimited", "oncePerEvent", or "oncePerLoad"
        workspace_id: GTM Workspace ID (auto-detected if omitted)

```

[Source](https://github.com/adtechnacity/gtm-mcp/blob/cc3802596523ebad245af0280123e7a617ba1e89/src/gtm_mcp/write_tools.py#L27-L110) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "name": {
      "title": "Name",
      "type": "string"
    },
    "tag_type": {
      "title": "Tag Type",
      "type": "string"
    },
    "parameter": {
      "default": null,
      "items": {},
      "title": "Parameter",
      "type": "array"
    },
    "firing_trigger_ids": {
      "default": null,
      "items": {},
      "title": "Firing Trigger Ids",
      "type": "array"
    },
    "blocking_trigger_ids": {
      "default": null,
      "items": {},
      "title": "Blocking Trigger Ids",
      "type": "array"
    },
    "consent_status": {
      "default": null,
      "title": "Consent Status",
      "type": "string"
    },
    "consent_types": {
      "default": null,
      "items": {},
      "title": "Consent Types",
      "type": "array"
    },
    "notes": {
      "default": null,
      "title": "Notes",
      "type": "string"
    },
    "paused": {
      "default": false,
      "title": "Paused",
      "type": "boolean"
    },
    "tag_firing_option": {
      "default": null,
      "title": "Tag Firing Option",
      "type": "string"
    },
    "workspace_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Workspace Id"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "name",
    "tag_type"
  ],
  "title": "create_tagArguments",
  "type": "object"
}
```

</details>

<a id="tool-create_datalayer_variables_batch-3e24b84b"></a>

## create_datalayer_variables_batch

Handler: Creates up to 50 dataLayer version 2 variables sequentially and reports individual successes and failures.

```text
Create multiple Data Layer Variables in a GTM workspace at once.

    Iterates over a list of variable definitions and creates each as a type 'v'
    (Data Layer Variable) using dataLayer version 2. Reports per-variable
    success/failure.

    Args:
        account_id: GTM Account ID
        container_id: GTM Container ID
        variables: List of dicts with 'name' (display name) and 'key' (dataLayer key).
                   Example: [{"name": "DLV - fs_order_id", "key": "fs_order_id"}, ...]
        workspace_id: GTM Workspace ID (auto-detected if omitted)

```

[Source](https://github.com/adtechnacity/gtm-mcp/blob/cc3802596523ebad245af0280123e7a617ba1e89/src/gtm_mcp/write_tools.py#L117-L155) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "variables": {
      "items": {},
      "title": "Variables",
      "type": "array"
    },
    "workspace_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Workspace Id"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "variables"
  ],
  "title": "create_datalayer_variables_batchArguments",
  "type": "object"
}
```

</details>

<a id="tool-create_trigger-71660c93"></a>

## create_trigger

Handler: Creates a trigger with optional native filter conditions and a custom-event match; advanced trigger types needing additional settings require later updates.

```text
Create a trigger in a GTM workspace.

    Supports the common GTM trigger types. The most common are:

    - ``customEvent`` (default) — fires on ``dataLayer.push({'event': <name>})``.
      Requires ``event_name``. Example: set ``event_name="consent_update"`` to
      fire on ``dataLayer.push({'event': 'consent_update'})``.
    - ``pageview`` — fires when gtm.js runs (first paint-ish).
    - ``init`` — Init-All-Pages; fires before the standard pageview trigger.
    - ``consentInit`` — fires before ``init``, intended for consent defaults.
    - ``domReady`` / ``windowLoaded`` — standard page lifecycle triggers.
    - ``click`` / ``linkClick`` / ``formSubmission`` / ``scrollDepth`` /
      ``elementVisibility`` / ``timer`` / ``historyChange`` / ``youTubeVideo`` /
      ``triggerGroup`` / ``pageviewGtm`` / ``serverPageview``.

    ``event_name`` is only used when ``trigger_type == "customEvent"`` (it is
    ignored for other types). For ``customEvent`` triggers without ``event_name``
    you get a validation error.

    Optional ``filters`` adds AND-ed conditions to the trigger (equivalent to
    the GTM UI "Fire on Some ..." conditions). Each item is a GTM Condition
    dict with ``type`` and ``parameter``, e.g.
    ``{"type": "equals", "parameter": [{"key": "arg0", "value": "{{utm_source}}", "type": "template"},
    {"key": "arg1", "value": "google_yt_el", "type": "template"}]}``.

    Note: the GTM REST Condition schema has no ``negate`` flag. To express
    "does not equal X", use ``type: "matchRegex"`` with a negative lookahead
    pattern such as ``^(?!X$).*$``, or invert the intent (use the trigger as
    a firing filter rather than an exception).

    Args:
        account_id: GTM Account ID
        container_id: GTM Container ID
        trigger_name: Display name for the trigger in GTM (e.g., "CE - consent_update")
        event_name: The custom event name to match — required when trigger_type is "customEvent"
        trigger_type: GTM trigger type (default "customEvent"). See list above.
        filters: Optional list of GTM Condition dicts to AND with the trigger's base match
        workspace_id: GTM Workspace ID (auto-detected if omitted)

```

[Source](https://github.com/adtechnacity/gtm-mcp/blob/cc3802596523ebad245af0280123e7a617ba1e89/src/gtm_mcp/write_tools.py#L170-L265) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "trigger_name": {
      "title": "Trigger Name",
      "type": "string"
    },
    "event_name": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Event Name"
    },
    "trigger_type": {
      "default": "customEvent",
      "title": "Trigger Type",
      "type": "string"
    },
    "filters": {
      "anyOf": [
        {
          "items": {
            "additionalProperties": true,
            "type": "object"
          },
          "type": "array"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Filters"
    },
    "workspace_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Workspace Id"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "trigger_name"
  ],
  "title": "create_triggerArguments",
  "type": "object"
}
```

</details>

<a id="tool-delete_tag-1345d160"></a>

## delete_tag

Handler: Deletes a tag from the resolved workspace.

```text
Delete a tag from a GTM workspace.

    Calls tagmanager.accounts.containers.workspaces.tags.delete. Permanent
    within the workspace — publish to make it live, or discard workspace
    changes to undo.

    Args:
        account_id: GTM Account ID
        container_id: GTM Container ID
        tag_id: The tag ID to delete
        workspace_id: GTM Workspace ID (auto-detected if omitted)

```

[Source](https://github.com/adtechnacity/gtm-mcp/blob/cc3802596523ebad245af0280123e7a617ba1e89/src/gtm_mcp/write_tools.py#L272-L305) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "tag_id": {
      "title": "Tag Id",
      "type": "string"
    },
    "workspace_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Workspace Id"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "tag_id"
  ],
  "title": "delete_tagArguments",
  "type": "object"
}
```

</details>

<a id="tool-delete_trigger-ec67de91"></a>

## delete_trigger

Handler: Deletes a workspace trigger without detaching references from tags.

```text
Delete a trigger from a GTM workspace.

    Removes the trigger resource entirely. Tags that reference this trigger via
    ``firingTriggerId`` or ``blockingTriggerId`` will have dangling references
    after deletion — detach it first with ``update_tags_triggers_batch``
    (``action="remove"``, ``kind="firing"`` or ``"blocking"``).

    Args:
        account_id: GTM Account ID
        container_id: GTM Container ID
        trigger_id: The trigger ID to delete
        workspace_id: GTM Workspace ID (auto-detected if omitted)

```

[Source](https://github.com/adtechnacity/gtm-mcp/blob/cc3802596523ebad245af0280123e7a617ba1e89/src/gtm_mcp/write_tools.py#L312-L346) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "trigger_id": {
      "title": "Trigger Id",
      "type": "string"
    },
    "workspace_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Workspace Id"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "trigger_id"
  ],
  "title": "delete_triggerArguments",
  "type": "object"
}
```

</details>

<a id="tool-update_trigger_parameters-87799997"></a>

## update_trigger_parameters

Handler: Fetches a trigger, replaces or removes supported top-level fields, and updates with fingerprint concurrency.

```text
Upsert top-level fields on a GTM trigger in place.

    Fetches the trigger, overwrites each key in ``fields`` on the resource,
    and saves via tagmanager.accounts.containers.workspaces.triggers.update
    with fingerprint-based optimistic concurrency. Keys not in ``fields`` are
    preserved. Mirrors ``update_tag_parameters``' semantics for triggers.

    Wholesale-replace semantic: list-valued fields (``filter``,
    ``customEventFilter``, ``autoEventFilter``) overwrite the existing list.
    Passing ``[]`` clears the list. Passing ``None`` for any *optional* key
    removes that key from the trigger. ``name`` is required by GTM, so
    ``None`` is rejected — omit the key to leave the name unchanged.

    Supported keys:

    - ``name`` (str)
    - ``filter`` / ``customEventFilter`` / ``autoEventFilter`` (list of GTM
      Condition dicts — same shape ``create_trigger``'s ``filters`` accepts)
    - ``interval`` / ``limit`` — timer-trigger Parameter dicts (e.g.
      ``{"type": "integer", "key": "interval", "value": "60000"}``)
    - ``checkValidation`` / ``waitForTags`` — formSubmission-trigger
      Parameter dicts (e.g. ``{"type": "boolean", "key": "checkValidation",
      "value": "true"}``)

    For the {operator, lhs, rhs} ergonomic form, see ``update_trigger_filter``.

    Args:
        account_id: GTM Account ID
        container_id: GTM Container ID
        trigger_id: The trigger ID to update
        fields: Dict of top-level trigger fields to overwrite
        workspace_id: GTM Workspace ID (auto-detected if omitted)

```

[Source](https://github.com/adtechnacity/gtm-mcp/blob/cc3802596523ebad245af0280123e7a617ba1e89/src/gtm_mcp/write_tools.py#L470-L517) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "trigger_id": {
      "title": "Trigger Id",
      "type": "string"
    },
    "fields": {
      "additionalProperties": true,
      "title": "Fields",
      "type": "object"
    },
    "workspace_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Workspace Id"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "trigger_id",
    "fields"
  ],
  "title": "update_trigger_parametersArguments",
  "type": "object"
}
```

</details>

<a id="tool-update_trigger_filter-1ca00e07"></a>

## update_trigger_filter

Handler: Converts operator/lhs/rhs conditions to native GTM conditions and replaces the selected trigger filter list.

```text
Replace a trigger's filter list using the ergonomic ``{operator, lhs, rhs}`` form.

    Convenience wrapper around ``update_trigger_parameters``. Each condition
    is a dict like ``{"operator": "matchRegex", "lhs": "{{Page Path}}",
    "rhs": "/(create|studio)(?:[?/]|$)"}`` — the tool builds the underlying
    GTM Condition dicts (``arg0``/``arg1`` template parameters) for you.

    Pass ``[]`` for ``conditions`` to clear the list wholesale (same semantic
    as ``update_trigger_parameters``).

    Args:
        account_id: GTM Account ID
        container_id: GTM Container ID
        trigger_id: The trigger ID to update
        conditions: List of ``{operator, lhs, rhs}`` dicts (or ``[]`` to clear)
        target: Which list to replace — ``filter`` (default), ``customEventFilter``, or ``autoEventFilter``
        workspace_id: GTM Workspace ID (auto-detected if omitted)

```

[Source](https://github.com/adtechnacity/gtm-mcp/blob/cc3802596523ebad245af0280123e7a617ba1e89/src/gtm_mcp/write_tools.py#L520-L569) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "trigger_id": {
      "title": "Trigger Id",
      "type": "string"
    },
    "conditions": {
      "items": {},
      "title": "Conditions",
      "type": "array"
    },
    "target": {
      "default": "filter",
      "title": "Target",
      "type": "string"
    },
    "workspace_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Workspace Id"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "trigger_id",
    "conditions"
  ],
  "title": "update_trigger_filterArguments",
  "type": "object"
}
```

</details>

<a id="tool-update_tags_consent_settings_batch-91c780d8"></a>

## update_tags_consent_settings_batch

Handler: Fetches and fingerprint-updates each selected tag with a shared validated consent configuration.

```text
Bulk update consent settings for multiple GTM tags at once.

    Applies the same consent configuration to all specified tags.
    Each tag is fetched and updated individually with fingerprint concurrency.
    Use list_gtm_tags first to find the tag IDs you want to update.

    Args:
        account_id: GTM Account ID
        container_id: GTM Container ID
        tag_ids: List of tag IDs to update
        consent_status: One of "notSet", "notNeeded", or "needed"
        consent_types: List of consent type strings required when status is "needed".
                       Valid types: "ad_storage", "analytics_storage", "ad_user_data",
                       "ad_personalization", "functionality_storage", "personalization_storage",
                       "security_storage"
        workspace_id: GTM Workspace ID (auto-detected if omitted)

```

[Source](https://github.com/adtechnacity/gtm-mcp/blob/cc3802596523ebad245af0280123e7a617ba1e89/src/gtm_mcp/write_tools.py#L576-L616) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "tag_ids": {
      "items": {},
      "title": "Tag Ids",
      "type": "array"
    },
    "consent_status": {
      "title": "Consent Status",
      "type": "string"
    },
    "consent_types": {
      "default": null,
      "items": {},
      "title": "Consent Types",
      "type": "array"
    },
    "workspace_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Workspace Id"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "tag_ids",
    "consent_status"
  ],
  "title": "update_tags_consent_settings_batchArguments",
  "type": "object"
}
```

</details>

<a id="tool-update_tag_parameters-54e07806"></a>

## update_tag_parameters

Handler: Upserts complete native tag parameters by key and writes the tag with fingerprint concurrency.

```text
Upsert raw GTM parameter dicts on any tag, by ``key``.

    For each item in ``parameters``, replaces the existing parameter with the
    same ``key`` on the tag, or appends it if absent. Other parameters are
    left unchanged. Saves with fingerprint-based optimistic concurrency.

    Each item must be a complete GTM parameter dict matching the API schema:
    ``{"key": str, "type": "template"|"boolean"|"integer"|"list"|"map", ...}``
    with ``value`` for template/boolean/integer, ``list`` for list, or ``map``
    for map. Inspect the tag with ``get_gtm_tag`` first to learn the shape.

    GA4 event tag (type ``gaawe``) recipe — add/overwrite event parameters:
        1. ``get_gtm_tag`` to read existing ``eventParameters``
        2. Build the merged list-of-maps locally
        3. Call this tool with that single ``eventParameters`` entry

    Args:
        account_id: GTM Account ID
        container_id: GTM Container ID
        tag_id: The tag ID to update
        parameters: List of GTM parameter dicts to upsert by ``key``
        workspace_id: GTM Workspace ID (auto-detected if omitted)

```

[Source](https://github.com/adtechnacity/gtm-mcp/blob/cc3802596523ebad245af0280123e7a617ba1e89/src/gtm_mcp/write_tools.py#L623-L685) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "tag_id": {
      "title": "Tag Id",
      "type": "string"
    },
    "parameters": {
      "items": {},
      "title": "Parameters",
      "type": "array"
    },
    "workspace_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Workspace Id"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "tag_id",
    "parameters"
  ],
  "title": "update_tag_parametersArguments",
  "type": "object"
}
```

</details>

<a id="tool-set_tags_firing_option_batch-f1e884ab"></a>

## set_tags_firing_option_batch

Handler: Updates selected tags to a validated firing option with fingerprint concurrency and skips unchanged tags.

```text
Bulk set the tag firing option for multiple GTM tags at once.

    The firing option controls how often a tag may fire relative to events on
    a page:
      - "oncePerLoad"  → once per page load (the GTM UI label is "Once per page")
      - "oncePerEvent" → once per triggering event (can fire multiple times per page)
      - "unlimited"    → every time a firing trigger is satisfied

    Each tag is fetched and updated individually with fingerprint concurrency,
    preserving every other field. Tags already set to ``firing_option`` are
    skipped. Use list_gtm_tags / get_gtm_tag to find tag IDs and inspect their
    current firing option. Changes apply on the next container publish.

    Args:
        account_id: GTM Account ID
        container_id: GTM Container ID
        tag_ids: List of tag ID strings to update
        firing_option: One of "unlimited", "oncePerEvent", or "oncePerLoad"
        workspace_id: GTM Workspace ID (auto-detected if omitted)

```

[Source](https://github.com/adtechnacity/gtm-mcp/blob/cc3802596523ebad245af0280123e7a617ba1e89/src/gtm_mcp/write_tools.py#L693-L740) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "tag_ids": {
      "items": {},
      "title": "Tag Ids",
      "type": "array"
    },
    "firing_option": {
      "title": "Firing Option",
      "type": "string"
    },
    "workspace_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Workspace Id"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "tag_ids",
    "firing_option"
  ],
  "title": "set_tags_firing_option_batchArguments",
  "type": "object"
}
```

</details>

<a id="tool-create_gtm_variable-3a356a91"></a>

## create_gtm_variable

Handler: Creates an arbitrary variable from native parameters or custom-JavaScript/dataLayer shortcuts.

```text
Create a GTM variable of any type.

    Shortcuts that build the parameter list for you:

    - ``javascript=<source>`` → Custom JavaScript (``jsm``). The source is a full
      anonymous function returning the value, e.g.
      ``"function() { return {{utm_source}} === 'google'; }"``.
    - ``datalayer_key=<key>`` → Data Layer Variable (``v``, dataLayer v2).

    For any other type pass ``variable_type`` (e.g. "c" constant, "u" URL) plus a
    raw GTM ``parameters`` list. ``parameters``, ``javascript`` and
    ``datalayer_key`` are mutually exclusive. For many data layer variables at
    once use ``create_datalayer_variables_batch``.

    Args:
        account_id: GTM Account ID
        container_id: GTM Container ID
        name: Display name; tags reference it as ``{{name}}``
        variable_type: GTM variable type; defaults to "jsm" with javascript
        parameters: Raw GTM parameter list (optional)
        javascript: Custom JS source; implies type "jsm" (optional)
        datalayer_key: dataLayer key to read; implies type "v" (optional)
        notes: Notes (optional)
        parent_folder_id: Folder ID (optional)
        workspace_id: GTM Workspace ID (auto-detected if omitted)

```

[Source](https://github.com/adtechnacity/gtm-mcp/blob/cc3802596523ebad245af0280123e7a617ba1e89/src/gtm_mcp/write_tools.py#L743-L835) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "name": {
      "title": "Name",
      "type": "string"
    },
    "variable_type": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Variable Type"
    },
    "parameters": {
      "anyOf": [
        {
          "items": {},
          "type": "array"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Parameters"
    },
    "javascript": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Javascript"
    },
    "datalayer_key": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Datalayer Key"
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
    "parent_folder_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Parent Folder Id"
    },
    "workspace_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Workspace Id"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "name"
  ],
  "title": "create_gtm_variableArguments",
  "type": "object"
}
```

</details>

<a id="tool-update_gtm_variable-273d164b"></a>

## update_gtm_variable

Handler: Fetches a variable, changes only supplied fields, and saves with fingerprint concurrency.

```text
Update an existing GTM variable in place (partial update).

    Fetches the variable, mutates only the fields you passed, then writes
    it back with fingerprint concurrency. Preserves the variable's ID so
    every tag/trigger reference to ``{{variable_name}}`` keeps working.

    For jsm (Custom JavaScript) variables, pass ``javascript=<source>`` as
    a shortcut; the tool builds the right parameter list for you. For any
    variable type, pass ``parameters=<list of GTM parameter dicts>`` to
    replace the parameter list directly. ``parameters`` and ``javascript``
    are mutually exclusive.

    Args:
        account_id: GTM Account ID
        container_id: GTM Container ID
        variable_id: The variable ID to update
        name: New display name (optional)
        parameters: Raw GTM parameter list, replaces existing (optional)
        javascript: Custom JS source; jsm variables only (optional)
        notes: New notes (optional)
        parent_folder_id: New parent folder ID (optional)
        workspace_id: GTM Workspace ID (auto-detected if omitted)

```

[Source](https://github.com/adtechnacity/gtm-mcp/blob/cc3802596523ebad245af0280123e7a617ba1e89/src/gtm_mcp/write_tools.py#L838-L944) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "variable_id": {
      "title": "Variable Id",
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
    "parameters": {
      "anyOf": [
        {
          "items": {},
          "type": "array"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Parameters"
    },
    "javascript": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Javascript"
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
    "parent_folder_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Parent Folder Id"
    },
    "workspace_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Workspace Id"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "variable_id"
  ],
  "title": "update_gtm_variableArguments",
  "type": "object"
}
```

</details>

<a id="tool-update_tag-ff9e7962"></a>

## update_tag

Handler: Fetches a tag, changes supplied fields including sequencing and pause state, and fingerprint-updates unless unchanged.

```text
Update an existing GTM tag in place (partial update).

    Fetches the tag, mutates only the fields you passed, then writes it back
    with fingerprint concurrency — or returns status "noop" without writing
    when the tag already has those values. Preserves the tag's ID so every reference to
    it (including tag-sequencing links) keeps working. Any field left as
    ``None`` is untouched; pass ``firing_trigger_ids=[]`` to explicitly clear a
    tag's own firing triggers (e.g. a tag that should fire only via sequencing).

    Tag sequencing: pass ``teardown_tag_name`` to fire another tag *after* this
    one (this tag's ``teardownTag``), or ``setup_tag_name`` to fire one
    *before* it (``setupTag``). ``stop_on_failure`` maps to
    ``stopTeardownOnFailure`` / ``stopOnSetupFailure`` for whichever you set.

    Args:
        account_id: GTM Account ID
        container_id: GTM Container ID
        tag_id: The tag ID to update
        name: New display name (optional)
        parameter: Raw GTM parameter list, replaces existing (optional)
        firing_trigger_ids: Replace the tag's firing trigger IDs; [] clears them
        blocking_trigger_ids: Replace the tag's blocking (exception) trigger IDs
        setup_tag_name: Name of a tag to fire before this one (setupTag)
        teardown_tag_name: Name of a tag to fire after this one (teardownTag)
        stop_on_failure: stopOnSetupFailure / stopTeardownOnFailure flag
        tag_firing_option: "unlimited", "oncePerEvent", or "oncePerLoad"
        consent_status: "notSet", "notNeeded", or "needed"
        consent_types: Consent types when consent_status is "needed"
        notes: New notes (optional)
        paused: Pause/unpause the tag (optional)
        parent_folder_id: New parent folder ID (optional)
        workspace_id: GTM Workspace ID (auto-detected if omitted)

```

[Source](https://github.com/adtechnacity/gtm-mcp/blob/cc3802596523ebad245af0280123e7a617ba1e89/src/gtm_mcp/write_tools.py#L947-L1101) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "tag_id": {
      "title": "Tag Id",
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
    "parameter": {
      "anyOf": [
        {
          "items": {},
          "type": "array"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Parameter"
    },
    "firing_trigger_ids": {
      "anyOf": [
        {
          "items": {},
          "type": "array"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Firing Trigger Ids"
    },
    "blocking_trigger_ids": {
      "anyOf": [
        {
          "items": {},
          "type": "array"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Blocking Trigger Ids"
    },
    "setup_tag_name": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Setup Tag Name"
    },
    "teardown_tag_name": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Teardown Tag Name"
    },
    "stop_on_failure": {
      "default": false,
      "title": "Stop On Failure",
      "type": "boolean"
    },
    "tag_firing_option": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Tag Firing Option"
    },
    "consent_status": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Consent Status"
    },
    "consent_types": {
      "anyOf": [
        {
          "items": {},
          "type": "array"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Consent Types"
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
    "paused": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Paused"
    },
    "parent_folder_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Parent Folder Id"
    },
    "workspace_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Workspace Id"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "tag_id"
  ],
  "title": "update_tagArguments",
  "type": "object"
}
```

</details>

<a id="tool-update_tags_triggers_batch-034fc0fa"></a>

## update_tags_triggers_batch

Handler: Adds, removes, or replaces firing or blocking trigger IDs across selected tags and skips unchanged tags.

```text
Add, remove, or replace firing or blocking triggers on multiple tags.

    - ``action="add"`` — attach ``trigger_ids`` not already on the tag; others kept.
    - ``action="remove"`` — detach ``trigger_ids``; others kept.
    - ``action="set"`` — replace the list with ``trigger_ids`` exactly. ``[]``
      clears it (a tag with no firing trigger stops firing).

    ``kind="blocking"`` targets exception triggers (``blockingTriggerId``): a
    matching blocking trigger stops the tag even when a firing trigger matches.
    Tags that wouldn't change are skipped; each tag is fetched and written with
    fingerprint concurrency. Typical migration: ``create_trigger`` →
    ``action="add"`` new → ``action="remove"`` old → ``delete_trigger`` old.

    Args:
        account_id: GTM Account ID
        container_id: GTM Container ID
        tag_ids: Tag IDs to update (max 50)
        action: "add", "remove", or "set"
        trigger_ids: Trigger IDs to add/remove, or the full list for "set"
        kind: "firing" (default) or "blocking"
        workspace_id: GTM Workspace ID (auto-detected if omitted)

```

[Source](https://github.com/adtechnacity/gtm-mcp/blob/cc3802596523ebad245af0280123e7a617ba1e89/src/gtm_mcp/write_tools.py#L1112-L1164) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "tag_ids": {
      "items": {},
      "title": "Tag Ids",
      "type": "array"
    },
    "action": {
      "title": "Action",
      "type": "string"
    },
    "trigger_ids": {
      "items": {},
      "title": "Trigger Ids",
      "type": "array"
    },
    "kind": {
      "default": "firing",
      "title": "Kind",
      "type": "string"
    },
    "workspace_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Workspace Id"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "tag_ids",
    "action",
    "trigger_ids"
  ],
  "title": "update_tags_triggers_batchArguments",
  "type": "object"
}
```

</details>
