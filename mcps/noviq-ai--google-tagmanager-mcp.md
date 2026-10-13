# noviq-ai/google-tagmanager-mcp

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/noviq-ai/google-tagmanager-mcp) · [Machine-readable inventory](../data/mcps/noviq-ai--google-tagmanager-mcp.json)

**7 extracted tools.** Read accounts, containers, workspaces, entities, and the currently published container version.

Snapshot: 2026-10-13 · [a4e219a6e2bc](https://github.com/noviq-ai/google-tagmanager-mcp/tree/a4e219a6e2bcf3614b57885a44eb8b0b7f3f8416) · Method: tools/list.

Exposure: All seven tools registered unconditionally when the server imports its tool modules. Normal startup requires Application Default Credentials at utils import time.

## Limits

- Offline registration used an inert replacement for tag_manager_mcp.utils to bypass import-time ADC; no API handlers or authentication were executed.
- Schemas reflect installed mcp 1.30.0; upstream specifies mcp[cli]>=1.2.0 without a lock, so schema metadata can vary by installed SDK version.
- List handlers ignore pagination tokens and return only the first API page.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`list_accounts`](#tool-list_accounts-1090ba6a) | GTM | Calls Tag Manager v2 accounts.list and returns the account array from the first response. |
| [`list_containers`](#tool-list_containers-a53dbc4d) | GTM | Calls Tag Manager v2 accounts.containers.list for the account and returns the container array from the first response. |
| [`list_workspaces`](#tool-list_workspaces-af844119) | GTM | Calls Tag Manager v2 accounts.containers.workspaces.list for the container and returns the workspace array from the first response. |
| [`list_tags`](#tool-list_tags-86fc0f9c) | GTM | Calls Tag Manager v2 workspace tags.list and returns the tag array from the first response. |
| [`list_triggers`](#tool-list_triggers-4ca44d74) | GTM | Calls Tag Manager v2 workspace triggers.list and returns the trigger array from the first response. |
| [`list_variables`](#tool-list_variables-1adaa2a1) | GTM | Calls Tag Manager v2 workspace variables.list and returns the variable array from the first response. |
| [`get_live_container_version`](#tool-get_live_container_version-d10cfbe5) | GTM | Calls Tag Manager v2 accounts.containers.versions.live and returns the live container version. |

<a id="tool-list_accounts-1090ba6a"></a>

## list_accounts

Handler: Calls Tag Manager v2 accounts.list and returns the account array from the first response.

```text
Returns a list of Google Tag Manager accounts accessible by the authenticated user.

Each account includes:
- accountId: The GTM account ID
- name: The account name
- shareData: Whether the account shares data with Google
- path: The resource path (accounts/{accountId})

```

[Source](https://github.com/noviq-ai/google-tagmanager-mcp/blob/a4e219a6e2bcf3614b57885a44eb8b0b7f3f8416/tag_manager_mcp/tools/accounts.py#L8-L20) · Schema: tools/list.

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

<a id="tool-list_containers-a53dbc4d"></a>

## list_containers

Handler: Calls Tag Manager v2 accounts.containers.list for the account and returns the container array from the first response.

```text
Returns a list of GTM containers for the specified account.

Args:
    account_id: The GTM account ID (numeric, e.g. 1234567890)

Each container includes:
- containerId: The container ID
- name: The container name
- publicId: The GTM container ID shown in the UI (e.g. GTM-XXXXXXX)
- usageContext: Where the container is used (web, androidSdk5, iosSdk5, amp, server)
- domainName: Associated domains
- path: The resource path

```

[Source](https://github.com/noviq-ai/google-tagmanager-mcp/blob/a4e219a6e2bcf3614b57885a44eb8b0b7f3f8416/tag_manager_mcp/tools/containers.py#L8-L27) · Schema: tools/list.

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

<a id="tool-list_workspaces-af844119"></a>

## list_workspaces

Handler: Calls Tag Manager v2 accounts.containers.workspaces.list for the container and returns the workspace array from the first response.

```text
Returns a list of GTM workspaces for the specified container.

Args:
    account_id: The GTM account ID (numeric)
    container_id: The GTM container ID (numeric)

Each workspace includes:
- workspaceId: The workspace ID
- name: The workspace name
- description: The workspace description
- fingerprint: The fingerprint of the workspace
- tagManagerUrl: Link to the workspace in the GTM UI
- path: The resource path

```

[Source](https://github.com/noviq-ai/google-tagmanager-mcp/blob/a4e219a6e2bcf3614b57885a44eb8b0b7f3f8416/tag_manager_mcp/tools/workspaces.py#L8-L28) · Schema: tools/list.

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

<a id="tool-list_tags-86fc0f9c"></a>

## list_tags

Handler: Calls Tag Manager v2 workspace tags.list and returns the tag array from the first response.

```text
Returns a list of GTM tags in the specified workspace.

Args:
    account_id: The GTM account ID (numeric)
    container_id: The GTM container ID (numeric)
    workspace_id: The workspace ID (numeric)

Each tag includes:
- tagId: The tag ID
- name: The tag name
- type: The tag type (e.g. ua, gaawe, html, img)
- firingTriggerId: List of trigger IDs that fire this tag
- blockingTriggerId: List of trigger IDs that block this tag
- tagFiringOption: When to fire (oncePerEvent, oncePerLoad, unlimited)
- paused: Whether the tag is paused
- parameter: Tag configuration parameters

```

[Source](https://github.com/noviq-ai/google-tagmanager-mcp/blob/a4e219a6e2bcf3614b57885a44eb8b0b7f3f8416/tag_manager_mcp/tools/tags.py#L8-L31) · Schema: tools/list.

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

<a id="tool-list_triggers-4ca44d74"></a>

## list_triggers

Handler: Calls Tag Manager v2 workspace triggers.list and returns the trigger array from the first response.

```text
Returns a list of GTM triggers in the specified workspace.

Args:
    account_id: The GTM account ID (numeric)
    container_id: The GTM container ID (numeric)
    workspace_id: The workspace ID (numeric)

Each trigger includes:
- triggerId: The trigger ID
- name: The trigger name
- type: The trigger type (e.g. pageview, click, customEvent, formSubmission, historyChange)
- filter: Conditions that must be true for the trigger to fire
- parameter: Trigger configuration parameters

```

[Source](https://github.com/noviq-ai/google-tagmanager-mcp/blob/a4e219a6e2bcf3614b57885a44eb8b0b7f3f8416/tag_manager_mcp/tools/triggers.py#L8-L28) · Schema: tools/list.

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

<a id="tool-list_variables-1adaa2a1"></a>

## list_variables

Handler: Calls Tag Manager v2 workspace variables.list and returns the variable array from the first response.

```text
Returns a list of GTM variables in the specified workspace.

Args:
    account_id: The GTM account ID (numeric)
    container_id: The GTM container ID (numeric)
    workspace_id: The workspace ID (numeric)

Each variable includes:
- variableId: The variable ID
- name: The variable name
- type: The variable type (e.g. v (Data Layer Variable), u (URL), k (1st Party Cookie), jsm (Custom JavaScript))
- parameter: Variable configuration parameters
- enablingTriggerId: Trigger IDs that enable this variable

```

[Source](https://github.com/noviq-ai/google-tagmanager-mcp/blob/a4e219a6e2bcf3614b57885a44eb8b0b7f3f8416/tag_manager_mcp/tools/variables.py#L8-L28) · Schema: tools/list.

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

<a id="tool-get_live_container_version-d10cfbe5"></a>

## get_live_container_version

Handler: Calls Tag Manager v2 accounts.containers.versions.live and returns the live container version.

```text
Returns the currently published (live) version of the specified GTM container.

Args:
    account_id: The GTM account ID (numeric)
    container_id: The GTM container ID (numeric)

Returns the live container version including:
- containerVersionId: The version ID
- name: The version name
- description: The version description
- container: Container information
- tag: List of tags in this version
- trigger: List of triggers in this version
- variable: List of variables in this version
- fingerprint: Fingerprint of the version

```

[Source](https://github.com/noviq-ai/google-tagmanager-mcp/blob/a4e219a6e2bcf3614b57885a44eb8b0b7f3f8416/tag_manager_mcp/tools/versions.py#L8-L30) · Schema: tools/list.

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
  "title": "get_live_container_versionArguments",
  "type": "object"
}
```

</details>
