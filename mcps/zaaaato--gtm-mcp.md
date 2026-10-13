# zaaaato/gtm-mcp

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/zaaaato/gtm-mcp) · [Machine-readable inventory](../data/mcps/zaaaato--gtm-mcp.json)

**20 extracted tools.** Call GTM REST endpoints with arbitrary query/body objects and use dedicated tag, trigger, and variable wrappers.

Snapshot: 2026-10-13 · [2d95682d6ce9](https://github.com/zaaaato/gtm-mcp/tree/2d95682d6ce9bcd6602f6c72933ea20fa47c8a50) · Method: source.

Exposure: All 20 tools registered unconditionally; OAuth and GTM operations require configured credentials/token, but registration does not.

## Limits

- Offline static extraction of literal tools/list response; no SDK runtime or authenticated API execution performed.
- Payload objects are intentionally unrestricted in the published schemas; Google resource fields are not enumerated.
- Collection wrappers return a single response; callers must use gtm_request query parameters for further pagination.
- Default OAuth scopes support container editing and readonly; other generic endpoints may require user-supplied scopes.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`oauth_get_consent_url`](#tool-oauth_get_consent_url-57dc6649) | Supporting | Generate a Google OAuth consent URL using configured client credentials and optional scopes. |
| [`oauth_exchange_code`](#tool-oauth_exchange_code-3b9310de) | Supporting | Exchange an authorization code at Google OAuth and merge and persist returned credentials to a local token file. |
| [`oauth_status`](#tool-oauth_status-6c967a2b) | Supporting | Read the local token file and report token metadata; authenticated reflects file presence, not token validity. |
| [`oauth_revoke`](#tool-oauth_revoke-61b47d52) | Supporting | Revoke stored Google OAuth credentials and then delete the local token file. |
| [`gtm_request`](#tool-gtm_request-eab024f9) | GTM | Send an authenticated HTTP request under the Google Tag Manager v2 base URL; omitted method becomes GET and query values must be scalar. |
| [`gtm_list_accounts`](#tool-gtm_list_accounts-c5d9b27f) | GTM | GET the corresponding Google Tag Manager v2 resource collection, normalizing supplied IDs to their final path segment; returns one API response without pagination aggregation. |
| [`gtm_list_containers`](#tool-gtm_list_containers-e45afd2b) | GTM | GET the corresponding Google Tag Manager v2 resource collection, normalizing supplied IDs to their final path segment; returns one API response without pagination aggregation. |
| [`gtm_list_workspaces`](#tool-gtm_list_workspaces-248ce86f) | GTM | GET the corresponding Google Tag Manager v2 resource collection, normalizing supplied IDs to their final path segment; returns one API response without pagination aggregation. |
| [`gtm_list_tags`](#tool-gtm_list_tags-b585bc12) | GTM | GET the corresponding Google Tag Manager v2 resource collection, normalizing supplied IDs to their final path segment; returns one API response without pagination aggregation. |
| [`gtm_create_tag`](#tool-gtm_create_tag-c682840c) | GTM | POST the supplied unrestricted resource object to the GTM workspace collection. |
| [`gtm_update_tag`](#tool-gtm_update_tag-23807743) | GTM | PUT the supplied unrestricted resource object to the GTM workspace resource ID. |
| [`gtm_delete_tag`](#tool-gtm_delete_tag-42a56cac) | GTM | DELETE the GTM workspace resource by ID. |
| [`gtm_list_triggers`](#tool-gtm_list_triggers-16b41a3c) | GTM | GET the corresponding Google Tag Manager v2 resource collection, normalizing supplied IDs to their final path segment; returns one API response without pagination aggregation. |
| [`gtm_create_trigger`](#tool-gtm_create_trigger-99da4322) | GTM | POST the supplied unrestricted resource object to the GTM workspace collection. |
| [`gtm_update_trigger`](#tool-gtm_update_trigger-ce48de45) | GTM | PUT the supplied unrestricted resource object to the GTM workspace resource ID. |
| [`gtm_delete_trigger`](#tool-gtm_delete_trigger-dac3085f) | GTM | DELETE the GTM workspace resource by ID. |
| [`gtm_list_variables`](#tool-gtm_list_variables-81705a80) | GTM | GET the corresponding Google Tag Manager v2 resource collection, normalizing supplied IDs to their final path segment; returns one API response without pagination aggregation. |
| [`gtm_create_variable`](#tool-gtm_create_variable-5b853337) | GTM | POST the supplied unrestricted resource object to the GTM workspace collection. |
| [`gtm_update_variable`](#tool-gtm_update_variable-898f92d4) | GTM | PUT the supplied unrestricted resource object to the GTM workspace resource ID. |
| [`gtm_delete_variable`](#tool-gtm_delete_variable-9bd36787) | GTM | DELETE the GTM workspace resource by ID. |

<a id="tool-oauth_get_consent_url-57dc6649"></a>

## oauth_get_consent_url

Handler: Generate a Google OAuth consent URL using configured client credentials and optional scopes.

```text
Generate Google OAuth consent URL for GTM access. Open the URL, authorize, and copy the code.
```

[Source](https://github.com/zaaaato/gtm-mcp/blob/2d95682d6ce9bcd6602f6c72933ea20fa47c8a50/src/server.ts#L131-L147) · [Handler](https://github.com/zaaaato/gtm-mcp/blob/2d95682d6ce9bcd6602f6c72933ea20fa47c8a50/src/auth.ts#L94-L114) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "scopes": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Optional OAuth scopes. Defaults to tagmanager.edit.containers + tagmanager.readonly."
    }
  },
  "additionalProperties": false
}
```

</details>

<a id="tool-oauth_exchange_code-3b9310de"></a>

## oauth_exchange_code

Handler: Exchange an authorization code at Google OAuth and merge and persist returned credentials to a local token file.

```text
Exchange OAuth authorization code for tokens and store them locally.
```

[Source](https://github.com/zaaaato/gtm-mcp/blob/2d95682d6ce9bcd6602f6c72933ea20fa47c8a50/src/server.ts#L148-L162) · [Handler](https://github.com/zaaaato/gtm-mcp/blob/2d95682d6ce9bcd6602f6c72933ea20fa47c8a50/src/auth.ts#L116-L139) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "code": {
      "type": "string",
      "description": "Authorization code returned by Google OAuth"
    }
  },
  "required": [
    "code"
  ],
  "additionalProperties": false
}
```

</details>

<a id="tool-oauth_status-6c967a2b"></a>

## oauth_status

Handler: Read the local token file and report token metadata; authenticated reflects file presence, not token validity.

```text
Check OAuth authentication status and stored token metadata.
```

[Source](https://github.com/zaaaato/gtm-mcp/blob/2d95682d6ce9bcd6602f6c72933ea20fa47c8a50/src/server.ts#L163-L171) · [Handler](https://github.com/zaaaato/gtm-mcp/blob/2d95682d6ce9bcd6602f6c72933ea20fa47c8a50/src/auth.ts#L73-L92) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {},
  "additionalProperties": false
}
```

</details>

<a id="tool-oauth_revoke-61b47d52"></a>

## oauth_revoke

Handler: Revoke stored Google OAuth credentials and then delete the local token file.

```text
Revoke current OAuth credentials and delete local token file.
```

[Source](https://github.com/zaaaato/gtm-mcp/blob/2d95682d6ce9bcd6602f6c72933ea20fa47c8a50/src/server.ts#L172-L180) · [Handler](https://github.com/zaaaato/gtm-mcp/blob/2d95682d6ce9bcd6602f6c72933ea20fa47c8a50/src/auth.ts#L141-L166) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {},
  "additionalProperties": false
}
```

</details>

<a id="tool-gtm_request-eab024f9"></a>

## gtm_request

Handler: Send an authenticated HTTP request under the Google Tag Manager v2 base URL; omitted method becomes GET and query values must be scalar.

```text
Call any GTM REST v2 endpoint using authenticated OAuth credentials.
```

[Source](https://github.com/zaaaato/gtm-mcp/blob/2d95682d6ce9bcd6602f6c72933ea20fa47c8a50/src/server.ts#L181-L209) · [Handler](https://github.com/zaaaato/gtm-mcp/blob/2d95682d6ce9bcd6602f6c72933ea20fa47c8a50/src/gtm-client.ts#L89-L118) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "method": {
      "type": "string",
      "enum": [
        "GET",
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
      ]
    },
    "path": {
      "type": "string",
      "description": "Endpoint path under /tagmanager/v2. Example: /accounts or /accounts/{accountId}/containers"
    },
    "query": {
      "type": "object",
      "description": "Optional query parameters"
    },
    "body": {
      "type": "object",
      "description": "Optional request body for POST/PUT/PATCH"
    }
  },
  "required": [
    "path"
  ],
  "additionalProperties": false
}
```

</details>

<a id="tool-gtm_list_accounts-c5d9b27f"></a>

## gtm_list_accounts

Handler: GET the corresponding Google Tag Manager v2 resource collection, normalizing supplied IDs to their final path segment; returns one API response without pagination aggregation.

```text
List GTM accounts available to the authenticated user.
```

[Source](https://github.com/zaaaato/gtm-mcp/blob/2d95682d6ce9bcd6602f6c72933ea20fa47c8a50/src/server.ts#L210-L218) · [Handler](https://github.com/zaaaato/gtm-mcp/blob/2d95682d6ce9bcd6602f6c72933ea20fa47c8a50/src/gtm-client.ts#L120-L122) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {},
  "additionalProperties": false
}
```

</details>

<a id="tool-gtm_list_containers-e45afd2b"></a>

## gtm_list_containers

Handler: GET the corresponding Google Tag Manager v2 resource collection, normalizing supplied IDs to their final path segment; returns one API response without pagination aggregation.

```text
List containers in a GTM account.
```

[Source](https://github.com/zaaaato/gtm-mcp/blob/2d95682d6ce9bcd6602f6c72933ea20fa47c8a50/src/server.ts#L219-L230) · [Handler](https://github.com/zaaaato/gtm-mcp/blob/2d95682d6ce9bcd6602f6c72933ea20fa47c8a50/src/gtm-client.ts#L124-L130) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string"
    }
  },
  "required": [
    "accountId"
  ],
  "additionalProperties": false
}
```

</details>

<a id="tool-gtm_list_workspaces-248ce86f"></a>

## gtm_list_workspaces

Handler: GET the corresponding Google Tag Manager v2 resource collection, normalizing supplied IDs to their final path segment; returns one API response without pagination aggregation.

```text
List workspaces in a GTM container.
```

[Source](https://github.com/zaaaato/gtm-mcp/blob/2d95682d6ce9bcd6602f6c72933ea20fa47c8a50/src/server.ts#L231-L243) · [Handler](https://github.com/zaaaato/gtm-mcp/blob/2d95682d6ce9bcd6602f6c72933ea20fa47c8a50/src/gtm-client.ts#L132-L142) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string"
    },
    "containerId": {
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId"
  ],
  "additionalProperties": false
}
```

</details>

<a id="tool-gtm_list_tags-b585bc12"></a>

## gtm_list_tags

Handler: GET the corresponding Google Tag Manager v2 resource collection, normalizing supplied IDs to their final path segment; returns one API response without pagination aggregation.

```text
List tags in a GTM workspace.
```

[Source](https://github.com/zaaaato/gtm-mcp/blob/2d95682d6ce9bcd6602f6c72933ea20fa47c8a50/src/server.ts#L244-L257) · [Handler](https://github.com/zaaaato/gtm-mcp/blob/2d95682d6ce9bcd6602f6c72933ea20fa47c8a50/src/gtm-client.ts#L144-L156) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string"
    },
    "containerId": {
      "type": "string"
    },
    "workspaceId": {
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "additionalProperties": false
}
```

</details>

<a id="tool-gtm_create_tag-c682840c"></a>

## gtm_create_tag

Handler: POST the supplied unrestricted resource object to the GTM workspace collection.

```text
Create a tag in a GTM workspace.
```

[Source](https://github.com/zaaaato/gtm-mcp/blob/2d95682d6ce9bcd6602f6c72933ea20fa47c8a50/src/server.ts#L258-L272) · [Handler](https://github.com/zaaaato/gtm-mcp/blob/2d95682d6ce9bcd6602f6c72933ea20fa47c8a50/src/gtm-client.ts#L158-L172) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string"
    },
    "containerId": {
      "type": "string"
    },
    "workspaceId": {
      "type": "string"
    },
    "tag": {
      "type": "object"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "tag"
  ],
  "additionalProperties": false
}
```

</details>

<a id="tool-gtm_update_tag-23807743"></a>

## gtm_update_tag

Handler: PUT the supplied unrestricted resource object to the GTM workspace resource ID.

```text
Update an existing GTM tag.
```

[Source](https://github.com/zaaaato/gtm-mcp/blob/2d95682d6ce9bcd6602f6c72933ea20fa47c8a50/src/server.ts#L273-L288) · [Handler](https://github.com/zaaaato/gtm-mcp/blob/2d95682d6ce9bcd6602f6c72933ea20fa47c8a50/src/gtm-client.ts#L174-L190) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string"
    },
    "containerId": {
      "type": "string"
    },
    "workspaceId": {
      "type": "string"
    },
    "tagId": {
      "type": "string"
    },
    "tag": {
      "type": "object"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "tagId",
    "tag"
  ],
  "additionalProperties": false
}
```

</details>

<a id="tool-gtm_delete_tag-42a56cac"></a>

## gtm_delete_tag

Handler: DELETE the GTM workspace resource by ID.

```text
Delete a GTM tag by ID.
```

[Source](https://github.com/zaaaato/gtm-mcp/blob/2d95682d6ce9bcd6602f6c72933ea20fa47c8a50/src/server.ts#L289-L303) · [Handler](https://github.com/zaaaato/gtm-mcp/blob/2d95682d6ce9bcd6602f6c72933ea20fa47c8a50/src/gtm-client.ts#L192-L206) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string"
    },
    "containerId": {
      "type": "string"
    },
    "workspaceId": {
      "type": "string"
    },
    "tagId": {
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "tagId"
  ],
  "additionalProperties": false
}
```

</details>

<a id="tool-gtm_list_triggers-16b41a3c"></a>

## gtm_list_triggers

Handler: GET the corresponding Google Tag Manager v2 resource collection, normalizing supplied IDs to their final path segment; returns one API response without pagination aggregation.

```text
List triggers in a GTM workspace.
```

[Source](https://github.com/zaaaato/gtm-mcp/blob/2d95682d6ce9bcd6602f6c72933ea20fa47c8a50/src/server.ts#L304-L317) · [Handler](https://github.com/zaaaato/gtm-mcp/blob/2d95682d6ce9bcd6602f6c72933ea20fa47c8a50/src/gtm-client.ts#L208-L220) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string"
    },
    "containerId": {
      "type": "string"
    },
    "workspaceId": {
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "additionalProperties": false
}
```

</details>

<a id="tool-gtm_create_trigger-99da4322"></a>

## gtm_create_trigger

Handler: POST the supplied unrestricted resource object to the GTM workspace collection.

```text
Create a trigger in a GTM workspace.
```

[Source](https://github.com/zaaaato/gtm-mcp/blob/2d95682d6ce9bcd6602f6c72933ea20fa47c8a50/src/server.ts#L318-L332) · [Handler](https://github.com/zaaaato/gtm-mcp/blob/2d95682d6ce9bcd6602f6c72933ea20fa47c8a50/src/gtm-client.ts#L222-L236) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string"
    },
    "containerId": {
      "type": "string"
    },
    "workspaceId": {
      "type": "string"
    },
    "trigger": {
      "type": "object"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "trigger"
  ],
  "additionalProperties": false
}
```

</details>

<a id="tool-gtm_update_trigger-ce48de45"></a>

## gtm_update_trigger

Handler: PUT the supplied unrestricted resource object to the GTM workspace resource ID.

```text
Update an existing GTM trigger.
```

[Source](https://github.com/zaaaato/gtm-mcp/blob/2d95682d6ce9bcd6602f6c72933ea20fa47c8a50/src/server.ts#L333-L354) · [Handler](https://github.com/zaaaato/gtm-mcp/blob/2d95682d6ce9bcd6602f6c72933ea20fa47c8a50/src/gtm-client.ts#L238-L254) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string"
    },
    "containerId": {
      "type": "string"
    },
    "workspaceId": {
      "type": "string"
    },
    "triggerId": {
      "type": "string"
    },
    "trigger": {
      "type": "object"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "triggerId",
    "trigger"
  ],
  "additionalProperties": false
}
```

</details>

<a id="tool-gtm_delete_trigger-dac3085f"></a>

## gtm_delete_trigger

Handler: DELETE the GTM workspace resource by ID.

```text
Delete a GTM trigger by ID.
```

[Source](https://github.com/zaaaato/gtm-mcp/blob/2d95682d6ce9bcd6602f6c72933ea20fa47c8a50/src/server.ts#L355-L369) · [Handler](https://github.com/zaaaato/gtm-mcp/blob/2d95682d6ce9bcd6602f6c72933ea20fa47c8a50/src/gtm-client.ts#L256-L270) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string"
    },
    "containerId": {
      "type": "string"
    },
    "workspaceId": {
      "type": "string"
    },
    "triggerId": {
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "triggerId"
  ],
  "additionalProperties": false
}
```

</details>

<a id="tool-gtm_list_variables-81705a80"></a>

## gtm_list_variables

Handler: GET the corresponding Google Tag Manager v2 resource collection, normalizing supplied IDs to their final path segment; returns one API response without pagination aggregation.

```text
List variables in a GTM workspace.
```

[Source](https://github.com/zaaaato/gtm-mcp/blob/2d95682d6ce9bcd6602f6c72933ea20fa47c8a50/src/server.ts#L370-L383) · [Handler](https://github.com/zaaaato/gtm-mcp/blob/2d95682d6ce9bcd6602f6c72933ea20fa47c8a50/src/gtm-client.ts#L272-L284) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string"
    },
    "containerId": {
      "type": "string"
    },
    "workspaceId": {
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "additionalProperties": false
}
```

</details>

<a id="tool-gtm_create_variable-5b853337"></a>

## gtm_create_variable

Handler: POST the supplied unrestricted resource object to the GTM workspace collection.

```text
Create a variable in a GTM workspace.
```

[Source](https://github.com/zaaaato/gtm-mcp/blob/2d95682d6ce9bcd6602f6c72933ea20fa47c8a50/src/server.ts#L384-L398) · [Handler](https://github.com/zaaaato/gtm-mcp/blob/2d95682d6ce9bcd6602f6c72933ea20fa47c8a50/src/gtm-client.ts#L286-L300) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string"
    },
    "containerId": {
      "type": "string"
    },
    "workspaceId": {
      "type": "string"
    },
    "variable": {
      "type": "object"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "variable"
  ],
  "additionalProperties": false
}
```

</details>

<a id="tool-gtm_update_variable-898f92d4"></a>

## gtm_update_variable

Handler: PUT the supplied unrestricted resource object to the GTM workspace resource ID.

```text
Update an existing GTM variable.
```

[Source](https://github.com/zaaaato/gtm-mcp/blob/2d95682d6ce9bcd6602f6c72933ea20fa47c8a50/src/server.ts#L399-L420) · [Handler](https://github.com/zaaaato/gtm-mcp/blob/2d95682d6ce9bcd6602f6c72933ea20fa47c8a50/src/gtm-client.ts#L302-L318) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string"
    },
    "containerId": {
      "type": "string"
    },
    "workspaceId": {
      "type": "string"
    },
    "variableId": {
      "type": "string"
    },
    "variable": {
      "type": "object"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "variableId",
    "variable"
  ],
  "additionalProperties": false
}
```

</details>

<a id="tool-gtm_delete_variable-9bd36787"></a>

## gtm_delete_variable

Handler: DELETE the GTM workspace resource by ID.

```text
Delete a GTM variable by ID.
```

[Source](https://github.com/zaaaato/gtm-mcp/blob/2d95682d6ce9bcd6602f6c72933ea20fa47c8a50/src/server.ts#L421-L434) · [Handler](https://github.com/zaaaato/gtm-mcp/blob/2d95682d6ce9bcd6602f6c72933ea20fa47c8a50/src/gtm-client.ts#L320-L334) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string"
    },
    "containerId": {
      "type": "string"
    },
    "workspaceId": {
      "type": "string"
    },
    "variableId": {
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "variableId"
  ],
  "additionalProperties": false
}
```

</details>
