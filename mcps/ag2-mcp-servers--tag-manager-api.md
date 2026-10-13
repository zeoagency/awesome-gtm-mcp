# ag2-mcp-servers/tag-manager-api

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/ag2-mcp-servers/tag-manager-api) · [Machine-readable inventory](../data/mcps/ag2-mcp-servers--tag-manager-api.json)

**52 extracted tools.** Excluded: Bundled configuration targets 1Password and disables GTM tools; proxy security stubs cannot provide a working GTM authentication path.

Snapshot: 2026-10-13 · [c27bca677a81](https://github.com/ag2-mcp-servers/tag-manager-api/tree/c27bca677a819cf7ceb8b2cd0244fdca8037fb49) · Method: tools/list.

Exposure: Without CONFIG or CONFIG_PATH, all 52 decorated routes are registered. Configuration filters names and overrides URL; supplied configs expose zero GTM tools. MCP_SETTINGS customizes FastMCP.

## Limits

- Dependency versions are unpinned upstream; offline enumeration used ag2 0.9.4, MCP SDK 1.9.4 and Pydantic 2.11.7 on Python 3.12. Latest MCP SDK 2.3.0 fails this dependency registration (FastMCP import unavailable).
- All 52 exposed descriptions are empty: get_mcp registers wrapped functions without the decorator description; original functions have no docstrings. Route descriptions are recorded in behavior.
- Bundled mcp_config*.json files target events.1password.com and name absent 1Password operations; loading them filters all GTM functions out and overrides the server URL. Tests load the faulty mcp_config.json.
- Every route uses unsupported security stubs; no working Google OAuth security implementation or live GTM request was verified. Proxy dispatch requires configured security parameters.
- Proxy forwards Python query names without honoring FastAPI Query aliases (e.g. page_token instead of pageToken), joins a slash-terminated server with slash-prefixed routes, and does not check HTTP status. This can make requests invalid.
- Source exposes 52 routes, with generic /{path} GET/PUT/DELETE only registered as user-permission tools; missing product-specific CRUD names are not exposed. No API completeness claims were inferred.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`tagmanager_accounts_list`](#tool-tagmanager_accounts_list-72afedb8) | GTM | Proxy sends GET /tagmanager/v2/accounts to the configured server; route declares: Lists all GTM Accounts that a user has access to. |
| [`tagmanager_accounts_containers_lookup`](#tool-tagmanager_accounts_containers_lookup-d399b719) | GTM | Proxy sends GET /tagmanager/v2/accounts/containers:lookup to the configured server; route declares: Looks up a Container by destination ID. |
| [`list_builtin_variables_for_tagmanager_workspace`](#tool-list_builtin_variables_for_tagmanager_workspace-9421a7b9) | GTM | Proxy sends GET /tagmanager/v2/{parent}/built\_in\_variables to the configured server; route declares: Lists all the enabled Built-In Variables of a GTM Container. |
| [`create_tagmanager_built_in_variable`](#tool-create_tagmanager_built_in_variable-dc261a5c) | GTM | Proxy sends POST /tagmanager/v2/{parent}/built\_in\_variables to the configured server; route declares: Creates one or more GTM Built-In Variables. |
| [`tagmanager_accounts_containers_workspaces_clients_list`](#tool-tagmanager_accounts_containers_workspaces_clients_list-25d03081) | GTM | Proxy sends GET /tagmanager/v2/{parent}/clients to the configured server; route declares: Lists all GTM Clients of a GTM container workspace. |
| [`tagmanager_accounts_containers_workspaces_clients_create`](#tool-tagmanager_accounts_containers_workspaces_clients_create-3d1fd243) | GTM | Proxy sends POST /tagmanager/v2/{parent}/clients to the configured server; route declares: Creates a GTM Client. |
| [`tagmanager_accounts_containers_list`](#tool-tagmanager_accounts_containers_list-7d9362f9) | GTM | Proxy sends GET /tagmanager/v2/{parent}/containers to the configured server; route declares: Lists all Containers that belongs to a GTM Account. |
| [`tagmanager_accounts_containers_create`](#tool-tagmanager_accounts_containers_create-99583ddf) | GTM | Proxy sends POST /tagmanager/v2/{parent}/containers to the configured server; route declares: Creates a Container. |
| [`tagmanager_accounts_containers_destinations_list`](#tool-tagmanager_accounts_containers_destinations_list-474fd929) | GTM | Proxy sends GET /tagmanager/v2/{parent}/destinations to the configured server; route declares: Lists all Destinations linked to a GTM Container. |
| [`tagmanager_accounts_containers_destinations_link`](#tool-tagmanager_accounts_containers_destinations_link-6bdeccd3) | GTM | Proxy sends POST /tagmanager/v2/{parent}/destinations:link to the configured server; route declares: Adds a Destination to this Container and removes it from the Container to which it is currently linked. |
| [`tagmanager_accounts_containers_environments_list`](#tool-tagmanager_accounts_containers_environments_list-8304cb86) | GTM | Proxy sends GET /tagmanager/v2/{parent}/environments to the configured server; route declares: Lists all GTM Environments of a GTM Container. |
| [`tagmanager_accounts_containers_environments_create`](#tool-tagmanager_accounts_containers_environments_create-8f2a8361) | GTM | Proxy sends POST /tagmanager/v2/{parent}/environments to the configured server; route declares: Creates a GTM Environment. |
| [`tagmanager_accounts_containers_workspaces_folders_list`](#tool-tagmanager_accounts_containers_workspaces_folders_list-6befed14) | GTM | Proxy sends GET /tagmanager/v2/{parent}/folders to the configured server; route declares: Lists all GTM Folders of a Container. |
| [`tagmanager_accounts_containers_workspaces_folders_create`](#tool-tagmanager_accounts_containers_workspaces_folders_create-33116502) | GTM | Proxy sends POST /tagmanager/v2/{parent}/folders to the configured server; route declares: Creates a GTM Folder. |
| [`tagmanager_accounts_containers_workspaces_gtag_config_list`](#tool-tagmanager_accounts_containers_workspaces_gtag_config_list-62fbdf02) | GTM | Proxy sends GET /tagmanager/v2/{parent}/gtag\_config to the configured server; route declares: Lists all Google tag configs in a Container. |
| [`tagmanager_accounts_containers_workspaces_gtag_config_create`](#tool-tagmanager_accounts_containers_workspaces_gtag_config_create-e0fbb233) | GTM | Proxy sends POST /tagmanager/v2/{parent}/gtag\_config to the configured server; route declares: Creates a Google tag config. |
| [`tagmanager_accounts_containers_workspaces_tags_list`](#tool-tagmanager_accounts_containers_workspaces_tags_list-88a4f1d2) | GTM | Proxy sends GET /tagmanager/v2/{parent}/tags to the configured server; route declares: Lists all GTM Tags of a Container. |
| [`tagmanager_accounts_containers_workspaces_tags_create`](#tool-tagmanager_accounts_containers_workspaces_tags_create-f4988096) | GTM | Proxy sends POST /tagmanager/v2/{parent}/tags to the configured server; route declares: Creates a GTM Tag. |
| [`tagmanager_accounts_containers_workspaces_templates_list`](#tool-tagmanager_accounts_containers_workspaces_templates_list-42f425e2) | GTM | Proxy sends GET /tagmanager/v2/{parent}/templates to the configured server; route declares: Lists all GTM Templates of a GTM container workspace. |
| [`tagmanager_accounts_containers_workspaces_templates_create`](#tool-tagmanager_accounts_containers_workspaces_templates_create-f6477ccd) | GTM | Proxy sends POST /tagmanager/v2/{parent}/templates to the configured server; route declares: Creates a GTM Custom Template. |
| [`tagmanager_accounts_containers_workspaces_triggers_list`](#tool-tagmanager_accounts_containers_workspaces_triggers_list-44e90a05) | GTM | Proxy sends GET /tagmanager/v2/{parent}/triggers to the configured server; route declares: Lists all GTM Triggers of a Container. |
| [`tagmanager_accounts_containers_workspaces_triggers_create`](#tool-tagmanager_accounts_containers_workspaces_triggers_create-062b1747) | GTM | Proxy sends POST /tagmanager/v2/{parent}/triggers to the configured server; route declares: Creates a GTM Trigger. |
| [`tagmanager_accounts_user_permissions_list`](#tool-tagmanager_accounts_user_permissions_list-363095d6) | GTM | Proxy sends GET /tagmanager/v2/{parent}/user\_permissions to the configured server; route declares: List all users that have access to the account along with Account and Container user access granted to each of them. |
| [`tagmanager_accounts_user_permissions_create`](#tool-tagmanager_accounts_user_permissions_create-c33fa036) | GTM | Proxy sends POST /tagmanager/v2/{parent}/user\_permissions to the configured server; route declares: Creates a user's Account & Container access. |
| [`tagmanager_accounts_containers_workspaces_variables_list`](#tool-tagmanager_accounts_containers_workspaces_variables_list-e9e77967) | GTM | Proxy sends GET /tagmanager/v2/{parent}/variables to the configured server; route declares: Lists all GTM Variables of a Container. |
| [`tagmanager_accounts_containers_workspaces_variables_create`](#tool-tagmanager_accounts_containers_workspaces_variables_create-b4daf280) | GTM | Proxy sends POST /tagmanager/v2/{parent}/variables to the configured server; route declares: Creates a GTM Variable. |
| [`tagmanager_accounts_containers_version_headers_list`](#tool-tagmanager_accounts_containers_version_headers_list-1e9a09c8) | GTM | Proxy sends GET /tagmanager/v2/{parent}/version\_headers to the configured server; route declares: Lists all Container Versions of a GTM Container. |
| [`tagmanager_accounts_containers_version_headers_latest`](#tool-tagmanager_accounts_containers_version_headers_latest-835464de) | GTM | Proxy sends GET /tagmanager/v2/{parent}/version\_headers:latest to the configured server; route declares: Gets the latest container version header |
| [`tagmanager_accounts_containers_versions_live`](#tool-tagmanager_accounts_containers_versions_live-47ce0826) | GTM | Proxy sends GET /tagmanager/v2/{parent}/versions:live to the configured server; route declares: Gets the live (i.e. published) container version |
| [`tagmanager_accounts_containers_workspaces_list`](#tool-tagmanager_accounts_containers_workspaces_list-c3afaca9) | GTM | Proxy sends GET /tagmanager/v2/{parent}/workspaces to the configured server; route declares: Lists all Workspaces that belong to a GTM Container. |
| [`tagmanager_accounts_containers_workspaces_create`](#tool-tagmanager_accounts_containers_workspaces_create-4c6a33af) | GTM | Proxy sends POST /tagmanager/v2/{parent}/workspaces to the configured server; route declares: Creates a Workspace. |
| [`tagmanager_accounts_containers_workspaces_zones_list`](#tool-tagmanager_accounts_containers_workspaces_zones_list-38a5a562) | GTM | Proxy sends GET /tagmanager/v2/{parent}/zones to the configured server; route declares: Lists all GTM Zones of a GTM container workspace. |
| [`tagmanager_accounts_containers_workspaces_zones_create`](#tool-tagmanager_accounts_containers_workspaces_zones_create-4dc1641d) | GTM | Proxy sends POST /tagmanager/v2/{parent}/zones to the configured server; route declares: Creates a GTM Zone. |
| [`tagmanager_accounts_user_permissions_delete`](#tool-tagmanager_accounts_user_permissions_delete-b2d66b65) | GTM | Proxy sends DELETE /tagmanager/v2/{path} to the configured server; route declares: Removes a user from the account, revoking access to it and all of its containers. |
| [`tagmanager_accounts_user_permissions_get`](#tool-tagmanager_accounts_user_permissions_get-b16b7a52) | GTM | Proxy sends GET /tagmanager/v2/{path} to the configured server; route declares: Gets a user's Account & Container access. |
| [`tagmanager_accounts_user_permissions_update`](#tool-tagmanager_accounts_user_permissions_update-b9cad5fe) | GTM | Proxy sends PUT /tagmanager/v2/{path} to the configured server; route declares: Updates a user's Account & Container access. |
| [`revert_tagmanager_built_in_variables`](#tool-revert_tagmanager_built_in_variables-91786a76) | GTM | Proxy sends POST /tagmanager/v2/{path}/built\_in\_variables:revert to the configured server; route declares: Reverts changes to a GTM Built-In Variables in a GTM Workspace. |
| [`tagmanager_accounts_containers_workspaces_get_status`](#tool-tagmanager_accounts_containers_workspaces_get_status-f597a4a2) | GTM | Proxy sends GET /tagmanager/v2/{path}/status to the configured server; route declares: Finds conflicting and modified entities in the workspace. |
| [`tagmanager_accounts_containers_combine`](#tool-tagmanager_accounts_containers_combine-ea3d848c) | GTM | Proxy sends POST /tagmanager/v2/{path}:combine to the configured server; route declares: Combines Containers. |
| [`tagmanager_accounts_containers_workspaces_create_version`](#tool-tagmanager_accounts_containers_workspaces_create_version-52f57d20) | GTM | Proxy sends POST /tagmanager/v2/{path}:create\_version to the configured server; route declares: Creates a Container Version from the entities present in the workspace, deletes the workspace, and sets the base container version to the newly created version. |
| [`tagmanager_accounts_containers_workspaces_folders_entities`](#tool-tagmanager_accounts_containers_workspaces_folders_entities-3fe9902f) | GTM | Proxy sends POST /tagmanager/v2/{path}:entities to the configured server; route declares: List all entities in a GTM Folder. |
| [`move_entities_to_tag_folder`](#tool-move_entities_to_tag_folder-ea7d5b4a) | GTM | Proxy sends POST /tagmanager/v2/{path}:move\_entities\_to\_folder to the configured server; route declares: Moves entities to a GTM Folder. |
| [`tagmanager_accounts_containers_move_tag_id`](#tool-tagmanager_accounts_containers_move_tag_id-a31953eb) | GTM | Proxy sends POST /tagmanager/v2/{path}:move\_tag\_id to the configured server; route declares: Move Tag ID out of a Container. |
| [`tagmanager_accounts_containers_versions_publish`](#tool-tagmanager_accounts_containers_versions_publish-ac19d06e) | GTM | Proxy sends POST /tagmanager/v2/{path}:publish to the configured server; route declares: Publishes a Container Version. |
| [`tagmanager_accounts_containers_workspaces_quick_preview`](#tool-tagmanager_accounts_containers_workspaces_quick_preview-407718b4) | GTM | Proxy sends POST /tagmanager/v2/{path}:quick\_preview to the configured server; route declares: Quick previews a workspace by creating a fake container version from all entities in the provided workspace. |
| [`tagmanager_accounts_containers_environments_reauthorize`](#tool-tagmanager_accounts_containers_environments_reauthorize-44fb3fa4) | GTM | Proxy sends POST /tagmanager/v2/{path}:reauthorize to the configured server; route declares: Re-generates the authorization code for a GTM Environment. |
| [`tagmanager_accounts_containers_workspaces_resolve_conflict`](#tool-tagmanager_accounts_containers_workspaces_resolve_conflict-fb1248ce) | GTM | Proxy sends POST /tagmanager/v2/{path}:resolve\_conflict to the configured server; route declares: Resolves a merge conflict for a workspace entity by updating it to the resolved entity passed in the request. |
| [`tagmanager_accounts_containers_workspaces_zones_revert`](#tool-tagmanager_accounts_containers_workspaces_zones_revert-273a2fa4) | GTM | Proxy sends POST /tagmanager/v2/{path}:revert to the configured server; route declares: Reverts changes to a GTM Zone in a GTM Workspace. |
| [`tagmanager_accounts_containers_versions_set_latest`](#tool-tagmanager_accounts_containers_versions_set_latest-81b79b40) | GTM | Proxy sends POST /tagmanager/v2/{path}:set\_latest to the configured server; route declares: Sets the latest version used for synchronization of workspaces when detecting conflicts and errors. |
| [`tagmanager_accounts_containers_snippet`](#tool-tagmanager_accounts_containers_snippet-86f6f5a4) | GTM | Proxy sends GET /tagmanager/v2/{path}:snippet to the configured server; route declares: Gets the tagging snippet for a Container. |
| [`tagmanager_accounts_containers_workspaces_sync`](#tool-tagmanager_accounts_containers_workspaces_sync-752d02df) | GTM | Proxy sends POST /tagmanager/v2/{path}:sync to the configured server; route declares: Syncs a workspace to the latest container version by updating all unmodified workspace entities and displaying conflicts for modified entities. |
| [`tagmanager_accounts_containers_versions_undelete`](#tool-tagmanager_accounts_containers_versions_undelete-4d9ee3cd) | GTM | Proxy sends POST /tagmanager/v2/{path}:undelete to the configured server; route declares: Undeletes a Container Version. |

<a id="tool-tagmanager_accounts_list-72afedb8"></a>

## tagmanager_accounts_list

Handler: Proxy sends GET /tagmanager/v2/accounts to the configured server; route declares: Lists all GTM Accounts that a user has access to.

*Upstream exposes no tool description.*

[Source](https://github.com/ag2-mcp-servers/tag-manager-api/blob/c27bca677a819cf7ceb8b2cd0244fdca8037fb49/mcp_server/main.py#L86-L114) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "Alt": {
      "enum": [
        "json",
        "media",
        "proto"
      ],
      "title": "Alt",
      "type": "string"
    },
    "FieldXgafv": {
      "enum": [
        "1",
        "2"
      ],
      "title": "FieldXgafv",
      "type": "string"
    }
  },
  "properties": {
    "includeGoogleTags": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Includegoogletags"
    },
    "pageToken": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Pagetoken"
    },
    "$.xgafv": {
      "anyOf": [
        {
          "$ref": "#/$defs/FieldXgafv"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "access_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Access Token"
    },
    "alt": {
      "anyOf": [
        {
          "$ref": "#/$defs/Alt"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "callback": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Callback"
    },
    "fields": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Fields"
    },
    "key": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Key"
    },
    "oauth_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Oauth Token"
    },
    "prettyPrint": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Prettyprint"
    },
    "quotaUser": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Quotauser"
    },
    "upload_protocol": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Upload Protocol"
    },
    "uploadType": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Uploadtype"
    }
  },
  "title": "tagmanager_accounts_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-tagmanager_accounts_containers_lookup-d399b719"></a>

## tagmanager_accounts_containers_lookup

Handler: Proxy sends GET /tagmanager/v2/accounts/containers:lookup to the configured server; route declares: Looks up a Container by destination ID.

*Upstream exposes no tool description.*

[Source](https://github.com/ag2-mcp-servers/tag-manager-api/blob/c27bca677a819cf7ceb8b2cd0244fdca8037fb49/mcp_server/main.py#L117-L142) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "Alt": {
      "enum": [
        "json",
        "media",
        "proto"
      ],
      "title": "Alt",
      "type": "string"
    },
    "FieldXgafv": {
      "enum": [
        "1",
        "2"
      ],
      "title": "FieldXgafv",
      "type": "string"
    }
  },
  "properties": {
    "destinationId": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Destinationid"
    },
    "$.xgafv": {
      "anyOf": [
        {
          "$ref": "#/$defs/FieldXgafv"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "access_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Access Token"
    },
    "alt": {
      "anyOf": [
        {
          "$ref": "#/$defs/Alt"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "callback": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Callback"
    },
    "fields": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Fields"
    },
    "key": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Key"
    },
    "oauth_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Oauth Token"
    },
    "prettyPrint": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Prettyprint"
    },
    "quotaUser": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Quotauser"
    },
    "upload_protocol": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Upload Protocol"
    },
    "uploadType": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Uploadtype"
    }
  },
  "title": "tagmanager_accounts_containers_lookupArguments",
  "type": "object"
}
```

</details>

<a id="tool-list_builtin_variables_for_tagmanager_workspace-9421a7b9"></a>

## list_builtin_variables_for_tagmanager_workspace

Handler: Proxy sends GET /tagmanager/v2/{parent}/built\_in\_variables to the configured server; route declares: Lists all the enabled Built-In Variables of a GTM Container.

*Upstream exposes no tool description.*

[Source](https://github.com/ag2-mcp-servers/tag-manager-api/blob/c27bca677a819cf7ceb8b2cd0244fdca8037fb49/mcp_server/main.py#L145-L171) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "Alt": {
      "enum": [
        "json",
        "media",
        "proto"
      ],
      "title": "Alt",
      "type": "string"
    },
    "FieldXgafv": {
      "enum": [
        "1",
        "2"
      ],
      "title": "FieldXgafv",
      "type": "string"
    }
  },
  "properties": {
    "parent": {
      "title": "Parent",
      "type": "string"
    },
    "pageToken": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Pagetoken"
    },
    "$.xgafv": {
      "anyOf": [
        {
          "$ref": "#/$defs/FieldXgafv"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "access_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Access Token"
    },
    "alt": {
      "anyOf": [
        {
          "$ref": "#/$defs/Alt"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "callback": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Callback"
    },
    "fields": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Fields"
    },
    "key": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Key"
    },
    "oauth_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Oauth Token"
    },
    "prettyPrint": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Prettyprint"
    },
    "quotaUser": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Quotauser"
    },
    "upload_protocol": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Upload Protocol"
    },
    "uploadType": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Uploadtype"
    }
  },
  "required": [
    "parent"
  ],
  "title": "list_builtin_variables_for_tagmanager_workspaceArguments",
  "type": "object"
}
```

</details>

<a id="tool-create_tagmanager_built_in_variable-dc261a5c"></a>

## create_tagmanager_built_in_variable

Handler: Proxy sends POST /tagmanager/v2/{parent}/built\_in\_variables to the configured server; route declares: Creates one or more GTM Built-In Variables.

*Upstream exposes no tool description.*

[Source](https://github.com/ag2-mcp-servers/tag-manager-api/blob/c27bca677a819cf7ceb8b2cd0244fdca8037fb49/mcp_server/main.py#L174-L198) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "Alt": {
      "enum": [
        "json",
        "media",
        "proto"
      ],
      "title": "Alt",
      "type": "string"
    },
    "FieldXgafv": {
      "enum": [
        "1",
        "2"
      ],
      "title": "FieldXgafv",
      "type": "string"
    },
    "Type5": {
      "items": {
        "$ref": "#/$defs/TypeEnum"
      },
      "title": "Type5",
      "type": "array"
    },
    "TypeEnum": {
      "enum": [
        "builtInVariableTypeUnspecified",
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
        "visitorRegion"
      ],
      "title": "TypeEnum",
      "type": "string"
    }
  },
  "properties": {
    "parent": {
      "title": "Parent",
      "type": "string"
    },
    "type": {
      "anyOf": [
        {
          "$ref": "#/$defs/Type5"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "$.xgafv": {
      "anyOf": [
        {
          "$ref": "#/$defs/FieldXgafv"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "access_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Access Token"
    },
    "alt": {
      "anyOf": [
        {
          "$ref": "#/$defs/Alt"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "callback": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Callback"
    },
    "fields": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Fields"
    },
    "key": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Key"
    },
    "oauth_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Oauth Token"
    },
    "prettyPrint": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Prettyprint"
    },
    "quotaUser": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Quotauser"
    },
    "upload_protocol": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Upload Protocol"
    },
    "uploadType": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Uploadtype"
    }
  },
  "required": [
    "parent"
  ],
  "title": "create_tagmanager_built_in_variableArguments",
  "type": "object"
}
```

</details>

<a id="tool-tagmanager_accounts_containers_workspaces_clients_list-25d03081"></a>

## tagmanager_accounts_containers_workspaces_clients_list

Handler: Proxy sends GET /tagmanager/v2/{parent}/clients to the configured server; route declares: Lists all GTM Clients of a GTM container workspace.

*Upstream exposes no tool description.*

[Source](https://github.com/ag2-mcp-servers/tag-manager-api/blob/c27bca677a819cf7ceb8b2cd0244fdca8037fb49/mcp_server/main.py#L201-L232) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "Alt": {
      "enum": [
        "json",
        "media",
        "proto"
      ],
      "title": "Alt",
      "type": "string"
    },
    "FieldXgafv": {
      "enum": [
        "1",
        "2"
      ],
      "title": "FieldXgafv",
      "type": "string"
    }
  },
  "properties": {
    "parent": {
      "title": "Parent",
      "type": "string"
    },
    "pageToken": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Pagetoken"
    },
    "$.xgafv": {
      "anyOf": [
        {
          "$ref": "#/$defs/FieldXgafv"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "access_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Access Token"
    },
    "alt": {
      "anyOf": [
        {
          "$ref": "#/$defs/Alt"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "callback": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Callback"
    },
    "fields": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Fields"
    },
    "key": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Key"
    },
    "oauth_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Oauth Token"
    },
    "prettyPrint": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Prettyprint"
    },
    "quotaUser": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Quotauser"
    },
    "upload_protocol": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Upload Protocol"
    },
    "uploadType": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Uploadtype"
    }
  },
  "required": [
    "parent"
  ],
  "title": "tagmanager_accounts_containers_workspaces_clients_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-tagmanager_accounts_containers_workspaces_clients_create-3d1fd243"></a>

## tagmanager_accounts_containers_workspaces_clients_create

Handler: Proxy sends POST /tagmanager/v2/{parent}/clients to the configured server; route declares: Creates a GTM Client.

*Upstream exposes no tool description.*

[Source](https://github.com/ag2-mcp-servers/tag-manager-api/blob/c27bca677a819cf7ceb8b2cd0244fdca8037fb49/mcp_server/main.py#L235-L259) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "Alt": {
      "enum": [
        "json",
        "media",
        "proto"
      ],
      "title": "Alt",
      "type": "string"
    },
    "Client": {
      "properties": {
        "accountId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Account ID.",
          "title": "Accountid"
        },
        "clientId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The Client ID uniquely identifies the GTM client.",
          "title": "Clientid"
        },
        "containerId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Container ID.",
          "title": "Containerid"
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
          "description": "The fingerprint of the GTM Client as computed at storage time. This value is recomputed whenever the client is modified.",
          "title": "Fingerprint"
        },
        "name": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Client display name. @mutable tagmanager.accounts.containers.workspaces.clients.create @mutable tagmanager.accounts.containers.workspaces.clients.update",
          "title": "Name"
        },
        "notes": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "User notes on how to apply this tag in the container. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          "title": "Notes"
        },
        "parameter": {
          "anyOf": [
            {
              "items": {
                "$ref": "#/$defs/Parameter"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The client's parameters. @mutable tagmanager.accounts.containers.workspaces.clients.create @mutable tagmanager.accounts.containers.workspaces.clients.update",
          "title": "Parameter"
        },
        "parentFolderId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Parent folder id.",
          "title": "Parentfolderid"
        },
        "path": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM client's API relative path.",
          "title": "Path"
        },
        "priority": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Priority determines relative firing order. @mutable tagmanager.accounts.containers.workspaces.clients.create @mutable tagmanager.accounts.containers.workspaces.clients.update",
          "title": "Priority"
        },
        "tagManagerUrl": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Auto generated link to the tag manager UI",
          "title": "Tagmanagerurl"
        },
        "type": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Client type. @mutable tagmanager.accounts.containers.workspaces.clients.create @mutable tagmanager.accounts.containers.workspaces.clients.update",
          "title": "Type"
        },
        "workspaceId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Workspace ID.",
          "title": "Workspaceid"
        }
      },
      "title": "Client",
      "type": "object"
    },
    "FieldXgafv": {
      "enum": [
        "1",
        "2"
      ],
      "title": "FieldXgafv",
      "type": "string"
    },
    "Parameter": {
      "properties": {
        "key": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The named key that uniquely identifies a parameter. Required for top-level parameters, as well as map values. Ignored for list values. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          "title": "Key"
        },
        "list": {
          "anyOf": [
            {
              "items": {
                "$ref": "#/$defs/Parameter"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "This list parameter's parameters (keys will be ignored). @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          "title": "List"
        },
        "map": {
          "anyOf": [
            {
              "items": {
                "$ref": "#/$defs/Parameter"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "This map parameter's parameters (must have keys; keys must be unique). @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          "title": "Map"
        },
        "type": {
          "anyOf": [
            {
              "$ref": "#/$defs/Type3"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The parameter type. Valid values are: - boolean: The value represents a boolean, represented as 'true' or 'false' - integer: The value represents a 64-bit signed integer value, in base 10 - list: A list of parameters should be specified - map: A map of parameters should be specified - template: The value represents any text; this can include variable references (even variable references that might return non-string types) - trigger_reference: The value represents a trigger, represented as the trigger id - tag_reference: The value represents a tag, represented as the tag name @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update"
        },
        "value": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "A parameter's value (may contain variable references such as \"{{myVariable}}\") as appropriate to the specified type. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          "title": "Value"
        }
      },
      "title": "Parameter",
      "type": "object"
    },
    "Type3": {
      "enum": [
        "typeUnspecified",
        "template",
        "integer",
        "boolean",
        "list",
        "map",
        "triggerReference",
        "tagReference"
      ],
      "title": "Type3",
      "type": "string"
    }
  },
  "properties": {
    "parent": {
      "title": "Parent",
      "type": "string"
    },
    "$.xgafv": {
      "anyOf": [
        {
          "$ref": "#/$defs/FieldXgafv"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "access_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Access Token"
    },
    "alt": {
      "anyOf": [
        {
          "$ref": "#/$defs/Alt"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "callback": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Callback"
    },
    "fields": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Fields"
    },
    "key": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Key"
    },
    "oauth_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Oauth Token"
    },
    "prettyPrint": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Prettyprint"
    },
    "quotaUser": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Quotauser"
    },
    "upload_protocol": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Upload Protocol"
    },
    "uploadType": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Uploadtype"
    },
    "body": {
      "$ref": "#/$defs/Client",
      "default": null
    }
  },
  "required": [
    "parent"
  ],
  "title": "tagmanager_accounts_containers_workspaces_clients_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-tagmanager_accounts_containers_list-7d9362f9"></a>

## tagmanager_accounts_containers_list

Handler: Proxy sends GET /tagmanager/v2/{parent}/containers to the configured server; route declares: Lists all Containers that belongs to a GTM Account.

*Upstream exposes no tool description.*

[Source](https://github.com/ag2-mcp-servers/tag-manager-api/blob/c27bca677a819cf7ceb8b2cd0244fdca8037fb49/mcp_server/main.py#L262-L293) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "Alt": {
      "enum": [
        "json",
        "media",
        "proto"
      ],
      "title": "Alt",
      "type": "string"
    },
    "FieldXgafv": {
      "enum": [
        "1",
        "2"
      ],
      "title": "FieldXgafv",
      "type": "string"
    }
  },
  "properties": {
    "parent": {
      "title": "Parent",
      "type": "string"
    },
    "pageToken": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Pagetoken"
    },
    "$.xgafv": {
      "anyOf": [
        {
          "$ref": "#/$defs/FieldXgafv"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "access_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Access Token"
    },
    "alt": {
      "anyOf": [
        {
          "$ref": "#/$defs/Alt"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "callback": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Callback"
    },
    "fields": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Fields"
    },
    "key": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Key"
    },
    "oauth_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Oauth Token"
    },
    "prettyPrint": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Prettyprint"
    },
    "quotaUser": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Quotauser"
    },
    "upload_protocol": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Upload Protocol"
    },
    "uploadType": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Uploadtype"
    }
  },
  "required": [
    "parent"
  ],
  "title": "tagmanager_accounts_containers_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-tagmanager_accounts_containers_create-99583ddf"></a>

## tagmanager_accounts_containers_create

Handler: Proxy sends POST /tagmanager/v2/{parent}/containers to the configured server; route declares: Creates a Container.

*Upstream exposes no tool description.*

[Source](https://github.com/ag2-mcp-servers/tag-manager-api/blob/c27bca677a819cf7ceb8b2cd0244fdca8037fb49/mcp_server/main.py#L296-L320) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "Alt": {
      "enum": [
        "json",
        "media",
        "proto"
      ],
      "title": "Alt",
      "type": "string"
    },
    "Container": {
      "properties": {
        "accountId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Account ID.",
          "title": "Accountid"
        },
        "containerId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The Container ID uniquely identifies the GTM Container.",
          "title": "Containerid"
        },
        "domainName": {
          "anyOf": [
            {
              "items": {
                "type": "string"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "List of domain names associated with the Container. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update",
          "title": "Domainname"
        },
        "features": {
          "anyOf": [
            {
              "$ref": "#/$defs/ContainerFeatures"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Read-only Container feature set."
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
          "description": "The fingerprint of the GTM Container as computed at storage time. This value is recomputed whenever the account is modified.",
          "title": "Fingerprint"
        },
        "name": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Container display name. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update",
          "title": "Name"
        },
        "notes": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Container Notes. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update",
          "title": "Notes"
        },
        "path": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Container's API relative path.",
          "title": "Path"
        },
        "publicId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Container Public ID.",
          "title": "Publicid"
        },
        "tagIds": {
          "anyOf": [
            {
              "items": {
                "type": "string"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "All Tag IDs that refer to this Container.",
          "title": "Tagids"
        },
        "tagManagerUrl": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Auto generated link to the tag manager UI",
          "title": "Tagmanagerurl"
        },
        "taggingServerUrls": {
          "anyOf": [
            {
              "items": {
                "type": "string"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "List of server-side container URLs for the Container. If multiple URLs are provided, all URL paths must match. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update",
          "title": "Taggingserverurls"
        },
        "usageContext": {
          "anyOf": [
            {
              "items": {
                "$ref": "#/$defs/UsageContextEnum"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "List of Usage Contexts for the Container. Valid values include: web, android, or ios. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update",
          "title": "Usagecontext"
        }
      },
      "title": "Container",
      "type": "object"
    },
    "ContainerFeatures": {
      "properties": {
        "supportBuiltInVariables": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Whether this Container supports built-in variables",
          "title": "Supportbuiltinvariables"
        },
        "supportClients": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Whether this Container supports clients.",
          "title": "Supportclients"
        },
        "supportEnvironments": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Whether this Container supports environments.",
          "title": "Supportenvironments"
        },
        "supportFolders": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Whether this Container supports folders.",
          "title": "Supportfolders"
        },
        "supportGtagConfigs": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Whether this Container supports Google tag config.",
          "title": "Supportgtagconfigs"
        },
        "supportTags": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Whether this Container supports tags.",
          "title": "Supporttags"
        },
        "supportTemplates": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Whether this Container supports templates.",
          "title": "Supporttemplates"
        },
        "supportTriggers": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Whether this Container supports triggers.",
          "title": "Supporttriggers"
        },
        "supportUserPermissions": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Whether this Container supports user permissions managed by GTM.",
          "title": "Supportuserpermissions"
        },
        "supportVariables": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Whether this Container supports variables.",
          "title": "Supportvariables"
        },
        "supportVersions": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Whether this Container supports Container versions.",
          "title": "Supportversions"
        },
        "supportWorkspaces": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Whether this Container supports workspaces.",
          "title": "Supportworkspaces"
        },
        "supportZones": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Whether this Container supports zones.",
          "title": "Supportzones"
        }
      },
      "title": "ContainerFeatures",
      "type": "object"
    },
    "FieldXgafv": {
      "enum": [
        "1",
        "2"
      ],
      "title": "FieldXgafv",
      "type": "string"
    },
    "UsageContextEnum": {
      "enum": [
        "usageContextUnspecified",
        "web",
        "android",
        "ios",
        "androidSdk5",
        "iosSdk5",
        "amp",
        "server"
      ],
      "title": "UsageContextEnum",
      "type": "string"
    }
  },
  "properties": {
    "parent": {
      "title": "Parent",
      "type": "string"
    },
    "$.xgafv": {
      "anyOf": [
        {
          "$ref": "#/$defs/FieldXgafv"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "access_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Access Token"
    },
    "alt": {
      "anyOf": [
        {
          "$ref": "#/$defs/Alt"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "callback": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Callback"
    },
    "fields": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Fields"
    },
    "key": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Key"
    },
    "oauth_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Oauth Token"
    },
    "prettyPrint": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Prettyprint"
    },
    "quotaUser": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Quotauser"
    },
    "upload_protocol": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Upload Protocol"
    },
    "uploadType": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Uploadtype"
    },
    "body": {
      "$ref": "#/$defs/Container",
      "default": null
    }
  },
  "required": [
    "parent"
  ],
  "title": "tagmanager_accounts_containers_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-tagmanager_accounts_containers_destinations_list-474fd929"></a>

## tagmanager_accounts_containers_destinations_list

Handler: Proxy sends GET /tagmanager/v2/{parent}/destinations to the configured server; route declares: Lists all Destinations linked to a GTM Container.

*Upstream exposes no tool description.*

[Source](https://github.com/ag2-mcp-servers/tag-manager-api/blob/c27bca677a819cf7ceb8b2cd0244fdca8037fb49/mcp_server/main.py#L323-L353) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "Alt": {
      "enum": [
        "json",
        "media",
        "proto"
      ],
      "title": "Alt",
      "type": "string"
    },
    "FieldXgafv": {
      "enum": [
        "1",
        "2"
      ],
      "title": "FieldXgafv",
      "type": "string"
    }
  },
  "properties": {
    "parent": {
      "title": "Parent",
      "type": "string"
    },
    "$.xgafv": {
      "anyOf": [
        {
          "$ref": "#/$defs/FieldXgafv"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "access_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Access Token"
    },
    "alt": {
      "anyOf": [
        {
          "$ref": "#/$defs/Alt"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "callback": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Callback"
    },
    "fields": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Fields"
    },
    "key": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Key"
    },
    "oauth_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Oauth Token"
    },
    "prettyPrint": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Prettyprint"
    },
    "quotaUser": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Quotauser"
    },
    "upload_protocol": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Upload Protocol"
    },
    "uploadType": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Uploadtype"
    }
  },
  "required": [
    "parent"
  ],
  "title": "tagmanager_accounts_containers_destinations_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-tagmanager_accounts_containers_destinations_link-6bdeccd3"></a>

## tagmanager_accounts_containers_destinations_link

Handler: Proxy sends POST /tagmanager/v2/{parent}/destinations:link to the configured server; route declares: Adds a Destination to this Container and removes it from the Container to which it is currently linked.

*Upstream exposes no tool description.*

[Source](https://github.com/ag2-mcp-servers/tag-manager-api/blob/c27bca677a819cf7ceb8b2cd0244fdca8037fb49/mcp_server/main.py#L356-L383) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "Alt": {
      "enum": [
        "json",
        "media",
        "proto"
      ],
      "title": "Alt",
      "type": "string"
    },
    "FieldXgafv": {
      "enum": [
        "1",
        "2"
      ],
      "title": "FieldXgafv",
      "type": "string"
    }
  },
  "properties": {
    "parent": {
      "title": "Parent",
      "type": "string"
    },
    "allowUserPermissionFeatureUpdate": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Allowuserpermissionfeatureupdate"
    },
    "destinationId": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Destinationid"
    },
    "$.xgafv": {
      "anyOf": [
        {
          "$ref": "#/$defs/FieldXgafv"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "access_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Access Token"
    },
    "alt": {
      "anyOf": [
        {
          "$ref": "#/$defs/Alt"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "callback": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Callback"
    },
    "fields": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Fields"
    },
    "key": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Key"
    },
    "oauth_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Oauth Token"
    },
    "prettyPrint": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Prettyprint"
    },
    "quotaUser": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Quotauser"
    },
    "upload_protocol": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Upload Protocol"
    },
    "uploadType": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Uploadtype"
    }
  },
  "required": [
    "parent"
  ],
  "title": "tagmanager_accounts_containers_destinations_linkArguments",
  "type": "object"
}
```

</details>

<a id="tool-tagmanager_accounts_containers_environments_list-8304cb86"></a>

## tagmanager_accounts_containers_environments_list

Handler: Proxy sends GET /tagmanager/v2/{parent}/environments to the configured server; route declares: Lists all GTM Environments of a GTM Container.

*Upstream exposes no tool description.*

[Source](https://github.com/ag2-mcp-servers/tag-manager-api/blob/c27bca677a819cf7ceb8b2cd0244fdca8037fb49/mcp_server/main.py#L386-L428) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "Alt": {
      "enum": [
        "json",
        "media",
        "proto"
      ],
      "title": "Alt",
      "type": "string"
    },
    "FieldXgafv": {
      "enum": [
        "1",
        "2"
      ],
      "title": "FieldXgafv",
      "type": "string"
    }
  },
  "properties": {
    "parent": {
      "title": "Parent",
      "type": "string"
    },
    "pageToken": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Pagetoken"
    },
    "$.xgafv": {
      "anyOf": [
        {
          "$ref": "#/$defs/FieldXgafv"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "access_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Access Token"
    },
    "alt": {
      "anyOf": [
        {
          "$ref": "#/$defs/Alt"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "callback": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Callback"
    },
    "fields": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Fields"
    },
    "key": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Key"
    },
    "oauth_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Oauth Token"
    },
    "prettyPrint": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Prettyprint"
    },
    "quotaUser": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Quotauser"
    },
    "upload_protocol": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Upload Protocol"
    },
    "uploadType": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Uploadtype"
    }
  },
  "required": [
    "parent"
  ],
  "title": "tagmanager_accounts_containers_environments_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-tagmanager_accounts_containers_environments_create-8f2a8361"></a>

## tagmanager_accounts_containers_environments_create

Handler: Proxy sends POST /tagmanager/v2/{parent}/environments to the configured server; route declares: Creates a GTM Environment.

*Upstream exposes no tool description.*

[Source](https://github.com/ag2-mcp-servers/tag-manager-api/blob/c27bca677a819cf7ceb8b2cd0244fdca8037fb49/mcp_server/main.py#L431-L455) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "Alt": {
      "enum": [
        "json",
        "media",
        "proto"
      ],
      "title": "Alt",
      "type": "string"
    },
    "Environment": {
      "properties": {
        "accountId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Account ID.",
          "title": "Accountid"
        },
        "authorizationCode": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The environment authorization code.",
          "title": "Authorizationcode"
        },
        "authorizationTimestamp": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The last update time-stamp for the authorization code.",
          "title": "Authorizationtimestamp"
        },
        "containerId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Container ID.",
          "title": "Containerid"
        },
        "containerVersionId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Represents a link to a container version.",
          "title": "Containerversionid"
        },
        "description": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The environment description. Can be set or changed only on USER type environments. @mutable tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update",
          "title": "Description"
        },
        "enableDebug": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Whether or not to enable debug by default for the environment. @mutable tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update",
          "title": "Enabledebug"
        },
        "environmentId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Environment ID uniquely identifies the GTM Environment.",
          "title": "Environmentid"
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
          "description": "The fingerprint of the GTM environment as computed at storage time. This value is recomputed whenever the environment is modified.",
          "title": "Fingerprint"
        },
        "name": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The environment display name. Can be set or changed only on USER type environments. @mutable tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update",
          "title": "Name"
        },
        "path": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Environment's API relative path.",
          "title": "Path"
        },
        "tagManagerUrl": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Auto generated link to the tag manager UI",
          "title": "Tagmanagerurl"
        },
        "type": {
          "anyOf": [
            {
              "$ref": "#/$defs/Type2"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The type of this environment."
        },
        "url": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Default preview page url for the environment. @mutable tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update",
          "title": "Url"
        },
        "workspaceId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Represents a link to a quick preview of a workspace.",
          "title": "Workspaceid"
        }
      },
      "title": "Environment",
      "type": "object"
    },
    "FieldXgafv": {
      "enum": [
        "1",
        "2"
      ],
      "title": "FieldXgafv",
      "type": "string"
    },
    "Type2": {
      "enum": [
        "user",
        "live",
        "latest",
        "workspace"
      ],
      "title": "Type2",
      "type": "string"
    }
  },
  "properties": {
    "parent": {
      "title": "Parent",
      "type": "string"
    },
    "$.xgafv": {
      "anyOf": [
        {
          "$ref": "#/$defs/FieldXgafv"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "access_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Access Token"
    },
    "alt": {
      "anyOf": [
        {
          "$ref": "#/$defs/Alt"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "callback": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Callback"
    },
    "fields": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Fields"
    },
    "key": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Key"
    },
    "oauth_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Oauth Token"
    },
    "prettyPrint": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Prettyprint"
    },
    "quotaUser": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Quotauser"
    },
    "upload_protocol": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Upload Protocol"
    },
    "uploadType": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Uploadtype"
    },
    "body": {
      "$ref": "#/$defs/Environment",
      "default": null
    }
  },
  "required": [
    "parent"
  ],
  "title": "tagmanager_accounts_containers_environments_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-tagmanager_accounts_containers_workspaces_folders_list-6befed14"></a>

## tagmanager_accounts_containers_workspaces_folders_list

Handler: Proxy sends GET /tagmanager/v2/{parent}/folders to the configured server; route declares: Lists all GTM Folders of a Container.

*Upstream exposes no tool description.*

[Source](https://github.com/ag2-mcp-servers/tag-manager-api/blob/c27bca677a819cf7ceb8b2cd0244fdca8037fb49/mcp_server/main.py#L458-L488) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "Alt": {
      "enum": [
        "json",
        "media",
        "proto"
      ],
      "title": "Alt",
      "type": "string"
    },
    "FieldXgafv": {
      "enum": [
        "1",
        "2"
      ],
      "title": "FieldXgafv",
      "type": "string"
    }
  },
  "properties": {
    "parent": {
      "title": "Parent",
      "type": "string"
    },
    "pageToken": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Pagetoken"
    },
    "$.xgafv": {
      "anyOf": [
        {
          "$ref": "#/$defs/FieldXgafv"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "access_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Access Token"
    },
    "alt": {
      "anyOf": [
        {
          "$ref": "#/$defs/Alt"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "callback": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Callback"
    },
    "fields": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Fields"
    },
    "key": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Key"
    },
    "oauth_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Oauth Token"
    },
    "prettyPrint": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Prettyprint"
    },
    "quotaUser": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Quotauser"
    },
    "upload_protocol": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Upload Protocol"
    },
    "uploadType": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Uploadtype"
    }
  },
  "required": [
    "parent"
  ],
  "title": "tagmanager_accounts_containers_workspaces_folders_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-tagmanager_accounts_containers_workspaces_folders_create-33116502"></a>

## tagmanager_accounts_containers_workspaces_folders_create

Handler: Proxy sends POST /tagmanager/v2/{parent}/folders to the configured server; route declares: Creates a GTM Folder.

*Upstream exposes no tool description.*

[Source](https://github.com/ag2-mcp-servers/tag-manager-api/blob/c27bca677a819cf7ceb8b2cd0244fdca8037fb49/mcp_server/main.py#L491-L515) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "Alt": {
      "enum": [
        "json",
        "media",
        "proto"
      ],
      "title": "Alt",
      "type": "string"
    },
    "FieldXgafv": {
      "enum": [
        "1",
        "2"
      ],
      "title": "FieldXgafv",
      "type": "string"
    },
    "Folder": {
      "properties": {
        "accountId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Account ID.",
          "title": "Accountid"
        },
        "containerId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Container ID.",
          "title": "Containerid"
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
          "description": "The fingerprint of the GTM Folder as computed at storage time. This value is recomputed whenever the folder is modified.",
          "title": "Fingerprint"
        },
        "folderId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The Folder ID uniquely identifies the GTM Folder.",
          "title": "Folderid"
        },
        "name": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Folder display name. @mutable tagmanager.accounts.containers.workspaces.folders.create @mutable tagmanager.accounts.containers.workspaces.folders.update",
          "title": "Name"
        },
        "notes": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "User notes on how to apply this folder in the container. @mutable tagmanager.accounts.containers.workspaces.folders.create @mutable tagmanager.accounts.containers.workspaces.folders.update",
          "title": "Notes"
        },
        "path": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Folder's API relative path.",
          "title": "Path"
        },
        "tagManagerUrl": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Auto generated link to the tag manager UI",
          "title": "Tagmanagerurl"
        },
        "workspaceId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Workspace ID.",
          "title": "Workspaceid"
        }
      },
      "title": "Folder",
      "type": "object"
    }
  },
  "properties": {
    "parent": {
      "title": "Parent",
      "type": "string"
    },
    "$.xgafv": {
      "anyOf": [
        {
          "$ref": "#/$defs/FieldXgafv"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "access_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Access Token"
    },
    "alt": {
      "anyOf": [
        {
          "$ref": "#/$defs/Alt"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "callback": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Callback"
    },
    "fields": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Fields"
    },
    "key": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Key"
    },
    "oauth_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Oauth Token"
    },
    "prettyPrint": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Prettyprint"
    },
    "quotaUser": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Quotauser"
    },
    "upload_protocol": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Upload Protocol"
    },
    "uploadType": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Uploadtype"
    },
    "body": {
      "$ref": "#/$defs/Folder",
      "default": null
    }
  },
  "required": [
    "parent"
  ],
  "title": "tagmanager_accounts_containers_workspaces_folders_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-tagmanager_accounts_containers_workspaces_gtag_config_list-62fbdf02"></a>

## tagmanager_accounts_containers_workspaces_gtag_config_list

Handler: Proxy sends GET /tagmanager/v2/{parent}/gtag\_config to the configured server; route declares: Lists all Google tag configs in a Container.

*Upstream exposes no tool description.*

[Source](https://github.com/ag2-mcp-servers/tag-manager-api/blob/c27bca677a819cf7ceb8b2cd0244fdca8037fb49/mcp_server/main.py#L518-L544) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "Alt": {
      "enum": [
        "json",
        "media",
        "proto"
      ],
      "title": "Alt",
      "type": "string"
    },
    "FieldXgafv": {
      "enum": [
        "1",
        "2"
      ],
      "title": "FieldXgafv",
      "type": "string"
    }
  },
  "properties": {
    "parent": {
      "title": "Parent",
      "type": "string"
    },
    "pageToken": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Pagetoken"
    },
    "$.xgafv": {
      "anyOf": [
        {
          "$ref": "#/$defs/FieldXgafv"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "access_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Access Token"
    },
    "alt": {
      "anyOf": [
        {
          "$ref": "#/$defs/Alt"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "callback": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Callback"
    },
    "fields": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Fields"
    },
    "key": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Key"
    },
    "oauth_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Oauth Token"
    },
    "prettyPrint": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Prettyprint"
    },
    "quotaUser": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Quotauser"
    },
    "upload_protocol": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Upload Protocol"
    },
    "uploadType": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Uploadtype"
    }
  },
  "required": [
    "parent"
  ],
  "title": "tagmanager_accounts_containers_workspaces_gtag_config_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-tagmanager_accounts_containers_workspaces_gtag_config_create-e0fbb233"></a>

