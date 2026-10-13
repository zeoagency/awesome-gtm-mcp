# dhawalshah/google-tag-manager-mcp

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/dhawalshah/google-tag-manager-mcp) · [Machine-readable inventory](../data/mcps/dhawalshah--google-tag-manager-mcp.json)

**18 extracted tools.** Routes resource actions through shared GTM API tools, including conflict resolution and confirmed destructive changes.

Snapshot: 2026-10-13 · [f670034db183](https://github.com/dhawalshah/google-tag-manager-mcp/tree/f670034db1835c38e5ecf48c26c1b8aaaa0cfcd5) · Method: mixed.

Exposure: All 18 tools always registered; no conditional read/write groups. HTTP /mcp requires server-issued OAuth bearer; stdio operations require MCP_USER_EMAIL and local OAuth token. confirm gates selected destructive actions but does not hide tools.

## Limits

- Offline FastMCP registration used current installed unpinned dependency version and inert OAuth import shim; no GTM operations/authentication executed. Config and params are unrestricted dictionaries in upstream schemas, with no resource-specific fields or action enums. Destination link is marked deprecated by upstream.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`gtm_account`](#tool-gtm_account-da3f1407) | GTM | Routes get, list, update actions for GTM accounts through the shared authenticated v2 REST dispatcher. |
| [`gtm_container`](#tool-gtm_container-edc9968d) | GTM | Routes combine, create, get, list, lookup, move\_tag\_id, remove, snippet, update actions for GTM containers through the shared authenticated v2 REST dispatcher. Requires confirm=true for combine, move\_tag\_id, remove. |
| [`gtm_workspace`](#tool-gtm_workspace-ee5e8b97) | GTM | Routes create, create\_version, get, get\_status, list, quick\_preview, remove, resolve\_conflict, sync, update actions for GTM workspaces through the shared authenticated v2 REST dispatcher. Requires confirm=true for create\_version, remove, resolve\_conflict, sync. |
| [`gtm_tag`](#tool-gtm_tag-c3e06f2b) | GTM | Routes create, get, list, remove, revert, update actions for GTM tags through the shared authenticated v2 REST dispatcher. Requires confirm=true for remove, revert. |
| [`gtm_trigger`](#tool-gtm_trigger-5c5777f3) | GTM | Routes create, get, list, remove, revert, update actions for GTM triggers through the shared authenticated v2 REST dispatcher. Requires confirm=true for remove, revert. |
| [`gtm_variable`](#tool-gtm_variable-ec512642) | GTM | Routes create, get, list, remove, revert, update actions for GTM variables through the shared authenticated v2 REST dispatcher. Requires confirm=true for remove, revert. |
| [`gtm_built_in_variable`](#tool-gtm_built_in_variable-779be1c3) | GTM | Routes create, list, remove, revert actions for GTM built\_in\_variables through the shared authenticated v2 REST dispatcher. Requires confirm=true for remove, revert. |
| [`gtm_folder`](#tool-gtm_folder-98e6da8b) | GTM | Routes create, entities, get, list, move\_entities\_to\_folder, remove, revert, update actions for GTM folders through the shared authenticated v2 REST dispatcher. Requires confirm=true for move\_entities\_to\_folder, remove, revert. |
| [`gtm_client`](#tool-gtm_client-dc17ee47) | GTM | Routes create, get, list, remove, revert, update actions for GTM clients through the shared authenticated v2 REST dispatcher. Requires confirm=true for remove, revert. |
| [`gtm_zone`](#tool-gtm_zone-78bf4872) | GTM | Routes create, get, list, remove, revert, update actions for GTM zones through the shared authenticated v2 REST dispatcher. Requires confirm=true for remove, revert. |
| [`gtm_template`](#tool-gtm_template-47833aba) | GTM | Routes create, get, import\_from\_gallery, list, remove, revert, update actions for GTM templates through the shared authenticated v2 REST dispatcher. Requires confirm=true for import\_from\_gallery, remove, revert. |
| [`gtm_transformation`](#tool-gtm_transformation-c270ba51) | GTM | Routes create, get, list, remove, revert, update actions for GTM transformations through the shared authenticated v2 REST dispatcher. Requires confirm=true for remove, revert. |
| [`gtm_gtag_config`](#tool-gtm_gtag_config-f5a9eddd) | GTM | Routes create, get, list, remove, update actions for GTM gtag\_config through the shared authenticated v2 REST dispatcher. Requires confirm=true for remove. |
| [`gtm_destination`](#tool-gtm_destination-0c1e6401) | GTM | Routes get, link, list actions for GTM destinations through the shared authenticated v2 REST dispatcher. Requires confirm=true for link. |
| [`gtm_environment`](#tool-gtm_environment-9aa46ece) | GTM | Routes create, get, list, reauthorize, remove, update actions for GTM environments through the shared authenticated v2 REST dispatcher. Requires confirm=true for reauthorize, remove. |
| [`gtm_version`](#tool-gtm_version-759608b8) | GTM | Routes get, live, publish, remove, set\_latest, undelete, update actions for GTM versions through the shared authenticated v2 REST dispatcher. Requires confirm=true for publish, remove, set\_latest, undelete. |
| [`gtm_version_header`](#tool-gtm_version_header-e1c252fe) | GTM | Routes latest, list actions for GTM version\_headers through the shared authenticated v2 REST dispatcher. |
| [`gtm_user_permission`](#tool-gtm_user_permission-cbd8ceca) | GTM | Routes create, get, list, remove, update actions for GTM user\_permissions through the shared authenticated v2 REST dispatcher. Requires confirm=true for remove. |

<a id="tool-gtm_account-da3f1407"></a>

## gtm_account

Handler: Routes get, list, update actions for GTM accounts through the shared authenticated v2 REST dispatcher.

```text
Manage GTM accounts.
```

[Source](https://github.com/dhawalshah/google-tag-manager-mcp/blob/f670034db1835c38e5ecf48c26c1b8aaaa0cfcd5/gtm/accounts.py#L12-L27) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "action": {
      "type": "string"
    },
    "parent": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "path": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "config": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "params": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    }
  },
  "required": [
    "action"
  ],
  "type": "object"
}
```

</details>

<a id="tool-gtm_container-edc9968d"></a>

## gtm_container

Handler: Routes combine, create, get, list, lookup, move\_tag\_id, remove, snippet, update actions for GTM containers through the shared authenticated v2 REST dispatcher. Requires confirm=true for combine, move\_tag\_id, remove.

```text
Manage GTM containers.

Standard CRUD (list/create: parent='accounts/{a}'; get/update/remove: path='accounts/{a}/containers/{c}') plus:
  - combine:     path=<container>, params={containerId,...}, confirm=true. (destructive)
  - lookup:      params={destinationId} -> find container by destination. (read-only; no parent/path needed)
  - move_tag_id: path=<container>, params={...}, confirm=true. (destructive)
  - snippet:     path=<container> -> GTM install snippet. (read-only)
```

[Source](https://github.com/dhawalshah/google-tag-manager-mcp/blob/f670034db1835c38e5ecf48c26c1b8aaaa0cfcd5/gtm/containers.py#L14-L29) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "action": {
      "type": "string"
    },
    "parent": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "path": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "config": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "confirm": {
      "default": false,
      "type": "boolean"
    },
    "params": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    }
  },
  "required": [
    "action"
  ],
  "type": "object"
}
```

</details>

<a id="tool-gtm_workspace-ee5e8b97"></a>

## gtm_workspace

Handler: Routes create, create\_version, get, get\_status, list, quick\_preview, remove, resolve\_conflict, sync, update actions for GTM workspaces through the shared authenticated v2 REST dispatcher. Requires confirm=true for create\_version, remove, resolve\_conflict, sync.

```text
Manage GTM workspaces.

Standard CRUD (list/create: parent=<container>; get/update/remove: path=<workspace>) plus:
  - create_version:   path=<workspace>, config={name,notes}, confirm=true. (destructive)
  - get_status:       path=<workspace> -> uncommitted changes. (read-only)
  - sync:             path=<workspace>, confirm=true. (destructive)
  - quick_preview:    path=<workspace> -> preview of unsubmitted changes. (read-only)
  - resolve_conflict: path=<workspace>, config={...}, confirm=true. (destructive)
```

[Source](https://github.com/dhawalshah/google-tag-manager-mcp/blob/f670034db1835c38e5ecf48c26c1b8aaaa0cfcd5/gtm/workspaces.py#L17-L37) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "action": {
      "type": "string"
    },
    "parent": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "path": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "config": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "confirm": {
      "default": false,
      "type": "boolean"
    },
    "params": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    }
  },
  "required": [
    "action"
  ],
  "type": "object"
}
```

</details>

<a id="tool-gtm_tag-c3e06f2b"></a>

## gtm_tag

Handler: Routes create, get, list, remove, revert, update actions for GTM tags through the shared authenticated v2 REST dispatcher. Requires confirm=true for remove, revert.

```text
Manage GTM tags within a workspace.
```

[Source](https://github.com/dhawalshah/google-tag-manager-mcp/blob/f670034db1835c38e5ecf48c26c1b8aaaa0cfcd5/gtm/tags.py#L12-L26) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "action": {
      "type": "string"
    },
    "parent": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "path": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "config": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "confirm": {
      "default": false,
      "type": "boolean"
    },
    "params": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    }
  },
  "required": [
    "action"
  ],
  "type": "object"
}
```

</details>

<a id="tool-gtm_trigger-5c5777f3"></a>

## gtm_trigger

Handler: Routes create, get, list, remove, revert, update actions for GTM triggers through the shared authenticated v2 REST dispatcher. Requires confirm=true for remove, revert.

```text
Manage GTM triggers within a workspace. Same action set as gtm_tag
(create, get, list, update, remove, revert; remove/revert require confirm=true).
```

[Source](https://github.com/dhawalshah/google-tag-manager-mcp/blob/f670034db1835c38e5ecf48c26c1b8aaaa0cfcd5/gtm/triggers.py#L12-L18) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "action": {
      "type": "string"
    },
    "parent": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "path": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "config": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "confirm": {
      "default": false,
      "type": "boolean"
    },
    "params": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    }
  },
  "required": [
    "action"
  ],
  "type": "object"
}
```

</details>

<a id="tool-gtm_variable-ec512642"></a>

## gtm_variable

Handler: Routes create, get, list, remove, revert, update actions for GTM variables through the shared authenticated v2 REST dispatcher. Requires confirm=true for remove, revert.

```text
Manage GTM variables within a workspace. Same action set as gtm_tag
(create, get, list, update, remove, revert; remove/revert require confirm=true).
```

[Source](https://github.com/dhawalshah/google-tag-manager-mcp/blob/f670034db1835c38e5ecf48c26c1b8aaaa0cfcd5/gtm/variables.py#L12-L18) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "action": {
      "type": "string"
    },
    "parent": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "path": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "config": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "confirm": {
      "default": false,
      "type": "boolean"
    },
    "params": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    }
  },
  "required": [
    "action"
  ],
  "type": "object"
}
```

</details>

<a id="tool-gtm_built_in_variable-779be1c3"></a>

## gtm_built_in_variable

Handler: Routes create, list, remove, revert actions for GTM built\_in\_variables through the shared authenticated v2 REST dispatcher. Requires confirm=true for remove, revert.

```text
Manage GTM built-in variables.
```

[Source](https://github.com/dhawalshah/google-tag-manager-mcp/blob/f670034db1835c38e5ecf48c26c1b8aaaa0cfcd5/gtm/builtin_variables.py#L12-L24) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "action": {
      "type": "string"
    },
    "parent": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "path": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "confirm": {
      "default": false,
      "type": "boolean"
    },
    "params": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "config": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    }
  },
  "required": [
    "action"
  ],
  "type": "object"
}
```

</details>

<a id="tool-gtm_folder-98e6da8b"></a>

## gtm_folder

Handler: Routes create, entities, get, list, move\_entities\_to\_folder, remove, revert, update actions for GTM folders through the shared authenticated v2 REST dispatcher. Requires confirm=true for move\_entities\_to\_folder, remove, revert.

```text
Manage GTM folders.

Standard CRUD+revert like gtm_tag, plus:
  - entities:                 path="<workspace>/folders/{id}" → list entities in folder. (read-only)
  - move_entities_to_folder:  path="<workspace>/folders/{id}", params={tagId/triggerId/variableId},
                              confirm=true. Moves entities into the folder. (destructive)
```

[Source](https://github.com/dhawalshah/google-tag-manager-mcp/blob/f670034db1835c38e5ecf48c26c1b8aaaa0cfcd5/gtm/folders.py#L14-L25) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "action": {
      "type": "string"
    },
    "parent": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "path": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "config": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "confirm": {
      "default": false,
      "type": "boolean"
    },
    "params": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    }
  },
  "required": [
    "action"
  ],
  "type": "object"
}
```

</details>

<a id="tool-gtm_client-dc17ee47"></a>

## gtm_client

Handler: Routes create, get, list, remove, revert, update actions for GTM clients through the shared authenticated v2 REST dispatcher. Requires confirm=true for remove, revert.

```text
Manage GTM clients within a workspace. Same action set as gtm_tag
(create, get, list, update, remove, revert; remove/revert require confirm=true).
```

[Source](https://github.com/dhawalshah/google-tag-manager-mcp/blob/f670034db1835c38e5ecf48c26c1b8aaaa0cfcd5/gtm/clients.py#L12-L18) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "action": {
      "type": "string"
    },
    "parent": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "path": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "config": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "confirm": {
      "default": false,
      "type": "boolean"
    },
    "params": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    }
  },
  "required": [
    "action"
  ],
  "type": "object"
}
```

</details>

<a id="tool-gtm_zone-78bf4872"></a>

## gtm_zone

Handler: Routes create, get, list, remove, revert, update actions for GTM zones through the shared authenticated v2 REST dispatcher. Requires confirm=true for remove, revert.

```text
Manage GTM zones within a workspace. Same action set as gtm_tag
(create, get, list, update, remove, revert; remove/revert require confirm=true).
```

[Source](https://github.com/dhawalshah/google-tag-manager-mcp/blob/f670034db1835c38e5ecf48c26c1b8aaaa0cfcd5/gtm/zones.py#L12-L18) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "action": {
      "type": "string"
    },
    "parent": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "path": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "config": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "confirm": {
      "default": false,
      "type": "boolean"
    },
    "params": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    }
  },
  "required": [
    "action"
  ],
  "type": "object"
}
```

</details>

<a id="tool-gtm_template-47833aba"></a>

## gtm_template

Handler: Routes create, get, import\_from\_gallery, list, remove, revert, update actions for GTM templates through the shared authenticated v2 REST dispatcher. Requires confirm=true for import\_from\_gallery, remove, revert.

```text
Manage GTM custom templates. Standard CRUD+revert plus:
- import_from_gallery: parent=<workspace> (or path="<workspace>/templates"),
                       confirm=true. Imports a Community Template Gallery template.
```

[Source](https://github.com/dhawalshah/google-tag-manager-mcp/blob/f670034db1835c38e5ecf48c26c1b8aaaa0cfcd5/gtm/templates.py#L13-L23) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "action": {
      "type": "string"
    },
    "parent": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "path": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "config": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "confirm": {
      "default": false,
      "type": "boolean"
    },
    "params": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    }
  },
  "required": [
    "action"
  ],
  "type": "object"
}
```

</details>

<a id="tool-gtm_transformation-c270ba51"></a>

## gtm_transformation

Handler: Routes create, get, list, remove, revert, update actions for GTM transformations through the shared authenticated v2 REST dispatcher. Requires confirm=true for remove, revert.

```text
Manage GTM transformations within a workspace. Same action set as gtm_tag
(create, get, list, update, remove, revert; remove/revert require confirm=true).
```

[Source](https://github.com/dhawalshah/google-tag-manager-mcp/blob/f670034db1835c38e5ecf48c26c1b8aaaa0cfcd5/gtm/transformations.py#L12-L18) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "action": {
      "type": "string"
    },
    "parent": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "path": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "config": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "confirm": {
      "default": false,
      "type": "boolean"
    },
    "params": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    }
  },
  "required": [
    "action"
  ],
  "type": "object"
}
```

