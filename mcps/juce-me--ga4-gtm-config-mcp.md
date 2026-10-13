# Juce-me/ga4-gtm-config-mcp

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/Juce-me/ga4-gtm-config-mcp) · [Machine-readable inventory](../data/mcps/juce-me--ga4-gtm-config-mcp.json)

**12 extracted tools.** Compare YAML specifications with GA4/GTM state and preview or apply ordered workspace changes.

Snapshot: 2026-10-13 · [23a934cb0886](https://github.com/Juce-me/ga4-gtm-config-mcp/tree/23a934cb08862fab88520b425347ea6d8f0872a6) · Method: mixed.

Exposure: All 12 tools are registered unconditionally, including writes and gated version/publish tools; dry_run defaults true for both apply tools. Publish handler additionally requires INCLUDE_PUBLISH_SCOPE=1.

## Limits

- Only initialize and tools/list were executed with isolated HOME and stripped environment; no Google authentication or tool operations were invoked. Handler functionality is source-reviewed, not live-tested.
- Version gate only checks existence of diff_report_path; handler passes unresolved_blocked_items=0 without reading report contents, and approval tokens are tested only for nonempty strings.
- API list helpers return the first response page without pagination; large account/workspace states may be incomplete.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`read_mcp_execution_spec`](#tool-read_mcp_execution_spec-0743bfaa) | Supporting | Parses and returns the local YAML execution spec without calling Google APIs. |
| [`read_ga4_state`](#tool-read_ga4_state-58f87b5a) | Other product | GA4: reads property, streams, dimensions, metrics, key events and optional stream secret metadata with secret values omitted. |
| [`read_gtm_state`](#tool-read_gtm_state-d06af157) | GTM | Lists workspaces and capacity and optionally reads built-in variables, variables, triggers and tags for a workspace. |
| [`validate_mcp_execution_spec`](#tool-validate_mcp_execution_spec-e552068b) | Supporting | Reads the local spec and performs schema and semantic validation. |
| [`summarize_mcp_execution_spec`](#tool-summarize_mcp_execution_spec-ab85840b) | Supporting | Reads the local spec and summarizes its targets and execution gates. |
| [`diff_ga4_gtm_state`](#tool-diff_ga4_gtm_state-b386bdda) | GTM | Validates the spec, reads GA4/GTM entities and computes a normalized desired/current diff without writes. |
| [`create_gtm_workspace`](#tool-create_gtm_workspace-00287f7b) | GTM | Creates a workspace after capacity checks, or reuses an existing named workspace when requested and safe. |
| [`apply_gtm_workspace_changes`](#tool-apply_gtm_workspace_changes-6f4c4a6c) | GTM | Validates spec and consent guards, reads workspace entities and applies ordered upserts and built-in enables only when dry\_run is false. |
| [`apply_ga4_admin_changes`](#tool-apply_ga4_admin_changes-868a9286) | Other product | GA4: validates the spec, reads dimensions/metrics/key events and applies their upserts only when dry\_run is false. |
| [`get_gtm_preview_info`](#tool-get_gtm_preview_info-598abf65) | GTM | Returns workspace metadata and a fixed manual Tag Assistant/DebugView checklist, falling back to the checklist when API access fails. |
| [`create_gtm_container_version_gated`](#tool-create_gtm_container_version_gated-916d344d) | GTM | Creates a container version after spec, nonempty token, workspace, semantic-validation and existing diff-file gates; the diff blocked count passed to the gate is hardcoded zero. |
| [`publish_gtm_version_gated`](#tool-publish_gtm_version_gated-6c7d7290) | GTM | Publishes a version only after spec allowance, nonempty token/version, matching environment, explicit operator flag, validation and a report containing passed plus INCLUDE\_PUBLISH\_SCOPE=1 gates. |

<a id="tool-read_mcp_execution_spec-0743bfaa"></a>

## read_mcp_execution_spec

Handler: Parses and returns the local YAML execution spec without calling Google APIs.

```text
[read-only] Loads and returns the parsed mcp-execution.yaml at the given path. Does not call any Google API.
```

[Source](https://github.com/Juce-me/ga4-gtm-config-mcp/blob/23a934cb08862fab88520b425347ea6d8f0872a6/src/tools/readTools.ts#L29-L50) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "path": {
      "type": "string"
    }
  },
  "required": [
    "path"
  ],
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-read_ga4_state-58f87b5a"></a>

## read_ga4_state

Handler: GA4: reads property, streams, dimensions, metrics, key events and optional stream secret metadata with secret values omitted.

```text
[read-only] Returns normalized GA4 property, streams, custom dimensions, custom metrics, key events, and Measurement Protocol secret metadata only. Never returns secret values.
```

[Source](https://github.com/Juce-me/ga4-gtm-config-mcp/blob/23a934cb08862fab88520b425347ea6d8f0872a6/src/tools/readTools.ts#L54-L88) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "ga4_property_id": {
      "type": "string"
    },
    "web_stream_id": {
      "type": "string"
    }
  },
  "required": [
    "ga4_property_id"
  ],
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-read_gtm_state-d06af157"></a>

## read_gtm_state

Handler: Lists workspaces and capacity and optionally reads built-in variables, variables, triggers and tags for a workspace.

```text
[read-only] Returns normalized GTM container state for the given account/container, including workspace capacity.
```

[Source](https://github.com/Juce-me/ga4-gtm-config-mcp/blob/23a934cb08862fab88520b425347ea6d8f0872a6/src/tools/readTools.ts#L92-L131) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "container_id": {
      "type": "string"
    },
    "workspace_id": {
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ],
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-validate_mcp_execution_spec-e552068b"></a>

## validate_mcp_execution_spec

Handler: Reads the local spec and performs schema and semantic validation.

```text
[read-only] Runs schema and semantic validation on a spec file and returns ok/warnings/errors. Does not call any Google API.
```

[Source](https://github.com/Juce-me/ga4-gtm-config-mcp/blob/23a934cb08862fab88520b425347ea6d8f0872a6/src/tools/validateTools.ts#L13-L32) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "path": {
      "type": "string"
    }
  },
  "required": [
    "path"
  ],
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-summarize_mcp_execution_spec-ab85840b"></a>

## summarize_mcp_execution_spec

Handler: Reads the local spec and summarizes its targets and execution gates.

```text
[read-only] Returns a human-readable summary of the spec, including all four gate booleans.
```

[Source](https://github.com/Juce-me/ga4-gtm-config-mcp/blob/23a934cb08862fab88520b425347ea6d8f0872a6/src/tools/validateTools.ts#L36-L54) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "path": {
      "type": "string"
    }
  },
  "required": [
    "path"
  ],
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-diff_ga4_gtm_state-b386bdda"></a>

## diff_ga4_gtm_state

Handler: Validates the spec, reads GA4/GTM entities and computes a normalized desired/current diff without writes.

```text
[read-only] Reads current GA4 and GTM state, normalizes the spec into a desired state, and returns a deterministic diff. Performs no writes.
```

[Source](https://github.com/Juce-me/ga4-gtm-config-mcp/blob/23a934cb08862fab88520b425347ea6d8f0872a6/src/tools/diffTools.ts#L28-L94) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "spec_path": {
      "type": "string"
    },
    "account_id": {
      "type": "string"
    },
    "container_id": {
      "type": "string"
    },
    "workspace_id": {
      "type": "string"
    },
    "ga4_property_id": {
      "type": "string"
    }
  },
  "required": [
    "spec_path",
    "account_id",
    "container_id",
    "workspace_id",
    "ga4_property_id"
  ],
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-create_gtm_workspace-00287f7b"></a>

## create_gtm_workspace

Handler: Creates a workspace after capacity checks, or reuses an existing named workspace when requested and safe.

```text
[write — non-live workspace only] Creates a new GTM workspace in the given container. Blocks if container is at capacity or if the operator targets the live/default workspace.
```

[Source](https://github.com/Juce-me/ga4-gtm-config-mcp/blob/23a934cb08862fab88520b425347ea6d8f0872a6/src/tools/applyTools.ts#L32-L78) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "container_id": {
      "type": "string"
    },
    "workspace_name": {
      "type": "string"
    },
    "reuse_existing": {
      "default": false,
      "type": "boolean"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_name"
  ],
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-apply_gtm_workspace_changes-6f4c4a6c"></a>

## apply_gtm_workspace_changes

Handler: Validates spec and consent guards, reads workspace entities and applies ordered upserts and built-in enables only when dry\_run is false.

```text
[dry-run-capable write] Upserts approved variables, triggers, and tags into the given non-live workspace. Defaults to dry_run: true. Never deletes. Never modifies consent unless approved in spec.
```

[Source](https://github.com/Juce-me/ga4-gtm-config-mcp/blob/23a934cb08862fab88520b425347ea6d8f0872a6/src/tools/applyTools.ts#L83-L184) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "spec_path": {
      "type": "string"
    },
    "account_id": {
      "type": "string"
    },
    "container_id": {
      "type": "string"
    },
    "workspace_id": {
      "type": "string"
    },
    "dry_run": {
      "default": true,
      "type": "boolean"
    }
  },
  "required": [
    "spec_path",
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-apply_ga4_admin_changes-868a9286"></a>

## apply_ga4_admin_changes

Handler: GA4: validates the spec, reads dimensions/metrics/key events and applies their upserts only when dry\_run is false.

```text
[dry-run-capable write] Upserts approved GA4 custom dimensions, custom metrics, and key events. Defaults to dry_run: true. Never archives. Never stores Measurement Protocol secret values.
```

[Source](https://github.com/Juce-me/ga4-gtm-config-mcp/blob/23a934cb08862fab88520b425347ea6d8f0872a6/src/tools/applyTools.ts#L189-L271) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "spec_path": {
      "type": "string"
    },
    "ga4_property_id": {
      "type": "string"
    },
    "dry_run": {
      "default": true,
      "type": "boolean"
    }
  },
  "required": [
    "spec_path",
    "ga4_property_id"
  ],
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-get_gtm_preview_info-598abf65"></a>

## get_gtm_preview_info

Handler: Returns workspace metadata and a fixed manual Tag Assistant/DebugView checklist, falling back to the checklist when API access fails.

```text
[read-only] Returns workspace metadata and a fixed manual Tag Assistant / DebugView checklist. Does not create a version.
```

[Source](https://github.com/Juce-me/ga4-gtm-config-mcp/blob/23a934cb08862fab88520b425347ea6d8f0872a6/src/tools/previewTools.ts#L12-L46) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "container_id": {
      "type": "string"
    },
    "workspace_id": {
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-create_gtm_container_version_gated-916d344d"></a>

## create_gtm_container_version_gated

Handler: Creates a container version after spec, nonempty token, workspace, semantic-validation and existing diff-file gates; the diff blocked count passed to the gate is hardcoded zero.

```text
[gated dangerous] Creates a GTM container version from the named workspace. Note: this removes the workspace. Requires spec.execution.create_container_version_allowed: true and an explicit approval_token.
```

[Source](https://github.com/Juce-me/ga4-gtm-config-mcp/blob/23a934cb08862fab88520b425347ea6d8f0872a6/src/tools/versionTools.ts#L17-L67) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "spec_path": {
      "type": "string"
    },
    "account_id": {
      "type": "string"
    },
    "container_id": {
      "type": "string"
    },
    "workspace_id": {
      "type": "string"
    },
    "approval_token": {
      "type": "string"
    },
    "diff_report_path": {
      "type": "string"
    },
    "version_name": {
      "type": "string"
    },
    "notes": {
      "type": "string"
    }
  },
  "required": [
    "spec_path",
    "account_id",
    "container_id",
    "workspace_id",
    "approval_token",
    "diff_report_path",
    "version_name"
  ],
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-publish_gtm_version_gated-6c7d7290"></a>

## publish_gtm_version_gated

Handler: Publishes a version only after spec allowance, nonempty token/version, matching environment, explicit operator flag, validation and a report containing passed plus INCLUDE\_PUBLISH\_SCOPE=1 gates.

```text
[gated dangerous] Publishes a GTM container version. Default behavior is to refuse. Requires every publish-guard condition to pass plus an explicit approval_token.
```

[Source](https://github.com/Juce-me/ga4-gtm-config-mcp/blob/23a934cb08862fab88520b425347ea6d8f0872a6/src/tools/publishTools.ts#L16-L64) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "spec_path": {
      "type": "string"
    },
    "account_id": {
      "type": "string"
    },
    "container_id": {
      "type": "string"
    },
    "version_id": {
      "type": "string"
    },
    "approval_token": {
      "type": "string"
    },
    "validation_report_path": {
      "type": "string"
    },
    "environment": {
      "type": "string"
    },
    "operator_requested_publish": {
      "type": "boolean"
    }
  },
  "required": [
    "spec_path",
    "account_id",
    "container_id",
    "version_id",
    "approval_token",
    "validation_report_path",
    "environment",
    "operator_requested_publish"
  ],
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>