## tagmanager_accounts_containers_workspaces_gtag_config_create

Handler: Proxy sends POST /tagmanager/v2/{parent}/gtag\_config to the configured server; route declares: Creates a Google tag config.

*Upstream exposes no tool description.*

[Source](https://github.com/ag2-mcp-servers/tag-manager-api/blob/c27bca677a819cf7ceb8b2cd0244fdca8037fb49/mcp_server/main.py#L547-L571) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "Alt": {
      "enum": [
        "json",
        "media",
        "proto"
      ],
      "title": "Alt",
      "type": "string"
    },
    "FieldXgafv": {
      "enum": [
        "1",
        "2"
      ],
      "title": "FieldXgafv",
      "type": "string"
    },
    "GtagConfig": {
      "properties": {
        "accountId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Google tag account ID.",
          "title": "Accountid"
        },
        "containerId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Google tag container ID.",
          "title": "Containerid"
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
          "description": "The fingerprint of the Google tag config as computed at storage time. This value is recomputed whenever the config is modified.",
          "title": "Fingerprint"
        },
        "gtagConfigId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The ID uniquely identifies the Google tag config.",
          "title": "Gtagconfigid"
        },
        "parameter": {
          "anyOf": [
            {
              "items": {
                "$ref": "#/$defs/Parameter"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The Google tag config's parameters. @mutable tagmanager.accounts.containers.workspaces.gtag_config.create @mutable tagmanager.accounts.containers.workspaces.gtag_config.update",
          "title": "Parameter"
        },
        "path": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Google tag config's API relative path.",
          "title": "Path"
        },
        "tagManagerUrl": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Auto generated link to the tag manager UI",
          "title": "Tagmanagerurl"
        },
        "type": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Google tag config type. @required tagmanager.accounts.containers.workspaces.gtag_config.create @required tagmanager.accounts.containers.workspaces.gtag_config.update @mutable tagmanager.accounts.containers.workspaces.gtag_config.create @mutable tagmanager.accounts.containers.workspaces.gtag_config.update",
          "title": "Type"
        },
        "workspaceId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Google tag workspace ID. Only used by GTM containers. Set to 0 otherwise.",
          "title": "Workspaceid"
        }
      },
      "title": "GtagConfig",
      "type": "object"
    },
    "Parameter": {
      "properties": {
        "key": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The named key that uniquely identifies a parameter. Required for top-level parameters, as well as map values. Ignored for list values. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          "title": "Key"
        },
        "list": {
          "anyOf": [
            {
              "items": {
                "$ref": "#/$defs/Parameter"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "This list parameter's parameters (keys will be ignored). @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          "title": "List"
        },
        "map": {
          "anyOf": [
            {
              "items": {
                "$ref": "#/$defs/Parameter"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "This map parameter's parameters (must have keys; keys must be unique). @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          "title": "Map"
        },
        "type": {
          "anyOf": [
            {
              "$ref": "#/$defs/Type3"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The parameter type. Valid values are: - boolean: The value represents a boolean, represented as 'true' or 'false' - integer: The value represents a 64-bit signed integer value, in base 10 - list: A list of parameters should be specified - map: A map of parameters should be specified - template: The value represents any text; this can include variable references (even variable references that might return non-string types) - trigger_reference: The value represents a trigger, represented as the trigger id - tag_reference: The value represents a tag, represented as the tag name @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update"
        },
        "value": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "A parameter's value (may contain variable references such as \"{{myVariable}}\") as appropriate to the specified type. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          "title": "Value"
        }
      },
      "title": "Parameter",
      "type": "object"
    },
    "Type3": {
      "enum": [
        "typeUnspecified",
        "template",
        "integer",
        "boolean",
        "list",
        "map",
        "triggerReference",
        "tagReference"
      ],
      "title": "Type3",
      "type": "string"
    }
  },
  "properties": {
    "parent": {
      "title": "Parent",
      "type": "string"
    },
    "$.xgafv": {
      "anyOf": [
        {
          "$ref": "#/$defs/FieldXgafv"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "access_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Access Token"
    },
    "alt": {
      "anyOf": [
        {
          "$ref": "#/$defs/Alt"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "callback": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Callback"
    },
    "fields": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Fields"
    },
    "key": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Key"
    },
    "oauth_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Oauth Token"
    },
    "prettyPrint": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Prettyprint"
    },
    "quotaUser": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Quotauser"
    },
    "upload_protocol": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Upload Protocol"
    },
    "uploadType": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Uploadtype"
    },
    "body": {
      "$ref": "#/$defs/GtagConfig",
      "default": null
    }
  },
  "required": [
    "parent"
  ],
  "title": "tagmanager_accounts_containers_workspaces_gtag_config_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-tagmanager_accounts_containers_workspaces_tags_list-88a4f1d2"></a>

## tagmanager_accounts_containers_workspaces_tags_list

Handler: Proxy sends GET /tagmanager/v2/{parent}/tags to the configured server; route declares: Lists all GTM Tags of a Container.

*Upstream exposes no tool description.*

[Source](https://github.com/ag2-mcp-servers/tag-manager-api/blob/c27bca677a819cf7ceb8b2cd0244fdca8037fb49/mcp_server/main.py#L574-L600) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "Alt": {
      "enum": [
        "json",
        "media",
        "proto"
      ],
      "title": "Alt",
      "type": "string"
    },
    "FieldXgafv": {
      "enum": [
        "1",
        "2"
      ],
      "title": "FieldXgafv",
      "type": "string"
    }
  },
  "properties": {
    "parent": {
      "title": "Parent",
      "type": "string"
    },
    "pageToken": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Pagetoken"
    },
    "$.xgafv": {
      "anyOf": [
        {
          "$ref": "#/$defs/FieldXgafv"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "access_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Access Token"
    },
    "alt": {
      "anyOf": [
        {
          "$ref": "#/$defs/Alt"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "callback": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Callback"
    },
    "fields": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Fields"
    },
    "key": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Key"
    },
    "oauth_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Oauth Token"
    },
    "prettyPrint": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Prettyprint"
    },
    "quotaUser": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Quotauser"
    },
    "upload_protocol": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Upload Protocol"
    },
    "uploadType": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Uploadtype"
    }
  },
  "required": [
    "parent"
  ],
  "title": "tagmanager_accounts_containers_workspaces_tags_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-tagmanager_accounts_containers_workspaces_tags_create-f4988096"></a>