</details>

<a id="tool-gtm_gtag_config-f5a9eddd"></a>

## gtm_gtag_config

Handler: Routes create, get, list, remove, update actions for GTM gtag\_config through the shared authenticated v2 REST dispatcher. Requires confirm=true for remove.

```text
Manage GTM Google tag (gtag) config. Standard CRUD (no revert).
```

[Source](https://github.com/dhawalshah/google-tag-manager-mcp/blob/f670034db1835c38e5ecf48c26c1b8aaaa0cfcd5/gtm/gtag_config.py#L12-L17) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "action": {
      "type": "string"
    },
    "parent": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "path": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "config": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "confirm": {
      "default": false,
      "type": "boolean"
    },
    "params": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    }
  },
  "required": [
    "action"
  ],
  "type": "object"
}
```

</details>

<a id="tool-gtm_destination-0c1e6401"></a>

## gtm_destination

Handler: Routes get, link, list actions for GTM destinations through the shared authenticated v2 REST dispatcher. Requires confirm=true for link.

```text
Manage GTM destinations.
```

[Source](https://github.com/dhawalshah/google-tag-manager-mcp/blob/f670034db1835c38e5ecf48c26c1b8aaaa0cfcd5/gtm/destinations.py#L13-L27) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "action": {
      "type": "string"
    },
    "parent": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "path": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "config": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "confirm": {
      "default": false,
      "type": "boolean"
    },
    "params": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    }
  },
  "required": [
    "action"
  ],
  "type": "object"
}
```

