# beuch26/webguru-gtm-mcp

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/beuch26/webguru-gtm-mcp) · [Machine-readable inventory](../data/mcps/beuch26--webguru-gtm-mcp.json)

**18 extracted tools.** Builds GA4 and Ads tags, form and click triggers, and auto-event variables from stored project settings.

Snapshot: 2026-10-13 · [3a57a4798d5f](https://github.com/beuch26/webguru-gtm-mcp/tree/3a57a4798d5f199b3d84adc7298901597f117150) · Method: source.

Exposure: All 18 TOOLS entries are unconditionally returned by ListToolsRequestSchema; startup requires Supabase service credentials and Google OAuth client credentials. No conditional tool groups.

## Limits

- No runtime or GTM operation verification; isolated schema-only evaluation was used without credentials or network.
- Handlers calculate workspacePath from loadProjectContext before gtmApi resolves the active workspace into a separate context; API calls therefore retain the stored, potentially stale workspace ID (index.js L197-L213, L241-L246, L788-L797 and analogous writers).
- create_pageview_trigger lowercases enums rather than using FILTER_TYPE_MAP: STARTS_WITH, ENDS_WITH and MATCHES_REGEX become starts_with, ends_with and matches_regex, inconsistent with startsWith, endsWith and matchRegex in the same source (L349-L352, L857).
- CLICK_HOSTNAME is advertised in click filter enum but is absent from BUILTIN_VAR_MAP and VAR_REF_MAP; fallback uses {{CLICK_HOSTNAME}}, while the recommended custom variable name is Click Hostname. A matching variable must be created separately.
- List operations do not follow nextPageToken; full accounts, containers, workspaces, tags, triggers and variables enumeration is not guaranteed.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`set_project`](#tool-set_project-08b953d3) | Supporting | Loads project and GTM integration settings from Supabase and switches the process project context. |
| [`get_current_project`](#tool-get_current_project-fdc34804) | Supporting | Loads and reports current Web Guru project and associated GTM account, container, and stored workspace settings. |
| [`list_accounts`](#tool-list_accounts-1090ba6a) | GTM | GETs GTM accounts and returns selected account fields. |
| [`list_containers`](#tool-list_containers-a53dbc4d) | GTM | GETs containers for supplied or project account and returns selected container fields. |
| [`list_workspaces`](#tool-list_workspaces-af844119) | GTM | GETs workspaces for supplied or project account and container. |
| [`create_workspace`](#tool-create_workspace-a1af8425) | GTM | POSTs a new GTM workspace and clears the workspace cache without selecting the new workspace. |
| [`list_tags`](#tool-list_tags-86fc0f9c) | GTM | GETs tags from the stored project workspace and returns selected tag fields. |
| [`list_triggers`](#tool-list_triggers-4ca44d74) | GTM | GETs triggers from the stored project workspace and returns selected trigger fields. |
| [`list_variables`](#tool-list_variables-1adaa2a1) | GTM | GETs custom variables and enabled built-in variables from the stored project workspace. |
| [`create_pageview_trigger`](#tool-create_pageview_trigger-da3f9dee) | GTM | Enables Page URL or Page Path and POSTs a pageview trigger; lowercasing enum values produces incorrect filter types for STARTS\_WITH, ENDS\_WITH, and MATCHES\_REGEX. |
| [`create_ads_conversion_tag`](#tool-create_ads_conversion_tag-49afc6a7) | GTM | POSTs an awct GTM tag with conversion ID, label, linker setting and firing trigger. |
| [`publish_workspace`](#tool-publish_workspace-f1c4ff87) | GTM | Creates a container version from the stored workspace, publishes it, and invalidates the dynamic workspace cache. |
| [`enable_builtin_variables`](#tool-enable_builtin_variables-bf909ea0) | GTM | POSTs each mapped built-in variable type and returns enabled, already\_enabled, unknown, or failed status. |
| [`create_ga4_config_tag`](#tool-create_ga4_config_tag-fa7edb9a) | GTM | POSTs a googtag GTM tag with measurement ID, configuration parameters, firing trigger and optional consent settings. |
| [`create_ga4_event_tag`](#tool-create_ga4_event_tag-c3cefbbb) | GTM | Finds a named config tag, extracts its measurement ID and POSTs a gaawe GTM event tag. |
| [`create_form_submission_trigger`](#tool-create_form_submission_trigger-a154be7c) | GTM | Enables form built-ins and POSTs a formSubmission trigger with filters, tag waiting and validation settings. |
| [`create_click_link_trigger`](#tool-create_click_link_trigger-a8106b6d) | GTM | Enables recognized filter built-ins and POSTs a linkClick trigger separating auto-event and page filters. |
| [`create_auto_event_variable`](#tool-create_auto_event_variable-ea726177) | GTM | POSTs an aev GTM variable with URL source, component and optional query, host and default settings. |

<a id="tool-set_project-08b953d3"></a>

## set_project

Handler: Loads project and GTM integration settings from Supabase and switches the process project context.

```text
Change le projet Web Guru actif (et donc le container GTM associé). Utilise cet outil quand l'utilisateur veut intervenir sur un autre client/projet.
```

[Source](https://github.com/beuch26/webguru-gtm-mcp/blob/3a57a4798d5f199b3d84adc7298901597f117150/index.js#L422-L433) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "project_id": {
      "type": "string",
      "description": "UUID du projet Web Guru"
    }
  },
  "required": [
    "project_id"
  ]
}
```

</details>

<a id="tool-get_current_project-fdc34804"></a>

## get_current_project

Handler: Loads and reports current Web Guru project and associated GTM account, container, and stored workspace settings.

```text
Affiche le projet courant et le container GTM associé (compte, container, workspace).
```

[Source](https://github.com/beuch26/webguru-gtm-mcp/blob/3a57a4798d5f199b3d84adc7298901597f117150/index.js#L433-L438) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<a id="tool-list_accounts-1090ba6a"></a>

## list_accounts

Handler: GETs GTM accounts and returns selected account fields.

```text
Liste les comptes Google Tag Manager accessibles par le compte Google connecté au projet.
```

[Source](https://github.com/beuch26/webguru-gtm-mcp/blob/3a57a4798d5f199b3d84adc7298901597f117150/index.js#L438-L443) · Schema: literal-source.

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

Handler: GETs containers for supplied or project account and returns selected container fields.

```text
Liste les conteneurs d'un compte GTM.
```

[Source](https://github.com/beuch26/webguru-gtm-mcp/blob/3a57a4798d5f199b3d84adc7298901597f117150/index.js#L443-L453) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "accountId GTM (optionnel, utilise celui du projet courant si non fourni)"
    }
  }
}
```

</details>

<a id="tool-list_workspaces-af844119"></a>

## list_workspaces

Handler: GETs workspaces for supplied or project account and container.

```text
Liste les workspaces d'un container GTM.
```

[Source](https://github.com/beuch26/webguru-gtm-mcp/blob/3a57a4798d5f199b3d84adc7298901597f117150/index.js#L453-L464) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "accountId (optionnel, par défaut celui du projet)"
    },
    "container_id": {
      "type": "string",
      "description": "containerId (optionnel, par défaut celui du projet)"
    }
  }
}
```

</details>

<a id="tool-create_workspace-a1af8425"></a>

## create_workspace

Handler: POSTs a new GTM workspace and clears the workspace cache without selecting the new workspace.

```text
Crée un nouveau workspace dans un container GTM. Utile pour bosser dans un workspace dédié (ex: 'webguru-mcp', 'experiments') plutôt que le Default Workspace partagé. Note : depuis 2025-04 Google limite les comptes gratuits à 3 workspaces concurrents, supprimer un workspace inutilisé via l'UI GTM si besoin.
```

[Source](https://github.com/beuch26/webguru-gtm-mcp/blob/3a57a4798d5f199b3d84adc7298901597f117150/index.js#L464-L478) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "required": [
    "name"
  ],
  "properties": {
    "name": {
      "type": "string",
      "description": "Nom du nouveau workspace (ex: \"webguru-mcp\")"
    },
    "description": {
      "type": "string",
      "description": "Description optionnelle"
    },
    "account_id": {
      "type": "string",
      "description": "accountId (par défaut celui du projet)"
    },
    "container_id": {
      "type": "string",
      "description": "containerId (par défaut celui du projet)"
    }
  }
}
```

</details>

<a id="tool-list_tags-86fc0f9c"></a>

## list_tags

Handler: GETs tags from the stored project workspace and returns selected tag fields.

```text
Liste toutes les balises (tags) du workspace courant.
```

[Source](https://github.com/beuch26/webguru-gtm-mcp/blob/3a57a4798d5f199b3d84adc7298901597f117150/index.js#L478-L483) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<a id="tool-list_triggers-4ca44d74"></a>

## list_triggers

Handler: GETs triggers from the stored project workspace and returns selected trigger fields.

```text
Liste tous les déclencheurs (triggers) du workspace courant.
```

[Source](https://github.com/beuch26/webguru-gtm-mcp/blob/3a57a4798d5f199b3d84adc7298901597f117150/index.js#L483-L488) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<a id="tool-list_variables-1adaa2a1"></a>

## list_variables

Handler: GETs custom variables and enabled built-in variables from the stored project workspace.

```text
Liste les variables (custom + built-in actives) du workspace courant.
```

[Source](https://github.com/beuch26/webguru-gtm-mcp/blob/3a57a4798d5f199b3d84adc7298901597f117150/index.js#L488-L493) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<a id="tool-create_pageview_trigger-da3f9dee"></a>

## create_pageview_trigger

Handler: Enables Page URL or Page Path and POSTs a pageview trigger; lowercasing enum values produces incorrect filter types for STARTS\_WITH, ENDS\_WITH, and MATCHES\_REGEX.

```text
Crée un déclencheur Page Vue filtré sur une URL (utilisé pour tracker une page de remerciement / confirmation).
```

[Source](https://github.com/beuch26/webguru-gtm-mcp/blob/3a57a4798d5f199b3d84adc7298901597f117150/index.js#L493-L515) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Nom du déclencheur. Ex: \"PV - Bienvenue Mandataire Immo\""
    },
    "filter_url": {
      "type": "string",
      "description": "Valeur à matcher dans Page Path ou Page URL. Ex: \"/immobilier/bienvenue/agent-commercial\""
    },
    "filter_type": {
      "type": "string",
      "description": "Type de matching (défaut: EQUALS)",
      "enum": [
        "EQUALS",
        "CONTAINS",
        "MATCHES_REGEX",
        "STARTS_WITH",
        "ENDS_WITH"
      ]
    },
    "filter_target": {
      "type": "string",
      "description": "Variable à filtrer (défaut: PAGE_PATH plus robuste, PAGE_URL inclut query string)",
      "enum": [
        "PAGE_PATH",
        "PAGE_URL"
      ]
    }
  },
  "required": [
    "name",
    "filter_url"
  ]
}
```

</details>

<a id="tool-create_ads_conversion_tag-49afc6a7"></a>

## create_ads_conversion_tag

Handler: POSTs an awct GTM tag with conversion ID, label, linker setting and firing trigger.

```text
Crée une balise Google Ads Conversion Tracking (type 'awct'), attachée à un déclencheur existant. Le Conversion Linker est activé par défaut (obligatoire pour préserver les gclid first-party).
```

[Source](https://github.com/beuch26/webguru-gtm-mcp/blob/3a57a4798d5f199b3d84adc7298901597f117150/index.js#L515-L532) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Nom de la balise. Ex: \"GAds - Conv Inscription Mandataire Immo\""
    },
    "conversion_id": {
      "type": "string",
      "description": "Conversion ID Google Ads (la partie après AW- dans AW-XXXXXXXXX)"
    },
    "conversion_label": {
      "type": "string",
      "description": "Label de conversion (chaîne unique par action, fourni par Ads)"
    },
    "trigger_id": {
      "type": "string",
      "description": "triggerId du déclencheur à attacher (depuis create_pageview_trigger ou list_triggers)"
    },
    "conversion_value": {
      "type": "number",
      "description": "Valeur monétaire fixe de la conversion (optionnel)"
    },
    "currency_code": {
      "type": "string",
      "description": "Code devise ISO (défaut: EUR)"
    },
    "enable_conversion_linker": {
      "type": "boolean",
      "description": "Activer Conversion Linker (défaut: true, NE PAS désactiver sans raison)"
    }
  },
  "required": [
    "name",
    "conversion_id",
    "conversion_label",
    "trigger_id"
  ]
}
```

</details>

<a id="tool-publish_workspace-f1c4ff87"></a>

## publish_workspace

Handler: Creates a container version from the stored workspace, publishes it, and invalidates the dynamic workspace cache.

```text
Publie le workspace courant : crée une nouvelle version puis la publie. ⚠️ Action live — toutes les modifs en cours deviennent actives sur le site immédiatement.
```

[Source](https://github.com/beuch26/webguru-gtm-mcp/blob/3a57a4798d5f199b3d84adc7298901597f117150/index.js#L532-L543) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "version_name": {
      "type": "string",
      "description": "Nom de la version (défaut: 'Auto-publish from Web Guru MCP {timestamp}')"
    },
    "version_notes": {
      "type": "string",
      "description": "Notes de version (optionnel)"
    }
  }
}
```

</details>

<a id="tool-enable_builtin_variables-bf909ea0"></a>

## enable_builtin_variables

Handler: POSTs each mapped built-in variable type and returns enabled, already\_enabled, unknown, or failed status.

```text
Active une ou plusieurs built-in variables GTM (Click URL, Form ID, etc.). Indispensable avant d'utiliser ces variables dans des triggers ou tags.
```

[Source](https://github.com/beuch26/webguru-gtm-mcp/blob/3a57a4798d5f199b3d84adc7298901597f117150/index.js#L544-L562) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "types": {
      "type": "array",
      "description": "Liste de variables à activer (UPPER_SNAKE_CASE).",
      "items": {
        "type": "string",
        "enum": [
          "PAGE_URL",
          "PAGE_HOSTNAME",
          "PAGE_PATH",
          "REFERRER",
          "EVENT",
          "CLICK_ELEMENT",
          "CLICK_CLASSES",
          "CLICK_ID",
          "CLICK_TARGET",
          "CLICK_URL",
          "CLICK_TEXT",
          "FORM_ELEMENT",
          "FORM_CLASSES",
          "FORM_ID",
          "FORM_TARGET",
          "FORM_URL",
          "FORM_TEXT",
          "HISTORY_SOURCE",
          "NEW_HISTORY_FRAGMENT",
          "OLD_HISTORY_FRAGMENT",
          "NEW_HISTORY_STATE",
          "OLD_HISTORY_STATE",
          "HISTORY_CHANGE_SOURCE",
          "ERROR_MESSAGE",
          "ERROR_URL",
          "ERROR_LINE",
          "DEBUG_MODE",
          "CONTAINER_ID",
          "CONTAINER_VERSION",
          "RANDOM_NUMBER",
          "HTML_ID"
        ]
      }
    }
  },
  "required": [
    "types"
  ]
}
```

</details>

<a id="tool-create_ga4_config_tag-fa7edb9a"></a>

## create_ga4_config_tag

Handler: POSTs a googtag GTM tag with measurement ID, configuration parameters, firing trigger and optional consent settings.

```text
Crée le Google Tag (= GA4 Configuration moderne, type 'googtag'). C'est le tag racine que tous les events GA4 référencent. Par défaut attaché au trigger 'Initialization - All Pages'.
```

[Source](https://github.com/beuch26/webguru-gtm-mcp/blob/3a57a4798d5f199b3d84adc7298901597f117150/index.js#L562-L578) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Nom du tag. Ex: \"GA4 - Configuration\""
    },
    "measurement_id": {
      "type": "string",
      "description": "Measurement ID GA4. Ex: \"G-5XR6D1V38H\""
    },
    "trigger_id": {
      "type": "string",
      "description": "triggerId (défaut: '2147479573' = Initialization - All Pages)"
    },
    "config_settings": {
      "type": "object",
      "description": "Paramètres de configuration GA4. Ex: {send_page_view: true, cookie_domain: \"auto\"}"
    },
    "user_properties": {
      "type": "object",
      "description": "User properties. Ex: {client_type: \"premium\"}"
    },
    "consent_required": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Types de consent requis (défaut: ['analytics_storage'])"
    }
  },
  "required": [
    "name",
    "measurement_id"
  ]
}
```

</details>

<a id="tool-create_ga4_event_tag-c3cefbbb"></a>

## create_ga4_event_tag

Handler: Finds a named config tag, extracts its measurement ID and POSTs a gaawe GTM event tag.

```text
Crée un tag GA4 Event (type 'gaawe') référençant un config tag par son nom. Sert à tracker des events (form_submit, generate_lead, page_view custom, etc.).
```

[Source](https://github.com/beuch26/webguru-gtm-mcp/blob/3a57a4798d5f199b3d84adc7298901597f117150/index.js#L578-L596) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Nom du tag. Ex: \"GA4 - Event - Contact form\""
    },
    "event_name": {
      "type": "string",
      "description": "Nom de l'event GA4. Ex: \"generate_lead\", \"form_submit\""
    },
    "trigger_id": {
      "type": "string",
      "description": "triggerId du déclencheur qui fait fire le tag"
    },
    "config_tag_name": {
      "type": "string",
      "description": "Nom du config tag GA4 (résolu en tagId côté serveur)"
    },
    "event_parameters": {
      "type": "object",
      "description": "Paramètres event. Ex: {form_destination: \"{{Form URL}}\", form_id: \"{{Form ID}}\"}"
    },
    "user_properties": {
      "type": "object",
      "description": "User properties"
    },
    "consent_required": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Defaut: ['analytics_storage']"
    },
    "send_ecommerce_data": {
      "type": "boolean",
      "description": "Active e-commerce data (défaut: false)"
    }
  },
  "required": [
    "name",
    "event_name",
    "trigger_id",
    "config_tag_name"
  ]
}
```

</details>

<a id="tool-create_form_submission_trigger-a154be7c"></a>

## create_form_submission_trigger

Handler: Enables form built-ins and POSTs a formSubmission trigger with filters, tag waiting and validation settings.

```text
Crée un trigger Form Submission. waitForTags + checkValidation actifs par défaut pour ne pas perdre l'event sur redirect.
```

[Source](https://github.com/beuch26/webguru-gtm-mcp/blob/3a57a4798d5f199b3d84adc7298901597f117150/index.js#L596-L613) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Nom du trigger. Ex: \"Form - Contact submit\""
    },
    "filter_form_url": {
      "type": "string",
      "description": "URL de la page du form. Ex: \"/nous-contacter/\""
    },
    "filter_form_url_match": {
      "type": "string",
      "enum": [
        "EQUALS",
        "CONTAINS",
        "STARTS_WITH",
        "ENDS_WITH",
        "MATCHES_REGEX"
      ],
      "description": "Défaut: CONTAINS"
    },
    "filter_form_id": {
      "type": "string",
      "description": "Alternative ou complément au filter_form_url"
    },
    "wait_for_tags": {
      "type": "boolean",
      "description": "Défaut: true"
    },
    "wait_for_tags_timeout_ms": {
      "type": "number",
      "description": "Défaut: 2000"
    },
    "check_validation": {
      "type": "boolean",
      "description": "Défaut: true"
    }
  },
  "required": [
    "name"
  ]
}
```

</details>

<a id="tool-create_click_link_trigger-a8106b6d"></a>

## create_click_link_trigger

Handler: Enables recognized filter built-ins and POSTs a linkClick trigger separating auto-event and page filters.

```text
Crée un trigger "Just Links" (clic sur balise <a>) avec filtres multiples (Click URL, Click Text, Click Hostname, etc.). Plusieurs filtres = AND.
```

[Source](https://github.com/beuch26/webguru-gtm-mcp/blob/3a57a4798d5f199b3d84adc7298901597f117150/index.js#L613-L639) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Nom du trigger. Ex: \"Click - Phone tel:\""
    },
    "filters": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "variable": {
            "type": "string",
            "enum": [
              "CLICK_URL",
              "CLICK_HOSTNAME",
              "CLICK_TEXT",
              "CLICK_CLASSES",
              "CLICK_ID",
              "PAGE_URL",
              "PAGE_PATH"
            ]
          },
          "match": {
            "type": "string",
            "enum": [
              "EQUALS",
              "CONTAINS",
              "STARTS_WITH",
              "ENDS_WITH",
              "MATCHES_REGEX"
            ]
          },
          "value": {
            "type": "string"
          },
          "negate": {
            "type": "boolean",
            "description": "Défaut: false"
          }
        },
        "required": [
          "variable",
          "match",
          "value"
        ]
      }
    },
    "wait_for_tags": {
      "type": "boolean",
      "description": "Défaut: false"
    },
    "check_validation": {
      "type": "boolean",
      "description": "Défaut: false"
    }
  },
  "required": [
    "name",
    "filters"
  ]
}
```

</details>

<a id="tool-create_auto_event_variable-ea726177"></a>

## create_auto_event_variable

Handler: POSTs an aev GTM variable with URL source, component and optional query, host and default settings.

```text
Crée une Auto-Event Variable (type 'aev') — pour extraire des bouts de Click URL / Form URL (host, path, query…). Indispensable pour Click Hostname qui n'est pas dispo en built-in.
```

[Source](https://github.com/beuch26/webguru-gtm-mcp/blob/3a57a4798d5f199b3d84adc7298901597f117150/index.js#L639-L655) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Nom. Ex: \"Click Hostname\""
    },
    "source_var": {
      "type": "string",
      "enum": [
        "CLICK_URL",
        "FORM_URL"
      ],
      "description": "Variable source"
    },
    "component": {
      "type": "string",
      "enum": [
        "URL",
        "HOST",
        "PORT",
        "PATH",
        "QUERY",
        "FRAGMENT",
        "PROTOCOL",
        "IS_OUTBOUND"
      ],
      "description": "Composant à extraire"
    },
    "strip_www": {
      "type": "boolean",
      "description": "Si component=HOST, retire www. (défaut: true)"
    },
    "query_key": {
      "type": "string",
      "description": "Si component=QUERY, clé du paramètre à extraire"
    },
    "default_value": {
      "type": "string",
      "description": "Valeur si extraction échoue"
    }
  },
  "required": [
    "name",
    "source_var",
    "component"
  ]
}
```

</details>
