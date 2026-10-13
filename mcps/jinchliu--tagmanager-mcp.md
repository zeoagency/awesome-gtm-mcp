# jinchliu/tagmanager-mcp

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/jinchliu/tagmanager-mcp) · [Machine-readable inventory](../data/mcps/jinchliu--tagmanager-mcp.json)

**24 extracted tools.** Paginated resource browsing, draft edits with current fingerprints, and explicit version publication.

Snapshot: 2026-10-13 · [35ec81596ed0](https://github.com/jinchliu/tagmanager-mcp/tree/35ec81596ed0f091176ec67370aee8be8a98c6dd) · Method: tools/list.

Exposure: All 24 tools are registered unconditionally by importing structure, tags, triggers, variables and versions. Deletes and publication require confirm=true; this is handler gating, not conditional registration.

## Limits

- Offline MCPServer.list_tools registration extraction used locked MCP 2.0.0; Google API requests and credential loading were never executed, so live permissions and remote behavior are unverified.
- Resource body and changes parameters intentionally expose unrestricted dictionaries; documented body examples do not impose JSON Schema constraints.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`list_accounts`](#tool-list_accounts-1090ba6a) | GTM | Lists accessible GTM accounts with optional Google Tag accounts using paginated Tag Manager v2 account requests. |
| [`list_containers`](#tool-list_containers-a53dbc4d) | GTM | Lists all containers for an account using paginated Tag Manager v2 requests. |
| [`list_workspaces`](#tool-list_workspaces-af844119) | GTM | Lists all workspaces in a container using paginated Tag Manager v2 requests. |
| [`get_workspace_status`](#tool-get_workspace_status-23f21bb9) | GTM | Reads workspace changes and merge conflicts with the Tag Manager v2 getStatus endpoint. |
| [`list_tags`](#tool-list_tags-86fc0f9c) | GTM | Lists paginated workspace tags and returns selected skeleton fields. |
| [`get_tag`](#tool-get_tag-749bab4b) | GTM | Gets the full workspace tag configuration from Tag Manager v2. |
| [`create_tag`](#tool-create_tag-e71dcc44) | GTM | Creates a workspace tag using the unrestricted caller-supplied resource body. |
| [`update_tag`](#tool-update_tag-ff9e7962) | GTM | Reads the current tag, shallow-merges caller changes with null-key removal, and updates with its current fingerprint when present. |
| [`delete_tag`](#tool-delete_tag-1345d160) | GTM | Requires confirm=true, deletes the workspace tag and returns its deleted resource path. |
| [`list_triggers`](#tool-list_triggers-4ca44d74) | GTM | Lists paginated workspace triggers and returns selected skeleton fields. |
| [`get_trigger`](#tool-get_trigger-e2f13ee6) | GTM | Gets the full workspace trigger configuration from Tag Manager v2. |
| [`create_trigger`](#tool-create_trigger-71660c93) | GTM | Creates a workspace trigger using the unrestricted caller-supplied resource body. |
| [`update_trigger`](#tool-update_trigger-60ddeb77) | GTM | Reads the current trigger, shallow-merges caller changes with null-key removal, and updates with its current fingerprint when present. |
| [`delete_trigger`](#tool-delete_trigger-ec67de91) | GTM | Requires confirm=true, deletes the workspace trigger and returns its deleted resource path. |
| [`list_variables`](#tool-list_variables-1adaa2a1) | GTM | Lists paginated workspace variables and returns selected skeleton fields. |
| [`get_variable`](#tool-get_variable-ba0cd778) | GTM | Gets the full workspace variable configuration from Tag Manager v2. |
| [`create_variable`](#tool-create_variable-2f5e4ddb) | GTM | Creates a workspace variable using the unrestricted caller-supplied resource body. |
| [`update_variable`](#tool-update_variable-63c48ad7) | GTM | Reads the current variable, shallow-merges caller changes with null-key removal, and updates with its current fingerprint when present. |
| [`delete_variable`](#tool-delete_variable-3ead6fdb) | GTM | Requires confirm=true, deletes the workspace variable and returns its deleted resource path. |
| [`list_versions`](#tool-list_versions-3eb8d6c0) | GTM | Lists paginated container version headers and reduces them to selected metadata and counts. |
| [`get_version`](#tool-get_version-e67e6685) | GTM | Gets a container version and returns metadata with slimmed embedded tags, triggers and variables. |
| [`get_live_version`](#tool-get_live_version-ffef26dc) | GTM | Gets the live container version and returns metadata with slimmed embedded entities. |
| [`create_version`](#tool-create_version-fc39e936) | GTM | Snapshots a workspace with optional name and notes through create\_version and returns version, compiler, sync and new workspace information. |
| [`publish_version`](#tool-publish_version-0628e4c5) | GTM | Requires confirm=true, publishes the selected version through the v2 publish endpoint and returns version and compiler information. |

<a id="tool-list_accounts-1090ba6a"></a>

## list_accounts

Handler: Lists accessible GTM accounts with optional Google Tag accounts using paginated Tag Manager v2 account requests.

```text
Lists all Google Tag Manager accounts accessible to the caller.

Args:
    include_google_tags: Also include Google Tag accounts in the
        results.

```

[Source](https://github.com/jinchliu/tagmanager-mcp/blob/35ec81596ed0f091176ec67370aee8be8a98c6dd/tagmanager_mcp/tools/structure.py#L14-L35) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "include_google_tags": {
      "default": false,
      "title": "Include Google Tags",
      "type": "boolean"
    }
  },
  "title": "list_accountsArguments",
  "type": "object"
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

<a id="tool-list_containers-a53dbc4d"></a>

## list_containers

Handler: Lists all containers for an account using paginated Tag Manager v2 requests.

```text
Lists all containers in a Google Tag Manager account.

Args:
    account_id: Numeric GTM account ID (e.g. 6000000000) or a full
        path like 'accounts/6000000000'.

```

[Source](https://github.com/jinchliu/tagmanager-mcp/blob/35ec81596ed0f091176ec67370aee8be8a98c6dd/tagmanager_mcp/tools/structure.py#L38-L58) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Account Id"
    }
  },
  "required": [
    "account_id"
  ],
  "title": "list_containersArguments",
  "type": "object"
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

<a id="tool-list_workspaces-af844119"></a>

## list_workspaces

Handler: Lists all workspaces in a container using paginated Tag Manager v2 requests.

```text
Lists workspaces in a container.

Args:
    account_id: Numeric account ID or full resource path.
    container_id: Numeric container ID (e.g. 200001) or a full path
        like 'accounts/123/containers/200001'.

```

[Source](https://github.com/jinchliu/tagmanager-mcp/blob/35ec81596ed0f091176ec67370aee8be8a98c6dd/tagmanager_mcp/tools/structure.py#L61-L91) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Account Id"
    },
    "container_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Container Id"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ],
  "title": "list_workspacesArguments",
  "type": "object"
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

<a id="tool-get_workspace_status-23f21bb9"></a>

## get_workspace_status

Handler: Reads workspace changes and merge conflicts with the Tag Manager v2 getStatus endpoint.

```text
Shows unpublished changes and merge conflicts in a workspace.

Args:
    account_id: Numeric account ID or full resource path.
    container_id: Numeric container ID or full resource path.
    workspace_id: Numeric workspace ID; find it via list_workspaces.

```

[Source](https://github.com/jinchliu/tagmanager-mcp/blob/35ec81596ed0f091176ec67370aee8be8a98c6dd/tagmanager_mcp/tools/structure.py#L94-L127) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Account Id"
    },
    "container_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Container Id"
    },
    "workspace_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Workspace Id"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "title": "get_workspace_statusArguments",
  "type": "object"
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

<a id="tool-list_tags-86fc0f9c"></a>

## list_tags

Handler: Lists paginated workspace tags and returns selected skeleton fields.

```text
Lists tags in a workspace, skeleton fields only.

Returns tagId, name, type, firingTriggerId, blockingTriggerId,
paused and fingerprint per tag. Use get_tag for the full
configuration of a specific tag.

Args:
    account_id: Numeric account ID or full resource path.
    container_id: Numeric container ID or full resource path.
    workspace_id: Numeric workspace ID; find it via list_workspaces.

```

[Source](https://github.com/jinchliu/tagmanager-mcp/blob/35ec81596ed0f091176ec67370aee8be8a98c6dd/tagmanager_mcp/tools/tags.py#L16-L57) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Account Id"
    },
    "container_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Container Id"
    },
    "workspace_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Workspace Id"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "title": "list_tagsArguments",
  "type": "object"
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

<a id="tool-get_tag-749bab4b"></a>

## get_tag

Handler: Gets the full workspace tag configuration from Tag Manager v2.

```text
Gets the full configuration of one tag, including parameters.

Args:
    account_id: Numeric account ID or full resource path.
    container_id: Numeric container ID or full resource path.
    workspace_id: Numeric workspace ID; find it via list_workspaces.
    tag_id: Numeric tag ID; find it via list_tags.

```

[Source](https://github.com/jinchliu/tagmanager-mcp/blob/35ec81596ed0f091176ec67370aee8be8a98c6dd/tagmanager_mcp/tools/tags.py#L60-L92) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Account Id"
    },
    "container_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Container Id"
    },
    "workspace_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Workspace Id"
    },
    "tag_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Tag Id"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "tag_id"
  ],
  "title": "get_tagArguments",
  "type": "object"
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

<a id="tool-create_tag-e71dcc44"></a>

## create_tag

Handler: Creates a workspace tag using the unrestricted caller-supplied resource body.

```text
Creates a tag in the workspace draft.

Changes stay in the workspace until a version is published; nothing
goes live. Returns the created tag including its tagId.

Args:
    account_id: Numeric account ID or full resource path.
    container_id: Numeric container ID or full resource path.
    workspace_id: Numeric workspace ID; find it via list_workspaces.
    tag: Tag resource body. Requires 'name' and 'type'; most types
        also need 'parameter' (list of {'type', 'key', 'value'}
        dicts) and 'firingTriggerId' (list of trigger ID strings).
        Minimal example: {'name': 'Hello', 'type': 'html',
        'parameter': [{'type': 'template', 'key': 'html', 'value':
        '<script>...</script>'}], 'firingTriggerId': ['2147479553']}
        (2147479553 is the built-in All Pages trigger; built-in
        triggers do not appear in list_triggers).

```

[Source](https://github.com/jinchliu/tagmanager-mcp/blob/35ec81596ed0f091176ec67370aee8be8a98c6dd/tagmanager_mcp/tools/tags.py#L95-L142) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Account Id"
    },
    "container_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Container Id"
    },
    "workspace_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Workspace Id"
    },
    "tag": {
      "additionalProperties": true,
      "title": "Tag",
      "type": "object"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "tag"
  ],
  "title": "create_tagArguments",
  "type": "object"
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

<a id="tool-update_tag-ff9e7962"></a>

## update_tag

Handler: Reads the current tag, shallow-merges caller changes with null-key removal, and updates with its current fingerprint when present.

```text
Updates a tag by merging changes into its current configuration.

The merge is shallow: each top-level key in changes replaces the
current value, a null value removes the key, and lists are replaced
whole (e.g. firingTriggerId must be the complete new list). The
current config is re-read in the same call and its fingerprint sent
along, so concurrent edits fail cleanly instead of being clobbered.
Changes stay in the workspace draft until a version is published.
Returns the updated tag.

Args:
    account_id: Numeric account ID or full resource path.
    container_id: Numeric container ID or full resource path.
    workspace_id: Numeric workspace ID; find it via list_workspaces.
    tag_id: Numeric tag ID; find it via list_tags.
    changes: Partial tag body, e.g. {'paused': True} or
        {'firingTriggerId': ['5', '7']}.

```

[Source](https://github.com/jinchliu/tagmanager-mcp/blob/35ec81596ed0f091176ec67370aee8be8a98c6dd/tagmanager_mcp/tools/tags.py#L145-L200) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Account Id"
    },
    "container_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Container Id"
    },
    "workspace_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Workspace Id"
    },
    "tag_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Tag Id"
    },
    "changes": {
      "additionalProperties": true,
      "title": "Changes",
      "type": "object"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "tag_id",
    "changes"
  ],
  "title": "update_tagArguments",
  "type": "object"
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

<a id="tool-delete_tag-1345d160"></a>

## delete_tag

Handler: Requires confirm=true, deletes the workspace tag and returns its deleted resource path.

```text
Deletes a tag from the workspace draft.

Requires explicit confirmation: ask the user first, then call again
with confirm=True. The removal stays in the workspace until a
version is published.

Args:
    account_id: Numeric account ID or full resource path.
    container_id: Numeric container ID or full resource path.
    workspace_id: Numeric workspace ID; find it via list_workspaces.
    tag_id: Numeric tag ID; find it via list_tags.
    confirm: Must be True to actually delete.

```

[Source](https://github.com/jinchliu/tagmanager-mcp/blob/35ec81596ed0f091176ec67370aee8be8a98c6dd/tagmanager_mcp/tools/tags.py#L203-L248) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Account Id"
    },
    "container_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Container Id"
    },
    "workspace_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Workspace Id"
    },
    "tag_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Tag Id"
    },
    "confirm": {
      "default": false,
      "title": "Confirm",
      "type": "boolean"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "tag_id"
  ],
  "title": "delete_tagArguments",
  "type": "object"
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

<a id="tool-list_triggers-4ca44d74"></a>

## list_triggers

Handler: Lists paginated workspace triggers and returns selected skeleton fields.

```text
Lists triggers in a workspace, skeleton fields only.

Returns triggerId, name, type and fingerprint per trigger. Use
get_trigger for the full configuration of a specific trigger.

Args:
    account_id: Numeric account ID or full resource path.
    container_id: Numeric container ID or full resource path.
    workspace_id: Numeric workspace ID; find it via list_workspaces.

```

[Source](https://github.com/jinchliu/tagmanager-mcp/blob/35ec81596ed0f091176ec67370aee8be8a98c6dd/tagmanager_mcp/tools/triggers.py#L16-L56) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Account Id"
    },
    "container_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Container Id"
    },
    "workspace_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Workspace Id"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "title": "list_triggersArguments",
  "type": "object"
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

<a id="tool-get_trigger-e2f13ee6"></a>

## get_trigger

Handler: Gets the full workspace trigger configuration from Tag Manager v2.

```text
Gets the full configuration of one trigger, including filters.

Args:
    account_id: Numeric account ID or full resource path.
    container_id: Numeric container ID or full resource path.
    workspace_id: Numeric workspace ID; find it via list_workspaces.
    trigger_id: Numeric trigger ID; find it via list_triggers.

```

[Source](https://github.com/jinchliu/tagmanager-mcp/blob/35ec81596ed0f091176ec67370aee8be8a98c6dd/tagmanager_mcp/tools/triggers.py#L59-L91) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Account Id"
    },
    "container_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Container Id"
    },
    "workspace_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Workspace Id"
    },
    "trigger_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Trigger Id"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "trigger_id"
  ],
  "title": "get_triggerArguments",
  "type": "object"
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

<a id="tool-create_trigger-71660c93"></a>

## create_trigger

Handler: Creates a workspace trigger using the unrestricted caller-supplied resource body.

```text
Creates a trigger in the workspace draft.

Changes stay in the workspace until a version is published; nothing
goes live. Returns the created trigger including its triggerId.

Args:
    account_id: Numeric account ID or full resource path.
    container_id: Numeric container ID or full resource path.
    workspace_id: Numeric workspace ID; find it via list_workspaces.
    trigger: Trigger resource body. Requires 'name' and 'type'
        (e.g. 'pageview', 'domReady', 'click', 'customEvent').
        Minimal example: {'name': 'DOM Ready', 'type': 'domReady'}.
        A customEvent trigger also needs 'customEventFilter', e.g.
        [{'type': 'equals', 'parameter': [{'type': 'template',
        'key': 'arg0', 'value': '{{_event}}'}, {'type': 'template',
        'key': 'arg1', 'value': 'my_event'}]}].

```

[Source](https://github.com/jinchliu/tagmanager-mcp/blob/35ec81596ed0f091176ec67370aee8be8a98c6dd/tagmanager_mcp/tools/triggers.py#L94-L140) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Account Id"
    },
    "container_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Container Id"
    },
    "workspace_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Workspace Id"
    },
    "trigger": {
      "additionalProperties": true,
      "title": "Trigger",
      "type": "object"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "trigger"
  ],
  "title": "create_triggerArguments",
  "type": "object"
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

<a id="tool-update_trigger-60ddeb77"></a>

## update_trigger

Handler: Reads the current trigger, shallow-merges caller changes with null-key removal, and updates with its current fingerprint when present.

```text
Updates a trigger by merging changes into its current config.

The merge is shallow: each top-level key in changes replaces the
current value, a null value removes the key, and lists are replaced
whole (e.g. a filter list must be passed complete). The current
config is re-read in the same call and its fingerprint sent along,
so concurrent edits fail cleanly instead of being clobbered.
Changes stay in the workspace draft until a version is published.
Returns the updated trigger.

Args:
    account_id: Numeric account ID or full resource path.
    container_id: Numeric container ID or full resource path.
    workspace_id: Numeric workspace ID; find it via list_workspaces.
    trigger_id: Numeric trigger ID; find it via list_triggers.
    changes: Partial trigger body, e.g. {'name': 'New name'}.

```

[Source](https://github.com/jinchliu/tagmanager-mcp/blob/35ec81596ed0f091176ec67370aee8be8a98c6dd/tagmanager_mcp/tools/triggers.py#L143-L197) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Account Id"
    },
    "container_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Container Id"
    },
    "workspace_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Workspace Id"
    },
    "trigger_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Trigger Id"
    },
    "changes": {
      "additionalProperties": true,
      "title": "Changes",
      "type": "object"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "trigger_id",
    "changes"
  ],
  "title": "update_triggerArguments",
  "type": "object"
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