## tagmanager_accounts_containers_workspaces_tags_create

Handler: Proxy sends POST /tagmanager/v2/{parent}/tags to the configured server; route declares: Creates a GTM Tag.

*Upstream exposes no tool description.*

[Source](https://github.com/ag2-mcp-servers/tag-manager-api/blob/c27bca677a819cf7ceb8b2cd0244fdca8037fb49/mcp_server/main.py#L603-L632) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "Alt": {
      "enum": [
        "json",
        "media",
        "proto"
      ],
      "title": "Alt",
      "type": "string"
    },
    "ConsentStatus": {
      "enum": [
        "notSet",
        "notNeeded",
        "needed"
      ],
      "title": "ConsentStatus",
      "type": "string"
    },
    "FieldXgafv": {
      "enum": [
        "1",
        "2"
      ],
      "title": "FieldXgafv",
      "type": "string"
    },
    "Parameter": {
      "properties": {
        "key": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The named key that uniquely identifies a parameter. Required for top-level parameters, as well as map values. Ignored for list values. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          "title": "Key"
        },
        "list": {
          "anyOf": [
            {
              "items": {
                "$ref": "#/$defs/Parameter"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "This list parameter's parameters (keys will be ignored). @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          "title": "List"
        },
        "map": {
          "anyOf": [
            {
              "items": {
                "$ref": "#/$defs/Parameter"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "This map parameter's parameters (must have keys; keys must be unique). @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          "title": "Map"
        },
        "type": {
          "anyOf": [
            {
              "$ref": "#/$defs/Type3"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The parameter type. Valid values are: - boolean: The value represents a boolean, represented as 'true' or 'false' - integer: The value represents a 64-bit signed integer value, in base 10 - list: A list of parameters should be specified - map: A map of parameters should be specified - template: The value represents any text; this can include variable references (even variable references that might return non-string types) - trigger_reference: The value represents a trigger, represented as the trigger id - tag_reference: The value represents a tag, represented as the tag name @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update"
        },
        "value": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "A parameter's value (may contain variable references such as \"{{myVariable}}\") as appropriate to the specified type. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          "title": "Value"
        }
      },
      "title": "Parameter",
      "type": "object"
    },
    "SetupTag": {
      "properties": {
        "stopOnSetupFailure": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "If true, fire the main tag if and only if the setup tag fires successfully. If false, fire the main tag regardless of setup tag firing status.",
          "title": "Stoponsetupfailure"
        },
        "tagName": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The name of the setup tag.",
          "title": "Tagname"
        }
      },
      "title": "SetupTag",
      "type": "object"
    },
    "Tag": {
      "properties": {
        "accountId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Account ID.",
          "title": "Accountid"
        },
        "blockingRuleId": {
          "anyOf": [
            {
              "items": {
                "type": "string"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Blocking rule IDs. If any of the listed rules evaluate to true, the tag will not fire. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          "title": "Blockingruleid"
        },
        "blockingTriggerId": {
          "anyOf": [
            {
              "items": {
                "type": "string"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Blocking trigger IDs. If any of the listed triggers evaluate to true, the tag will not fire. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          "title": "Blockingtriggerid"
        },
        "consentSettings": {
          "anyOf": [
            {
              "$ref": "#/$defs/TagConsentSetting"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Consent settings of a tag. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update"
        },
        "containerId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Container ID.",
          "title": "Containerid"
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
          "description": "The fingerprint of the GTM Tag as computed at storage time. This value is recomputed whenever the tag is modified.",
          "title": "Fingerprint"
        },
        "firingRuleId": {
          "anyOf": [
            {
              "items": {
                "type": "string"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Firing rule IDs. A tag will fire when any of the listed rules are true and all of its blockingRuleIds (if any specified) are false. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          "title": "Firingruleid"
        },
        "firingTriggerId": {
          "anyOf": [
            {
              "items": {
                "type": "string"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Firing trigger IDs. A tag will fire when any of the listed triggers are true and all of its blockingTriggerIds (if any specified) are false. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          "title": "Firingtriggerid"
        },
        "liveOnly": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "If set to true, this tag will only fire in the live environment (e.g. not in preview or debug mode). @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          "title": "Liveonly"
        },
        "monitoringMetadata": {
          "anyOf": [
            {
              "$ref": "#/$defs/Parameter"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "A map of key-value pairs of tag metadata to be included in the event data for tag monitoring. Notes: - This parameter must be type MAP. - Each parameter in the map are type TEMPLATE, however cannot contain variable references. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update"
        },
        "monitoringMetadataTagNameKey": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "If non-empty, then the tag display name will be included in the monitoring metadata map using the key specified. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          "title": "Monitoringmetadatatagnamekey"
        },
        "name": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Tag display name. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          "title": "Name"
        },
        "notes": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "User notes on how to apply this tag in the container. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          "title": "Notes"
        },
        "parameter": {
          "anyOf": [
            {
              "items": {
                "$ref": "#/$defs/Parameter"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The tag's parameters. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          "title": "Parameter"
        },
        "parentFolderId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Parent folder id.",
          "title": "Parentfolderid"
        },
        "path": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Tag's API relative path.",
          "title": "Path"
        },
        "paused": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Indicates whether the tag is paused, which prevents the tag from firing. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          "title": "Paused"
        },
        "priority": {
          "anyOf": [
            {
              "$ref": "#/$defs/Parameter"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "User defined numeric priority of the tag. Tags are fired asynchronously in order of priority. Tags with higher numeric value fire first. A tag's priority can be a positive or negative value. The default value is 0. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update"
        },
        "scheduleEndMs": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The end timestamp in milliseconds to schedule a tag. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          "title": "Scheduleendms"
        },
        "scheduleStartMs": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The start timestamp in milliseconds to schedule a tag. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          "title": "Schedulestartms"
        },
        "setupTag": {
          "anyOf": [
            {
              "items": {
                "$ref": "#/$defs/SetupTag"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The list of setup tags. Currently we only allow one.",
          "title": "Setuptag"
        },
        "tagFiringOption": {
          "anyOf": [
            {
              "$ref": "#/$defs/TagFiringOption"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Option to fire this tag."
        },
        "tagId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The Tag ID uniquely identifies the GTM Tag.",
          "title": "Tagid"
        },
        "tagManagerUrl": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Auto generated link to the tag manager UI",
          "title": "Tagmanagerurl"
        },
        "teardownTag": {
          "anyOf": [
            {
              "items": {
                "$ref": "#/$defs/TeardownTag"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The list of teardown tags. Currently we only allow one.",
          "title": "Teardowntag"
        },
        "type": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Tag Type. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          "title": "Type"
        },
        "workspaceId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Workspace ID.",
          "title": "Workspaceid"
        }
      },
      "title": "Tag",
      "type": "object"
    },
    "TagConsentSetting": {
      "properties": {
        "consentStatus": {
          "anyOf": [
            {
              "$ref": "#/$defs/ConsentStatus"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The tag's consent status. If set to NEEDED, the runtime will check that the consent types specified by the consent_type field have been granted."
        },
        "consentType": {
          "anyOf": [
            {
              "$ref": "#/$defs/Parameter"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The type of consents to check for during tag firing if in the consent NEEDED state. This parameter must be of type LIST where each list item is of type STRING."
        }
      },
      "title": "TagConsentSetting",
      "type": "object"
    },
    "TagFiringOption": {
      "enum": [
        "tagFiringOptionUnspecified",
        "unlimited",
        "oncePerEvent",
        "oncePerLoad"
      ],
      "title": "TagFiringOption",
      "type": "string"
    },
    "TeardownTag": {
      "properties": {
        "stopTeardownOnFailure": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "If true, fire the teardown tag if and only if the main tag fires successfully. If false, fire the teardown tag regardless of main tag firing status.",
          "title": "Stopteardownonfailure"
        },
        "tagName": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The name of the teardown tag.",
          "title": "Tagname"
        }
      },
      "title": "TeardownTag",
      "type": "object"
    },
    "Type3": {
      "enum": [
        "typeUnspecified",
        "template",
        "integer",
        "boolean",
        "list",
        "map",
        "triggerReference",
        "tagReference"
      ],
      "title": "Type3",
      "type": "string"
    }
  },
  "properties": {
    "parent": {
      "title": "Parent",
      "type": "string"
    },
    "$.xgafv": {
      "anyOf": [
        {
          "$ref": "#/$defs/FieldXgafv"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "access_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Access Token"
    },
    "alt": {
      "anyOf": [
        {
          "$ref": "#/$defs/Alt"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "callback": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Callback"
    },
    "fields": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Fields"
    },
    "key": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Key"
    },
    "oauth_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Oauth Token"
    },
    "prettyPrint": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Prettyprint"
    },
    "quotaUser": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Quotauser"
    },
    "upload_protocol": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Upload Protocol"
    },
    "uploadType": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Uploadtype"
    },
    "body": {
      "$ref": "#/$defs/Tag",
      "default": null
    }
  },
  "required": [
    "parent"
  ],
  "title": "tagmanager_accounts_containers_workspaces_tags_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-tagmanager_accounts_containers_workspaces_templates_list-42f425e2"></a>

## tagmanager_accounts_containers_workspaces_templates_list

Handler: Proxy sends GET /tagmanager/v2/{parent}/templates to the configured server; route declares: Lists all GTM Templates of a GTM container workspace.

*Upstream exposes no tool description.*

[Source](https://github.com/ag2-mcp-servers/tag-manager-api/blob/c27bca677a819cf7ceb8b2cd0244fdca8037fb49/mcp_server/main.py#L635-L665) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "Alt": {
      "enum": [
        "json",
        "media",
        "proto"
      ],
      "title": "Alt",
      "type": "string"
    },
    "FieldXgafv": {
      "enum": [
        "1",
        "2"
      ],
      "title": "FieldXgafv",
      "type": "string"
    }
  },
  "properties": {
    "parent": {
      "title": "Parent",
      "type": "string"
    },
    "pageToken": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Pagetoken"
    },
    "$.xgafv": {
      "anyOf": [
        {
          "$ref": "#/$defs/FieldXgafv"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "access_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Access Token"
    },
    "alt": {
      "anyOf": [
        {
          "$ref": "#/$defs/Alt"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "callback": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Callback"
    },
    "fields": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Fields"
    },
    "key": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Key"
    },
    "oauth_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Oauth Token"
    },
    "prettyPrint": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Prettyprint"
    },
    "quotaUser": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Quotauser"
    },
    "upload_protocol": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Upload Protocol"
    },
    "uploadType": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Uploadtype"
    }
  },
  "required": [
    "parent"
  ],
  "title": "tagmanager_accounts_containers_workspaces_templates_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-tagmanager_accounts_containers_workspaces_templates_create-f6477ccd"></a>

## tagmanager_accounts_containers_workspaces_templates_create

Handler: Proxy sends POST /tagmanager/v2/{parent}/templates to the configured server; route declares: Creates a GTM Custom Template.

*Upstream exposes no tool description.*

[Source](https://github.com/ag2-mcp-servers/tag-manager-api/blob/c27bca677a819cf7ceb8b2cd0244fdca8037fb49/mcp_server/main.py#L668-L692) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "Alt": {
      "enum": [
        "json",
        "media",
        "proto"
      ],
      "title": "Alt",
      "type": "string"
    },
    "CustomTemplate": {
      "properties": {
        "accountId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Account ID.",
          "title": "Accountid"
        },
        "containerId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Container ID.",
          "title": "Containerid"
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
          "description": "The fingerprint of the GTM Custom Template as computed at storage time. This value is recomputed whenever the template is modified.",
          "title": "Fingerprint"
        },
        "galleryReference": {
          "anyOf": [
            {
              "$ref": "#/$defs/GalleryReference"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "A reference to the Community Template Gallery entry."
        },
        "name": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Custom Template display name.",
          "title": "Name"
        },
        "path": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Custom Template's API relative path.",
          "title": "Path"
        },
        "tagManagerUrl": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Auto generated link to the tag manager UI",
          "title": "Tagmanagerurl"
        },
        "templateData": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The custom template in text format.",
          "title": "Templatedata"
        },
        "templateId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The Custom Template ID uniquely identifies the GTM custom template.",
          "title": "Templateid"
        },
        "workspaceId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Workspace ID.",
          "title": "Workspaceid"
        }
      },
      "title": "CustomTemplate",
      "type": "object"
    },
    "FieldXgafv": {
      "enum": [
        "1",
        "2"
      ],
      "title": "FieldXgafv",
      "type": "string"
    },
    "GalleryReference": {
      "properties": {
        "host": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The name of the host for the community gallery template.",
          "title": "Host"
        },
        "isModified": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "If a user has manually edited the community gallery template.",
          "title": "Ismodified"
        },
        "owner": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The name of the owner for the community gallery template.",
          "title": "Owner"
        },
        "repository": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The name of the repository for the community gallery template.",
          "title": "Repository"
        },
        "signature": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The signature of the community gallery template as computed at import time. This value is recomputed whenever the template is updated from the gallery.",
          "title": "Signature"
        },
        "version": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The version of the community gallery template.",
          "title": "Version"
        }
      },
      "title": "GalleryReference",
      "type": "object"
    }
  },
  "properties": {
    "parent": {
      "title": "Parent",
      "type": "string"
    },
    "$.xgafv": {
      "anyOf": [
        {
          "$ref": "#/$defs/FieldXgafv"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "access_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Access Token"
    },
    "alt": {
      "anyOf": [
        {
          "$ref": "#/$defs/Alt"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "callback": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Callback"
    },
    "fields": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Fields"
    },
    "key": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Key"
    },
    "oauth_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Oauth Token"
    },
    "prettyPrint": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Prettyprint"
    },
    "quotaUser": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Quotauser"
    },
    "upload_protocol": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Upload Protocol"
    },
    "uploadType": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Uploadtype"
    },
    "body": {
      "$ref": "#/$defs/CustomTemplate",
      "default": null
    }
  },
  "required": [
    "parent"
  ],
  "title": "tagmanager_accounts_containers_workspaces_templates_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-tagmanager_accounts_containers_workspaces_triggers_list-44e90a05"></a>

