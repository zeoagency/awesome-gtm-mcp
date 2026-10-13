# rgellis/google-tag-manager-mcp

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/rgellis/google-tag-manager-mcp) · [Machine-readable inventory](../data/mcps/rgellis--google-tag-manager-mcp.json)

**112 extracted tools.** Manage server clients and transformations, find entities by name, and summarize container workspaces and live versions.

Snapshot: 2026-10-13 · [21e47900d828](https://github.com/rgellis/google-tag-manager-mcp/tree/21e47900d828c94260d1820a182f1daef05501ca) · Method: reconstructed.

Exposure: Default --groups=all registers all 18 groups plus always-registered check_client_status. --groups=web and explicit comma-separated groups narrow registration. TAG_MANAGER_READ_ONLY=true retains tool exposure but rejects mutations.

## Limits

- Offline extraction registers exact source-extracted function signatures/docstrings using FastMCP 4.1.0; full server imports and GTM operations were not executed. Raw tools/list artifact is from the reconstructed offline registration, not a connected upstream server.
- GTM resource body arguments intentionally use unrestricted Dict[str, Any] schemas; discovery resource fields are not exposed as MCP input constraints. Live API behavior, permissions and availability were not verified.
- Insights pagination silently stops after 50 pages per collection, so claims of complete enumeration have that cap; summarize_container treats any live-version retrieval exception as no published version, including permission/network failures.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`list_accounts`](#tool-list_accounts-1090ba6a) | GTM | Calls Google Tag Manager v2 accounts.list using validated ID-derived paths. |
| [`get_account`](#tool-get_account-896a62e4) | GTM | Calls Google Tag Manager v2 accounts.get using validated ID-derived paths. |
| [`update_account`](#tool-update_account-ad80eae4) | GTM | Calls Google Tag Manager v2 accounts.update using validated ID-derived paths and rejects writes in read-only mode. |
| [`list_built_in_variables`](#tool-list_built_in_variables-598c2ffb) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.built\_in\_variables.list using validated ID-derived paths. |
| [`create_built_in_variable`](#tool-create_built_in_variable-fffac8fa) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.built\_in\_variables.create using validated ID-derived paths and rejects writes in read-only mode. |
| [`delete_built_in_variable`](#tool-delete_built_in_variable-ba12f97e) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.built\_in\_variables.delete using validated ID-derived paths and rejects writes in read-only mode. |
| [`revert_built_in_variable`](#tool-revert_built_in_variable-7ea934b3) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.built\_in\_variables.revert using validated ID-derived paths and rejects writes in read-only mode. |
| [`list_clients`](#tool-list_clients-916df1aa) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.clients.list using validated ID-derived paths. |
| [`get_client`](#tool-get_client-2d47e9a6) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.clients.get using validated ID-derived paths. |
| [`create_client`](#tool-create_client-6142e83d) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.clients.create using validated ID-derived paths and rejects writes in read-only mode. |
| [`update_client`](#tool-update_client-b54d9c9e) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.clients.update using validated ID-derived paths and rejects writes in read-only mode. |
| [`delete_client`](#tool-delete_client-2acb4417) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.clients.delete using validated ID-derived paths and rejects writes in read-only mode. |
| [`revert_client`](#tool-revert_client-eccbe3be) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.clients.revert using validated ID-derived paths and rejects writes in read-only mode. |
| [`list_containers`](#tool-list_containers-a53dbc4d) | GTM | Calls Google Tag Manager v2 accounts.containers.list using validated ID-derived paths. |
| [`get_container`](#tool-get_container-9a0808eb) | GTM | Calls Google Tag Manager v2 accounts.containers.get using validated ID-derived paths. |
| [`lookup_container`](#tool-lookup_container-bdbb7fe1) | GTM | Calls Google Tag Manager v2 accounts.containers.lookup using validated ID-derived paths. |
| [`get_container_snippet`](#tool-get_container_snippet-abfe46b2) | GTM | Calls Google Tag Manager v2 accounts.containers.snippet using validated ID-derived paths. |
| [`create_container`](#tool-create_container-352b1505) | GTM | Calls Google Tag Manager v2 accounts.containers.create using validated ID-derived paths and rejects writes in read-only mode. |
| [`update_container`](#tool-update_container-cacd7302) | GTM | Calls Google Tag Manager v2 accounts.containers.update using validated ID-derived paths and rejects writes in read-only mode. |
| [`delete_container`](#tool-delete_container-a8bba20f) | GTM | Calls Google Tag Manager v2 accounts.containers.delete using validated ID-derived paths and rejects writes in read-only mode. |
| [`combine_containers`](#tool-combine_containers-c87d4a1a) | GTM | Calls Google Tag Manager v2 accounts.containers.combine using validated ID-derived paths and rejects writes in read-only mode. |
| [`move_tag_id`](#tool-move_tag_id-fe781702) | GTM | Calls Google Tag Manager v2 accounts.containers.move\_tag\_id using validated ID-derived paths and rejects writes in read-only mode. |
| [`list_destinations`](#tool-list_destinations-4f3091aa) | GTM | Calls Google Tag Manager v2 accounts.containers.destinations.list using validated ID-derived paths. |
| [`get_destination`](#tool-get_destination-524a1285) | GTM | Calls Google Tag Manager v2 accounts.containers.destinations.get using validated ID-derived paths. |
| [`link_destination`](#tool-link_destination-8b94917d) | GTM | Calls Google Tag Manager v2 accounts.containers.destinations.link using validated ID-derived paths and rejects writes in read-only mode. |
| [`list_environments`](#tool-list_environments-eb645b0f) | GTM | Calls Google Tag Manager v2 accounts.containers.environments.list using validated ID-derived paths. |
| [`get_environment`](#tool-get_environment-6589f882) | GTM | Calls Google Tag Manager v2 accounts.containers.environments.get using validated ID-derived paths. |
| [`create_environment`](#tool-create_environment-eacd4263) | GTM | Calls Google Tag Manager v2 accounts.containers.environments.create using validated ID-derived paths and rejects writes in read-only mode. |
| [`update_environment`](#tool-update_environment-b926ea2d) | GTM | Calls Google Tag Manager v2 accounts.containers.environments.update using validated ID-derived paths and rejects writes in read-only mode. |
| [`delete_environment`](#tool-delete_environment-0b7bb498) | GTM | Calls Google Tag Manager v2 accounts.containers.environments.delete using validated ID-derived paths and rejects writes in read-only mode. |
| [`reauthorize_environment`](#tool-reauthorize_environment-191d3333) | GTM | Calls Google Tag Manager v2 accounts.containers.environments.reauthorize using validated ID-derived paths and rejects writes in read-only mode. |
| [`list_folders`](#tool-list_folders-786055b5) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.folders.list using validated ID-derived paths. |
| [`get_folder`](#tool-get_folder-e6226f1e) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.folders.get using validated ID-derived paths. |
| [`get_folder_entities`](#tool-get_folder_entities-af7babd3) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.folders.entities using validated ID-derived paths. |
| [`create_folder`](#tool-create_folder-5b53fba3) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.folders.create using validated ID-derived paths and rejects writes in read-only mode. |
| [`update_folder`](#tool-update_folder-eb714a16) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.folders.update using validated ID-derived paths and rejects writes in read-only mode. |
| [`delete_folder`](#tool-delete_folder-934d582b) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.folders.delete using validated ID-derived paths and rejects writes in read-only mode. |
| [`revert_folder`](#tool-revert_folder-a2d986fe) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.folders.revert using validated ID-derived paths and rejects writes in read-only mode. |
| [`move_entities_to_folder`](#tool-move_entities_to_folder-abdb631f) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.folders.move\_entities\_to\_folder using validated ID-derived paths and rejects writes in read-only mode. |
| [`list_gtag_configs`](#tool-list_gtag_configs-eb17a2c8) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.gtag\_config.list using validated ID-derived paths. |
| [`get_gtag_config`](#tool-get_gtag_config-9b30a656) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.gtag\_config.get using validated ID-derived paths. |
| [`create_gtag_config`](#tool-create_gtag_config-c4eb609b) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.gtag\_config.create using validated ID-derived paths and rejects writes in read-only mode. |
| [`update_gtag_config`](#tool-update_gtag_config-6ff2d061) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.gtag\_config.update using validated ID-derived paths and rejects writes in read-only mode. |
| [`delete_gtag_config`](#tool-delete_gtag_config-1944cd94) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.gtag\_config.delete using validated ID-derived paths and rejects writes in read-only mode. |
| [`list_workspace_entities`](#tool-list_workspace_entities-0f7873c3) | GTM | Composes tags.list, triggers.list, variables.list and folders.list, each paged to exhaustion. Handler evidence: <https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/insights_service.py#L121-L146> Pagination is capped at 50 pages per collection. |
| [`find_entities_by_name`](#tool-find_entities_by_name-683fd899) | GTM | Composes the same four list methods, filtered by name -- the API has no search. Handler evidence: <https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/insights_service.py#L148-L191> Pagination is capped at 50 pages per collection. |
| [`summarize_container`](#tool-summarize_container-ec30429b) | GTM | Composes containers.get, workspaces.list and versions.live, with counts. Handler evidence: <https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/insights_service.py#L193-L256> Pagination is capped at 50 pages per collection. Any live-version exception is represented as live=null. |
| [`list_all_containers`](#tool-list_all_containers-4db8d0dc) | GTM | Composes accounts.list, then containers.list once per account. Handler evidence: <https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/insights_service.py#L258-L313> Pagination is capped at 50 pages per collection. |
| [`publish_workspace`](#tool-publish_workspace-f1c4ff87) | GTM | Composes workspaces.create\_version, then versions.publish when asked and when the version compiled. |
| [`list_tags`](#tool-list_tags-86fc0f9c) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.tags.list using validated ID-derived paths. |
| [`get_tag`](#tool-get_tag-749bab4b) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.tags.get using validated ID-derived paths. |
| [`create_tag`](#tool-create_tag-e71dcc44) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.tags.create using validated ID-derived paths and rejects writes in read-only mode. |
| [`update_tag`](#tool-update_tag-ff9e7962) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.tags.update using validated ID-derived paths and rejects writes in read-only mode. |
| [`delete_tag`](#tool-delete_tag-1345d160) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.tags.delete using validated ID-derived paths and rejects writes in read-only mode. |
| [`revert_tag`](#tool-revert_tag-4c84be02) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.tags.revert using validated ID-derived paths and rejects writes in read-only mode. |
| [`list_templates`](#tool-list_templates-f9ffad71) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.templates.list using validated ID-derived paths. |
| [`get_template`](#tool-get_template-99eb59af) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.templates.get using validated ID-derived paths. |
| [`create_template`](#tool-create_template-ccfe420c) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.templates.create using validated ID-derived paths and rejects writes in read-only mode. |
| [`update_template`](#tool-update_template-dbe66b4e) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.templates.update using validated ID-derived paths and rejects writes in read-only mode. |
| [`delete_template`](#tool-delete_template-02c8a6cb) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.templates.delete using validated ID-derived paths and rejects writes in read-only mode. |
| [`revert_template`](#tool-revert_template-1ffca46d) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.templates.revert using validated ID-derived paths and rejects writes in read-only mode. |
| [`import_template_from_gallery`](#tool-import_template_from_gallery-b0db8bb0) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.templates.import\_from\_gallery using validated ID-derived paths and rejects writes in read-only mode. |
| [`list_transformations`](#tool-list_transformations-f386365b) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.transformations.list using validated ID-derived paths. |
| [`get_transformation`](#tool-get_transformation-13553d72) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.transformations.get using validated ID-derived paths. |
| [`create_transformation`](#tool-create_transformation-9ff603f0) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.transformations.create using validated ID-derived paths and rejects writes in read-only mode. |
| [`update_transformation`](#tool-update_transformation-67f8c3a8) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.transformations.update using validated ID-derived paths and rejects writes in read-only mode. |
| [`delete_transformation`](#tool-delete_transformation-e23da7c3) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.transformations.delete using validated ID-derived paths and rejects writes in read-only mode. |
| [`revert_transformation`](#tool-revert_transformation-484d74bb) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.transformations.revert using validated ID-derived paths and rejects writes in read-only mode. |
| [`list_triggers`](#tool-list_triggers-4ca44d74) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.triggers.list using validated ID-derived paths. |
| [`get_trigger`](#tool-get_trigger-e2f13ee6) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.triggers.get using validated ID-derived paths. |
| [`create_trigger`](#tool-create_trigger-71660c93) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.triggers.create using validated ID-derived paths and rejects writes in read-only mode. |
| [`update_trigger`](#tool-update_trigger-60ddeb77) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.triggers.update using validated ID-derived paths and rejects writes in read-only mode. |
| [`delete_trigger`](#tool-delete_trigger-ec67de91) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.triggers.delete using validated ID-derived paths and rejects writes in read-only mode. |
| [`revert_trigger`](#tool-revert_trigger-8e193d59) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.triggers.revert using validated ID-derived paths and rejects writes in read-only mode. |
| [`list_user_permissions`](#tool-list_user_permissions-9cabc1e3) | GTM | Calls Google Tag Manager v2 accounts.user\_permissions.list using validated ID-derived paths. |
| [`get_user_permission`](#tool-get_user_permission-66c42a4c) | GTM | Calls Google Tag Manager v2 accounts.user\_permissions.get using validated ID-derived paths. |
| [`create_user_permission`](#tool-create_user_permission-ed2ceb20) | GTM | Calls Google Tag Manager v2 accounts.user\_permissions.create using validated ID-derived paths and rejects writes in read-only mode. |
| [`update_user_permission`](#tool-update_user_permission-0063613f) | GTM | Calls Google Tag Manager v2 accounts.user\_permissions.update using validated ID-derived paths and rejects writes in read-only mode. |
| [`delete_user_permission`](#tool-delete_user_permission-15a81315) | GTM | Calls Google Tag Manager v2 accounts.user\_permissions.delete using validated ID-derived paths and rejects writes in read-only mode. |
| [`list_variables`](#tool-list_variables-1adaa2a1) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.variables.list using validated ID-derived paths. |
| [`get_variable`](#tool-get_variable-ba0cd778) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.variables.get using validated ID-derived paths. |
| [`create_variable`](#tool-create_variable-2f5e4ddb) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.variables.create using validated ID-derived paths and rejects writes in read-only mode. |
| [`update_variable`](#tool-update_variable-63c48ad7) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.variables.update using validated ID-derived paths and rejects writes in read-only mode. |
| [`delete_variable`](#tool-delete_variable-3ead6fdb) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.variables.delete using validated ID-derived paths and rejects writes in read-only mode. |
| [`revert_variable`](#tool-revert_variable-7fb63cb4) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.variables.revert using validated ID-derived paths and rejects writes in read-only mode. |
| [`list_version_headers`](#tool-list_version_headers-bec4b502) | GTM | Calls Google Tag Manager v2 accounts.containers.version\_headers.list using validated ID-derived paths. |
| [`get_latest_version_header`](#tool-get_latest_version_header-e7218219) | GTM | Calls Google Tag Manager v2 accounts.containers.version\_headers.latest using validated ID-derived paths. |
| [`get_version`](#tool-get_version-e67e6685) | GTM | Calls Google Tag Manager v2 accounts.containers.versions.get using validated ID-derived paths. |
| [`get_live_version`](#tool-get_live_version-ffef26dc) | GTM | Calls Google Tag Manager v2 accounts.containers.versions.live using validated ID-derived paths. |
| [`update_version`](#tool-update_version-23a8648e) | GTM | Calls Google Tag Manager v2 accounts.containers.versions.update using validated ID-derived paths and rejects writes in read-only mode. |
| [`delete_version`](#tool-delete_version-f7b6682e) | GTM | Calls Google Tag Manager v2 accounts.containers.versions.delete using validated ID-derived paths and rejects writes in read-only mode. |
| [`undelete_version`](#tool-undelete_version-c548ac58) | GTM | Calls Google Tag Manager v2 accounts.containers.versions.undelete using validated ID-derived paths and rejects writes in read-only mode. |
| [`publish_version`](#tool-publish_version-0628e4c5) | GTM | Calls Google Tag Manager v2 accounts.containers.versions.publish using validated ID-derived paths and rejects writes in read-only mode. |
| [`set_latest_version`](#tool-set_latest_version-fb529238) | GTM | Calls Google Tag Manager v2 accounts.containers.versions.set\_latest using validated ID-derived paths and rejects writes in read-only mode. |
| [`list_workspaces`](#tool-list_workspaces-af844119) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.list using validated ID-derived paths. |
| [`get_workspace`](#tool-get_workspace-80ffee6a) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.get using validated ID-derived paths. |
| [`get_workspace_status`](#tool-get_workspace_status-23f21bb9) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.getStatus using validated ID-derived paths. |
| [`create_workspace`](#tool-create_workspace-a1af8425) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.create using validated ID-derived paths and rejects writes in read-only mode. |
| [`update_workspace`](#tool-update_workspace-1a76edb7) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.update using validated ID-derived paths and rejects writes in read-only mode. |
| [`delete_workspace`](#tool-delete_workspace-50bbbf2e) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.delete using validated ID-derived paths and rejects writes in read-only mode. |
| [`sync_workspace`](#tool-sync_workspace-4b02a6d9) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.sync using validated ID-derived paths and rejects writes in read-only mode. |
| [`resolve_workspace_conflict`](#tool-resolve_workspace_conflict-33394013) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.resolve\_conflict using validated ID-derived paths and rejects writes in read-only mode. |
| [`quick_preview_workspace`](#tool-quick_preview_workspace-2e1cb327) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.quick\_preview using validated ID-derived paths and rejects writes in read-only mode. |
| [`create_version`](#tool-create_version-fc39e936) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.create\_version using validated ID-derived paths and rejects writes in read-only mode. |
| [`bulk_update_workspace`](#tool-bulk_update_workspace-1affab96) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.bulk\_update using validated ID-derived paths and rejects writes in read-only mode. |
| [`list_zones`](#tool-list_zones-ab161553) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.zones.list using validated ID-derived paths. |
| [`get_zone`](#tool-get_zone-81cb3a97) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.zones.get using validated ID-derived paths. |
| [`create_zone`](#tool-create_zone-eb54dad2) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.zones.create using validated ID-derived paths and rejects writes in read-only mode. |
| [`update_zone`](#tool-update_zone-6369eede) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.zones.update using validated ID-derived paths and rejects writes in read-only mode. |
| [`delete_zone`](#tool-delete_zone-056c0d00) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.zones.delete using validated ID-derived paths and rejects writes in read-only mode. |
| [`revert_zone`](#tool-revert_zone-9149fc2b) | GTM | Calls Google Tag Manager v2 accounts.containers.workspaces.zones.revert using validated ID-derived paths and rejects writes in read-only mode. |
| [`check_client_status`](#tool-check_client_status-490a9aab) | Supporting | Reports initialization, credential resolution, read-only state and scopes; accessing client.service may resolve credentials and build the Tag Manager v2 client. |

<a id="tool-list_accounts-1090ba6a"></a>

## list_accounts

Handler: Calls Google Tag Manager v2 accounts.list using validated ID-derived paths.

```text
List the Google Tag Manager accounts this user can access.

Start here: every other tool needs an account ID, and the numbers shown
in the Tag Manager web UI's URL are not always the API's account IDs.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/accounts_service.py#L115-L137) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/accounts_service.py#L26-L53) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'accounts'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "page_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Continuation token from a previous response."
    },
    "include_google_tags": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Also return accounts that exist only as Google\ntag destinations."
    }
  },
  "type": "object"
}
```

</details>

<a id="tool-get_account-896a62e4"></a>

## get_account

Handler: Calls Google Tag Manager v2 accounts.get using validated ID-derived paths.

```text
Get one Tag Manager account.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/accounts_service.py#L139-L148) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/accounts_service.py#L55-L68) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'accounts'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    }
  },
  "required": [
    "account_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-update_account-ad80eae4"></a>

## update_account

Handler: Calls Google Tag Manager v2 accounts.update using validated ID-derived paths and rejects writes in read-only mode.

```text
Update a Tag Manager account's settings.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/accounts_service.py#L150-L171) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/accounts_service.py#L70-L104) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'accounts'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "account": {
      "additionalProperties": true,
      "type": "object",
      "description": "Account resource with the fields to change, e.g.\n{\"name\": \"Acme Inc\", \"shareData\": false}."
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
      "description": "Fingerprint from a previous read. When given, the\nupdate fails if the account changed in the meantime."
    }
  },
  "required": [
    "account_id",
    "account"
  ],
  "type": "object"
}
```

</details>

<a id="tool-list_built_in_variables-598c2ffb"></a>

## list_built_in_variables

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.built\_in\_variables.list using validated ID-derived paths.

```text
List the built-in variables enabled in a workspace.

Built-in variables (Page URL, Click Text, and so on) are supplied by
Tag Manager and only need enabling. They are separate from the
user-defined variables in list_variables.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/built_in_variables_service.py#L186-L214) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/built_in_variables_service.py#L46-L77) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'built-in-variables'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "page_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Continuation token from a previous response."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-create_built_in_variable-fffac8fa"></a>

## create_built_in_variable

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.built\_in\_variables.create using validated ID-derived paths and rejects writes in read-only mode.

```text
Enable built-in variables in a workspace.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/built_in_variables_service.py#L216-L242) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/built_in_variables_service.py#L79-L109) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'built-in-variables'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "types": {
      "items": {
        "type": "string"
      },
      "type": "array",
      "description": "Type names to enable, e.g. [\"pageUrl\", \"pagePath\",\n\"referrer\", \"clickText\", \"formId\", \"event\"]. Several may be\nenabled in one call. Names are camelCase codes, not the\ndisplay names shown in the Tag Manager UI."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "types"
  ],
  "type": "object"
}
```

</details>

<a id="tool-delete_built_in_variable-ba12f97e"></a>

## delete_built_in_variable

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.built\_in\_variables.delete using validated ID-derived paths and rejects writes in read-only mode.

```text
Disable built-in variables in a workspace.

Anything referencing a disabled variable stops resolving, so check for
uses first.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/built_in_variables_service.py#L244-L267) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/built_in_variables_service.py#L111-L143) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'built-in-variables'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "types": {
      "items": {
        "type": "string"
      },
      "type": "array",
      "description": "Type names to disable, e.g. [\"clickClasses\"]."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "types"
  ],
  "type": "object"
}
```

</details>

<a id="tool-revert_built_in_variable-7ea934b3"></a>

## revert_built_in_variable

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.built\_in\_variables.revert using validated ID-derived paths and rejects writes in read-only mode.

```text
Undo a workspace's change to one built-in variable.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/built_in_variables_service.py#L269-L293) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/built_in_variables_service.py#L145-L177) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'built-in-variables'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "variable_type": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "The one type to revert, e.g. \"clickText\". This\nmethod takes a single type, not a list."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-list_clients-916df1aa"></a>

## list_clients

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.clients.list using validated ID-derived paths.

```text
List the clients in a workspace.

A web container returns an empty list; clients exist only in server
containers.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/clients_service.py#L245-L271) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/clients_service.py#L51-L76) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'clients'; excluded from --groups=web.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "page_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Continuation token from a previous response."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-get_client-2d47e9a6"></a>

## get_client

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.clients.get using validated ID-derived paths.

```text
Get one client from a workspace.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/clients_service.py#L273-L297) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/clients_service.py#L78-L101) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'clients'; excluded from --groups=web.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "client_id": {
      "type": "string",
      "description": "Numeric client ID."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "client_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-create_client-6142e83d"></a>

## create_client

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.clients.create using validated ID-derived paths and rejects writes in read-only mode.

```text
Create a client in a workspace.

Only server containers accept clients. Creating one in a web
container fails.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/clients_service.py#L299-L330) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/clients_service.py#L103-L132) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'clients'; excluded from --groups=web.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "client": {
      "additionalProperties": true,
      "type": "object",
      "description": "Client resource. Requires name and type, e.g.\n{\"name\": \"GA4 client\", \"type\": \"gaaw_client\",\n \"priority\": 0,\n \"parameter\": [{\"type\": \"boolean\",\n                \"key\": \"activateGa4Support\",\n                \"value\": \"true\"}]}."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "client"
  ],
  "type": "object"
}
```

</details>

<a id="tool-update_client-b54d9c9e"></a>

## update_client

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.clients.update using validated ID-derived paths and rejects writes in read-only mode.

```text
Update a client in a workspace.

The client you send replaces the stored one, so read it with
get_client first and send the whole thing back with your edits
applied. Omitted fields are cleared, not preserved.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/clients_service.py#L332-L370) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/clients_service.py#L134-L170) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'clients'; excluded from --groups=web.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "client_id": {
      "type": "string",
      "description": "Numeric client ID."
    },
    "client": {
      "additionalProperties": true,
      "type": "object",
      "description": "Complete Client resource."
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
      "description": "Fingerprint from a previous read. When given, the\nupdate fails if the client changed in the meantime."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "client_id",
    "client"
  ],
  "type": "object"
}
```

</details>

<a id="tool-delete_client-2acb4417"></a>

## delete_client

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.clients.delete using validated ID-derived paths and rejects writes in read-only mode.

```text
Delete a client from a workspace.

This affects the workspace only. The client stays in production until
a version without it is published.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/clients_service.py#L372-L395) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/clients_service.py#L172-L202) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'clients'; excluded from --groups=web.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "client_id": {
      "type": "string",
      "description": "Numeric client ID."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "client_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-revert_client-eccbe3be"></a>

## revert_client

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.clients.revert using validated ID-derived paths and rejects writes in read-only mode.

```text
Undo a workspace's changes to one client.

Restores the client to the state of the container version the
workspace was branched from, leaving the workspace's other changes
alone.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/clients_service.py#L397-L432) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/clients_service.py#L204-L236) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'clients'; excluded from --groups=web.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "client_id": {
      "type": "string",
      "description": "Numeric client ID."
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
      "description": "Fingerprint from a previous read."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "client_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-list_containers-a53dbc4d"></a>

## list_containers

Handler: Calls Google Tag Manager v2 accounts.containers.list using validated ID-derived paths.

```text
List the containers in a Tag Manager account.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/containers_service.py#L322-L337) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/containers_service.py#L31-L52) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'containers'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "page_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Continuation token from a previous response."
    }
  },
  "required": [
    "account_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-get_container-9a0808eb"></a>

## get_container

Handler: Calls Google Tag Manager v2 accounts.containers.get using validated ID-derived paths.

```text
Get one Tag Manager container.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/containers_service.py#L339-L354) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/containers_service.py#L54-L70) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'containers'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    }
  },
  "required": [
    "account_id",
    "container_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-lookup_container-bdbb7fe1"></a>

## lookup_container

Handler: Calls Google Tag Manager v2 accounts.containers.lookup using validated ID-derived paths.

```text
Find a container from its public GTM-XXXXXXX tag ID.

Use this when you have a tag ID from a website's source but no account
ID. Pass exactly one of the two arguments.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/containers_service.py#L356-L376) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/containers_service.py#L72-L105) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'containers'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "tag_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Public tag ID, e.g. GTM-XXXXXXX."
    },
    "destination_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Linked destination ID, e.g. AW-123456789 or G-ABC123."
    }
  },
  "type": "object"
}
```

</details>

<a id="tool-get_container_snippet-abfe46b2"></a>

## get_container_snippet

Handler: Calls Google Tag Manager v2 accounts.containers.snippet using validated ID-derived paths.

```text
Get the HTML install snippet for a container.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/containers_service.py#L378-L393) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/containers_service.py#L107-L123) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'containers'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    }
  },
  "required": [
    "account_id",
    "container_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-create_container-352b1505"></a>

## create_container

Handler: Calls Google Tag Manager v2 accounts.containers.create using validated ID-derived paths and rejects writes in read-only mode.

```text
Create a container in a Tag Manager account.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/containers_service.py#L395-L411) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/containers_service.py#L125-L150) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'containers'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container": {
      "additionalProperties": true,
      "type": "object",
      "description": "Container resource. Requires name and usageContext, e.g.\n{\"name\": \"example.com\", \"usageContext\": [\"web\"]}. usageContext\nis one of web, android, ios, amp or server."
    }
  },
  "required": [
    "account_id",
    "container"
  ],
  "type": "object"
}
```

</details>

<a id="tool-update_container-cacd7302"></a>

## update_container

Handler: Calls Google Tag Manager v2 accounts.containers.update using validated ID-derived paths and rejects writes in read-only mode.

```text
Update a container's settings.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/containers_service.py#L413-L438) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/containers_service.py#L152-L188) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'containers'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "container": {
      "additionalProperties": true,
      "type": "object",
      "description": "Container resource with the fields to change, e.g.\n{\"name\": \"example.com (web)\", \"notes\": \"Owned by marketing\"}."
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
      "description": "Fingerprint from a previous read. When given, the\nupdate fails if the container changed in the meantime."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "container"
  ],
  "type": "object"
}
```

</details>

<a id="tool-delete_container-a8bba20f"></a>

## delete_container

Handler: Calls Google Tag Manager v2 accounts.containers.delete using validated ID-derived paths and rejects writes in read-only mode.

```text
Delete a container, and with it every workspace, tag and version.

This cannot be undone through the API, and any site still loading the
container's snippet stops receiving tags.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/containers_service.py#L440-L455) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/containers_service.py#L190-L212) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'containers'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    }
  },
  "required": [
    "account_id",
    "container_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-combine_containers-c87d4a1a"></a>

## combine_containers

Handler: Calls Google Tag Manager v2 accounts.containers.combine using validated ID-derived paths and rejects writes in read-only mode.

```text
Merge one container into another.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/containers_service.py#L457-L489) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/containers_service.py#L214-L258) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'containers'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric ID of the container that survives the merge."
    },
    "other_container_id": {
      "type": "string",
      "description": "Numeric ID of the container merged into it."
    },
    "setting_source": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Whose settings survive -- \"current\", \"other\" or\n\"settingSourceUnspecified\"."
    },
    "allow_user_permission_feature_update": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Must be true if the merge\nwould turn the user-permissions feature on."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "other_container_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-move_tag_id-fe781702"></a>

## move_tag_id

Handler: Calls Google Tag Manager v2 accounts.containers.move\_tag\_id using validated ID-derived paths and rejects writes in read-only mode.

```text
Move a tag ID out of a container into a newly created one.

The inverse of combine_containers: it splits a tag ID off a container
that holds several.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/containers_service.py#L491-L535) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/containers_service.py#L260-L313) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'containers'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric ID of the container holding the tag ID."
    },
    "tag_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "The tag ID to move out, e.g. GTM-XXXXXXX."
    },
    "tag_name": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Name for the newly created container."
    },
    "copy_settings": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Copy tag settings to the new container."
    },
    "copy_users": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Copy users to the new container."
    },
    "copy_terms_of_service": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Must be true to accept the copied terms of\nservice; the call fails otherwise."
    },
    "allow_user_permission_feature_update": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Must be true if the move would\nturn the user-permissions feature on."
    }
  },
  "required": [
    "account_id",
    "container_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-list_destinations-4f3091aa"></a>

## list_destinations

Handler: Calls Google Tag Manager v2 accounts.containers.destinations.list using validated ID-derived paths.

```text
List the Google tag destinations linked to a container.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/destinations_service.py#L132-L147) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/destinations_service.py#L30-L52) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'destinations'; excluded from --groups=web.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    }
  },
  "required": [
    "account_id",
    "container_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-get_destination-524a1285"></a>

## get_destination

Handler: Calls Google Tag Manager v2 accounts.containers.destinations.get using validated ID-derived paths.

```text
Get one destination linked to a container.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/destinations_service.py#L149-L167) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/destinations_service.py#L54-L77) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'destinations'; excluded from --groups=web.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "destination_id": {
      "type": "string",
      "description": "Destination ID, e.g. AW-123456789 or G-ABC123."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "destination_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-link_destination-8b94917d"></a>

## link_destination

Handler: Calls Google Tag Manager v2 accounts.containers.destinations.link using validated ID-derived paths and rejects writes in read-only mode.

```text
Link a Google tag destination to a container.

The destination is taken from whichever container currently holds it,
so this moves rather than copies.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/destinations_service.py#L169-L200) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/destinations_service.py#L79-L123) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'destinations'; excluded from --groups=web.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID to link the destination to."
    },
    "destination_id": {
      "type": "string",
      "description": "Destination ID, e.g. AW-123456789 or G-ABC123."
    },
    "allow_user_permission_feature_update": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Must be true if the link would\nturn the user-permissions feature on."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "destination_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-list_environments-eb645b0f"></a>

## list_environments

Handler: Calls Google Tag Manager v2 accounts.containers.environments.list using validated ID-derived paths.

```text
List a container's environments.

Every container has a Live and a Latest environment; the rest are
user-created preview targets.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/environments_service.py#L233-L256) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/environments_service.py#L30-L57) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'environments'; excluded from --groups=web.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "page_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Continuation token from a previous response."
    }
  },
  "required": [
    "account_id",
    "container_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-get_environment-6589f882"></a>

## get_environment

Handler: Calls Google Tag Manager v2 accounts.containers.environments.get using validated ID-derived paths.

```text
Get one container environment.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/environments_service.py#L258-L277) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/environments_service.py#L59-L82) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'environments'; excluded from --groups=web.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "environment_id": {
      "type": "string",
      "description": "Numeric environment ID."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "environment_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-create_environment-eacd4263"></a>

## create_environment

Handler: Calls Google Tag Manager v2 accounts.containers.environments.create using validated ID-derived paths and rejects writes in read-only mode.

```text
Create an environment in a container.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/environments_service.py#L279-L300) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/environments_service.py#L84-L115) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'environments'; excluded from --groups=web.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "environment": {
      "additionalProperties": true,
      "type": "object",
      "description": "Environment resource. Requires name, e.g.\n{\"name\": \"Staging\", \"description\": \"Pre-release checks\",\n \"url\": \"https://staging.example.com\",\n \"enableDebug\": true}."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "environment"
  ],
  "type": "object"
}
```

</details>

<a id="tool-update_environment-b926ea2d"></a>

## update_environment

Handler: Calls Google Tag Manager v2 accounts.containers.environments.update using validated ID-derived paths and rejects writes in read-only mode.

```text
Update a container environment.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/environments_service.py#L302-L333) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/environments_service.py#L117-L156) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'environments'; excluded from --groups=web.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "environment_id": {
      "type": "string",
      "description": "Numeric environment ID."
    },
    "environment": {
      "additionalProperties": true,
      "type": "object",
      "description": "Environment resource with the fields to change."
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
      "description": "Fingerprint from a previous read. When given, the\nupdate fails if the environment changed in the meantime."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "environment_id",
    "environment"
  ],
  "type": "object"
}
```

</details>

<a id="tool-delete_environment-0b7bb498"></a>

## delete_environment

Handler: Calls Google Tag Manager v2 accounts.containers.environments.delete using validated ID-derived paths and rejects writes in read-only mode.

```text
Delete a container environment.

The built-in Live and Latest environments cannot be deleted.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/environments_service.py#L335-L352) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/environments_service.py#L158-L187) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'environments'; excluded from --groups=web.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "environment_id": {
      "type": "string",
      "description": "Numeric environment ID."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "environment_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-reauthorize_environment-191d3333"></a>

## reauthorize_environment

Handler: Calls Google Tag Manager v2 accounts.containers.environments.reauthorize using validated ID-derived paths and rejects writes in read-only mode.

```text
Regenerate an environment's authorization code.

Use this when a preview link has leaked: the old code stops working
immediately, so anything embedding it must be updated.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/environments_service.py#L354-L381) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/environments_service.py#L189-L224) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'environments'; excluded from --groups=web.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "environment_id": {
      "type": "string",
      "description": "Numeric environment ID."
    },
    "environment": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Optional Environment body. The API requires a body but\nuses none of it, so leaving this unset sends an empty object."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "environment_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-list_folders-786055b5"></a>

## list_folders

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.folders.list using validated ID-derived paths.

```text
List the folders in a workspace.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/folders_service.py#L322-L345) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/folders_service.py#L43-L68) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'folders'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "page_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Continuation token from a previous response."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-get_folder-e6226f1e"></a>

## get_folder

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.folders.get using validated ID-derived paths.

```text
Get one folder from a workspace.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/folders_service.py#L347-L370) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/folders_service.py#L70-L93) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'folders'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "folder_id": {
      "type": "string",
      "description": "Numeric folder ID."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "folder_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-get_folder_entities-af7babd3"></a>

## get_folder_entities

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.folders.entities using validated ID-derived paths.

```text
List the tags, triggers and variables inside a folder.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/folders_service.py#L372-L397) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/folders_service.py#L95-L124) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'folders'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "folder_id": {
      "type": "string",
      "description": "Numeric folder ID."
    },
    "page_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Continuation token from a previous response."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "folder_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-create_folder-5b53fba3"></a>

## create_folder

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.folders.create using validated ID-derived paths and rejects writes in read-only mode.

```text
Create a folder in a workspace.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/folders_service.py#L399-L423) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/folders_service.py#L126-L155) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'folders'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "folder": {
      "additionalProperties": true,
      "type": "object",
      "description": "Folder resource. Requires name, e.g.\n{\"name\": \"GA4\", \"notes\": \"Everything GA4-related\"}."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "folder"
  ],
  "type": "object"
}
```

</details>

<a id="tool-update_folder-eb714a16"></a>

## update_folder

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.folders.update using validated ID-derived paths and rejects writes in read-only mode.

```text
Update a folder's name or notes.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/folders_service.py#L425-L459) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/folders_service.py#L157-L193) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'folders'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "folder_id": {
      "type": "string",
      "description": "Numeric folder ID."
    },
    "folder": {
      "additionalProperties": true,
      "type": "object",
      "description": "Folder resource with the fields to set."
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
      "description": "Fingerprint from a previous read. When given, the\nupdate fails if the folder changed in the meantime."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "folder_id",
    "folder"
  ],
  "type": "object"
}
```

</details>

<a id="tool-delete_folder-934d582b"></a>

## delete_folder

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.folders.delete using validated ID-derived paths and rejects writes in read-only mode.

```text
Delete a folder from a workspace.

The entities inside it are not deleted; they are left unfiled.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/folders_service.py#L461-L483) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/folders_service.py#L195-L225) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'folders'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "folder_id": {
      "type": "string",
      "description": "Numeric folder ID."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "folder_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-revert_folder-a2d986fe"></a>

## revert_folder

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.folders.revert using validated ID-derived paths and rejects writes in read-only mode.

```text
Undo a workspace's changes to one folder.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/folders_service.py#L485-L511) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/folders_service.py#L227-L259) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'folders'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "folder_id": {
      "type": "string",
      "description": "Numeric folder ID."
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
      "description": "Fingerprint from a previous read."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "folder_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-move_entities_to_folder-abdb631f"></a>

## move_entities_to_folder

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.folders.move\_entities\_to\_folder using validated ID-derived paths and rejects writes in read-only mode.

```text
Move tags, triggers and variables into a folder.

Pass folder_id "0" to take the entities out of their current folder
instead of putting them into one.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/folders_service.py#L513-L553) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/folders_service.py#L261-L313) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'folders'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "folder_id": {
      "type": "string",
      "description": "Numeric folder ID, or \"0\" to unfile the entities."
    },
    "folder": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Optional Folder body. The API requires a body but uses none\nof it, so leaving this unset sends an empty object."
    },
    "tag_ids": {
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
      "description": "Numeric tag IDs to move."
    },
    "trigger_ids": {
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
      "description": "Numeric trigger IDs to move."
    },
    "variable_ids": {
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
      "description": "Numeric variable IDs to move."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "folder_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-list_gtag_configs-eb17a2c8"></a>

## list_gtag_configs

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.gtag\_config.list using validated ID-derived paths.

```text
List the Google tag configurations in a workspace.

These are the gtag.js settings a Google tag applies to its
destinations -- the API equivalent of the "Configuration settings"
panel on a Google tag.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/gtag_config_service.py#L207-L234) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/gtag_config_service.py#L43-L70) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'gtag-config'; excluded from --groups=web.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "page_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Continuation token from a previous response."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-get_gtag_config-9b30a656"></a>

## get_gtag_config

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.gtag\_config.get using validated ID-derived paths.

```text
Get one Google tag configuration from a workspace.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/gtag_config_service.py#L236-L259) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/gtag_config_service.py#L72-L97) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'gtag-config'; excluded from --groups=web.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "gtag_config_id": {
      "type": "string",
      "description": "Numeric Google tag config ID."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "gtag_config_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-create_gtag_config-c4eb609b"></a>

## create_gtag_config

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.gtag\_config.create using validated ID-derived paths and rejects writes in read-only mode.

```text
Create a Google tag configuration in a workspace.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/gtag_config_service.py#L261-L287) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/gtag_config_service.py#L99-L128) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'gtag-config'; excluded from --groups=web.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "gtag_config": {
      "additionalProperties": true,
      "type": "object",
      "description": "GtagConfig resource, e.g.\n{\"type\": \"googtag\",\n \"parameter\": [{\"type\": \"template\", \"key\": \"tagId\",\n                \"value\": \"G-ABC123\"}]}."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "gtag_config"
  ],
  "type": "object"
}
```

</details>

<a id="tool-update_gtag_config-6ff2d061"></a>

## update_gtag_config

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.gtag\_config.update using validated ID-derived paths and rejects writes in read-only mode.

```text
Update a Google tag configuration.

The config you send replaces the stored one, so read it with
get_gtag_config first and send the whole thing back with your edits
applied.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/gtag_config_service.py#L289-L327) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/gtag_config_service.py#L130-L166) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'gtag-config'; excluded from --groups=web.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "gtag_config_id": {
      "type": "string",
      "description": "Numeric Google tag config ID."
    },
    "gtag_config": {
      "additionalProperties": true,
      "type": "object",
      "description": "Complete GtagConfig resource."
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
      "description": "Fingerprint from a previous read. When given, the\nupdate fails if the config changed in the meantime."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "gtag_config_id",
    "gtag_config"
  ],
  "type": "object"
}
```

</details>

<a id="tool-delete_gtag_config-1944cd94"></a>

## delete_gtag_config

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.gtag\_config.delete using validated ID-derived paths and rejects writes in read-only mode.

```text
Delete a Google tag configuration from a workspace.

Unlike every other workspace entity, Google tag configs have no revert
method, so this cannot be undone short of discarding the workspace.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/gtag_config_service.py#L329-L352) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/gtag_config_service.py#L168-L198) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'gtag-config'; excluded from --groups=web.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "gtag_config_id": {
      "type": "string",
      "description": "Numeric Google tag config ID."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "gtag_config_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-list_workspace_entities-0f7873c3"></a>

## list_workspace_entities

Handler: Composes tags.list, triggers.list, variables.list and folders.list, each paged to exhaustion. Handler evidence: <https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/insights_service.py#L121-L146> Pagination is capped at 50 pages per collection.

```text
Read everything configured in a workspace in one call.

Fetches tags, triggers, variables and folders, following pagination on
each. Prefer this over four separate list calls when you want to
understand or audit a container's setup.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/insights_service.py#L403-L422) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'insights'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-find_entities_by_name-683fd899"></a>

## find_entities_by_name

Handler: Composes the same four list methods, filtered by name -- the API has no search. Handler evidence: <https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/insights_service.py#L148-L191> Pagination is capped at 50 pages per collection.

```text
Find tags, triggers and variables by name.

The API has no search, so this reads each collection and filters. Use
it to turn a name a human used ("the purchase tag") into the ID the
other tools need.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/insights_service.py#L424-L449) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'insights'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "query": {
      "type": "string",
      "description": "Case-insensitive substring to match against names."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "query"
  ],
  "type": "object"
}
```

</details>

<a id="tool-summarize_container-ec30429b"></a>

## summarize_container

Handler: Composes containers.get, workspaces.list and versions.live, with counts. Handler evidence: <https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/insights_service.py#L193-L256> Pagination is capped at 50 pages per collection. Any live-version exception is represented as live=null.

```text
Summarise a container: settings, workspaces and what is live.

The quickest answer to "what is this container and what is it running".
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/insights_service.py#L451-L466) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'insights'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    }
  },
  "required": [
    "account_id",
    "container_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-list_all_containers-4db8d0dc"></a>

## list_all_containers

Handler: Composes accounts.list, then containers.list once per account. Handler evidence: <https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/insights_service.py#L258-L313> Pagination is capped at 50 pages per collection.

```text
List every container this user can reach, across every account.

Answers "what do I have access to" in one call instead of one
list_containers per account. An account that cannot be read is reported
with its error rather than failing the whole call.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/insights_service.py#L468-L483) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'insights'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "include_google_tags": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Also include Google tag-only accounts."
    }
  },
  "type": "object"
}
```

</details>

<a id="tool-publish_workspace-f1c4ff87"></a>

## publish_workspace

Handler: Composes workspaces.create\_version, then versions.publish when asked and when the version compiled.

```text
Create a container version from a workspace, optionally publishing it.

This is the Tag Manager release flow: a workspace becomes a version,
and a version is published. Creating the version consumes the
workspace either way.

publish defaults to false. Passing true releases to the live site
immediately, for every visitor -- confirm that is intended before
setting it. A version that fails to compile is never published.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/insights_service.py#L485-L518) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/insights_service.py#L315-L394) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'insights'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
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
      "description": "Name for the new version, e.g. \"Release 2026-09-20\"."
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
      "description": "Notes describing what changed."
    },
    "publish": {
      "default": false,
      "type": "boolean",
      "description": "Publish the version to production once created."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-list_tags-86fc0f9c"></a>

## list_tags

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.tags.list using validated ID-derived paths.

```text
List the tags in a workspace.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/tags_service.py#L223-L247) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/tags_service.py#L39-L64) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'tags'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "page_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Continuation token from a previous response."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-get_tag-749bab4b"></a>

## get_tag

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.tags.get using validated ID-derived paths.

```text
Get one tag from a workspace.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/tags_service.py#L249-L271) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/tags_service.py#L66-L87) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'tags'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "tag_id": {
      "type": "string",
      "description": "Numeric tag ID."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "tag_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-create_tag-e71dcc44"></a>

## create_tag

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.tags.create using validated ID-derived paths and rejects writes in read-only mode.

```text
Create a tag in a workspace.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/tags_service.py#L273-L302) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/tags_service.py#L89-L116) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'tags'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "tag": {
      "additionalProperties": true,
      "type": "object",
      "description": "Tag resource. Requires name and type, e.g.\n{\"name\": \"GA4 - purchase\",\n \"type\": \"gaawe\",\n \"parameter\": [{\"type\": \"template\", \"key\": \"eventName\",\n                \"value\": \"purchase\"}],\n \"firingTriggerId\": [\"12\"]}.\nTag types are Tag Manager's internal codes -- \"gaawe\" is a GA4\nevent, \"googtag\" a Google tag, \"html\" a custom HTML tag. Copy\nthe shape from an existing tag via get_tag when unsure."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "tag"
  ],
  "type": "object"
}
```

</details>

<a id="tool-update_tag-ff9e7962"></a>

## update_tag

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.tags.update using validated ID-derived paths and rejects writes in read-only mode.

```text
Update a tag in a workspace.

The tag you send replaces the stored one, so read it with get_tag
first and send the whole thing back with your edits applied. Omitted
fields are cleared, not preserved.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/tags_service.py#L304-L336) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/tags_service.py#L118-L152) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'tags'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "tag_id": {
      "type": "string",
      "description": "Numeric tag ID."
    },
    "tag": {
      "additionalProperties": true,
      "type": "object",
      "description": "Complete Tag resource."
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
      "description": "Fingerprint from a previous read. When given, the\nupdate fails if the tag changed in the meantime."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "tag_id",
    "tag"
  ],
  "type": "object"
}
```

</details>

<a id="tool-delete_tag-1345d160"></a>

## delete_tag

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.tags.delete using validated ID-derived paths and rejects writes in read-only mode.

```text
Delete a tag from a workspace.

This affects the workspace only. The tag keeps running in production
until a version without it is published.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/tags_service.py#L338-L361) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/tags_service.py#L154-L182) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'tags'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "tag_id": {
      "type": "string",
      "description": "Numeric tag ID."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "tag_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-revert_tag-4c84be02"></a>

## revert_tag

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.tags.revert using validated ID-derived paths and rejects writes in read-only mode.

```text
Undo a workspace's changes to one tag.

Restores the tag to the state of the container version the workspace
was branched from, leaving the workspace's other changes alone.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/tags_service.py#L363-L392) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/tags_service.py#L184-L216) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'tags'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "tag_id": {
      "type": "string",
      "description": "Numeric tag ID."
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
      "description": "Fingerprint from a previous read."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "tag_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-list_templates-f9ffad71"></a>

## list_templates

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.templates.list using validated ID-derived paths.

```text
List the custom templates in a workspace.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/templates_service.py#L283-L307) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/templates_service.py#L43-L68) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'templates'; excluded from --groups=web.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "page_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Continuation token from a previous response."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-get_template-99eb59af"></a>

## get_template

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.templates.get using validated ID-derived paths.

```text
Get one custom template, including its sandboxed JavaScript source.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/templates_service.py#L309-L333) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/templates_service.py#L70-L93) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'templates'; excluded from --groups=web.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "template_id": {
      "type": "string",
      "description": "Numeric template ID."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "template_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-create_template-ccfe420c"></a>

## create_template

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.templates.create using validated ID-derived paths and rejects writes in read-only mode.

```text
Create a custom template in a workspace.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/templates_service.py#L335-L363) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/templates_service.py#L95-L125) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'templates'; excluded from --groups=web.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "template": {
      "additionalProperties": true,
      "type": "object",
      "description": "CustomTemplate resource, e.g.\n{\"name\": \"My pixel\", \"templateData\": \"___INFO___\\n...\"}.\ntemplateData is the full template definition in Tag Manager's\nsandboxed JavaScript format, including its ___INFO___,\n___TEMPLATE_PARAMETERS___ and ___SANDBOXED_JS_FOR_WEB_TEMPLATE___\nsections."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "template"
  ],
  "type": "object"
}
```

</details>

<a id="tool-update_template-dbe66b4e"></a>

## update_template

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.templates.update using validated ID-derived paths and rejects writes in read-only mode.

```text
Update a custom template in a workspace.

The template you send replaces the stored one, so read it with
get_template first and send the whole thing back with your edits
applied.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/templates_service.py#L365-L403) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/templates_service.py#L127-L163) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'templates'; excluded from --groups=web.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "template_id": {
      "type": "string",
      "description": "Numeric template ID."
    },
    "template": {
      "additionalProperties": true,
      "type": "object",
      "description": "Complete CustomTemplate resource."
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
      "description": "Fingerprint from a previous read. When given, the\nupdate fails if the template changed in the meantime."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "template_id",
    "template"
  ],
  "type": "object"
}
```

</details>

<a id="tool-delete_template-02c8a6cb"></a>

## delete_template

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.templates.delete using validated ID-derived paths and rejects writes in read-only mode.

```text
Delete a custom template from a workspace.

Tags and variables using the template stop working, so check for uses
before deleting.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/templates_service.py#L405-L428) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/templates_service.py#L165-L195) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'templates'; excluded from --groups=web.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "template_id": {
      "type": "string",
      "description": "Numeric template ID."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "template_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-revert_template-1ffca46d"></a>

## revert_template

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.templates.revert using validated ID-derived paths and rejects writes in read-only mode.

```text
Undo a workspace's changes to one custom template.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/templates_service.py#L430-L456) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/templates_service.py#L197-L229) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'templates'; excluded from --groups=web.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "template_id": {
      "type": "string",
      "description": "Numeric template ID."
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
      "description": "Fingerprint from a previous read."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "template_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-import_template_from_gallery-b0db8bb0"></a>

## import_template_from_gallery

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.templates.import\_from\_gallery using validated ID-derived paths and rejects writes in read-only mode.

```text
Import a template from the Community Template Gallery.

Gallery templates are third-party code that runs on the site, and the
import declares the permissions the template asks for --
acknowledge_permissions must be true or the call fails. Review what it
requests before importing.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/templates_service.py#L458-L500) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/templates_service.py#L231-L274) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'templates'; excluded from --groups=web.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "gallery_owner": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "GitHub owner, e.g. \"gtm-templates-simo-ahava\"."
    },
    "gallery_repository": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "GitHub repository name."
    },
    "gallery_sha": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Commit SHA to import; defaults to the latest."
    },
    "acknowledge_permissions": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Must be true to accept the template's\nrequested permissions."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-list_transformations-f386365b"></a>

## list_transformations

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.transformations.list using validated ID-derived paths.

```text
List the transformations in a workspace.

A web container returns an empty list; transformations exist only in
server containers.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/transformations_service.py#L254-L281) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/transformations_service.py#L48-L75) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'transformations'; excluded from --groups=web.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "page_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Continuation token from a previous response."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-get_transformation-13553d72"></a>

## get_transformation

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.transformations.get using validated ID-derived paths.

```text
Get one transformation from a workspace.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/transformations_service.py#L283-L307) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/transformations_service.py#L77-L104) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'transformations'; excluded from --groups=web.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "transformation_id": {
      "type": "string",
      "description": "Numeric transformation ID."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "transformation_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-create_transformation-9ff603f0"></a>

## create_transformation

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.transformations.create using validated ID-derived paths and rejects writes in read-only mode.

```text
Create a transformation in a workspace.

Only server containers accept transformations. Creating one in a
web container fails.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/transformations_service.py#L309-L337) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/transformations_service.py#L106-L135) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'transformations'; excluded from --groups=web.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "transformation": {
      "additionalProperties": true,
      "type": "object",
      "description": "Transformation resource. Requires name and type, e.g.\n{\"name\": \"Redact email\", \"type\": \"sgtmTransformation\",\n \"parameter\": [...]}."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "transformation"
  ],
  "type": "object"
}
```

</details>

<a id="tool-update_transformation-67f8c3a8"></a>

## update_transformation

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.transformations.update using validated ID-derived paths and rejects writes in read-only mode.

```text
Update a transformation in a workspace.

The transformation you send replaces the stored one, so read it with
get_transformation first and send the whole thing back with your edits
applied. Omitted fields are cleared, not preserved.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/transformations_service.py#L339-L377) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/transformations_service.py#L137-L175) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'transformations'; excluded from --groups=web.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "transformation_id": {
      "type": "string",
      "description": "Numeric transformation ID."
    },
    "transformation": {
      "additionalProperties": true,
      "type": "object",
      "description": "Complete Transformation resource."
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
      "description": "Fingerprint from a previous read. When given, the\nupdate fails if the transformation changed in the meantime."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "transformation_id",
    "transformation"
  ],
  "type": "object"
}
```

</details>

<a id="tool-delete_transformation-e23da7c3"></a>

## delete_transformation

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.transformations.delete using validated ID-derived paths and rejects writes in read-only mode.

```text
Delete a transformation from a workspace.

This affects the workspace only. The transformation stays in production until
a version without it is published.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/transformations_service.py#L379-L402) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/transformations_service.py#L177-L209) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'transformations'; excluded from --groups=web.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "transformation_id": {
      "type": "string",
      "description": "Numeric transformation ID."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "transformation_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-revert_transformation-484d74bb"></a>

## revert_transformation

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.transformations.revert using validated ID-derived paths and rejects writes in read-only mode.

```text
Undo a workspace's changes to one transformation.

Restores the transformation to the state of the container version the
workspace was branched from, leaving the workspace's other changes
alone.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/transformations_service.py#L404-L439) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/transformations_service.py#L211-L245) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'transformations'; excluded from --groups=web.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "transformation_id": {
      "type": "string",
      "description": "Numeric transformation ID."
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
      "description": "Fingerprint from a previous read."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "transformation_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-list_triggers-4ca44d74"></a>

## list_triggers

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.triggers.list using validated ID-derived paths.

```text
List the triggers in a workspace.

Triggers are referenced by tags through firingTriggerId and
blockingTriggerId, so list these before creating a tag.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/triggers_service.py#L238-L265) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/triggers_service.py#L44-L69) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'triggers'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "page_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Continuation token from a previous response."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-get_trigger-e2f13ee6"></a>

## get_trigger

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.triggers.get using validated ID-derived paths.

```text
Get one trigger from a workspace.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/triggers_service.py#L267-L291) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/triggers_service.py#L71-L94) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'triggers'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "trigger_id": {
      "type": "string",
      "description": "Numeric trigger ID."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "trigger_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-create_trigger-71660c93"></a>

## create_trigger

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.triggers.create using validated ID-derived paths and rejects writes in read-only mode.

```text
Create a trigger in a workspace.

Trigger types are Tag Manager's internal codes: "pageview",
"domReady", "windowLoaded", "click", "linkClick",
"formSubmission", "customEvent", "timer" and so on. Copy the
shape from an existing trigger via get_trigger when unsure.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/triggers_service.py#L293-L330) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/triggers_service.py#L96-L125) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'triggers'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "trigger": {
      "additionalProperties": true,
      "type": "object",
      "description": "Trigger resource. Requires name and type, e.g.\n{\"name\": \"All Pages\", \"type\": \"pageview\"}, or with a\ncondition:\n{\"name\": \"Checkout page\", \"type\": \"pageview\",\n \"filter\": [{\"type\": \"contains\",\n             \"parameter\": [\n               {\"type\": \"template\", \"key\": \"arg0\",\n                \"value\": \"{{Page Path}}\"},\n               {\"type\": \"template\", \"key\": \"arg1\",\n                \"value\": \"/checkout\"}]}]}."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "trigger"
  ],
  "type": "object"
}
```

</details>

<a id="tool-update_trigger-60ddeb77"></a>

## update_trigger

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.triggers.update using validated ID-derived paths and rejects writes in read-only mode.

```text
Update a trigger in a workspace.

The trigger you send replaces the stored one, so read it with
get_trigger first and send the whole thing back with your edits
applied. Omitted fields are cleared, not preserved.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/triggers_service.py#L332-L370) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/triggers_service.py#L127-L163) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'triggers'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "trigger_id": {
      "type": "string",
      "description": "Numeric trigger ID."
    },
    "trigger": {
      "additionalProperties": true,
      "type": "object",
      "description": "Complete Trigger resource."
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
      "description": "Fingerprint from a previous read. When given, the\nupdate fails if the trigger changed in the meantime."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "trigger_id",
    "trigger"
  ],
  "type": "object"
}
```

</details>

<a id="tool-delete_trigger-ec67de91"></a>

## delete_trigger

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.triggers.delete using validated ID-derived paths and rejects writes in read-only mode.

```text
Delete a trigger from a workspace.

This affects the workspace only. The trigger stays in production until
a version without it is published.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/triggers_service.py#L372-L395) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/triggers_service.py#L165-L195) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'triggers'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "trigger_id": {
      "type": "string",
      "description": "Numeric trigger ID."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "trigger_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-revert_trigger-8e193d59"></a>

## revert_trigger

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.triggers.revert using validated ID-derived paths and rejects writes in read-only mode.

```text
Undo a workspace's changes to one trigger.

Restores the trigger to the state of the container version the
workspace was branched from, leaving the workspace's other changes
alone.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/triggers_service.py#L397-L432) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/triggers_service.py#L197-L229) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'triggers'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "trigger_id": {
      "type": "string",
      "description": "Numeric trigger ID."
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
      "description": "Fingerprint from a previous read."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "trigger_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-list_user_permissions-9cabc1e3"></a>

## list_user_permissions

Handler: Calls Google Tag Manager v2 accounts.user\_permissions.list using validated ID-derived paths.

```text
List who has access to a Tag Manager account, and at what level.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/user_permissions_service.py#L166-L182) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/user_permissions_service.py#L30-L51) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'user-permissions'; excluded from --groups=web.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "page_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Continuation token from a previous response."
    }
  },
  "required": [
    "account_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-get_user_permission-66c42a4c"></a>

## get_user_permission

Handler: Calls Google Tag Manager v2 accounts.user\_permissions.get using validated ID-derived paths.

```text
Get one user's access to a Tag Manager account.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/user_permissions_service.py#L184-L199) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/user_permissions_service.py#L53-L71) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'user-permissions'; excluded from --groups=web.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "permission_id": {
      "type": "string",
      "description": "Numeric user permission ID."
    }
  },
  "required": [
    "account_id",
    "permission_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-create_user_permission-ed2ceb20"></a>

## create_user_permission

Handler: Calls Google Tag Manager v2 accounts.user\_permissions.create using validated ID-derived paths and rejects writes in read-only mode.

```text
Grant a user access to a Tag Manager account.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/user_permissions_service.py#L201-L223) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/user_permissions_service.py#L73-L100) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'user-permissions'; excluded from --groups=web.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "user_permission": {
      "additionalProperties": true,
      "type": "object",
      "description": "UserPermission resource. Requires emailAddress and\naccountAccess; containerAccess sets per-container levels, e.g.\n{\"emailAddress\": \"a@b.com\",\n \"accountAccess\": {\"permission\": \"user\"},\n \"containerAccess\": [{\"containerId\": \"1234567\",\n                      \"permission\": \"publish\"}]}.\nAccount permission is \"admin\" or \"user\"; container permission is\n\"read\", \"edit\", \"approve\" or \"publish\"."
    }
  },
  "required": [
    "account_id",
    "user_permission"
  ],
  "type": "object"
}
```

</details>

<a id="tool-update_user_permission-0063613f"></a>

## update_user_permission

Handler: Calls Google Tag Manager v2 accounts.user\_permissions.update using validated ID-derived paths and rejects writes in read-only mode.

```text
Change a user's access to a Tag Manager account.

The request replaces the stored access levels rather than merging into
them, so send the complete accountAccess and containerAccess you want.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/user_permissions_service.py#L225-L249) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/user_permissions_service.py#L102-L131) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'user-permissions'; excluded from --groups=web.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "permission_id": {
      "type": "string",
      "description": "Numeric user permission ID."
    },
    "user_permission": {
      "additionalProperties": true,
      "type": "object",
      "description": "UserPermission resource with the new access levels."
    }
  },
  "required": [
    "account_id",
    "permission_id",
    "user_permission"
  ],
  "type": "object"
}
```

</details>

<a id="tool-delete_user_permission-15a81315"></a>

## delete_user_permission

Handler: Calls Google Tag Manager v2 accounts.user\_permissions.delete using validated ID-derived paths and rejects writes in read-only mode.

```text
Revoke a user's access to a Tag Manager account.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/user_permissions_service.py#L251-L263) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/user_permissions_service.py#L133-L157) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'user-permissions'; excluded from --groups=web.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "permission_id": {
      "type": "string",
      "description": "Numeric user permission ID."
    }
  },
  "required": [
    "account_id",
    "permission_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-list_variables-1adaa2a1"></a>

## list_variables

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.variables.list using validated ID-derived paths.

```text
List the variables in a workspace.

Other entities reference these by name in {{double braces}}, so the
names here are what tag and trigger parameters point at.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/variables_service.py#L242-L268) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/variables_service.py#L48-L73) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'variables'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "page_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Continuation token from a previous response."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-get_variable-ba0cd778"></a>

## get_variable

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.variables.get using validated ID-derived paths.

```text
Get one variable from a workspace.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/variables_service.py#L270-L294) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/variables_service.py#L75-L98) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'variables'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "variable_id": {
      "type": "string",
      "description": "Numeric variable ID."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "variable_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-create_variable-2f5e4ddb"></a>

## create_variable

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.variables.create using validated ID-derived paths and rejects writes in read-only mode.

```text
Create a variable in a workspace.

Variable types are Tag Manager's internal codes: "v" is a data
layer variable, "c" a constant, "jsm" custom JavaScript, "k" a
first-party cookie, "u" a URL variable. Copy the shape from an
existing variable via get_variable when unsure.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/variables_service.py#L296-L331) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/variables_service.py#L100-L129) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'variables'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "variable": {
      "additionalProperties": true,
      "type": "object",
      "description": "Variable resource. Requires name and type, e.g.\n{\"name\": \"DL - transaction ID\",\n \"type\": \"v\",\n \"parameter\": [\n   {\"type\": \"integer\", \"key\": \"dataLayerVersion\",\n    \"value\": \"2\"},\n   {\"type\": \"template\", \"key\": \"name\",\n    \"value\": \"ecommerce.transaction_id\"}]}."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "variable"
  ],
  "type": "object"
}
```

</details>

<a id="tool-update_variable-63c48ad7"></a>

## update_variable

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.variables.update using validated ID-derived paths and rejects writes in read-only mode.

```text
Update a variable in a workspace.

The variable you send replaces the stored one, so read it with
get_variable first and send the whole thing back with your edits
applied. Omitted fields are cleared, not preserved.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/variables_service.py#L333-L371) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/variables_service.py#L131-L167) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'variables'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "variable_id": {
      "type": "string",
      "description": "Numeric variable ID."
    },
    "variable": {
      "additionalProperties": true,
      "type": "object",
      "description": "Complete Variable resource."
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
      "description": "Fingerprint from a previous read. When given, the\nupdate fails if the variable changed in the meantime."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "variable_id",
    "variable"
  ],
  "type": "object"
}
```

</details>

<a id="tool-delete_variable-3ead6fdb"></a>

## delete_variable

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.variables.delete using validated ID-derived paths and rejects writes in read-only mode.

```text
Delete a variable from a workspace.

This affects the workspace only. The variable stays in production until
a version without it is published.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/variables_service.py#L373-L396) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/variables_service.py#L169-L199) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'variables'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "variable_id": {
      "type": "string",
      "description": "Numeric variable ID."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "variable_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-revert_variable-7fb63cb4"></a>

## revert_variable

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.variables.revert using validated ID-derived paths and rejects writes in read-only mode.

```text
Undo a workspace's changes to one variable.

Restores the variable to the state of the container version the
workspace was branched from, leaving the workspace's other changes
alone.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/variables_service.py#L398-L433) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/variables_service.py#L201-L233) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'variables'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "variable_id": {
      "type": "string",
      "description": "Numeric variable ID."
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
      "description": "Fingerprint from a previous read."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "variable_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-list_version_headers-bec4b502"></a>

## list_version_headers

Handler: Calls Google Tag Manager v2 accounts.containers.version\_headers.list using validated ID-derived paths.

```text
List a container's version history as lightweight headers.

Prefer this over fetching versions when you want the history: a header
carries the ID, name and entity counts without the full snapshot of
every tag in the version.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/versions_service.py#L320-L348) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/versions_service.py#L34-L66) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'versions'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "include_deleted": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Also return deleted versions."
    },
    "page_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Continuation token from a previous response."
    }
  },
  "required": [
    "account_id",
    "container_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-get_latest_version_header-e7218219"></a>

## get_latest_version_header

Handler: Calls Google Tag Manager v2 accounts.containers.version\_headers.latest using validated ID-derived paths.

```text
Get the header of a container's most recently created version.

This is the newest version, which is not necessarily the published one
-- use get_live_version for what production is serving.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/versions_service.py#L350-L368) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/versions_service.py#L68-L90) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'versions'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    }
  },
  "required": [
    "account_id",
    "container_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-get_version-e67e6685"></a>

## get_version

Handler: Calls Google Tag Manager v2 accounts.containers.versions.get using validated ID-derived paths.

```text
Get one container version, including every entity it contains.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/versions_service.py#L370-L395) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/versions_service.py#L92-L123) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'versions'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "version_id": {
      "type": "string",
      "description": "Numeric container version ID."
    },
    "container_version_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Rarely needed; overrides the version in the\npath. Leave unset."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "version_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-get_live_version-ffef26dc"></a>

## get_live_version

Handler: Calls Google Tag Manager v2 accounts.containers.versions.live using validated ID-derived paths.

```text
Get the container version currently published to production.

This is what visitors to the site are actually running, which is the
right starting point for "what is live right now".
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/versions_service.py#L397-L415) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/versions_service.py#L125-L147) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'versions'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    }
  },
  "required": [
    "account_id",
    "container_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-update_version-23a8648e"></a>

## update_version

Handler: Calls Google Tag Manager v2 accounts.containers.versions.update using validated ID-derived paths and rejects writes in read-only mode.

```text
Update a container version's name or notes.

Only the metadata is editable. A version's entities are a frozen
snapshot; to change them, edit a workspace and create a new version.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/versions_service.py#L417-L452) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/versions_service.py#L149-L189) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'versions'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "version_id": {
      "type": "string",
      "description": "Numeric container version ID."
    },
    "container_version": {
      "additionalProperties": true,
      "type": "object",
      "description": "ContainerVersion resource, e.g.\n{\"name\": \"Release 2026-09\", \"notes\": \"Adds consent mode\"}."
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
      "description": "Fingerprint from a previous read. When given, the\nupdate fails if the version changed in the meantime."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "version_id",
    "container_version"
  ],
  "type": "object"
}
```

</details>

<a id="tool-delete_version-f7b6682e"></a>

## delete_version

Handler: Calls Google Tag Manager v2 accounts.containers.versions.delete using validated ID-derived paths and rejects writes in read-only mode.

```text
Delete a container version.

Deletion is reversible with undelete_version. The live version cannot
be deleted.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/versions_service.py#L454-L470) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/versions_service.py#L191-L220) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'versions'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "version_id": {
      "type": "string",
      "description": "Numeric container version ID."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "version_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-undelete_version-c548ac58"></a>

## undelete_version

Handler: Calls Google Tag Manager v2 accounts.containers.versions.undelete using validated ID-derived paths and rejects writes in read-only mode.

```text
Restore a deleted container version.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/versions_service.py#L472-L488) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/versions_service.py#L222-L248) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'versions'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "version_id": {
      "type": "string",
      "description": "Numeric container version ID."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "version_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-publish_version-0628e4c5"></a>

## publish_version

Handler: Calls Google Tag Manager v2 accounts.containers.versions.publish using validated ID-derived paths and rejects writes in read-only mode.

```text
Publish a container version to production.

This takes effect on the live site immediately, for every visitor, with
no staged rollout. The only way back is to publish an earlier version
over the top. Confirm the version is the intended one before calling.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/versions_service.py#L490-L519) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/versions_service.py#L250-L283) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'versions'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "version_id": {
      "type": "string",
      "description": "Numeric container version ID."
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
      "description": "Fingerprint from a previous read. When given, the\npublish fails if the version changed in the meantime."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "version_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-set_latest_version-fb529238"></a>

## set_latest_version

Handler: Calls Google Tag Manager v2 accounts.containers.versions.set\_latest using validated ID-derived paths and rejects writes in read-only mode.

```text
Set the version that workspaces sync against.

This is the baseline used to detect conflicts when a workspace syncs.
It does not change what is published.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/versions_service.py#L521-L540) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/versions_service.py#L285-L311) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'versions'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "version_id": {
      "type": "string",
      "description": "Numeric container version ID."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "version_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-list_workspaces-af844119"></a>

## list_workspaces

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.list using validated ID-derived paths.

```text
List a container's workspaces.

A workspace is the draft layer: tags, triggers and variables are edited
in one, and nothing reaches production until it becomes a version and
that version is published. Every container has a "Default Workspace".
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/workspaces_service.py#L409-L432) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/workspaces_service.py#L40-L67) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'workspaces'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "page_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Continuation token from a previous response."
    }
  },
  "required": [
    "account_id",
    "container_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-get_workspace-80ffee6a"></a>

## get_workspace

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.get using validated ID-derived paths.

```text
Get one workspace.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/workspaces_service.py#L434-L451) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/workspaces_service.py#L69-L92) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'workspaces'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-get_workspace_status-23f21bb9"></a>

## get_workspace_status

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.getStatus using validated ID-derived paths.

```text
List what a workspace has changed, and what conflicts with the base.

Run this before creating a version: it is the diff between the
workspace and the container version it was branched from.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/workspaces_service.py#L453-L475) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/workspaces_service.py#L94-L117) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'workspaces'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-create_workspace-a1af8425"></a>

## create_workspace

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.create using validated ID-derived paths and rejects writes in read-only mode.

```text
Create a workspace in a container.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/workspaces_service.py#L477-L494) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/workspaces_service.py#L119-L149) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'workspaces'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace": {
      "additionalProperties": true,
      "type": "object",
      "description": "Workspace resource. Requires name, e.g.\n{\"name\": \"Consent mode\", \"description\": \"GDPR banner work\"}."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace"
  ],
  "type": "object"
}
```

</details>

<a id="tool-update_workspace-1a76edb7"></a>

## update_workspace

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.update using validated ID-derived paths and rejects writes in read-only mode.

```text
Update a workspace's name or description.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/workspaces_service.py#L496-L522) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/workspaces_service.py#L151-L190) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'workspaces'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "workspace": {
      "additionalProperties": true,
      "type": "object",
      "description": "Workspace resource with the fields to change."
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
      "description": "Fingerprint from a previous read. When given, the\nupdate fails if the workspace changed in the meantime."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "workspace"
  ],
  "type": "object"
}
```

</details>

<a id="tool-delete_workspace-50bbbf2e"></a>

## delete_workspace

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.delete using validated ID-derived paths and rejects writes in read-only mode.

```text
Delete a workspace, discarding every change in it.

Changes that were never turned into a version are lost. Check
get_workspace_status first.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/workspaces_service.py#L524-L542) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/workspaces_service.py#L192-L221) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'workspaces'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-sync_workspace-4b02a6d9"></a>

## sync_workspace

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.sync using validated ID-derived paths and rejects writes in read-only mode.

```text
Bring a workspace up to date with the latest container version.

Unmodified entities are updated in place; anything the workspace also
changed comes back as a merge conflict to resolve with
resolve_workspace_conflict.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/workspaces_service.py#L544-L564) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/workspaces_service.py#L223-L249) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'workspaces'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-resolve_workspace_conflict-33394013"></a>

## resolve_workspace_conflict

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.resolve\_conflict using validated ID-derived paths and rejects writes in read-only mode.

```text
Resolve one merge conflict raised by sync_workspace.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/workspaces_service.py#L566-L592) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/workspaces_service.py#L251-L294) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'workspaces'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "entity": {
      "additionalProperties": true,
      "type": "object",
      "description": "Entity resource holding the resolved version, with exactly\none of tag, trigger, variable, client, folder or\ntransformation set, e.g.\n{\"tag\": {\"tagId\": \"12\", \"name\": \"GA4 config\", ...},\n \"changeStatus\": \"updated\"}."
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
      "description": "Fingerprint of the conflicting entity in the workspace."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "entity"
  ],
  "type": "object"
}
```

</details>

<a id="tool-quick_preview_workspace-2e1cb327"></a>

## quick_preview_workspace

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.quick\_preview using validated ID-derived paths and rejects writes in read-only mode.

```text
Compile a workspace into a throwaway version to check it is valid.

Nothing is saved and nothing is published; this is the cheap way to
find compiler errors before create_version.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/workspaces_service.py#L594-L616) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/workspaces_service.py#L296-L322) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'workspaces'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-create_version-fc39e936"></a>

## create_version

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.create\_version using validated ID-derived paths and rejects writes in read-only mode.

```text
Turn a workspace into a container version.

The workspace is consumed by this call -- the API deletes it and makes
the new version the container's latest. Creating a version does not
publish it; use publish_version for that.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/workspaces_service.py#L618-L648) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/workspaces_service.py#L324-L364) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'workspaces'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "version_options": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Name and notes for the version, e.g.\n{\"name\": \"Release 2026-09\", \"notes\": \"Adds consent mode\"}."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-bulk_update_workspace-1affab96"></a>

## bulk_update_workspace

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.bulk\_update using validated ID-derived paths and rejects writes in read-only mode.

```text
Apply many entity changes to a workspace in a single call.

Use this when creating entities that reference each other -- a tag and
the trigger that fires it, say -- since one call keeps them consistent.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/workspaces_service.py#L650-L682) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/workspaces_service.py#L366-L400) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'workspaces'; --groups=web includes this group.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "proposed_change": {
      "additionalProperties": true,
      "type": "object",
      "description": "ProposedChange resource, e.g.\n{\"change\": [{\"changeStatus\": \"added\",\n             \"tag\": {\"tagId\": \"new_1\", \"name\": \"GA4 event\",\n                     \"type\": \"gaawe\", ...}}]}.\nIDs for new entities must be \"new_\" followed by a number and\nunique within the request; reference them from other new\nentities by the same string."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "proposed_change"
  ],
  "type": "object"
}
```

</details>

<a id="tool-list_zones-ab161553"></a>

## list_zones

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.zones.list using validated ID-derived paths.

```text
List the zones in a workspace.

A standard (non-360) container returns an empty list.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/zones_service.py#L240-L266) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/zones_service.py#L48-L73) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'zones'; excluded from --groups=web.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "page_token": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Continuation token from a previous response."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-get_zone-81cb3a97"></a>

## get_zone

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.zones.get using validated ID-derived paths.

```text
Get one zone from a workspace.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/zones_service.py#L268-L292) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/zones_service.py#L75-L98) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'zones'; excluded from --groups=web.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "zone_id": {
      "type": "string",
      "description": "Numeric zone ID."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "zone_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-create_zone-eb54dad2"></a>

## create_zone

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.zones.create using validated ID-derived paths and rejects writes in read-only mode.

```text
Create a zone in a workspace.

Zones require Tag Manager 360. Creating one in a standard container
fails.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/zones_service.py#L294-L323) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/zones_service.py#L100-L127) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'zones'; excluded from --groups=web.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "zone": {
      "additionalProperties": true,
      "type": "object",
      "description": "Zone resource. Requires name, e.g.\n{\"name\": \"Marketing zone\",\n \"childContainer\": [{\"publicId\": \"GTM-XXXXXXX\"}],\n \"boundary\": {\"condition\": [...]}}."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "zone"
  ],
  "type": "object"
}
```

</details>

<a id="tool-update_zone-6369eede"></a>

## update_zone

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.zones.update using validated ID-derived paths and rejects writes in read-only mode.

```text
Update a zone in a workspace.

The zone you send replaces the stored one, so read it with
get_zone first and send the whole thing back with your edits
applied. Omitted fields are cleared, not preserved.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/zones_service.py#L325-L363) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/zones_service.py#L129-L165) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'zones'; excluded from --groups=web.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "zone_id": {
      "type": "string",
      "description": "Numeric zone ID."
    },
    "zone": {
      "additionalProperties": true,
      "type": "object",
      "description": "Complete Zone resource."
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
      "description": "Fingerprint from a previous read. When given, the\nupdate fails if the zone changed in the meantime."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "zone_id",
    "zone"
  ],
  "type": "object"
}
```

</details>

<a id="tool-delete_zone-056c0d00"></a>

## delete_zone

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.zones.delete using validated ID-derived paths and rejects writes in read-only mode.

```text
Delete a zone from a workspace.

This affects the workspace only. The zone stays in production until
a version without it is published.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/zones_service.py#L365-L388) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/zones_service.py#L167-L197) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'zones'; excluded from --groups=web.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "zone_id": {
      "type": "string",
      "description": "Numeric zone ID."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "zone_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-revert_zone-9149fc2b"></a>

## revert_zone

Handler: Calls Google Tag Manager v2 accounts.containers.workspaces.zones.revert using validated ID-derived paths and rejects writes in read-only mode.

```text
Undo a workspace's changes to one zone.

Restores the zone to the state of the container version the
workspace was branched from, leaving the workspace's other changes
alone.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/zones_service.py#L390-L425) · [Handler](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/src/services/zones_service.py#L199-L231) · Schema: reconstructed.

Exposure: Registered with --groups=all (default) or group 'zones'; excluded from --groups=web.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Numeric Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Numeric container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Numeric workspace ID."
    },
    "zone_id": {
      "type": "string",
      "description": "Numeric zone ID."
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
      "description": "Fingerprint from a previous read."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "zone_id"
  ],
  "type": "object"
}
```

</details>

<a id="tool-check_client_status-490a9aab"></a>

## check_client_status

Handler: Reports initialization, credential resolution, read-only state and scopes; accessing client.service may resolve credentials and build the Tag Manager v2 client.

```text
Check that the Tag Manager client is configured and can authenticate.
```

[Source](https://github.com/rgellis/google-tag-manager-mcp/blob/21e47900d828c94260d1820a182f1daef05501ca/main.py#L96-L118) · Schema: reconstructed.

Exposure: Always registered.

<details>
<summary>Full input parameters</summary>

```json
{
  "additionalProperties": false,
  "properties": {},
  "type": "object"
}
```

</details>
