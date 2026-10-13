# jayweezy247/tracking-stack-mcp

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/jayweezy247/tracking-stack-mcp) · [Machine-readable inventory](../data/mcps/jayweezy247--tracking-stack-mcp.json)

**7 extracted tools.** Creates tracking workspaces and ensures GA4 event tags with create-only and dry-run checks.

Snapshot: 2026-10-13 · [dda0006d75a3](https://github.com/jayweezy247/tracking-stack-mcp/tree/dda0006d75a3786775c7a6f458b3284b90779011) · Method: source.

Exposure: All seven tools are always listed; execution requires product credentials. Create-only writes require literal boolean confirmed:true, otherwise local preview; shared process-local cap is 10 successful tool writes per rolling hour.

## Limits

- Static source extraction; no live API calls or credential-dependent behavior verified.
- List and duplicate-check handlers do not paginate Google results or WhatConverts results beyond accounts_per_page=250, so lists and duplicate guards may be incomplete.
- Schemas preserve the exposed literals; handlers impose additional validation absent from JSON Schema: trimmed nonempty strings (generally <=200 characters), GTM account ID <=32 characters and digits only, Analytics parent accounts/<digits>, HTTPS URL <=2048 characters, and positive integer WhatConverts account ID.
- GA4 creation is two sequential API writes without rollback; if stream creation fails, the property remains and the successful-write cap is not incremented. The process-local cap is checked before writes and has no concurrent reservation.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`wc_list_accounts`](#tool-wc_list_accounts-1adb8a95) | Other product | WhatConverts: retrieves up to 250 agency accounts and their embedded profiles. |
| [`wc_create_account`](#tool-wc_create_account-24dbc651) | Other product | WhatConverts: previews by default; confirmed true checks the shared write cap and case-insensitive duplicate account name before posting an account without a profile. |
| [`wc_create_profile`](#tool-wc_create_profile-8a8a15ac) | Other product | WhatConverts: previews by default; confirmed true checks the shared write cap, parent presence and agency-wide duplicate profile name before posting a profile. |
| [`ga4_list_properties`](#tool-ga4_list_properties-44fea7fa) | Other product | Google Analytics 4: lists accounts, properties and data streams with measurement IDs. |
| [`ga4_create_property`](#tool-ga4_create_property-ca91208a) | Other product | Google Analytics 4: previews by default; confirmed true checks the shared write cap and case-insensitive duplicate name before sequentially creating a USD property and HTTPS web stream. |
| [`gtm_list_containers`](#tool-gtm_list_containers-e45afd2b) | GTM | Lists GTM accounts and containers using Google Tag Manager v2, returning account IDs, container IDs, public IDs and names. |
| [`gtm_create_container`](#tool-gtm_create_container-67c96447) | GTM | Validates a numeric account ID and nonempty name, previews by default, and only with confirmed true checks the shared write cap and duplicate name before creating a web container without publishing. |

<a id="tool-wc_list_accounts-1adb8a95"></a>

## wc_list_accounts

Handler: WhatConverts: retrieves up to 250 agency accounts and their embedded profiles.

```text
Read-only — list all WhatConverts agency accounts and their profiles (ids + names).
```

[Source](https://github.com/jayweezy247/tracking-stack-mcp/blob/dda0006d75a3786775c7a6f458b3284b90779011/src/wc.ts#L40-L83) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<a id="tool-wc_create_account-24dbc651"></a>

## wc_create_account

Handler: WhatConverts: previews by default; confirmed true checks the shared write cap and case-insensitive duplicate account name before posting an account without a profile.

```text
⚠️ MUTATING — Create a WhatConverts account (one per client, matching the agency convention). Refuses if an account with the same name exists. Dry-run by default.
```

[Source](https://github.com/jayweezy247/tracking-stack-mcp/blob/dda0006d75a3786775c7a6f458b3284b90779011/src/wc.ts#L46-L108) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_name": {
      "type": "string",
      "description": "Client name, e.g. 'Acme Pools & Spas'."
    },
    "confirmed": {
      "type": "boolean",
      "description": "Must be true to execute. Defaults to false (dry run)."
    }
  },
  "required": [
    "account_name"
  ]
}
```

</details>

<a id="tool-wc_create_profile-8a8a15ac"></a>

## wc_create_profile

Handler: WhatConverts: previews by default; confirmed true checks the shared write cap, parent presence and agency-wide duplicate profile name before posting a profile.

```text
⚠️ MUTATING — Create a profile inside an existing WhatConverts account. Refuses if a profile with the same name exists anywhere in the agency (guards against the duplicate/wrong-parent mistake). Dry-run by default.
```

[Source](https://github.com/jayweezy247/tracking-stack-mcp/blob/dda0006d75a3786775c7a6f458b3284b90779011/src/wc.ts#L59-L142) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "number",
      "description": "Parent account id (from wc_list_accounts)."
    },
    "profile_name": {
      "type": "string"
    },
    "confirmed": {
      "type": "boolean",
      "description": "Must be true to execute. Defaults to false (dry run)."
    }
  },
  "required": [
    "account_id",
    "profile_name"
  ]
}
```

</details>

<a id="tool-ga4_list_properties-44fea7fa"></a>

## ga4_list_properties

Handler: Google Analytics 4: lists accounts, properties and data streams with measurement IDs.

```text
Read-only — list GA4 accounts and their properties (names + ids + measurement streams).
```

[Source](https://github.com/jayweezy247/tracking-stack-mcp/blob/dda0006d75a3786775c7a6f458b3284b90779011/src/google-tracking.ts#L37-L97) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<a id="tool-ga4_create_property-ca91208a"></a>

## ga4_create_property

Handler: Google Analytics 4: previews by default; confirmed true checks the shared write cap and case-insensitive duplicate name before sequentially creating a USD property and HTTPS web stream.

```text
⚠️ MUTATING — Create a GA4 property under an existing Analytics account, plus a web data stream (returns the G- measurement ID). Refuses on duplicate display name. Dry-run by default.
```

[Source](https://github.com/jayweezy247/tracking-stack-mcp/blob/dda0006d75a3786775c7a6f458b3284b90779011/src/google-tracking.ts#L42-L148) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "analytics_account": {
      "type": "string",
      "description": "Parent, e.g. 'accounts/12345678' (from ga4_list_properties)."
    },
    "display_name": {
      "type": "string",
      "description": "Property name, e.g. 'Acme Pools & Spas'."
    },
    "website_url": {
      "type": "string",
      "description": "https:// URL for the web data stream."
    },
    "time_zone": {
      "type": "string",
      "description": "IANA tz. Defaults to GA4_DEFAULT_TIME_ZONE env, else UTC."
    },
    "confirmed": {
      "type": "boolean",
      "description": "Must be true to execute. Defaults to false (dry run)."
    }
  },
  "required": [
    "analytics_account",
    "display_name",
    "website_url"
  ]
}
```

</details>

<a id="tool-gtm_list_containers-e45afd2b"></a>

## gtm_list_containers

Handler: Lists GTM accounts and containers using Google Tag Manager v2, returning account IDs, container IDs, public IDs and names.

```text
Read-only — list GTM accounts and their containers (names + public GTM-XXXX ids).
```

[Source](https://github.com/jayweezy247/tracking-stack-mcp/blob/dda0006d75a3786775c7a6f458b3284b90779011/src/google-tracking.ts#L58-L163) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<a id="tool-gtm_create_container-67c96447"></a>

## gtm_create_container

Handler: Validates a numeric account ID and nonempty name, previews by default, and only with confirmed true checks the shared write cap and duplicate name before creating a web container without publishing.

```text
⚠️ MUTATING — Create a web container in an existing GTM account. Returns the GTM-XXXX id. Refuses on duplicate name. Does NOT publish anything. Dry-run by default.
```

[Source](https://github.com/jayweezy247/tracking-stack-mcp/blob/dda0006d75a3786775c7a6f458b3284b90779011/src/google-tracking.ts#L63-L192) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "gtm_account_id": {
      "type": "string",
      "description": "GTM account id (from gtm_list_containers)."
    },
    "container_name": {
      "type": "string"
    },
    "confirmed": {
      "type": "boolean",
      "description": "Must be true to execute. Defaults to false (dry run)."
    }
  },
  "required": [
    "gtm_account_id",
    "container_name"
  ]
}
```

</details>
