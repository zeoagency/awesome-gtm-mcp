# baptlagae-hue/gtm-mcp

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/baptlagae-hue/gtm-mcp) · [Machine-readable inventory](../data/mcps/baptlagae-hue--gtm-mcp.json)

**10 extracted tools.** Browses container entities and creates tags, triggers, and variables only in workspaces matching a configured prefix.

Snapshot: 2026-10-13 · [8273eb8c18eb](https://github.com/baptlagae-hue/gtm-mcp/tree/8273eb8c18ebf9cee779dafa8f38c0b2458ab0ce) · Method: tools/list.

Exposure: All ten decorators register unconditionally. GTM_WORKSPACE_PREFIX changes write guardrails (default IA | ) but does not change exposure.

## Limits

- Offline FastMCP.list_tools registration only; no handlers, authentication, or GTM operations were executed. Dependencies are lower-bound-only; schemas reflect installed mcp 1.30.0.
- Creation payload dict parameters are deliberately unrestricted objects, with no GTM resource-specific fields validated locally. Read collection handlers do not follow nextPageToken, so may return only the first page.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`list_gtm_accounts`](#tool-list_gtm_accounts-8aee50f5) | GTM | GETs the GTM v2 accounts collection using Application Default Credentials. |
| [`list_gtm_containers`](#tool-list_gtm_containers-c6ad6269) | GTM | GETs the GTM v2 containers collection under the supplied parent path. |
| [`list_gtm_workspaces`](#tool-list_gtm_workspaces-e1ad847d) | GTM | GETs the GTM v2 workspaces collection under the supplied parent path. |
| [`list_gtm_tags`](#tool-list_gtm_tags-7506947b) | GTM | GETs the GTM v2 tags collection under the supplied parent path. |
| [`list_gtm_triggers`](#tool-list_gtm_triggers-3dd5a402) | GTM | GETs the GTM v2 triggers collection under the supplied parent path. |
| [`list_gtm_variables`](#tool-list_gtm_variables-b1742e8b) | GTM | GETs the GTM v2 variables collection under the supplied parent path. |
| [`create_gtm_workspace`](#tool-create_gtm_workspace-00287f7b) | GTM | Rejects names without the configured prefix, then POSTs a workspace name and optional description under the container. |
| [`create_gtm_tag`](#tool-create_gtm_tag-07815d6f) | GTM | GETs the target workspace to verify its configured name prefix, then POSTs the unrestricted supplied tag payload. |
| [`create_gtm_trigger`](#tool-create_gtm_trigger-1f105cd1) | GTM | GETs the target workspace to verify its configured name prefix, then POSTs the unrestricted supplied trigger payload. |
| [`create_gtm_variable`](#tool-create_gtm_variable-3a356a91) | GTM | GETs the target workspace to verify its configured name prefix, then POSTs the unrestricted supplied variable payload. |

<a id="tool-list_gtm_accounts-8aee50f5"></a>

## list_gtm_accounts

Handler: GETs the GTM v2 accounts collection using Application Default Credentials.

```text

List all Google Tag Manager accounts accessible with your active credentials.

```

[Source](https://github.com/baptlagae-hue/gtm-mcp/blob/8273eb8c18ebf9cee779dafa8f38c0b2458ab0ce/gtm_mcp/server.py#L49-L59) · Schema: tools/list.

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

<a id="tool-list_gtm_containers-c6ad6269"></a>

## list_gtm_containers

Handler: GETs the GTM v2 containers collection under the supplied parent path.

```text

List GTM containers for a given account.

Args:
    parent: The parent account path (e.g., 'accounts/123456')

```

[Source](https://github.com/baptlagae-hue/gtm-mcp/blob/8273eb8c18ebf9cee779dafa8f38c0b2458ab0ce/gtm_mcp/server.py#L61-L74) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "parent": {
      "title": "Parent",
      "type": "string"
    }
  },
  "required": [
    "parent"
  ],
  "title": "list_gtm_containersArguments",
  "type": "object"
}
```

</details>

<a id="tool-list_gtm_workspaces-e1ad847d"></a>

## list_gtm_workspaces

Handler: GETs the GTM v2 workspaces collection under the supplied parent path.

```text

List workspaces inside a GTM container.

Args:
    parent: The parent container path (e.g., 'accounts/123456/containers/78901')

```

[Source](https://github.com/baptlagae-hue/gtm-mcp/blob/8273eb8c18ebf9cee779dafa8f38c0b2458ab0ce/gtm_mcp/server.py#L76-L89) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "parent": {
      "title": "Parent",
      "type": "string"
    }
  },
  "required": [
    "parent"
  ],
  "title": "list_gtm_workspacesArguments",
  "type": "object"
}
```

</details>

<a id="tool-list_gtm_tags-7506947b"></a>

## list_gtm_tags

Handler: GETs the GTM v2 tags collection under the supplied parent path.

```text

List tags inside a GTM workspace.

Args:
    parent: The workspace path (e.g., 'accounts/123456/containers/78901/workspaces/12')

```

[Source](https://github.com/baptlagae-hue/gtm-mcp/blob/8273eb8c18ebf9cee779dafa8f38c0b2458ab0ce/gtm_mcp/server.py#L91-L104) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "parent": {
      "title": "Parent",
      "type": "string"
    }
  },
  "required": [
    "parent"
  ],
  "title": "list_gtm_tagsArguments",
  "type": "object"
}
```

</details>

<a id="tool-list_gtm_triggers-3dd5a402"></a>

## list_gtm_triggers

Handler: GETs the GTM v2 triggers collection under the supplied parent path.

```text

List triggers inside a GTM workspace.

Args:
    parent: The workspace path (e.g., 'accounts/123456/containers/78901/workspaces/12')

```

[Source](https://github.com/baptlagae-hue/gtm-mcp/blob/8273eb8c18ebf9cee779dafa8f38c0b2458ab0ce/gtm_mcp/server.py#L106-L119) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "parent": {
      "title": "Parent",
      "type": "string"
    }
  },
  "required": [
    "parent"
  ],
  "title": "list_gtm_triggersArguments",
  "type": "object"
}
```

</details>

<a id="tool-list_gtm_variables-b1742e8b"></a>

## list_gtm_variables

Handler: GETs the GTM v2 variables collection under the supplied parent path.

```text

List variables inside a GTM workspace.

Args:
    parent: The workspace path (e.g., 'accounts/123456/containers/78901/workspaces/12')

```

[Source](https://github.com/baptlagae-hue/gtm-mcp/blob/8273eb8c18ebf9cee779dafa8f38c0b2458ab0ce/gtm_mcp/server.py#L121-L134) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "parent": {
      "title": "Parent",
      "type": "string"
    }
  },
  "required": [
    "parent"
  ],
  "title": "list_gtm_variablesArguments",
  "type": "object"
}
```

</details>

<a id="tool-create_gtm_workspace-00287f7b"></a>

## create_gtm_workspace

Handler: Rejects names without the configured prefix, then POSTs a workspace name and optional description under the container.

```text

Create a new workspace in a GTM container. Enforces strict naming conventions.

Args:
    parent: The parent container path (e.g., 'accounts/123456/containers/78901')
    name: The name of the workspace. MUST start with the governance prefix (default 'IA | ', override with GTM_WORKSPACE_PREFIX)
    description: Optional description of the workspace.

```

[Source](https://github.com/baptlagae-hue/gtm-mcp/blob/8273eb8c18ebf9cee779dafa8f38c0b2458ab0ce/gtm_mcp/server.py#L139-L166) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "parent": {
      "title": "Parent",
      "type": "string"
    },
    "name": {
      "title": "Name",
      "type": "string"
    },
    "description": {
      "default": null,
      "title": "Description",
      "type": "string"
    }
  },
  "required": [
    "parent",
    "name"
  ],
  "title": "create_gtm_workspaceArguments",
  "type": "object"
}
```

</details>

<a id="tool-create_gtm_tag-07815d6f"></a>

## create_gtm_tag

Handler: GETs the target workspace to verify its configured name prefix, then POSTs the unrestricted supplied tag payload.

```text

Create a new tag in a GTM workspace. Enforced to only run in workspaces matching the governance prefix (default 'IA | ').

Args:
    parent: The parent workspace path (e.g., 'accounts/123456/containers/78901/workspaces/12')
    tag_data: The JSON payload for the tag (matching GTM API v2 schema)

```

[Source](https://github.com/baptlagae-hue/gtm-mcp/blob/8273eb8c18ebf9cee779dafa8f38c0b2458ab0ce/gtm_mcp/server.py#L168-L195) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "parent": {
      "title": "Parent",
      "type": "string"
    },
    "tag_data": {
      "additionalProperties": true,
      "title": "Tag Data",
      "type": "object"
    }
  },
  "required": [
    "parent",
    "tag_data"
  ],
  "title": "create_gtm_tagArguments",
  "type": "object"
}
```

</details>

<a id="tool-create_gtm_trigger-1f105cd1"></a>

## create_gtm_trigger

Handler: GETs the target workspace to verify its configured name prefix, then POSTs the unrestricted supplied trigger payload.

```text

Create a new trigger in a GTM workspace. Enforced to only run in workspaces matching the governance prefix (default 'IA | ').

Args:
    parent: The parent workspace path (e.g., 'accounts/123456/containers/78901/workspaces/12')
    trigger_data: The JSON payload for the trigger (matching GTM API v2 schema)

```

[Source](https://github.com/baptlagae-hue/gtm-mcp/blob/8273eb8c18ebf9cee779dafa8f38c0b2458ab0ce/gtm_mcp/server.py#L197-L224) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "parent": {
      "title": "Parent",
      "type": "string"
    },
    "trigger_data": {
      "additionalProperties": true,
      "title": "Trigger Data",
      "type": "object"
    }
  },
  "required": [
    "parent",
    "trigger_data"
  ],
  "title": "create_gtm_triggerArguments",
  "type": "object"
}
```

</details>

<a id="tool-create_gtm_variable-3a356a91"></a>

## create_gtm_variable

Handler: GETs the target workspace to verify its configured name prefix, then POSTs the unrestricted supplied variable payload.

```text

Create a new variable in a GTM workspace. Enforced to only run in workspaces matching the governance prefix (default 'IA | ').

Args:
    parent: The parent workspace path (e.g., 'accounts/123456/containers/78901/workspaces/12')
    variable_data: The JSON payload for the variable (matching GTM API v2 schema)

```

[Source](https://github.com/baptlagae-hue/gtm-mcp/blob/8273eb8c18ebf9cee779dafa8f38c0b2458ab0ce/gtm_mcp/server.py#L226-L253) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "parent": {
      "title": "Parent",
      "type": "string"
    },
    "variable_data": {
      "additionalProperties": true,
      "title": "Variable Data",
      "type": "object"
    }
  },
  "required": [
    "parent",
    "variable_data"
  ],
  "title": "create_gtm_variableArguments",
  "type": "object"
}
```

</details>
