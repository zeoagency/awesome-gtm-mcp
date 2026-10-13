# tiojimbo/agent-gtm-ga4

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/tiojimbo/agent-gtm-ga4) · [Machine-readable inventory](../data/mcps/tiojimbo--agent-gtm-ga4.json)

**56 extracted tools.** Create Google tags, GA4 event tags, custom HTML tags, and trigger/variable configurations in GTM drafts.

Snapshot: 2026-10-13 · [3bfba4ed09e3](https://github.com/tiojimbo/agent-gtm-ga4/tree/3bfba4ed09e30e27b222d88cb8267c7627158fb5) · Method: tools/list.

Exposure: All 56 tools are registered unconditionally for stdio and HTTP; startup validates Google auth. Offline extraction imports the same 18 registration modules directly, bypassing startup authentication and transport selection.

## Limits

- Offline tools/list used the locked SDK and Zod dependencies with the original registration modules; handlers and Google authentication were never invoked. Live API behavior is unverified.
- GTM update handlers pass fingerprints through If-Match headers; the Google GTM update API expects fingerprint query parameters, so documented optimistic locking requires review.
- List clients consume only the first Google API response page and do not follow nextPageToken; tool limit/offset pagination therefore applies only to that first page.
- Bridge audits and diagnostic guidance use hardcoded limits and heuristics, rather than exhaustive runtime/browser tracking validation.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`gtm_list_accounts`](#tool-gtm_list_accounts-c5d9b27f) | GTM | Google Tag Manager tool implemented by gtm.listAccounts. |
| [`gtm_list_containers`](#tool-gtm_list_containers-e45afd2b) | GTM | Google Tag Manager tool implemented by gtm.listContainers. |
| [`gtm_get_container`](#tool-gtm_get_container-fdc6e39c) | GTM | Google Tag Manager tool implemented by gtm.getContainer. |
| [`gtm_list_tags`](#tool-gtm_list_tags-b585bc12) | GTM | Google Tag Manager tool implemented by gtm.listTags. |
| [`gtm_get_tag`](#tool-gtm_get_tag-3d242291) | GTM | Google Tag Manager tool implemented by gtm.getTag. |
| [`gtm_create_google_tag`](#tool-gtm_create_google_tag-9c7f783f) | GTM | Google Tag Manager tool implemented by gtm.listTags, gtm.createTag. |
| [`gtm_create_ga4_event_tag`](#tool-gtm_create_ga4_event_tag-1561f4a3) | GTM | Google Tag Manager tool implemented by gtm.createTag. |
| [`gtm_create_custom_html_tag`](#tool-gtm_create_custom_html_tag-acf63bb4) | GTM | Google Tag Manager tool implemented by gtm.createTag. |
| [`gtm_update_tag`](#tool-gtm_update_tag-23807743) | GTM | Google Tag Manager tool implemented by gtm.updateTag. Sends fingerprint as an If-Match header rather than the GTM fingerprint query parameter; optimistic locking needs review. |
| [`gtm_delete_tag`](#tool-gtm_delete_tag-42a56cac) | GTM | Google Tag Manager tool implemented by gtm.deleteTag. |
| [`gtm_list_triggers`](#tool-gtm_list_triggers-16b41a3c) | GTM | Google Tag Manager tool implemented by gtm.listTriggers. |
| [`gtm_get_trigger`](#tool-gtm_get_trigger-669e5c62) | GTM | Google Tag Manager tool implemented by gtm.getTrigger. |
| [`gtm_create_trigger`](#tool-gtm_create_trigger-99da4322) | GTM | Google Tag Manager tool implemented by gtm.createTrigger. |
| [`gtm_update_trigger`](#tool-gtm_update_trigger-ce48de45) | GTM | Google Tag Manager tool implemented by gtm.updateTrigger. Sends fingerprint as an If-Match header rather than the GTM fingerprint query parameter; optimistic locking needs review. |
| [`gtm_delete_trigger`](#tool-gtm_delete_trigger-dac3085f) | GTM | Google Tag Manager tool implemented by gtm.deleteTrigger. |
| [`gtm_list_variables`](#tool-gtm_list_variables-81705a80) | GTM | Google Tag Manager tool implemented by gtm.listVariables. |
| [`gtm_list_builtin_variables`](#tool-gtm_list_builtin_variables-e3216e58) | GTM | Google Tag Manager tool implemented by gtm.listBuiltInVariables. |
| [`gtm_enable_builtin_variables`](#tool-gtm_enable_builtin_variables-58e53a64) | GTM | Google Tag Manager tool implemented by gtm.enableBuiltInVariables. |
| [`gtm_create_variable`](#tool-gtm_create_variable-5b853337) | GTM | Google Tag Manager tool implemented by gtm.createVariable. |
| [`gtm_delete_variable`](#tool-gtm_delete_variable-9bd36787) | GTM | Google Tag Manager tool implemented by gtm.deleteVariable. |
| [`gtm_list_versions`](#tool-gtm_list_versions-f9371c4c) | GTM | Google Tag Manager tool implemented by gtm.listVersions. |
| [`gtm_create_version`](#tool-gtm_create_version-50a805d7) | GTM | Google Tag Manager tool implemented by gtm.createVersion. |
| [`gtm_publish_version`](#tool-gtm_publish_version-0cc97535) | GTM | Google Tag Manager tool implemented by gtm.publishVersion. |
| [`gtm_list_workspaces`](#tool-gtm_list_workspaces-248ce86f) | GTM | Google Tag Manager tool implemented by gtm.listWorkspaces. |
| [`gtm_get_workspace_status`](#tool-gtm_get_workspace_status-58373cea) | GTM | Google Tag Manager tool implemented by gtm.getWorkspaceStatus. |
| [`gtm_create_workspace`](#tool-gtm_create_workspace-6324597f) | GTM | Google Tag Manager tool implemented by gtm.listWorkspaces, gtm.createWorkspace. |
| [`ga4_list_accounts`](#tool-ga4_list_accounts-68810811) | Other product | Google Analytics 4 tool implemented by ga4Admin.listAccounts. |
| [`ga4_list_properties`](#tool-ga4_list_properties-44fea7fa) | Other product | Google Analytics 4 tool implemented by ga4Admin.listProperties. |
| [`ga4_get_property`](#tool-ga4_get_property-aa64c1ca) | Other product | Google Analytics 4 tool implemented by ga4Admin.getProperty. |
| [`ga4_list_data_streams`](#tool-ga4_list_data_streams-e2cea14d) | Other product | Google Analytics 4 tool implemented by ga4Admin.listDataStreams. |
| [`ga4_get_data_stream`](#tool-ga4_get_data_stream-389517f0) | Other product | Google Analytics 4 tool implemented by ga4Admin.getDataStream. |
| [`ga4_list_custom_dimensions`](#tool-ga4_list_custom_dimensions-75905509) | Other product | Google Analytics 4 tool implemented by ga4Admin.listCustomDimensions. |
| [`ga4_list_custom_metrics`](#tool-ga4_list_custom_metrics-64631ca9) | Other product | Google Analytics 4 tool implemented by ga4Admin.listCustomMetrics. |
| [`ga4_list_key_events`](#tool-ga4_list_key_events-ac1a65f2) | Other product | Google Analytics 4 tool implemented by ga4Admin.listKeyEvents. |
| [`ga4_list_audiences`](#tool-ga4_list_audiences-35c4ca43) | Other product | Google Analytics 4 tool implemented by ga4Admin.listAudiences. |
| [`ga4_list_mp_secrets`](#tool-ga4_list_mp_secrets-aba5dd0b) | Other product | Google Analytics 4 tool implemented by ga4Admin.listMPSecrets. |
| [`ga4_create_custom_dimension`](#tool-ga4_create_custom_dimension-2ce8700e) | Other product | Google Analytics 4 tool implemented by ga4Admin.listCustomDimensions, ga4Admin.createCustomDimension. |
| [`ga4_archive_custom_dimension`](#tool-ga4_archive_custom_dimension-1fc6993a) | Other product | Google Analytics 4 tool implemented by ga4Admin.archiveCustomDimension. |
| [`ga4_create_custom_metric`](#tool-ga4_create_custom_metric-840cf76a) | Other product | Google Analytics 4 tool implemented by ga4Admin.listCustomMetrics, ga4Admin.createCustomMetric. |
| [`ga4_create_key_event`](#tool-ga4_create_key_event-503e5cec) | Other product | Google Analytics 4 tool implemented by ga4Admin.listKeyEvents, ga4Admin.createKeyEvent. |
| [`ga4_delete_key_event`](#tool-ga4_delete_key_event-c4c6bdad) | Other product | Google Analytics 4 tool implemented by ga4Admin.deleteKeyEvent. |
| [`ga4_create_mp_secret`](#tool-ga4_create_mp_secret-a2b51a76) | Other product | Google Analytics 4 tool implemented by ga4Admin.createMPSecret. |
| [`ga4_data_run_report`](#tool-ga4_data_run_report-e57f4cbb) | Other product | Google Analytics 4 tool implemented by ga4Data.runReport. |
| [`ga4_data_run_realtime_report`](#tool-ga4_data_run_realtime_report-25a58656) | Other product | Google Analytics 4 tool implemented by ga4Data.runRealtimeReport. |
| [`ga4_data_get_metadata`](#tool-ga4_data_get_metadata-8a987008) | Other product | Google Analytics 4 tool implemented by ga4Data.getMetadata. |
| [`ga4_mp_validate_event`](#tool-ga4_mp_validate_event-59c6c7e9) | Other product | Google Analytics 4 tool implemented by mpClient.validateEvent. |
| [`ga4_mp_send_event`](#tool-ga4_mp_send_event-f6b749e4) | Other product | Google Analytics 4 tool implemented by mpClient.sendEvent. |
| [`bridge_audit_ga4_gtm_sync`](#tool-bridge_audit_ga4_gtm_sync-298e4df4) | Supporting | Compares GTM tags and triggers with GA4 custom dimensions, metrics and key events to report configuration mismatches. |
| [`bridge_check_limits`](#tool-bridge_check_limits-65418634) | Supporting | Counts GTM entities and GA4 definitions and audiences against hardcoded product limits. |
| [`bridge_consent_mode_check`](#tool-bridge_consent_mode_check-74c03787) | Supporting | Inspects GTM tags and triggers for consent configuration patterns and reports recommendations. |
| [`bridge_validate_implementation`](#tool-bridge_validate_implementation-c881d364) | Supporting | Compares configured GTM event tags against seven days of GA4 event-count reports and checks ecommerce funnel volume. |
| [`bridge_diagnose_issues`](#tool-bridge_diagnose_issues-dcd663cf) | Supporting | Matches symptom text to hardcoded troubleshooting guidance, optionally reading GTM tags or GA4 custom dimensions. |
| [`bridge_setup_event_tracking`](#tool-bridge_setup_event_tracking-9753d7d7) | Supporting | Creates GTM workspace entities and GA4 custom dimensions or key events for event tracking; returns partial-operation warnings. |
| [`bridge_setup_ecommerce`](#tool-bridge_setup_ecommerce-96afaa9f) | Supporting | Creates ecommerce GTM triggers and GA4 event tags, optionally creates GA4 purchase key events, and emits a dataLayer specification. |
| [`bridge_generate_datalayer_spec`](#tool-bridge_generate_datalayer_spec-03f9cae4) | Supporting | Reads GTM tags, triggers and variables and produces a Markdown dataLayer specification. |
| [`bridge_generate_tracking_plan`](#tool-bridge_generate_tracking_plan-ea329044) | Supporting | Produces a tracking plan from live GTM/GA4 configuration or hardcoded business-type templates. |

<a id="tool-gtm_list_accounts-c5d9b27f"></a>

## gtm_list_accounts

Handler: Google Tag Manager tool implemented by gtm.listAccounts.

```text
List all Google Tag Manager accounts accessible by the authenticated Service Account.

Returns: accountId, name, fingerprint for each account.

Use this as the starting point to discover available GTM resources.
```

[Source](https://github.com/tiojimbo/agent-gtm-ga4/blob/3bfba4ed09e30e27b222d88cb8267c7627158fb5/src/tools/gtm/account-tools.ts#L9-L60) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "limit": {
      "type": "integer",
      "minimum": 1,
      "maximum": 100,
      "default": 20,
      "description": "Maximum results to return"
    },
    "offset": {
      "type": "integer",
      "minimum": 0,
      "default": 0,
      "description": "Number of results to skip for pagination"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_list_containers-e45afd2b"></a>

## gtm_list_containers

Handler: Google Tag Manager tool implemented by gtm.listContainers.

```text
List all containers in a GTM account.

Returns: containerId, name, publicId (GTM-XXXXXX), domainName, usageContext (web/server/iOS/Android), notes.

Args:
  - account_id (string): GTM account ID (use gtm_list_accounts to find it)
  - limit/offset: Pagination controls
```

[Source](https://github.com/tiojimbo/agent-gtm-ga4/blob/3bfba4ed09e30e27b222d88cb8267c7627158fb5/src/tools/gtm/account-tools.ts#L60-L120) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID"
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "maximum": 100,
      "default": 20,
      "description": "Maximum results to return"
    },
    "offset": {
      "type": "integer",
      "minimum": 0,
      "default": 0,
      "description": "Number of results to skip for pagination"
    }
  },
  "required": [
    "account_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_get_container-fdc6e39c"></a>

## gtm_get_container

Handler: Google Tag Manager tool implemented by gtm.getContainer.

```text
Get detailed information about a specific GTM container.

Returns: containerId, name, publicId (GTM-XXXXXX), domainName, usageContext, notes, fingerprint.

Args:
  - account_id (string): GTM account ID
  - container_id (string): GTM container ID
```

[Source](https://github.com/tiojimbo/agent-gtm-ga4/blob/3bfba4ed09e30e27b222d88cb8267c7627158fb5/src/tools/gtm/account-tools.ts#L120-L168) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_list_tags-b585bc12"></a>

## gtm_list_tags

Handler: Google Tag Manager tool implemented by gtm.listTags.

```text
List all tags in a GTM workspace with decoded type names and key parameters.

Returns for each tag: name, decoded type (Google Tag/GA4 Event/Custom HTML/etc.), tag ID,
firing option, trigger IDs, priority, tag sequencing, consent settings, and key parameters
(measurementId for Google Tag, eventName for GA4 Event).

Args:
  - account_id, container_id, workspace_id: GTM path identifiers
  - limit/offset: Pagination controls
```

[Source](https://github.com/tiojimbo/agent-gtm-ga4/blob/3bfba4ed09e30e27b222d88cb8267c7627158fb5/src/tools/gtm/tag-tools.ts#L231-L284) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM workspace ID"
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "maximum": 100,
      "default": 20,
      "description": "Maximum results to return"
    },
    "offset": {
      "type": "integer",
      "minimum": 0,
      "default": 0,
      "description": "Number of results to skip for pagination"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_get_tag-3d242291"></a>

## gtm_get_tag

Handler: Google Tag Manager tool implemented by gtm.getTag.

```text
Get full details of a GTM tag with decoded parameters.

Decodes the raw GTM API parameter array into human-readable format:
- **Google Tag**: measurementId, sendPageView, serverContainerUrl, configSettings
- **GA4 Event**: eventName, eventParameters (key→value map), userProperties, sendEcommerceData
- **Custom HTML**: HTML source code
- **Google Ads Conversion**: conversionId, conversionLabel, value, currency, orderId
- **Google Ads Remarketing**: conversionId, customParams

Also shows: trigger IDs, blocking triggers, priority, tag sequencing (setup/teardown),
consent settings, firing option, fingerprint.

Args:
  - account_id, container_id, workspace_id: GTM path identifiers
  - tag_id (string): Tag ID to retrieve
```

[Source](https://github.com/tiojimbo/agent-gtm-ga4/blob/3bfba4ed09e30e27b222d88cb8267c7627158fb5/src/tools/gtm/tag-tools.ts#L284-L328) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM workspace ID"
    },
    "tag_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM tag ID"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "tag_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_create_google_tag-9c7f783f"></a>

## gtm_create_google_tag

Handler: Google Tag Manager tool implemented by gtm.listTags, gtm.createTag.

```text
Create a Google Tag (base tag for GA4) in a GTM workspace.

The Google Tag loads the GA4 measurement library and MUST fire on Initialization - All Pages
to ensure it loads BEFORE any GA4 Event tags.

Validates: no duplicate Google Tag with same measurementId in the workspace.

Args:
  - account_id, container_id, workspace_id: GTM path identifiers
  - measurement_id (string): GA4 Measurement ID (G-XXXXXXXXXX)
  - send_page_view (boolean): Send automatic page_view (default true)
  - server_container_url (string): Optional sGTM URL
  - init_trigger_id (string): Initialization trigger ID (required — use gtm_list_triggers to find it)
```

[Source](https://github.com/tiojimbo/agent-gtm-ga4/blob/3bfba4ed09e30e27b222d88cb8267c7627158fb5/src/tools/gtm/tag-write-tools.ts#L53-L149) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM workspace ID"
    },
    "measurement_id": {
      "type": "string",
      "pattern": "^G-[A-Z0-9]+$",
      "description": "GA4 Measurement ID (G-XXXXXXXXXX)"
    },
    "send_page_view": {
      "type": "boolean",
      "default": true,
      "description": "Send automatic page_view event (default true)"
    },
    "server_container_url": {
      "type": "string",
      "description": "Server-side GTM container URL (if using sGTM)"
    },
    "init_trigger_id": {
      "type": "string",
      "minLength": 1,
      "description": "Initialization trigger ID (Initialization - All Pages)"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "measurement_id",
    "init_trigger_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_create_ga4_event_tag-1561f4a3"></a>

## gtm_create_ga4_event_tag

Handler: Google Tag Manager tool implemented by gtm.createTag.

```text
Create a GA4 Event tag in a GTM workspace with semantic validation.

Validates: (1) snake_case event name, (2) max 40 chars, (3) no reserved prefixes (google_, ga_, firebase_),
(4) warns about Enhanced Measurement overlap.

Event parameters are mapped as key→value pairs where values reference GTM variables (e.g. "{{DLV - param_name}}").

Args:
  - account_id, container_id, workspace_id: GTM path identifiers
  - event_name (string): GA4 event name (snake_case, max 40 chars)
  - trigger_id (string): Trigger ID to fire this tag
  - event_parameters: Optional array of {key, value} pairs
  - user_properties: Optional array of {key, value} pairs
  - send_ecommerce_data (boolean): Forward ecommerce data layer to GA4 (default false)
  - firing_option: Tag firing option (default "oncePerEvent")
```

[Source](https://github.com/tiojimbo/agent-gtm-ga4/blob/3bfba4ed09e30e27b222d88cb8267c7627158fb5/src/tools/gtm/tag-write-tools.ts#L149-L267) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM workspace ID"
    },
    "event_name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 40,
      "description": "GA4 event name (snake_case)"
    },
    "trigger_id": {
      "type": "string",
      "minLength": 1,
      "description": "Trigger ID"
    },
    "event_parameters": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "key": {
            "type": "string",
            "description": "Parameter name"
          },
          "value": {
            "type": "string",
            "description": "Parameter value (use {{Variable Name}} for GTM variables)"
          }
        },
        "required": [
          "key",
          "value"
        ],
        "additionalProperties": false
      },
      "description": "Event parameters as key→value pairs"
    },
    "user_properties": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "key": {
            "type": "string",
            "description": "User property name"
          },
          "value": {
            "type": "string",
            "description": "User property value"
          }
        },
        "required": [
          "key",
          "value"
        ],
        "additionalProperties": false
      },
      "description": "User properties as key→value pairs"
    },
    "send_ecommerce_data": {
      "type": "boolean",
      "default": false,
      "description": "Forward ecommerce data layer to GA4"
    },
    "firing_option": {
      "type": "string",
      "enum": [
        "oncePerEvent",
        "oncePerLoad",
        "unlimited"
      ],
      "default": "oncePerEvent",
      "description": "Tag firing option"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "event_name",
    "trigger_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_create_custom_html_tag-acf63bb4"></a>

## gtm_create_custom_html_tag

Handler: Google Tag Manager tool implemented by gtm.createTag.

```text
Create a Custom HTML tag in a GTM workspace with best-practice validation.

Validates: (1) warns if document.write is used (blocks parsing), (2) warns if setInterval without cleanup,
(3) warns if loading heavy libraries (jQuery, lodash).

Args:
  - account_id, container_id, workspace_id: GTM path identifiers
  - name (string): Tag name
  - html (string): HTML/JavaScript code
  - trigger_id (string): Trigger ID
  - firing_option: Tag firing option (default "oncePerEvent")
  - support_document_write (boolean): Enable document.write support (default false)
```

[Source](https://github.com/tiojimbo/agent-gtm-ga4/blob/3bfba4ed09e30e27b222d88cb8267c7627158fb5/src/tools/gtm/tag-write-tools.ts#L267-L357) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM workspace ID"
    },
    "name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 200,
      "description": "Tag name"
    },
    "html": {
      "type": "string",
      "minLength": 1,
      "description": "HTML/JavaScript code"
    },
    "trigger_id": {
      "type": "string",
      "minLength": 1,
      "description": "Trigger ID"
    },
    "firing_option": {
      "type": "string",
      "enum": [
        "oncePerEvent",
        "oncePerLoad",
        "unlimited"
      ],
      "default": "oncePerEvent",
      "description": "Tag firing option"
    },
    "support_document_write": {
      "type": "boolean",
      "default": false,
      "description": "Enable document.write support"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "name",
    "html",
    "trigger_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_update_tag-23807743"></a>

## gtm_update_tag

Handler: Google Tag Manager tool implemented by gtm.updateTag. Sends fingerprint as an If-Match header rather than the GTM fingerprint query parameter; optimistic locking needs review.

```text
Update an existing GTM tag (parameters, triggers, priority, firing option).

Requires the current fingerprint for optimistic locking — use gtm_get_tag to get it.
Pass the complete tag body (not just changed fields) as the API replaces the entire tag.

Args:
  - account_id, container_id, workspace_id, tag_id: GTM path identifiers
  - fingerprint (string): Current fingerprint for optimistic locking
  - tag_body (object): Complete updated tag body
```

[Source](https://github.com/tiojimbo/agent-gtm-ga4/blob/3bfba4ed09e30e27b222d88cb8267c7627158fb5/src/tools/gtm/tag-write-tools.ts#L357-L407) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM workspace ID"
    },
    "tag_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM tag ID"
    },
    "fingerprint": {
      "type": "string",
      "minLength": 1,
      "description": "Current fingerprint from gtm_get_tag"
    },
    "tag_body": {
      "type": "object",
      "additionalProperties": {},
      "description": "Complete updated tag body (name, type, parameter, firingTriggerId, etc.)"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "tag_id",
    "fingerprint",
    "tag_body"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_delete_tag-42a56cac"></a>

## gtm_delete_tag

Handler: Google Tag Manager tool implemented by gtm.deleteTag.

```text
Delete a tag from a GTM workspace.

This removes the tag from the workspace. The change is not published until a version is created and published.

Args:
  - account_id, container_id, workspace_id, tag_id: GTM path identifiers
```

[Source](https://github.com/tiojimbo/agent-gtm-ga4/blob/3bfba4ed09e30e27b222d88cb8267c7627158fb5/src/tools/gtm/tag-write-tools.ts#L407-L442) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM workspace ID"
    },
    "tag_id": {
      "type": "string",
      "minLength": 1,
      "description": "Tag ID to delete"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "tag_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_list_triggers-16b41a3c"></a>

## gtm_list_triggers

Handler: Google Tag Manager tool implemented by gtm.listTriggers.

```text
List all triggers in a GTM workspace with decoded types and conditions.

Trigger types include: Page View, DOM Ready, Window Loaded, Custom Event, Click (All/Links),
Form Submission, History Change (SPA), Element Visibility, Scroll Depth, Timer, Trigger Group,
Consent Initialization, Initialization.

Returns: triggerId, name, decoded type, event name, filter conditions (arg0 operator arg1).

Args:
  - account_id, container_id, workspace_id: GTM path identifiers
  - limit/offset: Pagination controls
```

[Source](https://github.com/tiojimbo/agent-gtm-ga4/blob/3bfba4ed09e30e27b222d88cb8267c7627158fb5/src/tools/gtm/trigger-tools.ts#L132-L187) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM workspace ID"
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "maximum": 100,
      "default": 20,
      "description": "Maximum results to return"
    },
    "offset": {
      "type": "integer",
      "minimum": 0,
      "default": 0,
      "description": "Number of results to skip for pagination"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_get_trigger-669e5c62"></a>

## gtm_get_trigger

Handler: Google Tag Manager tool implemented by gtm.getTrigger.

```text
Get full details of a GTM trigger including type-specific configuration.

For Element Visibility: selector, minPercentVisible, minDuration, observeDOM, firingFrequency.
For Scroll Depth: vertical/horizontal thresholds.
For Link Click: waitForTags, checkValidation.
For Custom Event: eventName, filter conditions.

Args:
  - account_id, container_id, workspace_id: GTM path identifiers
  - trigger_id (string): Trigger ID to retrieve
```

[Source](https://github.com/tiojimbo/agent-gtm-ga4/blob/3bfba4ed09e30e27b222d88cb8267c7627158fb5/src/tools/gtm/trigger-tools.ts#L187-L225) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM workspace ID"
    },
    "trigger_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM trigger ID"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "trigger_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_create_trigger-99da4322"></a>

## gtm_create_trigger

Handler: Google Tag Manager tool implemented by gtm.createTrigger.

```text
Create a trigger in a GTM workspace. Supports all 14 trigger types.

Trigger types:
- **consentInit**: Consent Initialization - All Pages (for CMP tags)
- **init**: Initialization - All Pages (for Google Tag, Conversion Linker)
- **pageview**: Page View / Container Loaded (gtm.js)
- **domReady**: DOM Ready (gtm.dom)
- **windowLoaded**: Window Loaded (gtm.load)
- **customEvent**: Custom Event (most versatile — standard for tracking)
- **click**: Click - All Elements (gtm.click)
- **linkClick**: Click - Just Links (gtm.linkClick) — supports waitForTags
- **formSubmission**: Form Submission (gtm.formSubmit)
- **historyChange**: History Change for SPAs (gtm.historyChange)
- **elementVisibility**: Element Visibility (Intersection Observer)
- **scrollDepth**: Scroll Depth (vertical/horizontal thresholds)
- **timer**: Timer (interval + limit)
- **triggerGroup**: Trigger Group (AND logic — fires when ALL listed triggers fire)

Args:
  - account_id, container_id, workspace_id: GTM path identifiers
  - name (string): Trigger name
  - type (string): One of the 14 trigger types above
  - event_name (string): For customEvent type — the event name to listen for
  - filters: Optional conditions (variable + operator + value)
  - auto_event_filters: Optional conditions for click/form/visibility triggers
  - wait_for_tags (boolean): For linkClick/formSubmission — delay navigation for tags
  - check_validation (boolean): For linkClick/formSubmission — only fire if valid
  - visibility_config: For elementVisibility type
  - scroll_config: For scrollDepth type
  - timer_config: For timer type
  - trigger_ids: For triggerGroup type — list of trigger IDs
```

[Source](https://github.com/tiojimbo/agent-gtm-ga4/blob/3bfba4ed09e30e27b222d88cb8267c7627158fb5/src/tools/gtm/trigger-write-tools.ts#L34-L228) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM workspace ID"
    },
    "name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 200,
      "description": "Trigger name"
    },
    "type": {
      "type": "string",
      "enum": [
        "consentInit",
        "init",
        "pageview",
        "domReady",
        "windowLoaded",
        "customEvent",
        "click",
        "linkClick",
        "formSubmission",
        "historyChange",
        "elementVisibility",
        "scrollDepth",
        "timer",
        "triggerGroup"
      ],
      "description": "Trigger type"
    },
    "event_name": {
      "type": "string",
      "description": "Event name for customEvent type (e.g. \"purchase\", \"add_to_cart\")"
    },
    "filters": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "variable": {
            "type": "string",
            "description": "Variable or built-in (e.g. \"{{Page URL}}\", \"{{Click URL}}\")"
          },
          "operator": {
            "type": "string",
            "enum": [
              "equals",
              "contains",
              "startsWith",
              "endsWith",
              "matchesRegEx",
              "matchesCssSelector",
              "doesNotEqual",
              "doesNotContain",
              "doesNotStartWith",
              "doesNotEndWith",
              "doesNotMatchRegEx"
            ],
            "description": "Comparison operator"
          },
          "value": {
            "type": "string",
            "description": "Value to compare against"
          }
        },
        "required": [
          "variable",
          "operator",
          "value"
        ],
        "additionalProperties": false
      },
      "description": "Filter conditions (e.g. Page URL contains \"/checkout\")"
    },
    "auto_event_filters": {
      "type": "array",
      "items": {
        "$ref": "#/properties/filters/items"
      },
      "description": "Auto-event filter conditions for click/form/visibility triggers"
    },
    "wait_for_tags": {
      "type": "boolean",
      "description": "For linkClick/formSubmission: delay navigation to let tags fire"
    },
    "check_validation": {
      "type": "boolean",
      "description": "For linkClick/formSubmission: only fire if element/form is valid"
    },
    "visibility_config": {
      "type": "object",
      "properties": {
        "selector": {
          "type": "string",
          "description": "CSS selector or element ID"
        },
        "selector_type": {
          "type": "string",
          "enum": [
            "CSS_SELECTOR",
            "ID"
          ],
          "default": "CSS_SELECTOR"
        },
        "min_percent_visible": {
          "type": "number",
          "minimum": 1,
          "maximum": 100,
          "default": 50
        },
        "min_on_screen_duration": {
          "type": "number",
          "minimum": 0,
          "default": 0,
          "description": "Milliseconds"
        },
        "observe_dom": {
          "type": "boolean",
          "default": true,
          "description": "Detect dynamically added elements"
        },
        "firing_frequency": {
          "type": "string",
          "enum": [
            "ONCE",
            "ONCE_PER_ELEMENT",
            "MANY_PER_ELEMENT"
          ],
          "default": "ONCE"
        }
      },
      "required": [
        "selector"
      ],
      "additionalProperties": false,
      "description": "Configuration for elementVisibility trigger"
    },
    "scroll_config": {
      "type": "object",
      "properties": {
        "vertical_thresholds": {
          "type": "array",
          "items": {
            "type": "number"
          },
          "description": "Percentages (e.g. [25, 50, 75, 90])"
        },
        "horizontal_thresholds": {
          "type": "array",
          "items": {
            "type": "number"
          },
          "description": "Percentages"
        }
      },
      "additionalProperties": false,
      "description": "Configuration for scrollDepth trigger"
    },
    "timer_config": {
      "type": "object",
      "properties": {
        "interval": {
          "type": "number",
          "minimum": 1,
          "description": "Interval in milliseconds"
        },
        "limit": {
          "type": "number",
          "minimum": 1,
          "description": "Max number of firings"
        }
      },
      "required": [
        "interval",
        "limit"
      ],
      "additionalProperties": false,
      "description": "Configuration for timer trigger"
    },
    "trigger_ids": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "For triggerGroup: list of trigger IDs (AND logic)"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "name",
    "type"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_update_trigger-ce48de45"></a>

## gtm_update_trigger

Handler: Google Tag Manager tool implemented by gtm.updateTrigger. Sends fingerprint as an If-Match header rather than the GTM fingerprint query parameter; optimistic locking needs review.

```text
Update an existing GTM trigger.

Requires the current fingerprint for optimistic locking.
Pass the complete trigger body as the API replaces the entire trigger.

Args:
  - account_id, container_id, workspace_id, trigger_id: GTM path identifiers
  - fingerprint (string): Current fingerprint from gtm_get_trigger
  - trigger_body (object): Complete updated trigger body
```

[Source](https://github.com/tiojimbo/agent-gtm-ga4/blob/3bfba4ed09e30e27b222d88cb8267c7627158fb5/src/tools/gtm/trigger-write-tools.ts#L228-L278) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM workspace ID"
    },
    "trigger_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM trigger ID"
    },
    "fingerprint": {
      "type": "string",
      "minLength": 1,
      "description": "Current fingerprint"
    },
    "trigger_body": {
      "type": "object",
      "additionalProperties": {},
      "description": "Complete updated trigger body"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "trigger_id",
    "fingerprint",
    "trigger_body"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_delete_trigger-dac3085f"></a>

## gtm_delete_trigger

Handler: Google Tag Manager tool implemented by gtm.deleteTrigger.

```text
Delete a trigger from a GTM workspace.

Cannot delete a trigger that is still referenced by tags. Remove tag references first.

Args:
  - account_id, container_id, workspace_id, trigger_id: GTM path identifiers
```

[Source](https://github.com/tiojimbo/agent-gtm-ga4/blob/3bfba4ed09e30e27b222d88cb8267c7627158fb5/src/tools/gtm/trigger-write-tools.ts#L278-L313) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM workspace ID"
    },
    "trigger_id": {
      "type": "string",
      "minLength": 1,
      "description": "Trigger ID to delete"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "trigger_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_list_variables-81705a80"></a>

## gtm_list_variables

Handler: Google Tag Manager tool implemented by gtm.listVariables.

```text
List all user-defined variables in a GTM workspace.

Variable types include: Data Layer Variable, Constant, Custom JavaScript, 1st Party Cookie,
Lookup Table, RegEx Table, Auto-Event Variable, Google Analytics Settings, Undefined Value,
Custom Template Variable.

Returns: variableId, name, decoded type, key parameters (name for DLV, value for Constant, etc.).

Args:
  - account_id, container_id, workspace_id: GTM path identifiers
  - limit/offset: Pagination controls
```

[Source](https://github.com/tiojimbo/agent-gtm-ga4/blob/3bfba4ed09e30e27b222d88cb8267c7627158fb5/src/tools/gtm/variable-tools.ts#L63-L118) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM workspace ID"
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "maximum": 100,
      "default": 20,
      "description": "Maximum results to return"
    },
    "offset": {
      "type": "integer",
      "minimum": 0,
      "default": 0,
      "description": "Number of results to skip for pagination"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_list_builtin_variables-e3216e58"></a>

## gtm_list_builtin_variables

Handler: Google Tag Manager tool implemented by gtm.listBuiltInVariables.

```text
List all enabled built-in variables in a GTM workspace.

Built-in variables are pre-defined by GTM (Click URL, Page URL, Event, etc.).
They must be explicitly enabled before use in triggers and tags.

Includes 2025 additions: Client ID (from _ga cookie), Session ID, Session Number.

Args:
  - account_id, container_id, workspace_id: GTM path identifiers
```

[Source](https://github.com/tiojimbo/agent-gtm-ga4/blob/3bfba4ed09e30e27b222d88cb8267c7627158fb5/src/tools/gtm/variable-tools.ts#L118-L170) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM workspace ID"
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "maximum": 100,
      "default": 50,
      "description": "Maximum results to return"
    },
    "offset": {
      "type": "integer",
      "minimum": 0,
      "default": 0,
      "description": "Number of results to skip for pagination"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_enable_builtin_variables-58e53a64"></a>

## gtm_enable_builtin_variables

Handler: Google Tag Manager tool implemented by gtm.enableBuiltInVariables.

```text
Enable built-in variables in a GTM workspace. Required before using them in triggers/tags.

Available types: pageUrl, pageHostname, pagePath, referrer, event,
clickElement, clickClasses, clickId, clickTarget, clickUrl, clickText,
formElement, formClasses, formId, formTarget, formUrl, formText,
historySource, historyNewUrlFragment, historyOldUrlFragment,
environmentName, containerId, containerVersion, randomNumber, htmlId, debugMode.

Args:
  - account_id, container_id, workspace_id: GTM path identifiers
  - types (string[]): Built-in variable types to enable
```

[Source](https://github.com/tiojimbo/agent-gtm-ga4/blob/3bfba4ed09e30e27b222d88cb8267c7627158fb5/src/tools/gtm/variable-write-tools.ts#L11-L61) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM workspace ID"
    },
    "types": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "minItems": 1,
      "description": "Built-in variable types to enable (e.g. [\"clickUrl\", \"clickText\", \"pagePath\"])"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "types"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_create_variable-5b853337"></a>

## gtm_create_variable

Handler: Google Tag Manager tool implemented by gtm.createVariable.

```text
Create a user-defined variable in a GTM workspace.

Supported types and their parameters:
- **v** (Data Layer Variable): name (dot notation: "ecommerce.value"), dataLayerVersion=2, defaultValue
- **c** (Constant): value
- **jsm** (Custom JavaScript): javascript (must be function(){}, not arrow function)
- **k** (1st Party Cookie): cookieName
- **smm** (Lookup Table): inputVariable, entries [{input, output}], defaultValue
- **remm** (RegEx Table): inputVariable, entries [{pattern, output}], defaultValue
- **aev** (Auto-Event Variable): varType (element, elementClasses, elementId, etc.)
- **u** (Undefined Value): no parameters

Professional naming convention: "DLV - name", "Const - name", "CJS - name", "Cookie - name", "LT - desc", "RT - desc".

Args:
  - account_id, container_id, workspace_id: GTM path identifiers
  - name (string): Variable name following naming convention
  - type (string): Variable type code (v, c, jsm, k, smm, remm, aev, u)
  - parameters: Type-specific configuration
```

[Source](https://github.com/tiojimbo/agent-gtm-ga4/blob/3bfba4ed09e30e27b222d88cb8267c7627158fb5/src/tools/gtm/variable-write-tools.ts#L61-L251) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM workspace ID"
    },
    "name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 200,
      "description": "Variable name (e.g. \"DLV - ecommerce.value\")"
    },
    "type": {
      "type": "string",
      "enum": [
        "v",
        "c",
        "jsm",
        "k",
        "smm",
        "remm",
        "aev",
        "u"
      ],
      "description": "Variable type code"
    },
    "data_layer_name": {
      "type": "string",
      "description": "For type \"v\": Data layer key (supports dot notation: \"ecommerce.items.0.item_name\")"
    },
    "default_value": {
      "type": "string",
      "description": "Default value when variable is undefined"
    },
    "constant_value": {
      "type": "string",
      "description": "For type \"c\": Constant value"
    },
    "javascript": {
      "type": "string",
      "description": "For type \"jsm\": JavaScript function (must be function(){}, not arrow)"
    },
    "cookie_name": {
      "type": "string",
      "description": "For type \"k\": Cookie name to read"
    },
    "input_variable": {
      "type": "string",
      "description": "For type \"smm\"/\"remm\": Input variable (e.g. \"{{Page Hostname}}\")"
    },
    "lookup_entries": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "input": {
            "type": "string",
            "description": "Input value or pattern"
          },
          "output": {
            "type": "string",
            "description": "Output value"
          }
        },
        "required": [
          "input",
          "output"
        ],
        "additionalProperties": false
      },
      "description": "For type \"smm\": Lookup table entries"
    },
    "regex_entries": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "pattern": {
            "type": "string",
            "description": "Regex pattern"
          },
          "output": {
            "type": "string",
            "description": "Output value (supports $1, $2 capture groups)"
          }
        },
        "required": [
          "pattern",
          "output"
        ],
        "additionalProperties": false
      },
      "description": "For type \"remm\": RegEx table entries"
    },
    "auto_event_var_type": {
      "type": "string",
      "enum": [
        "element",
        "elementClasses",
        "elementId",
        "elementTarget",
        "elementUrl",
        "elementText",
        "historyNewUrlFragment",
        "historyOldUrlFragment"
      ],
      "description": "For type \"aev\": Auto-event variable property"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "name",
    "type"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_delete_variable-9bd36787"></a>

## gtm_delete_variable

Handler: Google Tag Manager tool implemented by gtm.deleteVariable.

```text
Delete a user-defined variable from a GTM workspace.

Cannot delete a variable that is still referenced by tags or triggers.

Args:
  - account_id, container_id, workspace_id, variable_id: GTM path identifiers
```

[Source](https://github.com/tiojimbo/agent-gtm-ga4/blob/3bfba4ed09e30e27b222d88cb8267c7627158fb5/src/tools/gtm/variable-write-tools.ts#L251-L286) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM workspace ID"
    },
    "variable_id": {
      "type": "string",
      "minLength": 1,
      "description": "Variable ID to delete"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "variable_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_list_versions-f9371c4c"></a>

## gtm_list_versions

Handler: Google Tag Manager tool implemented by gtm.listVersions.

```text
List published version history of a GTM container.

Returns: containerVersionId, name, description, fingerprint for each version.
Useful for comparing changes, auditing history, and identifying rollback targets.

Args:
  - account_id (string): GTM account ID
  - container_id (string): GTM container ID
  - limit/offset: Pagination controls
```

[Source](https://github.com/tiojimbo/agent-gtm-ga4/blob/3bfba4ed09e30e27b222d88cb8267c7627158fb5/src/tools/gtm/version-tools.ts#L9-L64) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID"
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "maximum": 100,
      "default": 20,
      "description": "Maximum results to return"
    },
    "offset": {
      "type": "integer",
      "minimum": 0,
      "default": 0,
      "description": "Number of results to skip for pagination"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_create_version-50a805d7"></a>

## gtm_create_version

Handler: Google Tag Manager tool implemented by gtm.createVersion.

```text
Create a version of the GTM container from a workspace.

A version is a snapshot of all changes in the workspace. Creating a version does NOT publish it
to production — use gtm_publish_version for that.

If there are merge conflicts with other workspaces, they will be reported.
If there are no changes in the workspace, an error is returned.

Args:
  - account_id, container_id, workspace_id: GTM path identifiers
  - name (string): Version name (e.g. "v1.2 - Added purchase tracking")
  - notes (string): Optional changelog/description
```

[Source](https://github.com/tiojimbo/agent-gtm-ga4/blob/3bfba4ed09e30e27b222d88cb8267c7627158fb5/src/tools/gtm/version-write-tools.ts#L10-L95) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM workspace ID"
    },
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "Version name"
    },
    "notes": {
      "type": "string",
      "description": "Version notes/changelog"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "name"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_publish_version-0cc97535"></a>

## gtm_publish_version

Handler: Google Tag Manager tool implemented by gtm.publishVersion.

```text
Publish a GTM container version to production.

⚠️ HIGH RISK — This pushes changes LIVE to the website/app immediately.

Before publishing:
1. Use gtm_get_workspace_status to review all changes
2. Verify the version was created successfully with gtm_create_version
3. After publishing, monitor GA4 data for 24-48h to ensure tracking works correctly

Args:
  - account_id, container_id: GTM path identifiers
  - version_id (string): Version ID to publish (from gtm_create_version)
```

[Source](https://github.com/tiojimbo/agent-gtm-ga4/blob/3bfba4ed09e30e27b222d88cb8267c7627158fb5/src/tools/gtm/version-write-tools.ts#L95-L156) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID"
    },
    "version_id": {
      "type": "string",
      "minLength": 1,
      "description": "Version ID to publish"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "version_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_list_workspaces-248ce86f"></a>

## gtm_list_workspaces

Handler: Google Tag Manager tool implemented by gtm.listWorkspaces.

```text
List all workspaces in a GTM container.

Free plan limit: 3 simultaneous workspaces (includes Default).
A workspace is an isolated branch — changes don't affect other workspaces until published.

Returns: workspaceId, name, description, fingerprint.

Args:
  - account_id (string): GTM account ID
  - container_id (string): GTM container ID
```

[Source](https://github.com/tiojimbo/agent-gtm-ga4/blob/3bfba4ed09e30e27b222d88cb8267c7627158fb5/src/tools/gtm/workspace-tools.ts#L10-L69) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID"
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "maximum": 100,
      "default": 20,
      "description": "Maximum results to return"
    },
    "offset": {
      "type": "integer",
      "minimum": 0,
      "default": 0,
      "description": "Number of results to skip for pagination"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_get_workspace_status-58373cea"></a>

## gtm_get_workspace_status

Handler: Google Tag Manager tool implemented by gtm.getWorkspaceStatus.

```text
Show changes in a workspace compared to the published version (diff).

Returns: merge conflicts and workspace changes (tags/triggers/variables added, modified, deleted).
Essential before creating a version — reveals what will be published.

Args:
  - account_id (string): GTM account ID
  - container_id (string): GTM container ID
  - workspace_id (string): GTM workspace ID
```

[Source](https://github.com/tiojimbo/agent-gtm-ga4/blob/3bfba4ed09e30e27b222d88cb8267c7627158fb5/src/tools/gtm/workspace-tools.ts#L69-L132) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM workspace ID"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_create_workspace-6324597f"></a>

## gtm_create_workspace

Handler: Google Tag Manager tool implemented by gtm.listWorkspaces, gtm.createWorkspace.

```text
Create a dedicated workspace for making changes in a GTM container.

A workspace is an isolated branch — changes don't affect other workspaces until published.
Always create a workspace before any write operations. Recommended name pattern: "mcp/[task]".

Free plan limit: 3 simultaneous workspaces (includes Default).
This tool checks existing workspaces before creating and warns if limit would be exceeded.

Args:
  - account_id, container_id: GTM path identifiers
  - name (string): Workspace name (e.g. "mcp/setup-purchase-event")
  - description (string): Optional description of changes planned
```

[Source](https://github.com/tiojimbo/agent-gtm-ga4/blob/3bfba4ed09e30e27b222d88cb8267c7627158fb5/src/tools/gtm/workspace-tools.ts#L132-L198) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID"
    },
    "name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 200,
      "description": "Workspace name (e.g. \"mcp/setup-purchase-event\")"
    },
    "description": {
      "type": "string",
      "description": "Description of planned changes"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "name"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-ga4_list_accounts-68810811"></a>

## ga4_list_accounts

Handler: Google Analytics 4 tool implemented by ga4Admin.listAccounts.

```text
List all Google Analytics 4 accounts accessible by the authenticated Service Account.

Returns: account name (accounts/XXXXX), displayName, createTime, updateTime.

Use this as the starting point to discover GA4 resources.
```

[Source](https://github.com/tiojimbo/agent-gtm-ga4/blob/3bfba4ed09e30e27b222d88cb8267c7627158fb5/src/tools/ga4/admin-tools.ts#L20-L72) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "limit": {
      "type": "integer",
      "minimum": 1,
      "maximum": 100,
      "default": 20,
      "description": "Maximum results to return"
    },
    "offset": {
      "type": "integer",
      "minimum": 0,
      "default": 0,
      "description": "Number of results to skip for pagination"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-ga4_list_properties-44fea7fa"></a>

## ga4_list_properties

Handler: Google Analytics 4 tool implemented by ga4Admin.listProperties.

```text
List all GA4 properties in an account.

Returns: property name (properties/XXXXX), displayName, propertyType, timeZone, currencyCode,
industryCategory, serviceLevel (Standard/360).

Args:
  - account_id (string): GA4 account ID (numeric, e.g. "123456")
```

[Source](https://github.com/tiojimbo/agent-gtm-ga4/blob/3bfba4ed09e30e27b222d88cb8267c7627158fb5/src/tools/ga4/admin-tools.ts#L72-L129) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 account ID (numeric)"
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "maximum": 100,
      "default": 20,
      "description": "Maximum results to return"
    },
    "offset": {
      "type": "integer",
      "minimum": 0,
      "default": 0,
      "description": "Number of results to skip for pagination"
    }
  },
  "required": [
    "account_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-ga4_get_property-aa64c1ca"></a>

## ga4_get_property

Handler: Google Analytics 4 tool implemented by ga4Admin.getProperty.

```text
Get detailed information about a specific GA4 property.

Returns: displayName, propertyType, serviceLevel (Standard/360), timeZone, currencyCode,
industryCategory, createTime, updateTime.

Args:
  - property_id (string): GA4 property ID (numeric, e.g. "123456")
```

[Source](https://github.com/tiojimbo/agent-gtm-ga4/blob/3bfba4ed09e30e27b222d88cb8267c7627158fb5/src/tools/ga4/admin-tools.ts#L129-L173) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID (numeric)"
    }
  },
  "required": [
    "property_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-ga4_list_data_streams-e2cea14d"></a>

## ga4_list_data_streams

Handler: Google Analytics 4 tool implemented by ga4Admin.listDataStreams.

```text
List all data streams (web/iOS/Android) for a GA4 property.

For web streams: returns measurementId (G-XXXXXXXXXX) and defaultUri.
The measurementId is needed for GTM Google Tag configuration and Measurement Protocol.

Args:
  - property_id (string): GA4 property ID (numeric)
```

[Source](https://github.com/tiojimbo/agent-gtm-ga4/blob/3bfba4ed09e30e27b222d88cb8267c7627158fb5/src/tools/ga4/admin-tools.ts#L173-L229) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID (numeric)"
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "maximum": 100,
      "default": 20,
      "description": "Maximum results to return"
    },
    "offset": {
      "type": "integer",
      "minimum": 0,
      "default": 0,
      "description": "Number of results to skip for pagination"
    }
  },
  "required": [
    "property_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-ga4_get_data_stream-389517f0"></a>

## ga4_get_data_stream

Handler: Google Analytics 4 tool implemented by ga4Admin.getDataStream.

```text
Get detailed information about a specific GA4 data stream.

For web streams: measurementId, defaultUri, enhanced measurement settings.

Args:
  - property_id (string): GA4 property ID (numeric)
  - stream_id (string): Data stream ID (numeric)
```

[Source](https://github.com/tiojimbo/agent-gtm-ga4/blob/3bfba4ed09e30e27b222d88cb8267c7627158fb5/src/tools/ga4/admin-tools.ts#L229-L274) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID (numeric)"
    },
    "stream_id": {
      "type": "string",
      "minLength": 1,
      "description": "Data stream ID (numeric)"
    }
  },
  "required": [
    "property_id",
    "stream_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-ga4_list_custom_dimensions-75905509"></a>

## ga4_list_custom_dimensions

Handler: Google Analytics 4 tool implemented by ga4Admin.listCustomDimensions.

```text
List all custom dimensions for a GA4 property with slot usage analysis.

Shows event-scoped and user-scoped dimensions separately with remaining slot counts.
GA4 limits: 50 event-scoped, 25 user-scoped.
IMPORTANT: Slots do NOT free up when archived — they are consumed permanently.

Returns: parameterName, displayName, description, scope (EVENT/USER), slot usage status.

Args:
  - property_id (string): GA4 property ID (numeric)
```

[Source](https://github.com/tiojimbo/agent-gtm-ga4/blob/3bfba4ed09e30e27b222d88cb8267c7627158fb5/src/tools/ga4/admin-tools.ts#L274-L360) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID (numeric)"
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "maximum": 100,
      "default": 100,
      "description": "Maximum results to return"
    },
    "offset": {
      "type": "integer",
      "minimum": 0,
      "default": 0,
      "description": "Number of results to skip for pagination"
    }
  },
  "required": [
    "property_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-ga4_list_custom_metrics-64631ca9"></a>

## ga4_list_custom_metrics

Handler: Google Analytics 4 tool implemented by ga4Admin.listCustomMetrics.

```text
List all custom metrics for a GA4 property with slot usage.

GA4 limit: 50 custom metrics. Slots do NOT free up when archived.

Returns: parameterName, displayName, description, measurementUnit, slot usage status.

Args:
  - property_id (string): GA4 property ID (numeric)
```

[Source](https://github.com/tiojimbo/agent-gtm-ga4/blob/3bfba4ed09e30e27b222d88cb8267c7627158fb5/src/tools/ga4/admin-tools.ts#L360-L419) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID (numeric)"
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "maximum": 100,
      "default": 100,
      "description": "Maximum results to return"
    },
    "offset": {
      "type": "integer",
      "minimum": 0,
      "default": 0,
      "description": "Number of results to skip for pagination"
    }
  },
  "required": [
    "property_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-ga4_list_key_events-ac1a65f2"></a>

## ga4_list_key_events

Handler: Google Analytics 4 tool implemented by ga4Admin.listKeyEvents.

```text
List all key events (formerly "conversions") for a GA4 property.

Key Events are used for GA4 analysis and reporting. When imported into Google Ads,
they become Conversions for bidding optimization.

Returns: eventName, countingMethod (ONCE_PER_EVENT or ONCE_PER_SESSION), defaultValue, createTime.

Args:
  - property_id (string): GA4 property ID (numeric)
```

[Source](https://github.com/tiojimbo/agent-gtm-ga4/blob/3bfba4ed09e30e27b222d88cb8267c7627158fb5/src/tools/ga4/admin-tools.ts#L419-L476) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID (numeric)"
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "maximum": 100,
      "default": 50,
      "description": "Maximum results to return"
    },
    "offset": {
      "type": "integer",
      "minimum": 0,
      "default": 0,
      "description": "Number of results to skip for pagination"
    }
  },
  "required": [
    "property_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-ga4_list_audiences-35c4ca43"></a>

## ga4_list_audiences

Handler: Google Analytics 4 tool implemented by ga4Admin.listAudiences.

```text
List all audiences for a GA4 property.

Includes standard and predictive audiences (purchase probability, churn probability) if available.

Returns: displayName, description, membershipDurationDays, filterClauses.

Args:
  - property_id (string): GA4 property ID (numeric)
```

[Source](https://github.com/tiojimbo/agent-gtm-ga4/blob/3bfba4ed09e30e27b222d88cb8267c7627158fb5/src/tools/ga4/admin-tools.ts#L476-L532) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID (numeric)"
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "maximum": 100,
      "default": 50,
      "description": "Maximum results to return"
    },
    "offset": {
      "type": "integer",
      "minimum": 0,
      "default": 0,
      "description": "Number of results to skip for pagination"
    }
  },
  "required": [
    "property_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-ga4_list_mp_secrets-aba5dd0b"></a>

## ga4_list_mp_secrets

Handler: Google Analytics 4 tool implemented by ga4Admin.listMPSecrets.

```text
List Measurement Protocol API secrets for a GA4 data stream.

The API secret is required for server-side event sending via Measurement Protocol.
Note: secretValue is only visible at creation time — existing secrets show displayName only.

Args:
  - property_id (string): GA4 property ID (numeric)
  - stream_id (string): Data stream ID (numeric)
```

[Source](https://github.com/tiojimbo/agent-gtm-ga4/blob/3bfba4ed09e30e27b222d88cb8267c7627158fb5/src/tools/ga4/admin-tools.ts#L532-L579) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID (numeric)"
    },
    "stream_id": {
      "type": "string",
      "minLength": 1,
      "description": "Data stream ID (numeric)"
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "maximum": 100,
      "default": 20,
      "description": "Maximum results to return"
    },
    "offset": {
      "type": "integer",
      "minimum": 0,
      "default": 0,
      "description": "Number of results to skip for pagination"
    }
  },
  "required": [
    "property_id",
    "stream_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-ga4_create_custom_dimension-2ce8700e"></a>

## ga4_create_custom_dimension

Handler: Google Analytics 4 tool implemented by ga4Admin.listCustomDimensions, ga4Admin.createCustomDimension.

```text
Create a custom dimension in a GA4 property with semantic validation.

Validates:
1. parameterName in snake_case, max 40 chars (event) / 24 chars (user)
2. No reserved prefixes (google_, ga_, firebase_)
3. Checks available slots BEFORE creating (slots are consumed PERMANENTLY)
4. Warns if parameter is prescribed (auto-populates native dimension — custom dim not needed)
5. Checks for duplicate parameterName (avoids wasting a slot)

GA4 limits: 50 event-scoped, 25 user-scoped.

Args:
  - property_id (string): GA4 property ID (numeric)
  - parameter_name (string): The event/user parameter name (snake_case)
  - display_name (string): Human-readable name shown in GA4 UI
  - description (string): Description of this dimension
  - scope (string): "EVENT" or "USER"
  - disallow_ads_personalization (boolean): Block this dimension from ads (default: false)
```

[Source](https://github.com/tiojimbo/agent-gtm-ga4/blob/3bfba4ed09e30e27b222d88cb8267c7627158fb5/src/tools/ga4/admin-write-tools.ts#L80-L207) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID (numeric)"
    },
    "parameter_name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 40,
      "description": "Event/user parameter name (snake_case, e.g. \"form_name\")"
    },
    "display_name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 80,
      "description": "Human-readable name for GA4 UI"
    },
    "description": {
      "type": "string",
      "default": "",
      "description": "Description of what this dimension tracks"
    },
    "scope": {
      "type": "string",
      "enum": [
        "EVENT",
        "USER"
      ],
      "description": "Scope: EVENT or USER"
    },
    "disallow_ads_personalization": {
      "type": "boolean",
      "default": false,
      "description": "Block from ads personalization"
    }
  },
  "required": [
    "property_id",
    "parameter_name",
    "display_name",
    "scope"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": false
}
```

</details>

<a id="tool-ga4_archive_custom_dimension-1fc6993a"></a>

## ga4_archive_custom_dimension

Handler: Google Analytics 4 tool implemented by ga4Admin.archiveCustomDimension.

```text
Archive a custom dimension. WARNING: the slot is NOT freed — it remains consumed permanently.

You can reuse the slot by creating a new dimension in its place, but all historical data
for the archived dimension is lost.

Args:
  - property_id (string): GA4 property ID (numeric)
  - custom_dimension_id (string): Custom dimension resource ID (from the "name" field, e.g. "customDimensions/123")
```

[Source](https://github.com/tiojimbo/agent-gtm-ga4/blob/3bfba4ed09e30e27b222d88cb8267c7627158fb5/src/tools/ga4/admin-write-tools.ts#L207-L253) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID (numeric)"
    },
    "custom_dimension_id": {
      "type": "string",
      "minLength": 1,
      "description": "Custom dimension ID (numeric, from resource name)"
    }
  },
  "required": [
    "property_id",
    "custom_dimension_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": true,
  "openWorldHint": false
}
```

</details>

<a id="tool-ga4_create_custom_metric-840cf76a"></a>

## ga4_create_custom_metric

Handler: Google Analytics 4 tool implemented by ga4Admin.listCustomMetrics, ga4Admin.createCustomMetric.

```text
Create a custom metric in a GA4 property.

Validates slot availability (limit: 50, permanent consumption).

Valid measurement units: STANDARD, CURRENCY, FEET, MILES, METERS, KILOMETERS, MILLISECONDS, SECONDS, MINUTES, HOURS.

Args:
  - property_id (string): GA4 property ID (numeric)
  - parameter_name (string): Event parameter name (snake_case)
  - display_name (string): Human-readable name for GA4 UI
  - description (string): Description
  - measurement_unit (string): One of the valid units
```

[Source](https://github.com/tiojimbo/agent-gtm-ga4/blob/3bfba4ed09e30e27b222d88cb8267c7627158fb5/src/tools/ga4/admin-write-tools.ts#L253-L353) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID (numeric)"
    },
    "parameter_name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 40,
      "description": "Event parameter name (snake_case)"
    },
    "display_name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 80,
      "description": "Human-readable name for GA4 UI"
    },
    "description": {
      "type": "string",
      "default": "",
      "description": "Description"
    },
    "measurement_unit": {
      "type": "string",
      "enum": [
        "STANDARD",
        "CURRENCY",
        "FEET",
        "MILES",
        "METERS",
        "KILOMETERS",
        "MILLISECONDS",
        "SECONDS",
        "MINUTES",
        "HOURS"
      ],
      "description": "Measurement unit"
    }
  },
  "required": [
    "property_id",
    "parameter_name",
    "display_name",
    "measurement_unit"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": false
}
```

</details>

<a id="tool-ga4_create_key_event-503e5cec"></a>

## ga4_create_key_event

Handler: Google Analytics 4 tool implemented by ga4Admin.listKeyEvents, ga4Admin.createKeyEvent.

```text
Mark an event as a Key Event (formerly "conversion") with semantic validation.

Validates:
1. Blocks page_view, session_start, first_visit, user_engagement as key events (anti-pattern
   that inflates counts and distorts Smart Bidding)
2. Warns if event is Enhanced Measurement (e.g. scroll as key event is almost always wrong)
3. Suggests appropriate counting method:
   - ONCE_PER_EVENT for purchases (multiple purchases count)
   - ONCE_PER_SESSION for leads (1 lead per session)
4. Configures defaultValue if provided

Args:
  - property_id (string): GA4 property ID (numeric)
  - event_name (string): Event name to mark as key event
  - counting_method (string): ONCE_PER_EVENT or ONCE_PER_SESSION
  - default_value (number, optional): Default monetary value
  - currency_code (string, optional): Currency for default value (e.g. "BRL", "USD")
```

[Source](https://github.com/tiojimbo/agent-gtm-ga4/blob/3bfba4ed09e30e27b222d88cb8267c7627158fb5/src/tools/ga4/admin-write-tools.ts#L353-L485) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID (numeric)"
    },
    "event_name": {
      "type": "string",
      "minLength": 1,
      "description": "Event name to mark as key event"
    },
    "counting_method": {
      "type": "string",
      "enum": [
        "ONCE_PER_EVENT",
        "ONCE_PER_SESSION"
      ],
      "description": "Counting method"
    },
    "default_value": {
      "type": "number",
      "description": "Default monetary value per event"
    },
    "currency_code": {
      "type": "string",
      "minLength": 3,
      "maxLength": 3,
      "description": "ISO 4217 currency code (e.g. \"BRL\", \"USD\")"
    }
  },
  "required": [
    "property_id",
    "event_name",
    "counting_method"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": false
}
```

</details>

<a id="tool-ga4_delete_key_event-c4c6bdad"></a>

## ga4_delete_key_event

Handler: Google Analytics 4 tool implemented by ga4Admin.deleteKeyEvent.

```text
Remove the key event marking from an event. The event itself continues to be collected,
but it will no longer be counted as a conversion in reports.

WARNING: If this key event was imported into Google Ads, the Ads conversion continues
to exist until manually removed there.

Args:
  - property_id (string): GA4 property ID (numeric)
  - key_event_id (string): Key event resource ID (numeric, from the "name" field)
```

[Source](https://github.com/tiojimbo/agent-gtm-ga4/blob/3bfba4ed09e30e27b222d88cb8267c7627158fb5/src/tools/ga4/admin-write-tools.ts#L485-L533) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID (numeric)"
    },
    "key_event_id": {
      "type": "string",
      "minLength": 1,
      "description": "Key event ID (numeric, from resource name)"
    }
  },
  "required": [
    "property_id",
    "key_event_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": true,
  "openWorldHint": false
}
```

</details>

<a id="tool-ga4_create_mp_secret-a2b51a76"></a>

## ga4_create_mp_secret

Handler: Google Analytics 4 tool implemented by ga4Admin.createMPSecret.

```text
Create a new Measurement Protocol API secret for a GA4 data stream.

The secret value is ONLY visible at creation time — save it immediately.
Required for sending server-side events via Measurement Protocol (ga4_mp_send_event).

Args:
  - property_id (string): GA4 property ID (numeric)
  - stream_id (string): Data stream ID (numeric)
  - display_name (string): Human-readable name for this secret
```

[Source](https://github.com/tiojimbo/agent-gtm-ga4/blob/3bfba4ed09e30e27b222d88cb8267c7627158fb5/src/tools/ga4/admin-write-tools.ts#L533-L579) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID (numeric)"
    },
    "stream_id": {
      "type": "string",
      "minLength": 1,
      "description": "Data stream ID (numeric)"
    },
    "display_name": {
      "type": "string",
      "minLength": 1,
      "description": "Human-readable name (e.g. \"MCP Server Secret\")"
    }
  },
  "required": [
    "property_id",
    "stream_id",
    "display_name"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": false
}
```

</details>

<a id="tool-ga4_data_run_report-e57f4cbb"></a>

## ga4_data_run_report

Handler: Google Analytics 4 tool implemented by ga4Data.runReport.

```text
Execute an analytical report against the GA4 Data API.

Supports dimensions, metrics, filters, ordering, and pagination.
Data has 24-48h latency — the current day may be incomplete.

Common date values: "today", "yesterday", "7daysAgo", "30daysAgo", "90daysAgo".

Common dimensions: eventName, pagePath, pageTitle, sessionSource, sessionMedium,
firstUserSource, firstUserMedium, deviceCategory, country, city, transactionId.

Common metrics: sessions, totalUsers, newUsers, activeUsers, eventCount,
screenPageViews, engagementRate, averageSessionDuration, keyEvents, totalRevenue.

IMPORTANT: Use ga4_data_get_metadata first to verify which dimensions/metrics exist
in the property before running a report.

Args:
  - property_id (string): GA4 property ID (numeric)
  - start_date / end_date: Date range (e.g. "30daysAgo", "yesterday")
  - metrics (string[]): Required. Metric names to include
  - dimensions (string[]): Optional. Dimension names for grouping
  - dimension_filter: Optional. { field_name, match_type (EXACT/CONTAINS/BEGINS_WITH/ENDS_WITH/REGEXP/FULL_REGEXP), value }
  - metric_filter: Optional. { field_name, operation (GT/LT/GTE/LTE/EQUAL), value }
  - order_bys: Optional. Array of { field_name, sort_order }
  - limit/offset: Pagination (default 20, max 100000)
```

[Source](https://github.com/tiojimbo/agent-gtm-ga4/blob/3bfba4ed09e30e27b222d88cb8267c7627158fb5/src/tools/ga4/data-tools.ts#L42-L140) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID (numeric)"
    },
    "start_date": {
      "type": "string",
      "minLength": 1,
      "description": "Start date (e.g. \"30daysAgo\", \"2024-01-01\")"
    },
    "end_date": {
      "type": "string",
      "minLength": 1,
      "description": "End date (e.g. \"yesterday\", \"2024-01-31\")"
    },
    "metrics": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "minItems": 1,
      "description": "Metric names (e.g. [\"sessions\", \"totalUsers\"])"
    },
    "dimensions": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Dimension names for grouping (e.g. [\"eventName\", \"pagePath\"])"
    },
    "dimension_filter": {
      "type": "object",
      "properties": {
        "field_name": {
          "type": "string",
          "description": "Dimension field name"
        },
        "match_type": {
          "type": "string",
          "enum": [
            "EXACT",
            "CONTAINS",
            "BEGINS_WITH",
            "ENDS_WITH",
            "REGEXP",
            "FULL_REGEXP"
          ],
          "description": "String match type"
        },
        "value": {
          "type": "string",
          "description": "Filter value"
        }
      },
      "required": [
        "field_name",
        "match_type",
        "value"
      ],
      "additionalProperties": false,
      "description": "Optional dimension filter"
    },
    "metric_filter": {
      "type": "object",
      "properties": {
        "field_name": {
          "type": "string",
          "description": "Metric field name"
        },
        "operation": {
          "type": "string",
          "enum": [
            "GT",
            "LT",
            "GTE",
            "LTE",
            "EQUAL"
          ],
          "description": "Numeric comparison"
        },
        "value": {
          "type": "number",
          "description": "Filter value"
        }
      },
      "required": [
        "field_name",
        "operation",
        "value"
      ],
      "additionalProperties": false,
      "description": "Optional metric filter"
    },
    "order_bys": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "field_name": {
            "type": "string",
            "description": "Field name to sort by"
          },
          "sort_order": {
            "type": "string",
            "enum": [
              "ASCENDING",
              "DESCENDING"
            ],
            "default": "DESCENDING",
            "description": "Sort direction"
          }
        },
        "required": [
          "field_name"
        ],
        "additionalProperties": false
      },
      "description": "Optional ordering"
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "maximum": 100000,
      "default": 20,
      "description": "Maximum rows to return"
    },
    "offset": {
      "type": "integer",
      "minimum": 0,
      "default": 0,
      "description": "Number of rows to skip"
    }
  },
  "required": [
    "property_id",
    "start_date",
    "end_date",
    "metrics"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-ga4_data_run_realtime_report-25a58656"></a>

## ga4_data_run_realtime_report

Handler: Google Analytics 4 tool implemented by ga4Data.runRealtimeReport.

```text
Execute a realtime report showing data from the last 30 minutes.

Useful for post-deploy validation — NOT for business decisions (data is estimated).

Available dimensions (subset): eventName, unifiedScreenName, city, country,
deviceCategory, platform, streamId, minutesAgo.

Available metrics: activeUsers, eventCount, screenPageViews, keyEvents.

Args:
  - property_id (string): GA4 property ID (numeric)
  - metrics (string[]): Required. Metric names
  - dimensions (string[]): Optional. Dimension names
  - limit: Max rows (default 20)
```

[Source](https://github.com/tiojimbo/agent-gtm-ga4/blob/3bfba4ed09e30e27b222d88cb8267c7627158fb5/src/tools/ga4/data-tools.ts#L140-L194) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID (numeric)"
    },
    "metrics": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "minItems": 1,
      "description": "Metric names (e.g. [\"activeUsers\", \"eventCount\"])"
    },
    "dimensions": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Dimension names (e.g. [\"eventName\", \"deviceCategory\"])"
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "maximum": 100,
      "default": 20,
      "description": "Maximum rows to return"
    }
  },
  "required": [
    "property_id",
    "metrics"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-ga4_data_get_metadata-8a987008"></a>

## ga4_data_get_metadata

Handler: Google Analytics 4 tool implemented by ga4Data.getMetadata.

```text
List ALL available dimensions and metrics for a GA4 property.

Essential: Call this before building reports to know exactly which fields exist.
Includes both standard GA4 fields and custom definitions.

Returns: apiName, uiName, description, category, type (DIMENSION/METRIC),
customDefinition (true for custom dimensions/metrics).

Args:
  - property_id (string): GA4 property ID (numeric)
  - filter_type: Optional. Filter to "DIMENSION" or "METRIC" only
  - filter_custom_only: Optional. Show only custom definitions
```

[Source](https://github.com/tiojimbo/agent-gtm-ga4/blob/3bfba4ed09e30e27b222d88cb8267c7627158fb5/src/tools/ga4/data-tools.ts#L194-L285) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID (numeric)"
    },
    "filter_type": {
      "type": "string",
      "enum": [
        "DIMENSION",
        "METRIC"
      ],
      "description": "Filter to dimensions or metrics only"
    },
    "filter_custom_only": {
      "type": "boolean",
      "default": false,
      "description": "Show only custom definitions"
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "maximum": 500,
      "default": 50,
      "description": "Maximum results to return"
    },
    "offset": {
      "type": "integer",
      "minimum": 0,
      "default": 0,
      "description": "Number of results to skip for pagination"
    }
  },
  "required": [
    "property_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-ga4_mp_validate_event-59c6c7e9"></a>

## ga4_mp_validate_event

Handler: Google Analytics 4 tool implemented by mpClient.validateEvent.

```text
Validate an event payload against the GA4 Measurement Protocol debug endpoint WITHOUT sending it.

Returns validation messages with description, validationCode, and fieldPath if there are issues.
Use this to verify payloads before sending with ga4_mp_send_event.

Args:
  - measurement_id (string): GA4 Measurement ID (G-XXXXXXXXXX)
  - api_secret (string): Measurement Protocol API secret
  - client_id (string): Client ID (should match a real GA4 client_id for attribution)
  - events (array): Events to validate [{name, params}]
  - user_id (string, optional): User ID for cross-device tracking
  - timestamp_micros (number, optional): Event timestamp in microseconds (max 3 days in past)
  - consent_ad_user_data (string, optional): GRANTED or DENIED
  - consent_ad_personalization (string, optional): GRANTED or DENIED
```

[Source](https://github.com/tiojimbo/agent-gtm-ga4/blob/3bfba4ed09e30e27b222d88cb8267c7627158fb5/src/tools/ga4/mp-tools.ts#L79-L183) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "measurement_id": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 Measurement ID (G-XXXXXXXXXX)"
    },
    "api_secret": {
      "type": "string",
      "minLength": 1,
      "description": "Measurement Protocol API secret"
    },
    "client_id": {
      "type": "string",
      "minLength": 1,
      "description": "Client ID (must match real session client_id)"
    },
    "events": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "minLength": 1,
            "maxLength": 40,
            "description": "Event name (snake_case, max 40 chars)"
          },
          "params": {
            "type": "object",
            "additionalProperties": {
              "type": [
                "string",
                "number"
              ]
            },
            "description": "Event parameters as key-value pairs"
          }
        },
        "required": [
          "name"
        ],
        "additionalProperties": false
      },
      "minItems": 1,
      "maxItems": 25,
      "description": "Events to validate (max 25)"
    },
    "user_id": {
      "type": "string",
      "description": "User ID for cross-device tracking"
    },
    "timestamp_micros": {
      "type": "integer",
      "description": "Timestamp in microseconds (max 3 days ago)"
    },
    "consent_ad_user_data": {
      "type": "string",
      "enum": [
        "GRANTED",
        "DENIED"
      ],
      "description": "Ad user data consent"
    },
    "consent_ad_personalization": {
      "type": "string",
      "enum": [
        "GRANTED",
        "DENIED"
      ],
      "description": "Ad personalization consent"
    }
  },
  "required": [
    "measurement_id",
    "api_secret",
    "client_id",
    "events"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-ga4_mp_send_event-f6b749e4"></a>

## ga4_mp_send_event

Handler: Google Analytics 4 tool implemented by mpClient.sendEvent.

```text
Send events server-side to GA4 via Measurement Protocol.

SAFE FLOW: Always validates against the debug endpoint first. If validation fails,
returns errors WITHOUT sending to production.

Important notes:
- client_id MUST correspond to a real client_id from an existing session for proper attribution
- Events do NOT appear in Realtime reports (24-48h latency to standard reports)
- timestamp_micros: for backdating events up to 3 days in the past
- Typical uses: server-side refunds, offline transactions, data enrichment

Args:
  - measurement_id (string): GA4 Measurement ID (G-XXXXXXXXXX)
  - api_secret (string): Measurement Protocol API secret
  - client_id (string): Client ID from an existing GA4 session
  - events (array): Events to send [{name, params}]
  - user_id (string, optional): User ID
  - timestamp_micros (number, optional): Timestamp in microseconds
  - consent_ad_user_data (string, optional): GRANTED or DENIED
  - consent_ad_personalization (string, optional): GRANTED or DENIED
```

[Source](https://github.com/tiojimbo/agent-gtm-ga4/blob/3bfba4ed09e30e27b222d88cb8267c7627158fb5/src/tools/ga4/mp-tools.ts#L183-L302) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "measurement_id": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 Measurement ID (G-XXXXXXXXXX)"
    },
    "api_secret": {
      "type": "string",
      "minLength": 1,
      "description": "Measurement Protocol API secret"
    },
    "client_id": {
      "type": "string",
      "minLength": 1,
      "description": "Client ID from existing GA4 session"
    },
    "events": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "minLength": 1,
            "maxLength": 40,
            "description": "Event name (snake_case, max 40 chars)"
          },
          "params": {
            "type": "object",
            "additionalProperties": {
              "type": [
                "string",
                "number"
              ]
            },
            "description": "Event parameters as key-value pairs"
          }
        },
        "required": [
          "name"
        ],
        "additionalProperties": false
      },
      "minItems": 1,
      "maxItems": 25,
      "description": "Events to send (max 25 per request)"
    },
    "user_id": {
      "type": "string",
      "description": "User ID for cross-device tracking"
    },
    "timestamp_micros": {
      "type": "integer",
      "description": "Timestamp in microseconds"
    },
    "consent_ad_user_data": {
      "type": "string",
      "enum": [
        "GRANTED",
        "DENIED"
      ],
      "description": "Ad user data consent"
    },
    "consent_ad_personalization": {
      "type": "string",
      "enum": [
        "GRANTED",
        "DENIED"
      ],
      "description": "Ad personalization consent"
    }
  },
  "required": [
    "measurement_id",
    "api_secret",
    "client_id",
    "events"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-bridge_audit_ga4_gtm_sync-298e4df4"></a>

## bridge_audit_ga4_gtm_sync

Handler: Compares GTM tags and triggers with GA4 custom dimensions, metrics and key events to report configuration mismatches.

```text
Cross-platform audit between GTM workspace and GA4 property.
Identifies orphan parameters, missing key events, naming issues, limit warnings,
Enhanced Measurement overlaps, consent gaps, and more.

This is the senior analyst's quarterly checklist — automated.

Args:
  - account_id, container_id, workspace_id: GTM identifiers
  - property_id: GA4 property ID
```

[Source](https://github.com/tiojimbo/agent-gtm-ga4/blob/3bfba4ed09e30e27b222d88cb8267c7627158fb5/src/tools/bridge/audit-tools.ts#L59-L396) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM workspace ID"
    },
    "property_id": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "property_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-bridge_check_limits-65418634"></a>

## bridge_check_limits

Handler: Counts GTM entities and GA4 definitions and audiences against hardcoded product limits.

```text
Dashboard of resource usage and limits across GA4 and GTM.
Proactive alerts about limits that, if hit, cause permanent data loss.

Args:
  - account_id, container_id, workspace_id: GTM identifiers
  - property_id: GA4 property ID
```

[Source](https://github.com/tiojimbo/agent-gtm-ga4/blob/3bfba4ed09e30e27b222d88cb8267c7627158fb5/src/tools/bridge/audit-tools.ts#L396-L495) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM workspace ID"
    },
    "property_id": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "property_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-bridge_consent_mode_check-74c03787"></a>

## bridge_consent_mode_check

Handler: Inspects GTM tags and triggers for consent configuration patterns and reports recommendations.

```text
Verify Consent Mode configuration in GTM.
Checks for CMP tag presence, trigger order, consent settings on tags,
and identifies Basic vs Advanced mode indicators.

Args:
  - account_id, container_id, workspace_id: GTM identifiers
```

[Source](https://github.com/tiojimbo/agent-gtm-ga4/blob/3bfba4ed09e30e27b222d88cb8267c7627158fb5/src/tools/bridge/audit-tools.ts#L495-L628) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM workspace ID"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-bridge_validate_implementation-c881d364"></a>

## bridge_validate_implementation

Handler: Compares configured GTM event tags against seven days of GA4 event-count reports and checks ecommerce funnel volume.

```text
Verify that events configured in GTM are actually arriving in GA4 with correct data.

Cross-references GTM tags against GA4 report data from the last 7 days.
Identifies:
- Events configured in GTM but absent in GA4 data
- Events with very low volume (possible trigger issues)
- Custom dimensions with (not set) values
- E-commerce funnel breaks

Args:
  - account_id, container_id, workspace_id: GTM identifiers
  - property_id: GA4 property ID
```

[Source](https://github.com/tiojimbo/agent-gtm-ga4/blob/3bfba4ed09e30e27b222d88cb8267c7627158fb5/src/tools/bridge/diagnosis-tools.ts#L32-L213) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM workspace ID"
    },
    "property_id": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "property_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-bridge_diagnose_issues-dcd663cf"></a>

## bridge_diagnose_issues

Handler: Matches symptom text to hardcoded troubleshooting guidance, optionally reading GTM tags or GA4 custom dimensions.

```text
Diagnose common GA4/GTM tracking problems based on reported symptoms.
Acts as a senior analyst performing troubleshooting.

Supported symptoms:
- "duplicate revenue" / "receita duplicada"
- "duplicate page_view" / "page_view duplicado"
- "(not set) in dimensions" / "not set"
- "data disappeared" / "dados desapareceram"
- "inflated sessions" / "sessões infladas"
- "inflated new users" / "new users inflados"
- "GA4 vs Google Ads discrepancy" / "discrepância GA4 Ads"
- "revenue differs from ERP" / "receita diferente do ERP"

Args:
  - symptom: Description of the issue
  - account_id, container_id, workspace_id: GTM identifiers (optional, for live inspection)
  - property_id: GA4 property ID (optional, for live inspection)
```

[Source](https://github.com/tiojimbo/agent-gtm-ga4/blob/3bfba4ed09e30e27b222d88cb8267c7627158fb5/src/tools/bridge/diagnosis-tools.ts#L213-L505) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "symptom": {
      "type": "string",
      "minLength": 1,
      "description": "Description of the tracking issue"
    },
    "account_id": {
      "type": "string",
      "description": "GTM account ID (for live inspection)"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID"
    },
    "property_id": {
      "type": "string",
      "description": "GA4 property ID"
    }
  },
  "required": [
    "symptom"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-bridge_setup_event_tracking-9753d7d7"></a>

## bridge_setup_event_tracking

Handler: Creates GTM workspace entities and GA4 custom dimensions or key events for event tracking; returns partial-operation warnings.

```text
Complete event tracking setup across GTM and GA4 in one step.
Automates the flow that takes 15-30 minutes manually:
1. Validates event name against recommended events registry
2. Creates workspace (if not provided)
3. Creates DLV variables for each parameter
4. Creates trigger (Custom Event by default)
5. Creates GA4 Event tag with parameter mapping
6. Registers custom dimensions in GA4 (checks slots, skips prescribed params)
7. Marks as key event if requested
8. Generates dataLayer.push spec for developers

Args:
  - account_id, container_id: GTM identifiers
  - property_id: GA4 property ID
  - workspace_id (optional): Existing workspace, or one will be created
  - event_name: GA4 event name (snake_case)
  - parameters: Array of {name, type, scope} for event parameters
  - trigger_event_name (optional): Custom Event name in data layer (defaults to event_name)
  - is_key_event (boolean): Mark as key event in GA4
  - counting_method (optional): ONCE_PER_EVENT or ONCE_PER_SESSION
  - default_value (number, optional): Default monetary value for key event
  - currency_code (string, optional): Currency for default value
```

[Source](https://github.com/tiojimbo/agent-gtm-ga4/blob/3bfba4ed09e30e27b222d88cb8267c7627158fb5/src/tools/bridge/setup-tools.ts#L16-L276) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID"
    },
    "property_id": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (created if not provided)"
    },
    "event_name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 40,
      "description": "GA4 event name (snake_case)"
    },
    "parameters": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "Parameter name (snake_case)"
          },
          "type": {
            "type": "string",
            "enum": [
              "string",
              "number"
            ],
            "default": "string",
            "description": "Parameter type"
          },
          "scope": {
            "type": "string",
            "enum": [
              "event",
              "user"
            ],
            "default": "event",
            "description": "Dimension scope"
          }
        },
        "required": [
          "name"
        ],
        "additionalProperties": false
      },
      "default": [],
      "description": "Event parameters"
    },
    "trigger_event_name": {
      "type": "string",
      "description": "Custom Event name in dataLayer (defaults to event_name)"
    },
    "is_key_event": {
      "type": "boolean",
      "default": false,
      "description": "Mark as key event in GA4"
    },
    "counting_method": {
      "type": "string",
      "enum": [
        "ONCE_PER_EVENT",
        "ONCE_PER_SESSION"
      ],
      "description": "Key event counting method"
    },
    "default_value": {
      "type": "number",
      "description": "Default monetary value"
    },
    "currency_code": {
      "type": "string",
      "minLength": 3,
      "maxLength": 3,
      "description": "ISO 4217 currency code"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "property_id",
    "event_name"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-bridge_setup_ecommerce-96afaa9f"></a>

## bridge_setup_ecommerce

Handler: Creates ecommerce GTM triggers and GA4 event tags, optionally creates GA4 purchase key events, and emits a dataLayer specification.

```text
Configure the complete GA4 e-commerce funnel in GTM — the setup that takes 2-4 hours manually.

Creates for each funnel step (view_item_list through purchase + refund):
- Custom Event trigger
- GA4 Event tag with send_ecommerce_data=true
- Marks purchase as key event

Also generates the complete dataLayer specification for developers.

Args:
  - account_id, container_id: GTM identifiers
  - property_id: GA4 property ID
  - workspace_id (optional): Existing workspace, or creates "mcp/setup-ecommerce"
  - events (optional): Subset of funnel events to create (defaults to all)
  - currency_code: Default currency (e.g. "BRL", "USD")
```

[Source](https://github.com/tiojimbo/agent-gtm-ga4/blob/3bfba4ed09e30e27b222d88cb8267c7627158fb5/src/tools/bridge/setup-tools.ts#L276-L459) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID"
    },
    "property_id": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (created if not provided)"
    },
    "events": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Subset of funnel events (defaults to all: view_item_list, select_item, view_item, add_to_cart, view_cart, begin_checkout, add_shipping_info, add_payment_info, purchase, refund)"
    },
    "currency_code": {
      "type": "string",
      "minLength": 3,
      "maxLength": 3,
      "default": "BRL",
      "description": "Default currency code"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "property_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-bridge_generate_datalayer_spec-03f9cae4"></a>

## bridge_generate_datalayer_spec

Handler: Reads GTM tags, triggers and variables and produces a Markdown dataLayer specification.

```text
Reads the current GTM workspace state and generates the complete dataLayer specification
that developers need to implement on the site.

For each GA4 Event tag: infers the dataLayer.push format from referenced variables and triggers.
For e-commerce events: generates spec with cleanup push and items array.
Includes timing guidance (when each push should occur).

Args:
  - account_id, container_id, workspace_id: GTM identifiers
```

[Source](https://github.com/tiojimbo/agent-gtm-ga4/blob/3bfba4ed09e30e27b222d88cb8267c7627158fb5/src/tools/bridge/spec-tools.ts#L46-L215) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM workspace ID"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-bridge_generate_tracking_plan-ea329044"></a>

## bridge_generate_tracking_plan

Handler: Produces a tracking plan from live GTM/GA4 configuration or hardcoded business-type templates.

```text
Generate a professional tracking plan based on either:
1. Current GTM + GA4 state (reads existing config and documents it)
2. Business objectives (maps goals to events and parameters)

The tracking plan includes: business objective, KPI, event name, type,
parameters, trigger, key event status, value, custom dimensions, and implementation status.

Args:
  - mode: "current_state" (read GTM+GA4) or "objectives" (from business goals)
  - For current_state: account_id, container_id, workspace_id, property_id
  - For objectives: objectives array [{goal, kpis}]
```

[Source](https://github.com/tiojimbo/agent-gtm-ga4/blob/3bfba4ed09e30e27b222d88cb8267c7627158fb5/src/tools/bridge/spec-tools.ts#L215-L411) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "mode": {
      "type": "string",
      "enum": [
        "current_state",
        "objectives"
      ],
      "description": "Generation mode"
    },
    "account_id": {
      "type": "string",
      "description": "GTM account ID (for current_state mode)"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID (for current_state mode)"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (for current_state mode)"
    },
    "property_id": {
      "type": "string",
      "description": "GA4 property ID (for current_state mode)"
    },
    "objectives": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "goal": {
            "type": "string",
            "description": "Business objective"
          },
          "kpis": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "KPIs for this objective"
          }
        },
        "required": [
          "goal",
          "kpis"
        ],
        "additionalProperties": false
      },
      "description": "Business objectives (for objectives mode)"
    }
  },
  "required": [
    "mode"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>