## tagmanager_accounts_containers_workspaces_triggers_list

Handler: Proxy sends GET /tagmanager/v2/{parent}/triggers to the configured server; route declares: Lists all GTM Triggers of a Container.

*Upstream exposes no tool description.*

[Source](https://github.com/ag2-mcp-servers/tag-manager-api/blob/c27bca677a819cf7ceb8b2cd0244fdca8037fb49/mcp_server/main.py#L695-L737) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "Alt": {
      "enum": [
        "json",
        "media",
        "proto"
      ],
      "title": "Alt",
      "type": "string"
    },
    "FieldXgafv": {
      "enum": [
        "1",
        "2"
      ],
      "title": "FieldXgafv",
      "type": "string"
    }
  },
  "properties": {
    "parent": {
      "title": "Parent",
      "type": "string"
    },
    "pageToken": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Pagetoken"
    },
    "$.xgafv": {
      "anyOf": [
        {
          "$ref": "#/$defs/FieldXgafv"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "access_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Access Token"
    },
    "alt": {
      "anyOf": [
        {
          "$ref": "#/$defs/Alt"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "callback": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Callback"
    },
    "fields": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Fields"
    },
    "key": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Key"
    },
    "oauth_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Oauth Token"
    },
    "prettyPrint": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Prettyprint"
    },
    "quotaUser": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Quotauser"
    },
    "upload_protocol": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Upload Protocol"
    },
    "uploadType": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Uploadtype"
    }
  },
  "required": [
    "parent"
  ],
  "title": "tagmanager_accounts_containers_workspaces_triggers_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-tagmanager_accounts_containers_workspaces_triggers_create-062b1747"></a>

## tagmanager_accounts_containers_workspaces_triggers_create

Handler: Proxy sends POST /tagmanager/v2/{parent}/triggers to the configured server; route declares: Creates a GTM Trigger.

*Upstream exposes no tool description.*

