# techdeveloper-org/mcp-gtm

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/techdeveloper-org/mcp-gtm) · [Machine-readable inventory](../data/mcps/techdeveloper-org--mcp-gtm.json)

**19 extracted tools.** Create workspaces and tracking resources, merge selected tag edits, and publish explicitly created versions.

Snapshot: 2026-10-13 · [bda1b1a41258](https://github.com/techdeveloper-org/mcp-gtm/tree/bda1b1a41258c61065fab6dadf007942c6c47dc7) · Method: tools/list.

Exposure: All 19 tools registered unconditionally; optional rate limiting through ENABLE_RATE_LIMITING affects invocation, not exposure.

## Limits

- Offline in-process MCP list_tools enumeration used installed mcp 1.30.0 via the source fallback FastMCP import; requirements permit other SDK versions whose schema formatting may differ. No GTM API operations or authentication were executed.
- List handlers do not follow nextPageToken, so returned resource lists can be incomplete.
- Claims that draft writes only affect server-created workspaces are advisory: handlers accept arbitrary resource paths and do not enforce workspace ownership or exclude Default Workspace.
- create_tag documentation claims this MVP cannot update existing tags, but update_tag is registered and implemented. create_trigger forwards customEventFilter regardless of type despite describing it as ignored for other types.
- Parameter and condition arrays are intentionally unrestricted list items or JSON strings; no GTM Parameter/Condition object schema validation is exposed.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`list_accounts`](#tool-list_accounts-1090ba6a) | GTM | Lists the first API response page of GTM accounts and returns selected resource fields. |
| [`list_containers`](#tool-list_containers-a53dbc4d) | GTM | Lists the first API response page of GTM containers and returns selected resource fields. |
| [`list_workspaces`](#tool-list_workspaces-af844119) | GTM | Lists the first API response page of GTM workspaces and returns selected resource fields. |
| [`create_workspace`](#tool-create_workspace-a1af8425) | GTM | Creates a GTM workspace with the supplied name and optional description. |
| [`list_tags`](#tool-list_tags-86fc0f9c) | GTM | Lists the first API response page of GTM tags and returns selected resource fields. |
| [`create_tag`](#tool-create_tag-e71dcc44) | GTM | Creates a GTM tag in the caller-specified workspace using parsed JSON arrays for configuration. |
| [`get_tag`](#tool-get_tag-749bab4b) | GTM | Fetches and returns the full GTM tag resource JSON. |
| [`update_tag`](#tool-update_tag-ff9e7962) | GTM | Fetches the current GTM tag, merges supplied fields, and replaces it using the workspace resource update API. |
| [`list_triggers`](#tool-list_triggers-4ca44d74) | GTM | Lists the first API response page of GTM triggers and returns selected resource fields. |
| [`get_trigger`](#tool-get_trigger-e2f13ee6) | GTM | Fetches and returns the full GTM trigger resource JSON. |
| [`create_trigger`](#tool-create_trigger-71660c93) | GTM | Creates a GTM trigger in the caller-specified workspace using parsed JSON arrays for configuration. |
| [`update_trigger`](#tool-update_trigger-60ddeb77) | GTM | Fetches the current GTM trigger, merges supplied fields, and replaces it using the workspace resource update API. |
| [`list_variables`](#tool-list_variables-1adaa2a1) | GTM | Lists the first API response page of GTM variables and returns selected resource fields. |
| [`create_variable`](#tool-create_variable-2f5e4ddb) | GTM | Creates a GTM variable in the caller-specified workspace using parsed JSON arrays for configuration. |
| [`get_variable`](#tool-get_variable-ba0cd778) | GTM | Fetches and returns the full GTM variable resource JSON. |
| [`update_variable`](#tool-update_variable-63c48ad7) | GTM | Fetches the current GTM variable, merges supplied fields, and replaces it using the workspace resource update API. |
| [`create_version`](#tool-create_version-fc39e936) | GTM | Calls the workspace create\_version API and returns the resulting container version identifiers. |
| [`list_versions`](#tool-list_versions-3eb8d6c0) | GTM | Lists the first API response page of GTM versions and returns selected resource fields. |
| [`publish_version`](#tool-publish_version-0628e4c5) | GTM | Publishes the specified container version immediately through the GTM versions publish API. |

<a id="tool-list_accounts-1090ba6a"></a>

## list_accounts

Handler: Lists the first API response page of GTM accounts and returns selected resource fields.

```text
List GTM accounts the configured service account can see.

Call this first -- every other tool takes a ``path`` argument copied
from a prior list/create call's output (e.g. an account's path feeds
list_containers, a container's path feeds list_workspaces), matching
GTM API v2's own resource-path convention rather than inventing a
separate ID scheme.

Returns:
    JSON string with ``accounts``: list of {accountId, name, path}.

```

[Source](https://github.com/techdeveloper-org/mcp-gtm/blob/bda1b1a41258c61065fab6dadf007942c6c47dc7/server.py#L342-L366) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "list_accountsArguments",
  "type": "object"
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

<a id="tool-list_containers-a53dbc4d"></a>

## list_containers

Handler: Lists the first API response page of GTM containers and returns selected resource fields.

```text
List GTM containers under an account.

Args:
    account_path: An account's ``path`` from list_accounts, e.g.
        'accounts/123456789'.

Returns:
    JSON string with ``containers``: list of
    {containerId, name, publicId, path}.

Raises:
    ValueError: If account_path is missing.

```

[Source](https://github.com/techdeveloper-org/mcp-gtm/blob/bda1b1a41258c61065fab6dadf007942c6c47dc7/server.py#L369-L402) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_path": {
      "title": "Account Path",
      "type": "string"
    }
  },
  "required": [
    "account_path"
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
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-list_workspaces-af844119"></a>

## list_workspaces

Handler: Lists the first API response page of GTM workspaces and returns selected resource fields.

```text
List GTM workspaces under a container.

A container the user manages manually in the GTM UI typically has a
'Default Workspace' plus any workspaces created by other collaborators
-- this server's own write tools never touch those, only workspaces
created via create_workspace below.

Args:
    container_path: A container's ``path`` from list_containers, e.g.
        'accounts/123456789/containers/456'.

Returns:
    JSON string with ``workspaces``: list of {workspaceId, name, path}.

Raises:
    ValueError: If container_path is missing.

```

[Source](https://github.com/techdeveloper-org/mcp-gtm/blob/bda1b1a41258c61065fab6dadf007942c6c47dc7/server.py#L405-L438) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "container_path": {
      "title": "Container Path",
      "type": "string"
    }
  },
  "required": [
    "container_path"
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
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-create_workspace-a1af8425"></a>

## create_workspace

Handler: Creates a GTM workspace with the supplied name and optional description.

```text
Create a new, isolated GTM workspace for this server's own changes.

Every other write tool (create_tag, create_trigger, create_variable,
create_version) takes a workspace_path -- always pass one created here,
never the container's 'Default Workspace', so this server's edits never
collide with a human's in-progress manual changes in the GTM UI.

Args:
    container_path: A container's ``path`` from list_containers.
    name: Workspace name, shown in the GTM UI.
    description: Optional workspace description.

Returns:
    JSON string with workspaceId, name, and path of the created workspace.

Raises:
    ValueError: If container_path or name are missing.

```

[Source](https://github.com/techdeveloper-org/mcp-gtm/blob/bda1b1a41258c61065fab6dadf007942c6c47dc7/server.py#L441-L477) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "container_path": {
      "title": "Container Path",
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
    "container_path",
    "name"
  ],
  "title": "create_workspaceArguments",
  "type": "object"
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

<a id="tool-list_tags-86fc0f9c"></a>

## list_tags

Handler: Lists the first API response page of GTM tags and returns selected resource fields.

```text
List tags in a GTM workspace.

Args:
    workspace_path: A workspace's ``path`` from list_workspaces or
        create_workspace.

Returns:
    JSON string with ``tags``: list of {tagId, name, type, path}.

Raises:
    ValueError: If workspace_path is missing.

```

[Source](https://github.com/techdeveloper-org/mcp-gtm/blob/bda1b1a41258c61065fab6dadf007942c6c47dc7/server.py#L480-L508) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "workspace_path": {
      "title": "Workspace Path",
      "type": "string"
    }
  },
  "required": [
    "workspace_path"
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
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-create_tag-e71dcc44"></a>

## create_tag

Handler: Creates a GTM tag in the caller-specified workspace using parsed JSON arrays for configuration.

```text
Create a tag in a GTM workspace (draft -- has no effect until published).

Args:
    workspace_path: A workspace's ``path``, always one this server
        created via create_workspace, never a container's shared
        Default Workspace.
    name: Tag name, shown in the GTM UI.
    tag_type: GTM built-in tag type id (e.g. 'gaawe' for a GA4 event
        tag, 'html' for Custom HTML) or a custom template's short name.
    parameter: JSON array of GTM Parameter objects configuring the tag
        (e.g. '[{"type":"template","key":"eventName","value":"generate_lead"}]'),
        or None for a tag with no parameters yet.
    firing_trigger_id: Comma-separated trigger IDs (from list_triggers)
        that should fire this tag, or None to leave unset (the tag will
        not fire until a trigger is attached, in the GTM UI or via a
        follow-up call to this same tool with update semantics -- this
        MVP only creates, it does not update an existing tag).

Returns:
    JSON string with tagId, name, type, and path of the created tag.

Raises:
    ValueError: If workspace_path, name, tag_type, or parameter (when
        provided but not valid JSON) are invalid.

```

[Source](https://github.com/techdeveloper-org/mcp-gtm/blob/bda1b1a41258c61065fab6dadf007942c6c47dc7/server.py#L511-L569) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "workspace_path": {
      "title": "Workspace Path",
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
      "anyOf": [
        {
          "type": "string"
        },
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
    "firing_trigger_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Firing Trigger Id"
    }
  },
  "required": [
    "workspace_path",
    "name",
    "tag_type"
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
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-get_tag-749bab4b"></a>

## get_tag

Handler: Fetches and returns the full GTM tag resource JSON.

```text
Fetch the full raw JSON of a single tag, firingTriggerId included.

``list_tags`` only returns {tagId, name, type, path} -- this tool
exists for inspecting/debugging a tag's actual firingTriggerId and
parameter contents (e.g. confirming a create_tag call actually
attached the intended trigger).

Args:
    tag_path: A tag's ``path``, from create_tag or list_tags.

Returns:
    The full raw tag resource as returned by the GTM API,
    JSON-formatted.

Raises:
    ValueError: If tag_path is missing.

```

[Source](https://github.com/techdeveloper-org/mcp-gtm/blob/bda1b1a41258c61065fab6dadf007942c6c47dc7/server.py#L572-L599) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "tag_path": {
      "title": "Tag Path",
      "type": "string"
    }
  },
  "required": [
    "tag_path"
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
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-update_tag-ff9e7962"></a>

## update_tag

Handler: Fetches the current GTM tag, merges supplied fields, and replaces it using the workspace resource update API.

```text
Update an existing tag in a GTM workspace (draft -- has no effect until published).

GTM's API is a full-replace PUT on the tag resource, not a partial
PATCH -- this tool fetches the current tag first and merges only the
fields the caller actually passed on top of it, so e.g. attaching a
missing firingTriggerId does not accidentally wipe the tag's
existing parameter list.

Args:
    tag_path: A tag's ``path``, from create_tag or list_tags (e.g.
        'accounts/1/containers/9/workspaces/5/tags/12').
    name: New tag name, or None to leave unchanged.
    parameter: JSON array of GTM Parameter objects to replace the
        tag's current ``parameter``, or None to leave unchanged.
    firing_trigger_id: Comma-separated trigger IDs to replace the
        tag's current ``firingTriggerId``, or None to leave
        unchanged. Pass an empty string to clear it.

Returns:
    JSON string with tagId, name, type, and path of the updated tag.

Raises:
    ValueError: If tag_path is missing, or parameter (when provided
        but not valid JSON) is invalid.

```

[Source](https://github.com/techdeveloper-org/mcp-gtm/blob/bda1b1a41258c61065fab6dadf007942c6c47dc7/server.py#L602-L664) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "tag_path": {
      "title": "Tag Path",
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
          "type": "string"
        },
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
    "firing_trigger_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Firing Trigger Id"
    }
  },
  "required": [
    "tag_path"
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
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-list_triggers-4ca44d74"></a>

## list_triggers

Handler: Lists the first API response page of GTM triggers and returns selected resource fields.

```text
List triggers in a GTM workspace.

Args:
    workspace_path: A workspace's ``path`` from list_workspaces or
        create_workspace.

Returns:
    JSON string with ``triggers``: list of {triggerId, name, type, path}.

Raises:
    ValueError: If workspace_path is missing.

```

[Source](https://github.com/techdeveloper-org/mcp-gtm/blob/bda1b1a41258c61065fab6dadf007942c6c47dc7/server.py#L667-L695) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "workspace_path": {
      "title": "Workspace Path",
      "type": "string"
    }
  },
  "required": [
    "workspace_path"
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
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-get_trigger-e2f13ee6"></a>

## get_trigger

Handler: Fetches and returns the full GTM trigger resource JSON.

```text
Fetch the full raw JSON of a single trigger, filter included.

``list_triggers`` only returns {triggerId, name, type, path} -- this
tool exists for inspecting/debugging a trigger's actual filter and
customEventFilter contents (e.g. confirming a negate flag actually
persisted).

Args:
    trigger_path: A trigger's ``path``, from create_trigger or
        list_triggers.

Returns:
    The full raw trigger resource as returned by the GTM API,
    JSON-formatted.

Raises:
    ValueError: If trigger_path is missing.

```

[Source](https://github.com/techdeveloper-org/mcp-gtm/blob/bda1b1a41258c61065fab6dadf007942c6c47dc7/server.py#L698-L726) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "trigger_path": {
      "title": "Trigger Path",
      "type": "string"
    }
  },
  "required": [
    "trigger_path"
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
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-create_trigger-71660c93"></a>

## create_trigger

Handler: Creates a GTM trigger in the caller-specified workspace using parsed JSON arrays for configuration.

```text
Create a trigger in a GTM workspace (draft -- has no effect until published).

Args:
    workspace_path: A workspace's ``path``, always one this server
        created via create_workspace.
    name: Trigger name, shown in the GTM UI.
    trigger_type: GTM trigger type id (e.g. 'pageview', 'click',
        'customEvent', 'formSubmission').
    filter_: JSON array of GTM Condition objects restricting when the
        trigger fires (e.g. matching a specific page path), or None to
        fire on every instance of trigger_type. For 'customEvent'
        triggers, GTM's API requires the event-name match to live in
        ``custom_event_filter`` instead (a separate field, not this
        one) -- ``filter_`` on a customEvent trigger is only for
        *additional* AND-ed conditions beyond the event name.
    custom_event_filter: JSON array with exactly one GTM Condition
        object matching the event name, required by GTM's API for
        'customEvent'-type triggers specifically (e.g.
        '[{"type":"equals","parameter":[{"type":"template","key":"arg0","value":"{{_event}}"},{"type":"template","key":"arg1","value":"generate_lead"}]}]').
        Ignored for other trigger types.

Returns:
    JSON string with triggerId, name, type, and path of the created
    trigger.

Raises:
    ValueError: If workspace_path, name, trigger_type, filter_, or
        custom_event_filter (when provided but not valid JSON) are
        invalid.

```

[Source](https://github.com/techdeveloper-org/mcp-gtm/blob/bda1b1a41258c61065fab6dadf007942c6c47dc7/server.py#L729-L791) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "workspace_path": {
      "title": "Workspace Path",
      "type": "string"
    },
    "name": {
      "title": "Name",
      "type": "string"
    },
    "trigger_type": {
      "title": "Trigger Type",
      "type": "string"
    },
    "filter_": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "items": {},
          "type": "array"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Filter"
    },
    "custom_event_filter": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "items": {},
          "type": "array"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Custom Event Filter"
    }
  },
  "required": [
    "workspace_path",
    "name",
    "trigger_type"
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
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-update_trigger-60ddeb77"></a>

## update_trigger

Handler: Fetches the current GTM trigger, merges supplied fields, and replaces it using the workspace resource update API.

```text
Update an existing trigger in a GTM workspace (draft -- has no effect until published).

GTM's API is a full-replace PUT on the trigger resource, not a partial
PATCH -- this tool fetches the current trigger first and merges only the
fields the caller actually passed on top of it, so an update that only
intends to fix ``filter_`` (e.g. adding a missing ``negate`` flag) does
not accidentally wipe ``customEventFilter`` or other fields it didn't
touch.

Args:
    trigger_path: A trigger's ``path``, from create_trigger or
        list_triggers (e.g.
        'accounts/1/containers/9/workspaces/5/triggers/12').
    name: New trigger name, or None to leave unchanged.
    filter_: JSON array of GTM Condition objects to replace the
        trigger's current ``filter``, or None to leave unchanged. Pass
        an explicit empty list ``[]`` to clear it.
    custom_event_filter: JSON array to replace the trigger's current
        ``customEventFilter``, or None to leave unchanged. Pass an
        explicit empty list ``[]`` to clear it.

Returns:
    JSON string with triggerId, name, type, and path of the updated
    trigger.

Raises:
    ValueError: If trigger_path is missing, or filter_/custom_event_filter
        (when provided but not valid JSON) are invalid.

```

[Source](https://github.com/techdeveloper-org/mcp-gtm/blob/bda1b1a41258c61065fab6dadf007942c6c47dc7/server.py#L794-L858) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "trigger_path": {
      "title": "Trigger Path",
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
    "filter_": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "items": {},
          "type": "array"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Filter"
    },
    "custom_event_filter": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "items": {},
          "type": "array"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Custom Event Filter"
    }
  },
  "required": [
    "trigger_path"
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
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-list_variables-1adaa2a1"></a>

## list_variables

Handler: Lists the first API response page of GTM variables and returns selected resource fields.

```text
List user-defined variables in a GTM workspace.

Args:
    workspace_path: A workspace's ``path`` from list_workspaces or
        create_workspace.

Returns:
    JSON string with ``variables``: list of {variableId, name, type, path}.

Raises:
    ValueError: If workspace_path is missing.

```

[Source](https://github.com/techdeveloper-org/mcp-gtm/blob/bda1b1a41258c61065fab6dadf007942c6c47dc7/server.py#L861-L889) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "workspace_path": {
      "title": "Workspace Path",
      "type": "string"
    }
  },
  "required": [
    "workspace_path"
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
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-create_variable-2f5e4ddb"></a>

## create_variable

Handler: Creates a GTM variable in the caller-specified workspace using parsed JSON arrays for configuration.

```text
Create a user-defined variable in a GTM workspace (draft -- has no
effect until published).

Args:
    workspace_path: A workspace's ``path``, always one this server
        created via create_workspace.
    name: Variable name, shown in the GTM UI (referenced elsewhere as
        {{name}}).
    variable_type: GTM variable type id (e.g. 'c' for Constant, 'jsm'
        for Custom JavaScript, 'v' for a Data Layer Variable).
    parameter: JSON array of GTM Parameter objects configuring the
        variable, or None for a variable with no parameters yet.

Returns:
    JSON string with variableId, name, type, and path of the created
    variable.

Raises:
    ValueError: If workspace_path, name, variable_type, or parameter
        (when provided but not valid JSON) are invalid.

```

[Source](https://github.com/techdeveloper-org/mcp-gtm/blob/bda1b1a41258c61065fab6dadf007942c6c47dc7/server.py#L892-L941) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "workspace_path": {
      "title": "Workspace Path",
      "type": "string"
    },
    "name": {
      "title": "Name",
      "type": "string"
    },
    "variable_type": {
      "title": "Variable Type",
      "type": "string"
    },
    "parameter": {
      "anyOf": [
        {
          "type": "string"
        },
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
    }
  },
  "required": [
    "workspace_path",
    "name",
    "variable_type"
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
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-get_variable-ba0cd778"></a>

## get_variable

Handler: Fetches and returns the full GTM variable resource JSON.

```text
Fetch the full raw JSON of a single variable, parameter list included.

``list_variables`` only returns {variableId, name, type, path} -- this
tool exists for inspecting/debugging a variable's actual parameter
contents (e.g. confirming an update_variable call actually changed the
Data Layer Variable's key name).

Args:
    variable_path: A variable's ``path``, from create_variable or
        list_variables.

Returns:
    The full raw variable resource as returned by the GTM API,
    JSON-formatted.

Raises:
    ValueError: If variable_path is missing.

```

[Source](https://github.com/techdeveloper-org/mcp-gtm/blob/bda1b1a41258c61065fab6dadf007942c6c47dc7/server.py#L944-L972) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "variable_path": {
      "title": "Variable Path",
      "type": "string"
    }
  },
  "required": [
    "variable_path"
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
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-update_variable-63c48ad7"></a>

## update_variable

Handler: Fetches the current GTM variable, merges supplied fields, and replaces it using the workspace resource update API.

```text
Update an existing variable in a GTM workspace (draft -- has no effect until published).

GTM's API is a full-replace PUT on the variable resource, not a partial
PATCH -- this tool fetches the current variable first and merges only
the fields the caller actually passed on top of it, so e.g. renaming a
Data Layer Variable's key does not accidentally wipe other fields.

Args:
    variable_path: A variable's ``path``, from create_variable or
        list_variables (e.g.
        'accounts/1/containers/9/workspaces/5/variables/12').
    name: New variable name, or None to leave unchanged.
    variable_type: New GTM variable type id, or None to leave unchanged.
    parameter: JSON array of GTM Parameter objects to replace the
        variable's current ``parameter``, or None to leave unchanged.

Returns:
    JSON string with variableId, name, type, and path of the updated
    variable.

Raises:
    ValueError: If variable_path is missing, or parameter (when
        provided but not valid JSON) is invalid.

```

[Source](https://github.com/techdeveloper-org/mcp-gtm/blob/bda1b1a41258c61065fab6dadf007942c6c47dc7/server.py#L975-L1034) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "variable_path": {
      "title": "Variable Path",
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
    "parameter": {
      "anyOf": [
        {
          "type": "string"
        },
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
    }
  },
  "required": [
    "variable_path"
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
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-create_version-fc39e936"></a>

## create_version

Handler: Calls the workspace create\_version API and returns the resulting container version identifiers.

```text
Snapshot a workspace's current draft changes into a container version.

A version is still not live -- it is a fixed, publishable snapshot of
whatever tags/triggers/variables the workspace holds at this moment.
Use publish_version to actually make it live.

Args:
    workspace_path: A workspace's ``path``, always one this server
        created via create_workspace.
    name: Version name, shown in the GTM UI's version history.
    notes: Optional version notes describing what changed and why.

Returns:
    JSON string with containerVersionId, name, and path of the created
    version.

Raises:
    ValueError: If workspace_path or name are missing.

```

[Source](https://github.com/techdeveloper-org/mcp-gtm/blob/bda1b1a41258c61065fab6dadf007942c6c47dc7/server.py#L1037-L1076) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "workspace_path": {
      "title": "Workspace Path",
      "type": "string"
    },
    "name": {
      "title": "Name",
      "type": "string"
    },
    "notes": {
      "default": "",
      "title": "Notes",
      "type": "string"
    }
  },
  "required": [
    "workspace_path",
    "name"
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
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-list_versions-3eb8d6c0"></a>

## list_versions

Handler: Lists the first API response page of GTM versions and returns selected resource fields.

```text
List container versions (published and unpublished) for a container.

Use this to find a version's path before calling publish_version, or to
audit publish history.

Args:
    container_path: A container's ``path`` from list_containers.

Returns:
    JSON string with ``versions``: list of
    {containerVersionId, name, deleted, path}.

Raises:
    ValueError: If container_path is missing.

```

[Source](https://github.com/techdeveloper-org/mcp-gtm/blob/bda1b1a41258c61065fab6dadf007942c6c47dc7/server.py#L1079-L1115) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "container_path": {
      "title": "Container Path",
      "type": "string"
    }
  },
  "required": [
    "container_path"
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
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-publish_version-0628e4c5"></a>

## publish_version

Handler: Publishes the specified container version immediately through the GTM versions publish API.

```text
Publish a GTM container version, making it live on every site using
that container immediately.

Not rate-limited like the tools above: publishing is already gated by
requiring an explicit, non-auto-approved tool call (see the destructive
annotation), and a rate-limit wrapper here would only slow down an
already-deliberate action, not add safety.

Reverting: GTM keeps prior versions -- to undo, list_versions and
publish an earlier one. There is no separate "unpublish" or "rollback"
tool in this MVP; re-publishing an older version is the same operation
as publishing any other version.

Args:
    version_path: A container version's ``path`` from create_version or
        list_versions, e.g.
        'accounts/123/containers/456/versions/7'.

Returns:
    JSON string with containerVersionId, name, and path of the now-live
    version.

Raises:
    ValueError: If version_path is missing.

```

[Source](https://github.com/techdeveloper-org/mcp-gtm/blob/bda1b1a41258c61065fab6dadf007942c6c47dc7/server.py#L1118-L1157) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "version_path": {
      "title": "Version Path",
      "type": "string"
    }
  },
  "required": [
    "version_path"
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
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>