</details>

<a id="tool-gtm_environment-9aa46ece"></a>

## gtm_environment

Handler: Routes create, get, list, reauthorize, remove, update actions for GTM environments through the shared authenticated v2 REST dispatcher. Requires confirm=true for reauthorize, remove.

```text
Manage GTM environments. Standard CRUD (list/create: parent='<container>';
get/update/remove: path='<container>/environments/{id}') plus:
  - reauthorize: path='<container>/environments/{id}', confirm=true. (destructive)
```

[Source](https://github.com/dhawalshah/google-tag-manager-mcp/blob/f670034db1835c38e5ecf48c26c1b8aaaa0cfcd5/gtm/environments.py#L13-L21) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "action": {
      "type": "string"
    },
    "parent": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "path": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "config": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "confirm": {
      "default": false,
      "type": "boolean"
    },
    "params": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    }
  },
  "required": [
    "action"
  ],
  "type": "object"
}
```

</details>

<a id="tool-gtm_version-759608b8"></a>

## gtm_version

Handler: Routes get, live, publish, remove, set\_latest, undelete, update actions for GTM versions through the shared authenticated v2 REST dispatcher. Requires confirm=true for publish, remove, set\_latest, undelete.

```text
Manage GTM container versions.
```

[Source](https://github.com/dhawalshah/google-tag-manager-mcp/blob/f670034db1835c38e5ecf48c26c1b8aaaa0cfcd5/gtm/versions.py#L14-L34) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "action": {
      "type": "string"
    },
    "parent": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "path": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "config": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "confirm": {
      "default": false,
      "type": "boolean"
    },
    "params": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    }
  },
  "required": [
    "action"
  ],
  "type": "object"
}
```