<a id="tool-delete_trigger-ec67de91"></a>

## delete_trigger

Handler: Requires confirm=true, deletes the workspace trigger and returns its deleted resource path.

```text
Deletes a trigger from the workspace draft.

Requires explicit confirmation: ask the user first, then call again
with confirm=True. Check first (via list_tags) that no tag still
references the trigger. The removal stays in the workspace until a
version is published.

Args:
    account_id: Numeric account ID or full resource path.
    container_id: Numeric container ID or full resource path.
    workspace_id: Numeric workspace ID; find it via list_workspaces.
    trigger_id: Numeric trigger ID; find it via list_triggers.
    confirm: Must be True to actually delete.

```

[Source](https://github.com/jinchliu/tagmanager-mcp/blob/35ec81596ed0f091176ec67370aee8be8a98c6dd/tagmanager_mcp/tools/triggers.py#L200-L255) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Account Id"
    },
    "container_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Container Id"
    },
    "workspace_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Workspace Id"
    },
    "trigger_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Trigger Id"
    },
    "confirm": {
      "default": false,
      "title": "Confirm",
      "type": "boolean"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "trigger_id"
  ],
  "title": "delete_triggerArguments",
  "type": "object"
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

<a id="tool-list_variables-1adaa2a1"></a>

## list_variables

