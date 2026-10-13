# b-buller/gtm-mcp

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/b-buller/gtm-mcp) · [Machine-readable inventory](../data/mcps/b-buller--gtm-mcp.json)

**18 extracted tools.** Groups discovery operations into resource tools with read-only defaults and separate write, delete, and publish switches.

Snapshot: 2026-10-13 · [c5448fd082cc](https://github.com/b-buller/gtm-mcp/tree/c5448fd082cce5280943bd590595de6ea2076809) · Method: mixed.

Exposure: All discovery resource groups and all operations are always listed. Default execution is read-only: writes, deletes and publish require GTM_MCP_ENABLE_WRITES, GTM_MCP_ENABLE_DELETES, GTM_MCP_ENABLE_PUBLISH=true respectively; delete/publish and designated high-impact operations additionally require confirm:true. No JSON Schema defaults are declared. Token can come from environment; email defaults to MCP_GTM_EMAIL or empty string.

## Limits

- Tool enumeration depends on live discovery and can change after process restart. Extraction uses Google v2 discovery revision 20261007 downloaded 2026-10-13, saved at /root/scratch/gtm-tools/work/b-buller--gtm-mcp/discovery-2026-10-13.json; upstream vendors no snapshot.
- Exact registered schemas were obtained by executing exported buildTools with fetch replaced by the local discovery snapshot; the MCP stdio tools/list transport was not invoked.
- body and query intentionally remain unrestricted objects as registered; the MCP server does not publish detailed discovery resource-body schemas.
- built_in_variables delete and revert have {+path}; buildName includes built_in_variables and throws because its ID mapping is null. Read/list and create use parent paths and avoid this failure.
- No authenticated GTM operations were executed.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`gtm_accounts`](#tool-gtm_accounts-ea1d55c7) | GTM | Dispatches operation (get, list, update) to the matching Google Tag Manager v2 discovery REST method, builds hierarchical path IDs, filters query parameters, and forwards body JSON. |
| [`gtm_built_in_variables`](#tool-gtm_built_in_variables-0d2ff672) | GTM | Dispatches operation (create, delete, list, revert) to the matching Google Tag Manager v2 discovery REST method, builds hierarchical path IDs, filters query parameters, and forwards body JSON; delete/revert fail because their path calls buildName with a null ID mapping. |
| [`gtm_clients`](#tool-gtm_clients-3fa51ec5) | GTM | Dispatches operation (create, delete, get, list, revert, update) to the matching Google Tag Manager v2 discovery REST method, builds hierarchical path IDs, filters query parameters, and forwards body JSON. |
| [`gtm_containers`](#tool-gtm_containers-0387d754) | GTM | Dispatches operation (combine, create, delete, get, list, lookup, move\_tag\_id, snippet, update) to the matching Google Tag Manager v2 discovery REST method, builds hierarchical path IDs, filters query parameters, and forwards body JSON. |
| [`gtm_destinations`](#tool-gtm_destinations-7961916b) | GTM | Dispatches operation (get, link, list) to the matching Google Tag Manager v2 discovery REST method, builds hierarchical path IDs, filters query parameters, and forwards body JSON. |
| [`gtm_environments`](#tool-gtm_environments-01981833) | GTM | Dispatches operation (create, delete, get, list, reauthorize, update) to the matching Google Tag Manager v2 discovery REST method, builds hierarchical path IDs, filters query parameters, and forwards body JSON. |
| [`gtm_folders`](#tool-gtm_folders-23b4280b) | GTM | Dispatches operation (create, delete, entities, get, list, move\_entities\_to\_folder, revert, update) to the matching Google Tag Manager v2 discovery REST method, builds hierarchical path IDs, filters query parameters, and forwards body JSON. |
| [`gtm_gtag_config`](#tool-gtm_gtag_config-f5a9eddd) | GTM | Dispatches operation (create, delete, get, list, update) to the matching Google Tag Manager v2 discovery REST method, builds hierarchical path IDs, filters query parameters, and forwards body JSON. |
| [`gtm_tags`](#tool-gtm_tags-e53dcde4) | GTM | Dispatches operation (create, delete, get, list, revert, update) to the matching Google Tag Manager v2 discovery REST method, builds hierarchical path IDs, filters query parameters, and forwards body JSON. |
| [`gtm_templates`](#tool-gtm_templates-168a5acc) | GTM | Dispatches operation (create, delete, get, import\_from\_gallery, list, revert, update) to the matching Google Tag Manager v2 discovery REST method, builds hierarchical path IDs, filters query parameters, and forwards body JSON. |
| [`gtm_transformations`](#tool-gtm_transformations-2f4f00a6) | GTM | Dispatches operation (create, delete, get, list, revert, update) to the matching Google Tag Manager v2 discovery REST method, builds hierarchical path IDs, filters query parameters, and forwards body JSON. |
| [`gtm_triggers`](#tool-gtm_triggers-4a7b476c) | GTM | Dispatches operation (create, delete, get, list, revert, update) to the matching Google Tag Manager v2 discovery REST method, builds hierarchical path IDs, filters query parameters, and forwards body JSON. |
| [`gtm_user_permissions`](#tool-gtm_user_permissions-8cff2fda) | GTM | Dispatches operation (create, delete, get, list, update) to the matching Google Tag Manager v2 discovery REST method, builds hierarchical path IDs, filters query parameters, and forwards body JSON. |
| [`gtm_variables`](#tool-gtm_variables-1337c750) | GTM | Dispatches operation (create, delete, get, list, revert, update) to the matching Google Tag Manager v2 discovery REST method, builds hierarchical path IDs, filters query parameters, and forwards body JSON. |
| [`gtm_version_headers`](#tool-gtm_version_headers-15168c90) | GTM | Dispatches operation (latest, list) to the matching Google Tag Manager v2 discovery REST method, builds hierarchical path IDs, filters query parameters, and forwards body JSON. |
| [`gtm_versions`](#tool-gtm_versions-55603b9a) | GTM | Dispatches operation (delete, get, live, publish, set\_latest, undelete, update) to the matching Google Tag Manager v2 discovery REST method, builds hierarchical path IDs, filters query parameters, and forwards body JSON. |
| [`gtm_workspaces`](#tool-gtm_workspaces-2cbed623) | GTM | Dispatches operation (bulk\_update, create, create\_version, delete, get, getStatus, list, quick\_preview, resolve\_conflict, sync, update) to the matching Google Tag Manager v2 discovery REST method, builds hierarchical path IDs, filters query parameters, and forwards body JSON. |
| [`gtm_zones`](#tool-gtm_zones-24eb69a8) | GTM | Dispatches operation (create, delete, get, list, revert, update) to the matching Google Tag Manager v2 discovery REST method, builds hierarchical path IDs, filters query parameters, and forwards body JSON. |

<a id="tool-gtm_accounts-ea1d55c7"></a>

## gtm_accounts

Handler: Dispatches operation (get, list, update) to the matching Google Tag Manager v2 discovery REST method, builds hierarchical path IDs, filters query parameters, and forwards body JSON.

```text
Google Tag Manager: accounts. operation = one of [get, list, update]. 'email' is OPTIONAL — omit it to act as the server's default Google account, or pass one to override. GTM nests accounts > containers > workspaces > {tags,triggers,variables,...}: pass every path id down to the level you target (e.g. a tag needs accountId+containerId+workspaceId+tagId), and use the list operations top-down to discover ids you don't have. 'body' carries the GTM resource JSON for create/update; delete/publish/high-impact ops need confirm:true.
```

[Source](https://github.com/b-buller/gtm-mcp/blob/c5448fd082cce5280943bd590595de6ea2076809/src/gtm.js#L186-L244) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "operation": {
      "type": "string",
      "enum": [
        "get",
        "list",
        "update"
      ],
      "description": "Which operation to perform."
    },
    "email": {
      "type": "string",
      "description": "Optional. Email of the connected Google account to act as; omit to use the server default. Its OAuth token is used."
    },
    "accountId": {
      "type": "string",
      "description": "GTM account id (top level; list via gtm_accounts)."
    },
    "body": {
      "type": "object",
      "description": "GTM resource JSON (create/update/etc.)."
    },
    "pageToken": {
      "type": "string"
    },
    "fingerprint": {
      "type": "string"
    },
    "includeGoogleTags": {
      "type": "boolean"
    },
    "query": {
      "type": "object",
      "description": "Extra query params for special ops, e.g. combine: {containerId}, move_tag_id: {tagId, tagName}."
    }
  },
  "required": [
    "operation"
  ]
}
```

</details>

<a id="tool-gtm_built_in_variables-0d2ff672"></a>

## gtm_built_in_variables

Handler: Dispatches operation (create, delete, list, revert) to the matching Google Tag Manager v2 discovery REST method, builds hierarchical path IDs, filters query parameters, and forwards body JSON; delete/revert fail because their path calls buildName with a null ID mapping.

```text
Google Tag Manager: built in variables. operation = one of [create, delete, list, revert]. 'email' is OPTIONAL — omit it to act as the server's default Google account, or pass one to override. GTM nests accounts > containers > workspaces > {tags,triggers,variables,...}: pass every path id down to the level you target (e.g. a tag needs accountId+containerId+workspaceId+tagId), and use the list operations top-down to discover ids you don't have. 'body' carries the GTM resource JSON for create/update; delete/publish/high-impact ops need confirm:true.
```

[Source](https://github.com/b-buller/gtm-mcp/blob/c5448fd082cce5280943bd590595de6ea2076809/src/gtm.js#L186-L244) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "operation": {
      "type": "string",
      "enum": [
        "create",
        "delete",
        "list",
        "revert"
      ],
      "description": "Which operation to perform."
    },
    "email": {
      "type": "string",
      "description": "Optional. Email of the connected Google account to act as; omit to use the server default. Its OAuth token is used."
    },
    "accountId": {
      "type": "string",
      "description": "GTM account id (top level; list via gtm_accounts)."
    },
    "containerId": {
      "type": "string",
      "description": "GTM container id (under an account; list via gtm_containers)."
    },
    "workspaceId": {
      "type": "string",
      "description": "GTM workspace id (under a container; list via gtm_workspaces)."
    },
    "pageToken": {
      "type": "string"
    },
    "type": {
      "description": "Built-in variable type(s).",
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      ]
    },
    "query": {
      "type": "object",
      "description": "Extra query params for special ops, e.g. combine: {containerId}, move_tag_id: {tagId, tagName}."
    },
    "confirm": {
      "type": "boolean",
      "description": "Required (true) for delete/publish/high-impact operations."
    }
  },
  "required": [
    "operation"
  ]
}
```

</details>

<a id="tool-gtm_clients-3fa51ec5"></a>

## gtm_clients

Handler: Dispatches operation (create, delete, get, list, revert, update) to the matching Google Tag Manager v2 discovery REST method, builds hierarchical path IDs, filters query parameters, and forwards body JSON.

```text
Google Tag Manager: clients. operation = one of [create, delete, get, list, revert, update]. 'email' is OPTIONAL — omit it to act as the server's default Google account, or pass one to override. GTM nests accounts > containers > workspaces > {tags,triggers,variables,...}: pass every path id down to the level you target (e.g. a tag needs accountId+containerId+workspaceId+tagId), and use the list operations top-down to discover ids you don't have. 'body' carries the GTM resource JSON for create/update; delete/publish/high-impact ops need confirm:true.
```

[Source](https://github.com/b-buller/gtm-mcp/blob/c5448fd082cce5280943bd590595de6ea2076809/src/gtm.js#L186-L244) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "operation": {
      "type": "string",
      "enum": [
        "create",
        "delete",
        "get",
        "list",
        "revert",
        "update"
      ],
      "description": "Which operation to perform."
    },
    "email": {
      "type": "string",
      "description": "Optional. Email of the connected Google account to act as; omit to use the server default. Its OAuth token is used."
    },
    "accountId": {
      "type": "string",
      "description": "GTM account id (top level; list via gtm_accounts)."
    },
    "containerId": {
      "type": "string",
      "description": "GTM container id (under an account; list via gtm_containers)."
    },
    "workspaceId": {
      "type": "string",
      "description": "GTM workspace id (under a container; list via gtm_workspaces)."
    },
    "clientId": {
      "type": "string",
      "description": "Id of the client being targeted (the deepest path id is the resource itself)."
    },
    "body": {
      "type": "object",
      "description": "GTM resource JSON (create/update/etc.)."
    },
    "pageToken": {
      "type": "string"
    },
    "fingerprint": {
      "type": "string"
    },
    "query": {
      "type": "object",
      "description": "Extra query params for special ops, e.g. combine: {containerId}, move_tag_id: {tagId, tagName}."
    },
    "confirm": {
      "type": "boolean",
      "description": "Required (true) for delete/publish/high-impact operations."
    }
  },
  "required": [
    "operation"
  ]
}
```

</details>

<a id="tool-gtm_containers-0387d754"></a>

## gtm_containers

Handler: Dispatches operation (combine, create, delete, get, list, lookup, move\_tag\_id, snippet, update) to the matching Google Tag Manager v2 discovery REST method, builds hierarchical path IDs, filters query parameters, and forwards body JSON.

```text
Google Tag Manager: containers. operation = one of [combine, create, delete, get, list, lookup, move_tag_id, snippet, update]. 'email' is OPTIONAL — omit it to act as the server's default Google account, or pass one to override. GTM nests accounts > containers > workspaces > {tags,triggers,variables,...}: pass every path id down to the level you target (e.g. a tag needs accountId+containerId+workspaceId+tagId), and use the list operations top-down to discover ids you don't have. 'body' carries the GTM resource JSON for create/update; delete/publish/high-impact ops need confirm:true.
```

[Source](https://github.com/b-buller/gtm-mcp/blob/c5448fd082cce5280943bd590595de6ea2076809/src/gtm.js#L186-L244) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "operation": {
      "type": "string",
      "enum": [
        "combine",
        "create",
        "delete",
        "get",
        "list",
        "lookup",
        "move_tag_id",
        "snippet",
        "update"
      ],
      "description": "Which operation to perform."
    },
    "email": {
      "type": "string",
      "description": "Optional. Email of the connected Google account to act as; omit to use the server default. Its OAuth token is used."
    },
    "accountId": {
      "type": "string",
      "description": "GTM account id (top level; list via gtm_accounts)."
    },
    "containerId": {
      "type": "string",
      "description": "GTM container id (under an account; list via gtm_containers)."
    },
    "body": {
      "type": "object",
      "description": "GTM resource JSON (create/update/etc.)."
    },
    "pageToken": {
      "type": "string"
    },
    "fingerprint": {
      "type": "string"
    },
    "query": {
      "type": "object",
      "description": "Extra query params for special ops, e.g. combine: {containerId}, move_tag_id: {tagId, tagName}."
    },
    "confirm": {
      "type": "boolean",
      "description": "Required (true) for delete/publish/high-impact operations."
    }
  },
  "required": [
    "operation"
  ]
}
```

</details>

<a id="tool-gtm_destinations-7961916b"></a>

## gtm_destinations

Handler: Dispatches operation (get, link, list) to the matching Google Tag Manager v2 discovery REST method, builds hierarchical path IDs, filters query parameters, and forwards body JSON.

```text
Google Tag Manager: destinations. operation = one of [get, link, list]. 'email' is OPTIONAL — omit it to act as the server's default Google account, or pass one to override. GTM nests accounts > containers > workspaces > {tags,triggers,variables,...}: pass every path id down to the level you target (e.g. a tag needs accountId+containerId+workspaceId+tagId), and use the list operations top-down to discover ids you don't have. 'body' carries the GTM resource JSON for create/update; delete/publish/high-impact ops need confirm:true.
```

[Source](https://github.com/b-buller/gtm-mcp/blob/c5448fd082cce5280943bd590595de6ea2076809/src/gtm.js#L186-L244) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "operation": {
      "type": "string",
      "enum": [
        "get",
        "link",
        "list"
      ],
      "description": "Which operation to perform."
    },
    "email": {
      "type": "string",
      "description": "Optional. Email of the connected Google account to act as; omit to use the server default. Its OAuth token is used."
    },
    "accountId": {
      "type": "string",
      "description": "GTM account id (top level; list via gtm_accounts)."
    },
    "containerId": {
      "type": "string",
      "description": "GTM container id (under an account; list via gtm_containers)."
    },
    "destinationId": {
      "type": "string",
      "description": "Id of the destination being targeted (the deepest path id is the resource itself)."
    },
    "query": {
      "type": "object",
      "description": "Extra query params for special ops, e.g. combine: {containerId}, move_tag_id: {tagId, tagName}."
    }
  },
  "required": [
    "operation"
  ]
}
```

</details>

<a id="tool-gtm_environments-01981833"></a>

## gtm_environments

Handler: Dispatches operation (create, delete, get, list, reauthorize, update) to the matching Google Tag Manager v2 discovery REST method, builds hierarchical path IDs, filters query parameters, and forwards body JSON.

```text
Google Tag Manager: environments. operation = one of [create, delete, get, list, reauthorize, update]. 'email' is OPTIONAL — omit it to act as the server's default Google account, or pass one to override. GTM nests accounts > containers > workspaces > {tags,triggers,variables,...}: pass every path id down to the level you target (e.g. a tag needs accountId+containerId+workspaceId+tagId), and use the list operations top-down to discover ids you don't have. 'body' carries the GTM resource JSON for create/update; delete/publish/high-impact ops need confirm:true.
```

[Source](https://github.com/b-buller/gtm-mcp/blob/c5448fd082cce5280943bd590595de6ea2076809/src/gtm.js#L186-L244) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "operation": {
      "type": "string",
      "enum": [
        "create",
        "delete",
        "get",
        "list",
        "reauthorize",
        "update"
      ],
      "description": "Which operation to perform."
    },
    "email": {
      "type": "string",
      "description": "Optional. Email of the connected Google account to act as; omit to use the server default. Its OAuth token is used."
    },
    "accountId": {
      "type": "string",
      "description": "GTM account id (top level; list via gtm_accounts)."
    },
    "containerId": {
      "type": "string",
      "description": "GTM container id (under an account; list via gtm_containers)."
    },
    "environmentId": {
      "type": "string",
      "description": "Id of the environment being targeted (the deepest path id is the resource itself)."
    },
    "body": {
      "type": "object",
      "description": "GTM resource JSON (create/update/etc.)."
    },
    "pageToken": {
      "type": "string"
    },
    "fingerprint": {
      "type": "string"
    },
    "query": {
      "type": "object",
      "description": "Extra query params for special ops, e.g. combine: {containerId}, move_tag_id: {tagId, tagName}."
    },
    "confirm": {
      "type": "boolean",
      "description": "Required (true) for delete/publish/high-impact operations."
    }
  },
  "required": [
    "operation"
  ]
}
```

</details>

<a id="tool-gtm_folders-23b4280b"></a>

## gtm_folders

Handler: Dispatches operation (create, delete, entities, get, list, move\_entities\_to\_folder, revert, update) to the matching Google Tag Manager v2 discovery REST method, builds hierarchical path IDs, filters query parameters, and forwards body JSON.

```text
Google Tag Manager: folders. operation = one of [create, delete, entities, get, list, move_entities_to_folder, revert, update]. 'email' is OPTIONAL — omit it to act as the server's default Google account, or pass one to override. GTM nests accounts > containers > workspaces > {tags,triggers,variables,...}: pass every path id down to the level you target (e.g. a tag needs accountId+containerId+workspaceId+tagId), and use the list operations top-down to discover ids you don't have. 'body' carries the GTM resource JSON for create/update; delete/publish/high-impact ops need confirm:true.
```

[Source](https://github.com/b-buller/gtm-mcp/blob/c5448fd082cce5280943bd590595de6ea2076809/src/gtm.js#L186-L244) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "operation": {
      "type": "string",
      "enum": [
        "create",
        "delete",
        "entities",
        "get",
        "list",
        "move_entities_to_folder",
        "revert",
        "update"
      ],
      "description": "Which operation to perform."
    },
    "email": {
      "type": "string",
      "description": "Optional. Email of the connected Google account to act as; omit to use the server default. Its OAuth token is used."
    },
    "accountId": {
      "type": "string",
      "description": "GTM account id (top level; list via gtm_accounts)."
    },
    "containerId": {
      "type": "string",
      "description": "GTM container id (under an account; list via gtm_containers)."
    },
    "workspaceId": {
      "type": "string",
      "description": "GTM workspace id (under a container; list via gtm_workspaces)."
    },
    "folderId": {
      "type": "string",
      "description": "Id of the folder being targeted (the deepest path id is the resource itself)."
    },
    "body": {
      "type": "object",
      "description": "GTM resource JSON (create/update/etc.)."
    },
    "pageToken": {
      "type": "string"
    },
    "fingerprint": {
      "type": "string"
    },
    "query": {
      "type": "object",
      "description": "Extra query params for special ops, e.g. combine: {containerId}, move_tag_id: {tagId, tagName}."
    },
    "confirm": {
      "type": "boolean",
      "description": "Required (true) for delete/publish/high-impact operations."
    }
  },
  "required": [
    "operation"
  ]
}
```

</details>

<a id="tool-gtm_gtag_config-f5a9eddd"></a>

## gtm_gtag_config

Handler: Dispatches operation (create, delete, get, list, update) to the matching Google Tag Manager v2 discovery REST method, builds hierarchical path IDs, filters query parameters, and forwards body JSON.

```text
Google Tag Manager: gtag config. operation = one of [create, delete, get, list, update]. 'email' is OPTIONAL — omit it to act as the server's default Google account, or pass one to override. GTM nests accounts > containers > workspaces > {tags,triggers,variables,...}: pass every path id down to the level you target (e.g. a tag needs accountId+containerId+workspaceId+tagId), and use the list operations top-down to discover ids you don't have. 'body' carries the GTM resource JSON for create/update; delete/publish/high-impact ops need confirm:true.
```

[Source](https://github.com/b-buller/gtm-mcp/blob/c5448fd082cce5280943bd590595de6ea2076809/src/gtm.js#L186-L244) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "operation": {
      "type": "string",
      "enum": [
        "create",
        "delete",
        "get",
        "list",
        "update"
      ],
      "description": "Which operation to perform."
    },
    "email": {
      "type": "string",
      "description": "Optional. Email of the connected Google account to act as; omit to use the server default. Its OAuth token is used."
    },
    "accountId": {
      "type": "string",
      "description": "GTM account id (top level; list via gtm_accounts)."
    },
    "containerId": {
      "type": "string",
      "description": "GTM container id (under an account; list via gtm_containers)."
    },
    "workspaceId": {
      "type": "string",
      "description": "GTM workspace id (under a container; list via gtm_workspaces)."
    },
    "gtagConfigId": {
      "type": "string",
      "description": "Id of the gtagConfig being targeted (the deepest path id is the resource itself)."
    },
    "body": {
      "type": "object",
      "description": "GTM resource JSON (create/update/etc.)."
    },
    "pageToken": {
      "type": "string"
    },
    "fingerprint": {
      "type": "string"
    },
    "query": {
      "type": "object",
      "description": "Extra query params for special ops, e.g. combine: {containerId}, move_tag_id: {tagId, tagName}."
    },
    "confirm": {
      "type": "boolean",
      "description": "Required (true) for delete/publish/high-impact operations."
    }
  },
  "required": [
    "operation"
  ]
}
```

</details>

<a id="tool-gtm_tags-e53dcde4"></a>

## gtm_tags

Handler: Dispatches operation (create, delete, get, list, revert, update) to the matching Google Tag Manager v2 discovery REST method, builds hierarchical path IDs, filters query parameters, and forwards body JSON.

```text
Google Tag Manager: tags. operation = one of [create, delete, get, list, revert, update]. 'email' is OPTIONAL — omit it to act as the server's default Google account, or pass one to override. GTM nests accounts > containers > workspaces > {tags,triggers,variables,...}: pass every path id down to the level you target (e.g. a tag needs accountId+containerId+workspaceId+tagId), and use the list operations top-down to discover ids you don't have. 'body' carries the GTM resource JSON for create/update; delete/publish/high-impact ops need confirm:true.
```

[Source](https://github.com/b-buller/gtm-mcp/blob/c5448fd082cce5280943bd590595de6ea2076809/src/gtm.js#L186-L244) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "operation": {
      "type": "string",
      "enum": [
        "create",
        "delete",
        "get",
        "list",
        "revert",
        "update"
      ],
      "description": "Which operation to perform."
    },
    "email": {
      "type": "string",
      "description": "Optional. Email of the connected Google account to act as; omit to use the server default. Its OAuth token is used."
    },
    "accountId": {
      "type": "string",
      "description": "GTM account id (top level; list via gtm_accounts)."
    },
    "containerId": {
      "type": "string",
      "description": "GTM container id (under an account; list via gtm_containers)."
    },
    "workspaceId": {
      "type": "string",
      "description": "GTM workspace id (under a container; list via gtm_workspaces)."
    },
    "tagId": {
      "type": "string",
      "description": "Id of the tag being targeted (the deepest path id is the resource itself)."
    },
    "body": {
      "type": "object",
      "description": "GTM resource JSON (create/update/etc.)."
    },
    "pageToken": {
      "type": "string"
    },
    "fingerprint": {
      "type": "string"
    },
    "query": {
      "type": "object",
      "description": "Extra query params for special ops, e.g. combine: {containerId}, move_tag_id: {tagId, tagName}."
    },
    "confirm": {
      "type": "boolean",
      "description": "Required (true) for delete/publish/high-impact operations."
    }
  },
  "required": [
    "operation"
  ]
}
```

</details>

<a id="tool-gtm_templates-168a5acc"></a>

## gtm_templates

Handler: Dispatches operation (create, delete, get, import\_from\_gallery, list, revert, update) to the matching Google Tag Manager v2 discovery REST method, builds hierarchical path IDs, filters query parameters, and forwards body JSON.

```text
Google Tag Manager: templates. operation = one of [create, delete, get, import_from_gallery, list, revert, update]. 'email' is OPTIONAL — omit it to act as the server's default Google account, or pass one to override. GTM nests accounts > containers > workspaces > {tags,triggers,variables,...}: pass every path id down to the level you target (e.g. a tag needs accountId+containerId+workspaceId+tagId), and use the list operations top-down to discover ids you don't have. 'body' carries the GTM resource JSON for create/update; delete/publish/high-impact ops need confirm:true.
```

[Source](https://github.com/b-buller/gtm-mcp/blob/c5448fd082cce5280943bd590595de6ea2076809/src/gtm.js#L186-L244) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "operation": {
      "type": "string",
      "enum": [
        "create",
        "delete",
        "get",
        "import_from_gallery",
        "list",
        "revert",
        "update"
      ],
      "description": "Which operation to perform."
    },
    "email": {
      "type": "string",
      "description": "Optional. Email of the connected Google account to act as; omit to use the server default. Its OAuth token is used."
    },
    "accountId": {
      "type": "string",
      "description": "GTM account id (top level; list via gtm_accounts)."
    },
    "containerId": {
      "type": "string",
      "description": "GTM container id (under an account; list via gtm_containers)."
    },
    "workspaceId": {
      "type": "string",
      "description": "GTM workspace id (under a container; list via gtm_workspaces)."
    },
    "templateId": {
      "type": "string",
      "description": "Id of the template being targeted (the deepest path id is the resource itself)."
    },
    "body": {
      "type": "object",
      "description": "GTM resource JSON (create/update/etc.)."
    },
    "pageToken": {
      "type": "string"
    },
    "fingerprint": {
      "type": "string"
    },
    "query": {
      "type": "object",
      "description": "Extra query params for special ops, e.g. combine: {containerId}, move_tag_id: {tagId, tagName}."
    },
    "confirm": {
      "type": "boolean",
      "description": "Required (true) for delete/publish/high-impact operations."
    }
  },
  "required": [
    "operation"
  ]
}
```

</details>

<a id="tool-gtm_transformations-2f4f00a6"></a>

## gtm_transformations

Handler: Dispatches operation (create, delete, get, list, revert, update) to the matching Google Tag Manager v2 discovery REST method, builds hierarchical path IDs, filters query parameters, and forwards body JSON.

```text
Google Tag Manager: transformations. operation = one of [create, delete, get, list, revert, update]. 'email' is OPTIONAL — omit it to act as the server's default Google account, or pass one to override. GTM nests accounts > containers > workspaces > {tags,triggers,variables,...}: pass every path id down to the level you target (e.g. a tag needs accountId+containerId+workspaceId+tagId), and use the list operations top-down to discover ids you don't have. 'body' carries the GTM resource JSON for create/update; delete/publish/high-impact ops need confirm:true.
```

[Source](https://github.com/b-buller/gtm-mcp/blob/c5448fd082cce5280943bd590595de6ea2076809/src/gtm.js#L186-L244) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "operation": {
      "type": "string",
      "enum": [
        "create",
        "delete",
        "get",
        "list",
        "revert",
        "update"
      ],
      "description": "Which operation to perform."
    },
    "email": {
      "type": "string",
      "description": "Optional. Email of the connected Google account to act as; omit to use the server default. Its OAuth token is used."
    },
    "accountId": {
      "type": "string",
      "description": "GTM account id (top level; list via gtm_accounts)."
    },
    "containerId": {
      "type": "string",
      "description": "GTM container id (under an account; list via gtm_containers)."
    },
    "workspaceId": {
      "type": "string",
      "description": "GTM workspace id (under a container; list via gtm_workspaces)."
    },
    "transformationId": {
      "type": "string",
      "description": "Id of the transformation being targeted (the deepest path id is the resource itself)."
    },
    "body": {
      "type": "object",
      "description": "GTM resource JSON (create/update/etc.)."
    },
    "pageToken": {
      "type": "string"
    },
    "fingerprint": {
      "type": "string"
    },
    "query": {
      "type": "object",
      "description": "Extra query params for special ops, e.g. combine: {containerId}, move_tag_id: {tagId, tagName}."
    },
    "confirm": {
      "type": "boolean",
      "description": "Required (true) for delete/publish/high-impact operations."
    }
  },
  "required": [
    "operation"
  ]
}
```

</details>

<a id="tool-gtm_triggers-4a7b476c"></a>

## gtm_triggers

Handler: Dispatches operation (create, delete, get, list, revert, update) to the matching Google Tag Manager v2 discovery REST method, builds hierarchical path IDs, filters query parameters, and forwards body JSON.

```text
Google Tag Manager: triggers. operation = one of [create, delete, get, list, revert, update]. 'email' is OPTIONAL — omit it to act as the server's default Google account, or pass one to override. GTM nests accounts > containers > workspaces > {tags,triggers,variables,...}: pass every path id down to the level you target (e.g. a tag needs accountId+containerId+workspaceId+tagId), and use the list operations top-down to discover ids you don't have. 'body' carries the GTM resource JSON for create/update; delete/publish/high-impact ops need confirm:true.
```

[Source](https://github.com/b-buller/gtm-mcp/blob/c5448fd082cce5280943bd590595de6ea2076809/src/gtm.js#L186-L244) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "operation": {
      "type": "string",
      "enum": [
        "create",
        "delete",
        "get",
        "list",
        "revert",
        "update"
      ],
      "description": "Which operation to perform."
    },
    "email": {
      "type": "string",
      "description": "Optional. Email of the connected Google account to act as; omit to use the server default. Its OAuth token is used."
    },
    "accountId": {
      "type": "string",
      "description": "GTM account id (top level; list via gtm_accounts)."
    },
    "containerId": {
      "type": "string",
      "description": "GTM container id (under an account; list via gtm_containers)."
    },
    "workspaceId": {
      "type": "string",
      "description": "GTM workspace id (under a container; list via gtm_workspaces)."
    },
    "triggerId": {
      "type": "string",
      "description": "Id of the trigger being targeted (the deepest path id is the resource itself)."
    },
    "body": {
      "type": "object",
      "description": "GTM resource JSON (create/update/etc.)."
    },
    "pageToken": {
      "type": "string"
    },
    "fingerprint": {
      "type": "string"
    },
    "query": {
      "type": "object",
      "description": "Extra query params for special ops, e.g. combine: {containerId}, move_tag_id: {tagId, tagName}."
    },
    "confirm": {
      "type": "boolean",
      "description": "Required (true) for delete/publish/high-impact operations."
    }
  },
  "required": [
    "operation"
  ]
}
```

</details>

<a id="tool-gtm_user_permissions-8cff2fda"></a>

## gtm_user_permissions

Handler: Dispatches operation (create, delete, get, list, update) to the matching Google Tag Manager v2 discovery REST method, builds hierarchical path IDs, filters query parameters, and forwards body JSON.

```text
Google Tag Manager: user permissions. operation = one of [create, delete, get, list, update]. 'email' is OPTIONAL — omit it to act as the server's default Google account, or pass one to override. GTM nests accounts > containers > workspaces > {tags,triggers,variables,...}: pass every path id down to the level you target (e.g. a tag needs accountId+containerId+workspaceId+tagId), and use the list operations top-down to discover ids you don't have. 'body' carries the GTM resource JSON for create/update; delete/publish/high-impact ops need confirm:true.
```

[Source](https://github.com/b-buller/gtm-mcp/blob/c5448fd082cce5280943bd590595de6ea2076809/src/gtm.js#L186-L244) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "operation": {
      "type": "string",
      "enum": [
        "create",
        "delete",
        "get",
        "list",
        "update"
      ],
      "description": "Which operation to perform."
    },
    "email": {
      "type": "string",
      "description": "Optional. Email of the connected Google account to act as; omit to use the server default. Its OAuth token is used."
    },
    "accountId": {
      "type": "string",
      "description": "GTM account id (top level; list via gtm_accounts)."
    },
    "userPermissionId": {
      "type": "string",
      "description": "Id of the userPermission being targeted (the deepest path id is the resource itself)."
    },
    "body": {
      "type": "object",
      "description": "GTM resource JSON (create/update/etc.)."
    },
    "pageToken": {
      "type": "string"
    },
    "query": {
      "type": "object",
      "description": "Extra query params for special ops, e.g. combine: {containerId}, move_tag_id: {tagId, tagName}."
    },
    "confirm": {
      "type": "boolean",
      "description": "Required (true) for delete/publish/high-impact operations."
    }
  },
  "required": [
    "operation"
  ]
}
```

</details>

<a id="tool-gtm_variables-1337c750"></a>

## gtm_variables

Handler: Dispatches operation (create, delete, get, list, revert, update) to the matching Google Tag Manager v2 discovery REST method, builds hierarchical path IDs, filters query parameters, and forwards body JSON.

```text
Google Tag Manager: variables. operation = one of [create, delete, get, list, revert, update]. 'email' is OPTIONAL — omit it to act as the server's default Google account, or pass one to override. GTM nests accounts > containers > workspaces > {tags,triggers,variables,...}: pass every path id down to the level you target (e.g. a tag needs accountId+containerId+workspaceId+tagId), and use the list operations top-down to discover ids you don't have. 'body' carries the GTM resource JSON for create/update; delete/publish/high-impact ops need confirm:true.
```

[Source](https://github.com/b-buller/gtm-mcp/blob/c5448fd082cce5280943bd590595de6ea2076809/src/gtm.js#L186-L244) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "operation": {
      "type": "string",
      "enum": [
        "create",
        "delete",
        "get",
        "list",
        "revert",
        "update"
      ],
      "description": "Which operation to perform."
    },
    "email": {
      "type": "string",
      "description": "Optional. Email of the connected Google account to act as; omit to use the server default. Its OAuth token is used."
    },
    "accountId": {
      "type": "string",
      "description": "GTM account id (top level; list via gtm_accounts)."
    },
    "containerId": {
      "type": "string",
      "description": "GTM container id (under an account; list via gtm_containers)."
    },
    "workspaceId": {
      "type": "string",
      "description": "GTM workspace id (under a container; list via gtm_workspaces)."
    },
    "variableId": {
      "type": "string",
      "description": "Id of the variable being targeted (the deepest path id is the resource itself)."
    },
    "body": {
      "type": "object",
      "description": "GTM resource JSON (create/update/etc.)."
    },
    "pageToken": {
      "type": "string"
    },
    "fingerprint": {
      "type": "string"
    },
    "query": {
      "type": "object",
      "description": "Extra query params for special ops, e.g. combine: {containerId}, move_tag_id: {tagId, tagName}."
    },
    "confirm": {
      "type": "boolean",
      "description": "Required (true) for delete/publish/high-impact operations."
    }
  },
  "required": [
    "operation"
  ]
}
```

</details>

<a id="tool-gtm_version_headers-15168c90"></a>

## gtm_version_headers

Handler: Dispatches operation (latest, list) to the matching Google Tag Manager v2 discovery REST method, builds hierarchical path IDs, filters query parameters, and forwards body JSON.

```text
Google Tag Manager: version headers. operation = one of [latest, list]. 'email' is OPTIONAL — omit it to act as the server's default Google account, or pass one to override. GTM nests accounts > containers > workspaces > {tags,triggers,variables,...}: pass every path id down to the level you target (e.g. a tag needs accountId+containerId+workspaceId+tagId), and use the list operations top-down to discover ids you don't have. 'body' carries the GTM resource JSON for create/update; delete/publish/high-impact ops need confirm:true.
```

[Source](https://github.com/b-buller/gtm-mcp/blob/c5448fd082cce5280943bd590595de6ea2076809/src/gtm.js#L186-L244) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "operation": {
      "type": "string",
      "enum": [
        "latest",
        "list"
      ],
      "description": "Which operation to perform."
    },
    "email": {
      "type": "string",
      "description": "Optional. Email of the connected Google account to act as; omit to use the server default. Its OAuth token is used."
    },
    "accountId": {
      "type": "string",
      "description": "GTM account id (top level; list via gtm_accounts)."
    },
    "containerId": {
      "type": "string",
      "description": "GTM container id (under an account; list via gtm_containers)."
    },
    "pageToken": {
      "type": "string"
    },
    "includeDeleted": {
      "type": "boolean"
    },
    "query": {
      "type": "object",
      "description": "Extra query params for special ops, e.g. combine: {containerId}, move_tag_id: {tagId, tagName}."
    }
  },
  "required": [
    "operation"
  ]
}
```

</details>

<a id="tool-gtm_versions-55603b9a"></a>

## gtm_versions

Handler: Dispatches operation (delete, get, live, publish, set\_latest, undelete, update) to the matching Google Tag Manager v2 discovery REST method, builds hierarchical path IDs, filters query parameters, and forwards body JSON.

```text
Google Tag Manager: versions. operation = one of [delete, get, live, publish, set_latest, undelete, update]. 'email' is OPTIONAL — omit it to act as the server's default Google account, or pass one to override. GTM nests accounts > containers > workspaces > {tags,triggers,variables,...}: pass every path id down to the level you target (e.g. a tag needs accountId+containerId+workspaceId+tagId), and use the list operations top-down to discover ids you don't have. 'body' carries the GTM resource JSON for create/update; delete/publish/high-impact ops need confirm:true.
```

[Source](https://github.com/b-buller/gtm-mcp/blob/c5448fd082cce5280943bd590595de6ea2076809/src/gtm.js#L186-L244) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "operation": {
      "type": "string",
      "enum": [
        "delete",
        "get",
        "live",
        "publish",
        "set_latest",
        "undelete",
        "update"
      ],
      "description": "Which operation to perform."
    },
    "email": {
      "type": "string",
      "description": "Optional. Email of the connected Google account to act as; omit to use the server default. Its OAuth token is used."
    },
    "accountId": {
      "type": "string",
      "description": "GTM account id (top level; list via gtm_accounts)."
    },
    "containerId": {
      "type": "string",
      "description": "GTM container id (under an account; list via gtm_containers)."
    },
    "containerVersionId": {
      "type": "string",
      "description": "Id of the containerVersion being targeted (the deepest path id is the resource itself)."
    },
    "body": {
      "type": "object",
      "description": "GTM resource JSON (create/update/etc.)."
    },
    "fingerprint": {
      "type": "string"
    },
    "query": {
      "type": "object",
      "description": "Extra query params for special ops, e.g. combine: {containerId}, move_tag_id: {tagId, tagName}."
    },
    "confirm": {
      "type": "boolean",
      "description": "Required (true) for delete/publish/high-impact operations."
    }
  },
  "required": [
    "operation"
  ]
}
```

</details>

<a id="tool-gtm_workspaces-2cbed623"></a>

## gtm_workspaces

Handler: Dispatches operation (bulk\_update, create, create\_version, delete, get, getStatus, list, quick\_preview, resolve\_conflict, sync, update) to the matching Google Tag Manager v2 discovery REST method, builds hierarchical path IDs, filters query parameters, and forwards body JSON.

```text
Google Tag Manager: workspaces. operation = one of [bulk_update, create, create_version, delete, get, getStatus, list, quick_preview, resolve_conflict, sync, update]. 'email' is OPTIONAL — omit it to act as the server's default Google account, or pass one to override. GTM nests accounts > containers > workspaces > {tags,triggers,variables,...}: pass every path id down to the level you target (e.g. a tag needs accountId+containerId+workspaceId+tagId), and use the list operations top-down to discover ids you don't have. 'body' carries the GTM resource JSON for create/update; delete/publish/high-impact ops need confirm:true.
```

[Source](https://github.com/b-buller/gtm-mcp/blob/c5448fd082cce5280943bd590595de6ea2076809/src/gtm.js#L186-L244) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "operation": {
      "type": "string",
      "enum": [
        "bulk_update",
        "create",
        "create_version",
        "delete",
        "get",
        "getStatus",
        "list",
        "quick_preview",
        "resolve_conflict",
        "sync",
        "update"
      ],
      "description": "Which operation to perform."
    },
    "email": {
      "type": "string",
      "description": "Optional. Email of the connected Google account to act as; omit to use the server default. Its OAuth token is used."
    },
    "accountId": {
      "type": "string",
      "description": "GTM account id (top level; list via gtm_accounts)."
    },
    "containerId": {
      "type": "string",
      "description": "GTM container id (under an account; list via gtm_containers)."
    },
    "workspaceId": {
      "type": "string",
      "description": "GTM workspace id (under a container; list via gtm_workspaces)."
    },
    "body": {
      "type": "object",
      "description": "GTM resource JSON (create/update/etc.)."
    },
    "pageToken": {
      "type": "string"
    },
    "fingerprint": {
      "type": "string"
    },
    "query": {
      "type": "object",
      "description": "Extra query params for special ops, e.g. combine: {containerId}, move_tag_id: {tagId, tagName}."
    },
    "confirm": {
      "type": "boolean",
      "description": "Required (true) for delete/publish/high-impact operations."
    }
  },
  "required": [
    "operation"
  ]
}
```

</details>

<a id="tool-gtm_zones-24eb69a8"></a>

## gtm_zones

Handler: Dispatches operation (create, delete, get, list, revert, update) to the matching Google Tag Manager v2 discovery REST method, builds hierarchical path IDs, filters query parameters, and forwards body JSON.

```text
Google Tag Manager: zones. operation = one of [create, delete, get, list, revert, update]. 'email' is OPTIONAL — omit it to act as the server's default Google account, or pass one to override. GTM nests accounts > containers > workspaces > {tags,triggers,variables,...}: pass every path id down to the level you target (e.g. a tag needs accountId+containerId+workspaceId+tagId), and use the list operations top-down to discover ids you don't have. 'body' carries the GTM resource JSON for create/update; delete/publish/high-impact ops need confirm:true.
```

[Source](https://github.com/b-buller/gtm-mcp/blob/c5448fd082cce5280943bd590595de6ea2076809/src/gtm.js#L186-L244) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "operation": {
      "type": "string",
      "enum": [
        "create",
        "delete",
        "get",
        "list",
        "revert",
        "update"
      ],
      "description": "Which operation to perform."
    },
    "email": {
      "type": "string",
      "description": "Optional. Email of the connected Google account to act as; omit to use the server default. Its OAuth token is used."
    },
    "accountId": {
      "type": "string",
      "description": "GTM account id (top level; list via gtm_accounts)."
    },
    "containerId": {
      "type": "string",
      "description": "GTM container id (under an account; list via gtm_containers)."
    },
    "workspaceId": {
      "type": "string",
      "description": "GTM workspace id (under a container; list via gtm_workspaces)."
    },
    "zoneId": {
      "type": "string",
      "description": "Id of the zone being targeted (the deepest path id is the resource itself)."
    },
    "body": {
      "type": "object",
      "description": "GTM resource JSON (create/update/etc.)."
    },
    "pageToken": {
      "type": "string"
    },
    "fingerprint": {
      "type": "string"
    },
    "query": {
      "type": "object",
      "description": "Extra query params for special ops, e.g. combine: {containerId}, move_tag_id: {tagId, tagName}."
    },
    "confirm": {
      "type": "boolean",
      "description": "Required (true) for delete/publish/high-impact operations."
    }
  },
  "required": [
    "operation"
  ]
}
```

</details>
