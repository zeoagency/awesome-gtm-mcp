# fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM) · [Machine-readable inventory](../data/mcps/fourdots--google-marketing-mcps-g.ads-ga4-gsc-gtm.json)

**27 extracted tools.** Builds trigger groups and typed variables, manages folders and built-ins, and publishes workspace versions.

Snapshot: 2026-10-13 · [a6d9406520db](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM/tree/a6d9406520dbad13224a63e06f8a19139a848ebc) · Method: source.

Exposure: All 27 tools listed unconditionally; GTM authentication occurs lazily on first call. GA4, Ads, and GSC use separate servers and are excluded.

## Limits

- Static literal extraction; no MCP runtime tools/list or authenticated GTM calls performed.
- List client methods return only one API page and do not follow nextPageToken.
- gtm_list_versions description says published versions, but handler lists all version headers.
- Delete-workspace handler and client set-latest-version method exist but are neither listed nor dispatched as public tools.
- Configuration objects are intentionally unrestricted in registered schemas; implementation supports a narrower set of transformations, including list parameter values requiring mapping elements.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`gtm_list_accounts`](#tool-gtm_list_accounts-c5d9b27f) | GTM | List GTM accounts. |
| [`gtm_list_containers`](#tool-gtm_list_containers-e45afd2b) | GTM | List containers in an account. |
| [`gtm_list_tags`](#tool-gtm_list_tags-b585bc12) | GTM | Lists summarized tags; when workspace\_id is absent, selects the first workspace returned by the container workspace list. |
| [`gtm_get_tag`](#tool-gtm_get_tag-3d242291) | GTM | Get detailed tag configuration. |
| [`gtm_create_tag`](#tool-gtm_create_tag-c682840c) | GTM | Creates a tag, converting configuration values into GTM parameters and attaching optional firing trigger IDs; list values must contain mapping objects. |
| [`gtm_update_tag`](#tool-gtm_update_tag-23807743) | GTM | Update an existing tag. |
| [`gtm_list_triggers`](#tool-gtm_list_triggers-16b41a3c) | GTM | List triggers in a workspace. |
| [`gtm_create_trigger`](#tool-gtm_create_trigger-99da4322) | GTM | Creates a trigger with direct API fields or simplified custom event filters, and converts trigger group references into GTM list parameters. |
| [`gtm_list_variables`](#tool-gtm_list_variables-81705a80) | GTM | List variables in a workspace. |
| [`gtm_get_variable`](#tool-gtm_get_variable-e6ff3763) | GTM | Get detailed variable configuration. |
| [`gtm_create_variable`](#tool-gtm_create_variable-5b853337) | GTM | Creates a variable using type-specific configuration for constant, JavaScript, URL, data layer, cookie, and enhanced conversions types, otherwise generic parameters. |
| [`gtm_publish_container`](#tool-gtm_publish_container-513cc8f7) | GTM | Creates a workspace version and immediately publishes the returned container version path. |
| [`gtm_delete_tag`](#tool-gtm_delete_tag-42a56cac) | GTM | Delete a tag from a GTM container workspace |
| [`gtm_get_trigger`](#tool-gtm_get_trigger-669e5c62) | GTM | Get detailed configuration of a specific trigger |
| [`gtm_update_trigger`](#tool-gtm_update_trigger-ce48de45) | GTM | Update an existing trigger |
| [`gtm_delete_trigger`](#tool-gtm_delete_trigger-dac3085f) | GTM | Delete a trigger from a GTM container workspace |
| [`gtm_update_variable`](#tool-gtm_update_variable-898f92d4) | GTM | Update an existing variable |
| [`gtm_delete_variable`](#tool-gtm_delete_variable-9bd36787) | GTM | Delete a variable from a GTM container workspace |
| [`gtm_list_workspaces`](#tool-gtm_list_workspaces-248ce86f) | GTM | List all workspaces in a GTM container |
| [`gtm_create_workspace`](#tool-gtm_create_workspace-6324597f) | GTM | Create a new workspace for making changes without affecting the live version |
| [`gtm_list_versions`](#tool-gtm_list_versions-f9371c4c) | GTM | Lists container version headers, which are not restricted to published versions despite the tool description. |
| [`gtm_get_version`](#tool-gtm_get_version-c83b7c02) | GTM | Get full details of a container version including all tags, triggers, and variables |
| [`gtm_get_container`](#tool-gtm_get_container-fdc6e39c) | GTM | Get detailed info about a GTM container including public ID and domain |
| [`gtm_list_built_in_variables`](#tool-gtm_list_built_in_variables-af7ccc4e) | GTM | List all enabled built-in variables (Page URL, Click ID, Event, etc.) |
| [`gtm_enable_built_in_variable`](#tool-gtm_enable_built_in_variable-d374155c) | GTM | Enable built-in variables. Types: pageUrl, pageHostname, pagePath, referrer, event, clickElement, clickClasses, clickId, clickTarget, clickUrl, clickText, formElement, formClasses, formId, formTarget, formUrl, formText, errorMessage, errorUrl, errorLine, debugMode, randomNumber, containerId, htmlId |
| [`gtm_list_folders`](#tool-gtm_list_folders-9da6c22f) | GTM | List all folders in a workspace for organizing tags, triggers, and variables |
| [`gtm_create_folder`](#tool-gtm_create_folder-a7f80e8c) | GTM | Create a folder for organizing tags, triggers, and variables |

<a id="tool-gtm_list_accounts-c5d9b27f"></a>

## gtm_list_accounts

Handler: List GTM accounts.

```text
List all accessible GTM accounts
```

[Source](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM/blob/a6d9406520dbad13224a63e06f8a19139a848ebc/gtm/gtm_mcp/server.py#L32-L40) · [Handler](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM/blob/a6d9406520dbad13224a63e06f8a19139a848ebc/gtm/gtm_mcp/tools.py#L50-L64) · Schema: literal-source.

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

Handler: List containers in an account.

```text
List all containers in a GTM account
```

[Source](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM/blob/a6d9406520dbad13224a63e06f8a19139a848ebc/gtm/gtm_mcp/server.py#L41-L54) · [Handler](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM/blob/a6d9406520dbad13224a63e06f8a19139a848ebc/gtm/gtm_mcp/tools.py#L66-L82) · Schema: literal-source.

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

Handler: Lists summarized tags; when workspace\_id is absent, selects the first workspace returned by the container workspace list.

```text
List all tags in a container workspace
```

[Source](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM/blob/a6d9406520dbad13224a63e06f8a19139a848ebc/gtm/gtm_mcp/server.py#L55-L72) · [Handler](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM/blob/a6d9406520dbad13224a63e06f8a19139a848ebc/gtm/gtm_mcp/tools.py#L84-L112) · Schema: literal-source.

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

Handler: Get detailed tag configuration.

```text
Get detailed configuration of a specific tag
```

[Source](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM/blob/a6d9406520dbad13224a63e06f8a19139a848ebc/gtm/gtm_mcp/server.py#L73-L86) · [Handler](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM/blob/a6d9406520dbad13224a63e06f8a19139a848ebc/gtm/gtm_mcp/tools.py#L114-L118) · Schema: literal-source.

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

Handler: Creates a tag, converting configuration values into GTM parameters and attaching optional firing trigger IDs; list values must contain mapping objects.

```text
Create a new tag in a GTM container
```

[Source](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM/blob/a6d9406520dbad13224a63e06f8a19139a848ebc/gtm/gtm_mcp/server.py#L87-L117) · [Handler](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM/blob/a6d9406520dbad13224a63e06f8a19139a848ebc/gtm/gtm_mcp/tools.py#L120-L142) · Schema: literal-source.

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

Handler: Update an existing tag.

```text
Update an existing tag in a GTM container
```

[Source](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM/blob/a6d9406520dbad13224a63e06f8a19139a848ebc/gtm/gtm_mcp/server.py#L118-L135) · [Handler](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM/blob/a6d9406520dbad13224a63e06f8a19139a848ebc/gtm/gtm_mcp/tools.py#L144-L159) · Schema: literal-source.

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

Handler: List triggers in a workspace.

```text
List all triggers in a container workspace
```

[Source](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM/blob/a6d9406520dbad13224a63e06f8a19139a848ebc/gtm/gtm_mcp/server.py#L136-L149) · [Handler](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM/blob/a6d9406520dbad13224a63e06f8a19139a848ebc/gtm/gtm_mcp/tools.py#L161-L177) · Schema: literal-source.

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

Handler: Creates a trigger with direct API fields or simplified custom event filters, and converts trigger group references into GTM list parameters.

```text
Create a new trigger in a GTM container
```

[Source](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM/blob/a6d9406520dbad13224a63e06f8a19139a848ebc/gtm/gtm_mcp/server.py#L150-L188) · [Handler](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM/blob/a6d9406520dbad13224a63e06f8a19139a848ebc/gtm/gtm_mcp/tools.py#L179-L309) · Schema: literal-source.

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
    "trigger_config": {
      "type": "object",
      "description": "Trigger configuration parameters"
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

Handler: List variables in a workspace.

```text
List all variables in a container workspace
```

[Source](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM/blob/a6d9406520dbad13224a63e06f8a19139a848ebc/gtm/gtm_mcp/server.py#L189-L202) · [Handler](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM/blob/a6d9406520dbad13224a63e06f8a19139a848ebc/gtm/gtm_mcp/tools.py#L339-L355) · Schema: literal-source.

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

Handler: Get detailed variable configuration.

```text
Get detailed configuration of a specific variable
```

[Source](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM/blob/a6d9406520dbad13224a63e06f8a19139a848ebc/gtm/gtm_mcp/server.py#L203-L216) · [Handler](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM/blob/a6d9406520dbad13224a63e06f8a19139a848ebc/gtm/gtm_mcp/tools.py#L357-L363) · Schema: literal-source.

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

Handler: Creates a variable using type-specific configuration for constant, JavaScript, URL, data layer, cookie, and enhanced conversions types, otherwise generic parameters.

```text
Create a new variable in a GTM container
```

[Source](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM/blob/a6d9406520dbad13224a63e06f8a19139a848ebc/gtm/gtm_mcp/server.py#L217-L242) · [Handler](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM/blob/a6d9406520dbad13224a63e06f8a19139a848ebc/gtm/gtm_mcp/tools.py#L365-L459) · Schema: literal-source.

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

Handler: Creates a workspace version and immediately publishes the returned container version path.

```text
Create and publish a new version of a GTM container
```

[Source](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM/blob/a6d9406520dbad13224a63e06f8a19139a848ebc/gtm/gtm_mcp/server.py#L243-L264) · [Handler](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM/blob/a6d9406520dbad13224a63e06f8a19139a848ebc/gtm/gtm_mcp/tools.py#L311-L337) · Schema: literal-source.

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

<a id="tool-gtm_delete_tag-42a56cac"></a>

## gtm_delete_tag

Handler: Delete a tag from a GTM container workspace

```text
Delete a tag from a GTM container workspace
```

[Source](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM/blob/a6d9406520dbad13224a63e06f8a19139a848ebc/gtm/gtm_mcp/server.py#L265-L265) · [Handler](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM/blob/a6d9406520dbad13224a63e06f8a19139a848ebc/gtm/gtm_mcp/tools.py#L489-L491) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "tag_path": {
      "type": "string",
      "description": "Full tag path"
    }
  },
  "required": [
    "tag_path"
  ]
}
```

</details>

<a id="tool-gtm_get_trigger-669e5c62"></a>

## gtm_get_trigger

Handler: Get detailed configuration of a specific trigger

```text
Get detailed configuration of a specific trigger
```

[Source](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM/blob/a6d9406520dbad13224a63e06f8a19139a848ebc/gtm/gtm_mcp/server.py#L266-L266) · [Handler](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM/blob/a6d9406520dbad13224a63e06f8a19139a848ebc/gtm/gtm_mcp/tools.py#L493-L495) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "trigger_path": {
      "type": "string",
      "description": "Full trigger path"
    }
  },
  "required": [
    "trigger_path"
  ]
}
```

</details>

<a id="tool-gtm_update_trigger-ce48de45"></a>

## gtm_update_trigger

Handler: Update an existing trigger

```text
Update an existing trigger
```

[Source](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM/blob/a6d9406520dbad13224a63e06f8a19139a848ebc/gtm/gtm_mcp/server.py#L267-L267) · [Handler](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM/blob/a6d9406520dbad13224a63e06f8a19139a848ebc/gtm/gtm_mcp/tools.py#L497-L499) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "trigger_path": {
      "type": "string",
      "description": "Full trigger path"
    },
    "trigger_data": {
      "type": "object",
      "description": "Complete trigger data object"
    }
  },
  "required": [
    "trigger_path",
    "trigger_data"
  ]
}
```

</details>

<a id="tool-gtm_delete_trigger-dac3085f"></a>

## gtm_delete_trigger

Handler: Delete a trigger from a GTM container workspace

```text
Delete a trigger from a GTM container workspace
```

[Source](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM/blob/a6d9406520dbad13224a63e06f8a19139a848ebc/gtm/gtm_mcp/server.py#L268-L268) · [Handler](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM/blob/a6d9406520dbad13224a63e06f8a19139a848ebc/gtm/gtm_mcp/tools.py#L501-L503) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "trigger_path": {
      "type": "string",
      "description": "Full trigger path"
    }
  },
  "required": [
    "trigger_path"
  ]
}
```

</details>

<a id="tool-gtm_update_variable-898f92d4"></a>

## gtm_update_variable

Handler: Update an existing variable

```text
Update an existing variable
```

[Source](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM/blob/a6d9406520dbad13224a63e06f8a19139a848ebc/gtm/gtm_mcp/server.py#L269-L269) · [Handler](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM/blob/a6d9406520dbad13224a63e06f8a19139a848ebc/gtm/gtm_mcp/tools.py#L505-L507) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "variable_path": {
      "type": "string",
      "description": "Full variable path"
    },
    "variable_data": {
      "type": "object",
      "description": "Complete variable data object"
    }
  },
  "required": [
    "variable_path",
    "variable_data"
  ]
}
```

</details>

<a id="tool-gtm_delete_variable-9bd36787"></a>

## gtm_delete_variable

Handler: Delete a variable from a GTM container workspace

```text
Delete a variable from a GTM container workspace
```

[Source](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM/blob/a6d9406520dbad13224a63e06f8a19139a848ebc/gtm/gtm_mcp/server.py#L270-L270) · [Handler](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM/blob/a6d9406520dbad13224a63e06f8a19139a848ebc/gtm/gtm_mcp/tools.py#L509-L511) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "variable_path": {
      "type": "string",
      "description": "Full variable path"
    }
  },
  "required": [
    "variable_path"
  ]
}
```

</details>

<a id="tool-gtm_list_workspaces-248ce86f"></a>

## gtm_list_workspaces

Handler: List all workspaces in a GTM container

```text
List all workspaces in a GTM container
```

[Source](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM/blob/a6d9406520dbad13224a63e06f8a19139a848ebc/gtm/gtm_mcp/server.py#L271-L271) · [Handler](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM/blob/a6d9406520dbad13224a63e06f8a19139a848ebc/gtm/gtm_mcp/tools.py#L513-L515) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "container_path": {
      "type": "string",
      "description": "Full container path (e.g., accounts/123/containers/456)"
    }
  },
  "required": [
    "container_path"
  ]
}
```

</details>

<a id="tool-gtm_create_workspace-6324597f"></a>

## gtm_create_workspace

Handler: Create a new workspace for making changes without affecting the live version

```text
Create a new workspace for making changes without affecting the live version
```

[Source](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM/blob/a6d9406520dbad13224a63e06f8a19139a848ebc/gtm/gtm_mcp/server.py#L272-L272) · [Handler](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM/blob/a6d9406520dbad13224a63e06f8a19139a848ebc/gtm/gtm_mcp/tools.py#L517-L519) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "container_path": {
      "type": "string",
      "description": "Full container path"
    },
    "name": {
      "type": "string",
      "description": "Workspace name"
    },
    "description": {
      "type": "string",
      "description": "Optional description"
    }
  },
  "required": [
    "container_path",
    "name"
  ]
}
```

</details>

<a id="tool-gtm_list_versions-f9371c4c"></a>

## gtm_list_versions

Handler: Lists container version headers, which are not restricted to published versions despite the tool description.

```text
List all published versions of a GTM container
```

[Source](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM/blob/a6d9406520dbad13224a63e06f8a19139a848ebc/gtm/gtm_mcp/server.py#L273-L273) · [Handler](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM/blob/a6d9406520dbad13224a63e06f8a19139a848ebc/gtm/gtm_mcp/tools.py#L525-L527) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "container_path": {
      "type": "string",
      "description": "Full container path"
    }
  },
  "required": [
    "container_path"
  ]
}
```

</details>

<a id="tool-gtm_get_version-c83b7c02"></a>

## gtm_get_version

Handler: Get full details of a container version including all tags, triggers, and variables

```text
Get full details of a container version including all tags, triggers, and variables
```

[Source](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM/blob/a6d9406520dbad13224a63e06f8a19139a848ebc/gtm/gtm_mcp/server.py#L274-L274) · [Handler](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM/blob/a6d9406520dbad13224a63e06f8a19139a848ebc/gtm/gtm_mcp/tools.py#L529-L531) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "version_path": {
      "type": "string",
      "description": "Full version path"
    }
  },
  "required": [
    "version_path"
  ]
}
```

</details>

<a id="tool-gtm_get_container-fdc6e39c"></a>

## gtm_get_container

Handler: Get detailed info about a GTM container including public ID and domain

```text
Get detailed info about a GTM container including public ID and domain
```

[Source](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM/blob/a6d9406520dbad13224a63e06f8a19139a848ebc/gtm/gtm_mcp/server.py#L275-L275) · [Handler](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM/blob/a6d9406520dbad13224a63e06f8a19139a848ebc/gtm/gtm_mcp/tools.py#L533-L535) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "container_path": {
      "type": "string",
      "description": "Full container path"
    }
  },
  "required": [
    "container_path"
  ]
}
```

</details>

<a id="tool-gtm_list_built_in_variables-af7ccc4e"></a>

## gtm_list_built_in_variables

Handler: List all enabled built-in variables (Page URL, Click ID, Event, etc.)

```text
List all enabled built-in variables (Page URL, Click ID, Event, etc.)
```

[Source](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM/blob/a6d9406520dbad13224a63e06f8a19139a848ebc/gtm/gtm_mcp/server.py#L276-L276) · [Handler](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM/blob/a6d9406520dbad13224a63e06f8a19139a848ebc/gtm/gtm_mcp/tools.py#L537-L539) · Schema: literal-source.

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

<a id="tool-gtm_enable_built_in_variable-d374155c"></a>

## gtm_enable_built_in_variable

Handler: Enable built-in variables. Types: pageUrl, pageHostname, pagePath, referrer, event, clickElement, clickClasses, clickId, clickTarget, clickUrl, clickText, formElement, formClasses, formId, formTarget, formUrl, formText, errorMessage, errorUrl, errorLine, debugMode, randomNumber, containerId, htmlId

```text
Enable built-in variables. Types: pageUrl, pageHostname, pagePath, referrer, event, clickElement, clickClasses, clickId, clickTarget, clickUrl, clickText, formElement, formClasses, formId, formTarget, formUrl, formText, errorMessage, errorUrl, errorLine, debugMode, randomNumber, containerId, htmlId
```

[Source](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM/blob/a6d9406520dbad13224a63e06f8a19139a848ebc/gtm/gtm_mcp/server.py#L277-L277) · [Handler](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM/blob/a6d9406520dbad13224a63e06f8a19139a848ebc/gtm/gtm_mcp/tools.py#L541-L543) · Schema: literal-source.

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
    "variable_types": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Built-in variable types to enable"
    }
  },
  "required": [
    "workspace_path",
    "variable_types"
  ]
}
```

</details>

<a id="tool-gtm_list_folders-9da6c22f"></a>

## gtm_list_folders

Handler: List all folders in a workspace for organizing tags, triggers, and variables

```text
List all folders in a workspace for organizing tags, triggers, and variables
```

[Source](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM/blob/a6d9406520dbad13224a63e06f8a19139a848ebc/gtm/gtm_mcp/server.py#L278-L278) · [Handler](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM/blob/a6d9406520dbad13224a63e06f8a19139a848ebc/gtm/gtm_mcp/tools.py#L545-L547) · Schema: literal-source.

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

<a id="tool-gtm_create_folder-a7f80e8c"></a>

## gtm_create_folder

Handler: Create a folder for organizing tags, triggers, and variables

```text
Create a folder for organizing tags, triggers, and variables
```

[Source](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM/blob/a6d9406520dbad13224a63e06f8a19139a848ebc/gtm/gtm_mcp/server.py#L279-L279) · [Handler](https://github.com/fourdots/Google-Marketing-MCPs-G.Ads-GA4-GSC-GTM/blob/a6d9406520dbad13224a63e06f8a19139a848ebc/gtm/gtm_mcp/tools.py#L549-L551) · Schema: literal-source.

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
    "name": {
      "type": "string",
      "description": "Folder name"
    }
  },
  "required": [
    "workspace_path",
    "name"
  ]
}
```

</details>