Handler: Lists paginated workspace variables and returns selected skeleton fields.

```text
Lists variables in a workspace, skeleton fields only.

Returns variableId, name, type and fingerprint per variable. Use
get_variable for the full configuration of a specific variable.

Args:
    account_id: Numeric account ID or full resource path.
    container_id: Numeric container ID or full resource path.
    workspace_id: Numeric workspace ID; find it via list_workspaces.

```

[Source](https://github.com/jinchliu/tagmanager-mcp/blob/35ec81596ed0f091176ec67370aee8be8a98c6dd/tagmanager_mcp/tools/variables.py#L16-L58) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Account Id"
    },
    "container_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Container Id"
    },
    "workspace_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Workspace Id"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "title": "list_variablesArguments",
  "type": "object"
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

<a id="tool-get_variable-ba0cd778"></a>

## get_variable

Handler: Gets the full workspace variable configuration from Tag Manager v2.

```text
Gets the full configuration of one variable.

Args:
    account_id: Numeric account ID or full resource path.
    container_id: Numeric container ID or full resource path.
    workspace_id: Numeric workspace ID; find it via list_workspaces.
    variable_id: Numeric variable ID; find it via list_variables.

```

[Source](https://github.com/jinchliu/tagmanager-mcp/blob/35ec81596ed0f091176ec67370aee8be8a98c6dd/tagmanager_mcp/tools/variables.py#L61-L97) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Account Id"
    },
    "container_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Container Id"
    },
    "workspace_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Workspace Id"
    },
    "variable_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Variable Id"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "variable_id"
  ],
  "title": "get_variableArguments",
  "type": "object"
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

