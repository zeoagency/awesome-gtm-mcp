# bintangazhari/gtm-mcp-server

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/bintangazhari/gtm-mcp-server) · [Machine-readable inventory](../data/mcps/bintangazhari--gtm-mcp-server.json)

**19 extracted tools.** Creates and edits tags, triggers, and variables and publishes existing versions.

Snapshot: 2026-10-13 · [eb317c1112b4](https://github.com/bintangazhari/gtm-mcp-server/tree/eb317c1112b4a95da0013a0cfb51768794f57a43) · Method: source.

Exposure: All 19 tools are unconditionally registered; startup requires GCP_SERVICE_ACCOUNT_B64 and HTTP requests require AUTH_TOKEN. No conditional groups.

## Limits

- Static extraction of the exact ListToolsRequestSchema array; server was not started and no GTM operations were invoked.
- list_versions uses versions.list, absent from the official v2 discovery snapshot fetched 2026-10-13; version_headers.list is the actual version listing endpoint.
- publish_workspace promises live publication but only invokes workspaces.create_version.
- List handlers do not follow pagination tokens.
- Nested parameter/filter objects are unrestricted in the actual exposed schema; no omitted nested fields were inferred.
- Startup loads and deletes a local .env file; extraction evaluated only the literal tool array in an isolated VM.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`list_accounts`](#tool-list_accounts-1090ba6a) | GTM | Lists the first page of GTM accounts and returns the account array. |
| [`list_containers`](#tool-list_containers-a53dbc4d) | GTM | Lists the first page of containers under accountPath and returns the container array. |
| [`list_workspaces`](#tool-list_workspaces-af844119) | GTM | Lists the first page of workspaces under containerPath and returns the workspace array. |
| [`list_tags`](#tool-list_tags-86fc0f9c) | GTM | Lists the first page of tags under workspacePath and returns the tag array. |
| [`list_triggers`](#tool-list_triggers-4ca44d74) | GTM | Lists the first page of triggers under workspacePath and returns the trigger array. |
| [`list_variables`](#tool-list_variables-1adaa2a1) | GTM | Lists the first page of variables under workspacePath and returns the variable array. |
| [`list_versions`](#tool-list_versions-3eb8d6c0) | GTM | Calls tagmanager.accounts.containers.versions.list, which does not exist in the v2 API; the caught error is returned as an MCP tool error. |
| [`create_workspace`](#tool-create_workspace-a1af8425) | GTM | Creates a workspace under containerPath with the supplied name. |
| [`create_tag`](#tool-create_tag-e71dcc44) | GTM | Creates a tag with name, type and parameter (defaulting to an empty array); it supplies no firing trigger IDs. |
| [`update_tag`](#tool-update_tag-ff9e7962) | GTM | Updates a tag using path and fingerprint with name, type and parameter (defaulting to an empty array). |
| [`delete_tag`](#tool-delete_tag-1345d160) | GTM | Deletes the tag at tagPath. |
| [`create_trigger`](#tool-create_trigger-71660c93) | GTM | Creates a trigger with name, type, customEventFilter and filter, defaulting both filter arrays to empty. |
| [`update_trigger`](#tool-update_trigger-60ddeb77) | GTM | Updates a trigger using path and fingerprint with name, type and both filter arrays, defaulting missing arrays to empty. |
| [`delete_trigger`](#tool-delete_trigger-ec67de91) | GTM | Deletes the trigger at triggerPath. |
| [`create_variable`](#tool-create_variable-2f5e4ddb) | GTM | Creates a variable with name, type and parameter, defaulting parameters to an empty array. |
| [`update_variable`](#tool-update_variable-63c48ad7) | GTM | Updates a variable using path and fingerprint with name, type and parameter, defaulting parameters to an empty array. |
| [`delete_variable`](#tool-delete_variable-3ead6fdb) | GTM | Deletes the variable at variablePath. |
| [`publish_workspace`](#tool-publish_workspace-f1c4ff87) | GTM | Creates a container version from the workspace via create\_version and returns it, but never calls versions.publish, so changes are not published live. |
| [`publish_version`](#tool-publish_version-0628e4c5) | GTM | Publishes the historical container version at versionPath. |

<a id="tool-list_accounts-1090ba6a"></a>

## list_accounts

Handler: Lists the first page of GTM accounts and returns the account array.

```text
List GTM accounts
```

[Source](https://github.com/bintangazhari/gtm-mcp-server/blob/eb317c1112b4a95da0013a0cfb51768794f57a43/index.js#L72-L72) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object"
}
```

</details>

<a id="tool-list_containers-a53dbc4d"></a>

## list_containers

Handler: Lists the first page of containers under accountPath and returns the container array.

```text
List GTM containers
```

[Source](https://github.com/bintangazhari/gtm-mcp-server/blob/eb317c1112b4a95da0013a0cfb51768794f57a43/index.js#L73-L77) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountPath": {
      "type": "string"
    }
  },
  "required": [
    "accountPath"
  ]
}
```

</details>

<a id="tool-list_workspaces-af844119"></a>

## list_workspaces

Handler: Lists the first page of workspaces under containerPath and returns the workspace array.

```text
List workspaces in a container
```

[Source](https://github.com/bintangazhari/gtm-mcp-server/blob/eb317c1112b4a95da0013a0cfb51768794f57a43/index.js#L78-L82) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "containerPath": {
      "type": "string"
    }
  },
  "required": [
    "containerPath"
  ]
}
```

</details>

<a id="tool-list_tags-86fc0f9c"></a>

## list_tags

Handler: Lists the first page of tags under workspacePath and returns the tag array.

```text
List all tags in a workspace
```

[Source](https://github.com/bintangazhari/gtm-mcp-server/blob/eb317c1112b4a95da0013a0cfb51768794f57a43/index.js#L83-L87) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "workspacePath": {
      "type": "string"
    }
  },
  "required": [
    "workspacePath"
  ]
}
```

</details>

<a id="tool-list_triggers-4ca44d74"></a>

## list_triggers

Handler: Lists the first page of triggers under workspacePath and returns the trigger array.

```text
List all triggers in a workspace
```

[Source](https://github.com/bintangazhari/gtm-mcp-server/blob/eb317c1112b4a95da0013a0cfb51768794f57a43/index.js#L88-L92) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "workspacePath": {
      "type": "string"
    }
  },
  "required": [
    "workspacePath"
  ]
}
```

</details>

<a id="tool-list_variables-1adaa2a1"></a>

## list_variables

Handler: Lists the first page of variables under workspacePath and returns the variable array.

```text
List all variables in a workspace
```

[Source](https://github.com/bintangazhari/gtm-mcp-server/blob/eb317c1112b4a95da0013a0cfb51768794f57a43/index.js#L93-L97) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "workspacePath": {
      "type": "string"
    }
  },
  "required": [
    "workspacePath"
  ]
}
```

</details>

<a id="tool-list_versions-3eb8d6c0"></a>

## list_versions

Handler: Calls tagmanager.accounts.containers.versions.list, which does not exist in the v2 API; the caught error is returned as an MCP tool error.

```text
List historical container versions (useful for identifying rollback targets)
```

[Source](https://github.com/bintangazhari/gtm-mcp-server/blob/eb317c1112b4a95da0013a0cfb51768794f57a43/index.js#L98-L102) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "containerPath": {
      "type": "string"
    }
  },
  "required": [
    "containerPath"
  ]
}
```

</details>

<a id="tool-create_workspace-a1af8425"></a>

## create_workspace

Handler: Creates a workspace under containerPath with the supplied name.

```text
Create a new workspace in a container
```

[Source](https://github.com/bintangazhari/gtm-mcp-server/blob/eb317c1112b4a95da0013a0cfb51768794f57a43/index.js#L103-L114) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "containerPath": {
      "type": "string",
      "description": "Path of the container"
    },
    "name": {
      "type": "string",
      "description": "Name of the new workspace"
    }
  },
  "required": [
    "containerPath",
    "name"
  ]
}
```

</details>

<a id="tool-create_tag-e71dcc44"></a>

## create_tag

Handler: Creates a tag with name, type and parameter (defaulting to an empty array); it supplies no firing trigger IDs.

```text
Create a new tag in a workspace
```

[Source](https://github.com/bintangazhari/gtm-mcp-server/blob/eb317c1112b4a95da0013a0cfb51768794f57a43/index.js#L115-L128) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "workspacePath": {
      "type": "string",
      "description": "Path of the workspace"
    },
    "name": {
      "type": "string",
      "description": "Name of the new tag"
    },
    "type": {
      "type": "string",
      "description": "Tag type (e.g., html, ga4, etc.)"
    },
    "parameter": {
      "type": "array",
      "description": "Array of parameter objects {type, key, value}",
      "items": {
        "type": "object"
      }
    }
  },
  "required": [
    "workspacePath",
    "name",
    "type"
  ]
}
```

</details>

<a id="tool-update_tag-ff9e7962"></a>

## update_tag

Handler: Updates a tag using path and fingerprint with name, type and parameter (defaulting to an empty array).

```text
Update/Rename an existing tag
```

[Source](https://github.com/bintangazhari/gtm-mcp-server/blob/eb317c1112b4a95da0013a0cfb51768794f57a43/index.js#L129-L143) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "tagPath": {
      "type": "string",
      "description": "Full path of the tag"
    },
    "name": {
      "type": "string",
      "description": "Updated name of the tag"
    },
    "type": {
      "type": "string",
      "description": "Updated tag type"
    },
    "parameter": {
      "type": "array",
      "description": "Updated parameters",
      "items": {
        "type": "object"
      }
    },
    "fingerprint": {
      "type": "string",
      "description": "Current fingerprint of the tag (required)"
    }
  },
  "required": [
    "tagPath",
    "name",
    "type",
    "fingerprint"
  ]
}
```

</details>

<a id="tool-delete_tag-1345d160"></a>

## delete_tag

Handler: Deletes the tag at tagPath.

```text
Delete a tag from a workspace
```

[Source](https://github.com/bintangazhari/gtm-mcp-server/blob/eb317c1112b4a95da0013a0cfb51768794f57a43/index.js#L144-L154) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "tagPath": {
      "type": "string",
      "description": "Full path of the tag to delete"
    }
  },
  "required": [
    "tagPath"
  ]
}
```

</details>

<a id="tool-create_trigger-71660c93"></a>

## create_trigger

Handler: Creates a trigger with name, type, customEventFilter and filter, defaulting both filter arrays to empty.

```text
Create a new trigger in a workspace
```

[Source](https://github.com/bintangazhari/gtm-mcp-server/blob/eb317c1112b4a95da0013a0cfb51768794f57a43/index.js#L155-L169) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "workspacePath": {
      "type": "string",
      "description": "Path of the workspace"
    },
    "name": {
      "type": "string",
      "description": "Name of the new trigger"
    },
    "type": {
      "type": "string",
      "description": "Trigger type (e.g., pageview, customEvent, click)"
    },
    "customEventFilter": {
      "type": "array",
      "description": "Optional array of filters for custom events",
      "items": {
        "type": "object"
      }
    },
    "filter": {
      "type": "array",
      "description": "Optional array of firing conditions",
      "items": {
        "type": "object"
      }
    }
  },
  "required": [
    "workspacePath",
    "name",
    "type"
  ]
}
```

</details>

<a id="tool-update_trigger-60ddeb77"></a>

## update_trigger

Handler: Updates a trigger using path and fingerprint with name, type and both filter arrays, defaulting missing arrays to empty.

```text
Update/Rename an existing trigger
```

[Source](https://github.com/bintangazhari/gtm-mcp-server/blob/eb317c1112b4a95da0013a0cfb51768794f57a43/index.js#L170-L185) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "triggerPath": {
      "type": "string",
      "description": "Full path of the trigger"
    },
    "name": {
      "type": "string",
      "description": "Updated name of the trigger"
    },
    "type": {
      "type": "string",
      "description": "Updated trigger type"
    },
    "customEventFilter": {
      "type": "array",
      "items": {
        "type": "object"
      }
    },
    "filter": {
      "type": "array",
      "items": {
        "type": "object"
      }
    },
    "fingerprint": {
      "type": "string",
      "description": "Current fingerprint of the trigger (required)"
    }
  },
  "required": [
    "triggerPath",
    "name",
    "type",
    "fingerprint"
  ]
}
```

</details>

<a id="tool-delete_trigger-ec67de91"></a>

## delete_trigger

Handler: Deletes the trigger at triggerPath.

```text
Delete a trigger from a workspace
```

[Source](https://github.com/bintangazhari/gtm-mcp-server/blob/eb317c1112b4a95da0013a0cfb51768794f57a43/index.js#L186-L196) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "triggerPath": {
      "type": "string",
      "description": "Full path of the trigger to delete"
    }
  },
  "required": [
    "triggerPath"
  ]
}
```

</details>

<a id="tool-create_variable-2f5e4ddb"></a>

## create_variable

Handler: Creates a variable with name, type and parameter, defaulting parameters to an empty array.

```text
Create a new variable in a workspace
```

[Source](https://github.com/bintangazhari/gtm-mcp-server/blob/eb317c1112b4a95da0013a0cfb51768794f57a43/index.js#L197-L210) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "workspacePath": {
      "type": "string",
      "description": "Path of the workspace"
    },
    "name": {
      "type": "string",
      "description": "Name of the new variable"
    },
    "type": {
      "type": "string",
      "description": "Variable type"
    },
    "parameter": {
      "type": "array",
      "description": "Array of parameter objects",
      "items": {
        "type": "object"
      }
    }
  },
  "required": [
    "workspacePath",
    "name",
    "type"
  ]
}
```

</details>

<a id="tool-update_variable-63c48ad7"></a>

## update_variable

Handler: Updates a variable using path and fingerprint with name, type and parameter, defaulting parameters to an empty array.

```text
Update/Rename an existing variable
```

[Source](https://github.com/bintangazhari/gtm-mcp-server/blob/eb317c1112b4a95da0013a0cfb51768794f57a43/index.js#L211-L225) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "variablePath": {
      "type": "string",
      "description": "Full path of the variable"
    },
    "name": {
      "type": "string",
      "description": "Updated name of the variable"
    },
    "type": {
      "type": "string",
      "description": "Updated variable type"
    },
    "parameter": {
      "type": "array",
      "items": {
        "type": "object"
      }
    },
    "fingerprint": {
      "type": "string",
      "description": "Current fingerprint of the variable (required)"
    }
  },
  "required": [
    "variablePath",
    "name",
    "type",
    "fingerprint"
  ]
}
```

</details>

<a id="tool-delete_variable-3ead6fdb"></a>

## delete_variable

Handler: Deletes the variable at variablePath.

```text
Delete a variable from a workspace
```

[Source](https://github.com/bintangazhari/gtm-mcp-server/blob/eb317c1112b4a95da0013a0cfb51768794f57a43/index.js#L226-L236) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "variablePath": {
      "type": "string",
      "description": "Full path of the variable to delete"
    }
  },
  "required": [
    "variablePath"
  ]
}
```

</details>

<a id="tool-publish_workspace-f1c4ff87"></a>

## publish_workspace

Handler: Creates a container version from the workspace via create\_version and returns it, but never calls versions.publish, so changes are not published live.

```text
Create a version and publish the current workspace changes live
```

[Source](https://github.com/bintangazhari/gtm-mcp-server/blob/eb317c1112b4a95da0013a0cfb51768794f57a43/index.js#L237-L248) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "workspacePath": {
      "type": "string",
      "description": "Path of the workspace to publish"
    },
    "versionName": {
      "type": "string",
      "description": "Name for the new published version"
    }
  },
  "required": [
    "workspacePath",
    "versionName"
  ]
}
```

</details>

<a id="tool-publish_version-0628e4c5"></a>

## publish_version

Handler: Publishes the historical container version at versionPath.

```text
Publish a specific historical container version (used to perform a Rollback)
```

[Source](https://github.com/bintangazhari/gtm-mcp-server/blob/eb317c1112b4a95da0013a0cfb51768794f57a43/index.js#L249-L259) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "versionPath": {
      "type": "string",
      "description": "Full path of the target container version (e.g. accounts/X/containers/Y/versions/Z)"
    }
  },
  "required": [
    "versionPath"
  ]
}
```

</details>
