# pouyanafisi/gtm-mcp

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/pouyanafisi/gtm-mcp) · [Machine-readable inventory](../data/mcps/pouyanafisi--gtm-mcp.json)

**104 extracted tools.** Create server-container clients and transformations alongside web-container entities, templates, and environments.

Snapshot: 2026-10-13 · [196f32e54bfe](https://github.com/pouyanafisi/gtm-mcp/tree/196f32e54bfeb7f3720435adf1b21e16e385c22e) · Method: source.

Exposure: All tools in the static ListToolsRequestSchema handler are exposed unconditionally; calls authenticate lazily.

## Limits

- Offline literal registration extraction; no authentication or GTM operation was invoked. API endpoint compatibility and workflow outcomes were not verified live.
- Several methods cast SDK resources to any, including combine, move_tag_id, bulk_update, gtag_config, import_from_gallery; exact SDK compatibility needs review.
- Component setup/workflow helpers create tags and triggers separately without assigning firingTriggerId, and return success:true despite potential per-operation failures (src/gtm-components.ts).
- bulkUpdate explicitly notes bulk_update may not exist in the API client (src/gtm-client.ts:685-689); its registration is retained with needs-review classification.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`create_gtm_tag`](#tool-create_gtm_tag-07815d6f) | GTM | Dispatches to GTMClient.createTag to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.tags.create. |
| [`create_gtm_trigger`](#tool-create_gtm_trigger-1f105cd1) | GTM | Dispatches to GTMClient.createTrigger to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.triggers.create. |
| [`create_gtm_variable`](#tool-create_gtm_variable-3a356a91) | GTM | Dispatches to GTMClient.createVariable to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.variables.create. |
| [`list_gtm_containers`](#tool-list_gtm_containers-c6ad6269) | GTM | Dispatches to GTMClient.listContainers to perform the corresponding Google Tag Manager operation via accounts.containers.list. |
| [`get_gtm_container`](#tool-get_gtm_container-4761a2e1) | GTM | Dispatches to GTMClient.getContainer to perform the corresponding Google Tag Manager operation via accounts.containers.get. |
| [`publish_gtm_version`](#tool-publish_gtm_version-4ec5da3f) | GTM | Creates a version from the default workspace, then publishes that version through the GTM v2 API. |
| [`create_ga4_setup`](#tool-create_ga4_setup-453f5540) | GTM | Calls a GTM component helper that creates tags and triggers in the default workspace and returns individual results; it does not attach the created triggers to tags and returns success even when individual creation results fail. |
| [`create_facebook_pixel_setup`](#tool-create_facebook_pixel_setup-846daf6f) | GTM | Calls a GTM component helper that creates tags and triggers in the default workspace and returns individual results; it does not attach the created triggers to tags and returns success even when individual creation results fail. |
| [`create_form_tracking`](#tool-create_form_tracking-f67b0c58) | GTM | Calls a GTM component helper that creates tags and triggers in the default workspace and returns individual results; it does not attach the created triggers to tags and returns success even when individual creation results fail. |
| [`generate_gtm_workflow`](#tool-generate_gtm_workflow-afce728e) | GTM | Calls a GTM component helper that creates tags and triggers in the default workspace and returns individual results; it does not attach the created triggers to tags and returns success even when individual creation results fail. |
| [`list_gtm_accounts`](#tool-list_gtm_accounts-8aee50f5) | GTM | Dispatches to GTMClient.listAccounts to perform the corresponding Google Tag Manager operation via accounts.list. |
| [`get_gtm_account`](#tool-get_gtm_account-c9072087) | GTM | Dispatches to GTMClient.getAccount to perform the corresponding Google Tag Manager operation via accounts.get. |
| [`list_gtm_workspaces`](#tool-list_gtm_workspaces-e1ad847d) | GTM | Dispatches to GTMClient.listWorkspaces to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.list. |
| [`get_gtm_workspace`](#tool-get_gtm_workspace-e1709dcc) | GTM | Dispatches to GTMClient.getWorkspace to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.get. |
| [`list_gtm_tags`](#tool-list_gtm_tags-7506947b) | GTM | Dispatches to GTMClient.listTags to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.tags.list. |
| [`get_gtm_tag`](#tool-get_gtm_tag-95c3a3dd) | GTM | Dispatches to GTMClient.getTag to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.tags.get. |
| [`list_gtm_triggers`](#tool-list_gtm_triggers-3dd5a402) | GTM | Dispatches to GTMClient.listTriggers to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.triggers.list. |
| [`get_gtm_trigger`](#tool-get_gtm_trigger-d280b47f) | GTM | Dispatches to GTMClient.getTrigger to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.triggers.get. |
| [`list_gtm_variables`](#tool-list_gtm_variables-b1742e8b) | GTM | Dispatches to GTMClient.listVariables to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.variables.list. |
| [`get_gtm_variable`](#tool-get_gtm_variable-1817042d) | GTM | Dispatches to GTMClient.getVariable to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.variables.get. |
| [`update_gtm_account`](#tool-update_gtm_account-e5fe1c2d) | GTM | Dispatches to GTMClient.updateAccount to perform the corresponding Google Tag Manager operation via accounts.get. |
| [`update_gtm_container`](#tool-update_gtm_container-88989f8b) | GTM | Dispatches to GTMClient.updateContainer to perform the corresponding Google Tag Manager operation via accounts.containers.get. |
| [`update_gtm_workspace`](#tool-update_gtm_workspace-50a61498) | GTM | Dispatches to GTMClient.updateWorkspace to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.get. |
| [`update_gtm_tag`](#tool-update_gtm_tag-a5906d7b) | GTM | Dispatches to GTMClient.updateTag to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.tags.get. |
| [`update_gtm_trigger`](#tool-update_gtm_trigger-36470709) | GTM | Dispatches to GTMClient.updateTrigger to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.triggers.get. |
| [`update_gtm_variable`](#tool-update_gtm_variable-273d164b) | GTM | Dispatches to GTMClient.updateVariable to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.variables.get. |
| [`delete_gtm_container`](#tool-delete_gtm_container-8db12bd5) | GTM | Dispatches to GTMClient.deleteContainer to perform the corresponding Google Tag Manager operation via accounts.containers.delete. |
| [`delete_gtm_workspace`](#tool-delete_gtm_workspace-2fd89476) | GTM | Dispatches to GTMClient.deleteWorkspace to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.delete. |
| [`delete_gtm_tag`](#tool-delete_gtm_tag-83992db5) | GTM | Dispatches to GTMClient.deleteTag to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.tags.delete. |
| [`delete_gtm_trigger`](#tool-delete_gtm_trigger-4bb201a3) | GTM | Dispatches to GTMClient.deleteTrigger to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.triggers.delete. |
| [`delete_gtm_variable`](#tool-delete_gtm_variable-16583557) | GTM | Dispatches to GTMClient.deleteVariable to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.variables.delete. |
| [`revert_gtm_tag`](#tool-revert_gtm_tag-bb60603c) | GTM | Dispatches to GTMClient.revertTag to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.tags.revert. |
| [`revert_gtm_trigger`](#tool-revert_gtm_trigger-656fd9b0) | GTM | Dispatches to GTMClient.revertTrigger to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.triggers.revert. |
| [`revert_gtm_variable`](#tool-revert_gtm_variable-f12cbc7a) | GTM | Dispatches to GTMClient.revertVariable to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.variables.revert. |
| [`create_gtm_container`](#tool-create_gtm_container-9808829a) | GTM | Dispatches to GTMClient.createContainer to perform the corresponding Google Tag Manager operation via accounts.containers.create. |
| [`get_gtm_container_snippet`](#tool-get_gtm_container_snippet-25d2754c) | GTM | Dispatches to GTMClient.getContainerSnippet to perform the corresponding Google Tag Manager operation via accounts.containers.snippet. |
| [`lookup_gtm_container`](#tool-lookup_gtm_container-241327e1) | GTM | Dispatches to GTMClient.lookupContainer to perform the corresponding Google Tag Manager operation via accounts.containers.lookup. |
| [`combine_gtm_containers`](#tool-combine_gtm_containers-ee89c27a) | GTM | Dispatches to GTMClient.combineContainers to perform the corresponding Google Tag Manager operation via accounts.containers as any).combine. The SDK resource/method is accessed through an any cast; compatibility is unverified. |
| [`move_gtm_tag_id`](#tool-move_gtm_tag_id-a68461df) | GTM | Dispatches to GTMClient.moveTagId to perform the corresponding Google Tag Manager operation via accounts.containers as any).move\_tag\_id. The SDK resource/method is accessed through an any cast; compatibility is unverified. |
| [`create_gtm_workspace`](#tool-create_gtm_workspace-00287f7b) | GTM | Dispatches to GTMClient.createWorkspace to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.create. |
| [`get_gtm_workspace_status`](#tool-get_gtm_workspace_status-375c9459) | GTM | Dispatches to GTMClient.getWorkspaceStatus to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.getStatus. |
| [`sync_gtm_workspace`](#tool-sync_gtm_workspace-f25bcef9) | GTM | Dispatches to GTMClient.syncWorkspace to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.sync. |
| [`resolve_gtm_conflict`](#tool-resolve_gtm_conflict-6f3ecc3c) | GTM | Dispatches to GTMClient.resolveConflict to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).resolve\_conflict. The SDK resource/method is accessed through an any cast; compatibility is unverified. |
| [`bulk_update_gtm_workspace`](#tool-bulk_update_gtm_workspace-a03d657e) | GTM | Dispatches to GTMClient.bulkUpdate to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).bulk\_update. The SDK resource/method is accessed through an any cast; compatibility is unverified. |
| [`list_gtm_folders`](#tool-list_gtm_folders-acffcb88) | GTM | Dispatches to GTMClient.listFolders to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.folders.list. |
| [`get_gtm_folder`](#tool-get_gtm_folder-b5ccd360) | GTM | Dispatches to GTMClient.getFolder to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.folders.get. |
| [`create_gtm_folder`](#tool-create_gtm_folder-1f1814de) | GTM | Dispatches to GTMClient.createFolder to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.folders.create. |
| [`update_gtm_folder`](#tool-update_gtm_folder-9d32cbad) | GTM | Dispatches to GTMClient.updateFolder to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.folders.get. |
| [`list_gtm_built_in_variables`](#tool-list_gtm_built_in_variables-b7fa1306) | GTM | Dispatches to GTMClient.listBuiltInVariables to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.built\_in\_variables.list. |
| [`create_gtm_built_in_variable`](#tool-create_gtm_built_in_variable-28daecd7) | GTM | Dispatches to GTMClient.createBuiltInVariable to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.built\_in\_variables.create. |
| [`delete_gtm_built_in_variable`](#tool-delete_gtm_built_in_variable-3f448a48) | GTM | Dispatches to GTMClient.deleteBuiltInVariable to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.built\_in\_variables.delete. |
| [`revert_gtm_built_in_variables`](#tool-revert_gtm_built_in_variables-72553301) | GTM | Dispatches to GTMClient.revertBuiltInVariables to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.built\_in\_variables.revert. The SDK resource/method is accessed through an any cast; compatibility is unverified. |
| [`list_gtm_versions`](#tool-list_gtm_versions-c6167254) | GTM | Dispatches to GTMClient.listVersions to perform the corresponding Google Tag Manager operation via accounts.containers.versions as any).list. The SDK resource/method is accessed through an any cast; compatibility is unverified. |
| [`get_gtm_version`](#tool-get_gtm_version-d1fe329c) | GTM | Dispatches to GTMClient.getVersion to perform the corresponding Google Tag Manager operation via accounts.containers.versions.get. |
| [`delete_gtm_folder`](#tool-delete_gtm_folder-0d1f1f52) | GTM | Dispatches to GTMClient.deleteFolder to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.folders.delete. |
| [`revert_gtm_folder`](#tool-revert_gtm_folder-aa8dba5f) | GTM | Dispatches to GTMClient.revertFolder to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.folders.revert. |
| [`update_gtm_version`](#tool-update_gtm_version-177c711b) | GTM | Dispatches to GTMClient.updateVersion to perform the corresponding Google Tag Manager operation via accounts.containers.versions.get. |
| [`delete_gtm_version`](#tool-delete_gtm_version-e347f229) | GTM | Dispatches to GTMClient.deleteVersion to perform the corresponding Google Tag Manager operation via accounts.containers.versions.delete. |
| [`undelete_gtm_version`](#tool-undelete_gtm_version-ae549033) | GTM | Dispatches to GTMClient.undeleteVersion to perform the corresponding Google Tag Manager operation via accounts.containers.versions as any).undelete. The SDK resource/method is accessed through an any cast; compatibility is unverified. |
| [`set_latest_gtm_version`](#tool-set_latest_gtm_version-28e763ca) | GTM | Dispatches to GTMClient.setLatestVersion to perform the corresponding Google Tag Manager operation via accounts.containers.versions as any).set\_latest. The SDK resource/method is accessed through an any cast; compatibility is unverified. |
| [`get_live_gtm_version`](#tool-get_live_gtm_version-563f94aa) | GTM | Dispatches to GTMClient.getLiveVersion to perform the corresponding Google Tag Manager operation via accounts.containers.versions as any).live. The SDK resource/method is accessed through an any cast; compatibility is unverified. |
| [`list_gtm_version_headers`](#tool-list_gtm_version_headers-c8ca4d2b) | GTM | Dispatches to GTMClient.listVersionHeaders to perform the corresponding Google Tag Manager operation via accounts.containers as any).version\_headers.list. The SDK resource/method is accessed through an any cast; compatibility is unverified. |
| [`get_latest_gtm_version_header`](#tool-get_latest_gtm_version_header-af861e5f) | GTM | Dispatches to GTMClient.getLatestVersionHeader to perform the corresponding Google Tag Manager operation via accounts.containers as any).version\_headers.latest. The SDK resource/method is accessed through an any cast; compatibility is unverified. |
| [`quick_preview_gtm_workspace`](#tool-quick_preview_gtm_workspace-967fc7d3) | GTM | Dispatches to GTMClient.quickPreview to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).quick\_preview. The SDK resource/method is accessed through an any cast; compatibility is unverified. |
| [`move_entities_to_gtm_folder`](#tool-move_entities_to_gtm_folder-0501a84f) | GTM | Dispatches to GTMClient.moveEntitiesToFolder to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.folders as any).move\_entities\_to\_folder. The SDK resource/method is accessed through an any cast; compatibility is unverified. |
| [`get_gtm_folder_entities`](#tool-get_gtm_folder_entities-74a59f47) | GTM | Dispatches to GTMClient.getFolderEntities to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.folders as any).entities. The SDK resource/method is accessed through an any cast; compatibility is unverified. |
| [`list_gtm_environments`](#tool-list_gtm_environments-92c05ff2) | GTM | Dispatches to GTMClient.listEnvironments to perform the corresponding Google Tag Manager operation via accounts.containers.environments.list. |
| [`get_gtm_environment`](#tool-get_gtm_environment-6f00c226) | GTM | Dispatches to GTMClient.getEnvironment to perform the corresponding Google Tag Manager operation via accounts.containers.environments.get. |
| [`create_gtm_environment`](#tool-create_gtm_environment-b426fd04) | GTM | Dispatches to GTMClient.createEnvironment to perform the corresponding Google Tag Manager operation via accounts.containers.environments.create. |
| [`update_gtm_environment`](#tool-update_gtm_environment-96e8ff87) | GTM | Dispatches to GTMClient.updateEnvironment to perform the corresponding Google Tag Manager operation via accounts.containers.environments.get. |
| [`delete_gtm_environment`](#tool-delete_gtm_environment-40add632) | GTM | Dispatches to GTMClient.deleteEnvironment to perform the corresponding Google Tag Manager operation via accounts.containers.environments.delete. |
| [`reauthorize_gtm_environment`](#tool-reauthorize_gtm_environment-8d77b294) | GTM | Dispatches to GTMClient.reauthorizeEnvironment to perform the corresponding Google Tag Manager operation via accounts.containers.environments as any).reauthorize. The SDK resource/method is accessed through an any cast; compatibility is unverified. |
| [`list_gtm_user_permissions`](#tool-list_gtm_user_permissions-c3a20f3b) | GTM | Dispatches to GTMClient.listUserPermissions to perform the corresponding Google Tag Manager operation via accounts.user\_permissions.list. |
| [`get_gtm_user_permission`](#tool-get_gtm_user_permission-7775c67e) | GTM | Dispatches to GTMClient.getUserPermission to perform the corresponding Google Tag Manager operation via accounts.user\_permissions.get. |
| [`create_gtm_user_permission`](#tool-create_gtm_user_permission-aed8f610) | GTM | Dispatches to GTMClient.createUserPermission to perform the corresponding Google Tag Manager operation via accounts.user\_permissions.create. |
| [`update_gtm_user_permission`](#tool-update_gtm_user_permission-a057b2c6) | GTM | Dispatches to GTMClient.updateUserPermission to perform the corresponding Google Tag Manager operation via accounts.user\_permissions.get. |
| [`delete_gtm_user_permission`](#tool-delete_gtm_user_permission-4268edd3) | GTM | Dispatches to GTMClient.deleteUserPermission to perform the corresponding Google Tag Manager operation via accounts.user\_permissions.delete. |
| [`list_gtm_clients`](#tool-list_gtm_clients-cd613d83) | GTM | Dispatches to GTMClient.listClients to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).clients.list. The SDK resource/method is accessed through an any cast; compatibility is unverified. |
| [`get_gtm_client`](#tool-get_gtm_client-4b575e29) | GTM | Dispatches to GTMClient.getClient to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).clients.get. The SDK resource/method is accessed through an any cast; compatibility is unverified. |
| [`create_gtm_client`](#tool-create_gtm_client-4d75da62) | GTM | Dispatches to GTMClient.createClient to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).clients.create. The SDK resource/method is accessed through an any cast; compatibility is unverified. |
| [`update_gtm_client`](#tool-update_gtm_client-74b8da5c) | GTM | Dispatches to GTMClient.updateClient to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).clients.get. The SDK resource/method is accessed through an any cast; compatibility is unverified. |
| [`delete_gtm_client`](#tool-delete_gtm_client-a8516efb) | GTM | Dispatches to GTMClient.deleteClient to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).clients.delete. The SDK resource/method is accessed through an any cast; compatibility is unverified. |
| [`revert_gtm_client`](#tool-revert_gtm_client-1e47c8d3) | GTM | Dispatches to GTMClient.revertClient to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).clients.revert. The SDK resource/method is accessed through an any cast; compatibility is unverified. |
| [`list_gtm_gtag_configs`](#tool-list_gtm_gtag_configs-b0771a34) | GTM | Dispatches to GTMClient.listGtagConfigs to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).gtag\_config.list. The SDK resource/method is accessed through an any cast; compatibility is unverified. |
| [`get_gtm_gtag_config`](#tool-get_gtm_gtag_config-9806ce6d) | GTM | Dispatches to GTMClient.getGtagConfig to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).gtag\_config.get. The SDK resource/method is accessed through an any cast; compatibility is unverified. |
| [`create_gtm_gtag_config`](#tool-create_gtm_gtag_config-af82e710) | GTM | Dispatches to GTMClient.createGtagConfig to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).gtag\_config.create. The SDK resource/method is accessed through an any cast; compatibility is unverified. |
| [`update_gtm_gtag_config`](#tool-update_gtm_gtag_config-7e759536) | GTM | Dispatches to GTMClient.updateGtagConfig to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).gtag\_config.get. The SDK resource/method is accessed through an any cast; compatibility is unverified. |
| [`delete_gtm_gtag_config`](#tool-delete_gtm_gtag_config-e3bb3000) | GTM | Dispatches to GTMClient.deleteGtagConfig to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).gtag\_config.delete. The SDK resource/method is accessed through an any cast; compatibility is unverified. |
| [`revert_gtm_gtag_config`](#tool-revert_gtm_gtag_config-27978e23) | GTM | Dispatches to GTMClient.revertGtagConfig to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).gtag\_config.revert. The SDK resource/method is accessed through an any cast; compatibility is unverified. |
| [`list_gtm_templates`](#tool-list_gtm_templates-f79dc718) | GTM | Dispatches to GTMClient.listTemplates to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).templates.list. The SDK resource/method is accessed through an any cast; compatibility is unverified. |
| [`get_gtm_template`](#tool-get_gtm_template-61719db8) | GTM | Dispatches to GTMClient.getTemplate to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).templates.get. The SDK resource/method is accessed through an any cast; compatibility is unverified. |
| [`create_gtm_template`](#tool-create_gtm_template-dc08cb4c) | GTM | Dispatches to GTMClient.createTemplate to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).templates.create. The SDK resource/method is accessed through an any cast; compatibility is unverified. |
| [`update_gtm_template`](#tool-update_gtm_template-59bb4f48) | GTM | Dispatches to GTMClient.updateTemplate to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).templates.get. The SDK resource/method is accessed through an any cast; compatibility is unverified. |
| [`delete_gtm_template`](#tool-delete_gtm_template-834e760f) | GTM | Dispatches to GTMClient.deleteTemplate to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).templates.delete. The SDK resource/method is accessed through an any cast; compatibility is unverified. |
| [`revert_gtm_template`](#tool-revert_gtm_template-9bd11633) | GTM | Dispatches to GTMClient.revertTemplate to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).templates.revert. The SDK resource/method is accessed through an any cast; compatibility is unverified. |
| [`import_gtm_template_from_gallery`](#tool-import_gtm_template_from_gallery-dc33189f) | GTM | Dispatches to GTMClient.importTemplateFromGallery to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).templates.import\_from\_gallery. The SDK resource/method is accessed through an any cast; compatibility is unverified. |
| [`list_gtm_transformations`](#tool-list_gtm_transformations-00172442) | GTM | Dispatches to GTMClient.listTransformations to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).transformations.list. The SDK resource/method is accessed through an any cast; compatibility is unverified. |
| [`get_gtm_transformation`](#tool-get_gtm_transformation-4a8311ca) | GTM | Dispatches to GTMClient.getTransformation to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).transformations.get. The SDK resource/method is accessed through an any cast; compatibility is unverified. |
| [`create_gtm_transformation`](#tool-create_gtm_transformation-2b4cd640) | GTM | Dispatches to GTMClient.createTransformation to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).transformations.create. The SDK resource/method is accessed through an any cast; compatibility is unverified. |
| [`update_gtm_transformation`](#tool-update_gtm_transformation-95b562df) | GTM | Dispatches to GTMClient.updateTransformation to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).transformations.get. The SDK resource/method is accessed through an any cast; compatibility is unverified. |
| [`delete_gtm_transformation`](#tool-delete_gtm_transformation-e92a0761) | GTM | Dispatches to GTMClient.deleteTransformation to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).transformations.delete. The SDK resource/method is accessed through an any cast; compatibility is unverified. |
| [`revert_gtm_transformation`](#tool-revert_gtm_transformation-6998b3df) | GTM | Dispatches to GTMClient.revertTransformation to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).transformations.revert. The SDK resource/method is accessed through an any cast; compatibility is unverified. |
| [`list_gtm_zones`](#tool-list_gtm_zones-b3674d70) | GTM | Dispatches to GTMClient.listZones to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).zones.list. The SDK resource/method is accessed through an any cast; compatibility is unverified. |
| [`get_gtm_zone`](#tool-get_gtm_zone-3fef4a0d) | GTM | Dispatches to GTMClient.getZone to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).zones.get. The SDK resource/method is accessed through an any cast; compatibility is unverified. |

<a id="tool-create_gtm_tag-07815d6f"></a>

## create_gtm_tag

Handler: Dispatches to GTMClient.createTag to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.tags.create.

```text
Create a GTM tag in a container
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L870-L889) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L2739-L2757) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "tag_name": {
      "type": "string",
      "description": "Name of the tag"
    },
    "tag_type": {
      "type": "string",
      "description": "Tag type (e.g., \"gaawc\", \"awct\", \"ua\")"
    },
    "parameters": {
      "type": "object",
      "description": "Tag parameters"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "tag_name",
    "tag_type"
  ]
}
```

</details>

<a id="tool-create_gtm_trigger-1f105cd1"></a>

## create_gtm_trigger

Handler: Dispatches to GTMClient.createTrigger to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.triggers.create.

```text
Create a GTM trigger
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L891-L915) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L2758-L2776) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "trigger_name": {
      "type": "string",
      "description": "Name of the trigger"
    },
    "trigger_type": {
      "type": "string",
      "description": "Trigger type (e.g., \"click\", \"pageview\")"
    },
    "conditions": {
      "type": "array",
      "description": "Trigger conditions"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "trigger_name",
    "trigger_type"
  ]
}
```

</details>

<a id="tool-create_gtm_variable-3a356a91"></a>

## create_gtm_variable

Handler: Dispatches to GTMClient.createVariable to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.variables.create.

```text
Create a GTM variable
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L917-L938) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L2777-L2795) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "variable_name": {
      "type": "string",
      "description": "Name of the variable"
    },
    "variable_type": {
      "type": "string",
      "description": "Variable type (e.g., \"c\", \"v\", \"jsm\")"
    },
    "value": {
      "type": "string",
      "description": "Variable value"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "variable_name",
    "variable_type"
  ]
}
```

</details>

<a id="tool-list_gtm_containers-c6ad6269"></a>

## list_gtm_containers

Handler: Dispatches to GTMClient.listContainers to perform the corresponding Google Tag Manager operation via accounts.containers.list.

```text
List all GTM containers for an account
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L940-L949) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L2796-L2808) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    }
  },
  "required": [
    "account_id"
  ]
}
```

</details>

<a id="tool-get_gtm_container-4761a2e1"></a>

## get_gtm_container

Handler: Dispatches to GTMClient.getContainer to perform the corresponding Google Tag Manager operation via accounts.containers.get.

```text
Get details of a GTM container
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L951-L961) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L2809-L2824) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ]
}
```

</details>

<a id="tool-publish_gtm_version-4ec5da3f"></a>

## publish_gtm_version

Handler: Creates a version from the default workspace, then publishes that version through the GTM v2 API.

```text
Publish a GTM container version
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L963-L975) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L2825-L2842) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "name": {
      "type": "string",
      "description": "Version name"
    },
    "notes": {
      "type": "string",
      "description": "Version notes"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ]
}
```

</details>

<a id="tool-create_ga4_setup-453f5540"></a>

## create_ga4_setup

Handler: Calls a GTM component helper that creates tags and triggers in the default workspace and returns individual results; it does not attach the created triggers to tags and returns success even when individual creation results fail.

```text
Create complete Google Analytics 4 setup with config tag and common events
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L977-L992) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L2843-L2860) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "measurement_id": {
      "type": "string",
      "description": "GA4 Measurement ID (e.g., G-XXXXXXXXXX)"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "measurement_id"
  ]
}
```

</details>

<a id="tool-create_facebook_pixel_setup-846daf6f"></a>

## create_facebook_pixel_setup

Handler: Calls a GTM component helper that creates tags and triggers in the default workspace and returns individual results; it does not attach the created triggers to tags and returns success even when individual creation results fail.

```text
Create Facebook Pixel tracking setup
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L994-L1005) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L2861-L2878) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "pixel_id": {
      "type": "string",
      "description": "Facebook Pixel ID"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "pixel_id"
  ]
}
```

</details>

<a id="tool-create_form_tracking-f67b0c58"></a>

## create_form_tracking

Handler: Calls a GTM component helper that creates tags and triggers in the default workspace and returns individual results; it does not attach the created triggers to tags and returns success even when individual creation results fail.

```text
Create form submission tracking setup
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1007-L1026) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L2879-L2897) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "form_selector": {
      "type": "string",
      "description": "CSS selector for the form (e.g., #contact-form)"
    },
    "event_name": {
      "type": "string",
      "description": "Event name to fire",
      "default": "form_submit"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "form_selector"
  ]
}
```

</details>

<a id="tool-generate_gtm_workflow-afce728e"></a>

## generate_gtm_workflow

Handler: Calls a GTM component helper that creates tags and triggers in the default workspace and returns individual results; it does not attach the created triggers to tags and returns success even when individual creation results fail.

```text
Generate complete workflows for different site types (ecommerce, lead_generation, content_site)
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1028-L1053) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L2898-L2918) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "workflow_type": {
      "type": "string",
      "enum": [
        "ecommerce",
        "lead_generation",
        "content_site"
      ],
      "description": "Type of workflow to generate"
    },
    "ga4_measurement_id": {
      "type": "string",
      "description": "GA4 Measurement ID (optional)"
    },
    "facebook_pixel_id": {
      "type": "string",
      "description": "Facebook Pixel ID (optional)"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workflow_type"
  ]
}
```

</details>

<a id="tool-list_gtm_accounts-8aee50f5"></a>

## list_gtm_accounts

Handler: Dispatches to GTMClient.listAccounts to perform the corresponding Google Tag Manager operation via accounts.list.

```text
List all GTM accounts accessible to the authenticated user
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1055-L1062) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L2919-L2931) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {},
  "required": []
}
```

</details>

<a id="tool-get_gtm_account-c9072087"></a>

## get_gtm_account

Handler: Dispatches to GTMClient.getAccount to perform the corresponding Google Tag Manager operation via accounts.get.

```text
Get details of a GTM account
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1064-L1073) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L2932-L2944) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    }
  },
  "required": [
    "account_id"
  ]
}
```

</details>

<a id="tool-list_gtm_workspaces-e1ad847d"></a>

## list_gtm_workspaces

Handler: Dispatches to GTMClient.listWorkspaces to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.list.

```text
List all workspaces in a container
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1075-L1085) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L2945-L2960) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ]
}
```

</details>

<a id="tool-get_gtm_workspace-e1709dcc"></a>

## get_gtm_workspace

Handler: Dispatches to GTMClient.getWorkspace to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.get.

```text
Get details of a GTM workspace
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1087-L1098) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L2961-L2977) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ]
}
```

</details>

<a id="tool-list_gtm_tags-7506947b"></a>

## list_gtm_tags

Handler: Dispatches to GTMClient.listTags to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.tags.list.

```text
List all tags in a workspace
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1100-L1114) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L2978-L2994) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (optional, uses default if not provided)"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ]
}
```

</details>

<a id="tool-get_gtm_tag-95c3a3dd"></a>

## get_gtm_tag

Handler: Dispatches to GTMClient.getTag to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.tags.get.

```text
Get details of a GTM tag
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1116-L1131) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L2995-L3012) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "tag_id": {
      "type": "string",
      "description": "GTM tag ID"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (optional, uses default if not provided)"
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

<a id="tool-list_gtm_triggers-3dd5a402"></a>

## list_gtm_triggers

Handler: Dispatches to GTMClient.listTriggers to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.triggers.list.

```text
List all triggers in a workspace
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1133-L1147) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L3013-L3029) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (optional, uses default if not provided)"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ]
}
```

</details>

<a id="tool-get_gtm_trigger-d280b47f"></a>

## get_gtm_trigger

Handler: Dispatches to GTMClient.getTrigger to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.triggers.get.

```text
Get details of a GTM trigger
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1149-L1164) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L3030-L3047) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "trigger_id": {
      "type": "string",
      "description": "GTM trigger ID"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (optional, uses default if not provided)"
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

<a id="tool-list_gtm_variables-b1742e8b"></a>

## list_gtm_variables

Handler: Dispatches to GTMClient.listVariables to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.variables.list.

```text
List all variables in a workspace
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1166-L1180) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L3048-L3064) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (optional, uses default if not provided)"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ]
}
```

</details>

<a id="tool-get_gtm_variable-1817042d"></a>

## get_gtm_variable

Handler: Dispatches to GTMClient.getVariable to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.variables.get.

```text
Get details of a GTM variable
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1182-L1198) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L3065-L3083) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "variable_id": {
      "type": "string",
      "description": "GTM variable ID"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (optional, uses default if not provided)"
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

<a id="tool-update_gtm_account-e5fe1c2d"></a>

## update_gtm_account

Handler: Dispatches to GTMClient.updateAccount to perform the corresponding Google Tag Manager operation via accounts.get.

```text
Update a GTM account
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1200-L1214) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L3084-L3100) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "name": {
      "type": "string",
      "description": "Account name"
    },
    "share_data": {
      "type": "boolean",
      "description": "Whether to share data anonymously"
    }
  },
  "required": [
    "account_id"
  ]
}
```

</details>

<a id="tool-update_gtm_container-88989f8b"></a>

## update_gtm_container

Handler: Dispatches to GTMClient.updateContainer to perform the corresponding Google Tag Manager operation via accounts.containers.get.

```text
Update a GTM container
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1216-L1235) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L3101-L3123) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "name": {
      "type": "string",
      "description": "Container name"
    },
    "domain_name": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Domain names"
    },
    "time_zone_country_id": {
      "type": "string",
      "description": "Timezone country ID"
    },
    "time_zone_id": {
      "type": "string",
      "description": "Timezone ID"
    },
    "notes": {
      "type": "string",
      "description": "Container notes"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ]
}
```

</details>

<a id="tool-update_gtm_workspace-50a61498"></a>

## update_gtm_workspace

Handler: Dispatches to GTMClient.updateWorkspace to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.get.

```text
Update a GTM workspace
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1237-L1250) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L3124-L3142) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID"
    },
    "name": {
      "type": "string",
      "description": "Workspace name"
    },
    "description": {
      "type": "string",
      "description": "Workspace description"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ]
}
```

</details>

<a id="tool-update_gtm_tag-a5906d7b"></a>

## update_gtm_tag

Handler: Dispatches to GTMClient.updateTag to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.tags.get.

```text
Update a GTM tag
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1252-L1281) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L3143-L3168) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "tag_id": {
      "type": "string",
      "description": "GTM tag ID"
    },
    "name": {
      "type": "string",
      "description": "Tag name"
    },
    "tag_type": {
      "type": "string",
      "description": "Tag type"
    },
    "parameters": {
      "type": "object",
      "description": "Tag parameters"
    },
    "firing_trigger_id": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Firing trigger IDs"
    },
    "blocking_trigger_id": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Blocking trigger IDs"
    },
    "tag_firing_option": {
      "type": "string",
      "description": "Tag firing option"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (optional, uses default if not provided)"
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

<a id="tool-update_gtm_trigger-36470709"></a>

## update_gtm_trigger

Handler: Dispatches to GTMClient.updateTrigger to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.triggers.get.

```text
Update a GTM trigger
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1283-L1307) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L3169-L3194) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "trigger_id": {
      "type": "string",
      "description": "GTM trigger ID"
    },
    "name": {
      "type": "string",
      "description": "Trigger name"
    },
    "trigger_type": {
      "type": "string",
      "description": "Trigger type"
    },
    "conditions": {
      "type": "array",
      "description": "Trigger conditions"
    },
    "wait_for_tags": {
      "type": "boolean",
      "description": "Wait for tags"
    },
    "wait_for_tags_timeout": {
      "type": "number",
      "description": "Wait for tags timeout (ms)"
    },
    "check_validation": {
      "type": "boolean",
      "description": "Check validation"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (optional, uses default if not provided)"
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

<a id="tool-update_gtm_variable-273d164b"></a>

## update_gtm_variable

Handler: Dispatches to GTMClient.updateVariable to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.variables.get.

```text
Update a GTM variable
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1309-L1328) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L3195-L3218) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "variable_id": {
      "type": "string",
      "description": "GTM variable ID"
    },
    "name": {
      "type": "string",
      "description": "Variable name"
    },
    "variable_type": {
      "type": "string",
      "description": "Variable type"
    },
    "value": {
      "type": "string",
      "description": "Variable value"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (optional, uses default if not provided)"
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

<a id="tool-delete_gtm_container-8db12bd5"></a>

## delete_gtm_container

Handler: Dispatches to GTMClient.deleteContainer to perform the corresponding Google Tag Manager operation via accounts.containers.delete.

```text
Delete a GTM container
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1330-L1340) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L3219-L3234) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ]
}
```

</details>

<a id="tool-delete_gtm_workspace-2fd89476"></a>

## delete_gtm_workspace

Handler: Dispatches to GTMClient.deleteWorkspace to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.delete.

```text
Delete a GTM workspace
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1342-L1353) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L3235-L3251) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ]
}
```

</details>

<a id="tool-delete_gtm_tag-83992db5"></a>

## delete_gtm_tag

Handler: Dispatches to GTMClient.deleteTag to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.tags.delete.

```text
Delete a GTM tag
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1355-L1370) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L3252-L3269) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "tag_id": {
      "type": "string",
      "description": "GTM tag ID"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (optional, uses default if not provided)"
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

<a id="tool-delete_gtm_trigger-4bb201a3"></a>

## delete_gtm_trigger

Handler: Dispatches to GTMClient.deleteTrigger to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.triggers.delete.

```text
Delete a GTM trigger
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1372-L1387) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L3270-L3287) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "trigger_id": {
      "type": "string",
      "description": "GTM trigger ID"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (optional, uses default if not provided)"
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

<a id="tool-delete_gtm_variable-16583557"></a>

## delete_gtm_variable

Handler: Dispatches to GTMClient.deleteVariable to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.variables.delete.

```text
Delete a GTM variable
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1389-L1405) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L3288-L3306) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "variable_id": {
      "type": "string",
      "description": "GTM variable ID"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (optional, uses default if not provided)"
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

<a id="tool-revert_gtm_tag-bb60603c"></a>

## revert_gtm_tag

Handler: Dispatches to GTMClient.revertTag to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.tags.revert.

```text
Revert a GTM tag to its state in the latest published version
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1407-L1422) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L3307-L3324) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "tag_id": {
      "type": "string",
      "description": "GTM tag ID"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (optional, uses default if not provided)"
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

<a id="tool-revert_gtm_trigger-656fd9b0"></a>

## revert_gtm_trigger

Handler: Dispatches to GTMClient.revertTrigger to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.triggers.revert.

```text
Revert a GTM trigger to its state in the latest published version
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1424-L1439) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L3325-L3342) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "trigger_id": {
      "type": "string",
      "description": "GTM trigger ID"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (optional, uses default if not provided)"
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

<a id="tool-revert_gtm_variable-f12cbc7a"></a>

## revert_gtm_variable

Handler: Dispatches to GTMClient.revertVariable to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.variables.revert.

```text
Revert a GTM variable to its state in the latest published version
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1441-L1457) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L3343-L3361) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "variable_id": {
      "type": "string",
      "description": "GTM variable ID"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (optional, uses default if not provided)"
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

<a id="tool-create_gtm_container-9808829a"></a>

## create_gtm_container

Handler: Dispatches to GTMClient.createContainer to perform the corresponding Google Tag Manager operation via accounts.containers.create.

```text
Create a new GTM container
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1459-L1482) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L3362-L3382) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "name": {
      "type": "string",
      "description": "Container name"
    },
    "usage_context": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Usage contexts (web, android, ios, server)"
    },
    "domain_name": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Domain names"
    },
    "time_zone_country_id": {
      "type": "string",
      "description": "Timezone country ID"
    },
    "time_zone_id": {
      "type": "string",
      "description": "Timezone ID"
    },
    "notes": {
      "type": "string",
      "description": "Container notes"
    }
  },
  "required": [
    "account_id",
    "name"
  ]
}
```

</details>

<a id="tool-get_gtm_container_snippet-25d2754c"></a>

## get_gtm_container_snippet

Handler: Dispatches to GTMClient.getContainerSnippet to perform the corresponding Google Tag Manager operation via accounts.containers.snippet.

```text
Get the JavaScript snippet for a container
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1484-L1494) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L3383-L3398) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ]
}
```

</details>

<a id="tool-lookup_gtm_container-241327e1"></a>

## lookup_gtm_container

Handler: Dispatches to GTMClient.lookupContainer to perform the corresponding Google Tag Manager operation via accounts.containers.lookup.

```text
Look up a container by public ID
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1496-L1513) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L3399-L3415) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "public_id": {
      "type": "string",
      "description": "Public container ID (GTM-XXXXXXX)"
    },
    "destination_id": {
      "type": "string",
      "description": "Destination ID for server-side containers"
    }
  },
  "required": [
    "account_id"
  ]
}
```

</details>

<a id="tool-combine_gtm_containers-ee89c27a"></a>

## combine_gtm_containers

Handler: Dispatches to GTMClient.combineContainers to perform the corresponding Google Tag Manager operation via accounts.containers as any).combine. The SDK resource/method is accessed through an any cast; compatibility is unverified.

```text
Combine multiple containers
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1515-L1533) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L3416-L3433) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID (destination)"
    },
    "source_container_id": {
      "type": "string",
      "description": "Source container ID to combine from"
    },
    "allow_user_variable_conflict": {
      "type": "boolean",
      "description": "Allow user variable conflicts"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "source_container_id"
  ]
}
```

</details>

<a id="tool-move_gtm_tag_id-a68461df"></a>

## move_gtm_tag_id

Handler: Dispatches to GTMClient.moveTagId to perform the corresponding Google Tag Manager operation via accounts.containers as any).move\_tag\_id. The SDK resource/method is accessed through an any cast; compatibility is unverified.

```text
Move a tag ID from one container to another
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1535-L1551) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L3434-L3452) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID (source)"
    },
    "tag_id": {
      "type": "string",
      "description": "Tag ID to move"
    },
    "destination_container_id": {
      "type": "string",
      "description": "Destination container ID"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "tag_id",
    "destination_container_id"
  ]
}
```

</details>

<a id="tool-create_gtm_workspace-00287f7b"></a>

## create_gtm_workspace

Handler: Dispatches to GTMClient.createWorkspace to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.create.

```text
Create a new GTM workspace
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1553-L1565) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L3453-L3470) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "name": {
      "type": "string",
      "description": "Workspace name"
    },
    "description": {
      "type": "string",
      "description": "Workspace description"
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

<a id="tool-get_gtm_workspace_status-375c9459"></a>

## get_gtm_workspace_status

Handler: Dispatches to GTMClient.getWorkspaceStatus to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.getStatus.

```text
Get workspace status (changes and conflicts)
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1567-L1578) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L3471-L3487) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ]
}
```

</details>

<a id="tool-sync_gtm_workspace-f25bcef9"></a>

## sync_gtm_workspace

Handler: Dispatches to GTMClient.syncWorkspace to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.sync.

```text
Sync workspace with latest container version
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1580-L1591) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L3488-L3504) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ]
}
```

</details>

<a id="tool-resolve_gtm_conflict-6f3ecc3c"></a>

## resolve_gtm_conflict

Handler: Dispatches to GTMClient.resolveConflict to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).resolve\_conflict. The SDK resource/method is accessed through an any cast; compatibility is unverified.

```text
Resolve a merge conflict in workspace
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1593-L1610) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L3505-L3523) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID"
    },
    "conflict_id": {
      "type": "string",
      "description": "Conflict ID"
    },
    "change_type": {
      "type": "string",
      "enum": [
        "KEEP",
        "DELETE"
      ],
      "description": "Change type to resolve conflict"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "conflict_id",
    "change_type"
  ]
}
```

</details>

<a id="tool-bulk_update_gtm_workspace-a03d657e"></a>

## bulk_update_gtm_workspace

Handler: Dispatches to GTMClient.bulkUpdate to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).bulk\_update. The SDK resource/method is accessed through an any cast; compatibility is unverified.

```text
Perform bulk updates to multiple entities in workspace
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1612-L1628) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L3524-L3547) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID"
    },
    "tag": {
      "type": "array",
      "description": "Tag updates"
    },
    "trigger": {
      "type": "array",
      "description": "Trigger updates"
    },
    "variable": {
      "type": "array",
      "description": "Variable updates"
    },
    "folder": {
      "type": "array",
      "description": "Folder updates"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ]
}
```

</details>

<a id="tool-list_gtm_folders-acffcb88"></a>

## list_gtm_folders

Handler: Dispatches to GTMClient.listFolders to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.folders.list.

```text
List all folders in a workspace
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1630-L1644) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L3548-L3564) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (optional, uses default if not provided)"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ]
}
```

</details>

<a id="tool-get_gtm_folder-b5ccd360"></a>

## get_gtm_folder

Handler: Dispatches to GTMClient.getFolder to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.folders.get.

```text
Get details of a GTM folder
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1646-L1661) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L3565-L3582) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "folder_id": {
      "type": "string",
      "description": "GTM folder ID"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (optional, uses default if not provided)"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "folder_id"
  ]
}
```

</details>

<a id="tool-create_gtm_folder-1f1814de"></a>

## create_gtm_folder

Handler: Dispatches to GTMClient.createFolder to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.folders.create.

```text
Create a new GTM folder
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1663-L1678) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L3583-L3600) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "name": {
      "type": "string",
      "description": "Folder name"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (optional, uses default if not provided)"
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

<a id="tool-update_gtm_folder-9d32cbad"></a>

## update_gtm_folder

Handler: Dispatches to GTMClient.updateFolder to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.folders.get.

```text
Update a GTM folder
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1680-L1697) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L3601-L3620) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "folder_id": {
      "type": "string",
      "description": "GTM folder ID"
    },
    "name": {
      "type": "string",
      "description": "Folder name"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (optional, uses default if not provided)"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "folder_id",
    "name"
  ]
}
```

</details>

<a id="tool-list_gtm_built_in_variables-b7fa1306"></a>

## list_gtm_built_in_variables

Handler: Dispatches to GTMClient.listBuiltInVariables to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.built\_in\_variables.list.

```text
List all built-in variables in a workspace
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1699-L1713) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L3621-L3637) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (optional, uses default if not provided)"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ]
}
```

</details>

<a id="tool-create_gtm_built_in_variable-28daecd7"></a>

## create_gtm_built_in_variable

Handler: Dispatches to GTMClient.createBuiltInVariable to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.built\_in\_variables.create.

```text
Enable a built-in variable in workspace
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1715-L1733) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L3638-L3655) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "type": {
      "type": "string",
      "description": "Built-in variable type (e.g., PAGE_URL, CLICK_ELEMENT)"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (optional, uses default if not provided)"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "type"
  ]
}
```

</details>

<a id="tool-delete_gtm_built_in_variable-3f448a48"></a>

## delete_gtm_built_in_variable

Handler: Dispatches to GTMClient.deleteBuiltInVariable to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.built\_in\_variables.delete.

```text
Disable a built-in variable in workspace
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1735-L1750) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L3656-L3673) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "type": {
      "type": "string",
      "description": "Built-in variable type"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (optional, uses default if not provided)"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "type"
  ]
}
```

</details>

<a id="tool-revert_gtm_built_in_variables-72553301"></a>

## revert_gtm_built_in_variables

Handler: Dispatches to GTMClient.revertBuiltInVariables to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.built\_in\_variables.revert. The SDK resource/method is accessed through an any cast; compatibility is unverified.

```text
Revert built-in variables to their state in the latest published version
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1752-L1767) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L3674-L3691) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (optional, uses default if not provided)"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ]
}
```

</details>

<a id="tool-list_gtm_versions-c6167254"></a>

## list_gtm_versions

Handler: Dispatches to GTMClient.listVersions to perform the corresponding Google Tag Manager operation via accounts.containers.versions as any).list. The SDK resource/method is accessed through an any cast; compatibility is unverified.

```text
List all versions of a container
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1769-L1779) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L3692-L3707) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ]
}
```

</details>

<a id="tool-get_gtm_version-d1fe329c"></a>

## get_gtm_version

Handler: Dispatches to GTMClient.getVersion to perform the corresponding Google Tag Manager operation via accounts.containers.versions.get.

```text
Get version details with all entities
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1781-L1793) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L3708-L3725) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "version_id": {
      "type": "string",
      "description": "GTM version ID"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "version_id"
  ]
}
```

</details>

<a id="tool-delete_gtm_folder-0d1f1f52"></a>

## delete_gtm_folder

Handler: Dispatches to GTMClient.deleteFolder to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.folders.delete.

```text
Delete a GTM folder (must be empty)
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1795-L1810) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L3726-L3743) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "folder_id": {
      "type": "string",
      "description": "GTM folder ID"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (optional, uses default if not provided)"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "folder_id"
  ]
}
```

</details>

<a id="tool-revert_gtm_folder-aa8dba5f"></a>

## revert_gtm_folder

Handler: Dispatches to GTMClient.revertFolder to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.folders.revert.

```text
Revert a GTM folder to its state in the latest published version
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1812-L1828) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L3744-L3762) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "folder_id": {
      "type": "string",
      "description": "GTM folder ID"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (optional, uses default if not provided)"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "folder_id"
  ]
}
```

</details>

<a id="tool-update_gtm_version-177c711b"></a>

## update_gtm_version

Handler: Dispatches to GTMClient.updateVersion to perform the corresponding Google Tag Manager operation via accounts.containers.versions.get.

```text
Update version metadata (name, description)
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1830-L1843) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L3763-L3781) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "version_id": {
      "type": "string",
      "description": "GTM version ID"
    },
    "name": {
      "type": "string",
      "description": "Version name"
    },
    "description": {
      "type": "string",
      "description": "Version description"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "version_id"
  ]
}
```

</details>

<a id="tool-delete_gtm_version-e347f229"></a>

## delete_gtm_version

Handler: Dispatches to GTMClient.deleteVersion to perform the corresponding Google Tag Manager operation via accounts.containers.versions.delete.

```text
Delete a version (soft delete - can be undeleted)
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1845-L1856) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L3782-L3798) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "version_id": {
      "type": "string",
      "description": "GTM version ID"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "version_id"
  ]
}
```

</details>

<a id="tool-undelete_gtm_version-ae549033"></a>

## undelete_gtm_version

Handler: Dispatches to GTMClient.undeleteVersion to perform the corresponding Google Tag Manager operation via accounts.containers.versions as any).undelete. The SDK resource/method is accessed through an any cast; compatibility is unverified.

```text
Restore a deleted version
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1858-L1869) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L3799-L3815) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "version_id": {
      "type": "string",
      "description": "GTM version ID"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "version_id"
  ]
}
```

</details>

<a id="tool-set_latest_gtm_version-28e763ca"></a>

## set_latest_gtm_version

Handler: Dispatches to GTMClient.setLatestVersion to perform the corresponding Google Tag Manager operation via accounts.containers.versions as any).set\_latest. The SDK resource/method is accessed through an any cast; compatibility is unverified.

```text
Set a version as the latest (for preview purposes)
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1871-L1882) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L3816-L3832) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "version_id": {
      "type": "string",
      "description": "GTM version ID"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "version_id"
  ]
}
```

</details>

<a id="tool-get_live_gtm_version-563f94aa"></a>

## get_live_gtm_version

Handler: Dispatches to GTMClient.getLiveVersion to perform the corresponding Google Tag Manager operation via accounts.containers.versions as any).live. The SDK resource/method is accessed through an any cast; compatibility is unverified.

```text
Get the currently live (published) version
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1884-L1895) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L3833-L3849) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ]
}
```

</details>

<a id="tool-list_gtm_version_headers-c8ca4d2b"></a>

## list_gtm_version_headers

Handler: Dispatches to GTMClient.listVersionHeaders to perform the corresponding Google Tag Manager operation via accounts.containers as any).version\_headers.list. The SDK resource/method is accessed through an any cast; compatibility is unverified.

```text
List all version headers for a container (lightweight metadata)
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1897-L1907) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L3850-L3865) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ]
}
```

</details>

<a id="tool-get_latest_gtm_version_header-af861e5f"></a>

## get_latest_gtm_version_header

Handler: Dispatches to GTMClient.getLatestVersionHeader to perform the corresponding Google Tag Manager operation via accounts.containers as any).version\_headers.latest. The SDK resource/method is accessed through an any cast; compatibility is unverified.

```text
Get the latest version header
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1909-L1920) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L3866-L3882) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ]
}
```

</details>

<a id="tool-quick_preview_gtm_workspace-967fc7d3"></a>

## quick_preview_gtm_workspace

Handler: Dispatches to GTMClient.quickPreview to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).quick\_preview. The SDK resource/method is accessed through an any cast; compatibility is unverified.

```text
Create a quick preview URL for testing workspace changes
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1922-L1938) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L3883-L3901) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "url": {
      "type": "string",
      "description": "URL to preview"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (optional, uses default if not provided)"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "url"
  ]
}
```

</details>

<a id="tool-move_entities_to_gtm_folder-0501a84f"></a>

## move_entities_to_gtm_folder

Handler: Dispatches to GTMClient.moveEntitiesToFolder to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.folders as any).move\_entities\_to\_folder. The SDK resource/method is accessed through an any cast; compatibility is unverified.

```text
Move tags, triggers, or variables into a folder
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1940-L1970) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L3902-L3922) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "folder_id": {
      "type": "string",
      "description": "GTM folder ID"
    },
    "tag_ids": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Array of tag IDs to move"
    },
    "trigger_ids": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Array of trigger IDs to move"
    },
    "variable_ids": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Array of variable IDs to move"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (optional, uses default if not provided)"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "folder_id"
  ]
}
```

</details>

<a id="tool-get_gtm_folder_entities-74a59f47"></a>

## get_gtm_folder_entities

Handler: Dispatches to GTMClient.getFolderEntities to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces.folders as any).entities. The SDK resource/method is accessed through an any cast; compatibility is unverified.

```text
List all entities (tags, triggers, variables) in a folder
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1972-L1988) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L3923-L3941) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "folder_id": {
      "type": "string",
      "description": "GTM folder ID"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (optional, uses default if not provided)"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "folder_id"
  ]
}
```

</details>

<a id="tool-list_gtm_environments-92c05ff2"></a>

## list_gtm_environments

Handler: Dispatches to GTMClient.listEnvironments to perform the corresponding Google Tag Manager operation via accounts.containers.environments.list.

```text
List all environments for a container
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L1990-L2000) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L3942-L3957) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ]
}
```

</details>

<a id="tool-get_gtm_environment-6f00c226"></a>

## get_gtm_environment

Handler: Dispatches to GTMClient.getEnvironment to perform the corresponding Google Tag Manager operation via accounts.containers.environments.get.

```text
Get environment details
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L2002-L2013) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L3958-L3974) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "environment_id": {
      "type": "string",
      "description": "GTM environment ID"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "environment_id"
  ]
}
```

</details>

<a id="tool-create_gtm_environment-b426fd04"></a>

## create_gtm_environment

Handler: Dispatches to GTMClient.createEnvironment to perform the corresponding Google Tag Manager operation via accounts.containers.environments.create.

```text
Create a new environment
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L2015-L2029) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L3975-L3994) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "name": {
      "type": "string",
      "description": "Environment name"
    },
    "type": {
      "type": "string",
      "description": "Environment type (user, live, latest)"
    },
    "description": {
      "type": "string",
      "description": "Environment description"
    },
    "url": {
      "type": "string",
      "description": "Environment URL (for preview environments)"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "name",
    "type"
  ]
}
```

</details>

<a id="tool-update_gtm_environment-96e8ff87"></a>

## update_gtm_environment

Handler: Dispatches to GTMClient.updateEnvironment to perform the corresponding Google Tag Manager operation via accounts.containers.environments.get.

```text
Update an environment
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L2031-L2045) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L3995-L4014) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "environment_id": {
      "type": "string",
      "description": "GTM environment ID"
    },
    "name": {
      "type": "string",
      "description": "Environment name"
    },
    "description": {
      "type": "string",
      "description": "Environment description"
    },
    "url": {
      "type": "string",
      "description": "Environment URL"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "environment_id"
  ]
}
```

</details>

<a id="tool-delete_gtm_environment-40add632"></a>

## delete_gtm_environment

Handler: Dispatches to GTMClient.deleteEnvironment to perform the corresponding Google Tag Manager operation via accounts.containers.environments.delete.

```text
Delete an environment
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L2047-L2058) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L4015-L4031) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "environment_id": {
      "type": "string",
      "description": "GTM environment ID"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "environment_id"
  ]
}
```

</details>

<a id="tool-reauthorize_gtm_environment-8d77b294"></a>

## reauthorize_gtm_environment

Handler: Dispatches to GTMClient.reauthorizeEnvironment to perform the corresponding Google Tag Manager operation via accounts.containers.environments as any).reauthorize. The SDK resource/method is accessed through an any cast; compatibility is unverified.

```text
Reauthorize an environment (regenerate authorization code)
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L2060-L2072) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L4032-L4049) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "environment_id": {
      "type": "string",
      "description": "GTM environment ID"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "environment_id"
  ]
}
```

</details>

<a id="tool-list_gtm_user_permissions-c3a20f3b"></a>

## list_gtm_user_permissions

Handler: Dispatches to GTMClient.listUserPermissions to perform the corresponding Google Tag Manager operation via accounts.user\_permissions.list.

```text
List all user permissions for an account
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L2074-L2083) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L4050-L4062) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    }
  },
  "required": [
    "account_id"
  ]
}
```

</details>

<a id="tool-get_gtm_user_permission-7775c67e"></a>

## get_gtm_user_permission

Handler: Dispatches to GTMClient.getUserPermission to perform the corresponding Google Tag Manager operation via accounts.user\_permissions.get.

```text
Get user permission details
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L2085-L2096) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L4063-L4079) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "permission_id": {
      "type": "string",
      "description": "GTM user permission ID"
    }
  },
  "required": [
    "account_id",
    "permission_id"
  ]
}
```

</details>

<a id="tool-create_gtm_user_permission-aed8f610"></a>

## create_gtm_user_permission

Handler: Dispatches to GTMClient.createUserPermission to perform the corresponding Google Tag Manager operation via accounts.user\_permissions.create.

```text
Create a new user permission (grant access)
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L2098-L2123) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L4080-L4101) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "email_address": {
      "type": "string",
      "description": "Email address of the user"
    },
    "account_access_permission": {
      "type": "string",
      "description": "Account access permission (admin, user, noAccess)"
    },
    "container_access": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "container_id": {
            "type": "string"
          },
          "permission": {
            "type": "string"
          }
        }
      },
      "description": "Array of container access permissions"
    }
  },
  "required": [
    "account_id",
    "email_address",
    "account_access_permission"
  ]
}
```

</details>

<a id="tool-update_gtm_user_permission-a057b2c6"></a>

## update_gtm_user_permission

Handler: Dispatches to GTMClient.updateUserPermission to perform the corresponding Google Tag Manager operation via accounts.user\_permissions.get.

```text
Update a user permission
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L2125-L2150) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L4102-L4125) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "permission_id": {
      "type": "string",
      "description": "GTM user permission ID"
    },
    "account_access_permission": {
      "type": "string",
      "description": "Account access permission"
    },
    "container_access": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "container_id": {
            "type": "string"
          },
          "permission": {
            "type": "string"
          }
        }
      },
      "description": "Array of container access permissions"
    }
  },
  "required": [
    "account_id",
    "permission_id"
  ]
}
```

</details>

<a id="tool-delete_gtm_user_permission-4268edd3"></a>

## delete_gtm_user_permission

Handler: Dispatches to GTMClient.deleteUserPermission to perform the corresponding Google Tag Manager operation via accounts.user\_permissions.delete.

```text
Delete a user permission (revoke access)
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L2152-L2163) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L4126-L4142) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "permission_id": {
      "type": "string",
      "description": "GTM user permission ID"
    }
  },
  "required": [
    "account_id",
    "permission_id"
  ]
}
```

</details>

<a id="tool-list_gtm_clients-cd613d83"></a>

## list_gtm_clients

Handler: Dispatches to GTMClient.listClients to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).clients.list. The SDK resource/method is accessed through an any cast; compatibility is unverified.

```text
List all clients in a workspace (Server-side Tagging)
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L2165-L2179) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L4143-L4159) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (optional, uses default if not provided)"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ]
}
```

</details>

<a id="tool-get_gtm_client-4b575e29"></a>

## get_gtm_client

Handler: Dispatches to GTMClient.getClient to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).clients.get. The SDK resource/method is accessed through an any cast; compatibility is unverified.

```text
Get client details (Server-side Tagging)
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L2181-L2196) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L4160-L4177) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "client_id": {
      "type": "string",
      "description": "GTM client ID"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (optional, uses default if not provided)"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "client_id"
  ]
}
```

</details>

<a id="tool-create_gtm_client-4d75da62"></a>

## create_gtm_client

Handler: Dispatches to GTMClient.createClient to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).clients.create. The SDK resource/method is accessed through an any cast; compatibility is unverified.

```text
Create a new client (Server-side Tagging)
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L2198-L2226) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L4178-L4197) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "name": {
      "type": "string",
      "description": "Client name"
    },
    "type": {
      "type": "string",
      "description": "Client type (e.g., GA4, UA, FIREBASE, CUSTOM)"
    },
    "parameters": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "key": {
            "type": "string"
          },
          "value": {
            "type": "string"
          },
          "type": {
            "type": "string"
          }
        }
      },
      "description": "Client parameters (configuration)"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (optional, uses default if not provided)"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "name",
    "type"
  ]
}
```

</details>

<a id="tool-update_gtm_client-74b8da5c"></a>

## update_gtm_client

Handler: Dispatches to GTMClient.updateClient to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).clients.get. The SDK resource/method is accessed through an any cast; compatibility is unverified.

```text
Update a client (Server-side Tagging)
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L2228-L2256) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L4198-L4217) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "client_id": {
      "type": "string",
      "description": "GTM client ID"
    },
    "name": {
      "type": "string",
      "description": "Client name"
    },
    "parameters": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "key": {
            "type": "string"
          },
          "value": {
            "type": "string"
          },
          "type": {
            "type": "string"
          }
        }
      },
      "description": "Client parameters"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (optional, uses default if not provided)"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "client_id"
  ]
}
```

</details>

<a id="tool-delete_gtm_client-a8516efb"></a>

## delete_gtm_client

Handler: Dispatches to GTMClient.deleteClient to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).clients.delete. The SDK resource/method is accessed through an any cast; compatibility is unverified.

```text
Delete a client (Server-side Tagging)
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L2258-L2273) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L4218-L4235) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "client_id": {
      "type": "string",
      "description": "GTM client ID"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (optional, uses default if not provided)"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "client_id"
  ]
}
```

</details>

<a id="tool-revert_gtm_client-1e47c8d3"></a>

## revert_gtm_client

Handler: Dispatches to GTMClient.revertClient to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).clients.revert. The SDK resource/method is accessed through an any cast; compatibility is unverified.

```text
Revert a client to its state in the latest published version (Server-side Tagging)
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L2275-L2291) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L4236-L4254) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "client_id": {
      "type": "string",
      "description": "GTM client ID"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (optional, uses default if not provided)"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "client_id"
  ]
}
```

</details>

<a id="tool-list_gtm_gtag_configs-b0771a34"></a>

## list_gtm_gtag_configs

Handler: Dispatches to GTMClient.listGtagConfigs to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).gtag\_config.list. The SDK resource/method is accessed through an any cast; compatibility is unverified.

```text
List all Google Tag configs in a workspace
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L2293-L2308) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L4255-L4272) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (optional, uses default if not provided)"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ]
}
```

</details>

<a id="tool-get_gtm_gtag_config-9806ce6d"></a>

## get_gtm_gtag_config

Handler: Dispatches to GTMClient.getGtagConfig to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).gtag\_config.get. The SDK resource/method is accessed through an any cast; compatibility is unverified.

```text
Get Google Tag config details
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L2310-L2325) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L4273-L4290) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "config_id": {
      "type": "string",
      "description": "GTM Google Tag Config ID"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (optional, uses default if not provided)"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "config_id"
  ]
}
```

</details>

<a id="tool-create_gtm_gtag_config-af82e710"></a>

## create_gtm_gtag_config

Handler: Dispatches to GTMClient.createGtagConfig to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).gtag\_config.create. The SDK resource/method is accessed through an any cast; compatibility is unverified.

```text
Create a new Google Tag config
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L2327-L2354) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L4291-L4309) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "tag_id": {
      "type": "string",
      "description": "Google Tag ID (e.g., G-XXXXXXXXXX)"
    },
    "parameters": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "key": {
            "type": "string"
          },
          "value": {
            "type": "string"
          },
          "type": {
            "type": "string"
          }
        }
      },
      "description": "Configuration parameters"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (optional, uses default if not provided)"
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

<a id="tool-update_gtm_gtag_config-7e759536"></a>

## update_gtm_gtag_config

Handler: Dispatches to GTMClient.updateGtagConfig to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).gtag\_config.get. The SDK resource/method is accessed through an any cast; compatibility is unverified.

```text
Update a Google Tag config
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L2356-L2384) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L4310-L4329) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "config_id": {
      "type": "string",
      "description": "GTM Google Tag Config ID"
    },
    "tag_id": {
      "type": "string",
      "description": "Google Tag ID"
    },
    "parameters": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "key": {
            "type": "string"
          },
          "value": {
            "type": "string"
          },
          "type": {
            "type": "string"
          }
        }
      },
      "description": "Configuration parameters"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (optional, uses default if not provided)"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "config_id"
  ]
}
```

</details>

<a id="tool-delete_gtm_gtag_config-e3bb3000"></a>

## delete_gtm_gtag_config

Handler: Dispatches to GTMClient.deleteGtagConfig to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).gtag\_config.delete. The SDK resource/method is accessed through an any cast; compatibility is unverified.

```text
Delete a Google Tag config
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L2386-L2401) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L4330-L4347) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "config_id": {
      "type": "string",
      "description": "GTM Google Tag Config ID"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (optional, uses default if not provided)"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "config_id"
  ]
}
```

</details>

<a id="tool-revert_gtm_gtag_config-27978e23"></a>

## revert_gtm_gtag_config

Handler: Dispatches to GTMClient.revertGtagConfig to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).gtag\_config.revert. The SDK resource/method is accessed through an any cast; compatibility is unverified.

```text
Revert a Google Tag config to its state in the latest published version
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L2403-L2419) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L4348-L4366) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "config_id": {
      "type": "string",
      "description": "GTM Google Tag Config ID"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (optional, uses default if not provided)"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "config_id"
  ]
}
```

</details>

<a id="tool-list_gtm_templates-f79dc718"></a>

## list_gtm_templates

Handler: Dispatches to GTMClient.listTemplates to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).templates.list. The SDK resource/method is accessed through an any cast; compatibility is unverified.

```text
List all templates in a workspace
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L2421-L2435) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L4367-L4383) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (optional, uses default if not provided)"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ]
}
```

</details>

<a id="tool-get_gtm_template-61719db8"></a>

## get_gtm_template

Handler: Dispatches to GTMClient.getTemplate to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).templates.get. The SDK resource/method is accessed through an any cast; compatibility is unverified.

```text
Get template details
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L2437-L2452) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L4384-L4401) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "template_id": {
      "type": "string",
      "description": "GTM template ID"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (optional, uses default if not provided)"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "template_id"
  ]
}
```

</details>

<a id="tool-create_gtm_template-dc08cb4c"></a>

## create_gtm_template

Handler: Dispatches to GTMClient.createTemplate to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).templates.create. The SDK resource/method is accessed through an any cast; compatibility is unverified.

```text
Create a new template
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L2454-L2470) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L4402-L4420) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "name": {
      "type": "string",
      "description": "Template name"
    },
    "template_data": {
      "type": "string",
      "description": "Template data (JSON string)"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (optional, uses default if not provided)"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "name",
    "template_data"
  ]
}
```

</details>

<a id="tool-update_gtm_template-59bb4f48"></a>

## update_gtm_template

Handler: Dispatches to GTMClient.updateTemplate to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).templates.get. The SDK resource/method is accessed through an any cast; compatibility is unverified.

```text
Update a template
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L2472-L2489) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L4421-L4440) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "template_id": {
      "type": "string",
      "description": "GTM template ID"
    },
    "name": {
      "type": "string",
      "description": "Template name"
    },
    "template_data": {
      "type": "string",
      "description": "Template data (JSON string)"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (optional, uses default if not provided)"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "template_id"
  ]
}
```

</details>

<a id="tool-delete_gtm_template-834e760f"></a>

## delete_gtm_template

Handler: Dispatches to GTMClient.deleteTemplate to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).templates.delete. The SDK resource/method is accessed through an any cast; compatibility is unverified.

```text
Delete a template
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L2491-L2506) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L4441-L4458) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "template_id": {
      "type": "string",
      "description": "GTM template ID"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (optional, uses default if not provided)"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "template_id"
  ]
}
```

</details>

<a id="tool-revert_gtm_template-9bd11633"></a>

## revert_gtm_template

Handler: Dispatches to GTMClient.revertTemplate to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).templates.revert. The SDK resource/method is accessed through an any cast; compatibility is unverified.

```text
Revert a template to its state in the latest published version
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L2508-L2523) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L4459-L4476) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "template_id": {
      "type": "string",
      "description": "GTM template ID"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (optional, uses default if not provided)"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "template_id"
  ]
}
```

</details>

<a id="tool-import_gtm_template_from_gallery-dc33189f"></a>

## import_gtm_template_from_gallery

Handler: Dispatches to GTMClient.importTemplateFromGallery to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).templates.import\_from\_gallery. The SDK resource/method is accessed through an any cast; compatibility is unverified.

```text
Import a template from the Community Template Gallery
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L2525-L2550) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L4477-L4495) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "gallery_reference": {
      "type": "object",
      "properties": {
        "host": {
          "type": "string"
        },
        "owner": {
          "type": "string"
        },
        "repository": {
          "type": "string"
        },
        "signature": {
          "type": "string"
        }
      },
      "description": "Gallery reference object"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (optional, uses default if not provided)"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "gallery_reference"
  ]
}
```

</details>

<a id="tool-list_gtm_transformations-00172442"></a>

## list_gtm_transformations

Handler: Dispatches to GTMClient.listTransformations to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).transformations.list. The SDK resource/method is accessed through an any cast; compatibility is unverified.

```text
List all transformations in a workspace (Server-side Tagging)
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L2552-L2566) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L4496-L4512) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (optional, uses default if not provided)"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ]
}
```

</details>

<a id="tool-get_gtm_transformation-4a8311ca"></a>

## get_gtm_transformation

Handler: Dispatches to GTMClient.getTransformation to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).transformations.get. The SDK resource/method is accessed through an any cast; compatibility is unverified.

```text
Get transformation details (Server-side Tagging)
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L2568-L2583) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L4513-L4530) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "transformation_id": {
      "type": "string",
      "description": "GTM transformation ID"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (optional, uses default if not provided)"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "transformation_id"
  ]
}
```

</details>

<a id="tool-create_gtm_transformation-2b4cd640"></a>

## create_gtm_transformation

Handler: Dispatches to GTMClient.createTransformation to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).transformations.create. The SDK resource/method is accessed through an any cast; compatibility is unverified.

```text
Create a new transformation (Server-side Tagging)
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L2585-L2613) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L4531-L4550) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "name": {
      "type": "string",
      "description": "Transformation name"
    },
    "type": {
      "type": "string",
      "description": "Transformation type (e.g., CUSTOM)"
    },
    "parameters": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "key": {
            "type": "string"
          },
          "value": {
            "type": "string"
          },
          "type": {
            "type": "string"
          }
        }
      },
      "description": "Transformation parameters"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (optional, uses default if not provided)"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "name",
    "type"
  ]
}
```

</details>

<a id="tool-update_gtm_transformation-95b562df"></a>

## update_gtm_transformation

Handler: Dispatches to GTMClient.updateTransformation to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).transformations.get. The SDK resource/method is accessed through an any cast; compatibility is unverified.

```text
Update a transformation (Server-side Tagging)
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L2615-L2643) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L4551-L4570) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "transformation_id": {
      "type": "string",
      "description": "GTM transformation ID"
    },
    "name": {
      "type": "string",
      "description": "Transformation name"
    },
    "parameters": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "key": {
            "type": "string"
          },
          "value": {
            "type": "string"
          },
          "type": {
            "type": "string"
          }
        }
      },
      "description": "Transformation parameters"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (optional, uses default if not provided)"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "transformation_id"
  ]
}
```

</details>

<a id="tool-delete_gtm_transformation-e92a0761"></a>

## delete_gtm_transformation

Handler: Dispatches to GTMClient.deleteTransformation to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).transformations.delete. The SDK resource/method is accessed through an any cast; compatibility is unverified.

```text
Delete a transformation (Server-side Tagging)
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L2645-L2660) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L4571-L4588) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "transformation_id": {
      "type": "string",
      "description": "GTM transformation ID"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (optional, uses default if not provided)"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "transformation_id"
  ]
}
```

</details>

<a id="tool-revert_gtm_transformation-6998b3df"></a>

## revert_gtm_transformation

Handler: Dispatches to GTMClient.revertTransformation to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).transformations.revert. The SDK resource/method is accessed through an any cast; compatibility is unverified.

```text
Revert a transformation to its state in the latest published version (Server-side Tagging)
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L2662-L2678) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L4589-L4607) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "transformation_id": {
      "type": "string",
      "description": "GTM transformation ID"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (optional, uses default if not provided)"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "transformation_id"
  ]
}
```

</details>

<a id="tool-list_gtm_zones-b3674d70"></a>

## list_gtm_zones

Handler: Dispatches to GTMClient.listZones to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).zones.list. The SDK resource/method is accessed through an any cast; compatibility is unverified.

```text
List all zones in a workspace (Server-side Tagging)
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L2680-L2694) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L4608-L4624) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (optional, uses default if not provided)"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ]
}
```

</details>

<a id="tool-get_gtm_zone-3fef4a0d"></a>

## get_gtm_zone

Handler: Dispatches to GTMClient.getZone to perform the corresponding Google Tag Manager operation via accounts.containers.workspaces as any).zones.get. The SDK resource/method is accessed through an any cast; compatibility is unverified.

```text
Get zone details (Server-side Tagging)
```

[Source](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L2696-L2716) · [Handler](https://github.com/pouyanafisi/gtm-mcp/blob/196f32e54bfeb7f3720435adf1b21e16e385c22e/src/index.ts#L4625-L4642) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "GTM account ID"
    },
    "container_id": {
      "type": "string",
      "description": "GTM container ID"
    },
    "zone_id": {
      "type": "string",
      "description": "GTM zone ID"
    },
    "workspace_id": {
      "type": "string",
      "description": "GTM workspace ID (optional, uses default if not provided)"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "zone_id"
  ]
}
```

</details>
