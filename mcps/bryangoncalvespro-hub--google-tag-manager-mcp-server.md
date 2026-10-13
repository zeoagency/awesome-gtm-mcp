# bryangoncalvespro-hub/google-tag-manager-mcp-server

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/bryangoncalvespro-hub/google-tag-manager-mcp-server) · [Machine-readable inventory](../data/mcps/bryangoncalvespro-hub--google-tag-manager-mcp-server.json)

**15 extracted tools.** Builds conversion tags and their variables and triggers, previews workspaces, and publishes versions.

Snapshot: 2026-10-13 · [36988defce42](https://github.com/bryangoncalvespro-hub/google-tag-manager-mcp-server/tree/36988defce424c30a48ee4e507ec6f637a17ee67) · Method: tools/list.

Exposure: All 15 tools are registered unconditionally in both transports; no conditional or read-only groups. Credentials are only used by tool handlers.

## Limits

- Catalog obtained by compiling an isolated copy and calling initialize/tools/list with no Google credentials; no GTM handler was invoked, so live API behavior was not verified.
- List handlers make one GET request and do not follow nextPageToken, so descriptions promising every resource can overstate results for paginated collections.
- Google Ads installation creates resources sequentially without rollback or duplicate detection; optional publication proceeds whenever a version ID exists without an explicit compilerError check.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`gtm_list_accounts`](#tool-gtm_list_accounts-c5d9b27f) | GTM | Fetches GTM accounts and returns selected account fields and count. |
| [`gtm_list_containers`](#tool-gtm_list_containers-e45afd2b) | GTM | Fetches account containers and returns selected container fields and count. |
| [`gtm_list_workspaces`](#tool-gtm_list_workspaces-248ce86f) | GTM | Fetches container workspaces and returns workspace IDs, names, descriptions and count. |
| [`gtm_list_tags`](#tool-gtm_list_tags-b585bc12) | GTM | Fetches workspace tags and returns selected configuration fields and count. |
| [`gtm_list_triggers`](#tool-gtm_list_triggers-16b41a3c) | GTM | Fetches workspace triggers and returns selected filter fields and count. |
| [`gtm_list_variables`](#tool-gtm_list_variables-81705a80) | GTM | Fetches workspace user-defined variables and returns parameters and count. |
| [`gtm_create_tag`](#tool-gtm_create_tag-c682840c) | GTM | POSTs a tag with supplied type, parameters, trigger IDs and notes to the workspace tags collection. |
| [`gtm_create_trigger`](#tool-gtm_create_trigger-99da4322) | GTM | POSTs a trigger with supplied type, filters, parameters and notes to the workspace triggers collection. |
| [`gtm_create_variable`](#tool-gtm_create_variable-5b853337) | GTM | POSTs a user-defined variable with supplied type, parameters and notes to the workspace variables collection. |
| [`gtm_update_tag`](#tool-gtm_update_tag-23807743) | GTM | PUTs the supplied full tag definition to the workspace tag resource. |
| [`gtm_delete_tag`](#tool-gtm_delete_tag-42a56cac) | GTM | DELETEs the workspace tag resource and returns deleted true and its ID. |
| [`gtm_create_version`](#tool-gtm_create_version-50a805d7) | GTM | POSTs workspace create\_version and returns version metadata, compiler error and sync status. |
| [`gtm_publish_version`](#tool-gtm_publish_version-0cc97535) | GTM | POSTs container version publish and returns the API result with published true. |
| [`gtm_quick_preview`](#tool-gtm_quick_preview-125bde55) | GTM | POSTs workspace quick\_preview and returns its compilation and sync result. |
| [`gtm_install_google_ads_conversion`](#tool-gtm_install_google_ads_conversion-01ace0ae) | GTM | Creates two constant variables, a page-view or custom-event trigger and an awct tag, then optionally creates and publishes a version; operations are sequential without rollback. |

<a id="tool-gtm_list_accounts-c5d9b27f"></a>

## gtm_list_accounts

Handler: Fetches GTM accounts and returns selected account fields and count.

```text
List every Google Tag Manager account the authenticated user has access to. Use this first to discover the account_id values required by other tools.

Returns: { accounts: [{ account_id, name, path, fingerprint }] }
```

[Source](https://github.com/bryangoncalvespro-hub/google-tag-manager-mcp-server/blob/36988defce424c30a48ee4e507ec6f637a17ee67/src/tools/list-accounts.ts#L1-L32) · Schema: tools/list.

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

Handler: Fetches account containers and returns selected container fields and count.

```text
List every container (web / iOS / Android / AMP / server) inside a GTM account.

Returns: { containers: [{ container_id, name, public_id, usage_context, domain_name }] }
```

[Source](https://github.com/bryangoncalvespro-hub/google-tag-manager-mcp-server/blob/36988defce424c30a48ee4e507ec6f637a17ee67/src/tools/list-containers.ts#L1-L36) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID (from gtm_list_accounts)"
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

<a id="tool-gtm_list_workspaces-248ce86f"></a>

## gtm_list_workspaces

Handler: Fetches container workspaces and returns workspace IDs, names, descriptions and count.

```text
List workspaces of a container. The 'Default Workspace' (usually workspace_id=1) is the one you'll edit by default.

Returns: { workspaces: [{ workspace_id, name, description }] }
```

[Source](https://github.com/bryangoncalvespro-hub/google-tag-manager-mcp-server/blob/36988defce424c30a48ee4e507ec6f637a17ee67/src/tools/list-workspaces.ts#L1-L34) · Schema: tools/list.

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

Handler: Fetches workspace tags and returns selected configuration fields and count.

```text
List every tag configured in the given workspace.

Common types: `awct` (Google Ads Conversion), `sp` (Google Ads Remarketing), `ga4` (GA4 Event), `gaawc` (GA4 Config), `html` (Custom HTML).

Returns: { tags: [{ tag_id, name, type, firing_trigger_id, parameter, paused }] }
```

[Source](https://github.com/bryangoncalvespro-hub/google-tag-manager-mcp-server/blob/36988defce424c30a48ee4e507ec6f637a17ee67/src/tools/list-tags.ts#L1-L40) · Schema: tools/list.

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

<a id="tool-gtm_list_triggers-16b41a3c"></a>

## gtm_list_triggers

Handler: Fetches workspace triggers and returns selected filter fields and count.

```text
List every trigger in the workspace.

Common types: `pageview`, `domReady`, `windowLoaded`, `click`, `linkClick`, `formSubmission`, `customEvent`.

Returns: { triggers: [{ trigger_id, name, type, custom_event_filter, filter }] }
```

[Source](https://github.com/bryangoncalvespro-hub/google-tag-manager-mcp-server/blob/36988defce424c30a48ee4e507ec6f637a17ee67/src/tools/list-triggers.ts#L1-L39) · Schema: tools/list.

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

<a id="tool-gtm_list_variables-81705a80"></a>

## gtm_list_variables

Handler: Fetches workspace user-defined variables and returns parameters and count.

```text
List every user-defined variable in the workspace.

Common types: `c` (Constant), `v` (DataLayer Variable), `u` (URL), `k` (First-Party Cookie), `jsm` (Custom JavaScript), `smm` (Lookup Table).

Returns: { variables: [{ variable_id, name, type, parameter }] }
```

[Source](https://github.com/bryangoncalvespro-hub/google-tag-manager-mcp-server/blob/36988defce424c30a48ee4e507ec6f637a17ee67/src/tools/list-variables.ts#L1-L38) · Schema: tools/list.

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

<a id="tool-gtm_create_tag-c682840c"></a>

## gtm_create_tag

Handler: POSTs a tag with supplied type, parameters, trigger IDs and notes to the workspace tags collection.

```text
Create any tag (Google Ads conversion, GA4 event, Custom HTML, pixel…) in a workspace.

Common `type` values:
- `awct` — Google Ads Conversion Tracking
- `sp` — Google Ads Remarketing
- `gaawc` — GA4 Configuration
- `gaawe` — GA4 Event
- `html` — Custom HTML

`parameter` is an array of `{ type, key, value }`. Example for awct:
  [{type:'template',key:'conversionId',value:'AW-123'}, {type:'template',key:'conversionLabel',value:'abc'}]

Returns the created tag object including the new tag_id.
```

[Source](https://github.com/bryangoncalvespro-hub/google-tag-manager-mcp-server/blob/36988defce424c30a48ee4e507ec6f637a17ee67/src/tools/create-tag.ts#L1-L67) · Schema: tools/list.

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
    },
    "name": {
      "type": "string",
      "description": "Human-readable tag name"
    },
    "type": {
      "type": "string",
      "description": "GTM tag type (e.g. 'awct', 'gaawe', 'html')"
    },
    "parameter": {
      "type": "array",
      "items": {
        "type": "object",
        "additionalProperties": {}
      },
      "description": "Array of { type, key, value } parameter objects"
    },
    "firing_trigger_id": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Trigger IDs that fire this tag"
    },
    "blocking_trigger_id": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "notes": {
      "type": "string"
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
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_create_trigger-99da4322"></a>

## gtm_create_trigger

Handler: POSTs a trigger with supplied type, filters, parameters and notes to the workspace triggers collection.

```text
Create a trigger that can fire tags.

Common `type` values:
- `pageview` — Page View (DOM start)
- `domReady` — DOM Ready
- `windowLoaded` — Window Loaded
- `click`, `linkClick`, `formSubmission`
- `customEvent` — for dataLayer events (use custom_event_filter to match event name)

For customEvent, pass custom_event_filter like:
  [{parameter:[{type:'template',key:'arg0',value:'{{_event}}'},{type:'template',key:'arg1',value:'purchase'}],type:'equals'}]

Returns the created trigger including trigger_id.
```

[Source](https://github.com/bryangoncalvespro-hub/google-tag-manager-mcp-server/blob/36988defce424c30a48ee4e507ec6f637a17ee67/src/tools/create-trigger.ts#L1-L61) · Schema: tools/list.

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
    },
    "name": {
      "type": "string"
    },
    "type": {
      "type": "string",
      "description": "Trigger type (e.g. 'pageview', 'customEvent')"
    },
    "custom_event_filter": {
      "type": "array",
      "items": {
        "type": "object",
        "additionalProperties": {}
      }
    },
    "filter": {
      "type": "array",
      "items": {
        "type": "object",
        "additionalProperties": {}
      }
    },
    "parameter": {
      "type": "array",
      "items": {
        "type": "object",
        "additionalProperties": {}
      }
    },
    "notes": {
      "type": "string"
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
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_create_variable-5b853337"></a>

## gtm_create_variable

Handler: POSTs a user-defined variable with supplied type, parameters and notes to the workspace variables collection.

```text
Create a user-defined variable in the workspace.

Common `type` values:
- `c` — Constant (parameter: [{type:'template',key:'value',value:'...'}])
- `v` — DataLayer Variable (parameter: [{type:'template',key:'name',value:'my_dl_key'},{type:'integer',key:'dataLayerVersion',value:'2'}])
- `u` — URL
- `k` — First-Party Cookie
- `jsm` — Custom JavaScript (parameter: [{type:'template',key:'javascript',value:'function(){ return ... }'}])
- `smm` — Lookup Table

Returns the created variable including variable_id.
```

[Source](https://github.com/bryangoncalvespro-hub/google-tag-manager-mcp-server/blob/36988defce424c30a48ee4e507ec6f637a17ee67/src/tools/create-variable.ts#L1-L46) · Schema: tools/list.

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
    },
    "name": {
      "type": "string"
    },
    "type": {
      "type": "string"
    },
    "parameter": {
      "type": "array",
      "items": {
        "type": "object",
        "additionalProperties": {}
      }
    },
    "notes": {
      "type": "string"
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
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_update_tag-23807743"></a>

## gtm_update_tag

Handler: PUTs the supplied full tag definition to the workspace tag resource.

```text
Replace the full tag definition. All fields are overwritten, so always re-pass the complete config.

Returns the updated tag.
```

[Source](https://github.com/bryangoncalvespro-hub/google-tag-manager-mcp-server/blob/36988defce424c30a48ee4e507ec6f637a17ee67/src/tools/update-tag.ts#L1-L55) · Schema: tools/list.

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
    },
    "tag_id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "type": {
      "type": "string"
    },
    "parameter": {
      "type": "array",
      "items": {
        "type": "object",
        "additionalProperties": {}
      }
    },
    "firing_trigger_id": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "blocking_trigger_id": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "notes": {
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "tag_id",
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
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_delete_tag-42a56cac"></a>

## gtm_delete_tag

Handler: DELETEs the workspace tag resource and returns deleted true and its ID.

```text
Permanently remove a tag. The change lives only in the workspace until a new version is published.

Returns: { deleted: true, tag_id }
```

[Source](https://github.com/bryangoncalvespro-hub/google-tag-manager-mcp-server/blob/36988defce424c30a48ee4e507ec6f637a17ee67/src/tools/delete-tag.ts#L1-L31) · Schema: tools/list.

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
    },
    "tag_id": {
      "type": "string"
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
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_create_version-50a805d7"></a>

## gtm_create_version

Handler: POSTs workspace create\_version and returns version metadata, compiler error and sync status.

```text
Freeze the current workspace state into a container version, ready for publishing. A new empty workspace is automatically created.

Returns: { version_id, name, notes, compiler_error }
```

[Source](https://github.com/bryangoncalvespro-hub/google-tag-manager-mcp-server/blob/36988defce424c30a48ee4e507ec6f637a17ee67/src/tools/create-version.ts#L1-L43) · Schema: tools/list.

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
    },
    "name": {
      "type": "string",
      "description": "Version name"
    },
    "notes": {
      "type": "string",
      "description": "Release notes"
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
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_publish_version-0cc97535"></a>

## gtm_publish_version

Handler: POSTs container version publish and returns the API result with published true.

```text
Push a frozen container version live. This is the action that actually deploys tags to users' browsers. Call after gtm_create_version.

Returns the published container version.
```

[Source](https://github.com/bryangoncalvespro-hub/google-tag-manager-mcp-server/blob/36988defce424c30a48ee4e507ec6f637a17ee67/src/tools/publish-version.ts#L1-L31) · Schema: tools/list.

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
    "version_id": {
      "type": "string",
      "description": "Container version ID to publish"
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
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_quick_preview-125bde55"></a>

## gtm_quick_preview

Handler: POSTs workspace quick\_preview and returns its compilation and sync result.

```text
Compile the workspace into a throwaway version so you can check compiler errors and sync status without actually creating a permanent version. Useful as a smoke test before gtm_create_version.

Returns: { compiler_error, sync_status, container_version }
```

[Source](https://github.com/bryangoncalvespro-hub/google-tag-manager-mcp-server/blob/36988defce424c30a48ee4e507ec6f637a17ee67/src/tools/quick-preview.ts#L1-L32) · Schema: tools/list.

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
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-gtm_install_google_ads_conversion-01ace0ae"></a>

## gtm_install_google_ads_conversion

Handler: Creates two constant variables, a page-view or custom-event trigger and an awct tag, then optionally creates and publishes a version; operations are sequential without rollback.

```text
All-in-one helper that creates the variables, trigger, and awct tag required to track a Google Ads conversion — optionally creating a version and publishing it in the same call.

Pick the trigger_type:
- `page_view` → fires on every page (good for landing-page conversions / lead signup pages)
- `custom_event` → fires when a dataLayer event matches `event_name` (good for purchase, signup, contact_submit…)

If conversion_value / currency are provided, they are passed as constant parameters on the tag.

Returns the created resources (variables, trigger, tag) and, if publish=true, the published version.
```

[Source](https://github.com/bryangoncalvespro-hub/google-tag-manager-mcp-server/blob/36988defce424c30a48ee4e507ec6f637a17ee67/src/tools/install-google-ads-conversion.ts#L1-L185) · Schema: tools/list.

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
    },
    "conversion_id": {
      "type": "string",
      "description": "Full conversion ID, e.g. 'AW-123456789'"
    },
    "conversion_label": {
      "type": "string",
      "description": "Conversion label from Google Ads (the part after the slash)"
    },
    "event_name": {
      "type": "string",
      "description": "Short event name used to name resources (e.g. 'purchase', 'lead', 'signup')"
    },
    "trigger_type": {
      "type": "string",
      "enum": [
        "page_view",
        "custom_event"
      ],
      "default": "custom_event"
    },
    "conversion_value": {
      "type": "string",
      "description": "Static conversion value, or a dataLayer reference like '{{DLV - purchase_value}}'"
    },
    "currency_code": {
      "type": "string",
      "description": "e.g. 'EUR', 'USD'"
    },
    "transaction_id": {
      "type": "string",
      "description": "Optional transaction ID (or variable reference)"
    },
    "publish": {
      "type": "boolean",
      "default": false,
      "description": "If true, also create a container version and publish it after creating the resources"
    },
    "version_name": {
      "type": "string"
    },
    "version_notes": {
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "conversion_id",
    "conversion_label",
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
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>
