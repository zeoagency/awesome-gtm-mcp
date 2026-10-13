# Dayuse-Labs/gtm-mcp

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/Dayuse-Labs/gtm-mcp) · [Machine-readable inventory](../data/mcps/dayuse-labs--gtm-mcp.json)

**20 extracted tools.** Excluded: Production transport rejects every request with HTTP 501 because authentication is unimplemented; inverse rollback is a stub.

Snapshot: 2026-10-13 · [0e2d66eccea6](https://github.com/Dayuse-Labs/gtm-mcp/tree/0e2d66eccea6b6a3ad46db9a130ae0014d38c274) · Method: tools/list.

Exposure: All 20 tools always registered. Configured aliases web/server/preprod are guarded at call time; unconfigured aliases return errors. OAuth/collaborator access and roles gate handlers, not tool enumeration. Catalog functions remain exposed when unconfigured. Production /mcp middleware rejects every request with HTTP 501 until OAuth federation is implemented; development uses stub request identity. Custom template, client and transformation changes are admin-only.

## Limits

- Offline tools/list used locked dependencies in isolated scratch copy and dummy services; no tool handlers, authentication, GTM reads or writes were invoked; live behavior was reviewed statically.
- inverse is registered but returns only a deferred message.
- builtInVariable is advertised in entity enums but create/update/delete adapter paths explicitly return NotImplementedError.
- Runtime JSON Schema cannot encode EntityRefSchema custom refinement requiring one of id/name/ref; source validation does enforce it. Operation data intentionally remains an unrestricted object.
- publish description requires GTM Preview observation, but handler has no programmatic verification gate.
- Production requireAuth rejects every MCP request with HTTP 501; development bypass uses a stub collaborator. Upstream explicitly labels transport OAuth federation unimplemented.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`list_containers`](#tool-list_containers-a53dbc4d) | GTM | Returns deployment container aliases and ids, including null for unconfigured aliases. |
| [`whoami`](#tool-whoami-f2529785) | Supporting | Resolves the collaborator and checks GTM container access, returning the minimum skill version. |
| [`pull`](#tool-pull-c5f5571c) | GTM | Reads the published GTM version (Default Workspace fallback for unpublished containers) and updates the local mirror with a change summary. |
| [`list_entities`](#tool-list_entities-c1023dd8) | GTM | Lists mirror entity ids and names, optionally filtering name substrings. |
| [`get_entity`](#tool-get_entity-775572e4) | GTM | Resolves an entity by id or name in the mirror and returns raw GTM JSON. |
| [`get_examples`](#tool-get_examples-7e728178) | GTM | Pulls GTM container state and returns up to five entities of the selected type. |
| [`export_container`](#tool-export_container-76595276) | GTM | Exports mirror entities compactly or as complete raw bodies; omitted mode is handled as compact. |
| [`search_container`](#tool-search_container-d7f216bc) | GTM | Searches case-insensitive full mirror JSON and returns matching bodies and fields. |
| [`workspace_status`](#tool-workspace_status-50e6099a) | GTM | Counts live GTM workspaces and pending stored changesets against a hardcoded limit of three. |
| [`list_changesets`](#tool-list_changesets-6fe7ac54) | GTM | Lists stored changesets filtered by optional container and status. |
| [`get_changeset`](#tool-get_changeset-7b3ac9a6) | GTM | Loads a stored changeset with operations and before-images by UUID. |
| [`preview`](#tool-preview-5975cf1b) | GTM | Validates operation shape, role permissions and references, pulls live state, and stores a baseline, impacts and summary with an expiring preview id. |
| [`apply`](#tool-apply-97a5e41b) | GTM | Checks author/admin permission, role, live drift and workspace cap, then executes operations in a new workspace and saves the changeset, attempting workspace rollback on failure. |
| [`reject`](#tool-reject-084e990a) | GTM | Checks author/admin permission, deletes any recorded workspace and marks the changeset rejected. |
| [`publish`](#tool-publish-a5d47a43) | GTM | Checks admin permission and applied status, detects live drift, creates and records a container version, publishes it and saves published status. |
| [`inverse`](#tool-inverse-7705accd) | GTM | Registered stub: returns a deferred message advising publication of a previous version in GTM; generates no inverse changeset. |
| [`usage_stats`](#tool-usage_stats-2646ed81) | Supporting | Checks admin permission and queries per-collaborator/tool usage and errors, using 24 hours when omitted. |
| [`list_datalayer_events`](#tool-list_datalayer_events-9d4e1a56) | Supporting | Returns the configured read-only GitLab dataLayer catalog event index and any stale warning. |
| [`get_datalayer_event`](#tool-get_datalayer_event-0c79d072) | Supporting | Returns one configured dataLayer catalog event shape, using compact mode when omitted. |
| [`get_datalayer_type`](#tool-get_datalayer_type-00e34ab8) | Supporting | Returns one compacted helper type from the configured dataLayer catalog. |

<a id="tool-list_containers-a53dbc4d"></a>

## list_containers

Handler: Returns deployment container aliases and ids, including null for unconfigured aliases.

```text
List the container aliases (web, server, preprod) and their GTM container ids; null means the alias is not configured on this server.
```

[Source](https://github.com/Dayuse-Labs/gtm-mcp/blob/0e2d66eccea6b6a3ad46db9a130ae0014d38c274/src/interfaces/mcp/tools.ts#L237-L246) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {},
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-whoami-f2529785"></a>

## whoami

Handler: Resolves the collaborator and checks GTM container access, returning the minimum skill version.

```text
Return the current collaborator and their GTM access.
```

[Source](https://github.com/Dayuse-Labs/gtm-mcp/blob/0e2d66eccea6b6a3ad46db9a130ae0014d38c274/src/interfaces/mcp/tools.ts#L247-L259) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {},
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-pull-c5f5571c"></a>

## pull

Handler: Reads the published GTM version (Default Workspace fallback for unpublished containers) and updates the local mirror with a change summary.

```text
Refresh the local mirror from GTM and return a change summary.
```

[Source](https://github.com/Dayuse-Labs/gtm-mcp/blob/0e2d66eccea6b6a3ad46db9a130ae0014d38c274/src/interfaces/mcp/tools.ts#L260-L273) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "container": {
      "type": "string",
      "enum": [
        "web",
        "server",
        "preprod"
      ]
    }
  },
  "required": [
    "container"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-list_entities-c1023dd8"></a>

## list_entities

Handler: Lists mirror entity ids and names, optionally filtering name substrings.

```text
List entities of a type from the local mirror (zero GTM API calls), optionally filtered by name substring. Run pull first if the mirror is empty.
```

[Source](https://github.com/Dayuse-Labs/gtm-mcp/blob/0e2d66eccea6b6a3ad46db9a130ae0014d38c274/src/interfaces/mcp/tools.ts#L274-L295) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "container": {
      "type": "string",
      "enum": [
        "web",
        "server",
        "preprod"
      ]
    },
    "type": {
      "type": "string",
      "enum": [
        "tag",
        "trigger",
        "variable",
        "builtInVariable",
        "folder",
        "client",
        "transformation",
        "customTemplate"
      ]
    },
    "filter": {
      "type": "string",
      "maxLength": 200
    }
  },
  "required": [
    "container",
    "type"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-get_entity-775572e4"></a>

## get_entity

Handler: Resolves an entity by id or name in the mirror and returns raw GTM JSON.

```text
Get one entity (full GTM JSON) by name or id from the local mirror (zero GTM API calls). Run pull first if the mirror is empty.
```

[Source](https://github.com/Dayuse-Labs/gtm-mcp/blob/0e2d66eccea6b6a3ad46db9a130ae0014d38c274/src/interfaces/mcp/tools.ts#L296-L314) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "container": {
      "type": "string",
      "enum": [
        "web",
        "server",
        "preprod"
      ]
    },
    "type": {
      "type": "string",
      "enum": [
        "tag",
        "trigger",
        "variable",
        "builtInVariable",
        "folder",
        "client",
        "transformation",
        "customTemplate"
      ]
    },
    "ref": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    }
  },
  "required": [
    "container",
    "type",
    "ref"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-get_examples-7e728178"></a>

## get_examples

Handler: Pulls GTM container state and returns up to five entities of the selected type.

```text
Representative valid examples of an entity type for clone-from-example authoring.
```

[Source](https://github.com/Dayuse-Labs/gtm-mcp/blob/0e2d66eccea6b6a3ad46db9a130ae0014d38c274/src/interfaces/mcp/tools.ts#L315-L329) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "container": {
      "type": "string",
      "enum": [
        "web",
        "server",
        "preprod"
      ]
    },
    "type": {
      "type": "string",
      "enum": [
        "tag",
        "trigger",
        "variable",
        "builtInVariable",
        "folder",
        "client",
        "transformation",
        "customTemplate"
      ]
    }
  },
  "required": [
    "container",
    "type"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-export_container-76595276"></a>

## export_container

Handler: Exports mirror entities compactly or as complete raw bodies; omitted mode is handled as compact.

```text
Export the WHOLE container from the local mirror in ONE call (zero GTM API calls). mode=compact (default) keeps ids/names/types plus condition & reference fields and omits bulky blobs (tag html, custom-template code) behind {_omitted,length} markers; mode=full returns raw bodies verbatim. Prefer this over fetching entities one-by-one. Run pull first if the mirror is empty.
```

[Source](https://github.com/Dayuse-Labs/gtm-mcp/blob/0e2d66eccea6b6a3ad46db9a130ae0014d38c274/src/interfaces/mcp/tools.ts#L330-L349) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "container": {
      "type": "string",
      "enum": [
        "web",
        "server",
        "preprod"
      ]
    },
    "mode": {
      "type": "string",
      "enum": [
        "compact",
        "full"
      ]
    }
  },
  "required": [
    "container"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-search_container-d7f216bc"></a>

## search_container

Handler: Searches case-insensitive full mirror JSON and returns matching bodies and fields.

```text
Search the local mirror (zero GTM API calls) for every entity whose full JSON contains the query string, case-insensitive. Finds entities that CARRY a value (e.g. a trigger condition equal to "daypass"), not just ones named for it — use this instead of fetching entities one-by-one. Returns matches with full bodies and which fields matched. Run pull first if the mirror is empty.
```

[Source](https://github.com/Dayuse-Labs/gtm-mcp/blob/0e2d66eccea6b6a3ad46db9a130ae0014d38c274/src/interfaces/mcp/tools.ts#L350-L362) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "container": {
      "type": "string",
      "enum": [
        "web",
        "server",
        "preprod"
      ]
    },
    "query": {
      "type": "string",
      "minLength": 1,
      "maxLength": 200
    }
  },
  "required": [
    "container",
    "query"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-workspace_status-50e6099a"></a>

## workspace_status

Handler: Counts live GTM workspaces and pending stored changesets against a hardcoded limit of three.

```text
Report the LIVE GTM workspace count vs the per-container limit (3, incl. Default). slotsFree reflects GTM reality (counts workspaces created in the UI too); pendingChangesets is our informational tally.
```

[Source](https://github.com/Dayuse-Labs/gtm-mcp/blob/0e2d66eccea6b6a3ad46db9a130ae0014d38c274/src/interfaces/mcp/tools.ts#L363-L386) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "container": {
      "type": "string",
      "enum": [
        "web",
        "server",
        "preprod"
      ]
    }
  },
  "required": [
    "container"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-list_changesets-6fe7ac54"></a>

## list_changesets

Handler: Lists stored changesets filtered by optional container and status.

```text
List changesets, optionally filtered by container/status.
```

[Source](https://github.com/Dayuse-Labs/gtm-mcp/blob/0e2d66eccea6b6a3ad46db9a130ae0014d38c274/src/interfaces/mcp/tools.ts#L387-L411) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "container": {
      "type": "string",
      "enum": [
        "web",
        "server",
        "preprod"
      ]
    },
    "status": {
      "type": "string",
      "enum": [
        "draft",
        "previewed",
        "applied",
        "rejected",
        "published"
      ]
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-get_changeset-7b3ac9a6"></a>

## get_changeset

Handler: Loads a stored changeset with operations and before-images by UUID.

```text
Get a changeset with its operations, status and before-images.
```

[Source](https://github.com/Dayuse-Labs/gtm-mcp/blob/0e2d66eccea6b6a3ad46db9a130ae0014d38c274/src/interfaces/mcp/tools.ts#L412-L425) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "format": "uuid"
    }
  },
  "required": [
    "id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-preview-5975cf1b"></a>

## preview

Handler: Validates operation shape, role permissions and references, pulls live state, and stores a baseline, impacts and summary with an expiring preview id.

```text
Phase 1 of Apply: validate + drift-check a changeset, return a plain-language summary, dependency impacts, and a previewId.
```

[Source](https://github.com/Dayuse-Labs/gtm-mcp/blob/0e2d66eccea6b6a3ad46db9a130ae0014d38c274/src/interfaces/mcp/tools.ts#L426-L456) · Schema: tools/list.

Exposure: Always registered; customTemplate/client/transformation operations require admin; clients and transformations are valid only for server container.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "container": {
      "type": "string",
      "enum": [
        "web",
        "server",
        "preprod"
      ]
    },
    "operations": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "op": {
            "type": "string",
            "enum": [
              "create",
              "update",
              "delete"
            ]
          },
          "entity": {
            "type": "string",
            "enum": [
              "tag",
              "trigger",
              "variable",
              "builtInVariable",
              "folder",
              "client",
              "transformation",
              "customTemplate"
            ]
          },
          "assignRef": {
            "type": "string",
            "minLength": 1,
            "maxLength": 120
          },
          "target": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string",
                "minLength": 1
              },
              "name": {
                "type": "string",
                "minLength": 1,
                "maxLength": 255
              },
              "ref": {
                "type": "string",
                "minLength": 1,
                "maxLength": 120
              }
            },
            "additionalProperties": false
          },
          "data": {
            "type": "object",
            "additionalProperties": {}
          }
        },
        "required": [
          "op",
          "entity"
        ],
        "additionalProperties": false
      },
      "minItems": 1,
      "maxItems": 200
    }
  },
  "required": [
    "container",
    "operations"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-apply-97a5e41b"></a>

## apply

Handler: Checks author/admin permission, role, live drift and workspace cap, then executes operations in a new workspace and saves the changeset, attempting workspace rollback on failure.

```text
Phase 2 of Apply: write a previewed changeset into a fresh ephemeral GTM workspace. Does not publish (see publish).
```

[Source](https://github.com/Dayuse-Labs/gtm-mcp/blob/0e2d66eccea6b6a3ad46db9a130ae0014d38c274/src/interfaces/mcp/tools.ts#L457-L481) · Schema: tools/list.

Exposure: Always registered; customTemplate/client/transformation operations require admin; clients and transformations are valid only for server container.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "previewId": {
      "type": "string",
      "format": "uuid"
    }
  },
  "required": [
    "previewId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-reject-084e990a"></a>

## reject

Handler: Checks author/admin permission, deletes any recorded workspace and marks the changeset rejected.

```text
Reject a pending changeset and delete its workspace, freeing a slot.
```

[Source](https://github.com/Dayuse-Labs/gtm-mcp/blob/0e2d66eccea6b6a3ad46db9a130ae0014d38c274/src/interfaces/mcp/tools.ts#L482-L507) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "changesetId": {
      "type": "string",
      "format": "uuid"
    }
  },
  "required": [
    "changesetId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-publish-a5d47a43"></a>

## publish

Handler: Checks admin permission and applied status, detects live drift, creates and records a container version, publishes it and saves published status.

```text
Admin-only. Make an applied changeset live: cuts a GTM container version from its workspace (named after the changeset, which consumes the workspace), then publishes it. Call ONLY after the change has been observed in GTM Preview on that workspace (gtm-change skill, step 5); an unverified change must not be published. Refuses on drift, merge conflict or compiler error without publishing. Returns the published versionId.
```

[Source](https://github.com/Dayuse-Labs/gtm-mcp/blob/0e2d66eccea6b6a3ad46db9a130ae0014d38c274/src/interfaces/mcp/tools.ts#L508-L526) · Schema: tools/list.

Exposure: Always registered; handler is admin-only. Required GTM Preview verification is descriptive guidance, not a programmatic gate.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "changesetId": {
      "type": "string",
      "format": "uuid"
    }
  },
  "required": [
    "changesetId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-inverse-7705accd"></a>

## inverse

Handler: Registered stub: returns a deferred message advising publication of a previous version in GTM; generates no inverse changeset.

```text
Generate an inverse changeset from before-images (post-publish rollback helper).
```

[Source](https://github.com/Dayuse-Labs/gtm-mcp/blob/0e2d66eccea6b6a3ad46db9a130ae0014d38c274/src/interfaces/mcp/tools.ts#L527-L540) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "changesetId": {
      "type": "string",
      "format": "uuid"
    }
  },
  "required": [
    "changesetId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-usage_stats-2646ed81"></a>

## usage_stats

Handler: Checks admin permission and queries per-collaborator/tool usage and errors, using 24 hours when omitted.

```text
Admin-only. Usage + error counts grouped by collaborator and tool over the last sinceHours (default 24) — answers "usage per collaborator" and "is everything going right".
```

[Source](https://github.com/Dayuse-Labs/gtm-mcp/blob/0e2d66eccea6b6a3ad46db9a130ae0014d38c274/src/interfaces/mcp/tools.ts#L541-L561) · Schema: tools/list.

Exposure: Always registered; handler is admin-only.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "sinceHours": {
      "type": "integer",
      "exclusiveMinimum": 0,
      "maximum": 8760
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-list_datalayer_events-9d4e1a56"></a>

## list_datalayer_events

Handler: Returns the configured read-only GitLab dataLayer catalog event index and any stale warning.

```text
List every dataLayer event name the site can emit. The CHEAP index — call this FIRST, then drill into one event with get_datalayer_event. Authoritative upstream schema (read-only).
```

[Source](https://github.com/Dayuse-Labs/gtm-mcp/blob/0e2d66eccea6b6a3ad46db9a130ae0014d38c274/src/interfaces/mcp/tools.ts#L562-L578) · Schema: tools/list.

Exposure: Always registered; returns configuration error unless GITLAB_TOKEN and GITLAB_CATALOG_PROJECT_ID configure a catalog.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {},
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-get_datalayer_event-0c79d072"></a>

## get_datalayer_event

Handler: Returns one configured dataLayer catalog event shape, using compact mode when omitted.

```text
Get ONE dataLayer event's shape. mode=compact (default) collapses fat string-unions and keeps referenced types as bare names; mode=full expands referenced types one level. Call list_datalayer_events first for valid names; drill referenced types with get_datalayer_type.
```

[Source](https://github.com/Dayuse-Labs/gtm-mcp/blob/0e2d66eccea6b6a3ad46db9a130ae0014d38c274/src/interfaces/mcp/tools.ts#L579-L595) · Schema: tools/list.

Exposure: Always registered; returns configuration error unless GITLAB_TOKEN and GITLAB_CATALOG_PROJECT_ID configure a catalog.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 200
    },
    "mode": {
      "type": "string",
      "enum": [
        "compact",
        "full"
      ]
    }
  },
  "required": [
    "name"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-get_datalayer_type-00e34ab8"></a>

## get_datalayer_type

Handler: Returns one compacted helper type from the configured dataLayer catalog.

```text
Get ONE helper type from the catalog (a referenced DTO or enum), compacted. Use to walk a type referenced by an event without expanding the whole graph.
```

[Source](https://github.com/Dayuse-Labs/gtm-mcp/blob/0e2d66eccea6b6a3ad46db9a130ae0014d38c274/src/interfaces/mcp/tools.ts#L596-L609) · Schema: tools/list.

Exposure: Always registered; returns configuration error unless GITLAB_TOKEN and GITLAB_CATALOG_PROJECT_ID configure a catalog.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 200
    }
  },
  "required": [
    "name"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>
