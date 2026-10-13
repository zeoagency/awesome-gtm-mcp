# ErikTMA/gtm-mcp

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/ErikTMA/gtm-mcp) · [Machine-readable inventory](../data/mcps/eriktma--gtm-mcp.json)

**12 extracted tools.** Creates tags, triggers, and variables with account restrictions and publishes workspace versions.

Snapshot: 2026-10-13 · [0dd4022cb70c](https://github.com/ErikTMA/gtm-mcp/tree/0dd4022cb70c354dbd9aa5d81eba969350f7104f) · Method: source.

Exposure: All 12 tools are always listed; no conditional or read-only registration groups. Authentication occurs lazily on first call. GTM_ACCOUNT_ID filters list_accounts and checks resource account IDs for every client operation. OAuth requests readonly, edit.containers, edit.containerversions, publish, delete.containers, manage.accounts and manage.users scopes.

## Limits

- Static AST extraction of literal Tool registrations; no authenticated GTM operation or runtime tools/list executed.
- Configuration object schemas are intentionally unrestricted upstream; no nested models, defaults, additionalProperties restrictions, or local references are declared. Handler fallbacks do not change the registered schemas.
- List methods return only the first API response page and do not follow nextPageToken.
- Simplified custom_event_name builds uppercase EQUALS/TEMPLATE filter values; compatibility with the live API was not verified. Generic parameter conversion supports lists of mappings, not arbitrary JSON lists or fully typed nested GTM parameters.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`gtm_list_accounts`](#tool-gtm_list_accounts-c5d9b27f) | GTM | Lists accessible Tag Manager v2 accounts, filtered to GTM\_ACCOUNT\_ID when configured. |
| [`gtm_list_containers`](#tool-gtm_list_containers-e45afd2b) | GTM | Lists containers under the requested account after checking the configured account restriction. |
| [`gtm_list_tags`](#tool-gtm_list_tags-b585bc12) | GTM | Lists tags in the supplied workspace ID or the first returned workspace when workspace\_id is absent. |
| [`gtm_get_tag`](#tool-gtm_get_tag-3d242291) | GTM | Returns the full tag resource from Tag Manager v2. |
| [`gtm_create_tag`](#tool-gtm_create_tag-c682840c) | GTM | Creates a tag, transforming tag\_config into template parameters or lists of maps and attaching firing trigger IDs. |
| [`gtm_update_tag`](#tool-gtm_update_tag-23807743) | GTM | Passes the supplied tag\_data directly to the Tag Manager v2 tags.update API. |
| [`gtm_list_triggers`](#tool-gtm_list_triggers-16b41a3c) | GTM | Lists trigger summaries in the supplied workspace. |
| [`gtm_create_trigger`](#tool-gtm_create_trigger-99da4322) | GTM | Creates a trigger from supported API fields or trigger-group IDs; custom\_event\_name invokes a helper producing uppercase EQUALS and TEMPLATE values, unlike the lowercase enum strings in the legacy branch. |
| [`gtm_list_variables`](#tool-gtm_list_variables-81705a80) | GTM | Lists variable summaries in the supplied workspace. |
| [`gtm_get_variable`](#tool-gtm_get_variable-e6ff3763) | GTM | Returns the full variable resource from Tag Manager v2. |
| [`gtm_create_variable`](#tool-gtm_create_variable-5b853337) | GTM | Creates variables using type-specific parameter mappings or generic template/list-of-map conversion. |
| [`gtm_publish_container`](#tool-gtm_publish_container-513cc8f7) | GTM | Creates a workspace version and publishes its returned containerVersion path; raises if that path is missing. |

<a id="tool-gtm_list_accounts-c5d9b27f"></a>

## gtm_list_accounts

Handler: Lists accessible Tag Manager v2 accounts, filtered to GTM\_ACCOUNT\_ID when configured.

```text
List all accessible GTM accounts
```

[Source](https://github.com/ErikTMA/gtm-mcp/blob/0dd4022cb70c354dbd9aa5d81eba969350f7104f/src/gtm_mcp/server.py#L32-L40) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {},
  "required": []
}
```

</details>

<a id="tool-gtm_list_containers-e45afd2b"></a>

## gtm_list_containers

Handler: Lists containers under the requested account after checking the configured account restriction.

```text
List all containers in a GTM account
```

[Source](https://github.com/ErikTMA/gtm-mcp/blob/0dd4022cb70c354dbd9aa5d81eba969350f7104f/src/gtm_mcp/server.py#L41-L54) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM Account ID"
    }
  },
  "required": [
    "account_id"
  ]
}
```

</details>

<a id="tool-gtm_list_tags-b585bc12"></a>

## gtm_list_tags

Handler: Lists tags in the supplied workspace ID or the first returned workspace when workspace\_id is absent.

```text
List all tags in a container workspace
```

[Source](https://github.com/ErikTMA/gtm-mcp/blob/0dd4022cb70c354dbd9aa5d81eba969350f7104f/src/gtm_mcp/server.py#L55-L72) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "container_path": {
      "type": "string",
      "description": "Full container path (e.g., accounts/123/containers/456)"
    },
    "workspace_id": {
      "type": "string",
      "description": "Workspace ID (optional, uses default if not provided)"
    }
  },
  "required": [
    "container_path"
  ]
}
```

</details>

<a id="tool-gtm_get_tag-3d242291"></a>

## gtm_get_tag

Handler: Returns the full tag resource from Tag Manager v2.

```text
Get detailed configuration of a specific tag
```

[Source](https://github.com/ErikTMA/gtm-mcp/blob/0dd4022cb70c354dbd9aa5d81eba969350f7104f/src/gtm_mcp/server.py#L73-L86) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "tag_path": {
      "type": "string",
      "description": "Full tag path (e.g., accounts/123/containers/456/workspaces/7/tags/8)"
    }
  },
  "required": [
    "tag_path"
  ]
}
```

</details>

<a id="tool-gtm_create_tag-c682840c"></a>

## gtm_create_tag

Handler: Creates a tag, transforming tag\_config into template parameters or lists of maps and attaching firing trigger IDs.

```text
Create a new tag in a GTM container
```

[Source](https://github.com/ErikTMA/gtm-mcp/blob/0dd4022cb70c354dbd9aa5d81eba969350f7104f/src/gtm_mcp/server.py#L87-L117) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "workspace_path": {
      "type": "string",
      "description": "Full workspace path"
    },
    "tag_name": {
      "type": "string",
      "description": "Name for the new tag"
    },
    "tag_type": {
      "type": "string",
      "description": "Type of tag (e.g., 'ua', 'ga4', 'html')"
    },
    "tag_config": {
      "type": "object",
      "description": "Tag configuration parameters"
    },
    "firing_trigger_ids": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "List of trigger IDs that should fire this tag"
    }
  },
  "required": [
    "workspace_path",
    "tag_name",
    "tag_type"
  ]
}
```

</details>

<a id="tool-gtm_update_tag-23807743"></a>

## gtm_update_tag

Handler: Passes the supplied tag\_data directly to the Tag Manager v2 tags.update API.

```text
Update an existing tag in a GTM container
```

[Source](https://github.com/ErikTMA/gtm-mcp/blob/0dd4022cb70c354dbd9aa5d81eba969350f7104f/src/gtm_mcp/server.py#L118-L135) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "tag_path": {
      "type": "string",
      "description": "Full tag path (e.g., accounts/123/containers/456/workspaces/7/tags/8)"
    },
    "tag_data": {
      "type": "object",
      "description": "Complete tag data object to update"
    }
  },
  "required": [
    "tag_path",
    "tag_data"
  ]
}
```

</details>

<a id="tool-gtm_list_triggers-16b41a3c"></a>

## gtm_list_triggers

Handler: Lists trigger summaries in the supplied workspace.

```text
List all triggers in a container workspace
```

[Source](https://github.com/ErikTMA/gtm-mcp/blob/0dd4022cb70c354dbd9aa5d81eba969350f7104f/src/gtm_mcp/server.py#L136-L149) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "workspace_path": {
      "type": "string",
      "description": "Full workspace path"
    }
  },
  "required": [
    "workspace_path"
  ]
}
```

</details>

<a id="tool-gtm_create_trigger-99da4322"></a>

## gtm_create_trigger

Handler: Creates a trigger from supported API fields or trigger-group IDs; custom\_event\_name invokes a helper producing uppercase EQUALS and TEMPLATE values, unlike the lowercase enum strings in the legacy branch.

```text
Create a new trigger in a GTM container. For Custom Event triggers, use custom_event_name parameter for simplified creation.
```

[Source](https://github.com/ErikTMA/gtm-mcp/blob/0dd4022cb70c354dbd9aa5d81eba969350f7104f/src/gtm_mcp/server.py#L150-L192) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "workspace_path": {
      "type": "string",
      "description": "Full workspace path"
    },
    "trigger_name": {
      "type": "string",
      "description": "Name for the new trigger"
    },
    "trigger_type": {
      "type": "string",
      "description": "Type of trigger",
      "enum": [
        "pageview",
        "domReady",
        "windowLoaded",
        "customEvent",
        "triggerGroup",
        "init",
        "consentInit",
        "serverPageview",
        "always",
        "firebaseAppException",
        "firebaseAppUpdate",
        "firebaseCampaign",
        "firebaseFirstOpen",
        "firebaseInAppPurchase",
        "firebaseNotificationDismiss",
        "firebaseNotificationForeground",
        "firebaseNotificationOpen",
        "firebaseNotificationReceive",
        "firebaseOsUpdate",
        "firebaseSessionStart",
        "firebaseUserEngagement",
        "formSubmission",
        "click",
        "linkClick",
        "jsError",
        "historyChange",
        "timer",
        "ampClick",
        "ampTimer",
        "ampScroll",
        "ampVisibility",
        "youTubeVideo",
        "scrollDepth",
        "elementVisibility"
      ]
    },
    "custom_event_name": {
      "type": "string",
      "description": "For Custom Event triggers: the event name to match (e.g., 'purchase', 'add_to_cart'). This automatically generates the customEventFilter."
    },
    "trigger_config": {
      "type": "object",
      "description": "Trigger configuration parameters (optional if using custom_event_name)"
    }
  },
  "required": [
    "workspace_path",
    "trigger_name",
    "trigger_type"
  ]
}
```

</details>

<a id="tool-gtm_list_variables-81705a80"></a>

## gtm_list_variables

Handler: Lists variable summaries in the supplied workspace.

```text
List all variables in a container workspace
```

[Source](https://github.com/ErikTMA/gtm-mcp/blob/0dd4022cb70c354dbd9aa5d81eba969350f7104f/src/gtm_mcp/server.py#L193-L206) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "workspace_path": {
      "type": "string",
      "description": "Full workspace path"
    }
  },
  "required": [
    "workspace_path"
  ]
}
```

</details>

<a id="tool-gtm_get_variable-e6ff3763"></a>

## gtm_get_variable

Handler: Returns the full variable resource from Tag Manager v2.

```text
Get detailed configuration of a specific variable
```

[Source](https://github.com/ErikTMA/gtm-mcp/blob/0dd4022cb70c354dbd9aa5d81eba969350f7104f/src/gtm_mcp/server.py#L207-L220) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "variable_path": {
      "type": "string",
      "description": "Full variable path (e.g., accounts/123/containers/456/workspaces/7/variables/8)"
    }
  },
  "required": [
    "variable_path"
  ]
}
```

</details>

<a id="tool-gtm_create_variable-5b853337"></a>

## gtm_create_variable

Handler: Creates variables using type-specific parameter mappings or generic template/list-of-map conversion.

```text
Create a new variable in a GTM container
```

[Source](https://github.com/ErikTMA/gtm-mcp/blob/0dd4022cb70c354dbd9aa5d81eba969350f7104f/src/gtm_mcp/server.py#L221-L246) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "workspace_path": {
      "type": "string",
      "description": "Full workspace path"
    },
    "variable_name": {
      "type": "string",
      "description": "Name for the new variable"
    },
    "variable_type": {
      "type": "string",
      "description": "Type of variable. Common types: 'c' (constant), 'v' (data layer variable), 'jsm' (javascript variable), 'u' (URL variable), 'k' (cookie)"
    },
    "variable_config": {
      "type": "object",
      "description": "Variable configuration. For constant: {value: 'string'}, for data layer: {data_layer_name: 'name'}, for cookie: {cookie_name: 'name'}, etc."
    }
  },
  "required": [
    "workspace_path",
    "variable_name",
    "variable_type"
  ]
}
```

</details>

<a id="tool-gtm_publish_container-513cc8f7"></a>

## gtm_publish_container

Handler: Creates a workspace version and publishes its returned containerVersion path; raises if that path is missing.

```text
Create and publish a new version of a GTM container
```

[Source](https://github.com/ErikTMA/gtm-mcp/blob/0dd4022cb70c354dbd9aa5d81eba969350f7104f/src/gtm_mcp/server.py#L247-L268) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "workspace_path": {
      "type": "string",
      "description": "Full workspace path"
    },
    "version_name": {
      "type": "string",
      "description": "Name for the new version"
    },
    "version_notes": {
      "type": "string",
      "description": "Notes describing changes in this version"
    }
  },
  "required": [
    "workspace_path",
    "version_name"
  ]
}
```

</details>
