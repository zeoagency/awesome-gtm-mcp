# acamolese/gtm-audit-mcp

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/acamolese/gtm-audit-mcp) · [Machine-readable inventory](../data/mcps/acamolese--gtm-audit-mcp.json)

**10 extracted tools.** Audits container configuration, maps tracking setups, compares snapshots, and writes local reports.

Snapshot: 2026-10-13 · [040ebb7891a3](https://github.com/acamolese/gtm-audit-mcp/tree/040ebb7891a3ac8fd5deefaba1fa0be562c416de) · Method: mixed.

Exposure: All ten tools are registered unconditionally; API handlers require OAuth credentials when called.

## Limits

- Offline FastMCP list_tools ran only the original decorated function definitions, excluding client/auth imports; no handler or GTM API operation was executed.
- The dependency mcp>=1.0.0 is unpinned; exact generated schema formatting/outputSchema can vary with installed MCP/Pydantic versions, recorded in work/versions.json.
- Tracking validation inspects configuration heuristically, rather than executing browser events or verifying event delivery; version listing does not filter unpublished/deleted headers despite its description.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`list_accounts`](#tool-list_accounts-1090ba6a) | GTM | Reads accessible GTM accounts through paginated REST GET requests. |
| [`list_containers`](#tool-list_containers-a53dbc4d) | GTM | Reads containers for a GTM account and returns selected metadata. |
| [`list_workspaces`](#tool-list_workspaces-af844119) | GTM | Reads workspaces for a GTM container and returns IDs, names and descriptions. |
| [`list_versions`](#tool-list_versions-3eb8d6c0) | GTM | Reads container version headers, including headers marked deleted. |
| [`list_tags`](#tool-list_tags-86fc0f9c) | GTM | Reads selected tag metadata from the specified workspace or the resolved default workspace. |
| [`list_triggers`](#tool-list_triggers-4ca44d74) | GTM | Reads trigger IDs, names and types from the specified or default workspace. |
| [`list_variables`](#tool-list_variables-1adaa2a1) | GTM | Reads custom variable IDs, names and types from the specified or default workspace. |
| [`gtm_audit`](#tool-gtm_audit-b95baa17) | GTM | Reads a workspace or live version, runs configuration and tracking checks, and writes local HTML and JSON reports. |
| [`gtm_diff`](#tool-gtm_diff-66946652) | GTM | Reads two workspace/version snapshots and compares tags, triggers and custom variables after omitting volatile metadata. |
| [`gtm_tracking_validation`](#tool-gtm_tracking_validation-f42a6b1e) | GTM | Reads a workspace or live version and heuristically maps GA4, Ads and Meta configuration with tracking findings and server-side URL hints. |

<a id="tool-list_accounts-1090ba6a"></a>

## list_accounts

Handler: Reads accessible GTM accounts through paginated REST GET requests.

```text
Elenca gli account GTM accessibili con l'utente OAuth corrente.
```

[Source](https://github.com/acamolese/gtm-audit-mcp/blob/040ebb7891a3ac8fd5deefaba1fa0be562c416de/src/mcp_gtm_audit/server.py#L51-L59) · Schema: tools/list.

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

Handler: Reads containers for a GTM account and returns selected metadata.

```text
Elenca i container GTM di un account.

Args:
    account_id: ID account GTM (numerico).

```

[Source](https://github.com/acamolese/gtm-audit-mcp/blob/040ebb7891a3ac8fd5deefaba1fa0be562c416de/src/mcp_gtm_audit/server.py#L62-L79) · Schema: tools/list.

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

<a id="tool-list_workspaces-af844119"></a>

## list_workspaces

Handler: Reads workspaces for a GTM container and returns IDs, names and descriptions.

```text
Elenca i workspace di un container.
```

[Source](https://github.com/acamolese/gtm-audit-mcp/blob/040ebb7891a3ac8fd5deefaba1fa0be562c416de/src/mcp_gtm_audit/server.py#L82-L89) · Schema: tools/list.

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

<a id="tool-list_versions-3eb8d6c0"></a>

## list_versions

Handler: Reads container version headers, including headers marked deleted.

```text
Elenca gli header delle versioni pubblicate del container.
```

[Source](https://github.com/acamolese/gtm-audit-mcp/blob/040ebb7891a3ac8fd5deefaba1fa0be562c416de/src/mcp_gtm_audit/server.py#L92-L106) · Schema: tools/list.

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
  "title": "list_versionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-list_tags-86fc0f9c"></a>

## list_tags

Handler: Reads selected tag metadata from the specified workspace or the resolved default workspace.

```text
Elenca i tag di un workspace (default: Default Workspace).
```

[Source](https://github.com/acamolese/gtm-audit-mcp/blob/040ebb7891a3ac8fd5deefaba1fa0be562c416de/src/mcp_gtm_audit/server.py#L109-L125) · Schema: tools/list.

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
      "default": "",
      "title": "Workspace Id",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ],
  "title": "list_tagsArguments",
  "type": "object"
}
```

</details>

<a id="tool-list_triggers-4ca44d74"></a>

## list_triggers

Handler: Reads trigger IDs, names and types from the specified or default workspace.

```text
Elenca i trigger di un workspace.
```

[Source](https://github.com/acamolese/gtm-audit-mcp/blob/040ebb7891a3ac8fd5deefaba1fa0be562c416de/src/mcp_gtm_audit/server.py#L128-L137) · Schema: tools/list.

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
      "default": "",
      "title": "Workspace Id",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ],
  "title": "list_triggersArguments",
  "type": "object"
}
```

</details>

<a id="tool-list_variables-1adaa2a1"></a>

## list_variables

Handler: Reads custom variable IDs, names and types from the specified or default workspace.

```text
Elenca le variabili custom di un workspace.
```

[Source](https://github.com/acamolese/gtm-audit-mcp/blob/040ebb7891a3ac8fd5deefaba1fa0be562c416de/src/mcp_gtm_audit/server.py#L140-L149) · Schema: tools/list.

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
      "default": "",
      "title": "Workspace Id",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ],
  "title": "list_variablesArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_audit-b95baa17"></a>

## gtm_audit

Handler: Reads a workspace or live version, runs configuration and tracking checks, and writes local HTML and JSON reports.

```text
Esegue l'audit completo del container e genera report HTML + JSON.

Args:
    account_id: ID account GTM.
    container_id: ID container GTM (numerico interno, NON il GTM-XXXX).
    workspace_id: ID workspace; vuoto = Default Workspace.
    use_live_version: Se True ignora il workspace e analizza la versione pubblicata.
    output_dir: Directory destinazione; default ~/Reports/<client_slug or container>/.
    client_slug: Slug cliente per cartella report; default = nome container.

```

[Source](https://github.com/acamolese/gtm-audit-mcp/blob/040ebb7891a3ac8fd5deefaba1fa0be562c416de/src/mcp_gtm_audit/server.py#L157-L211) · Schema: tools/list.

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
      "default": "",
      "title": "Workspace Id",
      "type": "string"
    },
    "use_live_version": {
      "default": false,
      "title": "Use Live Version",
      "type": "boolean"
    },
    "output_dir": {
      "default": "",
      "title": "Output Dir",
      "type": "string"
    },
    "client_slug": {
      "default": "",
      "title": "Client Slug",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ],
  "title": "gtm_auditArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_diff-66946652"></a>

## gtm_diff

Handler: Reads two workspace/version snapshots and compares tags, triggers and custom variables after omitting volatile metadata.

```text
Confronta due snapshot del container.

Args:
    account_id: ID account GTM.
    container_id: ID container.
    base_ref: 'live' oppure ID di una versione pubblicata.
    head_ref: 'workspace' (usa workspace_id) oppure ID di una versione.
    workspace_id: ID workspace per head_ref='workspace' (default: Default Workspace).

```

[Source](https://github.com/acamolese/gtm-audit-mcp/blob/040ebb7891a3ac8fd5deefaba1fa0be562c416de/src/mcp_gtm_audit/server.py#L219-L253) · Schema: tools/list.

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
    "base_ref": {
      "default": "live",
      "title": "Base Ref",
      "type": "string"
    },
    "head_ref": {
      "default": "workspace",
      "title": "Head Ref",
      "type": "string"
    },
    "workspace_id": {
      "default": "",
      "title": "Workspace Id",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ],
  "title": "gtm_diffArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_tracking_validation-f42a6b1e"></a>

## gtm_tracking_validation

Handler: Reads a workspace or live version and heuristically maps GA4, Ads and Meta configuration with tracking findings and server-side URL hints.

```text
Restituisce la mappa eventi GA4/Ads/Meta e i finding di tracciamento.
```

[Source](https://github.com/acamolese/gtm-audit-mcp/blob/040ebb7891a3ac8fd5deefaba1fa0be562c416de/src/mcp_gtm_audit/server.py#L261-L278) · Schema: tools/list.

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
      "default": "",
      "title": "Workspace Id",
      "type": "string"
    },
    "use_live_version": {
      "default": false,
      "title": "Use Live Version",
      "type": "boolean"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ],
  "title": "gtm_tracking_validationArguments",
  "type": "object"
}
```

</details>