<a id="tool-create_variable-2f5e4ddb"></a>

## create_variable

Handler: Creates a workspace variable using the unrestricted caller-supplied resource body.

```text
Creates a variable in the workspace draft.

Changes stay in the workspace until a version is published; nothing
goes live. Returns the created variable including its variableId.

Args:
    account_id: Numeric account ID or full resource path.
    container_id: Numeric container ID or full resource path.
    workspace_id: Numeric workspace ID; find it via list_workspaces.
    variable: Variable resource body. Requires 'name' and 'type';
        most types also need 'parameter' (list of {'type', 'key',
        'value'} dicts). Data layer variable example: {'name':
        'DL - user_id', 'type': 'v', 'parameter': [{'type':
        'integer', 'key': 'dataLayerVersion', 'value': '2'},
        {'type': 'template', 'key': 'name', 'value': 'user_id'}]}.

```

[Source](https://github.com/jinchliu/tagmanager-mcp/blob/35ec81596ed0f091176ec67370aee8be8a98c6dd/tagmanager_mcp/tools/variables.py#L100-L149) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Account Id"
    },
    "container_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Container Id"
    },
    "workspace_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Workspace Id"
    },
    "variable": {
      "additionalProperties": true,
      "title": "Variable",
      "type": "object"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "variable"
  ],
  "title": "create_variableArguments",
  "type": "object"
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

