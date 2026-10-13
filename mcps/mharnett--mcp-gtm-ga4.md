# mharnett/mcp-gtm-ga4

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/mharnett/mcp-gtm-ga4) · [Machine-readable inventory](../data/mcps/mharnett--mcp-gtm-ga4.json)

**18 extracted tools.** Inspect tag consent settings, preview workspace compilation, and create or update draft tracking resources.

Snapshot: 2026-10-13 · [539cc67f638b](https://github.com/mharnett/mcp-gtm-ga4/tree/539cc67f638bd2a8c7678d5f93b84d68e49b0564) · Method: source.

Exposure: 11 tools exposed by default; 7 tools in WRITE_TOOLS hidden and calls refused unless GTM_GA4_MCP_WRITE=true. All 18 included here. GA4 tools remain exposed even without GA4_PROPERTY_ID.

## Limits

- Literal tool registration extracted offline without loading server or contacting Google; no tools/list runtime or API functionality verification performed.
- Workspace resolution uses GTM_SANDBOX_WORKSPACE_ID directly or selects Default Workspace; there is no separate sandbox-name validation or SafetyError check claimed by README (src/index.ts lines 318-335).
- gtm_preview calls quick_preview while omitted from WRITE_TOOLS, so available in default read-only exposure; handler returns API payload rather than a constructed Preview URL.
- gtm_get_client_context returns healthy without verifying connectivity and reports auto-detect rather than actual resolved workspace ID.
- GTM tag/trigger/variable lists and consent audit do not follow nextPageToken; advertised all-tag audits may be partial. Consent audit measures status heuristically, not actual consent integration.
- GA4_PROPERTY_ID is optional at startup, but all GA4 handlers construct properties/ even when absent.
- Input JSON bodies are strings by upstream schema; no nested GTM body schema, enums, or defaults are registered. Described/handler defaults are deliberately not invented as schema defaults.
- Backlog gtm_list_versions is proposed, not registered or implemented, and excluded from tool catalog.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`gtm_get_client_context`](#tool-gtm_get_client_context-9aa34e57) | Supporting | Returns configured paths and version with a hard-coded healthy status; does not contact Google or resolve the actual workspace. |
| [`gtm_list_tags`](#tool-gtm_list_tags-b585bc12) | GTM | Lists the first API page of workspace tags and returns IDs, types, consent status, pause state and firing triggers. |
| [`gtm_get_tag`](#tool-gtm_get_tag-3d242291) | GTM | Gets one tag from the resolved workspace. |
| [`gtm_update_tag`](#tool-gtm_update_tag-23807743) | GTM | Reads the tag, parses updates\_json, shallow-merges fields, and updates with its current fingerprint. |
| [`gtm_create_tag`](#tool-gtm_create_tag-c682840c) | GTM | Parses tag\_json and creates a tag in the resolved workspace. |
| [`gtm_list_triggers`](#tool-gtm_list_triggers-16b41a3c) | GTM | Lists the first API page of workspace triggers as IDs, names and types. |
| [`gtm_list_variables`](#tool-gtm_list_variables-81705a80) | GTM | Lists the first API page of workspace variables as IDs, names and types. |
| [`gtm_get_variable`](#tool-gtm_get_variable-e6ff3763) | GTM | Gets one variable from the resolved workspace. |
| [`gtm_create_variable`](#tool-gtm_create_variable-5b853337) | GTM | Parses variable\_json and creates a variable in the resolved workspace. |
| [`gtm_update_variable`](#tool-gtm_update_variable-898f92d4) | GTM | Reads the variable, parses updates\_json, shallow-merges fields, and updates with its current fingerprint. |
| [`gtm_delete_variable`](#tool-gtm_delete_variable-9bd36787) | GTM | Deletes one variable in the resolved workspace. |
| [`gtm_audit_consent`](#tool-gtm_audit_consent-28f3aaa1) | GTM | Fetches tags twice and classifies first-page consent status with tag-type/name-based recommendations; does not validate consent wiring. |
| [`gtm_preview`](#tool-gtm_preview-111bbf1a) | GTM | Calls workspace quick\_preview and returns its API response without constructing a preview URL. |
| [`gtm_create_version`](#tool-gtm_create_version-50a805d7) | GTM | Creates a container version from the resolved workspace and returns its ID, name and path without publishing. |
| [`gtm_ga4_run_report`](#tool-gtm_ga4_run_report-188b2232) | Other product | GA4: runs a historical report using configured property ID, comma-separated fields and optional equality filter; handler defaults eventName/eventCount, 7daysAgo/today and 100 rows. |
| [`gtm_ga4_realtime_report`](#tool-gtm_ga4_realtime_report-f3ffd3d8) | Other product | GA4: runs a realtime report using configured property ID, comma-separated fields and optional equality filter; defaults eventName/eventCount. |
| [`gtm_ga4_list_custom_dimensions`](#tool-gtm_ga4_list_custom_dimensions-827a6c89) | Other product | GA4: lists registered custom dimensions using the Analytics Admin client. |
| [`gtm_ga4_create_custom_dimension`](#tool-gtm_ga4_create_custom_dimension-be5f302d) | Other product | GA4: creates a custom dimension; maps scope USER to USER and every other value to EVENT. |

<a id="tool-gtm_get_client_context-9aa34e57"></a>

## gtm_get_client_context

Handler: Returns configured paths and version with a hard-coded healthy status; does not contact Google or resolve the actual workspace.

```text
Health check and status overview. Returns GTM container path, workspace ID, GA4 property ID, and server version. Use this to verify connectivity.
```

[Source](https://github.com/mharnett/mcp-gtm-ga4/blob/539cc67f638bd2a8c7678d5f93b84d68e49b0564/src/tools.ts#L5-L5) · [Handler](https://github.com/mharnett/mcp-gtm-ga4/blob/539cc67f638bd2a8c7678d5f93b84d68e49b0564/src/index.ts#L585-L592) · Schema: literal-source.

Exposure: Exposed by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "type": "object",
  "properties": {}
}
```

</details>

<a id="tool-gtm_list_tags-b585bc12"></a>

## gtm_list_tags

Handler: Lists the first API page of workspace tags and returns IDs, types, consent status, pause state and firing triggers.

```text
List all tags in the sandbox GTM workspace with name, type, consent status, and firing triggers.
```

[Source](https://github.com/mharnett/mcp-gtm-ga4/blob/539cc67f638bd2a8c7678d5f93b84d68e49b0564/src/tools.ts#L7-L7) · [Handler](https://github.com/mharnett/mcp-gtm-ga4/blob/539cc67f638bd2a8c7678d5f93b84d68e49b0564/src/index.ts#L338-L351) · Schema: literal-source.

Exposure: Exposed by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "type": "object",
  "properties": {}
}
```

</details>

<a id="tool-gtm_get_tag-3d242291"></a>

## gtm_get_tag

Handler: Gets one tag from the resolved workspace.

```text
Get full details of a single tag by ID from the sandbox workspace.
```

[Source](https://github.com/mharnett/mcp-gtm-ga4/blob/539cc67f638bd2a8c7678d5f93b84d68e49b0564/src/tools.ts#L8-L8) · [Handler](https://github.com/mharnett/mcp-gtm-ga4/blob/539cc67f638bd2a8c7678d5f93b84d68e49b0564/src/index.ts#L353-L360) · Schema: literal-source.

Exposure: Exposed by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "type": "object",
  "properties": {
    "tag_id": {
      "type": "string",
      "description": "The tag ID"
    }
  },
  "required": [
    "tag_id"
  ]
}
```

</details>

<a id="tool-gtm_update_tag-23807743"></a>

## gtm_update_tag

Handler: Reads the tag, parses updates\_json, shallow-merges fields, and updates with its current fingerprint.

```text
Update a tag in the sandbox workspace. Fetches current tag, merges updates, then saves. Safety: only operates on sandbox workspace.
```

[Source](https://github.com/mharnett/mcp-gtm-ga4/blob/539cc67f638bd2a8c7678d5f93b84d68e49b0564/src/tools.ts#L9-L9) · [Handler](https://github.com/mharnett/mcp-gtm-ga4/blob/539cc67f638bd2a8c7678d5f93b84d68e49b0564/src/index.ts#L362-L374) · Schema: literal-source.

Exposure: Only exposed/callable when GTM_GA4_MCP_WRITE=true.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "type": "object",
  "properties": {
    "tag_id": {
      "type": "string",
      "description": "The tag ID"
    },
    "updates_json": {
      "type": "string",
      "description": "JSON object with fields to update (e.g. consentSettings, parameter)"
    }
  },
  "required": [
    "tag_id",
    "updates_json"
  ]
}
```

</details>

<a id="tool-gtm_create_tag-c682840c"></a>

## gtm_create_tag

Handler: Parses tag\_json and creates a tag in the resolved workspace.

```text
Create a new tag in the sandbox workspace. Safety: only operates on sandbox workspace.
```

[Source](https://github.com/mharnett/mcp-gtm-ga4/blob/539cc67f638bd2a8c7678d5f93b84d68e49b0564/src/tools.ts#L10-L10) · [Handler](https://github.com/mharnett/mcp-gtm-ga4/blob/539cc67f638bd2a8c7678d5f93b84d68e49b0564/src/index.ts#L376-L384) · Schema: literal-source.

Exposure: Only exposed/callable when GTM_GA4_MCP_WRITE=true.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "type": "object",
  "properties": {
    "tag_json": {
      "type": "string",
      "description": "Full GTM tag JSON"
    }
  },
  "required": [
    "tag_json"
  ]
}
```

</details>

<a id="tool-gtm_list_triggers-16b41a3c"></a>

## gtm_list_triggers

Handler: Lists the first API page of workspace triggers as IDs, names and types.

```text
List all triggers in the sandbox GTM workspace.
```

[Source](https://github.com/mharnett/mcp-gtm-ga4/blob/539cc67f638bd2a8c7678d5f93b84d68e49b0564/src/tools.ts#L11-L11) · [Handler](https://github.com/mharnett/mcp-gtm-ga4/blob/539cc67f638bd2a8c7678d5f93b84d68e49b0564/src/index.ts#L386-L394) · Schema: literal-source.

Exposure: Exposed by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "type": "object",
  "properties": {}
}
```

</details>

<a id="tool-gtm_list_variables-81705a80"></a>

## gtm_list_variables

Handler: Lists the first API page of workspace variables as IDs, names and types.

```text
List all variables in the sandbox GTM workspace.
```

[Source](https://github.com/mharnett/mcp-gtm-ga4/blob/539cc67f638bd2a8c7678d5f93b84d68e49b0564/src/tools.ts#L12-L12) · [Handler](https://github.com/mharnett/mcp-gtm-ga4/blob/539cc67f638bd2a8c7678d5f93b84d68e49b0564/src/index.ts#L396-L404) · Schema: literal-source.

Exposure: Exposed by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "type": "object",
  "properties": {}
}
```

</details>

<a id="tool-gtm_get_variable-e6ff3763"></a>

## gtm_get_variable

Handler: Gets one variable from the resolved workspace.

```text
Get full details of a single variable by ID from the sandbox workspace.
```

[Source](https://github.com/mharnett/mcp-gtm-ga4/blob/539cc67f638bd2a8c7678d5f93b84d68e49b0564/src/tools.ts#L13-L13) · [Handler](https://github.com/mharnett/mcp-gtm-ga4/blob/539cc67f638bd2a8c7678d5f93b84d68e49b0564/src/index.ts#L406-L413) · Schema: literal-source.

Exposure: Exposed by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "type": "object",
  "properties": {
    "variable_id": {
      "type": "string",
      "description": "The variable ID"
    }
  },
  "required": [
    "variable_id"
  ]
}
```

</details>

<a id="tool-gtm_create_variable-5b853337"></a>

## gtm_create_variable

Handler: Parses variable\_json and creates a variable in the resolved workspace.

```text
Create a new variable in the sandbox workspace. Safety: only operates on sandbox workspace.
```

[Source](https://github.com/mharnett/mcp-gtm-ga4/blob/539cc67f638bd2a8c7678d5f93b84d68e49b0564/src/tools.ts#L14-L14) · [Handler](https://github.com/mharnett/mcp-gtm-ga4/blob/539cc67f638bd2a8c7678d5f93b84d68e49b0564/src/index.ts#L429-L437) · Schema: literal-source.

Exposure: Only exposed/callable when GTM_GA4_MCP_WRITE=true.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "type": "object",
  "properties": {
    "variable_json": {
      "type": "string",
      "description": "Full GTM variable JSON (must include name, type, and type-appropriate parameter array)"
    }
  },
  "required": [
    "variable_json"
  ]
}
```

</details>

<a id="tool-gtm_update_variable-898f92d4"></a>

## gtm_update_variable

Handler: Reads the variable, parses updates\_json, shallow-merges fields, and updates with its current fingerprint.

```text
Update a variable in the sandbox workspace. Fetches current variable, merges updates, then saves. Safety: only operates on sandbox workspace.
```

[Source](https://github.com/mharnett/mcp-gtm-ga4/blob/539cc67f638bd2a8c7678d5f93b84d68e49b0564/src/tools.ts#L15-L15) · [Handler](https://github.com/mharnett/mcp-gtm-ga4/blob/539cc67f638bd2a8c7678d5f93b84d68e49b0564/src/index.ts#L415-L427) · Schema: literal-source.

Exposure: Only exposed/callable when GTM_GA4_MCP_WRITE=true.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "type": "object",
  "properties": {
    "variable_id": {
      "type": "string",
      "description": "The variable ID"
    },
    "updates_json": {
      "type": "string",
      "description": "JSON object with fields to update (e.g. parameter, name)"
    }
  },
  "required": [
    "variable_id",
    "updates_json"
  ]
}
```

</details>

<a id="tool-gtm_delete_variable-9bd36787"></a>

## gtm_delete_variable

Handler: Deletes one variable in the resolved workspace.

```text
Delete a variable from the sandbox workspace. Destructive. Safety: only operates on sandbox workspace.
```

[Source](https://github.com/mharnett/mcp-gtm-ga4/blob/539cc67f638bd2a8c7678d5f93b84d68e49b0564/src/tools.ts#L16-L16) · [Handler](https://github.com/mharnett/mcp-gtm-ga4/blob/539cc67f638bd2a8c7678d5f93b84d68e49b0564/src/index.ts#L439-L446) · Schema: literal-source.

Exposure: Only exposed/callable when GTM_GA4_MCP_WRITE=true.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "type": "object",
  "properties": {
    "variable_id": {
      "type": "string",
      "description": "The variable ID"
    }
  },
  "required": [
    "variable_id"
  ]
}
```

</details>

<a id="tool-gtm_audit_consent-28f3aaa1"></a>

## gtm_audit_consent

Handler: Fetches tags twice and classifies first-page consent status with tag-type/name-based recommendations; does not validate consent wiring.

```text
Scan all tags in the sandbox workspace and report consent compliance. Returns tags with no consent, NOT_NEEDED tags, properly configured tags, and recommendations.
```

[Source](https://github.com/mharnett/mcp-gtm-ga4/blob/539cc67f638bd2a8c7678d5f93b84d68e49b0564/src/tools.ts#L17-L17) · [Handler](https://github.com/mharnett/mcp-gtm-ga4/blob/539cc67f638bd2a8c7678d5f93b84d68e49b0564/src/index.ts#L448-L477) · Schema: literal-source.

Exposure: Exposed by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "type": "object",
  "properties": {}
}
```

</details>

<a id="tool-gtm_preview-111bbf1a"></a>

## gtm_preview

Handler: Calls workspace quick\_preview and returns its API response without constructing a preview URL.

```text
Generate a GTM Preview URL for the sandbox workspace.
```

[Source](https://github.com/mharnett/mcp-gtm-ga4/blob/539cc67f638bd2a8c7678d5f93b84d68e49b0564/src/tools.ts#L18-L18) · [Handler](https://github.com/mharnett/mcp-gtm-ga4/blob/539cc67f638bd2a8c7678d5f93b84d68e49b0564/src/index.ts#L479-L486) · Schema: literal-source.

Exposure: Exposed by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "type": "object",
  "properties": {}
}
```

</details>

<a id="tool-gtm_create_version-50a805d7"></a>

## gtm_create_version

Handler: Creates a container version from the resolved workspace and returns its ID, name and path without publishing.

```text
Create a version (snapshot) of the sandbox workspace. Does NOT publish.
```

[Source](https://github.com/mharnett/mcp-gtm-ga4/blob/539cc67f638bd2a8c7678d5f93b84d68e49b0564/src/tools.ts#L19-L19) · [Handler](https://github.com/mharnett/mcp-gtm-ga4/blob/539cc67f638bd2a8c7678d5f93b84d68e49b0564/src/index.ts#L488-L498) · Schema: literal-source.

Exposure: Only exposed/callable when GTM_GA4_MCP_WRITE=true.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Version name (e.g., \"Consent fixes v1\")"
    },
    "notes": {
      "type": "string",
      "description": "Optional version notes"
    }
  },
  "required": [
    "name"
  ]
}
```

</details>

<a id="tool-gtm_ga4_run_report-188b2232"></a>

## gtm_ga4_run_report

Handler: GA4: runs a historical report using configured property ID, comma-separated fields and optional equality filter; handler defaults eventName/eventCount, 7daysAgo/today and 100 rows.

```text
Query GA4 historical report for the property linked to this GTM container.
```

[Source](https://github.com/mharnett/mcp-gtm-ga4/blob/539cc67f638bd2a8c7678d5f93b84d68e49b0564/src/tools.ts#L21-L21) · [Handler](https://github.com/mharnett/mcp-gtm-ga4/blob/539cc67f638bd2a8c7678d5f93b84d68e49b0564/src/index.ts#L514-L530) · Schema: literal-source.

Exposure: Exposed by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "type": "object",
  "properties": {
    "dimensions": {
      "type": "string",
      "description": "Comma-separated dimensions (e.g., \"eventName,date\")"
    },
    "metrics": {
      "type": "string",
      "description": "Comma-separated metrics (e.g., \"eventCount,activeUsers\")"
    },
    "start_date": {
      "type": "string",
      "description": "Start date (YYYY-MM-DD or \"7daysAgo\")"
    },
    "end_date": {
      "type": "string",
      "description": "End date (YYYY-MM-DD or \"today\")"
    },
    "dimension_filter": {
      "type": "string",
      "description": "Optional equality filter (e.g., \"eventName==page_view\")"
    },
    "limit": {
      "type": "number",
      "description": "Max rows (default 100)"
    }
  }
}
```

</details>

<a id="tool-gtm_ga4_realtime_report-f3ffd3d8"></a>

## gtm_ga4_realtime_report

Handler: GA4: runs a realtime report using configured property ID, comma-separated fields and optional equality filter; defaults eventName/eventCount.

```text
Query GA4 Realtime Report (last 30 minutes) for the property linked to this GTM container.
```

[Source](https://github.com/mharnett/mcp-gtm-ga4/blob/539cc67f638bd2a8c7678d5f93b84d68e49b0564/src/tools.ts#L22-L22) · [Handler](https://github.com/mharnett/mcp-gtm-ga4/blob/539cc67f638bd2a8c7678d5f93b84d68e49b0564/src/index.ts#L532-L546) · Schema: literal-source.

Exposure: Exposed by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "type": "object",
  "properties": {
    "dimensions": {
      "type": "string",
      "description": "Comma-separated dimensions"
    },
    "metrics": {
      "type": "string",
      "description": "Comma-separated metrics"
    },
    "dimension_filter": {
      "type": "string",
      "description": "Optional equality filter"
    }
  }
}
```

</details>

<a id="tool-gtm_ga4_list_custom_dimensions-827a6c89"></a>

## gtm_ga4_list_custom_dimensions

Handler: GA4: lists registered custom dimensions using the Analytics Admin client.

```text
List all registered custom dimensions for the GA4 property linked to this GTM container.
```

[Source](https://github.com/mharnett/mcp-gtm-ga4/blob/539cc67f638bd2a8c7678d5f93b84d68e49b0564/src/tools.ts#L23-L23) · [Handler](https://github.com/mharnett/mcp-gtm-ga4/blob/539cc67f638bd2a8c7678d5f93b84d68e49b0564/src/index.ts#L548-L555) · Schema: literal-source.

Exposure: Exposed by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "type": "object",
  "properties": {}
}
```

</details>

<a id="tool-gtm_ga4_create_custom_dimension-be5f302d"></a>

## gtm_ga4_create_custom_dimension

Handler: GA4: creates a custom dimension; maps scope USER to USER and every other value to EVENT.

```text
Register a new custom dimension in the GA4 property linked to this GTM container.
```

[Source](https://github.com/mharnett/mcp-gtm-ga4/blob/539cc67f638bd2a8c7678d5f93b84d68e49b0564/src/tools.ts#L24-L24) · [Handler](https://github.com/mharnett/mcp-gtm-ga4/blob/539cc67f638bd2a8c7678d5f93b84d68e49b0564/src/index.ts#L557-L566) · Schema: literal-source.

Exposure: Only exposed/callable when GTM_GA4_MCP_WRITE=true.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "type": "object",
  "properties": {
    "parameter_name": {
      "type": "string",
      "description": "Event parameter name (e.g., \"form_type\")"
    },
    "display_name": {
      "type": "string",
      "description": "Human-readable name (e.g., \"Form Type\")"
    },
    "scope": {
      "type": "string",
      "description": "\"EVENT\" or \"USER\" (default: EVENT)"
    },
    "description": {
      "type": "string",
      "description": "Optional description"
    }
  },
  "required": [
    "parameter_name",
    "display_name"
  ]
}
```

</details>
