# samarthanalytics-sj/samarth-analytics-mcp

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/samarthanalytics-sj/samarth-analytics-mcp) · [Machine-readable inventory](../data/mcps/samarthanalytics-sj--samarth-analytics-mcp.json)

**203 extracted tools.** Configure server-container URLs, clients, transformations, and templates alongside web-container resources.

Snapshot: 2026-10-13 · [0b59ba1a9310](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/tree/0b59ba1a931050ff7f7b8876599950323f381509) · Method: mixed.

Exposure: All 203 tools are unconditionally registered. GTM/GA4 write/delete/publish flags gate handler execution, not listing. Generic resources expose revert only when their static resource spec supports it; gtag_config has no revert. Separate apps/web-audit-mcp server and desktop tool registry are outside this GTM MCP server.

## Limits

- Offline in-memory MCP tools/list with source handler inspection; no authenticated API calls or live GTM/GA4 functionality verification performed.
- Raw body and bodyJson escape hatches are intentionally unrestricted upstream; schemas preserve that rather than inventing product resource fields.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`accounts_list`](#tool-accounts_list-a6a51f92) | GTM | Calls client.accounts.list and returns the result or a formatted error. |
| [`accounts_get`](#tool-accounts_get-3f5413c1) | GTM | Calls client.accounts.get and returns the result or a formatted error. |
| [`containers_list`](#tool-containers_list-26c799fa) | GTM | Calls client.accounts.containers.list and returns the result or a formatted error. |
| [`containers_get`](#tool-containers_get-620e1e47) | GTM | Calls client.accounts.containers.get and returns the result or a formatted error. |
| [`containers_create`](#tool-containers_create-a1907c0c) | GTM | Calls client.accounts.containers.create and returns the result or a formatted error. |
| [`containers_set_tagging_server_urls`](#tool-containers_set_tagging_server_urls-3378fe63) | GTM | Calls client.accounts.containers.get, client.accounts.containers.update and returns the result or a formatted error. |
| [`containers_snippet`](#tool-containers_snippet-d2a85006) | GTM | Calls client.accounts.containers.snippet and returns the result or a formatted error. |
| [`containers_lookup`](#tool-containers_lookup-846df597) | GTM | Calls client.accounts.containers.lookup and returns the result or a formatted error. |
| [`containers_combine`](#tool-containers_combine-3d0c38ee) | GTM | Calls client.accounts.containers.combine and returns the result or a formatted error. |
| [`containers_move_tag_id`](#tool-containers_move_tag_id-48f9cc80) | GTM | Calls client.accounts.containers.move\_tag\_id and returns the result or a formatted error. |
| [`destinations_list`](#tool-destinations_list-cfa465fc) | GTM | Calls client.accounts.containers.destinations.list and returns the result or a formatted error. |
| [`destinations_get`](#tool-destinations_get-5412f40b) | GTM | Calls client.accounts.containers.destinations.get and returns the result or a formatted error. |
| [`destinations_link`](#tool-destinations_link-9b388ce2) | GTM | Calls client.accounts.containers.destinations.link and returns the result or a formatted error. |
| [`workspaces_list`](#tool-workspaces_list-a41d4a66) | GTM | Calls client.accounts.containers.workspaces.list and returns the result or a formatted error. |
| [`workspaces_get`](#tool-workspaces_get-16b081ed) | GTM | Calls client.accounts.containers.workspaces.get and returns the result or a formatted error. |
| [`workspaces_create`](#tool-workspaces_create-edb58824) | GTM | Calls client.accounts.containers.workspaces.create and returns the result or a formatted error. |
| [`workspace_get_status`](#tool-workspace_get_status-8e01fe5e) | GTM | Calls client.accounts.containers.workspaces.getStatus and returns the result or a formatted error. |
| [`workspace_sync`](#tool-workspace_sync-a369a3b7) | GTM | Calls client.accounts.containers.workspaces.sync and returns the result or a formatted error. |
| [`workspace_resolve_conflict`](#tool-workspace_resolve_conflict-50253d6f) | GTM | Calls client.accounts.containers.workspaces.resolve\_conflict and returns the result or a formatted error. |
| [`tags_list`](#tool-tags_list-5c82ac45) | GTM | Calls client.accounts.containers.workspaces.tags.list and returns the result or a formatted error. |
| [`tags_get`](#tool-tags_get-f4cf2d2c) | GTM | Calls client.accounts.containers.workspaces.tags.get and returns the result or a formatted error. |
| [`tags_create`](#tool-tags_create-a7fd6bc5) | GTM | Calls client.accounts.containers.workspaces.tags.create and returns the result or a formatted error. |
| [`tags_update`](#tool-tags_update-59a4d940) | GTM | Calls client.accounts.containers.workspaces.tags.get, client.accounts.containers.workspaces.tags.update and returns the result or a formatted error. |
| [`tags_add_ga4_event_parameters`](#tool-tags_add_ga4_event_parameters-84c5c021) | GTM | Calls client.accounts.containers.workspaces.tags.get, client.accounts.containers.workspaces.tags.update and returns the result or a formatted error. |
| [`tags_delete`](#tool-tags_delete-3cd3c99b) | GTM | Calls client.accounts.containers.workspaces.tags.delete and returns the result or a formatted error. |
| [`triggers_list`](#tool-triggers_list-47215578) | GTM | Calls client.accounts.containers.workspaces.triggers.list and returns the result or a formatted error. |
| [`triggers_get`](#tool-triggers_get-f2479571) | GTM | Calls client.accounts.containers.workspaces.triggers.get and returns the result or a formatted error. |
| [`triggers_create`](#tool-triggers_create-858f605a) | GTM | Calls client.accounts.containers.workspaces.triggers.create and returns the result or a formatted error. |
| [`triggers_update`](#tool-triggers_update-7af0ab6f) | GTM | Calls client.accounts.containers.workspaces.triggers.get, client.accounts.containers.workspaces.triggers.update and returns the result or a formatted error. |
| [`triggers_delete`](#tool-triggers_delete-134b8aed) | GTM | Calls client.accounts.containers.workspaces.triggers.delete and returns the result or a formatted error. |
| [`variables_list`](#tool-variables_list-516c3ba6) | GTM | Calls client.accounts.containers.workspaces.variables.list and returns the result or a formatted error. |
| [`variables_get`](#tool-variables_get-5121125d) | GTM | Calls client.accounts.containers.workspaces.variables.get and returns the result or a formatted error. |
| [`variables_create`](#tool-variables_create-5ffbdad2) | GTM | Calls client.accounts.containers.workspaces.variables.create and returns the result or a formatted error. |
| [`variables_update`](#tool-variables_update-ad7a0ba3) | GTM | Calls client.accounts.containers.workspaces.variables.get, client.accounts.containers.workspaces.variables.update and returns the result or a formatted error. |
| [`variables_delete`](#tool-variables_delete-a3643aad) | GTM | Calls client.accounts.containers.workspaces.variables.delete and returns the result or a formatted error. |
| [`folders_list`](#tool-folders_list-9c7b5f4f) | GTM | Calls client.accounts.containers.workspaces.folders.list and returns the result or a formatted error. |
| [`folders_get`](#tool-folders_get-0c315e08) | GTM | Calls client.accounts.containers.workspaces.folders.get and returns the result or a formatted error. |
| [`folders_entities`](#tool-folders_entities-fef5b7d3) | GTM | Calls client.accounts.containers.workspaces.folders.entities and returns the result or a formatted error. |
| [`folders_create`](#tool-folders_create-d3837858) | GTM | Calls client.accounts.containers.workspaces.folders.create and returns the result or a formatted error. |
| [`folders_update`](#tool-folders_update-002b2fe6) | GTM | Calls client.accounts.containers.workspaces.folders.get, client.accounts.containers.workspaces.folders.update and returns the result or a formatted error. |
| [`folders_delete`](#tool-folders_delete-7bf02d3c) | GTM | Calls client.accounts.containers.workspaces.folders.delete and returns the result or a formatted error. |
| [`folders_move_entities`](#tool-folders_move_entities-12118eed) | GTM | Calls client.accounts.containers.workspaces.folders.move\_entities\_to\_folder and returns the result or a formatted error. |
| [`built_in_variables_list`](#tool-built_in_variables_list-610e1f91) | GTM | Calls client.accounts.containers.workspaces.built\_in\_variables.list and returns the result or a formatted error. |
| [`built_in_variables_enable`](#tool-built_in_variables_enable-d180d877) | GTM | Calls client.accounts.containers.workspaces.built\_in\_variables.create and returns the result or a formatted error. |
| [`built_in_variables_disable`](#tool-built_in_variables_disable-6fb23cce) | GTM | Calls client.accounts.containers.workspaces.built\_in\_variables.delete and returns the result or a formatted error. |
| [`built_in_variables_revert`](#tool-built_in_variables_revert-cb49f06f) | GTM | Calls client.accounts.containers.workspaces.built\_in\_variables.revert and returns the result or a formatted error. |
| [`create_gtm_tracking_tag`](#tool-create_gtm_tracking_tag-3aa3598d) | GTM | Builds a typed tracking tag, enables required built-in variables, optionally creates a trigger, and creates the draft workspace tag after guardrail checks. |
| [`create_gtm_variable_typed`](#tool-create_gtm_variable_typed-8430f1dc) | GTM | Builds the selected typed GTM variable and creates it in the draft workspace after guardrail checks. |
| [`versions_list`](#tool-versions_list-f5db29dc) | GTM | Calls client.accounts.containers.version\_headers.list and returns the result or a formatted error. |
| [`versions_get`](#tool-versions_get-d0ab5a14) | GTM | Calls client.accounts.containers.versions.live, client.accounts.containers.versions.get and returns the result or a formatted error. |
| [`versions_create`](#tool-versions_create-04de95bc) | GTM | Calls client.accounts.containers.workspaces.create\_version and returns the result or a formatted error. |
| [`versions_set_latest`](#tool-versions_set_latest-ae92b207) | GTM | Calls client.accounts.containers.versions.set\_latest and returns the result or a formatted error. |
| [`versions_undelete`](#tool-versions_undelete-509621dc) | GTM | Calls client.accounts.containers.versions.undelete and returns the result or a formatted error. |
| [`versions_delete`](#tool-versions_delete-063fa16a) | GTM | Calls client.accounts.containers.versions.delete and returns the result or a formatted error. |
| [`workspace_quick_preview`](#tool-workspace_quick_preview-91a16c1b) | GTM | Calls client.accounts.containers.workspaces.quick\_preview and returns the result or a formatted error. |
| [`versions_publish`](#tool-versions_publish-ae317031) | GTM | Calls client.accounts.containers.versions.publish and returns the result or a formatted error. |
| [`workspace_create_version_and_publish`](#tool-workspace_create_version_and_publish-fefa1f23) | GTM | Calls client.accounts.containers.workspaces.create\_version, client.accounts.containers.versions.publish and returns the result or a formatted error. |
| [`environments_list`](#tool-environments_list-7d0570ce) | GTM | Calls client.accounts.containers.environments.list and returns the result or a formatted error. |
| [`environments_get`](#tool-environments_get-b13a1afd) | GTM | Calls client.accounts.containers.environments.get and returns the result or a formatted error. |
| [`environments_create`](#tool-environments_create-6c824e27) | GTM | Calls client.accounts.containers.environments.create and returns the result or a formatted error. |
| [`environments_update`](#tool-environments_update-c07b0bb7) | GTM | Calls client.accounts.containers.environments.get, client.accounts.containers.environments.update and returns the result or a formatted error. |
| [`environments_reauthorize`](#tool-environments_reauthorize-b2d686be) | GTM | Calls client.accounts.containers.environments.reauthorize and returns the result or a formatted error. |
| [`environments_delete`](#tool-environments_delete-ee34cf97) | GTM | Calls client.accounts.containers.environments.delete and returns the result or a formatted error. |
| [`user_permissions_list`](#tool-user_permissions_list-f3f92d06) | GTM | Calls client.accounts.user\_permissions.list and returns the result or a formatted error. |
| [`user_permissions_get`](#tool-user_permissions_get-12b30f7b) | GTM | Calls client.accounts.user\_permissions.get and returns the result or a formatted error. |
| [`user_permissions_create`](#tool-user_permissions_create-f0e56fb0) | GTM | Calls client.accounts.user\_permissions.create and returns the result or a formatted error. |
| [`user_permissions_update`](#tool-user_permissions_update-8a91e4a6) | GTM | Calls client.accounts.user\_permissions.update and returns the result or a formatted error. |
| [`user_permissions_delete`](#tool-user_permissions_delete-1cf1fd54) | GTM | Calls client.accounts.user\_permissions.delete and returns the result or a formatted error. |
| [`clients_list`](#tool-clients_list-b88d2720) | GTM | Calls GTM workspace clients.list with workspace/resource paths; mutating operations enforce guardrails and confirm. |
| [`clients_get`](#tool-clients_get-06dd01c1) | GTM | Calls GTM workspace clients.get with workspace/resource paths; mutating operations enforce guardrails and confirm. |
| [`clients_create`](#tool-clients_create-07f6fe45) | GTM | Calls GTM workspace clients.create with workspace/resource paths; mutating operations enforce guardrails and confirm. |
| [`clients_update`](#tool-clients_update-995c8f38) | GTM | Calls GTM workspace clients.update with workspace/resource paths; mutating operations enforce guardrails and confirm. |
| [`clients_delete`](#tool-clients_delete-f3052b2f) | GTM | Calls GTM workspace clients.delete with workspace/resource paths; mutating operations enforce guardrails and confirm. |
| [`clients_revert`](#tool-clients_revert-107f2832) | GTM | Calls GTM workspace clients.revert with workspace/resource paths; mutating operations enforce guardrails and confirm. |
| [`transformations_list`](#tool-transformations_list-9f9b231c) | GTM | Calls GTM workspace transformations.list with workspace/resource paths; mutating operations enforce guardrails and confirm. |
| [`transformations_get`](#tool-transformations_get-4bd31bca) | GTM | Calls GTM workspace transformations.get with workspace/resource paths; mutating operations enforce guardrails and confirm. |
| [`transformations_create`](#tool-transformations_create-9e6cd227) | GTM | Calls GTM workspace transformations.create with workspace/resource paths; mutating operations enforce guardrails and confirm. |
| [`transformations_update`](#tool-transformations_update-278d1baf) | GTM | Calls GTM workspace transformations.update with workspace/resource paths; mutating operations enforce guardrails and confirm. |
| [`transformations_delete`](#tool-transformations_delete-ccae13a1) | GTM | Calls GTM workspace transformations.delete with workspace/resource paths; mutating operations enforce guardrails and confirm. |
| [`transformations_revert`](#tool-transformations_revert-44a07063) | GTM | Calls GTM workspace transformations.revert with workspace/resource paths; mutating operations enforce guardrails and confirm. |
| [`zones_list`](#tool-zones_list-41e3e1f3) | GTM | Calls GTM workspace zones.list with workspace/resource paths; mutating operations enforce guardrails and confirm. |
| [`zones_get`](#tool-zones_get-5947cfca) | GTM | Calls GTM workspace zones.get with workspace/resource paths; mutating operations enforce guardrails and confirm. |
| [`zones_create`](#tool-zones_create-e4d8c228) | GTM | Calls GTM workspace zones.create with workspace/resource paths; mutating operations enforce guardrails and confirm. |
| [`zones_update`](#tool-zones_update-69abb230) | GTM | Calls GTM workspace zones.update with workspace/resource paths; mutating operations enforce guardrails and confirm. |
| [`zones_delete`](#tool-zones_delete-31e19545) | GTM | Calls GTM workspace zones.delete with workspace/resource paths; mutating operations enforce guardrails and confirm. |
| [`zones_revert`](#tool-zones_revert-000be4e0) | GTM | Calls GTM workspace zones.revert with workspace/resource paths; mutating operations enforce guardrails and confirm. |
| [`templates_list`](#tool-templates_list-0de2809e) | GTM | Calls GTM workspace templates.list with workspace/resource paths; mutating operations enforce guardrails and confirm. |
| [`templates_get`](#tool-templates_get-e29ee6b4) | GTM | Calls GTM workspace templates.get with workspace/resource paths; mutating operations enforce guardrails and confirm. |
| [`templates_create`](#tool-templates_create-3a3e5b04) | GTM | Calls GTM workspace templates.create with workspace/resource paths; mutating operations enforce guardrails and confirm. |
| [`templates_update`](#tool-templates_update-f5c32e05) | GTM | Calls GTM workspace templates.update with workspace/resource paths; mutating operations enforce guardrails and confirm. |
| [`templates_delete`](#tool-templates_delete-78735250) | GTM | Calls GTM workspace templates.delete with workspace/resource paths; mutating operations enforce guardrails and confirm. |
| [`templates_revert`](#tool-templates_revert-43e1900f) | GTM | Calls GTM workspace templates.revert with workspace/resource paths; mutating operations enforce guardrails and confirm. |
| [`gtag_config_list`](#tool-gtag_config_list-4afb97b5) | GTM | Calls GTM workspace gtag\_config.list with workspace/resource paths; mutating operations enforce guardrails and confirm. |
| [`gtag_config_get`](#tool-gtag_config_get-8921d744) | GTM | Calls GTM workspace gtag\_config.get with workspace/resource paths; mutating operations enforce guardrails and confirm. |
| [`gtag_config_create`](#tool-gtag_config_create-8cc1c906) | GTM | Calls GTM workspace gtag\_config.create with workspace/resource paths; mutating operations enforce guardrails and confirm. |
| [`gtag_config_update`](#tool-gtag_config_update-63e8427c) | GTM | Calls GTM workspace gtag\_config.update with workspace/resource paths; mutating operations enforce guardrails and confirm. |
| [`gtag_config_delete`](#tool-gtag_config_delete-2caa4011) | GTM | Calls GTM workspace gtag\_config.delete with workspace/resource paths; mutating operations enforce guardrails and confirm. |
| [`templates_import_from_gallery`](#tool-templates_import_from_gallery-e8c40a01) | GTM | Reuses an installed gallery template or installs the referenced gallery template through GTM, returning its derived tag type. |
| [`plan_server_migration_from_web`](#tool-plan_server_migration_from_web-8ec83e7b) | GTM | Reads tags, triggers and variables into a workspace snapshot and computes a web-to-server migration plan without creating resources. |
| [`create_server_tag`](#tool-create_server_tag-670d8e59) | GTM | Builds a native Google server tag for the chosen platform and creates it in the draft GTM workspace after guardrail checks. |
| [`create_meta_capi_server_tag`](#tool-create_meta_capi_server_tag-5820a53c) | GTM | Validates vendor fields, installs or reuses the gallery template, ensures any required variables, and creates the typed tag in the draft server workspace. |
| [`create_tiktok_capi_server_tag`](#tool-create_tiktok_capi_server_tag-8e22aa8b) | GTM | Validates vendor fields, installs or reuses the gallery template, ensures any required variables, and creates the typed tag in the draft server workspace. |
| [`create_linkedin_capi_server_tag`](#tool-create_linkedin_capi_server_tag-e23b3f7e) | GTM | Validates vendor fields, installs or reuses the gallery template, ensures any required variables, and creates the typed tag in the draft server workspace. |
| [`create_pinterest_capi_server_tag`](#tool-create_pinterest_capi_server_tag-77d2399d) | GTM | Validates vendor fields, installs or reuses the gallery template, ensures any required variables, and creates the typed tag in the draft server workspace. |
| [`create_stackadapt_server_tag`](#tool-create_stackadapt_server_tag-3e33ca3c) | GTM | Validates vendor fields, installs or reuses the gallery template, ensures any required variables, and creates the typed tag in the draft server workspace. |
| [`create_reddit_capi_server_tag`](#tool-create_reddit_capi_server_tag-d208e85e) | GTM | Validates vendor fields, installs or reuses the gallery template, ensures any required variables, and creates the typed tag in the draft server workspace. |
| [`create_snapchat_capi_server_tag`](#tool-create_snapchat_capi_server_tag-fc61ce91) | GTM | Validates vendor fields, installs or reuses the gallery template, ensures any required variables, and creates the typed tag in the draft server workspace. |
| [`create_microsoft_capi_server_tag`](#tool-create_microsoft_capi_server_tag-7919b9b1) | GTM | Validates vendor fields, installs or reuses the gallery template, ensures any required variables, and creates the typed tag in the draft server workspace. |
| [`create_amazon_capi_server_tag`](#tool-create_amazon_capi_server_tag-00cde581) | GTM | Validates vendor fields, installs or reuses the gallery template, ensures any required variables, and creates the typed tag in the draft server workspace. |
| [`create_x_capi_server_tag`](#tool-create_x_capi_server_tag-a0e26737) | GTM | Validates vendor fields, installs or reuses the gallery template, ensures any required variables, and creates the typed tag in the draft server workspace. |
| [`create_quora_capi_server_tag`](#tool-create_quora_capi_server_tag-d97bb60b) | GTM | Validates vendor fields, installs or reuses the gallery template, ensures any required variables, and creates the typed tag in the draft server workspace. |
| [`create_adroll_capi_server_tag`](#tool-create_adroll_capi_server_tag-d4d322c2) | GTM | Validates vendor fields, installs or reuses the gallery template, ensures any required variables, and creates the typed tag in the draft server workspace. |
| [`create_nextdoor_capi_server_tag`](#tool-create_nextdoor_capi_server_tag-9de3a744) | GTM | Validates vendor fields, installs or reuses the gallery template, ensures any required variables, and creates the typed tag in the draft server workspace. |
| [`create_yelp_capi_server_tag`](#tool-create_yelp_capi_server_tag-02d88e52) | GTM | Validates vendor fields, installs or reuses the gallery template, ensures any required variables, and creates the typed tag in the draft server workspace. |
| [`create_spotify_capi_server_tag`](#tool-create_spotify_capi_server_tag-4c163053) | GTM | Validates vendor fields, installs or reuses the gallery template, ensures any required variables, and creates the typed tag in the draft server workspace. |
| [`create_line_yahoo_capi_server_tag`](#tool-create_line_yahoo_capi_server_tag-3cdff2e2) | GTM | Validates vendor fields, installs or reuses the gallery template, ensures any required variables, and creates the typed tag in the draft server workspace. |
| [`create_rtb_house_server_tag`](#tool-create_rtb_house_server_tag-7485e112) | GTM | Validates vendor fields, installs or reuses the gallery template, ensures any required variables, and creates the typed tag in the draft server workspace. |
| [`audit_container`](#tool-audit_container-8180158f) | GTM | Reads workspace entities and runs implemented tag, trigger, variable and analytics audit checks. |
| [`export_container`](#tool-export_container-76595276) | GTM | Paginates workspace tags, triggers, variables, folders and built-in variables and returns the selected JSON export format. |
| [`ga4_account_summaries_list`](#tool-ga4_account_summaries_list-920465ee) | Other product | Google Analytics 4: Calls client.accountSummaries.list and returns the result or a formatted error. |
| [`ga4_properties_list`](#tool-ga4_properties_list-53ec0b53) | Other product | Google Analytics 4: Calls client.properties.list and returns the result or a formatted error. |
| [`ga4_property_get`](#tool-ga4_property_get-e7b614db) | Other product | Google Analytics 4: Calls client.properties.get and returns the result or a formatted error. |
| [`ga4_data_streams_list`](#tool-ga4_data_streams_list-8ec3b916) | Other product | Google Analytics 4: Calls client.properties.dataStreams.list and returns the result or a formatted error. |
| [`ga4_enhanced_measurement_get`](#tool-ga4_enhanced_measurement_get-cef9a544) | Other product | Google Analytics 4: Calls client.properties.dataStreams.getEnhancedMeasurementSettings and returns the result or a formatted error. |
| [`ga4_custom_dimensions_list`](#tool-ga4_custom_dimensions_list-fbaab848) | Other product | Google Analytics 4: Calls client.properties.customDimensions.list and returns the result or a formatted error. |
| [`ga4_custom_metrics_list`](#tool-ga4_custom_metrics_list-d986e207) | Other product | Google Analytics 4: Calls client.properties.customMetrics.list and returns the result or a formatted error. |
| [`ga4_data_retention_get`](#tool-ga4_data_retention_get-9268d04f) | Other product | Google Analytics 4: Calls client.properties.getDataRetentionSettings and returns the result or a formatted error. |
| [`ga4_key_events_list`](#tool-ga4_key_events_list-25f2b3b8) | Other product | Google Analytics 4: Calls client.properties.keyEvents.list and returns the result or a formatted error. |
| [`ga4_google_ads_links_list`](#tool-ga4_google_ads_links_list-7c4f7bf0) | Other product | Google Analytics 4: Calls client.properties.googleAdsLinks.list and returns the result or a formatted error. |
| [`ga4_create_key_event`](#tool-ga4_create_key_event-503e5cec) | Other product | Google Analytics 4: gates the operation and calls v1beta properties.keyEvents.create with resolved resource paths and request fields. |
| [`ga4_update_key_event`](#tool-ga4_update_key_event-9fe62a80) | Other product | Google Analytics 4: gates the operation and calls v1beta properties.keyEvents.patch with resolved resource paths and request fields. |
| [`ga4_delete_key_event`](#tool-ga4_delete_key_event-c4c6bdad) | Other product | Google Analytics 4: gates the operation and calls v1beta properties.keyEvents.delete with resolved resource paths and request fields. |
| [`ga4_create_custom_dimension`](#tool-ga4_create_custom_dimension-2ce8700e) | Other product | Google Analytics 4: gates the operation and calls v1beta properties.customDimensions.create with resolved resource paths and request fields. |
| [`ga4_update_custom_dimension`](#tool-ga4_update_custom_dimension-12ee33de) | Other product | Google Analytics 4: gates the operation and calls v1beta properties.customDimensions.patch with resolved resource paths and request fields. |
| [`ga4_archive_custom_dimension`](#tool-ga4_archive_custom_dimension-1fc6993a) | Other product | Google Analytics 4: gates the operation and calls v1beta properties.customDimensions.archive with resolved resource paths and request fields. |
| [`ga4_create_custom_metric`](#tool-ga4_create_custom_metric-840cf76a) | Other product | Google Analytics 4: gates the operation and calls v1beta properties.customMetrics.create with resolved resource paths and request fields. |
| [`ga4_update_custom_metric`](#tool-ga4_update_custom_metric-e82b1abf) | Other product | Google Analytics 4: gates the operation and calls v1beta properties.customMetrics.patch with resolved resource paths and request fields. |
| [`ga4_archive_custom_metric`](#tool-ga4_archive_custom_metric-8be70bfb) | Other product | Google Analytics 4: gates the operation and calls v1beta properties.customMetrics.archive with resolved resource paths and request fields. |
| [`ga4_create_data_stream`](#tool-ga4_create_data_stream-9d40c550) | Other product | Google Analytics 4: gates the operation and calls v1beta properties.dataStreams.create with resolved resource paths and request fields. |
| [`ga4_update_data_stream`](#tool-ga4_update_data_stream-27f95aa4) | Other product | Google Analytics 4: gates the operation and calls v1beta properties.dataStreams.patch with resolved resource paths and request fields. |
| [`ga4_delete_data_stream`](#tool-ga4_delete_data_stream-707dd56e) | Other product | Google Analytics 4: gates the operation and calls v1beta properties.dataStreams.delete with resolved resource paths and request fields. |
| [`ga4_create_google_ads_link`](#tool-ga4_create_google_ads_link-831b0d9d) | Other product | Google Analytics 4: gates the operation and calls v1beta properties.googleAdsLinks.create with resolved resource paths and request fields. |
| [`ga4_update_google_ads_link`](#tool-ga4_update_google_ads_link-2298035d) | Other product | Google Analytics 4: gates the operation and calls v1beta properties.googleAdsLinks.patch with resolved resource paths and request fields. |
| [`ga4_delete_google_ads_link`](#tool-ga4_delete_google_ads_link-75fbc531) | Other product | Google Analytics 4: gates the operation and calls v1beta properties.googleAdsLinks.delete with resolved resource paths and request fields. |
| [`ga4_create_firebase_link`](#tool-ga4_create_firebase_link-fa352dc5) | Other product | Google Analytics 4: gates the operation and calls v1beta properties.firebaseLinks.create with resolved resource paths and request fields. |
| [`ga4_delete_firebase_link`](#tool-ga4_delete_firebase_link-d7b7bc6c) | Other product | Google Analytics 4: gates the operation and calls v1beta properties.firebaseLinks.delete with resolved resource paths and request fields. |
| [`ga4_create_measurement_protocol_secret`](#tool-ga4_create_measurement_protocol_secret-2e830f23) | Other product | Google Analytics 4: gates the operation and calls v1beta properties.dataStreams.measurementProtocolSecrets.create with resolved resource paths and request fields. |
| [`ga4_update_measurement_protocol_secret`](#tool-ga4_update_measurement_protocol_secret-f85dd0f7) | Other product | Google Analytics 4: gates the operation and calls v1beta properties.dataStreams.measurementProtocolSecrets.patch with resolved resource paths and request fields. |
| [`ga4_delete_measurement_protocol_secret`](#tool-ga4_delete_measurement_protocol_secret-c52a1e0f) | Other product | Google Analytics 4: gates the operation and calls v1beta properties.dataStreams.measurementProtocolSecrets.delete with resolved resource paths and request fields. |
| [`ga4_create_audience`](#tool-ga4_create_audience-406760e3) | Other product | Google Analytics 4: gates the operation and calls v1alpha properties.audiences.create with resolved resource paths and request fields. |
| [`ga4_update_audience`](#tool-ga4_update_audience-e788bc76) | Other product | Google Analytics 4: gates the operation and calls v1alpha properties.audiences.patch with resolved resource paths and request fields. |
| [`ga4_archive_audience`](#tool-ga4_archive_audience-7a344fb5) | Other product | Google Analytics 4: gates the operation and calls v1alpha properties.audiences.archive with resolved resource paths and request fields. |
| [`ga4_create_channel_group`](#tool-ga4_create_channel_group-bb5cdbcf) | Other product | Google Analytics 4: gates the operation and calls v1alpha properties.channelGroups.create with resolved resource paths and request fields. |
| [`ga4_update_channel_group`](#tool-ga4_update_channel_group-25e2faab) | Other product | Google Analytics 4: gates the operation and calls v1alpha properties.channelGroups.patch with resolved resource paths and request fields. |
| [`ga4_delete_channel_group`](#tool-ga4_delete_channel_group-302f7965) | Other product | Google Analytics 4: gates the operation and calls v1alpha properties.channelGroups.delete with resolved resource paths and request fields. |
| [`ga4_create_calculated_metric`](#tool-ga4_create_calculated_metric-a4cc09dc) | Other product | Google Analytics 4: gates the operation and calls v1alpha properties.calculatedMetrics.create with resolved resource paths and request fields. |
| [`ga4_update_calculated_metric`](#tool-ga4_update_calculated_metric-f7aea53b) | Other product | Google Analytics 4: gates the operation and calls v1alpha properties.calculatedMetrics.patch with resolved resource paths and request fields. |
| [`ga4_delete_calculated_metric`](#tool-ga4_delete_calculated_metric-fb46fa52) | Other product | Google Analytics 4: gates the operation and calls v1alpha properties.calculatedMetrics.delete with resolved resource paths and request fields. |
| [`ga4_create_expanded_data_set`](#tool-ga4_create_expanded_data_set-965679ec) | Other product | Google Analytics 4: gates the operation and calls v1alpha properties.expandedDataSets.create with resolved resource paths and request fields. |
| [`ga4_update_expanded_data_set`](#tool-ga4_update_expanded_data_set-64a10242) | Other product | Google Analytics 4: gates the operation and calls v1alpha properties.expandedDataSets.patch with resolved resource paths and request fields. |
| [`ga4_delete_expanded_data_set`](#tool-ga4_delete_expanded_data_set-ab43c3a2) | Other product | Google Analytics 4: gates the operation and calls v1alpha properties.expandedDataSets.delete with resolved resource paths and request fields. |
| [`ga4_create_display_video_360_advertiser_link`](#tool-ga4_create_display_video_360_advertiser_link-e849512f) | Other product | Google Analytics 4: gates the operation and calls v1alpha properties.displayVideo360AdvertiserLinks.create with resolved resource paths and request fields. |
| [`ga4_update_display_video_360_advertiser_link`](#tool-ga4_update_display_video_360_advertiser_link-42004e81) | Other product | Google Analytics 4: gates the operation and calls v1alpha properties.displayVideo360AdvertiserLinks.patch with resolved resource paths and request fields. |
| [`ga4_delete_display_video_360_advertiser_link`](#tool-ga4_delete_display_video_360_advertiser_link-a3471c03) | Other product | Google Analytics 4: gates the operation and calls v1alpha properties.displayVideo360AdvertiserLinks.delete with resolved resource paths and request fields. |
| [`ga4_create_search_ads_360_link`](#tool-ga4_create_search_ads_360_link-786f999f) | Other product | Google Analytics 4: gates the operation and calls v1alpha properties.searchAds360Links.create with resolved resource paths and request fields. |
| [`ga4_update_search_ads_360_link`](#tool-ga4_update_search_ads_360_link-0918406d) | Other product | Google Analytics 4: gates the operation and calls v1alpha properties.searchAds360Links.patch with resolved resource paths and request fields. |
| [`ga4_delete_search_ads_360_link`](#tool-ga4_delete_search_ads_360_link-f032eea7) | Other product | Google Analytics 4: gates the operation and calls v1alpha properties.searchAds360Links.delete with resolved resource paths and request fields. |
| [`ga4_create_adsense_link`](#tool-ga4_create_adsense_link-ccd1df74) | Other product | Google Analytics 4: gates the operation and calls v1alpha properties.adSenseLinks.create with resolved resource paths and request fields. |
| [`ga4_delete_adsense_link`](#tool-ga4_delete_adsense_link-e37a68b2) | Other product | Google Analytics 4: gates the operation and calls v1alpha properties.adSenseLinks.delete with resolved resource paths and request fields. |
| [`ga4_create_subproperty_event_filter`](#tool-ga4_create_subproperty_event_filter-a94d78d8) | Other product | Google Analytics 4: gates the operation and calls v1alpha properties.subpropertyEventFilters.create with resolved resource paths and request fields. |
| [`ga4_update_subproperty_event_filter`](#tool-ga4_update_subproperty_event_filter-3d3f8137) | Other product | Google Analytics 4: gates the operation and calls v1alpha properties.subpropertyEventFilters.patch with resolved resource paths and request fields. |
| [`ga4_delete_subproperty_event_filter`](#tool-ga4_delete_subproperty_event_filter-73141cae) | Other product | Google Analytics 4: gates the operation and calls v1alpha properties.subpropertyEventFilters.delete with resolved resource paths and request fields. |
| [`ga4_create_rollup_property_source_link`](#tool-ga4_create_rollup_property_source_link-2aca5f9e) | Other product | Google Analytics 4: gates the operation and calls v1alpha properties.rollupPropertySourceLinks.create with resolved resource paths and request fields. |
| [`ga4_delete_rollup_property_source_link`](#tool-ga4_delete_rollup_property_source_link-0fda1ef1) | Other product | Google Analytics 4: gates the operation and calls v1alpha properties.rollupPropertySourceLinks.delete with resolved resource paths and request fields. |
| [`ga4_create_event_create_rule`](#tool-ga4_create_event_create_rule-d3b995d0) | Other product | Google Analytics 4: gates the operation and calls v1alpha properties.dataStreams.eventCreateRules.create with resolved resource paths and request fields. |
| [`ga4_update_event_create_rule`](#tool-ga4_update_event_create_rule-0b134222) | Other product | Google Analytics 4: gates the operation and calls v1alpha properties.dataStreams.eventCreateRules.patch with resolved resource paths and request fields. |
| [`ga4_delete_event_create_rule`](#tool-ga4_delete_event_create_rule-c70e565a) | Other product | Google Analytics 4: gates the operation and calls v1alpha properties.dataStreams.eventCreateRules.delete with resolved resource paths and request fields. |
| [`ga4_create_skadnetwork_conversion_value_schema`](#tool-ga4_create_skadnetwork_conversion_value_schema-1757448e) | Other product | Google Analytics 4: gates the operation and calls v1alpha properties.dataStreams.sKAdNetworkConversionValueSchema.create with resolved resource paths and request fields. |
| [`ga4_update_skadnetwork_conversion_value_schema`](#tool-ga4_update_skadnetwork_conversion_value_schema-aa509aee) | Other product | Google Analytics 4: gates the operation and calls v1alpha properties.dataStreams.sKAdNetworkConversionValueSchema.patch with resolved resource paths and request fields. |
| [`ga4_delete_skadnetwork_conversion_value_schema`](#tool-ga4_delete_skadnetwork_conversion_value_schema-9050cfb0) | Other product | Google Analytics 4: gates the operation and calls v1alpha properties.dataStreams.sKAdNetworkConversionValueSchema.delete with resolved resource paths and request fields. |
| [`ga4_create_property_access_binding`](#tool-ga4_create_property_access_binding-1217786e) | Other product | Google Analytics 4: gates the operation and calls v1alpha properties.accessBindings.create with resolved resource paths and request fields. |
| [`ga4_update_property_access_binding`](#tool-ga4_update_property_access_binding-201420b5) | Other product | Google Analytics 4: gates the operation and calls v1alpha properties.accessBindings.patch with resolved resource paths and request fields. |
| [`ga4_delete_property_access_binding`](#tool-ga4_delete_property_access_binding-fab249c2) | Other product | Google Analytics 4: gates the operation and calls v1alpha properties.accessBindings.delete with resolved resource paths and request fields. |
| [`ga4_create_account_access_binding`](#tool-ga4_create_account_access_binding-c4add6e6) | Other product | Google Analytics 4: gates the operation and calls v1alpha accounts.accessBindings.create with resolved resource paths and request fields. |
| [`ga4_update_account_access_binding`](#tool-ga4_update_account_access_binding-d5982499) | Other product | Google Analytics 4: gates the operation and calls v1alpha accounts.accessBindings.patch with resolved resource paths and request fields. |
| [`ga4_delete_account_access_binding`](#tool-ga4_delete_account_access_binding-9bade4ce) | Other product | Google Analytics 4: gates the operation and calls v1alpha accounts.accessBindings.delete with resolved resource paths and request fields. |
| [`ga4_create_property`](#tool-ga4_create_property-ca91208a) | Other product | Google Analytics 4: Executes the registered handler and returns formatted results. |
| [`ga4_update_property`](#tool-ga4_update_property-d78bfb2b) | Other product | Google Analytics 4: Executes the registered handler and returns formatted results. |
| [`ga4_delete_property`](#tool-ga4_delete_property-15d960f9) | Other product | Google Analytics 4: Executes the registered handler and returns formatted results. |
| [`ga4_update_data_retention`](#tool-ga4_update_data_retention-545fbf0b) | Other product | Google Analytics 4: Executes the registered handler and returns formatted results. |
| [`ga4_update_enhanced_measurement`](#tool-ga4_update_enhanced_measurement-49781573) | Other product | Google Analytics 4: Executes the registered handler and returns formatted results. |
| [`ga4_update_data_redaction`](#tool-ga4_update_data_redaction-075865f8) | Other product | Google Analytics 4: Executes the registered handler and returns formatted results. |
| [`ga4_update_attribution_settings`](#tool-ga4_update_attribution_settings-e26f627d) | Other product | Google Analytics 4: Executes the registered handler and returns formatted results. |
| [`ga4_update_google_signals`](#tool-ga4_update_google_signals-c9a4a347) | Other product | Google Analytics 4: Executes the registered handler and returns formatted results. |
| [`ga4_update_account`](#tool-ga4_update_account-dc217e72) | Other product | Google Analytics 4: Executes the registered handler and returns formatted results. |
| [`ga4_delete_account`](#tool-ga4_delete_account-6eac1e0c) | Other product | Google Analytics 4: Executes the registered handler and returns formatted results. |
| [`ga4_acknowledge_user_data_collection`](#tool-ga4_acknowledge_user_data_collection-94b0bd0f) | Other product | Google Analytics 4: Executes the registered handler and returns formatted results. |
| [`ga4_run_report`](#tool-ga4_run_report-a0a35566) | Other product | Google Analytics 4: Calls client.properties.runReport and returns the result or a formatted error. |
| [`ga4_check_compatibility`](#tool-ga4_check_compatibility-e1fb8747) | Other product | Google Analytics 4: calls properties.checkCompatibility and reports requested fields and other compatible choices; refuses empty requests. |
| [`ga4_run_realtime_report`](#tool-ga4_run_realtime_report-8f675773) | Other product | Google Analytics 4: Calls client.properties.runRealtimeReport and returns the result or a formatted error. |
| [`gtm_type_reference`](#tool-gtm_type_reference-78b97ace) | Supporting | Returns a local GTM type catalogue, identifies type codes, or searches the bundled gallery snapshot without an API call. |
| [`templates_describe_fields`](#tool-templates_describe_fields-9929ca43) | GTM | Calls client.accounts.containers.workspaces.templates, api.get and returns the result or a formatted error. |
| [`tags_type_profile`](#tool-tags_type_profile-673968b7) | GTM | Calls client.accounts.containers.workspaces.tags.list and returns the result or a formatted error. |

<a id="tool-accounts_list-a6a51f92"></a>

## accounts_list

Handler: Calls client.accounts.list and returns the result or a formatted error.

```text
List all GTM accounts accessible to the authenticated user. Returns account IDs, names, and share-data flags.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/accounts.ts#L14-L52) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "pageToken": {
      "type": "string",
      "description": "Continuation token to resume listing from a previous truncated result."
    },
    "maxPages": {
      "type": "integer",
      "exclusiveMinimum": 0,
      "description": "Maximum number of API pages to fetch (default 50). If more pages remain, the result includes truncated:true and a nextPageToken."
    },
    "includeGoogleTags": {
      "type": "boolean",
      "description": "Also include results from the Google Tags accounts."
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-accounts_get-3f5413c1"></a>

## accounts_get

Handler: Calls client.accounts.get and returns the result or a formatted error.

```text
Get details of a specific GTM account.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/accounts.ts#L53-L71) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID (numeric string)."
    }
  },
  "required": [
    "accountId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-containers_list-26c799fa"></a>

## containers_list

Handler: Calls client.accounts.containers.list and returns the result or a formatted error.

```text
List all GTM containers within a GTM account. Automatically follows pagination to return all containers.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/containers.ts#L14-L38) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "pageToken": {
      "type": "string",
      "description": "Continuation token to resume listing from a previous truncated result."
    },
    "maxPages": {
      "type": "integer",
      "exclusiveMinimum": 0,
      "description": "Maximum number of API pages to fetch (default 50). If more pages remain, the result includes truncated:true and a nextPageToken."
    }
  },
  "required": [
    "accountId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-containers_get-620e1e47"></a>

## containers_get

Handler: Calls client.accounts.containers.get and returns the result or a formatted error.

```text
Get details of a specific GTM container.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/containers.ts#L39-L61) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    }
  },
  "required": [
    "accountId",
    "containerId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-containers_create-a1907c0c"></a>

## containers_create

Handler: Calls client.accounts.containers.create and returns the result or a formatted error.

```text
[WRITE] Create a new GTM container. Requires GTM_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/containers.ts#L62-L97) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "name": {
      "type": "string",
      "description": "Container name."
    },
    "usageContext": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "web",
          "androidSdk5",
          "iosSdk5",
          "amp",
          "server"
        ]
      },
      "description": "Usage context(s) for the container."
    },
    "domainName": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Associated domain names."
    },
    "notes": {
      "type": "string",
      "description": "Optional notes."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this write operation."
    }
  },
  "required": [
    "accountId",
    "name",
    "usageContext",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-containers_set_tagging_server_urls-3378fe63"></a>

## containers_set_tagging_server_urls

Handler: Calls client.accounts.containers.get, client.accounts.containers.update and returns the result or a formatted error.

```text
[WRITE] Set a SERVER container's taggingServerUrls (the deployed tagging-server URL, e.g. from Cloud Run/Stape). Read-modify-write via containers.update so the other container fields are preserved; rejects a non-server container. Records the URL in config only — it does NOT deploy the host. Requires GTM_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/containers.ts#L98-L140) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The SERVER container ID."
    },
    "serverUrls": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "The https tagging-server URL(s) to record on the container."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this write operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "serverUrls",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-containers_snippet-d2a85006"></a>

## containers_snippet

Handler: Calls client.accounts.containers.snippet and returns the result or a formatted error.

```text
Get the GTM installation snippet (HTML/JS tagging code) for a container.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/containers.ts#L141-L163) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    }
  },
  "required": [
    "accountId",
    "containerId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-containers_lookup-846df597"></a>

## containers_lookup

Handler: Calls client.accounts.containers.lookup and returns the result or a formatted error.

```text
Look up a GTM container by its linked destination ID (e.g. a GA4 measurement ID or tag ID).
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/containers.ts#L164-L184) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "destinationId": {
      "type": "string",
      "description": "The destination/tag ID to look up (e.g. \"G-XXXXXXX\")."
    }
  },
  "required": [
    "destinationId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-containers_combine-3d0c38ee"></a>

## containers_combine

Handler: Calls client.accounts.containers.combine and returns the result or a formatted error.

```text
[WRITE] Combine (merge) another container into this one. Requires GTM_MCP_ENABLE_WRITES=true and confirm=true. ⚠️  This merges the source container identified by containerIdToCombine into the target container.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/containers.ts#L185-L228) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The target container ID (the surviving container)."
    },
    "containerIdToCombine": {
      "type": "string",
      "description": "The container ID to merge into the target."
    },
    "settingSource": {
      "type": "string",
      "enum": [
        "settingSourceUnspecified",
        "current",
        "other"
      ],
      "description": "Which container's settings to keep."
    },
    "allowUserPermissionFeatureUpdate": {
      "type": "boolean",
      "description": "Allow updating the user-permission feature during combine."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this write operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "containerIdToCombine",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-containers_move_tag_id-48f9cc80"></a>

## containers_move_tag_id

Handler: Calls client.accounts.containers.move\_tag\_id and returns the result or a formatted error.

```text
[WRITE] Move a Tag ID out of a container into a new container. Requires GTM_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/containers.ts#L229-L271) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The source container ID."
    },
    "tagId": {
      "type": "string",
      "description": "The Tag ID to move."
    },
    "tagName": {
      "type": "string",
      "description": "Name for the new tag created in the destination container."
    },
    "copySettings": {
      "type": "boolean",
      "description": "Whether to copy container settings."
    },
    "copyUsers": {
      "type": "boolean",
      "description": "Whether to copy users."
    },
    "copyTermsOfService": {
      "type": "boolean",
      "description": "Whether to copy terms of service."
    },
    "allowUserPermissionFeatureUpdate": {
      "type": "boolean"
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this write operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "tagId",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-destinations_list-cfa465fc"></a>

## destinations_list

Handler: Calls client.accounts.containers.destinations.list and returns the result or a formatted error.

```text
List all destinations (linked Google tags / GA4 destinations) for a GTM container.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/containers.ts#L272-L300) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    }
  },
  "required": [
    "accountId",
    "containerId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-destinations_get-5412f40b"></a>

## destinations_get

Handler: Calls client.accounts.containers.destinations.get and returns the result or a formatted error.

```text
Get details of a specific GTM destination.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/containers.ts#L301-L324) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    },
    "destinationId": {
      "type": "string",
      "description": "The destination ID."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "destinationId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-destinations_link-9b388ce2"></a>

## destinations_link

Handler: Calls client.accounts.containers.destinations.link and returns the result or a formatted error.

```text
[WRITE] Link a destination (Google tag / GA4 destination) to a GTM container. Requires GTM_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/containers.ts#L325-L358) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    },
    "destinationId": {
      "type": "string",
      "description": "The destination ID to link (e.g. \"G-XXXXXXX\")."
    },
    "allowUserPermissionFeatureUpdate": {
      "type": "boolean"
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this write operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "destinationId",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-workspaces_list-a41d4a66"></a>

## workspaces_list

Handler: Calls client.accounts.containers.workspaces.list and returns the result or a formatted error.

```text
List all workspaces within a GTM container. Automatically follows pagination to return all workspaces.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/workspaces.ts#L19-L41) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    },
    "pageToken": {
      "type": "string",
      "description": "Continuation token to resume listing from a previous truncated result."
    },
    "maxPages": {
      "type": "integer",
      "exclusiveMinimum": 0,
      "description": "Maximum number of API pages to fetch (default 50). If more pages remain, the result includes truncated:true and a nextPageToken."
    }
  },
  "required": [
    "accountId",
    "containerId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-workspaces_get-16b081ed"></a>

## workspaces_get

Handler: Calls client.accounts.containers.workspaces.get and returns the result or a formatted error.

```text
Get details of a specific GTM workspace.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/workspaces.ts#L42-L63) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-workspaces_create-edb58824"></a>

## workspaces_create

Handler: Calls client.accounts.containers.workspaces.create and returns the result or a formatted error.

```text
[WRITE] Create a new workspace. Requires GTM_MCP_ENABLE_WRITES=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/workspaces.ts#L64-L93) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    },
    "name": {
      "type": "string",
      "description": "Workspace name."
    },
    "description": {
      "type": "string",
      "description": "Workspace description."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this write operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "name",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-workspace_get_status-8e01fe5e"></a>

## workspace_get_status

Handler: Calls client.accounts.containers.workspaces.getStatus and returns the result or a formatted error.

```text
Get the status of a GTM workspace: the list of changed entities (workspaceChange) relative to the latest container version, plus any merge conflicts. Use this to review a change diff before creating a version or publishing.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/workspaces.ts#L94-L125) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-workspace_sync-a369a3b7"></a>

## workspace_sync

Handler: Calls client.accounts.containers.workspaces.sync and returns the result or a formatted error.

```text
Syncs a workspace to the latest container version by updating all unmodified workspace entities. Returns a list of merge conflicts if any.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/workspaces.ts#L126-L155) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-workspace_resolve_conflict-50253d6f"></a>

## workspace_resolve_conflict

Handler: Calls client.accounts.containers.workspaces.resolve\_conflict and returns the result or a formatted error.

```text
Resolve a merge conflict for a workspace entity. You supply the resolved entity body plus its type; the GTM API wraps it in an Entity envelope ({ "tag": {...} } / { "trigger": {...} } / …), which this tool builds for you. NOTE: This is a complex operation — review the GTM UI conflict resolution first.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/workspaces.ts#L156-L253) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID."
    },
    "fingerprint": {
      "type": "string",
      "description": "The workspace fingerprint at the time of conflict resolution."
    },
    "entityType": {
      "type": "string",
      "enum": [
        "tag",
        "trigger",
        "variable",
        "folder",
        "client",
        "customTemplate",
        "gtagConfig",
        "transformation",
        "zone",
        "builtInVariable"
      ],
      "description": "Which Entity slot the resolved body fills. The resolve_conflict API takes an Entity envelope, so a resolved tag is sent as { \"tag\": {...} }, a trigger as { \"trigger\": {...} }, etc."
    },
    "entityJson": {
      "type": "string",
      "description": "JSON string of the RAW entity body (e.g. the tag object itself), NOT the Entity envelope — it is wrapped under entityType for you. If you pass an already-wrapped { \"<entityType>\": {...} } object it is used as-is."
    },
    "changeStatus": {
      "type": "string",
      "enum": [
        "added",
        "deleted",
        "modified",
        "none"
      ],
      "description": "How the resolved entity changed relative to the base version (added/deleted/modified/none). Optional."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this write operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "fingerprint",
    "entityType",
    "entityJson",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-tags_list-5c82ac45"></a>

## tags_list

Handler: Calls client.accounts.containers.workspaces.tags.list and returns the result or a formatted error.

```text
List all GTM tags in a workspace. Automatically follows pagination to return all tags.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/tags.ts#L40-L62) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID."
    },
    "pageToken": {
      "type": "string",
      "description": "Continuation token to resume listing from a previous truncated result."
    },
    "maxPages": {
      "type": "integer",
      "exclusiveMinimum": 0,
      "description": "Maximum number of API pages to fetch (default 50). If more pages remain, the result includes truncated:true and a nextPageToken."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-tags_get-f4cf2d2c"></a>

## tags_get

Handler: Calls client.accounts.containers.workspaces.tags.get and returns the result or a formatted error.

```text
Get details of a specific GTM tag.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/tags.ts#L63-L84) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID."
    },
    "tagId": {
      "type": "string",
      "description": "The GTM tag ID."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "tagId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-tags_create-a7fd6bc5"></a>

## tags_create

Handler: Calls client.accounts.containers.workspaces.tags.create and returns the result or a formatted error.

```text
[WRITE] Create a new GTM tag. Requires GTM_MCP_ENABLE_WRITES=true and confirm=true. Pass the full tag configuration as parameters.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/tags.ts#L85-L141) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID."
    },
    "name": {
      "type": "string",
      "description": "Tag name."
    },
    "type": {
      "type": "string",
      "description": "GTM tag type, EXACTLY as the API names it. There is no \"ga4\" type. GA4 event: \"gaawe\". Google tag / GA4 configuration: \"googtag\" (legacy GA4 config: \"gaawc\"). Custom HTML: \"html\". Custom Image: \"img\". Universal Analytics (legacy): \"ua\". Google Ads conversion: \"awct\". Google Ads remarketing: \"sp\". Floodlight counter: \"flc\". A tag built on a CUSTOM or community-gallery template uses a \"cvt_...\" type: call templates_list and pass its `tagType` field through verbatim. Do not assemble that string yourself — a gallery template's type is built from the gallery id, not the workspace templateId, and a wrong guess is accepted by the API and then renders in GTM as an unrecognised tag type. templates_import_from_gallery returns `tagType` too, so an install and its first tag need no lookup in between."
    },
    "parameter": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "description": "template | integer | boolean | list | map | tagReference | triggerReference | template"
          },
          "key": {
            "type": "string",
            "description": "Parameter key/name (omit for entries inside a list)."
          },
          "value": {
            "type": "string",
            "description": "Scalar value (template/integer/boolean/reference). May be a GTM variable like {{Click Text}}."
          },
          "list": {
            "type": "array",
            "items": {
              "$ref": "#/properties/parameter/items"
            },
            "description": "Child parameters when type=\"list\"."
          },
          "map": {
            "type": "array",
            "items": {
              "$ref": "#/properties/parameter/items"
            },
            "description": "Child parameters when type=\"map\"."
          }
        },
        "required": [
          "type"
        ],
        "additionalProperties": false
      },
      "description": "GTM parameter list — supports NESTED list/map params. Example (a GA4 event parameter table): [{\"type\":\"list\",\"key\":\"eventSettingsTable\",\"list\":[{\"type\":\"map\",\"map\":[{\"type\":\"template\",\"key\":\"parameter\",\"value\":\"click_text\"},{\"type\":\"template\",\"key\":\"parameterValue\",\"value\":\"{{Click Text}}\"}]}]}]. A GA4 EVENT TAG (type \"gaawe\") MUST carry a measurement id or the API rejects it: send BOTH {\"type\":\"tagReference\",\"key\":\"measurementId\",\"value\":\"<googtag tag id, or empty string>\"} AND {\"type\":\"template\",\"key\":\"measurementIdOverride\",\"value\":\"G-XXXXXXX\"}, plus {\"type\":\"template\",\"key\":\"eventName\",\"value\":\"<event>\"}. Read the G- id from the existing Google tag in this container (type \"googtag\", parameter key \"tagId\") via tags_list rather than inventing one."
    },
    "firingTriggerId": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "IDs of firing triggers."
    },
    "blockingTriggerId": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "IDs of blocking triggers."
    },
    "notes": {
      "type": "string",
      "description": "Optional notes."
    },
    "parentFolderId": {
      "type": "string",
      "description": "Parent folder ID."
    },
    "paused": {
      "type": "boolean",
      "description": "Whether the tag is paused."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this write operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "name",
    "type",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-tags_update-59a4d940"></a>

## tags_update

Handler: Calls client.accounts.containers.workspaces.tags.get, client.accounts.containers.workspaces.tags.update and returns the result or a formatted error.

```text
[WRITE] Update an existing GTM tag (read-modify-write). Requires GTM_MCP_ENABLE_WRITES=true and confirm=true. GTM's API replaces the WHOLE tag on update, so this tool first fetches the tag and only overlays the fields you pass — omitted fields are preserved. `parameter` is MERGED with the existing parameters BY KEY (a same-key param replaces, new keys are added, untouched keys are kept), so you will NOT wipe a GA4 tag's eventName/measurementId. To add GA4 EVENT parameters to a gaawe tag, prefer tags_add_ga4_event_parameters (event params live in the nested eventSettingsTable, which this generic parameter list cannot express).
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/tags.ts#L142-L204) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID."
    },
    "tagId": {
      "type": "string",
      "description": "The GTM tag ID to update."
    },
    "name": {
      "type": "string",
      "description": "New tag name."
    },
    "type": {
      "type": "string",
      "description": "New tag type, using the same exact strings as tags_create (\"gaawe\", \"googtag\", \"html\", ...). There is no \"ga4\" type."
    },
    "parameter": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "description": "template | integer | boolean | list | map | tagReference | triggerReference | template"
          },
          "key": {
            "type": "string",
            "description": "Parameter key/name (omit for entries inside a list)."
          },
          "value": {
            "type": "string",
            "description": "Scalar value (template/integer/boolean/reference). May be a GTM variable like {{Click Text}}."
          },
          "list": {
            "type": "array",
            "items": {
              "$ref": "#/properties/parameter/items"
            },
            "description": "Child parameters when type=\"list\"."
          },
          "map": {
            "type": "array",
            "items": {
              "$ref": "#/properties/parameter/items"
            },
            "description": "Child parameters when type=\"map\"."
          }
        },
        "required": [
          "type"
        ],
        "additionalProperties": false
      },
      "description": "GTM parameter list — supports NESTED list/map params. Example (a GA4 event parameter table): [{\"type\":\"list\",\"key\":\"eventSettingsTable\",\"list\":[{\"type\":\"map\",\"map\":[{\"type\":\"template\",\"key\":\"parameter\",\"value\":\"click_text\"},{\"type\":\"template\",\"key\":\"parameterValue\",\"value\":\"{{Click Text}}\"}]}]}]."
    },
    "firingTriggerId": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "IDs of firing triggers."
    },
    "blockingTriggerId": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "IDs of blocking triggers."
    },
    "notes": {
      "type": "string",
      "description": "Optional notes."
    },
    "paused": {
      "type": "boolean",
      "description": "Whether the tag is paused."
    },
    "fingerprint": {
      "type": "string",
      "description": "Current tag fingerprint (for optimistic locking). Defaults to the fetched one."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this write operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "tagId",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-tags_add_ga4_event_parameters-84c5c021"></a>

## tags_add_ga4_event_parameters

Handler: Calls client.accounts.containers.workspaces.tags.get, client.accounts.containers.workspaces.tags.update and returns the result or a formatted error.

```text
[WRITE] Add GA4 event parameters to a GA4 Event tag (type "gaawe"). Requires GTM_MCP_ENABLE_WRITES=true and confirm=true. Fetches the tag, APPENDS the parameters to its eventSettingsTable (the correct place for GA4 event parameters — top-level params are ignored by GA4 event tags), and saves the FULL tag so eventName/measurementId stay intact. A parameter whose name already exists has its value updated (not duplicated). Values may be GTM variables, e.g. {{Click Text}}.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/tags.ts#L205-L250) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID."
    },
    "tagId": {
      "type": "string",
      "description": "The GA4 Event (gaawe) tag ID to update."
    },
    "parameters": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "value": {
            "type": "string"
          }
        },
        "required": [
          "name",
          "value"
        ],
        "additionalProperties": false
      },
      "minItems": 1,
      "description": "Event parameters to add, e.g. [{\"name\":\"click_text\",\"value\":\"{{Click Text}}\"},{\"name\":\"page_path\",\"value\":\"{{Page Path}}\"}]."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this write operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "tagId",
    "parameters",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-tags_delete-3cd3c99b"></a>

## tags_delete

Handler: Calls client.accounts.containers.workspaces.tags.delete and returns the result or a formatted error.

```text
[DELETE] Delete a GTM tag. Requires GTM_MCP_ENABLE_DELETES=true and confirm=true. This is irreversible in the workspace (the tag is removed from the workspace).
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/tags.ts#L251-L287) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID."
    },
    "tagId": {
      "type": "string",
      "description": "The GTM tag ID to delete."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this delete operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "tagId",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-triggers_list-47215578"></a>

## triggers_list

Handler: Calls client.accounts.containers.workspaces.triggers.list and returns the result or a formatted error.

```text
List all GTM triggers in a workspace. Automatically follows pagination to return all triggers.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/triggers.ts#L112-L133) · Schema: tools/list.

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
    "pageToken": {
      "type": "string",
      "description": "Continuation token to resume listing from a previous truncated result."
    },
    "maxPages": {
      "type": "integer",
      "exclusiveMinimum": 0,
      "description": "Maximum number of API pages to fetch (default 50). If more pages remain, the result includes truncated:true and a nextPageToken."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-triggers_get-f2479571"></a>

## triggers_get

Handler: Calls client.accounts.containers.workspaces.triggers.get and returns the result or a formatted error.

```text
Get a specific GTM trigger.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/triggers.ts#L134-L152) · Schema: tools/list.

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
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-triggers_create-858f605a"></a>

## triggers_create

Handler: Calls client.accounts.containers.workspaces.triggers.create and returns the result or a formatted error.

```text
[WRITE] Create a GTM trigger. Requires GTM_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/triggers.ts#L153-L194) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

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
    "name": {
      "type": "string",
      "description": "Trigger name."
    },
    "type": {
      "type": "string",
      "description": "Trigger type (e.g. \"click\", \"pageview\", \"customEvent\", \"domReady\", \"windowLoaded\", \"historyChange\", \"jsError\", \"scrollDepth\", \"elementVisibility\", \"timer\", \"youTubeVideo\", \"formSubmission\", \"linkClick\")."
    },
    "filter": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "description": "Condition type: contains, cssSelector, endsWith, equals, greater, greaterOrEquals, less, lessOrEquals, matchRegex, startsWith, urlMatches."
          },
          "parameter": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "type": {
                  "type": "string",
                  "description": "Almost always \"template\"."
                },
                "key": {
                  "type": "string",
                  "description": "MUST be \"arg0\" or \"arg1\" — GTM accepts no other key here, and anything else fails with \"Parameter key is unknown\". arg0 is the LEFT side (the variable being tested), arg1 is the RIGHT side (the value compared against)."
                },
                "value": {
                  "type": "string",
                  "description": "For arg0, a variable reference in double braces, e.g. \"{{Click URL}}\", \"{{_event}}\", \"{{Page Path}}\". For arg1, the literal to compare, e.g. \"mailto:\". A built-in variable referenced in arg0 must be ENABLED in the workspace first — see built_in_variables_enable (Click URL is \"clickUrl\", Click Text \"clickText\", Form ID \"formId\", and so on)."
                }
              },
              "required": [
                "type"
              ],
              "additionalProperties": false
            },
            "description": "EXACTLY TWO entries, keyed arg0 then arg1. Example, a link click on a mailto: address: [{\"type\":\"template\",\"key\":\"arg0\",\"value\":\"{{Click URL}}\"},{\"type\":\"template\",\"key\":\"arg1\",\"value\":\"mailto:\"}] with condition type \"contains\"."
          }
        },
        "required": [
          "type",
          "parameter"
        ],
        "additionalProperties": false
      },
      "description": "Conditions that must be met for the trigger to fire (\"fires on SOME …\")."
    },
    "customEventFilter": {
      "$ref": "#/properties/filter",
      "description": "Used for custom event triggers."
    },
    "autoEventFilter": {
      "$ref": "#/properties/filter",
      "description": "Conditions for auto-event triggers (legacy; most scopes use `filter`)."
    },
    "eventName": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string"
        },
        "key": {
          "type": "string"
        },
        "value": {
          "type": "string"
        }
      },
      "required": [
        "type"
      ],
      "additionalProperties": false,
      "description": "TIMER triggers ONLY: the name of the GTM event the timer fires, as a single Parameter {type:\"template\", value:\"gtm.timer\"} (no key). Defaults to gtm.timer when omitted. Do NOT send this for a customEvent trigger: GTM rejects it. A customEvent trigger carries its name in `customEventFilter` as EXACTLY ONE condition, {{_event}} equals <name>, e.g. [{\"type\":\"equals\",\"parameter\":[{\"type\":\"template\",\"key\":\"arg0\",\"value\":\"{{_event}}\"},{\"type\":\"template\",\"key\":\"arg1\",\"value\":\"purchase\"}]}]. Any further scoping goes in `filter`."
    },
    "interval": {
      "$ref": "#/properties/eventName",
      "description": "Timer trigger: firing interval in MILLISECONDS as a single Parameter {type:\"template\", value:\"5000\"} (no key). This is a dedicated TOP-LEVEL GTM field — do NOT put it in `parameter`."
    },
    "intervalSeconds": {
      "$ref": "#/properties/eventName",
      "description": "Timer trigger: firing interval in SECONDS as a single Parameter (no key). Top-level GTM field. Use interval (ms) OR intervalSeconds, not both."
    },
    "limit": {
      "$ref": "#/properties/eventName",
      "description": "Timer trigger: max number of times the timer fires, as a single Parameter {type:\"template\", value:\"3\"} (no key). Dedicated TOP-LEVEL GTM field — do NOT put it in `parameter`."
    },
    "parameter": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "description": "template | integer | boolean | list | map | tagReference | triggerReference | template"
          },
          "key": {
            "type": "string",
            "description": "Parameter key/name (omit for entries inside a list)."
          },
          "value": {
            "type": "string",
            "description": "Scalar value (template/integer/boolean/reference). May be a GTM variable like {{Click Text}}."
          },
          "list": {
            "type": "array",
            "items": {
              "$ref": "#/properties/parameter/items"
            },
            "description": "Child parameters when type=\"list\"."
          },
          "map": {
            "type": "array",
            "items": {
              "$ref": "#/properties/parameter/items"
            },
            "description": "Child parameters when type=\"map\"."
          }
        },
        "required": [
          "type"
        ],
        "additionalProperties": false
      },
      "description": "Trigger settings as a parameter list — e.g. a YouTube Video trigger's captureStart/progressThresholdsPercent, scroll thresholds, element-visibility selector. NOTE: a timer's interval/limit are the separate top-level `interval`/`limit` fields, NOT here."
    },
    "waitForTags": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "number"
        },
        {
          "type": "string"
        },
        {
          "$ref": "#/properties/eventName"
        }
      ],
      "description": "Form/link trigger: send a plain boolean (true/false). A Parameter {type:\"boolean\", value:\"true\"} is also accepted."
    },
    "checkValidation": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "number"
        },
        {
          "type": "string"
        },
        {
          "$ref": "#/properties/eventName"
        }
      ],
      "description": "Form/link trigger: send a plain boolean (true/false). A Parameter object is also accepted."
    },
    "waitForTagsTimeout": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "number"
        },
        {
          "type": "string"
        },
        {
          "$ref": "#/properties/eventName"
        }
      ],
      "description": "Form/link trigger: timeout in milliseconds. Send a plain number (e.g. 2000). A Parameter object is also accepted."
    },
    "notes": {
      "type": "string"
    },
    "parentFolderId": {
      "type": "string"
    },
    "confirm": {
      "type": "boolean"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "name",
    "type",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-triggers_update-7af0ab6f"></a>

## triggers_update

Handler: Calls client.accounts.containers.workspaces.triggers.get, client.accounts.containers.workspaces.triggers.update and returns the result or a formatted error.

```text
[WRITE] Update a GTM trigger (read-modify-write — omitted fields are preserved; `parameter` is merged by key). Requires GTM_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/triggers.ts#L195-L252) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

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
    "name": {
      "type": "string"
    },
    "type": {
      "type": "string"
    },
    "filter": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "description": "Condition type: contains, cssSelector, endsWith, equals, greater, greaterOrEquals, less, lessOrEquals, matchRegex, startsWith, urlMatches."
          },
          "parameter": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "type": {
                  "type": "string",
                  "description": "Almost always \"template\"."
                },
                "key": {
                  "type": "string",
                  "description": "MUST be \"arg0\" or \"arg1\" — GTM accepts no other key here, and anything else fails with \"Parameter key is unknown\". arg0 is the LEFT side (the variable being tested), arg1 is the RIGHT side (the value compared against)."
                },
                "value": {
                  "type": "string",
                  "description": "For arg0, a variable reference in double braces, e.g. \"{{Click URL}}\", \"{{_event}}\", \"{{Page Path}}\". For arg1, the literal to compare, e.g. \"mailto:\". A built-in variable referenced in arg0 must be ENABLED in the workspace first — see built_in_variables_enable (Click URL is \"clickUrl\", Click Text \"clickText\", Form ID \"formId\", and so on)."
                }
              },
              "required": [
                "type"
              ],
              "additionalProperties": false
            },
            "description": "EXACTLY TWO entries, keyed arg0 then arg1. Example, a link click on a mailto: address: [{\"type\":\"template\",\"key\":\"arg0\",\"value\":\"{{Click URL}}\"},{\"type\":\"template\",\"key\":\"arg1\",\"value\":\"mailto:\"}] with condition type \"contains\"."
          }
        },
        "required": [
          "type",
          "parameter"
        ],
        "additionalProperties": false
      }
    },
    "customEventFilter": {
      "$ref": "#/properties/filter"
    },
    "autoEventFilter": {
      "$ref": "#/properties/filter"
    },
    "eventName": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string"
        },
        "key": {
          "type": "string"
        },
        "value": {
          "type": "string"
        }
      },
      "required": [
        "type"
      ],
      "additionalProperties": false,
      "description": "TIMER triggers ONLY: the name of the GTM event the timer fires, as a single Parameter {type:\"template\", value:\"gtm.timer\"} (no key). Defaults to gtm.timer when omitted. Do NOT send this for a customEvent trigger: GTM rejects it. A customEvent trigger carries its name in `customEventFilter` as EXACTLY ONE condition, {{_event}} equals <name>, e.g. [{\"type\":\"equals\",\"parameter\":[{\"type\":\"template\",\"key\":\"arg0\",\"value\":\"{{_event}}\"},{\"type\":\"template\",\"key\":\"arg1\",\"value\":\"purchase\"}]}]. Any further scoping goes in `filter`."
    },
    "interval": {
      "$ref": "#/properties/eventName",
      "description": "Timer trigger: firing interval in ms as a single Parameter. Top-level GTM field — not in `parameter`."
    },
    "intervalSeconds": {
      "$ref": "#/properties/eventName",
      "description": "Timer trigger: firing interval in seconds as a single Parameter. Top-level GTM field."
    },
    "limit": {
      "$ref": "#/properties/eventName",
      "description": "Timer trigger: max fire count as a single Parameter. Top-level GTM field — not in `parameter`."
    },
    "parameter": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "description": "template | integer | boolean | list | map | tagReference | triggerReference | template"
          },
          "key": {
            "type": "string",
            "description": "Parameter key/name (omit for entries inside a list)."
          },
          "value": {
            "type": "string",
            "description": "Scalar value (template/integer/boolean/reference). May be a GTM variable like {{Click Text}}."
          },
          "list": {
            "type": "array",
            "items": {
              "$ref": "#/properties/parameter/items"
            },
            "description": "Child parameters when type=\"list\"."
          },
          "map": {
            "type": "array",
            "items": {
              "$ref": "#/properties/parameter/items"
            },
            "description": "Child parameters when type=\"map\"."
          }
        },
        "required": [
          "type"
        ],
        "additionalProperties": false
      },
      "description": "GTM parameter list — supports NESTED list/map params. Example (a GA4 event parameter table): [{\"type\":\"list\",\"key\":\"eventSettingsTable\",\"list\":[{\"type\":\"map\",\"map\":[{\"type\":\"template\",\"key\":\"parameter\",\"value\":\"click_text\"},{\"type\":\"template\",\"key\":\"parameterValue\",\"value\":\"{{Click Text}}\"}]}]}]."
    },
    "waitForTags": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "number"
        },
        {
          "type": "string"
        },
        {
          "$ref": "#/properties/eventName"
        }
      ],
      "description": "Form/link trigger: plain boolean, or a Parameter object."
    },
    "checkValidation": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "number"
        },
        {
          "type": "string"
        },
        {
          "$ref": "#/properties/eventName"
        }
      ],
      "description": "Form/link trigger: plain boolean, or a Parameter object."
    },
    "waitForTagsTimeout": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "number"
        },
        {
          "type": "string"
        },
        {
          "$ref": "#/properties/eventName"
        }
      ],
      "description": "Form/link trigger: timeout in milliseconds as a plain number, or a Parameter object."
    },
    "notes": {
      "type": "string"
    },
    "fingerprint": {
      "type": "string"
    },
    "confirm": {
      "type": "boolean"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "triggerId",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-triggers_delete-134b8aed"></a>

## triggers_delete

Handler: Calls client.accounts.containers.workspaces.triggers.delete and returns the result or a formatted error.

```text
[DELETE] Delete a GTM trigger. Requires GTM_MCP_ENABLE_DELETES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/triggers.ts#L253-L285) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

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
    "confirm": {
      "type": "boolean"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "triggerId",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-variables_list-516c3ba6"></a>

## variables_list

Handler: Calls client.accounts.containers.workspaces.variables.list and returns the result or a formatted error.

```text
List all user-defined GTM variables in a workspace. Automatically follows pagination to return all variables.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/variables.ts#L20-L41) · Schema: tools/list.

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
    "pageToken": {
      "type": "string",
      "description": "Continuation token to resume listing from a previous truncated result."
    },
    "maxPages": {
      "type": "integer",
      "exclusiveMinimum": 0,
      "description": "Maximum number of API pages to fetch (default 50). If more pages remain, the result includes truncated:true and a nextPageToken."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-variables_get-5121125d"></a>

## variables_get

Handler: Calls client.accounts.containers.workspaces.variables.get and returns the result or a formatted error.

```text
Get a specific GTM variable.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/variables.ts#L42-L60) · Schema: tools/list.

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
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-variables_create-5ffbdad2"></a>

## variables_create

Handler: Calls client.accounts.containers.workspaces.variables.create and returns the result or a formatted error.

```text
[WRITE] Create a GTM variable. Requires GTM_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/variables.ts#L61-L102) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

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
    "name": {
      "type": "string",
      "description": "Variable name."
    },
    "type": {
      "type": "string",
      "description": "Variable type (e.g. \"v\" for data layer, \"k\" for first-party cookie, \"u\" for URL, \"c\" for constant, \"jsm\" for custom JS, \"smm\" for lookup table, \"gas\" for GA settings)."
    },
    "parameter": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "description": "template | integer | boolean | list | map | tagReference | triggerReference | template"
          },
          "key": {
            "type": "string",
            "description": "Parameter key/name (omit for entries inside a list)."
          },
          "value": {
            "type": "string",
            "description": "Scalar value (template/integer/boolean/reference). May be a GTM variable like {{Click Text}}."
          },
          "list": {
            "type": "array",
            "items": {
              "$ref": "#/properties/parameter/items"
            },
            "description": "Child parameters when type=\"list\"."
          },
          "map": {
            "type": "array",
            "items": {
              "$ref": "#/properties/parameter/items"
            },
            "description": "Child parameters when type=\"map\"."
          }
        },
        "required": [
          "type"
        ],
        "additionalProperties": false
      },
      "description": "GTM parameter list — supports NESTED list/map params. Example (a GA4 event parameter table): [{\"type\":\"list\",\"key\":\"eventSettingsTable\",\"list\":[{\"type\":\"map\",\"map\":[{\"type\":\"template\",\"key\":\"parameter\",\"value\":\"click_text\"},{\"type\":\"template\",\"key\":\"parameterValue\",\"value\":\"{{Click Text}}\"}]}]}]."
    },
    "notes": {
      "type": "string"
    },
    "parentFolderId": {
      "type": "string"
    },
    "enablingTriggerId": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "disablingTriggerId": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "confirm": {
      "type": "boolean"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "name",
    "type",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-variables_update-ad7a0ba3"></a>

## variables_update

Handler: Calls client.accounts.containers.workspaces.variables.get, client.accounts.containers.workspaces.variables.update and returns the result or a formatted error.

```text
[WRITE] Update a GTM variable (read-modify-write — omitted fields are preserved; `parameter` is merged by key). Requires GTM_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/variables.ts#L103-L150) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

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
    "name": {
      "type": "string"
    },
    "type": {
      "type": "string"
    },
    "parameter": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "description": "template | integer | boolean | list | map | tagReference | triggerReference | template"
          },
          "key": {
            "type": "string",
            "description": "Parameter key/name (omit for entries inside a list)."
          },
          "value": {
            "type": "string",
            "description": "Scalar value (template/integer/boolean/reference). May be a GTM variable like {{Click Text}}."
          },
          "list": {
            "type": "array",
            "items": {
              "$ref": "#/properties/parameter/items"
            },
            "description": "Child parameters when type=\"list\"."
          },
          "map": {
            "type": "array",
            "items": {
              "$ref": "#/properties/parameter/items"
            },
            "description": "Child parameters when type=\"map\"."
          }
        },
        "required": [
          "type"
        ],
        "additionalProperties": false
      },
      "description": "GTM parameter list — supports NESTED list/map params. Example (a GA4 event parameter table): [{\"type\":\"list\",\"key\":\"eventSettingsTable\",\"list\":[{\"type\":\"map\",\"map\":[{\"type\":\"template\",\"key\":\"parameter\",\"value\":\"click_text\"},{\"type\":\"template\",\"key\":\"parameterValue\",\"value\":\"{{Click Text}}\"}]}]}]."
    },
    "notes": {
      "type": "string"
    },
    "fingerprint": {
      "type": "string"
    },
    "confirm": {
      "type": "boolean"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "variableId",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-variables_delete-a3643aad"></a>

## variables_delete

Handler: Calls client.accounts.containers.workspaces.variables.delete and returns the result or a formatted error.

```text
[DELETE] Delete a GTM variable. Requires GTM_MCP_ENABLE_DELETES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/variables.ts#L151-L183) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

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
    "confirm": {
      "type": "boolean"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "variableId",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-folders_list-9c7b5f4f"></a>

## folders_list

Handler: Calls client.accounts.containers.workspaces.folders.list and returns the result or a formatted error.

```text
List all GTM folders in a workspace. Automatically follows pagination to return all folders.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/folders.ts#L15-L36) · Schema: tools/list.

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
    "pageToken": {
      "type": "string",
      "description": "Continuation token to resume listing from a previous truncated result."
    },
    "maxPages": {
      "type": "integer",
      "exclusiveMinimum": 0,
      "description": "Maximum number of API pages to fetch (default 50). If more pages remain, the result includes truncated:true and a nextPageToken."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-folders_get-0c315e08"></a>

## folders_get

Handler: Calls client.accounts.containers.workspaces.folders.get and returns the result or a formatted error.

```text
Get a specific GTM folder.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/folders.ts#L37-L55) · Schema: tools/list.

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
    "folderId": {
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "folderId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-folders_entities-fef5b7d3"></a>

## folders_entities

Handler: Calls client.accounts.containers.workspaces.folders.entities and returns the result or a formatted error.

```text
List all entities (tags, triggers, variables) within a specific GTM folder. Automatically follows pagination to return all entities.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/folders.ts#L56-L111) · Schema: tools/list.

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
    "folderId": {
      "type": "string"
    },
    "pageToken": {
      "type": "string",
      "description": "Continuation token to resume listing from a previous truncated result."
    },
    "maxPages": {
      "type": "integer",
      "exclusiveMinimum": 0,
      "description": "Maximum number of API pages to fetch (default 50). GTM returns one nextPageToken for tags, triggers and variables together, so this bounds the whole walk rather than each collection."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "folderId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-folders_create-d3837858"></a>

## folders_create

Handler: Calls client.accounts.containers.workspaces.folders.create and returns the result or a formatted error.

```text
[WRITE] Create a GTM folder. Requires GTM_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/folders.ts#L112-L140) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

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
    "name": {
      "type": "string"
    },
    "notes": {
      "type": "string"
    },
    "confirm": {
      "type": "boolean"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "name",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-folders_update-002b2fe6"></a>

## folders_update

Handler: Calls client.accounts.containers.workspaces.folders.get, client.accounts.containers.workspaces.folders.update and returns the result or a formatted error.

```text
[WRITE] Update a GTM folder (read-modify-write: omitted fields are preserved). Requires GTM_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/folders.ts#L141-L189) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

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
    "folderId": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "notes": {
      "type": "string"
    },
    "fingerprint": {
      "type": "string"
    },
    "confirm": {
      "type": "boolean"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "folderId",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-folders_delete-7bf02d3c"></a>

## folders_delete

Handler: Calls client.accounts.containers.workspaces.folders.delete and returns the result or a formatted error.

```text
[DELETE] Delete a GTM folder. Requires GTM_MCP_ENABLE_DELETES=true and confirm=true. Contents of the folder will be unfoldered, not deleted.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/folders.ts#L190-L216) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

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
    "folderId": {
      "type": "string"
    },
    "confirm": {
      "type": "boolean"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "folderId",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-folders_move_entities-12118eed"></a>

## folders_move_entities

Handler: Calls client.accounts.containers.workspaces.folders.move\_entities\_to\_folder and returns the result or a formatted error.

```text
[WRITE] Move tags/triggers/variables into a folder. Requires GTM_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/folders.ts#L217-L251) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

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
    "folderId": {
      "type": "string",
      "description": "The destination folder ID."
    },
    "tagId": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Tag IDs to move."
    },
    "triggerId": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Trigger IDs to move."
    },
    "variableId": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Variable IDs to move."
    },
    "confirm": {
      "type": "boolean"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "folderId",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-built_in_variables_list-610e1f91"></a>

## built_in_variables_list

Handler: Calls client.accounts.containers.workspaces.built\_in\_variables.list and returns the result or a formatted error.

```text
List all currently enabled built-in variables in a GTM workspace.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/builtInVariables.ts#L37-L65) · Schema: tools/list.

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
    "pageToken": {
      "type": "string",
      "description": "Continuation token to resume listing from a previous truncated result."
    },
    "maxPages": {
      "type": "integer",
      "exclusiveMinimum": 0,
      "description": "Maximum number of API pages to fetch (default 50). If more pages remain, the result includes truncated:true and a nextPageToken."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-built_in_variables_enable-d180d877"></a>

## built_in_variables_enable

Handler: Calls client.accounts.containers.workspaces.built\_in\_variables.create and returns the result or a formatted error.

```text
[WRITE] Enable one or more built-in variables in a GTM workspace. Requires GTM_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/builtInVariables.ts#L66-L99) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

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
    "types": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Array of built-in variable types to enable. Known types include: pageUrl, pageHostname, pagePath, referrer, event, clickElement, clickClasses, clickId, clickTarget, clickUrl, and more."
    },
    "confirm": {
      "type": "boolean"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "types",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-built_in_variables_disable-6fb23cce"></a>

## built_in_variables_disable

Handler: Calls client.accounts.containers.workspaces.built\_in\_variables.delete and returns the result or a formatted error.

```text
[DELETE] Disable one or more built-in variables in a GTM workspace. Requires GTM_MCP_ENABLE_DELETES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/builtInVariables.ts#L100-L131) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

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
    "types": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Array of built-in variable types to disable."
    },
    "confirm": {
      "type": "boolean"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "types",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-built_in_variables_revert-cb49f06f"></a>

## built_in_variables_revert

Handler: Calls client.accounts.containers.workspaces.built\_in\_variables.revert and returns the result or a formatted error.

```text
[WRITE] Revert changes to a built-in variable in the workspace to the original container version. Requires GTM_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/builtInVariables.ts#L132-L165) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

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
    "type": {
      "type": "string",
      "description": "The built-in variable type to revert."
    },
    "confirm": {
      "type": "boolean"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "type",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-create_gtm_tracking_tag-3aa3598d"></a>

## create_gtm_tracking_tag

Handler: Builds a typed tracking tag, enables required built-in variables, optionally creates a trigger, and creates the draft workspace tag after guardrail checks.

```text
[WRITE] PREFERRED way to create a GA4 event tag that fires on an event. Builds a CORRECT GTM resource from plain fields, so you never hand-write GTM JSON. ONE call: enables the built-in variables the tag and trigger reference, reuses or creates the named trigger, and creates the tag linked to it in the draft workspace. Use this instead of tags_create + triggers_create + built_in_variables_enable, which needs three round trips and gets the shapes wrong. eventParameters values may reference built-in variables ({{Click URL}}, {{Click Text}}, {{Page URL}}, {{Form ID}}) and those are enabled automatically. Requires GTM_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/typedBuilders.ts#L245-L549) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID."
    },
    "tagName": {
      "type": "string",
      "description": "Name for the tag, e.g. \"GA4 Event - Email Click\"."
    },
    "platform": {
      "type": "string",
      "description": "What KIND of tag to build. \"ga4_event\" (the default) builds a GA4 event tag from measurementId + eventName. \"google_tag\" builds the BASE Google tag (googtag) from `tagId`, the one that loads gtag.js and configures GA4 - a container needs exactly one, firing on All Pages. \"custom_html\" builds a Custom HTML tag from `html`, which is how a dataLayer LISTENER is installed for forms GTM cannot see natively (an AJAX or cross-origin embed). Any OTHER value is REFUSED rather than quietly built as GA4: a Meta or Ads tag asked for here would otherwise come out as a GA4 tag pointing at that platform's id, which looks created and is wrong."
    },
    "html": {
      "type": "string",
      "description": "For platform \"custom_html\": the complete tag body, a single self-contained <script>."
    },
    "tagId": {
      "type": "string",
      "description": "For platform \"google_tag\": the id this base tag configures, e.g. \"G-ABC123XYZ\", or a {{Variable}} holding it. Referencing a Constant is the recommended setup: one variable holds the Measurement ID and every GA4 tag points at it, so changing containers or properties is one edit rather than one per tag."
    },
    "configSettings": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "value": {
            "type": "string"
          }
        },
        "required": [
          "name",
          "value"
        ],
        "additionalProperties": false
      },
      "description": "For platform \"google_tag\": config settings, e.g. [{\"name\":\"send_page_view\",\"value\":\"false\"}]."
    },
    "measurementId": {
      "type": "string",
      "description": "The GA4 Measurement ID, e.g. \"G-ABC123XYZ\", or a {{variable}} reference. Read the real id from the container's Google tag (type \"googtag\", parameter \"tagId\") rather than inventing one: an obvious placeholder is refused, because GTM would accept it and the tag would report to nothing."
    },
    "eventName": {
      "type": "string",
      "description": "The GA4 event name, snake_case, e.g. \"email_click\". Required for platform \"ga4_event\"."
    },
    "eventParameters": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "value": {
            "type": "string"
          }
        },
        "required": [
          "name",
          "value"
        ],
        "additionalProperties": false
      },
      "description": "Event parameters as plain name/value pairs, e.g. [{\"name\":\"click_text\",\"value\":\"{{Click Text}}\"}]. They are placed in the eventSettingsTable list-of-maps shape GTM requires; do NOT build that structure yourself."
    },
    "trigger": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "description": "Trigger name. An existing trigger with this name is REUSED, not duplicated."
        },
        "kind": {
          "type": "string",
          "description": "pageview | link_click | all_clicks | form_submit | custom_event | dom_ready | window_loaded | history_change | scroll_depth | element_visibility | youtube_video | js_error | timer. Use link_click for <a> clicks (outbound links, downloads, mailto:, tel:) and all_clicks for any element."
        },
        "clickUrlValue": {
          "type": "string",
          "description": "Scope a click trigger by {{Click URL}}, e.g. \"mailto:\" or \"tel:\"."
        },
        "clickUrlOperator": {
          "type": "string",
          "description": "equals | contains | startsWith | endsWith | matchRegex. Default contains."
        },
        "clickUrlIgnoreCase": {
          "type": "boolean",
          "description": "For a matchRegex {{Click URL}} condition: match case-insensitively."
        },
        "clickTextValue": {
          "type": "string",
          "description": "Scope a click trigger by {{Click Text}}, e.g. an exact CTA label."
        },
        "clickTextOperator": {
          "type": "string",
          "description": "equals | contains | startsWith | endsWith | matchRegex. Default equals."
        },
        "clickTextIgnoreCase": {
          "type": "boolean",
          "description": "For a matchRegex {{Click Text}} condition: match case-insensitively."
        },
        "clickElementValue": {
          "type": "string",
          "description": "Scope a click trigger by {{Click Element}}, normally a CSS selector."
        },
        "clickElementOperator": {
          "type": "string",
          "description": "cssSelector | equals | contains | matchRegex. Default cssSelector."
        },
        "clickIdValue": {
          "type": "string",
          "description": "Scope a click trigger by {{Click ID}}, the element's id attribute."
        },
        "clickIdOperator": {
          "type": "string",
          "description": "equals | contains | startsWith | endsWith | matchRegex. Default equals."
        },
        "clickClassesValue": {
          "type": "string",
          "description": "Scope a click trigger by {{Click Classes}}."
        },
        "clickClassesOperator": {
          "type": "string",
          "description": "equals | contains | matchRegex. Default contains."
        },
        "pagePathValue": {
          "type": "string",
          "description": "Scope to a page by {{Page Path}}."
        },
        "pagePathOperator": {
          "type": "string",
          "description": "equals | contains | startsWith | endsWith | matchRegex."
        },
        "pageUrlValue": {
          "type": "string",
          "description": "Scope by {{Page URL}}, e.g. a \"?thanks=1\" success page."
        },
        "pageUrlOperator": {
          "type": "string",
          "description": "equals | contains | startsWith | endsWith | matchRegex. Default contains."
        },
        "eventName": {
          "type": "string",
          "description": "For kind \"custom_event\": the dataLayer event name, e.g. \"generate_lead\"."
        },
        "formIdValue": {
          "type": "string",
          "description": "For kind \"form_submit\": scope to one form by {{Form ID}}."
        },
        "formIdOperator": {
          "type": "string",
          "description": "equals | contains | startsWith | endsWith | matchRegex. Default equals."
        },
        "formClassesValue": {
          "type": "string",
          "description": "For kind \"form_submit\": scope by {{Form Classes}}."
        },
        "formClassesOperator": {
          "type": "string",
          "description": "equals | contains | matchRegex. Default contains."
        },
        "intervalMs": {
          "type": "string",
          "description": "For kind \"timer\": firing interval in milliseconds. REQUIRED for timer."
        },
        "limit": {
          "type": "string",
          "description": "For kind \"timer\": how many times it may fire."
        },
        "visibilitySelector": {
          "type": "string",
          "description": "For kind \"element_visibility\": CSS selector of the element to watch, e.g. \"#gform_confirmation_message\". REQUIRED unless visibilityElementId is given."
        },
        "visibilityElementId": {
          "type": "string",
          "description": "For kind \"element_visibility\": the element's id attribute, as an alternative to visibilitySelector."
        },
        "visibilityMinPercent": {
          "type": "string",
          "description": "For kind \"element_visibility\": minimum percent of the element on screen before it fires. Default 50."
        },
        "visibilityFiringFrequency": {
          "type": "string",
          "description": "For kind \"element_visibility\": ONCE | ONCE_PER_ELEMENT | MANY_PER_ELEMENT. Default ONCE."
        },
        "visibilityObserveDomChanges": {
          "type": "boolean",
          "description": "For kind \"element_visibility\": keep watching for elements added AFTER page load (an AJAX confirmation message). Default true."
        },
        "visibilityMinOnScreenMs": {
          "type": "string",
          "description": "For kind \"element_visibility\": require the element to stay on screen for N milliseconds first."
        },
        "scrollPercentages": {
          "type": "string",
          "description": "For kind \"scroll_depth\": vertical percent thresholds, e.g. \"25, 50, 75, 90\". This is the default."
        },
        "scrollPixels": {
          "type": "string",
          "description": "For kind \"scroll_depth\": vertical PIXEL thresholds instead of percentages."
        },
        "scrollHorizontalPercentages": {
          "type": "string",
          "description": "For kind \"scroll_depth\": horizontal percent thresholds. Off unless supplied."
        },
        "pageHostnameValue": {
          "type": "string",
          "description": "Scope by {{Page Hostname}}. ANDed into the filter of any filter-capable kind."
        },
        "pageHostnameOperator": {
          "type": "string",
          "description": "equals | contains | startsWith | endsWith | matchRegex. Default equals."
        },
        "referrerValue": {
          "type": "string",
          "description": "Scope by {{Referrer}}. ANDed into the filter of any filter-capable kind."
        },
        "referrerOperator": {
          "type": "string",
          "description": "equals | contains | startsWith | endsWith | matchRegex. Default contains."
        }
      },
      "required": [
        "name",
        "kind"
      ],
      "additionalProperties": false,
      "description": "The trigger this tag fires on. Reused by name when it already exists, otherwise created."
    },
    "builtInVariables": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Extra built-in variable types to enable beyond the ones inferred, e.g. [\"formElement\"]."
    },
    "allowPlaceholderId": {
      "type": "boolean",
      "description": "Set true ONLY when the user has been told the Measurement ID looks like a placeholder and has confirmed they want it anyway, e.g. a test container. Without it, a placeholder id is first resolved from the container and only refused if the container has none."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this write operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "tagName",
    "trigger",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-create_gtm_variable_typed-8430f1dc"></a>

## create_gtm_variable_typed

Handler: Builds the selected typed GTM variable and creates it in the draft workspace after guardrail checks.

```text
[WRITE] Create a GTM variable by KIND rather than by GTM's internal type code, so the right shape is guaranteed. kind: "constant" (a fixed reused value, e.g. a Measurement ID); "data_layer" (read a key the SITE pushes to the dataLayer, dot-notation for nested, e.g. ecommerce.value) - only correct when the site actually pushes that key; "javascript" (Custom JavaScript: a function(){...} that COMPUTES a value, and the right choice for deriving something from the page or the click, e.g. extracting the address out of a mailto: {{Click URL}} - a data_layer variable CANNOT do this and would report blank); "event_data" and "request_header" (SERVER containers only). Requires GTM_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/typedBuilders.ts#L550-L649) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID."
    },
    "name": {
      "type": "string",
      "description": "Variable name as it will be referenced, e.g. \"JS - Email Address\"."
    },
    "kind": {
      "type": "string",
      "description": "constant | data_layer | javascript | event_data | request_header"
    },
    "value": {
      "type": "string",
      "description": "For kind \"constant\": the fixed value."
    },
    "dataLayerName": {
      "type": "string",
      "description": "For kind \"data_layer\": the dataLayer key, e.g. \"ecommerce.value\"."
    },
    "javascript": {
      "type": "string",
      "description": "For kind \"javascript\": the full function, e.g. \"function() { var u = {{Click URL}} || ''; return u.indexOf('mailto:') === 0 ? u.replace('mailto:', '').split('?')[0] : undefined; }\". Any {{variable}} it reads must be enabled."
    },
    "keyPath": {
      "type": "string",
      "description": "For kind \"event_data\" (server): the event-data key to read."
    },
    "defaultValue": {
      "type": "string",
      "description": "For kind \"event_data\": value when the key is absent."
    },
    "headerName": {
      "type": "string",
      "description": "For kind \"request_header\" (server): the HTTP header to read."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this write operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "name",
    "kind",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-versions_list-f5db29dc"></a>

## versions_list

Handler: Calls client.accounts.containers.version\_headers.list and returns the result or a formatted error.

```text
List all container version headers (summary) for a GTM container.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/versions.ts#L22-L56) · Schema: tools/list.

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
    "pageToken": {
      "type": "string",
      "description": "Continuation token to resume listing from a previous truncated result."
    },
    "maxPages": {
      "type": "integer",
      "exclusiveMinimum": 0,
      "description": "Maximum number of API pages to fetch (default 50). If more pages remain, the result includes truncated:true and a nextPageToken."
    },
    "includeDeleted": {
      "type": "boolean",
      "description": "Include deleted versions in results."
    }
  },
  "required": [
    "accountId",
    "containerId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-versions_get-d0ab5a14"></a>

## versions_get

Handler: Calls client.accounts.containers.versions.live, client.accounts.containers.versions.get and returns the result or a formatted error.

```text
Get the full contents of a specific GTM container version. Pass "live" as containerVersionId to get the currently live version.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/versions.ts#L57-L79) · Schema: tools/list.

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
    "containerVersionId": {
      "type": "string",
      "description": "The container version ID, or \"live\" for the current live version."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "containerVersionId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-versions_create-04de95bc"></a>

## versions_create

Handler: Calls client.accounts.containers.workspaces.create\_version and returns the result or a formatted error.

```text
[WRITE] Create a new GTM container version from a workspace (checkpoint). Requires GTM_MCP_ENABLE_WRITES=true and confirm=true. This takes a snapshot of the workspace into a versioned checkpoint without publishing.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/versions.ts#L80-L112) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

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
    "name": {
      "type": "string",
      "description": "Version name/label."
    },
    "notes": {
      "type": "string",
      "description": "Version notes / change description."
    },
    "confirm": {
      "type": "boolean"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-versions_set_latest-ae92b207"></a>

## versions_set_latest

Handler: Calls client.accounts.containers.versions.set\_latest and returns the result or a formatted error.

```text
[WRITE] Set a specific container version as the "latest" (synchronizes the default workspace with this version). Note: This does NOT publish. Use versions_publish to go live. Requires GTM_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/versions.ts#L113-L143) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

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
    "containerVersionId": {
      "type": "string",
      "description": "The version ID to set as latest."
    },
    "confirm": {
      "type": "boolean"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "containerVersionId",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-versions_undelete-509621dc"></a>

## versions_undelete

Handler: Calls client.accounts.containers.versions.undelete and returns the result or a formatted error.

```text
[WRITE] Undelete a previously deleted GTM container version. Requires GTM_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/versions.ts#L144-L173) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

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
    "containerVersionId": {
      "type": "string"
    },
    "confirm": {
      "type": "boolean"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "containerVersionId",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-versions_delete-063fa16a"></a>

## versions_delete

Handler: Calls client.accounts.containers.versions.delete and returns the result or a formatted error.

```text
[DELETE] Delete a GTM container version. Requires GTM_MCP_ENABLE_DELETES=true and confirm=true. Cannot delete a currently published (live) version.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/versions.ts#L174-L203) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

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
    "containerVersionId": {
      "type": "string"
    },
    "confirm": {
      "type": "boolean"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "containerVersionId",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-workspace_quick_preview-91a16c1b"></a>

## workspace_quick_preview

Handler: Calls client.accounts.containers.workspaces.quick\_preview and returns the result or a formatted error.

```text
Generate a quick-preview (debug) link for a GTM workspace. This does NOT publish — it just enables preview mode. Returns a preview container version with any compilation errors.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/publish.ts#L24-L58) · Schema: tools/list.

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
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-versions_publish-ae317031"></a>

## versions_publish

Handler: Calls client.accounts.containers.versions.publish and returns the result or a formatted error.

```text
[PUBLISH] Publish a specific GTM container version to live. Requires GTM_MCP_ENABLE_PUBLISH=true and confirm=true. ⚠️  This immediately makes the version live in production.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/publish.ts#L59-L100) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

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
    "containerVersionId": {
      "type": "string",
      "description": "The version ID to publish."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this publish operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "containerVersionId",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-workspace_create_version_and_publish-fefa1f23"></a>

## workspace_create_version_and_publish

Handler: Calls client.accounts.containers.workspaces.create\_version, client.accounts.containers.versions.publish and returns the result or a formatted error.

```text
[PUBLISH] Create a new container version from a workspace and immediately publish it. Requires GTM_MCP_ENABLE_PUBLISH=true and confirm=true. ⚠️  This is the most powerful write operation — it goes live in production immediately.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/publish.ts#L101-L183) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

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
    "name": {
      "type": "string",
      "description": "Version name."
    },
    "notes": {
      "type": "string",
      "description": "Version notes."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this publish operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-environments_list-7d0570ce"></a>

## environments_list

Handler: Calls client.accounts.containers.environments.list and returns the result or a formatted error.

```text
List all environments in a GTM container. Automatically follows pagination.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/environments.ts#L22-L44) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    },
    "pageToken": {
      "type": "string",
      "description": "Continuation token to resume listing from a previous truncated result."
    },
    "maxPages": {
      "type": "integer",
      "exclusiveMinimum": 0,
      "description": "Maximum number of API pages to fetch (default 50). If more pages remain, the result includes truncated:true and a nextPageToken."
    }
  },
  "required": [
    "accountId",
    "containerId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-environments_get-b13a1afd"></a>

## environments_get

Handler: Calls client.accounts.containers.environments.get and returns the result or a formatted error.

```text
Get details of a specific GTM environment.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/environments.ts#L45-L64) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    },
    "environmentId": {
      "type": "string",
      "description": "The GTM environment ID."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "environmentId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-environments_create-6c824e27"></a>

## environments_create

Handler: Calls client.accounts.containers.environments.create and returns the result or a formatted error.

```text
[WRITE] Create a new GTM environment. Requires GTM_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/environments.ts#L65-L97) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    },
    "name": {
      "type": "string",
      "description": "Environment name."
    },
    "description": {
      "type": "string",
      "description": "Environment description."
    },
    "url": {
      "type": "string",
      "description": "Default preview page URL for the environment."
    },
    "enableDebug": {
      "type": "boolean",
      "description": "Whether to enable debug by default."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this write operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "name",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-environments_update-c07b0bb7"></a>

## environments_update

Handler: Calls client.accounts.containers.environments.get, client.accounts.containers.environments.update and returns the result or a formatted error.

```text
[WRITE] Update an existing GTM environment (read-modify-write: omitted fields are preserved). Requires GTM_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/environments.ts#L98-L153) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    },
    "environmentId": {
      "type": "string",
      "description": "The GTM environment ID to update."
    },
    "name": {
      "type": "string",
      "description": "New environment name."
    },
    "description": {
      "type": "string",
      "description": "New description."
    },
    "url": {
      "type": "string",
      "description": "New default preview page URL."
    },
    "enableDebug": {
      "type": "boolean",
      "description": "Whether to enable debug by default."
    },
    "fingerprint": {
      "type": "string",
      "description": "Current fingerprint (for optimistic locking)."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this write operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "environmentId",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-environments_reauthorize-b2d686be"></a>

## environments_reauthorize

Handler: Calls client.accounts.containers.environments.reauthorize and returns the result or a formatted error.

```text
[PUBLISH] Re-generate the authorization code for a GTM environment. Requires GTM_MCP_ENABLE_PUBLISH=true and confirm=true. ⚠️  This rotates the environment auth token; any embedded snippet using the old token stops working until updated.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/environments.ts#L154-L185) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    },
    "environmentId": {
      "type": "string",
      "description": "The GTM environment ID to reauthorize."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this high-impact operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "environmentId",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-environments_delete-ee34cf97"></a>

## environments_delete

Handler: Calls client.accounts.containers.environments.delete and returns the result or a formatted error.

```text
[DELETE] Delete a GTM environment. Requires GTM_MCP_ENABLE_DELETES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/environments.ts#L186-L213) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    },
    "environmentId": {
      "type": "string",
      "description": "The GTM environment ID to delete."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this delete operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "environmentId",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-user_permissions_list-f3f92d06"></a>

## user_permissions_list

Handler: Calls client.accounts.user\_permissions.list and returns the result or a formatted error.

```text
List all user permissions for a GTM account. Automatically follows pagination. Each record shows a user email plus their account and per-container access levels.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/userPermissions.ts#L41-L65) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "pageToken": {
      "type": "string",
      "description": "Continuation token to resume listing from a previous truncated result."
    },
    "maxPages": {
      "type": "integer",
      "exclusiveMinimum": 0,
      "description": "Maximum number of API pages to fetch (default 50). If more pages remain, the result includes truncated:true and a nextPageToken."
    }
  },
  "required": [
    "accountId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-user_permissions_get-12b30f7b"></a>

## user_permissions_get

Handler: Calls client.accounts.user\_permissions.get and returns the result or a formatted error.

```text
Get a specific user permission record for a GTM account.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/userPermissions.ts#L66-L87) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "userPermissionId": {
      "type": "string",
      "description": "The user permission ID."
    }
  },
  "required": [
    "accountId",
    "userPermissionId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-user_permissions_create-f0e56fb0"></a>

## user_permissions_create

Handler: Calls client.accounts.user\_permissions.create and returns the result or a formatted error.

```text
[WRITE] Grant a user access to a GTM account (and optionally containers). Requires GTM_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/userPermissions.ts#L88-L124) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "emailAddress": {
      "type": "string",
      "description": "Email address of the user to grant access to."
    },
    "accountPermission": {
      "type": "string",
      "enum": [
        "accountPermissionUnspecified",
        "noAccess",
        "user",
        "admin"
      ],
      "description": "Account-level permission."
    },
    "containerAccess": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "containerId": {
            "type": "string",
            "description": "The GTM container ID."
          },
          "permission": {
            "type": "string",
            "enum": [
              "containerPermissionUnspecified",
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
        ],
        "additionalProperties": false
      },
      "description": "Per-container access entries."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this write operation."
    }
  },
  "required": [
    "accountId",
    "emailAddress",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-user_permissions_update-8a91e4a6"></a>

## user_permissions_update

Handler: Calls client.accounts.user\_permissions.update and returns the result or a formatted error.

```text
[WRITE] Update a user's account and/or container access levels. Requires GTM_MCP_ENABLE_WRITES=true and confirm=true. Provide the full intended access (account + container) as the API replaces the record.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/userPermissions.ts#L125-L162) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "userPermissionId": {
      "type": "string",
      "description": "The user permission ID to update."
    },
    "accountPermission": {
      "type": "string",
      "enum": [
        "accountPermissionUnspecified",
        "noAccess",
        "user",
        "admin"
      ],
      "description": "Account-level permission."
    },
    "containerAccess": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "containerId": {
            "type": "string",
            "description": "The GTM container ID."
          },
          "permission": {
            "type": "string",
            "enum": [
              "containerPermissionUnspecified",
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
        ],
        "additionalProperties": false
      },
      "description": "Per-container access entries."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this write operation."
    }
  },
  "required": [
    "accountId",
    "userPermissionId",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-user_permissions_delete-1cf1fd54"></a>

## user_permissions_delete

Handler: Calls client.accounts.user\_permissions.delete and returns the result or a formatted error.

```text
[DELETE] Revoke a user's access to a GTM account. Requires GTM_MCP_ENABLE_DELETES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/userPermissions.ts#L163-L191) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "userPermissionId": {
      "type": "string",
      "description": "The user permission ID to delete."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this delete operation."
    }
  },
  "required": [
    "accountId",
    "userPermissionId",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-clients_list-b88d2720"></a>

## clients_list

Handler: Calls GTM workspace clients.list with workspace/resource paths; mutating operations enforce guardrails and confirm.

```text
List all GTM clients in a workspace. Automatically follows pagination.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/serverSide.ts#L122-L350) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID."
    },
    "pageToken": {
      "type": "string",
      "description": "Continuation token to resume listing from a previous truncated result."
    },
    "maxPages": {
      "type": "integer",
      "exclusiveMinimum": 0,
      "description": "Maximum number of API pages to fetch (default 50). If more pages remain, the result includes truncated:true and a nextPageToken."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-clients_get-06dd01c1"></a>

## clients_get

Handler: Calls GTM workspace clients.get with workspace/resource paths; mutating operations enforce guardrails and confirm.

```text
Get a specific GTM client.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/serverSide.ts#L147-L350) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID."
    },
    "clientId": {
      "type": "string",
      "description": "The clients ID."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "clientId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-clients_create-07f6fe45"></a>

## clients_create

Handler: Calls GTM workspace clients.create with workspace/resource paths; mutating operations enforce guardrails and confirm.

```text
[WRITE] Create a new GTM client. Requires GTM_MCP_ENABLE_WRITES=true and confirm=true. Pass the full resource as a JSON string in bodyJson.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/serverSide.ts#L172-L350) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID."
    },
    "bodyJson": {
      "type": "string",
      "description": "Full clients resource as a JSON string (e.g. {\"name\":\"...\",\"type\":\"...\"})."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this write operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "bodyJson",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-clients_update-995c8f38"></a>

## clients_update

Handler: Calls GTM workspace clients.update with workspace/resource paths; mutating operations enforce guardrails and confirm.

```text
[WRITE] Update an existing GTM client. Requires GTM_MCP_ENABLE_WRITES=true and confirm=true. Pass the full resource as a JSON string in bodyJson.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/serverSide.ts#L208-L350) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID."
    },
    "clientId": {
      "type": "string",
      "description": "The clients ID to update."
    },
    "bodyJson": {
      "type": "string",
      "description": "Full clients resource as a JSON string."
    },
    "fingerprint": {
      "type": "string",
      "description": "Current fingerprint (for optimistic locking)."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this write operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "clientId",
    "bodyJson",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-clients_delete-f3052b2f"></a>

## clients_delete

Handler: Calls GTM workspace clients.delete with workspace/resource paths; mutating operations enforce guardrails and confirm.

```text
[DELETE] Delete a GTM client. Requires GTM_MCP_ENABLE_DELETES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/serverSide.ts#L249-L350) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID."
    },
    "clientId": {
      "type": "string",
      "description": "The clients ID to delete."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this delete operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "clientId",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-clients_revert-107f2832"></a>

## clients_revert

Handler: Calls GTM workspace clients.revert with workspace/resource paths; mutating operations enforce guardrails and confirm.

```text
[WRITE] Revert workspace changes to a GTM client back to its last container-version state. Requires GTM_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/serverSide.ts#L280-L350) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID."
    },
    "clientId": {
      "type": "string",
      "description": "The clients ID to revert."
    },
    "fingerprint": {
      "type": "string",
      "description": "Current fingerprint (for optimistic locking)."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this write operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "clientId",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-transformations_list-9f9b231c"></a>

## transformations_list

Handler: Calls GTM workspace transformations.list with workspace/resource paths; mutating operations enforce guardrails and confirm.

```text
List all GTM transformations in a workspace. Automatically follows pagination.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/serverSide.ts#L122-L350) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID."
    },
    "pageToken": {
      "type": "string",
      "description": "Continuation token to resume listing from a previous truncated result."
    },
    "maxPages": {
      "type": "integer",
      "exclusiveMinimum": 0,
      "description": "Maximum number of API pages to fetch (default 50). If more pages remain, the result includes truncated:true and a nextPageToken."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-transformations_get-4bd31bca"></a>

## transformations_get

Handler: Calls GTM workspace transformations.get with workspace/resource paths; mutating operations enforce guardrails and confirm.

```text
Get a specific GTM transformation.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/serverSide.ts#L147-L350) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID."
    },
    "transformationId": {
      "type": "string",
      "description": "The transformations ID."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "transformationId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-transformations_create-9e6cd227"></a>

## transformations_create

Handler: Calls GTM workspace transformations.create with workspace/resource paths; mutating operations enforce guardrails and confirm.

```text
[WRITE] Create a new GTM transformation. Requires GTM_MCP_ENABLE_WRITES=true and confirm=true. Pass the full resource as a JSON string in bodyJson.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/serverSide.ts#L172-L350) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID."
    },
    "bodyJson": {
      "type": "string",
      "description": "Full transformations resource as a JSON string (e.g. {\"name\":\"...\",\"type\":\"...\"})."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this write operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "bodyJson",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-transformations_update-278d1baf"></a>

## transformations_update

Handler: Calls GTM workspace transformations.update with workspace/resource paths; mutating operations enforce guardrails and confirm.

```text
[WRITE] Update an existing GTM transformation. Requires GTM_MCP_ENABLE_WRITES=true and confirm=true. Pass the full resource as a JSON string in bodyJson.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/serverSide.ts#L208-L350) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID."
    },
    "transformationId": {
      "type": "string",
      "description": "The transformations ID to update."
    },
    "bodyJson": {
      "type": "string",
      "description": "Full transformations resource as a JSON string."
    },
    "fingerprint": {
      "type": "string",
      "description": "Current fingerprint (for optimistic locking)."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this write operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "transformationId",
    "bodyJson",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-transformations_delete-ccae13a1"></a>

## transformations_delete

Handler: Calls GTM workspace transformations.delete with workspace/resource paths; mutating operations enforce guardrails and confirm.

```text
[DELETE] Delete a GTM transformation. Requires GTM_MCP_ENABLE_DELETES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/serverSide.ts#L249-L350) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID."
    },
    "transformationId": {
      "type": "string",
      "description": "The transformations ID to delete."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this delete operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "transformationId",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-transformations_revert-44a07063"></a>

## transformations_revert

Handler: Calls GTM workspace transformations.revert with workspace/resource paths; mutating operations enforce guardrails and confirm.

```text
[WRITE] Revert workspace changes to a GTM transformation back to its last container-version state. Requires GTM_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/serverSide.ts#L280-L350) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID."
    },
    "transformationId": {
      "type": "string",
      "description": "The transformations ID to revert."
    },
    "fingerprint": {
      "type": "string",
      "description": "Current fingerprint (for optimistic locking)."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this write operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "transformationId",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-zones_list-41e3e1f3"></a>

## zones_list

Handler: Calls GTM workspace zones.list with workspace/resource paths; mutating operations enforce guardrails and confirm.

```text
List all GTM zones in a workspace. Automatically follows pagination.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/serverSide.ts#L122-L350) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID."
    },
    "pageToken": {
      "type": "string",
      "description": "Continuation token to resume listing from a previous truncated result."
    },
    "maxPages": {
      "type": "integer",
      "exclusiveMinimum": 0,
      "description": "Maximum number of API pages to fetch (default 50). If more pages remain, the result includes truncated:true and a nextPageToken."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-zones_get-5947cfca"></a>

## zones_get

Handler: Calls GTM workspace zones.get with workspace/resource paths; mutating operations enforce guardrails and confirm.

```text
Get a specific GTM zone.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/serverSide.ts#L147-L350) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID."
    },
    "zoneId": {
      "type": "string",
      "description": "The zones ID."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "zoneId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-zones_create-e4d8c228"></a>

## zones_create

Handler: Calls GTM workspace zones.create with workspace/resource paths; mutating operations enforce guardrails and confirm.

```text
[WRITE] Create a new GTM zone. Requires GTM_MCP_ENABLE_WRITES=true and confirm=true. Pass the full resource as a JSON string in bodyJson.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/serverSide.ts#L172-L350) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID."
    },
    "bodyJson": {
      "type": "string",
      "description": "Full zones resource as a JSON string (e.g. {\"name\":\"...\",\"type\":\"...\"})."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this write operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "bodyJson",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-zones_update-69abb230"></a>

## zones_update

Handler: Calls GTM workspace zones.update with workspace/resource paths; mutating operations enforce guardrails and confirm.

```text
[WRITE] Update an existing GTM zone. Requires GTM_MCP_ENABLE_WRITES=true and confirm=true. Pass the full resource as a JSON string in bodyJson.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/serverSide.ts#L208-L350) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID."
    },
    "zoneId": {
      "type": "string",
      "description": "The zones ID to update."
    },
    "bodyJson": {
      "type": "string",
      "description": "Full zones resource as a JSON string."
    },
    "fingerprint": {
      "type": "string",
      "description": "Current fingerprint (for optimistic locking)."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this write operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "zoneId",
    "bodyJson",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-zones_delete-31e19545"></a>

## zones_delete

Handler: Calls GTM workspace zones.delete with workspace/resource paths; mutating operations enforce guardrails and confirm.

```text
[DELETE] Delete a GTM zone. Requires GTM_MCP_ENABLE_DELETES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/serverSide.ts#L249-L350) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID."
    },
    "zoneId": {
      "type": "string",
      "description": "The zones ID to delete."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this delete operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "zoneId",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-zones_revert-000be4e0"></a>

## zones_revert

Handler: Calls GTM workspace zones.revert with workspace/resource paths; mutating operations enforce guardrails and confirm.

```text
[WRITE] Revert workspace changes to a GTM zone back to its last container-version state. Requires GTM_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/serverSide.ts#L280-L350) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID."
    },
    "zoneId": {
      "type": "string",
      "description": "The zones ID to revert."
    },
    "fingerprint": {
      "type": "string",
      "description": "Current fingerprint (for optimistic locking)."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this write operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "zoneId",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-templates_list-0de2809e"></a>

## templates_list

Handler: Calls GTM workspace templates.list with workspace/resource paths; mutating operations enforce guardrails and confirm.

```text
List all GTM templates in a workspace. Automatically follows pagination.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/serverSide.ts#L122-L350) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID."
    },
    "pageToken": {
      "type": "string",
      "description": "Continuation token to resume listing from a previous truncated result."
    },
    "maxPages": {
      "type": "integer",
      "exclusiveMinimum": 0,
      "description": "Maximum number of API pages to fetch (default 50). If more pages remain, the result includes truncated:true and a nextPageToken."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-templates_get-e29ee6b4"></a>

## templates_get

Handler: Calls GTM workspace templates.get with workspace/resource paths; mutating operations enforce guardrails and confirm.

```text
Get a specific GTM template.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/serverSide.ts#L147-L350) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID."
    },
    "templateId": {
      "type": "string",
      "description": "The templates ID."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "templateId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-templates_create-3a3e5b04"></a>

## templates_create

Handler: Calls GTM workspace templates.create with workspace/resource paths; mutating operations enforce guardrails and confirm.

```text
[WRITE] Create a new GTM template. Requires GTM_MCP_ENABLE_WRITES=true and confirm=true. Pass the full resource as a JSON string in bodyJson.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/serverSide.ts#L172-L350) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID."
    },
    "bodyJson": {
      "type": "string",
      "description": "Full templates resource as a JSON string (e.g. {\"name\":\"...\",\"type\":\"...\"})."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this write operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "bodyJson",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-templates_update-f5c32e05"></a>

## templates_update

Handler: Calls GTM workspace templates.update with workspace/resource paths; mutating operations enforce guardrails and confirm.

```text
[WRITE] Update an existing GTM template. Requires GTM_MCP_ENABLE_WRITES=true and confirm=true. Pass the full resource as a JSON string in bodyJson.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/serverSide.ts#L208-L350) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID."
    },
    "templateId": {
      "type": "string",
      "description": "The templates ID to update."
    },
    "bodyJson": {
      "type": "string",
      "description": "Full templates resource as a JSON string."
    },
    "fingerprint": {
      "type": "string",
      "description": "Current fingerprint (for optimistic locking)."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this write operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "templateId",
    "bodyJson",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-templates_delete-78735250"></a>

## templates_delete

Handler: Calls GTM workspace templates.delete with workspace/resource paths; mutating operations enforce guardrails and confirm.

```text
[DELETE] Delete a GTM template. Requires GTM_MCP_ENABLE_DELETES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/serverSide.ts#L249-L350) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID."
    },
    "templateId": {
      "type": "string",
      "description": "The templates ID to delete."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this delete operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "templateId",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-templates_revert-43e1900f"></a>

## templates_revert

Handler: Calls GTM workspace templates.revert with workspace/resource paths; mutating operations enforce guardrails and confirm.

```text
[WRITE] Revert workspace changes to a GTM template back to its last container-version state. Requires GTM_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/serverSide.ts#L280-L350) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID."
    },
    "templateId": {
      "type": "string",
      "description": "The templates ID to revert."
    },
    "fingerprint": {
      "type": "string",
      "description": "Current fingerprint (for optimistic locking)."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this write operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "templateId",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtag_config_list-4afb97b5"></a>

## gtag_config_list

Handler: Calls GTM workspace gtag\_config.list with workspace/resource paths; mutating operations enforce guardrails and confirm.

```text
List all GTM gtag configs in a workspace. Automatically follows pagination.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/serverSide.ts#L122-L350) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID."
    },
    "pageToken": {
      "type": "string",
      "description": "Continuation token to resume listing from a previous truncated result."
    },
    "maxPages": {
      "type": "integer",
      "exclusiveMinimum": 0,
      "description": "Maximum number of API pages to fetch (default 50). If more pages remain, the result includes truncated:true and a nextPageToken."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtag_config_get-8921d744"></a>

## gtag_config_get

Handler: Calls GTM workspace gtag\_config.get with workspace/resource paths; mutating operations enforce guardrails and confirm.

```text
Get a specific GTM gtag config.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/serverSide.ts#L147-L350) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID."
    },
    "gtagConfigId": {
      "type": "string",
      "description": "The gtag configs ID."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "gtagConfigId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtag_config_create-8cc1c906"></a>

## gtag_config_create

Handler: Calls GTM workspace gtag\_config.create with workspace/resource paths; mutating operations enforce guardrails and confirm.

```text
[WRITE] Create a new GTM gtag config. Requires GTM_MCP_ENABLE_WRITES=true and confirm=true. Pass the full resource as a JSON string in bodyJson.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/serverSide.ts#L172-L350) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID."
    },
    "bodyJson": {
      "type": "string",
      "description": "Full gtag configs resource as a JSON string (e.g. {\"name\":\"...\",\"type\":\"...\"})."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this write operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "bodyJson",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtag_config_update-63e8427c"></a>

## gtag_config_update

Handler: Calls GTM workspace gtag\_config.update with workspace/resource paths; mutating operations enforce guardrails and confirm.

```text
[WRITE] Update an existing GTM gtag config. Requires GTM_MCP_ENABLE_WRITES=true and confirm=true. Pass the full resource as a JSON string in bodyJson.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/serverSide.ts#L208-L350) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID."
    },
    "gtagConfigId": {
      "type": "string",
      "description": "The gtag configs ID to update."
    },
    "bodyJson": {
      "type": "string",
      "description": "Full gtag configs resource as a JSON string."
    },
    "fingerprint": {
      "type": "string",
      "description": "Current fingerprint (for optimistic locking)."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this write operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "gtagConfigId",
    "bodyJson",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtag_config_delete-2caa4011"></a>

## gtag_config_delete

Handler: Calls GTM workspace gtag\_config.delete with workspace/resource paths; mutating operations enforce guardrails and confirm.

```text
[DELETE] Delete a GTM gtag config. Requires GTM_MCP_ENABLE_DELETES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/serverSide.ts#L249-L350) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID."
    },
    "gtagConfigId": {
      "type": "string",
      "description": "The gtag configs ID to delete."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this delete operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "gtagConfigId",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-templates_import_from_gallery-e8c40a01"></a>

## templates_import_from_gallery

Handler: Reuses an installed gallery template or installs the referenced gallery template through GTM, returning its derived tag type.

```text
[WRITE] Install a Community Template Gallery template into a workspace by GitHub owner and repository, so a THIRD-PARTY pixel can use its official sandboxed template instead of Custom HTML. NOT for Google's own tags. GA4, Google Ads and Floodlight are BUILT IN to GTM as native tag types (googtag, gaawe, awct, sp, flc), there is no gallery repository for them, and asking for one answers "404 Not found or permission denied". To build a GA4 event tag call tags_create with type "gaawe" directly; do not import anything first. Requires GTM_MCP_ENABLE_WRITES=true and confirm=true. The GTM API DOES support this (templates.import_from_gallery); never tell the user it is UI-only. Idempotent: one already present is returned unchanged rather than duplicated, including a copy installed by hand. Handles the two cases a plain gallery import cannot: a repo that is only a FORK is imported from the publisher instead, and a template the gallery never listed (e.g. stape-io/data-client, rtb-house-tag, tapfiliate-tag) is installed by uploading the vendor source, which is what Templates > Import does by hand. That source is fetched only at the commit pinned as reviewed and refused unless its SHA-256 matches the pin. Returns the installed template. To build a tag on it you need its tag TYPE (a cvt_... string): READ that from the container rather than constructing it from the templateId, because the format is not what it appears to be. Pass the exact string as `type` to tags_create along with that template's own field keys (template-specific, e.g. Meta Pixel uses pixelId). Common pairs: facebook/GoogleTagManager-WebTemplate-For-FacebookPixel (Meta Pixel), tiktok/gtm-template-pixel (TikTok), linkedin/linkedin-gtm-community-template (LinkedIn Insight Tag 2.0), Snapchat/snapchat-google-tag-manager (Snap Pixel), pinterest/ws-gtm-template (Pinterest, web) or pinterest/ss-gtm-template (Pinterest, server), stape-io/facebook-tag and stape-io/tiktok-tag (Stape server-side).
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/serverSide.ts#L377-L643) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID."
    },
    "owner": {
      "type": "string",
      "description": "GitHub owner of the gallery template, e.g. \"linkedin\"."
    },
    "repository": {
      "type": "string",
      "description": "GitHub repository, e.g. \"linkedin-gtm-community-template\"."
    },
    "sha": {
      "type": "string",
      "description": "Optional gallery version SHA. Defaults to the latest published version."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this write operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "owner",
    "repository",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-plan_server_migration_from_web-8ec83e7b"></a>

## plan_server_migration_from_web

Handler: Reads tags, triggers and variables into a workspace snapshot and computes a web-to-server migration plan without creating resources.

```text
READ-ONLY: given a WEB container, list every tag that can move to a SERVER container and the plan to port each: which server tool builds it (the create_*_capi_server_tag / create_server_tag tools here), the public ids read off the web tag (`derived` - Pixel IDs from template params or the fbq/ttq/pintrk/rdt/snaptr/uet/twq init calls, so the server tag is created pre-filled), and the secrets you must still ask the user for (`requires` - CAPI access tokens are never in a web container). Creates NOTHING. GA4 is reported once in `ga4` (port it with create_server_tag platform "ga4" as the relay, or the setup_server_side_container prompt; a {{Constant}} Measurement ID is resolved to its value, any other {{variable}} id is listed in ga4.unresolvedRefs - ask the user for the G- id); Google Ads conversion (awct) / remarketing (sp) -> create_server_tag; Meta/TikTok/LinkedIn/Pinterest/Reddit/Snapchat/Microsoft/Amazon/StackAdapt/X/Quora/AdRoll/Nextdoor/Yelp/Spotify/LINE Yahoo/RTB House pixels -> their typed tool (native Microsoft UET `baut` and LinkedIn Insight `bzi` tags are recognised by type); analytics (Mixpanel, Matomo, Piwik PRO, Piano, Plausible, Umami, Pirsch, Snowplow, Klaviyo) and affiliate networks (Awin, CJ, Impact, Rakuten, ShareASale, Tradedoubler, Webgains, Admitad, Adtraction, Affiliate Future, Effinity, Refersion, Tapfiliate, Everflow, Voluum) -> GENERIC items (status "generic"): templates_import_from_gallery the named stape-io repo, then tags_create with the template fields listed in `requires` (secrets) + `derived` (public ids read off the web snippet); Floodlight (flc) -> generic import path; Google Ads call conversion has no sGTM equivalent; Conversion Linker (gclidw) needs no server tag. Returns { ga4, items[], summary, truncated }.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/serverMigration.ts#L302-L340) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The SERVER container ID (for the plan tool: the WEB container)."
    },
    "workspaceId": {
      "type": "string",
      "description": "Workspace ID."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-create_server_tag-670d8e59"></a>

## create_server_tag

Handler: Builds a native Google server tag for the chosen platform and creates it in the draft GTM workspace after guardrail checks.

```text
[WRITE] Create a NATIVE Google server tag in a SERVER container workspace, built with the correct shape: platform "ga4" = the GA4 relay (sgtmgaaw; omit eventName to relay every incoming event, pass one for a per-event tag; optional eventParameters / userProperties enrichment rows), "ads_conversion" = Google Ads conversion (sgtmadsct; conversionId + conversionLabel), "ads_conversion_linker" = the server Conversion Linker (sgtmadscl), "ads_remarketing" = Google Ads remarketing (sgtmadsremarket; conversionId). Pass the SERVER trigger id(s) as firingTriggerId. Requires GTM_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/serverMigration.ts#L341-L395) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The SERVER container ID (for the plan tool: the WEB container)."
    },
    "workspaceId": {
      "type": "string",
      "description": "Workspace ID."
    },
    "name": {
      "type": "string",
      "description": "Tag name."
    },
    "platform": {
      "type": "string",
      "enum": [
        "ga4",
        "ads_conversion",
        "ads_conversion_linker",
        "ads_remarketing"
      ]
    },
    "measurementId": {
      "type": "string",
      "description": "For ga4: the G- Measurement ID or a {{variable}}."
    },
    "eventName": {
      "type": "string",
      "description": "For ga4: a literal event name for a per-event tag; omit to relay every event."
    },
    "conversionId": {
      "type": "string",
      "description": "For ads_conversion / ads_remarketing: the Ads Conversion ID (AW- prefix is stripped)."
    },
    "conversionLabel": {
      "type": "string",
      "description": "For ads_conversion: the Conversion Label."
    },
    "productReporting": {
      "type": "boolean",
      "description": "For ads_conversion: enable product reporting (ecommerce only)."
    },
    "eventParameters": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "value": {
            "type": "string"
          }
        },
        "required": [
          "name",
          "value"
        ],
        "additionalProperties": false
      },
      "description": "Override rows {name, value}; names are the template's own field keys."
    },
    "userProperties": {
      "$ref": "#/properties/eventParameters"
    },
    "firingTriggerId": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "SERVER trigger id(s) the tag fires on (triggers_create, type customEvent). Usually one."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this write operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "name",
    "platform",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-create_meta_capi_server_tag-5820a53c"></a>

## create_meta_capi_server_tag

Handler: Validates vendor fields, installs or reuses the gallery template, ensures any required variables, and creates the typed tag in the draft server workspace.

```text
[WRITE] Create a Meta Conversions API SERVER tag from the Stape template (stape-io/facebook-tag), imported automatically: the server counterpart of the Meta Pixel. pixelId is the Pixel ID (public, on the web pixel), accessToken the CAPI system-user token. `event` is the Meta event the tag sends (Purchase, Lead, a GA4 name is mapped, or a custom name). User data (em/ph/external_id/IP/user agent), ecommerce custom data and the event_id dedup key are mapped from `ed - …` Event Data variables, which this tool creates in the workspace when they are missing. containerId must be the SERVER container. Needs a SERVER trigger (triggers_create) passed as firingTriggerId. Requires GTM_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/serverMigration.ts#L160-L450) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The SERVER container ID (for the plan tool: the WEB container)."
    },
    "workspaceId": {
      "type": "string",
      "description": "Workspace ID."
    },
    "name": {
      "type": "string",
      "description": "Tag name; defaults to \"Meta CAPI Tag\"."
    },
    "pixelId": {
      "type": "string"
    },
    "accessToken": {
      "type": "string",
      "description": "Meta CAPI access token, usually a {{variable}} so it is not stored in plain text on the tag."
    },
    "event": {
      "type": "string",
      "description": "Meta event, e.g. \"Purchase\" / \"Lead\", or a GA4 name."
    },
    "firingTriggerId": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "SERVER trigger id(s) the tag fires on (triggers_create, type customEvent). Usually one."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this write operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "pixelId",
    "accessToken",
    "event",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-create_tiktok_capi_server_tag-8e22aa8b"></a>

## create_tiktok_capi_server_tag

Handler: Validates vendor fields, installs or reuses the gallery template, ensures any required variables, and creates the typed tag in the draft server workspace.

```text
[WRITE] Create a TikTok Events API SERVER tag from the Stape template (stape-io/tiktok-tag), imported automatically. pixelId is the TikTok Pixel Code (public), accessToken the Events API token. `event` is the TikTok event (CompletePayment, SubmitForm, a GA4 name is mapped). User data, event properties and the event_id dedup key are mapped from `ed - …` Event Data variables, which this tool creates in the workspace when they are missing. containerId must be the SERVER container. Needs a SERVER trigger (triggers_create) passed as firingTriggerId. Requires GTM_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/serverMigration.ts#L160-L450) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The SERVER container ID (for the plan tool: the WEB container)."
    },
    "workspaceId": {
      "type": "string",
      "description": "Workspace ID."
    },
    "name": {
      "type": "string",
      "description": "Tag name; defaults to \"TikTok CAPI Tag\"."
    },
    "pixelId": {
      "type": "string",
      "description": "TikTok Pixel Code."
    },
    "accessToken": {
      "type": "string",
      "description": "TikTok Events API access token, usually a {{variable}} so it is not stored in plain text on the tag."
    },
    "event": {
      "type": "string"
    },
    "firingTriggerId": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "SERVER trigger id(s) the tag fires on (triggers_create, type customEvent). Usually one."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this write operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "pixelId",
    "accessToken",
    "event",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-create_linkedin_capi_server_tag-e23b3f7e"></a>

## create_linkedin_capi_server_tag

Handler: Validates vendor fields, installs or reuses the gallery template, ensures any required variables, and creates the typed tag in the draft server workspace.

```text
[WRITE] Create a LinkedIn Conversions API SERVER tag from the Stape template (stape-io/linkedin-tag), imported automatically. LinkedIn CAPI fires on a CONVERSION RULE URN (urn:lla:llaPartnerConversion:…) from Campaign Manager, NOT the web Partner ID; the tag auto-maps user ids / user info / event data. eventId dedups against the Insight Tag. containerId must be the SERVER container. Needs a SERVER trigger (triggers_create) passed as firingTriggerId. Requires GTM_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/serverMigration.ts#L160-L450) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The SERVER container ID (for the plan tool: the WEB container)."
    },
    "workspaceId": {
      "type": "string",
      "description": "Workspace ID."
    },
    "name": {
      "type": "string",
      "description": "Tag name; defaults to \"LinkedIn CAPI Tag\"."
    },
    "accessToken": {
      "type": "string",
      "description": "LinkedIn API access token, usually a {{variable}} so it is not stored in plain text on the tag."
    },
    "conversionRuleUrn": {
      "type": "string",
      "description": "urn:lla:llaPartnerConversion:<id>"
    },
    "eventId": {
      "type": "string"
    },
    "userIds": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "value": {
            "type": "string"
          }
        },
        "required": [
          "name",
          "value"
        ],
        "additionalProperties": false
      },
      "description": "Override rows {name, value}; names are the template's own field keys."
    },
    "userInfo": {
      "$ref": "#/properties/userIds"
    },
    "eventData": {
      "$ref": "#/properties/userIds"
    },
    "autoMap": {
      "type": "boolean"
    },
    "optimistic": {
      "type": "boolean"
    },
    "requireConsent": {
      "type": "boolean"
    },
    "firingTriggerId": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "SERVER trigger id(s) the tag fires on (triggers_create, type customEvent). Usually one."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this write operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "accessToken",
    "conversionRuleUrn",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-create_pinterest_capi_server_tag-77d2399d"></a>

## create_pinterest_capi_server_tag

Handler: Validates vendor fields, installs or reuses the gallery template, ensures any required variables, and creates the typed tag in the draft server workspace.

```text
[WRITE] Create a Pinterest Conversions API SERVER tag from the official template (pinterest/ss-gtm-template), imported automatically. advertiserId is the Pinterest Ad Account / tag id (public), apiAccessToken the Conversions API token. Omit `event` to inherit the incoming event name (auto-mapped); pass a Pinterest standard event (checkout, lead, signup, …) or a GA4 name to force one. containerId must be the SERVER container. Needs a SERVER trigger (triggers_create) passed as firingTriggerId. Requires GTM_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/serverMigration.ts#L160-L450) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The SERVER container ID (for the plan tool: the WEB container)."
    },
    "workspaceId": {
      "type": "string",
      "description": "Workspace ID."
    },
    "name": {
      "type": "string",
      "description": "Tag name; defaults to \"Pinterest CAPI Tag\"."
    },
    "advertiserId": {
      "type": "string"
    },
    "apiAccessToken": {
      "type": "string",
      "description": "Pinterest Conversions API token, usually a {{variable}} so it is not stored in plain text on the tag."
    },
    "event": {
      "type": "string"
    },
    "testMode": {
      "type": "boolean"
    },
    "firingTriggerId": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "SERVER trigger id(s) the tag fires on (triggers_create, type customEvent). Usually one."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this write operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "advertiserId",
    "apiAccessToken",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-create_stackadapt_server_tag-3e33ca3c"></a>

## create_stackadapt_server_tag

Handler: Validates vendor fields, installs or reuses the gallery template, ensures any required variables, and creates the typed tag in the draft server workspace.

```text
[WRITE] Create a StackAdapt SERVER pixel tag from the official template (StackAdapt/stackadapt-gtm-server-side-pixel), imported automatically. Not a CAPI: an id-only pixel (pixelID + pixelType rt/lal/conv/universal, default conv) with optional commonProperties (email/order_id/revenue/action…) and customProperties. No token, no event_id dedup. containerId must be the SERVER container. Needs a SERVER trigger (triggers_create) passed as firingTriggerId. Requires GTM_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/serverMigration.ts#L160-L450) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The SERVER container ID (for the plan tool: the WEB container)."
    },
    "workspaceId": {
      "type": "string",
      "description": "Workspace ID."
    },
    "name": {
      "type": "string",
      "description": "Tag name; defaults to \"StackAdapt Server Tag\"."
    },
    "pixelID": {
      "type": "string"
    },
    "pixelType": {
      "type": "string",
      "description": "rt (audience) | lal (lookalike) | conv (default) | universal"
    },
    "action": {
      "type": "string"
    },
    "commonProperties": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "value": {
            "type": "string"
          }
        },
        "required": [
          "name",
          "value"
        ],
        "additionalProperties": false
      },
      "description": "Override rows {name, value}; names are the template's own field keys."
    },
    "customProperties": {
      "$ref": "#/properties/commonProperties"
    },
    "firingTriggerId": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "SERVER trigger id(s) the tag fires on (triggers_create, type customEvent). Usually one."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this write operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "pixelID",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-create_reddit_capi_server_tag-d208e85e"></a>

## create_reddit_capi_server_tag

Handler: Validates vendor fields, installs or reuses the gallery template, ensures any required variables, and creates the typed tag in the draft server workspace.

```text
[WRITE] Create a Reddit Conversions API SERVER tag from the Stape template (stape-io/reddit-tag), imported automatically. pixelId is the Reddit Pixel/Advertiser id (t2_/a2_, public), accessToken the Conversions Access Token. Omit `event` to inherit; pass a Reddit standard event (PAGE_VISIT/VIEW_CONTENT/SEARCH/ADD_TO_CART/ADD_TO_WISHLIST/PURCHASE/LEAD/SIGN_UP), a GA4 name, or a custom name. eventId is the conversion_id dedup row. containerId must be the SERVER container. Needs a SERVER trigger (triggers_create) passed as firingTriggerId. Requires GTM_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/serverMigration.ts#L160-L450) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The SERVER container ID (for the plan tool: the WEB container)."
    },
    "workspaceId": {
      "type": "string",
      "description": "Workspace ID."
    },
    "name": {
      "type": "string",
      "description": "Tag name; defaults to \"Reddit CAPI Tag\"."
    },
    "pixelId": {
      "type": "string"
    },
    "accessToken": {
      "type": "string",
      "description": "Reddit Conversions access token, usually a {{variable}} so it is not stored in plain text on the tag."
    },
    "event": {
      "type": "string"
    },
    "eventId": {
      "type": "string"
    },
    "testId": {
      "type": "string"
    },
    "userData": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "value": {
            "type": "string"
          }
        },
        "required": [
          "name",
          "value"
        ],
        "additionalProperties": false
      },
      "description": "Override rows {name, value}; names are the template's own field keys."
    },
    "serverEventData": {
      "$ref": "#/properties/userData"
    },
    "autoMap": {
      "type": "boolean"
    },
    "optimistic": {
      "type": "boolean"
    },
    "requireConsent": {
      "type": "boolean"
    },
    "firingTriggerId": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "SERVER trigger id(s) the tag fires on (triggers_create, type customEvent). Usually one."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this write operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "pixelId",
    "accessToken",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-create_snapchat_capi_server_tag-fc61ce91"></a>

## create_snapchat_capi_server_tag

Handler: Validates vendor fields, installs or reuses the gallery template, ensures any required variables, and creates the typed tag in the draft server workspace.

```text
[WRITE] Create a Snapchat Conversions API SERVER tag from the official template (Snapchat/capi-google-tag-manager-serverside-tag), imported automatically. pixelId is the Snap Pixel ID (public), apiAccessToken the CAPI token. `event` is the Snap event (PURCHASE, SIGN_UP, a GA4 name is mapped). eventId dedups against the Snap Pixel. User data and the default event_id are mapped from the Meta-style `ed - …` Event Data variables, which this tool creates in the workspace when they are missing. containerId must be the SERVER container. Needs a SERVER trigger (triggers_create) passed as firingTriggerId. Requires GTM_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/serverMigration.ts#L160-L450) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The SERVER container ID (for the plan tool: the WEB container)."
    },
    "workspaceId": {
      "type": "string",
      "description": "Workspace ID."
    },
    "name": {
      "type": "string",
      "description": "Tag name; defaults to \"Snapchat CAPI Tag\"."
    },
    "pixelId": {
      "type": "string"
    },
    "apiAccessToken": {
      "type": "string",
      "description": "Snapchat CAPI access token, usually a {{variable}} so it is not stored in plain text on the tag."
    },
    "event": {
      "type": "string"
    },
    "eventId": {
      "type": "string"
    },
    "actionSource": {
      "type": "string"
    },
    "testId": {
      "type": "string"
    },
    "userData": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "value": {
            "type": "string"
          }
        },
        "required": [
          "name",
          "value"
        ],
        "additionalProperties": false
      },
      "description": "Override rows {name, value}; names are the template's own field keys."
    },
    "customData": {
      "$ref": "#/properties/userData"
    },
    "serverData": {
      "$ref": "#/properties/userData"
    },
    "firingTriggerId": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "SERVER trigger id(s) the tag fires on (triggers_create, type customEvent). Usually one."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this write operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "pixelId",
    "apiAccessToken",
    "event",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-create_microsoft_capi_server_tag-7919b9b1"></a>

## create_microsoft_capi_server_tag

Handler: Validates vendor fields, installs or reuses the gallery template, ensures any required variables, and creates the typed tag in the draft server workspace.

```text
[WRITE] Create a Microsoft Ads (Bing) UET Conversions API SERVER tag from the Stape template (stape-io/microsoft-capi-tag), imported automatically. uetTagId is the UET Tag ID (public; the built-in web tag stores it as tagId), authToken the API token. `event` is the conversion goal / GA4 name. REQUIRES the MSCLKID to be forwarded from the web side for attribution. containerId must be the SERVER container. Needs a SERVER trigger (triggers_create) passed as firingTriggerId. Requires GTM_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/serverMigration.ts#L160-L450) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The SERVER container ID (for the plan tool: the WEB container)."
    },
    "workspaceId": {
      "type": "string",
      "description": "Workspace ID."
    },
    "name": {
      "type": "string",
      "description": "Tag name; defaults to \"Microsoft Ads CAPI Tag\"."
    },
    "uetTagId": {
      "type": "string"
    },
    "authToken": {
      "type": "string",
      "description": "Microsoft Ads CAPI API token, usually a {{variable}} so it is not stored in plain text on the tag."
    },
    "event": {
      "type": "string"
    },
    "eventId": {
      "type": "string"
    },
    "userData": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "value": {
            "type": "string"
          }
        },
        "required": [
          "name",
          "value"
        ],
        "additionalProperties": false
      },
      "description": "Override rows {name, value}; names are the template's own field keys."
    },
    "eventData": {
      "$ref": "#/properties/userData"
    },
    "serverData": {
      "$ref": "#/properties/userData"
    },
    "autoMap": {
      "type": "boolean"
    },
    "requireConsent": {
      "type": "boolean"
    },
    "firingTriggerId": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "SERVER trigger id(s) the tag fires on (triggers_create, type customEvent). Usually one."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this write operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "uetTagId",
    "authToken",
    "event",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-create_amazon_capi_server_tag-00cde581"></a>

## create_amazon_capi_server_tag

Handler: Validates vendor fields, installs or reuses the gallery template, ensures any required variables, and creates the typed tag in the draft server workspace.

```text
[WRITE] Create an Amazon Ads Conversions API SERVER tag from the Stape template (stape-io/amazon-tag), imported automatically. No token: the only credential is tagIds (the Amazon Ads Tag UUIDs) plus tagRegion (NA | EU). Omit `event` to inherit; pass an Amazon standard event (Off-AmazonPurchases, Lead, …) or a GA4 name. eventId is the clientDedupeId dedup row. containerId must be the SERVER container. Needs a SERVER trigger (triggers_create) passed as firingTriggerId. Requires GTM_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/serverMigration.ts#L160-L450) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The SERVER container ID (for the plan tool: the WEB container)."
    },
    "workspaceId": {
      "type": "string",
      "description": "Workspace ID."
    },
    "name": {
      "type": "string",
      "description": "Tag name; defaults to \"Amazon Ads CAPI Tag\"."
    },
    "tagIds": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Amazon Ads Tag ID(s), UUIDs."
    },
    "tagRegion": {
      "type": "string",
      "description": "NA (default) | EU"
    },
    "event": {
      "type": "string"
    },
    "eventId": {
      "type": "string"
    },
    "enableAdvancedMatching": {
      "type": "boolean"
    },
    "userData": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "value": {
            "type": "string"
          }
        },
        "required": [
          "name",
          "value"
        ],
        "additionalProperties": false
      },
      "description": "Override rows {name, value}; names are the template's own field keys."
    },
    "customAttributes": {
      "$ref": "#/properties/userData"
    },
    "firingTriggerId": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "SERVER trigger id(s) the tag fires on (triggers_create, type customEvent). Usually one."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this write operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "tagIds",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-create_x_capi_server_tag-a0e26737"></a>

## create_x_capi_server_tag

Handler: Validates vendor fields, installs or reuses the gallery template, ensures any required variables, and creates the typed tag in the draft server workspace.

```text
[WRITE] Create an X (Twitter) Conversion API SERVER tag from the Stape template (stape-io/twitter-tag), imported automatically. The template has NO event-name field: eventId is the per-conversion X "Event ID" (tw-…) from X Ads > Events Manager, so one tag = one X conversion event and the server trigger decides when it fires. Auth is EITHER pixelAccessToken OR the OAuth 1.0a quartet. conversionId is the dedup row against the X Pixel. containerId must be the SERVER container. Needs a SERVER trigger (triggers_create) passed as firingTriggerId. Requires GTM_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/serverMigration.ts#L160-L450) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The SERVER container ID (for the plan tool: the WEB container)."
    },
    "workspaceId": {
      "type": "string",
      "description": "Workspace ID."
    },
    "name": {
      "type": "string",
      "description": "Tag name; defaults to \"X CAPI Tag\"."
    },
    "pixelId": {
      "type": "string",
      "description": "X Pixel ID (public)."
    },
    "eventId": {
      "type": "string",
      "description": "X conversion Event ID (tw-…)."
    },
    "pixelAccessToken": {
      "type": "string"
    },
    "consumerKey": {
      "type": "string"
    },
    "consumerSecret": {
      "type": "string"
    },
    "oauthToken": {
      "type": "string"
    },
    "oauthTokenSecret": {
      "type": "string"
    },
    "conversionId": {
      "type": "string"
    },
    "serverEventData": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "value": {
            "type": "string"
          }
        },
        "required": [
          "name",
          "value"
        ],
        "additionalProperties": false
      },
      "description": "Override rows {name, value}; names are the template's own field keys."
    },
    "userData": {
      "$ref": "#/properties/serverEventData"
    },
    "autoMap": {
      "type": "boolean"
    },
    "optimistic": {
      "type": "boolean"
    },
    "requireConsent": {
      "type": "boolean"
    },
    "firingTriggerId": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "SERVER trigger id(s) the tag fires on (triggers_create, type customEvent). Usually one."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this write operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "pixelId",
    "eventId",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-create_quora_capi_server_tag-d97bb60b"></a>

## create_quora_capi_server_tag

Handler: Validates vendor fields, installs or reuses the gallery template, ensures any required variables, and creates the typed tag in the draft server workspace.

```text
[WRITE] Create a Quora Conversion API SERVER tag from the Stape template (stape-io/quora-tag), imported automatically. pixelId is the Quora Pixel ID (stored in the template's accountId field), accessToken the Quora API token. Omit `event` to inherit; Quora has NO custom event, so an unknown name becomes Generic. eventId is the dedup row. containerId must be the SERVER container. Needs a SERVER trigger (triggers_create) passed as firingTriggerId. Requires GTM_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/serverMigration.ts#L160-L450) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The SERVER container ID (for the plan tool: the WEB container)."
    },
    "workspaceId": {
      "type": "string",
      "description": "Workspace ID."
    },
    "name": {
      "type": "string",
      "description": "Tag name; defaults to \"Quora CAPI Tag\"."
    },
    "pixelId": {
      "type": "string"
    },
    "accessToken": {
      "type": "string",
      "description": "Quora API access token, usually a {{variable}} so it is not stored in plain text on the tag."
    },
    "event": {
      "type": "string"
    },
    "eventId": {
      "type": "string"
    },
    "conversionData": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "value": {
            "type": "string"
          }
        },
        "required": [
          "name",
          "value"
        ],
        "additionalProperties": false
      },
      "description": "Override rows {name, value}; names are the template's own field keys."
    },
    "deviceEventData": {
      "$ref": "#/properties/conversionData"
    },
    "userData": {
      "$ref": "#/properties/conversionData"
    },
    "optimistic": {
      "type": "boolean"
    },
    "requireConsent": {
      "type": "boolean"
    },
    "firingTriggerId": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "SERVER trigger id(s) the tag fires on (triggers_create, type customEvent). Usually one."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this write operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "pixelId",
    "accessToken",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-create_adroll_capi_server_tag-d4d322c2"></a>

## create_adroll_capi_server_tag

Handler: Validates vendor fields, installs or reuses the gallery template, ensures any required variables, and creates the typed tag in the draft server workspace.

```text
[WRITE] Create an AdRoll SERVER tag from the Stape template (stape-io/adroll-tag), imported automatically. Needs advertisableId AND pixelId (both public, on the web snippet as adroll_adv_id / adroll_pix_id) plus an accessToken. Omit `event` to inherit; pageView/productSearch/addToCart/purchase or a GA4 name are standard, anything else is a custom event. containerId must be the SERVER container. Needs a SERVER trigger (triggers_create) passed as firingTriggerId. Requires GTM_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/serverMigration.ts#L160-L450) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The SERVER container ID (for the plan tool: the WEB container)."
    },
    "workspaceId": {
      "type": "string",
      "description": "Workspace ID."
    },
    "name": {
      "type": "string",
      "description": "Tag name; defaults to \"AdRoll CAPI Tag\"."
    },
    "advertisableId": {
      "type": "string"
    },
    "pixelId": {
      "type": "string"
    },
    "accessToken": {
      "type": "string",
      "description": "AdRoll access token, usually a {{variable}} so it is not stored in plain text on the tag."
    },
    "event": {
      "type": "string"
    },
    "testMode": {
      "type": "boolean"
    },
    "serverData": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "value": {
            "type": "string"
          }
        },
        "required": [
          "name",
          "value"
        ],
        "additionalProperties": false
      },
      "description": "Override rows {name, value}; names are the template's own field keys."
    },
    "userData": {
      "$ref": "#/properties/serverData"
    },
    "customData": {
      "$ref": "#/properties/serverData"
    },
    "optimistic": {
      "type": "boolean"
    },
    "requireConsent": {
      "type": "boolean"
    },
    "firingTriggerId": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "SERVER trigger id(s) the tag fires on (triggers_create, type customEvent). Usually one."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this write operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "advertisableId",
    "pixelId",
    "accessToken",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-create_nextdoor_capi_server_tag-9de3a744"></a>

## create_nextdoor_capi_server_tag

Handler: Validates vendor fields, installs or reuses the gallery template, ensures any required variables, and creates the typed tag in the draft server workspace.

```text
[WRITE] Create a Nextdoor Conversion API SERVER tag from the Stape template (stape-io/nextdoor-tag), imported automatically. Needs pixelId (public) plus clientId and accessToken from Nextdoor Ads. Omit `event` to inherit; conversion/lead/purchase/sign_up/custom_conversion_1..10 or a GA4 name are standard. eventId is the dedup row. containerId must be the SERVER container. Needs a SERVER trigger (triggers_create) passed as firingTriggerId. Requires GTM_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/serverMigration.ts#L160-L450) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The SERVER container ID (for the plan tool: the WEB container)."
    },
    "workspaceId": {
      "type": "string",
      "description": "Workspace ID."
    },
    "name": {
      "type": "string",
      "description": "Tag name; defaults to \"Nextdoor CAPI Tag\"."
    },
    "pixelId": {
      "type": "string"
    },
    "clientId": {
      "type": "string"
    },
    "accessToken": {
      "type": "string",
      "description": "Nextdoor access token, usually a {{variable}} so it is not stored in plain text on the tag."
    },
    "event": {
      "type": "string"
    },
    "eventId": {
      "type": "string"
    },
    "conversionType": {
      "type": "string"
    },
    "appId": {
      "type": "string"
    },
    "testEvent": {
      "type": "string"
    },
    "serverData": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "value": {
            "type": "string"
          }
        },
        "required": [
          "name",
          "value"
        ],
        "additionalProperties": false
      },
      "description": "Override rows {name, value}; names are the template's own field keys."
    },
    "userData": {
      "$ref": "#/properties/serverData"
    },
    "customData": {
      "$ref": "#/properties/serverData"
    },
    "optimistic": {
      "type": "boolean"
    },
    "requireConsent": {
      "type": "boolean"
    },
    "firingTriggerId": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "SERVER trigger id(s) the tag fires on (triggers_create, type customEvent). Usually one."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this write operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "pixelId",
    "clientId",
    "accessToken",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-create_yelp_capi_server_tag-02d88e52"></a>

## create_yelp_capi_server_tag

Handler: Validates vendor fields, installs or reuses the gallery template, ensures any required variables, and creates the typed tag in the draft server workspace.

```text
[WRITE] Create a Yelp Conversion API SERVER tag from the Stape template (stape-io/yelp-tag), imported automatically. Yelp has no pixel id: only the accessToken from Yelp Ads. Omit `event` to inherit; purchase/add_to_cart/checkout/lead/view_content/signup/… or a GA4 name are standard. eventId is the dedup row; validate runs Yelp's payload validation. containerId must be the SERVER container. Needs a SERVER trigger (triggers_create) passed as firingTriggerId. Requires GTM_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/serverMigration.ts#L160-L450) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The SERVER container ID (for the plan tool: the WEB container)."
    },
    "workspaceId": {
      "type": "string",
      "description": "Workspace ID."
    },
    "name": {
      "type": "string",
      "description": "Tag name; defaults to \"Yelp CAPI Tag\"."
    },
    "accessToken": {
      "type": "string",
      "description": "Yelp Ads access token, usually a {{variable}} so it is not stored in plain text on the tag."
    },
    "event": {
      "type": "string"
    },
    "eventId": {
      "type": "string"
    },
    "conversionType": {
      "type": "string"
    },
    "validate": {
      "type": "boolean"
    },
    "serverData": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "value": {
            "type": "string"
          }
        },
        "required": [
          "name",
          "value"
        ],
        "additionalProperties": false
      },
      "description": "Override rows {name, value}; names are the template's own field keys."
    },
    "userData": {
      "$ref": "#/properties/serverData"
    },
    "customData": {
      "$ref": "#/properties/serverData"
    },
    "optimistic": {
      "type": "boolean"
    },
    "requireConsent": {
      "type": "boolean"
    },
    "firingTriggerId": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "SERVER trigger id(s) the tag fires on (triggers_create, type customEvent). Usually one."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this write operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "accessToken",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-create_spotify_capi_server_tag-4c163053"></a>

## create_spotify_capi_server_tag

Handler: Validates vendor fields, installs or reuses the gallery template, ensures any required variables, and creates the typed tag in the draft server workspace.

```text
[WRITE] Create a Spotify Ads Conversion API SERVER tag from the Stape template (stape-io/spotify-tag), imported automatically. Needs authToken and connectionId. Omit `event` to inherit; Page_View/Sign_Up/Lead/View_Product/Add_Cart/Start_Checkout/Purchase or a GA4 name are standard, custom_event_1..5 are the only custom slots (anything else inherits). eventId is the dedup row. containerId must be the SERVER container. Needs a SERVER trigger (triggers_create) passed as firingTriggerId. Requires GTM_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/serverMigration.ts#L160-L450) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The SERVER container ID (for the plan tool: the WEB container)."
    },
    "workspaceId": {
      "type": "string",
      "description": "Workspace ID."
    },
    "name": {
      "type": "string",
      "description": "Tag name; defaults to \"Spotify CAPI Tag\"."
    },
    "authToken": {
      "type": "string",
      "description": "Spotify Ads authentication token, usually a {{variable}} so it is not stored in plain text on the tag."
    },
    "connectionId": {
      "type": "string"
    },
    "event": {
      "type": "string"
    },
    "eventId": {
      "type": "string"
    },
    "actionSource": {
      "type": "string"
    },
    "optOutTargeting": {
      "type": "boolean"
    },
    "serverEventData": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "value": {
            "type": "string"
          }
        },
        "required": [
          "name",
          "value"
        ],
        "additionalProperties": false
      },
      "description": "Override rows {name, value}; names are the template's own field keys."
    },
    "eventDetails": {
      "$ref": "#/properties/serverEventData"
    },
    "userData": {
      "$ref": "#/properties/serverEventData"
    },
    "autoMap": {
      "type": "boolean"
    },
    "optimistic": {
      "type": "boolean"
    },
    "requireConsent": {
      "type": "boolean"
    },
    "firingTriggerId": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "SERVER trigger id(s) the tag fires on (triggers_create, type customEvent). Usually one."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this write operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "authToken",
    "connectionId",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-create_line_yahoo_capi_server_tag-3cdff2e2"></a>

## create_line_yahoo_capi_server_tag

Handler: Validates vendor fields, installs or reuses the gallery template, ensures any required variables, and creates the typed tag in the draft server workspace.

```text
[WRITE] Create a LINE Yahoo (Yahoo! JAPAN Ads) Conversion API SERVER tag from the Stape template (stape-io/line-yahoo-tag), imported automatically. Needs the Yahoo tagId (public), accessToken and channelId. Omit `event` to inherit; Yahoo has NO custom events (unknown names inherit). Every event other than page_view needs its own eventSnippetId from Yahoo Ads. transactionId is the dedup row. containerId must be the SERVER container. Needs a SERVER trigger (triggers_create) passed as firingTriggerId. Requires GTM_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/serverMigration.ts#L160-L450) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The SERVER container ID (for the plan tool: the WEB container)."
    },
    "workspaceId": {
      "type": "string",
      "description": "Workspace ID."
    },
    "name": {
      "type": "string",
      "description": "Tag name; defaults to \"LINE Yahoo CAPI Tag\"."
    },
    "tagId": {
      "type": "string"
    },
    "accessToken": {
      "type": "string",
      "description": "Yahoo Ads tag access token, usually a {{variable}} so it is not stored in plain text on the tag."
    },
    "channelId": {
      "type": "string"
    },
    "event": {
      "type": "string"
    },
    "eventSnippetId": {
      "type": "string"
    },
    "transactionId": {
      "type": "string"
    },
    "testMode": {
      "type": "boolean"
    },
    "serverEventData": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "value": {
            "type": "string"
          }
        },
        "required": [
          "name",
          "value"
        ],
        "additionalProperties": false
      },
      "description": "Override rows {name, value}; names are the template's own field keys."
    },
    "userIdentifiers": {
      "$ref": "#/properties/serverEventData"
    },
    "webParameters": {
      "$ref": "#/properties/serverEventData"
    },
    "eventParameters": {
      "$ref": "#/properties/serverEventData"
    },
    "autoMap": {
      "type": "boolean"
    },
    "optimistic": {
      "type": "boolean"
    },
    "requireConsent": {
      "type": "boolean"
    },
    "firingTriggerId": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "SERVER trigger id(s) the tag fires on (triggers_create, type customEvent). Usually one."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this write operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "tagId",
    "accessToken",
    "channelId",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-create_rtb_house_server_tag-7485e112"></a>

## create_rtb_house_server_tag

Handler: Validates vendor fields, installs or reuses the gallery template, ensures any required variables, and creates the typed tag in the draft server workspace.

```text
[WRITE] Create an RTB House SERVER tag from the Stape template (stape-io/rtb-house-tag), imported automatically. A retargeting tag with NO token: needs the taggingHash (public, the id in the creativecdn.com pixel URL) and the partnerKey. Its events are PAGE TYPES, so `event` is required: home/listing/offer/wishlist/basketadd/basketstatus/startorder/conversion_order/conversion or a GA4 name (page_view→home, view_item→offer, add_to_cart→basketadd, purchase→conversion_order, …). containerId must be the SERVER container. Needs a SERVER trigger (triggers_create) passed as firingTriggerId. Requires GTM_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/serverMigration.ts#L160-L450) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The SERVER container ID (for the plan tool: the WEB container)."
    },
    "workspaceId": {
      "type": "string",
      "description": "Workspace ID."
    },
    "name": {
      "type": "string",
      "description": "Tag name; defaults to \"RTB House Server Tag\"."
    },
    "taggingHash": {
      "type": "string"
    },
    "partnerKey": {
      "type": "string",
      "description": "RTB House partner key, usually a {{variable}} so it is not stored in plain text on the tag."
    },
    "event": {
      "type": "string"
    },
    "region": {
      "type": "string",
      "description": "us (default) | ams | asia"
    },
    "orderId": {
      "type": "string"
    },
    "orderValue": {
      "type": "string"
    },
    "productIds": {
      "type": "string"
    },
    "categoryId": {
      "type": "string"
    },
    "conversionId": {
      "type": "string"
    },
    "conversionValue": {
      "type": "string"
    },
    "serverEventData": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "value": {
            "type": "string"
          }
        },
        "required": [
          "name",
          "value"
        ],
        "additionalProperties": false
      },
      "description": "Override rows {name, value}; names are the template's own field keys."
    },
    "autoMap": {
      "type": "boolean"
    },
    "optimistic": {
      "type": "boolean"
    },
    "requireConsent": {
      "type": "boolean"
    },
    "firingTriggerId": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "SERVER trigger id(s) the tag fires on (triggers_create, type customEvent). Usually one."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to confirm this write operation."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "taggingHash",
    "partnerKey",
    "event",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-audit_container-8180158f"></a>

## audit_container

Handler: Reads workspace entities and runs implemented tag, trigger, variable and analytics audit checks.

```text
Inspect a GTM workspace for common analytics implementation issues. Returns structured findings with severity levels (error/warning/info). This is a read-only operation — it never modifies anything.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/audit.ts#L84-L489) · Schema: tools/list.

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
    "includeInfo": {
      "type": "boolean",
      "default": false,
      "description": "Include informational findings (verbose). Default: false."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-export_container-76595276"></a>

## export_container

Handler: Paginates workspace tags, triggers, variables, folders and built-in variables and returns the selected JSON export format.

```text
Export a full GTM workspace summary as structured JSON. Returns all tags, triggers, variables, folders, and built-in variables. This is a read-only operation. Use this for documentation, auditing, or feeding container data to other tools.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/export.ts#L16-L162) · Schema: tools/list.

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
    "format": {
      "type": "string",
      "enum": [
        "full",
        "summary",
        "names_only"
      ],
      "default": "summary",
      "description": "\"full\" = all fields, \"summary\" = key fields only, \"names_only\" = just names and IDs"
    },
    "maxPages": {
      "type": "integer",
      "exclusiveMinimum": 0,
      "description": "Maximum API pages to fetch PER collection (default 50); the five collections are paged independently, so maxPages:2 costs up to 10 API pages. If more remain, the export is marked incomplete:true with truncatedCollections and per-collection nextPageTokens."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_account_summaries_list-920465ee"></a>

## ga4_account_summaries_list

Handler: Google Analytics 4: Calls client.accountSummaries.list and returns the result or a formatted error.

```text
List GA4 account summaries accessible to the authenticated user. Each summary includes the account plus a lightweight list of its property summaries (property ID + display name). Best starting point to discover available GA4 accounts and properties. Read-only.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4Admin.ts#L52-L80) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "pageToken": {
      "type": "string",
      "description": "Continuation token to resume listing from a previous truncated result."
    },
    "maxPages": {
      "type": "integer",
      "exclusiveMinimum": 0,
      "description": "Maximum number of API pages to fetch (default 50). If more pages remain, the result includes truncated:true and a nextPageToken."
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_properties_list-53ec0b53"></a>

## ga4_properties_list

Handler: Google Analytics 4: Calls client.properties.list and returns the result or a formatted error.

```text
List GA4 properties under a given parent account. Returns full property records (display name, time zone, currency, industry, service level). Read-only.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4Admin.ts#L81-L124) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "minLength": 1,
      "description": "Parent GA4 account ID, e.g. \"123456\" or \"accounts/123456\"."
    },
    "showDeleted": {
      "type": "boolean",
      "description": "Include soft-deleted (trashed) properties in the results."
    },
    "pageToken": {
      "type": "string",
      "description": "Continuation token to resume listing from a previous truncated result."
    },
    "maxPages": {
      "type": "integer",
      "exclusiveMinimum": 0,
      "description": "Maximum number of API pages to fetch (default 50). If more pages remain, the result includes truncated:true and a nextPageToken."
    }
  },
  "required": [
    "accountId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_property_get-e7b614db"></a>

## ga4_property_get

Handler: Google Analytics 4: Calls client.properties.get and returns the result or a formatted error.

```text
Get a single GA4 property by ID, including display name, time zone, currency, industry category, and service level. Read-only.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4Admin.ts#L125-L144) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID, e.g. \"123456789\" or \"properties/123456789\"."
    }
  },
  "required": [
    "property"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_data_streams_list-8ec3b916"></a>

## ga4_data_streams_list

Handler: Google Analytics 4: Calls client.properties.dataStreams.list and returns the result or a formatted error.

```text
List data streams for a GA4 property (web, Android, iOS). Web streams include the measurement ID and default URI; app streams include package name / bundle ID. Use this to audit measurement IDs and stream config. Read-only.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4Admin.ts#L145-L174) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID, e.g. \"123456789\" or \"properties/123456789\"."
    },
    "pageToken": {
      "type": "string",
      "description": "Continuation token to resume listing from a previous truncated result."
    },
    "maxPages": {
      "type": "integer",
      "exclusiveMinimum": 0,
      "description": "Maximum number of API pages to fetch (default 50). If more pages remain, the result includes truncated:true and a nextPageToken."
    }
  },
  "required": [
    "property"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_enhanced_measurement_get-cef9a544"></a>

## ga4_enhanced_measurement_get

Handler: Google Analytics 4: Calls client.properties.dataStreams.getEnhancedMeasurementSettings and returns the result or a formatted error.

```text
Get the enhanced measurement settings for a specific WEB data stream (scrolls, outbound clicks, site search, video engagement, file downloads, form interactions). Only valid for web streams. Served via the Admin API v1alpha surface (not yet in v1beta). Read-only.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4Admin.ts#L175-L206) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID, e.g. \"123456789\" or \"properties/123456789\"."
    },
    "dataStreamId": {
      "type": "string",
      "minLength": 1,
      "description": "The data stream ID (numeric) or full \"dataStreams/{id}\" suffix."
    }
  },
  "required": [
    "property",
    "dataStreamId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_custom_dimensions_list-fbaab848"></a>

## ga4_custom_dimensions_list

Handler: Google Analytics 4: Calls client.properties.customDimensions.list and returns the result or a formatted error.

```text
List custom dimensions configured on a GA4 property (parameter name, display name, scope: EVENT/USER/ITEM). Read-only.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4Admin.ts#L207-L234) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID, e.g. \"123456789\" or \"properties/123456789\"."
    },
    "pageToken": {
      "type": "string",
      "description": "Continuation token to resume listing from a previous truncated result."
    },
    "maxPages": {
      "type": "integer",
      "exclusiveMinimum": 0,
      "description": "Maximum number of API pages to fetch (default 50). If more pages remain, the result includes truncated:true and a nextPageToken."
    }
  },
  "required": [
    "property"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_custom_metrics_list-d986e207"></a>

## ga4_custom_metrics_list

Handler: Google Analytics 4: Calls client.properties.customMetrics.list and returns the result or a formatted error.

```text
List custom metrics configured on a GA4 property (parameter name, display name, measurement unit, scope, restricted-metric type). Read-only.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4Admin.ts#L235-L263) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID, e.g. \"123456789\" or \"properties/123456789\"."
    },
    "pageToken": {
      "type": "string",
      "description": "Continuation token to resume listing from a previous truncated result."
    },
    "maxPages": {
      "type": "integer",
      "exclusiveMinimum": 0,
      "description": "Maximum number of API pages to fetch (default 50). If more pages remain, the result includes truncated:true and a nextPageToken."
    }
  },
  "required": [
    "property"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_data_retention_get-9268d04f"></a>

## ga4_data_retention_get

Handler: Google Analytics 4: Calls client.properties.getDataRetentionSettings and returns the result or a formatted error.

```text
Get the data retention settings for a GA4 property (event data retention duration and whether retention resets on new activity). Read-only.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4Admin.ts#L264-L284) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID, e.g. \"123456789\" or \"properties/123456789\"."
    }
  },
  "required": [
    "property"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_key_events_list-25f2b3b8"></a>

## ga4_key_events_list

Handler: Google Analytics 4: Calls client.properties.keyEvents.list and returns the result or a formatted error.

```text
List key events (formerly "conversion events") for a GA4 property — the current Admin API naming. Returns event name, counting method, and whether the event is deletable. Read-only.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4Admin.ts#L285-L313) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID, e.g. \"123456789\" or \"properties/123456789\"."
    },
    "pageToken": {
      "type": "string",
      "description": "Continuation token to resume listing from a previous truncated result."
    },
    "maxPages": {
      "type": "integer",
      "exclusiveMinimum": 0,
      "description": "Maximum number of API pages to fetch (default 50). If more pages remain, the result includes truncated:true and a nextPageToken."
    }
  },
  "required": [
    "property"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_google_ads_links_list-7c4f7bf0"></a>

## ga4_google_ads_links_list

Handler: Google Analytics 4: Calls client.properties.googleAdsLinks.list and returns the result or a formatted error.

```text
List Google Ads links for a GA4 property (linked customer ID, personalized-advertising and auto-tagging flags). Read-only.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4Admin.ts#L314-L340) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID, e.g. \"123456789\" or \"properties/123456789\"."
    },
    "pageToken": {
      "type": "string",
      "description": "Continuation token to resume listing from a previous truncated result."
    },
    "maxPages": {
      "type": "integer",
      "exclusiveMinimum": 0,
      "description": "Maximum number of API pages to fetch (default 50). If more pages remain, the result includes truncated:true and a nextPageToken."
    }
  },
  "required": [
    "property"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_create_key_event-503e5cec"></a>

## ga4_create_key_event

Handler: Google Analytics 4: gates the operation and calls v1beta properties.keyEvents.create with resolved resource paths and request fields.

```text
[GA4 WRITE] Create a key event (conversion) on a GA4 property. Requires GA4_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L188-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID, e.g. \"123456789\" or \"properties/123456789\"."
    },
    "eventName": {
      "type": "string",
      "minLength": 1,
      "description": "The event name to mark as a key event (e.g. \"purchase\")."
    },
    "countingMethod": {
      "type": "string",
      "enum": [
        "ONCE_PER_EVENT",
        "ONCE_PER_SESSION"
      ],
      "description": "How the key event is counted. Default ONCE_PER_EVENT."
    },
    "body": {
      "type": "object",
      "additionalProperties": {},
      "description": "Raw request-body object (JSON) merged OVER the typed fields — use for nested/advanced fields not exposed as flat args."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to apply the change."
    }
  },
  "required": [
    "property",
    "eventName",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_update_key_event-9fe62a80"></a>

## ga4_update_key_event

Handler: Google Analytics 4: gates the operation and calls v1beta properties.keyEvents.patch with resolved resource paths and request fields.

```text
[GA4 WRITE] Update a key event (e.g. its counting method or default value via body). Pass only the fields to change; updateMask is derived from them (override with an explicit updateMask for nested paths). Requires GA4_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L220-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "Full resource name of the key event to target, e.g. \"properties/123/…/456\"."
    },
    "countingMethod": {
      "type": "string",
      "enum": [
        "ONCE_PER_EVENT",
        "ONCE_PER_SESSION"
      ]
    },
    "body": {
      "type": "object",
      "additionalProperties": {},
      "description": "Raw request-body object (JSON) merged OVER the typed fields — use for nested/advanced fields not exposed as flat args."
    },
    "updateMask": {
      "type": "string",
      "description": "Comma-separated field paths to update. Omit to derive from the supplied fields."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to apply the change."
    }
  },
  "required": [
    "name",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_delete_key_event-c4c6bdad"></a>

## ga4_delete_key_event

Handler: Google Analytics 4: gates the operation and calls v1beta properties.keyEvents.delete with resolved resource paths and request fields.

```text
[GA4 DELETE] Delete a key event (it reverts to a normal event). Requires GA4_MCP_ENABLE_DELETES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L266-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "Full resource name of the key event to target, e.g. \"properties/123/…/456\"."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to delete."
    }
  },
  "required": [
    "name",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_create_custom_dimension-2ce8700e"></a>

## ga4_create_custom_dimension

Handler: Google Analytics 4: gates the operation and calls v1beta properties.customDimensions.create with resolved resource paths and request fields.

```text
[GA4 WRITE] Create a custom dimension. Requires GA4_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L188-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID, e.g. \"123456789\" or \"properties/123456789\"."
    },
    "parameterName": {
      "type": "string",
      "minLength": 1,
      "description": "Event/user/item parameter name to register."
    },
    "displayName": {
      "type": "string",
      "minLength": 1,
      "description": "UI display name."
    },
    "scope": {
      "type": "string",
      "enum": [
        "EVENT",
        "USER",
        "ITEM"
      ],
      "description": "Dimension scope."
    },
    "description": {
      "type": "string"
    },
    "disallowAdsPersonalization": {
      "type": "boolean",
      "description": "If true, exclude from ads personalization (USER scope)."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to apply the change."
    }
  },
  "required": [
    "property",
    "parameterName",
    "displayName",
    "scope",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_update_custom_dimension-12ee33de"></a>

## ga4_update_custom_dimension

Handler: Google Analytics 4: gates the operation and calls v1beta properties.customDimensions.patch with resolved resource paths and request fields.

```text
[GA4 WRITE] Update a custom dimension (parameterName and scope are immutable). Pass only the fields to change; updateMask is derived from them (override with an explicit updateMask for nested paths). Requires GA4_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L220-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "Full resource name of the custom dimension to target, e.g. \"properties/123/…/456\"."
    },
    "displayName": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "disallowAdsPersonalization": {
      "type": "boolean"
    },
    "updateMask": {
      "type": "string",
      "description": "Comma-separated field paths to update. Omit to derive from the supplied fields."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to apply the change."
    }
  },
  "required": [
    "name",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_archive_custom_dimension-1fc6993a"></a>

## ga4_archive_custom_dimension

Handler: Google Analytics 4: gates the operation and calls v1beta properties.customDimensions.archive with resolved resource paths and request fields.

```text
[GA4 DELETE] Archive a custom dimension (there is no hard delete). Archiving is effectively permanent (no un-archive). Requires GA4_MCP_ENABLE_DELETES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L290-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "Full resource name of the custom dimension to target, e.g. \"properties/123/…/456\"."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to archive."
    }
  },
  "required": [
    "name",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_create_custom_metric-840cf76a"></a>

## ga4_create_custom_metric

Handler: Google Analytics 4: gates the operation and calls v1beta properties.customMetrics.create with resolved resource paths and request fields.

```text
[GA4 WRITE] Create a custom metric. Requires GA4_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L188-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID, e.g. \"123456789\" or \"properties/123456789\"."
    },
    "parameterName": {
      "type": "string",
      "minLength": 1,
      "description": "Event parameter name to register as a metric."
    },
    "displayName": {
      "type": "string",
      "minLength": 1
    },
    "measurementUnit": {
      "type": "string",
      "enum": [
        "STANDARD",
        "CURRENCY",
        "FEET",
        "METERS",
        "KILOMETERS",
        "MILES",
        "MILLISECONDS",
        "SECONDS",
        "MINUTES",
        "HOURS"
      ],
      "description": "Measurement unit."
    },
    "scope": {
      "type": "string",
      "enum": [
        "EVENT"
      ],
      "description": "Custom metric scope (EVENT)."
    },
    "description": {
      "type": "string"
    },
    "restrictedMetricType": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "COST_DATA",
          "REVENUE_DATA"
        ]
      },
      "description": "Restricted-metric types (for CURRENCY metrics)."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to apply the change."
    }
  },
  "required": [
    "property",
    "parameterName",
    "displayName",
    "measurementUnit",
    "scope",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_update_custom_metric-e82b1abf"></a>

## ga4_update_custom_metric

Handler: Google Analytics 4: gates the operation and calls v1beta properties.customMetrics.patch with resolved resource paths and request fields.

```text
[GA4 WRITE] Update a custom metric (parameterName and scope are immutable). Pass only the fields to change; updateMask is derived from them (override with an explicit updateMask for nested paths). Requires GA4_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L220-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "Full resource name of the custom metric to target, e.g. \"properties/123/…/456\"."
    },
    "displayName": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "measurementUnit": {
      "type": "string"
    },
    "updateMask": {
      "type": "string",
      "description": "Comma-separated field paths to update. Omit to derive from the supplied fields."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to apply the change."
    }
  },
  "required": [
    "name",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_archive_custom_metric-8be70bfb"></a>

## ga4_archive_custom_metric

Handler: Google Analytics 4: gates the operation and calls v1beta properties.customMetrics.archive with resolved resource paths and request fields.

```text
[GA4 DELETE] Archive a custom metric (there is no hard delete). Archiving is effectively permanent (no un-archive). Requires GA4_MCP_ENABLE_DELETES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L290-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "Full resource name of the custom metric to target, e.g. \"properties/123/…/456\"."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to archive."
    }
  },
  "required": [
    "name",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_create_data_stream-9d40c550"></a>

## ga4_create_data_stream

Handler: Google Analytics 4: gates the operation and calls v1beta properties.dataStreams.create with resolved resource paths and request fields.

```text
[GA4 WRITE] Create a data stream (web / Android / iOS). Requires GA4_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L188-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID, e.g. \"123456789\" or \"properties/123456789\"."
    },
    "type": {
      "type": "string",
      "enum": [
        "WEB_DATA_STREAM",
        "ANDROID_APP_DATA_STREAM",
        "IOS_APP_DATA_STREAM"
      ],
      "description": "Stream type."
    },
    "displayName": {
      "type": "string",
      "minLength": 1
    },
    "defaultUri": {
      "type": "string",
      "description": "For WEB streams: the site URL (sets webStreamData.defaultUri)."
    },
    "packageName": {
      "type": "string",
      "description": "For ANDROID streams: the app package name."
    },
    "bundleId": {
      "type": "string",
      "description": "For IOS streams: the app bundle id."
    },
    "body": {
      "type": "object",
      "additionalProperties": {},
      "description": "Raw request-body object (JSON) merged OVER the typed fields — use for nested/advanced fields not exposed as flat args."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to apply the change."
    }
  },
  "required": [
    "property",
    "type",
    "displayName",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_update_data_stream-27f95aa4"></a>

## ga4_update_data_stream

Handler: Google Analytics 4: gates the operation and calls v1beta properties.dataStreams.patch with resolved resource paths and request fields.

```text
[GA4 WRITE] Update a data stream: displayName and (web) defaultUri ONLY. Cross-domain domains, unwanted referrals, internal traffic and session settings are Google tag settings with NO Admin API fields - never attempt them; direct the user to GA4 Admin > Data streams > Configure tag settings. Pass only the fields to change; updateMask is derived from them (override with an explicit updateMask for nested paths). Requires GA4_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L220-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "Full resource name of the data stream to target, e.g. \"properties/123/…/456\"."
    },
    "displayName": {
      "type": "string"
    },
    "defaultUri": {
      "type": "string",
      "description": "New site URL for a WEB stream (webStreamData.defaultUri)."
    },
    "body": {
      "type": "object",
      "additionalProperties": {},
      "description": "Raw request-body object (JSON) merged OVER the typed fields — use for nested/advanced fields not exposed as flat args."
    },
    "updateMask": {
      "type": "string",
      "description": "Comma-separated field paths to update. Omit to derive from the supplied fields."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to apply the change."
    }
  },
  "required": [
    "name",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_delete_data_stream-707dd56e"></a>

## ga4_delete_data_stream

Handler: Google Analytics 4: gates the operation and calls v1beta properties.dataStreams.delete with resolved resource paths and request fields.

```text
[GA4 DELETE] Delete a data stream (removes its measurement ID / firebase app id). Requires GA4_MCP_ENABLE_DELETES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L266-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "Full resource name of the data stream to target, e.g. \"properties/123/…/456\"."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to delete."
    }
  },
  "required": [
    "name",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_create_google_ads_link-831b0d9d"></a>

## ga4_create_google_ads_link

Handler: Google Analytics 4: gates the operation and calls v1beta properties.googleAdsLinks.create with resolved resource paths and request fields.

```text
[GA4 WRITE] Create a Google Ads link. Requires GA4_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L188-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID, e.g. \"123456789\" or \"properties/123456789\"."
    },
    "customerId": {
      "type": "string",
      "minLength": 1,
      "description": "Google Ads customer ID (digits, no dashes)."
    },
    "adsPersonalizationEnabled": {
      "type": "boolean"
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to apply the change."
    }
  },
  "required": [
    "property",
    "customerId",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_update_google_ads_link-2298035d"></a>

## ga4_update_google_ads_link

Handler: Google Analytics 4: gates the operation and calls v1beta properties.googleAdsLinks.patch with resolved resource paths and request fields.

```text
[GA4 WRITE] Update a Google Ads link (personalized advertising flag). Pass only the fields to change; updateMask is derived from them (override with an explicit updateMask for nested paths). Requires GA4_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L220-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "Full resource name of the Google Ads link to target, e.g. \"properties/123/…/456\"."
    },
    "adsPersonalizationEnabled": {
      "type": "boolean"
    },
    "updateMask": {
      "type": "string",
      "description": "Comma-separated field paths to update. Omit to derive from the supplied fields."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to apply the change."
    }
  },
  "required": [
    "name",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_delete_google_ads_link-75fbc531"></a>

## ga4_delete_google_ads_link

Handler: Google Analytics 4: gates the operation and calls v1beta properties.googleAdsLinks.delete with resolved resource paths and request fields.

```text
[GA4 DELETE] Delete a Google Ads link. Requires GA4_MCP_ENABLE_DELETES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L266-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "Full resource name of the Google Ads link to target, e.g. \"properties/123/…/456\"."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to delete."
    }
  },
  "required": [
    "name",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_create_firebase_link-fa352dc5"></a>

## ga4_create_firebase_link

Handler: Google Analytics 4: gates the operation and calls v1beta properties.firebaseLinks.create with resolved resource paths and request fields.

```text
[GA4 WRITE] Create a Firebase link (no update; delete + recreate to change). Requires GA4_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L188-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID, e.g. \"123456789\" or \"properties/123456789\"."
    },
    "project": {
      "type": "string",
      "minLength": 1,
      "description": "Firebase project id or number (\"projects/{id}\")."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to apply the change."
    }
  },
  "required": [
    "property",
    "project",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_delete_firebase_link-d7b7bc6c"></a>

## ga4_delete_firebase_link

Handler: Google Analytics 4: gates the operation and calls v1beta properties.firebaseLinks.delete with resolved resource paths and request fields.

```text
[GA4 DELETE] Delete a Firebase link. Requires GA4_MCP_ENABLE_DELETES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L266-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "Full resource name of the Firebase link to target, e.g. \"properties/123/…/456\"."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to delete."
    }
  },
  "required": [
    "name",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_create_measurement_protocol_secret-2e830f23"></a>

## ga4_create_measurement_protocol_secret

Handler: Google Analytics 4: gates the operation and calls v1beta properties.dataStreams.measurementProtocolSecrets.create with resolved resource paths and request fields.

```text
[GA4 WRITE] Create a Measurement Protocol secret on a data stream. The response includes the secretValue — store it securely. Requires GA4_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L188-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID, e.g. \"123456789\" or \"properties/123456789\"."
    },
    "dataStreamId": {
      "type": "string",
      "minLength": 1,
      "description": "Data stream ID (numeric) or \"dataStreams/{id}\"."
    },
    "displayName": {
      "type": "string",
      "minLength": 1,
      "description": "Human-readable name for the secret."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to apply the change."
    }
  },
  "required": [
    "property",
    "dataStreamId",
    "displayName",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_update_measurement_protocol_secret-f85dd0f7"></a>

## ga4_update_measurement_protocol_secret

Handler: Google Analytics 4: gates the operation and calls v1beta properties.dataStreams.measurementProtocolSecrets.patch with resolved resource paths and request fields.

```text
[GA4 WRITE] Rename a Measurement Protocol secret. Pass only the fields to change; updateMask is derived from them (override with an explicit updateMask for nested paths). Requires GA4_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L220-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "Full resource name of the Measurement Protocol secret to target, e.g. \"properties/123/…/456\"."
    },
    "displayName": {
      "type": "string",
      "minLength": 1
    },
    "updateMask": {
      "type": "string",
      "description": "Comma-separated field paths to update. Omit to derive from the supplied fields."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to apply the change."
    }
  },
  "required": [
    "name",
    "displayName",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_delete_measurement_protocol_secret-c52a1e0f"></a>

## ga4_delete_measurement_protocol_secret

Handler: Google Analytics 4: gates the operation and calls v1beta properties.dataStreams.measurementProtocolSecrets.delete with resolved resource paths and request fields.

```text
[GA4 DELETE] Delete a Measurement Protocol secret (revokes it). Requires GA4_MCP_ENABLE_DELETES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L266-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "Full resource name of the Measurement Protocol secret to target, e.g. \"properties/123/…/456\"."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to delete."
    }
  },
  "required": [
    "name",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_create_audience-406760e3"></a>

## ga4_create_audience

Handler: Google Analytics 4: gates the operation and calls v1alpha properties.audiences.create with resolved resource paths and request fields.

```text
[GA4 WRITE] Create an audience. Pass the filterClauses via `body` (see the Admin API Audience shape). Requires GA4_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L188-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID, e.g. \"123456789\" or \"properties/123456789\"."
    },
    "displayName": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "membershipDurationDays": {
      "type": "number"
    },
    "body": {
      "type": "object",
      "additionalProperties": {},
      "description": "Raw request-body object (JSON) merged OVER the typed fields — use for nested/advanced fields not exposed as flat args."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to apply the change."
    }
  },
  "required": [
    "property",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_update_audience-e788bc76"></a>

## ga4_update_audience

Handler: Google Analytics 4: gates the operation and calls v1alpha properties.audiences.patch with resolved resource paths and request fields.

```text
[GA4 WRITE] Update an audience (only displayName/description are mutable; filters are immutable). Pass only the fields to change; updateMask is derived from them (override with an explicit updateMask for nested paths). Requires GA4_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L220-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "Full resource name of the audience to target, e.g. \"properties/123/…/456\"."
    },
    "displayName": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "body": {
      "type": "object",
      "additionalProperties": {},
      "description": "Raw request-body object (JSON) merged OVER the typed fields — use for nested/advanced fields not exposed as flat args."
    },
    "updateMask": {
      "type": "string",
      "description": "Comma-separated field paths to update. Omit to derive from the supplied fields."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to apply the change."
    }
  },
  "required": [
    "name",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_archive_audience-7a344fb5"></a>

## ga4_archive_audience

Handler: Google Analytics 4: gates the operation and calls v1alpha properties.audiences.archive with resolved resource paths and request fields.

```text
[GA4 DELETE] Archive an audience (stops collection; effectively permanent). Archiving is effectively permanent (no un-archive). Requires GA4_MCP_ENABLE_DELETES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L290-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "Full resource name of the audience to target, e.g. \"properties/123/…/456\"."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to archive."
    }
  },
  "required": [
    "name",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_create_channel_group-bb5cdbcf"></a>

## ga4_create_channel_group

Handler: Google Analytics 4: gates the operation and calls v1alpha properties.channelGroups.create with resolved resource paths and request fields.

```text
[GA4 WRITE] Create a custom channel group. Pass groupingRule[] via `body`. Requires GA4_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L188-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID, e.g. \"123456789\" or \"properties/123456789\"."
    },
    "displayName": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "body": {
      "type": "object",
      "additionalProperties": {},
      "description": "Raw request-body object (JSON) merged OVER the typed fields — use for nested/advanced fields not exposed as flat args."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to apply the change."
    }
  },
  "required": [
    "property",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_update_channel_group-25e2faab"></a>

## ga4_update_channel_group

Handler: Google Analytics 4: gates the operation and calls v1alpha properties.channelGroups.patch with resolved resource paths and request fields.

```text
[GA4 WRITE] Update a custom channel group (supply groupingRule/displayName via body). Pass only the fields to change; updateMask is derived from them (override with an explicit updateMask for nested paths). Requires GA4_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L220-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "Full resource name of the channel group to target, e.g. \"properties/123/…/456\"."
    },
    "body": {
      "type": "object",
      "additionalProperties": {},
      "description": "Raw request-body object (JSON) merged OVER the typed fields — use for nested/advanced fields not exposed as flat args."
    },
    "updateMask": {
      "type": "string",
      "description": "Comma-separated field paths to update. Omit to derive from the supplied fields."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to apply the change."
    }
  },
  "required": [
    "name",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_delete_channel_group-302f7965"></a>

## ga4_delete_channel_group

Handler: Google Analytics 4: gates the operation and calls v1alpha properties.channelGroups.delete with resolved resource paths and request fields.

```text
[GA4 DELETE] Delete a custom channel group. Requires GA4_MCP_ENABLE_DELETES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L266-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "Full resource name of the channel group to target, e.g. \"properties/123/…/456\"."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to delete."
    }
  },
  "required": [
    "name",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_create_calculated_metric-a4cc09dc"></a>

## ga4_create_calculated_metric

Handler: Google Analytics 4: gates the operation and calls v1alpha properties.calculatedMetrics.create with resolved resource paths and request fields.

```text
[GA4 WRITE] Create a calculated metric (calculatedMetricId is required). Requires GA4_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L188-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID, e.g. \"123456789\" or \"properties/123456789\"."
    },
    "calculatedMetricId": {
      "type": "string",
      "minLength": 1,
      "description": "The user-chosen id for the calculated metric (used in reporting)."
    },
    "displayName": {
      "type": "string"
    },
    "metricUnit": {
      "type": "string"
    },
    "formula": {
      "type": "string",
      "description": "The calculation formula, e.g. \"{{purchase_revenue}} / {{sessions}}\"."
    },
    "body": {
      "type": "object",
      "additionalProperties": {},
      "description": "Raw request-body object (JSON) merged OVER the typed fields — use for nested/advanced fields not exposed as flat args."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to apply the change."
    }
  },
  "required": [
    "property",
    "calculatedMetricId",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_update_calculated_metric-f7aea53b"></a>

## ga4_update_calculated_metric

Handler: Google Analytics 4: gates the operation and calls v1alpha properties.calculatedMetrics.patch with resolved resource paths and request fields.

```text
[GA4 WRITE] Update a calculated metric (formula/displayName/unit via fields or body). Pass only the fields to change; updateMask is derived from them (override with an explicit updateMask for nested paths). Requires GA4_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L220-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "Full resource name of the calculated metric to target, e.g. \"properties/123/…/456\"."
    },
    "displayName": {
      "type": "string"
    },
    "formula": {
      "type": "string"
    },
    "metricUnit": {
      "type": "string"
    },
    "body": {
      "type": "object",
      "additionalProperties": {},
      "description": "Raw request-body object (JSON) merged OVER the typed fields — use for nested/advanced fields not exposed as flat args."
    },
    "updateMask": {
      "type": "string",
      "description": "Comma-separated field paths to update. Omit to derive from the supplied fields."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to apply the change."
    }
  },
  "required": [
    "name",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_delete_calculated_metric-fb46fa52"></a>

## ga4_delete_calculated_metric

Handler: Google Analytics 4: gates the operation and calls v1alpha properties.calculatedMetrics.delete with resolved resource paths and request fields.

```text
[GA4 DELETE] Delete a calculated metric. Requires GA4_MCP_ENABLE_DELETES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L266-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "Full resource name of the calculated metric to target, e.g. \"properties/123/…/456\"."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to delete."
    }
  },
  "required": [
    "name",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_create_expanded_data_set-965679ec"></a>

## ga4_create_expanded_data_set

Handler: Google Analytics 4: gates the operation and calls v1alpha properties.expandedDataSets.create with resolved resource paths and request fields.

```text
[GA4 WRITE] Create an expanded data set (GA4 360 only). Pass dimensionNames/metricNames/dimensionFilterExpression via `body`. Requires GA4_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L188-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID, e.g. \"123456789\" or \"properties/123456789\"."
    },
    "displayName": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "body": {
      "type": "object",
      "additionalProperties": {},
      "description": "Raw request-body object (JSON) merged OVER the typed fields — use for nested/advanced fields not exposed as flat args."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to apply the change."
    }
  },
  "required": [
    "property",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_update_expanded_data_set-64a10242"></a>

## ga4_update_expanded_data_set

Handler: Google Analytics 4: gates the operation and calls v1alpha properties.expandedDataSets.patch with resolved resource paths and request fields.

```text
[GA4 WRITE] Update an expanded data set (360). Supply fields via body. Pass only the fields to change; updateMask is derived from them (override with an explicit updateMask for nested paths). Requires GA4_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L220-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "Full resource name of the expanded data set to target, e.g. \"properties/123/…/456\"."
    },
    "body": {
      "type": "object",
      "additionalProperties": {},
      "description": "Raw request-body object (JSON) merged OVER the typed fields — use for nested/advanced fields not exposed as flat args."
    },
    "updateMask": {
      "type": "string",
      "description": "Comma-separated field paths to update. Omit to derive from the supplied fields."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to apply the change."
    }
  },
  "required": [
    "name",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_delete_expanded_data_set-ab43c3a2"></a>

## ga4_delete_expanded_data_set

Handler: Google Analytics 4: gates the operation and calls v1alpha properties.expandedDataSets.delete with resolved resource paths and request fields.

```text
[GA4 DELETE] Delete an expanded data set (360). Requires GA4_MCP_ENABLE_DELETES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L266-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "Full resource name of the expanded data set to target, e.g. \"properties/123/…/456\"."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to delete."
    }
  },
  "required": [
    "name",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_create_display_video_360_advertiser_link-e849512f"></a>

## ga4_create_display_video_360_advertiser_link

Handler: Google Analytics 4: gates the operation and calls v1alpha properties.displayVideo360AdvertiserLinks.create with resolved resource paths and request fields.

```text
[GA4 WRITE] Create a Display & Video 360 advertiser link. Requires GA4_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L188-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID, e.g. \"123456789\" or \"properties/123456789\"."
    },
    "advertiserId": {
      "type": "string",
      "description": "DV360 advertiser id."
    },
    "body": {
      "type": "object",
      "additionalProperties": {},
      "description": "Raw request-body object (JSON) merged OVER the typed fields — use for nested/advanced fields not exposed as flat args."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to apply the change."
    }
  },
  "required": [
    "property",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_update_display_video_360_advertiser_link-42004e81"></a>

## ga4_update_display_video_360_advertiser_link

Handler: Google Analytics 4: gates the operation and calls v1alpha properties.displayVideo360AdvertiserLinks.patch with resolved resource paths and request fields.

```text
[GA4 WRITE] Update a DV360 advertiser link (ads personalization / campaign data sharing via body). Pass only the fields to change; updateMask is derived from them (override with an explicit updateMask for nested paths). Requires GA4_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L220-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "Full resource name of the Display & Video 360 advertiser link to target, e.g. \"properties/123/…/456\"."
    },
    "body": {
      "type": "object",
      "additionalProperties": {},
      "description": "Raw request-body object (JSON) merged OVER the typed fields — use for nested/advanced fields not exposed as flat args."
    },
    "updateMask": {
      "type": "string",
      "description": "Comma-separated field paths to update. Omit to derive from the supplied fields."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to apply the change."
    }
  },
  "required": [
    "name",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_delete_display_video_360_advertiser_link-a3471c03"></a>

## ga4_delete_display_video_360_advertiser_link

Handler: Google Analytics 4: gates the operation and calls v1alpha properties.displayVideo360AdvertiserLinks.delete with resolved resource paths and request fields.

```text
[GA4 DELETE] Delete a DV360 advertiser link. Requires GA4_MCP_ENABLE_DELETES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L266-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "Full resource name of the Display & Video 360 advertiser link to target, e.g. \"properties/123/…/456\"."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to delete."
    }
  },
  "required": [
    "name",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_create_search_ads_360_link-786f999f"></a>

## ga4_create_search_ads_360_link

Handler: Google Analytics 4: gates the operation and calls v1alpha properties.searchAds360Links.create with resolved resource paths and request fields.

```text
[GA4 WRITE] Create a Search Ads 360 link. Requires GA4_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L188-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID, e.g. \"123456789\" or \"properties/123456789\"."
    },
    "advertiserId": {
      "type": "string"
    },
    "body": {
      "type": "object",
      "additionalProperties": {},
      "description": "Raw request-body object (JSON) merged OVER the typed fields — use for nested/advanced fields not exposed as flat args."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to apply the change."
    }
  },
  "required": [
    "property",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_update_search_ads_360_link-0918406d"></a>

## ga4_update_search_ads_360_link

Handler: Google Analytics 4: gates the operation and calls v1alpha properties.searchAds360Links.patch with resolved resource paths and request fields.

```text
[GA4 WRITE] Update a Search Ads 360 link (data-sharing flags via body). Pass only the fields to change; updateMask is derived from them (override with an explicit updateMask for nested paths). Requires GA4_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L220-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "Full resource name of the Search Ads 360 link to target, e.g. \"properties/123/…/456\"."
    },
    "body": {
      "type": "object",
      "additionalProperties": {},
      "description": "Raw request-body object (JSON) merged OVER the typed fields — use for nested/advanced fields not exposed as flat args."
    },
    "updateMask": {
      "type": "string",
      "description": "Comma-separated field paths to update. Omit to derive from the supplied fields."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to apply the change."
    }
  },
  "required": [
    "name",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_delete_search_ads_360_link-f032eea7"></a>

## ga4_delete_search_ads_360_link

Handler: Google Analytics 4: gates the operation and calls v1alpha properties.searchAds360Links.delete with resolved resource paths and request fields.

```text
[GA4 DELETE] Delete a Search Ads 360 link. Requires GA4_MCP_ENABLE_DELETES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L266-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "Full resource name of the Search Ads 360 link to target, e.g. \"properties/123/…/456\"."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to delete."
    }
  },
  "required": [
    "name",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_create_adsense_link-ccd1df74"></a>

## ga4_create_adsense_link

Handler: Google Analytics 4: gates the operation and calls v1alpha properties.adSenseLinks.create with resolved resource paths and request fields.

```text
[GA4 WRITE] Create an AdSense link (no update). Requires GA4_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L188-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID, e.g. \"123456789\" or \"properties/123456789\"."
    },
    "adClientCode": {
      "type": "string",
      "description": "AdSense ad client code, e.g. \"ca-pub-…\"."
    },
    "body": {
      "type": "object",
      "additionalProperties": {},
      "description": "Raw request-body object (JSON) merged OVER the typed fields — use for nested/advanced fields not exposed as flat args."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to apply the change."
    }
  },
  "required": [
    "property",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_delete_adsense_link-e37a68b2"></a>

## ga4_delete_adsense_link

Handler: Google Analytics 4: gates the operation and calls v1alpha properties.adSenseLinks.delete with resolved resource paths and request fields.

```text
[GA4 DELETE] Delete an AdSense link. Requires GA4_MCP_ENABLE_DELETES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L266-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "Full resource name of the AdSense link to target, e.g. \"properties/123/…/456\"."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to delete."
    }
  },
  "required": [
    "name",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_create_subproperty_event_filter-a94d78d8"></a>

## ga4_create_subproperty_event_filter

Handler: Google Analytics 4: gates the operation and calls v1alpha properties.subpropertyEventFilters.create with resolved resource paths and request fields.

```text
[GA4 WRITE] Create a subproperty event filter (GA4 360). Supply applyToProperty + filterClauses via `body`. Requires GA4_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L188-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID, e.g. \"123456789\" or \"properties/123456789\"."
    },
    "body": {
      "type": "object",
      "additionalProperties": {},
      "description": "Raw request-body object (JSON) merged OVER the typed fields — use for nested/advanced fields not exposed as flat args."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to apply the change."
    }
  },
  "required": [
    "property",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_update_subproperty_event_filter-3d3f8137"></a>

## ga4_update_subproperty_event_filter

Handler: Google Analytics 4: gates the operation and calls v1alpha properties.subpropertyEventFilters.patch with resolved resource paths and request fields.

```text
[GA4 WRITE] Update a subproperty event filter (360). Pass only the fields to change; updateMask is derived from them (override with an explicit updateMask for nested paths). Requires GA4_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L220-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "Full resource name of the subproperty event filter to target, e.g. \"properties/123/…/456\"."
    },
    "body": {
      "type": "object",
      "additionalProperties": {},
      "description": "Raw request-body object (JSON) merged OVER the typed fields — use for nested/advanced fields not exposed as flat args."
    },
    "updateMask": {
      "type": "string",
      "description": "Comma-separated field paths to update. Omit to derive from the supplied fields."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to apply the change."
    }
  },
  "required": [
    "name",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_delete_subproperty_event_filter-73141cae"></a>

## ga4_delete_subproperty_event_filter

Handler: Google Analytics 4: gates the operation and calls v1alpha properties.subpropertyEventFilters.delete with resolved resource paths and request fields.

```text
[GA4 DELETE] Delete a subproperty event filter (360). Requires GA4_MCP_ENABLE_DELETES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L266-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "Full resource name of the subproperty event filter to target, e.g. \"properties/123/…/456\"."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to delete."
    }
  },
  "required": [
    "name",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_create_rollup_property_source_link-2aca5f9e"></a>

## ga4_create_rollup_property_source_link

Handler: Google Analytics 4: gates the operation and calls v1alpha properties.rollupPropertySourceLinks.create with resolved resource paths and request fields.

```text
[GA4 WRITE] Add a source property to a rollup property (GA4 360, no update). Requires GA4_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L188-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID, e.g. \"123456789\" or \"properties/123456789\"."
    },
    "sourceProperty": {
      "type": "string",
      "description": "Source property resource name to include in the rollup."
    },
    "body": {
      "type": "object",
      "additionalProperties": {},
      "description": "Raw request-body object (JSON) merged OVER the typed fields — use for nested/advanced fields not exposed as flat args."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to apply the change."
    }
  },
  "required": [
    "property",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_delete_rollup_property_source_link-0fda1ef1"></a>

## ga4_delete_rollup_property_source_link

Handler: Google Analytics 4: gates the operation and calls v1alpha properties.rollupPropertySourceLinks.delete with resolved resource paths and request fields.

```text
[GA4 DELETE] Remove a source property from a rollup (360). Requires GA4_MCP_ENABLE_DELETES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L266-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "Full resource name of the rollup property source link to target, e.g. \"properties/123/…/456\"."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to delete."
    }
  },
  "required": [
    "name",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_create_event_create_rule-d3b995d0"></a>

## ga4_create_event_create_rule

Handler: Google Analytics 4: gates the operation and calls v1alpha properties.dataStreams.eventCreateRules.create with resolved resource paths and request fields.

```text
[GA4 WRITE] Create an event-create rule on a data stream (server-side event creation). Supply eventConditions/parameterMutations via `body`. Requires GA4_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L188-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID, e.g. \"123456789\" or \"properties/123456789\"."
    },
    "dataStreamId": {
      "type": "string",
      "minLength": 1,
      "description": "Data stream ID (numeric) or \"dataStreams/{id}\"."
    },
    "destinationEvent": {
      "type": "string",
      "description": "Name of the new event this rule creates."
    },
    "body": {
      "type": "object",
      "additionalProperties": {},
      "description": "Raw request-body object (JSON) merged OVER the typed fields — use for nested/advanced fields not exposed as flat args."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to apply the change."
    }
  },
  "required": [
    "property",
    "dataStreamId",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_update_event_create_rule-0b134222"></a>

## ga4_update_event_create_rule

Handler: Google Analytics 4: gates the operation and calls v1alpha properties.dataStreams.eventCreateRules.patch with resolved resource paths and request fields.

```text
[GA4 WRITE] Update an event-create rule (conditions/mutations via body). Pass only the fields to change; updateMask is derived from them (override with an explicit updateMask for nested paths). Requires GA4_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L220-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "Full resource name of the event create rule to target, e.g. \"properties/123/…/456\"."
    },
    "body": {
      "type": "object",
      "additionalProperties": {},
      "description": "Raw request-body object (JSON) merged OVER the typed fields — use for nested/advanced fields not exposed as flat args."
    },
    "updateMask": {
      "type": "string",
      "description": "Comma-separated field paths to update. Omit to derive from the supplied fields."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to apply the change."
    }
  },
  "required": [
    "name",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_delete_event_create_rule-c70e565a"></a>

## ga4_delete_event_create_rule

Handler: Google Analytics 4: gates the operation and calls v1alpha properties.dataStreams.eventCreateRules.delete with resolved resource paths and request fields.

```text
[GA4 DELETE] Delete an event-create rule. Requires GA4_MCP_ENABLE_DELETES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L266-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "Full resource name of the event create rule to target, e.g. \"properties/123/…/456\"."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to delete."
    }
  },
  "required": [
    "name",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_create_skadnetwork_conversion_value_schema-1757448e"></a>

## ga4_create_skadnetwork_conversion_value_schema

Handler: Google Analytics 4: gates the operation and calls v1alpha properties.dataStreams.sKAdNetworkConversionValueSchema.create with resolved resource paths and request fields.

```text
[GA4 WRITE] Create the SKAdNetwork conversion value schema on an iOS data stream. Supply postbackWindow settings via `body`. Requires GA4_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L188-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID, e.g. \"123456789\" or \"properties/123456789\"."
    },
    "dataStreamId": {
      "type": "string",
      "minLength": 1,
      "description": "Data stream ID (numeric) or \"dataStreams/{id}\"."
    },
    "body": {
      "type": "object",
      "additionalProperties": {},
      "description": "Raw request-body object (JSON) merged OVER the typed fields — use for nested/advanced fields not exposed as flat args."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to apply the change."
    }
  },
  "required": [
    "property",
    "dataStreamId",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_update_skadnetwork_conversion_value_schema-aa509aee"></a>

## ga4_update_skadnetwork_conversion_value_schema

Handler: Google Analytics 4: gates the operation and calls v1alpha properties.dataStreams.sKAdNetworkConversionValueSchema.patch with resolved resource paths and request fields.

```text
[GA4 WRITE] Update the SKAdNetwork conversion value schema. Pass only the fields to change; updateMask is derived from them (override with an explicit updateMask for nested paths). Requires GA4_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L220-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "Full resource name of the SKAdNetwork conversion value schema to target, e.g. \"properties/123/…/456\"."
    },
    "body": {
      "type": "object",
      "additionalProperties": {},
      "description": "Raw request-body object (JSON) merged OVER the typed fields — use for nested/advanced fields not exposed as flat args."
    },
    "updateMask": {
      "type": "string",
      "description": "Comma-separated field paths to update. Omit to derive from the supplied fields."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to apply the change."
    }
  },
  "required": [
    "name",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_delete_skadnetwork_conversion_value_schema-9050cfb0"></a>

## ga4_delete_skadnetwork_conversion_value_schema

Handler: Google Analytics 4: gates the operation and calls v1alpha properties.dataStreams.sKAdNetworkConversionValueSchema.delete with resolved resource paths and request fields.

```text
[GA4 DELETE] Delete the SKAdNetwork conversion value schema. Requires GA4_MCP_ENABLE_DELETES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L266-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "Full resource name of the SKAdNetwork conversion value schema to target, e.g. \"properties/123/…/456\"."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to delete."
    }
  },
  "required": [
    "name",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_create_property_access_binding-1217786e"></a>

## ga4_create_property_access_binding

Handler: Google Analytics 4: gates the operation and calls v1alpha properties.accessBindings.create with resolved resource paths and request fields.

```text
[GA4 WRITE] Grant a user access to a GA4 property (needs analytics.manage.users scope). Requires GA4_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L188-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID, e.g. \"123456789\" or \"properties/123456789\"."
    },
    "user": {
      "type": "string",
      "minLength": 1,
      "description": "Email of the user to grant access to."
    },
    "roles": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "minItems": 1,
      "description": "Roles, e.g. [\"predefinedRoles/viewer\"], [\"predefinedRoles/analyst\"], [\"predefinedRoles/editor\"], [\"predefinedRoles/admin\"]. (GA4 uses viewer/analyst/editor/admin — not the legacy read/collaborate/edit/manage names.)"
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to apply the change."
    }
  },
  "required": [
    "property",
    "user",
    "roles",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_update_property_access_binding-201420b5"></a>

## ga4_update_property_access_binding

Handler: Google Analytics 4: gates the operation and calls v1alpha properties.accessBindings.patch with resolved resource paths and request fields.

```text
[GA4 WRITE] Change a user's roles on a property (needs analytics.manage.users). The roles you pass replace the binding's roles. This API has no updateMask: the supplied fields replace the whole resource. Requires GA4_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L220-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "Full resource name of the property access binding to target, e.g. \"properties/123/…/456\"."
    },
    "roles": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "minItems": 1
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to apply the change."
    }
  },
  "required": [
    "name",
    "roles",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_delete_property_access_binding-fab249c2"></a>

## ga4_delete_property_access_binding

Handler: Google Analytics 4: gates the operation and calls v1alpha properties.accessBindings.delete with resolved resource paths and request fields.

```text
[GA4 DELETE] Revoke a user's access to a property (needs analytics.manage.users). Requires GA4_MCP_ENABLE_DELETES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L266-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "Full resource name of the property access binding to target, e.g. \"properties/123/…/456\"."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to delete."
    }
  },
  "required": [
    "name",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_create_account_access_binding-c4add6e6"></a>

## ga4_create_account_access_binding

Handler: Google Analytics 4: gates the operation and calls v1alpha accounts.accessBindings.create with resolved resource paths and request fields.

```text
[GA4 WRITE] Grant a user access to a GA4 account (needs analytics.manage.users). Requires GA4_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L188-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 account ID, e.g. \"123456\" or \"accounts/123456\"."
    },
    "user": {
      "type": "string",
      "minLength": 1
    },
    "roles": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "minItems": 1
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to apply the change."
    }
  },
  "required": [
    "accountId",
    "user",
    "roles",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_update_account_access_binding-d5982499"></a>

## ga4_update_account_access_binding

Handler: Google Analytics 4: gates the operation and calls v1alpha accounts.accessBindings.patch with resolved resource paths and request fields.

```text
[GA4 WRITE] Change a user's roles on an account (needs analytics.manage.users). The roles you pass replace the binding's roles. This API has no updateMask: the supplied fields replace the whole resource. Requires GA4_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L220-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "Full resource name of the account access binding to target, e.g. \"properties/123/…/456\"."
    },
    "roles": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "minItems": 1
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to apply the change."
    }
  },
  "required": [
    "name",
    "roles",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_delete_account_access_binding-9bade4ce"></a>

## ga4_delete_account_access_binding

Handler: Google Analytics 4: gates the operation and calls v1alpha accounts.accessBindings.delete with resolved resource paths and request fields.

```text
[GA4 DELETE] Revoke a user's access to an account (needs analytics.manage.users). Requires GA4_MCP_ENABLE_DELETES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L266-L550) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "Full resource name of the account access binding to target, e.g. \"properties/123/…/456\"."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to delete."
    }
  },
  "required": [
    "name",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_create_property-ca91208a"></a>

## ga4_create_property

Handler: Google Analytics 4: Executes the registered handler and returns formatted results.

```text
[GA4 WRITE] Create a new GA4 property under an account. Requires GA4_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L560-L594) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "minLength": 1,
      "description": "Parent account ID (\"123456\" or \"accounts/123456\")."
    },
    "displayName": {
      "type": "string",
      "minLength": 1
    },
    "timeZone": {
      "type": "string",
      "minLength": 1,
      "description": "IANA time zone, e.g. \"America/New_York\"."
    },
    "currencyCode": {
      "type": "string",
      "minLength": 1,
      "description": "ISO 4217 currency, e.g. \"USD\"."
    },
    "industryCategory": {
      "type": "string",
      "description": "e.g. \"TECHNOLOGY\", \"RETAIL\"."
    },
    "confirm": {
      "type": "boolean"
    }
  },
  "required": [
    "accountId",
    "displayName",
    "timeZone",
    "currencyCode",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_update_property-d78bfb2b"></a>

## ga4_update_property

Handler: Google Analytics 4: Executes the registered handler and returns formatted results.

```text
[GA4 WRITE] Update a GA4 property (displayName / timeZone / currencyCode / industryCategory). Requires GA4_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L595-L632) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID, e.g. \"123456789\" or \"properties/123456789\"."
    },
    "displayName": {
      "type": "string"
    },
    "timeZone": {
      "type": "string"
    },
    "currencyCode": {
      "type": "string"
    },
    "industryCategory": {
      "type": "string"
    },
    "updateMask": {
      "type": "string"
    },
    "confirm": {
      "type": "boolean"
    }
  },
  "required": [
    "property",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_delete_property-15d960f9"></a>

## ga4_delete_property

Handler: Google Analytics 4: Executes the registered handler and returns formatted results.

```text
[GA4 DELETE] Soft-delete (trash) a GA4 property. It is recoverable from the trash for a limited time, then permanently removed. Requires GA4_MCP_ENABLE_DELETES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L633-L654) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID, e.g. \"123456789\" or \"properties/123456789\"."
    },
    "confirm": {
      "type": "boolean"
    }
  },
  "required": [
    "property",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_update_data_retention-545fbf0b"></a>

## ga4_update_data_retention

Handler: Google Analytics 4: Executes the registered handler and returns formatted results.

```text
[GA4 WRITE] Update a property's event data retention (2/14/26/38/50 months; the longer options are 360-only) and whether it resets on new activity. Requires GA4_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L655-L700) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID, e.g. \"123456789\" or \"properties/123456789\"."
    },
    "eventDataRetention": {
      "type": "string",
      "enum": [
        "TWO_MONTHS",
        "FOURTEEN_MONTHS",
        "TWENTY_SIX_MONTHS",
        "THIRTY_EIGHT_MONTHS",
        "FIFTY_MONTHS"
      ]
    },
    "resetUserDataOnNewActivity": {
      "type": "boolean"
    },
    "confirm": {
      "type": "boolean"
    }
  },
  "required": [
    "property",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_update_enhanced_measurement-49781573"></a>

## ga4_update_enhanced_measurement

Handler: Google Analytics 4: Executes the registered handler and returns formatted results.

```text
[GA4 WRITE] Update a WEB data stream's Enhanced Measurement: master streamEnabled plus per-signal toggles (scrolls, outbound clicks, site search + query params, video engagement, file downloads, form interactions, SPA page changes). Requires GA4_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L701-L780) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID, e.g. \"123456789\" or \"properties/123456789\"."
    },
    "dataStreamId": {
      "type": "string",
      "minLength": 1,
      "description": "Data stream ID (numeric) or \"dataStreams/{id}\"."
    },
    "streamEnabled": {
      "type": "boolean"
    },
    "scrollsEnabled": {
      "type": "boolean"
    },
    "outboundClicksEnabled": {
      "type": "boolean"
    },
    "siteSearchEnabled": {
      "type": "boolean"
    },
    "videoEngagementEnabled": {
      "type": "boolean"
    },
    "fileDownloadsEnabled": {
      "type": "boolean"
    },
    "formInteractionsEnabled": {
      "type": "boolean"
    },
    "pageChangesEnabled": {
      "type": "boolean"
    },
    "searchQueryParameter": {
      "type": "string",
      "description": "Comma-separated site-search query params, e.g. \"q,s,search\"."
    },
    "uriQueryParameter": {
      "type": "string"
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to apply the change."
    }
  },
  "required": [
    "property",
    "dataStreamId",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_update_data_redaction-075865f8"></a>

## ga4_update_data_redaction

Handler: Google Analytics 4: Executes the registered handler and returns formatted results.

```text
[GA4 WRITE] Update a WEB data stream's client-side data redaction: email redaction and URL query-parameter redaction (with the parameter key list). Requires GA4_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L701-L780) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID, e.g. \"123456789\" or \"properties/123456789\"."
    },
    "dataStreamId": {
      "type": "string",
      "minLength": 1,
      "description": "Data stream ID (numeric) or \"dataStreams/{id}\"."
    },
    "emailRedactionEnabled": {
      "type": "boolean"
    },
    "queryParameterRedactionEnabled": {
      "type": "boolean"
    },
    "queryParameterKeys": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Query params to redact, e.g. [\"email\", \"phone\"]."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to apply the change."
    }
  },
  "required": [
    "property",
    "dataStreamId",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_update_attribution_settings-e26f627d"></a>

## ga4_update_attribution_settings

Handler: Google Analytics 4: Executes the registered handler and returns formatted results.

```text
[GA4 WRITE] Update a property's attribution: reporting model, acquisition/other conversion lookback windows, and the Ads web-conversion export scope. Requires GA4_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L701-L780) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID, e.g. \"123456789\" or \"properties/123456789\"."
    },
    "reportingAttributionModel": {
      "type": "string",
      "enum": [
        "PAID_AND_ORGANIC_CHANNELS_DATA_DRIVEN",
        "PAID_AND_ORGANIC_CHANNELS_LAST_CLICK",
        "GOOGLE_PAID_CHANNELS_LAST_CLICK"
      ]
    },
    "acquisitionConversionEventLookbackWindow": {
      "type": "string",
      "enum": [
        "ACQUISITION_CONVERSION_EVENT_LOOKBACK_WINDOW_7_DAYS",
        "ACQUISITION_CONVERSION_EVENT_LOOKBACK_WINDOW_30_DAYS"
      ]
    },
    "otherConversionEventLookbackWindow": {
      "type": "string",
      "enum": [
        "OTHER_CONVERSION_EVENT_LOOKBACK_WINDOW_30_DAYS",
        "OTHER_CONVERSION_EVENT_LOOKBACK_WINDOW_60_DAYS",
        "OTHER_CONVERSION_EVENT_LOOKBACK_WINDOW_90_DAYS"
      ]
    },
    "adsWebConversionDataExportScope": {
      "type": "string",
      "enum": [
        "NOT_SELECTED_YET",
        "PAID_AND_ORGANIC_CHANNELS",
        "GOOGLE_PAID_CHANNELS"
      ]
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to apply the change."
    }
  },
  "required": [
    "property",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_update_google_signals-c9a4a347"></a>

## ga4_update_google_signals

Handler: Google Analytics 4: Executes the registered handler and returns formatted results.

```text
[GA4 WRITE] Turn Google Signals on or off for a property (cross-device + demographics collection - the user must confirm their privacy disclosures cover it). Requires GA4_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L701-L780) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID, e.g. \"123456789\" or \"properties/123456789\"."
    },
    "state": {
      "type": "string",
      "enum": [
        "GOOGLE_SIGNALS_ENABLED",
        "GOOGLE_SIGNALS_DISABLED"
      ]
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to apply the change."
    }
  },
  "required": [
    "property",
    "state",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_update_account-dc217e72"></a>

## ga4_update_account

Handler: Google Analytics 4: Executes the registered handler and returns formatted results.

```text
[GA4 WRITE] Update a GA4 account (displayName). Requires GA4_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L781-L798) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "minLength": 1
    },
    "displayName": {
      "type": "string",
      "minLength": 1
    },
    "confirm": {
      "type": "boolean"
    }
  },
  "required": [
    "accountId",
    "displayName",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_delete_account-6eac1e0c"></a>

## ga4_delete_account

Handler: Google Analytics 4: Executes the registered handler and returns formatted results.

```text
[GA4 DELETE] Soft-delete (trash) an entire GA4 account and all its properties. High blast radius — recoverable from the trash for a limited time. Requires GA4_MCP_ENABLE_DELETES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L799-L820) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "minLength": 1
    },
    "confirm": {
      "type": "boolean"
    }
  },
  "required": [
    "accountId",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_acknowledge_user_data_collection-94b0bd0f"></a>

## ga4_acknowledge_user_data_collection

Handler: Google Analytics 4: Executes the registered handler and returns formatted results.

```text
[GA4 WRITE] Acknowledge that the property owner has the required user privacy disclosures/rights. Some operations (e.g. creating certain links or MP secrets) require this once. Requires GA4_MCP_ENABLE_WRITES=true and confirm=true.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4AdminWrite.ts#L821-L843) · Schema: tools/list.

Exposure: Always listed; execution requires confirm=true and matching GTM or GA4 enable flags; DRY_RUN simulates guarded operations.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID, e.g. \"123456789\" or \"properties/123456789\"."
    },
    "confirm": {
      "type": "boolean"
    }
  },
  "required": [
    "property",
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_run_report-a0a35566"></a>

## ga4_run_report

Handler: Google Analytics 4: Calls client.properties.runReport and returns the result or a formatted error.

```text
Run a read-only GA4 Data API report for a property over a date range. Returns dimension/metric rows (e.g. event counts by eventName). Useful for reconciling configured GTM/GA4 events against events GA4 actually reports (zero reported activity for a configured event is a red flag). Read-only — never writes. Requires the analytics.readonly scope.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4Data.ts#L73-L181) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID, e.g. \"123456789\" or \"properties/123456789\"."
    },
    "dimensions": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1
      },
      "maxItems": 9,
      "description": "Dimension names, e.g. [\"eventName\",\"date\"]. Max 9. Omit for a metric-only report."
    },
    "metrics": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1
      },
      "minItems": 1,
      "maxItems": 10,
      "description": "Metric names, e.g. [\"eventCount\",\"totalUsers\"]. At least 1, max 10."
    },
    "startDate": {
      "type": "string",
      "minLength": 1,
      "default": "7daysAgo",
      "description": "Start date: YYYY-MM-DD, \"NdaysAgo\", \"today\", or \"yesterday\"."
    },
    "endDate": {
      "type": "string",
      "minLength": 1,
      "default": "today",
      "description": "End date: YYYY-MM-DD, \"NdaysAgo\", \"today\", or \"yesterday\"."
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "maximum": 250000,
      "default": 250,
      "description": "Max rows to return (default 250)."
    },
    "offset": {
      "type": "integer",
      "minimum": 0,
      "description": "Row offset for paging (default 0)."
    },
    "orderByMetric": {
      "type": "string",
      "minLength": 1,
      "description": "Metric name to order by (descending). Optional."
    }
  },
  "required": [
    "property",
    "metrics"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_check_compatibility-e1fb8747"></a>

## ga4_check_compatibility

Handler: Google Analytics 4: calls properties.checkCompatibility and reports requested fields and other compatible choices; refuses empty requests.

```text
Check which of the given GA4 dimensions/metrics can be combined in ONE report on this property (the Data API rejects incompatible pairs). Call this BEFORE ga4_run_report when combining unusual dimensions/metrics; drop or replace anything reported incompatible instead of retrying blind. Read-only.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4Data.ts#L182-L290) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID, e.g. \"123456789\" or \"properties/123456789\"."
    },
    "dimensions": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Dimension API names to test."
    },
    "metrics": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Metric API names to test."
    }
  },
  "required": [
    "property"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_run_realtime_report-8f675773"></a>

## ga4_run_realtime_report

Handler: Google Analytics 4: Calls client.properties.runRealtimeReport and returns the result or a formatted error.

```text
Run a read-only GA4 Data API Realtime report (events in roughly the last 30 minutes). Useful to confirm a tag is firing right now during live QA. Read-only — never writes. Requires the analytics.readonly scope.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/ga4Data.ts#L291-L355) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property": {
      "type": "string",
      "minLength": 1,
      "description": "GA4 property ID, e.g. \"123456789\" or \"properties/123456789\"."
    },
    "dimensions": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1
      },
      "maxItems": 9,
      "description": "Dimension names, e.g. [\"eventName\",\"date\"]. Max 9. Omit for a metric-only report."
    },
    "metrics": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1
      },
      "minItems": 1,
      "maxItems": 10,
      "description": "Metric names, e.g. [\"eventCount\",\"totalUsers\"]. At least 1, max 10."
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "maximum": 100000,
      "default": 100,
      "description": "Max rows to return (default 100)."
    }
  },
  "required": [
    "property",
    "metrics"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_type_reference-78b97ace"></a>

## gtm_type_reference

Handler: Returns a local GTM type catalogue, identifies type codes, or searches the bundled gallery snapshot without an API call.

```text
The catalogue of GTM TYPE CODES: tag types, trigger types and user-defined variable types, each with the exact string the API expects and the name it carries in the GTM interface. Call this to ANSWER a question about what types exist ("which tag types do you support?", "what triggers can you make?", "can you add Hotjar?"), and to look up the right code BEFORE calling tags_create, triggers_create or variables_create. Read-only, no API call, no container needed. Note that Google publishes an enum for TRIGGER types but not for tag or variable types, so those codes are recorded here rather than discoverable from the API. For built-in variables use built_in_variables_list, which carries the full published enum. For a specific gallery template that is already installed, templates_list returns its exact tagType, which is always more reliable than this list.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/reference.ts#L517-L638) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "kind": {
      "type": "string",
      "enum": [
        "all",
        "tag",
        "trigger",
        "variable",
        "gallery"
      ],
      "description": "Narrow the answer to one kind. Defaults to \"all\"."
    },
    "search": {
      "type": "string",
      "description": "Look a Community Gallery template up by product or vendor name, e.g. \"hotjar\", \"clarity\", \"klaviyo\". Returns the template name and its GitHub OWNER, which is the half of an import that cannot be guessed. Use this to answer \"can you add X?\"."
    },
    "identify": {
      "type": "string",
      "description": "Name a tag type code seen in a container, e.g. \"baut\", \"gclidw\", \"cvt_MRQN8\". Use this when AUDITING a container to say what a tag actually is. Returns the human name, or says plainly that the code is unrecognised instead of guessing a vendor."
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-templates_describe_fields-9929ca43"></a>

## templates_describe_fields

Handler: Calls client.accounts.containers.workspaces.templates, api.get and returns the result or a formatted error.

```text
Read the FIELDS a custom or Community Gallery template accepts, straight from the template's own source. Call this after templates_import_from_gallery and BEFORE tags_create, so the tag is built with that template's real parameter keys instead of guessed ones. Returns each field's name (the key for the tag's `parameter` array), its widget type, its label, whether it is required, and any fixed options. Also returns the template's tagType, so one call gives everything tags_create needs. Read-only. Only works for custom and gallery templates: GTM's ~68 BUILT-IN vendor templates carry no source, so for those use tags_type_profile against a container that already has one.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/templateFields.ts#L187-L253) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID."
    },
    "templateId": {
      "type": "string",
      "description": "The template ID, from templates_list."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "templateId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-tags_type_profile-673968b7"></a>

## tags_type_profile

Handler: Calls client.accounts.containers.workspaces.tags.list and returns the result or a formatted error.

```text
Group a workspace's existing tags by TYPE and report, for each, the parameter keys those tags actually use. This is how to learn an UNDOCUMENTED tag type: Google does not publish the type codes or field names for GTM's ~68 built-in vendor templates (Criteo, Twitter, Pinterest, Quora and the rest), but a container that already uses one contains the answer, because that tag's own type and keys are definitionally correct. Use it to AUDIT what a container runs, to find an unfamiliar type code, and to copy a working shape before creating a similar tag. `alwaysPresent` lists keys found on every tag of that type, which is the closest thing to a required-field list for a template with no published schema. Read-only.
```

[Source](https://github.com/samarthanalytics-sj/samarth-analytics-mcp/blob/0b59ba1a931050ff7f7b8876599950323f381509/src/tools/templateFields.ts#L254-L320) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "The GTM account ID."
    },
    "containerId": {
      "type": "string",
      "description": "The GTM container ID."
    },
    "workspaceId": {
      "type": "string",
      "description": "The GTM workspace ID."
    },
    "type": {
      "type": "string",
      "description": "Only profile this one type, e.g. \"cvt_MRQN8\" or an unfamiliar code."
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>