<a id="tool-update_variable-63c48ad7"></a>

## update_variable

Handler: Reads the current variable, shallow-merges caller changes with null-key removal, and updates with its current fingerprint when present.

```text
Updates a variable by merging changes into its current config.

The merge is shallow: each top-level key in changes replaces the
current value, a null value removes the key, and lists are replaced
whole (e.g. the parameter list must be passed complete). The
current config is re-read in the same call and its fingerprint sent
along, so concurrent edits fail cleanly instead of being clobbered.
Changes stay in the workspace draft until a version is published.
Returns the updated variable.

Args:
    account_id: Numeric account ID or full resource path.
    container_id: Numeric container ID or full resource path.
    workspace_id: Numeric workspace ID; find it via list_workspaces.
    variable_id: Numeric variable ID; find it via list_variables.
    changes: Partial variable body, e.g. {'name': 'New name'}.

```

[Source](https://github.com/jinchliu/tagmanager-mcp/blob/35ec81596ed0f091176ec67370aee8be8a98c6dd/tagmanager_mcp/tools/variables.py#L152-L206) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Account Id"
    },
    "container_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Container Id"
    },
    "workspace_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Workspace Id"
    },
    "variable_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Variable Id"
    },
    "changes": {
      "additionalProperties": true,
      "title": "Changes",
      "type": "object"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "variable_id",
    "changes"
  ],
  "title": "update_variableArguments",
  "type": "object"
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

