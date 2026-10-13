# brynj-digital/gtm-mcp-server

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/brynj-digital/gtm-mcp-server) · [Machine-readable inventory](../data/mcps/brynj-digital--gtm-mcp-server.json)

**28 extracted tools.** Reads containers, environments, permissions, templates, server clients, transformations, and full version snapshots.

Snapshot: 2026-10-13 · [f2b265925861](https://github.com/brynj-digital/gtm-mcp-server/tree/f2b26592586135901c8706a5e7cc98713b692770) · Method: tools/list.

Exposure: All 28 tools are registered unconditionally. Server-side clients and transformations are exposed universally but applicable only to server-side containers. Two analysis helpers are MCP prompts, not tools.

## Limits

- Offline FastMCP list_tools produced full schemas using installed MCP 1.30.0; upstream mcp>=1.2.0 is unpinned, so generated schema details may vary by installed version.
- Handlers and bundled Google API discovery endpoint definitions were inspected offline; no credentials or GTM operations were executed. Pagination stops silently after 50 pages.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`list_accounts`](#tool-list_accounts-1090ba6a) | GTM | List all GTM accounts the authenticated user can access. Uses the Google Tag Manager v2 read endpoint; list results are collected across up to 50 pages. |
| [`get_account`](#tool-get_account-896a62e4) | GTM | Get a single GTM account by its numeric account ID. Calls the Google Tag Manager v2 read endpoint. |
| [`list_containers`](#tool-list_containers-a53dbc4d) | GTM | List all containers within an account. Uses the Google Tag Manager v2 read endpoint; list results are collected across up to 50 pages. |
| [`get_container`](#tool-get_container-9a0808eb) | GTM | Get a single container by account + container ID (includes public ID, e.g. GTM-XXXX). Calls the Google Tag Manager v2 read endpoint. |
| [`list_environments`](#tool-list_environments-eb645b0f) | GTM | List a container's environments (e.g. Live, Latest, and any custom ones). Uses the Google Tag Manager v2 read endpoint; list results are collected across up to 50 pages. |
| [`get_environment`](#tool-get_environment-6589f882) | GTM | Get a single environment by ID. Calls the Google Tag Manager v2 read endpoint. |
| [`list_version_headers`](#tool-list_version_headers-bec4b502) | GTM | List version headers (lightweight metadata for each published/saved container version). Uses the Google Tag Manager v2 read endpoint; list results are collected across up to 50 pages. |
| [`get_live_version`](#tool-get_live_version-ffef26dc) | GTM | Get the currently live (published) container version, with all of its tags/triggers/variables. Calls the Google Tag Manager v2 read endpoint. |
| [`get_container_version`](#tool-get_container_version-aa53e14d) | GTM | Get a specific container version by ID (use "0" or the live tool for the live version). Calls the Google Tag Manager v2 read endpoint. |
| [`list_destinations`](#tool-list_destinations-4f3091aa) | GTM | List the Google tag destinations linked to a container. Calls the Google Tag Manager v2 read endpoint. |
| [`list_workspaces`](#tool-list_workspaces-af844119) | GTM | List the workspaces in a container (changes are staged in a workspace before publishing). Uses the Google Tag Manager v2 read endpoint; list results are collected across up to 50 pages. |
| [`get_workspace`](#tool-get_workspace-80ffee6a) | GTM | Get a single workspace by ID. Calls the Google Tag Manager v2 read endpoint. |
| [`list_tags`](#tool-list_tags-86fc0f9c) | GTM | List all tags in a workspace. Uses the Google Tag Manager v2 read endpoint; list results are collected across up to 50 pages. |
| [`get_tag`](#tool-get_tag-749bab4b) | GTM | Get a single tag by ID, including its full parameter configuration. Calls the Google Tag Manager v2 read endpoint. |
| [`list_triggers`](#tool-list_triggers-4ca44d74) | GTM | List all triggers in a workspace. Uses the Google Tag Manager v2 read endpoint; list results are collected across up to 50 pages. |
| [`get_trigger`](#tool-get_trigger-e2f13ee6) | GTM | Get a single trigger by ID, including its firing conditions. Calls the Google Tag Manager v2 read endpoint. |
| [`list_variables`](#tool-list_variables-1adaa2a1) | GTM | List all user-defined variables in a workspace. Uses the Google Tag Manager v2 read endpoint; list results are collected across up to 50 pages. |
| [`get_variable`](#tool-get_variable-ba0cd778) | GTM | Get a single user-defined variable by ID. Calls the Google Tag Manager v2 read endpoint. |
| [`list_built_in_variables`](#tool-list_built_in_variables-598c2ffb) | GTM | List the enabled built-in variables in a workspace (e.g. Page URL, Click Classes). Uses the Google Tag Manager v2 read endpoint; list results are collected across up to 50 pages. |
| [`list_folders`](#tool-list_folders-786055b5) | GTM | List the folders used to organise entities in a workspace. Uses the Google Tag Manager v2 read endpoint; list results are collected across up to 50 pages. |
| [`get_folder`](#tool-get_folder-e6226f1e) | GTM | Get a single folder by ID. Calls the Google Tag Manager v2 read endpoint. |
| [`list_templates`](#tool-list_templates-f9ffad71) | GTM | List the custom templates in a workspace. Uses the Google Tag Manager v2 read endpoint; list results are collected across up to 50 pages. |
| [`get_template`](#tool-get_template-99eb59af) | GTM | Get a single custom template by ID, including its source. Calls the Google Tag Manager v2 read endpoint. |
| [`list_clients`](#tool-list_clients-916df1aa) | GTM | List clients in a workspace (server-side containers only). Uses the Google Tag Manager v2 read endpoint; list results are collected across up to 50 pages. |
| [`list_transformations`](#tool-list_transformations-f386365b) | GTM | List transformations in a workspace (server-side containers only). Uses the Google Tag Manager v2 read endpoint; list results are collected across up to 50 pages. |
| [`list_zones`](#tool-list_zones-ab161553) | GTM | List zones in a workspace (zones delegate to other containers). Uses the Google Tag Manager v2 read endpoint; list results are collected across up to 50 pages. |
| [`list_gtag_config`](#tool-list_gtag_config-4622cf04) | GTM | List Google tag configuration settings in a workspace. Uses the Google Tag Manager v2 read endpoint; list results are collected across up to 50 pages. |
| [`list_user_permissions`](#tool-list_user_permissions-9cabc1e3) | GTM | List the user permissions configured on an account (who has access, and at what level). Uses the Google Tag Manager v2 read endpoint; list results are collected across up to 50 pages. |

<a id="tool-list_accounts-1090ba6a"></a>

## list_accounts

Handler: List all GTM accounts the authenticated user can access. Uses the Google Tag Manager v2 read endpoint; list results are collected across up to 50 pages.

```text
List all GTM accounts the authenticated user can access.
```

[Source](https://github.com/brynj-digital/gtm-mcp-server/blob/f2b26592586135901c8706a5e7cc98713b692770/src/gtm_mcp/server.py#L40-L47) · Schema: tools/list.

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

<a id="tool-get_account-896a62e4"></a>

## get_account

Handler: Get a single GTM account by its numeric account ID. Calls the Google Tag Manager v2 read endpoint.

```text
Get a single GTM account by its numeric account ID.
```

[Source](https://github.com/brynj-digital/gtm-mcp-server/blob/f2b26592586135901c8706a5e7cc98713b692770/src/gtm_mcp/server.py#L50-L54) · Schema: tools/list.

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
  "title": "get_accountArguments",
  "type": "object"
}
```

</details>

<a id="tool-list_containers-a53dbc4d"></a>

## list_containers

Handler: List all containers within an account. Uses the Google Tag Manager v2 read endpoint; list results are collected across up to 50 pages.

```text
List all containers within an account.
```

[Source](https://github.com/brynj-digital/gtm-mcp-server/blob/f2b26592586135901c8706a5e7cc98713b692770/src/gtm_mcp/server.py#L62-L72) · Schema: tools/list.

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

<a id="tool-get_container-9a0808eb"></a>

## get_container

Handler: Get a single container by account + container ID (includes public ID, e.g. GTM-XXXX). Calls the Google Tag Manager v2 read endpoint.

```text
Get a single container by account + container ID (includes public ID, e.g. GTM-XXXX).
```

[Source](https://github.com/brynj-digital/gtm-mcp-server/blob/f2b26592586135901c8706a5e7cc98713b692770/src/gtm_mcp/server.py#L75-L83) · Schema: tools/list.

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
  "title": "get_containerArguments",
  "type": "object"
}
```

</details>

<a id="tool-list_environments-eb645b0f"></a>

## list_environments

Handler: List a container's environments (e.g. Live, Latest, and any custom ones). Uses the Google Tag Manager v2 read endpoint; list results are collected across up to 50 pages.

```text
List a container's environments (e.g. Live, Latest, and any custom ones).
```

[Source](https://github.com/brynj-digital/gtm-mcp-server/blob/f2b26592586135901c8706a5e7cc98713b692770/src/gtm_mcp/server.py#L91-L102) · Schema: tools/list.

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
  "title": "list_environmentsArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_environment-6589f882"></a>

## get_environment

Handler: Get a single environment by ID. Calls the Google Tag Manager v2 read endpoint.

```text
Get a single environment by ID.
```

[Source](https://github.com/brynj-digital/gtm-mcp-server/blob/f2b26592586135901c8706a5e7cc98713b692770/src/gtm_mcp/server.py#L105-L112) · Schema: tools/list.

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
    "environment_id": {
      "title": "Environment Id",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "environment_id"
  ],
  "title": "get_environmentArguments",
  "type": "object"
}
```

</details>

<a id="tool-list_version_headers-bec4b502"></a>

## list_version_headers

Handler: List version headers (lightweight metadata for each published/saved container version). Uses the Google Tag Manager v2 read endpoint; list results are collected across up to 50 pages.

```text
List version headers (lightweight metadata for each published/saved container version).
```

[Source](https://github.com/brynj-digital/gtm-mcp-server/blob/f2b26592586135901c8706a5e7cc98713b692770/src/gtm_mcp/server.py#L120-L131) · Schema: tools/list.

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
  "title": "list_version_headersArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_live_version-ffef26dc"></a>

## get_live_version

Handler: Get the currently live (published) container version, with all of its tags/triggers/variables. Calls the Google Tag Manager v2 read endpoint.

```text
Get the currently live (published) container version, with all of its tags/triggers/variables.
```

[Source](https://github.com/brynj-digital/gtm-mcp-server/blob/f2b26592586135901c8706a5e7cc98713b692770/src/gtm_mcp/server.py#L134-L139) · Schema: tools/list.

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
  "title": "get_live_versionArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_container_version-aa53e14d"></a>

## get_container_version

Handler: Get a specific container version by ID (use "0" or the live tool for the live version). Calls the Google Tag Manager v2 read endpoint.

```text
Get a specific container version by ID (use "0" or the live tool for the live version).
```

[Source](https://github.com/brynj-digital/gtm-mcp-server/blob/f2b26592586135901c8706a5e7cc98713b692770/src/gtm_mcp/server.py#L142-L149) · Schema: tools/list.

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
  "title": "get_container_versionArguments",
  "type": "object"
}
```

</details>

<a id="tool-list_destinations-4f3091aa"></a>

## list_destinations

Handler: List the Google tag destinations linked to a container. Calls the Google Tag Manager v2 read endpoint.

```text
List the Google tag destinations linked to a container.
```

[Source](https://github.com/brynj-digital/gtm-mcp-server/blob/f2b26592586135901c8706a5e7cc98713b692770/src/gtm_mcp/server.py#L157-L166) · Schema: tools/list.

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
  "title": "list_destinationsArguments",
  "type": "object"
}
```

</details>

<a id="tool-list_workspaces-af844119"></a>

## list_workspaces

Handler: List the workspaces in a container (changes are staged in a workspace before publishing). Uses the Google Tag Manager v2 read endpoint; list results are collected across up to 50 pages.

```text
List the workspaces in a container (changes are staged in a workspace before publishing).
```

[Source](https://github.com/brynj-digital/gtm-mcp-server/blob/f2b26592586135901c8706a5e7cc98713b692770/src/gtm_mcp/server.py#L174-L185) · Schema: tools/list.

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
  "title": "list_workspacesArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_workspace-80ffee6a"></a>

## get_workspace

Handler: Get a single workspace by ID. Calls the Google Tag Manager v2 read endpoint.

```text
Get a single workspace by ID.
```

[Source](https://github.com/brynj-digital/gtm-mcp-server/blob/f2b26592586135901c8706a5e7cc98713b692770/src/gtm_mcp/server.py#L188-L199) · Schema: tools/list.

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
      "title": "Workspace Id",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "title": "get_workspaceArguments",
  "type": "object"
}
```

</details>

<a id="tool-list_tags-86fc0f9c"></a>

## list_tags

Handler: List all tags in a workspace. Uses the Google Tag Manager v2 read endpoint; list results are collected across up to 50 pages.

```text
List all tags in a workspace.
```

[Source](https://github.com/brynj-digital/gtm-mcp-server/blob/f2b26592586135901c8706a5e7cc98713b692770/src/gtm_mcp/server.py#L208-L222) · Schema: tools/list.

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
      "title": "Workspace Id",
      "type": "string"
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

<a id="tool-get_tag-749bab4b"></a>

## get_tag

Handler: Get a single tag by ID, including its full parameter configuration. Calls the Google Tag Manager v2 read endpoint.

```text
Get a single tag by ID, including its full parameter configuration.
```

[Source](https://github.com/brynj-digital/gtm-mcp-server/blob/f2b26592586135901c8706a5e7cc98713b692770/src/gtm_mcp/server.py#L225-L234) · Schema: tools/list.

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
      "title": "Workspace Id",
      "type": "string"
    },
    "tag_id": {
      "title": "Tag Id",
      "type": "string"
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

<a id="tool-list_triggers-4ca44d74"></a>

## list_triggers

Handler: List all triggers in a workspace. Uses the Google Tag Manager v2 read endpoint; list results are collected across up to 50 pages.

```text
List all triggers in a workspace.
```

[Source](https://github.com/brynj-digital/gtm-mcp-server/blob/f2b26592586135901c8706a5e7cc98713b692770/src/gtm_mcp/server.py#L237-L251) · Schema: tools/list.

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
      "title": "Workspace Id",
      "type": "string"
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

<a id="tool-get_trigger-e2f13ee6"></a>

## get_trigger

Handler: Get a single trigger by ID, including its firing conditions. Calls the Google Tag Manager v2 read endpoint.

```text
Get a single trigger by ID, including its firing conditions.
```

[Source](https://github.com/brynj-digital/gtm-mcp-server/blob/f2b26592586135901c8706a5e7cc98713b692770/src/gtm_mcp/server.py#L254-L266) · Schema: tools/list.

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
      "title": "Workspace Id",
      "type": "string"
    },
    "trigger_id": {
      "title": "Trigger Id",
      "type": "string"
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

<a id="tool-list_variables-1adaa2a1"></a>

## list_variables

Handler: List all user-defined variables in a workspace. Uses the Google Tag Manager v2 read endpoint; list results are collected across up to 50 pages.

```text
List all user-defined variables in a workspace.
```

[Source](https://github.com/brynj-digital/gtm-mcp-server/blob/f2b26592586135901c8706a5e7cc98713b692770/src/gtm_mcp/server.py#L269-L283) · Schema: tools/list.

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
      "title": "Workspace Id",
      "type": "string"
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

<a id="tool-get_variable-ba0cd778"></a>

## get_variable

Handler: Get a single user-defined variable by ID. Calls the Google Tag Manager v2 read endpoint.

```text
Get a single user-defined variable by ID.
```

[Source](https://github.com/brynj-digital/gtm-mcp-server/blob/f2b26592586135901c8706a5e7cc98713b692770/src/gtm_mcp/server.py#L286-L298) · Schema: tools/list.

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
      "title": "Workspace Id",
      "type": "string"
    },
    "variable_id": {
      "title": "Variable Id",
      "type": "string"
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

<a id="tool-list_built_in_variables-598c2ffb"></a>

## list_built_in_variables

Handler: List the enabled built-in variables in a workspace (e.g. Page URL, Click Classes). Uses the Google Tag Manager v2 read endpoint; list results are collected across up to 50 pages.

```text
List the enabled built-in variables in a workspace (e.g. Page URL, Click Classes).
```

[Source](https://github.com/brynj-digital/gtm-mcp-server/blob/f2b26592586135901c8706a5e7cc98713b692770/src/gtm_mcp/server.py#L301-L315) · Schema: tools/list.

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
      "title": "Workspace Id",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "title": "list_built_in_variablesArguments",
  "type": "object"
}
```

</details>

<a id="tool-list_folders-786055b5"></a>

## list_folders

Handler: List the folders used to organise entities in a workspace. Uses the Google Tag Manager v2 read endpoint; list results are collected across up to 50 pages.

```text
List the folders used to organise entities in a workspace.
```

[Source](https://github.com/brynj-digital/gtm-mcp-server/blob/f2b26592586135901c8706a5e7cc98713b692770/src/gtm_mcp/server.py#L318-L332) · Schema: tools/list.

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
      "title": "Workspace Id",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "title": "list_foldersArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_folder-e6226f1e"></a>

## get_folder

Handler: Get a single folder by ID. Calls the Google Tag Manager v2 read endpoint.

```text
Get a single folder by ID.
```

[Source](https://github.com/brynj-digital/gtm-mcp-server/blob/f2b26592586135901c8706a5e7cc98713b692770/src/gtm_mcp/server.py#L335-L347) · Schema: tools/list.

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
      "title": "Workspace Id",
      "type": "string"
    },
    "folder_id": {
      "title": "Folder Id",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "folder_id"
  ],
  "title": "get_folderArguments",
  "type": "object"
}
```

</details>

<a id="tool-list_templates-f9ffad71"></a>

## list_templates

Handler: List the custom templates in a workspace. Uses the Google Tag Manager v2 read endpoint; list results are collected across up to 50 pages.

```text
List the custom templates in a workspace.
```

[Source](https://github.com/brynj-digital/gtm-mcp-server/blob/f2b26592586135901c8706a5e7cc98713b692770/src/gtm_mcp/server.py#L350-L364) · Schema: tools/list.

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
      "title": "Workspace Id",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "title": "list_templatesArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_template-99eb59af"></a>

## get_template

Handler: Get a single custom template by ID, including its source. Calls the Google Tag Manager v2 read endpoint.

```text
Get a single custom template by ID, including its source.
```

[Source](https://github.com/brynj-digital/gtm-mcp-server/blob/f2b26592586135901c8706a5e7cc98713b692770/src/gtm_mcp/server.py#L367-L379) · Schema: tools/list.

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
      "title": "Workspace Id",
      "type": "string"
    },
    "template_id": {
      "title": "Template Id",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "template_id"
  ],
  "title": "get_templateArguments",
  "type": "object"
}
```

</details>

<a id="tool-list_clients-916df1aa"></a>

## list_clients

Handler: List clients in a workspace (server-side containers only). Uses the Google Tag Manager v2 read endpoint; list results are collected across up to 50 pages.

```text
List clients in a workspace (server-side containers only).
```

[Source](https://github.com/brynj-digital/gtm-mcp-server/blob/f2b26592586135901c8706a5e7cc98713b692770/src/gtm_mcp/server.py#L382-L396) · Schema: tools/list.

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
      "title": "Workspace Id",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "title": "list_clientsArguments",
  "type": "object"
}
```

</details>

<a id="tool-list_transformations-f386365b"></a>

## list_transformations

Handler: List transformations in a workspace (server-side containers only). Uses the Google Tag Manager v2 read endpoint; list results are collected across up to 50 pages.

```text
List transformations in a workspace (server-side containers only).
```

[Source](https://github.com/brynj-digital/gtm-mcp-server/blob/f2b26592586135901c8706a5e7cc98713b692770/src/gtm_mcp/server.py#L399-L413) · Schema: tools/list.

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
      "title": "Workspace Id",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "title": "list_transformationsArguments",
  "type": "object"
}
```

</details>

<a id="tool-list_zones-ab161553"></a>

## list_zones

Handler: List zones in a workspace (zones delegate to other containers). Uses the Google Tag Manager v2 read endpoint; list results are collected across up to 50 pages.

```text
List zones in a workspace (zones delegate to other containers).
```

[Source](https://github.com/brynj-digital/gtm-mcp-server/blob/f2b26592586135901c8706a5e7cc98713b692770/src/gtm_mcp/server.py#L416-L430) · Schema: tools/list.

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
      "title": "Workspace Id",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "title": "list_zonesArguments",
  "type": "object"
}
```

</details>

<a id="tool-list_gtag_config-4622cf04"></a>

## list_gtag_config

Handler: List Google tag configuration settings in a workspace. Uses the Google Tag Manager v2 read endpoint; list results are collected across up to 50 pages.

```text
List Google tag configuration settings in a workspace.
```

[Source](https://github.com/brynj-digital/gtm-mcp-server/blob/f2b26592586135901c8706a5e7cc98713b692770/src/gtm_mcp/server.py#L433-L447) · Schema: tools/list.

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
      "title": "Workspace Id",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "title": "list_gtag_configArguments",
  "type": "object"
}
```

</details>

<a id="tool-list_user_permissions-9cabc1e3"></a>

## list_user_permissions

Handler: List the user permissions configured on an account (who has access, and at what level). Uses the Google Tag Manager v2 read endpoint; list results are collected across up to 50 pages.

```text
List the user permissions configured on an account (who has access, and at what level).
```

[Source](https://github.com/brynj-digital/gtm-mcp-server/blob/f2b26592586135901c8706a5e7cc98713b692770/src/gtm_mcp/server.py#L455-L465) · Schema: tools/list.

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
  "title": "list_user_permissionsArguments",
  "type": "object"
}
```

</details>
