# marwa-mrwan/google-clarity-mcp-codex

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/marwa-mrwan/google-clarity-mcp-codex) · [Machine-readable inventory](../data/mcps/marwa-mrwan--google-clarity-mcp-codex.json)

**205 extracted tools.** Inspect GTM container metadata and versions; reach additional endpoints through a generic request tool.

Snapshot: 2026-10-13 · [2a6881b03cc8](https://github.com/marwa-mrwan/google-clarity-mcp-codex/tree/2a6881b03cc8825ff634f8512100c8b566b6758f) · Method: source.

Exposure: All six product groups are unconditionally included in ALL_TOOLS and returned by tools/list. Calls require OAuth except ga4_list_configured_properties; write handlers enforce product-specific confirmation/allowlist rules.

## Limits

- Offline source evaluation of exact tool constructors with imports removed and empty process.env; no MCP handshake or API operations were executed.
- gtm_list_tags, gtm_list_triggers and gtm_list_variables ignore workspace_id and choose the largest collection across versions/workspaces; version fallback uses accountId/containerId/containerVersionId instead of the v2 path parameter and may fail silently.
- Generic API tools expose intentionally unrestricted body/query objects; detailed Google API request schemas are not declared by upstream.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`gsc_list_sites`](#tool-gsc_list_sites-69b36040) | Other product | Search Console handler implements list sites through the product API. |
| [`gsc_performance`](#tool-gsc_performance-f42c6423) | Other product | Search Console handler implements performance through the product API. |
| [`gsc_inspect_url`](#tool-gsc_inspect_url-2d598234) | Other product | Search Console handler implements inspect url through the product API. |
| [`gsc_sitemaps`](#tool-gsc_sitemaps-624aa861) | Other product | Search Console handler implements sitemaps through the product API. |
| [`gsc_get_sitemap`](#tool-gsc_get_sitemap-bec92fb6) | Other product | Search Console handler implements get sitemap through the product API. |
| [`gsc_submit_sitemap`](#tool-gsc_submit_sitemap-6d135a26) | Other product | Search Console handler implements submit sitemap through the product API. |
| [`gsc_delete_sitemap`](#tool-gsc_delete_sitemap-adedc75d) | Other product | Search Console handler implements delete sitemap through the product API. |
| [`gsc_get_site`](#tool-gsc_get_site-2f8523bd) | Other product | Search Console handler implements get site through the product API. |
| [`gsc_add_site`](#tool-gsc_add_site-a50624c4) | Other product | Search Console handler implements add site through the product API. |
| [`gsc_delete_site`](#tool-gsc_delete_site-490b1a1b) | Other product | Search Console handler implements delete site through the product API. |
| [`ga4_list_properties`](#tool-ga4_list_properties-44fea7fa) | Other product | Google Analytics 4 handler implements list properties through the product API. |
| [`ga4_list_configured_properties`](#tool-ga4_list_configured_properties-7a091010) | Other product | Returns safe local GA4 project mappings without OAuth or an API call. |
| [`ga4_run_report`](#tool-ga4_run_report-a0a35566) | Other product | Google Analytics 4 handler implements run report through the product API. |
| [`ga4_batch_run_reports`](#tool-ga4_batch_run_reports-83c11e76) | Other product | Google Analytics 4 handler implements batch run reports through the product API. |
| [`ga4_pivot_report`](#tool-ga4_pivot_report-be20ec91) | Other product | Google Analytics 4 handler implements pivot report through the product API. |
| [`ga4_metadata`](#tool-ga4_metadata-cbab802e) | Other product | Google Analytics 4 handler implements metadata through the product API. |
| [`ga4_check_compatibility`](#tool-ga4_check_compatibility-e1fb8747) | Other product | Google Analytics 4 handler implements check compatibility through the product API. |
| [`ga4_realtime`](#tool-ga4_realtime-4ff73072) | Other product | Google Analytics 4 handler implements realtime through the product API. |
| [`ga4_list_data_streams`](#tool-ga4_list_data_streams-e2cea14d) | Other product | Google Analytics 4 handler implements list data streams through the product API. |
| [`ga4_list_key_events`](#tool-ga4_list_key_events-ac1a65f2) | Other product | Google Analytics 4 handler implements list key events through the product API. |
| [`ga4_list_conversion_events`](#tool-ga4_list_conversion_events-bfbcc836) | Other product | Google Analytics 4 handler implements list conversion events through the product API. |
| [`ga4_list_custom_dimensions`](#tool-ga4_list_custom_dimensions-75905509) | Other product | Google Analytics 4 handler implements list custom dimensions through the product API. |
| [`ga4_list_custom_metrics`](#tool-ga4_list_custom_metrics-64631ca9) | Other product | Google Analytics 4 handler implements list custom metrics through the product API. |
| [`ga4_list_google_ads_links`](#tool-ga4_list_google_ads_links-aa0c7a61) | Other product | Google Analytics 4 handler implements list google ads links through the product API. |
| [`ga4_list_audiences`](#tool-ga4_list_audiences-35c4ca43) | Other product | Google Analytics 4 handler implements list audiences through the product API. |
| [`ga4_get_property`](#tool-ga4_get_property-aa64c1ca) | Other product | Google Analytics 4 handler implements get property through the product API. |
| [`ga4_get_data_retention_settings`](#tool-ga4_get_data_retention_settings-65f5883d) | Other product | Google Analytics 4 handler implements get data retention settings through the product API. |
| [`ga4_search_change_history`](#tool-ga4_search_change_history-7d585da4) | Other product | Google Analytics 4 handler implements search change history through the product API. |
| [`ga4_run_access_report`](#tool-ga4_run_access_report-ee450eee) | Other product | Google Analytics 4 handler implements run access report through the product API. |
| [`ga4_property_audit`](#tool-ga4_property_audit-f3bb9471) | Other product | Google Analytics 4 handler implements property audit through the product API. |
| [`ga4_admin_api_call`](#tool-ga4_admin_api_call-33b8177b) | Other product | Google Analytics 4 handler implements admin api call through the product API. |
| [`ads_discover_accounts`](#tool-ads_discover_accounts-b73b76b3) | Other product | Google Ads handler implements discover accounts through the product API. |
| [`ads_list_accounts`](#tool-ads_list_accounts-ac25af56) | Other product | Google Ads handler implements list accounts through the product API. |
| [`ads_list_client_accounts`](#tool-ads_list_client_accounts-2c135998) | Other product | Google Ads handler implements list client accounts through the product API. |
| [`ads_list_campaigns`](#tool-ads_list_campaigns-e51a74ac) | Other product | Google Ads handler implements list campaigns through the product API. |
| [`ads_keyword_performance`](#tool-ads_keyword_performance-c89d1254) | Other product | Google Ads handler implements keyword performance through the product API. |
| [`ads_search_terms`](#tool-ads_search_terms-1ceab2a2) | Other product | Google Ads handler implements search terms through the product API. |
| [`ads_campaign_search_terms`](#tool-ads_campaign_search_terms-e22a74f9) | Other product | Google Ads handler implements campaign search terms through the product API. |
| [`ads_list_ad_groups`](#tool-ads_list_ad_groups-645ef95b) | Other product | Google Ads handler implements list ad groups through the product API. |
| [`ads_list_ads`](#tool-ads_list_ads-89b774ee) | Other product | Google Ads handler implements list ads through the product API. |
| [`ads_keyword_ideas`](#tool-ads_keyword_ideas-b6582362) | Other product | Google Ads handler implements keyword ideas through the product API. |
| [`ads_keyword_historical_metrics`](#tool-ads_keyword_historical_metrics-a4148cd5) | Other product | Google Ads handler implements keyword historical metrics through the product API. |
| [`ads_account_performance`](#tool-ads_account_performance-3a963f48) | Other product | Google Ads handler implements account performance through the product API. |
| [`ads_gaql_query`](#tool-ads_gaql_query-cefab0d7) | Other product | Google Ads handler implements gaql query through the product API. |
| [`ads_deep_report`](#tool-ads_deep_report-7e22b6a8) | Other product | Google Ads handler implements deep report through the product API. |
| [`ads_field_metadata`](#tool-ads_field_metadata-70c5cefc) | Other product | Google Ads handler implements field metadata through the product API. |
| [`ads_validate_gaql`](#tool-ads_validate_gaql-128e28ea) | Other product | Google Ads handler implements validate gaql through the product API. |
| [`ads_policy_summary`](#tool-ads_policy_summary-2547f709) | Other product | Google Ads handler implements policy summary through the product API. |
| [`ads_conversion_action_full_audit`](#tool-ads_conversion_action_full_audit-12f7f1e5) | Other product | Google Ads handler implements conversion action full audit through the product API. |
| [`ads_access_audit`](#tool-ads_access_audit-fd378543) | Other product | Google Ads handler implements access audit through the product API. |
| [`ads_shared_sets_audit`](#tool-ads_shared_sets_audit-ce1e2f0d) | Other product | Google Ads handler implements shared sets audit through the product API. |
| [`ads_experiment_full_audit`](#tool-ads_experiment_full_audit-dd407631) | Other product | Google Ads handler implements experiment full audit through the product API. |
| [`ads_change_summary`](#tool-ads_change_summary-c677bee2) | Other product | Google Ads handler implements change summary through the product API. |
| [`ads_asset_group_full_audit`](#tool-ads_asset_group_full_audit-d54f847c) | Other product | Google Ads handler implements asset group full audit through the product API. |
| [`ads_billing_summary`](#tool-ads_billing_summary-07454da5) | Other product | Google Ads handler implements billing summary through the product API. |
| [`ads_account_hierarchy`](#tool-ads_account_hierarchy-9b9d447a) | Other product | Google Ads handler implements account hierarchy through the product API. |
| [`ads_customer_details`](#tool-ads_customer_details-e3c8c38c) | Other product | Google Ads handler implements customer details through the product API. |
| [`ads_campaign_full_audit`](#tool-ads_campaign_full_audit-8048f7ee) | Other product | Google Ads handler implements campaign full audit through the product API. |
| [`ads_ad_group_full_audit`](#tool-ads_ad_group_full_audit-f13db869) | Other product | Google Ads handler implements ad group full audit through the product API. |
| [`ads_suggest_campaign_budget`](#tool-ads_suggest_campaign_budget-9c0e07a2) | Other product | Google Ads handler implements suggest campaign budget through the product API. |
| [`ads_pause_campaign`](#tool-ads_pause_campaign-20d00cc8) | Other product | Google Ads handler implements pause campaign through the product API. |
| [`ads_enable_campaign`](#tool-ads_enable_campaign-51e59d00) | Other product | Google Ads handler implements enable campaign through the product API. |
| [`ads_update_campaign_dates`](#tool-ads_update_campaign_dates-a28c390d) | Other product | Google Ads handler implements update campaign dates through the product API. |
| [`ads_update_campaign_bidding`](#tool-ads_update_campaign_bidding-0bf03a24) | Other product | Google Ads handler implements update campaign bidding through the product API. |
| [`ads_update_target_cpa`](#tool-ads_update_target_cpa-f93d59dd) | Other product | Google Ads handler implements update target cpa through the product API. |
| [`ads_update_target_roas`](#tool-ads_update_target_roas-76466389) | Other product | Google Ads handler implements update target roas through the product API. |
| [`ads_add_campaign_negative_keywords`](#tool-ads_add_campaign_negative_keywords-aff3dc25) | Other product | Google Ads handler implements add campaign negative keywords through the product API. |
| [`ads_add_ad_group_negative_keywords`](#tool-ads_add_ad_group_negative_keywords-e35fb9e8) | Other product | Google Ads handler implements add ad group negative keywords through the product API. |
| [`ads_add_keywords`](#tool-ads_add_keywords-eb0d9794) | Other product | Google Ads handler implements add keywords through the product API. |
| [`ads_add_display_keywords`](#tool-ads_add_display_keywords-ff5db164) | Other product | Google Ads handler implements add display keywords through the product API. |
| [`ads_add_display_placements`](#tool-ads_add_display_placements-a9f18773) | Other product | Google Ads handler implements add display placements through the product API. |
| [`ads_add_display_topics`](#tool-ads_add_display_topics-f27a56ff) | Other product | Google Ads handler implements add display topics through the product API. |
| [`ads_pause_keywords`](#tool-ads_pause_keywords-ef87d997) | Other product | Google Ads handler implements pause keywords through the product API. |
| [`ads_enable_keywords`](#tool-ads_enable_keywords-5bc79d94) | Other product | Google Ads handler implements enable keywords through the product API. |
| [`ads_update_keyword_bid`](#tool-ads_update_keyword_bid-f22b9ee8) | Other product | Google Ads handler implements update keyword bid through the product API. |
| [`ads_pause_ad`](#tool-ads_pause_ad-9789d50a) | Other product | Google Ads handler implements pause ad through the product API. |
| [`ads_enable_ad`](#tool-ads_enable_ad-c85df0d4) | Other product | Google Ads handler implements enable ad through the product API. |
| [`ads_create_responsive_search_ad`](#tool-ads_create_responsive_search_ad-0ac9c56e) | Other product | Google Ads handler implements create responsive search ad through the product API. |
| [`ads_replace_responsive_search_ad`](#tool-ads_replace_responsive_search_ad-5c5614c2) | Other product | Google Ads handler implements replace responsive search ad through the product API. |
| [`ads_create_responsive_display_ad`](#tool-ads_create_responsive_display_ad-12c71b17) | Other product | Google Ads handler implements create responsive display ad through the product API. |
| [`ads_create_video_responsive_ad`](#tool-ads_create_video_responsive_ad-4bf2b12b) | Other product | Google Ads handler implements create video responsive ad through the product API. |
| [`ads_update_responsive_search_ad`](#tool-ads_update_responsive_search_ad-4e0a1c34) | Other product | Google Ads handler implements update responsive search ad through the product API. |
| [`ads_create_shopping_product_ad`](#tool-ads_create_shopping_product_ad-7aa8d289) | Other product | Google Ads handler implements create shopping product ad through the product API. |
| [`ads_create_ad_group`](#tool-ads_create_ad_group-262eb5ee) | Other product | Google Ads handler implements create ad group through the product API. |
| [`ads_create_campaign`](#tool-ads_create_campaign-98d75a32) | Other product | Google Ads handler implements create campaign through the product API. |
| [`ads_create_search_campaign`](#tool-ads_create_search_campaign-a1d70de7) | Other product | Google Ads handler implements create search campaign through the product API. |
| [`ads_update_campaign_settings`](#tool-ads_update_campaign_settings-4d45f11d) | Other product | Google Ads handler implements update campaign settings through the product API. |
| [`ads_create_pmax_asset_group`](#tool-ads_create_pmax_asset_group-22f4b4d8) | Other product | Google Ads handler implements create pmax asset group through the product API. |
| [`ads_update_asset_group`](#tool-ads_update_asset_group-d5cbad34) | Other product | Google Ads handler implements update asset group through the product API. |
| [`ads_link_asset_to_asset_group`](#tool-ads_link_asset_to_asset_group-8001246d) | Other product | Google Ads handler implements link asset to asset group through the product API. |
| [`ads_create_custom_audience`](#tool-ads_create_custom_audience-ce3287c7) | Other product | Google Ads handler implements create custom audience through the product API. |
| [`ads_create_audience_from_custom_audiences`](#tool-ads_create_audience_from_custom_audiences-4aa4d953) | Other product | Google Ads handler implements create audience from custom audiences through the product API. |
| [`ads_add_audience_to_ad_group`](#tool-ads_add_audience_to_ad_group-c5fdba28) | Other product | Google Ads handler implements add audience to ad group through the product API. |
| [`ads_add_pmax_search_themes`](#tool-ads_add_pmax_search_themes-a61dc80b) | Other product | Google Ads handler implements add pmax search themes through the product API. |
| [`ads_add_pmax_audience_signal`](#tool-ads_add_pmax_audience_signal-b2873f7f) | Other product | Google Ads handler implements add pmax audience signal through the product API. |
| [`ads_set_campaign_locations`](#tool-ads_set_campaign_locations-e6296783) | Other product | Google Ads handler implements set campaign locations through the product API. |
| [`ads_set_campaign_languages`](#tool-ads_set_campaign_languages-79a03a84) | Other product | Google Ads handler implements set campaign languages through the product API. |
| [`ads_set_campaign_ad_schedules`](#tool-ads_set_campaign_ad_schedules-79a5f791) | Other product | Google Ads handler implements set campaign ad schedules through the product API. |
| [`ads_apply_recommendation`](#tool-ads_apply_recommendation-dd00a8e5) | Other product | Google Ads handler implements apply recommendation through the product API. |
| [`ads_dismiss_recommendation`](#tool-ads_dismiss_recommendation-ed6d5f98) | Other product | Google Ads handler implements dismiss recommendation through the product API. |
| [`ads_add_sitelink_asset`](#tool-ads_add_sitelink_asset-21266516) | Other product | Google Ads handler implements add sitelink asset through the product API. |
| [`ads_create_text_asset`](#tool-ads_create_text_asset-08a19912) | Other product | Google Ads handler implements create text asset through the product API. |
| [`ads_upload_image_asset`](#tool-ads_upload_image_asset-86e59a04) | Other product | Google Ads handler implements upload image asset through the product API. |
| [`ads_create_youtube_video_asset`](#tool-ads_create_youtube_video_asset-ca760c6e) | Other product | Google Ads handler implements create youtube video asset through the product API. |
| [`ads_link_asset_to_campaign`](#tool-ads_link_asset_to_campaign-b893e08f) | Other product | Google Ads handler implements link asset to campaign through the product API. |
| [`ads_upload_offline_conversion`](#tool-ads_upload_offline_conversion-b892079c) | Other product | Google Ads handler implements upload offline conversion through the product API. |
| [`ads_mutate_operations`](#tool-ads_mutate_operations-bf60e4e1) | Other product | Google Ads handler implements mutate operations through the product API. |
| [`gtm_list_accounts`](#tool-gtm_list_accounts-c5d9b27f) | GTM | Calls the GTM v2 list accounts API operation and returns its data. |
| [`gtm_get_account`](#tool-gtm_get_account-b0358265) | GTM | Calls the GTM v2 get account API operation and returns its data. |
| [`gtm_list_containers`](#tool-gtm_list_containers-e45afd2b) | GTM | Calls the GTM v2 list containers API operation and returns its data. |
| [`gtm_get_container`](#tool-gtm_get_container-fdc6e39c) | GTM | Calls the GTM v2 get container API operation and returns its data. |
| [`gtm_container_snippet`](#tool-gtm_container_snippet-2f066ac5) | GTM | Calls containers.snippet for the selected container and returns installation code. |
| [`gtm_list_workspaces`](#tool-gtm_list_workspaces-248ce86f) | GTM | Calls the GTM v2 list workspaces API operation and returns its data. |
| [`gtm_get_workspace`](#tool-gtm_get_workspace-573c6822) | GTM | Calls the GTM v2 get workspace API operation and returns its data. |
| [`gtm_workspace_status`](#tool-gtm_workspace_status-8ba0f1f4) | GTM | Calls the GTM v2 workspace status API operation and returns its data. |
| [`gtm_quick_preview`](#tool-gtm_quick_preview-125bde55) | GTM | Requires confirm=true, then calls workspace quick\_preview and returns the preview state. |
| [`gtm_list_tags`](#tool-gtm_list_tags-b585bc12) | GTM | Ignores workspace\_id; scans up to three recent undeleted versions and every workspace, returning the largest matching entity collection with source metadata; failures are swallowed. |
| [`gtm_get_tag`](#tool-gtm_get_tag-3d242291) | GTM | Calls the GTM v2 get tag API operation and returns its data. |
| [`gtm_list_triggers`](#tool-gtm_list_triggers-16b41a3c) | GTM | Ignores workspace\_id; scans up to three recent undeleted versions and every workspace, returning the largest matching entity collection with source metadata; failures are swallowed. |
| [`gtm_get_trigger`](#tool-gtm_get_trigger-669e5c62) | GTM | Calls the GTM v2 get trigger API operation and returns its data. |
| [`gtm_list_variables`](#tool-gtm_list_variables-81705a80) | GTM | Ignores workspace\_id; scans up to three recent undeleted versions and every workspace, returning the largest matching entity collection with source metadata; failures are swallowed. |
| [`gtm_get_variable`](#tool-gtm_get_variable-e6ff3763) | GTM | Calls the GTM v2 get variable API operation and returns its data. |
| [`gtm_list_built_in_variables`](#tool-gtm_list_built_in_variables-af7ccc4e) | GTM | Calls the GTM v2 list built in variables API operation and returns its data. |
| [`gtm_list_folders`](#tool-gtm_list_folders-9da6c22f) | GTM | Calls the GTM v2 list folders API operation and returns its data. |
| [`gtm_list_templates`](#tool-gtm_list_templates-8d77f0ae) | GTM | Calls the GTM v2 list templates API operation and returns its data. |
| [`gtm_container_versions`](#tool-gtm_container_versions-d260e0f8) | GTM | Calls the GTM v2 container versions API operation and returns its data. |
| [`gtm_live_version`](#tool-gtm_live_version-8221d3cc) | GTM | Calls the GTM v2 live version API operation and returns its data. |
| [`gtm_get_version`](#tool-gtm_get_version-c83b7c02) | GTM | Calls the GTM v2 get version API operation and returns its data. |
| [`gtm_api_call`](#tool-gtm_api_call-a8ba7385) | GTM | Sends the supplied HTTP method, relative GTM v2 path, query and body with OAuth bearer token; methods other than GET require confirm=true. |
| [`gbp_list_accounts`](#tool-gbp_list_accounts-d0179a8b) | Other product | Google Business Profile handler implements list accounts through the product API. |
| [`gbp_get_account`](#tool-gbp_get_account-d7c87002) | Other product | Google Business Profile handler implements get account through the product API. |
| [`gbp_list_locations`](#tool-gbp_list_locations-e79f9888) | Other product | Google Business Profile handler implements list locations through the product API. |
| [`gbp_get_location`](#tool-gbp_get_location-710e9df3) | Other product | Google Business Profile handler implements get location through the product API. |
| [`gbp_create_location`](#tool-gbp_create_location-1eb666d4) | Other product | Google Business Profile handler implements create location through the product API. |
| [`gbp_update_location`](#tool-gbp_update_location-01c5c418) | Other product | Google Business Profile handler implements update location through the product API. |
| [`gbp_delete_location`](#tool-gbp_delete_location-183a7959) | Other product | Google Business Profile handler implements delete location through the product API. |
| [`gbp_list_reviews`](#tool-gbp_list_reviews-0595b368) | Other product | Google Business Profile handler implements list reviews through the product API. |
| [`gbp_get_review`](#tool-gbp_get_review-fc982f0b) | Other product | Google Business Profile handler implements get review through the product API. |
| [`gbp_reply_to_review`](#tool-gbp_reply_to_review-08ce2128) | Other product | Google Business Profile handler implements reply to review through the product API. |
| [`gbp_delete_review_reply`](#tool-gbp_delete_review_reply-22ecc735) | Other product | Google Business Profile handler implements delete review reply through the product API. |
| [`gbp_list_local_posts`](#tool-gbp_list_local_posts-c04bd408) | Other product | Google Business Profile handler implements list local posts through the product API. |
| [`gbp_create_local_post`](#tool-gbp_create_local_post-c882804d) | Other product | Google Business Profile handler implements create local post through the product API. |
| [`gbp_update_local_post`](#tool-gbp_update_local_post-495564f7) | Other product | Google Business Profile handler implements update local post through the product API. |
| [`gbp_delete_local_post`](#tool-gbp_delete_local_post-a11468f0) | Other product | Google Business Profile handler implements delete local post through the product API. |
| [`gbp_list_media`](#tool-gbp_list_media-1c03d57b) | Other product | Google Business Profile handler implements list media through the product API. |
| [`gbp_create_media`](#tool-gbp_create_media-4abfd0bd) | Other product | Google Business Profile handler implements create media through the product API. |
| [`gbp_delete_media`](#tool-gbp_delete_media-ff02c643) | Other product | Google Business Profile handler implements delete media through the product API. |
| [`gbp_list_verifications`](#tool-gbp_list_verifications-2bf7ff9a) | Other product | Google Business Profile handler implements list verifications through the product API. |
| [`gbp_fetch_verification_options`](#tool-gbp_fetch_verification_options-f96371bb) | Other product | Google Business Profile handler implements fetch verification options through the product API. |
| [`gbp_verify_location`](#tool-gbp_verify_location-416b6739) | Other product | Google Business Profile handler implements verify location through the product API. |
| [`gbp_complete_verification`](#tool-gbp_complete_verification-2b1ff458) | Other product | Google Business Profile handler implements complete verification through the product API. |
| [`gbp_get_voice_of_merchant`](#tool-gbp_get_voice_of_merchant-31b9861a) | Other product | Google Business Profile handler implements get voice of merchant through the product API. |
| [`gbp_list_categories`](#tool-gbp_list_categories-a184f1c7) | Other product | Google Business Profile handler implements list categories through the product API. |
| [`gbp_list_attributes`](#tool-gbp_list_attributes-2a93123f) | Other product | Google Business Profile handler implements list attributes through the product API. |
| [`gbp_get_notification_setting`](#tool-gbp_get_notification_setting-1fa2d2a1) | Other product | Google Business Profile handler implements get notification setting through the product API. |
| [`gbp_update_notification_setting`](#tool-gbp_update_notification_setting-dcae035e) | Other product | Google Business Profile handler implements update notification setting through the product API. |
| [`gbp_list_place_action_links`](#tool-gbp_list_place_action_links-8b3ff5d7) | Other product | Google Business Profile handler implements list place action links through the product API. |
| [`gbp_create_place_action_link`](#tool-gbp_create_place_action_link-f8d52347) | Other product | Google Business Profile handler implements create place action link through the product API. |
| [`gbp_update_place_action_link`](#tool-gbp_update_place_action_link-80f5ebfd) | Other product | Google Business Profile handler implements update place action link through the product API. |
| [`gbp_delete_place_action_link`](#tool-gbp_delete_place_action_link-26f4321f) | Other product | Google Business Profile handler implements delete place action link through the product API. |
| [`gbp_get_lodging`](#tool-gbp_get_lodging-ac786c23) | Other product | Google Business Profile handler implements get lodging through the product API. |
| [`gbp_update_lodging`](#tool-gbp_update_lodging-45063788) | Other product | Google Business Profile handler implements update lodging through the product API. |
| [`gbp_performance`](#tool-gbp_performance-7c929fb7) | Other product | Google Business Profile handler implements performance through the product API. |
| [`gbp_search_keyword_impressions`](#tool-gbp_search_keyword_impressions-3d72a707) | Other product | Google Business Profile handler implements search keyword impressions through the product API. |
| [`gbp_api_call`](#tool-gbp_api_call-c744cfc5) | Other product | Google Business Profile handler implements api call through the product API. |
| [`merchant_list_accounts`](#tool-merchant_list_accounts-d9236595) | Other product | Google Merchant Center handler implements list accounts through the product API. |
| [`merchant_get_account`](#tool-merchant_get_account-bce7e265) | Other product | Google Merchant Center handler implements get account through the product API. |
| [`merchant_get_developer_registration`](#tool-merchant_get_developer_registration-f57deb87) | Other product | Google Merchant Center handler implements get developer registration through the product API. |
| [`merchant_register_gcp`](#tool-merchant_register_gcp-40ab57fe) | Other product | Google Merchant Center handler implements register gcp through the product API. |
| [`merchant_list_subaccounts`](#tool-merchant_list_subaccounts-84d25390) | Other product | Google Merchant Center handler implements list subaccounts through the product API. |
| [`merchant_create_and_configure_account`](#tool-merchant_create_and_configure_account-6cde0887) | Other product | Google Merchant Center handler implements create and configure account through the product API. |
| [`merchant_update_account`](#tool-merchant_update_account-838fe87f) | Other product | Google Merchant Center handler implements update account through the product API. |
| [`merchant_delete_account`](#tool-merchant_delete_account-7028c371) | Other product | Google Merchant Center handler implements delete account through the product API. |
| [`merchant_list_products`](#tool-merchant_list_products-99f1d7af) | Other product | Google Merchant Center handler implements list products through the product API. |
| [`merchant_get_product`](#tool-merchant_get_product-45fa6d25) | Other product | Google Merchant Center handler implements get product through the product API. |
| [`merchant_insert_product_input`](#tool-merchant_insert_product_input-909545a7) | Other product | Google Merchant Center handler implements insert product input through the product API. |
| [`merchant_update_product_input`](#tool-merchant_update_product_input-b0306a50) | Other product | Google Merchant Center handler implements update product input through the product API. |
| [`merchant_delete_product_input`](#tool-merchant_delete_product_input-5205c642) | Other product | Google Merchant Center handler implements delete product input through the product API. |
| [`merchant_list_data_sources`](#tool-merchant_list_data_sources-027952e1) | Other product | Google Merchant Center handler implements list data sources through the product API. |
| [`merchant_get_data_source`](#tool-merchant_get_data_source-7b0cfbc2) | Other product | Google Merchant Center handler implements get data source through the product API. |
| [`merchant_create_data_source`](#tool-merchant_create_data_source-1c33ad55) | Other product | Google Merchant Center handler implements create data source through the product API. |
| [`merchant_update_data_source`](#tool-merchant_update_data_source-9b497eda) | Other product | Google Merchant Center handler implements update data source through the product API. |
| [`merchant_delete_data_source`](#tool-merchant_delete_data_source-39960f2b) | Other product | Google Merchant Center handler implements delete data source through the product API. |
| [`merchant_fetch_data_source`](#tool-merchant_fetch_data_source-aa66be92) | Other product | Google Merchant Center handler implements fetch data source through the product API. |
| [`merchant_list_promotions`](#tool-merchant_list_promotions-d8f5a2d3) | Other product | Google Merchant Center handler implements list promotions through the product API. |
| [`merchant_get_promotion`](#tool-merchant_get_promotion-a43764af) | Other product | Google Merchant Center handler implements get promotion through the product API. |
| [`merchant_insert_promotion`](#tool-merchant_insert_promotion-f10965e2) | Other product | Google Merchant Center handler implements insert promotion through the product API. |
| [`merchant_list_local_inventories`](#tool-merchant_list_local_inventories-9f83f7f0) | Other product | Google Merchant Center handler implements list local inventories through the product API. |
| [`merchant_insert_local_inventory`](#tool-merchant_insert_local_inventory-63d93a48) | Other product | Google Merchant Center handler implements insert local inventory through the product API. |
| [`merchant_delete_local_inventory`](#tool-merchant_delete_local_inventory-9c1a8277) | Other product | Google Merchant Center handler implements delete local inventory through the product API. |
| [`merchant_list_regional_inventories`](#tool-merchant_list_regional_inventories-10ac27a7) | Other product | Google Merchant Center handler implements list regional inventories through the product API. |
| [`merchant_insert_regional_inventory`](#tool-merchant_insert_regional_inventory-bda62048) | Other product | Google Merchant Center handler implements insert regional inventory through the product API. |
| [`merchant_delete_regional_inventory`](#tool-merchant_delete_regional_inventory-855187e7) | Other product | Google Merchant Center handler implements delete regional inventory through the product API. |
| [`merchant_list_conversion_sources`](#tool-merchant_list_conversion_sources-3280cda1) | Other product | Google Merchant Center handler implements list conversion sources through the product API. |
| [`merchant_get_conversion_source`](#tool-merchant_get_conversion_source-f851ed40) | Other product | Google Merchant Center handler implements get conversion source through the product API. |
| [`merchant_create_conversion_source`](#tool-merchant_create_conversion_source-dba08018) | Other product | Google Merchant Center handler implements create conversion source through the product API. |
| [`merchant_update_conversion_source`](#tool-merchant_update_conversion_source-db8c7535) | Other product | Google Merchant Center handler implements update conversion source through the product API. |
| [`merchant_archive_conversion_source`](#tool-merchant_archive_conversion_source-014c86e5) | Other product | Google Merchant Center handler implements archive conversion source through the product API. |
| [`merchant_undelete_conversion_source`](#tool-merchant_undelete_conversion_source-c33e4dbf) | Other product | Google Merchant Center handler implements undelete conversion source through the product API. |
| [`merchant_search_report`](#tool-merchant_search_report-606f4cd8) | Other product | Google Merchant Center handler implements search report through the product API. |
| [`merchant_list_issues`](#tool-merchant_list_issues-27b87f03) | Other product | Google Merchant Center handler implements list issues through the product API. |
| [`merchant_render_account_issues`](#tool-merchant_render_account_issues-fa701d0a) | Other product | Google Merchant Center handler implements render account issues through the product API. |
| [`merchant_render_product_issues`](#tool-merchant_render_product_issues-9f7ebb33) | Other product | Google Merchant Center handler implements render product issues through the product API. |
| [`merchant_list_quotas`](#tool-merchant_list_quotas-b9f16b1c) | Other product | Google Merchant Center handler implements list quotas through the product API. |
| [`merchant_api_call`](#tool-merchant_api_call-91e942b0) | Other product | Google Merchant Center handler implements api call through the product API. |

<a id="tool-gsc_list_sites-69b36040"></a>

## gsc_list_sites

Handler: Search Console handler implements list sites through the product API.

```text
List all verified sites available in Google Search Console.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/search-console.js#L1-L298) · Schema: literal-source.

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

<a id="tool-gsc_performance-f42c6423"></a>

## gsc_performance

Handler: Search Console handler implements performance through the product API.

```text
Get Google Search Console performance data, including clicks, impressions, CTR, and position.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/search-console.js#L1-L298) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "site_url": {
      "type": "string",
      "description": "Site URL, for example https://example.com/ or sc-domain:example.com."
    },
    "start_date": {
      "type": "string",
      "description": "Start date in YYYY-MM-DD format."
    },
    "end_date": {
      "type": "string",
      "description": "End date in YYYY-MM-DD format."
    },
    "dimensions": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "query",
          "page",
          "country",
          "device",
          "date"
        ]
      },
      "description": "Report dimensions. Optional, defaults to query."
    },
    "row_limit": {
      "type": "number",
      "description": "Number of rows. Defaults to 25, max 1000."
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

<a id="tool-gsc_inspect_url-2d598234"></a>

## gsc_inspect_url

Handler: Search Console handler implements inspect url through the product API.

```text
Inspect a specific URL in Google Search Console.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/search-console.js#L1-L298) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "site_url": {
      "type": "string",
      "description": "Verified Search Console site URL."
    },
    "inspect_url": {
      "type": "string",
      "description": "The URL to inspect."
    }
  },
  "required": [
    "site_url",
    "inspect_url"
  ]
}
```

</details>

<a id="tool-gsc_sitemaps-624aa861"></a>

## gsc_sitemaps

Handler: Search Console handler implements sitemaps through the product API.

```text
List submitted sitemaps for a Search Console site.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/search-console.js#L1-L298) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "site_url": {
      "type": "string",
      "description": "Site URL."
    }
  },
  "required": [
    "site_url"
  ]
}
```

</details>

<a id="tool-gsc_get_sitemap-bec92fb6"></a>

## gsc_get_sitemap

Handler: Search Console handler implements get sitemap through the product API.

```text
Get details for one submitted sitemap in Google Search Console.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/search-console.js#L1-L298) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "site_url": {
      "type": "string",
      "description": "Search Console property URL, for example https://example.com/ or sc-domain:example.com."
    },
    "sitemap_url": {
      "type": "string",
      "description": "Full sitemap URL to inspect, for example https://example.com/sitemap.xml."
    }
  },
  "required": [
    "site_url",
    "sitemap_url"
  ]
}
```

</details>

<a id="tool-gsc_submit_sitemap-6d135a26"></a>

## gsc_submit_sitemap

Handler: Search Console handler implements submit sitemap through the product API.

```text
Submit a sitemap URL to a verified Google Search Console property.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/search-console.js#L1-L298) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "site_url": {
      "type": "string",
      "description": "Search Console property URL, for example https://example.com/ or sc-domain:example.com."
    },
    "sitemap_url": {
      "type": "string",
      "description": "Full sitemap URL to submit, for example https://example.com/sitemap.xml."
    }
  },
  "required": [
    "site_url",
    "sitemap_url"
  ]
}
```

</details>

<a id="tool-gsc_delete_sitemap-adedc75d"></a>

## gsc_delete_sitemap

Handler: Search Console handler implements delete sitemap through the product API.

```text
Delete a submitted sitemap from a verified Google Search Console property. Requires confirm=true to avoid accidental deletion.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/search-console.js#L1-L298) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "site_url": {
      "type": "string",
      "description": "Search Console property URL, for example https://example.com/ or sc-domain:example.com."
    },
    "sitemap_url": {
      "type": "string",
      "description": "Full sitemap URL to delete, for example https://example.com/sitemap.xml."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to perform the deletion."
    }
  },
  "required": [
    "site_url",
    "sitemap_url",
    "confirm"
  ]
}
```

</details>

<a id="tool-gsc_get_site-2f8523bd"></a>

## gsc_get_site

Handler: Search Console handler implements get site through the product API.

```text
Get Search Console site permission details for one property.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/search-console.js#L1-L298) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "site_url": {
      "type": "string",
      "description": "Search Console property URL, for example https://example.com/ or sc-domain:example.com."
    }
  },
  "required": [
    "site_url"
  ]
}
```

</details>

<a id="tool-gsc_add_site-a50624c4"></a>

## gsc_add_site

Handler: Search Console handler implements add site through the product API.

```text
Add a site/property to Google Search Console. Requires confirm=true.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/search-console.js#L1-L298) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "site_url": {
      "type": "string",
      "description": "Search Console property URL to add, for example https://example.com/."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to add the property."
    }
  },
  "required": [
    "site_url",
    "confirm"
  ]
}
```

</details>

<a id="tool-gsc_delete_site-490b1a1b"></a>

## gsc_delete_site

Handler: Search Console handler implements delete site through the product API.

```text
Remove a site/property from Google Search Console. Requires confirm=true.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/search-console.js#L1-L298) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "site_url": {
      "type": "string",
      "description": "Search Console property URL to remove, for example https://example.com/."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true to remove the property."
    }
  },
  "required": [
    "site_url",
    "confirm"
  ]
}
```

</details>

<a id="tool-ga4_list_properties-44fea7fa"></a>

## ga4_list_properties

Handler: Google Analytics 4 handler implements list properties through the product API.

```text
List all Google Analytics 4 properties available to the authenticated user.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/analytics.js#L1-L411) · Schema: literal-source.

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

<a id="tool-ga4_list_configured_properties-7a091010"></a>

## ga4_list_configured_properties

Handler: Returns safe local GA4 project mappings without OAuth or an API call.

```text
List locally configured GA4 project mappings from the MCP secrets file, including project name, website, and property ID.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/analytics.js#L1-L411) · Schema: literal-source.

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

<a id="tool-ga4_run_report-a0a35566"></a>

## ga4_run_report

Handler: Google Analytics 4 handler implements run report through the product API.

```text
Run a custom GA4 report with selected metrics and dimensions.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/analytics.js#L1-L411) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string",
      "description": "GA4 property ID, numbers only. Example: 123456789."
    },
    "project_name": {
      "type": "string",
      "description": "Configured project name from ga4_list_configured_properties. Used when property_id is omitted."
    },
    "website": {
      "type": "string",
      "description": "Configured website URL from ga4_list_configured_properties. Used when property_id is omitted."
    },
    "start_date": {
      "type": "string",
      "description": "Start date, for example 2024-01-01 or 30daysAgo."
    },
    "end_date": {
      "type": "string",
      "description": "End date, for example 2024-12-31 or today."
    },
    "metrics": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "GA4 metric names."
    },
    "dimensions": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "GA4 dimension names."
    },
    "limit": {
      "type": "number",
      "description": "Maximum number of rows. Defaults to 20."
    },
    "dimension_filter": {
      "type": "object",
      "description": "Optional raw GA4 dimensionFilter."
    },
    "metric_filter": {
      "type": "object",
      "description": "Optional raw GA4 metricFilter."
    },
    "order_bys": {
      "type": "array",
      "items": {
        "type": "object"
      },
      "description": "Optional raw GA4 orderBys."
    }
  },
  "required": [
    "start_date",
    "end_date",
    "metrics"
  ]
}
```

</details>

<a id="tool-ga4_batch_run_reports-83c11e76"></a>

## ga4_batch_run_reports

Handler: Google Analytics 4 handler implements batch run reports through the product API.

```text
Run multiple GA4 reports in one Data API request.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/analytics.js#L1-L411) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string",
      "description": "GA4 property ID, numbers only. Example: 123456789."
    },
    "project_name": {
      "type": "string",
      "description": "Configured project name from ga4_list_configured_properties. Used when property_id is omitted."
    },
    "website": {
      "type": "string",
      "description": "Configured website URL from ga4_list_configured_properties. Used when property_id is omitted."
    },
    "requests": {
      "type": "array",
      "items": {
        "type": "object"
      },
      "description": "Raw Data API RunReportRequest objects."
    }
  },
  "required": [
    "requests"
  ]
}
```

</details>

<a id="tool-ga4_pivot_report-be20ec91"></a>

## ga4_pivot_report

Handler: Google Analytics 4 handler implements pivot report through the product API.

```text
Run a GA4 pivot report using a raw RunPivotReportRequest body.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/analytics.js#L1-L411) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string",
      "description": "GA4 property ID, numbers only. Example: 123456789."
    },
    "project_name": {
      "type": "string",
      "description": "Configured project name from ga4_list_configured_properties. Used when property_id is omitted."
    },
    "website": {
      "type": "string",
      "description": "Configured website URL from ga4_list_configured_properties. Used when property_id is omitted."
    },
    "request_body": {
      "type": "object",
      "description": "Raw Data API RunPivotReportRequest body."
    }
  },
  "required": [
    "request_body"
  ]
}
```

</details>

<a id="tool-ga4_metadata-cbab802e"></a>

## ga4_metadata

Handler: Google Analytics 4 handler implements metadata through the product API.

```text
Get GA4 dimensions, metrics, and compatibility metadata for a property.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/analytics.js#L1-L411) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string",
      "description": "GA4 property ID, numbers only. Example: 123456789."
    },
    "project_name": {
      "type": "string",
      "description": "Configured project name from ga4_list_configured_properties. Used when property_id is omitted."
    },
    "website": {
      "type": "string",
      "description": "Configured website URL from ga4_list_configured_properties. Used when property_id is omitted."
    }
  },
  "required": []
}
```

</details>

<a id="tool-ga4_check_compatibility-e1fb8747"></a>

## ga4_check_compatibility

Handler: Google Analytics 4 handler implements check compatibility through the product API.

```text
Check whether selected GA4 metrics and dimensions are compatible.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/analytics.js#L1-L411) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string",
      "description": "GA4 property ID, numbers only. Example: 123456789."
    },
    "project_name": {
      "type": "string",
      "description": "Configured project name from ga4_list_configured_properties. Used when property_id is omitted."
    },
    "website": {
      "type": "string",
      "description": "Configured website URL from ga4_list_configured_properties. Used when property_id is omitted."
    },
    "metrics": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Metric names to check."
    },
    "dimensions": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Dimension names to check."
    },
    "compatibility_filter": {
      "type": "string",
      "description": "Optional compatibility filter enum."
    }
  },
  "required": []
}
```

</details>

<a id="tool-ga4_realtime-4ff73072"></a>

## ga4_realtime

Handler: Google Analytics 4 handler implements realtime through the product API.

```text
Get current realtime GA4 data.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/analytics.js#L1-L411) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string",
      "description": "GA4 property ID, numbers only. Example: 123456789."
    },
    "project_name": {
      "type": "string",
      "description": "Configured project name from ga4_list_configured_properties. Used when property_id is omitted."
    },
    "website": {
      "type": "string",
      "description": "Configured website URL from ga4_list_configured_properties. Used when property_id is omitted."
    },
    "dimensions": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Realtime dimensions such as country, city, unifiedScreenName, or deviceCategory."
    }
  },
  "required": []
}
```

</details>

<a id="tool-ga4_list_data_streams-e2cea14d"></a>

## ga4_list_data_streams

Handler: Google Analytics 4 handler implements list data streams through the product API.

```text
List GA4 data streams for a property.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/analytics.js#L1-L411) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string",
      "description": "GA4 property ID, numbers only. Example: 123456789."
    },
    "project_name": {
      "type": "string",
      "description": "Configured project name from ga4_list_configured_properties. Used when property_id is omitted."
    },
    "website": {
      "type": "string",
      "description": "Configured website URL from ga4_list_configured_properties. Used when property_id is omitted."
    },
    "parent": {
      "type": "string",
      "description": "Optional parent resource path. Defaults to properties/{property_id}."
    },
    "page_size": {
      "type": "number",
      "description": "Optional page size."
    }
  },
  "required": []
}
```

</details>

<a id="tool-ga4_list_key_events-ac1a65f2"></a>

## ga4_list_key_events

Handler: Google Analytics 4 handler implements list key events through the product API.

```text
List GA4 key events for a property.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/analytics.js#L1-L411) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string",
      "description": "GA4 property ID, numbers only. Example: 123456789."
    },
    "project_name": {
      "type": "string",
      "description": "Configured project name from ga4_list_configured_properties. Used when property_id is omitted."
    },
    "website": {
      "type": "string",
      "description": "Configured website URL from ga4_list_configured_properties. Used when property_id is omitted."
    },
    "parent": {
      "type": "string",
      "description": "Optional parent resource path. Defaults to properties/{property_id}."
    },
    "page_size": {
      "type": "number",
      "description": "Optional page size."
    }
  },
  "required": []
}
```

</details>

<a id="tool-ga4_list_conversion_events-bfbcc836"></a>

## ga4_list_conversion_events

Handler: Google Analytics 4 handler implements list conversion events through the product API.

```text
List GA4 conversion events for a property.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/analytics.js#L1-L411) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string",
      "description": "GA4 property ID, numbers only. Example: 123456789."
    },
    "project_name": {
      "type": "string",
      "description": "Configured project name from ga4_list_configured_properties. Used when property_id is omitted."
    },
    "website": {
      "type": "string",
      "description": "Configured website URL from ga4_list_configured_properties. Used when property_id is omitted."
    },
    "parent": {
      "type": "string",
      "description": "Optional parent resource path. Defaults to properties/{property_id}."
    },
    "page_size": {
      "type": "number",
      "description": "Optional page size."
    }
  },
  "required": []
}
```

</details>

<a id="tool-ga4_list_custom_dimensions-75905509"></a>

## ga4_list_custom_dimensions

Handler: Google Analytics 4 handler implements list custom dimensions through the product API.

```text
List GA4 custom dimensions for a property.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/analytics.js#L1-L411) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string",
      "description": "GA4 property ID, numbers only. Example: 123456789."
    },
    "project_name": {
      "type": "string",
      "description": "Configured project name from ga4_list_configured_properties. Used when property_id is omitted."
    },
    "website": {
      "type": "string",
      "description": "Configured website URL from ga4_list_configured_properties. Used when property_id is omitted."
    },
    "parent": {
      "type": "string",
      "description": "Optional parent resource path. Defaults to properties/{property_id}."
    },
    "page_size": {
      "type": "number",
      "description": "Optional page size."
    }
  },
  "required": []
}
```

</details>

<a id="tool-ga4_list_custom_metrics-64631ca9"></a>

## ga4_list_custom_metrics

Handler: Google Analytics 4 handler implements list custom metrics through the product API.

```text
List GA4 custom metrics for a property.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/analytics.js#L1-L411) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string",
      "description": "GA4 property ID, numbers only. Example: 123456789."
    },
    "project_name": {
      "type": "string",
      "description": "Configured project name from ga4_list_configured_properties. Used when property_id is omitted."
    },
    "website": {
      "type": "string",
      "description": "Configured website URL from ga4_list_configured_properties. Used when property_id is omitted."
    },
    "parent": {
      "type": "string",
      "description": "Optional parent resource path. Defaults to properties/{property_id}."
    },
    "page_size": {
      "type": "number",
      "description": "Optional page size."
    }
  },
  "required": []
}
```

</details>

<a id="tool-ga4_list_google_ads_links-aa0c7a61"></a>

## ga4_list_google_ads_links

Handler: Google Analytics 4 handler implements list google ads links through the product API.

```text
List Google Ads links for a GA4 property.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/analytics.js#L1-L411) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string",
      "description": "GA4 property ID, numbers only. Example: 123456789."
    },
    "project_name": {
      "type": "string",
      "description": "Configured project name from ga4_list_configured_properties. Used when property_id is omitted."
    },
    "website": {
      "type": "string",
      "description": "Configured website URL from ga4_list_configured_properties. Used when property_id is omitted."
    },
    "parent": {
      "type": "string",
      "description": "Optional parent resource path. Defaults to properties/{property_id}."
    },
    "page_size": {
      "type": "number",
      "description": "Optional page size."
    }
  },
  "required": []
}
```

</details>

<a id="tool-ga4_list_audiences-35c4ca43"></a>

## ga4_list_audiences

Handler: Google Analytics 4 handler implements list audiences through the product API.

```text
List GA4 audiences for a property.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/analytics.js#L1-L411) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string",
      "description": "GA4 property ID, numbers only. Example: 123456789."
    },
    "project_name": {
      "type": "string",
      "description": "Configured project name from ga4_list_configured_properties. Used when property_id is omitted."
    },
    "website": {
      "type": "string",
      "description": "Configured website URL from ga4_list_configured_properties. Used when property_id is omitted."
    },
    "parent": {
      "type": "string",
      "description": "Optional parent resource path. Defaults to properties/{property_id}."
    },
    "page_size": {
      "type": "number",
      "description": "Optional page size."
    }
  },
  "required": []
}
```

</details>

<a id="tool-ga4_get_property-aa64c1ca"></a>

## ga4_get_property

Handler: Google Analytics 4 handler implements get property through the product API.

```text
Get GA4 property admin details.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/analytics.js#L1-L411) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string",
      "description": "GA4 property ID, numbers only. Example: 123456789."
    },
    "project_name": {
      "type": "string",
      "description": "Configured project name from ga4_list_configured_properties. Used when property_id is omitted."
    },
    "website": {
      "type": "string",
      "description": "Configured website URL from ga4_list_configured_properties. Used when property_id is omitted."
    }
  },
  "required": []
}
```

</details>

<a id="tool-ga4_get_data_retention_settings-65f5883d"></a>

## ga4_get_data_retention_settings

Handler: Google Analytics 4 handler implements get data retention settings through the product API.

```text
Get GA4 data retention settings.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/analytics.js#L1-L411) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string",
      "description": "GA4 property ID, numbers only. Example: 123456789."
    },
    "project_name": {
      "type": "string",
      "description": "Configured project name from ga4_list_configured_properties. Used when property_id is omitted."
    },
    "website": {
      "type": "string",
      "description": "Configured website URL from ga4_list_configured_properties. Used when property_id is omitted."
    }
  },
  "required": []
}
```

</details>

<a id="tool-ga4_search_change_history-7d585da4"></a>

## ga4_search_change_history

Handler: Google Analytics 4 handler implements search change history through the product API.

```text
Search GA4 Admin change history events.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/analytics.js#L1-L411) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string",
      "description": "GA4 property ID, numbers only. Example: 123456789."
    },
    "project_name": {
      "type": "string",
      "description": "Configured project name from ga4_list_configured_properties. Used when property_id is omitted."
    },
    "website": {
      "type": "string",
      "description": "Configured website URL from ga4_list_configured_properties. Used when property_id is omitted."
    },
    "request_body": {
      "type": "object",
      "description": "Raw SearchChangeHistoryEventsRequest body."
    }
  },
  "required": [
    "request_body"
  ]
}
```

</details>

<a id="tool-ga4_run_access_report-ee450eee"></a>

## ga4_run_access_report

Handler: Google Analytics 4 handler implements run access report through the product API.

```text
Run a GA4 Admin access report for a property.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/analytics.js#L1-L411) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string",
      "description": "GA4 property ID, numbers only. Example: 123456789."
    },
    "project_name": {
      "type": "string",
      "description": "Configured project name from ga4_list_configured_properties. Used when property_id is omitted."
    },
    "website": {
      "type": "string",
      "description": "Configured website URL from ga4_list_configured_properties. Used when property_id is omitted."
    },
    "request_body": {
      "type": "object",
      "description": "Raw RunAccessReportRequest body."
    }
  },
  "required": [
    "request_body"
  ]
}
```

</details>

<a id="tool-ga4_property_audit-f3bb9471"></a>

## ga4_property_audit

Handler: Google Analytics 4 handler implements property audit through the product API.

```text
Collect key GA4 admin configuration for tracking audits: streams, key events, conversions, custom definitions, Google Ads links, audiences, and retention.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/analytics.js#L1-L411) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string",
      "description": "GA4 property ID, numbers only. Example: 123456789."
    },
    "project_name": {
      "type": "string",
      "description": "Configured project name from ga4_list_configured_properties. Used when property_id is omitted."
    },
    "website": {
      "type": "string",
      "description": "Configured website URL from ga4_list_configured_properties. Used when property_id is omitted."
    }
  },
  "required": []
}
```

</details>

<a id="tool-ga4_admin_api_call-33b8177b"></a>

## ga4_admin_api_call

Handler: Google Analytics 4 handler implements admin api call through the product API.

```text
Advanced GA4 Admin API call for create/update/delete/archive operations not covered by named tools. Non-GET requests require confirm=true.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/analytics.js#L1-L411) · Schema: literal-source.

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
        "PATCH",
        "PUT",
        "DELETE"
      ],
      "description": "HTTP method."
    },
    "path": {
      "type": "string",
      "description": "Path relative to https://analyticsadmin.googleapis.com/v1beta/."
    },
    "query": {
      "type": "object",
      "description": "Optional query parameters."
    },
    "body": {
      "type": "object",
      "description": "Optional request body."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true before write, archive, or delete requests execute.",
      "default": false
    }
  },
  "required": [
    "method",
    "path"
  ]
}
```

</details>

<a id="tool-ads_discover_accounts-b73b76b3"></a>

## ads_discover_accounts

Handler: Google Ads handler implements discover accounts through the product API.

```text
Discover every Google Ads account directly accessible to the OAuth user, identify all MCCs, and map client accounts to the correct login-customer-id automatically.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "refresh": {
      "type": "boolean",
      "description": "Ignore the in-memory routing cache and rediscover account access.",
      "default": false
    }
  },
  "required": []
}
```

</details>

<a id="tool-ads_list_accounts-ac25af56"></a>

## ads_list_accounts

Handler: Google Ads handler implements list accounts through the product API.

```text
List Google Ads accounts available to the authenticated user, including client accounts under accessible manager accounts when available.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

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

<a id="tool-ads_list_client_accounts-2c135998"></a>

## ads_list_client_accounts

Handler: Google Ads handler implements list client accounts through the product API.

```text
List client accounts under a Google Ads manager account.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Manager customer ID without dashes."
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id"
  ]
}
```

</details>

<a id="tool-ads_list_campaigns-e51a74ac"></a>

## ads_list_campaigns

Handler: Google Ads handler implements list campaigns through the product API.

```text
List campaigns in a Google Ads account with performance metrics.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Customer ID without dashes. Example: 1234567890."
    },
    "start_date": {
      "type": "string",
      "description": "Optional start date in YYYY-MM-DD format."
    },
    "end_date": {
      "type": "string",
      "description": "Optional end date in YYYY-MM-DD format."
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id"
  ]
}
```

</details>

<a id="tool-ads_keyword_performance-c89d1254"></a>

## ads_keyword_performance

Handler: Google Ads handler implements keyword performance through the product API.

```text
Get keyword performance for a Google Ads account.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Customer ID without dashes."
    },
    "start_date": {
      "type": "string",
      "description": "Optional start date in YYYY-MM-DD format."
    },
    "end_date": {
      "type": "string",
      "description": "Optional end date in YYYY-MM-DD format."
    },
    "campaign_id": {
      "type": "string",
      "description": "Optional campaign ID filter."
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id"
  ]
}
```

</details>

<a id="tool-ads_search_terms-1ceab2a2"></a>

## ads_search_terms

Handler: Google Ads handler implements search terms through the product API.

```text
Get Google Ads Search terms report data from search_term_view, aggregated at ad group level. Does not include Performance Max.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Customer ID without dashes."
    },
    "start_date": {
      "type": "string",
      "description": "Optional start date in YYYY-MM-DD format."
    },
    "end_date": {
      "type": "string",
      "description": "Optional end date in YYYY-MM-DD format."
    },
    "campaign_id": {
      "type": "string",
      "description": "Optional campaign ID filter."
    },
    "ad_group_id": {
      "type": "string",
      "description": "Optional ad group ID filter."
    },
    "search_term_contains": {
      "type": "string",
      "description": "Optional case-sensitive substring filter for search terms."
    },
    "limit": {
      "type": "number",
      "description": "Maximum number of rows to return. Defaults to 100.",
      "default": 100
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id"
  ]
}
```

</details>

<a id="tool-ads_campaign_search_terms-e22a74f9"></a>

## ads_campaign_search_terms

Handler: Google Ads handler implements campaign search terms through the product API.

```text
Get Google Ads campaign-level search terms report data from campaign_search_term_view, useful for campaign/PMax search term reporting where available.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Customer ID without dashes."
    },
    "start_date": {
      "type": "string",
      "description": "Optional start date in YYYY-MM-DD format."
    },
    "end_date": {
      "type": "string",
      "description": "Optional end date in YYYY-MM-DD format."
    },
    "campaign_id": {
      "type": "string",
      "description": "Optional campaign ID filter."
    },
    "search_term_contains": {
      "type": "string",
      "description": "Optional case-sensitive substring filter for search terms."
    },
    "limit": {
      "type": "number",
      "description": "Maximum number of rows to return. Defaults to 100.",
      "default": 100
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id"
  ]
}
```

</details>

<a id="tool-ads_list_ad_groups-645ef95b"></a>

## ads_list_ad_groups

Handler: Google Ads handler implements list ad groups through the product API.

```text
List ad groups in a Google Ads account with optional campaign filtering and performance metrics.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Customer ID without dashes."
    },
    "campaign_id": {
      "type": "string",
      "description": "Optional campaign ID filter."
    },
    "start_date": {
      "type": "string",
      "description": "Optional start date in YYYY-MM-DD format."
    },
    "end_date": {
      "type": "string",
      "description": "Optional end date in YYYY-MM-DD format."
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id"
  ]
}
```

</details>

<a id="tool-ads_list_ads-89b774ee"></a>

## ads_list_ads

Handler: Google Ads handler implements list ads through the product API.

```text
List ads with their ad group, campaign, creative text, final URLs, statuses, and performance metrics.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Customer ID without dashes."
    },
    "campaign_id": {
      "type": "string",
      "description": "Optional campaign ID filter."
    },
    "ad_group_id": {
      "type": "string",
      "description": "Optional ad group ID filter."
    },
    "start_date": {
      "type": "string",
      "description": "Optional start date in YYYY-MM-DD format."
    },
    "end_date": {
      "type": "string",
      "description": "Optional end date in YYYY-MM-DD format."
    },
    "limit": {
      "type": "number",
      "description": "Maximum number of ads to return. Defaults to 50.",
      "default": 50
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id"
  ]
}
```

</details>

<a id="tool-ads_keyword_ideas-b6582362"></a>

## ads_keyword_ideas

Handler: Google Ads handler implements keyword ideas through the product API.

```text
Get keyword ideas from Google Keyword Planner.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Customer ID without dashes."
    },
    "keywords": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Seed keywords."
    },
    "language_id": {
      "type": "string",
      "description": "Google Ads language constant ID. 1000 is English, 1019 is Arabic.",
      "default": "1000"
    },
    "geo_target_ids": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Google Ads geo target IDs. 2818 is Egypt, 2682 is Saudi Arabia."
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id",
    "keywords"
  ]
}
```

</details>

<a id="tool-ads_keyword_historical_metrics-a4148cd5"></a>

## ads_keyword_historical_metrics

Handler: Google Ads handler implements keyword historical metrics through the product API.

```text
Get historical keyword metrics from Google Ads Keyword Planner.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Customer ID without dashes."
    },
    "keywords": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Keywords to evaluate."
    },
    "language_id": {
      "type": "string",
      "description": "Google Ads language constant ID. 1000 is English, 1019 is Arabic.",
      "default": "1000"
    },
    "geo_target_ids": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Google Ads geo target IDs."
    },
    "include_average_cpc": {
      "type": "boolean",
      "description": "Whether to include average CPC in historical metrics.",
      "default": true
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id",
    "keywords"
  ]
}
```

</details>

<a id="tool-ads_account_performance-3a963f48"></a>

## ads_account_performance

Handler: Google Ads handler implements account performance through the product API.

```text
Get an account-level performance summary with clicks, impressions, cost, and conversions.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Customer ID without dashes."
    },
    "start_date": {
      "type": "string",
      "description": "Start date in YYYY-MM-DD format."
    },
    "end_date": {
      "type": "string",
      "description": "End date in YYYY-MM-DD format."
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id",
    "start_date",
    "end_date"
  ]
}
```

</details>

<a id="tool-ads_gaql_query-cefab0d7"></a>

## ads_gaql_query

Handler: Google Ads handler implements gaql query through the product API.

```text
Run a custom read-only Google Ads GAQL SELECT query. Use for advanced analysis when a predefined tool is not enough.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Customer ID without dashes."
    },
    "query": {
      "type": "string",
      "description": "Read-only GAQL query. Must start with SELECT."
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id",
    "query"
  ]
}
```

</details>

<a id="tool-ads_deep_report-7e22b6a8"></a>

## ads_deep_report

Handler: Google Ads handler implements deep report through the product API.

```text
Run predefined deep-analysis Google Ads reports for placements (Where ads showed), PMax placements, devices, locations, landing pages, demographics, assets, recommendations, budgets, conversion actions, negative keywords, and change history.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Customer ID without dashes."
    },
    "report_type": {
      "type": "string",
      "enum": [
        "device_performance",
        "geo_performance",
        "user_location_performance",
        "landing_pages",
        "expanded_landing_pages",
        "age_range_performance",
        "gender_performance",
        "campaign_budgets",
        "conversion_actions",
        "recommendations",
        "change_events",
        "campaign_negative_keywords",
        "ad_group_negative_keywords",
        "shared_negative_keyword_sets",
        "negative_keyword_list_members",
        "negative_keyword_candidates",
        "auction_insights_campaign",
        "auction_insights_keyword",
        "asset_performance",
        "pmax_asset_groups",
        "pmax_asset_group_assets",
        "shopping_products",
        "user_lists",
        "custom_audiences",
        "campaign_audience_targets",
        "ad_group_audience_targets",
        "campaign_audience_performance",
        "ad_group_audience_performance",
        "webpage_targets",
        "targeted_location_performance",
        "location_targets",
        "excluded_locations",
        "proximity_targets",
        "ad_schedules",
        "day_of_week_performance",
        "hour_of_day_performance",
        "dynamic_search_ads",
        "dynamic_search_targets",
        "experiments",
        "experiment_arms",
        "experiment_campaigns",
        "customer_labels",
        "customer_user_access",
        "customer_user_access_invitations",
        "campaign_settings",
        "bidding_strategies",
        "campaign_conversion_goals",
        "customer_conversion_goals",
        "campaign_labels",
        "ad_group_labels",
        "keyword_quality",
        "device_bid_modifiers",
        "placements",
        "pmax_placements",
        "topics",
        "campaign_asset_links",
        "ad_group_asset_links",
        "customer_asset_links",
        "asset_details",
        "pmax_listing_groups",
        "pmax_search_terms",
        "shopping_listing_groups",
        "demand_gen_campaigns",
        "video_campaigns"
      ],
      "description": "Type of deep-analysis report to run."
    },
    "start_date": {
      "type": "string",
      "description": "Optional start date in YYYY-MM-DD format."
    },
    "end_date": {
      "type": "string",
      "description": "Optional end date in YYYY-MM-DD format."
    },
    "campaign_id": {
      "type": "string",
      "description": "Optional campaign ID filter."
    },
    "ad_group_id": {
      "type": "string",
      "description": "Optional ad group ID filter."
    },
    "limit": {
      "type": "number",
      "description": "Maximum rows to return. Defaults to 100.",
      "default": 100
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id",
    "report_type"
  ]
}
```

</details>

<a id="tool-ads_field_metadata-70c5cefc"></a>

## ads_field_metadata

Handler: Google Ads handler implements field metadata through the product API.

```text
Search Google Ads API field metadata so GAQL fields can be discovered before writing custom queries.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "query": {
      "type": "string",
      "description": "GoogleAdsFieldService GAQL query. Defaults to common selectable fields."
    }
  },
  "required": []
}
```

</details>

<a id="tool-ads_validate_gaql-128e28ea"></a>

## ads_validate_gaql

Handler: Google Ads handler implements validate gaql through the product API.

```text
Validate a read-only GAQL query using Google Ads search validateOnly mode.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "query": {
      "type": "string",
      "description": "Read-only GAQL SELECT query to validate."
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id",
    "query"
  ]
}
```

</details>

<a id="tool-ads_policy_summary-2547f709"></a>

## ads_policy_summary

Handler: Google Ads handler implements policy summary through the product API.

```text
Read ad policy approval/review summaries and policy topic entries across ads.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "campaign_id": {
      "type": "string",
      "description": "Optional campaign ID filter."
    },
    "ad_group_id": {
      "type": "string",
      "description": "Optional ad group ID filter."
    },
    "start_date": {
      "type": "string",
      "description": "Optional start date in YYYY-MM-DD format."
    },
    "end_date": {
      "type": "string",
      "description": "Optional end date in YYYY-MM-DD format."
    },
    "limit": {
      "type": "number",
      "description": "Maximum rows. Defaults to 100.",
      "default": 100
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id"
  ]
}
```

</details>

<a id="tool-ads_conversion_action_full_audit-12f7f1e5"></a>

## ads_conversion_action_full_audit

Handler: Google Ads handler implements conversion action full audit through the product API.

```text
Read conversion actions plus customer and campaign conversion goals for tracking diagnostics.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "campaign_id": {
      "type": "string",
      "description": "Optional campaign ID filter for campaign goals."
    },
    "limit": {
      "type": "number",
      "description": "Maximum rows per section. Defaults to 100.",
      "default": 100
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id"
  ]
}
```

</details>

<a id="tool-ads_access_audit-fd378543"></a>

## ads_access_audit

Handler: Google Ads handler implements access audit through the product API.

```text
Read customer user access, invitations, labels, and account metadata for access-risk diagnostics.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "limit": {
      "type": "number",
      "description": "Maximum rows per section. Defaults to 100.",
      "default": 100
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id"
  ]
}
```

</details>

<a id="tool-ads_shared_sets_audit-ce1e2f0d"></a>

## ads_shared_sets_audit

Handler: Google Ads handler implements shared sets audit through the product API.

```text
Read shared negative keyword sets and list members.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "limit": {
      "type": "number",
      "description": "Maximum rows per section. Defaults to 500.",
      "default": 500
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id"
  ]
}
```

</details>

<a id="tool-ads_experiment_full_audit-dd407631"></a>

## ads_experiment_full_audit

Handler: Google Ads handler implements experiment full audit through the product API.

```text
Read experiments, experiment arms, and experiment campaigns.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "limit": {
      "type": "number",
      "description": "Maximum rows per section. Defaults to 200.",
      "default": 200
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id"
  ]
}
```

</details>

<a id="tool-ads_change_summary-c677bee2"></a>

## ads_change_summary

Handler: Google Ads handler implements change summary through the product API.

```text
Read change events and group them by user, resource type, and client type.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "start_date": {
      "type": "string",
      "description": "Optional start date in YYYY-MM-DD format."
    },
    "end_date": {
      "type": "string",
      "description": "Optional end date in YYYY-MM-DD format."
    },
    "limit": {
      "type": "number",
      "description": "Maximum change events. Defaults to 500.",
      "default": 500
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id"
  ]
}
```

</details>

<a id="tool-ads_asset_group_full_audit-d54f847c"></a>

## ads_asset_group_full_audit

Handler: Google Ads handler implements asset group full audit through the product API.

```text
Read Performance Max asset groups, assets, listing groups, and search terms for one campaign or account.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "campaign_id": {
      "type": "string",
      "description": "Optional Performance Max campaign ID filter."
    },
    "start_date": {
      "type": "string",
      "description": "Optional start date in YYYY-MM-DD format."
    },
    "end_date": {
      "type": "string",
      "description": "Optional end date in YYYY-MM-DD format."
    },
    "limit": {
      "type": "number",
      "description": "Maximum rows per section. Defaults to 200.",
      "default": 200
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id"
  ]
}
```

</details>

<a id="tool-ads_billing_summary-07454da5"></a>

## ads_billing_summary

Handler: Google Ads handler implements billing summary through the product API.

```text
Read billing setup diagnostics where the authenticated user and developer token have permission.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "limit": {
      "type": "number",
      "description": "Maximum rows. Defaults to 50.",
      "default": 50
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id"
  ]
}
```

</details>

<a id="tool-ads_account_hierarchy-9b9d447a"></a>

## ads_account_hierarchy

Handler: Google Ads handler implements account hierarchy through the product API.

```text
Read the full Google Ads MCC hierarchy recursively from a manager account.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Manager customer ID without dashes."
    },
    "max_depth": {
      "type": "number",
      "description": "Maximum recursion depth. Defaults to 5.",
      "default": 5
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id"
  ]
}
```

</details>

<a id="tool-ads_customer_details-e3c8c38c"></a>

## ads_customer_details

Handler: Google Ads handler implements customer details through the product API.

```text
Read customer metadata, status, currency, timezone, optimization score, tracking URL fields, labels, and access summaries where available.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id"
  ]
}
```

</details>

<a id="tool-ads_campaign_full_audit-8048f7ee"></a>

## ads_campaign_full_audit

Handler: Google Ads handler implements campaign full audit through the product API.

```text
Run a multi-section read-only campaign audit covering settings, budget, bidding, targeting, assets, conversion goals, recommendations, and performance.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "campaign_id": {
      "type": "string",
      "description": "Campaign ID without dashes."
    },
    "start_date": {
      "type": "string",
      "description": "Optional start date in YYYY-MM-DD format."
    },
    "end_date": {
      "type": "string",
      "description": "Optional end date in YYYY-MM-DD format."
    },
    "limit": {
      "type": "number",
      "description": "Maximum rows per section. Defaults to 100.",
      "default": 100
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id",
    "campaign_id"
  ]
}
```

</details>

<a id="tool-ads_ad_group_full_audit-f13db869"></a>

## ads_ad_group_full_audit

Handler: Google Ads handler implements ad group full audit through the product API.

```text
Run a multi-section read-only ad group audit covering settings, keywords, negative keywords, audiences, placements, topics, ads, assets, and performance.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "ad_group_id": {
      "type": "string",
      "description": "Ad group ID without dashes."
    },
    "campaign_id": {
      "type": "string",
      "description": "Optional campaign ID filter."
    },
    "start_date": {
      "type": "string",
      "description": "Optional start date in YYYY-MM-DD format."
    },
    "end_date": {
      "type": "string",
      "description": "Optional end date in YYYY-MM-DD format."
    },
    "limit": {
      "type": "number",
      "description": "Maximum rows per section. Defaults to 100.",
      "default": 100
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id",
    "ad_group_id"
  ]
}
```

</details>

<a id="tool-ads_suggest_campaign_budget-9c0e07a2"></a>

## ads_suggest_campaign_budget

Handler: Google Ads handler implements suggest campaign budget through the product API.

```text
Suggest campaign budget amounts without creating or modifying any Google Ads budget.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "monthly_budget": {
      "type": "number",
      "description": "Optional planned monthly budget in account currency."
    },
    "daily_budget": {
      "type": "number",
      "description": "Optional planned daily budget in account currency."
    },
    "expected_cpc": {
      "type": "number",
      "description": "Optional expected CPC in account currency."
    },
    "target_clicks": {
      "type": "number",
      "description": "Optional target clicks per month."
    },
    "days_per_month": {
      "type": "number",
      "description": "Planning days per month. Defaults to 30.4.",
      "default": 30.4
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id"
  ]
}
```

</details>

<a id="tool-ads_pause_campaign-20d00cc8"></a>

## ads_pause_campaign

Handler: Google Ads handler implements pause campaign through the product API.

```text
Safely pause a campaign.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "campaign_id": {
      "type": "string",
      "description": "Campaign ID without dashes."
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the mutation without calling Google Ads mutate endpoints. Defaults to false for allowlisted customers.",
      "default": false
    },
    "confirm": {
      "type": "boolean",
      "description": "Optional legacy confirmation. Allowed customer IDs in GOOGLE_ADS_MUTATION_CUSTOMER_IDS are treated as implicit confirmation.",
      "default": false
    },
    "validate_only": {
      "type": "boolean",
      "description": "When guardrails allow an API call, ask Google Ads to validate the mutation without applying it.",
      "default": false
    },
    "partial_failure": {
      "type": "boolean",
      "description": "Enable Google Ads partial failure handling for supported mutate endpoints.",
      "default": false
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id",
    "campaign_id"
  ]
}
```

</details>

<a id="tool-ads_enable_campaign-51e59d00"></a>

## ads_enable_campaign

Handler: Google Ads handler implements enable campaign through the product API.

```text
Safely enable a campaign.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "campaign_id": {
      "type": "string",
      "description": "Campaign ID without dashes."
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the mutation without calling Google Ads mutate endpoints. Defaults to false for allowlisted customers.",
      "default": false
    },
    "confirm": {
      "type": "boolean",
      "description": "Optional legacy confirmation. Allowed customer IDs in GOOGLE_ADS_MUTATION_CUSTOMER_IDS are treated as implicit confirmation.",
      "default": false
    },
    "validate_only": {
      "type": "boolean",
      "description": "When guardrails allow an API call, ask Google Ads to validate the mutation without applying it.",
      "default": false
    },
    "partial_failure": {
      "type": "boolean",
      "description": "Enable Google Ads partial failure handling for supported mutate endpoints.",
      "default": false
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id",
    "campaign_id"
  ]
}
```

</details>

<a id="tool-ads_update_campaign_dates-a28c390d"></a>

## ads_update_campaign_dates

Handler: Google Ads handler implements update campaign dates through the product API.

```text
Safely update campaign start and/or end dates.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "campaign_id": {
      "type": "string",
      "description": "Campaign ID without dashes."
    },
    "start_date": {
      "type": "string",
      "description": "Optional start date in YYYY-MM-DD format."
    },
    "end_date": {
      "type": "string",
      "description": "Optional end date in YYYY-MM-DD format."
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the mutation without calling Google Ads mutate endpoints. Defaults to false for allowlisted customers.",
      "default": false
    },
    "confirm": {
      "type": "boolean",
      "description": "Optional legacy confirmation. Allowed customer IDs in GOOGLE_ADS_MUTATION_CUSTOMER_IDS are treated as implicit confirmation.",
      "default": false
    },
    "validate_only": {
      "type": "boolean",
      "description": "When guardrails allow an API call, ask Google Ads to validate the mutation without applying it.",
      "default": false
    },
    "partial_failure": {
      "type": "boolean",
      "description": "Enable Google Ads partial failure handling for supported mutate endpoints.",
      "default": false
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id",
    "campaign_id"
  ]
}
```

</details>

<a id="tool-ads_update_campaign_bidding-0bf03a24"></a>

## ads_update_campaign_bidding

Handler: Google Ads handler implements update campaign bidding through the product API.

```text
Safely update a campaign bidding strategy field set.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "campaign_id": {
      "type": "string",
      "description": "Campaign ID without dashes."
    },
    "bidding_strategy_type": {
      "type": "string",
      "enum": [
        "MANUAL_CPC",
        "MAXIMIZE_CONVERSIONS",
        "MAXIMIZE_CONVERSION_VALUE",
        "TARGET_CPA",
        "TARGET_ROAS"
      ]
    },
    "target_cpa": {
      "type": "number",
      "description": "Optional target CPA in account currency."
    },
    "target_roas": {
      "type": "number",
      "description": "Optional target ROAS as a decimal, e.g. 3.5."
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the mutation without calling Google Ads mutate endpoints. Defaults to false for allowlisted customers.",
      "default": false
    },
    "confirm": {
      "type": "boolean",
      "description": "Optional legacy confirmation. Allowed customer IDs in GOOGLE_ADS_MUTATION_CUSTOMER_IDS are treated as implicit confirmation.",
      "default": false
    },
    "validate_only": {
      "type": "boolean",
      "description": "When guardrails allow an API call, ask Google Ads to validate the mutation without applying it.",
      "default": false
    },
    "partial_failure": {
      "type": "boolean",
      "description": "Enable Google Ads partial failure handling for supported mutate endpoints.",
      "default": false
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id",
    "campaign_id",
    "bidding_strategy_type"
  ]
}
```

</details>

<a id="tool-ads_update_target_cpa-f93d59dd"></a>

## ads_update_target_cpa

Handler: Google Ads handler implements update target cpa through the product API.

```text
Safely update campaign target CPA.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "campaign_id": {
      "type": "string",
      "description": "Campaign ID without dashes."
    },
    "target_cpa": {
      "type": "number",
      "description": "Target CPA in account currency."
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the mutation without calling Google Ads mutate endpoints. Defaults to false for allowlisted customers.",
      "default": false
    },
    "confirm": {
      "type": "boolean",
      "description": "Optional legacy confirmation. Allowed customer IDs in GOOGLE_ADS_MUTATION_CUSTOMER_IDS are treated as implicit confirmation.",
      "default": false
    },
    "validate_only": {
      "type": "boolean",
      "description": "When guardrails allow an API call, ask Google Ads to validate the mutation without applying it.",
      "default": false
    },
    "partial_failure": {
      "type": "boolean",
      "description": "Enable Google Ads partial failure handling for supported mutate endpoints.",
      "default": false
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id",
    "campaign_id",
    "target_cpa"
  ]
}
```

</details>

<a id="tool-ads_update_target_roas-76466389"></a>

## ads_update_target_roas

Handler: Google Ads handler implements update target roas through the product API.

```text
Safely update campaign target ROAS.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "campaign_id": {
      "type": "string",
      "description": "Campaign ID without dashes."
    },
    "target_roas": {
      "type": "number",
      "description": "Target ROAS as a decimal, e.g. 3.5."
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the mutation without calling Google Ads mutate endpoints. Defaults to false for allowlisted customers.",
      "default": false
    },
    "confirm": {
      "type": "boolean",
      "description": "Optional legacy confirmation. Allowed customer IDs in GOOGLE_ADS_MUTATION_CUSTOMER_IDS are treated as implicit confirmation.",
      "default": false
    },
    "validate_only": {
      "type": "boolean",
      "description": "When guardrails allow an API call, ask Google Ads to validate the mutation without applying it.",
      "default": false
    },
    "partial_failure": {
      "type": "boolean",
      "description": "Enable Google Ads partial failure handling for supported mutate endpoints.",
      "default": false
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id",
    "campaign_id",
    "target_roas"
  ]
}
```

</details>

<a id="tool-ads_add_campaign_negative_keywords-aff3dc25"></a>

## ads_add_campaign_negative_keywords

Handler: Google Ads handler implements add campaign negative keywords through the product API.

```text
Safely add campaign negative keywords.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "campaign_id": {
      "type": "string",
      "description": "Campaign ID without dashes."
    },
    "keywords": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Negative keyword texts."
    },
    "match_type": {
      "type": "string",
      "enum": [
        "BROAD",
        "PHRASE",
        "EXACT"
      ],
      "default": "PHRASE"
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the mutation without calling Google Ads mutate endpoints. Defaults to false for allowlisted customers.",
      "default": false
    },
    "confirm": {
      "type": "boolean",
      "description": "Optional legacy confirmation. Allowed customer IDs in GOOGLE_ADS_MUTATION_CUSTOMER_IDS are treated as implicit confirmation.",
      "default": false
    },
    "validate_only": {
      "type": "boolean",
      "description": "When guardrails allow an API call, ask Google Ads to validate the mutation without applying it.",
      "default": false
    },
    "partial_failure": {
      "type": "boolean",
      "description": "Enable Google Ads partial failure handling for supported mutate endpoints.",
      "default": false
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id",
    "campaign_id",
    "keywords"
  ]
}
```

</details>

<a id="tool-ads_add_ad_group_negative_keywords-e35fb9e8"></a>

## ads_add_ad_group_negative_keywords

Handler: Google Ads handler implements add ad group negative keywords through the product API.

```text
Safely add ad group negative keywords.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "ad_group_id": {
      "type": "string",
      "description": "Ad group ID without dashes."
    },
    "keywords": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Negative keyword texts."
    },
    "match_type": {
      "type": "string",
      "enum": [
        "BROAD",
        "PHRASE",
        "EXACT"
      ],
      "default": "PHRASE"
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the mutation without calling Google Ads mutate endpoints. Defaults to false for allowlisted customers.",
      "default": false
    },
    "confirm": {
      "type": "boolean",
      "description": "Optional legacy confirmation. Allowed customer IDs in GOOGLE_ADS_MUTATION_CUSTOMER_IDS are treated as implicit confirmation.",
      "default": false
    },
    "validate_only": {
      "type": "boolean",
      "description": "When guardrails allow an API call, ask Google Ads to validate the mutation without applying it.",
      "default": false
    },
    "partial_failure": {
      "type": "boolean",
      "description": "Enable Google Ads partial failure handling for supported mutate endpoints.",
      "default": false
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id",
    "ad_group_id",
    "keywords"
  ]
}
```

</details>

<a id="tool-ads_add_keywords-eb0d9794"></a>

## ads_add_keywords

Handler: Google Ads handler implements add keywords through the product API.

```text
Safely add biddable keywords to an ad group.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "ad_group_id": {
      "type": "string",
      "description": "Ad group ID without dashes."
    },
    "keywords": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Keyword texts."
    },
    "match_type": {
      "type": "string",
      "enum": [
        "BROAD",
        "PHRASE",
        "EXACT"
      ],
      "default": "PHRASE"
    },
    "cpc_bid": {
      "type": "number",
      "description": "Optional CPC bid in account currency."
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the mutation without calling Google Ads mutate endpoints. Defaults to false for allowlisted customers.",
      "default": false
    },
    "confirm": {
      "type": "boolean",
      "description": "Optional legacy confirmation. Allowed customer IDs in GOOGLE_ADS_MUTATION_CUSTOMER_IDS are treated as implicit confirmation.",
      "default": false
    },
    "validate_only": {
      "type": "boolean",
      "description": "When guardrails allow an API call, ask Google Ads to validate the mutation without applying it.",
      "default": false
    },
    "partial_failure": {
      "type": "boolean",
      "description": "Enable Google Ads partial failure handling for supported mutate endpoints.",
      "default": false
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id",
    "ad_group_id",
    "keywords"
  ]
}
```

</details>

<a id="tool-ads_add_display_keywords-ff5db164"></a>

## ads_add_display_keywords

Handler: Google Ads handler implements add display keywords through the product API.

```text
Safely add Display contextual keyword targeting to an ad group.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "ad_group_id": {
      "type": "string",
      "description": "Display ad group ID without dashes."
    },
    "keywords": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Contextual keyword texts."
    },
    "match_type": {
      "type": "string",
      "enum": [
        "BROAD",
        "PHRASE",
        "EXACT"
      ],
      "default": "BROAD"
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the mutation without calling Google Ads mutate endpoints. Defaults to false for allowlisted customers.",
      "default": false
    },
    "confirm": {
      "type": "boolean",
      "description": "Optional legacy confirmation. Allowed customer IDs in GOOGLE_ADS_MUTATION_CUSTOMER_IDS are treated as implicit confirmation.",
      "default": false
    },
    "validate_only": {
      "type": "boolean",
      "description": "When guardrails allow an API call, ask Google Ads to validate the mutation without applying it.",
      "default": false
    },
    "partial_failure": {
      "type": "boolean",
      "description": "Enable Google Ads partial failure handling for supported mutate endpoints.",
      "default": false
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id",
    "ad_group_id",
    "keywords"
  ]
}
```

</details>

<a id="tool-ads_add_display_placements-a9f18773"></a>

## ads_add_display_placements

Handler: Google Ads handler implements add display placements through the product API.

```text
Safely add Display managed placement URL targeting to an ad group.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "ad_group_id": {
      "type": "string",
      "description": "Display ad group ID without dashes."
    },
    "placement_urls": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Placement URLs/domains."
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the mutation without calling Google Ads mutate endpoints. Defaults to false for allowlisted customers.",
      "default": false
    },
    "confirm": {
      "type": "boolean",
      "description": "Optional legacy confirmation. Allowed customer IDs in GOOGLE_ADS_MUTATION_CUSTOMER_IDS are treated as implicit confirmation.",
      "default": false
    },
    "validate_only": {
      "type": "boolean",
      "description": "When guardrails allow an API call, ask Google Ads to validate the mutation without applying it.",
      "default": false
    },
    "partial_failure": {
      "type": "boolean",
      "description": "Enable Google Ads partial failure handling for supported mutate endpoints.",
      "default": false
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id",
    "ad_group_id",
    "placement_urls"
  ]
}
```

</details>

<a id="tool-ads_add_display_topics-f27a56ff"></a>

## ads_add_display_topics

Handler: Google Ads handler implements add display topics through the product API.

```text
Safely add Display topic targeting to an ad group.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "ad_group_id": {
      "type": "string",
      "description": "Display ad group ID without dashes."
    },
    "topic_ids": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Topic constant IDs."
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the mutation without calling Google Ads mutate endpoints. Defaults to false for allowlisted customers.",
      "default": false
    },
    "confirm": {
      "type": "boolean",
      "description": "Optional legacy confirmation. Allowed customer IDs in GOOGLE_ADS_MUTATION_CUSTOMER_IDS are treated as implicit confirmation.",
      "default": false
    },
    "validate_only": {
      "type": "boolean",
      "description": "When guardrails allow an API call, ask Google Ads to validate the mutation without applying it.",
      "default": false
    },
    "partial_failure": {
      "type": "boolean",
      "description": "Enable Google Ads partial failure handling for supported mutate endpoints.",
      "default": false
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id",
    "ad_group_id",
    "topic_ids"
  ]
}
```

</details>

<a id="tool-ads_pause_keywords-ef87d997"></a>

## ads_pause_keywords

Handler: Google Ads handler implements pause keywords through the product API.

```text
Safely pause ad group keywords by criterion IDs.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "ad_group_id": {
      "type": "string",
      "description": "Ad group ID without dashes."
    },
    "criterion_ids": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Keyword criterion IDs."
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the mutation without calling Google Ads mutate endpoints. Defaults to false for allowlisted customers.",
      "default": false
    },
    "confirm": {
      "type": "boolean",
      "description": "Optional legacy confirmation. Allowed customer IDs in GOOGLE_ADS_MUTATION_CUSTOMER_IDS are treated as implicit confirmation.",
      "default": false
    },
    "validate_only": {
      "type": "boolean",
      "description": "When guardrails allow an API call, ask Google Ads to validate the mutation without applying it.",
      "default": false
    },
    "partial_failure": {
      "type": "boolean",
      "description": "Enable Google Ads partial failure handling for supported mutate endpoints.",
      "default": false
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id",
    "ad_group_id",
    "criterion_ids"
  ]
}
```

</details>

<a id="tool-ads_enable_keywords-5bc79d94"></a>

## ads_enable_keywords

Handler: Google Ads handler implements enable keywords through the product API.

```text
Safely enable ad group keywords by criterion IDs.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "ad_group_id": {
      "type": "string",
      "description": "Ad group ID without dashes."
    },
    "criterion_ids": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Keyword criterion IDs."
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the mutation without calling Google Ads mutate endpoints. Defaults to false for allowlisted customers.",
      "default": false
    },
    "confirm": {
      "type": "boolean",
      "description": "Optional legacy confirmation. Allowed customer IDs in GOOGLE_ADS_MUTATION_CUSTOMER_IDS are treated as implicit confirmation.",
      "default": false
    },
    "validate_only": {
      "type": "boolean",
      "description": "When guardrails allow an API call, ask Google Ads to validate the mutation without applying it.",
      "default": false
    },
    "partial_failure": {
      "type": "boolean",
      "description": "Enable Google Ads partial failure handling for supported mutate endpoints.",
      "default": false
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id",
    "ad_group_id",
    "criterion_ids"
  ]
}
```

</details>

<a id="tool-ads_update_keyword_bid-f22b9ee8"></a>

## ads_update_keyword_bid

Handler: Google Ads handler implements update keyword bid through the product API.

```text
Safely update a keyword CPC bid.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "ad_group_id": {
      "type": "string",
      "description": "Ad group ID without dashes."
    },
    "criterion_id": {
      "type": "string",
      "description": "Keyword criterion ID without dashes."
    },
    "cpc_bid": {
      "type": "number",
      "description": "CPC bid in account currency."
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the mutation without calling Google Ads mutate endpoints. Defaults to false for allowlisted customers.",
      "default": false
    },
    "confirm": {
      "type": "boolean",
      "description": "Optional legacy confirmation. Allowed customer IDs in GOOGLE_ADS_MUTATION_CUSTOMER_IDS are treated as implicit confirmation.",
      "default": false
    },
    "validate_only": {
      "type": "boolean",
      "description": "When guardrails allow an API call, ask Google Ads to validate the mutation without applying it.",
      "default": false
    },
    "partial_failure": {
      "type": "boolean",
      "description": "Enable Google Ads partial failure handling for supported mutate endpoints.",
      "default": false
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id",
    "ad_group_id",
    "criterion_id",
    "cpc_bid"
  ]
}
```

</details>

<a id="tool-ads_pause_ad-9789d50a"></a>

## ads_pause_ad

Handler: Google Ads handler implements pause ad through the product API.

```text
Safely pause an ad.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "ad_group_id": {
      "type": "string",
      "description": "Ad group ID without dashes."
    },
    "ad_id": {
      "type": "string",
      "description": "Ad ID without dashes."
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the mutation without calling Google Ads mutate endpoints. Defaults to false for allowlisted customers.",
      "default": false
    },
    "confirm": {
      "type": "boolean",
      "description": "Optional legacy confirmation. Allowed customer IDs in GOOGLE_ADS_MUTATION_CUSTOMER_IDS are treated as implicit confirmation.",
      "default": false
    },
    "validate_only": {
      "type": "boolean",
      "description": "When guardrails allow an API call, ask Google Ads to validate the mutation without applying it.",
      "default": false
    },
    "partial_failure": {
      "type": "boolean",
      "description": "Enable Google Ads partial failure handling for supported mutate endpoints.",
      "default": false
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id",
    "ad_group_id",
    "ad_id"
  ]
}
```

</details>

<a id="tool-ads_enable_ad-c85df0d4"></a>

## ads_enable_ad

Handler: Google Ads handler implements enable ad through the product API.

```text
Safely enable an ad.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "ad_group_id": {
      "type": "string",
      "description": "Ad group ID without dashes."
    },
    "ad_id": {
      "type": "string",
      "description": "Ad ID without dashes."
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the mutation without calling Google Ads mutate endpoints. Defaults to false for allowlisted customers.",
      "default": false
    },
    "confirm": {
      "type": "boolean",
      "description": "Optional legacy confirmation. Allowed customer IDs in GOOGLE_ADS_MUTATION_CUSTOMER_IDS are treated as implicit confirmation.",
      "default": false
    },
    "validate_only": {
      "type": "boolean",
      "description": "When guardrails allow an API call, ask Google Ads to validate the mutation without applying it.",
      "default": false
    },
    "partial_failure": {
      "type": "boolean",
      "description": "Enable Google Ads partial failure handling for supported mutate endpoints.",
      "default": false
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id",
    "ad_group_id",
    "ad_id"
  ]
}
```

</details>

<a id="tool-ads_create_responsive_search_ad-0ac9c56e"></a>

## ads_create_responsive_search_ad

Handler: Google Ads handler implements create responsive search ad through the product API.

```text
Safely create a responsive search ad.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "ad_group_id": {
      "type": "string",
      "description": "Ad group ID without dashes."
    },
    "final_urls": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Final URLs."
    },
    "headlines": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "RSA headlines."
    },
    "descriptions": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "RSA descriptions."
    },
    "path1": {
      "type": "string",
      "description": "Optional path 1."
    },
    "path2": {
      "type": "string",
      "description": "Optional path 2."
    },
    "status": {
      "type": "string",
      "enum": [
        "ENABLED",
        "PAUSED"
      ],
      "default": "PAUSED"
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the mutation without calling Google Ads mutate endpoints. Defaults to false for allowlisted customers.",
      "default": false
    },
    "confirm": {
      "type": "boolean",
      "description": "Optional legacy confirmation. Allowed customer IDs in GOOGLE_ADS_MUTATION_CUSTOMER_IDS are treated as implicit confirmation.",
      "default": false
    },
    "validate_only": {
      "type": "boolean",
      "description": "When guardrails allow an API call, ask Google Ads to validate the mutation without applying it.",
      "default": false
    },
    "partial_failure": {
      "type": "boolean",
      "description": "Enable Google Ads partial failure handling for supported mutate endpoints.",
      "default": false
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id",
    "ad_group_id",
    "final_urls",
    "headlines",
    "descriptions"
  ]
}
```

</details>

<a id="tool-ads_replace_responsive_search_ad-5c5614c2"></a>

## ads_replace_responsive_search_ad

Handler: Google Ads handler implements replace responsive search ad through the product API.

```text
Safely replace RSA copy by creating a new RSA and optionally pausing the old ad.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "ad_group_id": {
      "type": "string",
      "description": "Ad group ID without dashes."
    },
    "old_ad_id": {
      "type": "string",
      "description": "Optional old RSA ad ID to pause in the same request."
    },
    "final_urls": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Final URLs for the new RSA."
    },
    "headlines": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "New RSA headlines."
    },
    "descriptions": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "New RSA descriptions."
    },
    "path1": {
      "type": "string",
      "description": "Optional path 1."
    },
    "path2": {
      "type": "string",
      "description": "Optional path 2."
    },
    "status": {
      "type": "string",
      "enum": [
        "ENABLED",
        "PAUSED"
      ],
      "default": "PAUSED"
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the mutation without calling Google Ads mutate endpoints. Defaults to false for allowlisted customers.",
      "default": false
    },
    "confirm": {
      "type": "boolean",
      "description": "Optional legacy confirmation. Allowed customer IDs in GOOGLE_ADS_MUTATION_CUSTOMER_IDS are treated as implicit confirmation.",
      "default": false
    },
    "validate_only": {
      "type": "boolean",
      "description": "When guardrails allow an API call, ask Google Ads to validate the mutation without applying it.",
      "default": false
    },
    "partial_failure": {
      "type": "boolean",
      "description": "Enable Google Ads partial failure handling for supported mutate endpoints.",
      "default": false
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id",
    "ad_group_id",
    "final_urls",
    "headlines",
    "descriptions"
  ]
}
```

</details>

<a id="tool-ads_create_responsive_display_ad-12c71b17"></a>

## ads_create_responsive_display_ad

Handler: Google Ads handler implements create responsive display ad through the product API.

```text
Safely create a responsive display ad using existing Google Ads image/logo asset IDs.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "ad_group_id": {
      "type": "string",
      "description": "Display ad group ID without dashes."
    },
    "final_urls": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Final URLs."
    },
    "marketing_image_asset_ids": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Landscape marketing image asset IDs."
    },
    "square_marketing_image_asset_ids": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Optional square marketing image asset IDs."
    },
    "logo_image_asset_ids": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Optional logo image asset IDs."
    },
    "square_logo_image_asset_ids": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Optional square logo image asset IDs."
    },
    "headlines": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Short headlines."
    },
    "long_headline": {
      "type": "string",
      "description": "Long headline."
    },
    "descriptions": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Descriptions."
    },
    "business_name": {
      "type": "string",
      "description": "Advertiser business name."
    },
    "call_to_action_text": {
      "type": "string",
      "description": "Optional call to action text."
    },
    "status": {
      "type": "string",
      "enum": [
        "ENABLED",
        "PAUSED"
      ],
      "default": "PAUSED"
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the mutation without calling Google Ads mutate endpoints. Defaults to false for allowlisted customers.",
      "default": false
    },
    "confirm": {
      "type": "boolean",
      "description": "Optional legacy confirmation. Allowed customer IDs in GOOGLE_ADS_MUTATION_CUSTOMER_IDS are treated as implicit confirmation.",
      "default": false
    },
    "validate_only": {
      "type": "boolean",
      "description": "When guardrails allow an API call, ask Google Ads to validate the mutation without applying it.",
      "default": false
    },
    "partial_failure": {
      "type": "boolean",
      "description": "Enable Google Ads partial failure handling for supported mutate endpoints.",
      "default": false
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id",
    "ad_group_id",
    "final_urls",
    "marketing_image_asset_ids",
    "headlines",
    "long_headline",
    "descriptions",
    "business_name"
  ]
}
```

</details>

<a id="tool-ads_create_video_responsive_ad-4bf2b12b"></a>

## ads_create_video_responsive_ad

Handler: Google Ads handler implements create video responsive ad through the product API.

```text
Safely create a YouTube/video responsive ad using existing video and logo asset IDs.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "ad_group_id": {
      "type": "string",
      "description": "Video ad group ID without dashes."
    },
    "final_urls": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Final URLs."
    },
    "video_asset_ids": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "YouTube video asset IDs."
    },
    "logo_image_asset_ids": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Logo image asset IDs."
    },
    "companion_banner_asset_ids": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Optional companion banner image asset IDs."
    },
    "headlines": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Short headline. Google currently supports one."
    },
    "long_headlines": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Long headline. Google currently supports one."
    },
    "descriptions": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Description. Google currently supports one."
    },
    "business_name": {
      "type": "string",
      "description": "Advertiser or brand name."
    },
    "call_to_actions": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "CTA text. Google currently supports one."
    },
    "breadcrumb1": {
      "type": "string",
      "description": "Optional display URL breadcrumb 1."
    },
    "breadcrumb2": {
      "type": "string",
      "description": "Optional display URL breadcrumb 2."
    },
    "status": {
      "type": "string",
      "enum": [
        "ENABLED",
        "PAUSED"
      ],
      "default": "PAUSED"
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the mutation without calling Google Ads mutate endpoints. Defaults to false for allowlisted customers.",
      "default": false
    },
    "confirm": {
      "type": "boolean",
      "description": "Optional legacy confirmation. Allowed customer IDs in GOOGLE_ADS_MUTATION_CUSTOMER_IDS are treated as implicit confirmation.",
      "default": false
    },
    "validate_only": {
      "type": "boolean",
      "description": "When guardrails allow an API call, ask Google Ads to validate the mutation without applying it.",
      "default": false
    },
    "partial_failure": {
      "type": "boolean",
      "description": "Enable Google Ads partial failure handling for supported mutate endpoints.",
      "default": false
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id",
    "ad_group_id",
    "final_urls",
    "video_asset_ids",
    "logo_image_asset_ids",
    "headlines",
    "long_headlines",
    "descriptions",
    "business_name",
    "call_to_actions"
  ]
}
```

</details>

<a id="tool-ads_update_responsive_search_ad-4e0a1c34"></a>

## ads_update_responsive_search_ad

Handler: Google Ads handler implements update responsive search ad through the product API.

```text
Safely update mutable responsive search ad fields only. Use ads_replace_responsive_search_ad for headline/description changes.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "ad_group_id": {
      "type": "string",
      "description": "Ad group ID without dashes."
    },
    "ad_id": {
      "type": "string",
      "description": "Ad ID without dashes."
    },
    "final_urls": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Optional replacement final URLs."
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the mutation without calling Google Ads mutate endpoints. Defaults to false for allowlisted customers.",
      "default": false
    },
    "confirm": {
      "type": "boolean",
      "description": "Optional legacy confirmation. Allowed customer IDs in GOOGLE_ADS_MUTATION_CUSTOMER_IDS are treated as implicit confirmation.",
      "default": false
    },
    "validate_only": {
      "type": "boolean",
      "description": "When guardrails allow an API call, ask Google Ads to validate the mutation without applying it.",
      "default": false
    },
    "partial_failure": {
      "type": "boolean",
      "description": "Enable Google Ads partial failure handling for supported mutate endpoints.",
      "default": false
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id",
    "ad_group_id",
    "ad_id"
  ]
}
```

</details>

<a id="tool-ads_create_shopping_product_ad-7aa8d289"></a>

## ads_create_shopping_product_ad

Handler: Google Ads handler implements create shopping product ad through the product API.

```text
Safely create a Shopping product ad in an existing Shopping ad group.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "ad_group_id": {
      "type": "string",
      "description": "Shopping ad group ID without dashes."
    },
    "status": {
      "type": "string",
      "enum": [
        "ENABLED",
        "PAUSED"
      ],
      "default": "PAUSED"
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the mutation without calling Google Ads mutate endpoints. Defaults to false for allowlisted customers.",
      "default": false
    },
    "confirm": {
      "type": "boolean",
      "description": "Optional legacy confirmation. Allowed customer IDs in GOOGLE_ADS_MUTATION_CUSTOMER_IDS are treated as implicit confirmation.",
      "default": false
    },
    "validate_only": {
      "type": "boolean",
      "description": "When guardrails allow an API call, ask Google Ads to validate the mutation without applying it.",
      "default": false
    },
    "partial_failure": {
      "type": "boolean",
      "description": "Enable Google Ads partial failure handling for supported mutate endpoints.",
      "default": false
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id",
    "ad_group_id"
  ]
}
```

</details>

<a id="tool-ads_create_ad_group-262eb5ee"></a>

## ads_create_ad_group

Handler: Google Ads handler implements create ad group through the product API.

```text
Safely create an ad group for supported Search, Display, Shopping, Hotel, Smart, Travel, and Video campaign types.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "campaign_id": {
      "type": "string",
      "description": "Campaign ID without dashes."
    },
    "name": {
      "type": "string",
      "description": "Ad group name."
    },
    "status": {
      "type": "string",
      "enum": [
        "ENABLED",
        "PAUSED"
      ],
      "default": "PAUSED"
    },
    "type": {
      "type": "string",
      "enum": [
        "SEARCH_STANDARD",
        "SEARCH_DYNAMIC_ADS",
        "DISPLAY_STANDARD",
        "SHOPPING_PRODUCT_ADS",
        "SHOPPING_SMART_ADS",
        "SHOPPING_COMPARISON_LISTING_ADS",
        "HOTEL_ADS",
        "PROMOTED_HOTEL_ADS",
        "SMART_CAMPAIGN_ADS",
        "TRAVEL_ADS",
        "VIDEO_BUMPER",
        "VIDEO_EFFICIENT_REACH",
        "VIDEO_NON_SKIPPABLE_IN_STREAM",
        "VIDEO_RESPONSIVE",
        "VIDEO_TRUE_VIEW_IN_DISPLAY",
        "VIDEO_TRUE_VIEW_IN_STREAM",
        "YOUTUBE_AUDIO"
      ],
      "default": "SEARCH_STANDARD"
    },
    "cpc_bid": {
      "type": "number",
      "description": "Optional CPC bid in account currency."
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the mutation without calling Google Ads mutate endpoints. Defaults to false for allowlisted customers.",
      "default": false
    },
    "confirm": {
      "type": "boolean",
      "description": "Optional legacy confirmation. Allowed customer IDs in GOOGLE_ADS_MUTATION_CUSTOMER_IDS are treated as implicit confirmation.",
      "default": false
    },
    "validate_only": {
      "type": "boolean",
      "description": "When guardrails allow an API call, ask Google Ads to validate the mutation without applying it.",
      "default": false
    },
    "partial_failure": {
      "type": "boolean",
      "description": "Enable Google Ads partial failure handling for supported mutate endpoints.",
      "default": false
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id",
    "campaign_id",
    "name"
  ]
}
```

</details>

<a id="tool-ads_create_campaign-98d75a32"></a>

## ads_create_campaign

Handler: Google Ads handler implements create campaign through the product API.

```text
Safely create a Google Ads campaign shell for common channel types using an existing budget ID.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "name": {
      "type": "string",
      "description": "Campaign name."
    },
    "budget_id": {
      "type": "string",
      "description": "Existing campaign budget ID without dashes. The MCP never creates or edits budgets."
    },
    "advertising_channel_type": {
      "type": "string",
      "enum": [
        "SEARCH",
        "DISPLAY",
        "SHOPPING",
        "HOTEL",
        "VIDEO",
        "MULTI_CHANNEL",
        "LOCAL",
        "SMART",
        "PERFORMANCE_MAX",
        "LOCAL_SERVICES",
        "TRAVEL",
        "DEMAND_GEN"
      ],
      "default": "SEARCH"
    },
    "advertising_channel_sub_type": {
      "type": "string",
      "description": "Optional Google Ads channel subtype, for example VIDEO_ACTION."
    },
    "status": {
      "type": "string",
      "enum": [
        "ENABLED",
        "PAUSED"
      ],
      "default": "PAUSED"
    },
    "start_date": {
      "type": "string",
      "description": "Optional start date in YYYY-MM-DD format."
    },
    "end_date": {
      "type": "string",
      "description": "Optional end date in YYYY-MM-DD format."
    },
    "bidding_strategy_type": {
      "type": "string",
      "enum": [
        "MANUAL_CPC",
        "MAXIMIZE_CONVERSIONS",
        "MAXIMIZE_CONVERSION_VALUE",
        "TARGET_CPA",
        "TARGET_ROAS"
      ],
      "default": "MANUAL_CPC"
    },
    "target_cpa": {
      "type": "number",
      "description": "Optional target CPA in account currency."
    },
    "target_roas": {
      "type": "number",
      "description": "Optional target ROAS as a decimal, e.g. 3.5."
    },
    "target_google_search": {
      "type": "boolean",
      "description": "Search campaigns only. Defaults to true.",
      "default": true
    },
    "target_search_network": {
      "type": "boolean",
      "description": "Search campaigns only. Defaults to true.",
      "default": true
    },
    "target_content_network": {
      "type": "boolean",
      "description": "Search campaigns only. Defaults to false.",
      "default": false
    },
    "target_partner_search_network": {
      "type": "boolean",
      "description": "Search campaigns only. Defaults to false.",
      "default": false
    },
    "merchant_id": {
      "type": "string",
      "description": "Shopping campaigns only. Merchant Center ID."
    },
    "sales_country": {
      "type": "string",
      "description": "Shopping campaigns only. Two-letter country code, e.g. EG or US."
    },
    "campaign_priority": {
      "type": "number",
      "description": "Shopping campaigns only. Priority 0-2.",
      "default": 0
    },
    "enable_local": {
      "type": "boolean",
      "description": "Shopping campaigns only. Enable local inventory ads.",
      "default": false
    },
    "contains_eu_political_advertising": {
      "type": "string",
      "enum": [
        "DOES_NOT_CONTAIN_EU_POLITICAL_ADVERTISING",
        "CONTAINS_EU_POLITICAL_ADVERTISING"
      ],
      "default": "DOES_NOT_CONTAIN_EU_POLITICAL_ADVERTISING"
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the mutation without calling Google Ads mutate endpoints. Defaults to false for allowlisted customers.",
      "default": false
    },
    "confirm": {
      "type": "boolean",
      "description": "Optional legacy confirmation. Allowed customer IDs in GOOGLE_ADS_MUTATION_CUSTOMER_IDS are treated as implicit confirmation.",
      "default": false
    },
    "validate_only": {
      "type": "boolean",
      "description": "When guardrails allow an API call, ask Google Ads to validate the mutation without applying it.",
      "default": false
    },
    "partial_failure": {
      "type": "boolean",
      "description": "Enable Google Ads partial failure handling for supported mutate endpoints.",
      "default": false
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id",
    "name",
    "budget_id"
  ]
}
```

</details>

<a id="tool-ads_create_search_campaign-a1d70de7"></a>

## ads_create_search_campaign

Handler: Google Ads handler implements create search campaign through the product API.

```text
Safely create a search campaign using an existing explicit budget.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "name": {
      "type": "string",
      "description": "Campaign name."
    },
    "budget_id": {
      "type": "string",
      "description": "Existing campaign budget ID without dashes."
    },
    "status": {
      "type": "string",
      "enum": [
        "ENABLED",
        "PAUSED"
      ],
      "default": "PAUSED"
    },
    "start_date": {
      "type": "string",
      "description": "Optional start date in YYYY-MM-DD format."
    },
    "end_date": {
      "type": "string",
      "description": "Optional end date in YYYY-MM-DD format."
    },
    "bidding_strategy_type": {
      "type": "string",
      "enum": [
        "MANUAL_CPC",
        "MAXIMIZE_CONVERSIONS"
      ],
      "default": "MANUAL_CPC"
    },
    "contains_eu_political_advertising": {
      "type": "string",
      "enum": [
        "DOES_NOT_CONTAIN_EU_POLITICAL_ADVERTISING",
        "CONTAINS_EU_POLITICAL_ADVERTISING"
      ],
      "default": "DOES_NOT_CONTAIN_EU_POLITICAL_ADVERTISING"
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the mutation without calling Google Ads mutate endpoints. Defaults to false for allowlisted customers.",
      "default": false
    },
    "confirm": {
      "type": "boolean",
      "description": "Optional legacy confirmation. Allowed customer IDs in GOOGLE_ADS_MUTATION_CUSTOMER_IDS are treated as implicit confirmation.",
      "default": false
    },
    "validate_only": {
      "type": "boolean",
      "description": "When guardrails allow an API call, ask Google Ads to validate the mutation without applying it.",
      "default": false
    },
    "partial_failure": {
      "type": "boolean",
      "description": "Enable Google Ads partial failure handling for supported mutate endpoints.",
      "default": false
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id",
    "name",
    "budget_id"
  ]
}
```

</details>

<a id="tool-ads_update_campaign_settings-4d45f11d"></a>

## ads_update_campaign_settings

Handler: Google Ads handler implements update campaign settings through the product API.

```text
Safely update common campaign settings such as name, status, dates, tracking, and search network flags. It never changes campaign budgets.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "campaign_id": {
      "type": "string",
      "description": "Campaign ID without dashes."
    },
    "name": {
      "type": "string",
      "description": "Optional new campaign name."
    },
    "status": {
      "type": "string",
      "enum": [
        "ENABLED",
        "PAUSED"
      ]
    },
    "start_date": {
      "type": "string",
      "description": "Optional start date in YYYY-MM-DD format."
    },
    "end_date": {
      "type": "string",
      "description": "Optional end date in YYYY-MM-DD format."
    },
    "tracking_url_template": {
      "type": "string",
      "description": "Optional tracking URL template."
    },
    "final_url_suffix": {
      "type": "string",
      "description": "Optional final URL suffix."
    },
    "target_google_search": {
      "type": "boolean",
      "description": "Search campaigns only."
    },
    "target_search_network": {
      "type": "boolean",
      "description": "Search campaigns only."
    },
    "target_content_network": {
      "type": "boolean",
      "description": "Search campaigns only."
    },
    "target_partner_search_network": {
      "type": "boolean",
      "description": "Search campaigns only."
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the mutation without calling Google Ads mutate endpoints. Defaults to false for allowlisted customers.",
      "default": false
    },
    "confirm": {
      "type": "boolean",
      "description": "Optional legacy confirmation. Allowed customer IDs in GOOGLE_ADS_MUTATION_CUSTOMER_IDS are treated as implicit confirmation.",
      "default": false
    },
    "validate_only": {
      "type": "boolean",
      "description": "When guardrails allow an API call, ask Google Ads to validate the mutation without applying it.",
      "default": false
    },
    "partial_failure": {
      "type": "boolean",
      "description": "Enable Google Ads partial failure handling for supported mutate endpoints.",
      "default": false
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id",
    "campaign_id"
  ]
}
```

</details>

<a id="tool-ads_create_pmax_asset_group-22f4b4d8"></a>

## ads_create_pmax_asset_group

Handler: Google Ads handler implements create pmax asset group through the product API.

```text
Safely create a Performance Max asset group using existing campaign and final URLs.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "campaign_id": {
      "type": "string",
      "description": "Performance Max campaign ID without dashes."
    },
    "name": {
      "type": "string",
      "description": "Asset group name."
    },
    "final_urls": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Final URLs."
    },
    "final_mobile_urls": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Optional final mobile URLs."
    },
    "path1": {
      "type": "string",
      "description": "Optional display URL path 1."
    },
    "path2": {
      "type": "string",
      "description": "Optional display URL path 2."
    },
    "status": {
      "type": "string",
      "enum": [
        "ENABLED",
        "PAUSED"
      ],
      "default": "PAUSED"
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the mutation without calling Google Ads mutate endpoints. Defaults to false for allowlisted customers.",
      "default": false
    },
    "confirm": {
      "type": "boolean",
      "description": "Optional legacy confirmation. Allowed customer IDs in GOOGLE_ADS_MUTATION_CUSTOMER_IDS are treated as implicit confirmation.",
      "default": false
    },
    "validate_only": {
      "type": "boolean",
      "description": "When guardrails allow an API call, ask Google Ads to validate the mutation without applying it.",
      "default": false
    },
    "partial_failure": {
      "type": "boolean",
      "description": "Enable Google Ads partial failure handling for supported mutate endpoints.",
      "default": false
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id",
    "campaign_id",
    "name",
    "final_urls"
  ]
}
```

</details>

<a id="tool-ads_update_asset_group-d5cbad34"></a>

## ads_update_asset_group

Handler: Google Ads handler implements update asset group through the product API.

```text
Safely update a Performance Max asset group's status, URLs, or display paths.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "asset_group_id": {
      "type": "string",
      "description": "Asset group ID without dashes."
    },
    "status": {
      "type": "string",
      "enum": [
        "ENABLED",
        "PAUSED"
      ]
    },
    "final_urls": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Optional replacement final URLs."
    },
    "final_mobile_urls": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Optional replacement final mobile URLs."
    },
    "path1": {
      "type": "string",
      "description": "Optional display URL path 1."
    },
    "path2": {
      "type": "string",
      "description": "Optional display URL path 2."
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the mutation without calling Google Ads mutate endpoints. Defaults to false for allowlisted customers.",
      "default": false
    },
    "confirm": {
      "type": "boolean",
      "description": "Optional legacy confirmation. Allowed customer IDs in GOOGLE_ADS_MUTATION_CUSTOMER_IDS are treated as implicit confirmation.",
      "default": false
    },
    "validate_only": {
      "type": "boolean",
      "description": "When guardrails allow an API call, ask Google Ads to validate the mutation without applying it.",
      "default": false
    },
    "partial_failure": {
      "type": "boolean",
      "description": "Enable Google Ads partial failure handling for supported mutate endpoints.",
      "default": false
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id",
    "asset_group_id"
  ]
}
```

</details>

<a id="tool-ads_link_asset_to_asset_group-8001246d"></a>

## ads_link_asset_to_asset_group

Handler: Google Ads handler implements link asset to asset group through the product API.

```text
Safely link an existing asset to a Performance Max asset group.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "asset_group_id": {
      "type": "string",
      "description": "Asset group ID without dashes."
    },
    "asset_id": {
      "type": "string",
      "description": "Asset ID without dashes."
    },
    "field_type": {
      "type": "string",
      "description": "Asset field type, for example HEADLINE, LONG_HEADLINE, DESCRIPTION, BUSINESS_NAME, MARKETING_IMAGE, SQUARE_MARKETING_IMAGE, LOGO, or YOUTUBE_VIDEO."
    },
    "status": {
      "type": "string",
      "enum": [
        "ENABLED",
        "PAUSED"
      ],
      "default": "ENABLED"
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the mutation without calling Google Ads mutate endpoints. Defaults to false for allowlisted customers.",
      "default": false
    },
    "confirm": {
      "type": "boolean",
      "description": "Optional legacy confirmation. Allowed customer IDs in GOOGLE_ADS_MUTATION_CUSTOMER_IDS are treated as implicit confirmation.",
      "default": false
    },
    "validate_only": {
      "type": "boolean",
      "description": "When guardrails allow an API call, ask Google Ads to validate the mutation without applying it.",
      "default": false
    },
    "partial_failure": {
      "type": "boolean",
      "description": "Enable Google Ads partial failure handling for supported mutate endpoints.",
      "default": false
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id",
    "asset_group_id",
    "asset_id",
    "field_type"
  ]
}
```

</details>

<a id="tool-ads_create_custom_audience-ce3287c7"></a>

## ads_create_custom_audience

Handler: Google Ads handler implements create custom audience through the product API.

```text
Safely create a Google Ads custom audience from explicit keywords, URLs, apps, or place categories.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "name": {
      "type": "string",
      "description": "Custom audience name."
    },
    "type": {
      "type": "string",
      "enum": [
        "SEARCH",
        "BROWSING",
        "APPS"
      ],
      "default": "SEARCH"
    },
    "description": {
      "type": "string",
      "description": "Optional custom audience description."
    },
    "keywords": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Optional intent keywords."
    },
    "urls": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Optional interest URLs."
    },
    "app_package_names": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Optional Android app package names."
    },
    "place_category_ids": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Optional Google place category IDs."
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the mutation without calling Google Ads mutate endpoints. Defaults to false for allowlisted customers.",
      "default": false
    },
    "confirm": {
      "type": "boolean",
      "description": "Optional legacy confirmation. Allowed customer IDs in GOOGLE_ADS_MUTATION_CUSTOMER_IDS are treated as implicit confirmation.",
      "default": false
    },
    "validate_only": {
      "type": "boolean",
      "description": "When guardrails allow an API call, ask Google Ads to validate the mutation without applying it.",
      "default": false
    },
    "partial_failure": {
      "type": "boolean",
      "description": "Enable Google Ads partial failure handling for supported mutate endpoints.",
      "default": false
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id",
    "name"
  ]
}
```

</details>

<a id="tool-ads_create_audience_from_custom_audiences-4aa4d953"></a>

## ads_create_audience_from_custom_audiences

Handler: Google Ads handler implements create audience from custom audiences through the product API.

```text
Safely create an Audience resource from existing custom audiences for ad group targeting or PMax signals.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "name": {
      "type": "string",
      "description": "Audience name. Required for CUSTOMER scope; ignored for ASSET_GROUP scope."
    },
    "custom_audience_ids": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Custom audience IDs without dashes."
    },
    "description": {
      "type": "string",
      "description": "Optional audience description."
    },
    "scope": {
      "type": "string",
      "enum": [
        "CUSTOMER",
        "ASSET_GROUP"
      ],
      "default": "CUSTOMER"
    },
    "asset_group_id": {
      "type": "string",
      "description": "Required only when scope is ASSET_GROUP."
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the mutation without calling Google Ads mutate endpoints. Defaults to false for allowlisted customers.",
      "default": false
    },
    "confirm": {
      "type": "boolean",
      "description": "Optional legacy confirmation. Allowed customer IDs in GOOGLE_ADS_MUTATION_CUSTOMER_IDS are treated as implicit confirmation.",
      "default": false
    },
    "validate_only": {
      "type": "boolean",
      "description": "When guardrails allow an API call, ask Google Ads to validate the mutation without applying it.",
      "default": false
    },
    "partial_failure": {
      "type": "boolean",
      "description": "Enable Google Ads partial failure handling for supported mutate endpoints.",
      "default": false
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id",
    "custom_audience_ids"
  ]
}
```

</details>

<a id="tool-ads_add_audience_to_ad_group-c5fdba28"></a>

## ads_add_audience_to_ad_group

Handler: Google Ads handler implements add audience to ad group through the product API.

```text
Safely target an existing audience resource in an ad group.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "ad_group_id": {
      "type": "string",
      "description": "Ad group ID without dashes."
    },
    "audience_id": {
      "type": "string",
      "description": "Audience ID without dashes."
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the mutation without calling Google Ads mutate endpoints. Defaults to false for allowlisted customers.",
      "default": false
    },
    "confirm": {
      "type": "boolean",
      "description": "Optional legacy confirmation. Allowed customer IDs in GOOGLE_ADS_MUTATION_CUSTOMER_IDS are treated as implicit confirmation.",
      "default": false
    },
    "validate_only": {
      "type": "boolean",
      "description": "When guardrails allow an API call, ask Google Ads to validate the mutation without applying it.",
      "default": false
    },
    "partial_failure": {
      "type": "boolean",
      "description": "Enable Google Ads partial failure handling for supported mutate endpoints.",
      "default": false
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id",
    "ad_group_id",
    "audience_id"
  ]
}
```

</details>

<a id="tool-ads_add_pmax_search_themes-a61dc80b"></a>

## ads_add_pmax_search_themes

Handler: Google Ads handler implements add pmax search themes through the product API.

```text
Safely add Performance Max search theme signals to an asset group.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "asset_group_id": {
      "type": "string",
      "description": "Asset group ID without dashes."
    },
    "search_themes": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Search theme texts."
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the mutation without calling Google Ads mutate endpoints. Defaults to false for allowlisted customers.",
      "default": false
    },
    "confirm": {
      "type": "boolean",
      "description": "Optional legacy confirmation. Allowed customer IDs in GOOGLE_ADS_MUTATION_CUSTOMER_IDS are treated as implicit confirmation.",
      "default": false
    },
    "validate_only": {
      "type": "boolean",
      "description": "When guardrails allow an API call, ask Google Ads to validate the mutation without applying it.",
      "default": false
    },
    "partial_failure": {
      "type": "boolean",
      "description": "Enable Google Ads partial failure handling for supported mutate endpoints.",
      "default": false
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id",
    "asset_group_id",
    "search_themes"
  ]
}
```

</details>

<a id="tool-ads_add_pmax_audience_signal-b2873f7f"></a>

## ads_add_pmax_audience_signal

Handler: Google Ads handler implements add pmax audience signal through the product API.

```text
Safely add an existing audience as a Performance Max asset group signal.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "asset_group_id": {
      "type": "string",
      "description": "Asset group ID without dashes."
    },
    "audience_id": {
      "type": "string",
      "description": "Audience ID without dashes."
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the mutation without calling Google Ads mutate endpoints. Defaults to false for allowlisted customers.",
      "default": false
    },
    "confirm": {
      "type": "boolean",
      "description": "Optional legacy confirmation. Allowed customer IDs in GOOGLE_ADS_MUTATION_CUSTOMER_IDS are treated as implicit confirmation.",
      "default": false
    },
    "validate_only": {
      "type": "boolean",
      "description": "When guardrails allow an API call, ask Google Ads to validate the mutation without applying it.",
      "default": false
    },
    "partial_failure": {
      "type": "boolean",
      "description": "Enable Google Ads partial failure handling for supported mutate endpoints.",
      "default": false
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id",
    "asset_group_id",
    "audience_id"
  ]
}
```

</details>

<a id="tool-ads_set_campaign_locations-e6296783"></a>

## ads_set_campaign_locations

Handler: Google Ads handler implements set campaign locations through the product API.

```text
Safely add included or excluded location targets to a campaign.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "campaign_id": {
      "type": "string",
      "description": "Campaign ID without dashes."
    },
    "geo_target_ids": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Geo target constant IDs, e.g. 2818 for Egypt."
    },
    "negative": {
      "type": "boolean",
      "description": "Set true to exclude locations.",
      "default": false
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the mutation without calling Google Ads mutate endpoints. Defaults to false for allowlisted customers.",
      "default": false
    },
    "confirm": {
      "type": "boolean",
      "description": "Optional legacy confirmation. Allowed customer IDs in GOOGLE_ADS_MUTATION_CUSTOMER_IDS are treated as implicit confirmation.",
      "default": false
    },
    "validate_only": {
      "type": "boolean",
      "description": "When guardrails allow an API call, ask Google Ads to validate the mutation without applying it.",
      "default": false
    },
    "partial_failure": {
      "type": "boolean",
      "description": "Enable Google Ads partial failure handling for supported mutate endpoints.",
      "default": false
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id",
    "campaign_id",
    "geo_target_ids"
  ]
}
```

</details>

<a id="tool-ads_set_campaign_languages-79a03a84"></a>

## ads_set_campaign_languages

Handler: Google Ads handler implements set campaign languages through the product API.

```text
Safely add language targets to a campaign.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "campaign_id": {
      "type": "string",
      "description": "Campaign ID without dashes."
    },
    "language_ids": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Language constant IDs, e.g. 1000 English, 1019 Arabic."
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the mutation without calling Google Ads mutate endpoints. Defaults to false for allowlisted customers.",
      "default": false
    },
    "confirm": {
      "type": "boolean",
      "description": "Optional legacy confirmation. Allowed customer IDs in GOOGLE_ADS_MUTATION_CUSTOMER_IDS are treated as implicit confirmation.",
      "default": false
    },
    "validate_only": {
      "type": "boolean",
      "description": "When guardrails allow an API call, ask Google Ads to validate the mutation without applying it.",
      "default": false
    },
    "partial_failure": {
      "type": "boolean",
      "description": "Enable Google Ads partial failure handling for supported mutate endpoints.",
      "default": false
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id",
    "campaign_id",
    "language_ids"
  ]
}
```

</details>

<a id="tool-ads_set_campaign_ad_schedules-79a5f791"></a>

## ads_set_campaign_ad_schedules

Handler: Google Ads handler implements set campaign ad schedules through the product API.

```text
Safely add ad schedule targets to a campaign.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "campaign_id": {
      "type": "string",
      "description": "Campaign ID without dashes."
    },
    "schedules": {
      "type": "array",
      "items": {
        "type": "object"
      },
      "description": "Schedule objects with day_of_week, start_hour, start_minute, end_hour, and end_minute."
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the mutation without calling Google Ads mutate endpoints. Defaults to false for allowlisted customers.",
      "default": false
    },
    "confirm": {
      "type": "boolean",
      "description": "Optional legacy confirmation. Allowed customer IDs in GOOGLE_ADS_MUTATION_CUSTOMER_IDS are treated as implicit confirmation.",
      "default": false
    },
    "validate_only": {
      "type": "boolean",
      "description": "When guardrails allow an API call, ask Google Ads to validate the mutation without applying it.",
      "default": false
    },
    "partial_failure": {
      "type": "boolean",
      "description": "Enable Google Ads partial failure handling for supported mutate endpoints.",
      "default": false
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id",
    "campaign_id",
    "schedules"
  ]
}
```

</details>

<a id="tool-ads_apply_recommendation-dd00a8e5"></a>

## ads_apply_recommendation

Handler: Google Ads handler implements apply recommendation through the product API.

```text
Safely apply a Google Ads recommendation.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "recommendation_resource_name": {
      "type": "string",
      "description": "Full recommendation resource name."
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the mutation without calling Google Ads mutate endpoints. Defaults to false for allowlisted customers.",
      "default": false
    },
    "confirm": {
      "type": "boolean",
      "description": "Optional legacy confirmation. Allowed customer IDs in GOOGLE_ADS_MUTATION_CUSTOMER_IDS are treated as implicit confirmation.",
      "default": false
    },
    "validate_only": {
      "type": "boolean",
      "description": "When guardrails allow an API call, ask Google Ads to validate the mutation without applying it.",
      "default": false
    },
    "partial_failure": {
      "type": "boolean",
      "description": "Enable Google Ads partial failure handling for supported mutate endpoints.",
      "default": false
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id",
    "recommendation_resource_name"
  ]
}
```

</details>

<a id="tool-ads_dismiss_recommendation-ed6d5f98"></a>

## ads_dismiss_recommendation

Handler: Google Ads handler implements dismiss recommendation through the product API.

```text
Safely dismiss a Google Ads recommendation.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "recommendation_resource_name": {
      "type": "string",
      "description": "Full recommendation resource name."
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the mutation without calling Google Ads mutate endpoints. Defaults to false for allowlisted customers.",
      "default": false
    },
    "confirm": {
      "type": "boolean",
      "description": "Optional legacy confirmation. Allowed customer IDs in GOOGLE_ADS_MUTATION_CUSTOMER_IDS are treated as implicit confirmation.",
      "default": false
    },
    "validate_only": {
      "type": "boolean",
      "description": "When guardrails allow an API call, ask Google Ads to validate the mutation without applying it.",
      "default": false
    },
    "partial_failure": {
      "type": "boolean",
      "description": "Enable Google Ads partial failure handling for supported mutate endpoints.",
      "default": false
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id",
    "recommendation_resource_name"
  ]
}
```

</details>

<a id="tool-ads_add_sitelink_asset-21266516"></a>

## ads_add_sitelink_asset

Handler: Google Ads handler implements add sitelink asset through the product API.

```text
Safely create a sitelink asset.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "link_text": {
      "type": "string",
      "description": "Sitelink text."
    },
    "final_urls": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Final URLs."
    },
    "description1": {
      "type": "string",
      "description": "Optional description line 1."
    },
    "description2": {
      "type": "string",
      "description": "Optional description line 2."
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the mutation without calling Google Ads mutate endpoints. Defaults to false for allowlisted customers.",
      "default": false
    },
    "confirm": {
      "type": "boolean",
      "description": "Optional legacy confirmation. Allowed customer IDs in GOOGLE_ADS_MUTATION_CUSTOMER_IDS are treated as implicit confirmation.",
      "default": false
    },
    "validate_only": {
      "type": "boolean",
      "description": "When guardrails allow an API call, ask Google Ads to validate the mutation without applying it.",
      "default": false
    },
    "partial_failure": {
      "type": "boolean",
      "description": "Enable Google Ads partial failure handling for supported mutate endpoints.",
      "default": false
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id",
    "link_text",
    "final_urls"
  ]
}
```

</details>

<a id="tool-ads_create_text_asset-08a19912"></a>

## ads_create_text_asset

Handler: Google Ads handler implements create text asset through the product API.

```text
Safely create a reusable Google Ads text asset for PMax or asset links.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "text": {
      "type": "string",
      "description": "Asset text."
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the mutation without calling Google Ads mutate endpoints. Defaults to false for allowlisted customers.",
      "default": false
    },
    "confirm": {
      "type": "boolean",
      "description": "Optional legacy confirmation. Allowed customer IDs in GOOGLE_ADS_MUTATION_CUSTOMER_IDS are treated as implicit confirmation.",
      "default": false
    },
    "validate_only": {
      "type": "boolean",
      "description": "When guardrails allow an API call, ask Google Ads to validate the mutation without applying it.",
      "default": false
    },
    "partial_failure": {
      "type": "boolean",
      "description": "Enable Google Ads partial failure handling for supported mutate endpoints.",
      "default": false
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id",
    "text"
  ]
}
```

</details>

<a id="tool-ads_upload_image_asset-86e59a04"></a>

## ads_upload_image_asset

Handler: Google Ads handler implements upload image asset through the product API.

```text
Safely upload a real image/logo asset from base64 image bytes.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "name": {
      "type": "string",
      "description": "Asset name."
    },
    "image_data_base64": {
      "type": "string",
      "description": "Base64 encoded image bytes, without a data URL prefix."
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the mutation without calling Google Ads mutate endpoints. Defaults to false for allowlisted customers.",
      "default": false
    },
    "confirm": {
      "type": "boolean",
      "description": "Optional legacy confirmation. Allowed customer IDs in GOOGLE_ADS_MUTATION_CUSTOMER_IDS are treated as implicit confirmation.",
      "default": false
    },
    "validate_only": {
      "type": "boolean",
      "description": "When guardrails allow an API call, ask Google Ads to validate the mutation without applying it.",
      "default": false
    },
    "partial_failure": {
      "type": "boolean",
      "description": "Enable Google Ads partial failure handling for supported mutate endpoints.",
      "default": false
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id",
    "name",
    "image_data_base64"
  ]
}
```

</details>

<a id="tool-ads_create_youtube_video_asset-ca760c6e"></a>

## ads_create_youtube_video_asset

Handler: Google Ads handler implements create youtube video asset through the product API.

```text
Safely create a reusable YouTube video asset from a YouTube video ID.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "youtube_video_id": {
      "type": "string",
      "description": "YouTube video ID, not the full URL."
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the mutation without calling Google Ads mutate endpoints. Defaults to false for allowlisted customers.",
      "default": false
    },
    "confirm": {
      "type": "boolean",
      "description": "Optional legacy confirmation. Allowed customer IDs in GOOGLE_ADS_MUTATION_CUSTOMER_IDS are treated as implicit confirmation.",
      "default": false
    },
    "validate_only": {
      "type": "boolean",
      "description": "When guardrails allow an API call, ask Google Ads to validate the mutation without applying it.",
      "default": false
    },
    "partial_failure": {
      "type": "boolean",
      "description": "Enable Google Ads partial failure handling for supported mutate endpoints.",
      "default": false
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id",
    "youtube_video_id"
  ]
}
```

</details>

<a id="tool-ads_link_asset_to_campaign-b893e08f"></a>

## ads_link_asset_to_campaign

Handler: Google Ads handler implements link asset to campaign through the product API.

```text
Safely link an existing asset to a campaign.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "campaign_id": {
      "type": "string",
      "description": "Campaign ID without dashes."
    },
    "asset_id": {
      "type": "string",
      "description": "Asset ID without dashes."
    },
    "field_type": {
      "type": "string",
      "description": "Asset field type, for example SITELINK.",
      "default": "SITELINK"
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the mutation without calling Google Ads mutate endpoints. Defaults to false for allowlisted customers.",
      "default": false
    },
    "confirm": {
      "type": "boolean",
      "description": "Optional legacy confirmation. Allowed customer IDs in GOOGLE_ADS_MUTATION_CUSTOMER_IDS are treated as implicit confirmation.",
      "default": false
    },
    "validate_only": {
      "type": "boolean",
      "description": "When guardrails allow an API call, ask Google Ads to validate the mutation without applying it.",
      "default": false
    },
    "partial_failure": {
      "type": "boolean",
      "description": "Enable Google Ads partial failure handling for supported mutate endpoints.",
      "default": false
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id",
    "campaign_id",
    "asset_id"
  ]
}
```

</details>

<a id="tool-ads_upload_offline_conversion-b892079c"></a>

## ads_upload_offline_conversion

Handler: Google Ads handler implements upload offline conversion through the product API.

```text
Safely upload offline click conversions. Dry-run is strongly recommended first.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "conversions": {
      "type": "array",
      "description": "Click conversions with gclid, conversion_action, conversion_date_time, and optional value/currency.",
      "items": {
        "type": "object"
      }
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the mutation without calling Google Ads mutate endpoints. Defaults to false for allowlisted customers.",
      "default": false
    },
    "confirm": {
      "type": "boolean",
      "description": "Optional legacy confirmation. Allowed customer IDs in GOOGLE_ADS_MUTATION_CUSTOMER_IDS are treated as implicit confirmation.",
      "default": false
    },
    "validate_only": {
      "type": "boolean",
      "description": "When guardrails allow an API call, ask Google Ads to validate the mutation without applying it.",
      "default": false
    },
    "partial_failure": {
      "type": "boolean",
      "description": "Enable Google Ads partial failure handling for supported mutate endpoints.",
      "default": false
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id",
    "conversions"
  ]
}
```

</details>

<a id="tool-ads_mutate_operations-bf60e4e1"></a>

## ads_mutate_operations

Handler: Google Ads handler implements mutate operations through the product API.

```text
Advanced safe mutate helper for Google Ads create/update operations. Remove operations are rejected.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/ads.js#L1-L4204) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string",
      "description": "Google Ads customer ID without dashes."
    },
    "endpoint_resource": {
      "type": "string",
      "description": "Resource collection endpoint, for example campaignBudgets, campaigns, campaignCriteria, adGroups, adGroupCriteria, adGroupAds, assets, campaignAssets."
    },
    "operations": {
      "type": "array",
      "description": "Raw Google Ads mutate operations. Operations containing remove are rejected.",
      "items": {
        "type": "object"
      }
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the mutation without calling Google Ads mutate endpoints. Defaults to false for allowlisted customers.",
      "default": false
    },
    "confirm": {
      "type": "boolean",
      "description": "Optional legacy confirmation. Allowed customer IDs in GOOGLE_ADS_MUTATION_CUSTOMER_IDS are treated as implicit confirmation.",
      "default": false
    },
    "validate_only": {
      "type": "boolean",
      "description": "When guardrails allow an API call, ask Google Ads to validate the mutation without applying it.",
      "default": false
    },
    "partial_failure": {
      "type": "boolean",
      "description": "Enable Google Ads partial failure handling for supported mutate endpoints.",
      "default": false
    },
    "login_customer_id": {
      "type": "string",
      "description": "Optional MCC ID override. Normally omitted because the MCP auto-discovers the correct manager account."
    }
  },
  "required": [
    "customer_id",
    "endpoint_resource",
    "operations"
  ]
}
```

</details>

<a id="tool-gtm_list_accounts-c5d9b27f"></a>

## gtm_list_accounts

Handler: Calls the GTM v2 list accounts API operation and returns its data.

```text
List all Google Tag Manager accounts available to the authenticated user.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/tag-manager.js#L1-L447) · Schema: literal-source.

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

<a id="tool-gtm_get_account-b0358265"></a>

## gtm_get_account

Handler: Calls the GTM v2 get account API operation and returns its data.

```text
Get one Google Tag Manager account.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/tag-manager.js#L1-L447) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Google Tag Manager account ID."
    }
  },
  "required": [
    "account_id"
  ]
}
```

</details>

<a id="tool-gtm_list_containers-e45afd2b"></a>

## gtm_list_containers

Handler: Calls the GTM v2 list containers API operation and returns its data.

```text
List containers in a Google Tag Manager account.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/tag-manager.js#L1-L447) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Google Tag Manager account ID."
    }
  },
  "required": [
    "account_id"
  ]
}
```

</details>

<a id="tool-gtm_get_container-fdc6e39c"></a>

## gtm_get_container

Handler: Calls the GTM v2 get container API operation and returns its data.

```text
Get full details for a Google Tag Manager container.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/tag-manager.js#L1-L447) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Google Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Google Tag Manager container ID."
    }
  },
  "required": [
    "account_id",
    "container_id"
  ]
}
```

</details>

<a id="tool-gtm_container_snippet-2f066ac5"></a>

## gtm_container_snippet

Handler: Calls containers.snippet for the selected container and returns installation code.

```text
Get the GTM container installation snippet.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/tag-manager.js#L1-L447) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Google Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Google Tag Manager container ID."
    }
  },
  "required": [
    "account_id",
    "container_id"
  ]
}
```

</details>

<a id="tool-gtm_list_workspaces-248ce86f"></a>

## gtm_list_workspaces

Handler: Calls the GTM v2 list workspaces API operation and returns its data.

```text
List workspaces in a Google Tag Manager container.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/tag-manager.js#L1-L447) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Google Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Google Tag Manager container ID."
    }
  },
  "required": [
    "account_id",
    "container_id"
  ]
}
```

</details>

<a id="tool-gtm_get_workspace-573c6822"></a>

## gtm_get_workspace

Handler: Calls the GTM v2 get workspace API operation and returns its data.

```text
Get one Google Tag Manager workspace.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/tag-manager.js#L1-L447) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Google Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Google Tag Manager container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Workspace ID.",
      "default": "1"
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

<a id="tool-gtm_workspace_status-8ba0f1f4"></a>

## gtm_workspace_status

Handler: Calls the GTM v2 workspace status API operation and returns its data.

```text
Get workspace sync/conflict/status details.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/tag-manager.js#L1-L447) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Google Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Google Tag Manager container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Workspace ID.",
      "default": "1"
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

<a id="tool-gtm_quick_preview-125bde55"></a>

## gtm_quick_preview

Handler: Requires confirm=true, then calls workspace quick\_preview and returns the preview state.

```text
Create a quick preview for a workspace. Requires confirm=true because it creates a preview state.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/tag-manager.js#L1-L447) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Google Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Google Tag Manager container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Workspace ID.",
      "default": "1"
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true before write, publish, or delete requests execute.",
      "default": false
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "confirm"
  ]
}
```

</details>

<a id="tool-gtm_list_tags-b585bc12"></a>

## gtm_list_tags

Handler: Ignores workspace\_id; scans up to three recent undeleted versions and every workspace, returning the largest matching entity collection with source metadata; failures are swallowed.

```text
List tags in a specific Google Tag Manager container.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/tag-manager.js#L1-L447) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Google Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Google Tag Manager container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Workspace ID.",
      "default": "1"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ]
}
```

</details>

<a id="tool-gtm_get_tag-3d242291"></a>

## gtm_get_tag

Handler: Calls the GTM v2 get tag API operation and returns its data.

```text
Get full details for one GTM tag in a workspace.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/tag-manager.js#L1-L447) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Google Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Google Tag Manager container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Workspace ID.",
      "default": "1"
    },
    "tag_id": {
      "type": "string",
      "description": "GTM tag ID."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "tag_id"
  ]
}
```

</details>

<a id="tool-gtm_list_triggers-16b41a3c"></a>

## gtm_list_triggers

Handler: Ignores workspace\_id; scans up to three recent undeleted versions and every workspace, returning the largest matching entity collection with source metadata; failures are swallowed.

```text
List triggers in a specific Google Tag Manager container.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/tag-manager.js#L1-L447) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Google Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Google Tag Manager container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Workspace ID.",
      "default": "1"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ]
}
```

</details>

<a id="tool-gtm_get_trigger-669e5c62"></a>

## gtm_get_trigger

Handler: Calls the GTM v2 get trigger API operation and returns its data.

```text
Get full details for one GTM trigger in a workspace.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/tag-manager.js#L1-L447) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Google Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Google Tag Manager container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Workspace ID.",
      "default": "1"
    },
    "trigger_id": {
      "type": "string",
      "description": "GTM trigger ID."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "trigger_id"
  ]
}
```

</details>

<a id="tool-gtm_list_variables-81705a80"></a>

## gtm_list_variables

Handler: Ignores workspace\_id; scans up to three recent undeleted versions and every workspace, returning the largest matching entity collection with source metadata; failures are swallowed.

```text
List variables in a specific Google Tag Manager container.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/tag-manager.js#L1-L447) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Google Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Google Tag Manager container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Workspace ID.",
      "default": "1"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ]
}
```

</details>

<a id="tool-gtm_get_variable-e6ff3763"></a>

## gtm_get_variable

Handler: Calls the GTM v2 get variable API operation and returns its data.

```text
Get full details for one GTM variable in a workspace.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/tag-manager.js#L1-L447) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Google Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Google Tag Manager container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Workspace ID.",
      "default": "1"
    },
    "variable_id": {
      "type": "string",
      "description": "GTM variable ID."
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "variable_id"
  ]
}
```

</details>

<a id="tool-gtm_list_built_in_variables-af7ccc4e"></a>

## gtm_list_built_in_variables

Handler: Calls the GTM v2 list built in variables API operation and returns its data.

```text
List enabled GTM built-in variables in a workspace.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/tag-manager.js#L1-L447) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Google Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Google Tag Manager container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Workspace ID.",
      "default": "1"
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

<a id="tool-gtm_list_folders-9da6c22f"></a>

## gtm_list_folders

Handler: Calls the GTM v2 list folders API operation and returns its data.

```text
List folders in a GTM workspace.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/tag-manager.js#L1-L447) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Google Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Google Tag Manager container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Workspace ID.",
      "default": "1"
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

<a id="tool-gtm_list_templates-8d77f0ae"></a>

## gtm_list_templates

Handler: Calls the GTM v2 list templates API operation and returns its data.

```text
List custom templates in a GTM workspace.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/tag-manager.js#L1-L447) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Google Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Google Tag Manager container ID."
    },
    "workspace_id": {
      "type": "string",
      "description": "Workspace ID.",
      "default": "1"
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

<a id="tool-gtm_container_versions-d260e0f8"></a>

## gtm_container_versions

Handler: Calls the GTM v2 container versions API operation and returns its data.

```text
List container versions and publish metadata.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/tag-manager.js#L1-L447) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Google Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Google Tag Manager container ID."
    }
  },
  "required": [
    "account_id",
    "container_id"
  ]
}
```

</details>

<a id="tool-gtm_live_version-8221d3cc"></a>

## gtm_live_version

Handler: Calls the GTM v2 live version API operation and returns its data.

```text
Get the currently live GTM container version.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/tag-manager.js#L1-L447) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Google Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Google Tag Manager container ID."
    }
  },
  "required": [
    "account_id",
    "container_id"
  ]
}
```

</details>

<a id="tool-gtm_get_version-c83b7c02"></a>

## gtm_get_version

Handler: Calls the GTM v2 get version API operation and returns its data.

```text
Get a specific GTM container version.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/tag-manager.js#L1-L447) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string",
      "description": "Google Tag Manager account ID."
    },
    "container_id": {
      "type": "string",
      "description": "Google Tag Manager container ID."
    },
    "version_id": {
      "type": "string",
      "description": "Container version ID."
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

<a id="tool-gtm_api_call-a8ba7385"></a>

## gtm_api_call

Handler: Sends the supplied HTTP method, relative GTM v2 path, query and body with OAuth bearer token; methods other than GET require confirm=true.

```text
Advanced GTM API call for create/update/delete/publish operations not covered by named tools. Non-GET requests require confirm=true.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/tag-manager.js#L1-L447) · Schema: literal-source.

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
      ],
      "description": "HTTP method."
    },
    "path": {
      "type": "string",
      "description": "Path relative to https://tagmanager.googleapis.com/tagmanager/v2/."
    },
    "query": {
      "type": "object",
      "description": "Optional query parameters."
    },
    "body": {
      "type": "object",
      "description": "Optional request body."
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true before write, publish, or delete requests execute.",
      "default": false
    }
  },
  "required": [
    "method",
    "path"
  ]
}
```

</details>

<a id="tool-gbp_list_accounts-d0179a8b"></a>

## gbp_list_accounts

Handler: Google Business Profile handler implements list accounts through the product API.

```text
List Business Profile accounts accessible to the OAuth user.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/business-profile.js#L1-L505) · Schema: literal-source.

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

<a id="tool-gbp_get_account-d7c87002"></a>

## gbp_get_account

Handler: Google Business Profile handler implements get account through the product API.

```text
Get one Business Profile account.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/business-profile.js#L1-L505) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_name": {
      "type": "string",
      "description": "accounts/{accountId}"
    }
  },
  "required": [
    "account_name"
  ]
}
```

</details>

<a id="tool-gbp_list_locations-e79f9888"></a>

## gbp_list_locations

Handler: Google Business Profile handler implements list locations through the product API.

```text
List locations for a Business Profile account.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/business-profile.js#L1-L505) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_name": {
      "type": "string",
      "description": "accounts/{accountId}"
    },
    "read_mask": {
      "type": "string",
      "description": "Comma-separated location fields."
    },
    "page_size": {
      "type": "number",
      "description": "Page size.",
      "default": 100
    },
    "page_token": {
      "type": "string",
      "description": "Optional next-page token."
    }
  },
  "required": [
    "account_name"
  ]
}
```

</details>

<a id="tool-gbp_get_location-710e9df3"></a>

## gbp_get_location

Handler: Google Business Profile handler implements get location through the product API.

```text
Get a Business Profile location.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/business-profile.js#L1-L505) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "location_name": {
      "type": "string",
      "description": "locations/{locationId}"
    },
    "read_mask": {
      "type": "string",
      "description": "Comma-separated location fields."
    }
  },
  "required": [
    "location_name"
  ]
}
```

</details>

<a id="tool-gbp_create_location-1eb666d4"></a>

## gbp_create_location

Handler: Google Business Profile handler implements create location through the product API.

```text
Create a Business Profile location.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/business-profile.js#L1-L505) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_name": {
      "type": "string",
      "description": "accounts/{accountId}"
    },
    "location": {
      "type": "object",
      "description": "Business Information API Location body.",
      "additionalProperties": true
    },
    "validate_only": {
      "type": "boolean",
      "default": false
    },
    "request_id": {
      "type": "string",
      "description": "Optional UUID used for duplicate detection."
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the request without changing Business Profile. Defaults to true.",
      "default": true
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true with dry_run=false and GBP_ENABLE_MUTATIONS=true before a write executes.",
      "default": false
    }
  },
  "required": [
    "account_name",
    "location"
  ]
}
```

</details>

<a id="tool-gbp_update_location-01c5c418"></a>

## gbp_update_location

Handler: Google Business Profile handler implements update location through the product API.

```text
Update fields on a Business Profile location.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/business-profile.js#L1-L505) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "location_name": {
      "type": "string",
      "description": "locations/{locationId}"
    },
    "update_mask": {
      "type": "string",
      "description": "Required comma-separated fields to update."
    },
    "location": {
      "type": "object",
      "description": "Business Information API Location body.",
      "additionalProperties": true
    },
    "validate_only": {
      "type": "boolean",
      "default": false
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the request without changing Business Profile. Defaults to true.",
      "default": true
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true with dry_run=false and GBP_ENABLE_MUTATIONS=true before a write executes.",
      "default": false
    }
  },
  "required": [
    "location_name",
    "update_mask",
    "location"
  ]
}
```

</details>

<a id="tool-gbp_delete_location-183a7959"></a>

## gbp_delete_location

Handler: Google Business Profile handler implements delete location through the product API.

```text
Delete a Business Profile location.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/business-profile.js#L1-L505) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "location_name": {
      "type": "string",
      "description": "locations/{locationId}"
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the request without changing Business Profile. Defaults to true.",
      "default": true
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true with dry_run=false and GBP_ENABLE_MUTATIONS=true before a write executes.",
      "default": false
    }
  },
  "required": [
    "location_name"
  ]
}
```

</details>

<a id="tool-gbp_list_reviews-0595b368"></a>

## gbp_list_reviews

Handler: Google Business Profile handler implements list reviews through the product API.

```text
List reviews for a location.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/business-profile.js#L1-L505) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "parent": {
      "type": "string",
      "description": "accounts/{accountId}/locations/{locationId}"
    },
    "order_by": {
      "type": "string"
    },
    "page_size": {
      "type": "number",
      "description": "Page size.",
      "default": 100
    },
    "page_token": {
      "type": "string",
      "description": "Optional next-page token."
    }
  },
  "required": [
    "parent"
  ]
}
```

</details>

<a id="tool-gbp_get_review-fc982f0b"></a>

## gbp_get_review

Handler: Google Business Profile handler implements get review through the product API.

```text
Get one review.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/business-profile.js#L1-L505) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "review_name": {
      "type": "string",
      "description": "accounts/{accountId}/locations/{locationId}/reviews/{reviewId}"
    }
  },
  "required": [
    "review_name"
  ]
}
```

</details>

<a id="tool-gbp_reply_to_review-08ce2128"></a>

## gbp_reply_to_review

Handler: Google Business Profile handler implements reply to review through the product API.

```text
Create or update the merchant reply to a review.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/business-profile.js#L1-L505) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "review_name": {
      "type": "string",
      "description": "accounts/{accountId}/locations/{locationId}/reviews/{reviewId}"
    },
    "comment": {
      "type": "string",
      "description": "Public merchant reply."
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the request without changing Business Profile. Defaults to true.",
      "default": true
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true with dry_run=false and GBP_ENABLE_MUTATIONS=true before a write executes.",
      "default": false
    }
  },
  "required": [
    "review_name",
    "comment"
  ]
}
```

</details>

<a id="tool-gbp_delete_review_reply-22ecc735"></a>

## gbp_delete_review_reply

Handler: Google Business Profile handler implements delete review reply through the product API.

```text
Delete the merchant reply from a review.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/business-profile.js#L1-L505) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "review_name": {
      "type": "string",
      "description": "accounts/{accountId}/locations/{locationId}/reviews/{reviewId}"
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the request without changing Business Profile. Defaults to true.",
      "default": true
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true with dry_run=false and GBP_ENABLE_MUTATIONS=true before a write executes.",
      "default": false
    }
  },
  "required": [
    "review_name"
  ]
}
```

</details>

<a id="tool-gbp_list_local_posts-c04bd408"></a>

## gbp_list_local_posts

Handler: Google Business Profile handler implements list local posts through the product API.

```text
List local posts for a location.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/business-profile.js#L1-L505) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "parent": {
      "type": "string",
      "description": "accounts/{accountId}/locations/{locationId}"
    },
    "page_size": {
      "type": "number",
      "description": "Page size.",
      "default": 100
    },
    "page_token": {
      "type": "string",
      "description": "Optional next-page token."
    }
  },
  "required": [
    "parent"
  ]
}
```

</details>

<a id="tool-gbp_create_local_post-c882804d"></a>

## gbp_create_local_post

Handler: Google Business Profile handler implements create local post through the product API.

```text
Create a local post.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/business-profile.js#L1-L505) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "parent": {
      "type": "string",
      "description": "accounts/{accountId}/locations/{locationId}"
    },
    "local_post": {
      "type": "object",
      "description": "Official Google Business Profile API request body.",
      "additionalProperties": true
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the request without changing Business Profile. Defaults to true.",
      "default": true
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true with dry_run=false and GBP_ENABLE_MUTATIONS=true before a write executes.",
      "default": false
    }
  },
  "required": [
    "parent",
    "local_post"
  ]
}
```

</details>

<a id="tool-gbp_update_local_post-495564f7"></a>

## gbp_update_local_post

Handler: Google Business Profile handler implements update local post through the product API.

```text
Update a local post.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/business-profile.js#L1-L505) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "post_name": {
      "type": "string",
      "description": "accounts/{accountId}/locations/{locationId}/localPosts/{postId}"
    },
    "update_mask": {
      "type": "string"
    },
    "local_post": {
      "type": "object",
      "description": "Official Google Business Profile API request body.",
      "additionalProperties": true
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the request without changing Business Profile. Defaults to true.",
      "default": true
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true with dry_run=false and GBP_ENABLE_MUTATIONS=true before a write executes.",
      "default": false
    }
  },
  "required": [
    "post_name",
    "update_mask",
    "local_post"
  ]
}
```

</details>

<a id="tool-gbp_delete_local_post-a11468f0"></a>

## gbp_delete_local_post

Handler: Google Business Profile handler implements delete local post through the product API.

```text
Delete a local post.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/business-profile.js#L1-L505) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "post_name": {
      "type": "string",
      "description": "accounts/{accountId}/locations/{locationId}/localPosts/{postId}"
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the request without changing Business Profile. Defaults to true.",
      "default": true
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true with dry_run=false and GBP_ENABLE_MUTATIONS=true before a write executes.",
      "default": false
    }
  },
  "required": [
    "post_name"
  ]
}
```

</details>

<a id="tool-gbp_list_media-1c03d57b"></a>

## gbp_list_media

Handler: Google Business Profile handler implements list media through the product API.

```text
List owner media for a location.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/business-profile.js#L1-L505) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "parent": {
      "type": "string",
      "description": "accounts/{accountId}/locations/{locationId}"
    },
    "page_size": {
      "type": "number",
      "description": "Page size.",
      "default": 100
    },
    "page_token": {
      "type": "string",
      "description": "Optional next-page token."
    }
  },
  "required": [
    "parent"
  ]
}
```

</details>

<a id="tool-gbp_create_media-4abfd0bd"></a>

## gbp_create_media

Handler: Google Business Profile handler implements create media through the product API.

```text
Create a media item after uploading or by source URL.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/business-profile.js#L1-L505) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "parent": {
      "type": "string",
      "description": "accounts/{accountId}/locations/{locationId}"
    },
    "media_item": {
      "type": "object",
      "description": "Official Google Business Profile API request body.",
      "additionalProperties": true
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the request without changing Business Profile. Defaults to true.",
      "default": true
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true with dry_run=false and GBP_ENABLE_MUTATIONS=true before a write executes.",
      "default": false
    }
  },
  "required": [
    "parent",
    "media_item"
  ]
}
```

</details>

<a id="tool-gbp_delete_media-ff02c643"></a>

## gbp_delete_media

Handler: Google Business Profile handler implements delete media through the product API.

```text
Delete an owner media item.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/business-profile.js#L1-L505) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "media_name": {
      "type": "string",
      "description": "accounts/{accountId}/locations/{locationId}/media/{mediaId}"
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the request without changing Business Profile. Defaults to true.",
      "default": true
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true with dry_run=false and GBP_ENABLE_MUTATIONS=true before a write executes.",
      "default": false
    }
  },
  "required": [
    "media_name"
  ]
}
```

</details>

<a id="tool-gbp_list_verifications-2bf7ff9a"></a>

## gbp_list_verifications

Handler: Google Business Profile handler implements list verifications through the product API.

```text
List verification attempts for a location.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/business-profile.js#L1-L505) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "location_name": {
      "type": "string",
      "description": "locations/{locationId}"
    },
    "page_size": {
      "type": "number",
      "description": "Page size.",
      "default": 100
    },
    "page_token": {
      "type": "string",
      "description": "Optional next-page token."
    }
  },
  "required": [
    "location_name"
  ]
}
```

</details>

<a id="tool-gbp_fetch_verification_options-f96371bb"></a>

## gbp_fetch_verification_options

Handler: Google Business Profile handler implements fetch verification options through the product API.

```text
Fetch eligible verification methods.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/business-profile.js#L1-L505) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "location_name": {
      "type": "string",
      "description": "locations/{locationId}"
    },
    "language_code": {
      "type": "string",
      "description": "BCP 47 language code."
    },
    "context": {
      "type": "object",
      "description": "Optional service-business context.",
      "additionalProperties": true
    }
  },
  "required": [
    "location_name",
    "language_code"
  ]
}
```

</details>

<a id="tool-gbp_verify_location-416b6739"></a>

## gbp_verify_location

Handler: Google Business Profile handler implements verify location through the product API.

```text
Start location verification.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/business-profile.js#L1-L505) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "location_name": {
      "type": "string",
      "description": "locations/{locationId}"
    },
    "verification": {
      "type": "object",
      "description": "VerifyLocation request body.",
      "additionalProperties": true
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the request without changing Business Profile. Defaults to true.",
      "default": true
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true with dry_run=false and GBP_ENABLE_MUTATIONS=true before a write executes.",
      "default": false
    }
  },
  "required": [
    "location_name",
    "verification"
  ]
}
```

</details>

<a id="tool-gbp_complete_verification-2b1ff458"></a>

## gbp_complete_verification

Handler: Google Business Profile handler implements complete verification through the product API.

```text
Complete a pending verification.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/business-profile.js#L1-L505) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "verification_name": {
      "type": "string",
      "description": "locations/{locationId}/verifications/{verificationId}"
    },
    "pin": {
      "type": "string",
      "description": "Verification PIN."
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the request without changing Business Profile. Defaults to true.",
      "default": true
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true with dry_run=false and GBP_ENABLE_MUTATIONS=true before a write executes.",
      "default": false
    }
  },
  "required": [
    "verification_name",
    "pin"
  ]
}
```

</details>

<a id="tool-gbp_get_voice_of_merchant-31b9861a"></a>

## gbp_get_voice_of_merchant

Handler: Google Business Profile handler implements get voice of merchant through the product API.

```text
Get Voice of Merchant state for a location.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/business-profile.js#L1-L505) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "location_name": {
      "type": "string",
      "description": "locations/{locationId}"
    }
  },
  "required": [
    "location_name"
  ]
}
```

</details>

<a id="tool-gbp_list_categories-a184f1c7"></a>

## gbp_list_categories

Handler: Google Business Profile handler implements list categories through the product API.

```text
List matching Business Profile categories.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/business-profile.js#L1-L505) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "region_code": {
      "type": "string"
    },
    "language_code": {
      "type": "string"
    },
    "filter": {
      "type": "string"
    },
    "view": {
      "type": "string",
      "enum": [
        "BASIC",
        "FULL"
      ]
    },
    "page_size": {
      "type": "number",
      "description": "Page size.",
      "default": 100
    },
    "page_token": {
      "type": "string",
      "description": "Optional next-page token."
    }
  },
  "required": [
    "region_code",
    "language_code"
  ]
}
```

</details>

<a id="tool-gbp_list_attributes-2a93123f"></a>

## gbp_list_attributes

Handler: Google Business Profile handler implements list attributes through the product API.

```text
List available attributes for a category and region.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/business-profile.js#L1-L505) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "parent": {
      "type": "string",
      "description": "locations/{locationId} or categories/{categoryId}"
    },
    "category_name": {
      "type": "string"
    },
    "region_code": {
      "type": "string"
    },
    "language_code": {
      "type": "string"
    },
    "show_all": {
      "type": "boolean",
      "default": false
    },
    "page_size": {
      "type": "number",
      "description": "Page size.",
      "default": 100
    },
    "page_token": {
      "type": "string",
      "description": "Optional next-page token."
    }
  },
  "required": []
}
```

</details>

<a id="tool-gbp_get_notification_setting-1fa2d2a1"></a>

## gbp_get_notification_setting

Handler: Google Business Profile handler implements get notification setting through the product API.

```text
Get Pub/Sub notification settings for an account.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/business-profile.js#L1-L505) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_name": {
      "type": "string",
      "description": "accounts/{accountId}"
    }
  },
  "required": [
    "account_name"
  ]
}
```

</details>

<a id="tool-gbp_update_notification_setting-dcae035e"></a>

## gbp_update_notification_setting

Handler: Google Business Profile handler implements update notification setting through the product API.

```text
Update Pub/Sub notification settings.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/business-profile.js#L1-L505) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_name": {
      "type": "string",
      "description": "accounts/{accountId}"
    },
    "update_mask": {
      "type": "string"
    },
    "notification_setting": {
      "type": "object",
      "description": "Official Google Business Profile API request body.",
      "additionalProperties": true
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the request without changing Business Profile. Defaults to true.",
      "default": true
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true with dry_run=false and GBP_ENABLE_MUTATIONS=true before a write executes.",
      "default": false
    }
  },
  "required": [
    "account_name",
    "update_mask",
    "notification_setting"
  ]
}
```

</details>

<a id="tool-gbp_list_place_action_links-8b3ff5d7"></a>

## gbp_list_place_action_links

Handler: Google Business Profile handler implements list place action links through the product API.

```text
List booking/order/action links for a location.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/business-profile.js#L1-L505) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "location_name": {
      "type": "string",
      "description": "locations/{locationId}"
    },
    "filter": {
      "type": "string"
    },
    "page_size": {
      "type": "number",
      "description": "Page size.",
      "default": 100
    },
    "page_token": {
      "type": "string",
      "description": "Optional next-page token."
    }
  },
  "required": [
    "location_name"
  ]
}
```

</details>

<a id="tool-gbp_create_place_action_link-f8d52347"></a>

## gbp_create_place_action_link

Handler: Google Business Profile handler implements create place action link through the product API.

```text
Create a place action link.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/business-profile.js#L1-L505) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "location_name": {
      "type": "string",
      "description": "locations/{locationId}"
    },
    "place_action_link": {
      "type": "object",
      "description": "Official Google Business Profile API request body.",
      "additionalProperties": true
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the request without changing Business Profile. Defaults to true.",
      "default": true
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true with dry_run=false and GBP_ENABLE_MUTATIONS=true before a write executes.",
      "default": false
    }
  },
  "required": [
    "location_name",
    "place_action_link"
  ]
}
```

</details>

<a id="tool-gbp_update_place_action_link-80f5ebfd"></a>

## gbp_update_place_action_link

Handler: Google Business Profile handler implements update place action link through the product API.

```text
Update a place action link.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/business-profile.js#L1-L505) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "link_name": {
      "type": "string",
      "description": "locations/{locationId}/placeActionLinks/{linkId}"
    },
    "update_mask": {
      "type": "string"
    },
    "place_action_link": {
      "type": "object",
      "description": "Official Google Business Profile API request body.",
      "additionalProperties": true
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the request without changing Business Profile. Defaults to true.",
      "default": true
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true with dry_run=false and GBP_ENABLE_MUTATIONS=true before a write executes.",
      "default": false
    }
  },
  "required": [
    "link_name",
    "update_mask",
    "place_action_link"
  ]
}
```

</details>

<a id="tool-gbp_delete_place_action_link-26f4321f"></a>

## gbp_delete_place_action_link

Handler: Google Business Profile handler implements delete place action link through the product API.

```text
Delete a place action link.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/business-profile.js#L1-L505) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "link_name": {
      "type": "string",
      "description": "locations/{locationId}/placeActionLinks/{linkId}"
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the request without changing Business Profile. Defaults to true.",
      "default": true
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true with dry_run=false and GBP_ENABLE_MUTATIONS=true before a write executes.",
      "default": false
    }
  },
  "required": [
    "link_name"
  ]
}
```

</details>

<a id="tool-gbp_get_lodging-ac786c23"></a>

## gbp_get_lodging

Handler: Google Business Profile handler implements get lodging through the product API.

```text
Get lodging data for a hotel location.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/business-profile.js#L1-L505) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "location_name": {
      "type": "string",
      "description": "locations/{locationId}"
    },
    "read_mask": {
      "type": "string"
    }
  },
  "required": [
    "location_name"
  ]
}
```

</details>

<a id="tool-gbp_update_lodging-45063788"></a>

## gbp_update_lodging

Handler: Google Business Profile handler implements update lodging through the product API.

```text
Update lodging data for a hotel location.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/business-profile.js#L1-L505) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "location_name": {
      "type": "string",
      "description": "locations/{locationId}"
    },
    "update_mask": {
      "type": "string"
    },
    "lodging": {
      "type": "object",
      "description": "Official Google Business Profile API request body.",
      "additionalProperties": true
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the request without changing Business Profile. Defaults to true.",
      "default": true
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true with dry_run=false and GBP_ENABLE_MUTATIONS=true before a write executes.",
      "default": false
    }
  },
  "required": [
    "location_name",
    "update_mask",
    "lodging"
  ]
}
```

</details>

<a id="tool-gbp_performance-7c929fb7"></a>

## gbp_performance

Handler: Google Business Profile handler implements performance through the product API.

```text
Fetch daily Business Profile performance metrics.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/business-profile.js#L1-L505) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "location_name": {
      "type": "string",
      "description": "locations/{locationId}"
    },
    "start_date": {
      "type": "string"
    },
    "end_date": {
      "type": "string"
    },
    "daily_metrics": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  },
  "required": [
    "location_name",
    "start_date",
    "end_date",
    "daily_metrics"
  ]
}
```

</details>

<a id="tool-gbp_search_keyword_impressions-3d72a707"></a>

## gbp_search_keyword_impressions

Handler: Google Business Profile handler implements search keyword impressions through the product API.

```text
Fetch monthly search keyword impressions.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/business-profile.js#L1-L505) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "location_name": {
      "type": "string",
      "description": "locations/{locationId}"
    },
    "start_month": {
      "type": "string"
    },
    "end_month": {
      "type": "string"
    },
    "page_size": {
      "type": "number",
      "description": "Page size.",
      "default": 100
    },
    "page_token": {
      "type": "string",
      "description": "Optional next-page token."
    }
  },
  "required": [
    "location_name",
    "start_month",
    "end_month"
  ]
}
```

</details>

<a id="tool-gbp_api_call-c744cfc5"></a>

## gbp_api_call

Handler: Google Business Profile handler implements api call through the product API.

```text
Call any documented Business Profile REST endpoint using a fixed Google service allowlist.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/business-profile.js#L1-L505) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "service": {
      "type": "string",
      "enum": [
        "account_management",
        "business_information",
        "performance",
        "notifications",
        "verifications",
        "lodging",
        "place_actions",
        "legacy_v4",
        "media_v1"
      ]
    },
    "method": {
      "type": "string",
      "enum": [
        "GET",
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
      ],
      "default": "GET"
    },
    "path": {
      "type": "string",
      "description": "Relative API path only; full URLs are rejected."
    },
    "query": {
      "type": "object",
      "description": "Optional query parameters.",
      "additionalProperties": true
    },
    "body": {
      "type": "object",
      "description": "Official Google Business Profile API request body.",
      "additionalProperties": true
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the request without changing Business Profile. Defaults to true.",
      "default": true
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true with dry_run=false and GBP_ENABLE_MUTATIONS=true before a write executes.",
      "default": false
    }
  },
  "required": [
    "service",
    "method",
    "path"
  ]
}
```

</details>

<a id="tool-merchant_list_accounts-d9236595"></a>

## merchant_list_accounts

Handler: Google Merchant Center handler implements list accounts through the product API.

```text
List Merchant Center accounts accessible to the OAuth user.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/merchant-center.js#L1-L497) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "page_size": {
      "type": "number",
      "description": "Page size.",
      "default": 100
    },
    "page_token": {
      "type": "string",
      "description": "Optional next-page token."
    }
  },
  "required": []
}
```

</details>

<a id="tool-merchant_get_account-bce7e265"></a>

## merchant_get_account

Handler: Google Merchant Center handler implements get account through the product API.

```text
Get one Merchant Center account.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/merchant-center.js#L1-L497) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_name": {
      "type": "string",
      "description": "accounts/{accountId}"
    }
  },
  "required": [
    "account_name"
  ]
}
```

</details>

<a id="tool-merchant_get_developer_registration-f57deb87"></a>

## merchant_get_developer_registration

Handler: Google Merchant Center handler implements get developer registration through the product API.

```text
Get the Google Cloud project registration for a Merchant Center account.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/merchant-center.js#L1-L497) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_name": {
      "type": "string",
      "description": "accounts/{accountId}"
    },
    "account_id": {
      "type": "string",
      "description": "Legacy shorthand Merchant Center account ID."
    }
  },
  "required": []
}
```

</details>

<a id="tool-merchant_register_gcp-40ab57fe"></a>

## merchant_register_gcp

Handler: Google Merchant Center handler implements register gcp through the product API.

```text
Register the current Google Cloud project and developer contact with a Merchant Center account.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/merchant-center.js#L1-L497) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_name": {
      "type": "string",
      "description": "accounts/{accountId}"
    },
    "account_id": {
      "type": "string",
      "description": "Legacy shorthand Merchant Center account ID."
    },
    "developer_email": {
      "type": "string",
      "format": "email",
      "description": "Developer contact that will receive the API_DEVELOPER role or invitation."
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the Merchant API request without changing data. Defaults to true.",
      "default": true
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true with dry_run=false and MERCHANT_ENABLE_MUTATIONS=true before a write executes.",
      "default": false
    }
  },
  "required": [
    "developer_email"
  ]
}
```

</details>

<a id="tool-merchant_list_subaccounts-84d25390"></a>

## merchant_list_subaccounts

Handler: Google Merchant Center handler implements list subaccounts through the product API.

```text
List subaccounts under an advanced account.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/merchant-center.js#L1-L497) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_name": {
      "type": "string",
      "description": "accounts/{accountId}"
    },
    "account_id": {
      "type": "string",
      "description": "Legacy shorthand Merchant Center account ID."
    },
    "page_size": {
      "type": "number",
      "description": "Page size.",
      "default": 100
    },
    "page_token": {
      "type": "string",
      "description": "Optional next-page token."
    }
  },
  "required": []
}
```

</details>

<a id="tool-merchant_create_and_configure_account-6cde0887"></a>

## merchant_create_and_configure_account

Handler: Google Merchant Center handler implements create and configure account through the product API.

```text
Create and configure a Merchant Center account.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/merchant-center.js#L1-L497) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "request": {
      "type": "object",
      "description": "CreateAndConfigureAccount request body.",
      "additionalProperties": true
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the Merchant API request without changing data. Defaults to true.",
      "default": true
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true with dry_run=false and MERCHANT_ENABLE_MUTATIONS=true before a write executes.",
      "default": false
    }
  },
  "required": [
    "request"
  ]
}
```

</details>

<a id="tool-merchant_update_account-838fe87f"></a>

## merchant_update_account

Handler: Google Merchant Center handler implements update account through the product API.

```text
Update a Merchant Center account.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/merchant-center.js#L1-L497) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_name": {
      "type": "string",
      "description": "accounts/{accountId}"
    },
    "update_mask": {
      "type": "string"
    },
    "account": {
      "type": "object",
      "description": "Official Merchant API request body.",
      "additionalProperties": true
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the Merchant API request without changing data. Defaults to true.",
      "default": true
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true with dry_run=false and MERCHANT_ENABLE_MUTATIONS=true before a write executes.",
      "default": false
    }
  },
  "required": [
    "account_name",
    "update_mask",
    "account"
  ]
}
```

</details>

<a id="tool-merchant_delete_account-7028c371"></a>

## merchant_delete_account

Handler: Google Merchant Center handler implements delete account through the product API.

```text
Delete a Merchant Center account.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/merchant-center.js#L1-L497) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_name": {
      "type": "string",
      "description": "accounts/{accountId}"
    },
    "force": {
      "type": "boolean",
      "default": false
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the Merchant API request without changing data. Defaults to true.",
      "default": true
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true with dry_run=false and MERCHANT_ENABLE_MUTATIONS=true before a write executes.",
      "default": false
    }
  },
  "required": [
    "account_name"
  ]
}
```

</details>

<a id="tool-merchant_list_products-99f1d7af"></a>

## merchant_list_products

Handler: Google Merchant Center handler implements list products through the product API.

```text
List processed products.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/merchant-center.js#L1-L497) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_name": {
      "type": "string",
      "description": "accounts/{accountId}"
    },
    "account_id": {
      "type": "string",
      "description": "Legacy shorthand Merchant Center account ID."
    },
    "page_size": {
      "type": "number",
      "description": "Page size.",
      "default": 100
    },
    "page_token": {
      "type": "string",
      "description": "Optional next-page token."
    }
  },
  "required": []
}
```

</details>

<a id="tool-merchant_get_product-45fa6d25"></a>

## merchant_get_product

Handler: Google Merchant Center handler implements get product through the product API.

```text
Get one processed product.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/merchant-center.js#L1-L497) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "product_name": {
      "type": "string",
      "description": "accounts/{accountId}/products/{product}"
    }
  },
  "required": [
    "product_name"
  ]
}
```

</details>

<a id="tool-merchant_insert_product_input-909545a7"></a>

## merchant_insert_product_input

Handler: Google Merchant Center handler implements insert product input through the product API.

```text
Insert a product input into a data source.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/merchant-center.js#L1-L497) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_name": {
      "type": "string",
      "description": "accounts/{accountId}"
    },
    "data_source": {
      "type": "string",
      "description": "accounts/{accountId}/dataSources/{dataSourceId}"
    },
    "product_input": {
      "type": "object",
      "description": "ProductInput body.",
      "additionalProperties": true
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the Merchant API request without changing data. Defaults to true.",
      "default": true
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true with dry_run=false and MERCHANT_ENABLE_MUTATIONS=true before a write executes.",
      "default": false
    }
  },
  "required": [
    "account_name",
    "data_source",
    "product_input"
  ]
}
```

</details>

<a id="tool-merchant_update_product_input-b0306a50"></a>

## merchant_update_product_input

Handler: Google Merchant Center handler implements update product input through the product API.

```text
Patch a product input.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/merchant-center.js#L1-L497) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "product_input_name": {
      "type": "string",
      "description": "accounts/{accountId}/productInputs/{productInput}"
    },
    "data_source": {
      "type": "string",
      "description": "accounts/{accountId}/dataSources/{dataSourceId}"
    },
    "update_mask": {
      "type": "string"
    },
    "product_input": {
      "type": "object",
      "description": "ProductInput body.",
      "additionalProperties": true
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the Merchant API request without changing data. Defaults to true.",
      "default": true
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true with dry_run=false and MERCHANT_ENABLE_MUTATIONS=true before a write executes.",
      "default": false
    }
  },
  "required": [
    "product_input_name",
    "data_source",
    "update_mask",
    "product_input"
  ]
}
```

</details>

<a id="tool-merchant_delete_product_input-5205c642"></a>

## merchant_delete_product_input

Handler: Google Merchant Center handler implements delete product input through the product API.

```text
Delete a product input.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/merchant-center.js#L1-L497) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "product_input_name": {
      "type": "string",
      "description": "accounts/{accountId}/productInputs/{productInput}"
    },
    "data_source": {
      "type": "string",
      "description": "accounts/{accountId}/dataSources/{dataSourceId}"
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the Merchant API request without changing data. Defaults to true.",
      "default": true
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true with dry_run=false and MERCHANT_ENABLE_MUTATIONS=true before a write executes.",
      "default": false
    }
  },
  "required": [
    "product_input_name",
    "data_source"
  ]
}
```

</details>

<a id="tool-merchant_list_data_sources-027952e1"></a>

## merchant_list_data_sources

Handler: Google Merchant Center handler implements list data sources through the product API.

```text
List data source configurations.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/merchant-center.js#L1-L497) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_name": {
      "type": "string",
      "description": "accounts/{accountId}"
    },
    "page_size": {
      "type": "number",
      "description": "Page size.",
      "default": 100
    },
    "page_token": {
      "type": "string",
      "description": "Optional next-page token."
    }
  },
  "required": [
    "account_name"
  ]
}
```

</details>

<a id="tool-merchant_get_data_source-7b0cfbc2"></a>

## merchant_get_data_source

Handler: Google Merchant Center handler implements get data source through the product API.

```text
Get one data source configuration.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/merchant-center.js#L1-L497) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "data_source_name": {
      "type": "string",
      "description": "accounts/{accountId}/dataSources/{dataSourceId}"
    }
  },
  "required": [
    "data_source_name"
  ]
}
```

</details>

<a id="tool-merchant_create_data_source-1c33ad55"></a>

## merchant_create_data_source

Handler: Google Merchant Center handler implements create data source through the product API.

```text
Create a data source configuration.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/merchant-center.js#L1-L497) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_name": {
      "type": "string",
      "description": "accounts/{accountId}"
    },
    "data_source": {
      "type": "object",
      "description": "Official Merchant API request body.",
      "additionalProperties": true
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the Merchant API request without changing data. Defaults to true.",
      "default": true
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true with dry_run=false and MERCHANT_ENABLE_MUTATIONS=true before a write executes.",
      "default": false
    }
  },
  "required": [
    "account_name",
    "data_source"
  ]
}
```

</details>

<a id="tool-merchant_update_data_source-9b497eda"></a>

## merchant_update_data_source

Handler: Google Merchant Center handler implements update data source through the product API.

```text
Update a data source configuration.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/merchant-center.js#L1-L497) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "data_source_name": {
      "type": "string",
      "description": "accounts/{accountId}/dataSources/{dataSourceId}"
    },
    "update_mask": {
      "type": "string"
    },
    "data_source": {
      "type": "object",
      "description": "Official Merchant API request body.",
      "additionalProperties": true
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the Merchant API request without changing data. Defaults to true.",
      "default": true
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true with dry_run=false and MERCHANT_ENABLE_MUTATIONS=true before a write executes.",
      "default": false
    }
  },
  "required": [
    "data_source_name",
    "update_mask",
    "data_source"
  ]
}
```

</details>

<a id="tool-merchant_delete_data_source-39960f2b"></a>

## merchant_delete_data_source

Handler: Google Merchant Center handler implements delete data source through the product API.

```text
Delete a data source configuration.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/merchant-center.js#L1-L497) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "data_source_name": {
      "type": "string",
      "description": "accounts/{accountId}/dataSources/{dataSourceId}"
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the Merchant API request without changing data. Defaults to true.",
      "default": true
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true with dry_run=false and MERCHANT_ENABLE_MUTATIONS=true before a write executes.",
      "default": false
    }
  },
  "required": [
    "data_source_name"
  ]
}
```

</details>

<a id="tool-merchant_fetch_data_source-aa66be92"></a>

## merchant_fetch_data_source

Handler: Google Merchant Center handler implements fetch data source through the product API.

```text
Trigger an immediate fetch for a file data source.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/merchant-center.js#L1-L497) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "data_source_name": {
      "type": "string",
      "description": "accounts/{accountId}/dataSources/{dataSourceId}"
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the Merchant API request without changing data. Defaults to true.",
      "default": true
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true with dry_run=false and MERCHANT_ENABLE_MUTATIONS=true before a write executes.",
      "default": false
    }
  },
  "required": [
    "data_source_name"
  ]
}
```

</details>

<a id="tool-merchant_list_promotions-d8f5a2d3"></a>

## merchant_list_promotions

Handler: Google Merchant Center handler implements list promotions through the product API.

```text
List Merchant Center promotions.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/merchant-center.js#L1-L497) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_name": {
      "type": "string",
      "description": "accounts/{accountId}"
    },
    "page_size": {
      "type": "number",
      "description": "Page size.",
      "default": 100
    },
    "page_token": {
      "type": "string",
      "description": "Optional next-page token."
    }
  },
  "required": [
    "account_name"
  ]
}
```

</details>

<a id="tool-merchant_get_promotion-a43764af"></a>

## merchant_get_promotion

Handler: Google Merchant Center handler implements get promotion through the product API.

```text
Get one promotion.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/merchant-center.js#L1-L497) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "promotion_name": {
      "type": "string",
      "description": "accounts/{accountId}/promotions/{promotion}"
    }
  },
  "required": [
    "promotion_name"
  ]
}
```

</details>

<a id="tool-merchant_insert_promotion-f10965e2"></a>

## merchant_insert_promotion

Handler: Google Merchant Center handler implements insert promotion through the product API.

```text
Insert a promotion.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/merchant-center.js#L1-L497) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_name": {
      "type": "string",
      "description": "accounts/{accountId}"
    },
    "data_source": {
      "type": "string",
      "description": "accounts/{accountId}/dataSources/{dataSourceId}"
    },
    "promotion": {
      "type": "object",
      "description": "Official Merchant API request body.",
      "additionalProperties": true
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the Merchant API request without changing data. Defaults to true.",
      "default": true
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true with dry_run=false and MERCHANT_ENABLE_MUTATIONS=true before a write executes.",
      "default": false
    }
  },
  "required": [
    "account_name",
    "data_source",
    "promotion"
  ]
}
```

</details>

<a id="tool-merchant_list_local_inventories-9f83f7f0"></a>

## merchant_list_local_inventories

Handler: Google Merchant Center handler implements list local inventories through the product API.

```text
List local inventory for a product.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/merchant-center.js#L1-L497) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "product_name": {
      "type": "string",
      "description": "accounts/{accountId}/products/{product}"
    },
    "page_size": {
      "type": "number",
      "description": "Page size.",
      "default": 100
    },
    "page_token": {
      "type": "string",
      "description": "Optional next-page token."
    }
  },
  "required": [
    "product_name"
  ]
}
```

</details>

<a id="tool-merchant_insert_local_inventory-63d93a48"></a>

## merchant_insert_local_inventory

Handler: Google Merchant Center handler implements insert local inventory through the product API.

```text
Insert local inventory for a product.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/merchant-center.js#L1-L497) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "product_name": {
      "type": "string",
      "description": "accounts/{accountId}/products/{product}"
    },
    "local_inventory": {
      "type": "object",
      "description": "Official Merchant API request body.",
      "additionalProperties": true
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the Merchant API request without changing data. Defaults to true.",
      "default": true
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true with dry_run=false and MERCHANT_ENABLE_MUTATIONS=true before a write executes.",
      "default": false
    }
  },
  "required": [
    "product_name",
    "local_inventory"
  ]
}
```

</details>

<a id="tool-merchant_delete_local_inventory-9c1a8277"></a>

## merchant_delete_local_inventory

Handler: Google Merchant Center handler implements delete local inventory through the product API.

```text
Delete local inventory.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/merchant-center.js#L1-L497) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "inventory_name": {
      "type": "string",
      "description": "accounts/{accountId}/products/{product}/localInventories/{storeCode}"
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the Merchant API request without changing data. Defaults to true.",
      "default": true
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true with dry_run=false and MERCHANT_ENABLE_MUTATIONS=true before a write executes.",
      "default": false
    }
  },
  "required": [
    "inventory_name"
  ]
}
```

</details>

<a id="tool-merchant_list_regional_inventories-10ac27a7"></a>

## merchant_list_regional_inventories

Handler: Google Merchant Center handler implements list regional inventories through the product API.

```text
List regional inventory for a product.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/merchant-center.js#L1-L497) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "product_name": {
      "type": "string",
      "description": "accounts/{accountId}/products/{product}"
    },
    "page_size": {
      "type": "number",
      "description": "Page size.",
      "default": 100
    },
    "page_token": {
      "type": "string",
      "description": "Optional next-page token."
    }
  },
  "required": [
    "product_name"
  ]
}
```

</details>

<a id="tool-merchant_insert_regional_inventory-bda62048"></a>

## merchant_insert_regional_inventory

Handler: Google Merchant Center handler implements insert regional inventory through the product API.

```text
Insert regional inventory for a product.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/merchant-center.js#L1-L497) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "product_name": {
      "type": "string",
      "description": "accounts/{accountId}/products/{product}"
    },
    "regional_inventory": {
      "type": "object",
      "description": "Official Merchant API request body.",
      "additionalProperties": true
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the Merchant API request without changing data. Defaults to true.",
      "default": true
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true with dry_run=false and MERCHANT_ENABLE_MUTATIONS=true before a write executes.",
      "default": false
    }
  },
  "required": [
    "product_name",
    "regional_inventory"
  ]
}
```

</details>

<a id="tool-merchant_delete_regional_inventory-855187e7"></a>

## merchant_delete_regional_inventory

Handler: Google Merchant Center handler implements delete regional inventory through the product API.

```text
Delete regional inventory.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/merchant-center.js#L1-L497) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "inventory_name": {
      "type": "string",
      "description": "accounts/{accountId}/products/{product}/regionalInventories/{region}"
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the Merchant API request without changing data. Defaults to true.",
      "default": true
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true with dry_run=false and MERCHANT_ENABLE_MUTATIONS=true before a write executes.",
      "default": false
    }
  },
  "required": [
    "inventory_name"
  ]
}
```

</details>

<a id="tool-merchant_list_conversion_sources-3280cda1"></a>

## merchant_list_conversion_sources

Handler: Google Merchant Center handler implements list conversion sources through the product API.

```text
List conversion sources.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/merchant-center.js#L1-L497) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_name": {
      "type": "string",
      "description": "accounts/{accountId}"
    },
    "page_size": {
      "type": "number",
      "description": "Page size.",
      "default": 100
    },
    "page_token": {
      "type": "string",
      "description": "Optional next-page token."
    }
  },
  "required": [
    "account_name"
  ]
}
```

</details>

<a id="tool-merchant_get_conversion_source-f851ed40"></a>

## merchant_get_conversion_source

Handler: Google Merchant Center handler implements get conversion source through the product API.

```text
Get one conversion source.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/merchant-center.js#L1-L497) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "conversion_source_name": {
      "type": "string",
      "description": "accounts/{accountId}/conversionSources/{sourceId}"
    }
  },
  "required": [
    "conversion_source_name"
  ]
}
```

</details>

<a id="tool-merchant_create_conversion_source-dba08018"></a>

## merchant_create_conversion_source

Handler: Google Merchant Center handler implements create conversion source through the product API.

```text
Create a conversion source.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/merchant-center.js#L1-L497) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_name": {
      "type": "string",
      "description": "accounts/{accountId}"
    },
    "conversion_source": {
      "type": "object",
      "description": "Official Merchant API request body.",
      "additionalProperties": true
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the Merchant API request without changing data. Defaults to true.",
      "default": true
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true with dry_run=false and MERCHANT_ENABLE_MUTATIONS=true before a write executes.",
      "default": false
    }
  },
  "required": [
    "account_name",
    "conversion_source"
  ]
}
```

</details>

<a id="tool-merchant_update_conversion_source-db8c7535"></a>

## merchant_update_conversion_source

Handler: Google Merchant Center handler implements update conversion source through the product API.

```text
Update a conversion source.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/merchant-center.js#L1-L497) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "conversion_source_name": {
      "type": "string",
      "description": "accounts/{accountId}/conversionSources/{sourceId}"
    },
    "update_mask": {
      "type": "string"
    },
    "conversion_source": {
      "type": "object",
      "description": "Official Merchant API request body.",
      "additionalProperties": true
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the Merchant API request without changing data. Defaults to true.",
      "default": true
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true with dry_run=false and MERCHANT_ENABLE_MUTATIONS=true before a write executes.",
      "default": false
    }
  },
  "required": [
    "conversion_source_name",
    "update_mask",
    "conversion_source"
  ]
}
```

</details>

<a id="tool-merchant_archive_conversion_source-014c86e5"></a>

## merchant_archive_conversion_source

Handler: Google Merchant Center handler implements archive conversion source through the product API.

```text
Archive a conversion source.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/merchant-center.js#L1-L497) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "conversion_source_name": {
      "type": "string",
      "description": "accounts/{accountId}/conversionSources/{sourceId}"
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the Merchant API request without changing data. Defaults to true.",
      "default": true
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true with dry_run=false and MERCHANT_ENABLE_MUTATIONS=true before a write executes.",
      "default": false
    }
  },
  "required": [
    "conversion_source_name"
  ]
}
```

</details>

<a id="tool-merchant_undelete_conversion_source-c33e4dbf"></a>

## merchant_undelete_conversion_source

Handler: Google Merchant Center handler implements undelete conversion source through the product API.

```text
Re-enable an archived conversion source.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/merchant-center.js#L1-L497) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "conversion_source_name": {
      "type": "string",
      "description": "accounts/{accountId}/conversionSources/{sourceId}"
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the Merchant API request without changing data. Defaults to true.",
      "default": true
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true with dry_run=false and MERCHANT_ENABLE_MUTATIONS=true before a write executes.",
      "default": false
    }
  },
  "required": [
    "conversion_source_name"
  ]
}
```

</details>

<a id="tool-merchant_search_report-606f4cd8"></a>

## merchant_search_report

Handler: Google Merchant Center handler implements search report through the product API.

```text
Run a Merchant Center Query Language report.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/merchant-center.js#L1-L497) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_name": {
      "type": "string",
      "description": "accounts/{accountId}"
    },
    "account_id": {
      "type": "string",
      "description": "Legacy shorthand Merchant Center account ID."
    },
    "query": {
      "type": "string",
      "description": "Merchant Center Query Language query."
    },
    "page_size": {
      "type": "number",
      "description": "Page size.",
      "default": 100
    },
    "page_token": {
      "type": "string",
      "description": "Optional next-page token."
    }
  },
  "required": [
    "query"
  ]
}
```

</details>

<a id="tool-merchant_list_issues-27b87f03"></a>

## merchant_list_issues

Handler: Google Merchant Center handler implements list issues through the product API.

```text
List account issues with resolution guidance.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/merchant-center.js#L1-L497) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_name": {
      "type": "string",
      "description": "accounts/{accountId}"
    },
    "account_id": {
      "type": "string",
      "description": "Legacy shorthand Merchant Center account ID."
    },
    "language_code": {
      "type": "string",
      "description": "Optional BCP-47 language code."
    },
    "time_zone": {
      "type": "string",
      "description": "Optional IANA time zone."
    },
    "page_size": {
      "type": "number",
      "description": "Page size.",
      "default": 100
    },
    "page_token": {
      "type": "string",
      "description": "Optional next-page token."
    }
  },
  "required": []
}
```

</details>

<a id="tool-merchant_render_account_issues-fa701d0a"></a>

## merchant_render_account_issues

Handler: Google Merchant Center handler implements render account issues through the product API.

```text
Render account issues with resolution actions.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/merchant-center.js#L1-L497) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_name": {
      "type": "string",
      "description": "accounts/{accountId}"
    },
    "request": {
      "type": "object",
      "description": "RenderAccountIssues request body.",
      "additionalProperties": true
    }
  },
  "required": [
    "account_name"
  ]
}
```

</details>

<a id="tool-merchant_render_product_issues-9f7ebb33"></a>

## merchant_render_product_issues

Handler: Google Merchant Center handler implements render product issues through the product API.

```text
Render product issues with resolution actions.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/merchant-center.js#L1-L497) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "product_name": {
      "type": "string",
      "description": "accounts/{accountId}/products/{product}"
    },
    "request": {
      "type": "object",
      "description": "RenderProductIssues request body.",
      "additionalProperties": true
    }
  },
  "required": [
    "product_name"
  ]
}
```

</details>

<a id="tool-merchant_list_quotas-b9f16b1c"></a>

## merchant_list_quotas

Handler: Google Merchant Center handler implements list quotas through the product API.

```text
List Merchant API quota usage for an account.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/merchant-center.js#L1-L497) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "account_name": {
      "type": "string",
      "description": "accounts/{accountId}"
    },
    "page_size": {
      "type": "number",
      "description": "Page size.",
      "default": 100
    },
    "page_token": {
      "type": "string",
      "description": "Optional next-page token."
    }
  },
  "required": [
    "account_name"
  ]
}
```

</details>

<a id="tool-merchant_api_call-91e942b0"></a>

## merchant_api_call

Handler: Google Merchant Center handler implements api call through the product API.

```text
Call any documented Merchant API endpoint using a fixed Google service allowlist.
```

[Source](https://github.com/marwa-mrwan/google-clarity-mcp-codex/blob/2a6881b03cc8825ff634f8512100c8b566b6758f/google-mcp/lib/merchant-center.js#L1-L497) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "service": {
      "type": "string",
      "enum": [
        "accounts",
        "products",
        "reports",
        "data_sources",
        "inventories",
        "promotions",
        "conversions",
        "quota",
        "issue_resolution",
        "notifications",
        "lfp",
        "order_tracking",
        "reviews_v1beta",
        "reviews_v1alpha",
        "product_studio_v1alpha",
        "loyalty_customers_v1alpha",
        "youtube_shopping_checkout_v1beta",
        "youtube_shopping_checkout_v1alpha",
        "youtube_v1alpha"
      ]
    },
    "method": {
      "type": "string",
      "enum": [
        "GET",
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
      ],
      "default": "GET"
    },
    "path": {
      "type": "string",
      "description": "Relative API path only; full URLs are rejected."
    },
    "query": {
      "type": "object",
      "description": "Optional query parameters.",
      "additionalProperties": true
    },
    "body": {
      "type": "object",
      "description": "Official Merchant API request body.",
      "additionalProperties": true
    },
    "dry_run": {
      "type": "boolean",
      "description": "Preview the Merchant API request without changing data. Defaults to true.",
      "default": true
    },
    "confirm": {
      "type": "boolean",
      "description": "Must be true with dry_run=false and MERCHANT_ENABLE_MUTATIONS=true before a write executes.",
      "default": false
    }
  },
  "required": [
    "service",
    "method",
    "path"
  ]
}
```

</details>