<a id="tool-delete_variable-3ead6fdb"></a>

## delete_variable

Handler: Requires confirm=true, deletes the workspace variable and returns its deleted resource path.

```text
Deletes a variable from the workspace draft.

Requires explicit confirmation: ask the user first, then call again
with confirm=True. Check first that no tag, trigger or variable
still references it as {{Variable Name}}. The removal stays in the
workspace until a version is published.

Args:
    account_id: Numeric account ID or full resource path.
    container_id: Numeric container ID or full resource path.
    workspace_id: Numeric workspace ID; find it via list_workspaces.
    variable_id: Numeric variable ID; find it via list_variables.
    confirm: Must be True to actually delete.

```

[Source](https://github.com/jinchliu/tagmanager-mcp/blob/35ec81596ed0f091176ec67370aee8be8a98c6dd/tagmanager_mcp/tools/variables.py#L209-L264) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Account Id"
    },
    "container_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Container Id"
    },
    "workspace_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Workspace Id"
    },
    "variable_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Variable Id"
    },
    "confirm": {
      "default": false,
      "title": "Confirm",
      "type": "boolean"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "variable_id"
  ],
  "title": "delete_variableArguments",
  "type": "object"
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

<a id="tool-list_versions-3eb8d6c0"></a>

## list_versions

Handler: Lists paginated container version headers and reduces them to selected metadata and counts.

```text
Lists container version headers, skeleton fields only.

Returns containerVersionId, name, deleted and entity counts per
version. Use get_version for the full contents of one version, or
get_live_version for the one currently published.

Args:
    account_id: Numeric account ID or full resource path.
    container_id: Numeric container ID or full resource path.

```

