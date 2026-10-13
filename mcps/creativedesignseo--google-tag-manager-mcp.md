# creativedesignseo/google-tag-manager-mcp

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/creativedesignseo/google-tag-manager-mcp) · [Machine-readable inventory](../data/mcps/creativedesignseo--google-tag-manager-mcp.json)

**3 extracted tools.** Lists accounts and containers and resolves firing-trigger names for tags in the first workspace.

Snapshot: 2026-10-13 · [55bb722f506a](https://github.com/creativedesignseo/google-tag-manager-mcp/tree/55bb722f506a4f45c0d24e5b0550929dbd197d22) · Method: source.

Exposure: All three tools are unconditionally advertised and dispatched. createGA4ConfigTag is an internal helper with no public registration or dispatch; version management is only a future README promise.

## Limits

- Static extraction of the literal tools/list array; authenticated GTM execution was not tested.
- List methods do not paginate; list_tags chooses the first workspace without user selection.
- Handlers return API errors as ordinary content error objects rather than MCP isError responses.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`list_accounts`](#tool-list_accounts-1090ba6a) | GTM | Lists GTM accounts through tagmanager.accounts.list and returns account data; API errors are returned as error objects. |
| [`list_containers`](#tool-list_containers-a53dbc4d) | GTM | Lists GTM containers under the supplied account path and returns container data; API errors are returned as error objects. |
| [`list_tags`](#tool-list_tags-86fc0f9c) | GTM | Selects the first workspace of the supplied GTM container, lists its tags and triggers, and returns tag names, types, IDs, parameters and resolved firing-trigger names. |

<a id="tool-list_accounts-1090ba6a"></a>

## list_accounts

Handler: Lists GTM accounts through tagmanager.accounts.list and returns account data; API errors are returned as error objects.

```text
Listar cuentas de GTM
```

[Source](https://github.com/creativedesignseo/google-tag-manager-mcp/blob/55bb722f506a4f45c0d24e5b0550929dbd197d22/mcp-server.js#L145-L145) · [Handler](https://github.com/creativedesignseo/google-tag-manager-mcp/blob/55bb722f506a4f45c0d24e5b0550929dbd197d22/mcp-server.js#L32-L37) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<a id="tool-list_containers-a53dbc4d"></a>

## list_containers

Handler: Lists GTM containers under the supplied account path and returns container data; API errors are returned as error objects.

```text
Listar contenedores de una cuenta
```

[Source](https://github.com/creativedesignseo/google-tag-manager-mcp/blob/55bb722f506a4f45c0d24e5b0550929dbd197d22/mcp-server.js#L146-L146) · [Handler](https://github.com/creativedesignseo/google-tag-manager-mcp/blob/55bb722f506a4f45c0d24e5b0550929dbd197d22/mcp-server.js#L40-L46) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountPath": {
      "type": "string",
      "description": "accounts/1234"
    }
  },
  "required": [
    "accountPath"
  ]
}
```

</details>

<a id="tool-list_tags-86fc0f9c"></a>

## list_tags

Handler: Selects the first workspace of the supplied GTM container, lists its tags and triggers, and returns tag names, types, IDs, parameters and resolved firing-trigger names.

```text
Listar etiquetas de un contenedor
```

[Source](https://github.com/creativedesignseo/google-tag-manager-mcp/blob/55bb722f506a4f45c0d24e5b0550929dbd197d22/mcp-server.js#L147-L147) · [Handler](https://github.com/creativedesignseo/google-tag-manager-mcp/blob/55bb722f506a4f45c0d24e5b0550929dbd197d22/mcp-server.js#L49-L91) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "containerPath": {
      "type": "string",
      "description": "accounts/123/containers/456"
    }
  },
  "required": [
    "containerPath"
  ]
}
```

</details>
