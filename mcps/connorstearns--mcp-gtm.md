# connorstearns/mcp-gtm

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/connorstearns/mcp-gtm) · [Machine-readable inventory](../data/mcps/connorstearns--mcp-gtm.json)

**7 extracted tools.** Plans CSV batches of tracking tags and triggers and exposes draft creation with dry-run bodies.

Snapshot: 2026-10-13 · [caac2734b363](https://github.com/connorstearns/mcp-gtm/tree/caac2734b363273f35ef14904756db3ba03391c6) · Method: source.

Exposure: All seven tools always listed. ALLOW_GTM_WRITES defaults to 0 and gates all creation/batch-apply invocations, including dryRun; optional MCP_SHARED_KEY gates POST requests.

## Limits

- Static AST extraction of the exact tools_descriptor literal; no GTM calls or runtime credential use. No defaults exist in advertised schemas; handler defaults are implementation-only.
- batch_plan_from_csv/create_trigger row mapping omits eventName and useRegex, so CSV CUSTOM_EVENT triggers cannot be applied successfully (lines 616-632).
- create_trigger advertises up to five filters, but direct calls have no schema maxItems or handler cap; ANY uses an unverified or condition with nested conditions in parameter (lines 120-139).
- batch_apply_from_csv collects nested JSON-RPC error results in applied without inspecting isError and always reports ok=true (lines 662-694).
- audit_container error path receives a tuple from mcp_invoke, leaves data=None and then calls data.get, obscuring the original audit error (lines 401-410, 732-735, 787-789).
- Creation bodies have not been validated against live GTM; custom-event conditions, GA4 configuration tag references and trigger-specific parameter layouts need API compatibility review.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`list_workspaces`](#tool-list_workspaces-af844119) | GTM | Lists GTM workspace IDs, names and descriptions through the Tag Manager v2 API. |
| [`audit_container`](#tool-audit_container-8180158f) | GTM | Lists workspace tags, triggers and variables and reports GA4 configuration/event lint findings. |
| [`create_ga4_config_tag`](#tool-create_ga4_config_tag-fa7edb9a) | GTM | Creates a gaawc tag with measurementId and sendPageView parameters, or returns its planned body when dryRun is true. |
| [`create_ga4_event_tag`](#tool-create_ga4_event_tag-c3cefbbb) | GTM | Resolves trigger names and optional configuration tag names, then creates a gaawe event tag or returns its planned body. |
| [`create_trigger`](#tool-create_trigger-71660c93) | GTM | Maps supported trigger type names to GTM types, builds trigger parameters and filters, and creates a trigger or returns its planned body. |
| [`batch_plan_from_csv`](#tool-batch_plan_from_csv-4d1ed4fc) | GTM | Parses CSV rows into ordered-action candidate arguments and counts without calling the GTM API. |
| [`batch_apply_from_csv`](#tool-batch_apply_from_csv-557064e2) | GTM | Parses CSV rows and recursively calls trigger, GA4 configuration and GA4 event creation in dependency order. |

<a id="tool-list_workspaces-af844119"></a>

## list_workspaces

Handler: Lists GTM workspace IDs, names and descriptions through the Tag Manager v2 API.

```text
List workspace IDs and names for a container.
```

[Source](https://github.com/connorstearns/mcp-gtm/blob/caac2734b363273f35ef14904756db3ba03391c6/app.py#L222-L226) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string"
    },
    "containerId": {
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId"
  ]
}
```

</details>

<a id="tool-audit_container-8180158f"></a>

## audit_container

Handler: Lists workspace tags, triggers and variables and reports GA4 configuration/event lint findings.

```text
Audit a GTM container and summarize GA4 tags/triggers with lint rules.
```

[Source](https://github.com/connorstearns/mcp-gtm/blob/caac2734b363273f35ef14904756db3ba03391c6/app.py#L227-L231) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string"
    },
    "containerId": {
      "type": "string"
    },
    "workspaceId": {
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId"
  ]
}
```

</details>

<a id="tool-create_ga4_config_tag-fa7edb9a"></a>

## create_ga4_config_tag

Handler: Creates a gaawc tag with measurementId and sendPageView parameters, or returns its planned body when dryRun is true.

```text
Create a GA4 Configuration tag in a GTM workspace.
```

[Source](https://github.com/connorstearns/mcp-gtm/blob/caac2734b363273f35ef14904756db3ba03391c6/app.py#L234-L246) · Schema: literal-source.

Exposure: Always listed; invocation requires ALLOW_GTM_WRITES truthy, including dryRun. Default ALLOW_GTM_WRITES=0 disables invocation.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string"
    },
    "containerId": {
      "type": "string"
    },
    "workspaceId": {
      "type": "string"
    },
    "measurementId": {
      "type": "string"
    },
    "tagName": {
      "type": "string"
    },
    "sendPageView": {
      "type": "boolean"
    },
    "dryRun": {
      "type": "boolean"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "measurementId"
  ]
}
```

</details>

<a id="tool-create_ga4_event_tag-c3cefbbb"></a>

## create_ga4_event_tag

Handler: Resolves trigger names and optional configuration tag names, then creates a gaawe event tag or returns its planned body.

```text
Create a GA4 Event tag. Provide either measurementId OR a GA4 Config tag reference (configTagId or configTagName).
```

[Source](https://github.com/connorstearns/mcp-gtm/blob/caac2734b363273f35ef14904756db3ba03391c6/app.py#L247-L261) · Schema: literal-source.

Exposure: Always listed; invocation requires ALLOW_GTM_WRITES truthy, including dryRun. Default ALLOW_GTM_WRITES=0 disables invocation.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string"
    },
    "containerId": {
      "type": "string"
    },
    "workspaceId": {
      "type": "string"
    },
    "eventName": {
      "type": "string"
    },
    "triggerIds": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "measurementId": {
      "type": "string"
    },
    "configTagId": {
      "type": "string"
    },
    "configTagName": {
      "type": "string"
    },
    "eventParameters": {
      "type": "object"
    },
    "tagName": {
      "type": "string"
    },
    "dryRun": {
      "type": "boolean"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "eventName",
    "triggerIds"
  ]
}
```

</details>

<a id="tool-create_trigger-71660c93"></a>

## create_trigger

Handler: Maps supported trigger type names to GTM types, builds trigger parameters and filters, and creates a trigger or returns its planned body.

```text
Create a GTM Trigger (Pageview, DOM Ready, Window Loaded, Custom Event, Click, Link Click, Form Submission, History Change, Timer, JS Error, Element Visibility, YouTube Video, Trigger Group). Supports filter_logic + up to 5 filters.
```

[Source](https://github.com/connorstearns/mcp-gtm/blob/caac2734b363273f35ef14904756db3ba03391c6/app.py#L262-L297) · Schema: literal-source.

Exposure: Always listed; invocation requires ALLOW_GTM_WRITES truthy, including dryRun. Default ALLOW_GTM_WRITES=0 disables invocation.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string"
    },
    "containerId": {
      "type": "string"
    },
    "workspaceId": {
      "type": "string"
    },
    "type": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "triggerKey": {
      "type": "string"
    },
    "eventName": {
      "type": "string"
    },
    "useRegex": {
      "type": "boolean"
    },
    "waitForTags": {
      "type": "boolean"
    },
    "waitForTagsTimeout": {
      "type": "integer"
    },
    "checkValidation": {
      "type": "boolean"
    },
    "selectionMethod": {
      "type": "string",
      "enum": [
        "CSS_SELECTOR",
        "ID"
      ]
    },
    "selector": {
      "type": "string"
    },
    "elementId": {
      "type": "string"
    },
    "minPercentVisible": {
      "type": "integer"
    },
    "observeDomChanges": {
      "type": "boolean"
    },
    "fireOnce": {
      "type": "boolean"
    },
    "captureStart": {
      "type": "boolean"
    },
    "captureComplete": {
      "type": "boolean"
    },
    "capturePause": {
      "type": "boolean"
    },
    "captureProgress": {
      "type": "boolean"
    },
    "progressThresholds": {
      "type": "array",
      "items": {
        "type": "integer"
      }
    },
    "intervalMs": {
      "type": "integer"
    },
    "limit": {
      "type": "integer"
    },
    "groupTriggerIds": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "filterLogic": {
      "type": "string",
      "enum": [
        "ALL",
        "ANY"
      ]
    },
    "filters": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "var": {
            "type": "string"
          },
          "op": {
            "type": "string"
          },
          "val": {
            "type": [
              "string",
              "number",
              "boolean"
            ]
          }
        },
        "required": [
          "var",
          "op"
        ]
      }
    },
    "dryRun": {
      "type": "boolean"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "type"
  ]
}
```

</details>

<a id="tool-batch_plan_from_csv-4d1ed4fc"></a>

## batch_plan_from_csv

Handler: Parses CSV rows into ordered-action candidate arguments and counts without calling the GTM API.

```text
Parse CSV text following the template and return a dry-run plan (no writes).
```

[Source](https://github.com/connorstearns/mcp-gtm/blob/caac2734b363273f35ef14904756db3ba03391c6/app.py#L300-L304) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "csvText": {
      "type": "string"
    }
  },
  "required": [
    "csvText"
  ]
}
```

</details>

<a id="tool-batch_apply_from_csv-557064e2"></a>

## batch_apply_from_csv

Handler: Parses CSV rows and recursively calls trigger, GA4 configuration and GA4 event creation in dependency order.

```text
Parse CSV text and apply in dependency order (Triggers -> GA4 Config -> GA4 Event). Respects dryRun in rows and ALLOW_GTM_WRITES.
```

[Source](https://github.com/connorstearns/mcp-gtm/blob/caac2734b363273f35ef14904756db3ba03391c6/app.py#L305-L309) · Schema: literal-source.

Exposure: Always listed; invocation requires ALLOW_GTM_WRITES truthy, including dryRun. Default ALLOW_GTM_WRITES=0 disables invocation.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "csvText": {
      "type": "string"
    }
  },
  "required": [
    "csvText"
  ]
}
```

</details>
