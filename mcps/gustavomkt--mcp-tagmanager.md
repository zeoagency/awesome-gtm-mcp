# gustavomkt/mcp-tagmanager

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/gustavomkt/mcp-tagmanager) · [Machine-readable inventory](../data/mcps/gustavomkt--mcp-tagmanager.json)

**13 extracted tools.** Audits workspace configuration and pauses or resumes tags before separately confirmed publication.

Snapshot: 2026-10-13 · [7255080de0c5](https://github.com/gustavomkt/mcp-tagmanager/tree/7255080de0c57d36b83ef1c5cd910ceb1c1b515b) · Method: tools/list.

Exposure: All 13 tools registered unconditionally. pause_tag, resume_tag, create_version and publish_version require confirm=true (default false) before any API request. Dashboard custom HTTP routes are not MCP tools.

## Limits

- No GTM operation or authentication executed; handler functionality assessed from source and bundled offline discovery schema.
- Dependencies are ranges without a lockfile; tools/list reflects locally installed MCP SDK, so SDK-derived output schema details may vary across supported versions.
- list_versions is broken: Google Tag Manager v2 exposes version_headers.list, not versions.list.
- List handlers do not paginate; results may omit resources after the first page.
- Audit identifies duplicate candidates and consent only through simple source heuristics, not an exhaustive configuration validation.
- Configured OAuth scopes omit edit.containerversions, which is required for creating versions; credentials must separately grant it.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`list_accounts`](#tool-list_accounts-1090ba6a) | GTM | Lists accounts accessible to the configured GTM credentials. |
| [`list_containers`](#tool-list_containers-a53dbc4d) | GTM | Lists containers in the supplied account. |
| [`list_workspaces`](#tool-list_workspaces-af844119) | GTM | Lists workspaces in the supplied container. |
| [`list_tags`](#tool-list_tags-86fc0f9c) | GTM | Lists workspace tags and returns identifiers, names, types, paused state and firing/blocking trigger IDs. |
| [`get_tag`](#tool-get_tag-749bab4b) | GTM | Fetches the full specified workspace tag. |
| [`list_triggers`](#tool-list_triggers-4ca44d74) | GTM | Lists workspace triggers and returns identifiers, names and types. |
| [`list_variables`](#tool-list_variables-1adaa2a1) | GTM | Lists workspace variables and returns identifiers, names and types. |
| [`pause_tag`](#tool-pause_tag-01b6db11) | GTM | Requires confirm=true, fetches the tag and updates its paused field to true in the workspace without publishing. |
| [`resume_tag`](#tool-resume_tag-dfde32d7) | GTM | Requires confirm=true, fetches the tag and updates its paused field to false in the workspace without publishing. |
| [`audit_workspace`](#tool-audit_workspace-e9aaba68) | GTM | Reads tags and triggers to report unpaused tags without firing triggers, unused triggers, equal type/firing-trigger signatures and consentStatus=NEEDED tags. |
| [`create_version`](#tool-create_version-fc39e936) | GTM | Requires confirm=true and calls workspaces.create\_version with name/notes, returning version and compilation/sync metadata without publishing. |
| [`list_versions`](#tool-list_versions-3eb8d6c0) | GTM | Attempts versions().list(), which is absent from Tag Manager API v2; the resulting error is caught and returned as ok=false. |
| [`publish_version`](#tool-publish_version-0628e4c5) | GTM | Requires confirm=true and publishes the specified container version, including an older version for rollback. |

<a id="tool-list_accounts-1090ba6a"></a>

## list_accounts

Handler: Lists accounts accessible to the configured GTM credentials.

```text
Lista las cuentas de Google Tag Manager a las que tiene acceso esta credencial.
```

[Source](https://github.com/gustavomkt/mcp-tagmanager/blob/7255080de0c57d36b83ef1c5cd910ceb1c1b515b/server.py#L156-L163) · Schema: tools/list.

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

Handler: Lists containers in the supplied account.

```text
Lista los contenedores dentro de una cuenta de GTM.

Args:
    account_id: ID de la cuenta de GTM (obtenido de list_accounts).

```

[Source](https://github.com/gustavomkt/mcp-tagmanager/blob/7255080de0c57d36b83ef1c5cd910ceb1c1b515b/server.py#L166-L178) · Schema: tools/list.

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

Handler: Lists workspaces in the supplied container.

```text
Lista los workspaces (áreas de trabajo) de un contenedor.

Args:
    account_id: ID de la cuenta de GTM.
    container_id: ID del contenedor.

```

[Source](https://github.com/gustavomkt/mcp-tagmanager/blob/7255080de0c57d36b83ef1c5cd910ceb1c1b515b/server.py#L181-L194) · Schema: tools/list.

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

<a id="tool-list_tags-86fc0f9c"></a>

## list_tags

Handler: Lists workspace tags and returns identifiers, names, types, paused state and firing/blocking trigger IDs.

```text
Lista los tags de un workspace, incluyendo cuáles están pausados.

Args:
    account_id: ID de la cuenta de GTM.
    container_id: ID del contenedor.
    workspace_id: ID del workspace.

```

[Source](https://github.com/gustavomkt/mcp-tagmanager/blob/7255080de0c57d36b83ef1c5cd910ceb1c1b515b/server.py#L207-L233) · Schema: tools/list.

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

Handler: Fetches the full specified workspace tag.

```text
Obtiene el detalle completo de un tag específico.

Args:
    account_id: ID de la cuenta de GTM.
    container_id: ID del contenedor.
    workspace_id: ID del workspace.
    tag_id: ID del tag.

```

[Source](https://github.com/gustavomkt/mcp-tagmanager/blob/7255080de0c57d36b83ef1c5cd910ceb1c1b515b/server.py#L236-L251) · Schema: tools/list.

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

Handler: Lists workspace triggers and returns identifiers, names and types.

```text
Lista los triggers de un workspace.

Args:
    account_id: ID de la cuenta de GTM.
    container_id: ID del contenedor.
    workspace_id: ID del workspace.

```

[Source](https://github.com/gustavomkt/mcp-tagmanager/blob/7255080de0c57d36b83ef1c5cd910ceb1c1b515b/server.py#L254-L273) · Schema: tools/list.

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

<a id="tool-list_variables-1adaa2a1"></a>

## list_variables

Handler: Lists workspace variables and returns identifiers, names and types.

```text
Lista las variables de un workspace.

Args:
    account_id: ID de la cuenta de GTM.
    container_id: ID del contenedor.
    workspace_id: ID del workspace.

```

[Source](https://github.com/gustavomkt/mcp-tagmanager/blob/7255080de0c57d36b83ef1c5cd910ceb1c1b515b/server.py#L276-L295) · Schema: tools/list.

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

<a id="tool-pause_tag-01b6db11"></a>

## pause_tag

Handler: Requires confirm=true, fetches the tag and updates its paused field to true in the workspace without publishing.

```text
Pausa un tag (deja de dispararse). No publica el contenedor.

Args:
    account_id: ID de la cuenta de GTM.
    container_id: ID del contenedor.
    workspace_id: ID del workspace.
    tag_id: ID del tag a pausar.
    confirm: Debe ser True para ejecutar el cambio.

```

[Source](https://github.com/gustavomkt/mcp-tagmanager/blob/7255080de0c57d36b83ef1c5cd910ceb1c1b515b/server.py#L328-L341) · Schema: tools/list.

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
  "title": "pause_tagArguments",
  "type": "object"
}
```

</details>

<a id="tool-resume_tag-dfde32d7"></a>

## resume_tag

Handler: Requires confirm=true, fetches the tag and updates its paused field to false in the workspace without publishing.

```text
Reanuda (des-pausa) un tag. No publica el contenedor.

Args:
    account_id: ID de la cuenta de GTM.
    container_id: ID del contenedor.
    workspace_id: ID del workspace.
    tag_id: ID del tag a reanudar.
    confirm: Debe ser True para ejecutar el cambio.

```

[Source](https://github.com/gustavomkt/mcp-tagmanager/blob/7255080de0c57d36b83ef1c5cd910ceb1c1b515b/server.py#L344-L357) · Schema: tools/list.

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
  "title": "resume_tagArguments",
  "type": "object"
}
```

</details>

<a id="tool-audit_workspace-e9aaba68"></a>

## audit_workspace

Handler: Reads tags and triggers to report unpaused tags without firing triggers, unused triggers, equal type/firing-trigger signatures and consentStatus=NEEDED tags.

```text
Audita un workspace y regresa una lista estructurada de hallazgos:
tags sin ningún trigger, triggers que no dispara ningún tag, posibles
tags duplicados (mismo tipo + mismos triggers), y si algún tag tiene
Consent Mode configurado. Es de solo lectura, no cambia nada.

Args:
    account_id: ID de la cuenta de GTM.
    container_id: ID del contenedor.
    workspace_id: ID del workspace.

```

[Source](https://github.com/gustavomkt/mcp-tagmanager/blob/7255080de0c57d36b83ef1c5cd910ceb1c1b515b/server.py#L364-L426) · Schema: tools/list.

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
  "title": "audit_workspaceArguments",
  "type": "object"
}
```

</details>

<a id="tool-create_version-fc39e936"></a>

## create_version

Handler: Requires confirm=true and calls workspaces.create\_version with name/notes, returning version and compilation/sync metadata without publishing.

```text
Crea una nueva versión a partir de los cambios pendientes en el workspace.
NO la publica — solo la deja lista para revisar y publicar después.

Args:
    account_id: ID de la cuenta de GTM.
    container_id: ID del contenedor.
    workspace_id: ID del workspace.
    name: Nombre de la versión.
    notes: Descripción de qué cambió y por qué.
    confirm: Debe ser True para ejecutar.

```

[Source](https://github.com/gustavomkt/mcp-tagmanager/blob/7255080de0c57d36b83ef1c5cd910ceb1c1b515b/server.py#L433-L476) · Schema: tools/list.

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
    "name": {
      "title": "Name",
      "type": "string"
    },
    "notes": {
      "default": "",
      "title": "Notes",
      "type": "string"
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
    "name"
  ],
  "title": "create_versionArguments",
  "type": "object"
}
```

</details>

<a id="tool-list_versions-3eb8d6c0"></a>

## list_versions

Handler: Attempts versions().list(), which is absent from Tag Manager API v2; the resulting error is caught and returned as ok=false.

```text
Lista el historial de versiones de un contenedor (para elegir a cuál
hacer rollback, por ejemplo).

Args:
    account_id: ID de la cuenta de GTM.
    container_id: ID del contenedor.

```

[Source](https://github.com/gustavomkt/mcp-tagmanager/blob/7255080de0c57d36b83ef1c5cd910ceb1c1b515b/server.py#L479-L502) · Schema: tools/list.

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

<a id="tool-publish_version-0628e4c5"></a>

## publish_version

Handler: Requires confirm=true and publishes the specified container version, including an older version for rollback.

```text
Publica una versión — esto SÍ va a producción y afecta el sitio en vivo.
Úsalo tanto para publicar una versión nueva como para hacer rollback a una
versión anterior (pásale el version_id de la versión vieja).

Args:
    account_id: ID de la cuenta de GTM.
    container_id: ID del contenedor.
    version_id: ID de la versión a publicar.
    confirm: Debe ser True para ejecutar. Esta acción es de alto riesgo
        porque afecta producción de inmediato.

```

[Source](https://github.com/gustavomkt/mcp-tagmanager/blob/7255080de0c57d36b83ef1c5cd910ceb1c1b515b/server.py#L505-L534) · Schema: tools/list.

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
