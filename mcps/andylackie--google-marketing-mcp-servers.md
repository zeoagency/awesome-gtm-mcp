# andylackie/google-marketing-mcp-servers

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/andylackie/google-marketing-mcp-servers) · [Machine-readable inventory](../data/mcps/andylackie--google-marketing-mcp-servers.json)

**27 extracted tools.** Edits workspace entities and folders, enables built-ins, creates versions, and confirms publication.

Snapshot: 2026-10-13 · [6bf5e93167c4](https://github.com/andylackie/google-marketing-mcp-servers/tree/6bf5e93167c4dac017ff518c91ab578b306afa58) · Method: tools/list.

Exposure: All 27 tools registered unconditionally by buildMcpServer; no read-only or conditional tool groups. Separate GA4/Search Console server excluded.

## Limits

- tools/list handler invoked offline from the actual SDK server in an isolated dependency installation using the upstream lockfile and cleared environment; no transport, credentials, authentication or GTM operations executed. Handler behavior reviewed statically, not verified against Google.
- Read list handlers issue one API call and do not expose page tokens or paginate; large collections may be incomplete.
- Schemas intentionally leave Tag, Trigger and Variable resources as unrestricted record objects. Zod preprocessing additionally accepts JSON strings although published JSON Schema exposes object/array forms.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`list_accounts`](#tool-list_accounts-1090ba6a) | GTM | Calls Google Tag Manager v2 accounts.list. |
| [`list_containers`](#tool-list_containers-a53dbc4d) | GTM | Calls Google Tag Manager v2 accounts.containers.list. |
| [`get_container`](#tool-get_container-9a0808eb) | GTM | Calls Google Tag Manager v2 accounts.containers.get. |
| [`list_workspaces`](#tool-list_workspaces-af844119) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.list. |
| [`list_tags`](#tool-list_tags-86fc0f9c) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.tags.list. |
| [`get_tag`](#tool-get_tag-749bab4b) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.tags.get. |
| [`list_triggers`](#tool-list_triggers-4ca44d74) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.triggers.list. |
| [`get_trigger`](#tool-get_trigger-e2f13ee6) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.triggers.get. |
| [`list_variables`](#tool-list_variables-1adaa2a1) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.variables.list. |
| [`get_variable`](#tool-get_variable-ba0cd778) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.variables.get. |
| [`list_built_in_variables`](#tool-list_built_in_variables-598c2ffb) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.built\_in\_variables.list. |
| [`list_versions`](#tool-list_versions-3eb8d6c0) | GTM | Calls Google Tag Manager v2 accounts.containers.version\_headers.list. |
| [`get_live_version`](#tool-get_live_version-ffef26dc) | GTM | Calls Google Tag Manager v2 accounts.containers.versions.live. |
| [`create_workspace`](#tool-create_workspace-a1af8425) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.create. |
| [`create_tag`](#tool-create_tag-e71dcc44) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.tags.create. Parses stringified JSON payloads before validation. |
| [`update_tag`](#tool-update_tag-ff9e7962) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.tags.update. Parses stringified JSON payloads before validation. |
| [`delete_tag`](#tool-delete_tag-1345d160) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.tags.delete. |
| [`create_trigger`](#tool-create_trigger-71660c93) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.triggers.create. Parses stringified JSON payloads before validation. |
| [`update_trigger`](#tool-update_trigger-60ddeb77) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.triggers.update. Parses stringified JSON payloads before validation. |
| [`delete_trigger`](#tool-delete_trigger-ec67de91) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.triggers.delete. |
| [`create_variable`](#tool-create_variable-2f5e4ddb) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.variables.create. Parses stringified JSON payloads before validation. |
| [`update_variable`](#tool-update_variable-63c48ad7) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.variables.update. Parses stringified JSON payloads before validation. |
| [`delete_variable`](#tool-delete_variable-3ead6fdb) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.variables.delete. |
| [`enable_built_in_variable`](#tool-enable_built_in_variable-0049036f) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.built\_in\_variables.create. Parses stringified JSON payloads before validation. |
| [`create_folder`](#tool-create_folder-5b53fba3) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.folders.create. |
| [`create_version`](#tool-create_version-fc39e936) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.create\_version. |
| [`publish_version`](#tool-publish_version-0628e4c5) | GTM | Calls Google Tag Manager v2 accounts.containers.versions.publish. Refuses unless confirm is true. |

<a id="tool-list_accounts-1090ba6a"></a>

## list_accounts

Handler: Calls Google Tag Manager v2 accounts.list.

```text
List GTM accounts this login can access. Start here.
```

[Source](https://github.com/andylackie/google-marketing-mcp-servers/blob/6bf5e93167c4dac017ff518c91ab578b306afa58/gtm-mcp/src/mcp-server.ts#L94-L99) · [Handler](https://github.com/andylackie/google-marketing-mcp-servers/blob/6bf5e93167c4dac017ff518c91ab578b306afa58/gtm-mcp/src/tools/read.ts#L11-L20) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {}
}
```

</details>

<a id="tool-list_containers-a53dbc4d"></a>

## list_containers

Handler: Calls Google Tag Manager v2 accounts.containers.list.

```text
List containers under a GTM account.
```

[Source](https://github.com/andylackie/google-marketing-mcp-servers/blob/6bf5e93167c4dac017ff518c91ab578b306afa58/gtm-mcp/src/mcp-server.ts#L100-L105) · [Handler](https://github.com/andylackie/google-marketing-mcp-servers/blob/6bf5e93167c4dac017ff518c91ab578b306afa58/gtm-mcp/src/tools/read.ts#L22-L33) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountPath": {
      "type": "string",
      "minLength": 1,
      "description": "Account path, e.g. 'accounts/1234567'."
    }
  },
  "required": [
    "accountPath"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-get_container-9a0808eb"></a>

## get_container

Handler: Calls Google Tag Manager v2 accounts.containers.get.

```text
Get a single container's details (public ID like GTM-XXXX, usage context).
```

[Source](https://github.com/andylackie/google-marketing-mcp-servers/blob/6bf5e93167c4dac017ff518c91ab578b306afa58/gtm-mcp/src/mcp-server.ts#L106-L111) · [Handler](https://github.com/andylackie/google-marketing-mcp-servers/blob/6bf5e93167c4dac017ff518c91ab578b306afa58/gtm-mcp/src/tools/read.ts#L35-L49) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "containerPath": {
      "type": "string",
      "minLength": 1,
      "description": "Container path, e.g. 'accounts/1234567/containers/7654321'."
    }
  },
  "required": [
    "containerPath"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-list_workspaces-af844119"></a>

## list_workspaces

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.list.

```text
List workspaces (drafts) in a container.
```

[Source](https://github.com/andylackie/google-marketing-mcp-servers/blob/6bf5e93167c4dac017ff518c91ab578b306afa58/gtm-mcp/src/mcp-server.ts#L112-L117) · [Handler](https://github.com/andylackie/google-marketing-mcp-servers/blob/6bf5e93167c4dac017ff518c91ab578b306afa58/gtm-mcp/src/tools/read.ts#L51-L62) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "containerPath": {
      "type": "string",
      "minLength": 1,
      "description": "Container path."
    }
  },
  "required": [
    "containerPath"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-list_tags-86fc0f9c"></a>

## list_tags

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.tags.list.

```text
List tags in a workspace.
```

[Source](https://github.com/andylackie/google-marketing-mcp-servers/blob/6bf5e93167c4dac017ff518c91ab578b306afa58/gtm-mcp/src/mcp-server.ts#L118-L118) · [Handler](https://github.com/andylackie/google-marketing-mcp-servers/blob/6bf5e93167c4dac017ff518c91ab578b306afa58/gtm-mcp/src/tools/read.ts#L64-L75) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "workspacePath": {
      "type": "string",
      "minLength": 1,
      "description": "Workspace path, e.g. '.../workspaces/3'."
    }
  },
  "required": [
    "workspacePath"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-get_tag-749bab4b"></a>

## get_tag

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.tags.get.

```text
Get one tag by path.
```

[Source](https://github.com/andylackie/google-marketing-mcp-servers/blob/6bf5e93167c4dac017ff518c91ab578b306afa58/gtm-mcp/src/mcp-server.ts#L119-L119) · [Handler](https://github.com/andylackie/google-marketing-mcp-servers/blob/6bf5e93167c4dac017ff518c91ab578b306afa58/gtm-mcp/src/tools/read.ts#L77-L88) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "tagPath": {
      "type": "string",
      "minLength": 1,
      "description": "Tag path, e.g. '.../workspaces/3/tags/12'."
    }
  },
  "required": [
    "tagPath"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-list_triggers-4ca44d74"></a>

## list_triggers

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.triggers.list.

```text
List triggers in a workspace.
```

[Source](https://github.com/andylackie/google-marketing-mcp-servers/blob/6bf5e93167c4dac017ff518c91ab578b306afa58/gtm-mcp/src/mcp-server.ts#L120-L125) · [Handler](https://github.com/andylackie/google-marketing-mcp-servers/blob/6bf5e93167c4dac017ff518c91ab578b306afa58/gtm-mcp/src/tools/read.ts#L90-L101) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "workspacePath": {
      "type": "string",
      "minLength": 1,
      "description": "Workspace path."
    }
  },
  "required": [
    "workspacePath"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-get_trigger-e2f13ee6"></a>

## get_trigger

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.triggers.get.

```text
Get one trigger by path.
```

[Source](https://github.com/andylackie/google-marketing-mcp-servers/blob/6bf5e93167c4dac017ff518c91ab578b306afa58/gtm-mcp/src/mcp-server.ts#L126-L126) · [Handler](https://github.com/andylackie/google-marketing-mcp-servers/blob/6bf5e93167c4dac017ff518c91ab578b306afa58/gtm-mcp/src/tools/read.ts#L103-L114) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "triggerPath": {
      "type": "string",
      "minLength": 1,
      "description": "Trigger path, e.g. '.../workspaces/3/triggers/8'."
    }
  },
  "required": [
    "triggerPath"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-list_variables-1adaa2a1"></a>

## list_variables

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.variables.list.

```text
List user-defined variables in a workspace.
```

[Source](https://github.com/andylackie/google-marketing-mcp-servers/blob/6bf5e93167c4dac017ff518c91ab578b306afa58/gtm-mcp/src/mcp-server.ts#L127-L132) · [Handler](https://github.com/andylackie/google-marketing-mcp-servers/blob/6bf5e93167c4dac017ff518c91ab578b306afa58/gtm-mcp/src/tools/read.ts#L116-L127) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "workspacePath": {
      "type": "string",
      "minLength": 1,
      "description": "Workspace path."
    }
  },
  "required": [
    "workspacePath"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-get_variable-ba0cd778"></a>

## get_variable

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.variables.get.

```text
Get one variable by path.
```

[Source](https://github.com/andylackie/google-marketing-mcp-servers/blob/6bf5e93167c4dac017ff518c91ab578b306afa58/gtm-mcp/src/mcp-server.ts#L133-L133) · [Handler](https://github.com/andylackie/google-marketing-mcp-servers/blob/6bf5e93167c4dac017ff518c91ab578b306afa58/gtm-mcp/src/tools/read.ts#L129-L140) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "variablePath": {
      "type": "string",
      "minLength": 1,
      "description": "Variable path, e.g. '.../workspaces/3/variables/5'."
    }
  },
  "required": [
    "variablePath"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-list_built_in_variables-598c2ffb"></a>

## list_built_in_variables

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.built\_in\_variables.list.

```text
List enabled built-in variables in a workspace.
```

[Source](https://github.com/andylackie/google-marketing-mcp-servers/blob/6bf5e93167c4dac017ff518c91ab578b306afa58/gtm-mcp/src/mcp-server.ts#L134-L139) · [Handler](https://github.com/andylackie/google-marketing-mcp-servers/blob/6bf5e93167c4dac017ff518c91ab578b306afa58/gtm-mcp/src/tools/read.ts#L142-L155) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "workspacePath": {
      "type": "string",
      "minLength": 1,
      "description": "Workspace path."
    }
  },
  "required": [
    "workspacePath"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-list_versions-3eb8d6c0"></a>

## list_versions

Handler: Calls Google Tag Manager v2 accounts.containers.version\_headers.list.

```text
List container version headers (history).
```

[Source](https://github.com/andylackie/google-marketing-mcp-servers/blob/6bf5e93167c4dac017ff518c91ab578b306afa58/gtm-mcp/src/mcp-server.ts#L140-L145) · [Handler](https://github.com/andylackie/google-marketing-mcp-servers/blob/6bf5e93167c4dac017ff518c91ab578b306afa58/gtm-mcp/src/tools/read.ts#L157-L168) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "containerPath": {
      "type": "string",
      "minLength": 1,
      "description": "Container path."
    }
  },
  "required": [
    "containerPath"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-get_live_version-ffef26dc"></a>

## get_live_version

Handler: Calls Google Tag Manager v2 accounts.containers.versions.live.

```text
Get the currently PUBLISHED (live) container version.
```

[Source](https://github.com/andylackie/google-marketing-mcp-servers/blob/6bf5e93167c4dac017ff518c91ab578b306afa58/gtm-mcp/src/mcp-server.ts#L146-L151) · [Handler](https://github.com/andylackie/google-marketing-mcp-servers/blob/6bf5e93167c4dac017ff518c91ab578b306afa58/gtm-mcp/src/tools/read.ts#L170-L181) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "containerPath": {
      "type": "string",
      "minLength": 1,
      "description": "Container path."
    }
  },
  "required": [
    "containerPath"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-create_workspace-a1af8425"></a>

## create_workspace

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.create.

```text
Create a new workspace (draft) in a container. All edits happen in a workspace.
```

[Source](https://github.com/andylackie/google-marketing-mcp-servers/blob/6bf5e93167c4dac017ff518c91ab578b306afa58/gtm-mcp/src/mcp-server.ts#L154-L159) · [Handler](https://github.com/andylackie/google-marketing-mcp-servers/blob/6bf5e93167c4dac017ff518c91ab578b306afa58/gtm-mcp/src/tools/build.ts#L21-L37) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "containerPath": {
      "type": "string",
      "minLength": 1,
      "description": "Container path, e.g. 'accounts/123/containers/456'."
    },
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "Workspace name."
    },
    "description": {
      "type": "string"
    }
  },
  "required": [
    "containerPath",
    "name"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-create_tag-e71dcc44"></a>

## create_tag

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.tags.create. Parses stringified JSON payloads before validation.

```text
Create a tag in a workspace. Workspace-only — not live until a version is published.
```

[Source](https://github.com/andylackie/google-marketing-mcp-servers/blob/6bf5e93167c4dac017ff518c91ab578b306afa58/gtm-mcp/src/mcp-server.ts#L160-L165) · [Handler](https://github.com/andylackie/google-marketing-mcp-servers/blob/6bf5e93167c4dac017ff518c91ab578b306afa58/gtm-mcp/src/tools/build.ts#L39-L56) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "workspacePath": {
      "type": "string",
      "minLength": 1,
      "description": "Workspace path, e.g. '.../workspaces/3'."
    },
    "tag": {
      "type": "object",
      "additionalProperties": {},
      "description": "GTM Tag resource: { name, type, parameter[], firingTriggerId[], ... }. See Tag Manager API v2 Tag schema."
    }
  },
  "required": [
    "workspacePath",
    "tag"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-update_tag-ff9e7962"></a>

## update_tag

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.tags.update. Parses stringified JSON payloads before validation.

```text
Replace a tag in a workspace. Workspace-only — not live until published.
```

[Source](https://github.com/andylackie/google-marketing-mcp-servers/blob/6bf5e93167c4dac017ff518c91ab578b306afa58/gtm-mcp/src/mcp-server.ts#L166-L171) · [Handler](https://github.com/andylackie/google-marketing-mcp-servers/blob/6bf5e93167c4dac017ff518c91ab578b306afa58/gtm-mcp/src/tools/build.ts#L58-L73) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "tagPath": {
      "type": "string",
      "minLength": 1,
      "description": "Tag path, e.g. '.../workspaces/3/tags/12'."
    },
    "tag": {
      "type": "object",
      "additionalProperties": {},
      "description": "Full GTM Tag resource to replace the existing tag with."
    }
  },
  "required": [
    "tagPath",
    "tag"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-delete_tag-1345d160"></a>

## delete_tag

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.tags.delete.

```text
Delete a tag from a workspace. Workspace-only — not live until published.
```

[Source](https://github.com/andylackie/google-marketing-mcp-servers/blob/6bf5e93167c4dac017ff518c91ab578b306afa58/gtm-mcp/src/mcp-server.ts#L172-L177) · [Handler](https://github.com/andylackie/google-marketing-mcp-servers/blob/6bf5e93167c4dac017ff518c91ab578b306afa58/gtm-mcp/src/tools/build.ts#L75-L86) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "tagPath": {
      "type": "string",
      "minLength": 1,
      "description": "Tag path to delete from the workspace."
    }
  },
  "required": [
    "tagPath"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-create_trigger-71660c93"></a>

## create_trigger

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.triggers.create. Parses stringified JSON payloads before validation.

```text
Create a trigger in a workspace. Workspace-only.
```

[Source](https://github.com/andylackie/google-marketing-mcp-servers/blob/6bf5e93167c4dac017ff518c91ab578b306afa58/gtm-mcp/src/mcp-server.ts#L178-L183) · [Handler](https://github.com/andylackie/google-marketing-mcp-servers/blob/6bf5e93167c4dac017ff518c91ab578b306afa58/gtm-mcp/src/tools/build.ts#L88-L105) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "workspacePath": {
      "type": "string",
      "minLength": 1,
      "description": "Workspace path."
    },
    "trigger": {
      "type": "object",
      "additionalProperties": {},
      "description": "GTM Trigger resource: { name, type, filter[], ... }. See Tag Manager API v2 Trigger schema."
    }
  },
  "required": [
    "workspacePath",
    "trigger"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-update_trigger-60ddeb77"></a>

## update_trigger

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.triggers.update. Parses stringified JSON payloads before validation.

```text
Replace a trigger in a workspace. Workspace-only.
```

[Source](https://github.com/andylackie/google-marketing-mcp-servers/blob/6bf5e93167c4dac017ff518c91ab578b306afa58/gtm-mcp/src/mcp-server.ts#L184-L189) · [Handler](https://github.com/andylackie/google-marketing-mcp-servers/blob/6bf5e93167c4dac017ff518c91ab578b306afa58/gtm-mcp/src/tools/build.ts#L107-L122) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "triggerPath": {
      "type": "string",
      "minLength": 1,
      "description": "Trigger path."
    },
    "trigger": {
      "type": "object",
      "additionalProperties": {},
      "description": "Full GTM Trigger resource to replace the existing one."
    }
  },
  "required": [
    "triggerPath",
    "trigger"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-delete_trigger-ec67de91"></a>

## delete_trigger

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.triggers.delete.

```text
Delete a trigger from a workspace. Workspace-only.
```

[Source](https://github.com/andylackie/google-marketing-mcp-servers/blob/6bf5e93167c4dac017ff518c91ab578b306afa58/gtm-mcp/src/mcp-server.ts#L190-L195) · [Handler](https://github.com/andylackie/google-marketing-mcp-servers/blob/6bf5e93167c4dac017ff518c91ab578b306afa58/gtm-mcp/src/tools/build.ts#L124-L135) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "triggerPath": {
      "type": "string",
      "minLength": 1,
      "description": "Trigger path to delete from the workspace."
    }
  },
  "required": [
    "triggerPath"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-create_variable-2f5e4ddb"></a>

## create_variable

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.variables.create. Parses stringified JSON payloads before validation.

```text
Create a user-defined variable in a workspace. Workspace-only.
```

[Source](https://github.com/andylackie/google-marketing-mcp-servers/blob/6bf5e93167c4dac017ff518c91ab578b306afa58/gtm-mcp/src/mcp-server.ts#L196-L201) · [Handler](https://github.com/andylackie/google-marketing-mcp-servers/blob/6bf5e93167c4dac017ff518c91ab578b306afa58/gtm-mcp/src/tools/build.ts#L137-L154) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "workspacePath": {
      "type": "string",
      "minLength": 1,
      "description": "Workspace path."
    },
    "variable": {
      "type": "object",
      "additionalProperties": {},
      "description": "GTM Variable resource: { name, type, parameter[], ... }. See Tag Manager API v2 Variable schema."
    }
  },
  "required": [
    "workspacePath",
    "variable"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-update_variable-63c48ad7"></a>

## update_variable

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.variables.update. Parses stringified JSON payloads before validation.

```text
Replace a variable in a workspace. Workspace-only.
```

[Source](https://github.com/andylackie/google-marketing-mcp-servers/blob/6bf5e93167c4dac017ff518c91ab578b306afa58/gtm-mcp/src/mcp-server.ts#L202-L207) · [Handler](https://github.com/andylackie/google-marketing-mcp-servers/blob/6bf5e93167c4dac017ff518c91ab578b306afa58/gtm-mcp/src/tools/build.ts#L156-L171) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "variablePath": {
      "type": "string",
      "minLength": 1,
      "description": "Variable path."
    },
    "variable": {
      "type": "object",
      "additionalProperties": {},
      "description": "Full GTM Variable resource to replace the existing one."
    }
  },
  "required": [
    "variablePath",
    "variable"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-delete_variable-3ead6fdb"></a>

## delete_variable

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.variables.delete.

```text
Delete a variable from a workspace. Workspace-only.
```

[Source](https://github.com/andylackie/google-marketing-mcp-servers/blob/6bf5e93167c4dac017ff518c91ab578b306afa58/gtm-mcp/src/mcp-server.ts#L208-L213) · [Handler](https://github.com/andylackie/google-marketing-mcp-servers/blob/6bf5e93167c4dac017ff518c91ab578b306afa58/gtm-mcp/src/tools/build.ts#L173-L184) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "variablePath": {
      "type": "string",
      "minLength": 1,
      "description": "Variable path to delete from the workspace."
    }
  },
  "required": [
    "variablePath"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-enable_built_in_variable-0049036f"></a>

## enable_built_in_variable

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.built\_in\_variables.create. Parses stringified JSON payloads before validation.

```text
Enable one or more built-in variables in a workspace. Workspace-only.
```

[Source](https://github.com/andylackie/google-marketing-mcp-servers/blob/6bf5e93167c4dac017ff518c91ab578b306afa58/gtm-mcp/src/mcp-server.ts#L214-L219) · [Handler](https://github.com/andylackie/google-marketing-mcp-servers/blob/6bf5e93167c4dac017ff518c91ab578b306afa58/gtm-mcp/src/tools/build.ts#L186-L203) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "workspacePath": {
      "type": "string",
      "minLength": 1,
      "description": "Workspace path."
    },
    "types": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "minItems": 1,
      "description": "Built-in variable types to enable, e.g. ['pageUrl','clickText','referrer']."
    }
  },
  "required": [
    "workspacePath",
    "types"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-create_folder-5b53fba3"></a>

## create_folder

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.folders.create.

```text
Create an organizing folder in a workspace. Workspace-only.
```

[Source](https://github.com/andylackie/google-marketing-mcp-servers/blob/6bf5e93167c4dac017ff518c91ab578b306afa58/gtm-mcp/src/mcp-server.ts#L220-L225) · [Handler](https://github.com/andylackie/google-marketing-mcp-servers/blob/6bf5e93167c4dac017ff518c91ab578b306afa58/gtm-mcp/src/tools/build.ts#L205-L220) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "workspacePath": {
      "type": "string",
      "minLength": 1,
      "description": "Workspace path."
    },
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "Folder name."
    }
  },
  "required": [
    "workspacePath",
    "name"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-create_version-fc39e936"></a>

## create_version

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.create\_version.

```text
Snapshot a workspace into a container version. NOT live — publish separately.
```

[Source](https://github.com/andylackie/google-marketing-mcp-servers/blob/6bf5e93167c4dac017ff518c91ab578b306afa58/gtm-mcp/src/mcp-server.ts#L228-L233) · [Handler](https://github.com/andylackie/google-marketing-mcp-servers/blob/6bf5e93167c4dac017ff518c91ab578b306afa58/gtm-mcp/src/tools/publish.ts#L5-L23) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "workspacePath": {
      "type": "string",
      "minLength": 1,
      "description": "Workspace path, e.g. '.../workspaces/3'."
    },
    "name": {
      "type": "string",
      "description": "Version name."
    },
    "notes": {
      "type": "string",
      "description": "Version notes."
    }
  },
  "required": [
    "workspacePath"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-publish_version-0628e4c5"></a>

## publish_version

Handler: Calls Google Tag Manager v2 accounts.containers.versions.publish. Refuses unless confirm is true.

```text
PUBLISH a container version LIVE. Changes production tracking immediately. Requires confirm:true; refuses otherwise.
```

[Source](https://github.com/andylackie/google-marketing-mcp-servers/blob/6bf5e93167c4dac017ff518c91ab578b306afa58/gtm-mcp/src/mcp-server.ts#L234-L239) · [Handler](https://github.com/andylackie/google-marketing-mcp-servers/blob/6bf5e93167c4dac017ff518c91ab578b306afa58/gtm-mcp/src/tools/publish.ts#L25-L47) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "versionPath": {
      "type": "string",
      "minLength": 1,
      "description": "Container version path to publish LIVE, e.g. 'accounts/123/containers/456/versions/9'."
    },
    "confirm": {
      "type": "boolean",
      "description": "MUST be true. Publishing changes PRODUCTION tracking on the live site immediately."
    }
  },
  "required": [
    "versionPath",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>
