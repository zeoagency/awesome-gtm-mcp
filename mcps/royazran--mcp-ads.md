# RoyAzran/mcp-ads

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/RoyAzran/mcp-ads) · [Machine-readable inventory](../data/mcps/royazran--mcp-ads.json)

**3196 extracted tools.** Use a GTM action dispatcher or dedicated full-surface tools for resource operations, server clients, and workspace sync.

Snapshot: 2026-10-13 · [c5886e306ff8](https://github.com/RoyAzran/mcp-ads/tree/c5886e306ff8bd8c447042cfc151ccd46f304eb7) · Method: tools/list.

Exposure: Both full and default slim surfaces; all shared marketing product tools; WordPress enabled by default and conditionally disabled by WORDPRESS_TOOLS_ENABLED.

## Limits

- Offline tools/list from installed MCP 2.3.0 and current unpinned dependency resolutions; upstream does not lock versions. No authenticated handlers were executed.
- Full and slim surfaces combined with duplicate public names deduplicated; per-tool exposure identifies surface. Default slim dispatchers expose schemas of arbitrary params objects, while underlying actions are separately listed on the full surface.
- Duplicate registrations are resolved by the SDK actual registry; startup warns about six Google Ads/Search Console collisions.
- Behavior records report source handler call evidence. Other product tools are inventoried but not verified against external APIs.
- 312 action names are explicitly flagged broken by upstream; registered instances are retained with exposure warnings because full MCP tools/list still lists them.

## Tools

| Tool | Scope |
|---|---|
| [`media_upload_start`](royazran--mcp-ads.tools-001.md#tool-media_upload_start-62e7ec95) | Other product |
| [`creative_show_images`](royazran--mcp-ads.tools-001.md#tool-creative_show_images-9fba4390) | Other product |
| [`competitor_ads_gallery`](royazran--mcp-ads.tools-001.md#tool-competitor_ads_gallery-5f2f3af4) | Other product |
| [`google_ads_list_customers`](royazran--mcp-ads.tools-001.md#tool-google_ads_list_customers-a146ddc9) | Other product |
| [`google_ads_find_account`](royazran--mcp-ads.tools-001.md#tool-google_ads_find_account-d7e73ae8) | Other product |
| [`google_ads_get_account_info`](royazran--mcp-ads.tools-001.md#tool-google_ads_get_account_info-981b92fc) | Other product |
| [`google_ads_account_overview`](royazran--mcp-ads.tools-001.md#tool-google_ads_account_overview-4fdde7e6) | Other product |
| [`google_ads_daily_trend`](royazran--mcp-ads.tools-001.md#tool-google_ads_daily_trend-b0a66a29) | Other product |
| [`google_ads_campaign_performance`](royazran--mcp-ads.tools-001.md#tool-google_ads_campaign_performance-3210fdfc) | Other product |
| [`google_ads_adgroup_performance`](royazran--mcp-ads.tools-001.md#tool-google_ads_adgroup_performance-34a6c0a3) | Other product |
| [`google_ads_keyword_performance`](royazran--mcp-ads.tools-001.md#tool-google_ads_keyword_performance-ec64d05d) | Other product |
| [`google_ads_search_terms`](royazran--mcp-ads.tools-001.md#tool-google_ads_search_terms-2a11cf7a) | Other product |
| [`google_ads_ad_performance`](royazran--mcp-ads.tools-001.md#tool-google_ads_ad_performance-04dc6c9f) | Other product |
| [`google_ads_demographic_breakdown`](royazran--mcp-ads.tools-001.md#tool-google_ads_demographic_breakdown-72ed7e51) | Other product |
| [`google_ads_geo_performance`](royazran--mcp-ads.tools-001.md#tool-google_ads_geo_performance-f77dd8a6) | Other product |
| [`google_ads_hourly_breakdown`](royazran--mcp-ads.tools-001.md#tool-google_ads_hourly_breakdown-05877d10) | Other product |
| [`google_ads_device_breakdown`](royazran--mcp-ads.tools-001.md#tool-google_ads_device_breakdown-82300c2e) | Other product |
| [`google_ads_shopping_performance`](royazran--mcp-ads.tools-001.md#tool-google_ads_shopping_performance-e6eb46ca) | Other product |
| [`google_ads_display_performance`](royazran--mcp-ads.tools-001.md#tool-google_ads_display_performance-be0c3953) | Other product |
| [`google_ads_video_performance`](royazran--mcp-ads.tools-001.md#tool-google_ads_video_performance-3e0ccb4d) | Other product |
| [`google_ads_landing_page_performance`](royazran--mcp-ads.tools-001.md#tool-google_ads_landing_page_performance-ffcb1599) | Other product |
| [`google_ads_audience_performance`](royazran--mcp-ads.tools-001.md#tool-google_ads_audience_performance-df53f6c2) | Other product |
| [`google_ads_conversion_actions`](royazran--mcp-ads.tools-001.md#tool-google_ads_conversion_actions-a9051c9b) | Other product |
| [`google_ads_budget_pacing`](royazran--mcp-ads.tools-001.md#tool-google_ads_budget_pacing-1615d162) | Other product |
| [`google_ads_auction_insights`](royazran--mcp-ads.tools-001.md#tool-google_ads_auction_insights-df1aa6f8) | Other product |
| [`google_ads_change_history`](royazran--mcp-ads.tools-001.md#tool-google_ads_change_history-292931e3) | Other product |
| [`google_ads_quality_score`](royazran--mcp-ads.tools-001.md#tool-google_ads_quality_score-61754eb8) | Other product |
| [`google_ads_call_metrics`](royazran--mcp-ads.tools-001.md#tool-google_ads_call_metrics-118f2b27) | Other product |
| [`google_ads_extension_performance`](royazran--mcp-ads.tools-001.md#tool-google_ads_extension_performance-8d0eeb1d) | Other product |
| [`google_ads_recommendations`](royazran--mcp-ads.tools-001.md#tool-google_ads_recommendations-93d67100) | Other product |
| [`google_ads_asset_report`](royazran--mcp-ads.tools-001.md#tool-google_ads_asset_report-eb599cdd) | Other product |
| [`google_ads_list_labels`](royazran--mcp-ads.tools-001.md#tool-google_ads_list_labels-dde01661) | Other product |
| [`google_ads_get_asset_group_performance`](royazran--mcp-ads.tools-001.md#tool-google_ads_get_asset_group_performance-8a576754) | Other product |
| [`google_ads_create_budget`](royazran--mcp-ads.tools-001.md#tool-google_ads_create_budget-ea780806) | Other product |
| [`google_ads_create_campaign`](royazran--mcp-ads.tools-001.md#tool-google_ads_create_campaign-60574a77) | Other product |
| [`google_ads_create_adgroup`](royazran--mcp-ads.tools-001.md#tool-google_ads_create_adgroup-1600da10) | Other product |
| [`google_ads_add_keywords`](royazran--mcp-ads.tools-001.md#tool-google_ads_add_keywords-f92138d6) | Other product |
| [`google_ads_add_negative_keywords`](royazran--mcp-ads.tools-001.md#tool-google_ads_add_negative_keywords-b45ea0a3) | Other product |
| [`google_ads_update_campaign_status`](royazran--mcp-ads.tools-001.md#tool-google_ads_update_campaign_status-8e856283) | Other product |
| [`google_ads_update_adgroup_status`](royazran--mcp-ads.tools-001.md#tool-google_ads_update_adgroup_status-c9941933) | Other product |
| [`google_ads_update_keyword_status`](royazran--mcp-ads.tools-001.md#tool-google_ads_update_keyword_status-0944abef) | Other product |
| [`google_ads_update_keyword_bid`](royazran--mcp-ads.tools-001.md#tool-google_ads_update_keyword_bid-d1fdc374) | Other product |
| [`google_ads_update_campaign_budget`](royazran--mcp-ads.tools-001.md#tool-google_ads_update_campaign_budget-40a7bbf8) | Other product |
| [`google_ads_create_responsive_search_ad`](royazran--mcp-ads.tools-001.md#tool-google_ads_create_responsive_search_ad-1475ccb3) | Other product |
| [`google_ads_pause_all_campaigns`](royazran--mcp-ads.tools-001.md#tool-google_ads_pause_all_campaigns-e58d3ac4) | Other product |
| [`google_ads_enable_campaign`](royazran--mcp-ads.tools-001.md#tool-google_ads_enable_campaign-46c2cada) | Other product |
| [`google_ads_apply_recommendation`](royazran--mcp-ads.tools-001.md#tool-google_ads_apply_recommendation-ec746e00) | Other product |
| [`google_ads_dismiss_recommendation`](royazran--mcp-ads.tools-001.md#tool-google_ads_dismiss_recommendation-44070a3a) | Other product |
| [`google_ads_upload_image_asset`](royazran--mcp-ads.tools-001.md#tool-google_ads_upload_image_asset-aa13125e) | Other product |
| [`google_ads_create_conversion_action`](royazran--mcp-ads.tools-001.md#tool-google_ads_create_conversion_action-a13c8135) | Other product |
| [`google_ads_update_conversion_action`](royazran--mcp-ads.tools-001.md#tool-google_ads_update_conversion_action-97a6a8ec) | Other product |
| [`google_ads_create_sitelink_asset`](royazran--mcp-ads.tools-001.md#tool-google_ads_create_sitelink_asset-fadebb53) | Other product |
| [`google_ads_create_callout_asset`](royazran--mcp-ads.tools-001.md#tool-google_ads_create_callout_asset-baba7808) | Other product |
| [`google_ads_create_video_ad`](royazran--mcp-ads.tools-001.md#tool-google_ads_create_video_ad-6876737d) | Other product |
| [`google_ads_bulk_create_keywords`](royazran--mcp-ads.tools-001.md#tool-google_ads_bulk_create_keywords-55048fb6) | Other product |
| [`google_ads_create_label`](royazran--mcp-ads.tools-001.md#tool-google_ads_create_label-02b13d17) | Other product |
| [`google_ads_apply_label`](royazran--mcp-ads.tools-001.md#tool-google_ads_apply_label-d9697485) | Other product |
| [`google_ads_create_responsive_display_ad`](royazran--mcp-ads.tools-001.md#tool-google_ads_create_responsive_display_ad-225ba210) | Other product |
| [`google_ads_create_asset_group`](royazran--mcp-ads.tools-001.md#tool-google_ads_create_asset_group-e0ecc4f1) | Other product |
| [`google_ads_keyword_ideas`](royazran--mcp-ads.tools-001.md#tool-google_ads_keyword_ideas-3f6e20a0) | Other product |
| [`google_ads_keyword_forecast`](royazran--mcp-ads.tools-001.md#tool-google_ads_keyword_forecast-b291ffc4) | Other product |
| [`google_ads_audience_segments`](royazran--mcp-ads.tools-001.md#tool-google_ads_audience_segments-667fadc5) | Other product |
| [`google_ads_bid_modifiers`](royazran--mcp-ads.tools-001.md#tool-google_ads_bid_modifiers-cff7c10a) | Other product |
| [`google_ads_update_bid_modifier`](royazran--mcp-ads.tools-001.md#tool-google_ads_update_bid_modifier-d84d22a0) | Other product |
| [`google_ads_performance_max_asset_groups`](royazran--mcp-ads.tools-001.md#tool-google_ads_performance_max_asset_groups-61344420) | Other product |
| [`google_ads_create_performance_max`](royazran--mcp-ads.tools-001.md#tool-google_ads_create_performance_max-8c583a48) | Other product |
| [`google_ads_ad_schedule_report`](royazran--mcp-ads.tools-001.md#tool-google_ads_ad_schedule_report-706701d0) | Other product |
| [`google_ads_experiments`](royazran--mcp-ads.tools-001.md#tool-google_ads_experiments-5c3d962a) | Other product |
| [`google_ads_smart_bidding_report`](royazran--mcp-ads.tools-001.md#tool-google_ads_smart_bidding_report-ec60fa68) | Other product |
| [`google_ads_shopping_product_groups`](royazran--mcp-ads.tools-001.md#tool-google_ads_shopping_product_groups-47d3536d) | Other product |
| [`google_ads_dynamic_search_targets`](royazran--mcp-ads.tools-001.md#tool-google_ads_dynamic_search_targets-b534adef) | Other product |
| [`google_ads_brand_safety_exclusions`](royazran--mcp-ads.tools-001.md#tool-google_ads_brand_safety_exclusions-dd9abf08) | Other product |
| [`google_ads_add_placement_exclusion`](royazran--mcp-ads.tools-001.md#tool-google_ads_add_placement_exclusion-72759ab9) | Other product |
| [`google_ads_attribution_paths`](royazran--mcp-ads.tools-001.md#tool-google_ads_attribution_paths-9ddece35) | Other product |
| [`google_ads_update_rsa`](royazran--mcp-ads.tools-001.md#tool-google_ads_update_rsa-aa7c0db6) | Other product |
| [`google_ads_add_rsa_asset`](royazran--mcp-ads.tools-001.md#tool-google_ads_add_rsa_asset-7c241b48) | Other product |
| [`google_ads_get_account_conversion_id`](royazran--mcp-ads.tools-001.md#tool-google_ads_get_account_conversion_id-d13fc6af) | Other product |
| [`google_ads_get_conversion_tag_snippet`](royazran--mcp-ads.tools-001.md#tool-google_ads_get_conversion_tag_snippet-69d92af6) | Other product |
| [`google_ads_list_conversion_actions_full`](royazran--mcp-ads.tools-001.md#tool-google_ads_list_conversion_actions_full-c1633cab) | Other product |
| [`google_ads_conversion_performance_by_action`](royazran--mcp-ads.tools-001.md#tool-google_ads_conversion_performance_by_action-58955274) | Other product |
| [`google_ads_conversion_setup_complete`](royazran--mcp-ads.tools-001.md#tool-google_ads_conversion_setup_complete-3bdf2eb7) | Other product |
| [`google_ads_create_ecommerce_conversion_actions`](royazran--mcp-ads.tools-001.md#tool-google_ads_create_ecommerce_conversion_actions-bde2d693) | Other product |
| [`google_ads_check_auto_tagging`](royazran--mcp-ads.tools-001.md#tool-google_ads_check_auto_tagging-525bdf32) | Other product |
| [`gads_list_customers`](royazran--mcp-ads.tools-001.md#tool-gads_list_customers-4ef4abdc) | Other product |
| [`gads_get_account_info`](royazran--mcp-ads.tools-001.md#tool-gads_get_account_info-6b9cadf0) | Other product |
| [`gads_account_overview`](royazran--mcp-ads.tools-001.md#tool-gads_account_overview-01cb10b9) | Other product |
| [`gads_campaign_performance`](royazran--mcp-ads.tools-001.md#tool-gads_campaign_performance-6f83598a) | Other product |
| [`gads_adgroup_performance`](royazran--mcp-ads.tools-001.md#tool-gads_adgroup_performance-535c5dff) | Other product |
| [`gads_keyword_performance`](royazran--mcp-ads.tools-001.md#tool-gads_keyword_performance-fe540610) | Other product |
| [`gads_search_terms`](royazran--mcp-ads.tools-001.md#tool-gads_search_terms-23806ad9) | Other product |
| [`gads_ad_performance`](royazran--mcp-ads.tools-001.md#tool-gads_ad_performance-9abfa5b6) | Other product |
| [`gads_demographic_breakdown`](royazran--mcp-ads.tools-001.md#tool-gads_demographic_breakdown-6e22a86b) | Other product |
| [`gads_geo_performance`](royazran--mcp-ads.tools-001.md#tool-gads_geo_performance-7873c356) | Other product |
| [`gads_hourly_breakdown`](royazran--mcp-ads.tools-001.md#tool-gads_hourly_breakdown-e2eef2ff) | Other product |
| [`gads_device_breakdown`](royazran--mcp-ads.tools-001.md#tool-gads_device_breakdown-2e602a1b) | Other product |
| [`gads_shopping_performance`](royazran--mcp-ads.tools-001.md#tool-gads_shopping_performance-fbd0d159) | Other product |
| [`gads_display_performance`](royazran--mcp-ads.tools-001.md#tool-gads_display_performance-8d08b70f) | Other product |
| [`gads_video_performance`](royazran--mcp-ads.tools-001.md#tool-gads_video_performance-4cd9d39e) | Other product |
| [`gads_landing_page_performance`](royazran--mcp-ads.tools-001.md#tool-gads_landing_page_performance-96043905) | Other product |
| [`gads_audience_performance`](royazran--mcp-ads.tools-001.md#tool-gads_audience_performance-56aaac50) | Other product |
| [`gads_conversion_actions`](royazran--mcp-ads.tools-001.md#tool-gads_conversion_actions-f01b107f) | Other product |
| [`gads_budget_pacing`](royazran--mcp-ads.tools-001.md#tool-gads_budget_pacing-ce46f664) | Other product |
| [`gads_auction_insights`](royazran--mcp-ads.tools-001.md#tool-gads_auction_insights-c4d68c99) | Other product |
| [`gads_change_history`](royazran--mcp-ads.tools-001.md#tool-gads_change_history-1523a119) | Other product |
| [`gads_quality_score`](royazran--mcp-ads.tools-001.md#tool-gads_quality_score-53deb743) | Other product |
| [`gads_call_metrics`](royazran--mcp-ads.tools-001.md#tool-gads_call_metrics-7ddc8860) | Other product |
| [`gads_extension_performance`](royazran--mcp-ads.tools-001.md#tool-gads_extension_performance-04cc209e) | Other product |
| [`gads_recommendations`](royazran--mcp-ads.tools-001.md#tool-gads_recommendations-b4ec9e78) | Other product |
| [`gads_asset_report`](royazran--mcp-ads.tools-001.md#tool-gads_asset_report-0af0665e) | Other product |
| [`gads_list_labels`](royazran--mcp-ads.tools-001.md#tool-gads_list_labels-42c00635) | Other product |
| [`gads_create_budget`](royazran--mcp-ads.tools-001.md#tool-gads_create_budget-e9b08eac) | Other product |
| [`gads_create_campaign`](royazran--mcp-ads.tools-001.md#tool-gads_create_campaign-c5c026ef) | Other product |
| [`gads_create_adgroup`](royazran--mcp-ads.tools-001.md#tool-gads_create_adgroup-0dc69dd3) | Other product |
| [`gads_add_keywords`](royazran--mcp-ads.tools-001.md#tool-gads_add_keywords-3f27521b) | Other product |
| [`gads_add_negative_keywords`](royazran--mcp-ads.tools-001.md#tool-gads_add_negative_keywords-0f281eeb) | Other product |
| [`gads_update_campaign_status`](royazran--mcp-ads.tools-001.md#tool-gads_update_campaign_status-57b42159) | Other product |
| [`gads_update_campaign_name`](royazran--mcp-ads.tools-001.md#tool-gads_update_campaign_name-8d4fdaeb) | Other product |
| [`gads_update_adgroup_status`](royazran--mcp-ads.tools-001.md#tool-gads_update_adgroup_status-0c8be67b) | Other product |
| [`gads_update_keyword_status`](royazran--mcp-ads.tools-001.md#tool-gads_update_keyword_status-19654c18) | Other product |
| [`gads_update_keyword_bid`](royazran--mcp-ads.tools-001.md#tool-gads_update_keyword_bid-6d76f227) | Other product |
| [`gads_update_campaign_budget`](royazran--mcp-ads.tools-001.md#tool-gads_update_campaign_budget-f5ed7b9d) | Other product |
| [`gads_create_responsive_search_ad`](royazran--mcp-ads.tools-001.md#tool-gads_create_responsive_search_ad-f4873363) | Other product |
| [`gads_update_rsa`](royazran--mcp-ads.tools-001.md#tool-gads_update_rsa-6b6b052a) | Other product |
| [`gads_add_rsa_asset`](royazran--mcp-ads.tools-001.md#tool-gads_add_rsa_asset-1f16f1ac) | Other product |
| [`gads_pause_all_campaigns`](royazran--mcp-ads.tools-001.md#tool-gads_pause_all_campaigns-ac30ded2) | Other product |
| [`gads_enable_campaign`](royazran--mcp-ads.tools-001.md#tool-gads_enable_campaign-15095a58) | Other product |
| [`gads_apply_recommendation`](royazran--mcp-ads.tools-001.md#tool-gads_apply_recommendation-4d32dc23) | Other product |
| [`gads_dismiss_recommendation`](royazran--mcp-ads.tools-001.md#tool-gads_dismiss_recommendation-bd1d45ac) | Other product |
| [`gads_upload_image_asset`](royazran--mcp-ads.tools-001.md#tool-gads_upload_image_asset-a1a635b3) | Other product |
| [`gads_create_responsive_display_ad`](royazran--mcp-ads.tools-001.md#tool-gads_create_responsive_display_ad-1df10e77) | Other product |
| [`gads_create_asset_group`](royazran--mcp-ads.tools-001.md#tool-gads_create_asset_group-034597a5) | Other product |
| [`gads_get_asset_group_performance`](royazran--mcp-ads.tools-001.md#tool-gads_get_asset_group_performance-defa9483) | Other product |
| [`gads_create_conversion_action`](royazran--mcp-ads.tools-001.md#tool-gads_create_conversion_action-fd453496) | Other product |
| [`gads_get_account_conversion_id`](royazran--mcp-ads.tools-001.md#tool-gads_get_account_conversion_id-81bc7732) | Other product |
| [`gads_get_conversion_tag_snippet`](royazran--mcp-ads.tools-001.md#tool-gads_get_conversion_tag_snippet-14408de4) | Other product |
| [`gads_list_conversion_actions_full`](royazran--mcp-ads.tools-001.md#tool-gads_list_conversion_actions_full-8ab35dab) | Other product |
| [`gads_conversion_performance_by_action`](royazran--mcp-ads.tools-001.md#tool-gads_conversion_performance_by_action-1cf0e1e9) | Other product |
| [`gads_conversion_setup_complete`](royazran--mcp-ads.tools-001.md#tool-gads_conversion_setup_complete-06c9507b) | Other product |
| [`gads_create_ecommerce_conversion_actions`](royazran--mcp-ads.tools-001.md#tool-gads_create_ecommerce_conversion_actions-8537338f) | Other product |
| [`gads_check_auto_tagging`](royazran--mcp-ads.tools-001.md#tool-gads_check_auto_tagging-983a7c48) | Other product |
| [`gads_create_sitelink_asset`](royazran--mcp-ads.tools-001.md#tool-gads_create_sitelink_asset-53caa97a) | Other product |
| [`gads_create_callout_asset`](royazran--mcp-ads.tools-001.md#tool-gads_create_callout_asset-9a2337ac) | Other product |
| [`gads_create_video_ad`](royazran--mcp-ads.tools-001.md#tool-gads_create_video_ad-90f84542) | Other product |
| [`gads_bulk_create_keywords`](royazran--mcp-ads.tools-001.md#tool-gads_bulk_create_keywords-ae4088b4) | Other product |
| [`gads_create_label`](royazran--mcp-ads.tools-001.md#tool-gads_create_label-ebd7a3a7) | Other product |
| [`gads_apply_label`](royazran--mcp-ads.tools-001.md#tool-gads_apply_label-0715f112) | Other product |
| [`gads_update_conversion_action`](royazran--mcp-ads.tools-001.md#tool-gads_update_conversion_action-c2995bcd) | Other product |
| [`gads_create_customer_user_access`](royazran--mcp-ads.tools-001.md#tool-gads_create_customer_user_access-ad5fa635) | Other product |
| [`gads_find_account`](royazran--mcp-ads.tools-001.md#tool-gads_find_account-fc906218) | Other product |
| [`gads_get_account_budget`](royazran--mcp-ads.tools-001.md#tool-gads_get_account_budget-401477f7) | Other product |
| [`gads_get_account_status`](royazran--mcp-ads.tools-002.md#tool-gads_get_account_status-9a36f00d) | Other product |
| [`gads_get_budget_change_log`](royazran--mcp-ads.tools-002.md#tool-gads_get_budget_change_log-1627aab2) | Other product |
| [`gads_get_change_history`](royazran--mcp-ads.tools-002.md#tool-gads_get_change_history-ad001b54) | Other product |
| [`gads_get_inactivity_alerts`](royazran--mcp-ads.tools-002.md#tool-gads_get_inactivity_alerts-29f4de2f) | Other product |
| [`gads_get_user_activity_summary`](royazran--mcp-ads.tools-002.md#tool-gads_get_user_activity_summary-8d53c268) | Other product |
| [`gads_invite_user`](royazran--mcp-ads.tools-002.md#tool-gads_invite_user-c240931b) | Other product |
| [`gads_link_product_account`](royazran--mcp-ads.tools-002.md#tool-gads_link_product_account-df962fce) | Other product |
| [`gads_list_accessible_accounts`](royazran--mcp-ads.tools-002.md#tool-gads_list_accessible_accounts-3acdfb6f) | Other product |
| [`gads_list_billing_setups`](royazran--mcp-ads.tools-002.md#tool-gads_list_billing_setups-22679f2c) | Other product |
| [`gads_list_customer_user_access`](royazran--mcp-ads.tools-002.md#tool-gads_list_customer_user_access-b5da2cde) | Other product |
| [`gads_list_linked_accounts`](royazran--mcp-ads.tools-002.md#tool-gads_list_linked_accounts-1c316d3b) | Other product |
| [`gads_list_manager_accounts`](royazran--mcp-ads.tools-002.md#tool-gads_list_manager_accounts-de313d41) | Other product |
| [`gads_remove_customer_user_access`](royazran--mcp-ads.tools-002.md#tool-gads_remove_customer_user_access-04274ff2) | Other product |
| [`gads_update_account`](royazran--mcp-ads.tools-002.md#tool-gads_update_account-d0577f43) | Other product |
| [`gads_update_customer_user_access`](royazran--mcp-ads.tools-002.md#tool-gads_update_customer_user_access-269b1c56) | Other product |
| [`gads_create_ad_group`](royazran--mcp-ads.tools-002.md#tool-gads_create_ad_group-3368918f) | Other product |
| [`gads_pause_ad_group`](royazran--mcp-ads.tools-002.md#tool-gads_pause_ad_group-23a49349) | Other product |
| [`gads_enable_ad_group`](royazran--mcp-ads.tools-002.md#tool-gads_enable_ad_group-bff8574b) | Other product |
| [`gads_remove_ad_group`](royazran--mcp-ads.tools-002.md#tool-gads_remove_ad_group-fa847ece) | Other product |
| [`gads_bulk_create_ad_groups`](royazran--mcp-ads.tools-002.md#tool-gads_bulk_create_ad_groups-a73f0398) | Other product |
| [`gads_bulk_pause_ad_groups`](royazran--mcp-ads.tools-002.md#tool-gads_bulk_pause_ad_groups-a784e52e) | Other product |
| [`gads_bulk_enable_ad_groups`](royazran--mcp-ads.tools-002.md#tool-gads_bulk_enable_ad_groups-08b696e0) | Other product |
| [`gads_bulk_remove_ad_groups`](royazran--mcp-ads.tools-002.md#tool-gads_bulk_remove_ad_groups-6c118913) | Other product |
| [`gads_bulk_update_ad_group_cpc`](royazran--mcp-ads.tools-002.md#tool-gads_bulk_update_ad_group_cpc-578b57e7) | Other product |
| [`gads_set_ad_group_cpm`](royazran--mcp-ads.tools-002.md#tool-gads_set_ad_group_cpm-2f2b133c) | Other product |
| [`gads_set_ad_group_cpv`](royazran--mcp-ads.tools-002.md#tool-gads_set_ad_group_cpv-b165e3ed) | Other product |
| [`gads_set_ad_group_url_template`](royazran--mcp-ads.tools-002.md#tool-gads_set_ad_group_url_template-40feac53) | Other product |
| [`gads_set_ad_group_url_suffix`](royazran--mcp-ads.tools-002.md#tool-gads_set_ad_group_url_suffix-2b719ce0) | Other product |
| [`gads_list_ad_groups_by_status`](royazran--mcp-ads.tools-002.md#tool-gads_list_ad_groups_by_status-e432a7fb) | Other product |
| [`gads_list_ad_groups_by_label`](royazran--mcp-ads.tools-002.md#tool-gads_list_ad_groups_by_label-942301d6) | Other product |
| [`gads_get_ad_group_ads_summary`](royazran--mcp-ads.tools-002.md#tool-gads_get_ad_group_ads_summary-548a9e50) | Other product |
| [`gads_duplicate_ad_group`](royazran--mcp-ads.tools-002.md#tool-gads_duplicate_ad_group-f2033cca) | Other product |
| [`gads_get_ad_group_details`](royazran--mcp-ads.tools-002.md#tool-gads_get_ad_group_details-ad3f66c5) | Other product |
| [`gads_get_ad_group_simulation`](royazran--mcp-ads.tools-002.md#tool-gads_get_ad_group_simulation-5ad858a5) | Other product |
| [`gads_list_ad_groups`](royazran--mcp-ads.tools-002.md#tool-gads_list_ad_groups-8dc0e8fa) | Other product |
| [`gads_set_ad_group_audience_targeting`](royazran--mcp-ads.tools-002.md#tool-gads_set_ad_group_audience_targeting-3d105b6c) | Other product |
| [`gads_set_ad_group_bid_modifiers`](royazran--mcp-ads.tools-002.md#tool-gads_set_ad_group_bid_modifiers-55a6c795) | Other product |
| [`gads_set_ad_group_demographic_bids`](royazran--mcp-ads.tools-002.md#tool-gads_set_ad_group_demographic_bids-133a2c52) | Other product |
| [`gads_set_ad_group_targeting`](royazran--mcp-ads.tools-002.md#tool-gads_set_ad_group_targeting-06d07b99) | Other product |
| [`gads_update_ad_group`](royazran--mcp-ads.tools-002.md#tool-gads_update_ad_group-d4899e23) | Other product |
| [`gads_bulk_apply_label_to_ads`](royazran--mcp-ads.tools-002.md#tool-gads_bulk_apply_label_to_ads-f63cf4c9) | Other product |
| [`gads_bulk_remove_label_from_ads`](royazran--mcp-ads.tools-002.md#tool-gads_bulk_remove_label_from_ads-a1d01e53) | Other product |
| [`gads_bulk_apply_label_to_ad_groups`](royazran--mcp-ads.tools-002.md#tool-gads_bulk_apply_label_to_ad_groups-9026389a) | Other product |
| [`gads_bulk_remove_label_from_ad_groups`](royazran--mcp-ads.tools-002.md#tool-gads_bulk_remove_label_from_ad_groups-dad1d12e) | Other product |
| [`gads_bulk_apply_label_to_campaigns`](royazran--mcp-ads.tools-002.md#tool-gads_bulk_apply_label_to_campaigns-43141d00) | Other product |
| [`gads_bulk_remove_label_from_campaigns`](royazran--mcp-ads.tools-002.md#tool-gads_bulk_remove_label_from_campaigns-d0570f65) | Other product |
| [`gads_list_ads_by_campaign`](royazran--mcp-ads.tools-002.md#tool-gads_list_ads_by_campaign-e7b676de) | Other product |
| [`gads_list_ads_by_final_url`](royazran--mcp-ads.tools-002.md#tool-gads_list_ads_by_final_url-f72dc072) | Other product |
| [`gads_list_ads_by_date_range`](royazran--mcp-ads.tools-002.md#tool-gads_list_ads_by_date_range-569cfadf) | Other product |
| [`gads_search_ads_by_headline`](royazran--mcp-ads.tools-002.md#tool-gads_search_ads_by_headline-edf468c8) | Other product |
| [`gads_count_rsa_assets`](royazran--mcp-ads.tools-002.md#tool-gads_count_rsa_assets-e394281a) | Other product |
| [`gads_remove_rda_marketing_image`](royazran--mcp-ads.tools-002.md#tool-gads_remove_rda_marketing_image-f2fc7796) | Other product |
| [`gads_remove_rda_logo`](royazran--mcp-ads.tools-002.md#tool-gads_remove_rda_logo-c809fade) | Other product |
| [`gads_remove_rda_youtube_video`](royazran--mcp-ads.tools-002.md#tool-gads_remove_rda_youtube_video-1e0a52de) | Other product |
| [`gads_clear_rda_marketing_images`](royazran--mcp-ads.tools-002.md#tool-gads_clear_rda_marketing_images-3e3f7c28) | Other product |
| [`gads_clear_rda_logos`](royazran--mcp-ads.tools-002.md#tool-gads_clear_rda_logos-dd16df55) | Other product |
| [`gads_list_ad_group_negative_keywords`](royazran--mcp-ads.tools-002.md#tool-gads_list_ad_group_negative_keywords-0f19b467) | Other product |
| [`gads_list_ad_group_placements`](royazran--mcp-ads.tools-002.md#tool-gads_list_ad_group_placements-e2cc08b5) | Other product |
| [`gads_list_ad_group_topics`](royazran--mcp-ads.tools-002.md#tool-gads_list_ad_group_topics-a8038137) | Other product |
| [`gads_list_ad_group_audiences`](royazran--mcp-ads.tools-002.md#tool-gads_list_ad_group_audiences-c6ba71d8) | Other product |
| [`gads_list_ad_group_demographic_bids`](royazran--mcp-ads.tools-002.md#tool-gads_list_ad_group_demographic_bids-4ad3d3d9) | Other product |
| [`gads_add_ad_group_negative_placement`](royazran--mcp-ads.tools-002.md#tool-gads_add_ad_group_negative_placement-d87e66f7) | Other product |
| [`gads_add_ad_group_negative_topic`](royazran--mcp-ads.tools-002.md#tool-gads_add_ad_group_negative_topic-1f2daf79) | Other product |
| [`gads_add_ad_group_income_range`](royazran--mcp-ads.tools-002.md#tool-gads_add_ad_group_income_range-ffdd2c4b) | Other product |
| [`gads_add_ad_group_parental_status`](royazran--mcp-ads.tools-002.md#tool-gads_add_ad_group_parental_status-921d1214) | Other product |
| [`gads_add_ad_group_proximity`](royazran--mcp-ads.tools-002.md#tool-gads_add_ad_group_proximity-0205c501) | Other product |
| [`gads_set_ad_group_rotation`](royazran--mcp-ads.tools-002.md#tool-gads_set_ad_group_rotation-2e02ca36) | Other product |
| [`gads_set_ad_group_tracking_template`](royazran--mcp-ads.tools-002.md#tool-gads_set_ad_group_tracking_template-4f89dc97) | Other product |
| [`gads_add_campaign_placement`](royazran--mcp-ads.tools-002.md#tool-gads_add_campaign_placement-6ac6beb2) | Other product |
| [`gads_add_campaign_negative_placement`](royazran--mcp-ads.tools-002.md#tool-gads_add_campaign_negative_placement-66aa86a6) | Other product |
| [`gads_add_campaign_topic`](royazran--mcp-ads.tools-002.md#tool-gads_add_campaign_topic-ad428000) | Other product |
| [`gads_list_campaign_criteria`](royazran--mcp-ads.tools-002.md#tool-gads_list_campaign_criteria-462c7e71) | Other product |
| [`gads_list_campaign_negative_keywords`](royazran--mcp-ads.tools-002.md#tool-gads_list_campaign_negative_keywords-60fedf1b) | Other product |
| [`gads_remove_campaign_criterion`](royazran--mcp-ads.tools-002.md#tool-gads_remove_campaign_criterion-87d556d8) | Other product |
| [`gads_set_asset_group_path1`](royazran--mcp-ads.tools-002.md#tool-gads_set_asset_group_path1-f826b788) | Other product |
| [`gads_set_asset_group_path2`](royazran--mcp-ads.tools-002.md#tool-gads_set_asset_group_path2-eaf5dcff) | Other product |
| [`gads_list_asset_groups_by_status`](royazran--mcp-ads.tools-002.md#tool-gads_list_asset_groups_by_status-03122e23) | Other product |
| [`gads_get_asset_group_metrics`](royazran--mcp-ads.tools-002.md#tool-gads_get_asset_group_metrics-78f3fc7c) | Other product |
| [`gads_list_assets_by_type`](royazran--mcp-ads.tools-002.md#tool-gads_list_assets_by_type-f63f1add) | Other product |
| [`gads_list_unused_assets`](royazran--mcp-ads.tools-002.md#tool-gads_list_unused_assets-40d5fe3d) | Other product |
| [`gads_bulk_update_ad_status`](royazran--mcp-ads.tools-002.md#tool-gads_bulk_update_ad_status-7a7b5442) | Other product |
| [`gads_bulk_rename_ads`](royazran--mcp-ads.tools-002.md#tool-gads_bulk_rename_ads-19672dd3) | Other product |
| [`gads_bulk_update_ad_group_status`](royazran--mcp-ads.tools-002.md#tool-gads_bulk_update_ad_group_status-f5eff15b) | Other product |
| [`gads_bulk_update_campaign_status`](royazran--mcp-ads.tools-002.md#tool-gads_bulk_update_campaign_status-c3da85f0) | Other product |
| [`gads_move_rsa_headline`](royazran--mcp-ads.tools-002.md#tool-gads_move_rsa_headline-4f3c0812) | Other product |
| [`gads_get_ad_conversion_breakdown`](royazran--mcp-ads.tools-002.md#tool-gads_get_ad_conversion_breakdown-21ffa363) | Other product |
| [`gads_set_ad_device_preference`](royazran--mcp-ads.tools-002.md#tool-gads_set_ad_device_preference-998211ee) | Other product |
| [`gads_bulk_remove_ads`](royazran--mcp-ads.tools-002.md#tool-gads_bulk_remove_ads-10f4be57) | Other product |
| [`gads_list_ads_by_status`](royazran--mcp-ads.tools-002.md#tool-gads_list_ads_by_status-3003720c) | Other product |
| [`gads_list_ads_by_policy_status`](royazran--mcp-ads.tools-002.md#tool-gads_list_ads_by_policy_status-334cd478) | Other product |
| [`gads_list_ads_by_ad_strength`](royazran--mcp-ads.tools-002.md#tool-gads_list_ads_by_ad_strength-c942fe1d) | Other product |
| [`gads_list_ads_by_label`](royazran--mcp-ads.tools-002.md#tool-gads_list_ads_by_label-64a054c4) | Other product |
| [`gads_search_ads_by_text`](royazran--mcp-ads.tools-002.md#tool-gads_search_ads_by_text-2e93dff8) | Other product |
| [`gads_get_ad_change_history`](royazran--mcp-ads.tools-002.md#tool-gads_get_ad_change_history-de1b0539) | Other product |
| [`gads_copy_ad_to_ad_groups`](royazran--mcp-ads.tools-002.md#tool-gads_copy_ad_to_ad_groups-ba50deca) | Other product |
| [`gads_apply_label_to_ad`](royazran--mcp-ads.tools-002.md#tool-gads_apply_label_to_ad-436e6873) | Other product |
| [`gads_remove_label_from_ad`](royazran--mcp-ads.tools-002.md#tool-gads_remove_label_from_ad-65442ec8) | Other product |
| [`gads_apply_label_to_ad_group`](royazran--mcp-ads.tools-002.md#tool-gads_apply_label_to_ad_group-bfd3e162) | Other product |
| [`gads_remove_label_from_ad_group`](royazran--mcp-ads.tools-002.md#tool-gads_remove_label_from_ad_group-e4468b46) | Other product |
| [`gads_apply_label_to_campaign`](royazran--mcp-ads.tools-002.md#tool-gads_apply_label_to_campaign-4057c808) | Other product |
| [`gads_remove_label_from_campaign`](royazran--mcp-ads.tools-002.md#tool-gads_remove_label_from_campaign-116c624a) | Other product |
| [`gads_update_label`](royazran--mcp-ads.tools-002.md#tool-gads_update_label-7a3611e8) | Other product |
| [`gads_remove_label`](royazran--mcp-ads.tools-002.md#tool-gads_remove_label-d56d8b20) | Other product |
| [`gads_attach_asset_to_ad_group`](royazran--mcp-ads.tools-002.md#tool-gads_attach_asset_to_ad_group-a51361c2) | Other product |
| [`gads_detach_asset_from_ad_group`](royazran--mcp-ads.tools-002.md#tool-gads_detach_asset_from_ad_group-7a5dc8bc) | Other product |
| [`gads_attach_asset_to_customer`](royazran--mcp-ads.tools-002.md#tool-gads_attach_asset_to_customer-05166bef) | Other product |
| [`gads_detach_asset_from_customer`](royazran--mcp-ads.tools-002.md#tool-gads_detach_asset_from_customer-d3b2b29b) | Other product |
| [`gads_list_customer_assets`](royazran--mcp-ads.tools-002.md#tool-gads_list_customer_assets-4cf0d7d2) | Other product |
| [`gads_pause_ad_group_asset`](royazran--mcp-ads.tools-002.md#tool-gads_pause_ad_group_asset-16573aa6) | Other product |
| [`gads_enable_ad_group_asset`](royazran--mcp-ads.tools-002.md#tool-gads_enable_ad_group_asset-f4eab7e9) | Other product |
| [`gads_pause_campaign_asset`](royazran--mcp-ads.tools-002.md#tool-gads_pause_campaign_asset-9449c826) | Other product |
| [`gads_enable_campaign_asset`](royazran--mcp-ads.tools-002.md#tool-gads_enable_campaign_asset-7a74c3d1) | Other product |
| [`gads_create_skippable_in_stream_ad`](royazran--mcp-ads.tools-002.md#tool-gads_create_skippable_in_stream_ad-ad0a4457) | Other product |
| [`gads_create_masthead_ad`](royazran--mcp-ads.tools-002.md#tool-gads_create_masthead_ad-d3b92622) | Other product |
| [`gads_create_responsive_video_ad`](royazran--mcp-ads.tools-002.md#tool-gads_create_responsive_video_ad-b406c17f) | Other product |
| [`gads_create_in_stream_shopping_ad`](royazran--mcp-ads.tools-002.md#tool-gads_create_in_stream_shopping_ad-2115486d) | Other product |
| [`gads_list_disapproved_ads`](royazran--mcp-ads.tools-002.md#tool-gads_list_disapproved_ads-d9eef6de) | Other product |
| [`gads_list_limited_approval_ads`](royazran--mcp-ads.tools-002.md#tool-gads_list_limited_approval_ads-18c74b22) | Other product |
| [`gads_list_ad_groups_without_rsa`](royazran--mcp-ads.tools-002.md#tool-gads_list_ad_groups_without_rsa-12e010f9) | Other product |
| [`gads_compare_ad_performance`](royazran--mcp-ads.tools-002.md#tool-gads_compare_ad_performance-40b04da6) | Other product |
| [`gads_get_ad_asset_field_performance`](royazran--mcp-ads.tools-002.md#tool-gads_get_ad_asset_field_performance-af4c102d) | Other product |
| [`gads_list_rsa_without_pins`](royazran--mcp-ads.tools-002.md#tool-gads_list_rsa_without_pins-6452ef6d) | Other product |
| [`gads_bulk_create_rsa`](royazran--mcp-ads.tools-002.md#tool-gads_bulk_create_rsa-9383b8f8) | Other product |
| [`gads_bulk_set_ad_final_urls`](royazran--mcp-ads.tools-002.md#tool-gads_bulk_set_ad_final_urls-312f3f58) | Other product |
| [`gads_remove_ad_group_criterion`](royazran--mcp-ads.tools-002.md#tool-gads_remove_ad_group_criterion-512c10c6) | Other product |
| [`gads_add_ad_group_placement`](royazran--mcp-ads.tools-002.md#tool-gads_add_ad_group_placement-fcaa8581) | Other product |
| [`gads_add_ad_group_topic`](royazran--mcp-ads.tools-002.md#tool-gads_add_ad_group_topic-64cc2e42) | Other product |
| [`gads_add_ad_group_gender`](royazran--mcp-ads.tools-002.md#tool-gads_add_ad_group_gender-b7d72854) | Other product |
| [`gads_add_ad_group_age_range`](royazran--mcp-ads.tools-002.md#tool-gads_add_ad_group_age_range-8a7cf851) | Other product |
| [`gads_add_ad_group_keyword`](royazran--mcp-ads.tools-002.md#tool-gads_add_ad_group_keyword-15bde41a) | Other product |
| [`gads_add_ad_group_negative_keyword`](royazran--mcp-ads.tools-002.md#tool-gads_add_ad_group_negative_keyword-5d45ce9a) | Other product |
| [`gads_pause_asset_group_asset`](royazran--mcp-ads.tools-002.md#tool-gads_pause_asset_group_asset-721a4171) | Other product |
| [`gads_enable_asset_group_asset`](royazran--mcp-ads.tools-002.md#tool-gads_enable_asset_group_asset-024c3b19) | Other product |
| [`gads_pause_campaign`](royazran--mcp-ads.tools-002.md#tool-gads_pause_campaign-b62baece) | Other product |
| [`gads_remove_campaign`](royazran--mcp-ads.tools-002.md#tool-gads_remove_campaign-8ea98b47) | Other product |
| [`gads_bulk_pause_campaigns`](royazran--mcp-ads.tools-002.md#tool-gads_bulk_pause_campaigns-362acf70) | Other product |
| [`gads_bulk_enable_campaigns`](royazran--mcp-ads.tools-002.md#tool-gads_bulk_enable_campaigns-f444136e) | Other product |
| [`gads_bulk_remove_campaigns`](royazran--mcp-ads.tools-002.md#tool-gads_bulk_remove_campaigns-4f61213a) | Other product |
| [`gads_bulk_pause_keywords`](royazran--mcp-ads.tools-002.md#tool-gads_bulk_pause_keywords-21d010e1) | Other product |
| [`gads_bulk_enable_keywords`](royazran--mcp-ads.tools-002.md#tool-gads_bulk_enable_keywords-5b3b1ff2) | Other product |
| [`gads_bulk_remove_keywords`](royazran--mcp-ads.tools-002.md#tool-gads_bulk_remove_keywords-7a0567fa) | Other product |
| [`gads_bulk_update_keyword_bids`](royazran--mcp-ads.tools-002.md#tool-gads_bulk_update_keyword_bids-eacd8b8a) | Other product |
| [`gads_get_ad_group_primary_status`](royazran--mcp-ads.tools-002.md#tool-gads_get_ad_group_primary_status-303cedf1) | Other product |
| [`gads_get_campaign_primary_status`](royazran--mcp-ads.tools-002.md#tool-gads_get_campaign_primary_status-a59d390d) | Other product |
| [`gads_get_ad_primary_status`](royazran--mcp-ads.tools-002.md#tool-gads_get_ad_primary_status-1cf0d5e2) | Other product |
| [`gads_list_ad_group_criteria`](royazran--mcp-ads.tools-002.md#tool-gads_list_ad_group_criteria-e42d51d2) | Other product |
| [`gads_count_ads_in_campaign`](royazran--mcp-ads.tools-002.md#tool-gads_count_ads_in_campaign-92c2fad7) | Other product |
| [`gads_update_call_ad`](royazran--mcp-ads.tools-002.md#tool-gads_update_call_ad-a229cc06) | Other product |
| [`gads_update_app_ad`](royazran--mcp-ads.tools-002.md#tool-gads_update_app_ad-31417964) | Other product |
| [`gads_update_hotel_ad`](royazran--mcp-ads.tools-002.md#tool-gads_update_hotel_ad-e9e1e18e) | Other product |
| [`gads_update_video_ad`](royazran--mcp-ads.tools-003.md#tool-gads_update_video_ad-89bc4dc0) | Other product |
| [`gads_update_demand_gen_ad`](royazran--mcp-ads.tools-003.md#tool-gads_update_demand_gen_ad-9c9340ad) | Other product |
| [`gads_update_smart_campaign_ad`](royazran--mcp-ads.tools-003.md#tool-gads_update_smart_campaign_ad-7ea4f0db) | Other product |
| [`gads_bulk_pause_ads`](royazran--mcp-ads.tools-003.md#tool-gads_bulk_pause_ads-28277a38) | Other product |
| [`gads_bulk_enable_ads`](royazran--mcp-ads.tools-003.md#tool-gads_bulk_enable_ads-1b4b1c30) | Other product |
| [`gads_create_shopping_product_ad`](royazran--mcp-ads.tools-003.md#tool-gads_create_shopping_product_ad-4098838b) | Other product |
| [`gads_create_image_ad`](royazran--mcp-ads.tools-003.md#tool-gads_create_image_ad-be5f564e) | Other product |
| [`gads_create_local_ad`](royazran--mcp-ads.tools-003.md#tool-gads_create_local_ad-6e9fe7eb) | Other product |
| [`gads_create_html5_ad`](royazran--mcp-ads.tools-003.md#tool-gads_create_html5_ad-49be345d) | Other product |
| [`gads_create_expanded_text_ad`](royazran--mcp-ads.tools-003.md#tool-gads_create_expanded_text_ad-8c5749e0) | Other product |
| [`gads_create_dynamic_search_ad`](royazran--mcp-ads.tools-003.md#tool-gads_create_dynamic_search_ad-2cf97e7f) | Other product |
| [`gads_create_gmail_ad`](royazran--mcp-ads.tools-003.md#tool-gads_create_gmail_ad-b5a25db5) | Other product |
| [`gads_create_showcase_shopping_ad`](royazran--mcp-ads.tools-003.md#tool-gads_create_showcase_shopping_ad-438aa76a) | Other product |
| [`gads_create_in_feed_video_ad`](royazran--mcp-ads.tools-003.md#tool-gads_create_in_feed_video_ad-97e8cd70) | Other product |
| [`gads_create_bumper_ad`](royazran--mcp-ads.tools-003.md#tool-gads_create_bumper_ad-64baa897) | Other product |
| [`gads_create_non_skippable_in_stream_ad`](royazran--mcp-ads.tools-003.md#tool-gads_create_non_skippable_in_stream_ad-1011fb98) | Other product |
| [`gads_create_outstream_video_ad`](royazran--mcp-ads.tools-003.md#tool-gads_create_outstream_video_ad-7448e2d2) | Other product |
| [`gads_create_app_ad`](royazran--mcp-ads.tools-003.md#tool-gads_create_app_ad-2e6da0b1) | Other product |
| [`gads_create_call_ad`](royazran--mcp-ads.tools-003.md#tool-gads_create_call_ad-e647c910) | Other product |
| [`gads_create_demand_gen_ad`](royazran--mcp-ads.tools-003.md#tool-gads_create_demand_gen_ad-4a8c8df8) | Other product |
| [`gads_create_hotel_ad`](royazran--mcp-ads.tools-003.md#tool-gads_create_hotel_ad-9f28aa4f) | Other product |
| [`gads_create_smart_campaign_ad`](royazran--mcp-ads.tools-003.md#tool-gads_create_smart_campaign_ad-1609927d) | Other product |
| [`gads_duplicate_ad`](royazran--mcp-ads.tools-003.md#tool-gads_duplicate_ad-be13b1db) | Other product |
| [`gads_enable_ad`](royazran--mcp-ads.tools-003.md#tool-gads_enable_ad-bf6453b1) | Other product |
| [`gads_get_ad_details`](royazran--mcp-ads.tools-003.md#tool-gads_get_ad_details-e726251a) | Other product |
| [`gads_get_ad_strength`](royazran--mcp-ads.tools-003.md#tool-gads_get_ad_strength-0d04d75a) | Other product |
| [`gads_get_shareable_preview`](royazran--mcp-ads.tools-003.md#tool-gads_get_shareable_preview-34fc2da7) | Other product |
| [`gads_list_ads`](royazran--mcp-ads.tools-003.md#tool-gads_list_ads-7209b50d) | Other product |
| [`gads_pause_ad`](royazran--mcp-ads.tools-003.md#tool-gads_pause_ad-24c05134) | Other product |
| [`gads_add_rda_headline`](royazran--mcp-ads.tools-003.md#tool-gads_add_rda_headline-9cddb838) | Other product |
| [`gads_add_rda_description`](royazran--mcp-ads.tools-003.md#tool-gads_add_rda_description-1a57495c) | Other product |
| [`gads_add_rda_marketing_image`](royazran--mcp-ads.tools-003.md#tool-gads_add_rda_marketing_image-e437314b) | Other product |
| [`gads_add_rda_logo`](royazran--mcp-ads.tools-003.md#tool-gads_add_rda_logo-7e91db04) | Other product |
| [`gads_add_rda_youtube_video`](royazran--mcp-ads.tools-003.md#tool-gads_add_rda_youtube_video-c3cff825) | Other product |
| [`gads_set_rda_call_to_action`](royazran--mcp-ads.tools-003.md#tool-gads_set_rda_call_to_action-1c05eb6f) | Other product |
| [`gads_set_rda_price_prefix`](royazran--mcp-ads.tools-003.md#tool-gads_set_rda_price_prefix-18fd4d48) | Other product |
| [`gads_set_rda_promo_text`](royazran--mcp-ads.tools-003.md#tool-gads_set_rda_promo_text-9ec467c2) | Other product |
| [`gads_remove_ad`](royazran--mcp-ads.tools-003.md#tool-gads_remove_ad-309fa544) | Other product |
| [`gads_update_rsa_headline`](royazran--mcp-ads.tools-003.md#tool-gads_update_rsa_headline-3263b9b4) | Other product |
| [`gads_update_rsa_description`](royazran--mcp-ads.tools-003.md#tool-gads_update_rsa_description-617306d3) | Other product |
| [`gads_pin_rsa_headline`](royazran--mcp-ads.tools-003.md#tool-gads_pin_rsa_headline-ce399269) | Other product |
| [`gads_pin_rsa_description`](royazran--mcp-ads.tools-003.md#tool-gads_pin_rsa_description-d8d6759d) | Other product |
| [`gads_remove_rsa_headline`](royazran--mcp-ads.tools-003.md#tool-gads_remove_rsa_headline-1ea3fa44) | Other product |
| [`gads_remove_rsa_description`](royazran--mcp-ads.tools-003.md#tool-gads_remove_rsa_description-7fe141ad) | Other product |
| [`gads_update_rsa_paths`](royazran--mcp-ads.tools-003.md#tool-gads_update_rsa_paths-740b14fa) | Other product |
| [`gads_add_rsa_headline`](royazran--mcp-ads.tools-003.md#tool-gads_add_rsa_headline-2393fe31) | Other product |
| [`gads_add_rsa_description`](royazran--mcp-ads.tools-003.md#tool-gads_add_rsa_description-9b40e801) | Other product |
| [`gads_unpin_rsa_headline`](royazran--mcp-ads.tools-003.md#tool-gads_unpin_rsa_headline-ea837291) | Other product |
| [`gads_unpin_rsa_description`](royazran--mcp-ads.tools-003.md#tool-gads_unpin_rsa_description-7a8851a8) | Other product |
| [`gads_set_ad_final_urls`](royazran--mcp-ads.tools-003.md#tool-gads_set_ad_final_urls-b246d7e9) | Other product |
| [`gads_set_ad_tracking_template`](royazran--mcp-ads.tools-003.md#tool-gads_set_ad_tracking_template-82939c30) | Other product |
| [`gads_set_ad_url_custom_parameters`](royazran--mcp-ads.tools-003.md#tool-gads_set_ad_url_custom_parameters-b1880fc2) | Other product |
| [`gads_set_ad_final_mobile_urls`](royazran--mcp-ads.tools-003.md#tool-gads_set_ad_final_mobile_urls-9fb0d896) | Other product |
| [`gads_rename_ad`](royazran--mcp-ads.tools-003.md#tool-gads_rename_ad-c247f6f0) | Other product |
| [`gads_get_ad_policy_status`](royazran--mcp-ads.tools-003.md#tool-gads_get_ad_policy_status-86681986) | Other product |
| [`gads_get_rsa_asset_performance`](royazran--mcp-ads.tools-003.md#tool-gads_get_rsa_asset_performance-8d54ba9f) | Other product |
| [`gads_get_ad_performance_by_date`](royazran--mcp-ads.tools-003.md#tool-gads_get_ad_performance_by_date-3af7c544) | Other product |
| [`gads_update_ad`](royazran--mcp-ads.tools-003.md#tool-gads_update_ad-f34850c8) | Other product |
| [`gads_update_responsive_display_ad`](royazran--mcp-ads.tools-003.md#tool-gads_update_responsive_display_ad-25a5ab96) | Other product |
| [`gads_list_asset_groups`](royazran--mcp-ads.tools-003.md#tool-gads_list_asset_groups-18bf8118) | Other product |
| [`gads_remove_asset_group`](royazran--mcp-ads.tools-003.md#tool-gads_remove_asset_group-7c457cbf) | Other product |
| [`gads_pause_asset_group`](royazran--mcp-ads.tools-003.md#tool-gads_pause_asset_group-1bda1b19) | Other product |
| [`gads_enable_asset_group`](royazran--mcp-ads.tools-003.md#tool-gads_enable_asset_group-115ea0bb) | Other product |
| [`gads_bulk_pause_asset_groups`](royazran--mcp-ads.tools-003.md#tool-gads_bulk_pause_asset_groups-017a739e) | Other product |
| [`gads_bulk_enable_asset_groups`](royazran--mcp-ads.tools-003.md#tool-gads_bulk_enable_asset_groups-520130d6) | Other product |
| [`gads_bulk_remove_asset_groups`](royazran--mcp-ads.tools-003.md#tool-gads_bulk_remove_asset_groups-c9253004) | Other product |
| [`gads_set_asset_group_final_urls`](royazran--mcp-ads.tools-003.md#tool-gads_set_asset_group_final_urls-74675054) | Other product |
| [`gads_get_asset_group_ad_strength`](royazran--mcp-ads.tools-003.md#tool-gads_get_asset_group_ad_strength-399b1141) | Other product |
| [`gads_remove_asset_group_signal`](royazran--mcp-ads.tools-003.md#tool-gads_remove_asset_group_signal-7d6b8969) | Other product |
| [`gads_duplicate_asset_group`](royazran--mcp-ads.tools-003.md#tool-gads_duplicate_asset_group-a354516b) | Other product |
| [`gads_list_asset_group_listing_filters`](royazran--mcp-ads.tools-003.md#tool-gads_list_asset_group_listing_filters-bc7ed5f6) | Other product |
| [`gads_create_asset_group_listing_filter`](royazran--mcp-ads.tools-003.md#tool-gads_create_asset_group_listing_filter-59ca45d2) | Other product |
| [`gads_remove_asset_group_listing_filter`](royazran--mcp-ads.tools-003.md#tool-gads_remove_asset_group_listing_filter-dfe272a8) | Other product |
| [`gads_list_asset_group_assets`](royazran--mcp-ads.tools-003.md#tool-gads_list_asset_group_assets-0fcce545) | Other product |
| [`gads_add_asset_to_asset_group`](royazran--mcp-ads.tools-003.md#tool-gads_add_asset_to_asset_group-d0c2881a) | Other product |
| [`gads_remove_asset_from_asset_group`](royazran--mcp-ads.tools-003.md#tool-gads_remove_asset_from_asset_group-25e02863) | Other product |
| [`gads_update_asset_group`](royazran--mcp-ads.tools-003.md#tool-gads_update_asset_group-9a25bdba) | Other product |
| [`gads_list_asset_group_signals`](royazran--mcp-ads.tools-003.md#tool-gads_list_asset_group_signals-67f48cea) | Other product |
| [`gads_add_audience_signal_to_asset_group`](royazran--mcp-ads.tools-003.md#tool-gads_add_audience_signal_to_asset_group-0dc23152) | Other product |
| [`gads_attach_asset_to_campaign`](royazran--mcp-ads.tools-003.md#tool-gads_attach_asset_to_campaign-500bcb85) | Other product |
| [`gads_create_app_asset`](royazran--mcp-ads.tools-003.md#tool-gads_create_app_asset-4c14ee87) | Other product |
| [`gads_create_call_asset`](royazran--mcp-ads.tools-003.md#tool-gads_create_call_asset-fee54048) | Other product |
| [`gads_create_image_asset`](royazran--mcp-ads.tools-003.md#tool-gads_create_image_asset-42d6fd57) | Other product |
| [`gads_create_lead_form_asset`](royazran--mcp-ads.tools-003.md#tool-gads_create_lead_form_asset-856e0400) | Other product |
| [`gads_create_location_asset`](royazran--mcp-ads.tools-003.md#tool-gads_create_location_asset-c5dd9d34) | Other product |
| [`gads_create_price_asset`](royazran--mcp-ads.tools-003.md#tool-gads_create_price_asset-03dc89fc) | Other product |
| [`gads_create_promotion_asset`](royazran--mcp-ads.tools-003.md#tool-gads_create_promotion_asset-eb142e34) | Other product |
| [`gads_create_structured_snippet_asset`](royazran--mcp-ads.tools-003.md#tool-gads_create_structured_snippet_asset-d5f2b00b) | Other product |
| [`gads_detach_asset_from_campaign`](royazran--mcp-ads.tools-003.md#tool-gads_detach_asset_from_campaign-1ad6bc2d) | Other product |
| [`gads_get_asset_details`](royazran--mcp-ads.tools-003.md#tool-gads_get_asset_details-7663dd67) | Other product |
| [`gads_get_asset_performance`](royazran--mcp-ads.tools-003.md#tool-gads_get_asset_performance-9da92019) | Other product |
| [`gads_list_ad_group_assets`](royazran--mcp-ads.tools-003.md#tool-gads_list_ad_group_assets-a6cf9d18) | Other product |
| [`gads_list_assets`](royazran--mcp-ads.tools-003.md#tool-gads_list_assets-9ef9b9fb) | Other product |
| [`gads_list_campaign_assets`](royazran--mcp-ads.tools-003.md#tool-gads_list_campaign_assets-9c8fee25) | Other product |
| [`gads_update_asset`](royazran--mcp-ads.tools-003.md#tool-gads_update_asset-32fac76e) | Other product |
| [`gads_upload_image_asset_base64`](royazran--mcp-ads.tools-003.md#tool-gads_upload_image_asset_base64-96f8e501) | Other product |
| [`gads_upload_text_asset`](royazran--mcp-ads.tools-003.md#tool-gads_upload_text_asset-bd4b7275) | Other product |
| [`gads_upload_video_asset`](royazran--mcp-ads.tools-003.md#tool-gads_upload_video_asset-0083c6ac) | Other product |
| [`gads_add_users_to_customer_match_list`](royazran--mcp-ads.tools-003.md#tool-gads_add_users_to_customer_match_list-a8e8aaac) | Other product |
| [`gads_attach_audience_to_ad_group`](royazran--mcp-ads.tools-003.md#tool-gads_attach_audience_to_ad_group-ad3fce89) | Other product |
| [`gads_attach_audience_to_campaign`](royazran--mcp-ads.tools-003.md#tool-gads_attach_audience_to_campaign-5b42989c) | Other product |
| [`gads_create_combined_audience`](royazran--mcp-ads.tools-003.md#tool-gads_create_combined_audience-e4b3491e) | Other product |
| [`gads_create_custom_audience`](royazran--mcp-ads.tools-003.md#tool-gads_create_custom_audience-0fdd8ab1) | Other product |
| [`gads_create_customer_match_list`](royazran--mcp-ads.tools-003.md#tool-gads_create_customer_match_list-c2920770) | Other product |
| [`gads_create_remarketing_list`](royazran--mcp-ads.tools-003.md#tool-gads_create_remarketing_list-ce294344) | Other product |
| [`gads_create_similar_audience`](royazran--mcp-ads.tools-003.md#tool-gads_create_similar_audience-f839a226) | Other product |
| [`gads_get_audience_composition`](royazran--mcp-ads.tools-003.md#tool-gads_get_audience_composition-e25f5d56) | Other product |
| [`gads_get_audience_insights`](royazran--mcp-ads.tools-003.md#tool-gads_get_audience_insights-e8ad5b74) | Other product |
| [`gads_list_audiences`](royazran--mcp-ads.tools-003.md#tool-gads_list_audiences-af737afe) | Other product |
| [`gads_list_user_lists`](royazran--mcp-ads.tools-003.md#tool-gads_list_user_lists-6daa8605) | Other product |
| [`gads_update_user_list`](royazran--mcp-ads.tools-003.md#tool-gads_update_user_list-c3cd917c) | Other product |
| [`gads_create_bidding_data_exclusion`](royazran--mcp-ads.tools-003.md#tool-gads_create_bidding_data_exclusion-c535c903) | Other product |
| [`gads_create_bidding_seasonality_adjustment`](royazran--mcp-ads.tools-003.md#tool-gads_create_bidding_seasonality_adjustment-1497e8a4) | Other product |
| [`gads_create_bidding_strategy`](royazran--mcp-ads.tools-003.md#tool-gads_create_bidding_strategy-120beef8) | Other product |
| [`gads_get_bidding_strategy_simulation`](royazran--mcp-ads.tools-003.md#tool-gads_get_bidding_strategy_simulation-2e2aa778) | Other product |
| [`gads_list_bidding_strategies`](royazran--mcp-ads.tools-003.md#tool-gads_list_bidding_strategies-5248cd92) | Other product |
| [`gads_set_enhanced_cpc`](royazran--mcp-ads.tools-003.md#tool-gads_set_enhanced_cpc-d7ff70fe) | Other product |
| [`gads_set_maximize_conversion_value`](royazran--mcp-ads.tools-003.md#tool-gads_set_maximize_conversion_value-595f5c87) | Other product |
| [`gads_set_maximize_conversions`](royazran--mcp-ads.tools-003.md#tool-gads_set_maximize_conversions-fa501387) | Other product |
| [`gads_set_target_cpa`](royazran--mcp-ads.tools-003.md#tool-gads_set_target_cpa-1898d9c4) | Other product |
| [`gads_set_target_impression_share`](royazran--mcp-ads.tools-003.md#tool-gads_set_target_impression_share-e3881b7a) | Other product |
| [`gads_set_target_roas`](royazran--mcp-ads.tools-003.md#tool-gads_set_target_roas-10584d5b) | Other product |
| [`gads_update_bidding_strategy`](royazran--mcp-ads.tools-003.md#tool-gads_update_bidding_strategy-fcb83e1c) | Other product |
| [`gads_create_shared_budget`](royazran--mcp-ads.tools-003.md#tool-gads_create_shared_budget-11a6904d) | Other product |
| [`gads_get_budget_details`](royazran--mcp-ads.tools-003.md#tool-gads_get_budget_details-72bd8733) | Other product |
| [`gads_get_budget_pacing`](royazran--mcp-ads.tools-003.md#tool-gads_get_budget_pacing-7927c62d) | Other product |
| [`gads_list_budgets`](royazran--mcp-ads.tools-003.md#tool-gads_list_budgets-e29eb165) | Other product |
| [`gads_update_budget`](royazran--mcp-ads.tools-003.md#tool-gads_update_budget-1a948c09) | Other product |
| [`gads_create_campaign_draft`](royazran--mcp-ads.tools-003.md#tool-gads_create_campaign_draft-3e151b1c) | Other product |
| [`gads_create_campaign_experiment`](royazran--mcp-ads.tools-003.md#tool-gads_create_campaign_experiment-808a2f8e) | Other product |
| [`gads_duplicate_campaign`](royazran--mcp-ads.tools-003.md#tool-gads_duplicate_campaign-fcefbdd1) | Other product |
| [`gads_get_campaign_details`](royazran--mcp-ads.tools-003.md#tool-gads_get_campaign_details-71bd024a) | Other product |
| [`gads_get_campaign_draft`](royazran--mcp-ads.tools-003.md#tool-gads_get_campaign_draft-30113a3d) | Other product |
| [`gads_get_campaign_simulation`](royazran--mcp-ads.tools-003.md#tool-gads_get_campaign_simulation-b9a38fb6) | Other product |
| [`gads_list_campaigns`](royazran--mcp-ads.tools-003.md#tool-gads_list_campaigns-60db3673) | Other product |
| [`gads_promote_campaign_draft`](royazran--mcp-ads.tools-003.md#tool-gads_promote_campaign_draft-31903366) | Other product |
| [`gads_set_campaign_bid_strategy`](royazran--mcp-ads.tools-003.md#tool-gads_set_campaign_bid_strategy-53eb0eb2) | Other product |
| [`gads_set_campaign_device_bids`](royazran--mcp-ads.tools-003.md#tool-gads_set_campaign_device_bids-8f5ab102) | Other product |
| [`gads_set_campaign_dsa_settings`](royazran--mcp-ads.tools-003.md#tool-gads_set_campaign_dsa_settings-b7d40a05) | Other product |
| [`gads_set_campaign_frequency_cap`](royazran--mcp-ads.tools-003.md#tool-gads_set_campaign_frequency_cap-c8cb7844) | Other product |
| [`gads_set_campaign_geo_targets`](royazran--mcp-ads.tools-003.md#tool-gads_set_campaign_geo_targets-000da61d) | Other product |
| [`gads_set_campaign_languages`](royazran--mcp-ads.tools-003.md#tool-gads_set_campaign_languages-90fc424f) | Other product |
| [`gads_set_campaign_schedule`](royazran--mcp-ads.tools-003.md#tool-gads_set_campaign_schedule-7abb9ee5) | Other product |
| [`gads_set_campaign_targeting`](royazran--mcp-ads.tools-003.md#tool-gads_set_campaign_targeting-9e9af55a) | Other product |
| [`gads_update_campaign`](royazran--mcp-ads.tools-003.md#tool-gads_update_campaign-7b76d2e6) | Other product |
| [`gads_create_conversion_custom_variable`](royazran--mcp-ads.tools-003.md#tool-gads_create_conversion_custom_variable-0e096092) | Other product |
| [`gads_create_conversion_value_rule`](royazran--mcp-ads.tools-003.md#tool-gads_create_conversion_value_rule-7fa37aac) | Other product |
| [`gads_get_conversion_upload_summary`](royazran--mcp-ads.tools-003.md#tool-gads_get_conversion_upload_summary-ec236292) | Other product |
| [`gads_list_conversion_actions`](royazran--mcp-ads.tools-003.md#tool-gads_list_conversion_actions-34f3f826) | Other product |
| [`gads_list_conversion_value_rules`](royazran--mcp-ads.tools-003.md#tool-gads_list_conversion_value_rules-fbb97550) | Other product |
| [`gads_set_campaign_conversion_goals`](royazran--mcp-ads.tools-004.md#tool-gads_set_campaign_conversion_goals-46b8b885) | Other product |
| [`gads_set_customer_conversion_goals`](royazran--mcp-ads.tools-004.md#tool-gads_set_customer_conversion_goals-d48990af) | Other product |
| [`gads_update_conversion_value_rule`](royazran--mcp-ads.tools-004.md#tool-gads_update_conversion_value_rule-6d35396a) | Other product |
| [`gads_upload_offline_conversions`](royazran--mcp-ads.tools-004.md#tool-gads_upload_offline_conversions-92aecef1) | Other product |
| [`gads_upload_store_conversions`](royazran--mcp-ads.tools-004.md#tool-gads_upload_store_conversions-94d5cfef) | Other product |
| [`gads_create_customizer_attribute`](royazran--mcp-ads.tools-004.md#tool-gads_create_customizer_attribute-6f16924d) | Other product |
| [`gads_set_ad_group_criterion_customizer`](royazran--mcp-ads.tools-004.md#tool-gads_set_ad_group_criterion_customizer-e5649d0c) | Other product |
| [`gads_set_ad_group_customizer`](royazran--mcp-ads.tools-004.md#tool-gads_set_ad_group_customizer-4e1378d2) | Other product |
| [`gads_set_campaign_customizer`](royazran--mcp-ads.tools-004.md#tool-gads_set_campaign_customizer-624201ab) | Other product |
| [`gads_set_customer_customizer`](royazran--mcp-ads.tools-004.md#tool-gads_set_customer_customizer-a8f45f90) | Other product |
| [`gads_add_experiment_arm`](royazran--mcp-ads.tools-004.md#tool-gads_add_experiment_arm-b254ce4e) | Other product |
| [`gads_create_experiment`](royazran--mcp-ads.tools-004.md#tool-gads_create_experiment-540c1755) | Other product |
| [`gads_end_experiment`](royazran--mcp-ads.tools-004.md#tool-gads_end_experiment-4e7157e8) | Other product |
| [`gads_get_experiment_results`](royazran--mcp-ads.tools-004.md#tool-gads_get_experiment_results-52154f4c) | Other product |
| [`gads_list_experiments`](royazran--mcp-ads.tools-004.md#tool-gads_list_experiments-59f76bd4) | Other product |
| [`gads_promote_experiment`](royazran--mcp-ads.tools-004.md#tool-gads_promote_experiment-f1d63c10) | Other product |
| [`gads_schedule_experiment`](royazran--mcp-ads.tools-004.md#tool-gads_schedule_experiment-2f0bc479) | Other product |
| [`gads_add_campaign_negative_keyword`](royazran--mcp-ads.tools-004.md#tool-gads_add_campaign_negative_keyword-ef665981) | Other product |
| [`gads_add_keywords_to_shared_list`](royazran--mcp-ads.tools-004.md#tool-gads_add_keywords_to_shared_list-ec78a72e) | Other product |
| [`gads_attach_shared_list_to_campaign`](royazran--mcp-ads.tools-004.md#tool-gads_attach_shared_list_to_campaign-1c02dd3d) | Other product |
| [`gads_create_shared_negative_list`](royazran--mcp-ads.tools-004.md#tool-gads_create_shared_negative_list-d51fee64) | Other product |
| [`gads_forecast_keywords`](royazran--mcp-ads.tools-004.md#tool-gads_forecast_keywords-51eb1eba) | Other product |
| [`gads_get_keyword_details`](royazran--mcp-ads.tools-004.md#tool-gads_get_keyword_details-493ace94) | Other product |
| [`gads_get_keyword_ideas`](royazran--mcp-ads.tools-004.md#tool-gads_get_keyword_ideas-4aee9027) | Other product |
| [`gads_list_keywords`](royazran--mcp-ads.tools-004.md#tool-gads_list_keywords-418b7edb) | Other product |
| [`gads_list_negative_keywords`](royazran--mcp-ads.tools-004.md#tool-gads_list_negative_keywords-57cf6121) | Other product |
| [`gads_list_shared_lists`](royazran--mcp-ads.tools-004.md#tool-gads_list_shared_lists-85802026) | Other product |
| [`gads_remove_campaign_negative_keyword`](royazran--mcp-ads.tools-004.md#tool-gads_remove_campaign_negative_keyword-7ff6d483) | Other product |
| [`gads_remove_keyword`](royazran--mcp-ads.tools-004.md#tool-gads_remove_keyword-7d000a9b) | Other product |
| [`gads_update_keyword`](royazran--mcp-ads.tools-004.md#tool-gads_update_keyword-33f6048f) | Other product |
| [`gads_add_conversion_call_adjustments`](royazran--mcp-ads.tools-004.md#tool-gads_add_conversion_call_adjustments-1f883e4a) | Other product |
| [`gads_create_offline_user_data_job`](royazran--mcp-ads.tools-004.md#tool-gads_create_offline_user_data_job-fd998ec8) | Other product |
| [`gads_upload_enhanced_conversions`](royazran--mcp-ads.tools-004.md#tool-gads_upload_enhanced_conversions-9fa2aa57) | Other product |
| [`gads_forecast_reach`](royazran--mcp-ads.tools-004.md#tool-gads_forecast_reach-5b8c55b8) | Other product |
| [`gads_generate_audience_insights`](royazran--mcp-ads.tools-004.md#tool-gads_generate_audience_insights-8f09bb95) | Other product |
| [`gads_generate_keyword_ideas`](royazran--mcp-ads.tools-004.md#tool-gads_generate_keyword_ideas-cb421543) | Other product |
| [`gads_get_ad_strength_forecast`](royazran--mcp-ads.tools-004.md#tool-gads_get_ad_strength_forecast-fadd7781) | Other product |
| [`gads_plan_keyword_campaign`](royazran--mcp-ads.tools-004.md#tool-gads_plan_keyword_campaign-b171ee6e) | Other product |
| [`gads_generate_recommendations`](royazran--mcp-ads.tools-004.md#tool-gads_generate_recommendations-18c5b6f0) | Other product |
| [`gads_list_recommendations`](royazran--mcp-ads.tools-004.md#tool-gads_list_recommendations-f34e71b6) | Other product |
| [`gads_subscribe_to_recommendation_type`](royazran--mcp-ads.tools-004.md#tool-gads_subscribe_to_recommendation_type-63c3a41e) | Other product |
| [`gads_unsubscribe_from_recommendation_type`](royazran--mcp-ads.tools-004.md#tool-gads_unsubscribe_from_recommendation_type-dba48002) | Other product |
| [`gads_get_age_range_report`](royazran--mcp-ads.tools-004.md#tool-gads_get_age_range_report-9ac01e97) | Other product |
| [`gads_get_auction_insights`](royazran--mcp-ads.tools-004.md#tool-gads_get_auction_insights-a3cc15b7) | Other product |
| [`gads_get_campaign_search_term_insights`](royazran--mcp-ads.tools-004.md#tool-gads_get_campaign_search_term_insights-2fef3b33) | Other product |
| [`gads_get_change_event_log`](royazran--mcp-ads.tools-004.md#tool-gads_get_change_event_log-e9045b01) | Other product |
| [`gads_get_change_status_report`](royazran--mcp-ads.tools-004.md#tool-gads_get_change_status_report-2761244e) | Other product |
| [`gads_get_click_view_report`](royazran--mcp-ads.tools-004.md#tool-gads_get_click_view_report-a2da9765) | Other product |
| [`gads_get_content_suitability_report`](royazran--mcp-ads.tools-004.md#tool-gads_get_content_suitability_report-fbf28a7c) | Other product |
| [`gads_get_distance_report`](royazran--mcp-ads.tools-004.md#tool-gads_get_distance_report-a9989a0b) | Other product |
| [`gads_get_dynamic_search_ads_report`](royazran--mcp-ads.tools-004.md#tool-gads_get_dynamic_search_ads_report-8a460f56) | Other product |
| [`gads_get_gender_report`](royazran--mcp-ads.tools-004.md#tool-gads_get_gender_report-1daeacce) | Other product |
| [`gads_get_hotel_performance_report`](royazran--mcp-ads.tools-004.md#tool-gads_get_hotel_performance_report-0f8c9193) | Other product |
| [`gads_get_income_range_report`](royazran--mcp-ads.tools-004.md#tool-gads_get_income_range_report-0cace19b) | Other product |
| [`gads_get_paid_organic_report`](royazran--mcp-ads.tools-004.md#tool-gads_get_paid_organic_report-9ed8dd4a) | Other product |
| [`gads_get_parental_status_report`](royazran--mcp-ads.tools-004.md#tool-gads_get_parental_status_report-710f23a3) | Other product |
| [`gads_get_per_store_view`](royazran--mcp-ads.tools-004.md#tool-gads_get_per_store_view-42256a7c) | Other product |
| [`gads_get_placement_report`](royazran--mcp-ads.tools-004.md#tool-gads_get_placement_report-94765ef0) | Other product |
| [`gads_get_search_term_insights`](royazran--mcp-ads.tools-004.md#tool-gads_get_search_term_insights-4ac847af) | Other product |
| [`gads_run_custom_report`](royazran--mcp-ads.tools-004.md#tool-gads_run_custom_report-7e95762c) | Other product |
| [`gads_create_product_listing_group`](royazran--mcp-ads.tools-004.md#tool-gads_create_product_listing_group-63af494c) | Other product |
| [`gads_create_shopping_campaign`](royazran--mcp-ads.tools-004.md#tool-gads_create_shopping_campaign-645e84ad) | Other product |
| [`gads_get_shopping_performance`](royazran--mcp-ads.tools-004.md#tool-gads_get_shopping_performance-0301d827) | Other product |
| [`gads_get_shopping_product_report`](royazran--mcp-ads.tools-004.md#tool-gads_get_shopping_product_report-2d5ce7a7) | Other product |
| [`gads_link_merchant_center`](royazran--mcp-ads.tools-004.md#tool-gads_link_merchant_center-5c61c5fd) | Other product |
| [`gads_list_linked_merchant_centers`](royazran--mcp-ads.tools-004.md#tool-gads_list_linked_merchant_centers-4a0e153b) | Other product |
| [`gads_list_product_groups`](royazran--mcp-ads.tools-004.md#tool-gads_list_product_groups-9ff0bd5c) | Other product |
| [`gads_update_product_group`](royazran--mcp-ads.tools-004.md#tool-gads_update_product_group-185bc0de) | Other product |
| [`gads_create_smart_campaign`](royazran--mcp-ads.tools-004.md#tool-gads_create_smart_campaign-12c56ef8) | Other product |
| [`gads_suggest_smart_campaign_budget`](royazran--mcp-ads.tools-004.md#tool-gads_suggest_smart_campaign_budget-23059537) | Other product |
| [`gads_suggest_smart_campaign_keyword_themes`](royazran--mcp-ads.tools-004.md#tool-gads_suggest_smart_campaign_keyword_themes-17e75186) | Other product |
| [`gads_update_smart_campaign_settings`](royazran--mcp-ads.tools-004.md#tool-gads_update_smart_campaign_settings-b868c57f) | Other product |
| [`gads_create_custom_segment`](royazran--mcp-ads.tools-004.md#tool-gads_create_custom_segment-2e73b149) | Other product |
| [`gads_get_carrier_constants`](royazran--mcp-ads.tools-004.md#tool-gads_get_carrier_constants-d5f81525) | Other product |
| [`gads_get_detailed_demographics`](royazran--mcp-ads.tools-004.md#tool-gads_get_detailed_demographics-85699105) | Other product |
| [`gads_get_life_events`](royazran--mcp-ads.tools-004.md#tool-gads_get_life_events-a5484ccd) | Other product |
| [`gads_get_mobile_device_constants`](royazran--mcp-ads.tools-004.md#tool-gads_get_mobile_device_constants-9824fa8c) | Other product |
| [`gads_get_operating_system_constants`](royazran--mcp-ads.tools-004.md#tool-gads_get_operating_system_constants-54a5b582) | Other product |
| [`gads_get_user_interests`](royazran--mcp-ads.tools-004.md#tool-gads_get_user_interests-205267bd) | Other product |
| [`gads_list_language_constants`](royazran--mcp-ads.tools-004.md#tool-gads_list_language_constants-e329e4ae) | Other product |
| [`gads_list_topic_constants`](royazran--mcp-ads.tools-004.md#tool-gads_list_topic_constants-10309750) | Other product |
| [`gads_search_geo_targets`](royazran--mcp-ads.tools-004.md#tool-gads_search_geo_targets-ba856b49) | Other product |
| [`gads_set_content_exclusions`](royazran--mcp-ads.tools-004.md#tool-gads_set_content_exclusions-99e19875) | Other product |
| [`gads_set_placement_exclusions`](royazran--mcp-ads.tools-004.md#tool-gads_set_placement_exclusions-2b60059c) | Other product |
| [`gads_add_ad_group_carrier`](royazran--mcp-ads.tools-004.md#tool-gads_add_ad_group_carrier-1a15a15c) | Other product |
| [`gads_add_ad_group_mobile_device`](royazran--mcp-ads.tools-004.md#tool-gads_add_ad_group_mobile_device-bb04dcac) | Other product |
| [`gads_add_ad_group_operating_system`](royazran--mcp-ads.tools-004.md#tool-gads_add_ad_group_operating_system-416fb6c5) | Other product |
| [`gads_add_call_extension`](royazran--mcp-ads.tools-004.md#tool-gads_add_call_extension-d7fcfeed) | Other product |
| [`gads_add_campaign_carrier`](royazran--mcp-ads.tools-004.md#tool-gads_add_campaign_carrier-19dcd543) | Other product |
| [`gads_add_campaign_ip_exclusion`](royazran--mcp-ads.tools-004.md#tool-gads_add_campaign_ip_exclusion-b108c3d3) | Other product |
| [`gads_add_campaign_location_group`](royazran--mcp-ads.tools-004.md#tool-gads_add_campaign_location_group-e3698da8) | Other product |
| [`gads_add_campaign_mobile_device`](royazran--mcp-ads.tools-004.md#tool-gads_add_campaign_mobile_device-16d870f5) | Other product |
| [`gads_add_campaign_operating_system`](royazran--mcp-ads.tools-004.md#tool-gads_add_campaign_operating_system-a789dad7) | Other product |
| [`gads_add_customer_negative_keyword`](royazran--mcp-ads.tools-004.md#tool-gads_add_customer_negative_keyword-b7cf4e00) | Other product |
| [`gads_add_negative_audience_to_ad_group`](royazran--mcp-ads.tools-004.md#tool-gads_add_negative_audience_to_ad_group-0c49f319) | Other product |
| [`gads_add_negative_audience_to_campaign`](royazran--mcp-ads.tools-004.md#tool-gads_add_negative_audience_to_campaign-f1944824) | Other product |
| [`gads_add_pmax_brand_exclusion`](royazran--mcp-ads.tools-004.md#tool-gads_add_pmax_brand_exclusion-2fcf4247) | Other product |
| [`gads_add_structured_snippet`](royazran--mcp-ads.tools-004.md#tool-gads_add_structured_snippet-f9aeb08f) | Other product |
| [`gads_apply_label_to_keyword`](royazran--mcp-ads.tools-004.md#tool-gads_apply_label_to_keyword-088b666a) | Other product |
| [`gads_assign_budget_to_campaign`](royazran--mcp-ads.tools-004.md#tool-gads_assign_budget_to_campaign-e8f4b955) | Other product |
| [`gads_assign_portfolio_strategy_to_campaign`](royazran--mcp-ads.tools-004.md#tool-gads_assign_portfolio_strategy_to_campaign-a9c58a59) | Other product |
| [`gads_bulk_rename_ad_groups`](royazran--mcp-ads.tools-004.md#tool-gads_bulk_rename_ad_groups-9bd5bdf2) | Other product |
| [`gads_bulk_rename_campaigns`](royazran--mcp-ads.tools-004.md#tool-gads_bulk_rename_campaigns-635d021c) | Other product |
| [`gads_bulk_set_ai_max_search_campaigns`](royazran--mcp-ads.tools-004.md#tool-gads_bulk_set_ai_max_search_campaigns-d32d70a2) | Other product |
| [`gads_bulk_set_device_bid_modifiers`](royazran--mcp-ads.tools-004.md#tool-gads_bulk_set_device_bid_modifiers-9f679895) | Other product |
| [`gads_bulk_update_ad_group_names`](royazran--mcp-ads.tools-004.md#tool-gads_bulk_update_ad_group_names-78da6659) | Other product |
| [`gads_bulk_update_campaign_names`](royazran--mcp-ads.tools-004.md#tool-gads_bulk_update_campaign_names-efc0111c) | Other product |
| [`gads_check_accounts_inactivity`](royazran--mcp-ads.tools-004.md#tool-gads_check_accounts_inactivity-0e95c19a) | Other product |
| [`gads_clear_campaign_schedule`](royazran--mcp-ads.tools-004.md#tool-gads_clear_campaign_schedule-91d78d73) | Other product |
| [`gads_copy_schedule_to_campaigns`](royazran--mcp-ads.tools-004.md#tool-gads_copy_schedule_to_campaigns-39e1fe30) | Other product |
| [`gads_create_conversion_value_rule_set`](royazran--mcp-ads.tools-004.md#tool-gads_create_conversion_value_rule_set-a15b8159) | Other product |
| [`gads_create_customer`](royazran--mcp-ads.tools-004.md#tool-gads_create_customer-4fc4bb59) | Other product |
| [`gads_create_demand_gen_campaign`](royazran--mcp-ads.tools-004.md#tool-gads_create_demand_gen_campaign-4bcd95b3) | Other product |
| [`gads_create_discovery_campaign`](royazran--mcp-ads.tools-004.md#tool-gads_create_discovery_campaign-34d8719b) | Other product |
| [`gads_create_display_campaign`](royazran--mcp-ads.tools-004.md#tool-gads_create_display_campaign-6b8668b8) | Other product |
| [`gads_create_keyword`](royazran--mcp-ads.tools-004.md#tool-gads_create_keyword-15b5d44f) | Other product |
| [`gads_create_local_campaign`](royazran--mcp-ads.tools-004.md#tool-gads_create_local_campaign-a1048698) | Other product |
| [`gads_create_pmax_campaign`](royazran--mcp-ads.tools-004.md#tool-gads_create_pmax_campaign-2b2f44e3) | Other product |
| [`gads_create_rsa`](royazran--mcp-ads.tools-004.md#tool-gads_create_rsa-1f441574) | Other product |
| [`gads_create_search_campaign`](royazran--mcp-ads.tools-004.md#tool-gads_create_search_campaign-4a535e54) | Other product |
| [`gads_create_video_campaign`](royazran--mcp-ads.tools-004.md#tool-gads_create_video_campaign-79009397) | Other product |
| [`gads_create_video_responsive_ad`](royazran--mcp-ads.tools-004.md#tool-gads_create_video_responsive_ad-1c254b0d) | Other product |
| [`gads_detach_shared_list_from_campaign`](royazran--mcp-ads.tools-004.md#tool-gads_detach_shared_list_from_campaign-cc631ae3) | Other product |
| [`gads_enable_keyword`](royazran--mcp-ads.tools-004.md#tool-gads_enable_keyword-7949fd61) | Other product |
| [`gads_get_ad_group_cpa_simulation`](royazran--mcp-ads.tools-004.md#tool-gads_get_ad_group_cpa_simulation-847a1ff2) | Other product |
| [`gads_get_ad_group_cpc_estimates`](royazran--mcp-ads.tools-004.md#tool-gads_get_ad_group_cpc_estimates-0030ee00) | Other product |
| [`gads_get_ad_group_keyword_suggestions`](royazran--mcp-ads.tools-004.md#tool-gads_get_ad_group_keyword_suggestions-b8acde3e) | Other product |
| [`gads_get_ad_group_url_options`](royazran--mcp-ads.tools-004.md#tool-gads_get_ad_group_url_options-dd5d1344) | Other product |
| [`gads_get_ad_preview`](royazran--mcp-ads.tools-004.md#tool-gads_get_ad_preview-46cc3975) | Other product |
| [`gads_get_ad_schedule_bid_modifiers`](royazran--mcp-ads.tools-004.md#tool-gads_get_ad_schedule_bid_modifiers-b611ce68) | Other product |
| [`gads_get_asset_group_details`](royazran--mcp-ads.tools-004.md#tool-gads_get_asset_group_details-27ef1313) | Other product |
| [`gads_get_billing_setup`](royazran--mcp-ads.tools-004.md#tool-gads_get_billing_setup-1d56ace9) | Other product |
| [`gads_get_campaign_ai_max_status`](royazran--mcp-ads.tools-004.md#tool-gads_get_campaign_ai_max_status-9dd87da2) | Other product |
| [`gads_get_campaign_bidding_details`](royazran--mcp-ads.tools-004.md#tool-gads_get_campaign_bidding_details-0bcbaf79) | Other product |
| [`gads_get_campaign_experiment`](royazran--mcp-ads.tools-004.md#tool-gads_get_campaign_experiment-f4bfa9a4) | Other product |
| [`gads_get_campaign_frequency_cap`](royazran--mcp-ads.tools-004.md#tool-gads_get_campaign_frequency_cap-169ea413) | Other product |
| [`gads_get_campaign_schedule`](royazran--mcp-ads.tools-004.md#tool-gads_get_campaign_schedule-47d11bc3) | Other product |
| [`gads_get_campaign_targeting`](royazran--mcp-ads.tools-004.md#tool-gads_get_campaign_targeting-0d58d58c) | Other product |
| [`gads_get_campaign_url_options`](royazran--mcp-ads.tools-004.md#tool-gads_get_campaign_url_options-a2b02f2b) | Other product |
| [`gads_get_campaigns_without_spend`](royazran--mcp-ads.tools-004.md#tool-gads_get_campaigns_without_spend-915ddc68) | Other product |
| [`gads_get_dayofweek_performance`](royazran--mcp-ads.tools-004.md#tool-gads_get_dayofweek_performance-cbb301dc) | Other product |
| [`gads_get_device_bid_modifiers`](royazran--mcp-ads.tools-004.md#tool-gads_get_device_bid_modifiers-7f84167c) | Other product |
| [`gads_get_hotel_campaign_settings`](royazran--mcp-ads.tools-004.md#tool-gads_get_hotel_campaign_settings-fce8cf2d) | Other product |
| [`gads_get_keyword_bid_estimates`](royazran--mcp-ads.tools-004.md#tool-gads_get_keyword_bid_estimates-c9ca50b2) | Other product |
| [`gads_get_keyword_forecast`](royazran--mcp-ads.tools-004.md#tool-gads_get_keyword_forecast-12648dc1) | Other product |
| [`gads_get_keyword_quality_score`](royazran--mcp-ads.tools-004.md#tool-gads_get_keyword_quality_score-be55f49e) | Other product |
| [`gads_get_keyword_simulation`](royazran--mcp-ads.tools-004.md#tool-gads_get_keyword_simulation-411cb7d8) | Other product |
| [`gads_get_mcc_performance`](royazran--mcp-ads.tools-004.md#tool-gads_get_mcc_performance-f812f59b) | Other product |
| [`gads_get_payments_account`](royazran--mcp-ads.tools-004.md#tool-gads_get_payments_account-b98182a2) | Other product |
| [`gads_get_pmax_campaign_settings`](royazran--mcp-ads.tools-004.md#tool-gads_get_pmax_campaign_settings-e824b018) | Other product |
| [`gads_get_pmax_performance`](royazran--mcp-ads.tools-005.md#tool-gads_get_pmax_performance-6fad6e12) | Other product |
| [`gads_get_search_terms_report`](royazran--mcp-ads.tools-005.md#tool-gads_get_search_terms_report-e4fe93f4) | Other product |
| [`gads_get_sitelink_details`](royazran--mcp-ads.tools-005.md#tool-gads_get_sitelink_details-0ed60642) | Other product |
| [`gads_get_smart_campaign_status`](royazran--mcp-ads.tools-005.md#tool-gads_get_smart_campaign_status-56b24fa5) | Other product |
| [`gads_list_account_budgets`](royazran--mcp-ads.tools-005.md#tool-gads_list_account_budgets-66c43b00) | Other product |
| [`gads_list_accounts`](royazran--mcp-ads.tools-005.md#tool-gads_list_accounts-7d171754) | Other product |
| [`gads_list_ad_group_audience_criteria`](royazran--mcp-ads.tools-005.md#tool-gads_list_ad_group_audience_criteria-5c307ddc) | Other product |
| [`gads_list_ad_group_extensions`](royazran--mcp-ads.tools-005.md#tool-gads_list_ad_group_extensions-ebbc85e1) | Other product |
| [`gads_list_ad_group_location_targets`](royazran--mcp-ads.tools-005.md#tool-gads_list_ad_group_location_targets-2307d6eb) | Other product |
| [`gads_list_asset_automation_settings`](royazran--mcp-ads.tools-005.md#tool-gads_list_asset_automation_settings-c165e5d4) | Other product |
| [`gads_list_asset_group_audience_signals`](royazran--mcp-ads.tools-005.md#tool-gads_list_asset_group_audience_signals-ae795509) | Other product |
| [`gads_list_bidding_data_exclusions`](royazran--mcp-ads.tools-005.md#tool-gads_list_bidding_data_exclusions-c8493418) | Other product |
| [`gads_list_bidding_seasonality_adjustments`](royazran--mcp-ads.tools-005.md#tool-gads_list_bidding_seasonality_adjustments-d6a982ec) | Other product |
| [`gads_list_call_assets`](royazran--mcp-ads.tools-005.md#tool-gads_list_call_assets-11373891) | Other product |
| [`gads_list_campaign_audience_views`](royazran--mcp-ads.tools-005.md#tool-gads_list_campaign_audience_views-623e6668) | Other product |
| [`gads_list_campaign_audiences`](royazran--mcp-ads.tools-005.md#tool-gads_list_campaign_audiences-bc332c2a) | Other product |
| [`gads_list_campaign_drafts`](royazran--mcp-ads.tools-005.md#tool-gads_list_campaign_drafts-71254a39) | Other product |
| [`gads_list_campaign_ip_exclusions`](royazran--mcp-ads.tools-005.md#tool-gads_list_campaign_ip_exclusions-2811b902) | Other product |
| [`gads_list_campaign_language_targets`](royazran--mcp-ads.tools-005.md#tool-gads_list_campaign_language_targets-21caa816) | Other product |
| [`gads_list_campaign_location_targets`](royazran--mcp-ads.tools-005.md#tool-gads_list_campaign_location_targets-382fe773) | Other product |
| [`gads_list_campaign_negative_placements`](royazran--mcp-ads.tools-005.md#tool-gads_list_campaign_negative_placements-b8db1f00) | Other product |
| [`gads_list_campaigns_by_type`](royazran--mcp-ads.tools-005.md#tool-gads_list_campaigns_by_type-bca88922) | Other product |
| [`gads_list_conversion_categories`](royazran--mcp-ads.tools-005.md#tool-gads_list_conversion_categories-6fb138ca) | Other product |
| [`gads_list_conversion_value_rule_sets`](royazran--mcp-ads.tools-005.md#tool-gads_list_conversion_value_rule_sets-06f4b68c) | Other product |
| [`gads_list_feeds`](royazran--mcp-ads.tools-005.md#tool-gads_list_feeds-45ea1aeb) | Other product |
| [`gads_list_keywords_with_quality_score`](royazran--mcp-ads.tools-005.md#tool-gads_list_keywords_with_quality_score-06ec3949) | Other product |
| [`gads_list_pmax_brand_exclusions`](royazran--mcp-ads.tools-005.md#tool-gads_list_pmax_brand_exclusions-dba9d96c) | Other product |
| [`gads_list_price_assets`](royazran--mcp-ads.tools-005.md#tool-gads_list_price_assets-8d0540b5) | Other product |
| [`gads_list_promotion_assets`](royazran--mcp-ads.tools-005.md#tool-gads_list_promotion_assets-18db3c3c) | Other product |
| [`gads_list_rsa_performance`](royazran--mcp-ads.tools-005.md#tool-gads_list_rsa_performance-7040a81d) | Other product |
| [`gads_list_shared_budgets`](royazran--mcp-ads.tools-005.md#tool-gads_list_shared_budgets-3b33eb56) | Other product |
| [`gads_list_sitelinks`](royazran--mcp-ads.tools-005.md#tool-gads_list_sitelinks-14d1e09e) | Other product |
| [`gads_pause_keyword`](royazran--mcp-ads.tools-005.md#tool-gads_pause_keyword-4d164862) | Other product |
| [`gads_remove_ad_group_age_range`](royazran--mcp-ads.tools-005.md#tool-gads_remove_ad_group_age_range-bab9aacb) | Other product |
| [`gads_remove_ad_group_gender`](royazran--mcp-ads.tools-005.md#tool-gads_remove_ad_group_gender-3ef2471e) | Other product |
| [`gads_remove_ad_group_income_range`](royazran--mcp-ads.tools-005.md#tool-gads_remove_ad_group_income_range-91060294) | Other product |
| [`gads_remove_ad_group_mobile_device`](royazran--mcp-ads.tools-005.md#tool-gads_remove_ad_group_mobile_device-64fa171f) | Other product |
| [`gads_remove_ad_group_negative_placement`](royazran--mcp-ads.tools-005.md#tool-gads_remove_ad_group_negative_placement-fb6eb0fe) | Other product |
| [`gads_remove_ad_group_negative_topic`](royazran--mcp-ads.tools-005.md#tool-gads_remove_ad_group_negative_topic-0033af77) | Other product |
| [`gads_remove_ad_group_operating_system`](royazran--mcp-ads.tools-005.md#tool-gads_remove_ad_group_operating_system-3b36ffcf) | Other product |
| [`gads_remove_ad_group_parental_status`](royazran--mcp-ads.tools-005.md#tool-gads_remove_ad_group_parental_status-cbe39617) | Other product |
| [`gads_remove_ad_group_placement`](royazran--mcp-ads.tools-005.md#tool-gads_remove_ad_group_placement-b04e1d18) | Other product |
| [`gads_remove_ad_group_proximity`](royazran--mcp-ads.tools-005.md#tool-gads_remove_ad_group_proximity-930a0346) | Other product |
| [`gads_remove_ad_group_topic`](royazran--mcp-ads.tools-005.md#tool-gads_remove_ad_group_topic-528e6e24) | Other product |
| [`gads_remove_asset`](royazran--mcp-ads.tools-005.md#tool-gads_remove_asset-134646ee) | Other product |
| [`gads_remove_audience_from_ad_group`](royazran--mcp-ads.tools-005.md#tool-gads_remove_audience_from_ad_group-109d3f11) | Other product |
| [`gads_remove_audience_from_campaign`](royazran--mcp-ads.tools-005.md#tool-gads_remove_audience_from_campaign-24eacbb0) | Other product |
| [`gads_remove_bidding_data_exclusion`](royazran--mcp-ads.tools-005.md#tool-gads_remove_bidding_data_exclusion-b4869854) | Other product |
| [`gads_remove_bidding_seasonality_adjustment`](royazran--mcp-ads.tools-005.md#tool-gads_remove_bidding_seasonality_adjustment-9e6fae05) | Other product |
| [`gads_remove_campaign_carrier`](royazran--mcp-ads.tools-005.md#tool-gads_remove_campaign_carrier-a6d1877e) | Other product |
| [`gads_remove_campaign_draft`](royazran--mcp-ads.tools-005.md#tool-gads_remove_campaign_draft-1e55aaf2) | Other product |
| [`gads_remove_campaign_geo_target`](royazran--mcp-ads.tools-005.md#tool-gads_remove_campaign_geo_target-2f15c4fb) | Other product |
| [`gads_remove_campaign_ip_exclusion`](royazran--mcp-ads.tools-005.md#tool-gads_remove_campaign_ip_exclusion-bcbfc885) | Other product |
| [`gads_remove_campaign_language`](royazran--mcp-ads.tools-005.md#tool-gads_remove_campaign_language-3eb0d2ad) | Other product |
| [`gads_remove_campaign_mobile_device`](royazran--mcp-ads.tools-005.md#tool-gads_remove_campaign_mobile_device-b14575d2) | Other product |
| [`gads_remove_campaign_negative_topic`](royazran--mcp-ads.tools-005.md#tool-gads_remove_campaign_negative_topic-6d037465) | Other product |
| [`gads_remove_campaign_operating_system`](royazran--mcp-ads.tools-005.md#tool-gads_remove_campaign_operating_system-a86b26d0) | Other product |
| [`gads_remove_campaign_placement`](royazran--mcp-ads.tools-005.md#tool-gads_remove_campaign_placement-3ad827f4) | Other product |
| [`gads_remove_campaign_topic`](royazran--mcp-ads.tools-005.md#tool-gads_remove_campaign_topic-0fdbdd50) | Other product |
| [`gads_remove_keywords_from_shared_list`](royazran--mcp-ads.tools-005.md#tool-gads_remove_keywords_from_shared_list-aa1cfb04) | Other product |
| [`gads_remove_label_from_keyword`](royazran--mcp-ads.tools-005.md#tool-gads_remove_label_from_keyword-47905155) | Other product |
| [`gads_remove_pmax_brand_exclusion`](royazran--mcp-ads.tools-005.md#tool-gads_remove_pmax_brand_exclusion-19a6ae14) | Other product |
| [`gads_remove_users_from_customer_match_list`](royazran--mcp-ads.tools-005.md#tool-gads_remove_users_from_customer_match_list-fc9b0105) | Other product |
| [`gads_rename_ad_group`](royazran--mcp-ads.tools-005.md#tool-gads_rename_ad_group-83635cbd) | Other product |
| [`gads_rename_ad_with_label`](royazran--mcp-ads.tools-005.md#tool-gads_rename_ad_with_label-51c22319) | Other product |
| [`gads_rename_asset_group`](royazran--mcp-ads.tools-005.md#tool-gads_rename_asset_group-a994ffd0) | Other product |
| [`gads_rename_campaign`](royazran--mcp-ads.tools-005.md#tool-gads_rename_campaign-a5765d8c) | Other product |
| [`gads_request_review`](royazran--mcp-ads.tools-005.md#tool-gads_request_review-f135715c) | Other product |
| [`gads_run_offline_user_data_job`](royazran--mcp-ads.tools-005.md#tool-gads_run_offline_user_data_job-1ea3d093) | Other product |
| [`gads_set_ad_group_ad_rotation`](royazran--mcp-ads.tools-005.md#tool-gads_set_ad_group_ad_rotation-ce1951a5) | Other product |
| [`gads_set_ad_group_content_bid_criterion`](royazran--mcp-ads.tools-005.md#tool-gads_set_ad_group_content_bid_criterion-449d3e4c) | Other product |
| [`gads_set_ad_group_cpc_bid`](royazran--mcp-ads.tools-005.md#tool-gads_set_ad_group_cpc_bid-4da18302) | Other product |
| [`gads_set_ad_group_criterion_bid_modifier`](royazran--mcp-ads.tools-005.md#tool-gads_set_ad_group_criterion_bid_modifier-1dd2f43d) | Other product |
| [`gads_set_ad_group_custom_parameters`](royazran--mcp-ads.tools-005.md#tool-gads_set_ad_group_custom_parameters-ce1986fd) | Other product |
| [`gads_set_ad_group_device_bid_modifier`](royazran--mcp-ads.tools-005.md#tool-gads_set_ad_group_device_bid_modifier-73231ecf) | Other product |
| [`gads_set_ad_group_final_url_suffix`](royazran--mcp-ads.tools-005.md#tool-gads_set_ad_group_final_url_suffix-61466a4c) | Other product |
| [`gads_set_ad_group_target_cpa`](royazran--mcp-ads.tools-005.md#tool-gads_set_ad_group_target_cpa-506c42ea) | Other product |
| [`gads_set_ad_group_target_roas`](royazran--mcp-ads.tools-005.md#tool-gads_set_ad_group_target_roas-8f2b1447) | Other product |
| [`gads_set_ad_schedule_bid_modifier`](royazran--mcp-ads.tools-005.md#tool-gads_set_ad_schedule_bid_modifier-78281b4b) | Other product |
| [`gads_set_ad_url_suffix`](royazran--mcp-ads.tools-005.md#tool-gads_set_ad_url_suffix-21e6e901) | Other product |
| [`gads_set_app_campaign_settings`](royazran--mcp-ads.tools-005.md#tool-gads_set_app_campaign_settings-a3cfdfb7) | Other product |
| [`gads_set_asset_group_status`](royazran--mcp-ads.tools-005.md#tool-gads_set_asset_group_status-227fdf3a) | Other product |
| [`gads_set_campaign_ad_rotation`](royazran--mcp-ads.tools-005.md#tool-gads_set_campaign_ad_rotation-816b28c1) | Other product |
| [`gads_set_campaign_ai_max`](royazran--mcp-ads.tools-005.md#tool-gads_set_campaign_ai_max-58c6b46d) | Other product |
| [`gads_set_campaign_audience_setting`](royazran--mcp-ads.tools-005.md#tool-gads_set_campaign_audience_setting-bfde9ecc) | Other product |
| [`gads_set_campaign_broad_match_settings`](royazran--mcp-ads.tools-005.md#tool-gads_set_campaign_broad_match_settings-6061cbfc) | Other product |
| [`gads_set_campaign_budget_delivery`](royazran--mcp-ads.tools-005.md#tool-gads_set_campaign_budget_delivery-512c031d) | Other product |
| [`gads_set_campaign_custom_parameters`](royazran--mcp-ads.tools-005.md#tool-gads_set_campaign_custom_parameters-1de9ef03) | Other product |
| [`gads_set_campaign_customer_acquisition`](royazran--mcp-ads.tools-005.md#tool-gads_set_campaign_customer_acquisition-6db5bce8) | Other product |
| [`gads_set_campaign_customer_retention`](royazran--mcp-ads.tools-005.md#tool-gads_set_campaign_customer_retention-3283c247) | Other product |
| [`gads_set_campaign_final_url_suffix`](royazran--mcp-ads.tools-005.md#tool-gads_set_campaign_final_url_suffix-909203fd) | Other product |
| [`gads_set_campaign_geo_target_type`](royazran--mcp-ads.tools-005.md#tool-gads_set_campaign_geo_target_type-d8df60ac) | Other product |
| [`gads_set_campaign_networks`](royazran--mcp-ads.tools-005.md#tool-gads_set_campaign_networks-7b055b67) | Other product |
| [`gads_set_campaign_real_time_bidding`](royazran--mcp-ads.tools-005.md#tool-gads_set_campaign_real_time_bidding-9aa0799b) | Other product |
| [`gads_set_campaign_target_spend`](royazran--mcp-ads.tools-005.md#tool-gads_set_campaign_target_spend-0b582784) | Other product |
| [`gads_set_campaign_targeting_expansion`](royazran--mcp-ads.tools-005.md#tool-gads_set_campaign_targeting_expansion-e477916d) | Other product |
| [`gads_set_campaign_tracking_template`](royazran--mcp-ads.tools-005.md#tool-gads_set_campaign_tracking_template-42639f50) | Other product |
| [`gads_set_campaign_vanity_pharma`](royazran--mcp-ads.tools-005.md#tool-gads_set_campaign_vanity_pharma-5bc9591a) | Other product |
| [`gads_set_customer_final_url_suffix`](royazran--mcp-ads.tools-005.md#tool-gads_set_customer_final_url_suffix-2925980d) | Other product |
| [`gads_set_customer_tracking_template`](royazran--mcp-ads.tools-005.md#tool-gads_set_customer_tracking_template-e9601b96) | Other product |
| [`gads_set_device_bid_modifier`](royazran--mcp-ads.tools-005.md#tool-gads_set_device_bid_modifier-ea3c88e6) | Other product |
| [`gads_set_keyword_custom_parameters`](royazran--mcp-ads.tools-005.md#tool-gads_set_keyword_custom_parameters-b0579141) | Other product |
| [`gads_set_keyword_final_url_suffix`](royazran--mcp-ads.tools-005.md#tool-gads_set_keyword_final_url_suffix-d2f86ff6) | Other product |
| [`gads_set_keyword_final_urls`](royazran--mcp-ads.tools-005.md#tool-gads_set_keyword_final_urls-7c343472) | Other product |
| [`gads_set_keyword_tracking_template`](royazran--mcp-ads.tools-005.md#tool-gads_set_keyword_tracking_template-12e7302f) | Other product |
| [`gads_set_manual_cpc`](royazran--mcp-ads.tools-005.md#tool-gads_set_manual_cpc-32719dc0) | Other product |
| [`gads_set_manual_cpm`](royazran--mcp-ads.tools-005.md#tool-gads_set_manual_cpm-2e3d5860) | Other product |
| [`gads_set_manual_cpv`](royazran--mcp-ads.tools-005.md#tool-gads_set_manual_cpv-8ec5b5e4) | Other product |
| [`gads_set_maximize_clicks`](royazran--mcp-ads.tools-005.md#tool-gads_set_maximize_clicks-46be26fd) | Other product |
| [`gads_set_pmax_auto_created_assets`](royazran--mcp-ads.tools-005.md#tool-gads_set_pmax_auto_created_assets-adfa1a02) | Other product |
| [`gads_set_pmax_url_expansion`](royazran--mcp-ads.tools-005.md#tool-gads_set_pmax_url_expansion-76b1b3a0) | Other product |
| [`gads_set_schedule_all_campaigns`](royazran--mcp-ads.tools-005.md#tool-gads_set_schedule_all_campaigns-8c8b4496) | Other product |
| [`gads_set_shopping_campaign_settings`](royazran--mcp-ads.tools-005.md#tool-gads_set_shopping_campaign_settings-39f4074a) | Other product |
| [`gads_update_app_campaign`](royazran--mcp-ads.tools-005.md#tool-gads_update_app_campaign-201438cf) | Other product |
| [`gads_update_asset_group_name`](royazran--mcp-ads.tools-005.md#tool-gads_update_asset_group_name-d71d9012) | Other product |
| [`gads_update_call_asset`](royazran--mcp-ads.tools-005.md#tool-gads_update_call_asset-ba5e063b) | Other product |
| [`gads_update_callout_asset`](royazran--mcp-ads.tools-005.md#tool-gads_update_callout_asset-ea8b661a) | Other product |
| [`gads_update_dynamic_search_ad`](royazran--mcp-ads.tools-005.md#tool-gads_update_dynamic_search_ad-bc902864) | Other product |
| [`gads_update_expanded_text_ad`](royazran--mcp-ads.tools-005.md#tool-gads_update_expanded_text_ad-e1b4a83f) | Other product |
| [`gads_update_keyword_match_type`](royazran--mcp-ads.tools-005.md#tool-gads_update_keyword_match_type-3cfa8eb1) | Other product |
| [`gads_update_product_partition`](royazran--mcp-ads.tools-005.md#tool-gads_update_product_partition-c73b1c3d) | Other product |
| [`gads_update_sitelink_asset`](royazran--mcp-ads.tools-005.md#tool-gads_update_sitelink_asset-b71becf7) | Other product |
| [`gads_update_smart_campaign_keyword_themes`](royazran--mcp-ads.tools-005.md#tool-gads_update_smart_campaign_keyword_themes-5e84c19b) | Other product |
| [`gads_upload_conversion_adjustments`](royazran--mcp-ads.tools-005.md#tool-gads_upload_conversion_adjustments-387b9889) | Other product |
| [`google_ads_list_negative_keywords`](royazran--mcp-ads.tools-005.md#tool-google_ads_list_negative_keywords-47b9d5cb) | Other product |
| [`google_ads_list_adgroup_negative_keywords`](royazran--mcp-ads.tools-005.md#tool-google_ads_list_adgroup_negative_keywords-9b603321) | Other product |
| [`google_ads_add_adgroup_negative_keywords`](royazran--mcp-ads.tools-005.md#tool-google_ads_add_adgroup_negative_keywords-12e166d5) | Other product |
| [`google_ads_remove_campaign_negative_keyword`](royazran--mcp-ads.tools-005.md#tool-google_ads_remove_campaign_negative_keyword-73b0f6fe) | Other product |
| [`google_ads_remove_adgroup_negative_keyword`](royazran--mcp-ads.tools-005.md#tool-google_ads_remove_adgroup_negative_keyword-c950e8c3) | Other product |
| [`google_ads_list_shared_negative_keywords`](royazran--mcp-ads.tools-005.md#tool-google_ads_list_shared_negative_keywords-cc467e97) | Other product |
| [`google_ads_add_to_shared_negative_list`](royazran--mcp-ads.tools-005.md#tool-google_ads_add_to_shared_negative_list-216cbfd6) | Other product |
| [`google_ads_remove_from_shared_negative_list`](royazran--mcp-ads.tools-005.md#tool-google_ads_remove_from_shared_negative_list-6254e6f2) | Other product |
| [`google_ads_remove_shared_negative_list_from_campaign`](royazran--mcp-ads.tools-005.md#tool-google_ads_remove_shared_negative_list_from_campaign-5c3f32c2) | Other product |
| [`google_ads_shared_list_campaign_assignments`](royazran--mcp-ads.tools-005.md#tool-google_ads_shared_list_campaign_assignments-e4ddb341) | Other product |
| [`google_ads_add_search_term_as_negative`](royazran--mcp-ads.tools-005.md#tool-google_ads_add_search_term_as_negative-854b5c94) | Other product |
| [`google_ads_bulk_add_search_terms_as_negatives`](royazran--mcp-ads.tools-005.md#tool-google_ads_bulk_add_search_terms_as_negatives-c00b3c4f) | Other product |
| [`google_ads_create_shared_negative_list`](royazran--mcp-ads.tools-005.md#tool-google_ads_create_shared_negative_list-bd539b0b) | Other product |
| [`google_ads_apply_shared_negative_list`](royazran--mcp-ads.tools-005.md#tool-google_ads_apply_shared_negative_list-259e0bdf) | Other product |
| [`google_ads_list_adgroup_keywords`](royazran--mcp-ads.tools-005.md#tool-google_ads_list_adgroup_keywords-509af304) | Other product |
| [`google_ads_remove_keyword`](royazran--mcp-ads.tools-005.md#tool-google_ads_remove_keyword-f6ce3a85) | Other product |
| [`google_ads_update_keyword_match_type`](royazran--mcp-ads.tools-005.md#tool-google_ads_update_keyword_match_type-4bef236d) | Other product |
| [`google_ads_update_ad_status`](royazran--mcp-ads.tools-005.md#tool-google_ads_update_ad_status-1dd39c76) | Other product |
| [`google_ads_list_location_targets`](royazran--mcp-ads.tools-005.md#tool-google_ads_list_location_targets-ae34fc44) | Other product |
| [`google_ads_add_location_target`](royazran--mcp-ads.tools-005.md#tool-google_ads_add_location_target-a723463b) | Other product |
| [`google_ads_remove_location_target`](royazran--mcp-ads.tools-005.md#tool-google_ads_remove_location_target-216f76c5) | Other product |
| [`google_ads_get_ad_schedule`](royazran--mcp-ads.tools-005.md#tool-google_ads_get_ad_schedule-9f044181) | Other product |
| [`google_ads_set_ad_schedule`](royazran--mcp-ads.tools-005.md#tool-google_ads_set_ad_schedule-45197357) | Other product |
| [`google_ads_clear_ad_schedule`](royazran--mcp-ads.tools-005.md#tool-google_ads_clear_ad_schedule-e3276222) | Other product |
| [`google_ads_update_target_cpa`](royazran--mcp-ads.tools-005.md#tool-google_ads_update_target_cpa-5a45af8a) | Other product |
| [`google_ads_update_target_roas`](royazran--mcp-ads.tools-005.md#tool-google_ads_update_target_roas-c8dd931e) | Other product |
| [`google_ads_add_audience_to_campaign`](royazran--mcp-ads.tools-006.md#tool-google_ads_add_audience_to_campaign-4196d15b) | Other product |
| [`google_ads_list_mcc_clients`](royazran--mcp-ads.tools-006.md#tool-google_ads_list_mcc_clients-14bb09f1) | Other product |
| [`google_ads_upload_customer_match`](royazran--mcp-ads.tools-006.md#tool-google_ads_upload_customer_match-9f46f741) | Other product |
| [`google_ads_upload_offline_conversions`](royazran--mcp-ads.tools-006.md#tool-google_ads_upload_offline_conversions-deb1690a) | Other product |
| [`google_ads_copy_campaign`](royazran--mcp-ads.tools-006.md#tool-google_ads_copy_campaign-8bf32924) | Other product |
| [`google_ads_update_campaign_name`](royazran--mcp-ads.tools-006.md#tool-google_ads_update_campaign_name-29b71854) | Other product |
| [`google_ads_update_adgroup_name`](royazran--mcp-ads.tools-006.md#tool-google_ads_update_adgroup_name-c1b418e2) | Other product |
| [`google_ads_list_ads_in_adgroup`](royazran--mcp-ads.tools-006.md#tool-google_ads_list_ads_in_adgroup-0482b5b9) | Other product |
| [`meta_ads_overview`](royazran--mcp-ads.tools-006.md#tool-meta_ads_overview-f36453e5) | Other product |
| [`meta_ads_campaigns`](royazran--mcp-ads.tools-006.md#tool-meta_ads_campaigns-bcfa055c) | Other product |
| [`meta_ads_adsets`](royazran--mcp-ads.tools-006.md#tool-meta_ads_adsets-d2b25cc9) | Other product |
| [`meta_ads_daily_trend`](royazran--mcp-ads.tools-006.md#tool-meta_ads_daily_trend-811591d8) | Other product |
| [`meta_ads_ads`](royazran--mcp-ads.tools-006.md#tool-meta_ads_ads-aa854aa4) | Other product |
| [`meta_ads_demographics`](royazran--mcp-ads.tools-006.md#tool-meta_ads_demographics-37823389) | Other product |
| [`meta_ads_placements`](royazran--mcp-ads.tools-006.md#tool-meta_ads_placements-d12fcbe7) | Other product |
| [`meta_ads_geo`](royazran--mcp-ads.tools-006.md#tool-meta_ads_geo-d941d07b) | Other product |
| [`meta_ads_video_performance`](royazran--mcp-ads.tools-006.md#tool-meta_ads_video_performance-bd8643a0) | Other product |
| [`meta_ads_conversion_funnel`](royazran--mcp-ads.tools-006.md#tool-meta_ads_conversion_funnel-9131e2d2) | Other product |
| [`meta_ads_frequency`](royazran--mcp-ads.tools-006.md#tool-meta_ads_frequency-06c85eeb) | Other product |
| [`meta_ads_hourly_trend`](royazran--mcp-ads.tools-006.md#tool-meta_ads_hourly_trend-9171af29) | Other product |
| [`meta_ads_list_ad_accounts`](royazran--mcp-ads.tools-006.md#tool-meta_ads_list_ad_accounts-ae979e44) | Other product |
| [`meta_ads_audiences`](royazran--mcp-ads.tools-006.md#tool-meta_ads_audiences-882e99d7) | Other product |
| [`meta_ads_check_permissions`](royazran--mcp-ads.tools-006.md#tool-meta_ads_check_permissions-3428890e) | Other product |
| [`meta_ads_pages`](royazran--mcp-ads.tools-006.md#tool-meta_ads_pages-987bdcdf) | Other product |
| [`meta_ads_find_page`](royazran--mcp-ads.tools-006.md#tool-meta_ads_find_page-d0cdbe71) | Other product |
| [`meta_ads_pixels`](royazran--mcp-ads.tools-006.md#tool-meta_ads_pixels-7fd555f3) | Other product |
| [`meta_ads_catalog`](royazran--mcp-ads.tools-006.md#tool-meta_ads_catalog-d4a473c3) | Other product |
| [`meta_ads_creative_previews`](royazran--mcp-ads.tools-006.md#tool-meta_ads_creative_previews-e0f40813) | Other product |
| [`meta_ads_page_insights`](royazran--mcp-ads.tools-006.md#tool-meta_ads_page_insights-d68d2b82) | Other product |
| [`meta_ads_reach_estimate`](royazran--mcp-ads.tools-006.md#tool-meta_ads_reach_estimate-86208ff2) | Other product |
| [`meta_ads_targeting_search`](royazran--mcp-ads.tools-006.md#tool-meta_ads_targeting_search-8b5a8aec) | Other product |
| [`meta_ads_find_location`](royazran--mcp-ads.tools-006.md#tool-meta_ads_find_location-7317cab9) | Other product |
| [`meta_ads_build_geo_targeting`](royazran--mcp-ads.tools-006.md#tool-meta_ads_build_geo_targeting-fbb69773) | Other product |
| [`meta_ads_pixel_stats`](royazran--mcp-ads.tools-006.md#tool-meta_ads_pixel_stats-47239c9f) | Other product |
| [`meta_ads_custom_conversions`](royazran--mcp-ads.tools-006.md#tool-meta_ads_custom_conversions-53ff214c) | Other product |
| [`meta_ads_list_image_assets`](royazran--mcp-ads.tools-006.md#tool-meta_ads_list_image_assets-9469c544) | Other product |
| [`meta_ads_list_video_assets`](royazran--mcp-ads.tools-006.md#tool-meta_ads_list_video_assets-9f0beeaf) | Other product |
| [`meta_ads_list_creative_assets`](royazran--mcp-ads.tools-006.md#tool-meta_ads_list_creative_assets-5f4583b8) | Other product |
| [`meta_ads_media_library`](royazran--mcp-ads.tools-006.md#tool-meta_ads_media_library-932ef83d) | Other product |
| [`meta_ads_ad_creatives`](royazran--mcp-ads.tools-006.md#tool-meta_ads_ad_creatives-bf18a39d) | Other product |
| [`meta_ads_list_campaigns`](royazran--mcp-ads.tools-006.md#tool-meta_ads_list_campaigns-028efa4e) | Other product |
| [`meta_ads_list_adsets`](royazran--mcp-ads.tools-006.md#tool-meta_ads_list_adsets-ba1ba46c) | Other product |
| [`meta_ads_update_status`](royazran--mcp-ads.tools-006.md#tool-meta_ads_update_status-17c8ed72) | Other product |
| [`meta_ads_update_budget`](royazran--mcp-ads.tools-006.md#tool-meta_ads_update_budget-5b41daf2) | Other product |
| [`meta_ads_update_adset_budget`](royazran--mcp-ads.tools-006.md#tool-meta_ads_update_adset_budget-7f26647b) | Other product |
| [`meta_ads_switch_budget_mode`](royazran--mcp-ads.tools-006.md#tool-meta_ads_switch_budget_mode-925fdcaf) | Other product |
| [`meta_ads_create_campaign`](royazran--mcp-ads.tools-006.md#tool-meta_ads_create_campaign-8dfdba44) | Other product |
| [`meta_ads_create_lead_campaign`](royazran--mcp-ads.tools-006.md#tool-meta_ads_create_lead_campaign-c04677a8) | Other product |
| [`meta_ads_create_adset`](royazran--mcp-ads.tools-006.md#tool-meta_ads_create_adset-32ee7f46) | Other product |
| [`meta_ads_create_lead_adset`](royazran--mcp-ads.tools-006.md#tool-meta_ads_create_lead_adset-9c42a77c) | Other product |
| [`meta_ads_create_whatsapp_adset`](royazran--mcp-ads.tools-006.md#tool-meta_ads_create_whatsapp_adset-3f15e92c) | Other product |
| [`meta_ads_create_ad_creative`](royazran--mcp-ads.tools-006.md#tool-meta_ads_create_ad_creative-d48fb38c) | Other product |
| [`meta_ads_upload_ad_video`](royazran--mcp-ads.tools-006.md#tool-meta_ads_upload_ad_video-f1471332) | Other product |
| [`meta_ads_upload_video_file_bytes_to_meta`](royazran--mcp-ads.tools-006.md#tool-meta_ads_upload_video_file_bytes_to_meta-5fa3ef32) | Other product |
| [`meta_ads_create_video_ad_creative`](royazran--mcp-ads.tools-006.md#tool-meta_ads_create_video_ad_creative-4948d74f) | Other product |
| [`meta_ads_create_video_ad_from_media`](royazran--mcp-ads.tools-006.md#tool-meta_ads_create_video_ad_from_media-ed962627) | Other product |
| [`meta_ads_create_video_ad_from_source`](royazran--mcp-ads.tools-006.md#tool-meta_ads_create_video_ad_from_source-654ebc78) | Other product |
| [`meta_upload_ad_video`](royazran--mcp-ads.tools-006.md#tool-meta_upload_ad_video-11cbf34d) | Other product |
| [`meta_ads_test_media_upload_flow`](royazran--mcp-ads.tools-006.md#tool-meta_ads_test_media_upload_flow-4928f361) | Other product |
| [`meta_ads_get_video_upload_status`](royazran--mcp-ads.tools-006.md#tool-meta_ads_get_video_upload_status-c92f1d6b) | Other product |
| [`meta_create_video_ad`](royazran--mcp-ads.tools-006.md#tool-meta_create_video_ad-78331ba0) | Other product |
| [`meta_ads_create_ad`](royazran--mcp-ads.tools-006.md#tool-meta_ads_create_ad-a6d123f6) | Other product |
| [`meta_create_ad`](royazran--mcp-ads.tools-006.md#tool-meta_create_ad-22d337a0) | Other product |
| [`meta_ads_duplicate_campaign`](royazran--mcp-ads.tools-006.md#tool-meta_ads_duplicate_campaign-c8c509a7) | Other product |
| [`meta_ads_duplicate_adset`](royazran--mcp-ads.tools-006.md#tool-meta_ads_duplicate_adset-c93aded6) | Other product |
| [`meta_ads_update_adset_targeting`](royazran--mcp-ads.tools-006.md#tool-meta_ads_update_adset_targeting-df62be37) | Other product |
| [`meta_ads_create_audience`](royazran--mcp-ads.tools-006.md#tool-meta_ads_create_audience-e3359615) | Other product |
| [`meta_ads_create_lookalike`](royazran--mcp-ads.tools-006.md#tool-meta_ads_create_lookalike-0c6bcd21) | Other product |
| [`meta_ads_leadgen_forms`](royazran--mcp-ads.tools-006.md#tool-meta_ads_leadgen_forms-f0ae3aae) | Other product |
| [`meta_ads_page_feed`](royazran--mcp-ads.tools-006.md#tool-meta_ads_page_feed-c1ccee99) | Other product |
| [`meta_ads_page_post`](royazran--mcp-ads.tools-006.md#tool-meta_ads_page_post-ba1996ec) | Other product |
| [`meta_ads_create_page_post`](royazran--mcp-ads.tools-006.md#tool-meta_ads_create_page_post-6d05db21) | Other product |
| [`meta_ads_update_page_post`](royazran--mcp-ads.tools-006.md#tool-meta_ads_update_page_post-13cc009e) | Other product |
| [`meta_ads_delete_page_post`](royazran--mcp-ads.tools-006.md#tool-meta_ads_delete_page_post-2e557a02) | Other product |
| [`meta_ads_page_scheduled_posts`](royazran--mcp-ads.tools-006.md#tool-meta_ads_page_scheduled_posts-fd417f08) | Other product |
| [`meta_ads_bulk_create_page_post`](royazran--mcp-ads.tools-006.md#tool-meta_ads_bulk_create_page_post-c7d3aa59) | Other product |
| [`meta_ads_portfolio_scheduled_content`](royazran--mcp-ads.tools-006.md#tool-meta_ads_portfolio_scheduled_content-49cc3372) | Other product |
| [`meta_ads_post_comments`](royazran--mcp-ads.tools-006.md#tool-meta_ads_post_comments-90992f2a) | Other product |
| [`meta_ads_reply_to_comment`](royazran--mcp-ads.tools-006.md#tool-meta_ads_reply_to_comment-1f7c6f84) | Other product |
| [`meta_ads_hide_comment`](royazran--mcp-ads.tools-006.md#tool-meta_ads_hide_comment-e2e99c38) | Other product |
| [`meta_ads_delete_comment`](royazran--mcp-ads.tools-006.md#tool-meta_ads_delete_comment-37524456) | Other product |
| [`meta_ads_like_object`](royazran--mcp-ads.tools-006.md#tool-meta_ads_like_object-a305874d) | Other product |
| [`meta_ads_page_conversations`](royazran--mcp-ads.tools-006.md#tool-meta_ads_page_conversations-5648dd8a) | Other product |
| [`meta_ads_conversation_messages`](royazran--mcp-ads.tools-006.md#tool-meta_ads_conversation_messages-bb88bbc4) | Other product |
| [`meta_ads_reply_to_page_message`](royazran--mcp-ads.tools-006.md#tool-meta_ads_reply_to_page_message-b0606eda) | Other product |
| [`meta_ads_page_photos`](royazran--mcp-ads.tools-006.md#tool-meta_ads_page_photos-6b819afc) | Other product |
| [`meta_ads_page_videos`](royazran--mcp-ads.tools-006.md#tool-meta_ads_page_videos-46849ed1) | Other product |
| [`meta_ads_page_albums`](royazran--mcp-ads.tools-006.md#tool-meta_ads_page_albums-28c7642a) | Other product |
| [`meta_ads_page_events`](royazran--mcp-ads.tools-006.md#tool-meta_ads_page_events-876022e3) | Other product |
| [`meta_ads_create_page_event`](royazran--mcp-ads.tools-006.md#tool-meta_ads_create_page_event-3db94844) | Other product |
| [`meta_ads_page_reviews`](royazran--mcp-ads.tools-006.md#tool-meta_ads_page_reviews-4c6ca7c1) | Other product |
| [`meta_ads_page_info`](royazran--mcp-ads.tools-006.md#tool-meta_ads_page_info-09ab4020) | Other product |
| [`meta_ads_update_page_info`](royazran--mcp-ads.tools-006.md#tool-meta_ads_update_page_info-53955b81) | Other product |
| [`meta_ads_page_mentions`](royazran--mcp-ads.tools-006.md#tool-meta_ads_page_mentions-f1129394) | Other product |
| [`meta_ads_page_post_reactions`](royazran--mcp-ads.tools-006.md#tool-meta_ads_page_post_reactions-abce35fa) | Other product |
| [`meta_ads_page_roles`](royazran--mcp-ads.tools-006.md#tool-meta_ads_page_roles-2a0a77ae) | Other product |
| [`meta_ads_add_page_role`](royazran--mcp-ads.tools-006.md#tool-meta_ads_add_page_role-dcd9e0fc) | Other product |
| [`meta_ads_remove_page_role`](royazran--mcp-ads.tools-006.md#tool-meta_ads_remove_page_role-68773bbb) | Other product |
| [`meta_ads_page_blocked_users`](royazran--mcp-ads.tools-006.md#tool-meta_ads_page_blocked_users-3993bfcc) | Other product |
| [`meta_ads_block_page_user`](royazran--mcp-ads.tools-006.md#tool-meta_ads_block_page_user-f01dcc09) | Other product |
| [`meta_ads_unblock_page_user`](royazran--mcp-ads.tools-006.md#tool-meta_ads_unblock_page_user-9359d2c8) | Other product |
| [`meta_ads_instagram_account`](royazran--mcp-ads.tools-006.md#tool-meta_ads_instagram_account-c8469ea7) | Other product |
| [`meta_ads_instagram_media`](royazran--mcp-ads.tools-006.md#tool-meta_ads_instagram_media-d3c326f9) | Other product |
| [`meta_ads_create_instagram_post`](royazran--mcp-ads.tools-006.md#tool-meta_ads_create_instagram_post-b601af0a) | Other product |
| [`meta_ads_bulk_create_instagram_post`](royazran--mcp-ads.tools-006.md#tool-meta_ads_bulk_create_instagram_post-865e9d01) | Other product |
| [`meta_ads_instagram_insights`](royazran--mcp-ads.tools-006.md#tool-meta_ads_instagram_insights-a1891d7c) | Other product |
| [`meta_ads_publish_page_post_to_instagram`](royazran--mcp-ads.tools-006.md#tool-meta_ads_publish_page_post_to_instagram-246036c4) | Other product |
| [`meta_ads_set_page_publish_status`](royazran--mcp-ads.tools-006.md#tool-meta_ads_set_page_publish_status-c78cdd10) | Other product |
| [`meta_ads_page_insights_extended`](royazran--mcp-ads.tools-006.md#tool-meta_ads_page_insights_extended-a6033bf1) | Other product |
| [`meta_google_drive_list_videos`](royazran--mcp-ads.tools-006.md#tool-meta_google_drive_list_videos-e384241e) | Other product |
| [`meta_google_drive_get_video_info`](royazran--mcp-ads.tools-006.md#tool-meta_google_drive_get_video_info-6ae15f35) | Other product |
| [`meta_google_drive_upload_video_to_meta`](royazran--mcp-ads.tools-006.md#tool-meta_google_drive_upload_video_to_meta-01100b6a) | Other product |
| [`meta_google_drive_list_files`](royazran--mcp-ads.tools-006.md#tool-meta_google_drive_list_files-3e238fae) | Other product |
| [`meta_google_drive_download_file`](royazran--mcp-ads.tools-006.md#tool-meta_google_drive_download_file-ef8d2fda) | Other product |
| [`meta_google_drive_watch_folder`](royazran--mcp-ads.tools-006.md#tool-meta_google_drive_watch_folder-4b7003c2) | Other product |
| [`meta_ads_ad_account`](royazran--mcp-ads.tools-006.md#tool-meta_ads_ad_account-32181642) | Other product |
| [`meta_ads_account_spending_limit`](royazran--mcp-ads.tools-006.md#tool-meta_ads_account_spending_limit-73fea9e9) | Other product |
| [`meta_ads_list_ads`](royazran--mcp-ads.tools-006.md#tool-meta_ads_list_ads-36ff1d1d) | Other product |
| [`meta_ads_ad`](royazran--mcp-ads.tools-006.md#tool-meta_ads_ad-91168ab0) | Other product |
| [`meta_ads_update_ad`](royazran--mcp-ads.tools-006.md#tool-meta_ads_update_ad-822671f8) | Other product |
| [`meta_ads_delete_ad`](royazran--mcp-ads.tools-006.md#tool-meta_ads_delete_ad-60e18b64) | Other product |
| [`meta_ads_delete_adset`](royazran--mcp-ads.tools-006.md#tool-meta_ads_delete_adset-7e649ca8) | Other product |
| [`meta_ads_delete_campaign`](royazran--mcp-ads.tools-006.md#tool-meta_ads_delete_campaign-4102c13a) | Other product |
| [`meta_ads_ad_creative`](royazran--mcp-ads.tools-006.md#tool-meta_ads_ad_creative-c14952a4) | Other product |
| [`meta_ads_replace_ad_image`](royazran--mcp-ads.tools-006.md#tool-meta_ads_replace_ad_image-a0016c7f) | Other product |
| [`meta_ads_update_ad_creative`](royazran--mcp-ads.tools-006.md#tool-meta_ads_update_ad_creative-6ca414df) | Other product |
| [`meta_ads_upload_image_to_meta`](royazran--mcp-ads.tools-006.md#tool-meta_ads_upload_image_to_meta-4f448ca5) | Other product |
| [`meta_ads_upload_image_file_bytes_to_meta`](royazran--mcp-ads.tools-006.md#tool-meta_ads_upload_image_file_bytes_to_meta-ad31a083) | Other product |
| [`meta_ads_create_image_ad_from_media`](royazran--mcp-ads.tools-006.md#tool-meta_ads_create_image_ad_from_media-7aac97fe) | Other product |
| [`meta_ads_create_image_ad_from_source`](royazran--mcp-ads.tools-006.md#tool-meta_ads_create_image_ad_from_source-e3471a85) | Other product |
| [`meta_ads_get_upload_url`](royazran--mcp-ads.tools-006.md#tool-meta_ads_get_upload_url-96592ffe) | Other product |
| [`meta_upload_ad_image`](royazran--mcp-ads.tools-006.md#tool-meta_upload_ad_image-d206cc5b) | Other product |
| [`meta_create_image_ad`](royazran--mcp-ads.tools-006.md#tool-meta_create_image_ad-c32e51d2) | Other product |
| [`meta_ads_create_carousel_ad_creative`](royazran--mcp-ads.tools-006.md#tool-meta_ads_create_carousel_ad_creative-4b720bef) | Other product |
| [`meta_ads_create_story_ad_creative`](royazran--mcp-ads.tools-006.md#tool-meta_ads_create_story_ad_creative-ee807bb3) | Other product |
| [`meta_ads_create_collection_ad_creative`](royazran--mcp-ads.tools-006.md#tool-meta_ads_create_collection_ad_creative-49d14000) | Other product |
| [`meta_ads_upload_customer_list_to_audience`](royazran--mcp-ads.tools-006.md#tool-meta_ads_upload_customer_list_to_audience-a5fac25b) | Other product |
| [`meta_ads_delete_audience`](royazran--mcp-ads.tools-006.md#tool-meta_ads_delete_audience-9aa20da9) | Other product |
| [`meta_ads_audience`](royazran--mcp-ads.tools-006.md#tool-meta_ads_audience-69f1e6c3) | Other product |
| [`meta_ads_update_audience`](royazran--mcp-ads.tools-006.md#tool-meta_ads_update_audience-cfdc2cf1) | Other product |
| [`meta_ads_create_website_audience`](royazran--mcp-ads.tools-006.md#tool-meta_ads_create_website_audience-5224dd5b) | Other product |
| [`meta_ads_create_engagement_audience`](royazran--mcp-ads.tools-006.md#tool-meta_ads_create_engagement_audience-d8e7473c) | Other product |
| [`meta_ads_campaign_performance`](royazran--mcp-ads.tools-006.md#tool-meta_ads_campaign_performance-0d3fa75c) | Other product |
| [`meta_ads_adset_performance`](royazran--mcp-ads.tools-006.md#tool-meta_ads_adset_performance-fdff0df5) | Other product |
| [`meta_ads_ad_performance`](royazran--mcp-ads.tools-006.md#tool-meta_ads_ad_performance-ea9ec6cb) | Other product |
| [`meta_ads_geo_performance`](royazran--mcp-ads.tools-006.md#tool-meta_ads_geo_performance-06777f07) | Other product |
| [`meta_ads_device_performance`](royazran--mcp-ads.tools-006.md#tool-meta_ads_device_performance-624bbdf5) | Other product |
| [`meta_ads_attribution_report`](royazran--mcp-ads.tools-006.md#tool-meta_ads_attribution_report-199438c4) | Other product |
| [`meta_ads_create_pixel`](royazran--mcp-ads.tools-006.md#tool-meta_ads_create_pixel-30bb8814) | Other product |
| [`meta_ads_pixel_events`](royazran--mcp-ads.tools-006.md#tool-meta_ads_pixel_events-51a15cef) | Other product |
| [`meta_ads_send_server_event`](royazran--mcp-ads.tools-007.md#tool-meta_ads_send_server_event-1260bf0c) | Other product |
| [`meta_ads_create_custom_conversion`](royazran--mcp-ads.tools-007.md#tool-meta_ads_create_custom_conversion-d4b82bd0) | Other product |
| [`meta_ads_instagram_stories`](royazran--mcp-ads.tools-007.md#tool-meta_ads_instagram_stories-d4d2f723) | Other product |
| [`meta_ads_create_instagram_reel`](royazran--mcp-ads.tools-007.md#tool-meta_ads_create_instagram_reel-7036ac6a) | Other product |
| [`meta_ads_instagram_post_insights`](royazran--mcp-ads.tools-007.md#tool-meta_ads_instagram_post_insights-7edddd5e) | Other product |
| [`meta_ads_schedule_instagram_post`](royazran--mcp-ads.tools-007.md#tool-meta_ads_schedule_instagram_post-5f862cb3) | Other product |
| [`meta_ads_delete_instagram_post`](royazran--mcp-ads.tools-007.md#tool-meta_ads_delete_instagram_post-22c320c3) | Other product |
| [`meta_ads_instagram_mentions`](royazran--mcp-ads.tools-007.md#tool-meta_ads_instagram_mentions-939e18f9) | Other product |
| [`meta_ads_reply_to_instagram_comment`](royazran--mcp-ads.tools-007.md#tool-meta_ads_reply_to_instagram_comment-57c229c5) | Other product |
| [`meta_ads_delete_instagram_comment`](royazran--mcp-ads.tools-007.md#tool-meta_ads_delete_instagram_comment-1c0beecf) | Other product |
| [`meta_ads_instagram_hashtag_posts`](royazran--mcp-ads.tools-007.md#tool-meta_ads_instagram_hashtag_posts-1535630d) | Other product |
| [`meta_ads_instagram_competitor_analysis`](royazran--mcp-ads.tools-007.md#tool-meta_ads_instagram_competitor_analysis-5edcfb9b) | Other product |
| [`meta_ads_page_photo_album`](royazran--mcp-ads.tools-007.md#tool-meta_ads_page_photo_album-bdd7d4b6) | Other product |
| [`meta_ads_create_page_photo_album`](royazran--mcp-ads.tools-007.md#tool-meta_ads_create_page_photo_album-dde4411c) | Other product |
| [`meta_ads_page_stories`](royazran--mcp-ads.tools-007.md#tool-meta_ads_page_stories-0067093a) | Other product |
| [`meta_ads_pin_post`](royazran--mcp-ads.tools-007.md#tool-meta_ads_pin_post-fa3cd6ef) | Other product |
| [`meta_ads_page_tags`](royazran--mcp-ads.tools-007.md#tool-meta_ads_page_tags-4b16171f) | Other product |
| [`meta_ads_page_liked_pages`](royazran--mcp-ads.tools-007.md#tool-meta_ads_page_liked_pages-688b5654) | Other product |
| [`meta_ads_list_catalog_products`](royazran--mcp-ads.tools-007.md#tool-meta_ads_list_catalog_products-115f215f) | Other product |
| [`meta_ads_catalog_diagnostics`](royazran--mcp-ads.tools-007.md#tool-meta_ads_catalog_diagnostics-316aa7e8) | Other product |
| [`meta_ads_create_product_set`](royazran--mcp-ads.tools-007.md#tool-meta_ads_create_product_set-f30c8512) | Other product |
| [`meta_ads_product_sets`](royazran--mcp-ads.tools-007.md#tool-meta_ads_product_sets-6267d7ec) | Other product |
| [`meta_ads_ad_account_users`](royazran--mcp-ads.tools-007.md#tool-meta_ads_ad_account_users-bcb1088a) | Other product |
| [`meta_ads_add_ad_account_user`](royazran--mcp-ads.tools-007.md#tool-meta_ads_add_ad_account_user-9ccc92c4) | Other product |
| [`meta_ads_remove_ad_account_user`](royazran--mcp-ads.tools-007.md#tool-meta_ads_remove_ad_account_user-b4d2b524) | Other product |
| [`meta_ads_business_pages`](royazran--mcp-ads.tools-007.md#tool-meta_ads_business_pages-23360c65) | Other product |
| [`meta_ads_targeting_suggestions`](royazran--mcp-ads.tools-007.md#tool-meta_ads_targeting_suggestions-07878e4f) | Other product |
| [`meta_ads_copy_ad_to_adset`](royazran--mcp-ads.tools-007.md#tool-meta_ads_copy_ad_to_adset-232df37d) | Other product |
| [`meta_ads_preview_ad_creative`](royazran--mcp-ads.tools-007.md#tool-meta_ads_preview_ad_creative-621a7ef0) | Other product |
| [`meta_ads_bulk_updater`](royazran--mcp-ads.tools-007.md#tool-meta_ads_bulk_updater-7c2407b4) | Other product |
| [`meta_ads_image_pipeline`](royazran--mcp-ads.tools-007.md#tool-meta_ads_image_pipeline-39225a5d) | Other product |
| [`meta_ads_adset_matrix_builder`](royazran--mcp-ads.tools-007.md#tool-meta_ads_adset_matrix_builder-43761088) | Other product |
| [`meta_ads_lead_export`](royazran--mcp-ads.tools-007.md#tool-meta_ads_lead_export-29374b56) | Other product |
| [`meta_ads_cross_account_report`](royazran--mcp-ads.tools-007.md#tool-meta_ads_cross_account_report-0aa72707) | Other product |
| [`meta_ads_frequency_watcher`](royazran--mcp-ads.tools-007.md#tool-meta_ads_frequency_watcher-f9f62575) | Other product |
| [`meta_ads_create_automated_rule`](royazran--mcp-ads.tools-007.md#tool-meta_ads_create_automated_rule-4c0aa76a) | Other product |
| [`meta_ads_list_automated_rules`](royazran--mcp-ads.tools-007.md#tool-meta_ads_list_automated_rules-a4172228) | Other product |
| [`meta_ads_update_automated_rule`](royazran--mcp-ads.tools-007.md#tool-meta_ads_update_automated_rule-488943d5) | Other product |
| [`meta_ads_delete_automated_rule`](royazran--mcp-ads.tools-007.md#tool-meta_ads_delete_automated_rule-b857bbd0) | Other product |
| [`meta_ads_create_ab_test`](royazran--mcp-ads.tools-007.md#tool-meta_ads_create_ab_test-9bafc7c5) | Other product |
| [`meta_ads_ab_test_results`](royazran--mcp-ads.tools-007.md#tool-meta_ads_ab_test_results-56e04ac5) | Other product |
| [`meta_ads_create_adset_with_dayparting`](royazran--mcp-ads.tools-007.md#tool-meta_ads_create_adset_with_dayparting-55fd0e54) | Other product |
| [`meta_ads_create_advantage_plus_campaign`](royazran--mcp-ads.tools-007.md#tool-meta_ads_create_advantage_plus_campaign-4087532d) | Other product |
| [`meta_ads_send_whatsapp_message`](royazran--mcp-ads.tools-007.md#tool-meta_ads_send_whatsapp_message-dff34707) | Other product |
| [`meta_ads_async_batch`](royazran--mcp-ads.tools-007.md#tool-meta_ads_async_batch-0431a5a0) | Other product |
| [`meta_ads_async_batch_status`](royazran--mcp-ads.tools-007.md#tool-meta_ads_async_batch_status-b0eca0fa) | Other product |
| [`meta_ads_delivery_insights`](royazran--mcp-ads.tools-007.md#tool-meta_ads_delivery_insights-35b80287) | Other product |
| [`meta_ads_set_adset_budget_guardrails`](royazran--mcp-ads.tools-007.md#tool-meta_ads_set_adset_budget_guardrails-79015f7a) | Other product |
| [`meta_ads_ad_suggestions`](royazran--mcp-ads.tools-007.md#tool-meta_ads_ad_suggestions-280d4163) | Other product |
| [`meta_ads_apply_recommendation`](royazran--mcp-ads.tools-007.md#tool-meta_ads_apply_recommendation-8996db21) | Other product |
| [`meta_ads_account_diagnostics`](royazran--mcp-ads.tools-007.md#tool-meta_ads_account_diagnostics-8b94a5de) | Other product |
| [`meta_ads_sync_batch`](royazran--mcp-ads.tools-007.md#tool-meta_ads_sync_batch-3cec8238) | Other product |
| [`meta_ads_create_advantage_plus_creative`](royazran--mcp-ads.tools-007.md#tool-meta_ads_create_advantage_plus_creative-90db6ac0) | Other product |
| [`meta_ads_boost_existing_post`](royazran--mcp-ads.tools-007.md#tool-meta_ads_boost_existing_post-a0ef3c63) | Other product |
| [`meta_ads_create_leadgen_form`](royazran--mcp-ads.tools-007.md#tool-meta_ads_create_leadgen_form-43963588) | Other product |
| [`meta_ads_create_lead_form`](royazran--mcp-ads.tools-007.md#tool-meta_ads_create_lead_form-6d64d401) | Other product |
| [`meta_ads_list_leadgen_forms`](royazran--mcp-ads.tools-007.md#tool-meta_ads_list_leadgen_forms-6c8ecf4d) | Other product |
| [`meta_ads_create_lead_ad_creative`](royazran--mcp-ads.tools-007.md#tool-meta_ads_create_lead_ad_creative-71d07b5a) | Other product |
| [`meta_ads_create_lead_ad_from_form`](royazran--mcp-ads.tools-007.md#tool-meta_ads_create_lead_ad_from_form-f5e3e21c) | Other product |
| [`meta_ads_create_lead_form_and_paused_ad`](royazran--mcp-ads.tools-007.md#tool-meta_ads_create_lead_form_and_paused_ad-839354e5) | Other product |
| [`meta_ads_create_instagram_story`](royazran--mcp-ads.tools-007.md#tool-meta_ads_create_instagram_story-21fd0241) | Other product |
| [`meta_ads_reach_frequency_prediction`](royazran--mcp-ads.tools-007.md#tool-meta_ads_reach_frequency_prediction-71e7f575) | Other product |
| [`meta_ads_publisher_block_lists`](royazran--mcp-ads.tools-007.md#tool-meta_ads_publisher_block_lists-38bf1f2c) | Other product |
| [`meta_ads_create_publisher_block_list`](royazran--mcp-ads.tools-007.md#tool-meta_ads_create_publisher_block_list-04dcfdcb) | Other product |
| [`meta_ads_brand_safety_controls`](royazran--mcp-ads.tools-007.md#tool-meta_ads_brand_safety_controls-f3807729) | Other product |
| [`meta_ads_create_live_video`](royazran--mcp-ads.tools-007.md#tool-meta_ads_create_live_video-83092161) | Other product |
| [`meta_ads_publish_live_video`](royazran--mcp-ads.tools-007.md#tool-meta_ads_publish_live_video-dec2872c) | Other product |
| [`meta_ads_end_live_video`](royazran--mcp-ads.tools-007.md#tool-meta_ads_end_live_video-492db227) | Other product |
| [`meta_ads_product_feeds`](royazran--mcp-ads.tools-007.md#tool-meta_ads_product_feeds-2ee3a728) | Other product |
| [`meta_ads_create_product_feed`](royazran--mcp-ads.tools-007.md#tool-meta_ads_create_product_feed-f69136e8) | Other product |
| [`meta_ads_upload_product_feed`](royazran--mcp-ads.tools-007.md#tool-meta_ads_upload_product_feed-34e048c2) | Other product |
| [`meta_ads_update_catalog_product`](royazran--mcp-ads.tools-007.md#tool-meta_ads_update_catalog_product-fc34dda7) | Other product |
| [`meta_ads_set_page_cta`](royazran--mcp-ads.tools-007.md#tool-meta_ads_set_page_cta-93a4d26a) | Other product |
| [`meta_ads_page_cta`](royazran--mcp-ads.tools-007.md#tool-meta_ads_page_cta-d503e45b) | Other product |
| [`meta_ads_list_system_users`](royazran--mcp-ads.tools-007.md#tool-meta_ads_list_system_users-77f413e1) | Other product |
| [`meta_ads_create_system_user`](royazran--mcp-ads.tools-007.md#tool-meta_ads_create_system_user-9242d3bf) | Other product |
| [`meta_ads_system_user_token`](royazran--mcp-ads.tools-007.md#tool-meta_ads_system_user_token-e57fd355) | Other product |
| [`meta_ads_assign_system_user_to_account`](royazran--mcp-ads.tools-007.md#tool-meta_ads_assign_system_user_to_account-91fc04ff) | Other product |
| [`meta_ads_create_saved_audience`](royazran--mcp-ads.tools-007.md#tool-meta_ads_create_saved_audience-e718ee70) | Other product |
| [`meta_ads_upload_enhanced_conversions`](royazran--mcp-ads.tools-007.md#tool-meta_ads_upload_enhanced_conversions-fe4bfcad) | Other product |
| [`meta_ads_campaign_change_history`](royazran--mcp-ads.tools-007.md#tool-meta_ads_campaign_change_history-26f9865c) | Other product |
| [`meta_ads_adset_change_history`](royazran--mcp-ads.tools-007.md#tool-meta_ads_adset_change_history-cd79d5ff) | Other product |
| [`meta_ads_ad_change_history`](royazran--mcp-ads.tools-007.md#tool-meta_ads_ad_change_history-d1030033) | Other product |
| [`meta_ads_account_change_history`](royazran--mcp-ads.tools-007.md#tool-meta_ads_account_change_history-807b4856) | Other product |
| [`meta_ads_check_payment_errors`](royazran--mcp-ads.tools-007.md#tool-meta_ads_check_payment_errors-5b294a6f) | Other product |
| [`meta_ads_bulk_payment_check`](royazran--mcp-ads.tools-007.md#tool-meta_ads_bulk_payment_check-a2edd5a7) | Other product |
| [`meta_ads_find_account`](royazran--mcp-ads.tools-007.md#tool-meta_ads_find_account-5dacaeb8) | Other product |
| [`meta_ads_dashboard`](royazran--mcp-ads.tools-007.md#tool-meta_ads_dashboard-04aa6b15) | Other product |
| [`meta_ads_pdf`](royazran--mcp-ads.tools-007.md#tool-meta_ads_pdf-3f273264) | Other product |
| [`meta_ads_dashboard_figma`](royazran--mcp-ads.tools-007.md#tool-meta_ads_dashboard_figma-a0aa0833) | Other product |
| [`meta_ads_render_report_pdf`](royazran--mcp-ads.tools-007.md#tool-meta_ads_render_report_pdf-c7b86565) | Other product |
| [`meta_ads_render_report_html`](royazran--mcp-ads.tools-007.md#tool-meta_ads_render_report_html-baa83303) | Other product |
| [`meta_ad_library_check_access`](royazran--mcp-ads.tools-007.md#tool-meta_ad_library_check_access-8677351f) | Other product |
| [`meta_ad_library_search_ads`](royazran--mcp-ads.tools-007.md#tool-meta_ad_library_search_ads-4e5d35ff) | Other product |
| [`meta_ad_library_find_advertiser`](royazran--mcp-ads.tools-007.md#tool-meta_ad_library_find_advertiser-6147e6bd) | Other product |
| [`meta_ad_library_advertiser_ads`](royazran--mcp-ads.tools-007.md#tool-meta_ad_library_advertiser_ads-6ad90a6b) | Other product |
| [`meta_ad_library_ad_details`](royazran--mcp-ads.tools-007.md#tool-meta_ad_library_ad_details-772bd6c5) | Other product |
| [`meta_ad_library_creative_angles`](royazran--mcp-ads.tools-007.md#tool-meta_ad_library_creative_angles-e435f4c9) | Other product |
| [`meta_ad_library_eu_reach`](royazran--mcp-ads.tools-007.md#tool-meta_ad_library_eu_reach-8636c021) | Other product |
| [`google_ads_transparency_check_access`](royazran--mcp-ads.tools-007.md#tool-google_ads_transparency_check_access-37012206) | Other product |
| [`google_ads_transparency_find_advertiser`](royazran--mcp-ads.tools-007.md#tool-google_ads_transparency_find_advertiser-3ed32679) | Other product |
| [`google_ads_transparency_advertiser_ads`](royazran--mcp-ads.tools-007.md#tool-google_ads_transparency_advertiser_ads-dc9433ae) | Other product |
| [`google_ads_transparency_search_ads`](royazran--mcp-ads.tools-007.md#tool-google_ads_transparency_search_ads-e5517eb4) | Other product |
| [`google_ads_transparency_ad_details`](royazran--mcp-ads.tools-007.md#tool-google_ads_transparency_ad_details-d2202c30) | Other product |
| [`google_ads_transparency_creative_mix`](royazran--mcp-ads.tools-007.md#tool-google_ads_transparency_creative_mix-bb96249e) | Other product |
| [`google_ads_transparency_regions`](royazran--mcp-ads.tools-007.md#tool-google_ads_transparency_regions-1950c6b7) | Other product |
| [`linkedin_ads_pipedream_accounts`](royazran--mcp-ads.tools-007.md#tool-linkedin_ads_pipedream_accounts-71a28d77) | Other product |
| [`linkedin_ads_list_accounts`](royazran--mcp-ads.tools-007.md#tool-linkedin_ads_list_accounts-a66df569) | Other product |
| [`linkedin_ads_list_campaigns`](royazran--mcp-ads.tools-007.md#tool-linkedin_ads_list_campaigns-175717c3) | Other product |
| [`linkedin_ads_get_campaign`](royazran--mcp-ads.tools-007.md#tool-linkedin_ads_get_campaign-4568d19f) | Other product |
| [`linkedin_ads_campaign_report`](royazran--mcp-ads.tools-007.md#tool-linkedin_ads_campaign_report-a29163d9) | Other product |
| [`linkedin_ads_create_campaign`](royazran--mcp-ads.tools-007.md#tool-linkedin_ads_create_campaign-427e5a02) | Other product |
| [`linkedin_ads_update_campaign`](royazran--mcp-ads.tools-007.md#tool-linkedin_ads_update_campaign-8a89bf50) | Other product |
| [`linkedin_ads_create_creative`](royazran--mcp-ads.tools-007.md#tool-linkedin_ads_create_creative-7a09e952) | Other product |
| [`linkedin_ads_raw_request`](royazran--mcp-ads.tools-007.md#tool-linkedin_ads_raw_request-69a75296) | Other product |
| [`tiktok_ads_pipedream_accounts`](royazran--mcp-ads.tools-007.md#tool-tiktok_ads_pipedream_accounts-1c7e0dba) | Other product |
| [`tiktok_ads_list_advertisers`](royazran--mcp-ads.tools-007.md#tool-tiktok_ads_list_advertisers-71e80cca) | Other product |
| [`tiktok_ads_list_campaigns`](royazran--mcp-ads.tools-007.md#tool-tiktok_ads_list_campaigns-55744de8) | Other product |
| [`tiktok_ads_get_campaign`](royazran--mcp-ads.tools-007.md#tool-tiktok_ads_get_campaign-87eccda9) | Other product |
| [`tiktok_ads_campaign_report`](royazran--mcp-ads.tools-007.md#tool-tiktok_ads_campaign_report-279c4310) | Other product |
| [`tiktok_ads_create_campaign`](royazran--mcp-ads.tools-007.md#tool-tiktok_ads_create_campaign-004579ca) | Other product |
| [`tiktok_ads_update_campaign`](royazran--mcp-ads.tools-007.md#tool-tiktok_ads_update_campaign-566aa5bd) | Other product |
| [`tiktok_ads_create_adgroup`](royazran--mcp-ads.tools-007.md#tool-tiktok_ads_create_adgroup-d3c3c6bf) | Other product |
| [`tiktok_ads_create_ad`](royazran--mcp-ads.tools-007.md#tool-tiktok_ads_create_ad-fa07c7cf) | Other product |
| [`tiktok_ads_raw_request`](royazran--mcp-ads.tools-007.md#tool-tiktok_ads_raw_request-f4f4b94e) | Other product |
| [`linkedin_ads_get_resource`](royazran--mcp-ads.tools-007.md#tool-linkedin_ads_get_resource-83200c7a) | Other product |
| [`linkedin_ads_get_account`](royazran--mcp-ads.tools-007.md#tool-linkedin_ads_get_account-639d7d2d) | Other product |
| [`linkedin_ads_list_campaign_groups`](royazran--mcp-ads.tools-007.md#tool-linkedin_ads_list_campaign_groups-b4e9e706) | Other product |
| [`linkedin_ads_get_campaign_group`](royazran--mcp-ads.tools-007.md#tool-linkedin_ads_get_campaign_group-1da547cb) | Other product |
| [`linkedin_ads_create_campaign_group`](royazran--mcp-ads.tools-007.md#tool-linkedin_ads_create_campaign_group-79c2e5bb) | Other product |
| [`linkedin_ads_update_campaign_group`](royazran--mcp-ads.tools-007.md#tool-linkedin_ads_update_campaign_group-45fe43dd) | Other product |
| [`linkedin_ads_list_creatives`](royazran--mcp-ads.tools-007.md#tool-linkedin_ads_list_creatives-a3d9a055) | Other product |
| [`linkedin_ads_get_creative`](royazran--mcp-ads.tools-007.md#tool-linkedin_ads_get_creative-58985ee4) | Other product |
| [`linkedin_ads_update_creative`](royazran--mcp-ads.tools-007.md#tool-linkedin_ads_update_creative-03fa5e3a) | Other product |
| [`linkedin_ads_list_conversions`](royazran--mcp-ads.tools-007.md#tool-linkedin_ads_list_conversions-d3e29103) | Other product |
| [`linkedin_ads_create_conversion`](royazran--mcp-ads.tools-007.md#tool-linkedin_ads_create_conversion-6419c33e) | Other product |
| [`linkedin_ads_update_conversion`](royazran--mcp-ads.tools-007.md#tool-linkedin_ads_update_conversion-5e6bdf9b) | Other product |
| [`linkedin_ads_list_targeting_facets`](royazran--mcp-ads.tools-007.md#tool-linkedin_ads_list_targeting_facets-558f1e0f) | Other product |
| [`linkedin_ads_find_targeting_entities`](royazran--mcp-ads.tools-007.md#tool-linkedin_ads_find_targeting_entities-2dab6971) | Other product |
| [`linkedin_ads_audience_counts`](royazran--mcp-ads.tools-007.md#tool-linkedin_ads_audience_counts-57ebdbf9) | Other product |
| [`linkedin_ads_campaign_group_report`](royazran--mcp-ads.tools-007.md#tool-linkedin_ads_campaign_group_report-703f5233) | Other product |
| [`linkedin_ads_creative_report`](royazran--mcp-ads.tools-007.md#tool-linkedin_ads_creative_report-b551d33d) | Other product |
| [`tiktok_ads_get_resource`](royazran--mcp-ads.tools-007.md#tool-tiktok_ads_get_resource-8daf7827) | Other product |
| [`tiktok_ads_advertiser_info`](royazran--mcp-ads.tools-007.md#tool-tiktok_ads_advertiser_info-9e099ca5) | Other product |
| [`tiktok_ads_account_balance`](royazran--mcp-ads.tools-007.md#tool-tiktok_ads_account_balance-99343d05) | Other product |
| [`tiktok_ads_list_adgroups`](royazran--mcp-ads.tools-007.md#tool-tiktok_ads_list_adgroups-e12712ce) | Other product |
| [`tiktok_ads_get_adgroup`](royazran--mcp-ads.tools-007.md#tool-tiktok_ads_get_adgroup-f7cd711b) | Other product |
| [`tiktok_ads_update_adgroup`](royazran--mcp-ads.tools-007.md#tool-tiktok_ads_update_adgroup-59a64597) | Other product |
| [`tiktok_ads_list_ads`](royazran--mcp-ads.tools-007.md#tool-tiktok_ads_list_ads-7735b2fe) | Other product |
| [`tiktok_ads_get_ad`](royazran--mcp-ads.tools-007.md#tool-tiktok_ads_get_ad-4d2e8177) | Other product |
| [`tiktok_ads_update_ad`](royazran--mcp-ads.tools-008.md#tool-tiktok_ads_update_ad-17fe88fa) | Other product |
| [`tiktok_ads_adgroup_report`](royazran--mcp-ads.tools-008.md#tool-tiktok_ads_adgroup_report-491dd93a) | Other product |
| [`tiktok_ads_ad_report`](royazran--mcp-ads.tools-008.md#tool-tiktok_ads_ad_report-9394504a) | Other product |
| [`tiktok_ads_custom_report`](royazran--mcp-ads.tools-008.md#tool-tiktok_ads_custom_report-23aea8f4) | Other product |
| [`tiktok_ads_list_pixels`](royazran--mcp-ads.tools-008.md#tool-tiktok_ads_list_pixels-71ae01d1) | Other product |
| [`tiktok_ads_create_pixel`](royazran--mcp-ads.tools-008.md#tool-tiktok_ads_create_pixel-8754af7f) | Other product |
| [`tiktok_ads_update_pixel`](royazran--mcp-ads.tools-008.md#tool-tiktok_ads_update_pixel-dfaf7d63) | Other product |
| [`tiktok_ads_list_custom_audiences`](royazran--mcp-ads.tools-008.md#tool-tiktok_ads_list_custom_audiences-e7e33e95) | Other product |
| [`tiktok_ads_create_custom_audience`](royazran--mcp-ads.tools-008.md#tool-tiktok_ads_create_custom_audience-87d58e8a) | Other product |
| [`tiktok_ads_update_custom_audience`](royazran--mcp-ads.tools-008.md#tool-tiktok_ads_update_custom_audience-a5328c44) | Other product |
| [`tiktok_ads_delete_custom_audience`](royazran--mcp-ads.tools-008.md#tool-tiktok_ads_delete_custom_audience-775fe4a9) | Other product |
| [`tiktok_ads_create_lookalike_audience`](royazran--mcp-ads.tools-008.md#tool-tiktok_ads_create_lookalike_audience-d7cc4bbb) | Other product |
| [`tiktok_ads_list_images`](royazran--mcp-ads.tools-008.md#tool-tiktok_ads_list_images-5a818812) | Other product |
| [`tiktok_ads_upload_image`](royazran--mcp-ads.tools-008.md#tool-tiktok_ads_upload_image-250cf73b) | Other product |
| [`tiktok_ads_list_videos`](royazran--mcp-ads.tools-008.md#tool-tiktok_ads_list_videos-8dd7b9f1) | Other product |
| [`tiktok_ads_upload_video`](royazran--mcp-ads.tools-008.md#tool-tiktok_ads_upload_video-319de6f1) | Other product |
| [`tiktok_ads_targeting_options`](royazran--mcp-ads.tools-008.md#tool-tiktok_ads_targeting_options-e013604a) | Other product |
| [`linkedin_organic_accounts`](royazran--mcp-ads.tools-008.md#tool-linkedin_organic_accounts-6931a8ab) | Other product |
| [`linkedin_organic_list_organizations`](royazran--mcp-ads.tools-008.md#tool-linkedin_organic_list_organizations-c35240a1) | Other product |
| [`linkedin_organic_create_post`](royazran--mcp-ads.tools-008.md#tool-linkedin_organic_create_post-13420ddc) | Other product |
| [`meta_pages_accounts`](royazran--mcp-ads.tools-008.md#tool-meta_pages_accounts-bd0792b0) | Other product |
| [`meta_pages_list`](royazran--mcp-ads.tools-008.md#tool-meta_pages_list-4fbc6bd9) | Other product |
| [`meta_pages_create_post`](royazran--mcp-ads.tools-008.md#tool-meta_pages_create_post-d55434a9) | Other product |
| [`meta_pages_create_instagram_post`](royazran--mcp-ads.tools-008.md#tool-meta_pages_create_instagram_post-83bf32d8) | Other product |
| [`tiktok_organic_accounts`](royazran--mcp-ads.tools-008.md#tool-tiktok_organic_accounts-4422a589) | Other product |
| [`tiktok_organic_creator_info`](royazran--mcp-ads.tools-008.md#tool-tiktok_organic_creator_info-9776b48c) | Other product |
| [`tiktok_organic_publish_video`](royazran--mcp-ads.tools-008.md#tool-tiktok_organic_publish_video-7faae361) | Other product |
| [`tiktok_organic_upload_draft`](royazran--mcp-ads.tools-008.md#tool-tiktok_organic_upload_draft-48b389e0) | Other product |
| [`tiktok_organic_status`](royazran--mcp-ads.tools-008.md#tool-tiktok_organic_status-fb0cf863) | Other product |
| [`snapchat_ads_pipedream_accounts`](royazran--mcp-ads.tools-008.md#tool-snapchat_ads_pipedream_accounts-50abd030) | Other product |
| [`snapchat_ads_list_organizations`](royazran--mcp-ads.tools-008.md#tool-snapchat_ads_list_organizations-966aa211) | Other product |
| [`snapchat_ads_list_accounts`](royazran--mcp-ads.tools-008.md#tool-snapchat_ads_list_accounts-f4b471a5) | Other product |
| [`snapchat_ads_list_campaigns`](royazran--mcp-ads.tools-008.md#tool-snapchat_ads_list_campaigns-5e6238d4) | Other product |
| [`snapchat_ads_get_campaign`](royazran--mcp-ads.tools-008.md#tool-snapchat_ads_get_campaign-ee073172) | Other product |
| [`snapchat_ads_list_adsquads`](royazran--mcp-ads.tools-008.md#tool-snapchat_ads_list_adsquads-a9662af6) | Other product |
| [`snapchat_ads_list_ads`](royazran--mcp-ads.tools-008.md#tool-snapchat_ads_list_ads-cd844b56) | Other product |
| [`snapchat_ads_campaign_report`](royazran--mcp-ads.tools-008.md#tool-snapchat_ads_campaign_report-a359cbb5) | Other product |
| [`snapchat_ads_account_report`](royazran--mcp-ads.tools-008.md#tool-snapchat_ads_account_report-eac9666c) | Other product |
| [`snapchat_ads_create_campaign`](royazran--mcp-ads.tools-008.md#tool-snapchat_ads_create_campaign-7d0ca19d) | Other product |
| [`snapchat_ads_update_campaign_status`](royazran--mcp-ads.tools-008.md#tool-snapchat_ads_update_campaign_status-9e82c6da) | Other product |
| [`snapchat_ads_raw_request`](royazran--mcp-ads.tools-008.md#tool-snapchat_ads_raw_request-4f3f504f) | Other product |
| [`microsoft_ads_pipedream_accounts`](royazran--mcp-ads.tools-008.md#tool-microsoft_ads_pipedream_accounts-e277c7ae) | Other product |
| [`microsoft_ads_list_accounts`](royazran--mcp-ads.tools-008.md#tool-microsoft_ads_list_accounts-496574db) | Other product |
| [`microsoft_ads_list_campaigns`](royazran--mcp-ads.tools-008.md#tool-microsoft_ads_list_campaigns-de18c7a6) | Other product |
| [`microsoft_ads_list_adgroups`](royazran--mcp-ads.tools-008.md#tool-microsoft_ads_list_adgroups-5f83de46) | Other product |
| [`microsoft_ads_list_keywords`](royazran--mcp-ads.tools-008.md#tool-microsoft_ads_list_keywords-ed515eed) | Other product |
| [`microsoft_ads_update_campaign_status`](royazran--mcp-ads.tools-008.md#tool-microsoft_ads_update_campaign_status-c45da2f7) | Other product |
| [`microsoft_ads_update_campaign_budget`](royazran--mcp-ads.tools-008.md#tool-microsoft_ads_update_campaign_budget-8e444f6b) | Other product |
| [`microsoft_ads_submit_report`](royazran--mcp-ads.tools-008.md#tool-microsoft_ads_submit_report-b3830ad8) | Other product |
| [`microsoft_ads_poll_report`](royazran--mcp-ads.tools-008.md#tool-microsoft_ads_poll_report-08e22343) | Other product |
| [`microsoft_ads_campaign_performance`](royazran--mcp-ads.tools-008.md#tool-microsoft_ads_campaign_performance-3ce11a75) | Other product |
| [`microsoft_ads_raw_request`](royazran--mcp-ads.tools-008.md#tool-microsoft_ads_raw_request-a8160da8) | Other product |
| [`openai_ads_get_account`](royazran--mcp-ads.tools-008.md#tool-openai_ads_get_account-3b21108a) | Other product |
| [`openai_ads_list_campaigns`](royazran--mcp-ads.tools-008.md#tool-openai_ads_list_campaigns-200d6a65) | Other product |
| [`openai_ads_get_campaign`](royazran--mcp-ads.tools-008.md#tool-openai_ads_get_campaign-85451a8a) | Other product |
| [`openai_ads_create_campaign`](royazran--mcp-ads.tools-008.md#tool-openai_ads_create_campaign-179da8f7) | Other product |
| [`openai_ads_update_campaign`](royazran--mcp-ads.tools-008.md#tool-openai_ads_update_campaign-9d68a721) | Other product |
| [`openai_ads_set_campaign_status`](royazran--mcp-ads.tools-008.md#tool-openai_ads_set_campaign_status-2f91bcb1) | Other product |
| [`openai_ads_list_ad_groups`](royazran--mcp-ads.tools-008.md#tool-openai_ads_list_ad_groups-a7aad12e) | Other product |
| [`openai_ads_get_ad_group`](royazran--mcp-ads.tools-008.md#tool-openai_ads_get_ad_group-7e80eba4) | Other product |
| [`openai_ads_create_ad_group`](royazran--mcp-ads.tools-008.md#tool-openai_ads_create_ad_group-8ac3b22d) | Other product |
| [`openai_ads_set_ad_group_status`](royazran--mcp-ads.tools-008.md#tool-openai_ads_set_ad_group_status-cb8fbc9d) | Other product |
| [`openai_ads_list_ads`](royazran--mcp-ads.tools-008.md#tool-openai_ads_list_ads-82b17781) | Other product |
| [`openai_ads_get_ad`](royazran--mcp-ads.tools-008.md#tool-openai_ads_get_ad-8d2c9112) | Other product |
| [`openai_ads_create_chat_card_ad`](royazran--mcp-ads.tools-008.md#tool-openai_ads_create_chat_card_ad-3c502acc) | Other product |
| [`openai_ads_set_ad_status`](royazran--mcp-ads.tools-008.md#tool-openai_ads_set_ad_status-0646f852) | Other product |
| [`openai_ads_ad_insights`](royazran--mcp-ads.tools-008.md#tool-openai_ads_ad_insights-076bec44) | Other product |
| [`ga4_list_properties`](royazran--mcp-ads.tools-008.md#tool-ga4_list_properties-44fea7fa) | Other product |
| [`ga4_list_all_properties`](royazran--mcp-ads.tools-008.md#tool-ga4_list_all_properties-6133d4fc) | Other product |
| [`ga4_run_custom_report`](royazran--mcp-ads.tools-008.md#tool-ga4_run_custom_report-d22a67ff) | Other product |
| [`ga4_overview`](royazran--mcp-ads.tools-008.md#tool-ga4_overview-6fefcb00) | Other product |
| [`ga4_traffic_sources`](royazran--mcp-ads.tools-008.md#tool-ga4_traffic_sources-3ba83706) | Other product |
| [`ga4_top_pages`](royazran--mcp-ads.tools-008.md#tool-ga4_top_pages-43e80c8f) | Other product |
| [`ga4_device_breakdown`](royazran--mcp-ads.tools-008.md#tool-ga4_device_breakdown-e7f0b972) | Other product |
| [`ga4_conversions`](royazran--mcp-ads.tools-008.md#tool-ga4_conversions-86bd53fd) | Other product |
| [`ga4_ecommerce`](royazran--mcp-ads.tools-008.md#tool-ga4_ecommerce-f470a95a) | Other product |
| [`ga4_realtime`](royazran--mcp-ads.tools-008.md#tool-ga4_realtime-4ff73072) | Other product |
| [`ga4_landing_pages`](royazran--mcp-ads.tools-008.md#tool-ga4_landing_pages-324d1e1f) | Other product |
| [`ga4_user_retention`](royazran--mcp-ads.tools-008.md#tool-ga4_user_retention-a786083e) | Other product |
| [`ga4_geographic_breakdown`](royazran--mcp-ads.tools-008.md#tool-ga4_geographic_breakdown-c47e90d1) | Other product |
| [`ga4_user_journey`](royazran--mcp-ads.tools-008.md#tool-ga4_user_journey-89b65522) | Other product |
| [`ga4_events`](royazran--mcp-ads.tools-008.md#tool-ga4_events-3abbb027) | Other product |
| [`ga4_funnel_analysis`](royazran--mcp-ads.tools-008.md#tool-ga4_funnel_analysis-9f7a3d61) | Other product |
| [`ga4_audiences`](royazran--mcp-ads.tools-008.md#tool-ga4_audiences-baa51236) | Other product |
| [`ga4_segment_analysis`](royazran--mcp-ads.tools-008.md#tool-ga4_segment_analysis-7181dbb5) | Other product |
| [`ga4_acquisition_channels`](royazran--mcp-ads.tools-008.md#tool-ga4_acquisition_channels-6a86d440) | Other product |
| [`ga4_ecommerce_items`](royazran--mcp-ads.tools-008.md#tool-ga4_ecommerce_items-3acc879d) | Other product |
| [`ga4_available_metrics`](royazran--mcp-ads.tools-008.md#tool-ga4_available_metrics-a8c3e47b) | Other product |
| [`ga4_cohort_analysis`](royazran--mcp-ads.tools-008.md#tool-ga4_cohort_analysis-74372f5f) | Other product |
| [`ga4_attribution_paths`](royazran--mcp-ads.tools-008.md#tool-ga4_attribution_paths-e9ab942f) | Other product |
| [`ga4_predictive_metrics`](royazran--mcp-ads.tools-008.md#tool-ga4_predictive_metrics-ac0aba52) | Other product |
| [`ga4_core_web_vitals`](royazran--mcp-ads.tools-008.md#tool-ga4_core_web_vitals-f3efff04) | Other product |
| [`ga4_path_exploration`](royazran--mcp-ads.tools-008.md#tool-ga4_path_exploration-7b2705bb) | Other product |
| [`ga4_create_audience`](royazran--mcp-ads.tools-008.md#tool-ga4_create_audience-406760e3) | Other product |
| [`ga4_list_custom_dimensions`](royazran--mcp-ads.tools-008.md#tool-ga4_list_custom_dimensions-75905509) | Other product |
| [`ga4_compare_date_ranges`](royazran--mcp-ads.tools-008.md#tool-ga4_compare_date_ranges-5fe68a1b) | Other product |
| [`ga4_channel_performance`](royazran--mcp-ads.tools-008.md#tool-ga4_channel_performance-e5da1ca4) | Other product |
| [`ga4_site_search_terms`](royazran--mcp-ads.tools-008.md#tool-ga4_site_search_terms-abea024d) | Other product |
| [`get_ga_traffic_today`](royazran--mcp-ads.tools-008.md#tool-get_ga_traffic_today-6ea8c9e5) | Other product |
| [`get_ga_traffic_yesterday`](royazran--mcp-ads.tools-008.md#tool-get_ga_traffic_yesterday-d947cd13) | Other product |
| [`get_ga_traffic_7d`](royazran--mcp-ads.tools-008.md#tool-get_ga_traffic_7d-bf06bbac) | Other product |
| [`get_ga_traffic_30d`](royazran--mcp-ads.tools-008.md#tool-get_ga_traffic_30d-0e0c1ccc) | Other product |
| [`get_ga_traffic_90d`](royazran--mcp-ads.tools-008.md#tool-get_ga_traffic_90d-498ae640) | Other product |
| [`get_ga_traffic_this_month`](royazran--mcp-ads.tools-008.md#tool-get_ga_traffic_this_month-a840244b) | Other product |
| [`get_ga_traffic_last_month`](royazran--mcp-ads.tools-008.md#tool-get_ga_traffic_last_month-4f1a2ec4) | Other product |
| [`get_ga_traffic_ytd`](royazran--mcp-ads.tools-008.md#tool-get_ga_traffic_ytd-de6b4ca3) | Other product |
| [`get_ga_top_pages_today`](royazran--mcp-ads.tools-008.md#tool-get_ga_top_pages_today-20513310) | Other product |
| [`get_ga_top_pages_yesterday`](royazran--mcp-ads.tools-008.md#tool-get_ga_top_pages_yesterday-848cd445) | Other product |
| [`get_ga_top_pages_7d`](royazran--mcp-ads.tools-008.md#tool-get_ga_top_pages_7d-f659d4c1) | Other product |
| [`get_ga_top_pages_30d`](royazran--mcp-ads.tools-008.md#tool-get_ga_top_pages_30d-e5a75d3d) | Other product |
| [`get_ga_top_pages_90d`](royazran--mcp-ads.tools-008.md#tool-get_ga_top_pages_90d-28813353) | Other product |
| [`get_ga_conversions_today`](royazran--mcp-ads.tools-008.md#tool-get_ga_conversions_today-66d313ab) | Other product |
| [`get_ga_conversions_yesterday`](royazran--mcp-ads.tools-008.md#tool-get_ga_conversions_yesterday-b4bd3c64) | Other product |
| [`get_ga_conversions_7d`](royazran--mcp-ads.tools-008.md#tool-get_ga_conversions_7d-0a96402d) | Other product |
| [`get_ga_conversions_30d`](royazran--mcp-ads.tools-008.md#tool-get_ga_conversions_30d-96d53a3f) | Other product |
| [`get_ga_conversions_this_month`](royazran--mcp-ads.tools-008.md#tool-get_ga_conversions_this_month-7446b980) | Other product |
| [`get_ga_ecommerce_today`](royazran--mcp-ads.tools-008.md#tool-get_ga_ecommerce_today-55ee50ac) | Other product |
| [`get_ga_ecommerce_7d`](royazran--mcp-ads.tools-008.md#tool-get_ga_ecommerce_7d-705ab94f) | Other product |
| [`get_ga_ecommerce_30d`](royazran--mcp-ads.tools-008.md#tool-get_ga_ecommerce_30d-18a1d94f) | Other product |
| [`get_ga_ecommerce_this_month`](royazran--mcp-ads.tools-008.md#tool-get_ga_ecommerce_this_month-0c3b2c15) | Other product |
| [`get_ga_compare_wow`](royazran--mcp-ads.tools-008.md#tool-get_ga_compare_wow-d12511f7) | Other product |
| [`get_ga_compare_mom`](royazran--mcp-ads.tools-008.md#tool-get_ga_compare_mom-bf4e4079) | Other product |
| [`get_ga_compare_yoy`](royazran--mcp-ads.tools-008.md#tool-get_ga_compare_yoy-dca8f136) | Other product |
| [`get_ga_compare_qoq`](royazran--mcp-ads.tools-008.md#tool-get_ga_compare_qoq-6a67b8da) | Other product |
| [`get_ga_organic_search`](royazran--mcp-ads.tools-008.md#tool-get_ga_organic_search-e90fa5c7) | Other product |
| [`get_ga_paid_search`](royazran--mcp-ads.tools-008.md#tool-get_ga_paid_search-8b50b37d) | Other product |
| [`get_ga_organic_social`](royazran--mcp-ads.tools-008.md#tool-get_ga_organic_social-6cab6031) | Other product |
| [`get_ga_paid_social`](royazran--mcp-ads.tools-008.md#tool-get_ga_paid_social-828a0fe6) | Other product |
| [`get_ga_email_channel`](royazran--mcp-ads.tools-008.md#tool-get_ga_email_channel-440fe36a) | Other product |
| [`get_ga_direct_channel`](royazran--mcp-ads.tools-008.md#tool-get_ga_direct_channel-bdaa1c97) | Other product |
| [`get_ga_referral_channel`](royazran--mcp-ads.tools-008.md#tool-get_ga_referral_channel-cbba2012) | Other product |
| [`get_ga_google_traffic`](royazran--mcp-ads.tools-008.md#tool-get_ga_google_traffic-782d0b07) | Other product |
| [`get_ga_facebook_traffic`](royazran--mcp-ads.tools-008.md#tool-get_ga_facebook_traffic-51313cf5) | Other product |
| [`get_ga_tiktok_traffic`](royazran--mcp-ads.tools-008.md#tool-get_ga_tiktok_traffic-92944cc8) | Other product |
| [`get_ga_hour_of_day`](royazran--mcp-ads.tools-008.md#tool-get_ga_hour_of_day-43f4363f) | Other product |
| [`get_ga_day_of_week`](royazran--mcp-ads.tools-008.md#tool-get_ga_day_of_week-16264de3) | Other product |
| [`get_ga_day_hour_heatmap`](royazran--mcp-ads.tools-008.md#tool-get_ga_day_hour_heatmap-7cca59eb) | Other product |
| [`get_ga_new_vs_returning`](royazran--mcp-ads.tools-008.md#tool-get_ga_new_vs_returning-31a584cd) | Other product |
| [`get_ga_user_lifetime_value`](royazran--mcp-ads.tools-008.md#tool-get_ga_user_lifetime_value-17e87c3d) | Other product |
| [`get_ga_audience_engagement`](royazran--mcp-ads.tools-008.md#tool-get_ga_audience_engagement-cb6b0989) | Other product |
| [`get_ga_executive_dashboard`](royazran--mcp-ads.tools-008.md#tool-get_ga_executive_dashboard-d13fdceb) | Other product |
| [`get_ga_marketing_kpi_dashboard`](royazran--mcp-ads.tools-008.md#tool-get_ga_marketing_kpi_dashboard-f563eb39) | Other product |
| [`get_ga_lead_gen_dashboard`](royazran--mcp-ads.tools-008.md#tool-get_ga_lead_gen_dashboard-7e2cc2ee) | Other product |
| [`get_ga_ecommerce_dashboard`](royazran--mcp-ads.tools-008.md#tool-get_ga_ecommerce_dashboard-5e471844) | Other product |
| [`get_ga_ppc_dashboard`](royazran--mcp-ads.tools-008.md#tool-get_ga_ppc_dashboard-02c9b0e2) | Other product |
| [`get_ga_seo_dashboard`](royazran--mcp-ads.tools-008.md#tool-get_ga_seo_dashboard-7d8e7daa) | Other product |
| [`get_ga_social_dashboard`](royazran--mcp-ads.tools-008.md#tool-get_ga_social_dashboard-b2ddb14d) | Other product |
| [`get_ga_full_360_report`](royazran--mcp-ads.tools-008.md#tool-get_ga_full_360_report-80176497) | Other product |
| [`ga4_check_data_quality`](royazran--mcp-ads.tools-008.md#tool-ga4_check_data_quality-812f5ff9) | Other product |
| [`ga4_audit_property_settings`](royazran--mcp-ads.tools-008.md#tool-ga4_audit_property_settings-dcbfedcf) | Other product |
| [`ga4_diagnose_missing_conversions`](royazran--mcp-ads.tools-009.md#tool-ga4_diagnose_missing_conversions-968782b3) | Other product |
| [`ga4_check_google_ads_integration`](royazran--mcp-ads.tools-009.md#tool-ga4_check_google_ads_integration-1dea5590) | Other product |
| [`ga4_export_property_config`](royazran--mcp-ads.tools-009.md#tool-ga4_export_property_config-712b4b65) | Other product |
| [`ga4_create_custom_dimension`](royazran--mcp-ads.tools-009.md#tool-ga4_create_custom_dimension-2ce8700e) | Other product |
| [`ga4_bulk_create_key_events`](royazran--mcp-ads.tools-009.md#tool-ga4_bulk_create_key_events-fd150797) | Other product |
| [`ga4_setup_lead_gen_property`](royazran--mcp-ads.tools-009.md#tool-ga4_setup_lead_gen_property-f6cc341e) | Other product |
| [`ga4_setup_ecommerce_property`](royazran--mcp-ads.tools-009.md#tool-ga4_setup_ecommerce_property-c3ea4d96) | Other product |
| [`ga4_link_google_ads`](royazran--mcp-ads.tools-009.md#tool-ga4_link_google_ads-a8484ba1) | Other product |
| [`ga4_compare_two_dates`](royazran--mcp-ads.tools-009.md#tool-ga4_compare_two_dates-299d93d0) | Other product |
| [`ga4_quick_metric`](royazran--mcp-ads.tools-009.md#tool-ga4_quick_metric-f3ce97a7) | Other product |
| [`ga4_top_n`](royazran--mcp-ads.tools-009.md#tool-ga4_top_n-293e96cd) | Other product |
| [`ga4_metric_trend`](royazran--mcp-ads.tools-009.md#tool-ga4_metric_trend-f7181db3) | Other product |
| [`gsc_list_sites`](royazran--mcp-ads.tools-009.md#tool-gsc_list_sites-69b36040) | Other product |
| [`gsc_search_analytics`](royazran--mcp-ads.tools-009.md#tool-gsc_search_analytics-dbefc78e) | Other product |
| [`gsc_top_pages`](royazran--mcp-ads.tools-009.md#tool-gsc_top_pages-f18fb1c2) | Other product |
| [`gsc_top_keywords`](royazran--mcp-ads.tools-009.md#tool-gsc_top_keywords-b999b872) | Other product |
| [`gsc_country_breakdown`](royazran--mcp-ads.tools-009.md#tool-gsc_country_breakdown-83ceafaf) | Other product |
| [`gsc_device_breakdown`](royazran--mcp-ads.tools-009.md#tool-gsc_device_breakdown-b812a644) | Other product |
| [`gsc_page_keywords`](royazran--mcp-ads.tools-009.md#tool-gsc_page_keywords-3077b6a7) | Other product |
| [`gsc_inspect_url`](royazran--mcp-ads.tools-009.md#tool-gsc_inspect_url-2d598234) | Other product |
| [`gsc_sitemaps`](royazran--mcp-ads.tools-009.md#tool-gsc_sitemaps-624aa861) | Other product |
| [`gsc_crawl_errors`](royazran--mcp-ads.tools-009.md#tool-gsc_crawl_errors-f9d1b46a) | Other product |
| [`gsc_submit_sitemap`](royazran--mcp-ads.tools-009.md#tool-gsc_submit_sitemap-6d135a26) | Other product |
| [`gsc_delete_sitemap`](royazran--mcp-ads.tools-009.md#tool-gsc_delete_sitemap-adedc75d) | Other product |
| [`gsc_date_trend`](royazran--mcp-ads.tools-009.md#tool-gsc_date_trend-7dc7e0c0) | Other product |
| [`gsc_search_appearance`](royazran--mcp-ads.tools-009.md#tool-gsc_search_appearance-25a9d962) | Other product |
| [`gsc_compare_periods`](royazran--mcp-ads.tools-009.md#tool-gsc_compare_periods-2b628d41) | Other product |
| [`gsc_index_coverage`](royazran--mcp-ads.tools-009.md#tool-gsc_index_coverage-ffde893c) | Other product |
| [`gsc_core_web_vitals`](royazran--mcp-ads.tools-009.md#tool-gsc_core_web_vitals-c7423e93) | Other product |
| [`gsc_rich_results`](royazran--mcp-ads.tools-009.md#tool-gsc_rich_results-ac7b532e) | Other product |
| [`gsc_mobile_usability`](royazran--mcp-ads.tools-009.md#tool-gsc_mobile_usability-8a55831f) | Other product |
| [`gsc_links`](royazran--mcp-ads.tools-009.md#tool-gsc_links-f3c38148) | Other product |
| [`gsc_discover_performance`](royazran--mcp-ads.tools-009.md#tool-gsc_discover_performance-e791a1c4) | Other product |
| [`gsc_video_indexing`](royazran--mcp-ads.tools-009.md#tool-gsc_video_indexing-9abe2ba8) | Other product |
| [`gtm_list_accounts`](#tool-gtm_list_accounts-c5d9b27f) | GTM |
| [`gtm_get_account`](#tool-gtm_get_account-b0358265) | GTM |
| [`gtm_list_containers`](#tool-gtm_list_containers-e45afd2b) | GTM |
| [`gtm_get_container`](#tool-gtm_get_container-fdc6e39c) | GTM |
| [`gtm_create_container`](#tool-gtm_create_container-67c96447) | GTM |
| [`gtm_get_container_snippet`](#tool-gtm_get_container_snippet-a7cc1184) | GTM |
| [`gtm_list_workspaces`](#tool-gtm_list_workspaces-248ce86f) | GTM |
| [`gtm_get_workspace`](#tool-gtm_get_workspace-573c6822) | GTM |
| [`gtm_create_workspace`](#tool-gtm_create_workspace-6324597f) | GTM |
| [`gtm_get_workspace_status`](#tool-gtm_get_workspace_status-58373cea) | GTM |
| [`gtm_sync_workspace`](#tool-gtm_sync_workspace-c11e7d2f) | GTM |
| [`gtm_list_tags`](#tool-gtm_list_tags-b585bc12) | GTM |
| [`gtm_get_tag`](#tool-gtm_get_tag-3d242291) | GTM |
| [`gtm_create_tag`](#tool-gtm_create_tag-c682840c) | GTM |
| [`gtm_update_tag`](#tool-gtm_update_tag-23807743) | GTM |
| [`gtm_delete_tag`](#tool-gtm_delete_tag-42a56cac) | GTM |
| [`gtm_pause_tag`](#tool-gtm_pause_tag-f2e4757b) | GTM |
| [`gtm_unpause_tag`](#tool-gtm_unpause_tag-6a6b114b) | GTM |
| [`gtm_list_triggers`](#tool-gtm_list_triggers-16b41a3c) | GTM |
| [`gtm_get_trigger`](#tool-gtm_get_trigger-669e5c62) | GTM |
| [`gtm_create_trigger`](#tool-gtm_create_trigger-99da4322) | GTM |
| [`gtm_update_trigger`](#tool-gtm_update_trigger-ce48de45) | GTM |
| [`gtm_delete_trigger`](#tool-gtm_delete_trigger-dac3085f) | GTM |
| [`gtm_list_variables`](#tool-gtm_list_variables-81705a80) | GTM |
| [`gtm_get_variable`](#tool-gtm_get_variable-e6ff3763) | GTM |
| [`gtm_create_variable`](#tool-gtm_create_variable-5b853337) | GTM |
| [`gtm_update_variable`](#tool-gtm_update_variable-898f92d4) | GTM |
| [`gtm_delete_variable`](#tool-gtm_delete_variable-9bd36787) | GTM |
| [`gtm_list_builtin_variables`](#tool-gtm_list_builtin_variables-e3216e58) | GTM |
| [`gtm_enable_builtin_variable`](#tool-gtm_enable_builtin_variable-e3920208) | GTM |
| [`gtm_disable_builtin_variable`](#tool-gtm_disable_builtin_variable-9bbcfc17) | GTM |
| [`gtm_list_folders`](#tool-gtm_list_folders-9da6c22f) | GTM |
| [`gtm_create_folder`](#tool-gtm_create_folder-a7f80e8c) | GTM |
| [`gtm_list_folder_entities`](#tool-gtm_list_folder_entities-a2313233) | GTM |
| [`gtm_list_versions`](#tool-gtm_list_versions-f9371c4c) | GTM |
| [`gtm_get_live_version`](#tool-gtm_get_live_version-986da5ee) | GTM |
| [`gtm_create_version_from_workspace`](#tool-gtm_create_version_from_workspace-41b346fc) | GTM |
| [`gtm_publish_workspace_now`](#tool-gtm_publish_workspace_now-42328925) | GTM |
| [`gtm_rollback_to_version`](#tool-gtm_rollback_to_version-d732babf) | GTM |
| [`gtm_find_unused_tags`](#tool-gtm_find_unused_tags-e3888960) | GTM |
| [`gtm_find_paused_tags`](#tool-gtm_find_paused_tags-cf83b84e) | GTM |
| [`gtm_audit_container`](#tool-gtm_audit_container-a82e2cd2) | GTM |
| [`gtm_find_tags_by_type`](#tool-gtm_find_tags_by_type-aac2abcd) | GTM |
| [`gtm_build_ga4_config_tag`](#tool-gtm_build_ga4_config_tag-0e772add) | GTM |
| [`gtm_build_ga4_event_tag`](#tool-gtm_build_ga4_event_tag-1f45751c) | GTM |
| [`gtm_build_google_ads_conversion_tag`](#tool-gtm_build_google_ads_conversion_tag-55d7c683) | GTM |
| [`gtm_build_google_ads_remarketing_tag`](#tool-gtm_build_google_ads_remarketing_tag-4e71d2dc) | GTM |
| [`gtm_build_conversion_linker_tag`](#tool-gtm_build_conversion_linker_tag-cfca1a13) | GTM |
| [`gtm_build_custom_html_tag`](#tool-gtm_build_custom_html_tag-708d7ab9) | GTM |
| [`gtm_build_facebook_pixel_tag`](#tool-gtm_build_facebook_pixel_tag-75d1e224) | GTM |
| [`gtm_build_tiktok_pixel_tag`](#tool-gtm_build_tiktok_pixel_tag-bb295f97) | GTM |
| [`gtm_build_linkedin_insight_tag`](#tool-gtm_build_linkedin_insight_tag-c9d4557d) | GTM |
| [`gtm_build_microsoft_clarity_tag`](#tool-gtm_build_microsoft_clarity_tag-e43b1d1e) | GTM |
| [`gtm_build_pageview_trigger`](#tool-gtm_build_pageview_trigger-066d3ea0) | GTM |
| [`gtm_build_custom_event_trigger`](#tool-gtm_build_custom_event_trigger-8d46b30d) | GTM |
| [`gtm_build_link_click_trigger`](#tool-gtm_build_link_click_trigger-fafeff5d) | GTM |
| [`gtm_build_form_submit_trigger`](#tool-gtm_build_form_submit_trigger-8ab23a63) | GTM |
| [`gtm_build_scroll_depth_trigger`](#tool-gtm_build_scroll_depth_trigger-4ca35122) | GTM |
| [`gtm_build_datalayer_variable`](#tool-gtm_build_datalayer_variable-f7c1558b) | GTM |
| [`gtm_build_custom_javascript_variable`](#tool-gtm_build_custom_javascript_variable-fd68f95b) | GTM |
| [`gtm_build_constant_variable`](#tool-gtm_build_constant_variable-7ea935da) | GTM |
| [`gtm_build_url_variable`](#tool-gtm_build_url_variable-aa65effe) | GTM |
| [`gtm_setup_ga4_basic`](#tool-gtm_setup_ga4_basic-8013e23a) | GTM |
| [`gtm_setup_google_ads_conversion`](#tool-gtm_setup_google_ads_conversion-58a5b911) | GTM |
| [`agency_list_platform_accounts`](royazran--mcp-ads.tools-009.md#tool-agency_list_platform_accounts-e049ea57) | Other product |
| [`google_ads_mcc_list_accounts`](royazran--mcp-ads.tools-009.md#tool-google_ads_mcc_list_accounts-6c5b498e) | Other product |
| [`google_ads_mcc_performance`](royazran--mcp-ads.tools-009.md#tool-google_ads_mcc_performance-5614628b) | Other product |
| [`google_ads_mcc_budget_pacing`](royazran--mcp-ads.tools-009.md#tool-google_ads_mcc_budget_pacing-8e2ec98d) | Other product |
| [`google_ads_shared_negative_lists`](royazran--mcp-ads.tools-009.md#tool-google_ads_shared_negative_lists-cad11a6a) | Other product |
| [`google_ads_portfolio_bid_strategies`](royazran--mcp-ads.tools-009.md#tool-google_ads_portfolio_bid_strategies-ce4b6c88) | Other product |
| [`google_ads_shared_budgets`](royazran--mcp-ads.tools-009.md#tool-google_ads_shared_budgets-6e5c3e5c) | Other product |
| [`meta_business_overview`](royazran--mcp-ads.tools-009.md#tool-meta_business_overview-50e21112) | Other product |
| [`meta_business_cross_account_spend`](royazran--mcp-ads.tools-009.md#tool-meta_business_cross_account_spend-1b07efac) | Other product |
| [`meta_business_list_pixels`](royazran--mcp-ads.tools-009.md#tool-meta_business_list_pixels-cb254a3c) | Other product |
| [`meta_business_assign_pixel`](royazran--mcp-ads.tools-009.md#tool-meta_business_assign_pixel-93a3d324) | Other product |
| [`meta_business_shared_audiences`](royazran--mcp-ads.tools-009.md#tool-meta_business_shared_audiences-724856cc) | Other product |
| [`meta_business_share_audience`](royazran--mcp-ads.tools-009.md#tool-meta_business_share_audience-270bc7ce) | Other product |
| [`meta_business_add_user`](royazran--mcp-ads.tools-009.md#tool-meta_business_add_user-b7f4da79) | Other product |
| [`meta_business_grant_account_access`](royazran--mcp-ads.tools-009.md#tool-meta_business_grant_account_access-45f324e1) | Other product |
| [`agency_cross_platform_overview`](royazran--mcp-ads.tools-009.md#tool-agency_cross_platform_overview-661052ec) | Other product |
| [`agency_account_health_audit`](royazran--mcp-ads.tools-009.md#tool-agency_account_health_audit-a9f65dc6) | Other product |
| [`agency_budget_pacing_all_channels`](royazran--mcp-ads.tools-009.md#tool-agency_budget_pacing_all_channels-528b301a) | Other product |
| [`agency_weekly_report`](royazran--mcp-ads.tools-009.md#tool-agency_weekly_report-93e63b31) | Other product |
| [`agency_wasted_spend_report`](royazran--mcp-ads.tools-009.md#tool-agency_wasted_spend_report-a9a47092) | Other product |
| [`report_monthly_executive`](royazran--mcp-ads.tools-009.md#tool-report_monthly_executive-d0280813) | Other product |
| [`report_seo_full`](royazran--mcp-ads.tools-009.md#tool-report_seo_full-54d89f1c) | Other product |
| [`report_paid_search_full`](royazran--mcp-ads.tools-009.md#tool-report_paid_search_full-545000b2) | Other product |
| [`report_paid_social_full`](royazran--mcp-ads.tools-009.md#tool-report_paid_social_full-11f1fad3) | Other product |
| [`report_ecommerce_full`](royazran--mcp-ads.tools-009.md#tool-report_ecommerce_full-5e56dbb0) | Other product |
| [`report_new_client_audit`](royazran--mcp-ads.tools-009.md#tool-report_new_client_audit-b48b43c0) | Other product |
| [`report_landing_page_quality`](royazran--mcp-ads.tools-009.md#tool-report_landing_page_quality-91a2a95a) | Other product |
| [`report_campaign_health_check`](royazran--mcp-ads.tools-009.md#tool-report_campaign_health_check-b85ef759) | Other product |
| [`creative_generate_image`](royazran--mcp-ads.tools-009.md#tool-creative_generate_image-6bf4ca8a) | Other product |
| [`creative_start_image_generation`](royazran--mcp-ads.tools-009.md#tool-creative_start_image_generation-f7274324) | Other product |
| [`creative_check_image_generation_status`](royazran--mcp-ads.tools-009.md#tool-creative_check_image_generation_status-27f64483) | Other product |
| [`creative_get_image_generation_result`](royazran--mcp-ads.tools-009.md#tool-creative_get_image_generation_result-af0e5e9a) | Other product |
| [`generate_image`](royazran--mcp-ads.tools-009.md#tool-generate_image-3fc7c9bc) | Other product |
| [`creative_generate_ad_images`](royazran--mcp-ads.tools-009.md#tool-creative_generate_ad_images-561b7f12) | Other product |
| [`generate_ad_creative`](royazran--mcp-ads.tools-009.md#tool-generate_ad_creative-1f0d7826) | Other product |
| [`media_upload_result`](royazran--mcp-ads.tools-009.md#tool-media_upload_result-2b64050b) | Other product |
| [`analytics_detect_plugin`](royazran--mcp-ads.tools-009.md#tool-analytics_detect_plugin-9f2243a7) | Other product |
| [`analytics_gtm_install`](royazran--mcp-ads.tools-009.md#tool-analytics_gtm_install-183843be) | Other product |
| [`analytics_gtm_get_container_id`](royazran--mcp-ads.tools-009.md#tool-analytics_gtm_get_container_id-30c4fdf1) | Other product |
| [`analytics_ga4_configure`](royazran--mcp-ads.tools-009.md#tool-analytics_ga4_configure-9fefe0ad) | Other product |
| [`analytics_ga4_test_event`](royazran--mcp-ads.tools-009.md#tool-analytics_ga4_test_event-b799665f) | Other product |
| [`analytics_meta_pixel_install`](royazran--mcp-ads.tools-009.md#tool-analytics_meta_pixel_install-d9055d2f) | Other product |
| [`analytics_meta_pixel_configure`](royazran--mcp-ads.tools-009.md#tool-analytics_meta_pixel_configure-bfc3f38b) | Other product |
| [`analytics_meta_capi_send`](royazran--mcp-ads.tools-009.md#tool-analytics_meta_capi_send-af8443f2) | Other product |
| [`analytics_tiktok_pixel_install`](royazran--mcp-ads.tools-009.md#tool-analytics_tiktok_pixel_install-b9fe7834) | Other product |
| [`analytics_linkedin_insight_install`](royazran--mcp-ads.tools-009.md#tool-analytics_linkedin_insight_install-3332b136) | Other product |
| [`analytics_twitter_pixel_install`](royazran--mcp-ads.tools-009.md#tool-analytics_twitter_pixel_install-4834ea2c) | Other product |
| [`analytics_pinterest_tag_install`](royazran--mcp-ads.tools-009.md#tool-analytics_pinterest_tag_install-f8e05647) | Other product |
| [`analytics_clarity_install`](royazran--mcp-ads.tools-009.md#tool-analytics_clarity_install-17d52c15) | Other product |
| [`analytics_hotjar_install`](royazran--mcp-ads.tools-009.md#tool-analytics_hotjar_install-d46929cc) | Other product |
| [`analytics_utm_builder`](royazran--mcp-ads.tools-009.md#tool-analytics_utm_builder-8b30e1fc) | Other product |
| [`analytics_wc_enhanced_ecommerce`](royazran--mcp-ads.tools-009.md#tool-analytics_wc_enhanced_ecommerce-9f31a114) | Other product |
| [`analytics_custom_event_inject`](royazran--mcp-ads.tools-009.md#tool-analytics_custom_event_inject-3505e668) | Other product |
| [`analytics_consent_banner_detect`](royazran--mcp-ads.tools-009.md#tool-analytics_consent_banner_detect-807402d3) | Other product |
| [`analytics_consent_configure`](royazran--mcp-ads.tools-009.md#tool-analytics_consent_configure-b7c9ac55) | Other product |
| [`analytics_google_ads_conversion`](royazran--mcp-ads.tools-009.md#tool-analytics_google_ads_conversion-38b39938) | Other product |
| [`analytics_get_tracking_codes`](royazran--mcp-ads.tools-009.md#tool-analytics_get_tracking_codes-31b6853f) | Other product |
| [`analytics_remove_tracking_code`](royazran--mcp-ads.tools-009.md#tool-analytics_remove_tracking_code-ebf5d0a3) | Other product |
| [`analytics_verify_tracking_chain`](royazran--mcp-ads.tools-009.md#tool-analytics_verify_tracking_chain-56ef5c91) | Other product |
| [`analytics_install_gtag_base`](royazran--mcp-ads.tools-009.md#tool-analytics_install_gtag_base-d384749f) | Other product |
| [`analytics_detect_forms`](royazran--mcp-ads.tools-009.md#tool-analytics_detect_forms-28444b9c) | Other product |
| [`analytics_google_ads_form_conversion`](royazran--mcp-ads.tools-009.md#tool-analytics_google_ads_form_conversion-0b2c17b7) | Other product |
| [`analytics_woo_google_ads_purchase`](royazran--mcp-ads.tools-009.md#tool-analytics_woo_google_ads_purchase-406887de) | Other product |
| [`analytics_woo_google_ads_add_to_cart`](royazran--mcp-ads.tools-009.md#tool-analytics_woo_google_ads_add_to_cart-d6a9fb37) | Other product |
| [`analytics_woo_google_ads_checkout`](royazran--mcp-ads.tools-009.md#tool-analytics_woo_google_ads_checkout-ce77a154) | Other product |
| [`analytics_woo_google_ads_setup_full`](royazran--mcp-ads.tools-009.md#tool-analytics_woo_google_ads_setup_full-20c46951) | Other product |
| [`analytics_google_ads_page_conversion`](royazran--mcp-ads.tools-009.md#tool-analytics_google_ads_page_conversion-3374ea28) | Other product |
| [`portal_get_dashboard_config`](royazran--mcp-ads.tools-009.md#tool-portal_get_dashboard_config-d3058b7a) | Other product |
| [`portal_customize_dashboard`](royazran--mcp-ads.tools-009.md#tool-portal_customize_dashboard-0cf17742) | Other product |
| [`portal_add_dashboard_widget`](royazran--mcp-ads.tools-009.md#tool-portal_add_dashboard_widget-32e5e9c1) | Other product |
| [`portal_get_customer_orders`](royazran--mcp-ads.tools-009.md#tool-portal_get_customer_orders-93497a67) | Other product |
| [`portal_get_customer_downloads`](royazran--mcp-ads.tools-009.md#tool-portal_get_customer_downloads-9649bb1a) | Other product |
| [`portal_get_customer_subscriptions`](royazran--mcp-ads.tools-009.md#tool-portal_get_customer_subscriptions-eba3ee08) | Other product |
| [`portal_get_customer_wishlist`](royazran--mcp-ads.tools-009.md#tool-portal_get_customer_wishlist-161c4a4c) | Other product |
| [`portal_get_customer_points`](royazran--mcp-ads.tools-009.md#tool-portal_get_customer_points-b4499624) | Other product |
| [`portal_update_customer_profile`](royazran--mcp-ads.tools-009.md#tool-portal_update_customer_profile-a13d9912) | Other product |
| [`portal_get_customer_stats`](royazran--mcp-ads.tools-009.md#tool-portal_get_customer_stats-af7d54e9) | Other product |
| [`portal_create_custom_endpoint`](royazran--mcp-ads.tools-009.md#tool-portal_create_custom_endpoint-57300d43) | Other product |
| [`portal_customize_menu`](royazran--mcp-ads.tools-009.md#tool-portal_customize_menu-2a250fc4) | Other product |
| [`portal_set_welcome_message`](royazran--mcp-ads.tools-009.md#tool-portal_set_welcome_message-6db21030) | Other product |
| [`portal_get_recent_activity`](royazran--mcp-ads.tools-009.md#tool-portal_get_recent_activity-57e82ea6) | Other product |
| [`portal_create_support_ticket`](royazran--mcp-ads.tools-009.md#tool-portal_create_support_ticket-5fd563a8) | Other product |
| [`portal_get_saved_addresses`](royazran--mcp-ads.tools-009.md#tool-portal_get_saved_addresses-5a5cebc7) | Other product |
| [`portal_manage_payment_methods`](royazran--mcp-ads.tools-009.md#tool-portal_manage_payment_methods-6048b04b) | Other product |
| [`portal_get_notifications`](royazran--mcp-ads.tools-009.md#tool-portal_get_notifications-730a1c54) | Other product |
| [`design_color_palette_extract`](royazran--mcp-ads.tools-009.md#tool-design_color_palette_extract-0b21b3ae) | Other product |
| [`design_color_palette_generate`](royazran--mcp-ads.tools-009.md#tool-design_color_palette_generate-87537ceb) | Other product |
| [`design_font_pair_suggest`](royazran--mcp-ads.tools-009.md#tool-design_font_pair_suggest-9a0873f1) | Other product |
| [`design_spacing_system_generate`](royazran--mcp-ads.tools-009.md#tool-design_spacing_system_generate-062cd509) | Other product |
| [`design_apply_global_colors`](royazran--mcp-ads.tools-009.md#tool-design_apply_global_colors-5f2f1cde) | Other product |
| [`design_apply_global_fonts`](royazran--mcp-ads.tools-009.md#tool-design_apply_global_fonts-eda7f94c) | Other product |
| [`design_screenshot_page`](royazran--mcp-ads.tools-009.md#tool-design_screenshot_page-77ad8a3f) | Other product |
| [`design_responsive_check`](royazran--mcp-ads.tools-009.md#tool-design_responsive_check-3618f69a) | Other product |
| [`design_css_custom_inject`](royazran--mcp-ads.tools-009.md#tool-design_css_custom_inject-bf217d48) | Other product |
| [`design_css_get_custom`](royazran--mcp-ads.tools-009.md#tool-design_css_get_custom-e1c6ea97) | Other product |
| [`design_google_fonts_list`](royazran--mcp-ads.tools-009.md#tool-design_google_fonts_list-e4fa35c0) | Other product |
| [`design_google_fonts_enqueue`](royazran--mcp-ads.tools-009.md#tool-design_google_fonts_enqueue-461c77f9) | Other product |
| [`design_icon_libraries_list`](royazran--mcp-ads.tools-009.md#tool-design_icon_libraries_list-f6a43ece) | Other product |
| [`design_gradient_generate`](royazran--mcp-ads.tools-009.md#tool-design_gradient_generate-641d9750) | Other product |
| [`design_box_shadow_generate`](royazran--mcp-ads.tools-009.md#tool-design_box_shadow_generate-a456d481) | Other product |
| [`elementor_theme_builder_list`](royazran--mcp-ads.tools-009.md#tool-elementor_theme_builder_list-80ebe128) | Other product |
| [`elementor_theme_builder_create`](royazran--mcp-ads.tools-009.md#tool-elementor_theme_builder_create-8d6b77c2) | Other product |
| [`elementor_theme_builder_set_conditions`](royazran--mcp-ads.tools-009.md#tool-elementor_theme_builder_set_conditions-d768f588) | Other product |
| [`elementor_theme_builder_preview`](royazran--mcp-ads.tools-009.md#tool-elementor_theme_builder_preview-afc8cf13) | Other product |
| [`elementor_popup_create`](royazran--mcp-ads.tools-009.md#tool-elementor_popup_create-a58bf454) | Other product |
| [`elementor_popup_set_triggers`](royazran--mcp-ads.tools-009.md#tool-elementor_popup_set_triggers-96e25abc) | Other product |
| [`elementor_popup_set_rules`](royazran--mcp-ads.tools-009.md#tool-elementor_popup_set_rules-fedca65a) | Other product |
| [`elementor_popup_set_conditions`](royazran--mcp-ads.tools-009.md#tool-elementor_popup_set_conditions-3cddf7a6) | Other product |
| [`elementor_form_get_submissions`](royazran--mcp-ads.tools-009.md#tool-elementor_form_get_submissions-fcf95d4d) | Other product |
| [`elementor_form_export_submissions`](royazran--mcp-ads.tools-009.md#tool-elementor_form_export_submissions-b10f82b4) | Other product |
| [`elementor_loop_create_template`](royazran--mcp-ads.tools-009.md#tool-elementor_loop_create_template-0304438d) | Other product |
| [`elementor_loop_configure_query`](royazran--mcp-ads.tools-009.md#tool-elementor_loop_configure_query-cc8b6539) | Other product |
| [`elementor_loop_set_layout`](royazran--mcp-ads.tools-009.md#tool-elementor_loop_set_layout-2e9ea81f) | Other product |
| [`elementor_dynamic_tags_list`](royazran--mcp-ads.tools-009.md#tool-elementor_dynamic_tags_list-5678b2ab) | Other product |
| [`elementor_dynamic_tags_apply`](royazran--mcp-ads.tools-009.md#tool-elementor_dynamic_tags_apply-e0248199) | Other product |
| [`elementor_custom_code_list`](royazran--mcp-ads.tools-009.md#tool-elementor_custom_code_list-92606745) | Other product |
| [`elementor_custom_code_add`](royazran--mcp-ads.tools-010.md#tool-elementor_custom_code_add-7c091936) | Other product |
| [`elementor_custom_code_update`](royazran--mcp-ads.tools-010.md#tool-elementor_custom_code_update-3bd4eb54) | Other product |
| [`elementor_custom_code_remove`](royazran--mcp-ads.tools-010.md#tool-elementor_custom_code_remove-0264465b) | Other product |
| [`elementor_landing_page_create`](royazran--mcp-ads.tools-010.md#tool-elementor_landing_page_create-3f57b3d0) | Other product |
| [`elementor_landing_page_list`](royazran--mcp-ads.tools-010.md#tool-elementor_landing_page_list-fb0a1282) | Other product |
| [`elementor_experiments_list`](royazran--mcp-ads.tools-010.md#tool-elementor_experiments_list-d308ccf1) | Other product |
| [`elementor_experiments_toggle`](royazran--mcp-ads.tools-010.md#tool-elementor_experiments_toggle-62ebb14f) | Other product |
| [`elementor_custom_fonts_add`](royazran--mcp-ads.tools-010.md#tool-elementor_custom_fonts_add-84ec77b2) | Other product |
| [`elementor_custom_fonts_list`](royazran--mcp-ads.tools-010.md#tool-elementor_custom_fonts_list-be5cd02e) | Other product |
| [`elementor_custom_fonts_remove`](royazran--mcp-ads.tools-010.md#tool-elementor_custom_fonts_remove-a9beffcb) | Other product |
| [`elementor_custom_icons_upload`](royazran--mcp-ads.tools-010.md#tool-elementor_custom_icons_upload-f3b9e9ff) | Other product |
| [`elementor_custom_icons_list`](royazran--mcp-ads.tools-010.md#tool-elementor_custom_icons_list-c83ccd22) | Other product |
| [`elementor_container_create`](royazran--mcp-ads.tools-010.md#tool-elementor_container_create-00ff5176) | Other product |
| [`elementor_container_set_layout`](royazran--mcp-ads.tools-010.md#tool-elementor_container_set_layout-f248db6e) | Other product |
| [`elementor_build_full_page`](royazran--mcp-ads.tools-010.md#tool-elementor_build_full_page-573dd362) | Other product |
| [`elementor_get_page_structure`](royazran--mcp-ads.tools-010.md#tool-elementor_get_page_structure-d29c5ad6) | Other product |
| [`elementor_clear_page`](royazran--mcp-ads.tools-010.md#tool-elementor_clear_page-bffee215) | Other product |
| [`elementor_add_section`](royazran--mcp-ads.tools-010.md#tool-elementor_add_section-c93037bf) | Other product |
| [`elementor_delete_section`](royazran--mcp-ads.tools-010.md#tool-elementor_delete_section-37d56c74) | Other product |
| [`elementor_update_section_settings`](royazran--mcp-ads.tools-010.md#tool-elementor_update_section_settings-b28e548a) | Other product |
| [`elementor_widget_heading`](royazran--mcp-ads.tools-010.md#tool-elementor_widget_heading-24a216a3) | Other product |
| [`elementor_widget_text`](royazran--mcp-ads.tools-010.md#tool-elementor_widget_text-dd8e55a2) | Other product |
| [`elementor_widget_image`](royazran--mcp-ads.tools-010.md#tool-elementor_widget_image-0681bd05) | Other product |
| [`elementor_widget_button`](royazran--mcp-ads.tools-010.md#tool-elementor_widget_button-9fd8af1c) | Other product |
| [`elementor_widget_video`](royazran--mcp-ads.tools-010.md#tool-elementor_widget_video-f8ea27a5) | Other product |
| [`elementor_widget_icon`](royazran--mcp-ads.tools-010.md#tool-elementor_widget_icon-b94dbc60) | Other product |
| [`elementor_widget_divider`](royazran--mcp-ads.tools-010.md#tool-elementor_widget_divider-b8093b04) | Other product |
| [`elementor_widget_spacer`](royazran--mcp-ads.tools-010.md#tool-elementor_widget_spacer-9f6ad2e7) | Other product |
| [`elementor_widget_image_box`](royazran--mcp-ads.tools-010.md#tool-elementor_widget_image_box-24ad7a66) | Other product |
| [`elementor_widget_icon_box`](royazran--mcp-ads.tools-010.md#tool-elementor_widget_icon_box-7e3abd61) | Other product |
| [`elementor_widget_image_gallery`](royazran--mcp-ads.tools-010.md#tool-elementor_widget_image_gallery-678968be) | Other product |
| [`elementor_widget_testimonial`](royazran--mcp-ads.tools-010.md#tool-elementor_widget_testimonial-610c86db) | Other product |
| [`elementor_widget_tabs`](royazran--mcp-ads.tools-010.md#tool-elementor_widget_tabs-6f79e779) | Other product |
| [`elementor_widget_accordion`](royazran--mcp-ads.tools-010.md#tool-elementor_widget_accordion-9b651720) | Other product |
| [`elementor_widget_counter`](royazran--mcp-ads.tools-010.md#tool-elementor_widget_counter-6524897c) | Other product |
| [`elementor_widget_progress_bar`](royazran--mcp-ads.tools-010.md#tool-elementor_widget_progress_bar-f8fdc767) | Other product |
| [`elementor_widget_google_maps`](royazran--mcp-ads.tools-010.md#tool-elementor_widget_google_maps-c68a024f) | Other product |
| [`elementor_widget_icon_list`](royazran--mcp-ads.tools-010.md#tool-elementor_widget_icon_list-dbc2244f) | Other product |
| [`elementor_widget_social_icons`](royazran--mcp-ads.tools-010.md#tool-elementor_widget_social_icons-45d4507a) | Other product |
| [`elementor_widget_alert`](royazran--mcp-ads.tools-010.md#tool-elementor_widget_alert-cd6d5eaa) | Other product |
| [`elementor_widget_html`](royazran--mcp-ads.tools-010.md#tool-elementor_widget_html-e9ca1f37) | Other product |
| [`elementor_widget_shortcode`](royazran--mcp-ads.tools-010.md#tool-elementor_widget_shortcode-1ac5979c) | Other product |
| [`elementor_widget_slides`](royazran--mcp-ads.tools-010.md#tool-elementor_widget_slides-31c98eea) | Other product |
| [`elementor_widget_form`](royazran--mcp-ads.tools-010.md#tool-elementor_widget_form-98fb13c8) | Other product |
| [`elementor_widget_countdown`](royazran--mcp-ads.tools-010.md#tool-elementor_widget_countdown-e08f6c1c) | Other product |
| [`elementor_widget_price_table`](royazran--mcp-ads.tools-010.md#tool-elementor_widget_price_table-24a39a9f) | Other product |
| [`elementor_widget_posts`](royazran--mcp-ads.tools-010.md#tool-elementor_widget_posts-183e9782) | Other product |
| [`elementor_widget_woo_product_title`](royazran--mcp-ads.tools-010.md#tool-elementor_widget_woo_product_title-8291254d) | Other product |
| [`elementor_widget_woo_product_images`](royazran--mcp-ads.tools-010.md#tool-elementor_widget_woo_product_images-6c596462) | Other product |
| [`elementor_widget_woo_product_price`](royazran--mcp-ads.tools-010.md#tool-elementor_widget_woo_product_price-d42fc162) | Other product |
| [`elementor_widget_woo_add_to_cart`](royazran--mcp-ads.tools-010.md#tool-elementor_widget_woo_add_to_cart-d89694bc) | Other product |
| [`elementor_widget_woo_cart`](royazran--mcp-ads.tools-010.md#tool-elementor_widget_woo_cart-c48b7bab) | Other product |
| [`elementor_widget_woo_checkout`](royazran--mcp-ads.tools-010.md#tool-elementor_widget_woo_checkout-2d55d145) | Other product |
| [`elementor_preset_hero`](royazran--mcp-ads.tools-010.md#tool-elementor_preset_hero-ce129b5d) | Other product |
| [`elementor_preset_features`](royazran--mcp-ads.tools-010.md#tool-elementor_preset_features-6f18a21a) | Other product |
| [`elementor_preset_testimonials`](royazran--mcp-ads.tools-010.md#tool-elementor_preset_testimonials-5bf75f1c) | Other product |
| [`elementor_preset_cta`](royazran--mcp-ads.tools-010.md#tool-elementor_preset_cta-d5acfd8f) | Other product |
| [`elementor_preset_pricing`](royazran--mcp-ads.tools-010.md#tool-elementor_preset_pricing-f7b46ee9) | Other product |
| [`elementor_preset_full_landing_page`](royazran--mcp-ads.tools-010.md#tool-elementor_preset_full_landing_page-411ad955) | Other product |
| [`elementor_remove_widget`](royazran--mcp-ads.tools-010.md#tool-elementor_remove_widget-5c45ffe2) | Other product |
| [`elementor_update_widget_settings`](royazran--mcp-ads.tools-010.md#tool-elementor_update_widget_settings-e151c2bd) | Other product |
| [`elementor_list_widgets_on_page`](royazran--mcp-ads.tools-010.md#tool-elementor_list_widgets_on_page-958d28d9) | Other product |
| [`elementor_list_templates`](royazran--mcp-ads.tools-010.md#tool-elementor_list_templates-5868cd92) | Other product |
| [`elementor_get_template`](royazran--mcp-ads.tools-010.md#tool-elementor_get_template-71850cca) | Other product |
| [`elementor_create_template`](royazran--mcp-ads.tools-010.md#tool-elementor_create_template-bcf072a0) | Other product |
| [`elementor_detect`](royazran--mcp-ads.tools-010.md#tool-elementor_detect-5f78720c) | Other product |
| [`elementor_pro_detect`](royazran--mcp-ads.tools-010.md#tool-elementor_pro_detect-4733a0e3) | Other product |
| [`elementor_rest_capabilities`](royazran--mcp-ads.tools-010.md#tool-elementor_rest_capabilities-e6f4ded9) | Other product |
| [`elementor_validate_page_data`](royazran--mcp-ads.tools-010.md#tool-elementor_validate_page_data-233a2fa8) | Other product |
| [`elementor_get_page_data`](royazran--mcp-ads.tools-010.md#tool-elementor_get_page_data-9c171f60) | Other product |
| [`elementor_backup_page_data`](royazran--mcp-ads.tools-010.md#tool-elementor_backup_page_data-a97028ff) | Other product |
| [`elementor_update_page_data`](royazran--mcp-ads.tools-010.md#tool-elementor_update_page_data-6f5a9861) | Other product |
| [`elementor_restore_page_data`](royazran--mcp-ads.tools-010.md#tool-elementor_restore_page_data-d5535f0e) | Other product |
| [`elementor_enable_on_page`](royazran--mcp-ads.tools-010.md#tool-elementor_enable_on_page-d0a7e9b2) | Other product |
| [`elementor_disable_on_page`](royazran--mcp-ads.tools-010.md#tool-elementor_disable_on_page-43e44e1a) | Other product |
| [`elementor_get_kit_settings`](royazran--mcp-ads.tools-010.md#tool-elementor_get_kit_settings-c80821f2) | Other product |
| [`elementor_update_kit_settings`](royazran--mcp-ads.tools-010.md#tool-elementor_update_kit_settings-2bc3654c) | Other product |
| [`elementor_get_global_colors`](royazran--mcp-ads.tools-010.md#tool-elementor_get_global_colors-5ffd16ba) | Other product |
| [`elementor_add_global_color`](royazran--mcp-ads.tools-010.md#tool-elementor_add_global_color-af7ff78c) | Other product |
| [`elementor_clear_cache`](royazran--mcp-ads.tools-010.md#tool-elementor_clear_cache-f0003286) | Other product |
| [`elementor_export_template`](royazran--mcp-ads.tools-010.md#tool-elementor_export_template-36363ed9) | Other product |
| [`elementor_import_template`](royazran--mcp-ads.tools-010.md#tool-elementor_import_template-29999359) | Other product |
| [`elementor_list_popups`](royazran--mcp-ads.tools-010.md#tool-elementor_list_popups-7f77cb82) | Other product |
| [`elementor_create_page_with_template`](royazran--mcp-ads.tools-010.md#tool-elementor_create_page_with_template-3b15e08a) | Other product |
| [`elementor_get_page_settings`](royazran--mcp-ads.tools-010.md#tool-elementor_get_page_settings-2736f104) | Other product |
| [`elementor_update_page_settings`](royazran--mcp-ads.tools-010.md#tool-elementor_update_page_settings-c2ec3fd6) | Other product |
| [`sitegen_from_brief`](royazran--mcp-ads.tools-010.md#tool-sitegen_from_brief-19baeb82) | Other product |
| [`sitegen_create_pages_batch`](royazran--mcp-ads.tools-010.md#tool-sitegen_create_pages_batch-da3b42bf) | Other product |
| [`sitegen_setup_menu`](royazran--mcp-ads.tools-010.md#tool-sitegen_setup_menu-1bdfb5c5) | Other product |
| [`sitegen_setup_homepage`](royazran--mcp-ads.tools-010.md#tool-sitegen_setup_homepage-52bb290c) | Other product |
| [`sitegen_setup_footer`](royazran--mcp-ads.tools-010.md#tool-sitegen_setup_footer-ed41fa2e) | Other product |
| [`sitegen_setup_header`](royazran--mcp-ads.tools-010.md#tool-sitegen_setup_header-3eef179c) | Other product |
| [`sitegen_setup_woocommerce`](royazran--mcp-ads.tools-010.md#tool-sitegen_setup_woocommerce-343a2d2e) | Other product |
| [`sitegen_import_demo_content`](royazran--mcp-ads.tools-010.md#tool-sitegen_import_demo_content-fbc5a9dd) | Other product |
| [`sitegen_configure_seo_defaults`](royazran--mcp-ads.tools-010.md#tool-sitegen_configure_seo_defaults-46ac86d3) | Other product |
| [`sitegen_configure_analytics`](royazran--mcp-ads.tools-010.md#tool-sitegen_configure_analytics-5a433fc6) | Other product |
| [`sitegen_create_contact_form`](royazran--mcp-ads.tools-010.md#tool-sitegen_create_contact_form-f5f8a18a) | Other product |
| [`sitegen_create_about_page`](royazran--mcp-ads.tools-010.md#tool-sitegen_create_about_page-ba896c02) | Other product |
| [`sitegen_create_services_page`](royazran--mcp-ads.tools-010.md#tool-sitegen_create_services_page-74c52a4b) | Other product |
| [`sitegen_create_portfolio_page`](royazran--mcp-ads.tools-010.md#tool-sitegen_create_portfolio_page-1851c03d) | Other product |
| [`sitegen_finalize`](royazran--mcp-ads.tools-010.md#tool-sitegen_finalize-e384d15c) | Other product |
| [`woodmart_detect`](royazran--mcp-ads.tools-010.md#tool-woodmart_detect-bf8b4462) | Other product |
| [`woodmart_options_get`](royazran--mcp-ads.tools-010.md#tool-woodmart_options_get-c2a32a93) | Other product |
| [`woodmart_options_set`](royazran--mcp-ads.tools-010.md#tool-woodmart_options_set-a615b1ed) | Other product |
| [`woodmart_header_builder_get`](royazran--mcp-ads.tools-010.md#tool-woodmart_header_builder_get-015d4244) | Other product |
| [`woodmart_header_builder_set`](royazran--mcp-ads.tools-010.md#tool-woodmart_header_builder_set-b9399c99) | Other product |
| [`woodmart_footer_get`](royazran--mcp-ads.tools-010.md#tool-woodmart_footer_get-cd86be5d) | Other product |
| [`woodmart_footer_set`](royazran--mcp-ads.tools-010.md#tool-woodmart_footer_set-426c9137) | Other product |
| [`woodmart_prebuilt_list`](royazran--mcp-ads.tools-010.md#tool-woodmart_prebuilt_list-6de7b5c6) | Other product |
| [`woodmart_prebuilt_import`](royazran--mcp-ads.tools-010.md#tool-woodmart_prebuilt_import-2454d4dc) | Other product |
| [`woodmart_shop_page_configure`](royazran--mcp-ads.tools-010.md#tool-woodmart_shop_page_configure-7a8cf9a8) | Other product |
| [`woodmart_product_page_configure`](royazran--mcp-ads.tools-010.md#tool-woodmart_product_page_configure-7fe890d2) | Other product |
| [`woodmart_ajax_filters_configure`](royazran--mcp-ads.tools-010.md#tool-woodmart_ajax_filters_configure-b150d11b) | Other product |
| [`woodmart_color_scheme_set`](royazran--mcp-ads.tools-010.md#tool-woodmart_color_scheme_set-863c55fb) | Other product |
| [`woodmart_typography_set`](royazran--mcp-ads.tools-010.md#tool-woodmart_typography_set-295c7591) | Other product |
| [`woodmart_css_custom_set`](royazran--mcp-ads.tools-010.md#tool-woodmart_css_custom_set-64ea4c8f) | Other product |
| [`woodmart_mega_menu_configure`](royazran--mcp-ads.tools-010.md#tool-woodmart_mega_menu_configure-1c44fb31) | Other product |
| [`woodmart_slider_list`](royazran--mcp-ads.tools-010.md#tool-woodmart_slider_list-fc5b42cb) | Other product |
| [`woodmart_size_guide_create`](royazran--mcp-ads.tools-010.md#tool-woodmart_size_guide_create-10b8694a) | Other product |
| [`woodmart_compare_configure`](royazran--mcp-ads.tools-010.md#tool-woodmart_compare_configure-b087b323) | Other product |
| [`woodmart_wishlist_configure`](royazran--mcp-ads.tools-010.md#tool-woodmart_wishlist_configure-ba1dd38e) | Other product |
| [`elementor_set_page_structure`](royazran--mcp-ads.tools-010.md#tool-elementor_set_page_structure-b5e643be) | Other product |
| [`elementor_add_container`](royazran--mcp-ads.tools-010.md#tool-elementor_add_container-b00927cd) | Other product |
| [`elementor_add_widget_to_page`](royazran--mcp-ads.tools-010.md#tool-elementor_add_widget_to_page-c669ed84) | Other product |
| [`elementor_update_widget`](royazran--mcp-ads.tools-010.md#tool-elementor_update_widget-81a6a4e7) | Other product |
| [`elementor_delete_element`](royazran--mcp-ads.tools-010.md#tool-elementor_delete_element-0a744416) | Other product |
| [`elementor_duplicate_element`](royazran--mcp-ads.tools-010.md#tool-elementor_duplicate_element-c7ae57aa) | Other product |
| [`elementor_widget_text_editor`](royazran--mcp-ads.tools-010.md#tool-elementor_widget_text_editor-082259ca) | Other product |
| [`elementor_widget_toggle`](royazran--mcp-ads.tools-010.md#tool-elementor_widget_toggle-9000b8f5) | Other product |
| [`elementor_widget_star_rating`](royazran--mcp-ads.tools-010.md#tool-elementor_widget_star_rating-b6078f8f) | Other product |
| [`elementor_widget_image_carousel`](royazran--mcp-ads.tools-010.md#tool-elementor_widget_image_carousel-941edb38) | Other product |
| [`elementor_widget_nav_menu`](royazran--mcp-ads.tools-010.md#tool-elementor_widget_nav_menu-fec44854) | Other product |
| [`elementor_widget_flip_box`](royazran--mcp-ads.tools-010.md#tool-elementor_widget_flip_box-294f6161) | Other product |
| [`elementor_widget_call_to_action`](royazran--mcp-ads.tools-010.md#tool-elementor_widget_call_to_action-2e2c33bb) | Other product |
| [`elementor_widget_login`](royazran--mcp-ads.tools-010.md#tool-elementor_widget_login-45b6a617) | Other product |
| [`elementor_widget_woo_products`](royazran--mcp-ads.tools-010.md#tool-elementor_widget_woo_products-d70a8e9b) | Other product |
| [`elementor_widget_search_form`](royazran--mcp-ads.tools-010.md#tool-elementor_widget_search_form-d0fc4f9c) | Other product |
| [`elementor_widget_testimonial_carousel`](royazran--mcp-ads.tools-010.md#tool-elementor_widget_testimonial_carousel-4bd61185) | Other product |
| [`elementor_update_section_style`](royazran--mcp-ads.tools-010.md#tool-elementor_update_section_style-e528bed5) | Other product |
| [`elementor_update_column_style`](royazran--mcp-ads.tools-010.md#tool-elementor_update_column_style-08cd7c04) | Other product |
| [`elementor_set_element_responsive`](royazran--mcp-ads.tools-010.md#tool-elementor_set_element_responsive-d81c49eb) | Other product |
| [`elementor_set_element_animation`](royazran--mcp-ads.tools-010.md#tool-elementor_set_element_animation-b14714ea) | Other product |
| [`elementor_set_global_typography`](royazran--mcp-ads.tools-010.md#tool-elementor_set_global_typography-5bad4f11) | Other product |
| [`elementor_set_global_color`](royazran--mcp-ads.tools-010.md#tool-elementor_set_global_color-5dda2601) | Other product |
| [`elementor_update_kit_buttons`](royazran--mcp-ads.tools-010.md#tool-elementor_update_kit_buttons-131a03ba) | Other product |
| [`elementor_get_kit_data`](royazran--mcp-ads.tools-010.md#tool-elementor_get_kit_data-871d7c34) | Other product |
| [`elementor_update_kit_data`](royazran--mcp-ads.tools-010.md#tool-elementor_update_kit_data-d1299fda) | Other product |
| [`elementor_set_site_name`](royazran--mcp-ads.tools-010.md#tool-elementor_set_site_name-3e45a989) | Other product |
| [`elementor_set_site_logo`](royazran--mcp-ads.tools-010.md#tool-elementor_set_site_logo-6a5682c1) | Other product |
| [`elementor_create_header_template`](royazran--mcp-ads.tools-010.md#tool-elementor_create_header_template-2565dc07) | Other product |
| [`elementor_create_footer_template`](royazran--mcp-ads.tools-011.md#tool-elementor_create_footer_template-e9f6af80) | Other product |
| [`elementor_create_single_post_template`](royazran--mcp-ads.tools-011.md#tool-elementor_create_single_post_template-66fa6d5f) | Other product |
| [`elementor_create_archive_template`](royazran--mcp-ads.tools-011.md#tool-elementor_create_archive_template-205fd2a5) | Other product |
| [`elementor_create_404_template`](royazran--mcp-ads.tools-011.md#tool-elementor_create_404_template-e6ce8a70) | Other product |
| [`elementor_theme_builder_update_conditions`](royazran--mcp-ads.tools-011.md#tool-elementor_theme_builder_update_conditions-0521acb2) | Other product |
| [`elementor_set_performance_settings`](royazran--mcp-ads.tools-011.md#tool-elementor_set_performance_settings-ce6ce9d7) | Other product |
| [`elementor_set_maintenance_mode`](royazran--mcp-ads.tools-011.md#tool-elementor_set_maintenance_mode-5c984a7f) | Other product |
| [`elementor_get_experiments`](royazran--mcp-ads.tools-011.md#tool-elementor_get_experiments-41c43736) | Other product |
| [`elementor_toggle_experiment`](royazran--mcp-ads.tools-011.md#tool-elementor_toggle_experiment-7a1cfc32) | Other product |
| [`elementor_build_woo_shop_page`](royazran--mcp-ads.tools-011.md#tool-elementor_build_woo_shop_page-9bf04dac) | Other product |
| [`elementor_build_woo_product_page`](royazran--mcp-ads.tools-011.md#tool-elementor_build_woo_product_page-3c04030c) | Other product |
| [`elementor_create_full_page`](royazran--mcp-ads.tools-011.md#tool-elementor_create_full_page-8ce464e0) | Other product |
| [`elementor_widget_audio`](royazran--mcp-ads.tools-011.md#tool-elementor_widget_audio-99ea6392) | Other product |
| [`elementor_widget_blockquote`](royazran--mcp-ads.tools-011.md#tool-elementor_widget_blockquote-7337dbda) | Other product |
| [`elementor_widget_text_path`](royazran--mcp-ads.tools-011.md#tool-elementor_widget_text_path-94ceb5e1) | Other product |
| [`elementor_widget_code_highlight`](royazran--mcp-ads.tools-011.md#tool-elementor_widget_code_highlight-5c930e00) | Other product |
| [`elementor_widget_table_of_contents`](royazran--mcp-ads.tools-011.md#tool-elementor_widget_table_of_contents-4bf5d91b) | Other product |
| [`elementor_widget_lottie`](royazran--mcp-ads.tools-011.md#tool-elementor_widget_lottie-05e61610) | Other product |
| [`elementor_widget_gallery_new`](royazran--mcp-ads.tools-011.md#tool-elementor_widget_gallery_new-3d0aaf87) | Other product |
| [`elementor_widget_portfolio`](royazran--mcp-ads.tools-011.md#tool-elementor_widget_portfolio-e77b22e9) | Other product |
| [`elementor_widget_loop_grid`](royazran--mcp-ads.tools-011.md#tool-elementor_widget_loop_grid-46efee2e) | Other product |
| [`elementor_widget_loop_carousel`](royazran--mcp-ads.tools-011.md#tool-elementor_widget_loop_carousel-43f18922) | Other product |
| [`elementor_widget_timeline`](royazran--mcp-ads.tools-011.md#tool-elementor_widget_timeline-bd244572) | Other product |
| [`elementor_widget_media_carousel`](royazran--mcp-ads.tools-011.md#tool-elementor_widget_media_carousel-b8cfe51d) | Other product |
| [`elementor_widget_nested_tabs`](royazran--mcp-ads.tools-011.md#tool-elementor_widget_nested_tabs-3be119b7) | Other product |
| [`elementor_widget_nested_accordion`](royazran--mcp-ads.tools-011.md#tool-elementor_widget_nested_accordion-7638f54a) | Other product |
| [`elementor_widget_share_buttons`](royazran--mcp-ads.tools-011.md#tool-elementor_widget_share_buttons-365a66da) | Other product |
| [`elementor_widget_read_more`](royazran--mcp-ads.tools-011.md#tool-elementor_widget_read_more-18fc01e3) | Other product |
| [`elementor_widget_site_logo`](royazran--mcp-ads.tools-011.md#tool-elementor_widget_site_logo-0005ca8b) | Other product |
| [`elementor_widget_site_title`](royazran--mcp-ads.tools-011.md#tool-elementor_widget_site_title-d2662a4c) | Other product |
| [`elementor_widget_page_title`](royazran--mcp-ads.tools-011.md#tool-elementor_widget_page_title-3d4030fb) | Other product |
| [`elementor_widget_post_title`](royazran--mcp-ads.tools-011.md#tool-elementor_widget_post_title-d9cf43ce) | Other product |
| [`elementor_widget_post_excerpt`](royazran--mcp-ads.tools-011.md#tool-elementor_widget_post_excerpt-d2a4a628) | Other product |
| [`elementor_widget_post_content`](royazran--mcp-ads.tools-011.md#tool-elementor_widget_post_content-6496685d) | Other product |
| [`elementor_widget_post_featured_image`](royazran--mcp-ads.tools-011.md#tool-elementor_widget_post_featured_image-e84331ec) | Other product |
| [`elementor_widget_post_info`](royazran--mcp-ads.tools-011.md#tool-elementor_widget_post_info-5a3788f3) | Other product |
| [`elementor_widget_breadcrumbs`](royazran--mcp-ads.tools-011.md#tool-elementor_widget_breadcrumbs-9bb73c56) | Other product |
| [`elementor_widget_woo_product_rating`](royazran--mcp-ads.tools-011.md#tool-elementor_widget_woo_product_rating-897846a3) | Other product |
| [`elementor_widget_woo_product_stock`](royazran--mcp-ads.tools-011.md#tool-elementor_widget_woo_product_stock-085d220a) | Other product |
| [`elementor_widget_woo_product_sku`](royazran--mcp-ads.tools-011.md#tool-elementor_widget_woo_product_sku-2b1b4f8c) | Other product |
| [`elementor_widget_woo_short_description`](royazran--mcp-ads.tools-011.md#tool-elementor_widget_woo_short_description-e7199a4e) | Other product |
| [`elementor_widget_woo_related_products`](royazran--mcp-ads.tools-011.md#tool-elementor_widget_woo_related_products-d8003f46) | Other product |
| [`elementor_widget_woo_upsells`](royazran--mcp-ads.tools-011.md#tool-elementor_widget_woo_upsells-983167b9) | Other product |
| [`elementor_widget_woo_cross_sells`](royazran--mcp-ads.tools-011.md#tool-elementor_widget_woo_cross_sells-b2b4d7a8) | Other product |
| [`elementor_widget_woo_my_account`](royazran--mcp-ads.tools-011.md#tool-elementor_widget_woo_my_account-51144fd5) | Other product |
| [`elementor_widget_woo_order_tracking`](royazran--mcp-ads.tools-011.md#tool-elementor_widget_woo_order_tracking-10ff18d7) | Other product |
| [`elementor_widget_woo_product_data_tabs`](royazran--mcp-ads.tools-011.md#tool-elementor_widget_woo_product_data_tabs-ecd932d8) | Other product |
| [`elementor_widget_woo_notices`](royazran--mcp-ads.tools-011.md#tool-elementor_widget_woo_notices-c97e5de7) | Other product |
| [`elementor_list_all_elements`](royazran--mcp-ads.tools-011.md#tool-elementor_list_all_elements-7d375d7b) | Other product |
| [`elementor_get_element_settings`](royazran--mcp-ads.tools-011.md#tool-elementor_get_element_settings-a82f4e8e) | Other product |
| [`elementor_patch_element_settings`](royazran--mcp-ads.tools-011.md#tool-elementor_patch_element_settings-9e03b73d) | Other product |
| [`elementor_set_element_custom_css`](royazran--mcp-ads.tools-011.md#tool-elementor_set_element_custom_css-534d9f0e) | Other product |
| [`elementor_get_element_custom_css`](royazran--mcp-ads.tools-011.md#tool-elementor_get_element_custom_css-1f1f4d98) | Other product |
| [`elementor_set_page_custom_css`](royazran--mcp-ads.tools-011.md#tool-elementor_set_page_custom_css-fdc62480) | Other product |
| [`elementor_set_global_custom_css`](royazran--mcp-ads.tools-011.md#tool-elementor_set_global_custom_css-86cd6b9e) | Other product |
| [`elementor_set_element_css_id`](royazran--mcp-ads.tools-011.md#tool-elementor_set_element_css_id-dd91f03d) | Other product |
| [`elementor_set_element_css_classes`](royazran--mcp-ads.tools-011.md#tool-elementor_set_element_css_classes-2a2647c3) | Other product |
| [`elementor_set_element_margin`](royazran--mcp-ads.tools-011.md#tool-elementor_set_element_margin-763146e3) | Other product |
| [`elementor_set_element_padding`](royazran--mcp-ads.tools-011.md#tool-elementor_set_element_padding-9ade77e2) | Other product |
| [`elementor_set_element_background`](royazran--mcp-ads.tools-011.md#tool-elementor_set_element_background-32ca958a) | Other product |
| [`elementor_set_element_background_overlay`](royazran--mcp-ads.tools-011.md#tool-elementor_set_element_background_overlay-76dd1b55) | Other product |
| [`elementor_set_element_border`](royazran--mcp-ads.tools-011.md#tool-elementor_set_element_border-53b231ee) | Other product |
| [`elementor_set_element_box_shadow`](royazran--mcp-ads.tools-011.md#tool-elementor_set_element_box_shadow-6c3ccdcc) | Other product |
| [`elementor_set_element_text_shadow`](royazran--mcp-ads.tools-011.md#tool-elementor_set_element_text_shadow-365a75f0) | Other product |
| [`elementor_set_element_typography`](royazran--mcp-ads.tools-011.md#tool-elementor_set_element_typography-f42fc844) | Other product |
| [`elementor_set_element_color`](royazran--mcp-ads.tools-011.md#tool-elementor_set_element_color-10adf047) | Other product |
| [`elementor_set_element_opacity`](royazran--mcp-ads.tools-011.md#tool-elementor_set_element_opacity-46fc752a) | Other product |
| [`elementor_set_element_visibility`](royazran--mcp-ads.tools-011.md#tool-elementor_set_element_visibility-5496b7a8) | Other product |
| [`elementor_set_element_z_index`](royazran--mcp-ads.tools-011.md#tool-elementor_set_element_z_index-ed26eb77) | Other product |
| [`elementor_set_element_position`](royazran--mcp-ads.tools-011.md#tool-elementor_set_element_position-4b593a73) | Other product |
| [`elementor_set_element_transform`](royazran--mcp-ads.tools-011.md#tool-elementor_set_element_transform-e58a9ae4) | Other product |
| [`elementor_set_element_css_filter`](royazran--mcp-ads.tools-011.md#tool-elementor_set_element_css_filter-ef89503f) | Other product |
| [`elementor_set_element_blend_mode`](royazran--mcp-ads.tools-011.md#tool-elementor_set_element_blend_mode-552ec59c) | Other product |
| [`elementor_set_element_scroll_effects`](royazran--mcp-ads.tools-011.md#tool-elementor_set_element_scroll_effects-30100e3b) | Other product |
| [`elementor_set_element_mouse_effects`](royazran--mcp-ads.tools-011.md#tool-elementor_set_element_mouse_effects-a4151b6e) | Other product |
| [`elementor_set_element_sticky`](royazran--mcp-ads.tools-011.md#tool-elementor_set_element_sticky-1fbbfb84) | Other product |
| [`elementor_set_element_attributes`](royazran--mcp-ads.tools-011.md#tool-elementor_set_element_attributes-03a26721) | Other product |
| [`elementor_set_column_width`](royazran--mcp-ads.tools-011.md#tool-elementor_set_column_width-8459faed) | Other product |
| [`elementor_set_column_gap`](royazran--mcp-ads.tools-011.md#tool-elementor_set_column_gap-4a8f2c9d) | Other product |
| [`elementor_set_column_vertical_align`](royazran--mcp-ads.tools-011.md#tool-elementor_set_column_vertical_align-da942a6a) | Other product |
| [`elementor_set_element_responsive_settings`](royazran--mcp-ads.tools-011.md#tool-elementor_set_element_responsive_settings-4221f7e8) | Other product |
| [`elementor_set_element_hover_animation`](royazran--mcp-ads.tools-011.md#tool-elementor_set_element_hover_animation-40f5ea07) | Other product |
| [`elementor_set_section_shape_divider`](royazran--mcp-ads.tools-011.md#tool-elementor_set_section_shape_divider-92fed8c5) | Other product |
| [`elementor_batch_set_css`](royazran--mcp-ads.tools-011.md#tool-elementor_batch_set_css-387cb906) | Other product |
| [`elementor_copy_element_styles`](royazran--mcp-ads.tools-011.md#tool-elementor_copy_element_styles-5ae30476) | Other product |
| [`elementor_reset_element_styles`](royazran--mcp-ads.tools-011.md#tool-elementor_reset_element_styles-21dfb09c) | Other product |
| [`elementor_set_page_custom_js`](royazran--mcp-ads.tools-011.md#tool-elementor_set_page_custom_js-b90ff055) | Other product |
| [`elementor_set_section_layout`](royazran--mcp-ads.tools-011.md#tool-elementor_set_section_layout-6b19e4b5) | Other product |
| [`elementor_find_kit`](royazran--mcp-ads.tools-011.md#tool-elementor_find_kit-eab23f56) | Other product |
| [`elementor_list_global_colors`](royazran--mcp-ads.tools-011.md#tool-elementor_list_global_colors-ed255121) | Other product |
| [`elementor_update_global_color`](royazran--mcp-ads.tools-011.md#tool-elementor_update_global_color-1c9cb7cc) | Other product |
| [`elementor_delete_global_color`](royazran--mcp-ads.tools-011.md#tool-elementor_delete_global_color-cd06bdbf) | Other product |
| [`elementor_update_system_color`](royazran--mcp-ads.tools-011.md#tool-elementor_update_system_color-55b2f123) | Other product |
| [`elementor_list_global_fonts`](royazran--mcp-ads.tools-011.md#tool-elementor_list_global_fonts-f46752dd) | Other product |
| [`elementor_add_global_font`](royazran--mcp-ads.tools-011.md#tool-elementor_add_global_font-70fd673b) | Other product |
| [`elementor_update_global_font`](royazran--mcp-ads.tools-011.md#tool-elementor_update_global_font-b0adcfca) | Other product |
| [`elementor_delete_global_font`](royazran--mcp-ads.tools-011.md#tool-elementor_delete_global_font-9e25ddd0) | Other product |
| [`elementor_update_system_typography`](royazran--mcp-ads.tools-011.md#tool-elementor_update_system_typography-e6493e22) | Other product |
| [`elementor_set_kit_layout`](royazran--mcp-ads.tools-011.md#tool-elementor_set_kit_layout-581a1d46) | Other product |
| [`elementor_set_kit_body_typography`](royazran--mcp-ads.tools-011.md#tool-elementor_set_kit_body_typography-76d5903e) | Other product |
| [`elementor_set_kit_link_styles`](royazran--mcp-ads.tools-011.md#tool-elementor_set_kit_link_styles-1776608d) | Other product |
| [`elementor_set_kit_background`](royazran--mcp-ads.tools-011.md#tool-elementor_set_kit_background-cb484c61) | Other product |
| [`elementor_set_kit_buttons`](royazran--mcp-ads.tools-011.md#tool-elementor_set_kit_buttons-499b5511) | Other product |
| [`elementor_set_kit_form_fields`](royazran--mcp-ads.tools-011.md#tool-elementor_set_kit_form_fields-2d412950) | Other product |
| [`elementor_set_kit_lightbox`](royazran--mcp-ads.tools-011.md#tool-elementor_set_kit_lightbox-32317e93) | Other product |
| [`elementor_get_kit_custom_css`](royazran--mcp-ads.tools-011.md#tool-elementor_get_kit_custom_css-13445be3) | Other product |
| [`elementor_set_kit_custom_css`](royazran--mcp-ads.tools-011.md#tool-elementor_set_kit_custom_css-afda3f0d) | Other product |
| [`elementor_apply_global_color_to_element`](royazran--mcp-ads.tools-011.md#tool-elementor_apply_global_color_to_element-bc47d7f5) | Other product |
| [`elementor_apply_global_font_to_element`](royazran--mcp-ads.tools-011.md#tool-elementor_apply_global_font_to_element-7a07fd79) | Other product |
| [`elementor_set_kit_image_settings`](royazran--mcp-ads.tools-011.md#tool-elementor_set_kit_image_settings-d6e57bc9) | Other product |
| [`elementor_set_kit_heading_defaults`](royazran--mcp-ads.tools-011.md#tool-elementor_set_kit_heading_defaults-30679b05) | Other product |
| [`elementor_reset_kit_setting`](royazran--mcp-ads.tools-011.md#tool-elementor_reset_kit_setting-3be37319) | Other product |
| [`elementor_export_kit_colors_fonts`](royazran--mcp-ads.tools-011.md#tool-elementor_export_kit_colors_fonts-37e1b98a) | Other product |
| [`elementor_import_kit_colors_fonts`](royazran--mcp-ads.tools-011.md#tool-elementor_import_kit_colors_fonts-fab9a601) | Other product |
| [`elementor_list_design_themes`](royazran--mcp-ads.tools-011.md#tool-elementor_list_design_themes-c033c466) | Other product |
| [`elementor_build_page`](royazran--mcp-ads.tools-011.md#tool-elementor_build_page-5fd71e3d) | Other product |
| [`elementor_add_hero_section`](royazran--mcp-ads.tools-011.md#tool-elementor_add_hero_section-adc12a6c) | Other product |
| [`elementor_add_features_section`](royazran--mcp-ads.tools-011.md#tool-elementor_add_features_section-09ac9489) | Other product |
| [`elementor_add_stats_section`](royazran--mcp-ads.tools-011.md#tool-elementor_add_stats_section-7a6dd625) | Other product |
| [`elementor_add_testimonials_section`](royazran--mcp-ads.tools-011.md#tool-elementor_add_testimonials_section-c31f3a3b) | Other product |
| [`elementor_add_pricing_section`](royazran--mcp-ads.tools-011.md#tool-elementor_add_pricing_section-5ff447c5) | Other product |
| [`elementor_add_cta_section`](royazran--mcp-ads.tools-011.md#tool-elementor_add_cta_section-122f46d6) | Other product |
| [`elementor_add_faq_section`](royazran--mcp-ads.tools-011.md#tool-elementor_add_faq_section-fe27682c) | Other product |
| [`elementor_add_team_section`](royazran--mcp-ads.tools-011.md#tool-elementor_add_team_section-1dd50449) | Other product |
| [`elementor_add_text_media_section`](royazran--mcp-ads.tools-011.md#tool-elementor_add_text_media_section-e0725022) | Other product |
| [`elementor_add_logo_bar`](royazran--mcp-ads.tools-011.md#tool-elementor_add_logo_bar-b540e12e) | Other product |
| [`elementor_set_page_full_width`](royazran--mcp-ads.tools-011.md#tool-elementor_set_page_full_width-5cade146) | Other product |
| [`elementor_get_available_sections`](royazran--mcp-ads.tools-011.md#tool-elementor_get_available_sections-58841668) | Other product |
| [`catalog_create_cpt`](royazran--mcp-ads.tools-011.md#tool-catalog_create_cpt-e225f12d) | Other product |
| [`catalog_register_fields`](royazran--mcp-ads.tools-011.md#tool-catalog_register_fields-92a43dec) | Other product |
| [`catalog_create_item`](royazran--mcp-ads.tools-011.md#tool-catalog_create_item-00bef493) | Other product |
| [`catalog_update_item`](royazran--mcp-ads.tools-011.md#tool-catalog_update_item-2831d5f7) | Other product |
| [`catalog_delete_item`](royazran--mcp-ads.tools-011.md#tool-catalog_delete_item-ff3dcd0a) | Other product |
| [`catalog_list_items`](royazran--mcp-ads.tools-011.md#tool-catalog_list_items-0b8844d1) | Other product |
| [`catalog_bulk_import`](royazran--mcp-ads.tools-011.md#tool-catalog_bulk_import-5400f15c) | Other product |
| [`catalog_create_filters_page`](royazran--mcp-ads.tools-011.md#tool-catalog_create_filters_page-5b7128be) | Other product |
| [`catalog_create_single_template`](royazran--mcp-ads.tools-011.md#tool-catalog_create_single_template-9b846da5) | Other product |
| [`catalog_create_archive_template`](royazran--mcp-ads.tools-011.md#tool-catalog_create_archive_template-8c8e6a0e) | Other product |
| [`catalog_setup_search_engine`](royazran--mcp-ads.tools-011.md#tool-catalog_setup_search_engine-ee9c39c2) | Other product |
| [`catalog_create_comparison_table`](royazran--mcp-ads.tools-011.md#tool-catalog_create_comparison_table-c131d23d) | Other product |
| [`catalog_create_categories`](royazran--mcp-ads.tools-011.md#tool-catalog_create_categories-cffa4244) | Other product |
| [`catalog_assign_category`](royazran--mcp-ads.tools-011.md#tool-catalog_assign_category-1dab97fb) | Other product |
| [`catalog_set_featured_items`](royazran--mcp-ads.tools-011.md#tool-catalog_set_featured_items-f8e4ab31) | Other product |
| [`catalog_get_stats`](royazran--mcp-ads.tools-011.md#tool-catalog_get_stats-f0738ba9) | Other product |
| [`catalog_create_shortcode`](royazran--mcp-ads.tools-011.md#tool-catalog_create_shortcode-a3f40628) | Other product |
| [`catalog_setup_from_preset`](royazran--mcp-ads.tools-011.md#tool-catalog_setup_from_preset-03bd00f9) | Other product |
| [`catalog_configure_sorting`](royazran--mcp-ads.tools-011.md#tool-catalog_configure_sorting-3fe076fd) | Other product |
| [`catalog_export_items`](royazran--mcp-ads.tools-011.md#tool-catalog_export_items-220c122b) | Other product |
| [`reviews_wc_list`](royazran--mcp-ads.tools-011.md#tool-reviews_wc_list-6ff34f19) | Other product |
| [`reviews_wc_get`](royazran--mcp-ads.tools-011.md#tool-reviews_wc_get-c11ed306) | Other product |
| [`reviews_wc_create`](royazran--mcp-ads.tools-012.md#tool-reviews_wc_create-08f5210f) | Other product |
| [`reviews_wc_update`](royazran--mcp-ads.tools-012.md#tool-reviews_wc_update-853b5f05) | Other product |
| [`reviews_wc_delete`](royazran--mcp-ads.tools-012.md#tool-reviews_wc_delete-b9895947) | Other product |
| [`reviews_wc_reply`](royazran--mcp-ads.tools-012.md#tool-reviews_wc_reply-e6cb6fb6) | Other product |
| [`reviews_wc_bulk_approve`](royazran--mcp-ads.tools-012.md#tool-reviews_wc_bulk_approve-1edd03a4) | Other product |
| [`reviews_google_detect`](royazran--mcp-ads.tools-012.md#tool-reviews_google_detect-b5dbcac8) | Other product |
| [`reviews_trustpilot_configure`](royazran--mcp-ads.tools-012.md#tool-reviews_trustpilot_configure-b5edc739) | Other product |
| [`reviews_schema_generate`](royazran--mcp-ads.tools-012.md#tool-reviews_schema_generate-e909645f) | Other product |
| [`reviews_import_from_csv`](royazran--mcp-ads.tools-012.md#tool-reviews_import_from_csv-28d48773) | Other product |
| [`reviews_summary_stats`](royazran--mcp-ads.tools-012.md#tool-reviews_summary_stats-f05677aa) | Other product |
| [`wc_subs_list`](royazran--mcp-ads.tools-012.md#tool-wc_subs_list-91edf7b9) | Other product |
| [`wc_subs_get`](royazran--mcp-ads.tools-012.md#tool-wc_subs_get-173c7d5c) | Other product |
| [`wc_subs_create`](royazran--mcp-ads.tools-012.md#tool-wc_subs_create-fdaf3689) | Other product |
| [`wc_subs_update`](royazran--mcp-ads.tools-012.md#tool-wc_subs_update-554972d1) | Other product |
| [`wc_subs_cancel`](royazran--mcp-ads.tools-012.md#tool-wc_subs_cancel-c9c3a36f) | Other product |
| [`wc_subs_pause`](royazran--mcp-ads.tools-012.md#tool-wc_subs_pause-e4bbfc21) | Other product |
| [`wc_subs_resume`](royazran--mcp-ads.tools-012.md#tool-wc_subs_resume-81c065a0) | Other product |
| [`wc_bookings_list`](royazran--mcp-ads.tools-012.md#tool-wc_bookings_list-b1ac91b8) | Other product |
| [`wc_bookings_create`](royazran--mcp-ads.tools-012.md#tool-wc_bookings_create-90a43715) | Other product |
| [`wc_bookings_update_status`](royazran--mcp-ads.tools-012.md#tool-wc_bookings_update_status-a5f3a264) | Other product |
| [`wc_bookings_resources_list`](royazran--mcp-ads.tools-012.md#tool-wc_bookings_resources_list-cfcce749) | Other product |
| [`wc_memberships_plans_list`](royazran--mcp-ads.tools-012.md#tool-wc_memberships_plans_list-e28ef25f) | Other product |
| [`wc_memberships_grant_access`](royazran--mcp-ads.tools-012.md#tool-wc_memberships_grant_access-f7c61427) | Other product |
| [`wc_memberships_revoke_access`](royazran--mcp-ads.tools-012.md#tool-wc_memberships_revoke_access-c5572aa7) | Other product |
| [`wc_product_addons_get`](royazran--mcp-ads.tools-012.md#tool-wc_product_addons_get-0f0688aa) | Other product |
| [`wc_product_addons_set`](royazran--mcp-ads.tools-012.md#tool-wc_product_addons_set-94c79790) | Other product |
| [`wc_bundles_configure`](royazran--mcp-ads.tools-012.md#tool-wc_bundles_configure-e6ed5368) | Other product |
| [`wc_yith_wishlist_list`](royazran--mcp-ads.tools-012.md#tool-wc_yith_wishlist_list-54d2bb63) | Other product |
| [`wc_yith_brands_list`](royazran--mcp-ads.tools-012.md#tool-wc_yith_brands_list-f79ceb30) | Other product |
| [`wc_dokan_vendors_list`](royazran--mcp-ads.tools-012.md#tool-wc_dokan_vendors_list-90b35995) | Other product |
| [`wc_dokan_vendors_create`](royazran--mcp-ads.tools-012.md#tool-wc_dokan_vendors_create-90975d77) | Other product |
| [`wc_dokan_products_by_vendor`](royazran--mcp-ads.tools-012.md#tool-wc_dokan_products_by_vendor-fd175ad9) | Other product |
| [`wc_dokan_withdrawals_list`](royazran--mcp-ads.tools-012.md#tool-wc_dokan_withdrawals_list-a461c89a) | Other product |
| [`wc_dokan_commission_set`](royazran--mcp-ads.tools-012.md#tool-wc_dokan_commission_set-11fad487) | Other product |
| [`wc_store_get_cart`](royazran--mcp-ads.tools-012.md#tool-wc_store_get_cart-d020adbb) | Other product |
| [`wc_store_add_to_cart`](royazran--mcp-ads.tools-012.md#tool-wc_store_add_to_cart-bbc0a5f1) | Other product |
| [`wc_store_update_item`](royazran--mcp-ads.tools-012.md#tool-wc_store_update_item-ceb4e964) | Other product |
| [`wc_store_remove_item`](royazran--mcp-ads.tools-012.md#tool-wc_store_remove_item-4c6942cc) | Other product |
| [`wc_store_apply_coupon`](royazran--mcp-ads.tools-012.md#tool-wc_store_apply_coupon-42b68a3d) | Other product |
| [`wc_store_checkout`](royazran--mcp-ads.tools-012.md#tool-wc_store_checkout-086e4aa5) | Other product |
| [`woo_list_products`](royazran--mcp-ads.tools-012.md#tool-woo_list_products-b165d386) | Other product |
| [`woo_get_product`](royazran--mcp-ads.tools-012.md#tool-woo_get_product-ac230952) | Other product |
| [`woo_create_product`](royazran--mcp-ads.tools-012.md#tool-woo_create_product-4fcbde48) | Other product |
| [`woo_update_product`](royazran--mcp-ads.tools-012.md#tool-woo_update_product-a91ec78e) | Other product |
| [`woo_delete_product`](royazran--mcp-ads.tools-012.md#tool-woo_delete_product-e7ab0943) | Other product |
| [`woo_bulk_update_products`](royazran--mcp-ads.tools-012.md#tool-woo_bulk_update_products-51c8e873) | Other product |
| [`woo_get_product_variations`](royazran--mcp-ads.tools-012.md#tool-woo_get_product_variations-aaf77552) | Other product |
| [`woo_create_product_variation`](royazran--mcp-ads.tools-012.md#tool-woo_create_product_variation-4b2f531a) | Other product |
| [`woo_update_product_variation`](royazran--mcp-ads.tools-012.md#tool-woo_update_product_variation-95b947c2) | Other product |
| [`woo_list_product_categories`](royazran--mcp-ads.tools-012.md#tool-woo_list_product_categories-f6cdc19a) | Other product |
| [`woo_create_product_category`](royazran--mcp-ads.tools-012.md#tool-woo_create_product_category-7bf7643b) | Other product |
| [`woo_update_product_category`](royazran--mcp-ads.tools-012.md#tool-woo_update_product_category-39bef6d2) | Other product |
| [`woo_list_orders`](royazran--mcp-ads.tools-012.md#tool-woo_list_orders-9c4bf99a) | Other product |
| [`woo_get_order`](royazran--mcp-ads.tools-012.md#tool-woo_get_order-343a9b43) | Other product |
| [`woo_create_order`](royazran--mcp-ads.tools-012.md#tool-woo_create_order-25fd6ea7) | Other product |
| [`woo_update_order_status`](royazran--mcp-ads.tools-012.md#tool-woo_update_order_status-6a87590b) | Other product |
| [`woo_add_order_note`](royazran--mcp-ads.tools-012.md#tool-woo_add_order_note-e623d089) | Other product |
| [`woo_refund_order`](royazran--mcp-ads.tools-012.md#tool-woo_refund_order-9e547603) | Other product |
| [`woo_list_customers`](royazran--mcp-ads.tools-012.md#tool-woo_list_customers-000bf761) | Other product |
| [`woo_get_customer`](royazran--mcp-ads.tools-012.md#tool-woo_get_customer-32e0b5a2) | Other product |
| [`woo_create_customer`](royazran--mcp-ads.tools-012.md#tool-woo_create_customer-7609f171) | Other product |
| [`woo_update_customer`](royazran--mcp-ads.tools-012.md#tool-woo_update_customer-9ad2c994) | Other product |
| [`woo_list_coupons`](royazran--mcp-ads.tools-012.md#tool-woo_list_coupons-9da33ab8) | Other product |
| [`woo_create_coupon`](royazran--mcp-ads.tools-012.md#tool-woo_create_coupon-350d5e7e) | Other product |
| [`woo_update_coupon`](royazran--mcp-ads.tools-012.md#tool-woo_update_coupon-f39a4679) | Other product |
| [`woo_delete_coupon`](royazran--mcp-ads.tools-012.md#tool-woo_delete_coupon-56e8a8ef) | Other product |
| [`woo_get_sales_report`](royazran--mcp-ads.tools-012.md#tool-woo_get_sales_report-c3027f6a) | Other product |
| [`woo_get_top_sellers`](royazran--mcp-ads.tools-012.md#tool-woo_get_top_sellers-d8c6fe6e) | Other product |
| [`woo_get_store_settings`](royazran--mcp-ads.tools-012.md#tool-woo_get_store_settings-ff4abdfd) | Other product |
| [`woo_update_store_settings`](royazran--mcp-ads.tools-012.md#tool-woo_update_store_settings-379bb10f) | Other product |
| [`woo_list_shipping_zones`](royazran--mcp-ads.tools-012.md#tool-woo_list_shipping_zones-83b953dc) | Other product |
| [`woo_create_shipping_zone`](royazran--mcp-ads.tools-012.md#tool-woo_create_shipping_zone-43fe61f1) | Other product |
| [`woo_get_shipping_zone_methods`](royazran--mcp-ads.tools-012.md#tool-woo_get_shipping_zone_methods-636bfe52) | Other product |
| [`woo_list_payment_gateways`](royazran--mcp-ads.tools-012.md#tool-woo_list_payment_gateways-2d357596) | Other product |
| [`woo_update_payment_gateway`](royazran--mcp-ads.tools-012.md#tool-woo_update_payment_gateway-572904fe) | Other product |
| [`woo_list_product_attributes`](royazran--mcp-ads.tools-012.md#tool-woo_list_product_attributes-c7b0122f) | Other product |
| [`woo_create_product_attribute`](royazran--mcp-ads.tools-012.md#tool-woo_create_product_attribute-6ac1306f) | Other product |
| [`woo_get_attribute_terms`](royazran--mcp-ads.tools-012.md#tool-woo_get_attribute_terms-2337d577) | Other product |
| [`woo_create_attribute_term`](royazran--mcp-ads.tools-012.md#tool-woo_create_attribute_term-ea305165) | Other product |
| [`woo_list_tax_rates`](royazran--mcp-ads.tools-012.md#tool-woo_list_tax_rates-30bd271f) | Other product |
| [`woo_create_tax_rate`](royazran--mcp-ads.tools-012.md#tool-woo_create_tax_rate-fce05b40) | Other product |
| [`woo_list_product_tags`](royazran--mcp-ads.tools-012.md#tool-woo_list_product_tags-dc3eaa60) | Other product |
| [`woo_create_product_tag`](royazran--mcp-ads.tools-012.md#tool-woo_create_product_tag-71a25099) | Other product |
| [`woo_update_product_tag`](royazran--mcp-ads.tools-012.md#tool-woo_update_product_tag-e712a8e4) | Other product |
| [`woo_delete_product_tag`](royazran--mcp-ads.tools-012.md#tool-woo_delete_product_tag-2257e49e) | Other product |
| [`woo_get_product_tag`](royazran--mcp-ads.tools-012.md#tool-woo_get_product_tag-d2c63134) | Other product |
| [`woo_list_product_reviews`](royazran--mcp-ads.tools-012.md#tool-woo_list_product_reviews-bb78dab2) | Other product |
| [`woo_get_product_review`](royazran--mcp-ads.tools-012.md#tool-woo_get_product_review-39dcc418) | Other product |
| [`woo_create_product_review`](royazran--mcp-ads.tools-012.md#tool-woo_create_product_review-04bb7310) | Other product |
| [`woo_update_product_review`](royazran--mcp-ads.tools-012.md#tool-woo_update_product_review-3bc5f6b5) | Other product |
| [`woo_delete_product_review`](royazran--mcp-ads.tools-012.md#tool-woo_delete_product_review-1309bedb) | Other product |
| [`woo_delete_product_variation`](royazran--mcp-ads.tools-012.md#tool-woo_delete_product_variation-fccecfc5) | Other product |
| [`woo_bulk_create_variations`](royazran--mcp-ads.tools-012.md#tool-woo_bulk_create_variations-664e8b6a) | Other product |
| [`woo_bulk_update_variations`](royazran--mcp-ads.tools-012.md#tool-woo_bulk_update_variations-2befb298) | Other product |
| [`woo_set_product_sale_dates`](royazran--mcp-ads.tools-012.md#tool-woo_set_product_sale_dates-7f4e3dc0) | Other product |
| [`woo_set_product_purchase_note`](royazran--mcp-ads.tools-012.md#tool-woo_set_product_purchase_note-b373720f) | Other product |
| [`woo_set_product_upsells`](royazran--mcp-ads.tools-012.md#tool-woo_set_product_upsells-b5447b9e) | Other product |
| [`woo_set_product_crosssells`](royazran--mcp-ads.tools-012.md#tool-woo_set_product_crosssells-6d44e05e) | Other product |
| [`woo_bulk_set_product_status`](royazran--mcp-ads.tools-012.md#tool-woo_bulk_set_product_status-64ce295a) | Other product |
| [`woo_bulk_set_product_price`](royazran--mcp-ads.tools-012.md#tool-woo_bulk_set_product_price-fb2d68d0) | Other product |
| [`woo_bulk_set_product_stock`](royazran--mcp-ads.tools-012.md#tool-woo_bulk_set_product_stock-e3bdc57d) | Other product |
| [`woo_list_low_stock_products`](royazran--mcp-ads.tools-012.md#tool-woo_list_low_stock_products-bb05ff8c) | Other product |
| [`woo_list_out_of_stock_products`](royazran--mcp-ads.tools-012.md#tool-woo_list_out_of_stock_products-2ebfba67) | Other product |
| [`woo_list_products_on_sale`](royazran--mcp-ads.tools-012.md#tool-woo_list_products_on_sale-c1eb8d5e) | Other product |
| [`woo_list_featured_products`](royazran--mcp-ads.tools-012.md#tool-woo_list_featured_products-9fde2109) | Other product |
| [`woo_update_product_attribute`](royazran--mcp-ads.tools-012.md#tool-woo_update_product_attribute-e5153ec9) | Other product |
| [`woo_delete_product_attribute`](royazran--mcp-ads.tools-012.md#tool-woo_delete_product_attribute-96b5a058) | Other product |
| [`woo_update_attribute_term`](royazran--mcp-ads.tools-012.md#tool-woo_update_attribute_term-fb1ebf0e) | Other product |
| [`woo_delete_attribute_term`](royazran--mcp-ads.tools-012.md#tool-woo_delete_attribute_term-b031b435) | Other product |
| [`woo_delete_product_category`](royazran--mcp-ads.tools-012.md#tool-woo_delete_product_category-073eee98) | Other product |
| [`woo_get_product_category`](royazran--mcp-ads.tools-012.md#tool-woo_get_product_category-19a9a8f0) | Other product |
| [`woo_delete_customer`](royazran--mcp-ads.tools-012.md#tool-woo_delete_customer-89b99d0a) | Other product |
| [`woo_get_customer_orders`](royazran--mcp-ads.tools-012.md#tool-woo_get_customer_orders-0411e54d) | Other product |
| [`woo_get_customer_downloads`](royazran--mcp-ads.tools-012.md#tool-woo_get_customer_downloads-a3d2d309) | Other product |
| [`woo_bulk_update_customers`](royazran--mcp-ads.tools-012.md#tool-woo_bulk_update_customers-de1d31f9) | Other product |
| [`woo_update_shipping_zone`](royazran--mcp-ads.tools-012.md#tool-woo_update_shipping_zone-6f10f23e) | Other product |
| [`woo_delete_shipping_zone`](royazran--mcp-ads.tools-012.md#tool-woo_delete_shipping_zone-1e4154d1) | Other product |
| [`woo_get_shipping_zone`](royazran--mcp-ads.tools-012.md#tool-woo_get_shipping_zone-36ee6b08) | Other product |
| [`woo_add_shipping_method_to_zone`](royazran--mcp-ads.tools-012.md#tool-woo_add_shipping_method_to_zone-e9ae481c) | Other product |
| [`woo_update_shipping_zone_method`](royazran--mcp-ads.tools-012.md#tool-woo_update_shipping_zone_method-3b3b0c0a) | Other product |
| [`woo_delete_shipping_zone_method`](royazran--mcp-ads.tools-012.md#tool-woo_delete_shipping_zone_method-556f9607) | Other product |
| [`woo_get_shipping_zone_locations`](royazran--mcp-ads.tools-012.md#tool-woo_get_shipping_zone_locations-acbfeb32) | Other product |
| [`woo_update_shipping_zone_locations`](royazran--mcp-ads.tools-012.md#tool-woo_update_shipping_zone_locations-9d6ed74d) | Other product |
| [`woo_list_shipping_classes`](royazran--mcp-ads.tools-012.md#tool-woo_list_shipping_classes-9628ab26) | Other product |
| [`woo_create_shipping_class`](royazran--mcp-ads.tools-012.md#tool-woo_create_shipping_class-9c6f9ab9) | Other product |
| [`woo_update_shipping_class`](royazran--mcp-ads.tools-012.md#tool-woo_update_shipping_class-389ee963) | Other product |
| [`woo_delete_shipping_class`](royazran--mcp-ads.tools-012.md#tool-woo_delete_shipping_class-720732b6) | Other product |
| [`woo_update_tax_rate`](royazran--mcp-ads.tools-012.md#tool-woo_update_tax_rate-13dd37da) | Other product |
| [`woo_delete_tax_rate`](royazran--mcp-ads.tools-012.md#tool-woo_delete_tax_rate-168923bf) | Other product |
| [`woo_list_tax_classes`](royazran--mcp-ads.tools-012.md#tool-woo_list_tax_classes-95393a6c) | Other product |
| [`woo_create_tax_class`](royazran--mcp-ads.tools-012.md#tool-woo_create_tax_class-de017836) | Other product |
| [`woo_delete_tax_class`](royazran--mcp-ads.tools-012.md#tool-woo_delete_tax_class-2e1bbbe3) | Other product |
| [`woo_bulk_create_tax_rates`](royazran--mcp-ads.tools-012.md#tool-woo_bulk_create_tax_rates-e954652b) | Other product |
| [`woo_list_email_templates`](royazran--mcp-ads.tools-012.md#tool-woo_list_email_templates-c05c9033) | Other product |
| [`woo_get_email_template`](royazran--mcp-ads.tools-012.md#tool-woo_get_email_template-c144bb5f) | Other product |
| [`woo_update_email_template`](royazran--mcp-ads.tools-012.md#tool-woo_update_email_template-58238129) | Other product |
| [`woo_get_payment_gateway`](royazran--mcp-ads.tools-012.md#tool-woo_get_payment_gateway-fe45f07e) | Other product |
| [`woo_enable_payment_gateway`](royazran--mcp-ads.tools-012.md#tool-woo_enable_payment_gateway-1252fc35) | Other product |
| [`woo_disable_payment_gateway`](royazran--mcp-ads.tools-012.md#tool-woo_disable_payment_gateway-16bea026) | Other product |
| [`woo_get_all_settings`](royazran--mcp-ads.tools-012.md#tool-woo_get_all_settings-f94d24b5) | Other product |
| [`woo_get_setting_option`](royazran--mcp-ads.tools-012.md#tool-woo_get_setting_option-ad3a935a) | Other product |
| [`woo_update_setting_option`](royazran--mcp-ads.tools-012.md#tool-woo_update_setting_option-f158515d) | Other product |
| [`woo_update_currency_settings`](royazran--mcp-ads.tools-012.md#tool-woo_update_currency_settings-7e06e7de) | Other product |
| [`woo_update_products_settings`](royazran--mcp-ads.tools-012.md#tool-woo_update_products_settings-26b7b478) | Other product |
| [`woo_update_checkout_settings`](royazran--mcp-ads.tools-012.md#tool-woo_update_checkout_settings-52590f61) | Other product |
| [`woo_update_account_settings`](royazran--mcp-ads.tools-012.md#tool-woo_update_account_settings-5ce97028) | Other product |
| [`woo_get_coupon`](royazran--mcp-ads.tools-012.md#tool-woo_get_coupon-c25d886e) | Other product |
| [`woo_list_coupons_by_type`](royazran--mcp-ads.tools-012.md#tool-woo_list_coupons_by_type-e2587d71) | Other product |
| [`woo_bulk_delete_coupons`](royazran--mcp-ads.tools-012.md#tool-woo_bulk_delete_coupons-c15bdf17) | Other product |
| [`woo_check_coupon_usage`](royazran--mcp-ads.tools-012.md#tool-woo_check_coupon_usage-77961902) | Other product |
| [`woo_list_customer_downloads_all`](royazran--mcp-ads.tools-013.md#tool-woo_list_customer_downloads_all-e483b8fb) | Other product |
| [`woo_get_order_meta`](royazran--mcp-ads.tools-013.md#tool-woo_get_order_meta-47d685db) | Other product |
| [`woo_update_order_meta`](royazran--mcp-ads.tools-013.md#tool-woo_update_order_meta-efe83cb5) | Other product |
| [`woo_get_order_line_items`](royazran--mcp-ads.tools-013.md#tool-woo_get_order_line_items-30d84ee9) | Other product |
| [`woo_get_product_meta`](royazran--mcp-ads.tools-013.md#tool-woo_get_product_meta-b1dbfa7a) | Other product |
| [`woo_update_product_meta`](royazran--mcp-ads.tools-013.md#tool-woo_update_product_meta-298fc71f) | Other product |
| [`woo_get_store_health`](royazran--mcp-ads.tools-013.md#tool-woo_get_store_health-92d91b2d) | Other product |
| [`woo_get_store_info`](royazran--mcp-ads.tools-013.md#tool-woo_get_store_info-25ebbacf) | Other product |
| [`woo_analytics_overview`](royazran--mcp-ads.tools-013.md#tool-woo_analytics_overview-71b6199c) | Other product |
| [`woo_analytics_summary`](royazran--mcp-ads.tools-013.md#tool-woo_analytics_summary-d5030a2c) | Other product |
| [`woo_analytics_revenue`](royazran--mcp-ads.tools-013.md#tool-woo_analytics_revenue-6c349924) | Other product |
| [`woo_analytics_revenue_stats`](royazran--mcp-ads.tools-013.md#tool-woo_analytics_revenue_stats-ef49446e) | Other product |
| [`woo_analytics_revenue_by_day`](royazran--mcp-ads.tools-013.md#tool-woo_analytics_revenue_by_day-ba4b1601) | Other product |
| [`woo_analytics_revenue_by_month`](royazran--mcp-ads.tools-013.md#tool-woo_analytics_revenue_by_month-c40be6b3) | Other product |
| [`woo_analytics_orders`](royazran--mcp-ads.tools-013.md#tool-woo_analytics_orders-092ae568) | Other product |
| [`woo_analytics_orders_stats`](royazran--mcp-ads.tools-013.md#tool-woo_analytics_orders_stats-97569ab5) | Other product |
| [`woo_analytics_orders_by_status`](royazran--mcp-ads.tools-013.md#tool-woo_analytics_orders_by_status-58be0c05) | Other product |
| [`woo_analytics_products`](royazran--mcp-ads.tools-013.md#tool-woo_analytics_products-0d5f8ac7) | Other product |
| [`woo_analytics_products_stats`](royazran--mcp-ads.tools-013.md#tool-woo_analytics_products_stats-da797d06) | Other product |
| [`woo_analytics_top_products`](royazran--mcp-ads.tools-013.md#tool-woo_analytics_top_products-c9ed5517) | Other product |
| [`woo_analytics_categories`](royazran--mcp-ads.tools-013.md#tool-woo_analytics_categories-ab8e4683) | Other product |
| [`woo_analytics_categories_stats`](royazran--mcp-ads.tools-013.md#tool-woo_analytics_categories_stats-d133fb07) | Other product |
| [`woo_analytics_coupons`](royazran--mcp-ads.tools-013.md#tool-woo_analytics_coupons-444b2e77) | Other product |
| [`woo_analytics_coupons_stats`](royazran--mcp-ads.tools-013.md#tool-woo_analytics_coupons_stats-be9f03d8) | Other product |
| [`woo_analytics_customers`](royazran--mcp-ads.tools-013.md#tool-woo_analytics_customers-dc243d54) | Other product |
| [`woo_analytics_customers_stats`](royazran--mcp-ads.tools-013.md#tool-woo_analytics_customers_stats-1cdedcf3) | Other product |
| [`woo_analytics_customer_ltv`](royazran--mcp-ads.tools-013.md#tool-woo_analytics_customer_ltv-b39e919d) | Other product |
| [`woo_analytics_stock`](royazran--mcp-ads.tools-013.md#tool-woo_analytics_stock-903f8745) | Other product |
| [`woo_analytics_stock_summary`](royazran--mcp-ads.tools-013.md#tool-woo_analytics_stock_summary-db5bc838) | Other product |
| [`woo_analytics_taxes`](royazran--mcp-ads.tools-013.md#tool-woo_analytics_taxes-f2a3d665) | Other product |
| [`woo_analytics_taxes_stats`](royazran--mcp-ads.tools-013.md#tool-woo_analytics_taxes_stats-f59d13df) | Other product |
| [`woo_analytics_variations`](royazran--mcp-ads.tools-013.md#tool-woo_analytics_variations-b0419529) | Other product |
| [`woo_list_orders_by_date`](royazran--mcp-ads.tools-013.md#tool-woo_list_orders_by_date-533317a0) | Other product |
| [`woo_list_orders_by_status`](royazran--mcp-ads.tools-013.md#tool-woo_list_orders_by_status-f33b5947) | Other product |
| [`woo_list_orders_by_product`](royazran--mcp-ads.tools-013.md#tool-woo_list_orders_by_product-1e3b6a11) | Other product |
| [`woo_list_orders_by_customer`](royazran--mcp-ads.tools-013.md#tool-woo_list_orders_by_customer-f1e5fc5a) | Other product |
| [`woo_delete_order`](royazran--mcp-ads.tools-013.md#tool-woo_delete_order-1f7ffa94) | Other product |
| [`woo_bulk_update_orders`](royazran--mcp-ads.tools-013.md#tool-woo_bulk_update_orders-f028c992) | Other product |
| [`woo_get_order_notes`](royazran--mcp-ads.tools-013.md#tool-woo_get_order_notes-23f82bdf) | Other product |
| [`woo_delete_order_note`](royazran--mcp-ads.tools-013.md#tool-woo_delete_order_note-629f712b) | Other product |
| [`woo_get_order_refunds`](royazran--mcp-ads.tools-013.md#tool-woo_get_order_refunds-da1ead16) | Other product |
| [`woo_delete_order_refund`](royazran--mcp-ads.tools-013.md#tool-woo_delete_order_refund-f12245e8) | Other product |
| [`woo_update_order`](royazran--mcp-ads.tools-013.md#tool-woo_update_order-90bd853f) | Other product |
| [`woo_report_customers`](royazran--mcp-ads.tools-013.md#tool-woo_report_customers-15f8fd7a) | Other product |
| [`woo_report_categories`](royazran--mcp-ads.tools-013.md#tool-woo_report_categories-b990628f) | Other product |
| [`woo_report_coupons`](royazran--mcp-ads.tools-013.md#tool-woo_report_coupons-acf789c2) | Other product |
| [`woo_report_stock`](royazran--mcp-ads.tools-013.md#tool-woo_report_stock-838f69e5) | Other product |
| [`woo_report_reviews`](royazran--mcp-ads.tools-013.md#tool-woo_report_reviews-b0f99b53) | Other product |
| [`woo_get_system_status`](royazran--mcp-ads.tools-013.md#tool-woo_get_system_status-1bcb3916) | Other product |
| [`woo_get_system_status_tools`](royazran--mcp-ads.tools-013.md#tool-woo_get_system_status_tools-6fd74681) | Other product |
| [`woo_run_system_status_tool`](royazran--mcp-ads.tools-013.md#tool-woo_run_system_status_tool-2aeabf3c) | Other product |
| [`woo_list_webhooks`](royazran--mcp-ads.tools-013.md#tool-woo_list_webhooks-910145f0) | Other product |
| [`woo_create_webhook`](royazran--mcp-ads.tools-013.md#tool-woo_create_webhook-316e4b65) | Other product |
| [`woo_get_webhook`](royazran--mcp-ads.tools-013.md#tool-woo_get_webhook-db2cf30d) | Other product |
| [`woo_update_webhook`](royazran--mcp-ads.tools-013.md#tool-woo_update_webhook-120977d0) | Other product |
| [`woo_delete_webhook`](royazran--mcp-ads.tools-013.md#tool-woo_delete_webhook-834fc648) | Other product |
| [`woo_get_webhook_deliveries`](royazran--mcp-ads.tools-013.md#tool-woo_get_webhook_deliveries-9e1d0cdd) | Other product |
| [`woo_get_data_continents`](royazran--mcp-ads.tools-013.md#tool-woo_get_data_continents-25becde4) | Other product |
| [`woo_get_data_countries`](royazran--mcp-ads.tools-013.md#tool-woo_get_data_countries-1e2d4b32) | Other product |
| [`woo_get_data_currencies`](royazran--mcp-ads.tools-013.md#tool-woo_get_data_currencies-4a5f5296) | Other product |
| [`woo_get_current_currency`](royazran--mcp-ads.tools-013.md#tool-woo_get_current_currency-0fef113e) | Other product |
| [`wc_get_general_settings`](royazran--mcp-ads.tools-013.md#tool-wc_get_general_settings-f31ef3a3) | Other product |
| [`wc_set_store_address`](royazran--mcp-ads.tools-013.md#tool-wc_set_store_address-e7d43351) | Other product |
| [`wc_set_selling_locations`](royazran--mcp-ads.tools-013.md#tool-wc_set_selling_locations-9d10cc5b) | Other product |
| [`wc_set_currency_settings`](royazran--mcp-ads.tools-013.md#tool-wc_set_currency_settings-ee595ff4) | Other product |
| [`wc_set_tax_settings`](royazran--mcp-ads.tools-013.md#tool-wc_set_tax_settings-12abecb5) | Other product |
| [`wc_get_product_settings`](royazran--mcp-ads.tools-013.md#tool-wc_get_product_settings-a2538640) | Other product |
| [`wc_set_product_general_settings`](royazran--mcp-ads.tools-013.md#tool-wc_set_product_general_settings-38d6ab35) | Other product |
| [`wc_set_inventory_settings`](royazran--mcp-ads.tools-013.md#tool-wc_set_inventory_settings-5670ba73) | Other product |
| [`wc_set_downloadable_product_settings`](royazran--mcp-ads.tools-013.md#tool-wc_set_downloadable_product_settings-28448f80) | Other product |
| [`wc_get_shipping_settings`](royazran--mcp-ads.tools-013.md#tool-wc_get_shipping_settings-5835b4b0) | Other product |
| [`wc_set_shipping_options`](royazran--mcp-ads.tools-013.md#tool-wc_set_shipping_options-937bc3e4) | Other product |
| [`wc_list_shipping_zones`](royazran--mcp-ads.tools-013.md#tool-wc_list_shipping_zones-2fefb904) | Other product |
| [`wc_get_shipping_zone`](royazran--mcp-ads.tools-013.md#tool-wc_get_shipping_zone-0881cb8b) | Other product |
| [`wc_create_shipping_zone`](royazran--mcp-ads.tools-013.md#tool-wc_create_shipping_zone-3dfba9b6) | Other product |
| [`wc_update_shipping_zone`](royazran--mcp-ads.tools-013.md#tool-wc_update_shipping_zone-63d287c3) | Other product |
| [`wc_delete_shipping_zone`](royazran--mcp-ads.tools-013.md#tool-wc_delete_shipping_zone-451f6fa1) | Other product |
| [`wc_set_shipping_zone_locations`](royazran--mcp-ads.tools-013.md#tool-wc_set_shipping_zone_locations-0033f7b6) | Other product |
| [`wc_list_shipping_zone_methods`](royazran--mcp-ads.tools-013.md#tool-wc_list_shipping_zone_methods-39f97fd9) | Other product |
| [`wc_add_flat_rate_shipping`](royazran--mcp-ads.tools-013.md#tool-wc_add_flat_rate_shipping-a37ce267) | Other product |
| [`wc_update_flat_rate_shipping`](royazran--mcp-ads.tools-013.md#tool-wc_update_flat_rate_shipping-e7073b24) | Other product |
| [`wc_add_free_shipping`](royazran--mcp-ads.tools-013.md#tool-wc_add_free_shipping-a799eaef) | Other product |
| [`wc_update_free_shipping`](royazran--mcp-ads.tools-013.md#tool-wc_update_free_shipping-e906963d) | Other product |
| [`wc_add_local_pickup`](royazran--mcp-ads.tools-013.md#tool-wc_add_local_pickup-bdd29bbd) | Other product |
| [`wc_toggle_shipping_method`](royazran--mcp-ads.tools-013.md#tool-wc_toggle_shipping_method-cac4269d) | Other product |
| [`wc_delete_shipping_method`](royazran--mcp-ads.tools-013.md#tool-wc_delete_shipping_method-9ee71156) | Other product |
| [`wc_get_shipping_classes`](royazran--mcp-ads.tools-013.md#tool-wc_get_shipping_classes-13f32a46) | Other product |
| [`wc_create_shipping_class`](royazran--mcp-ads.tools-013.md#tool-wc_create_shipping_class-d3e70a67) | Other product |
| [`wc_update_shipping_class`](royazran--mcp-ads.tools-013.md#tool-wc_update_shipping_class-e24c0b5c) | Other product |
| [`wc_delete_shipping_class`](royazran--mcp-ads.tools-013.md#tool-wc_delete_shipping_class-6576aaa4) | Other product |
| [`wc_list_payment_gateways`](royazran--mcp-ads.tools-013.md#tool-wc_list_payment_gateways-48964a32) | Other product |
| [`wc_get_payment_gateway`](royazran--mcp-ads.tools-013.md#tool-wc_get_payment_gateway-605862ba) | Other product |
| [`wc_configure_bacs_gateway`](royazran--mcp-ads.tools-013.md#tool-wc_configure_bacs_gateway-3762097c) | Other product |
| [`wc_configure_cheque_gateway`](royazran--mcp-ads.tools-013.md#tool-wc_configure_cheque_gateway-ae25e500) | Other product |
| [`wc_configure_cod_gateway`](royazran--mcp-ads.tools-013.md#tool-wc_configure_cod_gateway-b8f97841) | Other product |
| [`wc_configure_paypal_gateway`](royazran--mcp-ads.tools-013.md#tool-wc_configure_paypal_gateway-b2d18713) | Other product |
| [`wc_reorder_payment_gateways`](royazran--mcp-ads.tools-013.md#tool-wc_reorder_payment_gateways-704bff6f) | Other product |
| [`wc_get_accounts_privacy_settings`](royazran--mcp-ads.tools-013.md#tool-wc_get_accounts_privacy_settings-fca75af8) | Other product |
| [`wc_set_accounts_settings`](royazran--mcp-ads.tools-013.md#tool-wc_set_accounts_settings-1963f7cf) | Other product |
| [`wc_set_privacy_policy_settings`](royazran--mcp-ads.tools-013.md#tool-wc_set_privacy_policy_settings-e4629b91) | Other product |
| [`wc_set_personal_data_retention`](royazran--mcp-ads.tools-013.md#tool-wc_set_personal_data_retention-45e98c34) | Other product |
| [`wc_get_email_settings`](royazran--mcp-ads.tools-013.md#tool-wc_get_email_settings-67962cfa) | Other product |
| [`wc_set_email_sender_settings`](royazran--mcp-ads.tools-013.md#tool-wc_set_email_sender_settings-d8686b16) | Other product |
| [`wc_set_email_template_styling`](royazran--mcp-ads.tools-013.md#tool-wc_set_email_template_styling-2f9b2a65) | Other product |
| [`wc_list_email_notifications`](royazran--mcp-ads.tools-013.md#tool-wc_list_email_notifications-1b681e94) | Other product |
| [`wc_get_email_notification`](royazran--mcp-ads.tools-013.md#tool-wc_get_email_notification-ef0b92b6) | Other product |
| [`wc_update_email_notification`](royazran--mcp-ads.tools-013.md#tool-wc_update_email_notification-f808ee57) | Other product |
| [`wc_get_advanced_settings`](royazran--mcp-ads.tools-013.md#tool-wc_get_advanced_settings-948abac9) | Other product |
| [`wc_set_page_assignments`](royazran--mcp-ads.tools-013.md#tool-wc_set_page_assignments-cdbb707f) | Other product |
| [`wc_set_checkout_settings`](royazran--mcp-ads.tools-013.md#tool-wc_set_checkout_settings-16ebe616) | Other product |
| [`wc_set_myaccount_endpoints`](royazran--mcp-ads.tools-013.md#tool-wc_set_myaccount_endpoints-9c849682) | Other product |
| [`wc_set_geolocation_settings`](royazran--mcp-ads.tools-013.md#tool-wc_set_geolocation_settings-0df62f57) | Other product |
| [`wc_list_rest_api_keys`](royazran--mcp-ads.tools-013.md#tool-wc_list_rest_api_keys-e301a799) | Other product |
| [`wc_create_rest_api_key`](royazran--mcp-ads.tools-013.md#tool-wc_create_rest_api_key-b01539c3) | Other product |
| [`wc_revoke_rest_api_key`](royazran--mcp-ads.tools-013.md#tool-wc_revoke_rest_api_key-12b0de16) | Other product |
| [`wc_set_legacy_api`](royazran--mcp-ads.tools-013.md#tool-wc_set_legacy_api-a1cd995f) | Other product |
| [`wc_set_catalog_display_settings`](royazran--mcp-ads.tools-013.md#tool-wc_set_catalog_display_settings-a69bf579) | Other product |
| [`wc_set_product_image_settings`](royazran--mcp-ads.tools-013.md#tool-wc_set_product_image_settings-448bf790) | Other product |
| [`wc_get_system_status_full`](royazran--mcp-ads.tools-013.md#tool-wc_get_system_status_full-a481d006) | Other product |
| [`wc_run_status_tool`](royazran--mcp-ads.tools-013.md#tool-wc_run_status_tool-69075859) | Other product |
| [`wc_list_status_tools`](royazran--mcp-ads.tools-013.md#tool-wc_list_status_tools-89eb0733) | Other product |
| [`wp_ab_detect_plugin`](royazran--mcp-ads.tools-013.md#tool-wp_ab_detect_plugin-f7d33cd6) | Other product |
| [`wp_ab_test_create`](royazran--mcp-ads.tools-013.md#tool-wp_ab_test_create-a5c49e2d) | Other product |
| [`wp_ab_test_list`](royazran--mcp-ads.tools-013.md#tool-wp_ab_test_list-bea27581) | Other product |
| [`wp_ab_test_get`](royazran--mcp-ads.tools-013.md#tool-wp_ab_test_get-7ece3bbf) | Other product |
| [`wp_ab_test_start`](royazran--mcp-ads.tools-013.md#tool-wp_ab_test_start-58ae647a) | Other product |
| [`wp_ab_test_stop`](royazran--mcp-ads.tools-013.md#tool-wp_ab_test_stop-0279e925) | Other product |
| [`wp_ab_test_winner_apply`](royazran--mcp-ads.tools-013.md#tool-wp_ab_test_winner_apply-328582d1) | Other product |
| [`wp_ab_variant_create`](royazran--mcp-ads.tools-013.md#tool-wp_ab_variant_create-fb2f1279) | Other product |
| [`wp_ab_goals_configure`](royazran--mcp-ads.tools-013.md#tool-wp_ab_goals_configure-8f3c69d8) | Other product |
| [`wp_ab_report_get`](royazran--mcp-ads.tools-013.md#tool-wp_ab_report_get-362a7570) | Other product |
| [`wp_list_comments`](royazran--mcp-ads.tools-013.md#tool-wp_list_comments-25406b1b) | Other product |
| [`wp_get_comment`](royazran--mcp-ads.tools-013.md#tool-wp_get_comment-5dc204c2) | Other product |
| [`wp_create_comment`](royazran--mcp-ads.tools-013.md#tool-wp_create_comment-85a3c38a) | Other product |
| [`wp_update_comment`](royazran--mcp-ads.tools-013.md#tool-wp_update_comment-68aefbb5) | Other product |
| [`wp_delete_comment`](royazran--mcp-ads.tools-013.md#tool-wp_delete_comment-97128ff9) | Other product |
| [`wp_approve_comment`](royazran--mcp-ads.tools-013.md#tool-wp_approve_comment-9446d59a) | Other product |
| [`wp_spam_comment`](royazran--mcp-ads.tools-013.md#tool-wp_spam_comment-768eaccd) | Other product |
| [`wp_reply_to_comment`](royazran--mcp-ads.tools-013.md#tool-wp_reply_to_comment-e7675ced) | Other product |
| [`wp_bulk_comment_action`](royazran--mcp-ads.tools-013.md#tool-wp_bulk_comment_action-438a3ab5) | Other product |
| [`wp_get_comment_counts`](royazran--mcp-ads.tools-013.md#tool-wp_get_comment_counts-95beb5c3) | Other product |
| [`wp_test_connection`](royazran--mcp-ads.tools-013.md#tool-wp_test_connection-506b480e) | Other product |
| [`wp_set_post_meta`](royazran--mcp-ads.tools-013.md#tool-wp_set_post_meta-01d65a62) | Other product |
| [`wp_bulk_set_post_meta`](royazran--mcp-ads.tools-013.md#tool-wp_bulk_set_post_meta-5695be86) | Other product |
| [`wp_get_user_meta`](royazran--mcp-ads.tools-013.md#tool-wp_get_user_meta-9766d878) | Other product |
| [`wp_set_user_meta`](royazran--mcp-ads.tools-013.md#tool-wp_set_user_meta-ff938dc2) | Other product |
| [`wp_get_term_meta`](royazran--mcp-ads.tools-013.md#tool-wp_get_term_meta-2ec24edf) | Other product |
| [`wp_set_term_meta`](royazran--mcp-ads.tools-013.md#tool-wp_set_term_meta-c17e7619) | Other product |
| [`wp_list_post_types`](royazran--mcp-ads.tools-013.md#tool-wp_list_post_types-c208ec09) | Other product |
| [`wp_get_post_type`](royazran--mcp-ads.tools-013.md#tool-wp_get_post_type-37d042e2) | Other product |
| [`cpt_list_posts`](royazran--mcp-ads.tools-014.md#tool-cpt_list_posts-8c618acd) | Other product |
| [`cpt_get_post`](royazran--mcp-ads.tools-014.md#tool-cpt_get_post-a39e66fa) | Other product |
| [`cpt_create_post`](royazran--mcp-ads.tools-014.md#tool-cpt_create_post-83bf58cc) | Other product |
| [`cpt_update_post`](royazran--mcp-ads.tools-014.md#tool-cpt_update_post-fc851023) | Other product |
| [`cpt_delete_post`](royazran--mcp-ads.tools-014.md#tool-cpt_delete_post-7f899054) | Other product |
| [`cpt_bulk_create_posts`](royazran--mcp-ads.tools-014.md#tool-cpt_bulk_create_posts-05dc0972) | Other product |
| [`wp_discover_cpt_endpoint`](royazran--mcp-ads.tools-014.md#tool-wp_discover_cpt_endpoint-98b3412a) | Other product |
| [`wp_list_post_statuses`](royazran--mcp-ads.tools-014.md#tool-wp_list_post_statuses-df549e5b) | Other product |
| [`wp_deploy_staging_to_production`](royazran--mcp-ads.tools-014.md#tool-wp_deploy_staging_to_production-4ff0c664) | Other product |
| [`wp_deploy_production_to_staging`](royazran--mcp-ads.tools-014.md#tool-wp_deploy_production_to_staging-dc766c72) | Other product |
| [`wp_deploy_git_status`](royazran--mcp-ads.tools-014.md#tool-wp_deploy_git_status-97a95d27) | Other product |
| [`wp_deploy_git_commit`](royazran--mcp-ads.tools-014.md#tool-wp_deploy_git_commit-55f11d89) | Other product |
| [`wp_deploy_git_push`](royazran--mcp-ads.tools-014.md#tool-wp_deploy_git_push-366006ce) | Other product |
| [`wp_deploy_git_pull`](royazran--mcp-ads.tools-014.md#tool-wp_deploy_git_pull-809ad8bb) | Other product |
| [`wp_deploy_git_log`](royazran--mcp-ads.tools-014.md#tool-wp_deploy_git_log-95cafc2d) | Other product |
| [`wp_deploy_create_staging`](royazran--mcp-ads.tools-014.md#tool-wp_deploy_create_staging-3f8c0383) | Other product |
| [`wp_deploy_compare_staging_prod`](royazran--mcp-ads.tools-014.md#tool-wp_deploy_compare_staging_prod-c464aeae) | Other product |
| [`wp_deploy_rollback`](royazran--mcp-ads.tools-014.md#tool-wp_deploy_rollback-726704b9) | Other product |
| [`wp_deploy_changelog_generate`](royazran--mcp-ads.tools-014.md#tool-wp_deploy_changelog_generate-0ed6bf57) | Other product |
| [`wp_deploy_pre_deploy_checklist`](royazran--mcp-ads.tools-014.md#tool-wp_deploy_pre_deploy_checklist-0cf75027) | Other product |
| [`wp_detect_form_plugin`](royazran--mcp-ads.tools-014.md#tool-wp_detect_form_plugin-f2993f35) | Other product |
| [`wp_embed_form_in_page`](royazran--mcp-ads.tools-014.md#tool-wp_embed_form_in_page-2243fa40) | Other product |
| [`wp_blocks_parse`](royazran--mcp-ads.tools-014.md#tool-wp_blocks_parse-84e48b98) | Other product |
| [`wp_blocks_serialize`](royazran--mcp-ads.tools-014.md#tool-wp_blocks_serialize-933c6b64) | Other product |
| [`wp_blocks_find`](royazran--mcp-ads.tools-014.md#tool-wp_blocks_find-23a8bb2b) | Other product |
| [`wp_blocks_insert`](royazran--mcp-ads.tools-014.md#tool-wp_blocks_insert-368f4276) | Other product |
| [`wp_blocks_update`](royazran--mcp-ads.tools-014.md#tool-wp_blocks_update-fc781697) | Other product |
| [`wp_blocks_remove`](royazran--mcp-ads.tools-014.md#tool-wp_blocks_remove-56fe8467) | Other product |
| [`wp_blocks_move`](royazran--mcp-ads.tools-014.md#tool-wp_blocks_move-b43974f8) | Other product |
| [`wp_blocks_replace`](royazran--mcp-ads.tools-014.md#tool-wp_blocks_replace-27bc9f22) | Other product |
| [`wp_blocks_wrap`](royazran--mcp-ads.tools-014.md#tool-wp_blocks_wrap-15343720) | Other product |
| [`wp_blocks_batch_update`](royazran--mcp-ads.tools-014.md#tool-wp_blocks_batch_update-84ada022) | Other product |
| [`wp_reusable_blocks_list`](royazran--mcp-ads.tools-014.md#tool-wp_reusable_blocks_list-1bce67c4) | Other product |
| [`wp_reusable_blocks_get`](royazran--mcp-ads.tools-014.md#tool-wp_reusable_blocks_get-90ea9ad0) | Other product |
| [`wp_reusable_blocks_create`](royazran--mcp-ads.tools-014.md#tool-wp_reusable_blocks_create-e7f43d8d) | Other product |
| [`wp_reusable_blocks_update`](royazran--mcp-ads.tools-014.md#tool-wp_reusable_blocks_update-41d42fe6) | Other product |
| [`wp_reusable_blocks_delete`](royazran--mcp-ads.tools-014.md#tool-wp_reusable_blocks_delete-5daed593) | Other product |
| [`wp_patterns_list`](royazran--mcp-ads.tools-014.md#tool-wp_patterns_list-5f0cfe0c) | Other product |
| [`wp_patterns_categories`](royazran--mcp-ads.tools-014.md#tool-wp_patterns_categories-9eefb048) | Other product |
| [`wp_patterns_apply_to_post`](royazran--mcp-ads.tools-014.md#tool-wp_patterns_apply_to_post-78554260) | Other product |
| [`wp_templates_list`](royazran--mcp-ads.tools-014.md#tool-wp_templates_list-fb0cb706) | Other product |
| [`wp_templates_get`](royazran--mcp-ads.tools-014.md#tool-wp_templates_get-cebd966a) | Other product |
| [`wp_templates_create`](royazran--mcp-ads.tools-014.md#tool-wp_templates_create-4829eea1) | Other product |
| [`wp_templates_update`](royazran--mcp-ads.tools-014.md#tool-wp_templates_update-ca425b7c) | Other product |
| [`wp_templates_delete`](royazran--mcp-ads.tools-014.md#tool-wp_templates_delete-461be3b9) | Other product |
| [`wp_template_parts_list`](royazran--mcp-ads.tools-014.md#tool-wp_template_parts_list-ac39f1c5) | Other product |
| [`wp_template_parts_get`](royazran--mcp-ads.tools-014.md#tool-wp_template_parts_get-e490ad7a) | Other product |
| [`wp_template_parts_create`](royazran--mcp-ads.tools-014.md#tool-wp_template_parts_create-dfbd2ddb) | Other product |
| [`wp_template_parts_update`](royazran--mcp-ads.tools-014.md#tool-wp_template_parts_update-66691932) | Other product |
| [`wp_global_styles_get`](royazran--mcp-ads.tools-014.md#tool-wp_global_styles_get-cec5068f) | Other product |
| [`wp_global_styles_update`](royazran--mcp-ads.tools-014.md#tool-wp_global_styles_update-fe1d05a4) | Other product |
| [`wp_global_styles_add_color`](royazran--mcp-ads.tools-014.md#tool-wp_global_styles_add_color-c60cc488) | Other product |
| [`wp_global_styles_add_font`](royazran--mcp-ads.tools-014.md#tool-wp_global_styles_add_font-6b3c4d26) | Other product |
| [`wp_global_styles_set_layout`](royazran--mcp-ads.tools-014.md#tool-wp_global_styles_set_layout-5ced74ed) | Other product |
| [`wp_navigation_list`](royazran--mcp-ads.tools-014.md#tool-wp_navigation_list-b3d545c5) | Other product |
| [`wp_navigation_create`](royazran--mcp-ads.tools-014.md#tool-wp_navigation_create-148ec880) | Other product |
| [`wp_navigation_update`](royazran--mcp-ads.tools-014.md#tool-wp_navigation_update-61554256) | Other product |
| [`wp_hosting_detect_provider`](royazran--mcp-ads.tools-014.md#tool-wp_hosting_detect_provider-014273ef) | Other product |
| [`wp_hosting_cloudways_apps_list`](royazran--mcp-ads.tools-014.md#tool-wp_hosting_cloudways_apps_list-d42eab1e) | Other product |
| [`wp_hosting_cloudways_clear_cache`](royazran--mcp-ads.tools-014.md#tool-wp_hosting_cloudways_clear_cache-bc577d2d) | Other product |
| [`wp_hosting_cloudways_staging_create`](royazran--mcp-ads.tools-014.md#tool-wp_hosting_cloudways_staging_create-403052be) | Other product |
| [`wp_hosting_siteground_tools`](royazran--mcp-ads.tools-014.md#tool-wp_hosting_siteground_tools-84d314fd) | Other product |
| [`wp_hosting_siteground_staging`](royazran--mcp-ads.tools-014.md#tool-wp_hosting_siteground_staging-73236631) | Other product |
| [`wp_hosting_wpengine_purge_cache`](royazran--mcp-ads.tools-014.md#tool-wp_hosting_wpengine_purge_cache-cfb4f104) | Other product |
| [`wp_hosting_wpengine_environments_list`](royazran--mcp-ads.tools-014.md#tool-wp_hosting_wpengine_environments_list-48649688) | Other product |
| [`wp_hosting_kinsta_purge_cache`](royazran--mcp-ads.tools-014.md#tool-wp_hosting_kinsta_purge_cache-a3e2cdce) | Other product |
| [`wp_hosting_runcloud_apps_list`](royazran--mcp-ads.tools-014.md#tool-wp_hosting_runcloud_apps_list-34ba881c) | Other product |
| [`wp_hosting_server_info`](royazran--mcp-ads.tools-014.md#tool-wp_hosting_server_info-b6169d55) | Other product |
| [`wp_hosting_php_version_check`](royazran--mcp-ads.tools-014.md#tool-wp_hosting_php_version_check-9e30117d) | Other product |
| [`lms_detect_plugin`](royazran--mcp-ads.tools-014.md#tool-lms_detect_plugin-864c1ff2) | Other product |
| [`lms_courses_list_universal`](royazran--mcp-ads.tools-014.md#tool-lms_courses_list_universal-62ad5c4f) | Other product |
| [`lms_enroll_universal`](royazran--mcp-ads.tools-014.md#tool-lms_enroll_universal-6b26de0a) | Other product |
| [`wp_site_health_check`](royazran--mcp-ads.tools-014.md#tool-wp_site_health_check-453e09ea) | Other product |
| [`wp_get_health_tests`](royazran--mcp-ads.tools-014.md#tool-wp_get_health_tests-fd9c08c8) | Other product |
| [`wp_clear_cache`](royazran--mcp-ads.tools-014.md#tool-wp_clear_cache-e71fd546) | Other product |
| [`wp_delete_expired_transients`](royazran--mcp-ads.tools-014.md#tool-wp_delete_expired_transients-c76750aa) | Other product |
| [`wp_check_core_updates`](royazran--mcp-ads.tools-014.md#tool-wp_check_core_updates-47e4965d) | Other product |
| [`wp_get_update_info`](royazran--mcp-ads.tools-014.md#tool-wp_get_update_info-963df9ba) | Other product |
| [`wp_flush_rewrite_rules`](royazran--mcp-ads.tools-014.md#tool-wp_flush_rewrite_rules-2aa85324) | Other product |
| [`wp_get_cron_jobs`](royazran--mcp-ads.tools-014.md#tool-wp_get_cron_jobs-b9f4cc81) | Other product |
| [`wp_delete_cron_job`](royazran--mcp-ads.tools-014.md#tool-wp_delete_cron_job-7e58febc) | Other product |
| [`wp_get_debug_log`](royazran--mcp-ads.tools-014.md#tool-wp_get_debug_log-94d0f393) | Other product |
| [`wp_enable_maintenance_mode`](royazran--mcp-ads.tools-014.md#tool-wp_enable_maintenance_mode-ae63bf75) | Other product |
| [`wp_disable_maintenance_mode`](royazran--mcp-ads.tools-014.md#tool-wp_disable_maintenance_mode-15d22425) | Other product |
| [`wp_get_system_info`](royazran--mcp-ads.tools-014.md#tool-wp_get_system_info-40260060) | Other product |
| [`wp_regenerate_thumbnails`](royazran--mcp-ads.tools-014.md#tool-wp_regenerate_thumbnails-48edb295) | Other product |
| [`wp_optimize_images`](royazran--mcp-ads.tools-014.md#tool-wp_optimize_images-c49a6056) | Other product |
| [`wp_export_content`](royazran--mcp-ads.tools-014.md#tool-wp_export_content-b29ac392) | Other product |
| [`wp_search_replace_content`](royazran--mcp-ads.tools-014.md#tool-wp_search_replace_content-3630ab6f) | Other product |
| [`wp_get_error_log`](royazran--mcp-ads.tools-014.md#tool-wp_get_error_log-e08c6c6f) | Other product |
| [`wp_list_media`](royazran--mcp-ads.tools-014.md#tool-wp_list_media-b66cd62e) | Other product |
| [`wp_get_media`](royazran--mcp-ads.tools-014.md#tool-wp_get_media-46722984) | Other product |
| [`wp_upload_media_from_url`](royazran--mcp-ads.tools-014.md#tool-wp_upload_media_from_url-abd51a11) | Other product |
| [`wp_update_media`](royazran--mcp-ads.tools-014.md#tool-wp_update_media-50cb9455) | Other product |
| [`wp_delete_media`](royazran--mcp-ads.tools-014.md#tool-wp_delete_media-cbbe2cd6) | Other product |
| [`wp_set_featured_image`](royazran--mcp-ads.tools-014.md#tool-wp_set_featured_image-2881d78e) | Other product |
| [`wp_remove_featured_image`](royazran--mcp-ads.tools-014.md#tool-wp_remove_featured_image-17a4bdb2) | Other product |
| [`wp_get_media_url`](royazran--mcp-ads.tools-014.md#tool-wp_get_media_url-55b55c00) | Other product |
| [`wp_bulk_upload_media`](royazran--mcp-ads.tools-014.md#tool-wp_bulk_upload_media-7d0615a4) | Other product |
| [`wp_upload_media_base64`](royazran--mcp-ads.tools-014.md#tool-wp_upload_media_base64-130a2cad) | Other product |
| [`membership_detect_plugin`](royazran--mcp-ads.tools-014.md#tool-membership_detect_plugin-cbcc862e) | Other product |
| [`wp_list_menus`](royazran--mcp-ads.tools-014.md#tool-wp_list_menus-c658d5a3) | Other product |
| [`wp_get_menu`](royazran--mcp-ads.tools-014.md#tool-wp_get_menu-36c2f55f) | Other product |
| [`wp_create_menu`](royazran--mcp-ads.tools-014.md#tool-wp_create_menu-8ce4e06a) | Other product |
| [`wp_update_menu`](royazran--mcp-ads.tools-014.md#tool-wp_update_menu-5256d26b) | Other product |
| [`wp_delete_menu`](royazran--mcp-ads.tools-014.md#tool-wp_delete_menu-21bcdce2) | Other product |
| [`wp_list_menu_items`](royazran--mcp-ads.tools-014.md#tool-wp_list_menu_items-6fde3d8e) | Other product |
| [`wp_add_menu_item`](royazran--mcp-ads.tools-014.md#tool-wp_add_menu_item-7d77b9b6) | Other product |
| [`wp_update_menu_item`](royazran--mcp-ads.tools-014.md#tool-wp_update_menu_item-364150c7) | Other product |
| [`wp_remove_menu_item`](royazran--mcp-ads.tools-014.md#tool-wp_remove_menu_item-92386b67) | Other product |
| [`wp_assign_menu_to_location`](royazran--mcp-ads.tools-014.md#tool-wp_assign_menu_to_location-8abd6ef3) | Other product |
| [`wp_list_menu_locations`](royazran--mcp-ads.tools-014.md#tool-wp_list_menu_locations-6aaec03e) | Other product |
| [`wp_get_menu_by_location`](royazran--mcp-ads.tools-014.md#tool-wp_get_menu_by_location-074e7561) | Other product |
| [`wp_build_menu`](royazran--mcp-ads.tools-014.md#tool-wp_build_menu-aa4d8620) | Other product |
| [`multilingual_detect_plugin`](royazran--mcp-ads.tools-014.md#tool-multilingual_detect_plugin-53c40e7c) | Other product |
| [`translate_text`](royazran--mcp-ads.tools-014.md#tool-translate_text-0fbffe3d) | Other product |
| [`translate_bulk_posts`](royazran--mcp-ads.tools-014.md#tool-translate_bulk_posts-581fd54d) | Other product |
| [`translate_detect_language`](royazran--mcp-ads.tools-014.md#tool-translate_detect_language-71eafbf9) | Other product |
| [`wp_get_option`](royazran--mcp-ads.tools-014.md#tool-wp_get_option-724a64a3) | Other product |
| [`wp_set_option`](royazran--mcp-ads.tools-014.md#tool-wp_set_option-dfd6d67f) | Other product |
| [`wp_get_site_settings`](royazran--mcp-ads.tools-014.md#tool-wp_get_site_settings-549a7f6d) | Other product |
| [`wp_update_settings`](royazran--mcp-ads.tools-014.md#tool-wp_update_settings-31f6ddaf) | Other product |
| [`wp_get_reading_settings`](royazran--mcp-ads.tools-014.md#tool-wp_get_reading_settings-5964a408) | Other product |
| [`wp_configure_homepage`](royazran--mcp-ads.tools-014.md#tool-wp_configure_homepage-dee77c07) | Other product |
| [`wp_get_permalink_structure`](royazran--mcp-ads.tools-014.md#tool-wp_get_permalink_structure-136ffb98) | Other product |
| [`wp_set_permalink_structure`](royazran--mcp-ads.tools-014.md#tool-wp_set_permalink_structure-7eb2b5b0) | Other product |
| [`wp_get_discussion_settings`](royazran--mcp-ads.tools-014.md#tool-wp_get_discussion_settings-4cca75ec) | Other product |
| [`wp_get_media_settings`](royazran--mcp-ads.tools-014.md#tool-wp_get_media_settings-e3cd8a95) | Other product |
| [`wp_update_media_sizes`](royazran--mcp-ads.tools-014.md#tool-wp_update_media_sizes-3b6c549d) | Other product |
| [`wp_get_woocommerce_settings`](royazran--mcp-ads.tools-014.md#tool-wp_get_woocommerce_settings-c82a36e3) | Other product |
| [`wp_update_woocommerce_setting`](royazran--mcp-ads.tools-014.md#tool-wp_update_woocommerce_setting-2f5533c4) | Other product |
| [`wp_bricks_get_data`](royazran--mcp-ads.tools-014.md#tool-wp_bricks_get_data-f57269a7) | Other product |
| [`wp_bricks_set_data`](royazran--mcp-ads.tools-014.md#tool-wp_bricks_set_data-430be035) | Other product |
| [`wp_bricks_templates_list`](royazran--mcp-ads.tools-014.md#tool-wp_bricks_templates_list-177fcdd2) | Other product |
| [`wp_bricks_templates_import`](royazran--mcp-ads.tools-014.md#tool-wp_bricks_templates_import-10a23457) | Other product |
| [`wp_bricks_global_settings`](royazran--mcp-ads.tools-014.md#tool-wp_bricks_global_settings-d03060ac) | Other product |
| [`wp_breakdance_get_data`](royazran--mcp-ads.tools-014.md#tool-wp_breakdance_get_data-018c84a9) | Other product |
| [`wp_breakdance_set_data`](royazran--mcp-ads.tools-014.md#tool-wp_breakdance_set_data-69cf444c) | Other product |
| [`wp_breakdance_templates_list`](royazran--mcp-ads.tools-014.md#tool-wp_breakdance_templates_list-91f04fca) | Other product |
| [`wp_divi_get_data`](royazran--mcp-ads.tools-014.md#tool-wp_divi_get_data-db172e10) | Other product |
| [`wp_divi_set_data`](royazran--mcp-ads.tools-014.md#tool-wp_divi_set_data-9e9a127f) | Other product |
| [`wp_divi_theme_options_get`](royazran--mcp-ads.tools-014.md#tool-wp_divi_theme_options_get-138c3235) | Other product |
| [`wp_divi_theme_options_set`](royazran--mcp-ads.tools-014.md#tool-wp_divi_theme_options_set-f2762eb9) | Other product |
| [`wp_beaver_get_data`](royazran--mcp-ads.tools-014.md#tool-wp_beaver_get_data-5efb613c) | Other product |
| [`wp_beaver_set_data`](royazran--mcp-ads.tools-014.md#tool-wp_beaver_set_data-88ca4234) | Other product |
| [`wp_beaver_templates_list`](royazran--mcp-ads.tools-014.md#tool-wp_beaver_templates_list-58134732) | Other product |
| [`wp_oxygen_get_data`](royazran--mcp-ads.tools-014.md#tool-wp_oxygen_get_data-cb3f2636) | Other product |
| [`wp_oxygen_set_data`](royazran--mcp-ads.tools-014.md#tool-wp_oxygen_set_data-ef7b34cf) | Other product |
| [`wp_page_builder_detect`](royazran--mcp-ads.tools-014.md#tool-wp_page_builder_detect-8bd79b7c) | Other product |
| [`wp_wpbakery_get_data`](royazran--mcp-ads.tools-014.md#tool-wp_wpbakery_get_data-da32dbfb) | Other product |
| [`wp_wpbakery_set_data`](royazran--mcp-ads.tools-015.md#tool-wp_wpbakery_set_data-8d706a03) | Other product |
| [`wp_list_pages`](royazran--mcp-ads.tools-015.md#tool-wp_list_pages-a2e7e4a3) | Other product |
| [`wp_get_page`](royazran--mcp-ads.tools-015.md#tool-wp_get_page-a90822f8) | Other product |
| [`wp_create_page`](royazran--mcp-ads.tools-015.md#tool-wp_create_page-eee1e569) | Other product |
| [`wp_update_page`](royazran--mcp-ads.tools-015.md#tool-wp_update_page-25e87d1b) | Other product |
| [`wp_delete_page`](royazran--mcp-ads.tools-015.md#tool-wp_delete_page-d20c2edd) | Other product |
| [`wp_set_homepage`](royazran--mcp-ads.tools-015.md#tool-wp_set_homepage-1a5f7550) | Other product |
| [`wp_get_page_hierarchy`](royazran--mcp-ads.tools-015.md#tool-wp_get_page_hierarchy-c510101c) | Other product |
| [`wp_create_landing_page`](royazran--mcp-ads.tools-015.md#tool-wp_create_landing_page-1265c08f) | Other product |
| [`wp_get_page_templates`](royazran--mcp-ads.tools-015.md#tool-wp_get_page_templates-19b26f9f) | Other product |
| [`wp_duplicate_page`](royazran--mcp-ads.tools-015.md#tool-wp_duplicate_page-6cdea8a6) | Other product |
| [`wp_get_page_by_slug`](royazran--mcp-ads.tools-015.md#tool-wp_get_page_by_slug-9a1ec9ac) | Other product |
| [`wp_set_page_template`](royazran--mcp-ads.tools-015.md#tool-wp_set_page_template-04a8a081) | Other product |
| [`wp_payments_gateways_list`](royazran--mcp-ads.tools-015.md#tool-wp_payments_gateways_list-7eb815a8) | Other product |
| [`wp_payments_gateway_get`](royazran--mcp-ads.tools-015.md#tool-wp_payments_gateway_get-77251ad9) | Other product |
| [`wp_payments_gateway_update`](royazran--mcp-ads.tools-015.md#tool-wp_payments_gateway_update-f6d76d7e) | Other product |
| [`wp_payments_stripe_configure`](royazran--mcp-ads.tools-015.md#tool-wp_payments_stripe_configure-be644240) | Other product |
| [`wp_payments_paypal_configure`](royazran--mcp-ads.tools-015.md#tool-wp_payments_paypal_configure-65feff57) | Other product |
| [`wp_payments_cardcom_configure`](royazran--mcp-ads.tools-015.md#tool-wp_payments_cardcom_configure-5223d3ce) | Other product |
| [`wp_payments_tranzila_configure`](royazran--mcp-ads.tools-015.md#tool-wp_payments_tranzila_configure-e0f34a44) | Other product |
| [`wp_payments_icredit_configure`](royazran--mcp-ads.tools-015.md#tool-wp_payments_icredit_configure-4eac6b08) | Other product |
| [`wp_payments_pelecard_configure`](royazran--mcp-ads.tools-015.md#tool-wp_payments_pelecard_configure-eedc2e36) | Other product |
| [`wp_payments_meshulam_configure`](royazran--mcp-ads.tools-015.md#tool-wp_payments_meshulam_configure-903567a6) | Other product |
| [`wp_payments_payplus_configure`](royazran--mcp-ads.tools-015.md#tool-wp_payments_payplus_configure-1fa288bf) | Other product |
| [`wp_payments_yaad_sarig_configure`](royazran--mcp-ads.tools-015.md#tool-wp_payments_yaad_sarig_configure-54203309) | Other product |
| [`wp_payments_max_configure`](royazran--mcp-ads.tools-015.md#tool-wp_payments_max_configure-8a89c57b) | Other product |
| [`wp_payments_bit_configure`](royazran--mcp-ads.tools-015.md#tool-wp_payments_bit_configure-b5d10e26) | Other product |
| [`wp_shipping_israel_post_configure`](royazran--mcp-ads.tools-015.md#tool-wp_shipping_israel_post_configure-14096fc2) | Other product |
| [`wp_shipping_chita_configure`](royazran--mcp-ads.tools-015.md#tool-wp_shipping_chita_configure-82e3dedf) | Other product |
| [`wp_shipping_boxit_configure`](royazran--mcp-ads.tools-015.md#tool-wp_shipping_boxit_configure-d5d024fb) | Other product |
| [`wp_shipping_hfd_configure`](royazran--mcp-ads.tools-015.md#tool-wp_shipping_hfd_configure-b0745e15) | Other product |
| [`wp_shipping_baldar_configure`](royazran--mcp-ads.tools-015.md#tool-wp_shipping_baldar_configure-6894cc9b) | Other product |
| [`wp_accounting_greeninvoice_configure`](royazran--mcp-ads.tools-015.md#tool-wp_accounting_greeninvoice_configure-34787cf9) | Other product |
| [`wp_accounting_morning_configure`](royazran--mcp-ads.tools-015.md#tool-wp_accounting_morning_configure-0a3cedfb) | Other product |
| [`wp_accounting_hashavshevet_configure`](royazran--mcp-ads.tools-015.md#tool-wp_accounting_hashavshevet_configure-9d2fdf9e) | Other product |
| [`wp_accounting_ezcount_configure`](royazran--mcp-ads.tools-015.md#tool-wp_accounting_ezcount_configure-e59744c1) | Other product |
| [`wp_accounting_rivhit_configure`](royazran--mcp-ads.tools-015.md#tool-wp_accounting_rivhit_configure-e2e0d960) | Other product |
| [`wp_clear_all_caches`](royazran--mcp-ads.tools-015.md#tool-wp_clear_all_caches-eefaecad) | Other product |
| [`wp_clear_elementor_cache`](royazran--mcp-ads.tools-015.md#tool-wp_clear_elementor_cache-bf56ec2e) | Other product |
| [`wp_clear_wp_rocket_cache`](royazran--mcp-ads.tools-015.md#tool-wp_clear_wp_rocket_cache-855cf178) | Other product |
| [`wp_clear_w3tc_cache`](royazran--mcp-ads.tools-015.md#tool-wp_clear_w3tc_cache-e8ad9852) | Other product |
| [`wp_clear_litespeed_cache`](royazran--mcp-ads.tools-015.md#tool-wp_clear_litespeed_cache-1582c839) | Other product |
| [`wp_clear_object_cache`](royazran--mcp-ads.tools-015.md#tool-wp_clear_object_cache-39f5cebf) | Other product |
| [`wp_get_database_size`](royazran--mcp-ads.tools-015.md#tool-wp_get_database_size-1b721470) | Other product |
| [`wp_get_autoloaded_options_size`](royazran--mcp-ads.tools-015.md#tool-wp_get_autoloaded_options_size-3f95e185) | Other product |
| [`wp_cleanup_post_revisions`](royazran--mcp-ads.tools-015.md#tool-wp_cleanup_post_revisions-4dd8aa44) | Other product |
| [`wp_cleanup_spam_comments`](royazran--mcp-ads.tools-015.md#tool-wp_cleanup_spam_comments-701620d6) | Other product |
| [`wp_get_media_without_alt`](royazran--mcp-ads.tools-015.md#tool-wp_get_media_without_alt-81331b9e) | Other product |
| [`wp_get_large_images`](royazran--mcp-ads.tools-015.md#tool-wp_get_large_images-d889683c) | Other product |
| [`wp_enable_lazy_loading`](royazran--mcp-ads.tools-015.md#tool-wp_enable_lazy_loading-187671a5) | Other product |
| [`wp_configure_cdn`](royazran--mcp-ads.tools-015.md#tool-wp_configure_cdn-80923003) | Other product |
| [`wp_optimize_database`](royazran--mcp-ads.tools-015.md#tool-wp_optimize_database-814ab865) | Other product |
| [`wp_get_slow_queries`](royazran--mcp-ads.tools-015.md#tool-wp_get_slow_queries-bd8c41bb) | Other product |
| [`wp_get_cache_config`](royazran--mcp-ads.tools-015.md#tool-wp_get_cache_config-6f2b9980) | Other product |
| [`wp_enable_browser_caching`](royazran--mcp-ads.tools-015.md#tool-wp_enable_browser_caching-75f66de6) | Other product |
| [`wp_enable_gzip_compression`](royazran--mcp-ads.tools-015.md#tool-wp_enable_gzip_compression-f218ebea) | Other product |
| [`wp_elementor_performance_settings`](royazran--mcp-ads.tools-015.md#tool-wp_elementor_performance_settings-9332d57a) | Other product |
| [`wp_get_minification_status`](royazran--mcp-ads.tools-015.md#tool-wp_get_minification_status-621ccb26) | Other product |
| [`wp_configure_wp_rocket`](royazran--mcp-ads.tools-015.md#tool-wp_configure_wp_rocket-a460789f) | Other product |
| [`wp_list_plugins`](royazran--mcp-ads.tools-015.md#tool-wp_list_plugins-a3044589) | Other product |
| [`wp_get_plugin`](royazran--mcp-ads.tools-015.md#tool-wp_get_plugin-908544c3) | Other product |
| [`wp_activate_plugin`](royazran--mcp-ads.tools-015.md#tool-wp_activate_plugin-06314dc0) | Other product |
| [`wp_deactivate_plugin`](royazran--mcp-ads.tools-015.md#tool-wp_deactivate_plugin-d63659ce) | Other product |
| [`wp_install_plugin`](royazran--mcp-ads.tools-015.md#tool-wp_install_plugin-22438c32) | Other product |
| [`wp_delete_plugin`](royazran--mcp-ads.tools-015.md#tool-wp_delete_plugin-de42a1b3) | Other product |
| [`wp_update_plugin`](royazran--mcp-ads.tools-015.md#tool-wp_update_plugin-a65a0008) | Other product |
| [`wp_check_plugin_updates`](royazran--mcp-ads.tools-015.md#tool-wp_check_plugin_updates-8d527edc) | Other product |
| [`wp_bulk_activate_plugins`](royazran--mcp-ads.tools-015.md#tool-wp_bulk_activate_plugins-6be88bcb) | Other product |
| [`wp_bulk_deactivate_plugins`](royazran--mcp-ads.tools-015.md#tool-wp_bulk_deactivate_plugins-a4437d9e) | Other product |
| [`wp_get_plugin_option`](royazran--mcp-ads.tools-015.md#tool-wp_get_plugin_option-eb259b8e) | Other product |
| [`wp_update_plugin_option`](royazran--mcp-ads.tools-015.md#tool-wp_update_plugin_option-691dd9a7) | Other product |
| [`wp_popup_detect_plugin`](royazran--mcp-ads.tools-015.md#tool-wp_popup_detect_plugin-94728043) | Other product |
| [`wp_popup_list`](royazran--mcp-ads.tools-015.md#tool-wp_popup_list-5ca9cf73) | Other product |
| [`wp_popup_create`](royazran--mcp-ads.tools-015.md#tool-wp_popup_create-eb2fbfd6) | Other product |
| [`wp_popup_update`](royazran--mcp-ads.tools-015.md#tool-wp_popup_update-26b17fd9) | Other product |
| [`wp_popup_delete`](royazran--mcp-ads.tools-015.md#tool-wp_popup_delete-8504a887) | Other product |
| [`wp_popup_set_trigger`](royazran--mcp-ads.tools-015.md#tool-wp_popup_set_trigger-d88beaec) | Other product |
| [`wp_popup_set_display_rules`](royazran--mcp-ads.tools-015.md#tool-wp_popup_set_display_rules-5cd65861) | Other product |
| [`wp_popup_set_content`](royazran--mcp-ads.tools-015.md#tool-wp_popup_set_content-833e5b92) | Other product |
| [`wp_popup_activate`](royazran--mcp-ads.tools-015.md#tool-wp_popup_activate-33dca714) | Other product |
| [`wp_popup_deactivate`](royazran--mcp-ads.tools-015.md#tool-wp_popup_deactivate-dd86540b) | Other product |
| [`wp_popup_analytics_get`](royazran--mcp-ads.tools-015.md#tool-wp_popup_analytics_get-5a009bca) | Other product |
| [`wp_lead_form_create`](royazran--mcp-ads.tools-015.md#tool-wp_lead_form_create-be1b31d5) | Other product |
| [`wp_lead_notification_configure`](royazran--mcp-ads.tools-015.md#tool-wp_lead_notification_configure-53b9fef3) | Other product |
| [`wp_lead_export`](royazran--mcp-ads.tools-015.md#tool-wp_lead_export-96c82c2b) | Other product |
| [`wp_lead_integrate_crm`](royazran--mcp-ads.tools-015.md#tool-wp_lead_integrate_crm-09cd0655) | Other product |
| [`wp_list_posts`](royazran--mcp-ads.tools-015.md#tool-wp_list_posts-1ed9b047) | Other product |
| [`wp_get_post`](royazran--mcp-ads.tools-015.md#tool-wp_get_post-0f417ded) | Other product |
| [`wp_create_post`](royazran--mcp-ads.tools-015.md#tool-wp_create_post-9fed4c77) | Other product |
| [`wp_update_post`](royazran--mcp-ads.tools-015.md#tool-wp_update_post-48321261) | Other product |
| [`wp_delete_post`](royazran--mcp-ads.tools-015.md#tool-wp_delete_post-c8964f35) | Other product |
| [`wp_publish_post`](royazran--mcp-ads.tools-015.md#tool-wp_publish_post-8b4ca81c) | Other product |
| [`wp_schedule_post`](royazran--mcp-ads.tools-015.md#tool-wp_schedule_post-66539d4e) | Other product |
| [`wp_duplicate_post`](royazran--mcp-ads.tools-015.md#tool-wp_duplicate_post-f3f9d93f) | Other product |
| [`wp_get_post_revisions`](royazran--mcp-ads.tools-015.md#tool-wp_get_post_revisions-dd0dbafa) | Other product |
| [`wp_bulk_update_posts`](royazran--mcp-ads.tools-015.md#tool-wp_bulk_update_posts-5997f22c) | Other product |
| [`wp_get_post_meta`](royazran--mcp-ads.tools-015.md#tool-wp_get_post_meta-1520e040) | Other product |
| [`wp_update_post_meta`](royazran--mcp-ads.tools-015.md#tool-wp_update_post_meta-78db1b5e) | Other product |
| [`wp_search_posts`](royazran--mcp-ads.tools-015.md#tool-wp_search_posts-24fb76b8) | Other product |
| [`wp_get_posts_by_category`](royazran--mcp-ads.tools-015.md#tool-wp_get_posts_by_category-f5fa78d7) | Other product |
| [`wp_restore_post`](royazran--mcp-ads.tools-015.md#tool-wp_restore_post-dd8b57aa) | Other product |
| [`gamification_points_get`](royazran--mcp-ads.tools-015.md#tool-gamification_points_get-d0df66d1) | Other product |
| [`gamification_points_award`](royazran--mcp-ads.tools-015.md#tool-gamification_points_award-c0819dbb) | Other product |
| [`gamification_leaderboard`](royazran--mcp-ads.tools-015.md#tool-gamification_leaderboard-5ad4bfad) | Other product |
| [`wp_list_app_passwords`](royazran--mcp-ads.tools-015.md#tool-wp_list_app_passwords-7a02bad2) | Other product |
| [`wp_create_app_password`](royazran--mcp-ads.tools-015.md#tool-wp_create_app_password-5c4b76b2) | Other product |
| [`wp_delete_app_password`](royazran--mcp-ads.tools-015.md#tool-wp_delete_app_password-68beedfe) | Other product |
| [`wp_delete_all_app_passwords`](royazran--mcp-ads.tools-015.md#tool-wp_delete_all_app_passwords-b8cc852f) | Other product |
| [`wp_list_roles`](royazran--mcp-ads.tools-015.md#tool-wp_list_roles-47ac0fab) | Other product |
| [`wp_get_user_capabilities`](royazran--mcp-ads.tools-015.md#tool-wp_get_user_capabilities-cb433999) | Other product |
| [`wp_security_change_role`](royazran--mcp-ads.tools-015.md#tool-wp_security_change_role-0397373c) | Other product |
| [`wp_verify_auth`](royazran--mcp-ads.tools-015.md#tool-wp_verify_auth-46f28065) | Other product |
| [`wp_verify_current_user`](royazran--mcp-ads.tools-015.md#tool-wp_verify_current_user-9abe297e) | Other product |
| [`wp_check_file_permissions`](royazran--mcp-ads.tools-015.md#tool-wp_check_file_permissions-e363298b) | Other product |
| [`wp_list_admin_users`](royazran--mcp-ads.tools-015.md#tool-wp_list_admin_users-f97a5aff) | Other product |
| [`wp_check_plugin_vulnerabilities`](royazran--mcp-ads.tools-015.md#tool-wp_check_plugin_vulnerabilities-e9648f82) | Other product |
| [`wp_get_login_activity`](royazran--mcp-ads.tools-015.md#tool-wp_get_login_activity-2f557155) | Other product |
| [`wp_block_user`](royazran--mcp-ads.tools-015.md#tool-wp_block_user-8842329d) | Other product |
| [`wp_force_password_reset`](royazran--mcp-ads.tools-015.md#tool-wp_force_password_reset-d441f9fd) | Other product |
| [`wp_check_rest_api_access`](royazran--mcp-ads.tools-015.md#tool-wp_check_rest_api_access-5c69dec1) | Other product |
| [`wp_get_security_headers`](royazran--mcp-ads.tools-015.md#tool-wp_get_security_headers-6cc789e0) | Other product |
| [`wp_disable_xmlrpc`](royazran--mcp-ads.tools-015.md#tool-wp_disable_xmlrpc-904104ff) | Other product |
| [`wp_get_secret_keys`](royazran--mcp-ads.tools-015.md#tool-wp_get_secret_keys-11d7c2c9) | Other product |
| [`wp_audit_user_accounts`](royazran--mcp-ads.tools-015.md#tool-wp_audit_user_accounts-45a6a284) | Other product |
| [`wp_get_all_settings`](royazran--mcp-ads.tools-015.md#tool-wp_get_all_settings-1b2fd53a) | Other product |
| [`wp_update_general_settings`](royazran--mcp-ads.tools-015.md#tool-wp_update_general_settings-3c960fae) | Other product |
| [`wp_update_reading_settings`](royazran--mcp-ads.tools-015.md#tool-wp_update_reading_settings-cfde932d) | Other product |
| [`wp_update_discussion_settings`](royazran--mcp-ads.tools-015.md#tool-wp_update_discussion_settings-84dbc246) | Other product |
| [`wp_update_writing_settings`](royazran--mcp-ads.tools-015.md#tool-wp_update_writing_settings-b646bfbf) | Other product |
| [`wp_update_media_settings`](royazran--mcp-ads.tools-015.md#tool-wp_update_media_settings-0d80f372) | Other product |
| [`wp_update_permalink_settings`](royazran--mcp-ads.tools-015.md#tool-wp_update_permalink_settings-6d366ccd) | Other product |
| [`wp_set_site_logo`](royazran--mcp-ads.tools-015.md#tool-wp_set_site_logo-aa4bad00) | Other product |
| [`wp_set_site_icon`](royazran--mcp-ads.tools-015.md#tool-wp_set_site_icon-3a1ad0d4) | Other product |
| [`wp_get_site_info`](royazran--mcp-ads.tools-015.md#tool-wp_get_site_info-d26d8aaf) | Other product |
| [`wp_update_user_registration_settings`](royazran--mcp-ads.tools-015.md#tool-wp_update_user_registration_settings-e15e5bff) | Other product |
| [`wp_update_email_settings`](royazran--mcp-ads.tools-015.md#tool-wp_update_email_settings-af069158) | Other product |
| [`social_detect_plugin`](royazran--mcp-ads.tools-015.md#tool-social_detect_plugin-d4fd2744) | Other product |
| [`social_auto_post_configure`](royazran--mcp-ads.tools-015.md#tool-social_auto_post_configure-a9a9cd51) | Other product |
| [`social_profiles_list`](royazran--mcp-ads.tools-015.md#tool-social_profiles_list-cf466114) | Other product |
| [`social_profile_connect`](royazran--mcp-ads.tools-015.md#tool-social_profile_connect-60afae78) | Other product |
| [`social_schedule_post`](royazran--mcp-ads.tools-015.md#tool-social_schedule_post-55ce5e49) | Other product |
| [`social_share_buttons_configure`](royazran--mcp-ads.tools-015.md#tool-social_share_buttons_configure-f0740a95) | Other product |
| [`push_detect_plugin`](royazran--mcp-ads.tools-015.md#tool-push_detect_plugin-894ddc52) | Other product |
| [`push_onesignal_configure`](royazran--mcp-ads.tools-015.md#tool-push_onesignal_configure-4b53e39e) | Other product |
| [`push_send_notification`](royazran--mcp-ads.tools-015.md#tool-push_send_notification-8e2e1144) | Other product |
| [`push_segments_list`](royazran--mcp-ads.tools-015.md#tool-push_segments_list-a1a8e3b8) | Other product |
| [`chat_detect_plugin`](royazran--mcp-ads.tools-015.md#tool-chat_detect_plugin-bac42614) | Other product |
| [`chat_widget_install`](royazran--mcp-ads.tools-015.md#tool-chat_widget_install-91f63bdd) | Other product |
| [`chat_widget_configure`](royazran--mcp-ads.tools-015.md#tool-chat_widget_configure-a2474f61) | Other product |
| [`chat_offline_message_configure`](royazran--mcp-ads.tools-015.md#tool-chat_offline_message_configure-91dbe83a) | Other product |
| [`chat_whatsapp_button_add`](royazran--mcp-ads.tools-016.md#tool-chat_whatsapp_button_add-15d5e505) | Other product |
| [`wp_list_categories`](royazran--mcp-ads.tools-016.md#tool-wp_list_categories-ff714ab0) | Other product |
| [`wp_get_category`](royazran--mcp-ads.tools-016.md#tool-wp_get_category-3fc49f98) | Other product |
| [`wp_create_category`](royazran--mcp-ads.tools-016.md#tool-wp_create_category-4ee7e99b) | Other product |
| [`wp_update_category`](royazran--mcp-ads.tools-016.md#tool-wp_update_category-1385a0d3) | Other product |
| [`wp_delete_category`](royazran--mcp-ads.tools-016.md#tool-wp_delete_category-c964171f) | Other product |
| [`wp_list_tags`](royazran--mcp-ads.tools-016.md#tool-wp_list_tags-0eae22f4) | Other product |
| [`wp_create_tag`](royazran--mcp-ads.tools-016.md#tool-wp_create_tag-5172c608) | Other product |
| [`wp_update_tag`](royazran--mcp-ads.tools-016.md#tool-wp_update_tag-1c586ba5) | Other product |
| [`wp_delete_tag`](royazran--mcp-ads.tools-016.md#tool-wp_delete_tag-822878d1) | Other product |
| [`wp_list_taxonomies`](royazran--mcp-ads.tools-016.md#tool-wp_list_taxonomies-3516b81d) | Other product |
| [`wp_get_terms`](royazran--mcp-ads.tools-016.md#tool-wp_get_terms-6395255b) | Other product |
| [`wp_create_term`](royazran--mcp-ads.tools-016.md#tool-wp_create_term-cc61b90c) | Other product |
| [`wp_update_term`](royazran--mcp-ads.tools-016.md#tool-wp_update_term-6bb78370) | Other product |
| [`wp_delete_term`](royazran--mcp-ads.tools-016.md#tool-wp_delete_term-6ccc5ce1) | Other product |
| [`wp_list_themes`](royazran--mcp-ads.tools-016.md#tool-wp_list_themes-4846517e) | Other product |
| [`wp_get_active_theme`](royazran--mcp-ads.tools-016.md#tool-wp_get_active_theme-98c1b5dc) | Other product |
| [`wp_get_theme`](royazran--mcp-ads.tools-016.md#tool-wp_get_theme-593fb7d4) | Other product |
| [`wp_switch_theme`](royazran--mcp-ads.tools-016.md#tool-wp_switch_theme-c2627c77) | Other product |
| [`wp_get_theme_customizations`](royazran--mcp-ads.tools-016.md#tool-wp_get_theme_customizations-131ddd0d) | Other product |
| [`wp_update_theme_customization`](royazran--mcp-ads.tools-016.md#tool-wp_update_theme_customization-43a846eb) | Other product |
| [`wp_list_theme_templates`](royazran--mcp-ads.tools-016.md#tool-wp_list_theme_templates-890c8d58) | Other product |
| [`wp_get_global_styles`](royazran--mcp-ads.tools-016.md#tool-wp_get_global_styles-214442a2) | Other product |
| [`wp_update_global_styles`](royazran--mcp-ads.tools-016.md#tool-wp_update_global_styles-8f25b8b8) | Other product |
| [`wp_list_theme_blocks`](royazran--mcp-ads.tools-016.md#tool-wp_list_theme_blocks-8269902e) | Other product |
| [`wp_install_theme`](royazran--mcp-ads.tools-016.md#tool-wp_install_theme-576e331e) | Other product |
| [`wp_list_users`](royazran--mcp-ads.tools-016.md#tool-wp_list_users-aeb4e0f6) | Other product |
| [`wp_get_user`](royazran--mcp-ads.tools-016.md#tool-wp_get_user-617e66ba) | Other product |
| [`wp_get_current_user`](royazran--mcp-ads.tools-016.md#tool-wp_get_current_user-a5b9c247) | Other product |
| [`wp_create_user`](royazran--mcp-ads.tools-016.md#tool-wp_create_user-b940b048) | Other product |
| [`wp_update_user`](royazran--mcp-ads.tools-016.md#tool-wp_update_user-525a2379) | Other product |
| [`wp_delete_user`](royazran--mcp-ads.tools-016.md#tool-wp_delete_user-dd713409) | Other product |
| [`wp_change_user_role`](royazran--mcp-ads.tools-016.md#tool-wp_change_user_role-d86b50ce) | Other product |
| [`wp_reset_user_password`](royazran--mcp-ads.tools-016.md#tool-wp_reset_user_password-cda26daa) | Other product |
| [`realestate_listings_list`](royazran--mcp-ads.tools-016.md#tool-realestate_listings_list-283d52b3) | Other product |
| [`realestate_listing_create`](royazran--mcp-ads.tools-016.md#tool-realestate_listing_create-4cb0d4b0) | Other product |
| [`realestate_listing_update`](royazran--mcp-ads.tools-016.md#tool-realestate_listing_update-0ebc939e) | Other product |
| [`realestate_agents_list`](royazran--mcp-ads.tools-016.md#tool-realestate_agents_list-27c89c72) | Other product |
| [`realestate_agents_create`](royazran--mcp-ads.tools-016.md#tool-realestate_agents_create-80cfe6c4) | Other product |
| [`realestate_search_configure`](royazran--mcp-ads.tools-016.md#tool-realestate_search_configure-a298b1e8) | Other product |
| [`directory_listings_list`](royazran--mcp-ads.tools-016.md#tool-directory_listings_list-6c9e0e80) | Other product |
| [`directory_listing_create`](royazran--mcp-ads.tools-016.md#tool-directory_listing_create-09ff13c5) | Other product |
| [`directory_categories_list`](royazran--mcp-ads.tools-016.md#tool-directory_categories_list-b78b46bc) | Other product |
| [`directory_search_configure`](royazran--mcp-ads.tools-016.md#tool-directory_search_configure-8e087781) | Other product |
| [`jobboard_listings_list`](royazran--mcp-ads.tools-016.md#tool-jobboard_listings_list-0160a353) | Other product |
| [`jobboard_listing_create`](royazran--mcp-ads.tools-016.md#tool-jobboard_listing_create-09a3527b) | Other product |
| [`jobboard_applications_list`](royazran--mcp-ads.tools-016.md#tool-jobboard_applications_list-b7419682) | Other product |
| [`vertical_detect_type`](royazran--mcp-ads.tools-016.md#tool-vertical_detect_type-fd69168d) | Other product |
| [`vertical_create_from_preset`](royazran--mcp-ads.tools-016.md#tool-vertical_create_from_preset-28601a58) | Other product |
| [`vertical_configure_search`](royazran--mcp-ads.tools-016.md#tool-vertical_configure_search-1be7e40b) | Other product |
| [`vertical_create_single_template`](royazran--mcp-ads.tools-016.md#tool-vertical_create_single_template-92111be2) | Other product |
| [`vertical_create_archive_template`](royazran--mcp-ads.tools-016.md#tool-vertical_create_archive_template-5f05a3eb) | Other product |
| [`vertical_import_sample_data`](royazran--mcp-ads.tools-016.md#tool-vertical_import_sample_data-5b4076bc) | Other product |
| [`video_embed`](royazran--mcp-ads.tools-016.md#tool-video_embed-1a4e4e58) | Other product |
| [`video_upload`](royazran--mcp-ads.tools-016.md#tool-video_upload-67708acc) | Other product |
| [`video_get_oembed`](royazran--mcp-ads.tools-016.md#tool-video_get_oembed-c101d251) | Other product |
| [`video_playlist_create`](royazran--mcp-ads.tools-016.md#tool-video_playlist_create-bf7d0598) | Other product |
| [`video_schema_generate`](royazran--mcp-ads.tools-016.md#tool-video_schema_generate-75f3e851) | Other product |
| [`podcast_detect_plugin`](royazran--mcp-ads.tools-016.md#tool-podcast_detect_plugin-e1778860) | Other product |
| [`podcast_episodes_list`](royazran--mcp-ads.tools-016.md#tool-podcast_episodes_list-09979189) | Other product |
| [`podcast_episode_create`](royazran--mcp-ads.tools-016.md#tool-podcast_episode_create-6ba21fee) | Other product |
| [`podcast_rss_configure`](royazran--mcp-ads.tools-016.md#tool-podcast_rss_configure-214d7434) | Other product |
| [`podcast_submit_directories`](royazran--mcp-ads.tools-016.md#tool-podcast_submit_directories-9fbabb82) | Other product |
| [`audio_player_embed`](royazran--mcp-ads.tools-016.md#tool-audio_player_embed-86587aba) | Other product |
| [`audio_playlist_create`](royazran--mcp-ads.tools-016.md#tool-audio_playlist_create-77b29ee2) | Other product |
| [`wp_whitelabel_login_page_customize`](royazran--mcp-ads.tools-016.md#tool-wp_whitelabel_login_page_customize-1d087561) | Other product |
| [`wp_whitelabel_admin_branding`](royazran--mcp-ads.tools-016.md#tool-wp_whitelabel_admin_branding-93e15b76) | Other product |
| [`wp_whitelabel_hide_admin_menus`](royazran--mcp-ads.tools-016.md#tool-wp_whitelabel_hide_admin_menus-32926cde) | Other product |
| [`wp_whitelabel_hide_admin_notices`](royazran--mcp-ads.tools-016.md#tool-wp_whitelabel_hide_admin_notices-effaa999) | Other product |
| [`wp_whitelabel_custom_dashboard_widget`](royazran--mcp-ads.tools-016.md#tool-wp_whitelabel_custom_dashboard_widget-081b70da) | Other product |
| [`wp_whitelabel_admin_color_scheme`](royazran--mcp-ads.tools-016.md#tool-wp_whitelabel_admin_color_scheme-5eacd64e) | Other product |
| [`wp_whitelabel_disable_updates_ui`](royazran--mcp-ads.tools-016.md#tool-wp_whitelabel_disable_updates_ui-c32652f6) | Other product |
| [`wp_whitelabel_remove_wp_branding`](royazran--mcp-ads.tools-016.md#tool-wp_whitelabel_remove_wp_branding-0f52a421) | Other product |
| [`wp_whitelabel_custom_admin_footer`](royazran--mcp-ads.tools-016.md#tool-wp_whitelabel_custom_admin_footer-7e428287) | Other product |
| [`wp_whitelabel_restrict_admin_access`](royazran--mcp-ads.tools-016.md#tool-wp_whitelabel_restrict_admin_access-0f91f95b) | Other product |
| [`wp_whitelabel_export_site_report`](royazran--mcp-ads.tools-016.md#tool-wp_whitelabel_export_site_report-4a938646) | Other product |
| [`wp_whitelabel_maintenance_page_set`](royazran--mcp-ads.tools-016.md#tool-wp_whitelabel_maintenance_page_set-9a32883f) | Other product |
| [`wp_shortcodes_list`](royazran--mcp-ads.tools-016.md#tool-wp_shortcodes_list-fdd20ac4) | Other product |
| [`wp_shortcodes_register`](royazran--mcp-ads.tools-016.md#tool-wp_shortcodes_register-90fdf954) | Other product |
| [`wp_shortcodes_test_render`](royazran--mcp-ads.tools-016.md#tool-wp_shortcodes_test_render-ae9b5dd2) | Other product |
| [`wp_block_dev_scaffold`](royazran--mcp-ads.tools-016.md#tool-wp_block_dev_scaffold-3c1fff48) | Other product |
| [`wp_block_dev_register_variation`](royazran--mcp-ads.tools-016.md#tool-wp_block_dev_register_variation-28b67fe9) | Other product |
| [`wp_block_dev_register_style`](royazran--mcp-ads.tools-016.md#tool-wp_block_dev_register_style-3de6cc67) | Other product |
| [`wp_widget_scaffold_elementor`](royazran--mcp-ads.tools-016.md#tool-wp_widget_scaffold_elementor-f7711299) | Other product |
| [`wp_widget_register_category`](royazran--mcp-ads.tools-016.md#tool-wp_widget_register_category-2b26edeb) | Other product |
| [`wp_widget_list_installed`](royazran--mcp-ads.tools-016.md#tool-wp_widget_list_installed-8767b58b) | Other product |
| [`wp_code_snippets_list`](royazran--mcp-ads.tools-016.md#tool-wp_code_snippets_list-6eadd738) | Other product |
| [`wp_code_snippets_create`](royazran--mcp-ads.tools-016.md#tool-wp_code_snippets_create-c8b64247) | Other product |
| [`wp_code_snippets_toggle`](royazran--mcp-ads.tools-016.md#tool-wp_code_snippets_toggle-4bd87aa0) | Other product |
| [`wp_list_sidebars`](royazran--mcp-ads.tools-016.md#tool-wp_list_sidebars-8a207369) | Other product |
| [`wp_get_sidebar`](royazran--mcp-ads.tools-016.md#tool-wp_get_sidebar-c949af4a) | Other product |
| [`wp_list_widgets`](royazran--mcp-ads.tools-016.md#tool-wp_list_widgets-227e2dd0) | Other product |
| [`wp_list_widget_types`](royazran--mcp-ads.tools-016.md#tool-wp_list_widget_types-0d59b7f6) | Other product |
| [`wp_get_widget`](royazran--mcp-ads.tools-016.md#tool-wp_get_widget-4910becc) | Other product |
| [`wp_create_widget`](royazran--mcp-ads.tools-016.md#tool-wp_create_widget-a43c4c30) | Other product |
| [`wp_update_widget`](royazran--mcp-ads.tools-016.md#tool-wp_update_widget-f10d45b6) | Other product |
| [`wp_delete_widget`](royazran--mcp-ads.tools-016.md#tool-wp_delete_widget-08f0c706) | Other product |
| [`wp_add_text_widget`](royazran--mcp-ads.tools-016.md#tool-wp_add_text_widget-6801fbe8) | Other product |
| [`wp_add_html_widget`](royazran--mcp-ads.tools-016.md#tool-wp_add_html_widget-22d8478f) | Other product |
| [`wp_add_nav_menu_widget`](royazran--mcp-ads.tools-016.md#tool-wp_add_nav_menu_widget-8b8c8d7e) | Other product |
| [`wp_add_search_widget`](royazran--mcp-ads.tools-016.md#tool-wp_add_search_widget-87b14ebc) | Other product |
| [`wp_add_recent_posts_widget`](royazran--mcp-ads.tools-016.md#tool-wp_add_recent_posts_widget-3079c9a9) | Other product |
| [`wp_add_categories_widget`](royazran--mcp-ads.tools-016.md#tool-wp_add_categories_widget-817481c9) | Other product |
| [`wp_clear_sidebar`](royazran--mcp-ads.tools-016.md#tool-wp_clear_sidebar-98e31ebd) | Other product |
| [`wp_reorder_sidebar_widgets`](royazran--mcp-ads.tools-016.md#tool-wp_reorder_sidebar_widgets-9f05c0d8) | Other product |
| [`wpmcp_generate_helper_plugin`](royazran--mcp-ads.tools-016.md#tool-wpmcp_generate_helper_plugin-83185db9) | Other product |
| [`wpmcp_check_helper_plugin`](royazran--mcp-ads.tools-016.md#tool-wpmcp_check_helper_plugin-31defca2) | Other product |
| [`theme_get_info`](royazran--mcp-ads.tools-016.md#tool-theme_get_info-634d0cc3) | Other product |
| [`theme_list_all`](royazran--mcp-ads.tools-016.md#tool-theme_list_all-5b953176) | Other product |
| [`theme_get_all_mods`](royazran--mcp-ads.tools-016.md#tool-theme_get_all_mods-bc2c95a8) | Other product |
| [`theme_set_mod`](royazran--mcp-ads.tools-016.md#tool-theme_set_mod-c5eb0834) | Other product |
| [`theme_delete_mod`](royazran--mcp-ads.tools-016.md#tool-theme_delete_mod-2e2bd7a6) | Other product |
| [`theme_get_custom_css`](royazran--mcp-ads.tools-016.md#tool-theme_get_custom_css-4948b94a) | Other product |
| [`theme_set_custom_css`](royazran--mcp-ads.tools-016.md#tool-theme_set_custom_css-dd0256ee) | Other product |
| [`theme_set_site_identity`](royazran--mcp-ads.tools-016.md#tool-theme_set_site_identity-8bffeb3b) | Other product |
| [`theme_set_background`](royazran--mcp-ads.tools-016.md#tool-theme_set_background-fc87481d) | Other product |
| [`theme_set_header`](royazran--mcp-ads.tools-016.md#tool-theme_set_header-d60b3737) | Other product |
| [`theme_list_files`](royazran--mcp-ads.tools-016.md#tool-theme_list_files-fe7d54a1) | Other product |
| [`theme_read_file`](royazran--mcp-ads.tools-016.md#tool-theme_read_file-7ea68382) | Other product |
| [`theme_write_file`](royazran--mcp-ads.tools-016.md#tool-theme_write_file-f3521a0d) | Other product |
| [`theme_read_functions_php`](royazran--mcp-ads.tools-016.md#tool-theme_read_functions_php-58a4dbb7) | Other product |
| [`theme_append_to_functions_php`](royazran--mcp-ads.tools-016.md#tool-theme_append_to_functions_php-40853982) | Other product |
| [`theme_write_functions_php`](royazran--mcp-ads.tools-016.md#tool-theme_write_functions_php-c3f8928a) | Other product |
| [`theme_read_style_css`](royazran--mcp-ads.tools-016.md#tool-theme_read_style_css-a5f09c0c) | Other product |
| [`theme_write_style_css`](royazran--mcp-ads.tools-016.md#tool-theme_write_style_css-1a5c5a4c) | Other product |
| [`theme_search_in_files`](royazran--mcp-ads.tools-016.md#tool-theme_search_in_files-f8238f05) | Other product |
| [`plugin_list_files`](royazran--mcp-ads.tools-016.md#tool-plugin_list_files-482c2bf3) | Other product |
| [`plugin_read_file`](royazran--mcp-ads.tools-016.md#tool-plugin_read_file-14c3f943) | Other product |
| [`plugin_write_file`](royazran--mcp-ads.tools-016.md#tool-plugin_write_file-d47c30cc) | Other product |
| [`plugin_create_custom`](royazran--mcp-ads.tools-016.md#tool-plugin_create_custom-a6817750) | Other product |
| [`mu_plugin_list`](royazran--mcp-ads.tools-016.md#tool-mu_plugin_list-52ca52ff) | Other product |
| [`mu_plugin_read`](royazran--mcp-ads.tools-016.md#tool-mu_plugin_read-efcc1b87) | Other product |
| [`mu_plugin_write`](royazran--mcp-ads.tools-016.md#tool-mu_plugin_write-32fdc7f3) | Other product |
| [`wp_eval_php`](royazran--mcp-ads.tools-016.md#tool-wp_eval_php-5a3b3a2b) | Other product |
| [`wp_trash_post`](royazran--mcp-ads.tools-016.md#tool-wp_trash_post-2b15e9ec) | Other product |
| [`wp_restore_from_trash`](royazran--mcp-ads.tools-016.md#tool-wp_restore_from_trash-21e675c0) | Other product |
| [`wp_empty_post_trash`](royazran--mcp-ads.tools-016.md#tool-wp_empty_post_trash-295024fc) | Other product |
| [`wp_set_post_sticky`](royazran--mcp-ads.tools-016.md#tool-wp_set_post_sticky-49188c08) | Other product |
| [`wp_set_post_password`](royazran--mcp-ads.tools-016.md#tool-wp_set_post_password-84822f7d) | Other product |
| [`wp_set_post_format`](royazran--mcp-ads.tools-016.md#tool-wp_set_post_format-cede982d) | Other product |
| [`wp_set_post_comment_status`](royazran--mcp-ads.tools-016.md#tool-wp_set_post_comment_status-84056202) | Other product |
| [`wp_set_post_ping_status`](royazran--mcp-ads.tools-016.md#tool-wp_set_post_ping_status-c9b30528) | Other product |
| [`wp_set_post_slug`](royazran--mcp-ads.tools-016.md#tool-wp_set_post_slug-b8b6ece3) | Other product |
| [`wp_set_post_excerpt`](royazran--mcp-ads.tools-016.md#tool-wp_set_post_excerpt-6fbb4194) | Other product |
| [`wp_set_post_author`](royazran--mcp-ads.tools-016.md#tool-wp_set_post_author-fa49ac25) | Other product |
| [`wp_set_post_date`](royazran--mcp-ads.tools-016.md#tool-wp_set_post_date-f29508bf) | Other product |
| [`wp_set_post_parent`](royazran--mcp-ads.tools-016.md#tool-wp_set_post_parent-384729cb) | Other product |
| [`wp_set_post_menu_order`](royazran--mcp-ads.tools-016.md#tool-wp_set_post_menu_order-448b1f95) | Other product |
| [`wp_restore_post_revision`](royazran--mcp-ads.tools-016.md#tool-wp_restore_post_revision-87f8b2e3) | Other product |
| [`wp_delete_all_revisions`](royazran--mcp-ads.tools-016.md#tool-wp_delete_all_revisions-30c5217e) | Other product |
| [`wp_bulk_trash_posts`](royazran--mcp-ads.tools-017.md#tool-wp_bulk_trash_posts-7a955625) | Other product |
| [`wp_bulk_restore_posts`](royazran--mcp-ads.tools-017.md#tool-wp_bulk_restore_posts-3c8a62d0) | Other product |
| [`wp_bulk_delete_posts`](royazran--mcp-ads.tools-017.md#tool-wp_bulk_delete_posts-ab88ce11) | Other product |
| [`wp_bulk_assign_category`](royazran--mcp-ads.tools-017.md#tool-wp_bulk_assign_category-e98a59eb) | Other product |
| [`wp_bulk_assign_tag`](royazran--mcp-ads.tools-017.md#tool-wp_bulk_assign_tag-479036c4) | Other product |
| [`wp_bulk_change_author`](royazran--mcp-ads.tools-017.md#tool-wp_bulk_change_author-a2ac6de4) | Other product |
| [`wp_bulk_change_status`](royazran--mcp-ads.tools-017.md#tool-wp_bulk_change_status-b27463b4) | Other product |
| [`wp_bulk_toggle_comments`](royazran--mcp-ads.tools-017.md#tool-wp_bulk_toggle_comments-4e3eb8b4) | Other product |
| [`wp_get_post_terms`](royazran--mcp-ads.tools-017.md#tool-wp_get_post_terms-382d024d) | Other product |
| [`wp_set_post_terms`](royazran--mcp-ads.tools-017.md#tool-wp_set_post_terms-18ba5fb4) | Other product |
| [`wp_add_post_term`](royazran--mcp-ads.tools-017.md#tool-wp_add_post_term-c94b5024) | Other product |
| [`wp_remove_post_term`](royazran--mcp-ads.tools-017.md#tool-wp_remove_post_term-9d4597b9) | Other product |
| [`wp_delete_term_meta`](royazran--mcp-ads.tools-017.md#tool-wp_delete_term_meta-c079367c) | Other product |
| [`wp_trash_comment`](royazran--mcp-ads.tools-017.md#tool-wp_trash_comment-f17705c6) | Other product |
| [`wp_untrash_comment`](royazran--mcp-ads.tools-017.md#tool-wp_untrash_comment-7d6c3f06) | Other product |
| [`wp_hold_comment`](royazran--mcp-ads.tools-017.md#tool-wp_hold_comment-618c2467) | Other product |
| [`wp_unspam_comment`](royazran--mcp-ads.tools-017.md#tool-wp_unspam_comment-0bfe1f32) | Other product |
| [`wp_empty_comment_trash`](royazran--mcp-ads.tools-017.md#tool-wp_empty_comment_trash-c1d6d40c) | Other product |
| [`wp_bulk_approve_comments`](royazran--mcp-ads.tools-017.md#tool-wp_bulk_approve_comments-c0742b0e) | Other product |
| [`wp_bulk_spam_comments`](royazran--mcp-ads.tools-017.md#tool-wp_bulk_spam_comments-0be0a045) | Other product |
| [`wp_bulk_trash_comments`](royazran--mcp-ads.tools-017.md#tool-wp_bulk_trash_comments-ec2082c4) | Other product |
| [`wp_bulk_delete_comments`](royazran--mcp-ads.tools-017.md#tool-wp_bulk_delete_comments-710a4ba8) | Other product |
| [`wp_close_post_comments`](royazran--mcp-ads.tools-017.md#tool-wp_close_post_comments-e22bb406) | Other product |
| [`wp_open_post_comments`](royazran--mcp-ads.tools-017.md#tool-wp_open_post_comments-39b0db63) | Other product |
| [`wp_get_pending_comments`](royazran--mcp-ads.tools-017.md#tool-wp_get_pending_comments-0ea555ea) | Other product |
| [`wp_get_user_by_email`](royazran--mcp-ads.tools-017.md#tool-wp_get_user_by_email-8cf7f036) | Other product |
| [`wp_get_user_by_login`](royazran--mcp-ads.tools-017.md#tool-wp_get_user_by_login-d7453078) | Other product |
| [`wp_send_password_reset_email`](royazran--mcp-ads.tools-017.md#tool-wp_send_password_reset_email-5b365752) | Other product |
| [`wp_get_role_capabilities`](royazran--mcp-ads.tools-017.md#tool-wp_get_role_capabilities-4d72c13a) | Other product |
| [`wp_get_all_user_meta`](royazran--mcp-ads.tools-017.md#tool-wp_get_all_user_meta-2eb1b79a) | Other product |
| [`wp_delete_user_meta`](royazran--mcp-ads.tools-017.md#tool-wp_delete_user_meta-641d5440) | Other product |
| [`wp_create_application_password`](royazran--mcp-ads.tools-017.md#tool-wp_create_application_password-194a66bd) | Other product |
| [`wp_list_application_passwords`](royazran--mcp-ads.tools-017.md#tool-wp_list_application_passwords-b54d70f2) | Other product |
| [`wp_delete_application_password`](royazran--mcp-ads.tools-017.md#tool-wp_delete_application_password-3aae7ef5) | Other product |
| [`wp_delete_all_application_passwords`](royazran--mcp-ads.tools-017.md#tool-wp_delete_all_application_passwords-be90c6d2) | Other product |
| [`wp_search_media`](royazran--mcp-ads.tools-017.md#tool-wp_search_media-d8ffef7d) | Other product |
| [`wp_get_unattached_media`](royazran--mcp-ads.tools-017.md#tool-wp_get_unattached_media-9fbe6391) | Other product |
| [`wp_bulk_delete_media`](royazran--mcp-ads.tools-017.md#tool-wp_bulk_delete_media-9d4b488d) | Other product |
| [`wp_get_image_sizes`](royazran--mcp-ads.tools-017.md#tool-wp_get_image_sizes-65b565f7) | Other product |
| [`wp_get_media_details`](royazran--mcp-ads.tools-017.md#tool-wp_get_media_details-6820467b) | Other product |
| [`wp_attach_media_to_post`](royazran--mcp-ads.tools-017.md#tool-wp_attach_media_to_post-3e5cc265) | Other product |
| [`wp_delete_option`](royazran--mcp-ads.tools-017.md#tool-wp_delete_option-fd2424b6) | Other product |
| [`wp_list_options`](royazran--mcp-ads.tools-017.md#tool-wp_list_options-862d3e7d) | Other product |
| [`wp_get_transient`](royazran--mcp-ads.tools-017.md#tool-wp_get_transient-22dff218) | Other product |
| [`wp_set_transient`](royazran--mcp-ads.tools-017.md#tool-wp_set_transient-a14d1c97) | Other product |
| [`wp_delete_transient`](royazran--mcp-ads.tools-017.md#tool-wp_delete_transient-6b36e852) | Other product |
| [`wp_delete_all_transients`](royazran--mcp-ads.tools-017.md#tool-wp_delete_all_transients-528a68be) | Other product |
| [`wp_list_reusable_blocks`](royazran--mcp-ads.tools-017.md#tool-wp_list_reusable_blocks-0dc92b86) | Other product |
| [`wp_get_reusable_block`](royazran--mcp-ads.tools-017.md#tool-wp_get_reusable_block-1253cd95) | Other product |
| [`wp_create_reusable_block`](royazran--mcp-ads.tools-017.md#tool-wp_create_reusable_block-e736284f) | Other product |
| [`wp_update_reusable_block`](royazran--mcp-ads.tools-017.md#tool-wp_update_reusable_block-d960f64b) | Other product |
| [`wp_delete_reusable_block`](royazran--mcp-ads.tools-017.md#tool-wp_delete_reusable_block-b7d2c938) | Other product |
| [`wp_list_block_patterns`](royazran--mcp-ads.tools-017.md#tool-wp_list_block_patterns-dd085ea4) | Other product |
| [`wp_list_pattern_categories`](royazran--mcp-ads.tools-017.md#tool-wp_list_pattern_categories-ffb0b94e) | Other product |
| [`wp_list_templates`](royazran--mcp-ads.tools-017.md#tool-wp_list_templates-3a3c2e2f) | Other product |
| [`wp_get_template`](royazran--mcp-ads.tools-017.md#tool-wp_get_template-d6874b16) | Other product |
| [`wp_update_template`](royazran--mcp-ads.tools-017.md#tool-wp_update_template-265b599e) | Other product |
| [`wp_delete_template`](royazran--mcp-ads.tools-017.md#tool-wp_delete_template-5cb157f2) | Other product |
| [`wp_list_template_parts`](royazran--mcp-ads.tools-017.md#tool-wp_list_template_parts-27436f34) | Other product |
| [`wp_get_template_part`](royazran--mcp-ads.tools-017.md#tool-wp_get_template_part-88432e64) | Other product |
| [`wp_update_template_part`](royazran--mcp-ads.tools-017.md#tool-wp_update_template_part-ab7046b4) | Other product |
| [`wp_create_template_part`](royazran--mcp-ads.tools-017.md#tool-wp_create_template_part-f6342ac8) | Other product |
| [`wp_delete_template_part`](royazran--mcp-ads.tools-017.md#tool-wp_delete_template_part-4d5ff156) | Other product |
| [`wp_list_navigation_blocks`](royazran--mcp-ads.tools-017.md#tool-wp_list_navigation_blocks-523e06f1) | Other product |
| [`wp_get_navigation_block`](royazran--mcp-ads.tools-017.md#tool-wp_get_navigation_block-e9da4661) | Other product |
| [`wp_create_navigation_block`](royazran--mcp-ads.tools-017.md#tool-wp_create_navigation_block-a95a7d03) | Other product |
| [`wp_update_navigation_block`](royazran--mcp-ads.tools-017.md#tool-wp_update_navigation_block-1098eea5) | Other product |
| [`wp_delete_navigation_block`](royazran--mcp-ads.tools-017.md#tool-wp_delete_navigation_block-791d7912) | Other product |
| [`wp_search_plugins_org`](royazran--mcp-ads.tools-017.md#tool-wp_search_plugins_org-1eb9e097) | Other product |
| [`wp_get_plugin_info_org`](royazran--mcp-ads.tools-017.md#tool-wp_get_plugin_info_org-de5442e2) | Other product |
| [`wp_bulk_update_plugins`](royazran--mcp-ads.tools-017.md#tool-wp_bulk_update_plugins-d790a6b9) | Other product |
| [`wp_update_all_plugins`](royazran--mcp-ads.tools-017.md#tool-wp_update_all_plugins-662a7526) | Other product |
| [`wp_get_auto_update_plugins`](royazran--mcp-ads.tools-017.md#tool-wp_get_auto_update_plugins-1401713d) | Other product |
| [`wp_toggle_plugin_auto_update`](royazran--mcp-ads.tools-017.md#tool-wp_toggle_plugin_auto_update-19c7c055) | Other product |
| [`wp_search_themes_org`](royazran--mcp-ads.tools-017.md#tool-wp_search_themes_org-13aba397) | Other product |
| [`wp_get_theme_info_org`](royazran--mcp-ads.tools-017.md#tool-wp_get_theme_info_org-425383fb) | Other product |
| [`wp_delete_theme`](royazran--mcp-ads.tools-017.md#tool-wp_delete_theme-842ea68e) | Other product |
| [`wp_get_parent_theme`](royazran--mcp-ads.tools-017.md#tool-wp_get_parent_theme-6817cbb1) | Other product |
| [`wp_toggle_theme_auto_update`](royazran--mcp-ads.tools-017.md#tool-wp_toggle_theme_auto_update-2d43ae48) | Other product |
| [`wp_list_global_style_variations`](royazran--mcp-ads.tools-017.md#tool-wp_list_global_style_variations-aad9b3d7) | Other product |
| [`wp_get_current_global_styles`](royazran--mcp-ads.tools-017.md#tool-wp_get_current_global_styles-4ab08c7c) | Other product |
| [`wp_update_global_styles_colors`](royazran--mcp-ads.tools-017.md#tool-wp_update_global_styles_colors-735d93ff) | Other product |
| [`wp_update_global_styles_typography`](royazran--mcp-ads.tools-017.md#tool-wp_update_global_styles_typography-89780cb2) | Other product |
| [`wp_list_cron_events`](royazran--mcp-ads.tools-017.md#tool-wp_list_cron_events-affce283) | Other product |
| [`wp_run_cron_event`](royazran--mcp-ads.tools-017.md#tool-wp_run_cron_event-586daad1) | Other product |
| [`wp_add_cron_event`](royazran--mcp-ads.tools-017.md#tool-wp_add_cron_event-6e894712) | Other product |
| [`wp_delete_all_cron_events`](royazran--mcp-ads.tools-017.md#tool-wp_delete_all_cron_events-74f08148) | Other product |
| [`wp_list_privacy_requests`](royazran--mcp-ads.tools-017.md#tool-wp_list_privacy_requests-5c3bbd93) | Other product |
| [`wp_create_privacy_export_request`](royazran--mcp-ads.tools-017.md#tool-wp_create_privacy_export_request-51a8b9a0) | Other product |
| [`wp_create_privacy_erasure_request`](royazran--mcp-ads.tools-017.md#tool-wp_create_privacy_erasure_request-2feca29e) | Other product |
| [`wp_get_privacy_policy_page`](royazran--mcp-ads.tools-017.md#tool-wp_get_privacy_policy_page-09cb9758) | Other product |
| [`wp_set_privacy_policy_page`](royazran--mcp-ads.tools-017.md#tool-wp_set_privacy_policy_page-ec38276e) | Other product |
| [`wp_get_export_url`](royazran--mcp-ads.tools-017.md#tool-wp_get_export_url-34e36a5f) | Other product |
| [`wp_clear_all_transients`](royazran--mcp-ads.tools-017.md#tool-wp_clear_all_transients-5c5a55a6) | Other product |
| [`wp_check_core_update`](royazran--mcp-ads.tools-017.md#tool-wp_check_core_update-5f5de260) | Other product |
| [`wp_update_core`](royazran--mcp-ads.tools-017.md#tool-wp_update_core-458a4ae6) | Other product |
| [`wp_get_active_installs`](royazran--mcp-ads.tools-017.md#tool-wp_get_active_installs-8972c16b) | Other product |
| [`wp_ping_search_engines`](royazran--mcp-ads.tools-017.md#tool-wp_ping_search_engines-67ab6ebd) | Other product |
| [`wp_set_front_page`](royazran--mcp-ads.tools-017.md#tool-wp_set_front_page-c45346f9) | Other product |
| [`wp_set_posts_per_page`](royazran--mcp-ads.tools-017.md#tool-wp_set_posts_per_page-59a76f7f) | Other product |
| [`wp_set_default_category`](royazran--mcp-ads.tools-017.md#tool-wp_set_default_category-0776588d) | Other product |
| [`wp_set_timezone`](royazran--mcp-ads.tools-017.md#tool-wp_set_timezone-23e102c0) | Other product |
| [`wp_set_date_time_format`](royazran--mcp-ads.tools-017.md#tool-wp_set_date_time_format-d3f14beb) | Other product |
| [`wp_set_site_language`](royazran--mcp-ads.tools-017.md#tool-wp_set_site_language-07bd4401) | Other product |
| [`wp_set_admin_email`](royazran--mcp-ads.tools-017.md#tool-wp_set_admin_email-670f8f18) | Other product |
| [`wp_toggle_user_registration`](royazran--mcp-ads.tools-017.md#tool-wp_toggle_user_registration-187b9b51) | Other product |
| [`wp_set_default_user_role`](royazran--mcp-ads.tools-017.md#tool-wp_set_default_user_role-529b4d7d) | Other product |
| [`wp_toggle_search_engine_visibility`](royazran--mcp-ads.tools-017.md#tool-wp_toggle_search_engine_visibility-0cb307f6) | Other product |
| [`wp_check_post_lock`](royazran--mcp-ads.tools-017.md#tool-wp_check_post_lock-4a6e63f1) | Other product |
| [`wp_render_shortcode`](royazran--mcp-ads.tools-017.md#tool-wp_render_shortcode-aa6204cb) | Other product |
| [`wp_get_oembed`](royazran--mcp-ads.tools-017.md#tool-wp_get_oembed-dcd4ec95) | Other product |
| [`wp_list_rest_routes`](royazran--mcp-ads.tools-017.md#tool-wp_list_rest_routes-1ad673a3) | Other product |
| [`wp_rest_request`](royazran--mcp-ads.tools-017.md#tool-wp_rest_request-7d33ea69) | Other product |
| [`wp_get_site_urls`](royazran--mcp-ads.tools-017.md#tool-wp_get_site_urls-63f56962) | Other product |
| [`wp_update_site_url`](royazran--mcp-ads.tools-017.md#tool-wp_update_site_url-e0af091c) | Other product |
| [`wp_update_home_url`](royazran--mcp-ads.tools-017.md#tool-wp_update_home_url-d956f5cc) | Other product |
| [`wp_get_wp_version`](royazran--mcp-ads.tools-017.md#tool-wp_get_wp_version-4726875d) | Other product |
| [`wp_get_installed_languages`](royazran--mcp-ads.tools-017.md#tool-wp_get_installed_languages-bd80e1e6) | Other product |
| [`amp_detect`](royazran--mcp-ads.tools-017.md#tool-amp_detect-c2b03543) | Other product |
| [`amp_configure`](royazran--mcp-ads.tools-017.md#tool-amp_configure-a14bed35) | Other product |
| [`amp_validate_url`](royazran--mcp-ads.tools-017.md#tool-amp_validate_url-44c15efc) | Other product |
| [`amp_supported_templates_set`](royazran--mcp-ads.tools-017.md#tool-amp_supported_templates_set-fd523063) | Other product |
| [`pwa_detect`](royazran--mcp-ads.tools-017.md#tool-pwa_detect-1b36e93e) | Other product |
| [`pwa_manifest_get`](royazran--mcp-ads.tools-017.md#tool-pwa_manifest_get-98b827b4) | Other product |
| [`pwa_manifest_set`](royazran--mcp-ads.tools-017.md#tool-pwa_manifest_set-cf743834) | Other product |
| [`pwa_service_worker_configure`](royazran--mcp-ads.tools-017.md#tool-pwa_service_worker_configure-97223006) | Other product |
| [`headless_get_rest_config`](royazran--mcp-ads.tools-017.md#tool-headless_get_rest_config-223aefbe) | Other product |
| [`headless_cors_configure`](royazran--mcp-ads.tools-017.md#tool-headless_cors_configure-f5eb025b) | Other product |
| [`booking_detect_plugin`](royazran--mcp-ads.tools-017.md#tool-booking_detect_plugin-18b8726c) | Other product |
| [`booking_slots_list`](royazran--mcp-ads.tools-017.md#tool-booking_slots_list-c0226a46) | Other product |
| [`booking_create`](royazran--mcp-ads.tools-017.md#tool-booking_create-016101cb) | Other product |
| [`booking_cancel`](royazran--mcp-ads.tools-017.md#tool-booking_cancel-a6045f5e) | Other product |
| [`booking_reschedule`](royazran--mcp-ads.tools-017.md#tool-booking_reschedule-7e816a51) | Other product |
| [`booking_customers_list`](royazran--mcp-ads.tools-017.md#tool-booking_customers_list-e773be39) | Other product |
| [`booking_services_list`](royazran--mcp-ads.tools-017.md#tool-booking_services_list-35bae4bc) | Other product |
| [`booking_staff_list`](royazran--mcp-ads.tools-017.md#tool-booking_staff_list-0e496d8c) | Other product |
| [`booking_settings_get`](royazran--mcp-ads.tools-017.md#tool-booking_settings_get-ce86bfb8) | Other product |
| [`booking_calendar_export`](royazran--mcp-ads.tools-017.md#tool-booking_calendar_export-c6ff85fc) | Other product |
| [`bp_members_list`](royazran--mcp-ads.tools-017.md#tool-bp_members_list-24441150) | Other product |
| [`bp_groups_list`](royazran--mcp-ads.tools-017.md#tool-bp_groups_list-71e913bb) | Other product |
| [`bp_groups_create`](royazran--mcp-ads.tools-017.md#tool-bp_groups_create-33a942b8) | Other product |
| [`bp_groups_update`](royazran--mcp-ads.tools-017.md#tool-bp_groups_update-20af1154) | Other product |
| [`bp_groups_delete`](royazran--mcp-ads.tools-017.md#tool-bp_groups_delete-956704c8) | Other product |
| [`bp_activity_list`](royazran--mcp-ads.tools-017.md#tool-bp_activity_list-4877ef26) | Other product |
| [`bp_activity_create`](royazran--mcp-ads.tools-017.md#tool-bp_activity_create-b63b8ddc) | Other product |
| [`bp_messages_send`](royazran--mcp-ads.tools-017.md#tool-bp_messages_send-72280fd3) | Other product |
| [`bp_friendship_create`](royazran--mcp-ads.tools-017.md#tool-bp_friendship_create-e3d10532) | Other product |
| [`bp_xprofile_fields_list`](royazran--mcp-ads.tools-017.md#tool-bp_xprofile_fields_list-1d6bca4f) | Other product |
| [`bp_xprofile_field_update`](royazran--mcp-ads.tools-017.md#tool-bp_xprofile_field_update-354f3bfc) | Other product |
| [`bbpress_forums_list`](royazran--mcp-ads.tools-017.md#tool-bbpress_forums_list-facf2ae8) | Other product |
| [`bbpress_forums_create`](royazran--mcp-ads.tools-018.md#tool-bbpress_forums_create-5b8c44e8) | Other product |
| [`bbpress_topics_list`](royazran--mcp-ads.tools-018.md#tool-bbpress_topics_list-bb39cb0e) | Other product |
| [`bbpress_topics_create`](royazran--mcp-ads.tools-018.md#tool-bbpress_topics_create-b40598af) | Other product |
| [`bbpress_replies_create`](royazran--mcp-ads.tools-018.md#tool-bbpress_replies_create-020cafcc) | Other product |
| [`acf_get_fields`](royazran--mcp-ads.tools-018.md#tool-acf_get_fields-82b41884) | Other product |
| [`acf_update_field`](royazran--mcp-ads.tools-018.md#tool-acf_update_field-10d2fa1e) | Other product |
| [`acf_bulk_update_fields`](royazran--mcp-ads.tools-018.md#tool-acf_bulk_update_fields-e35f71e1) | Other product |
| [`acf_get_options_page`](royazran--mcp-ads.tools-018.md#tool-acf_get_options_page-e25b4ed8) | Other product |
| [`acf_update_options_field`](royazran--mcp-ads.tools-018.md#tool-acf_update_options_field-456b98c8) | Other product |
| [`acf_get_field_groups`](royazran--mcp-ads.tools-018.md#tool-acf_get_field_groups-e2147d31) | Other product |
| [`acf_get_field_group`](royazran--mcp-ads.tools-018.md#tool-acf_get_field_group-ceb76af4) | Other product |
| [`acf_get_post_meta`](royazran--mcp-ads.tools-018.md#tool-acf_get_post_meta-09f4c51c) | Other product |
| [`crm_detect_plugin`](royazran--mcp-ads.tools-018.md#tool-crm_detect_plugin-0112caf6) | Other product |
| [`fluentcrm_contacts_list`](royazran--mcp-ads.tools-018.md#tool-fluentcrm_contacts_list-f0fee363) | Other product |
| [`fluentcrm_contact_create`](royazran--mcp-ads.tools-018.md#tool-fluentcrm_contact_create-4c2c1587) | Other product |
| [`fluentcrm_contact_update`](royazran--mcp-ads.tools-018.md#tool-fluentcrm_contact_update-20a0313e) | Other product |
| [`fluentcrm_contact_delete`](royazran--mcp-ads.tools-018.md#tool-fluentcrm_contact_delete-9cccaa5b) | Other product |
| [`fluentcrm_contact_add_tag`](royazran--mcp-ads.tools-018.md#tool-fluentcrm_contact_add_tag-dee78e09) | Other product |
| [`fluentcrm_contact_remove_tag`](royazran--mcp-ads.tools-018.md#tool-fluentcrm_contact_remove_tag-1cac4630) | Other product |
| [`fluentcrm_lists_list`](royazran--mcp-ads.tools-018.md#tool-fluentcrm_lists_list-baa728c3) | Other product |
| [`fluentcrm_lists_create`](royazran--mcp-ads.tools-018.md#tool-fluentcrm_lists_create-f5913e50) | Other product |
| [`fluentcrm_campaigns_list`](royazran--mcp-ads.tools-018.md#tool-fluentcrm_campaigns_list-7c366c5f) | Other product |
| [`fluentcrm_campaigns_create`](royazran--mcp-ads.tools-018.md#tool-fluentcrm_campaigns_create-e15a67ec) | Other product |
| [`fluentcrm_campaigns_send`](royazran--mcp-ads.tools-018.md#tool-fluentcrm_campaigns_send-0d43d224) | Other product |
| [`mailpoet_subscribers_list`](royazran--mcp-ads.tools-018.md#tool-mailpoet_subscribers_list-c65eacd0) | Other product |
| [`mailpoet_subscriber_add`](royazran--mcp-ads.tools-018.md#tool-mailpoet_subscriber_add-5f84c027) | Other product |
| [`mailpoet_newsletters_list`](royazran--mcp-ads.tools-018.md#tool-mailpoet_newsletters_list-766c98b2) | Other product |
| [`mailpoet_newsletters_create`](royazran--mcp-ads.tools-018.md#tool-mailpoet_newsletters_create-9361a116) | Other product |
| [`mailpoet_segments_list`](royazran--mcp-ads.tools-018.md#tool-mailpoet_segments_list-11dce197) | Other product |
| [`groundhogg_contacts_list`](royazran--mcp-ads.tools-018.md#tool-groundhogg_contacts_list-aeb6b17f) | Other product |
| [`groundhogg_contact_create`](royazran--mcp-ads.tools-018.md#tool-groundhogg_contact_create-f9d1202b) | Other product |
| [`groundhogg_email_send`](royazran--mcp-ads.tools-018.md#tool-groundhogg_email_send-7bd900cb) | Other product |
| [`groundhogg_funnels_list`](royazran--mcp-ads.tools-018.md#tool-groundhogg_funnels_list-a930c5b4) | Other product |
| [`crm_mailchimp_subscribe`](royazran--mcp-ads.tools-018.md#tool-crm_mailchimp_subscribe-0b61ea2c) | Other product |
| [`crm_brevo_subscribe`](royazran--mcp-ads.tools-018.md#tool-crm_brevo_subscribe-6ac664e6) | Other product |
| [`crm_convertkit_subscribe`](royazran--mcp-ads.tools-018.md#tool-crm_convertkit_subscribe-30afff19) | Other product |
| [`tec_events_list`](royazran--mcp-ads.tools-018.md#tool-tec_events_list-beb99beb) | Other product |
| [`tec_events_create`](royazran--mcp-ads.tools-018.md#tool-tec_events_create-0de2f4e5) | Other product |
| [`tec_events_update`](royazran--mcp-ads.tools-018.md#tool-tec_events_update-14d5b0b3) | Other product |
| [`tec_events_delete`](royazran--mcp-ads.tools-018.md#tool-tec_events_delete-8a99d135) | Other product |
| [`tec_venues_list`](royazran--mcp-ads.tools-018.md#tool-tec_venues_list-e93ace6e) | Other product |
| [`tec_venues_create`](royazran--mcp-ads.tools-018.md#tool-tec_venues_create-9763bbeb) | Other product |
| [`tec_organizers_list`](royazran--mcp-ads.tools-018.md#tool-tec_organizers_list-cc44f6f4) | Other product |
| [`tec_organizers_create`](royazran--mcp-ads.tools-018.md#tool-tec_organizers_create-9eb59f60) | Other product |
| [`tec_tickets_list`](royazran--mcp-ads.tools-018.md#tool-tec_tickets_list-b30af1e6) | Other product |
| [`tec_tickets_create`](royazran--mcp-ads.tools-018.md#tool-tec_tickets_create-af772d37) | Other product |
| [`tec_attendees_list`](royazran--mcp-ads.tools-018.md#tool-tec_attendees_list-05b7aae1) | Other product |
| [`amelia_services_list`](royazran--mcp-ads.tools-018.md#tool-amelia_services_list-10840e78) | Other product |
| [`amelia_services_create`](royazran--mcp-ads.tools-018.md#tool-amelia_services_create-53110e02) | Other product |
| [`amelia_employees_list`](royazran--mcp-ads.tools-018.md#tool-amelia_employees_list-0473cc49) | Other product |
| [`amelia_employees_create`](royazran--mcp-ads.tools-018.md#tool-amelia_employees_create-4ecaa254) | Other product |
| [`amelia_appointments_list`](royazran--mcp-ads.tools-018.md#tool-amelia_appointments_list-c4785020) | Other product |
| [`amelia_appointments_create`](royazran--mcp-ads.tools-018.md#tool-amelia_appointments_create-d082b144) | Other product |
| [`amelia_customers_list`](royazran--mcp-ads.tools-018.md#tool-amelia_customers_list-0114ac37) | Other product |
| [`events_detect_plugin`](royazran--mcp-ads.tools-018.md#tool-events_detect_plugin-77589931) | Other product |
| [`events_list_universal`](royazran--mcp-ads.tools-018.md#tool-events_list_universal-adf38937) | Other product |
| [`cf7_list_forms`](royazran--mcp-ads.tools-018.md#tool-cf7_list_forms-03a80b81) | Other product |
| [`cf7_get_form`](royazran--mcp-ads.tools-018.md#tool-cf7_get_form-fe89c1cf) | Other product |
| [`cf7_create_form`](royazran--mcp-ads.tools-018.md#tool-cf7_create_form-e9fab8c3) | Other product |
| [`cf7_update_form`](royazran--mcp-ads.tools-018.md#tool-cf7_update_form-d0145f78) | Other product |
| [`cf7_delete_form`](royazran--mcp-ads.tools-018.md#tool-cf7_delete_form-31d02ad5) | Other product |
| [`cf7_get_shortcode`](royazran--mcp-ads.tools-018.md#tool-cf7_get_shortcode-49e34466) | Other product |
| [`gf_list_forms`](royazran--mcp-ads.tools-018.md#tool-gf_list_forms-618a6c3c) | Other product |
| [`gf_get_form`](royazran--mcp-ads.tools-018.md#tool-gf_get_form-4dee8745) | Other product |
| [`gf_get_entries`](royazran--mcp-ads.tools-018.md#tool-gf_get_entries-671bf0bb) | Other product |
| [`gf_get_entry`](royazran--mcp-ads.tools-018.md#tool-gf_get_entry-f016bd85) | Other product |
| [`gf_update_entry_status`](royazran--mcp-ads.tools-018.md#tool-gf_update_entry_status-a163ee85) | Other product |
| [`gf_delete_entry`](royazran--mcp-ads.tools-018.md#tool-gf_delete_entry-6a5f31c0) | Other product |
| [`wpforms_list_forms`](royazran--mcp-ads.tools-018.md#tool-wpforms_list_forms-cfab4dd4) | Other product |
| [`wpforms_get_entries`](royazran--mcp-ads.tools-018.md#tool-wpforms_get_entries-5a8b246d) | Other product |
| [`nf_list_forms`](royazran--mcp-ads.tools-018.md#tool-nf_list_forms-b50993da) | Other product |
| [`nf_get_form`](royazran--mcp-ads.tools-018.md#tool-nf_get_form-d467c1f2) | Other product |
| [`nf_get_submissions`](royazran--mcp-ads.tools-018.md#tool-nf_get_submissions-a6591212) | Other product |
| [`ld_courses_list`](royazran--mcp-ads.tools-018.md#tool-ld_courses_list-f0feefbb) | Other product |
| [`ld_courses_create`](royazran--mcp-ads.tools-018.md#tool-ld_courses_create-96230fff) | Other product |
| [`ld_courses_update`](royazran--mcp-ads.tools-018.md#tool-ld_courses_update-3965a87b) | Other product |
| [`ld_courses_delete`](royazran--mcp-ads.tools-018.md#tool-ld_courses_delete-13716a0c) | Other product |
| [`ld_lessons_list`](royazran--mcp-ads.tools-018.md#tool-ld_lessons_list-47ecf7c1) | Other product |
| [`ld_lessons_create`](royazran--mcp-ads.tools-018.md#tool-ld_lessons_create-39e9d8f0) | Other product |
| [`ld_lessons_update`](royazran--mcp-ads.tools-018.md#tool-ld_lessons_update-8a5e0eaf) | Other product |
| [`ld_topics_list`](royazran--mcp-ads.tools-018.md#tool-ld_topics_list-77e8313d) | Other product |
| [`ld_topics_create`](royazran--mcp-ads.tools-018.md#tool-ld_topics_create-e5458dd0) | Other product |
| [`ld_quizzes_list`](royazran--mcp-ads.tools-018.md#tool-ld_quizzes_list-123887c8) | Other product |
| [`ld_quizzes_create`](royazran--mcp-ads.tools-018.md#tool-ld_quizzes_create-243ecbd6) | Other product |
| [`ld_enroll_user`](royazran--mcp-ads.tools-018.md#tool-ld_enroll_user-221c7fb4) | Other product |
| [`ld_unenroll_user`](royazran--mcp-ads.tools-018.md#tool-ld_unenroll_user-d67fffca) | Other product |
| [`ld_mark_complete`](royazran--mcp-ads.tools-018.md#tool-ld_mark_complete-46e446a3) | Other product |
| [`ld_user_progress`](royazran--mcp-ads.tools-018.md#tool-ld_user_progress-dc450cb7) | Other product |
| [`lifter_courses_list`](royazran--mcp-ads.tools-018.md#tool-lifter_courses_list-c67d668c) | Other product |
| [`lifter_courses_create`](royazran--mcp-ads.tools-018.md#tool-lifter_courses_create-c278ae4d) | Other product |
| [`lifter_lessons_list`](royazran--mcp-ads.tools-018.md#tool-lifter_lessons_list-45444f0d) | Other product |
| [`lifter_enroll_user`](royazran--mcp-ads.tools-018.md#tool-lifter_enroll_user-ae5214a5) | Other product |
| [`tutor_courses_list`](royazran--mcp-ads.tools-018.md#tool-tutor_courses_list-c0d00d42) | Other product |
| [`tutor_courses_create`](royazran--mcp-ads.tools-018.md#tool-tutor_courses_create-0268e9ad) | Other product |
| [`tutor_lessons_list`](royazran--mcp-ads.tools-018.md#tool-tutor_lessons_list-d70d74e2) | Other product |
| [`tutor_enroll_user`](royazran--mcp-ads.tools-018.md#tool-tutor_enroll_user-ee04bbb2) | Other product |
| [`mepr_memberships_list`](royazran--mcp-ads.tools-018.md#tool-mepr_memberships_list-9e0ab6ea) | Other product |
| [`mepr_memberships_create`](royazran--mcp-ads.tools-018.md#tool-mepr_memberships_create-ae7ec662) | Other product |
| [`mepr_memberships_update`](royazran--mcp-ads.tools-018.md#tool-mepr_memberships_update-619e7fba) | Other product |
| [`mepr_members_list`](royazran--mcp-ads.tools-018.md#tool-mepr_members_list-bb1489e0) | Other product |
| [`mepr_grant_access`](royazran--mcp-ads.tools-018.md#tool-mepr_grant_access-a1f11701) | Other product |
| [`mepr_revoke_access`](royazran--mcp-ads.tools-018.md#tool-mepr_revoke_access-a9cd5b74) | Other product |
| [`mepr_transactions_list`](royazran--mcp-ads.tools-018.md#tool-mepr_transactions_list-4a46f03a) | Other product |
| [`mepr_coupons_list`](royazran--mcp-ads.tools-018.md#tool-mepr_coupons_list-b495876c) | Other product |
| [`mepr_coupons_create`](royazran--mcp-ads.tools-018.md#tool-mepr_coupons_create-dfcbff4f) | Other product |
| [`mepr_rules_list`](royazran--mcp-ads.tools-018.md#tool-mepr_rules_list-f63b626e) | Other product |
| [`mepr_rules_create`](royazran--mcp-ads.tools-018.md#tool-mepr_rules_create-75336952) | Other product |
| [`pmp_levels_list`](royazran--mcp-ads.tools-018.md#tool-pmp_levels_list-1a3b1517) | Other product |
| [`pmp_levels_create`](royazran--mcp-ads.tools-018.md#tool-pmp_levels_create-b9cf43c2) | Other product |
| [`pmp_members_list`](royazran--mcp-ads.tools-018.md#tool-pmp_members_list-fb350b2d) | Other product |
| [`pmp_orders_list`](royazran--mcp-ads.tools-018.md#tool-pmp_orders_list-68aa3828) | Other product |
| [`pmp_discount_codes_create`](royazran--mcp-ads.tools-018.md#tool-pmp_discount_codes_create-a74b1e2e) | Other product |
| [`rcp_levels_list`](royazran--mcp-ads.tools-018.md#tool-rcp_levels_list-0600329b) | Other product |
| [`rcp_members_list`](royazran--mcp-ads.tools-018.md#tool-rcp_members_list-039f54fb) | Other product |
| [`um_forms_list`](royazran--mcp-ads.tools-018.md#tool-um_forms_list-a5a26297) | Other product |
| [`um_roles_list`](royazran--mcp-ads.tools-018.md#tool-um_roles_list-5c914a26) | Other product |
| [`wpml_languages_list`](royazran--mcp-ads.tools-018.md#tool-wpml_languages_list-43d7deb2) | Other product |
| [`wpml_language_add`](royazran--mcp-ads.tools-018.md#tool-wpml_language_add-bfd670ee) | Other product |
| [`wpml_language_set_default`](royazran--mcp-ads.tools-018.md#tool-wpml_language_set_default-ffcf3716) | Other product |
| [`wpml_post_get_translations`](royazran--mcp-ads.tools-018.md#tool-wpml_post_get_translations-218e45da) | Other product |
| [`wpml_post_create_translation`](royazran--mcp-ads.tools-018.md#tool-wpml_post_create_translation-cf801bb3) | Other product |
| [`wpml_post_link_translation`](royazran--mcp-ads.tools-018.md#tool-wpml_post_link_translation-3268c64d) | Other product |
| [`wpml_strings_list`](royazran--mcp-ads.tools-018.md#tool-wpml_strings_list-e89446c9) | Other product |
| [`wpml_string_translate`](royazran--mcp-ads.tools-018.md#tool-wpml_string_translate-8726706a) | Other product |
| [`wpml_auto_translate`](royazran--mcp-ads.tools-018.md#tool-wpml_auto_translate-9ff60a61) | Other product |
| [`wpml_taxonomy_translate`](royazran--mcp-ads.tools-018.md#tool-wpml_taxonomy_translate-253d3dd1) | Other product |
| [`wpml_media_translate`](royazran--mcp-ads.tools-018.md#tool-wpml_media_translate-87b499b2) | Other product |
| [`polylang_languages_list`](royazran--mcp-ads.tools-018.md#tool-polylang_languages_list-8a34ef18) | Other product |
| [`polylang_post_translate`](royazran--mcp-ads.tools-018.md#tool-polylang_post_translate-ead7f103) | Other product |
| [`polylang_string_translate`](royazran--mcp-ads.tools-018.md#tool-polylang_string_translate-329c4bea) | Other product |
| [`polylang_sync_translation`](royazran--mcp-ads.tools-018.md#tool-polylang_sync_translation-e21a16f9) | Other product |
| [`translatepress_strings_list`](royazran--mcp-ads.tools-018.md#tool-translatepress_strings_list-55270eb0) | Other product |
| [`translatepress_string_translate`](royazran--mcp-ads.tools-018.md#tool-translatepress_string_translate-0e9f9a22) | Other product |
| [`translatepress_auto_translate`](royazran--mcp-ads.tools-018.md#tool-translatepress_auto_translate-1a131e38) | Other product |
| [`weglot_languages_list`](royazran--mcp-ads.tools-018.md#tool-weglot_languages_list-a2cb2c88) | Other product |
| [`weglot_translate_url`](royazran--mcp-ads.tools-018.md#tool-weglot_translate_url-4a1232ee) | Other product |
| [`weglot_settings_update`](royazran--mcp-ads.tools-018.md#tool-weglot_settings_update-9d151c30) | Other product |
| [`affiliates_detect_plugin`](royazran--mcp-ads.tools-018.md#tool-affiliates_detect_plugin-04a5e0a3) | Other product |
| [`affiliates_list`](royazran--mcp-ads.tools-018.md#tool-affiliates_list-021f309b) | Other product |
| [`affiliates_create`](royazran--mcp-ads.tools-018.md#tool-affiliates_create-7ef53345) | Other product |
| [`affiliates_update`](royazran--mcp-ads.tools-018.md#tool-affiliates_update-dfa8cc07) | Other product |
| [`affiliates_referrals_list`](royazran--mcp-ads.tools-018.md#tool-affiliates_referrals_list-89091a4a) | Other product |
| [`affiliates_payouts_list`](royazran--mcp-ads.tools-018.md#tool-affiliates_payouts_list-7d15b298) | Other product |
| [`affiliates_payout_create`](royazran--mcp-ads.tools-018.md#tool-affiliates_payout_create-08a5bcf5) | Other product |
| [`affiliates_links_generate`](royazran--mcp-ads.tools-018.md#tool-affiliates_links_generate-1d840453) | Other product |
| [`affiliates_commission_set`](royazran--mcp-ads.tools-018.md#tool-affiliates_commission_set-64a8afa6) | Other product |
| [`rest_discover_routes`](royazran--mcp-ads.tools-018.md#tool-rest_discover_routes-ed4eb276) | Other product |
| [`rest_get_route_info`](royazran--mcp-ads.tools-018.md#tool-rest_get_route_info-9769a2e4) | Other product |
| [`rest_custom_call`](royazran--mcp-ads.tools-018.md#tool-rest_custom_call-dab029f4) | Other product |
| [`rest_namespace_list`](royazran--mcp-ads.tools-018.md#tool-rest_namespace_list-817d7cf0) | Other product |
| [`rest_test_endpoint`](royazran--mcp-ads.tools-019.md#tool-rest_test_endpoint-04a9851e) | Other product |
| [`graphql_detect`](royazran--mcp-ads.tools-019.md#tool-graphql_detect-af7846a3) | Other product |
| [`graphql_query`](royazran--mcp-ads.tools-019.md#tool-graphql_query-d9f35c51) | Other product |
| [`graphql_introspect`](royazran--mcp-ads.tools-019.md#tool-graphql_introspect-fe9c111f) | Other product |
| [`graphql_mutation`](royazran--mcp-ads.tools-019.md#tool-graphql_mutation-43555b29) | Other product |
| [`rest_batch_request`](royazran--mcp-ads.tools-019.md#tool-rest_batch_request-e148bbac) | Other product |
| [`a11y_audit_page`](royazran--mcp-ads.tools-019.md#tool-a11y_audit_page-ff6750c7) | Other product |
| [`a11y_check_alt_texts`](royazran--mcp-ads.tools-019.md#tool-a11y_check_alt_texts-10864b72) | Other product |
| [`a11y_check_heading_hierarchy`](royazran--mcp-ads.tools-019.md#tool-a11y_check_heading_hierarchy-33c0ada4) | Other product |
| [`a11y_check_form_labels`](royazran--mcp-ads.tools-019.md#tool-a11y_check_form_labels-7a50306c) | Other product |
| [`a11y_check_link_text`](royazran--mcp-ads.tools-019.md#tool-a11y_check_link_text-c970dc46) | Other product |
| [`a11y_check_color_contrast`](royazran--mcp-ads.tools-019.md#tool-a11y_check_color_contrast-addadeb4) | Other product |
| [`a11y_check_aria_landmarks`](royazran--mcp-ads.tools-019.md#tool-a11y_check_aria_landmarks-50197335) | Other product |
| [`a11y_fix_missing_alt`](royazran--mcp-ads.tools-019.md#tool-a11y_fix_missing_alt-69481d30) | Other product |
| [`a11y_generate_alt_text`](royazran--mcp-ads.tools-019.md#tool-a11y_generate_alt_text-67fe8de6) | Other product |
| [`a11y_skip_link_check`](royazran--mcp-ads.tools-019.md#tool-a11y_skip_link_check-7858d9e4) | Other product |
| [`a11y_detect_plugin`](royazran--mcp-ads.tools-019.md#tool-a11y_detect_plugin-f08a955a) | Other product |
| [`a11y_widget_configure`](royazran--mcp-ads.tools-019.md#tool-a11y_widget_configure-596c01f4) | Other product |
| [`backup_detect_plugin`](royazran--mcp-ads.tools-019.md#tool-backup_detect_plugin-2ddeb51f) | Other product |
| [`backup_updraft_run`](royazran--mcp-ads.tools-019.md#tool-backup_updraft_run-7e7f40b1) | Other product |
| [`backup_updraft_list`](royazran--mcp-ads.tools-019.md#tool-backup_updraft_list-b00e5e61) | Other product |
| [`backup_updraft_restore`](royazran--mcp-ads.tools-019.md#tool-backup_updraft_restore-9815837b) | Other product |
| [`backup_updraft_schedule_get`](royazran--mcp-ads.tools-019.md#tool-backup_updraft_schedule_get-a21fa481) | Other product |
| [`backup_updraft_schedule_set`](royazran--mcp-ads.tools-019.md#tool-backup_updraft_schedule_set-4580a392) | Other product |
| [`backup_updraft_settings_get`](royazran--mcp-ads.tools-019.md#tool-backup_updraft_settings_get-615bae58) | Other product |
| [`backup_aio_export`](royazran--mcp-ads.tools-019.md#tool-backup_aio_export-412c4059) | Other product |
| [`backup_aio_import`](royazran--mcp-ads.tools-019.md#tool-backup_aio_import-35f661ed) | Other product |
| [`backup_duplicator_list`](royazran--mcp-ads.tools-019.md#tool-backup_duplicator_list-74f5406c) | Other product |
| [`backup_duplicator_create`](royazran--mcp-ads.tools-019.md#tool-backup_duplicator_create-849d0b86) | Other product |
| [`backup_wpvivid_run`](royazran--mcp-ads.tools-019.md#tool-backup_wpvivid_run-cfb3cf48) | Other product |
| [`backup_wpvivid_list`](royazran--mcp-ads.tools-019.md#tool-backup_wpvivid_list-2b81732b) | Other product |
| [`backup_get_status`](royazran--mcp-ads.tools-019.md#tool-backup_get_status-8b2983b0) | Other product |
| [`backup_export_db_tables`](royazran--mcp-ads.tools-019.md#tool-backup_export_db_tables-b94ca589) | Other product |
| [`cdn_detect_service`](royazran--mcp-ads.tools-019.md#tool-cdn_detect_service-3d245cea) | Other product |
| [`cdn_cloudflare_purge`](royazran--mcp-ads.tools-019.md#tool-cdn_cloudflare_purge-6bb216a9) | Other product |
| [`cdn_cloudflare_dev_mode_toggle`](royazran--mcp-ads.tools-019.md#tool-cdn_cloudflare_dev_mode_toggle-b47f201b) | Other product |
| [`cdn_cloudflare_security_level`](royazran--mcp-ads.tools-019.md#tool-cdn_cloudflare_security_level-911ec0cb) | Other product |
| [`cdn_bunny_purge`](royazran--mcp-ads.tools-019.md#tool-cdn_bunny_purge-b5fdce5a) | Other product |
| [`cdn_configure_wp_rocket_cdn`](royazran--mcp-ads.tools-019.md#tool-cdn_configure_wp_rocket_cdn-f4628dee) | Other product |
| [`cdn_configure_w3tc_cdn`](royazran--mcp-ads.tools-019.md#tool-cdn_configure_w3tc_cdn-8f4b1661) | Other product |
| [`cdn_offload_media_s3`](royazran--mcp-ads.tools-019.md#tool-cdn_offload_media_s3-4cc92159) | Other product |
| [`cdn_offload_media_cloudinary`](royazran--mcp-ads.tools-019.md#tool-cdn_offload_media_cloudinary-50c38079) | Other product |
| [`cdn_get_status`](royazran--mcp-ads.tools-019.md#tool-cdn_get_status-35efe44a) | Other product |
| [`cdn_configure_url_rewriting`](royazran--mcp-ads.tools-019.md#tool-cdn_configure_url_rewriting-5c03e631) | Other product |
| [`cdn_test_response_headers`](royazran--mcp-ads.tools-019.md#tool-cdn_test_response_headers-70e657e0) | Other product |
| [`cron_list_events`](royazran--mcp-ads.tools-019.md#tool-cron_list_events-5ad3067a) | Other product |
| [`cron_list_schedules`](royazran--mcp-ads.tools-019.md#tool-cron_list_schedules-bcbfa598) | Other product |
| [`cron_create_event`](royazran--mcp-ads.tools-019.md#tool-cron_create_event-d3c1cada) | Other product |
| [`cron_delete_event`](royazran--mcp-ads.tools-019.md#tool-cron_delete_event-64a0b302) | Other product |
| [`cron_run_now`](royazran--mcp-ads.tools-019.md#tool-cron_run_now-feb1d6e3) | Other product |
| [`cron_next_run`](royazran--mcp-ads.tools-019.md#tool-cron_next_run-638bb11e) | Other product |
| [`cron_register_schedule`](royazran--mcp-ads.tools-019.md#tool-cron_register_schedule-3ed10222) | Other product |
| [`cron_wp_cron_status`](royazran--mcp-ads.tools-019.md#tool-cron_wp_cron_status-da6eb95a) | Other product |
| [`cron_disable_wp_cron`](royazran--mcp-ads.tools-019.md#tool-cron_disable_wp_cron-1da68ae1) | Other product |
| [`cron_detect_plugin`](royazran--mcp-ads.tools-019.md#tool-cron_detect_plugin-34d14694) | Other product |
| [`cron_crontrol_list`](royazran--mcp-ads.tools-019.md#tool-cron_crontrol_list-5579abcd) | Other product |
| [`cron_crontrol_add`](royazran--mcp-ads.tools-019.md#tool-cron_crontrol_add-0b28b295) | Other product |
| [`db_tables_list`](royazran--mcp-ads.tools-019.md#tool-db_tables_list-81c8a4f2) | Other product |
| [`db_table_size`](royazran--mcp-ads.tools-019.md#tool-db_table_size-ef2392a9) | Other product |
| [`db_query_select`](royazran--mcp-ads.tools-019.md#tool-db_query_select-6d3a8375) | Other product |
| [`db_query_count`](royazran--mcp-ads.tools-019.md#tool-db_query_count-e05a3abc) | Other product |
| [`db_optimize_tables`](royazran--mcp-ads.tools-019.md#tool-db_optimize_tables-61d8dc31) | Other product |
| [`db_repair_tables`](royazran--mcp-ads.tools-019.md#tool-db_repair_tables-95e5cfda) | Other product |
| [`db_get_options`](royazran--mcp-ads.tools-019.md#tool-db_get_options-fa3efb57) | Other product |
| [`db_set_option`](royazran--mcp-ads.tools-019.md#tool-db_set_option-dcda64d4) | Other product |
| [`db_delete_option`](royazran--mcp-ads.tools-019.md#tool-db_delete_option-e5e66c22) | Other product |
| [`db_search_options`](royazran--mcp-ads.tools-019.md#tool-db_search_options-d1078e25) | Other product |
| [`db_get_autoloaded_size`](royazran--mcp-ads.tools-019.md#tool-db_get_autoloaded_size-d52b9fc0) | Other product |
| [`db_cleanup_orphaned_postmeta`](royazran--mcp-ads.tools-019.md#tool-db_cleanup_orphaned_postmeta-2f282697) | Other product |
| [`db_cleanup_orphaned_commentmeta`](royazran--mcp-ads.tools-019.md#tool-db_cleanup_orphaned_commentmeta-fb48d9a3) | Other product |
| [`db_cleanup_orphaned_termmeta`](royazran--mcp-ads.tools-019.md#tool-db_cleanup_orphaned_termmeta-40d5e627) | Other product |
| [`db_get_table_prefix`](royazran--mcp-ads.tools-019.md#tool-db_get_table_prefix-7852fab8) | Other product |
| [`dev_wp_cli_run`](royazran--mcp-ads.tools-019.md#tool-dev_wp_cli_run-4b27a400) | Other product |
| [`dev_debug_mode_get`](royazran--mcp-ads.tools-019.md#tool-dev_debug_mode_get-c412c764) | Other product |
| [`dev_debug_mode_set`](royazran--mcp-ads.tools-019.md#tool-dev_debug_mode_set-a8a4482d) | Other product |
| [`dev_debug_log_read`](royazran--mcp-ads.tools-019.md#tool-dev_debug_log_read-9310183b) | Other product |
| [`dev_debug_log_clear`](royazran--mcp-ads.tools-019.md#tool-dev_debug_log_clear-be0896c4) | Other product |
| [`dev_error_log_read`](royazran--mcp-ads.tools-019.md#tool-dev_error_log_read-d4e761f4) | Other product |
| [`dev_query_monitor_data`](royazran--mcp-ads.tools-019.md#tool-dev_query_monitor_data-a705eabc) | Other product |
| [`dev_code_snippets_list`](royazran--mcp-ads.tools-019.md#tool-dev_code_snippets_list-674d8fa7) | Other product |
| [`dev_code_snippets_create`](royazran--mcp-ads.tools-019.md#tool-dev_code_snippets_create-37b37882) | Other product |
| [`dev_code_snippets_update`](royazran--mcp-ads.tools-019.md#tool-dev_code_snippets_update-7b3e6d09) | Other product |
| [`dev_code_snippets_toggle`](royazran--mcp-ads.tools-019.md#tool-dev_code_snippets_toggle-5d83940a) | Other product |
| [`dev_code_snippets_delete`](royazran--mcp-ads.tools-019.md#tool-dev_code_snippets_delete-a5c54f33) | Other product |
| [`dev_hooks_list`](royazran--mcp-ads.tools-019.md#tool-dev_hooks_list-a89181b2) | Other product |
| [`dev_constants_get`](royazran--mcp-ads.tools-019.md#tool-dev_constants_get-50c1a64c) | Other product |
| [`dev_constants_set`](royazran--mcp-ads.tools-019.md#tool-dev_constants_set-8b3dfafe) | Other product |
| [`dev_wp_config_read`](royazran--mcp-ads.tools-019.md#tool-dev_wp_config_read-f0adf5cf) | Other product |
| [`dev_file_read`](royazran--mcp-ads.tools-019.md#tool-dev_file_read-a4e7284f) | Other product |
| [`dev_file_write`](royazran--mcp-ads.tools-019.md#tool-dev_file_write-ee9d1632) | Other product |
| [`dev_theme_file_list`](royazran--mcp-ads.tools-019.md#tool-dev_theme_file_list-dc737f13) | Other product |
| [`dev_eval_php`](royazran--mcp-ads.tools-019.md#tool-dev_eval_php-7a784ebf) | Other product |
| [`multisite_detect`](royazran--mcp-ads.tools-019.md#tool-multisite_detect-22221c33) | Other product |
| [`multisite_sites_list`](royazran--mcp-ads.tools-019.md#tool-multisite_sites_list-023e342c) | Other product |
| [`multisite_site_create`](royazran--mcp-ads.tools-019.md#tool-multisite_site_create-8a0ebb28) | Other product |
| [`multisite_site_update`](royazran--mcp-ads.tools-019.md#tool-multisite_site_update-0c572a29) | Other product |
| [`multisite_site_delete`](royazran--mcp-ads.tools-019.md#tool-multisite_site_delete-8783db7a) | Other product |
| [`multisite_site_activate`](royazran--mcp-ads.tools-019.md#tool-multisite_site_activate-4ccb322d) | Other product |
| [`multisite_site_deactivate`](royazran--mcp-ads.tools-019.md#tool-multisite_site_deactivate-ebc67a7e) | Other product |
| [`multisite_site_archive`](royazran--mcp-ads.tools-019.md#tool-multisite_site_archive-2508042d) | Other product |
| [`multisite_users_list`](royazran--mcp-ads.tools-019.md#tool-multisite_users_list-b6c44eb1) | Other product |
| [`multisite_user_add_to_site`](royazran--mcp-ads.tools-019.md#tool-multisite_user_add_to_site-b6a16dd6) | Other product |
| [`multisite_user_remove_from_site`](royazran--mcp-ads.tools-019.md#tool-multisite_user_remove_from_site-5bacb83a) | Other product |
| [`multisite_themes_network_enable`](royazran--mcp-ads.tools-019.md#tool-multisite_themes_network_enable-5c1a3094) | Other product |
| [`multisite_plugins_network_activate`](royazran--mcp-ads.tools-019.md#tool-multisite_plugins_network_activate-8362a6b5) | Other product |
| [`multisite_network_settings_get`](royazran--mcp-ads.tools-019.md#tool-multisite_network_settings_get-ff97ce2f) | Other product |
| [`multisite_network_settings_update`](royazran--mcp-ads.tools-019.md#tool-multisite_network_settings_update-159bbd9b) | Other product |
| [`privacy_policy_page_get`](royazran--mcp-ads.tools-019.md#tool-privacy_policy_page_get-cd018d5a) | Other product |
| [`privacy_policy_page_set`](royazran--mcp-ads.tools-019.md#tool-privacy_policy_page_set-30c8ff0c) | Other product |
| [`privacy_export_request_create`](royazran--mcp-ads.tools-019.md#tool-privacy_export_request_create-71a44fe5) | Other product |
| [`privacy_erasure_request_create`](royazran--mcp-ads.tools-019.md#tool-privacy_erasure_request_create-9334ac27) | Other product |
| [`privacy_requests_list`](royazran--mcp-ads.tools-019.md#tool-privacy_requests_list-28d968c3) | Other product |
| [`privacy_cookie_banner_detect`](royazran--mcp-ads.tools-019.md#tool-privacy_cookie_banner_detect-4c33b285) | Other product |
| [`privacy_cookie_banner_configure`](royazran--mcp-ads.tools-019.md#tool-privacy_cookie_banner_configure-8f6e615b) | Other product |
| [`privacy_cookie_categories_set`](royazran--mcp-ads.tools-019.md#tool-privacy_cookie_categories_set-bcf6a394) | Other product |
| [`privacy_data_retention_configure`](royazran--mcp-ads.tools-019.md#tool-privacy_data_retention_configure-9361f538) | Other product |
| [`privacy_consent_log_list`](royazran--mcp-ads.tools-019.md#tool-privacy_consent_log_list-58553443) | Other product |
| [`privacy_dpa_info`](royazran--mcp-ads.tools-019.md#tool-privacy_dpa_info-041210a3) | Other product |
| [`privacy_ccpa_configure`](royazran--mcp-ads.tools-019.md#tool-privacy_ccpa_configure-bd2b4909) | Other product |
| [`clone_analyze_url`](royazran--mcp-ads.tools-019.md#tool-clone_analyze_url-bd95b438) | Other product |
| [`clone_analyze_full_site`](royazran--mcp-ads.tools-019.md#tool-clone_analyze_full_site-bdbcf046) | Other product |
| [`clone_download_images`](royazran--mcp-ads.tools-019.md#tool-clone_download_images-b5ebddf2) | Other product |
| [`clone_extract_colors`](royazran--mcp-ads.tools-019.md#tool-clone_extract_colors-5a8d51f6) | Other product |
| [`clone_extract_fonts`](royazran--mcp-ads.tools-019.md#tool-clone_extract_fonts-8e8d9618) | Other product |
| [`clone_extract_menu`](royazran--mcp-ads.tools-019.md#tool-clone_extract_menu-34171ab7) | Other product |
| [`clone_extract_footer`](royazran--mcp-ads.tools-019.md#tool-clone_extract_footer-f1328051) | Other product |
| [`clone_build_page_plan`](royazran--mcp-ads.tools-019.md#tool-clone_build_page_plan-89924e36) | Other product |
| [`clone_create_page_from_url`](royazran--mcp-ads.tools-019.md#tool-clone_create_page_from_url-574540c8) | Other product |
| [`clone_replicate_section`](royazran--mcp-ads.tools-019.md#tool-clone_replicate_section-2eaad349) | Other product |
| [`clone_map_colors_to_kit`](royazran--mcp-ads.tools-019.md#tool-clone_map_colors_to_kit-77c336fb) | Other product |
| [`clone_map_fonts_to_kit`](royazran--mcp-ads.tools-019.md#tool-clone_map_fonts_to_kit-c542eff5) | Other product |
| [`clone_full_site`](royazran--mcp-ads.tools-019.md#tool-clone_full_site-3b13b806) | Other product |
| [`clone_get_page_html`](royazran--mcp-ads.tools-019.md#tool-clone_get_page_html-a9ce47cd) | Other product |
| [`clone_parse_html_sections`](royazran--mcp-ads.tools-019.md#tool-clone_parse_html_sections-47be03f9) | Other product |
| [`clone_detect_layout_type`](royazran--mcp-ads.tools-019.md#tool-clone_detect_layout_type-d756e761) | Other product |
| [`clone_suggest_elementor_widgets`](royazran--mcp-ads.tools-019.md#tool-clone_suggest_elementor_widgets-1b8f92f8) | Other product |
| [`clone_create_style_guide`](royazran--mcp-ads.tools-019.md#tool-clone_create_style_guide-808ea0cc) | Other product |
| [`clone_compare_original_vs_clone`](royazran--mcp-ads.tools-019.md#tool-clone_compare_original_vs_clone-0d12f686) | Other product |
| [`clone_status`](royazran--mcp-ads.tools-019.md#tool-clone_status-e85bd803) | Other product |
| [`smtp_detect_plugin`](royazran--mcp-ads.tools-019.md#tool-smtp_detect_plugin-377720fe) | Other product |
| [`smtp_configure`](royazran--mcp-ads.tools-019.md#tool-smtp_configure-dd552ad4) | Other product |
| [`smtp_configure_provider`](royazran--mcp-ads.tools-019.md#tool-smtp_configure_provider-4c14da09) | Other product |
| [`smtp_test_send`](royazran--mcp-ads.tools-019.md#tool-smtp_test_send-b0dd858a) | Other product |
| [`smtp_get_failed_log`](royazran--mcp-ads.tools-019.md#tool-smtp_get_failed_log-96e99623) | Other product |
| [`smtp_retry_failed`](royazran--mcp-ads.tools-019.md#tool-smtp_retry_failed-5e23ee2a) | Other product |
| [`smtp_get_sent_log`](royazran--mcp-ads.tools-019.md#tool-smtp_get_sent_log-bf1a111d) | Other product |
| [`smtp_check_spf_dkim`](royazran--mcp-ads.tools-019.md#tool-smtp_check_spf_dkim-2b3bde07) | Other product |
| [`smtp_email_templates_list`](royazran--mcp-ads.tools-019.md#tool-smtp_email_templates_list-c06847e0) | Other product |
| [`smtp_email_template_customize`](royazran--mcp-ads.tools-019.md#tool-smtp_email_template_customize-1cf5b30b) | Other product |
| [`speed_audit`](royazran--mcp-ads.tools-019.md#tool-speed_audit-83e95cd8) | Other product |
| [`speed_check_images`](royazran--mcp-ads.tools-020.md#tool-speed_check_images-3288024b) | Other product |
| [`speed_compress_images`](royazran--mcp-ads.tools-020.md#tool-speed_compress_images-92c5c5ee) | Other product |
| [`speed_convert_webp`](royazran--mcp-ads.tools-020.md#tool-speed_convert_webp-a6e9a0e0) | Other product |
| [`speed_enable_lazy_load`](royazran--mcp-ads.tools-020.md#tool-speed_enable_lazy_load-f7025097) | Other product |
| [`speed_check_caching`](royazran--mcp-ads.tools-020.md#tool-speed_check_caching-f202c1a8) | Other product |
| [`speed_configure_caching`](royazran--mcp-ads.tools-020.md#tool-speed_configure_caching-c92f7512) | Other product |
| [`speed_check_gzip`](royazran--mcp-ads.tools-020.md#tool-speed_check_gzip-c5e02041) | Other product |
| [`speed_enable_gzip`](royazran--mcp-ads.tools-020.md#tool-speed_enable_gzip-35ccc11c) | Other product |
| [`speed_check_minification`](royazran--mcp-ads.tools-020.md#tool-speed_check_minification-e08f2322) | Other product |
| [`speed_enable_minification`](royazran--mcp-ads.tools-020.md#tool-speed_enable_minification-4e62acea) | Other product |
| [`speed_find_render_blocking`](royazran--mcp-ads.tools-020.md#tool-speed_find_render_blocking-aa8acf22) | Other product |
| [`speed_defer_js`](royazran--mcp-ads.tools-020.md#tool-speed_defer_js-2a62874e) | Other product |
| [`speed_critical_css_generate`](royazran--mcp-ads.tools-020.md#tool-speed_critical_css_generate-6e0db851) | Other product |
| [`speed_remove_unused_css`](royazran--mcp-ads.tools-020.md#tool-speed_remove_unused_css-a5798017) | Other product |
| [`speed_check_database`](royazran--mcp-ads.tools-020.md#tool-speed_check_database-998e950c) | Other product |
| [`speed_optimize_database`](royazran--mcp-ads.tools-020.md#tool-speed_optimize_database-f9ac4c36) | Other product |
| [`speed_check_hosting_response`](royazran--mcp-ads.tools-020.md#tool-speed_check_hosting_response-90f4559c) | Other product |
| [`speed_preload_key_requests`](royazran--mcp-ads.tools-020.md#tool-speed_preload_key_requests-9c4eaf5f) | Other product |
| [`speed_get_recommendations`](royazran--mcp-ads.tools-020.md#tool-speed_get_recommendations-9a2ae84e) | Other product |
| [`qa_check_page_status`](royazran--mcp-ads.tools-020.md#tool-qa_check_page_status-c56aa6c1) | Other product |
| [`qa_check_all_pages`](royazran--mcp-ads.tools-020.md#tool-qa_check_all_pages-7f0ae526) | Other product |
| [`qa_check_broken_images`](royazran--mcp-ads.tools-020.md#tool-qa_check_broken_images-9339e157) | Other product |
| [`qa_check_missing_meta`](royazran--mcp-ads.tools-020.md#tool-qa_check_missing_meta-1b337732) | Other product |
| [`qa_check_missing_alt_text`](royazran--mcp-ads.tools-020.md#tool-qa_check_missing_alt_text-929d1812) | Other product |
| [`qa_check_empty_pages`](royazran--mcp-ads.tools-020.md#tool-qa_check_empty_pages-668ab0b9) | Other product |
| [`qa_check_draft_pages`](royazran--mcp-ads.tools-020.md#tool-qa_check_draft_pages-be4d4549) | Other product |
| [`qa_check_orphaned_pages`](royazran--mcp-ads.tools-020.md#tool-qa_check_orphaned_pages-2c77308b) | Other product |
| [`qa_check_broken_links`](royazran--mcp-ads.tools-020.md#tool-qa_check_broken_links-af9c9a5d) | Other product |
| [`qa_check_heading_hierarchy`](royazran--mcp-ads.tools-020.md#tool-qa_check_heading_hierarchy-1348a75e) | Other product |
| [`qa_full_site_audit`](royazran--mcp-ads.tools-020.md#tool-qa_full_site_audit-64ee281e) | Other product |
| [`qa_generate_report`](royazran--mcp-ads.tools-020.md#tool-qa_generate_report-0e46ee7c) | Other product |
| [`webhooks_wc_list`](royazran--mcp-ads.tools-020.md#tool-webhooks_wc_list-eac6a8c7) | Other product |
| [`webhooks_wc_create`](royazran--mcp-ads.tools-020.md#tool-webhooks_wc_create-7cfb7f90) | Other product |
| [`webhooks_wc_update`](royazran--mcp-ads.tools-020.md#tool-webhooks_wc_update-34c30c02) | Other product |
| [`webhooks_wc_delete`](royazran--mcp-ads.tools-020.md#tool-webhooks_wc_delete-78eecf84) | Other product |
| [`webhooks_wp_register`](royazran--mcp-ads.tools-020.md#tool-webhooks_wp_register-ead30a86) | Other product |
| [`webhooks_wp_list`](royazran--mcp-ads.tools-020.md#tool-webhooks_wp_list-1007dba4) | Other product |
| [`webhooks_wp_delete`](royazran--mcp-ads.tools-020.md#tool-webhooks_wp_delete-d3216355) | Other product |
| [`webhooks_zapier_detect`](royazran--mcp-ads.tools-020.md#tool-webhooks_zapier_detect-0c8e20da) | Other product |
| [`webhooks_zapier_triggers_list`](royazran--mcp-ads.tools-020.md#tool-webhooks_zapier_triggers_list-867870c3) | Other product |
| [`webhooks_make_detect`](royazran--mcp-ads.tools-020.md#tool-webhooks_make_detect-25e87477) | Other product |
| [`webhooks_n8n_configure`](royazran--mcp-ads.tools-020.md#tool-webhooks_n8n_configure-1e73ee7f) | Other product |
| [`webhooks_test_send`](royazran--mcp-ads.tools-020.md#tool-webhooks_test_send-c2b53bbf) | Other product |
| [`webhooks_incoming_create`](royazran--mcp-ads.tools-020.md#tool-webhooks_incoming_create-6cd30250) | Other product |
| [`webhooks_log_list`](royazran--mcp-ads.tools-020.md#tool-webhooks_log_list-6cd82d98) | Other product |
| [`webhooks_retry_failed`](royazran--mcp-ads.tools-020.md#tool-webhooks_retry_failed-fd28f185) | Other product |
| [`snippet_check_plugin`](royazran--mcp-ads.tools-020.md#tool-snippet_check_plugin-bf841808) | Other product |
| [`snippet_list`](royazran--mcp-ads.tools-020.md#tool-snippet_list-6c32f7aa) | Other product |
| [`snippet_get`](royazran--mcp-ads.tools-020.md#tool-snippet_get-74cf7aa7) | Other product |
| [`snippet_create`](royazran--mcp-ads.tools-020.md#tool-snippet_create-93b9e33a) | Other product |
| [`snippet_update`](royazran--mcp-ads.tools-020.md#tool-snippet_update-3d164053) | Other product |
| [`snippet_delete`](royazran--mcp-ads.tools-020.md#tool-snippet_delete-2661600d) | Other product |
| [`snippet_enable`](royazran--mcp-ads.tools-020.md#tool-snippet_enable-5d052b2d) | Other product |
| [`snippet_disable`](royazran--mcp-ads.tools-020.md#tool-snippet_disable-01f183f7) | Other product |
| [`snippet_search`](royazran--mcp-ads.tools-020.md#tool-snippet_search-f6f669da) | Other product |
| [`snippet_bulk_toggle`](royazran--mcp-ads.tools-020.md#tool-snippet_bulk_toggle-016b7c8d) | Other product |
| [`snippet_clone`](royazran--mcp-ads.tools-020.md#tool-snippet_clone-9c1ba4bf) | Other product |
| [`snippet_create_php`](royazran--mcp-ads.tools-020.md#tool-snippet_create_php-4f792b43) | Other product |
| [`snippet_create_css`](royazran--mcp-ads.tools-020.md#tool-snippet_create_css-5b1ffc73) | Other product |
| [`snippet_create_js`](royazran--mcp-ads.tools-020.md#tool-snippet_create_js-db65e806) | Other product |
| [`snippet_create_html`](royazran--mcp-ads.tools-020.md#tool-snippet_create_html-316dc100) | Other product |
| [`snippet_create_shortcode`](royazran--mcp-ads.tools-020.md#tool-snippet_create_shortcode-c2fcf7b6) | Other product |
| [`snippet_create_action_hook`](royazran--mcp-ads.tools-020.md#tool-snippet_create_action_hook-d8c0400b) | Other product |
| [`snippet_create_filter_hook`](royazran--mcp-ads.tools-020.md#tool-snippet_create_filter_hook-e6a3a981) | Other product |
| [`snippet_inject_header`](royazran--mcp-ads.tools-020.md#tool-snippet_inject_header-3bc49444) | Other product |
| [`snippet_inject_footer`](royazran--mcp-ads.tools-020.md#tool-snippet_inject_footer-4b410188) | Other product |
| [`snippet_inject_via_options`](royazran--mcp-ads.tools-020.md#tool-snippet_inject_via_options-10b9f2bd) | Other product |
| [`snippet_get_options_injection`](royazran--mcp-ads.tools-020.md#tool-snippet_get_options_injection-6e2b5616) | Other product |
| [`snippet_wpcode_get_locations`](royazran--mcp-ads.tools-020.md#tool-snippet_wpcode_get_locations-e0d6fac1) | Other product |
| [`snippet_wpcode_set_location`](royazran--mcp-ads.tools-020.md#tool-snippet_wpcode_set_location-be4fb22d) | Other product |
| [`snippet_export`](royazran--mcp-ads.tools-020.md#tool-snippet_export-49602d49) | Other product |
| [`snippet_get_stats`](royazran--mcp-ads.tools-020.md#tool-snippet_get_stats-178df838) | Other product |
| [`aiseo_llmstxt_generate`](royazran--mcp-ads.tools-020.md#tool-aiseo_llmstxt_generate-5691f012) | Other product |
| [`aiseo_llmstxt_get`](royazran--mcp-ads.tools-020.md#tool-aiseo_llmstxt_get-3cd73150) | Other product |
| [`aiseo_llmstxt_update`](royazran--mcp-ads.tools-020.md#tool-aiseo_llmstxt_update-2d3c0c63) | Other product |
| [`aiseo_robots_txt_get`](royazran--mcp-ads.tools-020.md#tool-aiseo_robots_txt_get-be02e51d) | Other product |
| [`aiseo_robots_txt_update`](royazran--mcp-ads.tools-020.md#tool-aiseo_robots_txt_update-e2ccb8c7) | Other product |
| [`aiseo_topical_authority_map`](royazran--mcp-ads.tools-020.md#tool-aiseo_topical_authority_map-0ee2513c) | Other product |
| [`aiseo_topical_gap_analysis`](royazran--mcp-ads.tools-020.md#tool-aiseo_topical_gap_analysis-444fb55c) | Other product |
| [`aiseo_content_audit`](royazran--mcp-ads.tools-020.md#tool-aiseo_content_audit-cd615c68) | Other product |
| [`aiseo_structured_answers_generate`](royazran--mcp-ads.tools-020.md#tool-aiseo_structured_answers_generate-38c9b139) | Other product |
| [`aiseo_key_takeaways_generate`](royazran--mcp-ads.tools-020.md#tool-aiseo_key_takeaways_generate-7699af67) | Other product |
| [`aiseo_entity_extract`](royazran--mcp-ads.tools-020.md#tool-aiseo_entity_extract-440ada5a) | Other product |
| [`aiseo_internal_linking_suggest`](royazran--mcp-ads.tools-020.md#tool-aiseo_internal_linking_suggest-01fb2cb9) | Other product |
| [`aiseo_internal_linking_report`](royazran--mcp-ads.tools-020.md#tool-aiseo_internal_linking_report-2d95810f) | Other product |
| [`aiseo_keyword_density_check`](royazran--mcp-ads.tools-020.md#tool-aiseo_keyword_density_check-605fc304) | Other product |
| [`aiseo_readability_score`](royazran--mcp-ads.tools-020.md#tool-aiseo_readability_score-a7a237da) | Other product |
| [`aiseo_content_length_audit`](royazran--mcp-ads.tools-020.md#tool-aiseo_content_length_audit-c3ccc0d6) | Other product |
| [`aiseo_heading_structure_audit`](royazran--mcp-ads.tools-020.md#tool-aiseo_heading_structure_audit-0657731d) | Other product |
| [`aiseo_image_seo_audit`](royazran--mcp-ads.tools-020.md#tool-aiseo_image_seo_audit-31423825) | Other product |
| [`redirects_detect_plugin`](royazran--mcp-ads.tools-020.md#tool-redirects_detect_plugin-a6301939) | Other product |
| [`redirects_list`](royazran--mcp-ads.tools-020.md#tool-redirects_list-02717c78) | Other product |
| [`redirects_create`](royazran--mcp-ads.tools-020.md#tool-redirects_create-5633fe9c) | Other product |
| [`redirects_update`](royazran--mcp-ads.tools-020.md#tool-redirects_update-2de3c95c) | Other product |
| [`redirects_delete`](royazran--mcp-ads.tools-020.md#tool-redirects_delete-338776e5) | Other product |
| [`redirects_bulk_import`](royazran--mcp-ads.tools-020.md#tool-redirects_bulk_import-d440d0c3) | Other product |
| [`redirects_export`](royazran--mcp-ads.tools-020.md#tool-redirects_export-727ec82b) | Other product |
| [`redirects_groups_list`](royazran--mcp-ads.tools-020.md#tool-redirects_groups_list-0e6cb3d0) | Other product |
| [`redirects_groups_create`](royazran--mcp-ads.tools-020.md#tool-redirects_groups_create-5e33dfd2) | Other product |
| [`redirects_404_list`](royazran--mcp-ads.tools-020.md#tool-redirects_404_list-bebade11) | Other product |
| [`redirects_404_to_redirect`](royazran--mcp-ads.tools-020.md#tool-redirects_404_to_redirect-5e7904f0) | Other product |
| [`redirects_test`](royazran--mcp-ads.tools-020.md#tool-redirects_test-a03c1039) | Other product |
| [`redirects_htaccess_add`](royazran--mcp-ads.tools-020.md#tool-redirects_htaccess_add-aa97c38d) | Other product |
| [`redirects_htaccess_read`](royazran--mcp-ads.tools-020.md#tool-redirects_htaccess_read-0742c5ba) | Other product |
| [`redirects_nginx_generate`](royazran--mcp-ads.tools-020.md#tool-redirects_nginx_generate-248eeb69) | Other product |
| [`schema_set_for_post`](royazran--mcp-ads.tools-020.md#tool-schema_set_for_post-dc5c6ac5) | Other product |
| [`schema_get_for_post`](royazran--mcp-ads.tools-020.md#tool-schema_get_for_post-3294bde2) | Other product |
| [`schema_remove_from_post`](royazran--mcp-ads.tools-020.md#tool-schema_remove_from_post-c182057e) | Other product |
| [`schema_validate`](royazran--mcp-ads.tools-020.md#tool-schema_validate-f9d1b98b) | Other product |
| [`schema_generate_article`](royazran--mcp-ads.tools-020.md#tool-schema_generate_article-4fce3dff) | Other product |
| [`schema_generate_product`](royazran--mcp-ads.tools-020.md#tool-schema_generate_product-9f70b710) | Other product |
| [`schema_generate_local_business`](royazran--mcp-ads.tools-020.md#tool-schema_generate_local_business-62d1b2fa) | Other product |
| [`schema_generate_faq`](royazran--mcp-ads.tools-020.md#tool-schema_generate_faq-3cb6d305) | Other product |
| [`schema_generate_howto`](royazran--mcp-ads.tools-020.md#tool-schema_generate_howto-15ee29ca) | Other product |
| [`schema_generate_recipe`](royazran--mcp-ads.tools-020.md#tool-schema_generate_recipe-9d46cb31) | Other product |
| [`schema_generate_event`](royazran--mcp-ads.tools-020.md#tool-schema_generate_event-b0ee9d31) | Other product |
| [`schema_generate_breadcrumbs`](royazran--mcp-ads.tools-020.md#tool-schema_generate_breadcrumbs-2eed6481) | Other product |
| [`schema_generate_organization`](royazran--mcp-ads.tools-020.md#tool-schema_generate_organization-fa854514) | Other product |
| [`schema_generate_video`](royazran--mcp-ads.tools-020.md#tool-schema_generate_video-5840c75b) | Other product |
| [`schema_generate_review`](royazran--mcp-ads.tools-020.md#tool-schema_generate_review-d2e6662e) | Other product |
| [`schema_generate_job_posting`](royazran--mcp-ads.tools-020.md#tool-schema_generate_job_posting-cd29ff92) | Other product |
| [`schema_generate_real_estate`](royazran--mcp-ads.tools-020.md#tool-schema_generate_real_estate-36bae93c) | Other product |
| [`schema_bulk_apply`](royazran--mcp-ads.tools-020.md#tool-schema_bulk_apply-971fe512) | Other product |
| [`schema_audit_site`](royazran--mcp-ads.tools-020.md#tool-schema_audit_site-05788a26) | Other product |
| [`schema_custom_jsonld`](royazran--mcp-ads.tools-020.md#tool-schema_custom_jsonld-6405ebff) | Other product |
| [`aioseo_meta_get`](royazran--mcp-ads.tools-020.md#tool-aioseo_meta_get-40504147) | Other product |
| [`aioseo_meta_set`](royazran--mcp-ads.tools-020.md#tool-aioseo_meta_set-7c2c468f) | Other product |
| [`aioseo_meta_bulk_set`](royazran--mcp-ads.tools-020.md#tool-aioseo_meta_bulk_set-ab013406) | Other product |
| [`aioseo_schema_set`](royazran--mcp-ads.tools-020.md#tool-aioseo_schema_set-77df3947) | Other product |
| [`aioseo_redirects_list`](royazran--mcp-ads.tools-020.md#tool-aioseo_redirects_list-8cbc974c) | Other product |
| [`aioseo_redirects_create`](royazran--mcp-ads.tools-020.md#tool-aioseo_redirects_create-8c27148c) | Other product |
| [`aioseo_sitemap_config`](royazran--mcp-ads.tools-020.md#tool-aioseo_sitemap_config-fcb21429) | Other product |
| [`seopress_meta_get`](royazran--mcp-ads.tools-020.md#tool-seopress_meta_get-c8497a23) | Other product |
| [`seopress_meta_set`](royazran--mcp-ads.tools-020.md#tool-seopress_meta_set-6f83f903) | Other product |
| [`seopress_redirects_list`](royazran--mcp-ads.tools-020.md#tool-seopress_redirects_list-1809b90c) | Other product |
| [`seopress_redirects_create`](royazran--mcp-ads.tools-020.md#tool-seopress_redirects_create-82d2019d) | Other product |
| [`seo_plugin_detect`](royazran--mcp-ads.tools-020.md#tool-seo_plugin_detect-05166d57) | Other product |
| [`seo_meta_get_universal`](royazran--mcp-ads.tools-020.md#tool-seo_meta_get_universal-4a0d560c) | Other product |
| [`seo_meta_set_universal`](royazran--mcp-ads.tools-020.md#tool-seo_meta_set_universal-034d1e8e) | Other product |
| [`seo_migrate_meta`](royazran--mcp-ads.tools-020.md#tool-seo_migrate_meta-bf921f99) | Other product |
| [`seo_bulk_analyze`](royazran--mcp-ads.tools-020.md#tool-seo_bulk_analyze-71b2ced9) | Other product |
| [`seo_missing_meta_report`](royazran--mcp-ads.tools-020.md#tool-seo_missing_meta_report-0f440808) | Other product |
| [`seo_duplicate_meta_report`](royazran--mcp-ads.tools-020.md#tool-seo_duplicate_meta_report-b7c6b4df) | Other product |
| [`seo_keyword_cannibalization_check`](royazran--mcp-ads.tools-020.md#tool-seo_keyword_cannibalization_check-853fea76) | Other product |
| [`seo_create_optimized_post`](royazran--mcp-ads.tools-020.md#tool-seo_create_optimized_post-88cddf35) | Other product |
| [`seo_bulk_create_posts`](royazran--mcp-ads.tools-020.md#tool-seo_bulk_create_posts-09a484f2) | Other product |
| [`seo_audit_posts`](royazran--mcp-ads.tools-020.md#tool-seo_audit_posts-317e66f6) | Other product |
| [`seo_fix_missing_meta`](royazran--mcp-ads.tools-020.md#tool-seo_fix_missing_meta-da135727) | Other product |
| [`seo_update_all_og_images`](royazran--mcp-ads.tools-020.md#tool-seo_update_all_og_images-762333ca) | Other product |
| [`seo_generate_sitemap_list`](royazran--mcp-ads.tools-020.md#tool-seo_generate_sitemap_list-aeca12e3) | Other product |
| [`seo_internal_link_suggestions`](royazran--mcp-ads.tools-021.md#tool-seo_internal_link_suggestions-e28ca8de) | Other product |
| [`seo_create_category_page`](royazran--mcp-ads.tools-021.md#tool-seo_create_category_page-1620cb5a) | Other product |
| [`seo_create_content_cluster`](royazran--mcp-ads.tools-021.md#tool-seo_create_content_cluster-35d469ca) | Other product |
| [`seo_noindex_page`](royazran--mcp-ads.tools-021.md#tool-seo_noindex_page-b74b242c) | Other product |
| [`seo_index_page`](royazran--mcp-ads.tools-021.md#tool-seo_index_page-cbc90746) | Other product |
| [`seo_bulk_set_focus_keywords`](royazran--mcp-ads.tools-021.md#tool-seo_bulk_set_focus_keywords-1bc80bb5) | Other product |
| [`seo_get_all_focus_keywords`](royazran--mcp-ads.tools-021.md#tool-seo_get_all_focus_keywords-2ee25cc7) | Other product |
| [`seo_update_schema_markup`](royazran--mcp-ads.tools-021.md#tool-seo_update_schema_markup-ef3a8f16) | Other product |
| [`rankmath_meta_get`](royazran--mcp-ads.tools-021.md#tool-rankmath_meta_get-65c43d0d) | Other product |
| [`rankmath_meta_set`](royazran--mcp-ads.tools-021.md#tool-rankmath_meta_set-37ff272f) | Other product |
| [`rankmath_meta_bulk_set`](royazran--mcp-ads.tools-021.md#tool-rankmath_meta_bulk_set-cf49b9bf) | Other product |
| [`rankmath_focus_keyword_set`](royazran--mcp-ads.tools-021.md#tool-rankmath_focus_keyword_set-450112ff) | Other product |
| [`rankmath_schema_type_set`](royazran--mcp-ads.tools-021.md#tool-rankmath_schema_type_set-44b26209) | Other product |
| [`rankmath_options_get`](royazran--mcp-ads.tools-021.md#tool-rankmath_options_get-e65cdabb) | Other product |
| [`rankmath_options_set`](royazran--mcp-ads.tools-021.md#tool-rankmath_options_set-3420f05f) | Other product |
| [`rankmath_modules_toggle`](royazran--mcp-ads.tools-021.md#tool-rankmath_modules_toggle-d8331a05) | Other product |
| [`rankmath_redirects_list`](royazran--mcp-ads.tools-021.md#tool-rankmath_redirects_list-50fa1503) | Other product |
| [`rankmath_redirects_create`](royazran--mcp-ads.tools-021.md#tool-rankmath_redirects_create-18321fe0) | Other product |
| [`rankmath_redirects_update`](royazran--mcp-ads.tools-021.md#tool-rankmath_redirects_update-b8a68d7a) | Other product |
| [`rankmath_redirects_delete`](royazran--mcp-ads.tools-021.md#tool-rankmath_redirects_delete-396c2ec5) | Other product |
| [`rankmath_404_monitor_list`](royazran--mcp-ads.tools-021.md#tool-rankmath_404_monitor_list-b3e95116) | Other product |
| [`rankmath_404_to_redirect`](royazran--mcp-ads.tools-021.md#tool-rankmath_404_to_redirect-00ed16ed) | Other product |
| [`rankmath_instant_index_url`](royazran--mcp-ads.tools-021.md#tool-rankmath_instant_index_url-44c98145) | Other product |
| [`rankmath_sitemap_config`](royazran--mcp-ads.tools-021.md#tool-rankmath_sitemap_config-b44644f4) | Other product |
| [`rankmath_local_seo_configure`](royazran--mcp-ads.tools-021.md#tool-rankmath_local_seo_configure-7abbaaca) | Other product |
| [`rankmath_title_template_set`](royazran--mcp-ads.tools-021.md#tool-rankmath_title_template_set-7d6bd3b1) | Other product |
| [`rankmath_metadesc_template_set`](royazran--mcp-ads.tools-021.md#tool-rankmath_metadesc_template_set-56fd3c88) | Other product |
| [`rankmath_analytics_stats`](royazran--mcp-ads.tools-021.md#tool-rankmath_analytics_stats-81705763) | Other product |
| [`rankmath_content_ai_generate`](royazran--mcp-ads.tools-021.md#tool-rankmath_content_ai_generate-c615abe8) | Other product |
| [`rankmath_noindex_toggle`](royazran--mcp-ads.tools-021.md#tool-rankmath_noindex_toggle-c8775014) | Other product |
| [`rankmath_primary_category_set`](royazran--mcp-ads.tools-021.md#tool-rankmath_primary_category_set-a612f946) | Other product |
| [`sitemap_detect_source`](royazran--mcp-ads.tools-021.md#tool-sitemap_detect_source-0175ba28) | Other product |
| [`sitemap_get_url`](royazran--mcp-ads.tools-021.md#tool-sitemap_get_url-dc2f64c8) | Other product |
| [`sitemap_get_index`](royazran--mcp-ads.tools-021.md#tool-sitemap_get_index-74796489) | Other product |
| [`sitemap_submit_google`](royazran--mcp-ads.tools-021.md#tool-sitemap_submit_google-590daa87) | Other product |
| [`sitemap_submit_bing`](royazran--mcp-ads.tools-021.md#tool-sitemap_submit_bing-7374e736) | Other product |
| [`sitemap_submit_all`](royazran--mcp-ads.tools-021.md#tool-sitemap_submit_all-45bff461) | Other product |
| [`sitemap_exclude_post`](royazran--mcp-ads.tools-021.md#tool-sitemap_exclude_post-2bc6f881) | Other product |
| [`sitemap_exclude_post_type`](royazran--mcp-ads.tools-021.md#tool-sitemap_exclude_post_type-a23bb6f0) | Other product |
| [`sitemap_include_custom_url`](royazran--mcp-ads.tools-021.md#tool-sitemap_include_custom_url-b4c29f62) | Other product |
| [`sitemap_image_config`](royazran--mcp-ads.tools-021.md#tool-sitemap_image_config-62172f90) | Other product |
| [`sitemap_video_config`](royazran--mcp-ads.tools-021.md#tool-sitemap_video_config-5748eb5d) | Other product |
| [`sitemap_news_config`](royazran--mcp-ads.tools-021.md#tool-sitemap_news_config-bff4cce3) | Other product |
| [`yoast_get_post_seo`](royazran--mcp-ads.tools-021.md#tool-yoast_get_post_seo-317f6c20) | Other product |
| [`yoast_update_post_seo`](royazran--mcp-ads.tools-021.md#tool-yoast_update_post_seo-6ecbd35a) | Other product |
| [`yoast_bulk_update_seo`](royazran--mcp-ads.tools-021.md#tool-yoast_bulk_update_seo-9cfb01db) | Other product |
| [`yoast_get_term_seo`](royazran--mcp-ads.tools-021.md#tool-yoast_get_term_seo-633b8fcf) | Other product |
| [`yoast_update_term_seo`](royazran--mcp-ads.tools-021.md#tool-yoast_update_term_seo-fa8969b4) | Other product |
| [`yoast_get_site_seo`](royazran--mcp-ads.tools-021.md#tool-yoast_get_site_seo-cc341e48) | Other product |
| [`yoast_update_site_seo`](royazran--mcp-ads.tools-021.md#tool-yoast_update_site_seo-7cd7102b) | Other product |
| [`yoast_create_redirect`](royazran--mcp-ads.tools-021.md#tool-yoast_create_redirect-3e866cc3) | Other product |
| [`yoast_get_redirects`](royazran--mcp-ads.tools-021.md#tool-yoast_get_redirects-6d335094) | Other product |
| [`yoast_analyze_content`](royazran--mcp-ads.tools-021.md#tool-yoast_analyze_content-f710bc2c) | Other product |
| [`yoast_set_webmaster_codes`](royazran--mcp-ads.tools-021.md#tool-yoast_set_webmaster_codes-6d9db97b) | Other product |
| [`yoast_get_all_posts_seo_scores`](royazran--mcp-ads.tools-021.md#tool-yoast_get_all_posts_seo_scores-3fb9104b) | Other product |
| [`seo_set_post_meta_title`](royazran--mcp-ads.tools-021.md#tool-seo_set_post_meta_title-cbad38e8) | Other product |
| [`seo_set_post_meta_description`](royazran--mcp-ads.tools-021.md#tool-seo_set_post_meta_description-3c7465a4) | Other product |
| [`seo_set_post_focus_keyword`](royazran--mcp-ads.tools-021.md#tool-seo_set_post_focus_keyword-699f4cc7) | Other product |
| [`seo_set_post_canonical`](royazran--mcp-ads.tools-021.md#tool-seo_set_post_canonical-f5d8dce2) | Other product |
| [`seo_set_post_robots`](royazran--mcp-ads.tools-021.md#tool-seo_set_post_robots-40c88355) | Other product |
| [`seo_set_og_title`](royazran--mcp-ads.tools-021.md#tool-seo_set_og_title-6f739bd2) | Other product |
| [`seo_set_og_description`](royazran--mcp-ads.tools-021.md#tool-seo_set_og_description-cd179964) | Other product |
| [`seo_set_og_image`](royazran--mcp-ads.tools-021.md#tool-seo_set_og_image-ff235b94) | Other product |
| [`seo_set_twitter_card`](royazran--mcp-ads.tools-021.md#tool-seo_set_twitter_card-9f9500a2) | Other product |
| [`seo_set_tag_meta`](royazran--mcp-ads.tools-021.md#tool-seo_set_tag_meta-eddada7f) | Other product |
| [`seo_set_category_meta`](royazran--mcp-ads.tools-021.md#tool-seo_set_category_meta-333556dc) | Other product |
| [`seo_set_custom_taxonomy_meta`](royazran--mcp-ads.tools-021.md#tool-seo_set_custom_taxonomy_meta-5c774c40) | Other product |
| [`seo_get_taxonomy_seo`](royazran--mcp-ads.tools-021.md#tool-seo_get_taxonomy_seo-4eee4170) | Other product |
| [`seo_audit_posts_seo`](royazran--mcp-ads.tools-021.md#tool-seo_audit_posts_seo-2dba120a) | Other product |
| [`seo_get_posts_without_meta`](royazran--mcp-ads.tools-021.md#tool-seo_get_posts_without_meta-c618a1ef) | Other product |
| [`seo_get_posts_without_focus_keyword`](royazran--mcp-ads.tools-021.md#tool-seo_get_posts_without_focus_keyword-1fbef27a) | Other product |
| [`seo_find_duplicate_titles`](royazran--mcp-ads.tools-021.md#tool-seo_find_duplicate_titles-39a980a6) | Other product |
| [`seo_find_duplicate_descriptions`](royazran--mcp-ads.tools-021.md#tool-seo_find_duplicate_descriptions-8921d1bb) | Other product |
| [`seo_find_missing_alt_text`](royazran--mcp-ads.tools-021.md#tool-seo_find_missing_alt_text-ccae1828) | Other product |
| [`seo_find_thin_content`](royazran--mcp-ads.tools-021.md#tool-seo_find_thin_content-3f7dbf03) | Other product |
| [`seo_analyze_heading_structure`](royazran--mcp-ads.tools-021.md#tool-seo_analyze_heading_structure-e7a48b65) | Other product |
| [`seo_bulk_set_meta_from_title`](royazran--mcp-ads.tools-021.md#tool-seo_bulk_set_meta_from_title-3069e5d1) | Other product |
| [`seo_bulk_noindex`](royazran--mcp-ads.tools-021.md#tool-seo_bulk_noindex-328365f3) | Other product |
| [`seo_add_faq_schema`](royazran--mcp-ads.tools-021.md#tool-seo_add_faq_schema-3fe949cd) | Other product |
| [`seo_add_howto_schema`](royazran--mcp-ads.tools-021.md#tool-seo_add_howto_schema-3bc58e9d) | Other product |
| [`seo_add_article_schema`](royazran--mcp-ads.tools-021.md#tool-seo_add_article_schema-7a153504) | Other product |
| [`seo_add_product_schema`](royazran--mcp-ads.tools-021.md#tool-seo_add_product_schema-4d218870) | Other product |
| [`seo_add_review_schema`](royazran--mcp-ads.tools-021.md#tool-seo_add_review_schema-0d86b380) | Other product |
| [`seo_add_local_business_schema`](royazran--mcp-ads.tools-021.md#tool-seo_add_local_business_schema-94cbff86) | Other product |
| [`seo_add_event_schema`](royazran--mcp-ads.tools-021.md#tool-seo_add_event_schema-c2c2db78) | Other product |
| [`seo_create_301_redirect`](royazran--mcp-ads.tools-021.md#tool-seo_create_301_redirect-5c38c51d) | Other product |
| [`seo_create_302_redirect`](royazran--mcp-ads.tools-021.md#tool-seo_create_302_redirect-b97756c1) | Other product |
| [`seo_list_redirects`](royazran--mcp-ads.tools-021.md#tool-seo_list_redirects-89d71841) | Other product |
| [`seo_delete_redirect`](royazran--mcp-ads.tools-021.md#tool-seo_delete_redirect-334cae74) | Other product |
| [`seo_get_sitemap_url`](royazran--mcp-ads.tools-021.md#tool-seo_get_sitemap_url-32b3fa02) | Other product |
| [`seo_ping_sitemap_to_google`](royazran--mcp-ads.tools-021.md#tool-seo_ping_sitemap_to_google-25141b1a) | Other product |
| [`seo_exclude_from_sitemap`](royazran--mcp-ads.tools-021.md#tool-seo_exclude_from_sitemap-7d9945e6) | Other product |
| [`seo_get_all_noindex_pages`](royazran--mcp-ads.tools-021.md#tool-seo_get_all_noindex_pages-0b0b5087) | Other product |
| [`seo_check_canonical_issues`](royazran--mcp-ads.tools-021.md#tool-seo_check_canonical_issues-1713b05f) | Other product |
| [`seo_set_breadcrumbs_settings`](royazran--mcp-ads.tools-021.md#tool-seo_set_breadcrumbs_settings-322db5f5) | Other product |
| [`seo_set_site_verification`](royazran--mcp-ads.tools-021.md#tool-seo_set_site_verification-1dcdefe5) | Other product |
| [`seo_set_homepage_meta`](royazran--mcp-ads.tools-021.md#tool-seo_set_homepage_meta-ffe939e6) | Other product |
| [`seo_set_archives_settings`](royazran--mcp-ads.tools-021.md#tool-seo_set_archives_settings-669c1328) | Other product |
| [`seo_set_social_profiles`](royazran--mcp-ads.tools-021.md#tool-seo_set_social_profiles-78b26345) | Other product |
| [`seo_set_organization_info`](royazran--mcp-ads.tools-021.md#tool-seo_set_organization_info-15cf0ab1) | Other product |
| [`seo_get_blog_seo_overview`](royazran--mcp-ads.tools-021.md#tool-seo_get_blog_seo_overview-6528b741) | Other product |
| [`seo_update_post_slug`](royazran--mcp-ads.tools-021.md#tool-seo_update_post_slug-13b65258) | Other product |
| [`seo_get_robots_txt`](royazran--mcp-ads.tools-021.md#tool-seo_get_robots_txt-22140e1d) | Other product |
| [`seo_update_robots_txt`](royazran--mcp-ads.tools-021.md#tool-seo_update_robots_txt-a17852b8) | Other product |
| [`seo_inject_json_ld`](royazran--mcp-ads.tools-021.md#tool-seo_inject_json_ld-39de2195) | Other product |
| [`seo_get_post_schema`](royazran--mcp-ads.tools-021.md#tool-seo_get_post_schema-a0456c97) | Other product |
| [`seo_set_image_alt`](royazran--mcp-ads.tools-021.md#tool-seo_set_image_alt-9966a4a6) | Other product |
| [`seo_bulk_set_image_alt`](royazran--mcp-ads.tools-021.md#tool-seo_bulk_set_image_alt-7fc0e9ad) | Other product |
| [`seo_list_images_without_alt`](royazran--mcp-ads.tools-021.md#tool-seo_list_images_without_alt-7d6cde6d) | Other product |
| [`wordpress_list_sites`](royazran--mcp-ads.tools-021.md#tool-wordpress_list_sites-e0cb8eaa) | Other product |
| [`wordpress_select_site`](royazran--mcp-ads.tools-021.md#tool-wordpress_select_site-e7c11169) | Other product |
| [`wordpress_current_site`](royazran--mcp-ads.tools-021.md#tool-wordpress_current_site-28fc820b) | Other product |
| [`wordpress_site_info`](royazran--mcp-ads.tools-021.md#tool-wordpress_site_info-d95c0020) | Other product |
| [`list_actions`](royazran--mcp-ads.tools-021.md#tool-list_actions-7a18d172) | Supporting |
| [`agency_action`](royazran--mcp-ads.tools-021.md#tool-agency_action-0b1a45a4) | Other product |
| [`creative_action`](royazran--mcp-ads.tools-021.md#tool-creative_action-f70ffff2) | Other product |
| [`ga4_action`](royazran--mcp-ads.tools-021.md#tool-ga4_action-1387e1d5) | Other product |
| [`google_ads_action`](royazran--mcp-ads.tools-021.md#tool-google_ads_action-335e971b) | Other product |
| [`google_ads_transparency_action`](royazran--mcp-ads.tools-021.md#tool-google_ads_transparency_action-ee7de10a) | Other product |
| [`gsc_action`](royazran--mcp-ads.tools-021.md#tool-gsc_action-ad919367) | Other product |
| [`gtm_action`](#tool-gtm_action-7110898a) | GTM |
| [`linkedin_ads_action`](royazran--mcp-ads.tools-021.md#tool-linkedin_ads_action-a2834066) | Other product |
| [`meta_ad_library_action`](royazran--mcp-ads.tools-021.md#tool-meta_ad_library_action-0224a29b) | Other product |
| [`meta_ads_action`](royazran--mcp-ads.tools-021.md#tool-meta_ads_action-e1ad1275) | Other product |
| [`microsoft_ads_action`](royazran--mcp-ads.tools-021.md#tool-microsoft_ads_action-60989369) | Other product |
| [`misc_action`](royazran--mcp-ads.tools-021.md#tool-misc_action-78967fe6) | Other product |
| [`openai_ads_action`](royazran--mcp-ads.tools-021.md#tool-openai_ads_action-27b8ad7a) | Other product |
| [`organic_social_action`](royazran--mcp-ads.tools-021.md#tool-organic_social_action-22b54b65) | Other product |
| [`reports_action`](royazran--mcp-ads.tools-021.md#tool-reports_action-f8cc160e) | Other product |
| [`snapchat_ads_action`](royazran--mcp-ads.tools-021.md#tool-snapchat_ads_action-bdb29b83) | Other product |
| [`tiktok_ads_action`](royazran--mcp-ads.tools-021.md#tool-tiktok_ads_action-c2115fdd) | Other product |
| [`wordpress_action`](royazran--mcp-ads.tools-021.md#tool-wordpress_action-c13824e3) | Other product |

## Supporting and other-product parameters

The complete shared-server inventory is preserved in linked parts. GTM parameters follow on this page.

- [media_upload_start → gads_get_account_budget](royazran--mcp-ads.tools-001.md) (150 tools)
- [gads_get_account_status → gads_update_hotel_ad](royazran--mcp-ads.tools-002.md) (150 tools)
- [gads_update_video_ad → gads_list_conversion_value_rules](royazran--mcp-ads.tools-003.md) (150 tools)
- [gads_set_campaign_conversion_goals → gads_get_pmax_campaign_settings](royazran--mcp-ads.tools-004.md) (150 tools)
- [gads_get_pmax_performance → google_ads_update_target_roas](royazran--mcp-ads.tools-005.md) (150 tools)
- [google_ads_add_audience_to_campaign → meta_ads_pixel_events](royazran--mcp-ads.tools-006.md) (150 tools)
- [meta_ads_send_server_event → tiktok_ads_get_ad](royazran--mcp-ads.tools-007.md) (150 tools)
- [tiktok_ads_update_ad → ga4_audit_property_settings](royazran--mcp-ads.tools-008.md) (150 tools)
- [ga4_diagnose_missing_conversions → elementor_custom_code_list](royazran--mcp-ads.tools-009.md) (150 tools)
- [elementor_custom_code_add → elementor_create_header_template](royazran--mcp-ads.tools-010.md) (150 tools)
- [elementor_create_footer_template → reviews_wc_get](royazran--mcp-ads.tools-011.md) (150 tools)
- [reviews_wc_create → woo_check_coupon_usage](royazran--mcp-ads.tools-012.md) (150 tools)
- [woo_list_customer_downloads_all → wp_get_post_type](royazran--mcp-ads.tools-013.md) (150 tools)
- [cpt_list_posts → wp_wpbakery_get_data](royazran--mcp-ads.tools-014.md) (150 tools)
- [wp_wpbakery_set_data → chat_offline_message_configure](royazran--mcp-ads.tools-015.md) (150 tools)
- [chat_whatsapp_button_add → wp_delete_all_revisions](royazran--mcp-ads.tools-016.md) (150 tools)
- [wp_bulk_trash_posts → bbpress_forums_list](royazran--mcp-ads.tools-017.md) (150 tools)
- [bbpress_forums_create → rest_namespace_list](royazran--mcp-ads.tools-018.md) (150 tools)
- [rest_test_endpoint → speed_audit](royazran--mcp-ads.tools-019.md) (150 tools)
- [speed_check_images → seo_generate_sitemap_list](royazran--mcp-ads.tools-020.md) (150 tools)
- [seo_internal_link_suggestions → wordpress_action](royazran--mcp-ads.tools-021.md) (131 tools)

<a id="tool-gtm_list_accounts-c5d9b27f"></a>

## gtm_list_accounts

Handler: List all Google Tag Manager accounts accessible to the authenticated user. Uses GTM v2 \_svc().accounts().list.

```text
[READ] Tool tool. List all Google Tag Manager accounts accessible to the authenticated user.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L88-L97) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "gtm_list_accountsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_get_account-b0358265"></a>

## gtm_get_account

Handler: Get details of a specific GTM account. Uses GTM v2 \_svc().accounts().get.

```text
[READ] Tool tool. Get details of a specific GTM account. Args: account_id: The GTM account ID.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L100-L111) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    }
  },
  "required": [
    "account_id"
  ],
  "title": "gtm_get_accountArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_list_containers-e45afd2b"></a>

## gtm_list_containers

Handler: List all containers in a GTM account. Uses GTM v2 \_svc().accounts().containers().list.

```text
[READ] Tool tool. List all containers in a GTM account. Args: account_id: The GTM account ID.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L118-L136) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    }
  },
  "required": [
    "account_id"
  ],
  "title": "gtm_list_containersArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_get_container-fdc6e39c"></a>

## gtm_get_container

Handler: Get details of a specific GTM container. Uses GTM v2 \_svc().accounts().containers().get.

```text
[READ] Tool tool. Get details of a specific GTM container. Args: account_id: The GTM account ID. container_id: The GTM container ID.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L139-L152) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ],
  "title": "gtm_get_containerArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_create_container-67c96447"></a>

## gtm_create_container

Handler: Create a new GTM container in an account. Uses GTM v2 \_svc().accounts().containers().create.

```text
[READ] Tool tool. Create a new GTM container in an account. Args: account_id: The GTM account ID. name: Display name for the new container. usage_context: web | android | ios | amp | server (default: web).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L155-L172) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "name": {
      "title": "Name",
      "type": "string"
    },
    "usage_context": {
      "default": "web",
      "title": "Usage Context",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "name"
  ],
  "title": "gtm_create_containerArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_get_container_snippet-a7cc1184"></a>

## gtm_get_container_snippet

Handler: Get the GTM installation snippet for a container (the script tag to paste on your site). Uses GTM v2 \_svc().accounts().containers().snippet.

```text
[READ] Tool tool. Get the GTM installation snippet for a container (the script tag to paste on your site). Args: account_id: The GTM account ID. container_id: The GTM container ID.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L175-L188) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ],
  "title": "gtm_get_container_snippetArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_list_workspaces-248ce86f"></a>

## gtm_list_workspaces

Handler: List all workspaces in a GTM container. Uses GTM v2 \_svc().accounts().containers().workspaces().list.

```text
[READ] Tool tool. List all workspaces in a GTM container. Args: account_id: The GTM account ID. container_id: The GTM container ID.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L195-L211) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ],
  "title": "gtm_list_workspacesArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_get_workspace-573c6822"></a>

## gtm_get_workspace

Handler: Get details of a specific GTM workspace. Uses GTM v2 \_svc().accounts().containers().workspaces().get.

```text
[READ] Tool tool. Get details of a specific GTM workspace. Args: account_id: The GTM account ID. container_id: The GTM container ID. workspace_id: The GTM workspace ID.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L214-L228) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "title": "Workspace Id",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "title": "gtm_get_workspaceArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_create_workspace-6324597f"></a>

## gtm_create_workspace

Handler: Create a new workspace in a GTM container. Uses GTM v2 \_svc().accounts().containers().workspaces().create.

```text
[READ] Tool tool. Create a new workspace in a GTM container. Args: account_id: The GTM account ID. container_id: The GTM container ID. name: Workspace name. description: Optional workspace description.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L231-L249) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "name": {
      "title": "Name",
      "type": "string"
    },
    "description": {
      "default": "",
      "title": "Description",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "name"
  ],
  "title": "gtm_create_workspaceArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_get_workspace_status-58373cea"></a>

## gtm_get_workspace_status

Handler: Get the status of a workspace — shows changed entities (tags, triggers, variables).

```text
[READ] Tool tool. Get the status of a workspace — shows changed entities (tags, triggers, variables). Args: account_id: The GTM account ID. container_id: The GTM container ID. workspace_id: The GTM workspace ID.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L252-L266) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "title": "Workspace Id",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "title": "gtm_get_workspace_statusArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_sync_workspace-c11e7d2f"></a>

## gtm_sync_workspace

Handler: Sync a workspace with the latest container version. Shows merge conflicts if any. Uses GTM v2 \_svc().accounts().containers().workspaces().sync.

```text
[READ] Tool tool. Sync a workspace with the latest container version. Shows merge conflicts if any. Args: account_id: The GTM account ID. container_id: The GTM container ID. workspace_id: The GTM workspace ID.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L269-L284) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "title": "Workspace Id",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "title": "gtm_sync_workspaceArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_list_tags-b585bc12"></a>

## gtm_list_tags

Handler: List all tags in a GTM workspace. Uses GTM v2 \_svc().accounts().containers().workspaces().tags().list.

```text
[READ] Tool tool. List all tags in a GTM workspace. Args: account_id: The GTM account ID. container_id: The GTM container ID. workspace_id: The GTM workspace ID.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L291-L313) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "title": "Workspace Id",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "title": "gtm_list_tagsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_get_tag-3d242291"></a>

## gtm_get_tag

Handler: Get full details of a specific GTM tag. Uses GTM v2 \_svc().accounts().containers().workspaces().tags().get.

```text
[READ] Tool tool. Get full details of a specific GTM tag. Args: account_id: The GTM account ID. container_id: The GTM container ID. workspace_id: The GTM workspace ID. tag_id: The tag ID.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L316-L331) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "title": "Workspace Id",
      "type": "string"
    },
    "tag_id": {
      "title": "Tag Id",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "tag_id"
  ],
  "title": "gtm_get_tagArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_create_tag-c682840c"></a>

## gtm_create_tag

Handler: Create a new tag in a GTM workspace. Uses GTM v2 \_svc().accounts().containers().workspaces().tags().create.

```text
[READ] Tool tool. Create a new tag in a GTM workspace. Args: account_id: The GTM account ID. container_id: The GTM container ID. workspace_id: The GTM workspace ID. tag_body: JSON string with the tag definition. Must include 'name', 'type', and optionally 'parameter', 'firingTriggerId'.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L334-L352) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "title": "Workspace Id",
      "type": "string"
    },
    "tag_body": {
      "title": "Tag Body",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "tag_body"
  ],
  "title": "gtm_create_tagArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_update_tag-23807743"></a>

## gtm_update_tag

Handler: Update an existing GTM tag. Uses GTM v2 \_svc().accounts().containers().workspaces().tags().update.

```text
[READ] Tool tool. Update an existing GTM tag. Args: account_id: The GTM account ID. container_id: The GTM container ID. workspace_id: The GTM workspace ID. tag_id: The tag ID to update. tag_body: JSON string with the updated tag definition.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L355-L375) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "title": "Workspace Id",
      "type": "string"
    },
    "tag_id": {
      "title": "Tag Id",
      "type": "string"
    },
    "tag_body": {
      "title": "Tag Body",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "tag_id",
    "tag_body"
  ],
  "title": "gtm_update_tagArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_delete_tag-42a56cac"></a>

## gtm_delete_tag

Handler: Delete a tag from a GTM workspace. Uses GTM v2 \_svc().accounts().containers().workspaces().tags().delete.

```text
[READ] Tool tool. Delete a tag from a GTM workspace. Args: account_id: The GTM account ID. container_id: The GTM container ID. workspace_id: The GTM workspace ID. tag_id: The tag ID to delete.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L378-L394) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "title": "Workspace Id",
      "type": "string"
    },
    "tag_id": {
      "title": "Tag Id",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "tag_id"
  ],
  "title": "gtm_delete_tagArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_pause_tag-f2e4757b"></a>

## gtm_pause_tag

Handler: Pause a GTM tag so it stops firing without deleting it. Uses GTM v2 svc.accounts().containers().workspaces().tags().get, svc.accounts().containers().workspaces().tags().update.

```text
[READ] Tool tool. Pause a GTM tag so it stops firing without deleting it. Args: account_id: The GTM account ID. container_id: The GTM container ID. workspace_id: The GTM workspace ID. tag_id: The tag ID to pause.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L397-L417) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "title": "Workspace Id",
      "type": "string"
    },
    "tag_id": {
      "title": "Tag Id",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "tag_id"
  ],
  "title": "gtm_pause_tagArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_unpause_tag-6a6b114b"></a>

## gtm_unpause_tag

Handler: Resume a paused GTM tag so it starts firing again. Uses GTM v2 svc.accounts().containers().workspaces().tags().get, svc.accounts().containers().workspaces().tags().update.

```text
[READ] Tool tool. Resume a paused GTM tag so it starts firing again. Args: account_id: The GTM account ID. container_id: The GTM container ID. workspace_id: The GTM workspace ID. tag_id: The tag ID to unpause.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L420-L440) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "title": "Workspace Id",
      "type": "string"
    },
    "tag_id": {
      "title": "Tag Id",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "tag_id"
  ],
  "title": "gtm_unpause_tagArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_list_triggers-16b41a3c"></a>

## gtm_list_triggers

Handler: List all triggers in a GTM workspace. Uses GTM v2 \_svc().accounts().containers().workspaces().triggers().list.

```text
[READ] Tool tool. List all triggers in a GTM workspace. Args: account_id: The GTM account ID. container_id: The GTM container ID. workspace_id: The GTM workspace ID.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L447-L466) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "title": "Workspace Id",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "title": "gtm_list_triggersArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_get_trigger-669e5c62"></a>

## gtm_get_trigger

Handler: Get full details of a specific GTM trigger. Uses GTM v2 \_svc().accounts().containers().workspaces().triggers().get.

```text
[READ] Tool tool. Get full details of a specific GTM trigger. Args: account_id: The GTM account ID. container_id: The GTM container ID. workspace_id: The GTM workspace ID. trigger_id: The trigger ID.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L469-L484) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "title": "Workspace Id",
      "type": "string"
    },
    "trigger_id": {
      "title": "Trigger Id",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "trigger_id"
  ],
  "title": "gtm_get_triggerArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_create_trigger-99da4322"></a>

## gtm_create_trigger

Handler: Create a new trigger in a GTM workspace. Uses GTM v2 \_svc().accounts().containers().workspaces().triggers().create.

```text
[READ] Tool tool. Create a new trigger in a GTM workspace. Args: account_id: The GTM account ID. container_id: The GTM container ID. workspace_id: The GTM workspace ID. trigger_body: JSON string with the trigger definition. Must include 'name' and 'type'.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L487-L506) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "title": "Workspace Id",
      "type": "string"
    },
    "trigger_body": {
      "title": "Trigger Body",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "trigger_body"
  ],
  "title": "gtm_create_triggerArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_update_trigger-ce48de45"></a>

## gtm_update_trigger

Handler: Update an existing GTM trigger. Uses GTM v2 \_svc().accounts().containers().workspaces().triggers().update.

```text
[READ] Tool tool. Update an existing GTM trigger. Args: account_id: The GTM account ID. container_id: The GTM container ID. workspace_id: The GTM workspace ID. trigger_id: The trigger ID to update. trigger_body: JSON string with the updated trigger definition.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L509-L529) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "title": "Workspace Id",
      "type": "string"
    },
    "trigger_id": {
      "title": "Trigger Id",
      "type": "string"
    },
    "trigger_body": {
      "title": "Trigger Body",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "trigger_id",
    "trigger_body"
  ],
  "title": "gtm_update_triggerArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_delete_trigger-dac3085f"></a>

## gtm_delete_trigger

Handler: Delete a trigger from a GTM workspace. Uses GTM v2 \_svc().accounts().containers().workspaces().triggers().delete.

```text
[READ] Tool tool. Delete a trigger from a GTM workspace. Args: account_id: The GTM account ID. container_id: The GTM container ID. workspace_id: The GTM workspace ID. trigger_id: The trigger ID to delete.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L532-L548) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "title": "Workspace Id",
      "type": "string"
    },
    "trigger_id": {
      "title": "Trigger Id",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "trigger_id"
  ],
  "title": "gtm_delete_triggerArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_list_variables-81705a80"></a>

## gtm_list_variables

Handler: List all user-defined variables in a GTM workspace. Uses GTM v2 \_svc().accounts().containers().workspaces().variables().list.

```text
[READ] Tool tool. List all user-defined variables in a GTM workspace. Args: account_id: The GTM account ID. container_id: The GTM container ID. workspace_id: The GTM workspace ID.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L555-L574) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "title": "Workspace Id",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "title": "gtm_list_variablesArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_get_variable-e6ff3763"></a>

## gtm_get_variable

Handler: Get full details of a specific GTM variable. Uses GTM v2 \_svc().accounts().containers().workspaces().variables().get.

```text
[READ] Tool tool. Get full details of a specific GTM variable. Args: account_id: The GTM account ID. container_id: The GTM container ID. workspace_id: The GTM workspace ID. variable_id: The variable ID.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L577-L592) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "title": "Workspace Id",
      "type": "string"
    },
    "variable_id": {
      "title": "Variable Id",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "variable_id"
  ],
  "title": "gtm_get_variableArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_create_variable-5b853337"></a>

## gtm_create_variable

Handler: Create a new variable in a GTM workspace. Uses GTM v2 \_svc().accounts().containers().workspaces().variables().create.

```text
[READ] Tool tool. Create a new variable in a GTM workspace. Args: account_id: The GTM account ID. container_id: The GTM container ID. workspace_id: The GTM workspace ID. variable_body: JSON string with the variable definition. Must include 'name' and 'type'.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L595-L614) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "title": "Workspace Id",
      "type": "string"
    },
    "variable_body": {
      "title": "Variable Body",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "variable_body"
  ],
  "title": "gtm_create_variableArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_update_variable-898f92d4"></a>

## gtm_update_variable

Handler: Update an existing GTM variable. Uses GTM v2 \_svc().accounts().containers().workspaces().variables().update.

```text
[READ] Tool tool. Update an existing GTM variable. Args: account_id: The GTM account ID. container_id: The GTM container ID. workspace_id: The GTM workspace ID. variable_id: The variable ID to update. variable_body: JSON string with the updated variable definition.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L617-L637) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "title": "Workspace Id",
      "type": "string"
    },
    "variable_id": {
      "title": "Variable Id",
      "type": "string"
    },
    "variable_body": {
      "title": "Variable Body",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "variable_id",
    "variable_body"
  ],
  "title": "gtm_update_variableArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_delete_variable-9bd36787"></a>

## gtm_delete_variable

Handler: Delete a variable from a GTM workspace. Uses GTM v2 \_svc().accounts().containers().workspaces().variables().delete.

```text
[READ] Tool tool. Delete a variable from a GTM workspace. Args: account_id: The GTM account ID. container_id: The GTM container ID. workspace_id: The GTM workspace ID. variable_id: The variable ID to delete.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L640-L656) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "title": "Workspace Id",
      "type": "string"
    },
    "variable_id": {
      "title": "Variable Id",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "variable_id"
  ],
  "title": "gtm_delete_variableArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_list_builtin_variables-e3216e58"></a>

## gtm_list_builtin_variables

Handler: List all enabled built-in variables in a GTM workspace (e.g. Click URL, Page Path). Uses GTM v2 \_svc().accounts().containers().workspaces().built\_in\_variables().list.

```text
[READ] Tool tool. List all enabled built-in variables in a GTM workspace (e.g. Click URL, Page Path). Args: account_id: The GTM account ID. container_id: The GTM container ID. workspace_id: The GTM workspace ID.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L663-L678) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "title": "Workspace Id",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "title": "gtm_list_builtin_variablesArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_enable_builtin_variable-e3920208"></a>

## gtm_enable_builtin_variable

Handler: Enable one or more built-in variables in a GTM workspace. Uses GTM v2 \_svc().accounts().containers().workspaces().built\_in\_variables().create.

```text
[READ] Tool tool. Enable one or more built-in variables in a GTM workspace. Common types: PAGE_URL, PAGE_PATH, PAGE_HOSTNAME, CLICK_URL, CLICK_TEXT, CLICK_ID, CLICK_CLASSES, CLICK_TARGET, CLICK_ELEMENT, FORM_URL, FORM_ID, FORM_CLASSES, FORM_TARGET, FORM_ELEMENT, FORM_TEXT, SCROLL_DEPTH_THRESHOLD, SCROLL_DEPTH_DIRECTION, SCROLL_DEPTH_UNITS, VIDEO_URL, VIDEO_TITLE, VIDEO_DURATION, VIDEO_PERCENT, VIDEO_STATUS. Args: account_id: The GTM account ID. container_id: The GTM container ID. workspace_id: The GTM workspace ID. variable_types: JSON array of built-in variable type strings to enable.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L681-L706) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "title": "Workspace Id",
      "type": "string"
    },
    "variable_types": {
      "title": "Variable Types",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "variable_types"
  ],
  "title": "gtm_enable_builtin_variableArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_disable_builtin_variable-9bbcfc17"></a>

## gtm_disable_builtin_variable

Handler: Disable a built-in variable in a GTM workspace. Uses GTM v2 \_svc().accounts().containers().workspaces().built\_in\_variables().delete.

```text
[READ] Tool tool. Disable a built-in variable in a GTM workspace. Args: account_id: The GTM account ID. container_id: The GTM container ID. workspace_id: The GTM workspace ID. variable_type: The built-in variable type to disable (e.g. PAGE_URL, CLICK_TEXT).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L709-L727) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "title": "Workspace Id",
      "type": "string"
    },
    "variable_type": {
      "title": "Variable Type",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "variable_type"
  ],
  "title": "gtm_disable_builtin_variableArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_list_folders-9da6c22f"></a>

## gtm_list_folders

Handler: List all folders in a GTM workspace. Uses GTM v2 \_svc().accounts().containers().workspaces().folders().list.

```text
[READ] Tool tool. List all folders in a GTM workspace. Args: account_id: The GTM account ID. container_id: The GTM container ID. workspace_id: The GTM workspace ID.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L734-L749) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "title": "Workspace Id",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "title": "gtm_list_foldersArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_create_folder-a7f80e8c"></a>

## gtm_create_folder

Handler: Create a new folder in a GTM workspace for organizing tags/triggers/variables. Uses GTM v2 \_svc().accounts().containers().workspaces().folders().create.

```text
[READ] Tool tool. Create a new folder in a GTM workspace for organizing tags/triggers/variables. Args: account_id: The GTM account ID. container_id: The GTM container ID. workspace_id: The GTM workspace ID. name: Folder name.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L752-L770) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "title": "Workspace Id",
      "type": "string"
    },
    "name": {
      "title": "Name",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "name"
  ],
  "title": "gtm_create_folderArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_list_folder_entities-a2313233"></a>

## gtm_list_folder_entities

Handler: List all tags, triggers, and variables inside a specific GTM folder. Uses GTM v2 \_svc().accounts().containers().workspaces().folders().entities.

```text
[READ] Tool tool. List all tags, triggers, and variables inside a specific GTM folder. Args: account_id: The GTM account ID. container_id: The GTM container ID. workspace_id: The GTM workspace ID. folder_id: The folder ID.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L773-L793) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "title": "Workspace Id",
      "type": "string"
    },
    "folder_id": {
      "title": "Folder Id",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "folder_id"
  ],
  "title": "gtm_list_folder_entitiesArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_list_versions-f9371c4c"></a>

## gtm_list_versions

Handler: List all container versions for a GTM container. Uses GTM v2 \_svc().accounts().containers().version\_headers().list.

```text
[READ] Tool tool. List all container versions for a GTM container. Args: account_id: The GTM account ID. container_id: The GTM container ID.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L800-L828) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ],
  "title": "gtm_list_versionsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_get_live_version-986da5ee"></a>

## gtm_get_live_version

Handler: Get the currently published (live) version of a GTM container. Uses GTM v2 \_svc().accounts().containers().versions().live.

```text
[READ] Tool tool. Get the currently published (live) version of a GTM container. Args: account_id: The GTM account ID. container_id: The GTM container ID.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L831-L851) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id"
  ],
  "title": "gtm_get_live_versionArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_create_version_from_workspace-41b346fc"></a>

## gtm_create_version_from_workspace

Handler: Create a new container version from a workspace (snapshot the workspace). Uses GTM v2 \_svc().accounts().containers().workspaces().create\_version.

```text
[READ] Tool tool. Create a new container version from a workspace (snapshot the workspace). Args: account_id: The GTM account ID. container_id: The GTM container ID. workspace_id: The GTM workspace ID. name: Optional version name. description: Optional version description.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L854-L880) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "title": "Workspace Id",
      "type": "string"
    },
    "name": {
      "default": "",
      "title": "Name",
      "type": "string"
    },
    "description": {
      "default": "",
      "title": "Description",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "title": "gtm_create_version_from_workspaceArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_publish_workspace_now-42328925"></a>

## gtm_publish_workspace_now

Handler: Publish a GTM workspace immediately — creates a version and publishes it live. Uses GTM v2 \_svc().accounts().containers().workspaces().create\_version, \_svc().accounts().containers().versions().publish.

```text
[READ] Tool tool. Publish a GTM workspace immediately — creates a version and publishes it live. Args: account_id: The GTM account ID. container_id: The GTM container ID. workspace_id: The GTM workspace ID. version_name: Optional name for the new version. version_notes: Optional description/notes for the version.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L883-L912) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "title": "Workspace Id",
      "type": "string"
    },
    "version_name": {
      "default": "",
      "title": "Version Name",
      "type": "string"
    },
    "version_notes": {
      "default": "",
      "title": "Version Notes",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "title": "gtm_publish_workspace_nowArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_rollback_to_version-d732babf"></a>

## gtm_rollback_to_version

Handler: Roll back a GTM container to a specific published version. Uses GTM v2 \_svc().accounts().containers().versions().publish.

```text
[READ] Tool tool. Roll back a GTM container to a specific published version. Args: account_id: The GTM account ID. container_id: The GTM container ID. version_id: The version ID to publish (roll back to).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L915-L934) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "version_id": {
      "title": "Version Id",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "version_id"
  ],
  "title": "gtm_rollback_to_versionArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_find_unused_tags-e3888960"></a>

## gtm_find_unused_tags

Handler: Find tags in a GTM workspace that have no firing triggers assigned. Uses GTM v2 \_svc().accounts().containers().workspaces().tags().list.

```text
[READ] Tool tool. Find tags in a GTM workspace that have no firing triggers assigned. Args: account_id: The GTM account ID. container_id: The GTM container ID. workspace_id: The GTM workspace ID.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L941-L958) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "title": "Workspace Id",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "title": "gtm_find_unused_tagsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_find_paused_tags-cf83b84e"></a>

## gtm_find_paused_tags

Handler: Find all paused tags in a GTM workspace. Uses GTM v2 \_svc().accounts().containers().workspaces().tags().list.

```text
[READ] Tool tool. Find all paused tags in a GTM workspace. Args: account_id: The GTM account ID. container_id: The GTM container ID. workspace_id: The GTM workspace ID.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L961-L978) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "title": "Workspace Id",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "title": "gtm_find_paused_tagsArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_audit_container-a82e2cd2"></a>

## gtm_audit_container

Handler: Full container health audit — counts tags/triggers/variables, finds unused/paused tags, checks for tags without triggers, and summarizes tag types in use. Uses GTM v2 svc.accounts().containers().workspaces().tags().list, svc.accounts().containers().workspaces().triggers().list, svc.accounts().containers().workspaces().variables().list.

```text
[READ] Tool tool. Full container health audit — counts tags/triggers/variables, finds unused/paused tags, checks for tags without triggers, and summarizes tag types in use. Args: account_id: The GTM account ID. container_id: The GTM container ID. workspace_id: The GTM workspace ID.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L981-L1032) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "title": "Workspace Id",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "title": "gtm_audit_containerArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_find_tags_by_type-aac2abcd"></a>

## gtm_find_tags_by_type

Handler: Find all tags of a specific type in a GTM workspace. Uses GTM v2 \_svc().accounts().containers().workspaces().tags().list.

```text
[READ] Tool tool. Find all tags of a specific type in a GTM workspace. Common types: googtag (GA4 Config), gaawe (GA4 Event), awct (Google Ads Conversion), sp (Google Ads Remarketing), cl (Conversion Linker), html (Custom HTML), ua (Universal Analytics), flc (Floodlight Counter), fls (Floodlight Sales). Args: account_id: The GTM account ID. container_id: The GTM container ID. workspace_id: The GTM workspace ID. tag_type: The tag type code to filter by.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L1035-L1060) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "title": "Workspace Id",
      "type": "string"
    },
    "tag_type": {
      "title": "Tag Type",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "tag_type"
  ],
  "title": "gtm_find_tags_by_typeArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_build_ga4_config_tag-0e772add"></a>

## gtm_build_ga4_config_tag

Handler: Create a GA4 Configuration tag in a GTM workspace. Uses GTM v2 \_svc().accounts().containers().workspaces().tags().create.

```text
[READ] Tool tool. Create a GA4 Configuration tag in a GTM workspace. Args: account_id: The GTM account ID. container_id: The GTM container ID. workspace_id: The GTM workspace ID. measurement_id: GA4 Measurement ID (e.g. G-XXXXXXXXXX). firing_trigger_ids: JSON array of trigger IDs to fire this tag on (e.g. ["2147479553"] for All Pages). tag_name: Optional custom tag name (default: 'GA4 Config - {measurement_id}'). send_page_view: Whether to send page_view events (default True). server_container_url: Optional server-side GTM container URL.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L1067-L1103) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "title": "Workspace Id",
      "type": "string"
    },
    "measurement_id": {
      "title": "Measurement Id",
      "type": "string"
    },
    "firing_trigger_ids": {
      "title": "Firing Trigger Ids",
      "type": "string"
    },
    "tag_name": {
      "default": "",
      "title": "Tag Name",
      "type": "string"
    },
    "send_page_view": {
      "default": true,
      "title": "Send Page View",
      "type": "boolean"
    },
    "server_container_url": {
      "default": "",
      "title": "Server Container Url",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "measurement_id",
    "firing_trigger_ids"
  ],
  "title": "gtm_build_ga4_config_tagArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_build_ga4_event_tag-1f45751c"></a>

## gtm_build_ga4_event_tag

Handler: Create a GA4 Event tag in a GTM workspace. Uses GTM v2 \_svc().accounts().containers().workspaces().tags().create.

```text
[READ] Tool tool. Create a GA4 Event tag in a GTM workspace. Args: account_id: The GTM account ID. container_id: The GTM container ID. workspace_id: The GTM workspace ID. event_name: GA4 event name (e.g. 'generate_lead', 'purchase'). config_tag_name: Name of the existing GA4 Config tag to reference. firing_trigger_ids: JSON array of trigger IDs. tag_name: Optional custom tag name. event_parameters: JSON array of {name, value} objects for event parameters. send_ecommerce: Whether to send ecommerce dataLayer data with this event.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L1106-L1153) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "title": "Workspace Id",
      "type": "string"
    },
    "event_name": {
      "title": "Event Name",
      "type": "string"
    },
    "config_tag_name": {
      "title": "Config Tag Name",
      "type": "string"
    },
    "firing_trigger_ids": {
      "title": "Firing Trigger Ids",
      "type": "string"
    },
    "tag_name": {
      "default": "",
      "title": "Tag Name",
      "type": "string"
    },
    "event_parameters": {
      "default": "[]",
      "title": "Event Parameters",
      "type": "string"
    },
    "send_ecommerce": {
      "default": false,
      "title": "Send Ecommerce",
      "type": "boolean"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "event_name",
    "config_tag_name",
    "firing_trigger_ids"
  ],
  "title": "gtm_build_ga4_event_tagArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_build_google_ads_conversion_tag-55d7c683"></a>

## gtm_build_google_ads_conversion_tag

Handler: Create a Google Ads Conversion Tracking tag in a GTM workspace. Uses GTM v2 \_svc().accounts().containers().workspaces().tags().create.

```text
[READ] Tool tool. Create a Google Ads Conversion Tracking tag in a GTM workspace. Args: account_id: The GTM account ID. container_id: The GTM container ID. workspace_id: The GTM workspace ID. conversion_id: Google Ads conversion ID (numeric, from AW-XXXXXXXXX). conversion_label: Conversion label string. firing_trigger_ids: JSON array of trigger IDs. tag_name: Optional custom tag name. conversion_value: Optional conversion value (leave empty for dynamic). currency_code: Currency code (default USD). order_id: Optional order ID variable (e.g. '{{Transaction ID}}').
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L1156-L1200) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "title": "Workspace Id",
      "type": "string"
    },
    "conversion_id": {
      "title": "Conversion Id",
      "type": "string"
    },
    "conversion_label": {
      "title": "Conversion Label",
      "type": "string"
    },
    "firing_trigger_ids": {
      "title": "Firing Trigger Ids",
      "type": "string"
    },
    "tag_name": {
      "default": "",
      "title": "Tag Name",
      "type": "string"
    },
    "conversion_value": {
      "default": "",
      "title": "Conversion Value",
      "type": "string"
    },
    "currency_code": {
      "default": "USD",
      "title": "Currency Code",
      "type": "string"
    },
    "order_id": {
      "default": "",
      "title": "Order Id",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "conversion_id",
    "conversion_label",
    "firing_trigger_ids"
  ],
  "title": "gtm_build_google_ads_conversion_tagArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_build_google_ads_remarketing_tag-4e71d2dc"></a>

## gtm_build_google_ads_remarketing_tag

Handler: Create a Google Ads Remarketing tag in a GTM workspace. Uses GTM v2 \_svc().accounts().containers().workspaces().tags().create.

```text
[READ] Tool tool. Create a Google Ads Remarketing tag in a GTM workspace. Args: account_id: The GTM account ID. container_id: The GTM container ID. workspace_id: The GTM workspace ID. conversion_id: Google Ads conversion ID (numeric). firing_trigger_ids: JSON array of trigger IDs. tag_name: Optional custom tag name.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L1203-L1232) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "title": "Workspace Id",
      "type": "string"
    },
    "conversion_id": {
      "title": "Conversion Id",
      "type": "string"
    },
    "firing_trigger_ids": {
      "title": "Firing Trigger Ids",
      "type": "string"
    },
    "tag_name": {
      "default": "",
      "title": "Tag Name",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "conversion_id",
    "firing_trigger_ids"
  ],
  "title": "gtm_build_google_ads_remarketing_tagArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_build_conversion_linker_tag-cfca1a13"></a>

## gtm_build_conversion_linker_tag

Handler: Create a Conversion Linker tag in GTM (required for Google Ads conversion tracking). Uses GTM v2 \_svc().accounts().containers().workspaces().tags().create.

```text
[READ] Tool tool. Create a Conversion Linker tag in GTM (required for Google Ads conversion tracking). Args: account_id: The GTM account ID. container_id: The GTM container ID. workspace_id: The GTM workspace ID. firing_trigger_ids: JSON array of trigger IDs (typically All Pages). enable_cross_domain: Enable cross-domain linking. tag_name: Tag name (default: 'Conversion Linker').
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L1235-L1264) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "title": "Workspace Id",
      "type": "string"
    },
    "firing_trigger_ids": {
      "title": "Firing Trigger Ids",
      "type": "string"
    },
    "enable_cross_domain": {
      "default": false,
      "title": "Enable Cross Domain",
      "type": "boolean"
    },
    "tag_name": {
      "default": "Conversion Linker",
      "title": "Tag Name",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "firing_trigger_ids"
  ],
  "title": "gtm_build_conversion_linker_tagArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_build_custom_html_tag-708d7ab9"></a>

## gtm_build_custom_html_tag

Handler: Create a Custom HTML tag in GTM. Uses GTM v2 \_svc().accounts().containers().workspaces().tags().create.

```text
[READ] Tool tool. Create a Custom HTML tag in GTM. Args: account_id: The GTM account ID. container_id: The GTM container ID. workspace_id: The GTM workspace ID. html: The HTML/JavaScript code to inject. firing_trigger_ids: JSON array of trigger IDs. tag_name: Tag name (default: 'Custom HTML').
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L1267-L1298) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "title": "Workspace Id",
      "type": "string"
    },
    "html": {
      "title": "Html",
      "type": "string"
    },
    "firing_trigger_ids": {
      "title": "Firing Trigger Ids",
      "type": "string"
    },
    "tag_name": {
      "default": "Custom HTML",
      "title": "Tag Name",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "html",
    "firing_trigger_ids"
  ],
  "title": "gtm_build_custom_html_tagArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_build_facebook_pixel_tag-75d1e224"></a>

## gtm_build_facebook_pixel_tag

Handler: Create a Facebook/Meta Pixel tag in GTM. Uses GTM v2 \_svc().accounts().containers().workspaces().tags().create.

```text
[READ] Tool tool. Create a Facebook/Meta Pixel tag in GTM. Args: account_id: The GTM account ID. container_id: The GTM container ID. workspace_id: The GTM workspace ID. pixel_id: Facebook Pixel ID. firing_trigger_ids: JSON array of trigger IDs (typically All Pages). tag_name: Optional custom tag name.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L1301-L1343) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "title": "Workspace Id",
      "type": "string"
    },
    "pixel_id": {
      "title": "Pixel Id",
      "type": "string"
    },
    "firing_trigger_ids": {
      "title": "Firing Trigger Ids",
      "type": "string"
    },
    "tag_name": {
      "default": "",
      "title": "Tag Name",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "pixel_id",
    "firing_trigger_ids"
  ],
  "title": "gtm_build_facebook_pixel_tagArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_build_tiktok_pixel_tag-bb295f97"></a>

## gtm_build_tiktok_pixel_tag

Handler: Create a TikTok Pixel tag in GTM. Uses GTM v2 \_svc().accounts().containers().workspaces().tags().create.

```text
[READ] Tool tool. Create a TikTok Pixel tag in GTM. Args: account_id: The GTM account ID. container_id: The GTM container ID. workspace_id: The GTM workspace ID. pixel_id: TikTok Pixel ID. firing_trigger_ids: JSON array of trigger IDs (typically All Pages). tag_name: Optional custom tag name.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L1346-L1389) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "title": "Workspace Id",
      "type": "string"
    },
    "pixel_id": {
      "title": "Pixel Id",
      "type": "string"
    },
    "firing_trigger_ids": {
      "title": "Firing Trigger Ids",
      "type": "string"
    },
    "tag_name": {
      "default": "",
      "title": "Tag Name",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "pixel_id",
    "firing_trigger_ids"
  ],
  "title": "gtm_build_tiktok_pixel_tagArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_build_linkedin_insight_tag-c9d4557d"></a>

## gtm_build_linkedin_insight_tag

Handler: Create a LinkedIn Insight Tag in GTM. Uses GTM v2 \_svc().accounts().containers().workspaces().tags().create.

```text
[READ] Tool tool. Create a LinkedIn Insight Tag in GTM. Args: account_id: The GTM account ID. container_id: The GTM container ID. workspace_id: The GTM workspace ID. partner_id: LinkedIn Partner/Campaign Manager ID. firing_trigger_ids: JSON array of trigger IDs (typically All Pages). tag_name: Optional custom tag name.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L1392-L1434) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "title": "Workspace Id",
      "type": "string"
    },
    "partner_id": {
      "title": "Partner Id",
      "type": "string"
    },
    "firing_trigger_ids": {
      "title": "Firing Trigger Ids",
      "type": "string"
    },
    "tag_name": {
      "default": "",
      "title": "Tag Name",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "partner_id",
    "firing_trigger_ids"
  ],
  "title": "gtm_build_linkedin_insight_tagArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_build_microsoft_clarity_tag-e43b1d1e"></a>

## gtm_build_microsoft_clarity_tag

Handler: Create a Microsoft Clarity tag in GTM. Uses GTM v2 \_svc().accounts().containers().workspaces().tags().create.

```text
[READ] Tool tool. Create a Microsoft Clarity tag in GTM. Args: account_id: The GTM account ID. container_id: The GTM container ID. workspace_id: The GTM workspace ID. project_id: Microsoft Clarity project ID. firing_trigger_ids: JSON array of trigger IDs (typically All Pages). tag_name: Optional custom tag name.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L1437-L1472) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "title": "Workspace Id",
      "type": "string"
    },
    "project_id": {
      "title": "Project Id",
      "type": "string"
    },
    "firing_trigger_ids": {
      "title": "Firing Trigger Ids",
      "type": "string"
    },
    "tag_name": {
      "default": "",
      "title": "Tag Name",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "project_id",
    "firing_trigger_ids"
  ],
  "title": "gtm_build_microsoft_clarity_tagArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_build_pageview_trigger-066d3ea0"></a>

## gtm_build_pageview_trigger

Handler: Create a Pageview trigger in GTM. Optionally filter by URL. Uses GTM v2 \_svc().accounts().containers().workspaces().triggers().create.

```text
[READ] Tool tool. Create a Pageview trigger in GTM. Optionally filter by URL. Args: account_id: The GTM account ID. container_id: The GTM container ID. workspace_id: The GTM workspace ID. name: Trigger name (default: 'All Pages'). url_filter: Optional URL string to filter on (leave empty for all pages). url_filter_type: Filter type: contains | startsWith | endsWith | equals | matchesRegex.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L1479-L1504) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "title": "Workspace Id",
      "type": "string"
    },
    "name": {
      "default": "All Pages",
      "title": "Name",
      "type": "string"
    },
    "url_filter": {
      "default": "",
      "title": "Url Filter",
      "type": "string"
    },
    "url_filter_type": {
      "default": "contains",
      "title": "Url Filter Type",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "title": "gtm_build_pageview_triggerArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_build_custom_event_trigger-8d46b30d"></a>

## gtm_build_custom_event_trigger

Handler: Create a Custom Event trigger in GTM that fires on a specific dataLayer event. Uses GTM v2 \_svc().accounts().containers().workspaces().triggers().create.

```text
[READ] Tool tool. Create a Custom Event trigger in GTM that fires on a specific dataLayer event. Args: account_id: The GTM account ID. container_id: The GTM container ID. workspace_id: The GTM workspace ID. event_name: The dataLayer event name to listen for (e.g. 'form_submit', 'purchase'). name: Optional trigger name (default: 'Event - {event_name}').
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L1507-L1531) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "title": "Workspace Id",
      "type": "string"
    },
    "event_name": {
      "title": "Event Name",
      "type": "string"
    },
    "name": {
      "default": "",
      "title": "Name",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "event_name"
  ],
  "title": "gtm_build_custom_event_triggerArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_build_link_click_trigger-fafeff5d"></a>

## gtm_build_link_click_trigger

Handler: Create a Link Click trigger in GTM. Optionally filter by clicked URL. Uses GTM v2 \_svc().accounts().containers().workspaces().triggers().create.

```text
[READ] Tool tool. Create a Link Click trigger in GTM. Optionally filter by clicked URL. Args: account_id: The GTM account ID. container_id: The GTM container ID. workspace_id: The GTM workspace ID. name: Trigger name. url_filter: Optional URL string to filter on. url_filter_type: Filter type: contains | startsWith | endsWith | equals | matchesRegex. wait_for_tags: Wait for other tags before navigating (useful for conversion tracking).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L1534-L1569) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "title": "Workspace Id",
      "type": "string"
    },
    "name": {
      "default": "All Link Clicks",
      "title": "Name",
      "type": "string"
    },
    "url_filter": {
      "default": "",
      "title": "Url Filter",
      "type": "string"
    },
    "url_filter_type": {
      "default": "contains",
      "title": "Url Filter Type",
      "type": "string"
    },
    "wait_for_tags": {
      "default": false,
      "title": "Wait For Tags",
      "type": "boolean"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "title": "gtm_build_link_click_triggerArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_build_form_submit_trigger-8ab23a63"></a>

## gtm_build_form_submit_trigger

Handler: Create a Form Submission trigger in GTM. Optionally filter by page URL or form ID. Uses GTM v2 \_svc().accounts().containers().workspaces().triggers().create.

```text
[READ] Tool tool. Create a Form Submission trigger in GTM. Optionally filter by page URL or form ID. Args: account_id: The GTM account ID. container_id: The GTM container ID. workspace_id: The GTM workspace ID. name: Trigger name. url_filter: Optional page URL to filter on. form_id_filter: Optional form element ID to filter on (uses 'contains' match). check_validation: Only fire on valid form submissions.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L1572-L1612) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "title": "Workspace Id",
      "type": "string"
    },
    "name": {
      "default": "Form Submission",
      "title": "Name",
      "type": "string"
    },
    "url_filter": {
      "default": "",
      "title": "Url Filter",
      "type": "string"
    },
    "form_id_filter": {
      "default": "",
      "title": "Form Id Filter",
      "type": "string"
    },
    "check_validation": {
      "default": true,
      "title": "Check Validation",
      "type": "boolean"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "title": "gtm_build_form_submit_triggerArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_build_scroll_depth_trigger-4ca35122"></a>

## gtm_build_scroll_depth_trigger

Handler: Create a Scroll Depth trigger in GTM that fires at specific scroll percentages. Uses GTM v2 \_svc().accounts().containers().workspaces().triggers().create.

```text
[READ] Tool tool. Create a Scroll Depth trigger in GTM that fires at specific scroll percentages. Args: account_id: The GTM account ID. container_id: The GTM container ID. workspace_id: The GTM workspace ID. thresholds: JSON array of scroll depth percentages (e.g. [25, 50, 75, 90]). name: Trigger name.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L1615-L1645) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "title": "Workspace Id",
      "type": "string"
    },
    "thresholds": {
      "default": "[25, 50, 75, 90]",
      "title": "Thresholds",
      "type": "string"
    },
    "name": {
      "default": "Scroll Depth",
      "title": "Name",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "title": "gtm_build_scroll_depth_triggerArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_build_datalayer_variable-f7c1558b"></a>

## gtm_build_datalayer_variable

Handler: Create a Data Layer Variable in GTM. Uses GTM v2 \_svc().accounts().containers().workspaces().variables().create.

```text
[READ] Tool tool. Create a Data Layer Variable in GTM. Args: account_id: The GTM account ID. container_id: The GTM container ID. workspace_id: The GTM workspace ID. datalayer_key: The dataLayer key to read (e.g. 'transaction_id', 'ecommerce.purchase.value'). name: Optional variable name (default: 'DLV - {datalayer_key}').
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L1652-L1680) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "title": "Workspace Id",
      "type": "string"
    },
    "datalayer_key": {
      "title": "Datalayer Key",
      "type": "string"
    },
    "name": {
      "default": "",
      "title": "Name",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "datalayer_key"
  ],
  "title": "gtm_build_datalayer_variableArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_build_custom_javascript_variable-fd68f95b"></a>

## gtm_build_custom_javascript_variable

Handler: Create a Custom JavaScript Variable in GTM. Uses GTM v2 \_svc().accounts().containers().workspaces().variables().create.

```text
[READ] Tool tool. Create a Custom JavaScript Variable in GTM. Args: account_id: The GTM account ID. container_id: The GTM container ID. workspace_id: The GTM workspace ID. js_code: JavaScript function body — must be a function() { return ...; } expression. name: Variable name.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L1683-L1707) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "title": "Workspace Id",
      "type": "string"
    },
    "js_code": {
      "title": "Js Code",
      "type": "string"
    },
    "name": {
      "default": "Custom JS Variable",
      "title": "Name",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "js_code"
  ],
  "title": "gtm_build_custom_javascript_variableArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_build_constant_variable-7ea935da"></a>

## gtm_build_constant_variable

Handler: Create a Constant Variable in GTM. Uses GTM v2 \_svc().accounts().containers().workspaces().variables().create.

```text
[READ] Tool tool. Create a Constant Variable in GTM. Args: account_id: The GTM account ID. container_id: The GTM container ID. workspace_id: The GTM workspace ID. value: The constant value to store. name: Variable name (default: 'Constant - {value}').
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L1710-L1734) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "title": "Workspace Id",
      "type": "string"
    },
    "value": {
      "title": "Value",
      "type": "string"
    },
    "name": {
      "default": "",
      "title": "Name",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "value"
  ],
  "title": "gtm_build_constant_variableArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_build_url_variable-aa65effe"></a>

## gtm_build_url_variable

Handler: Create a URL Variable in GTM that extracts a part of the page URL. Uses GTM v2 \_svc().accounts().containers().workspaces().variables().create.

```text
[READ] Tool tool. Create a URL Variable in GTM that extracts a part of the page URL. Args: account_id: The GTM account ID. container_id: The GTM container ID. workspace_id: The GTM workspace ID. component_type: URL component: PROTOCOL | HOST | PATH | QUERY | FRAGMENT | PORT | FULL_URL. name: Variable name (default: 'URL - {component_type}').
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L1737-L1764) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "title": "Workspace Id",
      "type": "string"
    },
    "component_type": {
      "default": "PATH",
      "title": "Component Type",
      "type": "string"
    },
    "name": {
      "default": "",
      "title": "Name",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id"
  ],
  "title": "gtm_build_url_variableArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_setup_ga4_basic-8013e23a"></a>

## gtm_setup_ga4_basic

Handler: One-shot: Set up GA4 basic tracking in GTM. Creates: All Pages pageview trigger + GA4 Config tag with page\_view. Returns the IDs of everything created. Uses GTM v2 svc.accounts().containers().workspaces().triggers().create, svc.accounts().containers().workspaces().tags().create.

```text
[READ] Tool tool. One-shot: Set up GA4 basic tracking in GTM. Creates: All Pages pageview trigger + GA4 Config tag with page_view. Returns the IDs of everything created. Args: account_id: The GTM account ID. container_id: The GTM container ID. workspace_id: The GTM workspace ID. measurement_id: GA4 Measurement ID (G-XXXXXXXXXX).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L1771-L1812) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "title": "Workspace Id",
      "type": "string"
    },
    "measurement_id": {
      "title": "Measurement Id",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "measurement_id"
  ],
  "title": "gtm_setup_ga4_basicArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_setup_google_ads_conversion-58a5b911"></a>

## gtm_setup_google_ads_conversion

Handler: One-shot: Set up Google Ads conversion tracking in GTM. Creates: Thank-you page URL trigger + Conversion Linker tag + Google Ads Conversion tag. Uses GTM v2 svc.accounts().containers().workspaces().triggers().create, svc.accounts().containers().workspaces().tags().create.

```text
[READ] Tool tool. One-shot: Set up Google Ads conversion tracking in GTM. Creates: Thank-you page URL trigger + Conversion Linker tag + Google Ads Conversion tag. Args: account_id: The GTM account ID. container_id: The GTM container ID. workspace_id: The GTM workspace ID. conversion_id: Google Ads conversion ID (numeric, from AW-XXXXXXXXX). conversion_label: Conversion label string. thank_you_url_contains: String that appears in the thank-you page URL. conversion_value: Optional fixed conversion value. currency_code: Currency code (default USD).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/gtm.py#L1815-L1885) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "workspace_id": {
      "title": "Workspace Id",
      "type": "string"
    },
    "conversion_id": {
      "title": "Conversion Id",
      "type": "string"
    },
    "conversion_label": {
      "title": "Conversion Label",
      "type": "string"
    },
    "thank_you_url_contains": {
      "title": "Thank You Url Contains",
      "type": "string"
    },
    "conversion_value": {
      "default": "",
      "title": "Conversion Value",
      "type": "string"
    },
    "currency_code": {
      "default": "USD",
      "title": "Currency Code",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "workspace_id",
    "conversion_id",
    "conversion_label",
    "thank_you_url_contains"
  ],
  "title": "gtm_setup_google_ads_conversionArguments",
  "type": "object"
}
```

</details>

<a id="tool-gtm_action-7110898a"></a>

## gtm_action

Handler: Google Tag Manager handler: calls \_serialize\_tool\_result, current\_user\_ctx.get, RuntimeError, list\_actions, dispatch, payload.get.

```text
Google Tag Manager actions. Start with gtm_list_accounts, then gtm_list_containers and gtm_list_workspaces; tags, triggers and variables live inside a workspace, and changes are only live on the site once a version is created and published. Call `list_actions` first when you need to discover the exact action name, human title, parameter schema, or image/video upload path. For long-running calls, tell the user the current step before invoking the action so the chat does not look stuck.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/slim_mcp.py#L234-L249) · Schema: tools/list.

Exposure: Default slim surface.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "action": {
      "title": "Action",
      "type": "string"
    },
    "params": {
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
      "title": "Params"
    }
  },
  "required": [
    "action"
  ],
  "title": "category_toolArguments",
  "type": "object"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "openWorldHint": true
}
```

</details>
