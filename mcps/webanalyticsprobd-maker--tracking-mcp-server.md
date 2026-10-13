# webanalyticsprobd-maker/tracking-mcp-server

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/webanalyticsprobd-maker/tracking-mcp-server) · [Machine-readable inventory](../data/mcps/webanalyticsprobd-maker--tracking-mcp-server.json)

**4 extracted tools.** Check dataLayer event fields, generate GTM/gtag snippets, and score supplied tracking payloads with local heuristics.

Snapshot: 2026-10-13 · [285aacefcdf2](https://github.com/webanalyticsprobd-maker/tracking-mcp-server/tree/285aacefcdf28fa7ada6da58759dd2cf5e844413) · Method: mixed.

Exposure: All four tools registered unconditionally; no configuration or read-only groups. GA4 transmission is a separate product tool. Audit also supports Meta CAPI and GA4; snippet also supports GA4 and React.

## Limits

- Offline tools/list obtained from isolated source copy with freshly resolved semver dependencies, not a pinned upstream lockfile: @modelcontextprotocol/sdk and zod versions are preserved in work package-lock.json. No tool operations executed.
- Audit readiness score is an implementation heuristic, not GA4 validation or actual Meta EMQ.
- GA4 sender falls back to demo credentials and masks fetch failures as simulated_success; HTTP error responses are not treated as errors.
- Snippet generation does not escape event names or object property keys. Validator schema prevents reporting several invalid types because MCP rejects them first.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`validate_datalayer_event`](#tool-validate_datalayer_event-08231b06) | GTM | Locally checks event presence, selected ecommerce fields and purchase transaction\_id; MCP schema requires both item\_id and item\_name plus price and quantity before handler validation (controller.ts L6-L109). |
| [`send_ga4_measurement_protocol_event`](#tool-send_ga4_measurement_protocol_event-f3a61100) | Other product | Google Analytics 4: posts to /mp/collect using argument or environment credentials, with demo fallback credentials; network failures return simulated\_success and any non-204 response is reported as submitted (controller.ts L114-L159). |
| [`generate_tracking_code_snippet`](#tool-generate_tracking_code_snippet-cc155dd3) | GTM | Locally generates dataLayer.push, gtag or React hook text without installing it; event names and property keys are interpolated without escaping, so arbitrary inputs can generate invalid JavaScript (controller.ts L164-L199). |
| [`audit_tracking_readiness`](#tool-audit_tracking_readiness-99bb1c40) | GTM | Locally assigns a heuristic score from missing event, ecommerce or Meta user\_data fields; GA4 and GTM share checks and the Meta score is not a measured EMQ (controller.ts L204-L260). |

<a id="tool-validate_datalayer_event-08231b06"></a>

## validate_datalayer_event

Handler: Locally checks event presence, selected ecommerce fields and purchase transaction\_id; MCP schema requires both item\_id and item\_name plus price and quantity before handler validation (controller.ts L6-L109).

```text
Validates a GTM DataLayer event payload against GA4 & E-commerce schema standards to detect missing parameters or invalid types.
```

[Source](https://github.com/webanalyticsprobd-maker/tracking-mcp-server/blob/285aacefcdf28fa7ada6da58759dd2cf5e844413/src/index.ts#L24-L50) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "eventPayload": {
      "type": "object",
      "properties": {
        "event": {
          "type": "string",
          "description": "The name of the DataLayer event (e.g. 'purchase', 'add_to_cart', 'lead')"
        },
        "currency": {
          "type": "string",
          "description": "ISO 4217 3-letter currency code (e.g. 'USD', 'EUR')"
        },
        "value": {
          "type": "number",
          "description": "Monetary value associated with the event"
        },
        "transaction_id": {
          "type": "string",
          "description": "Unique transaction ID for purchase events"
        },
        "items": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "item_id": {
                "type": "string",
                "description": "Product ID or SKU"
              },
              "item_name": {
                "type": "string",
                "description": "Product name"
              },
              "price": {
                "type": "number",
                "description": "Item unit price"
              },
              "quantity": {
                "type": "number",
                "description": "Item quantity"
              },
              "item_category": {
                "type": "string",
                "description": "Product category"
              },
              "item_brand": {
                "type": "string",
                "description": "Product brand"
              }
            },
            "required": [
              "item_id",
              "item_name",
              "price",
              "quantity"
            ],
            "additionalProperties": false
          },
          "description": "Array of e-commerce items"
        },
        "user_data": {
          "type": "object",
          "properties": {
            "email_hash": {
              "type": "string"
            },
            "phone_hash": {
              "type": "string"
            },
            "client_id": {
              "type": "string"
            }
          },
          "additionalProperties": false,
          "description": "Hashed user data for CAPI matching"
        }
      },
      "required": [
        "event"
      ],
      "additionalProperties": true,
      "description": "The complete DataLayer event JSON object to validate"
    }
  },
  "required": [
    "eventPayload"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-send_ga4_measurement_protocol_event-f3a61100"></a>

## send_ga4_measurement_protocol_event

Handler: Google Analytics 4: posts to /mp/collect using argument or environment credentials, with demo fallback credentials; network failures return simulated\_success and any non-204 response is reported as submitted (controller.ts L114-L159).

```text
Transmits a server-side analytics event to Google Analytics 4 via Measurement Protocol API.
```

[Source](https://github.com/webanalyticsprobd-maker/tracking-mcp-server/blob/285aacefcdf28fa7ada6da58759dd2cf5e844413/src/index.ts#L52-L85) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "clientId": {
      "type": "string",
      "description": "GA4 Client ID (e.g. '123456789.987654321')"
    },
    "eventName": {
      "type": "string",
      "description": "Name of the event to track (e.g. 'purchase', 'page_view')"
    },
    "measurementId": {
      "type": "string",
      "description": "GA4 Measurement ID override (default read from ENV)"
    },
    "apiSecret": {
      "type": "string",
      "description": "GA4 API Secret override (default read from ENV)"
    },
    "eventParams": {
      "type": "object",
      "additionalProperties": {},
      "description": "Arbitrary event parameters object"
    }
  },
  "required": [
    "clientId",
    "eventName"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-generate_tracking_code_snippet-cc155dd3"></a>

## generate_tracking_code_snippet

Handler: Locally generates dataLayer.push, gtag or React hook text without installing it; event names and property keys are interpolated without escaping, so arbitrary inputs can generate invalid JavaScript (controller.ts L164-L199).

```text
Generates production-ready tracking code snippets for GTM dataLayer.push, GA4 gtag.js, or React custom hook.
```

[Source](https://github.com/webanalyticsprobd-maker/tracking-mcp-server/blob/285aacefcdf28fa7ada6da58759dd2cf5e844413/src/index.ts#L87-L113) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "enum": [
        "gtm_datalayer",
        "ga4_gtag",
        "react_hook"
      ],
      "description": "Target platform format for code generation"
    },
    "eventName": {
      "type": "string",
      "description": "Name of event (e.g. 'add_to_cart', 'lead')"
    },
    "parameters": {
      "type": "object",
      "additionalProperties": {},
      "description": "Event parameters key-value object"
    }
  },
  "required": [
    "platform",
    "eventName",
    "parameters"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-audit_tracking_readiness-99bb1c40"></a>

## audit_tracking_readiness

Handler: Locally assigns a heuristic score from missing event, ecommerce or Meta user\_data fields; GA4 and GTM share checks and the Meta score is not a measured EMQ (controller.ts L204-L260).

```text
Audits a tracking event payload against GA4 or Meta CAPI readiness standards and returns an EMQ/Quality score (0-100) with actionable recommendations.
```

[Source](https://github.com/webanalyticsprobd-maker/tracking-mcp-server/blob/285aacefcdf28fa7ada6da58759dd2cf5e844413/src/index.ts#L115-L144) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "enum": [
        "GA4",
        "Meta CAPI",
        "GTM"
      ],
      "description": "Platform to audit event against"
    },
    "payload": {
      "type": "object",
      "additionalProperties": {},
      "description": "Event object payload to audit"
    }
  },
  "required": [
    "platform",
    "payload"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>
