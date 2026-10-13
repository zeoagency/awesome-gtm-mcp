# ToroSachi/tagops

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/ToroSachi/tagops) · [Machine-readable inventory](../data/mcps/torosachi--tagops.json)

**29 extracted tools.** Detect drift against snapshots, plan restores, check policies, and promote changes between configured container profiles.

Snapshot: 2026-10-13 · [88ba18e3b966](https://github.com/ToroSachi/tagops/tree/88ba18e3b966a4f4f845817d82a10d2477bbee2c) · Method: tools/list.

Exposure: 29 tools registered by default; --read-only registers 23 tools, omitting six creation/install/sync tools while retaining guarded rollback/promote and webhook sending.

## Limits

- Only initialize/tools/list executed offline with an isolated HOME and scrubbed subprocess environment; handlers and authenticated API behavior were reviewed statically, not invoked.
- gtm_implement_pixel uses a generic Custom HTML scaffold for unmatched templates/actions: this queues local payloads and requires replacement with real vendor code.
- gtm_sync_containers invokes syncContainers without silent:true; that helper writes progress via console.log, potentially contaminating the stdio MCP transport.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`gtm_list_tags`](#tool-gtm_list_tags-b585bc12) | GTM | Fetches current workspace tags using the Google Tag Manager API and returns key metadata. |
| [`gtm_get_tag`](#tool-gtm_get_tag-3d242291) | GTM | Retrieves the full workspace tag definition by ID using the GTM API. |
| [`gtm_list_triggers`](#tool-gtm_list_triggers-16b41a3c) | GTM | Fetches current workspace triggers using the GTM API and returns IDs, names and types. |
| [`gtm_list_variables`](#tool-gtm_list_variables-81705a80) | GTM | Fetches workspace variables using the GTM API and returns data layer references when present. |
| [`gtm_create_html_tag`](#tool-gtm_create_html_tag-7ff7ba17) | GTM | Sanitizes HTML and checks write access before creating a GTM Custom HTML tag with firing and consent settings. |
| [`gtm_create_trigger`](#tool-gtm_create_trigger-99da4322) | GTM | Checks write access and creates a GTM custom event trigger with optional page path filter. |
| [`gtm_plan_restore`](#tool-gtm_plan_restore-ad389725) | GTM | Loads a local snapshot and compares live tags, triggers, variables and folders to produce a restore plan without applying it. |
| [`gtm_detect_drift`](#tool-gtm_detect_drift-e8780874) | GTM | Compares a local snapshot against live workspace resources and classifies semantic drift. |
| [`gtm_policy_check`](#tool-gtm_policy_check-517eb774) | GTM | Loads local governance policies and evaluates live workspace tags, triggers and variables. |
| [`gtm_workspace_status`](#tool-gtm_workspace_status-8ba0f1f4) | GTM | Calls the GTM workspace getStatus API and returns sync state, conflicts and pending changes. |
| [`gtm_workspace_create`](#tool-gtm_workspace_create-a3430e0c) | GTM | Checks write access and calls the GTM workspace create API. |
| [`gtm_list_versions`](#tool-gtm_list_versions-f9371c4c) | GTM | Lists recent container versions, loads version details and marks the currently live version. |
| [`gtm_rollback`](#tool-gtm_rollback-4f7f17f9) | GTM | Previews version metadata differences or publishes the selected previous container version after access checks. |
| [`gtm_promote`](#tool-gtm_promote-b0a37963) | GTM | Validates configured promotion flow and plans or applies create/update sync between profiles while retaining target-only resources; MCP does not request publishing. |
| [`gtm_audit`](#tool-gtm_audit-b95baa17) | GTM | Inspects live tags, triggers and variables for workspace configuration, consent and HTML hygiene issues. |
| [`gtm_consent_audit`](#tool-gtm_consent_audit-6a93878a) | GTM | Audits tag consent signals or previews consent fixes with fixConsentV2(true), which is always dry-run in MCP. |
| [`gtm_doctor`](#tool-gtm_doctor-1d049081) | Supporting | Checks local installation/configuration/authentication and attempts GTM connectivity and resource diagnostics. |
| [`gtm_health_score`](#tool-gtm_health_score-33275d3a) | GTM | Fetches workspace tags, triggers and variables and calculates a quality score and grade. |
| [`gtm_enhanced_conversions`](#tool-gtm_enhanced_conversions-91148ef1) | GTM | Fetches workspace tags and checks Enhanced Conversions configuration and consent heuristics. |
| [`gtm_sst_readiness`](#tool-gtm_sst_readiness-3ced4a4b) | GTM | Fetches container metadata, tags and variables plus supported clients and transformations, then assesses server-side tagging readiness. |
| [`gtm_compare_containers`](#tool-gtm_compare_containers-64a32dcb) | GTM | Compares tags, triggers and variables fetched under two named configuration profiles. |
| [`gtm_sync_containers`](#tool-gtm_sync_containers-e0740c9a) | GTM | Plans or applies create/update synchronization between profiles with ID and relationship remapping; forces confirmation bypass. |
| [`gtm_validate_capi`](#tool-gtm_validate_capi-6b05528e) | Supporting | Reads a local JSON payload and validates Meta CAPI or TikTok Events API formats without contacting those APIs. |
| [`gtm_notify`](#tool-gtm_notify-af2511b4) | Supporting | Posts a supplied summary/event/optional score to a Slack, Teams or generic webhook; does not modify GTM. |
| [`gtm_get_architecture`](#tool-gtm_get_architecture-28ac2a6a) | GTM | Returns locally defined trigger and variable maps without a GTM request. |
| [`gtm_implement_pixel`](#tool-gtm_implement_pixel-f0f7e0fe) | GTM | Plans or creates template-based HTML pixel tags and triggers; unmatched vendors/actions get a local queue scaffold rather than functional vendor tracking code. |
| [`gtm_list_templates`](#tool-gtm_list_templates-8d77f0ae) | GTM | Returns the local template registry and required template inputs. |
| [`gtm_preview_template`](#tool-gtm_preview_template-39386b23) | GTM | Renders local template tags and HTML using a supplied or example pixel ID without installation. |
| [`gtm_install_template`](#tool-gtm_install_template-17ea767b) | GTM | Installs or previews a local integration template, creating GTM tags, triggers and variables with write access checks in apply mode. |

<a id="tool-gtm_list_tags-b585bc12"></a>

## gtm_list_tags

Handler: Fetches current workspace tags using the Google Tag Manager API and returns key metadata.

```text
List all GTM tags in the current workspace. Returns each tag's ID, name, type, firing trigger references, and paused status. Use this to understand the current tag landscape before making changes or running audits. Success: a complete JSON array of all tags with their key metadata.
```

[Source](https://github.com/ToroSachi/tagops/blob/88ba18e3b966a4f4f845817d82a10d2477bbee2c/src/server.ts#L455-L479) · Schema: tools/list.

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

<a id="tool-gtm_get_tag-3d242291"></a>

## gtm_get_tag

Handler: Retrieves the full workspace tag definition by ID using the GTM API.

```text
Get the full configuration of a specific GTM tag by its numeric ID. Returns all parameters, consent settings, firing triggers, and metadata. Use this when you need the complete tag definition for debugging, auditing, or cloning. Requires the numeric tag ID from gtm_list_tags.
```

[Source](https://github.com/ToroSachi/tagops/blob/88ba18e3b966a4f4f845817d82a10d2477bbee2c/src/server.ts#L480-L493) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "tag_id": {
      "type": "string",
      "description": "The numeric tag ID"
    }
  },
  "required": [
    "tag_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_list_triggers-16b41a3c"></a>

## gtm_list_triggers

Handler: Fetches current workspace triggers using the GTM API and returns IDs, names and types.

```text
List all GTM triggers in the current workspace. Returns each trigger's ID, name, and type (page view, custom event, click, etc.). Use this to understand what user actions are being tracked and to find available trigger IDs for creating new tags. Success: a complete JSON array of all triggers.
```

[Source](https://github.com/ToroSachi/tagops/blob/88ba18e3b966a4f4f845817d82a10d2477bbee2c/src/server.ts#L494-L516) · Schema: tools/list.

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

<a id="tool-gtm_list_variables-81705a80"></a>

## gtm_list_variables

Handler: Fetches workspace variables using the GTM API and returns data layer references when present.

```text
List all GTM variables in the current workspace. Returns each variable's ID, name, type, and the data layer key it reads (if applicable). Use this to understand what data is available for tag configuration and to verify variable naming conventions. Success: a complete JSON array of all variables.
```

[Source](https://github.com/ToroSachi/tagops/blob/88ba18e3b966a4f4f845817d82a10d2477bbee2c/src/server.ts#L517-L544) · Schema: tools/list.

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

<a id="tool-gtm_create_html_tag-7ff7ba17"></a>

## gtm_create_html_tag

Handler: Sanitizes HTML and checks write access before creating a GTM Custom HTML tag with firing and consent settings.

```text
Create a Custom HTML tag in GTM with specified trigger and consent settings. The HTML content is automatically sanitized against dangerous patterns (eval, document.cookie, etc.) and untrusted domains. Use this to implement vendor tracking pixels by providing the HTML snippet, a trigger ID, and the consent type. Always verify the trigger ID exists via gtm_list_triggers first.
```

[Source](https://github.com/ToroSachi/tagops/blob/88ba18e3b966a4f4f845817d82a10d2477bbee2c/src/server.ts#L545-L597) · Schema: tools/list.

Exposure: Default mode only; registration omitted under --read-only.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Tag name, e.g. 'Artsai – Purchase'"
    },
    "html": {
      "type": "string",
      "description": "HTML content for the tag (script or img)"
    },
    "trigger_id": {
      "type": "string",
      "description": "Firing trigger ID"
    },
    "consent_type": {
      "type": "string",
      "description": "Consent type: 'ad_storage' or 'analytics_storage'. Default: ad_storage"
    },
    "profile_name": {
      "type": "string",
      "description": "Optional named profile from .gtmrc.json to scope the write operation."
    }
  },
  "required": [
    "name",
    "html",
    "trigger_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_create_trigger-99da4322"></a>

## gtm_create_trigger

Handler: Checks write access and creates a GTM custom event trigger with optional page path filter.

```text
Create a Custom Event trigger in GTM that fires when a specific dataLayer event occurs. Optionally filter by page path to restrict firing to specific pages. Use this when implementing new tracking that requires a custom trigger not already in the workspace. Returns the created trigger's metadata including its ID for use in tag creation.
```

[Source](https://github.com/ToroSachi/tagops/blob/88ba18e3b966a4f4f845817d82a10d2477bbee2c/src/server.ts#L598-L652) · Schema: tools/list.

Exposure: Default mode only; registration omitted under --read-only.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Trigger name, e.g. 'CE - Page View (/history)'"
    },
    "event_name": {
      "type": "string",
      "description": "The dataLayer event name to listen for"
    },
    "page_path_filter": {
      "type": "string",
      "description": "Optional: filter to only fire when Page Path contains this value"
    },
    "profile_name": {
      "type": "string",
      "description": "Optional named profile from .gtmrc.json to scope the write operation."
    }
  },
  "required": [
    "name",
    "event_name"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_plan_restore-ad389725"></a>

## gtm_plan_restore

Handler: Loads a local snapshot and compares live tags, triggers, variables and folders to produce a restore plan without applying it.

```text
Preview how the current GTM workspace would be restored to match a saved snapshot. This does not apply changes. Returns create/update/delete actions, counts, safety warnings, and a risk level.
```

[Source](https://github.com/ToroSachi/tagops/blob/88ba18e3b966a4f4f845817d82a10d2477bbee2c/src/server.ts#L653-L675) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "snapshot_path": {
      "type": "string",
      "minLength": 1,
      "description": "Path to the GTM snapshot JSON file to compare against the current workspace."
    }
  },
  "required": [
    "snapshot_path"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_detect_drift-e8780874"></a>

## gtm_detect_drift

Handler: Compares a local snapshot against live workspace resources and classifies semantic drift.

```text
Detect semantic drift between a saved GTM snapshot and the live workspace. Reports managed drift, unmanaged additions, deleted resources, and summary counts.
```

[Source](https://github.com/ToroSachi/tagops/blob/88ba18e3b966a4f4f845817d82a10d2477bbee2c/src/server.ts#L676-L700) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "snapshot_path": {
      "type": "string",
      "description": "Optional path to the GTM snapshot JSON file. Defaults to gtm-snapshot.json in the current directory."
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_policy_check-517eb774"></a>

## gtm_policy_check

Handler: Loads local governance policies and evaluates live workspace tags, triggers and variables.

```text
Run TagOps governance policies against the current GTM workspace. Loads the default policy config unless a custom config path is provided and returns violations with severity counts.
```

[Source](https://github.com/ToroSachi/tagops/blob/88ba18e3b966a4f4f845817d82a10d2477bbee2c/src/server.ts#L701-L736) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "config_path": {
      "type": "string",
      "description": "Optional path to a policy config JSON file. Defaults to .tagops-policies.json if present."
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_workspace_status-8ba0f1f4"></a>

## gtm_workspace_status

Handler: Calls the GTM workspace getStatus API and returns sync state, conflicts and pending changes.

```text
Get the current GTM draft workspace sync state. Returns whether the workspace is synced plus merge conflicts and pending workspace changes.
```

[Source](https://github.com/ToroSachi/tagops/blob/88ba18e3b966a4f4f845817d82a10d2477bbee2c/src/server.ts#L737-L763) · Schema: tools/list.

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

<a id="tool-gtm_workspace_create-a3430e0c"></a>

## gtm_workspace_create

Handler: Checks write access and calls the GTM workspace create API.

```text
Create a new isolated GTM draft workspace for safe changes. Returns the created workspace metadata including the new workspace ID.
```

[Source](https://github.com/ToroSachi/tagops/blob/88ba18e3b966a4f4f845817d82a10d2477bbee2c/src/server.ts#L764-L804) · Schema: tools/list.

Exposure: Default mode only; registration omitted under --read-only.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "Human-readable name for the new draft workspace."
    },
    "description": {
      "type": "string",
      "description": "Optional description explaining the workspace purpose."
    },
    "profile_name": {
      "type": "string",
      "description": "Optional named profile from .gtmrc.json to scope the workspace creation."
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

<a id="tool-gtm_list_versions-f9371c4c"></a>

## gtm_list_versions

Handler: Lists recent container versions, loads version details and marks the currently live version.

```text
List recent GTM container versions, including which version is currently live. Useful before rollback or release decisions.
```

[Source](https://github.com/ToroSachi/tagops/blob/88ba18e3b966a4f4f845817d82a10d2477bbee2c/src/server.ts#L805-L830) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "limit": {
      "type": "integer",
      "minimum": 1,
      "maximum": 50,
      "description": "Maximum number of recent versions to return. Defaults to 10."
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_rollback-4f7f17f9"></a>

## gtm_rollback

Handler: Previews version metadata differences or publishes the selected previous container version after access checks.

```text
Roll the live GTM container back to a previous published version, or preview the rollback in dry-run mode. Returns the target version, current live version, and a change summary.
```

[Source](https://github.com/ToroSachi/tagops/blob/88ba18e3b966a4f4f845817d82a10d2477bbee2c/src/server.ts#L831-L870) · Schema: tools/list.

Exposure: Registered in both modes; --read-only permits dry_run=true and rejects apply/publish.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "version_id": {
      "type": "string",
      "minLength": 1,
      "description": "Container version ID to roll back to."
    },
    "dry_run": {
      "type": "boolean",
      "description": "If true, preview the rollback without publishing the target version."
    },
    "profile_name": {
      "type": "string",
      "description": "Optional named profile from .gtmrc.json to scope the rollback."
    }
  },
  "required": [
    "version_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_promote-b0a37963"></a>

## gtm_promote

Handler: Validates configured promotion flow and plans or applies create/update sync between profiles while retaining target-only resources; MCP does not request publishing.

```text
Promote GTM changes from a source profile into a target profile. In dry-run mode it returns the promotion plan only. In apply mode it syncs create/update changes into the target profile without deleting target-only drift.
```

[Source](https://github.com/ToroSachi/tagops/blob/88ba18e3b966a4f4f845817d82a10d2477bbee2c/src/server.ts#L871-L911) · Schema: tools/list.

Exposure: Registered in both modes; --read-only permits dry_run=true and rejects apply/publish.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "source_profile": {
      "type": "string",
      "minLength": 1,
      "description": "Source profile name from .gtmrc.json."
    },
    "target_profile": {
      "type": "string",
      "minLength": 1,
      "description": "Target profile name from .gtmrc.json."
    },
    "dry_run": {
      "type": "boolean",
      "description": "If true, return the promotion plan without applying any changes."
    }
  },
  "required": [
    "source_profile",
    "target_profile"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_audit-b95baa17"></a>

## gtm_audit

Handler: Inspects live tags, triggers and variables for workspace configuration, consent and HTML hygiene issues.

```text
Perform a comprehensive workspace health check identifying missing triggers, incorrect consent settings, orphaned triggers, paused tags, duplicate names, and risky custom HTML. Use this regularly to maintain workspace hygiene and catch configuration errors before they reach production. Returns a categorized issue report with actionable findings.
```

[Source](https://github.com/ToroSachi/tagops/blob/88ba18e3b966a4f4f845817d82a10d2477bbee2c/src/server.ts#L912-L926) · Schema: tools/list.

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

<a id="tool-gtm_consent_audit-6a93878a"></a>

## gtm_consent_audit

Handler: Audits tag consent signals or previews consent fixes with fixConsentV2(true), which is always dry-run in MCP.

```text
Analyze all tags for Google Consent Mode v2 compliance across the four required consent signals (ad_storage, ad_user_data, ad_personalization, analytics_storage). Use this to ensure GDPR/CCPA privacy regulation compliance before deployments. Returns a compliance percentage score with per-tag signal breakdown. Includes optional dry-run auto-fix mode to preview what consent corrections would be applied.
```

[Source](https://github.com/ToroSachi/tagops/blob/88ba18e3b966a4f4f845817d82a10d2477bbee2c/src/server.ts#L927-L955) · Schema: tools/list.

Exposure: Registered in both modes; --read-only rejects fix=true even though fixes are always preview-only.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "fix": {
      "type": "boolean",
      "description": "If true, auto-fix non-compliant tags by adding required consent signals (dry run)"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_doctor-1d049081"></a>

## gtm_doctor

Handler: Checks local installation/configuration/authentication and attempts GTM connectivity and resource diagnostics.

```text
Perform a system-wide health check of your TagOps installation. Validates Node.js version, .gtmrc.json configuration, authentication credentials, API connectivity, workspace resource access, and consent compliance. Use this first when troubleshooting setup issues or to verify a fresh installation is working correctly.
```

[Source](https://github.com/ToroSachi/tagops/blob/88ba18e3b966a4f4f845817d82a10d2477bbee2c/src/server.ts#L956-L971) · Schema: tools/list.

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

<a id="tool-gtm_health_score-33275d3a"></a>

## gtm_health_score

Handler: Fetches workspace tags, triggers and variables and calculates a quality score and grade.

```text
Generate an overall workspace quality assessment combining multiple health factors into a single 0-100 score and letter grade (A-F). Evaluates consent compliance, naming conventions, tag hygiene, custom HTML security risks, trigger coverage, duplicate detection, and container size. Use this for regular monitoring or as a CI gate to enforce minimum quality standards.
```

[Source](https://github.com/ToroSachi/tagops/blob/88ba18e3b966a4f4f845817d82a10d2477bbee2c/src/server.ts#L972-L993) · Schema: tools/list.

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

<a id="tool-gtm_enhanced_conversions-91148ef1"></a>

## gtm_enhanced_conversions

Handler: Fetches workspace tags and checks Enhanced Conversions configuration and consent heuristics.

```text
Verify that Google Ads Enhanced Conversions are configured correctly per current requirements. Checks for user-provided data event tags, proper trigger alignment, consent signal configuration, and PII collection compliance. Use this when implementing or auditing conversion tracking to ensure compliance with Google's privacy requirements.
```

[Source](https://github.com/ToroSachi/tagops/blob/88ba18e3b966a4f4f845817d82a10d2477bbee2c/src/server.ts#L994-L1011) · Schema: tools/list.

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

<a id="tool-gtm_sst_readiness-3ced4a4b"></a>

## gtm_sst_readiness

Handler: Fetches container metadata, tags and variables plus supported clients and transformations, then assesses server-side tagging readiness.

```text
Evaluate your workspace's readiness for server-side tagging implementation. Analyzes which tags can be migrated to server-side, reviews browser routing configuration, server clients and transformations, and tagging-server domain setup. Use this when planning SST migration to understand the effort required and identify blockers.
```

[Source](https://github.com/ToroSachi/tagops/blob/88ba18e3b966a4f4f845817d82a10d2477bbee2c/src/server.ts#L1012-L1040) · Schema: tools/list.

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

<a id="tool-gtm_compare_containers-64a32dcb"></a>

## gtm_compare_containers

Handler: Compares tags, triggers and variables fetched under two named configuration profiles.

```text
Analyze configuration differences between two GTM environments (e.g., staging vs production) using named profiles from .gtmrc.json. Shows which tags, triggers, and variables differ, exist only in one container, or are identical. Use this before promotions to understand exactly what will change, or to diagnose environment inconsistencies.
```

[Source](https://github.com/ToroSachi/tagops/blob/88ba18e3b966a4f4f845817d82a10d2477bbee2c/src/server.ts#L1041-L1060) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "source_profile": {
      "type": "string",
      "description": "Source profile name from .gtmrc.json"
    },
    "target_profile": {
      "type": "string",
      "description": "Target profile name from .gtmrc.json"
    }
  },
  "required": [
    "source_profile",
    "target_profile"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_sync_containers-e0740c9a"></a>

## gtm_sync_containers

Handler: Plans or applies create/update synchronization between profiles with ID and relationship remapping; forces confirmation bypass.

```text
Copy GTM configuration elements from one environment to another while maintaining proper trigger-tag relationships through automatic ID remapping. Use this to deploy tested configurations from staging to production or sync environments after divergence. Supports dry-run preview mode to see exactly what would change before committing.
```

[Source](https://github.com/ToroSachi/tagops/blob/88ba18e3b966a4f4f845817d82a10d2477bbee2c/src/server.ts#L1061-L1091) · Schema: tools/list.

Exposure: Default mode only; registration omitted under --read-only.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "source_profile": {
      "type": "string",
      "description": "Source profile name from .gtmrc.json"
    },
    "target_profile": {
      "type": "string",
      "description": "Target profile name from .gtmrc.json"
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview changes without actually syncing"
    }
  },
  "required": [
    "source_profile",
    "target_profile"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_validate_capi-6b05528e"></a>

## gtm_validate_capi

Handler: Reads a local JSON payload and validates Meta CAPI or TikTok Events API formats without contacting those APIs.

```text
Validate Meta Conversions API or TikTok Events API server-side payloads offline. Checks hashing, deduplication ids, and required formats.
```

[Source](https://github.com/ToroSachi/tagops/blob/88ba18e3b966a4f4f845817d82a10d2477bbee2c/src/server.ts#L1092-L1113) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "platform": {
      "type": "string",
      "enum": [
        "meta",
        "tiktok"
      ],
      "description": "Platform to validate against"
    },
    "payload_path": {
      "type": "string",
      "description": "Path to the JSON payload file"
    }
  },
  "required": [
    "platform",
    "payload_path"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_notify-af2511b4"></a>

## gtm_notify

Handler: Posts a supplied summary/event/optional score to a Slack, Teams or generic webhook; does not modify GTM.

```text
Send a notification to a Slack or Teams webhook. Useful for alerting on audit results, drift, or deploys.
```

[Source](https://github.com/ToroSachi/tagops/blob/88ba18e3b966a4f4f845817d82a10d2477bbee2c/src/server.ts#L1114-L1141) · Schema: tools/list.

Exposure: Registered in both modes; --read-only still permits webhook sending.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "webhook_url": {
      "type": "string",
      "description": "Slack or Teams incoming webhook URL"
    },
    "event": {
      "type": "string",
      "enum": [
        "audit",
        "consent_audit",
        "publish",
        "drift",
        "snapshot",
        "custom"
      ],
      "description": "Event type"
    },
    "summary": {
      "type": "string",
      "description": "Summary message for the notification"
    },
    "score": {
      "type": "number",
      "description": "Optional compliance score to include"
    }
  },
  "required": [
    "webhook_url",
    "event",
    "summary"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_get_architecture-28ac2a6a"></a>

## gtm_get_architecture

Handler: Returns locally defined trigger and variable maps without a GTM request.

```text
Get the GTM architecture reference: trigger IDs, variable names, and naming conventions
```

[Source](https://github.com/ToroSachi/tagops/blob/88ba18e3b966a4f4f845817d82a10d2477bbee2c/src/server.ts#L1142-L1386) · Schema: tools/list.

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

<a id="tool-gtm_implement_pixel-f0f7e0fe"></a>

## gtm_implement_pixel

Handler: Plans or creates template-based HTML pixel tags and triggers; unmatched vendors/actions get a local queue scaffold rather than functional vendor tracking code.

```text
Intelligently implement a tracking pixel from plain English requirements. Maps actions to existing triggers and creates properly configured tags.
```

[Source](https://github.com/ToroSachi/tagops/blob/88ba18e3b966a4f4f845817d82a10d2477bbee2c/src/server.ts#L1387-L1571) · Schema: tools/list.

Exposure: Default mode only; registration omitted under --read-only.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "vendor_name": {
      "type": "string",
      "description": "Vendor name, e.g. 'Artsai', 'Magellan', 'Reddit'"
    },
    "pixel_id": {
      "type": "string",
      "description": "The vendor's pixel/tracking ID"
    },
    "pixels": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "action": {
            "type": "string",
            "description": "Action type: purchase, signup, lead, content, pageview, add_to_cart, checkout, view_item"
          },
          "page_filter": {
            "type": "string",
            "description": "Optional URL path filter, e.g. '/history'"
          },
          "dynamic_values": {
            "type": "object",
            "additionalProperties": {
              "type": "string"
            },
            "description": "Dynamic values to pass, e.g. {value: 'ecommerce.value', order_id: 'ecommerce.transaction_id'}"
          },
          "content_id": {
            "type": "string",
            "description": "Content ID for content-type pixels"
          }
        },
        "required": [
          "action"
        ],
        "additionalProperties": false
      },
      "description": "Array of pixel configurations to create"
    },
    "dry_run": {
      "type": "boolean",
      "description": "If true, returns what would be created without making changes"
    },
    "profile_name": {
      "type": "string",
      "description": "Optional named profile from .gtmrc.json to scope the write operation."
    }
  },
  "required": [
    "vendor_name",
    "pixel_id",
    "pixels"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_list_templates-8d77f0ae"></a>

## gtm_list_templates

Handler: Returns the local template registry and required template inputs.

```text
List all available pre-built integration templates (Meta, TikTok, Shopify, Impact, etc.)
```

[Source](https://github.com/ToroSachi/tagops/blob/88ba18e3b966a4f4f845817d82a10d2477bbee2c/src/server.ts#L1572-L1595) · Schema: tools/list.

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

<a id="tool-gtm_preview_template-39386b23"></a>

## gtm_preview_template

Handler: Renders local template tags and HTML using a supplied or example pixel ID without installation.

```text
Preview the tags and HTML that a template would create, without installing anything
```

[Source](https://github.com/ToroSachi/tagops/blob/88ba18e3b966a4f4f845817d82a10d2477bbee2c/src/server.ts#L1596-L1618) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "template_id": {
      "type": "string",
      "description": "Template ID (e.g. 'meta-pixel', 'shopify-custom-pixel')"
    },
    "pixel_id": {
      "type": "string",
      "description": "Pixel/tracking ID (uses example value if not provided)"
    }
  },
  "required": [
    "template_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_install_template-17ea767b"></a>

## gtm_install_template

Handler: Installs or previews a local integration template, creating GTM tags, triggers and variables with write access checks in apply mode.

```text
Install an integration template into the GTM workspace. Creates all necessary tags, triggers, and variables.
```

[Source](https://github.com/ToroSachi/tagops/blob/88ba18e3b966a4f4f845817d82a10d2477bbee2c/src/server.ts#L1619-L1649) · Schema: tools/list.

Exposure: Default mode only; registration omitted under --read-only.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "template_id": {
      "type": "string",
      "description": "Template ID (e.g. 'meta-pixel', 'shopify-custom-pixel')"
    },
    "pixel_id": {
      "type": "string",
      "description": "Pixel/tracking ID for the integration"
    },
    "dry_run": {
      "type": "boolean",
      "description": "If true, preview what would be created without making changes"
    }
  },
  "required": [
    "template_id",
    "pixel_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>
