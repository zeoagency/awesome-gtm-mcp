# K9Cloud/gtm-mcp

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/K9Cloud/gtm-mcp) · [Machine-readable inventory](../data/mcps/k9cloud--gtm-mcp.json)

**19 extracted tools.** Find containers by domain, preview tag edits, and create tracking resources in workspace drafts.

Snapshot: 2026-10-13 · [7e69a85b3e37](https://github.com/K9Cloud/gtm-mcp/tree/7e69a85b3e37f81f2eb2855cbb11356cb4686342) · Method: tools/list.

Exposure: All 19 @mcp.tool registrations are unconditional; no configured or read-only groups.

## Limits

- Offline FastMCP list_tools used installed MCP 1.30.0; upstream does not pin dependencies, so framework-generated schemas may vary by installed version. No handler, authentication, or remote GTM call was executed.
- Authentication depends on external hybrid-conversions OAuth token and helper paths not supplied by this repository.
- Backup JSON files are historical artifacts; no backup/export/restore MCP tools or handlers are registered.
- update_tag implements a shallow top-level patch despite its description claiming a deep merge; create_version_and_publish reports published=true even if publish response compilerError=true.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`list_accounts`](#tool-list_accounts-1090ba6a) | GTM | Lists cached accessible GTM accounts using accounts.list. |
| [`list_containers`](#tool-list_containers-a53dbc4d) | GTM | Lists containers for the given GTM account. |
| [`find_container`](#tool-find_container-0a640aa5) | GTM | Scans accessible accounts for a domain or public ID and returns container metadata plus a default workspace path. |
| [`list_tags`](#tool-list_tags-86fc0f9c) | GTM | Lists workspace tags with an optional case-insensitive type substring filter. |
| [`get_tag`](#tool-get_tag-749bab4b) | GTM | Fetches a tag and returns its full GTM configuration. |
| [`list_triggers`](#tool-list_triggers-4ca44d74) | GTM | Lists workspace triggers and selected metadata. |
| [`list_variables`](#tool-list_variables-1adaa2a1) | GTM | Lists user-defined workspace variables with an optional case-insensitive type substring filter. |
| [`pause_tag`](#tool-pause_tag-01b6db11) | GTM | Fetches a tag and updates its paused state when dry\_run is false; returns a preview otherwise. |
| [`delete_tag`](#tool-delete_tag-1345d160) | GTM | Fetches a tag then previews or executes its workspace deletion. |
| [`delete_variable`](#tool-delete_variable-3ead6fdb) | GTM | Fetches a variable then previews or executes its workspace deletion. |
| [`delete_trigger`](#tool-delete_trigger-ec67de91) | GTM | Fetches a trigger then previews or executes its workspace deletion. |
| [`create_version_and_publish`](#tool-create_version_and_publish-59ae69f7) | GTM | Previews or creates a workspace container version and publishes the returned version path; reports compilerError. |
| [`list_workspaces`](#tool-list_workspaces-af844119) | GTM | Lists container workspaces, resolving domain/public ID when needed. |
| [`create_workspace`](#tool-create_workspace-a1af8425) | GTM | Requires a nonempty name and container resolution, then previews or creates a workspace. |
| [`delete_workspace`](#tool-delete_workspace-50bbbf2e) | GTM | Refuses a workspace named Default Workspace, then previews or deletes other workspaces. |
| [`update_tag`](#tool-update_tag-ff9e7962) | GTM | Fetches a tag and shallowly overwrites top-level fields with patch before previewing or updating it; the description incorrectly says deep-merges. |
| [`create_tag`](#tool-create_tag-e71dcc44) | GTM | Requires body name/type keys, then previews or creates a workspace tag using the unrestricted supplied object. |
| [`create_trigger`](#tool-create_trigger-71660c93) | GTM | Requires body name/type keys, then previews or creates a workspace trigger using the unrestricted supplied object. |
| [`list_versions`](#tool-list_versions-3eb8d6c0) | GTM | Lists container version headers and selected history metadata. |

<a id="tool-list_accounts-1090ba6a"></a>

## list_accounts

Handler: Lists cached accessible GTM accounts using accounts.list.

```text
List all GTM accounts visible to the authenticated user.
```

[Source](https://github.com/K9Cloud/gtm-mcp/blob/7e69a85b3e37f81f2eb2855cbb11356cb4686342/mcp-server/server.py#L187-L200) · Schema: tools/list.

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

<a id="tool-list_containers-a53dbc4d"></a>

## list_containers

Handler: Lists containers for the given GTM account.

```text
List containers under a single GTM account.
```

[Source](https://github.com/K9Cloud/gtm-mcp/blob/7e69a85b3e37f81f2eb2855cbb11356cb4686342/mcp-server/server.py#L203-L222) · Schema: tools/list.

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
  "title": "list_containersArguments",
  "type": "object"
}
```

</details>

<a id="tool-find_container-0a640aa5"></a>

## find_container

Handler: Scans accessible accounts for a domain or public ID and returns container metadata plus a default workspace path.

```text

Resolve a site domain (e.g. 'phoenixk9trainers.com') OR a GTM public ID
(e.g. 'GTM-MM8HPN8L') to a container. Searches all accessible accounts.

Returns container metadata + the default workspace path, which is what
most downstream tools (list_tags, list_triggers, etc.) require.

```

[Source](https://github.com/K9Cloud/gtm-mcp/blob/7e69a85b3e37f81f2eb2855cbb11356cb4686342/mcp-server/server.py#L225-L253) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "domain_or_public_id": {
      "title": "Domain Or Public Id",
      "type": "string"
    }
  },
  "required": [
    "domain_or_public_id"
  ],
  "title": "find_containerArguments",
  "type": "object"
}
```

</details>

<a id="tool-list_tags-86fc0f9c"></a>

## list_tags

Handler: Lists workspace tags with an optional case-insensitive type substring filter.

```text

List all tags in a container's default workspace.

Pass either domain_or_public_id (e.g. 'phoenixk9trainers.com' or 'GTM-MM8HPN8L')
OR workspace_path directly (faster if you already have it from find_container).

type_filter: case-insensitive substring match on tag.type (e.g. 'awct', 'awcc',
'gaawe', 'html'). Empty = no filter.

```

[Source](https://github.com/K9Cloud/gtm-mcp/blob/7e69a85b3e37f81f2eb2855cbb11356cb4686342/mcp-server/server.py#L273-L315) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "domain_or_public_id": {
      "default": "",
      "title": "Domain Or Public Id",
      "type": "string"
    },
    "workspace_path": {
      "default": "",
      "title": "Workspace Path",
      "type": "string"
    },
    "type_filter": {
      "default": "",
      "title": "Type Filter",
      "type": "string"
    }
  },
  "title": "list_tagsArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_tag-749bab4b"></a>

## get_tag

Handler: Fetches a tag and returns its full GTM configuration.

```text

Fetch a single tag's full configuration by path
(e.g. 'accounts/.../containers/.../workspaces/.../tags/N').
Use this to see tag parameters before updating.

```

[Source](https://github.com/K9Cloud/gtm-mcp/blob/7e69a85b3e37f81f2eb2855cbb11356cb4686342/mcp-server/server.py#L318-L331) · Schema: tools/list.

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

<a id="tool-list_triggers-4ca44d74"></a>

## list_triggers

Handler: Lists workspace triggers and selected metadata.

```text
List all triggers in a container's default workspace.
```

[Source](https://github.com/K9Cloud/gtm-mcp/blob/7e69a85b3e37f81f2eb2855cbb11356cb4686342/mcp-server/server.py#L334-L361) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "domain_or_public_id": {
      "default": "",
      "title": "Domain Or Public Id",
      "type": "string"
    },
    "workspace_path": {
      "default": "",
      "title": "Workspace Path",
      "type": "string"
    }
  },
  "title": "list_triggersArguments",
  "type": "object"
}
```

</details>

<a id="tool-list_variables-1adaa2a1"></a>

## list_variables

Handler: Lists user-defined workspace variables with an optional case-insensitive type substring filter.

```text
List all user-defined variables in a container's default workspace.
```

[Source](https://github.com/K9Cloud/gtm-mcp/blob/7e69a85b3e37f81f2eb2855cbb11356cb4686342/mcp-server/server.py#L364-L395) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "domain_or_public_id": {
      "default": "",
      "title": "Domain Or Public Id",
      "type": "string"
    },
    "workspace_path": {
      "default": "",
      "title": "Workspace Path",
      "type": "string"
    },
    "type_filter": {
      "default": "",
      "title": "Type Filter",
      "type": "string"
    }
  },
  "title": "list_variablesArguments",
  "type": "object"
}
```

</details>

<a id="tool-pause_tag-01b6db11"></a>

## pause_tag

Handler: Fetches a tag and updates its paused state when dry\_run is false; returns a preview otherwise.

```text

Pause or unpause a tag. Default action pauses (paused=True). Set paused=False
to unpause an existing paused tag. Set dry_run=False to actually apply.

Note: this only changes the workspace state — call create_version_and_publish
afterward to push the change live to the container.

```

[Source](https://github.com/K9Cloud/gtm-mcp/blob/7e69a85b3e37f81f2eb2855cbb11356cb4686342/mcp-server/server.py#L400-L444) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "tag_path": {
      "title": "Tag Path",
      "type": "string"
    },
    "paused": {
      "default": true,
      "title": "Paused",
      "type": "boolean"
    },
    "dry_run": {
      "default": true,
      "title": "Dry Run",
      "type": "boolean"
    }
  },
  "required": [
    "tag_path"
  ],
  "title": "pause_tagArguments",
  "type": "object"
}
```

</details>

<a id="tool-delete_tag-1345d160"></a>

## delete_tag

Handler: Fetches a tag then previews or executes its workspace deletion.

```text

Delete a tag from the workspace. Default dry_run=True. Set dry_run=False to apply.
Call create_version_and_publish afterward to push the change live.

```

[Source](https://github.com/K9Cloud/gtm-mcp/blob/7e69a85b3e37f81f2eb2855cbb11356cb4686342/mcp-server/server.py#L447-L470) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "tag_path": {
      "title": "Tag Path",
      "type": "string"
    },
    "dry_run": {
      "default": true,
      "title": "Dry Run",
      "type": "boolean"
    }
  },
  "required": [
    "tag_path"
  ],
  "title": "delete_tagArguments",
  "type": "object"
}
```

</details>

<a id="tool-delete_variable-3ead6fdb"></a>

## delete_variable

Handler: Fetches a variable then previews or executes its workspace deletion.

```text

Delete a user-defined variable from the workspace. Default dry_run=True.
Call create_version_and_publish afterward to push the change live.

```

[Source](https://github.com/K9Cloud/gtm-mcp/blob/7e69a85b3e37f81f2eb2855cbb11356cb4686342/mcp-server/server.py#L473-L496) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "variable_path": {
      "title": "Variable Path",
      "type": "string"
    },
    "dry_run": {
      "default": true,
      "title": "Dry Run",
      "type": "boolean"
    }
  },
  "required": [
    "variable_path"
  ],
  "title": "delete_variableArguments",
  "type": "object"
}
```

</details>

<a id="tool-delete_trigger-ec67de91"></a>

## delete_trigger

Handler: Fetches a trigger then previews or executes its workspace deletion.

```text

Delete a trigger from the workspace. Default dry_run=True.
Call create_version_and_publish afterward to push the change live.

```

[Source](https://github.com/K9Cloud/gtm-mcp/blob/7e69a85b3e37f81f2eb2855cbb11356cb4686342/mcp-server/server.py#L499-L522) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "trigger_path": {
      "title": "Trigger Path",
      "type": "string"
    },
    "dry_run": {
      "default": true,
      "title": "Dry Run",
      "type": "boolean"
    }
  },
  "required": [
    "trigger_path"
  ],
  "title": "delete_triggerArguments",
  "type": "object"
}
```

</details>

<a id="tool-create_version_and_publish-59ae69f7"></a>

## create_version_and_publish

Handler: Previews or creates a workspace container version and publishes the returned version path; reports compilerError.

```text

Create a container version from a workspace and immediately publish it live.

workspace_path: from find_container().default_workspace_path
name: short version name (shown in GTM UI)
notes: longer description (shown in version detail)
dry_run: True = preview only.

GTM mutations stay in the workspace until a version is created + published.
Without this step, paused/deleted/updated tags do NOT take effect on the
deployed container.

```

[Source](https://github.com/K9Cloud/gtm-mcp/blob/7e69a85b3e37f81f2eb2855cbb11356cb4686342/mcp-server/server.py#L527-L577) · Schema: tools/list.

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
    },
    "dry_run": {
      "default": true,
      "title": "Dry Run",
      "type": "boolean"
    }
  },
  "required": [
    "workspace_path",
    "name"
  ],
  "title": "create_version_and_publishArguments",
  "type": "object"
}
```

</details>

<a id="tool-list_workspaces-af844119"></a>

## list_workspaces

Handler: Lists container workspaces, resolving domain/public ID when needed.

```text

List all workspaces in a container. After a publish, the default workspace is
marked 'submitted' and becomes read-only — `update_tag`/`delete_tag` will then
fail with 400 'Workspace is already submitted.' Use create_workspace to spawn
a fresh writable one.

```

[Source](https://github.com/K9Cloud/gtm-mcp/blob/7e69a85b3e37f81f2eb2855cbb11356cb4686342/mcp-server/server.py#L580-L613) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "domain_or_public_id": {
      "default": "",
      "title": "Domain Or Public Id",
      "type": "string"
    },
    "container_path": {
      "default": "",
      "title": "Container Path",
      "type": "string"
    }
  },
  "title": "list_workspacesArguments",
  "type": "object"
}
```

</details>

<a id="tool-create_workspace-a1af8425"></a>

## create_workspace

Handler: Requires a nonempty name and container resolution, then previews or creates a workspace.

```text

Create a fresh workspace in a container. Use this when the default workspace
is in 'submitted' (read-only) state after a recent publish, or to isolate
a multi-step change before publishing.

A new workspace syncs from the latest published version, so all existing
tags/triggers/variables are present and editable.

Pass either container_path directly or domain_or_public_id (the MCP will resolve).

```

[Source](https://github.com/K9Cloud/gtm-mcp/blob/7e69a85b3e37f81f2eb2855cbb11356cb4686342/mcp-server/server.py#L616-L666) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "container_path": {
      "default": "",
      "title": "Container Path",
      "type": "string"
    },
    "domain_or_public_id": {
      "default": "",
      "title": "Domain Or Public Id",
      "type": "string"
    },
    "name": {
      "default": "",
      "title": "Name",
      "type": "string"
    },
    "description": {
      "default": "",
      "title": "Description",
      "type": "string"
    },
    "dry_run": {
      "default": true,
      "title": "Dry Run",
      "type": "boolean"
    }
  },
  "title": "create_workspaceArguments",
  "type": "object"
}
```

</details>

<a id="tool-delete_workspace-50bbbf2e"></a>

## delete_workspace

Handler: Refuses a workspace named Default Workspace, then previews or deletes other workspaces.

```text

Delete a workspace. Useful for cleaning up stale `fix-*` workspaces that
accumulate from prior automation runs. Cannot delete the Default Workspace.

```

[Source](https://github.com/K9Cloud/gtm-mcp/blob/7e69a85b3e37f81f2eb2855cbb11356cb4686342/mcp-server/server.py#L669-L694) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "workspace_path": {
      "title": "Workspace Path",
      "type": "string"
    },
    "dry_run": {
      "default": true,
      "title": "Dry Run",
      "type": "boolean"
    }
  },
  "required": [
    "workspace_path"
  ],
  "title": "delete_workspaceArguments",
  "type": "object"
}
```

</details>

<a id="tool-update_tag-ff9e7962"></a>

## update_tag

Handler: Fetches a tag and shallowly overwrites top-level fields with patch before previewing or updating it; the description incorrectly says deep-merges.

```text

Generic tag update. Fetches the current tag, deep-merges `patch` over the
top, then writes it back. Use this for changes beyond pause/unpause —
swapping a Clarity HTML body, changing an awct tag's conversion action ID,
renaming a tag, retargeting firing triggers, etc.

Examples:
  patch = {"name": "Renamed Tag"}
  patch = {"firingTriggerId": ["12345"]}
  patch = {"parameter": [{"type": "TEMPLATE", "key": "html",
                          "value": "<script>...</script>"}]}

Note: 'parameter' is REPLACED, not deep-merged — fetch via get_tag first
to see the current parameter list, then provide the full replacement.

```

[Source](https://github.com/K9Cloud/gtm-mcp/blob/7e69a85b3e37f81f2eb2855cbb11356cb4686342/mcp-server/server.py#L697-L746) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "tag_path": {
      "title": "Tag Path",
      "type": "string"
    },
    "patch": {
      "additionalProperties": true,
      "title": "Patch",
      "type": "object"
    },
    "dry_run": {
      "default": true,
      "title": "Dry Run",
      "type": "boolean"
    }
  },
  "required": [
    "tag_path",
    "patch"
  ],
  "title": "update_tagArguments",
  "type": "object"
}
```

</details>

<a id="tool-create_tag-e71dcc44"></a>

## create_tag

Handler: Requires body name/type keys, then previews or creates a workspace tag using the unrestricted supplied object.

```text

Create a new tag in a workspace. Caller supplies the full GTM tag body dict.

Required keys in body: `name`, `type` (e.g. 'awct', 'awcc', 'gaawe', 'html').
Common optional keys: `parameter` (list of {type, key, value/list} dicts),
`firingTriggerId` (list of trigger IDs), `blockingTriggerId`, `tagFiringOption`,
`paused`.

Example (Custom HTML / Clarity):
  body = {
    "name": "Microsoft Clarity",
    "type": "html",
    "parameter": [{"type": "TEMPLATE", "key": "html",
                   "value": "<script>(function(c,l,a,r,i,t,y){...})(...);</script>"}],
    "firingTriggerId": ["2147479553"]  # All Pages trigger
  }

For complex tag types (awct, awcc, gaawe), inspect an existing same-type tag
via get_tag first and copy its parameter shape.

```

[Source](https://github.com/K9Cloud/gtm-mcp/blob/7e69a85b3e37f81f2eb2855cbb11356cb4686342/mcp-server/server.py#L749-L804) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "workspace_path": {
      "title": "Workspace Path",
      "type": "string"
    },
    "body": {
      "additionalProperties": true,
      "title": "Body",
      "type": "object"
    },
    "dry_run": {
      "default": true,
      "title": "Dry Run",
      "type": "boolean"
    }
  },
  "required": [
    "workspace_path",
    "body"
  ],
  "title": "create_tagArguments",
  "type": "object"
}
```

</details>

<a id="tool-create_trigger-71660c93"></a>

## create_trigger

Handler: Requires body name/type keys, then previews or creates a workspace trigger using the unrestricted supplied object.

```text

Create a new trigger in a workspace. Caller supplies the full GTM trigger body dict.

Required keys: `name`, `type` (e.g. 'pageview', 'linkClick', 'click', 'customEvent').
Optional: `filter`, `customEventFilter`, `autoEventFilter` (each a list of
condition clauses with `type`, `parameter`).

Example (click on tel: link):
  body = {
    "name": "Click - tel: link",
    "type": "linkClick",
    "filter": [
      {"type": "startsWith",
       "parameter": [
         {"type": "TEMPLATE", "key": "arg0", "value": "{{Click URL}}"},
         {"type": "TEMPLATE", "key": "arg1", "value": "tel:"}
       ]}
    ]
  }

For complex trigger types, inspect an existing trigger via list_triggers
+ the raw API response shape, then copy.

```

[Source](https://github.com/K9Cloud/gtm-mcp/blob/7e69a85b3e37f81f2eb2855cbb11356cb4686342/mcp-server/server.py#L807-L864) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "workspace_path": {
      "title": "Workspace Path",
      "type": "string"
    },
    "body": {
      "additionalProperties": true,
      "title": "Body",
      "type": "object"
    },
    "dry_run": {
      "default": true,
      "title": "Dry Run",
      "type": "boolean"
    }
  },
  "required": [
    "workspace_path",
    "body"
  ],
  "title": "create_triggerArguments",
  "type": "object"
}
```

</details>

<a id="tool-list_versions-3eb8d6c0"></a>

## list_versions

Handler: Lists container version headers and selected history metadata.

```text
List version headers (history) for a container. Pass either domain/public_id or container_path.
```

[Source](https://github.com/K9Cloud/gtm-mcp/blob/7e69a85b3e37f81f2eb2855cbb11356cb4686342/mcp-server/server.py#L867-L898) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "domain_or_public_id": {
      "default": "",
      "title": "Domain Or Public Id",
      "type": "string"
    },
    "container_path": {
      "default": "",
      "title": "Container Path",
      "type": "string"
    }
  },
  "title": "list_versionsArguments",
  "type": "object"
}
```

</details>