[Source](https://github.com/ag2-mcp-servers/tag-manager-api/blob/c27bca677a819cf7ceb8b2cd0244fdca8037fb49/mcp_server/main.py#L740-L764) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "Alt": {
      "enum": [
        "json",
        "media",
        "proto"
      ],
      "title": "Alt",
      "type": "string"
    },
    "Condition": {
      "properties": {
        "parameter": {
          "anyOf": [
            {
              "items": {
                "$ref": "#/$defs/Parameter"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "A list of named parameters (key/value), depending on the condition's type. Notes: - For binary operators, include parameters named arg0 and arg1 for specifying the left and right operands, respectively. - At this time, the left operand (arg0) must be a reference to a variable. - For case-insensitive Regex matching, include a boolean parameter named ignore_case that is set to true. If not specified or set to any other value, the matching will be case sensitive. - To negate an operator, include a boolean parameter named negate boolean parameter that is set to true. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update",
          "title": "Parameter"
        },
        "type": {
          "anyOf": [
            {
              "$ref": "#/$defs/Type1"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The type of operator for this condition. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update"
        }
      },
      "title": "Condition",
      "type": "object"
    },
    "FieldXgafv": {
      "enum": [
        "1",
        "2"
      ],
      "title": "FieldXgafv",
      "type": "string"
    },
    "Parameter": {
      "properties": {
        "key": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The named key that uniquely identifies a parameter. Required for top-level parameters, as well as map values. Ignored for list values. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          "title": "Key"
        },
        "list": {
          "anyOf": [
            {
              "items": {
                "$ref": "#/$defs/Parameter"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "This list parameter's parameters (keys will be ignored). @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          "title": "List"
        },
        "map": {
          "anyOf": [
            {
              "items": {
                "$ref": "#/$defs/Parameter"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "This map parameter's parameters (must have keys; keys must be unique). @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          "title": "Map"
        },
        "type": {
          "anyOf": [
            {
              "$ref": "#/$defs/Type3"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The parameter type. Valid values are: - boolean: The value represents a boolean, represented as 'true' or 'false' - integer: The value represents a 64-bit signed integer value, in base 10 - list: A list of parameters should be specified - map: A map of parameters should be specified - template: The value represents any text; this can include variable references (even variable references that might return non-string types) - trigger_reference: The value represents a trigger, represented as the trigger id - tag_reference: The value represents a tag, represented as the tag name @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update"
        },
        "value": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "A parameter's value (may contain variable references such as \"{{myVariable}}\") as appropriate to the specified type. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          "title": "Value"
        }
      },
      "title": "Parameter",
      "type": "object"
    },
    "Trigger": {
      "properties": {
        "accountId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Account ID.",
          "title": "Accountid"
        },
        "autoEventFilter": {
          "anyOf": [
            {
              "items": {
                "$ref": "#/$defs/Condition"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Used in the case of auto event tracking. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update",
          "title": "Autoeventfilter"
        },
        "checkValidation": {
          "anyOf": [
            {
              "$ref": "#/$defs/Parameter"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Whether or not we should only fire tags if the form submit or link click event is not cancelled by some other event handler (e.g. because of validation). Only valid for Form Submission and Link Click triggers. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update"
        },
        "containerId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Container ID.",
          "title": "Containerid"
        },
        "continuousTimeMinMilliseconds": {
          "anyOf": [
            {
              "$ref": "#/$defs/Parameter"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "A visibility trigger minimum continuous visible time (in milliseconds). Only valid for AMP Visibility trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update"
        },
        "customEventFilter": {
          "anyOf": [
            {
              "items": {
                "$ref": "#/$defs/Condition"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Used in the case of custom event, which is fired iff all Conditions are true. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update",
          "title": "Customeventfilter"
        },
        "eventName": {
          "anyOf": [
            {
              "$ref": "#/$defs/Parameter"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Name of the GTM event that is fired. Only valid for Timer triggers. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update"
        },
        "filter": {
          "anyOf": [
            {
              "items": {
                "$ref": "#/$defs/Condition"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The trigger will only fire iff all Conditions are true. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update",
          "title": "Filter"
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
          "description": "The fingerprint of the GTM Trigger as computed at storage time. This value is recomputed whenever the trigger is modified.",
          "title": "Fingerprint"
        },
        "horizontalScrollPercentageList": {
          "anyOf": [
            {
              "$ref": "#/$defs/Parameter"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "List of integer percentage values for scroll triggers. The trigger will fire when each percentage is reached when the view is scrolled horizontally. Only valid for AMP scroll triggers. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update"
        },
        "interval": {
          "anyOf": [
            {
              "$ref": "#/$defs/Parameter"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Time between triggering recurring Timer Events (in milliseconds). Only valid for Timer triggers. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update"
        },
        "intervalSeconds": {
          "anyOf": [
            {
              "$ref": "#/$defs/Parameter"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Time between Timer Events to fire (in seconds). Only valid for AMP Timer trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update"
        },
        "limit": {
          "anyOf": [
            {
              "$ref": "#/$defs/Parameter"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Limit of the number of GTM events this Timer Trigger will fire. If no limit is set, we will continue to fire GTM events until the user leaves the page. Only valid for Timer triggers. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update"
        },
        "maxTimerLengthSeconds": {
          "anyOf": [
            {
              "$ref": "#/$defs/Parameter"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Max time to fire Timer Events (in seconds). Only valid for AMP Timer trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update"
        },
        "name": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Trigger display name. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update",
          "title": "Name"
        },
        "notes": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "User notes on how to apply this trigger in the container. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update",
          "title": "Notes"
        },
        "parameter": {
          "anyOf": [
            {
              "items": {
                "$ref": "#/$defs/Parameter"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Additional parameters. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update",
          "title": "Parameter"
        },
        "parentFolderId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Parent folder id.",
          "title": "Parentfolderid"
        },
        "path": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Trigger's API relative path.",
          "title": "Path"
        },
        "selector": {
          "anyOf": [
            {
              "$ref": "#/$defs/Parameter"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "A click trigger CSS selector (i.e. \"a\", \"button\" etc.). Only valid for AMP Click trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update"
        },
        "tagManagerUrl": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Auto generated link to the tag manager UI",
          "title": "Tagmanagerurl"
        },
        "totalTimeMinMilliseconds": {
          "anyOf": [
            {
              "$ref": "#/$defs/Parameter"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "A visibility trigger minimum total visible time (in milliseconds). Only valid for AMP Visibility trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update"
        },
        "triggerId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The Trigger ID uniquely identifies the GTM Trigger.",
          "title": "Triggerid"
        },
        "type": {
          "anyOf": [
            {
              "$ref": "#/$defs/Type4"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Defines the data layer event that causes this trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update"
        },
        "uniqueTriggerId": {
          "anyOf": [
            {
              "$ref": "#/$defs/Parameter"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Globally unique id of the trigger that auto-generates this (a Form Submit, Link Click or Timer listener) if any. Used to make incompatible auto-events work together with trigger filtering based on trigger ids. This value is populated during output generation since the tags implied by triggers don't exist until then. Only valid for Form Submit, Link Click and Timer triggers. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update"
        },
        "verticalScrollPercentageList": {
          "anyOf": [
            {
              "$ref": "#/$defs/Parameter"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "List of integer percentage values for scroll triggers. The trigger will fire when each percentage is reached when the view is scrolled vertically. Only valid for AMP scroll triggers. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update"
        },
        "visibilitySelector": {
          "anyOf": [
            {
              "$ref": "#/$defs/Parameter"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "A visibility trigger CSS selector (i.e. \"#id\"). Only valid for AMP Visibility trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update"
        },
        "visiblePercentageMax": {
          "anyOf": [
            {
              "$ref": "#/$defs/Parameter"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "A visibility trigger maximum percent visibility. Only valid for AMP Visibility trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update"
        },
        "visiblePercentageMin": {
          "anyOf": [
            {
              "$ref": "#/$defs/Parameter"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "A visibility trigger minimum percent visibility. Only valid for AMP Visibility trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update"
        },
        "waitForTags": {
          "anyOf": [
            {
              "$ref": "#/$defs/Parameter"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Whether or not we should delay the form submissions or link opening until all of the tags have fired (by preventing the default action and later simulating the default action). Only valid for Form Submission and Link Click triggers. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update"
        },
        "waitForTagsTimeout": {
          "anyOf": [
            {
              "$ref": "#/$defs/Parameter"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "How long to wait (in milliseconds) for tags to fire when 'waits_for_tags' above evaluates to true. Only valid for Form Submission and Link Click triggers. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update"
        },
        "workspaceId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Workspace ID.",
          "title": "Workspaceid"
        }
      },
      "title": "Trigger",
      "type": "object"
    },
    "Type1": {
      "enum": [
        "conditionTypeUnspecified",
        "equals",
        "contains",
        "startsWith",
        "endsWith",
        "matchRegex",
        "greater",
        "greaterOrEquals",
        "less",
        "lessOrEquals",
        "cssSelector",
        "urlMatches"
      ],
      "title": "Type1",
      "type": "string"
    },
    "Type3": {
      "enum": [
        "typeUnspecified",
        "template",
        "integer",
        "boolean",
        "list",
        "map",
        "triggerReference",
        "tagReference"
      ],
      "title": "Type3",
      "type": "string"
    },
    "Type4": {
      "enum": [
        "eventTypeUnspecified",
        "pageview",
        "domReady",
        "windowLoaded",
        "customEvent",
        "triggerGroup",
        "init",
        "consentInit",
        "serverPageview",
        "always",
        "firebaseAppException",
        "firebaseAppUpdate",
        "firebaseCampaign",
        "firebaseFirstOpen",
        "firebaseInAppPurchase",
        "firebaseNotificationDismiss",
        "firebaseNotificationForeground",
        "firebaseNotificationOpen",
        "firebaseNotificationReceive",
        "firebaseOsUpdate",
        "firebaseSessionStart",
        "firebaseUserEngagement",
        "formSubmission",
        "click",
        "linkClick",
        "jsError",
        "historyChange",
        "timer",
        "ampClick",
        "ampTimer",
        "ampScroll",
        "ampVisibility",
        "youTubeVideo",
        "scrollDepth",
        "elementVisibility"
      ],
      "title": "Type4",
      "type": "string"
    }
  },
  "properties": {
    "parent": {
      "title": "Parent",
      "type": "string"
    },
    "$.xgafv": {
      "anyOf": [
        {
          "$ref": "#/$defs/FieldXgafv"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "access_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Access Token"
    },
    "alt": {
      "anyOf": [
        {
          "$ref": "#/$defs/Alt"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "callback": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Callback"
    },
    "fields": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Fields"
    },
    "key": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Key"
    },
    "oauth_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Oauth Token"
    },
    "prettyPrint": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Prettyprint"
    },
    "quotaUser": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Quotauser"
    },
    "upload_protocol": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Upload Protocol"
    },
    "uploadType": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Uploadtype"
    },
    "body": {
      "$ref": "#/$defs/Trigger",
      "default": null
    }
  },
  "required": [
    "parent"
  ],
  "title": "tagmanager_accounts_containers_workspaces_triggers_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-tagmanager_accounts_user_permissions_list-363095d6"></a>

## tagmanager_accounts_user_permissions_list

Handler: Proxy sends GET /tagmanager/v2/{parent}/user\_permissions to the configured server; route declares: List all users that have access to the account along with Account and Container user access granted to each of them.

*Upstream exposes no tool description.*

[Source](https://github.com/ag2-mcp-servers/tag-manager-api/blob/c27bca677a819cf7ceb8b2cd0244fdca8037fb49/mcp_server/main.py#L767-L791) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "Alt": {
      "enum": [
        "json",
        "media",
        "proto"
      ],
      "title": "Alt",
      "type": "string"
    },
    "FieldXgafv": {
      "enum": [
        "1",
        "2"
      ],
      "title": "FieldXgafv",
      "type": "string"
    }
  },
  "properties": {
    "parent": {
      "title": "Parent",
      "type": "string"
    },
    "pageToken": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Pagetoken"
    },
    "$.xgafv": {
      "anyOf": [
        {
          "$ref": "#/$defs/FieldXgafv"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "access_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Access Token"
    },
    "alt": {
      "anyOf": [
        {
          "$ref": "#/$defs/Alt"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "callback": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Callback"
    },
    "fields": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Fields"
    },
    "key": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Key"
    },
    "oauth_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Oauth Token"
    },
    "prettyPrint": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Prettyprint"
    },
    "quotaUser": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Quotauser"
    },
    "upload_protocol": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Upload Protocol"
    },
    "uploadType": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Uploadtype"
    }
  },
  "required": [
    "parent"
  ],
  "title": "tagmanager_accounts_user_permissions_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-tagmanager_accounts_user_permissions_create-c33fa036"></a>

## tagmanager_accounts_user_permissions_create

Handler: Proxy sends POST /tagmanager/v2/{parent}/user\_permissions to the configured server; route declares: Creates a user's Account & Container access.

*Upstream exposes no tool description.*

[Source](https://github.com/ag2-mcp-servers/tag-manager-api/blob/c27bca677a819cf7ceb8b2cd0244fdca8037fb49/mcp_server/main.py#L794-L818) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "AccountAccess": {
      "properties": {
        "permission": {
          "anyOf": [
            {
              "$ref": "#/$defs/Permission"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Whether the user has no access, user access, or admin access to an account. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update"
        }
      },
      "title": "AccountAccess",
      "type": "object"
    },
    "Alt": {
      "enum": [
        "json",
        "media",
        "proto"
      ],
      "title": "Alt",
      "type": "string"
    },
    "ContainerAccess": {
      "properties": {
        "containerId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Container ID. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update",
          "title": "Containerid"
        },
        "permission": {
          "anyOf": [
            {
              "$ref": "#/$defs/Permission1"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "List of Container permissions. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update"
        }
      },
      "title": "ContainerAccess",
      "type": "object"
    },
    "FieldXgafv": {
      "enum": [
        "1",
        "2"
      ],
      "title": "FieldXgafv",
      "type": "string"
    },
    "Permission": {
      "enum": [
        "accountPermissionUnspecified",
        "noAccess",
        "user",
        "admin"
      ],
      "title": "Permission",
      "type": "string"
    },
    "Permission1": {
      "enum": [
        "containerPermissionUnspecified",
        "noAccess",
        "read",
        "edit",
        "approve",
        "publish"
      ],
      "title": "Permission1",
      "type": "string"
    },
    "UserPermission": {
      "properties": {
        "accountAccess": {
          "anyOf": [
            {
              "$ref": "#/$defs/AccountAccess"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Account access permissions. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update"
        },
        "accountId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The Account ID uniquely identifies the GTM Account.",
          "title": "Accountid"
        },
        "containerAccess": {
          "anyOf": [
            {
              "items": {
                "$ref": "#/$defs/ContainerAccess"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Container access permissions. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update",
          "title": "Containeraccess"
        },
        "emailAddress": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "User's email address. @mutable tagmanager.accounts.permissions.create",
          "title": "Emailaddress"
        },
        "path": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM UserPermission's API relative path.",
          "title": "Path"
        }
      },
      "title": "UserPermission",
      "type": "object"
    }
  },
  "properties": {
    "parent": {
      "title": "Parent",
      "type": "string"
    },
    "$.xgafv": {
      "anyOf": [
        {
          "$ref": "#/$defs/FieldXgafv"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "access_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Access Token"
    },
    "alt": {
      "anyOf": [
        {
          "$ref": "#/$defs/Alt"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "callback": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Callback"
    },
    "fields": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Fields"
    },
    "key": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Key"
    },
    "oauth_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Oauth Token"
    },
    "prettyPrint": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Prettyprint"
    },
    "quotaUser": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Quotauser"
    },
    "upload_protocol": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Upload Protocol"
    },
    "uploadType": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Uploadtype"
    },
    "body": {
      "$ref": "#/$defs/UserPermission",
      "default": null
    }
  },
  "required": [
    "parent"
  ],
  "title": "tagmanager_accounts_user_permissions_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-tagmanager_accounts_containers_workspaces_variables_list-e9e77967"></a>

## tagmanager_accounts_containers_workspaces_variables_list

Handler: Proxy sends GET /tagmanager/v2/{parent}/variables to the configured server; route declares: Lists all GTM Variables of a Container.

*Upstream exposes no tool description.*

[Source](https://github.com/ag2-mcp-servers/tag-manager-api/blob/c27bca677a819cf7ceb8b2cd0244fdca8037fb49/mcp_server/main.py#L821-L855) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "Alt": {
      "enum": [
        "json",
        "media",
        "proto"
      ],
      "title": "Alt",
      "type": "string"
    },
    "FieldXgafv": {
      "enum": [
        "1",
        "2"
      ],
      "title": "FieldXgafv",
      "type": "string"
    }
  },
  "properties": {
    "parent": {
      "title": "Parent",
      "type": "string"
    },
    "pageToken": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Pagetoken"
    },
    "$.xgafv": {
      "anyOf": [
        {
          "$ref": "#/$defs/FieldXgafv"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "access_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Access Token"
    },
    "alt": {
      "anyOf": [
        {
          "$ref": "#/$defs/Alt"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "callback": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Callback"
    },
    "fields": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Fields"
    },
    "key": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Key"
    },
    "oauth_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Oauth Token"
    },
    "prettyPrint": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Prettyprint"
    },
    "quotaUser": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Quotauser"
    },
    "upload_protocol": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Upload Protocol"
    },
    "uploadType": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Uploadtype"
    }
  },
  "required": [
    "parent"
  ],
  "title": "tagmanager_accounts_containers_workspaces_variables_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-tagmanager_accounts_containers_workspaces_variables_create-b4daf280"></a>

## tagmanager_accounts_containers_workspaces_variables_create

Handler: Proxy sends POST /tagmanager/v2/{parent}/variables to the configured server; route declares: Creates a GTM Variable.

*Upstream exposes no tool description.*

[Source](https://github.com/ag2-mcp-servers/tag-manager-api/blob/c27bca677a819cf7ceb8b2cd0244fdca8037fb49/mcp_server/main.py#L858-L882) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "Alt": {
      "enum": [
        "json",
        "media",
        "proto"
      ],
      "title": "Alt",
      "type": "string"
    },
    "CaseConversionType": {
      "enum": [
        "none",
        "lowercase",
        "uppercase"
      ],
      "title": "CaseConversionType",
      "type": "string"
    },
    "FieldXgafv": {
      "enum": [
        "1",
        "2"
      ],
      "title": "FieldXgafv",
      "type": "string"
    },
    "Parameter": {
      "properties": {
        "key": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The named key that uniquely identifies a parameter. Required for top-level parameters, as well as map values. Ignored for list values. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          "title": "Key"
        },
        "list": {
          "anyOf": [
            {
              "items": {
                "$ref": "#/$defs/Parameter"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "This list parameter's parameters (keys will be ignored). @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          "title": "List"
        },
        "map": {
          "anyOf": [
            {
              "items": {
                "$ref": "#/$defs/Parameter"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "This map parameter's parameters (must have keys; keys must be unique). @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          "title": "Map"
        },
        "type": {
          "anyOf": [
            {
              "$ref": "#/$defs/Type3"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The parameter type. Valid values are: - boolean: The value represents a boolean, represented as 'true' or 'false' - integer: The value represents a 64-bit signed integer value, in base 10 - list: A list of parameters should be specified - map: A map of parameters should be specified - template: The value represents any text; this can include variable references (even variable references that might return non-string types) - trigger_reference: The value represents a trigger, represented as the trigger id - tag_reference: The value represents a tag, represented as the tag name @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update"
        },
        "value": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "A parameter's value (may contain variable references such as \"{{myVariable}}\") as appropriate to the specified type. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          "title": "Value"
        }
      },
      "title": "Parameter",
      "type": "object"
    },
    "Type3": {
      "enum": [
        "typeUnspecified",
        "template",
        "integer",
        "boolean",
        "list",
        "map",
        "triggerReference",
        "tagReference"
      ],
      "title": "Type3",
      "type": "string"
    },
    "Variable": {
      "properties": {
        "accountId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Account ID.",
          "title": "Accountid"
        },
        "containerId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Container ID.",
          "title": "Containerid"
        },
        "disablingTriggerId": {
          "anyOf": [
            {
              "items": {
                "type": "string"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "For mobile containers only: A list of trigger IDs for disabling conditional variables; the variable is enabled if one of the enabling trigger is true while all the disabling trigger are false. Treated as an unordered set. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update",
          "title": "Disablingtriggerid"
        },
        "enablingTriggerId": {
          "anyOf": [
            {
              "items": {
                "type": "string"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "For mobile containers only: A list of trigger IDs for enabling conditional variables; the variable is enabled if one of the enabling triggers is true while all the disabling triggers are false. Treated as an unordered set. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update",
          "title": "Enablingtriggerid"
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
          "description": "The fingerprint of the GTM Variable as computed at storage time. This value is recomputed whenever the variable is modified.",
          "title": "Fingerprint"
        },
        "formatValue": {
          "anyOf": [
            {
              "$ref": "#/$defs/VariableFormatValue"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Option to convert a variable value to other value."
        },
        "name": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Variable display name. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update",
          "title": "Name"
        },
        "notes": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "User notes on how to apply this variable in the container. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update",
          "title": "Notes"
        },
        "parameter": {
          "anyOf": [
            {
              "items": {
                "$ref": "#/$defs/Parameter"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The variable's parameters. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update",
          "title": "Parameter"
        },
        "parentFolderId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Parent folder id.",
          "title": "Parentfolderid"
        },
        "path": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Variable's API relative path.",
          "title": "Path"
        },
        "scheduleEndMs": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The end timestamp in milliseconds to schedule a variable. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update",
          "title": "Scheduleendms"
        },
        "scheduleStartMs": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The start timestamp in milliseconds to schedule a variable. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update",
          "title": "Schedulestartms"
        },
        "tagManagerUrl": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Auto generated link to the tag manager UI",
          "title": "Tagmanagerurl"
        },
        "type": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Variable Type. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update",
          "title": "Type"
        },
        "variableId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The Variable ID uniquely identifies the GTM Variable.",
          "title": "Variableid"
        },
        "workspaceId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Workspace ID.",
          "title": "Workspaceid"
        }
      },
      "title": "Variable",
      "type": "object"
    },
    "VariableFormatValue": {
      "properties": {
        "caseConversionType": {
          "anyOf": [
            {
              "$ref": "#/$defs/CaseConversionType"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The option to convert a string-type variable value to either lowercase or uppercase."
        },
        "convertFalseToValue": {
          "anyOf": [
            {
              "$ref": "#/$defs/Parameter"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The value to convert if a variable value is false."
        },
        "convertNullToValue": {
          "anyOf": [
            {
              "$ref": "#/$defs/Parameter"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The value to convert if a variable value is null."
        },
        "convertTrueToValue": {
          "anyOf": [
            {
              "$ref": "#/$defs/Parameter"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The value to convert if a variable value is true."
        },
        "convertUndefinedToValue": {
          "anyOf": [
            {
              "$ref": "#/$defs/Parameter"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The value to convert if a variable value is undefined."
        }
      },
      "title": "VariableFormatValue",
      "type": "object"
    }
  },
  "properties": {
    "parent": {
      "title": "Parent",
      "type": "string"
    },
    "$.xgafv": {
      "anyOf": [
        {
          "$ref": "#/$defs/FieldXgafv"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "access_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Access Token"
    },
    "alt": {
      "anyOf": [
        {
          "$ref": "#/$defs/Alt"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "callback": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Callback"
    },
    "fields": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Fields"
    },
    "key": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Key"
    },
    "oauth_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Oauth Token"
    },
    "prettyPrint": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Prettyprint"
    },
    "quotaUser": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Quotauser"
    },
    "upload_protocol": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Upload Protocol"
    },
    "uploadType": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Uploadtype"
    },
    "body": {
      "$ref": "#/$defs/Variable",
      "default": null
    }
  },
  "required": [
    "parent"
  ],
  "title": "tagmanager_accounts_containers_workspaces_variables_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-tagmanager_accounts_containers_version_headers_list-1e9a09c8"></a>

## tagmanager_accounts_containers_version_headers_list

Handler: Proxy sends GET /tagmanager/v2/{parent}/version\_headers to the configured server; route declares: Lists all Container Versions of a GTM Container.

*Upstream exposes no tool description.*

[Source](https://github.com/ag2-mcp-servers/tag-manager-api/blob/c27bca677a819cf7ceb8b2cd0244fdca8037fb49/mcp_server/main.py#L885-L914) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "Alt": {
      "enum": [
        "json",
        "media",
        "proto"
      ],
      "title": "Alt",
      "type": "string"
    },
    "FieldXgafv": {
      "enum": [
        "1",
        "2"
      ],
      "title": "FieldXgafv",
      "type": "string"
    }
  },
  "properties": {
    "parent": {
      "title": "Parent",
      "type": "string"
    },
    "includeDeleted": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Includedeleted"
    },
    "pageToken": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Pagetoken"
    },
    "$.xgafv": {
      "anyOf": [
        {
          "$ref": "#/$defs/FieldXgafv"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "access_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Access Token"
    },
    "alt": {
      "anyOf": [
        {
          "$ref": "#/$defs/Alt"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "callback": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Callback"
    },
    "fields": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Fields"
    },
    "key": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Key"
    },
    "oauth_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Oauth Token"
    },
    "prettyPrint": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Prettyprint"
    },
    "quotaUser": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Quotauser"
    },
    "upload_protocol": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Upload Protocol"
    },
    "uploadType": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Uploadtype"
    }
  },
  "required": [
    "parent"
  ],
  "title": "tagmanager_accounts_containers_version_headers_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-tagmanager_accounts_containers_version_headers_latest-835464de"></a>

## tagmanager_accounts_containers_version_headers_latest

Handler: Proxy sends GET /tagmanager/v2/{parent}/version\_headers:latest to the configured server; route declares: Gets the latest container version header

*Upstream exposes no tool description.*

[Source](https://github.com/ag2-mcp-servers/tag-manager-api/blob/c27bca677a819cf7ceb8b2cd0244fdca8037fb49/mcp_server/main.py#L917-L958) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "Alt": {
      "enum": [
        "json",
        "media",
        "proto"
      ],
      "title": "Alt",
      "type": "string"
    },
    "FieldXgafv": {
      "enum": [
        "1",
        "2"
      ],
      "title": "FieldXgafv",
      "type": "string"
    }
  },
  "properties": {
    "parent": {
      "title": "Parent",
      "type": "string"
    },
    "$.xgafv": {
      "anyOf": [
        {
          "$ref": "#/$defs/FieldXgafv"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "access_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Access Token"
    },
    "alt": {
      "anyOf": [
        {
          "$ref": "#/$defs/Alt"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "callback": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Callback"
    },
    "fields": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Fields"
    },
    "key": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Key"
    },
    "oauth_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Oauth Token"
    },
    "prettyPrint": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Prettyprint"
    },
    "quotaUser": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Quotauser"
    },
    "upload_protocol": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Upload Protocol"
    },
    "uploadType": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Uploadtype"
    }
  },
  "required": [
    "parent"
  ],
  "title": "tagmanager_accounts_containers_version_headers_latestArguments",
  "type": "object"
}
```

</details>

<a id="tool-tagmanager_accounts_containers_versions_live-47ce0826"></a>

## tagmanager_accounts_containers_versions_live

Handler: Proxy sends GET /tagmanager/v2/{parent}/versions:live to the configured server; route declares: Gets the live (i.e. published) container version

*Upstream exposes no tool description.*

[Source](https://github.com/ag2-mcp-servers/tag-manager-api/blob/c27bca677a819cf7ceb8b2cd0244fdca8037fb49/mcp_server/main.py#L961-L1002) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "Alt": {
      "enum": [
        "json",
        "media",
        "proto"
      ],
      "title": "Alt",
      "type": "string"
    },
    "FieldXgafv": {
      "enum": [
        "1",
        "2"
      ],
      "title": "FieldXgafv",
      "type": "string"
    }
  },
  "properties": {
    "parent": {
      "title": "Parent",
      "type": "string"
    },
    "$.xgafv": {
      "anyOf": [
        {
          "$ref": "#/$defs/FieldXgafv"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "access_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Access Token"
    },
    "alt": {
      "anyOf": [
        {
          "$ref": "#/$defs/Alt"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "callback": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Callback"
    },
    "fields": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Fields"
    },
    "key": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Key"
    },
    "oauth_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Oauth Token"
    },
    "prettyPrint": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Prettyprint"
    },
    "quotaUser": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Quotauser"
    },
    "upload_protocol": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Upload Protocol"
    },
    "uploadType": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Uploadtype"
    }
  },
  "required": [
    "parent"
  ],
  "title": "tagmanager_accounts_containers_versions_liveArguments",
  "type": "object"
}
```

</details>

<a id="tool-tagmanager_accounts_containers_workspaces_list-c3afaca9"></a>

## tagmanager_accounts_containers_workspaces_list

Handler: Proxy sends GET /tagmanager/v2/{parent}/workspaces to the configured server; route declares: Lists all Workspaces that belong to a GTM Container.

*Upstream exposes no tool description.*

[Source](https://github.com/ag2-mcp-servers/tag-manager-api/blob/c27bca677a819cf7ceb8b2cd0244fdca8037fb49/mcp_server/main.py#L1005-L1031) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "Alt": {
      "enum": [
        "json",
        "media",
        "proto"
      ],
      "title": "Alt",
      "type": "string"
    },
    "FieldXgafv": {
      "enum": [
        "1",
        "2"
      ],
      "title": "FieldXgafv",
      "type": "string"
    }
  },
  "properties": {
    "parent": {
      "title": "Parent",
      "type": "string"
    },
    "pageToken": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Pagetoken"
    },
    "$.xgafv": {
      "anyOf": [
        {
          "$ref": "#/$defs/FieldXgafv"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "access_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Access Token"
    },
    "alt": {
      "anyOf": [
        {
          "$ref": "#/$defs/Alt"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "callback": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Callback"
    },
    "fields": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Fields"
    },
    "key": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Key"
    },
    "oauth_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Oauth Token"
    },
    "prettyPrint": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Prettyprint"
    },
    "quotaUser": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Quotauser"
    },
    "upload_protocol": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Upload Protocol"
    },
    "uploadType": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Uploadtype"
    }
  },
  "required": [
    "parent"
  ],
  "title": "tagmanager_accounts_containers_workspaces_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-tagmanager_accounts_containers_workspaces_create-4c6a33af"></a>

## tagmanager_accounts_containers_workspaces_create

Handler: Proxy sends POST /tagmanager/v2/{parent}/workspaces to the configured server; route declares: Creates a Workspace.

*Upstream exposes no tool description.*

[Source](https://github.com/ag2-mcp-servers/tag-manager-api/blob/c27bca677a819cf7ceb8b2cd0244fdca8037fb49/mcp_server/main.py#L1034-L1058) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "Alt": {
      "enum": [
        "json",
        "media",
        "proto"
      ],
      "title": "Alt",
      "type": "string"
    },
    "FieldXgafv": {
      "enum": [
        "1",
        "2"
      ],
      "title": "FieldXgafv",
      "type": "string"
    },
    "Workspace": {
      "properties": {
        "accountId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Account ID.",
          "title": "Accountid"
        },
        "containerId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Container ID.",
          "title": "Containerid"
        },
        "description": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Workspace description. @mutable tagmanager.accounts.containers.workspaces.create @mutable tagmanager.accounts.containers.workspaces.update",
          "title": "Description"
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
          "description": "The fingerprint of the GTM Workspace as computed at storage time. This value is recomputed whenever the workspace is modified.",
          "title": "Fingerprint"
        },
        "name": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Workspace display name. @mutable tagmanager.accounts.containers.workspaces.create @mutable tagmanager.accounts.containers.workspaces.update",
          "title": "Name"
        },
        "path": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Workspace's API relative path.",
          "title": "Path"
        },
        "tagManagerUrl": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Auto generated link to the tag manager UI",
          "title": "Tagmanagerurl"
        },
        "workspaceId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The Workspace ID uniquely identifies the GTM Workspace.",
          "title": "Workspaceid"
        }
      },
      "title": "Workspace",
      "type": "object"
    }
  },
  "properties": {
    "parent": {
      "title": "Parent",
      "type": "string"
    },
    "$.xgafv": {
      "anyOf": [
        {
          "$ref": "#/$defs/FieldXgafv"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "access_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Access Token"
    },
    "alt": {
      "anyOf": [
        {
          "$ref": "#/$defs/Alt"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "callback": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Callback"
    },
    "fields": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Fields"
    },
    "key": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Key"
    },
    "oauth_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Oauth Token"
    },
    "prettyPrint": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Prettyprint"
    },
    "quotaUser": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Quotauser"
    },
    "upload_protocol": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Upload Protocol"
    },
    "uploadType": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Uploadtype"
    },
    "body": {
      "$ref": "#/$defs/Workspace",
      "default": null
    }
  },
  "required": [
    "parent"
  ],
  "title": "tagmanager_accounts_containers_workspaces_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-tagmanager_accounts_containers_workspaces_zones_list-38a5a562"></a>

## tagmanager_accounts_containers_workspaces_zones_list

Handler: Proxy sends GET /tagmanager/v2/{parent}/zones to the configured server; route declares: Lists all GTM Zones of a GTM container workspace.

*Upstream exposes no tool description.*

[Source](https://github.com/ag2-mcp-servers/tag-manager-api/blob/c27bca677a819cf7ceb8b2cd0244fdca8037fb49/mcp_server/main.py#L1061-L1091) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "Alt": {
      "enum": [
        "json",
        "media",
        "proto"
      ],
      "title": "Alt",
      "type": "string"
    },
    "FieldXgafv": {
      "enum": [
        "1",
        "2"
      ],
      "title": "FieldXgafv",
      "type": "string"
    }
  },
  "properties": {
    "parent": {
      "title": "Parent",
      "type": "string"
    },
    "pageToken": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Pagetoken"
    },
    "$.xgafv": {
      "anyOf": [
        {
          "$ref": "#/$defs/FieldXgafv"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "access_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Access Token"
    },
    "alt": {
      "anyOf": [
        {
          "$ref": "#/$defs/Alt"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "callback": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Callback"
    },
    "fields": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Fields"
    },
    "key": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Key"
    },
    "oauth_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Oauth Token"
    },
    "prettyPrint": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Prettyprint"
    },
    "quotaUser": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Quotauser"
    },
    "upload_protocol": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Upload Protocol"
    },
    "uploadType": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Uploadtype"
    }
  },
  "required": [
    "parent"
  ],
  "title": "tagmanager_accounts_containers_workspaces_zones_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-tagmanager_accounts_containers_workspaces_zones_create-4dc1641d"></a>

## tagmanager_accounts_containers_workspaces_zones_create

Handler: Proxy sends POST /tagmanager/v2/{parent}/zones to the configured server; route declares: Creates a GTM Zone.

*Upstream exposes no tool description.*

[Source](https://github.com/ag2-mcp-servers/tag-manager-api/blob/c27bca677a819cf7ceb8b2cd0244fdca8037fb49/mcp_server/main.py#L1094-L1118) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "Alt": {
      "enum": [
        "json",
        "media",
        "proto"
      ],
      "title": "Alt",
      "type": "string"
    },
    "Condition": {
      "properties": {
        "parameter": {
          "anyOf": [
            {
              "items": {
                "$ref": "#/$defs/Parameter"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "A list of named parameters (key/value), depending on the condition's type. Notes: - For binary operators, include parameters named arg0 and arg1 for specifying the left and right operands, respectively. - At this time, the left operand (arg0) must be a reference to a variable. - For case-insensitive Regex matching, include a boolean parameter named ignore_case that is set to true. If not specified or set to any other value, the matching will be case sensitive. - To negate an operator, include a boolean parameter named negate boolean parameter that is set to true. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update",
          "title": "Parameter"
        },
        "type": {
          "anyOf": [
            {
              "$ref": "#/$defs/Type1"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The type of operator for this condition. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update"
        }
      },
      "title": "Condition",
      "type": "object"
    },
    "FieldXgafv": {
      "enum": [
        "1",
        "2"
      ],
      "title": "FieldXgafv",
      "type": "string"
    },
    "Parameter": {
      "properties": {
        "key": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The named key that uniquely identifies a parameter. Required for top-level parameters, as well as map values. Ignored for list values. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          "title": "Key"
        },
        "list": {
          "anyOf": [
            {
              "items": {
                "$ref": "#/$defs/Parameter"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "This list parameter's parameters (keys will be ignored). @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          "title": "List"
        },
        "map": {
          "anyOf": [
            {
              "items": {
                "$ref": "#/$defs/Parameter"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "This map parameter's parameters (must have keys; keys must be unique). @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          "title": "Map"
        },
        "type": {
          "anyOf": [
            {
              "$ref": "#/$defs/Type3"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The parameter type. Valid values are: - boolean: The value represents a boolean, represented as 'true' or 'false' - integer: The value represents a 64-bit signed integer value, in base 10 - list: A list of parameters should be specified - map: A map of parameters should be specified - template: The value represents any text; this can include variable references (even variable references that might return non-string types) - trigger_reference: The value represents a trigger, represented as the trigger id - tag_reference: The value represents a tag, represented as the tag name @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update"
        },
        "value": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "A parameter's value (may contain variable references such as \"{{myVariable}}\") as appropriate to the specified type. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          "title": "Value"
        }
      },
      "title": "Parameter",
      "type": "object"
    },
    "Type1": {
      "enum": [
        "conditionTypeUnspecified",
        "equals",
        "contains",
        "startsWith",
        "endsWith",
        "matchRegex",
        "greater",
        "greaterOrEquals",
        "less",
        "lessOrEquals",
        "cssSelector",
        "urlMatches"
      ],
      "title": "Type1",
      "type": "string"
    },
    "Type3": {
      "enum": [
        "typeUnspecified",
        "template",
        "integer",
        "boolean",
        "list",
        "map",
        "triggerReference",
        "tagReference"
      ],
      "title": "Type3",
      "type": "string"
    },
    "Zone": {
      "properties": {
        "accountId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Account ID.",
          "title": "Accountid"
        },
        "boundary": {
          "anyOf": [
            {
              "$ref": "#/$defs/ZoneBoundary"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "This Zone's boundary."
        },
        "childContainer": {
          "anyOf": [
            {
              "items": {
                "$ref": "#/$defs/ZoneChildContainer"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Containers that are children of this Zone.",
          "title": "Childcontainer"
        },
        "containerId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Container ID.",
          "title": "Containerid"
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
          "description": "The fingerprint of the GTM Zone as computed at storage time. This value is recomputed whenever the zone is modified.",
          "title": "Fingerprint"
        },
        "name": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Zone display name.",
          "title": "Name"
        },
        "notes": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "User notes on how to apply this zone in the container.",
          "title": "Notes"
        },
        "path": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Zone's API relative path.",
          "title": "Path"
        },
        "tagManagerUrl": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Auto generated link to the tag manager UI",
          "title": "Tagmanagerurl"
        },
        "typeRestriction": {
          "anyOf": [
            {
              "$ref": "#/$defs/ZoneTypeRestriction"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "This Zone's type restrictions."
        },
        "workspaceId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Workspace ID.",
          "title": "Workspaceid"
        },
        "zoneId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The Zone ID uniquely identifies the GTM Zone.",
          "title": "Zoneid"
        }
      },
      "title": "Zone",
      "type": "object"
    },
    "ZoneBoundary": {
      "properties": {
        "condition": {
          "anyOf": [
            {
              "items": {
                "$ref": "#/$defs/Condition"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The conditions that, when conjoined, make up the boundary.",
          "title": "Condition"
        },
        "customEvaluationTriggerId": {
          "anyOf": [
            {
              "items": {
                "type": "string"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Custom evaluation trigger IDs. A zone will evaluate its boundary conditions when any of the listed triggers are true.",
          "title": "Customevaluationtriggerid"
        }
      },
      "title": "ZoneBoundary",
      "type": "object"
    },
    "ZoneChildContainer": {
      "properties": {
        "nickname": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The zone's nickname for the child container.",
          "title": "Nickname"
        },
        "publicId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The child container's public id.",
          "title": "Publicid"
        }
      },
      "title": "ZoneChildContainer",
      "type": "object"
    },
    "ZoneTypeRestriction": {
      "properties": {
        "enable": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "True if type restrictions have been enabled for this Zone.",
          "title": "Enable"
        },
        "whitelistedTypeId": {
          "anyOf": [
            {
              "items": {
                "type": "string"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "List of type public ids that have been whitelisted for use in this Zone.",
          "title": "Whitelistedtypeid"
        }
      },
      "title": "ZoneTypeRestriction",
      "type": "object"
    }
  },
  "properties": {
    "parent": {
      "title": "Parent",
      "type": "string"
    },
    "$.xgafv": {
      "anyOf": [
        {
          "$ref": "#/$defs/FieldXgafv"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "access_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Access Token"
    },
    "alt": {
      "anyOf": [
        {
          "$ref": "#/$defs/Alt"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "callback": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Callback"
    },
    "fields": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Fields"
    },
    "key": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Key"
    },
    "oauth_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Oauth Token"
    },
    "prettyPrint": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Prettyprint"
    },
    "quotaUser": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Quotauser"
    },
    "upload_protocol": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Upload Protocol"
    },
    "uploadType": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Uploadtype"
    },
    "body": {
      "$ref": "#/$defs/Zone",
      "default": null
    }
  },
  "required": [
    "parent"
  ],
  "title": "tagmanager_accounts_containers_workspaces_zones_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-tagmanager_accounts_user_permissions_delete-b2d66b65"></a>

## tagmanager_accounts_user_permissions_delete

Handler: Proxy sends DELETE /tagmanager/v2/{path} to the configured server; route declares: Removes a user from the account, revoking access to it and all of its containers.

*Upstream exposes no tool description.*

[Source](https://github.com/ag2-mcp-servers/tag-manager-api/blob/c27bca677a819cf7ceb8b2cd0244fdca8037fb49/mcp_server/main.py#L1121-L1159) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "Alt": {
      "enum": [
        "json",
        "media",
        "proto"
      ],
      "title": "Alt",
      "type": "string"
    },
    "FieldXgafv": {
      "enum": [
        "1",
        "2"
      ],
      "title": "FieldXgafv",
      "type": "string"
    },
    "Type6": {
      "items": {
        "$ref": "#/$defs/TypeEnum"
      },
      "title": "Type6",
      "type": "array"
    },
    "TypeEnum": {
      "enum": [
        "builtInVariableTypeUnspecified",
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
        "visitorRegion"
      ],
      "title": "TypeEnum",
      "type": "string"
    }
  },
  "properties": {
    "path": {
      "title": "Path",
      "type": "string"
    },
    "type": {
      "anyOf": [
        {
          "$ref": "#/$defs/Type6"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "$.xgafv": {
      "anyOf": [
        {
          "$ref": "#/$defs/FieldXgafv"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "access_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Access Token"
    },
    "alt": {
      "anyOf": [
        {
          "$ref": "#/$defs/Alt"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "callback": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Callback"
    },
    "fields": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Fields"
    },
    "key": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Key"
    },
    "oauth_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Oauth Token"
    },
    "prettyPrint": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Prettyprint"
    },
    "quotaUser": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Quotauser"
    },
    "upload_protocol": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Upload Protocol"
    },
    "uploadType": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Uploadtype"
    }
  },
  "required": [
    "path"
  ],
  "title": "tagmanager_accounts_user_permissions_deleteArguments",
  "type": "object"
}
```

</details>

<a id="tool-tagmanager_accounts_user_permissions_get-b16b7a52"></a>

## tagmanager_accounts_user_permissions_get

Handler: Proxy sends GET /tagmanager/v2/{path} to the configured server; route declares: Gets a user's Account & Container access.

*Upstream exposes no tool description.*

[Source](https://github.com/ag2-mcp-servers/tag-manager-api/blob/c27bca677a819cf7ceb8b2cd0244fdca8037fb49/mcp_server/main.py#L1162-L1190) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "Alt": {
      "enum": [
        "json",
        "media",
        "proto"
      ],
      "title": "Alt",
      "type": "string"
    },
    "FieldXgafv": {
      "enum": [
        "1",
        "2"
      ],
      "title": "FieldXgafv",
      "type": "string"
    }
  },
  "properties": {
    "path": {
      "title": "Path",
      "type": "string"
    },
    "containerVersionId": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Containerversionid"
    },
    "$.xgafv": {
      "anyOf": [
        {
          "$ref": "#/$defs/FieldXgafv"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "access_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Access Token"
    },
    "alt": {
      "anyOf": [
        {
          "$ref": "#/$defs/Alt"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "callback": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Callback"
    },
    "fields": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Fields"
    },
    "key": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Key"
    },
    "oauth_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Oauth Token"
    },
    "prettyPrint": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Prettyprint"
    },
    "quotaUser": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Quotauser"
    },
    "upload_protocol": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Upload Protocol"
    },
    "uploadType": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Uploadtype"
    }
  },
  "required": [
    "path"
  ],
  "title": "tagmanager_accounts_user_permissions_getArguments",
  "type": "object"
}
```

</details>

<a id="tool-tagmanager_accounts_user_permissions_update-b9cad5fe"></a>

## tagmanager_accounts_user_permissions_update

Handler: Proxy sends PUT /tagmanager/v2/{path} to the configured server; route declares: Updates a user's Account & Container access.

*Upstream exposes no tool description.*

[Source](https://github.com/ag2-mcp-servers/tag-manager-api/blob/c27bca677a819cf7ceb8b2cd0244fdca8037fb49/mcp_server/main.py#L1193-L1218) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "AccountAccess": {
      "properties": {
        "permission": {
          "anyOf": [
            {
              "$ref": "#/$defs/Permission"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Whether the user has no access, user access, or admin access to an account. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update"
        }
      },
      "title": "AccountAccess",
      "type": "object"
    },
    "Alt": {
      "enum": [
        "json",
        "media",
        "proto"
      ],
      "title": "Alt",
      "type": "string"
    },
    "ContainerAccess": {
      "properties": {
        "containerId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Container ID. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update",
          "title": "Containerid"
        },
        "permission": {
          "anyOf": [
            {
              "$ref": "#/$defs/Permission1"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "List of Container permissions. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update"
        }
      },
      "title": "ContainerAccess",
      "type": "object"
    },
    "FieldXgafv": {
      "enum": [
        "1",
        "2"
      ],
      "title": "FieldXgafv",
      "type": "string"
    },
    "Permission": {
      "enum": [
        "accountPermissionUnspecified",
        "noAccess",
        "user",
        "admin"
      ],
      "title": "Permission",
      "type": "string"
    },
    "Permission1": {
      "enum": [
        "containerPermissionUnspecified",
        "noAccess",
        "read",
        "edit",
        "approve",
        "publish"
      ],
      "title": "Permission1",
      "type": "string"
    },
    "UserPermission": {
      "properties": {
        "accountAccess": {
          "anyOf": [
            {
              "$ref": "#/$defs/AccountAccess"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Account access permissions. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update"
        },
        "accountId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The Account ID uniquely identifies the GTM Account.",
          "title": "Accountid"
        },
        "containerAccess": {
          "anyOf": [
            {
              "items": {
                "$ref": "#/$defs/ContainerAccess"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Container access permissions. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update",
          "title": "Containeraccess"
        },
        "emailAddress": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "User's email address. @mutable tagmanager.accounts.permissions.create",
          "title": "Emailaddress"
        },
        "path": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM UserPermission's API relative path.",
          "title": "Path"
        }
      },
      "title": "UserPermission",
      "type": "object"
    }
  },
  "properties": {
    "path": {
      "title": "Path",
      "type": "string"
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
    },
    "$.xgafv": {
      "anyOf": [
        {
          "$ref": "#/$defs/FieldXgafv"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "access_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Access Token"
    },
    "alt": {
      "anyOf": [
        {
          "$ref": "#/$defs/Alt"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "callback": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Callback"
    },
    "fields": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Fields"
    },
    "key": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Key"
    },
    "oauth_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Oauth Token"
    },
    "prettyPrint": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Prettyprint"
    },
    "quotaUser": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Quotauser"
    },
    "upload_protocol": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Upload Protocol"
    },
    "uploadType": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Uploadtype"
    },
    "body": {
      "$ref": "#/$defs/UserPermission",
      "default": null
    }
  },
  "required": [
    "path"
  ],
  "title": "tagmanager_accounts_user_permissions_updateArguments",
  "type": "object"
}
```

</details>

<a id="tool-revert_tagmanager_built_in_variables-91786a76"></a>

## revert_tagmanager_built_in_variables

Handler: Proxy sends POST /tagmanager/v2/{path}/built\_in\_variables:revert to the configured server; route declares: Reverts changes to a GTM Built-In Variables in a GTM Workspace.

*Upstream exposes no tool description.*

[Source](https://github.com/ag2-mcp-servers/tag-manager-api/blob/c27bca677a819cf7ceb8b2cd0244fdca8037fb49/mcp_server/main.py#L1221-L1245) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "Alt": {
      "enum": [
        "json",
        "media",
        "proto"
      ],
      "title": "Alt",
      "type": "string"
    },
    "FieldXgafv": {
      "enum": [
        "1",
        "2"
      ],
      "title": "FieldXgafv",
      "type": "string"
    },
    "Type7": {
      "enum": [
        "builtInVariableTypeUnspecified",
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
        "visitorRegion"
      ],
      "title": "Type7",
      "type": "string"
    }
  },
  "properties": {
    "path": {
      "title": "Path",
      "type": "string"
    },
    "type": {
      "anyOf": [
        {
          "$ref": "#/$defs/Type7"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "$.xgafv": {
      "anyOf": [
        {
          "$ref": "#/$defs/FieldXgafv"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "access_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Access Token"
    },
    "alt": {
      "anyOf": [
        {
          "$ref": "#/$defs/Alt"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "callback": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Callback"
    },
    "fields": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Fields"
    },
    "key": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Key"
    },
    "oauth_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Oauth Token"
    },
    "prettyPrint": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Prettyprint"
    },
    "quotaUser": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Quotauser"
    },
    "upload_protocol": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Upload Protocol"
    },
    "uploadType": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Uploadtype"
    }
  },
  "required": [
    "path"
  ],
  "title": "revert_tagmanager_built_in_variablesArguments",
  "type": "object"
}
```

</details>

<a id="tool-tagmanager_accounts_containers_workspaces_get_status-f597a4a2"></a>

## tagmanager_accounts_containers_workspaces_get_status

Handler: Proxy sends GET /tagmanager/v2/{path}/status to the configured server; route declares: Finds conflicting and modified entities in the workspace.

*Upstream exposes no tool description.*

[Source](https://github.com/ag2-mcp-servers/tag-manager-api/blob/c27bca677a819cf7ceb8b2cd0244fdca8037fb49/mcp_server/main.py#L1248-L1278) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "Alt": {
      "enum": [
        "json",
        "media",
        "proto"
      ],
      "title": "Alt",
      "type": "string"
    },
    "FieldXgafv": {
      "enum": [
        "1",
        "2"
      ],
      "title": "FieldXgafv",
      "type": "string"
    }
  },
  "properties": {
    "path": {
      "title": "Path",
      "type": "string"
    },
    "$.xgafv": {
      "anyOf": [
        {
          "$ref": "#/$defs/FieldXgafv"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "access_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Access Token"
    },
    "alt": {
      "anyOf": [
        {
          "$ref": "#/$defs/Alt"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "callback": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Callback"
    },
    "fields": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Fields"
    },
    "key": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Key"
    },
    "oauth_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Oauth Token"
    },
    "prettyPrint": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Prettyprint"
    },
    "quotaUser": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Quotauser"
    },
    "upload_protocol": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Upload Protocol"
    },
    "uploadType": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Uploadtype"
    }
  },
  "required": [
    "path"
  ],
  "title": "tagmanager_accounts_containers_workspaces_get_statusArguments",
  "type": "object"
}
```

</details>

<a id="tool-tagmanager_accounts_containers_combine-ea3d848c"></a>

## tagmanager_accounts_containers_combine

Handler: Proxy sends POST /tagmanager/v2/{path}:combine to the configured server; route declares: Combines Containers.

*Upstream exposes no tool description.*

[Source](https://github.com/ag2-mcp-servers/tag-manager-api/blob/c27bca677a819cf7ceb8b2cd0244fdca8037fb49/mcp_server/main.py#L1281-L1309) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "Alt": {
      "enum": [
        "json",
        "media",
        "proto"
      ],
      "title": "Alt",
      "type": "string"
    },
    "FieldXgafv": {
      "enum": [
        "1",
        "2"
      ],
      "title": "FieldXgafv",
      "type": "string"
    },
    "SettingSource": {
      "enum": [
        "settingSourceUnspecified",
        "current",
        "other"
      ],
      "title": "SettingSource",
      "type": "string"
    }
  },
  "properties": {
    "path": {
      "title": "Path",
      "type": "string"
    },
    "allowUserPermissionFeatureUpdate": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Allowuserpermissionfeatureupdate"
    },
    "containerId": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Containerid"
    },
    "settingSource": {
      "anyOf": [
        {
          "$ref": "#/$defs/SettingSource"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "$.xgafv": {
      "anyOf": [
        {
          "$ref": "#/$defs/FieldXgafv"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "access_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Access Token"
    },
    "alt": {
      "anyOf": [
        {
          "$ref": "#/$defs/Alt"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "callback": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Callback"
    },
    "fields": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Fields"
    },
    "key": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Key"
    },
    "oauth_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Oauth Token"
    },
    "prettyPrint": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Prettyprint"
    },
    "quotaUser": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Quotauser"
    },
    "upload_protocol": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Upload Protocol"
    },
    "uploadType": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Uploadtype"
    }
  },
  "required": [
    "path"
  ],
  "title": "tagmanager_accounts_containers_combineArguments",
  "type": "object"
}
```

</details>

<a id="tool-tagmanager_accounts_containers_workspaces_create_version-52f57d20"></a>

## tagmanager_accounts_containers_workspaces_create_version

Handler: Proxy sends POST /tagmanager/v2/{path}:create\_version to the configured server; route declares: Creates a Container Version from the entities present in the workspace, deletes the workspace, and sets the base container version to the newly created version.

*Upstream exposes no tool description.*

[Source](https://github.com/ag2-mcp-servers/tag-manager-api/blob/c27bca677a819cf7ceb8b2cd0244fdca8037fb49/mcp_server/main.py#L1312-L1336) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "Alt": {
      "enum": [
        "json",
        "media",
        "proto"
      ],
      "title": "Alt",
      "type": "string"
    },
    "CreateContainerVersionRequestVersionOptions": {
      "properties": {
        "name": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The name of the container version to be created.",
          "title": "Name"
        },
        "notes": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The notes of the container version to be created.",
          "title": "Notes"
        }
      },
      "title": "CreateContainerVersionRequestVersionOptions",
      "type": "object"
    },
    "FieldXgafv": {
      "enum": [
        "1",
        "2"
      ],
      "title": "FieldXgafv",
      "type": "string"
    }
  },
  "properties": {
    "path": {
      "title": "Path",
      "type": "string"
    },
    "$.xgafv": {
      "anyOf": [
        {
          "$ref": "#/$defs/FieldXgafv"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "access_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Access Token"
    },
    "alt": {
      "anyOf": [
        {
          "$ref": "#/$defs/Alt"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "callback": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Callback"
    },
    "fields": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Fields"
    },
    "key": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Key"
    },
    "oauth_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Oauth Token"
    },
    "prettyPrint": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Prettyprint"
    },
    "quotaUser": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Quotauser"
    },
    "upload_protocol": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Upload Protocol"
    },
    "uploadType": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Uploadtype"
    },
    "body": {
      "$ref": "#/$defs/CreateContainerVersionRequestVersionOptions",
      "default": null
    }
  },
  "required": [
    "path"
  ],
  "title": "tagmanager_accounts_containers_workspaces_create_versionArguments",
  "type": "object"
}
```

</details>

<a id="tool-tagmanager_accounts_containers_workspaces_folders_entities-3fe9902f"></a>

## tagmanager_accounts_containers_workspaces_folders_entities

Handler: Proxy sends POST /tagmanager/v2/{path}:entities to the configured server; route declares: List all entities in a GTM Folder.

*Upstream exposes no tool description.*

[Source](https://github.com/ag2-mcp-servers/tag-manager-api/blob/c27bca677a819cf7ceb8b2cd0244fdca8037fb49/mcp_server/main.py#L1339-L1365) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "Alt": {
      "enum": [
        "json",
        "media",
        "proto"
      ],
      "title": "Alt",
      "type": "string"
    },
    "FieldXgafv": {
      "enum": [
        "1",
        "2"
      ],
      "title": "FieldXgafv",
      "type": "string"
    }
  },
  "properties": {
    "path": {
      "title": "Path",
      "type": "string"
    },
    "pageToken": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Pagetoken"
    },
    "$.xgafv": {
      "anyOf": [
        {
          "$ref": "#/$defs/FieldXgafv"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "access_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Access Token"
    },
    "alt": {
      "anyOf": [
        {
          "$ref": "#/$defs/Alt"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "callback": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Callback"
    },
    "fields": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Fields"
    },
    "key": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Key"
    },
    "oauth_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Oauth Token"
    },
    "prettyPrint": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Prettyprint"
    },
    "quotaUser": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Quotauser"
    },
    "upload_protocol": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Upload Protocol"
    },
    "uploadType": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Uploadtype"
    }
  },
  "required": [
    "path"
  ],
  "title": "tagmanager_accounts_containers_workspaces_folders_entitiesArguments",
  "type": "object"
}
```

</details>

<a id="tool-move_entities_to_tag_folder-ea7d5b4a"></a>

## move_entities_to_tag_folder

Handler: Proxy sends POST /tagmanager/v2/{path}:move\_entities\_to\_folder to the configured server; route declares: Moves entities to a GTM Folder.

*Upstream exposes no tool description.*

[Source](https://github.com/ag2-mcp-servers/tag-manager-api/blob/c27bca677a819cf7ceb8b2cd0244fdca8037fb49/mcp_server/main.py#L1368-L1395) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "Alt": {
      "enum": [
        "json",
        "media",
        "proto"
      ],
      "title": "Alt",
      "type": "string"
    },
    "FieldXgafv": {
      "enum": [
        "1",
        "2"
      ],
      "title": "FieldXgafv",
      "type": "string"
    },
    "Folder": {
      "properties": {
        "accountId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Account ID.",
          "title": "Accountid"
        },
        "containerId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Container ID.",
          "title": "Containerid"
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
          "description": "The fingerprint of the GTM Folder as computed at storage time. This value is recomputed whenever the folder is modified.",
          "title": "Fingerprint"
        },
        "folderId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The Folder ID uniquely identifies the GTM Folder.",
          "title": "Folderid"
        },
        "name": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Folder display name. @mutable tagmanager.accounts.containers.workspaces.folders.create @mutable tagmanager.accounts.containers.workspaces.folders.update",
          "title": "Name"
        },
        "notes": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "User notes on how to apply this folder in the container. @mutable tagmanager.accounts.containers.workspaces.folders.create @mutable tagmanager.accounts.containers.workspaces.folders.update",
          "title": "Notes"
        },
        "path": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Folder's API relative path.",
          "title": "Path"
        },
        "tagManagerUrl": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Auto generated link to the tag manager UI",
          "title": "Tagmanagerurl"
        },
        "workspaceId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Workspace ID.",
          "title": "Workspaceid"
        }
      },
      "title": "Folder",
      "type": "object"
    },
    "TagId": {
      "items": {
        "type": "string"
      },
      "title": "TagId",
      "type": "array"
    },
    "TriggerId": {
      "items": {
        "type": "string"
      },
      "title": "TriggerId",
      "type": "array"
    },
    "VariableId": {
      "items": {
        "type": "string"
      },
      "title": "VariableId",
      "type": "array"
    }
  },
  "properties": {
    "path": {
      "title": "Path",
      "type": "string"
    },
    "tagId": {
      "anyOf": [
        {
          "$ref": "#/$defs/TagId"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "triggerId": {
      "anyOf": [
        {
          "$ref": "#/$defs/TriggerId"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "variableId": {
      "anyOf": [
        {
          "$ref": "#/$defs/VariableId"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "$.xgafv": {
      "anyOf": [
        {
          "$ref": "#/$defs/FieldXgafv"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "access_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Access Token"
    },
    "alt": {
      "anyOf": [
        {
          "$ref": "#/$defs/Alt"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "callback": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Callback"
    },
    "fields": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Fields"
    },
    "key": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Key"
    },
    "oauth_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Oauth Token"
    },
    "prettyPrint": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Prettyprint"
    },
    "quotaUser": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Quotauser"
    },
    "upload_protocol": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Upload Protocol"
    },
    "uploadType": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Uploadtype"
    },
    "body": {
      "$ref": "#/$defs/Folder",
      "default": null
    }
  },
  "required": [
    "path"
  ],
  "title": "move_entities_to_tag_folderArguments",
  "type": "object"
}
```

</details>

<a id="tool-tagmanager_accounts_containers_move_tag_id-a31953eb"></a>

## tagmanager_accounts_containers_move_tag_id

Handler: Proxy sends POST /tagmanager/v2/{path}:move\_tag\_id to the configured server; route declares: Move Tag ID out of a Container.

*Upstream exposes no tool description.*

[Source](https://github.com/ag2-mcp-servers/tag-manager-api/blob/c27bca677a819cf7ceb8b2cd0244fdca8037fb49/mcp_server/main.py#L1398-L1429) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "Alt": {
      "enum": [
        "json",
        "media",
        "proto"
      ],
      "title": "Alt",
      "type": "string"
    },
    "FieldXgafv": {
      "enum": [
        "1",
        "2"
      ],
      "title": "FieldXgafv",
      "type": "string"
    }
  },
  "properties": {
    "path": {
      "title": "Path",
      "type": "string"
    },
    "allowUserPermissionFeatureUpdate": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Allowuserpermissionfeatureupdate"
    },
    "copySettings": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Copysettings"
    },
    "copyTermsOfService": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Copytermsofservice"
    },
    "copyUsers": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Copyusers"
    },
    "tagId": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Tagid"
    },
    "tagName": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Tagname"
    },
    "$.xgafv": {
      "anyOf": [
        {
          "$ref": "#/$defs/FieldXgafv"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "access_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Access Token"
    },
    "alt": {
      "anyOf": [
        {
          "$ref": "#/$defs/Alt"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "callback": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Callback"
    },
    "fields": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Fields"
    },
    "key": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Key"
    },
    "oauth_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Oauth Token"
    },
    "prettyPrint": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Prettyprint"
    },
    "quotaUser": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Quotauser"
    },
    "upload_protocol": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Upload Protocol"
    },
    "uploadType": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Uploadtype"
    }
  },
  "required": [
    "path"
  ],
  "title": "tagmanager_accounts_containers_move_tag_idArguments",
  "type": "object"
}
```

</details>

<a id="tool-tagmanager_accounts_containers_versions_publish-ac19d06e"></a>

## tagmanager_accounts_containers_versions_publish

Handler: Proxy sends POST /tagmanager/v2/{path}:publish to the configured server; route declares: Publishes a Container Version.

*Upstream exposes no tool description.*

[Source](https://github.com/ag2-mcp-servers/tag-manager-api/blob/c27bca677a819cf7ceb8b2cd0244fdca8037fb49/mcp_server/main.py#L1432-L1456) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "Alt": {
      "enum": [
        "json",
        "media",
        "proto"
      ],
      "title": "Alt",
      "type": "string"
    },
    "FieldXgafv": {
      "enum": [
        "1",
        "2"
      ],
      "title": "FieldXgafv",
      "type": "string"
    }
  },
  "properties": {
    "path": {
      "title": "Path",
      "type": "string"
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
    },
    "$.xgafv": {
      "anyOf": [
        {
          "$ref": "#/$defs/FieldXgafv"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "access_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Access Token"
    },
    "alt": {
      "anyOf": [
        {
          "$ref": "#/$defs/Alt"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "callback": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Callback"
    },
    "fields": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Fields"
    },
    "key": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Key"
    },
    "oauth_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Oauth Token"
    },
    "prettyPrint": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Prettyprint"
    },
    "quotaUser": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Quotauser"
    },
    "upload_protocol": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Upload Protocol"
    },
    "uploadType": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Uploadtype"
    }
  },
  "required": [
    "path"
  ],
  "title": "tagmanager_accounts_containers_versions_publishArguments",
  "type": "object"
}
```

</details>

<a id="tool-tagmanager_accounts_containers_workspaces_quick_preview-407718b4"></a>

## tagmanager_accounts_containers_workspaces_quick_preview

Handler: Proxy sends POST /tagmanager/v2/{path}:quick\_preview to the configured server; route declares: Quick previews a workspace by creating a fake container version from all entities in the provided workspace.

*Upstream exposes no tool description.*

[Source](https://github.com/ag2-mcp-servers/tag-manager-api/blob/c27bca677a819cf7ceb8b2cd0244fdca8037fb49/mcp_server/main.py#L1459-L1482) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "Alt": {
      "enum": [
        "json",
        "media",
        "proto"
      ],
      "title": "Alt",
      "type": "string"
    },
    "FieldXgafv": {
      "enum": [
        "1",
        "2"
      ],
      "title": "FieldXgafv",
      "type": "string"
    }
  },
  "properties": {
    "path": {
      "title": "Path",
      "type": "string"
    },
    "$.xgafv": {
      "anyOf": [
        {
          "$ref": "#/$defs/FieldXgafv"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "access_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Access Token"
    },
    "alt": {
      "anyOf": [
        {
          "$ref": "#/$defs/Alt"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "callback": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Callback"
    },
    "fields": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Fields"
    },
    "key": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Key"
    },
    "oauth_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Oauth Token"
    },
    "prettyPrint": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Prettyprint"
    },
    "quotaUser": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Quotauser"
    },
    "upload_protocol": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Upload Protocol"
    },
    "uploadType": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Uploadtype"
    }
  },
  "required": [
    "path"
  ],
  "title": "tagmanager_accounts_containers_workspaces_quick_previewArguments",
  "type": "object"
}
```

</details>

<a id="tool-tagmanager_accounts_containers_environments_reauthorize-44fb3fa4"></a>

## tagmanager_accounts_containers_environments_reauthorize

Handler: Proxy sends POST /tagmanager/v2/{path}:reauthorize to the configured server; route declares: Re-generates the authorization code for a GTM Environment.

*Upstream exposes no tool description.*

[Source](https://github.com/ag2-mcp-servers/tag-manager-api/blob/c27bca677a819cf7ceb8b2cd0244fdca8037fb49/mcp_server/main.py#L1485-L1509) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "Alt": {
      "enum": [
        "json",
        "media",
        "proto"
      ],
      "title": "Alt",
      "type": "string"
    },
    "Environment": {
      "properties": {
        "accountId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Account ID.",
          "title": "Accountid"
        },
        "authorizationCode": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The environment authorization code.",
          "title": "Authorizationcode"
        },
        "authorizationTimestamp": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The last update time-stamp for the authorization code.",
          "title": "Authorizationtimestamp"
        },
        "containerId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Container ID.",
          "title": "Containerid"
        },
        "containerVersionId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Represents a link to a container version.",
          "title": "Containerversionid"
        },
        "description": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The environment description. Can be set or changed only on USER type environments. @mutable tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update",
          "title": "Description"
        },
        "enableDebug": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Whether or not to enable debug by default for the environment. @mutable tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update",
          "title": "Enabledebug"
        },
        "environmentId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Environment ID uniquely identifies the GTM Environment.",
          "title": "Environmentid"
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
          "description": "The fingerprint of the GTM environment as computed at storage time. This value is recomputed whenever the environment is modified.",
          "title": "Fingerprint"
        },
        "name": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The environment display name. Can be set or changed only on USER type environments. @mutable tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update",
          "title": "Name"
        },
        "path": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Environment's API relative path.",
          "title": "Path"
        },
        "tagManagerUrl": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Auto generated link to the tag manager UI",
          "title": "Tagmanagerurl"
        },
        "type": {
          "anyOf": [
            {
              "$ref": "#/$defs/Type2"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The type of this environment."
        },
        "url": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Default preview page url for the environment. @mutable tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update",
          "title": "Url"
        },
        "workspaceId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Represents a link to a quick preview of a workspace.",
          "title": "Workspaceid"
        }
      },
      "title": "Environment",
      "type": "object"
    },
    "FieldXgafv": {
      "enum": [
        "1",
        "2"
      ],
      "title": "FieldXgafv",
      "type": "string"
    },
    "Type2": {
      "enum": [
        "user",
        "live",
        "latest",
        "workspace"
      ],
      "title": "Type2",
      "type": "string"
    }
  },
  "properties": {
    "path": {
      "title": "Path",
      "type": "string"
    },
    "$.xgafv": {
      "anyOf": [
        {
          "$ref": "#/$defs/FieldXgafv"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "access_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Access Token"
    },
    "alt": {
      "anyOf": [
        {
          "$ref": "#/$defs/Alt"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "callback": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Callback"
    },
    "fields": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Fields"
    },
    "key": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Key"
    },
    "oauth_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Oauth Token"
    },
    "prettyPrint": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Prettyprint"
    },
    "quotaUser": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Quotauser"
    },
    "upload_protocol": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Upload Protocol"
    },
    "uploadType": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Uploadtype"
    },
    "body": {
      "$ref": "#/$defs/Environment",
      "default": null
    }
  },
  "required": [
    "path"
  ],
  "title": "tagmanager_accounts_containers_environments_reauthorizeArguments",
  "type": "object"
}
```

</details>

<a id="tool-tagmanager_accounts_containers_workspaces_resolve_conflict-fb1248ce"></a>

## tagmanager_accounts_containers_workspaces_resolve_conflict

Handler: Proxy sends POST /tagmanager/v2/{path}:resolve\_conflict to the configured server; route declares: Resolves a merge conflict for a workspace entity by updating it to the resolved entity passed in the request.

*Upstream exposes no tool description.*

[Source](https://github.com/ag2-mcp-servers/tag-manager-api/blob/c27bca677a819cf7ceb8b2cd0244fdca8037fb49/mcp_server/main.py#L1512-L1537) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "Alt": {
      "enum": [
        "json",
        "media",
        "proto"
      ],
      "title": "Alt",
      "type": "string"
    },
    "CaseConversionType": {
      "enum": [
        "none",
        "lowercase",
        "uppercase"
      ],
      "title": "CaseConversionType",
      "type": "string"
    },
    "ChangeStatus": {
      "enum": [
        "changeStatusUnspecified",
        "none",
        "added",
        "deleted",
        "updated"
      ],
      "title": "ChangeStatus",
      "type": "string"
    },
    "Client": {
      "properties": {
        "accountId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Account ID.",
          "title": "Accountid"
        },
        "clientId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The Client ID uniquely identifies the GTM client.",
          "title": "Clientid"
        },
        "containerId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Container ID.",
          "title": "Containerid"
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
          "description": "The fingerprint of the GTM Client as computed at storage time. This value is recomputed whenever the client is modified.",
          "title": "Fingerprint"
        },
        "name": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Client display name. @mutable tagmanager.accounts.containers.workspaces.clients.create @mutable tagmanager.accounts.containers.workspaces.clients.update",
          "title": "Name"
        },
        "notes": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "User notes on how to apply this tag in the container. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          "title": "Notes"
        },
        "parameter": {
          "anyOf": [
            {
              "items": {
                "$ref": "#/$defs/Parameter"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The client's parameters. @mutable tagmanager.accounts.containers.workspaces.clients.create @mutable tagmanager.accounts.containers.workspaces.clients.update",
          "title": "Parameter"
        },
        "parentFolderId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Parent folder id.",
          "title": "Parentfolderid"
        },
        "path": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM client's API relative path.",
          "title": "Path"
        },
        "priority": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Priority determines relative firing order. @mutable tagmanager.accounts.containers.workspaces.clients.create @mutable tagmanager.accounts.containers.workspaces.clients.update",
          "title": "Priority"
        },
        "tagManagerUrl": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Auto generated link to the tag manager UI",
          "title": "Tagmanagerurl"
        },
        "type": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Client type. @mutable tagmanager.accounts.containers.workspaces.clients.create @mutable tagmanager.accounts.containers.workspaces.clients.update",
          "title": "Type"
        },
        "workspaceId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Workspace ID.",
          "title": "Workspaceid"
        }
      },
      "title": "Client",
      "type": "object"
    },
    "Condition": {
      "properties": {
        "parameter": {
          "anyOf": [
            {
              "items": {
                "$ref": "#/$defs/Parameter"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "A list of named parameters (key/value), depending on the condition's type. Notes: - For binary operators, include parameters named arg0 and arg1 for specifying the left and right operands, respectively. - At this time, the left operand (arg0) must be a reference to a variable. - For case-insensitive Regex matching, include a boolean parameter named ignore_case that is set to true. If not specified or set to any other value, the matching will be case sensitive. - To negate an operator, include a boolean parameter named negate boolean parameter that is set to true. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update",
          "title": "Parameter"
        },
        "type": {
          "anyOf": [
            {
              "$ref": "#/$defs/Type1"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The type of operator for this condition. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update"
        }
      },
      "title": "Condition",
      "type": "object"
    },
    "ConsentStatus": {
      "enum": [
        "notSet",
        "notNeeded",
        "needed"
      ],
      "title": "ConsentStatus",
      "type": "string"
    },
    "Entity": {
      "properties": {
        "changeStatus": {
          "anyOf": [
            {
              "$ref": "#/$defs/ChangeStatus"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Represents how the entity has been changed in the workspace."
        },
        "client": {
          "anyOf": [
            {
              "$ref": "#/$defs/Client"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The client being represented by the entity."
        },
        "folder": {
          "anyOf": [
            {
              "$ref": "#/$defs/Folder"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The folder being represented by the entity."
        },
        "tag": {
          "anyOf": [
            {
              "$ref": "#/$defs/Tag"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The tag being represented by the entity."
        },
        "trigger": {
          "anyOf": [
            {
              "$ref": "#/$defs/Trigger"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The trigger being represented by the entity."
        },
        "variable": {
          "anyOf": [
            {
              "$ref": "#/$defs/Variable"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The variable being represented by the entity."
        }
      },
      "title": "Entity",
      "type": "object"
    },
    "FieldXgafv": {
      "enum": [
        "1",
        "2"
      ],
      "title": "FieldXgafv",
      "type": "string"
    },
    "Folder": {
      "properties": {
        "accountId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Account ID.",
          "title": "Accountid"
        },
        "containerId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Container ID.",
          "title": "Containerid"
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
          "description": "The fingerprint of the GTM Folder as computed at storage time. This value is recomputed whenever the folder is modified.",
          "title": "Fingerprint"
        },
        "folderId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The Folder ID uniquely identifies the GTM Folder.",
          "title": "Folderid"
        },
        "name": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Folder display name. @mutable tagmanager.accounts.containers.workspaces.folders.create @mutable tagmanager.accounts.containers.workspaces.folders.update",
          "title": "Name"
        },
        "notes": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "User notes on how to apply this folder in the container. @mutable tagmanager.accounts.containers.workspaces.folders.create @mutable tagmanager.accounts.containers.workspaces.folders.update",
          "title": "Notes"
        },
        "path": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Folder's API relative path.",
          "title": "Path"
        },
        "tagManagerUrl": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Auto generated link to the tag manager UI",
          "title": "Tagmanagerurl"
        },
        "workspaceId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Workspace ID.",
          "title": "Workspaceid"
        }
      },
      "title": "Folder",
      "type": "object"
    },
    "Parameter": {
      "properties": {
        "key": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The named key that uniquely identifies a parameter. Required for top-level parameters, as well as map values. Ignored for list values. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          "title": "Key"
        },
        "list": {
          "anyOf": [
            {
              "items": {
                "$ref": "#/$defs/Parameter"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "This list parameter's parameters (keys will be ignored). @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          "title": "List"
        },
        "map": {
          "anyOf": [
            {
              "items": {
                "$ref": "#/$defs/Parameter"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "This map parameter's parameters (must have keys; keys must be unique). @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          "title": "Map"
        },
        "type": {
          "anyOf": [
            {
              "$ref": "#/$defs/Type3"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The parameter type. Valid values are: - boolean: The value represents a boolean, represented as 'true' or 'false' - integer: The value represents a 64-bit signed integer value, in base 10 - list: A list of parameters should be specified - map: A map of parameters should be specified - template: The value represents any text; this can include variable references (even variable references that might return non-string types) - trigger_reference: The value represents a trigger, represented as the trigger id - tag_reference: The value represents a tag, represented as the tag name @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update"
        },
        "value": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "A parameter's value (may contain variable references such as \"{{myVariable}}\") as appropriate to the specified type. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          "title": "Value"
        }
      },
      "title": "Parameter",
      "type": "object"
    },
    "SetupTag": {
      "properties": {
        "stopOnSetupFailure": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "If true, fire the main tag if and only if the setup tag fires successfully. If false, fire the main tag regardless of setup tag firing status.",
          "title": "Stoponsetupfailure"
        },
        "tagName": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The name of the setup tag.",
          "title": "Tagname"
        }
      },
      "title": "SetupTag",
      "type": "object"
    },
    "Tag": {
      "properties": {
        "accountId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Account ID.",
          "title": "Accountid"
        },
        "blockingRuleId": {
          "anyOf": [
            {
              "items": {
                "type": "string"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Blocking rule IDs. If any of the listed rules evaluate to true, the tag will not fire. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          "title": "Blockingruleid"
        },
        "blockingTriggerId": {
          "anyOf": [
            {
              "items": {
                "type": "string"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Blocking trigger IDs. If any of the listed triggers evaluate to true, the tag will not fire. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          "title": "Blockingtriggerid"
        },
        "consentSettings": {
          "anyOf": [
            {
              "$ref": "#/$defs/TagConsentSetting"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Consent settings of a tag. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update"
        },
        "containerId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Container ID.",
          "title": "Containerid"
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
          "description": "The fingerprint of the GTM Tag as computed at storage time. This value is recomputed whenever the tag is modified.",
          "title": "Fingerprint"
        },
        "firingRuleId": {
          "anyOf": [
            {
              "items": {
                "type": "string"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Firing rule IDs. A tag will fire when any of the listed rules are true and all of its blockingRuleIds (if any specified) are false. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          "title": "Firingruleid"
        },
        "firingTriggerId": {
          "anyOf": [
            {
              "items": {
                "type": "string"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Firing trigger IDs. A tag will fire when any of the listed triggers are true and all of its blockingTriggerIds (if any specified) are false. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          "title": "Firingtriggerid"
        },
        "liveOnly": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "If set to true, this tag will only fire in the live environment (e.g. not in preview or debug mode). @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          "title": "Liveonly"
        },
        "monitoringMetadata": {
          "anyOf": [
            {
              "$ref": "#/$defs/Parameter"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "A map of key-value pairs of tag metadata to be included in the event data for tag monitoring. Notes: - This parameter must be type MAP. - Each parameter in the map are type TEMPLATE, however cannot contain variable references. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update"
        },
        "monitoringMetadataTagNameKey": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "If non-empty, then the tag display name will be included in the monitoring metadata map using the key specified. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          "title": "Monitoringmetadatatagnamekey"
        },
        "name": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Tag display name. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          "title": "Name"
        },
        "notes": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "User notes on how to apply this tag in the container. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          "title": "Notes"
        },
        "parameter": {
          "anyOf": [
            {
              "items": {
                "$ref": "#/$defs/Parameter"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The tag's parameters. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          "title": "Parameter"
        },
        "parentFolderId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Parent folder id.",
          "title": "Parentfolderid"
        },
        "path": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Tag's API relative path.",
          "title": "Path"
        },
        "paused": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Indicates whether the tag is paused, which prevents the tag from firing. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          "title": "Paused"
        },
        "priority": {
          "anyOf": [
            {
              "$ref": "#/$defs/Parameter"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "User defined numeric priority of the tag. Tags are fired asynchronously in order of priority. Tags with higher numeric value fire first. A tag's priority can be a positive or negative value. The default value is 0. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update"
        },
        "scheduleEndMs": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The end timestamp in milliseconds to schedule a tag. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          "title": "Scheduleendms"
        },
        "scheduleStartMs": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The start timestamp in milliseconds to schedule a tag. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          "title": "Schedulestartms"
        },
        "setupTag": {
          "anyOf": [
            {
              "items": {
                "$ref": "#/$defs/SetupTag"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The list of setup tags. Currently we only allow one.",
          "title": "Setuptag"
        },
        "tagFiringOption": {
          "anyOf": [
            {
              "$ref": "#/$defs/TagFiringOption"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Option to fire this tag."
        },
        "tagId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The Tag ID uniquely identifies the GTM Tag.",
          "title": "Tagid"
        },
        "tagManagerUrl": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Auto generated link to the tag manager UI",
          "title": "Tagmanagerurl"
        },
        "teardownTag": {
          "anyOf": [
            {
              "items": {
                "$ref": "#/$defs/TeardownTag"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The list of teardown tags. Currently we only allow one.",
          "title": "Teardowntag"
        },
        "type": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Tag Type. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update",
          "title": "Type"
        },
        "workspaceId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Workspace ID.",
          "title": "Workspaceid"
        }
      },
      "title": "Tag",
      "type": "object"
    },
    "TagConsentSetting": {
      "properties": {
        "consentStatus": {
          "anyOf": [
            {
              "$ref": "#/$defs/ConsentStatus"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The tag's consent status. If set to NEEDED, the runtime will check that the consent types specified by the consent_type field have been granted."
        },
        "consentType": {
          "anyOf": [
            {
              "$ref": "#/$defs/Parameter"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The type of consents to check for during tag firing if in the consent NEEDED state. This parameter must be of type LIST where each list item is of type STRING."
        }
      },
      "title": "TagConsentSetting",
      "type": "object"
    },
    "TagFiringOption": {
      "enum": [
        "tagFiringOptionUnspecified",
        "unlimited",
        "oncePerEvent",
        "oncePerLoad"
      ],
      "title": "TagFiringOption",
      "type": "string"
    },
    "TeardownTag": {
      "properties": {
        "stopTeardownOnFailure": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "If true, fire the teardown tag if and only if the main tag fires successfully. If false, fire the teardown tag regardless of main tag firing status.",
          "title": "Stopteardownonfailure"
        },
        "tagName": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The name of the teardown tag.",
          "title": "Tagname"
        }
      },
      "title": "TeardownTag",
      "type": "object"
    },
    "Trigger": {
      "properties": {
        "accountId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Account ID.",
          "title": "Accountid"
        },
        "autoEventFilter": {
          "anyOf": [
            {
              "items": {
                "$ref": "#/$defs/Condition"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Used in the case of auto event tracking. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update",
          "title": "Autoeventfilter"
        },
        "checkValidation": {
          "anyOf": [
            {
              "$ref": "#/$defs/Parameter"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Whether or not we should only fire tags if the form submit or link click event is not cancelled by some other event handler (e.g. because of validation). Only valid for Form Submission and Link Click triggers. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update"
        },
        "containerId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Container ID.",
          "title": "Containerid"
        },
        "continuousTimeMinMilliseconds": {
          "anyOf": [
            {
              "$ref": "#/$defs/Parameter"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "A visibility trigger minimum continuous visible time (in milliseconds). Only valid for AMP Visibility trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update"
        },
        "customEventFilter": {
          "anyOf": [
            {
              "items": {
                "$ref": "#/$defs/Condition"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Used in the case of custom event, which is fired iff all Conditions are true. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update",
          "title": "Customeventfilter"
        },
        "eventName": {
          "anyOf": [
            {
              "$ref": "#/$defs/Parameter"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Name of the GTM event that is fired. Only valid for Timer triggers. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update"
        },
        "filter": {
          "anyOf": [
            {
              "items": {
                "$ref": "#/$defs/Condition"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The trigger will only fire iff all Conditions are true. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update",
          "title": "Filter"
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
          "description": "The fingerprint of the GTM Trigger as computed at storage time. This value is recomputed whenever the trigger is modified.",
          "title": "Fingerprint"
        },
        "horizontalScrollPercentageList": {
          "anyOf": [
            {
              "$ref": "#/$defs/Parameter"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "List of integer percentage values for scroll triggers. The trigger will fire when each percentage is reached when the view is scrolled horizontally. Only valid for AMP scroll triggers. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update"
        },
        "interval": {
          "anyOf": [
            {
              "$ref": "#/$defs/Parameter"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Time between triggering recurring Timer Events (in milliseconds). Only valid for Timer triggers. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update"
        },
        "intervalSeconds": {
          "anyOf": [
            {
              "$ref": "#/$defs/Parameter"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Time between Timer Events to fire (in seconds). Only valid for AMP Timer trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update"
        },
        "limit": {
          "anyOf": [
            {
              "$ref": "#/$defs/Parameter"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Limit of the number of GTM events this Timer Trigger will fire. If no limit is set, we will continue to fire GTM events until the user leaves the page. Only valid for Timer triggers. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update"
        },
        "maxTimerLengthSeconds": {
          "anyOf": [
            {
              "$ref": "#/$defs/Parameter"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Max time to fire Timer Events (in seconds). Only valid for AMP Timer trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update"
        },
        "name": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Trigger display name. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update",
          "title": "Name"
        },
        "notes": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "User notes on how to apply this trigger in the container. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update",
          "title": "Notes"
        },
        "parameter": {
          "anyOf": [
            {
              "items": {
                "$ref": "#/$defs/Parameter"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Additional parameters. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update",
          "title": "Parameter"
        },
        "parentFolderId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Parent folder id.",
          "title": "Parentfolderid"
        },
        "path": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Trigger's API relative path.",
          "title": "Path"
        },
        "selector": {
          "anyOf": [
            {
              "$ref": "#/$defs/Parameter"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "A click trigger CSS selector (i.e. \"a\", \"button\" etc.). Only valid for AMP Click trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update"
        },
        "tagManagerUrl": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Auto generated link to the tag manager UI",
          "title": "Tagmanagerurl"
        },
        "totalTimeMinMilliseconds": {
          "anyOf": [
            {
              "$ref": "#/$defs/Parameter"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "A visibility trigger minimum total visible time (in milliseconds). Only valid for AMP Visibility trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update"
        },
        "triggerId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The Trigger ID uniquely identifies the GTM Trigger.",
          "title": "Triggerid"
        },
        "type": {
          "anyOf": [
            {
              "$ref": "#/$defs/Type4"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Defines the data layer event that causes this trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update"
        },
        "uniqueTriggerId": {
          "anyOf": [
            {
              "$ref": "#/$defs/Parameter"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Globally unique id of the trigger that auto-generates this (a Form Submit, Link Click or Timer listener) if any. Used to make incompatible auto-events work together with trigger filtering based on trigger ids. This value is populated during output generation since the tags implied by triggers don't exist until then. Only valid for Form Submit, Link Click and Timer triggers. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update"
        },
        "verticalScrollPercentageList": {
          "anyOf": [
            {
              "$ref": "#/$defs/Parameter"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "List of integer percentage values for scroll triggers. The trigger will fire when each percentage is reached when the view is scrolled vertically. Only valid for AMP scroll triggers. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update"
        },
        "visibilitySelector": {
          "anyOf": [
            {
              "$ref": "#/$defs/Parameter"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "A visibility trigger CSS selector (i.e. \"#id\"). Only valid for AMP Visibility trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update"
        },
        "visiblePercentageMax": {
          "anyOf": [
            {
              "$ref": "#/$defs/Parameter"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "A visibility trigger maximum percent visibility. Only valid for AMP Visibility trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update"
        },
        "visiblePercentageMin": {
          "anyOf": [
            {
              "$ref": "#/$defs/Parameter"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "A visibility trigger minimum percent visibility. Only valid for AMP Visibility trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update"
        },
        "waitForTags": {
          "anyOf": [
            {
              "$ref": "#/$defs/Parameter"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Whether or not we should delay the form submissions or link opening until all of the tags have fired (by preventing the default action and later simulating the default action). Only valid for Form Submission and Link Click triggers. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update"
        },
        "waitForTagsTimeout": {
          "anyOf": [
            {
              "$ref": "#/$defs/Parameter"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "How long to wait (in milliseconds) for tags to fire when 'waits_for_tags' above evaluates to true. Only valid for Form Submission and Link Click triggers. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update"
        },
        "workspaceId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Workspace ID.",
          "title": "Workspaceid"
        }
      },
      "title": "Trigger",
      "type": "object"
    },
    "Type1": {
      "enum": [
        "conditionTypeUnspecified",
        "equals",
        "contains",
        "startsWith",
        "endsWith",
        "matchRegex",
        "greater",
        "greaterOrEquals",
        "less",
        "lessOrEquals",
        "cssSelector",
        "urlMatches"
      ],
      "title": "Type1",
      "type": "string"
    },
    "Type3": {
      "enum": [
        "typeUnspecified",
        "template",
        "integer",
        "boolean",
        "list",
        "map",
        "triggerReference",
        "tagReference"
      ],
      "title": "Type3",
      "type": "string"
    },
    "Type4": {
      "enum": [
        "eventTypeUnspecified",
        "pageview",
        "domReady",
        "windowLoaded",
        "customEvent",
        "triggerGroup",
        "init",
        "consentInit",
        "serverPageview",
        "always",
        "firebaseAppException",
        "firebaseAppUpdate",
        "firebaseCampaign",
        "firebaseFirstOpen",
        "firebaseInAppPurchase",
        "firebaseNotificationDismiss",
        "firebaseNotificationForeground",
        "firebaseNotificationOpen",
        "firebaseNotificationReceive",
        "firebaseOsUpdate",
        "firebaseSessionStart",
        "firebaseUserEngagement",
        "formSubmission",
        "click",
        "linkClick",
        "jsError",
        "historyChange",
        "timer",
        "ampClick",
        "ampTimer",
        "ampScroll",
        "ampVisibility",
        "youTubeVideo",
        "scrollDepth",
        "elementVisibility"
      ],
      "title": "Type4",
      "type": "string"
    },
    "Variable": {
      "properties": {
        "accountId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Account ID.",
          "title": "Accountid"
        },
        "containerId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Container ID.",
          "title": "Containerid"
        },
        "disablingTriggerId": {
          "anyOf": [
            {
              "items": {
                "type": "string"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "For mobile containers only: A list of trigger IDs for disabling conditional variables; the variable is enabled if one of the enabling trigger is true while all the disabling trigger are false. Treated as an unordered set. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update",
          "title": "Disablingtriggerid"
        },
        "enablingTriggerId": {
          "anyOf": [
            {
              "items": {
                "type": "string"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "For mobile containers only: A list of trigger IDs for enabling conditional variables; the variable is enabled if one of the enabling triggers is true while all the disabling triggers are false. Treated as an unordered set. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update",
          "title": "Enablingtriggerid"
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
          "description": "The fingerprint of the GTM Variable as computed at storage time. This value is recomputed whenever the variable is modified.",
          "title": "Fingerprint"
        },
        "formatValue": {
          "anyOf": [
            {
              "$ref": "#/$defs/VariableFormatValue"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Option to convert a variable value to other value."
        },
        "name": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Variable display name. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update",
          "title": "Name"
        },
        "notes": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "User notes on how to apply this variable in the container. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update",
          "title": "Notes"
        },
        "parameter": {
          "anyOf": [
            {
              "items": {
                "$ref": "#/$defs/Parameter"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The variable's parameters. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update",
          "title": "Parameter"
        },
        "parentFolderId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Parent folder id.",
          "title": "Parentfolderid"
        },
        "path": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Variable's API relative path.",
          "title": "Path"
        },
        "scheduleEndMs": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The end timestamp in milliseconds to schedule a variable. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update",
          "title": "Scheduleendms"
        },
        "scheduleStartMs": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The start timestamp in milliseconds to schedule a variable. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update",
          "title": "Schedulestartms"
        },
        "tagManagerUrl": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Auto generated link to the tag manager UI",
          "title": "Tagmanagerurl"
        },
        "type": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Variable Type. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update",
          "title": "Type"
        },
        "variableId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The Variable ID uniquely identifies the GTM Variable.",
          "title": "Variableid"
        },
        "workspaceId": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "GTM Workspace ID.",
          "title": "Workspaceid"
        }
      },
      "title": "Variable",
      "type": "object"
    },
    "VariableFormatValue": {
      "properties": {
        "caseConversionType": {
          "anyOf": [
            {
              "$ref": "#/$defs/CaseConversionType"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The option to convert a string-type variable value to either lowercase or uppercase."
        },
        "convertFalseToValue": {
          "anyOf": [
            {
              "$ref": "#/$defs/Parameter"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The value to convert if a variable value is false."
        },
        "convertNullToValue": {
          "anyOf": [
            {
              "$ref": "#/$defs/Parameter"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The value to convert if a variable value is null."
        },
        "convertTrueToValue": {
          "anyOf": [
            {
              "$ref": "#/$defs/Parameter"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The value to convert if a variable value is true."
        },
        "convertUndefinedToValue": {
          "anyOf": [
            {
              "$ref": "#/$defs/Parameter"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The value to convert if a variable value is undefined."
        }
      },
      "title": "VariableFormatValue",
      "type": "object"
    }
  },
  "properties": {
    "path": {
      "title": "Path",
      "type": "string"
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
    },
    "$.xgafv": {
      "anyOf": [
        {
          "$ref": "#/$defs/FieldXgafv"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "access_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Access Token"
    },
    "alt": {
      "anyOf": [
        {
          "$ref": "#/$defs/Alt"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "callback": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Callback"
    },
    "fields": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Fields"
    },
    "key": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Key"
    },
    "oauth_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Oauth Token"
    },
    "prettyPrint": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Prettyprint"
    },
    "quotaUser": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Quotauser"
    },
    "upload_protocol": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Upload Protocol"
    },
    "uploadType": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Uploadtype"
    },
    "body": {
      "$ref": "#/$defs/Entity",
      "default": null
    }
  },
  "required": [
    "path"
  ],
  "title": "tagmanager_accounts_containers_workspaces_resolve_conflictArguments",
  "type": "object"
}
```

