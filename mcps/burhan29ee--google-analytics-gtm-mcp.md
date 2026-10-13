# burhan29ee/google-analytics-gtm-mcp

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/burhan29ee/google-analytics-gtm-mcp) · [Machine-readable inventory](../data/mcps/burhan29ee--google-analytics-gtm-mcp.json)

**40 extracted tools.** Creates and edits workspace resources from JSON strings and confirms deletions and version publication.

Snapshot: 2026-10-13 · [c163c78f04c7](https://github.com/burhan29ee/google-analytics-gtm-mcp/tree/c163c78f04c70144ef39e2e79dc64e93b74ccf10) · Method: reconstructed.

Exposure: All 40 decorated tools register unconditionally; clients and credentials are initialized lazily when handlers run.

## Limits

- Offline FastMCP registration executes only source function definitions; original third-party Google imports and authenticated handlers were not executed. Schemas reflect the installed MCP/Pydantic versions; upstream dependency ranges are not locked.
- GTM list handlers return one API response and do not follow pagination tokens. JSON resource parameters are strings, with no nested GTM resource validation in the public schema.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`list_account_summaries`](#tool-list_account_summaries-b9813102) | Other product | Google Analytics 4: List every GA4 account and its properties the service account can see. |
| [`get_property_details`](#tool-get_property_details-c3909713) | Other product | Google Analytics 4: Get configuration details for one GA4 property (name, time zone, |
| [`list_data_streams`](#tool-list_data_streams-10a08f95) | Other product | Google Analytics 4: List the data streams (web/app) on a GA4 property. The stream id (last |
| [`run_report`](#tool-run_report-b9ac116b) | Other product | Google Analytics 4: Run a GA4 report. metrics/dimensions are GA4 API names (e.g. metrics |
| [`run_realtime_report`](#tool-run_realtime_report-ac5f8d77) | Other product | Google Analytics 4: Run a GA4 realtime report (last ~30 minutes). Example: metrics |
| [`list_custom_dimensions`](#tool-list_custom_dimensions-616826eb) | Other product | Google Analytics 4: List custom dimensions defined on a GA4 property. |
| [`create_custom_dimension`](#tool-create_custom_dimension-4a75216f) | Other product | Google Analytics 4: Create a custom dimension. parameter\_name is the event parameter / user |
| [`archive_custom_dimension`](#tool-archive_custom_dimension-9576a80e) | Other product | Google Analytics 4: Archive (delete) a custom dimension. custom\_dimension\_id may be the |
| [`list_custom_metrics`](#tool-list_custom_metrics-e65d7a89) | Other product | Google Analytics 4: List custom metrics defined on a GA4 property. |
| [`create_custom_metric`](#tool-create_custom_metric-b806af69) | Other product | Google Analytics 4: Create a custom metric. measurement\_unit is one of STANDARD, CURRENCY, |
| [`list_key_events`](#tool-list_key_events-b7d774fc) | Other product | Google Analytics 4: List key events (conversions) on a GA4 property. |
| [`create_key_event`](#tool-create_key_event-3eea6082) | Other product | Google Analytics 4: Mark an event as a key event (conversion). counting\_method is |
| [`list_audiences`](#tool-list_audiences-a661b417) | Other product | Google Analytics 4: List audiences defined on a GA4 property. |
| [`create_event_audience`](#tool-create_event_audience-2e2c3976) | Other product | Google Analytics 4: Create a GA4 audience of users who triggered a given event (e.g. |
| [`archive_audience`](#tool-archive_audience-d6627d6d) | Other product | Google Analytics 4: Archive a GA4 audience. audience\_id may be the numeric id or the full |
| [`list_measurement_protocol_secrets`](#tool-list_measurement_protocol_secrets-44c9d7b3) | Other product | Google Analytics 4: List Measurement Protocol API secrets for a data stream. stream\_id is |
| [`create_measurement_protocol_secret`](#tool-create_measurement_protocol_secret-a4b38d24) | Other product | Google Analytics 4: Create a Measurement Protocol API secret on a data stream. Returns the |
| [`delete_measurement_protocol_secret`](#tool-delete_measurement_protocol_secret-90710986) | Other product | Google Analytics 4: Delete a Measurement Protocol API secret. secret\_id may be the numeric |
| [`send_ga4_event`](#tool-send_ga4_event-9061a53b) | Other product | Google Analytics 4: Send an event into a GA4 property via the Measurement Protocol. |
| [`gtm_whoami`](#tool-gtm_whoami-6c429280) | GTM | Reads service-account identity and configured scopes and lists accessible GTM accounts. |
| [`gtm_list_accounts`](#tool-gtm_list_accounts-c5d9b27f) | GTM | List all GTM accounts the service account can access. |
| [`gtm_list_containers`](#tool-gtm_list_containers-e45afd2b) | GTM | List containers in a GTM account. |
| [`gtm_list_workspaces`](#tool-gtm_list_workspaces-248ce86f) | GTM | List workspaces in a container. |
| [`gtm_list_tags`](#tool-gtm_list_tags-b585bc12) | GTM | List tags in a workspace. |
| [`gtm_list_triggers`](#tool-gtm_list_triggers-16b41a3c) | GTM | List triggers in a workspace. |
| [`gtm_list_variables`](#tool-gtm_list_variables-81705a80) | GTM | List variables in a workspace. |
| [`gtm_get_tag`](#tool-gtm_get_tag-3d242291) | GTM | Get a single tag by id. |
| [`gtm_list_versions`](#tool-gtm_list_versions-f9371c4c) | GTM | List container version headers (published + saved versions). |
| [`gtm_get_live_version`](#tool-gtm_get_live_version-986da5ee) | GTM | Get the currently live (published) container version. |
| [`gtm_create_tag`](#tool-gtm_create_tag-c682840c) | GTM | Parses the resource JSON string as an object and calls the corresponding GTM workspace resource API. |
| [`gtm_update_tag`](#tool-gtm_update_tag-23807743) | GTM | Parses the resource JSON string as an object and calls the corresponding GTM workspace resource API. |
| [`gtm_delete_tag`](#tool-gtm_delete_tag-42a56cac) | GTM | Deletes the specified GTM workspace resource only when confirm is true. |
| [`gtm_create_trigger`](#tool-gtm_create_trigger-99da4322) | GTM | Parses the resource JSON string as an object and calls the corresponding GTM workspace resource API. |
| [`gtm_update_trigger`](#tool-gtm_update_trigger-ce48de45) | GTM | Parses the resource JSON string as an object and calls the corresponding GTM workspace resource API. |
| [`gtm_delete_trigger`](#tool-gtm_delete_trigger-dac3085f) | GTM | Deletes the specified GTM workspace resource only when confirm is true. |
| [`gtm_create_variable`](#tool-gtm_create_variable-5b853337) | GTM | Parses the resource JSON string as an object and calls the corresponding GTM workspace resource API. |
| [`gtm_update_variable`](#tool-gtm_update_variable-898f92d4) | GTM | Parses the resource JSON string as an object and calls the corresponding GTM workspace resource API. |
| [`gtm_delete_variable`](#tool-gtm_delete_variable-9bd36787) | GTM | Deletes the specified GTM workspace resource only when confirm is true. |
| [`gtm_create_version`](#tool-gtm_create_version-50a805d7) | GTM | Calls GTM workspace create\_version with name and optional notes to create a saved container version. |
| [`gtm_publish_version`](#tool-gtm_publish_version-0cc97535) | GTM | Calls GTM container version publish only when confirm is true. |

<a id="tool-list_account_summaries-b9813102"></a>

## list_account_summaries

Handler: Google Analytics 4: List every GA4 account and its properties the service account can see.

```text
List every GA4 account and its properties the service account can see.
Returns account name/id plus each property's display name and numeric id.
Call this first to discover property ids for the other GA4 tools.
```

[Source](https://github.com/burhan29ee/google-analytics-gtm-mcp/blob/c163c78f04c70144ef39e2e79dc64e93b74ccf10/src/google_analytics_gtm_mcp/server.py#L144-L165) · Schema: reconstructed.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "list_account_summariesArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_property_details-c3909713"></a>

## get_property_details

Handler: Google Analytics 4: Get configuration details for one GA4 property (name, time zone,

```text
Get configuration details for one GA4 property (name, time zone,
currency, industry, create time).
```

[Source](https://github.com/burhan29ee/google-analytics-gtm-mcp/blob/c163c78f04c70144ef39e2e79dc64e93b74ccf10/src/google_analytics_gtm_mcp/server.py#L168-L180) · Schema: reconstructed.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "property_id": {
      "title": "Property Id",
      "type": "string"
    }
  },
  "required": [
    "property_id"
  ],
  "title": "get_property_detailsArguments",
  "type": "object"
}
```

</details>

<a id="tool-list_data_streams-10a08f95"></a>

## list_data_streams

Handler: Google Analytics 4: List the data streams (web/app) on a GA4 property. The stream id (last

```text
List the data streams (web/app) on a GA4 property. The stream id (last
path segment of 'name') is needed by the Measurement Protocol secret tools.
```

[Source](https://github.com/burhan29ee/google-analytics-gtm-mcp/blob/c163c78f04c70144ef39e2e79dc64e93b74ccf10/src/google_analytics_gtm_mcp/server.py#L183-L198) · Schema: reconstructed.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "property_id": {
      "title": "Property Id",
      "type": "string"
    }
  },
  "required": [
    "property_id"
  ],
  "title": "list_data_streamsArguments",
  "type": "object"
}
```

</details>

<a id="tool-run_report-b9ac116b"></a>

## run_report

Handler: Google Analytics 4: Run a GA4 report. metrics/dimensions are GA4 API names (e.g. metrics

```text
Run a GA4 report. metrics/dimensions are GA4 API names (e.g. metrics
['activeUsers','conversions'], dimensions ['date','sessionDefaultChannelGroup']).
Dates accept YYYY-MM-DD or relative forms like '28daysAgo' / 'today'.
```

[Source](https://github.com/burhan29ee/google-analytics-gtm-mcp/blob/c163c78f04c70144ef39e2e79dc64e93b74ccf10/src/google_analytics_gtm_mcp/server.py#L201-L235) · Schema: reconstructed.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "property_id": {
      "title": "Property Id",
      "type": "string"
    },
    "metrics": {
      "items": {
        "type": "string"
      },
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
      "title": "Dimensions"
    },
    "start_date": {
      "default": "28daysAgo",
      "title": "Start Date",
      "type": "string"
    },
    "end_date": {
      "default": "today",
      "title": "End Date",
      "type": "string"
    },
    "limit": {
      "default": 100,
      "title": "Limit",
      "type": "integer"
    }
  },
  "required": [
    "property_id",
    "metrics"
  ],
  "title": "run_reportArguments",
  "type": "object"
}
```

</details>

<a id="tool-run_realtime_report-ac5f8d77"></a>

## run_realtime_report

Handler: Google Analytics 4: Run a GA4 realtime report (last ~30 minutes). Example: metrics

```text
Run a GA4 realtime report (last ~30 minutes). Example: metrics
['activeUsers'], dimensions ['country','unifiedScreenName'].
```

[Source](https://github.com/burhan29ee/google-analytics-gtm-mcp/blob/c163c78f04c70144ef39e2e79dc64e93b74ccf10/src/google_analytics_gtm_mcp/server.py#L238-L263) · Schema: reconstructed.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "property_id": {
      "title": "Property Id",
      "type": "string"
    },
    "metrics": {
      "items": {
        "type": "string"
      },
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
      "title": "Dimensions"
    },
    "limit": {
      "default": 100,
      "title": "Limit",
      "type": "integer"
    }
  },
  "required": [
    "property_id",
    "metrics"
  ],
  "title": "run_realtime_reportArguments",
  "type": "object"
}
```

</details>

<a id="tool-list_custom_dimensions-616826eb"></a>

## list_custom_dimensions

Handler: Google Analytics 4: List custom dimensions defined on a GA4 property.

```text
List custom dimensions defined on a GA4 property.
```

[Source](https://github.com/burhan29ee/google-analytics-gtm-mcp/blob/c163c78f04c70144ef39e2e79dc64e93b74ccf10/src/google_analytics_gtm_mcp/server.py#L266-L278) · Schema: reconstructed.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "property_id": {
      "title": "Property Id",
      "type": "string"
    }
  },
  "required": [
    "property_id"
  ],
  "title": "list_custom_dimensionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-create_custom_dimension-4a75216f"></a>

## create_custom_dimension

Handler: Google Analytics 4: Create a custom dimension. parameter\_name is the event parameter / user

```text
Create a custom dimension. parameter_name is the event parameter / user
property key; scope is 'EVENT', 'USER' or 'ITEM'. display_name may contain
only letters, numbers, underscores and spaces.
```

[Source](https://github.com/burhan29ee/google-analytics-gtm-mcp/blob/c163c78f04c70144ef39e2e79dc64e93b74ccf10/src/google_analytics_gtm_mcp/server.py#L281-L304) · Schema: reconstructed.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "property_id": {
      "title": "Property Id",
      "type": "string"
    },
    "parameter_name": {
      "title": "Parameter Name",
      "type": "string"
    },
    "display_name": {
      "title": "Display Name",
      "type": "string"
    },
    "scope": {
      "default": "EVENT",
      "title": "Scope",
      "type": "string"
    },
    "description": {
      "default": "",
      "title": "Description",
      "type": "string"
    }
  },
  "required": [
    "property_id",
    "parameter_name",
    "display_name"
  ],
  "title": "create_custom_dimensionArguments",
  "type": "object"
}
```

</details>

<a id="tool-archive_custom_dimension-9576a80e"></a>

## archive_custom_dimension

Handler: Google Analytics 4: Archive (delete) a custom dimension. custom\_dimension\_id may be the

```text
Archive (delete) a custom dimension. custom_dimension_id may be the
numeric id or the full 'properties/NNN/customDimensions/MMM' name.
```

[Source](https://github.com/burhan29ee/google-analytics-gtm-mcp/blob/c163c78f04c70144ef39e2e79dc64e93b74ccf10/src/google_analytics_gtm_mcp/server.py#L307-L314) · Schema: reconstructed.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "property_id": {
      "title": "Property Id",
      "type": "string"
    },
    "custom_dimension_id": {
      "title": "Custom Dimension Id",
      "type": "string"
    }
  },
  "required": [
    "property_id",
    "custom_dimension_id"
  ],
  "title": "archive_custom_dimensionArguments",
  "type": "object"
}
```

</details>

<a id="tool-list_custom_metrics-e65d7a89"></a>

## list_custom_metrics

Handler: Google Analytics 4: List custom metrics defined on a GA4 property.

```text
List custom metrics defined on a GA4 property.
```

[Source](https://github.com/burhan29ee/google-analytics-gtm-mcp/blob/c163c78f04c70144ef39e2e79dc64e93b74ccf10/src/google_analytics_gtm_mcp/server.py#L317-L330) · Schema: reconstructed.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "property_id": {
      "title": "Property Id",
      "type": "string"
    }
  },
  "required": [
    "property_id"
  ],
  "title": "list_custom_metricsArguments",
  "type": "object"
}
```

</details>

<a id="tool-create_custom_metric-b806af69"></a>

## create_custom_metric

Handler: Google Analytics 4: Create a custom metric. measurement\_unit is one of STANDARD, CURRENCY,

```text
Create a custom metric. measurement_unit is one of STANDARD, CURRENCY,
FEET, METERS, KILOMETERS, MILES, MILLISECONDS, SECONDS, MINUTES, HOURS.
```

[Source](https://github.com/burhan29ee/google-analytics-gtm-mcp/blob/c163c78f04c70144ef39e2e79dc64e93b74ccf10/src/google_analytics_gtm_mcp/server.py#L333-L357) · Schema: reconstructed.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "property_id": {
      "title": "Property Id",
      "type": "string"
    },
    "parameter_name": {
      "title": "Parameter Name",
      "type": "string"
    },
    "display_name": {
      "title": "Display Name",
      "type": "string"
    },
    "measurement_unit": {
      "default": "STANDARD",
      "title": "Measurement Unit",
      "type": "string"
    },
    "scope": {
      "default": "EVENT",
      "title": "Scope",
      "type": "string"
    },
    "description": {
      "default": "",
      "title": "Description",
      "type": "string"
    }
  },
  "required": [
    "property_id",
    "parameter_name",
    "display_name"
  ],
  "title": "create_custom_metricArguments",
  "type": "object"
}
```

</details>

<a id="tool-list_key_events-b7d774fc"></a>

## list_key_events

Handler: Google Analytics 4: List key events (conversions) on a GA4 property.

```text
List key events (conversions) on a GA4 property.
```

[Source](https://github.com/burhan29ee/google-analytics-gtm-mcp/blob/c163c78f04c70144ef39e2e79dc64e93b74ccf10/src/google_analytics_gtm_mcp/server.py#L360-L372) · Schema: reconstructed.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "property_id": {
      "title": "Property Id",
      "type": "string"
    }
  },
  "required": [
    "property_id"
  ],
  "title": "list_key_eventsArguments",
  "type": "object"
}
```

</details>

<a id="tool-create_key_event-3eea6082"></a>

## create_key_event

Handler: Google Analytics 4: Mark an event as a key event (conversion). counting\_method is

```text
Mark an event as a key event (conversion). counting_method is
'ONCE_PER_EVENT' or 'ONCE_PER_SESSION'.
```

[Source](https://github.com/burhan29ee/google-analytics-gtm-mcp/blob/c163c78f04c70144ef39e2e79dc64e93b74ccf10/src/google_analytics_gtm_mcp/server.py#L375-L385) · Schema: reconstructed.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "property_id": {
      "title": "Property Id",
      "type": "string"
    },
    "event_name": {
      "title": "Event Name",
      "type": "string"
    },
    "counting_method": {
      "default": "ONCE_PER_EVENT",
      "title": "Counting Method",
      "type": "string"
    }
  },
  "required": [
    "property_id",
    "event_name"
  ],
  "title": "create_key_eventArguments",
  "type": "object"
}
```

</details>

<a id="tool-list_audiences-a661b417"></a>

## list_audiences

Handler: Google Analytics 4: List audiences defined on a GA4 property.

```text
List audiences defined on a GA4 property.
```

[Source](https://github.com/burhan29ee/google-analytics-gtm-mcp/blob/c163c78f04c70144ef39e2e79dc64e93b74ccf10/src/google_analytics_gtm_mcp/server.py#L388-L399) · Schema: reconstructed.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "property_id": {
      "title": "Property Id",
      "type": "string"
    }
  },
  "required": [
    "property_id"
  ],
  "title": "list_audiencesArguments",
  "type": "object"
}
```

</details>

<a id="tool-create_event_audience-2e2c3976"></a>

## create_event_audience

Handler: Google Analytics 4: Create a GA4 audience of users who triggered a given event (e.g.

```text
Create a GA4 audience of users who triggered a given event (e.g.
'purchase', 'generate_lead') — useful for remarketing lists that can be
shared to Google Ads. membership_duration_days is how long a user stays in
the audience (max 540).
```

[Source](https://github.com/burhan29ee/google-analytics-gtm-mcp/blob/c163c78f04c70144ef39e2e79dc64e93b74ccf10/src/google_analytics_gtm_mcp/server.py#L402-L437) · Schema: reconstructed.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "property_id": {
      "title": "Property Id",
      "type": "string"
    },
    "display_name": {
      "title": "Display Name",
      "type": "string"
    },
    "event_name": {
      "title": "Event Name",
      "type": "string"
    },
    "membership_duration_days": {
      "default": 30,
      "title": "Membership Duration Days",
      "type": "integer"
    },
    "description": {
      "default": "",
      "title": "Description",
      "type": "string"
    }
  },
  "required": [
    "property_id",
    "display_name",
    "event_name"
  ],
  "title": "create_event_audienceArguments",
  "type": "object"
}
```

</details>

<a id="tool-archive_audience-d6627d6d"></a>

## archive_audience

Handler: Google Analytics 4: Archive a GA4 audience. audience\_id may be the numeric id or the full

```text
Archive a GA4 audience. audience_id may be the numeric id or the full
'properties/NNN/audiences/MMM' name.
```

[Source](https://github.com/burhan29ee/google-analytics-gtm-mcp/blob/c163c78f04c70144ef39e2e79dc64e93b74ccf10/src/google_analytics_gtm_mcp/server.py#L440-L447) · Schema: reconstructed.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "property_id": {
      "title": "Property Id",
      "type": "string"
    },
    "audience_id": {
      "title": "Audience Id",
      "type": "string"
    }
  },
  "required": [
    "property_id",
    "audience_id"
  ],
  "title": "archive_audienceArguments",
  "type": "object"
}
```

</details>

<a id="tool-list_measurement_protocol_secrets-44c9d7b3"></a>

## list_measurement_protocol_secrets

Handler: Google Analytics 4: List Measurement Protocol API secrets for a data stream. stream\_id is

```text
List Measurement Protocol API secrets for a data stream. stream_id is
the numeric id from list_data_streams.
```

[Source](https://github.com/burhan29ee/google-analytics-gtm-mcp/blob/c163c78f04c70144ef39e2e79dc64e93b74ccf10/src/google_analytics_gtm_mcp/server.py#L450-L458) · Schema: reconstructed.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "property_id": {
      "title": "Property Id",
      "type": "string"
    },
    "stream_id": {
      "title": "Stream Id",
      "type": "string"
    }
  },
  "required": [
    "property_id",
    "stream_id"
  ],
  "title": "list_measurement_protocol_secretsArguments",
  "type": "object"
}
```

</details>

<a id="tool-create_measurement_protocol_secret-a4b38d24"></a>

## create_measurement_protocol_secret

Handler: Google Analytics 4: Create a Measurement Protocol API secret on a data stream. Returns the

```text
Create a Measurement Protocol API secret on a data stream. Returns the
secret_value (api_secret) needed by send_ga4_event. Treat it as sensitive.
```

[Source](https://github.com/burhan29ee/google-analytics-gtm-mcp/blob/c163c78f04c70144ef39e2e79dc64e93b74ccf10/src/google_analytics_gtm_mcp/server.py#L461-L469) · Schema: reconstructed.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "property_id": {
      "title": "Property Id",
      "type": "string"
    },
    "stream_id": {
      "title": "Stream Id",
      "type": "string"
    },
    "display_name": {
      "title": "Display Name",
      "type": "string"
    }
  },
  "required": [
    "property_id",
    "stream_id",
    "display_name"
  ],
  "title": "create_measurement_protocol_secretArguments",
  "type": "object"
}
```

</details>

<a id="tool-delete_measurement_protocol_secret-90710986"></a>

## delete_measurement_protocol_secret

Handler: Google Analytics 4: Delete a Measurement Protocol API secret. secret\_id may be the numeric

```text
Delete a Measurement Protocol API secret. secret_id may be the numeric
id or the full resource name.
```

[Source](https://github.com/burhan29ee/google-analytics-gtm-mcp/blob/c163c78f04c70144ef39e2e79dc64e93b74ccf10/src/google_analytics_gtm_mcp/server.py#L472-L479) · Schema: reconstructed.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "property_id": {
      "title": "Property Id",
      "type": "string"
    },
    "stream_id": {
      "title": "Stream Id",
      "type": "string"
    },
    "secret_id": {
      "title": "Secret Id",
      "type": "string"
    }
  },
  "required": [
    "property_id",
    "stream_id",
    "secret_id"
  ],
  "title": "delete_measurement_protocol_secretArguments",
  "type": "object"
}
```

</details>

<a id="tool-send_ga4_event-9061a53b"></a>

## send_ga4_event

Handler: Google Analytics 4: Send an event into a GA4 property via the Measurement Protocol.

```text
Send an event into a GA4 property via the Measurement Protocol.
measurement_id is the stream's 'G-XXXXXXX'; api_secret comes from a
Measurement Protocol secret; client_id identifies the user/device. Set
validate=True to hit GA4's debug/validation endpoint (checks the payload
WITHOUT ingesting it) — recommended before real sends.
```

[Source](https://github.com/burhan29ee/google-analytics-gtm-mcp/blob/c163c78f04c70144ef39e2e79dc64e93b74ccf10/src/google_analytics_gtm_mcp/server.py#L482-L514) · Schema: reconstructed.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "measurement_id": {
      "title": "Measurement Id",
      "type": "string"
    },
    "api_secret": {
      "title": "Api Secret",
      "type": "string"
    },
    "client_id": {
      "title": "Client Id",
      "type": "string"
    },
    "event_name": {
      "title": "Event Name",
      "type": "string"
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
      "default": null,
      "title": "Params"
    },
    "validate": {
      "default": false,
      "title": "Validate",
      "type": "boolean"
    }
  },
  "required": [
    "measurement_id",
    "api_secret",
    "client_id",
    "event_name"
  ],
  "title": "send_ga4_eventArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_whoami-6c429280"></a>

## gtm_whoami

Handler: Reads service-account identity and configured scopes and lists accessible GTM accounts.

```text
Show which service-account identity and scopes this server uses for GTM,
and how many GTM accounts it can currently see. Use this to verify access
after granting the service account permission in Tag Manager.
```

[Source](https://github.com/burhan29ee/google-analytics-gtm-mcp/blob/c163c78f04c70144ef39e2e79dc64e93b74ccf10/src/google_analytics_gtm_mcp/server.py#L577-L598) · Schema: reconstructed.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "gtm_whoamiArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_list_accounts-c5d9b27f"></a>

## gtm_list_accounts

Handler: List all GTM accounts the service account can access.

```text
List all GTM accounts the service account can access.
```

[Source](https://github.com/burhan29ee/google-analytics-gtm-mcp/blob/c163c78f04c70144ef39e2e79dc64e93b74ccf10/src/google_analytics_gtm_mcp/server.py#L601-L604) · Schema: reconstructed.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "gtm_list_accountsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_list_containers-e45afd2b"></a>

## gtm_list_containers

Handler: List containers in a GTM account.

```text
List containers in a GTM account.
```

[Source](https://github.com/burhan29ee/google-analytics-gtm-mcp/blob/c163c78f04c70144ef39e2e79dc64e93b74ccf10/src/google_analytics_gtm_mcp/server.py#L607-L612) · Schema: reconstructed.

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
  "title": "gtm_list_containersArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_list_workspaces-248ce86f"></a>

## gtm_list_workspaces

Handler: List workspaces in a container.

```text
List workspaces in a container.
```

[Source](https://github.com/burhan29ee/google-analytics-gtm-mcp/blob/c163c78f04c70144ef39e2e79dc64e93b74ccf10/src/google_analytics_gtm_mcp/server.py#L615-L625) · Schema: reconstructed.

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
  "title": "gtm_list_workspacesArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_list_tags-b585bc12"></a>

## gtm_list_tags

Handler: List tags in a workspace.

```text
List tags in a workspace.
```

[Source](https://github.com/burhan29ee/google-analytics-gtm-mcp/blob/c163c78f04c70144ef39e2e79dc64e93b74ccf10/src/google_analytics_gtm_mcp/server.py#L628-L635) · Schema: reconstructed.

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
  "title": "gtm_list_tagsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_list_triggers-16b41a3c"></a>

## gtm_list_triggers

Handler: List triggers in a workspace.

```text
List triggers in a workspace.
```

[Source](https://github.com/burhan29ee/google-analytics-gtm-mcp/blob/c163c78f04c70144ef39e2e79dc64e93b74ccf10/src/google_analytics_gtm_mcp/server.py#L638-L645) · Schema: reconstructed.

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
  "title": "gtm_list_triggersArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_list_variables-81705a80"></a>

## gtm_list_variables

Handler: List variables in a workspace.

```text
List variables in a workspace.
```

[Source](https://github.com/burhan29ee/google-analytics-gtm-mcp/blob/c163c78f04c70144ef39e2e79dc64e93b74ccf10/src/google_analytics_gtm_mcp/server.py#L648-L655) · Schema: reconstructed.

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
  "title": "gtm_list_variablesArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_get_tag-3d242291"></a>

## gtm_get_tag

Handler: Get a single tag by id.

```text
Get a single tag by id.
```

[Source](https://github.com/burhan29ee/google-analytics-gtm-mcp/blob/c163c78f04c70144ef39e2e79dc64e93b74ccf10/src/google_analytics_gtm_mcp/server.py#L658-L662) · Schema: reconstructed.

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
  "title": "gtm_get_tagArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_list_versions-f9371c4c"></a>

## gtm_list_versions

Handler: List container version headers (published + saved versions).

```text
List container version headers (published + saved versions).
```

[Source](https://github.com/burhan29ee/google-analytics-gtm-mcp/blob/c163c78f04c70144ef39e2e79dc64e93b74ccf10/src/google_analytics_gtm_mcp/server.py#L665-L675) · Schema: reconstructed.

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
  "title": "gtm_list_versionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_get_live_version-986da5ee"></a>

## gtm_get_live_version

Handler: Get the currently live (published) container version.

```text
Get the currently live (published) container version.
```

[Source](https://github.com/burhan29ee/google-analytics-gtm-mcp/blob/c163c78f04c70144ef39e2e79dc64e93b74ccf10/src/google_analytics_gtm_mcp/server.py#L678-L688) · Schema: reconstructed.

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
  "title": "gtm_get_live_versionArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_create_tag-c682840c"></a>

## gtm_create_tag

Handler: Parses the resource JSON string as an object and calls the corresponding GTM workspace resource API.

```text
Create a tag. tag_json is the full GTM Tag resource as a JSON string,
e.g. {"name":"GA4 Config","type":"gaawc","parameter":[...],
"firingTriggerId":["2147479553"]}.
```

[Source](https://github.com/burhan29ee/google-analytics-gtm-mcp/blob/c163c78f04c70144ef39e2e79dc64e93b74ccf10/src/google_analytics_gtm_mcp/server.py#L691-L701) · Schema: reconstructed.

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
    "tag_json": {
      "title": "Tag Json",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "tag_json"
  ],
  "title": "gtm_create_tagArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_update_tag-23807743"></a>

## gtm_update_tag

Handler: Parses the resource JSON string as an object and calls the corresponding GTM workspace resource API.

```text
Update an existing tag with a full GTM Tag resource (JSON string).
```

[Source](https://github.com/burhan29ee/google-analytics-gtm-mcp/blob/c163c78f04c70144ef39e2e79dc64e93b74ccf10/src/google_analytics_gtm_mcp/server.py#L704-L715) · Schema: reconstructed.

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
    "tag_json": {
      "title": "Tag Json",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "tag_id",
    "tag_json"
  ],
  "title": "gtm_update_tagArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_delete_tag-42a56cac"></a>

## gtm_delete_tag

Handler: Deletes the specified GTM workspace resource only when confirm is true.

```text
Delete a tag. Requires confirm=true.
```

[Source](https://github.com/burhan29ee/google-analytics-gtm-mcp/blob/c163c78f04c70144ef39e2e79dc64e93b74ccf10/src/google_analytics_gtm_mcp/server.py#L718-L730) · Schema: reconstructed.

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
  "title": "gtm_delete_tagArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_create_trigger-99da4322"></a>

## gtm_create_trigger

Handler: Parses the resource JSON string as an object and calls the corresponding GTM workspace resource API.

```text
Create a trigger from a full GTM Trigger resource (JSON string).
```

[Source](https://github.com/burhan29ee/google-analytics-gtm-mcp/blob/c163c78f04c70144ef39e2e79dc64e93b74ccf10/src/google_analytics_gtm_mcp/server.py#L733-L741) · Schema: reconstructed.

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
    "trigger_json": {
      "title": "Trigger Json",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "trigger_json"
  ],
  "title": "gtm_create_triggerArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_update_trigger-ce48de45"></a>

## gtm_update_trigger

Handler: Parses the resource JSON string as an object and calls the corresponding GTM workspace resource API.

```text
Update an existing trigger with a full GTM Trigger resource (JSON string).
```

[Source](https://github.com/burhan29ee/google-analytics-gtm-mcp/blob/c163c78f04c70144ef39e2e79dc64e93b74ccf10/src/google_analytics_gtm_mcp/server.py#L744-L755) · Schema: reconstructed.

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
    },
    "trigger_json": {
      "title": "Trigger Json",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "trigger_id",
    "trigger_json"
  ],
  "title": "gtm_update_triggerArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_delete_trigger-dac3085f"></a>

## gtm_delete_trigger

Handler: Deletes the specified GTM workspace resource only when confirm is true.

```text
Delete a trigger. Requires confirm=true.
```

[Source](https://github.com/burhan29ee/google-analytics-gtm-mcp/blob/c163c78f04c70144ef39e2e79dc64e93b74ccf10/src/google_analytics_gtm_mcp/server.py#L758-L770) · Schema: reconstructed.

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
    "trigger_id"
  ],
  "title": "gtm_delete_triggerArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_create_variable-5b853337"></a>

## gtm_create_variable

Handler: Parses the resource JSON string as an object and calls the corresponding GTM workspace resource API.

```text
Create a variable from a full GTM Variable resource (JSON string).
```

[Source](https://github.com/burhan29ee/google-analytics-gtm-mcp/blob/c163c78f04c70144ef39e2e79dc64e93b74ccf10/src/google_analytics_gtm_mcp/server.py#L773-L781) · Schema: reconstructed.

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
    "variable_json": {
      "title": "Variable Json",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "variable_json"
  ],
  "title": "gtm_create_variableArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_update_variable-898f92d4"></a>

## gtm_update_variable

Handler: Parses the resource JSON string as an object and calls the corresponding GTM workspace resource API.

```text
Update an existing variable with a full GTM Variable resource (JSON string).
```

[Source](https://github.com/burhan29ee/google-analytics-gtm-mcp/blob/c163c78f04c70144ef39e2e79dc64e93b74ccf10/src/google_analytics_gtm_mcp/server.py#L784-L795) · Schema: reconstructed.

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
    },
    "variable_json": {
      "title": "Variable Json",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "variable_id",
    "variable_json"
  ],
  "title": "gtm_update_variableArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_delete_variable-9bd36787"></a>

## gtm_delete_variable

Handler: Deletes the specified GTM workspace resource only when confirm is true.

```text
Delete a variable. Requires confirm=true.
```

[Source](https://github.com/burhan29ee/google-analytics-gtm-mcp/blob/c163c78f04c70144ef39e2e79dc64e93b74ccf10/src/google_analytics_gtm_mcp/server.py#L798-L810) · Schema: reconstructed.

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
    "variable_id"
  ],
  "title": "gtm_delete_variableArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_create_version-50a805d7"></a>

## gtm_create_version

Handler: Calls GTM workspace create\_version with name and optional notes to create a saved container version.

```text
Freeze the current workspace into a new container version. Returns the
new containerVersion (with containerVersionId) plus any compiler errors.
This does NOT publish; use gtm_publish_version next.
```

[Source](https://github.com/burhan29ee/google-analytics-gtm-mcp/blob/c163c78f04c70144ef39e2e79dc64e93b74ccf10/src/google_analytics_gtm_mcp/server.py#L813-L834) · Schema: reconstructed.

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
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Notes"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "name"
  ],
  "title": "gtm_create_versionArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_publish_version-0cc97535"></a>

## gtm_publish_version

Handler: Calls GTM container version publish only when confirm is true.

```text
Publish a container version to live. Requires confirm=true because this
affects the live site.
```

[Source](https://github.com/burhan29ee/google-analytics-gtm-mcp/blob/c163c78f04c70144ef39e2e79dc64e93b74ccf10/src/google_analytics_gtm_mcp/server.py#L837-L844) · Schema: reconstructed.

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
  "title": "gtm_publish_versionArguments",
  "type": "object"
}
```

</details>