</details>

<a id="tool-gtm_version_header-e1c252fe"></a>

## gtm_version_header

Handler: Routes latest, list actions for GTM version\_headers through the shared authenticated v2 REST dispatcher.

```text
List GTM container version headers.
```

[Source](https://github.com/dhawalshah/google-tag-manager-mcp/blob/f670034db1835c38e5ecf48c26c1b8aaaa0cfcd5/gtm/version_headers.py#L12-L22) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "action": {
      "type": "string"
    },
    "parent": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "path": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "params": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    }
  },
  "required": [
    "action"
  ],
  "type": "object"
}
```

</details>

<a id="tool-gtm_user_permission-cbd8ceca"></a>

## gtm_user_permission

Handler: Routes create, get, list, remove, update actions for GTM user\_permissions through the shared authenticated v2 REST dispatcher. Requires confirm=true for remove.

```text
Manage GTM account user permissions.
```

[Source](https://github.com/dhawalshah/google-tag-manager-mcp/blob/f670034db1835c38e5ecf48c26c1b8aaaa0cfcd5/gtm/user_permissions.py#L12-L25) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "action": {
      "type": "string"
    },
    "parent": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "path": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "config": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "confirm": {
      "default": false,
      "type": "boolean"
    },
    "params": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    }
  },
  "required": [
    "action"
  ],
  "type": "object"
}
```

</details>