</details>

<a id="tool-tagmanager_accounts_containers_workspaces_zones_revert-273a2fa4"></a>

## tagmanager_accounts_containers_workspaces_zones_revert

Handler: Proxy sends POST /tagmanager/v2/{path}:revert to the configured server; route declares: Reverts changes to a GTM Zone in a GTM Workspace.

*Upstream exposes no tool description.*

[Source](https://github.com/ag2-mcp-servers/tag-manager-api/blob/c27bca677a819cf7ceb8b2cd0244fdca8037fb49/mcp_server/main.py#L1540-L1564) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "Alt": {
      "enum": [
        "json",
        "media",
        "proto"
      ],
      "title": "Alt",
      "type": "string"
    },
    "FieldXgafv": {
      "enum": [
        "1",
        "2"
      ],
      "title": "FieldXgafv",
      "type": "string"
    }
  },
  "properties": {
    "path": {
      "title": "Path",
      "type": "string"
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
    },
    "$.xgafv": {
      "anyOf": [
        {
          "$ref": "#/$defs/FieldXgafv"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "access_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Access Token"
    },
    "alt": {
      "anyOf": [
        {
          "$ref": "#/$defs/Alt"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "callback": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Callback"
    },
    "fields": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Fields"
    },
    "key": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Key"
    },
    "oauth_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Oauth Token"
    },
    "prettyPrint": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Prettyprint"
    },
    "quotaUser": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Quotauser"
    },
    "upload_protocol": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Upload Protocol"
    },
    "uploadType": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Uploadtype"
    }
  },
  "required": [
    "path"
  ],
  "title": "tagmanager_accounts_containers_workspaces_zones_revertArguments",
  "type": "object"
}
```

</details>

<a id="tool-tagmanager_accounts_containers_versions_set_latest-81b79b40"></a>

## tagmanager_accounts_containers_versions_set_latest

Handler: Proxy sends POST /tagmanager/v2/{path}:set\_latest to the configured server; route declares: Sets the latest version used for synchronization of workspaces when detecting conflicts and errors.

*Upstream exposes no tool description.*

[Source](https://github.com/ag2-mcp-servers/tag-manager-api/blob/c27bca677a819cf7ceb8b2cd0244fdca8037fb49/mcp_server/main.py#L1567-L1590) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "Alt": {
      "enum": [
        "json",
        "media",
        "proto"
      ],
      "title": "Alt",
      "type": "string"
    },
    "FieldXgafv": {
      "enum": [
        "1",
        "2"
      ],
      "title": "FieldXgafv",
      "type": "string"
    }
  },
  "properties": {
    "path": {
      "title": "Path",
      "type": "string"
    },
    "$.xgafv": {
      "anyOf": [
        {
          "$ref": "#/$defs/FieldXgafv"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "access_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Access Token"
    },
    "alt": {
      "anyOf": [
        {
          "$ref": "#/$defs/Alt"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "callback": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Callback"
    },
    "fields": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Fields"
    },
    "key": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Key"
    },
    "oauth_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Oauth Token"
    },
    "prettyPrint": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Prettyprint"
    },
    "quotaUser": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Quotauser"
    },
    "upload_protocol": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Upload Protocol"
    },
    "uploadType": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Uploadtype"
    }
  },
  "required": [
    "path"
  ],
  "title": "tagmanager_accounts_containers_versions_set_latestArguments",
  "type": "object"
}
```

