# VKirill/ohmy-seo

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/VKirill/ohmy-seo) · [Machine-readable inventory](../data/mcps/vkirill--ohmy-seo.json)

**33 extracted tools.** Browse tracking resources, create workspace drafts, and preview confirmed trigger and variable edits.

Snapshot: 2026-10-13 · [4debd10b6a7f](https://github.com/VKirill/ohmy-seo/tree/4debd10b6a7f9b16c26fb1e2d5388f9948f85119) · Method: reconstructed.

Exposure: All 33 tools registered unconditionally; startup requires MCP_GTM_MASTER_KEY configuration. Separate sibling product servers excluded. Hosted aggregate gateway has an allowlist and modifies write descriptions/schemas; this catalog captures the standalone GTM server.

## Limits

- Schemas reconstructed by evaluating registration configuration only, using exact locked Zod 4.4.3 offline; no server startup, OAuth or GTM API operations were invoked.
- No credentialed integration verification; handlers use custom HTTP client and If-Match fingerprint concurrency mechanism.
- complete_google_oauth_flow is an exposed deprecated error-only stub.
- gtm_create_tag sends plural firingTriggerIds/blockingTriggerIds body fields; GTM resource uses singular firingTriggerId/blockingTriggerId (also reflected in this repo update-tag handler).
- gtm_create_version description says confirm defaults false, but actual registered schema has required boolean confirm without a default.
- List handlers issue a single request and do not exhaust API nextPageToken pagination.
- Hosted aggregate catalog differs from standalone GTM and is outside the selected server scope.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`list_google_oauth_apps`](#tool-list_google_oauth_apps-6f519f97) | Supporting | Lists OAuth applications from the local GTM encrypted database without exposing client secrets. |
| [`register_google_oauth_app`](#tool-register_google_oauth_app-65111950) | Supporting | Stores an OAuth application in the GTM database and rejects deprecated OOB redirect URIs. |
| [`delete_google_oauth_app`](#tool-delete_google_oauth_app-24c6e395) | Supporting | Deletes a local OAuth application, with a specific error when accounts still reference it. |
| [`list_google_accounts`](#tool-list_google_accounts-26fc6ef6) | Supporting | Lists locally registered Google accounts in the GTM package database. |
| [`start_google_oauth_flow`](#tool-start_google_oauth_flow-1dfd9e55) | Supporting | Runs Google OAuth through a loopback callback and stores the resulting account credentials. |
| [`complete_google_oauth_flow`](#tool-complete_google_oauth_flow-ae00b2e1) | Supporting | Deprecated stub always returns isError with instructions to use start\_google\_oauth\_flow. |
| [`delete_google_account`](#tool-delete_google_account-8cd43e61) | Supporting | Deletes a locally registered Google account by label. |
| [`set_default_google_account`](#tool-set_default_google_account-d0dc32b3) | Supporting | Sets a locally registered account as the default for the GTM package. |
| [`register_google_service_account`](#tool-register_google_service_account-e70ab3d6) | Supporting | Reads a service-account JSON key, verifies token acquisition and stores its encrypted credentials. |
| [`gtm_list_accounts`](#tool-gtm_list_accounts-c5d9b27f) | GTM | Reads GTM accounts through the v2 API and caches the extracted accounts array. |
| [`gtm_list_containers`](#tool-gtm_list_containers-e45afd2b) | GTM | Reads GTM containers under an account and caches the extracted containers array. |
| [`gtm_list_workspaces`](#tool-gtm_list_workspaces-248ce86f) | GTM | Reads GTM workspaces under a container and caches the extracted workspaces array. |
| [`gtm_list_tags`](#tool-gtm_list_tags-b585bc12) | GTM | Reads workspace tags and caches the extracted tags array. |
| [`gtm_list_triggers`](#tool-gtm_list_triggers-16b41a3c) | GTM | Reads workspace triggers and caches the extracted triggers array. |
| [`gtm_list_variables`](#tool-gtm_list_variables-81705a80) | GTM | Reads workspace variables and caches the extracted variables array. |
| [`gtm_list_versions`](#tool-gtm_list_versions-f9371c4c) | GTM | Reads container version\_headers and caches containerVersionHeader. |
| [`gtm_get_version`](#tool-gtm_get_version-c83b7c02) | GTM | Reads a container version and caches the response data. |
| [`gtm_list_user_permissions`](#tool-gtm_list_user_permissions-97b567b6) | GTM | Reads account user\_permissions without a cache. |
| [`gtm_create_workspace`](#tool-gtm_create_workspace-6324597f) | GTM | Previews by default or POSTs a new workspace when confirmed. |
| [`gtm_create_tag`](#tool-gtm_create_tag-c682840c) | GTM | Previews by default or POSTs a tag; firingTriggerIds/blockingTriggerIds are sent as plural body keys, inconsistent with GTM singular firingTriggerId/blockingTriggerId. |
| [`gtm_create_trigger`](#tool-gtm_create_trigger-99da4322) | GTM | Previews by default or POSTs a trigger with supplied filters and parameters. |
| [`gtm_create_variable`](#tool-gtm_create_variable-5b853337) | GTM | Previews by default or POSTs a variable with supplied parameters. |
| [`gtm_update_tag`](#tool-gtm_update_tag-23807743) | GTM | Previews or GETs the current tag and PUTs merged fields with a cached fingerprint sent through If-Match. |
| [`gtm_delete_tag`](#tool-gtm_delete_tag-42a56cac) | GTM | Previews or GETs the tag and DELETEs it with a cached fingerprint sent through If-Match. |
| [`gtm_create_version`](#tool-gtm_create_version-50a805d7) | GTM | Previews or POSTs workspace:create\_version; registered confirm is required despite description saying default false. |
| [`gtm_create_container`](#tool-gtm_create_container-67c96447) | GTM | Previews or POSTs a container with usageContext and optional domains/notes. |
| [`gtm_update_account`](#tool-gtm_update_account-860a61d8) | GTM | Previews without network calls or GETs the current account and PUTs merged name/shareData. |
| [`gtm_create_user_permission`](#tool-gtm_create_user_permission-78bb327e) | GTM | Previews or POSTs user\_permissions, mapping accountPermission to accountAccess.permission. |
| [`gtm_update_user_permission`](#tool-gtm_update_user_permission-c6505886) | GTM | Previews or PUTs supplied account/container access to a user permission. |
| [`gtm_publish_version`](#tool-gtm_publish_version-0cc97535) | GTM | Previews or POSTs versions/<versionId>:publish after confirmation and live acknowledgement. |
| [`gtm_rollback`](#tool-gtm_rollback-4f7f17f9) | GTM | Stores a five-minute rollback plan, atomically claims it, checks live fingerprint and publishes the target version after confirmation. |
| [`gtm_delete_container`](#tool-gtm_delete_container-87eaf656) | GTM | Previews or DELETEs the container after confirmation and matching live acknowledgement. |
| [`gtm_delete_user_permission`](#tool-gtm_delete_user_permission-d28d25e3) | GTM | Previews or DELETEs a user permission after confirmation and matching live acknowledgement. |

<a id="tool-list_google_oauth_apps-6f519f97"></a>

## list_google_oauth_apps

Handler: Lists OAuth applications from the local GTM encrypted database without exposing client secrets.

```text
Returns all Google OAuth applications registered in the local encrypted database. Each entry shows label, client_id, declared scopes, and created_at. Client secrets are never returned — stored encrypted. Use before starting an OAuth flow or to audit registered credentials.
```

[Source](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/index.ts#L136-L148) · [Handler](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/tools/list-google-oauth-apps.ts#L6-L13) · Schema: reconstructed.

<details>
<summary>Full input parameters</summary>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "openWorldHint": true,
  "idempotentHint": false
}
```

</details>

<a id="tool-register_google_oauth_app-65111950"></a>

## register_google_oauth_app

Handler: Stores an OAuth application in the GTM database and rejects deprecated OOB redirect URIs.

```text
Registers a new Google OAuth application in the local encrypted database. client_secret is AES-256 encrypted before storage. redirect_uri must be a loopback URI (http://127.0.0.1:PORT/oauth/callback) — OOB redirect is not supported (Google deprecated it 2023-01-31). After registration, use start_google_oauth_flow to connect an account.
```

[Source](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/index.ts#L151-L170) · [Handler](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/tools/register-google-oauth-app.ts#L6-L46) · Schema: reconstructed.

<details>
<summary>Full input parameters</summary>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "label": {
      "type": "string",
      "minLength": 1,
      "maxLength": 64,
      "description": "Short unique name for this app, e.g. 'my-gtm-app'"
    },
    "client_id": {
      "type": "string",
      "minLength": 8,
      "maxLength": 256,
      "description": "Google OAuth client_id from Google Cloud Console"
    },
    "client_secret": {
      "type": "string",
      "minLength": 8,
      "maxLength": 256,
      "description": "Google OAuth client_secret (stored encrypted)"
    },
    "scopes_declared": {
      "type": "string",
      "minLength": 1,
      "maxLength": 512,
      "description": "Space-delimited OAuth scopes"
    },
    "redirect_uri": {
      "type": "string",
      "minLength": 1,
      "description": "Loopback redirect URI, e.g. http://127.0.0.1:8765/oauth/callback"
    }
  },
  "required": [
    "label",
    "client_id",
    "client_secret",
    "scopes_declared",
    "redirect_uri"
  ]
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "openWorldHint": true,
  "idempotentHint": false
}
```

</details>

<a id="tool-delete_google_oauth_app-24c6e395"></a>

## delete_google_oauth_app

Handler: Deletes a local OAuth application, with a specific error when accounts still reference it.

```text
Deletes a registered Google OAuth application by label. Blocked if accounts are linked to it — delete those first with delete_google_account. Action is irreversible.
```

[Source](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/index.ts#L180-L192) · [Handler](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/tools/delete-google-oauth-app.ts#L6-L38) · Schema: reconstructed.

<details>
<summary>Full input parameters</summary>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "app_label": {
      "type": "string",
      "minLength": 1,
      "maxLength": 64,
      "description": "Label of the OAuth app to delete"
    }
  },
  "required": [
    "app_label"
  ]
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "openWorldHint": true,
  "idempotentHint": false
}
```

</details>

<a id="tool-list_google_accounts-26fc6ef6"></a>

## list_google_accounts

Handler: Lists locally registered Google accounts in the GTM package database.

```text
Returns all Google accounts connected via OAuth or Service Account stored in the local database. Shows label, google_email, auth_method, scopes_granted, expires_at, and is_default. Tokens are never returned — stored encrypted.
```

[Source](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/index.ts#L195-L206) · [Handler](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/tools/list-google-accounts.ts#L6-L13) · Schema: reconstructed.

<details>
<summary>Full input parameters</summary>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "openWorldHint": true,
  "idempotentHint": false
}
```

</details>

<a id="tool-start_google_oauth_flow-1dfd9e55"></a>

## start_google_oauth_flow

Handler: Runs Google OAuth through a loopback callback and stores the resulting account credentials.

```text
Begins a Google OAuth authorization code flow with automatic loopback callback. Opens a local HTTP listener, returns an authorize_url to open in a browser. Waits up to 5 minutes for the user to complete authorization, then saves the account. account_label must be free (not already taken — check list_google_accounts).
```

[Source](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/index.ts#L209-L225) · [Handler](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/tools/start-google-oauth-flow.ts#L13-L102) · Schema: reconstructed.

<details>
<summary>Full input parameters</summary>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "app_label": {
      "type": "string",
      "minLength": 1,
      "maxLength": 64,
      "description": "Label of the registered OAuth app to use"
    },
    "account_label": {
      "type": "string",
      "minLength": 1,
      "maxLength": 64,
      "description": "Desired label for the new account"
    },
    "login_hint": {
      "description": "Google email to pre-fill in consent screen (optional)",
      "type": "string"
    }
  },
  "required": [
    "app_label",
    "account_label"
  ]
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "openWorldHint": true,
  "idempotentHint": false
}
```

</details>

<a id="tool-complete_google_oauth_flow-ae00b2e1"></a>

## complete_google_oauth_flow

Handler: Deprecated stub always returns isError with instructions to use start\_google\_oauth\_flow.

```text
Deprecated. Use start_google_oauth_flow which auto-completes via loopback. OOB flow no longer supported since Google deprecated it on 2023-01-31.
```

[Source](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/index.ts#L233-L248) · [Handler](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/tools/complete-google-oauth-flow.ts#L6-L20) · Schema: reconstructed.

<details>
<summary>Full input parameters</summary>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "app_label": {
      "type": "string",
      "minLength": 1,
      "description": "Label of the registered OAuth app"
    },
    "account_label": {
      "type": "string",
      "minLength": 1,
      "description": "Desired label for the account"
    },
    "code": {
      "type": "string",
      "minLength": 1,
      "description": "Authorization code from Google"
    },
    "state": {
      "type": "string",
      "minLength": 1,
      "description": "State token from start_google_oauth_flow"
    }
  },
  "required": [
    "app_label",
    "account_label",
    "code",
    "state"
  ]
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "openWorldHint": true,
  "idempotentHint": false
}
```

</details>

<a id="tool-delete_google_account-8cd43e61"></a>

## delete_google_account

Handler: Deletes a locally registered Google account by label.

```text
Deletes a connected Google account by label. Removes tokens from the database. Does not revoke tokens on Google's side. To reconnect, run start_google_oauth_flow again.
```

[Source](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/index.ts#L257-L269) · [Handler](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/tools/delete-google-account.ts#L6-L22) · Schema: reconstructed.

<details>
<summary>Full input parameters</summary>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "account_label": {
      "type": "string",
      "minLength": 1,
      "maxLength": 64,
      "description": "Label of the account to delete"
    }
  },
  "required": [
    "account_label"
  ]
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "openWorldHint": true,
  "idempotentHint": false
}
```

</details>

<a id="tool-set_default_google_account-d0dc32b3"></a>

## set_default_google_account

Handler: Sets a locally registered account as the default for the GTM package.

```text
Marks a Google account as the default. Tools that accept an optional 'account' parameter will use this account when none is specified. Use list_google_accounts to see available labels.
```

[Source](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/index.ts#L272-L284) · [Handler](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/tools/set-default-google-account.ts#L6-L22) · Schema: reconstructed.

<details>
<summary>Full input parameters</summary>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "account_label": {
      "type": "string",
      "minLength": 1,
      "maxLength": 64,
      "description": "Label of the account to set as default"
    }
  },
  "required": [
    "account_label"
  ]
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "openWorldHint": true,
  "idempotentHint": false
}
```

</details>

<a id="tool-register_google_service_account-e70ab3d6"></a>

## register_google_service_account

Handler: Reads a service-account JSON key, verifies token acquisition and stores its encrypted credentials.

```text
Registers a Google Service Account from a JSON key file. Validates the key by obtaining an access token before saving. Required for tools that need Service Account authentication. Provide scopes as space-delimited string.
```

[Source](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/index.ts#L287-L302) · [Handler](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/tools/register-google-service-account.ts#L12-L72) · Schema: reconstructed.

<details>
<summary>Full input parameters</summary>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "account_label": {
      "type": "string",
      "minLength": 1,
      "maxLength": 64,
      "description": "Label for this service account, e.g. 'gtm-sa'"
    },
    "json_path": {
      "type": "string",
      "minLength": 1,
      "description": "Absolute path to the service account JSON key file"
    },
    "scopes": {
      "type": "string",
      "minLength": 1,
      "description": "Space-delimited OAuth scopes"
    }
  },
  "required": [
    "account_label",
    "json_path",
    "scopes"
  ]
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "openWorldHint": true,
  "idempotentHint": false
}
```

</details>

<a id="tool-gtm_list_accounts-c5d9b27f"></a>

## gtm_list_accounts

Handler: Reads GTM accounts through the v2 API and caches the extracted accounts array.

```text
Lists all GTM accounts accessible to the resolved Google account.
```

[Source](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/index.ts#L342-L352) · [Handler](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/tools/gtm-list-accounts.ts#L29-L54) · Schema: reconstructed.

<details>
<summary>Full input parameters</summary>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "account": {
      "description": "Label of a registered Google account (optional; uses default if omitted).",
      "type": "string"
    }
  }
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "openWorldHint": true,
  "idempotentHint": false
}
```

</details>

<a id="tool-gtm_list_containers-e45afd2b"></a>

## gtm_list_containers

Handler: Reads GTM containers under an account and caches the extracted containers array.

```text
Lists all containers in a GTM account.
```

[Source](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/index.ts#L355-L366) · [Handler](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/tools/gtm-list-containers.ts#L33-L58) · Schema: reconstructed.

<details>
<summary>Full input parameters</summary>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "account": {
      "description": "Label of a registered Google account (optional; uses default if omitted).",
      "type": "string"
    },
    "accountId": {
      "type": "string",
      "description": "GTM Account ID (numeric string)."
    }
  },
  "required": [
    "accountId"
  ]
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "openWorldHint": true,
  "idempotentHint": false
}
```

</details>

<a id="tool-gtm_list_workspaces-248ce86f"></a>

## gtm_list_workspaces

Handler: Reads GTM workspaces under a container and caches the extracted workspaces array.

```text
Lists all workspaces in a GTM container.
```

[Source](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/index.ts#L369-L381) · [Handler](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/tools/gtm-list-workspaces.ts#L37-L70) · Schema: reconstructed.

<details>
<summary>Full input parameters</summary>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "account": {
      "description": "Label of a registered Google account (optional; uses default if omitted).",
      "type": "string"
    },
    "accountId": {
      "type": "string",
      "description": "GTM Account ID (numeric string)."
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID (numeric string)."
    }
  },
  "required": [
    "accountId",
    "containerId"
  ]
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "openWorldHint": true,
  "idempotentHint": false
}
```

</details>

<a id="tool-gtm_list_tags-b585bc12"></a>

## gtm_list_tags

Handler: Reads workspace tags and caches the extracted tags array.

```text
Lists all tags in a GTM workspace.
```

[Source](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/index.ts#L391-L404) · [Handler](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/tools/gtm-list-tags.ts#L32-L73) · Schema: reconstructed.

<details>
<summary>Full input parameters</summary>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "account": {
      "description": "Label of a registered Google account (optional; uses default if omitted).",
      "type": "string"
    },
    "accountId": {
      "type": "string",
      "description": "GTM Account ID."
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID."
    },
    "workspaceId": {
      "type": "string",
      "description": "GTM Workspace ID."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ]
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "openWorldHint": true,
  "idempotentHint": false
}
```

</details>

<a id="tool-gtm_list_triggers-16b41a3c"></a>

## gtm_list_triggers

Handler: Reads workspace triggers and caches the extracted triggers array.

```text
Lists all triggers in a GTM workspace.
```

[Source](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/index.ts#L415-L428) · [Handler](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/tools/gtm-list-triggers.ts#L32-L73) · Schema: reconstructed.

<details>
<summary>Full input parameters</summary>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "account": {
      "description": "Label of a registered Google account (optional; uses default if omitted).",
      "type": "string"
    },
    "accountId": {
      "type": "string",
      "description": "GTM Account ID."
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID."
    },
    "workspaceId": {
      "type": "string",
      "description": "GTM Workspace ID."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ]
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "openWorldHint": true,
  "idempotentHint": false
}
```

</details>

<a id="tool-gtm_list_variables-81705a80"></a>

## gtm_list_variables

Handler: Reads workspace variables and caches the extracted variables array.

```text
Lists all variables in a GTM workspace.
```

[Source](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/index.ts#L439-L452) · [Handler](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/tools/gtm-list-variables.ts#L32-L73) · Schema: reconstructed.

<details>
<summary>Full input parameters</summary>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "account": {
      "description": "Label of a registered Google account (optional; uses default if omitted).",
      "type": "string"
    },
    "accountId": {
      "type": "string",
      "description": "GTM Account ID."
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID."
    },
    "workspaceId": {
      "type": "string",
      "description": "GTM Workspace ID."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ]
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "openWorldHint": true,
  "idempotentHint": false
}
```

</details>

<a id="tool-gtm_list_versions-f9371c4c"></a>

## gtm_list_versions

Handler: Reads container version\_headers and caches containerVersionHeader.

```text
Lists version headers for a GTM container. Short TTL (5 min) because the edit cycle may create new versions frequently.
```

[Source](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/index.ts#L463-L475) · [Handler](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/tools/gtm-list-versions.ts#L31-L70) · Schema: reconstructed.

<details>
<summary>Full input parameters</summary>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "account": {
      "description": "Label of a registered Google account (optional; uses default if omitted).",
      "type": "string"
    },
    "accountId": {
      "type": "string",
      "description": "GTM Account ID."
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID."
    }
  },
  "required": [
    "accountId",
    "containerId"
  ]
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "openWorldHint": true,
  "idempotentHint": false
}
```

</details>

<a id="tool-gtm_get_version-c83b7c02"></a>

## gtm_get_version

Handler: Reads a container version and caches the response data.

```text
Fetches a specific GTM container version by version ID.
```

[Source](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/index.ts#L485-L498) · [Handler](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/tools/gtm-get-version.ts#L32-L70) · Schema: reconstructed.

<details>
<summary>Full input parameters</summary>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "account": {
      "description": "Label of a registered Google account (optional; uses default if omitted).",
      "type": "string"
    },
    "accountId": {
      "type": "string",
      "description": "GTM Account ID."
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID."
    },
    "versionId": {
      "type": "string",
      "description": "GTM Container Version ID."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "versionId"
  ]
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "openWorldHint": true,
  "idempotentHint": false
}
```

</details>

<a id="tool-gtm_list_user_permissions-97b567b6"></a>

## gtm_list_user_permissions

Handler: Reads account user\_permissions without a cache.

```text
Lists all users with access to a GTM account and their account/container permissions. Not cached — permission grants change out-of-band and staleness has access-control consequences.
```

[Source](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/index.ts#L513-L526) · [Handler](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/tools/gtm-list-user-permissions.ts#L35-L53) · Schema: reconstructed.

<details>
<summary>Full input parameters</summary>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "account": {
      "description": "Label of a registered Google account (optional; uses default if omitted).",
      "type": "string"
    },
    "accountId": {
      "type": "string",
      "description": "GTM Account ID (numeric string)."
    }
  },
  "required": [
    "accountId"
  ]
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "openWorldHint": true,
  "idempotentHint": false
}
```

</details>

<a id="tool-gtm_create_workspace-6324597f"></a>

## gtm_create_workspace

Handler: Previews by default or POSTs a new workspace when confirmed.

```text
WRITE — creates a GTM Workspace in the given Container. Requires confirm:true.
```

[Source](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/index.ts#L539-L554) · [Handler](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/tools/gtm-create-workspace.ts#L55-L86) · Schema: reconstructed.

<details>
<summary>Full input parameters</summary>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "account": {
      "description": "Label of a registered Google account (optional; uses default if omitted).",
      "type": "string"
    },
    "accountId": {
      "type": "string",
      "description": "GTM Account ID (numeric string)."
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID (numeric string)."
    },
    "name": {
      "type": "string",
      "description": "Workspace name."
    },
    "description": {
      "description": "Workspace description (optional).",
      "type": "string"
    },
    "confirm": {
      "default": false,
      "description": "Set to true to execute. False returns dry-run preview.",
      "type": "boolean"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "name"
  ]
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "openWorldHint": true,
  "idempotentHint": false
}
```

</details>

<a id="tool-gtm_create_tag-c682840c"></a>

## gtm_create_tag

Handler: Previews by default or POSTs a tag; firingTriggerIds/blockingTriggerIds are sent as plural body keys, inconsistent with GTM singular firingTriggerId/blockingTriggerId.

```text
WRITE — creates a GTM Tag in the given Workspace. Requires confirm:true.
```

[Source](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/index.ts#L567-L587) · [Handler](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/tools/gtm-create-tag.ts#L106-L143) · Schema: reconstructed.

<details>
<summary>Full input parameters</summary>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "account": {
      "description": "Label of a registered Google account (optional; uses default if omitted).",
      "type": "string"
    },
    "accountId": {
      "type": "string",
      "description": "GTM Account ID (numeric string)."
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID (numeric string)."
    },
    "workspaceId": {
      "type": "string",
      "description": "GTM Workspace ID (numeric string)."
    },
    "name": {
      "type": "string",
      "description": "Tag name."
    },
    "type": {
      "type": "string",
      "description": "Tag type, e.g. 'ua', 'html', 'gclidAdw'."
    },
    "parameter": {
      "description": "Tag configuration parameters.",
      "type": "array",
      "items": {
        "type": "object",
        "propertyNames": {
          "type": "string"
        },
        "additionalProperties": {}
      }
    },
    "firingTriggerIds": {
      "description": "IDs of triggers that fire this tag.",
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "blockingTriggerIds": {
      "description": "IDs of triggers that block this tag.",
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "tagFiringOption": {
      "description": "Tag firing option, e.g. 'oncePerLoad', 'unlimited'.",
      "type": "string"
    },
    "confirm": {
      "default": false,
      "description": "Set to true to execute. False returns dry-run preview.",
      "type": "boolean"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "name",
    "type"
  ]
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "openWorldHint": true,
  "idempotentHint": false
}
```

</details>

<a id="tool-gtm_create_trigger-99da4322"></a>

## gtm_create_trigger

Handler: Previews by default or POSTs a trigger with supplied filters and parameters.

```text
WRITE — creates a GTM Trigger in the given Workspace. Requires confirm:true.
```

[Source](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/index.ts#L605-L624) · [Handler](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/tools/gtm-create-trigger.ts#L92-L128) · Schema: reconstructed.

<details>
<summary>Full input parameters</summary>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "account": {
      "description": "Label of a registered Google account (optional; uses default if omitted).",
      "type": "string"
    },
    "accountId": {
      "type": "string",
      "description": "GTM Account ID (numeric string)."
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID (numeric string)."
    },
    "workspaceId": {
      "type": "string",
      "description": "GTM Workspace ID (numeric string)."
    },
    "name": {
      "type": "string",
      "description": "Trigger name."
    },
    "type": {
      "type": "string",
      "description": "Trigger type, e.g. 'pageview', 'click', 'customEvent'."
    },
    "filter": {
      "description": "Trigger filter conditions.",
      "type": "array",
      "items": {
        "type": "object",
        "propertyNames": {
          "type": "string"
        },
        "additionalProperties": {}
      }
    },
    "customEventFilter": {
      "description": "Custom event filter conditions.",
      "type": "array",
      "items": {
        "type": "object",
        "propertyNames": {
          "type": "string"
        },
        "additionalProperties": {}
      }
    },
    "parameter": {
      "description": "Additional trigger parameters.",
      "type": "array",
      "items": {
        "type": "object",
        "propertyNames": {
          "type": "string"
        },
        "additionalProperties": {}
      }
    },
    "confirm": {
      "default": false,
      "description": "Set to true to execute. False returns dry-run preview.",
      "type": "boolean"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "name",
    "type"
  ]
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "openWorldHint": true,
  "idempotentHint": false
}
```

</details>

<a id="tool-gtm_create_variable-5b853337"></a>

## gtm_create_variable

Handler: Previews by default or POSTs a variable with supplied parameters.

```text
WRITE — creates a GTM Variable in the given Workspace. Requires confirm:true.
```

[Source](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/index.ts#L641-L658) · [Handler](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/tools/gtm-create-variable.ts#L74-L108) · Schema: reconstructed.

<details>
<summary>Full input parameters</summary>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "account": {
      "description": "Label of a registered Google account (optional; uses default if omitted).",
      "type": "string"
    },
    "accountId": {
      "type": "string",
      "description": "GTM Account ID (numeric string)."
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID (numeric string)."
    },
    "workspaceId": {
      "type": "string",
      "description": "GTM Workspace ID (numeric string)."
    },
    "name": {
      "type": "string",
      "description": "Variable name."
    },
    "type": {
      "type": "string",
      "description": "Variable type, e.g. 'v' (constant), 'dlv' (dataLayer)."
    },
    "parameter": {
      "description": "Variable configuration parameters.",
      "type": "array",
      "items": {
        "type": "object",
        "propertyNames": {
          "type": "string"
        },
        "additionalProperties": {}
      }
    },
    "confirm": {
      "default": false,
      "description": "Set to true to execute. False returns dry-run preview.",
      "type": "boolean"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "name",
    "type"
  ]
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "openWorldHint": true,
  "idempotentHint": false
}
```

</details>

<a id="tool-gtm_update_tag-23807743"></a>

## gtm_update_tag

Handler: Previews or GETs the current tag and PUTs merged fields with a cached fingerprint sent through If-Match.

```text
WRITE — updates a GTM Tag via PUT. Requires a cached etag (run gtm_list_tags first). confirm:false returns dry-run preview; confirm:true executes the update.
```

[Source](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/index.ts#L673-L697) · [Handler](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/tools/gtm-update-tag.ts#L44-L89) · Schema: reconstructed.

<details>
<summary>Full input parameters</summary>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "account": {
      "description": "Registered Google account label (optional).",
      "type": "string"
    },
    "accountId": {
      "type": "string",
      "description": "GTM Account ID."
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID."
    },
    "workspaceId": {
      "type": "string",
      "description": "GTM Workspace ID."
    },
    "tagId": {
      "type": "string",
      "description": "GTM Tag ID to update."
    },
    "name": {
      "description": "Tag display name.",
      "type": "string"
    },
    "type": {
      "description": "Tag type (e.g. 'ua', 'gaawe').",
      "type": "string"
    },
    "parameter": {
      "description": "Tag parameters.",
      "type": "array",
      "items": {
        "type": "object",
        "propertyNames": {
          "type": "string"
        },
        "additionalProperties": {}
      }
    },
    "firingTriggerId": {
      "description": "Firing trigger IDs.",
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "blockingTriggerId": {
      "description": "Blocking trigger IDs.",
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "tagFiringOption": {
      "description": "Tag firing option.",
      "type": "string"
    },
    "notes": {
      "description": "Optional notes.",
      "type": "string"
    },
    "confirm": {
      "default": false,
      "description": "true = execute; false = dry-run preview.",
      "type": "boolean"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "tagId"
  ]
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "openWorldHint": true,
  "idempotentHint": false
}
```

</details>

<a id="tool-gtm_delete_tag-42a56cac"></a>

## gtm_delete_tag

Handler: Previews or GETs the tag and DELETEs it with a cached fingerprint sent through If-Match.

```text
WRITE — deletes a GTM Tag. Requires a cached etag (run gtm_list_tags first). confirm:false returns a dry-run preview; confirm:true executes the delete.
```

[Source](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/index.ts#L717-L734) · [Handler](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/tools/gtm-delete-tag.ts#L46-L110) · Schema: reconstructed.

<details>
<summary>Full input parameters</summary>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "account": {
      "description": "Label of a registered Google account (optional; uses default if omitted).",
      "type": "string"
    },
    "accountId": {
      "type": "string",
      "description": "GTM Account ID."
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID."
    },
    "workspaceId": {
      "type": "string",
      "description": "GTM Workspace ID."
    },
    "tagId": {
      "type": "string",
      "description": "GTM Tag ID to delete."
    },
    "confirm": {
      "default": false,
      "description": "Set to true to execute the delete. false returns a dry-run preview.",
      "type": "boolean"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "tagId"
  ]
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "openWorldHint": true,
  "idempotentHint": false
}
```

</details>

<a id="tool-gtm_create_version-50a805d7"></a>

## gtm_create_version

Handler: Previews or POSTs workspace:create\_version; registered confirm is required despite description saying default false.

```text
Creates a checkpoint from current workspace state. Does NOT publish — workspace remains active. Use gtm_publish_version separately to make this version live. With confirm:false (default) returns a dry-run preview. With confirm:true executes the create_version call.
```

[Source](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/index.ts#L747-L766) · [Handler](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/tools/gtm-create-version.ts#L55-L104) · Schema: reconstructed.

<details>
<summary>Full input parameters</summary>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "account": {
      "description": "Label of a registered Google account (optional; uses default if omitted).",
      "type": "string"
    },
    "accountId": {
      "type": "string",
      "description": "GTM Account ID (numeric string)."
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID (numeric string)."
    },
    "workspaceId": {
      "type": "string",
      "description": "GTM Workspace ID (numeric string)."
    },
    "name": {
      "type": "string",
      "description": "Version name (human-readable label for the checkpoint)."
    },
    "notes": {
      "description": "Optional notes describing what changed in this version.",
      "type": "string"
    },
    "confirm": {
      "type": "boolean",
      "description": "Set to true to execute. False (default) returns dry-run preview."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "name",
    "confirm"
  ]
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "openWorldHint": true,
  "idempotentHint": false
}
```

</details>

<a id="tool-gtm_create_container-67c96447"></a>

## gtm_create_container

Handler: Previews or POSTs a container with usageContext and optional domains/notes.

```text
WRITE — creates a GTM Container in the given Account. Requires confirm:true.
```

[Source](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/index.ts#L780-L796) · [Handler](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/tools/gtm-create-container.ts#L75-L111) · Schema: reconstructed.

<details>
<summary>Full input parameters</summary>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "account": {
      "description": "Label of a registered Google account (optional; uses default if omitted).",
      "type": "string"
    },
    "accountId": {
      "type": "string",
      "description": "GTM Account ID (numeric string)."
    },
    "name": {
      "type": "string",
      "description": "Container display name."
    },
    "usageContext": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Usage contexts, e.g. ['web'], ['android'], ['ios']."
    },
    "domainName": {
      "description": "Domain names associated with the container (optional).",
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "notes": {
      "description": "Container notes (optional).",
      "type": "string"
    },
    "confirm": {
      "default": false,
      "description": "Set to true to execute. False returns dry-run preview.",
      "type": "boolean"
    }
  },
  "required": [
    "accountId",
    "name",
    "usageContext"
  ]
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "openWorldHint": true,
  "idempotentHint": false
}
```

</details>

<a id="tool-gtm_update_account-860a61d8"></a>

## gtm_update_account

Handler: Previews without network calls or GETs the current account and PUTs merged name/shareData.

```text
WRITE — updates a GTM Account (name, shareData). Fetches the current account first to obtain a fresh fingerprint/etag and the full resource, then PUTs the merged resource. confirm:false returns dry-run preview with NO network call; confirm:true executes the read + update.
```

[Source](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/index.ts#L810-L827) · [Handler](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/tools/gtm-update-account.ts#L45-L100) · Schema: reconstructed.

<details>
<summary>Full input parameters</summary>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "account": {
      "description": "Registered Google account label (optional).",
      "type": "string"
    },
    "accountId": {
      "type": "string",
      "description": "GTM Account ID to update."
    },
    "name": {
      "description": "Account display name.",
      "type": "string"
    },
    "shareData": {
      "description": "Whether data may be shared anonymously with Google.",
      "type": "boolean"
    },
    "confirm": {
      "default": false,
      "description": "true = execute; false = dry-run preview.",
      "type": "boolean"
    }
  },
  "required": [
    "accountId"
  ]
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "openWorldHint": true,
  "idempotentHint": false
}
```

</details>

<a id="tool-gtm_create_user_permission-78bb327e"></a>

## gtm_create_user_permission

Handler: Previews or POSTs user\_permissions, mapping accountPermission to accountAccess.permission.

```text
WRITE — grants a user Account and/or Container access on a GTM account. Requires confirm:true.
```

[Source](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/index.ts#L839-L863) · [Handler](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/tools/gtm-create-user-permission.ts#L86-L125) · Schema: reconstructed.

<details>
<summary>Full input parameters</summary>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "account": {
      "description": "Label of a registered Google account (optional; uses default if omitted).",
      "type": "string"
    },
    "accountId": {
      "type": "string",
      "description": "GTM Account ID (numeric string)."
    },
    "emailAddress": {
      "type": "string",
      "description": "Email address of the user to grant access to."
    },
    "accountPermission": {
      "type": "string",
      "enum": [
        "noAccess",
        "user",
        "admin"
      ],
      "description": "Account-level permission for the user."
    },
    "containerAccess": {
      "description": "Per-container permissions to grant (optional).",
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "containerId": {
            "type": "string",
            "description": "GTM Container ID."
          },
          "permission": {
            "type": "string",
            "enum": [
              "noAccess",
              "read",
              "edit",
              "approve",
              "publish"
            ],
            "description": "Container-level permission."
          }
        },
        "required": [
          "containerId",
          "permission"
        ]
      }
    },
    "confirm": {
      "default": false,
      "description": "Set to true to execute. False returns dry-run preview.",
      "type": "boolean"
    }
  },
  "required": [
    "accountId",
    "emailAddress",
    "accountPermission"
  ]
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "openWorldHint": true,
  "idempotentHint": false
}
```

</details>

<a id="tool-gtm_update_user_permission-c6505886"></a>

## gtm_update_user_permission

Handler: Previews or PUTs supplied account/container access to a user permission.

```text
WRITE — updates a user's Account/Container access on a GTM account via PUT. Requires permissionId (from gtm_list_user_permissions). confirm:false returns dry-run preview; confirm:true executes the update.
```

[Source](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/index.ts#L878-L905) · [Handler](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/tools/gtm-update-user-permission.ts#L86-L116) · Schema: reconstructed.

<details>
<summary>Full input parameters</summary>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "account": {
      "description": "Registered Google account label (optional).",
      "type": "string"
    },
    "accountId": {
      "type": "string",
      "description": "GTM Account ID (numeric string)."
    },
    "permissionId": {
      "type": "string",
      "description": "UserPermission ID to update."
    },
    "emailAddress": {
      "description": "Email address of the user (usually unchanged).",
      "type": "string"
    },
    "accountPermission": {
      "description": "Account-level permission for the user.",
      "type": "string",
      "enum": [
        "noAccess",
        "user",
        "admin"
      ]
    },
    "containerAccess": {
      "description": "Per-container permissions (replaces the existing set when provided).",
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "containerId": {
            "type": "string",
            "description": "GTM Container ID."
          },
          "permission": {
            "type": "string",
            "enum": [
              "noAccess",
              "read",
              "edit",
              "approve",
              "publish"
            ],
            "description": "Container-level permission."
          }
        },
        "required": [
          "containerId",
          "permission"
        ]
      }
    },
    "confirm": {
      "default": false,
      "description": "true = execute; false = dry-run preview.",
      "type": "boolean"
    }
  },
  "required": [
    "accountId",
    "permissionId"
  ]
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "openWorldHint": true,
  "idempotentHint": false
}
```

</details>

<a id="tool-gtm_publish_version-0cc97535"></a>

## gtm_publish_version

Handler: Previews or POSTs versions/<versionId>:publish after confirmation and live acknowledgement.

```text
DANGER — affects live container. Publishes a specific GTM container version, making it live. Verify version_id is the intended checkpoint. Two-step gate: confirm:true + acknowledge_live:'I-UNDERSTAND-THIS-IS-LIVE:<version_id>'. With confirm:false (default) returns a dry-run preview with the target version and a warning.
```

[Source](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/index.ts#L925-L944) · [Handler](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/tools/gtm-publish-version.ts#L55-L100) · Schema: reconstructed.

<details>
<summary>Full input parameters</summary>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "account": {
      "description": "Label of a registered Google account (optional; uses default if omitted).",
      "type": "string"
    },
    "accountId": {
      "type": "string",
      "description": "GTM Account ID (numeric string)."
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID (numeric string)."
    },
    "versionId": {
      "type": "string",
      "description": "Target GTM Container Version ID to make live."
    },
    "confirm": {
      "default": false,
      "description": "Set to true to execute publish. False (default) returns dry-run preview.",
      "type": "boolean"
    },
    "acknowledge_live": {
      "description": "Required when confirm:true. Must be: I-UNDERSTAND-THIS-IS-LIVE:<versionId>",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "versionId"
  ]
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "openWorldHint": true,
  "idempotentHint": false
}
```

</details>

<a id="tool-gtm_rollback-4f7f17f9"></a>

## gtm_rollback

Handler: Stores a five-minute rollback plan, atomically claims it, checks live fingerprint and publishes the target version after confirmation.

```text
DANGER — affects live container. Two-step DB-backed rollback. Step 1 (confirm:false): previews rollback from live → target version, stores a plan (5 min TTL), returns plan_id. Step 2 (confirm:true + plan_id + acknowledge_live): atomically claims plan, re-checks fingerprint, publishes target version. acknowledge_live format: I-UNDERSTAND-THIS-IS-LIVE:<containerId>.
```

[Source](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/index.ts#L957-L978) · [Handler](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/tools/gtm-rollback.ts#L36-L159) · Schema: reconstructed.

<details>
<summary>Full input parameters</summary>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "account": {
      "description": "Label of a registered Google account (optional).",
      "type": "string"
    },
    "accountId": {
      "type": "string",
      "description": "GTM Account ID."
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID."
    },
    "workspaceId": {
      "type": "string",
      "description": "GTM Workspace ID."
    },
    "to_version_id": {
      "type": "string",
      "description": "Target version to roll back to."
    },
    "plan_id": {
      "description": "Required for confirm step. UUID from step 1.",
      "type": "string"
    },
    "confirm": {
      "default": false,
      "description": "False (default) = preview. True = execute.",
      "type": "boolean"
    },
    "acknowledge_live": {
      "description": "Required when confirm:true. Format: I-UNDERSTAND-THIS-IS-LIVE:<containerId>",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "to_version_id"
  ]
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "openWorldHint": true,
  "idempotentHint": false
}
```

</details>

<a id="tool-gtm_delete_container-87eaf656"></a>

## gtm_delete_container

Handler: Previews or DELETEs the container after confirmation and matching live acknowledgement.

```text
DANGER — irreversibly deletes a GTM Container and everything inside it (tags, triggers, variables, workspaces, versions). Verify containerId with gtm_list_containers first. Two-step gate: confirm:true + acknowledge_live:'I-UNDERSTAND-THIS-IS-LIVE:<containerId>'. With confirm:false (default) returns a dry-run preview with a warning.
```

[Source](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/index.ts#L993-L1011) · [Handler](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/tools/gtm-delete-container.ts#L47-L105) · Schema: reconstructed.

<details>
<summary>Full input parameters</summary>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "account": {
      "description": "Label of a registered Google account (optional; uses default if omitted).",
      "type": "string"
    },
    "accountId": {
      "type": "string",
      "description": "GTM Account ID (numeric string)."
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID to delete (numeric string)."
    },
    "confirm": {
      "default": false,
      "description": "Set to true to execute the delete. False (default) returns dry-run preview.",
      "type": "boolean"
    },
    "acknowledge_live": {
      "description": "Required when confirm:true. Must be: I-UNDERSTAND-THIS-IS-LIVE:<containerId>",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId"
  ]
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "openWorldHint": true,
  "idempotentHint": false
}
```

</details>

<a id="tool-gtm_delete_user_permission-d28d25e3"></a>

## gtm_delete_user_permission

Handler: Previews or DELETEs a user permission after confirmation and matching live acknowledgement.

```text
DANGER — revokes a user's access to a GTM account and all of its containers. Verify permissionId with gtm_list_user_permissions first. Two-step gate: confirm:true + acknowledge_live:'I-UNDERSTAND-THIS-IS-LIVE:<permissionId>'. With confirm:false (default) returns a dry-run preview with a warning.
```

[Source](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/index.ts#L1023-L1041) · [Handler](https://github.com/VKirill/ohmy-seo/blob/4debd10b6a7f9b16c26fb1e2d5388f9948f85119/packages/gtm/src/tools/gtm-delete-user-permission.ts#L48-L106) · Schema: reconstructed.

<details>
<summary>Full input parameters</summary>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "account": {
      "description": "Label of a registered Google account (optional; uses default if omitted).",
      "type": "string"
    },
    "accountId": {
      "type": "string",
      "description": "GTM Account ID (numeric string)."
    },
    "permissionId": {
      "type": "string",
      "description": "UserPermission ID to revoke."
    },
    "confirm": {
      "default": false,
      "description": "Set to true to execute the delete. False (default) returns dry-run preview.",
      "type": "boolean"
    },
    "acknowledge_live": {
      "description": "Required when confirm:true. Must be: I-UNDERSTAND-THIS-IS-LIVE:<permissionId>",
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "permissionId"
  ]
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "openWorldHint": true,
  "idempotentHint": false
}
```

</details>