[Source](https://github.com/jinchliu/tagmanager-mcp/blob/35ec81596ed0f091176ec67370aee8be8a98c6dd/tagmanager_mcp/tools/versions.py#L21-L56) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Account Id"
    },
    "container_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Container Id"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ],
  "title": "list_versionsArguments",
  "type": "object"
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

<a id="tool-get_version-e67e6685"></a>

## get_version

Handler: Gets a container version and returns metadata with slimmed embedded tags, triggers and variables.

```text
Gets one container version: metadata plus slimmed contents.

The embedded tags, triggers and variables are reduced to their
skeleton (name + id); a full version can otherwise run to thousands
of lines. Use get_tag/get_trigger/get_variable for full entity
configs, but note those read the workspace draft, not this version.

Args:
    account_id: Numeric account ID or full resource path.
    container_id: Numeric container ID or full resource path.
    version_id: Numeric version ID; find it via list_versions.

```

[Source](https://github.com/jinchliu/tagmanager-mcp/blob/35ec81596ed0f091176ec67370aee8be8a98c6dd/tagmanager_mcp/tools/versions.py#L59-L92) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Account Id"
    },
    "container_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Container Id"
    },
    "version_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Version Id"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "version_id"
  ],
  "title": "get_versionArguments",
  "type": "object"
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

<a id="tool-get_live_version-ffef26dc"></a>

## get_live_version

Handler: Gets the live container version and returns metadata with slimmed embedded entities.

```text
Gets the container version currently published (live).

Returns metadata plus slimmed contents, like get_version. Useful to
see what is live before publishing a new version.

Args:
    account_id: Numeric account ID or full resource path.
    container_id: Numeric container ID or full resource path.

```

[Source](https://github.com/jinchliu/tagmanager-mcp/blob/35ec81596ed0f091176ec67370aee8be8a98c6dd/tagmanager_mcp/tools/versions.py#L95-L123) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Account Id"
    },
    "container_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Container Id"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ],
  "title": "get_live_versionArguments",
  "type": "object"
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

<a id="tool-create_version-fc39e936"></a>

## create_version

Handler: Snapshots a workspace with optional name and notes through create\_version and returns version, compiler, sync and new workspace information.

```text
Snapshots a workspace into a new container version.

WARNING: this consumes the workspace. The workspace is deleted and a
fresh empty one is created; its path is returned as newWorkspacePath.
Use that path for any further edits — the workspace_id passed here is
gone afterwards. Nothing goes live yet; publish_version does that.

Check the result before publishing: if compilerError is true or
syncStatus reports a conflict, the version has problems. Fix them in
the new workspace and create another version rather than publishing.

Args:
    account_id: Numeric account ID or full resource path.
    container_id: Numeric container ID or full resource path.
    workspace_id: Numeric workspace ID; find it via list_workspaces.
    name: Optional name for the version.
    notes: Optional notes describing the version.

```

[Source](https://github.com/jinchliu/tagmanager-mcp/blob/35ec81596ed0f091176ec67370aee8be8a98c6dd/tagmanager_mcp/tools/versions.py#L126-L192) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Account Id"
    },
    "container_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Container Id"
    },
    "workspace_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Workspace Id"
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
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "title": "create_versionArguments",
  "type": "object"
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

<a id="tool-publish_version-0628e4c5"></a>

## publish_version

Handler: Requires confirm=true, publishes the selected version through the v2 publish endpoint and returns version and compiler information.

```text
Publishes a container version, making it live on the site.

This is the only operation that changes what runs on the live site.
Requires explicit confirmation: ask the user first, then call again
with confirm=True. Publish a version you have already checked for
compiler errors (see create_version).

Args:
    account_id: Numeric account ID or full resource path.
    container_id: Numeric container ID or full resource path.
    version_id: Numeric version ID; find it via list_versions.
    confirm: Must be True to actually publish.

```

[Source](https://github.com/jinchliu/tagmanager-mcp/blob/35ec81596ed0f091176ec67370aee8be8a98c6dd/tagmanager_mcp/tools/versions.py#L195-L242) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Account Id"
    },
    "container_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Container Id"
    },
    "version_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        }
      ],
      "title": "Version Id"
    },
    "confirm": {
      "default": false,
      "title": "Confirm",
      "type": "boolean"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "version_id"
  ],
  "title": "publish_versionArguments",
  "type": "object"
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
