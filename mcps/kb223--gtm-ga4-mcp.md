# kb223/gtm-ga4-mcp

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/kb223/gtm-ga4-mcp) · [Machine-readable inventory](../data/mcps/kb223--gtm-ga4-mcp.json)

**16 extracted tools.** Read and change GTM resources through generic operations with separately enabled write and destructive tiers.

Snapshot: 2026-10-13 · [40862b6e92d0](https://github.com/kb223/gtm-ga4-mcp/tree/40862b6e92d0b70e04b543a6f7ec854258e392cd) · Method: tools/list.

Exposure: All 16 registry tools captured: default READ exposes 8; WRITE exposes 12; DESTRUCTIVE exposes all 16 and implies WRITE. CLI flags or GTM_GA4_MCP_ALLOW_WRITE / GTM_GA4_MCP_ALLOW_DESTRUCTIVE enable tiers. --deny and comma-separated GTM_GA4_MCP_DENY remove individual tools before registration. GA4 shares this server and is included as other product.

## Limits

- Actual offline registration/list_tools verified with mcp==2.0.0 (within declared >=2,<3). Installed mcp 2.13.5 lacks mcp.server.mcpserver and upstream server import fails; a compatible dependency pin is needed for reproducibility.
- Google credentials and API operations were never invoked. GTM built_in_variables get dispatch and GA4 entity-operation availability remain unverified against the live API; bodies remain unrestricted dictionaries as declared upstream.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`ga4_account_summaries`](#tool-ga4_account_summaries-9d113831) | Other product | Lists GA4 account summaries and accessible property IDs with pagination. |
| [`ga4_admin_create`](#tool-ga4_admin_create-8c998a3e) | Other product | Creates GA4 custom definitions, key events, or data streams, using dry-run by default; rejects property creation. |
| [`ga4_admin_delete`](#tool-ga4_admin_delete-18b778ab) | Other product | Archives GA4 custom definitions or deletes key events/data streams after token confirmation; rejects property deletion. |
| [`ga4_admin_list`](#tool-ga4_admin_list-b88b81b9) | Other product | Lists GA4 property subentities through Admin API v1beta with pagination. |
| [`ga4_admin_update`](#tool-ga4_admin_update-43778c0f) | Other product | Patches a GA4 entity or property using an update mask, using dry-run by default. |
| [`ga4_metadata`](#tool-ga4_metadata-cbab802e) | Other product | Lists GA4 dimensions and metrics with an optional case-insensitive name filter. |
| [`ga4_property_get`](#tool-ga4_property_get-e7b614db) | Other product | Fetches GA4 property configuration after normalizing its numeric ID. |
| [`ga4_run_realtime_report`](#tool-ga4_run_realtime_report-8f675773) | Other product | Runs a GA4 realtime report and shapes returned rows into dictionaries. |
| [`ga4_run_report`](#tool-ga4_run_report-a0a35566) | Other product | Runs a GA4 date-range report and shapes dimension/metric rows into dictionaries. |
| [`gtm_create`](#tool-gtm_create-ba528909) | GTM | Creates one of ten writable GTM entity collections, returning a request preview by default. |
| [`gtm_delete`](#tool-gtm_delete-e1f2b7fc) | GTM | Deletes an allowed GTM entity only after redeeming a one-use confirmation token; accounts and containers are excluded. |
| [`gtm_get`](#tool-gtm_get-dd147a9b) | GTM | Fetches a GTM entity by collection path; built\_in\_variables dispatches to a get method which that API collection may not provide. |
| [`gtm_list`](#tool-gtm_list-af3b9072) | GTM | Dispatches hierarchical GTM lists with pagination and optional full JSON; versions use version\_headers. |
| [`gtm_permissions`](#tool-gtm_permissions-19c046f4) | GTM | Grants, replaces, or revokes GTM account user permissions after token confirmation. |
| [`gtm_publish`](#tool-gtm_publish-54fdd062) | GTM | Creates a version from a workspace and publishes it after token confirmation, aborting on compiler errors or missing version path. |
| [`gtm_update`](#tool-gtm_update-b86785f1) | GTM | Replaces a writable GTM entity, optionally checking its fingerprint, with dry-run enabled by default. |

<a id="tool-ga4_account_summaries-9d113831"></a>

## ga4_account_summaries

Handler: Lists GA4 account summaries and accessible property IDs with pagination.

```text
List every GA4 account and property the authenticated user can access.

This is the entry point for all GA4 work — it returns the property IDs the
other ga4_* tools need.

```

[Source](https://github.com/kb223/gtm-ga4-mcp/blob/40862b6e92d0b70e04b543a6f7ec854258e392cd/src/gtm_ga4_mcp/tools/ga4_admin.py#L49-L83) · Schema: tools/list.

Exposure: READ tier; enabled by default; any tool can be excluded by --deny / GTM_GA4_MCP_DENY.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Pagination token from a previous response.",
      "title": "Page Token"
    }
  },
  "title": "ga4_account_summariesArguments",
  "type": "object"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "title": "List GA4 Accounts & Properties",
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-ga4_admin_create-8c998a3e"></a>

## ga4_admin_create

Handler: Creates GA4 custom definitions, key events, or data streams, using dry-run by default; rejects property creation.

```text
Create a GA4 custom dimension, custom metric, key event, or data stream on a property.

Defaults to dry-run: nothing is sent until called with dry_run=False.

```

[Source](https://github.com/kb223/gtm-ga4-mcp/blob/40862b6e92d0b70e04b543a6f7ec854258e392cd/src/gtm_ga4_mcp/tools/ga4_write.py#L41-L83) · Schema: tools/list.

Exposure: WRITE tier; requires --allow-write or --allow-destructive / corresponding GTM_GA4_MCP environment flag; any tool can be excluded by --deny / GTM_GA4_MCP_DENY.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "Ga4WriteEntityType": {
      "enum": [
        "custom_dimensions",
        "custom_metrics",
        "key_events",
        "data_streams",
        "property"
      ],
      "title": "Ga4WriteEntityType",
      "type": "string"
    }
  },
  "properties": {
    "entity_type": {
      "$ref": "#/$defs/Ga4WriteEntityType",
      "description": "What to create: custom_dimensions, custom_metrics, key_events, or data_streams."
    },
    "property_id": {
      "description": "GA4 property ID, e.g. '123456' or 'properties/123456'.",
      "title": "Property Id",
      "type": "string"
    },
    "body": {
      "additionalProperties": true,
      "description": "Entity JSON per the Admin API, e.g. a custom dimension: {'parameterName': 'lead_type', 'displayName': 'Lead Type', 'scope': 'EVENT'}.",
      "title": "Body",
      "type": "object"
    },
    "dry_run": {
      "default": true,
      "description": "True (default) echoes the request without sending it.",
      "title": "Dry Run",
      "type": "boolean"
    }
  },
  "required": [
    "entity_type",
    "property_id",
    "body"
  ],
  "title": "ga4_admin_createArguments",
  "type": "object"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "title": "Create GA4 Entity",
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-ga4_admin_delete-18b778ab"></a>

## ga4_admin_delete

Handler: Archives GA4 custom definitions or deletes key events/data streams after token confirmation; rejects property deletion.

```text
Delete or archive a GA4 entity by resource name. Two-phase.

Custom dimensions/metrics are ARCHIVED (permanent — GA4 has no unarchive
or true delete for them); key events and data streams are DELETED.
Deleting a data stream stops collection for it. Properties cannot be
deleted through this tool by design.

```

[Source](https://github.com/kb223/gtm-ga4-mcp/blob/40862b6e92d0b70e04b543a6f7ec854258e392cd/src/gtm_ga4_mcp/tools/ga4_destructive.py#L27-L91) · Schema: tools/list.

Exposure: DESTRUCTIVE tier; requires --allow-destructive or GTM_GA4_MCP_ALLOW_DESTRUCTIVE; any tool can be excluded by --deny / GTM_GA4_MCP_DENY.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "name": {
      "description": "Full resource name from a read tool, e.g. 'properties/123/customDimensions/456' or 'properties/123/dataStreams/789'.",
      "minLength": 1,
      "title": "Name",
      "type": "string"
    },
    "confirm_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Omit on the first call — it returns a token and a summary instead of deleting. Pass the token back (same name) to execute.",
      "title": "Confirm Token"
    }
  },
  "required": [
    "name"
  ],
  "title": "ga4_admin_deleteArguments",
  "type": "object"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "title": "Delete/Archive GA4 Entity",
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-ga4_admin_list-b88b81b9"></a>

## ga4_admin_list

Handler: Lists GA4 property subentities through Admin API v1beta with pagination.

```text
List a GA4 property's sub-entities.

Covers data streams, key events, custom dimensions/metrics, Google Ads
links, and Firebase links.

```

[Source](https://github.com/kb223/gtm-ga4-mcp/blob/40862b6e92d0b70e04b543a6f7ec854258e392cd/src/gtm_ga4_mcp/tools/ga4_admin.py#L97-L129) · Schema: tools/list.

Exposure: READ tier; enabled by default; any tool can be excluded by --deny / GTM_GA4_MCP_DENY.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "Ga4AdminEntityType": {
      "enum": [
        "data_streams",
        "key_events",
        "custom_dimensions",
        "custom_metrics",
        "google_ads_links",
        "firebase_links"
      ],
      "title": "Ga4AdminEntityType",
      "type": "string"
    }
  },
  "properties": {
    "entity_type": {
      "$ref": "#/$defs/Ga4AdminEntityType",
      "description": "Which property sub-entity to list."
    },
    "property_id": {
      "description": "GA4 property ID, e.g. '123456' or 'properties/123456'.",
      "title": "Property Id",
      "type": "string"
    },
    "page_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Pagination token from a previous response.",
      "title": "Page Token"
    }
  },
  "required": [
    "entity_type",
    "property_id"
  ],
  "title": "ga4_admin_listArguments",
  "type": "object"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "title": "List GA4 Property Entities",
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-ga4_admin_update-43778c0f"></a>

## ga4_admin_update

Handler: Patches a GA4 entity or property using an update mask, using dry-run by default.

```text
Update a GA4 entity (or the property itself) by resource name. Defaults to dry-run.

Unlike GTM, GA4 updates are partial: only fields named in update_mask change.

```

[Source](https://github.com/kb223/gtm-ga4-mcp/blob/40862b6e92d0b70e04b543a6f7ec854258e392cd/src/gtm_ga4_mcp/tools/ga4_write.py#L86-L141) · Schema: tools/list.

Exposure: WRITE tier; requires --allow-write or --allow-destructive / corresponding GTM_GA4_MCP environment flag; any tool can be excluded by --deny / GTM_GA4_MCP_DENY.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "Ga4WriteEntityType": {
      "enum": [
        "custom_dimensions",
        "custom_metrics",
        "key_events",
        "data_streams",
        "property"
      ],
      "title": "Ga4WriteEntityType",
      "type": "string"
    }
  },
  "properties": {
    "entity_type": {
      "$ref": "#/$defs/Ga4WriteEntityType",
      "description": "What to update, including 'property' for the property itself."
    },
    "name": {
      "description": "Full resource name from a read tool, e.g. 'properties/123/customDimensions/456' or 'properties/123' for the property.",
      "minLength": 1,
      "title": "Name",
      "type": "string"
    },
    "body": {
      "additionalProperties": true,
      "description": "Fields to change, e.g. {'displayName': 'New name'}.",
      "title": "Body",
      "type": "object"
    },
    "update_mask": {
      "description": "Comma-separated field names being updated (e.g. 'displayName,description'), or '*' to update every field present in body.",
      "minLength": 1,
      "title": "Update Mask",
      "type": "string"
    },
    "dry_run": {
      "default": true,
      "description": "True (default) echoes the request without sending it.",
      "title": "Dry Run",
      "type": "boolean"
    }
  },
  "required": [
    "entity_type",
    "name",
    "body",
    "update_mask"
  ],
  "title": "ga4_admin_updateArguments",
  "type": "object"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "title": "Update GA4 Entity",
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-ga4_metadata-cbab802e"></a>

## ga4_metadata

Handler: Lists GA4 dimensions and metrics with an optional case-insensitive name filter.

```text
List the dimension/metric API names available on a property (standard + custom).

Use this before ga4_run_report to find exact API names.

```

[Source](https://github.com/kb223/gtm-ga4-mcp/blob/40862b6e92d0b70e04b543a6f7ec854258e392cd/src/gtm_ga4_mcp/tools/ga4_data.py#L120-L166) · Schema: tools/list.

Exposure: READ tier; enabled by default; any tool can be excluded by --deny / GTM_GA4_MCP_DENY.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "property_id": {
      "description": "GA4 property ID, e.g. '123456' or 'properties/123456'.",
      "title": "Property Id",
      "type": "string"
    },
    "search": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Optional case-insensitive filter on API/UI names, e.g. 'revenue'.",
      "title": "Search"
    }
  },
  "required": [
    "property_id"
  ],
  "title": "ga4_metadataArguments",
  "type": "object"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "title": "List GA4 Dimensions & Metrics",
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-ga4_property_get-e7b614db"></a>

## ga4_property_get

Handler: Fetches GA4 property configuration after normalizing its numeric ID.

```text
Fetch one GA4 property's full configuration (timezone, currency, industry, service level).
```

[Source](https://github.com/kb223/gtm-ga4-mcp/blob/40862b6e92d0b70e04b543a6f7ec854258e392cd/src/gtm_ga4_mcp/tools/ga4_admin.py#L86-L94) · Schema: tools/list.

Exposure: READ tier; enabled by default; any tool can be excluded by --deny / GTM_GA4_MCP_DENY.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "property_id": {
      "description": "GA4 property ID, e.g. '123456' or 'properties/123456'.",
      "title": "Property Id",
      "type": "string"
    }
  },
  "required": [
    "property_id"
  ],
  "title": "ga4_property_getArguments",
  "type": "object"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "title": "Get GA4 Property",
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-ga4_run_realtime_report-8f675773"></a>

## ga4_run_realtime_report

Handler: Runs a GA4 realtime report and shapes returned rows into dictionaries.

```text
Run a GA4 realtime report (last 30 minutes) — e.g. to verify events are firing now.
```

[Source](https://github.com/kb223/gtm-ga4-mcp/blob/40862b6e92d0b70e04b543a6f7ec854258e392cd/src/gtm_ga4_mcp/tools/ga4_data.py#L85-L117) · Schema: tools/list.

Exposure: READ tier; enabled by default; any tool can be excluded by --deny / GTM_GA4_MCP_DENY.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "property_id": {
      "description": "GA4 property ID, e.g. '123456' or 'properties/123456'.",
      "title": "Property Id",
      "type": "string"
    },
    "metrics": {
      "description": "Realtime metric API names, e.g. ['activeUsers', 'eventCount'].",
      "items": {
        "type": "string"
      },
      "minItems": 1,
      "title": "Metrics",
      "type": "array"
    },
    "dimensions": {
      "anyOf": [
        {
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Realtime dimension API names, e.g. ['eventName', 'country'].",
      "title": "Dimensions"
    },
    "limit": {
      "default": 50,
      "description": "Maximum rows to return.",
      "maximum": 250,
      "minimum": 1,
      "title": "Limit",
      "type": "integer"
    }
  },
  "required": [
    "property_id",
    "metrics"
  ],
  "title": "ga4_run_realtime_reportArguments",
  "type": "object"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "title": "Run GA4 Realtime Report",
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-ga4_run_report-a0a35566"></a>

## ga4_run_report

Handler: Runs a GA4 date-range report and shapes dimension/metric rows into dictionaries.

```text
Run a GA4 report over a date range and return one dict per row.

Rows are keyed by the requested dimension/metric API names. `row_count` is
the total available on the server; raise `limit` or refine dimensions if
rows were truncated.

```

[Source](https://github.com/kb223/gtm-ga4-mcp/blob/40862b6e92d0b70e04b543a6f7ec854258e392cd/src/gtm_ga4_mcp/tools/ga4_data.py#L33-L82) · Schema: tools/list.

Exposure: READ tier; enabled by default; any tool can be excluded by --deny / GTM_GA4_MCP_DENY.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "property_id": {
      "description": "GA4 property ID, e.g. '123456' or 'properties/123456'.",
      "title": "Property Id",
      "type": "string"
    },
    "metrics": {
      "description": "Metric API names, e.g. ['sessions', 'conversions', 'totalRevenue']. Discover names via ga4_metadata.",
      "items": {
        "type": "string"
      },
      "minItems": 1,
      "title": "Metrics",
      "type": "array"
    },
    "dimensions": {
      "anyOf": [
        {
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Dimension API names, e.g. ['date', 'sessionDefaultChannelGroup'].",
      "title": "Dimensions"
    },
    "start_date": {
      "default": "28daysAgo",
      "description": "Start date: 'YYYY-MM-DD', 'NdaysAgo', 'yesterday', or 'today'.",
      "title": "Start Date",
      "type": "string"
    },
    "end_date": {
      "default": "today",
      "description": "End date: 'YYYY-MM-DD', 'NdaysAgo', 'yesterday', or 'today'.",
      "title": "End Date",
      "type": "string"
    },
    "limit": {
      "default": 50,
      "description": "Maximum rows to return.",
      "maximum": 250,
      "minimum": 1,
      "title": "Limit",
      "type": "integer"
    }
  },
  "required": [
    "property_id",
    "metrics"
  ],
  "title": "ga4_run_reportArguments",
  "type": "object"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "title": "Run GA4 Report",
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_create-ba528909"></a>

## gtm_create

Handler: Creates one of ten writable GTM entity collections, returning a request preview by default.

```text
Create a GTM entity in a workspace (or a new workspace/environment in a container).

Defaults to dry-run: nothing is sent until called with dry_run=False.
Changes land in the workspace only — nothing goes live without gtm_publish.

```

[Source](https://github.com/kb223/gtm-ga4-mcp/blob/40862b6e92d0b70e04b543a6f7ec854258e392cd/src/gtm_ga4_mcp/tools/gtm_write.py#L54-L105) · Schema: tools/list.

Exposure: WRITE tier; requires --allow-write or --allow-destructive / corresponding GTM_GA4_MCP environment flag; any tool can be excluded by --deny / GTM_GA4_MCP_DENY.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "GtmEntityType": {
      "enum": [
        "accounts",
        "user_permissions",
        "containers",
        "destinations",
        "environments",
        "versions",
        "workspaces",
        "built_in_variables",
        "clients",
        "folders",
        "tags",
        "templates",
        "transformations",
        "triggers",
        "variables",
        "zones"
      ],
      "title": "GtmEntityType",
      "type": "string"
    }
  },
  "properties": {
    "entity_type": {
      "$ref": "#/$defs/GtmEntityType",
      "description": "Entity to create: tags, triggers, variables, workspaces, ..."
    },
    "parent": {
      "description": "Parent path: a container path for workspaces/environments, a workspace path for tags/triggers/variables/etc.",
      "minLength": 1,
      "title": "Parent",
      "type": "string"
    },
    "body": {
      "additionalProperties": true,
      "description": "Entity JSON per the GTM API, e.g. a tag: {'name': ..., 'type': 'gaawe', 'parameter': [...], 'firingTriggerId': [...]}. Read a similar existing entity with gtm_get to see the expected shape.",
      "title": "Body",
      "type": "object"
    },
    "dry_run": {
      "default": true,
      "description": "True (default) echoes the request without sending it.",
      "title": "Dry Run",
      "type": "boolean"
    }
  },
  "required": [
    "entity_type",
    "parent",
    "body"
  ],
  "title": "gtm_createArguments",
  "type": "object"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "title": "Create GTM Entity",
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_delete-e1f2b7fc"></a>

## gtm_delete

Handler: Deletes an allowed GTM entity only after redeeming a one-use confirmation token; accounts and containers are excluded.

```text
Delete a GTM entity (tag, trigger, variable, workspace, version, ...). Two-phase.

Without confirm_token nothing is deleted; you get a summary + token to
confirm with. Deleting a workspace discards its unpublished changes.

```

[Source](https://github.com/kb223/gtm-ga4-mcp/blob/40862b6e92d0b70e04b543a6f7ec854258e392cd/src/gtm_ga4_mcp/tools/gtm_destructive.py#L46-L93) · Schema: tools/list.

Exposure: DESTRUCTIVE tier; requires --allow-destructive or GTM_GA4_MCP_ALLOW_DESTRUCTIVE; any tool can be excluded by --deny / GTM_GA4_MCP_DENY.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "path": {
      "description": "Full path of the entity to delete, from gtm_list/gtm_get.",
      "minLength": 1,
      "title": "Path",
      "type": "string"
    },
    "confirm_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Omit on the first call — it returns a token and a summary instead of deleting. Pass the token back (same path) to execute.",
      "title": "Confirm Token"
    }
  },
  "required": [
    "path"
  ],
  "title": "gtm_deleteArguments",
  "type": "object"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "title": "Delete GTM Entity",
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_get-dd147a9b"></a>

## gtm_get

Handler: Fetches a GTM entity by collection path; built\_in\_variables dispatches to a get method which that API collection may not provide.

```text
Fetch one GTM entity's complete JSON by its path (tag, trigger, variable, version, ...).

Note: fetching a version returns the entire published container (large).

```

[Source](https://github.com/kb223/gtm-ga4-mcp/blob/40862b6e92d0b70e04b543a6f7ec854258e392cd/src/gtm_ga4_mcp/tools/gtm.py#L214-L244) · Schema: tools/list.

Exposure: READ tier; enabled by default; any tool can be excluded by --deny / GTM_GA4_MCP_DENY.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "path": {
      "description": "Full GTM entity path from a gtm_list result, e.g. 'accounts/123/containers/456/workspaces/7/tags/8' or 'accounts/123/containers/456/versions/42'.",
      "minLength": 1,
      "title": "Path",
      "type": "string"
    }
  },
  "required": [
    "path"
  ],
  "title": "gtm_getArguments",
  "type": "object"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "title": "Get GTM Entity",
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_list-af3b9072"></a>

## gtm_list

Handler: Dispatches hierarchical GTM lists with pagination and optional full JSON; versions use version\_headers.

```text
List Google Tag Manager entities one hierarchy level at a time.

Returns trimmed summaries (path, name, type, IDs) to keep context small;
each item's `path` feeds gtm_get (full detail) or a deeper gtm_list call.

```

[Source](https://github.com/kb223/gtm-ga4-mcp/blob/40862b6e92d0b70e04b543a6f7ec854258e392cd/src/gtm_ga4_mcp/tools/gtm.py#L152-L211) · Schema: tools/list.

Exposure: READ tier; enabled by default; any tool can be excluded by --deny / GTM_GA4_MCP_DENY.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "GtmEntityType": {
      "enum": [
        "accounts",
        "user_permissions",
        "containers",
        "destinations",
        "environments",
        "versions",
        "workspaces",
        "built_in_variables",
        "clients",
        "folders",
        "tags",
        "templates",
        "transformations",
        "triggers",
        "variables",
        "zones"
      ],
      "title": "GtmEntityType",
      "type": "string"
    }
  },
  "properties": {
    "entity_type": {
      "$ref": "#/$defs/GtmEntityType",
      "description": "Which GTM entity to list. Walk the hierarchy: accounts -> containers -> workspaces -> tags/triggers/variables/..."
    },
    "parent": {
      "default": "",
      "description": "Parent path from a previous result, e.g. '' for accounts, 'accounts/123' for containers, 'accounts/123/containers/456' for workspaces/versions/environments, 'accounts/123/containers/456/workspaces/7' for tags/triggers/variables.",
      "title": "Parent",
      "type": "string"
    },
    "page_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Pagination token from a previous response.",
      "title": "Page Token"
    },
    "full": {
      "default": false,
      "description": "Return complete entity JSON instead of trimmed summaries. Prefer gtm_get for a single entity.",
      "title": "Full",
      "type": "boolean"
    }
  },
  "required": [
    "entity_type"
  ],
  "title": "gtm_listArguments",
  "type": "object"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "title": "List GTM Entities",
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_permissions-19c046f4"></a>

## gtm_permissions

Handler: Grants, replaces, or revokes GTM account user permissions after token confirmation.

```text
Grant, update, or revoke a user's access to a GTM account. Two-phase.

Access changes are security-sensitive: always show the summary to the
user before confirming.

```

[Source](https://github.com/kb223/gtm-ga4-mcp/blob/40862b6e92d0b70e04b543a6f7ec854258e392cd/src/gtm_ga4_mcp/tools/gtm_destructive.py#L171-L239) · Schema: tools/list.

Exposure: DESTRUCTIVE tier; requires --allow-destructive or GTM_GA4_MCP_ALLOW_DESTRUCTIVE; any tool can be excluded by --deny / GTM_GA4_MCP_DENY.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "action": {
      "description": "'grant' (new user), 'update' (existing permission), or 'revoke'.",
      "title": "Action",
      "type": "string"
    },
    "account_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "For 'grant': the GTM account ID, e.g. '123456'.",
      "title": "Account Id"
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
      "default": null,
      "description": "For 'update'/'revoke': the permission path from gtm_list(user_permissions), e.g. 'accounts/123/user_permissions/456'.",
      "title": "Path"
    },
    "body": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "For 'grant'/'update': permission JSON, e.g. {'emailAddress': ..., 'accountAccess': {'permission': 'user'}, 'containerAccess': [{'containerId': ..., 'permission': 'edit'}]}.",
      "title": "Body"
    },
    "confirm_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Omit first to get a summary + token; pass back to execute.",
      "title": "Confirm Token"
    }
  },
  "required": [
    "action"
  ],
  "title": "gtm_permissionsArguments",
  "type": "object"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "title": "Manage GTM User Permissions",
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_publish-54fdd062"></a>

## gtm_publish

Handler: Creates a version from a workspace and publishes it after token confirmation, aborting on compiler errors or missing version path.

```text
Compile a GTM workspace into a version and publish it LIVE. Two-phase.

Publishing deploys the container to every page that loads it — treat it
like a production release. The source workspace is consumed by versioning.

```

[Source](https://github.com/kb223/gtm-ga4-mcp/blob/40862b6e92d0b70e04b543a6f7ec854258e392cd/src/gtm_ga4_mcp/tools/gtm_destructive.py#L96-L168) · Schema: tools/list.

Exposure: DESTRUCTIVE tier; requires --allow-destructive or GTM_GA4_MCP_ALLOW_DESTRUCTIVE; any tool can be excluded by --deny / GTM_GA4_MCP_DENY.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "workspace_path": {
      "description": "Workspace to publish, e.g. 'accounts/123/containers/456/workspaces/7'.",
      "minLength": 1,
      "title": "Workspace Path",
      "type": "string"
    },
    "version_name": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Name for the created version.",
      "title": "Version Name"
    },
    "notes": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Notes for the created version.",
      "title": "Notes"
    },
    "confirm_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Omit on the first call — it returns a token and a summary instead of publishing. Pass the token back (same arguments) to execute.",
      "title": "Confirm Token"
    }
  },
  "required": [
    "workspace_path"
  ],
  "title": "gtm_publishArguments",
  "type": "object"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "title": "Publish GTM Workspace",
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_update-b86785f1"></a>

## gtm_update

Handler: Replaces a writable GTM entity, optionally checking its fingerprint, with dry-run enabled by default.

```text
Update (replace) a GTM entity by path. Defaults to dry-run.

GTM updates are full replacements — always start from gtm_get output.

```

[Source](https://github.com/kb223/gtm-ga4-mcp/blob/40862b6e92d0b70e04b543a6f7ec854258e392cd/src/gtm_ga4_mcp/tools/gtm_write.py#L108-L168) · Schema: tools/list.

Exposure: WRITE tier; requires --allow-write or --allow-destructive / corresponding GTM_GA4_MCP environment flag; any tool can be excluded by --deny / GTM_GA4_MCP_DENY.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "path": {
      "description": "Full path of the entity to update, from gtm_list/gtm_get.",
      "minLength": 1,
      "title": "Path",
      "type": "string"
    },
    "body": {
      "additionalProperties": true,
      "description": "COMPLETE entity JSON (the GTM API replaces the entity, not merges). Fetch with gtm_get, modify, and send the whole object back.",
      "title": "Body",
      "type": "object"
    },
    "fingerprint": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Optional optimistic-lock fingerprint from gtm_get; the update fails if someone changed the entity since.",
      "title": "Fingerprint"
    },
    "dry_run": {
      "default": true,
      "description": "True (default) echoes the request without sending it.",
      "title": "Dry Run",
      "type": "boolean"
    }
  },
  "required": [
    "path",
    "body"
  ],
  "title": "gtm_updateArguments",
  "type": "object"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "title": "Update GTM Entity",
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>