</details>

<a id="tool-tagmanager_accounts_containers_snippet-86f6f5a4"></a>

## tagmanager_accounts_containers_snippet

Handler: Proxy sends GET /tagmanager/v2/{path}:snippet to the configured server; route declares: Gets the tagging snippet for a Container.

*Upstream exposes no tool description.*

[Source](https://github.com/ag2-mcp-servers/tag-manager-api/blob/c27bca677a819cf7ceb8b2cd0244fdca8037fb49/mcp_server/main.py#L1593-L1618) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "Alt": {
      "enum": [
        "json",
        "media",
        "proto"
      ],
      "title": "Alt",
      "type": "string"
    },
    "FieldXgafv": {
      "enum": [
        "1",
        "2"
      ],
      "title": "FieldXgafv",
      "type": "string"
    }
  },
  "properties": {
    "path": {
      "title": "Path",
      "type": "string"
    },
    "$.xgafv": {
      "anyOf": [
        {
          "$ref": "#/$defs/FieldXgafv"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "access_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Access Token"
    },
    "alt": {
      "anyOf": [
        {
          "$ref": "#/$defs/Alt"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "callback": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Callback"
    },
    "fields": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Fields"
    },
    "key": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Key"
    },
    "oauth_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Oauth Token"
    },
    "prettyPrint": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Prettyprint"
    },
    "quotaUser": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Quotauser"
    },
    "upload_protocol": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Upload Protocol"
    },
    "uploadType": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Uploadtype"
    }
  },
  "required": [
    "path"
  ],
  "title": "tagmanager_accounts_containers_snippetArguments",
  "type": "object"
}
```

</details>

<a id="tool-tagmanager_accounts_containers_workspaces_sync-752d02df"></a>

## tagmanager_accounts_containers_workspaces_sync

Handler: Proxy sends POST /tagmanager/v2/{path}:sync to the configured server; route declares: Syncs a workspace to the latest container version by updating all unmodified workspace entities and displaying conflicts for modified entities.

*Upstream exposes no tool description.*

[Source](https://github.com/ag2-mcp-servers/tag-manager-api/blob/c27bca677a819cf7ceb8b2cd0244fdca8037fb49/mcp_server/main.py#L1621-L1644) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "Alt": {
      "enum": [
        "json",
        "media",
        "proto"
      ],
      "title": "Alt",
      "type": "string"
    },
    "FieldXgafv": {
      "enum": [
        "1",
        "2"
      ],
      "title": "FieldXgafv",
      "type": "string"
    }
  },
  "properties": {
    "path": {
      "title": "Path",
      "type": "string"
    },
    "$.xgafv": {
      "anyOf": [
        {
          "$ref": "#/$defs/FieldXgafv"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "access_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Access Token"
    },
    "alt": {
      "anyOf": [
        {
          "$ref": "#/$defs/Alt"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "callback": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Callback"
    },
    "fields": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Fields"
    },
    "key": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Key"
    },
    "oauth_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Oauth Token"
    },
    "prettyPrint": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Prettyprint"
    },
    "quotaUser": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Quotauser"
    },
    "upload_protocol": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Upload Protocol"
    },
    "uploadType": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Uploadtype"
    }
  },
  "required": [
    "path"
  ],
  "title": "tagmanager_accounts_containers_workspaces_syncArguments",
  "type": "object"
}
```

