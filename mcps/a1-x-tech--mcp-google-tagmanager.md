# A1-x-Tech/mcp-google-tagmanager

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/A1-x-Tech/mcp-google-tagmanager) · [Machine-readable inventory](../data/mcps/a1-x-tech--mcp-google-tagmanager.json)

**25 extracted tools.** Creates and edits container entities, manages built-in variables, publishes versions, and accepts raw API requests.

Snapshot: 2026-10-13 · [cd0ab59ad24f](https://github.com/A1-x-Tech/mcp-google-tagmanager/tree/cd0ab59ad24f29685990bec2fcdb6d14cc2c6f88) · Method: tools/list.

Exposure: All 25 tools register unconditionally, including without credentials; authentication is required for GTM API calls.

## Limits

- No GTM tool was invoked; behavior is verified by handler and client inspection, not live API execution.
- Six auxiliary auth handlers are supplied by lockfile-pinned @a1-x-tech/mcp-google-auth 0.1.0; its advertised GitHub repository is unavailable. Exact tools/list schemas and npm implementation were inspected and preserved locally; per-tool immutable repository evidence points to the consuming auth registration wrapper.
- In-chat LOGIN_SCOPES requests edit.containers and publish but omits edit.containerversions required by create_version; that operation needs independently configured credentials with the additional scope.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`auth_status`](#tool-auth_status-50348a10) | Supporting | Reports local token metadata, granted scopes and credential sources without a network request. |
| [`setup_instructions`](#tool-setup_instructions-cc1a2f2a) | Supporting | Builds a Google OAuth setup checklist based on configured client presence. |
| [`set_client`](#tool-set_client-42120b4c) | Supporting | Reads a Desktop OAuth client JSON file and writes the shared local OAuth client configuration. |
| [`start_login`](#tool-start_login-0bbeda28) | Supporting | Starts a PKCE OAuth flow with a local callback listener and returns a consent URL. |
| [`finish_login`](#tool-finish_login-6257590c) | Supporting | Persists completed OAuth tokens, probes the GTM accounts endpoint and optionally fetches account email. |
| [`logout`](#tool-logout-00270cf6) | Supporting | Revokes a stored token, deletes the local credentials and clears pending login without changing environment tokens. |
| [`list_accounts`](#tool-list_accounts-1090ba6a) | GTM | GETs the GTM accounts collection with optional pagination. |
| [`get_account`](#tool-get_account-896a62e4) | GTM | GETs a GTM account by account ID. |
| [`list_containers`](#tool-list_containers-a53dbc4d) | GTM | GETs containers in the selected GTM account with optional pagination. |
| [`get_container`](#tool-get_container-9a0808eb) | GTM | GETs a GTM container by account and container IDs. |
| [`create_container`](#tool-create_container-352b1505) | GTM | POSTs name and usageContext to create a GTM container. |
| [`list_workspaces`](#tool-list_workspaces-af844119) | GTM | GETs container workspaces with optional pagination. |
| [`get_workspace`](#tool-get_workspace-80ffee6a) | GTM | GETs the selected GTM workspace. |
| [`create_workspace`](#tool-create_workspace-a1af8425) | GTM | POSTs a workspace name and optional description under a container. |
| [`list_tags`](#tool-list_tags-86fc0f9c) | GTM | GETs workspace tags with optional pagination. |
| [`list_triggers`](#tool-list_triggers-4ca44d74) | GTM | GETs workspace triggers with optional pagination. |
| [`list_variables`](#tool-list_variables-1adaa2a1) | GTM | GETs workspace user-defined variables with optional pagination. |
| [`get_resource`](#tool-get_resource-74526e2e) | GTM | GETs an arbitrary GTM resource using an accounts-relative path. |
| [`create_entity`](#tool-create_entity-697caa14) | GTM | POSTs an unrestricted resource object to the selected tag, trigger or variable collection. |
| [`update_entity`](#tool-update_entity-a54a743a) | GTM | PUTs a full resource replacement to its path with an optional fingerprint query parameter. |
| [`delete_entity`](#tool-delete_entity-5324afed) | GTM | DELETEs the specified resource path and returns a deletion acknowledgement. |
| [`manage_built_in_variables`](#tool-manage_built_in_variables-645c7bba) | GTM | Lists, enables or disables workspace built-in variable types, rejecting empty types for write actions. |
| [`create_version`](#tool-create_version-fc39e936) | GTM | POSTs workspace :create\_version and reports compilerError=true as a tool error. |
| [`publish_version`](#tool-publish_version-0628e4c5) | GTM | Gets a selected or live version or POSTs :publish with optional fingerprint, rejecting missing version\_id for get/publish. |
| [`raw_request`](#tool-raw_request-81cb54d4) | GTM | Dispatches GET, POST, PUT or DELETE to a relative GTM v2 path with repeated query values and an optional body. |

<a id="tool-auth_status-50348a10"></a>

## auth_status

Handler: Reports local token metadata, granted scopes and credential sources without a network request.

```text
Shows whether this server is connected to Google: token presence and source (env variables or a stored in-chat login), expiry, the Google account email, granted vs missing OAuth scopes, where the credentials file lives and where the OAuth client comes from. Makes no network calls and never returns the token itself. Call it first when other tools report the server is not connected.
```

[Source](https://github.com/A1-x-Tech/mcp-google-tagmanager/blob/cd0ab59ad24f29685990bec2fcdb6d14cc2c6f88/src/tools/auth.ts#L110-L120) · Schema: tools/list.

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

<a id="tool-setup_instructions-cc1a2f2a"></a>

## setup_instructions

Handler: Builds a Google OAuth setup checklist based on configured client presence.

```text
Step-by-step checklist for connecting this server to Google: creating a Google Cloud project and a Desktop-app OAuth client, publishing the consent screen (mandatory — Testing-mode refresh tokens die after 7 days), downloading the client JSON and handing its PATH to set_client. Works without any credentials; the checklist shortens to 'enable the API + log in' when an OAuth client is already configured (one client serves the whole mcp-google-* line). Never asks the user to paste secrets into the chat.
```

[Source](https://github.com/A1-x-Tech/mcp-google-tagmanager/blob/cd0ab59ad24f29685990bec2fcdb6d14cc2c6f88/src/tools/auth.ts#L110-L120) · Schema: tools/list.

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

<a id="tool-set_client-42120b4c"></a>

## set_client

Handler: Reads a Desktop OAuth client JSON file and writes the shared local OAuth client configuration.

```text
Saves the OAuth client credentials from the JSON file downloaded from Google Cloud Console ('Download JSON' on a Desktop-app client). Pass the file PATH — the secret must never be pasted into the chat. The client is stored once in the shared ~/.config/mcp-google-auth/client.json (owner-only) and reused by every mcp-google-* server; tokens stay per-server. After this, call start_login.
```

[Source](https://github.com/A1-x-Tech/mcp-google-tagmanager/blob/cd0ab59ad24f29685990bec2fcdb6d14cc2c6f88/src/tools/auth.ts#L110-L120) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "path": {
      "type": "string",
      "minLength": 1,
      "description": "Absolute path to the client_secret_*.json file downloaded from Google Cloud Console."
    }
  },
  "required": [
    "path"
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

<a id="tool-start_login-0bbeda28"></a>

## start_login

Handler: Starts a PKCE OAuth flow with a local callback listener and returns a consent URL.

```text
First step of connecting from the chat, without editing config files or restarting the client. Returns authorizeUrl — show it to the user as a clickable link and ask them to open it in the browser ON THIS MACHINE, pick the Google account and approve access. A one-shot listener on 127.0.0.1 catches Google's redirect; the code is exchanged locally and never passes through the chat. Does not open the browser itself. The attempt lives 10 minutes; when the browser shows the success page, call finish_login.
```

[Source](https://github.com/A1-x-Tech/mcp-google-tagmanager/blob/cd0ab59ad24f29685990bec2fcdb6d14cc2c6f88/src/tools/auth.ts#L110-L120) · Schema: tools/list.

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
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-finish_login-6257590c"></a>

## finish_login

Handler: Persists completed OAuth tokens, probes the GTM accounts endpoint and optionally fetches account email.

```text
Second step: confirms the browser consent finished, saves the tokens to an owner-only file and verifies the login with a read-only identity call, returning the account email and the granted scopes. After success every tool works immediately — no client restart. If the user granted only part of the requested permissions, the login is still saved and missingScopes lists what will not work. Logging in under a different Google account replaces the previous login (its refresh token is revoked best-effort) and the response carries previousAccountEmail so the change never goes unnoticed.
```

[Source](https://github.com/A1-x-Tech/mcp-google-tagmanager/blob/cd0ab59ad24f29685990bec2fcdb6d14cc2c6f88/src/tools/auth.ts#L110-L120) · Schema: tools/list.

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
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<a id="tool-logout-00270cf6"></a>

## logout

Handler: Revokes a stored token, deletes the local credentials and clears pending login without changing environment tokens.

```text
Revokes the stored token at Google (oauth2.googleapis.com/revoke) and deletes the local credentials file. Tokens supplied via env variables are NOT touched — remove them from the MCP client config manually; envTokenStillSet in the response says whether any are still in effect.
```

[Source](https://github.com/A1-x-Tech/mcp-google-tagmanager/blob/cd0ab59ad24f29685990bec2fcdb6d14cc2c6f88/src/tools/auth.ts#L110-L120) · Schema: tools/list.

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
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-list_accounts-1090ba6a"></a>

## list_accounts

Handler: GETs the GTM accounts collection with optional pagination.

```text
Lists all Google Tag Manager accounts the authorized user can access. Returns { account: [{ accountId, name, path, fingerprint }], nextPageToken }. All ids are strings. This is the entry point: every other tool needs an accountId (or a path) from here.
```

[Source](https://github.com/A1-x-Tech/mcp-google-tagmanager/blob/cd0ab59ad24f29685990bec2fcdb6d14cc2c6f88/src/tools/accounts.ts#L6-L25) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "page_token": {
      "type": "string",
      "description": "Pagination token from a previous response's nextPageToken. Omit for the first page."
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

<a id="tool-get_account-896a62e4"></a>

## get_account

Handler: GETs a GTM account by account ID.

```text
Gets one Google Tag Manager account by id. Returns the Account resource: { accountId, name, path, fingerprint, shareData }.
```

[Source](https://github.com/A1-x-Tech/mcp-google-tagmanager/blob/cd0ab59ad24f29685990bec2fcdb6d14cc2c6f88/src/tools/accounts.ts#L26-L45) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account id (string), e.g. from list_accounts."
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

<a id="tool-list_containers-a53dbc4d"></a>

## list_containers

Handler: GETs containers in the selected GTM account with optional pagination.

```text
Lists the containers of a GTM account. Returns { container: [{ containerId, name, publicId (e.g. GTM-XXXXXX), usageContext, path, fingerprint, tagManagerUrl }], nextPageToken }.
```

[Source](https://github.com/A1-x-Tech/mcp-google-tagmanager/blob/cd0ab59ad24f29685990bec2fcdb6d14cc2c6f88/src/tools/containers.ts#L7-L27) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account id (string)."
    },
    "page_token": {
      "type": "string",
      "description": "Pagination token from a previous response's nextPageToken. Omit for the first page."
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

<a id="tool-get_container-9a0808eb"></a>

## get_container

Handler: GETs a GTM container by account and container IDs.

```text
Gets one container by account id + container id. Returns the Container resource including publicId (the GTM-XXXXXX snippet id), usageContext and fingerprint.
```

[Source](https://github.com/A1-x-Tech/mcp-google-tagmanager/blob/cd0ab59ad24f29685990bec2fcdb6d14cc2c6f88/src/tools/containers.ts#L28-L48) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account id (string)."
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "Container id (string), e.g. from list_containers."
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

<a id="tool-create_container-352b1505"></a>

## create_container

Handler: POSTs name and usageContext to create a GTM container.

```text
Creates a new container in a GTM account. usage_context declares the platform, e.g. ["web"]; other values include androidSdk5, iosSdk5, server. Returns the created Container with its server-assigned containerId and publicId. Requires the tagmanager.edit.containers scope.
```

[Source](https://github.com/A1-x-Tech/mcp-google-tagmanager/blob/cd0ab59ad24f29685990bec2fcdb6d14cc2c6f88/src/tools/containers.ts#L49-L73) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account id (string)."
    },
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "Display name of the new container."
    },
    "usage_context": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1
      },
      "minItems": 1,
      "description": "Usage contexts, e.g. [\"web\"]. Other documented values: androidSdk5, iosSdk5, server."
    }
  },
  "required": [
    "account_id",
    "name",
    "usage_context"
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

<a id="tool-list_workspaces-af844119"></a>

## list_workspaces

Handler: GETs container workspaces with optional pagination.

```text
Lists the workspaces of a container. Returns { workspace: [{ workspaceId, name, description, path, fingerprint }], nextPageToken }. Workspaces are mandatory in GTM v2: every tag/trigger/variable operation needs a workspaceId, and a "Default Workspace" always exists — call this first.
```

[Source](https://github.com/A1-x-Tech/mcp-google-tagmanager/blob/cd0ab59ad24f29685990bec2fcdb6d14cc2c6f88/src/tools/workspaces.ts#L7-L28) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account id (string)."
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "Container id (string)."
    },
    "page_token": {
      "type": "string",
      "description": "Pagination token from a previous response's nextPageToken. Omit for the first page."
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

<a id="tool-get_workspace-80ffee6a"></a>

## get_workspace

Handler: GETs the selected GTM workspace.

```text
Gets one workspace by account id + container id + workspace id. Returns the Workspace resource with its fingerprint.
```

[Source](https://github.com/A1-x-Tech/mcp-google-tagmanager/blob/cd0ab59ad24f29685990bec2fcdb6d14cc2c6f88/src/tools/workspaces.ts#L29-L52) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account id (string)."
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "Container id (string)."
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "Workspace id (string), e.g. from list_workspaces."
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

<a id="tool-create_workspace-a1af8425"></a>

## create_workspace

Handler: POSTs a workspace name and optional description under a container.

```text
Creates a new workspace in a container — an isolated draft where tags, triggers and variables are edited before being compiled into a version. Returns the created Workspace with its server-assigned workspaceId. Requires the tagmanager.edit.containers scope.
```

[Source](https://github.com/A1-x-Tech/mcp-google-tagmanager/blob/cd0ab59ad24f29685990bec2fcdb6d14cc2c6f88/src/tools/workspaces.ts#L53-L75) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account id (string)."
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "Container id (string)."
    },
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "Display name of the new workspace."
    },
    "description": {
      "type": "string",
      "description": "Optional description of what this workspace changes."
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
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-list_tags-86fc0f9c"></a>

## list_tags

Handler: GETs workspace tags with optional pagination.

```text
Lists the tags of a workspace. Returns { tag: [{ tagId, name, type (e.g. html, gaawe), parameter: [{ type, key, value, list, map }], firingTriggerId, blockingTriggerId, paused, path, fingerprint, tagManagerUrl }], nextPageToken }.
```

[Source](https://github.com/A1-x-Tech/mcp-google-tagmanager/blob/cd0ab59ad24f29685990bec2fcdb6d14cc2c6f88/src/tools/entities.ts#L33-L55) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account id (string)."
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "Container id (string)."
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "Workspace id (string), e.g. from list_workspaces."
    },
    "page_token": {
      "type": "string",
      "description": "Pagination token from a previous response's nextPageToken. Omit for the first page."
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

<a id="tool-list_triggers-4ca44d74"></a>

## list_triggers

Handler: GETs workspace triggers with optional pagination.

```text
Lists the triggers of a workspace. Returns { trigger: [{ triggerId, name, type (e.g. pageview, click, customEvent), filter/customEventFilter (conditions of { type, parameter }), path, fingerprint }], nextPageToken }.
```

[Source](https://github.com/A1-x-Tech/mcp-google-tagmanager/blob/cd0ab59ad24f29685990bec2fcdb6d14cc2c6f88/src/tools/entities.ts#L33-L55) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account id (string)."
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "Container id (string)."
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "Workspace id (string), e.g. from list_workspaces."
    },
    "page_token": {
      "type": "string",
      "description": "Pagination token from a previous response's nextPageToken. Omit for the first page."
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

<a id="tool-list_variables-1adaa2a1"></a>

## list_variables

Handler: GETs workspace user-defined variables with optional pagination.

```text
Lists the user-defined variables of a workspace (built-in variables live in manage_built_in_variables). Returns { variable: [{ variableId, name, type (e.g. v = data layer, jsm = custom JS, c = constant), parameter, path, fingerprint }], nextPageToken }.
```

[Source](https://github.com/A1-x-Tech/mcp-google-tagmanager/blob/cd0ab59ad24f29685990bec2fcdb6d14cc2c6f88/src/tools/entities.ts#L33-L55) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account id (string)."
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "Container id (string)."
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "Workspace id (string), e.g. from list_workspaces."
    },
    "page_token": {
      "type": "string",
      "description": "Pagination token from a previous response's nextPageToken. Omit for the first page."
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

<a id="tool-get_resource-74526e2e"></a>

## get_resource

Handler: GETs an arbitrary GTM resource using an accounts-relative path.

```text
Generic getter for any GTM resource by its API-relative path — tags, triggers, variables, versions, containers, workspaces. Prefer echoing the `path` field from a previous response over assembling the string yourself. Returns the full resource JSON including its current fingerprint (needed for update_entity).
```

[Source](https://github.com/A1-x-Tech/mcp-google-tagmanager/blob/cd0ab59ad24f29685990bec2fcdb6d14cc2c6f88/src/tools/entities.ts#L56-L75) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "path": {
      "type": "string",
      "pattern": "^accounts\\/",
      "description": "API-relative resource path as returned in the resource's own \"path\" field, e.g. \"accounts/1/containers/2/workspaces/3/tags/4\"."
    }
  },
  "required": [
    "path"
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

<a id="tool-create_entity-697caa14"></a>

## create_entity

Handler: POSTs an unrestricted resource object to the selected tag, trigger or variable collection.

```text
Creates a tag, trigger or variable in a workspace. `body` is the resource JSON: minimally { name, type } plus type-specific parameter entries; tags also take firingTriggerId (array of trigger id strings). Example tag body: { "name": "GA4 event", "type": "gaawe", "parameter": [...], "firingTriggerId": ["12"] }. Returns the created resource with its server-assigned id and fingerprint. Requires the tagmanager.edit.containers scope.
```

[Source](https://github.com/A1-x-Tech/mcp-google-tagmanager/blob/cd0ab59ad24f29685990bec2fcdb6d14cc2c6f88/src/tools/entities.ts#L76-L101) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account id (string)."
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "Container id (string)."
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "Workspace id (string)."
    },
    "entity_type": {
      "type": "string",
      "enum": [
        "tag",
        "trigger",
        "variable"
      ],
      "description": "Which collection to create in."
    },
    "body": {
      "type": "object",
      "additionalProperties": {},
      "description": "The resource JSON to create (name, type, parameter, and for tags firingTriggerId)."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "entity_type",
    "body"
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

<a id="tool-update_entity-a54a743a"></a>

## update_entity

Handler: PUTs a full resource replacement to its path with an optional fingerprint query parameter.

```text
Updates a tag, trigger or variable by its API path. PUT semantics: this is a FULL REPLACE, not a patch — fetch the current resource with get_resource, modify it, and send the whole object back. Pass the resource's last-seen fingerprint for optimistic-concurrency safety; a mismatch fails the request. Requires the tagmanager.edit.containers scope.
```

[Source](https://github.com/A1-x-Tech/mcp-google-tagmanager/blob/cd0ab59ad24f29685990bec2fcdb6d14cc2c6f88/src/tools/entities.ts#L102-L126) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "path": {
      "type": "string",
      "pattern": "^accounts\\/",
      "description": "API-relative resource path as returned in the resource's own \"path\" field, e.g. \"accounts/1/containers/2/workspaces/3/triggers/5\"."
    },
    "body": {
      "type": "object",
      "additionalProperties": {},
      "description": "The complete replacement resource JSON."
    },
    "fingerprint": {
      "type": "string",
      "description": "The fingerprint from the last read of this resource; the update fails if it is stale."
    }
  },
  "required": [
    "path",
    "body"
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

<a id="tool-delete_entity-5324afed"></a>

## delete_entity

Handler: DELETEs the specified resource path and returns a deletion acknowledgement.

```text
Deletes a tag, trigger or variable by its API path. The response is empty on success. Requires the tagmanager.edit.containers scope.
```

[Source](https://github.com/A1-x-Tech/mcp-google-tagmanager/blob/cd0ab59ad24f29685990bec2fcdb6d14cc2c6f88/src/tools/entities.ts#L127-L147) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "path": {
      "type": "string",
      "pattern": "^accounts\\/",
      "description": "API-relative resource path as returned in the resource's own \"path\" field, e.g. \"accounts/1/containers/2/workspaces/3/variables/7\"."
    }
  },
  "required": [
    "path"
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

<a id="tool-manage_built_in_variables-645c7bba"></a>

## manage_built_in_variables

Handler: Lists, enables or disables workspace built-in variable types, rejecting empty types for write actions.

```text
Manages a workspace's built-in variables (pageUrl, clickText, event, ...). These are toggles, not records: action "list" returns the currently enabled ones ({ builtInVariable: [...] }), "enable" and "disable" take `types` (BuiltInVariableType enum values) and switch them on/off. Enable/disable require the tagmanager.edit.containers scope.
```

[Source](https://github.com/A1-x-Tech/mcp-google-tagmanager/blob/cd0ab59ad24f29685990bec2fcdb6d14cc2c6f88/src/tools/builtins.ts#L8-L48) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account id (string)."
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "Container id (string)."
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "Workspace id (string)."
    },
    "action": {
      "type": "string",
      "enum": [
        "list",
        "enable",
        "disable"
      ],
      "description": "What to do."
    },
    "types": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "pageUrl",
          "pageHostname",
          "pagePath",
          "referrer",
          "event",
          "clickElement",
          "clickClasses",
          "clickId",
          "clickTarget",
          "clickUrl",
          "clickText",
          "firstPartyServingUrl",
          "formElement",
          "formClasses",
          "formId",
          "formTarget",
          "formUrl",
          "formText",
          "errorMessage",
          "errorUrl",
          "errorLine",
          "newHistoryUrl",
          "oldHistoryUrl",
          "newHistoryFragment",
          "oldHistoryFragment",
          "newHistoryState",
          "oldHistoryState",
          "historySource",
          "containerVersion",
          "debugMode",
          "randomNumber",
          "containerId",
          "appId",
          "appName",
          "appVersionCode",
          "appVersionName",
          "language",
          "osVersion",
          "platform",
          "sdkVersion",
          "deviceName",
          "resolution",
          "advertiserId",
          "advertisingTrackingEnabled",
          "htmlId",
          "environmentName",
          "ampBrowserLanguage",
          "ampCanonicalPath",
          "ampCanonicalUrl",
          "ampCanonicalHost",
          "ampReferrer",
          "ampTitle",
          "ampClientId",
          "ampClientTimezone",
          "ampClientTimestamp",
          "ampClientScreenWidth",
          "ampClientScreenHeight",
          "ampClientScrollX",
          "ampClientScrollY",
          "ampClientMaxScrollX",
          "ampClientMaxScrollY",
          "ampTotalEngagedTime",
          "ampPageViewId",
          "ampPageLoadTime",
          "ampPageDownloadTime",
          "ampGtmEvent",
          "eventName",
          "firebaseEventParameterCampaign",
          "firebaseEventParameterCampaignAclid",
          "firebaseEventParameterCampaignAnid",
          "firebaseEventParameterCampaignClickTimestamp",
          "firebaseEventParameterCampaignContent",
          "firebaseEventParameterCampaignCp1",
          "firebaseEventParameterCampaignGclid",
          "firebaseEventParameterCampaignSource",
          "firebaseEventParameterCampaignTerm",
          "firebaseEventParameterCurrency",
          "firebaseEventParameterDynamicLinkAcceptTime",
          "firebaseEventParameterDynamicLinkLinkid",
          "firebaseEventParameterNotificationMessageDeviceTime",
          "firebaseEventParameterNotificationMessageId",
          "firebaseEventParameterNotificationMessageName",
          "firebaseEventParameterNotificationMessageTime",
          "firebaseEventParameterNotificationTopic",
          "firebaseEventParameterPreviousAppVersion",
          "firebaseEventParameterPreviousOsVersion",
          "firebaseEventParameterPrice",
          "firebaseEventParameterProductId",
          "firebaseEventParameterQuantity",
          "firebaseEventParameterValue",
          "videoProvider",
          "videoUrl",
          "videoTitle",
          "videoDuration",
          "videoPercent",
          "videoVisible",
          "videoStatus",
          "videoCurrentTime",
          "scrollDepthThreshold",
          "scrollDepthUnits",
          "scrollDepthDirection",
          "elementVisibilityRatio",
          "elementVisibilityTime",
          "elementVisibilityFirstTime",
          "elementVisibilityRecentTime",
          "requestPath",
          "requestMethod",
          "clientName",
          "queryString",
          "serverPageLocationUrl",
          "serverPageLocationPath",
          "serverPageLocationHostname",
          "visitorRegion",
          "analyticsClientId",
          "analyticsSessionId",
          "analyticsSessionNumber"
        ]
      },
      "description": "Built-in variable types to enable/disable (required for those actions), e.g. [\"pageUrl\", \"clickText\"]. Ignored for \"list\"."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "action"
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

<a id="tool-create_version-fc39e936"></a>

## create_version

Handler: POSTs workspace :create\_version and reports compilerError=true as a tool error.

```text
Compiles a workspace into an immutable Container Version (the unit that gets published). SIDE EFFECT: the source workspace is DELETED and replaced by a fresh one — the response's newWorkspacePath points to the replacement; use it for any further edits, or old workspace paths will 404. Returns { containerVersion (with containerVersionId and full tag/trigger/variable snapshots), syncStatus, newWorkspacePath }. A compile failure comes back as compilerError=true with HTTP 200 and is reported as an error. Requires the tagmanager.edit.containerversions scope (edit.containers is NOT sufficient).
```

[Source](https://github.com/A1-x-Tech/mcp-google-tagmanager/blob/cd0ab59ad24f29685990bec2fcdb6d14cc2c6f88/src/tools/versions.ts#L28-L52) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account id (string)."
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "Container id (string)."
    },
    "workspace_id": {
      "type": "string",
      "minLength": 1,
      "description": "Workspace id (string) to compile. This workspace is deleted afterwards."
    },
    "name": {
      "type": "string",
      "description": "Version display name."
    },
    "notes": {
      "type": "string",
      "description": "Version notes (changelog entry)."
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
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<a id="tool-publish_version-0628e4c5"></a>

## publish_version

Handler: Gets a selected or live version or POSTs :publish with optional fingerprint, rejecting missing version\_id for get/publish.

```text
Container-version operations. action "publish" pushes a version live (replacing the currently published one; requires the tagmanager.publish scope; version_id required, fingerprint recommended). action "get" fetches one version by version_id. action "live" fetches the currently published version of the container (no version_id needed). Publish responses can carry compilerError=true with HTTP 200 — reported as an error. Returns the ContainerVersion (publish wraps it as { containerVersion, compilerError }).
```

[Source](https://github.com/A1-x-Tech/mcp-google-tagmanager/blob/cd0ab59ad24f29685990bec2fcdb6d14cc2c6f88/src/tools/versions.ts#L53-L92) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "minLength": 1,
      "description": "GTM account id (string)."
    },
    "container_id": {
      "type": "string",
      "minLength": 1,
      "description": "Container id (string)."
    },
    "action": {
      "type": "string",
      "enum": [
        "publish",
        "get",
        "live"
      ],
      "description": "What to do."
    },
    "version_id": {
      "type": "string",
      "description": "Container version id (string). Required for \"publish\" and \"get\"; ignored for \"live\"."
    },
    "fingerprint": {
      "type": "string",
      "description": "The version's last-seen fingerprint (\"publish\" only), for optimistic-concurrency safety."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "action"
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

<a id="tool-raw_request-81cb54d4"></a>

## raw_request

Handler: Dispatches GET, POST, PUT or DELETE to a relative GTM v2 path with repeated query values and an optional body.

```text
Escape hatch to call any Google Tag Manager API v2 path directly, for endpoints without a dedicated tool (environments, folders, templates, zones, workspace :sync / :quick_preview, version_headers, ...). `path` is relative to /tagmanager/v2/, e.g. "accounts/1/containers/2/environments". `query` values may be arrays for repeated params. Requests go through the same OAuth, rate limiter and retries as every other tool.
```

[Source](https://github.com/A1-x-Tech/mcp-google-tagmanager/blob/cd0ab59ad24f29685990bec2fcdb6d14cc2c6f88/src/tools/raw.ts#L7-L38) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "path": {
      "type": "string",
      "minLength": 1,
      "description": "API path relative to /tagmanager/v2/, e.g. \"accounts/1/containers/2/version_headers\"."
    },
    "method": {
      "type": "string",
      "enum": [
        "GET",
        "POST",
        "PUT",
        "DELETE"
      ],
      "description": "HTTP method. Defaults to GET."
    },
    "query": {
      "type": "object",
      "additionalProperties": {
        "anyOf": [
          {
            "type": "string"
          },
          {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        ]
      },
      "description": "Query parameters; use an array for repeated keys, e.g. { \"type\": [\"pageUrl\", \"event\"] }."
    },
    "body": {
      "type": "object",
      "additionalProperties": {},
      "description": "JSON request body (POST/PUT)."
    }
  },
  "required": [
    "path"
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
