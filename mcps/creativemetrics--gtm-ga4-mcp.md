# CreativeMetrics/gtm-ga4-mcp

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/CreativeMetrics/gtm-ga4-mcp) · [Machine-readable inventory](../data/mcps/creativemetrics--gtm-ga4-mcp.json)

**47 extracted tools.** Copies templates, builds tags from website scans, manages permissions, and attempts cross-container duplication.

Snapshot: 2026-10-13 · [2f274468eaf7](https://github.com/CreativeMetrics/gtm-ga4-mcp/tree/2f274468eaf7dcf3fbb9d29e1d997a83bd88b302) · Method: source.

Exposure: All 47 registered tools are listed unconditionally; every non-auth call, including scan_url and local Looker URL generation, loads local Google OAuth credentials.

## Limits

- Static extraction of exact literal registration; no dependencies loaded and no authenticated or browser operations executed.
- OAuth uses urn:ietf:wg:oauth:2.0:oob; current OAuth login compatibility was not verified.
- gtm_duplicate_container cleanEntity strips parentFolderId before folder remapping and variable name references are not rewritten for prefix/suffix.
- compare_url_with_container does not compute the advertised missing-tag classifications.
- gsc_search_analytics advertises filters but its schema/dispatch does not expose or forward dimensionFilterGroups.
- List handlers generally do not paginate; template installation depends on current GitHub main/template.tpl URLs, and Looker template IDs were not verified.
- Source descriptions mention defaults/bounds, but literal schemas often omit default/minimum/maximum; preserved exactly.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`get_auth_url`](#tool-get_auth_url-dd56d1b1) | Supporting | Builds a Google OAuth authorization URL from local client credentials using the out-of-band redirect URI. |
| [`exchange_auth_code`](#tool-exchange_auth_code-7e32e24e) | Supporting | Exchanges an OAuth authorization code using the out-of-band redirect URI and writes local token.json. |
| [`gtm_list_accounts`](#tool-gtm_list_accounts-c5d9b27f) | GTM | list accounts through the GTM v2 API. |
| [`gtm_list_containers`](#tool-gtm_list_containers-e45afd2b) | GTM | list containers through the GTM v2 API. |
| [`gtm_create_workspace`](#tool-gtm_create_workspace-6324597f) | GTM | create workspace through the GTM v2 API. |
| [`gtm_copy_template`](#tool-gtm_copy_template-c5299fcf) | GTM | Copies a named template with templateData between resolved workspaces, skipping an existing destination match. |
| [`gtm_list_templates`](#tool-gtm_list_templates-8d77f0ae) | GTM | list templates through the GTM v2 API, resolving an omitted workspace to Default Workspace or the first workspace. |
| [`gtm_list_tags`](#tool-gtm_list_tags-b585bc12) | GTM | list tags through the GTM v2 API, resolving an omitted workspace to Default Workspace or the first workspace. |
| [`gtm_create_tag`](#tool-gtm_create_tag-c682840c) | GTM | create tag through the GTM v2 API, resolving an omitted workspace to Default Workspace or the first workspace. |
| [`gtm_update_tag`](#tool-gtm_update_tag-23807743) | GTM | update tag through the GTM v2 API, resolving an omitted workspace to Default Workspace or the first workspace. |
| [`gtm_delete_tag`](#tool-gtm_delete_tag-42a56cac) | GTM | delete tag through the GTM v2 API, resolving an omitted workspace to Default Workspace or the first workspace. |
| [`gtm_list_triggers`](#tool-gtm_list_triggers-16b41a3c) | GTM | list triggers through the GTM v2 API, resolving an omitted workspace to Default Workspace or the first workspace. |
| [`gtm_create_trigger`](#tool-gtm_create_trigger-99da4322) | GTM | create trigger through the GTM v2 API, resolving an omitted workspace to Default Workspace or the first workspace. |
| [`gtm_update_trigger`](#tool-gtm_update_trigger-ce48de45) | GTM | update trigger through the GTM v2 API, resolving an omitted workspace to Default Workspace or the first workspace. |
| [`gtm_delete_trigger`](#tool-gtm_delete_trigger-dac3085f) | GTM | delete trigger through the GTM v2 API, resolving an omitted workspace to Default Workspace or the first workspace. |
| [`gtm_list_variables`](#tool-gtm_list_variables-81705a80) | GTM | list variables through the GTM v2 API, resolving an omitted workspace to Default Workspace or the first workspace. |
| [`gtm_create_variable`](#tool-gtm_create_variable-5b853337) | GTM | create variable through the GTM v2 API, resolving an omitted workspace to Default Workspace or the first workspace. |
| [`gtm_update_variable`](#tool-gtm_update_variable-898f92d4) | GTM | update variable through the GTM v2 API, resolving an omitted workspace to Default Workspace or the first workspace. |
| [`gtm_delete_variable`](#tool-gtm_delete_variable-9bd36787) | GTM | delete variable through the GTM v2 API, resolving an omitted workspace to Default Workspace or the first workspace. |
| [`gtm_duplicate_container`](#tool-gtm_duplicate_container-cfe2061d) | GTM | Creates a destination workspace and attempts template, folder, built-in variable, variable, trigger and tag copying with throttling and partial ID remapping. |
| [`gtm_list_users`](#tool-gtm_list_users-1dbe4682) | GTM | list users through the GTM v2 API. |
| [`gtm_add_user`](#tool-gtm_add_user-7491e3ac) | GTM | Creates a GTM user permission with account permission defaulting to user and supplied container permissions. |
| [`gtm_update_user`](#tool-gtm_update_user-055161bf) | GTM | Updates GTM user permissions, resetting omitted account permission to user and omitted container permissions to an empty array. |
| [`gtm_remove_user`](#tool-gtm_remove_user-f78eb008) | GTM | remove user through the GTM v2 API. |
| [`gtm_publish_container`](#tool-gtm_publish_container-513cc8f7) | GTM | Creates a version from the resolved workspace and publishes that container version. |
| [`scan_url`](#tool-scan_url-56a18a25) | Supporting | Launches Puppeteer, accepts supported cookie banners and detects tracking tags and IDs from HTML, requests and JavaScript; dispatch still loads Google credentials. |
| [`create_tags_from_url`](#tool-create_tags_from_url-9ea9f60f) | GTM | Scans a website and creates an import workspace, All Pages trigger, supported templates and tags, collecting per-tag failures. |
| [`compare_url_with_container`](#tool-compare_url_with_container-b5b8ca2c) | GTM | Returns detected website tags and GTM tag summaries side by side; the declared mismatch classification is not implemented. |
| [`ga4_list_properties`](#tool-ga4_list_properties-44fea7fa) | Other product | Google Analytics: list properties through the GA4 Admin API. |
| [`ga4_list_custom_dimensions`](#tool-ga4_list_custom_dimensions-75905509) | Other product | Google Analytics: list custom dimensions through the GA4 Admin API. |
| [`ga4_create_custom_dimension`](#tool-ga4_create_custom_dimension-2ce8700e) | Other product | Google Analytics: create custom dimension through the GA4 Admin API. |
| [`ga4_duplicate_custom_dimensions`](#tool-ga4_duplicate_custom_dimensions-f0899340) | Other product | Google Analytics: copies source custom dimensions into a target property, collecting individual errors. |
| [`ga4_list_custom_metrics`](#tool-ga4_list_custom_metrics-64631ca9) | Other product | Google Analytics: list custom metrics through the GA4 Admin API. |
| [`ga4_run_report`](#tool-ga4_run_report-a0a35566) | Other product | Google Analytics: calls the GA4 Data API runReport with requested metrics, dimensions and dates; limit defaults to 10. |
| [`ga4_list_conversion_events`](#tool-ga4_list_conversion_events-bfbcc836) | Other product | Google Analytics: list conversion events through the GA4 Admin API. |
| [`ga4_list_data_streams`](#tool-ga4_list_data_streams-e2cea14d) | Other product | Google Analytics: list data streams through the GA4 Admin API. |
| [`ga4_list_audiences`](#tool-ga4_list_audiences-35c4ca43) | Other product | Google Analytics: list audiences through the GA4 Admin API. |
| [`ga4_list_key_events`](#tool-ga4_list_key_events-ac1a65f2) | Other product | Google Analytics: list key events through the GA4 Admin API. |
| [`ga4_create_key_event`](#tool-ga4_create_key_event-503e5cec) | Other product | Google Analytics: create key event through the GA4 Admin API. |
| [`ga4_compare_properties`](#tool-ga4_compare_properties-db3a7f02) | Other product | Google Analytics: compares custom dimension, custom metric and key event names and returns data stream summaries for two GA4 properties. |
| [`ga4_looker_report_url`](#tool-ga4_looker_report_url-cae430e2) | Other product | Google Analytics/Looker Studio: generates a report creation URL using hard-coded template IDs and GA4 property ID. |
| [`gtm_check_tag_health`](#tool-gtm_check_tag_health-2c453f64) | GTM | Compares fixed important GA4 event counts across recent periods and flags drops, stopped events and paused GTM tags; zero threshold falls back to 0.8. |
| [`gsc_list_sites`](#tool-gsc_list_sites-69b36040) | Other product | Google Search Console: lists accessible verified sites. |
| [`gsc_top_queries`](#tool-gsc_top_queries-f3356404) | Other product | Google Search Console: queries recent search analytics by query, defaulting to 28 days and 25 rows. |
| [`gsc_top_pages`](#tool-gsc_top_pages-f18fb1c2) | Other product | Google Search Console: queries recent search analytics by page, defaulting to 28 days and 25 rows. |
| [`gsc_compare_periods`](#tool-gsc_compare_periods-2b628d41) | Other product | Google Search Console: compares query metrics for two date periods, returning only queries found in the current top 50. |
| [`gsc_search_analytics`](#tool-gsc_search_analytics-dbefc78e) | Other product | Google Search Console: queries dates and dimensions, defaulting to query and 25 rows; advertised custom filters are not forwarded by dispatch. |

<a id="tool-get_auth_url-dd56d1b1"></a>

## get_auth_url

Handler: Builds a Google OAuth authorization URL from local client credentials using the out-of-band redirect URI.

```text
Genera il link di autorizzazione OAuth2 per Google. Da usare al primo avvio.
```

[Source](https://github.com/CreativeMetrics/gtm-ga4-mcp/blob/2f274468eaf7dcf3fbb9d29e1d997a83bd88b302/index.js#L25-L28) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<a id="tool-exchange_auth_code-7e32e24e"></a>

## exchange_auth_code

Handler: Exchanges an OAuth authorization code using the out-of-band redirect URI and writes local token.json.

```text
Completa il login scambiando il codice OAuth con un token di accesso.
```

[Source](https://github.com/CreativeMetrics/gtm-ga4-mcp/blob/2f274468eaf7dcf3fbb9d29e1d997a83bd88b302/index.js#L30-L37) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "code": {
      "type": "string",
      "description": "Codice ricevuto da Google dopo il login"
    }
  },
  "required": [
    "code"
  ]
}
```

</details>

<a id="tool-gtm_list_accounts-c5d9b27f"></a>

## gtm_list_accounts

Handler: list accounts through the GTM v2 API.

```text
Elenca tutti gli account Google Tag Manager accessibili.
```

[Source](https://github.com/CreativeMetrics/gtm-ga4-mcp/blob/2f274468eaf7dcf3fbb9d29e1d997a83bd88b302/index.js#L41-L44) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<a id="tool-gtm_list_containers-e45afd2b"></a>

## gtm_list_containers

Handler: list containers through the GTM v2 API.

```text
Elenca i container GTM di un account.
```

[Source](https://github.com/CreativeMetrics/gtm-ga4-mcp/blob/2f274468eaf7dcf3fbb9d29e1d997a83bd88b302/index.js#L46-L53) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "ID account GTM"
    }
  },
  "required": [
    "account_id"
  ]
}
```

</details>

<a id="tool-gtm_create_workspace-6324597f"></a>

## gtm_create_workspace

Handler: create workspace through the GTM v2 API.

```text
Crea un nuovo workspace GTM. Utile dopo una pubblicazione per iniziare un nuovo set di modifiche.
```

[Source](https://github.com/CreativeMetrics/gtm-ga4-mcp/blob/2f274468eaf7dcf3fbb9d29e1d997a83bd88b302/index.js#L55-L67) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "container_id": {
      "type": "string"
    },
    "name": {
      "type": "string",
      "description": "Nome del workspace (es. \"Modifiche maggio 2025\")"
    },
    "description": {
      "type": "string",
      "description": "Descrizione opzionale"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "name"
  ]
}
```

</details>

<a id="tool-gtm_copy_template-c5299fcf"></a>

## gtm_copy_template

Handler: Copies a named template with templateData between resolved workspaces, skipping an existing destination match.

```text
Copia un singolo template da un container GTM a un altro per nome. Utile per installare un template specifico senza fare una duplicazione completa.
```

[Source](https://github.com/CreativeMetrics/gtm-ga4-mcp/blob/2f274468eaf7dcf3fbb9d29e1d997a83bd88b302/index.js#L69-L84) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "src_account_id": {
      "type": "string"
    },
    "src_container_id": {
      "type": "string"
    },
    "src_workspace_id": {
      "type": "string",
      "description": "Opzionale"
    },
    "template_name": {
      "type": "string",
      "description": "Nome esatto del template da copiare"
    },
    "dst_account_id": {
      "type": "string"
    },
    "dst_container_id": {
      "type": "string"
    },
    "dst_workspace_id": {
      "type": "string",
      "description": "Opzionale"
    }
  },
  "required": [
    "src_account_id",
    "src_container_id",
    "template_name",
    "dst_account_id",
    "dst_container_id"
  ]
}
```

</details>

<a id="tool-gtm_list_templates-8d77f0ae"></a>

## gtm_list_templates

Handler: list templates through the GTM v2 API, resolving an omitted workspace to Default Workspace or the first workspace.

```text
Elenca i template installati in un workspace GTM, incluso il loro tipo (cvt_...) e templateId.
```

[Source](https://github.com/CreativeMetrics/gtm-ga4-mcp/blob/2f274468eaf7dcf3fbb9d29e1d997a83bd88b302/index.js#L86-L97) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "container_id": {
      "type": "string"
    },
    "workspace_id": {
      "type": "string",
      "description": "Opzionale"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ]
}
```

</details>

<a id="tool-gtm_list_tags-b585bc12"></a>

## gtm_list_tags

Handler: list tags through the GTM v2 API, resolving an omitted workspace to Default Workspace or the first workspace.

```text
Elenca i tag in un workspace GTM.
```

[Source](https://github.com/CreativeMetrics/gtm-ga4-mcp/blob/2f274468eaf7dcf3fbb9d29e1d997a83bd88b302/index.js#L100-L111) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "container_id": {
      "type": "string"
    },
    "workspace_id": {
      "type": "string",
      "description": "Opzionale"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ]
}
```

</details>

<a id="tool-gtm_create_tag-c682840c"></a>

## gtm_create_tag

Handler: create tag through the GTM v2 API, resolving an omitted workspace to Default Workspace or the first workspace.

```text
Crea un nuovo tag in un workspace GTM.
```

[Source](https://github.com/CreativeMetrics/gtm-ga4-mcp/blob/2f274468eaf7dcf3fbb9d29e1d997a83bd88b302/index.js#L113-L125) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "container_id": {
      "type": "string"
    },
    "workspace_id": {
      "type": "string",
      "description": "Opzionale"
    },
    "tag": {
      "type": "object",
      "description": "Oggetto tag GTM (name, type, parameter, firingTriggerId, ecc.)"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "tag"
  ]
}
```

</details>

<a id="tool-gtm_update_tag-23807743"></a>

## gtm_update_tag

Handler: update tag through the GTM v2 API, resolving an omitted workspace to Default Workspace or the first workspace.

```text
Modifica un tag esistente in un workspace GTM.
```

[Source](https://github.com/CreativeMetrics/gtm-ga4-mcp/blob/2f274468eaf7dcf3fbb9d29e1d997a83bd88b302/index.js#L127-L140) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "container_id": {
      "type": "string"
    },
    "workspace_id": {
      "type": "string",
      "description": "Opzionale"
    },
    "tag_id": {
      "type": "string",
      "description": "ID del tag da modificare"
    },
    "tag": {
      "type": "object",
      "description": "Oggetto tag aggiornato"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "tag_id",
    "tag"
  ]
}
```

</details>

<a id="tool-gtm_delete_tag-42a56cac"></a>

## gtm_delete_tag

Handler: delete tag through the GTM v2 API, resolving an omitted workspace to Default Workspace or the first workspace.

```text
Elimina un tag da un workspace GTM.
```

[Source](https://github.com/CreativeMetrics/gtm-ga4-mcp/blob/2f274468eaf7dcf3fbb9d29e1d997a83bd88b302/index.js#L142-L154) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "container_id": {
      "type": "string"
    },
    "workspace_id": {
      "type": "string",
      "description": "Opzionale"
    },
    "tag_id": {
      "type": "string",
      "description": "ID del tag da eliminare"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "tag_id"
  ]
}
```

</details>

<a id="tool-gtm_list_triggers-16b41a3c"></a>

## gtm_list_triggers

Handler: list triggers through the GTM v2 API, resolving an omitted workspace to Default Workspace or the first workspace.

```text
Elenca i trigger in un workspace GTM.
```

[Source](https://github.com/CreativeMetrics/gtm-ga4-mcp/blob/2f274468eaf7dcf3fbb9d29e1d997a83bd88b302/index.js#L158-L169) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "container_id": {
      "type": "string"
    },
    "workspace_id": {
      "type": "string",
      "description": "Opzionale"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ]
}
```

</details>

<a id="tool-gtm_create_trigger-99da4322"></a>

## gtm_create_trigger

Handler: create trigger through the GTM v2 API, resolving an omitted workspace to Default Workspace or the first workspace.

```text
Crea un nuovo trigger in un workspace GTM.
```

[Source](https://github.com/CreativeMetrics/gtm-ga4-mcp/blob/2f274468eaf7dcf3fbb9d29e1d997a83bd88b302/index.js#L171-L183) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "container_id": {
      "type": "string"
    },
    "workspace_id": {
      "type": "string",
      "description": "Opzionale"
    },
    "trigger": {
      "type": "object",
      "description": "Oggetto trigger GTM (name, type, filter, ecc.)"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "trigger"
  ]
}
```

</details>

<a id="tool-gtm_update_trigger-ce48de45"></a>

## gtm_update_trigger

Handler: update trigger through the GTM v2 API, resolving an omitted workspace to Default Workspace or the first workspace.

```text
Modifica un trigger esistente in un workspace GTM.
```

[Source](https://github.com/CreativeMetrics/gtm-ga4-mcp/blob/2f274468eaf7dcf3fbb9d29e1d997a83bd88b302/index.js#L185-L198) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "container_id": {
      "type": "string"
    },
    "workspace_id": {
      "type": "string",
      "description": "Opzionale"
    },
    "trigger_id": {
      "type": "string",
      "description": "ID del trigger da modificare"
    },
    "trigger": {
      "type": "object",
      "description": "Oggetto trigger aggiornato"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "trigger_id",
    "trigger"
  ]
}
```

</details>

<a id="tool-gtm_delete_trigger-dac3085f"></a>

## gtm_delete_trigger

Handler: delete trigger through the GTM v2 API, resolving an omitted workspace to Default Workspace or the first workspace.

```text
Elimina un trigger da un workspace GTM.
```

[Source](https://github.com/CreativeMetrics/gtm-ga4-mcp/blob/2f274468eaf7dcf3fbb9d29e1d997a83bd88b302/index.js#L200-L212) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "container_id": {
      "type": "string"
    },
    "workspace_id": {
      "type": "string",
      "description": "Opzionale"
    },
    "trigger_id": {
      "type": "string",
      "description": "ID del trigger da eliminare"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "trigger_id"
  ]
}
```

</details>

<a id="tool-gtm_list_variables-81705a80"></a>

## gtm_list_variables

Handler: list variables through the GTM v2 API, resolving an omitted workspace to Default Workspace or the first workspace.

```text
Elenca le variabili in un workspace GTM.
```

[Source](https://github.com/CreativeMetrics/gtm-ga4-mcp/blob/2f274468eaf7dcf3fbb9d29e1d997a83bd88b302/index.js#L216-L227) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "container_id": {
      "type": "string"
    },
    "workspace_id": {
      "type": "string",
      "description": "Opzionale"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ]
}
```

</details>

<a id="tool-gtm_create_variable-5b853337"></a>

## gtm_create_variable

Handler: create variable through the GTM v2 API, resolving an omitted workspace to Default Workspace or the first workspace.

```text
Crea una nuova variabile in un workspace GTM.
```

[Source](https://github.com/CreativeMetrics/gtm-ga4-mcp/blob/2f274468eaf7dcf3fbb9d29e1d997a83bd88b302/index.js#L229-L241) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "container_id": {
      "type": "string"
    },
    "workspace_id": {
      "type": "string",
      "description": "Opzionale"
    },
    "variable": {
      "type": "object",
      "description": "Oggetto variabile GTM (name, type, parameter, ecc.)"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "variable"
  ]
}
```

</details>

<a id="tool-gtm_update_variable-898f92d4"></a>

## gtm_update_variable

Handler: update variable through the GTM v2 API, resolving an omitted workspace to Default Workspace or the first workspace.

```text
Modifica una variabile esistente in un workspace GTM.
```

[Source](https://github.com/CreativeMetrics/gtm-ga4-mcp/blob/2f274468eaf7dcf3fbb9d29e1d997a83bd88b302/index.js#L243-L256) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "container_id": {
      "type": "string"
    },
    "workspace_id": {
      "type": "string",
      "description": "Opzionale"
    },
    "variable_id": {
      "type": "string",
      "description": "ID della variabile da modificare"
    },
    "variable": {
      "type": "object",
      "description": "Oggetto variabile aggiornato"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "variable_id",
    "variable"
  ]
}
```

</details>

<a id="tool-gtm_delete_variable-9bd36787"></a>

## gtm_delete_variable

Handler: delete variable through the GTM v2 API, resolving an omitted workspace to Default Workspace or the first workspace.

```text
Elimina una variabile da un workspace GTM.
```

[Source](https://github.com/CreativeMetrics/gtm-ga4-mcp/blob/2f274468eaf7dcf3fbb9d29e1d997a83bd88b302/index.js#L258-L270) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "container_id": {
      "type": "string"
    },
    "workspace_id": {
      "type": "string",
      "description": "Opzionale"
    },
    "variable_id": {
      "type": "string",
      "description": "ID della variabile da eliminare"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "variable_id"
  ]
}
```

</details>

<a id="tool-gtm_duplicate_container-cfe2061d"></a>

## gtm_duplicate_container

Handler: Creates a destination workspace and attempts template, folder, built-in variable, variable, trigger and tag copying with throttling and partial ID remapping.

```text
Duplica un intero container GTM (tag, trigger, variabili, cartelle, template) in un altro container. Gestisce rate limiting, backoff automatico sui 429, remapping ID e installazione template.
```

[Source](https://github.com/CreativeMetrics/gtm-ga4-mcp/blob/2f274468eaf7dcf3fbb9d29e1d997a83bd88b302/index.js#L272-L286) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "src_account_id": {
      "type": "string",
      "description": "Account ID del container sorgente"
    },
    "src_container_id": {
      "type": "string",
      "description": "Container ID sorgente"
    },
    "dst_account_id": {
      "type": "string",
      "description": "Account ID del container destinazione"
    },
    "dst_container_id": {
      "type": "string",
      "description": "Container ID destinazione"
    },
    "prefix": {
      "type": "string",
      "description": "Prefisso opzionale da aggiungere ai nomi (es. \"[COPIA] \")"
    },
    "suffix": {
      "type": "string",
      "description": "Suffisso opzionale da aggiungere ai nomi"
    }
  },
  "required": [
    "src_account_id",
    "src_container_id",
    "dst_account_id",
    "dst_container_id"
  ]
}
```

</details>

<a id="tool-gtm_list_users-1dbe4682"></a>

## gtm_list_users

Handler: list users through the GTM v2 API.

```text
Elenca tutti gli utenti con accesso a un account GTM e i loro permessi sui container.
```

[Source](https://github.com/CreativeMetrics/gtm-ga4-mcp/blob/2f274468eaf7dcf3fbb9d29e1d997a83bd88b302/index.js#L289-L298) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    }
  },
  "required": [
    "account_id"
  ]
}
```

</details>

<a id="tool-gtm_add_user-7491e3ac"></a>

## gtm_add_user

Handler: Creates a GTM user permission with account permission defaulting to user and supplied container permissions.

```text
Aggiunge un utente a un account GTM con permessi specifici sui container.
```

[Source](https://github.com/CreativeMetrics/gtm-ga4-mcp/blob/2f274468eaf7dcf3fbb9d29e1d997a83bd88b302/index.js#L300-L322) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "email": {
      "type": "string",
      "description": "Email Google dell'utente"
    },
    "account_permission": {
      "type": "string",
      "enum": [
        "user",
        "admin"
      ],
      "description": "Permesso account (default: user)"
    },
    "container_permissions": {
      "type": "array",
      "description": "Lista permessi per container",
      "items": {
        "type": "object",
        "properties": {
          "containerId": {
            "type": "string"
          },
          "permission": {
            "type": "string",
            "enum": [
              "no_access",
              "read",
              "edit",
              "approve",
              "publish"
            ]
          }
        }
      }
    }
  },
  "required": [
    "account_id",
    "email"
  ]
}
```

</details>

<a id="tool-gtm_update_user-055161bf"></a>

## gtm_update_user

Handler: Updates GTM user permissions, resetting omitted account permission to user and omitted container permissions to an empty array.

```text
Modifica i permessi di un utente esistente su un account GTM.
```

[Source](https://github.com/CreativeMetrics/gtm-ga4-mcp/blob/2f274468eaf7dcf3fbb9d29e1d997a83bd88b302/index.js#L324-L345) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "user_permission_id": {
      "type": "string",
      "description": "ID permesso utente (da gtm_list_users)"
    },
    "account_permission": {
      "type": "string",
      "enum": [
        "user",
        "admin"
      ]
    },
    "container_permissions": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "containerId": {
            "type": "string"
          },
          "permission": {
            "type": "string",
            "enum": [
              "no_access",
              "read",
              "edit",
              "approve",
              "publish"
            ]
          }
        }
      }
    }
  },
  "required": [
    "account_id",
    "user_permission_id"
  ]
}
```

</details>

<a id="tool-gtm_remove_user-f78eb008"></a>

## gtm_remove_user

Handler: remove user through the GTM v2 API.

```text
Rimuove completamente l'accesso di un utente a un account GTM.
```

[Source](https://github.com/CreativeMetrics/gtm-ga4-mcp/blob/2f274468eaf7dcf3fbb9d29e1d997a83bd88b302/index.js#L347-L357) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "user_permission_id": {
      "type": "string",
      "description": "ID permesso utente (da gtm_list_users)"
    }
  },
  "required": [
    "account_id",
    "user_permission_id"
  ]
}
```

</details>

<a id="tool-gtm_publish_container-513cc8f7"></a>

## gtm_publish_container

Handler: Creates a version from the resolved workspace and publishes that container version.

```text
Pubblica il workspace GTM corrente creando una nuova versione.
```

[Source](https://github.com/CreativeMetrics/gtm-ga4-mcp/blob/2f274468eaf7dcf3fbb9d29e1d997a83bd88b302/index.js#L359-L370) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "container_id": {
      "type": "string"
    },
    "workspace_id": {
      "type": "string",
      "description": "Opzionale — se omesso usa il Default Workspace"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ]
}
```

</details>

<a id="tool-scan_url-56a18a25"></a>

## scan_url

Handler: Launches Puppeteer, accepts supported cookie banners and detects tracking tags and IDs from HTML, requests and JavaScript; dispatch still loads Google credentials.

```text
Scansiona un URL con un browser reale e rileva tutti i tag attivi (analytics, advertising, CMP, live chat, ecc.) tramite analisi di rete, HTML e variabili JavaScript. Accetta automaticamente i cookie banner.
```

[Source](https://github.com/CreativeMetrics/gtm-ga4-mcp/blob/2f274468eaf7dcf3fbb9d29e1d997a83bd88b302/index.js#L374-L383) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "description": "URL del sito da analizzare (es. https://www.esempio.it)"
    }
  },
  "required": [
    "url"
  ]
}
```

</details>

<a id="tool-create_tags_from_url-9ea9f60f"></a>

## create_tags_from_url

Handler: Scans a website and creates an import workspace, All Pages trigger, supported templates and tags, collecting per-tag failures.

```text
Scansiona un URL, rileva i tag attivi, estrae gli ID configurati e crea automaticamente i tag corrispondenti in un nuovo workspace GTM. Usa template nativi per GA4/Google Ads e template gallery ufficiali per Meta (Stape), LinkedIn, Clarity, TikTok, Pinterest.
```

[Source](https://github.com/CreativeMetrics/gtm-ga4-mcp/blob/2f274468eaf7dcf3fbb9d29e1d997a83bd88b302/index.js#L385-L396) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "description": "URL del sito da analizzare"
    },
    "account_id": {
      "type": "string"
    },
    "container_id": {
      "type": "string"
    }
  },
  "required": [
    "url",
    "account_id",
    "container_id"
  ]
}
```

</details>

<a id="tool-compare_url_with_container-b5b8ca2c"></a>

## compare_url_with_container

Handler: Returns detected website tags and GTM tag summaries side by side; the declared mismatch classification is not implemented.

```text
Scansiona un URL e confronta i tag rilevati con quelli configurati in un container GTM. Identifica tag attivi sul sito, tag in GTM non rilevati sul sito, e tag sul sito non in GTM.
```

[Source](https://github.com/CreativeMetrics/gtm-ga4-mcp/blob/2f274468eaf7dcf3fbb9d29e1d997a83bd88b302/index.js#L398-L410) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "description": "URL del sito da analizzare"
    },
    "account_id": {
      "type": "string"
    },
    "container_id": {
      "type": "string"
    },
    "workspace_id": {
      "type": "string",
      "description": "Opzionale"
    }
  },
  "required": [
    "url",
    "account_id",
    "container_id"
  ]
}
```

</details>

<a id="tool-ga4_list_properties-44fea7fa"></a>

## ga4_list_properties

Handler: Google Analytics: list properties through the GA4 Admin API.

```text
Elenca tutte le proprietà GA4 accessibili.
```

[Source](https://github.com/CreativeMetrics/gtm-ga4-mcp/blob/2f274468eaf7dcf3fbb9d29e1d997a83bd88b302/index.js#L414-L417) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<a id="tool-ga4_list_custom_dimensions-75905509"></a>

## ga4_list_custom_dimensions

Handler: Google Analytics: list custom dimensions through the GA4 Admin API.

```text
Elenca le custom dimension di una proprietà GA4.
```

[Source](https://github.com/CreativeMetrics/gtm-ga4-mcp/blob/2f274468eaf7dcf3fbb9d29e1d997a83bd88b302/index.js#L419-L426) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string",
      "description": "ID proprietà GA4 (solo numero)"
    }
  },
  "required": [
    "property_id"
  ]
}
```

</details>

<a id="tool-ga4_create_custom_dimension-2ce8700e"></a>

## ga4_create_custom_dimension

Handler: Google Analytics: create custom dimension through the GA4 Admin API.

```text
Crea una custom dimension in una proprietà GA4.
```

[Source](https://github.com/CreativeMetrics/gtm-ga4-mcp/blob/2f274468eaf7dcf3fbb9d29e1d997a83bd88b302/index.js#L428-L441) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string"
    },
    "display_name": {
      "type": "string"
    },
    "parameter_name": {
      "type": "string"
    },
    "scope": {
      "type": "string",
      "enum": [
        "EVENT",
        "USER",
        "ITEM"
      ]
    },
    "description": {
      "type": "string"
    }
  },
  "required": [
    "property_id",
    "display_name",
    "parameter_name",
    "scope"
  ]
}
```

</details>

<a id="tool-ga4_duplicate_custom_dimensions-f0899340"></a>

## ga4_duplicate_custom_dimensions

Handler: Google Analytics: copies source custom dimensions into a target property, collecting individual errors.

```text
Duplica tutte le custom dimension da una proprietà GA4 a un'altra.
```

[Source](https://github.com/CreativeMetrics/gtm-ga4-mcp/blob/2f274468eaf7dcf3fbb9d29e1d997a83bd88b302/index.js#L443-L453) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "source_property_id": {
      "type": "string"
    },
    "target_property_id": {
      "type": "string"
    }
  },
  "required": [
    "source_property_id",
    "target_property_id"
  ]
}
```

</details>

<a id="tool-ga4_list_custom_metrics-64631ca9"></a>

## ga4_list_custom_metrics

Handler: Google Analytics: list custom metrics through the GA4 Admin API.

```text
Elenca le custom metric di una proprietà GA4.
```

[Source](https://github.com/CreativeMetrics/gtm-ga4-mcp/blob/2f274468eaf7dcf3fbb9d29e1d997a83bd88b302/index.js#L455-L462) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string"
    }
  },
  "required": [
    "property_id"
  ]
}
```

</details>

<a id="tool-ga4_run_report-a0a35566"></a>

## ga4_run_report

Handler: Google Analytics: calls the GA4 Data API runReport with requested metrics, dimensions and dates; limit defaults to 10.

```text
Esegue un report GA4 con metriche e dimensioni personalizzate.
```

[Source](https://github.com/CreativeMetrics/gtm-ga4-mcp/blob/2f274468eaf7dcf3fbb9d29e1d997a83bd88b302/index.js#L464-L478) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string"
    },
    "metrics": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Es. [\"sessions\", \"activeUsers\"]"
    },
    "dimensions": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Es. [\"date\", \"deviceCategory\"]"
    },
    "start_date": {
      "type": "string",
      "description": "Es. \"7daysAgo\" o \"2024-01-01\""
    },
    "end_date": {
      "type": "string",
      "description": "Es. \"today\""
    },
    "limit": {
      "type": "number",
      "description": "Numero di righe (default 10)"
    }
  },
  "required": [
    "property_id",
    "metrics",
    "dimensions",
    "start_date",
    "end_date"
  ]
}
```

</details>

<a id="tool-ga4_list_conversion_events-bfbcc836"></a>

## ga4_list_conversion_events

Handler: Google Analytics: list conversion events through the GA4 Admin API.

```text
Elenca gli eventi di conversione configurati in una proprietà GA4.
```

[Source](https://github.com/CreativeMetrics/gtm-ga4-mcp/blob/2f274468eaf7dcf3fbb9d29e1d997a83bd88b302/index.js#L480-L487) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string"
    }
  },
  "required": [
    "property_id"
  ]
}
```

</details>

<a id="tool-ga4_list_data_streams-e2cea14d"></a>

## ga4_list_data_streams

Handler: Google Analytics: list data streams through the GA4 Admin API.

```text
Elenca i data stream (web/app) di una proprietà GA4 con measurement ID.
```

[Source](https://github.com/CreativeMetrics/gtm-ga4-mcp/blob/2f274468eaf7dcf3fbb9d29e1d997a83bd88b302/index.js#L489-L496) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string"
    }
  },
  "required": [
    "property_id"
  ]
}
```

</details>

<a id="tool-ga4_list_audiences-35c4ca43"></a>

## ga4_list_audiences

Handler: Google Analytics: list audiences through the GA4 Admin API.

```text
Elenca le audience configurate in una proprietà GA4.
```

[Source](https://github.com/CreativeMetrics/gtm-ga4-mcp/blob/2f274468eaf7dcf3fbb9d29e1d997a83bd88b302/index.js#L498-L505) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string"
    }
  },
  "required": [
    "property_id"
  ]
}
```

</details>

<a id="tool-ga4_list_key_events-ac1a65f2"></a>

## ga4_list_key_events

Handler: Google Analytics: list key events through the GA4 Admin API.

```text
Elenca i key event (ex conversioni) di una proprietà GA4.
```

[Source](https://github.com/CreativeMetrics/gtm-ga4-mcp/blob/2f274468eaf7dcf3fbb9d29e1d997a83bd88b302/index.js#L507-L514) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string"
    }
  },
  "required": [
    "property_id"
  ]
}
```

</details>

<a id="tool-ga4_create_key_event-503e5cec"></a>

## ga4_create_key_event

Handler: Google Analytics: create key event through the GA4 Admin API.

```text
Crea un key event in una proprietà GA4.
```

[Source](https://github.com/CreativeMetrics/gtm-ga4-mcp/blob/2f274468eaf7dcf3fbb9d29e1d997a83bd88b302/index.js#L516-L526) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string"
    },
    "event_name": {
      "type": "string",
      "description": "Nome esatto dell'evento GA4 da marcare come key event"
    }
  },
  "required": [
    "property_id",
    "event_name"
  ]
}
```

</details>

<a id="tool-ga4_compare_properties-db3a7f02"></a>

## ga4_compare_properties

Handler: Google Analytics: compares custom dimension, custom metric and key event names and returns data stream summaries for two GA4 properties.

```text
Confronta custom dimension, custom metric, key event e data stream tra due proprietà GA4. Mostra cosa è presente solo in una, solo nell'altra, o in entrambe.
```

[Source](https://github.com/CreativeMetrics/gtm-ga4-mcp/blob/2f274468eaf7dcf3fbb9d29e1d997a83bd88b302/index.js#L528-L538) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id_a": {
      "type": "string"
    },
    "property_id_b": {
      "type": "string"
    }
  },
  "required": [
    "property_id_a",
    "property_id_b"
  ]
}
```

</details>

<a id="tool-ga4_looker_report_url-cae430e2"></a>

## ga4_looker_report_url

Handler: Google Analytics/Looker Studio: generates a report creation URL using hard-coded template IDs and GA4 property ID.

```text
Genera un URL per creare un report Looker Studio pre-connesso a una proprietà GA4. L'utente apre il link e il report è pronto.
```

[Source](https://github.com/CreativeMetrics/gtm-ga4-mcp/blob/2f274468eaf7dcf3fbb9d29e1d997a83bd88b302/index.js#L540-L554) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string"
    },
    "template": {
      "type": "string",
      "enum": [
        "ga4_overview",
        "ga4_acquisition",
        "ga4_ecommerce",
        "ga4_engagement"
      ],
      "description": "Template report (default: ga4_overview)"
    }
  },
  "required": [
    "property_id"
  ]
}
```

</details>

<a id="tool-gtm_check_tag_health-2c453f64"></a>

## gtm_check_tag_health

Handler: Compares fixed important GA4 event counts across recent periods and flags drops, stopped events and paused GTM tags; zero threshold falls back to 0.8.

```text
Verifica la salute dei tag GTM confrontando gli eventi GA4 degli ultimi 7 giorni con i 7 giorni precedenti. Segnala eventi fermi o calati oltre una soglia, e tag GTM in pausa.
```

[Source](https://github.com/CreativeMetrics/gtm-ga4-mcp/blob/2f274468eaf7dcf3fbb9d29e1d997a83bd88b302/index.js#L558-L570) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "gtm_account_id": {
      "type": "string"
    },
    "gtm_container_id": {
      "type": "string"
    },
    "ga4_property_id": {
      "type": "string",
      "description": "ID numerico proprietà GA4 (senza \"properties/\")"
    },
    "drop_threshold": {
      "type": "number",
      "description": "Soglia calo per alert (0.0-1.0, default 0.8 = 80%)"
    }
  },
  "required": [
    "gtm_account_id",
    "gtm_container_id",
    "ga4_property_id"
  ]
}
```

</details>

<a id="tool-gsc_list_sites-69b36040"></a>

## gsc_list_sites

Handler: Google Search Console: lists accessible verified sites.

```text
Elenca tutti i siti verificati in Google Search Console.
```

[Source](https://github.com/CreativeMetrics/gtm-ga4-mcp/blob/2f274468eaf7dcf3fbb9d29e1d997a83bd88b302/index.js#L574-L577) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<a id="tool-gsc_top_queries-f3356404"></a>

## gsc_top_queries

Handler: Google Search Console: queries recent search analytics by query, defaulting to 28 days and 25 rows.

```text
Mostra le query di ricerca con più click per un sito.
```

[Source](https://github.com/CreativeMetrics/gtm-ga4-mcp/blob/2f274468eaf7dcf3fbb9d29e1d997a83bd88b302/index.js#L579-L590) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "site_url": {
      "type": "string",
      "description": "URL sito (es. https://www.esempio.it/)"
    },
    "days": {
      "type": "number",
      "description": "Periodo in giorni (default 28)"
    },
    "limit": {
      "type": "number",
      "description": "Numero di query (default 25)"
    }
  },
  "required": [
    "site_url"
  ]
}
```

</details>

<a id="tool-gsc_top_pages-f18fb1c2"></a>

## gsc_top_pages

Handler: Google Search Console: queries recent search analytics by page, defaulting to 28 days and 25 rows.

```text
Mostra le pagine con più click organici per un sito.
```

[Source](https://github.com/CreativeMetrics/gtm-ga4-mcp/blob/2f274468eaf7dcf3fbb9d29e1d997a83bd88b302/index.js#L592-L603) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "site_url": {
      "type": "string"
    },
    "days": {
      "type": "number",
      "description": "Periodo in giorni (default 28)"
    },
    "limit": {
      "type": "number",
      "description": "Numero di pagine (default 25)"
    }
  },
  "required": [
    "site_url"
  ]
}
```

</details>

<a id="tool-gsc_compare_periods-2b628d41"></a>

## gsc_compare_periods

Handler: Google Search Console: compares query metrics for two date periods, returning only queries found in the current top 50.

```text
Confronta click e posizioni di ricerca tra due periodi per identificare query in crescita o calo.
```

[Source](https://github.com/CreativeMetrics/gtm-ga4-mcp/blob/2f274468eaf7dcf3fbb9d29e1d997a83bd88b302/index.js#L605-L615) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "site_url": {
      "type": "string"
    },
    "days": {
      "type": "number",
      "description": "Durata di ogni periodo in giorni (default 28)"
    }
  },
  "required": [
    "site_url"
  ]
}
```

</details>

<a id="tool-gsc_search_analytics-dbefc78e"></a>

## gsc_search_analytics

Handler: Google Search Console: queries dates and dimensions, defaulting to query and 25 rows; advertised custom filters are not forwarded by dispatch.

```text
Esegui una query personalizzata su Search Console con dimensioni e filtri a scelta.
```

[Source](https://github.com/CreativeMetrics/gtm-ga4-mcp/blob/2f274468eaf7dcf3fbb9d29e1d997a83bd88b302/index.js#L617-L630) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "site_url": {
      "type": "string"
    },
    "start_date": {
      "type": "string",
      "description": "Es. 2025-01-01"
    },
    "end_date": {
      "type": "string",
      "description": "Es. 2025-01-31"
    },
    "dimensions": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Es. [\"query\",\"page\",\"device\",\"country\"]"
    },
    "row_limit": {
      "type": "number",
      "description": "Numero di righe (default 25)"
    }
  },
  "required": [
    "site_url",
    "start_date",
    "end_date"
  ]
}
```

</details>