</details>

<a id="tool-tagmanager_accounts_containers_versions_undelete-4d9ee3cd"></a>

## tagmanager_accounts_containers_versions_undelete

Handler: Proxy sends POST /tagmanager/v2/{path}:undelete to the configured server; route declares: Undeletes a Container Version.

*Upstream exposes no tool description.*

[Source](https://github.com/ag2-mcp-servers/tag-manager-api/blob/c27bca677a819cf7ceb8b2cd0244fdca8037fb49/mcp_server/main.py#L1647-L1670) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "$defs": {
    "Alt": {
      "enum": [
        "json",
        "media",
        "proto"
      ],
      "title": "Alt",
      "type": "string"
    },
    "FieldXgafv": {
      "enum": [
        "1",
        "2"
      ],
      "title": "FieldXgafv",
      "type": "string"
    }
  },
  "properties": {
    "path": {
      "title": "Path",
      "type": "string"
    },
    "$.xgafv": {
      "anyOf": [
        {
          "$ref": "#/$defs/FieldXgafv"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "access_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Access Token"
    },
    "alt": {
      "anyOf": [
        {
          "$ref": "#/$defs/Alt"
        },
        {
          "type": "null"
        }
      ],
      "default": null
    },
    "callback": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Callback"
    },
    "fields": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Fields"
    },
    "key": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Key"
    },
    "oauth_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Oauth Token"
    },
    "prettyPrint": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Prettyprint"
    },
    "quotaUser": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Quotauser"
    },
    "upload_protocol": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Upload Protocol"
    },
    "uploadType": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Uploadtype"
    }
  },
  "required": [
    "path"
  ],
  "title": "tagmanager_accounts_containers_versions_undeleteArguments",
  "type": "object"
}
```

</details>
