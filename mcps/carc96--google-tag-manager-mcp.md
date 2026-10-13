# CarC96/google-tag-manager-mcp

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/CarC96/google-tag-manager-mcp) · [Machine-readable inventory](../data/mcps/carc96--google-tag-manager-mcp.json)

**29 extracted tools.** Reads installation snippets and permissions, edits workspace entities, and retrieves complete versions.

Snapshot: 2026-10-13 · [aeef2e03be30](https://github.com/CarC96/google-tag-manager-mcp/tree/aeef2e03be3072a9e0e90f16e8ea86c7640928b1) · Method: tools/list.

Exposure: All eight imported tool modules are registered unconditionally; no read-only or feature flags. Credentials are obtained only when handlers run.

## Limits

- Offline registration only; no GTM handler was invoked or authenticated.
- Runtime schemas reflect installed mcp 1.30.0; upstream allows mcp>=1.2.0 without a lockfile.
- List handlers discard nextPageToken; collect_all_pages is unregistered, unused and also stops after the first page.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`list_accounts`](#tool-list_accounts-1090ba6a) | GTM | Lists all Google Tag Manager accounts accessible by the user. Handler calls the GTM v2 discovery client using Application Default Credentials. Returns only the first response page. |
| [`get_account`](#tool-get_account-896a62e4) | GTM | Gets a GTM account by ID. Handler calls the GTM v2 discovery client using Application Default Credentials. |
| [`list_user_permissions`](#tool-list_user_permissions-9cabc1e3) | GTM | Lists all user permissions for a GTM account. Handler calls the GTM v2 discovery client using Application Default Credentials. Returns only the first response page. |
| [`list_containers`](#tool-list_containers-a53dbc4d) | GTM | Lists all containers in a GTM account. Handler calls the GTM v2 discovery client using Application Default Credentials. Returns only the first response page. |
| [`get_container`](#tool-get_container-9a0808eb) | GTM | Gets a specific GTM container. Handler calls the GTM v2 discovery client using Application Default Credentials. |
| [`get_container_snippet`](#tool-get_container_snippet-abfe46b2) | GTM | Gets the tagging snippet for a GTM container (the code to install on the website). Handler calls the GTM v2 discovery client using Application Default Credentials. |
| [`list_workspaces`](#tool-list_workspaces-af844119) | GTM | Lists all workspaces in a GTM container. Handler calls the GTM v2 discovery client using Application Default Credentials. Returns only the first response page. |
| [`get_workspace`](#tool-get_workspace-80ffee6a) | GTM | Gets a specific GTM workspace. Handler calls the GTM v2 discovery client using Application Default Credentials. |
| [`get_workspace_status`](#tool-get_workspace_status-23f21bb9) | GTM | Gets the status of a workspace (conflicting and modified entities). Handler calls the GTM v2 discovery client using Application Default Credentials. |
| [`create_workspace`](#tool-create_workspace-a1af8425) | GTM | Creates a new workspace in a container. Handler calls the GTM v2 discovery client using Application Default Credentials. |
| [`list_tags`](#tool-list_tags-86fc0f9c) | GTM | Lists all tags in a GTM workspace. Handler calls the GTM v2 discovery client using Application Default Credentials. Returns only the first response page. |
| [`get_tag`](#tool-get_tag-749bab4b) | GTM | Gets a specific tag in a GTM workspace. Handler calls the GTM v2 discovery client using Application Default Credentials. |
| [`create_tag`](#tool-create_tag-e71dcc44) | GTM | Creates a new tag in a GTM workspace. Handler calls the GTM v2 discovery client using Application Default Credentials. |
| [`update_tag`](#tool-update_tag-ff9e7962) | GTM | Updates an existing tag in a GTM workspace. Handler calls the GTM v2 discovery client using Application Default Credentials. |
| [`delete_tag`](#tool-delete_tag-1345d160) | GTM | Deletes a tag from a GTM workspace. Handler calls the GTM v2 discovery client using Application Default Credentials. |
| [`list_triggers`](#tool-list_triggers-4ca44d74) | GTM | Lists all triggers in a GTM workspace. Handler calls the GTM v2 discovery client using Application Default Credentials. Returns only the first response page. |
| [`get_trigger`](#tool-get_trigger-e2f13ee6) | GTM | Gets a specific trigger in a GTM workspace. Handler calls the GTM v2 discovery client using Application Default Credentials. |
| [`create_trigger`](#tool-create_trigger-71660c93) | GTM | Creates a new trigger in a GTM workspace. Handler calls the GTM v2 discovery client using Application Default Credentials. |
| [`update_trigger`](#tool-update_trigger-60ddeb77) | GTM | Updates an existing trigger in a GTM workspace. Handler calls the GTM v2 discovery client using Application Default Credentials. |
| [`delete_trigger`](#tool-delete_trigger-ec67de91) | GTM | Deletes a trigger from a GTM workspace. Handler calls the GTM v2 discovery client using Application Default Credentials. |
| [`list_variables`](#tool-list_variables-1adaa2a1) | GTM | Lists all variables in a GTM workspace. Handler calls the GTM v2 discovery client using Application Default Credentials. Returns only the first response page. |
| [`get_variable`](#tool-get_variable-ba0cd778) | GTM | Gets a specific variable in a GTM workspace. Handler calls the GTM v2 discovery client using Application Default Credentials. |
| [`create_variable`](#tool-create_variable-2f5e4ddb) | GTM | Creates a new variable in a GTM workspace. Handler calls the GTM v2 discovery client using Application Default Credentials. |
| [`update_variable`](#tool-update_variable-63c48ad7) | GTM | Updates an existing variable in a GTM workspace. Handler calls the GTM v2 discovery client using Application Default Credentials. |
| [`delete_variable`](#tool-delete_variable-3ead6fdb) | GTM | Deletes a variable from a GTM workspace. Handler calls the GTM v2 discovery client using Application Default Credentials. |
| [`list_built_in_variables`](#tool-list_built_in_variables-598c2ffb) | GTM | Lists all enabled built-in variables in a GTM workspace. Handler calls the GTM v2 discovery client using Application Default Credentials. Returns only the first response page. |
| [`list_version_headers`](#tool-list_version_headers-bec4b502) | GTM | Lists all container version headers (summary info for each version). Handler calls the GTM v2 discovery client using Application Default Credentials. Returns only the first response page. |
| [`get_live_version`](#tool-get_live_version-ffef26dc) | GTM | Gets the live (published) container version, including all its tags, Handler calls the GTM v2 discovery client using Application Default Credentials. |
| [`get_version`](#tool-get_version-e67e6685) | GTM | Gets a specific container version with all its entities. Handler calls the GTM v2 discovery client using Application Default Credentials. |

<a id="tool-list_accounts-1090ba6a"></a>

## list_accounts

Handler: Lists all Google Tag Manager accounts accessible by the user. Handler calls the GTM v2 discovery client using Application Default Credentials. Returns only the first response page.

```text
Lists all Google Tag Manager accounts accessible by the user.
```

[Source](https://github.com/CarC96/google-tag-manager-mcp/blob/aeef2e03be3072a9e0e90f16e8ea86c7640928b1/src/gtm_mcp/tools/accounts.py#L9-L14) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "list_accountsArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_account-896a62e4"></a>

## get_account

Handler: Gets a GTM account by ID. Handler calls the GTM v2 discovery client using Application Default Credentials.

```text
Gets a GTM account by ID.

Args:
    account_id: The account ID (e.g. '123456' or 'accounts/123456').

```

[Source](https://github.com/CarC96/google-tag-manager-mcp/blob/aeef2e03be3072a9e0e90f16e8ea86c7640928b1/src/gtm_mcp/tools/accounts.py#L17-L26) · Schema: tools/list.

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
  "title": "get_accountArguments",
  "type": "object"
}
```

</details>

<a id="tool-list_user_permissions-9cabc1e3"></a>

## list_user_permissions

Handler: Lists all user permissions for a GTM account. Handler calls the GTM v2 discovery client using Application Default Credentials. Returns only the first response page.

```text
Lists all user permissions for a GTM account.

Args:
    account_id: The account ID.

```

[Source](https://github.com/CarC96/google-tag-manager-mcp/blob/aeef2e03be3072a9e0e90f16e8ea86c7640928b1/src/gtm_mcp/tools/accounts.py#L29-L41) · Schema: tools/list.

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
  "title": "list_user_permissionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-list_containers-a53dbc4d"></a>

## list_containers

Handler: Lists all containers in a GTM account. Handler calls the GTM v2 discovery client using Application Default Credentials. Returns only the first response page.

```text
Lists all containers in a GTM account.

Args:
    account_id: The account ID.

```

[Source](https://github.com/CarC96/google-tag-manager-mcp/blob/aeef2e03be3072a9e0e90f16e8ea86c7640928b1/src/gtm_mcp/tools/containers.py#L13-L23) · Schema: tools/list.

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
  "title": "list_containersArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_container-9a0808eb"></a>

## get_container

Handler: Gets a specific GTM container. Handler calls the GTM v2 discovery client using Application Default Credentials.

```text
Gets a specific GTM container.

Args:
    account_id: The account ID.
    container_id: The container ID.

```

[Source](https://github.com/CarC96/google-tag-manager-mcp/blob/aeef2e03be3072a9e0e90f16e8ea86c7640928b1/src/gtm_mcp/tools/containers.py#L26-L36) · Schema: tools/list.

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
  "title": "get_containerArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_container_snippet-abfe46b2"></a>

## get_container_snippet

Handler: Gets the tagging snippet for a GTM container (the code to install on the website). Handler calls the GTM v2 discovery client using Application Default Credentials.

```text
Gets the tagging snippet for a GTM container (the code to install on the website).

Args:
    account_id: The account ID.
    container_id: The container ID.

```

[Source](https://github.com/CarC96/google-tag-manager-mcp/blob/aeef2e03be3072a9e0e90f16e8ea86c7640928b1/src/gtm_mcp/tools/containers.py#L39-L51) · Schema: tools/list.

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
  "title": "get_container_snippetArguments",
  "type": "object"
}
```

</details>

<a id="tool-list_workspaces-af844119"></a>

## list_workspaces

Handler: Lists all workspaces in a GTM container. Handler calls the GTM v2 discovery client using Application Default Credentials. Returns only the first response page.

```text
Lists all workspaces in a GTM container.

Args:
    account_id: The account ID.
    container_id: The container ID.

```

[Source](https://github.com/CarC96/google-tag-manager-mcp/blob/aeef2e03be3072a9e0e90f16e8ea86c7640928b1/src/gtm_mcp/tools/workspaces.py#L13-L32) · Schema: tools/list.

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
  "title": "list_workspacesArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_workspace-80ffee6a"></a>

## get_workspace

Handler: Gets a specific GTM workspace. Handler calls the GTM v2 discovery client using Application Default Credentials.

```text
Gets a specific GTM workspace.

Args:
    account_id: The account ID.
    container_id: The container ID.
    workspace_id: The workspace ID.

```

[Source](https://github.com/CarC96/google-tag-manager-mcp/blob/aeef2e03be3072a9e0e90f16e8ea86c7640928b1/src/gtm_mcp/tools/workspaces.py#L35-L54) · Schema: tools/list.

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
  "title": "get_workspaceArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_workspace_status-23f21bb9"></a>

## get_workspace_status

Handler: Gets the status of a workspace (conflicting and modified entities). Handler calls the GTM v2 discovery client using Application Default Credentials.

```text
Gets the status of a workspace (conflicting and modified entities).

Args:
    account_id: The account ID.
    container_id: The container ID.
    workspace_id: The workspace ID.

```

[Source](https://github.com/CarC96/google-tag-manager-mcp/blob/aeef2e03be3072a9e0e90f16e8ea86c7640928b1/src/gtm_mcp/tools/workspaces.py#L57-L76) · Schema: tools/list.

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
  "title": "get_workspace_statusArguments",
  "type": "object"
}
```

</details>

<a id="tool-create_workspace-a1af8425"></a>

## create_workspace

Handler: Creates a new workspace in a container. Handler calls the GTM v2 discovery client using Application Default Credentials.

```text
Creates a new workspace in a container.

Args:
    account_id: The account ID.
    container_id: The container ID.
    name: The workspace name.
    description: Optional workspace description.

```

[Source](https://github.com/CarC96/google-tag-manager-mcp/blob/aeef2e03be3072a9e0e90f16e8ea86c7640928b1/src/gtm_mcp/tools/workspaces.py#L79-L100) · Schema: tools/list.

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
    "name": {
      "title": "Name",
      "type": "string"
    },
    "description": {
      "default": "",
      "title": "Description",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "name"
  ],
  "title": "create_workspaceArguments",
  "type": "object"
}
```

</details>

<a id="tool-list_tags-86fc0f9c"></a>

## list_tags

Handler: Lists all tags in a GTM workspace. Handler calls the GTM v2 discovery client using Application Default Credentials. Returns only the first response page.

```text
Lists all tags in a GTM workspace.

Args:
    account_id: The account ID.
    container_id: The container ID.
    workspace_id: The workspace ID.

```

[Source](https://github.com/CarC96/google-tag-manager-mcp/blob/aeef2e03be3072a9e0e90f16e8ea86c7640928b1/src/gtm_mcp/tools/tags.py#L9-L30) · Schema: tools/list.

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
  "title": "list_tagsArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_tag-749bab4b"></a>

## get_tag

Handler: Gets a specific tag in a GTM workspace. Handler calls the GTM v2 discovery client using Application Default Credentials.

```text
Gets a specific tag in a GTM workspace.

Args:
    account_id: The account ID.
    container_id: The container ID.
    workspace_id: The workspace ID.
    tag_id: The tag ID.

```

[Source](https://github.com/CarC96/google-tag-manager-mcp/blob/aeef2e03be3072a9e0e90f16e8ea86c7640928b1/src/gtm_mcp/tools/tags.py#L33-L60) · Schema: tools/list.

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
  "title": "get_tagArguments",
  "type": "object"
}
```

</details>

<a id="tool-create_tag-e71dcc44"></a>

## create_tag

Handler: Creates a new tag in a GTM workspace. Handler calls the GTM v2 discovery client using Application Default Credentials.

```text
Creates a new tag in a GTM workspace.

Args:
    account_id: The account ID.
    container_id: The container ID.
    workspace_id: The workspace ID.
    tag_body: The tag configuration object. Must include at minimum:
        - name (str): The tag name.
        - type (str): The tag type (e.g. 'html', 'gaawc', 'gclidw', etc.).
        Can also include:
        - firingTriggerId (list): Trigger IDs that fire this tag.
        - blockingTriggerId (list): Trigger IDs that block this tag.
        - parameter (list): Tag parameters.
        - consentSettings (dict): Consent configuration.

```

[Source](https://github.com/CarC96/google-tag-manager-mcp/blob/aeef2e03be3072a9e0e90f16e8ea86c7640928b1/src/gtm_mcp/tools/tags.py#L63-L94) · Schema: tools/list.

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
    "tag_body": {
      "additionalProperties": true,
      "title": "Tag Body",
      "type": "object"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "tag_body"
  ],
  "title": "create_tagArguments",
  "type": "object"
}
```

</details>

<a id="tool-update_tag-ff9e7962"></a>

## update_tag

Handler: Updates an existing tag in a GTM workspace. Handler calls the GTM v2 discovery client using Application Default Credentials.

```text
Updates an existing tag in a GTM workspace.

Args:
    account_id: The account ID.
    container_id: The container ID.
    workspace_id: The workspace ID.
    tag_id: The tag ID.
    tag_body: The updated tag configuration object.
    fingerprint: Optional fingerprint for optimistic locking.

```

[Source](https://github.com/CarC96/google-tag-manager-mcp/blob/aeef2e03be3072a9e0e90f16e8ea86c7640928b1/src/gtm_mcp/tools/tags.py#L97-L131) · Schema: tools/list.

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
    "tag_body": {
      "additionalProperties": true,
      "title": "Tag Body",
      "type": "object"
    },
    "fingerprint": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Fingerprint"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "tag_id",
    "tag_body"
  ],
  "title": "update_tagArguments",
  "type": "object"
}
```

</details>

<a id="tool-delete_tag-1345d160"></a>

## delete_tag

Handler: Deletes a tag from a GTM workspace. Handler calls the GTM v2 discovery client using Application Default Credentials.

```text
Deletes a tag from a GTM workspace.

Args:
    account_id: The account ID.
    container_id: The container ID.
    workspace_id: The workspace ID.
    tag_id: The tag ID.

```

[Source](https://github.com/CarC96/google-tag-manager-mcp/blob/aeef2e03be3072a9e0e90f16e8ea86c7640928b1/src/gtm_mcp/tools/tags.py#L134-L157) · Schema: tools/list.

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
  "title": "delete_tagArguments",
  "type": "object"
}
```

</details>

<a id="tool-list_triggers-4ca44d74"></a>

## list_triggers

Handler: Lists all triggers in a GTM workspace. Handler calls the GTM v2 discovery client using Application Default Credentials. Returns only the first response page.

```text
Lists all triggers in a GTM workspace.

Args:
    account_id: The account ID.
    container_id: The container ID.
    workspace_id: The workspace ID.

```

[Source](https://github.com/CarC96/google-tag-manager-mcp/blob/aeef2e03be3072a9e0e90f16e8ea86c7640928b1/src/gtm_mcp/tools/triggers.py#L9-L30) · Schema: tools/list.

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
  "title": "list_triggersArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_trigger-e2f13ee6"></a>

## get_trigger

Handler: Gets a specific trigger in a GTM workspace. Handler calls the GTM v2 discovery client using Application Default Credentials.

```text
Gets a specific trigger in a GTM workspace.

Args:
    account_id: The account ID.
    container_id: The container ID.
    workspace_id: The workspace ID.
    trigger_id: The trigger ID.

```

[Source](https://github.com/CarC96/google-tag-manager-mcp/blob/aeef2e03be3072a9e0e90f16e8ea86c7640928b1/src/gtm_mcp/tools/triggers.py#L33-L60) · Schema: tools/list.

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
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "trigger_id"
  ],
  "title": "get_triggerArguments",
  "type": "object"
}
```

</details>

<a id="tool-create_trigger-71660c93"></a>

## create_trigger

Handler: Creates a new trigger in a GTM workspace. Handler calls the GTM v2 discovery client using Application Default Credentials.

```text
Creates a new trigger in a GTM workspace.

Args:
    account_id: The account ID.
    container_id: The container ID.
    workspace_id: The workspace ID.
    trigger_body: The trigger configuration object. Must include:
        - name (str): The trigger name.
        - type (str): The trigger type (e.g. 'customEvent', 'pageview',
          'domReady', 'windowLoaded', 'click', 'formSubmission', etc.).
        Can also include:
        - customEventFilter (list): Filters for custom events.
        - filter (list): Conditions that must be met.
        - autoEventFilter (list): Auto-event filters.

```

[Source](https://github.com/CarC96/google-tag-manager-mcp/blob/aeef2e03be3072a9e0e90f16e8ea86c7640928b1/src/gtm_mcp/tools/triggers.py#L63-L94) · Schema: tools/list.

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
    "trigger_body": {
      "additionalProperties": true,
      "title": "Trigger Body",
      "type": "object"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "trigger_body"
  ],
  "title": "create_triggerArguments",
  "type": "object"
}
```

</details>

<a id="tool-update_trigger-60ddeb77"></a>

## update_trigger

Handler: Updates an existing trigger in a GTM workspace. Handler calls the GTM v2 discovery client using Application Default Credentials.

```text
Updates an existing trigger in a GTM workspace.

Args:
    account_id: The account ID.
    container_id: The container ID.
    workspace_id: The workspace ID.
    trigger_id: The trigger ID.
    trigger_body: The updated trigger configuration.
    fingerprint: Optional fingerprint for optimistic locking.

```

[Source](https://github.com/CarC96/google-tag-manager-mcp/blob/aeef2e03be3072a9e0e90f16e8ea86c7640928b1/src/gtm_mcp/tools/triggers.py#L97-L131) · Schema: tools/list.

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
    "trigger_body": {
      "additionalProperties": true,
      "title": "Trigger Body",
      "type": "object"
    },
    "fingerprint": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Fingerprint"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "trigger_id",
    "trigger_body"
  ],
  "title": "update_triggerArguments",
  "type": "object"
}
```

</details>

<a id="tool-delete_trigger-ec67de91"></a>

## delete_trigger

Handler: Deletes a trigger from a GTM workspace. Handler calls the GTM v2 discovery client using Application Default Credentials.

```text
Deletes a trigger from a GTM workspace.

Args:
    account_id: The account ID.
    container_id: The container ID.
    workspace_id: The workspace ID.
    trigger_id: The trigger ID.

```

[Source](https://github.com/CarC96/google-tag-manager-mcp/blob/aeef2e03be3072a9e0e90f16e8ea86c7640928b1/src/gtm_mcp/tools/triggers.py#L134-L157) · Schema: tools/list.

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
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "trigger_id"
  ],
  "title": "delete_triggerArguments",
  "type": "object"
}
```

</details>

<a id="tool-list_variables-1adaa2a1"></a>

## list_variables

Handler: Lists all variables in a GTM workspace. Handler calls the GTM v2 discovery client using Application Default Credentials. Returns only the first response page.

```text
Lists all variables in a GTM workspace.

Args:
    account_id: The account ID.
    container_id: The container ID.
    workspace_id: The workspace ID.

```

[Source](https://github.com/CarC96/google-tag-manager-mcp/blob/aeef2e03be3072a9e0e90f16e8ea86c7640928b1/src/gtm_mcp/tools/variables.py#L9-L30) · Schema: tools/list.

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
  "title": "list_variablesArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_variable-ba0cd778"></a>

## get_variable

Handler: Gets a specific variable in a GTM workspace. Handler calls the GTM v2 discovery client using Application Default Credentials.

```text
Gets a specific variable in a GTM workspace.

Args:
    account_id: The account ID.
    container_id: The container ID.
    workspace_id: The workspace ID.
    variable_id: The variable ID.

```

[Source](https://github.com/CarC96/google-tag-manager-mcp/blob/aeef2e03be3072a9e0e90f16e8ea86c7640928b1/src/gtm_mcp/tools/variables.py#L33-L60) · Schema: tools/list.

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
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "variable_id"
  ],
  "title": "get_variableArguments",
  "type": "object"
}
```

</details>

<a id="tool-create_variable-2f5e4ddb"></a>

## create_variable

Handler: Creates a new variable in a GTM workspace. Handler calls the GTM v2 discovery client using Application Default Credentials.

```text
Creates a new variable in a GTM workspace.

Args:
    account_id: The account ID.
    container_id: The container ID.
    workspace_id: The workspace ID.
    variable_body: The variable configuration object. Must include:
        - name (str): The variable name.
        - type (str): The variable type (e.g. 'v', 'jsm', 'j', 'gas',
          'remm', 'smm', 'k', 'ctv', etc.).
        Can also include:
        - parameter (list): Variable parameters specific to the type.
        - formatValue (dict): Format options for the variable value.

        Common types:
        - 'v': Data Layer Variable
        - 'jsm': Custom JavaScript
        - 'j': JavaScript Variable
        - 'k': 1st Party Cookie
        - 'ctv': Constant
        - 'remm': Regex Table
        - 'smm': Lookup Table
        - 'gas': Google Analytics Settings

```

[Source](https://github.com/CarC96/google-tag-manager-mcp/blob/aeef2e03be3072a9e0e90f16e8ea86c7640928b1/src/gtm_mcp/tools/variables.py#L63-L103) · Schema: tools/list.

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
    "variable_body": {
      "additionalProperties": true,
      "title": "Variable Body",
      "type": "object"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "variable_body"
  ],
  "title": "create_variableArguments",
  "type": "object"
}
```

</details>

<a id="tool-update_variable-63c48ad7"></a>

## update_variable

Handler: Updates an existing variable in a GTM workspace. Handler calls the GTM v2 discovery client using Application Default Credentials.

```text
Updates an existing variable in a GTM workspace.

Args:
    account_id: The account ID.
    container_id: The container ID.
    workspace_id: The workspace ID.
    variable_id: The variable ID.
    variable_body: The updated variable configuration.
    fingerprint: Optional fingerprint for optimistic locking.

```

[Source](https://github.com/CarC96/google-tag-manager-mcp/blob/aeef2e03be3072a9e0e90f16e8ea86c7640928b1/src/gtm_mcp/tools/variables.py#L106-L140) · Schema: tools/list.

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
    "variable_body": {
      "additionalProperties": true,
      "title": "Variable Body",
      "type": "object"
    },
    "fingerprint": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Fingerprint"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "variable_id",
    "variable_body"
  ],
  "title": "update_variableArguments",
  "type": "object"
}
```

</details>

<a id="tool-delete_variable-3ead6fdb"></a>

## delete_variable

Handler: Deletes a variable from a GTM workspace. Handler calls the GTM v2 discovery client using Application Default Credentials.

```text
Deletes a variable from a GTM workspace.

Args:
    account_id: The account ID.
    container_id: The container ID.
    workspace_id: The workspace ID.
    variable_id: The variable ID.

```

[Source](https://github.com/CarC96/google-tag-manager-mcp/blob/aeef2e03be3072a9e0e90f16e8ea86c7640928b1/src/gtm_mcp/tools/variables.py#L143-L166) · Schema: tools/list.

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
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "variable_id"
  ],
  "title": "delete_variableArguments",
  "type": "object"
}
```

</details>

<a id="tool-list_built_in_variables-598c2ffb"></a>

## list_built_in_variables

Handler: Lists all enabled built-in variables in a GTM workspace. Handler calls the GTM v2 discovery client using Application Default Credentials. Returns only the first response page.

```text
Lists all enabled built-in variables in a GTM workspace.

Built-in variables are pre-defined variables provided by GTM
(e.g. Click URL, Page URL, Event, etc.).

Args:
    account_id: The account ID.
    container_id: The container ID.
    workspace_id: The workspace ID.

```

[Source](https://github.com/CarC96/google-tag-manager-mcp/blob/aeef2e03be3072a9e0e90f16e8ea86c7640928b1/src/gtm_mcp/tools/built_in_variables.py#L9-L33) · Schema: tools/list.

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
  "title": "list_built_in_variablesArguments",
  "type": "object"
}
```

</details>

<a id="tool-list_version_headers-bec4b502"></a>

## list_version_headers

Handler: Lists all container version headers (summary info for each version). Handler calls the GTM v2 discovery client using Application Default Credentials. Returns only the first response page.

```text
Lists all container version headers (summary info for each version).

Args:
    account_id: The account ID.
    container_id: The container ID.

```

[Source](https://github.com/CarC96/google-tag-manager-mcp/blob/aeef2e03be3072a9e0e90f16e8ea86c7640928b1/src/gtm_mcp/tools/versions.py#L9-L28) · Schema: tools/list.

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
  "title": "list_version_headersArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_live_version-ffef26dc"></a>

## get_live_version

Handler: Gets the live (published) container version, including all its tags, Handler calls the GTM v2 discovery client using Application Default Credentials.

```text
Gets the live (published) container version, including all its tags,
triggers, variables, and configuration.

This is useful for auditing the currently active configuration.

Args:
    account_id: The account ID.
    container_id: The container ID.

```

[Source](https://github.com/CarC96/google-tag-manager-mcp/blob/aeef2e03be3072a9e0e90f16e8ea86c7640928b1/src/gtm_mcp/tools/versions.py#L31-L52) · Schema: tools/list.

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
  "title": "get_live_versionArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_version-e67e6685"></a>

## get_version

Handler: Gets a specific container version with all its entities. Handler calls the GTM v2 discovery client using Application Default Credentials.

```text
Gets a specific container version with all its entities.

Args:
    account_id: The account ID.
    container_id: The container ID.
    version_id: The version ID.

```

[Source](https://github.com/CarC96/google-tag-manager-mcp/blob/aeef2e03be3072a9e0e90f16e8ea86c7640928b1/src/gtm_mcp/tools/versions.py#L55-L74) · Schema: tools/list.

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
    }
  },
  "required": [
    "account_id",
    "container_id",
    "version_id"
  ],
  "title": "get_versionArguments",
  "type": "object"
}
```

</details>
